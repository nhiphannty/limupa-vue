<template>
    <div class="header-bottom header-sticky d-none d-lg-block d-xl-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hb-menu">
                        <nav>
                            <ul>
                                <li>
                                    <router-link :to="{ name: routeName.Home }">Home</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: routeName.Shop }">Shop</router-link>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { routeName } from '../../../constants/routers';
</script>