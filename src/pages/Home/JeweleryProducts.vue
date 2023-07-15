<template>
    <ProductArea :tabs="jeweleryProducts" />
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
        const jeweleryProduct: ITab[] = reactive([
            {
                Key: 2,
                Title: "Jewelery",
            }
        ]);

        jeweleryProduct[0].Products = await getProductsByCategory("jewelery");

        return { jeweleryProducts: jeweleryProduct };
    },
}
</script>