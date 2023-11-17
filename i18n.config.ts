import en from './lang/en.json'
import zh from './lang/zh.json'
import ja from './lang/ja.json'

export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: 'en',
    messages: {
        en: en,
        zh: zh,
        ja: ja,
    }
}))