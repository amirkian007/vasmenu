<template>
<article class="markdown-body">
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

</article>
</template>