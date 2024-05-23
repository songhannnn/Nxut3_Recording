/*
 * @Author: songhannn
 * @Date: 2023-11-17 14:31:04
 * @LastEditors: songhannn
 * @LastEditTime: 2024-05-21 09:16:59
 * @FilePath: \nuxt-recording\nuxt.config.ts
 * @Description: 
 * 
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
    'nuxt-icon'
  ],
  i18n: {
    strategy: 'prefix_and_default', // 添加路由前缀的方式
    locales: ["en", "zh", "ja"], //配置语种
    defaultLocale: 'en', // 默认语种
    vueI18n: './i18n.config.ts', // 通过vueI18n配置
  },
  nitro: {
    // 服务端转发-即部署上后代理
    routeRules: {
      '/yob/**': {
        proxy: 'https://qd.scds.site/**'
      },
      '/v3/**': {
        proxy: 'http://v4-luxuryhub.scds.site/**'
      }
    }
  },
})
