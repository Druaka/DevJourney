import{$ as oa,$a as tr,A as xt,Aa as er,B as it,Ba as ua,C as Ve,Ca as eo,D as fn,Da as j,E as Zi,Ea as J,F as Xi,Fa as z,G as Ji,Ga as he,H as ne,Ha as ct,I as Qi,Ia as pa,J as K,Ja as Cn,K as S,Ka as wn,L as m,La as fa,M as X,Ma as Dn,N as ea,Na as ha,O as k,Oa as ye,P as hn,Pa as M,Q as C,Qa as ga,R as u,Ra as ma,S as Ge,Sa as Et,T as ta,Ta as F,U as qe,Ua as T,V as pe,Va as q,W as fe,Wa as to,X as ra,Xa as ro,Y as L,Ya as ba,Z as gn,Za as oo,_ as Pe,_a as Ce,a as g,aa as na,ab as rr,b as V,ba as Jt,bb as lt,ca as be,cb as dt,d as Wi,da as ie,db as ut,e as Vi,ea as mn,eb as P,f as Gi,fa as _e,fb as pt,g as ln,ga as ve,gb as va,h as dn,ha as at,hb as Ae,i as oe,ia,ib as ya,j as ue,ja as bn,jb as kn,k as Le,ka as aa,kb as no,l as G,la as ee,lb as Ca,m as v,ma as sa,mb as Ye,n as Zt,na as vn,nb as wa,o as qi,oa as ca,ob as Da,p as Yi,pa as yn,pb as N,q as x,qa as la,qb as Sn,r as Zr,ra as Qt,rb as xn,s as Q,sa as da,sb as En,t as Xt,ta as $,tb as or,u as Ki,ua as st,ub as ka,v as un,va as Xr,w as Re,wa as Jr,x as nt,xa as Ne,y as $e,ya as I,z as pn,za as Qr}from"./chunk-WZFYCB5A.js";var R=new k("");var Ea=null;function Ue(){return Ea}function Rn(e){Ea??=e}var nr=class{},ir=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>u(Ra),providedIn:"platform"})}return e})(),_n=new k(""),Ra=(()=>{class e extends ir{_location;_history;_doc=u(R);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ue().getBaseHref(this._doc)}onPopState(t){let r=Ue().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=Ue().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,n){this._history.pushState(t,r,n)}replaceState(t,r,n){this._history.replaceState(t,r,n)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function io(e,o){return e?o?e.endsWith("/")?o.startsWith("/")?e+o.slice(1):e+o:o.startsWith("/")?e+o:`${e}/${o}`:e:o}function Sa(e){let o=e.search(/#|\?|$/);return e[o-1]==="/"?e.slice(0,o-1)+e.slice(o):e}function we(e){return e&&e[0]!=="?"?`?${e}`:e}var De=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>u(so),providedIn:"root"})}return e})(),ao=new k(""),so=(()=>{class e extends De{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(R).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return io(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+we(this._platformLocation.search),n=this._platformLocation.hash;return n&&t?`${r}${n}`:r}pushState(t,r,n,i){let a=this.prepareExternalUrl(n+we(i));this._platformLocation.pushState(t,r,a)}replaceState(t,r,n,i){let a=this.prepareExternalUrl(n+we(i));this._platformLocation.replaceState(t,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||e)(C(ir),C(ao,8))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ke=(()=>{class e{_subject=new oe;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=$d(Sa(xa(r))),this._locationStrategy.onPopState(n=>{this._subject.next({url:this.path(!0),pop:!0,state:n.state,type:n.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+we(r))}normalize(t){return e.stripTrailingSlash(Ld(this._basePath,xa(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",n=null){this._locationStrategy.pushState(n,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+we(r)),n)}replaceState(t,r="",n=null){this._locationStrategy.replaceState(n,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+we(r)),n)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(n=>n(t,r))}subscribe(t,r,n){return this._subject.subscribe({next:t,error:r??void 0,complete:n??void 0})}static normalizeQueryParams=we;static joinWithSlash=io;static stripTrailingSlash=Sa;static \u0275fac=function(r){return new(r||e)(C(De))};static \u0275prov=m({token:e,factory:()=>Md(),providedIn:"root"})}return e})();function Md(){return new Ke(C(De))}function Ld(e,o){if(!e||!o.startsWith(e))return o;let t=o.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:o}function xa(e){return e.replace(/\/index.html$/,"")}function $d(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var Tn=(()=>{class e extends De{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,r!=null&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let r=this._platformLocation.hash??"#";return r.length>0?r.substring(1):r}prepareExternalUrl(t){let r=io(this._baseHref,t);return r.length>0?"#"+r:r}pushState(t,r,n,i){let a=this.prepareExternalUrl(n+we(i))||this._platformLocation.pathname;this._platformLocation.pushState(t,r,a)}replaceState(t,r,n,i){let a=this.prepareExternalUrl(n+we(i))||this._platformLocation.pathname;this._platformLocation.replaceState(t,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||e)(C(ir),C(ao,8))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var An=/\s+/,_a=[],In=(()=>{class e{_ngEl;_renderer;initialClasses=_a;rawClass;stateMap=new Map;constructor(t,r){this._ngEl=t,this._renderer=r}set klass(t){this.initialClasses=t!=null?t.trim().split(An):_a}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(An):t}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let r of t)this._updateState(r,!0);else if(t!=null)for(let r of Object.keys(t))this._updateState(r,!!t[r]);this._applyStateDiff()}_updateState(t,r){let n=this.stateMap.get(t);n!==void 0?(n.enabled!==r&&(n.changed=!0,n.enabled=r),n.touched=!0):this.stateMap.set(t,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let r=t[0],n=t[1];n.changed?(this._toggleClass(r,n.enabled),n.changed=!1):n.touched||(n.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),n.touched=!1}}_toggleClass(t,r){t=t.trim(),t.length>0&&t.split(An).forEach(n=>{r?this._renderer.addClass(this._ngEl.nativeElement,n):this._renderer.removeClass(this._ngEl.nativeElement,n)})}static \u0275fac=function(r){return new(r||e)(I(ve),I(Ne))};static \u0275dir=z({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var Fn=(()=>{class e{_viewContainer;_context=new co;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,r){this._viewContainer=t,this._thenTemplateRef=r}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Aa(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Aa(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,r){return!0}static \u0275fac=function(r){return new(r||e)(I(er),I(Xr))};static \u0275dir=z({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),co=class{$implicit=null;ngIf=null};function Aa(e,o){if(e&&!e.createEmbeddedView)throw new S(2020,!1)}var On=(()=>{class e{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,r,n){this._ngEl=t,this._differs=r,this._renderer=n}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,r){let[n,i]=t.split("."),a=n.indexOf("-")===-1?void 0:st.DashCase;r!=null?this._renderer.setStyle(this._ngEl.nativeElement,n,i?`${r}${i}`:r,a):this._renderer.removeStyle(this._ngEl.nativeElement,n,a)}_applyChanges(t){t.forEachRemovedItem(r=>this._setStyle(r.key,null)),t.forEachAddedItem(r=>this._setStyle(r.key,r.currentValue)),t.forEachChangedItem(r=>this._setStyle(r.key,r.currentValue))}static \u0275fac=function(r){return new(r||e)(I(ve),I(wa),I(Ne))};static \u0275dir=z({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return e})(),Bn=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let n=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,n,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,r,n)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,n):!1,get:(t,r,n)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,n)}})}static \u0275fac=function(r){return new(r||e)(I(er))};static \u0275dir=z({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[fe]})}return e})();var ze=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=J({type:e});static \u0275inj=X({})}return e})();function ar(e,o){o=encodeURIComponent(o);for(let t of e.split(";")){let r=t.indexOf("="),[n,i]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(n.trim()===o)return decodeURIComponent(i)}return null}var lo="browser",Ta="server";function sr(e){return e===lo}function Rt(e){return e===Ta}var ft=class{};var Ia=(()=>{class e{static \u0275prov=m({token:e,providedIn:"root",factory:()=>new Mn(u(R),window)})}return e})(),Mn=class{document;window;offset=()=>[0,0];constructor(o,t){this.document=o,this.window=t}setOffset(o){Array.isArray(o)?this.offset=()=>o:this.offset=o}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(o){this.window.scrollTo(o[0],o[1])}scrollToAnchor(o){let t=Ud(this.document,o);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(o){this.window.history.scrollRestoration=o}scrollToElement(o){let t=o.getBoundingClientRect(),r=t.left+this.window.pageXOffset,n=t.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(r-i[0],n-i[1])}};function Ud(e,o){let t=e.getElementById(o)||e.getElementsByName(o)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),n=r.currentNode;for(;n;){let i=n.shadowRoot;if(i){let a=i.getElementById(o)||i.querySelector(`[name="${o}"]`);if(a)return a}n=r.nextNode()}}return null}var fo=new k(""),Nn=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(n=>{n.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,r,n,i){return this._findPluginFor(r).addEventListener(t,r,n,i)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(i=>i.supports(t)),!r)throw new S(5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(C(fo),C(ie))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),cr=class{_doc;constructor(o){this._doc=o}manager},uo="ng-app-id";function Oa(e){for(let o of e)o.remove()}function Ba(e,o){let t=o.createElement("style");return t.textContent=e,t}function zd(e,o,t,r){let n=e.head?.querySelectorAll(`style[${uo}="${o}"],link[${uo}="${o}"]`);if(n)for(let i of n)i.removeAttribute(uo),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function $n(e,o){let t=o.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Un=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,r,n,i={}){this.doc=t,this.appId=r,this.nonce=n,this.isServer=Rt(i),zd(t,r,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,r){for(let n of t)this.addUsage(n,this.inline,Ba);r?.forEach(n=>this.addUsage(n,this.external,$n))}removeStyles(t,r){for(let n of t)this.removeUsage(n,this.inline);r?.forEach(n=>this.removeUsage(n,this.external))}addUsage(t,r,n){let i=r.get(t);i?i.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,n(t,this.doc)))})}removeUsage(t,r){let n=r.get(t);n&&(n.usage--,n.usage<=0&&(Oa(n.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Oa(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[r,{elements:n}]of this.inline)n.push(this.addElement(t,Ba(r,this.doc)));for(let[r,{elements:n}]of this.external)n.push(this.addElement(t,$n(r,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),this.isServer&&r.setAttribute(uo,this.appId),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(C(R),C(bn),C(vn,8),C(ee))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Ln={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},zn=/%COMP%/g;var La="%COMP%",jd=`_nghost-${La}`,Hd=`_ngcontent-${La}`,Wd=!0,Vd=new k("",{providedIn:"root",factory:()=>Wd});function Gd(e){return Hd.replace(zn,e)}function qd(e){return jd.replace(zn,e)}function $a(e,o){return o.map(t=>t.replace(zn,e))}var ur=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,r,n,i,a,s,c,l=null,d=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=n,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=s,this.ngZone=c,this.nonce=l,this.tracingService=d,this.platformIsServer=Rt(s),this.defaultRenderer=new lr(t,a,c,this.platformIsServer,this.tracingService)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Qt.ShadowDom&&(r=V(g({},r),{encapsulation:Qt.Emulated}));let n=this.getOrCreateRenderer(t,r);return n instanceof po?n.applyToHost(t):n instanceof dr&&n.applyStyles(),n}getOrCreateRenderer(t,r){let n=this.rendererByCompId,i=n.get(r.id);if(!i){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,p=this.platformIsServer,h=this.tracingService;switch(r.encapsulation){case Qt.Emulated:i=new po(c,l,r,this.appId,d,a,s,p,h);break;case Qt.ShadowDom:return new Pn(c,l,t,r,a,s,this.nonce,p,h);default:i=new dr(c,l,r,d,a,s,p,h);break}n.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||e)(C(Nn),C(Un),C(bn),C(Vd),C(R),C(ee),C(ie),C(vn),C(ca,8))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),lr=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(o,t,r,n,i){this.eventManager=o,this.doc=t,this.ngZone=r,this.platformIsServer=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(o,t){return t?this.doc.createElementNS(Ln[t]||t,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,t){(Ma(o)?o.content:o).appendChild(t)}insertBefore(o,t,r){o&&(Ma(o)?o.content:o).insertBefore(t,r)}removeChild(o,t){t.remove()}selectRootElement(o,t){let r=typeof o=="string"?this.doc.querySelector(o):o;if(!r)throw new S(-5104,!1);return t||(r.textContent=""),r}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,t,r,n){if(n){t=n+":"+t;let i=Ln[n];i?o.setAttributeNS(i,t,r):o.setAttribute(t,r)}else o.setAttribute(t,r)}removeAttribute(o,t,r){if(r){let n=Ln[r];n?o.removeAttributeNS(n,t):o.removeAttribute(`${r}:${t}`)}else o.removeAttribute(t)}addClass(o,t){o.classList.add(t)}removeClass(o,t){o.classList.remove(t)}setStyle(o,t,r,n){n&(st.DashCase|st.Important)?o.style.setProperty(t,r,n&st.Important?"important":""):o.style[t]=r}removeStyle(o,t,r){r&st.DashCase?o.style.removeProperty(t):o.style[t]=""}setProperty(o,t,r){o!=null&&(o[t]=r)}setValue(o,t){o.nodeValue=t}listen(o,t,r,n){if(typeof o=="string"&&(o=Ue().getGlobalEventTarget(this.doc,o),!o))throw new S(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(o,t,i)),this.eventManager.addEventListener(o,t,i,n)}decoratePreventDefault(o){return t=>{if(t==="__ngUnwrap__")return o;(this.platformIsServer?this.ngZone.runGuarded(()=>o(t)):o(t))===!1&&t.preventDefault()}}};function Ma(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Pn=class extends lr{sharedStylesHost;hostEl;shadowRoot;constructor(o,t,r,n,i,a,s,c,l){super(o,i,a,c,l),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=$a(n.id,d);for(let h of d){let f=document.createElement("style");s&&f.setAttribute("nonce",s),f.textContent=h,this.shadowRoot.appendChild(f)}let p=n.getExternalStyles?.();if(p)for(let h of p){let f=$n(h,i);s&&f.setAttribute("nonce",s),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,t){return super.appendChild(this.nodeOrShadowRoot(o),t)}insertBefore(o,t,r){return super.insertBefore(this.nodeOrShadowRoot(o),t,r)}removeChild(o,t){return super.removeChild(null,t)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},dr=class extends lr{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(o,t,r,n,i,a,s,c,l){super(o,i,a,s,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=n;let d=r.styles;this.styles=l?$a(l,d):d,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},po=class extends dr{contentAttr;hostAttr;constructor(o,t,r,n,i,a,s,c,l){let d=n+"-"+r.id;super(o,t,r,i,a,s,c,l,d),this.contentAttr=Gd(d),this.hostAttr=qd(d)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,t){let r=super.createElement(o,t);return super.setAttribute(r,this.contentAttr,""),r}};var jn=class extends nr{supportsDOMEvents=!0},ho=class e extends jn{static makeCurrent(){Rn(new e)}onAndCancel(o,t,r,n){return o.addEventListener(t,r,n),()=>{o.removeEventListener(t,r,n)}}dispatchEvent(o,t){o.dispatchEvent(t)}remove(o){o.remove()}createElement(o,t){return t=t||this.getDefaultDocument(),t.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,t){return t==="window"?window:t==="document"?o:t==="body"?o.body:null}getBaseHref(o){let t=Yd();return t==null?null:Kd(t)}resetBaseElement(){pr=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return ar(document.cookie,o)}},pr=null;function Yd(){return pr=pr||document.querySelector("base"),pr?pr.getAttribute("href"):null}function Kd(e){return new URL(e,document.baseURI).pathname}var Zd=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Na=(()=>{class e extends cr{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,n,i){return t.addEventListener(r,n,i),()=>this.removeEventListener(t,r,n,i)}removeEventListener(t,r,n,i){return t.removeEventListener(r,n,i)}static \u0275fac=function(r){return new(r||e)(C(R))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Pa=["alt","control","meta","shift"],Xd={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Jd={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Ua=(()=>{class e extends cr{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,n,i){let a=e.parseEventName(r),s=e.eventCallback(a.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ue().onAndCancel(t,a.domEventName,s,i))}static parseEventName(t){let r=t.toLowerCase().split("."),n=r.shift();if(r.length===0||!(n==="keydown"||n==="keyup"))return null;let i=e._normalizeKey(r.pop()),a="",s=r.indexOf("code");if(s>-1&&(r.splice(s,1),a="code."),Pa.forEach(l=>{let d=r.indexOf(l);d>-1&&(r.splice(d,1),a+=l+".")}),a+=i,r.length!=0||i.length===0)return null;let c={};return c.domEventName=n,c.fullKey=a,c}static matchEventFullKeyCode(t,r){let n=Xd[t.key]||t.key,i="";return r.indexOf("code.")>-1&&(n=t.code,i="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),Pa.forEach(a=>{if(a!==n){let s=Jd[a];s(t)&&(i+=a+".")}}),i+=n,i===r)}static eventCallback(t,r,n){return i=>{e.matchEventFullKeyCode(i,t)&&n.runGuarded(()=>r(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(C(R))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();function Hn(e,o){return Da(g({rootComponent:e},Qd(o)))}function Qd(e){return{appProviders:[...nu,...e?.providers??[]],platformProviders:ou}}function eu(){ho.makeCurrent()}function tu(){return new mn}function ru(){return ia(document),document}var ou=[{provide:ee,useValue:lo},{provide:aa,useValue:eu,multi:!0},{provide:R,useFactory:ru}];var nu=[{provide:ta,useValue:"root"},{provide:mn,useFactory:tu},{provide:fo,useClass:Na,multi:!0,deps:[R]},{provide:fo,useClass:Ua,multi:!0,deps:[R]},ur,Un,Nn,{provide:Jr,useExisting:ur},{provide:ft,useClass:Zd},[]];var At=class{},fr=class{},Ze=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(o){o?typeof o=="string"?this.lazyInit=()=>{this.headers=new Map,o.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let n=t.slice(0,r),i=t.slice(r+1).trim();this.addHeaderEntry(n,i)}})}:typeof Headers<"u"&&o instanceof Headers?(this.headers=new Map,o.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(o).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(o){return this.init(),this.headers.has(o.toLowerCase())}get(o){this.init();let t=this.headers.get(o.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(o){return this.init(),this.headers.get(o.toLowerCase())||null}append(o,t){return this.clone({name:o,value:t,op:"a"})}set(o,t){return this.clone({name:o,value:t,op:"s"})}delete(o,t){return this.clone({name:o,value:t,op:"d"})}maybeSetNormalizedName(o,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,o)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(o=>this.applyUpdate(o)),this.lazyUpdate=null))}copyFrom(o){o.init(),Array.from(o.headers.keys()).forEach(t=>{this.headers.set(t,o.headers.get(t)),this.normalizedNames.set(t,o.normalizedNames.get(t))})}clone(o){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([o]),t}applyUpdate(o){let t=o.name.toLowerCase();switch(o.op){case"a":case"s":let r=o.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(o.name,t);let n=(o.op==="a"?this.headers.get(t):void 0)||[];n.push(...r),this.headers.set(t,n);break;case"d":let i=o.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(s=>i.indexOf(s)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}addHeaderEntry(o,t){let r=o.toLowerCase();this.maybeSetNormalizedName(o,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(o,t){let r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),n=o.toLowerCase();this.headers.set(n,r),this.maybeSetNormalizedName(o,n)}forEach(o){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>o(this.normalizedNames.get(t),this.headers.get(t)))}};var mo=class{encodeKey(o){return za(o)}encodeValue(o){return za(o)}decodeKey(o){return decodeURIComponent(o)}decodeValue(o){return decodeURIComponent(o)}};function iu(e,o){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(n=>{let i=n.indexOf("="),[a,s]=i==-1?[o.decodeKey(n),""]:[o.decodeKey(n.slice(0,i)),o.decodeValue(n.slice(i+1))],c=t.get(a)||[];c.push(s),t.set(a,c)}),t}var au=/%(\d[a-f0-9])/gi,su={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function za(e){return encodeURIComponent(e).replace(au,(o,t)=>su[t]??o)}function go(e){return`${e}`}var je=class e{map;encoder;updates=null;cloneFrom=null;constructor(o={}){if(this.encoder=o.encoder||new mo,o.fromString){if(o.fromObject)throw new S(2805,!1);this.map=iu(o.fromString,this.encoder)}else o.fromObject?(this.map=new Map,Object.keys(o.fromObject).forEach(t=>{let r=o.fromObject[t],n=Array.isArray(r)?r.map(go):[go(r)];this.map.set(t,n)})):this.map=null}has(o){return this.init(),this.map.has(o)}get(o){this.init();let t=this.map.get(o);return t?t[0]:null}getAll(o){return this.init(),this.map.get(o)||null}keys(){return this.init(),Array.from(this.map.keys())}append(o,t){return this.clone({param:o,value:t,op:"a"})}appendAll(o){let t=[];return Object.keys(o).forEach(r=>{let n=o[r];Array.isArray(n)?n.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:n,op:"a"})}),this.clone(t)}set(o,t){return this.clone({param:o,value:t,op:"s"})}delete(o,t){return this.clone({param:o,value:t,op:"d"})}toString(){return this.init(),this.keys().map(o=>{let t=this.encoder.encodeKey(o);return this.map.get(o).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(o=>o!=="").join("&")}clone(o){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(o),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(o=>this.map.set(o,this.cloneFrom.map.get(o))),this.updates.forEach(o=>{switch(o.op){case"a":case"s":let t=(o.op==="a"?this.map.get(o.param):void 0)||[];t.push(go(o.value)),this.map.set(o.param,t);break;case"d":if(o.value!==void 0){let r=this.map.get(o.param)||[],n=r.indexOf(go(o.value));n!==-1&&r.splice(n,1),r.length>0?this.map.set(o.param,r):this.map.delete(o.param)}else{this.map.delete(o.param);break}}}),this.cloneFrom=this.updates=null)}};var bo=class{map=new Map;set(o,t){return this.map.set(o,t),this}get(o){return this.map.has(o)||this.map.set(o,o.defaultValue()),this.map.get(o)}delete(o){return this.map.delete(o),this}has(o){return this.map.has(o)}keys(){return this.map.keys()}};function cu(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ja(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Ha(e){return typeof Blob<"u"&&e instanceof Blob}function Wa(e){return typeof FormData<"u"&&e instanceof FormData}function lu(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Va="Content-Type",Ga="Accept",Ya="X-Request-URL",Ka="text/plain",Za="application/json",du=`${Za}, ${Ka}, */*`,_t=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(o,t,r,n){this.url=t,this.method=o.toUpperCase();let i;if(cu(this.method)||n?(this.body=r!==void 0?r:null,i=n):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new Ze,this.context??=new bo,!this.params)this.params=new je,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let s=t.indexOf("?"),c=s===-1?"?":s<t.length-1?"&":"";this.urlWithParams=t+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ja(this.body)||Ha(this.body)||Wa(this.body)||lu(this.body)?this.body:this.body instanceof je?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Wa(this.body)?null:Ha(this.body)?this.body.type||null:ja(this.body)?null:typeof this.body=="string"?Ka:this.body instanceof je?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Za:null}clone(o={}){let t=o.method||this.method,r=o.url||this.url,n=o.responseType||this.responseType,i=o.transferCache??this.transferCache,a=o.body!==void 0?o.body:this.body,s=o.withCredentials??this.withCredentials,c=o.reportProgress??this.reportProgress,l=o.headers||this.headers,d=o.params||this.params,p=o.context??this.context;return o.setHeaders!==void 0&&(l=Object.keys(o.setHeaders).reduce((h,f)=>h.set(f,o.setHeaders[f]),l)),o.setParams&&(d=Object.keys(o.setParams).reduce((h,f)=>h.set(f,o.setParams[f]),d)),new e(t,r,a,{params:d,headers:l,context:p,reportProgress:c,responseType:n,withCredentials:s,transferCache:i})}},ht=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(ht||{}),Tt=class{headers;status;statusText;url;ok;type;constructor(o,t=200,r="OK"){this.headers=o.headers||new Ze,this.status=o.status!==void 0?o.status:t,this.statusText=o.statusText||r,this.url=o.url||null,this.ok=this.status>=200&&this.status<300}},vo=class e extends Tt{constructor(o={}){super(o)}type=ht.ResponseHeader;clone(o={}){return new e({headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},hr=class e extends Tt{body;constructor(o={}){super(o),this.body=o.body!==void 0?o.body:null}type=ht.Response;clone(o={}){return new e({body:o.body!==void 0?o.body:this.body,headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},gr=class extends Tt{name="HttpErrorResponse";message;error;ok=!1;constructor(o){super(o,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${o.url||"(unknown url)"}`:this.message=`Http failure response for ${o.url||"(unknown url)"}: ${o.status} ${o.statusText}`,this.error=o.error||null}},uu=200,pu=204;function Wn(e,o){return{body:o,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Co=(()=>{class e{handler;constructor(t){this.handler=t}request(t,r,n={}){let i;if(t instanceof _t)i=t;else{let c;n.headers instanceof Ze?c=n.headers:c=new Ze(n.headers);let l;n.params&&(n.params instanceof je?l=n.params:l=new je({fromObject:n.params})),i=new _t(t,r,n.body!==void 0?n.body:null,{headers:c,context:n.context,params:l,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials,transferCache:n.transferCache})}let a=v(i).pipe($e(c=>this.handler.handle(c)));if(t instanceof _t||n.observe==="events")return a;let s=a.pipe(Re(c=>c instanceof hr));switch(n.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return s.pipe(x(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new S(2806,!1);return c.body}));case"blob":return s.pipe(x(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new S(2807,!1);return c.body}));case"text":return s.pipe(x(c=>{if(c.body!==null&&typeof c.body!="string")throw new S(2808,!1);return c.body}));case"json":default:return s.pipe(x(c=>c.body))}case"response":return s;default:throw new S(2809,!1)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new je().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,n={}){return this.request("PATCH",t,Wn(n,r))}post(t,r,n={}){return this.request("POST",t,Wn(n,r))}put(t,r,n={}){return this.request("PUT",t,Wn(n,r))}static \u0275fac=function(r){return new(r||e)(C(At))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var fu=new k("");function Xa(e,o){return o(e)}function hu(e,o){return(t,r)=>o.intercept(t,{handle:n=>e(n,r)})}function gu(e,o,t){return(r,n)=>pe(t,()=>o(r,i=>e(i,n)))}var Ja=new k(""),Gn=new k(""),Qa=new k(""),qn=new k("",{providedIn:"root",factory:()=>!0});function mu(){let e=null;return(o,t)=>{e===null&&(e=(u(Ja,{optional:!0})??[]).reduceRight(hu,Xa));let r=u(Jt);if(u(qn)){let i=r.add();return e(o,t).pipe(it(()=>r.remove(i)))}else return e(o,t)}}var yo=(()=>{class e extends At{backend;injector;chain=null;pendingTasks=u(Jt);contributeToStability=u(qn);constructor(t,r){super(),this.backend=t,this.injector=r}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Gn),...this.injector.get(Qa,[])]));this.chain=r.reduceRight((n,i)=>gu(n,i,this.injector),Xa)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(t,n=>this.backend.handle(n)).pipe(it(()=>this.pendingTasks.remove(r)))}else return this.chain(t,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(C(fr),C(qe))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var bu=/^\)\]\}',?\n/,vu=RegExp(`^${Ya}:`,"m");function yu(e){return"responseURL"in e&&e.responseURL?e.responseURL:vu.test(e.getAllResponseHeaders())?e.getResponseHeader(Ya):null}var Vn=(()=>{class e{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new S(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?G(r.\u0275loadImpl()):v(null)).pipe(ne(()=>new Gi(i=>{let a=r.build();if(a.open(t.method,t.urlWithParams),t.withCredentials&&(a.withCredentials=!0),t.headers.forEach((b,w)=>a.setRequestHeader(b,w.join(","))),t.headers.has(Ga)||a.setRequestHeader(Ga,du),!t.headers.has(Va)){let b=t.detectContentTypeHeader();b!==null&&a.setRequestHeader(Va,b)}if(t.responseType){let b=t.responseType.toLowerCase();a.responseType=b!=="json"?b:"text"}let s=t.serializeBody(),c=null,l=()=>{if(c!==null)return c;let b=a.statusText||"OK",w=new Ze(a.getAllResponseHeaders()),U=yu(a)||t.url;return c=new vo({headers:w,status:a.status,statusText:b,url:U}),c},d=()=>{let{headers:b,status:w,statusText:U,url:W}=l(),_=null;w!==pu&&(_=typeof a.response>"u"?a.responseText:a.response),w===0&&(w=_?uu:0);let Z=w>=200&&w<300;if(t.responseType==="json"&&typeof _=="string"){let kt=_;_=_.replace(bu,"");try{_=_!==""?JSON.parse(_):null}catch(St){_=kt,Z&&(Z=!1,_={error:St,text:_})}}Z?(i.next(new hr({body:_,headers:b,status:w,statusText:U,url:W||void 0})),i.complete()):i.error(new gr({error:_,headers:b,status:w,statusText:U,url:W||void 0}))},p=b=>{let{url:w}=l(),U=new gr({error:b,status:a.status||0,statusText:a.statusText||"Unknown Error",url:w||void 0});i.error(U)},h=!1,f=b=>{h||(i.next(l()),h=!0);let w={type:ht.DownloadProgress,loaded:b.loaded};b.lengthComputable&&(w.total=b.total),t.responseType==="text"&&a.responseText&&(w.partialText=a.responseText),i.next(w)},y=b=>{let w={type:ht.UploadProgress,loaded:b.loaded};b.lengthComputable&&(w.total=b.total),i.next(w)};return a.addEventListener("load",d),a.addEventListener("error",p),a.addEventListener("timeout",p),a.addEventListener("abort",p),t.reportProgress&&(a.addEventListener("progress",f),s!==null&&a.upload&&a.upload.addEventListener("progress",y)),a.send(s),i.next({type:ht.Sent}),()=>{a.removeEventListener("error",p),a.removeEventListener("abort",p),a.removeEventListener("load",d),a.removeEventListener("timeout",p),t.reportProgress&&(a.removeEventListener("progress",f),s!==null&&a.upload&&a.upload.removeEventListener("progress",y)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(r){return new(r||e)(C(ft))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),es=new k(""),Cu="XSRF-TOKEN",wu=new k("",{providedIn:"root",factory:()=>Cu}),Du="X-XSRF-TOKEN",ku=new k("",{providedIn:"root",factory:()=>Du}),mr=class{},Su=(()=>{class e{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,r,n){this.doc=t,this.platform=r,this.cookieName=n}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=ar(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(r){return new(r||e)(C(R),C(ee),C(wu))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();function xu(e,o){let t=e.url.toLowerCase();if(!u(es)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return o(e);let r=u(mr).getToken(),n=u(ku);return r!=null&&!e.headers.has(n)&&(e=e.clone({headers:e.headers.set(n,r)})),o(e)}var Yn=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Yn||{});function Eu(e,o){return{\u0275kind:e,\u0275providers:o}}function Kn(...e){let o=[Co,Vn,yo,{provide:At,useExisting:yo},{provide:fr,useFactory:()=>u(fu,{optional:!0})??u(Vn)},{provide:Gn,useValue:xu,multi:!0},{provide:es,useValue:!0},{provide:mr,useClass:Su}];for(let t of e)o.push(...t.\u0275providers);return Ge(o)}var qa=new k("");function Zn(){return Eu(Yn.LegacyInterceptors,[{provide:qa,useFactory:mu},{provide:Gn,useExisting:qa,multi:!0}])}var ts=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||e)(C(R))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var D="primary",Ar=Symbol("RouteTitle"),ti=class{params;constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t[0]:t}return null}getAll(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function bt(e){return new ti(e)}function ls(e,o,t){let r=t.path.split("/");if(r.length>e.length||t.pathMatch==="full"&&(o.hasChildren()||r.length<e.length))return null;let n={};for(let i=0;i<r.length;i++){let a=r[i],s=e[i];if(a[0]===":")n[a.substring(1)]=s;else if(a!==s.path)return null}return{consumed:e.slice(0,r.length),posParams:n}}function Au(e,o){if(e.length!==o.length)return!1;for(let t=0;t<e.length;++t)if(!Te(e[t],o[t]))return!1;return!0}function Te(e,o){let t=e?ri(e):void 0,r=o?ri(o):void 0;if(!t||!r||t.length!=r.length)return!1;let n;for(let i=0;i<t.length;i++)if(n=t[i],!ds(e[n],o[n]))return!1;return!0}function ri(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ds(e,o){if(Array.isArray(e)&&Array.isArray(o)){if(e.length!==o.length)return!1;let t=[...e].sort(),r=[...o].sort();return t.every((n,i)=>r[i]===n)}else return e===o}function us(e){return e.length>0?e[e.length-1]:null}function tt(e){return qi(e)?e:Cn(e)?G(Promise.resolve(e)):v(e)}var Tu={exact:fs,subset:hs},ps={exact:Iu,subset:Fu,ignored:()=>!0};function rs(e,o,t){return Tu[t.paths](e.root,o.root,t.matrixParams)&&ps[t.queryParams](e.queryParams,o.queryParams)&&!(t.fragment==="exact"&&e.fragment!==o.fragment)}function Iu(e,o){return Te(e,o)}function fs(e,o,t){if(!gt(e.segments,o.segments)||!ko(e.segments,o.segments,t)||e.numberOfChildren!==o.numberOfChildren)return!1;for(let r in o.children)if(!e.children[r]||!fs(e.children[r],o.children[r],t))return!1;return!0}function Fu(e,o){return Object.keys(o).length<=Object.keys(e).length&&Object.keys(o).every(t=>ds(e[t],o[t]))}function hs(e,o,t){return gs(e,o,o.segments,t)}function gs(e,o,t,r){if(e.segments.length>t.length){let n=e.segments.slice(0,t.length);return!(!gt(n,t)||o.hasChildren()||!ko(n,t,r))}else if(e.segments.length===t.length){if(!gt(e.segments,t)||!ko(e.segments,t,r))return!1;for(let n in o.children)if(!e.children[n]||!hs(e.children[n],o.children[n],r))return!1;return!0}else{let n=t.slice(0,e.segments.length),i=t.slice(e.segments.length);return!gt(e.segments,n)||!ko(e.segments,n,r)||!e.children[D]?!1:gs(e.children[D],o,i,r)}}function ko(e,o,t){return o.every((r,n)=>ps[t](e[n].parameters,r.parameters))}var Fe=class{root;queryParams;fragment;_queryParamMap;constructor(o=new E([],{}),t={},r=null){this.root=o,this.queryParams=t,this.fragment=r}get queryParamMap(){return this._queryParamMap??=bt(this.queryParams),this._queryParamMap}toString(){return Mu.serialize(this)}},E=class{segments;children;parent=null;constructor(o,t){this.segments=o,this.children=t,Object.values(t).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return So(this)}},Xe=class{path;parameters;_parameterMap;constructor(o,t){this.path=o,this.parameters=t}get parameterMap(){return this._parameterMap??=bt(this.parameters),this._parameterMap}toString(){return bs(this)}};function Ou(e,o){return gt(e,o)&&e.every((t,r)=>Te(t.parameters,o[r].parameters))}function gt(e,o){return e.length!==o.length?!1:e.every((t,r)=>t.path===o[r].path)}function Bu(e,o){let t=[];return Object.entries(e.children).forEach(([r,n])=>{r===D&&(t=t.concat(o(n,r)))}),Object.entries(e.children).forEach(([r,n])=>{r!==D&&(t=t.concat(o(n,r)))}),t}var vt=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>new Je,providedIn:"root"})}return e})(),Je=class{parse(o){let t=new ni(o);return new Fe(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(o){let t=`/${br(o.root,!0)}`,r=Pu(o.queryParams),n=typeof o.fragment=="string"?`#${Lu(o.fragment)}`:"";return`${t}${r}${n}`}},Mu=new Je;function So(e){return e.segments.map(o=>bs(o)).join("/")}function br(e,o){if(!e.hasChildren())return So(e);if(o){let t=e.children[D]?br(e.children[D],!1):"",r=[];return Object.entries(e.children).forEach(([n,i])=>{n!==D&&r.push(`${n}:${br(i,!1)}`)}),r.length>0?`${t}(${r.join("//")})`:t}else{let t=Bu(e,(r,n)=>n===D?[br(e.children[D],!1)]:[`${n}:${br(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[D]!=null?`${So(e)}/${t[0]}`:`${So(e)}/(${t.join("//")})`}}function ms(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function wo(e){return ms(e).replace(/%3B/gi,";")}function Lu(e){return encodeURI(e)}function oi(e){return ms(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function xo(e){return decodeURIComponent(e)}function os(e){return xo(e.replace(/\+/g,"%20"))}function bs(e){return`${oi(e.path)}${$u(e.parameters)}`}function $u(e){return Object.entries(e).map(([o,t])=>`;${oi(o)}=${oi(t)}`).join("")}function Pu(e){let o=Object.entries(e).map(([t,r])=>Array.isArray(r)?r.map(n=>`${wo(t)}=${wo(n)}`).join("&"):`${wo(t)}=${wo(r)}`).filter(t=>t);return o.length?`?${o.join("&")}`:""}var Nu=/^[^\/()?;#]+/;function Xn(e){let o=e.match(Nu);return o?o[0]:""}var Uu=/^[^\/()?;=#]+/;function zu(e){let o=e.match(Uu);return o?o[0]:""}var ju=/^[^=?&#]+/;function Hu(e){let o=e.match(ju);return o?o[0]:""}var Wu=/^[^&#]+/;function Vu(e){let o=e.match(Wu);return o?o[0]:""}var ni=class{url;remaining;constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new E([],{}):new E([],this.parseChildren())}parseQueryParams(){let o={};if(this.consumeOptional("?"))do this.parseQueryParam(o);while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(o.length>0||Object.keys(t).length>0)&&(r[D]=new E(o,t)),r}parseSegment(){let o=Xn(this.remaining);if(o===""&&this.peekStartsWith(";"))throw new S(4009,!1);return this.capture(o),new Xe(xo(o),this.parseMatrixParams())}parseMatrixParams(){let o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){let t=zu(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let n=Xn(this.remaining);n&&(r=n,this.capture(r))}o[xo(t)]=xo(r)}parseQueryParam(o){let t=Hu(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let a=Vu(this.remaining);a&&(r=a,this.capture(r))}let n=os(t),i=os(r);if(o.hasOwnProperty(n)){let a=o[n];Array.isArray(a)||(a=[a],o[n]=a),a.push(i)}else o[n]=i}parseParens(o){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Xn(this.remaining),n=this.remaining[r.length];if(n!=="/"&&n!==")"&&n!==";")throw new S(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):o&&(i=D);let a=this.parseChildren();t[i]=Object.keys(a).length===1?a[D]:new E([],a),this.consumeOptional("//")}return t}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return this.peekStartsWith(o)?(this.remaining=this.remaining.substring(o.length),!0):!1}capture(o){if(!this.consumeOptional(o))throw new S(4011,!1)}};function vs(e){return e.segments.length>0?new E([],{[D]:e}):e}function ys(e){let o={};for(let[r,n]of Object.entries(e.children)){let i=ys(n);if(r===D&&i.segments.length===0&&i.hasChildren())for(let[a,s]of Object.entries(i.children))o[a]=s;else(i.segments.length>0||i.hasChildren())&&(o[r]=i)}let t=new E(e.segments,o);return Gu(t)}function Gu(e){if(e.numberOfChildren===1&&e.children[D]){let o=e.children[D];return new E(e.segments.concat(o.segments),o.children)}return e}function Qe(e){return e instanceof Fe}function Cs(e,o,t=null,r=null){let n=ws(e);return Ds(n,o,t,r)}function ws(e){let o;function t(i){let a={};for(let c of i.children){let l=t(c);a[c.outlet]=l}let s=new E(i.url,a);return i===e&&(o=s),s}let r=t(e.root),n=vs(r);return o??n}function Ds(e,o,t,r){let n=e;for(;n.parent;)n=n.parent;if(o.length===0)return Jn(n,n,n,t,r);let i=qu(o);if(i.toRoot())return Jn(n,n,new E([],{}),t,r);let a=Yu(i,n,e),s=a.processChildren?yr(a.segmentGroup,a.index,i.commands):Ss(a.segmentGroup,a.index,i.commands);return Jn(n,a.segmentGroup,s,t,r)}function Ro(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function wr(e){return typeof e=="object"&&e!=null&&e.outlets}function Jn(e,o,t,r,n){let i={};r&&Object.entries(r).forEach(([c,l])=>{i[c]=Array.isArray(l)?l.map(d=>`${d}`):`${l}`});let a;e===o?a=t:a=ks(e,o,t);let s=vs(ys(a));return new Fe(s,i,n)}function ks(e,o,t){let r={};return Object.entries(e.children).forEach(([n,i])=>{i===o?r[n]=t:r[n]=ks(i,o,t)}),new E(e.segments,r)}var _o=class{isAbsolute;numberOfDoubleDots;commands;constructor(o,t,r){if(this.isAbsolute=o,this.numberOfDoubleDots=t,this.commands=r,o&&r.length>0&&Ro(r[0]))throw new S(4003,!1);let n=r.find(wr);if(n&&n!==us(r))throw new S(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function qu(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new _o(!0,0,e);let o=0,t=!1,r=e.reduce((n,i,a)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let s={};return Object.entries(i.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...n,{outlets:s}]}if(i.segmentPath)return[...n,i.segmentPath]}return typeof i!="string"?[...n,i]:a===0?(i.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?t=!0:s===".."?o++:s!=""&&n.push(s))}),n):[...n,i]},[]);return new _o(t,o,r)}var Ot=class{segmentGroup;processChildren;index;constructor(o,t,r){this.segmentGroup=o,this.processChildren=t,this.index=r}};function Yu(e,o,t){if(e.isAbsolute)return new Ot(o,!0,0);if(!t)return new Ot(o,!1,NaN);if(t.parent===null)return new Ot(t,!0,0);let r=Ro(e.commands[0])?0:1,n=t.segments.length-1+r;return Ku(t,n,e.numberOfDoubleDots)}function Ku(e,o,t){let r=e,n=o,i=t;for(;i>n;){if(i-=n,r=r.parent,!r)throw new S(4005,!1);n=r.segments.length}return new Ot(r,!1,n-i)}function Zu(e){return wr(e[0])?e[0].outlets:{[D]:e}}function Ss(e,o,t){if(e??=new E([],{}),e.segments.length===0&&e.hasChildren())return yr(e,o,t);let r=Xu(e,o,t),n=t.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new E(e.segments.slice(0,r.pathIndex),{});return i.children[D]=new E(e.segments.slice(r.pathIndex),e.children),yr(i,0,n)}else return r.match&&n.length===0?new E(e.segments,{}):r.match&&!e.hasChildren()?ii(e,o,t):r.match?yr(e,0,n):ii(e,o,t)}function yr(e,o,t){if(t.length===0)return new E(e.segments,{});{let r=Zu(t),n={};if(Object.keys(r).some(i=>i!==D)&&e.children[D]&&e.numberOfChildren===1&&e.children[D].segments.length===0){let i=yr(e.children[D],o,t);return new E(e.segments,i.children)}return Object.entries(r).forEach(([i,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(n[i]=Ss(e.children[i],o,a))}),Object.entries(e.children).forEach(([i,a])=>{r[i]===void 0&&(n[i]=a)}),new E(e.segments,n)}}function Xu(e,o,t){let r=0,n=o,i={match:!1,pathIndex:0,commandIndex:0};for(;n<e.segments.length;){if(r>=t.length)return i;let a=e.segments[n],s=t[r];if(wr(s))break;let c=`${s}`,l=r<t.length-1?t[r+1]:null;if(n>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!is(c,l,a))return i;r+=2}else{if(!is(c,{},a))return i;r++}n++}return{match:!0,pathIndex:n,commandIndex:r}}function ii(e,o,t){let r=e.segments.slice(0,o),n=0;for(;n<t.length;){let i=t[n];if(wr(i)){let c=Ju(i.outlets);return new E(r,c)}if(n===0&&Ro(t[0])){let c=e.segments[o];r.push(new Xe(c.path,ns(t[0]))),n++;continue}let a=wr(i)?i.outlets[D]:`${i}`,s=n<t.length-1?t[n+1]:null;a&&s&&Ro(s)?(r.push(new Xe(a,ns(s))),n+=2):(r.push(new Xe(a,{})),n++)}return new E(r,{})}function Ju(e){let o={};return Object.entries(e).forEach(([t,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(o[t]=ii(new E([],{}),0,r))}),o}function ns(e){let o={};return Object.entries(e).forEach(([t,r])=>o[t]=`${r}`),o}function is(e,o,t){return e==t.path&&Te(o,t.parameters)}var Eo="imperative",H=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(H||{}),se=class{id;url;constructor(o,t){this.id=o,this.url=t}},et=class extends se{type=H.NavigationStart;navigationTrigger;restoredState;constructor(o,t,r="imperative",n=null){super(o,t),this.navigationTrigger=r,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ce=class extends se{urlAfterRedirects;type=H.NavigationEnd;constructor(o,t,r){super(o,t),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},te=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(te||{}),Mt=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(Mt||{}),Ie=class extends se{reason;code;type=H.NavigationCancel;constructor(o,t,r,n){super(o,t),this.reason=r,this.code=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Oe=class extends se{reason;code;type=H.NavigationSkipped;constructor(o,t,r,n){super(o,t),this.reason=r,this.code=n}},Lt=class extends se{error;target;type=H.NavigationError;constructor(o,t,r,n){super(o,t),this.error=r,this.target=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Dr=class extends se{urlAfterRedirects;state;type=H.RoutesRecognized;constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ao=class extends se{urlAfterRedirects;state;type=H.GuardsCheckStart;constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},To=class extends se{urlAfterRedirects;state;shouldActivate;type=H.GuardsCheckEnd;constructor(o,t,r,n,i){super(o,t),this.urlAfterRedirects=r,this.state=n,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Io=class extends se{urlAfterRedirects;state;type=H.ResolveStart;constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fo=class extends se{urlAfterRedirects;state;type=H.ResolveEnd;constructor(o,t,r,n){super(o,t),this.urlAfterRedirects=r,this.state=n}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Oo=class{route;type=H.RouteConfigLoadStart;constructor(o){this.route=o}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Bo=class{route;type=H.RouteConfigLoadEnd;constructor(o){this.route=o}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Mo=class{snapshot;type=H.ChildActivationStart;constructor(o){this.snapshot=o}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Lo=class{snapshot;type=H.ChildActivationEnd;constructor(o){this.snapshot=o}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$o=class{snapshot;type=H.ActivationStart;constructor(o){this.snapshot=o}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Po=class{snapshot;type=H.ActivationEnd;constructor(o){this.snapshot=o}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$t=class{routerEvent;position;anchor;type=H.Scroll;constructor(o,t,r){this.routerEvent=o,this.position=t,this.anchor=r}toString(){let o=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${o}')`}},kr=class{},Pt=class{url;navigationBehaviorOptions;constructor(o,t){this.url=o,this.navigationBehaviorOptions=t}};function Qu(e,o){return e.providers&&!e._injector&&(e._injector=eo(e.providers,o,`Route: ${e.path}`)),e._injector??o}function ke(e){return e.outlet||D}function ep(e,o){let t=e.filter(r=>ke(r)===o);return t.push(...e.filter(r=>ke(r)!==o)),t}function Tr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let o=e.parent;o;o=o.parent){let t=o.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var No=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Tr(this.route?.snapshot)??this.rootInjector}constructor(o){this.rootInjector=o,this.children=new yt(this.rootInjector)}},yt=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,r){let n=this.getOrCreateContext(t);n.outlet=r,this.contexts.set(t,n)}onChildOutletDestroyed(t){let r=this.getContext(t);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let r=this.getContext(t);return r||(r=new No(this.rootInjector),this.contexts.set(t,r)),r}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(r){return new(r||e)(C(qe))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Uo=class{_root;constructor(o){this._root=o}get root(){return this._root.value}parent(o){let t=this.pathFromRoot(o);return t.length>1?t[t.length-2]:null}children(o){let t=ai(o,this._root);return t?t.children.map(r=>r.value):[]}firstChild(o){let t=ai(o,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(o){let t=si(o,this._root);return t.length<2?[]:t[t.length-2].children.map(n=>n.value).filter(n=>n!==o)}pathFromRoot(o){return si(o,this._root).map(t=>t.value)}};function ai(e,o){if(e===o.value)return o;for(let t of o.children){let r=ai(e,t);if(r)return r}return null}function si(e,o){if(e===o.value)return[o];for(let t of o.children){let r=si(e,t);if(r.length)return r.unshift(o),r}return[]}var ae=class{value;children;constructor(o,t){this.value=o,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ft(e){let o={};return e&&e.children.forEach(t=>o[t.value.outlet]=t),o}var Sr=class extends Uo{snapshot;constructor(o,t){super(o),this.snapshot=t,gi(this,o)}toString(){return this.snapshot.toString()}};function xs(e){let o=tp(e),t=new ue([new Xe("",{})]),r=new ue({}),n=new ue({}),i=new ue({}),a=new ue(""),s=new Be(t,r,i,a,n,D,e,o.root);return s.snapshot=o.root,new Sr(new ae(s,[]),o)}function tp(e){let o={},t={},r={},n="",i=new mt([],o,r,n,t,D,e,null,{});return new xr("",new ae(i,[]))}var Be=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(o,t,r,n,i,a,s,c){this.urlSubject=o,this.paramsSubject=t,this.queryParamsSubject=r,this.fragmentSubject=n,this.dataSubject=i,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(x(l=>l[Ar]))??v(void 0),this.url=o,this.params=t,this.queryParams=r,this.fragment=n,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(x(o=>bt(o))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(x(o=>bt(o))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function zo(e,o,t="emptyOnly"){let r,{routeConfig:n}=e;return o!==null&&(t==="always"||n?.path===""||!o.component&&!o.routeConfig?.loadComponent)?r={params:g(g({},o.params),e.params),data:g(g({},o.data),e.data),resolve:g(g(g(g({},e.data),o.data),n?.data),e._resolvedData)}:r={params:g({},e.params),data:g({},e.data),resolve:g(g({},e.data),e._resolvedData??{})},n&&Rs(n)&&(r.resolve[Ar]=n.title),r}var mt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Ar]}constructor(o,t,r,n,i,a,s,c,l){this.url=o,this.params=t,this.queryParams=r,this.fragment=n,this.data=i,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=bt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=bt(this.queryParams),this._queryParamMap}toString(){let o=this.url.map(r=>r.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${o}', path:'${t}')`}},xr=class extends Uo{url;constructor(o,t){super(t),this.url=o,gi(this,t)}toString(){return Es(this._root)}};function gi(e,o){o.value._routerState=e,o.children.forEach(t=>gi(e,t))}function Es(e){let o=e.children.length>0?` { ${e.children.map(Es).join(", ")} } `:"";return`${e.value}${o}`}function Qn(e){if(e.snapshot){let o=e.snapshot,t=e._futureSnapshot;e.snapshot=t,Te(o.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),o.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),Te(o.params,t.params)||e.paramsSubject.next(t.params),Au(o.url,t.url)||e.urlSubject.next(t.url),Te(o.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function ci(e,o){let t=Te(e.params,o.params)&&Ou(e.url,o.url),r=!e.parent!=!o.parent;return t&&!r&&(!e.parent||ci(e.parent,o.parent))}function Rs(e){return typeof e.title=="string"||e.title===null}var _s=new k(""),Ir=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=D;activateEvents=new be;deactivateEvents=new be;attachEvents=new be;detachEvents=new be;routerOutletData=_e(void 0);parentContexts=u(yt);location=u(er);changeDetector=u(Ye);inputBinder=u(Fr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:r,previousValue:n}=t.name;if(r)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new S(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new S(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new S(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,r){this.activated=t,this._activatedRoute=r,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,r){if(this.isActivated)throw new S(4013,!1);this._activatedRoute=t;let n=this.location,a=t.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new li(t,s,n.injector,this.routerOutletData);this.activated=n.createComponent(a,{index:n.length,injector:c,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=z({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[fe]})}return e})(),li=class{route;childContexts;parent;outletData;constructor(o,t,r,n){this.route=o,this.childContexts=t,this.parent=r,this.outletData=n}get(o,t){return o===Be?this.route:o===yt?this.childContexts:o===_s?this.outletData:this.parent.get(o,t)}},Fr=new k(""),mi=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:r}=t,n=Zr([r.queryParams,r.params,r.data]).pipe(ne(([i,a,s],c)=>(s=g(g(g({},i),a),s),c===0?v(s):Promise.resolve(s)))).subscribe(i=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(t);return}let a=ka(r.component);if(!a){this.unsubscribeFromRouteData(t);return}for(let{templateName:s}of a.inputs)t.activatedComponentRef.setInput(s,i[s])});this.outletDataSubscriptions.set(t,n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();function rp(e,o,t){let r=Er(e,o._root,t?t._root:void 0);return new Sr(r,o)}function Er(e,o,t){if(t&&e.shouldReuseRoute(o.value,t.value.snapshot)){let r=t.value;r._futureSnapshot=o.value;let n=op(e,o,t);return new ae(r,n)}else{if(e.shouldAttach(o.value)){let i=e.retrieve(o.value);if(i!==null){let a=i.route;return a.value._futureSnapshot=o.value,a.children=o.children.map(s=>Er(e,s)),a}}let r=np(o.value),n=o.children.map(i=>Er(e,i));return new ae(r,n)}}function op(e,o,t){return o.children.map(r=>{for(let n of t.children)if(e.shouldReuseRoute(r.value,n.value.snapshot))return Er(e,r,n);return Er(e,r)})}function np(e){return new Be(new ue(e.url),new ue(e.params),new ue(e.queryParams),new ue(e.fragment),new ue(e.data),e.outlet,e.component,e)}var Nt=class{redirectTo;navigationBehaviorOptions;constructor(o,t){this.redirectTo=o,this.navigationBehaviorOptions=t}},As="ngNavigationCancelingError";function jo(e,o){let{redirectTo:t,navigationBehaviorOptions:r}=Qe(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,n=Ts(!1,te.Redirect);return n.url=t,n.navigationBehaviorOptions=r,n}function Ts(e,o){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[As]=!0,t.cancellationCode=o,t}function ip(e){return Is(e)&&Qe(e.url)}function Is(e){return!!e&&e[As]}var ap=(e,o,t,r)=>x(n=>(new di(o,n.targetRouterState,n.currentRouterState,t,r).activate(e),n)),di=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(o,t,r,n,i){this.routeReuseStrategy=o,this.futureState=t,this.currState=r,this.forwardEvent=n,this.inputBindingEnabled=i}activate(o){let t=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,r,o),Qn(this.futureState.root),this.activateChildRoutes(t,r,o)}deactivateChildRoutes(o,t,r){let n=Ft(t);o.children.forEach(i=>{let a=i.value.outlet;this.deactivateRoutes(i,n[a],r),delete n[a]}),Object.values(n).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(o,t,r){let n=o.value,i=t?t.value:null;if(n===i)if(n.component){let a=r.getContext(n.outlet);a&&this.deactivateChildRoutes(o,t,a.children)}else this.deactivateChildRoutes(o,t,r);else i&&this.deactivateRouteAndItsChildren(t,r)}deactivateRouteAndItsChildren(o,t){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,t):this.deactivateRouteAndOutlet(o,t)}detachAndStoreRouteSubtree(o,t){let r=t.getContext(o.value.outlet),n=r&&o.value.component?r.children:t,i=Ft(o);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,n);if(r&&r.outlet){let a=r.outlet.detach(),s=r.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:a,route:o,contexts:s})}}deactivateRouteAndOutlet(o,t){let r=t.getContext(o.value.outlet),n=r&&o.value.component?r.children:t,i=Ft(o);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,n);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(o,t,r){let n=Ft(t);o.children.forEach(i=>{this.activateRoutes(i,n[i.value.outlet],r),this.forwardEvent(new Po(i.value.snapshot))}),o.children.length&&this.forwardEvent(new Lo(o.value.snapshot))}activateRoutes(o,t,r){let n=o.value,i=t?t.value:null;if(Qn(n),n===i)if(n.component){let a=r.getOrCreateContext(n.outlet);this.activateChildRoutes(o,t,a.children)}else this.activateChildRoutes(o,t,r);else if(n.component){let a=r.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let s=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Qn(s.route.value),this.activateChildRoutes(o,null,a.children)}else a.attachRef=null,a.route=n,a.outlet&&a.outlet.activateWith(n,a.injector),this.activateChildRoutes(o,null,a.children)}else this.activateChildRoutes(o,null,r)}},Ho=class{path;route;constructor(o){this.path=o,this.route=this.path[this.path.length-1]}},Bt=class{component;route;constructor(o,t){this.component=o,this.route=t}};function sp(e,o,t){let r=e._root,n=o?o._root:null;return vr(r,n,t,[r.value])}function cp(e){let o=e.routeConfig?e.routeConfig.canActivateChild:null;return!o||o.length===0?null:{node:e,guards:o}}function zt(e,o){let t=Symbol(),r=o.get(e,t);return r===t?typeof e=="function"&&!ea(e)?e:o.get(e):r}function vr(e,o,t,r,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=Ft(o);return e.children.forEach(a=>{lp(a,i[a.value.outlet],t,r.concat([a.value]),n),delete i[a.value.outlet]}),Object.entries(i).forEach(([a,s])=>Cr(s,t.getContext(a),n)),n}function lp(e,o,t,r,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,a=o?o.value:null,s=t?t.getContext(e.value.outlet):null;if(a&&i.routeConfig===a.routeConfig){let c=dp(a,i,i.routeConfig.runGuardsAndResolvers);c?n.canActivateChecks.push(new Ho(r)):(i.data=a.data,i._resolvedData=a._resolvedData),i.component?vr(e,o,s?s.children:null,r,n):vr(e,o,t,r,n),c&&s&&s.outlet&&s.outlet.isActivated&&n.canDeactivateChecks.push(new Bt(s.outlet.component,a))}else a&&Cr(o,s,n),n.canActivateChecks.push(new Ho(r)),i.component?vr(e,null,s?s.children:null,r,n):vr(e,null,t,r,n);return n}function dp(e,o,t){if(typeof t=="function")return t(e,o);switch(t){case"pathParamsChange":return!gt(e.url,o.url);case"pathParamsOrQueryParamsChange":return!gt(e.url,o.url)||!Te(e.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ci(e,o)||!Te(e.queryParams,o.queryParams);case"paramsChange":default:return!ci(e,o)}}function Cr(e,o,t){let r=Ft(e),n=e.value;Object.entries(r).forEach(([i,a])=>{n.component?o?Cr(a,o.children.getContext(i),t):Cr(a,null,t):Cr(a,o,t)}),n.component?o&&o.outlet&&o.outlet.isActivated?t.canDeactivateChecks.push(new Bt(o.outlet.component,n)):t.canDeactivateChecks.push(new Bt(null,n)):t.canDeactivateChecks.push(new Bt(null,n))}function Or(e){return typeof e=="function"}function up(e){return typeof e=="boolean"}function pp(e){return e&&Or(e.canLoad)}function fp(e){return e&&Or(e.canActivate)}function hp(e){return e&&Or(e.canActivateChild)}function gp(e){return e&&Or(e.canDeactivate)}function mp(e){return e&&Or(e.canMatch)}function Fs(e){return e instanceof Yi||e?.name==="EmptyError"}var Do=Symbol("INITIAL_VALUE");function Ut(){return ne(e=>Zr(e.map(o=>o.pipe(xt(1),Ji(Do)))).pipe(x(o=>{for(let t of o)if(t!==!0){if(t===Do)return Do;if(t===!1||bp(t))return t}return!0}),Re(o=>o!==Do),xt(1)))}function bp(e){return Qe(e)||e instanceof Nt}function vp(e,o){return Q(t=>{let{targetSnapshot:r,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:a}}=t;return a.length===0&&i.length===0?v(V(g({},t),{guardsResult:!0})):yp(a,r,n,e).pipe(Q(s=>s&&up(s)?Cp(r,i,e,o):v(s)),x(s=>V(g({},t),{guardsResult:s})))})}function yp(e,o,t,r){return G(e).pipe(Q(n=>xp(n.component,n.route,t,o,r)),Ve(n=>n!==!0,!0))}function Cp(e,o,t,r){return G(o).pipe($e(n=>Ki(Dp(n.route.parent,r),wp(n.route,r),Sp(e,n.path,t),kp(e,n.route,t))),Ve(n=>n!==!0,!0))}function wp(e,o){return e!==null&&o&&o(new $o(e)),v(!0)}function Dp(e,o){return e!==null&&o&&o(new Mo(e)),v(!0)}function kp(e,o,t){let r=o.routeConfig?o.routeConfig.canActivate:null;if(!r||r.length===0)return v(!0);let n=r.map(i=>un(()=>{let a=Tr(o)??t,s=zt(i,a),c=fp(s)?s.canActivate(o,e):pe(a,()=>s(o,e));return tt(c).pipe(Ve())}));return v(n).pipe(Ut())}function Sp(e,o,t){let r=o[o.length-1],i=o.slice(0,o.length-1).reverse().map(a=>cp(a)).filter(a=>a!==null).map(a=>un(()=>{let s=a.guards.map(c=>{let l=Tr(a.node)??t,d=zt(c,l),p=hp(d)?d.canActivateChild(r,e):pe(l,()=>d(r,e));return tt(p).pipe(Ve())});return v(s).pipe(Ut())}));return v(i).pipe(Ut())}function xp(e,o,t,r,n){let i=o&&o.routeConfig?o.routeConfig.canDeactivate:null;if(!i||i.length===0)return v(!0);let a=i.map(s=>{let c=Tr(o)??n,l=zt(s,c),d=gp(l)?l.canDeactivate(e,o,t,r):pe(c,()=>l(e,o,t,r));return tt(d).pipe(Ve())});return v(a).pipe(Ut())}function Ep(e,o,t,r){let n=o.canLoad;if(n===void 0||n.length===0)return v(!0);let i=n.map(a=>{let s=zt(a,e),c=pp(s)?s.canLoad(o,t):pe(e,()=>s(o,t));return tt(c)});return v(i).pipe(Ut(),Os(r))}function Os(e){return Vi(K(o=>{if(typeof o!="boolean")throw jo(e,o)}),x(o=>o===!0))}function Rp(e,o,t,r){let n=o.canMatch;if(!n||n.length===0)return v(!0);let i=n.map(a=>{let s=zt(a,e),c=mp(s)?s.canMatch(o,t):pe(e,()=>s(o,t));return tt(c)});return v(i).pipe(Ut(),Os(r))}var Rr=class{segmentGroup;constructor(o){this.segmentGroup=o||null}},_r=class extends Error{urlTree;constructor(o){super(),this.urlTree=o}};function It(e){return Zt(new Rr(e))}function _p(e){return Zt(new S(4e3,!1))}function Ap(e){return Zt(Ts(!1,te.GuardRejected))}var ui=class{urlSerializer;urlTree;constructor(o,t){this.urlSerializer=o,this.urlTree=t}lineralizeSegments(o,t){let r=[],n=t.root;for(;;){if(r=r.concat(n.segments),n.numberOfChildren===0)return v(r);if(n.numberOfChildren>1||!n.children[D])return _p(`${o.redirectTo}`);n=n.children[D]}}applyRedirectCommands(o,t,r,n,i){if(typeof t!="string"){let s=t,{queryParams:c,fragment:l,routeConfig:d,url:p,outlet:h,params:f,data:y,title:b}=n,w=pe(i,()=>s({params:f,data:y,queryParams:c,fragment:l,routeConfig:d,url:p,outlet:h,title:b}));if(w instanceof Fe)throw new _r(w);t=w}let a=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),o,r);if(t[0]==="/")throw new _r(a);return a}applyRedirectCreateUrlTree(o,t,r,n){let i=this.createSegmentGroup(o,t.root,r,n);return new Fe(i,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(o,t){let r={};return Object.entries(o).forEach(([n,i])=>{if(typeof i=="string"&&i[0]===":"){let s=i.substring(1);r[n]=t[s]}else r[n]=i}),r}createSegmentGroup(o,t,r,n){let i=this.createSegments(o,t.segments,r,n),a={};return Object.entries(t.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(o,c,r,n)}),new E(i,a)}createSegments(o,t,r,n){return t.map(i=>i.path[0]===":"?this.findPosParam(o,i,n):this.findOrReturn(i,r))}findPosParam(o,t,r){let n=r[t.path.substring(1)];if(!n)throw new S(4001,!1);return n}findOrReturn(o,t){let r=0;for(let n of t){if(n.path===o.path)return t.splice(r),n;r++}return o}},pi={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Tp(e,o,t,r,n){let i=Bs(e,o,t);return i.matched?(r=Qu(o,r),Rp(r,o,t,n).pipe(x(a=>a===!0?i:g({},pi)))):v(i)}function Bs(e,o,t){if(o.path==="**")return Ip(t);if(o.path==="")return o.pathMatch==="full"&&(e.hasChildren()||t.length>0)?g({},pi):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let n=(o.matcher||ls)(t,e,o);if(!n)return g({},pi);let i={};Object.entries(n.posParams??{}).forEach(([s,c])=>{i[s]=c.path});let a=n.consumed.length>0?g(g({},i),n.consumed[n.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:n.consumed,remainingSegments:t.slice(n.consumed.length),parameters:a,positionalParamSegments:n.posParams??{}}}function Ip(e){return{matched:!0,parameters:e.length>0?us(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function as(e,o,t,r){return t.length>0&&Bp(e,t,r)?{segmentGroup:new E(o,Op(r,new E(t,e.children))),slicedSegments:[]}:t.length===0&&Mp(e,t,r)?{segmentGroup:new E(e.segments,Fp(e,t,r,e.children)),slicedSegments:t}:{segmentGroup:new E(e.segments,e.children),slicedSegments:t}}function Fp(e,o,t,r){let n={};for(let i of t)if(Vo(e,o,i)&&!r[ke(i)]){let a=new E([],{});n[ke(i)]=a}return g(g({},r),n)}function Op(e,o){let t={};t[D]=o;for(let r of e)if(r.path===""&&ke(r)!==D){let n=new E([],{});t[ke(r)]=n}return t}function Bp(e,o,t){return t.some(r=>Vo(e,o,r)&&ke(r)!==D)}function Mp(e,o,t){return t.some(r=>Vo(e,o,r))}function Vo(e,o,t){return(e.hasChildren()||o.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Lp(e,o,t){return o.length===0&&!e.children[t]}var fi=class{};function $p(e,o,t,r,n,i,a="emptyOnly"){return new hi(e,o,t,r,n,a,i).recognize()}var Pp=31,hi=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(o,t,r,n,i,a,s){this.injector=o,this.configLoader=t,this.rootComponentType=r,this.config=n,this.urlTree=i,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.applyRedirects=new ui(this.urlSerializer,this.urlTree)}noMatchError(o){return new S(4002,`'${o.segmentGroup}'`)}recognize(){let o=as(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(o).pipe(x(({children:t,rootSnapshot:r})=>{let n=new ae(r,t),i=new xr("",n),a=Cs(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(a),{state:i,tree:a}}))}match(o){let t=new mt([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),D,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,o,D,t).pipe(x(r=>({children:r,rootSnapshot:t})),nt(r=>{if(r instanceof _r)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Rr?this.noMatchError(r):r}))}processSegmentGroup(o,t,r,n,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(o,t,r,i):this.processSegment(o,t,r,r.segments,n,!0,i).pipe(x(a=>a instanceof ae?[a]:[]))}processChildren(o,t,r,n){let i=[];for(let a of Object.keys(r.children))a==="primary"?i.unshift(a):i.push(a);return G(i).pipe($e(a=>{let s=r.children[a],c=ep(t,a);return this.processSegmentGroup(o,c,s,a,n)}),Xi((a,s)=>(a.push(...s),a)),pn(null),Zi(),Q(a=>{if(a===null)return It(r);let s=Ms(a);return Np(s),v(s)}))}processSegment(o,t,r,n,i,a,s){return G(t).pipe($e(c=>this.processSegmentAgainstRoute(c._injector??o,t,c,r,n,i,a,s).pipe(nt(l=>{if(l instanceof Rr)return v(null);throw l}))),Ve(c=>!!c),nt(c=>{if(Fs(c))return Lp(r,n,i)?v(new fi):It(r);throw c}))}processSegmentAgainstRoute(o,t,r,n,i,a,s,c){return ke(r)!==a&&(a===D||!Vo(n,i,r))?It(n):r.redirectTo===void 0?this.matchSegmentAgainstRoute(o,n,r,i,a,c):this.allowRedirects&&s?this.expandSegmentAgainstRouteUsingRedirect(o,n,t,r,i,a,c):It(n)}expandSegmentAgainstRouteUsingRedirect(o,t,r,n,i,a,s){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:p,remainingSegments:h}=Bs(t,n,i);if(!c)return It(t);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Pp&&(this.allowRedirects=!1));let f=new mt(i,l,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,ss(n),ke(n),n.component??n._loadedComponent??null,n,cs(n)),y=zo(f,s,this.paramsInheritanceStrategy);f.params=Object.freeze(y.params),f.data=Object.freeze(y.data);let b=this.applyRedirects.applyRedirectCommands(d,n.redirectTo,p,f,o);return this.applyRedirects.lineralizeSegments(n,b).pipe(Q(w=>this.processSegment(o,r,t,w.concat(h),a,!1,s)))}matchSegmentAgainstRoute(o,t,r,n,i,a){let s=Tp(t,r,n,o,this.urlSerializer);return r.path==="**"&&(t.children={}),s.pipe(ne(c=>c.matched?(o=r._injector??o,this.getChildConfig(o,r,n).pipe(ne(({routes:l})=>{let d=r._loadedInjector??o,{parameters:p,consumedSegments:h,remainingSegments:f}=c,y=new mt(h,p,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,ss(r),ke(r),r.component??r._loadedComponent??null,r,cs(r)),b=zo(y,a,this.paramsInheritanceStrategy);y.params=Object.freeze(b.params),y.data=Object.freeze(b.data);let{segmentGroup:w,slicedSegments:U}=as(t,h,f,l);if(U.length===0&&w.hasChildren())return this.processChildren(d,l,w,y).pipe(x(_=>new ae(y,_)));if(l.length===0&&U.length===0)return v(new ae(y,[]));let W=ke(r)===i;return this.processSegment(d,l,w,U,W?D:i,!0,y).pipe(x(_=>new ae(y,_ instanceof ae?[_]:[])))}))):It(t)))}getChildConfig(o,t,r){return t.children?v({routes:t.children,injector:o}):t.loadChildren?t._loadedRoutes!==void 0?v({routes:t._loadedRoutes,injector:t._loadedInjector}):Ep(o,t,r,this.urlSerializer).pipe(Q(n=>n?this.configLoader.loadChildren(o,t).pipe(K(i=>{t._loadedRoutes=i.routes,t._loadedInjector=i.injector})):Ap(t))):v({routes:[],injector:o})}};function Np(e){e.sort((o,t)=>o.value.outlet===D?-1:t.value.outlet===D?1:o.value.outlet.localeCompare(t.value.outlet))}function Up(e){let o=e.value.routeConfig;return o&&o.path===""}function Ms(e){let o=[],t=new Set;for(let r of e){if(!Up(r)){o.push(r);continue}let n=o.find(i=>r.value.routeConfig===i.value.routeConfig);n!==void 0?(n.children.push(...r.children),t.add(n)):o.push(r)}for(let r of t){let n=Ms(r.children);o.push(new ae(r.value,n))}return o.filter(r=>!t.has(r))}function ss(e){return e.data||{}}function cs(e){return e.resolve||{}}function zp(e,o,t,r,n,i){return Q(a=>$p(e,o,t,r,a.extractedUrl,n,i).pipe(x(({state:s,tree:c})=>V(g({},a),{targetSnapshot:s,urlAfterRedirects:c}))))}function jp(e,o){return Q(t=>{let{targetSnapshot:r,guards:{canActivateChecks:n}}=t;if(!n.length)return v(t);let i=new Set(n.map(c=>c.route)),a=new Set;for(let c of i)if(!a.has(c))for(let l of Ls(c))a.add(l);let s=0;return G(a).pipe($e(c=>i.has(c)?Hp(c,r,e,o):(c.data=zo(c,c.parent,e).resolve,v(void 0))),K(()=>s++),fn(1),Q(c=>s===a.size?v(t):Le))})}function Ls(e){let o=e.children.map(t=>Ls(t)).flat();return[e,...o]}function Hp(e,o,t,r){let n=e.routeConfig,i=e._resolve;return n?.title!==void 0&&!Rs(n)&&(i[Ar]=n.title),Wp(i,e,o,r).pipe(x(a=>(e._resolvedData=a,e.data=zo(e,e.parent,t).resolve,null)))}function Wp(e,o,t,r){let n=ri(e);if(n.length===0)return v({});let i={};return G(n).pipe(Q(a=>Vp(e[a],o,t,r).pipe(Ve(),K(s=>{if(s instanceof Nt)throw jo(new Je,s);i[a]=s}))),fn(1),x(()=>i),nt(a=>Fs(a)?Le:Zt(a)))}function Vp(e,o,t,r){let n=Tr(o)??r,i=zt(e,n),a=i.resolve?i.resolve(o,t):pe(n,()=>i(o,t));return tt(a)}function ei(e){return ne(o=>{let t=e(o);return t?G(t).pipe(x(()=>o)):v(o)})}var bi=(()=>{class e{buildTitle(t){let r,n=t.root;for(;n!==void 0;)r=this.getResolvedTitleForRoute(n)??r,n=n.children.find(i=>i.outlet===D);return r}getResolvedTitleForRoute(t){return t.data[Ar]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>u($s),providedIn:"root"})}return e})(),$s=(()=>{class e extends bi{title;constructor(t){super(),this.title=t}updateTitle(t){let r=this.buildTitle(t);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||e)(C(ts))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ct=new k("",{providedIn:"root",factory:()=>({})}),vi=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=j({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,n){r&1&&q(0,"router-outlet")},dependencies:[Ir],encapsulation:2})}return e})();function yi(e){let o=e.children&&e.children.map(yi),t=o?V(g({},e),{children:o}):g({},e);return!t.component&&!t.loadComponent&&(o||t.loadChildren)&&t.outlet&&t.outlet!==D&&(t.component=vi),t}var wt=new k(""),Go=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(no);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return v(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=tt(t.loadComponent()).pipe(x(Ns),K(i=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=i}),it(()=>{this.componentLoaders.delete(t)})),n=new dn(r,()=>new oe).pipe(ln());return this.componentLoaders.set(t,n),n}loadChildren(t,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return v({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=Ps(r,this.compiler,t,this.onLoadEndListener).pipe(it(()=>{this.childrenLoaders.delete(r)})),a=new dn(i,()=>new oe).pipe(ln());return this.childrenLoaders.set(r,a),a}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ps(e,o,t,r){return tt(e.loadChildren()).pipe(x(Ns),Q(n=>n instanceof ua||Array.isArray(n)?v(n):G(o.compileModuleAsync(n))),x(n=>{r&&r(e);let i,a,s=!1;return Array.isArray(n)?(a=n,s=!0):(i=n.create(t).injector,a=i.get(wt,[],{optional:!0,self:!0}).flat()),{routes:a.map(yi),injector:i}}))}function Gp(e){return e&&typeof e=="object"&&"default"in e}function Ns(e){return Gp(e)?e.default:e}var qo=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>u(qp),providedIn:"root"})}return e})(),qp=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,r){return t}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ci=new k(""),wi=new k("");function Us(e,o,t){let r=e.get(wi),n=e.get(R);return e.get(ie).runOutsideAngular(()=>{if(!n.startViewTransition||r.skipNextTransition)return r.skipNextTransition=!1,new Promise(l=>setTimeout(l));let i,a=new Promise(l=>{i=l}),s=n.startViewTransition(()=>(i(),Yp(e))),{onViewTransitionCreated:c}=r;return c&&pe(e,()=>c({transition:s,from:o,to:t})),a})}function Yp(e){return new Promise(o=>{la({read:()=>setTimeout(o)},{injector:e})})}var Di=new k(""),Yo=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new oe;transitionAbortSubject=new oe;configLoader=u(Go);environmentInjector=u(qe);destroyRef=u(oa);urlSerializer=u(vt);rootContexts=u(yt);location=u(Ke);inputBindingEnabled=u(Fr,{optional:!0})!==null;titleStrategy=u(bi);options=u(Ct,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(qo);createViewTransition=u(Ci,{optional:!0});navigationErrorHandler=u(Di,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>v(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=n=>this.events.next(new Oo(n)),r=n=>this.events.next(new Bo(n));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let r=++this.navigationId;this.transitions?.next(V(g({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r}))}setupNavigations(t){return this.transitions=new ue(null),this.transitions.pipe(Re(r=>r!==null),ne(r=>{let n=!1,i=!1;return v(r).pipe(ne(a=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",te.SupersededByNewNavigation),Le;this.currentTransition=r,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?V(g({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let s=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!s&&c!=="reload"){let l="";return this.events.next(new Oe(a.id,this.urlSerializer.serialize(a.rawUrl),l,Mt.IgnoredSameUrlNavigation)),a.resolve(!1),Le}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return v(a).pipe(ne(l=>(this.events.next(new et(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?Le:Promise.resolve(l))),zp(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),K(l=>{r.targetSnapshot=l.targetSnapshot,r.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=V(g({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let d=new Dr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:l,extractedUrl:d,source:p,restoredState:h,extras:f}=a,y=new et(l,this.urlSerializer.serialize(d),p,h);this.events.next(y);let b=xs(this.rootComponentType).snapshot;return this.currentTransition=r=V(g({},a),{targetSnapshot:b,urlAfterRedirects:d,extras:V(g({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=d,v(r)}else{let l="";return this.events.next(new Oe(a.id,this.urlSerializer.serialize(a.extractedUrl),l,Mt.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Le}}),K(a=>{let s=new Ao(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(s)}),x(a=>(this.currentTransition=r=V(g({},a),{guards:sp(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),r)),vp(this.environmentInjector,a=>this.events.next(a)),K(a=>{if(r.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw jo(this.urlSerializer,a.guardsResult);let s=new To(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(s)}),Re(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",te.GuardRejected),!1)),ei(a=>{if(a.guards.canActivateChecks.length!==0)return v(a).pipe(K(s=>{let c=new Io(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(c)}),ne(s=>{let c=!1;return v(s).pipe(jp(this.paramsInheritanceStrategy,this.environmentInjector),K({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(s,"",te.NoDataFromResolver)}}))}),K(s=>{let c=new Fo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(c)}))}),ei(a=>{let s=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe(K(d=>{c.component=d}),x(()=>{})));for(let d of c.children)l.push(...s(d));return l};return Zr(s(a.targetSnapshot.root)).pipe(pn(null),xt(1))}),ei(()=>this.afterPreactivation()),ne(()=>{let{currentSnapshot:a,targetSnapshot:s}=r,c=this.createViewTransition?.(this.environmentInjector,a.root,s.root);return c?G(c).pipe(x(()=>r)):v(r)}),x(a=>{let s=rp(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=r=V(g({},a),{targetRouterState:s}),this.currentNavigation.targetRouterState=s,r}),K(()=>{this.events.next(new kr)}),ap(this.rootContexts,t.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),xt(1),K({next:a=>{n=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ce(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{n=!0}}),Qi(this.transitionAbortSubject.pipe(K(a=>{throw a}))),it(()=>{!n&&!i&&this.cancelNavigationTransition(r,"",te.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation=null,this.currentTransition=null)}),nt(a=>{if(this.destroyed)return r.resolve(!1),Le;if(i=!0,Is(a))this.events.next(new Ie(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),ip(a)?this.events.next(new Pt(a.url,a.navigationBehaviorOptions)):r.resolve(!1);else{let s=new Lt(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot??void 0);try{let c=pe(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(c instanceof Nt){let{message:l,cancellationCode:d}=jo(this.urlSerializer,c);this.events.next(new Ie(r.id,this.urlSerializer.serialize(r.extractedUrl),l,d)),this.events.next(new Pt(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(s),a}catch(c){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(c)}}return Le}))}))}cancelNavigationTransition(t,r,n){let i=new Ie(t.id,this.urlSerializer.serialize(t.extractedUrl),r,n);this.events.next(i),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==r?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Kp(e){return e!==Eo}var zs=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>u(Zp),providedIn:"root"})}return e})(),Wo=class{shouldDetach(o){return!1}store(o,t){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,t){return o.routeConfig===t.routeConfig}},Zp=(()=>{class e extends Wo{static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),js=(()=>{class e{urlSerializer=u(vt);options=u(Ct,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Ke);urlHandlingStrategy=u(qo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Fe;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:r,targetBrowserUrl:n}){let i=t!==void 0?this.urlHandlingStrategy.merge(t,r):r,a=n??i;return a instanceof Fe?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:t,finalUrl:r,initialUrl:n}){r&&t?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,n),this.routerState=t):this.rawUrlTree=n}routerState=xs(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>u(Xp),providedIn:"root"})}return e})(),Xp=(()=>{class e extends js{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{t(r.url,r.state,"popstate")})})}handleRouterEvent(t,r){t instanceof et?this.updateStateMemento():t instanceof Oe?this.commitTransition(r):t instanceof Dr?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):t instanceof kr?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):t instanceof Ie&&(t.code===te.GuardRejected||t.code===te.NoDataFromResolver)?this.restoreHistory(r):t instanceof Lt?this.restoreHistory(r,!0):t instanceof ce&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:r,id:n}){let{replaceUrl:i,state:a}=r;if(this.location.isCurrentPathEqualTo(t)||i){let s=this.browserPageId,c=g(g({},a),this.generateNgRouterState(n,s));this.location.replaceState(t,"",c)}else{let s=g(g({},a),this.generateNgRouterState(n,this.browserPageId+1));this.location.go(t,"",s)}}restoreHistory(t,r=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,i=this.currentPageId-n;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===t.finalUrl&&i===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,r){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:r}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ko(e,o){e.events.pipe(Re(t=>t instanceof ce||t instanceof Ie||t instanceof Lt||t instanceof Oe),x(t=>t instanceof ce||t instanceof Oe?0:(t instanceof Ie?t.code===te.Redirect||t.code===te.SupersededByNewNavigation:!1)?2:1),Re(t=>t!==2),xt(1)).subscribe(()=>{o()})}var Jp={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Qp={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Se=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(pa);stateManager=u(js);options=u(Ct,{optional:!0})||{};pendingTasks=u(Jt);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(Yo);urlSerializer=u(vt);location=u(Ke);urlHandlingStrategy=u(qo);_events=new oe;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(zs);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(wt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Fr,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Wi;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(r=>{try{let n=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(n!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof Ie&&r.code!==te.Redirect&&r.code!==te.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof ce)this.navigated=!0;else if(r instanceof Pt){let a=r.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(r.url,n.currentRawUrl),c=g({browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Kp(n.source)},a);this.scheduleNavigation(s,Eo,null,c,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}tf(r)&&this._events.next(r)}catch(n){this.navigationTransitions.transitionAbortSubject.next(n)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Eo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,r,n)=>{this.navigateToSyncWithBrowser(t,n,r)})}navigateToSyncWithBrowser(t,r,n){let i={replaceUrl:!0},a=n?.navigationId?n:null;if(n){let c=g({},n);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(i.state=c)}let s=this.parseUrl(t);this.scheduleNavigation(s,r,a,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(yi),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,r={}){let{relativeTo:n,queryParams:i,fragment:a,queryParamsHandling:s,preserveFragment:c}=r,l=c?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=g(g({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let p;try{let h=n?n.snapshot:this.routerState.snapshot.root;p=ws(h)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),p=this.currentUrlTree.root}return Ds(p,t,d,l??null)}navigateByUrl(t,r={skipLocationChange:!1}){let n=Qe(t)?t:this.parseUrl(t),i=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(i,Eo,null,r)}navigate(t,r={skipLocationChange:!1}){return ef(t),this.navigateByUrl(this.createUrlTree(t,r),r)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,r){let n;if(r===!0?n=g({},Jp):r===!1?n=g({},Qp):n=r,Qe(t))return rs(this.currentUrlTree,t,n);let i=this.parseUrl(t);return rs(this.currentUrlTree,i,n)}removeEmptyProps(t){return Object.entries(t).reduce((r,[n,i])=>(i!=null&&(r[n]=i),r),{})}scheduleNavigation(t,r,n,i,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((p,h)=>{s=p,c=h});let d=this.pendingTasks.add();return Ko(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:i,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(p=>Promise.reject(p))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function ef(e){for(let o=0;o<e.length;o++)if(e[o]==null)throw new S(4008,!1)}function tf(e){return!(e instanceof kr)&&!(e instanceof Pt)}var jt=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new oe;constructor(t,r,n,i,a,s){this.router=t,this.route=r,this.tabIndexAttribute=n,this.renderer=i,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area",this.isAnchorElement?this.subscription=t.events.subscribe(l=>{l instanceof ce&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Qe(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,r,n,i,a){let s=this.urlTree;if(s===null||this.isAnchorElement&&(t!==0||r||n||i||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let r=this.href===null?null:da(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",r)}applyAttributeValue(t,r){let n=this.renderer,i=this.el.nativeElement;r!==null?n.setAttribute(i,t,r):n.removeAttribute(i,t)}get urlTree(){return this.routerLinkInput===null?null:Qe(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(r){return new(r||e)(I(Se),I(Be),gn("tabindex"),I(Ne),I(ve),I(De))};static \u0275dir=z({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(r,n){r&1&&oo("click",function(a){return n.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&ye("target",n.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",N],skipLocationChange:[2,"skipLocationChange","skipLocationChange",N],replaceUrl:[2,"replaceUrl","replaceUrl",N],routerLink:"routerLink"},features:[fe]})}return e})(),Si=(()=>{class e{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new be;constructor(t,r,n,i,a){this.router=t,this.element=r,this.renderer=n,this.cdr=i,this.link=a,this.routerEventsSubscription=t.events.subscribe(s=>{s instanceof ce&&this.update()})}ngAfterContentInit(){v(this.links.changes,v(null)).pipe(Xt()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=G(t).pipe(Xt()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(t){let r=Array.isArray(t)?t:t.split(" ");this.classes=r.filter(n=>!!n)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(r=>{t?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let r=rf(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return n=>{let i=n.urlTree;return i?t.isActive(i,r):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(r){return new(r||e)(I(Se),I(ve),I(Ne),I(Ye),I(jt,8))};static \u0275dir=z({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(r,n,i){if(r&1&&lt(i,jt,5),r&2){let a;dt(a=ut())&&(n.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[fe]})}return e})();function rf(e){return!!e.paths}var Br=class{};var Hs=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(t,r,n,i,a){this.router=t,this.injector=n,this.preloadingStrategy=i,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(Re(t=>t instanceof ce),$e(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,r){let n=[];for(let i of r){i.providers&&!i._injector&&(i._injector=eo(i.providers,t,`Route: ${i.path}`));let a=i._injector??t,s=i._loadedInjector??a;(i.loadChildren&&!i._loadedRoutes&&i.canLoad===void 0||i.loadComponent&&!i._loadedComponent)&&n.push(this.preloadConfig(a,i)),(i.children||i._loadedRoutes)&&n.push(this.processRoutes(s,i.children??i._loadedRoutes))}return G(n).pipe(Xt())}preloadConfig(t,r){return this.preloadingStrategy.preload(r,()=>{let n;r.loadChildren&&r.canLoad===void 0?n=this.loader.loadChildren(t,r):n=v(null);let i=n.pipe(Q(a=>a===null?v(void 0):(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,this.processRoutes(a.injector??t,a.routes))));if(r.loadComponent&&!r._loadedComponent){let a=this.loader.loadComponent(r);return G([i,a]).pipe(Xt())}else return i})}static \u0275fac=function(r){return new(r||e)(C(Se),C(no),C(qe),C(Br),C(Go))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ws=new k(""),of=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,r,n,i,a={}){this.urlSerializer=t,this.transitions=r,this.viewportScroller=n,this.zone=i,this.options=a,a.scrollPositionRestoration||="disabled",a.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof et?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof ce?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Oe&&t.code===Mt.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof $t&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,r){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new $t(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,r))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(r){Qr()};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();function xi(e,...o){return Ge([{provide:wt,multi:!0,useValue:e},[],{provide:Be,useFactory:Vs,deps:[Se]},{provide:Dn,multi:!0,useFactory:Gs},o.map(t=>t.\u0275providers)])}function Vs(e){return e.routerState.root}function Mr(e,o){return{\u0275kind:e,\u0275providers:o}}function Gs(){let e=u(Pe);return o=>{let t=e.get(ha);if(o!==t.components[0])return;let r=e.get(Se),n=e.get(qs);e.get(Ei)===1&&r.initialNavigation(),e.get(Zs,null,hn.Optional)?.setUpPreloading(),e.get(Ws,null,hn.Optional)?.init(),r.resetRootComponentType(t.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var qs=new k("",{factory:()=>new oe}),Ei=new k("",{providedIn:"root",factory:()=>1});function Ys(){return Mr(2,[{provide:Ei,useValue:0},{provide:wn,multi:!0,deps:[Pe],useFactory:o=>{let t=o.get(_n,Promise.resolve());return()=>t.then(()=>new Promise(r=>{let n=o.get(Se),i=o.get(qs);Ko(n,()=>{r(!0)}),o.get(Yo).afterPreactivation=()=>(r(!0),i.closed?v(void 0):i),n.initialNavigation()}))}}])}function Ks(){return Mr(3,[{provide:wn,multi:!0,useFactory:()=>{let o=u(Se);return()=>{o.setUpLocationChangeListener()}}},{provide:Ei,useValue:2}])}var Zs=new k("");function Xs(e){return Mr(0,[{provide:Zs,useExisting:Hs},{provide:Br,useExisting:e}])}function Js(){return Mr(8,[mi,{provide:Fr,useExisting:mi}])}function Qs(e){let o=[{provide:Ci,useValue:Us},{provide:wi,useValue:g({skipNextTransition:!!e?.skipInitialTransition},e)}];return Mr(9,o)}var ec=[Ke,{provide:vt,useClass:Je},Se,yt,{provide:Be,useFactory:Vs,deps:[Se]},Go,[]],Ri=(()=>{class e{constructor(){}static forRoot(t,r){return{ngModule:e,providers:[ec,[],{provide:wt,multi:!0,useValue:t},[],r?.errorHandler?{provide:Di,useValue:r.errorHandler}:[],{provide:Ct,useValue:r||{}},r?.useHash?af():sf(),nf(),r?.preloadingStrategy?Xs(r.preloadingStrategy).\u0275providers:[],r?.initialNavigation?cf(r):[],r?.bindToComponentInputs?Js().\u0275providers:[],r?.enableViewTransitions?Qs().\u0275providers:[],lf()]}}static forChild(t){return{ngModule:e,providers:[{provide:wt,multi:!0,useValue:t}]}}static \u0275fac=function(r){return new(r||e)};static \u0275mod=J({type:e});static \u0275inj=X({})}return e})();function nf(){return{provide:Ws,useFactory:()=>{let e=u(Ia),o=u(ie),t=u(Ct),r=u(Yo),n=u(vt);return t.scrollOffset&&e.setOffset(t.scrollOffset),new of(n,r,e,o,t)}}}function af(){return{provide:De,useClass:Tn}}function sf(){return{provide:De,useClass:so}}function cf(e){return[e.initialNavigation==="disabled"?Ks().\u0275providers:[],e.initialNavigation==="enabledBlocking"?Ys().\u0275providers:[]]}var ki=new k("");function lf(){return[{provide:ki,useFactory:Gs},{provide:Dn,multi:!0,useExisting:ki}]}function tc(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}function Zo(e,o){if(e&&o){let t=r=>{tc(e,r)||(e.classList?e.classList.add(r):e.className+=" "+r)};[o].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function Ht(e,o){if(e&&o){let t=r=>{e.classList?e.classList.remove(r):e.className=e.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function rc(e,o){if(e instanceof HTMLElement){let t=e.offsetWidth;if(o){let r=getComputedStyle(e);t+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return t}return 0}function oc(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function _i(e,o={}){if(oc(e)){let t=(r,n)=>{var i,a;let s=(i=e?.$attrs)!=null&&i[r]?[(a=e?.$attrs)==null?void 0:a[r]]:[];return[n].flat().reduce((c,l)=>{if(l!=null){let d=typeof l;if(d==="string"||d==="number")c.push(l);else if(d==="object"){let p=Array.isArray(l)?t(r,l):Object.entries(l).map(([h,f])=>r==="style"&&(f||f===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?h:void 0);c=p.length?c.concat(p.filter(h=>!!h)):c}}return c},s)};Object.entries(o).forEach(([r,n])=>{if(n!=null){let i=r.match(/^on(.+)/);i?e.addEventListener(i[1].toLowerCase(),n):r==="p-bind"||r==="pBind"?_i(e,n):(n=r==="class"?[...new Set(t("class",n))].join(" ").trim():r==="style"?t("style",n).join(";").trim():n,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=n),e.setAttribute(r,n))}})}}function Ai(e){if(e){let o=e.offsetHeight,t=getComputedStyle(e);return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),o}return 0}function nc(e){if(e){let o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function ic(e,o){if(e){let t=e.offsetHeight;if(o){let r=getComputedStyle(e);t+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return t}return 0}function Ti(e){if(e){let o=e.offsetWidth,t=getComputedStyle(e);return o-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),o}return 0}function ac(e){var o;e&&("remove"in Element.prototype?e.remove():(o=e.parentNode)==null||o.removeChild(e))}function sc(e,o="",t){oc(e)&&t!==null&&t!==void 0&&e.setAttribute(o,t)}function cc(){let e=new Map;return{on(o,t){let r=e.get(o);return r?r.push(t):r=[t],e.set(o,r),this},off(o,t){let r=e.get(o);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(o,t){let r=e.get(o);r&&r.slice().map(n=>{n(t)})},clear(){e.clear()}}}function me(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function uf(e){return!!(e&&e.constructor&&e.call&&e.apply)}function B(e){return!me(e)}function He(e,o=!0){return e instanceof Object&&e.constructor===Object&&(o||Object.keys(e).length!==0)}function ge(e,...o){return uf(e)?e(...o):e}function rt(e,o=!0){return typeof e=="string"&&(o||e!=="")}function lc(e){return rt(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Xo(e,o="",t={}){let r=lc(o).split("."),n=r.shift();return n?He(e)?Xo(ge(e[Object.keys(e).find(i=>lc(i)===n)||""],t),r.join("."),t):void 0:ge(e,t)}function Jo(e,o=!0){return Array.isArray(e)&&(o||e.length!==0)}function dc(e){return B(e)&&!isNaN(e)}function le(e,o){if(o){let t=o.test(e);return o.lastIndex=0,t}return!1}function Dt(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Qo(e){return rt(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,t)=>t===0?o:"-"+o.toLowerCase()).toLowerCase():e}function Ii(e){return rt(e)?e.replace(/[A-Z]/g,(o,t)=>t===0?o:"."+o.toLowerCase()).toLowerCase():e}var en={};function Lr(e="pui_id_"){return en.hasOwnProperty(e)||(en[e]=0),en[e]++,`${e}${en[e]}`}function pf(){let e=[],o=(a,s,c=999)=>{let l=n(a,s,c),d=l.value+(l.key===a?0:c)+1;return e.push({key:a,value:d}),d},t=a=>{e=e.filter(s=>s.value!==a)},r=(a,s)=>n(a,s).value,n=(a,s,c=0)=>[...e].reverse().find(l=>s?!0:l.key===a)||{key:a,value:c},i=a=>a&&parseInt(a.style.zIndex,10)||0;return{get:i,set:(a,s,c)=>{s&&(s.style.zIndex=String(o(a,!0,c)))},clear:a=>{a&&(t(i(a)),a.style.zIndex="")},getCurrent:a=>r(a,!0)}}var ub=pf();var Y=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var uc=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(r){return new(r||e)(I(Xr))};static \u0275dir=z({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),ot=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=J({type:e});static \u0275inj=X({imports:[ze]})}return e})();var ff=Object.defineProperty,hf=Object.defineProperties,gf=Object.getOwnPropertyDescriptors,tn=Object.getOwnPropertySymbols,hc=Object.prototype.hasOwnProperty,gc=Object.prototype.propertyIsEnumerable,pc=(e,o,t)=>o in e?ff(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Ee=(e,o)=>{for(var t in o||(o={}))hc.call(o,t)&&pc(e,t,o[t]);if(tn)for(var t of tn(o))gc.call(o,t)&&pc(e,t,o[t]);return e},Fi=(e,o)=>hf(e,gf(o)),We=(e,o)=>{var t={};for(var r in e)hc.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&tn)for(var r of tn(e))o.indexOf(r)<0&&gc.call(e,r)&&(t[r]=e[r]);return t};var mf=cc(),de=mf;function fc(e,o){Jo(e)?e.push(...o||[]):He(e)&&Object.assign(e,o)}function bf(e){return He(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function vf(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Oi(e="",o=""){return vf(`${rt(e,!1)&&rt(o,!1)?`${e}-`:e}${o}`)}function mc(e="",o=""){return`--${Oi(e,o)}`}function yf(e=""){let o=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(o+t)%2!==0}function bc(e,o="",t="",r=[],n){if(rt(e)){let i=/{([^}]*)}/g,a=e.trim();if(yf(a))return;if(le(a,i)){let s=a.replaceAll(i,d=>{let h=d.replace(/{|}/g,"").split(".").filter(f=>!r.some(y=>le(f,y)));return`var(${mc(t,Qo(h.join("-")))}${B(n)?`, ${n}`:""})`}),c=/(\d+\s+[\+\-\*\/]\s+\d+)/g,l=/var\([^)]+\)/g;return le(s.replace(l,"0"),c)?`calc(${s})`:s}return a}else if(dc(e))return e}function Cf(e,o,t){rt(o,!1)&&e.push(`${o}:${t};`)}function Wt(e,o){return e?`${e}{${o}}`:""}var Vt=(...e)=>wf(A.getTheme(),...e),wf=(e={},o,t,r)=>{if(o){let{variable:n,options:i}=A.defaults||{},{prefix:a,transform:s}=e?.options||i||{},l=le(o,/{([^}]*)}/g)?o:`{${o}}`;return r==="value"||me(r)&&s==="strict"?A.getTokenValue(o):bc(l,void 0,a,[n.excludedKeyRegex],t)}return""};function Df(e,o={}){let t=A.defaults.variable,{prefix:r=t.prefix,selector:n=t.selector,excludedKeyRegex:i=t.excludedKeyRegex}=o,a=(l,d="")=>Object.entries(l).reduce((p,[h,f])=>{let y=le(h,i)?Oi(d):Oi(d,Qo(h)),b=bf(f);if(He(b)){let{variables:w,tokens:U}=a(b,y);fc(p.tokens,U),fc(p.variables,w)}else p.tokens.push((r?y.replace(`${r}-`,""):y).replaceAll("-",".")),Cf(p.variables,mc(y),bc(b,y,r,[i]));return p},{variables:[],tokens:[]}),{variables:s,tokens:c}=a(e,r);return{value:s,tokens:c,declarations:s.join(""),css:Wt(n,s.join(""))}}var xe={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let o=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var r;return(r=o.map(n=>n.resolve(t)).find(n=>n.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(e,o){return Df(e,{prefix:o?.prefix})},getCommon({name:e="",theme:o={},params:t,set:r,defaults:n}){var i,a,s,c,l,d,p;let{preset:h,options:f}=o,y,b,w,U,W,_,Z;if(B(h)&&f.transform!=="strict"){let{primitive:kt,semantic:St,extend:$r}=h,qt=St||{},{colorScheme:Pr}=qt,Nr=We(qt,["colorScheme"]),Ur=$r||{},{colorScheme:zr}=Ur,Yt=We(Ur,["colorScheme"]),Kt=Pr||{},{dark:jr}=Kt,Hr=We(Kt,["dark"]),Wr=zr||{},{dark:Vr}=Wr,Gr=We(Wr,["dark"]),qr=B(kt)?this._toVariables({primitive:kt},f):{},Yr=B(Nr)?this._toVariables({semantic:Nr},f):{},Kr=B(Hr)?this._toVariables({light:Hr},f):{},Ui=B(jr)?this._toVariables({dark:jr},f):{},zi=B(Yt)?this._toVariables({semantic:Yt},f):{},ji=B(Gr)?this._toVariables({light:Gr},f):{},Hi=B(Vr)?this._toVariables({dark:Vr},f):{},[bd,vd]=[(i=qr.declarations)!=null?i:"",qr.tokens],[yd,Cd]=[(a=Yr.declarations)!=null?a:"",Yr.tokens||[]],[wd,Dd]=[(s=Kr.declarations)!=null?s:"",Kr.tokens||[]],[kd,Sd]=[(c=Ui.declarations)!=null?c:"",Ui.tokens||[]],[xd,Ed]=[(l=zi.declarations)!=null?l:"",zi.tokens||[]],[Rd,_d]=[(d=ji.declarations)!=null?d:"",ji.tokens||[]],[Ad,Td]=[(p=Hi.declarations)!=null?p:"",Hi.tokens||[]];y=this.transformCSS(e,bd,"light","variable",f,r,n),b=vd;let Id=this.transformCSS(e,`${yd}${wd}`,"light","variable",f,r,n),Fd=this.transformCSS(e,`${kd}`,"dark","variable",f,r,n);w=`${Id}${Fd}`,U=[...new Set([...Cd,...Dd,...Sd])];let Od=this.transformCSS(e,`${xd}${Rd}color-scheme:light`,"light","variable",f,r,n),Bd=this.transformCSS(e,`${Ad}color-scheme:dark`,"dark","variable",f,r,n);W=`${Od}${Bd}`,_=[...new Set([...Ed,..._d,...Td])],Z=ge(h.css,{dt:Vt})}return{primitive:{css:y,tokens:b},semantic:{css:w,tokens:U},global:{css:W,tokens:_},style:Z}},getPreset({name:e="",preset:o={},options:t,params:r,set:n,defaults:i,selector:a}){var s,c,l;let d,p,h;if(B(o)&&t.transform!=="strict"){let f=e.replace("-directive",""),y=o,{colorScheme:b,extend:w,css:U}=y,W=We(y,["colorScheme","extend","css"]),_=w||{},{colorScheme:Z}=_,kt=We(_,["colorScheme"]),St=b||{},{dark:$r}=St,qt=We(St,["dark"]),Pr=Z||{},{dark:Nr}=Pr,Ur=We(Pr,["dark"]),zr=B(W)?this._toVariables({[f]:Ee(Ee({},W),kt)},t):{},Yt=B(qt)?this._toVariables({[f]:Ee(Ee({},qt),Ur)},t):{},Kt=B($r)?this._toVariables({[f]:Ee(Ee({},$r),Nr)},t):{},[jr,Hr]=[(s=zr.declarations)!=null?s:"",zr.tokens||[]],[Wr,Vr]=[(c=Yt.declarations)!=null?c:"",Yt.tokens||[]],[Gr,qr]=[(l=Kt.declarations)!=null?l:"",Kt.tokens||[]],Yr=this.transformCSS(f,`${jr}${Wr}`,"light","variable",t,n,i,a),Kr=this.transformCSS(f,Gr,"dark","variable",t,n,i,a);d=`${Yr}${Kr}`,p=[...new Set([...Hr,...Vr,...qr])],h=ge(U,{dt:Vt})}return{css:d,tokens:p,style:h}},getPresetC({name:e="",theme:o={},params:t,set:r,defaults:n}){var i;let{preset:a,options:s}=o,c=(i=a?.components)==null?void 0:i[e];return this.getPreset({name:e,preset:c,options:s,params:t,set:r,defaults:n})},getPresetD({name:e="",theme:o={},params:t,set:r,defaults:n}){var i;let a=e.replace("-directive",""),{preset:s,options:c}=o,l=(i=s?.directives)==null?void 0:i[a];return this.getPreset({name:a,preset:l,options:c,params:t,set:r,defaults:n})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,o){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?o.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:o.options.darkModeSelector):[]},getLayerOrder(e,o={},t,r){let{cssLayer:n}=o;return n?`@layer ${ge(n.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:o={},params:t,props:r={},set:n,defaults:i}){let a=this.getCommon({name:e,theme:o,params:t,set:n,defaults:i}),s=Object.entries(r).reduce((c,[l,d])=>c.push(`${l}="${d}"`)&&c,[]).join(" ");return Object.entries(a||{}).reduce((c,[l,d])=>{if(d?.css){let p=Dt(d?.css),h=`${l}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${h}" ${s}>${p}</style>`)}return c},[]).join("")},getStyleSheet({name:e="",theme:o={},params:t,props:r={},set:n,defaults:i}){var a;let s={name:e,theme:o,params:t,set:n,defaults:i},c=(a=e.includes("-directive")?this.getPresetD(s):this.getPresetC(s))==null?void 0:a.css,l=Object.entries(r).reduce((d,[p,h])=>d.push(`${p}="${h}"`)&&d,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${e}-variables" ${l}>${Dt(c)}</style>`:""},createTokens(e={},o,t="",r="",n={}){return Object.entries(e).forEach(([i,a])=>{let s=le(i,o.variable.excludedKeyRegex)?t:t?`${t}.${Ii(i)}`:Ii(i),c=r?`${r}.${i}`:i;He(a)?this.createTokens(a,o,s,c,n):(n[s]||(n[s]={paths:[],computed(l,d={}){var p,h;return this.paths.length===1?(p=this.paths[0])==null?void 0:p.computed(this.paths[0].scheme,d.binding):l&&l!=="none"?(h=this.paths.find(f=>f.scheme===l))==null?void 0:h.computed(l,d.binding):this.paths.map(f=>f.computed(f.scheme,d[f.scheme]))}}),n[s].paths.push({path:c,value:a,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(l,d={}){let p=/{([^}]*)}/g,h=a;if(d.name=this.path,d.binding||(d.binding={}),le(a,p)){let y=a.trim().replaceAll(p,U=>{var W;let _=U.replace(/{|}/g,""),Z=(W=n[_])==null?void 0:W.computed(l,d);return Jo(Z)&&Z.length===2?`light-dark(${Z[0].value},${Z[1].value})`:Z?.value}),b=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,w=/var\([^)]+\)/g;h=le(y.replace(w,"0"),b)?`calc(${y})`:y}return me(d.binding)&&delete d.binding,{colorScheme:l,path:this.path,paths:d,value:h.includes("undefined")?void 0:h}}}))}),n},getTokenValue(e,o,t){var r;let i=(c=>c.split(".").filter(d=>!le(d.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(o),a=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(r=e[i])==null?void 0:r.computed(a)].flat().filter(c=>c);return s.length===1?s[0].value:s.reduce((c={},l)=>{let d=l,{colorScheme:p}=d,h=We(d,["colorScheme"]);return c[p]=h,c},void 0)},getSelectorRule(e,o,t,r){return t==="class"||t==="attr"?Wt(B(o)?`${e}${o},${e} ${o}`:e,r):Wt(e,B(o)?Wt(o,r):r)},transformCSS(e,o,t,r,n={},i,a,s){if(B(o)){let{cssLayer:c}=n;if(r!=="style"){let l=this.getColorSchemeOption(n,a);o=t==="dark"?l.reduce((d,{type:p,selector:h})=>(B(h)&&(d+=h.includes("[CSS]")?h.replace("[CSS]",o):this.getSelectorRule(h,s,p,o)),d),""):Wt(s??":root",o)}if(c){let l={name:"primeui",order:"primeui"};He(c)&&(l.name=ge(c.name,{name:e,type:r})),B(l.name)&&(o=Wt(`@layer ${l.name}`,o),i?.layerNames(l.name))}return o}return""}},A={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:o}=e;o&&(this._theme=Fi(Ee({},o),{options:Ee(Ee({},this.defaults.options),o.options)}),this._tokens=xe.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),de.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Fi(Ee({},this.theme),{preset:e}),this._tokens=xe.createTokens(e,this.defaults),this.clearLoadedStyleNames(),de.emit("preset:change",e),de.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Fi(Ee({},this.theme),{options:e}),this.clearLoadedStyleNames(),de.emit("options:change",e),de.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return xe.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",o){return xe.getCommon({name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return xe.getPresetC(t)},getDirective(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return xe.getPresetD(t)},getCustomPreset(e="",o,t,r){let n={name:e,preset:o,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return xe.getPreset(n)},getLayerOrderCSS(e=""){return xe.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",o,t="style",r){return xe.transformCSS(e,o,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",o,t={}){return xe.getCommonStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,o,t={}){return xe.getStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),de.emit(`theme:${o}:load`,e),!this._loadingStyles.size&&de.emit("theme:load"))}};var kf=0,vc=(()=>{class e{document=u(R);use(t,r={}){let n=!1,i=t,a=null,{immediate:s=!0,manual:c=!1,name:l=`style_${++kf}`,id:d=void 0,media:p=void 0,nonce:h=void 0,first:f=!1,props:y={}}=r;if(this.document){if(a=this.document.querySelector(`style[data-primeng-style-id="${l}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),!a.isConnected){i=t,_i(a,{type:"text/css",media:p,nonce:h});let b=this.document.head;f&&b.firstChild?b.insertBefore(a,b.firstChild):b.appendChild(a),sc(a,"data-primeng-style-id",l)}return a.textContent!==i&&(a.textContent=i),{id:d,name:l,el:a,css:i}}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Gt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Sf=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,xf=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,re=(()=>{class e{name="base";useStyle=u(vc);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,r={},n=i=>i)=>{let i=n(ge(t,{dt:Vt}));return i?this.useStyle.use(Dt(i),g({name:this.name},r)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},r="")=>this.load(this.theme,t,(n="")=>A.transformCSS(t.name||this.name,`${n}${r}`));loadGlobalCSS=(t={})=>this.load(xf,t);loadGlobalTheme=(t={},r="")=>this.load(Sf,t,(n="")=>A.transformCSS(t.name||this.name,`${n}${r}`));getCommonTheme=t=>A.getCommon(this.name,t);getComponentTheme=t=>A.getComponent(this.name,t);getDirectiveTheme=t=>A.getDirective(this.name,t);getPresetTheme=(t,r,n)=>A.getCustomPreset(this.name,t,r,n);getLayerOrderThemeCSS=()=>A.getLayerOrderCSS(this.name);getStyleSheet=(t="",r={})=>{if(this.css){let n=ge(this.css,{dt:Vt}),i=Dt(`${n}${t}`),a=Object.entries(r).reduce((s,[c,l])=>s.push(`${c}="${l}"`)&&s,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${a}>${i}</style>`}return""};getCommonThemeStyleSheet=(t,r={})=>A.getCommonStyleSheet(this.name,t,r);getThemeStyleSheet=(t,r={})=>{let n=[A.getStyleSheet(this.name,t,r)];if(this.theme){let i=this.name==="base"?"global-style":`${this.name}-style`,a=ge(this.theme,{dt:Vt}),s=Dt(A.transformCSS(i,a)),c=Object.entries(r).reduce((l,[d,p])=>l.push(`${d}="${p}"`)&&l,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${i}" ${c}>${s}</style>`)}return n.join("")};static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ef=(()=>{class e{theme=at(void 0);csp=at({nonce:void 0});isThemeChanged=!1;document=u(R);baseStyle=u(re);constructor(){or(()=>{de.on("theme:change",t=>{xn(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),or(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){A.clearLoadedStyleNames(),de.clear()}onThemeChange(t){A.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!A.isStyleNameLoaded("common")){let{primitive:t,semantic:r,global:n,style:i}=this.baseStyle.getCommonTheme?.()||{},a={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,g({name:"primitive-variables"},a)),this.baseStyle.load(r?.css,g({name:"semantic-variables"},a)),this.baseStyle.load(n?.css,g({name:"global-variables"},a)),this.baseStyle.loadGlobalTheme(g({name:"global-style"},a),i),A.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:r,csp:n}=t||{};r&&this.theme.set(r),n&&this.csp.set(n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Mi=(()=>{class e extends Ef{ripple=at(!1);platformId=u(ee);inputStyle=at(null);inputVariant=at(null);overlayOptions={};csp=at({nonce:void 0});filterMatchModeOptions={text:[Y.STARTS_WITH,Y.CONTAINS,Y.NOT_CONTAINS,Y.ENDS_WITH,Y.EQUALS,Y.NOT_EQUALS],numeric:[Y.EQUALS,Y.NOT_EQUALS,Y.LESS_THAN,Y.LESS_THAN_OR_EQUAL_TO,Y.GREATER_THAN,Y.GREATER_THAN_OR_EQUAL_TO],date:[Y.DATE_IS,Y.DATE_IS_NOT,Y.DATE_BEFORE,Y.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new oe;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=g(g({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:r,ripple:n,inputStyle:i,inputVariant:a,theme:s,overlayOptions:c,translation:l}=t||{};r&&this.csp.set(r),n&&this.ripple.set(n),i&&this.inputStyle.set(i),a&&this.inputVariant.set(a),c&&(this.overlayOptions=c),l&&this.setTranslation(l),s&&this.setThemeConfig({theme:s,csp:r})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Rf=new k("PRIME_NG_CONFIG");function yc(...e){let o=e?.map(r=>({provide:Rf,useValue:r,multi:!1})),t=fa(()=>{let r=u(Mi);e?.forEach(n=>r.setConfig(n))});return Ge([...o,t])}var Cc=(()=>{class e extends re{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Me=(()=>{class e{document=u(R);platformId=u(ee);el=u(ve);injector=u(Pe);cd=u(Ye);renderer=u(Ne);config=u(Mi);baseComponentStyle=u(Cc);baseStyle=u(re);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Lr("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,r="",n={}){return Xo(t,r,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Rt(this.platformId)){let{dt:r}=t;r&&r.currentValue&&(this._loadScopedThemeStyles(r.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(r.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>de.off("theme:change",t))}_loadStyles(){let t=()=>{Gt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Gt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Gt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Gt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!A.isStyleNameLoaded("common")){let{primitive:t,semantic:r,global:n,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,g({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(r?.css,g({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,g({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(g({name:"global-style"},this.styleOptions),i),A.setLoadedStyleName("common")}if(!A.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:r}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,g({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(g({name:`${this.componentStyle?.name}-style`},this.styleOptions),r),A.setLoadedStyleName(this.componentStyle?.name)}if(!A.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,g({name:"layer-order",first:!0},this.styleOptions)),A.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:r}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(r,g({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Gt.clearLoadedStyleNames(),de.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,r){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let r=this.componentStyle?.inlineStyles?.[t];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:g({},r)}get parent(){return this.parentInstance}static \u0275fac=function(r){return new(r||e)};static \u0275dir=z({type:e,inputs:{dt:"dt"},features:[Ae([Cc,re]),fe]})}return e})();var wc=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,r){t&&r&&(t.classList?t.classList.add(r):t.className+=" "+r)}static addMultipleClasses(t,r){if(t&&r)if(t.classList){let n=r.trim().split(" ");for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=r.split(" ");for(let i=0;i<n.length;i++)t.className+=" "+n[i]}}static removeClass(t,r){t&&r&&(t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,r){t&&r&&[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,r){return t&&r?t.classList?t.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(r){return r!==t})}static find(t,r){return Array.from(t.querySelectorAll(r))}static findSingle(t,r){return this.isElement(t)?t.querySelector(r):null}static index(t){let r=t.parentNode.childNodes,n=0;for(var i=0;i<r.length;i++){if(r[i]==t)return n;r[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,r){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(var a=0;a<n.length;a++){if(n[a]==t)return i;n[a].attributes&&n[a].attributes[r]&&n[a].nodeType==1&&i++}return-1}static appendOverlay(t,r,n="self"){n!=="self"&&t&&r&&this.appendChild(t,r)}static alignOverlay(t,r,n="self",i=!0){t&&r&&(i&&(t.style.minWidth=`${e.getOuterWidth(r)}px`),n==="self"?this.relativePosition(t,r):this.absolutePosition(t,r))}static relativePosition(t,r,n=!0){let i=W=>{if(W)return getComputedStyle(W).getPropertyValue("position")==="relative"?W:i(W.parentElement)},a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.offsetHeight,c=r.getBoundingClientRect(),l=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),p=this.getViewport(),f=i(t)?.getBoundingClientRect()||{top:-1*l,left:-1*d},y,b;c.top+s+a.height>p.height?(y=c.top-f.top-a.height,t.style.transformOrigin="bottom",c.top+y<0&&(y=-1*c.top)):(y=s+c.top-f.top,t.style.transformOrigin="top");let w=c.left+a.width-p.width,U=c.left-f.left;a.width>p.width?b=(c.left-f.left)*-1:w>0?b=U-w:b=c.left-f.left,t.style.top=y+"px",t.style.left=b+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,r,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.height,s=i.width,c=r.offsetHeight,l=r.offsetWidth,d=r.getBoundingClientRect(),p=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),f=this.getViewport(),y,b;d.top+c+a>f.height?(y=d.top+p-a,t.style.transformOrigin="bottom",y<0&&(y=p)):(y=c+d.top+p,t.style.transformOrigin="top"),d.left+s>f.width?b=Math.max(0,d.left+h+l-s):b=d.left+h,t.style.top=y+"px",t.style.left=b+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,r=[]){return t.parentNode===null?r:this.getParents(t.parentNode,r.concat([t.parentNode]))}static getScrollableParents(t){let r=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,a=s=>{let c=window.getComputedStyle(s,null);return i.test(c.getPropertyValue("overflow"))||i.test(c.getPropertyValue("overflowX"))||i.test(c.getPropertyValue("overflowY"))};for(let s of n){let c=s.nodeType===1&&s.dataset.scrollselectors;if(c){let l=c.split(",");for(let d of l){let p=this.findSingle(s,d);p&&a(p)&&r.push(p)}}s.nodeType!==9&&a(s)&&r.push(s)}}return r}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let r=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",r}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let r=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",r}static getHiddenElementDimensions(t){let r={};return t.style.visibility="hidden",t.style.display="block",r.width=t.offsetWidth,r.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",r}static scrollInView(t,r){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,a=getComputedStyle(t).getPropertyValue("paddingTop"),s=a?parseFloat(a):0,c=t.getBoundingClientRect(),d=r.getBoundingClientRect().top+document.body.scrollTop-(c.top+document.body.scrollTop)-i-s,p=t.scrollTop,h=t.clientHeight,f=this.getOuterHeight(r);d<0?t.scrollTop=p+d:d+f>h&&(t.scrollTop=p+d-h+f)}static fadeIn(t,r){t.style.opacity=0;let n=+new Date,i=0,a=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/r,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(t,r){var n=1,i=50,a=r,s=i/a;let c=setInterval(()=>{n=n-s,n<=0&&(n=0,clearInterval(c)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,r){var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return i.call(t,r)}static getOuterWidth(t,r){let n=t.offsetWidth;if(r){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let r=getComputedStyle(t);return parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)}static getHorizontalMargin(t){let r=getComputedStyle(t);return parseFloat(r.marginLeft)+parseFloat(r.marginRight)}static innerWidth(t){let r=t.offsetWidth,n=getComputedStyle(t);return r+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),r}static width(t){let r=t.offsetWidth,n=getComputedStyle(t);return r-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),r}static getInnerHeight(t){let r=t.offsetHeight,n=getComputedStyle(t);return r+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),r}static getOuterHeight(t,r){let n=t.offsetHeight;if(r){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let r=t.offsetHeight,n=getComputedStyle(t);return r-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),r}static getWidth(t){let r=t.offsetWidth,n=getComputedStyle(t);return r-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),r}static getViewport(){let t=window,r=document,n=r.documentElement,i=r.getElementsByTagName("body")[0],a=t.innerWidth||n.clientWidth||i.clientWidth,s=t.innerHeight||n.clientHeight||i.clientHeight;return{width:a,height:s}}static getOffset(t){var r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,r){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(r,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,r=t.indexOf("MSIE ");if(r>0)return!0;var n=t.indexOf("Trident/");if(n>0){var i=t.indexOf("rv:");return!0}var a=t.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,r){if(this.isElement(r))r.appendChild(t);else if(r&&r.el&&r.el.nativeElement)r.el.nativeElement.appendChild(t);else throw"Cannot append "+r+" to "+t}static removeChild(t,r){if(this.isElement(r))r.removeChild(t);else if(r.el&&r.el.nativeElement)r.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+r}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let r=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let r=document.createElement("div");r.className="p-scrollbar-measure",document.body.appendChild(r);let n=r.offsetWidth-r.clientWidth;return document.body.removeChild(r),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let r=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=r,r}static invokeElementMethod(t,r,n){t[r].apply(t,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),r=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:r[1]||"",version:r[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,r){t&&document.activeElement!==t&&t.focus(r)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,r=""){let n=this.find(t,this.getFocusableSelectorString(r)),i=[];for(let a of n){let s=getComputedStyle(a);this.isVisible(a)&&s.display!="none"&&s.visibility!="hidden"&&i.push(a)}return i}static getFocusableElement(t,r=""){let n=this.findSingle(t,this.getFocusableSelectorString(r));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!="none"&&i.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,r=""){let n=this.getFocusableElements(t,r);return n.length>0?n[0]:null}static getLastFocusableElement(t,r){let n=this.getFocusableElements(t,r);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,r=!1){let n=e.getFocusableElements(t),i=0;if(n&&n.length>0){let a=n.indexOf(n[0].ownerDocument.activeElement);r?a==-1||a===0?i=n.length-1:i=a-1:a!=-1&&a!==n.length-1&&(i=a+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,r){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return r?.nextElementSibling;case"@prev":return r?.previousElementSibling;case"@parent":return r?.parentElement;case"@grandparent":return r?.parentElement.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let a=(s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,r){if(t){let n=t.getAttribute(r);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,r={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,r),i.append(...n),i}}static setAttribute(t,r="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(r,n)}static setAttributes(t,r={}){if(this.isElement(t)){let n=(i,a)=>{let s=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[a].flat().reduce((c,l)=>{if(l!=null){let d=typeof l;if(d==="string"||d==="number")c.push(l);else if(d==="object"){let p=Array.isArray(l)?n(i,l):Object.entries(l).map(([h,f])=>i==="style"&&(f||f===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?h:void 0);c=p.length?c.concat(p.filter(h=>!!h)):c}}return c},s)};Object.entries(r).forEach(([i,a])=>{if(a!=null){let s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),a):i==="pBind"?this.setAttributes(t,a):(a=i==="class"?[...new Set(n("class",a))].join(" ").trim():i==="style"?n("style",a).join(";").trim():a,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=a),t.setAttribute(i,a))}})}}static isFocusableElement(t,r=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r}`):!1}}return e})();var Dc=(()=>{class e extends Me{autofocus=!1;_autofocus=!1;focused=!1;platformId=u(ee);document=u(R);host=u(ve);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){sr(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=wc.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275dir=z({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",N],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[he]})}return e})();var _f=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Af={root:({props:e,instance:o})=>["p-badge p-component",{"p-badge-circle":B(e.value)&&String(e.value).length===1,"p-badge-dot":me(e.value)&&!o.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},kc=(()=>{class e extends re{name="badge";theme=_f;classes=Af;static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Li=(()=>{class e extends Me{styleClass=_e();style=_e();badgeSize=_e();size=_e();severity=_e();value=_e();badgeDisabled=_e(!1,{transform:N});_componentStyle=u(kc);containerClass=En(()=>{let t="p-badge p-component";return B(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),me(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275cmp=j({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(r,n){r&2&&(ma(n.style()),Et(n.containerClass()),ga("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Ae([kc]),he],decls:1,vars:1,template:function(r,n){r&1&&P(0),r&2&&pt(n.value())},dependencies:[ze,ot],encapsulation:2,changeDetection:0})}return e})(),Sc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=J({type:e});static \u0275inj=X({imports:[Li,ot,ot]})}return e})();var If=["*"],Ff=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Of=(()=>{class e extends re{name="baseicon";inlineStyles=Ff;static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var xc=(()=>{class e extends Me{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=me(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275cmp=j({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",N],styleClass:"styleClass"},features:[Ae([Of]),he],ngContentSelectors:If,decls:1,vars:0,template:function(r,n){r&1&&(tr(),rr(0))},encapsulation:2,changeDetection:0})}return e})();var Ec=(()=>{class e extends xc{pathId;ngOnInit(){this.pathId="url(#"+Lr()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275cmp=j({type:e,selectors:[["SpinnerIcon"]],features:[he],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(r,n){r&1&&(ra(),F(0,"svg",0)(1,"g"),q(2,"path",1),T(),F(3,"defs")(4,"clipPath",2),q(5,"rect",3),T()()()),r&2&&(Et(n.getClassNames()),ye("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),$(),ye("clip-path",n.pathId),$(3),M("id",n.pathId))},encapsulation:2})}return e})();var Bf=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Mf={root:"p-ink"},Rc=(()=>{class e extends re{name="ripple";theme=Bf;classes=Mf;static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var _c=(()=>{class e extends Me{zone=u(ie);_componentStyle=u(Rc);animationListener;mouseDownListener;timeout;constructor(){super(),or(()=>{sr(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let r=this.getInk();if(!r||this.document.defaultView?.getComputedStyle(r,null).display==="none")return;if(Ht(r,"p-ink-active"),!Ai(r)&&!Ti(r)){let s=Math.max(rc(this.el.nativeElement),ic(this.el.nativeElement));r.style.height=s+"px",r.style.width=s+"px"}let n=nc(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-Ti(r)/2,a=t.pageY-n.top+this.document.body.scrollLeft-Ai(r)/2;this.renderer.setStyle(r,"top",a+"px"),this.renderer.setStyle(r,"left",i+"px"),Zo(r,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&Ht(s,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let r=0;r<t.length;r++)if(typeof t[r].className=="string"&&t[r].className.indexOf("p-ink")!==-1)return t[r];return null}resetInk(){let t=this.getInk();t&&Ht(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Ht(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ac(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=z({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[Ae([Rc]),he]})}return e})();var Lf=["content"],$f=["loading"],Pf=["icon"],Nf=["*"],Tc=e=>({class:e});function Uf(e,o){e&1&&ba(0)}function zf(e,o){if(e&1&&q(0,"span",8),e&2){let t=Ce(3);M("ngClass",t.iconClass()),ye("aria-hidden",!0)("data-pc-section","loadingicon")}}function jf(e,o){if(e&1&&q(0,"SpinnerIcon",9),e&2){let t=Ce(3);M("styleClass",t.spinnerIconClass())("spin",!0),ye("aria-hidden",!0)("data-pc-section","loadingicon")}}function Hf(e,o){if(e&1&&(to(0),ct(1,zf,1,3,"span",6)(2,jf,1,4,"SpinnerIcon",7),ro()),e&2){let t=Ce(2);$(),M("ngIf",t.loadingIcon),$(),M("ngIf",!t.loadingIcon)}}function Wf(e,o){}function Vf(e,o){if(e&1&&ct(0,Wf,0,0,"ng-template",10),e&2){let t=Ce(2);M("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Gf(e,o){if(e&1&&(to(0),ct(1,Hf,3,2,"ng-container",2)(2,Vf,1,1,null,5),ro()),e&2){let t=Ce();$(),M("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),$(),M("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",kn(3,Tc,t.iconClass()))}}function qf(e,o){if(e&1&&q(0,"span",8),e&2){let t=Ce(2);Et(t.icon),M("ngClass",t.iconClass()),ye("data-pc-section","icon")}}function Yf(e,o){}function Kf(e,o){if(e&1&&ct(0,Yf,0,0,"ng-template",10),e&2){let t=Ce(2);M("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Zf(e,o){if(e&1&&(to(0),ct(1,qf,1,4,"span",11)(2,Kf,1,1,null,5),ro()),e&2){let t=Ce();$(),M("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),$(),M("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",kn(3,Tc,t.iconClass()))}}function Xf(e,o){if(e&1&&(F(0,"span",12),P(1),T()),e&2){let t=Ce();ye("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),$(),pt(t.label)}}function Jf(e,o){if(e&1&&q(0,"p-badge",13),e&2){let t=Ce();M("value",t.badge)("severity",t.badgeSeverity)}}var Qf=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,eh={root:({instance:e,props:o})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Ac=(()=>{class e extends re{name="button";theme=Qf;classes=eh;static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var $i=(()=>{class e extends Me{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new be;onFocus=new be;onBlur=new be;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([r,n])=>this[`_${r}`]!==n&&(this[`_${r}`]=n))}get hasFluid(){let r=this.el.nativeElement.closest("p-fluid");return me(this.fluid)?!!r:this.fluid}_componentStyle=u(Ac);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:r}=t;if(r){let n=r.currentValue;for(let i in n)this[i]=n[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[r])=>t+` ${r}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=L(e)))(n||e)}})();static \u0275cmp=j({type:e,selectors:[["p-button"]],contentQueries:function(r,n,i){if(r&1&&(lt(i,Lf,5),lt(i,$f,5),lt(i,Pf,5),lt(i,uc,4)),r&2){let a;dt(a=ut())&&(n.contentTemplate=a.first),dt(a=ut())&&(n.loadingIconTemplate=a.first),dt(a=ut())&&(n.iconTemplate=a.first),dt(a=ut())&&(n.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",N],loading:[2,"loading","loading",N],loadingIcon:"loadingIcon",raised:[2,"raised","raised",N],rounded:[2,"rounded","rounded",N],text:[2,"text","text",N],plain:[2,"plain","plain",N],severity:"severity",outlined:[2,"outlined","outlined",N],link:[2,"link","link",N],tabindex:[2,"tabindex","tabindex",Sn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",N],fluid:[2,"fluid","fluid",N],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Ae([Ac]),he,fe],ngContentSelectors:Nf,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(r,n){r&1&&(tr(),F(0,"button",0),oo("click",function(a){return n.onClick.emit(a)})("focus",function(a){return n.onFocus.emit(a)})("blur",function(a){return n.onBlur.emit(a)}),rr(1),ct(2,Uf,1,0,"ng-container",1)(3,Gf,3,5,"ng-container",2)(4,Zf,3,5,"ng-container",2)(5,Xf,2,3,"span",3)(6,Jf,1,2,"p-badge",4),T()),r&2&&(M("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),ye("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),$(2),M("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),$(),M("ngIf",n.loading),$(),M("ngIf",!n.loading),$(),M("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),$(),M("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[ze,In,Fn,Bn,On,_c,Dc,Ec,Sc,Li,ot],encapsulation:2,changeDetection:0})}return e})(),Ic=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=J({type:e});static \u0275inj=X({imports:[ze,$i,ot,ot]})}return e})();var rn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=j({type:e,selectors:[["app-button-demo"]],decls:2,vars:0,consts:[[1,"card","flex","justify-center"],["label","Check"]],template:function(t,r){t&1&&(F(0,"div",0),q(1,"p-button",1),T())},dependencies:[Ic,$i],encapsulation:2})};var rh=()=>({exact:!0}),on=class e{title="devjourney";currentYear=new Date().getFullYear();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=j({type:e,selectors:[["app-root"]],decls:13,vars:3,consts:[[1,"app-header"],[1,"app-header__title"],[1,"app-header__nav"],["routerLink","/","routerLinkActive","active",1,"app-header__nav-link",3,"routerLinkActiveOptions"],["routerLink","/journal","routerLinkActive","active",1,"app-header__nav-link"],[1,"app-main"],[1,"app-footer"]],template:function(t,r){t&1&&(F(0,"header",0)(1,"h1",1),P(2,"devjourney"),T(),F(3,"nav",2)(4,"a",3),P(5,"Home"),T(),F(6,"a",4),P(7,"Journal"),T()()(),F(8,"main",5),q(9,"router-outlet")(10,"app-button-demo"),T(),F(11,"footer",6),P(12),T()),t&2&&($(4),M("routerLinkActiveOptions",ya(2,rh)),$(8),va(" \xA9 ",r.currentYear,` Johan van Wyk. All rights reserved.
`))},dependencies:[Ir,Ri,jt,Si,rn],styles:[".app-header[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;padding:1rem}.app-header__title[_ngcontent-%COMP%]{margin:0;font-size:1.8rem}.app-header__nav[_ngcontent-%COMP%]{margin-top:.5rem}.app-header__nav-link[_ngcontent-%COMP%]{color:#fff;margin-right:1rem;text-decoration:none;font-weight:500}.app-header__nav-link.active[_ngcontent-%COMP%]{border-bottom:2px solid #ff4081}.app-header__nav-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.app-main[_ngcontent-%COMP%]{padding:2rem;min-height:calc(100vh - 160px)}.app-footer[_ngcontent-%COMP%]{background-color:#f4f4f4;text-align:center;padding:1rem;font-size:.875rem;color:#555}"]})};var nn={production:!0,apiUrl:"https://devjourney-backend.onrender.com/api"};var an=class e{constructor(o){this.http=o}ping(){return this.http.get(`${nn.apiUrl}/ping`)}static \u0275fac=function(t){return new(t||e)(C(Co))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})};var sn=class e{constructor(o){this.pingService=o}backendApiUrl=`${nn.apiUrl}/ping`;backendMessage="Loading...";ngOnInit(){this.pingService.ping().subscribe({next:o=>{this.backendMessage=o.message},error:o=>{this.backendMessage="Error contacting backend.",console.error(o)}})}static \u0275fac=function(t){return new(t||e)(I(an))};static \u0275cmp=j({type:e,selectors:[["app-home"]],decls:21,vars:2,template:function(t,r){t&1&&(F(0,"h1"),P(1,"Personal Development TODO"),T(),F(2,"p"),P(3,"\u{1F3AF} Courses & Certifications"),T(),F(4,"p"),P(5,"\u{1F4DA} Books/Articles Summaries"),T(),q(6,"hr"),F(7,"p")(8,"b"),P(9,"GET Request:"),T(),P(10,"\xA0"),F(11,"i"),P(12),T()(),F(13,"p")(14,"b"),P(15,"Response:"),T(),P(16,'\xA0"'),F(17,"i"),P(18),T(),P(19,'"'),T(),q(20,"hr")),t&2&&($(12),pt(r.backendApiUrl),$(6),pt(r.backendMessage))},encapsulation:2})};var cn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=j({type:e,selectors:[["app-journal"]],decls:2,vars:0,template:function(t,r){t&1&&(F(0,"p"),P(1,"journal works!"),T())},encapsulation:2})};var Fc=[{path:"",component:sn},{path:"journal",component:cn}];var nh="@",ih=(()=>{class e{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=u(Pe);loadingSchedulerFn=u(ah,{optional:!0});_engine;constructor(t,r,n,i,a){this.doc=t,this.delegate=r,this.zone=n,this.animationType=i,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-AX77KW5B.js").then(n=>n),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(t):r=t(),r.catch(n=>{throw new S(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,r){let n=this.delegate.createRenderer(t,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new Ni(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(t,r);i.use(s),this.scheduler??=this.injector.get(na,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(r){Qr()};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Ni=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let t of this.replay)t(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,t){return this.delegate.createElement(o,t)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,t){this.delegate.appendChild(o,t)}insertBefore(o,t,r,n){this.delegate.insertBefore(o,t,r,n)}removeChild(o,t,r){this.delegate.removeChild(o,t,r)}selectRootElement(o,t){return this.delegate.selectRootElement(o,t)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,t,r,n){this.delegate.setAttribute(o,t,r,n)}removeAttribute(o,t,r){this.delegate.removeAttribute(o,t,r)}addClass(o,t){this.delegate.addClass(o,t)}removeClass(o,t){this.delegate.removeClass(o,t)}setStyle(o,t,r,n){this.delegate.setStyle(o,t,r,n)}removeStyle(o,t,r){this.delegate.removeStyle(o,t,r)}setProperty(o,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(o,t,r)),this.delegate.setProperty(o,t,r)}setValue(o,t){this.delegate.setValue(o,t)}listen(o,t,r,n){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(o,t,r,n)),this.delegate.listen(o,t,r,n)}shouldReplay(o){return this.replay!==null&&o.startsWith(nh)}},ah=new k("");function Oc(e="animations"){return yn("NgAsyncAnimations"),Ge([{provide:Jr,useFactory:(o,t,r)=>new ih(o,t,r,e),deps:[R,ur,ie]},{provide:sa,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Bc={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0",borderColor:"{content.border.color}"},header:{color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.25rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",activeColor:"{text.muted.color}",activeHoverColor:"{text.muted.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.25rem 1.25rem 1.25rem"},css:({dt:e})=>`
.p-accordionpanel {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: margin ${e("accordion.transition.duration")};
}

.p-accordionpanel-active {
    margin: 1rem 0;
}

.p-accordionpanel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-accordionpanel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var Mc={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.300}",focusColor:"{surface.950}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.600}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},css:({dt:e})=>`
.p-autocomplete-dropdown:focus-visible {
    background: ${e("autocomplete.dropdown.hover.background")}
    border-color: ${e("autocomplete.dropdown.hover.border.color")};
    color: ${e("autocomplete.dropdown.hover.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("autocomplete.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
    outline: 0 none;
    background: ${e("autocomplete.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete-option {
    transition: none;
}

.p-autocomplete:has(.p-variant-filled) .p-autocomplete-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var Lc={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}};var $c={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Pc={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#E8F6F1",100:"#C5EBE1",200:"#9EDFCF",300:"#76D3BD",400:"#58C9AF",500:"#3BBFA1",600:"#35AF94",700:"#2D9B83",800:"#268873",900:"#1A6657",950:"#0d3329"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20",950:"#0e2f10"},lime:{50:"#F9FBE7",100:"#F0F4C3",200:"#E6EE9C",300:"#DCE775",400:"#D4E157",500:"#CDDC39",600:"#C0CA33",700:"#AFB42B",800:"#9E9D24",900:"#827717",950:"#413c0c"},red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C",950:"#5c0e0e"},orange:{50:"#FFF3E0",100:"#FFE0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100",950:"#732900"},amber:{50:"#FFF8E1",100:"#FFECB3",200:"#FFE082",300:"#FFD54F",400:"#FFCA28",500:"#FFC107",600:"#FFB300",700:"#FFA000",800:"#FF8F00",900:"#FF6F00",950:"#803800"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17",950:"#7b400c"},teal:{50:"#E0F2F1",100:"#B2DFDB",200:"#80CBC4",300:"#4DB6AC",400:"#26A69A",500:"#009688",600:"#00897B",700:"#00796B",800:"#00695C",900:"#004D40",950:"#002720"},cyan:{50:"#E0F7FA",100:"#B2EBF2",200:"#80DEEA",300:"#4DD0E1",400:"#26C6DA",500:"#00BCD4",600:"#00ACC1",700:"#0097A7",800:"#00838F",900:"#006064",950:"#003032"},sky:{50:"#E1F5FE",100:"#B3E5FC",200:"#81D4FA",300:"#4FC3F7",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B",950:"#012c4e"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1",950:"#072451"},indigo:{50:"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E",950:"#0d123f"},violet:{50:"#EDE7F6",100:"#D1C4E9",200:"#B39DDB",300:"#9575CD",400:"#7E57C2",500:"#673AB7",600:"#5E35B1",700:"#512DA8",800:"#4527A0",900:"#311B92",950:"#190e49"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C",950:"#250a46"},fuchsia:{50:"#FDE6F3",100:"#FBC1E3",200:"#F897D1",300:"#F56DBF",400:"#F34DB2",500:"#F12DA5",600:"#E0289D",700:"#CC2392",800:"#B81E88",900:"#951777",950:"#4b0c3c"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F",950:"#440728"},rose:{50:"#FFF0F0",100:"#FFD9D9",200:"#FFC0C0",300:"#FFA7A7",400:"#FF8E8E",500:"#FF7575",600:"#FF5252",700:"#FF3838",800:"#F71C1C",900:"#D50000",950:"#3E0000"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"0",style:"none",color:"unset",offset:"0"},disabledOpacity:"0.38",iconSize:"1rem",anchorGutter:"0",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.75rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.625rem"},lg:{fontSize:"1.125rem",paddingX:"0.825rem",paddingY:"0.825rem"},borderRadius:"{border.radius.sm}",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"-2px",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.5rem 0",gap:"0",header:{padding:"0.75rem 1rem"},option:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}"},optionGroup:{padding:"0.75rem 1rem",fontWeight:"700"}},content:{borderRadius:"{border.radius.sm}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.5rem 0",gap:"0"},item:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}",gap:"0.5rem"},submenuLabel:{padding:"0.75rem 1rem",fontWeight:"700"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.sm}",shadow:"0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"},popover:{borderRadius:"{border.radius.sm}",padding:"1rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},modal:{borderRadius:"{border.radius.sm}",padding:"1.5rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},navigation:{shadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"}},colorScheme:{light:{focusRing:{shadow:"0 0 1px 4px {surface.200}"},surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.400}",activeColor:"{primary.300}"},highlight:{background:"color-mix(in srgb, {primary.color}, transparent 88%)",focusBackground:"color-mix(in srgb, {primary.color}, transparent 76%)",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.32)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.300}",filledBackground:"{surface.100}",filledHoverBackground:"{surface.200}",filledFocusBackground:"{surface.100}",borderColor:"{surface.400}",hoverBorderColor:"{surface.900}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.800}",color:"{surface.900}",disabledColor:"{surface.600}",placeholderColor:"{surface.600}",invalidPlaceholderColor:"{red.800}",floatLabelColor:"{surface.600}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.600}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.600}",shadow:"none"},text:{color:"{surface.900}",hoverColor:"{surface.900}",mutedColor:"{surface.600}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.300}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}}},dark:{focusRing:{shadow:"0 0 1px 4px {surface.700}"},surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.700}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.300}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.400}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}};var Nc={root:{borderRadius:"{content.border.radius}"}};var Uc={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}};var zc={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"1rem",paddingY:"0.625rem",iconOnlyWidth:"3rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.400}",activeBackground:"{sky.300}",borderColor:"{sky.500}",hoverBorderColor:"{sky.400}",activeBorderColor:"{sky.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.400}",activeBackground:"{green.300}",borderColor:"{green.500}",hoverBorderColor:"{green.400}",activeBorderColor:"{green.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.400}",activeBackground:"{orange.300}",borderColor:"{orange.500}",hoverBorderColor:"{orange.400}",activeBorderColor:"{orange.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.400}",activeBackground:"{purple.300}",borderColor:"{purple.500}",hoverBorderColor:"{purple.400}",activeBorderColor:"{purple.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.400}",activeBackground:"{red.300}",borderColor:"{red.500}",hoverBorderColor:"{red.400}",activeBorderColor:"{red.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.950}",hoverBorderColor:"{surface.800}",activeBorderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.600}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.500}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.500}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.500}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.500}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.500}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.950}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.900}",color:"{surface.900}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.900}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},css:({dt:e})=>`
.p-button:focus-visible {
    background: ${e("button.primary.active.background")};
    border-color: ${e("button.primary.active.background")};
}

.p-button-secondary:focus-visible {
    background: ${e("button.secondary.active.background")};
    border-color: ${e("button.secondary.active.background")};
}

.p-button-success:focus-visible {
    background: ${e("button.success.active.background")};
    border-color: ${e("button.success.active.background")};
}

.p-button-info:focus-visible {
    background: ${e("button.info.active.background")};
    border-color: ${e("button.info.active.background")};
}

.p-button-warn:focus-visible {
    background: ${e("button.warn.active.background")};
    border-color: ${e("button.warn.active.background")};
}

.p-button-help:focus-visible {
    background: ${e("button.help.active.background")};
    border-color: ${e("button.help.active.background")};
}

.p-button-danger:focus-visible {
    background: ${e("button.danger.active.background")};
    border-color: ${e("button.danger.active.background")};
}

.p-button-contrast:focus-visible {
    background: ${e("button.contrast.active.background")};
    border-color: ${e("button.contrast.active.background")};
}

.p-button-link:focus-visible {
    background: color-mix(in srgb, ${e("primary.color")}, transparent 84%);
    border-color: transparent;
}

.p-button-text:focus-visible {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
}

.p-button-secondary.p-button-text:focus-visible {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
}

.p-button-success.p-button-text:focus-visible {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
}

.p-button-info.p-button-text:focus-visible {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
}

.p-button-warn.p-button-text:focus-visible {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
}

.p-button-help.p-button-text:focus-visible {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
}

.p-button-danger.p-button-text:focus-visible {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
}

.p-button-contrast.p-button-text:focus-visible {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
}

.p-button-plain.p-button-text:focus-visible {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
}

.p-button-outlined:focus-visible {
    background: ${e("button.outlined.primary.active.background")};
}

.p-button-secondary.p-button-outlined:focus-visible {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
}

.p-button-success.p-button-outlined:focus-visible {
    background: ${e("button.outlined.success.active.background")};
}

.p-button-info.p-button-outlined:focus-visible {
    background: ${e("button.outlined.info.active.background")};
}

.p-button-warn.p-button-outlined:focus-visible {
    background: ${e("button.outlined.warn.active.background")};
}

.p-button-help.p-button-outlined:focus-visible {
    background: ${e("button.outlined.help.active.background")};
}

.p-button-danger.p-button-outlined:focus-visible {
    background: ${e("button.outlined.danger.active.background")};
}

.p-button-contrast.p-button-outlined:focus-visible {
    background: ${e("button.outlined.contrast.active.background")};
}

.p-button-plain.p-button-outlined:focus-visible {
    background: ${e("button.outlined.plain.active.background")};
}
`};var jc={root:{background:"{content.background}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"},body:{padding:"1.5rem",gap:"0.75rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}};var Hc={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"1rem"},indicator:{width:"1.25rem",height:"1.25rem",borderRadius:"50%",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},css:({dt:e})=>`
.p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%)
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 92%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 84%);
}
`};var Wc={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-cascadeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("cascadeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("cascadeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("cascadeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect-option {
    transition: none;
}
`};var Vc={root:{borderRadius:"{border.radius.xs}",width:"18px",height:"18px",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"14px",height:"14px"},lg:{width:"22px",height:"22px"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},css:({dt:e})=>`
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow ${e("checkbox.transition.duration")};
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`};var Gc={root:{borderRadius:"2rem",paddingX:"0.75rem",paddingY:"0.75rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2.25rem",height:"2.25rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}"}},colorScheme:{light:{root:{background:"{surface.200}",color:"{surface.900}"},icon:{color:"{surface.600}"},removeIcon:{color:"{surface.600}",focusRing:{shadow:"0 0 1px 4px {surface.300}"}}},dark:{root:{background:"{surface.700}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}",focusRing:{shadow:"0 0 1px 4px {surface.600}"}}}}};var qc={root:{transitionDuration:"{transition.duration}"},preview:{width:"2rem",height:"2rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}};var Yc={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}};var Kc={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}};var Zc={root:{background:"{content.background}",borderColor:"transparent",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var Xc={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-datatable-header-cell,
.p-datatable-tbody > tr {
    transition: none
}
`};var Jc={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}};var Qc={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"0.5rem"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"700"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"n\u0131ne"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.5rem",fontWeight:"700",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",padding:"0.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.625rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.625rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},css:({dt:e})=>`
.p-datepicker-header {
    justify-content: start
}

.p-datepicker-title {
    order: 1;
}

.p-datepicker-prev-button {
    order: 2;
    margin-inline-start: auto;
}

.p-datepicker-next-button {
    order: 2;
    margin-inline-start: 0.5rem;
}

.p-datepicker-select-month:focus-visible {
    background: ${e("datepicker.select.month.hover.background")};
    color: ${e("datepicker.select.month.hover.color")};
    outline: 0 none;
}

.p-datepicker-select-year:focus-visible {
    background: ${e("datepicker.select.year.hover.background")};
    color: ${e("datepicker.select.year.hover.color")};
    outline: 0 none;
}

.p-datepicker-dropdown:focus-visible {
    outline: 0 none;
    background: ${e("datepicker.dropdown.hover.background")};
    border-color: ${e("datepicker.dropdown.hover.border.color")};
    color: ${e("datepicker.dropdown.hover.color")};
}

.p-datepicker:has(.p-variant-filled) .p-datepicker-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var el={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}};var tl={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}};var rl={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var ol={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}};var nl={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},css:({dt:e})=>`
.p-editor .p-editor-toolbar {
    padding: 0.75rem
}
`};var il={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.25rem 1.25rem 1.25rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.75rem 1rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"},css:({dt:e})=>`
.p-fieldset-toggle-button:focus-visible {
    background: ${e("navigation.item.active.background")}

}
`};var al={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.25rem 1.25rem 1.25rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}};var sl={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"},active:{top:"0.5rem"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}};var cl={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"50%",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}};var ll={icon:{color:"{form.field.icon.color}"}};var dl={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"0.5rem",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"}};var ul={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var pl={handle:{size:"20px",hoverSize:"40px",background:"rgba(255,255,255,0.4)",hoverBackground:"rgba(255,255,255,0.6)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var fl={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}};var hl={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}};var gl={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}};var ml={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.75rem",minWidth:"3rem"},css:({dt:e})=>`
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
    `};var bl={root:{transitionDuration:"{transition.duration}"},button:{width:"3rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},css:({dt:e})=>`
.p-inputnumber-stacked .p-inputnumber-button-group {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
}

.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
} 
    
