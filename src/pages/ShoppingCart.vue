<template>
    <Layout>
        <BreadCrumb />
        <div class="Shopping-cart-area pt-60 pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <form action="#">
                            <div class="table-content table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="li-product-remove">remove</th>
                                            <th class="li-product-thumbnail">images</th>
                                            <th class="cart-product-name">Product</th>
                                            <th class="li-product-price">Unit Price</th>
                                            <th class="li-product-quantity">Quantity</th>
                                            <th class="li-product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in cartStore.cart" :key="item.Product.Id">
                                            <td class="li-product-remove">
                                                <a href="#" @click.prevent="cartStore.removeCartItem(item.Product.Id)">
                                                    <i class="fa fa-times"></i>
                                                </a>
                                            </td>
                                            <td class="li-product-thumbnail">
                                                <a href="#">
                                                    <img class="cart-item-image" :src="item.Product.Image"
                                                        alt="Li's Product Image"></a>
                                            </td>
                                            <td class="li-product-name">
                                                <router-link
                                                    :to="{ name: routeName.ProductCatalog, params: { id: item.Product.Id } }">
                                                    {{ item.Product.Title }}
                                                </router-link>
                                            </td>
                                            <td class="li-product-price">
                                                <span class="amount">£{{ item.Product.Price }}</span>
                                            </td>
                                            <td class="quantity">
                                                <label>Quantity</label>
                                                <div class="cart-plus-minus">
                                                    <input class="cart-plus-minus-box" v-model="item.Quantity" type="text"
                                                        @change="updateCartItemQuantity(item.Product.Id, item.Quantity)">
                                                    <div class="dec qtybutton"
                                                        @click="() => { if (item.Quantity > 1) { item.Quantity--; cartStore.recalculateTotalPrice(); } }">
                                                        <i class="fa fa-angle-down"></i>
                                                    </div>
                                                    <div class="inc qtybutton"
                                                        @click="() => { item.Quantity++; cartStore.recalculateTotalPrice(); }">
                                                        <i class="fa fa-angle-up"></i>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="product-subtotal">
                                                <span class="amount">
                                                    £{{ (item.Product.Price * item.Quantity).toFixed(2) }}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="coupon-all">
                                        <div class="coupon">
                                            <input id="coupon_code" class="input-text" name="coupon_code" value=""
                                                placeholder="Coupon code" type="text">
                                            <input class="button" name="apply_coupon" value="Apply coupon" type="submit">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5 ml-auto">
                                    <div class="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul>
                                            <li>Subtotal <span>£{{ cartStore.totalPrice }}</span></li>
                                            <li>Total <span>£{{ cartStore.totalPrice }}</span></li>
                                        </ul>
                                        <a href="#">Proceed to checkout</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import BreadCrumb from '../components/BreadCrumb.vue';
import Layout from '../components/Layout/Layout.vue';
import { routeName } from '../constants/routers';
import { useCartStore } from '../stores/useCartStore';

const cartStore = useCartStore();
const updateCartItemQuantity = function (productId: number, quantity: number) {
    if (!quantity) {
        cartStore.removeCartItem(productId);
    }
    cartStore.recalculateTotalPrice();
}

</script>