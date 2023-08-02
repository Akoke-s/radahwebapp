import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
    linkActiveClass: 'radah-active-link'
})

router.beforeEach((to, from, next) => {
    document.title = to.params.slug || to.meta.name + " - Radah Tech"
    next()
})


export default router;