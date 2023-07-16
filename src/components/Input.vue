<template>
    <label v-if="label">{{ props.label }}
        <span v-if="isRequired" class="required">*</span>
    </label>
    <input :type="props.inputType ?? 'text'" :placeholder="props.placeHolder" :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
    <div class="input-errors" v-for="error of errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
    </div>
</template>
<script setup lang="ts">
import { ErrorObject } from '@vuelidate/core';

const props = defineProps<{
    label?: string,
    modelValue?: string | number,
    isRequired?: boolean,
    inputType?: string,
    placeHolder?: string,
    errors?: ErrorObject[]
}>();
</script>