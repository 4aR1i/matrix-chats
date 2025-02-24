import { computed, onMounted, ref } from 'vue';
import { SpinnerLoader } from '@/components';
import { useRoomsStore } from '@/store';
const roomsStore = useRoomsStore();
const isLoading = ref(false);
const sortByField = ref('lastEvent');
const rooms = computed(() => roomsStore.rooms);
const sortedRooms = computed(() => {
    return rooms.value?.toSorted((a, b) => {
        if (sortByField.value === 'name') {
            return a.name.localeCompare(b.name);
        }
        else if (sortByField.value === 'lastEvent') {
            return new Date(b.lastEvent).getTime() - new Date(a.lastEvent).getTime();
        }
        return 0;
    });
});
function sortBy(field) {
    sortByField.value = field;
}
onMounted(async () => {
    try {
        isLoading.value = true;
        await roomsStore.loadRooms();
    }
    finally {
        isLoading.value = false;
    }
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements['section'], __VLS_intrinsicElements['section'])({
    ...{ class: "rooms" },
});
if (__VLS_ctx.isLoading) {
    const __VLS_0 = {}.SpinnerLoader;
    /** @type {[typeof __VLS_components.SpinnerLoader, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements['div'], __VLS_intrinsicElements['div'])({
        ...{ class: "rooms__sort" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements['button'], __VLS_intrinsicElements['button'])({
        ...{ onClick: (...[$event]) => {
                if (!!(__VLS_ctx.isLoading))
                    return;
                __VLS_ctx.sortBy('name');
            } },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements['button'], __VLS_intrinsicElements['button'])({
        ...{ onClick: (...[$event]) => {
                if (!!(__VLS_ctx.isLoading))
                    return;
                __VLS_ctx.sortBy('lastEvent');
            } },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements['ul'], __VLS_intrinsicElements['ul'])({
        ...{ class: "rooms__list" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements['li'], __VLS_intrinsicElements['li'])({
        ...{ class: "rooms__headers" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements['span'], __VLS_intrinsicElements['span'])({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements['span'], __VLS_intrinsicElements['span'])({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements['span'], __VLS_intrinsicElements['span'])({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements['span'], __VLS_intrinsicElements['span'])({});
    for (const [room] of __VLS_getVForSourceType((__VLS_ctx.sortedRooms))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements['li'], __VLS_intrinsicElements['li'])({
            key: (room.id),
            ...{ class: "rooms__room" },
        });
        if (room.avatar) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements['span'], __VLS_intrinsicElements['span'])({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements['img'])({
                src: (room.avatar),
                alt: "Avatar",
            });
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsicElements['span'], __VLS_intrinsicElements['span'])({});
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements['span'], __VLS_intrinsicElements['span'])({});
        (room.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements['span'], __VLS_intrinsicElements['span'])({});
        (room.lastEvent);
        __VLS_asFunctionalElement(__VLS_intrinsicElements['span'], __VLS_intrinsicElements['span'])({});
        (room.unreadCount);
    }
}
/** @type {__VLS_StyleScopedClasses['rooms']} */ ;
/** @type {__VLS_StyleScopedClasses['rooms__sort']} */ ;
/** @type {__VLS_StyleScopedClasses['rooms__list']} */ ;
/** @type {__VLS_StyleScopedClasses['rooms__headers']} */ ;
/** @type {__VLS_StyleScopedClasses['rooms__room']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            SpinnerLoader: SpinnerLoader,
            isLoading: isLoading,
            sortedRooms: sortedRooms,
            sortBy: sortBy,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
