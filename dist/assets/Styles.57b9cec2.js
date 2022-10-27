import{_ as s,c as a,o as n,a as p}from"./index.bd1471d9.js";const l={},c={class:"markdown-body"},e=p(`<h2><a id="user-content-styling" class="anchor" aria-hidden="true" href="#styling"><span aria-hidden="true" class="octicon octicon-link"></span></a>Styling</h2><h3><a id="user-content-sass-varibles" class="anchor" aria-hidden="true" href="#sass-varibles"><span aria-hidden="true" class="octicon octicon-link"></span></a>Sass varibles</h3><p>to use sass varibles import the sass file insted of css, then import custom varibles. example:</p><div class="highlight highlight-source-css-scss"><pre><span class="pl-c"><span class="pl-c">//</span>style.scss</span>
<span class="pl-k">@import</span> <span class="pl-s"><span class="pl-pds">&quot;</span>custom-var.scss<span class="pl-pds">&quot;</span></span>;
<span class="pl-k">@import</span> <span class="pl-s"><span class="pl-pds">&quot;</span>vue-awesome-sidebar/src/scss/vue-awesome-sidebar.scss<span class="pl-pds">&quot;</span></span>;</pre></div><div class="highlight highlight-source-js"><pre><span class="pl-c">//main.js</span>
<span class="pl-k">import</span> <span class="pl-s1">vueAwesomeSidebar</span> <span class="pl-k">from</span> <span class="pl-s">&#39;vue-awesome-sidebar&#39;</span>
<span class="pl-c">//import &#39;vue-awesome-sidebar/dist/vue-awesome-sidebar.css&#39;</span>
<span class="pl-k">import</span> <span class="pl-s">&#39;./style.scss&#39;</span></pre></div><p>varibles:</p><div class="highlight highlight-source-css-scss"><pre><span class="pl-c"><span class="pl-c">//</span>z-index of the menu components rage form 848-854</span>

<span class="pl-c"><span class="pl-c">//</span>&lt;--BASE--&gt;</span>
<span class="pl-v">$overlayer-bg-color</span>: <span class="pl-c1">rgba</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0.6</span>);
<span class="pl-v">$toggle-mini-btn-height</span>: <span class="pl-c1">50<span class="pl-k">px</span></span>;
<span class="pl-v">$menu-item-simpleType-icon-height</span>: <span class="pl-c1">35<span class="pl-k">px</span></span>;
<span class="pl-v">$menu-item-fullyType-height</span>: <span class="pl-c1">44<span class="pl-k">px</span></span>;
<span class="pl-v">$label-font-size</span>: <span class="pl-c1">16<span class="pl-k">px</span></span>;<span class="pl-c"><span class="pl-c">//</span>may not work with slots</span>
<span class="pl-v">$label-icon-size</span>: <span class="pl-c1">20<span class="pl-k">px</span></span>;<span class="pl-c"><span class="pl-c">//</span>may not work with slots</span>
<span class="pl-v">$scroll-bar-width</span>: <span class="pl-c1">13<span class="pl-k">px</span></span>;

<span class="pl-c"><span class="pl-c">//</span>&lt;--COLORS--&gt;</span>
<span class="pl-c"><span class="pl-c">//</span>NOTE : the &quot;-white&quot; at the end of each var defines the theme, you can change it to &quot;-dark&quot; to set it for dark mode theme</span>
<span class="pl-c"><span class="pl-c">//</span>example :&quot;$icon-color-dark : #000000 &quot; for dark theme and &quot;$icon-color-white : #fafafa &quot; for white theme</span>
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
<span class="pl-v">$icon-hover-color-white</span>: <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>; -dark: &#39;&#39;;

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
<span class="pl-v">$bottomBtn-bg-color-white</span>: <span class="pl-c1">white</span>; -dark: #13161b;</pre></div><h3><a id="user-content-css" class="anchor" aria-hidden="true" href="#css"><span aria-hidden="true" class="octicon octicon-link"></span></a>Css</h3><div class="highlight highlight-source-css-scss"><pre><span class="pl-c"><span class="pl-c">//</span>menu</span>
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
<span class="pl-e">.topContainer</span>{}</pre></div><h2><a id="user-content-author" class="anchor" aria-hidden="true" href="#author"><span aria-hidden="true" class="octicon octicon-link"></span></a>Author</h2><p><a href="https://github.com/amirkian007">Amir Kian Adl</a></p><h2><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"><span aria-hidden="true" class="octicon octicon-link"></span></a>License</h2><p><a href="http://opensource.org/licenses/MIT" rel="nofollow">The MIT License</a></p>`,13),o=[e];function t(i,r){return n(),a("article",c,o)}const d=s(l,[["render",t]]);export{d as default};
