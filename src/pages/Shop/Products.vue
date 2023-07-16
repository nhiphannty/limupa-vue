<template>
    <div class="shop-products-wrapper">
        <div class="tab-content">
            <div id="grid-view" class="tab-pane fade active show" role="tabpanel">
                <div class="product-area shop-product-area">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 mt-40" v-for="prod in products" :key="prod.id">
                            <div class="single-product-wrap">
                                <div class="product-image">
                                    <router-link :to="{ name: routeName.Product, params: { id: prod.id } }">
                                        <img :src="prod.image" alt="Li's Product Image">
                                    </router-link>
                                </div>
                                <div class="product_desc">
                                    <div class="product_desc_info">
                                        <div class="product-review">
                                            <h5 class="manufacturer">
                                                {{ prod.category }}
                                            </h5>
                                            <div class="rating-box">
                                                <ul class="rating">
                                                    <Rating :rating="prod.rating.rate" />
                                                </ul>
                                            </div>
                                        </div>
                                        <h4>
                                            <router-link class="product_name"
                                                :to="{ name: routeName.Product, params: { id: prod.id } }">
                                                {{ prod.title }}
                                            </router-link>
                                        </h4>
                                        <div class="price-box">
                                            <span class="new-price">£{{ prod.price }}</span>
                                        </div>
                                    </div>
                                    <div class="add-actions">
                                        <ul class="add-actions-link">
                                            <li class="add-cart active">
                                                <a
                                                    @click.prevent="addToCart(prod.id, 1, prod.title, prod.image, prod.price)">
                                                    Add to cart</a>
                                            </li>
                                            <li>
                                                <a class="links-details" href="#">
                                                    <font-awesome-icon :icon="['far', 'heart']" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" title="quick view" class="quick-view-btn" data-toggle="modal"
                                                    data-target="#exampleModalCenter">
                                                    <font-awesome-icon :icon="['far', 'eye']" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Rating from '../../components/Rating.vue';
import useProduct from '../../composables/useProduct';
import { routeName } from '../../constants/routers';
export default {
    components: {
        Rating
    },
    async setup() {
        const { getProducts, addToCart } = useProduct();
        const products = await getProducts({});

        return {
            products,
            routeName,
            addToCart
        }
    }
}
</script>