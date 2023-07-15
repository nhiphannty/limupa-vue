<template>
    <ProductArea :tabs="trendingProducts" />
</template>
<script lang="ts">
import { reactive } from 'vue';
import ITab from '../../interfaces/ITab';
import useProduct from '../../composables/useProduct';
import ProductArea from '../../components/ProductArea.vue';

export default {
    components: {
        ProductArea
    },
    async setup() {
        const { getProductsByCategory } = useProduct();
        const trendingProducts: ITab[] = reactive([
            {
                Key: 2,
                Title: "Trending Products",
            }
        ]);

        trendingProducts[0].Products = await getProductsByCategory("men's clothing");

        return { trendingProducts };
    },
}
</script>