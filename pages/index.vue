<template>
    <div class="index">
        {{ $t('home') }}
        <NuxtLinkLocale to="/about">{{ $t('about') }}</NuxtLinkLocale>
        <Icon name="uil:github" color="black" />
        <Icon name="uil:github" />
        <Icon name="🚀" />
        <Icon name="material-symbols:3g-mobiledata-badge-outline-sharp" size="44" rotate="90deg" />
    </div>
</template>

<script setup lang='ts'>


</script>

<style scoped>
.index {}
</style>