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
                                <img src="../assets/images/banner/1_1.jpg" alt="">
                            </a>
                        </div>
                        <div class="li-banner mt-15 mt-sm-30 mt-xs-30">
                            <a href="#">
                                <img src="../assets/images/banner/1_2.jpg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProductArea :tabs="productTabs" />
        <div class="li-static-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 text-center">
                        <div class="single-banner">
                            <a href="#">
                                <img src="../assets/images/banner/1_3.jpg" alt="Li's Static Banner">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                        <div class="single-banner">
                            <a href="#">
                                <img src="../assets/images/banner/1_4.jpg" alt="Li's Static Banner">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center pt-xs-30">
                        <div class="single-banner">
                            <a href="#">
                                <img src="../assets/images/banner/1_5.jpg" alt="Li's Static Banner">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProductArea :tabs="laptopProducts" />
        <ProductArea :tabs="TVAudioProducts" />
        <div class="li-static-home">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="li-static-home-image"></div>
                    </div>
                </div>
            </div>
        </div>
        <ProductArea :tabs="trendingProducts" />
        <ProductArea :tabs="bestsellersProducts" />
    </Layout>
</template>

<script setup lang="ts">
import Layout from '../components/Layout/Layout.vue';
import ProductArea, { ITab } from '../components/ProductArea.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { reactive } from 'vue';

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

const productTabs: ITab[] = reactive([
    {
        Key: 1,
        Title: "New Arrival",
        Products: [
            {
                Id: 1,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/1.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            },
            {
                Id: 2,
                Name: "Studio Design",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/2.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4.5
            },
            {
                Id: 3,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/3.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4.5
            },
            {
                Id: 4,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/4.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 3
            },
            {
                Id: 5,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/5.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 3.5
            },
            {
                Id: 6,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/6.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            }
        ]
    },
    {
        Key: 2,
        Title: "Best Sellers",
        Products: [
            {
                Id: 7,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/7.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 1
            },
            {
                Id: 8,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/8.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 9,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/9.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 10,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/10.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            },
            {
                Id: 11,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/11.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 12,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/12.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            }
        ]
    },
    {
        Key: 3,
        Title: "Featured Products",
        Products: [
            {
                Id: 1,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/1.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            },
            {
                Id: 2,
                Name: "Studio Design",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/2.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4.5
            },
            {
                Id: 3,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/3.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4.5
            },
            {
                Id: 4,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/4.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 3
            },
            {
                Id: 5,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/5.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 3.5
            },
            {
                Id: 6,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/6.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            },
            {
                Id: 7,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/7.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 1
            },
            {
                Id: 8,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/8.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 9,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/9.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 10,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/10.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            },
            {
                Id: 11,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/11.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 12,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/12.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            }
        ]
    }
]);

const laptopProducts: ITab[] = reactive([
    {
        Key: 1,
        Title: "Laptop",
        Products: [
            {
                Id: 1,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/1.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            },
            {
                Id: 2,
                Name: "Studio Design",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/2.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4.5
            },
            {
                Id: 3,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/3.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4.5
            },
            {
                Id: 4,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/4.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 3
            },
            {
                Id: 5,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/5.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 3.5
            },
            {
                Id: 6,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/6.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            }
        ]
    }
]);

const TVAudioProducts: ITab[] = reactive([
    {
        Key: 2,
        Title: "TV & Audio",
        Products: [
            {
                Id: 7,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/7.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 1
            },
            {
                Id: 8,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/8.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 9,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/9.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 10,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/10.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            },
            {
                Id: 11,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/11.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 12,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/12.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            }
        ]
    }
]);

const trendingProducts: ITab[] = reactive([
    {
        Key: 1,
        Title: "Trending Products",
        Products: [
            {
                Id: 1,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/1.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            },
            {
                Id: 2,
                Name: "Studio Design",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/2.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4.5
            },
            {
                Id: 3,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/3.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4.5
            },
            {
                Id: 4,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/4.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 3
            },
            {
                Id: 5,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/5.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 3.5
            },
            {
                Id: 6,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/6.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            }
        ]
    }
]);

const bestsellersProducts: ITab[] = reactive([
    {
        Key: 2,
        Title: "Bestsellers",
        Products: [
            {
                Id: 7,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/7.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 1
            },
            {
                Id: 8,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/8.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 9,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/9.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 10,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/10.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            },
            {
                Id: 11,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/11.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 4
            },
            {
                Id: 12,
                Name: "Accusantium dolorem1",
                Price: 46.80,
                Image: "src/assets/images/product/large-size/12.jpg",
                Manufacturer: "Graphic Corner",
                Rating: 5
            }
        ]
    }
]);
</script>