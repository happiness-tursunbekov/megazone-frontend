import {reactive, watch} from "vue"
import config from "~/config"
import urls from "~/urls"
import ru from "~/locales/ru"
import en from "~/locales/en"
import {useAxios} from "./vue-axios"

const locales = {
    ru,
    en
};
let lang = null;

let title = null;

let snotify = null;

let cart = null;

export default {
    install(app, options) {
        lang = reactive({
            $current: app.config.globalProperties.$cookie.getItem('lang') || config.lang,
            $setLang(locale) {
                app.config.globalProperties.$cookie.setItem('lang', locale, Infinity, '/')
                useAxios().setLocalization(locale)
                this.app = locales[locale] || locales.ru
                this.$current = locale;
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

        cart = reactive({
            subtotalPrice: 0,
            items: [],
            totalQty: 0,
            shippingType: 'free',
            addItem(store, product, qty, size, color) {
                const item = this.items.filter(it => it.product.id === product.id);
                if (this.items.length === 0 || item.length === 0)
                    this.items.push({
                        product: {
                            id: product.id,
                            title: product.title,
                            files: product.files
                        },
                        store: {
                            id: store.id,
                            name: store.name,
                            slug: store.slug
                        },
                        qty: qty || 1,
                        size: size || null,
                        color: color || null,
                        price: product.price,
                        currencyType: product.currencyType
                    })
                else
                    item[0].qty += qty
                app.config.globalProperties.$snotify.success(lang.app.addedToCartSuccessfullyMsg)
                this.updateTotal()
            },
            removeItem(key) {
                this.items.splice(key, 1)
                this.updateTotal()
            },
            updateTotal() {
                try {
                    this.totalQty = this.items.reduce((partialSum, a) => partialSum + a.qty, 0)
                    this.subtotalPrice = this.items.reduce((partialSum, a) => partialSum + (a.price * a.qty), 0)
                    window.localStorage.setItem('cart', JSON.stringify(this.items))
                } catch (e) {
                    this.clear()
                }
            },
            clear() {
                this.items = []
                this.totalQty = 0
                this.totalPrice = 0
                window.localStorage.removeItem('cart')
            }
        })

        app.config.globalProperties.$title = title

        app.config.globalProperties.$lang = lang

        app.config.globalProperties.$urls = urls
        app.config.globalProperties.$config = config
        app.config.globalProperties.$cart = cart
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

export function useCart() {
    return cart;
}
