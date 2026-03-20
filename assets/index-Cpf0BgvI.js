var cp=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var m1=cp((S1,ap)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=globalThis,Gi=Eo.ShadowRoot&&(Eo.ShadyCSS===void 0||Eo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ji=Symbol(),su=new WeakMap;let xc=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==ji)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Gi&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=su.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&su.set(e,t))}return t}toString(){return this.cssText}};const lp=r=>new xc(typeof r=="string"?r:r+"",void 0,ji),Ae=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new xc(e,r,ji)},hp=(r,t)=>{if(Gi)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),o=Eo.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,r.appendChild(n)}},uu=Gi?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return lp(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pp,defineProperty:fp,getOwnPropertyDescriptor:dp,getOwnPropertyNames:vp,getOwnPropertySymbols:gp,getPrototypeOf:mp}=Object,vn=globalThis,cu=vn.trustedTypes,yp=cu?cu.emptyScript:"",Da=vn.reactiveElementPolyfillSupport,Dr=(r,t)=>r,Io={toAttribute(r,t){switch(t){case Boolean:r=r?yp:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},qi=(r,t)=>!pp(r,t),lu={attribute:!0,type:String,converter:Io,reflect:!1,useDefault:!1,hasChanged:qi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),vn.litPropertyMetadata??(vn.litPropertyMetadata=new WeakMap);let Zn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=lu){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&fp(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){const{get:o,set:a}=dp(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:o,set(i){const s=o==null?void 0:o.call(this);a==null||a.call(this,i),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??lu}static _$Ei(){if(this.hasOwnProperty(Dr("elementProperties")))return;const t=mp(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Dr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dr("properties"))){const e=this.properties,n=[...vp(e),...gp(e)];for(const o of n)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)e.unshift(uu(o))}else t!==void 0&&e.push(uu(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hp(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var a;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const i=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:Io).toAttribute(e,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){var a,i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),u=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:Io;this._$Em=o;const c=u.fromAttribute(e,s.type);this[o]=c??((i=this._$Ej)==null?void 0:i.get(o))??c,this._$Em=null}}requestUpdate(t,e,n){var o;if(t!==void 0){const a=this.constructor,i=this[t];if(n??(n=a.getPropertyOptions(t)),!((n.hasChanged??qi)(i,e)||n.useDefault&&n.reflect&&i===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(a._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:a},i){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??e??this[t]),a!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,i]of o){const{wrapped:s}=i,u=this[a];s!==!0||this._$AL.has(a)||u===void 0||this.C(a,void 0,i,u)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};Zn.elementStyles=[],Zn.shadowRootOptions={mode:"open"},Zn[Dr("elementProperties")]=new Map,Zn[Dr("finalized")]=new Map,Da==null||Da({ReactiveElement:Zn}),(vn.reactiveElementVersions??(vn.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=globalThis,So=Tr.trustedTypes,hu=So?So.createPolicy("lit-html",{createHTML:r=>r}):void 0,wc="$lit$",hn=`lit$${Math.random().toFixed(9).slice(2)}$`,_c="?"+hn,bp=`<${_c}>`,On=document,Mr=()=>On.createComment(""),Br=r=>r===null||typeof r!="object"&&typeof r!="function",Ki=Array.isArray,xp=r=>Ki(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ta=`[ 	
\f\r]`,kr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pu=/-->/g,fu=/>/g,kn=RegExp(`>|${Ta}(?:([^\\s"'>=/]+)(${Ta}*=${Ta}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),du=/'/g,vu=/"/g,Cc=/^(?:script|style|textarea|title)$/i,wp=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),me=wp(1),fr=Symbol.for("lit-noChange"),He=Symbol.for("lit-nothing"),gu=new WeakMap,Dn=On.createTreeWalker(On,129);function Ec(r,t){if(!Ki(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return hu!==void 0?hu.createHTML(t):t}const _p=(r,t)=>{const e=r.length-1,n=[];let o,a=t===2?"<svg>":t===3?"<math>":"",i=kr;for(let s=0;s<e;s++){const u=r[s];let c,l,h=-1,p=0;for(;p<u.length&&(i.lastIndex=p,l=i.exec(u),l!==null);)p=i.lastIndex,i===kr?l[1]==="!--"?i=pu:l[1]!==void 0?i=fu:l[2]!==void 0?(Cc.test(l[2])&&(o=RegExp("</"+l[2],"g")),i=kn):l[3]!==void 0&&(i=kn):i===kn?l[0]===">"?(i=o??kr,h=-1):l[1]===void 0?h=-2:(h=i.lastIndex-l[2].length,c=l[1],i=l[3]===void 0?kn:l[3]==='"'?vu:du):i===vu||i===du?i=kn:i===pu||i===fu?i=kr:(i=kn,o=void 0);const f=i===kn&&r[s+1].startsWith("/>")?" ":"";a+=i===kr?u+bp:h>=0?(n.push(c),u.slice(0,h)+wc+u.slice(h)+hn+f):u+hn+(h===-2?s:f)}return[Ec(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};let hi=class kc{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let a=0,i=0;const s=t.length-1,u=this.parts,[c,l]=_p(t,e);if(this.el=kc.createElement(c,n),Dn.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Dn.nextNode())!==null&&u.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(wc)){const p=l[i++],f=o.getAttribute(h).split(hn),d=/([.?@])?(.*)/.exec(p);u.push({type:1,index:a,name:d[2],strings:f,ctor:d[1]==="."?Ep:d[1]==="?"?kp:d[1]==="@"?Rp:ra}),o.removeAttribute(h)}else h.startsWith(hn)&&(u.push({type:6,index:a}),o.removeAttribute(h));if(Cc.test(o.tagName)){const h=o.textContent.split(hn),p=h.length-1;if(p>0){o.textContent=So?So.emptyScript:"";for(let f=0;f<p;f++)o.append(h[f],Mr()),Dn.nextNode(),u.push({type:2,index:++a});o.append(h[p],Mr())}}}else if(o.nodeType===8)if(o.data===_c)u.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(hn,h+1))!==-1;)u.push({type:7,index:a}),h+=hn.length-1}a++}}static createElement(t,e){const n=On.createElement("template");return n.innerHTML=t,n}};function dr(r,t,e=r,n){var i,s;if(t===fr)return t;let o=n!==void 0?(i=e._$Co)==null?void 0:i[n]:e._$Cl;const a=Br(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=o:e._$Cl=o),o!==void 0&&(t=dr(r,o._$AS(r,t.values),o,n)),t}let Cp=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??On).importNode(e,!0);Dn.currentNode=o;let a=Dn.nextNode(),i=0,s=0,u=n[0];for(;u!==void 0;){if(i===u.index){let c;u.type===2?c=new Xi(a,a.nextSibling,this,t):u.type===1?c=new u.ctor(a,u.name,u.strings,this,t):u.type===6&&(c=new Ip(a,this,t)),this._$AV.push(c),u=n[++s]}i!==(u==null?void 0:u.index)&&(a=Dn.nextNode(),i++)}return Dn.currentNode=On,o}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Xi=class Rc{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=He,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=dr(this,t,e),Br(t)?t===He||t==null||t===""?(this._$AH!==He&&this._$AR(),this._$AH=He):t!==this._$AH&&t!==fr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xp(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==He&&Br(this._$AH)?this._$AA.nextSibling.data=t:this.T(On.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=hi.createElement(Ec(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(e);else{const i=new Cp(o,this),s=i.u(this.options);i.p(e),this.T(s),this._$AH=i}}_$AC(t){let e=gu.get(t.strings);return e===void 0&&gu.set(t.strings,e=new hi(t)),e}k(t){Ki(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,o=0;for(const a of t)o===e.length?e.push(n=new Rc(this.O(Mr()),this.O(Mr()),this,this.options)):n=e[o],n._$AI(a),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},ra=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,a){this.type=1,this._$AH=He,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=He}_$AI(t,e=this,n,o){const a=this.strings;let i=!1;if(a===void 0)t=dr(this,t,e,0),i=!Br(t)||t!==this._$AH&&t!==fr,i&&(this._$AH=t);else{const s=t;let u,c;for(t=a[0],u=0;u<a.length-1;u++)c=dr(this,s[n+u],e,u),c===fr&&(c=this._$AH[u]),i||(i=!Br(c)||c!==this._$AH[u]),c===He?t=He:t!==He&&(t+=(c??"")+a[u+1]),this._$AH[u]=c}i&&!o&&this.j(t)}j(t){t===He?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ep=class extends ra{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===He?void 0:t}},kp=class extends ra{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==He)}},Rp=class extends ra{constructor(t,e,n,o,a){super(t,e,n,o,a),this.type=5}_$AI(t,e=this){if((t=dr(this,t,e,0)??He)===fr)return;const n=this._$AH,o=t===He&&n!==He||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,a=t!==He&&(n===He||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},Ip=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){dr(this,t)}};const Na=Tr.litHtmlPolyfillSupport;Na==null||Na(hi,Xi),(Tr.litHtmlVersions??(Tr.litHtmlVersions=[])).push("3.3.1");const Sp=(r,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const a=(e==null?void 0:e.renderBefore)??null;n._$litPart$=o=new Xi(t.insertBefore(Mr(),a),a,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn=globalThis;let Qt=class extends Zn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Sp(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return fr}};var bc;Qt._$litElement$=!0,Qt.finalized=!0,(bc=Pn.litElementHydrateSupport)==null||bc.call(Pn,{LitElement:Qt});const Pa=Pn.litElementPolyfillSupport;Pa==null||Pa({LitElement:Qt});(Pn.litElementVersions??(Pn.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ap={attribute:!0,type:String,converter:Io,reflect:!1,hasChanged:qi},Dp=(r=Ap,t,e)=>{const{kind:n,metadata:o}=e;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),n==="accessor"){const{name:i}=e;return{set(s){const u=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,u,r)},init(s){return s!==void 0&&this.C(i,void 0,r,s),s}}}if(n==="setter"){const{name:i}=e;return function(s){const u=this[i];t.call(this,s),this.requestUpdate(i,u,r)}}throw Error("Unsupported decorator location: "+n)};function Yi(r){return(t,e)=>typeof e=="object"?Dp(r,t,e):((n,o,a)=>{const i=o.hasOwnProperty(a);return o.constructor.createProperty(a,n),i?Object.getOwnPropertyDescriptor(o,a):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ic=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(r,t){return(e,n,o)=>{const a=i=>{var s;return((s=i.renderRoot)==null?void 0:s.querySelector(r))??null};return Ic(e,n,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tp;function Np(r){return(t,e)=>Ic(t,e,{get(){return(this.renderRoot??Tp??(Tp=document.createDocumentFragment())).querySelectorAll(r)}})}var Pp=Object.defineProperty,Fp=(r,t,e)=>t in r?Pp(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Fa=(r,t,e)=>(Fp(r,typeof t!="symbol"?t+"":t,e),e),Op=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)},Oa=(r,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return r.has(t)},uo=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},mu=(r,t,e)=>(Op(r,t,"access private method"),e);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Sc(r,t){return Object.is(r,t)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Oe=null,Nr=!1,ko=1;const Ao=Symbol("SIGNAL");function or(r){const t=Oe;return Oe=r,t}function Mp(){return Oe}function Bp(){return Nr}const Ji={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function oa(r){if(Nr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Oe===null)return;Oe.consumerOnSignalRead(r);const t=Oe.nextProducerIndex++;if(vr(Oe),t<Oe.producerNode.length&&Oe.producerNode[t]!==r&&pi(Oe)){const e=Oe.producerNode[t];aa(e,Oe.producerIndexOfThis[t])}Oe.producerNode[t]!==r&&(Oe.producerNode[t]=r,Oe.producerIndexOfThis[t]=pi(Oe)?Tc(r,Oe,t):0),Oe.producerLastReadVersion[t]=r.version}function Lp(){ko++}function Ac(r){if(!(!r.dirty&&r.lastCleanEpoch===ko)){if(!r.producerMustRecompute(r)&&!$p(r)){r.dirty=!1,r.lastCleanEpoch=ko;return}r.producerRecomputeValue(r),r.dirty=!1,r.lastCleanEpoch=ko}}function Dc(r){if(r.liveConsumerNode===void 0)return;const t=Nr;Nr=!0;try{for(const e of r.liveConsumerNode)e.dirty||Up(e)}finally{Nr=t}}function Wp(){return(Oe==null?void 0:Oe.consumerAllowSignalWrites)!==!1}function Up(r){var t;r.dirty=!0,Dc(r),(t=r.consumerMarkedDirty)==null||t.call(r.wrapper??r)}function zp(r){return r&&(r.nextProducerIndex=0),or(r)}function Vp(r,t){if(or(t),!(!r||r.producerNode===void 0||r.producerIndexOfThis===void 0||r.producerLastReadVersion===void 0)){if(pi(r))for(let e=r.nextProducerIndex;e<r.producerNode.length;e++)aa(r.producerNode[e],r.producerIndexOfThis[e]);for(;r.producerNode.length>r.nextProducerIndex;)r.producerNode.pop(),r.producerLastReadVersion.pop(),r.producerIndexOfThis.pop()}}function $p(r){vr(r);for(let t=0;t<r.producerNode.length;t++){const e=r.producerNode[t],n=r.producerLastReadVersion[t];if(n!==e.version||(Ac(e),n!==e.version))return!0}return!1}function Tc(r,t,e){var n;if(Qi(r),vr(r),r.liveConsumerNode.length===0){(n=r.watched)==null||n.call(r.wrapper);for(let o=0;o<r.producerNode.length;o++)r.producerIndexOfThis[o]=Tc(r.producerNode[o],r,o)}return r.liveConsumerIndexOfThis.push(e),r.liveConsumerNode.push(t)-1}function aa(r,t){var e;if(Qi(r),vr(r),typeof ngDevMode<"u"&&ngDevMode&&t>=r.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${r.liveConsumerNode.length} consumers)`);if(r.liveConsumerNode.length===1){(e=r.unwatched)==null||e.call(r.wrapper);for(let o=0;o<r.producerNode.length;o++)aa(r.producerNode[o],r.producerIndexOfThis[o])}const n=r.liveConsumerNode.length-1;if(r.liveConsumerNode[t]=r.liveConsumerNode[n],r.liveConsumerIndexOfThis[t]=r.liveConsumerIndexOfThis[n],r.liveConsumerNode.length--,r.liveConsumerIndexOfThis.length--,t<r.liveConsumerNode.length){const o=r.liveConsumerIndexOfThis[t],a=r.liveConsumerNode[t];vr(a),a.producerIndexOfThis[o]=t}}function pi(r){var t;return r.consumerIsAlwaysLive||(((t=r==null?void 0:r.liveConsumerNode)==null?void 0:t.length)??0)>0}function vr(r){r.producerNode??(r.producerNode=[]),r.producerIndexOfThis??(r.producerIndexOfThis=[]),r.producerLastReadVersion??(r.producerLastReadVersion=[])}function Qi(r){r.liveConsumerNode??(r.liveConsumerNode=[]),r.liveConsumerIndexOfThis??(r.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Nc(r){if(Ac(r),oa(r),r.value===fi)throw r.error;return r.value}function Hp(r){const t=Object.create(Gp);t.computation=r;const e=()=>Nc(t);return e[Ao]=t,e}const Ma=Symbol("UNSET"),Ba=Symbol("COMPUTING"),fi=Symbol("ERRORED"),Gp={...Ji,value:Ma,dirty:!0,error:null,equal:Sc,producerMustRecompute(r){return r.value===Ma||r.value===Ba},producerRecomputeValue(r){if(r.value===Ba)throw new Error("Detected cycle in computations.");const t=r.value;r.value=Ba;const e=zp(r);let n,o=!1;try{n=r.computation.call(r.wrapper),o=t!==Ma&&t!==fi&&r.equal.call(r.wrapper,t,n)}catch(a){n=fi,r.error=a}finally{Vp(r,e)}if(o){r.value=t;return}r.value=n,r.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function jp(){throw new Error}let qp=jp;function Kp(){qp()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Xp(r){const t=Object.create(Qp);t.value=r;const e=()=>(oa(t),t.value);return e[Ao]=t,e}function Yp(){return oa(this),this.value}function Jp(r,t){Wp()||Kp(),r.equal.call(r.wrapper,r.value,t)||(r.value=t,Zp(r))}const Qp={...Ji,equal:Sc,value:void 0};function Zp(r){r.version++,Lp(),Dc(r)}/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=Symbol("node");var gn;(r=>{var t,e,n,o;class a{constructor(u,c={}){uo(this,e),Fa(this,t);const h=Xp(u)[Ao];if(this[qe]=h,h.wrapper=this,c){const p=c.equals;p&&(h.equal=p),h.watched=c[r.subtle.watched],h.unwatched=c[r.subtle.unwatched]}}get(){if(!(0,r.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Yp.call(this[qe])}set(u){if(!(0,r.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Bp())throw new Error("Writes to signals not permitted during Watcher callback");const c=this[qe];Jp(c,u)}}t=qe,e=new WeakSet,r.isState=s=>typeof s=="object"&&Oa(e,s),r.State=a;class i{constructor(u,c){uo(this,o),Fa(this,n);const h=Hp(u)[Ao];if(h.consumerAllowSignalWrites=!0,this[qe]=h,h.wrapper=this,c){const p=c.equals;p&&(h.equal=p),h.watched=c[r.subtle.watched],h.unwatched=c[r.subtle.unwatched]}}get(){if(!(0,r.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Nc(this[qe])}}n=qe,o=new WeakSet,r.isComputed=s=>typeof s=="object"&&Oa(o,s),r.Computed=i,(s=>{var u,c,l,h;function p(b){let y,x=null;try{x=or(null),y=b()}finally{or(x)}return y}s.untrack=p;function f(b){var y;if(!(0,r.isComputed)(b)&&!(0,r.isWatcher)(b))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((y=b[qe].producerNode)==null?void 0:y.map(x=>x.wrapper))??[]}s.introspectSources=f;function d(b){var y;if(!(0,r.isComputed)(b)&&!(0,r.isState)(b))throw new TypeError("Called introspectSinks without a Signal argument");return((y=b[qe].liveConsumerNode)==null?void 0:y.map(x=>x.wrapper))??[]}s.introspectSinks=d;function g(b){if(!(0,r.isComputed)(b)&&!(0,r.isState)(b))throw new TypeError("Called hasSinks without a Signal argument");const y=b[qe].liveConsumerNode;return y?y.length>0:!1}s.hasSinks=g;function v(b){if(!(0,r.isComputed)(b)&&!(0,r.isWatcher)(b))throw new TypeError("Called hasSources without a Computed or Watcher argument");const y=b[qe].producerNode;return y?y.length>0:!1}s.hasSources=v;class m{constructor(y){uo(this,c),uo(this,l),Fa(this,u);let x=Object.create(Ji);x.wrapper=this,x.consumerMarkedDirty=y,x.consumerIsAlwaysLive=!0,x.consumerAllowSignalWrites=!1,x.producerNode=[],this[qe]=x}watch(...y){if(!(0,r.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");mu(this,l,h).call(this,y);const x=this[qe];x.dirty=!1;const _=or(x);for(const S of y)oa(S[qe]);or(_)}unwatch(...y){if(!(0,r.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");mu(this,l,h).call(this,y);const x=this[qe];vr(x);for(let _=x.producerNode.length-1;_>=0;_--)if(y.includes(x.producerNode[_].wrapper)){aa(x.producerNode[_],x.producerIndexOfThis[_]);const S=x.producerNode.length-1;if(x.producerNode[_]=x.producerNode[S],x.producerIndexOfThis[_]=x.producerIndexOfThis[S],x.producerNode.length--,x.producerIndexOfThis.length--,x.nextProducerIndex--,_<x.producerNode.length){const I=x.producerIndexOfThis[_],k=x.producerNode[_];Qi(k),k.liveConsumerIndexOfThis[I]=_}}}getPending(){if(!(0,r.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[qe].producerNode.filter(x=>x.dirty).map(x=>x.wrapper)}}u=qe,c=new WeakSet,l=new WeakSet,h=function(b){for(const y of b)if(!(0,r.isComputed)(y)&&!(0,r.isState)(y))throw new TypeError("Called watch/unwatch without a Computed or State argument")},r.isWatcher=b=>Oa(c,b),s.Watcher=m;function w(){var b;return(b=Mp())==null?void 0:b.wrapper}s.currentComputed=w,s.watched=Symbol("watched"),s.unwatched=Symbol("unwatched")})(r.subtle||(r.subtle={}))})(gn||(gn={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ef=Symbol("SignalWatcherBrand"),tf=new FinalizationRegistry(({watcher:r,signal:t})=>{r.unwatch(t)}),yu=new WeakMap;function nf(r){return r[ef]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),r):class extends r{constructor(){super(...arguments),this._$St=new gn.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new gn.Computed(()=>{this._$St.get(),super.performUpdate()});const t=this._$Su=new gn.subtle.Watcher(function(){const e=yu.get(this);e!==void 0&&(e._$Si===!1&&e.requestUpdate(),this.watch())});yu.set(t,this),tf.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,e,n){this._$So=!0,super.requestUpdate(t,e,n)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(t){this._$Sh.add(t);const e=this._$So;this.requestUpdate(),this._$So=e}m(t){this._$Sh.delete(t)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */gn.State;gn.Computed;const rf=(r,t)=>new gn.State(r,t),Pc=rf({numFaces:0,faces:[]});var of=Object.defineProperty,af=Object.getOwnPropertyDescriptor,ia=(r,t,e,n)=>{for(var o=n>1?void 0:n?af(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&of(t,e,o),o};let gr=class extends nf(Qt){constructor(){super(...arguments),this.numFacesThreshold=1}setNumFacesThreshold(r){this.numFacesThreshold=r,this.requestUpdate()}willUpdate(){var t;const r=Pc.get();(t=this.book)==null||t.setAnimated(r.numFaces>=this.numFacesThreshold)}updateButtonVisibility(){this.prevButton.style.visibility=this.book.getCurrentPage()==0?"hidden":"visible",this.nextButton.style.visibility=this.book.getCurrentPage()==this.book.getNumPages()-1?"hidden":"visible"}firstUpdated(){this.book.setCurrentPage(0),this.updateButtonVisibility()}prevPage(){this.book.setCurrentPage(this.book.getCurrentPage()-1),this.updateButtonVisibility()}nextPage(){this.book.setCurrentPage(this.book.getCurrentPage()+1),this.updateButtonVisibility()}render(){return me`
      <div class="book-viewer">
        <!-- <sample-book class="book"></sample-book> -->
        <!-- <kezaruu-book class="book"></kezaruu-book> -->
        <giant-turnip-book class="book"></giant-turnip-book>
        <button class="prev-button" @click=${()=>this.prevPage()}>Prev</button>
        <button class="next-button" @click=${()=>this.nextPage()}>Next</button>
      </div>
    `}};gr.styles=Ae`
    .book-viewer {
      position: relative;
    }

    button {
      border: 2px solid;
      border-radius: 5px;
      display: block;
      min-height: 48px;
      min-width: 48px;
      position: absolute;
    }

    .prev-button {
      bottom: 16px;
      left: 16px;
    }

    .next-button {
      bottom: 16px;
      right: 16px;
    }
  `;ia([ie(".book")],gr.prototype,"book",2);ia([ie(".prev-button")],gr.prototype,"prevButton",2);ia([ie(".next-button")],gr.prototype,"nextButton",2);gr=ia([Ne("book-viewer")],gr);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Fc=function(r,t){return(Fc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function Rt(r,t){function e(){this.constructor=r}Fc(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function K(r,t,e,n){return new(e||(e=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,[])).next())})}function X(r,t){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(h){l=[6,h],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var sf=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return uf(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function uf(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function O(){return Oc}var Oc=null,Do=new Map,di=new Map;function Mc(r,t){var e=Lc(r,t);return Do.get(e)}function cf(r){return di.get(r)}function bu(r){for(var t=Do.entries(),e=[];;){var n=t.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function Bc(r){var t=r.kernelName,e=r.backendName,n=Lc(t,e);if(Do.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");Do.set(n,r)}function lf(r){var t=r.kernelName;di.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),di.set(t,r)}function Lc(r,t){return t+"_"+r}function vi(r,t,e){return Math.max(r,Math.min(t,e))}function Wc(r){return r%2==0?r:r+1}function hf(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function E(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function xe(r,t,e){e===void 0&&(e=""),E(Ge(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function Cr(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function mr(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||Bt(r)&&!e)for(var n=0;n<r.length;++n)mr(r[n],t,e);else t.push(r);return t}function Y(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function Ge(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Fe(r){return r%1==0}function pf(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function gi(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function ar(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function xu(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=t(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function ff(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var a=r.slice();return a[n]=t/e,a}function Ve(r,t){var e=t.length;return E((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),E(r.every(function(n){return Fe(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function An(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:Ve(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function Lr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function To(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function df(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function vf(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function gf(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function Bt(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Uc(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function mf(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function Zi(r){return typeof r=="string"||r instanceof String}function yf(r){return typeof r=="boolean"}function bf(r){return typeof r=="number"}function Xr(r){return Array.isArray(r)?Xr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":bf(r)?"float32":Zi(r)?"string":yf(r)?"bool":"float32"}function mi(r){return!!(r&&r.constructor&&r.call&&r.apply)}function yi(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function Lt(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function zc(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=mr(r)),e&&df(r,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function wu(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),h=l.reduce(function(p,f){return p*f});for(c=0;c<u;c++)s[c]=n(o+c*h,l,i)}return s}(0,r,t)}function Vc(r,t){for(var e=Yr(r,t),n=0;n<e.length;n++)e[n]=1;return e}function Yr(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function Pt(){return O().platform.now()}function $c(r){r.forEach(function(t){E(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function xf(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",O().platform.encode(r,t)}function No(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",O().platform.decode(r,t)}function _u(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function wf(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}var _f=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Cf)}return r.prototype.profileKernel=function(t,e,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var p=0;p<c.length;p++){var f=c[p];if(isNaN(f)||!isFinite(f))return console.warn("Found "+f+" in the result of '"+h+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),Cf=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,a,i){var s=typeof o=="number"?ar(o+"ms",9):o.error,u=ar(t,25),c=e.rank,l=e.size,h=ar(e.shape.toString(),14),p="";for(var f in a){var d=a[f].shape||e.shape,g=d.length;p+=f+": "+g+"D "+(g>0?d:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+p+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Cu=20,Rr=3,La=7;function Ef(r,t,e,n){var o=Lt(t),a=function(c,l,h,p){var f=Y(l),d=p[p.length-1],g=new Array(d).fill(0),v=l.length,m=h==="complex64"?Sr(c):c;if(v>1)for(var w=0;w<f/d;w++)for(var b=w*d,y=0;y<d;y++)g[y]=Math.max(g[y],Ir(m[b+y],0,h).length);return g}(r,t,e,o),i=t.length,s=function c(l,h,p,f,d,g){g===void 0&&(g=!0);var v=p==="complex64"?2:1,m=h[0],w=h.length;if(w===0)return p==="complex64"?[Ir(Sr(l)[0],0,p)]:p==="bool"?[Hc(l[0])]:[l[0].toString()];if(w===1){if(m>Cu){var b=Rr*v,y=Array.from(l.slice(0,b)),x=Array.from(l.slice((m-Rr)*v,m*v));return p==="complex64"&&(y=Sr(y),x=Sr(x)),["["+y.map(function(B,z){return Ir(B,d[z],p)}).join(", ")+", ..., "+x.map(function(B,z){return Ir(B,d[m-Rr+z],p)}).join(", ")+"]"]}return["["+(p==="complex64"?Sr(l):Array.from(l)).map(function(B,z){return Ir(B,d[z],p)}).join(", ")+"]"]}var _=h.slice(1),S=f.slice(1),I=f[0]*v,k=[];if(m>Cu){for(var R=0;R<Rr;R++){var N=(D=R*I)+I;k.push.apply(k,c(l.slice(D,N),_,p,S,d,!1))}for(k.push("..."),R=m-Rr;R<m;R++)N=(D=R*I)+I,k.push.apply(k,c(l.slice(D,N),_,p,S,d,R===m-1))}else for(R=0;R<m;R++){var D;N=(D=R*I)+I,k.push.apply(k,c(l.slice(D,N),_,p,S,d,R===m-1))}var L=w===2?",":"";for(k[0]="["+k[0]+L,R=1;R<k.length-1;R++)k[R]=" "+k[R]+L;var M=`,
`;for(R=2;R<w;R++)M+=`
`;return k[k.length-1]=" "+k[k.length-1]+"]"+(g?"":M),k}(r,t,e,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function Ir(r,t,e){return ar(Array.isArray(r)?parseFloat(r[0].toFixed(La))+" + "+parseFloat(r[1].toFixed(La))+"j":Zi(r)?"'"+r+"'":e==="bool"?Hc(r):parseFloat(r.toFixed(La)).toString(),t)}function Hc(r){return r===0?"false":"true"}function Sr(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var Wr=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=Y(t),n!=null){var a=n.length;E(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||To(e,this.size),this.strides=Lt(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),E(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(n);this.values[a]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Ft().makeTensor(this.values,this.shape,this.dtype)},r}(),Ft=null,F=null,Gc=null,Re=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Y(t),this.strides=Lt(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,a){return this.throwIfDisposed(),this.reshape([t,e,n,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),F.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,F.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return F.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,wu(this.shape,t)]}})})},r.prototype.arraySync=function(){return wu(this.shape,this.dataSync())},r.prototype.data=function(){return K(this,void 0,void 0,function(){var t,e;return X(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=Ft().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return No(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=Ft().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return No(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,Ft().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Ft().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),F.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),F.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),F.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),F.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),F.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),F.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),F.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),Ef(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),F.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),F.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),F.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),F.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),F.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),F.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),F.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),F.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),F.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),F.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),F.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),F.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,a){return n===void 0&&(n=.001),Gc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,a,o,n)},r.prototype.batchNorm=function(t,e,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),F.batchNorm(this,t,e,n,o,a)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),F.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),F.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),F.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),F.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),F.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),F.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),F.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),F.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),F.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),F.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),F.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),F.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),F.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),F.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),F.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),F.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),F.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),F.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),F.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),F.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),F.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),F.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),F.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),F.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),F.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),F.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),F.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),F.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),F.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),F.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),F.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),F.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),F.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),F.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),F.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),F.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),F.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),F.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),F.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),F.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),F.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),F.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),F.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),F.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),F.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),F.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),F.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),F.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),F.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),F.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),F.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),F.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),F.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),F.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),F.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),F.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),F.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),F.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),F.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),F.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),F.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),F.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),F.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),F.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),F.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),F.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),F.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),F.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),F.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),F.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),F.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),F.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),F.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),F.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),F.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),F.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),F.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),F.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),F.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),F.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),F.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),F.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),F.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),F.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),F.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),F.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),F.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),F.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),F.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),F.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),F.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),F.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),F.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),F.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),F.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),F.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),F.conv1d(this,t,e,n,o,a,i)},r.prototype.conv2d=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),F.conv2d(this,t,e,n,o,a,i)},r.prototype.conv2dTranspose=function(t,e,n,o,a){return this.throwIfDisposed(),F.conv2dTranspose(this,t,e,n,o,a)},r.prototype.depthwiseConv2D=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),F.depthwiseConv2d(this,t,e,n,o,a,i)},r.prototype.separableConv2d=function(t,e,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),F.separableConv2d(this,t,e,n,o,a,i)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),F.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),F.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),F.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,a){return this.throwIfDisposed(),F.pool(this,t,e,n,o,a)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),Ft().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),F.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),F.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),F.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),F.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),F.stridedSlice(this,t,e,n,o,a,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),F.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),F.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),F.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),F.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),F.spectral.irfft(this)},r}();Object.defineProperty(Re,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Eu,bi,xi,wi,_i,yr=function(r){function t(e,n,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=n,i.name=o,i}return Rt(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Ge(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");Ft().disposeTensor(this),this.dataId=e.dataId,Ft().incRef(this,null)},t.prototype.dispose=function(){Ft().disposeVariable(this),this.isDisposedInternal=!0},t}(Re);Object.defineProperty(yr,Symbol.hasInstance,{value:function(r){return r instanceof Re&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Eu||(Eu={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(bi||(bi={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(xi||(xi={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(wi||(wi={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(_i||(_i={}));var kf={float32:wi,int32:bi,bool:xi,complex64:_i};function Xe(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return kf[r][t]}function Wa(r){return Xe(r,"int32")}function Se(r,t){if(r.dtype===t.dtype)return[r,t];var e=Xe(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function Rf(r,t){E(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function jc(r){var t=[];return function e(n,o,a){if(n!=null){if(n instanceof Re)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,t,new Set),t}var Ua,ku=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),If=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ku}return r.prototype.ready=function(){return K(this,void 0,void 0,function(){var t,e,n;return X(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return K(this,void 0,void 0,function(){var e,n,o;return X(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new _f(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;bu(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;bu(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,a=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,a=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,a){return this.runKernelFunc(null,e,null,t,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var p,f=function(w){h&&(l=w.map(function(b){return c.keep(c.clone(b))}))},d=this.state.numBytes,g=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,m=Mc(o,this.backendName);return p=m!=null?function(){var w=c.backend.numDataIds();v=m.kernelFunc({inputs:e,attrs:a,backend:c.backend});var b=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,w,b);var y=b.map(function(_){var S=_.dataId,I=_.shape,k=_.dtype;return c.makeTensorFromDataId(S,I,k)}),x=y.filter(function(_,S){return s[S]});return f((i||[]).slice().concat(x)),y}:function(){var w=c.backend.numDataIds();v=c.tidy(function(){return t(c.backend,f)});var b=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,w,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return p()}):p()}),h&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-g,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(w){return e[w].shape}),outputShapes:u.map(function(w){return w.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=t;n==="string"&&Zi(t[0])&&(a=t.map(function(l){return xf(l)}));var i=o.write(a,e,n),s=new Re(e,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=mf(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var a=new Re(e,n=n||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new yr(t,e,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Uc(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof yr||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return K(this,void 0,void 0,function(){var e,n;return X(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=cf(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var p=n[h],f=Yr(p.size,p.dtype);return i.makeTensor(f,p.shape,p.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=jc(t),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var a=this;if(o===void 0&&(o=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});E(i instanceof Re,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},p={},f=0;f<c.length;f++)h[c[f].id]=!0;for(f=0;f<u.length;f++){var d=(_=u[f]).inputs;for(var g in d){for(var v=d[g],m=!1,w=0;w<c.length;w++)if(h[v.id]){_.outputs.forEach(function(R){return h[R.id]=!0}),m=!0,p[_.id]=!0;break}if(m)break}}var b={};b[l.id]=!0;var y={};for(f=u.length-1;f>=0;f--)for(d=(_=u[f]).inputs,w=0;w<_.outputs.length;w++)if(b[_.outputs[w].id]){for(var g in d)b[d[g].id]=!0,y[_.id]=!0;break}var x=[];for(f=0;f<u.length;f++){var _;if(p[(_=u[f]).id]&&y[_.id]){var S={};for(var g in _.inputs){var I=_.inputs[g];h[I.id]&&(S[g]=I)}var k=Object.assign({},_);k.inputs=S,k.outputs=_.outputs,x.push(k)}}return x}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=Vc(Y(u),"float32"),T.makeTensor(c,u,"float32")),function(p,f,d){for(var g=function(m){var w=f[m],b=[];if(w.outputs.forEach(function(S){var I=p[S.id];I!=null?b.push(I):b.push(null)}),w.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+w.kernelName+".");var y=w.gradient(b),x=function(S){if(!(S in y))throw new Error("Cannot backprop through input "+S+". Available gradients found: "+Object.keys(y)+".");var I=d(function(){return y[S]()});if(I.dtype!=="float32")throw new Error("Error in gradient for op "+w.kernelName+". The gradient of input "+S+" must have 'float32' dtype, but has '"+I.dtype+"'");var k=w.inputs[S];if(!Ge(I.shape,k.shape))throw new Error("Error in gradient for op "+w.kernelName+". The gradient of input '"+S+"' has shape '"+I.shape+"', which does not match the shape of the input '"+k.shape+"'");if(p[k.id]==null)p[k.id]=I;else{var R=p[k.id];p[k.id]=R.add(I),R.dispose()}};for(var _ in w.inputs)x(_)},v=f.length-1;v>=0;v--)g(v)}(l,s,function(p){return a.tidy(p)});var h=e.map(function(p){return l[p.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(p){for(var f=0,d=p.saved;f<d.length;f++)d[f].dispose()}),a.state.activeTape=null),{value:i,grads:h}})},r.prototype.customGrad=function(t){var e=this;return E(mi(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every(function(s){return s instanceof Re}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return E((n=t.apply(void 0,o.concat([u]))).value instanceof Re,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(mi(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(p){return p instanceof Re}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(p,f){h[f]=function(){return p}}),h})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return K(this,void 0,void 0,function(){var e,n;return X(this,function(o){switch(o.label){case 0:return e=Pt(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=Pt()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ku,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),T=function(){var r=function(){if(Ua==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Ua=e}return Ua}();if(r._tfengine==null){var t=new sf(r);r._tfengine=new If(t)}return function(e){Oc=e}(r._tfengine.ENV),Ft=function(){return r._tfengine},r._tfengine}();function qc(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Xt=O();Xt.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Xt.registerFlag("IS_BROWSER",function(){return qc()}),Xt.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Xt.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Xt.registerFlag("PROD",function(){return!1}),Xt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Xt.getBool("DEBUG")}),Xt.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Xt.registerFlag("IS_TEST",function(){return!1});var Ur,ft,pt,In={},za={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Sf(r,t){In[r]=t}function $t(r){r in In||(In[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete In[e]},!1),e===1?n.getContext("webgl",za)||n.getContext("experimental-webgl",za):n.getContext("webgl2",za)}(r));var t=In[r];return t.isContextLost()?(delete In[r],$t(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),In[r])}function sa(r,t){return[t,r]}function Pr(r){var t=Y(r);return gi(Math.ceil(t/4))}function Jr(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function es(r,t){var e,n,o,a,i,s,u,c,l,h=r;return O().getNumber("WEBGL_VERSION")===2?(e=h.R32F,n=h.R16F,o=h.RGBA16F,a=h.RGBA32F,i=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,a=h.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(r,t,e){var n=e();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+Nf(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(Ur||(Ur={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(ft||(ft={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(pt||(pt={}));var Af=596e-10,Df=65504;function Tf(r){return!!(O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||Af<Math.abs(r)&&Math.abs(r)<Df)}function Nf(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function co(r,t,e){return tn(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Pf(r,t,e){var n=tn(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function Ff(r,t,e){var n=tn(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=Of.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,m){return ar((m+1).toString(),c)+v}),h=0,p=0;p<l.length;p++)h=Math.max(l[p].length,h);var f=l.slice(0,s-1),d=l.slice(s-1,s),g=l.slice(s);console.log(f.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+ar(d[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(g.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var Va,$a,Of=/ERROR: [0-9]+:([0-9]+):/g;function Mf(r,t){return tn(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Bf(r,t,e){if(J(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Ha(r,t,e){if(J(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Lf(r,t,e){var n=tn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Wf(r,t,e){var n=tn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Uf(r,t){return tn(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function zf(r,t){var e=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function Vf(r,t){return tn(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Ru(r,t,e,n,o,a,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),J(r,t,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),J(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function $f(r,t,e,n){Kf(r,n),J(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function Hf(r,t,e,n){return tn(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function Gf(r,t,e){return r.getUniformLocation(t,e)}function jf(r,t,e,n,o,a){J(r,t,function(){return $f(r,t,n,a)}),J(r,t,function(){return r.uniform1i(o,a)})}function Ga(r,t,e,n){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function Iu(r,t,e){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function lo(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+qf(r,t))}function qf(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function tn(r,t,e,n){var o=J(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function Kf(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function Po(r,t){return t===void 0&&(t=2),Y(r.slice(0,r.length-t))}function Fo(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function ja(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[Po(r)].concat(Fo(r))),t}function Xf(r,t){var e;t===void 0&&(t=!1);var n=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?Wc(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=An(r);r=o.newShape}var a=Y(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=Po(r),s=2,u=2;return r.length&&(s=(e=Fo(r))[0],u=e[1]),gi(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return gi(a)}function ho(r){return r%2==0}function po(r,t){if(Ge(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||ho(e)&&ho(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&ho(r[0])&&ho(t[0])}function Yf(r){if(Va==null){var t=$t(r);Va=t.getParameter(t.MAX_TEXTURE_SIZE)}return Va}function Jf(r){if($a==null){var t=$t(r);$a=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,$a)}function Qf(r){if(r===0)return 0;var t=$t(r);return xt(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:xt(t,"EXT_disjoint_timer_query")?1:0}function xt(r,t){return r.getExtension(t)!=null}function Su(r){try{if($t(r)!=null)return!0}catch{return!1}return!1}function Zf(r){if(r===0)return!1;var t=$t(r);if(r===1){if(!xt(t,"OES_texture_float"))return!1}else if(!xt(t,"EXT_color_buffer_float"))return!1;return Ci(t)}function ed(r){if(r===0)return!1;var t=$t(r);if(r!==1){if(xt(t,"EXT_color_buffer_float"))return Ci(t);if(xt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=es(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!xt(t,"OES_texture_float")&&!!xt(t,"WEBGL_color_buffer_float")&&Ci(t)}function Ci(r){var t=es(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function td(r){return r===2&&$t(r).fenceSync!=null}var ne=O();function Kc(r){O().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function q(r,t){return T.tidy(r,t)}function st(r){jc(r).forEach(function(t){return t.dispose()})}function nd(r){return T.keep(r)}function Oo(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];O().getBool("IS_TEST")||console.warn.apply(console,r)}function wn(r,t){var e=r;if(Bt(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||Bt(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&O().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!Bt(a))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),E(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function Au(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function C(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof Re)return Au(n,r.dtype,t,e),r;var o=Xr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),Au(n,o,t,e),r==null||!Bt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=wn(r,o);Bt(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?zc(r,o,O().getBool("DEBUG")):mr(r,[],!0);return T.makeTensor(s,i,o)}function Mo(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return C(o,t+"["+a+"]",e)},n)}function Xc(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function rd(r,t,e){for(var n=r.length+t.length,o=[],a=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function Qe(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(a){return r[a]})]}function ut(r,t){return rd(r,t.map(function(e){return 1}),t)}function ht(r,t,e){E(Xc(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function Ht(r,t){if(Xc(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function ts(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function Gt(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function od(r,t){var e=r[0].length;r.forEach(function(o,a){E(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),E(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)E(i===t||o[i]===n[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function br(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function A(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];T.startScope(e);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),T.endScope(s),s}catch(u){throw T.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ne.registerFlag("HAS_WEBGL",function(){return ne.getNumber("WEBGL_VERSION")>0}),ne.registerFlag("WEBGL_VERSION",function(){return Su(2)?2:Su(1)?1:0}),ne.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ne.get("WEBGL_VERSION")===2}),ne.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ne.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ne.registerFlag("WEBGL_PACK",function(){return ne.getBool("HAS_WEBGL")}),ne.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_CLIP",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ne.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_REDUCE",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_CONV_IM2COL",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Yf(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Jf(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=ne.getNumber("WEBGL_VERSION");return r===0?0:Qf(r)}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ne.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),ne.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Zf(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ne.getBool("WEBGL_FORCE_F16_TEXTURES")&&ne.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ne.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return ed(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return td(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ne.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Gc=Kc;var Ke=A({complex_:function(r,t){var e=C(r,"real","complex"),n=C(t,"imag","complex");return xe(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),T.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),bt=A({real_:function(r){var t=C(r,"input","real");return T.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Ot=A({imag_:function(r){var t=C(r,"input","imag");return T.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function Ye(r,t,e){return _n(r,t,wn(r,e),e)}function _n(r,t,e,n){if(n==null&&(n=Xr(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Bt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){$c(t);var o=Y(t),a=Y(e);E(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==Y(t.slice(i));E(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return Bt(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?zc(r,n,O().getBool("DEBUG")):mr(r,[],!0),T.makeTensor(r,t,n)}function G(r,t){if((Bt(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Bt(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return _n(r,[],[],t)}function Me(r,t){Cr(r);var e=wn(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return _n(r,null,e,t)}function mn(r,t,e){if(Cr(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=wn(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return _n(r,t,n,e)}function ns(r,t,e){if(Cr(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=wn(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return _n(r,t,n,e)}function ot(r,t,e){if(Cr(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=wn(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return _n(r,t,n,e)}function ad(r,t,e){if(Cr(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=wn(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return _n(r,t,n,e)}function id(r,t,e){if(Cr(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=wn(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return _n(r,t=t||n,n,e)}function sd(r,t,e,n){return t===void 0&&(t=!0),T.makeVariable(r,t,e,n)}function Er(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Er(r,"float32"),n=Ce(r,"float32");return Ke(e,n)}var o=Vc(Y(r),t);return T.makeTensor(o,r,t)}function Ce(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Ce(r,"float32"),n=Ce(r,"float32");return Ke(e,n)}var o=Yr(Y(r),t);return T.makeTensor(o,r,t)}function Wt(r,t,e){return T.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function ud(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return T.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function Bo(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return Ce([0],n);var o=Yr(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return Me(o,n)}var Yc=A({onesLike_:function(r){var t=C(r,"x","onesLike");if(t.dtype==="complex64"){var e=Yc(bt(t)),n=ge(Ot(t));return Ke(e,n)}return T.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,a){return{$x:function(){return ge(o)}}})}}),ge=A({zerosLike_:function(r){var t=C(r,"x","zerosLike");return T.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return ge(e)}}})}}),Le=A({concat_:function(r,t){t===void 0&&(t=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=Mo(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=Ve(t,e[0].shape)[0];var n=br(e.map(function(s){return s.shape}),t);if(Y(n)===0)return Ye([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});od(o,t);var a=e,i={axis:t};return T.runKernelFunc(function(s){return s.concat(e,t)},a,function(s){var u=o.map(function(c){return c[t]});return rs(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),cd=A({concat1d_:function(r){return Le(r,0)}}),ld=A({concat2d_:function(r,t){return Le(r,t)}}),hd=A({concat3d_:function(r,t){return Le(r,t)}}),pd=A({concat4d_:function(r,t){return Le(r,t)}}),rs=A({split_:function(r,t,e){e===void 0&&(e=0);var n,o=C(r,"x","split");return e=Ve(e,o.shape)[0],typeof t=="number"?(E(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(E(o.shape[e]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),T.runKernelFunc(function(a){return a.split(o,n,e)},{$x:o},function(a){return{$x:function(){return Le(a,e)}}})}});function Un(r,t){return r(t={exports:{}},t.exports),t.exports}var fd=Un(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var p=0;p<h.length;p++){var f=.02519603282416938*(u+=h.charCodeAt(p));f-=u=f>>>0,u=(f*=u)>>>0,u+=4294967296*(f-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.alea=i})(0,r)}),dd=Un(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.xor128=i})(0,r)}),vd=Un(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.xorwow=i})(0,r)}),gd=Un(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.x,p=u.i;return c=h[p],l=(c^=c>>>7)^c<<24,l^=(c=h[p+1&7])^c>>>10,l^=(c=h[p+3&7])^c>>>3,l^=(c=h[p+4&7])^c<<7,c=h[p+7&7],l^=(c^=c<<13)^c<<9,h[p]=l,u.i=p+1&7,l},function(c,l){var h,p=[];if(l===(0|l))p[0]=l;else for(l=""+l,h=0;h<l.length;++h)p[7&h]=p[7&h]<<15^l.charCodeAt(h)+p[h+1&7]<<13;for(;p.length<8;)p.push(0);for(h=0;h<8&&p[h]===0;++h);for(h==8?p[7]=-1:p[h],c.x=p,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},h.int32=c.next,h.quick=h,l&&(l.x&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.xorshift7=i})(0,r)}),md=Un(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.w,p=u.X,f=u.i;return u.w=h=h+1640531527|0,l=p[f+34&127],c=p[f=f+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=p[f]=l^c,u.i=f,l+(h^h>>>16)|0},function(c,l){var h,p,f,d,g,v=[],m=128;for(l===(0|l)?(p=l,l=null):(l+="\0",p=0,m=Math.max(m,l.length)),f=0,d=-32;d<m;++d)l&&(p^=l.charCodeAt((d+32)%l.length)),d===0&&(g=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,d>=0&&(g=g+1640531527|0,f=(h=v[127&d]^=p+g)==0?f+1:0);for(f>=128&&(v[127&(l&&l.length||0)]=-1),f=127,d=512;d>0;--d)p=v[f+34&127],h=v[f=f+1&127],p^=p<<13,h^=h<<17,p^=p>>>15,h^=h>>>12,v[f]=p^h;c.w=g,c.X=v,c.i=f}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},h.int32=c.next,h.quick=h,l&&(l.X&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.xor4096=i})(0,r)}),yd=Un(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.b,p=u.c,f=u.d,d=u.a;return h=h<<25^h>>>7^p,p=p-f|0,f=f<<24^f>>>8^d,d=d-h|0,u.b=h=h<<20^h>>>12^p,u.c=p=p-f|0,u.d=f<<16^p>>>16^d,u.a=d-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.tychei=i})(0,r)}),Sn=Un(function(r){(function(t,e){var n,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,h=a-1;function p(m,w,b){var y=[],x=g(function I(k,R){var N,D=[],L=typeof k;if(R&&L=="object")for(N in k)try{D.push(I(k[N],R-1))}catch{}return D.length?D:L=="string"?k:k+"\0"}((w=w==1?{entropy:!0}:w||{}).entropy?[m,v(t)]:m??function(){try{var I;return n&&(I=n.randomBytes)?I=I(a):(I=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(I)),v(I)}catch{var k=o.navigator,R=k&&k.plugins;return[+new Date,o,R,o.screen,v(t)]}}(),3),y),_=new f(y),S=function(){for(var I=_.g(i),k=u,R=0;I<c;)I=(I+R)*a,k*=a,R=_.g(1);for(;I>=l;)I/=2,k/=2,R>>>=1;return(I+R)/k};return S.int32=function(){return 0|_.g(4)},S.quick=function(){return _.g(4)/4294967296},S.double=S,g(v(_.S),t),(w.pass||b||function(I,k,R,N){return N&&(N.S&&d(N,_),I.state=function(){return d(_,{})}),R?(e[s]=I,k):I})(S,x,"global"in w?w.global:this==e,w.state)}function f(m){var w,b=m.length,y=this,x=0,_=y.i=y.j=0,S=y.S=[];for(b||(m=[b++]);x<a;)S[x]=x++;for(x=0;x<a;x++)S[x]=S[_=h&_+m[x%b]+(w=S[x])],S[_]=w;(y.g=function(I){for(var k,R=0,N=y.i,D=y.j,L=y.S;I--;)k=L[N=h&N+1],R=R*a+L[h&(L[N]=L[D=h&D+k])+(L[D]=k)];return y.i=N,y.j=D,R})(a)}function d(m,w){return w.i=m.i,w.j=m.j,w.S=m.S.slice(),w}function g(m,w){for(var b,y=m+"",x=0;x<y.length;)w[h&x]=h&(b^=19*w[h&x])+y.charCodeAt(x++);return v(w)}function v(m){return String.fromCharCode.apply(0,m)}if(e["seed"+s]=p,g(e.random(),t),r.exports){r.exports=p;try{n=require("crypto")}catch{}}})([],Math)});Sn.alea=fd,Sn.xor128=dd,Sn.xorwow=vd,Sn.xorshift7=gd,Sn.xor4096=md,Sn.tychei=yd;var ua=Sn.alea,os=function(){function r(t,e,n,o,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=ua(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),bd=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var a=o||Math.random();this.randu=ua(a.toString()),this.randn=new os(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),xd=function(){function r(t,e,n,o){var a=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=ua(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function oe(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",$c(r),new Wr(r,t,e)}function wd(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var Jc=A({batchToSpaceND_:function(r,t,e){var n=C(r,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return E(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),E(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),E(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),T.runKernelFunc(function(a){return a.batchToSpaceND(n,t,e)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(t,e)}}})}}),_d=A({broadcastTo_:function(r,t){var e=C(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():T.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Cd=A({cast_:function(r,t){var e=C(r,"x","cast");if(!vf(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return T.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),Ed=A({clone_:function(r){var t=C(r,"x","clone",null);return T.runKernelFunc(function(){return T.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),kd=A({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=C(r,"x","cumsum"),a=Ht([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=Gt(1,o.rank)[0],u=T.runKernelFunc(function(c){return c.cumsum(i,s,e,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),Rd=A({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=C(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],a=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return E(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),E(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+n.shape}),E(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape}),T.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),yt=A({expandDims_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","expandDims",null);E(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(E(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),Et(e,n)}}),Qc=A({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=oe([r,t],n),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return ir(yt(s,0),[e[0],1,1]);if(e.length===2)return ir(yt(yt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return ir(yt(yt(yt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Id=A({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=C(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=T.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return i===1?u.as1D():u}}),Ei=A({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),T.runKernelFunc(function(i){return i.oneHot(o,t,e,n)},{$indices:o},function(i){return{$indices:function(){return Ce(o.shape,"float32")}}}).reshape(a)}}),zn=A({pad_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return T.runKernelFunc(function(a){return a.pad(n,t,e)},{x:n},function(a){var i=t.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),Sd=A({pad1d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),zn(r,[t],e)}}),Ad=A({pad2d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),zn(r,t,e)}}),Dd=A({pad3d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),zn(r,t,e)}}),Td=A({pad4d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),zn(r,t,e)}}),Nd=A({rand_:function(r,t,e){var n=Y(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=t();return T.makeTensor(o,r,e)}}),Pd=A({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new os(t,e,n,!1,o),i=oe(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Fd=A({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new bd(t,e,n,o),i=oe(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Zc=A({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var a=oe(r,n),i=new xd(t,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Et=A({reshape_:function(r,t){var e=C(r,"x","reshape",null);t=ff(t,e.size),E(e.size===Y(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return T.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),el=A({spaceToBatchND_:function(r,t,e){var n=C(r,"x","spaceToBatchND");return E(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),E(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),E(n.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+e[i-1][0]+e[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),T.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),tl=A({squeeze_:function(r,t){var e=C(r,"x","squeeze");return Et(e,An(e.shape,t).newShape)}}),gt=A({stack_:function(r,t){t===void 0&&(t=0);var e=Mo(r,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,a=e[0].dtype;E(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){xe(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return Le(i,t)}}),ir=A({tile_:function(r,t){var e=C(r,"x","tile",null);E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return T.runKernelFunc(function(a,i){var s=a.tile(e,t);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=ge(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var h=0;h<t[2];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(h=0;h<t[2];++h)for(var p=0;p<t[3];++p)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],p*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Od=A({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new os(t,e,n,!0,o),i=oe(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),We=A({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=C(r,"x","unstack");E(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return T.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return gt(o,t)}}},"Unpack",n)}}),Md=function(r,t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,h;return X(this,function(p){switch(p.label){case 0:return e=C(r,"x","setdiff1d"),n=C(t,"y","setdiff1d"),E(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=p.sent(),[4,n.data()];case 2:for(a=p.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new Wr([s],e.dtype),c=new Wr([s],"int32"),l=0,h=0;l<o.length;l++)i.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Lo(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function Wo(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function Uo(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=t.length?n?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function nl(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function rl(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function ol(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Lt(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var al=30;function qa(r){return r<=al?r:yi(r,Math.floor(Math.sqrt(r)))}function Bd(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(a+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function Ld(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Bd(e,t,r)}function zo(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Y(t.shape)/u,sliceSize:i,strides:Lt(e.slice(0,o)).concat([1]),outputSize:Y(e)}}function Wd(r,t,e){E(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){E(t[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function Du(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function as(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function Ud(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=vi(0,a,s-1)}function zd(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?vi(0,a,s):vi(-1,a,s-1)}function il(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function sl(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}function Vd(r,t){E(mi(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof yr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],T.registeredVariables)t.push(T.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,a=t.length;E((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=T.gradients(r,t,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function ca(r){return T.customGrad(r)}var nn=A({softmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return T.runKernelFunc(function(n,o){var a=n.softmax(e,t);return o([a]),a},{logits:e},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),$d=A({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return ca(function(n,o){var a=n.max(t,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),ul=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),cl=function(){function r(){}return r.prototype.time=function(t){return P("time")},r.prototype.read=function(t){return P("read")},r.prototype.readSync=function(t){return P("readSync")},r.prototype.numDataIds=function(){return P("numDataIds")},r.prototype.disposeData=function(t){return P("disposeData")},r.prototype.write=function(t,e,n){return P("write")},r.prototype.move=function(t,e,n,o){return P("move")},r.prototype.memory=function(){return P("memory")},r.prototype.floatPrecision=function(){return P("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return P("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,P("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return P("slice")},r.prototype.stridedSlice=function(t,e,n,o){return P("stridedSlice")},r.prototype.unstack=function(t,e){return P("unstack")},r.prototype.reverse=function(t,e){return P("reverse")},r.prototype.concat=function(t,e){return P("concat")},r.prototype.neg=function(t){return P("neg")},r.prototype.add=function(t,e){return P("add")},r.prototype.addN=function(t){return P("addN")},r.prototype.subtract=function(t,e){return P("subtract")},r.prototype.multiply=function(t,e){return P("multiply")},r.prototype.realDivide=function(t,e){return P("realDivide")},r.prototype.floorDiv=function(t,e){return P("floorDiv")},r.prototype.sum=function(t,e){return P("sum")},r.prototype.prod=function(t,e){return P("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return P("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return P("argMin")},r.prototype.argMax=function(t,e){return P("argMax")},r.prototype.equal=function(t,e){return P("equal")},r.prototype.notEqual=function(t,e){return P("notEqual")},r.prototype.less=function(t,e){return P("less")},r.prototype.lessEqual=function(t,e){return P("lessEqual")},r.prototype.greater=function(t,e){return P("greater")},r.prototype.greaterEqual=function(t,e){return P("greaterEqual")},r.prototype.logicalNot=function(t){return P("logicalNot")},r.prototype.logicalAnd=function(t,e){return P("logicalAnd")},r.prototype.logicalOr=function(t,e){return P("logicalOr")},r.prototype.where=function(t){return P("where")},r.prototype.select=function(t,e,n){return P("select")},r.prototype.topk=function(t,e,n){return P("topk")},r.prototype.min=function(t,e){return P("min")},r.prototype.minimum=function(t,e){return P("minimum")},r.prototype.mod=function(t,e){return P("mod")},r.prototype.max=function(t,e){return P("max")},r.prototype.maximum=function(t,e){return P("maximum")},r.prototype.all=function(t,e){return P("all")},r.prototype.any=function(t,e){return P("any")},r.prototype.squaredDifference=function(t,e){return P("squaredDifference")},r.prototype.ceil=function(t){return P("ceil")},r.prototype.floor=function(t){return P("floor")},r.prototype.round=function(t){return P("round")},r.prototype.sign=function(t){return P("sign")},r.prototype.isNaN=function(t){return P("isNaN")},r.prototype.isInf=function(t){return P("isInf")},r.prototype.isFinite=function(t){return P("isFinite")},r.prototype.pow=function(t,e){return P("pow")},r.prototype.exp=function(t){return P("exp")},r.prototype.expm1=function(t){return P("expm1")},r.prototype.softmax=function(t,e){return P("softmax")},r.prototype.log=function(t){return P("log")},r.prototype.log1p=function(t){return P("log1p")},r.prototype.sqrt=function(t){return P("sqrt")},r.prototype.rsqrt=function(t){return P("rsqrt")},r.prototype.square=function(t){return P("square")},r.prototype.reciprocal=function(t){return P("reciprocal")},r.prototype.relu=function(t){return P("relu")},r.prototype.relu6=function(t){return P("relu6")},r.prototype.prelu=function(t,e){return P("prelu")},r.prototype.elu=function(t){return P("elu")},r.prototype.eluDer=function(t,e){return P("eluDer")},r.prototype.selu=function(t){return P("selu")},r.prototype.int=function(t){return P("int")},r.prototype.clip=function(t,e,n){return P("clip")},r.prototype.abs=function(t){return P("abs")},r.prototype.complexAbs=function(t){return P("complexAbs")},r.prototype.sigmoid=function(t){return P("sigmoid")},r.prototype.softplus=function(t){return P("softplus")},r.prototype.sin=function(t){return P("sin")},r.prototype.cos=function(t){return P("cos")},r.prototype.tan=function(t){return P("tan")},r.prototype.asin=function(t){return P("asin")},r.prototype.acos=function(t){return P("acos")},r.prototype.atan=function(t){return P("atan")},r.prototype.atan2=function(t,e){return P("atan2")},r.prototype.sinh=function(t){return P("sinh")},r.prototype.cosh=function(t){return P("cosh")},r.prototype.tanh=function(t){return P("tanh")},r.prototype.asinh=function(t){return P("asinh")},r.prototype.acosh=function(t){return P("acosh")},r.prototype.atanh=function(t){return P("atanh")},r.prototype.erf=function(t){return P("erf")},r.prototype.step=function(t,e){return P("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,P("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return P("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return P("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return P("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,P("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return P("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return P("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return P("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return P("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return P("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return P("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return P("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return P("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return P("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return P("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return P("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return P("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return P("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return P("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return P("reshape")},r.prototype.cast=function(t,e){return P("cast")},r.prototype.tile=function(t,e){return P("tile")},r.prototype.pad=function(t,e,n){return P("pad")},r.prototype.transpose=function(t,e){return P("transpose")},r.prototype.gather=function(t,e,n){return P("gather")},r.prototype.gatherND=function(t,e){return P("gatherND")},r.prototype.scatterND=function(t,e,n){return P("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return P("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return P("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return P("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return P("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return P("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return P("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,a,i){return P("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,a){return P("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,a,i,s){return P("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return P("multinomial")},r.prototype.oneHot=function(t,e,n,o){return P("oneHot")},r.prototype.cumsum=function(t,e,n,o){return P("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,a){return P("nonMaxSuppression")},r.prototype.fft=function(t){return P("fft")},r.prototype.ifft=function(t){return P("ifft")},r.prototype.complex=function(t,e){return P("complex")},r.prototype.real=function(t){return P("real")},r.prototype.imag=function(t){return P("imag")},r.prototype.cropAndResize=function(t,e,n,o,a,i){return P("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return P("depthToSpace")},r.prototype.split=function(t,e,n){return P("split")},r.prototype.sparseToDense=function(t,e,n,o){return P("sparseToDense")},r.prototype.diag=function(t){return P("diag")},r.prototype.fill=function(t,e,n){return P("fill")},r.prototype.onesLike=function(t){return P("onesLike")},r.prototype.zerosLike=function(t){return P("zerosLike")},r.prototype.linspace=function(t,e,n){return P("linspace")},r.prototype.dispose=function(){return P("dispose")},r}();function P(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function pn(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function Ue(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],a=t.length-n-1,i=t[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function he(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(a)}}return e}function zr(r,t,e,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=Ho(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return Vn(r,s,e,n,o,a,!1,i)}function Vo(r,t,e,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=ki(t),l=c[0],h=c[1],p=c[2];if(i==="NDHWC")u="channelsLast",s=[l,h,p,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,p,r[1],r[1]]}return $o(r,s,e,n,o,!1,u,a)}function Vn(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],p=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],p=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],p=r[1],l=r[2],h=r[3]}var f,d=t[0],g=t[1],v=t[3],m=Ho(e),w=m[0],b=m[1],y=Ho(n),x=y[0],_=y[1],S=sr(d,x),I=sr(g,_),k=function(M,B,z,U,W,$,H,j){var ee,te,se;if(typeof M=="number"){ee={top:M,bottom:M,left:M,right:M,type:M===0?"VALID":"NUMBER"};var ue=function(fe,we,be,De,Ee){De==null&&(De=ll(fe,we,be));var ke=fe[0],St=fe[1],At=Fr((ke-we+2*De)/be+1,Ee);E(Fe(At),function(){return"The output # of rows ("+At+") must be an integer. Change the stride and/or zero pad parameters"});var lt=Fr((St-we+2*De)/be+1,Ee);return E(Fe(lt),function(){return"The output # of columns ("+lt+") must be an integer. Change the stride and/or zero pad parameters"}),[At,lt]}([B,z],$,U,M,j);te=ue[0],se=ue[1]}else if(M==="same"){te=Math.ceil(B/U),se=Math.ceil(z/W);var le=Math.max(0,(te-1)*U+$-B),de=Math.max(0,(se-1)*W+H-z),pe=Math.floor(le/2),ve=le-pe,Pe=Math.floor(de/2);ee={top:pe,bottom:ve,left:Pe,right:de-Pe,type:"SAME"}}else{if(M!=="valid")throw Error("Unknown padding parameter: "+M);ee={top:0,bottom:0,left:0,right:0,type:"VALID"},te=Math.ceil((B-$+1)/U),se=Math.ceil((z-H+1)/W)}return{padInfo:ee,outHeight:te,outWidth:se}}(o,l,h,w,b,S,I,a),R=k.padInfo,N=k.outHeight,D=k.outWidth,L=i?v*p:v;return s==="channelsFirst"?f=[c,L,N,D]:s==="channelsLast"&&(f=[c,N,D,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:p,outHeight:N,outWidth:D,outChannels:L,padInfo:R,strideHeight:w,strideWidth:b,filterHeight:d,filterWidth:g,effectiveFilterHeight:S,effectiveFilterWidth:I,dilationHeight:x,dilationWidth:_,inShape:r,outShape:f,filterShape:t}}function $o(r,t,e,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],p=u[3],f=u[4];if(i==="channelsLast")c=r[0],l=r[1],h=r[2],p=r[3],f=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],f=r[1],l=r[2],h=r[3],p=r[4]}var d,g=t[0],v=t[1],m=t[2],w=t[4],b=ki(e),y=b[0],x=b[1],_=b[2],S=ki(n),I=S[0],k=S[1],R=S[2],N=sr(g,I),D=sr(v,k),L=sr(m,R),M=function(H,j,ee,te,se,ue,le,de,pe,ve,Pe){var fe,we,be,De;if(typeof H=="number"){fe={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var Ee=function(qn,Kt,ka,Kn,Dt,Ra){Dt==null&&(Dt=ll(qn,Kt,Kn));var ip=qn[0],sp=qn[1],up=qn[2],Ia=Fr((ip-Kt+2*Dt)/Kn+1,Ra);E(Fe(Ia),function(){return"The output # of depths ("+Ia+") must be an integer. Change the stride and/or zero pad parameters"});var Sa=Fr((sp-Kt+2*Dt)/Kn+1,Ra);E(Fe(Sa),function(){return"The output # of rows ("+Sa+") must be an integer. Change the stride and/or zero pad parameters"});var Aa=Fr((up-Kt+2*Dt)/Kn+1,Ra);return E(Fe(Aa),function(){return"The output # of columns ("+Aa+") must be an integer. Change the stride and/or zero pad parameters"}),[Ia,Sa,Aa,ka]}([j,ee,te,1],de,1,se,H,Pe);we=Ee[0],be=Ee[1],De=Ee[2]}else if(H==="same"){we=Math.ceil(j/se),be=Math.ceil(ee/ue),De=Math.ceil(te/le);var ke=(we-1)*se+de-j,St=(be-1)*ue+pe-ee,At=(De-1)*le+ve-te,lt=Math.floor(ke/2),jn=ke-lt,jt=Math.floor(St/2),un=St-jt,qt=Math.floor(At/2);fe={top:jt,bottom:un,left:qt,right:At-qt,front:lt,back:jn,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);fe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},we=Math.ceil((j-de+1)/se),be=Math.ceil((ee-pe+1)/ue),De=Math.ceil((te-ve+1)/le)}return{padInfo:fe,outDepth:we,outHeight:be,outWidth:De}}(o,l,h,p,y,x,_,N,D,L,s),B=M.padInfo,z=M.outDepth,U=M.outHeight,W=M.outWidth,$=a?w*f:w;return i==="channelsFirst"?d=[c,$,z,U,W]:i==="channelsLast"&&(d=[c,z,U,W,$]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:p,inChannels:f,outDepth:z,outHeight:U,outWidth:W,outChannels:$,padInfo:B,strideDepth:y,strideHeight:x,strideWidth:_,filterDepth:g,filterHeight:v,filterWidth:m,effectiveFilterDepth:N,effectiveFilterHeight:D,effectiveFilterWidth:L,dilationDepth:I,dilationHeight:k,dilationWidth:R,inShape:r,outShape:d,filterShape:t}}function ll(r,t,e,n){n===void 0&&(n=1);var o=sr(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function Ho(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function ki(r){return typeof r=="number"?[r,r,r]:r}function sr(r,t){return t<=1?r:r+(r-1)*(t-1)}function Fr(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function xr(r){var t=Ho(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function ct(r,t){return xr(r)||xr(t)}function is(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function hl(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Ce(r.shape),o=r.toFloat(),a=e.complex(o,n);return n.dispose(),o.dispose(),a}if(!gf(r.dtype,t))return T.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return e.int(r);if(t==="bool"){var s=G(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function Ri(r,t){return T.makeTensorFromDataId(r.dataId,t,r.dtype)}function pl(r,t,e){var n=(t-r)/(e-1),o=Yr(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Me(o,"float32")}function Ii(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function Tu(r,t){return{real:r[2*t],imag:r[2*t+1]}}function Hd(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function Gd(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function jd(r,t,e){var n=function(a,i,s){return function(u,c,l){for(var h=0,p=u.length,f=0,d=!1;h<p;){var g=l(c,u[f=h+(p-h>>>1)]);g>0?h=f+1:(p=f,d=!g)}return d?h:-h-1}(a,i,s||qd)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function qd(r,t){return r>t?1:r<t?-1:0}function ss(r,t,e,n,o){return fl(r,t,e,n,o,0).selectedIndices}function us(r,t,e,n,o,a){var i=fl(r,t,e,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function fl(r,t,e,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,x){return{score:y,boxIndex:x,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(Nu),c=a>0?-.5/a:0,l=[],h=[];l.length<e&&u.length>0;){var p=u.pop(),f=p.score,d=p.boxIndex,g=p.suppressBeginIndex;if(f<o)break;for(var v=!1,m=l.length-1;m>=g;--m){var w=Kd(r,d,l[m]);if(w>=n){v=!0;break}if(p.score=p.score*Xd(n,c,w),p.score<=o)break}p.suppressBeginIndex=l.length,v||(p.score===f?(l.push(d),h.push(p.score)):p.score>o&&jd(u,p,Nu))}var b=l.length;return s&&(l.fill(0,b),h.fill(0,b)),{selectedIndices:Me(l,"int32"),selectedScores:Me(h,"float32"),numValidOutputs:G(b,"int32")}}function Kd(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),p=Math.max(o[1],o[3]),f=(s-a)*(u-i),d=(h-c)*(p-l);if(f<=0||d<=0)return 0;var g=Math.max(a,c),v=Math.max(i,l),m=Math.min(s,h),w=Math.min(u,p),b=Math.max(m-g,0)*Math.max(w-v,0);return b/(f+d-b)}function Xd(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function Nu(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function dl(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(a){o[e]=a;var i=r.slice(n,o);return n[e]+=a,i})}function vl(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=oe(e,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function gl(r,t,e,n,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=Lr(e,s*n),l=Lr("int32",s*n),h=0;h<s;h++){for(var p=h*u,f=r.subarray(p,p+u),d=[],g=0;g<f.length;g++)d.push({value:f[g],index:g});d.sort(function(y,x){return x.value-y.value});var v=h*n,m=c.subarray(v,v+n),w=l.subarray(v,v+n);for(g=0;g<n;g++)m[g]=d[g].value,w[g]=d[g].index}var b=t.slice();return b[b.length-1]=n,[Ye(c,b,e),Ye(l,b,"int32")]}function cs(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=oe(r,"int32"),a=oe([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=o.indexToLoc(e[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var Yd=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Jd=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Qd=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function ml(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function at(r,t){return t===1?[r]:ml(r,t)}function et(){var r,t,e,n,o,a,i,s,u,c;return O().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Tn(r,t,e){e===void 0&&(e="index");var n=Lt(t);return n.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function ls(r){var t=Lt(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var yl=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Zd(r,t,e,n){var o=[];r.forEach(function(f){var d=Y(f.shapeInfo.logicalShape);f.shapeInfo.isUniform?o.push("uniform float "+f.name+(d>1?"["+d+"]":"")+";"):(o.push("uniform sampler2D "+f.name+";"),o.push("uniform int offset"+f.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(f){return function(d,g,v){v===void 0&&(v=!1);var m="";m+=v?bl(d):er(d);var w=d.shapeInfo.logicalShape,b=g.logicalShape;return w.length<=b.length&&(m+=v?function(y,x){var _,S=y.name,I=S.charAt(0).toUpperCase()+S.slice(1),k="get"+I+"AtOutCoords",R=y.shapeInfo.logicalShape.length,N=x.logicalShape.length,D=pn(y.shapeInfo.logicalShape,x.logicalShape),L=_e(N),M=N-R,B=["x","y","z","w","u","v"];_=R===0?"":N<2&&D.length>=1?"coords = 0;":D.map(function(ee){return"coords."+B[ee+M]+" = 0;"}).join(`
`);var z="";z=N<2&&R>0?"coords":y.shapeInfo.logicalShape.map(function(ee,te){return"coords."+B[te+M]}).join(", ");var U="return outputValue;",W=Y(y.shapeInfo.logicalShape)===1,$=Y(x.logicalShape)===1;if(R!==1||W||$){if(W&&!$)U=N===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(D.length){var H=R-2,j=R-1;D.indexOf(H)>-1&&D.indexOf(j)>-1?U="return vec4(outputValue.x);":D.indexOf(H)>-1?U="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":D.indexOf(j)>-1&&(U="return vec4(outputValue.xx, outputValue.zz);")}}else U=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+k+`() {
      `+L+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+I+"("+z+`);
      `+U+`
    }
  `}(d,g):function(y,x){var _=y.name,S=_.charAt(0).toUpperCase()+_.slice(1),I="get"+S+"AtOutCoords",k=x.texShape,R=y.shapeInfo.texShape,N=y.shapeInfo.logicalShape.length,D=x.logicalShape.length;if(!y.shapeInfo.isUniform&&N===D&&y.shapeInfo.flatOffset==null&&Ge(R,k))return`
      float `+I+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var L,M=_e(D),B=pn(y.shapeInfo.logicalShape,x.logicalShape),z=D-N,U=["x","y","z","w","u","v"];L=N===0?"":D<2&&B.length>=1?"coords = 0;":B.map(function($){return"coords."+U[$+z]+" = 0;"}).join(`
`);var W="";return W=D<2&&N>0?"coords":y.shapeInfo.logicalShape.map(function($,H){return"coords."+U[H+z]}).join(", "),`
    float `+I+`() {
      `+M+` coords = getOutputCoords();
      `+L+`
      return get`+S+"("+W+`);
    }
  `}(d,g)),m}(f,t,n)}).join(`
`),c=t.texShape,l=et(),h=function(f){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+f.texture2D+`(textureSampler, uv).r;
    }
  `}(l),p=function(f){return f.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+f.varyingFs+` vec2 resultUV;
    `+f.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+f.defineSpecialNaN+`
    `+f.defineSpecialInf+`
    `+f.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+ev+`
    `+tv+`
    `+nv+`
  `}(l);return t.isPacked?(a=function(f,d){switch(f.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,x){var _=[Math.ceil(x[0]/2),Math.ceil(x[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `}(0,d);case 2:return function(y,x){var _=[Math.ceil(x[0]/2),Math.ceil(x[1]/2)];if(Ge(y,x))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var S=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec2(r, c);
    }
  `}(f,d);case 3:return g=f,v=d,m=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],w=Math.ceil(g[2]/2),b=w*Math.ceil(g[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+w+`);
      int c = imod(index, `+w+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,x){for(var _=[Math.ceil(x[0]/2),Math.ceil(x[1]/2)],S=Math.ceil(y[y.length-1]/2),I=S*Math.ceil(y[y.length-2]/2),k=I,R="",N="b, r, c",D=2;D<y.length-1;D++)k*=y[y.length-D-1],R=`
      int b`+D+" = index / "+k+`;
      index -= b`+D+" * "+k+`;
    `+R,N="b"+D+", "+N;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+R+`

      int b = index / `+I+`;
      index -= b * `+I+`;

      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec`+y.length+"("+N+`);
    }
  `}(f,d)}var g,v,m,w,b}(t.logicalShape,c),i=function(f){return`
    void setOutput(vec4 val) {
      `+f.output+` = val;
    }
  `}(l)):(a=function(f,d){switch(f.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(m,w){return w[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+w[1]+`.0);
      }
    `:w[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+w[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+w[0]+", "+w[1]+`));
      return resTexRC.x * `+w[1]+` + resTexRC.y;
    }
  `}(0,d);case 2:return function(m,w){return Ge(m,w)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+w[0]+", "+w[1]+`));
      }
    `:m[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+w[0]+", "+w[1]+`));
        int index = resTexRC.x * `+w[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:m[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+w[0]+", "+w[1]+`));
        int index = resTexRC.x * `+w[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+w[0]+", "+w[1]+`));
      int index = resTexRC.x * `+w[1]+` + resTexRC.y;
      int r = index / `+m[1]+`;
      int c = index - r * `+m[1]+`;
      return ivec2(r, c);
    }
  `}(f,d);case 3:return g=d,v=Tn(["r","c","d"],f),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(m,w){var b=Tn(["r","c","d","d2"],m);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+w[0]+", "+w[1]+`));
      int index = resTexRC.x * `+w[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(f,d);case 5:return function(m,w){var b=Tn(["r","c","d","d2","d3"],m);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+w[0]+`,
                             `+w[1]+`));

      int index = resTexRC.x * `+w[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(f,d);case 6:return function(m,w){var b=Tn(["r","c","d","d2","d3","d4"],m);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+w[0]+", "+w[1]+`));
      int index = resTexRC.x * `+w[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(f,d);default:throw new Error(f.length+"-D output sampling is not yet supported")}var g,v}(t.logicalShape,c),i=function(f){return`
    void setOutput(float val) {
      `+f.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(p+=rv),[p,h,i,s,a,u,e].join(`
`)}function er(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],h=Rn(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Xn(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=Rn(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Ge(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=An(n),l=c.newShape,h=c.keptDims,p=l;if(p.length<n.length){var f=tr(e,p);return`
      `+er(f)+`
      float `+a+`(int row, int col) {
        return `+a+"("+nr(["row","col"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+Xn(e)+`
      }
    `;var d=i[0],g=i[1],v=Rn(o);return g===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:d===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+g+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+d+", "+g+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=An(n),c=u.newShape,l=u.keptDims,h=c;if(h.length<n.length){var p=tr(e,h);return`
        `+er(p)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+nr(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+Xn(e)+`
      }
    `;var f=e.shapeInfo.texShape,d=f[0],g=f[1],v=e.shapeInfo.flatOffset;if(g===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+g+".0, "+d+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(g===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+g+".0, "+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var m=Rn(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+m+`;
        vec2 uv = uvFromFlat(`+d+", "+g+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=An(n),l=c.newShape,h=c.keptDims;if(l.length<n.length){var p=tr(e,l);return`
      `+er(p)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+nr(["row","col","depth","depth2"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+Xn(e)+`
      }
    `;var f=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,g=d[0],v=d[1];if(v===u&&f==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&f==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var m=Rn(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+g+", "+v+", index + "+m+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=An(n),h=l.newShape,p=l.keptDims;if(h.length<n.length){var f=tr(e,h);return`
      `+er(f)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+nr(["row","col","depth","depth2","depth3"],p)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+Xn(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,g=e.shapeInfo.texShape,v=g[0],m=g[1];if(m===c&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var w=Rn(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+w+`;
      vec2 uv = uvFromFlat(`+v+", "+m+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=An(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=tr(e,s);return`
      `+er(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+nr(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],h=n[4]*l,p=n[3]*h,f=n[2]*p,d=n[1]*f;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+", "+f+", "+p+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Xn(e)+`
      }
    `;var g=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],w=v[1];if(w===d&&g==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+f+", "+p+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+w+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(w===l&&g==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+w+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=Rn(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+" + col * "+f+" + depth * "+p+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+m+", "+w+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function bl(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=et(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=et();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=et();if(u!=null&&Ge(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+i+`, uv);
      }
    `;var p=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],f=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+f+", "+p[0]+", "+p[1]+`, row, col);
      return `+h.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),h=tr(o,l);return`
        `+bl(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+nr(["b","row","col"],[1,2])+`);
        }
      `}var p=c[0],f=c[1],d=Math.ceil(a[2]/2),g=d*Math.ceil(a[1]/2),v=et();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+p+", "+f+", "+g+", "+d+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],p=l[1],f=Math.ceil(a[i-1]/2),d=f*Math.ceil(a[i-2]/2),g="int b, int row, int col",v="b * "+d+" + (row / 2) * "+f+" + (col / 2)",m=2;m<i-1;m++)g="int b"+m+", "+g,d*=a[i-m-1],v="b"+m+" * "+d+" + "+v;var w=et();return`
    vec4 `+u+"("+g+`) {
      int index = `+v+`;
      int texR = index / `+p+`;
      int texC = index - texR * `+p+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+p+", "+h+`);
      return `+w.texture2D+"("+s+`, uv);
    }
  `}(r)}}var ev=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,tv=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,nv=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,rv=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Rn(r){return"offset"+r}function Xn(r){var t=r.name,e=Y(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function _e(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function tr(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function nr(r,t){return t.map(function(e){return r[e]}).join(", ")}var ov=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=_e(c),h=at("coords",c);if(a===1){var p=_e(s=c+1);i=`
        `+p+" sourceLocR = "+p+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+p+" sourceLocG = "+p+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+p+" sourceLocA = "+p+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+p+" sourceLocB = "+p+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var f=["x","y","z","w","u","v"].slice(0,s),d="."+f[s-1],g=f.map(function(I){return"int "+I}),v=at("sourceLocR",s-1).concat("inIdx.r"),m=at("sourceLocG",s-1).concat("inIdx.g"),w=at("sourceLocB",s-1).concat("inIdx.b"),b=at("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",x=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+w.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",_=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+m.join()+`) : 0.,
            hasNextRow ? getAChannel(`+w.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",S=n?"":`
      float getBestIndicesAChannel(`+g.join()+`) {
        return getChannel(getBestIndicesA(`+f.join()+`),
                                          vec2(`+f.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+g.join()+`) {
        return getChannel(getA(`+f.join()+`),
                               vec2(`+f.slice(-2).join()+`));
      }
      `+S+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+d+", sourceLocG"+d+`,
          sourceLocB`+d+", sourceLocA"+d+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+x+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},av=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},iv=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,p=r.effectiveFilterWidth,f=l-1-r.padInfo.front,d=h-1-r.padInfo.top,g=p-1-r.padInfo.left,v=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+f+", "+d+", "+g+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+p+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},sv=function(r,t,e,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],he(r,t),he(r,e);var i="0.0";n!=null&&(he(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(he(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},uv=function(r,t,e,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],he(r,t),he(r,e);var i="vec4(0.0)";n!=null&&(he(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(he(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},cv="return areal * breal - aimag * bimag;",lv="return areal * bimag + aimag * breal;",Pu=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=he(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Ka="return a + b;",Xa="return a - b;",Fu="return a * b;",xl="return (a < 0.) ? b * a : a;",Te=function(r,t,e){this.variableNames=["A","B"],this.outputShape=he(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},wl=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Yt=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=he(t,e);var o=this.outputShape.length,a="";if(n)if(o===0||Y(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+_e(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=at("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},hv=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),pv=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),fv=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},dv=function(r){this.outputShape=[],this.outputShape=br(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},vv=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=br(r,t);var e=this.outputShape,n=e.length,o=_e(n),a=at("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(v,m){return"T"+m});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),h=i.join(),p="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var f=s[u-1];p+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+fo(i,c,f)+`),
            vec2(`+fo(l,c,f)+`));
        }`}var d=s.length,g=s[s.length-1];p+=`
        return getChannel(
          getT`+d+"("+fo(i,c,g)+`),
          vec2(`+fo(l,c,g)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+p+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+e[n-2]+` &&
            `+a[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function fo(r,t,e){var n=r.indexOf(t);return r.map(function(o,a){return a===n?o+" - "+e:o}).join()}var gv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},mv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},yv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},bv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},xv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},wv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ou=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,p=4*Math.floor(r.inChannels/4),f=r.inChannels%4,d=r.dataFormat==="channelsLast",g=d?1:2,v=d?2:3,m=d?3:1,w="",b="";e&&(w=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+w+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+m+`];

        ivec2 xRCCorner =
            ivec2(coords[`+g+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+p+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+d+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(f===1)+`) {

              if (`+d+`) {
                dotProd +=
                    getX(batch, xR, xC, `+p+`) *
                    getW(wR, wC, `+p+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+p+`, xR, xC) *
                    getW(wR, wC, `+p+`, d2);
              }

            } else if (`+(f===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+p+`, d2),
                getW(wR, wC, `+p+` + 1, d2)
              );

              if (`+d+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+p+`),
                  getX(batch, xR, xC, `+p+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+p+`, xR, xC),
                  getX(batch, `+p+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(f===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+p+`, d2),
                getW(wR, wC, `+p+` + 1, d2),
                getW(wR, wC, `+p+` + 2, d2)
              );

              if (`+d+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+p+`),
                  getX(batch, xR, xC, `+p+` + 1),
                  getX(batch, xR, xC, `+p+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+p+`, xR, xC),
                  getX(batch, `+p+` + 1, xR, xC),
                  getX(batch, `+p+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},_v=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,p=r.filterWidth,f=4*Math.floor(r.inChannels/4),d=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+p+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+f+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(d===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+f+`) *
                  getW(wF, wR, wC, `+f+`, d2);
              } else if (`+(d===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+f+`),
                  getX(batch, xF, xR, xC, `+f+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+f+`, d2),
                  getW(wF, wR, wC, `+f+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(d===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+f+`),
                  getX(batch, xF, xR, xC, `+f+` + 1),
                  getX(batch, xF, xR, xC, `+f+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+f+`, d2),
                  getW(wF, wR, wC, `+f+` + 1, d2),
                  getW(wF, wR, wC, `+f+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Mu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,p=r.filterHeight,f=r.filterWidth,d=r.outChannels/r.inChannels,g="",v="";e&&(g=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var m=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+g+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+d+`;
        int q = d2 - d1 * `+d+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+p+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+m+`
        `+v+`
        setOutput(result);
      }
    `},Bu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,p=r.filterHeight,f=r.filterWidth,d=f,g="int xR; int xC; int xCOffset;",v=0;v<p;v++)for(var m=0;m<f;m++)g+=`
          vec4 xTexelR`+v+"C"+2*m+` = vec4(0.);
          vec4 wR`+v+"C"+m+` = vec4(0.);
          vec4 xR`+v+"C"+m+" = vec4(0.);";for(v=0;v<p;v++)for(var w=0;w<d;w++){if(g+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(m=2*w)*h+`;
        `,c===1){if(m<f&&(g+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+m+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+m+" = vec4(previous.zw, xTexelR"+v+"C"+m+`.xy);
                } else {
                  xR`+v+"C"+m+" = vec4(0, 0, xTexelR"+v+"C"+m+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                xR`+v+"C"+m+" = xTexelR"+v+"C"+m+`;
              `,m+1<f)){var b=s%2==0?Wc(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(g+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(g+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+m+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+m+` = vec4(0.);
                    }
                  `),g+=`
                  xR`+v+"C"+(m+1)+` = vec4(
                    xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.xy);
                `):g+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(m+1)+" = xTexelR"+v+"C"+(m+2)+`;
                `}}else m<f&&(g+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(g+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(m+2)+` = vec4(0.);
                }

                xR`+v+"C"+m+` = vec4(
                  xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.zw);
              `,m+1<f&&(g+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(m+1)+" = vec4(xTexelR"+v+"C"+(m+2)+`.xy, final.xy);
                `)):(g+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(m+2)+` = vec4(0.);
                }

                xR`+v+"C"+m+` = vec4(
                  xTexelR`+v+"C"+m+".xy, xTexelR"+v+"C"+(m+2)+`.xy);
              `,m+1<f&&(g+=`
                  xR`+v+"C"+(m+1)+` = vec4(
                    xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.zw);
                `)),g+="}");m<f&&(g+=`
            vec4 wTexelR`+v+"C"+m+" = getW("+v+", "+m+`, d1, q);
            wR`+v+"C"+m+" = vec4(wTexelR"+v+"C"+m+".xz, wTexelR"+v+"C"+m+`.xz);
          `,m+1<f&&(g+=`
              vec4 wTexelR`+v+"C"+(m+1)+" = getW("+v+", "+(m+1)+`, d1, q);
              wR`+v+"C"+(m+1)+` =
                vec4(wTexelR`+v+"C"+(m+1)+".xz, wTexelR"+v+"C"+(m+1)+".xz);"))}for(v=0;v<p;v++)for(m=0;m<f;m++)g+="dotProd += xR"+v+"C"+m+" * wR"+v+"C"+m+";";var y="",x="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,x="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+g+`

        vec4 result = dotProd;
        `+_+`
        `+x+`
        setOutput(result);
      }
    `},Cv=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],h=e[1];this.outputShape=[c,l,h,u];var p=n==="bilinear"?1:0,f=[i-1+".0",s-1+".0"],d=f[0],g=f[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],m=v[0],w=v[1],b=v[2],y=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+g+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+g],x=y[0],_=y[1],S=y[2];this.userCode=`
      const float height_ratio = float(`+m+`);
      const float width_ratio = float(`+x+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+w+`;
        float width_scale = `+_+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+d+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+S+`;
        if( in_x < 0.0 || in_x > `+g+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+p+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Ev=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+_e(n)+` coords = getOutputCoords();
        int end = `+Lu(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+Lu(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function Lu(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var kv=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Ur.DENSE;var t=Pr(r),e=et();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Tn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Rv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Ur.DENSE;var t=Pr(r),e=et();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Tn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},Iv=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Sv=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Av=function(r){this.variableNames=["A"],this.outTexUsage=ft.DOWNLOAD;var t=et();this.outputShape=r,this.userCode=`
      `+yl+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},Dv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=ft.DOWNLOAD;var t=et();this.outputShape=r,this.userCode=`
      `+yl+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},Tv=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=et(),o=t[0],a=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+ls(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Nv=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=et(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+ls(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},Pv="return real * expR - imag * expI;",Fv="return real * expI + imag * expR;",Wu=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Ov=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),Mv=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=_e(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<i.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Bv=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=_e(t.length),o=_e(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Lv(r,t){var e=et();return Pf(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Wv(r,t){return Lf(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Uv(r,t){return Wf(r,t,new Uint16Array([0,1,2,2,1,3]))}function Qr(r,t,e,n,o,a,i){zf(e,n);var s=Uf(r,t),u=r.TEXTURE_2D;return J(r,t,function(){return r.bindTexture(u,s)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),J(r,t,function(){return r.texImage2D(u,0,o,e,n,0,a,i,null)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function zv(r,t,e,n,o){var a=sa(e,n);return Qr(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Vv(r,t,e,n,o){var a=sa(e,n);return Qr(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function $v(r,t,e,n,o){var a=sa(e,n);return Qr(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Hv(r,t,e,n,o){var a=Jr(e,n);return Qr(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Gv(r,t,e,n,o){var a=Jr(e,n);return Qr(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function jv(r,t,e,n){return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Ru(r,t,e,"clipSpacePos",n,3,20,0)&&Ru(r,t,e,"uv",n,2,20,12)}function qv(r,t,e,n,o,a,i){var s,u,c;J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Kv(r,t,e,n){J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Xv(r,t,e,n,o){var a=r.createBuffer();J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*n;return J(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function Yv(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Jv(r,t,e,n,o){var a=sa(e,n),i=a[0],s=a[1],u=new Uint8Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Qv(r,t,e,n,o,a,i,s){var u=r,c=new Float32Array(function(l,h){var p=Jr(l,h);return p[0]*p[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Zv(r,t,e,n){var o=new Float32Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var eg=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=O().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Sf(e,t)):this.gl=$t(e);var n="WEBGL_color_buffer_float";if(O().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=co(this.gl,this.debug,"OES_texture_float"),xt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=co(this.gl,this.debug,"OES_texture_half_float");else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),xt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=co(this.gl,this.debug,"EXT_color_buffer_half_float");else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",xt(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!xt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Wv(this.gl,this.debug),this.indexBuffer=Uv(this.gl,this.debug),this.framebuffer=Vf(this.gl,this.debug),this.textureConfig=es(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return O().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;J(e,this.debug,function(){return e.finish()}),J(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),J(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),J(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),zv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Vv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),$v(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),Kv(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),qv(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Gv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Hv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(Iu(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return Jv(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,a,i){return Qv(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return Yv(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=Xv(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(O().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return Zv(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=Ff(e,this.debug,t),o=Lv(e,this.debug),a=Mf(e,this.debug);return J(e,this.debug,function(){return e.attachShader(a,o)}),J(e,this.debug,function(){return e.attachShader(a,n)}),Bf(e,this.debug,a),this.debug&&Ha(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=jv(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&J(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Ha(this.gl,this.debug,this.program),J(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?Hf(this.gl,this.debug,t,e):Gf(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),J(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),jf(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=Jr(e,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&Ha(this.gl,this.debug,this.program),lo(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),J(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=co(this.gl,this.debug,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return K(this,void 0,void 0,function(){var e=this;return X(this,function(n){switch(n.label){case 0:return[4,xu(function(){return e.disposed||e.isQueryAvailable(t,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||xu(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Ga(this.gl,this.debug,t,this.framebuffer),this.debug&&lo(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Ga(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&lo(this.gl)):Iu(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;Ga(o,this.debug,t,this.framebuffer),this.debug&&lo(o),this.outputTexture=t,J(o,this.debug,function(){return o.viewport(0,0,e,n)}),J(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var a=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return a.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function Uu(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,a=t[n],i=a.shape;if(!Ge(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!Ge(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var tg=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,h=e.dataFormat,p=s.left,f=s.top,d=o*n,g=et(),v=h==="channelsLast",m=v?0:1,w=v?1:2,b="",y=0;y<=1;y++)for(var x=0;x<=1;x++)b+=`
          blockIndex = rc.y + `+x+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+f+`;
            d0 = offsetY + `+l+" * (pos / "+d+`);

            if(d0 < `+t[m]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+p+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+d+".) / "+o+`.));

              if(d1 < `+t[w]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+x)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+x)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+g.output+` = result;
      }
    `},ng=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},rg=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},og=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},ag=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},ig=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,p=c-1-r.padInfo.left,f=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+p+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+f+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ya=function(r,t,e,n,o,a,i){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",h=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],p=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],f="",d="";a&&(f=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,d="result = activation(result);");var g=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+f+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+p[0]+`);
          result += (`+h[1]+" * "+p[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+g+`

        `+d+`

        setOutput(result);
      }
    `},sg=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),ug=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},cg=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=at("rc",t),n=_e(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(t,r,e),a=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(h,p){for(var f=[],d=0;d<=1;d++)for(var g=0;g<=1;g++){for(var v=(d===0?"r":"rp1")+", "+(g===0?"c":"cp1"),m=2;m<h;m++)v=p[p.length-1-m]+","+v;f.push(v)}return f}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},lg=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=_e(n),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},hg=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,m){return v[0]+r[m]+v[1]});for(var n=r.length,o=_e(n),a=t.map(function(v){return v[0]}).join(","),i=t.map(function(v,m){return v[0]+r[m]}).join(","),s=at("rc",n),u=at("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],p=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",f="",d=0,g=n===1?2:4;d<g;d++)f+=`
        `+h[d]+`
        if (`+p+`) {
          result[`+d+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+d+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;f+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+f+`
        setOutput(result);
      }
    `},Ja=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var p=t==="avg",f="0.0";if(p||(f="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var d=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(d="avgValue / count");var g=4*Math.floor(n/4),v=n%4,m=`
      if (`+p+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+f+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+f+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+g+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+m+`
          }

          int xC = xCCorner + `+g+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+m+`
          }
        }
        setOutput(`+d+`);
      }
    `}},Qa=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,p=r.effectiveFilterWidth,f=r.padInfo.front,d=r.padInfo.top,g=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",m="0.0";if(v||(m="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+f+", "+d+", "+g+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+p+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+p+` +
                      wR * `+p+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var w=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(w="avgValue / count");var b=4*Math.floor(n/4),y=n%4,x=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+f+", "+d+", "+g+`);
      const float initializationValue = `+m+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+m+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+x+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+x+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+x+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+x+`
            }
          }
          setOutput(`+w+`);
        }
      }
    `}},pg=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[n,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,h=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,p="vec4";t==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):t==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,p="bvec4");var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+f+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},fg=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Tn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+ls(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},dg=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],p=c[1]/l[1],f=1/h,d=1/p,g=2*Math.ceil(f)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+p+`);

        const float invHeightScale = float(`+f+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+g+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},vg=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},gg=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},mg=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],p=c[1]/l[1],f=1/h,d=1/p,g=2*Math.ceil(f)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+p+`);

        const float invHeightScale = float(`+f+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+g+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},yg=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},bg=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=_e(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},xg=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=at("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],a=n[e-2]+" + 1 < "+this.outputShape[e-2],i=_e(e);function s(u){var c=r.map(function(l,h){return function(p,f){return t.indexOf(p)!==-1&&r[p]!==1?r[p]+" - "+f[p]+" - 1":""+f[p]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},zu=function(r,t,e,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=_e(o.length),u=_e(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",h="";n===1?h="i":n===2&&(h="i, coords[1]");var p="getUpdates("+h+")",f=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+f+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+p+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},wg=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%e>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},_g=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=_e(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Cg=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=_e(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return Za.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+Za[s]+" = start["+s+"] + coords."+Za[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),Za=["x","y","z","w","u","v"],Eg=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=_e(this.rank),n=at("coords",this.rank),o=at("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,h){return"start["+h+"]"}).join()+");":t.map(function(l,h){return o[h]+" = "+n[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),kg=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=_e(e.length),a=_e(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},Rg=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,a=Vu(e,n),i=$u(t,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===pt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===pt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===pt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===pt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===pt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var a=$u(e,Vu(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function Vu(r,t){if(r===ft.UPLOAD)return pt.PACKED_2X2_FLOAT32;if(r===ft.RENDER||r==null)return function(e){return O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?pt.PACKED_2X2_FLOAT32:pt.UNPACKED_FLOAT32:e?pt.PACKED_2X2_FLOAT16:pt.UNPACKED_FLOAT16}(t);if(r===ft.DOWNLOAD||r===ft.PIXELS)return pt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function $u(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var Ig=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=_e(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Sg=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=_e(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},Ag=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=_e(this.rank),a=ml("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},hs=1.7580993408473768,ps=1.0507009873554805,ae=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},It="if (isnan(x)) return x;",Dg="return x;",Hu="return abs(x);",_l=It+`
  return (x < 0.0) ? 0.0 : x;
`,Cl=It+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,El="return (x >= 0.0) ? x : (exp(x) - 1.0);",Tg=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+hs+`;
  float scale = `+ps+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Gu="return -x;",ju="return ceil(x);",qu="return floor(x);",Ku="return exp(x);",Xu="return exp(x) - 1.0;",Ng=It+`
  return sin(x);
`,Pg=It+`
  return cos(x);
`,Fg=It+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Og=It+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Mg=It+`
  return atan(x);
`,Bg=It+"return log(x + sqrt(x * x + 1.0));",Lg=It+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Wg=It+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,vo="return x;",Ug="return x;",kl=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Rl=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Il=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Ar=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},zg=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=at("rc",t),n=_e(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),a=e.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},go={};function mo(r,t){if(t===void 0&&(t=!1),r==="linear")return t?Ug:Dg;if(r==="relu")return t?kl:_l;if(r==="elu")return t?Il:El;if(r==="relu6")return t?Rl:Cl;if(r==="prelu")return t?wl:xl;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Vg=600,$g=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!O().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=$t(O().getNumber("WEBGL_VERSION"));o.binaryCache=((n=O().getNumber("WEBGL_VERSION"))in go||(go[n]={}),go[n]),o.gpgpu=new eg(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Rg(o.gpgpu),o.numMBBeforeWarning=O().global.screen==null?1024:O().global.screen.height*O().global.screen.width*window.devicePixelRatio*Vg/1024/1024,o.texData=new ul(o,T),o}return Rt(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(O().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:e,usage:ft.UPLOAD}),a},t.prototype.move=function(e,n,o,a){if(O().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:n,usage:ft.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new Ar(u,vo):new ae(u,vo);var h=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),p=this.readSync(h.dataId);return this.disposeData(h.dataId),p}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var f,d,g=this.activeTimers!=null;return g&&(f=Pt()),a==="complex64"?d=Ii(i.real.dataSync(),i.imag.dataSync()):d=this.getValuesFromTexture(e),g&&(this.downloadWaitMs+=Pt()-f),this.convertAndCacheOnCPU(e,d)},t.prototype.read=function(e){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,p,f,d,g,v,m,w,b,y,x,_,S,I;return X(this,function(k){switch(k.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(R){return n.push(R)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new Ar(i,vo):new ae(i,vo),p=this.runWebGLProgram(h,[{dataId:e,shape:i,dtype:u}],u),f=this.read(p.dataId),this.disposeData(p.dataId),[2,f];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&O().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,u!=="complex64"&&O().get("WEBGL_BUFFER_SUPPORTED")&&(g=this.decode(e),v=this.texData.get(g.dataId),d=(I=this.gpgpu).createBufferFromTexture.apply(I,[v.texture].concat(Pr(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:k.sent(),k.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return w=k.sent(),b=w[0],y=w[1],m=Ii(b,y),[3,5];case 4:d==null?m=this.getValuesFromTexture(e):(x=Y(i),m=this.gpgpu.downloadFloat32MatrixFromBuffer(d,x)),k.label=5;case 5:return g!=null&&this.disposeData(g.dataId),_=this.convertAndCacheOnCPU(e,m),S=this.pendingRead.get(e),this.pendingRead.delete(e),S.forEach(function(R){return R(_)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!Tf(o))throw O().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=Y(a);if(O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),h=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(Pr(a))).subarray(0,u);return this.disposeData(c.dataId),h}var p=O().getBool("WEBGL_PACK")&&s===!0,f=p?ja(a):a,d=p?new Dv(f):new Av(f),g=this.runWebGLProgram(d,[{shape:f,dtype:i,dataId:e}],"float32"),v=this.texData.get(g.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(g.dataId),m},t.prototype.time=function(e){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return X(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=mr(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=mr(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=hf(c),u.getExtraProfileInfo=function(){return c.map(function(h,p){return{name:s[p],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Pt(),endMs:null}},t.prototype.endTimer=function(e){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Pt(),e)},t.prototype.getQueryTime=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var p=this.texData.get(e);p.texture=null,p.texShape=null,p.isPacked=!1,p.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return O().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=T.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(Y(o)===0)return Ye([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=il(e.shape,n,o);if(a||!i){var s=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Eg(o):new Cg(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=sl(n,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,a);var i=as(n,o,a);if(i.some(function(u){return u===0}))return Ye([],i);var s=new kg(n,a,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xg(e.shape,n):new bg(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(f){return bt(f)}),a=e.map(function(f){return Ot(f)});return Ke(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>O().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new vv(e.map(function(f){return f.shape}),n);return this.compileAndRun(c,e)}var l=br(e.map(function(f){return f.shape}),n),h=e.map(function(f){return f.as2D(-1,Y(f.shape.slice(n)))}),p=new dv(h.map(function(f){return f.shape}));return this.compileAndRun(p,h).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Gu,e.dtype);var n=new ae(e.shape,Gu);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,a){var i=o?e.shape[2]:e.shape[1],s=a?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),h=s===1?2:1,p=s===1?n.as3D(c,1,u):n;return this.multiply(l,p).sum(h,!0)}var f=Xe(e.dtype,n.dtype),d=new Ya(e.shape,[c,i,s],o,a);return this.compileAndRun(d,[e,n],f)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?n.shape[2]:n.shape[1],h=i?o.shape[1]:o.shape[2],p=n.shape[0],f=Xe(n.dtype,o.dtype),d=s!=null,g=c!=null,v=u?mo(u,!0):null,m=new Ya(n.shape,[p,l,h],a,i,d,v,g),w=[n,o];return s&&w.push(s),c&&w.push(c),this.compileAndRun(m,w,f)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(n.dataId),i=new Pu(cv,e.shape,n.shape),s=new Pu(lv,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Fu,e.dtype);var p=new Te(Fu,e.shape,n.shape);return this.compileAndRun(p,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),O().getBool("WEBGL_PACK_NORMALIZATION")){var h=new uv(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)}var p=new sv(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(p,u)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){var s=O().getBool("WEBGL_PACK_NORMALIZATION")?new og(e.shape,n,o,a,i):new ng(e.shape,n,o,a,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){var c=new rg(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return No(i)});return vl(oe(e.shape,e.dtype,o),n)}var a=new Ig(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.pad=function(e,n,o){var a=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new hg(e.shape,n,o):new lg(e.shape,n,o);return this.compileAndRun(a,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ag(e.shape,n):new Sg(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var a=new Mv(e.shape,n.size,o);return this.compileAndRun(a,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,p){return h*p}),i=Lo(e.shape,n,a),s=Wo(i.length,n.length),u=Uo(e.shape,n,a),c=nl(o,n.length),l=rl(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(p,f){return p*f}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Lo(u.shape,n,a,!1),l=Wo(c.length,n.length,!1),h=Uo(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.reduce=function(e,n,o){var a=e.shape[0],i=e.shape[1],s=qa(i),u=new pg({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=qa(i),u=new Qd({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=qa(a[a.length-1]),s=new ov(a,i,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){ht("sum",n,e.rank);var o=Qe(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i),u=Wa(e.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=Qe(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i),u=Wa(e.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(e,n,o){var a=0,i=Ht([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=Gt(1,e.rank)[0]);var u=function(f,d,g){for(var v=[],m=f.length,w=0;w<m;w++)w!==d?v.push(f[w]):v.push(g);return v}(s.shape,a,o),c=Y([s.shape[a]]),l=s.as2D(-1,c),h=Wa(e.dtype),p=this.segOpCompute(l,"unsortedSegmentSum",n,h,o).reshape(u);return i!=null&&(p=p.transpose(ts(i))),p},t.prototype.segOpCompute=function(e,n,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(p,f){var d,g=!1;for(p<=al?(d=p,g=!0):d=yi(p,Math.floor(Math.sqrt(p)));!g;)d>f||d===p?g=!0:d=yi(p,d+1);return d}(u,i),l=new wg({windowSize:c,inSize:u,batchSize:s,numSegments:i}),h=this.compileAndRun(l,[e,o],a);return h.shape[1]===i?h:(o=Bo(0,i).tile([u/c]),this.segOpCompute(h,n,o,a,i))},t.prototype.argMinMaxReduce=function(e,n,o){var a=[n];if(ht("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!O().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=Qe(e.shape,a),s=i[0],u=Y(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,a){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new Ev(e.shape,o,a);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Te("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Te("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Te("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Te("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Te("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Te("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new ae(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Te("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Te("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var a=new _g(e.rank,n.shape,n.rank);return this.compileAndRun(a,[e,n,o],Xe(n.dtype,o.dtype))},t.prototype.where=function(e){Oo("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return cs(e.shape,n)},t.prototype.topk=function(e,n,o){return gl(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){ht("min",n,e.rank);var o=Qe(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);ht("max",n,e.rank);var o=Qe(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){ht("all",n,e.rank);var o=Qe(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(e,n){ht("any",n,e.rank);var o=Qe(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Te(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Te(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Ka);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=Xe(e.dtype,n.dtype);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ka,o);var a=new Te(Ka,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var a=new Ar(e.shape,n);return this.compileAndRun(a,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,a,i){i===void 0&&(i=!1);var s=new Yt(o,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],a)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(p){var f=p[0],d=p[1],g=a.makeComplexComponentTensorInfo(e,f),v=a.makeComplexComponentTensorInfo(n,d),m=new Te(o,e.shape,n.shape);return a.compileAndRun(m,[g,v],Xe(f.dtype,d.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>O().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),a=this.addN(e.slice(n));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return Xe(c,l)}),s=e.map(function(c){return c.shape}),u=O().getBool("WEBGL_PACK")?new Jd(e[0].shape,s):new Yd(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Xa);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=Xe(e.dtype,n.dtype);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Xa,e.dtype);var a=new Te(Xa,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.pow=function(e,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),a=Xe(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],a)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ju,e.dtype);var n=new ae(e.shape,ju);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,qu,e.dtype);var n=new ae(e.shape,qu);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new ae(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new ae(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new ae(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new ae(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new ae(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ku,e.dtype);var n=new ae(e.shape,Ku);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Xu,e.dtype);var n=new ae(e.shape,Xu);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=Ve([n],e.shape),a=this.max(e,o),i=ut(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new ae(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new ae(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new ae(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new ae(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new ae(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=O().getBool("WEBGL_PACK")?new Ar(e.shape,kl):new ae(e.shape,_l),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=O().getBool("WEBGL_PACK")?new Ar(e.shape,Rl):new ae(e.shape,Cl),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(wl,e.shape,n.shape):new Te(xl,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Il,e.dtype);var n=new ae(e.shape,El);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new Te("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new ae(e.shape,Tg);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new ae(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var a,i=(a=O().getBool("WEBGL_PACK_CLIP")?new pv(e.shape):new hv(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Hu,e.dtype);var n=new ae(e.shape,Hu);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new fv(e.shape),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(e){var n=new ae(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new ae(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new ae(e.shape,Ng);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new ae(e.shape,Pg);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new ae(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new ae(e.shape,Fg);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new ae(e.shape,Og);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new ae(e.shape,Mg);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Te(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new ae(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new ae(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new ae(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new ae(e.shape,Bg);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new ae(e.shape,Lg);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new ae(e.shape,Wg);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new ae(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new ae(e.shape,function(a){return a===void 0&&(a=0),It+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],p=o.outChannels,f=o.dataFormat==="channelsLast",d=(h===1||p===1)&&l>1e3,g=u[2]%2!=0&&!!c.isPacked;if(d||!O().getBool("WEBGL_LAZILY_UNPACK")||!O().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!g){var v=f?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],m=this.reshape(e,[1,v,o.inChannels]),w=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:m,b:w,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=f?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},x=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(po(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var _=this.reshape(n,[1,o.inChannels,o.outChannels]),S=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),I=this.texData.get(S.dataId);return E(I.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=x,I.shape=o.outShape,T.makeTensorFromDataId(S.dataId,o.outShape,S.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,p=o.outHeight,f=o.dataFormat==="channelsLast",d=u*c*l,g=p*h,v=[d,g],m=e.squeeze([0]),w=n.reshape([1,d,-1]),b=new tg(v,m.shape,o),y=this.compileAndRun(b,[m]).reshape([1,v[0],v[1]]),x=a!=null,_=s!=null,S=i?mo(i,!0):null,I=new Ya(y.shape,[1,g,o.outChannels],!0,!1,x,S,_),k=[y,w];a&&k.push(a),_&&k.push(s);var R=this.compileAndRun(I,k);return f?R.reshape([1,p,h,o.outChannels]):R.reshape([1,o.outChannels,p,h])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(O().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,h=s?mo(s,!1):null,p=new Ou(a,c,h,l),f=[n,o];return i&&f.push(i),u&&f.push(u),this.compileAndRun(p,f)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(O().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var a=new Ou(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var a=new mv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var a=new gv(o);return this.compileAndRun(a,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=O().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,h=u?mo(u,l):null,p=[o,a],f=s!=null,d=c!=null;return f&&p.push(s),d&&p.push(c),l?(n=new Bu(i,f,h,d),this.compileAndRun(n,p)):(n=new Mu(i,f,h,d),this.compileAndRun(n,p))},t.prototype.depthwiseConv2D=function(e,n,o){var a;return O().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new Bu(o),this.compileAndRun(a,[e,n])):(a=new Mu(o),this.compileAndRun(a,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var a=new wv(o);return this.compileAndRun(a,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var a=new xv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3d=function(e,n,o){var a=new _v(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var a=new bv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var a=new yv(o);return this.compileAndRun(a,[e,n])},t.prototype.maxPool=function(e,n){var o=new Ja(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new Ja(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,a){var i=new Ja(a,"max",!0),s=this.compileAndRun(i,[n]),u=new ag(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var a=new av(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.cast=function(e,n){return hl(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.avgPool3d=function(e,n){var o=new Qa(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var a=new iv(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new Qa(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,a){var i=new Qa(a,"max",!0),s=this.compileAndRun(i,[n]),u=new ig(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!po(e.shape,n)&&(o.texture===null||!po(o.shape,n))){var a=this.packedReshape(e,n);return T.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return Ri(e,n)},t.prototype.resizeBilinear=function(e,n,o,a){var i=O().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new gg(e.shape,n,o,a):new vg(e.shape,n,o,a);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var a=new dg(e,n,o);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,a){var i=new yg(e.shape,n,o,a);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var a=new mg(e,n,o);return this.compileAndRun(a,[e])},t.prototype.multinomial=function(e,n,o,a){var i=n?e:nn(e),s=i.shape[0],u=i.shape[1],c=new sg(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,o,a){var i=new ug(e.size,n,o,a);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new Sv(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return Oo("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),ss(e.dataSync(),n.dataSync(),o,a,i)},t.prototype.cropAndResize=function(e,n,o,a,i,s){var u=new Cv(e.shape,n.shape,a,i,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,h=u/(n*n),p=new Iv(o==="NHWC"?[a,c,l,h]:[a,h,c,l],n,o);return this.compileAndRun(p,[e])},t.prototype.split=function(e,n,o){return dl(e,n,o)},t.prototype.scatterND=function(e,n,o){var a=zo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=[l/u,u],p=e.reshape([s,i]),f=n.reshape([s,u]);if(l===0)return Ri(Ye([]),o);var d=G(0),g=new zu(s,i,p.rank,f.rank,c,h);return this.compileAndRun(g,[f,p,d]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,a){var i=zo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,h=new zu(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(h,[n,e,a]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),a=new Wu(Pv,e.shape,n),i=new Wu(Fv,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=ol(e,n),s=i[0],u=i[1],c=i[2],l=i[3],h=n.reshape([u,a]),p=e.reshape([e.size/c,c]),f=new Bv(a,l,[u,c]);return this.compileAndRun(f,[p,h]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||Xr(n))==="string"){var a=To(o,Y(e));return a.fill(n),T.makeTensor(a,e,o,this)}var i=new Ov(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return pl(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return T.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new zg(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new cg(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[Po(e.shape)].concat(Fo(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[Po(n)].concat(Fo(n)),s=new fg(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=ja(i);return n=a?new Rv(u):new kv(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===Ur.DENSE){var l=Pr(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),Y(u.shape)===0)return c.values=Lr(u.dtype,0),u;var h=[],p=n.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!e.packedInputs&&Y(b.shape)<=O().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!e.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),h.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!po(y.shape,b.shape)){var x=b,_=b.shape;b.shape=y.shape,b=s.packedReshape(b,_),h.push(b),y=s.texData.get(b.dataId),x.shape=_}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var f,d={shape:u.shape,texData:c,isUniform:!1},g=function(b,y,x){var _="";y.concat(x).forEach(function(k){var R=k.texData!=null&&k.texData.slice!=null&&k.texData.slice.flatOffset>0,N=k.isUniform?"uniform":k.texData.texShape;_+=k.shape+"_"+N+"_"+R});var S=b.userCode,I=b.constructor.name;return I+="_"+_+"_"+S}(e,p,d),v=this.getAndSaveBinary(g,function(){return function(b,y,x,_){var S=y.userCode,I=x.map(function(W,$){var H={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(H.flatOffset=W.texData.slice.flatOffset),{name:y.variableNames[$],shapeInfo:H}}),k=I.map(function(W){return W.shapeInfo}),R={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},N=Zd(I,R,S,y.packedInputs),D=b.createProgram(N),L=null,M=b.getUniformLocation(D,"NAN",!1);O().getNumber("WEBGL_VERSION")===1&&(L=b.getUniformLocation(D,"INFINITY",!1));for(var B={},z=0;z<y.variableNames.length;z++){var U=y.variableNames[z];B[U]=b.getUniformLocation(D,U,!1),B["offset"+U]=b.getUniformLocation(D,"offset"+U,!1)}return{program:y,source:N,webGLProgram:D,uniformLocations:B,inShapeInfos:k,outShapeInfo:R,infLoc:L,nanLoc:M}}(s.gpgpu,e,p,d)}),m=this.activeTimers!=null;if(m&&(f=this.startTimer()),function(b,y,x,_,S){Uu(y.inShapeInfos,x),Uu([y.outShapeInfo],[_]);var I=_.texData.texture,k=_.texData.texShape;_.texData.isPacked?b.setOutputPackedMatrixTexture(I,k[0],k[1]):b.setOutputMatrixTexture(I,k[0],k[1]),b.setProgram(y.webGLProgram),O().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),x.forEach(function(R,N){var D=y.program.variableNames[N],L=y.uniformLocations[D],M=y.uniformLocations["offset"+D];if(L!=null)if(R.isUniform)if(Y(R.shape)<2)b.gl.uniform1f(L,R.uniformValues[0]);else{var B=R.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(L,B)}else R.texData.slice!=null&&M!=null&&b.gl.uniform1i(M,R.texData.slice.flatOffset),b.setInputMatrixTexture(R.texData.texture,L,N)}),S!=null&&S(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,v,p,d,a),h.forEach(function(b){return s.disposeData(b.dataId)}),m&&(f=this.endTimer(f),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(f)})),!O().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var w=this.unpackTensor(u);return this.disposeData(u.dataId),w}return u},t.prototype.compileAndRun=function(e,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,a,i);return T.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(O().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=q(function(){if(!O().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=O().getBool("DEBUG");O().set("DEBUG",!1);var o=e.abs(G(1e-8)).dataSync()[0];if(O().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,p=this.activeTimers!=null;p&&(h=Pt());var f=o.texShape;if(f==null&&(f=Xf(a,l),o.texShape=f),s!=null){var d=ja(a),g=void 0,v=f[1],m=f[0],w=s instanceof Uint8Array;l?(v=(n=Jr(f[0],f[1]))[0],m=n[1],g=new Nv(d,[m,v],w)):g=new Tv(d,[m,v],w);var b=this.makeTensorInfo([m,v],i);this.texData.get(b.dataId).usage=w?ft.PIXELS:ft.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),v,m,s);var y=this.runWebGLProgram(g,[b],i,null,!0),x=this.texData.get(y.dataId);o.texture=x.texture,o.texShape=x.texShape,o.isPacked=x.isPacked,o.usage=x.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,p&&(this.uploadWaitMs+=Pt()-h)}else{var _=this.acquireTexture(f,c,i,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},t.prototype.acquireTexture=function(e,n,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,a)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*Uc(n)},t}(cl);qc()&&T.registerBackend("webgl",function(){return new $g},2);var Hg=A({square_:function(r){var t=C(r,"x","square"),e=[t];return T.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),Vr="SquaredDifference",Sl=A({squaredDifference_:function(r,t){var e,n=C(r,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=Se(n,o),n=e[0],o=e[1],he(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return T.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],h=G(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},Vr,{},i,[])}}),Gg=A({abs_:function(r){var t=C(r,"x","abs");return t.dtype==="complex64"?T.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):T.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),jg=A({acos_:function(r){var t=C(r,"x","acos");return T.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(G(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),qg=A({acosh_:function(r){var t=C(r,"x","acosh");return T.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Kg=A({asin_:function(r){var t=C(r,"x","asin");return T.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(G(1).sub(o.toFloat().square()).sqrt())}}})}}),Xg=A({asinh_:function(r){var t=C(r,"x","asinh");return T.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(G(1).add(o.toFloat().square()).sqrt())}}})}}),Yg=A({atan_:function(r){var t=C(r,"x","atan");return T.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Jg=A({atanh_:function(r){var t=C(r,"x","atanh");return T.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(G(1).sub(o.toFloat().square()))}}})}}),Qg=A({ceil_:function(r){var t=C(r,"x","ceil");return T.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),fs=A({clipByValue_:function(r,t,e){var n=C(r,"x","clipByValue");E(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],a={min:t,max:e};return T.runKernelFunc(function(i,s){var u=i.clip(n,t,e);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),ge(i))}}},"ClipByValue",a,o)}}),Zg=A({cos_:function(r){var t=C(r,"x","cos"),e=[t];return T.runKernelFunc(function(n,o){var a=n.cos(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),em=A({cosh_:function(r){var t=C(r,"x","cosh");return T.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),tm=A({erf_:function(r){var t=C(r,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),T.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Si=A({exp_:function(r){var t=C(r,"x","exp");return T.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),nm=A({expm1_:function(r){var t=C(r,"x","expm1");return T.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),rm=A({floor_:function(r){var t=C(r,"x","floor");return T.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),om=A({log_:function(r){var t=C(r,"x","log"),e=[t];return T.runKernelFunc(function(n,o){var a=n.log(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},e)}}),am=A({log1p_:function(r){var t=C(r,"x","log1p");return T.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),im=A({logSigmoid_:function(r){var t=C(r,"x","logSigmoid");return T.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Go=A({neg_:function(r){var t=C(r,"x","neg"),e=[t];return T.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),sm=A({reciprocal_:function(r){var t=C(r,"x","reciprocal");return T.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),um=A({round_:function(r){var t=C(r,"x","round");return T.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Al=A({rsqrt_:function(r){var t=C(r,"x","rsqrt"),e=[t];return T.runKernelFunc(function(n,o){var a=n.rsqrt(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Dl=A({sigmoid_:function(r){var t=C(r,"x","sigmoid");return T.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(G(1).sub(o)))}}},"Sigmoid")}}),cm=A({sign_:function(r){var t=C(r,"x","sign");return T.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),lm=A({isNaN_:function(r){var t=C(r,"x","isNaN");return T.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),hm=A({isInf_:function(r){var t=C(r,"x","isInf");return T.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),pm=A({isFinite_:function(r){var t=C(r,"x","isFinite");return T.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),fm=A({sin_:function(r){var t=C(r,"x","sin"),e=[t];return T.runKernelFunc(function(n,o){var a=n.sin(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},e)}}),dm=A({sinh_:function(r){var t=C(r,"x","sinh");return T.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),vm=A({softplus_:function(r){var t=C(r,"x","softplus");return T.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),gm=A({sqrt_:function(r){var t=C(r,"x","sqrt");return T.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),mm=A({step_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","step");return T.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return ge(n)}}})}}),ym=A({tan_:function(r){var t=C(r,"x","tan");return T.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),bm=A({tanh_:function(r){var t=C(r,"x","tanh");return T.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return G(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function Tl(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Zr(u,c,l,s,i,a)}function Nl(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Zr(u,c,l,s,i,a)}function Pl(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Zr(u,c,l,s,i,a)}function Zr(r,t,e,n,o,a){a==null&&(a=.001);var i,s,u,c=C(r,"x","batchNorm"),l=C(t,"mean","batchNorm"),h=C(e,"variance","batchNorm");o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var p=[c,l,h,i];return T.runKernelFunc(function(f,d){var g=f.batchNormalization(u,yo(l),yo(h),a,yo(i),yo(s));return d([c,l,h,i]),g},{x:c,mean:l,variance:h,scale:i,offset:s},function(f,d){var g=d,v=g[0],m=g[1],w=g[2],b=g[3],y=b??G(1),x=Ue(m.shape,u.shape),_=[];if(m.rank===1){for(var S=0;S<u.shape.length-1;++S)_.push(u.shape[S]);_.push(1)}var I=v.sub(m),k=f.mul(y),R=Al(w.add(G(a))),N=R.mul(R).mul(R).mul(G(-.5));return{x:function(){return m.rank===1?f.mul(ir(R.as4D(1,1,1,m.shape[0]),_)).mul(y).reshape(v.shape):f.mul(R).mul(y).reshape(v.shape)},mean:function(){var D=R.mul(G(-1)).mul(k);return m.rank===1&&(D=D.sum(x)),D.reshape(m.shape)},variance:function(){var D=N.mul(I).mul(k);return m.rank===1&&(D=D.sum(x)),D.reshape(m.shape)},scale:function(){var D=I.mul(R),L=f.mul(D);return m.rank===1&&(L=L.sum(x)),L.reshape(m.shape)},offset:function(){var D=f;return m.rank===1&&(D=D.sum(x)),D.reshape(m.shape)}}},"BatchNormalization",{varianceEpsilon:a},p).reshape(c.shape)}function yo(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function la(){Kc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var xm=A({batchNormalization2d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),la(),Tl(r,t,e,a,o,n)}}),wm=A({batchNormalization3d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),la(),Nl(r,t,e,a,o,n)}}),_m=A({batchNormalization4d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),la(),Pl(r,t,e,a,o,n)}}),Cm=A({batchNormalization_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),la(),Zr(r,t,e,a,o,n)}}),Fl=A({batchNorm_:Zr}),Em=A({batchNorm2d_:Tl}),km=A({batchNorm3d_:Nl}),Rm=A({batchNorm4d_:Pl}),ha=A({logicalAnd_:function(r,t){var e=C(r,"a","logicalAnd","bool"),n=C(t,"b","logicalAnd","bool");return he(e.shape,n.shape),T.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),Im=A({logicalNot_:function(r){var t=C(r,"x","logicalNot","bool");return T.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Ol=A({logicalOr_:function(r,t){var e=C(r,"a","logicalOr","bool"),n=C(t,"b","logicalOr","bool");return he(e.shape,n.shape),T.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),Sm=A({logicalXor_:function(r,t){var e=C(r,"a","logicalXor","bool"),n=C(t,"b","logicalXor","bool");return he(e.shape,n.shape),Ol(r,t).logicalAnd(ha(r,t).logicalNot())}}),Mn=A({where_:function(r,t,e){var n=C(t,"a","where"),o=C(e,"b","where"),a=C(r,"condition","where","bool");return xe(n.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):xe(a.shape,o.shape,"Error in where: "),T.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return ge(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Ml=function(r){return K(this,void 0,void 0,function(){var t,e,n;return X(this,function(o){switch(o.label){case 0:return[4,(t=C(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=cs(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},ce=A({add_:function(r,t){var e,n=C(r,"a","add"),o=C(t,"b","add");e=Se(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ue(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ue(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Am=A({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,a){return C(o,"tensors"+a,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!Ge(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return T.runKernelFunc(function(o){return o.addN(t)},n,function(o){var a={};return t.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),Dm=A({addStrict_:function(r,t){var e=C(r,"a","addStrict"),n=C(t,"b","addStrict");return xe(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),Tm=A({atan2_:function(r,t){var e,n=C(r,"a","atan2"),o=C(t,"b","atan2");e=Se(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ce(u.square(),c.square()),h=i.mul(c.div(l)),p=Ue(u.shape,a);return p.length>0&&(h=h.sum(p)),h.reshape(u.shape)},$b:function(){var l=ce(u.square(),c.square()),h=Go(i.mul(u.div(l))),p=Ue(c.shape,a);return p.length>0&&(h=h.sum(p)),h.reshape(c.shape)}}})}}),Ct=A({div_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");if(e=Se(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return Bl(n,o);var a=he(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Ue(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Ue(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var p=c.square();return l.div(p.toFloat()).neg()}}},"Div")}}),Nm=A({divNoNan_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");n=(e=Se(n,o))[0],o=e[1];var a=Ct(n,o),i=ge(a),s=o.equal(i);return Mn(s,i,a)}}),Pm=A({divStrict_:function(r,t){var e=C(r,"a","div"),n=C(t,"b","div");return xe(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),Bl=A({floorDiv_:function(r,t){var e,n=C(r,"a","floorDiv"),o=C(t,"b","floorDiv");e=Se(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Ue(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Ue(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var p=c.square();return l.div(p.toFloat()).neg()}}},"FloorDiv")}}),ds=A({maximum_:function(r,t){var e,n=C(r,"a","maximum"),o=C(t,"b","maximum");return e=Se(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),he(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Fm=A({maximumStrict_:function(r,t){var e=C(r,"a","maximumStrict"),n=C(t,"b","maximumStrict");return xe(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),Ll=A({minimum_:function(r,t){var e,n=C(r,"a","minimum"),o=C(t,"b","minimum");return e=Se(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),he(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),Om=A({minimumStrict_:function(r,t){var e=C(r,"a","minimumStrict"),n=C(t,"b","minimumStrict");return xe(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),Mm=A({mod_:function(r,t){var e,n=C(r,"a","mod"),o=C(t,"b","mod");e=Se(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Ue(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),h=Ue(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),Bm=A({modStrict_:function(r,t){var e=C(r,"a","modStrict"),n=C(t,"b","modStrict");return xe(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),nt=A({mul_:function(r,t){var e,n=C(r,"a","mul"),o=C(t,"b","mul");e=Se(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),h=Ue(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Ue(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),Lm=A({mulStrict_:function(r,t){var e=C(r,"a","mul"),n=C(t,"b","mul");return xe(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),jo=A({pow_:function(r,t){var e,n=C(r,"base","pow"),o=C(t,"exp","pow");e=Se(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape),i=[n,o];return T.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var p=l.toFloat(),f=s.mul(p.mul(c.pow(p.sub(G(1))))),d=Ue(c.shape,a);return d.length>0&&(f=f.sum(d)),f.reshape(c.shape)},b:function(){var p=c.greater(0),f=c.log().where(p,ge(c)),d=s.mul(h.mul(f)),g=Ue(l.shape,a);return g.length>0&&(d=d.sum(g)),d.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Wm=A({powStrict_:function(r,t){return xe(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),Um=A({squaredDifferenceStrict_:function(r,t){var e=C(r,"a","squaredDifferenceStrict"),n=C(t,"b","squaredDifferenceStrict");return xe(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),ze=A({sub_:function(r,t){var e,n=C(r,"a","sub"),o=C(t,"b","sub");e=Se(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ue(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ue(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),zm=A({subStrict_:function(r,t){var e=C(r,"a","subStrict"),n=C(t,"b","subStrict");return xe(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),Wl=A({equal_:function(r,t){var e,n=C(r,"a","equal"),o=C(t,"b","equal");return e=Se(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),Vm=A({equalStrict_:function(r,t){var e=C(r,"a","equalStrict"),n=C(t,"b","equalStrict");return xe(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),$m=A({greater_:function(r,t){var e,n=C(r,"a","greater"),o=C(t,"b","greater");return e=Se(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),Ul=A({greaterEqual_:function(r,t){var e,n=C(r,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=Se(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return ge(s)},b:function(){return ge(u)}}},"GreaterEqual")}}),Hm=A({greaterEqualStrict_:function(r,t){var e=C(r,"a","greaterEqualStrict"),n=C(t,"b","greaterEqualStrict");return xe(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),Gm=A({greaterStrict_:function(r,t){var e=C(r,"a","greaterStrict"),n=C(t,"b","greaterStrict");return xe(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),jm=A({less_:function(r,t){var e,n=C(r,"a","less"),o=C(t,"b","less");return e=Se(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),qm=A({lessEqual_:function(r,t){var e,n=C(r,"a","lessEqual"),o=C(t,"b","lessEqual");return e=Se(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),Km=A({lessEqualStrict_:function(r,t){var e=C(r,"a","lessEqualStrict"),n=C(t,"b","lessEqualStrict");return xe(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),Xm=A({lessStrict_:function(r,t){var e=C(r,"a","lessStrict"),n=C(t,"b","lessStrict");return xe(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),Ym=A({notEqual_:function(r,t){var e,n=C(r,"a","notEqual"),o=C(t,"b","notEqual");return e=Se(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),Jm=A({notEqualStrict_:function(r,t){var e=C(r,"a","notEqualStrict"),n=C(t,"b","notEqualStrict");return xe(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function Yu(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function Ju(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var vs=A({gather_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","gather"),o=C(t,"indices","gather","int32");e=Ve(e,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],h=1,p=1,f=0;f<u;f++)l.push(i.shape[f]),h*=i.shape[f];for(f=0;f<s.rank;f++)l.push(s.shape[f]);for(f=u+1;f<i.rank;f++)l.push(i.shape[f]),p*=i.shape[f];return{batchSize:h,sliceSize:p,dimSize:c,outputShape:l}}(n,o,e);return T.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,h=c.slice(0,e),p=h.length,f=c.slice(e,c.length).slice(1),d=f.length,g=Yu(0,p),v=Yu(p+1,p+1+d),m=Ju([h,[l],f]),w=i.reshape(m),b=u.reshape([l]),y=Ju([[p],g,v]),x=w.transpose(y),_=zl(x,b,n.shape[e]),S=ts(y);return _=_.transpose(S)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),zl=A({unsortedSegmentSum_:function(r,t,e){var n=C(r,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return E(Fe(e),function(){return"numSegments must be of dtype int"}),T.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,e);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=ds(c,ge(c)),h=vs(u,l),p=Ul(c,G(0,"int32")),f=h.rank-p.rank,d=0;d<f;++d)p=yt(p,d+1);p=ha(p,Er(h.shape,"bool"));var g=ge(h);return Mn(p,h,g)}(a,s)}}})}}),Qm=function(r,t,e){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,p,f,d,g;return X(this,function(v){switch(v.label){case 0:for(n=C(r,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),a=e??0,i=o.rank,s=n.shape,E(i>0,function(){return"mask cannot be scalar"}),xe(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),h=n.reshape(l),p=o.reshape([-1]),[4,Ml(p)];case 1:return f=v.sent(),d=f.squeeze([1]),g=vs(h,d,a),r!==n&&n.dispose(),t!==o&&o.dispose(),d.dispose(),h.dispose(),p.dispose(),f.dispose(),[2,g]}})})};function Vl(r,t,e,n,o,a,i){a===void 0&&(a="NHWC"),E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],h=a==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(h===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&E(Fe(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var p=is(a),f=Vn(s,e.shape,n,1,o,i,!1,p),d=T.runKernelFunc(function(g,v){var m=g.conv2dDerInput(u,e,f);return v([e,u]),m},{dy4D:u,filter:e},function(g,v){var m=v[0],w=v[1];return{dy4D:function(){return _t(g,m,n,o,a,1,i)},filter:function(){return gs(g,w,m.shape,n,o,a,i)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function ei(r){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function $l(r,t,e,n,o){E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=$o(a,e.shape,n,1,o),h=T.runKernelFunc(function(p){return p.conv3dDerInput(i,e,l)},{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var Zm=A({conv1d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=C(r,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Fe(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(ct(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),p=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),f=_t(p,h,[1,e],n,"NHWC",[1,a],i);return l?f.as2D(f.shape[2],f.shape[3]):f.as3D(f.shape[0],f.shape[2],f.shape[3])}}),_t=A({conv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=C(r,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Fe(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=o==="NHWC"?c.shape[3]:c.shape[1];E(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),E(ct(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var p=is(o),f=Vn(c.shape,u.shape,e,a,n,i,!1,p),d=[u,c],g=T.runKernelFunc(function(v,m){var w=v.conv2d(c,u,f);return m([u,c]),w},{x:c,filter:u},function(v,m){var w=m,b=w[0],y=w[1];return E(xr(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return Hl(y.shape,v,b,e,n,o)},filter:function(){return gs(y,v,b.shape,e,n,o)}}},"Conv2D",f,d);return l?g.as3D(g.shape[1],g.shape[2],g.shape[3]):g}}),e0=A({conv3d_:function(r,t,e,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=C(r,"x","conv3d"),s=C(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(p,f){return ei(p)||ei(f)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=$o(u.shape,s.shape,e,a,n),h=T.runKernelFunc(function(p,f){var d=p.conv3d(u,s,l);return f([u,s]),d},{x:u,$filter:s},function(p,f){E(ei(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var d=f[0],g=f[1];return{x:function(){return $l(d.shape,p,g,e,n)},$filter:function(){return function(v,m,w,b,y){var x=v;v.rank===4&&(x=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var _=m;_.rank===4&&(_=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3])),E(x.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+x.shape+"."}),E(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),E(w.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+w+"."}),E(x.shape[4]===w[3],function(){return"Error in conv3dDerFilter: depth of input "+x.shape[4]+") must match input depth in filter ("+w[3]+"."}),E(_.shape[4]===w[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+w[4]+")."});var S=$o(x.shape,w,b,1,y);return T.runKernelFunc(function(I){return I.conv3dDerFilter(x,_,S)},{x5D:x,dy5D:_})}(d,p,g.shape,e,n)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),gs=A({conv2dDerFilter_:function(r,t,e,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&E(Fe(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=is(a),p=Vn(s.shape,e,n,1,o,i,!1,h);return T.runKernelFunc(function(f){return f.conv2dDerFilter(s,u,p)},{x4D:s,dy4D:u})}}),Hl=A({conv2dDerInput_:Vl}),pa=A({depthwiseConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]);var s=C(r,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),E(ct(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&E(Fe(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=Vn(c.shape,u.shape,e,a,n,i,!0),p=[c,u],f=T.runKernelFunc(function(d,g){var v=d.depthwiseConv2D(c,u,h);return g([c,u]),v},{x:c,filter:u},function(d,g){E(xr(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=g[0],m=g[1];return{x:function(){return Gl(v.shape,d,m,h)},filter:function(){return jl(v,d,m.shape,h)}}},"DepthwiseConv2dNative",h,p);return l?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}}),Gl=A({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=T.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),jl=A({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),T.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),ms=A({separableConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=C(r,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var p=u.shape[2],f=u.shape[3];E(c.shape[2]===p*f,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+p*f+", but got "+c.shape[2]+"."});var d=pa(l,u,n,o,i,a),g=_t(d,c,1,"valid",i);return h?g.as3D(g.shape[1],g.shape[2],g.shape[3]):g}}),t0=A({conv2dTranspose_:function(r,t,e,n,o,a){return Vl(e,C(r,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),n0=A({conv3dTranspose_:function(r,t,e,n,o){return $l(e,C(r,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),n,o)}}),fa=A({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var a=C(r,"a","matMul"),i=C(t,"b","matMul");o=Se(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),p=i.shape.slice(0,-2),f=Y(h),d=Y(p);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),E(Ge(h,p),function(){return"Error in matMul: outer dimensions ("+h+") and ("+p+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var g=a.shape.slice(0,-2).concat([c,l]),v=e?a.as3D(f,s,c):a.as3D(f,c,s),m=n?i.as3D(d,l,u):i.as3D(d,u,l),w={transposeA:e,transposeB:n};return T.runKernelFunc(function(b,y){var x=b.batchMatMul(v,m,e,n);return y([v,m]),x},{a:v,b:m},function(b,y){var x=y,_=x[0],S=x[1];return e||n?!e&&n?{a:function(){return b.matMul(S,!1,!1)},b:function(){return b.matMul(_,!0,!1)}}:e&&!n?{a:function(){return S.matMul(b,!1,!0)},b:function(){return _.matMul(b,!1,!1)}}:{a:function(){return S.matMul(b,!0,!0)},b:function(){return b.matMul(_,!0,!0)}}:{a:function(){return b.matMul(S,!1,!0)},b:function(){return _.matMul(b,!0,!1)}}},"BatchMatMul",w).reshape(g)}}),r0=A({dot_:function(r,t){var e=C(r,"t1","dot"),n=C(t,"t2","dot");E(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=n.rank===1?n.size:n.shape[0];return E(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),o0=A({outerProduct_:function(r,t){var e=C(r,"v1","outerProduct"),n=C(t,"v2","outerProduct");return E(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),eo=A({reverse_:function(r,t){var e=C(r,"x","reverse");if(e.rank===0)return e.clone();var n=Ve(t,e.shape);return T.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),a0=A({reverse1d_:function(r){var t=C(r,"x","reverse");return E(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),eo(t,0)}}),i0=A({reverse2d_:function(r,t){var e=C(r,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),eo(e,t)}}),s0=A({reverse3d_:function(r,t){var e=C(r,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),eo(e,t)}}),u0=A({reverse4d_:function(r,t){var e=C(r,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),eo(e,t)}});function ql(r,t,e,n,o,a){var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(ct(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),a!=null&&E(Fe(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=zr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ge(c.inShape,c.outShape))return i.clone();var l=[s],h=T.runKernelFunc(function(p,f){var d=p.maxPool(s,c);return f([s,d]),d},{x:s},function(p,f){var d=f[0],g=f[1];return{x:function(){return function(v,m,w,b,y,x,_,S){var I=C(v,"dy","maxPoolBackprop"),k=C(m,"input","maxPoolBackprop"),R=C(w,"output","maxPoolBackprop");E(k.rank===I.rank,function(){return"Rank of input ("+k.rank+") does not match rank of dy ("+I.rank+")"}),E(ct(y,x),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+x+"'"}),E(I.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+I.rank+"."}),E(k.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+k.rank+"."});var N=zr(k.shape,b,y,x,_,S);return T.runKernelFunc(function(D){return D.maxPoolBackprop(I,k,R,N)},{$dy:I,$input:k})}(p,d,g,t,e,n,o)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function Kl(r,t,e,n,o,a){var i=C(r,"x","avgPool","float32");E(ct(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&E(Fe(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=zr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ge(c.inShape,c.outShape))return i.clone();var l=T.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(p,f,d,g,v,m){var w=C(p,"dy","avgPoolBackprop"),b=C(f,"input","avgPoolBackprop");E(b.rank===w.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+w.rank+")"}),E(ct(g,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+g+" and dilations '"+v+"'"});var y=b,x=w,_=!1;b.rank===3&&(_=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),x=w.as4D(1,w.shape[0],w.shape[1],w.shape[2])),E(x.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+x.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var S=zr(y.shape,d,g,v,m),I=T.runKernelFunc(function(k){return k.avgPoolBackprop(x,y,S)},{dy4D:x,input4D:y});return _?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}(h,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var $e=A({maxPool_:function(r,t,e,n,o){return ql(r,t,e,1,n,o)}}),to=A({avgPool_:function(r,t,e,n,o){return Kl(r,t,e,1,n,o)}}),c0=A({pool_:function(r,t,e,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(ct(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=zr(s.shape,t,a,o,n),h=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,x){var _=y.map(function(k,R){return k+(k-1)*(x[R]-1)}).map(function(k){return k-1}),S=_.map(function(k){return Math.floor(k/2)}),I=_.map(function(k,R){return k-S[R]});return _.map(function(k,R){return[S[R],I[R]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var p=h[0]===1&&h[1]===1,f=function(y,x,_){var S=_.map(function(M){return M[0]}),I=_.map(function(M){return M[1]}),k=y.concat(S,I),R=x.map(function(M,B){return(M-k[B]%M)%M}),N=I.map(function(M,B){return M+R[B]}),D=x.map(function(M,B){return[S[B],N[B]]}),L=x.map(function(M,B){return[0,R[B]]});return[D,L]}([l.inHeight,l.inWidth],h,c),d=f[0],g=f[1],v=p?n:"valid",m=p?s:el(s,h,d),w=(e==="avg"?function(){return Kl(m,t,a,1,v)}:function(){return ql(m,t,a,1,v)})(),b=p?w:Jc(w,h,g);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),l0=A({maxPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(ct(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Fe(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Vo(u.shape,t,e,i,n,o,a),h=T.runKernelFunc(function(p,f){var d=p.maxPool3d(u,l);return f([u,d]),d},{x:u},function(p,f){var d=f[0],g=f[1];return{x:function(){return function(v,m,w,b,y,x,_,S){var I=C(v,"dy","maxPool3dBackprop"),k=C(m,"input","maxPool3dBackprop"),R=C(w,"output","maxPool3dBackprop"),N=I,D=k,L=R,M=!1;k.rank===4&&(M=!0,N=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),D=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),L=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3])),E(N.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+N.rank+"."}),E(D.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+D.rank+"."}),E(L.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."}),x==null&&(x=[1,1,1]),E(ct(y,x),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+x+"'"}),S!=null&&E(Fe(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+_+"."});var B=Vo(D.shape,b,y,x,_,S),z=T.runKernelFunc(function(U){return U.maxPool3dBackprop(N,D,L,B)},{dy5D:N,input5D:D});return M?z.as4D(z.shape[1],z.shape[2],z.shape[3],z.shape[4]):z}(p,d,g,t,e,i,n,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),h0=A({avgPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(ct(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Fe(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Vo(u.shape,t,e,i,n,o,a),h=T.runKernelFunc(function(p){return p.avgPool3d(u,l)},{x:u},function(p){return{x:function(){return function(f,d,g,v,m,w,b){var y=C(f,"dy","avgPool3dBackprop"),x=C(d,"input","avgPool3dBackprop"),_=y,S=x,I=!1;x.rank===4&&(I=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),S=x.as5D(1,x.shape[0],x.shape[1],x.shape[2],x.shape[3])),E(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),E(S.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+S.rank+"."}),m==null&&(m=[1,1,1]),E(ct(v,m),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"}),b!=null&&E(Fe(w),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+w+"."});var k=Vo(S.shape,g,v,m,w,b),R=T.runKernelFunc(function(N){return N.avgPool3dBackprop(_,S,k)},{dy5D:_,input5D:S});return I?R.as4D(R.shape[1],R.shape[2],R.shape[3],R.shape[4]):R}(p,u,t,e,i,n,o)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Ut=A({slice_:function(r,t,e){var n,o,a=C(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),Wd(a,n,o);var i=a.shape,s={begin:n,size:o};return T.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),p0=A({slice1d_:function(r,t,e){var n=C(r,"x","slice1d");return E(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Ut(n,[t],[e])}}),f0=A({slice2d_:function(r,t,e){var n=C(r,"x","slice2d");return E(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Ut(n,t,e)}}),Xl=A({slice3d_:function(r,t,e){var n=C(r,"x","slice3d");return E(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Ut(n,t,e)}}),d0=A({slice4d_:function(r,t,e){var n=C(r,"x","slice4d");return E(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Ut(n,t,e)}});function Yl(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(ut(t.shape,n))),r.rank<e.rank&&(r=r.reshape(ut(r.shape,n))),{x:function(){var a=r.mul(e.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var v0=A({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","all","bool"),o=Ve(t,n.shape),a=o,i=Ht(a,n.rank);i!=null&&(n=n.transpose(i),a=Gt(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(e){var u=ut(s.shape,o);return s.reshape(u)}return s}}),g0=A({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","any","bool"),o=Ve(t,n.shape),a=o,i=Ht(a,n.rank);i!=null&&(n=n.transpose(i),a=Gt(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(e){var u=ut(s.shape,o);return s.reshape(u)}return s}}),m0=A({argMax_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMax");t==null&&(t=0);var n=Ve(t,e.shape),o=Ht(n,e.rank);o!=null&&(e=e.transpose(o),n=Gt(n.length,e.rank));var a={axis:n[0]},i=[e];return T.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return ge(c)}}},"ArgMax",a,i)}}),y0=A({argMin_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMin");t==null&&(t=0);var n=Ve(t,e.shape),o=Ht(n,e.rank);return o!=null&&(e=e.transpose(o),n=Gt(n.length,e.rank)),T.runKernelFunc(function(a,i){var s=a.argMin(e,n[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return ge(s)}}})}}),b0=A({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","logSumExp"),o=Ve(t,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=ut(s.shape,o);return s.reshape(u)}return s}}),da=A({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","max"),o=n,a=Ve(t,n.shape),i=a,s=Ht(i,n.rank);s!=null&&(n=n.transpose(s),i=Gt(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,p){var f=h.max(n,i);return p([o,f]),f},{x:n},function(h,p){return Yl(h,p[1],p[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=ut(c.shape,a);c=c.reshape(l)}return c}}),x0=A({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","mean"),o=Ve(t,n.shape),a=Y(Qe(n.shape,o)[1]);return ca(function(i){var s=G(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Er(i.shape,"float32")).div(a)}}})(n)}}),w0=A({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","min"),o=n,a=Ve(t,n.shape),i=a,s=Ht(i,n.rank);s!=null&&(n=n.transpose(s),i=Gt(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,p){var f=h.min(n,i);return p([o,f]),f},{x:n},function(h,p){return Yl(h,p[1],p[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=ut(c.shape,a);c=c.reshape(l)}return c}}),_0=A({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=Ve(t,(r=C(r,"x","moments")).shape),o=r.mean(n,e),a=o.shape;e||(a=ut(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,e)}}}),Jl=A({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=Ve(t,n.shape);return ca(function(a){var i=Ht(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=Gt(s.length,a.rank));var c=function(f){var d=a.shape.slice();return o.forEach(function(g){d[g]=1}),f.reshape(d).mul(Er(a.shape,"float32"))},l={axes:s},h=T.runKernelFunc(function(f){return f.sum(u,s)},{x:u},function(f){return{x:function(){return c(f)}}},"Sum",l);if(e){var p=ut(h.shape,o);h=h.reshape(p)}return{value:h,gradFunc:c}})(n)}}),C0=A({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=Ve(t,n.shape),a=Ht(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=Gt(i.length,n.rank));var u=T.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=ut(u.shape,o);u=u.reshape(c)}return u}}),Ql=A({elu_:function(r){var t=C(r,"x","elu");return T.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return T.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),E0=A({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=C(r,"x","leakyRelu");return ds(G(t).mul(e),e)}}),Zl=A({prelu_:function(r,t){var e=C(r,"x","prelu"),n=C(t,"alpha","prelu");return T.runKernelFunc(function(o,a){var i=o.prelu(e,n);return a([e,n]),i},{x:e,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return Mn(u,o,o.mul(s))},alpha:function(){var c=Mn(u,ge(o),o.mul(i)),l=Ue(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Ie=A({relu_:function(r){var t=C(r,"x","relu");return t.dtype==="bool"?t.toInt():T.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),eh=A({relu6_:function(r){var t=C(r,"x","relu6");return t.dtype==="bool"?t.toInt():T.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),k0=A({selu_:function(r){var t=C(r,"x","selu");return T.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var a=o.greater(G(0)),i=G(hs),s=G(ps),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return Mn(a,u,c)}}})}}),xn=A({transpose_:function(r,t){var e=C(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,a){return a}).reverse()),E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){E(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return T.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var a=ts(t);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),R0=A({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=C(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),E(Fe(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=T.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(i,t,e,n,o);return l([i,h]),h},{x4D:i},function(c,l){var h=l[0],p=l[1];return{x4D:function(){return T.runKernelFunc(function(f){return f.LRNGrad(c,h,p,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),th=A({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(G(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=C(r,"x","norm"),t,e),a=o.shape;if(n){var i=Ve(e,r.shape);a=ut(o.shape,i)}return o.reshape(a)}}),I0=A({basicLSTMCell_:function(r,t,e,n,o,a){var i=C(r,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(n,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),h=C(a,"h","basicLSTMCell"),p=c.concat(h,1).matMul(s).add(u),f=p.shape[0],d=p.shape[1]/4,g=[f,d],v=p.slice([0,0],g),m=p.slice([0,d],g),w=p.slice([0,2*d],g),b=p.slice([0,3*d],g),y=v.sigmoid().mulStrict(m.tanh()).addStrict(l.mulStrict(i.add(w).sigmoid())),x=y.tanh().mulStrict(b.sigmoid());return[y,x]}}),S0=A({multiRNNCell_:function(r,t,e,n){for(var o=C(t,"data","multiRNNCell"),a=Mo(e,"c","multiRNNCell"),i=Mo(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],p=[];for(c=0;c<u.length;c+=2)h.push(u[c]),p.push(u[c+1]);return[h,p]}}),A0=A({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var a=C(r,"v","movingAverage"),i=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");Rf(a,i),E(Ge(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=G(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(n!=null,function(){return"When using zeroDebias: true, step is required."});var h=C(n,"step","movingAverage");l=l.div(u.sub(jo(s,h)))}return a.add(l)}}),D0=A({stridedSlice_:function(r,t,e,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=C(r,"x","stridedSlice"),l=Du(s),h=c.shape.slice();l.forEach(function(v){t[v]=0,e[v]=1,h.splice(v,0,1)}),c=c.reshape(h);for(var p=0;p<c.rank;p++)t[p]=Ud(o,t,n,c.shape,p),e[p]=zd(a,e,n,c.shape,p),n[p]=n[p]||1;var f=Du(u);f.forEach(function(v){e[v]=t[v]+1,n[v]=1});var d=as(t,e,n),g=d.filter(function(v,m){return f.indexOf(m)===-1});return n.every(function(v){return v===1})?Ut(c,t,d).reshape(g):T.runKernelFunc(function(v){return v.stridedSlice(c,t,e,n)},{$x:c}).reshape(g)}}),T0=A({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=C(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=T.runKernelFunc(function(i){return i.topk(n,t,e)},{$x:n});return{values:a[0],indices:a[1]}}}),N0=A({scatterND_:function(r,t,e){var n=C(r,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return Ld(o,n,e),T.runKernelFunc(function(a){return a.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),ys=A({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),qo=A({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),bs=A({rfft_:function(r,t){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var a=r.shape.map(function(m){return 0}),i=r.shape.map(function(m){return m});i[r.shape.length-1]=t,e=r.slice(a,i),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(m){return m});s[r.shape.length-1]=t-n,e=r.concat(Ce(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=Ke(e,u).as2D(o,n),l=ys(c),h=Math.floor(n/2)+1,p=bt(l),f=Ot(l),d=p.split([h,n-h],p.shape.length-1),g=f.split([h,n-h],f.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=h,Ke(d[0],g[0]).reshape(v)}}),nh=A({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=qo(n);return bt(o)}var a=[e,2*(t-1)],i=bt(r).as2D(e,t),s=Ot(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(G(-1)),l=i.concat(u,1),h=s.concat(c,1);return n=Ke(l,h).as2D(a[0],a[1]),o=qo(n),bt(o)}}),P0=Object.freeze({fft:ys,ifft:qo,rfft:bs,irfft:nh}),F0=A({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=C(r,"sparseIndices","sparseToDense","int32"),a=C(t,"sparseValues","sparseToDense"),i=C(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,p=s.rank>1?s.shape[1]:1;if(c.length!==p)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+p+".");var f=u.size;if(u.rank!==0&&(u.rank!==1||f!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),T.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),O0=A({gatherND_:function(r,t){var e=C(t,"indices","gatherND","int32"),n=C(r,"x","gatherND");return T.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),M0=A({diag_:function(r){var t=C(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return T.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),B0=A({dropout_:function(r,t,e,n){var o=C(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof Re?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Ge(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(o,e),i=1-t,s=Zc(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function rh(r,t,e){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=t-e*Math.cos(i)}return Me(o,"float32")}var xs=A({hannWindow_:function(r){return rh(r,.5,.5)}}),oh=A({hammingWindow_:function(r){return rh(r,.54,.46)}}),ws=A({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(Ut(r,a,t)),a+=e;if(n)for(;a<r.size;){var s=a+t-r.size,u=Le([Ut(r,a,t-s),Wt([s],o)]);i.push(u),a+=e}return i.length===0?mn([],[0,t]):Le(i).as2D(i.length,t)}}),ah=A({stft_:function(r,t,e,n,o){var a;o===void 0&&(o=xs),n==null&&(a=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=ws(r,t,e),s=nt(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(bs(s.slice([c,0],[1,t]),n));return Le(u)}}),L0=Object.freeze({hannWindow:xs,hammingWindow:oh,frame:ws,stft:ah}),tt,W0=function(r,t,e){return e===void 0&&(e=1),K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,p,f,d,g,v;return X(this,function(m){switch(m.label){case 0:return n=C(r,"predictions","inTopK"),o=C(t,"targets","inTopK"),E(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),E(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),xe(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],E(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,n.data()];case 1:return i=m.sent(),[4,o.data()];case 2:for(s=m.sent(),u=[i.length/a,a],l=u[1],h=Lr("bool",c=u[0]),p=0;p<c;p++){for(f=p*l,d=i.subarray(f,f+l),g=[],v=0;v<d.length;v++)g.push({value:d[v],index:v});for(g.sort(function(w,b){return b.value-w.value}),h[p]=0,v=0;v<e;v++)if(g[v].index===s[p]){h[p]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,Ye(h,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(tt||(tt={}));var U0=A({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=tt.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","absoluteDifference"),a=C(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=C(e,"weights","absoluteDifference")),xe(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return rn(s,i,n)}}),rn=A({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=tt.SUM_BY_NONZERO_WEIGHTS);var n=C(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(e===tt.NONE)return a;if(e===tt.SUM)return a.sum();if(e===tt.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(G(i)):s}if(e===tt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(G(n.size));var u=o.mul(Er(n.shape)).notEqual(G(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),z0=A({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=tt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","cosineDistance"),i=C(t,"predictions","cosineDistance"),s=null;n!=null&&(s=C(n,"weights","cosineDistance")),xe(a.shape,i.shape,"Error in cosineDistance: ");var u=G(1).sub(a.mul(i).sum(e,!0));return rn(u,s,o)}}),V0=A({hingeLoss_:function(r,t,e,n){n===void 0&&(n=tt.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","hingeLoss"),a=C(t,"predictions","hingeLoss"),i=null;e!=null&&(i=C(e,"weights","hingeLoss")),xe(o.shape,a.shape,"Error in hingeLoss: ");var s=G(1);o=G(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return rn(u,i,n)}}),$0=A({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=tt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","huberLoss"),i=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),xe(a.shape,i.shape,"Error in huberLoss: ");var u=G(n),c=i.sub(a).abs(),l=Ll(c,u),h=c.sub(l),p=G(.5).mul(l.square()).add(u.mul(h));return rn(p,s,o)}}),H0=A({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=tt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","logLoss"),i=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),xe(a.shape,i.shape,"Error in logLoss: ");var u=G(1),c=G(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return rn(l,s,o)}}),G0=A({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=tt.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","meanSquaredError"),a=C(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=C(e,"weights","meanSquaredError")),xe(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return rn(s,i,n)}}),j0=A({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=tt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"multiClassLabels","sigmoidCrossEntropy"),i=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),xe(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=G(n),c=G(1),l=G(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var h=function(p,f){var d=C(p,"labels","sigmoidCrossEntropyWithLogits"),g=C(f,"logits","sigmoidCrossEntropyWithLogits");xe(d.shape,g.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=g.relu(),m=g.mul(d),w=g.abs().neg().exp().log1p();return v.sub(m).add(w)}(a,i);return rn(h,s,o)}}),q0=A({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=tt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"onehotLabels","softmaxCrossEntropy"),i=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),xe(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=G(n),c=G(1),l=G(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var h=function(p,f,d){if(d===void 0&&(d=-1),d===-1&&(d=f.rank-1),d!==f.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+f.rank+" and dim was "+d);return ca(function(g,v,m){var w=v.logSumExp([d],!0),b=v.toFloat().sub(w);return m([g,b]),{value:b.mul(g).neg().sum([d]),gradFunc:function(y,x){var _=x[0],S=x[1],I=ut(y.shape,[d]);return[y.reshape(I).mul(_.toFloat().sub(S.exp())),y.reshape(I).mul(S.exp().sub(_.toFloat()))]}}})(p,f)}(a,i);return rn(h,s,o)}}),K0=Object.freeze({get Reduction(){return tt},absoluteDifference:U0,computeWeightedLoss:rn,cosineDistance:z0,hingeLoss:V0,huberLoss:$0,logLoss:H0,meanSquaredError:G0,sigmoidCrossEntropy:j0,softmaxCrossEntropy:q0});function Qu(r,t){return t===void 0&&(t=!1),T.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=Qc(e),a=r.clone(),i=mn([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(h){var p,f=a,d=s,g=o;p=T.tidy(function(){var v=a.slice([h,h],[e-h,1]),m=v.norm(),w=a.slice([h,h],[1,1]),b=mn([[-1]]).where(w.greater(0),mn([[1]])),y=w.sub(b.mul(m)),x=v.div(y);s=x.shape[0]===1?i.clone():i.concat(x.slice([1,0],[x.shape[0]-1,x.shape[1]]),0);var _=b.matMul(y).div(m).neg(),S=a.slice([h,0],[e-h,n]),I=_.mul(s);if(h===0)a=S.sub(I.matMul(s.transpose().matMul(S)));else{var k=S.sub(I.matMul(s.transpose().matMul(S)));a=a.slice([0,0],[h,n]).concat(k,0)}var R=o.slice([0,h],[e,o.shape[1]-h]);if(h===0)o=R.sub(R.matMul(s).matMul(I.transpose()));else{var N=R.sub(R.matMul(s).matMul(I.transpose()));o=o.slice([0,0],[e,h]).concat(N,1)}return[s,a,o]}),s=p[0],a=p[1],o=p[2],st([f,d,g])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),a=a.slice([0,0],[n,n])),[o,a]})}var X0=A({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=C(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=Bo(0,i,1,"int32").reshape([-1,1]),c=Bo(0,s,1,"int32"),l=ze(u,c),h=ha(l.lessEqual(G(+t,"int32")),l.greaterEqual(G(-e,"int32"))),p=Ce([i,s],n.dtype);return gt(We(n.reshape([-1,i,s])).map(function(f){return Mn(h,f,p)})).reshape(o)}}),Y0=A({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){E(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=rs(r,r.shape[0],0).map(function(u){return tl(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(T.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var h=Jl(a[l].mulStrict(c)).mul(a[l]);c=c.sub(h)}return c.div(th(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?gt(a,0):a}}),J0=A({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return Qu(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=We(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=Qu(i,t),u=s[0],c=s[1];o.push(u),a.push(c)}),[gt(o,0).reshape(r.shape),gt(a,0).reshape(r.shape)]}}),Q0=Object.freeze({bandPart:X0,gramSchmidt:Y0,qr:J0});function va(r,t,e,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),E(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(t.rank===1,function(){return"scores must be a 1D tensor"}),E(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),E(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var Z0=A({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return T.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),ey=A({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),E(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return T.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),ty=A({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=C(r,"boxes","nonMaxSuppression"),i=C(t,"scores","nonMaxSuppression"),s=va(a,i,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return T.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),ny=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),K(this,void 0,void 0,function(){var a,i,s,u,c,l,h;return X(this,function(p){switch(p.label){case 0:return a=C(r,"boxes","nonMaxSuppressionAsync"),i=C(t,"scores","nonMaxSuppressionAsync"),s=va(a,i,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=p.sent(),c=u[0],l=u[1],h=ss(c,l,e,n,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,h]}})})},ry=A({nonMaxSuppressionWithScore_:function(r,t,e,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=C(r,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=va(i,s,e,n,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=T.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),oy=function(r,t,e,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),K(this,void 0,void 0,function(){var i,s,u,c,l,h,p;return X(this,function(f){switch(f.label){case 0:return i=C(r,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=va(i,s,e,n,o,a),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=f.sent(),l=c[0],h=c[1],p=us(l,h,e,n,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,p]}})})},ay=A({cropAndResize_:function(r,t,e,n,o,a){var i=C(r,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),E(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),T.runKernelFunc(function(l,h){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),_s=Object.freeze({resizeBilinear:Z0,resizeNearestNeighbor:ey,nonMaxSuppression:ty,nonMaxSuppressionAsync:ny,nonMaxSuppressionWithScore:ry,nonMaxSuppressionWithScoreAsync:oy,cropAndResize:ay}),Cs=function(r,t){return!(r>0)||t==="linear"},Es=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},ks=function(r,t){var e=t,n=Ue(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},Rs=function(r,t,e){if(t==="linear")return r;if(t==="relu")return Ie(r);if(t==="elu")return Ql(r);if(t==="relu6")return eh(r);if(t==="prelu")return Zl(r,e);throw new Error("Unknown fused activation "+t+".")},iy=A({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(Cs(T.state.gradientDepth,l)===!1){var p=fa(e,n,a,s);return u!=null&&(p=ce(p,u)),Rs(p,l,h)}var f=C(e,"a","fused matMul"),d=C(n,"b","fused matMul");t=Se(f,d),f=t[0],d=t[1];var g=a?f.shape[f.rank-2]:f.shape[f.rank-1],v=s?d.shape[d.rank-1]:d.shape[d.rank-2],m=a?f.shape[f.rank-1]:f.shape[f.rank-2],w=s?d.shape[d.rank-2]:d.shape[d.rank-1],b=f.shape.slice(0,-2),y=d.shape.slice(0,-2),x=Y(b),_=Y(y);E(f.rank>=2&&d.rank>=2&&f.rank===d.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+f.rank+" and "+d.rank+"."}),E(Ge(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+f.shape+" and "+d.shape+" must match."}),E(g===v,function(){return"Error in fused matMul: inner shapes ("+g+") and ("+v+") of Tensors with shapes "+f.shape+" and "+d.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var S,I,k=f.shape.slice(0,-2).concat([m,w]),R=a?f.as3D(x,g,m):f.as3D(x,m,g),N=s?d.as3D(_,w,v):d.as3D(_,v,w);u!=null&&he(k,(S=Se(S=C(u,"bias","fused matMul"),f)[0]).shape),h!=null&&(I=C(h,"prelu weights","fused matMul"));var D={a:R,b:N};u!=null&&(D.bias=S),h!=null&&(D.preluActivationWeights=I);var L=[R,N];return T.runKernelFunc(function(M,B){var z=M.fusedBatchMatMul({a:R,b:N,transposeA:a,transposeB:s,bias:S,activation:l,preluActivationWeights:I});return B([R,N,z]),z},D,function(M,B){var z=B[0],U=B[1],W=B[2],$=Es(M,W,l),H={};return u!=null&&(H={bias:function(){return ks(S,$)}}),Object.assign(a||s?!a&&s?{a:function(){return $.matMul(U,!1,!1)},b:function(){return $.matMul(z,!0,!1)}}:a&&!s?{a:function(){return U.matMul($,!1,!0)},b:function(){return z.matMul($,!1,!1)}}:{a:function(){return U.matMul($,!0,!0)},b:function(){return $.matMul(z,!0,!0)}}:{a:function(){return $.matMul(U,!1,!0)},b:function(){return z.matMul($,!0,!1)}},H)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},L,[!0]).reshape(k)}}),sy=A({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,p=h===void 0?"linear":h,f=r.preluActivationWeights;if(p=p||"linear",Cs(T.state.gradientDepth,p)===!1){var d=_t(t,e,n,o,i,u,c);return l!=null&&(d=ce(d,l)),Rs(d,p,f)}var g=C(t,"x","conv2d"),v=C(e,"filter","conv2d"),m=g,w=!1;g.rank===3&&(w=!0,m=g.as4D(1,g.shape[0],g.shape[1],g.shape[2])),E(m.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+m.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(Fe(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(m.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+m.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(ct(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,y,x=Vn(m.shape,v.shape,n,u,o,c);l!=null&&(b=Se(b=C(l,"bias","fused conv2d"),g)[0],he(x.outShape,b.shape)),f!=null&&(y=C(f,"prelu weights","fused conv2d"));var _={x:m,filter:v};l!=null&&(_.bias=b),f!=null&&(_.preluActivationWeights=y);var S=[v,m],I=T.runKernelFunc(function(k,R){var N=k.fusedConv2d({input:m,filter:v,convInfo:x,bias:b,activation:p,preluActivationWeights:y});return R([v,m,N]),N},_,function(k,R){var N=R,D=N[0],L=N[1],M=N[2],B=Es(k,M,p);E(xr(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var z={};return l!=null&&(z={bias:function(){return ks(b,B)}}),Object.assign({x:function(){return Hl(L.shape,B,D,n,o)},filter:function(){return gs(L,B,D.shape,n,o)}},z)},"FusedConv2D",{convInfo:x,activation:p},S,[!0]);return w?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),uy=A({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,p=h===void 0?"linear":h,f=r.preluActivationWeights;if(Cs(T.state.gradientDepth,p)===!1){var d=pa(t,e,n,o,i,u,c);return l!=null&&(d=ce(d,l)),Rs(d,p,f)}var g=C(t,"x","depthwiseConv2d"),v=C(e,"filter","depthwiseConv2d"),m=g,w=!1;g.rank===3&&(w=!0,m=g.as4D(1,g.shape[0],g.shape[1],g.shape[2])),E(m.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+m.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(m.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+m.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(ct(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&E(Fe(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,y,x=Vn(m.shape,v.shape,n,u,o,c,!0);l!=null&&(b=Se(b=C(l,"bias","fused conv2d"),g)[0],he(x.outShape,b.shape)),f!=null&&(y=C(f,"prelu weights","fused depthwiseConv2d"));var _={x:m,filter:v};l!=null&&(_.bias=b),f!=null&&(_.preluActivationWeights=y);var S=[v,m],I=T.runKernelFunc(function(k,R){var N=k.fusedDepthwiseConv2D({input:m,filter:v,convInfo:x,bias:b,activation:p,preluActivationWeights:y});return R([v,m,N]),N},_,function(k,R){E(xr(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var N=R[0],D=R[1],L=R[2],M=Es(k,L,p),B={};return l!=null&&(B={bias:function(){return ks(b,M)}}),Object.assign({x:function(){return Gl(D.shape,M,N,x)},filter:function(){return jl(D,M,N.shape,x)}},B)},"FusedDepthwiseConv2D",{convInfo:x,activation:p},S,[!0]);return w?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),cy=Object.freeze({matMul:iy,conv2d:sy,depthwiseConv2d:uy}),ly=Object.freeze({image:_s,linalg:Q0,losses:K0,spectral:P0,fused:cy,signal:L0,square:Hg,squaredDifference:Sl,conv1d:Zm,conv2d:_t,conv3d:e0,depthwiseConv2d:pa,separableConv2d:ms,conv2dTranspose:t0,conv3dTranspose:n0,op:A,batchNormalization2d:xm,batchNormalization3d:wm,batchNormalization4d:_m,batchNormalization:Cm,batchNorm:Fl,batchNorm2d:Em,batchNorm3d:km,batchNorm4d:Rm,booleanMaskAsync:Qm,complex:Ke,real:bt,imag:Ot,concat:Le,concat1d:cd,concat2d:ld,concat3d:hd,concat4d:pd,split:rs,matMul:fa,dot:r0,outerProduct:o0,reverse:eo,reverse1d:a0,reverse2d:i0,reverse3d:s0,reverse4d:u0,maxPool:$e,avgPool:to,pool:c0,maxPool3d:l0,avgPool3d:h0,slice:Ut,slice1d:p0,slice2d:f0,slice3d:Xl,slice4d:d0,abs:Gg,acos:jg,acosh:qg,asin:Kg,asinh:Xg,atan:Yg,atanh:Jg,ceil:Qg,clipByValue:fs,cos:Zg,cosh:em,erf:tm,exp:Si,expm1:nm,floor:rm,log:om,log1p:am,logSigmoid:im,neg:Go,reciprocal:sm,round:um,rsqrt:Al,sigmoid:Dl,sign:cm,isNaN:lm,isInf:hm,isFinite:pm,sin:fm,sinh:dm,softplus:vm,sqrt:gm,step:mm,tan:ym,tanh:bm,all:v0,any:g0,argMax:m0,argMin:y0,logSumExp:b0,max:da,mean:x0,min:w0,moments:_0,sum:Jl,prod:C0,equal:Wl,equalStrict:Vm,greater:$m,greaterEqual:Ul,greaterEqualStrict:Hm,greaterStrict:Gm,less:jm,lessEqual:qm,lessEqualStrict:Km,lessStrict:Xm,notEqual:Ym,notEqualStrict:Jm,add:ce,addN:Am,addStrict:Dm,atan2:Tm,div:Ct,divNoNan:Nm,divStrict:Pm,floorDiv:Bl,maximum:ds,maximumStrict:Fm,minimum:Ll,minimumStrict:Om,mod:Mm,modStrict:Bm,mul:nt,mulStrict:Lm,pow:jo,powStrict:Wm,squaredDifferenceStrict:Um,sub:ze,subStrict:zm,elu:Ql,leakyRelu:E0,prelu:Zl,relu:Ie,relu6:eh,selu:k0,logicalAnd:ha,logicalNot:Im,logicalOr:Ol,logicalXor:Sm,where:Mn,whereAsync:Ml,buffer:oe,print:wd,batchToSpaceND:Jc,broadcastTo:_d,cast:Cd,clone:Ed,cumsum:kd,depthToSpace:Rd,expandDims:yt,eye:Qc,multinomial:Id,oneHot:Ei,pad:zn,pad1d:Sd,pad2d:Ad,pad3d:Dd,pad4d:Td,rand:Nd,randomNormal:Pd,randomGamma:Fd,randomUniform:Zc,reshape:Et,spaceToBatchND:el,squeeze:tl,stack:gt,tile:ir,truncatedNormal:Od,unstack:We,setdiff1dAsync:Md,fill:Wt,linspace:ud,ones:Er,range:Bo,scalar:G,tensor:Ye,tensor1d:Me,tensor2d:mn,tensor3d:ns,tensor4d:ot,tensor5d:ad,tensor6d:id,variable:sd,zeros:Ce,onesLike:Yc,zerosLike:ge,transpose:xn,softmax:nn,logSoftmax:$d,localResponseNormalization:R0,norm:th,gather:vs,unsortedSegmentSum:zl,basicLSTMCell:I0,multiRNNCell:S0,movingAverage:A0,stridedSlice:D0,topk:T0,scatterND:N0,fft:ys,ifft:qo,rfft:bs,irfft:nh,sparseToDense:F0,gatherND:O0,diag:M0,dropout:B0,hannWindow:xs,hammingWindow:oh,frame:ws,stft:ah,inTopKAsync:W0});function V(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function ti(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var hy=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new ul(e,T),e}return Rt(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,O().get("IS_NODE")&&Oo(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},t.prototype.move=function(e,n,o,a){this.data.set(e,{values:n,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,a=n.complexTensors;return o==="complex64"?Ii(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(a){return No(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return oe(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var a=this.write(e,n,o);return T.makeTensorFromDataId(a,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){return n=Pt(),e(),[2,{kernelMs:Pt()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(V(e,"slice"),il(e.shape,n,o)){var a=sl(n,e.strides),i=Y(o);return Ye(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=oe(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,p){return h+n[p]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,a){V(e,"stridedSlice");var i=as(n,o,a);if(i.some(function(f){return f===0}))return Ye([],i);for(var s=oe(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),p=0;p<h.length;p++)h[p]=l[p]*a[p]+n[p];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=oe([e.size,e.size],e.dtype),a=o.values,i=0;i<n.length;i++)a[i*e.size+i]=n[i];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.reverse=function(e,n){V(e,"reverse");for(var o=oe(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(h){return l[h]=e.shape[h]-1-l[h]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(f){return bt(f)}),i=e.map(function(f){return Ot(f)});return Ke(this.concat(a,n),this.concat(i,n))}var s=e.map(function(f){var d=Y(f.shape.slice(n));return f.as2D(-1,d)}),u=br(s.map(function(f){return f.shape}),1),c=oe(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(f){c.set(o.readSync(f.dataId),l),l+=f.size})}else{var h=0;s.forEach(function(f){for(var d=o.readSync(f.dataId),g=0,v=0;v<f.shape[0];++v)for(var m=v*u[1]+h,w=0;w<f.shape[1];++w)c[m+w]=d[g++];h+=f.shape[1]})}var p=br(e.map(function(f){return f.shape}),n);return Ye(c,p,e[0].dtype)},t.prototype.neg=function(e){return V(e,"neg"),this.multiply(G(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,n,Xe(e.dtype,n.dtype),function(o,a){return o+a})},t.prototype.addN=function(e){var n=this;V(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),a=oe(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(e,n){var o=Ve([n],e.shape),a=this.max(e,o),i=ut(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,n,Xe(e.dtype,n.dtype),function(o,a){return o-a})},t.prototype.pow=function(e,n){return V([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(e,n,o,a){V([e,n],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),h=this.readSync(n.dataId),p=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],f=p[0],d=p[1],g=p[2],v=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],m=v[0],w=v[1],b=v[2],y=s*u,x=oe([c,s,u],e.dtype),_=x.values,S=this.blockSize,I=0;I<c;I++)for(var k=0;k<s;k+=S)for(var R=0;R<u;R+=S)for(var N=0;N<i;N+=S)for(var D=Math.min(k+S,s),L=Math.min(R+S,u),M=Math.min(N+S,i),B=k;B<D;B++)for(var z=R;z<L;z++){for(var U=0,W=N;W<M;W++)U+=l[I*f+B*d+W*g]*h[W*m+z*w+I*b];_[I*y+(B*u+z)]+=U}return x.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=ti(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,n,Xe(e.dtype,n.dtype),function(o,a){return o*a})},t.prototype.realDivide=function(e,n){return V([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,a){return o/a})},t.prototype.floorDiv=function(e,n){return V([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(e,n){V(e,"sum"),ht("sum",n,e.rank);for(var o=Qe(e.shape,n),a=o[0],i=o[1],s=Ce(a,Xe(e.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var p=h*u,f=0,d=0;d<u;++d)f+=l[p+d];c[h]=f}return s},t.prototype.prod=function(e,n){V(e,"sum");for(var o=Qe(e.shape,n),a=o[0],i=o[1],s=Ce(a,Xe(e.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var p=h*u,f=1,d=0;d<u;++d)f*=l[p+d];c[h]=f}return s},t.prototype.unsortedSegmentSum=function(e,n,o){V(e,"unsortedSegmentSum");for(var a=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=G(s,"int32"),c=Wl(u,n).asType("float32").mul(e).sum(0);a.push(c)}return gt(a)},t.prototype.argMin=function(e,n){V(e,"argMin");var o=[n];ht("argMin",o,e.rank);for(var a=Qe(e.shape,o),i=a[0],s=a[1],u=Ce(i,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),p=0;p<l.length;++p){for(var f=p*c,d=h[f],g=0,v=0;v<c;++v){var m=h[f+v];m<d&&(d=m,g=v)}l[p]=g}return u},t.prototype.argMax=function(e,n){V(e,"argMax");var o=[n];ht("argMax",o,e.rank);for(var a=Qe(e.shape,o),i=a[0],s=a[1],u=Ce(i,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),p=0;p<l.length;++p){for(var f=p*c,d=h[f],g=0,v=0;v<c;++v){var m=h[f+v];m>d&&(d=m,g=v)}l[p]=g}return u},t.prototype.cumsum=function(e,n,o,a){if(V(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=Xe(e.dtype,"int32"),s=Ce(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],h=a?function(v,m){return v+l-m-1}:function(v,m){return v+m},p=0;p<c.length;p+=l)for(var f=0;f<l;f++){var d=h(p,f);if(f===0)u[d]=o?0:c[d];else{var g=h(p,f-1);u[d]=o?c[g]+u[g]:c[d]+u[g]}}return s},t.prototype.equal=function(e,n){return V([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(e,n){return V([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(e,n){return V([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(e,n){return V([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(e,n){return V([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(e,n){return V([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(e){V(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return V([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(e,n){return V([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o||a})},t.prototype.select=function(e,n,o){V([e,n,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Ce(n.shape,Xe(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=e.rank===0||e.rank>1||n.rank===1?1:Y(n.shape.slice(1)),p=0;p<a.length;p++)for(var f=0;f<h;f++)a[p]===1?c[l++]=i[p]:c[l++]=s[p];return u},t.prototype.where=function(e){V([e],"where");var n=this.readSync(e.dataId);return cs(e.shape,n)},t.prototype.topk=function(e,n,o){return V(e,"topk"),gl(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){V(e,"min"),ht("min",n,e.rank);for(var o=Qe(e.shape,n),a=o[0],i=o[1],s=Ce(a,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var p=h*u,f=l[p],d=0;d<u;++d){var g=l[p+d];g<f&&(f=g)}c[h]=f}return s},t.prototype.minimum=function(e,n){return V([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(e,n){return V([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(e,n){V(e,"max"),ht("max",n,e.rank);for(var o=Qe(e.shape,n),a=o[0],i=o[1],s=Ce(a,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var p=h*u,f=l[p],d=0;d<u;++d){var g=l[p+d];g>f&&(f=g)}c[h]=f}return s},t.prototype.maximum=function(e,n){return V([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(e,n){V(e,"all"),ht("all",n,e.rank);for(var o=Qe(e.shape,n),a=o[0],i=o[1],s=Ce(a,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var p=h*u,f=l[p],d=0;d<u;++d){var g=l[p+d];f=f&&g}c[h]=f}return s},t.prototype.any=function(e,n){V(e,"any"),ht("any",n,e.rank);for(var o=Qe(e.shape,n),a=o[0],i=o[1],s=Ce(a,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var p=h*u,f=l[p],d=0;d<u;++d){var g=l[p+d];f=f||g}c[h]=f}return s},t.prototype.squaredDifference=function(e,n){return V([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(e){V(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){V(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){V(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){V(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){V(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){V(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){V(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){V(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){V(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){V(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){V(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){V(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){V(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){V(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){V(e,"relu");for(var n=Ce(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},t.prototype.relu6=function(e){V(e,"relu");for(var n=Ce(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},t.prototype.prelu=function(e,n){return V([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(e){V(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){V([e,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){V(e,"selu");for(var n=hs,o=ps,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},t.prototype.clip=function(e,n,o){V(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){V(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){V(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){V(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){V(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){V(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){V(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){V(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){V(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){V(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return V([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(e){V(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){V(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){V(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=pf(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){V(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){V(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){V(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){V(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),V(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=ti(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){V([e,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",p=oe(o.outShape,e.dtype),f=e.strides[0],d=h?e.strides[1]:e.strides[2],g=h?e.strides[2]:1,v=h?1:e.strides[1],m=p.strides[0],w=h?p.strides[1]:p.strides[2],b=h?p.strides[2]:1,y=h?1:p.strides[1],x=this.readSync(e.dataId),_=this.readSync(n.dataId),S=p.values,I=0;I<o.batchSize;++I)for(var k=I*f,R=I*m,N=0;N<o.outHeight;++N)for(var D=R+N*w,L=N*o.strideHeight-l,M=0;M<a;M++){var B=L+M*s;if(!(B<0||B>=o.inHeight))for(var z=M*n.strides[0],U=k+B*d,W=0;W<o.outWidth;++W)for(var $=D+W*b,H=W*o.strideWidth-c,j=0;j<i;j++){var ee=H+j*u;if(!(ee<0||ee>=o.inWidth))for(var te=U+ee*g,se=z+j*n.strides[1],ue=0;ue<o.inChannels;++ue){for(var le=x[te+ue*v],de=0;de<o.outChannels;++de)S[$+de*y]+=le*_[se+de];se+=o.outChannels}}}return p.toTensor()},t.prototype.conv3d=function(e,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,p=o.padInfo.left,f=o.padInfo.top,d=oe(o.outShape,e.dtype),g=this.readSync(e.dataId),v=this.readSync(n.dataId),m=d.values,w=0;w<o.batchSize;++w)for(var b=w*e.strides[0],y=w*d.strides[0],x=0;x<o.outDepth;++x)for(var _=y+x*d.strides[1],S=x*o.strideDepth-h,I=0;I<a;I++){var k=S+I*u;if(!(k<0||k>=o.inDepth))for(var R=I*n.strides[0],N=b+k*e.strides[1],D=0;D<o.outHeight;++D)for(var L=_+D*d.strides[2],M=D*o.strideHeight-f,B=0;B<i;B++){var z=M+B*c;if(!(z<0||z>=o.inHeight))for(var U=R+B*n.strides[1],W=N+z*e.strides[2],$=0;$<o.outWidth;++$)for(var H=L+$*o.outChannels,j=$*o.strideWidth-p,ee=0;ee<s;ee++){var te=j+ee*l;if(!(te<0||te>=o.inWidth))for(var se=U+ee*n.strides[2],ue=W+te*o.inChannels,le=se,de=0;de<o.inChannels;++de){for(var pe=g[ue+de],ve=0;ve<o.outChannels;++ve)m[H+ve]+=pe*v[le+ve];le+=o.outChannels}}}}return d.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){V([e,n],"conv2dDerInput");for(var a=oe(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],h=c[1],p=c[2],f=o.batchSize,d=o.filterHeight,g=o.filterWidth,v=o.inChannels,m=o.inHeight,w=o.inWidth,b=o.outChannels,y=o.outHeight,x=o.outWidth,_=o.strideHeight,S=o.strideWidth,I=o.dataFormat,k=d-1-o.padInfo.top,R=g-1-o.padInfo.left,N=I==="channelsLast",D=a.strides[0],L=N?a.strides[1]:a.strides[2],M=N?a.strides[2]:1,B=N?1:a.strides[1],z=e.strides[0],U=N?e.strides[1]:e.strides[2],W=N?e.strides[2]:1,$=N?1:e.strides[1],H=0;H<f;++H)for(var j=0;j<v;++j)for(var ee=0;ee<m;++ee)for(var te=ee-k,se=Math.max(0,Math.ceil(te/_)),ue=Math.min(y,(d+te)/_),le=0;le<w;++le){for(var de=le-R,pe=Math.max(0,Math.ceil(de/S)),ve=Math.min(x,(g+de)/S),Pe=0,fe=se;fe<ue;++fe)for(var we=fe*_-te,be=pe;be<ve;++be)for(var De=z*H+U*fe+W*be,Ee=l*(d-1-we)+h*(g-1-(be*S-de))+p*j,ke=0;ke<b;++ke)Pe+=s[De+$*ke]*u[Ee+ke];i[D*H+L*ee+M*le+B*j]=Pe}return a.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var a=oe(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=s[3],p=this.readSync(e.dataId),f=e.strides,d=f[0],g=f[1],v=f[2],m=f[3],w=this.readSync(n.dataId),b=n.strides,y=b[0],x=b[1],_=b[2],S=b[3],I=o.batchSize,k=o.filterDepth,R=o.filterHeight,N=o.filterWidth,D=o.inChannels,L=o.inDepth,M=o.inHeight,B=o.inWidth,z=o.outChannels,U=o.outDepth,W=o.outHeight,$=o.outWidth,H=o.strideDepth,j=o.strideHeight,ee=o.strideWidth,te=k-1-o.padInfo.front,se=R-1-o.padInfo.top,ue=N-1-o.padInfo.left,le=0;le<I;++le)for(var de=0;de<D;++de)for(var pe=0;pe<L;++pe)for(var ve=pe-te,Pe=Math.max(0,Math.ceil(ve/H)),fe=Math.min(U,(k+ve)/H),we=0;we<M;++we)for(var be=we-se,De=Math.max(0,Math.ceil(be/j)),Ee=Math.min(W,(R+be)/j),ke=0;ke<B;++ke){for(var St=ke-ue,At=Math.max(0,Math.ceil(St/ee)),lt=Math.min($,(N+St)/ee),jn=0,jt=Pe;jt<fe;++jt)for(var un=jt*H-ve,qt=De;qt<Ee;++qt)for(var qn=qt*j-be,Kt=At;Kt<lt;++Kt)for(var ka=d*le+g*jt+v*qt+m*Kt,Kn=y*(k-1-un)+x*(R-1-qn)+_*(N-1-(Kt*ee-St))+S*de,Dt=0;Dt<z;++Dt)jn+=p[ka+Dt]*w[Kn+Dt];i[u*le+c*pe+l*we+h*ke+de]=jn}return a.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){V([e,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=oe(o.filterShape,"float32"),h=o.padInfo.left,p=o.padInfo.top,f=this.bufferSync(e),d=this.bufferSync(n),g=0;g<s;++g)for(var v=Math.max(0,Math.ceil((p-g)/a)),m=Math.min(o.outHeight,(o.inHeight+p-g)/a),w=0;w<u;++w)for(var b=Math.max(0,Math.ceil((h-w)/i)),y=Math.min(o.outWidth,(o.inWidth+h-w)/i),x=0;x<o.inChannels;++x)for(var _=0;_<o.outChannels;++_){for(var S=0,I=0;I<o.batchSize;++I)for(var k=v;k<m;++k)for(var R=g+k*a-p,N=b;N<y;++N){var D=w+N*i-h;S+=c?f.get(I,R,D,x)*d.get(I,k,N,_):f.get(I,x,R,D)*d.get(I,_,k,N)}l.set(S,g,w,x,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=oe(o.filterShape,"float32"),p=h.values,f=h.strides,d=f[0],g=f[1],v=f[2],m=f[3],w=this.readSync(n.dataId),b=n.strides,y=b[0],x=b[1],_=b[2],S=b[3],I=this.readSync(e.dataId),k=e.strides,R=k[0],N=k[1],D=k[2],L=k[3],M=o.padInfo.front,B=o.padInfo.left,z=o.padInfo.top,U=0;U<u;++U)for(var W=Math.max(0,Math.ceil((M-U)/a)),$=Math.min(o.outDepth,(o.inDepth+M-U)/a),H=U*d,j=0;j<c;++j)for(var ee=Math.max(0,Math.ceil((z-j)/i)),te=Math.min(o.outHeight,(o.inHeight+z-j)/i),se=j*g+H,ue=0;ue<l;++ue)for(var le=Math.max(0,Math.ceil((B-ue)/s)),de=Math.min(o.outWidth,(o.inWidth+B-ue)/s),pe=ue*v+se,ve=0;ve<o.inChannels;++ve)for(var Pe=ve*m+pe,fe=0;fe<o.outChannels;++fe){for(var we=0,be=0;be<o.batchSize;++be)for(var De=be*R,Ee=be*y,ke=W;ke<$;++ke)for(var St=(U+ke*a-M)*N+De,At=ke*x+Ee,lt=ee;lt<te;++lt)for(var jn=(j+lt*i-z)*D+St,jt=lt*_+At,un=le;un<de;++un){var qt=un*S+jt;we+=I[(ue+un*s-B)*L+jn+ve]*w[qt+fe]}p[Pe+fe]=we}return h.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=ti(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){V([e,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,p=oe(o.outShape,e.dtype),f=this.readSync(e.dataId),d=this.readSync(n.dataId),g=p.values,v=0;v<o.batchSize;++v)for(var m=v*e.strides[0],w=v*p.strides[0],b=0;b<o.outHeight;++b)for(var y=w+b*p.strides[1],x=b*o.strideHeight-c,_=0;_<a;++_){var S=x+_*s;if(!(S<0||S>=o.inHeight))for(var I=_*n.strides[0],k=m+S*e.strides[1],R=0;R<o.outWidth;++R)for(var N=y+R*p.strides[2],D=R*o.strideWidth-l,L=0;L<i;++L){var M=D+L*u;if(!(M<0||M>=o.inWidth))for(var B=I+L*n.strides[1],z=k+M*o.inChannels,U=N,W=B,$=0;$<o.inChannels;++$){for(var H=f[z+$],j=0;j<h;++j)g[U+j]+=H*d[W+j];U+=h,W+=h}}}return p.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){V([e,n],"depthwiseConv2DDerInput");for(var a=oe(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(e.dataId),p=e.strides,f=p[0],d=p[1],g=p[2],v=this.readSync(n.dataId),m=n.strides,w=m[0],b=m[1],y=m[2],x=o.batchSize,_=o.filterHeight,S=o.filterWidth,I=o.inChannels,k=o.inHeight,R=o.inWidth,N=o.outChannels,D=o.outHeight,L=o.outWidth,M=o.strideHeight,B=o.strideWidth,z=_-1-o.padInfo.top,U=S-1-o.padInfo.left,W=N/I,$=0;$<x;++$)for(var H=0;H<I;++H)for(var j=0;j<k;++j)for(var ee=j-z,te=Math.max(0,Math.ceil(ee/M)),se=Math.min(D,(_+ee)/M),ue=0;ue<R;++ue){for(var le=ue-U,de=Math.max(0,Math.ceil(le/B)),pe=Math.min(L,(S+le)/B),ve=0,Pe=te;Pe<se;++Pe)for(var fe=Pe*M-ee,we=de;we<pe;++we)for(var be=f*$+d*Pe+g*we,De=w*(_-1-fe)+b*(S-1-(we*B-le))+y*H,Ee=0;Ee<W;++Ee)ve+=h[be+(H*W+Ee)]*v[De+Ee];i[u*$+c*j+l*ue+H]=ve}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){V([e,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=oe(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,p=o.outChannels/o.inChannels,f=this.bufferSync(e),d=this.bufferSync(n),g=0;g<s;++g)for(var v=Math.max(0,Math.ceil((h-g)/a)),m=Math.min(o.outHeight,(o.inHeight+h-g)/a),w=0;w<u;++w)for(var b=Math.max(0,Math.ceil((l-w)/i)),y=Math.min(o.outWidth,(o.inWidth+l-w)/i),x=0;x<o.outChannels;++x){for(var _=Math.trunc(x/p),S=x%p,I=0,k=0;k<o.batchSize;++k)for(var R=v;R<m;++R)for(var N=g+R*a-h,D=b;D<y;++D){var L=w+D*i-l;I+=f.get(k,N,L,_)*d.get(k,R,D,x)}c.set(I,g,w,_,S)}return c.toTensor()},t.prototype.tile=function(e,n){return V(e,"tile"),vl(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){V(e,"pad");var a=n.map(function(p,f){return p[0]+e.shape[f]+p[1]}),i=n.map(function(p){return p[0]}),s=this.bufferSync(e),u=oe(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),h=l.map(function(p,f){return p+i[f]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},t.prototype.transpose=function(e,n){V(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[n[a]];var i=this.readSync(e.dataId),s=oe(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[n[h]];var p=s.locToIndex(l);s.values[p]=i[a]}return s.toTensor()},t.prototype.gather=function(e,n,o){V([e,n],"gather");var a=e.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=oe(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=i[l[o]];var p=u.locToIndex(h);s.values[c]=u.values[p]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){V([e],"batchToSpaceND");var a=n.reduce(function(h,p){return h*p}),i=Lo(e.shape,n,a),s=Wo(i.length,n.length),u=Uo(e.shape,n,a),c=nl(o,n.length),l=rl(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){V([e],"spaceToBatchND");var a=n.reduce(function(p,f){return p*f}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Lo(u.shape,n,a,!1),l=Wo(c.length,n.length,!1),h=Uo(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.pool=function(e,n,o){V(e,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,p=n.padInfo.left,f=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,d=this.readSync(e.dataId),g=oe(n.outShape,e.dtype),v=g.values,m=n.outShape[1]*n.outShape[2]*n.outShape[3],w=n.outShape[2]*n.outShape[3],b=n.outShape[3],y=0;y<n.batchSize;++y)for(var x=y*m,_=y*e.strides[0],S=0;S<n.inChannels;++S)for(var I=0;I<n.outHeight;++I)for(var k=I*a-h,R=Math.max(0,k),N=Math.min(n.inHeight,c+k),D=x+I*w,L=0;L<n.outWidth;++L){for(var M=L*i-p,B=Math.max(0,M),z=Math.min(n.inWidth,l+M),U=f,W=0,$=0,H=R;H<N;H+=s){for(var j=_+H*e.strides[1],ee=B;ee<z;ee+=u){var te=d[j+ee*e.strides[2]+S];o==="max"&&te>U?U=te:o==="avg"&&(W+=te,$++)}if(isNaN(U))break}v[D+L*b+S]=o==="avg"?W/$:U}return g.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=oe(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,p=n.padInfo.left,f=this.bufferSync(e),d=0;d<n.batchSize;++d)for(var g=0;g<n.inChannels;++g)for(var v=0;v<n.outHeight;++v){for(var m=v*a-h,w=m;w<0;)w+=s;for(var b=Math.min(n.inHeight,c+m),y=0;y<n.outWidth;++y){for(var x=y*i-p,_=x;_<0;)_+=u;for(var S=Math.min(n.inWidth,l+x),I=Number.NEGATIVE_INFINITY,k=-1,R=w;R<b;R+=s)for(var N=R-m,D=_;D<S;D+=u){var L=D-x,M=f.get(d,R,D,g);M>I&&(I=M,k=N*l+L)}o.set(k,d,v,y,g)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,a){V([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,h=a.effectiveFilterHeight,p=a.effectiveFilterWidth,f=p-1-a.padInfo.left,d=h-1-a.padInfo.top,g=oe(n.shape,"float32"),v=this.bufferSync(i),m=this.bufferSync(e),w=0;w<a.batchSize;++w)for(var b=0;b<a.inChannels;++b)for(var y=0;y<a.inHeight;++y)for(var x=0;x<a.inWidth;++x){for(var _=y-d,S=x-f,I=0,k=0;k<h;k+=c){var R=(_+k)/s;if(!(R<0||R>=a.outHeight||Math.floor(R)!==R))for(var N=0;N<p;N+=l){var D=(S+N)/u;if(!(D<0||D>=a.outWidth||Math.floor(D)!==D)){var L=h*p-1-v.get(w,R,D,b)===k*p+N?1:0;L!==0&&(I+=m.get(w,R,D,b)*L)}}}g.set(I,w,y,x,b)}return g.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){V([e,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,p=o.effectiveFilterWidth,f=p-1-o.padInfo.left,d=h-1-o.padInfo.top,g=oe(n.shape,"float32"),v=1/(s*u),m=this.bufferSync(e),w=0;w<o.batchSize;++w)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var x=0;x<o.inWidth;++x){for(var _=y-d,S=x-f,I=0,k=0;k<h;k+=c){var R=(_+k)/a;if(!(R<0||R>=o.outHeight||Math.floor(R)!==R))for(var N=0;N<p;N+=l){var D=(S+N)/i;D<0||D>=o.outWidth||Math.floor(D)!==D||(I+=m.get(w,R,D,b))}}g.set(I*v,w,y,x,b)}return g.toTensor()},t.prototype.pool3d=function(e,n,o){V(e,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,p=n.effectiveFilterHeight,f=n.effectiveFilterWidth,d=n.padInfo.front,g=n.padInfo.top,v=n.padInfo.left,m=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=this.readSync(e.dataId),b=oe(n.outShape,e.dtype),y=b.values,x=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],_=n.outShape[2]*n.outShape[3]*n.outShape[4],S=n.outShape[3]*n.outShape[4],I=n.outShape[4],k=0;k<n.batchSize;++k)for(var R=k*x,N=k*e.strides[0],D=0;D<n.inChannels;++D)for(var L=0;L<n.outDepth;++L){for(var M=L*a-d,B=M;B<0;)B+=u;for(var z=Math.min(n.inDepth,h+M),U=R+L*_,W=0;W<n.outHeight;++W){for(var $=W*i-g,H=$;H<0;)H+=c;for(var j=Math.min(n.inHeight,p+$),ee=U+W*S,te=0;te<n.outWidth;++te){for(var se=te*s-v,ue=se;ue<0;)ue+=l;for(var le=Math.min(n.inWidth,f+se),de=ee+te*I,pe=m,ve=0,Pe=0,fe=B;fe<z;fe+=u){for(var we=N+fe*e.strides[1],be=H;be<j;be+=c){for(var De=we+be*e.strides[2],Ee=ue;Ee<le;Ee+=l){var ke=w[De+Ee*e.strides[3]+D];if(o==="max"&&ke>pe?pe=ke:o==="avg"&&(ve+=ke,Pe++),isNaN(pe))break}if(isNaN(pe))break}if(isNaN(pe))break}y[de+D]=o==="avg"?ve/Pe:pe}}}return b.toTensor()},t.prototype.avgPool3d=function(e,n){return V(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){V([e,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,p=o.dilationHeight,f=o.dilationWidth,d=o.effectiveFilterDepth,g=o.effectiveFilterHeight,v=o.effectiveFilterWidth,m=d-1-o.padInfo.front,w=v-1-o.padInfo.left,b=g-1-o.padInfo.top,y=oe(n.shape,"float32"),x=1/(u*c*l),_=this.bufferSync(e),S=0;S<o.batchSize;++S)for(var I=0;I<o.inChannels;++I)for(var k=0;k<o.inDepth;++k)for(var R=0;R<o.inHeight;++R)for(var N=0;N<o.inWidth;++N){for(var D=k-m,L=R-b,M=N-w,B=0,z=0;z<d;z+=h){var U=(D+z)/a;if(!(U<0||U>=o.outDepth||Math.floor(U)!==U))for(var W=0;W<g;W+=p){var $=(L+W)/i;if(!($<0||$>=o.outHeight||Math.floor($)!==$))for(var H=0;H<v;H+=f){var j=(M+H)/s;j<0||j>=o.outWidth||Math.floor(j)!==j||(B+=_.get(S,U,$,j,I))}}}y.set(B*x,S,k,R,N,I)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return V(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=oe(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,p=n.effectiveFilterHeight,f=n.effectiveFilterWidth,d=n.padInfo.front,g=n.padInfo.top,v=n.padInfo.left,m=this.bufferSync(e),w=0;w<n.batchSize;++w)for(var b=0;b<n.inChannels;++b)for(var y=0;y<n.outDepth;++y){for(var x=y*a-d,_=x;_<0;)_+=u;for(var S=Math.min(n.inDepth,h+x),I=0;I<n.outHeight;++I){for(var k=I*i-g,R=k;R<0;)R+=c;for(var N=Math.min(n.inHeight,p+k),D=0;D<n.outWidth;++D){for(var L=D*s-v,M=L;M<0;)M+=l;for(var B=Math.min(n.inWidth,f+L),z=Number.NEGATIVE_INFINITY,U=-1,W=_;W<S;W+=u)for(var $=W-x,H=R;H<N;H+=c)for(var j=H-k,ee=M;ee<B;ee+=l){var te=ee-L,se=m.get(w,W,H,ee,b);se>=z&&(z=se,U=$*p*f+j*p+te)}o.set(U,w,y,I,D,b)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,a){V([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,h=a.dilationHeight,p=a.dilationWidth,f=a.effectiveFilterDepth,d=a.effectiveFilterHeight,g=a.effectiveFilterWidth,v=f-1-a.padInfo.front,m=g-1-a.padInfo.left,w=d-1-a.padInfo.top,b=oe(n.shape,"float32"),y=this.bufferSync(i),x=this.bufferSync(e),_=0;_<a.batchSize;++_)for(var S=0;S<a.inChannels;++S)for(var I=0;I<a.inDepth;++I)for(var k=0;k<a.inHeight;++k)for(var R=0;R<a.inWidth;++R){for(var N=I-v,D=k-w,L=R-m,M=0,B=0;B<f;B+=l){var z=(N+B)/s;if(!(z<0||z>=a.outDepth||Math.floor(z)!==z))for(var U=0;U<d;U+=h){var W=(D+U)/u;if(!(W<0||W>=a.outHeight||Math.floor(W)!==W))for(var $=0;$<g;$+=p){var H=(L+$)/c;if(!(H<0||H>=a.outWidth||Math.floor(H)!==H)){var j=f*d*g-1-y.get(_,z,W,H,S)===B*d*g+U*g+$?1:0;j!==0&&(M+=x.get(_,z,W,H,S)*j)}}}}b.set(M,_,I,k,R,S)}return b.toTensor()},t.prototype.cast=function(e,n){return hl(e,n,this)},t.prototype.reshape=function(e,n){return Ri(e,n)},t.prototype.avgPool=function(e,n){return V(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,a){V(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),p=new Float32Array(Y([s,n,o,l])),f=[a&&n>1?u-1:u,a&&o>1?c-1:c],d=[a&&n>1?n-1:n,a&&o>1?o-1:o],g=0,v=f[0]/d[0],m=f[1]/d[1],w=0;w<s;w++)for(var b=0;b<n;b++)for(var y=v*b,x=Math.floor(y),_=y-x,S=Math.min(u-1,Math.ceil(y)),I=w*e.strides[0]+x*e.strides[1],k=w*e.strides[0]+S*e.strides[1],R=0;R<o;R++)for(var N=m*R,D=Math.floor(N),L=N-D,M=Math.min(c-1,Math.ceil(N)),B=I+D*e.strides[2],z=k+D*e.strides[2],U=I+M*e.strides[2],W=k+M*e.strides[2],$=0;$<l;$++){var H=h[B+$],j=h[z+$],ee=H+(h[U+$]-H)*L,te=ee+(j+(h[W+$]-j)*L-ee)*_;p[g++]=te}return Ye(p,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){V([e,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,h=l[1],p=l[2],f=new Float32Array(i*s*u*c),d=[o&&h>1?s-1:s,o&&p>1?u-1:u],g=[o&&h>1?h-1:h,o&&p>1?p-1:p],v=d[0]/g[0],m=d[1]/g[1],w=this.readSync(e.dataId),b=0,y=0;y<i;y++)for(var x=y*n.strides[0],_=0;_<h;_++)for(var S=_*v,I=Math.floor(S),k=Math.min(Math.ceil(S),s-1),R=x+I*n.strides[1],N=x+k*n.strides[1],D=S-I,L=1-D,M=0;M<p;M++)for(var B=M*m,z=Math.floor(B),U=Math.min(Math.ceil(B),u-1),W=B-z,$=1-W,H=R+z*n.strides[2],j=R+U*n.strides[2],ee=N+z*n.strides[2],te=N+U*n.strides[2],se=L*$,ue=L*W,le=D*$,de=D*W,pe=0;pe<c;pe++){var ve=w[b++];f[H+pe]+=ve*se,f[j+pe]+=ve*ue,f[ee+pe]+=ve*le,f[te+pe]+=ve*de}return ot(f,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,a){V(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),p=new Float32Array(s*n*o*l),f=[a&&n>1?u-1:u,a&&o>1?c-1:c],d=[a&&n>1?n-1:n,a&&o>1?o-1:o],g=f[0]/d[0],v=f[1]/d[1],m=0,w=0;w<s;w++)for(var b=w*e.strides[0],y=0;y<n;y++)for(var x=g*y,_=b+Math.min(u-1,a?Math.round(x):Math.floor(x))*e.strides[1],S=0;S<o;S++)for(var I=v*S,k=_+Math.min(c-1,a?Math.round(I):Math.floor(I))*e.strides[2],R=0;R<l;R++){var N=h[k+R];p[m++]=N}return Ye(p,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){V([e,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,h=l[1],p=l[2],f=new Float32Array(i*s*u*c),d=this.readSync(e.dataId),g=[o&&h>1?s-1:s,o&&p>1?u-1:u],v=[o&&h>1?h-1:h,o&&p>1?p-1:p],m=g[0]/v[0],w=g[1]/v[1],b=1/m,y=1/w,x=2*Math.ceil(b)+2,_=2*Math.ceil(y)+2,S=0;S<i;S++)for(var I=S*n.strides[0],k=0;k<s;k++)for(var R=I+k*n.strides[1],N=Math.floor(k*b),D=Math.floor(N-x/2),L=0;L<u;L++)for(var M=R+L*n.strides[2],B=Math.floor(L*y),z=Math.floor(B-_/2),U=0;U<c;U++){for(var W=0,$=0;$<x;$++){var H=$+D;if(!(H<0||H>=h)){var j=I+H*e.strides[1],ee=H*m;if(k===Math.min(s-1,o?Math.round(ee):Math.floor(ee)))for(var te=0;te<_;te++){var se=te+z;if(!(se<0||se>=p)){var ue=j+se*e.strides[2],le=se*w;L===Math.min(u-1,o?Math.round(le):Math.floor(le))&&(W+=d[ue+U])}}}}f[M+U]=W}return ot(f,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){V([e,n,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),h=i?this.readSync(i.dataId):new Float32Array([1]),p=s?this.readSync(s.dataId):new Float32Array([0]),f=new Float32Array(u.length),d=p.length,g=h.length,v=l.length,m=c.length,w=0,b=0,y=0,x=0,_=0;_<u.length;++_)f[_]=p[w++]+(u[_]-c[b++])*h[y++]/Math.sqrt(l[x++]+a),w>=d&&(w=0),b>=m&&(b=0),y>=g&&(y=0),x>=v&&(x=0);return ot(f,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){V(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,h=new Float32Array(l);function p(v){for(var m=v%s,w=v-m+Math.max(0,m-n),b=v-m+Math.min(m+n,u),y=0;w<=b;w++){var x=c[w];y+=x*x}return y}for(var f=0;f<l;f++){var d=p(f),g=c[f]*Math.pow(o+a*d,-i);h[f]=g}return ot(h,e.shape)},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){V(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),h=this.readSync(n.dataId),p=this.readSync(o.dataId),f=new Float32Array(e.size),d=e.size,g=0;g<d;g++){for(var v=g%c,m=g-v+Math.max(0,v-a),w=g-v+Math.min(c,v+a+1),b=0,y=m;y<w;y++)b+=Math.pow(h[y],2);for(b=s*b+i,y=m;y<w;y++){var x=-2*s*u*h[y]*p[g]/b;g===y&&(x+=Math.pow(b,-u)),x*=l[g],f[y]+=x}}return ot(f,e.shape)},t.prototype.multinomial=function(e,n,o,a){V(e,"multinomial");for(var i=n?e:nn(e),s=i.shape[0],u=i.shape[1],c=Ce([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(i.dataId),p=0;p<s;++p){var f=p*u,d=new Float32Array(u-1);d[0]=h[f];for(var g=1;g<d.length;++g)d[g]=d[g-1]+h[f+g];for(var v=ua(a.toString()),m=p*o,w=0;w<o;++w){var b=v();l[m+w]=d.length;for(var y=0;y<d.length;y++)if(b<d[y]){l[m+w]=y;break}}}return c},t.prototype.oneHot=function(e,n,o,a){V(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return mn(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return V(e,"nonMaxSuppression"),ss(this.readSync(e.dataId),this.readSync(n.dataId),o,a,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],a=e.shape[1],i=oe(e.shape,"float32"),s=oe(e.shape,"float32"),u=bt(e).as2D(o,a),c=Ot(e).as2D(o,a),l=0;l<o;l++)for(var h=u.slice([l,0],[1,a]),p=c.slice([l,0],[1,a]),f=Ke(h,p),d=this.readSync(this.fftImpl(f,n).dataId),g=0;g<a;g++){var v=Tu(d,g);i.values[l*a+g]=v.real,s.values[l*a+g]=v.imag}return Ke(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(e.shape[0],e.shape[1]);return n&&(i=Ke(bt(i).div(G(a)),Ot(i).div(G(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),p=0;p<c.length;p+=2)l[p/2]=c[p],h[p/2]=c[p+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,a,n));return Ke(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var a=this.readSync(e.dataId),i=n/2,s=function(m){for(var w=Math.ceil(m.length/4),b=new Float32Array(w),y=new Float32Array(w),x=0;x<m.length;x+=4)b[Math.floor(x/4)]=m[x],y[Math.floor(x/4)]=m[x+1];return{real:b,imag:y}}(a),u=Ke(s.real,s.imag).as1D(),c=function(m){for(var w=Math.floor(m.length/4),b=new Float32Array(w),y=new Float32Array(w),x=2;x<m.length;x+=4)b[Math.floor(x/4)]=m[x],y[Math.floor(x/4)]=m[x+1];return{real:b,imag:y}}(a),l=Ke(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var h=function(m,w){for(var b=new Float32Array(m/2),y=new Float32Array(m/2),x=0;x<Math.ceil(m/2);x++){var _=(w?2:-2)*Math.PI*(x/m);b[x]=Math.cos(_),y[x]=Math.sin(_)}return{real:b,imag:y}}(n,o),p=Ke(h.real,h.imag).mul(l),f=u.add(p),d=u.sub(p),g=bt(f).concat(bt(d)),v=Ot(f).concat(Ot(d));return Ke(g,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=Gd(i*c,n,o),h=Tu(e,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=n,u/=n),Hd(a,s,u,i)}return a},t.prototype.depthToSpace=function(e,n,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,h=u/(n*n),p=this.readSync(e.dataId),f=new Float32Array(a*c*l*h),d=0,g=0;g<a;++g)for(var v=0;v<c;++v)for(var m=Math.floor(v/n),w=v%n,b=0;b<l;++b)for(var y=Math.floor(b/n),x=(w*n+b%n)*h,_=0;_<h;++_){var S=_+x+u*(y+s*(m+i*g));f[d++]=p[S]}return ot(f,[a,c,l,h])},t.prototype.broadcastedBinaryOp=function(e,n,o,a){var i=he(e.shape,n.shape),s=oe(i,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=pn(e.shape,i),h=pn(n.shape,i),p=s.values;if(l.length+h.length===0)for(var f=0;f<p.length;++f)p[f]=a(u[f%u.length],c[f%c.length]);else{var d=this.bufferSync(e),g=this.bufferSync(n),v=function(m){var w=s.indexToLoc(m),b=w.slice(-e.rank);l.forEach(function(S){return b[S]=0});var y=d.locToIndex(b),x=w.slice(-n.rank);h.forEach(function(S){return x[S]=0});var _=g.locToIndex(x);p[m]=a(u[y],c[_])};for(f=0;f<p.length;++f)v(f)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var a=he(e.shape,n.shape),i=oe(a,"float32"),s=oe(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=pn(e.shape,a),h=pn(n.shape,a),p=i.values,f=s.values;if(l.length+h.length===0)for(var d=0;d<p.length;d++){var g=d%u.length,v=d%c.length,m=o(u[2*g],u[2*g+1],c[2*v],c[2*v+1]);p[d]=m.real,f[d]=m.imag}else{var w=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(x){var _=i.indexToLoc(x),S=_.slice(-e.rank);l.forEach(function(D){return S[D]=0});var I=w.locToIndex(S),k=_.slice(-n.rank);h.forEach(function(D){return k[D]=0});var R=b.locToIndex(k),N=o(u[2*I],u[2*I+1],c[2*R],c[2*R+1]);p[x]=N.real,f[x]=N.imag};for(d=0;d<p.length;d++)y(d)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return dl(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],h=u[2],p=u[3],f=n.shape[0],d=a[0],g=a[1],v=oe([f,d,g,p],"float32"),m=this.readSync(n.dataId),w=this.readSync(o.dataId),b=this.readSync(e.dataId),y=e.strides,x=v.strides,_=0;_<f;_++){var S=4*_,I=m[S],k=m[S+1],R=m[S+2],N=m[S+3],D=w[_];if(!(D>=c))for(var L=d>1?(R-I)*(l-1)/(d-1):0,M=g>1?(N-k)*(h-1)/(g-1):0,B=0;B<d;B++){var z=d>1?I*(l-1)+B*L:.5*(I+R)*(l-1);if(z<0||z>l-1)for(var U=0;U<g;U++)for(var W=0;W<p;W++){var $=W+U*x[2]+B*x[1]+_*x[0];v.values[$]=s}else if(i==="bilinear"){var H=Math.floor(z),j=Math.ceil(z),ee=z-H;for(U=0;U<g;U++)if((fe=g>1?k*(h-1)+U*M:.5*(k+N)*(h-1))<0||fe>h-1)for(W=0;W<p;W++)$=W+U*x[2]+B*x[1]+_*x[0],v.values[$]=s;else{var te=Math.floor(fe),se=Math.ceil(fe),ue=fe-te;for(W=0;W<p;W++){var le=b[$=W+te*y[2]+H*y[1]+D*y[0]],de=b[$=W+se*y[2]+H*y[1]+D*y[0]],pe=b[$=W+te*y[2]+j*y[1]+D*y[0]],ve=le+(de-le)*ue,Pe=pe+(b[$=W+se*y[2]+j*y[1]+D*y[0]]-pe)*ue;$=W+U*x[2]+B*x[1]+_*x[0],v.values[$]=ve+(Pe-ve)*ee}}}else for(U=0;U<g;++U){var fe;if((fe=g>1?k*(h-1)+U*M:.5*(k+N)*(h-1))<0||fe>h-1)for(W=0;W<p;W++)$=W+U*x[2]+B*x[1]+_*x[0],v.values[$]=s;else{var we=Math.round(fe),be=Math.round(z);for(W=0;W<p;W++){var De=W+we*y[2]+be*y[1]+D*y[0],Ee=W+U*x[2]+B*x[1]+_*x[0];v.values[Ee]=b[De]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,n,o,a){var i=zo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,h=i.outputSize;return this.scatter(e,n,o,h,c,u,s,l,a,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=ol(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Ye([],s,e.dtype);for(var h=new Wr([u,c],e.dtype),p=this.readSync(n.dataId),f=this.readSync(e.dataId),d=0;d<u;d++){for(var g=[],v=0,m=0;m<a;m++){var w=p[d*a+m];v+=w*l[m],g.push(w)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+g+" does not index into "+e.shape);for(var b=0;b<c;b++)h.values[d*c+b]=f[v*c+b]}return h.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var a=zo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=G(0);return this.scatter(e,n,o,l,u,s,i,c,h,!0)},t.prototype.fill=function(e,n,o){var a=To(o=o||Xr(n),Y(e));return a.fill(n),T.makeTensor(a,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=To(e.dtype,Y(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return pl(e,n,o)},t.prototype.scatter=function(e,n,o,a,i,s,u,c,l,h){var p=[a/i,i],f=this.readSync(e.dataId),d=this.readSync(n.dataId);if(a===0)return Ye([],o,n.dtype);var g=new Wr(p,n.dtype);g.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var m=[],w=0,b=0;b<u;b++){var y=f[v*u+b];m.push(y),w+=y*c[b]}if(w<0||w>=a/i)throw new Error("Invalid indices: "+m+" does not index into "+o);for(var x=0;x<i;x++)h?g.values[w*i+x]+=d[v*i+x]:g.values[w*i+x]=n.rank===0?d[0]:d[v*i+x]}return g.toTensor().reshape(o)},t}(cl);T.registerBackend("cpu",function(){return new hy},1);for(var ni=0,Zu=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,p=e;V(a,"NonMaxSuppressionWithScore");var f=us(p.data.get(a.dataId).values,p.data.get(i.dataId).values,u,c,l,h);return[f.selectedIndices,f.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;V(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:Vr,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e;V([o,a],Vr);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(p,f,d,g,v,m){var w=he(p,f),b=w.length,y=Lt(w),x=Lr(v,Y(w)),_=p.length,S=f.length,I=Lt(p),k=Lt(f),R=pn(p,w),N=pn(f,w);if(R.length+N.length===0)for(var D=0;D<x.length;++D)x[D]=m(d[D%d.length],g[D%g.length]);else{var L=function(M){var B=wf(M,b,y),z=B.slice(-_);R.forEach(function(H){return z[H]=0});var U=_u(z,_,I),W=B.slice(-S);N.forEach(function(H){return W[H]=0});var $=_u(W,S,k);x[M]=m(d[U],g[$])};for(D=0;D<x.length;++D)L(D)}return[x,w]}(o.shape,a.shape,s,u,o.dtype,function(p,f){var d=p-f;return d*d}),l=c[0],h=c[1];return{dataId:i.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];ni<Zu.length;ni++)Bc(Zu[ni]);var Yn,py=function(r){this.variableNames=["A"];var t=et(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},fy=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=et(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var ri=0,ec=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],p=[l,c,a];(s||i)&&(Yn==null&&(Yn=document.createElement("canvas").getContext("2d")),Yn.canvas.width=c,Yn.canvas.height=l,Yn.drawImage(o,0,0,c,l),o=Yn.canvas);var f=e.makeTensorInfo(h,"int32");e.texData.get(f.dataId).usage=ft.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(f.dataId),o);var d=O().getBool("WEBGL_PACK")?new fy(p):new py(p),g=e.runWebGLProgram(d,[f],"int32");return e.disposeData(f.dataId),g}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;Oo("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,p=e,f=us(p.readSync(a.dataId),p.readSync(i.dataId),u,c,l,h);return[f.selectedIndices,f.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,a=new ae(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:Vr,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e,s=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt("return (a - b) * (a - b);",o.shape,a.shape):new Te("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];ri<ec.length;ri++)Bc(ec[ri]);for(var oi=0,tc=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:Vr,gradFunc:function(r,t){var e=t[0],n=t[1],o=G(2);return{a:function(){return nt(r,nt(o,ze(e,n)))},b:function(){return nt(r,nt(o,ze(n,e)))}}}}];oi<tc.length;oi++)lf(tc[oi]);var dy=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();O().get("IS_BROWSER")&&O().setPlatform("browser",new dy);var ai,vy=function(){return require("node-fetch")},gy=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return O().global.fetch!=null?O().global.fetch(t,e):(ai==null&&(ai=vy()),ai(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();O().get("IS_NODE")&&O().setPlatform("node",new gy);var Ai={float32:4,int32:4,uint16:2,uint8:1,bool:1},Ko=4;function ih(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=Y(l),p=void 0;if("quantization"in s){var f=s.quantization;if(f.dtype!=="uint8"&&f.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+f.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=Ai[f.dtype],g=r.slice(n,n+h*d),v=f.dtype==="uint8"?new Uint8Array(g):new Uint16Array(g);if(c==="float32")p=Float32Array.from(v,function(_){return _*f.scale+f.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);p=Int32Array.from(v,function(_){return Math.round(_*f.scale+f.min)})}n+=h*d}else if(c==="string"){var m=Y(s.shape);p=[];for(var w=0;w<m;w++){var b=new Uint32Array(r.slice(n,n+Ko))[0];n+=Ko;var y=new Uint8Array(r.slice(n,n+b));p.push(y),n+=b}}else{var x=Ai[c];if(g=r.slice(n,n+h*x),c==="float32")p=new Float32Array(g);else if(c==="int32")p=new Int32Array(g);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);p=new Uint8Array(g)}n+=h*x}e[u]=Ye(p,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return e}function my(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(a){if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var Di=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function nc(r){return Di?Buffer.byteLength(r):new Blob([r]).size}function Is(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function rc(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function no(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:nc(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:nc(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var dt=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(t,n);i!==null&&o.push(i)}),o},r}(),ur="://",yn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){E(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(ur)&&(t=t.slice(0,t.indexOf(ur))),E(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();E(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function Ro(r){if(r.indexOf(ur)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+yn.getSchemes().join(","));return{scheme:r.split(ur)[0],path:r.split(ur)[1]}}function oc(r,t,e){return e===void 0&&(e=!1),K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h;return X(this,function(p){switch(p.label){case 0:return E(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),E((n=dt.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],E((a=dt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),E(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),i=a[0],s=Ro(r).scheme,u=Ro(r).path,c=s===Ro(r).scheme,[4,o.load()];case 1:return l=p.sent(),e&&c?[4,yn.getManager(s).removeModel(u)]:[3,3];case 2:p.sent(),p.label=3;case 3:return[4,i.save(l)];case 4:return h=p.sent(),!e||c?[3,6]:[4,yn.getManager(s).removeModel(u)];case 5:p.sent(),p.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var Nn="models_store",fn="model_info_store";function sh(){if(!O().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Ti(r){var t=r.result;t.createObjectStore(Nn,{keyPath:"modelPath"}),t.createObjectStore(fn,{keyPath:"modelPath"})}var cr=function(){function r(t){if(this.indexedDB=sh(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){return X(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Ti(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(Nn,"readonly"),c=u.objectStore(Nn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(g){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=no(e),p=s.transaction(fn,"readwrite"),f=p.objectStore(fn),d=f.put({modelPath:n.modelPath,modelArtifactsInfo:h});d.onsuccess=function(){var g=(l=s.transaction(Nn,"readwrite")).objectStore(Nn).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:h});g.onsuccess=function(){return o({modelArtifactsInfo:h})},g.onerror=function(v){var m=(f=p.objectStore(fn)).delete(n.modelPath);m.onsuccess=function(){return s.close(),a(g.error)},m.onerror=function(w){return s.close(),a(g.error)}}},d.onerror=function(g){return s.close(),a(d.error)},p.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),ac=function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(cr.URL_SCHEME)?(t=r.slice(cr.URL_SCHEME.length),new cr(t)):null;var t};dt.registerSaveRouter(ac),dt.registerLoadRouter(ac);var yy=function(){function r(){this.indexedDB=sh()}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t=this;return X(this,function(e){return[2,new Promise(function(n,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Ti(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(fn,"readonly"),u=s.objectStore(fn).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var p=h[l];c[p.modelPath]=p.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var e=this;return X(this,function(n){var o;return t=(o=t).startsWith(cr.URL_SCHEME)?o.slice(cr.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Ti(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(fn,"readwrite"),h=l.objectStore(fn),p=h.get(t);p.onsuccess=function(){if(p.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var f=h.delete(t),d=function(){var g=(u=c.transaction(Nn,"readwrite")).objectStore(Nn).delete(t);g.onsuccess=function(){return a(p.result.modelArtifactsInfo)},g.onerror=function(v){return i(p.error)}};f.onsuccess=d,f.onerror=function(g){return d(),c.close(),i(p.error)}},p.onerror=function(f){return c.close(),i(p.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(O().getBool("IS_BROWSER"))try{yn.registerManager(cr.URL_SCHEME,new yy)}catch{}var Jt="/",rr="tensorflowjs_models",uh="info",by="model_topology",xy="weight_specs",wy="weight_data",_y="model_metadata";function ch(r){return{info:[rr,r,uh].join(Jt),topology:[rr,r,by].join(Jt),weightSpecs:[rr,r,xy].join(Jt),weightData:[rr,r,wy].join(Jt),modelMetadata:[rr,r,_y].join(Jt)}}function Cy(r){var t=r.split(Jt);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(Jt)}var lr=function(){function r(t){if(!O().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=ch(this.modelPath)}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,n,o;return X(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=no(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(Di)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return X(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Di){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),p=new Uint8Array(h.length),f=0;f<h.length;++f)p.set([h.charCodeAt(f)],f);return p.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),ic=function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(lr.URL_SCHEME)?(t=r.slice(lr.URL_SCHEME.length),new lr(t)):null;var t};dt.registerSaveRouter(ic),dt.registerLoadRouter(ic);var Ey=function(){function r(){E(O().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t,e,n,o,a,i;return X(this,function(s){for(t={},e=rr+Jt,n=Jt+uh,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=Cy(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},r.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var e,n;return X(this,function(o){var a;if(t=(a=t).startsWith(lr.URL_SCHEME)?a.slice(lr.URL_SCHEME.length):a,e=ch(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(O().getBool("IS_BROWSER"))try{yn.registerManager(lr.URL_SCHEME,new Ey)}catch{}var ky="model",Ry=".json",Iy=".weights.bin";function sc(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var ii=function(){function r(t){if(!O().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=ky),this.modelTopologyFileName=t+Ry,this.weightDataFileName=t+Iy}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s;return X(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,sc(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,sc(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:no(t)}]}})})},r.URL_SCHEME="downloads://",r}(),Sy=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,n=this;return X(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var h=c.weightsManifest;if(h!=null){var p;try{p=n.checkManifestAndWeightFiles(h,e)}catch(v){return void i(v)}var f=[],d=[],g=[];h.forEach(function(v){v.paths.forEach(function(m){d.push(m),g.push(null)}),f.push.apply(f,v.weights)}),h.forEach(function(v){v.paths.forEach(function(m){var w=new FileReader;w.onload=function(b){var y=b.target.result,x=d.indexOf(m);g[x]=y,g.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:f,weightData:Is(g),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},w.onerror=function(b){return i("Failed to weights data from file of path '"+m+"'.")},w.readAsArrayBuffer(p[m])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return rc(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=rc(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return a},r}();function uc(r,t,e,n){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e??0,n=n??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(n-e);return t(s),i}),a}))}function lh(r,t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l;return X(this,function(h){switch(h.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?O().platform.fetch:t.fetchFunc,n=r.map(function(p){return e(p,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=h.sent(),[3,4];case 2:return[4,uc(n,t.onProgress,o,a)];case 3:i=h.sent(),h.label=4;case 4:return s=i.map(function(p){return p.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,uc(s,t.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function cc(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),K(t,void 0,void 0,function(){var a,i,s,u,c,l,h,p,f,d;return X(this,function(g){switch(g.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(v,m){var w=0;v.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,x=Ai[y]*Y(b.shape),_=function(){a[m]=!0,i[m]==null&&(i[m]=[]),i[m].push({manifestEntry:b,groupOffset:w,sizeBytes:x})};o!=null?o.forEach(function(S,I){S===b.name&&(_(),s[I]=!0)}):_(),u.push(b.name),w+=x})}),!s.every(function(v){return v}))throw c=o.filter(function(v,m){return!s[m]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,m,w){return m&&v.push(w),v},[]),h=[],l.forEach(function(v){e[v].paths.forEach(function(m){var w=n+(n.endsWith("/")?"":"/")+m;h.push(w)})}),[4,r(h)];case 1:return p=g.sent(),f={},d=0,l.forEach(function(v){for(var m=e[v].paths.length,w=0,b=0;b<m;b++)w+=p[d+b].byteLength;for(var y=new ArrayBuffer(w),x=new Uint8Array(y),_=0,S=0;S<m;S++){var I=new Uint8Array(p[d+S]);x.set(I,_),_+=I.byteLength}i[v].forEach(function(k){var R=ih(y.slice(k.groupOffset,k.groupOffset+k.sizeBytes),[k.manifestEntry]);for(var N in R)f[N]=R[N]}),d+=m}),[2,f]}})})}}dt.registerSaveRouter(function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(ii.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new ii(t)}(r.slice(ii.URL_SCHEME.length)):null});var hh=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=O().platform.fetch,E(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&E(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,n,o,a;return X(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:no(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,n,o,a,i,s,u,c,l,h,p;return X(this,function(f){switch(f.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=f.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");f.label=2;case 2:return f.trys.push([2,4,,5]),[4,t.json()];case 3:return e=f.sent(),[3,5];case 4:throw f.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:p=f.sent(),l=p[0],h=p[1],f.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,h,p;return X(this,function(f){switch(f.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(d){var g=d.lastIndexOf("/"),v=d.lastIndexOf("?"),m=d.substring(0,g),w=v>g?d.substring(v):"";return[m+"/",w]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],t.forEach(function(d){d.paths.forEach(function(g){h.push(i+g+a)})}),[4,lh(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return p=f.sent(),[2,[s,Is(p)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function Ni(r){return r.match(hh.URL_SCHEME_REGEX)!=null}var lc=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return Ni(e)}):Ni(r))?Pi(r,{onProgress:t}):null};function Pi(r,t){return new hh(r,t)}dt.registerSaveRouter(lc),dt.registerLoadRouter(lc);var si=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,this.modelArtifacts]})})},r}(),Ay=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,this.saveHandler(t)]})})},r}(),ph=Object.freeze({browserFiles:function(r){return new Sy(r)},browserHTTPRequest:function(r,t){return Pi(r,t)},concatenateArrayBuffers:Is,decodeWeights:ih,encodeWeights:function(r,t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return X(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var p={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var f=new Promise(function(d){return K(s,void 0,void 0,function(){var g,v,m,w,b,y,x;return X(this,function(_){switch(_.label){case 0:return[4,h.bytes()];case 1:for(g=_.sent(),v=g.reduce(function(S,I){return S+I.length},0)+Ko*g.length,m=new Uint8Array(v),w=0,b=0;b<g.length;b++)y=g[b],x=new Uint8Array(new Uint32Array([y.length]).buffer),m.set(x,w),w+=Ko,m.set(y,w),w+=y.length;return d(m),[2]}})})});n.push(f)}else n.push(h.data());t!=null&&(p.group=t),e.push(p)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:my(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new si(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new si({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new si({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return dt.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:no,getSaveHandlers:function(r){return dt.getSaveHandlers(r)},http:Pi,isHTTPScheme:Ni,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),K(this,void 0,void 0,function(){return X(this,function(o){return[2,cc(function(a){return lh(a,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return dt.registerLoadRouter(r)},registerSaveRouter:function(r){return dt.registerSaveRouter(r)},weightsLoaderFactory:cc,withSaveHandler:function(r){return new Ay(r)},copyModel:function(r,t){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,oc(r,t,!1)]})})},listModels:function(){return K(this,void 0,void 0,function(){var r,t,e,n,o,a,i;return X(this,function(s){switch(s.label){case 0:r=yn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,yn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+ur+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,oc(r,t,!0)]})})},removeModel:function(r){return K(this,void 0,void 0,function(){var t;return X(this,function(e){return t=Ro(r),[2,yn.getManager(t.scheme).removeModel(t.path)]})})}}),Jn;A({confusionMatrix_:function(r,t,e){var n=C(r,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=Ei(n.asType("int32"),e),i=Ei(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}});var Dy=A({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Mc("FromPixels",T.backendName)!=null)return T.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,h).data:n||e?s=r.data:(a||o)&&(Jn==null&&(Jn=document.createElement("canvas").getContext("2d")),Jn.canvas.width=l,Jn.canvas.height=h,Jn.drawImage(r,0,0,l,h),s=Jn.getImageData(0,0,l,h).data),t===4)u=new Int32Array(s);else{var p=l*h;u=new Int32Array(p*t);for(var f=0;f<p;f++)for(var d=0;d<t;++d)u[f*t+d]=s[4*f+d]}return ns(u,[h,l,t],"int32")}}),Ss=Object.freeze({toPixels:function(r,t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,h,p,f,d,g,v,m,w,b,y,x,_,S,I;return X(this,function(k){switch(k.label){case 0:if(e=C(r,"img","toPixels"),r instanceof Re||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],a=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=k.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=k.sent(),h=l[0],p=l[1],f=h[0],d=p[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(f<0||d>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+f+" - "+d+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(f<0||d>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+f+" - "+d+"].")}for(g=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),m=0;m<o*a;++m)w=void 0,b=void 0,y=void 0,x=void 0,i===1?(w=s[m]*g,b=s[m]*g,y=s[m]*g,x=255):i===3?(w=s[3*m]*g,b=s[3*m+1]*g,y=s[3*m+2]*g,x=255):i===4&&(w=s[4*m]*g,b=s[4*m+1]*g,y=s[4*m+2]*g,x=s[4*m+3]*g),v[(_=4*m)+0]=Math.round(w),v[_+1]=Math.round(b),v[_+2]=Math.round(y),v[_+3]=Math.round(x);return t!=null&&(t.width=a,t.height=o,S=t.getContext("2d"),I=new ImageData(v,a,o),S.putImageData(I,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:Dy}),Ty=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),Ny=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function $n(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Ny.register(r)}var Hn=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return Rt(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return st(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return Vd(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&st(this.iterations_)},t.prototype.saveIterations=function(){return K(this,void 0,void 0,function(){return X(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:G(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(Ty);Object.defineProperty(Hn,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Py=function(r){function t(e,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=T.backend.epsilon()),a}return Rt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:q(function(){return ge(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:q(function(){return ge(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;q(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),h=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),p=c.mul(n.rho).add(h.square().mul(1-n.rho));u.assign(l),c.assign(p);var f=h.mul(-n.learningRate).add(i);i.assign(f)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(st(this.accumulatedGrads.map(function(e){return e.variable})),st(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}(Hn);$n(Py);var Fy=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return Rt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:q(function(){return Wt(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable;q(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(T.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&st(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}(Hn);$n(Fy);var Oy=function(r){function t(e,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],q(function(){i.accBeta1=G(n).variable(),i.accBeta2=G(o).variable()}),a==null&&(i.epsilon=T.backend.epsilon()),i}return Rt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);q(function(){var a=ze(1,n.accBeta1),i=ze(1,n.accBeta2);o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:q(function(){return ge(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:q(function(){return ge(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,p=n.accumulatedSecondMoment[u].variable,f=h.mul(n.beta1).add(l.mul(1-n.beta1)),d=p.mul(n.beta2).add(l.square().mul(1-n.beta2)),g=f.div(a),v=d.div(i);h.assign(f),p.assign(d);var m=g.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(m)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&st(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&st(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var n,o=this;return X(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),q(function(){o.accBeta1.assign(jo(o.beta1,o.iterations_+1)),o.accBeta2.assign(jo(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}(Hn);$n(Oy);var My=function(r){function t(e,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],q(function(){s.iteration=G(0).variable(),s.accBeta1=G(n).variable()}),a==null&&(s.epsilon=T.backend.epsilon()),s}return Rt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);q(function(){var a=ze(1,n.accBeta1),i=Ct(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ge(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:ge(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,p=n.accumulatedWeightedInfNorm[u].variable,f=h.mul(n.beta1).add(l.mul(1-n.beta1)),d=p.mul(n.beta2),g=l.abs(),v=d.maximum(g);h.assign(f),p.assign(v);var m=i.div(a).mul(f.div(v.add(n.epsilon))).add(c);c.assign(m)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&st(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&st(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}(Hn);$n(My);var fh=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return Rt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=T.registeredVariables[o];q(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=nd(G(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}(Hn);$n(fh);var By=function(r){function t(e,n,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=G(a.momentum),a}return Rt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:q(function(){return ge(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&q(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&st(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(fh);$n(By);var Ly=function(r){function t(e,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=T.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Rt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:q(function(){return ge(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:q(function(){return ge(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:q(function(){return ge(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;q(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var h=n.accumulatedMeanGrads[a].variable,p=h.mul(n.decay).add(s.mul(1-n.decay)),f=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(p.square().add(n.epsilon)).sqrt()));u.assign(l),h.assign(p),c.assign(f);var d=i.sub(f);i.assign(d)}else{var g=u.mul(n.decay).add(s.square().mul(1-n.decay));f=c.mul(n.momentum).add(s.mul(n.learningRate).div(g.add(n.epsilon).sqrt())),u.assign(g),c.assign(f),d=i.sub(f),i.assign(d)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&st(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&st(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&st(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}(Hn);$n(Ly);Re.prototype.squaredDifference=function(r){return Sl(this,r)},F=ly;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Fi=function(r,t){return Fi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},Fi(r,t)};function re(r,t){Fi(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Ze=function(){return Ze=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},Ze.apply(this,arguments)};function Q(r,t,e,n){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(h){i(h)}}function u(l){try{c(n.throw(l))}catch(h){i(h)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,[])).next())})}function Z(r,t){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Or(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var hr=function(){function r(t,e){if(!Fn(t)||!Fn(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function ga(r,t){return r instanceof Re&&r.shape.length===t}function Wy(r){return ga(r,2)}function ma(r){return ga(r,3)}function bn(r){return ga(r,4)}function Uy(r){return r%1!==0}function hc(r){return r%2===0}function dh(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function pc(r){return r&&r.width&&r.height}function zy(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new hr(Math.round(e*o),Math.round(n*o))}function As(r){return r.reduce(function(t,e){return t.add(e)},new ye(0,0)).div(new ye(r.length,r.length))}function $r(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function Fn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function fc(r){return Fn(r)&&0<=r&&r<=1}var ye=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),zt=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(Fn),a=[n.x,n.y,n.width,n.height].every(Fn);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Fn)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new ye(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new ye(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new ye(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new ye(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,a=t.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:e,y:n,width:o,height:a})},r.prototype.rescale=function(t){var e=pc(t)?t.width:t,n=pc(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,h=s-c,p=Math.min(l,t-u),f=Math.min(h,e-c);return new r({x:u,y:c,width:p,height:f}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,a=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,h=this.right,p=this.bottom;return h>e&&(s=-h+e+n,h=e),p>t&&(u=-p+t+o,p=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:p,x:c,ex:h,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),ya=function(r){re(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:o,bottom:a},i)||this}return t}(zt),vh=function(){function r(t,e,n,o,a){this._imageDims=new hr(a.width,a.height),this._score=t,this._classScore=e,this._className=n,this._box=new zt(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new zt(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),wt=function(r){re(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new t(a,i,s)},t}(vh);function Vy(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),a=n*o;return e?a/(r.area+t.area-a):a/Math.min(r.area,t.area)}function $y(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new ya(n,o,a,i)}function Hr(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var h=u[l],p=r[s],f=r[h];c.push(Vy(p,f,n))}o=o.filter(function(d,g){return c[g]<=e})};o.length>0;)i();return a}function ro(r,t){return q(function(){var e=t[0],n=t[1],o=t[2],a=Wt(Or(r.shape.slice(0,3),[1]),e),i=Wt(Or(r.shape.slice(0,3),[1]),n),s=Wt(Or(r.shape.slice(0,3),[1]),o),u=Le([a,i,s],3);return ze(r,u)})}function Hy(r,t){return t===void 0&&(t=!1),q(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(t?.5:1)),s=n>o?2:1,u=function(f){var d=r.shape.slice();return d[s]=f,Wt(d,0)},c=u(i),l=a-c.shape[s],h=t&&l?u(l):null,p=[h,r,c].filter(function(f){return!!f}).map(function(f){return f.toFloat()});return Le(p,s)})}function ui(r){return 1/(1+Math.exp(-r))}var Ds=function(r){re(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:o,height:a},i)||this}return t}(zt),Gy=.5,jy=.43,qy=.45,Xo=function(){function r(t,e,n){n===void 0&&(n=new ye(0,0));var o=e.width,a=e.height;this._imgDims=new hr(o,a),this._shift=n,this._positions=t.map(function(i){return i.mul(new ye(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new ye(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new ye(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new ye(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof wt?t.box.floor():new zt(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],a=function(h){return o.sub(h).magnitude()},i=(a(e)+a(n))/2,s=Math.floor(i/qy),u=As(t),c=Math.floor(Math.max(0,u.x-Gy*s)),l=Math.floor(Math.max(0,u.y-jy*s));return new Ds(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=$y(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),Ky=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],As([e[3],e[4]])]},t}(Xo),Xy=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(As)},t}(Xo),dc=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+dh(this.distance)+")":"")},r}(),vc=function(r){re(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(zt.assertIsValidBox(e,n),!Fn(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(zt),bo=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){re(t,r);function t(e,n,o,a){var i=r.call(this,e,n)||this;return i._score=o,i._classScore=a,i}return t.assertIsValidPredictedBox=function(e,n){if(vc.assertIsValidLabeledBox(e,n),!fc(e.score)||!fc(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(vc);function Oi(r){return r.detection instanceof wt}function Ts(r,t){var e={detection:t};return Object.assign({},r,e)}function gh(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function mh(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function yh(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=mh();return Ze({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:t||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:n,fetch:o},a)}function bh(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function xh(){return typeof global=="object"&&typeof require=="function"&&typeof ap<"u"&&typeof process<"u"&&!!process.version}var Be;function Yy(){if(!Be)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Be}function Mi(r){Be=r}function Ns(){bh()&&Mi(gh()),xh()&&Mi(yh())}function Jy(r){if(Be||Ns(),!Be)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?Be.Canvas:t,n=r.Image,o=n===void 0?Be.Image:n;Be.Canvas=e,Be.Image=o,Be.createCanvasElement=r.createCanvasElement||function(){return new e},Be.createImageElement=r.createImageElement||function(){return new o},Be.ImageData=r.ImageData||Be.ImageData,Be.Video=r.Video||Be.Video,Be.fetch=r.fetch||Be.fetch,Be.readFile=r.readFile||Be.readFile}var rt={getEnv:Yy,setEnv:Mi,initialize:Ns,createBrowserEnv:gh,createFileSystem:mh,createNodejsEnv:yh,monkeyPatch:Jy,isBrowser:bh,isNodejs:xh};Ns();function Ps(r){return!rt.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function Zt(r){var t=rt.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=Ps(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var dn;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(dn||(dn={}));var wh=function(){function r(t){t===void 0&&(t={});var e=t.anchorPosition,n=t.backgroundColor,o=t.fontColor,a=t.fontSize,i=t.fontStyle,s=t.padding;this.anchorPosition=e||dn.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}(),_h=function(){function r(t,e,n){n===void 0&&(n={}),this.text=typeof t=="string"?[t]:t instanceof r?t.text:t,this.anchor=e,this.options=new wh(n)}return r.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map(function(n){return t.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*e},r.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},r.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,o=n===dn.BOTTOM_RIGHT||n===dn.TOP_RIGHT,a=n===dn.BOTTOM_LEFT||n===dn.BOTTOM_RIGHT,i=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,h=e.height,p=Math.max(Math.min(u,l-i),0),f=Math.max(Math.min(c,h-s),0);return{x:p,y:f}}return{x:u,y:c}},r.prototype.draw=function(t){var e=Ps(t),n=Zt(e),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),h=this.measureHeight();n.fillStyle=a;var p=this.getUpperLeft(n,e);n.fillRect(p.x,p.y,l,h),n.fillStyle=i,this.text.forEach(function(f,d){var g=c+p.x,v=c+p.y+(d+1)*s;n.fillText(f,g,v)})},r}(),Qy=function(){function r(t){t===void 0&&(t={});var e=t.boxColor,n=t.lineWidth,o=t.label,a=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var i={anchorPosition:dn.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new wh(Object.assign({},i,a))}return r}(),Zy=function(){function r(t,e){e===void 0&&(e={}),this.box=new zt(t),this.options=new Qy(e)}return r.prototype.draw=function(t){var e=Zt(t),n=this.options,o=n.boxColor,a=n.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=o,e.lineWidth=a,e.strokeRect(s,u,c,l);var h=this.options.label;h&&new _h([h],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(t)},r}();function eb(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof wt?n.score:Oi(n)?n.detection.score:void 0,a=n instanceof wt?n.box:Oi(n)?n.detection.box:new zt(n),i=o?""+dh(o):void 0;new Zy(a,{label:i}).draw(r)})}function Ch(r){var t=rt.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function tb(r){return new Promise(function(t,e){if(r instanceof rt.getEnv().Canvas||Ch(r))return t();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function Eh(r){var t=rt.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new hr(r.naturalWidth,r.naturalHeight):r instanceof n?new hr(r.videoWidth,r.videoHeight):new hr(r.width,r.height)}function ba(r){var t=r.width,e=r.height,n=rt.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function Fs(r,t){var e=rt.getEnv().ImageData;if(!(r instanceof e)&&!Ch(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=Eh(r),o=n.width,a=n.height,i=ba({width:o,height:a});return r instanceof e?Zt(i).putImageData(r,0,0):Zt(i).drawImage(r,0,0,o,a),i}function nb(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s;return Z(this,function(u){switch(u.label){case 0:return e=rt.getEnv().createCanvasElement(),n=r.shape.slice(bn(r)?1:0),o=n[0],a=n[1],i=n[2],s=q(function(){return r.as3D(o,a,i).toInt()}),[4,Ss.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function gc(r){var t=rt.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function rb(r,t,e){e===void 0&&(e=!1);var n=rt.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=Eh(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=ba({width:t,height:t}),h=r instanceof a?r:Fs(r),p=Math.abs(u-c)/2,f=e&&u<c?p:0,d=e&&c<u?p:0;return Zt(l).drawImage(h,f,d,u,c),l}var Yo=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,a){if(ma(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(bn(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof rt.getEnv().Canvas?o:Fs(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return $r(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return zy({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,q(function(){var o=$r(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof Re){var u=bn(s)?s:s.expandDims();return u=Hy(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=_s.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof rt.getEnv().Canvas)return Ss.fromPixels(rb(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=gt(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return a})},r}();function je(r){return Q(this,void 0,void 0,function(){var t,e,n;return Z(this,function(o){switch(o.label){case 0:if(r instanceof Yo)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=t.map(Ps),n.forEach(function(a,i){if(!gc(a)&&!ma(a)&&!bn(a))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(bn(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return gc(a)&&tb(a)}))];case 1:return o.sent(),[2,new Yo(n,Array.isArray(r))]}})})}function Os(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return Z(this,function(c){switch(c.label){case 0:return e=rt.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,je(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,nb(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=Zt(n),u=t.map(function(l){return l instanceof wt?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var h=l.x,p=l.y,f=l.width,d=l.height,g=ba({width:f,height:d});return Zt(g).putImageData(s.getImageData(h,p,f,d),0,0),g})]}})})}function Ms(r,t){return Q(this,void 0,void 0,function(){return Z(this,function(e){if(!ma(r)&&!bn(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(bn(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,q(function(){var n=r.shape.slice(bn(r)?1:0),o=n[0],a=n[1],i=n[2],s=t.map(function(c){return c instanceof wt?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,h=c.y,p=c.width,f=c.height;return Xl(r.as3D(o,a,i),[h,l,0],[f,p,i])});return u})]})})}function ob(r,t){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return e=rt.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function ab(r){return Q(this,void 0,void 0,function(){return Z(this,function(t){switch(t.label){case 0:return[4,ob(r)];case 1:return[2,t.sent().json()]}})})}function kh(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function ib(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a;return Z(this,function(i){switch(i.label){case 0:return e=kh(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,ab(n)];case 1:return a=i.sent(),[2,ph.loadWeights(a,o)]}})})}var on=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof yr})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof yr)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,a=Ye(o.dataSync());o.dispose(),t.reassignParamFromPath(n,a)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,ib(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,h;return Z(this,function(p){switch(p.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=rt.getEnv().readFile,n=kh(t,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(f){return Promise.all(f.map(function(d){return e(d).then(function(g){return g.buffer})}))},s=ph.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[p.sent().toString()]),[4,s(u,a)];case 2:return h=p.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof Re))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function vt(r,t,e){return q(function(){var n=ms(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=ce(n,t.bias),n})}function ci(r,t,e){return e===void 0&&(e=!1),q(function(){var n=Ie(e?ce(_t(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):vt(r,t.conv0,[2,2])),o=vt(n,t.conv1,[1,1]),a=Ie(ce(n,o)),i=vt(a,t.conv2,[1,1]);return Ie(ce(n,ce(o,i)))})}function xo(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),q(function(){var o=Ie(e?ce(_t(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):vt(r,t.conv0,n?[2,2]:[1,1])),a=vt(o,t.conv1,[1,1]),i=Ie(ce(o,a)),s=vt(i,t.conv2,[1,1]),u=Ie(ce(o,ce(a,s))),c=vt(u,t.conv3,[1,1]);return Ie(ce(o,ce(a,ce(s,c))))})}function kt(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),q(function(){var o=ce(_t(r,t.filters,[1,1],e),t.bias);return n?Ie(o):o})}function an(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function xa(r,t){return function(e,n,o,a){var i=ot(r(e*n*o*o),[o,o,e,n]),s=Me(r(n));return t.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function Bs(r,t){return function(e,n,o){var a=mn(r(e*n),[e,n]),i=Me(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var Rh=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function Ls(r,t){return function(e,n,o){var a=ot(r(9*e),[3,3,e,1]),i=ot(r(e*n),[1,1,e,n]),s=Me(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Rh(a,i,s)}}function Ws(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new Rh(e,n,o)}}function Cn(r,t){return function(e,n,o){var a=r[e];if(!ga(a,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+a);return t.push({originalPath:e,paramPath:o||e}),a}}function sn(r){var t=r;function e(o){var a=t.slice(0,o);return t=t.slice(o),a}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function Ih(r,t){var e=xa(r,t),n=Ls(r,t);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),h=n(s,s,u+"/conv1"),p=n(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:p}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),h=l.conv0,p=l.conv1,f=l.conv2,d=n(s,s,u+"/conv3");return{conv0:h,conv1:p,conv2:f,conv3:d}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function sb(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Ih(n,t).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function Sh(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function Ah(r,t){var e=Cn(r,t),n=Sh(e),o=Ws(e);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2"),p=o(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:p}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function ub(r){var t=[],e=Ah(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return an(r,t),{params:n,paramMappings:t}}var Dh=function(r){re(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return q(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=ro(o,a).div(G(255)),s=xo(i,n.dense0,!0);return s=xo(s,n.dense1),s=xo(s,n.dense2),s=xo(s,n.dense3),s=to(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,je(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return ub(e)},t.prototype.extractParams=function(e){return sb(e)},t}(on);function Mt(r,t){return q(function(){return ce(fa(r,t.weights),t.bias)})}function cb(r,t,e){var n=[],o=sn(r),a=o.extractWeights,i=o.getRemainingWeights,s=Bs(a,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function lb(r){var t=[],e=Cn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return an(r,t),{params:o,paramMappings:t}}function Th(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var Nh=function(r){re(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return q(function(){var a=e instanceof Yo?n.faceFeatureExtractor.forwardInput(e):e;return Mt(a.as2D(a.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return cb(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=Th(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),lb(a)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t}(on),mc=["neutral","happy","sad","angry","fearful","disgusted","surprised"],hb=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);mc.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return mc.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),pb=function(r){re(t,r);function t(e){return e===void 0&&(e=new Dh),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return q(function(){return nn(n.runNet(e))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,je(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,je(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(We(o).map(function(c){return Q(s,void 0,void 0,function(){var l;return Z(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new hb(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(Nh);function Ph(r,t){var e={expressions:t};return Object.assign({},r,e)}function fb(r){return Oi(r)&&r.landmarks instanceof Xo&&r.unshiftedLandmarks instanceof Xo&&r.alignedRect instanceof wt}function Us(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),a=r.detection.imageDims,i=new wt(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}function db(r,t){var e=xa(r,t),n=Ls(r,t);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),h=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function vb(r,t){var e=[],n=sn(r),o=n.extractWeights,a=n.getRemainingWeights,i=db(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),p=c(32,64,"entry_flow/reduction_block_0"),f=c(64,128,"entry_flow/reduction_block_1"),d={conv_in:h,reduction_block_0:p,reduction_block_1:f},g={};$r(t,0,1).forEach(function(b){g["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var v=c(128,256,"exit_flow/reduction_block"),m=u(256,512,"exit_flow/separable_conv"),w={reduction_block:v,separable_conv:m};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:d,middle_flow:g,exit_flow:w}}}function gb(r,t){var e=Cn(r,t),n=Sh(e),o=Ws(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function mb(r,t){var e=[],n=gb(r,e),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},p={};$r(t,0,1).forEach(function(v){p["main_block_"+v]=s("middle_flow/main_block_"+v)});var f=i("exit_flow/reduction_block"),d=a("exit_flow/separable_conv"),g={reduction_block:f,separable_conv:d};return an(r,e),{params:{entry_flow:h,middle_flow:p,exit_flow:g},paramMappings:e}}function Fh(r,t,e){return ce(_t(r,t.filters,e,"same"),t.bias)}function li(r,t,e){e===void 0&&(e=!0);var n=e?Ie(r):r;return n=vt(n,t.separable_conv0,[1,1]),n=vt(Ie(n),t.separable_conv1,[1,1]),n=$e(n,[3,3],[2,2],"same"),n=ce(n,Fh(r,t.expansion_conv,[2,2])),n}function yb(r,t){var e=vt(Ie(r),t.separable_conv0,[1,1]);return e=vt(Ie(e),t.separable_conv1,[1,1]),e=vt(Ie(e),t.separable_conv2,[1,1]),e=ce(e,r),e}var bb=function(r){re(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return q(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=ro(a,i).div(G(256)),u=Ie(Fh(s,o.entry_flow.conv_in,[2,2]));return u=li(u,o.entry_flow.reduction_block_0,!1),u=li(u,o.entry_flow.reduction_block_1),$r(n._numMainBlocks,0,1).forEach(function(c){u=yb(u,o.middle_flow["main_block_"+c])}),u=li(u,o.exit_flow.reduction_block),u=Ie(vt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,je(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return mb(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return vb(e,this._numMainBlocks)},t}(on);function xb(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Bs(n,t),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function wb(r){var t=[],e=Cn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return an(r,t),{params:o,paramMappings:t}}var Jo;(function(r){r.FEMALE="female",r.MALE="male"})(Jo||(Jo={}));var _b=function(r){re(t,r);function t(e){e===void 0&&(e=new bb(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return q(function(){var a=e instanceof Yo?n.faceFeatureExtractor.forwardInput(e):e,i=to(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Mt(i,o.fc.age).as1D(),u=Mt(i,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return q(function(){var o=n.runNet(e),a=o.age,i=o.gender;return{age:a,gender:nn(i)}})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,je(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return Z(this,function(l){switch(l.label){case 0:return[4,je(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=We(o.age),i=We(o.gender),s=a.map(function(h,p){return{ageTensor:h,genderTensor:i[p]}}),[4,Promise.all(s.map(function(h){var p=h.ageTensor,f=h.genderTensor;return Q(c,void 0,void 0,function(){var d,g,v,m,w;return Z(this,function(b){switch(b.label){case 0:return[4,p.data()];case 1:return d=b.sent()[0],[4,f.data()];case 2:return g=b.sent()[0],v=g>.5,m=v?Jo.MALE:Jo.FEMALE,w=v?g:1-g,p.dispose(),f.dispose(),[2,{age:d,gender:m,genderProbability:w}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return xb(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=Th(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),wb(a)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),a=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},t}(on),Oh=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return q(function(){var s=function(p,f){return gt([Wt([68],p),Wt([68],f)],1).as2D(1,136).as1D()},u=function(p,f){var d=a[p],g=d.width,v=d.height;return f(g,v)?Math.abs(g-v)/2:0},c=function(p){return u(p,function(f,d){return f<d})},l=function(p){return u(p,function(f,d){return d<f})},h=e.mul(Wt([i,136],n)).sub(gt(Array.from(Array(i),function(p,f){return s(c(f),l(f))}))).div(gt(Array.from(Array(i),function(p,f){return s(a[f].width,a[f].height)})));return h})},t.prototype.forwardInput=function(e){var n=this;return q(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,je(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,je(e)];case 1:return n=s.sent(),o=q(function(){return We(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return Q(i,void 0,void 0,function(){var l,h,p,f,d;return Z(this,function(g){switch(g.label){case 0:return p=(h=Array).from,[4,u.data()];case 1:return l=p.apply(h,[g.sent()]),f=l.filter(function(v,m){return hc(m)}),d=l.filter(function(v,m){return!hc(m)}),[2,new Xy(Array(68).fill(0).map(function(v,m){return new ye(f[m],d[m])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(Nh),Mh=function(r){re(t,r);function t(e){return e===void 0&&(e=new Dh),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Oh);function Cb(r){var t=[],e=Ah(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return an(r,t),{params:n,paramMappings:t}}function Eb(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Ih(n,t).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var kb=function(r){re(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return q(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=ro(o,a).div(G(255)),s=ci(i,n.dense0,!0);return s=ci(s,n.dense1),s=ci(s,n.dense2),s=to(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,je(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Cb(e)},t.prototype.extractParams=function(e){return Eb(e)},t}(on),Rb=function(r){re(t,r);function t(e){return e===void 0&&(e=new kb),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Oh);(function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Mh);function Ib(r,t){return ce(nt(r,t.weights),t.biases)}function zs(r,t,e,n,o){o===void 0&&(o="same");var a=t.conv,i=a.filters,s=a.bias,u=_t(r,i,e,o);return u=ce(u,s),u=Ib(u,t.scale),n?Ie(u):u}function Sb(r,t){return zs(r,t,[1,1],!0)}function Bh(r,t){return zs(r,t,[1,1],!1)}function Lh(r,t){return zs(r,t,[2,2],!0,"valid")}function Ab(r,t){function e(s,u,c){var l=r(s),h=l.length/(u*c*c);if(Uy(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return q(function(){return xn(ot(l,[u,h,c,c]),[2,3,1,0])})}function n(s,u,c,l){var h=e(s,u,c),p=Me(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:p}}function o(s,u){var c=Me(r(s)),l=Me(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var h=n(s,u,c,l+"/conv"),p=o(u,l+"/scale");return{conv:h,scale:p}}function i(s,u,c,l,h){h===void 0&&(h=!1);var p=a((h?.5:1)*s,u,c,l+"/conv1"),f=a(s,u,c,l+"/conv2");return{conv1:p,conv2:f}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function Db(r){var t=sn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=Ab(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),p=s(36864,64,3,"conv64_down",!0),f=s(36864,64,3,"conv64_1"),d=s(36864,64,3,"conv64_2"),g=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),m=s(147456,128,3,"conv128_1"),w=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),x=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),S=q(function(){return xn(mn(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var I={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:p,conv64_1:f,conv64_2:d,conv64_3:g,conv128_down:v,conv128_1:m,conv128_2:w,conv256_down:b,conv256_1:y,conv256_2:x,conv256_down_out:_,fc:S};return{params:I,paramMappings:o}}function Tb(r,t){var e=Cn(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function Nb(r){var t=[],e=Tb(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),p=o("conv64_3"),f=o("conv128_down"),d=o("conv128_1"),g=o("conv128_2"),v=o("conv256_down"),m=o("conv256_1"),w=o("conv256_2"),b=o("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!Wy(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var x={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:p,conv128_down:f,conv128_1:d,conv128_2:g,conv256_down:v,conv256_1:m,conv256_2:w,conv256_down_out:b,fc:y};return an(r,t),{params:x,paramMappings:t}}function Tt(r,t){var e=Sb(r,t.conv1);return e=Bh(e,t.conv2),e=ce(e,r),e=Ie(e),e}function wo(r,t){var e=Lh(r,t.conv1);e=Bh(e,t.conv2);var n=to(r,2,2,"valid"),o=Ce(n.shape),a=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=Or(e.shape);s[1]=1;var u=Ce(s);e=Le([e,u],1);var c=Or(e.shape);c[2]=1;var l=Ce(c);e=Le([e,l],2)}return n=a?Le([n,o],3):n,e=ce(n,e),e=Ie(e),e}var Pb=function(r){re(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return q(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=ro(o,a).div(G(256)),s=Lh(i,n.conv32_down);s=$e(s,3,2,"valid"),s=Tt(s,n.conv32_1),s=Tt(s,n.conv32_2),s=Tt(s,n.conv32_3),s=wo(s,n.conv64_down),s=Tt(s,n.conv64_1),s=Tt(s,n.conv64_2),s=Tt(s,n.conv64_3),s=wo(s,n.conv128_down),s=Tt(s,n.conv128_1),s=Tt(s,n.conv128_2),s=wo(s,n.conv256_down),s=Tt(s,n.conv256_1),s=Tt(s,n.conv256_2),s=wo(s,n.conv256_down_out);var u=s.mean([1,2]),c=fa(u,n.fc);return c})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,je(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,je(e)];case 1:return n=s.sent(),o=q(function(){return We(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Nb(e)},t.prototype.extractParams=function(e){return Db(e)},t}(on);function Wh(r,t){var e={descriptor:t};return Object.assign({},r,e)}function Uh(r,t){var e={age:t};return Object.assign({},r,e)}function zh(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var Vh=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function Fb(r,t){function e(u,c){var l=ot(r(9*u),[3,3,u,1]),h=Me(r(u)),p=Me(r(u)),f=Me(r(u)),d=Me(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:p,batch_norm_mean:f,batch_norm_variance:d}}function n(u,c,l,h,p){var f=ot(r(u*c*l*l),[l,l,u,c]),d=Me(r(c));return t.push({paramPath:h+"/filters"},{paramPath:h+"/"+(p?"batch_norm_offset":"bias")}),{filters:f,bias:d}}function o(u,c,l,h){var p=n(u,c,l,h,!0),f=p.filters,d=p.bias;return{filters:f,batch_norm_offset:d}}function a(u,c,l){var h=e(u,l+"/depthwise_conv"),p=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:p}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),h=a(128,128,"mobilenetv1/conv_3"),p=a(128,256,"mobilenetv1/conv_4"),f=a(256,256,"mobilenetv1/conv_5"),d=a(256,512,"mobilenetv1/conv_6"),g=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),m=a(512,512,"mobilenetv1/conv_9"),w=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),x=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:p,conv_5:f,conv_6:d,conv_7:g,conv_8:v,conv_9:m,conv_10:w,conv_11:b,conv_12:y,conv_13:x}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),h=o(128,256,3,"prediction_layer/conv_3"),p=o(256,128,1,"prediction_layer/conv_4"),f=o(128,256,3,"prediction_layer/conv_5"),d=o(256,64,1,"prediction_layer/conv_6"),g=o(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),m=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),w=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),x=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),S=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),I=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),k=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),R=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),N=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),D={box_encoding_predictor:v,class_predictor:m},L={box_encoding_predictor:w,class_predictor:b},M={box_encoding_predictor:y,class_predictor:x},B={box_encoding_predictor:_,class_predictor:S},z={box_encoding_predictor:I,class_predictor:k},U={box_encoding_predictor:R,class_predictor:N};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:p,conv_5:f,conv_6:d,conv_7:g,box_predictor_0:D,box_predictor_1:L,box_predictor_2:M,box_predictor_3:B,box_predictor_4:z,box_predictor_5:U}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function Ob(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Fb(n,t),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=ns(n(5118*4),[1,5118,4]),h={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:t}}function Mb(r,t){var e=Cn(r,t);function n(c,l,h){var p=e(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),f=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:p,batch_norm_offset:f}}function o(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",p=l+"/depthwise_conv",f=l+"/pointwise_conv",d=e(h+"/depthwise_weights",4,p+"/filters"),g=e(h+"/BatchNorm/gamma",1,p+"/batch_norm_scale"),v=e(h+"/BatchNorm/beta",1,p+"/batch_norm_offset"),m=e(h+"/BatchNorm/moving_mean",1,p+"/batch_norm_mean"),w=e(h+"/BatchNorm/moving_variance",1,p+"/batch_norm_variance");return{depthwise_conv:{filters:d,batch_norm_scale:g,batch_norm_offset:v,batch_norm_mean:m,batch_norm_variance:w},pointwise_conv:n("MobilenetV1",c,f)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var h=e(c+"/weights",4,l+"/filters"),p=e(c+"/biases",1,l+"/bias");return{filters:h,bias:p}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function Bb(r){var t=[],e=Mb(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!ma(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return an(r,t),{params:i,paramMappings:t}}function Nt(r,t,e){return q(function(){var n=_t(r,t.filters,e,"same");return n=ce(n,t.batch_norm_offset),fs(n,0,6)})}var Lb=.0010000000474974513;function Wb(r,t,e){return q(function(){var n=pa(r,t.filters,e,"same");return n=Fl(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,Lb),fs(n,0,6)})}function Ub(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function zb(r,t){return q(function(){var e=null,n=Nt(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(a,i){var s=i+1,u=Ub(s);n=Wb(n,a.depthwise_conv,u),n=Nt(n,a.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function Vb(r,t,e,n,o){var a=r.shape[0],i=Math.min(e,a),s=t.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>o}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var h=l.score,p=c.length-1;p>=0;--p){var f=$b(r,l.boxIndex,c[p]);if(f!==0&&(l.score*=u(f),l.score<=o))break}h===l.score&&c.push(l.boxIndex)}}),c}function $b(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),a=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),h=Math.max(n[e][1],n[e][3]),p=(i-o)*(s-a),f=(l-u)*(h-c);if(p<=0||f<=0)return 0;var d=Math.max(o,u),g=Math.max(a,c),v=Math.min(i,l),m=Math.min(s,h),w=Math.max(v-d,0)*Math.max(m-g,0);return w/(p+f-w)}function Hb(r){var t=We(xn(r,[1,0])),e=[ze(t[2],t[0]),ze(t[3],t[1])],n=[ce(t[0],Ct(e[0],G(2))),ce(t[1],Ct(e[1],G(2)))];return{sizes:e,centers:n}}function Gb(r,t){var e=Hb(r),n=e.sizes,o=e.centers,a=We(xn(t,[1,0])),i=Ct(nt(Si(Ct(a[2],G(5))),n[0]),G(2)),s=ce(nt(Ct(a[0],G(10)),n[0]),o[0]),u=Ct(nt(Si(Ct(a[3],G(5))),n[1]),G(2)),c=ce(nt(Ct(a[1],G(10)),n[1]),o[1]);return xn(gt([ze(s,i),ze(c,u),ce(s,i),ce(c,u)]),[1,0])}function jb(r,t,e){return q(function(){var n=r.shape[0],o=Gb(Et(ir(e.extra_dim,[n,1,1]),[-1,4]),Et(r,[-1,4]));o=Et(o,[n,o.shape[0]/n,4]);var a=Dl(Ut(t,[0,0,1],[-1,-1,-1])),i=Ut(a,[0,0,0],[-1,-1,1]);i=Et(i,[n,i.shape[1]]);var s=We(o),u=We(i);return{boxes:s,scores:u}})}function Qn(r,t){return q(function(){var e=r.shape[0],n=Et(kt(r,t.box_encoding_predictor),[e,-1,1,4]),o=Et(kt(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function qb(r,t,e){return q(function(){var n=Nt(r,e.conv_0,[1,1]),o=Nt(n,e.conv_1,[2,2]),a=Nt(o,e.conv_2,[1,1]),i=Nt(a,e.conv_3,[2,2]),s=Nt(i,e.conv_4,[1,1]),u=Nt(s,e.conv_5,[2,2]),c=Nt(u,e.conv_6,[1,1]),l=Nt(c,e.conv_7,[2,2]),h=Qn(t,e.box_predictor_0),p=Qn(r,e.box_predictor_1),f=Qn(o,e.box_predictor_2),d=Qn(i,e.box_predictor_3),g=Qn(u,e.box_predictor_4),v=Qn(l,e.box_predictor_5),m=Le([h.boxPredictionEncoding,p.boxPredictionEncoding,f.boxPredictionEncoding,d.boxPredictionEncoding,g.boxPredictionEncoding,v.boxPredictionEncoding],1),w=Le([h.classPrediction,p.classPrediction,f.classPrediction,d.classPrediction,g.classPrediction,v.classPrediction],1);return{boxPredictions:m,classPredictions:w}})}var wa=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),$h=function(r){re(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return q(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=ze(nt(o,G(.007843137718737125)),G(1)),i=zb(a,n.mobilenetv1),s=qb(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return jb(u,c,n.output_layer)})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,je(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,p,f,d,g,v,m,w,b,y,x,_,S,I;return Z(this,function(k){switch(k.label){case 0:return o=new wa(n),a=o.maxResults,i=o.minConfidence,[4,je(e)];case 1:for(s=k.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],p=l[0],f=1;f<c.length;f++)c[f].dispose(),l[f].dispose();return v=(g=Array).from,[4,p.data()];case 2:return d=v.apply(g,[k.sent()]),m=.5,w=Vb(h,d,a,m,i),b=s.getReshapedInputDimensions(0),y=s.inputSize,x=y/b.width,_=y/b.height,S=h.arraySync(),I=w.map(function(R){var N=[Math.max(0,S[R][0]),Math.min(1,S[R][2])].map(function(U){return U*_}),D=N[0],L=N[1],M=[Math.max(0,S[R][1]),Math.min(1,S[R][3])].map(function(U){return U*x}),B=M[0],z=M[1];return new wt(d[R],new Ds(B,D,z-B,L-D),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),p.dispose(),[2,I]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Bb(e)},t.prototype.extractParams=function(e){return Ob(e)},t}(on);(function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})($h);var Kb=.4,Xb=[new ye(.738768,.874946),new ye(2.42204,2.65704),new ye(4.30971,7.04493),new ye(10.246,4.59428),new ye(12.6868,11.8741)],Yb=[new ye(1.603231,2.094468),new ye(6.041143,7.080126),new ye(2.882459,3.518061),new ye(4.266906,5.178857),new ye(9.041765,10.66308)],Jb=[117.001,114.697,97.404],Qb="tiny_yolov2_model",Zb="tiny_yolov2_separable_conv_model",_o=function(r){return typeof r=="number"};function ex(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!_o(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return _o(t.x)&&_o(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(_o)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function Vs(r){return q(function(){var t=nt(r,G(.10000000149011612));return ce(Ie(ze(r,t)),t)})}function cn(r,t){return q(function(){var e=zn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=_t(e,t.conv.filters,[1,1],"valid"),e=ze(e,t.bn.sub),e=nt(e,t.bn.truediv),e=ce(e,t.conv.bias),Vs(e)})}function ln(r,t){return q(function(){var e=zn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=ms(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=ce(e,t.bias),Vs(e)})}function tx(r,t){var e=xa(r,t);function n(i,s){var u=Me(r(i)),c=Me(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=Ls(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function nx(r,t,e,n){var o=sn(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=tx(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,p;if(t.withSeparableConvs){var f=n[0],d=n[1],g=n[2],v=n[3],m=n[4],w=n[5],b=n[6],y=n[7],x=n[8],_=t.isFirstLayerConv2d?c(f,d,3,"conv0"):h(f,d,"conv0"),S=h(d,g,"conv1"),I=h(g,v,"conv2"),k=h(v,m,"conv3"),R=h(m,w,"conv4"),N=h(w,b,"conv5"),D=y?h(b,y,"conv6"):void 0,L=x?h(y,x,"conv7"):void 0,M=c(x||y||b,5*e,1,"conv8");p={conv0:_,conv1:S,conv2:I,conv3:k,conv4:R,conv5:N,conv6:D,conv7:L,conv8:M}}else{var f=n[0],d=n[1],g=n[2],v=n[3],m=n[4],w=n[5],b=n[6],y=n[7],x=n[8],_=l(f,d,"conv0"),S=l(d,g,"conv1"),I=l(g,v,"conv2"),k=l(v,m,"conv3"),R=l(m,w,"conv4"),N=l(w,b,"conv5"),D=l(b,y,"conv6"),L=l(y,x,"conv7"),M=c(x,5*e,1,"conv8");p={conv0:_,conv1:S,conv2:I,conv3:k,conv4:R,conv5:N,conv6:D,conv7:L,conv8:M}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:p,paramMappings:s}}function rx(r,t){var e=Cn(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=Ws(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function ox(r,t){var e=[],n=rx(r,e),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return an(r,e),{params:s,paramMappings:e}}var yc;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(yc||(yc={}));var $s=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Hh=function(r){re(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return ex(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=cn(e,n.conv0);return o=$e(o,[2,2],[2,2],"same"),o=cn(o,n.conv1),o=$e(o,[2,2],[2,2],"same"),o=cn(o,n.conv2),o=$e(o,[2,2],[2,2],"same"),o=cn(o,n.conv3),o=$e(o,[2,2],[2,2],"same"),o=cn(o,n.conv4),o=$e(o,[2,2],[2,2],"same"),o=cn(o,n.conv5),o=$e(o,[2,2],[1,1],"same"),o=cn(o,n.conv6),o=cn(o,n.conv7),kt(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?Vs(kt(e,n.conv0,"valid",!1)):ln(e,n.conv0);return o=$e(o,[2,2],[2,2],"same"),o=ln(o,n.conv1),o=$e(o,[2,2],[2,2],"same"),o=ln(o,n.conv2),o=$e(o,[2,2],[2,2],"same"),o=ln(o,n.conv3),o=$e(o,[2,2],[2,2],"same"),o=ln(o,n.conv4),o=$e(o,[2,2],[2,2],"same"),o=ln(o,n.conv5),o=$e(o,[2,2],[1,1],"same"),o=n.conv6?ln(o,n.conv6):o,o=n.conv7?ln(o,n.conv7):o,kt(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return q(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?ro(i,o.config.meanRgb):i,i=i.div(G(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},t.prototype.forward=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,je(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,p,f,d,g,v,m,w=this;return Z(this,function(b){switch(b.label){case 0:return o=new $s(n),a=o.inputSize,i=o.scoreThreshold,[4,je(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=q(function(){return We(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return h=b.sent(),u.dispose(),c.dispose(),p=h.map(function(y){return y.box}),f=h.map(function(y){return y.score}),d=h.map(function(y){return y.classScore}),g=h.map(function(y){return w.config.classes[y.label]}),v=Hr(p.map(function(y){return y.rescale(a)}),f,this.config.iouThreshold,!0),m=v.map(function(y){return new vh(f[y],d[y],g[y],p[y],l)}),[2,m]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return ox(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return nx(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,p,f,d,g,v,m,w,b,y,x,_,S,I,k,R,N,D,L,M,B,z,U,W=this;return Z(this,function($){switch($.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],h=this.config.anchors.length,p=q(function(){var H=e.reshape([l,l,h,W.boxEncodingSize]),j=H.slice([0,0,0,0],[l,l,h,4]),ee=H.slice([0,0,0,4],[l,l,h,1]),te=W.withClassScores?nn(H.slice([0,0,0,5],[l,l,h,W.config.classes.length]),3):G(0);return[j,ee,te]}),f=p[0],d=p[1],g=p[2],v=[],[4,d.array()];case 1:return m=$.sent(),[4,f.array()];case 2:w=$.sent(),b=0,$.label=3;case 3:if(!(b<l))return[3,12];y=0,$.label=4;case 4:if(!(y<l))return[3,11];x=0,$.label=5;case 5:return x<h?(_=ui(m[b][y][x][0]),!o||_>o?(S=(y+ui(w[b][y][x][0]))/l*u,I=(b+ui(w[b][y][x][1]))/l*c,k=Math.exp(w[b][y][x][2])*this.config.anchors[x].x/l*u,R=Math.exp(w[b][y][x][3])*this.config.anchors[x].y/l*c,N=S-k/2,D=I-R/2,L={row:b,col:y,anchor:x},this.withClassScores?[4,this.extractPredictedClass(g,L)]:[3,7]):[3,9]):[3,10];case 6:return U=$.sent(),[3,8];case 7:U={classScore:1,label:0},$.label=8;case 8:M=U,B=M.classScore,z=M.label,v.push(Ze({box:new ya(N,D,N+k,D+R),score:_,classScore:_*B,label:z},L)),$.label=9;case 9:return x++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return f.dispose(),d.dispose(),g.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,n){return Q(this,void 0,void 0,function(){var o,a,i,s;return Z(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(on),ax=function(r){re(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:Kb,classes:["face"]},e?{anchors:Yb,meanRgb:Jb}:{anchors:Xb,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new wt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?Zb:Qb},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Hh),Gh=function(r){re(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}($s),oo=function(){function r(){}return r.prototype.then=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return Q(this,void 0,void 0,function(){return Z(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function _a(r,t,e,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),Q(this,void 0,void 0,function(){var a,i,s,u,c;return Z(this,function(l){switch(l.label){case 0:return a=r.map(function(h){return fb(h)?o(h):h.detection}),s=n,s?[3,5]:t instanceof Re?[4,Ms(t,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Os(t,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(h){return h instanceof Re&&h.dispose()}),[2,c]}})})}function Hs(r,t,e,n,o){return Q(this,void 0,void 0,function(){var a=this;return Z(this,function(i){return[2,_a([r],t,function(s){return Q(a,void 0,void 0,function(){return Z(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function ix(r){return q(function(){return gt(We(r,3).reverse(),3)})}var Co=2,Qo=12;function sx(r,t){var e=xa(r,t),n=Bs(r,t);function o(c,l){var h=Me(r(c));return t.push({paramPath:l}),h}function a(c,l,h){h===void 0&&(h=!1);var p=e(c[0],c[1],3,l+"/conv1"),f=o(c[1],l+"/prelu1_alpha"),d=e(c[1],c[2],3,l+"/conv2"),g=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],h?2:3,l+"/conv3"),m=o(c[3],l+"/prelu3_alpha");return{conv1:p,prelu1_alpha:f,conv2:d,prelu2_alpha:g,conv3:v,prelu3_alpha:m}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),h=e(32,4,1,"pnet/conv4_2");return Ze(Ze({},c),{conv4_1:l,conv4_2:h})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),h=o(128,"rnet/prelu4_alpha"),p=n(128,2,"rnet/fc2_1"),f=n(128,4,"rnet/fc2_2");return Ze(Ze({},c),{fc1:l,prelu4_alpha:h,fc2_1:p,fc2_2:f})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),h=o(128,"onet/prelu4_alpha"),p=n(1152,256,"onet/fc1"),f=o(256,"onet/prelu5_alpha"),d=n(256,2,"onet/fc2_1"),g=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return Ze(Ze({},c),{conv4:l,prelu4_alpha:h,fc1:p,prelu5_alpha:f,fc2_1:d,fc2_2:g,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function ux(r){var t=sn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=sx(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),h=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function cx(r,t){var e=Cn(r,t);function n(l){var h=e(l+"/weights",4,l+"/filters"),p=e(l+"/bias",1);return{filters:h,bias:p}}function o(l){var h=e(l+"/weights",2),p=e(l+"/bias",1);return{weights:h,bias:p}}function a(l){return e(l,1)}function i(l){var h=n(l+"/conv1"),p=a(l+"/prelu1_alpha"),f=n(l+"/conv2"),d=a(l+"/prelu2_alpha"),g=n(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:p,conv2:f,prelu2_alpha:d,conv3:g,prelu3_alpha:v}}function s(){var l=i("pnet"),h=n("pnet/conv4_1"),p=n("pnet/conv4_2");return Ze(Ze({},l),{conv4_1:h,conv4_2:p})}function u(){var l=i("rnet"),h=o("rnet/fc1"),p=a("rnet/prelu4_alpha"),f=o("rnet/fc2_1"),d=o("rnet/fc2_2");return Ze(Ze({},l),{fc1:h,prelu4_alpha:p,fc2_1:f,fc2_2:d})}function c(){var l=i("onet"),h=n("onet/conv4"),p=a("onet/prelu4_alpha"),f=o("onet/fc1"),d=a("onet/prelu5_alpha"),g=o("onet/fc2_1"),v=o("onet/fc2_2"),m=o("onet/fc2_3");return Ze(Ze({},l),{conv4:h,prelu4_alpha:p,fc1:f,prelu5_alpha:d,fc2_1:g,fc2_2:v,fc2_3:m})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function lx(r){var t=[],e=cx(r,t),n=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=n(),s=o(),u=a();return an(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function Bi(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function hx(r,t,e){for(var n=e[0],o=e[1],a=Qo/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(t,u)),s=s*t,u+=1;return i}var Gs=function(r){re(t,r);function t(e,n,o,a){return r.call(this,{left:e,top:n,right:o,bottom:a},!0)||this}return t}(zt);function jh(r){return q(function(){return nt(ze(r,G(127.5)),G(.0078125))})}function pr(r,t){return q(function(){return ce(Ie(r),nt(t,Go(Ie(Go(r)))))})}function js(r,t,e){return e===void 0&&(e=!1),q(function(){var n=kt(r,t.conv1,"valid");return n=pr(n,t.prelu1_alpha),n=$e(n,e?[2,2]:[3,3],[2,2],"same"),n=kt(n,t.conv2,"valid"),n=pr(n,t.prelu2_alpha),n=e?n:$e(n,[3,3],[2,2],"valid"),n=kt(n,t.conv3,"valid"),n=pr(n,t.prelu3_alpha),n})}function px(r,t){return q(function(){var e=js(r,t,!0),n=kt(e,t.conv4_1,"valid"),o=yt(da(n,3),3),a=nn(ze(n,o),3),i=kt(e,t.conv4_2,"valid");return{prob:a,regions:i}})}function fx(r,t){return q(function(){var e=Bi(t,r.shape.slice(1)),n=e.height,o=e.width,a=_s.resizeBilinear(r,[n,o]),i=jh(a);return xn(i,[0,2,1,3])})}function dx(r,t,e,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new ye(s,i));var u=o.map(function(c){var l=new ya(Math.round((c.y*Co+1)/e),Math.round((c.x*Co+1)/e),Math.round((c.y*Co+Qo)/e),Math.round((c.x*Co+Qo)/e)),h=a[c.y][c.x],p=t.arraySync(),f=new Gs(p[c.y][c.x][0],p[c.y][c.x][1],p[c.y][c.x][2],p[c.y][c.x][3]);return{cell:l,score:h,region:f}});return u}function vx(r,t,e,n,o){o.stage1=[];var a=t.map(function(p){return q(function(){var f={scale:p},d=fx(r,p),g=Date.now(),v=px(d,n),m=v.prob,w=v.regions;f.pnet=Date.now()-g;var b=We(We(m,3)[1])[0],y=We(w)[0];return{scoresTensor:b,regionsTensor:y,scale:p,statsForScale:f}})}),i=a.map(function(p){var f=p.scoresTensor,d=p.regionsTensor,g=p.scale,v=p.statsForScale,m=dx(f,d,g,e);if(f.dispose(),d.dispose(),!m.length)return o.stage1.push(v),[];var w=Date.now(),b=Hr(m.map(function(y){return y.cell}),m.map(function(y){return y.score}),.5);return v.nms=Date.now()-w,v.numBoxes=b.length,o.stage1.push(v),b.map(function(y){return m[y]})}),s=i.reduce(function(p,f){return p.concat(f)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=Hr(s.map(function(p){return p.cell}),s.map(function(p){return p.score}),.7);o.stage1_nms=Date.now()-l,c=h.map(function(p){return s[p].score}),u=h.map(function(p){return s[p]}).map(function(p){var f=p.cell,d=p.region;return new ya(f.left+d.left*f.width,f.top+d.top*f.height,f.right+d.right*f.width,f.bottom+d.bottom*f.height).toSquare().round()})}return{boxes:u,scores:c}}function qh(r,t,e){var n=e.width,o=e.height;return Q(this,void 0,void 0,function(){var a,i,s,u=this;return Z(this,function(c){switch(c.label){case 0:return a=Zt(r),[4,Promise.all(t.map(function(l){return Q(u,void 0,void 0,function(){var h,p,f,d,g,v,m,w;return Z(this,function(b){return h=l.padAtBorders(r.height,r.width),p=h.y,f=h.ey,d=h.x,g=h.ex,v=d-1,m=p-1,w=a.getImageData(v,m,g-v,f-m),[2,rt.isNodejs()?Fs(w):createImageBitmap(w)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var h=ba({width:n,height:o}),p=Zt(h);p.drawImage(l,0,0,n,o);for(var f=p.getImageData(0,0,n,o).data,d=[],g=0;g<f.length;g+=4)d.push(f[g+2]),d.push(f[g+1]),d.push(f[g]);s.push(d)}),[2,s.map(function(l){var h=q(function(){var p=xn(ot(l,[1,n,o,3]),[0,2,1,3]).toFloat();return jh(p)});return h})]}})})}function gx(r,t){return q(function(){var e=js(r,t),n=Et(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Mt(n,t.fc1),a=pr(o,t.prelu4_alpha),i=Mt(a,t.fc2_1),s=yt(da(i,1),1),u=nn(ze(i,s),1),c=Mt(a,t.fc2_2),l=We(u,1)[1];return{scores:l,regions:c}})}function mx(r,t,e,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,p,f,d,g,v,m,w;return Z(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,qh(r,t,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var x=gx(y,n);return y.dispose(),x}),o.stage2_rnet=Date.now()-a,u=s.length>1?Le(s.map(function(y){return y.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[b.sent()]),u.dispose(),p=c.map(function(y,x){return{score:y,idx:x}}).filter(function(y){return y.score>e}).map(function(y){var x=y.idx;return x}),f=p.map(function(y){return t[y]}),d=p.map(function(y){return c[y]}),g=[],v=[],f.length>0&&(a=Date.now(),m=Hr(f,d,.7),o.stage2_nms=Date.now()-a,w=m.map(function(y){var x=s[p[y]].regions.arraySync();return new Gs(x[0][0],x[0][1],x[0][2],x[0][3])}),v=m.map(function(y){return d[y]}),g=m.map(function(y,x){return f[y].calibrate(w[x])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:g,scores:v}]}})})}function yx(r,t){return q(function(){var e=js(r,t);e=$e(e,[2,2],[2,2],"same"),e=kt(e,t.conv4,"valid"),e=pr(e,t.prelu4_alpha);var n=Et(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Mt(n,t.fc1),a=pr(o,t.prelu5_alpha),i=Mt(a,t.fc2_1),s=yt(da(i,1),1),u=nn(ze(i,s),1),c=Mt(a,t.fc2_2),l=Mt(a,t.fc2_3),h=We(u,1)[1];return{scores:h,regions:c,points:l}})}function bx(r,t,e,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,p,f,d,g,v,m,w,b;return Z(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,qh(r,t,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(x){var _=yx(x,n);return x.dispose(),_}),o.stage3_onet=Date.now()-a,u=s.length>1?Le(s.map(function(x){return x.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[y.sent()]),u.dispose(),p=c.map(function(x,_){return{score:x,idx:_}}).filter(function(x){return x.score>e}).map(function(x){var _=x.idx;return _}),f=p.map(function(x){var _=s[x].regions.arraySync();return new Gs(_[0][0],_[0][1],_[0][2],_[0][3])}),d=p.map(function(x,_){return t[x].calibrate(f[_])}),g=p.map(function(x){return c[x]}),v=[],m=[],w=[],d.length>0&&(a=Date.now(),b=Hr(d,g,.7,!1),o.stage3_nms=Date.now()-a,v=b.map(function(x){return d[x]}),m=b.map(function(x){return g[x]}),w=b.map(function(x,_){return Array(5).fill(0).map(function(S,I){var k=s[x].points.arraySync();return new ye(k[0][I]*(v[_].width+1)+v[_].left,k[0][I+5]*(v[_].height+1)+v[_].top)})})),s.forEach(function(x){x.regions.dispose(),x.scores.dispose(),x.points.dispose()}),[2,{boxes:v,scores:m,points:w}]}})})}var xx=function(r){re(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,p,f,d,g,v,m,w,b,y,x,_,S,I;return Z(this,function(k){switch(k.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=q(function(){return ix(yt(Ss.fromPixels(a)).toFloat())}),c=function(R){return u.dispose(),i.total=Date.now()-s,R},l=u.shape.slice(1),h=l[0],p=l[1],f=new Vh(n),d=f.minFaceSize,g=f.scaleFactor,v=f.maxNumScales,m=f.scoreThresholds,w=f.scaleSteps,b=(w||hx(d,g,[h,p])).filter(function(R){var N=Bi(R,[h,p]);return Math.min(N.width,N.height)>Qo}).slice(0,v),i.scales=b,i.pyramid=b.map(function(R){return Bi(R,[h,p])}),y=Date.now(),[4,vx(u,b,m[0],o.pnet,i)];case 1:return x=k.sent(),i.total_stage1=Date.now()-y,x.boxes.length?(i.stage2_numInputBoxes=x.boxes.length,y=Date.now(),[4,mx(a,x.boxes,m[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return _=k.sent(),i.total_stage2=Date.now()-y,_.boxes.length?(i.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,bx(a,_.boxes,m[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return S=k.sent(),i.total_stage3=Date.now()-y,I=S.boxes.map(function(R,N){return Us(Ts({},new wt(S.scores[N],new Ds(R.left/p,R.top/h,R.width/p,R.height/h),{height:h,width:p})),new Ky(S.points[N].map(function(D){return D.sub(new ye(R.left,R.top)).div(new ye(R.width,R.height))}),{width:R.width,height:R.height}))}),[2,c({results:I,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,je(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,je(e)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return lx(e)},t.prototype.extractParams=function(e){return ux(e)},t}(on),wx=.4,_x=[new ye(1.603231,2.094468),new ye(6.041143,7.080126),new ye(2.882459,3.518061),new ye(4.266906,5.178857),new ye(9.041765,10.66308)],Cx=[117.001,114.697,97.404],Ex=function(r){re(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:wx,classes:["face"],anchors:_x,meanRgb:Cx,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new wt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Hh),it={ssdMobilenetv1:new $h,tinyFaceDetector:new Ex,tinyYolov2:new ax,mtcnn:new xx,faceLandmark68Net:new Mh,faceLandmark68TinyNet:new Rb,faceRecognitionNet:new Pb,faceExpressionNet:new pb,ageGenderNet:new _b},Kh=function(r){re(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(oo),qs=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,_a(e,this.input,function(i){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return it.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){return Ph(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new Js(this,this.input)},t}(Kh),Ks=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Hs(e,this.input,function(a){return it.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,Ph(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new Qs(this,this.input)},t}(Kh),Xs=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Zs(this,this.input)},t.prototype.withFaceDescriptors=function(){return new tu(this,this.input)},t}(qs),Ys=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new eu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new nu(this,this.input)},t}(Ks),Xh=function(r){re(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(oo),Js=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,_a(e,this.input,function(i){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return it.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,h=u.genderProbability;return Uh(zh(i,l,h),c)})]}})})},t.prototype.withFaceExpressions=function(){return new qs(this,this.input)},t}(Xh),Qs=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,Hs(e,this.input,function(u){return it.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,Uh(zh(e,a,i),o)]}})})},t.prototype.withFaceExpressions=function(){return new Ks(this,this.input)},t}(Xh),Zs=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Xs(this,this.input)},t.prototype.withFaceDescriptors=function(){return new tu(this,this.input)},t}(Js),eu=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Ys(this,this.input)},t.prototype.withFaceDescriptor=function(){return new nu(this,this.input)},t}(Qs),Yh=function(r){re(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(oo),tu=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,_a(e,this.input,function(a){return Promise.all(a.map(function(i){return it.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return Wh(e[i],a)})]}})})},t.prototype.withFaceExpressions=function(){return new Xs(this,this.input)},t.prototype.withAgeAndGender=function(){return new Zs(this,this.input)},t}(Yh),nu=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Hs(e,this.input,function(a){return it.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,Wh(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new Ys(this,this.input)},t.prototype.withAgeAndGender=function(){return new eu(this,this.input)},t}(Yh),Jh=function(r){re(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?it.faceLandmark68TinyNet:it.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(oo),kx=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof Re?[4,Ms(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,Os(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Re&&c.dispose()}),[2,e.map(function(c,l){return Us(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new Xs(this,this.input)},t.prototype.withAgeAndGender=function(){return new Zs(this,this.input)},t.prototype.withFaceDescriptors=function(){return new tu(this,this.input)},t}(Jh),Rx=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof Re?[4,Ms(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,Os(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Re&&u.dispose()}),[2,Us(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new Ys(this,this.input)},t.prototype.withAgeAndGender=function(){return new eu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new nu(this,this.input)},t}(Jh),Qh=function(r){re(t,r);function t(e,n){n===void 0&&(n=new wa);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(oo),Zh=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,a;return Z(this,function(i){switch(i.label){case 0:return e=this,n=e.input,o=e.options,o instanceof Vh?[4,it.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof Gh?function(s){return it.tinyFaceDetector.locateFaces(s,o)}:o instanceof wa?function(s){return it.ssdMobilenetv1.locateFaces(s,o)}:o instanceof $s?function(s){return it.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return Ts({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new kx(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new qs(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new Js(this.runAndExtendWithFaceDetections(),this.input)},t}(Qh);(function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,new Zh(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?Ts({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Rx(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ks(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new Qs(this.runAndExtendWithFaceDetection(),this.input)},t})(Qh);function Ix(r,t){return t===void 0&&(t=new wa),new Zh(r,t)}function Sx(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}(function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof bo)return i;if(i instanceof Float32Array)return new bo(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new bo(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return Sx(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new dc(a,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new dc("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return bo.fromJSON(n)});return new r(e,t.distanceThreshold)},r})();var Ax=Object.defineProperty,Dx=Object.getOwnPropertyDescriptor,ru=(r,t,e,n)=>{for(var o=n>1?void 0:n?Dx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&Ax(t,e,o),o};let Gr=class extends Qt{constructor(){super(...arguments),this.detectionBuffer=document.createElement("canvas"),this.canvasBuffer=document.createElement("canvas"),this.mediaRecorder=null,this.writableStream=null,this.frameTimes=[],this.frameRate=0,this.detections=null}async firstUpdated(){await this.loadModels(),this.canvas.width=this.detectionBuffer.width=this.canvasBuffer.width=this.video.width,this.canvas.height=this.detectionBuffer.height=this.canvasBuffer.height=this.video.height,this.startVideoStream()}async loadModels(){const r="./models";await it.tinyFaceDetector.loadFromUri(r),await it.ageGenderNet.loadFromUri(r)}async startVideoStream(){const r=await navigator.mediaDevices.getUserMedia({video:{}});this.video.srcObject=r,this.video.addEventListener("play",()=>{this.startFaceDetection()})}startFaceDetection(){setInterval(()=>this.updateCanvas(),1e3/30),this.detectFaces()}async updateCanvas(){const r=this.canvasBuffer.getContext("2d",{alpha:!1}),t=this.canvas.getContext("2d",{alpha:!1});if(!(!r||!t)){if(r.drawImage(this.video,0,0,this.canvasBuffer.width,this.canvasBuffer.height),this.detections){eb(this.canvasBuffer,this.detections);const e=`${new Date().toLocaleString()}
detected faces: ${this.detections.length}
frame rate: ${this.frameRate.toFixed(1)}`;new _h(e.split(`
`),new ye(0,0)).draw(this.canvasBuffer)}t.drawImage(this.canvasBuffer,0,0,this.canvasBuffer.width,this.canvasBuffer.height)}}async detectFaces(){const r=this.detectionBuffer.getContext("2d",{alpha:!1,willReadFrequently:!0});if(!r){setTimeout(()=>this.detectFaces(),100);return}r.drawImage(this.video,0,0,this.detectionBuffer.width,this.detectionBuffer.height),this.detections=await Ix(this.detectionBuffer,new Gh).withAgeAndGender();const t={numFaces:this.detections.length,faces:this.detections.map(e=>({age:e.age}))};Pc.set(t),this.frameTimes.push(Date.now()),this.frameTimes.length>6&&this.frameTimes.shift(),this.frameTimes.length==6&&(this.frameRate=5e3/(this.frameTimes[5]-this.frameTimes[0])),setTimeout(()=>this.detectFaces(),100)}async startRecording(){try{const t=await(await navigator.storage.getDirectory()).getFileHandle("test.mp4",{create:!0});this.writableStream=await t.createWritable()}catch(r){console.log("Open file failed: ",r);return}if(this.canvas){const r=this.canvas.captureStream(30);this.mediaRecorder=new MediaRecorder(r,{mimeType:"video/mp4;codecs=avc1"}),this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.writableStream&&this.writableStream.write(t.data)},this.mediaRecorder.onstop=async()=>{this.writableStream&&(await this.writableStream.close(),this.writableStream=null,console.log("File saved successfully"))},this.mediaRecorder.start(1e3),console.log("Recording started")}}stopRecording(){this.mediaRecorder&&(this.mediaRecorder.stop(),console.log("Recording stopped"))}async exportRecording(){try{const e=await(await(await navigator.storage.getDirectory()).getFileHandle("test.mp4")).getFile(),n=URL.createObjectURL(e),o=document.createElement("a");o.download="test.mp4",o.href=n,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n)}catch(r){console.log("OPFS Read Error:",r)}}render(){return me`
      <div id="container">
        <video id="video" muted=true autoplay=true width="640" height="480"></video>
        <canvas id="canvas"></canvas>
      <div>
    `}};Gr.styles=Ae`
    div#container {
      display: grid;
    }

    canvas#canvas {
      grid-area: 1 / 1;
    }

    video {
      grid-area: 1 / 1;
    }
  `;ru([ie("#canvas")],Gr.prototype,"canvas",2);ru([ie("#video")],Gr.prototype,"video",2);Gr=ru([Ne("face-detector")],Gr);document.exportRecordingToApp=async function(){try{const n=await(await(await(await navigator.storage.getDirectory()).getFileHandle("test.mp4")).getFile()).arrayBuffer(),o=[];for(let a=0;a<n.byteLength;a+=3072)o.push(btoa(String.fromCharCode(...new Uint8Array(n,a,Math.min(3072,n.byteLength-a)))));return o.join("")}catch(r){return console.log("OPFS Read Error:",r),"failed:"+r}};class Je extends Qt{constructor(){super(...arguments),this.isAnimatedInternal=!1}isAnimated(){return this.isAnimatedInternal}setAnimated(t){this.isAnimatedInternal=t}}class mt{constructor(t,e,n){this.actor=t,this.motion=e,this.interval=n,this.isMoving=!1}async repeat(){!this.actor.isAnimated()||this.isMoving||(this.isMoving=!0,await this.motion(),setTimeout(()=>{this.isMoving=!1,this.repeat()},this.interval()))}async test(){await this.motion()}}var Tx=Object.defineProperty,Nx=Object.getOwnPropertyDescriptor,ep=(r,t,e,n)=>{for(var o=n>1?void 0:n?Nx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&Tx(t,e,o),o};let Zo=class extends Je{constructor(){super(...arguments),this.pullingMotion=new mt(this,async()=>{const r="1200px 1200px";await this.main.animate([{transform:"rotate(0)",transformOrigin:r},{transform:"rotate(3deg)",transformOrigin:r,offset:.9},{transform:"rotate(0)",transformOrigin:r}],{duration:2e3,direction:"normal"}).finished},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.pullingMotion.repeat()}render(){return me`
      <div id="container">
        <div id="main">
          <img id="body" src="./books/giant-turnip-book/cat-pulling.png"></img>
        </div>
      </div>
    `}};Zo.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(300 / 1536), calc(300 / 1536));
      transform-origin: top left;
    }

    div#main {
      display: grid;
      grid-area: 1 / 1;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;ep([ie("div#main")],Zo.prototype,"main",2);Zo=ep([Ne("cat-pulling-actor")],Zo);var Px=Object.defineProperty,Fx=Object.getOwnPropertyDescriptor,tp=(r,t,e,n)=>{for(var o=n>1?void 0:n?Fx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&Px(t,e,o),o};let ea=class extends Je{constructor(){super(...arguments),this.pullingMotion=new mt(this,async()=>{const r="800px 1200px";await this.main.animate([{transform:"rotate(0)",transformOrigin:r},{transform:"rotate(3deg)",transformOrigin:r,offset:.9},{transform:"rotate(0)",transformOrigin:r}],{duration:2e3,direction:"normal"}).finished},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.pullingMotion.repeat()}render(){return me`
      <div id="container">
        <div id="main">
          <img id="body" src="./books/giant-turnip-book/dog-pulling.png"></img>
        </div>
      </div>
    `}};ea.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(300 / 1536), calc(300 / 1536));
      transform-origin: top left;
    }

    div#main {
      display: grid;
      grid-area: 1 / 1;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;tp([ie("div#main")],ea.prototype,"main",2);ea=tp([Ne("dog-pulling-actor")],ea);var Ox=Object.defineProperty,Mx=Object.getOwnPropertyDescriptor,Ca=(r,t,e,n)=>{for(var o=n>1?void 0:n?Mx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&Ox(t,e,o),o};let wr=class extends Je{constructor(){super(...arguments),this.translateX=0,this.translateY=0,this.rotate=0}render(){return me`
      <div id="container">
        <div id="clip">
          <img id="bg" src="./books/giant-turnip-book/giant-turnip-bg.png"></img>
          <img
            id="main" src="./books/giant-turnip-book/giant-turnip.png"
            style=${`transform: translate(${this.translateX}, ${this.translateY}) rotate(${this.rotate});`}
          ></img>
          <img id="fg" src="./books/giant-turnip-book/giant-turnip-fg.png"></img>
        </div>
      </div>
    `}};wr.styles=Ae`
    div#container {
      transform: scale(calc(360 / 1536), calc(360 / 1536));
      transform-origin: top left;
    }

    div#clip {
      display: grid;
      overflow: hidden;
      width: 2048px;
      height: 1378px;
    }

    div img {
      grid-area: 1 / 1;
    }

    #bg {
      z-index: 0;
    }

    #main {
      z-index: 1;
    }

    #fg {
      z-index: 2;
    }
  `;Ca([Yi({type:String})],wr.prototype,"translateX",2);Ca([Yi({type:String})],wr.prototype,"translateY",2);Ca([Yi({type:String})],wr.prototype,"rotate",2);wr=Ca([Ne("giant-turnip-actor")],wr);var Bx=Object.getOwnPropertyDescriptor,Lx=(r,t,e,n)=>{for(var o=n>1?void 0:n?Bx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o};let Li=class extends Je{render(){return me`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/granddaughter.png"></img>
      </div>
    `}};Li.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(270 / 1536), calc(270 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;Li=Lx([Ne("granddaughter-actor")],Li);var Wx=Object.defineProperty,Ux=Object.getOwnPropertyDescriptor,ao=(r,t,e,n)=>{for(var o=n>1?void 0:n?Ux(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&Wx(t,e,o),o};let Bn=class extends Je{constructor(){super(...arguments),this.pullingMotion=new mt(this,async()=>{let r=[];for(let o=0;o<15;o++)r=r.concat([{transform:"translateY(-2px)"},{transform:"translateY(2px)"}]);r.push({transform:"translateY(0px)"});const t="1500px 1200px",e="1550px 850px",n="1450px 800px";await Promise.all([this.main.animate([{transform:"rotate(0)",transformOrigin:t},{transform:"rotate(3deg)",transformOrigin:t,offset:.9},{transform:"rotate(0)",transformOrigin:t}],{duration:2e3,direction:"normal"}).finished,this.leftHand.animate([{transform:"rotate(0)",transformOrigin:e},{transform:"rotate(-3deg)",transformOrigin:e,offset:.9},{transform:"rotate(0)",transformOrigin:e}],{duration:2e3,direction:"normal"}).finished,this.rightHand.animate([{transform:"rotate(0)",transformOrigin:n},{transform:"rotate(-3deg)",transformOrigin:n,offset:.9},{transform:"rotate(0)",transformOrigin:n}],{duration:2e3,direction:"normal"}).finished,this.eyebrows.animate(r,{duration:1800,direction:"normal"}).finished])},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.pullingMotion.repeat()}render(){return me`
      <div id="container">
        <div id="main">
          <img id="right-hand" src="./books/giant-turnip-book/granddaughter-pulling-right-hand.png"></img>
          <img id="body" src="./books/giant-turnip-book/granddaughter-pulling.png"></img>
          <img id="left-hand" src="./books/giant-turnip-book/granddaughter-pulling-left-hand.png"></img>
          <img id="eyebrows" src="./books/giant-turnip-book/granddaughter-pulling-eyebrows.png"></img>
        </div>
      </div>
    `}};Bn.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(400 / 1536), calc(400 / 1536));
      transform-origin: top left;
    }

    div#main {
      display: grid;
      grid-area: 1 / 1;
    }

    div img {
      grid-area: 1 / 1;
    }

    div img#left-hand {
      z-index: 2;
    }

    div img#right-hand {
      z-index: 0;
    }

    div img#body {
      z-index: 1;
    }

    div img#eyebrows {
      z-index: 2;
    }
  `;ao([ie("div#main")],Bn.prototype,"main",2);ao([ie("img#left-hand")],Bn.prototype,"leftHand",2);ao([ie("img#right-hand")],Bn.prototype,"rightHand",2);ao([ie("img#eyebrows")],Bn.prototype,"eyebrows",2);Bn=ao([Ne("granddaughter-pulling-actor")],Bn);var zx=Object.defineProperty,Vx=Object.getOwnPropertyDescriptor,np=(r,t,e,n)=>{for(var o=n>1?void 0:n?Vx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&zx(t,e,o),o};let ta=class extends Je{constructor(){super(...arguments),this.pullingMotion=new mt(this,async()=>{const r="1600px 1200px";await this.main.animate([{transform:"rotate(0)",transformOrigin:r},{transform:"rotate(3deg)",transformOrigin:r,offset:.9},{transform:"rotate(0)",transformOrigin:r}],{duration:2e3,direction:"normal"}).finished},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.pullingMotion.repeat()}render(){return me`
      <div id="container">
        <div id="main">
          <img id="body" src="./books/giant-turnip-book/mouse-pulling.png"></img>
        </div>
      </div>
    `}};ta.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(300 / 1536), calc(300 / 1536));
      transform-origin: top left;
    }

    div#main {
      display: grid;
      grid-area: 1 / 1;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;np([ie("div#main")],ta.prototype,"main",2);ta=np([Ne("mouse-pulling-actor")],ta);var $x=Object.defineProperty,Hx=Object.getOwnPropertyDescriptor,ou=(r,t,e,n)=>{for(var o=n>1?void 0:n?Hx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&$x(t,e,o),o};let jr=class extends Je{constructor(){super(...arguments),this.handMotion=new mt(this,async()=>{const r="1300px 800px",t="1010px 750px";await Promise.all([this.leftHand.animate([{transform:"rotate(0)",transformOrigin:r,easing:"ease-in-out"},{transform:"rotate(30deg)",transformOrigin:r,easing:"ease-in-out"},{transform:"rotate(0)",transformOrigin:r,easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished,this.rightHand.animate([{transform:"rotate(0)",transformOrigin:t,easing:"ease-in-out"},{transform:"rotate(-30deg)",transformOrigin:t,easing:"ease-in-out"},{transform:"rotate(0)",transformOrigin:t,easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished])},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.handMotion.repeat()}render(){return me`
      <div id="container">
        <img id="left-hand" src="./books/giant-turnip-book/old-man-excited-left-hand.png"></img>
        <img id="right-hand" src="./books/giant-turnip-book/old-man-excited-right-hand.png"></img>
        <img id="main" src="./books/giant-turnip-book/old-man-excited.png"></img>
      </div>
    `}};jr.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(380 / 1536), calc(380 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }

    div img#left-hand {
      z-index: 0;
    }

    div img#right-hand {
      z-index: 0;
    }

    div img#main {
      z-index: 1;
    }
  `;ou([ie("img#left-hand")],jr.prototype,"leftHand",2);ou([ie("img#right-hand")],jr.prototype,"rightHand",2);jr=ou([Ne("old-man-excited-actor")],jr);var Gx=Object.defineProperty,jx=Object.getOwnPropertyDescriptor,io=(r,t,e,n)=>{for(var o=n>1?void 0:n?jx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&Gx(t,e,o),o};let Ln=class extends Je{constructor(){super(...arguments),this.pullingMotion=new mt(this,async()=>{let r=[],t=[];for(let n=0;n<15;n++)r=r.concat([{transform:"translateY(-10px)"},{transform:"translateY(10px)"}]),t=t.concat([{transform:"translateY(-5px)"},{transform:"translateY(5px)"}]);r.push({transform:"translateY(0px)"}),t.push({transform:"translateY(0px)"});const e="700px 1200px";await Promise.all([this.main.animate([{transform:"rotate(0)",transformOrigin:e},{transform:"rotate(3deg)",transformOrigin:e,offset:.9},{transform:"rotate(0)",transformOrigin:e}],{duration:2e3,direction:"normal"}).finished,this.leftHand.animate(r,{duration:1800,direction:"normal"}).finished,this.rightHand.animate(r,{duration:1800,direction:"normal"}).finished,this.eyebrows.animate(t,{duration:1800,direction:"normal"}).finished])},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.pullingMotion.repeat()}render(){return me`
      <div id="container">
        <div id="main">
          <img id="right-hand" src="./books/giant-turnip-book/old-man-pulling-2-right-hand.png"></img>
          <img id="body" src="./books/giant-turnip-book/old-man-pulling-2.png"></img>
          <img id="left-hand" src="./books/giant-turnip-book/old-man-pulling-2-left-hand.png"></img>
          <img id="eyebrows" src="./books/giant-turnip-book/old-man-pulling-2-eyebrows.png"></img>
        </div>
      </div>
    `}};Ln.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(400 / 1536), calc(400 / 1536));
      transform-origin: top left;
    }

    div#main {
      display: grid;
      grid-area: 1 / 1;
    }

    div img {
      grid-area: 1 / 1;
    }

    div img#left-hand {
      z-index: 2;
    }

    div img#right-hand {
      z-index: 0;
    }

    div img#body {
      z-index: 1;
    }

    div img#eyebrows {
      z-index: 2;
    }
  `;io([ie("div#main")],Ln.prototype,"main",2);io([ie("img#left-hand")],Ln.prototype,"leftHand",2);io([ie("img#right-hand")],Ln.prototype,"rightHand",2);io([ie("img#eyebrows")],Ln.prototype,"eyebrows",2);Ln=io([Ne("old-man-pulling-2-actor")],Ln);var qx=Object.defineProperty,Kx=Object.getOwnPropertyDescriptor,Ea=(r,t,e,n)=>{for(var o=n>1?void 0:n?Kx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&qx(t,e,o),o};let _r=class extends Je{constructor(){super(...arguments),this.pullingMotion=new mt(this,async()=>{let r=[],t=[];for(let e=0;e<15;e++)r=r.concat([{transform:"translateY(-10px)"},{transform:"translateY(10px)"}]),t=t.concat([{transform:"translateY(-5px)"},{transform:"translateY(5px)"}]);r.push({transform:"translateY(0px)"}),t.push({transform:"translateY(0px)"}),await Promise.all([this.leftHand.animate(r,{duration:2e3,direction:"normal"}).finished,this.rightHand.animate(r,{duration:2e3,direction:"normal"}).finished,this.eyebrows.animate(t,{duration:2e3,direction:"normal"}).finished])},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.pullingMotion.repeat()}render(){return me`
      <div id="container">
        <img id="right-hand" src="./books/giant-turnip-book/old-man-pulling-right-hand.png"></img>
        <img id="main" src="./books/giant-turnip-book/old-man-pulling.png"></img>
        <img id="left-hand" src="./books/giant-turnip-book/old-man-pulling-left-hand.png"></img>
        <img id="eyebrows" src="./books/giant-turnip-book/old-man-pulling-eyebrows.png"></img>
      </div>
    `}};_r.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(320 / 1536), calc(320 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }

    div img#left-hand {
      z-index: 2;
    }

    div img#right-hand {
      z-index: 0;
    }

    div img#main {
      z-index: 1;
    }

    div img#eyebrows {
      z-index: 1;
    }
  `;Ea([ie("img#left-hand")],_r.prototype,"leftHand",2);Ea([ie("img#right-hand")],_r.prototype,"rightHand",2);Ea([ie("img#eyebrows")],_r.prototype,"eyebrows",2);_r=Ea([Ne("old-man-pulling-actor")],_r);var Xx=Object.getOwnPropertyDescriptor,Yx=(r,t,e,n)=>{for(var o=n>1?void 0:n?Xx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o};let Wi=class extends Je{render(){return me`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/old-man-sowing.png"></img>
      </div>
    `}};Wi.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(360 / 1536), calc(360 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;Wi=Yx([Ne("old-man-sowing-actor")],Wi);var Jx=Object.defineProperty,Qx=Object.getOwnPropertyDescriptor,au=(r,t,e,n)=>{for(var o=n>1?void 0:n?Qx(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&Jx(t,e,o),o};let qr=class extends Je{constructor(){super(...arguments),this.tiredMotion=new mt(this,async()=>{const r="0 1100px";await Promise.all([this.head.animate([{transform:"rotate(0)",easing:"ease-in-out"},{transform:"translateY(20px) rotate(-2deg)",easing:"ease-in-out"},{transform:"rotate(0)",easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished,this.body.animate([{transform:"scaleY(1)",transformOrigin:r,easing:"ease-in-out"},{transform:"scaleY(0.97)",transformOrigin:r,easing:"ease-in-out"},{transform:"scaleY(1)",transformOrigin:r,easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished])},()=>0)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.tiredMotion.repeat()}render(){return me`
      <div id="container">
        <img id="body" src="./books/giant-turnip-book/old-man-tired.png"></img>
        <img id="legs" src="./books/giant-turnip-book/old-man-tired-legs.png"></img>
        <img id="head" src="./books/giant-turnip-book/old-man-tired-head.png"></img>
      </div>
    `}};qr.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(360 / 1536), calc(360 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }

    div img#body {
      z-index: 0;
    }

    div img#legs {
      z-index: 1;
    }

    div img#head {
      z-index: 1;
    }
  `;au([ie("img#body")],qr.prototype,"body",2);au([ie("img#head")],qr.prototype,"head",2);qr=au([Ne("old-man-tired-actor")],qr);var Zx=Object.defineProperty,e1=Object.getOwnPropertyDescriptor,rp=(r,t,e,n)=>{for(var o=n>1?void 0:n?e1(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&Zx(t,e,o),o};let na=class extends Je{constructor(){super(...arguments),this.handMotion=new mt(this,async()=>{const r="1150px 650px";await this.hand.animate([{transform:"rotate(0)",transformOrigin:r,easing:"ease-in-out"},{transform:"rotate(-10deg)",transformOrigin:r,easing:"ease-in-out",offset:.25},{transform:"rotate(20deg)",transformOrigin:r,easing:"ease-in-out",offset:.75},{transform:"rotate(0)",transformOrigin:r,easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.handMotion.repeat()}render(){return me`
      <div id="container">
        <img id="hand" src="./books/giant-turnip-book/old-man-watering-hand.png"></img>
        <img id="main" src="./books/giant-turnip-book/old-man-watering.png"></img>
      </div>
    `}};na.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(330 / 1536), calc(330 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }

    div img#hand {
      z-index: 0;
    }

    div img#main {
      z-index: 1;
    }
  `;rp([ie("img#hand")],na.prototype,"hand",2);na=rp([Ne("old-man-watering-actor")],na);var t1=Object.getOwnPropertyDescriptor,n1=(r,t,e,n)=>{for(var o=n>1?void 0:n?t1(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o};let Ui=class extends Je{render(){return me`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/old-man.png"></img>
      </div>
    `}};Ui.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(360 / 1536), calc(360 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;Ui=n1([Ne("old-man-actor")],Ui);var r1=Object.getOwnPropertyDescriptor,o1=(r,t,e,n)=>{for(var o=n>1?void 0:n?r1(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o};let zi=class extends Je{render(){return me`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/old-woman.png"></img>
      </div>
    `}};zi.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(360 / 1536), calc(360 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;zi=o1([Ne("old-woman-actor")],zi);var a1=Object.defineProperty,i1=Object.getOwnPropertyDescriptor,so=(r,t,e,n)=>{for(var o=n>1?void 0:n?i1(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&a1(t,e,o),o};let Wn=class extends Je{constructor(){super(...arguments),this.pullingMotion=new mt(this,async()=>{let r=[];for(let o=0;o<15;o++)r=r.concat([{transform:"translateY(-5px)"},{transform:"translateY(5px)"}]);r.push({transform:"translateY(0px)"});const t="1100px 1200px",e="1150px 850px",n="1050px 800px";await Promise.all([this.main.animate([{transform:"rotate(0)",transformOrigin:t},{transform:"rotate(3deg)",transformOrigin:t,offset:.9},{transform:"rotate(0)",transformOrigin:t}],{duration:2e3,direction:"normal"}).finished,this.leftHand.animate([{transform:"rotate(0)",transformOrigin:e},{transform:"rotate(-3deg)",transformOrigin:e,offset:.9},{transform:"rotate(0)",transformOrigin:e}],{duration:2e3,direction:"normal"}).finished,this.rightHand.animate([{transform:"rotate(0)",transformOrigin:n},{transform:"rotate(-3deg)",transformOrigin:n,offset:.9},{transform:"rotate(0)",transformOrigin:n}],{duration:2e3,direction:"normal"}).finished,this.eyebrows.animate(r,{duration:1800,direction:"normal"}).finished])},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&this.pullingMotion.repeat()}render(){return me`
      <div id="container">
        <div id="main">
          <img id="right-hand" src="./books/giant-turnip-book/old-woman-pulling-right-hand.png"></img>
          <img id="body" src="./books/giant-turnip-book/old-woman-pulling.png"></img>
          <img id="left-hand" src="./books/giant-turnip-book/old-woman-pulling-left-hand.png"></img>
          <img id="eyebrows" src="./books/giant-turnip-book/old-woman-pulling-eyebrows.png"></img>
        </div>
      </div>
    `}};Wn.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(400 / 1536), calc(400 / 1536));
      transform-origin: top left;
    }

    div#main {
      display: grid;
      grid-area: 1 / 1;
    }

    div img {
      grid-area: 1 / 1;
    }

    div img#left-hand {
      z-index: 2;
    }

    div img#right-hand {
      z-index: 0;
    }

    div img#body {
      z-index: 1;
    }

    div img#eyebrows {
      z-index: 2;
    }
  `;so([ie("div#main")],Wn.prototype,"main",2);so([ie("img#left-hand")],Wn.prototype,"leftHand",2);so([ie("img#right-hand")],Wn.prototype,"rightHand",2);so([ie("img#eyebrows")],Wn.prototype,"eyebrows",2);Wn=so([Ne("old-woman-pulling-actor")],Wn);var s1=Object.getOwnPropertyDescriptor,u1=(r,t,e,n)=>{for(var o=n>1?void 0:n?s1(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o};let Vi=class extends Je{render(){return me`
      <div id="container">
        <div id="clip">
          <img id="bg" src="./books/giant-turnip-book/small-turnip-bg.png"></img>
          <img id="main" src="./books/giant-turnip-book/small-turnip.png"></img>
          <img id="fg" src="./books/giant-turnip-book/small-turnip-fg.png"></img>
        </div>
      </div>
    `}};Vi.styles=Ae`
    div#container {
      transform: scale(calc(360 / 1536), calc(360 / 1536));
      transform-origin: top left;
    }

    div#clip {
      display: grid;
      overflow: hidden;
      width: 2048px;
      height: 1002px;
    }

    div img {
      grid-area: 1 / 1;
    }

    #bg {
      z-index: 0;
    }

    #main {
      z-index: 1;
    }

    #fg {
      z-index: 2;
    }
  `;Vi=u1([Ne("small-turnip-actor")],Vi);var c1=Object.defineProperty,l1=Object.getOwnPropertyDescriptor,op=(r,t,e,n)=>{for(var o=n>1?void 0:n?l1(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&c1(t,e,o),o};const iu=class iu extends Qt{constructor(){super(...arguments),this.currentPageInternal=0,this.isAnimatedInternal=!1}getCurrentPage(){return this.currentPageInternal}setCurrentPage(t){this.currentPageInternal=t,this.requestUpdate()}isAnimated(){return this.isAnimatedInternal}setAnimated(t){this.isAnimatedInternal=t;for(const e of this.actors)e.setAnimated(t)}};iu.styles=Ae`
  `;let Kr=iu;op([Np(".actor")],Kr.prototype,"actors",2);let $i=class extends Kr{constructor(){super(...arguments),this.pages=[me`
      <div class="page page-0">
        <kezaruu-actor class="actor"></kezaruu-actor>
      </div>
    `]}getNumPages(){return this.pages.length}render(){return this.pages[this.getCurrentPage()]}};$i.styles=Ae`
    .page {
      height: 480px;
      overflow: hidden;
      width: 640px;
    }

    .page-0 {
      background-image: url(./img/background.png);
      background-size: 774px 512px;
    }
  `;$i=op([Ne("sample-book")],$i);var h1=Object.getOwnPropertyDescriptor,p1=(r,t,e,n)=>{for(var o=n>1?void 0:n?h1(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o};let Hi=class extends Kr{constructor(){super(...arguments),this.pages=[me`
      <div class="page cover">
        <h1 class="title">おおきなかぶ</h1>
        <giant-turnip-actor class="actor giant-turnip-cover"></giant-turnip-actor>
        <old-man-actor class="actor old-man"></old-man-actor>
        <old-woman-actor class="actor old-woman"></old-woman-actor>
        <granddaughter-actor class="actor granddaughter"></granddaughter-actor>
        <audio src="./books/giant-turnip-book/title.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-1">
        <p class="text">
          むかしむかし、あるところに、<br>
          おじいさんがいました。<br>
          <br>
          おじいさんは、はたけに<br>
          かぶのたねをまきました。
        </p>
        <old-man-sowing-actor class="actor old-man-sowing"></old-man-sowing-actor>
        <audio src="./books/giant-turnip-book/page-1.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-2">
        <p class="text">
          おじいさんは、<br>
          かぶにみずをやりました。<br>
          「おおきな、おおきな、かぶになれよ」
        </p>
        <small-turnip-actor class="actor small-turnip"></small-turnip-actor>
        <old-man-watering-actor class="actor old-man-watering"></old-man-watering-actor>
        <audio src="./books/giant-turnip-book/page-2.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-3">
        <p class="text">
          かぶは、ぐんぐんのびて、<br>
          おおきくなりました。<br>
          「なんておおきなかぶだろう!」
        </p>
        <giant-turnip-actor class="actor giant-turnip" translateX="-260px" translateY="380px" rotate="-60deg">
        </giant-turnip-actor>
        <old-man-excited-actor class="actor old-man-excited"></old-man-excited-actor>
        <audio src="./books/giant-turnip-book/page-3.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-4">
        <p class="text">
          おじいさんは、かぶをぬこうとします。<br>
          「うんとこしょ、どっこいしょ!」<br>
          けれど、かぶはびくともしません。
        </p>
        <giant-turnip-actor class="actor giant-turnip" translateX="-260px" translateY="380px" rotate="-60deg">
        </giant-turnip-actor>
        <old-man-pulling-actor class="actor old-man-pulling"></old-man-pulling-actor>
        <audio src="./books/giant-turnip-book/page-4.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-5">
        <p class="text">
          「これは、ひとりでは、ぬけないな」<br>
          おじいさんは、おばあさんをよびました。
        </p>
        <giant-turnip-actor class="actor giant-turnip" translateX="-260px" translateY="380px" rotate="-60deg">
        </giant-turnip-actor>
        <old-man-tired-actor class="actor old-man-tired"></old-man-tired-actor>
        <audio src="./books/giant-turnip-book/page-5.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-6">
        <p class="text">
          おばあさんが、おじいさんをひっぱり<br>
          おじいさんが、かぶをひっぱります。<br>
          「うんとこしょ、どっこいしょ!」<br>
          それでも、かぶはぬけません。
        </p>
        <giant-turnip-actor class="actor giant-turnip" translateX="-260px" translateY="380px" rotate="-60deg">
        </giant-turnip-actor>
        <old-man-pulling-2-actor class="actor old-man-pulling-2"></old-man-pulling-2-actor>
        <old-woman-pulling-actor class="actor old-woman-pulling"></old-woman-pulling-actor>
        <audio src="./books/giant-turnip-book/page-6.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-7">
        <p class="text">
          おばあさんは、まごをよびました。<br>
          「うんとこしょ、どっこいしょ!」<br>
          それでも、かぶはぬけません。
        </p>
        <giant-turnip-actor class="actor giant-turnip" translateX="-260px" translateY="380px" rotate="-60deg">
        </giant-turnip-actor>
        <old-man-pulling-2-actor class="actor old-man-pulling-2"></old-man-pulling-2-actor>
        <old-woman-pulling-actor class="actor old-woman-pulling"></old-woman-pulling-actor>
        <granddaughter-pulling-actor class="actor granddaughter-pulling"></granddaughter-pulling-actor>
        <audio src="./books/giant-turnip-book/page-7.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-8">
        <p class="text">
          まごは、いぬをよびました。<br>
          「うんとこしょ、どっこいしょ!」<br>
          まだまだ、かぶはぬけません。
        </p>
        <giant-turnip-actor class="actor giant-turnip" translateX="-260px" translateY="380px" rotate="-60deg">
        </giant-turnip-actor>
        <old-man-pulling-2-actor class="actor old-man-pulling-2"></old-man-pulling-2-actor>
        <old-woman-pulling-actor class="actor old-woman-pulling"></old-woman-pulling-actor>
        <granddaughter-pulling-actor class="actor granddaughter-pulling"></granddaughter-pulling-actor>
        <dog-pulling-actor class="actor dog-pulling"></dog-pulling-actor>
        <audio src="./books/giant-turnip-book/page-8.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-9">
        <p class="text">
          いぬは、ねこをよびました。<br>
          「うんとこしょ、どっこいしょ!」<br>
          まだまだ、かぶはぬけません。
        </p>
        <giant-turnip-actor class="actor giant-turnip" translateX="-260px" translateY="380px" rotate="-60deg">
        </giant-turnip-actor>
        <old-man-pulling-2-actor class="actor old-man-pulling-2"></old-man-pulling-2-actor>
        <old-woman-pulling-actor class="actor old-woman-pulling"></old-woman-pulling-actor>
        <granddaughter-pulling-actor class="actor granddaughter-pulling"></granddaughter-pulling-actor>
        <dog-pulling-actor class="actor dog-pulling"></dog-pulling-actor>
        <cat-pulling-actor class="actor cat-pulling"></cat-pulling-actor>
        <audio src="./books/giant-turnip-book/page-9.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-10">
        <p class="text">
          ねこは、ねずみをよびました。<br>
          「うんとこしょ、どっこいしょ!」<br>
          すると...
        </p>
        <giant-turnip-actor class="actor giant-turnip" translateX="-260px" translateY="380px" rotate="-60deg">
        </giant-turnip-actor>
        <old-man-pulling-2-actor class="actor old-man-pulling-2"></old-man-pulling-2-actor>
        <old-woman-pulling-actor class="actor old-woman-pulling"></old-woman-pulling-actor>
        <granddaughter-pulling-actor class="actor granddaughter-pulling"></granddaughter-pulling-actor>
        <dog-pulling-actor class="actor dog-pulling"></dog-pulling-actor>
        <cat-pulling-actor class="actor cat-pulling"></cat-pulling-actor>
        <mouse-pulling-actor class="actor mouse-pulling"></mouse-pulling-actor>
        <audio src="./books/giant-turnip-book/page-10.mp3" autoplay></audio>
      </div>
    `,me`
      <div class="page page-11">
        <p class="text">
          すっぽーん<br>
          とうとう、おおきなかぶが、ぬけました。<br>
          「ありがとう。みんなのおかげだよ」
        </p>
        <giant-turnip-actor class="actor giant-turnip">
        </giant-turnip-actor>
        <old-man-pulling-2-actor class="actor old-man-pulling-2"></old-man-pulling-2-actor>
        <old-woman-pulling-actor class="actor old-woman-pulling"></old-woman-pulling-actor>
        <granddaughter-pulling-actor class="actor granddaughter-pulling"></granddaughter-pulling-actor>
        <dog-pulling-actor class="actor dog-pulling"></dog-pulling-actor>
        <cat-pulling-actor class="actor cat-pulling"></cat-pulling-actor>
        <mouse-pulling-actor class="actor mouse-pulling"></mouse-pulling-actor>
        <audio src="./books/giant-turnip-book/page-11.mp3" autoplay></audio>
      </div>
    `]}getNumPages(){return this.pages.length}render(){return this.pages[this.getCurrentPage()]}};Hi.styles=Ae`
    :host {
      --offset-x: 0px;
    }

    .page {
      box-sizing: border-box;
      height: 480px;
      overflow: hidden;
      position: relative;
      width: 690px;
    }

    .title {
      font-size: 48px;
      font-weight: 700;
      letter-spacing: 0.02em;
      margin-left: 80px;
      margin-top: 10px;
      text-shadow: 0 2px 2px white;
    }

    .text {
      font-size: 22px;
      line-height: 1.45;
      margin-left: 60px;
      text-shadow: 0 1px 1px white;
    }

    .actor {
      position: absolute;
    }
    
    .old-man {
      top: 105px;
      left: -35px;
    }
    
    .old-woman {
      top: 95px;
      left: -10px;
    }
    
    .granddaughter {
      top: 140px;
      left: 360px;
    }

    .giant-turnip-cover {
      top: 80px;
      left: 260px;
    }

    .old-man-sowing {
      top: 140px;
      left: 160px;
    }

    .old-man-watering {
      top: 140px;
      left: 180px;
    }

    .small-turnip {
      top: 210px;
      left: 20px;
    }

    .old-man-excited {
      top: 120px;
      left: 200px;
    }

    .giant-turnip {
      top: 120px;
      left: calc(60px + var(--offset-x));
    }

    .old-man-pulling {
      top: 140px;
      left: 80px;
    }

    .old-man-tired {
      top: 140px;
      left: 180px;
    }

    .old-man-pulling-2 {
      top: 85px;
      left: calc(140px + var(--offset-x));
    }

    .old-woman-pulling {
      top: 85px;
      left: calc(140px + var(--offset-x));
    }

    .granddaughter-pulling {
      top: 85px;
      left: calc(140px + var(--offset-x));
    }

    .dog-pulling {
      top: 170px;
      left: calc(460px + var(--offset-x));
    }

    .cat-pulling {
      top: 170px;
      left: calc(460px + var(--offset-x));
    }

    .mouse-pulling {
      top: 170px;
      left: calc(460px + var(--offset-x));
    }

    .cover {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
    }

    .page-1 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
    }

    .page-2 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
    }

    .page-3 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
    }

    .page-4 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
    }

    .page-5 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
    }

    .page-6 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
    }

    .page-7 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
    }

    .page-8 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
      --offset-x: -50px;
    }

    .page-9 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
      --offset-x: -90px;
    }

    .page-10 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
      --offset-x: -130px;
    }

    .page-11 {
      background-image: url('./books/giant-turnip-book/background.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 640px 480px;
    }
  `;Hi=p1([Ne("giant-turnip-book")],Hi);var f1=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,En=(r,t,e,n)=>{for(var o=n>1?void 0:n?d1(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&f1(t,e,o),o};let Vt=class extends Je{constructor(){super(...arguments),this.blink=new mt(this,async()=>{await this.eyes.animate([{backgroundPosition:"0 0"},{backgroundPosition:"0 -1536px"},{backgroundPosition:"0 -3072px"},{backgroundPosition:"0 -1536px"},{backgroundPosition:"0 0"}],{duration:125,direction:"normal",easing:"steps(4)"}).finished},()=>Math.random()*1e4+200),this.faceMotion=new mt(this,async()=>{const r=e=>[{transform:"translate(0, 0)",easing:"ease-in-out"},{transform:`translate(${e}px, 0)`,easing:"ease-in-out",offset:.1},{transform:`translate(${e}px, 0)`,easing:"ease-in-out",offset:.9},{transform:"translate(0, 0)"}],t={duration:2e3,direction:"normal"};await Promise.all([this.head.animate(r(-15),t).finished,this.ears.animate([{transform:"translate(0, 0)",easing:"ease-in-out"},{transform:"translate(-15px, 0)",easing:"ease-in-out",offset:.1},{transform:"translate(-15px, 0) scaleY(0.95)",easing:"ease-in-out",offset:.3},{transform:"translate(-15px, 0)",easing:"ease-in-out",offset:.5},{transform:"translate(-15px, 0) scaleY(0.95)",easing:"ease-in-out",offset:.7},{transform:"translate(-15px, 0)",easing:"ease-in-out",offset:.9},{transform:"translate(0, 0)"}],t).finished,this.face.animate(r(-40),t).finished,this.mouth.animate(r(-50),t).finished,this.nose.animate(r(-60),t).finished,this.eyes.animate(r(-50),t).finished])},()=>Math.random()*1e4+5e3),this.handMotion=new mt(this,async()=>{await this.hand.animate([{transform:"translate(0, 0)",easing:"ease-in-out"},{transform:"translate(-10px, 30px)",easing:"ease-in-out"},{transform:"translate(0, 0)"}],{duration:2e3,direction:"normal"}).finished},()=>3e3)}setAnimated(r){super.setAnimated(r),this.isAnimated()&&(this.blink.repeat(),this.faceMotion.repeat(),this.handMotion.repeat())}render(){return me`
      <div id="container">
        <img id="body" src="./img/body.png"></img>
        <img id="hand" src="./img/hand.png"></img>
        <img id="head" src="./img/head.png"></img>
        <img id="face" src="./img/face.png"></img>
        <div id="eyes"></div>
        <img id="nose" src="./img/nose.png"></img>
        <img id="ears" src="./img/ears.png"></img>
        <img id="mouth" src="./img/mouth.png"></img>
      </div>
    `}};Vt.styles=Ae`
    div#container {
      display: grid;
      transform: scale(calc(480 / 1536), calc(480 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }

    div#eyes {
      background-color:transparent;
      background-image:url(./img/eyes.png);
      background-repeat:no-repeat;
      grid-area: 1 / 1;
    }
  `;En([ie("img#head")],Vt.prototype,"head",2);En([ie("img#face")],Vt.prototype,"face",2);En([ie("img#ears")],Vt.prototype,"ears",2);En([ie("img#mouth")],Vt.prototype,"mouth",2);En([ie("img#nose")],Vt.prototype,"nose",2);En([ie("div#eyes")],Vt.prototype,"eyes",2);En([ie("img#hand")],Vt.prototype,"hand",2);Vt=En([Ne("kezaruu-actor")],Vt);var v1=Object.defineProperty,g1=Object.getOwnPropertyDescriptor,Gn=(r,t,e,n)=>{for(var o=n>1?void 0:n?g1(t,e):t,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(t,e,o):i(o))||o);return n&&o&&v1(t,e,o),o};let en=class extends Qt{constructor(){super(...arguments),this.isRecording=!1,this.showCamera=!0}toggleRecording(){this.isRecording?(this.faceDetector.stopRecording(),this.recordingToggle.innerText="●",this.exportButton.disabled=!1):(this.faceDetector.startRecording(),this.recordingToggle.innerText="■"),this.isRecording=!this.isRecording}exportVideo(){if(new URLSearchParams(window.location.search).has("webview")){const t=document.createElement("a");t.href="export:test.mp4",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}else this.faceDetector.exportRecording()}changeNumFaces(){const r=Number(this.numFacesSelect.options[this.numFacesSelect.selectedIndex].value);this.bookViewer.setNumFacesThreshold(r)}toggleCamera(){this.showCamera?(this.faceDetector.style.position="absolute",this.faceDetector.style.visibility="hidden",this.cameraToggle.innerHTML="カメラ画面を見せる"):(this.faceDetector.style.position="static",this.faceDetector.style.visibility="",this.cameraToggle.innerHTML="カメラ画像を隠す"),this.showCamera=!this.showCamera}render(){return me`
      <div id="main">
        <div>
          <face-detector></face-detector>
          <book-viewer></book-viewer>
        </div>
        <div class="button-group">
          <div>検出する顔の数</div>
          <select id="num_faces" @input=${()=>this.changeNumFaces()}>
            <option value="1" selected>1</option>
            <option value="2">2</option>
          </select>
          <button id="recording" @click=${()=>this.toggleRecording()}>●</button>
          <button id="export" @click=${()=>this.exportVideo()} disabled>ビデオのエクスポート</button>
          <button id="toggle_camera" @click=${()=>this.toggleCamera()}>カメラ画像を隠す</button> 
        </div>
      </div>`}};en.styles=Ae`
    div#main div {
      display: flex;
    }

    book-viewer {
    }

    .button-group {
      display: flex;
      align-item: center;
      gap: 16px;
      margin: 8px;
    }

    .button-group div {
      height: 48px;
      line-height: 48px;
    }

    select {
      width: 48px;
    }

    button {
      border: 2px solid;
      border-radius: 5px;
      min-height: 48px;
      min-width: 48px;
    }

    button#recording {
      border: 2px solid black;
      color: red;
      font-size: 40px;
    }
  `;Gn([ie("select#num_faces")],en.prototype,"numFacesSelect",2);Gn([ie("button#recording")],en.prototype,"recordingToggle",2);Gn([ie("button#export")],en.prototype,"exportButton",2);Gn([ie("button#toggle_camera")],en.prototype,"cameraToggle",2);Gn([ie("face-detector")],en.prototype,"faceDetector",2);Gn([ie("book-viewer")],en.prototype,"bookViewer",2);en=Gn([Ne("main-element")],en)});export default m1();
