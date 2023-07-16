import IAddress from "./IAddress";
import ICart from "./ICart";
import ICoupon from "./ICoupon";

export default interface IOrder {
    Id: string;
    Date: string;
    BillingAddress: IAddress;
    ShippingAddress?: IAddress;
    Cart: ICart[];
    TotalPrice: string;
    Coupon?: ICoupon;
    Status: OrderStatus;
}

export enum OrderStatus {
    Received = "Received",
    Confirmed = "Confirmed",
    Shipping = "Shipping",
    Complete = "Complete",
    Cancelled = "Cancelled",
}
