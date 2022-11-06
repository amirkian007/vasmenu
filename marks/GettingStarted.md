# Basic Usage

a simple example would be like this : 
check out [**_props_**](#props) for properites

NOTE : <ins>you have to load the icons separately</ins> like loading material-icons files with cdn

```html

<template>
  <VueAwesomeSideBar
      v-model:miniMenu="miniMenu"
      v-model:collapsed="collapsed"
      :menu="testMenu"
      vueRouterEnabel
    ></VueAwesomeSideBar>
</template>

<script setup>
import { ref } from 'vue'

const collapsed = ref(false)
const miniMenu = ref(false)

const testMenu = [
  {
    name: 'Getting Started',
    icon: { text: 'home' , class: 'material-icons-outlined' },
    children: [
      {
        name: 'level 1.1',
        href: '/a',
        icon: { text: 'home' , class: 'material-icons-outlined'},
        children: [
          {
            href: '/b',
            name: 'level 1.1.1',
          },
        ]
      },
      {
        name: 'level 1.2'
      }
    ],
  },
  {
    header: 'Settings'
  },
  {
    name: 'Dashboard',
    icon: { class: 'material-icons-outlined', text: 'dashboard' },
    children: [
      {
        href: '/c',
        name: 'level 2.1',
      },
    ]
  },
  {
    name: 'close menu',
    icon: { text: 'settings', class: 'material-icons-outlined' },
  },
]
</script>
```
