import { reactive } from "vue";
import APIs from "../constants/APIInfomation";
import { IProductFakeStore, IProductsAPIParams } from "../interfaces/IProduct";
import useFetch from "./useFetch";
import { useCartStore } from "../stores/useCartStore";

export default function () {
    const getProduct = async (id: number): Promise<IProductFakeStore> => {
        const { response, fetchData } = useFetch(APIs.Product.SingleProduct(id), {});
        await fetchData();
        const product = reactive(response.value as unknown as IProductFakeStore);
        return product;
    };

    const addToCart = function (
        id: number,
        quantity: number,
        title: string,
        image: string,
        price: number
    ) {
        const cartStore = useCartStore();
        cartStore.addCartItem(id, parseInt(quantity.toString()), title, image, price);
    };

    const getProducts = async (params: IProductsAPIParams): Promise<IProductFakeStore[]> => {
        const { response, fetchData } = useFetch(APIs.Product.Products(params), {});
        await fetchData();
        const products = reactive(response.value as unknown as IProductFakeStore[]);
        return products;
    };

    const getProductsByCategory = async (category: string): Promise<IProductFakeStore[]> => {
        const { response, fetchData } = useFetch(APIs.Product.ByCategory(category), {});
        await fetchData();
        const products = reactive(response.value as unknown as IProductFakeStore[]);
        return products;
    };

    return { getProduct, addToCart, getProducts, getProductsByCategory };
}