.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {
    border-block-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
} 

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {
    border-block-end: 1px solid ${e("inputtext.border.color")}
}
`};var vl={root:{gap:"0.5rem"},input:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"}}};var yl={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-inputtext.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("inputtext.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("inputtext.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}
`};var Cl={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}};var wl={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},css:({dt:e})=>`
.p-listbox-option {
    transition: none
}
`};var Dl={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-megamenu-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var kl={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-menu-overlay {
    border-color: transparent
}
`};var Sl={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-menubar-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var xl={root:{borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},content:{padding:"1rem 1.25rem",gap:"0.5rem",sm:{padding:"0.625rem 0.625rem"},lg:{padding:"0.825rem 0.825rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.25rem",sm:{size:"1rem"},lg:{size:"1.5rem"}},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"none",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"none",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.900}",shadow:"none",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.900}",borderColor:"{yellow.900}"},simple:{color:"{yellow.900}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"none",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.600}",borderColor:"{surface.600}"},simple:{color:"{surface.600}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"none",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"none",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}};var El={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}};var Rl={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.75rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-multiselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("multiselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("multiselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("multiselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect-option {
    transition: none;
}
`};var _l={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var Al={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"1rem 1.25rem",toggleablePadding:"1rem 1.25rem 1.5rem 1.25rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}};var Tl={root:{outline:{width:"2px",color:"{content.background}"}}};var Il={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}};var Fl={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.5rem 1.25rem"},title:{fontWeight:"600"},content:{padding:"0 1.25rem 1.25rem 1.25rem"},footer:{padding:"0 1.25rem 1.25rem 1.25rem"}};var Ol={root:{gap:"0",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"0",color:"{content.color}",padding:"0",borderRadius:"0",first:{borderWidth:"0",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},css:({dt:e})=>`
.p-panelmenu-panel {
    box-shadow: 0 0 0 1px ${e("panelmenu.panel.border.color")}
    transition: margin ${e("panelmenu.transition.duration")};
}

.p-panelmenu-panel:has(.p-panelmenu-header-active) {
    margin: 1rem 0;
}

.p-panelmenu-panel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-panelmenu-panel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var Bl={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}};var Ml={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var Ll={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}};var $l={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}};var Pl={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}};var Nl={root:{width:"20px",height:"20px",background:"{form.field.background}",checkedBackground:"{primary.contrast.color}",checkedHoverBackground:"{primary.contrast.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"16px",height:"16px"},lg:{width:"24px",height:"24px"}},icon:{size:"10px",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"8px"},lg:{size:"12px"}},css:({dt:e})=>`
.p-radiobutton {
    border-radius: 50%;
    transition: box-shadow ${e("radiobutton.transition.duration")};
}

.p-radiobutton-box {
    border-width: 2px;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 92%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 84%);
}
`};var Ul={root:{gap:"0.5rem",transitionDuration:"{transition.duration}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},icon:{size:"1.125rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},css:({dt:e})=>`
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {
    background: color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%)
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%);
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
}

