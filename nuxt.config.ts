// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@element-plus/nuxt'
  ],
  i18n: {
    strategy: 'prefix_and_default', // 添加路由前缀的方式
    locales: ["en", "zh", "ja"], //配置语种
    defaultLocale: 'en', // 默认语种
    vueI18n: './i18n.config.ts', // 通过vueI18n配置
  },
})
