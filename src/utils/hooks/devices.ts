import { ref } from "vue";
import type { Router } from "./routers";

export enum DeviceStatus {
    ACTIVE = "Active",
    IDLE = "Idle",
    OFFLINE = "Offline",
}

export type DeviceUpdate = Partial<{
    deviceID: String,
    routerID: String,
    time: Date
}>

export type Device = Partial<{
    id: String,
    holderName: String,
    status: DeviceStatus,
    connectedRouter: Router,
    updates: DeviceUpdate[]
}>


export function useDevicesStatistics(){
    const devicesStat = ref<number[]|undefined>(undefined)
    // TODO
    devicesStat.value = [100, 110, 120, 120, 140]
    return devicesStat
}

export function useDevices() {
    const devices = ref<{
        positionX: number;
        positionY: number
    }[] | undefined>
        (
            undefined,
        );
    // TODO
    devices.value = [
        {
            positionX: 0.2,
            positionY: 0.2,
        },
        {
            positionX: 0.4,
            positionY: 0.4,
        },
        {
            positionX: 0.6,
            positionY: 0.2,
        },
    ];
    return devices;
}

export function useDevicesDetails(){
    const devicesDetails = ref<Device[]|undefined>(undefined)
    // TODO
    devicesDetails.value = [
        {
            id: 'IT-4402',
            holderName: 'Alex Rivers',
            status: DeviceStatus.ACTIVE,
            connectedRouter: {
                id: 'Node #842',
                name: 'Living Room Gateway',
            },
            updates: [
                {
                    time: new Date("1-1-2026T12:00")
                },
                {
                    time: new Date("1-1-2026T14:00")
                }
            ]
        },
        {
            id: 'IT-4403',
            holderName: 'Julianna Doe',
            status: DeviceStatus.ACTIVE,
            connectedRouter: {
                id: 'Node #843',
                name: 'Kitchen Gateway',
            },
            updates: [
                {
                    time: new Date("1-1-2026T12:00")
                },
                {
                    time: new Date("1-1-2026T13:12")
                }
            ]
        },
        {
            id: 'IT-4405',
            holderName: 'Marco Rossi',
            status: DeviceStatus.ACTIVE,
            connectedRouter: {
                id: 'Node #844',
                name: 'Bedroom Gateway',
            },
            updates: [
                {
                    time: new Date("1-1-2026T12:00")
                },
                {
                    time: new Date("1-1-2026T12:30")
                }
            ]
        }
    ]
    return devicesDetails
}