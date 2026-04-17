<script setup lang="ts">
import DashboardHeader from '../components/dashboard/DashboardHeader.vue';
import MainLayout from '../components/shared/layout/MainLayout.vue';
import Card from '../components/dashboard/Card.vue';
import IconRouter from '../components/shared/icons/IconRouter.vue';
import IconDevice from '../components/shared/icons/IconDevice.vue';
import BlueprintView from '../components/dashboard/BlueprintView.vue';

</script>

<template>
    <MainLayout>
        <DashboardHeader />
        <div class="p-8 flex flex-col gap-8 items-stretch">
            <div class="flex gap-6">
                <Card title="Active Routers" :icon="IconRouter" :text="'12 / 14'" icon-color="#259DF4"
                    icon-bg="#259DF416" />
                <Card title="Active Routers" :icon="IconDevice" :text="'142 / 150'" icon-color="#10B981"
                    icon-bg="#10B98116" />
            </div>
            <div>
                <BlueprintView />
            </div>
        </div>
    </MainLayout>
</template>