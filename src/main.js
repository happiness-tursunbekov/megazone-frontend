import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'
import { createStore } from './store'
import vueAxios, { loadUser } from './plugins/vue-axios'
import vueCookie from './plugins/vue-cookie'
import vuePermission from './plugins/vue-permission'
import globals from './plugins/globals'
import vuePace from './plugins/vue-pace'
import Snotify from 'vue3-snotify'

export async function createApp(cookie, req, res) {
  const app = createSSRApp(App)

  const store = createStore()
  const router = createRouter()
  app.use(vueCookie, { cookie, req, res })
  app.use(Snotify)
  app.use(globals)
  app.use(store)
  app.use(vuePace)
  app.use(vueAxios)
  // loading user if logged in
  await loadUser(app)
  app.use(router)
  app.use(vuePermission)
  return { app, router }
}