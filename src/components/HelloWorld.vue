<template>
<article class="markdown-body">
<h1><a id="user-content-vue-awesome-sidebar" class="anchor" aria-hidden="true" href="#vue-awesome-sidebar"><span aria-hidden="true" class="octicon octicon-link"></span></a>Vue Awesome Sidebar</h1>
<p>Vue Awesome Sidbar is a powerfull and fast vue js(version 3) sidbar navigation library with a set of components and slots that are flexible, very lightweight and customizable with sass and css which is very easy to use.</p>
<p>#Features</p>
<h1><a id="user-content-table-of-contents" class="anchor" aria-hidden="true" href="#table-of-contents"><span aria-hidden="true" class="octicon octicon-link"></span></a>Table of Contents</h1>
<ul>
<li><a href="#demo"><strong><em>Demo</em></strong></a></li>
<li>
<a href="#installation"><strong><em>Installation</em></strong></a>
<ul>
<li><a href="#Vue.js"><strong><em>Vue.js</em></strong></a></li>
<li><a href="#Nuxt.js"><strong><em>Nuxt.js</em></strong></a></li>
</ul>
</li>
<li><a href="#usage"><strong><em>Basic Usage</em></strong></a></li>
<li>
<a href="#api"><strong><em>Api</em></strong></a>
<ul>
<li><a href="#api"><strong><em>Props</em></strong></a></li>
<li><a href="#api"><strong><em>Events</em></strong></a></li>
<li><a href="#Slot-Names"><strong><em>Slots</em></strong></a></li>
</ul>
</li>
<li>
<a href="#api"><strong><em>Styling</em></strong></a>
<ul>
<li><a href="#Component-Attributes"><strong><em>Sass varibales</em></strong></a></li>
<li><a href="#Class-Name-Attributes"><strong><em>Css</em></strong></a></li>
</ul>
</li>
<li><a href="#authors-&amp;&amp;-Contributors"><strong><em>Author</em></strong></a></li>
<li><a href="#license"><strong><em>License</em></strong></a></li>
</ul>
<p> </p>
<h1><a id="user-content-installation" class="anchor" aria-hidden="true" href="#installation"><span aria-hidden="true" class="octicon octicon-link"></span></a>Installation</h1>
<pre><code>npm i vue-awesome-sidebar --save
//or
yarn i vue-awesome-sidebar --save
</code></pre>
<p>Install the plugin globally.</p>
<p>Vue js 3:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c">//main.js</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span> <span class="pl-s1">createApp</span> <span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'vue'</span>
<span class="pl-k">import</span> <span class="pl-v">App</span> <span class="pl-k">from</span> <span class="pl-s">'./App.vue'</span>
<span class="pl-k">import</span> <span class="pl-s1">vueAwesomeSidebar</span> <span class="pl-k">from</span> <span class="pl-s">'vue-awesome-sidebar'</span>
<span class="pl-k">import</span> <span class="pl-s">'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'</span>

