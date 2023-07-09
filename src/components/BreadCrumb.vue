<template>
    <div class="breadcrumb-area">
        <div class="container">
            <div class="breadcrumb-content">
                <ul>
                    <li>
                        <router-link :to="{ name: routeName.Home }">Home</router-link>
                    </li>
                    <li class="active">{{ route.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { routeName } from '../constants/routers';

const route = useRoute();
</script>