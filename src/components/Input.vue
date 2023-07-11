<template>
    <div :class="`col-md-${isFullLengthInput ? 12 : 6} col-12 mb-20`">
        <label>{{ props.label }}{{ isRequired ? "*" : "" }}</label>
        <input class="mb-0" :type="props.inputType" :placeholder="props.placeHolder" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    label: String,
    isRequired: {
        type: Boolean,
        default: false
    },
    inputType: String,
    placeHolder: String,
    modelValue: {
        type: [String, Number],
        default: ""
    },
    isFullLengthInput: {
        type: Boolean,
        default: false
    }
});
</script>