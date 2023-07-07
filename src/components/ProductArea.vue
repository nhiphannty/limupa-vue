<template>
    <div class="product-area pt-60 pb-50">
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
                <div id="li-new-product" class="tab-pane active show" role="tabpanel" v-for="tab in props.tabs"
                    :hidden="tab.Key !== activeTab">
                    <div class="row">
                        <div class="product-active">
                            <carousel :items-to-show="5" :snap-align="'start'" :items-to-scroll="3">
                                <slide v-for="product in tab.Products" :key="product.Id">
                                    <div class="col-lg-12">
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href="single-product.html">
                                                    <img :src="product.Image" alt="Li's Product Image">
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="shop-left-sidebar.html">{{ product.Manufacturer }}</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <li>
                                                                    <font-awesome-icon :icon="[product.Rating != undefined && product.Rating >= 1
                                                                        ? 'fas' : 'far',
                                                                        'star']" />
                                                                </li>
                                                                <li>
                                                                    <font-awesome-icon :icon="[product.Rating != undefined && product.Rating >= 2
                                                                        ? 'fas' : 'far',
                                                                        'star']" />
                                                                </li>
                                                                <li>
                                                                    <font-awesome-icon :icon="[product.Rating != undefined && product.Rating >= 3
                                                                        ? 'fas' : 'far',
                                                                        'star']" />
                                                                </li>
                                                                <li>
                                                                    <font-awesome-icon :icon="[product.Rating != undefined && product.Rating >= 4
                                                                        ? 'fas' : 'far',
                                                                        'star']" />
                                                                </li>
                                                                <li>
                                                                    <font-awesome-icon :icon="[product.Rating != undefined && product.Rating == 5
                                                                        ? 'fas' : 'far',
                                                                        'star']" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="single-product.html">{{ product.Name
                                                    }}</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">${{ product.Price }}</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="#">Add to cart</a></li>
                                                        <li><a class="links-details" href="wishlist.html"><i
                                                                    class="fa fa-heart-o"></i></a></li>
                                                        <li><a href="#" title="quick view" class="quick-view-btn"
                                                                data-toggle="modal" data-target="#exampleModalCenter"><i
                                                                    class="fa fa-eye"></i></a></li>
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
import IProduct from "../interfaces/IProduct";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export interface ITab {
    Key: number,
    Title: string
    Products: IProduct[]
}

const props = defineProps<{
    tabs: ITab[]
}>();

const activeTab = ref(props.tabs[0].Key);
</script>