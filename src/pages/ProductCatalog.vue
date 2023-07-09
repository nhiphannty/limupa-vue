<template>
    <Layout>
        <BreadCrumb />
        <div class="content-wraper">
            <div class="container">
                <div class="row single-product-area">
                    <div class="col-lg-5 col-md-6">
                        <carousel :items-to-show="1" :snap-align="'start'">
                            <slide v-for="image in 6" :key="image">
                                <div class="product-details-left">
                                    <div class="product-details-images slider-navigation-1">
                                        <div class="lg-image">
                                            <a class="popup-img venobox vbox-item"
                                                :href="`../assets/images/product/large-size/${image}.jpg`"
                                                data-gall="myGallery">
                                                <img :src="`../src/assets/images/product/large-size/${image}.jpg`"
                                                    alt="product image">
                                            </a>
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

                    <div class="col-lg-7 col-md-6">
                        <div class="product-details-view-content pt-60">
                            <div class="product-info">
                                <h2>Today is a good day Framed poster</h2>
                                <div class="rating-box pt-20">
                                    <ul class="rating rating-with-review-item">
                                        <Rating :rating="4" />
                                        <li class="review-item">
                                            <a href="#">
                                                <font-awesome-icon :icon="['fas', 'pen']" /> Read Review</a>
                                        </li>
                                        <li class="review-item">
                                            <a href="#">
                                                <font-awesome-icon :icon="['fas', 'pen']" /> Write Review</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="price-box pt-20">
                                    <span class="new-price new-price-2">$57.98</span>
                                </div>
                                <div class="product-desc">
                                    <p>
                                        <span>100% cotton double printed dress. Black and white striped top and orange high
                                            waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique
                                            eveniet quia pariatur.
                                        </span>
                                    </p>
                                </div>
                                <div class="single-add-to-cart">
                                    <form action="#" class="cart-quantity">
                                        <div class="quantity">
                                            <label>Quantity</label>
                                            <div class="cart-plus-minus">
                                                <input class="cart-plus-minus-box" :value="quantity" type="text">
                                                <div class="dec qtybutton" @click="{ if (quantity > 1) quantity--; }">
                                                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                                                </div>
                                                <div class="inc qtybutton" @click="quantity++">
                                                    <font-awesome-icon :icon="['fas', 'angle-up']" />
                                                </div>
                                            </div>
                                        </div>
                                        <button class="add-to-cart" type="submit">Add to cart</button>
                                    </form>
                                </div>
                                <div class="product-additional-info pt-25">
                                    <a class="wishlist-btn" href="wishlist.html">
                                        <font-awesome-icon :icon="['far', 'heart']" />
                                        Add to wishlist</a>
                                    <div class="product-social-sharing pt-25">
                                        <ul>
                                            <li class="facebook">
                                                <a href="https://www.facebook.com/" target="_blank" title="Facebook">
                                                    <font-awesome-icon :icon="['fab', 'facebook-f']"
                                                        :style="{ color: 'white' }" />
                                                    Facebook
                                                </a>
                                            </li>
                                            <li class="twitter">
                                                <a href="https://twitter.com/" target="_blank" title="Twitter">
                                                    <font-awesome-icon :icon="['fab', 'twitter']"
                                                        :style="{ color: 'white' }" />
                                                    Twitter
                                                </a>
                                            </li>
                                            <li class="tiktok">
                                                <a href="https://www.plus.google.com/discover" target="_blank"
                                                    title="Tiktok">
                                                    <font-awesome-icon :icon="['fab', 'tiktok']"
                                                        :style="{ color: 'white' }" />
                                                    Tiktok
                                                </a>
                                            </li>
                                            <li class="instagram">
                                                <a href="https://www.instagram.com/" data-toggle="tooltip" target="_blank"
                                                    title="Instagram">
                                                    <font-awesome-icon :icon="['fab', 'instagram']"
                                                        :style="{ color: 'white' }" />
                                                    Instagram
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="block-reassurance">
                                    <ul>
                                        <li>
                                            <div class="reassurance-item">
                                                <div class="reassurance-icon">
                                                    <font-awesome-icon :icon="['fas', 'check-to-slot']" />
                                                </div>
                                                <p>Security policy (edit with Customer reassurance module)</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="reassurance-item">
                                                <div class="reassurance-icon">
                                                    <font-awesome-icon :icon="['fa', 'fa-truck']" />
                                                </div>
                                                <p>Delivery policy (edit with Customer reassurance module)</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="reassurance-item">
                                                <div class="reassurance-icon">
                                                    <font-awesome-icon :icon="['fas', 'fa-exchange']" />
                                                </div>
                                                <p> Return policy (edit with Customer reassurance module)</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-area pt-35">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="li-product-tab">
                            <ul class="nav li-product-menu">
                                <li v-for="tab in tabs" @click="activeTab = tab.Key">
                                    <a :class="tab.Key === activeTab ? 'active' : ''">
                                        <span>{{ tab.Title }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="tab-content">
                    <div id="description" class="tab-pane active show" :hidden="activeTab != tabs[0].Key">
                        <div class="product-description">
                            <span>The best is yet to come! Give your walls a voice with a framed poster. This aesthethic,
                                optimistic poster will look great in your desk or in an open-space office. Painted wooden
                                frame with passe-partout for more depth.</span>
                        </div>
                    </div>
                    <div id="product-details" class="tab-pane active show" :hidden="activeTab != tabs[1].Key">
                        <div class="product-details-manufacturer">
                            <a href="#">
                                <img src="../assets/images/product-details/1.jpg" alt="Product Manufacturer Image">
                            </a>
                            <p><span>Reference</span> demo_7</p>
                            <p><span>Reference</span> demo_7</p>
                        </div>
                    </div>
                    <div id="reviews" class="tab-pane active show" :hidden="activeTab != tabs[2].Key">
                        <div class="product-reviews">
                            <div class="product-details-comment-block">
                                <div class="comment-review">
                                    <span>Grade</span>
                                    <ul class="rating">
                                        <Rating :rating="3" />
                                    </ul>
                                </div>
                                <div class="comment-author-infos pt-25">
                                    <span>HTML 5</span>
                                    <em>01-12-18</em>
                                </div>
                                <div class="comment-details">
                                    <h4 class="title-block">Demo</h4>
                                    <p>Plaza</p>
                                </div>
                                <div class="review-btn">
                                    <a class="review-links" href="#" data-toggle="modal" data-target="#mymodal">Write Your
                                        Review!</a>
                                </div>
                                <!-- Begin Quick View | Modal Area -->
                                <div class="modal fade modal-wrapper" id="mymodal">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <h3 class="review-page-title">Write Your Review</h3>
                                                <div class="modal-inner-area row">
                                                    <div class="col-lg-6">
                                                        <div class="li-review-product">
                                                            <img src="../assets/images/product/large-size/3.jpg"
                                                                alt="Li's Product">
                                                            <div class="li-review-product-desc">
                                                                <p class="li-product-name">Today is a good day Framed poster
                                                                </p>
                                                                <p>
                                                                    <span>Beach Camera Exclusive Bundle - Includes Two
                                                                        Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers.
                                                                        Fill The Entire Room With Exquisite Sound via Ring
                                                                        Radiator Technology. Stream And Control R3 Speakers
                                                                        Wirelessly With Your Smartphone. Sophisticated,
                                                                        Modern Design </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="li-review-content">
                                                            <!-- Begin Feedback Area -->
                                                            <div class="feedback-area">
                                                                <div class="feedback">
                                                                    <h3 class="feedback-title">Our Feedback</h3>
                                                                    <form action="#">
                                                                        <p class="your-opinion">
                                                                            <label>Your Rating</label>
                                                                            <span>
                                                                                <select class="star-rating">
                                                                                    <option value="1">1</option>
                                                                                    <option value="2">2</option>
                                                                                    <option value="3">3</option>
                                                                                    <option value="4">4</option>
                                                                                    <option value="5">5</option>
                                                                                </select>
                                                                            </span>
                                                                        </p>
                                                                        <p class="feedback-form">
                                                                            <label for="feedback">Your Review</label>
                                                                            <textarea id="feedback" name="comment" cols="45"
                                                                                rows="8" aria-required="true"></textarea>
                                                                        </p>
                                                                        <div class="feedback-input">
                                                                            <p class="feedback-form-author">
                                                                                <label for="author">Name<span
                                                                                        class="required">*</span>
                                                                                </label>
                                                                                <input id="author" name="author" value=""
                                                                                    size="30" aria-required="true"
                                                                                    type="text">
                                                                            </p>
                                                                            <p
                                                                                class="feedback-form-author feedback-form-email">
                                                                                <label for="email">Email<span
                                                                                        class="required">*</span>
                                                                                </label>
                                                                                <input id="email" name="email" value=""
                                                                                    size="30" aria-required="true"
                                                                                    type="text">
                                                                                <span class="required"><sub>*</sub> Required
                                                                                    fields</span>
                                                                            </p>
                                                                            <div class="feedback-btn pb-15">
                                                                                <a href="#" class="close"
                                                                                    data-dismiss="modal"
                                                                                    aria-label="Close">Close</a>
                                                                                <a href="#">Submit</a>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <!-- Feedback Area End Here -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Quick View | Modal Area End Here -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import BreadCrumb from '../components/BreadCrumb.vue';
import Layout from '../components/Layout/Layout.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import Rating from '../components/Rating.vue';
import { reactive, ref } from 'vue';

const tabs = reactive([
    {
        Key: 1,
        Title: "Description",
        Content: ""
    },
    {
        Key: 2,
        Title: "Product Details",
        Content: ""
    },
    {
        Key: 3,
        Title: "Reviews",
        Content: ""
    }
]);
const activeTab = ref(tabs[0].Key);

const quantity = ref(1);
</script>