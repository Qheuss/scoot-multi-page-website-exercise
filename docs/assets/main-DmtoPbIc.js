(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const t=document.querySelector("header");document.querySelector("body");const c=document.querySelector(".header__hamburger"),a=document.querySelector(".header__hamburgerList");let n=window.scrollY;c.addEventListener("click",function(){t.classList.toggle("header__hamburgerList-hidden"),c.classList.toggle("header__hamburger-cross")});a.addEventListener("click",function(){t.classList.add("header__hamburgerList-hidden"),c.classList.remove("header__hamburger-cross")});window.onscroll=function(){if(t.classList.contains("header__hamburgerList-hidden")){let s=window.scrollY;n<s?(t.classList.add("header-hidden"),t.classList.remove("header-visible")):(t.classList.add("header-visible"),t.classList.remove("header-hidden")),n=s}};