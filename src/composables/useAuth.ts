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
        Username: error.value.isError ? "" : username,
        Token: response.value as string,
    });
    return {
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

    const newId = reactive(response.value);
    return {
        isAuth: !error.value.isError,
        newId,
    };
}
