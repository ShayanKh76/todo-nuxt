import { wrapFunctional } from './utils'

export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as UserCard } from '../../components/UserCard.vue'
export { default as UserCardDoing } from '../../components/UserCardDoing.vue'
export { default as UserCardDone } from '../../components/UserCardDone.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyUserCard = import('../../components/UserCard.vue' /* webpackChunkName: "components/user-card" */).then(c => wrapFunctional(c.default || c))
export const LazyUserCardDoing = import('../../components/UserCardDoing.vue' /* webpackChunkName: "components/user-card-doing" */).then(c => wrapFunctional(c.default || c))
export const LazyUserCardDone = import('../../components/UserCardDone.vue' /* webpackChunkName: "components/user-card-done" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
