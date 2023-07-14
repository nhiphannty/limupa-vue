import { defineStore } from "pinia";
import IUser from "../interfaces/IUser";
import LocalStorageNames from "../constants/LocalStorageNames";
import router, { routeName } from "../constants/routers";
import useFetch from "../composables/useFetch";
import APIs from "../constants/APIInfomation";
import { reactive } from "vue";

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
            const { response, error, fetchData } = useFetch(APIs.Auth.Login, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            await fetchData();

            const user: IUser = reactive({
                Id: 0,
                Username: username,
                Token: (response.value as { token: string }).token,
            });

            if (!error.value.isError) {
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
            const { response, error, fetchData } = useFetch(APIs.Auth.Register, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    password: password,
                }),
            });
            await fetchData();

            const user = reactive(response.value as IUser);
            user.Username = username;

            if (!error.value.isError) {
                localStorage.setItem(LocalStorageNames.User, JSON.stringify(user));
                this.user = user;
            }
        },
    },
});
