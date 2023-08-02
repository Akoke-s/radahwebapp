<script>
import { defineComponent } from 'vue';
import ContactForm from '../ContactForm.vue';
export default defineComponent({
    name: "ModalComp",
    components: {
        ContactForm
    },
    props: {
        showing: {
            required: true,
            type: Boolean
        }
    },
    watch: {
        showing(value) {
        if (value) {
            return document.querySelector('body').classList.add('overflow-hidden');
        }
    
        document.querySelector('body').classList.remove('overflow-hidden');
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
})
</script>

<template>
    <Transition name="fade">
        <div
            v-if="showing"
            class="z-40 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true"
            @click.self="close"
        >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div 
                class="sm:h-[calc(100%-3rem)] max-w-lg my-6 mx-auto relative w-auto pointer-events-none"
            >
                <div 
                    class="max-h-full overflow-auto border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
                >
                    <div
                        class="flex flex-shrink-0 items-center justify-between p-4 rounded-t-md"
                    >
                        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                            
                        </h5>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="w-6 h-6 cursor-pointer"
                            @click.prevent="close"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        
                    </div>
                    <div class="flex-auto overflow-y-auto relative p-4">
                        <ContactForm @close="close" />
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>