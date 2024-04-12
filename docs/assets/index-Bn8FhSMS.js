(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const l=t=>{const i=t.querySelectorAll(".faq-question_select"),r=t.querySelectorAll("button");i.forEach(s=>{s.addEventListener("click",e=>{s.nextElementSibling.style.display=="flex"?(s.nextElementSibling.style.display="none",r[s.id-1].lastChild.src="./assets/images/icon-plus.svg"):(s.nextElementSibling.style.display="flex",r[s.id-1].lastChild.src="./assets/images/icon-minus.svg")})})},c=`<div class="faq-title">\r
  <img src="./assets/images/icon-star.svg" alt="" />\r
  <h1>FAQs</h1>\r
</div>\r
<div class="faq-question">\r
  <div class="faq-question_select" id="1">\r
    <h2 id="1">What is Frontend Mentor, and how will it help me?</h2>\r
    <button id="1" ><img id="1" src="./assets/images/icon-plus.svg" alt="" /></button>\r
  </div>\r
  <p id="1">\r
    Frontend Mentor offers realistic coding challenges to help developers\r
    improve their frontend coding skills with projects in HTML, CSS, and\r
    JavaScript. It's suitable for all levels and ideal for portfolio building.\r
  </p>\r
</div>\r
<div class="faq-question">\r
  <div class="faq-question_select" id="2">\r
    <h2 id="2">Is Frontend Mentor free?</h2>\r
    <button id="2" ><img id="2" src="./assets/images/icon-plus.svg" alt="" /></button>\r
  </div>\r
  <p id="2">\r
    Yes, Frontend Mentor offers both free and premium coding challenges, with\r
    the free option providing access to a range of projects suitable for all\r
    skill levels.\r
  </p>\r
</div>\r
<div class="faq-question">\r
  <div class="faq-question_select" id="3">\r
    <h2 id="3">Can I use Frontend Mentor projects in my portfolio?</h2>\r
    <button id="3"><img id="3" src="./assets/images/icon-plus.svg" alt="" /></button>\r
  </div>\r
  <p id="3">\r
    Yes, you can use projects completed on Frontend Mentor in your portfolio.\r
    It's an excellent way to showcase your skills to potential employers!\r
  </p>\r
</div>\r
<div class="faq-question">\r
  <div class="faq-question_select" id="4">\r
    <h2 id="4">How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>\r
    <button id="4"><img id="4" src="./assets/images/icon-plus.svg" alt="" /></button>\r
  </div>\r
  <p id="4">\r
    The best place to get help is inside Frontend Mentor's Discord community.\r
    There's a help channel where you can ask questions and seek support from\r
    other community members.\r
  </p>\r
</div>\r
`,a=t=>{const i=c,r=document.createElement("section");r.classList.add("faq-container"),r.innerHTML=i,console.log("work"),t.appendChild(r)},d=document.querySelector("#app"),u=t=>{a(t),l(t)};u(d);
