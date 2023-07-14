<template>
    <Layout>
        <BreadCrumb />
        <div class="page-section mb-60">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 mb-30">
                        <div class="login-form">
                            <h4 class="login-title">Hello {{ authStore.user?.Username }}</h4>
                            <div class="container">
                                <div class="col-lg-12">
                                    <div class="li-product-tab">
                                        <ul class="nav li-product-menu">
                                            <li>
                                                <a class="active">
                                                    <span>Your orders</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-content">
                                    <div class="tab-pane active show" role="tabpanel">
                                        <div class="product-active">
                                            <div class="table-content table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th class="li-product-thumbnail">Date</th>
                                                            <th class="li-product-price">Total</th>
                                                            <th class="li-product-stock-status">Status</th>
                                                            <th class="li-product-add-cart">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="li-product-thumbnail">
                                                                10/7/2023 07:20 PM
                                                            </td>
                                                            <td class="li-product-price">
                                                                <span class="amount">£230.39</span>
                                                            </td>
                                                            <td class="li-product-stock-status">
                                                                <span class="in-stock">Delivering</span>
                                                            </td>
                                                            <td class="li-product-add-cart"><a href="#">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="li-product-thumbnail">
                                                                27/6/2023 12:18 AM
                                                            </td>
                                                            <td class="li-product-price">
                                                                <span class="amount">£17</span>
                                                            </td>
                                                            <td class="li-product-stock-status">
                                                                <span class="out-stock">Cancelled</span>
                                                            </td>
                                                            <td class="li-product-add-cart"><a href="#">View</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
import { useAuthStore } from '../stores/useAuthStore';

const authStore = useAuthStore();
</script>