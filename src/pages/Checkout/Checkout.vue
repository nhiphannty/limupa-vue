<template>
    <Layout>
        <BreadCrumb />
        <div class="checkout-area pt-60 pb-30">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="coupon-accordion">
                            <h3>
                                <font-awesome-icon :icon="['fas', 'gift']" class="coupon-accordion-icon" />
                                Have a coupon?
                                <span @click="isShowCoupon = !isShowCoupon">
                                    Click here to enter your code</span>
                            </h3>
                            <Transition name="slide-down">
                                <div class="mb-30" v-if="isShowCoupon">
                                    <div class="coupon-info">
                                        <form action="#">
                                            <p class="checkout-coupon">
                                                <input placeholder="Coupon code" type="text" v-model="inputCoupon">
                                                <input value="Apply Coupon" type="submit"
                                                    @click.prevent="applyCoupon(inputCoupon)">
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <form action="#">
                            <div class="checkbox-form">
                                <BillingDetails />
                                <DifferentAddress />
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6 col-12">
                        <YourOrder :payments="payments" :isLoading="isLoading" @setPayment="setPayment"
                            @placeOrder="submit" />
                        <h5 class="error-msg" v-if="isSuccess === false">Something went wrong. Please try again.</h5>   
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script lang="ts">
import { ref } from 'vue';
import BreadCrumb from '../../components/BreadCrumb.vue';
import Layout from '../../components/Layout/Layout.vue';
import YourOrder from './YourOrder.vue';
import BillingDetails from './BillingDetails.vue'
import DifferentAddress from './DifferentAddress.vue'
import useVuelidate from '@vuelidate/core';
import useCheckout from '../../composables/useCheckout'
import router, { routeName } from '../../constants/routers';

export default {
    components: {
        Layout,
        BreadCrumb,
        YourOrder,
        BillingDetails,
        DifferentAddress
    },
    setup() {
        const isShowCoupon = ref(false);
        const inputCoupon = ref("");
        const isLoading = ref(false);
        const isSuccess = ref();
        const { applyCoupon, payments, setPayment, setTotalOrder, placeOrder } = useCheckout();
        setTotalOrder();
        const v = useVuelidate()
        const submit = async function () {
            isLoading.value = true;
            const isFormCorrect = await v.value.$validate();
            if (isFormCorrect) {
                const result = placeOrder();
                if (result.IsSuccess) {
                    router.push({ name: routeName.PlaceOrderSuccessfully, params: { orderId: result.NewOrderId } })
                }
                isSuccess.value = result.IsSuccess;
            }
            isLoading.value = false;
        }

        return {
            isShowCoupon,
            inputCoupon,
            isLoading,
            applyCoupon,
            payments,
            setPayment,
            submit,
            isSuccess
        }
    }
}
</script>