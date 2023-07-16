<template>
    <div class="table-content table-responsive">
        <table class="table" v-if="orders.length > 0">
            <thead>
                <tr>
                    <th class="li-product-thumbnail">Date</th>
                    <th class="li-product-price">Total</th>
                    <th class="li-product-stock-status">Status</th>
                    <th class="li-product-add-cart">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <td class="li-product-thumbnail">
                        {{ order.Date }}
                    </td>
                    <td class="li-product-price">
                        <span class="amount">£{{ order.TotalPrice }}</span>
                    </td>
                    <td class="li-product-stock-status">
                        <span class="in-stock">{{ order.Status }}</span>
                    </td>
                    <td class="li-product-add-cart"><a href="#">View</a></td>
                </tr>
            </tbody>
        </table>
        <div class="mt-30" v-else>
            <h4>You have no orders</h4>
            <router-link :to="{ name: routeName.Shop }">
                <h6>Continue Shopping</h6>
            </router-link>
        </div>
    </div>
</template>
<script setup lang="ts">
import { routeName } from '../../constants/routers';
import { useAuthStore } from '../../stores/useAuthStore';

const { orders } = useAuthStore();
</script>