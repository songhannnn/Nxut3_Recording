<!--
 * @Author: songhannn
 * @Date: 2023-11-17 15:03:14
 * @LastEditors: songhannn
 * @LastEditTime: 2024-03-19 16:34:13
 * @FilePath: \nuxt-recording\pages\index.vue
 * @Description: 
 * 
-->
<template>
    <div class="index">
        {{ $t('home') }}
        <NuxtLinkLocale to="/about">{{ $t('about') }}</NuxtLinkLocale>
        <!-- <Icon name="uil:github" color="black" />
        <Icon name="uil:github" />
        <Icon name="🚀" />
        <Icon name="material-symbols:3g-mobiledata-badge-outline-sharp" size="44" rotate="90deg" /> -->
        <br />
<!--         <hr>
        {{ count }}
        <br />
        <hr>
        {{ blog }} -->
    </div>
</template>

<script setup lang='ts'>

// 测试接口请求
const { data: count } = await useLazyFetch('/yob/api/home/brands', {
    method: 'POST',
    headers: {
        'v': '3.12',
        'klang': 'en',
        'dlang': 'en',
        'time-zone': 'GMT+05:00',
        'system': 'windows10',
        'device': 'pc',
        'ktoken': '',
        'currency-symbol': '$',
        'channel': '',
        'referral-code': ''
    }
})

const { data: blog } = await useLazyFetch('http://jsonplaceholder.typicode.com/posts', { method: 'GET' })



</script>

<style scoped>
.index {}
</style>