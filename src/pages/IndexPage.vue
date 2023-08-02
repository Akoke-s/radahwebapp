<script setup>
import { ref, onMounted, reactive } from 'vue'
import { services, about } from '../helpers';
import ServicesComp from '../components/ServicesComp.vue';
import { useStore } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useToast } from "vue-toastification";

const store = useStore()
const toast = useToast()

onMounted(() => {
    if(store.state.menu) {
        store.commit('toggleMenu')
    }
})

const data = reactive({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
})

const rules = {
    firstname: { required },
    lastname: { required },
    email: { required, email },
    message: { required }
}

const v$ = useVuelidate(rules, data)

const serviceComponentKey = ref(0)
const submitted = ref(false);
const loading = ref(false);
const error = ref();
const herotofuEndpoint = process.env.VUE_APP_HEROTOFU_ENDPOINT

serviceComponentKey.value += 1

const sendMail = () => {
    loading.value = true
    const isFormCorrect = v$.value.$validate()

    if(!isFormCorrect)
    {
        return
    } else {
        setTimeout(() => {
            submitted.value = true;
        }, 2000);

        if(submitted.value) {
            toast.success("Message sent successfully")
        }
        // loading.value = false
        error.value = undefined;

        fetch(herotofuEndpoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.status === 422) {
                throw new Error("Are you robot?");
            }
            if (response.status !== 200) {
                
                throw new Error(`${response.statusText} (${response.status})`);
            }
            
            resetForm()

            return response.json();
        }).then(() => {
            submitted.value = true
            toast.success("Message sent successfully")
        }).catch((err) => {
            error.value = err.toString();
            toast.error("Message could not be sent successfully")
        }).finally(() => loading.value = false)
    }
}

const resetForm = () => {
    data.firstname = "";
    data.lastname = ""
    data.email = ""
    data.message = ""
    v$.value.$reset()
    return
}
</script>

