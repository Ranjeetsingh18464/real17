const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-JbCwfHB9.js","assets/ui-DAU4k1b6.js","assets/vendor-DT0XRDtV.js","assets/PropertyCard-C6pB4PJz.js","assets/userActivityStore-Cgm3UK6s.js","assets/sampleProperties-j9elrmJq.js","assets/firebase-BbxPio3G.js","assets/PropertyListing-BOIitS3w.js","assets/propertyStore-BCGKZW-t.js","assets/PropertyDetail-ddLltKNk.js","assets/Login-n29W6Qkh.js","assets/index-TdgoUJzE.js","assets/Register-CW2W580D.js","assets/BuyerDashboard-DkLxnD33.js","assets/SellerDashboard-kkgrOawI.js","assets/BrokerDashboard-Cz014pXl.js","assets/BuilderDashboard-B45FdI4k.js","assets/Dashboard-CN0mntBt.js","assets/AdminDashboard-CGqzL45N.js","assets/projectStore-dPSda5W_.js","assets/AddProperty-C_us4lny.js","assets/EditProperty-Dy3ShfGr.js","assets/ChatPage-Cp09yKJD.js","assets/SavedProperties-CxRyY86Q.js","assets/Profile-DxC5DLxq.js","assets/Notifications-CTKH5SzA.js","assets/Projects-8f5EX7IM.js","assets/Blog-BfB_AKmK.js","assets/Resources-D_MWD6fL.js","assets/About-5rxxYr9R.js","assets/HomeLoan-B2fDDlPY.js","assets/PropertyValuation-Cs5mgc98.js","assets/jspdf.es.min-jLGf-tPl.js","assets/RentalAgreement-DljKEjCQ.js"])))=>i.map(i=>d[i]);
var ta=Object.defineProperty;var aa=(e,t,a)=>t in e?ta(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var J=(e,t,a)=>aa(e,typeof t!="symbol"?t+"":t,a);import{G as u,j as r,z as X,F as ra}from"./ui-DAU4k1b6.js";import{r as na,d as c,R as ce,L as R,N as xe,b as ia,a as k,B as sa}from"./vendor-DT0XRDtV.js";import{O as be,a as we,C as ke,_ as qe,E as bt,D as Ge,F as oa,h as Ce,r as We,k as ca,a3 as la,w as da,c as ua,v as ha,l as pa,q as fa,s as ma,m as ga,G as va,P as ya,z as xa,j as B,n as Ve,$ as G,S as F,U as re,W as ba,R as wa,Q as ka,Y as Ra,X as Sa,V as Ta,g as Ea,a0 as ja,M as U,A as $e,B as Ca,H as st,a4 as q,x as Ae,Z as Aa,K as Ie,f as fe,o as Pe,d as Ia,t as _e,e as Pa,i as _a,b as Na,N as Ma,a1 as La,p as Ha,L as Oa,y as Da,I as za,J as Ba,T as me}from"./firebase-BbxPio3G.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();var Fe={},ot=na;Fe.createRoot=ot.createRoot,Fe.hydrateRoot=ot.hydrateRoot;var wt=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(wt||{}),Ne={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}};Object.values(wt);var Ye={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.entries(Ye).reduce((e,[t,a])=>(e[a]=t,e),{});var ie="data-rh",Va=e=>Array.isArray(e)?e.join(""):e,$a=(e,t)=>{const a=Object.keys(e);for(let n=0;n<a.length;n+=1)if(t[a[n]]&&t[a[n]].includes(e[a[n]]))return!0;return!1},Me=(e,t)=>Array.isArray(e)?e.reduce((a,n)=>($a(n,t)?a.priority.push(n):a.default.push(n),a),{priority:[],default:[]}):{default:e,priority:[]},Fa=["noscript","script","style"],Ue=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),kt=e=>Object.keys(e).reduce((t,a)=>{const n=typeof e[a]<"u"?`${a}="${e[a]}"`:`${a}`;return t?`${t} ${n}`:n},""),Ua=(e,t,a,n)=>{const i=kt(a),s=Va(t);return i?`<${e} ${ie}="true" ${i}>${Ue(s,n)}</${e}>`:`<${e} ${ie}="true">${Ue(s,n)}</${e}>`},Ka=(e,t,a=!0)=>t.reduce((n,i)=>{const s=i,o=Object.keys(s).filter(g=>!(g==="innerHTML"||g==="cssText")).reduce((g,l)=>{const h=typeof s[l]>"u"?l:`${l}="${Ue(s[l],a)}"`;return g?`${g} ${h}`:h},""),d=s.innerHTML||s.cssText||"",v=Fa.indexOf(e)===-1;return`${n}<${e} ${ie}="true" ${o}${v?"/>":`>${d}</${e}>`}`},""),Rt=(e,t={})=>Object.keys(e).reduce((a,n)=>{const i=Ye[n];return a[i||n]=e[n],a},t),qa=(e,t,a)=>{const n={key:t,[ie]:!0},i=Rt(a,n);return[ce.createElement("title",i,t)]},ve=(e,t)=>t.map((a,n)=>{const i={key:n,[ie]:!0};return Object.keys(a).forEach(s=>{const d=Ye[s]||s;if(d==="innerHTML"||d==="cssText"){const v=a.innerHTML||a.cssText;i.dangerouslySetInnerHTML={__html:v}}else i[d]=a[s]}),ce.createElement(e,i)}),$=(e,t,a=!0)=>{switch(e){case"title":return{toComponent:()=>qa(e,t.title,t.titleAttributes),toString:()=>Ua(e,t.title,t.titleAttributes,a)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Rt(t),toString:()=>kt(t)};default:return{toComponent:()=>ve(e,t),toString:()=>Ka(e,t,a)}}},Ga=({metaTags:e,linkTags:t,scriptTags:a,encode:n})=>{const i=Me(e,Ne.meta),s=Me(t,Ne.link),o=Me(a,Ne.script);return{priorityMethods:{toComponent:()=>[...ve("meta",i.priority),...ve("link",s.priority),...ve("script",o.priority)],toString:()=>`${$("meta",i.priority,n)} ${$("link",s.priority,n)} ${$("script",o.priority,n)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},Wa=e=>{const{baseTag:t,bodyAttributes:a,encode:n=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:d="",titleAttributes:v,prioritizeSeoTags:g}=e;let{linkTags:l,metaTags:h,scriptTags:b}=e,T={toComponent:()=>{},toString:()=>""};return g&&({priorityMethods:T,linkTags:l,metaTags:h,scriptTags:b}=Ga(e)),{priority:T,base:$("base",t,n),bodyAttributes:$("bodyAttributes",a,n),htmlAttributes:$("htmlAttributes",i,n),link:$("link",l,n),meta:$("meta",h,n),noscript:$("noscript",s,n),script:$("script",b,n),style:$("style",o,n),title:$("title",{title:d,titleAttributes:v},n)}},Ya=Wa,ge=[],St=!!(typeof window<"u"&&window.document&&window.document.createElement),Ja=class{constructor(e,t){J(this,"instances",[]);J(this,"canUseDOM",St);J(this,"context");J(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?ge:this.instances,add:e=>{(this.canUseDOM?ge:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?ge:this.instances).indexOf(e);(this.canUseDOM?ge:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Ya({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Xa={},Qa=ce.createContext(Xa),ee,Za=(ee=class extends c.Component{constructor(a){super(a);J(this,"helmetData");this.helmetData=new Ja(this.props.context||{},ee.canUseDOM)}render(){return ce.createElement(Qa.Provider,{value:this.helmetData.value},this.props.children)}},J(ee,"canUseDOM",St),ee);const er="modulepreload",tr=function(e){return"/"+e},ct={},S=function(t,a,n){let i=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(a.map(v=>{if(v=tr(v),v in ct)return;ct[v]=!0;const g=v.endsWith(".css"),l=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${l}`))return;const h=document.createElement("link");if(h.rel=g?"stylesheet":er,g||(h.as="script"),h.crossOrigin="",h.href=v,d&&h.setAttribute("nonce",d),document.head.appendChild(h),g)return new Promise((b,T)=>{h.addEventListener("load",b),h.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${v}`)))})}))}function s(o){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=o,window.dispatchEvent(d),!d.defaultPrevented)throw o}return i.then(o=>{for(const d of o||[])d.status==="rejected"&&s(d.reason);return t().catch(s)})};function ar(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(e)}function Li(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"},child:[]}]})(e)}function rr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"},child:[]}]})(e)}function Hi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"},child:[]}]})(e)}function Oi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"},child:[]}]})(e)}function Di(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},child:[]}]})(e)}function zi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]}]})(e)}function Bi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",clipRule:"evenodd"},child:[]}]})(e)}function Vi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"},child:[]}]})(e)}function nr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"},child:[]}]})(e)}function $i(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(e)}function Fi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"},child:[]}]})(e)}function Ui(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"},child:[]}]})(e)}function Ki(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"},child:[]}]})(e)}function qi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"},child:[]}]})(e)}function ir(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"},child:[]}]})(e)}function sr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},child:[]}]})(e)}function Gi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"},child:[]}]})(e)}function Wi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"},child:[]}]})(e)}function or(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},child:[]}]})(e)}function cr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"},child:[]}]})(e)}function lr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"},child:[]},{tag:"path",attr:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"},child:[]}]})(e)}function dr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",clipRule:"evenodd"},child:[]}]})(e)}function Yi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"},child:[]}]})(e)}function ur(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"},child:[]}]})(e)}function Ji(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"},child:[]}]})(e)}function Xi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},child:[]}]})(e)}function Qi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(e)}function Zi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",clipRule:"evenodd"},child:[]}]})(e)}function es(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"},child:[]}]})(e)}function ts(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(e)}function as(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"},child:[]}]})(e)}function rs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",clipRule:"evenodd"},child:[]}]})(e)}function ns(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"},child:[]},{tag:"path",attr:{d:"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"},child:[]},{tag:"path",attr:{d:"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"},child:[]}]})(e)}function is(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",clipRule:"evenodd"},child:[]}]})(e)}function ss(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",clipRule:"evenodd"},child:[]}]})(e)}function os(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]}]})(e)}function cs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"},child:[]}]})(e)}function ls(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"},child:[]}]})(e)}function ds(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"},child:[]}]})(e)}function us(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"},child:[]}]})(e)}function hs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"},child:[]}]})(e)}function ps(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"},child:[]}]})(e)}function fs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",clipRule:"evenodd"},child:[]}]})(e)}function hr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"},child:[]}]})(e)}function ms(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",clipRule:"evenodd"},child:[]}]})(e)}function gs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"},child:[]}]})(e)}function vs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"},child:[]}]})(e)}const Tt="@firebase/installations",Je="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=1e4,jt=`w:${Je}`,Ct="FIS_v2",pr="https://firebaseinstallations.googleapis.com/v1",fr=60*60*1e3,mr="installations",gr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},te=new bt(mr,gr,vr);function At(e){return e instanceof oa&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It({projectId:e}){return`${pr}/projects/${e}/installations`}function Pt(e){return{token:e.token,requestStatus:2,expiresIn:xr(e.expiresIn),creationTime:Date.now()}}async function _t(e,t){const n=(await t.json()).error;return te.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Nt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function yr(e,{refreshToken:t}){const a=Nt(e);return a.append("Authorization",br(t)),a}async function Mt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function xr(e){return Number(e.replace("s","000"))}function br(e){return`${Ct} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr({appConfig:e,heartbeatServiceProvider:t},{fid:a}){const n=It(e),i=Nt(e),s=t.getImmediate({optional:!0});if(s){const g=await s.getHeartbeatsHeader();g&&i.append("x-firebase-client",g)}const o={fid:a,authVersion:Ct,appId:e.appId,sdkVersion:jt},d={method:"POST",headers:i,body:JSON.stringify(o)},v=await Mt(()=>fetch(n,d));if(v.ok){const g=await v.json();return{fid:g.fid||a,registrationStatus:2,refreshToken:g.refreshToken,authToken:Pt(g.authToken)}}else throw await _t("Create Installation",v)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=/^[cdef][\w-]{21}$/,Ke="";function Sr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const a=Tr(e);return Rr.test(a)?a:Ke}catch{return Ke}}function Tr(e){return kr(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Map;function Ot(e,t){const a=Te(e);Dt(a,t),Er(a,t)}function Dt(e,t){const a=Ht.get(e);if(a)for(const n of a)n(t)}function Er(e,t){const a=jr();a&&a.postMessage({key:e,fid:t}),Cr()}let Z=null;function jr(){return!Z&&"BroadcastChannel"in self&&(Z=new BroadcastChannel("[Firebase] FID Change"),Z.onmessage=e=>{Dt(e.data.key,e.data.fid)}),Z}function Cr(){Ht.size===0&&Z&&(Z.close(),Z=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="firebase-installations-database",Ir=1,ae="firebase-installations-store";let Le=null;function Xe(){return Le||(Le=Ge(Ar,Ir,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ae)}}})),Le}async function Re(e,t){const a=Te(e),i=(await Xe()).transaction(ae,"readwrite"),s=i.objectStore(ae),o=await s.get(a);return await s.put(t,a),await i.done,(!o||o.fid!==t.fid)&&Ot(e,t.fid),t}async function zt(e){const t=Te(e),n=(await Xe()).transaction(ae,"readwrite");await n.objectStore(ae).delete(t),await n.done}async function Ee(e,t){const a=Te(e),i=(await Xe()).transaction(ae,"readwrite"),s=i.objectStore(ae),o=await s.get(a),d=t(o);return d===void 0?await s.delete(a):await s.put(d,a),await i.done,d&&(!o||o.fid!==d.fid)&&Ot(e,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e){let t;const a=await Ee(e.appConfig,n=>{const i=Pr(n),s=_r(e,i);return t=s.registrationPromise,s.installationEntry});return a.fid===Ke?{installationEntry:await t}:{installationEntry:a,registrationPromise:t}}function Pr(e){const t=e||{fid:Sr(),registrationStatus:0};return Bt(t)}function _r(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(te.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const a={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=Nr(e,a);return{installationEntry:a,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Mr(e)}:{installationEntry:t}}async function Nr(e,t){try{const a=await wr(e,t);return Re(e.appConfig,a)}catch(a){throw At(a)&&a.customData.serverCode===409?await zt(e.appConfig):await Re(e.appConfig,{fid:t.fid,registrationStatus:0}),a}}async function Mr(e){let t=await lt(e.appConfig);for(;t.registrationStatus===1;)await Lt(100),t=await lt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:a,registrationPromise:n}=await Qe(e);return n||a}return t}function lt(e){return Ee(e,t=>{if(!t)throw te.create("installation-not-found");return Bt(t)})}function Bt(e){return Lr(e)?{fid:e.fid,registrationStatus:0}:e}function Lr(e){return e.registrationStatus===1&&e.registrationTime+Et<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr({appConfig:e,heartbeatServiceProvider:t},a){const n=Or(e,a),i=yr(e,a),s=t.getImmediate({optional:!0});if(s){const g=await s.getHeartbeatsHeader();g&&i.append("x-firebase-client",g)}const o={installation:{sdkVersion:jt,appId:e.appId}},d={method:"POST",headers:i,body:JSON.stringify(o)},v=await Mt(()=>fetch(n,d));if(v.ok){const g=await v.json();return Pt(g)}else throw await _t("Generate Auth Token",v)}function Or(e,{fid:t}){return`${It(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t=!1){let a;const n=await Ee(e.appConfig,s=>{if(!Vt(s))throw te.create("not-registered");const o=s.authToken;if(!t&&Br(o))return s;if(o.requestStatus===1)return a=Dr(e,t),s;{if(!navigator.onLine)throw te.create("app-offline");const d=$r(s);return a=zr(e,d),d}});return a?await a:n.authToken}async function Dr(e,t){let a=await dt(e.appConfig);for(;a.authToken.requestStatus===1;)await Lt(100),a=await dt(e.appConfig);const n=a.authToken;return n.requestStatus===0?Ze(e,t):n}function dt(e){return Ee(e,t=>{if(!Vt(t))throw te.create("not-registered");const a=t.authToken;return Fr(a)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function zr(e,t){try{const a=await Hr(e,t),n=Object.assign(Object.assign({},t),{authToken:a});return await Re(e.appConfig,n),a}catch(a){if(At(a)&&(a.customData.serverCode===401||a.customData.serverCode===404))await zt(e.appConfig);else{const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Re(e.appConfig,n)}throw a}}function Vt(e){return e!==void 0&&e.registrationStatus===2}function Br(e){return e.requestStatus===2&&!Vr(e)}function Vr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+fr}function $r(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Fr(e){return e.requestStatus===1&&e.requestTime+Et<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(e){const t=e,{installationEntry:a,registrationPromise:n}=await Qe(t);return n?n.catch(console.error):Ze(t).catch(console.error),a.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(e,t=!1){const a=e;return await qr(a),(await Ze(a,t)).token}async function qr(e){const{registrationPromise:t}=await Qe(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e){if(!e||!e.options)throw He("App Configuration");if(!e.name)throw He("App Name");const t=["projectId","apiKey","appId"];for(const a of t)if(!e.options[a])throw He(a);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function He(e){return te.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="installations",Wr="installations-internal",Yr=e=>{const t=e.getProvider("app").getImmediate(),a=Gr(t),n=qe(t,"heartbeat");return{app:t,appConfig:a,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},Jr=e=>{const t=e.getProvider("app").getImmediate(),a=qe(t,$t).getImmediate();return{getId:()=>Ur(a),getToken:i=>Kr(a,i)}};function Xr(){we(new ke($t,Yr,"PUBLIC")),we(new ke(Wr,Jr,"PRIVATE"))}Xr();be(Tt,Je);be(Tt,Je,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="/firebase-messaging-sw.js",Zr="/firebase-cloud-messaging-push-scope",Ft="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",en="https://fcmregistrations.googleapis.com/v1",Ut="google.c.a.c_id",tn="google.c.a.c_l",an="google.c.a.ts",rn="google.c.a.e";var ut;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ut||(ut={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var se;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(se||(se={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function nn(e){const t="=".repeat((4-e.length%4)%4),a=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(a),i=new Uint8Array(n.length);for(let s=0;s<n.length;++s)i[s]=n.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="fcm_token_details_db",sn=5,ht="fcm_token_object_Store";async function on(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Oe))return null;let t=null;return(await Ge(Oe,sn,{upgrade:async(n,i,s,o)=>{var d;if(i<2||!n.objectStoreNames.contains(ht))return;const v=o.objectStore(ht),g=await v.index("fcmSenderId").get(e);if(await v.clear(),!!g){if(i===2){const l=g;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(d=l.createTime)!==null&&d!==void 0?d:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:K(l.vapidKey)}}}else if(i===3){const l=g;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:K(l.auth),p256dh:K(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:K(l.vapidKey)}}}else if(i===4){const l=g;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:K(l.auth),p256dh:K(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:K(l.vapidKey)}}}}}})).close(),await Ce(Oe),await Ce("fcm_vapid_details_db"),await Ce("undefined"),cn(t)?t:null}function cn(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="firebase-messaging-database",dn=1,oe="firebase-messaging-store";let De=null;function Kt(){return De||(De=Ge(ln,dn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(oe)}}})),De}async function un(e){const t=qt(e),n=await(await Kt()).transaction(oe).objectStore(oe).get(t);if(n)return n;{const i=await on(e.appConfig.senderId);if(i)return await et(e,i),i}}async function et(e,t){const a=qt(e),i=(await Kt()).transaction(oe,"readwrite");return await i.objectStore(oe).put(t,a),await i.done,t}function qt({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},N=new bt("messaging","Messaging",hn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e,t){const a=await at(e),n=Gt(t),i={method:"POST",headers:a,body:JSON.stringify(n)};let s;try{s=await(await fetch(tt(e.appConfig),i)).json()}catch(o){throw N.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw N.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw N.create("token-subscribe-no-token");return s.token}async function fn(e,t){const a=await at(e),n=Gt(t.subscriptionOptions),i={method:"PATCH",headers:a,body:JSON.stringify(n)};let s;try{s=await(await fetch(`${tt(e.appConfig)}/${t.token}`,i)).json()}catch(o){throw N.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw N.create("token-update-failed",{errorInfo:o})}if(!s.token)throw N.create("token-update-no-token");return s.token}async function mn(e,t){const n={method:"DELETE",headers:await at(e)};try{const s=await(await fetch(`${tt(e.appConfig)}/${t}`,n)).json();if(s.error){const o=s.error.message;throw N.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw N.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function tt({projectId:e}){return`${en}/projects/${e}/registrations`}async function at({appConfig:e,installations:t}){const a=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${a}`})}function Gt({p256dh:e,auth:t,endpoint:a,vapidKey:n}){const i={web:{endpoint:a,auth:t,p256dh:e}};return n!==Ft&&(i.web.applicationPubKey=n),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=7*24*60*60*1e3;async function vn(e){const t=await xn(e.swRegistration,e.vapidKey),a={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:K(t.getKey("auth")),p256dh:K(t.getKey("p256dh"))},n=await un(e.firebaseDependencies);if(n){if(bn(n.subscriptionOptions,a))return Date.now()>=n.createTime+gn?yn(e,{token:n.token,createTime:Date.now(),subscriptionOptions:a}):n.token;try{await mn(e.firebaseDependencies,n.token)}catch(i){console.warn(i)}return pt(e.firebaseDependencies,a)}else return pt(e.firebaseDependencies,a)}async function yn(e,t){try{const a=await fn(e.firebaseDependencies,t),n=Object.assign(Object.assign({},t),{token:a,createTime:Date.now()});return await et(e.firebaseDependencies,n),a}catch(a){throw a}}async function pt(e,t){const n={token:await pn(e,t),createTime:Date.now(),subscriptionOptions:t};return await et(e,n),n.token}async function xn(e,t){const a=await e.pushManager.getSubscription();return a||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:nn(t)})}function bn(e,t){const a=t.vapidKey===e.vapidKey,n=t.endpoint===e.endpoint,i=t.auth===e.auth,s=t.p256dh===e.p256dh;return a&&n&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return wn(t,e),kn(t,e),Rn(t,e),t}function wn(e,t){if(!t.notification)return;e.notification={};const a=t.notification.title;a&&(e.notification.title=a);const n=t.notification.body;n&&(e.notification.body=n);const i=t.notification.image;i&&(e.notification.image=i);const s=t.notification.icon;s&&(e.notification.icon=s)}function kn(e,t){t.data&&(e.data=t.data)}function Rn(e,t){var a,n,i,s,o;if(!t.fcmOptions&&!(!((a=t.notification)===null||a===void 0)&&a.click_action))return;e.fcmOptions={};const d=(i=(n=t.fcmOptions)===null||n===void 0?void 0:n.link)!==null&&i!==void 0?i:(s=t.notification)===null||s===void 0?void 0:s.click_action;d&&(e.fcmOptions.link=d);const v=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;v&&(e.fcmOptions.analyticsLabel=v)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){return typeof e=="object"&&!!e&&Ut in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e){if(!e||!e.options)throw ze("App Configuration Object");if(!e.name)throw ze("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:a}=e;for(const n of t)if(!a[n])throw ze(n);return{appName:e.name,projectId:a.projectId,apiKey:a.apiKey,appId:a.appId,senderId:a.messagingSenderId}}function ze(e){return N.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,a,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Tn(t);this.firebaseDependencies={app:t,appConfig:i,installations:a,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(e){try{e.swRegistration=await navigator.serviceWorker.register(Qr,{scope:Zr}),e.swRegistration.update().catch(()=>{})}catch(t){throw N.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t){if(!t&&!e.swRegistration&&await jn(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw N.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Ft)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t){if(!navigator)throw N.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw N.create("permission-blocked");return await An(e,t==null?void 0:t.vapidKey),await Cn(e,t==null?void 0:t.serviceWorkerRegistration),vn(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t,a){const n=Pn(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:a[Ut],message_name:a[tn],message_time:a[an],message_device_time:Math.floor(Date.now()/1e3)})}function Pn(e){switch(e){case se.NOTIFICATION_CLICKED:return"notification_open";case se.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t){const a=t.data;if(!a.isFirebaseMessaging)return;e.onMessageHandler&&a.messageType===se.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(ft(a)):e.onMessageHandler.next(ft(a)));const n=a.data;Sn(n)&&n[rn]==="1"&&await In(e,a.messageType,n)}const mt="@firebase/messaging",gt="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=e=>{const t=new En(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",a=>_n(t,a)),t},Mn=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:n=>Wt(t,n)}};function Ln(){we(new ke("messaging",Nn,"PUBLIC")),we(new ke("messaging-internal",Mn,"PRIVATE")),be(mt,gt),be(mt,gt,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(){try{await la()}catch{return!1}return typeof window<"u"&&da()&&ua()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e,t){if(!navigator)throw N.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e=ca()){return Hn().then(t=>{if(!t)throw N.create("unsupported-browser")},t=>{throw N.create("indexed-db-unsupported")}),qe(We(e),"messaging").getImmediate()}async function zn(e,t){return e=We(e),Wt(e,t)}function Bn(e,t){return e=We(e),On(e,t)}Ln();const Vn={apiKey:"AIzaSyClgZMRUtPywHinq9t37Bm8641jEzOox2A",authDomain:"realstate-339cf.firebaseapp.com",projectId:"realstate-339cf",storageBucket:"realstate-339cf.firebasestorage.app",messagingSenderId:"432127506832",appId:"1:432127506832:web:df10e3227f644c0cf71b15",measurementId:"G-F1H6P35W4W",databaseURL:"https://realstate-339cf-default-rtdb.firebaseio.com"},le=ha(Vn),O=pa(le),A=fa(le),$n=ma(le),z=ga(le);let ye=null;try{ye=Dn(le)}catch(e){console.warn("Firebase Messaging not available:",e.message)}const vt=new va;new ya(O);const Q={BUYER:"buyer",SELLER:"seller",BROKER:"broker",BUILDER:"builder",ADMIN:"super_admin"},ys={FLAT:"Flat",VILLA:"Villa",PLOT:"Plot",COMMERCIAL:"Commercial",OFFICE:"Office",SHOP:"Shop",PG:"PG",RENT:"Rent",HOSTEL:"Hostel",AGRICULTURE:"Agriculture",PAGRI:"Pagri"},xs={FURNISHED:"Fully Furnished",SEMI:"Semi Furnished",UNFURNISHED:"Unfurnished"},bs=["Swimming Pool","Gym","Park","Club House","Security","Power Backup","Lift","Rain Water Harvesting","Jogging Track","Children Play Area","Community Hall","Indoor Games","Tennis Court","Badminton Court","Yoga Center","Spa","Sauna","Jacuzzi","CCTV","Intercom","Visitor Parking","24x7 Water","Gas Pipeline","Vaastu Compliant"],ws=["East","West","North","South","North-East","North-West","South-East","South-West"],ks=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"],Fn=[{state:"Maharashtra",cities:["Mumbai","Pune","Nagpur","Thane","Navi Mumbai","Aurangabad","Nashik","Solapur","Kolhapur","Amravati"]},{state:"Delhi NCR",cities:["Delhi","Noida","Gurgaon","Faridabad","Ghaziabad"]},{state:"Karnataka",cities:["Bangalore","Mysore","Hubli","Mangalore","Belgaum"]},{state:"Telangana",cities:["Hyderabad","Warangal","Karimnagar"]},{state:"Tamil Nadu",cities:["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem"]},{state:"West Bengal",cities:["Kolkata","Howrah","Durgapur","Asansol","Siliguri"]},{state:"Gujarat",cities:["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar"]},{state:"Rajasthan",cities:["Jaipur","Jodhpur","Udaipur","Kota","Bikaner","Ajmer"]},{state:"Uttar Pradesh",cities:["Lucknow","Agra","Varanasi","Kanpur","Prayagraj","Meerut","Bareilly"]},{state:"Punjab",cities:["Chandigarh","Ludhiana","Amritsar","Jalandhar","Patiala"]},{state:"Madhya Pradesh",cities:["Indore","Bhopal","Gwalior","Jabalpur","Ujjain"]},{state:"Bihar",cities:["Patna","Gaya","Bhagalpur","Muzaffarpur"]},{state:"Odisha",cities:["Bhubaneswar","Cuttack","Rourkela"]},{state:"Chhattisgarh",cities:["Raipur","Bilaspur","Korba"]},{state:"Jharkhand",cities:["Ranchi","Jamshedpur","Dhanbad"]},{state:"Kerala",cities:["Kochi","Thiruvananthapuram","Kozhikode","Thrissur"]},{state:"Haryana",cities:["Panchkula","Ambala","Karnal","Hisar"]},{state:"Uttarakhand",cities:["Dehradun","Haridwar","Rishikesh","Haldwani"]}],Rs=Fn.flatMap(e=>e.cities),Ss=["1 RK","1 BHK","2 BHK","3 BHK","4 BHK","5+ BHK"],I={USERS:"users",PROPERTIES:"properties",CHATS:"chats",MESSAGES:"messages",VISITS:"visits",REVIEWS:"reviews",SUBSCRIPTIONS:"subscriptions",TRANSACTIONS:"transactions",NOTIFICATIONS:"notifications",BANNERS:"banners",BLOG:"blog",LEADS:"leads",REPORTS:"reports",SAVED_PROPERTIES:"saved_properties"},ne="₹",Yt=c.createContext();function Un({children:e}){const[t,a]=c.useState(null),[n,i]=c.useState(null),[s,o]=c.useState(!0);c.useEffect(()=>{const m=xa(O,async p=>{a(p),p?await d(p.uid):i(null),o(!1)});return()=>m()},[]);const d=async m=>{var p,w,H,_,ue;try{const x=B(A,I.USERS,m),f=await Ve(x);if(f.exists()){const y=f.data(),E=((p=O.currentUser)==null?void 0:p.email)||"";(E==="admin@rstate.in"||E==="punjabfoodsrte@gmail.com")&&y.role!==Q.ADMIN&&(await G(x,{role:Q.ADMIN}),y.role=Q.ADMIN),i({id:m,...y})}else{const y=((w=O.currentUser)==null?void 0:w.email)||"",E=y==="admin@rstate.in"||y==="punjabfoodsrte@gmail.com",M={uid:m,email:y,displayName:((H=O.currentUser)==null?void 0:H.displayName)||"",phone:((_=O.currentUser)==null?void 0:_.phoneNumber)||"",photoURL:((ue=O.currentUser)==null?void 0:ue.photoURL)||"",role:E?Q.ADMIN:Q.BUYER,createdAt:F(),lastLogin:F(),isVerified:!1,isActive:!0,subscription:"basic",preferences:{},savedProperties:[]};await re(x,M),i({id:m,...M})}}catch(x){console.error("Error fetching profile:",x)}},L={user:t,userProfile:n,loading:s,register:async(m,p,w,H=Q.BUYER)=>{const _=await Ea(O,m,p);return await ja(_.user,{displayName:w}),await re(B(A,I.USERS,_.user.uid),{uid:_.user.uid,email:m,displayName:w,phone:"",photoURL:"",role:H,createdAt:F(),lastLogin:F(),isVerified:!1,isActive:!0,subscription:"basic",preferences:{}}),i({id:_.user.uid,email:m,displayName:w,phone:"",photoURL:"",role:H,isVerified:!1,isActive:!0,subscription:"basic",preferences:{}}),_.user},login:async(m,p)=>{const w=await Ta(O,m,p);return await d(w.user.uid),w.user},loginWithGoogle:async(m=Q.BUYER)=>{vt.setCustomParameters({prompt:"select_account"});const p=await Sa(O,vt);return(await Ve(B(A,I.USERS,p.user.uid))).exists()?await re(B(A,I.USERS,p.user.uid),{lastLogin:F()},{merge:!0}):await re(B(A,I.USERS,p.user.uid),{uid:p.user.uid,email:p.user.email,displayName:p.user.displayName,phone:p.user.phoneNumber||"",photoURL:p.user.photoURL||"",role:m,createdAt:F(),lastLogin:F(),isVerified:!0,isActive:!0,subscription:"basic",preferences:{}}),await d(p.user.uid),p.user},logout:async()=>{await Ra(O),a(null),i(null)},resetPassword:async m=>{await ka(O,m)},setupRecaptcha:m=>(window.recaptchaVerifier=new wa(O,m,{size:"invisible",callback:()=>{}}),window.recaptchaVerifier),sendOTP:async(m,p)=>await ba(O,m,p),verifyOTP:async(m,p)=>(await m.confirm(p)).user,updateUserRole:async(m,p)=>{await re(B(A,I.USERS,m),{role:p},{merge:!0}),i(w=>({...w,role:p}))},updateUserProfile:async m=>{await re(B(A,I.USERS,t.uid),m,{merge:!0}),i(p=>({...p,...m}))},fetchUserProfile:d};return r.jsx(Yt.Provider,{value:L,children:e})}const de=()=>{const e=c.useContext(Yt);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},Jt=c.createContext();function Kn({children:e}){const[t,a]=c.useState(()=>{const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});c.useEffect(()=>{const i=document.documentElement;t?(i.classList.add("dark"),localStorage.setItem("theme","dark")):(i.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]);const n=()=>a(i=>!i);return r.jsx(Jt.Provider,{value:{darkMode:t,toggleTheme:n},children:e})}const qn=()=>{const e=c.useContext(Jt);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e},Xt=c.createContext();function Gn({children:e}){const{user:t}=de(),[a,n]=c.useState([]),[i,s]=c.useState(0),[o,d]=c.useState(null);c.useEffect(()=>{if(!(!t||!z))try{const l=U(z,`notifications/${t.uid}`),h=$e(l,b=>{const T={id:b.key,...b.val()};n(P=>[T,...P]),T.read||s(P=>P+1)});return()=>h()}catch(l){console.warn("Notification listener failed:",l.message)}},[t]),c.useEffect(()=>{if(!(!t||!z))try{const l=U(z,`notifications/${t.uid}`),h=Ca(l,b=>{const T={id:b.key,...b.val()};n(P=>P.map(V=>V.id===T.id?T:V))});return()=>h()}catch(l){console.warn("Notification change listener failed:",l.message)}},[t]),c.useEffect(()=>{if(!t||!ye)return;(async()=>{try{if(await Notification.requestPermission()!=="granted")return;try{const b=await zn(ye,{vapidKey:""});d(b)}catch{console.warn("Firebase messaging unavailable (no service worker)")}}catch{console.warn("Notification permission denied")}})();try{const h=Bn(ye,b=>{n(T=>{var P,V;return[{id:Date.now(),title:(P=b.notification)==null?void 0:P.title,message:(V=b.notification)==null?void 0:V.body,timestamp:Date.now(),read:!1},...T]})});return()=>h()}catch{console.warn("Firebase onMessage not available")}},[t]);const v=async l=>{try{const{ref:h,update:b}=await S(async()=>{const{ref:T,update:P}=await import("./firebase-BbxPio3G.js").then(V=>V.u);return{ref:T,update:P}},[]);await b(U(z,`notifications/${t.uid}/${l}`),{read:!0}),s(T=>Math.max(0,T-1))}catch(h){console.warn("Failed to mark notification:",h.message)}},g=()=>{n([]),s(0)};return r.jsx(Xt.Provider,{value:{notifications:a,unreadCount:i,fcmToken:o,markAsRead:v,clearNotifications:g},children:e})}const Wn=()=>{const e=c.useContext(Xt);if(!e)throw new Error("useNotifications must be used within NotificationProvider");return e},Ts=e=>e?e>=1e7?`${ne}${(e/1e7).toFixed(2)} Cr`:e>=1e5?`${ne}${(e/1e5).toFixed(2)} L`:e>=1e3?`${ne}${(e/1e3).toFixed(1)}K`:`${ne}${e.toLocaleString("en-IN")}`:`${ne}0`,Es=e=>`${e.toLocaleString("en-IN")} sq.ft`,Yn=e=>e?(e.toDate?e.toDate():new Date(e)).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"",js=e=>{if(!e)return"";const t=e.toDate?e.toDate():new Date(e),n=new Date-t,i=Math.floor(n/6e4),s=Math.floor(n/36e5),o=Math.floor(n/864e5);return i<1?"Just now":i<60?`${i} min ago`:s<24?`${s} hour${s>1?"s":""} ago`:o<7?`${o} day${o>1?"s":""} ago`:Yn(e)},Cs=e=>({Flat:"🏢",Villa:"🏡",Plot:"🗺️",Commercial:"🏬",Office:"🏢",Shop:"🏪",PG:"🏠",Rent:"🔑",Hostel:"🏨"})[e]||"🏠",As=(e,t,a)=>{const n=t/1200,i=a*12,s=e*n*Math.pow(1+n,i)/(Math.pow(1+n,i)-1);return Math.round(s)},Jn=e=>e?e.split(" ").map(t=>t[0]).join("").toUpperCase().slice(0,2):"U";function Xn(){const[e,t]=c.useState(!1),[a,n]=c.useState(!1),{user:i,userProfile:s,logout:o}=de(),{darkMode:d,toggleTheme:v}=qn(),{unreadCount:g}=Wn(),l=c.useRef();return c.useEffect(()=>{const h=b=>{l.current&&!l.current.contains(b.target)&&n(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]),r.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-dark-100 dark:border-dark-800",children:[r.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:r.jsxs("div",{className:"flex items-center justify-between h-16",children:[r.jsxs(R,{to:"/home",className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center",children:r.jsx("span",{className:"text-white font-bold text-sm",children:"R"})}),r.jsx("span",{className:"text-xl font-bold font-heading gradient-text",children:"Rstate"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[i&&r.jsxs(R,{to:`/dashboard/${(s==null?void 0:s.role)==="super_admin"?"admin":s==null?void 0:s.role}`,className:"hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors",children:[r.jsx(rr,{className:"w-4 h-4"})," Dashboard"]}),i&&["seller","broker","builder","super_admin"].includes(s==null?void 0:s.role)&&r.jsxs(R,{to:"/add-property",className:"hidden md:flex btn-primary text-sm px-4 py-2 items-center gap-1.5",children:[r.jsx(ir,{className:"w-4 h-4"})," Post Property"]}),r.jsx("button",{onClick:v,className:"p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors",children:d?r.jsx(nr,{className:"w-5 h-5"}):r.jsx(or,{className:"w-5 h-5"})}),i?r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsxs(R,{to:"/notifications",className:"relative p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors",children:[r.jsx(hr,{className:"w-5 h-5"}),g>0&&r.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center",children:g>9?"9+":g})]}),r.jsxs("div",{className:"relative",ref:l,children:[r.jsx("button",{onClick:()=>n(!a),className:"flex items-center gap-2 p-1.5 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors",children:s!=null&&s.photoURL?r.jsx("img",{src:s.photoURL,alt:"",className:"w-8 h-8 rounded-full object-cover"}):r.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium",children:Jn(s==null?void 0:s.displayName)})}),a&&r.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-white dark:bg-dark-800 rounded-xl shadow-xl border border-dark-100 dark:border-dark-700 z-20 py-2",children:[r.jsxs("div",{className:"px-4 py-3 border-b border-dark-100 dark:border-dark-700",children:[r.jsx("p",{className:"font-semibold text-sm",children:(s==null?void 0:s.displayName)||"User"}),r.jsx("p",{className:"text-xs text-dark-500",children:i.email}),r.jsx("span",{className:"inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 capitalize",children:s==null?void 0:s.role})]}),r.jsx(R,{to:`/dashboard/${(s==null?void 0:s.role)==="super_admin"?"admin":s==null?void 0:s.role}`,className:"block px-4 py-2.5 text-sm hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors",onClick:()=>n(!1),children:"Dashboard"}),(s==null?void 0:s.role)==="super_admin"&&r.jsx(R,{to:"/dashboard/admin",className:"block px-4 py-2.5 text-sm text-primary-600 font-semibold hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors",onClick:()=>n(!1),children:"⚡ Admin Panel"}),r.jsx(R,{to:"/profile",className:"block px-4 py-2.5 text-sm hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors",onClick:()=>n(!1),children:"My Profile"}),r.jsx(R,{to:"/saved-properties",className:"block px-4 py-2.5 text-sm hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors",onClick:()=>n(!1),children:"Saved Properties"}),r.jsx("hr",{className:"my-1 border-dark-100 dark:border-dark-700"}),r.jsxs("button",{onClick:()=>{o(),n(!1)},className:"w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2",children:[r.jsx(dr,{className:"w-4 h-4"})," Sign Out"]})]})]})]}):r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(R,{to:"/login",className:"btn-secondary text-sm px-4 py-2",children:"Login"}),r.jsx(R,{to:"/register",className:"btn-primary text-sm px-4 py-2",children:"Register"})]}),r.jsx("button",{onClick:()=>t(!e),className:"lg:hidden p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800",children:e?r.jsx(ar,{className:"w-6 h-6"}):r.jsx(cr,{className:"w-6 h-6"})})]})]})}),e&&r.jsxs("div",{className:"lg:hidden border-t border-dark-100 dark:border-dark-800 bg-white dark:bg-dark-900 px-4 pb-3 pt-2 space-y-1",children:[r.jsx(R,{to:"/properties?category=buy",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"Buy"}),r.jsx(R,{to:"/properties?category=rent",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"Rent"}),r.jsx(R,{to:"/properties?type=PG",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"PG"}),r.jsx(R,{to:"/properties?type=Commercial",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"Commercial"}),r.jsx(R,{to:"/projects",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"Projects"}),i&&r.jsx(R,{to:`/dashboard/${(s==null?void 0:s.role)==="super_admin"?"admin":s==null?void 0:s.role}`,onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20",children:"Dashboard"})]})]})}function Qn(e){return u({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function Zn(e){return u({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}function ei(e){return u({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function ti(e){return u({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}let W={socialLinks:[{label:"FB",name:"Facebook",url:"https://facebook.com/rstate",icon:"FaFacebookF"},{label:"TW",name:"Twitter",url:"https://twitter.com/rstate",icon:"FaTwitter"},{label:"IG",name:"Instagram",url:"https://instagram.com/rstate",icon:"FaInstagram"},{label:"LN",name:"LinkedIn",url:"https://linkedin.com/company/rstate",icon:"FaLinkedinIn"}],contactInfo:{address:"SANT ASHRAM, NEAR CHHAYA PUBLIC SCHOOL, GOVINDPURI, MODINAGAR 201201",phone:"8057007105",email:"ranjeetsingh18463@gmail.com"}};const Se=new Set;function yt(){return W}function Is(e){W={...W,socialLinks:e},Se.forEach(t=>t(W))}function Ps(e){W={...W,contactInfo:{...W.contactInfo,...e}},Se.forEach(t=>t(W))}function ai(e){return Se.add(e),()=>Se.delete(e)}const ri={FaFacebookF:ti,FaTwitter:Qn,FaInstagram:ei,FaLinkedinIn:Zn};function ni(){const[e,t]=c.useState(yt().socialLinks),[a,n]=c.useState(yt().contactInfo||{address:"",phone:"",email:""});return c.useEffect(()=>ai(i=>{t(i.socialLinks),n(i.contactInfo)}),[]),r.jsx("footer",{className:"bg-dark-900 dark:bg-dark-950 text-dark-300 border-t border-dark-800",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[r.jsxs("div",{children:[r.jsxs(R,{to:"/",className:"flex items-center gap-2 mb-4",children:[r.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center",children:r.jsx("span",{className:"text-white font-bold text-sm",children:"R"})}),r.jsx("span",{className:"text-xl font-bold text-white",children:"Rstate"})]}),r.jsx("p",{className:"text-sm text-dark-400 mb-4",children:"India's most trusted real estate platform. Find your perfect home with AI-powered search and verified listings."}),r.jsx("div",{className:"flex gap-3",children:e.map(i=>{const s=ri[i.icon];return r.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-600 hover:text-white transition-colors",children:s?r.jsx(s,{}):i.label},i.label)})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-white font-semibold mb-4",children:"Quick Links"}),r.jsx("ul",{className:"space-y-2.5",children:[{name:"Buy Property",path:"/properties?category=buy"},{name:"Rent Property",path:"/properties?category=rent"},{name:"Sell Property",path:"/add-property"},{name:"PG / Hostel",path:"/properties?type=PG"},{name:"Commercial",path:"/properties?type=Commercial"},{name:"New Projects",path:"/projects"}].map(i=>r.jsx("li",{children:r.jsx(R,{to:i.path,className:"text-sm hover:text-primary-400 transition-colors",children:i.name})},i.name))})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-white font-semibold mb-4",children:"Resources"}),r.jsxs("ul",{className:"space-y-2.5",children:[r.jsx("li",{children:r.jsx(R,{to:"/home-loan",className:"text-sm hover:text-primary-400 transition-colors",children:"Home Loan Calculator"})}),r.jsx("li",{children:r.jsx(R,{to:"/property-valuation",className:"text-sm hover:text-primary-400 transition-colors",children:"Property Valuation"})}),r.jsx("li",{children:r.jsx(R,{to:"/rental-agreement",className:"text-sm hover:text-primary-400 transition-colors",children:"Rental Agreement"})}),r.jsx("li",{children:r.jsx(R,{to:"/blog",className:"text-sm hover:text-primary-400 transition-colors",children:"Blog & News"})}),r.jsx("li",{children:r.jsx(R,{to:"/resources",className:"text-sm hover:text-primary-400 transition-colors",children:"Market Trends"})}),r.jsx("li",{children:r.jsx(R,{to:"/resources",className:"text-sm hover:text-primary-400 transition-colors",children:"Real Estate Guide"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-white font-semibold mb-4",children:"Contact"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx(ur,{className:"w-5 h-5 text-primary-400 mt-0.5 shrink-0"}),r.jsx("span",{className:"text-sm",children:(a==null?void 0:a.address)||"N/A"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(sr,{className:"w-5 h-5 text-primary-400 shrink-0"}),r.jsx("span",{className:"text-sm",children:(a==null?void 0:a.phone)||"N/A"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(lr,{className:"w-5 h-5 text-primary-400 shrink-0"}),r.jsx("span",{className:"text-sm",children:(a==null?void 0:a.email)||"N/A"})]})]})]})]}),r.jsxs("div",{className:"mt-10 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4",children:[r.jsx("p",{className:"text-sm text-dark-500",children:"© 2026 Rstate. All rights reserved."}),r.jsxs("div",{className:"flex gap-6 text-sm text-dark-500",children:[r.jsx(R,{to:"/privacy",className:"hover:text-primary-400",children:"Privacy Policy"}),r.jsx(R,{to:"/terms",className:"hover:text-primary-400",children:"Terms of Service"}),r.jsx(R,{to:"/sitemap",className:"hover:text-primary-400",children:"Sitemap"})]})]})]})})}function rt(){return r.jsx("div",{className:"min-h-[60vh] flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"}),r.jsx("p",{className:"text-dark-500",children:"Loading..."})]})})}function D({children:e,allowedRoles:t}){const{user:a,userProfile:n,loading:i}=de();return i?r.jsx(rt,{}):a?t&&n&&!t.includes(n.role)?r.jsx(xe,{to:"/",replace:!0}):e:r.jsx(xe,{to:"/login",replace:!0})}const ii=c.lazy(()=>S(()=>import("./Home-JbCwfHB9.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),si=c.lazy(()=>S(()=>import("./PropertyListing-BOIitS3w.js"),__vite__mapDeps([7,1,2,3,4,8,5,6]))),oi=c.lazy(()=>S(()=>import("./PropertyDetail-ddLltKNk.js"),__vite__mapDeps([9,1,2,3,4,8,5,6]))),Qt=c.lazy(()=>S(()=>import("./Login-n29W6Qkh.js"),__vite__mapDeps([10,1,2,11,6]))),ci=c.lazy(()=>S(()=>import("./Register-CW2W580D.js"),__vite__mapDeps([12,1,2,11,6]))),li=c.lazy(()=>S(()=>import("./BuyerDashboard-DkLxnD33.js"),__vite__mapDeps([13,1,2,8,5,4,6]))),di=c.lazy(()=>S(()=>import("./SellerDashboard-kkgrOawI.js"),__vite__mapDeps([14,1,2,8,5,6]))),ui=c.lazy(()=>S(()=>import("./BrokerDashboard-Cz014pXl.js"),__vite__mapDeps([15,1,2,6]))),hi=c.lazy(()=>S(()=>import("./BuilderDashboard-B45FdI4k.js"),__vite__mapDeps([16,1,2,6]))),pi=c.lazy(()=>S(()=>import("./Dashboard-CN0mntBt.js"),__vite__mapDeps([17,1,2,6]))),fi=c.lazy(()=>S(()=>import("./AdminDashboard-CGqzL45N.js"),__vite__mapDeps([18,1,2,6,19,8,5]))),mi=c.lazy(()=>S(()=>import("./AddProperty-C_us4lny.js"),__vite__mapDeps([20,1,2,8,5,6]))),gi=c.lazy(()=>S(()=>import("./EditProperty-Dy3ShfGr.js"),__vite__mapDeps([21,1,2,8,5,6]))),xt=c.lazy(()=>S(()=>import("./ChatPage-Cp09yKJD.js"),__vite__mapDeps([22,1,2,6]))),vi=c.lazy(()=>S(()=>import("./SavedProperties-CxRyY86Q.js"),__vite__mapDeps([23,1,2,3,4,8,5,6]))),yi=c.lazy(()=>S(()=>import("./Profile-DxC5DLxq.js"),__vite__mapDeps([24,1,2,6]))),xi=c.lazy(()=>S(()=>import("./Notifications-CTKH5SzA.js"),__vite__mapDeps([25,1,2,6]))),bi=c.lazy(()=>S(()=>import("./Projects-8f5EX7IM.js"),__vite__mapDeps([26,1,2,19,6]))),wi=c.lazy(()=>S(()=>import("./Blog-BfB_AKmK.js"),__vite__mapDeps([27,1,2]))),ki=c.lazy(()=>S(()=>import("./Resources-D_MWD6fL.js"),__vite__mapDeps([28,1,2]))),Ri=c.lazy(()=>S(()=>import("./About-5rxxYr9R.js"),__vite__mapDeps([29,1,2]))),Si=c.lazy(()=>S(()=>import("./HomeLoan-B2fDDlPY.js"),__vite__mapDeps([30,1,2,6]))),Ti=c.lazy(()=>S(()=>import("./PropertyValuation-Cs5mgc98.js"),__vite__mapDeps([31,1,2,32,6]))),Ei=c.lazy(()=>S(()=>import("./RentalAgreement-DljKEjCQ.js"),__vite__mapDeps([33,1,2,32,6])));function ji(){const{user:e,loading:t}=de();return t?r.jsx(rt,{}):e?r.jsx(xe,{to:"/home",replace:!0}):r.jsx(Qt,{})}function Ci(){return r.jsxs("div",{className:"min-h-screen flex flex-col",children:[r.jsx(Xn,{}),r.jsx("main",{className:"flex-1 pt-16",children:r.jsx(c.Suspense,{fallback:r.jsx(rt,{}),children:r.jsxs(ia,{children:[r.jsx(k,{path:"/",element:r.jsx(ji,{})}),r.jsx(k,{path:"/home",element:r.jsx(ii,{})}),r.jsx(k,{path:"/properties",element:r.jsx(si,{})}),r.jsx(k,{path:"/property/:id",element:r.jsx(oi,{})}),r.jsx(k,{path:"/projects",element:r.jsx(bi,{})}),r.jsx(k,{path:"/blog",element:r.jsx(wi,{})}),r.jsx(k,{path:"/about",element:r.jsx(Ri,{})}),r.jsx(k,{path:"/resources",element:r.jsx(ki,{})}),r.jsx(k,{path:"/home-loan",element:r.jsx(Si,{})}),r.jsx(k,{path:"/property-valuation",element:r.jsx(Ti,{})}),r.jsx(k,{path:"/rental-agreement",element:r.jsx(Ei,{})}),r.jsx(k,{path:"/login",element:r.jsx(Qt,{})}),r.jsx(k,{path:"/register",element:r.jsx(ci,{})}),r.jsx(k,{path:"/chat",element:r.jsx(D,{children:r.jsx(xt,{})})}),r.jsx(k,{path:"/chat/:chatId",element:r.jsx(D,{children:r.jsx(xt,{})})}),r.jsx(k,{path:"/saved-properties",element:r.jsx(D,{children:r.jsx(vi,{})})}),r.jsx(k,{path:"/profile",element:r.jsx(D,{children:r.jsx(yi,{})})}),r.jsx(k,{path:"/notifications",element:r.jsx(D,{children:r.jsx(xi,{})})}),r.jsx(k,{path:"/add-property",element:r.jsx(D,{children:r.jsx(mi,{})})}),r.jsx(k,{path:"/edit-property/:id",element:r.jsx(D,{children:r.jsx(gi,{})})}),r.jsx(k,{path:"/dashboard",element:r.jsx(D,{children:r.jsx(pi,{})})}),r.jsx(k,{path:"/dashboard/buyer",element:r.jsx(D,{allowedRoles:["buyer"],children:r.jsx(li,{})})}),r.jsx(k,{path:"/dashboard/seller",element:r.jsx(D,{allowedRoles:["seller","broker","builder","super_admin"],children:r.jsx(di,{})})}),r.jsx(k,{path:"/dashboard/broker",element:r.jsx(D,{allowedRoles:["broker","super_admin"],children:r.jsx(ui,{})})}),r.jsx(k,{path:"/dashboard/builder",element:r.jsx(D,{allowedRoles:["builder","super_admin"],children:r.jsx(hi,{})})}),r.jsx(k,{path:"/dashboard/admin",element:r.jsx(D,{allowedRoles:["super_admin"],children:r.jsx(fi,{})})}),r.jsx(k,{path:"*",element:r.jsx(xe,{to:"/",replace:!0})})]})})}),r.jsx(ni,{})]})}class Be extends c.Component{constructor(t){super(t),this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,a){console.error("ErrorBoundary caught:",t,a)}render(){var t;return this.state.hasError?this.props.fallback||r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-dark-50 dark:bg-dark-950 px-4",children:r.jsxs("div",{className:"max-w-md w-full text-center",children:[r.jsx("div",{className:"text-6xl mb-4",children:"⚠️"}),r.jsx("h1",{className:"text-2xl font-bold font-heading mb-2",children:"Something went wrong"}),r.jsx("p",{className:"text-dark-500 mb-6",children:((t=this.state.error)==null?void 0:t.message)||"An unexpected error occurred"}),r.jsx("button",{onClick:()=>{this.setState({hasError:!1,error:null}),window.location.reload()},className:"btn-primary",children:"Reload Page"})]})}):this.props.children}}const Zt=c.createContext();function Ai({children:e}){const[t,a]=c.useState([]),[n,i]=c.useState([]),[s,o]=c.useState(!1),[d,v]=c.useState(0),[g,l]=c.useState(null),[h,b]=c.useState({type:"",category:"",minPrice:"",maxPrice:"",bedrooms:"",furnishing:"",city:"",locality:"",listingType:"",status:"",sortBy:"newest",search:""}),T=12,P=c.useCallback(async(x=!0)=>{o(!0);try{let f=[st("createdAt","desc")];if(h.type&&f.push(q("propertyType","==",h.type)),h.city&&f.push(q("city","==",h.city)),h.furnishing&&f.push(q("furnishing","==",h.furnishing)),h.listingType&&f.push(q("listingType","==",h.listingType)),h.status&&f.push(q("status","==",h.status)),h.bedrooms){const j=parseInt(h.bedrooms);f.push(q("bedrooms","==",j))}h.category&&f.push(q("category","==",h.category)),f.push(Ae(T)),!x&&g&&f.push(Aa(g));const y=Ie(fe(A,I.PROPERTIES),...f),E=await Pe(y),M=E.docs.map(j=>{var Y;return{id:j.id,...j.data(),createdAt:((Y=j.data().createdAt)==null?void 0:Y.toDate())||new Date}});a(x?M:j=>[...j,...M]),l(E.docs[E.docs.length-1]||null),v(E.size)}catch(f){console.error("Error fetching properties:",f),X.error("Failed to load properties")}finally{o(!1)}},[h,g]),V=c.useCallback(async()=>{try{const x=Ie(fe(A,I.PROPERTIES),q("isFeatured","==",!0),Ae(6)),y=(await Pe(x)).docs.map(E=>({id:E.id,...E.data()}));y.length>0&&i(y)}catch{}},[]),ue={properties:t,featuredProperties:n,loading:s,totalCount:d,filters:h,fetchProperties:P,fetchFeaturedProperties:V,fetchPropertyById:async x=>{try{const f=B(A,I.PROPERTIES,x),y=await Ve(f);return y.exists()?(await G(f,{views:_e(1)}),{id:y.id,...y.data()}):null}catch(f){return console.error("Error fetching property:",f),null}},addProperty:async(x,f=[])=>{o(!0);try{const y=await Na(fe(A,I.PROPERTIES),{...x,images:[],videos:[],brochures:[],views:0,leads:0,saves:0,isFeatured:!1,isVerified:!1,isActive:!0,createdAt:F(),updatedAt:F()});return f.length>0&&(async()=>{try{const M=[];for(const j of f){const Y=Ma($n,`properties/${y.id}/${Date.now()}_${j.name}`),he=await La(Y,j),pe=await Ha(he.ref);M.push(pe)}await G(y,{images:M})}catch(M){console.warn("Image upload failed (property saved without images):",M)}})(),X.success("Property listed successfully!"),{id:y.id,...x,images:[]}}catch(y){throw console.error("Error adding property:",y),X.error("Failed to list property"),y}finally{o(!1)}},updateProperty:async(x,f)=>{try{await G(B(A,I.PROPERTIES,x),{...f,updatedAt:F()}),X.success("Property updated successfully!")}catch(y){throw X.error("Failed to update property"),y}},deleteProperty:async x=>{try{await _a(B(A,I.PROPERTIES,x)),a(f=>f.filter(y=>y.id!==x)),X.success("Property deleted")}catch{X.error("Failed to delete property")}},toggleSaveProperty:async(x,f,y)=>{try{const E=B(A,I.USERS,x);if(y){await G(E,{savedProperties:Ia(f)});try{await G(B(A,I.PROPERTIES,f),{saves:_e(-1)})}catch{}}else{await G(E,{savedProperties:Pa(f)});try{await G(B(A,I.PROPERTIES,f),{saves:_e(1)})}catch{}}}catch(E){console.error("Error toggling save:",E)}},searchProperties:async x=>{if(!x.trim()){P(!0);return}o(!0);try{const f=x.toLowerCase(),y=Ie(fe(A,I.PROPERTIES),st("createdAt","desc"),Ae(20)),M=(await Pe(y)).docs.map(j=>({id:j.id,...j.data()})).filter(j=>{var Y,he,pe,nt,it;return((Y=j.title)==null?void 0:Y.toLowerCase().includes(f))||((he=j.city)==null?void 0:he.toLowerCase().includes(f))||((pe=j.locality)==null?void 0:pe.toLowerCase().includes(f))||((nt=j.description)==null?void 0:nt.toLowerCase().includes(f))||((it=j.propertyType)==null?void 0:it.toLowerCase().includes(f))});a(M)}catch(f){console.error("Search error:",f)}finally{o(!1)}},updateFilters:x=>{b(f=>({...f,...x}))},resetFilters:()=>{b({type:"",category:"",minPrice:"",maxPrice:"",bedrooms:"",furnishing:"",city:"",locality:"",listingType:"",status:"",sortBy:"newest",search:""})},setLoading:o};return r.jsx(Zt.Provider,{value:ue,children:e})}const _s=()=>{const e=c.useContext(Zt);if(!e)throw new Error("useProperties must be used within PropertyProvider");return e},ea=c.createContext();function Ii({children:e}){const{user:t,userProfile:a}=de(),[n,i]=c.useState([]),[s,o]=c.useState(null),[d,v]=c.useState([]),[g,l]=c.useState(0),[h,b]=c.useState(!1);c.useEffect(()=>{if(!t||!z){i([]),v([]);return}try{const C=U(z,`userChats/${t.uid}`),L=$e(C,m=>{const p=m.val();p&&i(w=>{const H=w.findIndex(_=>_.id===m.key);if(H>=0){const _=[...w];return _[H]={id:m.key,...p},_}return[{id:m.key,...p},...w]})});return()=>L()}catch(C){console.warn("Chat listener failed:",C.message)}},[t]);const T=async(C,L)=>{if(!t)return null;try{const m=[t.uid,C].sort().join("_"),p=U(z,`chats/${m}`);await me(p,{participants:[t.uid,C],propertyId:L||"",createdAt:Date.now(),lastMessage:"",lastMessageTime:Date.now(),lastSender:t.uid});const w=U(z,`userChats/${t.uid}/${m}`);await me(w,{participantId:C,propertyId:L||"",lastMessage:"",lastMessageTime:Date.now()});const H=U(z,`userChats/${C}/${m}`);return await me(H,{participantId:t.uid,propertyId:L||"",lastMessage:"",lastMessageTime:Date.now()}),m}catch(m){return console.error("Error creating chat:",m),null}},P=async(C,L,m="text")=>{if(!(!t||!C||!L.trim()))try{const p=U(z,`messages/${C}`),w={senderId:t.uid,senderName:(a==null?void 0:a.displayName)||"User",text:L.trim(),type:m,timestamp:Date.now(),read:!1};await Ba(p,w);const H=U(z,`chats/${C}`);await me(H,{lastMessage:L.trim(),lastMessageTime:Date.now(),lastSender:t.uid})}catch(p){console.error("Error sending message:",p)}},V=c.useCallback(C=>{if(!C)return;b(!0);const L=Oa(U(z,`messages/${C}`),za("timestamp"),Da(50));return $e(L,p=>{v(w=>w.findIndex(_=>_.id===p.key)>=0?w:[...w,{id:p.key,...p.val()}]),b(!1)})},[]),je={chats:n,activeChat:s,messages:d,unreadCount:g,loading:h,setActiveChat:o,createChat:T,sendMessage:P,loadMessages:V};return r.jsx(ea.Provider,{value:je,children:e})}const Ns=()=>{const e=c.useContext(ea);if(!e)throw new Error("useChat must be used within ChatProvider");return e};Fe.createRoot(document.getElementById("root")).render(r.jsx(ce.StrictMode,{children:r.jsx(Be,{children:r.jsx(sa,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:r.jsx(Za,{children:r.jsx(Kn,{children:r.jsx(Be,{children:r.jsx(Un,{children:r.jsx(Ai,{children:r.jsx(Be,{children:r.jsx(Ii,{children:r.jsxs(Gn,{children:[r.jsx(Ci,{}),r.jsx(ra,{position:"top-right",toastOptions:{duration:3e3,style:{background:"#1e293b",color:"#f8fafc",borderRadius:"12px"}}})]})})})})})})})})})})}));export{Li as $,Rs as A,Ss as B,Fn as C,Qi as D,Xi as E,ws as F,Ji as G,vs as H,ur as I,Yi as J,lr as K,Wi as L,Gi as M,sr as N,ir as O,qi as P,Ki as Q,Ui as R,Fi as S,$i as T,Vi as U,Bi as V,zi as W,Oi as X,Di as Y,Hi as Z,rr as _,bs as a,ar as a0,ks as a1,rt as a2,ys as a3,Q as a4,S as a5,As as a6,A as a7,Es as a8,Yn as a9,Ts as aa,js as ab,Jn as ac,Cs as ad,yt as ae,$n as af,Ps as ag,Is as ah,de as ai,Ns as aj,Wn as ak,_s as al,I as b,xs as c,ti as d,ei as e,Zn as f,Qn as g,gs as h,ms as i,hr as j,fs as k,ps as l,hs as m,us as n,ds as o,cs as p,ls as q,os as r,ss as s,is as t,ns as u,rs as v,as as w,ts as x,es as y,Zi as z};
