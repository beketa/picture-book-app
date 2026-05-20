var Sf=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var f2=Sf((C2,Cf)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo=globalThis,es=Uo.ShadowRoot&&(Uo.ShadyCSS===void 0||Uo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ns=Symbol(),yu=new WeakMap;let Tc=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ns)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(es&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=yu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&yu.set(t,e))}return e}toString(){return this.cssText}};const If=r=>new Tc(typeof r=="string"?r:r+"",void 0,ns),xt=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new Tc(t,r,ns)},Af=(r,e)=>{if(es)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),o=Uo.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},bu=es?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return If(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Df,defineProperty:Tf,getOwnPropertyDescriptor:Pf,getOwnPropertyNames:Nf,getOwnPropertySymbols:Of,getPrototypeOf:Ff}=Object,yn=globalThis,xu=yn.trustedTypes,Mf=xu?xu.emptyScript:"",Ga=yn.reactiveElementPolyfillSupport,Gr=(r,e)=>r,Vo={toAttribute(r,e){switch(e){case Boolean:r=r?Mf:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},rs=(r,e)=>!Df(r,e),wu={attribute:!0,type:String,converter:Vo,reflect:!1,useDefault:!1,hasChanged:rs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),yn.litPropertyMetadata??(yn.litPropertyMetadata=new WeakMap);let ar=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=wu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Tf(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:a}=Pf(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:o,set(i){const s=o==null?void 0:o.call(this);a==null||a.call(this,i),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??wu}static _$Ei(){if(this.hasOwnProperty(Gr("elementProperties")))return;const e=Ff(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Gr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Gr("properties"))){const t=this.properties,n=[...Nf(t),...Of(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(bu(o))}else e!==void 0&&t.push(bu(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Af(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var a;const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const i=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:Vo).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){var a,i;const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),u=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:Vo;this._$Em=o;const c=u.fromAttribute(t,s.type);this[o]=c??((i=this._$Ej)==null?void 0:i.get(o))??c,this._$Em=null}}requestUpdate(e,t,n){var o;if(e!==void 0){const a=this.constructor,i=this[e];if(n??(n=a.getPropertyOptions(e)),!((n.hasChanged??rs)(i,t)||n.useDefault&&n.reflect&&i===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:a},i){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??t??this[e]),a!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,i]of o){const{wrapped:s}=i,u=this[a];s!==!0||this._$AL.has(a)||u===void 0||this.C(a,void 0,i,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ar.elementStyles=[],ar.shadowRootOptions={mode:"open"},ar[Gr("elementProperties")]=new Map,ar[Gr("finalized")]=new Map,Ga==null||Ga({ReactiveElement:ar}),(yn.reactiveElementVersions??(yn.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr=globalThis,Go=Hr.trustedTypes,_u=Go?Go.createPolicy("lit-html",{createHTML:r=>r}):void 0,Pc="$lit$",pn=`lit$${Math.random().toFixed(9).slice(2)}$`,Nc="?"+pn,Bf=`<${Nc}>`,Gn=document,to=()=>Gn.createComment(""),eo=r=>r===null||typeof r!="object"&&typeof r!="function",os=Array.isArray,Lf=r=>os(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ha=`[ 	
\f\r]`,Wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cu=/-->/g,Eu=/>/g,Pn=RegExp(`>|${Ha}(?:([^\\s"'>=/]+)(${Ha}*=${Ha}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ku=/'/g,Ru=/"/g,Oc=/^(?:script|style|textarea|title)$/i,Wf=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),it=Wf(1),Ar=Symbol.for("lit-noChange"),Ht=Symbol.for("lit-nothing"),Su=new WeakMap,Bn=Gn.createTreeWalker(Gn,129);function Fc(r,e){if(!os(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return _u!==void 0?_u.createHTML(e):e}const Uf=(r,e)=>{const t=r.length-1,n=[];let o,a=e===2?"<svg>":e===3?"<math>":"",i=Wr;for(let s=0;s<t;s++){const u=r[s];let c,l,h=-1,f=0;for(;f<u.length&&(i.lastIndex=f,l=i.exec(u),l!==null);)f=i.lastIndex,i===Wr?l[1]==="!--"?i=Cu:l[1]!==void 0?i=Eu:l[2]!==void 0?(Oc.test(l[2])&&(o=RegExp("</"+l[2],"g")),i=Pn):l[3]!==void 0&&(i=Pn):i===Pn?l[0]===">"?(i=o??Wr,h=-1):l[1]===void 0?h=-2:(h=i.lastIndex-l[2].length,c=l[1],i=l[3]===void 0?Pn:l[3]==='"'?Ru:ku):i===Ru||i===ku?i=Pn:i===Cu||i===Eu?i=Wr:(i=Pn,o=void 0);const d=i===Pn&&r[s+1].startsWith("/>")?" ":"";a+=i===Wr?u+Bf:h>=0?(n.push(c),u.slice(0,h)+Pc+u.slice(h)+pn+d):u+pn+(h===-2?s:d)}return[Fc(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};let ki=class Mc{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,i=0;const s=e.length-1,u=this.parts,[c,l]=Uf(e,t);if(this.el=Mc.createElement(c,n),Bn.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Bn.nextNode())!==null&&u.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Pc)){const f=l[i++],d=o.getAttribute(h).split(pn),p=/([.?@])?(.*)/.exec(f);u.push({type:1,index:a,name:p[2],strings:d,ctor:p[1]==="."?$f:p[1]==="?"?Vf:p[1]==="@"?Gf:va}),o.removeAttribute(h)}else h.startsWith(pn)&&(u.push({type:6,index:a}),o.removeAttribute(h));if(Oc.test(o.tagName)){const h=o.textContent.split(pn),f=h.length-1;if(f>0){o.textContent=Go?Go.emptyScript:"";for(let d=0;d<f;d++)o.append(h[d],to()),Bn.nextNode(),u.push({type:2,index:++a});o.append(h[f],to())}}}else if(o.nodeType===8)if(o.data===Nc)u.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(pn,h+1))!==-1;)u.push({type:7,index:a}),h+=pn.length-1}a++}}static createElement(e,t){const n=Gn.createElement("template");return n.innerHTML=e,n}};function Dr(r,e,t=r,n){var i,s;if(e===Ar)return e;let o=n!==void 0?(i=t._$Co)==null?void 0:i[n]:t._$Cl;const a=eo(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=o:t._$Cl=o),o!==void 0&&(e=Dr(r,o._$AS(r,e.values),o,n)),e}let zf=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??Gn).importNode(t,!0);Bn.currentNode=o;let a=Bn.nextNode(),i=0,s=0,u=n[0];for(;u!==void 0;){if(i===u.index){let c;u.type===2?c=new as(a,a.nextSibling,this,e):u.type===1?c=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(c=new Hf(a,this,e)),this._$AV.push(c),u=n[++s]}i!==(u==null?void 0:u.index)&&(a=Bn.nextNode(),i++)}return Bn.currentNode=Gn,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},as=class Bc{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=Ht,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Dr(this,e,t),eo(e)?e===Ht||e==null||e===""?(this._$AH!==Ht&&this._$AR(),this._$AH=Ht):e!==this._$AH&&e!==Ar&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Lf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ht&&eo(this._$AH)?this._$AA.nextSibling.data=e:this.T(Gn.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ki.createElement(Fc(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(t);else{const i=new zf(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Su.get(e.strings);return t===void 0&&Su.set(e.strings,t=new ki(e)),t}k(e){os(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new Bc(this.O(to()),this.O(to()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},va=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=Ht,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ht}_$AI(e,t=this,n,o){const a=this.strings;let i=!1;if(a===void 0)e=Dr(this,e,t,0),i=!eo(e)||e!==this._$AH&&e!==Ar,i&&(this._$AH=e);else{const s=e;let u,c;for(e=a[0],u=0;u<a.length-1;u++)c=Dr(this,s[n+u],t,u),c===Ar&&(c=this._$AH[u]),i||(i=!eo(c)||c!==this._$AH[u]),c===Ht?e=Ht:e!==Ht&&(e+=(c??"")+a[u+1]),this._$AH[u]=c}i&&!o&&this.j(e)}j(e){e===Ht?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},$f=class extends va{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ht?void 0:e}},Vf=class extends va{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ht)}},Gf=class extends va{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=Dr(this,e,t,0)??Ht)===Ar)return;const n=this._$AH,o=e===Ht&&n!==Ht||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==Ht&&(n===Ht||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Hf=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Dr(this,e)}};const ja=Hr.litHtmlPolyfillSupport;ja==null||ja(ki,as),(Hr.litHtmlVersions??(Hr.litHtmlVersions=[])).push("3.3.1");const jf=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let o=n._$litPart$;if(o===void 0){const a=(t==null?void 0:t.renderBefore)??null;n._$litPart$=o=new as(e.insertBefore(to(),a),a,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=globalThis;let Ze=class extends ar{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jf(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ar}};var Dc;Ze._$litElement$=!0,Ze.finalized=!0,(Dc=Un.litElementHydrateSupport)==null||Dc.call(Un,{LitElement:Ze});const qa=Un.litElementPolyfillSupport;qa==null||qa({LitElement:Ze});(Un.litElementVersions??(Un.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qf={attribute:!0,type:String,converter:Vo,reflect:!1,hasChanged:rs},Kf=(r=qf,e,t)=>{const{kind:n,metadata:o}=t;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(t.name,r),n==="accessor"){const{name:i}=t;return{set(s){const u=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,u,r)},init(s){return s!==void 0&&this.C(i,void 0,r,s),s}}}if(n==="setter"){const{name:i}=t;return function(s){const u=this[i];e.call(this,s),this.requestUpdate(i,u,r)}}throw Error("Unsupported decorator location: "+n)};function jn(r){return(e,t)=>typeof t=="object"?Kf(r,e,t):((n,o,a)=>{const i=o.hasOwnProperty(a);return o.constructor.createProperty(a,n),i?Object.getOwnPropertyDescriptor(o,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lc=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(r,e){return(t,n,o)=>{const a=i=>{var s;return((s=i.renderRoot)==null?void 0:s.querySelector(r))??null};return Lc(t,n,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Xf;function Yf(r){return(e,t)=>Lc(e,t,{get(){return(this.renderRoot??Xf??(Xf=document.createDocumentFragment())).querySelectorAll(r)}})}var Jf=Object.defineProperty,Qf=(r,e,t)=>e in r?Jf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ka=(r,e,t)=>(Qf(r,typeof e!="symbol"?e+"":e,t),t),Zf=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Xa=(r,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return r.has(e)},ko=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Iu=(r,e,t)=>(Zf(r,e,"access private method"),t);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wc(r,e){return Object.is(r,e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Mt=null,jr=!1,zo=1;const Ho=Symbol("SIGNAL");function lr(r){const e=Mt;return Mt=r,e}function td(){return Mt}function ed(){return jr}const is={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ga(r){if(jr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Mt===null)return;Mt.consumerOnSignalRead(r);const e=Mt.nextProducerIndex++;if(Tr(Mt),e<Mt.producerNode.length&&Mt.producerNode[e]!==r&&Ri(Mt)){const t=Mt.producerNode[e];ma(t,Mt.producerIndexOfThis[e])}Mt.producerNode[e]!==r&&(Mt.producerNode[e]=r,Mt.producerIndexOfThis[e]=Ri(Mt)?$c(r,Mt,e):0),Mt.producerLastReadVersion[e]=r.version}function nd(){zo++}function Uc(r){if(!(!r.dirty&&r.lastCleanEpoch===zo)){if(!r.producerMustRecompute(r)&&!sd(r)){r.dirty=!1,r.lastCleanEpoch=zo;return}r.producerRecomputeValue(r),r.dirty=!1,r.lastCleanEpoch=zo}}function zc(r){if(r.liveConsumerNode===void 0)return;const e=jr;jr=!0;try{for(const t of r.liveConsumerNode)t.dirty||od(t)}finally{jr=e}}function rd(){return(Mt==null?void 0:Mt.consumerAllowSignalWrites)!==!1}function od(r){var e;r.dirty=!0,zc(r),(e=r.consumerMarkedDirty)==null||e.call(r.wrapper??r)}function ad(r){return r&&(r.nextProducerIndex=0),lr(r)}function id(r,e){if(lr(e),!(!r||r.producerNode===void 0||r.producerIndexOfThis===void 0||r.producerLastReadVersion===void 0)){if(Ri(r))for(let t=r.nextProducerIndex;t<r.producerNode.length;t++)ma(r.producerNode[t],r.producerIndexOfThis[t]);for(;r.producerNode.length>r.nextProducerIndex;)r.producerNode.pop(),r.producerLastReadVersion.pop(),r.producerIndexOfThis.pop()}}function sd(r){Tr(r);for(let e=0;e<r.producerNode.length;e++){const t=r.producerNode[e],n=r.producerLastReadVersion[e];if(n!==t.version||(Uc(t),n!==t.version))return!0}return!1}function $c(r,e,t){var n;if(ss(r),Tr(r),r.liveConsumerNode.length===0){(n=r.watched)==null||n.call(r.wrapper);for(let o=0;o<r.producerNode.length;o++)r.producerIndexOfThis[o]=$c(r.producerNode[o],r,o)}return r.liveConsumerIndexOfThis.push(t),r.liveConsumerNode.push(e)-1}function ma(r,e){var t;if(ss(r),Tr(r),typeof ngDevMode<"u"&&ngDevMode&&e>=r.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${r.liveConsumerNode.length} consumers)`);if(r.liveConsumerNode.length===1){(t=r.unwatched)==null||t.call(r.wrapper);for(let o=0;o<r.producerNode.length;o++)ma(r.producerNode[o],r.producerIndexOfThis[o])}const n=r.liveConsumerNode.length-1;if(r.liveConsumerNode[e]=r.liveConsumerNode[n],r.liveConsumerIndexOfThis[e]=r.liveConsumerIndexOfThis[n],r.liveConsumerNode.length--,r.liveConsumerIndexOfThis.length--,e<r.liveConsumerNode.length){const o=r.liveConsumerIndexOfThis[e],a=r.liveConsumerNode[e];Tr(a),a.producerIndexOfThis[o]=e}}function Ri(r){var e;return r.consumerIsAlwaysLive||(((e=r==null?void 0:r.liveConsumerNode)==null?void 0:e.length)??0)>0}function Tr(r){r.producerNode??(r.producerNode=[]),r.producerIndexOfThis??(r.producerIndexOfThis=[]),r.producerLastReadVersion??(r.producerLastReadVersion=[])}function ss(r){r.liveConsumerNode??(r.liveConsumerNode=[]),r.liveConsumerIndexOfThis??(r.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vc(r){if(Uc(r),ga(r),r.value===Si)throw r.error;return r.value}function ud(r){const e=Object.create(cd);e.computation=r;const t=()=>Vc(e);return t[Ho]=e,t}const Ya=Symbol("UNSET"),Ja=Symbol("COMPUTING"),Si=Symbol("ERRORED"),cd={...is,value:Ya,dirty:!0,error:null,equal:Wc,producerMustRecompute(r){return r.value===Ya||r.value===Ja},producerRecomputeValue(r){if(r.value===Ja)throw new Error("Detected cycle in computations.");const e=r.value;r.value=Ja;const t=ad(r);let n,o=!1;try{n=r.computation.call(r.wrapper),o=e!==Ya&&e!==Si&&r.equal.call(r.wrapper,e,n)}catch(a){n=Si,r.error=a}finally{id(r,t)}if(o){r.value=e;return}r.value=n,r.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ld(){throw new Error}let hd=ld;function fd(){hd()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function dd(r){const e=Object.create(gd);e.value=r;const t=()=>(ga(e),e.value);return t[Ho]=e,t}function pd(){return ga(this),this.value}function vd(r,e){rd()||fd(),r.equal.call(r.wrapper,r.value,e)||(r.value=e,md(r))}const gd={...is,equal:Wc,value:void 0};function md(r){r.version++,nd(),zc(r)}/**
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
 */const Kt=Symbol("node");var bn;(r=>{var e,t,n,o;class a{constructor(u,c={}){ko(this,t),Ka(this,e);const h=dd(u)[Ho];if(this[Kt]=h,h.wrapper=this,c){const f=c.equals;f&&(h.equal=f),h.watched=c[r.subtle.watched],h.unwatched=c[r.subtle.unwatched]}}get(){if(!(0,r.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return pd.call(this[Kt])}set(u){if(!(0,r.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(ed())throw new Error("Writes to signals not permitted during Watcher callback");const c=this[Kt];vd(c,u)}}e=Kt,t=new WeakSet,r.isState=s=>typeof s=="object"&&Xa(t,s),r.State=a;class i{constructor(u,c){ko(this,o),Ka(this,n);const h=ud(u)[Ho];if(h.consumerAllowSignalWrites=!0,this[Kt]=h,h.wrapper=this,c){const f=c.equals;f&&(h.equal=f),h.watched=c[r.subtle.watched],h.unwatched=c[r.subtle.unwatched]}}get(){if(!(0,r.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Vc(this[Kt])}}n=Kt,o=new WeakSet,r.isComputed=s=>typeof s=="object"&&Xa(o,s),r.Computed=i,(s=>{var u,c,l,h;function f(b){let y,x=null;try{x=lr(null),y=b()}finally{lr(x)}return y}s.untrack=f;function d(b){var y;if(!(0,r.isComputed)(b)&&!(0,r.isWatcher)(b))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((y=b[Kt].producerNode)==null?void 0:y.map(x=>x.wrapper))??[]}s.introspectSources=d;function p(b){var y;if(!(0,r.isComputed)(b)&&!(0,r.isState)(b))throw new TypeError("Called introspectSinks without a Signal argument");return((y=b[Kt].liveConsumerNode)==null?void 0:y.map(x=>x.wrapper))??[]}s.introspectSinks=p;function g(b){if(!(0,r.isComputed)(b)&&!(0,r.isState)(b))throw new TypeError("Called hasSinks without a Signal argument");const y=b[Kt].liveConsumerNode;return y?y.length>0:!1}s.hasSinks=g;function v(b){if(!(0,r.isComputed)(b)&&!(0,r.isWatcher)(b))throw new TypeError("Called hasSources without a Computed or Watcher argument");const y=b[Kt].producerNode;return y?y.length>0:!1}s.hasSources=v;class m{constructor(y){ko(this,c),ko(this,l),Ka(this,u);let x=Object.create(is);x.wrapper=this,x.consumerMarkedDirty=y,x.consumerIsAlwaysLive=!0,x.consumerAllowSignalWrites=!1,x.producerNode=[],this[Kt]=x}watch(...y){if(!(0,r.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Iu(this,l,h).call(this,y);const x=this[Kt];x.dirty=!1;const _=lr(x);for(const I of y)ga(I[Kt]);lr(_)}unwatch(...y){if(!(0,r.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Iu(this,l,h).call(this,y);const x=this[Kt];Tr(x);for(let _=x.producerNode.length-1;_>=0;_--)if(y.includes(x.producerNode[_].wrapper)){ma(x.producerNode[_],x.producerIndexOfThis[_]);const I=x.producerNode.length-1;if(x.producerNode[_]=x.producerNode[I],x.producerIndexOfThis[_]=x.producerIndexOfThis[I],x.producerNode.length--,x.producerIndexOfThis.length--,x.nextProducerIndex--,_<x.producerNode.length){const S=x.producerIndexOfThis[_],k=x.producerNode[_];ss(k),k.liveConsumerIndexOfThis[S]=_}}}getPending(){if(!(0,r.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[Kt].producerNode.filter(x=>x.dirty).map(x=>x.wrapper)}}u=Kt,c=new WeakSet,l=new WeakSet,h=function(b){for(const y of b)if(!(0,r.isComputed)(y)&&!(0,r.isState)(y))throw new TypeError("Called watch/unwatch without a Computed or State argument")},r.isWatcher=b=>Xa(c,b),s.Watcher=m;function w(){var b;return(b=td())==null?void 0:b.wrapper}s.currentComputed=w,s.watched=Symbol("watched"),s.unwatched=Symbol("unwatched")})(r.subtle||(r.subtle={}))})(bn||(bn={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yd=Symbol("SignalWatcherBrand"),bd=new FinalizationRegistry(({watcher:r,signal:e})=>{r.unwatch(e)}),Au=new WeakMap;function Gc(r){return r[yd]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),r):class extends r{constructor(){super(...arguments),this._$St=new bn.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new bn.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new bn.subtle.Watcher(function(){const t=Au.get(this);t!==void 0&&(t._$Si===!1&&t.requestUpdate(),this.watch())});Au.set(e,this),bd.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(t=>t.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,n){this._$So=!0,super.requestUpdate(e,t,n)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(e){this._$Sh.add(e);const t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */bn.State;bn.Computed;const xd=(r,e)=>new bn.State(r,e),us=xd({isReady:!1,numFaces:0,faces:[]});var wd=Object.defineProperty,_d=Object.getOwnPropertyDescriptor,ya=(r,e,t,n)=>{for(var o=n>1?void 0:n?_d(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&wd(e,t,o),o};let Pr=class extends Gc(Ze){constructor(){super(...arguments),this.currentPage=11,this.numFacesThreshold=1}setNumFacesThreshold(r){this.numFacesThreshold=r,this.requestUpdate()}updated(r){super.updated(r);const e=us.get();this.book.setAnimated(e.numFaces>=this.numFacesThreshold)}firstUpdated(){this.book.setCurrentPage(this.currentPage)}prevPage(){this.book.setCurrentPage(--this.currentPage)}nextPage(){if(this.currentPage===this.book.getNumPages()-1){this.dispatchEvent(new CustomEvent("last-button-click",{bubbles:!0,composed:!0}));return}this.book.setCurrentPage(++this.currentPage)}render(){var r;return it`
      <div class="book-viewer">
        <!-- <sample-book class="book"></sample-book> -->
        <!-- <kezaruu-book class="book"></kezaruu-book> -->
        <giant-turnip-book class="book"></giant-turnip-book>
        <button class="prev-button"
                style="visibility: ${this.currentPage===0?"hidden":"visible"}"
                @click=${()=>this.prevPage()}>
          Prev
        </button>
        <button class="next-button"
                @click=${()=>this.nextPage()}>
          ${this.currentPage===((r=this.book)==null?void 0:r.getNumPages())-1?"End":"Next"}
        </button>
      </div>
    `}};Pr.styles=xt`
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
  `;ya([nt(".book")],Pr.prototype,"book",2);ya([jn({type:Number})],Pr.prototype,"currentPage",2);ya([jn({type:Number})],Pr.prototype,"numFacesThreshold",2);Pr=ya([_t("book-viewer")],Pr);/**
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
 */var Hc=function(r,e){return(Hc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(r,e)};function Se(r,e){function t(){this.constructor=r}Hc(r,e),r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function K(r,e,t,n){return new(t||(t=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new t(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,[])).next())})}function X(r,e){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=e.call(r,i)}catch(h){l=[6,h],n=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Cd=function(){function r(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(e,t){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+t+"."),this.platformName=e,this.platform=t},r.prototype.registerFlag=function(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){var o=this.urlFlags[e];console.warn("Setting feature override from URL "+e+": "+o+"."),this.set(e,o)}},r.prototype.get=function(e){return e in this.flags?this.flags[e]:(this.flags[e]=this.evaluateFlag(e),this.flags[e])},r.prototype.getNumber=function(e){return this.get(e)},r.prototype.getBool=function(e){return this.get(e)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(e,t){if(this.flagRegistry[e]==null)throw new Error("Cannot set flag "+e+" as it has not been registered.");this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)},r.prototype.evaluateFlag=function(e){if(this.flagRegistry[e]==null)throw new Error("Cannot evaluate flag '"+e+"': no evaluation function found.");return this.flagRegistry[e].evaluationFn()},r.prototype.setFlags=function(e){this.flags=Object.assign({},e)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var e=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var t,n,o=(t=this.global.location.search,n={},t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Ed(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];e.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function Ed(r,e,t){r[decodeURIComponent(e)]=decodeURIComponent(t||"")}function F(){return jc}var jc=null,jo=new Map,Ii=new Map;function qc(r,e){var t=Xc(r,e);return jo.get(t)}function kd(r){return Ii.get(r)}function Du(r){for(var e=jo.entries(),t=[];;){var n=e.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&t.push(s)}return t}function Kc(r){var e=r.kernelName,t=r.backendName,n=Xc(e,t);if(jo.has(n))throw new Error("The kernel '"+e+"' for backend '"+t+"' is already registered");jo.set(n,r)}function Rd(r){var e=r.kernelName;Ii.has(e)&&console.warn("Overriding the gradient for '"+e+"'"),Ii.set(e,r)}function Xc(r,e){return e+"_"+r}function Ai(r,e,t){return Math.max(r,Math.min(e,t))}function Yc(r){return r%2==0?r:r+1}function Sd(r){for(var e=0,t=0;t<r.length;t++)e+=r[t];return e}function E(r,e){if(!r)throw new Error(typeof e=="string"?e:e())}function wt(r,e,t){t===void 0&&(t=""),E(jt(r,e),function(){return t+" Shapes "+r+" and "+e+" must match"})}function Br(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Nr(r,e,t){if(e===void 0&&(e=[]),t===void 0&&(t=!1),e==null&&(e=[]),Array.isArray(r)||Le(r)&&!t)for(var n=0;n<r.length;++n)Nr(r[n],e,t);else e.push(r);return e}function Y(r){if(r.length===0)return 1;for(var e=r[0],t=1;t<r.length;t++)e*=r[t];return e}function jt(r,e){if(r===e)return!0;if(r==null||e==null||r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r){return r%1==0}function Id(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var e=Math.exp(2*r);return(e-1)/(e+1)}function Di(r){var e=Math.ceil(Math.sqrt(r));return[e,Math.ceil(r/e)]}function hr(r,e){return e<=r.length?r:r+" ".repeat(e-r.length)}function Tu(r,e,t){return e===void 0&&(e=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=e(a);t!=null&&a>=t?o():setTimeout(i,s)}};i()})}function Ad(r,e){for(var t=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)t*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(e>0&&e!==t)throw Error("Size("+e+") must match the product of shape "+r);return r}if(t===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(e%t!=0)throw Error("The implicit shape can't be a fractional number. Got "+e+" / "+t);var a=r.slice();return a[n]=e/t,a}function Vt(r,e){var t=e.length;return E((r=r==null?e.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-t&&n<t}),function(){return"All values in axis param must be in range [-"+t+", "+t+") but got axis "+r}),E(r.every(function(n){return Ft(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?t+n:n})}function Mn(r,e){for(var t=[],n=[],o=e!=null&&Array.isArray(e)&&e.length===0,a=e==null||o?null:Vt(e,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(t.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(t.push(r[s]),n.push(s))}return{newShape:t,keptDims:n}}function no(r,e){var t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else{if(r!=="bool")throw new Error("Unknown data type "+r);t=new Uint8Array(e)}return t}function qo(r,e){var t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else if(r==="bool")t=new Uint8Array(e);else{if(r!=="string")throw new Error("Unknown data type "+r);t=new Array(e)}return t}function Dd(r,e){for(var t=0;t<r.length;t++){var n=r[t];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+e+" being uploaded contains "+n+".")}}function Td(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function Pd(r,e){return e!=="complex64"&&(e!=="float32"||r==="complex64")&&(e!=="int32"||r==="float32"||r==="complex64")&&(e!=="bool"||r!=="bool")}function Le(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Jc(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function Nd(r){if(r==null)return 0;var e=0;return r.forEach(function(t){return e+=t.length}),e}function cs(r){return typeof r=="string"||r instanceof String}function Od(r){return typeof r=="boolean"}function Fd(r){return typeof r=="number"}function ho(r){return Array.isArray(r)?ho(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":Fd(r)?"float32":cs(r)?"string":Od(r)?"bool":"float32"}function Ti(r){return!!(r&&r.constructor&&r.call&&r.apply)}function Pi(r,e){for(var t=e;t<r;++t)if(r%t==0)return t;return r}function We(r){var e=r.length;if(e<2)return[];var t=new Array(e-1);t[e-2]=r[e-1];for(var n=e-3;n>=0;--n)t[n]=t[n+1]*r[n+1];return t}function Qc(r,e,t){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Nr(r)),t&&Dd(r,e),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,e))return r;if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+e)}function Pu(r,e){if(r.length===0)return e[0];var t=r.reduce(function(n,o){return n*o});if(t===0)return[];if(t!==e.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),h=l.reduce(function(f,d){return f*d});for(c=0;c<u;c++)s[c]=n(o+c*h,l,i)}return s}(0,r,e)}function Zc(r,e){for(var t=fo(r,e),n=0;n<t.length;n++)t[n]=1;return t}function fo(r,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+e)}function Oe(){return F().platform.now()}function tl(r){r.forEach(function(e){E(Number.isInteger(e)&&e>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function Md(r,e){return e===void 0&&(e="utf-8"),e=e||"utf-8",F().platform.encode(r,e)}function Ko(r,e){return e===void 0&&(e="utf-8"),e=e||"utf-8",F().platform.decode(r,e)}function Nu(r,e,t){if(e===0)return 0;if(e===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=t[o]*r[o];return n}function Bd(r,e,t){if(e===0)return[];if(e===1)return[r];for(var n=new Array(e),o=0;o<n.length-1;++o)n[o]=Math.floor(r/t[o]),r-=n[o]*t[o];return n[n.length-1]=r,n}var Ld=function(){function r(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new Wd)}return r.prototype.profileKernel=function(e,t,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var f=0;f<c.length;f++){var d=c[f];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+h+"'"),!0}})(u,s.dtype,e),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(e,s,u,c.kernelMs,t,l)})})}),o},r}(),Wd=function(){function r(){}return r.prototype.logKernelProfile=function(e,t,n,o,a,i){var s=typeof o=="number"?hr(o+"ms",9):o.error,u=hr(e,25),c=t.rank,l=t.size,h=hr(t.shape.toString(),14),f="";for(var d in a){var p=a[d].shape||t.shape,g=p.length;f+=d+": "+g+"D "+(g>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+f+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Ou=20,Ur=3,Qa=7;function Ud(r,e,t,n){var o=We(e),a=function(c,l,h,f){var d=Y(l),p=f[f.length-1],g=new Array(p).fill(0),v=l.length,m=h==="complex64"?$r(c):c;if(v>1)for(var w=0;w<d/p;w++)for(var b=w*p,y=0;y<p;y++)g[y]=Math.max(g[y],zr(m[b+y],0,h).length);return g}(r,e,t,o),i=e.length,s=function c(l,h,f,d,p,g){g===void 0&&(g=!0);var v=f==="complex64"?2:1,m=h[0],w=h.length;if(w===0)return f==="complex64"?[zr($r(l)[0],0,f)]:f==="bool"?[el(l[0])]:[l[0].toString()];if(w===1){if(m>Ou){var b=Ur*v,y=Array.from(l.slice(0,b)),x=Array.from(l.slice((m-Ur)*v,m*v));return f==="complex64"&&(y=$r(y),x=$r(x)),["["+y.map(function(B,z){return zr(B,p[z],f)}).join(", ")+", ..., "+x.map(function(B,z){return zr(B,p[m-Ur+z],f)}).join(", ")+"]"]}return["["+(f==="complex64"?$r(l):Array.from(l)).map(function(B,z){return zr(B,p[z],f)}).join(", ")+"]"]}var _=h.slice(1),I=d.slice(1),S=d[0]*v,k=[];if(m>Ou){for(var R=0;R<Ur;R++){var P=(D=R*S)+S;k.push.apply(k,c(l.slice(D,P),_,f,I,p,!1))}for(k.push("..."),R=m-Ur;R<m;R++)P=(D=R*S)+S,k.push.apply(k,c(l.slice(D,P),_,f,I,p,R===m-1))}else for(R=0;R<m;R++){var D;P=(D=R*S)+S,k.push.apply(k,c(l.slice(D,P),_,f,I,p,R===m-1))}var L=w===2?",":"";for(k[0]="["+k[0]+L,R=1;R<k.length-1;R++)k[R]=" "+k[R]+L;var M=`,
`;for(R=2;R<w;R++)M+=`
`;return k[k.length-1]=" "+k[k.length-1]+"]"+(g?"":M),k}(r,e,t,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+t),u.push("  rank: "+i),u.push("  shape: ["+e+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function zr(r,e,t){return hr(Array.isArray(r)?parseFloat(r[0].toFixed(Qa))+" + "+parseFloat(r[1].toFixed(Qa))+"j":cs(r)?"'"+r+"'":t==="bool"?el(r):parseFloat(r.toFixed(Qa)).toString(),e)}function el(r){return r===0?"false":"true"}function $r(r){for(var e=[],t=0;t<r.length;t+=2)e.push([r[t],r[t+1]]);return e}var ro=function(){function r(e,t,n){var o=this;if(this.dtype=t,this.shape=e.slice(),this.size=Y(e),n!=null){var a=n.length;E(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||qo(t,this.size),this.strides=We(e)}return r.prototype.set=function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),E(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+t.rank+")"});var a=this.locToIndex(n);this.values[a]=e},r.prototype.get=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.length===0&&(e=[0]);for(var n=0,o=0,a=e;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+e+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=e[e.length-1],c=0;c<e.length-1;++c)u+=this.strides[c]*e[c];return this.values[u]},r.prototype.locToIndex=function(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];for(var t=e[e.length-1],n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t},r.prototype.indexToLoc=function(e){if(this.rank===0)return[];if(this.rank===1)return[e];for(var t=new Array(this.shape.length),n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Fe().makeTensor(this.values,this.shape,this.dtype)},r}(),Fe=null,O=null,nl=null,At=function(){function r(e,t,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=Y(e),this.strides=We(e),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(e,t){return this.throwIfDisposed(),this.reshape([e,t])},r.prototype.as3D=function(e,t,n){return this.throwIfDisposed(),this.reshape([e,t,n])},r.prototype.as4D=function(e,t,n,o){return this.throwIfDisposed(),this.reshape([e,t,n,o])},r.prototype.as5D=function(e,t,n,o,a){return this.throwIfDisposed(),this.reshape([e,t,n,o,a])},r.prototype.asType=function(e){return this.throwIfDisposed(),O.cast(this,e)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,O.buffer(this.shape,this.dtype,e)]}})})},r.prototype.bufferSync=function(){return O.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,Pu(this.shape,e)]}})})},r.prototype.arraySync=function(){return Pu(this.shape,this.dataSync())},r.prototype.data=function(){return K(this,void 0,void 0,function(){var e,t;return X(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),e=Fe().read(this.dataId),this.dtype!=="string"?[3,2]:[4,e];case 1:t=n.sent();try{return[2,t.map(function(o){return Ko(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,e]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var e=Fe().readSync(this.dataId);if(this.dtype==="string")try{return e.map(function(t){return Ko(t)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e},r.prototype.bytes=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(t){switch(t.label){case 0:return this.throwIfDisposed(),[4,Fe().read(this.dataId)];case 1:return e=t.sent(),this.dtype==="string"?[2,e]:[2,new Uint8Array(e.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Fe().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(e){return e===void 0&&(e=!1),O.print(this,e)},r.prototype.reshape=function(e){return this.throwIfDisposed(),O.reshape(this,e)},r.prototype.reshapeAs=function(e){return this.throwIfDisposed(),this.reshape(e.shape)},r.prototype.expandDims=function(e){return e===void 0&&(e=0),O.expandDims(this,e)},r.prototype.cumsum=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=!1),n===void 0&&(n=!1),O.cumsum(this,e,t,n)},r.prototype.squeeze=function(e){return this.throwIfDisposed(),O.squeeze(this,e)},r.prototype.clone=function(){return this.throwIfDisposed(),O.clone(this)},r.prototype.oneHot=function(e,t,n){return this.throwIfDisposed(),O.oneHot(this,e,t,n)},r.prototype.toString=function(e){return e===void 0&&(e=!1),Ud(this.dataSync(),this.shape,this.dtype,e)},r.prototype.tile=function(e){return this.throwIfDisposed(),O.tile(this,e)},r.prototype.gather=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),O.gather(this,e,t)},r.prototype.matMul=function(e,t,n){return t===void 0&&(t=!1),n===void 0&&(n=!1),this.throwIfDisposed(),O.matMul(this,e,t,n)},r.prototype.dot=function(e){return this.throwIfDisposed(),O.dot(this,e)},r.prototype.norm=function(e,t,n){return e===void 0&&(e="euclidean"),t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.norm(this,e,t,n)},r.prototype.slice=function(e,t){return this.throwIfDisposed(),O.slice(this,e,t)},r.prototype.reverse=function(e){return this.throwIfDisposed(),O.reverse(this,e)},r.prototype.concat=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),e instanceof r&&(e=[e]),O.concat([this].concat(e),t)},r.prototype.split=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),O.split(this,e,t)},r.prototype.stack=function(e,t){return t===void 0&&(t=0),O.stack([this,e],t)},r.prototype.unstack=function(e){return e===void 0&&(e=0),O.unstack(this,e)},r.prototype.pad=function(e,t){return t===void 0&&(t=0),O.pad(this,e,t)},r.prototype.batchNormalization=function(e,t,n,o,a){return n===void 0&&(n=.001),nl("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(e,t,a,o,n)},r.prototype.batchNorm=function(e,t,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),O.batchNorm(this,e,t,n,o,a)},r.prototype.all=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),O.all(this,e,t)},r.prototype.any=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),O.any(this,e,t)},r.prototype.logSumExp=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),O.logSumExp(this,e,t)},r.prototype.sum=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),O.sum(this,e,t)},r.prototype.prod=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),O.prod(this,e,t)},r.prototype.mean=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),O.mean(this,e,t)},r.prototype.min=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),O.min(this,e,t)},r.prototype.max=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),O.max(this,e,t)},r.prototype.argMin=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),O.argMin(this,e)},r.prototype.argMax=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),O.argMax(this,e)},r.prototype.cast=function(e){return this.throwIfDisposed(),O.cast(this,e)},r.prototype.add=function(e){return this.throwIfDisposed(),O.add(this,e)},r.prototype.addStrict=function(e){return this.throwIfDisposed(),O.addStrict(this,e)},r.prototype.atan2=function(e){return this.throwIfDisposed(),O.atan2(this,e)},r.prototype.sub=function(e){return this.throwIfDisposed(),O.sub(this,e)},r.prototype.subStrict=function(e){return this.throwIfDisposed(),O.subStrict(this,e)},r.prototype.pow=function(e){return this.throwIfDisposed(),O.pow(this,e)},r.prototype.powStrict=function(e){return this.throwIfDisposed(),O.powStrict(this,e)},r.prototype.mul=function(e){return this.throwIfDisposed(),O.mul(this,e)},r.prototype.mulStrict=function(e){return this.throwIfDisposed(),O.mulStrict(this,e)},r.prototype.div=function(e){return this.throwIfDisposed(),O.div(this,e)},r.prototype.divNoNan=function(e){return this.throwIfDisposed(),O.divNoNan(this,e)},r.prototype.floorDiv=function(e){return this.throwIfDisposed(),O.floorDiv(this,e)},r.prototype.divStrict=function(e){return this.throwIfDisposed(),O.divStrict(this,e)},r.prototype.minimum=function(e){return this.throwIfDisposed(),O.minimum(this,e)},r.prototype.minimumStrict=function(e){return this.throwIfDisposed(),O.minimumStrict(this,e)},r.prototype.maximum=function(e){return this.throwIfDisposed(),O.maximum(this,e)},r.prototype.maximumStrict=function(e){return this.throwIfDisposed(),O.maximumStrict(this,e)},r.prototype.mod=function(e){return this.throwIfDisposed(),O.mod(this,e)},r.prototype.modStrict=function(e){return this.throwIfDisposed(),O.modStrict(this,e)},r.prototype.squaredDifferenceStrict=function(e){return this.throwIfDisposed(),O.squaredDifferenceStrict(this,e)},r.prototype.transpose=function(e){return this.throwIfDisposed(),O.transpose(this,e)},r.prototype.notEqual=function(e){return this.throwIfDisposed(),O.notEqual(this,e)},r.prototype.notEqualStrict=function(e){return this.throwIfDisposed(),O.notEqualStrict(this,e)},r.prototype.less=function(e){return this.throwIfDisposed(),O.less(this,e)},r.prototype.lessStrict=function(e){return this.throwIfDisposed(),O.lessStrict(this,e)},r.prototype.equal=function(e){return this.throwIfDisposed(),O.equal(this,e)},r.prototype.equalStrict=function(e){return this.throwIfDisposed(),O.equalStrict(this,e)},r.prototype.lessEqual=function(e){return this.throwIfDisposed(),O.lessEqual(this,e)},r.prototype.lessEqualStrict=function(e){return this.throwIfDisposed(),O.lessEqualStrict(this,e)},r.prototype.greater=function(e){return this.throwIfDisposed(),O.greater(this,e)},r.prototype.greaterStrict=function(e){return this.throwIfDisposed(),O.greaterStrict(this,e)},r.prototype.greaterEqual=function(e){return this.throwIfDisposed(),O.greaterEqual(this,e)},r.prototype.greaterEqualStrict=function(e){return this.throwIfDisposed(),O.greaterEqualStrict(this,e)},r.prototype.logicalAnd=function(e){return this.throwIfDisposed(),O.logicalAnd(this,e)},r.prototype.logicalOr=function(e){return this.throwIfDisposed(),O.logicalOr(this,e)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),O.logicalNot(this)},r.prototype.logicalXor=function(e){return this.throwIfDisposed(),O.logicalXor(this,e)},r.prototype.where=function(e,t){return this.throwIfDisposed(),O.where(e,this,t)},r.prototype.neg=function(){return this.throwIfDisposed(),O.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),O.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),O.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),O.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),O.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),O.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),O.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),O.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),O.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),O.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),O.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),O.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),O.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),O.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),O.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),O.abs(this)},r.prototype.clipByValue=function(e,t){return this.throwIfDisposed(),O.clipByValue(this,e,t)},r.prototype.relu=function(){return this.throwIfDisposed(),O.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),O.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),O.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),O.selu(this)},r.prototype.leakyRelu=function(e){return e===void 0&&(e=.2),this.throwIfDisposed(),O.leakyRelu(this,e)},r.prototype.prelu=function(e){return this.throwIfDisposed(),O.prelu(this,e)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),O.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),O.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),O.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),O.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),O.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),O.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),O.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),O.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),O.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),O.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),O.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),O.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),O.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),O.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),O.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),O.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),O.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),O.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),O.round(this)},r.prototype.step=function(e){return e===void 0&&(e=0),this.throwIfDisposed(),O.step(this,e)},r.prototype.softmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),O.softmax(this,e)},r.prototype.logSoftmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),O.logSoftmax(this,e)},r.prototype.resizeBilinear=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),O.image.resizeBilinear(this,e,t)},r.prototype.resizeNearestNeighbor=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),O.image.resizeNearestNeighbor(this,e,t)},r.prototype.conv1d=function(e,t,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),O.conv1d(this,e,t,n,o,a,i)},r.prototype.conv2d=function(e,t,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),O.conv2d(this,e,t,n,o,a,i)},r.prototype.conv2dTranspose=function(e,t,n,o,a){return this.throwIfDisposed(),O.conv2dTranspose(this,e,t,n,o,a)},r.prototype.depthwiseConv2D=function(e,t,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),O.depthwiseConv2d(this,e,t,n,o,a,i)},r.prototype.separableConv2d=function(e,t,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),O.separableConv2d(this,e,t,n,o,a,i)},r.prototype.avgPool=function(e,t,n,o){return this.throwIfDisposed(),O.avgPool(this,e,t,n,o)},r.prototype.maxPool=function(e,t,n,o){return this.throwIfDisposed(),O.maxPool(this,e,t,n,o)},r.prototype.localResponseNormalization=function(e,t,n,o){return e===void 0&&(e=5),t===void 0&&(t=1),n===void 0&&(n=1),o===void 0&&(o=.5),O.localResponseNormalization(this,e,t,n,o)},r.prototype.pool=function(e,t,n,o,a){return this.throwIfDisposed(),O.pool(this,e,t,n,o,a)},r.prototype.variable=function(e,t,n){return e===void 0&&(e=!0),this.throwIfDisposed(),Fe().makeVariable(this,e,t,n)},r.prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),O.unsortedSegmentSum(this,e,t)},r.prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),O.batchToSpaceND(this,e,t)},r.prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),O.spaceToBatchND(this,e,t)},r.prototype.topk=function(e,t){return e===void 0&&(e=1),t===void 0&&(t=!0),this.throwIfDisposed(),O.topk(this,e,t)},r.prototype.stridedSlice=function(e,t,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),O.stridedSlice(this,e,t,n,o,a,i,s,u)},r.prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),O.depthToSpace(this,e,t)},r.prototype.fft=function(){return this.throwIfDisposed(),O.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),O.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),O.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),O.spectral.irfft(this)},r}();Object.defineProperty(At,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Fu,Ni,Oi,Fi,Mi,Or=function(r){function e(t,n,o,a){var i=r.call(this,t.shape,t.dtype,t.dataId,a)||this;return i.trainable=n,i.name=o,i}return Se(e,r),e.prototype.assign=function(t){if(t.dtype!==this.dtype)throw new Error("dtype of the new value ("+t.dtype+") and previous value ("+this.dtype+") must match");if(!jt(t.shape,this.shape))throw new Error("shape of the new value ("+t.shape+") and previous value ("+this.shape+") must match");Fe().disposeTensor(this),this.dataId=t.dataId,Fe().incRef(this,null)},e.prototype.dispose=function(){Fe().disposeVariable(this),this.isDisposedInternal=!0},e}(At);Object.defineProperty(Or,Symbol.hasInstance,{value:function(r){return r instanceof At&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Fu||(Fu={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(Ni||(Ni={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(Oi||(Oi={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(Fi||(Fi={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(Mi||(Mi={}));var zd={float32:Fi,int32:Ni,bool:Oi,complex64:Mi};function Yt(r,e){if(r==="string"||e==="string"){if(r==="string"&&e==="string")return"string";throw new Error("Can not upcast "+r+" with "+e)}return zd[r][e]}function Za(r){return Yt(r,"int32")}function Tt(r,e){if(r.dtype===e.dtype)return[r,e];var t=Yt(r.dtype,e.dtype);return[r.cast(t),e.cast(t)]}function $d(r,e){E(r.dtype===e.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+e.dtype+") input must match"})}function rl(r){var e=[];return function t(n,o,a){if(n!=null){if(n instanceof At)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),t(c,o,a))}}}}(r,e,new Set),e}var ti,Mu=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var e in this.registeredVariables)this.registeredVariables[e].dispose()},r}(),Vd=function(){function r(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Mu}return r.prototype.ready=function(){return K(this,void 0,void 0,function(){var e,t,n;return X(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];e=this.getSortedBackends(),t=0,o.label=1;case 1:return t<e.length?(n=e[t],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return t++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var e=this.initializeBackendsAndReturnBest(),t=e.name;if(e.asyncInit)throw new Error("The highest priority backend '"+t+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(t)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(e){return!(e in this.registry)&&(!(e in this.registryFactory)||this.initializeBackend(e).asyncInit)?null:this.registry[e]},r.prototype.findBackendFactory=function(e){return e in this.registryFactory?this.registryFactory[e].factory:null},r.prototype.registerBackend=function(e,t,n){return n===void 0&&(n=1),e in this.registryFactory?(console.warn(e+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[e]={factory:t,priority:n},!0)},r.prototype.setBackend=function(e){return K(this,void 0,void 0,function(){var t,n,o;return X(this,function(a){switch(a.label){case 0:if(this.registryFactory[e]==null)throw new Error("Backend name '"+e+"' not found in registry");return this.backendName=e,this.registry[e]!=null?[3,4]:(this.backendInstance=null,t=this.initializeBackend(e),n=t.success,t.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Ld(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var e=this;Du(this.backendName).forEach(function(t){t.setupFunc!=null&&t.setupFunc(e.backendInstance)})},r.prototype.disposeRegisteredKernels=function(e){var t=this;Du(e).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(t.registry[e])})},r.prototype.initializeBackend=function(e){var t=this,n=this.registryFactory[e];if(n==null)throw new Error("Cannot initialize backend "+e+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<t.pendingBackendInitId)&&(t.registry[e]=s,t.pendingBackendInit=null,!0)}).catch(function(s){return!(a<t.pendingBackendInitId)&&(t.pendingBackendInit=null,console.warn("Initialization of backend "+e+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[e]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+e+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(e){if(!(e in this.registryFactory))throw new Error(e+" backend not found in registry");this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var e=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(t,n){return e.registryFactory[n].priority-e.registryFactory[t].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var e=this.getSortedBackends(),t=0;t<e.length;t++){var n=e[t],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(e,t){var n=this.state.tensorInfo.get(t),o=n.backend,a=this.readSync(t);o.disposeData(t),n.backend=e,e.move(t,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(e,t){var n,o=this,a=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=e}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(e,t,n){e();try{var o=n();return t(),o}catch(a){throw t(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(e){var t=this.makeTensorFromDataId(e.dataId,e.shape,e.dtype),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],function(o){return{x:function(){return o.toFloat()}}},[]),t},r.prototype.runKernel=function(e,t,n,o,a){return this.runKernelFunc(null,t,null,e,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(e,t,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-t-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+e+"'")},r.prototype.runKernelFunc=function(e,t,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var f,d=function(w){h&&(l=w.map(function(b){return c.keep(c.clone(b))}))},p=this.state.numBytes,g=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,m=qc(o,this.backendName);return f=m!=null?function(){var w=c.backend.numDataIds();v=m.kernelFunc({inputs:t,attrs:a,backend:c.backend});var b=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,w,b);var y=b.map(function(_){var I=_.dataId,S=_.shape,k=_.dtype;return c.makeTensorFromDataId(I,S,k)}),x=y.filter(function(_,I){return s[I]});return d((i||[]).slice().concat(x)),y}:function(){var w=c.backend.numDataIds();v=c.tidy(function(){return e(c.backend,d)});var b=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,w,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,t,function(){return f()}):f()}),h&&this.addTapeNode(o,t,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-g,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(t).map(function(w){return t[w].shape}),outputShapes:u.map(function(w){return w.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(e,t,n,o){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=e;n==="string"&&cs(e[0])&&(a=e.map(function(l){return Md(l)}));var i=o.write(a,t,n),s=new At(t,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=Nd(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(e,t,n,o){var a=new At(t,n=n||"float32",e,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(e,t,n,o){t===void 0&&(t=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==e.dtype&&(e=e.asType(o));var a=new Or(e,t,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(e,t){var n=this.state.tensorInfo.has(e.dataId)?this.state.tensorInfo.get(e.dataId).refCount:0;if(this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(o=e.size*Jc(e.dtype)),this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(e.dataId).refCount++,e instanceof Or||this.track(e)},r.prototype.disposeTensor=function(e){if(this.state.tensorInfo.has(e.dataId)){this.state.numTensors--,e.dtype==="string"&&this.state.numStringTensors--;var t=this.state.tensorInfo.get(e.dataId);t.refCount<=1?(e.dtype!=="complex64"&&(this.state.numBytes-=t.bytes),this.state.numDataBuffers--,t.backend.disposeData(e.dataId),this.state.tensorInfo.delete(e.dataId)):this.state.tensorInfo.get(e.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var e in this.state.registeredVariables){var t=this.state.registeredVariables[e];this.disposeVariable(t)}},r.prototype.disposeVariable=function(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]},r.prototype.memory=function(){var e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e},r.prototype.profile=function(e){return K(this,void 0,void 0,function(){var t,n;return X(this,function(o){return this.state.profiling=!0,t=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(e,t,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},u=kd(e);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var f=n[h],d=fo(f.size,f.dtype);return i.makeTensor(d,f.shape,f.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(e){return e.kept=!0,e},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(e){var t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t},r.prototype.endScope=function(e){for(var t=this,n=rl(e),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||t.track(u)})},r.prototype.gradients=function(e,t,n,o){var a=this;if(o===void 0&&(o=!1),E(t.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",e)});E(i instanceof At,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},f={},d=0;d<c.length;d++)h[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(_=u[d]).inputs;for(var g in p){for(var v=p[g],m=!1,w=0;w<c.length;w++)if(h[v.id]){_.outputs.forEach(function(R){return h[R.id]=!0}),m=!0,f[_.id]=!0;break}if(m)break}}var b={};b[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(_=u[d]).inputs,w=0;w<_.outputs.length;w++)if(b[_.outputs[w].id]){for(var g in p)b[p[g].id]=!0,y[_.id]=!0;break}var x=[];for(d=0;d<u.length;d++){var _;if(f[(_=u[d]).id]&&y[_.id]){var I={};for(var g in _.inputs){var S=_.inputs[g];h[S.id]&&(I[g]=S)}var k=Object.assign({},_);k.inputs=I,k.outputs=_.outputs,x.push(k)}}return x}(this.state.activeTape,t,i);if(!o&&s.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=Zc(Y(u),"float32"),T.makeTensor(c,u,"float32")),function(f,d,p){for(var g=function(m){var w=d[m],b=[];if(w.outputs.forEach(function(I){var S=f[I.id];S!=null?b.push(S):b.push(null)}),w.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+w.kernelName+".");var y=w.gradient(b),x=function(I){if(!(I in y))throw new Error("Cannot backprop through input "+I+". Available gradients found: "+Object.keys(y)+".");var S=p(function(){return y[I]()});if(S.dtype!=="float32")throw new Error("Error in gradient for op "+w.kernelName+". The gradient of input "+I+" must have 'float32' dtype, but has '"+S.dtype+"'");var k=w.inputs[I];if(!jt(S.shape,k.shape))throw new Error("Error in gradient for op "+w.kernelName+". The gradient of input '"+I+"' has shape '"+S.shape+"', which does not match the shape of the input '"+k.shape+"'");if(f[k.id]==null)f[k.id]=S;else{var R=f[k.id];f[k.id]=R.add(S),R.dispose()}};for(var _ in w.inputs)x(_)},v=d.length-1;v>=0;v--)g(v)}(l,s,function(f){return a.tidy(f)});var h=t.map(function(f){return l[f.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(f){for(var d=0,p=f.saved;d<p.length;d++)p[d].dispose()}),a.state.activeTape=null),{value:i,grads:h}})},r.prototype.customGrad=function(e){var t=this;return E(Ti(e),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every(function(s){return s instanceof At}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),t.runKernelFunc(function(s,u){return E((n=e.apply(void 0,o.concat([u]))).value instanceof At,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(Ti(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(f){return f instanceof At}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(f,d){h[d]=function(){return f}}),h})}},r.prototype.readSync=function(e){return this.state.tensorInfo.get(e).backend.readSync(e)},r.prototype.read=function(e){return this.state.tensorInfo.get(e).backend.read(e)},r.prototype.time=function(e){return K(this,void 0,void 0,function(){var t,n;return X(this,function(o){switch(o.label){case 0:return t=Oe(),[4,this.backend.time(e)];case 1:return(n=o.sent()).wallMs=Oe()-t,[2,n]}})})},r.prototype.track=function(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Mu,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),T=function(){var r=function(){if(ti==null){var t=void 0;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else{if(typeof self>"u")throw new Error("Could not find a global object");t=self}ti=t}return ti}();if(r._tfengine==null){var e=new Cd(r);r._tfengine=new Vd(e)}return function(t){jc=t}(r._tfengine.ENV),Fe=function(){return r._tfengine},r._tfengine}();function ol(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Ye=F();Ye.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Ye.registerFlag("IS_BROWSER",function(){return ol()}),Ye.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Ye.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Ye.registerFlag("PROD",function(){return!1}),Ye.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Ye.getBool("DEBUG")}),Ye.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Ye.registerFlag("IS_TEST",function(){return!1});var oo,pe,de,On={},ei={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Gd(r,e){On[r]=e}function Ge(r){r in On||(On[r]=function(t){if(t!==1&&t!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(t);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete On[t]},!1),t===1?n.getContext("webgl",ei)||n.getContext("experimental-webgl",ei):n.getContext("webgl2",ei)}(r));var e=On[r];return e.isContextLost()?(delete On[r],Ge(r)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),On[r])}function ba(r,e){return[e,r]}function qr(r){var e=Y(r);return Di(Math.ceil(e/4))}function po(r,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(r/2))]}function ls(r,e){var t,n,o,a,i,s,u,c,l,h=r;return F().getNumber("WEBGL_VERSION")===2?(t=h.R32F,n=h.R16F,o=h.RGBA16F,a=h.RGBA32F,i=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(t=r.RGBA,n=r.RGBA,o=r.RGBA,a=h.RGBA,i=r.RGBA,s=4,u=4,c=e!=null?e.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:t,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(r,e,t){var n=t();return e&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+Kd(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(oo||(oo={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(pe||(pe={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(de||(de={}));var Hd=596e-10,jd=65504;function qd(r){return!!(F().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||Hd<Math.abs(r)&&Math.abs(r)<jd)}function Kd(r,e){switch(e){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+e}}function Ro(r,e,t){return on(r,e,function(){return r.getExtension(t)},'Extension "'+t+'" not supported on this browser.')}function Xd(r,e,t){var n=on(r,e,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(J(r,e,function(){return r.shaderSource(n,t)}),J(r,e,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function Yd(r,e,t){var n=on(r,e,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(J(r,e,function(){return r.shaderSource(n,t)}),J(r,e,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=Jd.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,m){return hr((m+1).toString(),c)+v}),h=0,f=0;f<l.length;f++)h=Math.max(l[f].length,h);var d=l.slice(0,s-1),p=l.slice(s-1,s),g=l.slice(s);console.log(d.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+hr(p[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(g.join(`
`))}(t,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var ni,ri,Jd=/ERROR: [0-9]+:([0-9]+):/g;function Qd(r,e){return on(r,e,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Zd(r,e,t){if(J(r,e,function(){return r.linkProgram(t)}),r.getProgramParameter(t,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function oi(r,e,t){if(J(r,e,function(){return r.validateProgram(t)}),r.getProgramParameter(t,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function tp(r,e,t){var n=on(r,e,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,e,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),J(r,e,function(){return r.bufferData(r.ARRAY_BUFFER,t,r.STATIC_DRAW)}),n}function ep(r,e,t){var n=on(r,e,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,e,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),J(r,e,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW)}),n}function np(r,e){return on(r,e,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function rp(r,e){var t=F().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||e<=0){var n="["+r+"x"+e+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>t||e>t)throw n="["+r+"x"+e+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+t+"x"+t+"]")+".")}function op(r,e){return on(r,e,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Bu(r,e,t,n,o,a,i,s){var u=r.getAttribLocation(t,n);return u!==-1&&(J(r,e,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),J(r,e,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),J(r,e,function(){return r.enableVertexAttribArray(u)}),!0)}function ap(r,e,t,n){lp(r,n),J(r,e,function(){return r.activeTexture(r.TEXTURE0+n)}),J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,t)})}function ip(r,e,t,n){return on(r,e,function(){return r.getUniformLocation(t,n)},'uniform "'+n+'" not present in program.')}function sp(r,e,t){return r.getUniformLocation(e,t)}function up(r,e,t,n,o,a){J(r,e,function(){return ap(r,e,n,a)}),J(r,e,function(){return r.uniform1i(o,a)})}function ai(r,e,t,n){J(r,e,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),J(r,e,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0)})}function Lu(r,e,t){J(r,e,function(){return r.bindFramebuffer(r.FRAMEBUFFER,t)}),J(r,e,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function So(r){var e=r.checkFramebufferStatus(r.FRAMEBUFFER);if(e!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+cp(r,e))}function cp(r,e){switch(e){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+e}}function on(r,e,t,n){var o=J(r,e,function(){return t()});if(o==null)throw new Error(n);return o}function lp(r,e){var t=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=e+r.TEXTURE0;if(n<r.TEXTURE0||n>t)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+t+"]")+".")}function Xo(r,e){return e===void 0&&(e=2),Y(r.slice(0,r.length-e))}function Yo(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function ii(r){var e=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(e=[Xo(r)].concat(Yo(r))),e}function hp(r,e){var t;e===void 0&&(e=!1);var n=F().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?Yc(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=Mn(r);r=o.newShape}var a=Y(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(e){var i=Xo(r),s=2,u=2;return r.length&&(s=(t=Yo(r))[0],u=t[1]),Di(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return Di(a)}function Io(r){return r%2==0}function Ao(r,e){if(jt(r=r.slice(-2),e=e.slice(-2))||!r.length||!e.length||r[0]===0||r[1]===0||e[0]===0||e[1]===0)return!0;if(r.length!==e.length){var t=r.slice(-1)[0],n=e.slice(-1)[0];if(t===n||Io(t)&&Io(n)&&(r[0]===1||e[0]===1))return!0}return r[1]===e[1]&&Io(r[0])&&Io(e[0])}function fp(r){if(ni==null){var e=Ge(r);ni=e.getParameter(e.MAX_TEXTURE_SIZE)}return ni}function dp(r){if(ri==null){var e=Ge(r);ri=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,ri)}function pp(r){if(r===0)return 0;var e=Ge(r);return xe(e,"EXT_disjoint_timer_query_webgl2")&&r===2?2:xe(e,"EXT_disjoint_timer_query")?1:0}function xe(r,e){return r.getExtension(e)!=null}function Wu(r){try{if(Ge(r)!=null)return!0}catch{return!1}return!1}function vp(r){if(r===0)return!1;var e=Ge(r);if(r===1){if(!xe(e,"OES_texture_float"))return!1}else if(!xe(e,"EXT_color_buffer_float"))return!1;return Bi(e)}function gp(r){if(r===0)return!1;var e=Ge(r);if(r!==1){if(xe(e,"EXT_color_buffer_float"))return Bi(e);if(xe(e,"EXT_color_buffer_half_float")){var t=e.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=ls(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(e,t)}return!1}return!!xe(e,"OES_texture_float")&&!!xe(e,"WEBGL_color_buffer_float")&&Bi(e)}function Bi(r){var e=ls(r),t=r.createTexture();r.bindTexture(r.TEXTURE_2D,t),r.texImage2D(r.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(t),r.deleteFramebuffer(n),o}function mp(r){return r===2&&Ge(r).fenceSync!=null}var rt=F();function al(r){F().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function q(r,e){return T.tidy(r,e)}function ue(r){rl(r).forEach(function(e){return e.dispose()})}function yp(r){return T.keep(r)}function Jo(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];F().getBool("IS_TEST")||console.warn.apply(console,r)}function Sn(r,e){var t=r;if(Le(r))return e==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(t)||Le(t)&&e!=="string";)n.push(t.length),t=t[0];return Array.isArray(r)&&F().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!Le(a))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),E(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function Uu(r,e,t,n){if(r!=null&&(r!=="numeric"&&r!==e||r==="numeric"&&e==="string"))throw new Error("Argument '"+t+"' passed to '"+n+"' must be "+r+" tensor, but got "+e+" tensor")}function C(r,e,t,n){if(n===void 0&&(n="numeric"),r instanceof At)return Uu(n,r.dtype,e,t),r;var o=ho(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),Uu(n,o,e,t),r==null||!Le(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+e+"' passed to '"+t+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=Sn(r,o);Le(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?Qc(r,o,F().getBool("DEBUG")):Nr(r,[],!0);return T.makeTensor(s,i,o)}function Qo(r,e,t,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+e+" passed to "+t+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return C(o,e+"["+a+"]",t)},n)}function il(r,e){for(var t=0;t<r.length;++t)if(r[r.length-t-1]!==e-1-t)return!1;return!0}function bp(r,e,t){for(var n=r.length+e.length,o=[],a=0,i=0,s=0;s<n;s++)t.indexOf(s)===-1?o.push(r[a++]):o.push(e[i++]);return o}function Qt(r,e){for(var t=[],n=r.length,o=0;o<n;o++)e.indexOf(o)===-1&&t.push(r[o]);return[t,e.map(function(a){return r[a]})]}function ce(r,e){return bp(r,e.map(function(t){return 1}),e)}function fe(r,e,t){E(il(e,t),function(){return r+" supports only inner-most axes for now. Got axes "+e+" and rank-"+t+" input."})}function He(r,e){if(il(r,e))return null;for(var t=[],n=0;n<e;++n)r.indexOf(n)===-1&&t.push(n);return r.forEach(function(o){return t.push(o)}),t}function hs(r){return r.map(function(e,t){return[t,e]}).sort(function(e,t){return e[1]-t[1]}).map(function(e){return e[0]})}function je(r,e){for(var t=[],n=e-r;n<e;++n)t.push(n);return t}function xp(r,e){var t=r[0].length;r.forEach(function(o,a){E(o.length===t,function(){return"Error in concat"+t+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+t+")"})}),E(e>=0&&e<t,function(){return"Error in concat"+t+"D: axis must be between 0 and "+(t-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<t;i++)E(i===e||o[i]===n[i],function(){return"Error in concat"+t+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function Fr(r,e){for(var t=r[0].slice(),n=1;n<r.length;n++)t[e]+=r[n][e];return t}function A(r){var e=Object.keys(r);if(e.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");var t=e[0],n=r[t];t.endsWith("_")&&(t=t.substring(0,t.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];T.startScope(t);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),T.endScope(s),s}catch(u){throw T.endScope(null),u}};return Object.defineProperty(o,"name",{value:t,configurable:!0}),o}rt.registerFlag("HAS_WEBGL",function(){return rt.getNumber("WEBGL_VERSION")>0}),rt.registerFlag("WEBGL_VERSION",function(){return Wu(2)?2:Wu(1)?1:0}),rt.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return rt.get("WEBGL_VERSION")===2}),rt.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),rt.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),rt.registerFlag("WEBGL_PACK",function(){return rt.getBool("HAS_WEBGL")}),rt.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_CLIP",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),rt.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_REDUCE",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_LAZILY_UNPACK",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_CONV_IM2COL",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return fp(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return dp(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=rt.getNumber("WEBGL_VERSION");return r===0?0:pp(r)}),rt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return rt.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),rt.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return vp(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!rt.getBool("WEBGL_FORCE_F16_TEXTURES")&&rt.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),rt.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return gp(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return mp(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return rt.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),nl=al;var Xt=A({complex_:function(r,e){var t=C(r,"real","complex"),n=C(e,"imag","complex");return wt(t.shape,n.shape,"real and imag shapes, "+t.shape+" and "+n.shape+", must match in call to tf.complex()."),T.runKernelFunc(function(o){return o.complex(t,n)},{$real:t,$imag:n})}}),be=A({real_:function(r){var e=C(r,"input","real");return T.runKernelFunc(function(t){return t.real(e)},{$input:e})}}),Me=A({imag_:function(r){var e=C(r,"input","imag");return T.runKernelFunc(function(t){return t.imag(e)},{$input:e})}});function Jt(r,e,t){return In(r,e,Sn(r,t),t)}function In(r,e,t,n){if(n==null&&(n=ho(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Le(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){tl(e);var o=Y(e),a=Y(t);E(o===a,function(){return"Based on the provided shape, ["+e+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<t.length;++i){var s=t[i],u=i!==t.length-1||s!==Y(e.slice(i));E(t[i]===e[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+t+") does not match the provided shape ("+e+"). "})}}return Le(r)||Array.isArray(r)||(r=[r]),e=e||t,r=n!=="string"?Qc(r,n,F().getBool("DEBUG")):Nr(r,[],!0),T.makeTensor(r,e,n)}function H(r,e){if((Le(r)&&e!=="string"||Array.isArray(r))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Le(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return In(r,[],[],e)}function Bt(r,e){Br(r);var t=Sn(r,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return In(r,null,t,e)}function xn(r,e,t){if(Br(r),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=Sn(r,t);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return In(r,e,n,t)}function fs(r,e,t){if(Br(r),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=Sn(r,t);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return In(r,e,n,t)}function ae(r,e,t){if(Br(r),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=Sn(r,t);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return In(r,e,n,t)}function wp(r,e,t){if(Br(r),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=Sn(r,t);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return In(r,e,n,t)}function _p(r,e,t){if(Br(r),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=Sn(r,t);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return In(r,e=e||n,n,t)}function Cp(r,e,t,n){return e===void 0&&(e=!0),T.makeVariable(r,e,t,n)}function Lr(r,e){if(e===void 0&&(e="float32"),e==="complex64"){var t=Lr(r,"float32"),n=Rt(r,"float32");return Xt(t,n)}var o=Zc(Y(r),e);return T.makeTensor(o,r,e)}function Rt(r,e){if(e===void 0&&(e="float32"),e==="complex64"){var t=Rt(r,"float32"),n=Rt(r,"float32");return Xt(t,n)}var o=fo(Y(r),e);return T.makeTensor(o,r,e)}function Ue(r,e,t){return T.runKernelFunc(function(n){return n.fill(r,e,t)},{})}function Ep(r,e,t){if(t<=0)throw new Error("The number of values should be positive.");return T.runKernelFunc(function(n){return n.linspace(r,e,t)},{})}function Zo(r,e,t,n){if(t===void 0&&(t=1),n===void 0&&(n="float32"),t===0)throw new Error("Cannot have a step of zero");if(r===e||r<e&&t<0||e<r&&t>1)return Rt([0],n);var o=fo(Math.abs(Math.ceil((e-r)/t)),n);e<r&&t===1&&(t=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+t;return Bt(o,n)}var sl=A({onesLike_:function(r){var e=C(r,"x","onesLike");if(e.dtype==="complex64"){var t=sl(be(e)),n=mt(Me(e));return Xt(t,n)}return T.runKernelFunc(function(o){return o.onesLike(e)},{$x:e},function(o,a){return{$x:function(){return mt(o)}}})}}),mt=A({zerosLike_:function(r){var e=C(r,"x","zerosLike");return T.runKernelFunc(function(t){return t.zerosLike(e)},{$x:e},function(t,n){return{$x:function(){return mt(t)}}})}}),Wt=A({concat_:function(r,e){e===void 0&&(e=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var t=Qo(r,"tensors","concat");t[0].dtype==="complex64"&&t.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),e=Vt(e,t[0].shape)[0];var n=Fr(t.map(function(s){return s.shape}),e);if(Y(n)===0)return Jt([],n);if((t=t.filter(function(s){return s.size>0})).length===1)return t[0];var o=t.map(function(s){return s.shape});xp(o,e);var a=t,i={axis:e};return T.runKernelFunc(function(s){return s.concat(t,e)},a,function(s){var u=o.map(function(c){return c[e]});return ds(s,u,e).map(function(c){return function(){return c}})},"Concat",i)}}),kp=A({concat1d_:function(r){return Wt(r,0)}}),Rp=A({concat2d_:function(r,e){return Wt(r,e)}}),Sp=A({concat3d_:function(r,e){return Wt(r,e)}}),Ip=A({concat4d_:function(r,e){return Wt(r,e)}}),ds=A({split_:function(r,e,t){t===void 0&&(t=0);var n,o=C(r,"x","split");return t=Vt(t,o.shape)[0],typeof e=="number"?(E(o.shape[t]%e==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(e).fill(o.shape[t]/e)):(E(o.shape[t]===e.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=e),T.runKernelFunc(function(a){return a.split(o,n,t)},{$x:o},function(a){return{$x:function(){return Wt(a,t)}}})}});function qn(r,e){return r(e={exports:{}},e.exports),e.exports}var Ap=qn(function(r){(function(e,t,n){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var f=0;f<h.length;f++){var d=.02519603282416938*(u+=h.charCodeAt(f));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.alea=i})(0,r)}),Dp=qn(function(r){(function(e,t,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xor128=i})(0,r)}),Tp=qn(function(r){(function(e,t,n){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xorwow=i})(0,r)}),Pp=qn(function(r){(function(e,t,n){function o(s){var u=this;u.next=function(){var c,l,h=u.x,f=u.i;return c=h[f],l=(c^=c>>>7)^c<<24,l^=(c=h[f+1&7])^c>>>10,l^=(c=h[f+3&7])^c>>>3,l^=(c=h[f+4&7])^c<<7,c=h[f+7&7],l^=(c^=c<<13)^c<<9,h[f]=l,u.i=f+1&7,l},function(c,l){var h,f=[];if(l===(0|l))f[0]=l;else for(l=""+l,h=0;h<l.length;++h)f[7&h]=f[7&h]<<15^l.charCodeAt(h)+f[h+1&7]<<13;for(;f.length<8;)f.push(0);for(h=0;h<8&&f[h]===0;++h);for(h==8?f[7]=-1:f[h],c.x=f,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.x&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xorshift7=i})(0,r)}),Np=qn(function(r){(function(e,t,n){function o(s){var u=this;u.next=function(){var c,l,h=u.w,f=u.X,d=u.i;return u.w=h=h+1640531527|0,l=f[d+34&127],c=f[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=f[d]=l^c,u.i=d,l+(h^h>>>16)|0},function(c,l){var h,f,d,p,g,v=[],m=128;for(l===(0|l)?(f=l,l=null):(l+="\0",f=0,m=Math.max(m,l.length)),d=0,p=-32;p<m;++p)l&&(f^=l.charCodeAt((p+32)%l.length)),p===0&&(g=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,p>=0&&(g=g+1640531527|0,d=(h=v[127&p]^=f+g)==0?d+1:0);for(d>=128&&(v[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)f=v[d+34&127],h=v[d=d+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,v[d]=f^h;c.w=g,c.X=v,c.i=d}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.X&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xor4096=i})(0,r)}),Op=qn(function(r){(function(e,t,n){function o(s){var u=this,c="";u.next=function(){var h=u.b,f=u.c,d=u.d,p=u.a;return h=h<<25^h>>>7^f,f=f-d|0,d=d<<24^d>>>8^p,p=p-h|0,u.b=h=h<<20^h>>>12^f,u.c=f=f-d|0,u.d=d<<16^f>>>16^p,u.a=p-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.tychei=i})(0,r)}),Fn=qn(function(r){(function(e,t){var n,o=this,a=256,i=6,s="random",u=t.pow(a,i),c=t.pow(2,52),l=2*c,h=a-1;function f(m,w,b){var y=[],x=g(function S(k,R){var P,D=[],L=typeof k;if(R&&L=="object")for(P in k)try{D.push(S(k[P],R-1))}catch{}return D.length?D:L=="string"?k:k+"\0"}((w=w==1?{entropy:!0}:w||{}).entropy?[m,v(e)]:m??function(){try{var S;return n&&(S=n.randomBytes)?S=S(a):(S=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(S)),v(S)}catch{var k=o.navigator,R=k&&k.plugins;return[+new Date,o,R,o.screen,v(e)]}}(),3),y),_=new d(y),I=function(){for(var S=_.g(i),k=u,R=0;S<c;)S=(S+R)*a,k*=a,R=_.g(1);for(;S>=l;)S/=2,k/=2,R>>>=1;return(S+R)/k};return I.int32=function(){return 0|_.g(4)},I.quick=function(){return _.g(4)/4294967296},I.double=I,g(v(_.S),e),(w.pass||b||function(S,k,R,P){return P&&(P.S&&p(P,_),S.state=function(){return p(_,{})}),R?(t[s]=S,k):S})(I,x,"global"in w?w.global:this==t,w.state)}function d(m){var w,b=m.length,y=this,x=0,_=y.i=y.j=0,I=y.S=[];for(b||(m=[b++]);x<a;)I[x]=x++;for(x=0;x<a;x++)I[x]=I[_=h&_+m[x%b]+(w=I[x])],I[_]=w;(y.g=function(S){for(var k,R=0,P=y.i,D=y.j,L=y.S;S--;)k=L[P=h&P+1],R=R*a+L[h&(L[P]=L[D=h&D+k])+(L[D]=k)];return y.i=P,y.j=D,R})(a)}function p(m,w){return w.i=m.i,w.j=m.j,w.S=m.S.slice(),w}function g(m,w){for(var b,y=m+"",x=0;x<y.length;)w[h&x]=h&(b^=19*w[h&x])+y.charCodeAt(x++);return v(w)}function v(m){return String.fromCharCode.apply(0,m)}if(t["seed"+s]=f,g(t.random(),e),r.exports){r.exports=f;try{n=require("crypto")}catch{}}})([],Math)});Fn.alea=Ap,Fn.xor128=Dp,Fn.xorwow=Tp,Fn.xorshift7=Pp,Fn.xor4096=Np,Fn.tychei=Op;var xa=Fn.alea,ps=function(){function r(e,t,n,o,a){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=xa(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var e=this.nextVal;return this.nextVal=NaN,e}for(var t,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);t=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(t)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(t)},r.prototype.convertValue=function(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)},r.prototype.isValidTruncated=function(e){return e<=this.upper&&e>=this.lower},r}(),Fp=function(){function r(e,t,n,o){this.alpha=e,this.beta=1/t,this.dtype=n;var a=o||Math.random();this.randu=xa(a.toString()),this.randn=new ps(0,1,n,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var e,t,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,t=1-.331*(e=o*o)*e,n=.5*e+this.d*(1-i+Math.log(i)),(a=this.randu())<t||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(e){return this.dtype==="float32"?e:Math.round(e)},r}(),Mp=function(){function r(e,t,n,o){var a=this;if(e===void 0&&(e=0),t===void 0&&(t=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=e,this.range=t-e,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+e+" - "+t+" <= 1 and dtype is not float");this.random=xa(o)}return r.prototype.convertValue=function(e){return this.canReturnFloat()?e:Math.round(e)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function at(r,e,t){return e===void 0&&(e="float32"),e=e||"float32",tl(r),new ro(r,e,t)}function Bp(r,e){e===void 0&&(e=!1),console.log(r.toString(e))}var ul=A({batchToSpaceND_:function(r,e,t){var n=C(r,"x","batchToSpaceND"),o=e.reduce(function(a,i){return a*i});return E(n.rank>=1+e.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+e.length}),E(t.length===e.length,function(){return"crops.length is "+t.length+" but should be equal to blockShape.length  "+e.length}),E(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+e.join(" * ")+" === "+o}),T.runKernelFunc(function(a){return a.batchToSpaceND(n,e,t)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(e,t)}}})}}),Lp=A({broadcastTo_:function(r,e){var t=C(r,"broadcastTo","x"),n=t.shape;if(e.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+e+"].");if(e.length<t.rank)throw new Error("broadcastTo(): shape.length="+e.length+" < input.rank="+t.rank+".");if(e.length>t.rank){for(var o=t.shape.slice();o.length<e.length;)o.unshift(1);t=t.reshape(o)}for(var a=Array.from(e),i=e.length-1;i>=0;i--)if(t.shape[i]===e[i])a[i]=1;else if(t.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+e+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?t.clone():T.runKernelFunc(function(u){return u.tile(t,a)},{input:t},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Wp=A({cast_:function(r,e){var t=C(r,"x","cast");if(!Td(e))throw new Error("Failed to cast to unknown dtype "+e);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:e};return T.runKernelFunc(function(o){return o.cast(t,e)},{x:t},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),Up=A({clone_:function(r){var e=C(r,"x","clone",null);return T.runKernelFunc(function(){return T.makeTensorFromDataId(e.dataId,e.shape,e.dtype)},{$x:e},function(t){return{$x:function(){return t.toFloat()}}})}}),zp=A({cumsum_:function(r,e,t,n){e===void 0&&(e=0),t===void 0&&(t=!1),n===void 0&&(n=!1);var o=C(r,"x","cumsum"),a=He([e|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=je(1,o.rank)[0],u=T.runKernelFunc(function(c){return c.cumsum(i,s,t,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(e,t,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),$p=A({depthToSpace_:function(r,e,t){t===void 0&&(t="NHWC");var n=C(r,"x","depthToSpace"),o=t==="NHWC"?n.shape[1]:n.shape[2],a=t==="NHWC"?n.shape[2]:n.shape[3],i=t==="NHWC"?n.shape[3]:n.shape[1];return E(o*e>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+e+`  for depthToSpace with input shape
      `+n.shape}),E(a*e>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+e+` for depthToSpace with input shape
          `+n.shape}),E(i%(e*e)==0,function(){return"Dimension size must be evenly divisible by "+e*e+" but is "+i+" for depthToSpace with input shape "+n.shape}),T.runKernelFunc(function(s){return s.depthToSpace(n,e,t)},{$x:n})}}),ye=A({expandDims_:function(r,e){e===void 0&&(e=0);var t=C(r,"x","expandDims",null);E(e<=t.rank,function(){return"Axis must be <= rank of the tensor"});var n=t.shape.slice();return e<0&&(E(-(t.rank+1)<=e,function(){return"Axis must be in the interval ["+-(t.rank+1)+", "+t.rank+"]"}),e=t.rank+e+1),n.splice(e,0,1),ke(t,n)}}),cl=A({eye_:function(r,e,t,n){n===void 0&&(n="float32"),e==null&&(e=r);for(var o=at([r,e],n),a=r<=e?r:e,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,e);if(t==null)return s;if(t.length===1)return fr(ye(s,0),[t[0],1,1]);if(t.length===2)return fr(ye(ye(s,0),0),[t[0],t[1],1,1]);if(t.length===3)return fr(ye(ye(ye(s,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+t.length+"D.")}}),Vp=A({multinomial_:function(r,e,t,n){n===void 0&&(n=!1);var o=C(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);t=t||Math.random();var s=i===1?o.as2D(1,-1):o,u=T.runKernelFunc(function(c){return c.multinomial(s,n,e,t)},{logits2D:s});return i===1?u.as1D():u}}),Li=A({oneHot_:function(r,e,t,n){if(t===void 0&&(t=1),n===void 0&&(n=0),e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);var o=C(r,"indices","oneHot","int32"),a=o.shape.concat([e]);return o=o.flatten(),T.runKernelFunc(function(i){return i.oneHot(o,e,t,n)},{$indices:o},function(i){return{$indices:function(){return Rt(o.shape,"float32")}}}).reshape(a)}}),Kn=A({pad_:function(r,e,t){t===void 0&&(t=0);var n=C(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:e,constantValue:t};return T.runKernelFunc(function(a){return a.pad(n,e,t)},{x:n},function(a){var i=e.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),Gp=A({pad1d_:function(r,e,t){return t===void 0&&(t=0),E(e.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Kn(r,[e],t)}}),Hp=A({pad2d_:function(r,e,t){return t===void 0&&(t=0),E(e.length===2&&e[0].length===2&&e[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Kn(r,e,t)}}),jp=A({pad3d_:function(r,e,t){return t===void 0&&(t=0),E(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Kn(r,e,t)}}),qp=A({pad4d_:function(r,e,t){return t===void 0&&(t=0),E(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Kn(r,e,t)}}),Kp=A({rand_:function(r,e,t){var n=Y(r),o=null;if(t==null||t==="float32")o=new Float32Array(n);else if(t==="int32")o=new Int32Array(n);else{if(t!=="bool")throw new Error("Unknown data type "+t);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=e();return T.makeTensor(o,r,t)}}),Xp=A({randomNormal_:function(r,e,t,n,o){if(e===void 0&&(e=0),t===void 0&&(t=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new ps(e,t,n,!1,o),i=at(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Yp=A({randomGamma_:function(r,e,t,n,o){if(t===void 0&&(t=1),n===void 0&&(n="float32"),t==null&&(t=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new Fp(e,t,n,o),i=at(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),ll=A({randomUniform_:function(r,e,t,n,o){e===void 0&&(e=0),t===void 0&&(t=1),n===void 0&&(n="float32");for(var a=at(r,n),i=new Mp(e,t,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),ke=A({reshape_:function(r,e){var t=C(r,"x","reshape",null);e=Ad(e,t.size),E(t.size===Y(e),function(){return"new shape and old shape must have the same number of elements."});var n={shape:e};return T.runKernelFunc(function(o){return o.reshape(t,e)},{x:t},function(o){return{x:function(){return o.reshape(t.shape)}}},"Reshape",n)}}),hl=A({spaceToBatchND_:function(r,e,t){var n=C(r,"x","spaceToBatchND");return E(n.rank>=1+e.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+e.length}),E(t.length===e.length,function(){return"paddings.shape[0] "+t.length+" must be equal to [blockShape] "+e.length}),E(n.shape.reduce(function(o,a,i){return i>0&&i<=e.length?o&&(a+t[i-1][0]+t[i-1][1])%e[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+t.toString()+" must be divisible by blockShapes "+e.toString()}),T.runKernelFunc(function(o){return o.spaceToBatchND(n,e,t)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(e,t)}}})}}),fl=A({squeeze_:function(r,e){var t=C(r,"x","squeeze");return ke(t,Mn(t.shape,e).newShape)}}),me=A({stack_:function(r,e){e===void 0&&(e=0);var t=Qo(r,"tensors","stack");if(E(t.length>=1,function(){return"Pass at least one tensor to tf.stack"}),t.length===1)return t[0].expandDims(e);var n=t[0].rank,o=t[0].shape,a=t[0].dtype;E(e<=n,function(){return"Axis must be <= rank of the tensor"}),t.forEach(function(s){wt(o,s.shape,"All tensors passed to stack must have matching shapes")}),t.forEach(function(s){E(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=t.map(function(s){return s.expandDims(e)});return Wt(i,e)}}),fr=A({tile_:function(r,e){var t=C(r,"x","tile",null);E(t.rank===e.length,function(){return"Error in transpose: rank of input "+t.rank+" must match length of reps "+e+"."});var n=[t],o={reps:e};return T.runKernelFunc(function(a,i){var s=a.tile(t,e);return i([t]),s},{x:t},function(a,i){var s=i[0];return{x:function(){var u=mt(s);if(s.rank===1)for(var c=0;c<e[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<e[0];++c)for(var l=0;l<e[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<e[0];++c)for(l=0;l<e[1];++l)for(var h=0;h<e[2];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<e[0];++c)for(l=0;l<e[1];++l)for(h=0;h<e[2];++h)for(var f=0;f<e[3];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],f*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Jp=A({truncatedNormal_:function(r,e,t,n,o){if(e===void 0&&(e=0),t===void 0&&(t=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new ps(e,t,n,!0,o),i=at(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ut=A({unstack_:function(r,e){e===void 0&&(e=0),e=e||0;var t=C(r,"x","unstack");E(e>=-t.shape.length&&e<t.shape.length,function(){return"Axis = "+e+" is not in [-"+t.shape.length+", "+t.shape.length+")"}),e<0&&(e+=t.shape.length);var n={axis:e};return T.runKernelFunc(function(o){return o.unstack(t,e)},{x:t},function(o){return{x:function(){return me(o,e)}}},"Unpack",n)}}),Qp=function(r,e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h;return X(this,function(f){switch(f.label){case 0:return t=C(r,"x","setdiff1d"),n=C(e,"y","setdiff1d"),E(t.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+t.dtype+") and y ("+n.dtype+")."}),E(t.rank===1,function(){return"x should be 1D tensor, but got x ("+t.shape+")."}),E(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,t.data()];case 1:return o=f.sent(),[4,n.data()];case 2:for(a=f.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new ro([s],t.dtype),c=new ro([s],"int32"),l=0,h=0;l<o.length;l++)i.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function ta(r,e,t,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(e.slice(0))).push(r[0]/t),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=e.length,i=0;i<a;++i)o=o.concat([r[i+1]/e[i],e[i]]);o=o.concat(r.slice(a+1))}return o}function ea(r,e,t){t===void 0&&(t=!0);var n=[];if(t){n.push(e);for(var o=e+1;o<r;++o)o<=2*e?(n.push(o),n.push(o-(e+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*e+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function na(r,e,t,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/t):o.push(r[0]*t);for(var a=1;a<r.length;++a)a<=e.length?n?o.push(e[a-1]*r[a]):o.push(r[a]/e[a-1]):o.push(r[a]);return o}function dl(r,e){for(var t=[0],n=0;n<e;++n)t.push(r[n][0]);return t}function pl(r,e,t){for(var n=r.slice(0,1),o=0;o<t;++o)n.push(r[o+1]-e[o][0]-e[o][1]);return n}function vl(r,e){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(e.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(e.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+e.dtype+".");if(e.shape[e.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+e.shape[e.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var t=e.shape,n=t[t.length-1],o=1,a=0;a<t.length-1;++a)o*=t[a];var i=r.shape,s=t.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=We(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var gl=30;function si(r){return r<=gl?r:Pi(r,Math.floor(Math.sqrt(r)))}function Zp(r,e,t){var n=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+t.shape+", indices.shape: "+e.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(t.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(t.rank-o))throw new Error(a+" Output shape length < "+(n+(t.rank-o)));if(t.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(t.shape[i]!==e.shape[i])throw new Error(a+" updates.shape["+i+"] ("+t.shape[i]+") != indices.shape["+i+"] ("+e.shape[i]+").");for(i=0;i<t.rank-o;++i)if(t.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+t.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function tv(r,e,t){if(e.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(e.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(t.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+t);if(t.length===0){if(e.size===0)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Zp(t,e,r)}function ra(r,e,t){for(var n=e.shape.length,o=n>1?e.shape[n-1]:1,a=t.length,i=1,s=o;s<a;++s)i*=t[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Y(e.shape)/u,sliceSize:i,strides:We(t.slice(0,o)).concat([1]),outputSize:Y(t)}}function ev(r,e,t){E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+e+" must match the rank of the array ("+r.rank+")."}),E(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of size "+t+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){E(e[a]+t[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(e[a]+t[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function zu(r){for(var e=[],t=0;r>0;)1&r&&e.push(t),r/=2,t++;return e}function vs(r,e,t){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((e[o]-r[o])/t[o]);return n}function nv(r,e,t,n,o){var a=e[o],i=t[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=Ai(0,a,s-1)}function rv(r,e,t,n,o){var a=e[o],i=t[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?Ai(0,a,s):Ai(-1,a,s-1)}function ml(r,e,t){for(var n=t.length,o=0;o<t.length;o++)if(t[o]>1){n=o;break}for(o=n+1;o<t.length;o++)if(e[o]>0||t[o]!==r[o])return!1;return!0}function yl(r,e){for(var t=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)t+=r[n]*e[n];return t}function ov(r,e){E(Ti(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(e==null||Array.isArray(e)&&e.every(function(l){return l instanceof Or}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var t=e!=null;if(!t)for(var n in e=[],T.registeredVariables)e.push(T.registeredVariables[n]);var o=t?e.filter(function(l){return!l.trainable}):null,a=e.length;E((e=e.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=T.gradients(r,e,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return e.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function wa(r){return T.customGrad(r)}var an=A({softmax_:function(r,e){e===void 0&&(e=-1);var t=C(r,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+t.rank+" and dim was "+e);return T.runKernelFunc(function(n,o){var a=n.softmax(t,e);return o([a]),a},{logits:t},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([e],!0).mul(a))}}},"Softmax",{dim:e},[],[!0])}}),av=A({logSoftmax_:function(r,e){e===void 0&&(e=-1);var t=C(r,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+t.rank+" and axis was "+e);return wa(function(n,o){var a=n.max(e,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(e,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(e,!0).mul(l))}}})(t)}}),bl=function(){function r(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)},r.prototype.set=function(e,t){this.dataIdsCount++,this.data.set(e,t)},r.prototype.has=function(e){return this.data.has(e)},r.prototype.delete=function(e){return this.dataIdsCount--,this.data.delete(e)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),xl=function(){function r(){}return r.prototype.time=function(e){return N("time")},r.prototype.read=function(e){return N("read")},r.prototype.readSync=function(e){return N("readSync")},r.prototype.numDataIds=function(){return N("numDataIds")},r.prototype.disposeData=function(e){return N("disposeData")},r.prototype.write=function(e,t,n){return N("write")},r.prototype.move=function(e,t,n,o){return N("move")},r.prototype.memory=function(){return N("memory")},r.prototype.floatPrecision=function(){return N("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(e,t,n,o){return N("batchMatMul")},r.prototype.fusedBatchMatMul=function(e){return e.a,e.b,e.transposeA,e.transposeB,e.bias,e.activation,e.preluActivationWeights,N("fusedBatchMatMul")},r.prototype.slice=function(e,t,n){return N("slice")},r.prototype.stridedSlice=function(e,t,n,o){return N("stridedSlice")},r.prototype.unstack=function(e,t){return N("unstack")},r.prototype.reverse=function(e,t){return N("reverse")},r.prototype.concat=function(e,t){return N("concat")},r.prototype.neg=function(e){return N("neg")},r.prototype.add=function(e,t){return N("add")},r.prototype.addN=function(e){return N("addN")},r.prototype.subtract=function(e,t){return N("subtract")},r.prototype.multiply=function(e,t){return N("multiply")},r.prototype.realDivide=function(e,t){return N("realDivide")},r.prototype.floorDiv=function(e,t){return N("floorDiv")},r.prototype.sum=function(e,t){return N("sum")},r.prototype.prod=function(e,t){return N("prod")},r.prototype.unsortedSegmentSum=function(e,t,n){return N("unsortedSegmentSum")},r.prototype.argMin=function(e,t){return N("argMin")},r.prototype.argMax=function(e,t){return N("argMax")},r.prototype.equal=function(e,t){return N("equal")},r.prototype.notEqual=function(e,t){return N("notEqual")},r.prototype.less=function(e,t){return N("less")},r.prototype.lessEqual=function(e,t){return N("lessEqual")},r.prototype.greater=function(e,t){return N("greater")},r.prototype.greaterEqual=function(e,t){return N("greaterEqual")},r.prototype.logicalNot=function(e){return N("logicalNot")},r.prototype.logicalAnd=function(e,t){return N("logicalAnd")},r.prototype.logicalOr=function(e,t){return N("logicalOr")},r.prototype.where=function(e){return N("where")},r.prototype.select=function(e,t,n){return N("select")},r.prototype.topk=function(e,t,n){return N("topk")},r.prototype.min=function(e,t){return N("min")},r.prototype.minimum=function(e,t){return N("minimum")},r.prototype.mod=function(e,t){return N("mod")},r.prototype.max=function(e,t){return N("max")},r.prototype.maximum=function(e,t){return N("maximum")},r.prototype.all=function(e,t){return N("all")},r.prototype.any=function(e,t){return N("any")},r.prototype.squaredDifference=function(e,t){return N("squaredDifference")},r.prototype.ceil=function(e){return N("ceil")},r.prototype.floor=function(e){return N("floor")},r.prototype.round=function(e){return N("round")},r.prototype.sign=function(e){return N("sign")},r.prototype.isNaN=function(e){return N("isNaN")},r.prototype.isInf=function(e){return N("isInf")},r.prototype.isFinite=function(e){return N("isFinite")},r.prototype.pow=function(e,t){return N("pow")},r.prototype.exp=function(e){return N("exp")},r.prototype.expm1=function(e){return N("expm1")},r.prototype.softmax=function(e,t){return N("softmax")},r.prototype.log=function(e){return N("log")},r.prototype.log1p=function(e){return N("log1p")},r.prototype.sqrt=function(e){return N("sqrt")},r.prototype.rsqrt=function(e){return N("rsqrt")},r.prototype.square=function(e){return N("square")},r.prototype.reciprocal=function(e){return N("reciprocal")},r.prototype.relu=function(e){return N("relu")},r.prototype.relu6=function(e){return N("relu6")},r.prototype.prelu=function(e,t){return N("prelu")},r.prototype.elu=function(e){return N("elu")},r.prototype.eluDer=function(e,t){return N("eluDer")},r.prototype.selu=function(e){return N("selu")},r.prototype.int=function(e){return N("int")},r.prototype.clip=function(e,t,n){return N("clip")},r.prototype.abs=function(e){return N("abs")},r.prototype.complexAbs=function(e){return N("complexAbs")},r.prototype.sigmoid=function(e){return N("sigmoid")},r.prototype.softplus=function(e){return N("softplus")},r.prototype.sin=function(e){return N("sin")},r.prototype.cos=function(e){return N("cos")},r.prototype.tan=function(e){return N("tan")},r.prototype.asin=function(e){return N("asin")},r.prototype.acos=function(e){return N("acos")},r.prototype.atan=function(e){return N("atan")},r.prototype.atan2=function(e,t){return N("atan2")},r.prototype.sinh=function(e){return N("sinh")},r.prototype.cosh=function(e){return N("cosh")},r.prototype.tanh=function(e){return N("tanh")},r.prototype.asinh=function(e){return N("asinh")},r.prototype.acosh=function(e){return N("acosh")},r.prototype.atanh=function(e){return N("atanh")},r.prototype.erf=function(e){return N("erf")},r.prototype.step=function(e,t){return N("step")},r.prototype.fusedConv2d=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,N("fusedConv2d")},r.prototype.conv2d=function(e,t,n){return N("conv2d")},r.prototype.conv2dDerInput=function(e,t,n){return N("conv2dDerInput")},r.prototype.conv2dDerFilter=function(e,t,n){return N("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,N("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(e,t,n){return N("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(e,t,n){return N("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(e,t,n){return N("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(e,t,n){return N("conv3d")},r.prototype.conv3dDerInput=function(e,t,n){return N("conv3dDerInput")},r.prototype.conv3dDerFilter=function(e,t,n){return N("conv3dDerFilter")},r.prototype.maxPool=function(e,t){return N("maxPool")},r.prototype.maxPoolBackprop=function(e,t,n,o){return N("maxPoolBackprop")},r.prototype.avgPool=function(e,t){return N("avgPool")},r.prototype.avgPoolBackprop=function(e,t,n){return N("avgPoolBackprop")},r.prototype.avgPool3d=function(e,t){return N("avgPool3d")},r.prototype.avgPool3dBackprop=function(e,t,n){return N("avgPool3dBackprop")},r.prototype.maxPool3d=function(e,t){return N("maxPool3d")},r.prototype.maxPool3dBackprop=function(e,t,n,o){return N("maxPool3dBackprop")},r.prototype.reshape=function(e,t){return N("reshape")},r.prototype.cast=function(e,t){return N("cast")},r.prototype.tile=function(e,t){return N("tile")},r.prototype.pad=function(e,t,n){return N("pad")},r.prototype.transpose=function(e,t){return N("transpose")},r.prototype.gather=function(e,t,n){return N("gather")},r.prototype.gatherND=function(e,t){return N("gatherND")},r.prototype.scatterND=function(e,t,n){return N("scatterND")},r.prototype.batchToSpaceND=function(e,t,n){return N("batchToSpaceND")},r.prototype.spaceToBatchND=function(e,t,n){return N("spaceToBatchND")},r.prototype.resizeBilinear=function(e,t,n,o){return N("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(e,t,n){return N("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(e,t,n,o){return N("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(e,t,n){return N("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(e,t,n,o,a,i){return N("batchNormalization")},r.prototype.localResponseNormalization4D=function(e,t,n,o,a){return N("localResponseNormalization4D")},r.prototype.LRNGrad=function(e,t,n,o,a,i,s){return N("LRNGrad")},r.prototype.multinomial=function(e,t,n,o){return N("multinomial")},r.prototype.oneHot=function(e,t,n,o){return N("oneHot")},r.prototype.cumsum=function(e,t,n,o){return N("cumsum")},r.prototype.nonMaxSuppression=function(e,t,n,o,a){return N("nonMaxSuppression")},r.prototype.fft=function(e){return N("fft")},r.prototype.ifft=function(e){return N("ifft")},r.prototype.complex=function(e,t){return N("complex")},r.prototype.real=function(e){return N("real")},r.prototype.imag=function(e){return N("imag")},r.prototype.cropAndResize=function(e,t,n,o,a,i){return N("cropAndResize")},r.prototype.depthToSpace=function(e,t,n){return N("depthToSpace")},r.prototype.split=function(e,t,n){return N("split")},r.prototype.sparseToDense=function(e,t,n,o){return N("sparseToDense")},r.prototype.diag=function(e){return N("diag")},r.prototype.fill=function(e,t,n){return N("fill")},r.prototype.onesLike=function(e){return N("onesLike")},r.prototype.zerosLike=function(e){return N("zerosLike")},r.prototype.linspace=function(e,t,n){return N("linspace")},r.prototype.dispose=function(){return N("dispose")},r}();function N(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function vn(r,e){for(var t=r.length,n=[],o=0;o<t;o++){var a=t-1-o,i=r[a]||1;(e[e.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function zt(r,e){for(var t=[],n=0;n<e.length;n++){var o=r[r.length-n-1],a=e.length-n-1,i=e[a];(o==null||o===1&&i>1)&&t.unshift(a)}return t}function ft(r,e){for(var t=[],n=Math.max(r.length,e.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=e[e.length-o-1];if(i==null&&(i=1),a===1)t.unshift(i);else if(i===1)t.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+e+".");t.unshift(a)}}return t}function ao(r,e,t,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=ia(e),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return Xn(r,s,t,n,o,a,!1,i)}function oa(r,e,t,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=Wi(e),l=c[0],h=c[1],f=c[2];if(i==="NDHWC")u="channelsLast",s=[l,h,f,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,f,r[1],r[1]]}return aa(r,s,t,n,o,!1,u,a)}function Xn(r,e,t,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],f=r[1],l=r[2],h=r[3]}var d,p=e[0],g=e[1],v=e[3],m=ia(t),w=m[0],b=m[1],y=ia(n),x=y[0],_=y[1],I=dr(p,x),S=dr(g,_),k=function(M,B,z,U,W,V,G,j){var tt,et,ut;if(typeof M=="number"){tt={top:M,bottom:M,left:M,right:M,type:M===0?"VALID":"NUMBER"};var ct=function(pt,Ct,bt,Pt,St){Pt==null&&(Pt=wl(pt,Ct,bt));var It=pt[0],Ae=pt[1],De=Kr((It-Ct+2*Pt)/bt+1,St);E(Ft(De),function(){return"The output # of rows ("+De+") must be an integer. Change the stride and/or zero pad parameters"});var he=Kr((Ae-Ct+2*Pt)/bt+1,St);return E(Ft(he),function(){return"The output # of columns ("+he+") must be an integer. Change the stride and/or zero pad parameters"}),[De,he]}([B,z],V,U,M,j);et=ct[0],ut=ct[1]}else if(M==="same"){et=Math.ceil(B/U),ut=Math.ceil(z/W);var ht=Math.max(0,(et-1)*U+V-B),vt=Math.max(0,(ut-1)*W+G-z),dt=Math.floor(ht/2),gt=ht-dt,Ot=Math.floor(vt/2);tt={top:dt,bottom:gt,left:Ot,right:vt-Ot,type:"SAME"}}else{if(M!=="valid")throw Error("Unknown padding parameter: "+M);tt={top:0,bottom:0,left:0,right:0,type:"VALID"},et=Math.ceil((B-V+1)/U),ut=Math.ceil((z-G+1)/W)}return{padInfo:tt,outHeight:et,outWidth:ut}}(o,l,h,w,b,I,S,a),R=k.padInfo,P=k.outHeight,D=k.outWidth,L=i?v*f:v;return s==="channelsFirst"?d=[c,L,P,D]:s==="channelsLast"&&(d=[c,P,D,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:P,outWidth:D,outChannels:L,padInfo:R,strideHeight:w,strideWidth:b,filterHeight:p,filterWidth:g,effectiveFilterHeight:I,effectiveFilterWidth:S,dilationHeight:x,dilationWidth:_,inShape:r,outShape:d,filterShape:e}}function aa(r,e,t,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],d=u[4];if(i==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3],d=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],d=r[1],l=r[2],h=r[3],f=r[4]}var p,g=e[0],v=e[1],m=e[2],w=e[4],b=Wi(t),y=b[0],x=b[1],_=b[2],I=Wi(n),S=I[0],k=I[1],R=I[2],P=dr(g,S),D=dr(v,k),L=dr(m,R),M=function(G,j,tt,et,ut,ct,ht,vt,dt,gt,Ot){var pt,Ct,bt,Pt;if(typeof G=="number"){pt={top:G,bottom:G,left:G,right:G,front:G,back:G,type:G===0?"VALID":"NUMBER"};var St=function(Zn,Xe,Wa,tr,Te,Ua){Te==null&&(Te=wl(Zn,Xe,tr));var Ef=Zn[0],kf=Zn[1],Rf=Zn[2],za=Kr((Ef-Xe+2*Te)/tr+1,Ua);E(Ft(za),function(){return"The output # of depths ("+za+") must be an integer. Change the stride and/or zero pad parameters"});var $a=Kr((kf-Xe+2*Te)/tr+1,Ua);E(Ft($a),function(){return"The output # of rows ("+$a+") must be an integer. Change the stride and/or zero pad parameters"});var Va=Kr((Rf-Xe+2*Te)/tr+1,Ua);return E(Ft(Va),function(){return"The output # of columns ("+Va+") must be an integer. Change the stride and/or zero pad parameters"}),[za,$a,Va,Wa]}([j,tt,et,1],vt,1,ut,G,Ot);Ct=St[0],bt=St[1],Pt=St[2]}else if(G==="same"){Ct=Math.ceil(j/ut),bt=Math.ceil(tt/ct),Pt=Math.ceil(et/ht);var It=(Ct-1)*ut+vt-j,Ae=(bt-1)*ct+dt-tt,De=(Pt-1)*ht+gt-et,he=Math.floor(It/2),Qn=It-he,qe=Math.floor(Ae/2),hn=Ae-qe,Ke=Math.floor(De/2);pt={top:qe,bottom:hn,left:Ke,right:De-Ke,front:he,back:Qn,type:"SAME"}}else{if(G!=="valid")throw Error("Unknown padding parameter: "+G);pt={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},Ct=Math.ceil((j-vt+1)/ut),bt=Math.ceil((tt-dt+1)/ct),Pt=Math.ceil((et-gt+1)/ht)}return{padInfo:pt,outDepth:Ct,outHeight:bt,outWidth:Pt}}(o,l,h,f,y,x,_,P,D,L,s),B=M.padInfo,z=M.outDepth,U=M.outHeight,W=M.outWidth,V=a?w*d:w;return i==="channelsFirst"?p=[c,V,z,U,W]:i==="channelsLast"&&(p=[c,z,U,W,V]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:f,inChannels:d,outDepth:z,outHeight:U,outWidth:W,outChannels:V,padInfo:B,strideDepth:y,strideHeight:x,strideWidth:_,filterDepth:g,filterHeight:v,filterWidth:m,effectiveFilterDepth:P,effectiveFilterHeight:D,effectiveFilterWidth:L,dilationDepth:S,dilationHeight:k,dilationWidth:R,inShape:r,outShape:p,filterShape:e}}function wl(r,e,t,n){n===void 0&&(n=1);var o=dr(e,n);return Math.floor((r[0]*(t-1)-t+o)/2)}function ia(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Wi(r){return typeof r=="number"?[r,r,r]:r}function dr(r,e){return e<=1?r:r+(r-1)*(e-1)}function Kr(r,e){if(!e)return r;switch(e){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+e)}}function Mr(r){var e=ia(r),t=e[0],n=e[1],o=e[2];return t===1&&n===1&&o===1}function le(r,e){return Mr(r)||Mr(e)}function gs(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function _l(r,e,t){if(e==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Rt(r.shape),o=r.toFloat(),a=t.complex(o,n);return n.dispose(),o.dispose(),a}if(!Pd(r.dtype,e))return T.makeTensorFromDataId(r.dataId,r.shape,e);if(r.dtype==="complex64"){var i=t.real(r);return a=i.cast(e),i.dispose(),a}if(e==="int32")return t.int(r);if(e==="bool"){var s=H(0,r.dtype);return a=t.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+e)}function Ui(r,e){return T.makeTensorFromDataId(r.dataId,e,r.dtype)}function Cl(r,e,t){var n=(e-r)/(t-1),o=fo(t,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Bt(o,"float32")}function zi(r,e){if(r.length!==e.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+e.length+".");for(var t=new Float32Array(2*r.length),n=0;n<t.length;n+=2)t[n]=r[n/2],t[n+1]=e[n/2];return t}function $u(r,e){return{real:r[2*e],imag:r[2*e+1]}}function iv(r,e,t,n){r[2*n]=e,r[2*n+1]=t}function sv(r,e,t){var n=(t?2:-2)*Math.PI*(r/e);return{real:Math.cos(n),imag:Math.sin(n)}}function uv(r,e,t){var n=function(a,i,s){return function(u,c,l){for(var h=0,f=u.length,d=0,p=!1;h<f;){var g=l(c,u[d=h+(f-h>>>1)]);g>0?h=d+1:(f=d,p=!g)}return p?h:-h-1}(a,i,s||cv)}(r,e,t),o=n<0?-(n+1):n;r.splice(o,0,e)}function cv(r,e){return r>e?1:r<e?-1:0}function ms(r,e,t,n,o){return El(r,e,t,n,o,0).selectedIndices}function ys(r,e,t,n,o,a){var i=El(r,e,t,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function El(r,e,t,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(e).map(function(y,x){return{score:y,boxIndex:x,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(Vu),c=a>0?-.5/a:0,l=[],h=[];l.length<t&&u.length>0;){var f=u.pop(),d=f.score,p=f.boxIndex,g=f.suppressBeginIndex;if(d<o)break;for(var v=!1,m=l.length-1;m>=g;--m){var w=lv(r,p,l[m]);if(w>=n){v=!0;break}if(f.score=f.score*hv(n,c,w),f.score<=o)break}f.suppressBeginIndex=l.length,v||(f.score===d?(l.push(p),h.push(f.score)):f.score>o&&uv(u,f,Vu))}var b=l.length;return s&&(l.fill(0,b),h.fill(0,b)),{selectedIndices:Bt(l,"int32"),selectedScores:Bt(h,"float32"),numValidOutputs:H(b,"int32")}}function lv(r,e,t){var n=r.subarray(4*e,4*e+4),o=r.subarray(4*t,4*t+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(h-c)*(f-l);if(d<=0||p<=0)return 0;var g=Math.max(a,c),v=Math.max(i,l),m=Math.min(s,h),w=Math.min(u,f),b=Math.max(m-g,0)*Math.max(w-v,0);return b/(d+p-b)}function hv(r,e,t){var n=Math.exp(e*t*t);return t<=r?n:0}function Vu(r,e){return r.score-e.score||r.score===e.score&&e.boxIndex-r.boxIndex}function kl(r,e,t){var n=new Array(r.rank).fill(0),o=r.shape.slice();return e.map(function(a){o[t]=a;var i=r.slice(n,o);return n[t]+=a,i})}function Rl(r,e){for(var t=new Array(r.rank),n=0;n<t.length;n++)t[n]=r.shape[n]*e[n];var o=at(t,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function Sl(r,e,t,n,o){for(var a=e[e.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=no(t,s*n),l=no("int32",s*n),h=0;h<s;h++){for(var f=h*u,d=r.subarray(f,f+u),p=[],g=0;g<d.length;g++)p.push({value:d[g],index:g});p.sort(function(y,x){return x.value-y.value});var v=h*n,m=c.subarray(v,v+n),w=l.subarray(v,v+n);for(g=0;g<n;g++)m[g]=p[g].value,w[g]=p[g].index}var b=e.slice();return b[b.length-1]=n,[Jt(c,b,t),Jt(l,b,"int32")]}function bs(r,e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(n);var o=at(r,"int32"),a=at([t.length,r.length],"int32");for(n=0;n<t.length;n++){var i=o.indexToLoc(t[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var fv=function(r,e){this.outputShape=[],this.outputShape=r,this.variableNames=e.map(function(o,a){return"T"+a});var t=[];this.variableNames.forEach(function(o){t.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+t.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},dv=function(r,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=e.map(function(o,a){return"T"+a});var t=[];this.variableNames.forEach(function(o){t.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+t.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},pv=function(r,e,t){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);t||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=e==="max"?">":"<",u=t?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
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
    `};function Il(r,e){return["x","y","z","w","u","v"].slice(0,e).map(function(t){return r+"."+t})}function ie(r,e){return e===1?[r]:Il(r,e)}function te(){var r,e,t,n,o,a,i,s,u,c;return F().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",e="in",t="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
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
    `):(r="",e="attribute",t="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
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
    `),{version:r,attribute:e,varyingVs:t,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Ln(r,e,t){t===void 0&&(t="index");var n=We(e);return n.map(function(o,a){return"int "+r[a]+" = "+t+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+t+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function xs(r){var e=We(r).map(function(t){return t.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+e[0]+" + coords.y * "+e[1]+` + coords.z;
  }
`}var Al=`
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
`;function vv(r,e,t,n){var o=[];r.forEach(function(d){var p=Y(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(d){return function(p,g,v){v===void 0&&(v=!1);var m="";m+=v?Dl(p):ir(p);var w=p.shapeInfo.logicalShape,b=g.logicalShape;return w.length<=b.length&&(m+=v?function(y,x){var _,I=y.name,S=I.charAt(0).toUpperCase()+I.slice(1),k="get"+S+"AtOutCoords",R=y.shapeInfo.logicalShape.length,P=x.logicalShape.length,D=vn(y.shapeInfo.logicalShape,x.logicalShape),L=kt(P),M=P-R,B=["x","y","z","w","u","v"];_=R===0?"":P<2&&D.length>=1?"coords = 0;":D.map(function(tt){return"coords."+B[tt+M]+" = 0;"}).join(`
`);var z="";z=P<2&&R>0?"coords":y.shapeInfo.logicalShape.map(function(tt,et){return"coords."+B[et+M]}).join(", ");var U="return outputValue;",W=Y(y.shapeInfo.logicalShape)===1,V=Y(x.logicalShape)===1;if(R!==1||W||V){if(W&&!V)U=P===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(D.length){var G=R-2,j=R-1;D.indexOf(G)>-1&&D.indexOf(j)>-1?U="return vec4(outputValue.x);":D.indexOf(G)>-1?U="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":D.indexOf(j)>-1&&(U="return vec4(outputValue.xx, outputValue.zz);")}}else U=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+k+`() {
      `+L+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+S+"("+z+`);
      `+U+`
    }
  `}(p,g):function(y,x){var _=y.name,I=_.charAt(0).toUpperCase()+_.slice(1),S="get"+I+"AtOutCoords",k=x.texShape,R=y.shapeInfo.texShape,P=y.shapeInfo.logicalShape.length,D=x.logicalShape.length;if(!y.shapeInfo.isUniform&&P===D&&y.shapeInfo.flatOffset==null&&jt(R,k))return`
      float `+S+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var L,M=kt(D),B=vn(y.shapeInfo.logicalShape,x.logicalShape),z=D-P,U=["x","y","z","w","u","v"];L=P===0?"":D<2&&B.length>=1?"coords = 0;":B.map(function(V){return"coords."+U[V+z]+" = 0;"}).join(`
`);var W="";return W=D<2&&P>0?"coords":y.shapeInfo.logicalShape.map(function(V,G){return"coords."+U[G+z]}).join(", "),`
    float `+S+`() {
      `+M+` coords = getOutputCoords();
      `+L+`
      return get`+I+"("+W+`);
    }
  `}(p,g)),m}(d,e,n)}).join(`
`),c=e.texShape,l=te(),h=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),f=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
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
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

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

    `+gv+`
    `+mv+`
    `+yv+`
  `}(l);return e.isPacked?(a=function(d,p){switch(d.length){case 0:return`
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
  `}(0,p);case 2:return function(y,x){var _=[Math.ceil(x[0]/2),Math.ceil(x[1]/2)];if(jt(y,x))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var I=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return g=d,v=p,m=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],w=Math.ceil(g[2]/2),b=w*Math.ceil(g[1]/2),`
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
  `;default:return function(y,x){for(var _=[Math.ceil(x[0]/2),Math.ceil(x[1]/2)],I=Math.ceil(y[y.length-1]/2),S=I*Math.ceil(y[y.length-2]/2),k=S,R="",P="b, r, c",D=2;D<y.length-1;D++)k*=y[y.length-D-1],R=`
      int b`+D+" = index / "+k+`;
      index -= b`+D+" * "+k+`;
    `+R,P="b"+D+", "+P;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+R+`

      int b = index / `+S+`;
      index -= b * `+S+`;

      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec`+y.length+"("+P+`);
    }
  `}(d,p)}var g,v,m,w,b}(e.logicalShape,c),i=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(a=function(d,p){switch(d.length){case 0:return`
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
  `}(0,p);case 2:return function(m,w){return jt(m,w)?`
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
  `}(d,p);case 3:return g=p,v=Ln(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(m,w){var b=Ln(["r","c","d","d2"],m);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+w[0]+", "+w[1]+`));
      int index = resTexRC.x * `+w[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(m,w){var b=Ln(["r","c","d","d2","d3"],m);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+w[0]+`,
                             `+w[1]+`));

      int index = resTexRC.x * `+w[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(m,w){var b=Ln(["r","c","d","d2","d3","d4"],m);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+w[0]+", "+w[1]+`));
      int index = resTexRC.x * `+w[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var g,v}(e.logicalShape,c),i=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(f+=bv),[f,h,i,s,a,u,t].join(`
`)}function ir(r){var e=r.shapeInfo.logicalShape;switch(e.length){case 0:return function(t){var n=t.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=t.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=t.shapeInfo.texShape,c=u[0],l=u[1],h=Nn(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(t){var n=t.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+er(t)+`
      }
    `;var a=t.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=Nn(n);return s===1?`
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
  `}(r);case 2:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=t.shapeInfo.texShape;if(i!=null&&jt(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=Mn(n),l=c.newShape,h=c.keptDims,f=l;if(f.length<n.length){var d=sr(t,f);return`
      `+ir(d)+`
      float `+a+`(int row, int col) {
        return `+a+"("+ur(["row","col"],h)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+er(t)+`
      }
    `;var p=i[0],g=i[1],v=Nn(o);return g===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+g+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+p+", "+g+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=Mn(n),c=u.newShape,l=u.keptDims,h=c;if(h.length<n.length){var f=sr(t,h);return`
        `+ir(f)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+ur(["row","col","depth"],l)+`);
        }
      `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+er(t)+`
      }
    `;var d=t.shapeInfo.texShape,p=d[0],g=d[1],v=t.shapeInfo.flatOffset;if(g===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+g+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(g===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+g+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var m=Nn(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+m+`;
        vec2 uv = uvFromFlat(`+p+", "+g+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=Mn(n),l=c.newShape,h=c.keptDims;if(l.length<n.length){var f=sr(t,l);return`
      `+ir(f)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+ur(["row","col","depth","depth2"],h)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+er(t)+`
      }
    `;var d=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,g=p[0],v=p[1];if(v===u&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var m=Nn(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+g+", "+v+", index + "+m+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=Mn(n),h=l.newShape,f=l.keptDims;if(h.length<n.length){var d=sr(t,h);return`
      `+ir(d)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+ur(["row","col","depth","depth2","depth3"],f)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+er(t)+`
      }
    `;var p=t.shapeInfo.flatOffset,g=t.shapeInfo.texShape,v=g[0],m=g[1];if(m===c&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===i&&p==null)return`
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
    `;var w=Nn(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+w+`;
      vec2 uv = uvFromFlat(`+v+", "+m+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=Mn(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=sr(t,s);return`
      `+ir(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+ur(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],h=n[4]*l,f=n[3]*h,d=n[2]*f,p=n[1]*d;if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+f+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+er(t)+`
      }
    `;var g=t.shapeInfo.flatOffset,v=t.shapeInfo.texShape,m=v[0],w=v[1];if(w===p&&g==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+f+", "+h+", "+l+`)) +
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
    `;var b=Nn(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+f+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+m+", "+w+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(e.length+"-D input sampling is not yet supported")}}function Dl(r){var e,t,n;switch(r.shapeInfo.logicalShape.length){case 0:return e=r.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),n=te(),`
    vec4 `+t+`() {
      return `+n.texture2D+"("+e+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=te();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=te();if(u!=null&&jt(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+i+`, uv);
      }
    `;var f=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+f[0]+", "+f[1]+`, row, col);
      return `+h.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),h=sr(o,l);return`
        `+Dl(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+ur(["b","row","col"],[1,2])+`);
        }
      `}var f=c[0],d=c[1],p=Math.ceil(a[2]/2),g=p*Math.ceil(a[1]/2),v=te();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+f+", "+d+", "+g+", "+p+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],f=l[1],d=Math.ceil(a[i-1]/2),p=d*Math.ceil(a[i-2]/2),g="int b, int row, int col",v="b * "+p+" + (row / 2) * "+d+" + (col / 2)",m=2;m<i-1;m++)g="int b"+m+", "+g,p*=a[i-m-1],v="b"+m+" * "+p+" + "+v;var w=te();return`
    vec4 `+u+"("+g+`) {
      int index = `+v+`;
      int texR = index / `+f+`;
      int texC = index - texR * `+f+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+f+", "+h+`);
      return `+w.texture2D+"("+s+`, uv);
    }
  `}(r)}}var gv=`
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
`,mv=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,yv=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,bv=`
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
`;function Nn(r){return"offset"+r}function er(r){var e=r.name,t=Y(r.shapeInfo.logicalShape);return t<2?"return "+e+";":`
    for (int i = 0; i < `+t+`; i++) {
      if (i == index) {
        return `+e+`[i];
      }
    }
  `}function kt(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function sr(r,e){var t=JSON.parse(JSON.stringify(r));return t.shapeInfo.logicalShape=e,t}function ur(r,e){return e.map(function(t){return r[t]}).join(", ")}var xv=function(r,e,t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(t.charAt(0).toUpperCase()+t.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/e);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=kt(c),h=ie("coords",c);if(a===1){var f=kt(s=c+1);i=`
        `+f+" sourceLocR = "+f+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+f+" sourceLocG = "+f+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+f+" sourceLocA = "+f+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+f+" sourceLocB = "+f+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],g=d.map(function(S){return"int "+S}),v=ie("sourceLocR",s-1).concat("inIdx.r"),m=ie("sourceLocG",s-1).concat("inIdx.g"),w=ie("sourceLocB",s-1).concat("inIdx.b"),b=ie("sourceLocA",s-1).concat("inIdx.a"),y=t==="max"?"greaterThan":"lessThan",x=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+w.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",_=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+m.join()+`) : 0.,
            hasNextRow ? getAChannel(`+w.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",I=n?"":`
      float getBestIndicesAChannel(`+g.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+g.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+I+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+e+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+e+`; i++) {
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
    `},wv=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var e=r.filterHeight,t=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(e*t);this.userCode=`
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
    `},_v=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var e=r.filterDepth,t=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=h-1-r.padInfo.top,g=f-1-r.padInfo.left,v=1/(e*t*n);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+g+`);
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

            for (int wC = 0; wC < `+f+`;
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
    `},Cv=function(r,e,t,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],ft(r,e),ft(r,t);var i="0.0";n!=null&&(ft(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(ft(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Ev=function(r,e,t,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],ft(r,e),ft(r,t);var i="vec4(0.0)";n!=null&&(ft(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(ft(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},kv="return areal * breal - aimag * bimag;",Rv="return areal * bimag + aimag * breal;",Gu=function(r,e,t){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=ft(e,t),this.userCode=`
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
    `},ui="return a + b;",ci="return a - b;",Hu="return a * b;",Tl="return (a < 0.) ? b * a : a;",Nt=function(r,e,t){this.variableNames=["A","B"],this.outputShape=ft(e,t),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},Pl=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Je=function(r,e,t,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=ft(e,t);var o=this.outputShape.length,a="";if(n)if(o===0||Y(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+kt(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=ie("coords",o);a+=`
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
    `},Sv=function(){function r(e){this.variableNames=["A"],this.outputShape=e,this.userCode=`
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
    `}return r.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,e),o.gl.uniform1f(n.maxLoc,t)}},r}(),Iv=function(){function r(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
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
    `}return r.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,e),o.gl.uniform1f(n.maxLoc,t)}},r}(),Av=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
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
    `},Dv=function(r){this.outputShape=[],this.outputShape=Fr(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var e=new Array(r.length-1);e[0]=r[0][1];for(var t=1;t<e.length;t++)e[t]=e[t-1]+r[t][1];var n=["if (yC < "+e[0]+") setOutput(getT0(yR, yC));"];for(t=1;t<e.length;t++){var o=e[t-1];n.push("else if (yC < "+e[t]+") setOutput(getT"+t+"(yR, yC-"+o+"));")}var a=e.length,i=e[e.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},Tv=function(r,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Fr(r,e);var t=this.outputShape,n=t.length,o=kt(n),a=ie("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(v,m){return"T"+m});var s=new Array(r.length-1);s[0]=r[0][e];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][e];var c=i[e],l=i.slice(-2),h=i.join(),f="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];f+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Do(i,c,d)+`),
            vec2(`+Do(l,c,d)+`));
        }`}var p=s.length,g=s[s.length-1];f+=`
        return getChannel(
          getT`+p+"("+Do(i,c,g)+`),
          vec2(`+Do(l,c,g)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+f+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+t[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+t[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+t[n-2]+` &&
            `+a[n-1]+" < "+t[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function Do(r,e,t){var n=r.indexOf(e);return r.map(function(o,a){return a===n?o+" - "+t:o}).join()}var Pv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var e=r.strideHeight,t=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
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
            int xR = wR + yR * `+e+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+t+" - "+o+`;

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
    `},Nv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var e=r.filterHeight,t=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=e-1-r.padInfo.top,s=t-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
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
        for (int wR = 0; wR < `+e+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+e+` - 1 - wR;

          for (int wC = 0; wC < `+t+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+t+` - 1 - wC;

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
    `},Ov=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var e=r.strideDepth,t=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
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
            int xF = wF + yF * `+e+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+t+" - "+a+`;

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
    `},Fv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var e=r.filterDepth,t=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=e-1-r.padInfo.front,u=t-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
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
        for (int wF = 0; wF < `+e+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+e+` - 1 - wF;

          for (int wR = 0; wR < `+t+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+t+` - 1 - wR;

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
    `},Mv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var e=r.strideHeight,t=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
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
            int xR = wR + yR * `+e+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+t+" - "+o+`;

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
    `},Bv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var e=r.filterHeight,t=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=e-1-r.padInfo.top,i=t-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+e+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+e+` - 1 - wR;

          for (int wC = 0; wC < `+t+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+t+` - 1 - wC;

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
    `},ju=function(r,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,f=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",g=p?1:2,v=p?2:3,m=p?3:1,w="",b="";t&&(w=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`
          float activation(float x) {
            `+t+`
          }
        `,b="result = activation(result);");var y=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
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

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
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

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
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
    `},Lv=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var e=r.padInfo.front,t=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,f=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+e+", "+t+", "+n+`);

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

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
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

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},qu=function(r,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,g="",v="";t&&(g=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`
          float activation(float x) {
            `+t+`
          }
        `,v="result = activation(result);");var m=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+g+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
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
    `},Ku=function(r,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,d=r.filterWidth,p=d,g="int xR; int xC; int xCOffset;",v=0;v<f;v++)for(var m=0;m<d;m++)g+=`
          vec4 xTexelR`+v+"C"+2*m+` = vec4(0.);
          vec4 wR`+v+"C"+m+` = vec4(0.);
          vec4 xR`+v+"C"+m+" = vec4(0.);";for(v=0;v<f;v++)for(var w=0;w<p;w++){if(g+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(m=2*w)*h+`;
        `,c===1){if(m<d&&(g+=s%2==1?`
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
              `,m+1<d)){var b=s%2==0?Yc(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(g+=`
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
                `}}else m<d&&(g+=`
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
              `,m+1<d&&(g+=`
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
              `,m+1<d&&(g+=`
                  xR`+v+"C"+(m+1)+` = vec4(
                    xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.zw);
                `)),g+="}");m<d&&(g+=`
            vec4 wTexelR`+v+"C"+m+" = getW("+v+", "+m+`, d1, q);
            wR`+v+"C"+m+" = vec4(wTexelR"+v+"C"+m+".xz, wTexelR"+v+"C"+m+`.xz);
          `,m+1<d&&(g+=`
              vec4 wTexelR`+v+"C"+(m+1)+" = getW("+v+", "+(m+1)+`, d1, q);
              wR`+v+"C"+(m+1)+` =
                vec4(wTexelR`+v+"C"+(m+1)+".xz, wTexelR"+v+"C"+(m+1)+".xz);"))}for(v=0;v<f;v++)for(m=0;m<d;m++)g+="dotProd += xR"+v+"C"+m+" * wR"+v+"C"+m+";";var y="",x="";t&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`vec4 activation(vec4 x) {
          `+t+`
        }`,x="result = activation(result);");var _=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
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
    `},Wv=function(r,e,t,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=e[0],l=t[0],h=t[1];this.outputShape=[c,l,h,u];var f=n==="bilinear"?1:0,d=[i-1+".0",s-1+".0"],p=d[0],g=d[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],m=v[0],w=v[1],b=v[2],y=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+g+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+g],x=y[0],_=y[1],I=y[2];this.userCode=`
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
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+I+`;
        if( in_x < 0.0 || in_x > `+g+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
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
    `},Uv=function(r,e,t){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=t?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(t?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+kt(n)+` coords = getOutputCoords();
        int end = `+Xu(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+e+`) {
            continue;
          }
          `+Xu(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function Xu(r,e){if(r===1)return""+e;if(r===2)return e+".y";if(r===3)return e+".z";if(r===4)return e+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var zv=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=oo.DENSE;var e=qr(r),t=te();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Ln(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+e[0]+", "+e[1]+`));
        int index = 4 * (resTexRC.x * `+e[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+t.output+` = result;
      }
    `},$v=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=oo.DENSE;var e=qr(r),t=te();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Ln(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+e[0]+", "+e[1]+`));
        int index = 4 * (resTexRC.x * `+e[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+t.output+` = result;
      }
    `},Vv=function(){function r(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+t+`;
      int offset_h = imod(h, `+t+`);
      int in_w = w / `+t+`;
      int offset_w = imod(w, `+t+`);
      int offset_d = (offset_h * `+t+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Gv=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Hv=function(r){this.variableNames=["A"],this.outTexUsage=pe.DOWNLOAD;var e=te();this.outputShape=r,this.userCode=`
      `+Al+`

      void main() {
        float x = getAAtOutCoords();
        `+e.output+` = encode_float(x);
      }
    `},jv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=pe.DOWNLOAD;var e=te();this.outputShape=r,this.userCode=`
      `+Al+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+e.output+` = encode_float(x);
      }
    `},qv=function(r,e,t){t===void 0&&(t=!1),this.variableNames=["A"];var n=te(),o=e[0],a=e[1];this.outputShape=r;var i="result";t&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+xs(r)+`

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
    `},Kv=function(r,e,t){t===void 0&&(t=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=te(),o=e[0],a=e[1];this.outputShape=r;var i="",s="result";t&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
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
      `+xs(r)+`

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
    `},Xv="return real * expR - imag * expI;",Yv="return real * expI + imag * expR;",Yu=function(r,e,t){this.variableNames=["real","imag"];var n=e[1];this.outputShape=e;var o=t?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=t?n+".0":"1.0";this.userCode=`
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
    `},Jv=function(){function r(e,t){this.outputShape=[],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,o){t.valueLoc==null&&(t.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(t.valueLoc,e)}},r}(),Qv=function(r,e,t){this.variableNames=["A","indices"];var n=r.slice();n[t]=e,this.outputShape=n,this.rank=n.length;var o=kt(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<i.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,t);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Zv=function(r,e,t){this.sliceDim=r,this.strides=e,this.variableNames=["x","indices"],this.outputShape=t;var n=kt(e.length),o=kt(t.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
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
      `};function tg(r,e){var t=te();return Xd(r,e,t.version+`
    precision highp float;
    `+t.attribute+` vec3 clipSpacePos;
    `+t.attribute+` vec2 uv;
    `+t.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function eg(r,e){return tp(r,e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function ng(r,e){return ep(r,e,new Uint16Array([0,1,2,2,1,3]))}function vo(r,e,t,n,o,a,i){rp(t,n);var s=np(r,e),u=r.TEXTURE_2D;return J(r,e,function(){return r.bindTexture(u,s)}),J(r,e,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),J(r,e,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),J(r,e,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),J(r,e,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),J(r,e,function(){return r.texImage2D(u,0,o,t,n,0,a,i,null)}),J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function rg(r,e,t,n,o){var a=ba(t,n);return vo(r,e,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function og(r,e,t,n,o){var a=ba(t,n);return vo(r,e,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function ag(r,e,t,n,o){var a=ba(t,n);return vo(r,e,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function ig(r,e,t,n,o){var a=po(t,n);return vo(r,e,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function sg(r,e,t,n,o){var a=po(t,n);return vo(r,e,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function ug(r,e,t,n){return J(r,e,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Bu(r,e,t,"clipSpacePos",n,3,20,0)&&Bu(r,e,t,"uv",n,2,20,12)}function cg(r,e,t,n,o,a,i){var s,u,c;J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,t)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),J(r,e,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function lg(r,e,t,n){J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,t)}),n.data instanceof Uint8Array?J(r,e,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):J(r,e,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function hg(r,e,t,n,o){var a=r.createBuffer();J(r,e,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*t*n;return J(r,e,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),J(r,e,function(){return r.readPixels(0,0,n,t,r.RGBA,r.FLOAT,0)}),J(r,e,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function fg(r,e,t){var n=r,o=new Float32Array(t);return n.bindBuffer(n.PIXEL_PACK_BUFFER,e),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function dg(r,e,t,n,o){var a=ba(t,n),i=a[0],s=a[1],u=new Uint8Array(t*n*4);return J(r,e,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function pg(r,e,t,n,o,a,i,s){var u=r,c=new Float32Array(function(l,h){var f=po(l,h);return f[0]*f[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,e),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function vg(r,e,t,n){var o=new Float32Array(t*n*4);return J(r,e,function(){return r.readPixels(0,0,n,t,r.RGBA,r.FLOAT,o)}),o}var gg=function(){function r(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var t=F().getNumber("WEBGL_VERSION");e!=null?(this.gl=e,Gd(t,e)):this.gl=Ge(t);var n="WEBGL_color_buffer_float";if(F().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Ro(this.gl,this.debug,"OES_texture_float"),xe(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Ro(this.gl,this.debug,"OES_texture_half_float");else if(F().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),xe(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Ro(this.gl,this.debug,"EXT_color_buffer_half_float");else if(F().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",xe(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!xe(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=eg(this.gl,this.debug),this.indexBuffer=ng(this.gl,this.debug),this.framebuffer=op(this.gl,this.debug),this.textureConfig=ls(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return F().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var e=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var t=this.gl;J(t,this.debug,function(){return t.finish()}),J(t,this.debug,function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)}),J(t,this.debug,function(){return t.deleteFramebuffer(e.framebuffer)}),J(t,this.debug,function(){return t.bindBuffer(t.ARRAY_BUFFER,null)}),J(t,this.debug,function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)}),J(t,this.debug,function(){return t.deleteBuffer(e.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(e,t){return this.throwIfDisposed(),rg(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(e,t){return this.throwIfDisposed(),og(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(e,t){return this.throwIfDisposed(),ag(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(e,t){this.throwIfDisposed(),lg(this.gl,this.debug,e,t)},r.prototype.uploadDenseMatrixToTexture=function(e,t,n,o){this.throwIfDisposed(),cg(this.gl,this.debug,e,t,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(e,t){return this.throwIfDisposed(),sg(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(e,t){return this.throwIfDisposed(),ig(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.deleteMatrixTexture=function(e){var t=this;this.throwIfDisposed(),this.outputTexture===e&&(Lu(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,function(){return t.gl.deleteTexture(e)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(e,t,n){var o=this;return this.downloadMatrixDriver(e,function(){return dg(o.gl,o.debug,t,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(e,t,n,o,a,i){return pg(this.gl,e,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(e,t){return fg(this.gl,e,t)},r.prototype.createBufferFromTexture=function(e,t,n){this.bindTextureToFrameBuffer(e);var o=hg(this.gl,this.debug,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var e=this.createFence(this.gl);return this.pollFence(e)},r.prototype.createFence=function(e){var t,n,o=this;if(F().getBool("WEBGL_FENCE_API_ENABLED")){var a=e,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},t=i}else F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(t,F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:t,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(e,t,n){var o=this;return this.downloadMatrixDriver(e,function(){return vg(o.gl,o.debug,t,n)})},r.prototype.createProgram=function(e){this.throwIfDisposed();var t=this.gl,n=Yd(t,this.debug,e),o=tg(t,this.debug),a=Qd(t,this.debug);return J(t,this.debug,function(){return t.attachShader(a,o)}),J(t,this.debug,function(){return t.attachShader(a,n)}),Zd(t,this.debug,a),this.debug&&oi(t,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=ug(t,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(e){var t=this;this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&J(this.gl,this.debug,function(){return t.gl.deleteProgram(e)})},r.prototype.setProgram=function(e){var t=this;this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&oi(this.gl,this.debug,this.program),J(this.gl,this.debug,function(){return t.gl.useProgram(e)})},r.prototype.getUniformLocation=function(e,t,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?ip(this.gl,this.debug,e,t):sp(this.gl,e,t)},r.prototype.getAttributeLocation=function(e,t){var n=this;return this.throwIfDisposed(),J(this.gl,this.debug,function(){return n.gl.getAttribLocation(e,t)})},r.prototype.getUniformLocationNoThrow=function(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)},r.prototype.setInputMatrixTexture=function(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),up(this.gl,this.debug,this.program,e,t,n)},r.prototype.setOutputMatrixTexture=function(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)},r.prototype.setOutputPackedMatrixTexture=function(e,t,n){this.throwIfDisposed();var o=po(t,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(e,a,i)},r.prototype.setOutputMatrixWriteRegion=function(e,t,n,o){this.setOutputMatrixWriteRegionDriver(n,e,o,t)},r.prototype.setOutputPackedMatrixWriteRegion=function(e,t,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&oi(this.gl,this.debug,this.program),So(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var e=this.gl;this.debug&&this.debugValidate(),J(e,this.debug,function(){return e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var e=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return e.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Ro(this.gl,this.debug,F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}else{var t=this.gl,n=this.getQueryTimerExtensionWebGL2();t.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(e){return K(this,void 0,void 0,function(){var t=this;return X(this,function(n){switch(n.label){case 0:return[4,Tu(function(){return t.disposed||t.isQueryAvailable(e,F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(e,F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(e,t){if(t===0)return null;if(t===2){var n=this.gl;return n.getQueryParameter(e,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(e,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(e,t){if(t===0)return!0;if(t===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(e){var t=this;return new Promise(function(n){t.addItemToPoll(function(){return e.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var e=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),t=0;t<=e;++t)(0,this.itemsToPoll[t].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(e+1)},r.prototype.addItemToPoll=function(e,t){var n=this;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||Tu(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(e){this.throwIfDisposed(),ai(this.gl,this.debug,e,this.framebuffer),this.debug&&So(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(ai(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&So(this.gl)):Lu(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(e,t){this.bindTextureToFrameBuffer(e);var n=t();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(e,t,n){this.throwIfDisposed();var o=this.gl;ai(o,this.debug,e,this.framebuffer),this.debug&&So(o),this.outputTexture=e,J(o,this.debug,function(){return o.viewport(0,0,t,n)}),J(o,this.debug,function(){return o.scissor(0,0,t,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(e,t,n,o){var a=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return a.gl.scissor(e,t,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function Ju(r,e){if(r.length!==e.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+e.length+" inputs");r.forEach(function(t,n){var o=t.logicalShape,a=e[n],i=a.shape;if(!jt(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!t.isUniform||!a.isUniform){var s=t.texShape,u=a.isUniform?null:a.texData.texShape;if(!jt(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var mg=function(r,e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=t.filterWidth,o=t.inChannels,a=t.strideWidth,i=t.strideHeight,s=t.padInfo,u=t.outWidth,c=t.dilationWidth,l=t.dilationHeight,h=t.dataFormat,f=s.left,d=s.top,p=o*n,g=te(),v=h==="channelsLast",m=v?0:1,w=v?1:2,b="",y=0;y<=1;y++)for(var x=0;x<=1;x++)b+=`
          blockIndex = rc.y + `+x+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+e[m]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+f+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+e[w]+` && d1 >= 0) {

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
    `},yg=function(r,e,t,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=e,s=r[3]-1;this.outputShape=r;var u="float("+t+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
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
    `},bg=function(r,e,t,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=e,this.bias=t,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+e+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+e+` + 1)));

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

          norm = float(`+n+") * norm + float("+t+`);

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
    `},xg=function(r,e,t,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=e,s=r[3]-1;this.outputShape=r;var u="float("+t+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
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
    `},wg=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var e=r.strideHeight,t=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
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
          float dyR = float(dyRCorner + wR) / `+e+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+t+`.0;

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
    `},_g=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var e=r.strideDepth,t=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,f=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+f+`);

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
          float dyD = float(dyDCorner + wD) / `+e+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+t+`.0;

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
              int maxPosValue = `+d+` -
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
    `},li=function(r,e,t,n,o,a,i){t===void 0&&(t=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;var s=t?r[1]:r[2],u=Math.ceil(s/2),c=t?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",h=t?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,p="result = activation(result);");var g=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+f[0]+`);
          result += (`+h[1]+" * "+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+g+`

        `+p+`

        setOutput(result);
      }
    `},Cg=function(){function r(e,t,n){this.variableNames=["probs"],this.outputShape=[e,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(t-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(t-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,o){t.seedLoc==null&&(t.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(t.seedLoc,e)}},r}(),Eg=function(r,e,t,n){this.variableNames=["indices"],this.outputShape=[r,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+t+`),
                      float(index == coords.y)));
      }
    `},kg=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var e=r.length;if(e===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var t=ie("rc",e),n=kt(e),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(e,r,t),a=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(e,r[r.length-1],r[r.length-2],t),i=function(s,u){var c=s.length,l=function(h,f){for(var d=[],p=0;p<=1;p++)for(var g=0;g<=1;g++){for(var v=(p===0?"r":"rp1")+", "+(g===0?"c":"cp1"),m=2;m<h;m++)v=f[f.length-1-m]+","+v;d.push(v)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,t);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},Rg=function(r,e,t){this.variableNames=["x"],this.outputShape=e.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=kt(n),a=e.map(function(u){return u[0]}).join(","),i=e.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+t+`));
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
            setOutput(float(`+t+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},Sg=function(r,e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map(function(v,m){return v[0]+r[m]+v[1]});for(var n=r.length,o=kt(n),a=e.map(function(v){return v[0]}).join(","),i=e.map(function(v,m){return v[0]+r[m]}).join(","),s=ie("rc",n),u=ie("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],f=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,g=n===1?2:4;p<g;p++)d+=`
        `+h[p]+`
        if (`+f+`) {
          result[`+p+"] = float("+t+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},hi=function(r,e,t){if(this.variableNames=["x"],e==="avg"&&t)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var f=e==="avg",d="0.0";if(f||(d="-1.0 / 1e-20"),t)this.userCode=`
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
      `;else{var p=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";e==="avg"&&(p="avgValue / count");var g=4*Math.floor(n/4),v=n%4,m=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+d+`;
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
        vec4 minMaxValue = vec4(`+d+`);
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
        setOutput(`+p+`);
      }
    `}},fi=function(r,e,t){if(this.variableNames=["x"],e==="avg"&&t)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,g=r.padInfo.left;this.outputShape=r.outShape;var v=e==="avg",m="0.0";if(v||(m="-1.0 / 1e-20"),t)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+g+`);

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

              for (int wC = 0; wC < `+f+`;
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
                      wD * `+h+" * "+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var w=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";e==="avg"&&(w="avgValue / count");var b=4*Math.floor(n/4),y=n%4,x=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+g+`);
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
    `}},Ig=function(r,e){this.variableNames=["x"];var t=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/t);this.outputShape=[n,a];var i="0.0",s="";e==="prod"?i="1.0":e==="min"?(i="1.0 / 1e-20",s="min"):e==="max"&&(i="-1.0 / 1e-20",s="max");var u=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";e==="sum"?u="sumValue":e==="prod"?u="prodValue":e==="all"?u="allValue":e==="any"&&(u="anyValue");var c=4*Math.floor(t/4),l=t%4,h=`
      if (`+(e==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(e==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f="vec4";e==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):e==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");var d="";o%t>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+t+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},Ag=function(r,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var t="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),t+=`
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
      `+Ln(["r","c","d"],e)+`
      return ivec3(r, c, d);
    }
  
      `+xs(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+t+`

        setOutput(result);
      }
    `},Dg=function(r,e,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var n=e.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[t&&s>1?o-1:o,t&&u>1?a-1:a],l=[t&&s>1?s-1:s,t&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,g=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

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
    `},Tg=function(r,e,t,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,e,t,s];var u=[n&&e>1?a-1:a,n&&t>1?i-1:i],c=[n&&e>1?e-1:e,n&&t>1?t-1:t];this.userCode=`
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
    `},Pg=function(r,e,t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,e,t,s];var u=[n&&e>1?a-1:a,n&&t>1?i-1:i],c=[n&&e>1?e-1:e,n&&t>1?t-1:t];this.userCode=`
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
        bool hasNextRow = coords.z < `+(t-1)+`;

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
    `},Ng=function(r,e,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var n=e.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[t&&s>1?o-1:o,t&&u>1?a-1:a],l=[t&&s>1?s-1:s,t&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,g=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

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
                `+t+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+t+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Og=function(r,e,t,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,e,t,s];var u=[n&&e>1?a-1:a,n&&t>1?i-1:i],c=[n&&e>1?e-1:e,n&&t>1?t-1:t],l=n?"0.5":"0.0";this.userCode=`
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
    `},Fg=function(r,e){this.variableNames=["x"];var t=r.length;if(t>4)throw new Error("WebGL backend: Reverse of rank-"+t+" tensor is not yet supported");if(this.outputShape=r,t!==1){var n=r.map(function(a,i){return function(s){return e.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=kt(t);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},Mg=function(r,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var t=r.length;if(t>4)throw new Error("WebGL backend: Reverse of rank-"+t+" tensor is not yet supported");this.outputShape=r;var n=ie("rc",t),o=n[t-1]+" + 1 < "+this.outputShape[t-1],a=n[t-2]+" + 1 < "+this.outputShape[t-2],i=kt(t);function s(u){var c=r.map(function(l,h){return function(f,d){return e.indexOf(f)!==-1&&r[f]!==1?r[f]+" - "+d[f]+" - 1":""+d[f]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=t===1?`
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
            result.g = `+function(u){return u[t-1]="("+u[t-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[t-2]="("+u[t-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[t-1]="("+u[t-1]+" + 1)",u[t-2]="("+u[t-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Qu=function(r,e,t,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=kt(o.length),u=kt(a.length),c="";t===1?c="i":t===2&&(c="i, j");var l="getIndices("+c+")",h="";n===1?h="i":n===2&&(h="i, coords[1]");var f="getUpdates("+h+")",d=e>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+e+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},Bg=function(r,e){this.variableNames=["x","segmentIds"];var t=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/t);this.outputShape=[n,i];var s=4*Math.floor(t/4),u=t%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%t>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%t>0&&(h=`
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
          `+a+")) * float("+t+`));
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
    `},Lg=function(r,e,t){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=e,t>4)throw Error("Where for rank "+t+" is not yet supported");if(t===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<e.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=kt(t);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Wg=function(){function r(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;var t,n=kt(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return di.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);t=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+e.map(function(i,s){return"sourceLoc."+di[s]+" = start["+s+"] + coords."+di[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+t+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+e.length+")");return function(n,o){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(o,"start"),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},r}(),di=["x","y","z","w","u","v"],Ug=function(){function r(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length;var t=kt(this.rank),n=ie("coords",this.rank),o=ie("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+e[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+e[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+e[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+t+"("+e.map(function(l,h){return"start["+h+"]"}).join()+");":e.map(function(l,h){return o[h]+" = "+n[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+t+` coords = getOutputCoords();
        `+t+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+e.length+")");return function(n,o){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(o,"start"),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},r}(),zg=function(r,e,t){this.variableNames=["x"],this.outputShape=t;var n=t.length,o=kt(t.length),a=kt(t.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=t.map(function(u,c){return s++,t.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+e+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},$g=function(){function r(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(e,t,n){var o,a=Zu(t,n),i=tc(e,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===de.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):a===de.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):a===de.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):a===de.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):a===de.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(e,t,n,o){if(this.freeTextures!=null){var a=tc(t,Zu(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(e),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(e);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+e+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var e=this;if(this.freeTextures!=null){for(var t in this.freeTextures)this.freeTextures[t].forEach(function(n){e.gpgpu.deleteMatrixTexture(n)});for(var t in this.usedTextures)this.usedTextures[t].forEach(function(o){e.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function Zu(r,e){if(r===pe.UPLOAD)return de.PACKED_2X2_FLOAT32;if(r===pe.RENDER||r==null)return function(t){return F().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?de.PACKED_2X2_FLOAT32:de.UNPACKED_FLOAT32:t?de.PACKED_2X2_FLOAT16:de.UNPACKED_FLOAT16}(e);if(r===pe.DOWNLOAD||r===pe.PIXELS)return de.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function tc(r,e,t){return r[0]+"_"+r[1]+"_"+e+"_"+t}var Vg=function(r,e){this.variableNames=["A"];for(var t=new Array(r.length),n=0;n<t.length;n++)t[n]=r[n]*e[n];this.outputShape=t,this.rank=t.length;var o=kt(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Gg=function(r,e){this.variableNames=["A"];for(var t=new Array(r.length),n=0;n<t.length;n++)t[n]=r[e[n]];this.outputShape=t,this.rank=t.length;var o=kt(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(e);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},Hg=function(r,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var t=new Array(r.length),n=0;n<t.length;n++)t[n]=r[e[n]];if(this.outputShape=t,this.rank=t.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=kt(this.rank),a=Il("rc",this.rank),i=new Array(this.rank);for(n=0;n<e.length;n++)i[e[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+t[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+t[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},ws=1.7580993408473768,_s=1.0507009873554805,st=function(r,e){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+e+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Ie="if (isnan(x)) return x;",jg="return x;",ec="return abs(x);",Nl=Ie+`
  return (x < 0.0) ? 0.0 : x;
`,Ol=Ie+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Fl="return (x >= 0.0) ? x : (exp(x) - 1.0);",qg=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+ws+`;
  float scale = `+_s+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,nc="return -x;",rc="return ceil(x);",oc="return floor(x);",ac="return exp(x);",ic="return exp(x) - 1.0;",Kg=Ie+`
  return sin(x);
`,Xg=Ie+`
  return cos(x);
`,Yg=Ie+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Jg=Ie+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Qg=Ie+`
  return atan(x);
`,Zg=Ie+"return log(x + sqrt(x * x + 1.0));",tm=Ie+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,em=Ie+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,To="return x;",nm="return x;",Ml=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Bl=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Ll=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Vr=function(r,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+e+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},rm=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var e=r.length,t=ie("rc",e),n=kt(e),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(e,t),a=t.slice(-2),i=e<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Po={};function No(r,e){if(e===void 0&&(e=!1),r==="linear")return e?nm:jg;if(r==="relu")return e?Ml:Nl;if(r==="elu")return e?Ll:Fl;if(r==="relu6")return e?Bl:Ol;if(r==="prelu")return e?Pl:Tl;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var om=600,am=function(r){function e(t){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!F().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(t==null){var a=Ge(F().getNumber("WEBGL_VERSION"));o.binaryCache=((n=F().getNumber("WEBGL_VERSION"))in Po||(Po[n]={}),Po[n]),o.gpgpu=new gg(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=t,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=t.gl.canvas;return o.textureManager=new $g(o.gpgpu),o.numMBBeforeWarning=F().global.screen==null?1024:F().global.screen.height*F().global.screen.width*window.devicePixelRatio*om/1024/1024,o.texData=new bl(o,T),o}return Se(e,r),e.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},e.prototype.write=function(t,n,o){if(F().getBool("DEBUG")&&this.checkNumericalProblems(t),o==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:t,usage:pe.UPLOAD}),a},e.prototype.move=function(t,n,o,a){if(F().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:o,dtype:a,values:n,usage:pe.UPLOAD})},e.prototype.readSync=function(t){var n=this.texData.get(t),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new Vr(u,To):new st(u,To);var h=this.runWebGLProgram(l,[{dataId:t,shape:u,dtype:a}],a),f=this.readSync(h.dataId);return this.disposeData(h.dataId),f}if(o!=null)return this.convertAndCacheOnCPU(t);if(a==="string")return o;var d,p,g=this.activeTimers!=null;return g&&(d=Oe()),a==="complex64"?p=zi(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(t),g&&(this.downloadWaitMs+=Oe()-d),this.convertAndCacheOnCPU(t,p)},e.prototype.read=function(t){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,f,d,p,g,v,m,w,b,y,x,_,I,S;return X(this,function(k){switch(k.label){case 0:if(this.pendingRead.has(t))return n=this.pendingRead.get(t),[2,new Promise(function(R){return n.push(R)})];if(o=this.texData.get(t),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new Vr(i,To):new st(i,To),f=this.runWebGLProgram(h,[{dataId:t,shape:i,dtype:u}],u),d=this.read(f.dataId),this.disposeData(f.dataId),[2,d];if(a!=null)return[2,this.convertAndCacheOnCPU(t)];if(!F().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&F().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&F().get("WEBGL_BUFFER_SUPPORTED")&&(g=this.decode(t),v=this.texData.get(g.dataId),p=(S=this.gpgpu).createBufferFromTexture.apply(S,[v.texture].concat(qr(i)))),this.pendingRead.set(t,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:k.sent(),k.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return w=k.sent(),b=w[0],y=w[1],m=zi(b,y),[3,5];case 4:p==null?m=this.getValuesFromTexture(t):(x=Y(i),m=this.gpgpu.downloadFloat32MatrixFromBuffer(p,x)),k.label=5;case 5:return g!=null&&this.disposeData(g.dataId),_=this.convertAndCacheOnCPU(t,m),I=this.pendingRead.get(t),this.pendingRead.delete(t),I.forEach(function(R){return R(_)}),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t),this.pendingDeletes--),[2,_]}})})},e.prototype.checkNumericalProblems=function(t){if(t!=null)for(var n=0;n<t.length;n++){var o=t[n];if(!qd(o))throw F().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},e.prototype.getValuesFromTexture=function(t){var n,o=this.texData.get(t),a=o.shape,i=o.dtype,s=o.isPacked,u=Y(a);if(F().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(t),l=this.texData.get(c.dataId),h=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(qr(a))).subarray(0,u);return this.disposeData(c.dataId),h}var f=F().getBool("WEBGL_PACK")&&s===!0,d=f?ii(a):a,p=f?new jv(d):new Hv(d),g=this.runWebGLProgram(p,[{shape:d,dtype:i,dataId:t}],"float32"),v=this.texData.get(g.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(g.dataId),m},e.prototype.time=function(t){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return X(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,t(),i=Nr(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=Nr(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Sd(c),u.getExtraProfileInfo=function(){return c.map(function(h,f){return{name:s[f],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},e.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},e.prototype.startTimer=function(){return F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Oe(),endMs:null}},e.prototype.endTimer=function(t){return F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=Oe(),t)},e.prototype.getQueryTime=function(t){return K(this,void 0,void 0,function(){var n;return X(this,function(o){return F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(t)]:[2,(n=t).endMs-n.startMs]})})},e.prototype.disposeData=function(t){if(!this.pendingDisposal.has(t)){if(this.pendingRead.has(t))return this.pendingDisposal.add(t),void this.pendingDeletes++;if(this.texData.has(t)){this.releaseGPUData(t);var n=this.texData.get(t).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(t)}}},e.prototype.releaseGPUData=function(t){var n=this.texData.get(t),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||t,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var f=this.texData.get(t);f.texture=null,f.texShape=null,f.isPacked=!1,f.slice=null},e.prototype.getTexture=function(t){return this.uploadToGPU(t),this.texData.get(t).texture},e.prototype.getDataInfo=function(t){return this.texData.get(t)},e.prototype.getCPUBackend=function(){return F().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=T.findBackend("cpu")),this.cpuBackend):null},e.prototype.shouldExecuteOnCPU=function(t,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&t.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},e.prototype.getGPGPUContext=function(){return this.gpgpu},e.prototype.complex=function(t,n){var o=this.makeOutput(t.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:T.keep(t.clone()),imag:T.keep(n.clone())},o},e.prototype.real=function(t){return this.texData.get(t.dataId).complexTensors.real.clone()},e.prototype.imag=function(t){return this.texData.get(t.dataId).complexTensors.imag.clone()},e.prototype.slice=function(t,n,o){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.slice(t,n,o);if(Y(o)===0)return Jt([],o,t.dtype);var a=this.texData.get(t.dataId).isPacked,i=ml(t.shape,n,o);if(a||!i){var s=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ug(o):new Wg(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[t],null,u)}return this.uploadToGPU(t.dataId),this.shallowSlice(t,n,o)},e.prototype.shallowSlice=function(t,n,o){var a=this.texData.get(t.dataId),i=this.makeOutput(o,t.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=t.dtype;var u=yl(n,t.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||t.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},e.prototype.stridedSlice=function(t,n,o,a){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.stridedSlice(t,n,o,a);var i=vs(n,o,a);if(i.some(function(u){return u===0}))return Jt([],i);var s=new zg(n,a,i);return this.compileAndRun(s,[t])},e.prototype.reverse=function(t,n){var o=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Mg(t.shape,n):new Fg(t.shape,n);return this.compileAndRun(o,[t])},e.prototype.concat=function(t,n){if(t[0].dtype==="complex64"){var o=t.map(function(d){return be(d)}),a=t.map(function(d){return Me(d)});return Xt(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(t))return this.cpuBackend.concat(t,n);if(t.length===1)return t[0];if(t.length>F().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(t.length/2),s=this.concat(t.slice(0,i),n),u=this.concat(t.slice(i),n);return this.concat([s,u],n)}if(F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].rank>1){var c=new Tv(t.map(function(d){return d.shape}),n);return this.compileAndRun(c,t)}var l=Fr(t.map(function(d){return d.shape}),n),h=t.map(function(d){return d.as2D(-1,Y(d.shape.slice(n)))}),f=new Dv(h.map(function(d){return d.shape}));return this.compileAndRun(f,h).reshape(l)},e.prototype.neg=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.neg(t);if(F().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,nc,t.dtype);var n=new st(t.shape,nc);return this.compileAndRun(n,[t])},e.prototype.batchMatMul=function(t,n,o,a){var i=o?t.shape[2]:t.shape[1],s=a?n.shape[1]:n.shape[2],u=o?t.shape[1]:t.shape[2],c=t.shape[0];if((i===1||s===1)&&u>1e3){o&&(t=t.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?t:t.as3D(c,u,1),h=s===1?2:1,f=s===1?n.as3D(c,1,u):n;return this.multiply(l,f).sum(h,!0)}var d=Yt(t.dtype,n.dtype),p=new li(t.shape,[c,i,s],o,a);return this.compileAndRun(p,[t,n],d)},e.prototype.fusedBatchMatMul=function(t){var n=t.a,o=t.b,a=t.transposeA,i=t.transposeB,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=a?n.shape[2]:n.shape[1],h=i?o.shape[1]:o.shape[2],f=n.shape[0],d=Yt(n.dtype,o.dtype),p=s!=null,g=c!=null,v=u?No(u,!0):null,m=new li(n.shape,[f,l,h],a,i,p,v,g),w=[n,o];return s&&w.push(s),c&&w.push(c),this.compileAndRun(m,w,d)},e.prototype.multiply=function(t,n){if(t.dtype==="complex64"){var o=this.texData.get(t.dataId),a=this.texData.get(n.dataId),i=new Gu(kv,t.shape,n.shape),s=new Gu(Rv,t.shape,n.shape),u=[this.makeComplexComponentTensorInfo(t,o.complexTensors.real),this.makeComplexComponentTensorInfo(t,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.multiply(t,n);if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,Hu,t.dtype);var f=new Nt(Hu,t.shape,n.shape);return this.compileAndRun(f,[t,n],t.dtype)},e.prototype.batchNormalization=function(t,n,o,a,i,s){var u=[t,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),F().getBool("WEBGL_PACK_NORMALIZATION")){var h=new Ev(t.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)}var f=new Cv(t.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)},e.prototype.localResponseNormalization4D=function(t,n,o,a,i){var s=F().getBool("WEBGL_PACK_NORMALIZATION")?new xg(t.shape,n,o,a,i):new yg(t.shape,n,o,a,i);return this.compileAndRun(s,[t])},e.prototype.LRNGrad=function(t,n,o,a,i,s,u){var c=new bg(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,t])},e.prototype.tile=function(t,n){if(t.dtype==="string"){var o=this.readSync(t.dataId).map(function(i){return Ko(i)});return Rl(at(t.shape,t.dtype,o),n)}var a=new Vg(t.shape,n);return this.compileAndRun(a,[t])},e.prototype.pad=function(t,n,o){var a=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Sg(t.shape,n,o):new Rg(t.shape,n,o);return this.compileAndRun(a,[t])},e.prototype.transpose=function(t,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.transpose(t,n);var o=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Hg(t.shape,n):new Gg(t.shape,n);return this.compileAndRun(o,[t])},e.prototype.gather=function(t,n,o){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.gather(t,n,o);var a=new Qv(t.shape,n.size,o);return this.compileAndRun(a,[t,n])},e.prototype.batchToSpaceND=function(t,n,o){E(t.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,f){return h*f}),i=ta(t.shape,n,a),s=ea(i.length,n.length),u=na(t.shape,n,a),c=dl(o,n.length),l=pl(u,o,n.length);return t.reshape(i).transpose(s).reshape(u).slice(c,l)},e.prototype.spaceToBatchND=function(t,n,o){E(t.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(f,d){return f*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<t.shape.length;++s)i.push([0,0]);var u=t.pad(i),c=ta(u.shape,n,a,!1),l=ea(c.length,n.length,!1),h=na(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},e.prototype.reduce=function(t,n,o){var a=t.shape[0],i=t.shape[1],s=si(i),u=new Ig({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[t],o);return c.shape[1]===1?c:this.reduce(c,n,o)},e.prototype.argReduce=function(t,n,o){o===void 0&&(o=null);var a=t.shape[0],i=t.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=si(i),u=new pv({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[t];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(t,n,l)},e.prototype.argReducePacked=function(t,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:t.shape,i=si(a[a.length-1]),s=new xv(a,i,n,o==null),u=o==null?[t]:[t,o],c=this.compileAndRun(s,u,"int32");return c.rank===t.rank?this.argReducePacked(t,n,c):c},e.prototype.sum=function(t,n){fe("sum",n,t.rank);var o=Qt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i),u=Za(t.dtype);return this.reduce(s,"sum",u).reshape(a)},e.prototype.prod=function(t,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.prod(t,n);var o=Qt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i),u=Za(t.dtype);return this.reduce(s,"prod",u).reshape(a)},e.prototype.unsortedSegmentSum=function(t,n,o){var a=0,i=He([a],t.rank),s=t;i!=null&&(s=t.transpose(i),a=je(1,t.rank)[0]);var u=function(d,p,g){for(var v=[],m=d.length,w=0;w<m;w++)w!==p?v.push(d[w]):v.push(g);return v}(s.shape,a,o),c=Y([s.shape[a]]),l=s.as2D(-1,c),h=Za(t.dtype),f=this.segOpCompute(l,"unsortedSegmentSum",n,h,o).reshape(u);return i!=null&&(f=f.transpose(hs(i))),f},e.prototype.segOpCompute=function(t,n,o,a,i){var s=t.shape[0],u=t.shape[1],c=function(f,d){var p,g=!1;for(f<=gl?(p=f,g=!0):p=Pi(f,Math.floor(Math.sqrt(f)));!g;)p>d||p===f?g=!0:p=Pi(f,p+1);return p}(u,i),l=new Bg({windowSize:c,inSize:u,batchSize:s,numSegments:i}),h=this.compileAndRun(l,[t,o],a);return h.shape[1]===i?h:(o=Zo(0,i).tile([u/c]),this.segOpCompute(h,n,o,a,i))},e.prototype.argMinMaxReduce=function(t,n,o){var a=[n];if(fe("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,t.rank),!F().getBool("WEBGL_PACK_REDUCE")||t.rank<=2){var i=Qt(t.shape,a),s=i[0],u=Y(i[1]),c=t.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(t,o)},e.prototype.argMin=function(t,n){return this.argMinMaxReduce(t,n,"min")},e.prototype.argMax=function(t,n){return this.argMinMaxReduce(t,n,"max")},e.prototype.cumsum=function(t,n,o,a){if(n!==t.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(t.rank-1)+" but got axis="+n);var i=new Uv(t.shape,o,a);return this.compileAndRun(i,[t])},e.prototype.equal=function(t,n){if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Nt("return float(a == b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.notEqual=function(t,n){if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Nt("return float(a != b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.less=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.less(t,n);if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Nt("return float(a < b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.lessEqual=function(t,n){if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Nt("return float(a <= b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.greater=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.greater(t,n);if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Nt("return float(a > b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.greaterEqual=function(t,n){if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Nt("return float(a >= b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.logicalNot=function(t){var n=new st(t.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[t])},e.prototype.logicalAnd=function(t,n){if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Nt("return float(a >= 1.0 && b >= 1.0);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.logicalOr=function(t,n){if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Nt("return float(a >= 1.0 || b >= 1.0);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.select=function(t,n,o){var a=new Lg(t.rank,n.shape,n.rank);return this.compileAndRun(a,[t,n,o],Yt(n.dtype,o.dtype))},e.prototype.where=function(t){Jo("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=t.dataSync();return bs(t.shape,n)},e.prototype.topk=function(t,n,o){return Sl(t.dataSync(),t.shape,t.dtype,n)},e.prototype.min=function(t,n){fe("min",n,t.rank);var o=Qt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},e.prototype.minimum=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.minimum(t,n);var o=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Je(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new Nt(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.mod=function(t,n){var o=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Je(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new Nt(`if (b == 0.0) return NAN;
  return mod(a, b);`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.max=function(t,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.max(t,n);fe("max",n,t.rank);var o=Qt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},e.prototype.maximum=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.maximum(t,n);var o=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Je(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new Nt(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.all=function(t,n){fe("all",n,t.rank);var o=Qt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},e.prototype.any=function(t,n){fe("any",n,t.rank);var o=Qt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},e.prototype.realDivide=function(t,n){if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
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
`,"float32",!0);var o=new Nt(`
if (a == b) {
  return 1.0;
};
return a / b;`,t.shape,n.shape);return this.compileAndRun(o,[t,n],"float32")},e.prototype.floorDiv=function(t,n){if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
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
`,"int32");var o=new Nt(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,t.shape,n.shape);return this.compileAndRun(o,[t,n],"int32")},e.prototype.add=function(t,n){if(t.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(t,n,ui);if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.add(t,n);var o=Yt(t.dtype,n.dtype);if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,ui,o);var a=new Nt(ui,t.shape,n.shape);return this.compileAndRun(a,[t,n],o)},e.prototype.packedUnaryOp=function(t,n,o){var a=new Vr(t.shape,n);return this.compileAndRun(a,[t],o)},e.prototype.packedBinaryOp=function(t,n,o,a,i){i===void 0&&(i=!1);var s=new Je(o,t.shape,n.shape,i);return this.compileAndRun(s,[t,n],a)},e.prototype.complexSeparableBinaryOp=function(t,n,o){var a=this,i=this.texData.get(t.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(f){var d=f[0],p=f[1],g=a.makeComplexComponentTensorInfo(t,d),v=a.makeComplexComponentTensorInfo(n,p),m=new Nt(o,t.shape,n.shape);return a.compileAndRun(m,[g,v],Yt(d.dtype,p.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},e.prototype.makeComplexComponentTensorInfo=function(t,n){return{dataId:n.dataId,dtype:n.dtype,shape:t.shape}},e.prototype.addN=function(t){if(t.length===1)return t[0];if(t.length>F().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(t.length/2),o=this.addN(t.slice(0,n)),a=this.addN(t.slice(n));return this.addN([o,a])}var i=t.map(function(c){return c.dtype}).reduce(function(c,l){return Yt(c,l)}),s=t.map(function(c){return c.shape}),u=F().getBool("WEBGL_PACK")?new dv(t[0].shape,s):new fv(t[0].shape,s);return this.compileAndRun(u,t,i)},e.prototype.subtract=function(t,n){if(t.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(t,n,ci);if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.subtract(t,n);var o=Yt(t.dtype,n.dtype);if(F().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,ci,t.dtype);var a=new Nt(ci,t.shape,n.shape);return this.compileAndRun(a,[t,n],o)},e.prototype.pow=function(t,n){var o=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Je(`
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
`,t.shape,n.shape):new Nt(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,t.shape,n.shape),a=Yt(t.dtype,n.dtype);return this.compileAndRun(o,[t,n],a)},e.prototype.ceil=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.ceil(t);if(F().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,rc,t.dtype);var n=new st(t.shape,rc);return this.compileAndRun(n,[t])},e.prototype.floor=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.floor(t);if(F().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,oc,t.dtype);var n=new st(t.shape,oc);return this.compileAndRun(n,[t])},e.prototype.sign=function(t){var n=new st(t.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[t])},e.prototype.isNaN=function(t){var n=new st(t.shape,"return float(isnan(x));");return this.compileAndRun(n,[t],"bool")},e.prototype.isInf=function(t){var n=new st(t.shape,"return float(isinf(x));");return this.compileAndRun(n,[t],"bool")},e.prototype.isFinite=function(t){var n=new st(t.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[t],"bool")},e.prototype.round=function(t){var n=new st(t.shape,`
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
`);return this.compileAndRun(n,[t])},e.prototype.exp=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.exp(t);if(F().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,ac,t.dtype);var n=new st(t.shape,ac);return this.compileAndRun(n,[t])},e.prototype.expm1=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.expm1(t);if(F().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,ic,t.dtype);var n=new st(t.shape,ic);return this.compileAndRun(n,[t])},e.prototype.softmax=function(t,n){var o=Vt([n],t.shape),a=this.max(t,o),i=ce(a.shape,o),s=this.subtract(t,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},e.prototype.log=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.log(t);if(F().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,t.dtype);var n=new st(t.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[t])},e.prototype.log1p=function(t){var n=new st(t.shape,"return log(1.0 + x);");return this.compileAndRun(n,[t])},e.prototype.sqrt=function(t){var n=new st(t.shape,"return sqrt(x);");return this.compileAndRun(n,[t])},e.prototype.rsqrt=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.rsqrt(t);var n=new st(t.shape,"return inversesqrt(x);");return this.compileAndRun(n,[t])},e.prototype.reciprocal=function(t){var n=new st(t.shape,"return 1.0 / x;");return this.compileAndRun(n,[t])},e.prototype.relu=function(t){var n;return n=F().getBool("WEBGL_PACK")?new Vr(t.shape,Ml):new st(t.shape,Nl),this.compileAndRun(n,[t])},e.prototype.relu6=function(t){var n;return n=F().getBool("WEBGL_PACK")?new Vr(t.shape,Bl):new st(t.shape,Ol),this.compileAndRun(n,[t])},e.prototype.prelu=function(t,n){var o=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Je(Pl,t.shape,n.shape):new Nt(Tl,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.elu=function(t){if(F().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Ll,t.dtype);var n=new st(t.shape,Fl);return this.compileAndRun(n,[t])},e.prototype.eluDer=function(t,n){var o=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Je(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,t.shape,n.shape):new Nt("return (b >= 1.0) ? a : a * (b + 1.0);",t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.selu=function(t){var n=new st(t.shape,qg);return this.compileAndRun(n,[t])},e.prototype.int=function(t){var n=new st(t.shape,"return float(int(x));");return this.compileAndRun(n,[t],"int32")},e.prototype.clip=function(t,n,o){var a,i=(a=F().getBool("WEBGL_PACK_CLIP")?new Iv(t.shape):new Sv(t.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[t],null,i)},e.prototype.abs=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.abs(t);if(F().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,ec,t.dtype);var n=new st(t.shape,ec);return this.compileAndRun(n,[t])},e.prototype.complexAbs=function(t){var n=this.texData.get(t.dataId),o=new Av(t.shape),a=[this.makeComplexComponentTensorInfo(t,n.complexTensors.real),this.makeComplexComponentTensorInfo(t,n.complexTensors.imag)];return this.compileAndRun(o,a)},e.prototype.sigmoid=function(t){var n=new st(t.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[t])},e.prototype.softplus=function(t){var n=new st(t.shape,`
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
`);return this.compileAndRun(n,[t])},e.prototype.sin=function(t){var n=new st(t.shape,Kg);return this.compileAndRun(n,[t])},e.prototype.cos=function(t){var n=new st(t.shape,Xg);return this.compileAndRun(n,[t])},e.prototype.tan=function(t){var n=new st(t.shape,"return tan(x);");return this.compileAndRun(n,[t])},e.prototype.asin=function(t){var n=new st(t.shape,Yg);return this.compileAndRun(n,[t])},e.prototype.acos=function(t){var n=new st(t.shape,Jg);return this.compileAndRun(n,[t])},e.prototype.atan=function(t){var n=new st(t.shape,Qg);return this.compileAndRun(n,[t])},e.prototype.atan2=function(t,n){var o=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Je(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new Nt(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.sinh=function(t){var n=new st(t.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[t])},e.prototype.cosh=function(t){var n=new st(t.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[t])},e.prototype.tanh=function(t){var n=new st(t.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[t])},e.prototype.asinh=function(t){var n=new st(t.shape,Zg);return this.compileAndRun(n,[t])},e.prototype.acosh=function(t){var n=new st(t.shape,tm);return this.compileAndRun(n,[t])},e.prototype.atanh=function(t){var n=new st(t.shape,em);return this.compileAndRun(n,[t])},e.prototype.erf=function(t){var n=new st(t.shape,`
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
`);return this.compileAndRun(n,[t])},e.prototype.step=function(t,n){var o=new st(t.shape,function(a){return a===void 0&&(a=0),Ie+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[t])},e.prototype.conv2dByMatMul=function(t,n,o,a,i,s){var u=t.shape,c=this.texData.get(t.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],f=o.outChannels,d=o.dataFormat==="channelsLast",p=(h===1||f===1)&&l>1e3,g=u[2]%2!=0&&!!c.isPacked;if(p||!F().getBool("WEBGL_LAZILY_UNPACK")||!F().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!g){var v=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],m=this.reshape(t,[1,v,o.inChannels]),w=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:m,b:w,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:t.dataId,shape:[1,b,o.inChannels],dtype:t.dtype},x=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(Ao(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var _=this.reshape(n,[1,o.inChannels,o.outChannels]),I=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),S=this.texData.get(I.dataId);return E(S.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=x,S.shape=o.outShape,T.makeTensorFromDataId(I.dataId,o.outShape,I.dtype)},e.prototype.conv2dWithIm2Row=function(t,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,f=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,g=f*h,v=[p,g],m=t.squeeze([0]),w=n.reshape([1,p,-1]),b=new mg(v,m.shape,o),y=this.compileAndRun(b,[m]).reshape([1,v[0],v[1]]),x=a!=null,_=s!=null,I=i?No(i,!0):null,S=new li(y.shape,[1,g,o.outChannels],!0,!1,x,I,_),k=[y,w];a&&k.push(a),_&&k.push(s);var R=this.compileAndRun(S,k);return d?R.reshape([1,f,h,o.outChannels]):R.reshape([1,o.outChannels,f,h])},e.prototype.fusedConv2d=function(t){var n=t.input,o=t.filter,a=t.convInfo,i=t.bias,s=t.activation,u=t.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(F().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,h=s?No(s,!1):null,f=new ju(a,c,h,l),d=[n,o];return i&&d.push(i),u&&d.push(u),this.compileAndRun(f,d)},e.prototype.conv2d=function(t,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(t,n,o);if(F().getBool("WEBGL_CONV_IM2COL")&&t.shape[0]===1)return this.conv2dWithIm2Row(t,n,o);var a=new ju(o);return this.compileAndRun(a,[t,n])},e.prototype.conv2dDerInput=function(t,n,o){var a=new Nv(o);return this.compileAndRun(a,[t,n])},e.prototype.conv2dDerFilter=function(t,n,o){var a=new Pv(o);return this.compileAndRun(a,[t,n])},e.prototype.fusedDepthwiseConv2D=function(t){var n,o=t.input,a=t.filter,i=t.convInfo,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=F().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,h=u?No(u,l):null,f=[o,a],d=s!=null,p=c!=null;return d&&f.push(s),p&&f.push(c),l?(n=new Ku(i,d,h,p),this.compileAndRun(n,f)):(n=new qu(i,d,h,p),this.compileAndRun(n,f))},e.prototype.depthwiseConv2D=function(t,n,o){var a;return F().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new Ku(o),this.compileAndRun(a,[t,n])):(a=new qu(o),this.compileAndRun(a,[t,n]))},e.prototype.depthwiseConv2DDerInput=function(t,n,o){var a=new Bv(o);return this.compileAndRun(a,[t,n])},e.prototype.depthwiseConv2DDerFilter=function(t,n,o){var a=new Mv(o);return this.compileAndRun(a,[t,n])},e.prototype.conv3d=function(t,n,o){var a=new Lv(o);return this.compileAndRun(a,[t,n])},e.prototype.conv3dDerInput=function(t,n,o){var a=new Fv(o);return this.compileAndRun(a,[t,n])},e.prototype.conv3dDerFilter=function(t,n,o){var a=new Ov(o);return this.compileAndRun(a,[t,n])},e.prototype.maxPool=function(t,n){var o=new hi(n,"max",!1);return this.compileAndRun(o,[t])},e.prototype.avgPool=function(t,n){var o=new hi(n,"avg",!1);return this.compileAndRun(o,[t],"float32")},e.prototype.maxPoolBackprop=function(t,n,o,a){var i=new hi(a,"max",!0),s=this.compileAndRun(i,[n]),u=new wg(a),c=this.compileAndRun(u,[t,s],n.dtype);return s.dispose(),c},e.prototype.avgPoolBackprop=function(t,n,o){var a=new wv(o);return this.compileAndRun(a,[t],n.dtype)},e.prototype.cast=function(t,n){return _l(t,n,this)},e.prototype.unstack=function(t,n){for(var o=t.shape[n],a=new Array(t.rank-1),i=0,s=0;s<t.rank;s++)s!==n&&(a[i++]=t.shape[s]);var u=new Array(t.rank).fill(0),c=t.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(t,u,c).reshape(a);return l},e.prototype.avgPool3d=function(t,n){var o=new fi(n,"avg",!1);return this.compileAndRun(o,[t],"float32")},e.prototype.avgPool3dBackprop=function(t,n,o){var a=new _v(o);return this.compileAndRun(a,[t],n.dtype)},e.prototype.maxPool3d=function(t,n){var o=new fi(n,"max",!1);return this.compileAndRun(o,[t],"float32")},e.prototype.maxPool3dBackprop=function(t,n,o,a){var i=new fi(a,"max",!0),s=this.compileAndRun(i,[n]),u=new _g(a),c=this.compileAndRun(u,[t,s],n.dtype);return s.dispose(),c},e.prototype.reshape=function(t,n){var o=this.texData.get(t.dataId);if(o.isPacked&&!Ao(t.shape,n)&&(o.texture===null||!Ao(o.shape,n))){var a=this.packedReshape(t,n);return T.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return Ui(t,n)},e.prototype.resizeBilinear=function(t,n,o,a){var i=F().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Pg(t.shape,n,o,a):new Tg(t.shape,n,o,a);return this.compileAndRun(i,[t],"float32")},e.prototype.resizeBilinearBackprop=function(t,n,o){var a=new Dg(t,n,o);return this.compileAndRun(a,[t])},e.prototype.resizeNearestNeighbor=function(t,n,o,a){var i=new Og(t.shape,n,o,a);return this.compileAndRun(i,[t])},e.prototype.resizeNearestNeighborBackprop=function(t,n,o){var a=new Ng(t,n,o);return this.compileAndRun(a,[t])},e.prototype.multinomial=function(t,n,o,a){var i=n?t:an(t),s=i.shape[0],u=i.shape[1],c=new Cg(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},e.prototype.oneHot=function(t,n,o,a){var i=new Eg(t.size,n,o,a);return this.compileAndRun(i,[t])},e.prototype.diag=function(t){var n=new Gv(t.size);return this.compileAndRun(n,[t])},e.prototype.nonMaxSuppression=function(t,n,o,a,i){return Jo("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),ms(t.dataSync(),n.dataSync(),o,a,i)},e.prototype.cropAndResize=function(t,n,o,a,i,s){var u=new Wv(t.shape,n.shape,a,i,s);return this.compileAndRun(u,[t,n,o],"float32")},e.prototype.depthToSpace=function(t,n,o){E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=t.shape[0],i=o==="NHWC"?t.shape[1]:t.shape[2],s=o==="NHWC"?t.shape[2]:t.shape[3],u=o==="NHWC"?t.shape[3]:t.shape[1],c=i*n,l=s*n,h=u/(n*n),f=new Vv(o==="NHWC"?[a,c,l,h]:[a,h,c,l],n,o);return this.compileAndRun(f,[t])},e.prototype.split=function(t,n,o){return kl(t,n,o)},e.prototype.scatterND=function(t,n,o){var a=ra(0,t,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=[l/u,u],f=t.reshape([s,i]),d=n.reshape([s,u]);if(l===0)return Ui(Jt([]),o);var p=H(0),g=new Qu(s,i,f.rank,d.rank,c,h);return this.compileAndRun(g,[d,f,p]).reshape(o)},e.prototype.sparseToDense=function(t,n,o,a){var i=ra(0,t,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,h=new Qu(u,s,t.rank,n.rank,c,[l,1]);return this.compileAndRun(h,[n,t,a]).reshape(o)},e.prototype.fft=function(t){return this.fftImpl(t,!1)},e.prototype.ifft=function(t){return this.fftImpl(t,!0)},e.prototype.fftImpl=function(t,n){var o=this.texData.get(t.dataId),a=new Yu(Xv,t.shape,n),i=new Yu(Yv,t.shape,n),s=[this.makeComplexComponentTensorInfo(t,o.complexTensors.real),this.makeComplexComponentTensorInfo(t,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(t.shape[0],t.shape[1]);return u.dispose(),c.dispose(),l},e.prototype.gatherND=function(t,n){var o=n.shape,a=o[o.length-1],i=vl(t,n),s=i[0],u=i[1],c=i[2],l=i[3],h=n.reshape([u,a]),f=t.reshape([t.size/c,c]),d=new Zv(a,l,[u,c]);return this.compileAndRun(d,[f,h]).reshape(s)},e.prototype.fill=function(t,n,o){if((o=o||ho(n))==="string"){var a=qo(o,Y(t));return a.fill(n),T.makeTensor(a,t,o,this)}var i=new Jv(t,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},e.prototype.onesLike=function(t){if(t.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(t.shape,1,t.dtype)},e.prototype.zerosLike=function(t){return this.fill(t.shape,t.dtype==="string"?"":0,t.dtype)},e.prototype.linspace=function(t,n,o){return Cl(t,n,o)},e.prototype.makeTensorInfo=function(t,n){var o=this.write(null,t,n);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:n}},e.prototype.makeOutput=function(t,n){var o=this.makeTensorInfo(t,n).dataId;return T.makeTensorFromDataId(o,t,n,this)},e.prototype.unpackTensor=function(t){var n=new rm(t.shape);return this.runWebGLProgram(n,[t],t.dtype)},e.prototype.packTensor=function(t){var n=new kg(t.shape);return this.runWebGLProgram(n,[t],t.dtype,null,!0)},e.prototype.packedReshape=function(t,n){var o=[Xo(t.shape)].concat(Yo(t.shape)),a={dtype:t.dtype,shape:o,dataId:t.dataId},i=[Xo(n)].concat(Yo(n)),s=new Ag(i,o),u=this.runWebGLProgram(s,[a],t.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},e.prototype.decode=function(t){var n,o=this.texData.get(t),a=o.isPacked,i=o.shape,s=o.dtype,u=ii(i);return n=a?new $v(u):new zv(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:t}],s,null,!0).dataId}},e.prototype.runWebGLProgram=function(t,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(t.outputShape,o),c=this.texData.get(u.dataId);if(t.packedOutput&&(c.isPacked=!0),t.outPackingScheme===oo.DENSE){var l=qr(t.outputShape);c.texShape=l.map(function(b){return 2*b})}if(t.outTexUsage!=null&&(c.usage=t.outTexUsage),Y(u.shape)===0)return c.values=no(u.dtype,0),u;var h=[],f=n.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!t.packedInputs&&Y(b.shape)<=F().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};t.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!t.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),h.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!Ao(y.shape,b.shape)){var x=b,_=b.shape;b.shape=y.shape,b=s.packedReshape(b,_),h.push(b),y=s.texData.get(b.dataId),x.shape=_}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},g=function(b,y,x){var _="";y.concat(x).forEach(function(k){var R=k.texData!=null&&k.texData.slice!=null&&k.texData.slice.flatOffset>0,P=k.isUniform?"uniform":k.texData.texShape;_+=k.shape+"_"+P+"_"+R});var I=b.userCode,S=b.constructor.name;return S+="_"+_+"_"+I}(t,f,p),v=this.getAndSaveBinary(g,function(){return function(b,y,x,_){var I=y.userCode,S=x.map(function(W,V){var G={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(G.flatOffset=W.texData.slice.flatOffset),{name:y.variableNames[V],shapeInfo:G}}),k=S.map(function(W){return W.shapeInfo}),R={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},P=vv(S,R,I,y.packedInputs),D=b.createProgram(P),L=null,M=b.getUniformLocation(D,"NAN",!1);F().getNumber("WEBGL_VERSION")===1&&(L=b.getUniformLocation(D,"INFINITY",!1));for(var B={},z=0;z<y.variableNames.length;z++){var U=y.variableNames[z];B[U]=b.getUniformLocation(D,U,!1),B["offset"+U]=b.getUniformLocation(D,"offset"+U,!1)}return{program:y,source:P,webGLProgram:D,uniformLocations:B,inShapeInfos:k,outShapeInfo:R,infLoc:L,nanLoc:M}}(s.gpgpu,t,f,p)}),m=this.activeTimers!=null;if(m&&(d=this.startTimer()),function(b,y,x,_,I){Ju(y.inShapeInfos,x),Ju([y.outShapeInfo],[_]);var S=_.texData.texture,k=_.texData.texShape;_.texData.isPacked?b.setOutputPackedMatrixTexture(S,k[0],k[1]):b.setOutputMatrixTexture(S,k[0],k[1]),b.setProgram(y.webGLProgram),F().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),x.forEach(function(R,P){var D=y.program.variableNames[P],L=y.uniformLocations[D],M=y.uniformLocations["offset"+D];if(L!=null)if(R.isUniform)if(Y(R.shape)<2)b.gl.uniform1f(L,R.uniformValues[0]);else{var B=R.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(L,B)}else R.texData.slice!=null&&M!=null&&b.gl.uniform1i(M,R.texData.slice.flatOffset),b.setInputMatrixTexture(R.texData.texture,L,P)}),I!=null&&I(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,v,f,p,a),h.forEach(function(b){return s.disposeData(b.dataId)}),m&&(d=this.endTimer(d),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(d)})),!F().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var w=this.unpackTensor(u);return this.disposeData(u.dataId),w}return u},e.prototype.compileAndRun=function(t,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(t,n,o,a,i);return T.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},e.prototype.getAndSaveBinary=function(t,n){return t in this.binaryCache||(this.binaryCache[t]=n()),this.binaryCache[t]},e.prototype.getTextureManager=function(){return this.textureManager},e.prototype.dispose=function(){var t=this;this.disposed||(F().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){t.gpgpu.deleteProgram(t.binaryCache[n].webGLProgram),delete t.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},e.prototype.floatPrecision=function(){var t=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=q(function(){if(!F().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=F().getBool("DEBUG");F().set("DEBUG",!1);var o=t.abs(H(1e-8)).dataSync()[0];if(F().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},e.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},e.prototype.uploadToGPU=function(t){var n,o=this.texData.get(t),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,f=this.activeTimers!=null;f&&(h=Oe());var d=o.texShape;if(d==null&&(d=hp(a,l),o.texShape=d),s!=null){var p=ii(a),g=void 0,v=d[1],m=d[0],w=s instanceof Uint8Array;l?(v=(n=po(d[0],d[1]))[0],m=n[1],g=new Kv(p,[m,v],w)):g=new qv(p,[m,v],w);var b=this.makeTensorInfo([m,v],i);this.texData.get(b.dataId).usage=w?pe.PIXELS:pe.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),v,m,s);var y=this.runWebGLProgram(g,[b],i,null,!0),x=this.texData.get(y.dataId);o.texture=x.texture,o.texShape=x.texShape,o.isPacked=x.isPacked,o.usage=x.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,f&&(this.uploadWaitMs+=Oe()-h)}else{var _=this.acquireTexture(d,c,i,l);o.texture=_}}},e.prototype.convertAndCacheOnCPU=function(t,n){var o=this.texData.get(t),a=o.dtype;return this.releaseGPUData(t),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},e.prototype.acquireTexture=function(t,n,o,a){if(this.numBytesInGPU+=this.computeBytes(t,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(t,n,a)},e.prototype.computeBytes=function(t,n){return t[0]*t[1]*Jc(n)},e}(xl);ol()&&T.registerBackend("webgl",function(){return new am},2);var im=A({square_:function(r){var e=C(r,"x","square"),t=[e];return T.runKernelFunc(function(n,o){return o([e]),n.square(e)},{x:e},null,"Square",{},t,[])}}),io="SquaredDifference",Wl=A({squaredDifference_:function(r,e){var t,n=C(r,"a","squaredDifference"),o=C(e,"b","squaredDifference");t=Tt(n,o),n=t[0],o=t[1],ft(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return T.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],h=H(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},io,{},i,[])}}),sm=A({abs_:function(r){var e=C(r,"x","abs");return e.dtype==="complex64"?T.runKernelFunc(function(t){return t.complexAbs(e)},{$x:e}):T.runKernelFunc(function(t,n){var o=t.abs(e);return n([e]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return t.mul(o.toFloat().step(-1))}}},"Abs")}}),um=A({acos_:function(r){var e=C(r,"x","acos");return T.runKernelFunc(function(t,n){var o=t.acos(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(H(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),cm=A({acosh_:function(r){var e=C(r,"x","acosh");return T.runKernelFunc(function(t,n){var o=t.acosh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),lm=A({asin_:function(r){var e=C(r,"x","asin");return T.runKernelFunc(function(t,n){var o=t.asin(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(H(1).sub(o.toFloat().square()).sqrt())}}})}}),hm=A({asinh_:function(r){var e=C(r,"x","asinh");return T.runKernelFunc(function(t,n){var o=t.asinh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(H(1).add(o.toFloat().square()).sqrt())}}})}}),fm=A({atan_:function(r){var e=C(r,"x","atan");return T.runKernelFunc(function(t,n){var o=t.atan(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.toFloat().square().add(1))}}})}}),dm=A({atanh_:function(r){var e=C(r,"x","atanh");return T.runKernelFunc(function(t,n){var o=t.atanh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(H(1).sub(o.toFloat().square()))}}})}}),pm=A({ceil_:function(r){var e=C(r,"x","ceil");return T.runKernelFunc(function(t){return t.ceil(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),Cs=A({clipByValue_:function(r,e,t){var n=C(r,"x","clipByValue");E(e<=t,function(){return"Error in clip: min ("+e+") must be less than or equal to max ("+t+")."});var o=[n],a={min:e,max:t};return T.runKernelFunc(function(i,s){var u=i.clip(n,e,t);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(e).logicalAnd(u.lessEqual(t)),mt(i))}}},"ClipByValue",a,o)}}),vm=A({cos_:function(r){var e=C(r,"x","cos"),t=[e];return T.runKernelFunc(function(n,o){var a=n.cos(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},t)}}),gm=A({cosh_:function(r){var e=C(r,"x","cosh");return T.runKernelFunc(function(t,n){var o=t.cosh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(t)}}})}}),mm=A({erf_:function(r){var e=C(r,"x","erf");return E(e.dtype==="int32"||e.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),e.dtype==="int32"&&(e=e.toFloat()),T.runKernelFunc(function(t,n){var o=t.erf(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),$i=A({exp_:function(r){var e=C(r,"x","exp");return T.runKernelFunc(function(t,n){var o=t.exp(e);return n([o]),o},{x:e},function(t,n){return{x:function(){return t.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),ym=A({expm1_:function(r){var e=C(r,"x","expm1");return T.runKernelFunc(function(t,n){var o=t.expm1(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.exp())}}})}}),bm=A({floor_:function(r){var e=C(r,"x","floor");return T.runKernelFunc(function(t){return t.floor(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),xm=A({log_:function(r){var e=C(r,"x","log"),t=[e];return T.runKernelFunc(function(n,o){var a=n.log(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},t)}}),wm=A({log1p_:function(r){var e=C(r,"x","log1p");return T.runKernelFunc(function(t,n){var o=t.log1p(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.add(1))}}})}}),_m=A({logSigmoid_:function(r){var e=C(r,"x","logSigmoid");return T.runKernelFunc(function(t,n){var o=t.softplus(e.neg()).neg();return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.neg().sigmoid())}}})}}),sa=A({neg_:function(r){var e=C(r,"x","neg"),t=[e];return T.runKernelFunc(function(n){return n.neg(e)},{x:e},function(n){return{x:function(){return n.neg()}}},"Neg",{},t)}}),Cm=A({reciprocal_:function(r){var e=C(r,"x","reciprocal");return T.runKernelFunc(function(t,n){var o=t.reciprocal(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.square().neg())}}})}}),Em=A({round_:function(r){var e=C(r,"x","round");return T.runKernelFunc(function(t){return t.round(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),Ul=A({rsqrt_:function(r){var e=C(r,"x","rsqrt"),t=[e];return T.runKernelFunc(function(n,o){var a=n.rsqrt(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},t)}}),zl=A({sigmoid_:function(r){var e=C(r,"x","sigmoid");return T.runKernelFunc(function(t,n){var o=t.sigmoid(e);return n([o]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return t.mul(o.mul(H(1).sub(o)))}}},"Sigmoid")}}),km=A({sign_:function(r){var e=C(r,"x","sign");return T.runKernelFunc(function(t){return t.sign(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),Rm=A({isNaN_:function(r){var e=C(r,"x","isNaN");return T.runKernelFunc(function(t){return t.isNaN(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),Sm=A({isInf_:function(r){var e=C(r,"x","isInf");return T.runKernelFunc(function(t){return t.isInf(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),Im=A({isFinite_:function(r){var e=C(r,"x","isFinite");return T.runKernelFunc(function(t){return t.isFinite(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),Am=A({sin_:function(r){var e=C(r,"x","sin"),t=[e];return T.runKernelFunc(function(n,o){var a=n.sin(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},t)}}),Dm=A({sinh_:function(r){var e=C(r,"x","sinh");return T.runKernelFunc(function(t,n){var o=t.sinh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(t)}}})}}),Tm=A({softplus_:function(r){var e=C(r,"x","softplus");return T.runKernelFunc(function(t,n){var o=t.softplus(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.sigmoid())}}})}}),Pm=A({sqrt_:function(r){var e=C(r,"x","sqrt");return T.runKernelFunc(function(t,n){var o=t.sqrt(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.toFloat().sqrt().mul(2))}}})}}),Nm=A({step_:function(r,e){e===void 0&&(e=0);var t=C(r,"x","step");return T.runKernelFunc(function(n){return n.step(t,e)},{$x:t},function(n){return{$x:function(){return mt(n)}}})}}),Om=A({tan_:function(r){var e=C(r,"x","tan");return T.runKernelFunc(function(t,n){var o=t.tan(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.cos().square())}}})}}),Fm=A({tanh_:function(r){var e=C(r,"x","tanh");return T.runKernelFunc(function(t,n){var o=t.tanh(e);return n([o]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return H(1).sub(o.square()).mulStrict(t)}}},"Tanh",{},null,[!0])}});function $l(r,e,t,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(e,"mean","batchNorm"),l=C(t,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),go(u,c,l,s,i,a)}function Vl(r,e,t,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(e,"mean","batchNorm"),l=C(t,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),go(u,c,l,s,i,a)}function Gl(r,e,t,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(e,"mean","batchNorm"),l=C(t,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),go(u,c,l,s,i,a)}function go(r,e,t,n,o,a){a==null&&(a=.001);var i,s,u,c=C(r,"x","batchNorm"),l=C(e,"mean","batchNorm"),h=C(t,"variance","batchNorm");o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,i];return T.runKernelFunc(function(d,p){var g=d.batchNormalization(u,Oo(l),Oo(h),a,Oo(i),Oo(s));return p([c,l,h,i]),g},{x:c,mean:l,variance:h,scale:i,offset:s},function(d,p){var g=p,v=g[0],m=g[1],w=g[2],b=g[3],y=b??H(1),x=zt(m.shape,u.shape),_=[];if(m.rank===1){for(var I=0;I<u.shape.length-1;++I)_.push(u.shape[I]);_.push(1)}var S=v.sub(m),k=d.mul(y),R=Ul(w.add(H(a))),P=R.mul(R).mul(R).mul(H(-.5));return{x:function(){return m.rank===1?d.mul(fr(R.as4D(1,1,1,m.shape[0]),_)).mul(y).reshape(v.shape):d.mul(R).mul(y).reshape(v.shape)},mean:function(){var D=R.mul(H(-1)).mul(k);return m.rank===1&&(D=D.sum(x)),D.reshape(m.shape)},variance:function(){var D=P.mul(S).mul(k);return m.rank===1&&(D=D.sum(x)),D.reshape(m.shape)},scale:function(){var D=S.mul(R),L=d.mul(D);return m.rank===1&&(L=L.sum(x)),L.reshape(m.shape)},offset:function(){var D=d;return m.rank===1&&(D=D.sum(x)),D.reshape(m.shape)}}},"BatchNormalization",{varianceEpsilon:a},f).reshape(c.shape)}function Oo(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function _a(){al("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var Mm=A({batchNormalization2d_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),_a(),$l(r,e,t,a,o,n)}}),Bm=A({batchNormalization3d_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),_a(),Vl(r,e,t,a,o,n)}}),Lm=A({batchNormalization4d_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),_a(),Gl(r,e,t,a,o,n)}}),Wm=A({batchNormalization_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),_a(),go(r,e,t,a,o,n)}}),Hl=A({batchNorm_:go}),Um=A({batchNorm2d_:$l}),zm=A({batchNorm3d_:Vl}),$m=A({batchNorm4d_:Gl}),Ca=A({logicalAnd_:function(r,e){var t=C(r,"a","logicalAnd","bool"),n=C(e,"b","logicalAnd","bool");return ft(t.shape,n.shape),T.runKernelFunc(function(o){return o.logicalAnd(t,n)},{a:t,b:n},null,"LogicalAnd")}}),Vm=A({logicalNot_:function(r){var e=C(r,"x","logicalNot","bool");return T.runKernelFunc(function(t){return t.logicalNot(e)},{$x:e})}}),jl=A({logicalOr_:function(r,e){var t=C(r,"a","logicalOr","bool"),n=C(e,"b","logicalOr","bool");return ft(t.shape,n.shape),T.runKernelFunc(function(o){return o.logicalOr(t,n)},{$a:t,$b:n})}}),Gm=A({logicalXor_:function(r,e){var t=C(r,"a","logicalXor","bool"),n=C(e,"b","logicalXor","bool");return ft(t.shape,n.shape),jl(r,e).logicalAnd(Ca(r,e).logicalNot())}}),Hn=A({where_:function(r,e,t){var n=C(e,"a","where"),o=C(t,"b","where"),a=C(r,"condition","where","bool");return wt(n.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):wt(a.shape,o.shape,"Error in where: "),T.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return mt(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),ql=function(r){return K(this,void 0,void 0,function(){var e,t,n;return X(this,function(o){switch(o.label){case 0:return[4,(e=C(r,"condition","whereAsync","bool")).data()];case 1:return t=o.sent(),n=bs(e.shape,t),r!==e&&e.dispose(),[2,n]}})})},lt=A({add_:function(r,e){var t,n=C(r,"a","add"),o=C(e,"b","add");t=Tt(n,o),n=t[0],o=t[1];var a=ft(n.shape,o.shape);return T.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=zt(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=zt(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Hm=A({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var e=r.map(function(o,a){return C(o,"tensors"+a,"addN")}),t=e[0];e.forEach(function(o){if(o.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(function(o){if(!jt(o.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=e;return T.runKernelFunc(function(o){return o.addN(e)},n,function(o){var a={};return e.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),jm=A({addStrict_:function(r,e){var t=C(r,"a","addStrict"),n=C(e,"b","addStrict");return wt(t.shape,n.shape,"Error in addStrict: "),t.add(n)}}),qm=A({atan2_:function(r,e){var t,n=C(r,"a","atan2"),o=C(e,"b","atan2");t=Tt(n,o),n=t[0],o=t[1];var a=ft(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=lt(u.square(),c.square()),h=i.mul(c.div(l)),f=zt(u.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(u.shape)},$b:function(){var l=lt(u.square(),c.square()),h=sa(i.mul(u.div(l))),f=zt(c.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(c.shape)}}})}}),Ee=A({div_:function(r,e){var t,n=C(r,"a","div"),o=C(e,"b","div");if(t=Tt(n,o),n=t[0],o=t[1],n.dtype==="int32"&&o.dtype==="int32")return Kl(n,o);var a=ft(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=zt(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=zt(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"Div")}}),Km=A({divNoNan_:function(r,e){var t,n=C(r,"a","div"),o=C(e,"b","div");n=(t=Tt(n,o))[0],o=t[1];var a=Ee(n,o),i=mt(a),s=o.equal(i);return Hn(s,i,a)}}),Xm=A({divStrict_:function(r,e){var t=C(r,"a","div"),n=C(e,"b","div");return wt(t.shape,n.shape,"Error in divideStrict: "),t.div(n)}}),Kl=A({floorDiv_:function(r,e){var t,n=C(r,"a","floorDiv"),o=C(e,"b","floorDiv");t=Tt(n,o),n=t[0],o=t[1];var a=ft(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=zt(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=zt(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"FloorDiv")}}),Es=A({maximum_:function(r,e){var t,n=C(r,"a","maximum"),o=C(e,"b","maximum");return t=Tt(n,o),n=t[0],o=t[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),ft(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Ym=A({maximumStrict_:function(r,e){var t=C(r,"a","maximumStrict"),n=C(e,"b","maximumStrict");return wt(t.shape,n.shape,"Error in maximumStrict: "),t.maximum(n)}}),Xl=A({minimum_:function(r,e){var t,n=C(r,"a","minimum"),o=C(e,"b","minimum");return t=Tt(n,o),n=t[0],o=t[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),ft(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),Jm=A({minimumStrict_:function(r,e){var t=C(r,"a","minimumStrict"),n=C(e,"b","minimumStrict");return wt(t.shape,n.shape,"Error in minimumStrict: "),t.minimum(n)}}),Qm=A({mod_:function(r,e){var t,n=C(r,"a","mod"),o=C(e,"b","mod");t=Tt(n,o),n=t[0],o=t[1];var a=ft(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=zt(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),h=zt(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),Zm=A({modStrict_:function(r,e){var t=C(r,"a","modStrict"),n=C(e,"b","modStrict");return wt(t.shape,n.shape,"Error in modStrict: "),t.mod(n)}}),ne=A({mul_:function(r,e){var t,n=C(r,"a","mul"),o=C(e,"b","mul");t=Tt(n,o),n=t[0],o=t[1];var a=ft(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),h=zt(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=zt(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),t0=A({mulStrict_:function(r,e){var t=C(r,"a","mul"),n=C(e,"b","mul");return wt(t.shape,n.shape,"Error in multiplyStrict: "),t.mul(n)}}),ua=A({pow_:function(r,e){var t,n=C(r,"base","pow"),o=C(e,"exp","pow");t=Tt(n,o),n=t[0],o=t[1];var a=ft(n.shape,o.shape),i=[n,o];return T.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var f=l.toFloat(),d=s.mul(f.mul(c.pow(f.sub(H(1))))),p=zt(c.shape,a);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var f=c.greater(0),d=c.log().where(f,mt(c)),p=s.mul(h.mul(d)),g=zt(l.shape,a);return g.length>0&&(p=p.sum(g)),p.reshape(l.shape)}}},"Pow",{},i,[!0])}}),e0=A({powStrict_:function(r,e){return wt(r.shape,e.shape,"Error in powStrict: "),r.pow(e)}}),n0=A({squaredDifferenceStrict_:function(r,e){var t=C(r,"a","squaredDifferenceStrict"),n=C(e,"b","squaredDifferenceStrict");return wt(t.shape,n.shape,"Error in squaredDifferenceStrict: "),t.squaredDifference(n)}}),$t=A({sub_:function(r,e){var t,n=C(r,"a","sub"),o=C(e,"b","sub");t=Tt(n,o),n=t[0],o=t[1];var a=ft(n.shape,o.shape);return T.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=zt(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=zt(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),r0=A({subStrict_:function(r,e){var t=C(r,"a","subStrict"),n=C(e,"b","subStrict");return wt(t.shape,n.shape,"Error in subStrict: "),t.sub(n)}}),Yl=A({equal_:function(r,e){var t,n=C(r,"a","equal"),o=C(e,"b","equal");return t=Tt(n,o),n=t[0],o=t[1],ft(n.shape,o.shape),T.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),o0=A({equalStrict_:function(r,e){var t=C(r,"a","equalStrict"),n=C(e,"b","equalStrict");return wt(t.shape,n.shape,"Error in equalStrict: "),t.equal(n)}}),a0=A({greater_:function(r,e){var t,n=C(r,"a","greater"),o=C(e,"b","greater");return t=Tt(n,o),n=t[0],o=t[1],ft(n.shape,o.shape),T.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),Jl=A({greaterEqual_:function(r,e){var t,n=C(r,"a","greaterEqual"),o=C(e,"b","greaterEqual");return t=Tt(n,o),n=t[0],o=t[1],ft(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return mt(s)},b:function(){return mt(u)}}},"GreaterEqual")}}),i0=A({greaterEqualStrict_:function(r,e){var t=C(r,"a","greaterEqualStrict"),n=C(e,"b","greaterEqualStrict");return wt(t.shape,n.shape,"Error in greaterEqualStrict: "),t.greaterEqual(n)}}),s0=A({greaterStrict_:function(r,e){var t=C(r,"a","greaterStrict"),n=C(e,"b","greaterStrict");return wt(t.shape,n.shape,"Error in greaterStrict: "),t.greater(n)}}),u0=A({less_:function(r,e){var t,n=C(r,"a","less"),o=C(e,"b","less");return t=Tt(n,o),n=t[0],o=t[1],ft(n.shape,o.shape),T.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),c0=A({lessEqual_:function(r,e){var t,n=C(r,"a","lessEqual"),o=C(e,"b","lessEqual");return t=Tt(n,o),n=t[0],o=t[1],ft(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),l0=A({lessEqualStrict_:function(r,e){var t=C(r,"a","lessEqualStrict"),n=C(e,"b","lessEqualStrict");return wt(t.shape,n.shape,"Error in lessEqualStrict: "),t.lessEqual(n)}}),h0=A({lessStrict_:function(r,e){var t=C(r,"a","lessStrict"),n=C(e,"b","lessStrict");return wt(t.shape,n.shape,"Error in lessStrict: "),t.less(n)}}),f0=A({notEqual_:function(r,e){var t,n=C(r,"a","notEqual"),o=C(e,"b","notEqual");return t=Tt(n,o),n=t[0],o=t[1],ft(n.shape,o.shape),T.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),d0=A({notEqualStrict_:function(r,e){var t=C(r,"a","notEqualStrict"),n=C(e,"b","notEqualStrict");return wt(t.shape,n.shape,"Error in notEqualStrict: "),t.notEqual(n)}});function sc(r,e){for(var t=[],n=r;n<e;++n)t.push(n);return t}function uc(r){for(var e=[],t=0;t<r.length;++t)for(var n=0;n<r[t].length;++n)e.push(r[t][n]);return e}var ks=A({gather_:function(r,e,t){t===void 0&&(t=0);var n=C(r,"x","gather"),o=C(e,"indices","gather","int32");t=Vt(t,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],h=1,f=1,d=0;d<u;d++)l.push(i.shape[d]),h*=i.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<i.rank;d++)l.push(i.shape[d]),f*=i.shape[d];return{batchSize:h,sliceSize:f,dimSize:c,outputShape:l}}(n,o,t);return T.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),t);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,h=c.slice(0,t),f=h.length,d=c.slice(t,c.length).slice(1),p=d.length,g=sc(0,f),v=sc(f+1,f+1+p),m=uc([h,[l],d]),w=i.reshape(m),b=u.reshape([l]),y=uc([[f],g,v]),x=w.transpose(y),_=Ql(x,b,n.shape[t]),I=hs(y);return _=_.transpose(I)},indices:function(){return u}}},"Gather",{axis:t}).reshape(a.outputShape)}}),Ql=A({unsortedSegmentSum_:function(r,e,t){var n=C(r,"x","unsortedSegmentSum"),o=C(e,"segmentIds","unsortedSegmentSum","int32");return E(Ft(t),function(){return"numSegments must be of dtype int"}),T.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,t);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Es(c,mt(c)),h=ks(u,l),f=Jl(c,H(0,"int32")),d=h.rank-f.rank,p=0;p<d;++p)f=ye(f,p+1);f=Ca(f,Lr(h.shape,"bool"));var g=mt(h);return Hn(f,h,g)}(a,s)}}})}}),p0=function(r,e,t){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,f,d,p,g;return X(this,function(v){switch(v.label){case 0:for(n=C(r,"tensor","boolMask"),o=C(e,"mask","boolMask","bool"),a=t??0,i=o.rank,s=n.shape,E(i>0,function(){return"mask cannot be scalar"}),wt(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),h=n.reshape(l),f=o.reshape([-1]),[4,ql(f)];case 1:return d=v.sent(),p=d.squeeze([1]),g=ks(h,p,a),r!==n&&n.dispose(),e!==o&&o.dispose(),p.dispose(),h.dispose(),f.dispose(),d.dispose(),[2,g]}})})};function Zl(r,e,t,n,o,a,i){a===void 0&&(a="NHWC"),E(r.length===e.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+e.rank+") must match"});var s=r,u=e,c=!1;e.rank===3&&(c=!0,u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(t.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+t.rank});var l=a==="NHWC"?s[3]:s[1],h=a==="NHWC"?u.shape[3]:u.shape[1];E(l===t.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+t.shape[2]+"."}),E(h===t.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+t.shape[3]+"."}),i!=null&&E(Ft(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=gs(a),d=Xn(s,t.shape,n,1,o,i,!1,f),p=T.runKernelFunc(function(g,v){var m=g.conv2dDerInput(u,t,d);return v([t,u]),m},{dy4D:u,filter:t},function(g,v){var m=v[0],w=v[1];return{dy4D:function(){return Ce(g,m,n,o,a,1,i)},filter:function(){return Rs(g,w,m.shape,n,o,a,i)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function pi(r){var e=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),t=e[0],n=e[1],o=e[2];return t===1&&n===1&&o===1}function th(r,e,t,n,o){E(r.length===e.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+e.rank+") must match"});var a=r,i=e,s=!1;e.rank===4&&(s=!0,i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(t.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+t.rank}),E(u===t.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+t.shape[3]+"."}),E(c===t.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+t.shape[4]+"."});var l=aa(a,t.shape,n,1,o),h=T.runKernelFunc(function(f){return f.conv3dDerInput(i,t,l)},{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var v0=A({conv1d_:function(r,e,t,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=C(r,"x","conv1d"),u=C(e,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Ft(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(le(t,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+t+" and dilation '"+a+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=Ce(f,h,[1,t],n,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),Ce=A({conv2d_:function(r,e,t,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=C(r,"x","conv2d"),u=C(e,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Ft(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=o==="NHWC"?c.shape[3]:c.shape[1];E(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),E(le(t,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"});var f=gs(o),d=Xn(c.shape,u.shape,t,a,n,i,!1,f),p=[u,c],g=T.runKernelFunc(function(v,m){var w=v.conv2d(c,u,d);return m([u,c]),w},{x:c,filter:u},function(v,m){var w=m,b=w[0],y=w[1];return E(Mr(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return eh(y.shape,v,b,t,n,o)},filter:function(){return Rs(y,v,b.shape,t,n,o)}}},"Conv2D",d,p);return l?g.as3D(g.shape[1],g.shape[2],g.shape[3]):g}}),g0=A({conv3d_:function(r,e,t,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=C(r,"x","conv3d"),s=C(e,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(f,d){return pi(f)||pi(d)}(t,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=aa(u.shape,s.shape,t,a,n),h=T.runKernelFunc(function(f,d){var p=f.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(f,d){E(pi(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var p=d[0],g=d[1];return{x:function(){return th(p.shape,f,g,t,n)},$filter:function(){return function(v,m,w,b,y){var x=v;v.rank===4&&(x=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var _=m;_.rank===4&&(_=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3])),E(x.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+x.shape+"."}),E(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),E(w.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+w+"."}),E(x.shape[4]===w[3],function(){return"Error in conv3dDerFilter: depth of input "+x.shape[4]+") must match input depth in filter ("+w[3]+"."}),E(_.shape[4]===w[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+w[4]+")."});var I=aa(x.shape,w,b,1,y);return T.runKernelFunc(function(S){return S.conv3dDerFilter(x,_,I)},{x5D:x,dy5D:_})}(p,f,g.shape,t,n)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Rs=A({conv2dDerFilter_:function(r,e,t,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=e;u.rank===3&&(u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(t.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+t+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===t[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+t[2]+"."}),E(l===t[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+t[3]+")."}),i!=null&&E(Ft(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=gs(a),f=Xn(s.shape,t,n,1,o,i,!1,h);return T.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,f)},{x4D:s,dy4D:u})}}),eh=A({conv2dDerInput_:Zl}),Ea=A({depthwiseConv2d_:function(r,e,t,n,o,a,i){a===void 0&&(a=[1,1]);var s=C(r,"x","depthwiseConv2d"),u=C(e,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),E(le(t,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"}),i!=null&&E(Ft(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=Xn(c.shape,u.shape,t,a,n,i,!0),f=[c,u],d=T.runKernelFunc(function(p,g){var v=p.depthwiseConv2D(c,u,h);return g([c,u]),v},{x:c,filter:u},function(p,g){E(Mr(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=g[0],m=g[1];return{x:function(){return nh(v.shape,p,m,h)},filter:function(){return rh(v,p,m.shape,h)}}},"DepthwiseConv2dNative",h,f);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),nh=A({depthwiseConv2dDerInput_:function(r,e,t,n){var o=e,a=!1;e.rank===3&&(a=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=T.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,t,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),rh=A({depthwiseConv2dDerFilter_:function(r,e,t,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=e;return a.rank===3&&(a=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),T.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),Ss=A({separableConv2d_:function(r,e,t,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=C(r,"x","separableConv2d"),u=C(e,"depthwiseFilter","separableConv2d"),c=C(t,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var f=u.shape[2],d=u.shape[3];E(c.shape[2]===f*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+f*d+", but got "+c.shape[2]+"."});var p=Ea(l,u,n,o,i,a),g=Ce(p,c,1,"valid",i);return h?g.as3D(g.shape[1],g.shape[2],g.shape[3]):g}}),m0=A({conv2dTranspose_:function(r,e,t,n,o,a){return Zl(t,C(r,"x","conv2dTranspose"),C(e,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),y0=A({conv3dTranspose_:function(r,e,t,n,o){return th(t,C(r,"x","conv3dTranspose"),C(e,"filter","conv3dTranspose"),n,o)}}),ka=A({matMul_:function(r,e,t,n){var o;t===void 0&&(t=!1),n===void 0&&(n=!1);var a=C(r,"a","matMul"),i=C(e,"b","matMul");o=Tt(a,i),a=o[0],i=o[1];var s=t?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=t?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),f=i.shape.slice(0,-2),d=Y(h),p=Y(f);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),E(jt(h,f),function(){return"Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+t+" and transposeB="+n+" must match."});var g=a.shape.slice(0,-2).concat([c,l]),v=t?a.as3D(d,s,c):a.as3D(d,c,s),m=n?i.as3D(p,l,u):i.as3D(p,u,l),w={transposeA:t,transposeB:n};return T.runKernelFunc(function(b,y){var x=b.batchMatMul(v,m,t,n);return y([v,m]),x},{a:v,b:m},function(b,y){var x=y,_=x[0],I=x[1];return t||n?!t&&n?{a:function(){return b.matMul(I,!1,!1)},b:function(){return b.matMul(_,!0,!1)}}:t&&!n?{a:function(){return I.matMul(b,!1,!0)},b:function(){return _.matMul(b,!1,!1)}}:{a:function(){return I.matMul(b,!0,!0)},b:function(){return b.matMul(_,!0,!0)}}:{a:function(){return b.matMul(I,!1,!0)},b:function(){return _.matMul(b,!0,!1)}}},"BatchMatMul",w).reshape(g)}}),b0=A({dot_:function(r,e){var t=C(r,"t1","dot"),n=C(e,"t2","dot");E(!(t.rank!==1&&t.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+t.rank+" and "+n.rank+"."});var o=t.rank===1?t.size:t.shape[1],a=n.rank===1?n.size:n.shape[0];return E(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),t.rank===1&&n.rank===1?t.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():t.rank===1&&n.rank===2?t.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():t.rank===2&&n.rank===1?t.matMul(n.as2D(-1,1)).as1D():t.matMul(n.as2D(n.shape[0],n.shape[1]))}}),x0=A({outerProduct_:function(r,e){var t=C(r,"v1","outerProduct"),n=C(e,"v2","outerProduct");return E(t.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+t.rank+" and "+n.rank+"."}),t.as2D(-1,1).matMul(n.as2D(1,-1))}}),mo=A({reverse_:function(r,e){var t=C(r,"x","reverse");if(t.rank===0)return t.clone();var n=Vt(e,t.shape);return T.runKernelFunc(function(o){return o.reverse(t,n)},{$x:t},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(t)}}),w0=A({reverse1d_:function(r){var e=C(r,"x","reverse");return E(e.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+e.rank+"."}),mo(e,0)}}),_0=A({reverse2d_:function(r,e){var t=C(r,"x","reverse");return E(t.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+t.rank+"."}),mo(t,e)}}),C0=A({reverse3d_:function(r,e){var t=C(r,"x","reverse");return E(t.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+t.rank+"."}),mo(t,e)}}),E0=A({reverse4d_:function(r,e){var t=C(r,"x","reverse");return E(t.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+t.rank+"."}),mo(t,e)}});function oh(r,e,t,n,o,a){var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(le(t,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+n+"'"}),a!=null&&E(Ft(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=ao(s.shape,e,t,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&jt(c.inShape,c.outShape))return i.clone();var l=[s],h=T.runKernelFunc(function(f,d){var p=f.maxPool(s,c);return d([s,p]),p},{x:s},function(f,d){var p=d[0],g=d[1];return{x:function(){return function(v,m,w,b,y,x,_,I){var S=C(v,"dy","maxPoolBackprop"),k=C(m,"input","maxPoolBackprop"),R=C(w,"output","maxPoolBackprop");E(k.rank===S.rank,function(){return"Rank of input ("+k.rank+") does not match rank of dy ("+S.rank+")"}),E(le(y,x),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+x+"'"}),E(S.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+S.rank+"."}),E(k.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+k.rank+"."});var P=ao(k.shape,b,y,x,_,I);return T.runKernelFunc(function(D){return D.maxPoolBackprop(S,k,R,P)},{$dy:S,$input:k})}(f,p,g,e,t,n,o)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function ah(r,e,t,n,o,a){var i=C(r,"x","avgPool","float32");E(le(t,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&E(Ft(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=ao(s.shape,e,t,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&jt(c.inShape,c.outShape))return i.clone();var l=T.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(f,d,p,g,v,m){var w=C(f,"dy","avgPoolBackprop"),b=C(d,"input","avgPoolBackprop");E(b.rank===w.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+w.rank+")"}),E(le(g,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+g+" and dilations '"+v+"'"});var y=b,x=w,_=!1;b.rank===3&&(_=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),x=w.as4D(1,w.shape[0],w.shape[1],w.shape[2])),E(x.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+x.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var I=ao(y.shape,p,g,v,m),S=T.runKernelFunc(function(k){return k.avgPoolBackprop(x,y,I)},{dy4D:x,input4D:y});return _?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}(h,s,e,t,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Gt=A({maxPool_:function(r,e,t,n,o){return oh(r,e,t,1,n,o)}}),yo=A({avgPool_:function(r,e,t,n,o){return ah(r,e,t,1,n,o)}}),k0=A({pool_:function(r,e,t,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(le(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=ao(s.shape,e,a,o,n),h=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,x){var _=y.map(function(k,R){return k+(k-1)*(x[R]-1)}).map(function(k){return k-1}),I=_.map(function(k){return Math.floor(k/2)}),S=_.map(function(k,R){return k-I[R]});return _.map(function(k,R){return[I[R],S[R]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=h[0]===1&&h[1]===1,d=function(y,x,_){var I=_.map(function(M){return M[0]}),S=_.map(function(M){return M[1]}),k=y.concat(I,S),R=x.map(function(M,B){return(M-k[B]%M)%M}),P=S.map(function(M,B){return M+R[B]}),D=x.map(function(M,B){return[I[B],P[B]]}),L=x.map(function(M,B){return[0,R[B]]});return[D,L]}([l.inHeight,l.inWidth],h,c),p=d[0],g=d[1],v=f?n:"valid",m=f?s:hl(s,h,p),w=(t==="avg"?function(){return ah(m,e,a,1,v)}:function(){return oh(m,e,a,1,v)})(),b=f?w:ul(w,h,g);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),R0=A({maxPool3d_:function(r,e,t,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(le(t,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+i+"'"}),o!=null&&E(Ft(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=oa(u.shape,e,t,i,n,o,a),h=T.runKernelFunc(function(f,d){var p=f.maxPool3d(u,l);return d([u,p]),p},{x:u},function(f,d){var p=d[0],g=d[1];return{x:function(){return function(v,m,w,b,y,x,_,I){var S=C(v,"dy","maxPool3dBackprop"),k=C(m,"input","maxPool3dBackprop"),R=C(w,"output","maxPool3dBackprop"),P=S,D=k,L=R,M=!1;k.rank===4&&(M=!0,P=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),D=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),L=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3])),E(P.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+P.rank+"."}),E(D.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+D.rank+"."}),E(L.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."}),x==null&&(x=[1,1,1]),E(le(y,x),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+x+"'"}),I!=null&&E(Ft(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+I+" but got pad "+_+"."});var B=oa(D.shape,b,y,x,_,I),z=T.runKernelFunc(function(U){return U.maxPool3dBackprop(P,D,L,B)},{dy5D:P,input5D:D});return M?z.as4D(z.shape[1],z.shape[2],z.shape[3],z.shape[4]):z}(f,p,g,e,t,i,n,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),S0=A({avgPool3d_:function(r,e,t,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(le(t,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+i+"'"}),o!=null&&E(Ft(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=oa(u.shape,e,t,i,n,o,a),h=T.runKernelFunc(function(f){return f.avgPool3d(u,l)},{x:u},function(f){return{x:function(){return function(d,p,g,v,m,w,b){var y=C(d,"dy","avgPool3dBackprop"),x=C(p,"input","avgPool3dBackprop"),_=y,I=x,S=!1;x.rank===4&&(S=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),I=x.as5D(1,x.shape[0],x.shape[1],x.shape[2],x.shape[3])),E(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),E(I.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+I.rank+"."}),m==null&&(m=[1,1,1]),E(le(v,m),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"}),b!=null&&E(Ft(w),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+w+"."});var k=oa(I.shape,g,v,m,w,b),R=T.runKernelFunc(function(P){return P.avgPool3dBackprop(_,I,k)},{dy5D:_,input5D:I});return S?R.as4D(R.shape[1],R.shape[2],R.shape[3],R.shape[4]):R}(f,u,e,t,i,n,o)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),ze=A({slice_:function(r,e,t){var n,o,a=C(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof e=="number"?[e].concat(new Array(a.rank-1).fill(0)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(0)):e.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=t==null?new Array(a.rank).fill(-1):typeof t=="number"?[t].concat(new Array(a.rank-1).fill(-1)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(-1)):t).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),ev(a,n,o);var i=a.shape,s={begin:n,size:o};return T.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),I0=A({slice1d_:function(r,e,t){var n=C(r,"x","slice1d");return E(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),ze(n,[e],[t])}}),A0=A({slice2d_:function(r,e,t){var n=C(r,"x","slice2d");return E(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),ze(n,e,t)}}),ih=A({slice3d_:function(r,e,t){var n=C(r,"x","slice3d");return E(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),ze(n,e,t)}}),D0=A({slice4d_:function(r,e,t){var n=C(r,"x","slice4d");return E(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),ze(n,e,t)}});function sh(r,e,t,n,o){return e.rank<t.rank&&(e=e.reshape(ce(e.shape,n))),r.rank<t.rank&&(r=r.reshape(ce(r.shape,n))),{x:function(){var a=r.mul(t.equal(e).cast(r.dtype));return o==null?a:a.transpose(o)}}}var T0=A({all_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=C(r,"x","all","bool"),o=Vt(e,n.shape),a=o,i=He(a,n.rank);i!=null&&(n=n.transpose(i),a=je(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(t){var u=ce(s.shape,o);return s.reshape(u)}return s}}),P0=A({any_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=C(r,"x","any","bool"),o=Vt(e,n.shape),a=o,i=He(a,n.rank);i!=null&&(n=n.transpose(i),a=je(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(t){var u=ce(s.shape,o);return s.reshape(u)}return s}}),N0=A({argMax_:function(r,e){e===void 0&&(e=0);var t=C(r,"x","argMax");e==null&&(e=0);var n=Vt(e,t.shape),o=He(n,t.rank);o!=null&&(t=t.transpose(o),n=je(n.length,t.rank));var a={axis:n[0]},i=[t];return T.runKernelFunc(function(s,u){var c=s.argMax(t,n[0]);return u([t]),c},{x:t},function(s,u){var c=u[0];return{x:function(){return mt(c)}}},"ArgMax",a,i)}}),O0=A({argMin_:function(r,e){e===void 0&&(e=0);var t=C(r,"x","argMin");e==null&&(e=0);var n=Vt(e,t.shape),o=He(n,t.rank);return o!=null&&(t=t.transpose(o),n=je(n.length,t.rank)),T.runKernelFunc(function(a,i){var s=a.argMin(t,n[0]);return i([t]),s},{$x:t},function(a,i){var s=i[0];return{$x:function(){return mt(s)}}})}}),F0=A({logSumExp_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=C(r,"x","logSumExp"),o=Vt(e,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(t){var u=ce(s.shape,o);return s.reshape(u)}return s}}),Ra=A({max_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=C(r,"x","max"),o=n,a=Vt(e,n.shape),i=a,s=He(i,n.rank);s!=null&&(n=n.transpose(s),i=je(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,f){var d=h.max(n,i);return f([o,d]),d},{x:n},function(h,f){return sh(h,f[1],f[0],a,s)},"Max",{axes:i},u,[!0]);if(t){var l=ce(c.shape,a);c=c.reshape(l)}return c}}),M0=A({mean_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=C(r,"x","mean"),o=Vt(e,n.shape),a=Y(Qt(n.shape,o)[1]);return wa(function(i){var s=H(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(e,t),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Lr(i.shape,"float32")).div(a)}}})(n)}}),B0=A({min_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=C(r,"x","min"),o=n,a=Vt(e,n.shape),i=a,s=He(i,n.rank);s!=null&&(n=n.transpose(s),i=je(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,f){var d=h.min(n,i);return f([o,d]),d},{x:n},function(h,f){return sh(h,f[1],f[0],a,s)},"Min",{axes:i},u,[!0]);if(t){var l=ce(c.shape,a);c=c.reshape(l)}return c}}),L0=A({moments_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=Vt(e,(r=C(r,"x","moments")).shape),o=r.mean(n,t),a=o.shape;t||(a=ce(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,t)}}}),uh=A({sum_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=C(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=Vt(e,n.shape);return wa(function(a){var i=He(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=je(s.length,a.rank));var c=function(d){var p=a.shape.slice();return o.forEach(function(g){p[g]=1}),d.reshape(p).mul(Lr(a.shape,"float32"))},l={axes:s},h=T.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(t){var f=ce(h.shape,o);h=h.reshape(f)}return{value:h,gradFunc:c}})(n)}}),W0=A({prod_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=C(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=Vt(e,n.shape),a=He(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=je(i.length,n.rank));var u=T.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(t){var c=ce(u.shape,o);u=u.reshape(c)}return u}}),ch=A({elu_:function(r){var e=C(r,"x","elu");return T.runKernelFunc(function(t,n){var o=t.elu(e);return n([o]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return T.runKernelFunc(function(a){return a.eluDer(t,o)},{dy:t,y:o})}}})}}),U0=A({leakyRelu_:function(r,e){e===void 0&&(e=.2);var t=C(r,"x","leakyRelu");return Es(H(e).mul(t),t)}}),lh=A({prelu_:function(r,e){var t=C(r,"x","prelu"),n=C(e,"alpha","prelu");return T.runKernelFunc(function(o,a){var i=o.prelu(t,n);return a([t,n]),i},{x:t,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return Hn(u,o,o.mul(s))},alpha:function(){var c=Hn(u,mt(o),o.mul(i)),l=zt(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Dt=A({relu_:function(r){var e=C(r,"x","relu");return e.dtype==="bool"?e.toInt():T.runKernelFunc(function(t,n){var o=t.relu(e);return n([e]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return t.mulStrict(o.step().toFloat())}}},"Relu")}}),hh=A({relu6_:function(r){var e=C(r,"x","relu6");return e.dtype==="bool"?e.toInt():T.runKernelFunc(function(t,n){var o=t.relu6(e);return n([e]),o},{x:e},function(t,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return t.mulStrict(a.toFloat())}}},"Relu6")}}),z0=A({selu_:function(r){var e=C(r,"x","selu");return T.runKernelFunc(function(t,n){var o=t.selu(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){var a=o.greater(H(0)),i=H(ws),s=H(_s),u=t.mul(s),c=t.mul(i).mul(o.toFloat().exp());return Hn(a,u,c)}}})}}),Rn=A({transpose_:function(r,e){var t=C(r,"x","transpose");if(e==null&&(e=t.shape.map(function(o,a){return a}).reverse()),E(t.rank===e.length,function(){return"Error in transpose: rank of input "+t.rank+" must match length of perm "+e+"."}),e.forEach(function(o){E(o>=0&&o<t.rank,function(){return"All entries in 'perm' must be between 0 and "+(t.rank-1)+" but got "+e})}),t.rank<=1)return t.clone();var n={perm:e};return T.runKernelFunc(function(o){return o.transpose(t,e)},{x:t},function(o){var a=hs(e);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),$0=A({localResponseNormalization_:function(r,e,t,n,o){e===void 0&&(e=5),t===void 0&&(t=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=C(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),E(Ft(e),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+e+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=T.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(i,e,t,n,o);return l([i,h]),h},{x4D:i},function(c,l){var h=l[0],f=l[1];return{x4D:function(){return T.runKernelFunc(function(d){return d.LRNGrad(c,h,f,e,t,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),fh=A({norm_:function(r,e,t,n){e===void 0&&(e="euclidean"),t===void 0&&(t=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(H(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=C(r,"x","norm"),e,t),a=o.shape;if(n){var i=Vt(t,r.shape);a=ce(o.shape,i)}return o.reshape(a)}}),V0=A({basicLSTMCell_:function(r,e,t,n,o,a){var i=C(r,"forgetBias","basicLSTMCell"),s=C(e,"lstmKernel","basicLSTMCell"),u=C(t,"lstmBias","basicLSTMCell"),c=C(n,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),h=C(a,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),d=f.shape[0],p=f.shape[1]/4,g=[d,p],v=f.slice([0,0],g),m=f.slice([0,p],g),w=f.slice([0,2*p],g),b=f.slice([0,3*p],g),y=v.sigmoid().mulStrict(m.tanh()).addStrict(l.mulStrict(i.add(w).sigmoid())),x=y.tanh().mulStrict(b.sigmoid());return[y,x]}}),G0=A({multiRNNCell_:function(r,e,t,n){for(var o=C(e,"data","multiRNNCell"),a=Qo(t,"c","multiRNNCell"),i=Qo(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return[h,f]}}),H0=A({movingAverage_:function(r,e,t,n,o){o===void 0&&(o=!0);var a=C(r,"v","movingAverage"),i=C(e,"x","movingAverage"),s=C(t,"decay","movingAverage");$d(a,i),E(jt(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=H(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(n!=null,function(){return"When using zeroDebias: true, step is required."});var h=C(n,"step","movingAverage");l=l.div(u.sub(ua(s,h)))}return a.add(l)}}),j0=A({stridedSlice_:function(r,e,t,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(e.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=C(r,"x","stridedSlice"),l=zu(s),h=c.shape.slice();l.forEach(function(v){e[v]=0,t[v]=1,h.splice(v,0,1)}),c=c.reshape(h);for(var f=0;f<c.rank;f++)e[f]=nv(o,e,n,c.shape,f),t[f]=rv(a,t,n,c.shape,f),n[f]=n[f]||1;var d=zu(u);d.forEach(function(v){t[v]=e[v]+1,n[v]=1});var p=vs(e,t,n),g=p.filter(function(v,m){return d.indexOf(m)===-1});return n.every(function(v){return v===1})?ze(c,e,p).reshape(g):T.runKernelFunc(function(v){return v.stridedSlice(c,e,t,n)},{$x:c}).reshape(g)}}),q0=A({topk_:function(r,e,t){e===void 0&&(e=1),t===void 0&&(t=!0);var n=C(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(e>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+e);var a=T.runKernelFunc(function(i){return i.topk(n,e,t)},{$x:n});return{values:a[0],indices:a[1]}}}),K0=A({scatterND_:function(r,e,t){var n=C(r,"indices","scatterND","int32"),o=C(e,"updates","scatterND");return tv(o,n,t),T.runKernelFunc(function(a){return a.scatterND(n,o,t)},{indices:n,updates:o},null,"ScatterNd",{shape:t})}}),Is=A({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var e=r.shape[r.shape.length-1],t=r.size/e,n=r.as2D(t,e);return T.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),ca=A({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var e=r.shape[r.shape.length-1],t=r.size/e,n=r.as2D(t,e);return T.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),As=A({rfft_:function(r,e){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var t,n=r.shape[r.shape.length-1],o=r.size/n;if(e!=null&&e<n){var a=r.shape.map(function(m){return 0}),i=r.shape.map(function(m){return m});i[r.shape.length-1]=e,t=r.slice(a,i),n=e}else if(e!=null&&e>n){var s=r.shape.map(function(m){return m});s[r.shape.length-1]=e-n,t=r.concat(Rt(s),r.shape.length-1),n=e}else t=r;var u=t.zerosLike(),c=Xt(t,u).as2D(o,n),l=Is(c),h=Math.floor(n/2)+1,f=be(l),d=Me(l),p=f.split([h,n-h],f.shape.length-1),g=d.split([h,n-h],d.shape.length-1),v=t.shape.slice();return v[t.shape.length-1]=h,Xt(p[0],g[0]).reshape(v)}}),dh=A({irfft_:function(r){var e=r.shape[r.shape.length-1],t=r.size/e;if(e<=2){var n=r.as2D(t,e),o=ca(n);return be(o)}var a=[t,2*(e-1)],i=be(r).as2D(t,e),s=Me(r).as2D(t,e),u=i.slice([0,1],[t,e-2]).reverse(1),c=s.slice([0,1],[t,e-2]).reverse(1).mul(H(-1)),l=i.concat(u,1),h=s.concat(c,1);return n=Xt(l,h).as2D(a[0],a[1]),o=ca(n),be(o)}}),X0=Object.freeze({fft:Is,ifft:ca,rfft:As,irfft:dh}),Y0=A({sparseToDense_:function(r,e,t,n){n===void 0&&(n=0);var o=C(r,"sparseIndices","sparseToDense","int32"),a=C(e,"sparseValues","sparseToDense"),i=C(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,f=s.rank>1?s.shape[1]:1;if(c.length!==f)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+f+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,t,i),T.runKernelFunc(function(s){return s.sparseToDense(o,a,t,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),J0=A({gatherND_:function(r,e){var t=C(e,"indices","gatherND","int32"),n=C(r,"x","gatherND");return T.runKernelFunc(function(o){return o.gatherND(n,t)},{x:n,indices:t},null,"GatherNd")}}),Q0=A({diag_:function(r){var e=C(r,"x","diag").flatten(),t=r.shape.concat(r.shape);return T.runKernelFunc(function(n){return n.diag(e)},{$x:e}).reshape(t)}}),Z0=A({dropout_:function(r,e,t,n){var o=C(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(e>=0&&e<1,function(){return"rate must be a float in the range [0, 1), but got "+e+"."}),e===0)return r instanceof At?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(jt(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(o,t),i=1-e,s=ll(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function ph(r,e,t){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=e-t*Math.cos(i)}return Bt(o,"float32")}var Ds=A({hannWindow_:function(r){return ph(r,.5,.5)}}),vh=A({hammingWindow_:function(r){return ph(r,.54,.46)}}),Ts=A({frame_:function(r,e,t,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+e<=r.size;)i.push(ze(r,a,e)),a+=t;if(n)for(;a<r.size;){var s=a+e-r.size,u=Wt([ze(r,a,e-s),Ue([s],o)]);i.push(u),a+=t}return i.length===0?xn([],[0,e]):Wt(i).as2D(i.length,e)}}),gh=A({stft_:function(r,e,t,n,o){var a;o===void 0&&(o=Ds),n==null&&(a=e,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Ts(r,e,t),s=ne(i,o(e)),u=[],c=0;c<i.shape[0];c++)u.push(As(s.slice([c,0],[1,e]),n));return Wt(u)}}),ty=Object.freeze({hannWindow:Ds,hammingWindow:vh,frame:Ts,stft:gh}),ee,ey=function(r,e,t){return t===void 0&&(t=1),K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,f,d,p,g,v;return X(this,function(m){switch(m.label){case 0:return n=C(r,"predictions","inTopK"),o=C(e,"targets","inTopK"),E(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),E(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),wt(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],E(t>0&&t<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+t}),[4,n.data()];case 1:return i=m.sent(),[4,o.data()];case 2:for(s=m.sent(),u=[i.length/a,a],l=u[1],h=no("bool",c=u[0]),f=0;f<c;f++){for(d=f*l,p=i.subarray(d,d+l),g=[],v=0;v<p.length;v++)g.push({value:p[v],index:v});for(g.sort(function(w,b){return b.value-w.value}),h[f]=0,v=0;v<t;v++)if(g[v].index===s[f]){h[f]=1;break}}return r!==n&&n.dispose(),e!==o&&o.dispose(),[2,Jt(h,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(ee||(ee={}));var ny=A({absoluteDifference_:function(r,e,t,n){n===void 0&&(n=ee.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","absoluteDifference"),a=C(e,"predictions","absoluteDifference"),i=null;t!=null&&(i=C(t,"weights","absoluteDifference")),wt(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return sn(s,i,n)}}),sn=A({computeWeightedLoss_:function(r,e,t){t===void 0&&(t=ee.SUM_BY_NONZERO_WEIGHTS);var n=C(r,"losses","computeWeightedLoss"),o=null;e!=null&&(o=C(e,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(t===ee.NONE)return a;if(t===ee.SUM)return a.sum();if(t===ee.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(H(i)):s}if(t===ee.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(H(n.size));var u=o.mul(Lr(n.shape)).notEqual(H(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+t)}}),ry=A({cosineDistance_:function(r,e,t,n,o){o===void 0&&(o=ee.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","cosineDistance"),i=C(e,"predictions","cosineDistance"),s=null;n!=null&&(s=C(n,"weights","cosineDistance")),wt(a.shape,i.shape,"Error in cosineDistance: ");var u=H(1).sub(a.mul(i).sum(t,!0));return sn(u,s,o)}}),oy=A({hingeLoss_:function(r,e,t,n){n===void 0&&(n=ee.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","hingeLoss"),a=C(e,"predictions","hingeLoss"),i=null;t!=null&&(i=C(t,"weights","hingeLoss")),wt(o.shape,a.shape,"Error in hingeLoss: ");var s=H(1);o=H(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return sn(u,i,n)}}),ay=A({huberLoss_:function(r,e,t,n,o){n===void 0&&(n=1),o===void 0&&(o=ee.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","huberLoss"),i=C(e,"predictions","huberLoss"),s=null;t!=null&&(s=C(t,"weights","huberLoss")),wt(a.shape,i.shape,"Error in huberLoss: ");var u=H(n),c=i.sub(a).abs(),l=Xl(c,u),h=c.sub(l),f=H(.5).mul(l.square()).add(u.mul(h));return sn(f,s,o)}}),iy=A({logLoss_:function(r,e,t,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=ee.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","logLoss"),i=C(e,"predictions","logLoss"),s=null;t!=null&&(s=C(t,"weights","logLoss")),wt(a.shape,i.shape,"Error in logLoss: ");var u=H(1),c=H(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return sn(l,s,o)}}),sy=A({meanSquaredError_:function(r,e,t,n){n===void 0&&(n=ee.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","meanSquaredError"),a=C(e,"predictions","meanSquaredError"),i=null;t!=null&&(i=C(t,"weights","meanSquaredError")),wt(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return sn(s,i,n)}}),uy=A({sigmoidCrossEntropy_:function(r,e,t,n,o){n===void 0&&(n=0),o===void 0&&(o=ee.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"multiClassLabels","sigmoidCrossEntropy"),i=C(e,"logits","sigmoidCrossEntropy"),s=null;if(t!=null&&(s=C(t,"weights","sigmoidCrossEntropy")),wt(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=H(n),c=H(1),l=H(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var h=function(f,d){var p=C(f,"labels","sigmoidCrossEntropyWithLogits"),g=C(d,"logits","sigmoidCrossEntropyWithLogits");wt(p.shape,g.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=g.relu(),m=g.mul(p),w=g.abs().neg().exp().log1p();return v.sub(m).add(w)}(a,i);return sn(h,s,o)}}),cy=A({softmaxCrossEntropy_:function(r,e,t,n,o){n===void 0&&(n=0),o===void 0&&(o=ee.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"onehotLabels","softmaxCrossEntropy"),i=C(e,"logits","softmaxCrossEntropy"),s=null;if(t!=null&&(s=C(t,"weights","softmaxCrossEntropy")),wt(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=H(n),c=H(1),l=H(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var h=function(f,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return wa(function(g,v,m){var w=v.logSumExp([p],!0),b=v.toFloat().sub(w);return m([g,b]),{value:b.mul(g).neg().sum([p]),gradFunc:function(y,x){var _=x[0],I=x[1],S=ce(y.shape,[p]);return[y.reshape(S).mul(_.toFloat().sub(I.exp())),y.reshape(S).mul(I.exp().sub(_.toFloat()))]}}})(f,d)}(a,i);return sn(h,s,o)}}),ly=Object.freeze({get Reduction(){return ee},absoluteDifference:ny,computeWeightedLoss:sn,cosineDistance:ry,hingeLoss:oy,huberLoss:ay,logLoss:iy,meanSquaredError:sy,sigmoidCrossEntropy:uy,softmaxCrossEntropy:cy});function cc(r,e){return e===void 0&&(e=!1),T.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var t=r.shape[0],n=r.shape[1],o=cl(t),a=r.clone(),i=xn([[1]],[1,1]),s=i.clone(),u=t>=n?n:t,c=function(h){var f,d=a,p=s,g=o;f=T.tidy(function(){var v=a.slice([h,h],[t-h,1]),m=v.norm(),w=a.slice([h,h],[1,1]),b=xn([[-1]]).where(w.greater(0),xn([[1]])),y=w.sub(b.mul(m)),x=v.div(y);s=x.shape[0]===1?i.clone():i.concat(x.slice([1,0],[x.shape[0]-1,x.shape[1]]),0);var _=b.matMul(y).div(m).neg(),I=a.slice([h,0],[t-h,n]),S=_.mul(s);if(h===0)a=I.sub(S.matMul(s.transpose().matMul(I)));else{var k=I.sub(S.matMul(s.transpose().matMul(I)));a=a.slice([0,0],[h,n]).concat(k,0)}var R=o.slice([0,h],[t,o.shape[1]-h]);if(h===0)o=R.sub(R.matMul(s).matMul(S.transpose()));else{var P=R.sub(R.matMul(s).matMul(S.transpose()));o=o.slice([0,0],[t,h]).concat(P,1)}return[s,a,o]}),s=f[0],a=f[1],o=f[2],ue([d,p,g])},l=0;l<u;++l)c(l);return!e&&t>n&&(o=o.slice([0,0],[t,n]),a=a.slice([0,0],[n,n])),[o,a]})}var hy=A({bandPart_:function(r,e,t){if(e%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+e+".");if(t%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+t+".");var n=C(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(e<=i))throw new Error("bandPart(): numLower ("+e+") must not be greater than the number of rows ("+i+").");if(!(t<=s))throw new Error("bandPart(): numUpper ("+t+") must not be greater than the number of columns ("+s+").");e<0&&(e=i),t<0&&(t=s);var u=Zo(0,i,1,"int32").reshape([-1,1]),c=Zo(0,s,1,"int32"),l=$t(u,c),h=Ca(l.lessEqual(H(+e,"int32")),l.greaterEqual(H(-t,"int32"))),f=Rt([i,s],n.dtype);return me(Ut(n.reshape([-1,i,s])).map(function(d){return Hn(h,d,f)})).reshape(o)}}),fy=A({gramSchmidt_:function(r){var e;if(Array.isArray(r)){e=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var t=r[0].shape[0],n=function(u){E(r[u].shape[0]===t,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+t+")"})},o=1;o<r.length;++o)n(o)}else e=!0,r=ds(r,r.shape[0],0).map(function(u){return fl(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(T.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var h=uh(a[l].mulStrict(c)).mul(a[l]);c=c.sub(h)}return c.div(fh(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return e?me(a,0):a}}),dy=A({qr_:function(r,e){if(e===void 0&&(e=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return cc(r,e);var t=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=Ut(r.reshape([t,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=cc(i,e),u=s[0],c=s[1];o.push(u),a.push(c)}),[me(o,0).reshape(r.shape),me(a,0).reshape(r.shape)]}}),py=Object.freeze({bandPart:hy,gramSchmidt:fy,qr:dy});function Sa(r,e,t,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return t=Math.min(t,i),E(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(e.rank===1,function(){return"scores must be a 1D tensor"}),E(e.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+e.shape[0]}),E(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:t,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var vy=A({resizeBilinear_:function(r,e,t){t===void 0&&(t=!1);var n=C(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(e.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+e+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=e[0],s=e[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,t)},{x:o},function(c,l){return{x:function(){return T.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],t)},{})}}},"ResizeBilinear",{alignCorners:t,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),gy=A({resizeNearestNeighbor_:function(r,e,t){t===void 0&&(t=!1);var n=C(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(e.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+"."}),E(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=e[0],s=e[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,t)},{batchImages:o},function(c,l){return{batchImages:function(){return T.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],t)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),my=A({nonMaxSuppression_:function(r,e,t,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=C(r,"boxes","nonMaxSuppression"),i=C(e,"scores","nonMaxSuppression"),s=Sa(a,i,t,n,o);t=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:t,iouThreshold:n,scoreThreshold:o};return T.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,t,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),yy=function(r,e,t,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),K(this,void 0,void 0,function(){var a,i,s,u,c,l,h;return X(this,function(f){switch(f.label){case 0:return a=C(r,"boxes","nonMaxSuppressionAsync"),i=C(e,"scores","nonMaxSuppressionAsync"),s=Sa(a,i,t,n,o),t=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=f.sent(),c=u[0],l=u[1],h=ms(c,l,t,n,o),a!==r&&a.dispose(),i!==e&&i.dispose(),[2,h]}})})},by=A({nonMaxSuppressionWithScore_:function(r,e,t,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=C(r,"boxes","nonMaxSuppression"),s=C(e,"scores","nonMaxSuppression"),u=Sa(i,s,t,n,o,a),c={maxOutputSize:t=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=T.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),xy=function(r,e,t,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),K(this,void 0,void 0,function(){var i,s,u,c,l,h,f;return X(this,function(d){switch(d.label){case 0:return i=C(r,"boxes","nonMaxSuppressionAsync"),s=C(e,"scores","nonMaxSuppressionAsync"),u=Sa(i,s,t,n,o,a),t=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=d.sent(),l=c[0],h=c[1],f=ys(l,h,t,n,o,a),i!==r&&i.dispose(),s!==e&&s.dispose(),[2,f]}})})},wy=A({cropAndResize_:function(r,e,t,n,o,a){var i=C(r,"image","cropAndResize"),s=C(e,"boxes","cropAndResize","float32"),u=C(t,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),E(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),T.runKernelFunc(function(l,h){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),Ps=Object.freeze({resizeBilinear:vy,resizeNearestNeighbor:gy,nonMaxSuppression:my,nonMaxSuppressionAsync:yy,nonMaxSuppressionWithScore:by,nonMaxSuppressionWithScoreAsync:xy,cropAndResize:wy}),Ns=function(r,e){return!(r>0)||e==="linear"},Os=function(r,e,t){if(t==null||t==="linear")return r;if(t==="relu")return r.mul(e.step());throw new Error("Gradient for activation "+t+" has not been implemented yet.")},Fs=function(r,e){var t=e,n=zt(r.shape,e.shape);return n.length>0&&(t=t.sum(n)),t.reshape(r.shape)},Ms=function(r,e,t){if(e==="linear")return r;if(e==="relu")return Dt(r);if(e==="elu")return ch(r);if(e==="relu6")return hh(r);if(e==="prelu")return lh(r,t);throw new Error("Unknown fused activation "+e+".")},_y=A({fusedMatMul_:function(r){var e,t=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(Ns(T.state.gradientDepth,l)===!1){var f=ka(t,n,a,s);return u!=null&&(f=lt(f,u)),Ms(f,l,h)}var d=C(t,"a","fused matMul"),p=C(n,"b","fused matMul");e=Tt(d,p),d=e[0],p=e[1];var g=a?d.shape[d.rank-2]:d.shape[d.rank-1],v=s?p.shape[p.rank-1]:p.shape[p.rank-2],m=a?d.shape[d.rank-1]:d.shape[d.rank-2],w=s?p.shape[p.rank-2]:p.shape[p.rank-1],b=d.shape.slice(0,-2),y=p.shape.slice(0,-2),x=Y(b),_=Y(y);E(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),E(jt(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),E(g===v,function(){return"Error in fused matMul: inner shapes ("+g+") and ("+v+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var I,S,k=d.shape.slice(0,-2).concat([m,w]),R=a?d.as3D(x,g,m):d.as3D(x,m,g),P=s?p.as3D(_,w,v):p.as3D(_,v,w);u!=null&&ft(k,(I=Tt(I=C(u,"bias","fused matMul"),d)[0]).shape),h!=null&&(S=C(h,"prelu weights","fused matMul"));var D={a:R,b:P};u!=null&&(D.bias=I),h!=null&&(D.preluActivationWeights=S);var L=[R,P];return T.runKernelFunc(function(M,B){var z=M.fusedBatchMatMul({a:R,b:P,transposeA:a,transposeB:s,bias:I,activation:l,preluActivationWeights:S});return B([R,P,z]),z},D,function(M,B){var z=B[0],U=B[1],W=B[2],V=Os(M,W,l),G={};return u!=null&&(G={bias:function(){return Fs(I,V)}}),Object.assign(a||s?!a&&s?{a:function(){return V.matMul(U,!1,!1)},b:function(){return V.matMul(z,!0,!1)}}:a&&!s?{a:function(){return U.matMul(V,!1,!0)},b:function(){return z.matMul(V,!1,!1)}}:{a:function(){return U.matMul(V,!0,!0)},b:function(){return V.matMul(z,!0,!0)}}:{a:function(){return V.matMul(U,!1,!0)},b:function(){return z.matMul(V,!0,!1)}},G)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},L,[!0]).reshape(k)}}),Cy=A({fusedConv2d_:function(r){var e=r.x,t=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,d=r.preluActivationWeights;if(f=f||"linear",Ns(T.state.gradientDepth,f)===!1){var p=Ce(e,t,n,o,i,u,c);return l!=null&&(p=lt(p,l)),Ms(p,f,d)}var g=C(e,"x","conv2d"),v=C(t,"filter","conv2d"),m=g,w=!1;g.rank===3&&(w=!0,m=g.as4D(1,g.shape[0],g.shape[1],g.shape[2])),E(m.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+m.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(Ft(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(m.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+m.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(le(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,y,x=Xn(m.shape,v.shape,n,u,o,c);l!=null&&(b=Tt(b=C(l,"bias","fused conv2d"),g)[0],ft(x.outShape,b.shape)),d!=null&&(y=C(d,"prelu weights","fused conv2d"));var _={x:m,filter:v};l!=null&&(_.bias=b),d!=null&&(_.preluActivationWeights=y);var I=[v,m],S=T.runKernelFunc(function(k,R){var P=k.fusedConv2d({input:m,filter:v,convInfo:x,bias:b,activation:f,preluActivationWeights:y});return R([v,m,P]),P},_,function(k,R){var P=R,D=P[0],L=P[1],M=P[2],B=Os(k,M,f);E(Mr(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var z={};return l!=null&&(z={bias:function(){return Fs(b,B)}}),Object.assign({x:function(){return eh(L.shape,B,D,n,o)},filter:function(){return Rs(L,B,D.shape,n,o)}},z)},"FusedConv2D",{convInfo:x,activation:f},I,[!0]);return w?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),Ey=A({fusedDepthwiseConv2d_:function(r){var e=r.x,t=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,d=r.preluActivationWeights;if(Ns(T.state.gradientDepth,f)===!1){var p=Ea(e,t,n,o,i,u,c);return l!=null&&(p=lt(p,l)),Ms(p,f,d)}var g=C(e,"x","depthwiseConv2d"),v=C(t,"filter","depthwiseConv2d"),m=g,w=!1;g.rank===3&&(w=!0,m=g.as4D(1,g.shape[0],g.shape[1],g.shape[2])),E(m.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+m.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(m.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+m.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(le(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&E(Ft(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,y,x=Xn(m.shape,v.shape,n,u,o,c,!0);l!=null&&(b=Tt(b=C(l,"bias","fused conv2d"),g)[0],ft(x.outShape,b.shape)),d!=null&&(y=C(d,"prelu weights","fused depthwiseConv2d"));var _={x:m,filter:v};l!=null&&(_.bias=b),d!=null&&(_.preluActivationWeights=y);var I=[v,m],S=T.runKernelFunc(function(k,R){var P=k.fusedDepthwiseConv2D({input:m,filter:v,convInfo:x,bias:b,activation:f,preluActivationWeights:y});return R([v,m,P]),P},_,function(k,R){E(Mr(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var P=R[0],D=R[1],L=R[2],M=Os(k,L,f),B={};return l!=null&&(B={bias:function(){return Fs(b,M)}}),Object.assign({x:function(){return nh(D.shape,M,P,x)},filter:function(){return rh(D,M,P.shape,x)}},B)},"FusedDepthwiseConv2D",{convInfo:x,activation:f},I,[!0]);return w?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),ky=Object.freeze({matMul:_y,conv2d:Cy,depthwiseConv2d:Ey}),Ry=Object.freeze({image:Ps,linalg:py,losses:ly,spectral:X0,fused:ky,signal:ty,square:im,squaredDifference:Wl,conv1d:v0,conv2d:Ce,conv3d:g0,depthwiseConv2d:Ea,separableConv2d:Ss,conv2dTranspose:m0,conv3dTranspose:y0,op:A,batchNormalization2d:Mm,batchNormalization3d:Bm,batchNormalization4d:Lm,batchNormalization:Wm,batchNorm:Hl,batchNorm2d:Um,batchNorm3d:zm,batchNorm4d:$m,booleanMaskAsync:p0,complex:Xt,real:be,imag:Me,concat:Wt,concat1d:kp,concat2d:Rp,concat3d:Sp,concat4d:Ip,split:ds,matMul:ka,dot:b0,outerProduct:x0,reverse:mo,reverse1d:w0,reverse2d:_0,reverse3d:C0,reverse4d:E0,maxPool:Gt,avgPool:yo,pool:k0,maxPool3d:R0,avgPool3d:S0,slice:ze,slice1d:I0,slice2d:A0,slice3d:ih,slice4d:D0,abs:sm,acos:um,acosh:cm,asin:lm,asinh:hm,atan:fm,atanh:dm,ceil:pm,clipByValue:Cs,cos:vm,cosh:gm,erf:mm,exp:$i,expm1:ym,floor:bm,log:xm,log1p:wm,logSigmoid:_m,neg:sa,reciprocal:Cm,round:Em,rsqrt:Ul,sigmoid:zl,sign:km,isNaN:Rm,isInf:Sm,isFinite:Im,sin:Am,sinh:Dm,softplus:Tm,sqrt:Pm,step:Nm,tan:Om,tanh:Fm,all:T0,any:P0,argMax:N0,argMin:O0,logSumExp:F0,max:Ra,mean:M0,min:B0,moments:L0,sum:uh,prod:W0,equal:Yl,equalStrict:o0,greater:a0,greaterEqual:Jl,greaterEqualStrict:i0,greaterStrict:s0,less:u0,lessEqual:c0,lessEqualStrict:l0,lessStrict:h0,notEqual:f0,notEqualStrict:d0,add:lt,addN:Hm,addStrict:jm,atan2:qm,div:Ee,divNoNan:Km,divStrict:Xm,floorDiv:Kl,maximum:Es,maximumStrict:Ym,minimum:Xl,minimumStrict:Jm,mod:Qm,modStrict:Zm,mul:ne,mulStrict:t0,pow:ua,powStrict:e0,squaredDifferenceStrict:n0,sub:$t,subStrict:r0,elu:ch,leakyRelu:U0,prelu:lh,relu:Dt,relu6:hh,selu:z0,logicalAnd:Ca,logicalNot:Vm,logicalOr:jl,logicalXor:Gm,where:Hn,whereAsync:ql,buffer:at,print:Bp,batchToSpaceND:ul,broadcastTo:Lp,cast:Wp,clone:Up,cumsum:zp,depthToSpace:$p,expandDims:ye,eye:cl,multinomial:Vp,oneHot:Li,pad:Kn,pad1d:Gp,pad2d:Hp,pad3d:jp,pad4d:qp,rand:Kp,randomNormal:Xp,randomGamma:Yp,randomUniform:ll,reshape:ke,spaceToBatchND:hl,squeeze:fl,stack:me,tile:fr,truncatedNormal:Jp,unstack:Ut,setdiff1dAsync:Qp,fill:Ue,linspace:Ep,ones:Lr,range:Zo,scalar:H,tensor:Jt,tensor1d:Bt,tensor2d:xn,tensor3d:fs,tensor4d:ae,tensor5d:wp,tensor6d:_p,variable:Cp,zeros:Rt,onesLike:sl,zerosLike:mt,transpose:Rn,softmax:an,logSoftmax:av,localResponseNormalization:$0,norm:fh,gather:ks,unsortedSegmentSum:Ql,basicLSTMCell:V0,multiRNNCell:G0,movingAverage:H0,stridedSlice:j0,topk:q0,scatterND:K0,fft:Is,ifft:ca,rfft:As,irfft:dh,sparseToDense:Y0,gatherND:J0,diag:Q0,dropout:Z0,hannWindow:Ds,hammingWindow:vh,frame:Ts,stft:gh,inTopKAsync:ey});function $(r,e){Array.isArray(r)||(r=[r]),r.forEach(function(t){t!=null&&E(t.dtype!=="complex64",function(){return e+" does not support complex64 tensors."})})}function vi(r,e,t,n){if(t==="linear")return r.linear(e);if(t==="relu")return r.relu(e);if(t==="elu")return r.elu(e);if(t==="relu6")return r.relu6(e);if(t==="prelu")return r.prelu(e,n);throw new Error("Activation "+t+" has not been implemented for the CPU backend.")}var Sy=function(r){function e(){var t=r.call(this)||this;return t.blockSize=48,t.firstUse=!0,t.data=new bl(t,T),t}return Se(e,r),e.prototype.write=function(t,n,o){this.firstUse&&(this.firstUse=!1,F().get("IS_NODE")&&Jo(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:t,dtype:o}),a},e.prototype.move=function(t,n,o,a){this.data.set(t,{values:n,dtype:a})},e.prototype.numDataIds=function(){return this.data.numDataIds()},e.prototype.read=function(t){return K(this,void 0,void 0,function(){return X(this,function(n){return[2,this.readSync(t)]})})},e.prototype.readSync=function(t){var n=this.data.get(t),o=n.dtype,a=n.complexTensors;return o==="complex64"?zi(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(t).values},e.prototype.bufferSync=function(t){var n=this.readSync(t.dataId),o=n;if(t.dtype==="string")try{o=n.map(function(a){return Ko(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return at(t.shape,t.dtype,o)},e.prototype.makeOutput=function(t,n,o){var a=this.write(t,n,o);return T.makeTensorFromDataId(a,n,o,this)},e.prototype.disposeData=function(t){if(this.data.has(t)){var n=this.data.get(t).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(t)}},e.prototype.time=function(t){return K(this,void 0,void 0,function(){var n;return X(this,function(o){return n=Oe(),t(),[2,{kernelMs:Oe()-n}]})})},e.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},e.prototype.complex=function(t,n){var o=this.makeOutput(null,t.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:T.keep(t.clone()),imag:T.keep(n.clone())},o},e.prototype.real=function(t){return this.data.get(t.dataId).complexTensors.real.clone()},e.prototype.imag=function(t){return this.data.get(t.dataId).complexTensors.imag.clone()},e.prototype.slice=function(t,n,o){if($(t,"slice"),ml(t.shape,n,o)){var a=yl(n,t.strides),i=Y(o);return Jt(this.readSync(t.dataId).subarray(a,a+i),o,t.dtype)}for(var s=at(o,t.dtype),u=this.bufferSync(t),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,f){return h+n[f]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},e.prototype.stridedSlice=function(t,n,o,a){$(t,"stridedSlice");var i=vs(n,o,a);if(i.some(function(d){return d===0}))return Jt([],i);for(var s=at(i,t.dtype),u=this.bufferSync(t),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),f=0;f<h.length;f++)h[f]=l[f]*a[f]+n[f];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},e.prototype.diag=function(t){for(var n=this.readSync(t.dataId),o=at([t.size,t.size],t.dtype),a=o.values,i=0;i<n.length;i++)a[i*t.size+i]=n[i];return o.toTensor()},e.prototype.unstack=function(t,n){for(var o=t.shape[n],a=new Array(t.rank-1),i=0,s=0;s<t.rank;s++)s!==n&&(a[i++]=t.shape[s]);var u=new Array(t.rank).fill(0),c=t.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(t,u,c).reshape(a);return l},e.prototype.reverse=function(t,n){$(t,"reverse");for(var o=at(t.shape,t.dtype),a=this.bufferSync(t),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(h){return l[h]=t.shape[h]-1-l[h]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},e.prototype.concat=function(t,n){var o=this;if(t[0].dtype==="complex64"){var a=t.map(function(d){return be(d)}),i=t.map(function(d){return Me(d)});return Xt(this.concat(a,n),this.concat(i,n))}var s=t.map(function(d){var p=Y(d.shape.slice(n));return d.as2D(-1,p)}),u=Fr(s.map(function(d){return d.shape}),1),c=at(u,t[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var h=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),g=0,v=0;v<d.shape[0];++v)for(var m=v*u[1]+h,w=0;w<d.shape[1];++w)c[m+w]=p[g++];h+=d.shape[1]})}var f=Fr(t.map(function(d){return d.shape}),n);return Jt(c,f,t[0].dtype)},e.prototype.neg=function(t){return $(t,"neg"),this.multiply(H(-1),t)},e.prototype.add=function(t,n){return t.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(t,n,Yt(t.dtype,n.dtype),function(o,a){return o+a})},e.prototype.addN=function(t){var n=this;$(t,"addN");for(var o=t.map(function(l){return n.readSync(l.dataId)}),a=at(t[0].shape,t[0].dtype),i=a.values,s=0;s<t.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},e.prototype.softmax=function(t,n){var o=Vt([n],t.shape),a=this.max(t,o),i=ce(a.shape,o),s=this.subtract(t,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},e.prototype.subtract=function(t,n){return t.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(t,n,Yt(t.dtype,n.dtype),function(o,a){return o-a})},e.prototype.pow=function(t,n){return $([t,n],"pow"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.pow(o,a)})},e.prototype.batchMatMul=function(t,n,o,a){$([t,n],"matMul");for(var i=o?t.shape[1]:t.shape[2],s=o?t.shape[2]:t.shape[1],u=a?n.shape[1]:n.shape[2],c=t.shape[0],l=this.readSync(t.dataId),h=this.readSync(n.dataId),f=o?[t.strides[0],1,t.strides[1]]:[t.strides[0],t.strides[1],1],d=f[0],p=f[1],g=f[2],v=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],m=v[0],w=v[1],b=v[2],y=s*u,x=at([c,s,u],t.dtype),_=x.values,I=this.blockSize,S=0;S<c;S++)for(var k=0;k<s;k+=I)for(var R=0;R<u;R+=I)for(var P=0;P<i;P+=I)for(var D=Math.min(k+I,s),L=Math.min(R+I,u),M=Math.min(P+I,i),B=k;B<D;B++)for(var z=R;z<L;z++){for(var U=0,W=P;W<M;W++)U+=l[S*d+B*p+W*g]*h[W*m+z*w+S*b];_[S*y+(B*u+z)]+=U}return x.toTensor()},e.prototype.fusedBatchMatMul=function(t){var n=t.a,o=t.b,a=t.transposeA,i=t.transposeB,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=vi(this,l,u,c)),l},e.prototype.multiply=function(t,n){return t.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(t,n,Yt(t.dtype,n.dtype),function(o,a){return o*a})},e.prototype.realDivide=function(t,n){return $([t,n],"realDivide"),this.broadcastedBinaryOp(t,n,"float32",function(o,a){return o/a})},e.prototype.floorDiv=function(t,n){return $([t,n],"floorDiv"),this.broadcastedBinaryOp(t,n,"int32",function(o,a){return Math.floor(o/a)})},e.prototype.sum=function(t,n){$(t,"sum"),fe("sum",n,t.rank);for(var o=Qt(t.shape,n),a=o[0],i=o[1],s=Rt(a,Yt(t.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=0,p=0;p<u;++p)d+=l[f+p];c[h]=d}return s},e.prototype.prod=function(t,n){$(t,"sum");for(var o=Qt(t.shape,n),a=o[0],i=o[1],s=Rt(a,Yt(t.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=1,p=0;p<u;++p)d*=l[f+p];c[h]=d}return s},e.prototype.unsortedSegmentSum=function(t,n,o){$(t,"unsortedSegmentSum");for(var a=[],i=t.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=H(s,"int32"),c=Yl(u,n).asType("float32").mul(t).sum(0);a.push(c)}return me(a)},e.prototype.argMin=function(t,n){$(t,"argMin");var o=[n];fe("argMin",o,t.rank);for(var a=Qt(t.shape,o),i=a[0],s=a[1],u=Rt(i,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(t.dataId),f=0;f<l.length;++f){for(var d=f*c,p=h[d],g=0,v=0;v<c;++v){var m=h[d+v];m<p&&(p=m,g=v)}l[f]=g}return u},e.prototype.argMax=function(t,n){$(t,"argMax");var o=[n];fe("argMax",o,t.rank);for(var a=Qt(t.shape,o),i=a[0],s=a[1],u=Rt(i,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(t.dataId),f=0;f<l.length;++f){for(var d=f*c,p=h[d],g=0,v=0;v<c;++v){var m=h[d+v];m>p&&(p=m,g=v)}l[f]=g}return u},e.prototype.cumsum=function(t,n,o,a){if($(t,"cumsum"),n!==t.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(t.rank-1)+" but got axis="+n);for(var i=Yt(t.dtype,"int32"),s=Rt(t.shape,i),u=this.readSync(s.dataId),c=this.readSync(t.dataId),l=t.shape[t.rank-1],h=a?function(v,m){return v+l-m-1}:function(v,m){return v+m},f=0;f<c.length;f+=l)for(var d=0;d<l;d++){var p=h(f,d);if(d===0)u[p]=o?0:c[p];else{var g=h(f,d-1);u[p]=o?c[g]+u[g]:c[p]+u[g]}}return s},e.prototype.equal=function(t,n){return $([t,n],"equal"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o===a?1:0})},e.prototype.notEqual=function(t,n){return $([t,n],"notEqual"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o!==a?1:0})},e.prototype.less=function(t,n){return $([t,n],"less"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o<a?1:0})},e.prototype.lessEqual=function(t,n){return $([t,n],"lessEqual"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o<=a?1:0})},e.prototype.greater=function(t,n){return $([t,n],"greater"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o>a?1:0})},e.prototype.greaterEqual=function(t,n){return $([t,n],"greaterEqual"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o>=a?1:0})},e.prototype.logicalNot=function(t){$(t,"logicalNot");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,t.shape,"bool")},e.prototype.logicalAnd=function(t,n){return $([t,n],"logicalAnd"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o&&a})},e.prototype.logicalOr=function(t,n){return $([t,n],"logicalOr"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o||a})},e.prototype.select=function(t,n,o){$([t,n,o],"select");for(var a=this.readSync(t.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Rt(n.shape,Yt(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=t.rank===0||t.rank>1||n.rank===1?1:Y(n.shape.slice(1)),f=0;f<a.length;f++)for(var d=0;d<h;d++)a[f]===1?c[l++]=i[f]:c[l++]=s[f];return u},e.prototype.where=function(t){$([t],"where");var n=this.readSync(t.dataId);return bs(t.shape,n)},e.prototype.topk=function(t,n,o){return $(t,"topk"),Sl(this.readSync(t.dataId),t.shape,t.dtype,n)},e.prototype.min=function(t,n){$(t,"min"),fe("min",n,t.rank);for(var o=Qt(t.shape,n),a=o[0],i=o[1],s=Rt(a,t.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var g=l[f+p];g<d&&(d=g)}c[h]=d}return s},e.prototype.minimum=function(t,n){return $([t,n],"minimum"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.min(o,a)})},e.prototype.mod=function(t,n){return $([t,n],"mod"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},e.prototype.max=function(t,n){$(t,"max"),fe("max",n,t.rank);for(var o=Qt(t.shape,n),a=o[0],i=o[1],s=Rt(a,t.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var g=l[f+p];g>d&&(d=g)}c[h]=d}return s},e.prototype.maximum=function(t,n){return $([t,n],"maximum"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.max(o,a)})},e.prototype.all=function(t,n){$(t,"all"),fe("all",n,t.rank);for(var o=Qt(t.shape,n),a=o[0],i=o[1],s=Rt(a,t.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var g=l[f+p];d=d&&g}c[h]=d}return s},e.prototype.any=function(t,n){$(t,"any"),fe("any",n,t.rank);for(var o=Qt(t.shape,n),a=o[0],i=o[1],s=Rt(a,t.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var g=l[f+p];d=d||g}c[h]=d}return s},e.prototype.squaredDifference=function(t,n){return $([t,n],"squaredDifference"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){var i=o-a;return i*i})},e.prototype.ceil=function(t){$(t,"ceil");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.floor=function(t){$(t,"floor");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.sign=function(t){$(t,"x");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,t.shape,"float32")},e.prototype.isNaN=function(t){$(t,"x");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,t.shape,"bool")},e.prototype.isInf=function(t){$(t,"x");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,t.shape,"bool")},e.prototype.isFinite=function(t){$(t,"x");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,t.shape,"bool")},e.prototype.round=function(t){$(t,"round");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,t.shape,"float32")},e.prototype.exp=function(t){$(t,"exp");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.expm1=function(t){$(t,"expm1");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.log=function(t){$(t,"log");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.log1p=function(t){$(t,"log1p");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.sqrt=function(t){$(t,"sqrt");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.rsqrt=function(t){$(t,"rsqrt");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.reciprocal=function(t){$(t,"reciprocal");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,t.shape,"float32")},e.prototype.linear=function(t){return t},e.prototype.relu=function(t){$(t,"relu");for(var n=Rt(t.shape,t.dtype),o=this.readSync(n.dataId),a=this.readSync(t.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},e.prototype.relu6=function(t){$(t,"relu");for(var n=Rt(t.shape,t.dtype),o=this.readSync(n.dataId),a=this.readSync(t.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},e.prototype.prelu=function(t,n){return $([t,n],"prelu"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return o<0?a*o:o})},e.prototype.elu=function(t){$(t,"elu");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,t.shape,"float32")},e.prototype.eluDer=function(t,n){$([t,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(t.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},e.prototype.selu=function(t){$(t,"selu");for(var n=ws,o=_s,a=new Float32Array(t.size),i=this.readSync(t.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,t.shape,"float32")},e.prototype.clip=function(t,n,o){$(t,"clip");for(var a=new Float32Array(t.size),i=this.readSync(t.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,t.shape,"float32")},e.prototype.abs=function(t){for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.complexAbs=function(t){for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<t.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,t.shape,"float32")},e.prototype.int=function(t){$(t,"int");for(var n=new Int32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,t.shape,"int32")},e.prototype.sigmoid=function(t){$(t,"sigmoid");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,t.shape,"float32")},e.prototype.softplus=function(t){$(t,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(t.size),a=this.readSync(t.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,t.shape,"float32")},e.prototype.sin=function(t){$(t,"sin");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.cos=function(t){$(t,"cos");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.tan=function(t){$(t,"tan");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.asin=function(t){$(t,"asin");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.acos=function(t){$(t,"acos");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.atan=function(t){$(t,"atan");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.atan2=function(t,n){return $([t,n],"atan2"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.atan2(o,a)})},e.prototype.sinh=function(t){$(t,"sinh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.cosh=function(t){$(t,"cosh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.tanh=function(t){$(t,"tanh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Id(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.asinh=function(t){$(t,"asinh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.acosh=function(t){$(t,"acosh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.atanh=function(t){$(t,"atanh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.erf=function(t){$(t,"erf");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,t.shape,"float32")},e.prototype.step=function(t,n){n===void 0&&(n=0),$(t,"step");for(var o=new Float32Array(t.size),a=this.readSync(t.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,t.shape,"float32")},e.prototype.fusedConv2d=function(t){var n=t.input,o=t.filter,a=t.convInfo,i=t.bias,s=t.activation,u=t.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=vi(this,c,s,u)),c},e.prototype.conv2d=function(t,n,o){$([t,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",f=at(o.outShape,t.dtype),d=t.strides[0],p=h?t.strides[1]:t.strides[2],g=h?t.strides[2]:1,v=h?1:t.strides[1],m=f.strides[0],w=h?f.strides[1]:f.strides[2],b=h?f.strides[2]:1,y=h?1:f.strides[1],x=this.readSync(t.dataId),_=this.readSync(n.dataId),I=f.values,S=0;S<o.batchSize;++S)for(var k=S*d,R=S*m,P=0;P<o.outHeight;++P)for(var D=R+P*w,L=P*o.strideHeight-l,M=0;M<a;M++){var B=L+M*s;if(!(B<0||B>=o.inHeight))for(var z=M*n.strides[0],U=k+B*p,W=0;W<o.outWidth;++W)for(var V=D+W*b,G=W*o.strideWidth-c,j=0;j<i;j++){var tt=G+j*u;if(!(tt<0||tt>=o.inWidth))for(var et=U+tt*g,ut=z+j*n.strides[1],ct=0;ct<o.inChannels;++ct){for(var ht=x[et+ct*v],vt=0;vt<o.outChannels;++vt)I[V+vt*y]+=ht*_[ut+vt];ut+=o.outChannels}}}return f.toTensor()},e.prototype.conv3d=function(t,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,f=o.padInfo.left,d=o.padInfo.top,p=at(o.outShape,t.dtype),g=this.readSync(t.dataId),v=this.readSync(n.dataId),m=p.values,w=0;w<o.batchSize;++w)for(var b=w*t.strides[0],y=w*p.strides[0],x=0;x<o.outDepth;++x)for(var _=y+x*p.strides[1],I=x*o.strideDepth-h,S=0;S<a;S++){var k=I+S*u;if(!(k<0||k>=o.inDepth))for(var R=S*n.strides[0],P=b+k*t.strides[1],D=0;D<o.outHeight;++D)for(var L=_+D*p.strides[2],M=D*o.strideHeight-d,B=0;B<i;B++){var z=M+B*c;if(!(z<0||z>=o.inHeight))for(var U=R+B*n.strides[1],W=P+z*t.strides[2],V=0;V<o.outWidth;++V)for(var G=L+V*o.outChannels,j=V*o.strideWidth-f,tt=0;tt<s;tt++){var et=j+tt*l;if(!(et<0||et>=o.inWidth))for(var ut=U+tt*n.strides[2],ct=W+et*o.inChannels,ht=ut,vt=0;vt<o.inChannels;++vt){for(var dt=g[ct+vt],gt=0;gt<o.outChannels;++gt)m[G+gt]+=dt*v[ht+gt];ht+=o.outChannels}}}}return p.toTensor()},e.prototype.conv2dDerInput=function(t,n,o){$([t,n],"conv2dDerInput");for(var a=at(o.inShape,"float32"),i=a.values,s=this.readSync(t.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],h=c[1],f=c[2],d=o.batchSize,p=o.filterHeight,g=o.filterWidth,v=o.inChannels,m=o.inHeight,w=o.inWidth,b=o.outChannels,y=o.outHeight,x=o.outWidth,_=o.strideHeight,I=o.strideWidth,S=o.dataFormat,k=p-1-o.padInfo.top,R=g-1-o.padInfo.left,P=S==="channelsLast",D=a.strides[0],L=P?a.strides[1]:a.strides[2],M=P?a.strides[2]:1,B=P?1:a.strides[1],z=t.strides[0],U=P?t.strides[1]:t.strides[2],W=P?t.strides[2]:1,V=P?1:t.strides[1],G=0;G<d;++G)for(var j=0;j<v;++j)for(var tt=0;tt<m;++tt)for(var et=tt-k,ut=Math.max(0,Math.ceil(et/_)),ct=Math.min(y,(p+et)/_),ht=0;ht<w;++ht){for(var vt=ht-R,dt=Math.max(0,Math.ceil(vt/I)),gt=Math.min(x,(g+vt)/I),Ot=0,pt=ut;pt<ct;++pt)for(var Ct=pt*_-et,bt=dt;bt<gt;++bt)for(var Pt=z*G+U*pt+W*bt,St=l*(p-1-Ct)+h*(g-1-(bt*I-vt))+f*j,It=0;It<b;++It)Ot+=s[Pt+V*It]*u[St+It];i[D*G+L*tt+M*ht+B*j]=Ot}return a.toTensor()},e.prototype.conv3dDerInput=function(t,n,o){for(var a=at(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=s[3],f=this.readSync(t.dataId),d=t.strides,p=d[0],g=d[1],v=d[2],m=d[3],w=this.readSync(n.dataId),b=n.strides,y=b[0],x=b[1],_=b[2],I=b[3],S=o.batchSize,k=o.filterDepth,R=o.filterHeight,P=o.filterWidth,D=o.inChannels,L=o.inDepth,M=o.inHeight,B=o.inWidth,z=o.outChannels,U=o.outDepth,W=o.outHeight,V=o.outWidth,G=o.strideDepth,j=o.strideHeight,tt=o.strideWidth,et=k-1-o.padInfo.front,ut=R-1-o.padInfo.top,ct=P-1-o.padInfo.left,ht=0;ht<S;++ht)for(var vt=0;vt<D;++vt)for(var dt=0;dt<L;++dt)for(var gt=dt-et,Ot=Math.max(0,Math.ceil(gt/G)),pt=Math.min(U,(k+gt)/G),Ct=0;Ct<M;++Ct)for(var bt=Ct-ut,Pt=Math.max(0,Math.ceil(bt/j)),St=Math.min(W,(R+bt)/j),It=0;It<B;++It){for(var Ae=It-ct,De=Math.max(0,Math.ceil(Ae/tt)),he=Math.min(V,(P+Ae)/tt),Qn=0,qe=Ot;qe<pt;++qe)for(var hn=qe*G-gt,Ke=Pt;Ke<St;++Ke)for(var Zn=Ke*j-bt,Xe=De;Xe<he;++Xe)for(var Wa=p*ht+g*qe+v*Ke+m*Xe,tr=y*(k-1-hn)+x*(R-1-Zn)+_*(P-1-(Xe*tt-Ae))+I*vt,Te=0;Te<z;++Te)Qn+=f[Wa+Te]*w[tr+Te];i[u*ht+c*dt+l*Ct+h*It+vt]=Qn}return a.toTensor()},e.prototype.conv2dDerFilter=function(t,n,o){$([t,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=at(o.filterShape,"float32"),h=o.padInfo.left,f=o.padInfo.top,d=this.bufferSync(t),p=this.bufferSync(n),g=0;g<s;++g)for(var v=Math.max(0,Math.ceil((f-g)/a)),m=Math.min(o.outHeight,(o.inHeight+f-g)/a),w=0;w<u;++w)for(var b=Math.max(0,Math.ceil((h-w)/i)),y=Math.min(o.outWidth,(o.inWidth+h-w)/i),x=0;x<o.inChannels;++x)for(var _=0;_<o.outChannels;++_){for(var I=0,S=0;S<o.batchSize;++S)for(var k=v;k<m;++k)for(var R=g+k*a-f,P=b;P<y;++P){var D=w+P*i-h;I+=c?d.get(S,R,D,x)*p.get(S,k,P,_):d.get(S,x,R,D)*p.get(S,_,k,P)}l.set(I,g,w,x,_)}return l.toTensor()},e.prototype.conv3dDerFilter=function(t,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=at(o.filterShape,"float32"),f=h.values,d=h.strides,p=d[0],g=d[1],v=d[2],m=d[3],w=this.readSync(n.dataId),b=n.strides,y=b[0],x=b[1],_=b[2],I=b[3],S=this.readSync(t.dataId),k=t.strides,R=k[0],P=k[1],D=k[2],L=k[3],M=o.padInfo.front,B=o.padInfo.left,z=o.padInfo.top,U=0;U<u;++U)for(var W=Math.max(0,Math.ceil((M-U)/a)),V=Math.min(o.outDepth,(o.inDepth+M-U)/a),G=U*p,j=0;j<c;++j)for(var tt=Math.max(0,Math.ceil((z-j)/i)),et=Math.min(o.outHeight,(o.inHeight+z-j)/i),ut=j*g+G,ct=0;ct<l;++ct)for(var ht=Math.max(0,Math.ceil((B-ct)/s)),vt=Math.min(o.outWidth,(o.inWidth+B-ct)/s),dt=ct*v+ut,gt=0;gt<o.inChannels;++gt)for(var Ot=gt*m+dt,pt=0;pt<o.outChannels;++pt){for(var Ct=0,bt=0;bt<o.batchSize;++bt)for(var Pt=bt*R,St=bt*y,It=W;It<V;++It)for(var Ae=(U+It*a-M)*P+Pt,De=It*x+St,he=tt;he<et;++he)for(var Qn=(j+he*i-z)*D+Ae,qe=he*_+De,hn=ht;hn<vt;++hn){var Ke=hn*I+qe;Ct+=S[(ct+hn*s-B)*L+Qn+gt]*w[Ke+pt]}f[Ot+pt]=Ct}return h.toTensor()},e.prototype.fusedDepthwiseConv2D=function(t){var n=t.input,o=t.filter,a=t.convInfo,i=t.bias,s=t.activation,u=t.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=vi(this,c,s,u)),c},e.prototype.depthwiseConv2D=function(t,n,o){$([t,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,f=at(o.outShape,t.dtype),d=this.readSync(t.dataId),p=this.readSync(n.dataId),g=f.values,v=0;v<o.batchSize;++v)for(var m=v*t.strides[0],w=v*f.strides[0],b=0;b<o.outHeight;++b)for(var y=w+b*f.strides[1],x=b*o.strideHeight-c,_=0;_<a;++_){var I=x+_*s;if(!(I<0||I>=o.inHeight))for(var S=_*n.strides[0],k=m+I*t.strides[1],R=0;R<o.outWidth;++R)for(var P=y+R*f.strides[2],D=R*o.strideWidth-l,L=0;L<i;++L){var M=D+L*u;if(!(M<0||M>=o.inWidth))for(var B=S+L*n.strides[1],z=k+M*o.inChannels,U=P,W=B,V=0;V<o.inChannels;++V){for(var G=d[z+V],j=0;j<h;++j)g[U+j]+=G*p[W+j];U+=h,W+=h}}}return f.toTensor()},e.prototype.depthwiseConv2DDerInput=function(t,n,o){$([t,n],"depthwiseConv2DDerInput");for(var a=at(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(t.dataId),f=t.strides,d=f[0],p=f[1],g=f[2],v=this.readSync(n.dataId),m=n.strides,w=m[0],b=m[1],y=m[2],x=o.batchSize,_=o.filterHeight,I=o.filterWidth,S=o.inChannels,k=o.inHeight,R=o.inWidth,P=o.outChannels,D=o.outHeight,L=o.outWidth,M=o.strideHeight,B=o.strideWidth,z=_-1-o.padInfo.top,U=I-1-o.padInfo.left,W=P/S,V=0;V<x;++V)for(var G=0;G<S;++G)for(var j=0;j<k;++j)for(var tt=j-z,et=Math.max(0,Math.ceil(tt/M)),ut=Math.min(D,(_+tt)/M),ct=0;ct<R;++ct){for(var ht=ct-U,vt=Math.max(0,Math.ceil(ht/B)),dt=Math.min(L,(I+ht)/B),gt=0,Ot=et;Ot<ut;++Ot)for(var pt=Ot*M-tt,Ct=vt;Ct<dt;++Ct)for(var bt=d*V+p*Ot+g*Ct,Pt=w*(_-1-pt)+b*(I-1-(Ct*B-ht))+y*G,St=0;St<W;++St)gt+=h[bt+(G*W+St)]*v[Pt+St];i[u*V+c*j+l*ct+G]=gt}return a.toTensor()},e.prototype.depthwiseConv2DDerFilter=function(t,n,o){$([t,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=at(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,f=o.outChannels/o.inChannels,d=this.bufferSync(t),p=this.bufferSync(n),g=0;g<s;++g)for(var v=Math.max(0,Math.ceil((h-g)/a)),m=Math.min(o.outHeight,(o.inHeight+h-g)/a),w=0;w<u;++w)for(var b=Math.max(0,Math.ceil((l-w)/i)),y=Math.min(o.outWidth,(o.inWidth+l-w)/i),x=0;x<o.outChannels;++x){for(var _=Math.trunc(x/f),I=x%f,S=0,k=0;k<o.batchSize;++k)for(var R=v;R<m;++R)for(var P=g+R*a-h,D=b;D<y;++D){var L=w+D*i-l;S+=d.get(k,P,L,_)*p.get(k,R,D,x)}c.set(S,g,w,_,I)}return c.toTensor()},e.prototype.tile=function(t,n){return $(t,"tile"),Rl(this.bufferSync(t),n)},e.prototype.pad=function(t,n,o){$(t,"pad");var a=n.map(function(f,d){return f[0]+t.shape[d]+f[1]}),i=n.map(function(f){return f[0]}),s=this.bufferSync(t),u=at(a,t.dtype);o!==0&&u.values.fill(o);for(var c=0;c<t.size;c++){var l=s.indexToLoc(c),h=l.map(function(f,d){return f+i[d]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},e.prototype.transpose=function(t,n){$(t,"transpose");for(var o=new Array(t.rank),a=0;a<o.length;a++)o[a]=t.shape[n[a]];var i=this.readSync(t.dataId),s=at(o,t.dtype),u=this.bufferSync(t);for(a=0;a<t.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[n[h]];var f=s.locToIndex(l);s.values[f]=i[a]}return s.toTensor()},e.prototype.gather=function(t,n,o){$([t,n],"gather");var a=t.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=at(a,t.dtype),u=this.bufferSync(t),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=i[l[o]];var f=u.locToIndex(h);s.values[c]=u.values[f]}return s.toTensor()},e.prototype.batchToSpaceND=function(t,n,o){$([t],"batchToSpaceND");var a=n.reduce(function(h,f){return h*f}),i=ta(t.shape,n,a),s=ea(i.length,n.length),u=na(t.shape,n,a),c=dl(o,n.length),l=pl(u,o,n.length);return t.reshape(i).transpose(s).reshape(u).slice(c,l)},e.prototype.spaceToBatchND=function(t,n,o){$([t],"spaceToBatchND");var a=n.reduce(function(f,d){return f*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<t.shape.length;++s)i.push([0,0]);var u=t.pad(i),c=ta(u.shape,n,a,!1),l=ea(c.length,n.length,!1),h=na(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},e.prototype.pool=function(t,n,o){$(t,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(t.dataId),g=at(n.outShape,t.dtype),v=g.values,m=n.outShape[1]*n.outShape[2]*n.outShape[3],w=n.outShape[2]*n.outShape[3],b=n.outShape[3],y=0;y<n.batchSize;++y)for(var x=y*m,_=y*t.strides[0],I=0;I<n.inChannels;++I)for(var S=0;S<n.outHeight;++S)for(var k=S*a-h,R=Math.max(0,k),P=Math.min(n.inHeight,c+k),D=x+S*w,L=0;L<n.outWidth;++L){for(var M=L*i-f,B=Math.max(0,M),z=Math.min(n.inWidth,l+M),U=d,W=0,V=0,G=R;G<P;G+=s){for(var j=_+G*t.strides[1],tt=B;tt<z;tt+=u){var et=p[j+tt*t.strides[2]+I];o==="max"&&et>U?U=et:o==="avg"&&(W+=et,V++)}if(isNaN(U))break}v[D+L*b+I]=o==="avg"?W/V:U}return g.toTensor()},e.prototype.maxPool=function(t,n){return this.pool(t,n,"max")},e.prototype.maxPoolPositions=function(t,n){for(var o=at(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,d=this.bufferSync(t),p=0;p<n.batchSize;++p)for(var g=0;g<n.inChannels;++g)for(var v=0;v<n.outHeight;++v){for(var m=v*a-h,w=m;w<0;)w+=s;for(var b=Math.min(n.inHeight,c+m),y=0;y<n.outWidth;++y){for(var x=y*i-f,_=x;_<0;)_+=u;for(var I=Math.min(n.inWidth,l+x),S=Number.NEGATIVE_INFINITY,k=-1,R=w;R<b;R+=s)for(var P=R-m,D=_;D<I;D+=u){var L=D-x,M=d.get(p,R,D,g);M>S&&(S=M,k=P*l+L)}o.set(k,p,v,y,g)}}return o.toTensor()},e.prototype.maxPoolBackprop=function(t,n,o,a){$([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,h=a.effectiveFilterHeight,f=a.effectiveFilterWidth,d=f-1-a.padInfo.left,p=h-1-a.padInfo.top,g=at(n.shape,"float32"),v=this.bufferSync(i),m=this.bufferSync(t),w=0;w<a.batchSize;++w)for(var b=0;b<a.inChannels;++b)for(var y=0;y<a.inHeight;++y)for(var x=0;x<a.inWidth;++x){for(var _=y-p,I=x-d,S=0,k=0;k<h;k+=c){var R=(_+k)/s;if(!(R<0||R>=a.outHeight||Math.floor(R)!==R))for(var P=0;P<f;P+=l){var D=(I+P)/u;if(!(D<0||D>=a.outWidth||Math.floor(D)!==D)){var L=h*f-1-v.get(w,R,D,b)===k*f+P?1:0;L!==0&&(S+=m.get(w,R,D,b)*L)}}}g.set(S,w,y,x,b)}return g.toTensor()},e.prototype.avgPoolBackprop=function(t,n,o){$([t,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,f=o.effectiveFilterWidth,d=f-1-o.padInfo.left,p=h-1-o.padInfo.top,g=at(n.shape,"float32"),v=1/(s*u),m=this.bufferSync(t),w=0;w<o.batchSize;++w)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var x=0;x<o.inWidth;++x){for(var _=y-p,I=x-d,S=0,k=0;k<h;k+=c){var R=(_+k)/a;if(!(R<0||R>=o.outHeight||Math.floor(R)!==R))for(var P=0;P<f;P+=l){var D=(I+P)/i;D<0||D>=o.outWidth||Math.floor(D)!==D||(S+=m.get(w,R,D,b))}}g.set(S*v,w,y,x,b)}return g.toTensor()},e.prototype.pool3d=function(t,n,o){$(t,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,g=n.padInfo.top,v=n.padInfo.left,m=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=this.readSync(t.dataId),b=at(n.outShape,t.dtype),y=b.values,x=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],_=n.outShape[2]*n.outShape[3]*n.outShape[4],I=n.outShape[3]*n.outShape[4],S=n.outShape[4],k=0;k<n.batchSize;++k)for(var R=k*x,P=k*t.strides[0],D=0;D<n.inChannels;++D)for(var L=0;L<n.outDepth;++L){for(var M=L*a-p,B=M;B<0;)B+=u;for(var z=Math.min(n.inDepth,h+M),U=R+L*_,W=0;W<n.outHeight;++W){for(var V=W*i-g,G=V;G<0;)G+=c;for(var j=Math.min(n.inHeight,f+V),tt=U+W*I,et=0;et<n.outWidth;++et){for(var ut=et*s-v,ct=ut;ct<0;)ct+=l;for(var ht=Math.min(n.inWidth,d+ut),vt=tt+et*S,dt=m,gt=0,Ot=0,pt=B;pt<z;pt+=u){for(var Ct=P+pt*t.strides[1],bt=G;bt<j;bt+=c){for(var Pt=Ct+bt*t.strides[2],St=ct;St<ht;St+=l){var It=w[Pt+St*t.strides[3]+D];if(o==="max"&&It>dt?dt=It:o==="avg"&&(gt+=It,Ot++),isNaN(dt))break}if(isNaN(dt))break}if(isNaN(dt))break}y[vt+D]=o==="avg"?gt/Ot:dt}}}return b.toTensor()},e.prototype.avgPool3d=function(t,n){return $(t,"avgPool3d"),this.pool3d(t,n,"avg").toFloat()},e.prototype.avgPool3dBackprop=function(t,n,o){$([t,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,f=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,g=o.effectiveFilterHeight,v=o.effectiveFilterWidth,m=p-1-o.padInfo.front,w=v-1-o.padInfo.left,b=g-1-o.padInfo.top,y=at(n.shape,"float32"),x=1/(u*c*l),_=this.bufferSync(t),I=0;I<o.batchSize;++I)for(var S=0;S<o.inChannels;++S)for(var k=0;k<o.inDepth;++k)for(var R=0;R<o.inHeight;++R)for(var P=0;P<o.inWidth;++P){for(var D=k-m,L=R-b,M=P-w,B=0,z=0;z<p;z+=h){var U=(D+z)/a;if(!(U<0||U>=o.outDepth||Math.floor(U)!==U))for(var W=0;W<g;W+=f){var V=(L+W)/i;if(!(V<0||V>=o.outHeight||Math.floor(V)!==V))for(var G=0;G<v;G+=d){var j=(M+G)/s;j<0||j>=o.outWidth||Math.floor(j)!==j||(B+=_.get(I,U,V,j,S))}}}y.set(B*x,I,k,R,P,S)}return y.toTensor()},e.prototype.maxPool3d=function(t,n){return $(t,"maxPool3d"),this.pool3d(t,n,"max").toFloat()},e.prototype.maxPool3dPositions=function(t,n){for(var o=at(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,g=n.padInfo.top,v=n.padInfo.left,m=this.bufferSync(t),w=0;w<n.batchSize;++w)for(var b=0;b<n.inChannels;++b)for(var y=0;y<n.outDepth;++y){for(var x=y*a-p,_=x;_<0;)_+=u;for(var I=Math.min(n.inDepth,h+x),S=0;S<n.outHeight;++S){for(var k=S*i-g,R=k;R<0;)R+=c;for(var P=Math.min(n.inHeight,f+k),D=0;D<n.outWidth;++D){for(var L=D*s-v,M=L;M<0;)M+=l;for(var B=Math.min(n.inWidth,d+L),z=Number.NEGATIVE_INFINITY,U=-1,W=_;W<I;W+=u)for(var V=W-x,G=R;G<P;G+=c)for(var j=G-k,tt=M;tt<B;tt+=l){var et=tt-L,ut=m.get(w,W,G,tt,b);ut>=z&&(z=ut,U=V*f*d+j*f+et)}o.set(U,w,y,S,D,b)}}}return o.toTensor()},e.prototype.maxPool3dBackprop=function(t,n,o,a){$([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,h=a.dilationHeight,f=a.dilationWidth,d=a.effectiveFilterDepth,p=a.effectiveFilterHeight,g=a.effectiveFilterWidth,v=d-1-a.padInfo.front,m=g-1-a.padInfo.left,w=p-1-a.padInfo.top,b=at(n.shape,"float32"),y=this.bufferSync(i),x=this.bufferSync(t),_=0;_<a.batchSize;++_)for(var I=0;I<a.inChannels;++I)for(var S=0;S<a.inDepth;++S)for(var k=0;k<a.inHeight;++k)for(var R=0;R<a.inWidth;++R){for(var P=S-v,D=k-w,L=R-m,M=0,B=0;B<d;B+=l){var z=(P+B)/s;if(!(z<0||z>=a.outDepth||Math.floor(z)!==z))for(var U=0;U<p;U+=h){var W=(D+U)/u;if(!(W<0||W>=a.outHeight||Math.floor(W)!==W))for(var V=0;V<g;V+=f){var G=(L+V)/c;if(!(G<0||G>=a.outWidth||Math.floor(G)!==G)){var j=d*p*g-1-y.get(_,z,W,G,I)===B*p*g+U*g+V?1:0;j!==0&&(M+=x.get(_,z,W,G,I)*j)}}}}b.set(M,_,S,k,R,I)}return b.toTensor()},e.prototype.cast=function(t,n){return _l(t,n,this)},e.prototype.reshape=function(t,n){return Ui(t,n)},e.prototype.avgPool=function(t,n){return $(t,"avgPool"),this.pool(t,n,"avg").toFloat()},e.prototype.resizeBilinear=function(t,n,o,a){$(t,"resizeBilinear");for(var i=t.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(t.dataId),f=new Float32Array(Y([s,n,o,l])),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],g=0,v=d[0]/p[0],m=d[1]/p[1],w=0;w<s;w++)for(var b=0;b<n;b++)for(var y=v*b,x=Math.floor(y),_=y-x,I=Math.min(u-1,Math.ceil(y)),S=w*t.strides[0]+x*t.strides[1],k=w*t.strides[0]+I*t.strides[1],R=0;R<o;R++)for(var P=m*R,D=Math.floor(P),L=P-D,M=Math.min(c-1,Math.ceil(P)),B=S+D*t.strides[2],z=k+D*t.strides[2],U=S+M*t.strides[2],W=k+M*t.strides[2],V=0;V<l;V++){var G=h[B+V],j=h[z+V],tt=G+(h[U+V]-G)*L,et=tt+(j+(h[W+V]-j)*L-tt)*_;f[g++]=et}return Jt(f,[s,n,o,l])},e.prototype.resizeBilinearBackprop=function(t,n,o){$([t,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=t.shape,h=l[1],f=l[2],d=new Float32Array(i*s*u*c),p=[o&&h>1?s-1:s,o&&f>1?u-1:u],g=[o&&h>1?h-1:h,o&&f>1?f-1:f],v=p[0]/g[0],m=p[1]/g[1],w=this.readSync(t.dataId),b=0,y=0;y<i;y++)for(var x=y*n.strides[0],_=0;_<h;_++)for(var I=_*v,S=Math.floor(I),k=Math.min(Math.ceil(I),s-1),R=x+S*n.strides[1],P=x+k*n.strides[1],D=I-S,L=1-D,M=0;M<f;M++)for(var B=M*m,z=Math.floor(B),U=Math.min(Math.ceil(B),u-1),W=B-z,V=1-W,G=R+z*n.strides[2],j=R+U*n.strides[2],tt=P+z*n.strides[2],et=P+U*n.strides[2],ut=L*V,ct=L*W,ht=D*V,vt=D*W,dt=0;dt<c;dt++){var gt=w[b++];d[G+dt]+=gt*ut,d[j+dt]+=gt*ct,d[tt+dt]+=gt*ht,d[et+dt]+=gt*vt}return ae(d,[i,u,s,c],n.dtype)},e.prototype.resizeNearestNeighbor=function(t,n,o,a){$(t,"resizeNearestNeighbor");for(var i=t.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(t.dataId),f=new Float32Array(s*n*o*l),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],g=d[0]/p[0],v=d[1]/p[1],m=0,w=0;w<s;w++)for(var b=w*t.strides[0],y=0;y<n;y++)for(var x=g*y,_=b+Math.min(u-1,a?Math.round(x):Math.floor(x))*t.strides[1],I=0;I<o;I++)for(var S=v*I,k=_+Math.min(c-1,a?Math.round(S):Math.floor(S))*t.strides[2],R=0;R<l;R++){var P=h[k+R];f[m++]=P}return Jt(f,[s,n,o,l],t.dtype)},e.prototype.resizeNearestNeighborBackprop=function(t,n,o){$([t,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=t.shape,h=l[1],f=l[2],d=new Float32Array(i*s*u*c),p=this.readSync(t.dataId),g=[o&&h>1?s-1:s,o&&f>1?u-1:u],v=[o&&h>1?h-1:h,o&&f>1?f-1:f],m=g[0]/v[0],w=g[1]/v[1],b=1/m,y=1/w,x=2*Math.ceil(b)+2,_=2*Math.ceil(y)+2,I=0;I<i;I++)for(var S=I*n.strides[0],k=0;k<s;k++)for(var R=S+k*n.strides[1],P=Math.floor(k*b),D=Math.floor(P-x/2),L=0;L<u;L++)for(var M=R+L*n.strides[2],B=Math.floor(L*y),z=Math.floor(B-_/2),U=0;U<c;U++){for(var W=0,V=0;V<x;V++){var G=V+D;if(!(G<0||G>=h)){var j=S+G*t.strides[1],tt=G*m;if(k===Math.min(s-1,o?Math.round(tt):Math.floor(tt)))for(var et=0;et<_;et++){var ut=et+z;if(!(ut<0||ut>=f)){var ct=j+ut*t.strides[2],ht=ut*w;L===Math.min(u-1,o?Math.round(ht):Math.floor(ht))&&(W+=p[ct+U])}}}}d[M+U]=W}return ae(d,n.shape,n.dtype)},e.prototype.batchNormalization=function(t,n,o,a,i,s){$([t,n,o,i,s],"batchNorm");for(var u=this.readSync(t.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),h=i?this.readSync(i.dataId):new Float32Array([1]),f=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=f.length,g=h.length,v=l.length,m=c.length,w=0,b=0,y=0,x=0,_=0;_<u.length;++_)d[_]=f[w++]+(u[_]-c[b++])*h[y++]/Math.sqrt(l[x++]+a),w>=p&&(w=0),b>=m&&(b=0),y>=g&&(y=0),x>=v&&(x=0);return ae(d,t.shape)},e.prototype.localResponseNormalization4D=function(t,n,o,a,i){$(t,"localResponseNormalization4D");var s=t.shape[3],u=s-1,c=this.readSync(t.dataId),l=t.size,h=new Float32Array(l);function f(v){for(var m=v%s,w=v-m+Math.max(0,m-n),b=v-m+Math.min(m+n,u),y=0;w<=b;w++){var x=c[w];y+=x*x}return y}for(var d=0;d<l;d++){var p=f(d),g=c[d]*Math.pow(o+a*p,-i);h[d]=g}return ae(h,t.shape)},e.prototype.LRNGrad=function(t,n,o,a,i,s,u){$(t,"LRNGrad");for(var c=t.shape[3],l=this.readSync(t.dataId),h=this.readSync(n.dataId),f=this.readSync(o.dataId),d=new Float32Array(t.size),p=t.size,g=0;g<p;g++){for(var v=g%c,m=g-v+Math.max(0,v-a),w=g-v+Math.min(c,v+a+1),b=0,y=m;y<w;y++)b+=Math.pow(h[y],2);for(b=s*b+i,y=m;y<w;y++){var x=-2*s*u*h[y]*f[g]/b;g===y&&(x+=Math.pow(b,-u)),x*=l[g],d[y]+=x}}return ae(d,t.shape)},e.prototype.multinomial=function(t,n,o,a){$(t,"multinomial");for(var i=n?t:an(t),s=i.shape[0],u=i.shape[1],c=Rt([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(i.dataId),f=0;f<s;++f){var d=f*u,p=new Float32Array(u-1);p[0]=h[d];for(var g=1;g<p.length;++g)p[g]=p[g-1]+h[d+g];for(var v=xa(a.toString()),m=f*o,w=0;w<o;++w){var b=v();l[m+w]=p.length;for(var y=0;y<p.length;y++)if(b<p[y]){l[m+w]=y;break}}}return c},e.prototype.oneHot=function(t,n,o,a){$(t,"oneHot");var i=new Float32Array(t.size*n);i.fill(a);for(var s=this.readSync(t.dataId),u=0;u<t.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return xn(i,[t.size,n],"int32")},e.prototype.nonMaxSuppression=function(t,n,o,a,i){return $(t,"nonMaxSuppression"),ms(this.readSync(t.dataId),this.readSync(n.dataId),o,a,i)},e.prototype.fft=function(t){return this.fftBatch(t,!1)},e.prototype.ifft=function(t){return this.fftBatch(t,!0)},e.prototype.fftBatch=function(t,n){for(var o=t.shape[0],a=t.shape[1],i=at(t.shape,"float32"),s=at(t.shape,"float32"),u=be(t).as2D(o,a),c=Me(t).as2D(o,a),l=0;l<o;l++)for(var h=u.slice([l,0],[1,a]),f=c.slice([l,0],[1,a]),d=Xt(h,f),p=this.readSync(this.fftImpl(d,n).dataId),g=0;g<a;g++){var v=$u(p,g);i.values[l*a+g]=v.real,s.values[l*a+g]=v.imag}return Xt(i.toTensor(),s.toTensor()).as2D(o,a)},e.prototype.fftImpl=function(t,n){var o=t.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(t.shape[0],t.shape[1]);return n&&(i=Xt(be(i).div(H(a)),Me(i).div(H(a)))),i}var s=this.readSync(t.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),f=0;f<c.length;f+=2)l[f/2]=c[f],h[f/2]=c[f+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,a,n));return Xt(u.real,u.imag).as2D(t.shape[0],t.shape[1])},e.prototype.isExponentOf2=function(t){return(t&t-1)==0},e.prototype.fftRadix2=function(t,n,o){if(n===1)return t;var a=this.readSync(t.dataId),i=n/2,s=function(m){for(var w=Math.ceil(m.length/4),b=new Float32Array(w),y=new Float32Array(w),x=0;x<m.length;x+=4)b[Math.floor(x/4)]=m[x],y[Math.floor(x/4)]=m[x+1];return{real:b,imag:y}}(a),u=Xt(s.real,s.imag).as1D(),c=function(m){for(var w=Math.floor(m.length/4),b=new Float32Array(w),y=new Float32Array(w),x=2;x<m.length;x+=4)b[Math.floor(x/4)]=m[x],y[Math.floor(x/4)]=m[x+1];return{real:b,imag:y}}(a),l=Xt(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var h=function(m,w){for(var b=new Float32Array(m/2),y=new Float32Array(m/2),x=0;x<Math.ceil(m/2);x++){var _=(w?2:-2)*Math.PI*(x/m);b[x]=Math.cos(_),y[x]=Math.sin(_)}return{real:b,imag:y}}(n,o),f=Xt(h.real,h.imag).mul(l),d=u.add(f),p=u.sub(f),g=be(d).concat(be(p)),v=Me(d).concat(Me(p));return Xt(g,v).as1D()},e.prototype.fourierTransformByMatmul=function(t,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=sv(i*c,n,o),h=$u(t,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=n,u/=n),iv(a,s,u,i)}return a},e.prototype.depthToSpace=function(t,n,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=t.shape[0],i=t.shape[1],s=t.shape[2],u=t.shape[3],c=i*n,l=s*n,h=u/(n*n),f=this.readSync(t.dataId),d=new Float32Array(a*c*l*h),p=0,g=0;g<a;++g)for(var v=0;v<c;++v)for(var m=Math.floor(v/n),w=v%n,b=0;b<l;++b)for(var y=Math.floor(b/n),x=(w*n+b%n)*h,_=0;_<h;++_){var I=_+x+u*(y+s*(m+i*g));d[p++]=f[I]}return ae(d,[a,c,l,h])},e.prototype.broadcastedBinaryOp=function(t,n,o,a){var i=ft(t.shape,n.shape),s=at(i,o),u=this.readSync(t.dataId),c=this.readSync(n.dataId),l=vn(t.shape,i),h=vn(n.shape,i),f=s.values;if(l.length+h.length===0)for(var d=0;d<f.length;++d)f[d]=a(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(t),g=this.bufferSync(n),v=function(m){var w=s.indexToLoc(m),b=w.slice(-t.rank);l.forEach(function(I){return b[I]=0});var y=p.locToIndex(b),x=w.slice(-n.rank);h.forEach(function(I){return x[I]=0});var _=g.locToIndex(x);f[m]=a(u[y],c[_])};for(d=0;d<f.length;++d)v(d)}return s.toTensor()},e.prototype.broadcastedBinaryComplexOp=function(t,n,o){var a=ft(t.shape,n.shape),i=at(a,"float32"),s=at(a,"float32"),u=this.readSync(t.dataId),c=this.readSync(n.dataId),l=vn(t.shape,a),h=vn(n.shape,a),f=i.values,d=s.values;if(l.length+h.length===0)for(var p=0;p<f.length;p++){var g=p%u.length,v=p%c.length,m=o(u[2*g],u[2*g+1],c[2*v],c[2*v+1]);f[p]=m.real,d[p]=m.imag}else{var w=this.bufferSync(this.data.get(t.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(x){var _=i.indexToLoc(x),I=_.slice(-t.rank);l.forEach(function(D){return I[D]=0});var S=w.locToIndex(I),k=_.slice(-n.rank);h.forEach(function(D){return k[D]=0});var R=b.locToIndex(k),P=o(u[2*S],u[2*S+1],c[2*R],c[2*R+1]);f[x]=P.real,d[x]=P.imag};for(p=0;p<f.length;p++)y(p)}return this.complex(i.toTensor(),s.toTensor())},e.prototype.split=function(t,n,o){return kl(t,n,o)},e.prototype.dispose=function(){},e.prototype.floatPrecision=function(){return 32},e.prototype.epsilon=function(){return 1e-7},e.prototype.cropAndResize=function(t,n,o,a,i,s){for(var u=t.shape,c=u[0],l=u[1],h=u[2],f=u[3],d=n.shape[0],p=a[0],g=a[1],v=at([d,p,g,f],"float32"),m=this.readSync(n.dataId),w=this.readSync(o.dataId),b=this.readSync(t.dataId),y=t.strides,x=v.strides,_=0;_<d;_++){var I=4*_,S=m[I],k=m[I+1],R=m[I+2],P=m[I+3],D=w[_];if(!(D>=c))for(var L=p>1?(R-S)*(l-1)/(p-1):0,M=g>1?(P-k)*(h-1)/(g-1):0,B=0;B<p;B++){var z=p>1?S*(l-1)+B*L:.5*(S+R)*(l-1);if(z<0||z>l-1)for(var U=0;U<g;U++)for(var W=0;W<f;W++){var V=W+U*x[2]+B*x[1]+_*x[0];v.values[V]=s}else if(i==="bilinear"){var G=Math.floor(z),j=Math.ceil(z),tt=z-G;for(U=0;U<g;U++)if((pt=g>1?k*(h-1)+U*M:.5*(k+P)*(h-1))<0||pt>h-1)for(W=0;W<f;W++)V=W+U*x[2]+B*x[1]+_*x[0],v.values[V]=s;else{var et=Math.floor(pt),ut=Math.ceil(pt),ct=pt-et;for(W=0;W<f;W++){var ht=b[V=W+et*y[2]+G*y[1]+D*y[0]],vt=b[V=W+ut*y[2]+G*y[1]+D*y[0]],dt=b[V=W+et*y[2]+j*y[1]+D*y[0]],gt=ht+(vt-ht)*ct,Ot=dt+(b[V=W+ut*y[2]+j*y[1]+D*y[0]]-dt)*ct;V=W+U*x[2]+B*x[1]+_*x[0],v.values[V]=gt+(Ot-gt)*tt}}}else for(U=0;U<g;++U){var pt;if((pt=g>1?k*(h-1)+U*M:.5*(k+P)*(h-1))<0||pt>h-1)for(W=0;W<f;W++)V=W+U*x[2]+B*x[1]+_*x[0],v.values[V]=s;else{var Ct=Math.round(pt),bt=Math.round(z);for(W=0;W<f;W++){var Pt=W+Ct*y[2]+bt*y[1]+D*y[0],St=W+U*x[2]+B*x[1]+_*x[0];v.values[St]=b[Pt]}}}}}return v.toTensor()},e.prototype.sparseToDense=function(t,n,o,a){var i=ra(0,t,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,h=i.outputSize;return this.scatter(t,n,o,h,c,u,s,l,a,!1)},e.prototype.gatherND=function(t,n){var o=n.shape,a=o[o.length-1],i=vl(t,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Jt([],s,t.dtype);for(var h=new ro([u,c],t.dtype),f=this.readSync(n.dataId),d=this.readSync(t.dataId),p=0;p<u;p++){for(var g=[],v=0,m=0;m<a;m++){var w=f[p*a+m];v+=w*l[m],g.push(w)}if(v<0||v>=t.size/c)throw new Error("Invalid indices: "+g+" does not index into "+t.shape);for(var b=0;b<c;b++)h.values[p*c+b]=d[v*c+b]}return h.toTensor().reshape(s)},e.prototype.scatterND=function(t,n,o){var a=ra(0,t,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=H(0);return this.scatter(t,n,o,l,u,s,i,c,h,!0)},e.prototype.fill=function(t,n,o){var a=qo(o=o||ho(n),Y(t));return a.fill(n),T.makeTensor(a,t,o,this)},e.prototype.onesLike=function(t){if(t.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(t.shape,1,t.dtype)},e.prototype.zerosLike=function(t){var n=qo(t.dtype,Y(t.shape));return this.makeOutput(n,t.shape,t.dtype)},e.prototype.linspace=function(t,n,o){return Cl(t,n,o)},e.prototype.scatter=function(t,n,o,a,i,s,u,c,l,h){var f=[a/i,i],d=this.readSync(t.dataId),p=this.readSync(n.dataId);if(a===0)return Jt([],o,n.dtype);var g=new ro(f,n.dtype);g.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var m=[],w=0,b=0;b<u;b++){var y=d[v*u+b];m.push(y),w+=y*c[b]}if(w<0||w>=a/i)throw new Error("Invalid indices: "+m+" does not index into "+o);for(var x=0;x<i;x++)h?g.values[w*i+x]+=p[v*i+x]:g.values[w*i+x]=n.rank===0?p[0]:p[v*i+x]}return g.toTensor().reshape(o)},e}(xl);T.registerBackend("cpu",function(){return new Sy},1);for(var gi=0,lc=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=r.attrs,o=e,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=t;$(a,"NonMaxSuppressionWithScore");var d=ys(f.data.get(a.dataId).values,f.data.get(i.dataId).values,u,c,l,h);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e.x,o=t;$(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:io,backendName:"cpu",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e,o=n.a,a=n.b,i=t;$([o,a],io);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(f,d,p,g,v,m){var w=ft(f,d),b=w.length,y=We(w),x=no(v,Y(w)),_=f.length,I=d.length,S=We(f),k=We(d),R=vn(f,w),P=vn(d,w);if(R.length+P.length===0)for(var D=0;D<x.length;++D)x[D]=m(p[D%p.length],g[D%g.length]);else{var L=function(M){var B=Bd(M,b,y),z=B.slice(-_);R.forEach(function(G){return z[G]=0});var U=Nu(z,_,S),W=B.slice(-I);P.forEach(function(G){return W[G]=0});var V=Nu(W,I,k);x[M]=m(p[U],g[V])};for(D=0;D<x.length;++D)L(D)}return[x,w]}(o.shape,a.shape,s,u,o.dtype,function(f,d){var p=f-d;return p*p}),l=c[0],h=c[1];return{dataId:i.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];gi<lc.length;gi++)Kc(lc[gi]);var nr,Iy=function(r){this.variableNames=["A"];var e=te(),t=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+t+`.0);

        vec4 values = `+e.texture2D+`(A, uv);
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
    `},Ay=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var e=te(),t=r[0],n=r[1];this.outputShape=r,this.userCode=`
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
                       vec2(`+n+".0, "+t+`.0);
            vec4 values = `+e.texture2D+`(A, uv);
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

        `+e.output+` = result;
      }
    `};for(var mi=0,hc=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=r.attrs,o=e.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],f=[l,c,a];(s||i)&&(nr==null&&(nr=document.createElement("canvas").getContext("2d")),nr.canvas.width=c,nr.canvas.height=l,nr.drawImage(o,0,0,c,l),o=nr.canvas);var d=t.makeTensorInfo(h,"int32");t.texData.get(d.dataId).usage=pe.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(d.dataId),o);var p=F().getBool("WEBGL_PACK")?new Ay(f):new Iy(f),g=t.runWebGLProgram(p,[d],"int32");return t.disposeData(d.dataId),g}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=r.attrs;Jo("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=e,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=t,d=ys(f.readSync(a.dataId),f.readSync(i.dataId),u,c,l,h);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e.x,o=t,a=new st(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:io,backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e,o=n.a,a=n.b,i=t,s=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Je("return (a - b) * (a - b);",o.shape,a.shape):new Nt("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];mi<hc.length;mi++)Kc(hc[mi]);for(var yi=0,fc=[{kernelName:"Square",gradFunc:function(r,e){var t=e[0];return{x:function(){return r.mul(t.toFloat().mul(2))}}}},{kernelName:io,gradFunc:function(r,e){var t=e[0],n=e[1],o=H(2);return{a:function(){return ne(r,ne(o,$t(t,n)))},b:function(){return ne(r,ne(o,$t(n,t)))}}}}];yi<fc.length;yi++)Rd(fc[yi]);var Dy=function(){function r(){}return r.prototype.fetch=function(e,t){return fetch(e,t)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+t);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)},r.prototype.decode=function(e,t){return new TextDecoder(t).decode(e)},r}();F().get("IS_BROWSER")&&F().setPlatform("browser",new Dy);var bi,Ty=function(){return require("node-fetch")},Py=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(e,t){return F().global.fetch!=null?F().global.fetch(e,t):(bi==null&&(bi=Ty()),bi(e,t))},r.prototype.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6},r.prototype.encode=function(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+t);return this.textEncoder.encode(e)},r.prototype.decode=function(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)},r}();F().get("IS_NODE")&&F().setPlatform("node",new Py);var Vi={float32:4,int32:4,uint16:2,uint8:1,bool:1},la=4;function mh(r,e){for(var t={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=Y(l),f=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=Vi[d.dtype],g=r.slice(n,n+h*p),v=d.dtype==="uint8"?new Uint8Array(g):new Uint16Array(g);if(c==="float32")f=Float32Array.from(v,function(_){return _*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=Int32Array.from(v,function(_){return Math.round(_*d.scale+d.min)})}n+=h*p}else if(c==="string"){var m=Y(s.shape);f=[];for(var w=0;w<m;w++){var b=new Uint32Array(r.slice(n,n+la))[0];n+=la;var y=new Uint8Array(r.slice(n,n+b));f.push(y),n+=b}}else{var x=Vi[c];if(g=r.slice(n,n+h*x),c==="float32")f=new Float32Array(g);else if(c==="int32")f=new Int32Array(g);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=new Uint8Array(g)}n+=h*x}t[u]=Jt(f,l,c)},a=0,i=e;a<i.length;a++)o(i[a]);return t}function Ny(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var e=0,t=[];r.forEach(function(a){if(e+=a.byteLength,t.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(e),o=0;return t.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var Gi=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function dc(r){return Gi?Buffer.byteLength(r):new Blob([r]).size}function Bs(r){var e=0;r.forEach(function(o){e+=o.byteLength});var t=new Uint8Array(e),n=0;return r.forEach(function(o){t.set(new Uint8Array(o),n),n+=o.byteLength}),t.buffer}function pc(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var e=r.split("/");return e[e.length-1]}function bo(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:dc(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:dc(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var ve=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(e){r.getInstance().saveRouters.push(e)},r.registerLoadRouter=function(e){r.getInstance().loadRouters.push(e)},r.getSaveHandlers=function(e){return r.getHandlers(e,"save")},r.getLoadHandlers=function(e,t){return r.getHandlers(e,"load",t)},r.getHandlers=function(e,t,n){var o=[];return(t==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(e,n);i!==null&&o.push(i)}),o},r}(),pr="://",wn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(e,t){E(e!=null,function(){return"scheme must not be undefined or null."}),e.endsWith(pr)&&(e=e.slice(0,e.indexOf(pr))),E(e.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();E(n.managers[e]==null,function(){return"A model store manager is already registered for scheme '"+e+"'."}),n.managers[e]=t},r.getManager=function(e){var t=this.getInstance().managers[e];if(t==null)throw new Error("Cannot find model manager for scheme '"+e+"'");return t},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function $o(r){if(r.indexOf(pr)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+wn.getSchemes().join(","));return{scheme:r.split(pr)[0],path:r.split(pr)[1]}}function vc(r,e,t){return t===void 0&&(t=!1),K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h;return X(this,function(f){switch(f.label){case 0:return E(r!==e,function(){return"Old path and new path are the same: '"+r+"'"}),E((n=ve.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],E((a=ve.getSaveHandlers(e)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+e+"."}),E(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+e+"."}),i=a[0],s=$o(r).scheme,u=$o(r).path,c=s===$o(r).scheme,[4,o.load()];case 1:return l=f.sent(),t&&c?[4,wn.getManager(s).removeModel(u)]:[3,3];case 2:f.sent(),f.label=3;case 3:return[4,i.save(l)];case 4:return h=f.sent(),!t||c?[3,6]:[4,wn.getManager(s).removeModel(u)];case 5:f.sent(),f.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var Wn="models_store",gn="model_info_store";function yh(){if(!F().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,e=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Hi(r){var e=r.result;e.createObjectStore(Wn,{keyPath:"modelPath"}),e.createObjectStore(gn,{keyPath:"modelPath"})}var vr=function(){function r(e){if(this.indexedDB=yh(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){return X(this,function(t){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,e)]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(e,t){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Hi(i)},i.onsuccess=function(){var s=i.result;if(t==null){var u=s.transaction(Wn,"readonly"),c=u.objectStore(Wn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(g){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=bo(t),f=s.transaction(gn,"readwrite"),d=f.objectStore(gn),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:h});p.onsuccess=function(){var g=(l=s.transaction(Wn,"readwrite")).objectStore(Wn).put({modelPath:n.modelPath,modelArtifacts:t,modelArtifactsInfo:h});g.onsuccess=function(){return o({modelArtifactsInfo:h})},g.onerror=function(v){var m=(d=f.objectStore(gn)).delete(n.modelPath);m.onsuccess=function(){return s.close(),a(g.error)},m.onerror=function(w){return s.close(),a(g.error)}}},p.onerror=function(g){return s.close(),a(p.error)},f.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),gc=function(r){return F().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(vr.URL_SCHEME)?(e=r.slice(vr.URL_SCHEME.length),new vr(e)):null;var e};ve.registerSaveRouter(gc),ve.registerLoadRouter(gc);var Oy=function(){function r(){this.indexedDB=yh()}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var e=this;return X(this,function(t){return[2,new Promise(function(n,o){var a=e.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Hi(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(gn,"readonly"),u=s.objectStore(gn).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var f=h[l];c[f.modelPath]=f.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(e){return K(this,void 0,void 0,function(){var t=this;return X(this,function(n){var o;return e=(o=e).startsWith(vr.URL_SCHEME)?o.slice(vr.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=t.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Hi(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(gn,"readwrite"),h=l.objectStore(gn),f=h.get(e);f.onsuccess=function(){if(f.result==null)return c.close(),i(new Error("Cannot find model with path '"+e+"' in IndexedDB."));var d=h.delete(e),p=function(){var g=(u=c.transaction(Wn,"readwrite")).objectStore(Wn).delete(e);g.onsuccess=function(){return a(f.result.modelArtifactsInfo)},g.onerror=function(v){return i(f.error)}};d.onsuccess=p,d.onerror=function(g){return p(),c.close(),i(f.error)}},f.onerror=function(d){return c.close(),i(f.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(F().getBool("IS_BROWSER"))try{wn.registerManager(vr.URL_SCHEME,new Oy)}catch{}var Qe="/",cr="tensorflowjs_models",bh="info",Fy="model_topology",My="weight_specs",By="weight_data",Ly="model_metadata";function xh(r){return{info:[cr,r,bh].join(Qe),topology:[cr,r,Fy].join(Qe),weightSpecs:[cr,r,My].join(Qe),weightData:[cr,r,By].join(Qe),modelMetadata:[cr,r,Ly].join(Qe)}}function Wy(r){var e=r.split(Qe);if(e.length<3)throw new Error("Invalid key format: "+r);return e.slice(1,e.length-1).join(Qe)}var gr=function(){function r(e){if(!F().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=xh(this.modelPath)}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){var t,n,o;return X(this,function(a){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),o=bo(e);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(Gi)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(e.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var e,t,n,o,a,i,s;return X(this,function(u){if((e=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(t={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(t.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(t.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),t.format=i.format,t.generatedBy=i.generatedBy,t.convertedBy=i.convertedBy,t.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return t.weightData=function(c){if(Gi){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),f=new Uint8Array(h.length),d=0;d<h.length;++d)f.set([h.charCodeAt(d)],d);return f.buffer}(s),[2,t]})})},r.URL_SCHEME="localstorage://",r}(),mc=function(r){return F().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(gr.URL_SCHEME)?(e=r.slice(gr.URL_SCHEME.length),new gr(e)):null;var e};ve.registerSaveRouter(mc),ve.registerLoadRouter(mc);var Uy=function(){function r(){E(F().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var e,t,n,o,a,i;return X(this,function(s){for(e={},t=cr+Qe,n=Qe+bh,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(t)&&a.endsWith(n)&&(i=Wy(a),e[i]=JSON.parse(this.LS.getItem(a)));return[2,e]})})},r.prototype.removeModel=function(e){return K(this,void 0,void 0,function(){var t,n;return X(this,function(o){var a;if(e=(a=e).startsWith(gr.URL_SCHEME)?a.slice(gr.URL_SCHEME.length):a,t=xh(e),this.LS.getItem(t.info)==null)throw new Error("Cannot find model at path '"+e+"'");return n=JSON.parse(this.LS.getItem(t.info)),this.LS.removeItem(t.info),this.LS.removeItem(t.topology),this.LS.removeItem(t.weightSpecs),this.LS.removeItem(t.weightData),[2,n]})})},r}();if(F().getBool("IS_BROWSER"))try{wn.registerManager(gr.URL_SCHEME,new Uy)}catch{}var zy="model",$y=".json",Vy=".weights.bin";function yc(r){return new Promise(function(e){return setTimeout(e)}).then(r)}var xi=function(){function r(e){if(!F().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(r.URL_SCHEME)&&(e=e.slice(r.URL_SCHEME.length)),e!=null&&e.length!==0||(e=zy),this.modelTopologyFileName=e+$y,this.weightDataFileName=e+Vy}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s;return X(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"})),!(e.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,yc(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),e.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=t,[4,yc(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:bo(e)}]}})})},r.URL_SCHEME="downloads://",r}(),Gy=function(){function r(e){if(e==null||e.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+e);this.files=e}return r.prototype.load=function(){return K(this,void 0,void 0,function(){var e,t,n=this;return X(this,function(o){return e=this.files[0],t=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){t.length===0&&a({modelTopology:l});var h=c.weightsManifest;if(h!=null){var f;try{f=n.checkManifestAndWeightFiles(h,t)}catch(v){return void i(v)}var d=[],p=[],g=[];h.forEach(function(v){v.paths.forEach(function(m){p.push(m),g.push(null)}),d.push.apply(d,v.weights)}),h.forEach(function(v){v.paths.forEach(function(m){var w=new FileReader;w.onload=function(b){var y=b.target.result,x=p.indexOf(m);g[x]=y,g.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:d,weightData:Bs(g),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},w.onerror=function(b){return i("Failed to weights data from file of path '"+m+"'.")},w.readAsArrayBuffer(f[m])})})}else i(new Error("weightManifest field is missing from file "+e.name))}else i(new Error("modelTopology field is missing from file "+e.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+e.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(e)})]})})},r.prototype.checkManifestAndWeightFiles=function(e,t){for(var n=[],o=t.map(function(u){return pc(u.name)}),a={},i=0,s=e;i<s.length;i++)s[i].paths.forEach(function(u){var c=pc(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=t[o.indexOf(c)]});if(n.length!==t.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+t.length+").");return a},r}();function bc(r,e,t,n){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(t=t??0,n=n??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=t+ ++o/r.length*(n-t);return e(s),i}),a}))}function wh(r,e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l;return X(this,function(h){switch(h.label){case 0:return e==null&&(e={}),t=e.fetchFunc==null?F().platform.fetch:e.fetchFunc,n=r.map(function(f){return t(f,e.requestInit,{isBinary:!0})}),o=0,a=.5,e.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=h.sent(),[3,4];case 2:return[4,bc(n,e.onProgress,o,a)];case 3:i=h.sent(),h.label=4;case 4:return s=i.map(function(f){return f.arrayBuffer()}),u=.5,c=1,e.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,bc(s,e.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function xc(r){var e=this;return function(t,n,o){return n===void 0&&(n=""),K(e,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p;return X(this,function(g){switch(g.label){case 0:if(a=t.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],t.forEach(function(v,m){var w=0;v.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,x=Vi[y]*Y(b.shape),_=function(){a[m]=!0,i[m]==null&&(i[m]=[]),i[m].push({manifestEntry:b,groupOffset:w,sizeBytes:x})};o!=null?o.forEach(function(I,S){I===b.name&&(_(),s[S]=!0)}):_(),u.push(b.name),w+=x})}),!s.every(function(v){return v}))throw c=o.filter(function(v,m){return!s[m]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,m,w){return m&&v.push(w),v},[]),h=[],l.forEach(function(v){t[v].paths.forEach(function(m){var w=n+(n.endsWith("/")?"":"/")+m;h.push(w)})}),[4,r(h)];case 1:return f=g.sent(),d={},p=0,l.forEach(function(v){for(var m=t[v].paths.length,w=0,b=0;b<m;b++)w+=f[p+b].byteLength;for(var y=new ArrayBuffer(w),x=new Uint8Array(y),_=0,I=0;I<m;I++){var S=new Uint8Array(f[p+I]);x.set(S,_),_+=S.byteLength}i[v].forEach(function(k){var R=mh(y.slice(k.groupOffset,k.groupOffset+k.sizeBytes),[k.manifestEntry]);for(var P in R)d[P]=R[P]}),p+=m}),[2,d]}})})}}ve.registerSaveRouter(function(r){return F().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(xi.URL_SCHEME)?function(e){return e===void 0&&(e="model"),new xi(e)}(r.slice(xi.URL_SCHEME.length)):null});var _h=function(){function r(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,t.fetchFunc!=null?(E(typeof t.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=t.fetchFunc):this.fetch=F().platform.fetch,E(e!=null&&e.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(e)&&E(e.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+e.length+")."}),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){var t,n,o,a;return X(this,function(i){switch(i.label){case 0:if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata,weightsManifest:n},t.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),e.weightData!=null&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,t)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:bo(e),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var e,t,n,o,a,i,s,u,c,l,h,f;return X(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(e=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+e.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,e.json()];case 3:return t=d.sent(),[3,5];case 4:throw d.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=t.modelTopology,a=t.weightsManifest,i=t.generatedBy,s=t.convertedBy,u=t.format,c=t.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:f=d.sent(),l=f[0],h=f[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h,f;return X(this,function(d){switch(d.label){case 0:for(t=Array.isArray(this.path)?this.path[1]:this.path,n=function(p){var g=p.lastIndexOf("/"),v=p.lastIndexOf("?"),m=p.substring(0,g),w=v>g?p.substring(v):"";return[m+"/",w]}(t),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=e;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],e.forEach(function(p){p.paths.forEach(function(g){h.push(i+g+a)})}),[4,wh(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=d.sent(),[2,[s,Bs(f)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function ji(r){return r.match(_h.URL_SCHEME_REGEX)!=null}var wc=function(r,e){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(t){return ji(t)}):ji(r))?qi(r,{onProgress:e}):null};function qi(r,e){return new _h(r,e)}ve.registerSaveRouter(wc),ve.registerLoadRouter(wc);var wi=function(){function r(e){this.modelArtifacts=e}return r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,this.modelArtifacts]})})},r}(),Hy=function(){function r(e){this.saveHandler=e}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,this.saveHandler(e)]})})},r}(),Ch=Object.freeze({browserFiles:function(r){return new Gy(r)},browserHTTPRequest:function(r,e){return qi(r,e)},concatenateArrayBuffers:Bs,decodeWeights:mh,encodeWeights:function(r,e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s=this;return X(this,function(u){switch(u.label){case 0:for(t=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var f={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var d=new Promise(function(p){return K(s,void 0,void 0,function(){var g,v,m,w,b,y,x;return X(this,function(_){switch(_.label){case 0:return[4,h.bytes()];case 1:for(g=_.sent(),v=g.reduce(function(I,S){return I+S.length},0)+la*g.length,m=new Uint8Array(v),w=0,b=0;b<g.length;b++)y=g[b],x=new Uint8Array(new Uint32Array([y.length]).buffer),m.set(x,w),w+=la,m.set(y,w),w+=y.length;return p(m),[2]}})})});n.push(d)}else n.push(h.data());e!=null&&(f.group=e),t.push(f)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:Ny(u.sent()),specs:t}]}})})},fromMemory:function(r,e,t,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new wi(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new wi({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new wi({modelTopology:r,weightSpecs:e,weightData:t,trainingConfig:n}))},getLoadHandlers:function(r,e){return ve.getLoadHandlers(r,e)},getModelArtifactsInfoForJSON:bo,getSaveHandlers:function(r){return ve.getSaveHandlers(r)},http:qi,isHTTPScheme:ji,loadWeights:function(r,e,t,n){return e===void 0&&(e=""),K(this,void 0,void 0,function(){return X(this,function(o){return[2,xc(function(a){return wh(a,{requestInit:n})})(r,e,t)]})})},registerLoadRouter:function(r){return ve.registerLoadRouter(r)},registerSaveRouter:function(r){return ve.registerSaveRouter(r)},weightsLoaderFactory:xc,withSaveHandler:function(r){return new Hy(r)},copyModel:function(r,e){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,vc(r,e,!1)]})})},listModels:function(){return K(this,void 0,void 0,function(){var r,e,t,n,o,a,i;return X(this,function(s){switch(s.label){case 0:r=wn.getSchemes(),e={},t=0,n=r,s.label=1;case 1:return t<n.length?(o=n[t],[4,wn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())e[o+pr+i]=a[i];s.label=3;case 3:return t++,[3,1];case 4:return[2,e]}})})},moveModel:function(r,e){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,vc(r,e,!0)]})})},removeModel:function(r){return K(this,void 0,void 0,function(){var e;return X(this,function(t){return e=$o(r),[2,wn.getManager(e.scheme).removeModel(e.path)]})})}}),rr;A({confusionMatrix_:function(r,e,t){var n=C(r,"labels","confusionMatrix"),o=C(e,"predictions","confusionMatrix");E(t==null||t>0&&Number.isInteger(t),function(){return"If provided, numClasses must be a positive integer, but got "+t}),E(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(t>0&&Number.isInteger(t),function(){return"numClasses is required to be a positive integer, but got "+t});var a=Li(n.asType("int32"),t),i=Li(o.asType("int32"),t);return a.transpose().matMul(i).asType("int32")}});var jy=A({fromPixels_:function(r,e){if(e===void 0&&(e=3),e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var t=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(qc("FromPixels",T.backendName)!=null)return T.runKernel("FromPixels",{pixels:r},{numChannels:e});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,h).data:n||t?s=r.data:(a||o)&&(rr==null&&(rr=document.createElement("canvas").getContext("2d")),rr.canvas.width=l,rr.canvas.height=h,rr.drawImage(r,0,0,l,h),s=rr.getImageData(0,0,l,h).data),e===4)u=new Int32Array(s);else{var f=l*h;u=new Int32Array(f*e);for(var d=0;d<f;d++)for(var p=0;p<e;++p)u[d*e+p]=s[4*d+p]}return fs(u,[h,l,e],"int32")}}),Ls=Object.freeze({toPixels:function(r,e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h,f,d,p,g,v,m,w,b,y,x,_,I,S;return X(this,function(k){switch(k.label){case 0:if(t=C(r,"img","toPixels"),r instanceof At||(t=t.toInt()),t.rank!==2&&t.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+t.rank+".");if(n=t.shape.slice(0,2),o=n[0],a=n[1],(i=t.rank===2?1:t.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,t.data()];case 1:return s=k.sent(),u=t.min(),c=t.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=k.sent(),h=l[0],f=l[1],d=h[0],p=f[0],u.dispose(),c.dispose(),t.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(t.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+t.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(g=t.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),m=0;m<o*a;++m)w=void 0,b=void 0,y=void 0,x=void 0,i===1?(w=s[m]*g,b=s[m]*g,y=s[m]*g,x=255):i===3?(w=s[3*m]*g,b=s[3*m+1]*g,y=s[3*m+2]*g,x=255):i===4&&(w=s[4*m]*g,b=s[4*m+1]*g,y=s[4*m+2]*g,x=s[4*m+3]*g),v[(_=4*m)+0]=Math.round(w),v[_+1]=Math.round(b),v[_+2]=Math.round(y),v[_+3]=Math.round(x);return e!=null&&(e.width=a,e.height=o,I=e.getContext("2d"),S=new ImageData(v,a,o),I.putImageData(S,0,0)),t!==r&&t.dispose(),[2,v]}})})},fromPixels:jy}),qy=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(e,t){return new e(t)},r}(),Ky=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(e){r.getMap().classNameMap[e.className]=[e,e.fromConfig]},r}();function Yn(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Ky.register(r)}var Jn=function(r){function e(){return r!==null&&r.apply(this,arguments)||this}return Se(e,r),e.prototype.minimize=function(t,n,o){n===void 0&&(n=!1);var a=this.computeGradients(t,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return ue(s),n?i:(i.dispose(),null)},Object.defineProperty(e.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),e.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},e.prototype.computeGradients=function(t,n){return ov(t,n)},e.prototype.dispose=function(){this.iterations_!=null&&ue(this.iterations_)},e.prototype.saveIterations=function(){return K(this,void 0,void 0,function(){return X(this,function(t){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:H(this.iterations_,"int32")}]})})},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(t){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},e.prototype.extractIterations=function(t){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return n=this,[4,t[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,t.slice(1)]}})})},e}(qy);Object.defineProperty(Jn,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Xy=function(r){function e(t,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=t,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=T.backend.epsilon()),a}return Se(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:q(function(){return mt(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:q(function(){return mt(i).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;q(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),h=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),f=c.mul(n.rho).add(h.square().mul(1-n.rho));u.assign(l),c.assign(f);var d=h.mul(-n.learningRate).add(i);i.assign(d)})}}),this.incrementIterations()},e.prototype.dispose=function(){this.accumulatedUpdates!=null&&(ue(this.accumulatedGrads.map(function(t){return t.variable})),ue(this.accumulatedUpdates.map(function(t){return t.variable})))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(n){switch(n.label){case 0:return t=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(t.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(t)];case 1:return t=o.sent(),n=t.length/2,this.accumulatedGrads=t.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=t.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},e.fromConfig=function(t,n){return new t(n.learningRate,n.rho,n.epsilon)},e.className="Adadelta",e}(Jn);Yn(Xy);var Yy=function(r){function e(t,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=t,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return Se(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:q(function(){return Ue(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[o];if(s!=null){var u=n.accumulatedGrads[a].variable;q(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(T.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},e.prototype.dispose=function(){this.accumulatedGrads!=null&&ue(this.accumulatedGrads.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:return t=n.sent(),this.accumulatedGrads=t.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},e.fromConfig=function(t,n){return new t(n.learningRate,n.initialAccumulatorValue)},e.className="Adagrad",e}(Jn);Yn(Yy);var Jy=function(r){function e(t,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=t,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],q(function(){i.accBeta1=H(n).variable(),i.accBeta2=H(o).variable()}),a==null&&(i.epsilon=T.backend.epsilon()),i}return Se(e,r),e.prototype.applyGradients=function(t){var n=this,o=Array.isArray(t)?t.map(function(a){return a.name}):Object.keys(t);q(function(){var a=$t(1,n.accBeta1),i=$t(1,n.accBeta2);o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:q(function(){return mt(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:q(function(){return mt(c).variable(!1)})});var l=Array.isArray(t)?t[u].tensor:t[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedSecondMoment[u].variable,d=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=f.mul(n.beta2).add(l.square().mul(1-n.beta2)),g=d.div(a),v=p.div(i);h.assign(d),f.assign(p);var m=g.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(m)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},e.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ue(this.accumulatedFirstMoment.map(function(t){return t.variable})),this.accumulatedSecondMoment!=null&&ue(this.accumulatedSecondMoment.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(n){switch(n.label){case 0:return t=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(t.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){var n,o=this;return X(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(t)];case 1:return t=a.sent(),q(function(){o.accBeta1.assign(ua(o.beta1,o.iterations_+1)),o.accBeta2.assign(ua(o.beta2,o.iterations_+1))}),n=t.length/2,this.accumulatedFirstMoment=t.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=t.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},e.fromConfig=function(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)},e.className="Adam",e}(Jn);Yn(Jy);var Qy=function(r){function e(t,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=t,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],q(function(){s.iteration=H(0).variable(),s.accBeta1=H(n).variable()}),a==null&&(s.epsilon=T.backend.epsilon()),s}return Se(e,r),e.prototype.applyGradients=function(t){var n=this,o=Array.isArray(t)?t.map(function(a){return a.name}):Object.keys(t);q(function(){var a=$t(1,n.accBeta1),i=Ee(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:mt(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:mt(c).variable(!1)});var l=Array.isArray(t)?t[u].tensor:t[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedWeightedInfNorm[u].variable,d=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=f.mul(n.beta2),g=l.abs(),v=p.maximum(g);h.assign(d),f.assign(v);var m=i.div(a).mul(d.div(v.add(n.epsilon))).add(c);c.assign(m)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},e.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ue(this.accumulatedFirstMoment.map(function(t){return t.variable})),this.accumulatedWeightedInfNorm!=null&&ue(this.accumulatedWeightedInfNorm.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(t){throw new Error("getWeights() is not implemented for Adamax yet.")})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},e.fromConfig=function(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},e.className="Adamax",e}(Jn);Yn(Qy);var Eh=function(r){function e(t){var n=r.call(this)||this;return n.learningRate=t,n.setLearningRate(t),n}return Se(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=Array.isArray(t)?t[a].tensor:t[o];if(i!=null){var s=T.registeredVariables[o];q(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},e.prototype.setLearningRate=function(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=yp(H(-t))},e.prototype.dispose=function(){this.c.dispose()},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()]]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:if((t=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate}},e.fromConfig=function(t,n){return new t(n.learningRate)},e.className="SGD",e}(Jn);Yn(Eh);var Zy=function(r){function e(t,n,o){o===void 0&&(o=!1);var a=r.call(this,t)||this;return a.learningRate=t,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=H(a.momentum),a}return Se(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:q(function(){return mt(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(t)?t[a].tensor:t[o];u!=null&&q(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},e.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&ue(this.accumulations.map(function(t){return t.variable}))},e.prototype.setMomentum=function(t){this.momentum=t},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:return t=n.sent(),this.accumulations=t.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},e.fromConfig=function(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)},e.className="Momentum",e}(Eh);Yn(Zy);var tb=function(r){function e(t,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=t,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=T.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Se(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:q(function(){return mt(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:q(function(){return mt(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:q(function(){return mt(i).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;q(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var h=n.accumulatedMeanGrads[a].variable,f=h.mul(n.decay).add(s.mul(1-n.decay)),d=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(f.square().add(n.epsilon)).sqrt()));u.assign(l),h.assign(f),c.assign(d);var p=i.sub(d);i.assign(p)}else{var g=u.mul(n.decay).add(s.square().mul(1-n.decay));d=c.mul(n.momentum).add(s.mul(n.learningRate).div(g.add(n.epsilon).sqrt())),u.assign(g),c.assign(d),p=i.sub(d),i.assign(p)}})}}),this.incrementIterations()},e.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&ue(this.accumulatedMeanSquares.map(function(t){return t.variable})),this.accumulatedMeanGrads!=null&&this.centered&&ue(this.accumulatedMeanGrads.map(function(t){return t.variable})),this.accumulatedMoments!=null&&ue(this.accumulatedMoments.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(n){switch(n.label){case 0:return t=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&t.push.apply(t,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(t.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(t)];case 1:return t=o.sent(),n=this.centered?t.length/3:t.length/2,this.accumulatedMeanSquares=t.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=t.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=t.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},e.fromConfig=function(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},e.className="RMSProp",e}(Jn);Yn(tb);At.prototype.squaredDifference=function(r){return Wl(this,r)},O=Ry;/*! *****************************************************************************
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
***************************************************************************** */var Ki=function(r,e){return Ki=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])},Ki(r,e)};function ot(r,e){Ki(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Zt=function(){return Zt=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Zt.apply(this,arguments)};function Q(r,e,t,n){function o(a){return a instanceof t?a:new t(function(i){i(a)})}return new(t||(t=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(h){i(h)}}function u(l){try{c(n.throw(l))}catch(h){i(h)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,[])).next())})}function Z(r,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){t.label=c[1];break}if(c[0]===6&&t.label<a[1]){t.label=a[1],a=c;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(c);break}a[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(r,t)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Xr(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),o=0,e=0;e<t;e++)for(var a=arguments[e],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var mr=function(){function r(e,t){if(!zn(e)||!zn(t))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:e,height:t}));this._width=e,this._height=t}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function Ia(r,e){return r instanceof At&&r.shape.length===e}function eb(r){return Ia(r,2)}function Aa(r){return Ia(r,3)}function _n(r){return Ia(r,4)}function nb(r){return r%1!==0}function _c(r){return r%2===0}function kh(r,e){e===void 0&&(e=2);var t=Math.pow(10,e);return Math.floor(r*t)/t}function Cc(r){return r&&r.width&&r.height}function rb(r,e){var t=r.width,n=r.height,o=e/Math.max(n,t);return new mr(Math.round(t*o),Math.round(n*o))}function Ws(r){return r.reduce(function(e,t){return e.add(t)},new yt(0,0)).div(new yt(r.length,r.length))}function so(r,e,t){return Array(r).fill(0).map(function(n,o){return e+o*t})}function zn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Ec(r){return zn(r)&&0<=r&&r<=1}var yt=function(){function r(e,t){this._x=e,this._y=t}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(e){return new r(this.x+e.x,this.y+e.y)},r.prototype.sub=function(e){return new r(this.x-e.x,this.y-e.y)},r.prototype.mul=function(e){return new r(this.x*e.x,this.y*e.y)},r.prototype.div=function(e){return new r(this.x/e.x,this.y/e.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),$e=function(){function r(e,t){t===void 0&&(t=!0);var n=e||{},o=[n.left,n.top,n.right,n.bottom].every(zn),a=[n.x,n.y,n.width,n.height].every(zn);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",t),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(e){return!!e&&[e.x,e.y,e.width,e.height].every(zn)},r.assertIsValidBox=function(e,t,n){if(n===void 0&&(n=!1),!r.isRect(e))throw new Error(t+" - invalid box: "+JSON.stringify(e)+", expected object with properties x, y, width, height");if(!n&&(e.width<0||e.height<0))throw new Error(t+" - width ("+e.width+") and height ("+e.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new yt(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new yt(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new yt(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new yt(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var e=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),t=e[0],n=e[1],o=e[2],a=e[3];return new r({x:t,y:n,width:o,height:a})},r.prototype.floor=function(){var e=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),t=e[0],n=e[1],o=e[2],a=e[3];return new r({x:t,y:n,width:o,height:a})},r.prototype.toSquare=function(){var e=this,t=e.x,n=e.y,o=e.width,a=e.height,i=Math.abs(o-a);return o<a&&(t-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:t,y:n,width:o,height:a})},r.prototype.rescale=function(e){var t=Cc(e)?e.width:e,n=Cc(e)?e.height:e;return new r({x:this.x*t,y:this.y*n,width:this.width*t,height:this.height*n})},r.prototype.pad=function(e,t){var n=[this.x-e/2,this.y-t/2,this.width+e,this.height+t],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(e,t){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,h=s-c,f=Math.min(l,e-u),d=Math.min(h,t-c);return new r({x:u,y:c,width:f,height:d}).floor()},r.prototype.shift=function(e,t){var n=this,o=n.width,a=n.height,i=this.x+e,s=this.y+t;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(e,t){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,h=this.right,f=this.bottom;return h>t&&(s=-h+t+n,h=t),f>e&&(u=-f+e+o,f=e),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:f,x:c,ex:h,w:n,h:o}},r.prototype.calibrate=function(e){return new r({left:this.left+e.left*this.width,top:this.top+e.top*this.height,right:this.right+e.right*this.width,bottom:this.bottom+e.bottom*this.height}).toSquare().round()},r}(),Da=function(r){ot(e,r);function e(t,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:t,top:n,right:o,bottom:a},i)||this}return e}($e),Rh=function(){function r(e,t,n,o,a){this._imageDims=new mr(a.width,a.height),this._score=e,this._classScore=t,this._className=n,this._box=new $e(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new $e(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(e,t){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:e,height:t})},r}(),_e=function(r){ot(e,r);function e(t,n,o){return r.call(this,t,t,"",n,o)||this}return e.prototype.forSize=function(t,n){var o=r.prototype.forSize.call(this,t,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new e(a,i,s)},e}(Rh);function ob(r,e,t){t===void 0&&(t=!0);var n=Math.max(0,Math.min(r.right,e.right)-Math.max(r.left,e.left)),o=Math.max(0,Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top)),a=n*o;return t?a/(r.area+e.area-a):a/Math.min(r.area,e.area)}function ab(r){var e=r.map(function(s){return s.x}),t=r.map(function(s){return s.y}),n=e.reduce(function(s,u){return u<s?u:s},1/0),o=t.reduce(function(s,u){return u<s?u:s},1/0),a=e.reduce(function(s,u){return s<u?u:s},0),i=t.reduce(function(s,u){return s<u?u:s},0);return new Da(n,o,a,i)}function uo(r,e,t,n){n===void 0&&(n=!0);for(var o=e.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var h=u[l],f=r[s],d=r[h];c.push(ob(f,d,n))}o=o.filter(function(p,g){return c[g]<=t})};o.length>0;)i();return a}function xo(r,e){return q(function(){var t=e[0],n=e[1],o=e[2],a=Ue(Xr(r.shape.slice(0,3),[1]),t),i=Ue(Xr(r.shape.slice(0,3),[1]),n),s=Ue(Xr(r.shape.slice(0,3),[1]),o),u=Wt([a,i,s],3);return $t(r,u)})}function ib(r,e){return e===void 0&&(e=!1),q(function(){var t=r.shape.slice(1),n=t[0],o=t[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(e?.5:1)),s=n>o?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,Ue(p,0)},c=u(i),l=a-c.shape[s],h=e&&l?u(l):null,f=[h,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Wt(f,s)})}function _i(r){return 1/(1+Math.exp(-r))}var Us=function(r){ot(e,r);function e(t,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:t,y:n,width:o,height:a},i)||this}return e}($e),sb=.5,ub=.43,cb=.45,ha=function(){function r(e,t,n){n===void 0&&(n=new yt(0,0));var o=t.width,a=t.height;this._imgDims=new mr(o,a),this._shift=n,this._positions=e.map(function(i){return i.mul(new yt(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new yt(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var e=this;return this._positions.map(function(t){return t.sub(e._shift).div(new yt(e.imageWidth,e.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(e,t){return new this.constructor(this.relativePositions,{width:e,height:t})},r.prototype.shiftBy=function(e,t){return new this.constructor(this.relativePositions,this._imgDims,new yt(e,t))},r.prototype.shiftByPoint=function(e){return this.shiftBy(e.x,e.y)},r.prototype.align=function(e,t){if(t===void 0&&(t={}),e){var n=e instanceof _e?e.box.floor():new $e(e);return this.shiftBy(n.x,n.y).align(null,t)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},t),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var e=this.getRefPointsForAlignment(),t=e[0],n=e[1],o=e[2],a=function(h){return o.sub(h).magnitude()},i=(a(t)+a(n))/2,s=Math.floor(i/cb),u=Ws(e),c=Math.floor(Math.max(0,u.x-sb*s)),l=Math.floor(Math.max(0,u.y-ub*s));return new Us(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(e){var t=ab(this.positions);return t.pad(t.width*e,t.height*e)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),lb=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getRefPointsForAlignment=function(){var t=this.positions;return[t[0],t[1],Ws([t[3],t[4]])]},e}(ha),hb=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getJawOutline=function(){return this.positions.slice(0,17)},e.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},e.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},e.prototype.getNose=function(){return this.positions.slice(27,36)},e.prototype.getLeftEye=function(){return this.positions.slice(36,42)},e.prototype.getRightEye=function(){return this.positions.slice(42,48)},e.prototype.getMouth=function(){return this.positions.slice(48,68)},e.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Ws)},e}(ha),kc=function(){function r(e,t){this._label=e,this._distance=t}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(e){return e===void 0&&(e=!0),""+this.label+(e?" ("+kh(this.distance)+")":"")},r}(),Rc=function(r){ot(e,r);function e(t,n){var o=r.call(this,t)||this;return o._label=n,o}return e.assertIsValidLabeledBox=function(t,n){if($e.assertIsValidBox(t,n),!zn(t.label))throw new Error(n+" - expected property label ("+t.label+") to be a number")},Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),e}($e),Fo=function(){function r(e,t){if(typeof e!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(t)||t.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=e,this._descriptors=t}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(e){return Array.from(e)})}},r.fromJSON=function(e){var t=e.descriptors.map(function(n){return new Float32Array(n)});return new r(e.label,t)},r}();(function(r){ot(e,r);function e(t,n,o,a){var i=r.call(this,t,n)||this;return i._score=o,i._classScore=a,i}return e.assertIsValidPredictedBox=function(t,n){if(Rc.assertIsValidLabeledBox(t,n),!Ec(t.score)||!Ec(t.classScore))throw new Error(n+" - expected properties score ("+t.score+") and ("+t.classScore+") to be a number between [0, 1]")},Object.defineProperty(e.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),e})(Rc);function Xi(r){return r.detection instanceof _e}function zs(r,e){var t={detection:e};return Object.assign({},r,t)}function Sh(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},e=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:e}}function Ih(r){var e="";if(!r)try{r=require("fs")}catch(n){e=n.toString()}var t=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+e)};return{readFile:t}}function Ah(){var r=global.Canvas||global.HTMLCanvasElement,e=global.Image||global.HTMLImageElement,t=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(e)return new e;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=Ih();return Zt({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:e||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:t,createImageElement:n,fetch:o},a)}function Dh(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function Th(){return typeof global=="object"&&typeof require=="function"&&typeof Cf<"u"&&typeof process<"u"&&!!process.version}var Lt;function fb(){if(!Lt)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Lt}function Yi(r){Lt=r}function $s(){Dh()&&Yi(Sh()),Th()&&Yi(Ah())}function db(r){if(Lt||$s(),!Lt)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var e=r.Canvas,t=e===void 0?Lt.Canvas:e,n=r.Image,o=n===void 0?Lt.Image:n;Lt.Canvas=t,Lt.Image=o,Lt.createCanvasElement=r.createCanvasElement||function(){return new t},Lt.createImageElement=r.createImageElement||function(){return new o},Lt.ImageData=r.ImageData||Lt.ImageData,Lt.Video=r.Video||Lt.Video,Lt.fetch=r.fetch||Lt.fetch,Lt.readFile=r.readFile||Lt.readFile}var oe={getEnv:fb,setEnv:Yi,initialize:$s,createBrowserEnv:Sh,createFileSystem:Ih,createNodejsEnv:Ah,monkeyPatch:db,isBrowser:Dh,isNodejs:Th};$s();function Vs(r){return!oe.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function rn(r){var e=oe.getEnv(),t=e.Canvas,n=e.CanvasRenderingContext2D;if(r instanceof n)return r;var o=Vs(r);if(!(o instanceof t))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var mn;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(mn||(mn={}));var Ph=function(){function r(e){e===void 0&&(e={});var t=e.anchorPosition,n=e.backgroundColor,o=e.fontColor,a=e.fontSize,i=e.fontStyle,s=e.padding;this.anchorPosition=t||mn.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}(),Nh=function(){function r(e,t,n){n===void 0&&(n={}),this.text=typeof e=="string"?[e]:e instanceof r?e.text:e,this.anchor=t,this.options=new Ph(n)}return r.prototype.measureWidth=function(e){var t=this.options.padding;return this.text.map(function(n){return e.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*t},r.prototype.measureHeight=function(){var e=this.options,t=e.fontSize,n=e.padding;return this.text.length*t+2*n},r.prototype.getUpperLeft=function(e,t){var n=this.options.anchorPosition,o=n===mn.BOTTOM_RIGHT||n===mn.TOP_RIGHT,a=n===mn.BOTTOM_LEFT||n===mn.BOTTOM_RIGHT,i=this.measureWidth(e),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(t){var l=t.width,h=t.height,f=Math.max(Math.min(u,l-i),0),d=Math.max(Math.min(c,h-s),0);return{x:f,y:d}}return{x:u,y:c}},r.prototype.draw=function(e){var t=Vs(e),n=rn(t),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),h=this.measureHeight();n.fillStyle=a;var f=this.getUpperLeft(n,t);n.fillRect(f.x,f.y,l,h),n.fillStyle=i,this.text.forEach(function(d,p){var g=c+f.x,v=c+f.y+(p+1)*s;n.fillText(d,g,v)})},r}(),pb=function(){function r(e){e===void 0&&(e={});var t=e.boxColor,n=e.lineWidth,o=e.label,a=e.drawLabelOptions;this.boxColor=t||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var i={anchorPosition:mn.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new Ph(Object.assign({},i,a))}return r}(),vb=function(){function r(e,t){t===void 0&&(t={}),this.box=new $e(e),this.options=new pb(t)}return r.prototype.draw=function(e){var t=rn(e),n=this.options,o=n.boxColor,a=n.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;t.strokeStyle=o,t.lineWidth=a,t.strokeRect(s,u,c,l);var h=this.options.label;h&&new Nh([h],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(e)},r}();function gb(r,e){var t=Array.isArray(e)?e:[e];t.forEach(function(n){var o=n instanceof _e?n.score:Xi(n)?n.detection.score:void 0,a=n instanceof _e?n.box:Xi(n)?n.detection.box:new $e(n),i=o?""+kh(o):void 0;new vb(a,{label:i}).draw(r)})}function Oh(r){var e=oe.getEnv(),t=e.Image,n=e.Video;return r instanceof t&&r.complete||r instanceof n&&r.readyState>=3}function mb(r){return new Promise(function(e,t){if(r instanceof oe.getEnv().Canvas||Oh(r))return e();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function Fh(r){var e=oe.getEnv(),t=e.Image,n=e.Video;return r instanceof t?new mr(r.naturalWidth,r.naturalHeight):r instanceof n?new mr(r.videoWidth,r.videoHeight):new mr(r.width,r.height)}function Ta(r){var e=r.width,t=r.height,n=oe.getEnv().createCanvasElement,o=n();return o.width=e,o.height=t,o}function Gs(r,e){var t=oe.getEnv().ImageData;if(!(r instanceof t)&&!Oh(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=Fh(r),o=n.width,a=n.height,i=Ta({width:o,height:a});return r instanceof t?rn(i).putImageData(r,0,0):rn(i).drawImage(r,0,0,o,a),i}function yb(r,e){return Q(this,void 0,void 0,function(){var t,n,o,a,i,s;return Z(this,function(u){switch(u.label){case 0:return t=oe.getEnv().createCanvasElement(),n=r.shape.slice(_n(r)?1:0),o=n[0],a=n[1],i=n[2],s=q(function(){return r.as3D(o,a,i).toInt()}),[4,Ls.toPixels(s,t)];case 1:return u.sent(),s.dispose(),[2,t]}})})}function Sc(r){var e=oe.getEnv(),t=e.Image,n=e.Canvas,o=e.Video;return r instanceof t||r instanceof n||r instanceof o}function bb(r,e,t){t===void 0&&(t=!1);var n=oe.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=Fh(r),s=e/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=Ta({width:e,height:e}),h=r instanceof a?r:Gs(r),f=Math.abs(u-c)/2,d=t&&u<c?f:0,p=t&&c<u?f:0;return rn(l).drawImage(h,d,p,u,c),l}var fa=function(){function r(e,t){var n=this;if(t===void 0&&(t=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(e))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+e);this._treatAsBatchInput=t,this._batchSize=e.length,e.forEach(function(o,a){if(Aa(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(_n(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof oe.getEnv().Canvas?o:Gs(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var e=this;return so(this.batchSize,0,1).map(function(t,n){return e.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(e){return this.canvases[e]||this.imageTensors[e]},r.prototype.getInputDimensions=function(e){return this._inputDimensions[e]},r.prototype.getInputHeight=function(e){return this._inputDimensions[e][0]},r.prototype.getInputWidth=function(e){return this._inputDimensions[e][1]},r.prototype.getReshapedInputDimensions=function(e){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var t=this.getInputWidth(e),n=this.getInputHeight(e);return rb({width:t,height:n},this.inputSize)},r.prototype.toBatchTensor=function(e,t){var n=this;return t===void 0&&(t=!0),this._inputSize=e,q(function(){var o=so(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof At){var u=_n(s)?s:s.expandDims();return u=ib(u,t),(u.shape[1]!==e||u.shape[2]!==e)&&(u=Ps.resizeBilinear(u,[e,e])),u.as3D(e,e,3)}if(s instanceof oe.getEnv().Canvas)return Ls.fromPixels(bb(s,e,t));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=me(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,e,e,3);return a})},r}();function qt(r){return Q(this,void 0,void 0,function(){var e,t,n;return Z(this,function(o){switch(o.label){case 0:if(r instanceof fa)return[2,r];if(e=Array.isArray(r)?r:[r],!e.length)throw new Error("toNetInput - empty array passed as input");return t=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=e.map(Vs),n.forEach(function(a,i){if(!Sc(a)&&!Aa(a)&&!_n(a))throw typeof e[i]=="string"?new Error("toNetInput -"+t(i)+" string passed, but could not resolve HTMLElement for element id "+e[i]):new Error("toNetInput -"+t(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(_n(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+t(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return Sc(a)&&mb(a)}))];case 1:return o.sent(),[2,new fa(n,Array.isArray(r))]}})})}function Hs(r,e){return Q(this,void 0,void 0,function(){var t,n,o,a,i,s,u;return Z(this,function(c){switch(c.label){case 0:return t=oe.getEnv().Canvas,n=r,r instanceof t?[3,5]:[4,qt(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof t?(i=a,[3,4]):[3,2];case 2:return[4,yb(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=rn(n),u=e.map(function(l){return l instanceof _e?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var h=l.x,f=l.y,d=l.width,p=l.height,g=Ta({width:d,height:p});return rn(g).putImageData(s.getImageData(h,f,d,p),0,0),g})]}})})}function js(r,e){return Q(this,void 0,void 0,function(){return Z(this,function(t){if(!Aa(r)&&!_n(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(_n(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,q(function(){var n=r.shape.slice(_n(r)?1:0),o=n[0],a=n[1],i=n[2],s=e.map(function(c){return c instanceof _e?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,h=c.y,f=c.width,d=c.height;return ih(r.as3D(o,a,i),[h,l,0],[d,f,i])});return u})]})})}function xb(r,e){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return t=oe.getEnv().fetch,[4,t(r,e)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function wb(r){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return[4,xb(r)];case 1:return[2,e.sent().json()]}})})}function Mh(r,e){var t=e+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:t};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+t};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:t,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function _b(r,e){return Q(this,void 0,void 0,function(){var t,n,o,a;return Z(this,function(i){switch(i.label){case 0:return t=Mh(r,e),n=t.manifestUri,o=t.modelBaseUri,[4,wb(n)];case 1:return a=i.sent(),[2,Ch.loadWeights(a,o)]}})})}var un=function(){function r(e){this._name=e,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(e){var t=this.traversePropertyPath(e),n=t.obj,o=t.objProp;return n[o]},r.prototype.reassignParamFromPath=function(e,t){var n=this.traversePropertyPath(e),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=t},r.prototype.getParamList=function(){var e=this;return this._paramMappings.map(function(t){var n=t.paramPath;return{path:n,tensor:e.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(e){return e.tensor instanceof Or})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(e){return!(e.tensor instanceof Or)})},r.prototype.variable=function(){var e=this;this.getFrozenParams().forEach(function(t){var n=t.path,o=t.tensor;e.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var e=this;this.getTrainableParams().forEach(function(t){var n=t.path,o=t.tensor,a=Jt(o.dataSync());o.dispose(),e.reassignParamFromPath(n,a)})},r.prototype.dispose=function(e){e===void 0&&(e=!0),this.getParamList().forEach(function(t){if(e&&t.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+t.path);t.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(e){var t=e.tensor;return Array.from(t.dataSync())}).reduce(function(e,t){return e.concat(t)}))},r.prototype.load=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(t){switch(t.label){case 0:return e instanceof Float32Array?(this.extractWeights(e),[2]):[4,this.loadFromUri(e)];case 1:return t.sent(),[2]}})})},r.prototype.loadFromUri=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(n){switch(n.label){case 0:if(e&&typeof e!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,_b(e,this.getDefaultModelName())];case 1:return t=n.sent(),this.loadFromWeightMap(t),[2]}})})},r.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h;return Z(this,function(f){switch(f.label){case 0:if(e&&typeof e!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return t=oe.getEnv().readFile,n=Mh(e,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(d){return Promise.all(d.map(function(p){return t(p).then(function(g){return g.buffer})}))},s=Ch.weightsLoaderFactory(i),l=(c=JSON).parse,[4,t(o)];case 1:return u=l.apply(c,[f.sent().toString()]),[4,s(u,a)];case 2:return h=f.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(e){var t=this.extractParamsFromWeigthMap(e),n=t.paramMappings,o=t.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(e){var t=this.extractParams(e),n=t.paramMappings,o=t.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(e){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var t=e.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+e);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=t.obj,o=t.objProp;if(!n||!o||!(n[o]instanceof At))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+e);return{obj:n,objProp:o}},r}();function ge(r,e,t){return q(function(){var n=Ss(r,e.depthwise_filter,e.pointwise_filter,t,"same");return n=lt(n,e.bias),n})}function Ci(r,e,t){return t===void 0&&(t=!1),q(function(){var n=Dt(t?lt(Ce(r,e.conv0.filters,[2,2],"same"),e.conv0.bias):ge(r,e.conv0,[2,2])),o=ge(n,e.conv1,[1,1]),a=Dt(lt(n,o)),i=ge(a,e.conv2,[1,1]);return Dt(lt(n,lt(o,i)))})}function Mo(r,e,t,n){return t===void 0&&(t=!1),n===void 0&&(n=!0),q(function(){var o=Dt(t?lt(Ce(r,e.conv0.filters,n?[2,2]:[1,1],"same"),e.conv0.bias):ge(r,e.conv0,n?[2,2]:[1,1])),a=ge(o,e.conv1,[1,1]),i=Dt(lt(o,a)),s=ge(i,e.conv2,[1,1]),u=Dt(lt(o,lt(a,s))),c=ge(u,e.conv3,[1,1]);return Dt(lt(o,lt(a,lt(s,c))))})}function Re(r,e,t,n){return t===void 0&&(t="same"),n===void 0&&(n=!1),q(function(){var o=lt(Ce(r,e.filters,[1,1],t),e.bias);return n?Dt(o):o})}function cn(r,e){Object.keys(r).forEach(function(t){e.some(function(n){return n.originalPath===t})||r[t].dispose()})}function Pa(r,e){return function(t,n,o,a){var i=ae(r(t*n*o*o),[o,o,t,n]),s=Bt(r(n));return e.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function qs(r,e){return function(t,n,o){var a=xn(r(t*n),[t,n]),i=Bt(r(n));return e.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var Bh=function(){function r(e,t,n){this.depthwise_filter=e,this.pointwise_filter=t,this.bias=n}return r}();function Ks(r,e){return function(t,n,o){var a=ae(r(9*t),[3,3,t,1]),i=ae(r(t*n),[1,1,t,n]),s=Bt(r(n));return e.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Bh(a,i,s)}}function Xs(r){return function(e){var t=r(e+"/depthwise_filter",4),n=r(e+"/pointwise_filter",4),o=r(e+"/bias",1);return new Bh(t,n,o)}}function An(r,e){return function(t,n,o){var a=r[t];if(!Ia(a,n))throw new Error("expected weightMap["+t+"] to be a Tensor"+n+"D, instead have "+a);return e.push({originalPath:t,paramPath:o||t}),a}}function ln(r){var e=r;function t(o){var a=e.slice(0,o);return e=e.slice(o),a}function n(){return e}return{extractWeights:t,getRemainingWeights:n}}function Lh(r,e){var t=Pa(r,e),n=Ks(r,e);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?t(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),h=n(s,s,u+"/conv1"),f=n(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:f}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),h=l.conv0,f=l.conv1,d=l.conv2,p=n(s,s,u+"/conv3");return{conv0:h,conv1:f,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function Cb(r){var e=[],t=ln(r),n=t.extractWeights,o=t.getRemainingWeights,a=Lh(n,e).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function Wh(r){return function(e){var t=r(e+"/filters",4),n=r(e+"/bias",1);return{filters:t,bias:n}}}function Uh(r,e){var t=An(r,e),n=Wh(t),o=Xs(t);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2"),f=o(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:f}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function Eb(r){var e=[],t=Uh(r,e).extractDenseBlock4Params,n={dense0:t("dense0",!0),dense1:t("dense1"),dense2:t("dense2"),dense3:t("dense3")};return cn(r,e),{params:n,paramMappings:e}}var zh=function(r){ot(e,r);function e(){return r.call(this,"FaceFeatureExtractor")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return q(function(){var o=t.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=xo(o,a).div(H(255)),s=Mo(i,n.dense0,!0);return s=Mo(s,n.dense1),s=Mo(s,n.dense2),s=Mo(s,n.dense3),s=yo(s,[7,7],[2,2],"valid"),s})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Eb(t)},e.prototype.extractParams=function(t){return Cb(t)},e}(un);function Be(r,e){return q(function(){return lt(ka(r,e.weights),e.bias)})}function kb(r,e,t){var n=[],o=ln(r),a=o.extractWeights,i=o.getRemainingWeights,s=qs(a,n),u=s(e,t,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function Rb(r){var e=[],t=An(r,e);function n(a){var i=t(a+"/weights",2),s=t(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return cn(r,e),{params:o,paramMappings:e}}function $h(r){var e={},t={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?t:e;o[n]=r[n]}),{featureExtractorMap:e,classifierMap:t}}var Vh=function(r){ot(e,r);function e(t,n){var o=r.call(this,t)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(e.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),e.prototype.runNet=function(t){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return q(function(){var a=t instanceof fa?n.faceFeatureExtractor.forwardInput(t):t;return Be(a.as2D(a.shape[0],-1),o.fc)})},e.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),r.prototype.dispose.call(this,t)},e.prototype.loadClassifierParams=function(t){var n=this.extractClassifierParams(t),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},e.prototype.extractClassifierParams=function(t){return kb(t,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},e.prototype.extractParamsFromWeigthMap=function(t){var n=$h(t),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Rb(a)},e.prototype.extractParams=function(t){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=t.slice(0,t.length-a),s=t.slice(t.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},e}(un),Ic=["neutral","happy","sad","angry","fearful","disgusted","surprised"],Sb=function(){function r(e){var t=this;if(e.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+e.length);Ic.forEach(function(n,o){t[n]=e[o]})}return r.prototype.asSortedArray=function(){var e=this;return Ic.map(function(t){return{expression:t,probability:e[t]}}).sort(function(t,n){return n.probability-t.probability})},r}(),Ib=function(r){ot(e,r);function e(t){return t===void 0&&(t=new zh),r.call(this,"FaceExpressionNet",t)||this}return e.prototype.forwardInput=function(t){var n=this;return q(function(){return an(n.runNet(t))})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.predictExpressions=function(t){return Q(this,void 0,void 0,function(){var n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,qt(t)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(Ut(o).map(function(c){return Q(s,void 0,void 0,function(){var l;return Z(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new Sb(c)}),[2,n.isBatchInput?i:i[0]]}})})},e.prototype.getDefaultModelName=function(){return"face_expression_model"},e.prototype.getClassifierChannelsIn=function(){return 256},e.prototype.getClassifierChannelsOut=function(){return 7},e}(Vh);function Gh(r,e){var t={expressions:e};return Object.assign({},r,t)}function Ab(r){return Xi(r)&&r.landmarks instanceof ha&&r.unshiftedLandmarks instanceof ha&&r.alignedRect instanceof _e}function Ys(r,e){var t=r.detection.box,n=e.shiftBy(t.x,t.y),o=n.align(),a=r.detection.imageDims,i=new _e(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:e,alignedRect:i};return Object.assign({},r,s)}function Db(r,e){var t=Pa(r,e),n=Ks(r,e);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),h=t(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:t,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function Tb(r,e){var t=[],n=ln(r),o=n.extractWeights,a=n.getRemainingWeights,i=Db(o,t),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),f=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:h,reduction_block_0:f,reduction_block_1:d},g={};so(e,0,1).forEach(function(b){g["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var v=c(128,256,"exit_flow/reduction_block"),m=u(256,512,"exit_flow/separable_conv"),w={reduction_block:v,separable_conv:m};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:t,params:{entry_flow:p,middle_flow:g,exit_flow:w}}}function Pb(r,e){var t=An(r,e),n=Wh(t),o=Xs(t);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function Nb(r,e){var t=[],n=Pb(r,t),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},f={};so(e,0,1).forEach(function(v){f["main_block_"+v]=s("middle_flow/main_block_"+v)});var d=i("exit_flow/reduction_block"),p=a("exit_flow/separable_conv"),g={reduction_block:d,separable_conv:p};return cn(r,t),{params:{entry_flow:h,middle_flow:f,exit_flow:g},paramMappings:t}}function Hh(r,e,t){return lt(Ce(r,e.filters,t,"same"),e.bias)}function Ei(r,e,t){t===void 0&&(t=!0);var n=t?Dt(r):r;return n=ge(n,e.separable_conv0,[1,1]),n=ge(Dt(n),e.separable_conv1,[1,1]),n=Gt(n,[3,3],[2,2],"same"),n=lt(n,Hh(r,e.expansion_conv,[2,2])),n}function Ob(r,e){var t=ge(Dt(r),e.separable_conv0,[1,1]);return t=ge(Dt(t),e.separable_conv1,[1,1]),t=ge(Dt(t),e.separable_conv2,[1,1]),t=lt(t,r),t}var Fb=function(r){ot(e,r);function e(t){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=t,n}return e.prototype.forwardInput=function(t){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return q(function(){var a=t.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=xo(a,i).div(H(256)),u=Dt(Hh(s,o.entry_flow.conv_in,[2,2]));return u=Ei(u,o.entry_flow.reduction_block_0,!1),u=Ei(u,o.entry_flow.reduction_block_1),so(n._numMainBlocks,0,1).forEach(function(c){u=Ob(u,o.middle_flow["main_block_"+c])}),u=Ei(u,o.exit_flow.reduction_block),u=Dt(ge(u,o.exit_flow.separable_conv,[1,1])),u})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.getDefaultModelName=function(){return"tiny_xception_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Nb(t,this._numMainBlocks)},e.prototype.extractParams=function(t){return Tb(t,this._numMainBlocks)},e}(un);function Mb(r){var e=[],t=ln(r),n=t.extractWeights,o=t.getRemainingWeights,a=qs(n,e),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{fc:{age:i,gender:s}}}}function Bb(r){var e=[],t=An(r,e);function n(a){var i=t(a+"/weights",2),s=t(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return cn(r,e),{params:o,paramMappings:e}}var da;(function(r){r.FEMALE="female",r.MALE="male"})(da||(da={}));var Lb=function(r){ot(e,r);function e(t){t===void 0&&(t=new Fb(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=t,n}return Object.defineProperty(e.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),e.prototype.runNet=function(t){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return q(function(){var a=t instanceof fa?n.faceFeatureExtractor.forwardInput(t):t,i=yo(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Be(i,o.fc.age).as1D(),u=Be(i,o.fc.gender);return{age:s,gender:u}})},e.prototype.forwardInput=function(t){var n=this;return q(function(){var o=n.runNet(t),a=o.age,i=o.gender;return{age:a,gender:an(i)}})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.predictAgeAndGender=function(t){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return Z(this,function(l){switch(l.label){case 0:return[4,qt(t)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=Ut(o.age),i=Ut(o.gender),s=a.map(function(h,f){return{ageTensor:h,genderTensor:i[f]}}),[4,Promise.all(s.map(function(h){var f=h.ageTensor,d=h.genderTensor;return Q(c,void 0,void 0,function(){var p,g,v,m,w;return Z(this,function(b){switch(b.label){case 0:return[4,f.data()];case 1:return p=b.sent()[0],[4,d.data()];case 2:return g=b.sent()[0],v=g>.5,m=v?da.MALE:da.FEMALE,w=v?g:1-g,f.dispose(),d.dispose(),[2,{age:p,gender:m,genderProbability:w}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},e.prototype.getDefaultModelName=function(){return"age_gender_model"},e.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),r.prototype.dispose.call(this,t)},e.prototype.loadClassifierParams=function(t){var n=this.extractClassifierParams(t),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},e.prototype.extractClassifierParams=function(t){return Mb(t)},e.prototype.extractParamsFromWeigthMap=function(t){var n=$h(t),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Bb(a)},e.prototype.extractParams=function(t){var n=1539,o=t.slice(0,t.length-n),a=t.slice(t.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},e}(un),jh=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.postProcess=function(t,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return q(function(){var s=function(f,d){return me([Ue([68],f),Ue([68],d)],1).as2D(1,136).as1D()},u=function(f,d){var p=a[f],g=p.width,v=p.height;return d(g,v)?Math.abs(g-v)/2:0},c=function(f){return u(f,function(d,p){return d<p})},l=function(f){return u(f,function(d,p){return p<d})},h=t.mul(Ue([i,136],n)).sub(me(Array.from(Array(i),function(f,d){return s(c(d),l(d))}))).div(me(Array.from(Array(i),function(f,d){return s(a[d].width,a[d].height)})));return h})},e.prototype.forwardInput=function(t){var n=this;return q(function(){var o=n.runNet(t);return n.postProcess(o,t.inputSize,t.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.detectLandmarks=function(t){return Q(this,void 0,void 0,function(){var n,o,a,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,qt(t)];case 1:return n=s.sent(),o=q(function(){return Ut(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return Q(i,void 0,void 0,function(){var l,h,f,d,p;return Z(this,function(g){switch(g.label){case 0:return f=(h=Array).from,[4,u.data()];case 1:return l=f.apply(h,[g.sent()]),d=l.filter(function(v,m){return _c(m)}),p=l.filter(function(v,m){return!_c(m)}),[2,new hb(Array(68).fill(0).map(function(v,m){return new yt(d[m],p[m])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},e.prototype.getClassifierChannelsOut=function(){return 136},e}(Vh),qh=function(r){ot(e,r);function e(t){return t===void 0&&(t=new zh),r.call(this,"FaceLandmark68Net",t)||this}return e.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},e.prototype.getClassifierChannelsIn=function(){return 256},e}(jh);function Wb(r){var e=[],t=Uh(r,e).extractDenseBlock3Params,n={dense0:t("dense0",!0),dense1:t("dense1"),dense2:t("dense2")};return cn(r,e),{params:n,paramMappings:e}}function Ub(r){var e=[],t=ln(r),n=t.extractWeights,o=t.getRemainingWeights,a=Lh(n,e).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{dense0:i,dense1:s,dense2:u}}}var zb=function(r){ot(e,r);function e(){return r.call(this,"TinyFaceFeatureExtractor")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return q(function(){var o=t.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=xo(o,a).div(H(255)),s=Ci(i,n.dense0,!0);return s=Ci(s,n.dense1),s=Ci(s,n.dense2),s=yo(s,[14,14],[2,2],"valid"),s})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Wb(t)},e.prototype.extractParams=function(t){return Ub(t)},e}(un),$b=function(r){ot(e,r);function e(t){return t===void 0&&(t=new zb),r.call(this,"FaceLandmark68TinyNet",t)||this}return e.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},e.prototype.getClassifierChannelsIn=function(){return 128},e}(jh);(function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e})(qh);function Vb(r,e){return lt(ne(r,e.weights),e.biases)}function Js(r,e,t,n,o){o===void 0&&(o="same");var a=e.conv,i=a.filters,s=a.bias,u=Ce(r,i,t,o);return u=lt(u,s),u=Vb(u,e.scale),n?Dt(u):u}function Gb(r,e){return Js(r,e,[1,1],!0)}function Kh(r,e){return Js(r,e,[1,1],!1)}function Xh(r,e){return Js(r,e,[2,2],!0,"valid")}function Hb(r,e){function t(s,u,c){var l=r(s),h=l.length/(u*c*c);if(nb(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return q(function(){return Rn(ae(l,[u,h,c,c]),[2,3,1,0])})}function n(s,u,c,l){var h=t(s,u,c),f=Bt(r(u));return e.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:f}}function o(s,u){var c=Bt(r(s)),l=Bt(r(s));return e.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var h=n(s,u,c,l+"/conv"),f=o(u,l+"/scale");return{conv:h,scale:f}}function i(s,u,c,l,h){h===void 0&&(h=!1);var f=a((h?.5:1)*s,u,c,l+"/conv1"),d=a(s,u,c,l+"/conv2");return{conv1:f,conv2:d}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function jb(r){var e=ln(r),t=e.extractWeights,n=e.getRemainingWeights,o=[],a=Hb(t,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),f=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),g=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),m=s(147456,128,3,"conv128_1"),w=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),x=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),I=q(function(){return Rn(xn(t(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var S={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:f,conv64_1:d,conv64_2:p,conv64_3:g,conv128_down:v,conv128_1:m,conv128_2:w,conv256_down:b,conv256_1:y,conv256_2:x,conv256_down_out:_,fc:I};return{params:S,paramMappings:o}}function qb(r,e){var t=An(r,e);function n(i){var s=t(i+"/scale/weights",1),u=t(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=t(i+"/conv/filters",4),u=t(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function Kb(r){var e=[],t=qb(r,e),n=t.extractConvLayerParams,o=t.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),f=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),g=o("conv128_2"),v=o("conv256_down"),m=o("conv256_1"),w=o("conv256_2"),b=o("conv256_down_out"),y=r.fc;if(e.push({originalPath:"fc",paramPath:"fc"}),!eb(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var x={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:f,conv128_down:d,conv128_1:p,conv128_2:g,conv256_down:v,conv256_1:m,conv256_2:w,conv256_down_out:b,fc:y};return cn(r,e),{params:x,paramMappings:e}}function Pe(r,e){var t=Gb(r,e.conv1);return t=Kh(t,e.conv2),t=lt(t,r),t=Dt(t),t}function Bo(r,e){var t=Xh(r,e.conv1);t=Kh(t,e.conv2);var n=yo(r,2,2,"valid"),o=Rt(n.shape),a=n.shape[3]!==t.shape[3],i=n.shape[1]!==t.shape[1]||n.shape[2]!==t.shape[2];if(i){var s=Xr(t.shape);s[1]=1;var u=Rt(s);t=Wt([t,u],1);var c=Xr(t.shape);c[2]=1;var l=Rt(c);t=Wt([t,l],2)}return n=a?Wt([n,o],3):n,t=lt(n,t),t=Dt(t),t}var Xb=function(r){ot(e,r);function e(){return r.call(this,"FaceRecognitionNet")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return q(function(){var o=t.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=xo(o,a).div(H(256)),s=Xh(i,n.conv32_down);s=Gt(s,3,2,"valid"),s=Pe(s,n.conv32_1),s=Pe(s,n.conv32_2),s=Pe(s,n.conv32_3),s=Bo(s,n.conv64_down),s=Pe(s,n.conv64_1),s=Pe(s,n.conv64_2),s=Pe(s,n.conv64_3),s=Bo(s,n.conv128_down),s=Pe(s,n.conv128_1),s=Pe(s,n.conv128_2),s=Bo(s,n.conv256_down),s=Pe(s,n.conv256_1),s=Pe(s,n.conv256_2),s=Bo(s,n.conv256_down_out);var u=s.mean([1,2]),c=ka(u,n.fc);return c})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.computeFaceDescriptor=function(t){return Q(this,void 0,void 0,function(){var n,o,a,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,qt(t)];case 1:return n=s.sent(),o=q(function(){return Ut(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},e.prototype.getDefaultModelName=function(){return"face_recognition_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Kb(t)},e.prototype.extractParams=function(t){return jb(t)},e}(un);function Yh(r,e){var t={descriptor:e};return Object.assign({},r,t)}function Jh(r,e){var t={age:e};return Object.assign({},r,t)}function Qh(r,e,t){var n={gender:e,genderProbability:t};return Object.assign({},r,n)}var Zh=function(){function r(e){var t=e===void 0?{}:e,n=t.minFaceSize,o=t.scaleFactor,a=t.maxNumScales,i=t.scoreThresholds,s=t.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function Yb(r,e){function t(u,c){var l=ae(r(9*u),[3,3,u,1]),h=Bt(r(u)),f=Bt(r(u)),d=Bt(r(u)),p=Bt(r(u));return e.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:f,batch_norm_mean:d,batch_norm_variance:p}}function n(u,c,l,h,f){var d=ae(r(u*c*l*l),[l,l,u,c]),p=Bt(r(c));return e.push({paramPath:h+"/filters"},{paramPath:h+"/"+(f?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,h){var f=n(u,c,l,h,!0),d=f.filters,p=f.bias;return{filters:d,batch_norm_offset:p}}function a(u,c,l){var h=t(u,l+"/depthwise_conv"),f=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:f}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),h=a(128,128,"mobilenetv1/conv_3"),f=a(128,256,"mobilenetv1/conv_4"),d=a(256,256,"mobilenetv1/conv_5"),p=a(256,512,"mobilenetv1/conv_6"),g=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),m=a(512,512,"mobilenetv1/conv_9"),w=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),x=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:d,conv_6:p,conv_7:g,conv_8:v,conv_9:m,conv_10:w,conv_11:b,conv_12:y,conv_13:x}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),h=o(128,256,3,"prediction_layer/conv_3"),f=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),g=o(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),m=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),w=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),x=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),S=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),k=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),R=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),P=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),D={box_encoding_predictor:v,class_predictor:m},L={box_encoding_predictor:w,class_predictor:b},M={box_encoding_predictor:y,class_predictor:x},B={box_encoding_predictor:_,class_predictor:I},z={box_encoding_predictor:S,class_predictor:k},U={box_encoding_predictor:R,class_predictor:P};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:d,conv_6:p,conv_7:g,box_predictor_0:D,box_predictor_1:L,box_predictor_2:M,box_predictor_3:B,box_predictor_4:z,box_predictor_5:U}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function Jb(r){var e=[],t=ln(r),n=t.extractWeights,o=t.getRemainingWeights,a=Yb(n,e),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=fs(n(5118*4),[1,5118,4]),h={extra_dim:l};if(e.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:e}}function Qb(r,e){var t=An(r,e);function n(c,l,h){var f=t(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),d=t(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:f,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",f=l+"/depthwise_conv",d=l+"/pointwise_conv",p=t(h+"/depthwise_weights",4,f+"/filters"),g=t(h+"/BatchNorm/gamma",1,f+"/batch_norm_scale"),v=t(h+"/BatchNorm/beta",1,f+"/batch_norm_offset"),m=t(h+"/BatchNorm/moving_mean",1,f+"/batch_norm_mean"),w=t(h+"/BatchNorm/moving_variance",1,f+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:g,batch_norm_offset:v,batch_norm_mean:m,batch_norm_variance:w},pointwise_conv:n("MobilenetV1",c,d)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var h=t(c+"/weights",4,l+"/filters"),f=t(c+"/biases",1,l+"/bias");return{filters:h,bias:f}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function Zb(r){var e=[],t=Qb(r,e),n=t.extractMobilenetV1Params,o=t.extractPredictionLayerParams,a=r["Output/extra_dim"];if(e.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!Aa(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return cn(r,e),{params:i,paramMappings:e}}function Ne(r,e,t){return q(function(){var n=Ce(r,e.filters,t,"same");return n=lt(n,e.batch_norm_offset),Cs(n,0,6)})}var tx=.0010000000474974513;function ex(r,e,t){return q(function(){var n=Ea(r,e.filters,t,"same");return n=Hl(n,e.batch_norm_mean,e.batch_norm_variance,e.batch_norm_offset,e.batch_norm_scale,tx),Cs(n,0,6)})}function nx(r){return[2,4,6,12].some(function(e){return e===r})?[2,2]:[1,1]}function rx(r,e){return q(function(){var t=null,n=Ne(r,e.conv_0,[2,2]),o=[e.conv_1,e.conv_2,e.conv_3,e.conv_4,e.conv_5,e.conv_6,e.conv_7,e.conv_8,e.conv_9,e.conv_10,e.conv_11,e.conv_12,e.conv_13];if(o.forEach(function(a,i){var s=i+1,u=nx(s);n=ex(n,a.depthwise_conv,u),n=Ne(n,a.pointwise_conv,[1,1]),s===11&&(t=n)}),t===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:t}})}function ox(r,e,t,n,o){var a=r.shape[0],i=Math.min(t,a),s=e.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>o}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var h=l.score,f=c.length-1;f>=0;--f){var d=ax(r,l.boxIndex,c[f]);if(d!==0&&(l.score*=u(d),l.score<=o))break}h===l.score&&c.push(l.boxIndex)}}),c}function ax(r,e,t){var n=r.arraySync(),o=Math.min(n[e][0],n[e][2]),a=Math.min(n[e][1],n[e][3]),i=Math.max(n[e][0],n[e][2]),s=Math.max(n[e][1],n[e][3]),u=Math.min(n[t][0],n[t][2]),c=Math.min(n[t][1],n[t][3]),l=Math.max(n[t][0],n[t][2]),h=Math.max(n[t][1],n[t][3]),f=(i-o)*(s-a),d=(l-u)*(h-c);if(f<=0||d<=0)return 0;var p=Math.max(o,u),g=Math.max(a,c),v=Math.min(i,l),m=Math.min(s,h),w=Math.max(v-p,0)*Math.max(m-g,0);return w/(f+d-w)}function ix(r){var e=Ut(Rn(r,[1,0])),t=[$t(e[2],e[0]),$t(e[3],e[1])],n=[lt(e[0],Ee(t[0],H(2))),lt(e[1],Ee(t[1],H(2)))];return{sizes:t,centers:n}}function sx(r,e){var t=ix(r),n=t.sizes,o=t.centers,a=Ut(Rn(e,[1,0])),i=Ee(ne($i(Ee(a[2],H(5))),n[0]),H(2)),s=lt(ne(Ee(a[0],H(10)),n[0]),o[0]),u=Ee(ne($i(Ee(a[3],H(5))),n[1]),H(2)),c=lt(ne(Ee(a[1],H(10)),n[1]),o[1]);return Rn(me([$t(s,i),$t(c,u),lt(s,i),lt(c,u)]),[1,0])}function ux(r,e,t){return q(function(){var n=r.shape[0],o=sx(ke(fr(t.extra_dim,[n,1,1]),[-1,4]),ke(r,[-1,4]));o=ke(o,[n,o.shape[0]/n,4]);var a=zl(ze(e,[0,0,1],[-1,-1,-1])),i=ze(a,[0,0,0],[-1,-1,1]);i=ke(i,[n,i.shape[1]]);var s=Ut(o),u=Ut(i);return{boxes:s,scores:u}})}function or(r,e){return q(function(){var t=r.shape[0],n=ke(Re(r,e.box_encoding_predictor),[t,-1,1,4]),o=ke(Re(r,e.class_predictor),[t,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function cx(r,e,t){return q(function(){var n=Ne(r,t.conv_0,[1,1]),o=Ne(n,t.conv_1,[2,2]),a=Ne(o,t.conv_2,[1,1]),i=Ne(a,t.conv_3,[2,2]),s=Ne(i,t.conv_4,[1,1]),u=Ne(s,t.conv_5,[2,2]),c=Ne(u,t.conv_6,[1,1]),l=Ne(c,t.conv_7,[2,2]),h=or(e,t.box_predictor_0),f=or(r,t.box_predictor_1),d=or(o,t.box_predictor_2),p=or(i,t.box_predictor_3),g=or(u,t.box_predictor_4),v=or(l,t.box_predictor_5),m=Wt([h.boxPredictionEncoding,f.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,g.boxPredictionEncoding,v.boxPredictionEncoding],1),w=Wt([h.classPrediction,f.classPrediction,d.classPrediction,p.classPrediction,g.classPrediction,v.classPrediction],1);return{boxPredictions:m,classPredictions:w}})}var Na=function(){function r(e){var t=e===void 0?{}:e,n=t.minConfidence,o=t.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),tf=function(r){ot(e,r);function e(){return r.call(this,"SsdMobilenetv1")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return q(function(){var o=t.toBatchTensor(512,!1).toFloat(),a=$t(ne(o,H(.007843137718737125)),H(1)),i=rx(a,n.mobilenetv1),s=cx(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return ux(u,c,n.output_layer)})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.locateFaces=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,d,p,g,v,m,w,b,y,x,_,I,S;return Z(this,function(k){switch(k.label){case 0:return o=new Na(n),a=o.maxResults,i=o.minConfidence,[4,qt(t)];case 1:for(s=k.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],f=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return v=(g=Array).from,[4,f.data()];case 2:return p=v.apply(g,[k.sent()]),m=.5,w=ox(h,p,a,m,i),b=s.getReshapedInputDimensions(0),y=s.inputSize,x=y/b.width,_=y/b.height,I=h.arraySync(),S=w.map(function(R){var P=[Math.max(0,I[R][0]),Math.min(1,I[R][2])].map(function(U){return U*_}),D=P[0],L=P[1],M=[Math.max(0,I[R][1]),Math.min(1,I[R][3])].map(function(U){return U*x}),B=M[0],z=M[1];return new _e(p[R],new Us(B,D,z-B,L-D),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),f.dispose(),[2,S]}})})},e.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Zb(t)},e.prototype.extractParams=function(t){return Jb(t)},e}(un);(function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e})(tf);var lx=.4,hx=[new yt(.738768,.874946),new yt(2.42204,2.65704),new yt(4.30971,7.04493),new yt(10.246,4.59428),new yt(12.6868,11.8741)],fx=[new yt(1.603231,2.094468),new yt(6.041143,7.080126),new yt(2.882459,3.518061),new yt(4.266906,5.178857),new yt(9.041765,10.66308)],dx=[117.001,114.697,97.404],px="tiny_yolov2_model",vx="tiny_yolov2_separable_conv_model",Lo=function(r){return typeof r=="number"};function gx(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Lo(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(e){return typeof e=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(e){return e||{}}).every(function(e){return Lo(e.x)&&Lo(e.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Lo)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function Qs(r){return q(function(){var e=ne(r,H(.10000000149011612));return lt(Dt($t(r,e)),e)})}function fn(r,e){return q(function(){var t=Kn(r,[[0,0],[1,1],[1,1],[0,0]]);return t=Ce(t,e.conv.filters,[1,1],"valid"),t=$t(t,e.bn.sub),t=ne(t,e.bn.truediv),t=lt(t,e.conv.bias),Qs(t)})}function dn(r,e){return q(function(){var t=Kn(r,[[0,0],[1,1],[1,1],[0,0]]);return t=Ss(t,e.depthwise_filter,e.pointwise_filter,[1,1],"valid"),t=lt(t,e.bias),Qs(t)})}function mx(r,e){var t=Pa(r,e);function n(i,s){var u=Bt(r(i)),c=Bt(r(i));return e.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=t(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=Ks(r,e);return{extractConvParams:t,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function yx(r,e,t,n){var o=ln(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=mx(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,f;if(e.withSeparableConvs){var d=n[0],p=n[1],g=n[2],v=n[3],m=n[4],w=n[5],b=n[6],y=n[7],x=n[8],_=e.isFirstLayerConv2d?c(d,p,3,"conv0"):h(d,p,"conv0"),I=h(p,g,"conv1"),S=h(g,v,"conv2"),k=h(v,m,"conv3"),R=h(m,w,"conv4"),P=h(w,b,"conv5"),D=y?h(b,y,"conv6"):void 0,L=x?h(y,x,"conv7"):void 0,M=c(x||y||b,5*t,1,"conv8");f={conv0:_,conv1:I,conv2:S,conv3:k,conv4:R,conv5:P,conv6:D,conv7:L,conv8:M}}else{var d=n[0],p=n[1],g=n[2],v=n[3],m=n[4],w=n[5],b=n[6],y=n[7],x=n[8],_=l(d,p,"conv0"),I=l(p,g,"conv1"),S=l(g,v,"conv2"),k=l(v,m,"conv3"),R=l(m,w,"conv4"),P=l(w,b,"conv5"),D=l(b,y,"conv6"),L=l(y,x,"conv7"),M=c(x,5*t,1,"conv8");f={conv0:_,conv1:I,conv2:S,conv3:k,conv4:R,conv5:P,conv6:D,conv7:L,conv8:M}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:f,paramMappings:s}}function bx(r,e){var t=An(r,e);function n(s){var u=t(s+"/sub",1),c=t(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=t(s+"/filters",4),c=t(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=Xs(t);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function xx(r,e){var t=[],n=bx(r,t),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(e.withSeparableConvs){var u=e.filterSizes&&e.filterSizes.length||9;s={conv0:e.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return cn(r,t),{params:s,paramMappings:t}}var Ac;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Ac||(Ac={}));var Zs=function(){function r(e){var t=e===void 0?{}:e,n=t.inputSize,o=t.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),ef=function(r){ot(e,r);function e(t){var n=r.call(this,"TinyYolov2")||this;return gx(t),n._config=t,n}return Object.defineProperty(e.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),e.prototype.runTinyYolov2=function(t,n){var o=fn(t,n.conv0);return o=Gt(o,[2,2],[2,2],"same"),o=fn(o,n.conv1),o=Gt(o,[2,2],[2,2],"same"),o=fn(o,n.conv2),o=Gt(o,[2,2],[2,2],"same"),o=fn(o,n.conv3),o=Gt(o,[2,2],[2,2],"same"),o=fn(o,n.conv4),o=Gt(o,[2,2],[2,2],"same"),o=fn(o,n.conv5),o=Gt(o,[2,2],[1,1],"same"),o=fn(o,n.conv6),o=fn(o,n.conv7),Re(o,n.conv8,"valid",!1)},e.prototype.runMobilenet=function(t,n){var o=this.config.isFirstLayerConv2d?Qs(Re(t,n.conv0,"valid",!1)):dn(t,n.conv0);return o=Gt(o,[2,2],[2,2],"same"),o=dn(o,n.conv1),o=Gt(o,[2,2],[2,2],"same"),o=dn(o,n.conv2),o=Gt(o,[2,2],[2,2],"same"),o=dn(o,n.conv3),o=Gt(o,[2,2],[2,2],"same"),o=dn(o,n.conv4),o=Gt(o,[2,2],[2,2],"same"),o=dn(o,n.conv5),o=Gt(o,[2,2],[1,1],"same"),o=n.conv6?dn(o,n.conv6):o,o=n.conv7?dn(o,n.conv7):o,Re(o,n.conv8,"valid",!1)},e.prototype.forwardInput=function(t,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return q(function(){var i=t.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?xo(i,o.config.meanRgb):i,i=i.div(H(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},e.prototype.forward=function(t,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,qt(t)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},e.prototype.detect=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,d,p,g,v,m,w=this;return Z(this,function(b){switch(b.label){case 0:return o=new Zs(n),a=o.inputSize,i=o.scoreThreshold,[4,qt(t)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=q(function(){return Ut(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return h=b.sent(),u.dispose(),c.dispose(),f=h.map(function(y){return y.box}),d=h.map(function(y){return y.score}),p=h.map(function(y){return y.classScore}),g=h.map(function(y){return w.config.classes[y.label]}),v=uo(f.map(function(y){return y.rescale(a)}),d,this.config.iouThreshold,!0),m=v.map(function(y){return new Rh(d[y],p[y],g[y],f[y],l)}),[2,m]}})})},e.prototype.getDefaultModelName=function(){return""},e.prototype.extractParamsFromWeigthMap=function(t){return xx(t,this.config)},e.prototype.extractParams=function(t){var n=this.config.filterSizes||e.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return yx(t,this.config,this.boxEncodingSize,n)},e.prototype.extractBoxes=function(t,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p,g,v,m,w,b,y,x,_,I,S,k,R,P,D,L,M,B,z,U,W=this;return Z(this,function(V){switch(V.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=t.shape[1],h=this.config.anchors.length,f=q(function(){var G=t.reshape([l,l,h,W.boxEncodingSize]),j=G.slice([0,0,0,0],[l,l,h,4]),tt=G.slice([0,0,0,4],[l,l,h,1]),et=W.withClassScores?an(G.slice([0,0,0,5],[l,l,h,W.config.classes.length]),3):H(0);return[j,tt,et]}),d=f[0],p=f[1],g=f[2],v=[],[4,p.array()];case 1:return m=V.sent(),[4,d.array()];case 2:w=V.sent(),b=0,V.label=3;case 3:if(!(b<l))return[3,12];y=0,V.label=4;case 4:if(!(y<l))return[3,11];x=0,V.label=5;case 5:return x<h?(_=_i(m[b][y][x][0]),!o||_>o?(I=(y+_i(w[b][y][x][0]))/l*u,S=(b+_i(w[b][y][x][1]))/l*c,k=Math.exp(w[b][y][x][2])*this.config.anchors[x].x/l*u,R=Math.exp(w[b][y][x][3])*this.config.anchors[x].y/l*c,P=I-k/2,D=S-R/2,L={row:b,col:y,anchor:x},this.withClassScores?[4,this.extractPredictedClass(g,L)]:[3,7]):[3,9]):[3,10];case 6:return U=V.sent(),[3,8];case 7:U={classScore:1,label:0},V.label=8;case 8:M=U,B=M.classScore,z=M.label,v.push(Zt({box:new Da(P,D,P+k,D+R),score:_,classScore:_*B,label:z},L)),V.label=9;case 9:return x++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return d.dispose(),p.dispose(),g.dispose(),[2,v]}})})},e.prototype.extractPredictedClass=function(t,n){return Q(this,void 0,void 0,function(){var o,a,i,s;return Z(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,t.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},e.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],e}(un),wx=function(r){ot(e,r);function e(t){t===void 0&&(t=!0);var n=this,o=Object.assign({},{withSeparableConvs:t,iouThreshold:lx,classes:["face"]},t?{anchors:fx,meanRgb:dx}:{anchors:hx,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(e.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),e.prototype.locateFaces=function(t,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.detect(t,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new _e(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},e.prototype.getDefaultModelName=function(){return this.withSeparableConvs?vx:px},e.prototype.extractParamsFromWeigthMap=function(t){return r.prototype.extractParamsFromWeigthMap.call(this,t)},e}(ef),nf=function(r){ot(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t._name="TinyFaceDetectorOptions",t}return e}(Zs),wo=function(){function r(){}return r.prototype.then=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(n){switch(n.label){case 0:return t=e,[4,this.run()];case 1:return[2,t.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return Q(this,void 0,void 0,function(){return Z(this,function(e){throw new Error("ComposableTask - run is not implemented")})})},r}();function Oa(r,e,t,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),Q(this,void 0,void 0,function(){var a,i,s,u,c;return Z(this,function(l){switch(l.label){case 0:return a=r.map(function(h){return Ab(h)?o(h):h.detection}),s=n,s?[3,5]:e instanceof At?[4,js(e,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Hs(e,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,t(i)];case 6:return c=l.sent(),i.forEach(function(h){return h instanceof At&&h.dispose()}),[2,c]}})})}function tu(r,e,t,n,o){return Q(this,void 0,void 0,function(){var a=this;return Z(this,function(i){return[2,Oa([r],e,function(s){return Q(a,void 0,void 0,function(){return Z(this,function(u){return[2,t(s[0])]})})},n,o)]})})}function _x(r){return q(function(){return me(Ut(r,3).reverse(),3)})}var Wo=2,pa=12;function Cx(r,e){var t=Pa(r,e),n=qs(r,e);function o(c,l){var h=Bt(r(c));return e.push({paramPath:l}),h}function a(c,l,h){h===void 0&&(h=!1);var f=t(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=t(c[1],c[2],3,l+"/conv2"),g=o(c[2],l+"/prelu2_alpha"),v=t(c[2],c[3],h?2:3,l+"/conv3"),m=o(c[3],l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:d,conv2:p,prelu2_alpha:g,conv3:v,prelu3_alpha:m}}function i(){var c=a([3,10,16,32],"pnet"),l=t(32,2,1,"pnet/conv4_1"),h=t(32,4,1,"pnet/conv4_2");return Zt(Zt({},c),{conv4_1:l,conv4_2:h})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),h=o(128,"rnet/prelu4_alpha"),f=n(128,2,"rnet/fc2_1"),d=n(128,4,"rnet/fc2_2");return Zt(Zt({},c),{fc1:l,prelu4_alpha:h,fc2_1:f,fc2_2:d})}function u(){var c=a([3,32,64,64],"onet"),l=t(64,128,2,"onet/conv4"),h=o(128,"onet/prelu4_alpha"),f=n(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),g=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return Zt(Zt({},c),{conv4:l,prelu4_alpha:h,fc1:f,prelu5_alpha:d,fc2_1:p,fc2_2:g,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function Ex(r){var e=ln(r),t=e.extractWeights,n=e.getRemainingWeights,o=[],a=Cx(t,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),h=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function kx(r,e){var t=An(r,e);function n(l){var h=t(l+"/weights",4,l+"/filters"),f=t(l+"/bias",1);return{filters:h,bias:f}}function o(l){var h=t(l+"/weights",2),f=t(l+"/bias",1);return{weights:h,bias:f}}function a(l){return t(l,1)}function i(l){var h=n(l+"/conv1"),f=a(l+"/prelu1_alpha"),d=n(l+"/conv2"),p=a(l+"/prelu2_alpha"),g=n(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:f,conv2:d,prelu2_alpha:p,conv3:g,prelu3_alpha:v}}function s(){var l=i("pnet"),h=n("pnet/conv4_1"),f=n("pnet/conv4_2");return Zt(Zt({},l),{conv4_1:h,conv4_2:f})}function u(){var l=i("rnet"),h=o("rnet/fc1"),f=a("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return Zt(Zt({},l),{fc1:h,prelu4_alpha:f,fc2_1:d,fc2_2:p})}function c(){var l=i("onet"),h=n("onet/conv4"),f=a("onet/prelu4_alpha"),d=o("onet/fc1"),p=a("onet/prelu5_alpha"),g=o("onet/fc2_1"),v=o("onet/fc2_2"),m=o("onet/fc2_3");return Zt(Zt({},l),{conv4:h,prelu4_alpha:f,fc1:d,prelu5_alpha:p,fc2_1:g,fc2_2:v,fc2_3:m})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function Rx(r){var e=[],t=kx(r,e),n=t.extractPNetParams,o=t.extractRNetParams,a=t.extractONetParams,i=n(),s=o(),u=a();return cn(r,e),{params:{pnet:i,rnet:s,onet:u},paramMappings:e}}function Ji(r,e){var t=e[0],n=e[1];return{height:Math.floor(t*r),width:Math.floor(n*r)}}function Sx(r,e,t){for(var n=t[0],o=t[1],a=pa/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(e,u)),s=s*e,u+=1;return i}var eu=function(r){ot(e,r);function e(t,n,o,a){return r.call(this,{left:t,top:n,right:o,bottom:a},!0)||this}return e}($e);function rf(r){return q(function(){return ne($t(r,H(127.5)),H(.0078125))})}function yr(r,e){return q(function(){return lt(Dt(r),ne(e,sa(Dt(sa(r)))))})}function nu(r,e,t){return t===void 0&&(t=!1),q(function(){var n=Re(r,e.conv1,"valid");return n=yr(n,e.prelu1_alpha),n=Gt(n,t?[2,2]:[3,3],[2,2],"same"),n=Re(n,e.conv2,"valid"),n=yr(n,e.prelu2_alpha),n=t?n:Gt(n,[3,3],[2,2],"valid"),n=Re(n,e.conv3,"valid"),n=yr(n,e.prelu3_alpha),n})}function Ix(r,e){return q(function(){var t=nu(r,e,!0),n=Re(t,e.conv4_1,"valid"),o=ye(Ra(n,3),3),a=an($t(n,o),3),i=Re(t,e.conv4_2,"valid");return{prob:a,regions:i}})}function Ax(r,e){return q(function(){var t=Ji(e,r.shape.slice(1)),n=t.height,o=t.width,a=Ps.resizeBilinear(r,[n,o]),i=rf(a);return Rn(i,[0,2,1,3])})}function Dx(r,e,t,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new yt(s,i));var u=o.map(function(c){var l=new Da(Math.round((c.y*Wo+1)/t),Math.round((c.x*Wo+1)/t),Math.round((c.y*Wo+pa)/t),Math.round((c.x*Wo+pa)/t)),h=a[c.y][c.x],f=e.arraySync(),d=new eu(f[c.y][c.x][0],f[c.y][c.x][1],f[c.y][c.x][2],f[c.y][c.x][3]);return{cell:l,score:h,region:d}});return u}function Tx(r,e,t,n,o){o.stage1=[];var a=e.map(function(f){return q(function(){var d={scale:f},p=Ax(r,f),g=Date.now(),v=Ix(p,n),m=v.prob,w=v.regions;d.pnet=Date.now()-g;var b=Ut(Ut(m,3)[1])[0],y=Ut(w)[0];return{scoresTensor:b,regionsTensor:y,scale:f,statsForScale:d}})}),i=a.map(function(f){var d=f.scoresTensor,p=f.regionsTensor,g=f.scale,v=f.statsForScale,m=Dx(d,p,g,t);if(d.dispose(),p.dispose(),!m.length)return o.stage1.push(v),[];var w=Date.now(),b=uo(m.map(function(y){return y.cell}),m.map(function(y){return y.score}),.5);return v.nms=Date.now()-w,v.numBoxes=b.length,o.stage1.push(v),b.map(function(y){return m[y]})}),s=i.reduce(function(f,d){return f.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=uo(s.map(function(f){return f.cell}),s.map(function(f){return f.score}),.7);o.stage1_nms=Date.now()-l,c=h.map(function(f){return s[f].score}),u=h.map(function(f){return s[f]}).map(function(f){var d=f.cell,p=f.region;return new Da(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function of(r,e,t){var n=t.width,o=t.height;return Q(this,void 0,void 0,function(){var a,i,s,u=this;return Z(this,function(c){switch(c.label){case 0:return a=rn(r),[4,Promise.all(e.map(function(l){return Q(u,void 0,void 0,function(){var h,f,d,p,g,v,m,w;return Z(this,function(b){return h=l.padAtBorders(r.height,r.width),f=h.y,d=h.ey,p=h.x,g=h.ex,v=p-1,m=f-1,w=a.getImageData(v,m,g-v,d-m),[2,oe.isNodejs()?Gs(w):createImageBitmap(w)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var h=Ta({width:n,height:o}),f=rn(h);f.drawImage(l,0,0,n,o);for(var d=f.getImageData(0,0,n,o).data,p=[],g=0;g<d.length;g+=4)p.push(d[g+2]),p.push(d[g+1]),p.push(d[g]);s.push(p)}),[2,s.map(function(l){var h=q(function(){var f=Rn(ae(l,[1,n,o,3]),[0,2,1,3]).toFloat();return rf(f)});return h})]}})})}function Px(r,e){return q(function(){var t=nu(r,e),n=ke(t,[t.shape[0],e.fc1.weights.shape[0]]),o=Be(n,e.fc1),a=yr(o,e.prelu4_alpha),i=Be(a,e.fc2_1),s=ye(Ra(i,1),1),u=an($t(i,s),1),c=Be(a,e.fc2_2),l=Ut(u,1)[1];return{scores:l,regions:c}})}function Nx(r,e,t,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p,g,v,m,w;return Z(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,of(r,e,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var x=Px(y,n);return y.dispose(),x}),o.stage2_rnet=Date.now()-a,u=s.length>1?Wt(s.map(function(y){return y.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[b.sent()]),u.dispose(),f=c.map(function(y,x){return{score:y,idx:x}}).filter(function(y){return y.score>t}).map(function(y){var x=y.idx;return x}),d=f.map(function(y){return e[y]}),p=f.map(function(y){return c[y]}),g=[],v=[],d.length>0&&(a=Date.now(),m=uo(d,p,.7),o.stage2_nms=Date.now()-a,w=m.map(function(y){var x=s[f[y]].regions.arraySync();return new eu(x[0][0],x[0][1],x[0][2],x[0][3])}),v=m.map(function(y){return p[y]}),g=m.map(function(y,x){return d[y].calibrate(w[x])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:g,scores:v}]}})})}function Ox(r,e){return q(function(){var t=nu(r,e);t=Gt(t,[2,2],[2,2],"same"),t=Re(t,e.conv4,"valid"),t=yr(t,e.prelu4_alpha);var n=ke(t,[t.shape[0],e.fc1.weights.shape[0]]),o=Be(n,e.fc1),a=yr(o,e.prelu5_alpha),i=Be(a,e.fc2_1),s=ye(Ra(i,1),1),u=an($t(i,s),1),c=Be(a,e.fc2_2),l=Be(a,e.fc2_3),h=Ut(u,1)[1];return{scores:h,regions:c,points:l}})}function Fx(r,e,t,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p,g,v,m,w,b;return Z(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,of(r,e,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(x){var _=Ox(x,n);return x.dispose(),_}),o.stage3_onet=Date.now()-a,u=s.length>1?Wt(s.map(function(x){return x.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[y.sent()]),u.dispose(),f=c.map(function(x,_){return{score:x,idx:_}}).filter(function(x){return x.score>t}).map(function(x){var _=x.idx;return _}),d=f.map(function(x){var _=s[x].regions.arraySync();return new eu(_[0][0],_[0][1],_[0][2],_[0][3])}),p=f.map(function(x,_){return e[x].calibrate(d[_])}),g=f.map(function(x){return c[x]}),v=[],m=[],w=[],p.length>0&&(a=Date.now(),b=uo(p,g,.7,!1),o.stage3_nms=Date.now()-a,v=b.map(function(x){return p[x]}),m=b.map(function(x){return g[x]}),w=b.map(function(x,_){return Array(5).fill(0).map(function(I,S){var k=s[x].points.arraySync();return new yt(k[0][S]*(v[_].width+1)+v[_].left,k[0][S+5]*(v[_].height+1)+v[_].top)})})),s.forEach(function(x){x.regions.dispose(),x.scores.dispose(),x.points.dispose()}),[2,{boxes:v,scores:m,points:w}]}})})}var Mx=function(r){ot(e,r);function e(){return r.call(this,"Mtcnn")||this}return e.prototype.load=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,t)]})})},e.prototype.loadFromDisk=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,t)]})})},e.prototype.forwardInput=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,d,p,g,v,m,w,b,y,x,_,I,S;return Z(this,function(k){switch(k.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=t.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=q(function(){return _x(ye(Ls.fromPixels(a)).toFloat())}),c=function(R){return u.dispose(),i.total=Date.now()-s,R},l=u.shape.slice(1),h=l[0],f=l[1],d=new Zh(n),p=d.minFaceSize,g=d.scaleFactor,v=d.maxNumScales,m=d.scoreThresholds,w=d.scaleSteps,b=(w||Sx(p,g,[h,f])).filter(function(R){var P=Ji(R,[h,f]);return Math.min(P.width,P.height)>pa}).slice(0,v),i.scales=b,i.pyramid=b.map(function(R){return Ji(R,[h,f])}),y=Date.now(),[4,Tx(u,b,m[0],o.pnet,i)];case 1:return x=k.sent(),i.total_stage1=Date.now()-y,x.boxes.length?(i.stage2_numInputBoxes=x.boxes.length,y=Date.now(),[4,Nx(a,x.boxes,m[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return _=k.sent(),i.total_stage2=Date.now()-y,_.boxes.length?(i.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,Fx(a,_.boxes,m[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return I=k.sent(),i.total_stage3=Date.now()-y,S=I.boxes.map(function(R,P){return Ys(zs({},new _e(I.scores[P],new Us(R.left/f,R.top/h,R.width/f,R.height/h),{height:h,width:f})),new lb(I.points[P].map(function(D){return D.sub(new yt(R.left,R.top)).div(new yt(R.width,R.height))}),{width:R.width,height:R.height}))}),[2,c({results:S,stats:i})]}})})},e.prototype.forward=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,qt(t)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},e.prototype.forwardWithStats=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,qt(t)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},e.prototype.getDefaultModelName=function(){return"mtcnn_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Rx(t)},e.prototype.extractParams=function(t){return Ex(t)},e}(un),Bx=.4,Lx=[new yt(1.603231,2.094468),new yt(6.041143,7.080126),new yt(2.882459,3.518061),new yt(4.266906,5.178857),new yt(9.041765,10.66308)],Wx=[117.001,114.697,97.404],Ux=function(r){ot(e,r);function e(){var t=this,n={withSeparableConvs:!0,iouThreshold:Bx,classes:["face"],anchors:Lx,meanRgb:Wx,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return t=r.call(this,n)||this,t}return Object.defineProperty(e.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),e.prototype.locateFaces=function(t,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.detect(t,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new _e(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},e.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},e.prototype.extractParamsFromWeigthMap=function(t){return r.prototype.extractParamsFromWeigthMap.call(this,t)},e}(ef),se={ssdMobilenetv1:new tf,tinyFaceDetector:new Ux,tinyYolov2:new wx,mtcnn:new Mx,faceLandmark68Net:new qh,faceLandmark68TinyNet:new $b,faceRecognitionNet:new Xb,faceExpressionNet:new Ib,ageGenderNet:new Lb},af=function(r){ot(e,r);function e(t,n,o){var a=r.call(this)||this;return a.parentTask=t,a.input=n,a.extractedFaces=o,a}return e}(wo),ru=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return t=a.sent(),[4,Oa(t,this.input,function(i){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return se.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,t.map(function(i,s){return Gh(i,n[s])})]}})})},e.prototype.withAgeAndGender=function(){return new su(this,this.input)},e}(af),ou=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),t?[4,tu(t,this.input,function(a){return se.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,Gh(t,n)]}})})},e.prototype.withAgeAndGender=function(){return new uu(this,this.input)},e}(af),au=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withAgeAndGender=function(){return new cu(this,this.input)},e.prototype.withFaceDescriptors=function(){return new hu(this,this.input)},e}(ru),iu=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withAgeAndGender=function(){return new lu(this,this.input)},e.prototype.withFaceDescriptor=function(){return new fu(this,this.input)},e}(ou),sf=function(r){ot(e,r);function e(t,n,o){var a=r.call(this)||this;return a.parentTask=t,a.input=n,a.extractedFaces=o,a}return e}(wo),su=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return t=a.sent(),[4,Oa(t,this.input,function(i){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return se.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,t.map(function(i,s){var u=n[s],c=u.age,l=u.gender,h=u.genderProbability;return Jh(Qh(i,l,h),c)})]}})})},e.prototype.withFaceExpressions=function(){return new ru(this,this.input)},e}(sf),uu=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return t=s.sent(),t?[4,tu(t,this.input,function(u){return se.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,Jh(Qh(t,a,i),o)]}})})},e.prototype.withFaceExpressions=function(){return new ou(this,this.input)},e}(sf),cu=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withFaceExpressions=function(){return new au(this,this.input)},e.prototype.withFaceDescriptors=function(){return new hu(this,this.input)},e}(su),lu=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withFaceExpressions=function(){return new iu(this,this.input)},e.prototype.withFaceDescriptor=function(){return new fu(this,this.input)},e}(uu),uf=function(r){ot(e,r);function e(t,n){var o=r.call(this)||this;return o.parentTask=t,o.input=n,o}return e}(wo),hu=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),[4,Oa(t,this.input,function(a){return Promise.all(a.map(function(i){return se.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return Yh(t[i],a)})]}})})},e.prototype.withFaceExpressions=function(){return new au(this,this.input)},e.prototype.withAgeAndGender=function(){return new cu(this,this.input)},e}(uf),fu=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),t?[4,tu(t,this.input,function(a){return se.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,Yh(t,n)]}})})},e.prototype.withFaceExpressions=function(){return new iu(this,this.input)},e.prototype.withAgeAndGender=function(){return new lu(this,this.input)},e}(uf),cf=function(r){ot(e,r);function e(t,n,o){var a=r.call(this)||this;return a.parentTask=t,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(e.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?se.faceLandmark68TinyNet:se.faceLandmark68Net},enumerable:!0,configurable:!0}),e}(wo),zx=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return t=u.sent(),n=t.map(function(c){return c.detection}),this.input instanceof At?[4,js(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,Hs(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof At&&c.dispose()}),[2,t.map(function(c,l){return Ys(c,i[l])})]}})})},e.prototype.withFaceExpressions=function(){return new au(this,this.input)},e.prototype.withAgeAndGender=function(){return new cu(this,this.input)},e.prototype.withFaceDescriptors=function(){return new hu(this,this.input)},e}(cf),$x=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return t=s.sent(),t?(n=t.detection,this.input instanceof At?[4,js(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,Hs(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof At&&u.dispose()}),[2,Ys(t,i)]}})})},e.prototype.withFaceExpressions=function(){return new iu(this,this.input)},e.prototype.withAgeAndGender=function(){return new lu(this,this.input)},e.prototype.withFaceDescriptor=function(){return new fu(this,this.input)},e}(cf),lf=function(r){ot(e,r);function e(t,n){n===void 0&&(n=new Na);var o=r.call(this)||this;return o.input=t,o.options=n,o}return e}(wo),hf=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o,a;return Z(this,function(i){switch(i.label){case 0:return t=this,n=t.input,o=t.options,o instanceof Zh?[4,se.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof nf?function(s){return se.tinyFaceDetector.locateFaces(s,o)}:o instanceof Na?function(s){return se.ssdMobilenetv1.locateFaces(s,o)}:o instanceof Zs?function(s){return se.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},e.prototype.runAndExtendWithFaceDetections=function(){var t=this;return new Promise(function(n){return Q(t,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return zs({},i)}))]}})})})},e.prototype.withFaceLandmarks=function(t){return t===void 0&&(t=!1),new zx(this.runAndExtendWithFaceDetections(),this.input,t)},e.prototype.withFaceExpressions=function(){return new ru(this.runAndExtendWithFaceDetections(),this.input)},e.prototype.withAgeAndGender=function(){return new su(this.runAndExtendWithFaceDetections(),this.input)},e}(lf);(function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return[4,new hf(this.input,this.options)];case 1:return t=o.sent(),n=t[0],t.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},e.prototype.runAndExtendWithFaceDetection=function(){var t=this;return new Promise(function(n){return Q(t,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?zs({},o):void 0)]}})})})},e.prototype.withFaceLandmarks=function(t){return t===void 0&&(t=!1),new $x(this.runAndExtendWithFaceDetection(),this.input,t)},e.prototype.withFaceExpressions=function(){return new ou(this.runAndExtendWithFaceDetection(),this.input)},e.prototype.withAgeAndGender=function(){return new uu(this.runAndExtendWithFaceDetection(),this.input)},e})(lf);function Vx(r,e){return e===void 0&&(e=new Na),new hf(r,e)}function Gx(r,e){if(r.length!==e.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var t=Array.from(r),n=Array.from(e);return Math.sqrt(t.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}(function(){function r(e,t){t===void 0&&(t=.6),this._distanceThreshold=t;var n=Array.isArray(e)?e:[e];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof Fo)return i;if(i instanceof Float32Array)return new Fo(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Fo(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(e,t){return t.map(function(n){return Gx(n,e)}).reduce(function(n,o){return n+o},0)/(t.length||1)},r.prototype.matchDescriptor=function(e){var t=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new kc(a,t.computeMeanDistance(e,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(e){var t=this.matchDescriptor(e);return t.distance<this.distanceThreshold?t:new kc("unknown",t.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(e){return e.toJSON()})}},r.fromJSON=function(e){var t=e.labeledDescriptors.map(function(n){return Fo.fromJSON(n)});return new r(t,e.distanceThreshold)},r})();var Hx=Object.defineProperty,jx=Object.getOwnPropertyDescriptor,du=(r,e,t,n)=>{for(var o=n>1?void 0:n?jx(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&Hx(e,t,o),o};let co=class extends Ze{constructor(){super(...arguments),this.detectionBuffer=document.createElement("canvas"),this.canvasBuffer=document.createElement("canvas"),this.mediaStream=null,this.mediaRecorder=null,this.writableStream=null,this.intervalId=null,this.frameTimes=[],this.frameRate=0,this.detections=null}async firstUpdated(){this.canvas.width=this.detectionBuffer.width=this.canvasBuffer.width=this.video.width,this.canvas.height=this.detectionBuffer.height=this.canvasBuffer.height=this.video.height,await this.loadModels(),this.startVideoStream()}async loadModels(){const r="./models";await se.tinyFaceDetector.loadFromUri(r),await se.ageGenderNet.loadFromUri(r)}async startVideoStream(){this.mediaStream=await navigator.mediaDevices.getUserMedia({video:{},audio:{}}),this.video.srcObject=this.mediaStream,this.video.addEventListener("play",()=>{this.startFaceDetection()})}startFaceDetection(){this.intervalId=setInterval(()=>this.updateCanvas(),1e3/30),this.detectFaces()}async updateCanvas(){const r=this.canvasBuffer.getContext("2d",{alpha:!1}),e=this.canvas.getContext("2d",{alpha:!1});if(!(!r||!e)){if(r.drawImage(this.video,0,0,this.canvasBuffer.width,this.canvasBuffer.height),this.detections){gb(this.canvasBuffer,this.detections);const t=`${new Date().toLocaleString()}
detected faces: ${this.detections.length}
frame rate: ${this.frameRate.toFixed(1)}`;new Nh(t.split(`
`),new yt(0,0)).draw(this.canvasBuffer)}e.drawImage(this.canvasBuffer,0,0,this.canvasBuffer.width,this.canvasBuffer.height)}}async detectFaces(){const r=this.detectionBuffer.getContext("2d",{alpha:!1,willReadFrequently:!0});if(!r){setTimeout(()=>this.detectFaces(),100);return}r.drawImage(this.video,0,0,this.detectionBuffer.width,this.detectionBuffer.height),this.detections=await Vx(this.detectionBuffer,new nf).withAgeAndGender();const e={isReady:!0,numFaces:this.detections.length,faces:this.detections.map(t=>({age:t.age}))};us.set(e),this.frameTimes.push(Date.now()),this.frameTimes.length>6&&this.frameTimes.shift(),this.frameTimes.length==6&&(this.frameRate=5e3/(this.frameTimes[5]-this.frameTimes[0])),setTimeout(()=>this.detectFaces(),100)}async startRecording(r){try{const t=await(await navigator.storage.getDirectory()).getFileHandle(r,{create:!0});this.writableStream=await t.createWritable()}catch(e){console.log("Open file failed: ",e);return}if(this.canvas){const e=this.canvas.captureStream(30);for(const t of this.mediaStream.getAudioTracks())e.addTrack(t);this.mediaRecorder=new MediaRecorder(e,{mimeType:"video/mp4;codecs=avc1"}),this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.writableStream&&this.writableStream.write(t.data)},this.mediaRecorder.onstop=async()=>{this.writableStream&&(await this.writableStream.close(),this.writableStream=null,console.log("File saved successfully"))},this.mediaRecorder.start(1e3),console.log("Recording started")}}stopRecording(){this.mediaRecorder&&(this.mediaRecorder.stop(),console.log("Recording stopped"))}disconnectedCallback(){if(this.stopRecording(),this.intervalId&&clearInterval(this.intervalId),this.mediaStream){for(const r of this.mediaStream.getTracks())r.stop();this.mediaStream=null}super.disconnectedCallback()}async exportRecording(){try{const t=await(await(await navigator.storage.getDirectory()).getFileHandle("test.mp4")).getFile(),n=URL.createObjectURL(t),o=document.createElement("a");o.download="test.mp4",o.href=n,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n)}catch(r){console.log("OPFS Read Error:",r)}}render(){return it`
      <div id="container">
        <video id="video" muted=true autoplay=true width="640" height="480"></video>
        <canvas id="canvas"></canvas>
      <div>
    `}};co.styles=xt`
    div#container {
      display: grid;
    }

    canvas#canvas {
      grid-area: 1 / 1;
    }

    video {
      grid-area: 1 / 1;
    }
  `;du([nt("#canvas")],co.prototype,"canvas",2);du([nt("#video")],co.prototype,"video",2);co=du([_t("face-detector")],co);var qx=Object.defineProperty,Kx=(r,e,t,n)=>{for(var o=void 0,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(e,t,o)||o);return o&&qx(e,t,o),o};const gu=class gu extends Ze{constructor(){super(...arguments),this.animated=!1}isAnimated(){return this.animated}setAnimated(e){this.animated=e,this.requestUpdate()}updated(e){super.updated(e),this.isAnimated()&&this.startAnimation()}startAnimation(){}};gu.styles=xt`
    img {
      -webkit-touch-callout: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
    }
  `;let Et=gu;Kx([jn({type:Boolean})],Et.prototype,"animated");class re{constructor(e,t,n){this.actor=e,this.motion=t,this.interval=n,this.isMoving=!1}async repeat(){!this.actor.isAnimated()||this.isMoving||(this.isMoving=!0,await this.motion(),setTimeout(()=>{this.isMoving=!1,this.repeat()},this.interval()))}async test(){await this.motion()}}var Xx=Object.defineProperty,Yx=Object.getOwnPropertyDescriptor,Jx=Object.getPrototypeOf,Qx=Reflect.get,ff=(r,e,t,n)=>{for(var o=n>1?void 0:n?Yx(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&Xx(e,t,o),o},Zx=(r,e,t)=>Qx(Jx(r),t,e);let br=class extends Et{constructor(){super(...arguments),this.pullingMotion=new re(this,async()=>{const r="1200px 1200px";await this.main.animate([{transform:"rotate(0)",transformOrigin:r},{transform:"rotate(3deg)",transformOrigin:r,offset:.9},{transform:"rotate(0)",transformOrigin:r}],{duration:2e3,direction:"normal"}).finished},()=>3e3)}startAnimation(){this.pullingMotion.repeat()}render(){return it`
      <div id="container">
        <div id="main">
          <img id="body" src="./books/giant-turnip-book/cat-pulling.png"></img>
        </div>
      </div>
    `}};br.styles=xt`
    ${Zx(br,br,"styles")}
    
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
  `;ff([nt("div#main")],br.prototype,"main",2);br=ff([_t("cat-pulling-actor")],br);var t1=Object.defineProperty,e1=Object.getOwnPropertyDescriptor,n1=Object.getPrototypeOf,r1=Reflect.get,df=(r,e,t,n)=>{for(var o=n>1?void 0:n?e1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&t1(e,t,o),o},o1=(r,e,t)=>r1(n1(r),t,e);let xr=class extends Et{constructor(){super(...arguments),this.bobMotion=new re(this,async()=>{await this.main.animate([{transform:"translateY(0px)",easing:"ease-in-out"},{transform:"translateY(0px)",easing:"ease-in-out",offset:.3},{transform:"translateY(-300px)",easing:"ease-in-out",offset:.5},{transform:"translateY(0px)",easing:"ease-in-out",offset:.7},{transform:"translateY(0px)",easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished},()=>1e3)}startAnimation(){this.bobMotion.repeat()}render(){return it`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/cat-head.png"></img>
      </div>
    `}};xr.styles=xt`
    ${o1(xr,xr,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(300 / 1536), calc(300 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;df([nt("img#main")],xr.prototype,"main",2);xr=df([_t("cat-head-actor")],xr);var a1=Object.defineProperty,i1=Object.getOwnPropertyDescriptor,s1=Object.getPrototypeOf,u1=Reflect.get,Fa=(r,e,t,n)=>{for(var o=n>1?void 0:n?i1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&a1(e,t,o),o},c1=(r,e,t)=>u1(s1(r),t,e);let Cn=class extends Et{constructor(){super(...arguments),this.pullingMotion=new re(this,async()=>{const r="800px 1200px",e="950px 1125px",t="780px 600px";await Promise.all([this.main.animate([{transform:"rotate(0)",transformOrigin:r},{transform:"rotate(3deg)",transformOrigin:r,offset:.9},{transform:"rotate(0)",transformOrigin:r}],{duration:2e3,direction:"normal"}).finished,this.tail.animate([{transform:"rotate(0)",transformOrigin:e},{transform:"rotate(0)",transformOrigin:e,offset:.625},{transform:"rotate(-20deg)",transformOrigin:e,easing:"ease-in-out"},{transform:"rotate(20deg)",transformOrigin:e,easing:"ease-in-out"},{transform:"rotate(-20deg)",transformOrigin:e,easing:"ease-in-out"},{transform:"rotate(20deg)",transformOrigin:e,easing:"ease-in-out"},{transform:"rotate(0)",transformOrigin:e}],{duration:3200,direction:"normal"}).finished,this.ear.animate([{transform:"rotate(0)",transformOrigin:t},{transform:"rotate(0)",transformOrigin:t,offset:.625},{transform:"rotate(8deg)",transformOrigin:t,easing:"ease-in-out"},{transform:"rotate(0)",transformOrigin:t,offset:.8}],{duration:3200,direction:"normal"}).finished])},()=>1800)}startAnimation(){this.pullingMotion.repeat()}render(){return it`
      <div id="container">
        <div id="main">
          <img id="tail" src="./books/giant-turnip-book/dog-pulling-tail.png"></img>
          <img id="body" src="./books/giant-turnip-book/dog-pulling.png"></img>
          <img id="ear" src="./books/giant-turnip-book/dog-pulling-ear.png"></img>
        </div>
      </div>
    `}};Cn.styles=xt`
    ${c1(Cn,Cn,"styles")}
    
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

    div img#tail {
      z-index: 0;
    }

    div img#body {
      z-index: 1;
    }

    div img#ear {
      z-index: 2;
    }
  `;Fa([nt("div#main")],Cn.prototype,"main",2);Fa([nt("img#tail")],Cn.prototype,"tail",2);Fa([nt("img#ear")],Cn.prototype,"ear",2);Cn=Fa([_t("dog-pulling-actor")],Cn);var l1=Object.defineProperty,h1=Object.getOwnPropertyDescriptor,f1=Object.getPrototypeOf,d1=Reflect.get,pf=(r,e,t,n)=>{for(var o=n>1?void 0:n?h1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&l1(e,t,o),o},p1=(r,e,t)=>d1(f1(r),t,e);let wr=class extends Et{constructor(){super(...arguments),this.bobMotion=new re(this,async()=>{await this.main.animate([{transform:"translateY(0px)",easing:"ease-in-out"},{transform:"translateY(-300px)",easing:"ease-in-out",offset:.2},{transform:"translateY(0px)",easing:"ease-in-out",offset:.4},{transform:"translateY(0px)",easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished},()=>1e3)}startAnimation(){this.bobMotion.repeat()}render(){return it`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/dog-head.png"></img>
      </div>
    `}};wr.styles=xt`
    ${p1(wr,wr,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(300 / 1536), calc(300 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;pf([nt("img#main")],wr.prototype,"main",2);wr=pf([_t("dog-head-actor")],wr);var v1=Object.defineProperty,g1=Object.getOwnPropertyDescriptor,m1=Object.getPrototypeOf,y1=Reflect.get,Ma=(r,e,t,n)=>{for(var o=n>1?void 0:n?g1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&v1(e,t,o),o},b1=(r,e,t)=>y1(m1(r),t,e);let En=class extends Et{constructor(){super(...arguments),this.translateX=0,this.translateY=0,this.rotate=0}render(){return it`
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
    `}};En.styles=xt`
    ${b1(En,En,"styles")}
    
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
  `;Ma([jn({type:String})],En.prototype,"translateX",2);Ma([jn({type:String})],En.prototype,"translateY",2);Ma([jn({type:String})],En.prototype,"rotate",2);En=Ma([_t("giant-turnip-actor")],En);class Ba{constructor(e,t){this.actor=e,this.motion=t}async play(){this.actor.isAnimated()&&await this.motion()}async test(){await this.motion()}}var x1=Object.defineProperty,w1=Object.getOwnPropertyDescriptor,_1=Object.getPrototypeOf,C1=Reflect.get,vf=(r,e,t,n)=>{for(var o=n>1?void 0:n?w1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&x1(e,t,o),o},E1=(r,e,t)=>C1(_1(r),t,e);let _r=class extends Et{constructor(){super(...arguments),this.pulledMotion=new Ba(this,async()=>{await this.giantTurnip.animate([{transform:"translate(-500px, 380px) rotate(-60deg)",easing:"ease-out"},{transform:"rotate(0)",easing:"ease-out"}],{duration:1e3,direction:"normal"}).finished})}firstUpdated(){this.isAnimated()&&this.pulledMotion.play()}render(){return it`
      <div id="container">
        <div id="clip">
          <img id="bg" src="./books/giant-turnip-book/giant-turnip-bg.png"></img>
          <img
            id="main" src="./books/giant-turnip-book/giant-turnip.png"
          ></img>
          <img id="fg" src="./books/giant-turnip-book/giant-turnip-fg.png"></img>
        </div>
      </div>
    `}};_r.styles=xt`
    ${E1(_r,_r,"styles")}
    
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
  `;vf([nt("img#main")],_r.prototype,"giantTurnip",2);_r=vf([_t("giant-turnip-pulled-actor")],_r);var k1=Object.getOwnPropertyDescriptor,R1=Object.getPrototypeOf,S1=Reflect.get,I1=(r,e,t,n)=>{for(var o=n>1?void 0:n?k1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o},A1=(r,e,t)=>S1(R1(r),t,e);let Yr=class extends Et{render(){return it`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/granddaughter.png"></img>
      </div>
    `}};Yr.styles=xt`
    ${A1(Yr,Yr,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(270 / 1536), calc(270 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;Yr=I1([_t("granddaughter-actor")],Yr);var D1=Object.defineProperty,T1=Object.getOwnPropertyDescriptor,P1=Object.getPrototypeOf,N1=Reflect.get,gf=(r,e,t,n)=>{for(var o=n>1?void 0:n?T1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&D1(e,t,o),o},O1=(r,e,t)=>N1(P1(r),t,e);let Cr=class extends Et{constructor(){super(...arguments),this.pulledMotion=new Ba(this,async()=>{const r="1400px 1300px";await this.main.animate([{transform:"rotate(-60deg)",transformOrigin:r,easing:"ease-out"},{transform:"rotate(0)",transformOrigin:r,easing:"ease-out"}],{duration:1e3,direction:"normal"}).finished})}firstUpdated(){this.isAnimated()&&this.pulledMotion.play()}render(){return it`
      <div id="container">
        <div id="main">
          <img id="body" src="./books/giant-turnip-book/granddaughter-pulled.png"></img>
        </div>
      </div>
    `}};Cr.styles=xt`
    ${O1(Cr,Cr,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(400 / 1536), calc(400 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;gf([nt("div#main")],Cr.prototype,"main",2);Cr=gf([_t("granddaughter-pulled-actor")],Cr);var F1=Object.defineProperty,M1=Object.getOwnPropertyDescriptor,B1=Object.getPrototypeOf,L1=Reflect.get,_o=(r,e,t,n)=>{for(var o=n>1?void 0:n?M1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&F1(e,t,o),o},W1=(r,e,t)=>L1(B1(r),t,e);let tn=class extends Et{constructor(){super(...arguments),this.pullingMotion=new re(this,async()=>{let r=[];for(let o=0;o<15;o++)r=r.concat([{transform:"translateY(-2px)"},{transform:"translateY(2px)"}]);r.push({transform:"translateY(0px)"});const e="1500px 1200px",t="1550px 850px",n="1450px 800px";await Promise.all([this.main.animate([{transform:"rotate(0)",transformOrigin:e},{transform:"rotate(3deg)",transformOrigin:e,offset:.9},{transform:"rotate(0)",transformOrigin:e}],{duration:2e3,direction:"normal"}).finished,this.leftHand.animate([{transform:"rotate(0)",transformOrigin:t},{transform:"rotate(-3deg)",transformOrigin:t,offset:.9},{transform:"rotate(0)",transformOrigin:t}],{duration:2e3,direction:"normal"}).finished,this.rightHand.animate([{transform:"rotate(0)",transformOrigin:n},{transform:"rotate(-3deg)",transformOrigin:n,offset:.9},{transform:"rotate(0)",transformOrigin:n}],{duration:2e3,direction:"normal"}).finished,this.eyebrows.animate(r,{duration:1800,direction:"normal"}).finished])},()=>3e3)}startAnimation(){this.pullingMotion.repeat()}render(){return it`
      <div id="container">
        <div id="main">
          <img id="right-hand" src="./books/giant-turnip-book/granddaughter-pulling-right-hand.png"></img>
          <img id="body" src="./books/giant-turnip-book/granddaughter-pulling.png"></img>
          <img id="left-hand" src="./books/giant-turnip-book/granddaughter-pulling-left-hand.png"></img>
          <img id="eyebrows" src="./books/giant-turnip-book/granddaughter-pulling-eyebrows.png"></img>
        </div>
      </div>
    `}};tn.styles=xt`
    ${W1(tn,tn,"styles")}
    
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
  `;_o([nt("div#main")],tn.prototype,"main",2);_o([nt("img#left-hand")],tn.prototype,"leftHand",2);_o([nt("img#right-hand")],tn.prototype,"rightHand",2);_o([nt("img#eyebrows")],tn.prototype,"eyebrows",2);tn=_o([_t("granddaughter-pulling-actor")],tn);var U1=Object.defineProperty,z1=Object.getOwnPropertyDescriptor,$1=Object.getPrototypeOf,V1=Reflect.get,mf=(r,e,t,n)=>{for(var o=n>1?void 0:n?z1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&U1(e,t,o),o},G1=(r,e,t)=>V1($1(r),t,e);let Er=class extends Et{constructor(){super(...arguments),this.bobMotion=new re(this,async()=>{await this.main.animate([{transform:"translateY(0px)",easing:"ease-in-out"},{transform:"translateY(0px)",easing:"ease-in-out",offset:.6},{transform:"translateY(-300px)",easing:"ease-in-out",offset:.8},{transform:"translateY(0px)",easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished},()=>1e3)}startAnimation(){this.bobMotion.repeat()}render(){return it`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/mouse-head.png"></img>
      </div>
    `}};Er.styles=xt`
    ${G1(Er,Er,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(300 / 1536), calc(300 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;mf([nt("img#main")],Er.prototype,"main",2);Er=mf([_t("mouse-head-actor")],Er);var H1=Object.defineProperty,j1=Object.getOwnPropertyDescriptor,q1=Object.getPrototypeOf,K1=Reflect.get,yf=(r,e,t,n)=>{for(var o=n>1?void 0:n?j1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&H1(e,t,o),o},X1=(r,e,t)=>K1(q1(r),t,e);let kr=class extends Et{constructor(){super(...arguments),this.pullingMotion=new re(this,async()=>{const r="1600px 1200px";await this.main.animate([{transform:"rotate(0)",transformOrigin:r},{transform:"rotate(3deg)",transformOrigin:r,offset:.9},{transform:"rotate(0)",transformOrigin:r}],{duration:2e3,direction:"normal"}).finished},()=>3e3)}startAnimation(){this.pullingMotion.repeat()}render(){return it`
      <div id="container">
        <div id="main">
          <img id="body" src="./books/giant-turnip-book/mouse-pulling.png"></img>
        </div>
      </div>
    `}};kr.styles=xt`
    ${X1(kr,kr,"styles")}
    
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
  `;yf([nt("div#main")],kr.prototype,"main",2);kr=yf([_t("mouse-pulling-actor")],kr);var Y1=Object.defineProperty,J1=Object.getOwnPropertyDescriptor,Q1=Object.getPrototypeOf,Z1=Reflect.get,pu=(r,e,t,n)=>{for(var o=n>1?void 0:n?J1(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&Y1(e,t,o),o},tw=(r,e,t)=>Z1(Q1(r),t,e);let $n=class extends Et{constructor(){super(...arguments),this.handMotion=new re(this,async()=>{const r="1300px 800px",e="1010px 750px";await Promise.all([this.leftHand.animate([{transform:"rotate(0)",transformOrigin:r,easing:"ease-in-out"},{transform:"rotate(30deg)",transformOrigin:r,easing:"ease-in-out"},{transform:"rotate(0)",transformOrigin:r,easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished,this.rightHand.animate([{transform:"rotate(0)",transformOrigin:e,easing:"ease-in-out"},{transform:"rotate(-30deg)",transformOrigin:e,easing:"ease-in-out"},{transform:"rotate(0)",transformOrigin:e,easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished])},()=>3e3)}startAnimation(){this.handMotion.repeat()}render(){return it`
      <div id="container">
        <img id="left-hand" src="./books/giant-turnip-book/old-man-excited-left-hand.png"></img>
        <img id="right-hand" src="./books/giant-turnip-book/old-man-excited-right-hand.png"></img>
        <img id="main" src="./books/giant-turnip-book/old-man-excited.png"></img>
      </div>
    `}};$n.styles=xt`
    ${tw($n,$n,"styles")}
    
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
  `;pu([nt("img#left-hand")],$n.prototype,"leftHand",2);pu([nt("img#right-hand")],$n.prototype,"rightHand",2);$n=pu([_t("old-man-excited-actor")],$n);var ew=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,rw=Object.getPrototypeOf,ow=Reflect.get,bf=(r,e,t,n)=>{for(var o=n>1?void 0:n?nw(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&ew(e,t,o),o},aw=(r,e,t)=>ow(rw(r),t,e);let Rr=class extends Et{constructor(){super(...arguments),this.pulledMotion=new Ba(this,async()=>{const r="500px 1300px";await this.main.animate([{transform:"rotate(-60deg)",transformOrigin:r,easing:"ease-out"},{transform:"rotate(0)",transformOrigin:r,easing:"ease-out"}],{duration:1e3,direction:"normal"}).finished})}firstUpdated(){this.isAnimated()&&this.pulledMotion.play()}render(){return it`
      <div id="container">
        <div id="main">
          <img id="body" src="./books/giant-turnip-book/old-man-pulled.png"></img>
        </div>
      </div>
    `}};Rr.styles=xt`
    ${aw(Rr,Rr,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(400 / 1536), calc(400 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;bf([nt("div#main")],Rr.prototype,"main",2);Rr=bf([_t("old-man-pulled-actor")],Rr);var iw=Object.defineProperty,sw=Object.getOwnPropertyDescriptor,uw=Object.getPrototypeOf,cw=Reflect.get,Co=(r,e,t,n)=>{for(var o=n>1?void 0:n?sw(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&iw(e,t,o),o},lw=(r,e,t)=>cw(uw(r),t,e);let en=class extends Et{constructor(){super(...arguments),this.pullingMotion=new re(this,async()=>{let r=[],e=[];for(let n=0;n<15;n++)r=r.concat([{transform:"translateY(-10px)"},{transform:"translateY(10px)"}]),e=e.concat([{transform:"translateY(-5px)"},{transform:"translateY(5px)"}]);r.push({transform:"translateY(0px)"}),e.push({transform:"translateY(0px)"});const t="700px 1200px";await Promise.all([this.main.animate([{transform:"rotate(0)",transformOrigin:t},{transform:"rotate(3deg)",transformOrigin:t,offset:.9},{transform:"rotate(0)",transformOrigin:t}],{duration:2e3,direction:"normal"}).finished,this.leftHand.animate(r,{duration:1800,direction:"normal"}).finished,this.rightHand.animate(r,{duration:1800,direction:"normal"}).finished,this.eyebrows.animate(e,{duration:1800,direction:"normal"}).finished])},()=>3e3)}startAnimation(){this.pullingMotion.repeat()}render(){return it`
      <div id="container">
        <div id="main">
          <img id="right-hand" src="./books/giant-turnip-book/old-man-pulling-2-right-hand.png"></img>
          <img id="body" src="./books/giant-turnip-book/old-man-pulling-2.png"></img>
          <img id="left-hand" src="./books/giant-turnip-book/old-man-pulling-2-left-hand.png"></img>
          <img id="eyebrows" src="./books/giant-turnip-book/old-man-pulling-2-eyebrows.png"></img>
        </div>
      </div>
    `}};en.styles=xt`
    ${lw(en,en,"styles")}
    
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
  `;Co([nt("div#main")],en.prototype,"main",2);Co([nt("img#left-hand")],en.prototype,"leftHand",2);Co([nt("img#right-hand")],en.prototype,"rightHand",2);Co([nt("img#eyebrows")],en.prototype,"eyebrows",2);en=Co([_t("old-man-pulling-2-actor")],en);var hw=Object.defineProperty,fw=Object.getOwnPropertyDescriptor,dw=Object.getPrototypeOf,pw=Reflect.get,La=(r,e,t,n)=>{for(var o=n>1?void 0:n?fw(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&hw(e,t,o),o},vw=(r,e,t)=>pw(dw(r),t,e);let kn=class extends Et{constructor(){super(...arguments),this.pullingMotion=new re(this,async()=>{let r=[],e=[];for(let t=0;t<15;t++)r=r.concat([{transform:"translateY(-10px)"},{transform:"translateY(10px)"}]),e=e.concat([{transform:"translateY(-5px)"},{transform:"translateY(5px)"}]);r.push({transform:"translateY(0px)"}),e.push({transform:"translateY(0px)"}),await Promise.all([this.leftHand.animate(r,{duration:2e3,direction:"normal"}).finished,this.rightHand.animate(r,{duration:2e3,direction:"normal"}).finished,this.eyebrows.animate(e,{duration:2e3,direction:"normal"}).finished])},()=>3e3)}startAnimation(){this.pullingMotion.repeat()}render(){return it`
      <div id="container">
        <img id="right-hand" src="./books/giant-turnip-book/old-man-pulling-right-hand.png"></img>
        <img id="main" src="./books/giant-turnip-book/old-man-pulling.png"></img>
        <img id="left-hand" src="./books/giant-turnip-book/old-man-pulling-left-hand.png"></img>
        <img id="eyebrows" src="./books/giant-turnip-book/old-man-pulling-eyebrows.png"></img>
      </div>
    `}};kn.styles=xt`
    ${vw(kn,kn,"styles")}
    
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
  `;La([nt("img#left-hand")],kn.prototype,"leftHand",2);La([nt("img#right-hand")],kn.prototype,"rightHand",2);La([nt("img#eyebrows")],kn.prototype,"eyebrows",2);kn=La([_t("old-man-pulling-actor")],kn);var gw=Object.getOwnPropertyDescriptor,mw=Object.getPrototypeOf,yw=Reflect.get,bw=(r,e,t,n)=>{for(var o=n>1?void 0:n?gw(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o},xw=(r,e,t)=>yw(mw(r),t,e);let Jr=class extends Et{render(){return it`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/old-man-sowing.png"></img>
      </div>
    `}};Jr.styles=xt`
    ${xw(Jr,Jr,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(360 / 1536), calc(360 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;Jr=bw([_t("old-man-sowing-actor")],Jr);var ww=Object.defineProperty,_w=Object.getOwnPropertyDescriptor,Cw=Object.getPrototypeOf,Ew=Reflect.get,vu=(r,e,t,n)=>{for(var o=n>1?void 0:n?_w(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&ww(e,t,o),o},kw=(r,e,t)=>Ew(Cw(r),t,e);let Vn=class extends Et{constructor(){super(...arguments),this.tiredMotion=new re(this,async()=>{const r="0 1100px";await Promise.all([this.head.animate([{transform:"rotate(0)",easing:"ease-in-out"},{transform:"translateY(20px) rotate(-2deg)",easing:"ease-in-out"},{transform:"rotate(0)",easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished,this.body.animate([{transform:"scaleY(1)",transformOrigin:r,easing:"ease-in-out"},{transform:"scaleY(0.97)",transformOrigin:r,easing:"ease-in-out"},{transform:"scaleY(1)",transformOrigin:r,easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished])},()=>0)}startAnimation(){this.tiredMotion.repeat()}render(){return it`
      <div id="container">
        <img id="body" src="./books/giant-turnip-book/old-man-tired.png"></img>
        <img id="legs" src="./books/giant-turnip-book/old-man-tired-legs.png"></img>
        <img id="head" src="./books/giant-turnip-book/old-man-tired-head.png"></img>
      </div>
    `}};Vn.styles=xt`
    ${kw(Vn,Vn,"styles")}
    
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
  `;vu([nt("img#body")],Vn.prototype,"body",2);vu([nt("img#head")],Vn.prototype,"head",2);Vn=vu([_t("old-man-tired-actor")],Vn);var Rw=Object.defineProperty,Sw=Object.getOwnPropertyDescriptor,Iw=Object.getPrototypeOf,Aw=Reflect.get,xf=(r,e,t,n)=>{for(var o=n>1?void 0:n?Sw(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&Rw(e,t,o),o},Dw=(r,e,t)=>Aw(Iw(r),t,e);let Sr=class extends Et{constructor(){super(...arguments),this.handMotion=new re(this,async()=>{const r="1150px 650px";await this.hand.animate([{transform:"rotate(0)",transformOrigin:r,easing:"ease-in-out"},{transform:"rotate(-10deg)",transformOrigin:r,easing:"ease-in-out",offset:.25},{transform:"rotate(20deg)",transformOrigin:r,easing:"ease-in-out",offset:.75},{transform:"rotate(0)",transformOrigin:r,easing:"ease-in-out"}],{duration:2e3,direction:"normal"}).finished},()=>3e3)}startAnimation(){this.handMotion.repeat()}render(){return it`
      <div id="container">
        <img id="hand" src="./books/giant-turnip-book/old-man-watering-hand.png"></img>
        <img id="main" src="./books/giant-turnip-book/old-man-watering.png"></img>
      </div>
    `}};Sr.styles=xt`
    ${Dw(Sr,Sr,"styles")}
    
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
  `;xf([nt("img#hand")],Sr.prototype,"hand",2);Sr=xf([_t("old-man-watering-actor")],Sr);var Tw=Object.getOwnPropertyDescriptor,Pw=Object.getPrototypeOf,Nw=Reflect.get,Ow=(r,e,t,n)=>{for(var o=n>1?void 0:n?Tw(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o},Fw=(r,e,t)=>Nw(Pw(r),t,e);let Qr=class extends Et{render(){return it`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/old-man.png"></img>
      </div>
    `}};Qr.styles=xt`
    ${Fw(Qr,Qr,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(360 / 1536), calc(360 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;Qr=Ow([_t("old-man-actor")],Qr);var Mw=Object.getOwnPropertyDescriptor,Bw=Object.getPrototypeOf,Lw=Reflect.get,Ww=(r,e,t,n)=>{for(var o=n>1?void 0:n?Mw(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o},Uw=(r,e,t)=>Lw(Bw(r),t,e);let Zr=class extends Et{render(){return it`
      <div id="container">
        <img id="main" src="./books/giant-turnip-book/old-woman.png"></img>
      </div>
    `}};Zr.styles=xt`
    ${Uw(Zr,Zr,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(360 / 1536), calc(360 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;Zr=Ww([_t("old-woman-actor")],Zr);var zw=Object.defineProperty,$w=Object.getOwnPropertyDescriptor,Vw=Object.getPrototypeOf,Gw=Reflect.get,wf=(r,e,t,n)=>{for(var o=n>1?void 0:n?$w(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&zw(e,t,o),o},Hw=(r,e,t)=>Gw(Vw(r),t,e);let Ir=class extends Et{constructor(){super(...arguments),this.pulledMotion=new Ba(this,async()=>{const r="1000px 1300px";await this.main.animate([{transform:"rotate(-60deg)",transformOrigin:r,easing:"ease-out"},{transform:"rotate(0)",transformOrigin:r,easing:"ease-out"}],{duration:1e3,direction:"normal"}).finished})}firstUpdated(){this.isAnimated()&&this.pulledMotion.play()}render(){return it`
      <div id="container">
        <div id="main">
          <img id="body" src="./books/giant-turnip-book/old-woman-pulled.png"></img>
        </div>
      </div>
    `}};Ir.styles=xt`
    ${Hw(Ir,Ir,"styles")}
    
    div#container {
      display: grid;
      transform: scale(calc(400 / 1536), calc(400 / 1536));
      transform-origin: top left;
    }

    div img {
      grid-area: 1 / 1;
    }
  `;wf([nt("div#main")],Ir.prototype,"main",2);Ir=wf([_t("old-woman-pulled-actor")],Ir);var jw=Object.defineProperty,qw=Object.getOwnPropertyDescriptor,Kw=Object.getPrototypeOf,Xw=Reflect.get,Eo=(r,e,t,n)=>{for(var o=n>1?void 0:n?qw(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&jw(e,t,o),o},Yw=(r,e,t)=>Xw(Kw(r),t,e);let nn=class extends Et{constructor(){super(...arguments),this.pullingMotion=new re(this,async()=>{let r=[];for(let o=0;o<15;o++)r=r.concat([{transform:"translateY(-5px)"},{transform:"translateY(5px)"}]);r.push({transform:"translateY(0px)"});const e="1100px 1200px",t="1150px 850px",n="1050px 800px";await Promise.all([this.main.animate([{transform:"rotate(0)",transformOrigin:e},{transform:"rotate(3deg)",transformOrigin:e,offset:.9},{transform:"rotate(0)",transformOrigin:e}],{duration:2e3,direction:"normal"}).finished,this.leftHand.animate([{transform:"rotate(0)",transformOrigin:t},{transform:"rotate(-3deg)",transformOrigin:t,offset:.9},{transform:"rotate(0)",transformOrigin:t}],{duration:2e3,direction:"normal"}).finished,this.rightHand.animate([{transform:"rotate(0)",transformOrigin:n},{transform:"rotate(-3deg)",transformOrigin:n,offset:.9},{transform:"rotate(0)",transformOrigin:n}],{duration:2e3,direction:"normal"}).finished,this.eyebrows.animate(r,{duration:1800,direction:"normal"}).finished])},()=>3e3)}startAnimation(){this.pullingMotion.repeat()}render(){return it`
      <div id="container">
        <div id="main">
          <img id="right-hand" src="./books/giant-turnip-book/old-woman-pulling-right-hand.png"></img>
          <img id="body" src="./books/giant-turnip-book/old-woman-pulling.png"></img>
          <img id="left-hand" src="./books/giant-turnip-book/old-woman-pulling-left-hand.png"></img>
          <img id="eyebrows" src="./books/giant-turnip-book/old-woman-pulling-eyebrows.png"></img>
        </div>
      </div>
    `}};nn.styles=xt`
    ${Yw(nn,nn,"styles")}
    
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
  `;Eo([nt("div#main")],nn.prototype,"main",2);Eo([nt("img#left-hand")],nn.prototype,"leftHand",2);Eo([nt("img#right-hand")],nn.prototype,"rightHand",2);Eo([nt("img#eyebrows")],nn.prototype,"eyebrows",2);nn=Eo([_t("old-woman-pulling-actor")],nn);var Jw=Object.getOwnPropertyDescriptor,Qw=(r,e,t,n)=>{for(var o=n>1?void 0:n?Jw(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o};let Qi=class extends Et{render(){return it`
      <div id="container">
        <div id="clip">
          <img id="bg" src="./books/giant-turnip-book/small-turnip-bg.png"></img>
          <img id="main" src="./books/giant-turnip-book/small-turnip.png"></img>
          <img id="fg" src="./books/giant-turnip-book/small-turnip-fg.png"></img>
        </div>
      </div>
    `}};Qi.styles=xt`
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
  `;Qi=Qw([_t("small-turnip-actor")],Qi);var Zw=Object.defineProperty,t2=Object.getOwnPropertyDescriptor,_f=(r,e,t,n)=>{for(var o=n>1?void 0:n?t2(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&Zw(e,t,o),o};const mu=class mu extends Ze{constructor(){super(...arguments),this.currentPageInternal=0,this.isAnimatedInternal=!1}getCurrentPage(){return this.currentPageInternal}setCurrentPage(e){this.currentPageInternal=e,this.requestUpdate()}isAnimated(){return this.isAnimatedInternal}setAnimated(e){this.isAnimatedInternal=e,this.requestUpdate()}updated(e){super.updated(e);for(const t of this.actors)t.setAnimated(this.isAnimatedInternal)}};mu.styles=xt`
  `;let lo=mu;_f([Yf(".actor")],lo.prototype,"actors",2);let Zi=class extends lo{constructor(){super(...arguments),this.pages=[it`
      <div class="page page-0">
        <kezaruu-actor class="actor"></kezaruu-actor>
      </div>
    `]}getNumPages(){return this.pages.length}render(){return this.pages[this.getCurrentPage()]}};Zi.styles=xt`
    .page {
      height: 480px;
      overflow: hidden;
      width: 640px;
    }

    .page-0 {
      background-image: url(./img/background.png);
      background-size: 774px 512px;
    }
  `;Zi=_f([_t("sample-book")],Zi);var e2=Object.getOwnPropertyDescriptor,n2=(r,e,t,n)=>{for(var o=n>1?void 0:n?e2(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=i(o)||o);return o};let ts=class extends lo{constructor(){super(...arguments),this.pages=[()=>it`
      <div class="page cover">
        <h1 class="title">おおきなかぶ</h1>
        <dog-head-actor class="actor dog-head"></dog-head-actor>
        <cat-head-actor class="actor cat-head"></cat-head-actor>
        <mouse-head-actor class="actor mouse-head"></mouse-head-actor>
        <giant-turnip-actor class="actor giant-turnip-cover"></giant-turnip-actor>
        <old-man-actor class="actor old-man"></old-man-actor>
        <old-woman-actor class="actor old-woman"></old-woman-actor>
        <granddaughter-actor class="actor granddaughter"></granddaughter-actor>
        <audio src="./books/giant-turnip-book/title.mp3" autoplay></audio>
      </div>
    `,()=>it`
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
    `,()=>it`
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
    `,()=>it`
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
    `,()=>it`
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
    `,()=>it`
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
    `,()=>it`
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
    `,()=>it`
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
    `,()=>it`
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
    `,()=>it`
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
    `,()=>it`
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
    `,()=>it`
      <div class="page page-11">
        <p class="text">
          すっぽーん<br>
          とうとう、おおきなかぶが、ぬけました。<br>
          「ありがとう。みんなのおかげだよ」
        </p>
        <giant-turnip-pulled-actor .animated=${this.isAnimated()} class="actor giant-turnip-pulled">
        </giant-turnip-pulled-actor>
        <granddaughter-pulled-actor .animated=${this.isAnimated()} class="actor granddaughter-pulled"></granddaughter-pulled-actor>
        <old-woman-pulled-actor .animated=${this.isAnimated()} class="actor old-woman-pulled"></old-woman-pulled-actor>
        <old-man-pulled-actor .animated=${this.isAnimated()} class="actor old-man-pulled"></old-man-pulled-actor>
        <audio src="./books/giant-turnip-book/page-11.mp3" autoplay></audio>
      </div>
    `]}getNumPages(){return this.pages.length}render(){return this.pages[this.getCurrentPage()]()}};ts.styles=xt`
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

    .dog-head {
      top: 200px;
      left: 90px;
    }

    .cat-head {
      top: 200px;
      left: 140px;
    }

    .mouse-head {
      top: 200px;
      left: 180px;
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

    .giant-turnip-pulled {
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

    .old-man-pulled {
      top: 55px;
      left: calc(200px + var(--offset-x));
      transform: rotate(40deg);
      transform-origin: 130px 360px;
    }

    .old-woman-pulling {
      top: 85px;
      left: calc(140px + var(--offset-x));
    }

    .old-woman-pulled {
      top: 55px;
      left: calc(180px + var(--offset-x));
      transform: rotate(40deg);
      transform-origin: 260px 360px;
    }

    .granddaughter-pulling {
      top: 85px;
      left: calc(140px + var(--offset-x));
    }

    .granddaughter-pulled {
      top: 55px;
      left: calc(180px + var(--offset-x));
      transform: rotate(40deg);
      transform-origin: 370px 360px;
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
      --offset-x: -50px;
    }
  `;ts=n2([_t("giant-turnip-book")],ts);var r2=Object.defineProperty,o2=Object.getOwnPropertyDescriptor,a2=Object.getPrototypeOf,i2=Reflect.get,Dn=(r,e,t,n)=>{for(var o=n>1?void 0:n?o2(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&r2(e,t,o),o},s2=(r,e,t)=>i2(a2(r),t,e);let we=class extends Et{constructor(){super(...arguments),this.blink=new re(this,async()=>{await this.eyes.animate([{backgroundPosition:"0 0"},{backgroundPosition:"0 -1536px"},{backgroundPosition:"0 -3072px"},{backgroundPosition:"0 -1536px"},{backgroundPosition:"0 0"}],{duration:125,direction:"normal",easing:"steps(4)"}).finished},()=>Math.random()*1e4+200),this.faceMotion=new re(this,async()=>{const r=t=>[{transform:"translate(0, 0)",easing:"ease-in-out"},{transform:`translate(${t}px, 0)`,easing:"ease-in-out",offset:.1},{transform:`translate(${t}px, 0)`,easing:"ease-in-out",offset:.9},{transform:"translate(0, 0)"}],e={duration:2e3,direction:"normal"};await Promise.all([this.head.animate(r(-15),e).finished,this.ears.animate([{transform:"translate(0, 0)",easing:"ease-in-out"},{transform:"translate(-15px, 0)",easing:"ease-in-out",offset:.1},{transform:"translate(-15px, 0) scaleY(0.95)",easing:"ease-in-out",offset:.3},{transform:"translate(-15px, 0)",easing:"ease-in-out",offset:.5},{transform:"translate(-15px, 0) scaleY(0.95)",easing:"ease-in-out",offset:.7},{transform:"translate(-15px, 0)",easing:"ease-in-out",offset:.9},{transform:"translate(0, 0)"}],e).finished,this.face.animate(r(-40),e).finished,this.mouth.animate(r(-50),e).finished,this.nose.animate(r(-60),e).finished,this.eyes.animate(r(-50),e).finished])},()=>Math.random()*1e4+5e3),this.handMotion=new re(this,async()=>{await this.hand.animate([{transform:"translate(0, 0)",easing:"ease-in-out"},{transform:"translate(-10px, 30px)",easing:"ease-in-out"},{transform:"translate(0, 0)"}],{duration:2e3,direction:"normal"}).finished},()=>3e3)}startAnimation(){this.blink.repeat(),this.faceMotion.repeat(),this.handMotion.repeat()}render(){return it`
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
    `}};we.styles=xt`
    ${s2(we,we,"styles")}
    
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
  `;Dn([nt("img#head")],we.prototype,"head",2);Dn([nt("img#face")],we.prototype,"face",2);Dn([nt("img#ears")],we.prototype,"ears",2);Dn([nt("img#mouth")],we.prototype,"mouth",2);Dn([nt("img#nose")],we.prototype,"nose",2);Dn([nt("div#eyes")],we.prototype,"eyes",2);Dn([nt("img#hand")],we.prototype,"hand",2);we=Dn([_t("kezaruu-actor")],we);var u2=Object.defineProperty,c2=Object.getOwnPropertyDescriptor,Tn=(r,e,t,n)=>{for(var o=n>1?void 0:n?c2(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(o=(n?i(e,t,o):i(o))||o);return n&&o&&u2(e,t,o),o};async function l2(){try{const r=await navigator.storage.getDirectory(),e=[];for await(const[t,n]of r.entries()){if(n.kind!=="file")continue;const a=await(await n.getFile()).arrayBuffer(),i=[];for(let s=0;s<a.byteLength;s+=3072)i.push(btoa(String.fromCharCode(...new Uint8Array(a,s,Math.min(3072,a.byteLength-s)))));e.push(`${t}:${i.join("")}`)}return e.join(`
`)}catch(r){return console.log("OPFS Read Error:",r),"failed:"+r}}async function h2(r){try{await(await navigator.storage.getDirectory()).removeEntry(r)}catch(e){console.log("OPFS Delete Error:",e)}}let Ve=class extends Gc(Ze){constructor(){super(...arguments),this.isRecording=!1,this.showCamera=!0}toggleRecording(){this.isRecording?(this.faceDetector.stopRecording(),this.recordingToggle.innerText="●",this.exportButton.disabled=!1):(this.faceDetector.startRecording("test.mp4"),this.recordingToggle.innerText="■"),this.isRecording=!this.isRecording}exportVideo(){if(new URLSearchParams(window.location.search).has("webview")){const e=document.createElement("a");e.href="export:test.mp4",e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)}else this.faceDetector.exportRecording()}changeNumFaces(){const r=Number(this.numFacesSelect.options[this.numFacesSelect.selectedIndex].value);this.bookViewer.setNumFacesThreshold(r)}toggleCamera(){this.showCamera?(this.faceDetector.style.position="absolute",this.faceDetector.style.visibility="hidden",this.cameraToggle.innerHTML="カメラ画面を見せる"):(this.faceDetector.style.position="static",this.faceDetector.style.visibility="",this.cameraToggle.innerHTML="カメラ画像を隠す"),this.showCamera=!this.showCamera}startRecording(){const r=new Date().toISOString().replace(/[-T:]/g,"").substring(0,14);this.faceDetector.startRecording(`ehonapp_${r}.mp4`),this.isRecording=!0}handleLastButtonClick(){this.faceDetector.stopRecording(),this.exportVideo(),this.isRecording=!1}async firstUpdated(){document.deleteRecording=async r=>{h2(r)},document.exportRecordingsToApp=async()=>(this.faceDetector.stopRecording(),this.isRecording=!1,await l2())}render(){return new URLSearchParams(window.location.search).has("webview")?it`
        <div id="main">
          <div class="webview">
            <face-detector class="webview"></face-detector>
            ${this.isRecording?it`<book-viewer class="webview"
                                  @last-button-click="${()=>this.handleLastButtonClick()}"
                                  .numFacesThreshold=${2}>
                     </book-viewer>`:it`<div class="start-screen">
                       <p class="start-screen">
                         えほんアプリへ ようこそ!<br>
                         えほんをよむときは<br>
                         ちかづきすぎないようにしてね<br>
                       </p>
                       <img src="./img/start-screen.png"></img>
                       <div class="button-container">
                         <button id="start"
                                 @click=${()=>this.startRecording()}
                                 ?disabled=${!us.get().isReady}>
                           Start
                         </button>
                       </div>
                     </div>`}
          </div>
        </div>`:it`
      <div id="main">
        <div>
          <face-detector></face-detector>
          <book-viewer></book-viewer>
        </div>
        <div class="button-group">
          <div>検出する顔の数</div>
          <select id="num_faces" @input=${()=>this.changeNumFaces()}>
            <option value="0">0</option>
            <option value="1" selected>1</option>
            <option value="2">2</option>
          </select>
          <button id="recording" @click=${()=>this.toggleRecording()}>●</button>
          <button id="export" @click=${()=>this.exportVideo()} disabled>ビデオのエクスポート</button>
          <button id="toggle_camera" @click=${()=>this.toggleCamera()}>カメラ画像を隠す</button> 
        </div>
      </div>`}};Ve.styles=xt`
    div#main > div {
      display: flex;
    }

    div#main > div.webview {
      align-items: center;
      justify-content: center;
    }

    face-detector.webview {
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(0.05);
      transform-origin: top left;
      z-index: 0;
    }

    book-viewer.webview {
      transform: scale(calc(95dvw / 690px));
      transform-origin: top center;
    }

    div.start-screen {
      background: white;
      padding: 24px 0 0 0;
      z-index: 1;
    }

    p.start-screen {
      font-size: 60px;
      font-weight: 600;
      line-height: 120px;
      margin: 0;
    }

    div.start-screen img {
      padding: 0 0 0 24px;
      width: 30dvw;
      vertical-align: bottom;
    }

    div.button-container {
      display: inline-block;
      height: 25dvh;
      text-align: right;
      vertical-align: bottom;
      width: 35dvw;
    }

    button#start {
      border: 3px solid;
      border-radius: 10px;
      font-size: 24px;
      font-weight: 500;
      min-height: 120px;
      min-width: 160px;
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
  `;Tn([nt("select#num_faces")],Ve.prototype,"numFacesSelect",2);Tn([nt("button#recording")],Ve.prototype,"recordingToggle",2);Tn([nt("button#export")],Ve.prototype,"exportButton",2);Tn([nt("button#toggle_camera")],Ve.prototype,"cameraToggle",2);Tn([nt("face-detector")],Ve.prototype,"faceDetector",2);Tn([nt("book-viewer")],Ve.prototype,"bookViewer",2);Tn([jn({type:Boolean})],Ve.prototype,"isRecording",2);Ve=Tn([_t("main-element")],Ve)});export default f2();
