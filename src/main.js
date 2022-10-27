import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-siderbar.css'

import './style.scss'
import './custom.scss'
import { createRouter, createWebHistory } from 'vue-router'

const GettingStarted = () => import('./components/GettingStarted.vue')
const Installation = () => import('./components/Installation.vue')
const Props = () => import('./components/Props.vue')
const Events = () => import('./components/Events.vue')
const Slots = () => import('./components/Slots.vue')
const Styles = () => import('./components/Styles.vue')

//console.log(vueAwesomeSidebar)

const routes = [
  { path: '/', component: Installation },
  { path: '/getting-started', component: GettingStarted },
  { path: '/props', component: Props },
  { path: '/events', component: Events },
  { path: '/slots', component: Slots },
  { path: '/styles', component: Styles },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  strict: true,
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 ,behavior: 'smooth',}
  }
})

createApp(App)
  .use(vuetify)
  .use(router)
  .use(vueAwesomeSidebar)
  .mount('#app')
