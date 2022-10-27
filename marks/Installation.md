# Installation

```
npm i vue-awesome-sidebar --save
//or
yarn i vue-awesome-sidebar --save
```

Install the component globally.

Vue js 3:
```js
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'

const app = createApp(App)
app.use(vueAwesomeSidebar)
app.mount("#app")
```
Nuxt js 3:
```js
import vueAwesomeSidebar from "vue-awesome-sidebar";
import "vue-awesome-sidebar/dist/vue-awesome-sidebar.css";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vueAwesomeSidebar);
});
```
or Install the component loacally : 
```js
//App.vue
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'
export default {
  components: {
    vueAwesomeSidebar
  }
}
```