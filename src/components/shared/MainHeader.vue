<template>
    <div class="sticky top-0 z-30 shadow-lg">
        <div class="bg-white">
            <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true" v-if="store.state.menu">
                <div class="fixed inset-0 bg-black bg-opacity-25"></div>
                    <div class="fixed inset-0 z-40 flex">
                        <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" >
                            <div class="flex px-4 pt-5 pb-2">
                                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="toggleNavigation()">
                                    <span class="sr-only">Close menu</span>
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                                <div class="flow-root">
                                    <router-link to="/" class="-m-2 block p-2 font-medium text-gray-900">Home</router-link>
                                </div>
                                <div class="flow-root">
                                    <router-link to="/company" class="-m-2 block p-2 font-medium text-gray-900">About</router-link>
                                </div>
                                <div class="flow-root">
                                    <router-link to="/services" class="-m-2 block p-2 font-medium text-gray-900">Services</router-link>
                                </div>

                                <!-- <div class="flow-root">
                                    <router-link to="/portfolio" class="-m-2 block p-2 font-medium text-gray-900">Projects</router-link>
                                </div> -->
                                <div class="flow-root">
                                    <router-link to="/contact" class="-m-2 block p-2 font-medium text-gray-900">Contact Us</router-link>
                                </div>
                            </div>

                            <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <header class="relative bg-white">
                    <div class="md:hidden sm:hidden hidden lg:flex ml-4 flex lg:ml-0 items-center justify-center">
                        <a :href="`http://maps.google.com/?q=${about.address}`" target="_blank" class="flex h-10 items-center justify-center px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8">King Turner Crescent Wuye, FCT, Abuja</a>
                        <a :href="`mailto:${about.email}`" class="flex h-10 items-center justify-center px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8">info@radahtech.com</a>
                        <a :href="`tel:${about.phone1}`" class="flex h-10 items-center justify-center px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8">+2349037429789</a>
                    </div>
                    

                    <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="">
                            <div class="flex h-20 items-center">
                                <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
                                <button type="button" class="rounded-md bg-white p-2 text-gray-400 lg:hidden" @click="toggleNavigation()">
                                    <span class="sr-only">Open menu</span>
                                    <!-- Heroicon name: outline/bars-3 -->
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>

                                <!-- Logo -->
                                <div class="ml-4 flex lg:ml-0">
                                    <a href="#">
                                        <div class="hidden lg:block cursor-pointer text-xl font-bold text-gray-800 transition-colors duration-300" role="img" aria-label="Radah Tech. Logo.">
                                            <!-- Radah Tech -->
                                             <img height="" width="120" src="../../assets/logo.png" alt="logo">
                                        </div>
                                        <div class="hidden md:block lg:hidden cursor-pointer text-xl font-bold text-gray-800  transition-colors duration-300" role="img" aria-label="Radah Tech. Logo.">
                                            <!-- Radah Tech -->
                                            <img height="" width="120" src="../../assets/logo.png" alt="logo">
                                        </div>
                                        <div class="md:hidden cursor-pointer text-xl font-bold text-gray-800  transition-colors duration-300" role="img" aria-label="Radah Tech. Logo.">
                                            <!-- Radah Tech -->
                                            <img height="" width="120" src="../../assets/logo.png" alt="logo">
                                        </div>
                                    </a>
                                </div>

                                <!-- Flyout menus -->
                                <div class="hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div class="flex h-full space-x-8">
                                    <div class="flex">
                                        <div class="relative flex">
                                            <router-link to="/" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Home</router-link>
                                        </div>
                                        <div class="absolute inset-x-0 top-full text-sm text-gray-500">
                                         <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                                        </div>
                                    </div>

                                    <div class="flex">
                                        <div class="relative flex">
                                            <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                                            <router-link to="/company" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">About</router-link>
                                        </div>

                                        <div class="absolute inset-x-0 top-full text-sm text-gray-500">
                                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                                        </div>
                                    </div>
                                    <router-link to="/services" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Services</router-link>
                                    <!-- <router-link to="/portfolio" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Projects</router-link> -->

                                    <router-link to="/contact" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Contact Us</router-link>
                                </div>
                            </div>

                            <!-- <div class="ml-auto flex items-center">
                                <div class="flex lg:ml-6">
                                    <a @click="openSearch = !openSearch" class="cursor-pointer p-2 text-gray-400 hover:text-gray-500">
                                        <span class="sr-only">Search</span>
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </a>
                                </div>

                            </div> -->
                        </div>
                    </div>
                    <!-- <div class="mt-4 pb-4 flex justify-center items-center space-x-3" v-if="openSearch">
                        <div>
                            <svg class="fill-stroke text-gray-600 dark:text-white" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.0004 19.0004L14.6504 14.6504" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <input type="search" placeholder="Search here" class="w-full focus:outline-none bg-transparent text-sm text-gray-600" />
                        <div>
                            <button class="block rounded font-medium shadow focus:outline-none focus:ring bg-red-700 px-4 py-2 text-white">Search</button>
                        </div>
                        <div>
                            <button @click="(openSearch = !openSearch)" class="px-4 py-3 text-gray-900 underline">Cancel</button>
                        </div>
                    </div> -->
                </nav>
            </header>
        </div>
    </div>
    
</template>

<script setup>
// import { ref } from 'vue';
import { about } from '../../helpers';
import { useStore } from 'vuex'
const store = useStore()
// const menu = store.state.menu

const toggleNavigation = () => {
    store.commit('toggleMenu')
}
// const openSearch = ref(false)
</script>

<style lang="css" scoped>
#nav .habi-active-link {
    color: rgb(185 28 28);;
    border-bottom: 3px solid rgb(185 28 28);;
    opacity: 50;
}
</style>