.p-rating-option.p-focus-visible {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
}
`};var zl={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}};var jl={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}}};var Hl={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-select.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("select.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${e("select.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("select.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
}

.p-select.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select-option {
    transition: none;
}
`};var Wl={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}};var Vl={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}};var Gl={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{border.radius.xs}",size:"2px"},range:{background:"{primary.color}"},handle:{width:"18px",height:"18px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",contentBackground:"{primary.color}",hoverBackground:"{primary.color}",width:"18px",height:"18px",shadow:"0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"},focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-slider-handle {
    transition: box-shadow ${e("slider.transition.duration")}
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 92%);
}

.p-slider-handle:focus-visible,
.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 84%);
}
`};var ql={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}};var Yl={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}};var Kl={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Zl={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0.75rem 1rem",borderRadius:"{content.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{text.color}",fontWeight:"500"},stepNumber:{activeBackground:"{primary.color}",activeBorderColor:"{primary.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},colorScheme:{light:{stepNumber:{background:"{surface.400}",borderColor:"{surface.400}",color:"{surface.0}"}},dark:{stepNumber:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.900}"}}},css:({dt:e})=>`
.p-step-header:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var Xl={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}};var Jl={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}};var Ql={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"{content.hover.background}",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"1.25rem 1.25rem 1.25rem 1.25rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"3rem",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},activeBar:{height:"2px",bottom:"-1px",background:"{primary.color}"},css:({dt:e})=>`


.p-tabs-scrollable .p-tab {
    flex-grow: 0
}

.p-tab-active {
    --p-ripple-background: color-mix(in srgb, ${e("primary.color")}, transparent 90%)
}

.p-tab:not(.p-disabled):focus-visible {
    background: ${e("navigation.item.active.background")};
}

.p-tablist-nav-button:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var ed={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var td={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var rd={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}};var od={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-textarea.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("textarea.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("textarea.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
}

.p-textarea.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}

.p-textarea.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}
`};var nd={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-tieredmenu-overlay {
    border-color: transparent
}
`};var id={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.5rem",borderRadius:"50%",borderWidth:"2px",background:"{primary.color}",content:{borderRadius:"50%",size:"0",background:"{primary.color}",insetShadow:"none"}},eventConnector:{color:"{content.border.color}",size:"2px"},colorScheme:{light:{eventMarker:{borderColor:"{surface.0}"}},dark:{eventMarker:{borderColor:"{surface.900}"}}}};var ad={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},icon:{size:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"0",info:{background:"{blue.50}",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"{green.50}",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"{yellow.50}",borderColor:"{yellow.200}",color:"{yellow.900}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"{red.50}",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 36%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{surface.0}",detailColor:"{blue.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 36%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{surface.0}",detailColor:"{green.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 36%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{surface.0}",detailColor:"{yellow.50}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 36%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{surface.0}",detailColor:"{red.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}};var sd={root:{padding:"0.75rem 1rem",borderRadius:"{form.field.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedColor:"{form.field.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"0",style:"none",offset:"0",color:"unset",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.625rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.875rem 1.25rem"}},icon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{text.muted.color}",disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedBackground:"transparent",checkedShadow:"none"},colorScheme:{light:{root:{hoverBackground:"{surface.100}",checkedBackground:"{surface.200}"}},dark:{root:{hoverBackground:"{surface.800}",checkedBackground:"{surface.700}"}}},css:({dt:e})=>`
.p-togglebutton:focus-visible {
    background: ${e("togglebutton.hover.background")}
}
`};var cd={root:{width:"2.75rem",height:"1rem",borderRadius:"30px",gap:"0px",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1.5rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}"},handle:{background:"{surface.0}",disabledBackground:"{surface.200}",hoverBackground:"{surface.0}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.700}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.500}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}",color:"{surface.800}",hoverColor:"{surface.900}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}}},css:({dt:e})=>`
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`};var ld={root:{color:"{content.color}",borderRadius:"{content.border.radius}",gap:"0.5rem",padding:"1rem"},colorScheme:{light:{root:{background:"{surface.100}",borderColor:"{surface.100}"}},dark:{root:{root:{background:"{surface.800}",borderColor:"{surface.800}"}}}}};var dd={root:{background:"{surface.600}",color:"{surface.0}",maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"}};var ud={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"2rem",transitionDuration:"{transition.duration}"},node:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.xs}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"2rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.75rem 0"},css:({dt:e})=>`
.p-tree-node-content {
    transition: none
}
`};var pd={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-treeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("treeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("treeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("treeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}
`};var fd={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-treetable-header-cell,
.p-treetable-tbody > tr {
    transition: none
}
`};var hd={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};var gd=V(g({},Pc),{components:{accordion:Bc,autocomplete:Mc,avatar:Lc,badge:$c,blockui:Nc,breadcrumb:Uc,button:zc,datepicker:Qc,card:jc,carousel:Hc,cascadeselect:Wc,checkbox:Vc,chip:Gc,colorpicker:qc,confirmdialog:Yc,confirmpopup:Kc,contextmenu:Zc,dataview:Jc,datatable:Xc,dialog:el,divider:tl,dock:rl,drawer:ol,editor:nl,fieldset:il,fileupload:al,iftalabel:dl,floatlabel:sl,galleria:cl,iconfield:ll,image:ul,imagecompare:pl,inlinemessage:fl,inplace:hl,inputchips:gl,inputgroup:ml,inputnumber:bl,inputotp:vl,inputtext:yl,knob:Cl,listbox:wl,megamenu:Dl,menu:kl,menubar:Sl,message:xl,metergroup:El,multiselect:Rl,orderlist:_l,organizationchart:Al,overlaybadge:Tl,popover:Ll,paginator:Il,password:Bl,panel:Fl,panelmenu:Ol,picklist:Ml,progressbar:$l,progressspinner:Pl,radiobutton:Nl,rating:Ul,scrollpanel:jl,select:Hl,selectbutton:Wl,skeleton:Vl,slider:Gl,speeddial:ql,splitter:Kl,splitbutton:Yl,stepper:Zl,steps:Xl,tabmenu:Jl,tabs:Ql,tabview:ed,textarea:od,tieredmenu:nd,tag:td,terminal:rd,timeline:id,togglebutton:sd,toggleswitch:cd,tree:ud,treeselect:pd,treetable:fd,toast:ad,toolbar:ld,virtualscroller:hd,tooltip:dd,ripple:zl},css:({dt:e})=>`

    `});var md={providers:[Ca({eventCoalescing:!0}),xi(Fc),Kn(Zn()),Oc(),yc({theme:{preset:gd},ripple:!0,inputVariant:"filled",zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}})]};Hn(on,md).catch(e=>console.error(e));
