<script setup>
import { reactive, defineEmits } from "vue";
// import { VueRecaptcha, useRecaptcha } from "vue3-recaptcha-v2";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
// const recaptchaWidget = ref(null);
// const enableSubmitBtn = ref(false)
// const loading = ref(false)
// const callbackVerify = (response) => {
//     console.log(response);
//     if(response.length > 0) {
//         enableSubmitBtn.value = true
//     }
// };
// const callbackExpired = () => {
//     console.log("expired!");
// };
// const callbackFail = () => {
//     console.log("fail");
// };

const form = reactive({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    // captcha: false
})

const rules = {
    firstname: { required },
    lastname: { required },
    email: { required, email },
    message: { required },
    // captcha: sameAs(true)
}

const v$ = useVuelidate(rules, form)

const emit = defineEmits(['close'])
const closeModal = () => {
    emit('close')
}

const handleSubmit = async () => {
    const isFormCorrect = v$.value.$validate()

    if (!isFormCorrect) return
}
</script>
<template>
     <div class="p-4 py-6 rounded-lg md:p-8">
        <form @submit.prevent="handleSubmit">
            <div class="-mx-2 md:items-center md:flex">
                <div class="flex-1 px-2">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-600">First Name</label>
                    <input 
                        v-model="form.firstname"
                        @blur="v$.firstname.$touch"
                        type="text" 
                        placeholder=" "
                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                    />
                    <div v-if="v$.firstname.$error" class="error-msg text-red-500 text-sm">Firstname cannot be empty.</div>
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-600">Last Name</label>
                    <input 
                        v-model="form.lastname"
                        @blur="v$.lastname.$touch"
                        type="text" 
                        placeholder=" "
                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                    />
                    <div v-if="v$.lastname.$error" class="error-msg text-red-500 text-sm">Lastname cannot be empty.</div>
                </div>
            </div>

            <div class="mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-600">Email address</label>
                <input 
                    v-model="form.email"
                    @blur="v$.email.$touch"
                    type="text" 
                    placeholder=" "
                    class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                />
                <div v-if="v$.email.$error" class="error-msg text-red-500 text-sm">Please provide a valid email address.</div>
            </div>

            <div class="w-full mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-600">Message</label>
                <textarea 
                    v-model="form.message"
                    @blur="v$.message.$touch"
                    class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"
                >
                </textarea>
                <div v-if="v$.message.$error" class="error-msg text-red-500 text-sm">The message body cannot be empty.</div>
            </div>
            <div class="mt-4">
                <!-- <vue-recaptcha
                    v-model="form.captcha"
                    @change="$v.captcha.$touch()"
                    theme="light"
                    size="normal"
                    :tabindex="0"
                    @widgetId="recaptchaWidget = $event"
                    @verify="callbackVerify($event)"
                    @expired="callbackExpired()"
                    @fail="callbackFail()"
                /> -->
                <!-- <div v-if="v$.captcha.$error" class="error-msg text-red-500 text-sm">Please prove you are not a robot.</div> -->
            </div>
            <div class="mt-4 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <!-- <button 
                    v-if="loading" 
                    :disabled="loading" 
                    :class="{'opacity-50 disabled-btn': loading}" 
                    type="button" 
                    class=
                    "
                        w-full 
                        px-3
                        py-2 
                        text-white 
                        font-semibold 
                        tracking-wide 
                        capitalize 
                        transition-colors 
                        duration-300 
                        transform 
                        bg-red-600 
                        rounded-md
                        hover:bg-red-500 
                        focus:ring-4 
                        focus:outline-none 
                        focus:ring-blue-300 
                        text-sm 
                        text-center 
                        mr-2 
                        dark:bg-red-600 
                        dark:hover:bg-red-500 
                        dark:focus:ring-red-300 
                        inline-flex 
                        justify-center 
                        focus:ring-opacity-50 
                        items-center
                        shadow-sm
                        sm:ml-3 
                        sm:w-auto
                    "
                >
                    <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                    </svg>
                    Loading...
                </button> -->
                <button
                    type="submit" 
                    class=
                    "
                        inline-flex 
                        w-full 
                        justify-center 
                        rounded-md 
                        bg-red-600 
                        px-3 
                        py-2 
                        text-sm 
                        font-semibold 
                        text-white 
                        shadow-sm 
                        hover:bg-red-500 
                        sm:ml-3 
                        sm:w-auto
                        cursor-pointer
                    ">Send</button>
                <button @click.prevent="closeModal" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
        </form>
    </div>
</template>