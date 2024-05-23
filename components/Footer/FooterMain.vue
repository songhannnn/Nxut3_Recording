<template>
    <footer class="ps-footer ps-footer--1">
        <div class="container">
            <div class="ps-footer__middle">
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="ps-footer--address" v-if="footerInfo">
                            <div class="ps-logo">
                                <NuxtLinkLocale :to="{ path: '/', query: { currency: route.query.currency } }"
                                    :title="footerInfo.data.site_name"> <img :src="footerInfo.data.logo"
                                        :alt="footerInfo.data.site_name">
                                </NuxtLinkLocale>
                            </div>
                            <p>{{ footerInfo.data.shop_address }}</p>
                            <p>
                                <a target="_blank"
                                    :href="`https://www.google.com/maps/search/?api=1&query=${footerInfo.data.location}`">
                                    {{ $t('pc_show_on_map') }}
                                </a>

                            </p>
                            <ul style="display: flex;" class="ps-social" v-if="footerInfo.data.is_show_app_info == '1'">
                                <li>
                                    <a class="ps-social__link pinterest" :href="footerInfo.data.ios_download_url">
                                        <!-- preImgProxy() +  -->
                                        <el-image :src="footerInfo.data.ios_download_qr_code" alt="ios"></el-image>
                                    </a>
                                </li>
                                <li>
                                    <a class="ps-social__link pinterest"
                                        :href="footerInfo.data.android_app_download_url">
                                        <!-- preImgProxy() + -->
                                        <el-image :src="footerInfo.data.android_download_qr_code"
                                            alt="android"></el-image>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-8 col-lg-5">
                        <div class="row">
                            <div class="col-6 col-md-4">
                                <div class="ps-footer--widget">
                                    <ul class="ps-footer__list"
                                        v-if="clothingTopLevelData && clothingTopLevelData.data">
                                        <li v-for="item in clothingTopLevelData.data">
                                            <NuxtLinkLocale
                                                :to="{ path: '/ShopList/1', query: { currency: route.query.currency, category: item.id } }">
                                                {{ item.name }}
                                            </NuxtLinkLocale>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="ps-footer--widget">
                                    <ul class="ps-footer__list" v-if="infoCategory && infoCategory.data.length">
                                        <li v-for="item in infoCategory.data" :key="item.id">
                                            <NuxtLinkLocale
                                                :to="{ path: '/Blog/' + item.id, query: { currency: route.query.currency } }"
                                                style="cursor: pointer;">
                                                {{ item.name }}
                                            </NuxtLinkLocale>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="ps-footer--widget">
                                    <ul class="ps-footer__account">
                                        <li>
                                            <NuxtLinkLocale
                                                :to="{ path: '/UserCenter/order', query: { currency: route.query.currency } }">
                                                {{ $t('pc_my_account') }}
                                            </NuxtLinkLocale>
                                        </li>
                                        <li v-if="footerInfo && footerInfo.data.is_cashback == '1'">
                                            <NuxtLinkLocale
                                                :to="{ path: '/Terms/cashback-promotion', query: { currency: route.query.currency } }">
                                                {{ $t('pc_Cashback_Promotion') }}
                                            </NuxtLinkLocale>
                                        </li>
                                        <li v-if="footerInfo && footerInfo.data.is_distribution == '1'">
                                            <NuxtLinkLocale
                                                :to="{ path: '/Terms/referralrewards-promotion', query: { currency: route.query.currency } }">
                                                {{ $t('my_invitation_reward') }}
                                            </NuxtLinkLocale>
                                        </li>
                                        <li>
                                            <NuxtLinkLocale
                                                :to="{ path: '/Faq', query: { currency: route.query.currency } }">
                                                {{ $t('my_faq') }}
                                            </NuxtLinkLocale>
                                        </li>
                                        <li>
                                            <NuxtLinkLocale
                                                :to="{ path: '/Terms/returns-policy', query: { currency: route.query.currency } }">
                                                {{ $t('pc_returns_refunds') }}
                                            </NuxtLinkLocale>
                                        </li>
                                        <li>
                                            <NuxtLinkLocale
                                                :to="{ path: '/Terms/logistics-shipping', query: { currency: route.query.currency } }">
                                                {{ $t('goodsfree_shipping') }}
                                            </NuxtLinkLocale>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 col-lg-4">
                        <div class="ps-footer--newsletter">
                            <h5 class="ps-footer__title">{{ $t('pc_join_us') }}</h5>
                            <div class="ps-form--newsletter">
                                <div class="input-group">
                                    <input v-model="emailToSubscribe" class="form-control ps-input" type="text"
                                        :placeholder="$t('pc_your_email')">
                                    <button class="ps-btn ps-btn--danger ps-btn--rounded" @click="subscribe">
                                        {{ $t('pc_subscribe') }}/{{ $t('pc_unsubcribe') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-footer--service">
                <div class="container">
                    <div class="ps-footer__row">
                        <p class="ps-footer__item">
                            <a class="ps-footer__link" href="#">
                                <img src="~images/icon/delivery.svg" alt="Free delivery" title="Free delivery">
                                <span>{{ $t('about_car') }}</span>
                            </a>
                        </p>
                        <p class="ps-footer__item">
                            <a class="ps-footer__link" href="#">
                                <img src="~images/icon/non-contact.svg" alt="Non-contact shipping"
                                    title="Non-contact shipping">
                                <span>{{ $t('about_plane') }}</span>
                            </a>
                        </p>
                        <p class="ps-footer__item">
                            <a class="ps-footer__link" href="#">
                                <img src="~images/icon/wallet.svg" alt="Money-back guarantee"
                                    title="Money-back guarantee">
                                <span>{{ $t('about_refund') }}</span>
                            </a>
                        </p>
                        <p class="ps-footer__item">
                            <a class="ps-footer__link" href="#">
                                <img src="~images/icon/security.svg" alt="Secure payments" title="Secure payments">
                                <span>{{ $t('about_secure_payments') }}</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="ps-footer--bottom" v-if="footerInfo">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <p class="ps-footer__contact">
                            <NuxtLink :href="`tel:${footerInfo.data.whatsapp}`" :title="footerInfo.data.whatsapp">
                                <!-- {{ footerInfo.data.whatsapp }} -->
                                [{{ $t('pc_phone_protected') }}]
                            </NuxtLink>
                            <NuxtLink :href="`mailto:${footerInfo.data.email}?subject=subject&body=body`"
                                :title="footerInfo.data.email">
                                [{{ $t('pc_email_protected') }}]
                            </NuxtLink>
                        </p>
                        <p class="ps-footer__copyright">{{ $t('pc_copyright') }} © 2011.
                            {{ $t('pc_right_by') }}
                            <NuxtLinkLocale :to="{ path: '/', query: { currency: route.query.currency } }"
                                :title="footerInfo.data.site_name">{{ footerInfo.data.site_name }}
                            </NuxtLinkLocale>.
                            <NuxtLinkLocale
                                :to="{ path: '/terms/guarantee-policy', query: { currency: route.query.currency } }">
                                {{ $t('pc_guarantee') }}
                            </NuxtLinkLocale>
                            &nbsp;|&nbsp;
                            <NuxtLinkLocale
                                :to="{ path: '/terms/privacy-policy', query: { currency: route.query.currency } }">
                                {{ $t('register_privacy') }}
                            </NuxtLinkLocale>
                            &nbsp;|&nbsp;<NuxtLinkLocale :to="{ path: '/sitemap' }">{{ $t('pc_Sitemap') }}
                            </NuxtLinkLocale>
                        </p>
                    </div>
                    <div class="col-12 col-md-4 text-right">
                        <img src="/img/payment.png" alt="pay method">
                        <img class="img-white" src="/img/payment-white.png">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang='ts'>
import { recordRequestTime } from '~/untils/tools';
const route = useRoute()
const { t } = useI18n()

defineProps<{
    footerInfo:ResOptions<siteBaseInfo>,
    clothingTopLevelData:ResOptions<topLevel[]>,
    infoCategory:any
}>()
const emailToSubscribe = ref('')

const subscribe = () => {
    const email = emailToSubscribe.value.trim()
    const emailRegex = /^[A-Za-z0-9\u4e00-\u9fa5]+\.?[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (emailRegex.test(email) && email) {
        EmailSubscribe({
            email: emailToSubscribe.value,
        }).then(res => {
            const { data: subscribeRes } = res
            if (subscribeRes.value.code == stateCode.successCode) {
                ElMessage({
                    message: t('pc_elmessage_Subscribe_successfully'),
                    grouping: true,
                    type: 'success',
                    offset: 140
                })
                emailToSubscribe.value = ''
            }
            else if (subscribeRes.value.code == stateCode.failCode) {
                // console.log("取消订阅");
                EmailUnsubscribe({
                    email: emailToSubscribe.value,
                }).then(res => {
                    const { data: subscribeRes } = res
                    if (subscribeRes.value.code == stateCode.successCode) {
                        ElMessage({
                            message: t('pc_elmessage_Unsubscribe_successfully'),
                            grouping: true,
                            type: 'success',
                            offset: 140
                        })
                        emailToSubscribe.value = ''
                    }
                })
            }
        }).catch(err => {
            console.log('subscribeErr', err);
        })
    }
    else {
        ElMessage.error({
            message: t('pc_input_correct_email'),
            grouping: true,
            offset: 140
        })
    }
}



</script>

<style scoped lang="less">
.ps-footer {
    .ps-footer__middle {
        .ps-footer--newsletter {
            .ps-form--newsletter {
                .input-group {
                    .ps-btn {
                        border-top-left-radius: 50px;
                        border-bottom-left-radius: 50px;
                        width: 70%;
                    }
                }
            }
        }
    }

}
</style>