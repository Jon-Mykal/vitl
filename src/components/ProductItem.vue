<template>
    <div>
        <ul>
            <li>
        {{ product.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
 const props = defineProps({
    product: Object
 })
</script>

<style lang="scss" scoped>

</style>