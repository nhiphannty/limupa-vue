import { defineStore } from "pinia";
import LocalStorageNames from "../constants/LocalStorageNames";
import ICart from "../interfaces/ICart";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        cart: (localStorage.getItem(LocalStorageNames.Cart) != null
            ? JSON.parse(localStorage.getItem(LocalStorageNames.Cart) ?? "")
            : []) as ICart[],
        totalItems:
            localStorage.getItem(LocalStorageNames.TotalCartItems) != null
                ? JSON.parse(localStorage.getItem(LocalStorageNames.TotalCartItems) ?? "")
                : "0",
        totalPrice:
            localStorage.getItem(LocalStorageNames.TotalCartPrice) != null
                ? JSON.parse(localStorage.getItem(LocalStorageNames.TotalCartPrice) ?? "")
                : "0",
    }),
    actions: {
        setLocalStorage() {
            localStorage.setItem(LocalStorageNames.Cart, JSON.stringify(this.cart));
            localStorage.setItem(LocalStorageNames.TotalCartItems, this.totalItems);
            localStorage.setItem(LocalStorageNames.TotalCartPrice, this.totalPrice);
        },
        addCartItem(
            productId: number,
            addedQuantity: number,
            title: string,
            image: string,
            price: number
        ) {
            let cart: ICart[] = this.cart;
            let totalItems: number = parseInt(this.totalItems);
            let totalPrice: number = parseFloat(this.totalPrice);

            const existItemIndex = cart.findIndex((c) => c.Product.Id === productId) ?? -1;
            if (existItemIndex > -1) {
                totalPrice += addedQuantity * cart[existItemIndex].Product.Price;
                cart[existItemIndex].Quantity =
                    parseInt(cart[existItemIndex].Quantity.toString()) + addedQuantity;
            } else {
                const cartItem: ICart = {
                    Product: {
                        Id: productId,
                        Title: title,
                        Image: image,
                        Price: price,
                    },
                    Quantity: addedQuantity,
                };
                cart.push(cartItem);
                totalItems++;
                totalPrice += cartItem.Product.Price * cartItem.Quantity;
            }
            this.cart = cart;
            this.totalItems = totalItems;
            this.totalPrice = totalPrice.toFixed(2);
            this.setLocalStorage();
        },
        removeCartItem(productId: number) {
            const existItemIndex = this.cart.findIndex((c) => c.Product.Id === productId) ?? -1;
            if (existItemIndex > -1) {
                let totalItems: number = parseInt(this.totalItems);
                let totalPrice: number = parseFloat(this.totalPrice);
                totalItems--;
                totalPrice =
                    totalPrice -
                    this.cart[existItemIndex].Product.Price * this.cart[existItemIndex].Quantity;
                this.cart.splice(existItemIndex, 1);
                this.totalItems = totalItems;
                this.totalPrice = totalPrice.toFixed(2);
                this.setLocalStorage();
            }
        },
        recalculateTotalPrice() {
            const newTotalPrice = this.cart.reduce((accumulator, cartItem) => {
                return accumulator + cartItem.Product.Price * cartItem.Quantity;
            }, 0);
            this.totalPrice = newTotalPrice.toFixed(2);
            this.setLocalStorage();
        },
    },
});
