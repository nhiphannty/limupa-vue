<template>
    <h3>Billing Details</h3>
    <AddressForm :address="address" />
</template>
<script lang="ts">
import { useOrderStore } from '../../stores/useOrderStore';
import AddressForm from '../../components/AddressForm.vue';
import ShippingCountries from '../../constants/ShippingCountries';
import { useAuthStore } from '../../stores/useAuthStore';

export default {
    components: {
        AddressForm
    },
    async setup() {
        const { address } = useOrderStore();
        const { user } = useAuthStore();
        address.FirstName = user?.Name?.FirstName && !address.FirstName ? user?.Name?.FirstName : "";
        address.LastName = user?.Name?.LastName && !address.LastName ? user?.Name?.LastName : "";

        return {
            ShippingCountries,
            address
        }
    }
}


</script>../../stores/useOrderStore