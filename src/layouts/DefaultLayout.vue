<template>
    <div class="bg-dark-50">
        <MainHeader />
        <!-- <slot /> -->
        <router-view />
        <FooterComp />
        <button aria-label="scroll to top of the page" role="button" id="scrollTopButton"
            @click="scrollToTop"
            class="invisible fixed z-90 bottom-28 right-8 bg-red-700 w-12 h-12 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-red-800 hover:drop-shadow-2xl hover:animate-bounce duration-500"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue"
  import MainHeader from "../components/shared/MainHeader.vue";
  import FooterComp from '../components/shared/FooterComp.vue';
  export default defineComponent({
    name: "DefaultLayout",
    components: {
        MainHeader,
        FooterComp
    },
    data() {
        return {
        };
    },

    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    onmounted() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollBtn = document.getElementById("scrollTopButton");
            console.log(scrollBtn)
            // if (window.scrollY > 800) {
            //     scrollBtn.classList.remove("invisible");
            // } else {
            //     scrollBtn.classList.add("invisible");
            // }
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },
  });
  </script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@200;300;500;600;700;800&display=swap');

body {
  font-family: 'Oxanium', sans-serif;
}
</style>
