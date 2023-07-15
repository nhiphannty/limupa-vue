import { Ref } from "vue";
import { useAuthStore } from "../stores/useAuthStore";

export function useAccount() {
    const authStore = useAuthStore();

    const submit = function (
        isFormCorrect: boolean,
        id: number,
        firstName: string,
        lastName: string,
        username: string,
        isLoading: Ref<boolean>,
        isPasswordChanged: Ref<boolean>,
        password?: string
    ): boolean | any {
        isLoading.value = true;
        if (!isFormCorrect) {
            isLoading.value = false;
            return;
        }

        const isSuccess = authStore.update(id, firstName, lastName, username);
        if (isSuccess && password) {
            isPasswordChanged.value = true;
        }
        isLoading.value = false;
        console.log(isSuccess);
        return isSuccess;
    };

    return {
        submit,
    };
}
