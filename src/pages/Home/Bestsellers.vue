<template>
    <ProductArea :tabs="bestsellers" />
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
        const bestsellers: ITab[] = reactive([
            {
                Key: 2,
                Title: "Bestsellers",
            }
        ]);

        bestsellers[0].Products = await getProductsByCategory("women's clothing");

        return { bestsellers };
    },
}
</script>