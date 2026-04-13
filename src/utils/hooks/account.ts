import { ref } from "vue";

type Profile = {
    id: String,
    hospitalName: String,
    primaryAddress: String,
    adminName: String,
    adminEmail: String,
    blueprint: String,
}

export function useAccount(){
    const account = ref<{name: String}|undefined>(undefined)
    // TODO
    account.value = {name: 'Alex Rivers'}
    return account
}

export function useBlueprint(){
    const blueprint = ref<String|undefined>(undefined)
    // TODO
    blueprint.value = '/blueprint.png'
    return blueprint
}

export function useProfile(){
    const profile = ref<Profile|undefined>(undefined)
    // TODO
    profile.value = {
        id: 'GH-992-IOT',
        hospitalName: 'St. Metropolitan General Hospital',
        primaryAddress: '1200 Healthcare Way, North Wing, Suite 400, NY 10001',
        adminName: 'Sarah Smith',
        adminEmail: 's.smith@stmetro.org',
        blueprint: '/blueprint.png',
    }
    return profile
}