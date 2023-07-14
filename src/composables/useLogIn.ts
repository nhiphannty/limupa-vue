import { Ref, SetupContext } from "vue";
import router, { routeName } from "../constants/routers";
import { useAuthStore } from "../stores/useAuthStore";

export function useLogIn({ context }: { context: SetupContext }) {
    const authStore = useAuthStore();
    const authenticateHandler = function (redirectCountDown: Ref<number>) {
        if (redirectCountDown.value > 0) {
            setTimeout(() => {
                redirectCountDown.value--;
                authenticateHandler(redirectCountDown);
            }, 1000);
        } else {
            router.push(authStore.returnUrl || { name: routeName.Home });
        }
    };

    const submit = async function (
        isFormCorrect: boolean,
        username: string,
        password: string,
        redirectCountDown: Ref<number>
    ): Promise<boolean | any> {
        context.emit("updateLoading", true);
        if (!isFormCorrect) {
            context.emit("updateLoading", false);
            return;
        }

        await authStore.logIn(username, password);
        if (authStore.user != null) {
            authenticateHandler(redirectCountDown);
        } else {
            context.emit("updateLoading", false);
        }

        return authStore.user != null;
    };

    return {
        authenticateHandler,
        submit,
    };
}
