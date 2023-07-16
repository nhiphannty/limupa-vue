import { defineStore } from "pinia";
import IUser from "../interfaces/IUser";
import LocalStorageNames from "../constants/LocalStorageNames";
import router, { routeName } from "../constants/routers";
import useFetch from "../composables/useFetch";
import APIs from "../constants/APIInfomation";
import { reactive } from "vue";
import IOrder from "../interfaces/IOrder";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        user:
            localStorage.getItem(LocalStorageNames.User) != null
                ? (JSON.parse(localStorage.getItem(LocalStorageNames.User) ?? "") as IUser)
                : null,
        returnUrl: null as string | null,
        orders: (localStorage.getItem(LocalStorageNames.Orders) != null
            ? JSON.parse(localStorage.getItem(LocalStorageNames.Orders) ?? "")
            : []) as IOrder[],
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
        logOut(route?: string) {
            this.user = null;
            this.returnUrl = null;
            localStorage.removeItem(LocalStorageNames.User);
            router.push({ name: route ? route : routeName.Home });
        },
        async register(firstName: string, lastName: string, username: string, password: string) {
            const { response, error, fetchData } = useFetch(APIs.Auth.Register, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    username: username.trim(),
                    password: password,
                }),
            });
            await fetchData();

            const user = reactive(response.value as IUser);
            user.Username = username;
            user.Name = {
                FirstName: firstName.trim(),
                LastName: lastName.trim(),
            };

            if (!error.value.isError) {
                localStorage.setItem(LocalStorageNames.User, JSON.stringify(user));
                this.user = user;
            }
        },
        update(id: number, firstName: string, lastName: string, username: string): boolean {
            const updatedUser: IUser = {
                Id: id,
                Username: username.trim(),
                Name: {
                    FirstName: firstName.trim(),
                    LastName: lastName.trim(),
                },
            };

            localStorage.setItem(LocalStorageNames.User, JSON.stringify(updatedUser));
            return true;
        },
    },
});
