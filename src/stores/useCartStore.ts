import { defineStore } from "pinia";
import LocalStorageNames from "../constants/LocalStorageNames";
import ICart from "../interfaces/ICart";
import useProduct from "../composables/useProduct";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        cart: (localStorage.getItem(LocalStorageNames.Cart) != null
            ? JSON.parse(localStorage.getItem(LocalStorageNames.Cart) ?? "")
            : []) as ICart[],
        totalItems: (localStorage.getItem(LocalStorageNames.TotalCartItems) != null
            ? JSON.parse(localStorage.getItem(LocalStorageNames.TotalCartItems) ?? "")
            : 0) as number,
        totalPrice: (localStorage.getItem(LocalStorageNames.TotalCartPrice) != null
            ? JSON.parse(localStorage.getItem(LocalStorageNames.TotalCartPrice) ?? "")
            : 0) as number,
    }),
    actions: {
        async addCartItem(productId: number, quantity: number) {
            let cart: ICart[] = this.cart;
            let totalItems: number = this.totalItems;
            let totalPrice: number = this.totalPrice;

            const existItemIndex = cart.findIndex((c) => c.Product.Id === productId) ?? -1;
            if (existItemIndex > -1) {
                totalPrice += quantity * cart[existItemIndex].Product.Price;
                cart[existItemIndex].Quantity =
                    parseInt(cart[existItemIndex].Quantity.toString()) + quantity;
            } else {
                const { getProduct } = useProduct();
                const product = await getProduct(parseInt(productId.toString()));
                const cartItem: ICart = {
                    Product: {
                        Id: productId,
                        Title: product.title,
                        Image: product.image,
                        Price: product.price,
                    },
                    Quantity: quantity,
                };
                cart.push(cartItem);
                totalItems++;
                totalPrice += cartItem.Product.Price * cartItem.Quantity;
            }
            this.cart = cart;
            this.totalItems = totalItems;
            this.totalPrice = parseFloat(totalPrice.toFixed(2));
            localStorage.setItem(LocalStorageNames.Cart, JSON.stringify(this.cart));
            localStorage.setItem(LocalStorageNames.TotalCartItems, this.totalItems.toString());
            localStorage.setItem(LocalStorageNames.TotalCartPrice, this.totalPrice.toString());
        },
        removeCartItem(productId: number) {
            const existItemIndex = this.cart?.findIndex((c) => c.Product.Id === productId) ?? -1;
            if (existItemIndex > -1) {
                this.totalItems--;
                this.totalPrice = parseFloat(
                    (
                        this.totalPrice -
                        this.cart[existItemIndex].Product.Price * this.cart[existItemIndex].Quantity
                    ).toFixed(2)
                );
                this.cart.splice(existItemIndex, 1);
                localStorage.setItem(LocalStorageNames.Cart, JSON.stringify(this.cart));
                localStorage.setItem(LocalStorageNames.TotalCartItems, this.totalItems.toString());
                localStorage.setItem(LocalStorageNames.TotalCartPrice, this.totalPrice.toString());
            }
        },
    },
});
