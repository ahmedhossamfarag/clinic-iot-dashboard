import { ref } from "vue"

export type HourlyRecordsCount = {
    hour: Date,
    records_count: number
}

export type HourlyDevicesCount = {
    hour: Date,
    devices_count: number
}

export type HourlyAvgTotalSessionDuration = {
    hour: Date,
    average_total_session_duration: Date
}

export function useHourlyRecordsCount() {
    const hourlyRecordsCount = ref<HourlyRecordsCount[] | undefined>(undefined)
    // TODO
    hourlyRecordsCount.value = [
        {
            hour: new Date('0-0-0T01:00:00'),
            records_count: 25,
        },
        {
            hour: new Date('0-0-0T02:00:00'),
            records_count: 12,
        },
        {
            hour: new Date('0-0-0T03:00:00'),
            records_count: 20,
        }
    ]
    return hourlyRecordsCount
}

export function useHourlyDevicesCount() {
    const hourlyDevicesCount = ref<HourlyDevicesCount[] | undefined>(undefined)
    // TODO
    hourlyDevicesCount.value = [
        {
            hour: new Date('0-0-0T01:00:00'),
            devices_count: 10,
        },
        {
            hour: new Date('0-0-0T02:00:00'),
            devices_count: 5,
        },
        {
            hour: new Date('0-0-0T03:00:00'),
            devices_count: 8,
        }
    ]
    return hourlyDevicesCount
}

export function useHourlyTotalSessionDuration() {
    const hourlyTotalSessionDuration = ref<HourlyAvgTotalSessionDuration[] | undefined>(undefined)
    // TODO
    hourlyTotalSessionDuration.value = [
        {
            hour: new Date('0-0-0T01:00:00'),
            average_total_session_duration: new Date('0-0-0T00:30:00'),
        },
        {
            hour: new Date('0-0-0T02:00:00'),
            average_total_session_duration: new Date('0-0-0T00:45:00'),
        },
        {
            hour: new Date('0-0-0T03:00:00'),
            average_total_session_duration: new Date('0-0-0T00:20:00'),
        }
    ]
    return hourlyTotalSessionDuration
}
