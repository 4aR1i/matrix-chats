import { ref, computed } from 'vue';
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';
const authStore = useAuthStore();
const router = useRouter();
const isLoading = ref(false);
const homeserver = ref('https://matrix-client.matrix.org');
const username = ref('');
const password = ref('');
const error = computed(() => authStore.errorMessage);
async function handleLogin() {
    try {
        isLoading.value = true;
        await authStore.authenticate(homeserver.value, username.value, password.value);
        router.push('/');
    }
    finally {
        isLoading.value = false;
    }
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements['section'], __VLS_intrinsicElements['section'])({
    ...{ class: "auth" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements['h1'], __VLS_intrinsicElements['h1'])({
    ...{ class: "auth__title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements['div'], __VLS_intrinsicElements['div'])({
    ...{ class: "auth__controls" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements['input'])({
    ...{ onFocus: (__VLS_ctx.authStore.clearError) },
    value: (__VLS_ctx.homeserver),
    type: "text",
    placeholder: "Логин",
    ...{ class: "auth__input" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements['input'])({
    ...{ onFocus: (__VLS_ctx.authStore.clearError) },
    value: (__VLS_ctx.username),
    type: "text",
    placeholder: "Логин",
    ...{ class: "auth__input" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements['input'])({
    ...{ onFocus: (__VLS_ctx.authStore.clearError) },
    type: "password",
    placeholder: "Пароль",
    ...{ class: "auth__input" },
});
(__VLS_ctx.password);
if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements['p'], __VLS_intrinsicElements['p'])({
        ...{ class: "auth__error" },
    });
    (__VLS_ctx.error);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements['button'], __VLS_intrinsicElements['button'])({
    ...{ onClick: (__VLS_ctx.handleLogin) },
    ...{ class: "auth__btn" },
    disabled: (__VLS_ctx.isLoading),
});
/** @type {__VLS_StyleScopedClasses['auth']} */ ;
/** @type {__VLS_StyleScopedClasses['auth__title']} */ ;
/** @type {__VLS_StyleScopedClasses['auth__controls']} */ ;
/** @type {__VLS_StyleScopedClasses['auth__input']} */ ;
/** @type {__VLS_StyleScopedClasses['auth__input']} */ ;
/** @type {__VLS_StyleScopedClasses['auth__input']} */ ;
/** @type {__VLS_StyleScopedClasses['auth__error']} */ ;
/** @type {__VLS_StyleScopedClasses['auth__btn']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            authStore: authStore,
            isLoading: isLoading,
            homeserver: homeserver,
            username: username,
            password: password,
            error: error,
            handleLogin: handleLogin,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
