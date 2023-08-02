<script setup>
import { services } from '../helpers'
import { useRoute } from 'vue-router'
const route = useRoute();
const service = services.find(s => s.slug === route.params.slug);
</script>

<template>
    <div>
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
                <router-link 
                    to="/services" 
                    class="flex cursor-pointer flex gap-4 font-medium text-red-700 pb-4 transition duration-300 ease-in-out hover:-translate-x-1 hover:scale-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path
                        d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                    </svg>
                    <p class="flex justify-center items-center">Go back</p>
                </router-link>
                <div class="max-w-3xl">
                    <h2 class="text-3xl font-bold sm:text-4xl">
                        {{ service.title }}.
                    </h2>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            :alt="service?.slug"
                            :src="service.main_image_url !== '' ? service?.main_image_url : `https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80`"
                            class="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div class="lg:py-16">
                        <article class="space-y-4 text-gray-600">
                            <p> {{service.description}} </p>

                            <p class="mb-4 text-sm font-bold tracking-widest uppercase" v-if="service?.benefits.length > 0">Benefits</p>
                            <div class="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0" v-if="service?.benefits.length > 0">
                                <ul class="space-y-3">
                                    <li class="flex" v-for="(item, idx) in service.benefits" :key="idx">
                                        <span class="mr-1">
                                            <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                            <p class="mb-4 text-sm font-bold tracking-widest uppercase" v-if="service?.areas.length > 0">Areas</p>
                            <div class="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0" v-if="service?.areas.length > 0">
                                <ul class="space-y-3">
                                    <li class="flex" v-for="(item, idx) in service.areas" :key="idx">
                                        <span class="mr-1">
                                            <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                            </svg>
                                        </span>
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>

                            <p>{{ service?.catchphrase }}</p>
                        </article>
                    </div>
                </div>
            </div>

            <div class="columns-2 md:columns-3 lg:columns-4" v-if="service?.attached_images.length">
                <img class="mb-4" :src="image" v-for="(image, idx) in service?.attached_images" :key="idx" />
            </div>
            </section>

    </div>
</template>