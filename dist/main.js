(()=>{"use strict";var e={};function t(e,t,n,c){this.Title=e,this.Description=t,this["Due date"]=n,this.Priority=c}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var o=c.length-1;o>-1&&!t;)t=c[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const n=e=>{for(let t=0;t<e.length-1;t++){const n=Object.values(e[t])[2].substr(0,4),c=Object.values(e[t])[2].substr(8,10),o=Object.values(e[t])[2].substr(5,7);for(let r=t+1;r<e.length;r++){const d=Object.values(e[r])[2].substr(0,4),s=Object.values(e[r])[2].substr(8,10),a=Object.values(e[r])[2].substr(5,7);if(n>d){const n=e[t];e[t]=e[r],e[r]=n,t=-1;break}if(n==d&&o>a){const n=e[t];e[t]=e[r],e[r]=n,t=-1;break}if(n==d&&o==a&&c>s){const n=e[t];e[t]=e[r],e[r]=n,t=-1;break}}}},c=e.p+"267f370fafe146d23041.svg",o=e.p+"2ad67c4d47e2a825090b.svg";function r(){const e=document.querySelector(".main");if(e.hasChildNodes())for(;e.firstChild;)e.removeChild(e.firstChild)}function d(e){document.querySelectorAll(".editButton").forEach((t=>{t.addEventListener("click",(()=>{const n=t.parentElement,c=t.previousElementSibling,o=c.previousElementSibling,d=t.parentElement;n.removeChild(t);const s=d.parentElement,i=document.createElement("input");switch(o.textContent){case"Title:":case"Description:":i.type="text";break;case"Due date:":i.type="date",i.setAttribute("required","true");break;case"Priority:":i.type="range",i.setAttribute("min","1"),i.setAttribute("max","3")}d.replaceChild(i,c),i.addEventListener("change",(()=>{let l;n.appendChild(t),c.textContent=i.value,d.replaceChild(c,i);for(let t=0;t<e.length;t++)if(s.classList.contains(`${t}`))switch(l=t,o.textContent){case"Title:":e[t].Title=i.value;break;case"Description:":e[t].Description=i.value;break;case"Due date:":e[t]["Due date"]=i.value,r(),a(e);break;case"Priority:":e[t].Priority=i.value}}))}))}))}function s(e){document.querySelectorAll(".removeButton").forEach((t=>{t.addEventListener("click",(()=>{const n=t.parentElement;n.parentElement.removeChild(n);for(let t=0;t<e.length;t++)if(n.classList.contains(`${t}`))return void e.splice(t,1)}))}))}function a(e){const t=document.querySelector(".main");n(e);const r=[];for(let n=0;n<e.length;n++){const d=document.createElement("div");d.classList.add("toDo"),d.classList.add(`${n}`),r.push(d);for(let t=0;t<Object.keys(e[n]).length;t++){const o=document.createElement("div");o.classList.add("row");const r=Object.keys(e[n])[t],s=Object.values(e[n])[t],a=document.createElement("div");a.classList.add("property"),a.textContent=`${r}:`,o.appendChild(a);const i=document.createElement("div");i.classList.add("propertyValue"),i.textContent=`${s}`,o.appendChild(i);const l=document.createElement("button");l.classList.add("editButton");const u=new Image;u.src=c,l.appendChild(u),o.appendChild(l),d.appendChild(o)}const s=document.createElement("button");s.classList.add("removeButton");const a=new Image;a.src=o,s.appendChild(a),d.appendChild(s),t.appendChild(d)}var a;d(e),s(e),a=e,localStorage.setItem("toDosList",JSON.stringify(a))}function i(e,t){this.Title=e,this["Due date"]=t,this.project=[]}function l(e){localStorage.setItem("projectsList",JSON.stringify(e))}function u(e){const t=document.querySelectorAll(".projectDetail");document.querySelector(".main"),t.forEach((t=>{t.addEventListener("click",(()=>{r();const n=t.parentElement;for(let t=0;t<e.length;t++)n.classList.contains(`${t}`)&&a(e[t].project);l(e)}))}))}function p(e){const t=document.querySelector(".defaultTitle");document.querySelector(".main"),t.addEventListener("click",(()=>{r(),a(e)}))}function m(e,r){const a=document.querySelector(".main"),i=document.createElement("form");i.classList.add("projectForm");const u=document.createElement("div");u.classList.add("projectFormControl");const p=document.createElement("label");p.classList.add("projectFormLabel"),p.setAttribute("for","title"),p.textContent="Title";const m=document.createElement("input");m.setAttribute("type","text"),m.setAttribute("id","title"),p.appendChild(m),u.appendChild(p),i.appendChild(u);const b=document.createElement("div");b.classList.add("projectFormControl");const h=document.createElement("label");h.classList.add("projectFormLabel"),h.setAttribute("for","description"),h.textContent="Description";const f=document.createElement("input");f.setAttribute("type","text"),f.setAttribute("id","description"),h.appendChild(f),b.appendChild(h),i.appendChild(b);const C=document.createElement("div");C.classList.add("projectFormControl");const v=document.createElement("label");v.classList.add("projectFormLabel"),v.setAttribute("for","dueDate"),v.textContent="Due date";const E=document.createElement("input");E.setAttribute("type","date"),E.setAttribute("id","dueDate"),E.setAttribute("required","true"),v.appendChild(E),C.appendChild(v),i.appendChild(C);const L=document.createElement("div");L.classList.add("projectFormControl");const y=document.createElement("label");y.classList.add("projectFormLabel"),y.setAttribute("for","priority"),y.textContent="Priority";const j=document.createElement("input");j.setAttribute("type","range"),j.setAttribute("id","priority"),j.setAttribute("min","1"),j.setAttribute("max","3"),y.appendChild(j),L.appendChild(y),i.appendChild(L);const A=document.createElement("div");A.classList.add("projectFormControl");const g=document.createElement("button");g.classList.add("add"),g.textContent="Add",A.appendChild(g),i.appendChild(A),a.appendChild(i),i.addEventListener("submit",(u=>{u.preventDefault(),function(e,t){t.push(e)}(new t(document.querySelector("#title").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,document.querySelector("#priority").value),r),a.removeChild(i),function(e,t){const r=document.querySelector(".main");n(t);const a=[];for(let e=0;e<t.length;e++){const n=document.createElement("div");n.classList.add("toDo"),n.classList.add(`${e}`),a.push(n);for(let o=0;o<Object.keys(t[e]).length;o++){const r=document.createElement("div");r.classList.add("row");const d=Object.keys(t[e])[o],s=Object.values(t[e])[o],a=document.createElement("div");a.classList.add("property"),a.textContent=`${d}:`,r.appendChild(a);const i=document.createElement("div");i.classList.add("propertyValue"),i.textContent=`${s}`,r.appendChild(i);const l=document.createElement("button");l.classList.add("editButton");const u=new Image;u.src=c,l.appendChild(u),r.appendChild(l),n.appendChild(r)}const d=document.createElement("button");d.classList.add("removeButton");const s=new Image;s.src=o,d.appendChild(s),n.appendChild(d),r.appendChild(n)}d(t),s(t),l(e)}(e,r)}))}function b(e){document.querySelectorAll(".addToDoInProject").forEach((t=>{t.addEventListener("click",(()=>{r();const n=t.parentElement;for(let t=0;t<e.length;t++)n.classList.contains(`${t}`)&&m(e,e[t].project)}))}))}const h=e.p+"adf45c3369508f392a0d.svg";function f(e,t){const n=document.querySelector(".projects");if(n.hasChildNodes())for(;n.hasChildNodes();){const{firstChild:e}=n;n.removeChild(e)}(e=>{for(let t=0;t<e.length-1;t++){const n=Object.values(e[t])[1].substr(0,4),c=Object.values(e[t])[1].substr(8,10),o=Object.values(e[t])[1].substr(5,7);for(let r=t+1;r<e.length;r++){const d=Object.values(e[r])[1].substr(0,4),s=Object.values(e[r])[1].substr(8,10),a=Object.values(e[r])[1].substr(5,7);if(n>d){const n=e[t];e[t]=e[r],e[r]=n,t=-1;break}if(n==d&&o>a){const n=e[t];e[t]=e[r],e[r]=n,t=-1;break}if(n==d&&o==a&&c>s){const n=e[t];e[t]=e[r],e[r]=n,t=-1;break}}}})(e);const c=[];for(let t=0;t<e.length;t++){const o=document.createElement("div");o.classList.add("project"),o.classList.add(`${t}`),c.push(o);for(let n=0;n<Object.keys(e[t]).length-1;n++){const c=Object.values(e[t])[n],r=document.createElement("div");r.classList.add("projectDetail"),r.textContent=`${c}`,o.appendChild(r)}const r=document.createElement("button");r.classList.add("removeButton"),r.classList.add("removeProjectButton");const d=new Image;d.src=h,r.appendChild(d),o.appendChild(r);const s=document.createElement("button");s.classList.add("addToDoInProject"),s.textContent="Add to-do",o.appendChild(s),n.appendChild(o)}u(e),p(t),b(e),function(e,t){document.querySelectorAll(".removeProjectButton").forEach((n=>{n.addEventListener("click",(()=>{const c=n.parentElement;c.parentElement.removeChild(c);for(let n=0;n<e.length;n++)if(c.classList.contains(`${n}`))return e.splice(n,1),void f(e,t)}))}))}(e,t),l(e)}let C=[],v=[];var E;C=function(){let e=JSON.parse(localStorage.getItem("toDosList"));return null===e&&(e=[]),e}(),v=function(){let e=JSON.parse(localStorage.getItem("projectsList"));return null===e&&(e=[]),e}(),a(C),f(v,C),p(C),E=C,document.querySelector(".newDefault").addEventListener("click",(()=>{r(),function(e){const n=document.querySelector(".main"),c=document.createElement("form");c.classList.add("defaultForm");const o=document.createElement("div");o.classList.add("defaultForm-control");const r=document.createElement("label");r.classList.add("defaultFormLabel"),r.setAttribute("for","title"),r.textContent="Title";const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("id","title"),r.appendChild(d),o.appendChild(r),c.appendChild(o);const s=document.createElement("div");s.classList.add("defaultForm-control");const i=document.createElement("label");i.classList.add("defaultFormLabel"),i.setAttribute("for","description"),i.textContent="Description";const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("id","description"),i.appendChild(l),s.appendChild(i),c.appendChild(s);const u=document.createElement("div");u.classList.add("defaultForm-control");const p=document.createElement("label");p.classList.add("defaultFormLabel"),p.setAttribute("for","dueDate"),p.textContent="Due date";const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("id","dueDate"),m.setAttribute("required","true"),p.appendChild(m),u.appendChild(p),c.appendChild(u);const b=document.createElement("div");b.classList.add("defaultForm-control");const h=document.createElement("label");h.classList.add("defaultFormLabel"),h.setAttribute("for","priority"),h.textContent="Priority";const f=document.createElement("input");f.setAttribute("type","range"),f.setAttribute("id","priority"),f.setAttribute("min","1"),f.setAttribute("max","3"),h.appendChild(f),b.appendChild(h),c.appendChild(b);const C=document.createElement("div");C.classList.add("defaultForm-control");const v=document.createElement("button");v.classList.add("add"),v.textContent="Add",C.appendChild(v),c.appendChild(C),n.appendChild(c),c.addEventListener("submit",(o=>{o.preventDefault(),function(e,t){t.push(e)}(new t(document.querySelector("#title").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,document.querySelector("#priority").value),e),n.removeChild(c),a(e)}))}(E)})),function(e,t){const n=document.querySelector(".newProject");n.addEventListener("click",(()=>{n.disabled=!0,function(e,t){const n=document.querySelector(".projectsSidebar"),c=document.createElement("form");c.classList.add("newProjectForm");const o=document.createElement("label");o.classList.add("projectLabel"),o.setAttribute("for","project"),o.textContent="Project's name";const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","project"),o.appendChild(r),c.appendChild(o);const d=document.createElement("div");d.classList.add("projectDiv");const s=document.createElement("label");s.classList.add("projectLabel"),s.setAttribute("for","dueDate"),s.textContent="Due date";const a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("id","dueDate"),a.setAttribute("required","true"),s.appendChild(a),d.appendChild(s),c.appendChild(d),n.insertBefore(c,n.children[1].nextSibling),c.addEventListener("submit",(o=>{o.preventDefault(),function(e,t){t.push(e)}(new i(document.querySelector("#project").value,document.querySelector("#dueDate").value),e),n.removeChild(c),document.querySelector(".newProject").disabled=!1,f(e,t)}))}(e,t)}))}(v,C),b(v),u(v)})();