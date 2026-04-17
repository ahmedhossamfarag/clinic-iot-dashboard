<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/shared/Header.vue';
import MainLayout from '../components/shared/layout/MainLayout.vue';

const searchQuery = ref('');

</script>

<template>
    <MainLayout>
        <Header v-model="searchQuery" search-placeholder="Search Users ..." add-new-text="Add User" />
        <div class="p-8 flex flex-col gap-8 items-stretch">
            <div class="flex gap-6 justify-between items-center">
                <div class="flex flex-col g-2" >
                    <p class="font-black text-3xl text-white">Router Managment</p>
                    <p class="text-base text-gray-500">Monitor and control your connected IoT infrastructure in real time</p>
                </div>
                <div class="py-2 px-4 rounded-2xl bg-[#1E293B80] border border-[#1E293B]">
                    <p class="text-xs text-gray-500 font-bold">TOTAL ONLINE</p>
                    <p class="text-xl font-bold text-[#259DF4]">12</p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </MainLayout>
</template>