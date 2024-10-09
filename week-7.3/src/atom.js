import {atom, selector} from "recoil";

// export const networkAtom= atom({
//     key:"netwokAtom",
//     default:102
// })

// export const jobsAtom = atom({
//     key:"jobsAtom",
//     default:0
// })

// export const notificationsAtom = atom({
//     key:"notificationAtom",
//     default:12
// })

// export const messagingAtom= atom ({
//   key:"messagingAtom",
//   default:0
// })

// export const totalNotificationSelector = selector({
//     key:"totalNotificationSelector",
//     get:({get})=>{
//         const netwokAtomCount= get(networkAtom)
//         const jobsAtomCount= get(jobsAtom)
//         const notificationsAtomCount = get(notificationsAtom)
//         const messagingAtomCount = get(messagingAtom)
//         return netwokAtomCount + jobsAtomCount + notificationsAtomCount+messagingAtomCount
//     }
// })


export const notification = atom({
    key:"nofications",
    default : {
        network:6,
        jobs:6,
        messaging:3,
        notification:4
    }
});

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const allNotifications = get(notification);
        return allNotifications.network + allNotifications.jobs,allNotifications.messaging,allNotifications.notification
    }
})