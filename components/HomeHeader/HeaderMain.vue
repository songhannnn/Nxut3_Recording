<template>
    <div>
        <HomeHeaderMenu :clothing-top-level-data="clothingTopLevelData" :brands-menu="brandsMenu"
            :collection-menu="collectionMenu" :filter="filter"></HomeHeaderMenu>
    </div>
</template>

<script setup lang='ts'>
import { recordRequestTime } from '~/untils/tools';

// 数据获取
const startTime = Date.now();
console.time('headerMain');
const [
    { data: clothingTopLevelData },
    { data: brandsMenu },
    { data: collectionMenu },
    { data: filter },
    { data: countryCurrency }
] = await Promise.all([
    recordRequestTime(useServerRequest<ResOptions<topLevel[]>>(Api.getWomenMenCategory, { body: { parent_id: 0, gender_ids: [] }, lazy: true }), startTime, 'clothingTopLevelData'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<brandMenu>>(Api.getBrands, { lazy: true }), startTime, 'brandsMenu'),
    recordRequestTime(useServerRequest<ResOptionsTwoDataArray<collectionMenu>>(Api.getCollections, { lazy: true }), startTime, 'collectionMenu'),
    recordRequestTime(useServerRequest<ResOptions<leftFilter>>(Api.getFilterCategory, { lazy: true }), startTime, 'filter'),
    recordRequestTime(useServerRequest<ResOptions<langCurr>>(Api.getCountryCurrency, { lazy: true }), startTime, 'countryCurrency'),
])
console.timeEnd('headerMain');


</script>
<!-- <style scoped lang="less">
/* 解决右侧抽屉打开内容宽度改变问题*/
:global(.el-popup-parent--hidden) {
    width: 100% !important;
}

