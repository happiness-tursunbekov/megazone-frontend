import { reactive } from "vue"
import config from "~/config"
import urls from "~/urls"
import ru from "~/locales/ru"
import en from "~/locales/en"

const locales = {
    ru,
    en
};
let lang = null;

let title = null;

let snotify = null;

export default {
    install(app, options) {
        lang = reactive({
            $current: app.config.globalProperties.$cookie.getItem('lang') || config.lang,
            $setLang(locale) {
                this.$current = locale;
                app.config.globalProperties.$cookie.setItem('lang', locale, Infinity, '/')
                location.reload()
            },
            app: {},
            list: Object.keys(locales)
        })

        lang.app = locales[lang.$current] || locales.ru

        title = reactive({
            value: config.siteName,
            setTitle(value) {
                this.value = value ? value + ' - ' + config.siteName : config.siteName
                if (!import.meta.env.SSR)
                    document.title = this.value;
            }
        })

        app.config.globalProperties.$title = title

        app.config.globalProperties.$lang = lang

        app.config.globalProperties.$urls = urls
        app.config.globalProperties.$config = config
        app.config.globalProperties.$modal = reactive({
            active: false,
            count: 0,
            show() {
                this.count++;
                this.active = true;
            },

            hide() {
                this.count--;
                if (this.count < 1) {
                    this.count = 0;
                    this.active = false;
                }
            }
        })

        snotify = app.config.globalProperties.$snotify
    }
}

export function useUrls() {
    return urls;
}

export function useLang() {
    return lang;
}

export function useSnotify() {
    return snotify;
}

export function setTitle(value) {
    title.setTitle(value)
}
