<!--
 * @Description: 代码背景
 * @Author: Sunly
 * @Date: 2023-09-11 09:53:56
-->
<script setup lang="ts">
import hl from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

const code = `const ur=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Wi=ur(Di,[["__scopeId","data-v-085b705a"]]),zi=qs({__name:"App",setup(e){return(t,n)=>(sr(),ri(Wi,{blogName:"Sunly's Blog"}))}});const bo=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ft(n))&&((t||(t={}))[n]=e[n]);return t},xo=(e,t)=>{const n={};for(const s in e)(!hn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function yo(e,t,n){const{props:s,children:r,component:o}=e,{props:l,children:f,patchFlag:u}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Zn(s,l,d):!!l;if(u&8){const _=t.dynamicProps;for(let E=0;E<_.length;E++){const v=_[E];if(l[v]!==s[v]&&!St(d,v))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:s===l?!1:s?l?Zn(s,l,d):!0:!!l;return!1};function Zn(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!St(n,o))return!0}return!1}function Eo({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const wo=e=>e.__isSuspense;function vo(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):po(e)}const Et={};function Yt(e,t,n){return Ws(e,t,n)}function Ws(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:l}=L){var f;const u=Ar()===((f=Z)==null?void 0:f.scope)?Z:null;let d,_=!1,E=!1;if(G(e)?(d=()=>e.value,_=sn(e)):We(e)?(d=()=>e,s=!0):I(e)?(E=!0,_=e.some(M=>We(M)||sn(M)),d=()=>e.map(M=>{if(G(M))return M.value;if(We(M))return Be(M);if(A(M))return Oe(M,u,2)})):A(e)?t?d=()=>Oe(e,u,2):d=()=>{if(!(u&&u.isUnmounted))return v&&v(),ce(e,u,3,[P])}:d=le,t&&s){const M=d;d=()=>Be(M())}let v,P=M=>{v=Y.onStop=()=>{Oe(M,u,4)}},K;if(ut)if(P=le,t?n&&ce(t,u,3,[d(),E?[]:void 0,P]):d(),r==="sync"){const M=xi();K=M.__watcherHandles||(M.__watcherHandles=[])}else return le;let R=E?new Array(e.length).fill(Et):Et;const W=()=>{if(Y.active)if(t){const M=Y.run();(s||_||(E?M.some((ye,Qe)=>Tt(ye,R[Qe])):Tt(M,R)))&&(v&&v(),ce(t,u,3,[M,R===Et?void 0:E&&R[0]===Et?[]:R,P]),R=M)}else Y.run()};W.allowRecurse=!!t;let J;r==="sync"?J=W:r==="post"?J=()=>ee(W,u&&u.suspense):(W.pre=!0,u&&(W.id=u.uid),J=()=>An(W));const Y=new yn(d,J);t?n?W():R=Y.run():r==="post"?ee(Y.run.bind(Y),u&&u.suspense):Y.run();const V=()=>{Y.stop(),u&&u.scope&&pn(u.scope.effects,Y)};return K&&K.push(V),V}function Oo(e,t,n){const s=this.proxy,r=q(e)?e.includes(".")?zs(s,e):()=>s[e]:e.bind(s,s);let o;A(t)?o=t:(o=t.handler,n=t);const l=Z;Ye(this);const f=Ws(r,o.bind(s),n);return l?Ye(l):Se(),f}function zs(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Be(e,t){if(!B(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),G(e))Be(e.value,t);else if(I(e))for(let n=0;n<e.length;n++)Be(e[n],t);else if(_s(e)||De(e))e.forEach(n=>{Be(n,t)});else if(xs(e))for(const n in e)Be(e[n],t);return e}function Fe(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let l=0;l<r.length;l++){const f=r[l];o&&(f.oldValue=o[l].value);let u=f.dir[s];u&&(Xe(),ce(u,n,8,[e.el,f,e,t]),Ze())}}function qs(e,t){return A(e)?(()=>z({name:e.name},t,{setup:e}))():e}const vt=e=>!!e.type.__asyncLoader,Js=e=>e.type.__isKeepAlive;function Co(e,t){Ys(e,"a",t)}function To(e,t){Ys(e,"da",t)}function Ys(e,t,n=Z){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if($t(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Js(r.parent.vnode)&&Io(s,t,n,r),r=r.parent}}function Io(e,t,n,s){const r=$t(t,e,s,!0);Vs(()=>{pn(s[t],r)},n)}`;
hl.registerLanguage("javascript", javascript);
const codeHtml = hl.highlight(code, { language: "javascript" }).value;

onMounted(() => {
  const code: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("code .hljs-string");
  const res = [...code].forEach((node) => {
    if (node.innerText.includes("Sunly")) {
      node.setAttribute("class", "rainbow-text");
    }
  });
  console.log(res);
});
</script>

<template>
  <div class="code-bg">
    <div class="code-wrapper">
      <code class="lang-javascript" v-html="codeHtml"></code>
    </div>
  </div>
</template>

<style lang="scss">
.code-bg {
  background-color: $bg_color;
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .code-wrapper {
    font-size: 34px;
    width: 2500px;
    font-family: monospace, system-ui;
    word-break: break-all;
    font-weight: 700;
    line-height: 48px;
    transform: translate(calc((100vw - 2500px) / 2), 0);

    // hljs
    code {
      color: #ffffff07;
      user-select: none;
    }
  }
}

.rainbow-text {
  background-color: #ca4246;
  background-image: linear-gradient(
    65deg,
    #d41426 16.666%,
    #e05531 16.666%,
    #e05531 33.333%,
    #f17f33 33.333%,
    #f17f33 50%,
    #7a8f52 50%,
    #7a8f52 66.666%,
    #3f6088 66.666%,
    #3f6088 83.333%,
    #96488b 83.333%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
