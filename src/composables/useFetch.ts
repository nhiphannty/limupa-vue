import { reactive, toRefs } from "vue";
import { APISettings } from "../constants/APISettings";

export default function (api: string, options: object) {
    const state = reactive({
        response: {},
        error: { isError: false, error: "" },
    });
    const fetchData = async () => {
        const resp = await fetch(`${APISettings.baseURL}${api}`, options);
        if (resp.ok) {
            const json = await resp.json();
            state.response = json;
        } else {
            state.error.isError = true;
            state.error.error = resp.statusText;
        }
    };

    return { ...toRefs(state), fetchData };
}
