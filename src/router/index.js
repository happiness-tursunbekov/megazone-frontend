import {createMemoryHistory, createRouter as _createRouter, createWebHistory} from 'vue-router'

import authenticated from '../middleware/authenticated'

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue')
      },
      {
        path: '/!about',
        name: 'about',
        component: () => import('../pages/About.vue')
      },
      {
        path: '/!products/:id',
        name: 'products.show',
        component: () => import('../pages/products/Show.vue')
      },
      {
        path: '/!categories',
        name: 'categories.index',
        component: () => import('../pages/categories/Index.vue')
      },
      {
        path: '/!categories/:id',
        name: 'categories.show',
        component: () => import('../pages/categories/Show.vue')
      },
      {
        path: '/!stores',
        name: 'stores.index',
        component: () => import('../pages/stores/Index.vue')
      },
      {
        path: '/!stores/create',
        name: 'stores.create',
        component: () => import('../pages/stores/Create.vue')
      },
      {
        path: '/:store',
        name: 'stores.show',
        component: () => import('../pages/stores/Show.vue')
      },
      {
        path: '/:store/edit',
        name: 'stores.edit',
        component: () => import('../pages/stores/Edit.vue')
      },
      {
        path: '/:store/categories/:id',
        name: 'stores.categories.show',
        component: () => import('../pages/stores/categories/Show.vue')
      },
      {
        path: '/:store/products/:id',
        name: 'stores.products.show',
        component: () => import('../pages/stores/products/Show.vue')
      },
      {
        path: '/:store/settings',
        name: 'stores.settings.index',
        component: () => import('../pages/stores/settings/Index.vue')
      },
      {
        path: '/:store/settings/categories/:id',
        name: 'stores.settings.categories.show',
        component: () => import('../pages/stores/settings/categories/Show.vue')
      },
      {
        path: '/:store/settings/categories',
        name: 'stores.settings.categories.index',
        component: () => import('../pages/stores/settings/categories/Index.vue')
      }
    ]
  });
}