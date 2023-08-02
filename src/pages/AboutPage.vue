<script setup>
import { onMounted } from 'vue'
import AboutComp from '../components/AboutComp.vue';
import { about } from '../helpers';
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
    if(store.state.menu) {
        store.commit('toggleMenu')
    }
})
</script>
<template>
    <div>
        <AboutComp :about="about" />
    </div>
</template>