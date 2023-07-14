import { Ref, SetupContext } from "vue";
import { useAuthStore } from "../stores/useAuthStore";
import { useLogIn } from "./useLogIn";

export function useRegister({ context }: { context: SetupContext }) {
    const authStore = useAuthStore();
    const { authenticateHandler } = useLogIn({ context });

    const submit = async function (
        isFormCorrect: boolean,
        firstName: string,
        lastName: string,
        username: string,
        password: string,
        redirectCountDown: Ref<number>
    ): Promise<boolean | any> {
        context.emit("updateLoading", true);
        if (!isFormCorrect) {
            context.emit("updateLoading", false);
            return;
        }

        await authStore.register(firstName, lastName, username, password);
        if (authStore.user != null) {
            authenticateHandler(redirectCountDown);
        } else {
            context.emit("updateLoading", false);
        }

        return authStore.user != null;
    };

    return {
        submit,
    };
}
