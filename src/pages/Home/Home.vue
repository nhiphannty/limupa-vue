<template>
    <Layout>
        <div class="slider-with-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8">
                        <div class="slider-area">
                            <div class="slider-active">
                                <carousel :items-to-show="1">
                                    <slide v-for="slide in sliders" :key="slide.key">
                                        <div :class="`single-slide align-center-left animation-style-01 bg-${slide.key}`">
                                            <div class="slider-progress"></div>
                                            <div class="slider-content">
                                                <h5>Sale Offer <span>{{ slide.offer }}</span> This Week</h5>
                                                <h2>{{ slide.name }}</h2>
                                                <h3>Starting at <span>${{ slide.price }}</span></h3>
                                                <div class="default-btn slide-btn">
                                                    <a class="links" href="#">Shopping Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </slide>
                                    <template #addons>
                                        <navigation />
                                        <pagination />
                                    </template>
                                </carousel>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                        <div class="li-banner">
                            <a href="#">
                                <img src="../../assets/images/banner/1_1.jpg" alt="">
                            </a>
                        </div>
                        <div class="li-banner mt-15 mt-sm-30 mt-xs-30">
                            <a href="#">
                                <img src="../../assets/images/banner/1_2.jpg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NewArriaval />
        <div class="li-static-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 text-center">
                        <div class="single-banner">
                            <a href="#">
                                <img src="../../assets/images/banner/1_3.jpg" alt="Li's Static Banner">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                        <div class="single-banner">
                            <a href="#">
                                <img src="../../assets/images/banner/1_4.jpg" alt="Li's Static Banner">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                        <div class="single-banner">
                            <a href="#">
                                <img src="../../assets/images/banner/1_5.jpg" alt="Li's Static Banner">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LaptopProducts />
        <JeweleryProducts />
        <div class="li-static-home">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="li-static-home-image"></div>
                    </div>
                </div>
            </div>
        </div>
        <TrendingProducts />
        <Bestsellers />
    </Layout>
</template>

<script setup lang="ts">
import Layout from '../../components/Layout/Layout.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import NewArriaval from './NewArriaval.vue';
import LaptopProducts from './LaptopProducts.vue';
import JeweleryProducts from './JeweleryProducts.vue';
import TrendingProducts from './TrendingProducts.vue';
import Bestsellers from './Bestsellers.vue';

const sliders = [
    {
        key: 1,
        offer: "-20% Off",
        name: "Chamcham Galaxy S9 | S9+",
        price: 1209.00,
    },
    {
        key: 2,
        offer: "Black Friday",
        name: "Work Desk Surface Studio 2018",
        price: 824.00,
    },
    {
        key: 3,
        offer: "-10% Off",
        name: "Phantom 4 Pro+ Obsidian",
        price: 1849.00,
    }
];

</script>