<!--
 * @Author: songhannn
 * @Date: 2023-11-17 15:03:14
 * @LastEditors: songhannn
 * @LastEditTime: 2024-05-21 10:31:57
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
import { recordRequestTime, sleep } from '~/untils/tools';

const startTime = Date.now();
console.time('index')
// sleep测试
const { data } = await useAsyncData(async () => {
    await Promise.all([
        recordRequestTime(sleep(1000), startTime, 'index1'),
        recordRequestTime(sleep(2000), startTime, 'index2'),
        recordRequestTime(sleep(3000), startTime, 'index3'),
    ]);
    return 'data';
})
// useFetch封装测试
/* const [
    indexBannerSwpierData,
    clothingTopLevelData,
    recommendAdData,
    ftShopList,
    feaIndexAd,
    brandRecommend,
    newArrivalShopList,
    couponAd
] = await Promise.all([
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 1, page: 1 } }), startTime, 'indexBannerSwpierData'),
    recordRequestTime(useServerRequest<ResOptions<topLevel[]>>(Api.getWomenMenCategory, { body: { parent_id: 0, gender_ids: [] } }), startTime, 'clothingTopLevelData'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 6, page: 1 } }), startTime, 'recommendAdData'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<recommendProduct>>(Api.getRecommdProduct, {
        params: {
            type: 1,
            page_size: 8,
            page: 1,
            sort: 0
        }
    }), startTime, 'ftShopList'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 3, page: 1 } }), startTime, 'feaIndexAd'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<brandMenu>>(Api.getBrands), startTime, 'brandRecommend'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<shop>>(Api.getProductsSearch, {
        body: {
            keyword: "",
            category_ids: [],
            star_rating: [],
            brand_ids: [],
            color_ids: [],
            gender_ids: [1, 2],
            page_size: 8,
            page: 1
        }
    }), startTime, 'newArrivalShopList'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 8, page: 1 } }), startTime, 'couponAd')
]) */
// $fetch测试
/* const { data: dataIndex } = await useAsyncData(async () => {
    const [
        indexBannerSwpierData,
        clothingTopLevelData,
        recommendAdData,
        ftShopList,
        feaIndexAd,
        brandRecommend,
        newArrivalShopList,
        couponAd
    ] = await Promise.all([
        recordRequestTime(fetchRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 1, page: 1 } }), startTime, 'IndexindexBannerSwpierData'),
        recordRequestTime(fetchRequest<ResOptions<topLevel[]>>(Api.getWomenMenCategory, { body: { parent_id: 0, gender_ids: [] } }), startTime, 'IndexclothingTopLevelData'),
        recordRequestTime(fetchRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 6, page: 1 } }), startTime, 'IndexrecommendAdData'),
        recordRequestTime(fetchRequest<ResOptionsTwoDataArray<recommendProduct>>(Api.getRecommdProduct, {
            params: {
                type: 1,
                page_size: 8,
                page: 1,
                sort: 0
            }
        }), startTime, 'IndexftShopList'),
        recordRequestTime(fetchRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 3, page: 1 } }), startTime, 'IndexfeaIndexAd'),
        recordRequestTime(fetchRequest<ResOptionsTwoDataArray<brandMenu>>(Api.getBrands), startTime, 'IndexbrandRecommend'),
        recordRequestTime(fetchRequest<ResOptionsTwoDataArray<shop>>(Api.getProductsSearch, {
            body: {
                keyword: "",
                category_ids: [],
                star_rating: [],
                brand_ids: [],
                color_ids: [],
                gender_ids: [1, 2],
                page_size: 8,
                page: 1
            }
        }), startTime, 'IndexnewArrivalShopList'),
        recordRequestTime(fetchRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 8, page: 1 } }), startTime, 'IndexcouponAd')
    ])
    return {
        indexBannerSwpierData,
        clothingTopLevelData,
        recommendAdData,
        ftShopList,
        feaIndexAd,
        brandRecommend,
        newArrivalShopList,
        couponAd
    }
}, {
    lazy: false
}) */
console.timeEnd('index')

// 测试接口请求
/* const { data: count } = await useLazyFetch('/yob/api/home/brands', {
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

const { data: blog } = await useLazyFetch('http://jsonplaceholder.typicode.com/posts', { method: 'GET' }) */



</script>

<style scoped>
.index {}
</style>