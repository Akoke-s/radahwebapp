import DefaultLayout from '../layouts/DefaultLayout.vue'
export const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "HomePage",
                component: () => import('../pages/IndexPage.vue'),
                meta: {
                    requireAuth: false,
                    name: "Inspiring the future",
                }
            },

            {
                path: '/company',
                name: "About",
                component: () => import('../pages/AboutPage.vue'),
                meta: {
                    requireAuth: false,
                    name: "About us",
                }
            },
            {
                path: '/services',
                name: "Services",
                component: () => import('../pages/ServicesPage.vue'),
                meta: {
                    requireAuth: false,
                    name: "The services we offer",
                }
            },
            {
                path: '/services/details/:slug',
                name: "ServiceDetails",
                component: () => import('../pages/ServiceDetailsPage.vue'),
                meta: {
                    requireAuth: false,
                    name: "Service details",
                }
            },
            {
                path: '/portfolio',
                name: "Portfolio",
                component: () => import('../pages/PortfolioPage.vue'),
                meta: {
                    requireAuth: false,
                    name: "Our works",
                }
            },
            {
                path: '/contact',
                name: "Contact",
                component: () => import('../pages/ContactPage.vue'),
                meta: {
                    requireAuth: false,
                    name: "Get in touch",
                }
            },
        ],
        
    },
    {
        path: '/:catchAll(.*)', 
        name: 'NotFound',
        component: () => import('../pages/NotFoundComponent.vue'),
        meta: {
            requireAuth: false,
            name: "Page Not Found",
        }
    }
]

export default routes;
