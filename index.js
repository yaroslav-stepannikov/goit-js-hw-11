import{a as g,S as m,i as a}from"./assets/vendor-BNibzuFn.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="52544732-939bdd7f86cf76540eb760f6b",h=g.create({baseURL:"https://pixabay.com/api/",params:{key:f,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:18}});function y(i){return i?h.get("",{params:{q:i}}).then(s=>s.data).catch(s=>(console.log(s),{hits:[]})):Promise.resolve({hits:[]})}const c=document.querySelector(".list"),u=document.querySelector(".loader"),v=new m(".list a",{captionsData:"alt",captionDelay:250});function L(i){const s=i.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:l,comments:p,downloads:d})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${r}" alt="${e}" loading="lazy" />
      </a>
      <ul class="gallery-content-list">
        <li class="gallery-content-item">
          <div class="content-wrapper">
            <h3 class="gallery-content-title">Likes</h3>
            <p class="gallery-title-value">${t}</p>
          </div>
          <div class="content-wrapper">
            <h3 class="gallery-content-title">Views</h3>
            <p class="gallery-title-value">${l}</p>
          </div>
          <div class="content-wrapper">
            <h3 class="gallery-content-title">Comments</h3>
            <p class="gallery-title-value">${p}</p>
          </div>
          <div class="content-wrapper">
            <h3 class="gallery-content-title">Downloads</h3>
            <p class="gallery-title-value">${d}</p>
          </div>
        </li>
      </ul>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",s),v.refresh()}function b(){c.innerHTML=""}function w(){u.classList.add("is-visible")}function P(){u.classList.remove("is-visible")}const n=document.querySelector(".form");n.addEventListener("submit",i=>{i.preventDefault();const s=n.elements["search-text"].value.trim();if(!s){a.warning({title:"Warning",message:"Please enter a search query",timeout:3e3,position:"topRight"});return}b(),w(),y(s).then(r=>{if(P(),!r.hits||r.hits.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",timeout:4e3,position:"topRight"});return}L(r.hits),a.success({title:"Success",message:`Found ${r.hits.length} images`,timeout:3e3,position:"topRight"})})});
//# sourceMappingURL=index.js.map
