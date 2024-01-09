<!--
 * @Author: songhannn
 * @Date: 2023-11-17 16:16:30
 * @LastEditors: songhannn
 * @LastEditTime: 2024-01-03 12:03:29
 * @FilePath: \nuxt-recording\components\Header\header.vue
 * @Description: 
 * 
-->
<template>
    <div class="header" :key="locale">
        <div class="headerBox">
            <img src="/favicon.ico" alt="">
            <ClientOnly>
                <el-select v-model="locale" class="m-2" size="small" popper-class="select-down" :teleported="false"
                    placeholder="Select" @change="changeLang">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </ClientOnly>
        </div>
        <hr>
    </div>
</template>

<script setup lang='ts'>

const route = useRoute()

const options = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'zh',
        label: '中文',
    },
    {
        value: 'ja',
        label: '日本語',
    },
]

const { locale } = useI18n()

// 语言切换跳转页面
const localeRoute = useLocaleRoute()
const changeLang = async () => {
    // 用于把当前页面生成对应的语言前缀的路由,例如:/zh/,/zh/about
    const routePath = localeRoute({ path: route.fullPath, query: { ...route.query } })
    if (routePath) {
        return navigateTo(routePath.fullPath)  // 路由跳转
    }
}
</script>

<style scoped lang="scss">
.header {
    .headerBox {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>