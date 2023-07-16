<template>
    <div class="different-address">
        <div class="ship-different-title">
            <h3>
                <label>Ship to a different address?</label>
                <input type="checkbox" :value="isDifferentAddress" @change="isDifferentAddress = !isDifferentAddress">
            </h3>
        </div>
        <Transition name="slide-down">
            <AddressForm :address="differentAddress" v-if="isDifferentAddress === true" />
        </Transition>
        <div class="order-notes">
            <div class="checkout-form-list">
                <label>Order Notes</label>
                <textarea id="checkout-mess" cols="30" rows="10"
                    placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Input from '../../components/Input.vue';
import { useOrderStore } from '../../stores/useOrderStore';
import { useAuthStore } from '../../stores/useAuthStore';
import AddressForm from '../../components/AddressForm.vue';
import { ref } from 'vue';

const { differentAddress } = useOrderStore();
const { user } = useAuthStore();
differentAddress.FirstName = user?.Name?.FirstName ?? "";
differentAddress.LastName = user?.Name?.LastName ?? "";

const isDifferentAddress = ref(false);

</script>../../stores/useOrderStore