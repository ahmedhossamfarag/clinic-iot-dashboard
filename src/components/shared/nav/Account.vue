<script setup lang="ts">
import { useAccount } from '../../../utils/hooks/account';
import PlaceHolder from '../layout/PlaceHolder.vue';
const account = useAccount();

</script>

<template>
    <div class="p-4 flex gap-3 items-center border-t border-[#1E293B]">
        <PlaceHolder v-if="account === undefined" class="h-13" />
        <template v-else>
            <div class="rounded-full overflow-hidden">
                <img width="32" height="32" src="/user-avatar.png" />
            </div>
            <div class="flex flex-col">
                <div>
                    <p class="font-medium text-white text-sm">{{ account.name }}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600">System Admin</p>
                </div>
            </div>
        </template>
    </div>
</template>