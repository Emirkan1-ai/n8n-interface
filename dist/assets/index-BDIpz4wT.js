(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const o=[{id:"admin",name:"Admin Instance",description:"Administrative workflows and system management",url:"https://admin-n8n.zk-ai.agency",icon:"⚙️"},{id:"zuefer",name:"Zuefer Kilincarslan Instance",description:"Personal automation workflows",url:"https://zuefer-kilincarslan-n8n.zk-ai.agency",icon:"🚀"},{id:"emirkan",name:"Emirkan Tekin Instance",description:"Personal automation workflows",url:"https://emirkan-tekin-n8n.zk-ai.agency",icon:"💻"}];function c(n){const e=document.createElement("div");e.className="instance-card",e.setAttribute("data-instance",n.id),e.setAttribute("tabindex","0"),e.setAttribute("role","button"),e.setAttribute("aria-label",`Open ${n.name}`),e.innerHTML=`
    <div class="card-content">
      <div class="card-icon">${n.icon}</div>
      <div class="card-info">
        <h3 class="card-title">${n.name}</h3>
        <p class="card-description">${n.description}</p>
      </div>
      <button class="card-button" aria-label="Open ${n.name}">
        <span>Open</span>
        <svg class="button-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  `;const i=()=>{e.classList.add("card-clicked"),setTimeout(()=>{window.open(n.url,"_blank","noopener,noreferrer"),e.classList.remove("card-clicked")},150)};return e.addEventListener("click",i),e.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),i())}),e}function d(){const n=document.querySelector("#instances-grid");n&&o.forEach(e=>{const i=c(e);n.appendChild(i)})}document.querySelector("#app").innerHTML=`
  <div class="dashboard-container">
    <header class="dashboard-header">
      <div class="header-content">
        <h1 class="main-title">n8n Dashboard</h1>
        <p class="subtitle">Select your automation instance</p>
      </div>
    </header>
    
    <main class="dashboard-main">
      <div id="instances-grid" class="instances-grid"></div>
    </main>
    
    <footer class="dashboard-footer">
      <p>Powered by <span class="brand">ZK-AI Agency</span></p>
    </footer>
  </div>
`;d();
