<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { services } from '../helpers';
import ServicesComp from '../components/ServicesComp.vue';

const serviceComponentKey = ref(0)

serviceComponentKey.value += 1

const store = useStore()

onMounted(() => {
    if(store.state.menu) {
        store.commit('toggleMenu')
    }
})
</script>
<template>
    <div>
        <div class="mx-auto max-w-2xl lg:text-center text-center mt-8">
            <h2 class="text-base font-semibold leading-7 text-red-700 md:text-2xl uppercase">Our Services</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl capitalize">All our services bundled up in a single page</p>
        </div>
        <ServicesComp 
            :services="services"
            :key="serviceComponentKey"
            :showSection="false"
            :showViewMoreBtn="false"
         />
    </div>
</template>