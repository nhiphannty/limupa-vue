<script setup lang="ts">
import Header from "./Header/Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
    <body>
        <div class="body-wrapper">
            <Header />
            <slot></slot>
            <Footer />
        </div>
    </body>
</template>