<template>
    <ProductArea :tabs="laptopProducts" />
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
        const laptopProducts: ITab[] = reactive([
            {
                Key: 1,
                Title: "Laptop",
            }
        ]);

        laptopProducts[0].Products = await getProductsByCategory("electronics");

        return { laptopProducts };
    },
}

</script>