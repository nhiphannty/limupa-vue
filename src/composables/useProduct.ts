import { reactive } from "vue";
import APIs from "../constants/APIInfomation";
import { IProductFakeStore } from "../interfaces/IProduct";
import useFetch from "./useFetch";

export default async function (id: number) {
    const { response, fetchData } = useFetch(APIs.Product.SingleProduct(id), {});
    await fetchData();

    const product = reactive(response.value as unknown as IProductFakeStore);
    return product;
}
