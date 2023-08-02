<template>
    <component :is="layout">
        <slot />
    </component>
</template>

<script>
import { shallowRef } from '@vue/reactivity';
import { defineComponent } from 'vue';
import DefaultLayout from './DefaultLayout.vue';
export default defineComponent({
  name: "AppLayout",
  data: () => ({
    layout: shallowRef(DefaultLayout)
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`../layouts/${route.meta.layout}.vue`)
          this.layout = shallowRef(component?.default) || shallowRef(DefaultLayout)
        } catch (e) {
          this.layout = shallowRef(DefaultLayout)
        }
      }
    }
  }
});
</script>