<template>
    <div class="test">
        <a href="#" v-for="lc in locales" :key="(lc as string)" @click.prevent.stop="setLocale(lc as string)">
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
*/

</script>

<style scoped lang="scss">
.test {
    a {
        margin: 5px;
    }
}
</style>