<template>
<article class="markdown-body">
<h2><a id="user-content-api" class="anchor" aria-hidden="true" ><span aria-hidden="true" class="octicon octicon-link"></span></a>Api</h2>
<h3><a id="user-content-props" class="anchor" aria-hidden="true" ><span aria-hidden="true" class="octicon octicon-link"></span></a>Props</h3>
<table>
<thead>
<tr>
<th>Prop</th>
<th align="center">Type</th>
<th align="center">Default</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>menu</td>
<td align="center">Array</td>
<td align="center">null</td>
<td align="left">required - Array list of <a @click="click" class="hreffss"><strong><em>Menu properties</em></strong></a>
</td>
</tr>
<tr>
<td>menuType</td>
<td align="center">string</td>
<td align="center">simple</td>
<td align="left">style of the menu can be either "fully" or "simple"</td>
</tr>
<tr>
<td>collapsed</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">sets menus collapsed state - should be used with v-model</td>
</tr>
<tr>
<td>miniMenu</td>
<td align="center">boolean</td>
<td align="center">false</td>
<td align="left">sets mini menus state - should be used with v-model</td>
</tr>
<tr>
<td>width</td>
<td align="center">string</td>
<td align="center">290px</td>
<td align="left">sets width for menu</td>
</tr>
<tr>
<td>widthMiniMenu</td>
<td align="center">string</td>
<td align="center">65px</td>
<td align="left">sets width for miniMenu</td>
</tr>
<tr>
<td>autoCollapse</td>
<td align="center">number</td>
<td align="center">null</td>
<td align="left">adds event listner to collapse menu when the given value(in px) is lower than the viewport width</td>
</tr>
<tr>
<td>closeOnClickOutSide</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">Adds event listner to collapse Menu when outside is clicked</td>
</tr>
<tr>
<td>overLayerOnOpen</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">Adds overlayer under the Menu when the menu is open - usefull on mobile</td>
</tr>
<tr>
<td>childrenOpenAnimation</td>
<td align="center">Boolean</td>
<td align="center">true</td>
<td align="left">opens menu items children with animation</td>
</tr>
<tr>
<td>keepChildrenOpen</td>
<td align="center">Boolean</td>
<td align="center">flase</td>
<td align="left">keeps children items opened when parent item is closed</td>
</tr>
<tr>
<td>position</td>
<td align="center">string</td>
<td align="center">fixed</td>
<td align="left">sets menu positiong - by default menu is fixed on viewport</td>
</tr>
<tr>
<td>ChildrenOpenActiveRoute</td>
<td align="center">Boolean</td>
<td align="center">true</td>
<td align="left">opens meneitem children on page-load if an item with active "href" inside and miniActive class is applied</td>
</tr>
<tr>
<td>checkButtonActive</td>
<td align="center">Boolean</td>
<td align="center">true</td>
<td align="left">checks if menuitems href is active, if so activeClass is added to it and miniActive class to the parent</td>
</tr>
<tr>
<td>vueRouterEnabel</td>
<td align="center">Boolean</td>
<td align="center">true</td>
<td align="left">when a meueitem is clicked vue-router will pushe the route to the items "href" property</td>
</tr>
<tr>
<td>BottomMiniMenuBtn</td>
<td align="center">Boolean</td>
<td align="center">true</td>
<td align="left">Adds mini menu toggle bottom to bottom of menu</td>
</tr>
<tr>
<td>paddingTop</td>
<td align="center">String</td>
<td align="center">0px</td>
<td align="left">Adds padding to top of menu - usefull when using with app bar with higher z-index</td>
</tr>
<tr>
<td>dark</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">makes the theme of menu dark - color can be customized with sass vars</td>
</tr>
<tr>
<td>rtl</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">Makes the entire menu right to left align</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-menu-properties" class="anchor" aria-hidden="true" ><span aria-hidden="true" class="octicon octicon-link"></span></a>menu properties</h3>
<div class="highlight highlight-source-ts"><pre><span class="pl-k">interface</span> <span class="pl-smi">MenuItem</span> <span class="pl-kos">{</span>
  <span class="pl-c1">href</span>: <span class="pl-smi">string</span> <span class="pl-c1">|</span> <span class="pl-smi">object</span> <span class="pl-c">// vue-router Object</span>
  <span class="pl-c1">name</span>: <span class="pl-smi">string</span>
  <span class="pl-c1">icon</span>?: <span class="pl-smi">MenuItemIcon</span>
  <span class="pl-c1">children</span>?: <span class="pl-smi">Array</span><span class="pl-kos">&lt;</span> <span class="pl-smi">MenuItem</span> <span class="pl-c1">|</span> <span class="pl-smi">MenuHeaderItem</span> <span class="pl-kos">&gt;</span>
  <span class="pl-c1">class</span>?: <span class="pl-smi">string</span>
  <span class="pl-c1">collapseOnClick</span>?: <span class="pl-smi">boolean</span> <span class="pl-c">//collapses menu when clicked - this behavior can also be achieved with Events</span>
  <span class="pl-c1">activeClass</span>?: <span class="pl-smi">boolean</span>
  <span class="pl-c1">miniActiveClass</span>?: <span class="pl-smi">boolean</span>
<span class="pl-kos">}</span>

<span class="pl-k">interface</span> <span class="pl-smi">MenuItemIcon</span> <span class="pl-kos">{</span>
  <span class="pl-c1">text</span>: <span class="pl-smi">string</span>
  <span class="pl-c1">class</span>?: <span class="pl-smi">string</span>
  <span class="pl-c1">element</span>?: <span class="pl-smi">string</span> <span class="pl-c">//defualt is &lt;i&gt;</span>
  <span class="pl-c1">attributes</span>?: <span class="pl-smi">object</span>
<span class="pl-kos">}</span>

<span class="pl-k">interface</span> <span class="pl-smi">MenuHeaderItem</span> <span class="pl-kos">{</span>
  <span class="pl-c1">title</span>: <span class="pl-smi">string</span>
  <span class="pl-c1">class</span>?: <span class="pl-smi">string</span>
  <span class="pl-c1">attributes</span>?: <span class="pl-smi">object</span>
<span class="pl-kos">}</span>

<span class="pl-k">interface</span> <span class="pl-smi">MenuLine</span> <span class="pl-kos">{</span>
  <span class="pl-c1">LineShow</span>: <span class="pl-smi">boolean</span>
  <span class="pl-c1">class</span>?: <span class="pl-smi">string</span>
  <span class="pl-c1">attributes</span>?: <span class="pl-smi">object</span>
  <span class="pl-c1">element</span>?: <span class="pl-smi">string</span>
<span class="pl-kos">}</span></pre></div>

</article>
</template>
<script>
export default {
  methods: {
    click(){
   document.getElementById(
          `user-content-menu-properties`
        ).scrollIntoView({  behavior: 'smooth' })
    }
  },
}
</script>
<style scoped>
#user-content-menu-properties {
  scroll-margin: 75px;
}
</style>