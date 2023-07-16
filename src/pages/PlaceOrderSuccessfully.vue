<template>
    <Layout>
        <div class="container mb-60">
            <div class="your-order">
                <h3>Place Order Successfully</h3>
                <h4><router-link :to="{ name: routeName.Shop }">Continue Shopping</router-link></h4>
                <h4><router-link :to="{ name: routeName.MyAccount }">View orders</router-link></h4>
            </div>
        </div>
    </Layout>
</template>
<script setup lang="ts">
import Layout from '../components/Layout/Layout.vue';
import { routeName } from '../constants/routers';
</script>