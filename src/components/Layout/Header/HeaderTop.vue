<template>
    <div class="header-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="header-top-left">
                        <ul class="phone-wrap">
                            <li><span>Telephone Enquiry:</span><a href="#">(+123) 123 321 345</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9 col-md-8">
                    <div class="header-top-right">
                        <ul class="ht-menu">
                            <li>
                                <div class="ht-setting-trigger">
                                    <span>Setting</span>
                                    <font-awesome-icon class="item-angel-down" :icon="['fas', 'angle-down']" />
                                </div>
                                <div class="setting ht-setting">
                                    <ul class="ht-setting-list">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        <li><router-link :to="{ name: routeName.LoginRegister }">Sign In</router-link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span class="currency-selector-wrapper">Currency :</span>
                                <div class="ht-currency-trigger">
                                    <span>USD $</span>
                                    <font-awesome-icon class="item-angel-down" :icon="['fas', 'angle-down']" />
                                </div>
                                <div class="currency ht-currency">
                                    <ul class="ht-setting-list">
                                        <li><a href="#">EUR €</a></li>
                                        <li class="active"><a href="#">USD $</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span class="language-selector-wrapper">Language :</span>
                                <div class="ht-language-trigger">
                                    <span>English</span>
                                    <font-awesome-icon class="item-angel-down" :icon="['fas', 'angle-down']" />
                                </div>
                                <div class="language ht-language">
                                    <ul class="ht-setting-list">
                                        <li class="active"><a href="#"><img
                                                    src="../../../assets/images/menu/flag-icon/1.jpg" alt="">English</a>
                                        </li>
                                        <li><a href="#"><img src="../../../assets/images/menu/flag-icon/2.jpg"
                                                    alt="">Français</a></li>
                                    </ul>
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
import { routeName } from '../../../constants/routers';
</script>