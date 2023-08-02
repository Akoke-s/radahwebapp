<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    about: Object
})
</script>
<template>
   <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-8 lg:pt-4">
                    <div class="lg:max-w-lg">
                        <h2 class="text-base font-semibold leading-7 text-red-700 uppercase">{{ props?.about?.pageTitle }}</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ props?.about?.pageSubTitle }}</p>
                        <p class="mt-2 text-lg leading-8 text-gray-60">
                            {{ props?.about?.about }}
                        </p>
                       
                        <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 text-lg lg:max-w-none">
                                <div class="relative pl-9" v-for="(value, idx) in props?.about?.values" :key="idx">
                                    <dt class="inline font-semibold text-gray-900">
                                        <svg class="absolute left-1 top-1 h-5 w-5 text-red-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                        </svg>
                                        {{ value?.title }}.
                                    </dt>
                                    <dd class="inline pl-0.5">{{ value?.text }}</dd>
                                </div>
                            </dl>
                        </dl>
                    </div>
                    <!-- <div class="flex flex-wrap mt-4">
                        <router-link to="/contact-us" class="px-8 py-3 m-2 text-lg font-semibold rounded bg-red-700 text-white rounded-lg uppercase">Get a quote</router-link>
                        <router-link to="/portfolio" class="px-8 py-3 m-2 text-lg font-semibold rounded bg-white text-red-700 rounded-lg uppercase">See our projects</router-link>
                    </div> -->

                    <div class="mt-20">
                        <h2 class="text-base font-semibold leading-7 text-red-700 uppercase">Why Choose Us</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-60"><span class="font-bold text-leading">Expertise</span>: Our team has years of experience in the robotics and drone industry, and we are always up-to-date with the latest technologies and advancements.</p>
                        <p class="mt-6 text-lg leading-8 text-gray-60"><span class="font-bold text-leading">Customization</span>: We take a customized approach to our solutions, working closely with our clients to design and implement solutions that meet their specific needs.</p> 
                        <p class="mt-6 text-lg leading-8 text-gray-60"><span class="font-bold text-leading">Quality</span>: We are committed to delivering the highest quality products and services to our clients, using only the best materials and equipment.</p> 
                        <p class="mt-6 text-lg leading-8 text-gray-60"><span class="font-bold text-leading">Customer service</span>: We pride ourselves on providing exceptional customer service, and our team is always available to answer your questions and provide support.</p>
                        <p class="mt-6 text-lg leading-8 text-gray-60"><span class="font-bold text-leading">Results-driven</span>: Our focus is always on delivering results for our clients, helping them achieve their goals and succeed in their respective industries.</p>                                       
                    </div>
                </div>
                <img
                    alt="drone"
                    :src="props?.about?.image"
                    class="w-[48rem] max-w-none w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" height="900"
                />
            </div>
        </div>
    </div>
</template>