<template>
    <div class="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="logo pb-sm-30 pb-xs-30">
                        <router-link :to="{ name: routeName.Home }">
                            <img src="../../../assets/images/menu/logo/1.jpg" alt="">
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                    <form action="#" class="hm-searchbox">
                        <select class="nice-select select-search-category">
                            <option value="0">All</option>
                            <option value="10">Laptops</option>
                            <option value="11">TV &amp; Audio</option>
                            <option value="12">Smartphone</option>
                            <option value="13">Cameras</option>
                            <option value="14">headphone</option>
                            <option value="15">Smartwatch</option>
                            <option value="16">Accessories</option>
                        </select>
                        <input type="text" placeholder="Enter your search key ...">
                        <button class="li-btn" type="submit">
                            <font-awesome-icon icon="fa fa-search" />
                        </button>
                    </form>
                    <div class="header-middle-right">
                        <ul class="hm-menu">
                            <li class="hm-wishlist">
                                <a href="#">
                                    <span class="cart-item-count wishlist-item-count">0</span>
                                    <font-awesome-icon icon="fa fa-heart"></font-awesome-icon>
                                </a>
                            </li>
                            <li class="hm-minicart">
                                <div class="hm-minicart-trigger" @click="isShowMinicart = !isShowMinicart">
                                    <font-awesome-icon class="item-icon" :icon="['fas', 'basket-shopping']" />
                                    <span class="item-text">£80.00
                                        <span class="cart-item-count">2</span>
                                    </span>
                                    <font-awesome-icon class="item-angel-down" :icon="['fas', 'angle-down']" />
                                </div>
                                <span></span>
                                <div class="minicart" v-if="isShowMinicart">
                                    <ul class="minicart-product-list">
                                        <li>
                                            <router-link :to="{ name: routeName.ProductCatalog, params: { id: 1 } }"
                                                class="minicart-product-image">
                                                <img src="../../../assets/images/product/small-size/6.jpg"
                                                    alt="cart products">
                                            </router-link>
                                            <div class="minicart-product-details">
                                                <h6>
                                                    <router-link
                                                        :to="{ name: routeName.ProductCatalog, params: { id: 1 } }">
                                                        Aenean eu tristique
                                                    </router-link>
                                                </h6>
                                                <span>£40 x 1</span>
                                            </div>
                                            <button class="close" title="Remove">
                                                <font-awesome-icon icon="fa fa-close"></font-awesome-icon>
                                            </button>
                                        </li>
                                    </ul>
                                    <p class="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                                    <div class="minicart-button">
                                        <router-link :to="{ name: routeName.ShoppingCart }"
                                            class="li-button li-button-fullwidth li-button-dark">
                                            <span>View Full Cart</span>
                                        </router-link>
                                        <a href="#" class="li-button li-button-fullwidth">
                                            <span>Checkout</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { routeName } from '../../../constants/routers';

const isShowMinicart = ref(false);
</script>