<script setup>
import { defineProps } from 'vue';
import { truncate } from '../helpers';
const props = defineProps({
  services: Array,
  showSection: Boolean,
  showViewMoreBtn: Boolean,
})
</script>

<template>
    <section
        class="overflow-hidden mt-8 mb-4"
    >
        <div class="flex flex-col items-center justify-center" v-if="props.showSection">
            <div>
                <h1 class="uppercase font-bold text-red-700 md:text-2xl">Featured services</h1>
            </div>
            <div>
                <h1 class="capitalize text-gray-700 font-leading text-4xl">services we provide you</h1>
            </div>
        </div>
        <div class=" items-center sm:grid sm:grid-cols-4 grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:items-center mt-8 gap-2">
            <article class="overflow-hidden rounded-lg border border-gray-100 shadow-sm" 
                v-for="(service, idx) in props.services" :key="idx"
            >   
                
                <img
                    :alt="service?.slug"
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    class="h-56 w-full object-cover"
                    v-if="service.main_image_url === null"
                />
                <img
                    v-else
                    :alt="service?.slug"
                    :src="service?.main_image_url"
                    class="h-56 w-full object-cover"
                />

                <div class="p-4 sm:p-6">
                    <router-link 
                        :to="`/services/details/${service.slug}`"
                    >
                        <h3 class="text-sm font-bold text-gray-900">
                            {{service.title}}
                        </h3>
                    </router-link>

                    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        {{ truncate(service.description, 120) }}
                    </p>

                    <router-link
                        :to="`/services/details/${service.slug}`"
                        class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-600"
                    >
                        Find out more

                        <span
                            aria-hidden="true"
                            class="block transition group-hover:translate-x-0.5"
                        >
                            &rarr;
                        </span>
                    </router-link>
                </div>
            </article>

        </div>
        <div class="flex flex-col items-center justify-center" v-if="props.showViewMoreBtn">
            <div class="flex flex-wrap">
                <router-link to="/services" class="px-8 py-3 mt-8 text-lg font-semibold rounded bg-red-500 text-white rounded-lg">View More</router-link>
            </div>
        </div>
    </section>
</template>