<span class="pl-k">const</span> <span class="pl-s1">app</span> <span class="pl-c1">=</span> <span class="pl-en">createApp</span><span class="pl-kos">(</span><span class="pl-v">App</span><span class="pl-kos">)</span>
<span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-en">use</span><span class="pl-kos">(</span><span class="pl-s1">vueAwesomeSidebar</span><span class="pl-kos">)</span>
<span class="pl-s1">app</span><span class="pl-kos">.</span><span class="pl-en">mount</span><span class="pl-kos">(</span><span class="pl-s">"#app"</span><span class="pl-kos">)</span></pre></div>
<p>Nuxt js 3:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-s1">vueAwesomeSidebar</span> <span class="pl-k">from</span> <span class="pl-s">"vue-awesome-sidebar"</span><span class="pl-kos">;</span>
<span class="pl-k">import</span> <span class="pl-s">"vue-awesome-sidebar/dist/vue-awesome-sidebar.css"</span><span class="pl-kos">;</span>
<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-en">defineNuxtPlugin</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">nuxtApp</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
  <span class="pl-s1">nuxtApp</span><span class="pl-kos">.</span><span class="pl-c1">vueApp</span><span class="pl-kos">.</span><span class="pl-en">use</span><span class="pl-kos">(</span><span class="pl-s1">vueAwesomeSidebar</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<p>or import the component locally :</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c">//App.vue</span>
<span class="pl-k">import</span> <span class="pl-s1">vueAwesomeSidebar</span> <span class="pl-k">from</span> <span class="pl-s">'vue-awesome-sidebar'</span>
<span class="pl-k">import</span> <span class="pl-s">'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'</span>
<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-kos">{</span>
  <span class="pl-c1">components</span>: <span class="pl-kos">{</span>
    vueAwesomeSidebar
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<h1><a id="user-content-basic-usage" class="anchor" aria-hidden="true" href="#basic-usage"><span aria-hidden="true" class="octicon octicon-link"></span></a>Basic Usage</h1>
<p>a simple example would be like this :</p>
<div class="highlight highlight-text-html-basic"><pre><span class="pl-kos">&lt;</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>
  <span class="pl-kos">&lt;</span><span class="pl-ent">VueAwesomeSideBar</span>
      <span class="pl-c1">v-model:miniMenu</span>="<span class="pl-s">miniMenu</span>"
      <span class="pl-c1">v-model:collapsed</span>="<span class="pl-s">collapsed</span>"
      <span class="pl-c1">:menu</span>="<span class="pl-s">testmENU</span>"
      <span class="pl-c1">dark</span>
      <span class="pl-c1">vueRouterEnabel</span>
    <span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">VueAwesomeSideBar</span><span class="pl-kos">&gt;</span>
<span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>

<span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">setup</span><span class="pl-kos">&gt;</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span> <span class="pl-s1">ref</span> <span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'vue'</span>

<span class="pl-k">const</span> <span class="pl-s1">collapsed</span> <span class="pl-c1">=</span> <span class="pl-en">ref</span><span class="pl-kos">(</span><span class="pl-c1">false</span><span class="pl-kos">)</span>
<span class="pl-k">const</span> <span class="pl-s1">miniMenu</span> <span class="pl-c1">=</span> <span class="pl-en">ref</span><span class="pl-kos">(</span><span class="pl-c1">false</span><span class="pl-kos">)</span>

<span class="pl-k">const</span> <span class="pl-s1">testmENU</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">name</span>: <span class="pl-s">'Getting Started'</span><span class="pl-kos">,</span>
    <span class="pl-c1">href</span>: <span class="pl-s">'/a'</span><span class="pl-kos">,</span>
    <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">text</span>: <span class="pl-s">'home'</span> <span class="pl-kos">,</span> <span class="pl-c1">class</span>: <span class="pl-s">'material-icons-outlined'</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-c1">children</span>: <span class="pl-kos">[</span>
      <span class="pl-kos">{</span>
        <span class="pl-c1">name</span>: <span class="pl-s">'level 1.1'</span><span class="pl-kos">,</span>
        <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">text</span>: <span class="pl-s">'home'</span> <span class="pl-kos">,</span> <span class="pl-c1">class</span>: <span class="pl-s">'material-icons-outlined'</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
        <span class="pl-c1">children</span>: <span class="pl-kos">[</span>
          <span class="pl-kos">{</span>
            <span class="pl-c1">name</span>: <span class="pl-s">'level 1.1.1'</span><span class="pl-kos">,</span>
          <span class="pl-kos">}</span><span class="pl-kos">,</span>
        <span class="pl-kos">]</span>
      <span class="pl-kos">}</span><span class="pl-kos">,</span>
      <span class="pl-kos">{</span>
        <span class="pl-c1">name</span>: <span class="pl-s">'level 1.2'</span>
      <span class="pl-kos">}</span>
    <span class="pl-kos">]</span><span class="pl-kos">,</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">header</span>: <span class="pl-s">'Settings'</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">name</span>: <span class="pl-s">'Dashboard'</span><span class="pl-kos">,</span>
    <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">class</span>: <span class="pl-s">'material-icons-outlined'</span><span class="pl-kos">,</span> <span class="pl-c1">text</span>: <span class="pl-s">'dashboard'</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-c1">children</span>: <span class="pl-kos">[</span>
      <span class="pl-kos">{</span>
        <span class="pl-c1">href</span>: <span class="pl-s">'/level12/#w'</span><span class="pl-kos">,</span>
        <span class="pl-c1">name</span>: <span class="pl-s">'level 2.1'</span>
      <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-kos">]</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">name</span>: <span class="pl-s">'close menu'</span><span class="pl-kos">,</span>
    <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">text</span>: <span class="pl-s">'settings'</span><span class="pl-kos">,</span> <span class="pl-c1">class</span>: <span class="pl-s">'material-icons-outlined'</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-c1">collapseOnClick</span>: <span class="pl-c1">true</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
<span class="pl-kos">]</span>
<span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></pre></div>
<h1><a id="user-content-api" class="anchor" aria-hidden="true" href="#api"><span aria-hidden="true" class="octicon octicon-link"></span></a>API</h1>
<h3><a id="user-content-props" class="anchor" aria-hidden="true" href="#props"><span aria-hidden="true" class="octicon octicon-link"></span></a>Props</h3>
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
<td align="left">required - Array list of <a href="#menu-properties"><strong><em>item properties</em></strong></a>
</td>
</tr>
<tr>
<td>menuType</td>
<td align="center">string</td>
<td align="center">simple</td>
<td align="left">required - style of the menu can be either "fully" or "simple"</td>
</tr>
<tr>
<td>collapsed</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">optional - sets menus collapsed state should be used with v-model</td>
</tr>
<tr>
<td>miniMenu</td>
<td align="center">boolean</td>
<td align="center">false</td>
<td align="left">optional - makes manu mini  should be used with v-model</td>
</tr>
<tr>
<td>width</td>
<td align="center">string</td>
<td align="center">290px</td>
<td align="left">optional - sets width for menu</td>
</tr>
<tr>
<td>widthMiniMenu</td>
<td align="center">string</td>
<td align="center">65px</td>
<td align="left">optional - sets width for miniMenu</td>
</tr>
<tr>
<td>closeOnClickOutSide</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">optional - Adds event listner to close Menu when clicked outside the menu</td>
</tr>
<tr>
<td>overLayerOnMenuOpen</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">optional - Adds overlayer under the Menu with the menu is open (should be used with closeOnClickOutSide)</td>
</tr>
<tr>
<td>childrenOpenAnimation</td>
<td align="center">Boolean</td>
<td align="center">true</td>
<td align="left">optional - opens menu item children with animation</td>
</tr>
<tr>
<td>keepChildrenOpen</td>
<td align="center">Boolean</td>
<td align="center">flase</td>
<td align="left">keeps opened children items opened when parent item is closed</td>
</tr>
<tr>
<td>position</td>
<td align="center">string</td>
<td align="center">fixed</td>
<td align="left">sets menu positiong- by default menu is fixed on viewport</td>
</tr>
<tr>
<td>ChildrenOpenActiveRoute</td>
<td align="center">Boolean</td>
<td align="center">true</td>
<td align="left">opens meneitem children if there is an menuitem with active "href" inside</td>
</tr>
<tr>
<td>checkButtonActive</td>
<td align="center">Boolean</td>
<td align="center">true</td>
<td align="left">check if menuitemS href is active, if so activeClass is  added to it and miniActive class to the parent</td>
</tr>
<tr>
<td>vueRouterEnabel</td>
<td align="center">Boolean</td>
<td align="center">true</td>
<td align="left">when a meueitem is clicked vue-router will bue pushed to the items "href" property</td>
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
<td align="left">Adds padding to top of menu - usefull when using with appbar</td>
</tr>
<tr>
<td>dark</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">makes the theme of menu dark - color can be custimuzed with sass vars</td>
</tr>
<tr>
<td>paddingTop</td>
<td align="center">String</td>
<td align="center">0px</td>
<td align="left">Adds padding to top of menu - usefull when using with appbar</td>
</tr>
<tr>
<td>rtl</td>
<td align="center">Boolean</td>
<td align="center">false</td>
<td align="left">Makes the entire menu right to left align</td>
</tr>
</tbody>
</table>
<h1><a id="user-content-menu-properties" class="anchor" aria-hidden="true" href="#menu-properties"><span aria-hidden="true" class="octicon octicon-link"></span></a>menu properties</h1>
<div class="highlight highlight-source-ts"><pre><span class="pl-k">interface</span> <span class="pl-smi">MenuItemIcon</span> <span class="pl-kos">{</span>
  <span class="pl-c1">text</span>?: <span class="pl-smi">string</span>
  <span class="pl-c1">class</span>?: <span class="pl-smi">string</span>
  <span class="pl-c1">element</span>?: <span class="pl-smi">string</span>
  <span class="pl-c1">attributes</span>?: <span class="pl-smi">object</span>
<span class="pl-kos">}</span>

<span class="pl-k">interface</span> <span class="pl-smi">MenuItem</span> <span class="pl-kos">{</span>
  <span class="pl-c1">href</span>: <span class="pl-smi">string</span> <span class="pl-c1">|</span> <span class="pl-smi">object</span>
  <span class="pl-c1">name</span>: <span class="pl-smi">string</span>
  <span class="pl-c1">icon</span>?: <span class="pl-smi">ItemIcon</span>
  <span class="pl-c1">children</span>?: <span class="pl-smi">Array</span><span class="pl-kos">&lt;</span><span class="pl-smi">MenuItem</span> <span class="pl-c1">|</span> <span class="pl-smi">SidebarHeaderItem</span><span class="pl-kos">&gt;</span>
  <span class="pl-c1">class</span>?: <span class="pl-smi">string</span>
  <span class="pl-c1">activeClass</span>?: <span class="pl-smi">boolean</span>
  <span class="pl-c1">miniActiveClass</span>?: <span class="pl-smi">boolean</span>
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
<h3><a id="user-content-events" class="anchor" aria-hidden="true" href="#events"><span aria-hidden="true" class="octicon octicon-link"></span></a>Events</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@item-click : object</code></td>
<td align="left">fired when a menu item is clicked</td>
</tr>
<tr>
<td><code>@update:collapsed : Boolean</code></td>
<td align="left">fired when menu is collapsed</td>
</tr>
<tr>
<td><code>@update:miniMenu : Boolean</code></td>
<td align="left">fired when menu is in mini state</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-slots" class="anchor" aria-hidden="true" href="#slots"><span aria-hidden="true" class="octicon octicon-link"></span></a>Slots</h3>
<div class="highlight highlight-text-html-basic"><pre><span class="pl-c">&lt;!--menu items Append icon--&gt;</span>
<span class="pl-kos">&lt;</span><span class="pl-ent">template</span> <span class="pl-c1">#itemApendIcon</span>="<span class="pl-s">{ icon,isChildrenMenuOpen, active,miniActive }</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>
<span class="pl-c">&lt;!--menu items label --&gt;</span>
<span class="pl-kos">&lt;</span><span class="pl-ent">template</span> <span class="pl-c1">#menuItemLabel</span>="<span class="pl-s">{labelName ,isChildrenMenuOpen, active,miniActive}</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>
<span class="pl-c">&lt;!--menu items Preppend icon--&gt;</span>
<span class="pl-kos">&lt;</span><span class="pl-ent">template</span> <span class="pl-c1">#itemPrepandIcon</span>="<span class="pl-s">{ icon,isChildrenMenuOpen, active,miniActive }</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>
<span class="pl-c">&lt;!--menu header item--&gt;</span>
<span class="pl-kos">&lt;</span><span class="pl-ent">template</span> <span class="pl-c1">#headerItem</span>="<span class="pl-s">{ header }</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>
<span class="pl-c">&lt;!--menu header at the top of the menu--&gt;</span>
<span class="pl-kos">&lt;</span><span class="pl-ent">template</span> <span class="pl-c1">#header</span><span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>
<span class="pl-c">&lt;!--menu footer --&gt;</span>
<span class="pl-kos">&lt;</span><span class="pl-ent">template</span> <span class="pl-c1">#footer</span><span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>
<span class="pl-c">&lt;!--menus bottom toggle btn --&gt;</span>
<span class="pl-kos">&lt;</span><span class="pl-ent">template</span> <span class="pl-c1">#BottomMiniMenuBtn</span><span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span></pre></div>
<h1><a id="user-content-styling" class="anchor" aria-hidden="true" href="#styling"><span aria-hidden="true" class="octicon octicon-link"></span></a>Styling</h1>
<h3><a id="user-content-sass-varibles" class="anchor" aria-hidden="true" href="#sass-varibles"><span aria-hidden="true" class="octicon octicon-link"></span></a>Sass varibles</h3>
<div class="highlight highlight-source-css-scss"><pre><span class="pl-c"><span class="pl-c">//</span>&lt;--BASE--&gt;</span>
<span class="pl-v">$overlayer-bg-color</span>: <span class="pl-c1">rgba</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0.6</span>);
<span class="pl-v">$toggle-mini-btn-height</span>: <span class="pl-c1">50<span class="pl-k">px</span></span>;
<span class="pl-v">$menu-item-simpleType-icon-height</span>: <span class="pl-c1">35<span class="pl-k">px</span></span>;
<span class="pl-v">$menu-item-fullyType-height</span>: <span class="pl-c1">44<span class="pl-k">px</span></span>;
<span class="pl-v">$label-font-size</span>: <span class="pl-c1">16<span class="pl-k">px</span></span>;<span class="pl-c"><span class="pl-c">//</span>may not work with slots</span>
<span class="pl-v">$label-icon-size</span>: <span class="pl-c1">20<span class="pl-k">px</span></span>;<span class="pl-c"><span class="pl-c">//</span>may not work with slots</span>

<span class="pl-c"><span class="pl-c">//</span>&lt;--COLORS--&gt;</span>
<span class="pl-c"><span class="pl-c">//</span>NOTE : the "-white" at the end of each var defines the theme, you can change it to "-dark" to set it for dark mode theme</span>
<span class="pl-c"><span class="pl-c">//</span>example :"$icon-color-dark : #000000 " for dark theme and "$icon-color-white : #fafafa " for white theme</span>
<span class="pl-c"><span class="pl-c">//</span>note : may not work with slots depending on how the slots is used</span>

<span class="pl-c"><span class="pl-c">//</span>Menu</span>
<span class="pl-v">$menu-back-ground-color-white</span>: <span class="pl-c1">white</span>; -dark: #0d1117; <span class="pl-c"><span class="pl-c">//</span>==&gt; $menu-back-ground-color-dark:#0d1117</span>
<span class="pl-v">$border-color-white</span>: <span class="pl-c1">#cfcfcf</span>; -dark: rgba(170, 170, 170, 0<span class="pl-e">.329</span>);
<span class="pl-v">$scroll-bar-color-white</span>: <span class="pl-c1">rgb</span>(<span class="pl-c1">184</span>, <span class="pl-c1">184</span>, <span class="pl-c1">184</span>); -dark: #686868;
<span class="pl-v">$header-color-white</span>: <span class="pl-c1">#213547</span>; -dark: #ffffffde;

<span class="pl-c"><span class="pl-c">//</span>Menu item prepend icon</span>
<span class="pl-v">$icon-color-white</span>: <span class="pl-c1">rgb</span>(<span class="pl-c1">28</span>, <span class="pl-c1">30</span>, <span class="pl-c1">33</span>); -dark: rgb(218, 221, 225);
<span class="pl-v">$icon-active-color-white</span>: <span class="pl-c1">#2c7ae0</span>; -dark: rgb(44, 122, 224);
<span class="pl-v">$icon-mini-active-color-white</span>: <span class="pl-c1">#2c7ae0</span>; -dark: rgb(44, 122, 224);
<span class="pl-v">$icon-hover-color-white</span>: <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>; -dark: '';

<span class="pl-c"><span class="pl-c">//</span>Menu item</span>
<span class="pl-v">$menu-item-bg-color-white</span>: <span class="pl-c1">none</span>; -dark: none;
<span class="pl-v">$menu-item-hover-bg-white</span>: <span class="pl-c1">rgb</span>(<span class="pl-c1">242</span>, <span class="pl-c1">242</span>, <span class="pl-c1">242</span>); -dark: hsla(0, 0%, 100%, 0<span class="pl-e">.05</span>);
<span class="pl-v">$menu-item-active-bg-color-white</span>: <span class="pl-c1">rgb</span>(<span class="pl-c1">242</span>, <span class="pl-c1">242</span>, <span class="pl-c1">242</span>); -dark: hsla(0, 0%, 100%, 0<span class="pl-e">.05</span>);
<span class="pl-v">$mini-active-item-bg-color-white</span>: <span class="pl-c1">none</span>; -dark: none;

<span class="pl-c"><span class="pl-c">//</span>Menu item label</span>
<span class="pl-v">$text-color-none-hover-white</span>: <span class="pl-c1">rgb</span>(<span class="pl-c1">28</span>, <span class="pl-c1">30</span>, <span class="pl-c1">33</span>); -dark: rgb(218, 221, 225);
<span class="pl-v">$text-active-color-white</span>: <span class="pl-c1">#2c7ae0</span>; -dark: rgb(44, 122, 224);
<span class="pl-v">$text-mini-active-color-white</span>: <span class="pl-c1">#2c7ae0</span>; -dark: rgb(44, 122, 224);
<span class="pl-v">$text-hover-color-white</span>: <span class="pl-c1">none</span>; -dark: none;

<span class="pl-c"><span class="pl-c">//</span>menu item append icon</span>
<span class="pl-v">$append-icon-color-white</span>: <span class="pl-c1">rgb</span>(<span class="pl-c1">28</span>, <span class="pl-c1">30</span>, <span class="pl-c1">33</span>); -dark: rgb(218, 221, 225);
<span class="pl-v">$append-active-icon-color-white</span>: <span class="pl-c1">rgb</span>(<span class="pl-c1">28</span>, <span class="pl-c1">30</span>, <span class="pl-c1">33</span>); -dark: rgb(218, 221, 225);

<span class="pl-c"><span class="pl-c">//</span>horizental line</span>
<span class="pl-v">$hr-line-color-white</span>: <span class="pl-c1">rgba</span>(<span class="pl-c1">211</span>, <span class="pl-c1">211</span>, <span class="pl-c1">211</span>, <span class="pl-c1">0.548</span>); -dark: rgba(211, 211, 211, 0<span class="pl-e">.548</span>);

<span class="pl-c"><span class="pl-c">//</span>bottomBtn for miniMenu</span>
<span class="pl-v">$bottomBtn-bg-color-white</span>: <span class="pl-c1">white</span>; -dark: #13161b;</pre></div>
<h3><a id="user-content-css-class" class="anchor" aria-hidden="true" href="#css-class"><span aria-hidden="true" class="octicon octicon-link"></span></a>Css class</h3>
<div class="highlight highlight-source-css-scss"><pre><span class="pl-c"><span class="pl-c">//</span>menu</span>
<span class="pl-e">.vas-menu</span>{}
<span class="pl-e">.menu-wraper</span>{}<span class="pl-c"><span class="pl-c">//</span>menu scroll wrapper</span>
<span class="pl-e">.miniCoolapseMenu</span>{} <span class="pl-c"><span class="pl-c">//</span>for mini menu</span>
<span class="pl-e">.compeleteCoolapseMenu</span>{} <span class="pl-c"><span class="pl-c">//</span>for collapsed menu</span>
<span class="pl-e">.dark-theme</span>{}
<span class="pl-e">.white-theme</span>{}
<span class="pl-e">.vas-footer</span>{}
<span class="pl-e">.bottomBtn</span>{} <span class="pl-c"><span class="pl-c">//</span> mini menutoggle button</span>

<span class="pl-c"><span class="pl-c">//</span>menu item</span>
<span class="pl-e">.menu-item-base</span>{<span class="pl-c"><span class="pl-c">//</span> wrapper for menu item ant children</span>
  <span class="pl-ent">&amp;</span><span class="pl-e">.menuExpanded</span>
}<span class="pl-c"><span class="pl-c">//</span>apllayed to all menuitem</span>
<span class="pl-e">.menuExpanded</span>{}
<span class="pl-e">.label</span>{
  <span class="pl-e">.menu-icondd</span>{}
  <span class="pl-e">.labelName</span>{}
  <span class="pl-e">.icons</span>{}
  <span class="pl-e">.postIconOpenAnima</span>{}
}
<span class="pl-e">.menuexpand</span>{}
<span class="pl-e">.activeClass</span>{}
<span class="pl-e">.miniActiveClass</span>{}
<span class="pl-e">.labelHoverClass</span>{}

<span class="pl-c"><span class="pl-c">//</span>container</span>
<span class="pl-e">.items-container</span>{}
<span class="pl-e">.topContainer</span>{}</pre></div>

</article>
</template>

<script>
import logo from '../assets/logo.svg'

export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    logo,
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>

</style>