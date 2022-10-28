<template>
<article class="markdown-body">
<h1><a id="user-content-basic-usage" class="anchor" aria-hidden="true" ><span aria-hidden="true" class="octicon octicon-link"></span></a>Basic Usage</h1>
<p>a simple example would be like this :
check out <a @click="$router.push('/props')" class="hreffss"><strong><em>props</em></strong></a> for properites</p>
<div class="highlight highlight-text-html-basic"><pre><span class="pl-kos">&lt;</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>
  <span class="pl-kos">&lt;</span><span class="pl-ent">VueAwesomeSideBar</span>
      <span class="pl-c1">v-model:miniMenu</span>="<span class="pl-s">miniMenu</span>"
      <span class="pl-c1">v-model:collapsed</span>="<span class="pl-s">collapsed</span>"
      <span class="pl-c1">:menu</span>="<span class="pl-s">testMenu</span>"
      <span class="pl-c1">vueRouterEnabel</span>
    <span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">VueAwesomeSideBar</span><span class="pl-kos">&gt;</span>
<span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>

<span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">setup</span><span class="pl-kos">&gt;</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span> <span class="pl-s1">ref</span> <span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'vue'</span>

<span class="pl-k">const</span> <span class="pl-s1">collapsed</span> <span class="pl-c1">=</span> <span class="pl-en">ref</span><span class="pl-kos">(</span><span class="pl-c1">false</span><span class="pl-kos">)</span>
<span class="pl-k">const</span> <span class="pl-s1">miniMenu</span> <span class="pl-c1">=</span> <span class="pl-en">ref</span><span class="pl-kos">(</span><span class="pl-c1">false</span><span class="pl-kos">)</span>

<span class="pl-k">const</span> <span class="pl-s1">testMenu</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">name</span>: <span class="pl-s">'Getting Started'</span><span class="pl-kos">,</span>
    <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">text</span>: <span class="pl-s">'home'</span> <span class="pl-kos">,</span> <span class="pl-c1">class</span>: <span class="pl-s">'material-icons-outlined'</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-c1">children</span>: <span class="pl-kos">[</span>
      <span class="pl-kos">{</span>
        <span class="pl-c1">name</span>: <span class="pl-s">'level 1.1'</span><span class="pl-kos">,</span>
        <span class="pl-c1">href</span>: <span class="pl-s">'/a'</span><span class="pl-kos">,</span>
        <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">text</span>: <span class="pl-s">'home'</span> <span class="pl-kos">,</span> <span class="pl-c1">class</span>: <span class="pl-s">'material-icons-outlined'</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
        <span class="pl-c1">children</span>: <span class="pl-kos">[</span>
          <span class="pl-kos">{</span>
            <span class="pl-c1">href</span>: <span class="pl-s">'/b'</span><span class="pl-kos">,</span>
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
        <span class="pl-c1">href</span>: <span class="pl-s">'/c'</span><span class="pl-kos">,</span>
        <span class="pl-c1">name</span>: <span class="pl-s">'level 2.1'</span><span class="pl-kos">,</span>
      <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-kos">]</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">name</span>: <span class="pl-s">'close menu'</span><span class="pl-kos">,</span>
    <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">text</span>: <span class="pl-s">'settings'</span><span class="pl-kos">,</span> <span class="pl-c1">class</span>: <span class="pl-s">'material-icons-outlined'</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
<span class="pl-kos">]</span>
<span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></pre></div>

</article>
</template>