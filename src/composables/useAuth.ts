import { reactive } from "vue";
import APIs from "../constants/APIInfomation";
import useFetch from "./useFetch";
import IUser from "../interfaces/IUser";

export async function login(username: string, password: string) {
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
    return {
        isSuccess: !error.value.isError,
        user,
    };
}

export async function register(
    firstName: string,
    lastName: string,
    username: string,
    password: string
) {
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
    return {
        isSuccess: !error.value.isError,
        user,
    };
}
