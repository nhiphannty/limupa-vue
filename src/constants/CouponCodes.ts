export enum CouponType {
    Money,
    Percentage,
}

const CouponCodes = [
    { Code: "10years", Type: CouponType.Percentage, Discount: 10 },
    { Code: "100stores", Type: CouponType.Money, Discount: 100 },
];

export default CouponCodes;
