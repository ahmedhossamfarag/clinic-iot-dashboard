<script setup lang="ts">
import { ref } from 'vue';
import router from '../../router';

const user = ref({
    hospitalName: '',
    adminName: '',
    adminEmail: '',
    adminPassword: ''
})

const sumbitForm = () => {
    // TODO
    router.push({ name: 'dashboard' })
}


</script>

<template>
    <div
        class=" w-122 flex flex-col justify-stretch gap-8 p-10 rounded-lg border border-[#259DF430] shadow-2xl shadow-[#00000040]">
        <div class="flex flex-col gap-2">
            <p class="text-white text-3xl font-bold">
                Facility Onboarding
            </p>
            <p class="text-[14px] text-[#94A3B8]">
                Register your hospital for the AI monitoring suite
            </p>
        </div>
        <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-2.5">
                <p class="text-[14px] text-[#CBD5E1] font-medium">Hospital Name</p>
                <div class="relative">
                    <input v-model="user.hospitalName" placeholder="St. Margaret's Medical Centre" />
                </div>
            </div>
            <div class="flex flex-col gap-2.5">
                <p class="text-[14px] text-[#CBD5E1] font-medium">Admin Name</p>
                <div class="relative">
                    <input v-model="user.adminName" placeholder="Dr. John Doe" />
                </div>
            </div>
            <div class="flex flex-col gap-2.5">
                <p class="text-[14px] text-[#CBD5E1] font-medium">Admin Email</p>
                <div class="relative">
                    <input v-model="user.adminEmail" type="email" placeholder="johndoe@gmail.com" />
                </div>
            </div>
            <div class="flex flex-col gap-2.5">
                <p class="text-[14px] text-[#CBD5E1] font-medium">Admin Password</p>
                <div class="relative">
                    <input v-model="user.adminPassword" type="password" placeholder="••••••••" />
                </div>
            </div>
            <div>
                <button @click="sumbitForm"
                    class="text-white flex items-center gap-2 justify-center w-full bg-[#334155] p-4 rounded-lg shadow">
                    Register Facility Access
                </button>
            </div>
        </div>
    </div>
</template>