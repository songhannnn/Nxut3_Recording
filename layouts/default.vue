<!--
 * @Author: songhannn
 * @Date: 2023-11-17 16:20:34
 * @LastEditors: songhannn
 * @LastEditTime: 2024-05-21 14:56:20
 * @FilePath: \nuxt-recording\layouts\default.vue
 * @Description: 
 * 
-->
<template>
    <HeaderBox></HeaderBox>
    <!-- <HomeHeaderMain></HomeHeaderMain> -->
    <slot></slot>
</template>
<script setup lang="ts">
import { recordRequestTime, sleep } from '~/untils/tools';
/* const startTime = Date.now();
console.time('default')
const { data } = await useAsyncData(async () => {
    await Promise.all([
        recordRequestTime(sleep(1000), startTime, 'default1'),
        recordRequestTime(sleep(2000), startTime, 'default2'),
        recordRequestTime(sleep(3000), startTime, 'default3'),
    ]);
    return 'data';
})
console.timeEnd('default') */
</script>