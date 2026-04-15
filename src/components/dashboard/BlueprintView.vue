<script setup lang="ts">
import IconFit from '../shared/icons/IconFit.vue';
import IconMinus from '../shared/icons/IconMinus.vue';
import IconPlus from '../shared/icons/IconPlus.vue';


</script>

<template>
    <div class="w-full rounded-xl bg-[#0F172A70] border border-[#1E293B]">
        <div class="flex p-4 bg-[#1E293B32] border-b border-[#1E293B] gap-2 items-center">
            <div>

            </div>
            <div>
                <p>
                    Clinic Floor Plan
                </p>
            </div>
            <div>
                <IconPlus />
            </div>
            <div>
                <IconMinus />
            </div>
            <div>
                <IconFit />
            </div>
        </div>
        <div>
            <div>
                <div>
                    <div>
                        <img />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
