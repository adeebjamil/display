document.addEventListener("DOMContentLoaded",()=>{const g={threshold:.1,rootMargin:"50px"},y=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target instanceof HTMLElement&&(e.target.style.opacity="1",e.target.style.transform="translateY(0)")})},g);document.querySelectorAll(".group, [data-category]").forEach(t=>{t instanceof HTMLElement&&y.observe(t)});const s=document.querySelectorAll("[data-filter]"),v=document.querySelectorAll("[data-category]");function i(t){s.forEach(e=>{if(e instanceof HTMLElement){const l=e.dataset.filter===t;e.dataset.active=l.toString()}}),v.forEach(e=>{e instanceof HTMLElement&&(t==="all"||e.dataset.category===t?(e.style.opacity="0",e.style.display="block",requestAnimationFrame(()=>{e.style.opacity="1",e.style.transform="translateY(0)"})):(e.style.opacity="0",e.style.transform="translateY(20px)",setTimeout(()=>{e.style.display="none"},300)))})}s.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-filter");e&&i(e)})}),i("all");function h(t){const e=document.getElementById("productModal"),l=document.getElementById("modalImage"),c=document.getElementById("modalTitle"),d=document.getElementById("modalDescription"),m=document.getElementById("modalFeatures"),u=document.getElementById("modalSpecs"),f=document.getElementById("modalUseCases"),p=document.getElementById("modalBenefits");if(e&&l&&c&&d&&m){if(l.src=t.image,l.alt=t.name,c.textContent=t.name,d.textContent=`${t.description} - Engineered for professional environments demanding reliable and high-performance video wall control solutions.`,m.innerHTML=t.features.map(o=>`
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-gray-700">${o}</span>
            </div>
          `).join(""),u){const o=t.category==="decoder"?[{label:"Video Input",value:"Multiple HD inputs"},{label:"Resolution",value:"Up to 4K (3840×2160)"},{label:"Decoding",value:"H.265/H.264"},{label:"Latency",value:"<100ms"}]:[{label:"Control Interface",value:"USB/Network"},{label:"Display",value:"LCD Information Screen"},{label:"Power Supply",value:"DC 12V"},{label:"Operating Temperature",value:"-10°C ~ +55°C"}];u.innerHTML=o.map(n=>`
              <div class="flex flex-col">
                <span class="text-sm font-medium text-gray-500">${n.label}</span>
                <span class="text-base font-semibold text-gray-900">${n.value}</span>
              </div>
            `).join("")}if(f){const o=["Control Rooms","Security Centers","Command Centers","Digital Signage","Broadcast Studios","Corporate Facilities"];f.innerHTML=o.map(n=>`
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>${n}</span>
              </li>
            `).join("")}if(p){const o=["Enhanced operational efficiency with intuitive control interface","Reduced complexity through centralized management","Future-proof scalability for growing requirements","Reliable 24/7 operation capability"];p.innerHTML=o.map(n=>`
              <div class="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span class="text-gray-700">${n}</span>
              </div>
            `).join("")}e.classList.remove("hidden"),document.body.style.overflow="hidden"}}document.querySelectorAll("[data-product]").forEach(t=>{t.addEventListener("click",()=>{const e=JSON.parse(t.dataset.product||"{}");h(e)})});const a=document.getElementById("productModal"),r=document.querySelector(".close-modal");if(a&&r){const t=()=>{a.classList.add("hidden"),document.body.style.overflow="auto"};r.addEventListener("click",t),a.addEventListener("click",e=>{e.target===a&&t()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!a.classList.contains("hidden")&&t()})}});
