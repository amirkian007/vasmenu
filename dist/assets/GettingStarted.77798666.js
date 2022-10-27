import{_ as s,c as a,o as p,a as n}from"./index.abbd460b.js";const l={},c={class:"markdown-body"},o=n(`<h1><a id="user-content-basic-usage" class="anchor" aria-hidden="true" href="#basic-usage"><span aria-hidden="true" class="octicon octicon-link"></span></a>Basic Usage</h1><p>a simple example would be like this : check out <a href="#props"><strong><em>props</em></strong></a> for properites</p><div class="highlight highlight-text-html-basic"><pre><span class="pl-kos">&lt;</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>
  <span class="pl-kos">&lt;</span><span class="pl-ent">VueAwesomeSideBar</span>
      <span class="pl-c1">v-model:miniMenu</span>=&quot;<span class="pl-s">miniMenu</span>&quot;
      <span class="pl-c1">v-model:collapsed</span>=&quot;<span class="pl-s">collapsed</span>&quot;
      <span class="pl-c1">:menu</span>=&quot;<span class="pl-s">testMenu</span>&quot;
      <span class="pl-c1">vueRouterEnabel</span>
    <span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">VueAwesomeSideBar</span><span class="pl-kos">&gt;</span>
<span class="pl-kos">&lt;/</span><span class="pl-ent">template</span><span class="pl-kos">&gt;</span>

<span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">setup</span><span class="pl-kos">&gt;</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span> <span class="pl-s1">ref</span> <span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">&#39;vue&#39;</span>

<span class="pl-k">const</span> <span class="pl-s1">collapsed</span> <span class="pl-c1">=</span> <span class="pl-en">ref</span><span class="pl-kos">(</span><span class="pl-c1">false</span><span class="pl-kos">)</span>
<span class="pl-k">const</span> <span class="pl-s1">miniMenu</span> <span class="pl-c1">=</span> <span class="pl-en">ref</span><span class="pl-kos">(</span><span class="pl-c1">false</span><span class="pl-kos">)</span>

<span class="pl-k">const</span> <span class="pl-s1">testMenu</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">name</span>: <span class="pl-s">&#39;Getting Started&#39;</span><span class="pl-kos">,</span>
    <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">text</span>: <span class="pl-s">&#39;home&#39;</span> <span class="pl-kos">,</span> <span class="pl-c1">class</span>: <span class="pl-s">&#39;material-icons-outlined&#39;</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-c1">children</span>: <span class="pl-kos">[</span>
      <span class="pl-kos">{</span>
        <span class="pl-c1">name</span>: <span class="pl-s">&#39;level 1.1&#39;</span><span class="pl-kos">,</span>
        <span class="pl-c1">href</span>: <span class="pl-s">&#39;/a&#39;</span><span class="pl-kos">,</span>
        <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">text</span>: <span class="pl-s">&#39;home&#39;</span> <span class="pl-kos">,</span> <span class="pl-c1">class</span>: <span class="pl-s">&#39;material-icons-outlined&#39;</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
        <span class="pl-c1">children</span>: <span class="pl-kos">[</span>
          <span class="pl-kos">{</span>
            <span class="pl-c1">href</span>: <span class="pl-s">&#39;/b&#39;</span><span class="pl-kos">,</span>
            <span class="pl-c1">name</span>: <span class="pl-s">&#39;level 1.1.1&#39;</span><span class="pl-kos">,</span>
          <span class="pl-kos">}</span><span class="pl-kos">,</span>
        <span class="pl-kos">]</span>
      <span class="pl-kos">}</span><span class="pl-kos">,</span>
      <span class="pl-kos">{</span>
        <span class="pl-c1">name</span>: <span class="pl-s">&#39;level 1.2&#39;</span>
      <span class="pl-kos">}</span>
    <span class="pl-kos">]</span><span class="pl-kos">,</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">header</span>: <span class="pl-s">&#39;Settings&#39;</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">name</span>: <span class="pl-s">&#39;Dashboard&#39;</span><span class="pl-kos">,</span>
    <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">class</span>: <span class="pl-s">&#39;material-icons-outlined&#39;</span><span class="pl-kos">,</span> <span class="pl-c1">text</span>: <span class="pl-s">&#39;dashboard&#39;</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-c1">children</span>: <span class="pl-kos">[</span>
      <span class="pl-kos">{</span>
        <span class="pl-c1">href</span>: <span class="pl-s">&#39;/c&#39;</span><span class="pl-kos">,</span>
        <span class="pl-c1">name</span>: <span class="pl-s">&#39;level 2.1&#39;</span><span class="pl-kos">,</span>
      <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-kos">]</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span>
    <span class="pl-c1">name</span>: <span class="pl-s">&#39;close menu&#39;</span><span class="pl-kos">,</span>
    <span class="pl-c1">icon</span>: <span class="pl-kos">{</span> <span class="pl-c1">text</span>: <span class="pl-s">&#39;settings&#39;</span><span class="pl-kos">,</span> <span class="pl-c1">class</span>: <span class="pl-s">&#39;material-icons-outlined&#39;</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
<span class="pl-kos">]</span>
<span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></pre></div>`,3),e=[o];function t(k,i){return p(),a("article",c,e)}const d=s(l,[["render",t]]);export{d as default};
