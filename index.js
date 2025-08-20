import{a as u,S as f,i}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="51885982-6956decd6d250e953d7b24c18",m="https://pixabay.com/api/";async function h(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(m,{params:o})).data}catch{throw new Error("Error fetching images")}}const l=document.querySelector(".gallery"),d=document.querySelector("#loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){l.innerHTML=""}function L(){d.classList.remove("hidden")}function w(){d.classList.add("hidden")}const a=document.querySelector(".form");a.addEventListener("submit",async s=>{s.preventDefault();const o=a.elements["search-text"].value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),L();try{const e=await h(o);e.hits.length===0?i.info({title:"No results",message:"Sorry, there are no images matching your search query.",position:"topRight"}):g(e.hits)}catch{i.error({title:"Error",message:"Failed to fetch images. Try again later.",position:"topRight"})}finally{w(),a.reset()}});
//# sourceMappingURL=index.js.map
