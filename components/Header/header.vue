<!--
 * @Author: songhannn
 * @Date: 2023-11-17 16:16:30
 * @LastEditors: songhannn
 * @LastEditTime: 2024-05-21 10:28:11
 * @FilePath: \nuxt-recording\components\Header\header.vue
 * @Description: 
 * 
-->
<template>
    <div class="header" :key="locale">
        <div class="headerBox">
            <NuxtLinkLocale to="/"><img src="/favicon.ico" alt=""></NuxtLinkLocale>
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
import { recordRequestTime, sleep } from '~/untils/tools';

const startTime = Date.now();
console.time('header')
// sleep测试
/* const { data } = await useAsyncData(async () => {
    await Promise.all([
        recordRequestTime(sleep(1000), startTime, 'header1'),
        recordRequestTime(sleep(2000), startTime, 'header2'),
        recordRequestTime(sleep(3000), startTime, 'header3'),
    ]);
    return 'data';
}) */
// useFetch测试
/* const [
        clothingTopLevelData,
        brandsMenu,
        collectionMenu,
        filter,
        countryCurrency,
        footerInfo,
        infoCategory
    ] = await Promise.all([
        recordRequestTime(useServerRequest<ResOptions<topLevel[]>>(Api.getWomenMenCategory, { body: { parent_id: 0, gender_ids: [] } }), startTime, 'clothingTopLevelData'),
        recordRequestTime(useServerRequest<ResOptionsTwoDataArray<brandMenu>>(Api.getBrands), startTime, 'brandsMenu'),
        recordRequestTime(useServerRequest<ResOptionsTwoDataArray<collectionMenu>>(Api.getCollections), startTime, 'collectionMenu'),
        recordRequestTime(useServerRequest<ResOptions<leftFilter>>(Api.getFilterCategory), startTime, 'filter'),
        recordRequestTime(useServerRequest<ResOptions<langCurr>>(Api.getCountryCurrency), startTime, 'countryCurrency'),
        recordRequestTime(useServerRequest<ResOptions<siteBaseInfo>>(Api.getAccessRestrictions), startTime, 'AccessRestrictions'),
        recordRequestTime(useServerRequest<any>(Api.getInfoCategory), startTime, 'InfoCategory')
    ]) */
// $fetch测试
/* const { data: dataHeader } = await useAsyncData(async () => {
    const [
        clothingTopLevelData,
        brandsMenu,
        collectionMenu,
        filter,
        countryCurrency,
        footerInfo,
        infoCategory
    ] = await Promise.all([
        recordRequestTime(fetchRequest<ResOptions<topLevel[]>>(Api.getWomenMenCategory, { body: { parent_id: 0, gender_ids: [] } }), startTime, 'HeaderclothingTopLevelData'),
        recordRequestTime(fetchRequest<ResOptionsTwoDataArray<brandMenu>>(Api.getBrands), startTime, 'HeaderbrandsMenu'),
        recordRequestTime(fetchRequest<ResOptionsTwoDataArray<collectionMenu>>(Api.getCollections), startTime, 'HeadercollectionMenu'),
        recordRequestTime(fetchRequest<ResOptions<leftFilter>>(Api.getFilterCategory), startTime, 'Headerfilter'),
        recordRequestTime(fetchRequest<ResOptions<langCurr>>(Api.getCountryCurrency), startTime, 'HeadercountryCurrency'),
        recordRequestTime(fetchRequest<ResOptions<siteBaseInfo>>(Api.getAccessRestrictions), startTime, 'HeaderAccessRestrictions'),
        recordRequestTime(fetchRequest<any>(Api.getInfoCategory), startTime, 'HeaderInfoCategory')
    ])
    return {
        clothingTopLevelData,
        brandsMenu,
        collectionMenu,
        filter,
        countryCurrency,
        footerInfo,
        infoCategory
    }
}, {
    lazy: true
})
 */
console.timeEnd('header')

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
const switchLocalePath = useSwitchLocalePath()
const changeLang = async () => {

    // 用于把当前页面生成对应的语言前缀的路由,例如:/zh/,/zh/about
    const routePath = localeRoute({ path: route.fullPath, query: { ...route.query } })

    if (routePath) {
        return navigateTo(routePath.fullPath)  // 路由跳转
    }
    /*  prefix 形式
    const swtichLang = switchLocalePath(locale.value)
     console.log('swtichLang', swtichLang);
     if (swtichLang) {
         return navigateTo(swtichLang)  // 路由跳转
     } */
}
</script>

<style scoped lang="scss">
.header {
    .headerBox {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .el-select {
            width: 200px;
        }
    }
}
</style>