<template>
  <v-app :class="{ bgDark: darkMode ,'white-theme':!darkMode }">
    <v-app-bar
      :elevation="3"
      :theme="darkMode ? 'dark' : 'white'"
      :style="{ paddingLeft: miniwidth, transition: 'all 0.3s' }"
    >
      <v-btn
        variant="outlined"
        icon
        color="info"
        @click="collapsed = !collapsed"
      >
        <i aria-hidden="true" class="material-icons">menu</i>
      </v-btn>
      <v-btn variant="outlined" icon color="success" @click="min = !min">
        <i aria-hidden="true" class="material-icons">{{
          min ? "arrow_forward" : "arrow_back"
        }}</i>
      </v-btn>

      <v-btn-toggle rounded="0">
        <v-switch
          inset
          v-model="darkMode"
          color="primary"
          class="ml-1"
          style="padding-inline-start: 0px"
          hide-details
        >
          <template v-slot:label>
            <span aria-hidden="true" class="material-icons">dark_mode</span>
          </template>
        </v-switch>
        <v-switch
          inset
          v-model="fullMode"
          color="primary"
          class="ml-1"
          label="Full"
          hide-details
        ></v-switch>
      </v-btn-toggle>
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/amirkian007/vue-awesome-sidebar">
        <svg
          aria-hidden="true"
          class="octicon octicon-mark-github"
          height="31"
          version="1.1"
          viewBox="0 0 16 16"
          width="31"
        >
          <path
            fill-rule="evenodd"
            :fill="darkMode?'white':''"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </v-btn>
    </v-app-bar>
    <v-main :style="{ paddingLeft: miniwidth, transition: 'all 0.3s' }">
      <router-view></router-view>
    </v-main>

    <VueAwesomeSideBar
      v-model:miniMenu="min"
      v-model:collapsed="collapsed"
      :menu="testmENU"
      vueRouterEnabel
      :dark="darkMode"
      :menuType="fullMode ? 'fully' : 'simple'"
      :autoCollapse="600"
      :closeOnClickOutSide="ismobile"
      :overLayerOnOpen="ismobile"
      @item-click="itemClickHandel"
    >
    </VueAwesomeSideBar>
  </v-app>
</template>

<script>
export default {
  name: "App",

  created() {
    this.screenWidth = innerWidth;
  },
  mounted() {
    this.checkHash();
    window.addEventListener("hashchange", this.checkHash, false);
    window.addEventListener("resize", () => {
      this.screenWidth = innerWidth;
    });
  },
  computed: {
    ismobile() {
      return this.screenWidth < 600;
    },
    miniwidth() {
      if (this.collapsed || this.ismobile) {
        return "0px";
      } else if (this.min) {
        return "65px";
      }
      return "290px";
    },
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.checkHash();
        }, 0);
      });
    },
  },
  methods: {
    itemClickHandel(item) {
      if (this.ismobile && !item?.children) {
        setTimeout(() => {
          this.collapsed = true;
        }, 200);
      }
    },
    checkHash() {
      if (window.location?.hash) {
        let x = ""
        if(window.location?.hash === `#/styles#css-class`){
          x = 'css-class'
        }else if(window.location?.hash === `#/styles#sass-varibles`){
          x = 'sass-varibles'
        }
        const el = document.getElementById(
          `user-content-${x}`
        );
        console.log(el)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
  },
  data: () => ({
    min: false,
    collapsed: false,
    darkMode: false,
    fullMode: false,
    chace: null,
    screenWidth: 0,
    testmENU: [
      {
        header: "Inrotuction",
      },
      {
        name: "Installation",
        href: "/",
        icon: { class: "material-icons", text: "download" },
      },
      {
        name: "Getting started",
        href: "/getting-started",
        icon: { class: "material-icons", text: "code" },
      },
      {
        header: "Api",
      },

      {
        name: "Props",
        href: "/props",
        icon: { class: "material-icons", text: "settings_suggested" },
      },

      {
        name: "Events",
        href: "/events",
        icon: { class: "material-icons", text: "event" },
      },
      {
        name: "Slots",
        href: "/slots",
        icon: { class: "material-icons", text: "settings_ethernet" },
      },
      {
        name: "Styling",
        icon: { class: "material-icons", text: "color_lens" },
        children: [
          {
            name: "Sass Vars",
            href: { path: "/styles/sass"},
            icon: { class: "material-icons", text: "colorize" },
          },
          {
            name: "Css",
            href: { path: "/styles/css"},
            icon: { class: "material-icons", text: "css" },
          },
        ],
      },
      {
        LineShow: true,
      },
      {
        name: "example 1",
        icon: { class: "material-icons", text: "cable" },
        children: [
          {
            name: "level 2.1",
            icon: { class: "material-icons", text: "raw_on" },
            children: [
              {
                name: "level 2.1",
                icon: { class: "material-icons", text: "raw_on" },
              },
              {
                name: "level 2.2",
                icon: { class: "material-icons", text: "raw_on" },
              },
              {
                name: "level 2.3",
              },
            ],
          },
          {
            name: "level 2.2",
            icon: { class: "material-icons", text: "raw_on" },
            children: [
              {
                name: "level 2.1",
                icon: { class: "material-icons", text: "raw_on" },
              },
              {
                name: "level 2.2",
                icon: { class: "material-icons", text: "raw_on" },
              },
              {
                name: "level 2.3",
                children: [
                  {
                    name: "level 2.1",
                    icon: { class: "material-icons", text: "raw_on" },
                  },
                  {
                    name: "level 2.2",
                    icon: { class: "material-icons", text: "raw_on" },
                  },
                  {
                    name: "level 2.3",
                  },
                ],
              },
            ],
          },
          {
            name: "level 2.3",
          },
        ],
      },
    ],
  }),
};
</script>
<style lang="scss">
article {
  padding-top: 15px !important;
}
aside {
  font-family: "Inter";
}
header {
  z-index: 700 !important;
}
button {
  margin-left: 20px !important;
}
main {
  color: white !important;
}

.v-application {
  background-color: white !important;
}
.v-switch .v-label {
  padding-inline-start: 0px !important;
}
.v-theme--dark {
  &.v-app-bar.v-toolbar {
    background-color: #0d1117 !important;
  }
}
.bgDark {
  background-color: #0d1117 !important;
}
.hreffss{
  text-decoration: none;
  color: #0550ad !important;
  cursor:pointer;
}
</style>