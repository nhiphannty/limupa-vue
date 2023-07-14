import { defineStore } from "pinia";
import { login, register } from "../composables/useAuth";
import IUser from "../interfaces/IUser";
import LocalStorageNames from "../constants/LocalStorageNames";
import router, { routeName } from "../constants/routers";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        user:
            localStorage.getItem(LocalStorageNames.User) != null
                ? (JSON.parse(localStorage.getItem(LocalStorageNames.User) ?? "") as IUser)
                : null,
        returnUrl: null as string | null,
    }),
    actions: {
        async logIn(username: string, password: string) {
            const { isSuccess, user } = await login(username, password);
            if (isSuccess) {
                localStorage.setItem(LocalStorageNames.User, JSON.stringify(user));
                this.user = user;
            }
        },
        logOut() {
            this.user = null;
            this.returnUrl = null;
            localStorage.removeItem(LocalStorageNames.User);
            router.push({ name: routeName.Home });
        },
        async register(firstName: string, lastName: string, username: string, password: string) {
            const { isSuccess, user } = await register(firstName, lastName, username, password);
            if (isSuccess) {
                localStorage.setItem(LocalStorageNames.User, JSON.stringify(user));
                this.user = user;
            }
        },
    },
});
