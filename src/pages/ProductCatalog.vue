<template>
    <Layout>
        <BreadCrumb />
        <div class="content-wraper">
            <div class="container">
                <div class="row single-product-area">
                    <div class="col-lg-5 col-md-6">
                        <div class="product-details-left">
                            <div class="product-details-images slider-navigation-1">
                                <div class="lg-image">
                                    <a class="popup-img venobox vbox-item" :href="product.image" target="_blank" data-gall="myGallery">
                                        <img :src="product.image" alt="product image">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-6">
                        <div class="product-details-view-content pt-60">
                            <div class="product-info">
                                <h2>{{ product.title }}</h2>
                                <div class="rating-box pt-20">
                                    <ul class="rating rating-with-review-item">
                                        <Rating :rating="product.rating.rate" />
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
                                    <span class="new-price new-price-2">${{ product.price }}</span>
                                </div>
                                <div class="product-desc">
                                    <p>
                                        <span>{{ product.description }}</span>
                                    </p>
                                </div>
                                <div class="single-add-to-cart">
                                    <form action="#" class="cart-quantity">
                                        <div class="quantity">
                                            <label>Quantity</label>
                                            <div class="cart-plus-minus">
                                                <input class="cart-plus-minus-box" type="text" v-model="quantity">
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
                            <span>{{ product.description }}</span>
                        </div>
                    </div>
                    <div id="product-details" class="tab-pane active show" :hidden="activeTab != tabs[1].Key">
                        <div class="product-details-manufacturer">
                            <a href="#">
                                <img :src="product.image" alt="Product Manufacturer Image">
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
                                        <Rating :rating="product.rating.rate" />
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import BreadCrumb from '../components/BreadCrumb.vue';
import Layout from '../components/Layout/Layout.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import Rating from '../components/Rating.vue';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import useProduct from '../composables/useProduct';

export default {
    components: {
        Layout,
        BreadCrumb,
        Rating,
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    async setup() {
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

        const router = useRoute();
        const product = await useProduct(parseInt(router.params.id.toString()));

        return {
            tabs,
            activeTab,
            quantity,
            product
        }
    }
}
</script>