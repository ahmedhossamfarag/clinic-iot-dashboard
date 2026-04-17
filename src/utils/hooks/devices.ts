import { ref } from "vue";


export type Device = {
    id: String,
    holder_name: String,
    router_id: String,
    router_name: String,
    last_record_timestamp: Date
}



export function useDevices() {
    const devices = ref<Device[] | undefined>
        (
            undefined,
        );
    // TODO
    devices.value = [
        {
            id: 'IT-4402',
            holder_name: 'Alex Rivers',
            router_id: 'Node #842',
            router_name: 'Living Room Gateway',
            last_record_timestamp: new Date('0-0-0T23:59:59'),
        },
        {
            id: 'IT-4403',
            holder_name: 'John Doe',
            router_id: 'Node #843',
            router_name: 'Kitchen Gateway',
            last_record_timestamp: new Date('0-0-0T22:59:59'),
        },
        {
            id: 'IT-4404',
            holder_name: 'Smith Chart',
            router_id: 'Node #844',
            router_name: 'Bedroom Gateway',
            last_record_timestamp: new Date('0-0-0T21:59:59'),
        }
    ];
    return devices;
}
