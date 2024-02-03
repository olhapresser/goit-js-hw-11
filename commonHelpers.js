import{S as c,i as l}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const s={form:document.querySelector("#form"),input:document.querySelector(".input"),container:document.querySelector(".container"),loading:document.querySelector(".loading")},u=new c(".container a",{});s.form.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget,n=o.elements.query.value;n.trim()&&(s.loading.style.display="block",m(n).then(g).catch(h).finally(()=>{o.reset(),s.loading.style.display="none"}))});const f="42114323-50c2b50fedad4076dc7ba42b5",d="https://pixabay.com/api/";function p(t){return`${d}?key=${f}&image_type=photo&orientation=horizontal&safesearch=true&q=${t}`}function m(t){const o=p(t);return fetch(o).then(n=>{if(!n.ok)throw new Error(n.statusText);return n.json()}).then(({hits:n})=>n)}function h(){l.error({title:"Sorry, something went wrong."})}function y(){l.error({title:"Sorry, there are no images matching your search query. Please try again!"})}function g(t){if(t.length===0)return s.container.innerHTML="",y();b(t),u.refresh()}function b(t){const o=t.map(n=>L(n)).join(" ");console.log(o),s.container.innerHTML=o}function L({webformatURL:t,largeImageURL:o,tags:n,likes:a,views:e,comments:r,downloads:i}){return`
    <a href="${o}">
    <div>
    <img src="${t}" alt="${n}">
<ul class="photo_details">
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
<span>${r}</span>
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
