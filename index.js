import{a as u}from"./assets/vendor-CWxt7QI6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f="52544732-939bdd7f86cf76540eb760f6b",a=document.querySelector(".list"),n=document.querySelector(".form");document.querySelector(".submit-btn");n["search-text"];const m=u.create({baseURL:"https://pixabay.com/api/",params:{key:f,image_type:"photo",orientation:"horizontal",safesearch:!0}});n.addEventListener("submit",p);function p(s){s.preventDefault();const r=s.target.elements["search-text"].value.toLowerCase().trim();r&&m.get("",{params:{q:r}}).then(({data:l})=>{console.log(l.hits),a.innerHTML="",a.innerHTML=d(l.hits)}).catch(l=>{console.log("Error:",l)})}function d(s){return s.map(({webformatURL:r,largeImageURL:l,tags:i,likes:e,views:t,comments:o,downloads:c})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${l}">
    <img 
    class="gallery-image"
    src="${r}"
    alt="${i}"
    />
    </a>
    <ul class="gallery-content-list">
    <li class="gallery-content-item">
    <h3 class="gallery-content-title">Likes</h3>
    <p class="gallery-title-value">${e}</p>
    <h3 class="gallery-content-title">Views</h3>
    <p class="gallery-title-value">${t}</p>
     <h3 class="gallery-content-title">Comments</h3>
    <p class="gallery-title-value">${o}</p>
     <h3 class="gallery-content-title">Downloads</h3>
    <p class="gallery-title-value">${c}</p>
    </li>
    </ul>
    </li>
    `).join("")}
//# sourceMappingURL=index.js.map
