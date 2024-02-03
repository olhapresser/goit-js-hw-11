import{S as c,i as l}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const s={form:document.querySelector("#form"),input:document.querySelector(".input"),container:document.querySelector(".container"),loading:document.querySelector(".loading")},u=new c(".container a",{});s.form.addEventListener("submit",t=>{t.preventDefault();const r=t.currentTarget,n=r.elements.query.value;n.trim()&&(s.loading.style.display="block",m(n).then(g).catch(h).finally(()=>{r.reset(),s.loading.style.display="none"}))});const f="42114323-50c2b50fedad4076dc7ba42b5",d="https://pixabay.com/api/";function p(t){return`${d}?key=${f}&image_type=photo&orientation=horizontal&safesearch=true&q=${t}`}function m(t){const r=p(t);return fetch(r).then(n=>{if(!n.ok)throw new Error(n.statusText);return n.json()}).then(({hits:n})=>n)}function h(){l.error({title:"Sorry, something went wrong."})}function y(){l.error({title:"Sorry, there are no images matching your search query. Please try again!"})}function g(t){if(t.length===0)return s.container.innerHTML="",y();b(t),u.refresh()}function b(t){const r=t.map(n=>L(n)).join(" ");console.log(r),s.container.innerHTML=r}function L({webformatURL:t,largeImageURL:r,tags:n,likes:a,views:e,comments:o,downloads:i}){return`
    <a href="${r}">
    <div>
    <img src="${t}" alt="${n}">
<ul>
<li>
<span>Likes</span><br>
<span>${a}</span>
</li>
<li>
<span>Views</span><br>
<span>${e}</span>
</li>
<li>
<span>Comments</span><br>
<span>${o}</span>
</li>
<li>
<span>Downloads</span><br>
<span>${i}</span>
</li>
</ul>
    </div>
    </a>
    `}
//# sourceMappingURL=commonHelpers.js.map
