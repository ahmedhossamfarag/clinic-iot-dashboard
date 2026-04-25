<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Header from '../components/shared/Header.vue';
import MainLayout from '../components/shared/layout/MainLayout.vue';
import RouterCard from '../components/router-managment/RouterCard.vue';
import { useRouters, useRouterStatus } from '../utils/hooks/routers';
import PlaceHolder from '../components/shared/layout/PlaceHolder.vue';

const { routers, loading, fetchRouters } = useRouters();
const { routersStatus, loading: statusLoading, fetchRoutersStatus } = useRouterStatus();

const searchQuery = ref('');
const selectedStatus = ref('all');

const filteredRouters = computed(() => {
    let res = routers.value;
    if (searchQuery.value)
        res = routers.value?.filter(router => router.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    if (routersStatus.value && selectedStatus.value !== 'all')
        res = res?.filter(router => routersStatus.value?.[router.id] === selectedStatus.value)
    return res
});


onMounted(() => {
    fetchRouters();
    fetchRoutersStatus();
});

</script>

<template>
    <MainLayout>
        <Header v-model="searchQuery" search-placeholder="Search Routers ..." add-new-text="Add Router" />
        <div class="p-8 flex flex-col gap-8 items-stretch">
            <div class="flex gap-6 justify-between items-center">
                <div class="flex flex-col g-2">
                    <p class="font-black text-3xl text-white">Router Managment</p>
                    <p class="text-base text-gray-500">Monitor and control your connected IoT infrastructure in real
                        time</p>
                </div>
                <div class="py-2 px-4 rounded-2xl bg-[#1E293B80] border border-[#1E293B]">
                    <p class="text-xs text-gray-500 font-bold">TOTAL ONLINE</p>
                    <p class="text-xl font-bold text-[#259DF4]">{{ routers?.length }}</p>
                </div>
            </div>
            <div>
                <div class="flex items-center gap-5">
                    <!-- All Routers -->
                    <button @click="selectedStatus = 'all'" :class="selectedStatus === 'all'
                        ? 'bg-sky-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'"
                        class="rounded-full px-4 py-1 font-medium transition-all duration-200">
                        All Routers
                    </button>

                    <!-- Active -->
                    <button @click="selectedStatus = 'ACTIVE'" :class="selectedStatus === 'ACTIVE'
                        ? 'bg-sky-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'"
                        class="rounded-full px-4 py-1 font-medium transition-all duration-200">
                        Active
                    </button>

                    <!-- Idle -->
                    <button @click="selectedStatus = 'IDLE'" :class="selectedStatus === 'IDLE'
                        ? 'bg-sky-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'"
                        class="rounded-full px-4 py-1 font-medium transition-all duration-200">
                        Idle
                    </button>

                    <!-- Divider -->
                    <div class="ml-3 h-7 w-px bg-slate-700"></div>
                </div>
            </div>
            <PlaceHolder v-if="loading || statusLoading" class="h-120" />
            <div>
                <div v-if="routers && routersStatus" class="flex gap-6 flex-wrap">
                    <RouterCard v-for="router in filteredRouters" :key="router.id"
                        :node="{ id: router.id, name: router.name, status: routersStatus?.[router.id] || 'IDLE' }" />
                </div>
            </div>
        </div>
    </MainLayout>
</template>