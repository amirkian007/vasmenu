## Styling

### Sass varibles
to use sass varibles import the sass file insted of css, then import custom varibles.
example:
```scss
//style.scss
@import "custom-var.scss";
@import "vue-awesome-sidebar/src/scss/vue-awesome-sidebar.scss";
```
```js
//main.js
import vueAwesomeSidebar from 'vue-awesome-sidebar'
//import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'
import './style.scss'
```
varibles:
```scss
//z-index of the menu components rage form 848-854

//<--BASE-->
$overlayer-bg-color: rgba(0, 0, 0, 0.6);
$toggle-mini-btn-height: 50px;
$menu-item-simpleType-icon-height: 35px;
$menu-item-fullyType-height: 44px;
$label-font-size: 16px;//may not work with slots
$label-icon-size: 20px;//may not work with slots
$scroll-bar-width: 13px;

//<--COLORS-->
//NOTE : the "-white" at the end of each var defines the theme, you can change it to "-dark" to set it for dark mode theme
//example :"$icon-color-dark : #000000 " for dark theme and "$icon-color-white : #fafafa " for white theme
//note : may not work with slots depending on how the slots is used

//Menu
$menu-back-ground-color-white: white; -dark: #0d1117; //==> $menu-back-ground-color-dark:#0d1117
$border-color-white: #cfcfcf; -dark: rgba(170, 170, 170, 0.329);
$scroll-bar-color-white: rgb(184, 184, 184); -dark: #686868;
$header-color-white: #213547; -dark: #ffffffde;

//Menu item prepend icon
$icon-color-white: rgb(28, 30, 33); -dark: rgb(218, 221, 225);
$icon-active-color-white: #2c7ae0; -dark: rgb(44, 122, 224);
$icon-mini-active-color-white: #2c7ae0; -dark: rgb(44, 122, 224);
$icon-hover-color-white: ''; -dark: '';

//Menu item
$menu-item-bg-color-white: none; -dark: none;
$menu-item-hover-bg-white: rgb(242, 242, 242); -dark: hsla(0, 0%, 100%, 0.05);
$menu-item-active-bg-color-white: rgb(242, 242, 242); -dark: hsla(0, 0%, 100%, 0.05);
$mini-active-item-bg-color-white: none; -dark: none;

//Menu item label
$text-color-none-hover-white: rgb(28, 30, 33); -dark: rgb(218, 221, 225);
$text-active-color-white: #2c7ae0; -dark: rgb(44, 122, 224);
$text-mini-active-color-white: #2c7ae0; -dark: rgb(44, 122, 224);
$text-hover-color-white: none; -dark: none;

//menu item append icon
$append-icon-color-white: rgb(28, 30, 33); -dark: rgb(218, 221, 225);
$append-active-icon-color-white: rgb(28, 30, 33); -dark: rgb(218, 221, 225);

//horizental line
$hr-line-color-white: rgba(211, 211, 211, 0.548); -dark: rgba(211, 211, 211, 0.548);

//bottomBtn for miniMenu
$bottomBtn-bg-color-white: white; -dark: #13161b;
```

### Css class

```scss
//menu
.vas-menu{}
.menu-wraper{}//menu scroll wrapper
.miniCoolapseMenu{} //for mini menu
.compeleteCoolapseMenu{} //for collapsed menu
.dark-theme{}
.white-theme{}
.vas-footer{}
.bottomBtn{} // mini menutoggle button

//menu item
.menu-item-base{// wrapper for menu item ant children
  &.menuExpanded
}//apllayed to all menuitem
.menuExpanded{}
.label{
  .menu-icondd{}
  .labelName{}
  .icons{}
  .postIconOpenAnima{}
}
.menuexpand{}
.activeClass{}
.miniActiveClass{}
.labelHoverClass{}

//container
.items-container{}
.topContainer{}
```