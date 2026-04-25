<script setup lang="ts">
import { onMounted, type PropType } from 'vue'
import type { RouterMapEntry } from '../../utils/types'
import { useBlueprint } from '../../utils/hooks/settings';
defineProps({
    items: {
        type: Array as PropType<RouterMapEntry[]> | undefined,
        default: undefined
    }
})
const { blueprintUrl, fetchBlueprint } = useBlueprint()

onMounted(() => fetchBlueprint())

</script>

<template>
    <div class="relative">
        <img class="w-full" :src="blueprintUrl || '/blueprint.png'" />
        <div v-for="item in items" :key="item.id" class="absolute flex gap-3"
            :style="{ top: `${item.location_x * 100}%`, left: `${item.location_y * 100}%` }">
            <div class="w-2 h-2 rounded-full bg-green-300 outline-8 outline-green-100"></div>
            <div class="bg-[#334155] rounded-full py-1 px-2 text-white text-base min-w-8 text-center">
                {{ item.connected_devices_count }}
            </div>
        </div>
    </div>
</template>