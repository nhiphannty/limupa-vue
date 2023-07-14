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
                                <div class="ht-setting-trigger" @click="isShowSettings = !isShowSettings">
                                    <span>Setting</span>
                                    <font-awesome-icon class="item-angel-down" :icon="['fas', 'angle-down']" />
                                </div>
                                <div class="setting ht-setting" v-if="isShowSettings">
                                    <ul class="ht-setting-list">
                                        <li><router-link :to="{ name: routeName.MyAccount }">My Account</router-link></li>
                                        <li><router-link :to="{ name: routeName.Checkout }">Checkout</router-link></li>
                                        <li v-if="!isAuth.value">
                                            <router-link :to="{ name: routeName.LoginRegister }">Log In</router-link>
                                        </li>
                                        <li v-else><a href="#" @click="logOut">Log Out</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span class="currency-selector-wrapper">
                                    Currency :
                                </span>
                                <div class="ht-currency-trigger" @click="isShowCurrency = !isShowCurrency">
                                    <span>USD $</span>
                                    <font-awesome-icon class="item-angel-down" :icon="['fas', 'angle-down']" />
                                </div>
                                <div class="currency ht-currency" v-if="isShowCurrency">
                                    <ul class="ht-setting-list">
                                        <li><a href="#">EUR €</a></li>
                                        <li class="active"><a href="#">USD $</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span class="language-selector-wrapper">
                                    Language :
                                </span>
                                <div class="ht-language-trigger" @click="isShowLanguage = !isShowLanguage">
                                    <span>English</span>
                                    <font-awesome-icon class="item-angel-down" :icon="['fas', 'angle-down']" />
                                </div>
                                <div class="language ht-language" v-if="isShowLanguage">
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
import { computed, ref } from 'vue';
import { routeName } from '../../../constants/routers';
import { useAuthStore } from '../../../stores/useAuthStore';

const isShowSettings = ref(false);
const isShowCurrency = ref(false);
const isShowLanguage = ref(false);

const authStore = useAuthStore();
const isAuth = computed(() => ref(authStore.user != null));
const logOut = function () {
    authStore.logOut();
    setTimeout(() => {
        isShowSettings.value = !isShowSettings.value;
    }, 500)
}
</script>