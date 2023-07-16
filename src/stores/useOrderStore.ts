import { defineStore } from "pinia";
import IAddress from "../interfaces/IAddress";
import ICart from "../interfaces/ICart";
import IOrder from "../interfaces/IOrder";
import LocalStorageNames from "../constants/LocalStorageNames";
import { useAuthStore } from "./useAuthStore";
import ICoupon from "../interfaces/ICoupon";
import CouponCodes, { CouponType } from "../constants/CouponCodes";
import { useCartStore } from "./useCartStore";
import IPlaceOrderResult from "../interfaces/IPlaceOrderResult";

export const useOrderStore = defineStore({
    id: "order",
    state: () => ({
        address: {} as IAddress,
        differentAddress: {} as IAddress,
        coupon: {} as ICoupon,
        items: {} as ICart[],
        total: "0",
    }),
    actions: {
        placeOrder(order: IOrder): IPlaceOrderResult {
            const { orders } = useAuthStore();
            orders?.push(order);
            localStorage.setItem(LocalStorageNames.Orders, JSON.stringify(orders));
            const { $reset } = useCartStore();
            $reset();
            return { IsSuccess: true, NewOrderId: order.Id };
        },
        setTotalOrder(value: string) {
            this.total = value;
        },
        applyCoupon(newCoupon: string): boolean {
            let validCouponIndex = CouponCodes.findIndex((c) => c.Code === newCoupon);
            if (validCouponIndex > -1) {
                this.coupon = CouponCodes[validCouponIndex];
                const { totalPrice: totalCart } = useCartStore();
                let tempTotal = parseFloat(totalCart);
                let discount = this.getDiscount(tempTotal, CouponCodes[validCouponIndex]);
                if (tempTotal < discount) {
                    tempTotal = 0;
                } else {
                    tempTotal -= discount;
                }

                this.total = tempTotal.toFixed(2);
            }
            return false;
        },
        getDiscount(value: number, coupon: ICoupon) {
            if (coupon.Type === CouponType.Money) {
                return coupon.Discount;
            } else {
                return value * (coupon.Discount / 100);
            }
        },
    },
});
