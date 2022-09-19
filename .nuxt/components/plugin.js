import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  NuxtLogo: () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  UserCard: () => import('../../components/UserCard.vue' /* webpackChunkName: "components/user-card" */).then(c => wrapFunctional(c.default || c)),
  UserCardDoing: () => import('../../components/UserCardDoing.vue' /* webpackChunkName: "components/user-card-doing" */).then(c => wrapFunctional(c.default || c)),
  UserCardDone: () => import('../../components/UserCardDone.vue' /* webpackChunkName: "components/user-card-done" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
