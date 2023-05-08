(()=>{"use strict";var e={};function t(e,t,n,c){this.Title=e,this.Description=t,this["Due date"]=n,this.Priority=c}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var o=c.length-1;o>-1&&!t;)t=c[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const n=e.p+"5b77d777069c8253eb74.svg",c=e.p+"38cace3c43298c884e36.svg";function o(e){const t=document.querySelector(".main");(e=>{for(let t=0;t<e.length-1;t++){const n=Object.values(e[t])[2].substr(0,4),c=Object.values(e[t])[2].substr(8,10),o=Object.values(e[t])[2].substr(5,7);for(let r=t+1;r<e.length;r++){const i=Object.values(e[r])[2].substr(0,4),s=Object.values(e[r])[2].substr(8,10),a=Object.values(e[r])[2].substr(5,7);if(n>i){const n=e[t];e[t]=e[r],e[r]=n,t=-1;break}if(n==i&&o>a){const n=e[t];e[t]=e[r],e[r]=n,t=-1;break}if(n==i&&o==a&&c>s){const n=e[t];e[t]=e[r],e[r]=n,t=-1;break}}}})(e);const o=[];for(let r=0;r<e.length;r++){const i=document.createElement("div");i.classList.add("toDo"),i.classList.add(`${r}`),o.push(i);for(let t=0;t<Object.keys(e[r]).length;t++){const c=document.createElement("div");c.classList.add("row");const o=Object.keys(e[r])[t],s=Object.values(e[r])[t],a=document.createElement("div");a.classList.add("property"),a.textContent=`${o}:`,c.appendChild(a);const l=document.createElement("div");l.classList.add("propertyValue"),l.textContent=`${s}`,c.appendChild(l);const d=document.createElement("button");d.classList.add("editButton");const u=new Image;u.src=n,d.appendChild(u),c.appendChild(d),i.appendChild(c)}const s=document.createElement("button");s.classList.add("removeButton");const a=new Image;a.src=c,s.appendChild(a),i.appendChild(s),t.appendChild(i)}!function(e){document.querySelectorAll(".editButton").forEach((t=>{t.addEventListener("click",(()=>{const n=t.parentElement,c=t.previousElementSibling,o=c.previousElementSibling,r=t.parentElement;n.removeChild(t);const i=r.parentElement,s=document.createElement("input");switch(o.textContent){case"Title:":case"Description:":s.type="text";break;case"Due date:":s.type="date";break;case"Priority:":s.type="range",s.setAttribute("min","1"),s.setAttribute("max","3")}r.replaceChild(s,c),s.addEventListener("change",(()=>{let a;n.appendChild(t),c.textContent=s.value,r.replaceChild(c,s);for(let t=0;t<e.length;t++)if(i.classList.contains(`${t}`))switch(a=t,o.textContent){case"Title:":e[t].Title=s.value;break;case"Description:":e[t].Description=s.value;break;case"Due date:":e[t]["Due date"]=s.value;break;case"Priority:":e[t].Priority=s.value}}))}))}))}(e),function(e){document.querySelectorAll(".removeButton").forEach((t=>{t.addEventListener("click",(()=>{const n=t.parentElement;n.parentElement.removeChild(n);for(let t=0;t<e.length;t++)if(n.classList.contains(`${t}`))return console.log(t),void console.log(e.splice(t,1))}))}))}(e)}!function(e){const n=document.querySelector(".newDefault"),c=document.querySelector(".container");n.addEventListener("click",(()=>{c.style.display="none",function(){const e=document.querySelector(".main");if(e.hasChildNodes())for(;e.firstChild;)e.removeChild(e.firstChild)}(),function(e){const n=document.querySelector("body");n.classList.add("formContainer");const c=document.createElement("form");c.classList.add("defaultForm");const r=document.createElement("div");r.classList.add("defaultForm-control");const i=document.createElement("label");i.setAttribute("for","title"),i.textContent="Title";const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("id","title"),i.appendChild(s),r.appendChild(i),c.appendChild(r);const a=document.createElement("div");a.classList.add("defaultForm-control");const l=document.createElement("label");l.setAttribute("for","description"),l.textContent="Description";const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("id","description"),l.appendChild(d),a.appendChild(l),c.appendChild(a);const u=document.createElement("div");u.classList.add("defaultForm-control");const p=document.createElement("label");p.setAttribute("for","dueDate"),p.textContent="Due date";const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("id","dueDate"),p.appendChild(m),u.appendChild(p),c.appendChild(u);const h=document.createElement("div");h.classList.add("defaultForm-control");const b=document.createElement("label");b.setAttribute("for","priority"),b.textContent="Priority";const v=document.createElement("input");v.setAttribute("type","range"),v.setAttribute("id","priority"),v.setAttribute("min","1"),v.setAttribute("max","3"),b.appendChild(v),h.appendChild(b),c.appendChild(h);const f=document.createElement("div");f.classList.add("defaultForm-control");const C=document.createElement("button");C.classList.add("add"),C.textContent="+",f.appendChild(C),c.appendChild(f),n.appendChild(c);const y=document.querySelector(".container");c.addEventListener("submit",(r=>{var i;r.preventDefault(),i=new t(document.querySelector("#title").value,document.querySelector("#description").value,document.querySelector("#dueDate").value,document.querySelector("#priority").value),e.push(i),n.removeChild(c),o(e),y.style.display="grid"}))}(e)}))}([])})();