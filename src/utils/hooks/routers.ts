import { ref } from "vue";

export type Router = {
    id: String,
    name: String,
    location_x: number,
    location_y: number,
}

export type RouterMap = {
    location_x: number,
    location_y: number,
    connected_devices_count: number
}

export function userRouters() {
    const routers = ref<Router[] | undefined>
        (
            undefined,
        );
    // TODO
    routers.value = [
        {
            id: 'Node #842',
            name: 'Living Room Gateway',
            location_x: 0.2,
            location_y: 0.2,
        },
        {
            id: 'Node #843',
            name: 'Kitchen Gateway',
            location_x: 0.4,
            location_y: 0.4,
        },
        {
            id: 'Node #844',
            name: 'Bedroom Gateway',
            location_x: 0.6,
            location_y: 0.2,
        }
    ]
    return routers;
}

export function useRoutersMap(){
    const routersDetails = ref<RouterMap[]|undefined>(undefined)
    // TODO
    routersDetails.value = [
        {
            location_x: 0.2,
            location_y: 0.2,
            connected_devices_count: 10,
        },
        {
            location_x: 0.4,
            location_y: 0.4,
            connected_devices_count: 5,
        },
        {
            location_x: 0.6,
            location_y: 0.2,
            connected_devices_count: 8,
        }
    ]
    return routersDetails
}
