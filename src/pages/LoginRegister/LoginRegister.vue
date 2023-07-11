<template>
    <Layout>
        <BreadCrumb />
        <div class="page-section mb-60">
            <div class="container">
                <div class="row">
                    <LoginForm :is-loading="isLoading" @updateLoading="updateLoading" />
                    <RegisterForm :is-loading="isLoading" @updateLoading="updateLoading" />
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '../../components/Layout/Layout.vue';
import BreadCrumb from '../../components/BreadCrumb.vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from "./RegisterForm.vue";
import { ref } from 'vue';

const isLoading = ref(false);
const updateLoading = function (value: boolean) { isLoading.value = value };

</script>