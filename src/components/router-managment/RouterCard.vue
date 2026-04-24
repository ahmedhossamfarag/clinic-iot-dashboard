<template>
    <div
        class="relative w-72 bg-[#1a2236] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 shadow-2xl hover:-translate-y-1 hover:shadow-[0_32px_60px_-12px_rgba(0,0,0,0.7)] transition-all duration-300">
        <!-- Status Badge -->
        <div class="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold font-mono tracking-widest"
            :class="statusClasses.badge">
            <span class="w-1.5 h-1.5 rounded-full" :class="statusClasses.dot"></span>
            {{ node.status }}
        </div>

        <!-- Icon -->
        <div
            class="w-[52px] h-[52px] bg-[#111827] border border-white/[0.07] rounded-xl flex items-center justify-center text-sky-400">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="9" width="20" height="12" rx="2" stroke="currentColor" stroke-width="1.5" />
                <path d="M8 9V7a4 4 0 018 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <circle cx="8.5" cy="15" r="1" fill="currentColor" />
                <circle cx="12" cy="15" r="1" fill="currentColor" />
                <circle cx="15.5" cy="15" r="1" fill="currentColor" />
            </svg>
        </div>

        <!-- Node Info -->
        <div class="flex flex-col gap-1">
            <h2 class="text-xl font-bold font-mono text-slate-100 tracking-tight">
                {{ node.name }}
            </h2>
            <p class="text-sm text-slate-500">{{ node.location }}</p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-3">
            <!-- Signal -->
            <div class="flex flex-col gap-1">
                <span class="text-[9px] font-bold font-mono tracking-[0.12em] text-slate-400 uppercase">Signal</span>
                <div class="flex items-center gap-1.5 text-sm font-semibold text-slate-100">
                    <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 16 16" fill="currentColor">
                        <rect x="0" y="10" width="3" height="6" rx="0.5" />
                        <rect x="4.5" y="7" width="3" height="9" rx="0.5" />
                        <rect x="9" y="4" width="3" height="12" rx="0.5" />
                        <rect x="13.5" y="1" width="2.5" height="15" rx="0.5" opacity="0.3" />
                    </svg>
                    {{ node.signal }}
                </div>
            </div>

            <!-- Battery -->
            <div class="flex flex-col gap-1">
                <span class="text-[9px] font-bold font-mono tracking-[0.12em] text-slate-400 uppercase">Battery</span>
                <div class="flex items-center gap-1.5 text-sm font-semibold text-slate-100">
                    <svg class="w-5 h-4 text-emerald-400" viewBox="0 0 22 12" fill="none">
                        <rect x="0.5" y="0.5" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.2" />
                        <rect x="2" y="2" width="11" height="8" rx="1" fill="currentColor" />
                        <path d="M19.5 4v4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
                        <path d="M21 5v2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
                    </svg>
                    {{ node.battery }}
                </div>
            </div>
        </div>

        <!-- Firmware -->
        <div class="flex items-center gap-2 text-[12.5px] text-slate-500">
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.2" />
                <path d="M10 6v4l2.5 2.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            Firmware: {{ node.firmware }}
        </div>

        <!-- Divider -->
        <div class="h-px bg-white/[0.07]"></div>

        <!-- Actions -->
        <div class="flex items-center gap-2.5">
            <button
                class="flex-1 py-2.5 bg-sky-400/10 border border-sky-400/25 rounded-xl text-sky-400 text-sm font-semibold hover:bg-sky-400/20 hover:border-sky-400/50 transition-all duration-200 cursor-pointer"
                @click="$emit('view-details', node)">
                View Details
            </button>

            <button
                class="w-10 h-10 shrink-0 bg-[#111827] border border-white/[0.07] rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-200 hover:border-white/20 transition-all duration-200 cursor-pointer"
                @click="handleRefresh">
                <svg class="w-4 h-4 transition-transform duration-500" :class="{ 'animate-spin': isRefreshing }"
                    viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 10A7.5 7.5 0 1 1 10 2.5" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" />
                    <path d="M10 2.5l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NodeCard",
    emits: ["view-details"],
    props: {
        node: {
            type: Object,
            default: () => ({
                name: "Node #842",
                location: "Living Room Gateway",
                status: "ACTIVE",
                signal: "Strong",
                battery: "85%",
                firmware: "v2.4.1",
            }),
        },
    },
    data() {
        return {
            isRefreshing: false,
        };
    },
    computed: {
        statusClasses() {
            const map = {
                ACTIVE: {
                    badge:
                        "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
                    dot: "bg-emerald-400 shadow-[0_0_6px_#4ade80] animate-pulse",
                },
                IDLE: {
                    badge: "bg-amber-400/10 text-amber-400 border border-amber-400/25",
                    dot: "bg-amber-400",
                },
                OFFLINE: {
                    badge: "bg-red-500/10 text-red-400 border border-red-500/25",
                    dot: "bg-red-400",
                },
            };
            return map[this.node.status] || map.IDLE;
        },
    },
    methods: {
        handleRefresh() {
            if (this.isRefreshing) return;
            this.isRefreshing = true;
            setTimeout(() => {
                this.isRefreshing = false;
            }, 1000);
        },
    },
};
</script>
