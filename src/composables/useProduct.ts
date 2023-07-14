import { reactive } from "vue";
import APIs from "../constants/APIInfomation";
import { IProductFakeStore } from "../interfaces/IProduct";
import useFetch from "./useFetch";
import { useCartStore } from "../stores/useCartStore";

export default function () {
    const getProduct = async (id: number): Promise<IProductFakeStore> => {
        const { response, fetchData } = useFetch(APIs.Product.SingleProduct(id), {});
        await fetchData();
        const product = reactive(response.value as unknown as IProductFakeStore);
        return product;
    };

    const addToCart = async function (id: number, quantity: number) {
        const cartStore = useCartStore();
        await cartStore.addCartItem(id, parseInt(quantity.toString()));
    };

    return { getProduct, addToCart };
}
