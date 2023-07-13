<template>
    <Layout>
        <h1>My Account</h1>
        <h2>Hello {{ authStore.user?.Username }}</h2>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '../components/Layout/Layout.vue';
import { useAuthStore } from '../stores/useAuthStore';

const authStore = useAuthStore();
</script>