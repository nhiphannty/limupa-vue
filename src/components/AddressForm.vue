<template>
    <div class="row">
        <div class="col-md-12">
            <div class="country-select clearfix">
                <label>Country <span class="required">*</span></label>
                <select class="nice-select wide" v-model="address.Country">
                    <option v-for="country in ShippingCountries" :key="country.Code" :value="country.Code">
                        {{ country.Country }}
                    </option>
                </select>
            </div>
            <div class="input-errors" v-for="error of v$.Country.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="checkout-form-list">
                <Input :label="'First Name'" :is-required="true" v-model="address.FirstName"
                    :errors="v$.FirstName.$errors" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="checkout-form-list">
                <Input :label="'Last Name'" :is-required="true" v-model="address.LastName" :errors="v$.LastName.$errors" />
            </div>
        </div>
        <div class="col-md-12">
            <div class="checkout-form-list">
                <Input :label="'Company Name'" v-model="address.CompanyName" />
            </div>
        </div>
        <div class="col-md-12">
            <div class="checkout-form-list">
                <Input :label="'Address'" :place-holder="'Street address'" :is-required="true" v-model="address.Street"
                    :errors="v$.Street.$errors" />
            </div>
        </div>
        <div class="col-md-12">
            <div class="checkout-form-list">
                <Input :place-holder="'Apartment, suite, unit etc. (optional)'" v-model="address.Unit" />
            </div>
        </div>
        <div class="col-md-12">
            <div class="checkout-form-list">
                <Input :label="'Town / City'" :is-required="true" v-model="address.TownCity"
                    :errors="v$.TownCity.$errors" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="checkout-form-list">
                <Input :label="'State / County'" :is-required="true" v-model="address.StateCounty"
                    :errors="v$.StateCounty.$errors" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="checkout-form-list">
                <Input :label="'Postcode / Zip'" :is-required="true" v-model="address.PostcodeZIP"
                    :errors="v$.PostcodeZIP.$errors" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="checkout-form-list">
                <Input :label="'Email Address'" :input-type="'email'" :is-required="true" v-model="address.Email"
                    :errors="v$.Email.$errors" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="checkout-form-list">
                <Input :label="'Phone'" :is-required="true" v-model="address.Phone" :errors="v$.Phone.$errors" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Input from './Input.vue';
import useVuelidate from '@vuelidate/core';
import ShippingCountries from '../constants/ShippingCountries';
import IAddress from '../interfaces/IAddress';
import useCheckout from '../composables/useCheckout.ts'
const props = defineProps<{
    address: IAddress
}>()

const { validationRules } = useCheckout();

const v$ = useVuelidate(validationRules, props.address);


</script>