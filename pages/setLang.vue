<template>
    <div class="test">
        <a href="#" v-for="lc in locales" :key="(lc as unknown as string)" @click.prevent.stop="setLocale(lc as unknown as string)">
            {{ lc }}
        </a>
        <br>
        {{ $t('home') }}
    </div>
</template>

<script setup lang='ts'>
const { locale, locales, setLocale } = useI18n()
/* 
   locale 当前i18n的语言 en
   locales i18n中配置的所有语言  {0: 'en', 1: 'zh', 2: 'ja'}
   setLocale 设置i18n语言
   setLocale方法传入所需要跳转语言的string，i18n.config.ts中有配置的语言，这里是通过locale获取到并传入
*/

</script>

<style scoped lang="scss">
.test {
    a {
        margin: 5px;
    }
}
</style>