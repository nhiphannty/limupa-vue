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
                                                <a :class="activeTab == 1 ? 'active' : ''" @click="activeTab = 1">
                                                    <span>My Account</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a :class="activeTab == 2 ? 'active' : ''" @click="activeTab = 2">
                                                    <span>Your orders</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-content">
                                    <div class="tab-pane active show" role="tabpanel" :hidden="activeTab != 1">
                                        <div class="product-active">
                                            <AccountInformation />
                                        </div>
                                    </div>
                                    <div class="tab-pane active show" role="tabpanel" :hidden="activeTab != 2">
                                        <div class="product-active">
                                            <YourOrders />
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
import { ref } from 'vue';
import BreadCrumb from '../../components/BreadCrumb.vue';
import Layout from '../../components/Layout/Layout.vue';
import { useAuthStore } from '../../stores/useAuthStore';
import AccountInformation from './AccountInformation.vue';
import YourOrders from './YourOrders.vue';
import { useRouter } from 'vue-router';
import { routeName } from '../../constants/routers';

const authStore = useAuthStore();
const activeTab = ref(1);

const router = useRouter();
const previousRoute = router.resolve({ path: `${router.options.history.state.back?.toString()}` })

if (previousRoute.name === routeName.PlaceOrderSuccessfully) {
    activeTab.value = 2;
}

</script>