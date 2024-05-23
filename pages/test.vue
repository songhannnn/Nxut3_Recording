<template>
    
</template>

<script setup lang='ts'>
import { recordRequestTime } from "~/untils/tools";

const { t } = useI18n();
const route = useRoute();
const isShowCouponDialog = ref(false);

definePageMeta({
    // middleware: ["seo"],
    key: route => route.fullPath
    // layout: false
})

const couponIds = ref<string>('1')
const startTime = Date.now();
console.time('Test')
// 接口接入
const [
    { data: indexBannerSwpierData },
    { data: clothingTopLevelData },
    { data: recommendAdData },
    { data: ftShopList },
    { data: feaIndexAd },
    { data: brandRecommend },
    { data: newArrivalShopList },
    { data: couponAd }
] = await Promise.all([
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 1, page: 1 }, lazy: true }), startTime, 'indexBannerSwpierData'),
    recordRequestTime(useServerRequest<ResOptions<topLevel[]>>(Api.getWomenMenCategory, { body: { parent_id: 0, gender_ids: [] }, lazy: true }), startTime, 'clothingTopLevelData'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 6, page: 1 }, lazy: true }), startTime, 'recommendAdData'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<recommendProduct>>(Api.getRecommdProduct, {
        params: {
            type: 1,
            page_size: 8,
            page: 1,
            sort: 0
        }, lazy: true
    }), startTime, 'ftShopList'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 3, page: 1 }, lazy: true }), startTime, 'feaIndexAd'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<brandMenu>>(Api.getBrands, { lazy: true }), startTime, 'brandRecommend'),
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
        }, lazy: true
    }), startTime, 'newArrivalShopList'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<Ad>>(Api.getIndexAd, { params: { ad_position: 8, page: 1 }, lazy: true }), startTime, 'couponAd')
])

console.timeEnd('Test')



</script>

<!-- <style scoped lang="less">
.ps-page {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .ps-instagram {
        // padding-bottom: 3.125rem;

        .container {
            .ps-section__content {
                .row {
                    .reviews {
                        height: 3rem;
                        overflow: hidden;
                        -webkit-line-clamp: 2;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        word-break: break-all;
                    }

                    .ps-image--transition {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 60%;

                        /*  img {
                            height: 50%;
                        } */
                    }

                    .ps-image--transition:hover::before {
                        background-color: transparent;
                    }
                }
            }
        }

        .ps-section__content {
            .col-6 {
                padding: 1.5rem .625rem;
            }
        }
    }


    .ps-home--1 {
        .ps-discount--block {
            .discountBanner {
                .ps-banner {
                    background: transparent !important;
                }

                margin-top: 5.625rem;

                img {
                    width: 100%;
                    object-fit: fill;
                    height: 100%;
                    min-height: 120px;
                }

                .discountBannerContent {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    .leftInfo {
                        width: 85%;
                    }

                    .rightInfo {
                        width: 15%;
                        color: white;
                        text-align: center;
                        line-height: 1;

                        .discountNum {
                            font-size: 70px;
                            font-style: italic;
                            height: 75px;
                            overflow: hidden;
                        }

                        .discountDialog {
                            font-size: 14px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                        }

                    }

                    .ps-banner__title,
                    .ps-banner__desc {
                        font-size: 24px;
                        color: white;
                        text-align: center;
                        margin-bottom: 0;
                        line-height: 43px;
                    }

                    .ps-banner__title {
                        .discountNum {
                            font-size: 30px;
                            font-weight: bold;
                        }
                    }

                    .ps-banner__desc {
                        font-size: 20px;
                        width: 100%;

                        .ps-btn {
                            min-width: 130px;
                            font-size: 25px;
                            font-weight: bold;
                            background-color: black !important;
                            border-color: black !important;
                        }
                    }
                }
            }

            @media screen and (max-width:768px) {
                .discountBanner {

                    .ps-banner {

                        .discountBannerContent {
                            display: flex;
                            justify-content: space-around;
                            align-items: center;

                            .leftInfo {
                                width: 85%;
                            }

                            .rightInfo {
                                width: 15%;
                                color: white;
                                text-align: center;
                                line-height: 1;

                                .discountNum {
                                    font-size: 25px;
                                    font-style: italic;
                                    line-height: 25px;
                                    height: 100%;
                                    overflow: hidden;
                                }

                                .discountDialog {
                                    font-size: 14px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    cursor: pointer;
                                }

                            }

                            .ps-banner__title,
                            .ps-banner__desc {
                                font-size: 20px;
                                color: white;
                                text-align: center;
                                margin-bottom: 0;
                                line-height: 1;
                            }

                            .ps-banner__title {
                                .discountNum {
                                    font-size: 22px;
                                    font-weight: bold;
                                }
                            }

                            .ps-banner__desc {
                                font-size: 16px;
                                width: 100%;

                                .ps-btn {
                                    min-width: 70px;
                                    font-size: 16px;
                                    padding: 5px 10px;
                                }
                            }
                        }
                    }


                }
            }
        }

        .ps-category--section {
            padding: 5.625rem 0;
        }

        .bannerBigImg {
            min-height: 41.6667vw;

            :deep(.el-loading-mask) {
                z-index: 0
            }

            .indexBannerSwpier {
                --swiper-navigation-size: 0; // 隐藏默认箭头

                .swiper {
                    z-index: 0;

                    .swiper-wrapper {
                        .swiper-slide {
                            .ps-banner {
                                .ps-banner__content {
                                    .ps-banner__title {
                                        max-width: 43.75rem;
                                    }
                                }
                            }
                        }
                    }

                    @media screen and (max-width:75rem) {

                        .swiper-button-prev,
                        .swiper-button-next {
                            display: none;
                        }
                    }

                    .swiper-button-prev,
                    .swiper-button-next {
                        width: 3.5rem;
                        height: 3.5rem;
                        background-color: rgba(255, 255, 255, 0.1) !important;
                        transition: all .4s ease;
                        border-radius: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
        }



    }


    .couponDialog {
        .couponBody {
            .title {
                font-size: 1.25rem;
                margin-bottom: 1.5625rem;
                font-family: Arial;
                font-weight: bold;
                color: #000000;

                .collect {
                    margin-bottom: .9375rem;
                    text-align: center;
                }

                .title-tip {
                    font-size: 1rem;
                    font-weight: normal;
                    padding-left: .9375rem;
                }

                .toLogin {
                    cursor: pointer;
                    color: @useCenterTextNuxtLink;
                    transition: all 0.4s ease;
                }

                .toLogin:hover {
                    cursor: pointer;
                    color: #D9121F;
                }
            }
        }
    }

}

.ps-home--1 {
    padding-bottom: 5.625rem;

    .ps-product--featured {
        .ps-section__content {
            .ps-section__link {
                display: block;
            }
        }
    }
}

.ps-home--1 .ps-product--carousel {
    padding-bottom: 5.625rem;
}

.ps-home--1 .ps-product--featured,
.ps-home--1 .ps-section--blog,
.ps-home--1 .ps-category--section {
    padding: 5.625rem 0;
}

@media screen and (max-width:1150px) {
    :deep(.el-dialog) {
        width: 70% !important;
    }
}

@media screen and (max-width:996px) {
    :deep(.el-dialog) {
        width: 80% !important;
    }
}

@media screen and (max-width:750px) {
    :deep(.el-dialog) {
        width: 90% !important;
    }
}
</style> -->