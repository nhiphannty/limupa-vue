import { defineStore } from "pinia";
import { login } from "../composables/useAuth";
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
        returnUrl: null || "",
    }),
    actions: {
        async logIn(username: string, password: string) {
            const { user } = await login(username, password);
            localStorage.setItem(LocalStorageNames.User, JSON.stringify(user));

            this.user = user;
        },
        logOut() {
            this.user = null;
            this.returnUrl = null;
            localStorage.removeItem(LocalStorageNames.User);
            router.push({ name: routeName.Home });
        },
    },
});
