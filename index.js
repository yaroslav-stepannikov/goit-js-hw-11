import{a as u}from"./assets/vendor-CWxt7QI6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const p="52544732-939bdd7f86cf76540eb760f6b",i=document.querySelector(".list"),n=document.querySelector(".form");document.querySelector(".submit-btn");n["search-text"];const d=u.create({baseURL:"https://pixabay.com/api/",params:{key:p,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:18}});n.addEventListener("submit",f);function f(s){s.preventDefault();const r=s.target.elements["search-text"].value.toLowerCase().trim();r&&d.get("",{params:{q:r}}).then(({data:l})=>{console.log(l.hits),i.innerHTML="",i.innerHTML=m(l.hits)}).catch(l=>{console.log("Error:",l)})}function m(s){return s.map(({webformatURL:r,largeImageURL:l,tags:a,likes:e,views:t,comments:o,downloads:c})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${l}">
    <img 
    class="gallery-image"
    src="${r}"
    alt="${a}"
    />
    </a>
      <ul class="gallery-content-list">
      <li class="gallery-content-item">
      <div class="content-wrapper">
        <h3 class="gallery-content-title">Likes</h3>
        <p class="gallery-title-value">${e}</p>
      </div>
      <div class="content-wrapper">
        <h3 class="gallery-content-title">Views</h3>
        <p class="gallery-title-value">${t}</p>
      </div>
       <div class="content-wrapper">
         <h3 class="gallery-content-title">Comments</h3>
        <p class="gallery-title-value">${o}</p>
       </div>
       <div class="content-wrapper">
         <h3 class="gallery-content-title">Downloads</h3>
        <p class="gallery-title-value">${c}</p>
       </div>
      </li>
      </ul>
    </li>
    `).join("")}
//# sourceMappingURL=index.js.map
