<template>

    <div class="headerBox">
        <Header></Header>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { recordRequestTime, sleep } from '~/untils/tools';

const startTime = Date.now();
console.time('headerBox')
// sleep测试
const { data } = await useAsyncData(async () => {
    await Promise.all([
        recordRequestTime(sleep(1000), startTime, 'headerBox1'),
        recordRequestTime(sleep(2000), startTime, 'headerBox2'),
        recordRequestTime(sleep(3000), startTime, 'headerBox3'),
    ]);
    return 'data';
}, { lazy: true })
console.timeEnd('headerBox')
</script>

<style scoped>
.headerBox {}
</style>