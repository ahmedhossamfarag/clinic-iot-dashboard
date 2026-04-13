import { ref } from "vue";

export enum RouterStatus {
    ACTIVE = "Active",
    IDLE = "Idle",
    OFFLINE = "Offline",
}

export enum SignalStrength{
    STRONG = "Strong",
    MEDIUM = "Medium",
    WEAK = "Weak",
}

export type Router = Partial<{
    id: String,
    name: String,
    status: RouterStatus,
    signalStrength: String,
    battaryLevel: String,
    firmware: String,
    locationX: number,
    locationY: number,
}>

export function useRoutersStatistics() {
    const routersStat = ref<number[] | undefined>(undefined);
    // TODO
    routersStat.value = [8, 9, 7, 9, 12];
    return routersStat;
}

export function userRouters() {
    const routers = ref<{
        positionX: number;
        positionY: number
    }[] | undefined>
        (
            undefined,
        );
    // TODO
    routers.value = [
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
    return routers;
}

export function useRoutersDetails(){
    const routersDetails = ref<Router[]|undefined>(undefined)
    // TODO
    routersDetails.value = [
        {
            id: 'Node #842',
            name: 'Living Room Gateway',
            status: RouterStatus.ACTIVE,
            signalStrength: SignalStrength.STRONG,
            battaryLevel: '80%',
            firmware: 'v2.4.1'
        },
        {
            id: 'Node #843',
            name: 'Kitchen Gateway',
            status: RouterStatus.IDLE,
            signalStrength: SignalStrength.MEDIUM,
            battaryLevel: '60%',
            firmware: 'v2.4.1'
        },
        {
            id: 'Node #844',
            name: 'Bedroom Gateway',
            status: RouterStatus.OFFLINE,
            signalStrength: SignalStrength.WEAK,
            battaryLevel: '40%',
            firmware: 'v2.4.1'
        }
    ]
    return routersDetails
}
