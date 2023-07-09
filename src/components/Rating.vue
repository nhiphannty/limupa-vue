<template>
    <li>
        <font-awesome-icon :icon="[props.rating >= 1
            ? 'fas'
            : 'far', 'star']" />
    </li>
    <li>
        <font-awesome-icon :icon="[props.rating >= 2
            ? 'fas'
            : 'far', 'star']" />
    </li>
    <li>
        <font-awesome-icon :icon="[props.rating >= 3
            ? 'fas'
            : 'far', 'star']" />
    </li>
    <li>
        <font-awesome-icon :icon="[props.rating >= 4
            ? 'fas'
            : 'far', 'star']" />
    </li>
    <li>
        <font-awesome-icon :icon="[props.rating == 5
            ? 'fas'
            : 'far', 'star']" />
    </li>
</template>

<script setup lang="ts">
const props = defineProps<{
    rating: number
}>();
</script>