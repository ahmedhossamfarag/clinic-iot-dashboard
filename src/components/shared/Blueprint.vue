<script setup lang="ts">
import type { PropType } from 'vue'
import type {RouterMap} from '../../utils/hooks/routers'
    defineProps({
        items: {
            type: Array as PropType<RouterMap[]> | undefined,
            default: undefined
        }
    })
</script>

<template>
    <div class="relative">
        <img class="w-full" src="/blueprint.png" />
        <div class="absolute flex gap-3" :style="{top: '25%', left: '15%'}">
            <div class="w-2 h-2 rounded-full bg-green-300 outline-8 outline-green-100" ></div>
            <div class="bg-[#334155] rounded-full py-1 px-2 text-white text-base">
                12
            </div>
        </div>
    </div>
</template>