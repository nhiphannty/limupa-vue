<template>
    <ProductArea :tabs="productTabs" />
</template>
<script lang="ts">
import { reactive } from 'vue';
import ITab from '../../interfaces/ITab';
import useProduct from '../../composables/useProduct';
import { IProductsAPIParams } from '../../interfaces/IProduct';
import { Sort } from '../../constants/APIInfomation';
import ProductArea from '../../components/ProductArea.vue';

export default {
    components: {
        ProductArea
    },
    async setup() {
        const { getProducts } = useProduct();
        const productTabs: ITab[] = reactive([
            {
                Key: 1,
                Title: "New Arrival"
            },
            {
                Key: 2,
                Title: "Best Sellers"
            },
            {
                Key: 3,
                Title: "Featured Products"
            }
        ]);

        productTabs[0].Products = await getProducts({ Limit: 5 } as IProductsAPIParams);
        productTabs[1].Products = await getProducts({ Limit: 5, Sort: Sort.Desc } as IProductsAPIParams);
        productTabs[2].Products = await getProducts({ Sort: Sort.Desc } as IProductsAPIParams)

        return { productTabs };
    },
}

</script>