import { CouponType } from "../constants/CouponCodes";

export default interface ICoupon {
    Code: string;
    Type: CouponType;
    Discount: number;
}
