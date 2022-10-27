<template>
<article class="markdown-body">
<h1><a id="user-content-installation" class="anchor" aria-hidden="true" href="#installation"><span aria-hidden="true" class="octicon octicon-link"></span></a>Installation</h1>
<pre><code>npm i vue-awesome-sidebar --save
//or
yarn i vue-awesome-sidebar --save
</code></pre>
<p>Install the component globally.</p>
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
<p>or Install the component loacally :</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c">//App.vue</span>
<span class="pl-k">import</span> <span class="pl-s1">vueAwesomeSidebar</span> <span class="pl-k">from</span> <span class="pl-s">'vue-awesome-sidebar'</span>
<span class="pl-k">import</span> <span class="pl-s">'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'</span>
<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-kos">{</span>
  <span class="pl-c1">components</span>: <span class="pl-kos">{</span>
    vueAwesomeSidebar
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>

</article>
</template>