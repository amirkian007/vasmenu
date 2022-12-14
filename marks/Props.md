## Api

### Props

| Prop                  |  Type   |Default|                             Description                                                                 |
|-----------------------|:-------:|:-----:|:--------------------------------------------------------------------------------------------------------|
| menu                  | Array   |  null | required - Array list of [**_item properties_**](#menu-properties)                                      |
| menuType              | string  | simple| style of the menu can be either "fully" or "simple"                                                     |
| collapsed             | Boolean | false | sets menus collapsed state - should be used with v-model                                                |
| miniMenu              | boolean | false | sets mini menus state - should be used with v-model                                                     |
| width                 | string  | 290px | sets width for menu                                                                                     |
| widthMiniMenu         | string  | 65px  | sets width for miniMenu                                                                                 |
| autoCollapse          | number  | null  | adds event listner to collapse menu when the given value(in px) is lower than the viewport width        |
| closeOnClickOutSide   | Boolean | false | Adds event listner to collapse Menu when outside is clicked                                             |
| overLayerOnOpen       | Boolean | false | Adds overlayer under the Menu when the menu is open - usefull on mobile                                 |
| childrenOpenAnimation | Boolean | true  | opens menu items children with animation                                                                |
| keepChildrenOpen      | Boolean | flase | keeps children items opened when parent item is closed                                                  |
| position              | string  | fixed | sets menu positiong - by default menu is fixed on viewport                                              |
|ChildrenOpenActiveRoute| Boolean | true  |opens meneitem children on page-load if an item with active "href" inside and miniActive class is applied|
| checkButtonActive     | Boolean | true  | checks if menuitems href is active, if so activeClass is added to it and miniActive class to the parent |
| vueRouterEnabel       | Boolean | true  | when a meueitem is clicked vue-router will pushe the route to the items "href" property                 |
| BottomMiniMenuBtn     | Boolean | true  | Adds mini menu toggle bottom to bottom of menu                                                          |
| paddingTop            | String  | 0px   | Adds padding to top of menu - usefull when using with app bar with higher z-index                       |
| dark                  | Boolean | false | makes the theme of menu dark - color can be customized with sass vars                                   |
| rtl                   | Boolean | false | Makes the entire menu right to left align                                                               |

### menu properties

```ts
interface MenuItem {
  href: string | object // vue-router Object
  name: string
  icon?: MenuItemIcon
  children?: Array< MenuItem | MenuHeaderItem >
  class?: string
  collapseOnClick?: boolean //collapses menu when clicked - this behavior can also be achieved with Events
  activeClass?: boolean
  miniActiveClass?: boolean
}

interface MenuItemIcon {
  text: string
  class?: string
  element?: string //defualt is <i>
  attributes?: object
}

interface MenuHeaderItem {
  title: string
  class?: string
  attributes?: object
}

interface MenuLine {
  LineShow: boolean
  class?: string
  attributes?: object
  element?: string
}
```