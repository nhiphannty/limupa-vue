import { reactive, toRefs } from "vue";
import { APISettings } from "../constants/APISettings";

export default function (api: string, options: object) {
    const state = reactive({
        response: {},
    });
    const fetchData = async () => {
        const resp = await fetch(`${APISettings.baseURL}${api}`, options);
        const json = await resp.json();
        state.response = json;
    };

    return { ...toRefs(state), fetchData };
}