.header {
    width: 100%;
    height: 100%;

    .ps-header.ps-header--sticky {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;
    }

    .ps-header {
        display: block;
        // z-index: 1041; // 设置了头部图标滑动才能正常显示

        .ps-header__inner {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0;

            .ps-header__center {
                .menu {
                    .has-mega-menu {
                        a {
                            .sub-toggle {
                                width: inherit;
                                color: #191919;
                                font-size: .8125rem;

                                .svg-inline--fa {
                                    font-weight: bold !important;
                                }
                            }
                        }
                    }
                }
            }

            .ps-header__left {
                // padding-right: .7292vw;

                .ps-logo {
                    a {
                        img {
                            max-height: 3.3125rem;
                            width: 100%;
                        }
                    }

                }
            }

            .ps-header__left,
            .ps-header__right {
                position: static;
            }

            .ps-header__right {
                .ps-language-currency {
                    width: 100%;
                    max-width: 184px;
                    margin-right: 5px;

                    .el-select {
                        margin: 0 !important;

                        :deep(.el-input__wrapper) {
                            font-size: .8125rem;
                            box-shadow: none;
                            padding: .0625rem .375rem;

                            .el-input__suffix {
                                .el-input__suffix-inner {
                                    .el-icon {
                                        margin-left: 2px;
                                    }
                                }
                            }

                        }

                        :deep(.el-input__wrapper:hover) {
                            box-shadow: 0 0 0 0 !important;
                        }

                        :deep(.el-input.is-focus .el-input__wrapper) {
                            box-shadow: 0 0 0 0 !important;
                        }

                        :deep(.el-input__wrapper.is-focus) {
                            box-shadow: 0 0 0 0 !important;
                        }

                        /* 下拉框*/
                        :deep(.select-down) {
                            background-color: white;

                            .el-scrollbar {
                                .el-select-dropdown__wrap {
                                    .el-select-dropdown__list {
                                        margin: 0 !important;

                                        .el-select-dropdown__item {
                                            padding: 0 1.5625rem;
                                            color: #191919;
                                        }

                                        .el-select-dropdown__item.selected {
                                            background-color: #ddd;
                                        }

                                        .el-select-dropdown__item:hover {
                                            color: white;
                                            background-color: red;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .ps-header__icons {
                    .ps-header__item {
                        padding: 0 10px;
                        line-height: 1;

                        .ps-header__link {
                            cursor: pointer;
                        }


                    }

                    .open-user {

                        img {
                            vertical-align: baseline;
                        }

                        .ps-login--modal {
                            .userInfo {
                                color: black;
                                font-size: 1.25rem;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;

                                .loginOut {
                                    margin-top: .9375rem;
                                    background-color: #191919;
                                    cursor: pointer;
                                    color: white;
                                    border-radius: 3.125rem;
                                    font-weight: 500;
                                    box-shadow: none;
                                    text-shadow: none;
                                    text-align: center;
                                    padding: .625rem 1.5625rem;
                                    line-height: 1.5rem;
                                    display: inline-block;
                                    border: .0625rem solid transparent;
                                    transition: all 0.3s ease-in-out;
                                }

                                .loginOut:hover {
                                    background-color: #D9121F;
                                }

                            }
                        }

                    }

                    // 购物车
                    .open-cart-mini {
                        .ps-cart--mini {
                            padding: 1.875rem .9375rem;

                            .ps-cart__content {

                                .ps-cart__items {
                                    .ps-cart__item {
                                        .ps-product--mini-cart {
                                            align-items: center;

                                            .ps-table__remove {
                                                margin-right: .625rem;
                                            }

                                            .ps-product__thumbnail {
                                                min-height: 5.625rem;
                                            }

                                            .ps-product__content {
                                                padding: 0 .3125rem;

                                                .ps-product__name {
                                                    max-width: 16.9375rem;
                                                    overflow: hidden;
                                                    text-overflow: ellipsis;
                                                    word-break: break-all;
                                                    white-space: nowrap;
                                                    padding-right: 0;
                                                }

                                                .ps-product__meta {
                                                    .size {
                                                        font-size: .8125rem;
                                                        color: #808080;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .ps-cart__empty {
                            display: block;
                        }
                    }
                }
            }

            :deep(.el-overlay) {
                .header-search {
                    .el-drawer__header {
                        flex-direction: column;
                        margin-bottom: 0;

                        .search-top {
                            display: flex;
                            width: 100%;
                            margin-bottom: 1.25rem;

                            .el-drawer__title {
                                text-align: center;
                                font-size: 1.25rem;
                                color: rgb(25, 25, 25);
                                font-weight: 500;
                            }

                            img {
                                cursor: pointer;
                            }
                        }

                        .search-input {
                            width: 100%;

                            .el-input {
                                .el-input__wrapper {
                                    background-color: #F2F2F2;
                                    border-radius: 1.875rem;
                                    border: none;
                                    height: 2.875rem;
                                    box-shadow: none;

                                    .el-input__inner::placeholder {
                                        color: black;
                                        font-size: .9375rem;
                                    }
                                }
                            }
                        }


                    }

                    .content {

                        .brands,
                        .collection,
                        .products {
                            margin-bottom: .3125rem;
                            font-size: 1.25rem;
                            font-weight: bold;

                            &-content {
                                font-size: 1.125rem;
                                font-weight: normal;
                                padding-left: .9375rem;

                                ul {
                                    li {
                                        cursor: pointer;
                                    }
                                }
                            }

                            .products-content {
                                ul {
                                    li {
                                        margin: 10px 0;
                                        display: -webkit-box; //特别显示模式
                                        overflow: hidden; //超出隐藏
                                        text-overflow: ellipsis; // 文本溢出省略号
                                        -webkit-box-orient: vertical; // 盒子中内容竖直排列
                                        -webkit-line-clamp: 2; // 行数
                                    }
                                }
                            }

                        }
                    }

                }
            }

        }
    }

    .ps-header.ps-header--sticky {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1039;
    }

    /*移动端底部*/
    .ps-navigation--footer {
        z-index: 2002;

        .ps-nav__item {
            #close-menu {
                display: block;
            }
        }
    }

    /*移动端菜单*/
    .ps-menu--slidebar {
        display: block;
        z-index: 2001; //头部固定值 2000

        .ps-menu__footer {
            .ps-menu__item {
                .ps-language-currency {
                    width: 7.6875rem;
                    display: flex;

                    .el-select {
                        margin: 0 !important;

                        :deep(.el-input__wrapper) {
                            font-size: .8125rem;
                            box-shadow: none;
                            padding: .0625rem .375rem;

                        }

                        :deep(.el-input__wrapper:hover) {
                            box-shadow: 0 0 0 0 !important;
                        }

                        :deep(.el-input.is-focus .el-input__wrapper) {
                            box-shadow: 0 0 0 0 !important;
                        }

                        :deep(.el-input__wrapper.is-focus) {
                            box-shadow: 0 0 0 0 !important;
                        }

                        /*下拉框*/
                        :deep(.select-down) {
                            background-color: white;

                            .el-scrollbar {
                                .el-select-dropdown__wrap {
                                    .el-select-dropdown__list {
                                        margin: 0 !important;

                                        .el-select-dropdown__item {
                                            padding: 0 1.5625rem;
                                            color: #191919;
                                        }

                                        .el-select-dropdown__item.selected {
                                            background-color: #ddd;
                                        }

                                        .el-select-dropdown__item:hover {
                                            color: white;
                                            background-color: red;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .input-group {
                .form-control {
                    background-color: transparent;
                }

                .input-group-append {
                    display: flex;
                }
            }
        }
    }

}


@media screen and (max-width: 1280px) {
    .header {
        .ps-header {
            .ps-header__inner {
                justify-content: space-between;
            }
        }
    }

}
</style> -->