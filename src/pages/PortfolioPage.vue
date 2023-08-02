<script setup>
import { onMounted } from 'vue';
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
        
    </div>
</template>