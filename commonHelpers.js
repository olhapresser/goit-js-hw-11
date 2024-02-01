import{i as a}from"./assets/vendor-32231325.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const c={form:document.querySelector("#form"),input:document.querySelector(".input"),container:document.querySelector(".container")};c.form.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget,r=o.elements.query.value;p(r).then(h).catch(m).finally(()=>o.reset())});const l="42114323-50c2b50fedad4076dc7ba42b5",u="https://pixabay.com/api/";function f(t){return`${u}?key=${l}&image_type=photo&orientation=horizontal&safesearch=true&q=${t}`}function p(t){const o=f(t);return fetch(o).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(({hits:r})=>r)}function m(){a.error({title:"Sorry, something went wrong."})}function d(){a.error({title:"Sorry, there are no images matching your search query. Please try again!"})}function h(t){if(t.length===0)return d();y(t)}function y(t){const o=t.map(r=>g(r)).join(" ");c.container.innerHTML(o)}function g({webformatURL:t,largeImageURL:o,tags:r,likes:s,views:e,comments:n,downloads:i}){return`
    <div>
    <img src="${t}" alt="${r}">
<ul>
<li>
<span>Likes</span><br>
<span>${s}</span>
</li>
<li>
<span>Views</span><br>
<span>${e}</span>
</li>
<li>
<span>Comments</span><br>
<span>${n}</span>
</li>
<li>
<span>Downloads</span><br>
<span>${i}</span>
</li>
</ul>
    </div>
    `}
//# sourceMappingURL=commonHelpers.js.map
