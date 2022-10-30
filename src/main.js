import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueAwesomeSidebar from 'vue-awesome-sidebar'
// import 'vue-awesome-sidebar/dist/vue-awesome-siderbar.css'

import './style.scss'
import './custom.scss'
import { createRouter, createWebHashHistory } from 'vue-router'

import GettingStarted from './components/GettingStarted.vue'
import Installation from './components/Installation.vue'
import Props from './components/Props.vue'
import Events from './components/Events.vue'
import Slots from './components/Slots.vue'
import Styles from './components/Styles.vue'
import Css from './components/Css.vue'
import Sass from './components/Sass.vue'

//console.log(vueAwesomeSidebar)

const routes = [
  { path: '/', component: Installation },
  { path: '/getting-started', component: GettingStarted },
  { path: '/props', component: Props },
  { path: '/events', component: Events },
  { path: '/slots', component: Slots },
  { path: '/styles/sass', component: Sass },
  { path: '/styles/css', component: Css },
]

const router = createRouter({
  history: createWebHashHistory(''),
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
