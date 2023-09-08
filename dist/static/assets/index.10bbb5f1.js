var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = typeof require !== "undefined" ? require : (x) => {
  throw new Error('Dynamic require of "' + x + '" is not supported');
};
import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, b as createTextVNode, d as createBlock, e as resolveDynamicComponent, S as Suspense, f as createRouter$1, g as createWebHistory, h as axios, i as createStore$1, j as createSSRApp, s as sync } from "./vendor.97c1b2ce.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var App_vue_vue_type_style_index_0_lang = "\n@font-face {\n  font-family: 'Inter';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url('__VITE_ASSET__bab4e808__$_#iefix__') format('woff2'),\n    url('__VITE_ASSET__7b187d57__') format('woff');\n}\n.inter {\n  font-family: 'Inter';\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Home");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("| ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("About");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Product 1");
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_router_link, { to: "/" }, {
      default: withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }),
    _hoisted_2,
    createVNode(_component_router_link, { to: "/about" }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }),
    createVNode(_component_router_link, { to: { name: "products.show", params: { id: 1 } } }, {
      default: withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }, 8, ["to"]),
    createVNode(_component_router_view, null, {
      default: withCtx(({ Component }) => [
        (openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(Component)))
          ]),
          _: 2
        }, 1024))
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
function authenticated({ next, store }) {
  if (!store.getters.user.id) {
    return next({
      name: "home"
    });
  }
  return next();
}
function createRouter() {
  return createRouter$1({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: () => __vitePreload(() => import("./Home.5e612038.js"), true ? ["assets/Home.5e612038.js","assets/Home.b0141ad0.css","assets/vendor.97c1b2ce.js"] : void 0)
      },
      {
        path: "/about",
        name: "about",
        component: () => __vitePreload(() => import("./About.0b8bb967.js"), true ? ["assets/About.0b8bb967.js","assets/About.151bf7ba.css","assets/vendor.97c1b2ce.js"] : void 0)
      },
      {
        path: "/products/:id",
        name: "products.show",
        component: () => __vitePreload(() => import("./Show.87303d1d.js"), true ? ["assets/Show.87303d1d.js","assets/vendor.97c1b2ce.js"] : void 0),
        meta: {
          middleware: [authenticated]
        }
      }
    ]
  });
}
let axiosInstance = null;
var vueAxios = {
  install: (app, options) => {
    axios.defaults.headers.baseURL = "/";
    const token = app.config.globalProperties.$cookie.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    app.config.globalProperties.axios = axios;
    axiosInstance = axios;
  }
};
function useAxios() {
  return axiosInstance;
}
async function loadUser(app) {
  if (app.config.globalProperties.axios.defaults.headers.common["Authorization"])
    await app.config.globalProperties.$store.dispatch("fetchUser");
}
function createStore() {
  return createStore$1({
    state() {
      return {
        user: {}
      };
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      }
    },
    actions: {
      setUser({ commit }, value) {
        commit("setUser", value);
      },
      async fetchUser({ commit }) {
        try {
          const { data } = await useAxios().get("http://127.0.0.1:8000/api/_auth/user");
          commit("setUser", data);
        } catch (e) {
          commit("setUser", {});
        }
      }
    },
    getters: {
      user: (state) => state.user
    }
  });
}
let cookieInstance = null;
var vueCookie = {
  install: (app, options) => {
    cookieInstance = {
      getItem: (sKey) => {
        return options.cookie ? decodeURIComponent(options.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null;
      },
      setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
          return false;
        }
        let sExpires = "";
        if (vEnd) {
          switch (vEnd.constructor) {
            case Number:
              sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
              break;
            case String:
              sExpires = "; expires=" + vEnd;
              break;
            case Date:
              sExpires = "; expires=" + vEnd.toUTCString();
              break;
          }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
      },
      removeItem: function(sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) {
          return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
      },
      hasItem: function(sKey) {
        return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(options.cookie);
      },
      keys: function() {
        let aKeys = options.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
          aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
      }
    };
    app.config.globalProperties.$cookie = cookieInstance;
  }
};
var vuePermission = {
  install(app, options) {
    function middlewarePipeline(context, middleware, index) {
      const nextMiddleware = middleware[index];
      if (!nextMiddleware) {
        return context.next;
      }
      return () => {
        const nextPipeline = middlewarePipeline(context, middleware, index + 1);
        nextMiddleware(__spreadProps(__spreadValues({}, context), { next: nextPipeline }));
      };
    }
    app.config.globalProperties.$router.beforeEach((to, from, next) => {
      if (!to.meta || !to.meta.middleware) {
        return next();
      }
      const middleware = to.meta.middleware;
      const context = {
        to,
        from,
        next,
        store: app.config.globalProperties.$store
      };
      return middleware[0](__spreadProps(__spreadValues({}, context), {
        next: middlewarePipeline(context, middleware, 1)
      }));
    });
  }
};
async function createApp(cookie) {
  const app = createSSRApp(_sfc_main);
  const store = createStore();
  const router = createRouter();
  sync(store, router);
  app.use(store);
  app.use(vueCookie, { cookie });
  app.use(vueAxios);
  await loadUser(app);
  app.use(router);
  app.use(vuePermission);
  return { app, router };
}
createApp(document.cookie).then(({ app, router }) => {
  router.isReady().then(() => {
    app.mount("#app");
  });
});
export { __vitePreload as _, useAxios as u };