<template>
    <div>
        <section class="dark:bg-gray-500 text-white relative bg-[url(https://images.unsplash.com/photo-1554248889-15c8ca7dbba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80)] bg-cover bg-center bg-no-repeat">
            <div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
                <h1 class="text-4xl font-bold leading-none sm:text-5xl uppercase">The
                    <span class="dark:text-red-600 text-red-600">world</span> of
                    <span class="dark:text-red-600 text-red-600">Technology</span>
                </h1>
                <p class="px-8 mt-8 mb-12 text-lg text-white">Inspiring the future through technology!</p>
                <div class="flex flex-wrap justify-center">
                    <a href="#contactForm" class="px-8 py-3 m-2 text-lg font-semibold rounded bg-red-600 text-white rounded-lg">Make Inquiry</a>
                </div>
            </div>
        </section>

        <div class="overflow-y-hidden dark:bg-gray-900 shadow-md">
            <div class="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6">
                    <div class="group p-6 bg-gray-50 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden dark:text-white text-gray-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden dark:text-white text-gray-800 dark:block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                        <p class="text-xl text-gray-800 dark:text-white font-semibold leading-5 mt-6 mb-6">Innovation</p>
                        <router-link to="/our-company" class="cursor-pointer text-base dark:text-white leading-4 dark:border-white font-medium text-red-600 group-hover:underline border-red-700 hover:text-red-600 mt-4">Learn More</router-link>
                    </div>
                    <div class="group p-6 bg-gray-50 dark:bg-gray-800">
                        <img class="dark:hidden w-6 h-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-7-svg2.svg" alt="STEM Robotics & Drone Technology">
                        <img class="hidden dark:block w-6 h-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-7-svg2dark.svg" alt="STEM Robotics & Drone Technology">
                        <p class="text-xl text-gray-800 dark:text-white font-semibold leading-5 mt-6 mb-6">Quality</p> 
                        <router-link to="/our-company" class="cursor-pointer text-base dark:text-white leading-4 dark:border-white font-medium text-red-600 group-hover:underline border-red-700 hover:text-red-600 mt-4">Learn More</router-link>
                    </div>
                    <div class="group p-6 bg-gray-50 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="dark:hidden dark:text-white text-gray-800 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden dark:block dark:text-white text-gray-800 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        <p class="text-xl text-gray-800 dark:text-white font-semibold leading-5 mt-6 mb-4">Professionalism</p>
                        <router-link to="/our-company" class="cursor-pointer text-base dark:text-white leading-4 dark:border-white font-medium text-red-600 group-hover:underline border-red-700 hover:text-red-600 mt-4">Learn More</router-link>
                    </div>
                </div>
            </div>
        </div>

        <section
            class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center mb-4"
        >
            <div class="p-8 md:p-12 lg:px-16 lg:py-24 ml-11">
                <div class="mx-auto max-w-xl text-center sm:text-left">
                    <h2 class="font-bold text-red-700 md:text-2xl uppercase">
                        About us
                    </h2>

                    <p class="text-4xl text-gray-500 md:mt-4 md:block">
                        Inspiring the future.
                    </p>

                    <p class="text-sm text-gray-500 md:mt-4 md:block">
                        We are bridging the gap between the tech workspace while inspiring the future.
                    </p>

                    <div class="mt-4 md:mt-8 mb-4">
                        <div class="flex flex-col space-y-2">
                            <div class="flex gap-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-gray-700">1k+ Clients World Wide</p>
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-gray-700">Achieved awards</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap">
                                <router-link to="/our-company" class="px-8 py-3 mt-8 text-lg font-semibold rounded bg-red-500 text-white rounded-lg">Read More</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img
                alt="Jelleke Vanooteghem - unsplash"
                src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px] mb-4"
            />
        </section>

        <ServicesComp 
            :services="services.slice(0, 4)"
            :key="serviceComponentKey"
            :showSection="true"
            :showViewMoreBtn="true"
        />

        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div>
                    <p class="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

                    <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Chat to our friendly team</h1>

                    <p class="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                </div>

                <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
                        <div>
                            <span class="inline-block p-3 text-red-600 rounded-full bg-red-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>

                            <h2 class="text-base font-medium text-gray-800 dark:text-white">Email</h2>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                            <a :href="`mailto:${about.email}`" class="mt-2 text-sm text-red-600 dark:text-red-600">info@radahtech.com</a>
                        </div>

                        <!-- <div>
                            <span class="inline-block p-3 text-red-500 rounded-full bg-red-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 class="text-base font-medium text-gray-800 dark:text-white">Live chat</h2>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                            <p class="mt-2 text-sm text-red-500 dark:text-red-500">Start new chat</p>
                        </div> -->

                        <div>
                            <span class="inline-block p-3 text-red-600 rounded-full bg-red-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 class="text-base font-medium text-gray-800 dark:text-white">Office</h2>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                            <a :href="`http://maps.google.com/?q=${about.address}`" target="_blank" class="mt-2 text-sm text-red-600 dark:text-red-600">King Turner Crescent Wuye, FCT, Abuja</a>
                        </div>

                        <div>
                            <span class="inline-block p-3 text-red-600 rounded-full bg-red-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </span>
                            
                            <h2 class="text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                            <a :href="`tel:${about.phone1}`" class="mt-2 text-sm text-red-600 dark:text-red-600">+2349037429789</a>
                        </div>
                    </div>

                    <div class="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8" id="contactForm">
                        <form :action="herotofuEndpoint" @submit.prevent="sendMail" method="POST">
                            <div class="-mx-2 md:items-center md:flex">
                                <div class="flex-1 px-2">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input
                                        v-model="data.firstname"
                                        @blur="v$.firstname.$touch"
                                        type="text" 
                                        name="firstname"
                                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                    />
                                    <div v-if="v$.firstname.$error" class="error-msg text-red-500 text-sm">Firstname cannot be empty.</div>
                                </div>

                                <div class="flex-1 px-2 mt-4 md:mt-0">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                    <input 
                                        v-model="data.lastname"
                                        @blur="v$.lastname.$touch"
                                        type="text" 
                                        name="lastname"
                                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                    />
                                    <div v-if="v$.lastname.$error" class="error-msg text-red-500 text-sm">Lastname cannot be empty.</div>
                                </div>
                            </div>

                            <div class="mt-4">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input 
                                    v-model="data.email"
                                    @blur="v$.email.$touch"
                                    type="email"
                                    name="email"
                                    class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                />
                                <div
                                    v-for="error of v$.email.$errors"
                                    :key="error.$uid"
                                    class="error-msg text-red-500 text-sm"
                                >
                                    <p>{{ error.$message }}</p>
                                </div>
                            </div>

                            <div class="w-full mt-4">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea 
                                    v-model="data.message"
                                    @blur="v$.message.$touch"
                                    name="message"
                                    class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                            </div>
                            <div v-if="v$.message.$error" class="error-msg text-red-500 text-sm">You cannot send an empty message.</div>
                            
                            <button 
                                v-if="loading" 
                                :disabled="loading" 
                                :class="{'opacity-50 disabled-btn': loading}" 
                                type="button" 
                                class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
                            >
                                <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                                </svg>
                                Loading...
                            </button>
                            
                            <button v-else type="submit" class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                                Send message
                            </button>

                            <div>
                                <div class="mt-2 text-white text-right text-xs">
                                by
                                <a href="https://herotofu.com" class="hover:underline" target="_blank"
                                    >HeroTofu</a
                                >
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
