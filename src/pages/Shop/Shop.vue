<template>
    <Layout>
        <BreadCrumb />
        <div class="content-wraper pt-60 pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="single-banner shop-page-banner">
                            <a href="#">
                                <img src="../../assets/images/bg-banner/2.jpg" alt="Li's Static Banner">
                            </a>
                        </div>
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import BreadCrumb from '../../components/BreadCrumb.vue';
import Layout from '../../components/Layout/Layout.vue';
import Products from './Products.vue';
</script>