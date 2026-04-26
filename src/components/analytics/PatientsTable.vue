<script setup lang="ts">
import type { DeviceWithRouterInfo } from '../../utils/types';


const props = defineProps<{
  devices: DeviceWithRouterInfo[]
  totalUsers?: number
}>();

// Helper to generate initials or placeholder colors based on name
const getAvatarColor = (name: string) => {
  const colors = ['bg-orange-200', 'bg-beige-100', 'bg-slate-100', 'bg-gray-300'];
  const index = name.length % colors.length;
  return colors[index];
};

// Mock status logic (since not in interface, defaulting to active/idle)
const getStatus = (timestamp: string) => {
  if (timestamp.includes('hour') || timestamp.includes('day')) return { label: 'Idle', class: 'text-orange-400 bg-orange-400/10 border-orange-400/20' };
  if (timestamp.includes('offline')) return { label: 'Offline', class: 'text-rose-400 bg-rose-400/10 border-rose-400/20' };
  return { label: 'Active', class: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' };
};
</script>

<template>
  <div class="w-full bg-[#111827] text-slate-300 p-6 rounded-xl font-sans border border-slate-800">
    <div class="flex justify-between items-start mb-8">
      <div>
        <h2 class="text-xl font-semibold text-white">Tracked Active Users</h2>
        <p class="text-sm text-slate-500">Real-time geolocation and device health</p>
      </div>
      <div class="flex gap-3">
        <button class="flex items-center gap-2 px-4 py-2 bg-[#1f2937] hover:bg-slate-700 rounded-lg text-sm transition-colors border border-slate-700">
          <Filter :size="16" /> Filter
        </button>
        <button class="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-medium transition-colors">
          <Download :size="16" /> Export
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="text-[11px] uppercase tracking-wider text-slate-500 border-b border-slate-800">
            <th class="pb-4 font-semibold">User Details</th>
            <th class="pb-4 font-semibold">Last Location</th>
            <th class="pb-4 font-semibold text-center">Status</th>
            <th class="pb-4 font-semibold">Device Info</th>
            <th class="pb-4 font-semibold">Last Update</th>
            <th class="pb-4"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/50">
          <tr v-for="device in devices" :key="device.id" class="group hover:bg-slate-800/30 transition-colors">
            <td class="py-4">
              <div class="flex items-center gap-3">
                <div :class="['w-10 h-10 rounded-full shrink-0', getAvatarColor(device.holder_name)]"></div>
                <div class="flex flex-col">
                  <span class="text-sm font-medium text-white">{{ device.holder_name }}</span>
                  <span class="text-xs text-slate-500">{{ device.id }}</span>
                </div>
              </div>
            </td>

            <td class="py-4">
              <div class="flex items-center gap-2 text-sm">
                <MapPin :size="14" class="text-slate-500" />
                <span>{{ device.router_name }}</span>
              </div>
            </td>

            <td class="py-4 text-center">
              <span :class="['px-2.5 py-0.5 rounded-full text-[10px] font-bold border flex items-center justify-center w-fit mx-auto gap-1.5', getStatus(device.last_record_timestamp).class]">
                <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                {{ getStatus(device.last_record_timestamp).label }}
              </span>
            </td>

            <td class="py-4">
              <div class="flex flex-col">
                <span class="text-sm text-slate-300">Node #{{ device.router_id.split('-')[0] }}</span>
                <span class="text-[11px] text-slate-600">Firmware {{ device.name }}</span>
              </div>
            </td>

            <td class="py-4">
              <span class="text-sm text-slate-400">{{ device.last_record_timestamp }}</span>
            </td>

            <td class="py-4 text-right">
              <button class="p-1 hover:bg-slate-700 rounded transition-colors text-slate-500">
                <MoreVertical :size="18" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-between items-center mt-8 pt-4 border-t border-slate-800">
      <p class="text-xs text-slate-500">
        Showing 1-{{ devices.length }} of {{ totalUsers || '1,284' }} users
      </p>
      <div class="flex items-center gap-1">
        <button class="p-2 hover:bg-slate-800 rounded text-slate-500"><ChevronLeft :size="16"/></button>
        <button class="w-8 h-8 flex items-center justify-center rounded bg-sky-500 text-white text-xs font-bold">1</button>
        <button class="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 text-slate-400 text-xs font-bold">2</button>
        <button class="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 text-slate-400 text-xs font-bold">3</button>
        <button class="p-2 hover:bg-slate-800 rounded text-slate-500"><ChevronRight :size="16"/></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for table if needed */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}
.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 10px;
}
</style>