import { email, helpers, required, numeric } from "@vuelidate/validators";
import { computed, reactive } from "vue";
import CommonErrorMessages from "../constants/CommonErrorMessages";
import { useOrderStore } from "../stores/useOrderStore";
import IOrder, { OrderStatus } from "../interfaces/IOrder";
import { v4 as uuidv4 } from "uuid";
import { useCartStore } from "../stores/useCartStore";
import IPlaceOrderResult from "../interfaces/IPlaceOrderResult";

export default function () {
    const validationRules = computed(() => ({
        Country: {
            required: helpers.withMessage(CommonErrorMessages.Required("Country"), required),
        },
        FirstName: {
            required: helpers.withMessage(CommonErrorMessages.Required("First Name"), required),
        },
        LastName: {
            required: helpers.withMessage(CommonErrorMessages.Required("Last Name"), required),
        },
        Street: {
            required: helpers.withMessage(CommonErrorMessages.Required("Street"), required),
        },
        TownCity: {
            required: helpers.withMessage(CommonErrorMessages.Required("Town / City"), required),
        },
        StateCounty: {
            required: helpers.withMessage(CommonErrorMessages.Required("State / County"), required),
        },
        PostcodeZIP: {
            required: helpers.withMessage(CommonErrorMessages.Required("Postcode / ZIP"), required),
        },
        Email: {
            required: helpers.withMessage(CommonErrorMessages.Required("Email"), required),
            email: email,
        },
        Phone: {
            required: helpers.withMessage(CommonErrorMessages.Required("Phone"), required),
            numeric: numeric,
        },
    }));

    const setTotalOrder = function () {
        const { totalPrice } = useCartStore();
        const { setTotalOrder } = useOrderStore();
        setTotalOrder(totalPrice);
    };

    const applyCoupon = function (inputCoupon: string): boolean {
        if (inputCoupon) {
            const { applyCoupon: applyCouponToStore } = useOrderStore();
            return applyCouponToStore(inputCoupon);
        }
        return false;
    };

    const payments = reactive([true, false, false]);

    const setPayment = function (chosenPayment: number) {
        payments.forEach((_, index) => {
            payments[index] = false;
        });
        payments[chosenPayment] = true;
    };

    const placeOrder = function (): IPlaceOrderResult {
        const { address, differentAddress, coupon, items, total, placeOrder } = useOrderStore();

        const order: IOrder = {
            Id: uuidv4(),
            Date: new Date(),
            BillingAddress: address,
            ShippingAddress: differentAddress,
            Cart: items,
            TotalPrice: total,
            Coupon: coupon,
            Status: OrderStatus.Received,
        };

        return placeOrder(order);
    };

    return { validationRules, setTotalOrder, payments, setPayment, applyCoupon, placeOrder };
}
