<template>
    <div class="your-order">
        <h3>Your order</h3>
        <div class="your-order-table table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th class="cart-product-name">Product</th>
                        <th class="cart-product-total">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="cart_item" v-for="item in cart" :key="item.Product.Id">
                        <td class="cart-product-name"> {{ item.Product.Title }}<strong class="product-quantity"> × {{
                            item.Quantity }}</strong></td>
                        <td class="cart-product-total">
                            <span class="amount">£{{ (item.Product.Price *
                                item.Quantity).toFixed(2) }}</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td><span class="amount">£{{ totalPrice }}</span></td>
                    </tr>
                    <tr class="order-total">
                        <th>Order Total</th>
                        <td><strong><span class="amount">£{{ total }}</span></strong></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="payment-method">
            <div class="payment-accordion">
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" @click="$emit('setPayment', 0)">
                            <h5 class="panel-title">
                                <a class="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Direct Bank Transfer
                                </a>
                            </h5>
                        </div>
                        <Transition name="slide-down">
                            <div v-if="props.payments[0]" class="collapse show" data-parent="#accordion">
                                <div class="card-body">
                                    <p>Make your payment directly into our bank account. Please use your
                                        Order ID as the payment reference. Your order won’t be shipped
                                        until
                                        the funds have cleared in our account.</p>
                                </div>
                            </div>
                        </Transition>
                    </div>
                    <div class="card">
                        <div class="card-header" @click="$emit('setPayment', 1)">
                            <h5 class="panel-title">
                                <a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    Cheque Payment
                                </a>
                            </h5>
                        </div>
                        <Transition name="slide-down">
                            <div v-if="props.payments[1]" class="collapse show" data-parent="#accordion">
                                <div class="card-body">
                                    <p>Make your payment directly into our bank account. Please use your
                                        Order ID as the payment reference. Your order won’t be shipped
                                        until
                                        the funds have cleared in our account.</p>
                                </div>
                            </div>
                        </Transition>
                    </div>
                    <div class="card">
                        <div class="card-header" @click="$emit('setPayment', 2)">
                            <h5 class="panel-title">
                                <a class="collapsed" data-toggle="collapse" data-target="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree">
                                    PayPal
                                </a>
                            </h5>
                        </div>
                        <Transition name="slide-down">
                            <div v-if="props.payments[2]" class="collapse show" data-parent="#accordion">
                                <div class="card-body">
                                    <p>Make your payment directly into our bank account. Please use your
                                        Order ID as the payment reference. Your order won’t be shipped
                                        until
                                        the funds have cleared in our account.</p>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
                <div class="order-button-payment">
                    <input value="Place order" type="button" @click.prevent="$emit('placeOrder')">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '../../stores/useCartStore';
import { useOrderStore } from '../../stores/useOrderStore';

const { cart, totalPrice } = useCartStore();
const orderStore = useOrderStore();
const { total } = storeToRefs(orderStore);
const props = defineProps({
    payments: { type: Array<Boolean>, default: [true, false, false] }
})
</script>