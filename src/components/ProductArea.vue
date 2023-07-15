<template>
    <div class="product-area pt-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="li-product-tab">
                        <ul class="nav li-product-menu">
                            <li v-for="tab in props.tabs" @click="activeTab = tab.Key">
                                <a :class="tab.Key === activeTab ? 'active' : ''">
                                    <span>{{ tab.Title }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-pane active show" role="tabpanel" v-for="tab in props.tabs" :hidden="tab.Key !== activeTab">
                    <div class="row">
                        <div class="product-active">
                            <carousel :items-to-show="5" :snap-align="'start'" :items-to-scroll="3">
                                <slide v-for="product in tab.Products" :key="product.id">
                                    <div class="col-lg-12 product-bottom-padding">
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <router-link :to="{ name: routeName.Product, params: { id: product.id } }">
                                                    <img class="" :src="product.image" alt="Li's Product Image">
                                                </router-link>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="#">{{ product.category }}</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <Rating :rating="product.rating.rate" />
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4>
                                                        <router-link
                                                            :to="{ name: routeName.Product, params: { id: product.id } }"
                                                            class="product_name">
                                                            {{ product.title }}
                                                        </router-link>
                                                    </h4>
                                                    <div class="price-box">
                                                        <span class="new-price">${{ product.price }}</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active">
                                                            <a
                                                                @click.prevent="addToCart(product.id, 1, product.title, product.image, product.price)">
                                                                Add to cart</a>
                                                        </li>
                                                        <li>
                                                            <a class="links-details" href="#">
                                                                <font-awesome-icon :icon="['far', 'heart']" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="quick view" class="quick-view-btn"
                                                                data-toggle="modal" data-target="#exampleModalCenter">
                                                                <font-awesome-icon :icon="['far', 'eye']" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </slide>
                                <template #addons>
                                    <navigation />
                                </template>
                            </carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ITab from "../interfaces/ITab";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { routeName } from "../constants/routers";
import Rating from "./Rating.vue";
import useProduct from "../composables/useProduct";

const props = defineProps<{
    tabs: ITab[]
}>();

const activeTab = ref(props.tabs[0].Key);

const { addToCart } = useProduct();

</script>