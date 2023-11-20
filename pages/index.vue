<template>
    <div class="index">
        {{ $t('home') }}
        <NuxtLinkLocale to="/about">{{ $t('about') }}</NuxtLinkLocale>
    </div>
</template>

<script setup lang='ts'>


</script>

<style scoped>
.index {}
</style>