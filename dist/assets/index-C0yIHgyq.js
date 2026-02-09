function zp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Eu={exports:{}},yo={},Lu={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),_p=Symbol.for("react.portal"),Ip=Symbol.for("react.fragment"),Mp=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),Kp=Symbol.for("react.memo"),Yp=Symbol.for("react.lazy"),Cl=Symbol.iterator;function Gp(e){return e===null||typeof e!="object"?null:(e=Cl&&e[Cl]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ru=Object.assign,Ou={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Tu}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Au(){}Au.prototype=Kn.prototype;function Cs(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Tu}var Ps=Cs.prototype=new Au;Ps.constructor=Cs;Ru(Ps,Kn.prototype);Ps.isPureReactComponent=!0;var Pl=Array.isArray,$u=Object.prototype.hasOwnProperty,Es={current:null},Fu={key:!0,ref:!0,__self:!0,__source:!0};function zu(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)$u.call(t,r)&&!Fu.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Yr,type:e,key:o,ref:a,props:i,_owner:Es.current}}function Qp(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function Jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var El=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jp(""+e.key):t.toString(36)}function Ni(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yr:case _p:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ho(a,0):r,Pl(i)?(n="",e!=null&&(n=e.replace(El,"$&/")+"/"),Ni(i,t,n,"",function(u){return u})):i!=null&&(Ls(i)&&(i=Qp(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(El,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Pl(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Ho(o,s);a+=Ni(o,t,n,c,i)}else if(c=Gp(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Ho(o,s++),a+=Ni(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ri(e,t,n){if(e==null)return e;var r=[],i=0;return Ni(e,r,"","",function(o){return t.call(n,o,i++)}),r}function qp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},ji={transition:null},Xp={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ji,ReactCurrentOwner:Es};function Du(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:ri,forEach:function(e,t,n){ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ri(e,function(){t++}),t},toArray:function(e){return ri(e,function(t){return t})||[]},only:function(e){if(!Ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Kn;B.Fragment=Ip;B.Profiler=Up;B.PureComponent=Cs;B.StrictMode=Mp;B.Suspense=Wp;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xp;B.act=Du;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ru({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Es.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)$u.call(t,c)&&!Fu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Yr,type:e.type,key:i,ref:o,props:r,_owner:a}};B.createContext=function(e){return e={$$typeof:Hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bp,_context:e},e.Consumer=e};B.createElement=zu;B.createFactory=function(e){var t=zu.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Vp,render:e}};B.isValidElement=Ls;B.lazy=function(e){return{$$typeof:Yp,_payload:{_status:-1,_result:e},_init:qp}};B.memo=function(e,t){return{$$typeof:Kp,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=ji.transition;ji.transition={};try{e()}finally{ji.transition=t}};B.unstable_act=Du;B.useCallback=function(e,t){return je.current.useCallback(e,t)};B.useContext=function(e){return je.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return je.current.useDeferredValue(e)};B.useEffect=function(e,t){return je.current.useEffect(e,t)};B.useId=function(){return je.current.useId()};B.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return je.current.useMemo(e,t)};B.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};B.useRef=function(e){return je.current.useRef(e)};B.useState=function(e){return je.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return je.current.useTransition()};B.version="18.3.1";Lu.exports=B;var S=Lu.exports;const xt=Dp(S),Zp=zp({__proto__:null,default:xt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh=S,th=Symbol.for("react.element"),nh=Symbol.for("react.fragment"),rh=Object.prototype.hasOwnProperty,ih=eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oh={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)rh.call(t,r)&&!oh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:th,type:e,key:o,ref:a,props:i,_owner:ih.current}}yo.Fragment=nh;yo.jsx=_u;yo.jsxs=_u;Eu.exports=yo;var l=Eu.exports,Iu={exports:{}},Ue={},Mu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,T){var j=O.length;O.push(T);e:for(;0<j;){var $=j-1>>>1,z=O[$];if(0<i(z,T))O[$]=T,O[j]=z,j=$;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var T=O[0],j=O.pop();if(j!==T){O[0]=j;e:for(var $=0,z=O.length,Q=z>>>1;$<Q;){var Y=2*($+1)-1,ue=O[Y],Pe=Y+1,ni=O[Pe];if(0>i(ue,j))Pe<z&&0>i(ni,ue)?(O[$]=ni,O[Pe]=j,$=Pe):(O[$]=ue,O[Y]=j,$=Y);else if(Pe<z&&0>i(ni,j))O[$]=ni,O[Pe]=j,$=Pe;else break e}}return T}function i(O,T){var j=O.sortIndex-T.sortIndex;return j!==0?j:O.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],d=1,f=null,m=3,x=!1,p=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=O)r(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(u)}}function b(O){if(v=!1,y(O),!p)if(n(c)!==null)p=!0,I(N);else{var T=n(u);T!==null&&G(b,T.startTime-O)}}function N(O,T){p=!1,v&&(v=!1,g(E),E=-1),x=!0;var j=m;try{for(y(T),f=n(c);f!==null&&(!(f.expirationTime>T)||O&&!U());){var $=f.callback;if(typeof $=="function"){f.callback=null,m=f.priorityLevel;var z=$(f.expirationTime<=T);T=e.unstable_now(),typeof z=="function"?f.callback=z:f===n(c)&&r(c),y(T)}else r(c);f=n(c)}if(f!==null)var Q=!0;else{var Y=n(u);Y!==null&&G(b,Y.startTime-T),Q=!1}return Q}finally{f=null,m=j,x=!1}}var P=!1,C=null,E=-1,R=5,A=-1;function U(){return!(e.unstable_now()-A<R)}function _(){if(C!==null){var O=e.unstable_now();A=O;var T=!0;try{T=C(!0,O)}finally{T?W():(P=!1,C=null)}}else P=!1}var W;if(typeof h=="function")W=function(){h(_)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,pe=H.port2;H.port1.onmessage=_,W=function(){pe.postMessage(null)}}else W=function(){w(_,0)};function I(O){C=O,P||(P=!0,W())}function G(O,T){E=w(function(){O(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){p||x||(p=!0,I(N))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var j=m;m=T;try{return O()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,T){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=m;m=O;try{return T()}finally{m=j}},e.unstable_scheduleCallback=function(O,T,j){var $=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?$+j:$):j=$,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=j+z,O={id:d++,callback:T,priorityLevel:O,startTime:j,expirationTime:z,sortIndex:-1},j>$?(O.sortIndex=j,t(u,O),n(c)===null&&O===n(u)&&(v?(g(E),E=-1):v=!0,G(b,j-$))):(O.sortIndex=z,t(c,O),p||x||(p=!0,I(N))),O},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(O){var T=m;return function(){var j=m;m=T;try{return O.apply(this,arguments)}finally{m=j}}}})(Uu);Mu.exports=Uu;var ah=Mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh=S,Me=ah;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bu=new Set,Cr={};function fn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(Cr[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,lh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ll={},Tl={};function ch(e){return wa.call(Tl,e)?!0:wa.call(Ll,e)?!1:lh.test(e)?Tl[e]=!0:(Ll[e]=!0,!1)}function uh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dh(e,t,n,r){if(t===null||typeof t>"u"||uh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ts=/[\-:]([a-z])/g;function Rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ts,Rs);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ts,Rs);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ts,Rs);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Os(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dh(t,n,i,r)&&(n=null),r||i===null?ch(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kt=sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),yn=Symbol.for("react.portal"),vn=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Vu=Symbol.for("react.context"),$s=Symbol.for("react.forward_ref"),Sa=Symbol.for("react.suspense"),ka=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Wu=Symbol.for("react.offscreen"),Rl=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Rl&&e[Rl]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Vo;function fr(e){if(Vo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vo=t&&t[1]||""}return`
`+Vo+e}var Wo=!1;function Ko(e,t){if(!e||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fr(e):""}function fh(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function Na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vn:return"Fragment";case yn:return"Portal";case ba:return"Profiler";case As:return"StrictMode";case Sa:return"Suspense";case ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vu:return(e.displayName||"Context")+".Consumer";case Hu:return(e._context.displayName||"Context")+".Provider";case $s:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}function ph(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Na(t);case 8:return t===As?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hh(e){var t=Ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oi(e){e._valueTracker||(e._valueTracker=hh(e))}function Yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ku(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ol(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gu(e,t){t=t.checked,t!=null&&Os(e,"checked",t,!1)}function Ca(e,t){Gu(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pa(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Al(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pa(e,t,n){(t!=="number"||Ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $l(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(pr(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Qu(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function La(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gh=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){gh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function Xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function Zu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var mh=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(mh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oa=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,Rn=null,On=null;function zl(e){if(e=Jr(e)){if(typeof Aa!="function")throw Error(L(280));var t=e.stateNode;t&&(t=ko(t),Aa(e.stateNode,e.type,t))}}function ed(e){Rn?On?On.push(e):On=[e]:Rn=e}function td(){if(Rn){var e=Rn,t=On;if(On=Rn=null,zl(e),t)for(e=0;e<t.length;e++)zl(t[e])}}function nd(e,t){return e(t)}function rd(){}var Yo=!1;function id(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return nd(e,t,n)}finally{Yo=!1,(Rn!==null||On!==null)&&(rd(),td())}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var r=ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var $a=!1;if(vt)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){$a=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{$a=!1}function xh(e,t,n,r,i,o,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var xr=!1,Mi=null,Ui=!1,Fa=null,yh={onError:function(e){xr=!0,Mi=e}};function vh(e,t,n,r,i,o,a,s,c){xr=!1,Mi=null,xh.apply(yh,arguments)}function wh(e,t,n,r,i,o,a,s,c){if(vh.apply(this,arguments),xr){if(xr){var u=Mi;xr=!1,Mi=null}else throw Error(L(198));Ui||(Ui=!0,Fa=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function od(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dl(e){if(pn(e)!==e)throw Error(L(188))}function bh(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dl(i),e;if(o===r)return Dl(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function ad(e){return e=bh(e),e!==null?sd(e):null}function sd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sd(e);if(t!==null)return t;e=e.sibling}return null}var ld=Me.unstable_scheduleCallback,_l=Me.unstable_cancelCallback,Sh=Me.unstable_shouldYield,kh=Me.unstable_requestPaint,oe=Me.unstable_now,Nh=Me.unstable_getCurrentPriorityLevel,Ds=Me.unstable_ImmediatePriority,cd=Me.unstable_UserBlockingPriority,Bi=Me.unstable_NormalPriority,jh=Me.unstable_LowPriority,ud=Me.unstable_IdlePriority,vo=null,ct=null;function Ch(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Lh,Ph=Math.log,Eh=Math.LN2;function Lh(e){return e>>>=0,e===0?32:31-(Ph(e)/Eh|0)|0}var si=64,li=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=hr(s):(o&=a,o!==0&&(r=hr(o)))}else a=n&~i,a!==0?r=hr(a):o!==0&&(r=hr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function Th(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-et(o),s=1<<a,c=i[a];c===-1?(!(s&n)||s&r)&&(i[a]=Th(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dd(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Oh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function _s(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function fd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pd,Is,hd,gd,md,Da=!1,ci=[],$t=null,Ft=null,zt=null,Lr=new Map,Tr=new Map,Lt=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Il(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&Is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $h(e,t,n,r,i){switch(t){case"focusin":return $t=rr($t,e,t,n,r,i),!0;case"dragenter":return Ft=rr(Ft,e,t,n,r,i),!0;case"mouseover":return zt=rr(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Lr.set(o,rr(Lr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Tr.set(o,rr(Tr.get(o)||null,e,t,n,r,i)),!0}return!1}function xd(e){var t=qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=od(n),t!==null){e.blockedOn=t,md(e.priority,function(){hd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oa=r,n.target.dispatchEvent(r),Oa=null}else return t=Jr(n),t!==null&&Is(t),e.blockedOn=n,!1;t.shift()}return!0}function Ml(e,t,n){Ci(e)&&n.delete(t)}function Fh(){Da=!1,$t!==null&&Ci($t)&&($t=null),Ft!==null&&Ci(Ft)&&(Ft=null),zt!==null&&Ci(zt)&&(zt=null),Lr.forEach(Ml),Tr.forEach(Ml)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Da||(Da=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Fh)))}function Rr(e){function t(i){return ir(i,e)}if(0<ci.length){ir(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&ir($t,e),Ft!==null&&ir(Ft,e),zt!==null&&ir(zt,e),Lr.forEach(t),Tr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)xd(n),n.blockedOn===null&&Lt.shift()}var An=kt.ReactCurrentBatchConfig,Vi=!0;function zh(e,t,n,r){var i=K,o=An.transition;An.transition=null;try{K=1,Ms(e,t,n,r)}finally{K=i,An.transition=o}}function Dh(e,t,n,r){var i=K,o=An.transition;An.transition=null;try{K=4,Ms(e,t,n,r)}finally{K=i,An.transition=o}}function Ms(e,t,n,r){if(Vi){var i=_a(e,t,n,r);if(i===null)ia(e,t,r,Wi,n),Il(e,r);else if($h(i,e,t,n,r))r.stopPropagation();else if(Il(e,r),t&4&&-1<Ah.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&pd(o),o=_a(e,t,n,r),o===null&&ia(e,t,r,Wi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ia(e,t,r,null,n)}}var Wi=null;function _a(e,t,n,r){if(Wi=null,e=zs(r),e=qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=od(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wi=e,null}function yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nh()){case Ds:return 1;case cd:return 4;case Bi:case jh:return 16;case ud:return 536870912;default:return 16}default:return 16}}var Rt=null,Us=null,Pi=null;function vd(){if(Pi)return Pi;var e,t=Us,n=t.length,r,i="value"in Rt?Rt.value:Rt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Pi=i.slice(e,1<r?1-r:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Ul(){return!1}function Be(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:Ul,this.isPropagationStopped=Ul,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bs=Be(Yn),Qr=ne({},Yn,{view:0,detail:0}),_h=Be(Qr),Qo,Jo,or,wo=ne({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Qo=e.screenX-or.screenX,Jo=e.screenY-or.screenY):Jo=Qo=0,or=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),Bl=Be(wo),Ih=ne({},wo,{dataTransfer:0}),Mh=Be(Ih),Uh=ne({},Qr,{relatedTarget:0}),qo=Be(Uh),Bh=ne({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hh=Be(Bh),Vh=ne({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wh=Be(Vh),Kh=ne({},Yn,{data:0}),Hl=Be(Kh),Yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qh[e])?!!t[e]:!1}function Hs(){return Jh}var qh=ne({},Qr,{key:function(e){if(e.key){var t=Yh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=Be(qh),Zh=ne({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=Be(Zh),eg=ne({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),tg=Be(eg),ng=ne({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),rg=Be(ng),ig=ne({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Be(ig),ag=[9,13,27,32],Vs=vt&&"CompositionEvent"in window,yr=null;vt&&"documentMode"in document&&(yr=document.documentMode);var sg=vt&&"TextEvent"in window&&!yr,wd=vt&&(!Vs||yr&&8<yr&&11>=yr),Wl=" ",Kl=!1;function bd(e,t){switch(e){case"keyup":return ag.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function lg(e,t){switch(e){case"compositionend":return Sd(t);case"keypress":return t.which!==32?null:(Kl=!0,Wl);case"textInput":return e=t.data,e===Wl&&Kl?null:e;default:return null}}function cg(e,t){if(wn)return e==="compositionend"||!Vs&&bd(e,t)?(e=vd(),Pi=Us=Rt=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wd&&t.locale!=="ko"?null:t.data;default:return null}}var ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ug[e.type]:t==="textarea"}function kd(e,t,n,r){ed(r),t=Ki(t,"onChange"),0<t.length&&(n=new Bs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Or=null;function dg(e){$d(e,0)}function bo(e){var t=kn(e);if(Yu(t))return e}function fg(e,t){if(e==="change")return t}var Nd=!1;if(vt){var Xo;if(vt){var Zo="oninput"in document;if(!Zo){var Gl=document.createElement("div");Gl.setAttribute("oninput","return;"),Zo=typeof Gl.oninput=="function"}Xo=Zo}else Xo=!1;Nd=Xo&&(!document.documentMode||9<document.documentMode)}function Ql(){vr&&(vr.detachEvent("onpropertychange",jd),Or=vr=null)}function jd(e){if(e.propertyName==="value"&&bo(Or)){var t=[];kd(t,Or,e,zs(e)),id(dg,t)}}function pg(e,t,n){e==="focusin"?(Ql(),vr=t,Or=n,vr.attachEvent("onpropertychange",jd)):e==="focusout"&&Ql()}function hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(Or)}function gg(e,t){if(e==="click")return bo(t)}function mg(e,t){if(e==="input"||e==="change")return bo(t)}function xg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:xg;function Ar(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wa.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Jl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ql(e,t){var n=Jl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jl(n)}}function Cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pd(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function Ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yg(e){var t=Pd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cd(n.ownerDocument.documentElement,n)){if(r!==null&&Ws(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ql(n,o);var a=ql(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vg=vt&&"documentMode"in document&&11>=document.documentMode,bn=null,Ia=null,wr=null,Ma=!1;function Xl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||bn==null||bn!==Ii(r)||(r=bn,"selectionStart"in r&&Ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Ar(wr,r)||(wr=r,r=Ki(Ia,"onSelect"),0<r.length&&(t=new Bs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},ea={},Ed={};vt&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function So(e){if(ea[e])return ea[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ed)return ea[e]=t[n];return e}var Ld=So("animationend"),Td=So("animationiteration"),Rd=So("animationstart"),Od=So("transitionend"),Ad=new Map,Zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Ad.set(e,t),fn(t,[e])}for(var ta=0;ta<Zl.length;ta++){var na=Zl[ta],wg=na.toLowerCase(),bg=na[0].toUpperCase()+na.slice(1);Wt(wg,"on"+bg)}Wt(Ld,"onAnimationEnd");Wt(Td,"onAnimationIteration");Wt(Rd,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(Od,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sg=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function ec(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wh(r,t,void 0,e),e.currentTarget=null}function $d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;ec(i,s,u),o=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;ec(i,s,u),o=c}}}if(Ui)throw e=Fa,Ui=!1,Fa=null,e}function q(e,t){var n=t[Wa];n===void 0&&(n=t[Wa]=new Set);var r=e+"__bubble";n.has(r)||(Fd(t,e,2,!1),n.add(r))}function ra(e,t,n){var r=0;t&&(r|=4),Fd(n,e,r,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[fi]){e[fi]=!0,Bu.forEach(function(n){n!=="selectionchange"&&(Sg.has(n)||ra(n,!1,e),ra(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,ra("selectionchange",!1,t))}}function Fd(e,t,n,r){switch(yd(t)){case 1:var i=zh;break;case 4:i=Dh;break;default:i=Ms}n=i.bind(null,t,n,e),i=void 0,!$a||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ia(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;s!==null;){if(a=qt(s),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}s=s.parentNode}}r=r.return}id(function(){var u=o,d=zs(n),f=[];e:{var m=Ad.get(e);if(m!==void 0){var x=Bs,p=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":x=Xh;break;case"focusin":p="focus",x=qo;break;case"focusout":p="blur",x=qo;break;case"beforeblur":case"afterblur":x=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Bl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=tg;break;case Ld:case Td:case Rd:x=Hh;break;case Od:x=rg;break;case"scroll":x=_h;break;case"wheel":x=og;break;case"copy":case"cut":case"paste":x=Wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Vl}var v=(t&4)!==0,w=!v&&e==="scroll",g=v?m!==null?m+"Capture":null:m;v=[];for(var h=u,y;h!==null;){y=h;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,g!==null&&(b=Er(h,g),b!=null&&v.push(Fr(h,b,y)))),w)break;h=h.return}0<v.length&&(m=new x(m,p,null,n,d),f.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Oa&&(p=n.relatedTarget||n.fromElement)&&(qt(p)||p[wt]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(p=n.relatedTarget||n.toElement,x=u,p=p?qt(p):null,p!==null&&(w=pn(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(x=null,p=u),x!==p)){if(v=Bl,b="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Vl,b="onPointerLeave",g="onPointerEnter",h="pointer"),w=x==null?m:kn(x),y=p==null?m:kn(p),m=new v(b,h+"leave",x,n,d),m.target=w,m.relatedTarget=y,b=null,qt(d)===u&&(v=new v(g,h+"enter",p,n,d),v.target=y,v.relatedTarget=w,b=v),w=b,x&&p)t:{for(v=x,g=p,h=0,y=v;y;y=mn(y))h++;for(y=0,b=g;b;b=mn(b))y++;for(;0<h-y;)v=mn(v),h--;for(;0<y-h;)g=mn(g),y--;for(;h--;){if(v===g||g!==null&&v===g.alternate)break t;v=mn(v),g=mn(g)}v=null}else v=null;x!==null&&tc(f,m,x,v,!1),p!==null&&w!==null&&tc(f,w,p,v,!0)}}e:{if(m=u?kn(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var N=fg;else if(Yl(m))if(Nd)N=mg;else{N=hg;var P=pg}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=gg);if(N&&(N=N(e,u))){kd(f,N,n,d);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Pa(m,"number",m.value)}switch(P=u?kn(u):window,e){case"focusin":(Yl(P)||P.contentEditable==="true")&&(bn=P,Ia=u,wr=null);break;case"focusout":wr=Ia=bn=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,Xl(f,n,d);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":Xl(f,n,d)}var C;if(Vs)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else wn?bd(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(wd&&n.locale!=="ko"&&(wn||E!=="onCompositionStart"?E==="onCompositionEnd"&&wn&&(C=vd()):(Rt=d,Us="value"in Rt?Rt.value:Rt.textContent,wn=!0)),P=Ki(u,E),0<P.length&&(E=new Hl(E,e,null,n,d),f.push({event:E,listeners:P}),C?E.data=C:(C=Sd(n),C!==null&&(E.data=C)))),(C=sg?lg(e,n):cg(e,n))&&(u=Ki(u,"onBeforeInput"),0<u.length&&(d=new Hl("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}$d(f,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Er(e,n),o!=null&&r.unshift(Fr(e,o,i)),o=Er(e,t),o!=null&&r.push(Fr(e,o,i))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Er(n,o),c!=null&&a.unshift(Fr(n,c,s))):i||(c=Er(n,o),c!=null&&a.push(Fr(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var kg=/\r\n?/g,Ng=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(Ng,"")}function pi(e,t,n){if(t=nc(t),nc(e)!==t&&n)throw Error(L(425))}function Yi(){}var Ua=null,Ba=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,jg=typeof clearTimeout=="function"?clearTimeout:void 0,rc=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof rc<"u"?function(e){return rc.resolve(null).then(e).catch(Pg)}:Va;function Pg(e){setTimeout(function(){throw e})}function oa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rr(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),st="__reactFiber$"+Gn,zr="__reactProps$"+Gn,wt="__reactContainer$"+Gn,Wa="__reactEvents$"+Gn,Eg="__reactListeners$"+Gn,Lg="__reactHandles$"+Gn;function qt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ic(e);e!==null;){if(n=e[st])return n;e=ic(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[st]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function ko(e){return e[zr]||null}var Ka=[],Nn=-1;function Kt(e){return{current:e}}function X(e){0>Nn||(e.current=Ka[Nn],Ka[Nn]=null,Nn--)}function J(e,t){Nn++,Ka[Nn]=e.current,e.current=t}var Vt={},be=Kt(Vt),Re=Kt(!1),an=Vt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(e){return e=e.childContextTypes,e!=null}function Gi(){X(Re),X(be)}function oc(e,t,n){if(be.current!==Vt)throw Error(L(168));J(be,t),J(Re,n)}function zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,ph(e)||"Unknown",i));return ne({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,an=be.current,J(be,e),J(Re,Re.current),!0}function ac(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=zd(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,X(Re),X(be),J(be,e)):X(Re),J(Re,n)}var ht=null,No=!1,aa=!1;function Dd(e){ht===null?ht=[e]:ht.push(e)}function Tg(e){No=!0,Dd(e)}function Yt(){if(!aa&&ht!==null){aa=!0;var e=0,t=K;try{var n=ht;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,No=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),ld(Ds,Yt),i}finally{K=t,aa=!1}}return null}var jn=[],Cn=0,Ji=null,qi=0,He=[],Ve=0,sn=null,gt=1,mt="";function Qt(e,t){jn[Cn++]=qi,jn[Cn++]=Ji,Ji=e,qi=t}function _d(e,t,n){He[Ve++]=gt,He[Ve++]=mt,He[Ve++]=sn,sn=e;var r=gt;e=mt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var o=32-et(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gt=1<<32-et(t)+i|n<<i|r,mt=o+e}else gt=1<<o|n<<i|r,mt=e}function Ks(e){e.return!==null&&(Qt(e,1),_d(e,1,0))}function Ys(e){for(;e===Ji;)Ji=jn[--Cn],jn[Cn]=null,qi=jn[--Cn],jn[Cn]=null;for(;e===sn;)sn=He[--Ve],He[Ve]=null,mt=He[--Ve],He[Ve]=null,gt=He[--Ve],He[Ve]=null}var Ie=null,_e=null,Z=!1,Ze=null;function Id(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,_e=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:gt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,_e=null,!0):!1;default:return!1}}function Ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if(Z){var t=_e;if(t){var n=t;if(!sc(e,t)){if(Ya(e))throw Error(L(418));t=Dt(n.nextSibling);var r=Ie;t&&sc(e,t)?Id(r,n):(e.flags=e.flags&-4097|2,Z=!1,Ie=e)}}else{if(Ya(e))throw Error(L(418));e.flags=e.flags&-4097|2,Z=!1,Ie=e}}}function lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function hi(e){if(e!==Ie)return!1;if(!Z)return lc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=_e)){if(Ya(e))throw Md(),Error(L(418));for(;t;)Id(e,t),t=Dt(t.nextSibling)}if(lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Ie?Dt(e.stateNode.nextSibling):null;return!0}function Md(){for(var e=_e;e;)e=Dt(e.nextSibling)}function _n(){_e=Ie=null,Z=!1}function Gs(e){Ze===null?Ze=[e]:Ze.push(e)}var Rg=kt.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cc(e){var t=e._init;return t(e._payload)}function Ud(e){function t(g,h){if(e){var y=g.deletions;y===null?(g.deletions=[h],g.flags|=16):y.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Ut(g,h),g.index=0,g.sibling=null,g}function o(g,h,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<h?(g.flags|=2,h):y):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,y,b){return h===null||h.tag!==6?(h=pa(y,g.mode,b),h.return=g,h):(h=i(h,y),h.return=g,h)}function c(g,h,y,b){var N=y.type;return N===vn?d(g,h,y.props.children,b,y.key):h!==null&&(h.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pt&&cc(N)===h.type)?(b=i(h,y.props),b.ref=ar(g,h,y),b.return=g,b):(b=Fi(y.type,y.key,y.props,null,g.mode,b),b.ref=ar(g,h,y),b.return=g,b)}function u(g,h,y,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=ha(y,g.mode,b),h.return=g,h):(h=i(h,y.children||[]),h.return=g,h)}function d(g,h,y,b,N){return h===null||h.tag!==7?(h=nn(y,g.mode,b,N),h.return=g,h):(h=i(h,y),h.return=g,h)}function f(g,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=pa(""+h,g.mode,y),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ii:return y=Fi(h.type,h.key,h.props,null,g.mode,y),y.ref=ar(g,null,h),y.return=g,y;case yn:return h=ha(h,g.mode,y),h.return=g,h;case Pt:var b=h._init;return f(g,b(h._payload),y)}if(pr(h)||tr(h))return h=nn(h,g.mode,y,null),h.return=g,h;gi(g,h)}return null}function m(g,h,y,b){var N=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:s(g,h,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ii:return y.key===N?c(g,h,y,b):null;case yn:return y.key===N?u(g,h,y,b):null;case Pt:return N=y._init,m(g,h,N(y._payload),b)}if(pr(y)||tr(y))return N!==null?null:d(g,h,y,b,null);gi(g,y)}return null}function x(g,h,y,b,N){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(y)||null,s(h,g,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ii:return g=g.get(b.key===null?y:b.key)||null,c(h,g,b,N);case yn:return g=g.get(b.key===null?y:b.key)||null,u(h,g,b,N);case Pt:var P=b._init;return x(g,h,y,P(b._payload),N)}if(pr(b)||tr(b))return g=g.get(y)||null,d(h,g,b,N,null);gi(h,b)}return null}function p(g,h,y,b){for(var N=null,P=null,C=h,E=h=0,R=null;C!==null&&E<y.length;E++){C.index>E?(R=C,C=null):R=C.sibling;var A=m(g,C,y[E],b);if(A===null){C===null&&(C=R);break}e&&C&&A.alternate===null&&t(g,C),h=o(A,h,E),P===null?N=A:P.sibling=A,P=A,C=R}if(E===y.length)return n(g,C),Z&&Qt(g,E),N;if(C===null){for(;E<y.length;E++)C=f(g,y[E],b),C!==null&&(h=o(C,h,E),P===null?N=C:P.sibling=C,P=C);return Z&&Qt(g,E),N}for(C=r(g,C);E<y.length;E++)R=x(C,g,E,y[E],b),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?E:R.key),h=o(R,h,E),P===null?N=R:P.sibling=R,P=R);return e&&C.forEach(function(U){return t(g,U)}),Z&&Qt(g,E),N}function v(g,h,y,b){var N=tr(y);if(typeof N!="function")throw Error(L(150));if(y=N.call(y),y==null)throw Error(L(151));for(var P=N=null,C=h,E=h=0,R=null,A=y.next();C!==null&&!A.done;E++,A=y.next()){C.index>E?(R=C,C=null):R=C.sibling;var U=m(g,C,A.value,b);if(U===null){C===null&&(C=R);break}e&&C&&U.alternate===null&&t(g,C),h=o(U,h,E),P===null?N=U:P.sibling=U,P=U,C=R}if(A.done)return n(g,C),Z&&Qt(g,E),N;if(C===null){for(;!A.done;E++,A=y.next())A=f(g,A.value,b),A!==null&&(h=o(A,h,E),P===null?N=A:P.sibling=A,P=A);return Z&&Qt(g,E),N}for(C=r(g,C);!A.done;E++,A=y.next())A=x(C,g,E,A.value,b),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?E:A.key),h=o(A,h,E),P===null?N=A:P.sibling=A,P=A);return e&&C.forEach(function(_){return t(g,_)}),Z&&Qt(g,E),N}function w(g,h,y,b){if(typeof y=="object"&&y!==null&&y.type===vn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ii:e:{for(var N=y.key,P=h;P!==null;){if(P.key===N){if(N=y.type,N===vn){if(P.tag===7){n(g,P.sibling),h=i(P,y.props.children),h.return=g,g=h;break e}}else if(P.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pt&&cc(N)===P.type){n(g,P.sibling),h=i(P,y.props),h.ref=ar(g,P,y),h.return=g,g=h;break e}n(g,P);break}else t(g,P);P=P.sibling}y.type===vn?(h=nn(y.props.children,g.mode,b,y.key),h.return=g,g=h):(b=Fi(y.type,y.key,y.props,null,g.mode,b),b.ref=ar(g,h,y),b.return=g,g=b)}return a(g);case yn:e:{for(P=y.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(g,h.sibling),h=i(h,y.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=ha(y,g.mode,b),h.return=g,g=h}return a(g);case Pt:return P=y._init,w(g,h,P(y._payload),b)}if(pr(y))return p(g,h,y,b);if(tr(y))return v(g,h,y,b);gi(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,y),h.return=g,g=h):(n(g,h),h=pa(y,g.mode,b),h.return=g,g=h),a(g)):n(g,h)}return w}var In=Ud(!0),Bd=Ud(!1),Xi=Kt(null),Zi=null,Pn=null,Qs=null;function Js(){Qs=Pn=Zi=null}function qs(e){var t=Xi.current;X(Xi),e._currentValue=t}function Qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){Zi=e,Qs=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Qs!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Zi===null)throw Error(L(308));Pn=e,Zi.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var Xt=null;function Xs(e){Xt===null?Xt=[e]:Xt.push(e)}function Hd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xs(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function Zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,Xs(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}function uc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Et=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,d=u=c=null,s=o;do{var m=s.lane,x=s.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,v=s;switch(m=t,x=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){f=p.call(x,f,m);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,m=typeof p=="function"?p.call(x,f,m):p,m==null)break e;f=ne({},f,m);break e;case 2:Et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=x,c=f):d=d.next=x,a|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cn|=a,e.lanes=a,e.memoizedState=f}}function dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var qr={},ut=Kt(qr),Dr=Kt(qr),_r=Kt(qr);function Zt(e){if(e===qr)throw Error(L(174));return e}function el(e,t){switch(J(_r,t),J(Dr,e),J(ut,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:La(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=La(t,e)}X(ut),J(ut,t)}function Mn(){X(ut),X(Dr),X(_r)}function Wd(e){Zt(_r.current);var t=Zt(ut.current),n=La(t,e.type);t!==n&&(J(Dr,e),J(ut,n))}function tl(e){Dr.current===e&&(X(ut),X(Dr))}var ee=Kt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=[];function nl(){for(var e=0;e<sa.length;e++)sa[e]._workInProgressVersionPrimary=null;sa.length=0}var Ti=kt.ReactCurrentDispatcher,la=kt.ReactCurrentBatchConfig,ln=0,te=null,le=null,de=null,no=!1,br=!1,Ir=0,Og=0;function xe(){throw Error(L(321))}function rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function il(e,t,n,r,i,o){if(ln=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ti.current=e===null||e.memoizedState===null?zg:Dg,e=n(r,i),br){o=0;do{if(br=!1,Ir=0,25<=o)throw Error(L(301));o+=1,de=le=null,t.updateQueue=null,Ti.current=_g,e=n(r,i)}while(br)}if(Ti.current=ro,t=le!==null&&le.next!==null,ln=0,de=le=te=null,no=!1,t)throw Error(L(300));return e}function ol(){var e=Ir!==0;return Ir=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?te.memoizedState=de=e:de=de.next=e,de}function Ge(){if(le===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=de===null?te.memoizedState:de.next;if(t!==null)de=t,le=e;else{if(e===null)throw Error(L(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?te.memoizedState=de=e:de=de.next=e}return de}function Mr(e,t){return typeof t=="function"?t(e):t}function ca(e){var t=Ge(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,c=null,u=o;do{var d=u.lane;if((ln&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=f,a=r):c=c.next=f,te.lanes|=d,cn|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=s,nt(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,te.lanes|=o,cn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ua(e){var t=Ge(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);nt(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Kd(){}function Yd(e,t){var n=te,r=Ge(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Te=!0),r=r.queue,al(Jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Ur(9,Qd.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(L(349));ln&30||Gd(n,t,i)}return i}function Gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qd(e,t,n,r){t.value=n,t.getSnapshot=r,qd(t)&&Xd(e)}function Jd(e,t,n){return n(function(){qd(t)&&Xd(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Xd(e){var t=bt(e,1);t!==null&&tt(t,e,1,-1)}function fc(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Fg.bind(null,te,e),[t.memoizedState,e]}function Ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zd(){return Ge().memoizedState}function Ri(e,t,n,r){var i=at();te.flags|=e,i.memoizedState=Ur(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(le!==null){var a=le.memoizedState;if(o=a.destroy,r!==null&&rl(r,a.deps)){i.memoizedState=Ur(t,n,o,r);return}}te.flags|=e,i.memoizedState=Ur(1|t,n,o,r)}function pc(e,t){return Ri(8390656,8,e,t)}function al(e,t){return jo(2048,8,e,t)}function ef(e,t){return jo(4,2,e,t)}function tf(e,t){return jo(4,4,e,t)}function nf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rf(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,nf.bind(null,t,e),n)}function sl(){}function of(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sf(e,t,n){return ln&21?(nt(n,t)||(n=dd(),te.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function Ag(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=la.transition;la.transition={};try{e(!1),t()}finally{K=n,la.transition=r}}function lf(){return Ge().memoizedState}function $g(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cf(e))uf(t,n);else if(n=Hd(e,t,n,r),n!==null){var i=Ne();tt(n,e,r,i),df(n,t,r)}}function Fg(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cf(e))uf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,nt(s,a)){var c=t.interleaved;c===null?(i.next=i,Xs(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Hd(e,t,i,r),n!==null&&(i=Ne(),tt(n,e,r,i),df(n,t,r))}}function cf(e){var t=e.alternate;return e===te||t!==null&&t===te}function uf(e,t){br=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function df(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}var ro={readContext:Ye,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},zg={readContext:Ye,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:pc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$g.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:fc,useDebugValue:sl,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=fc(!1),t=e[0];return e=Ag.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=at();if(Z){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),fe===null)throw Error(L(349));ln&30||Gd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,pc(Jd.bind(null,r,o,e),[e]),r.flags|=2048,Ur(9,Qd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=at(),t=fe.identifierPrefix;if(Z){var n=mt,r=gt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Og++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dg={readContext:Ye,useCallback:of,useContext:Ye,useEffect:al,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:af,useReducer:ca,useRef:Zd,useState:function(){return ca(Mr)},useDebugValue:sl,useDeferredValue:function(e){var t=Ge();return sf(t,le.memoizedState,e)},useTransition:function(){var e=ca(Mr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Kd,useSyncExternalStore:Yd,useId:lf,unstable_isNewReconciler:!1},_g={readContext:Ye,useCallback:of,useContext:Ye,useEffect:al,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:af,useReducer:ua,useRef:Zd,useState:function(){return ua(Mr)},useDebugValue:sl,useDeferredValue:function(e){var t=Ge();return le===null?t.memoizedState=e:sf(t,le.memoizedState,e)},useTransition:function(){var e=ua(Mr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Kd,useSyncExternalStore:Yd,useId:lf,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ja(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=Mt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(tt(t,e,i,r),Li(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=Mt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(tt(t,e,i,r),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Mt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(tt(t,e,r,n),Li(t,e,r))}};function hc(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,o):!0}function ff(e,t,n){var r=!1,i=Vt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Oe(t)?an:be.current,r=t.contextTypes,o=(r=r!=null)?Dn(e,i):Vt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function qa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Zs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Oe(t)?an:be.current,i.context=Dn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ja(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",r=t;do n+=fh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function da(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ig=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,ls=r),Xa(e,t)},n}function hf(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xa(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function mc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ig;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Zg.bind(null,e,t,n),t.then(e,e))}function xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var Mg=kt.ReactCurrentOwner,Te=!1;function ke(e,t,n,r){t.child=e===null?Bd(t,null,n,r):In(t,e.child,n,r)}function vc(e,t,n,r,i){n=n.render;var o=t.ref;return $n(t,i),r=il(e,t,n,r,o,i),n=ol(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(Z&&n&&Ks(t),t.flags|=1,ke(e,t,r,i),t.child)}function wc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!gl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gf(e,t,o,r,i)):(e=Fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(a,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function gf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ar(o,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,St(e,t,i)}return Za(e,t,n,r,i)}function mf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Ln,De),De|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Ln,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,J(Ln,De),De|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,J(Ln,De),De|=r;return ke(e,t,i,n),t.child}function xf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Za(e,t,n,r,i){var o=Oe(n)?an:be.current;return o=Dn(t,o),$n(t,i),n=il(e,t,n,r,o,i),r=ol(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(Z&&r&&Ks(t),t.flags|=1,ke(e,t,n,i),t.child)}function bc(e,t,n,r,i){if(Oe(n)){var o=!0;Qi(t)}else o=!1;if($n(t,i),t.stateNode===null)Oi(e,t),ff(t,n,r),qa(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Oe(n)?an:be.current,u=Dn(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==u)&&gc(t,a,r,u),Et=!1;var m=t.memoizedState;a.state=m,eo(t,r,a,i),c=t.memoizedState,s!==r||m!==c||Re.current||Et?(typeof d=="function"&&(Ja(t,n,d,r),c=t.memoizedState),(s=Et||hc(t,n,s,r,m,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Vd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:qe(t.type,s),a.props=u,f=t.pendingProps,m=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ye(c):(c=Oe(n)?an:be.current,c=Dn(t,c));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||m!==c)&&gc(t,a,r,c),Et=!1,m=t.memoizedState,a.state=m,eo(t,r,a,i);var p=t.memoizedState;s!==f||m!==p||Re.current||Et?(typeof x=="function"&&(Ja(t,n,x,r),p=t.memoizedState),(u=Et||hc(t,n,u,r,m,p,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return es(e,t,n,r,o,i)}function es(e,t,n,r,i,o){xf(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ac(t,n,!1),St(e,t,o);r=t.stateNode,Mg.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=In(t,e.child,null,o),t.child=In(t,null,s,o)):ke(e,t,s,o),t.memoizedState=r.state,i&&ac(t,n,!0),t.child}function yf(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),el(e,t.containerInfo)}function Sc(e,t,n,r,i){return _n(),Gs(i),t.flags|=256,ke(e,t,n,r),t.child}var ts={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function vf(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),J(ee,i&1),e===null)return Ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Lo(a,r,0,null),e=nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ns(n),t.memoizedState=ts,e):ll(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ug(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ut(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ut(s,o):(o=nn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ns(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ts,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ll(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,n,r){return r!==null&&Gs(r),In(t,e.child,null,n),e=ll(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ug(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=da(Error(L(422))),mi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Lo({mode:"visible",children:r.children},i,0,null),o=nn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&In(t,e.child,null,a),t.child.memoizedState=ns(a),t.memoizedState=ts,o);if(!(t.mode&1))return mi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(L(419)),r=da(o,r,void 0),mi(e,t,a,r)}if(s=(a&e.childLanes)!==0,Te||s){if(r=fe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bt(e,i),tt(r,e,i,-1))}return hl(),r=da(Error(L(421))),mi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=em.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Dt(i.nextSibling),Ie=t,Z=!0,Ze=null,e!==null&&(He[Ve++]=gt,He[Ve++]=mt,He[Ve++]=sn,gt=e.id,mt=e.overflow,sn=t),t=ll(t,r.children),t.flags|=4096,t)}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qa(e.return,t,n)}function fa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ke(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fa(t,!0,n,null,o);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bg(e,t,n){switch(t.tag){case 3:yf(t),_n();break;case 5:Wd(t);break;case 1:Oe(t.type)&&Qi(t);break;case 4:el(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;J(Xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?vf(e,t,n):(J(ee,ee.current&1),e=St(e,t,n),e!==null?e.sibling:null);J(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,mf(e,t,n)}return St(e,t,n)}var bf,rs,Sf,kf;bf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rs=function(){};Sf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(ut.current);var o=null;switch(n){case"input":i=ja(e,i),r=ja(e,r),o=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":i=Ea(e,i),r=Ea(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}Ta(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&q("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};kf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hg(e,t,n){var r=t.pendingProps;switch(Ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Oe(t.type)&&Gi(),ye(t),null;case 3:return r=t.stateNode,Mn(),X(Re),X(be),nl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(ds(Ze),Ze=null))),rs(e,t),ye(t),null;case 5:tl(t);var i=Zt(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)Sf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return ye(t),null}if(e=Zt(ut.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[st]=t,r[zr]=o,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<gr.length;i++)q(gr[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Ol(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":$l(r,o),q("invalid",r)}Ta(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&pi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&pi(r.textContent,s,e),i=["children",""+s]):Cr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&q("scroll",r)}switch(n){case"input":oi(r),Al(r,o,!0);break;case"textarea":oi(r),Fl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[st]=t,e[zr]=r,bf(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ra(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<gr.length;i++)q(gr[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":Ol(e,r),i=ja(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),q("invalid",e);break;case"textarea":$l(e,r),i=Ea(e,r),q("invalid",e);break;default:i=r}Ta(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Zu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qu(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Pr(e,c):typeof c=="number"&&Pr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&q("scroll",e):c!=null&&Os(e,o,c,a))}switch(n){case"input":oi(e),Al(e,r,!1);break;case"textarea":oi(e),Fl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)kf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Zt(_r.current),Zt(ut.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(o=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ye(t),null;case 13:if(X(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&_e!==null&&t.mode&1&&!(t.flags&128))Md(),_n(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[st]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else Ze!==null&&(ds(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):hl())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Mn(),rs(e,t),e===null&&$r(t.stateNode.containerInfo),ye(t),null;case 10:return qs(t.type._context),ye(t),null;case 17:return Oe(t.type)&&Gi(),ye(t),null;case 19:if(X(ee),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)sr(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=to(e),a!==null){for(t.flags|=128,sr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Bn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Z)return ye(t),null}else 2*oe()-o.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=ee.current,J(ee,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return pl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Vg(e,t){switch(Ys(t),t.tag){case 1:return Oe(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),X(Re),X(be),nl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tl(t),null;case 13:if(X(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ee),null;case 4:return Mn(),null;case 10:return qs(t.type._context),null;case 22:case 23:return pl(),null;case 24:return null;default:return null}}var xi=!1,ve=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,F=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function is(e,t,n){try{n()}catch(r){re(e,t,r)}}var Nc=!1;function Kg(e,t){if(Ua=Vi,e=Pd(),Ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break t;if(m===n&&++u===i&&(s=a),m===o&&++d===r&&(c=a),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ba={focusedElem:e,selectionRange:n},Vi=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,w=p.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:qe(t.type,v),w);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){re(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return p=Nc,Nc=!1,p}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&is(t,n,o)}i=i.next}while(i!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nf(e){var t=e.alternate;t!==null&&(e.alternate=null,Nf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[zr],delete t[Wa],delete t[Eg],delete t[Lg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jf(e){return e.tag===5||e.tag===3||e.tag===4}function jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function as(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}function ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}var he=null,Xe=!1;function Ct(e,t,n){for(n=n.child;n!==null;)Cf(e,t,n),n=n.sibling}function Cf(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(vo,n)}catch{}switch(n.tag){case 5:ve||En(n,t);case 6:var r=he,i=Xe;he=null,Ct(e,t,n),he=r,Xe=i,he!==null&&(Xe?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Xe?(e=he,n=n.stateNode,e.nodeType===8?oa(e.parentNode,n):e.nodeType===1&&oa(e,n),Rr(e)):oa(he,n.stateNode));break;case 4:r=he,i=Xe,he=n.stateNode.containerInfo,Xe=!0,Ct(e,t,n),he=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&is(n,t,a),i=i.next}while(i!==r)}Ct(e,t,n);break;case 1:if(!ve&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Ct(e,t,n),ve=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wg),t.forEach(function(r){var i=tm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,Xe=!1;break e;case 3:he=s.stateNode.containerInfo,Xe=!0;break e;case 4:he=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(he===null)throw Error(L(160));Cf(o,a,i),he=null,Xe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling}function Pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),it(e),r&4){try{Sr(3,e,e.return),Po(3,e)}catch(v){re(e,e.return,v)}try{Sr(5,e,e.return)}catch(v){re(e,e.return,v)}}break;case 1:Qe(t,e),it(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(Qe(t,e),it(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(v){re(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Gu(i,o),Ra(s,a);var u=Ra(s,o);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?Zu(i,f):d==="dangerouslySetInnerHTML"?qu(i,f):d==="children"?Pr(i,f):Os(i,d,f,u)}switch(s){case"input":Ca(i,o);break;case"textarea":Qu(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Tn(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Tn(i,!!o.multiple,o.defaultValue,!0):Tn(i,!!o.multiple,o.multiple?[]:"",!1))}i[zr]=o}catch(v){re(e,e.return,v)}}break;case 6:if(Qe(t,e),it(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){re(e,e.return,v)}}break;case 3:if(Qe(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(v){re(e,e.return,v)}break;case 4:Qe(t,e),it(e);break;case 13:Qe(t,e),it(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(dl=oe())),r&4&&Cc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||d,Qe(t,e),ve=u):Qe(t,e),it(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(f=F=d;F!==null;){switch(m=F,x=m.child,m.tag){case 0:case 11:case 14:case 15:Sr(4,m,m.return);break;case 1:En(m,m.return);var p=m.stateNode;if(typeof p.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(v){re(r,n,v)}}break;case 5:En(m,m.return);break;case 22:if(m.memoizedState!==null){Ec(f);continue}}x!==null?(x.return=m,F=x):Ec(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Xu("display",a))}catch(v){re(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){re(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(t,e),it(e),r&4&&Cc(e);break;case 21:break;default:Qe(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jf(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var o=jc(e);ss(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=jc(e);as(e,s,a);break;default:throw Error(L(161))}}catch(c){re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yg(e,t,n){F=e,Ef(e)}function Ef(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||xi;if(!a){var s=i.alternate,c=s!==null&&s.memoizedState!==null||ve;s=xi;var u=ve;if(xi=a,(ve=c)&&!u)for(F=i;F!==null;)a=F,c=a.child,a.tag===22&&a.memoizedState!==null?Lc(i):c!==null?(c.return=a,F=c):Lc(i);for(;o!==null;)F=o,Ef(o),o=o.sibling;F=i,xi=s,ve=u}Pc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):Pc(e)}}function Pc(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&dc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dc(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Rr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ve||t.flags&512&&os(t)}catch(m){re(t,t.return,m)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Ec(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Lc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(c){re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){re(t,i,c)}}var o=t.return;try{os(t)}catch(c){re(t,o,c)}break;case 5:var a=t.return;try{os(t)}catch(c){re(t,a,c)}}}catch(c){re(t,t.return,c)}if(t===e){F=null;break}var s=t.sibling;if(s!==null){s.return=t.return,F=s;break}F=t.return}}var Gg=Math.ceil,io=kt.ReactCurrentDispatcher,cl=kt.ReactCurrentOwner,Ke=kt.ReactCurrentBatchConfig,V=0,fe=null,se=null,ge=0,De=0,Ln=Kt(0),ce=0,Br=null,cn=0,Eo=0,ul=0,kr=null,Le=null,dl=0,Bn=1/0,pt=null,oo=!1,ls=null,It=null,yi=!1,Ot=null,ao=0,Nr=0,cs=null,Ai=-1,$i=0;function Ne(){return V&6?oe():Ai!==-1?Ai:Ai=oe()}function Mt(e){return e.mode&1?V&2&&ge!==0?ge&-ge:Rg.transition!==null?($i===0&&($i=dd()),$i):(e=K,e!==0||(e=window.event,e=e===void 0?16:yd(e.type)),e):1}function tt(e,t,n,r){if(50<Nr)throw Nr=0,cs=null,Error(L(185));Gr(e,n,r),(!(V&2)||e!==fe)&&(e===fe&&(!(V&2)&&(Eo|=n),ce===4&&Tt(e,ge)),Ae(e,r),n===1&&V===0&&!(t.mode&1)&&(Bn=oe()+500,No&&Yt()))}function Ae(e,t){var n=e.callbackNode;Rh(e,t);var r=Hi(e,e===fe?ge:0);if(r===0)n!==null&&_l(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_l(n),t===1)e.tag===0?Tg(Tc.bind(null,e)):Dd(Tc.bind(null,e)),Cg(function(){!(V&6)&&Yt()}),n=null;else{switch(fd(r)){case 1:n=Ds;break;case 4:n=cd;break;case 16:n=Bi;break;case 536870912:n=ud;break;default:n=Bi}n=zf(n,Lf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lf(e,t){if(Ai=-1,$i=0,V&6)throw Error(L(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Hi(e,e===fe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=so(e,r);else{t=r;var i=V;V|=2;var o=Rf();(fe!==e||ge!==t)&&(pt=null,Bn=oe()+500,tn(e,t));do try{qg();break}catch(s){Tf(e,s)}while(!0);Js(),io.current=o,V=i,se!==null?t=0:(fe=null,ge=0,t=ce)}if(t!==0){if(t===2&&(i=za(e),i!==0&&(r=i,t=us(e,i))),t===1)throw n=Br,tn(e,0),Tt(e,r),Ae(e,oe()),n;if(t===6)Tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qg(i)&&(t=so(e,r),t===2&&(o=za(e),o!==0&&(r=o,t=us(e,o))),t===1))throw n=Br,tn(e,0),Tt(e,r),Ae(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Jt(e,Le,pt);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=dl+500-oe(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Va(Jt.bind(null,e,Le,pt),t);break}Jt(e,Le,pt);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-et(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gg(r/1960))-r,10<r){e.timeoutHandle=Va(Jt.bind(null,e,Le,pt),r);break}Jt(e,Le,pt);break;case 5:Jt(e,Le,pt);break;default:throw Error(L(329))}}}return Ae(e,oe()),e.callbackNode===n?Lf.bind(null,e):null}function us(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=so(e,t),e!==2&&(t=Le,Le=n,t!==null&&ds(t)),e}function ds(e){Le===null?Le=e:Le.push.apply(Le,e)}function Qg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~ul,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Tc(e){if(V&6)throw Error(L(327));Fn();var t=Hi(e,0);if(!(t&1))return Ae(e,oe()),null;var n=so(e,t);if(e.tag!==0&&n===2){var r=za(e);r!==0&&(t=r,n=us(e,r))}if(n===1)throw n=Br,tn(e,0),Tt(e,t),Ae(e,oe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Le,pt),Ae(e,oe()),null}function fl(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Bn=oe()+500,No&&Yt())}}function un(e){Ot!==null&&Ot.tag===0&&!(V&6)&&Fn();var t=V;V|=1;var n=Ke.transition,r=K;try{if(Ke.transition=null,K=1,e)return e()}finally{K=r,Ke.transition=n,V=t,!(V&6)&&Yt()}}function pl(){De=Ln.current,X(Ln)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jg(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Ys(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:Mn(),X(Re),X(be),nl();break;case 5:tl(r);break;case 4:Mn();break;case 13:X(ee);break;case 19:X(ee);break;case 10:qs(r.type._context);break;case 22:case 23:pl()}n=n.return}if(fe=e,se=e=Ut(e.current,null),ge=De=t,ce=0,Br=null,ul=Eo=cn=0,Le=kr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Xt=null}return e}function Tf(e,t){do{var n=se;try{if(Js(),Ti.current=ro,no){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(ln=0,de=le=te=null,br=!1,Ir=0,cl.current=null,n===null||n.return===null){ce=1,Br=t,se=null;break}e:{var o=e,a=n.return,s=n,c=t;if(t=ge,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=xc(a);if(x!==null){x.flags&=-257,yc(x,a,s,o,t),x.mode&1&&mc(o,u,t),t=x,c=u;var p=t.updateQueue;if(p===null){var v=new Set;v.add(c),t.updateQueue=v}else p.add(c);break e}else{if(!(t&1)){mc(o,u,t),hl();break e}c=Error(L(426))}}else if(Z&&s.mode&1){var w=xc(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),yc(w,a,s,o,t),Gs(Un(c,s));break e}}o=c=Un(c,s),ce!==4&&(ce=2),kr===null?kr=[o]:kr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=pf(o,c,t);uc(o,g);break e;case 1:s=c;var h=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(It===null||!It.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=hf(o,s,t);uc(o,b);break e}}o=o.return}while(o!==null)}Af(n)}catch(N){t=N,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Rf(){var e=io.current;return io.current=ro,e===null?ro:e}function hl(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||!(cn&268435455)&&!(Eo&268435455)||Tt(fe,ge)}function so(e,t){var n=V;V|=2;var r=Rf();(fe!==e||ge!==t)&&(pt=null,tn(e,t));do try{Jg();break}catch(i){Tf(e,i)}while(!0);if(Js(),V=n,io.current=r,se!==null)throw Error(L(261));return fe=null,ge=0,ce}function Jg(){for(;se!==null;)Of(se)}function qg(){for(;se!==null&&!Sh();)Of(se)}function Of(e){var t=Ff(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?Af(e):se=t,cl.current=null}function Af(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vg(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=Hg(n,t,De),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function Jt(e,t,n){var r=K,i=Ke.transition;try{Ke.transition=null,K=1,Xg(e,t,n,r)}finally{Ke.transition=i,K=r}return null}function Xg(e,t,n,r){do Fn();while(Ot!==null);if(V&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Oh(e,o),e===fe&&(se=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yi||(yi=!0,zf(Bi,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var a=K;K=1;var s=V;V|=4,cl.current=null,Kg(e,n),Pf(n,e),yg(Ba),Vi=!!Ua,Ba=Ua=null,e.current=n,Yg(n),kh(),V=s,K=a,Ke.transition=o}else e.current=n;if(yi&&(yi=!1,Ot=e,ao=i),o=e.pendingLanes,o===0&&(It=null),Ch(n.stateNode),Ae(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=ls,ls=null,e;return ao&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===cs?Nr++:(Nr=0,cs=e):Nr=0,Yt(),null}function Fn(){if(Ot!==null){var e=fd(ao),t=Ke.transition,n=K;try{if(Ke.transition=null,K=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,ao=0,V&6)throw Error(L(331));var i=V;for(V|=4,F=e.current;F!==null;){var o=F,a=o.child;if(F.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:Sr(8,d,o)}var f=d.child;if(f!==null)f.return=d,F=f;else for(;F!==null;){d=F;var m=d.sibling,x=d.return;if(Nf(d),d===u){F=null;break}if(m!==null){m.return=x,F=m;break}F=x}}}var p=o.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}F=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,F=a;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,F=g;break e}F=o.return}}var h=e.current;for(F=h;F!==null;){a=F;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,F=y;else e:for(a=h;F!==null;){if(s=F,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Po(9,s)}}catch(N){re(s,s.return,N)}if(s===a){F=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,F=b;break e}F=s.return}}if(V=i,Yt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(vo,e)}catch{}r=!0}return r}finally{K=n,Ke.transition=t}}return!1}function Rc(e,t,n){t=Un(n,t),t=pf(e,t,1),e=_t(e,t,1),t=Ne(),e!==null&&(Gr(e,1,t),Ae(e,t))}function re(e,t,n){if(e.tag===3)Rc(e,e,n);else for(;t!==null;){if(t.tag===3){Rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Un(n,e),e=hf(t,e,1),t=_t(t,e,1),e=Ne(),t!==null&&(Gr(t,1,e),Ae(t,e));break}}t=t.return}}function Zg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(ce===4||ce===3&&(ge&130023424)===ge&&500>oe()-dl?tn(e,0):ul|=n),Ae(e,t)}function $f(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=Ne();e=bt(e,t),e!==null&&(Gr(e,t,n),Ae(e,n))}function em(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$f(e,n)}function tm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),$f(e,n)}var Ff;Ff=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,Bg(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Z&&t.flags&1048576&&_d(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oi(e,t),e=t.pendingProps;var i=Dn(t,be.current);$n(t,n),i=il(null,t,r,e,i,n);var o=ol();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(o=!0,Qi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zs(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,qa(t,r,e,n),t=es(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&Ks(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rm(r),e=qe(r,e),i){case 0:t=Za(null,t,r,e,n);break e;case 1:t=bc(null,t,r,e,n);break e;case 11:t=vc(null,t,r,e,n);break e;case 14:t=wc(null,t,r,qe(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Za(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),bc(e,t,r,i,n);case 3:e:{if(yf(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vd(e,t),eo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Un(Error(L(423)),t),t=Sc(e,t,r,n,i);break e}else if(r!==i){i=Un(Error(L(424)),t),t=Sc(e,t,r,n,i);break e}else for(_e=Dt(t.stateNode.containerInfo.firstChild),Ie=t,Z=!0,Ze=null,n=Bd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===i){t=St(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Wd(t),e===null&&Ga(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ha(r,i)?a=null:o!==null&&Ha(r,o)&&(t.flags|=32),xf(e,t),ke(e,t,a,n),t.child;case 6:return e===null&&Ga(t),null;case 13:return vf(e,t,n);case 4:return el(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=In(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),vc(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,J(Xi,r._currentValue),r._currentValue=a,o!==null)if(nt(o.value,a)){if(o.children===i.children&&!Re.current){t=St(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=yt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qa(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(L(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Qa(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=Ye(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=qe(r,t.pendingProps),i=qe(r.type,i),wc(e,t,r,i,n);case 15:return gf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Oi(e,t),t.tag=1,Oe(r)?(e=!0,Qi(t)):e=!1,$n(t,n),ff(t,r,i),qa(t,r,i,n),es(null,t,r,!0,e,n);case 19:return wf(e,t,n);case 22:return mf(e,t,n)}throw Error(L(156,t.tag))};function zf(e,t){return ld(e,t)}function nm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new nm(e,t,n,r)}function gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rm(e){if(typeof e=="function")return gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$s)return 11;if(e===Fs)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")gl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vn:return nn(n.children,i,o,t);case As:a=8,i|=8;break;case ba:return e=We(12,n,t,i|2),e.elementType=ba,e.lanes=o,e;case Sa:return e=We(13,n,t,i),e.elementType=Sa,e.lanes=o,e;case ka:return e=We(19,n,t,i),e.elementType=ka,e.lanes=o,e;case Wu:return Lo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hu:a=10;break e;case Vu:a=9;break e;case $s:a=11;break e;case Fs:a=14;break e;case Pt:a=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=We(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function nn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=We(22,e,r,t),e.elementType=Wu,e.lanes=n,e.stateNode={isHidden:!1},e}function pa(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function ha(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function im(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ml(e,t,n,r,i,o,a,s,c){return e=new im(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zs(o),e}function om(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Df(e){if(!e)return Vt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(Oe(n))return zd(e,n,t)}return t}function _f(e,t,n,r,i,o,a,s,c){return e=ml(n,r,!0,e,i,o,a,s,c),e.context=Df(null),n=e.current,r=Ne(),i=Mt(n),o=yt(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,Gr(e,i,r),Ae(e,r),e}function To(e,t,n,r){var i=t.current,o=Ne(),a=Mt(i);return n=Df(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,a),e!==null&&(tt(e,i,a,o),Li(e,i,a)),a}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xl(e,t){Oc(e,t),(e=e.alternate)&&Oc(e,t)}function am(){return null}var If=typeof reportError=="function"?reportError:function(e){console.error(e)};function yl(e){this._internalRoot=e}Ro.prototype.render=yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));To(e,t,null,null)};Ro.prototype.unmount=yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){To(null,e,null,null)}),t[wt]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&xd(e)}};function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ac(){}function sm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=lo(a);o.call(u)}}var a=_f(t,r,e,0,null,!1,!1,"",Ac);return e._reactRootContainer=a,e[wt]=a.current,$r(e.nodeType===8?e.parentNode:e),un(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=lo(c);s.call(u)}}var c=ml(e,0,!1,null,null,!1,!1,"",Ac);return e._reactRootContainer=c,e[wt]=c.current,$r(e.nodeType===8?e.parentNode:e),un(function(){To(t,c,n,r)}),c}function Ao(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var c=lo(a);s.call(c)}}To(t,a,e,i)}else a=sm(n,t,e,i,r);return lo(a)}pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(_s(t,n|1),Ae(t,oe()),!(V&6)&&(Bn=oe()+500,Yt()))}break;case 13:un(function(){var r=bt(e,1);if(r!==null){var i=Ne();tt(r,e,1,i)}}),xl(e,1)}};Is=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=Ne();tt(t,e,134217728,n)}xl(e,134217728)}};hd=function(e){if(e.tag===13){var t=Mt(e),n=bt(e,t);if(n!==null){var r=Ne();tt(n,e,t,r)}xl(e,t)}};gd=function(){return K};md=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};Aa=function(e,t,n){switch(t){case"input":if(Ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ko(r);if(!i)throw Error(L(90));Yu(r),Ca(r,i)}}}break;case"textarea":Qu(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};nd=fl;rd=un;var lm={usingClientEntryPoint:!1,Events:[Jr,kn,ko,ed,td,fl]},lr={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cm={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ad(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||am,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{vo=vi.inject(cm),ct=vi}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vl(t))throw Error(L(200));return om(e,t,null,n)};Ue.createRoot=function(e,t){if(!vl(e))throw Error(L(299));var n=!1,r="",i=If;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ml(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,$r(e.nodeType===8?e.parentNode:e),new yl(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=ad(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return un(e)};Ue.hydrate=function(e,t,n){if(!Oo(t))throw Error(L(200));return Ao(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!vl(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=If;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=_f(t,null,e,1,n??null,i,!1,o,a),e[wt]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ro(t)};Ue.render=function(e,t,n){if(!Oo(t))throw Error(L(200));return Ao(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!Oo(e))throw Error(L(40));return e._reactRootContainer?(un(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ue.unstable_batchedUpdates=fl;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oo(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Ao(e,t,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426";function Mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf)}catch(e){console.error(e)}}Mf(),Iu.exports=Ue;var um=Iu.exports,Uf,$c=um;Uf=$c.createRoot,$c.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}var At;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(At||(At={}));function dm(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:n,v5Compat:r=!1}=e,i;i=t.map((x,p)=>d(x,typeof x=="string"?null:x.state,p===0?"default":void 0));let o=c(n??i.length-1),a=At.Pop,s=null;function c(x){return Math.min(Math.max(x,0),i.length-1)}function u(){return i[o]}function d(x,p,v){p===void 0&&(p=null);let w=pm(i?u().pathname:"/",x,p,v);return wl(w.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(x)),w}function f(x){return typeof x=="string"?x:fs(x)}return{get index(){return o},get action(){return a},get location(){return u()},createHref:f,createURL(x){return new URL(f(x),"http://localhost")},encodeLocation(x){let p=typeof x=="string"?hn(x):x;return{pathname:p.pathname||"",search:p.search||"",hash:p.hash||""}},push(x,p){a=At.Push;let v=d(x,p);o+=1,i.splice(o,i.length,v),r&&s&&s({action:a,location:v,delta:1})},replace(x,p){a=At.Replace;let v=d(x,p);i[o]=v,r&&s&&s({action:a,location:v,delta:0})},go(x){a=At.Pop;let p=c(o+x),v=i[p];o=p,s&&s({action:a,location:v,delta:x})},listen(x){return s=x,()=>{s=null}}}}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fm(){return Math.random().toString(36).substr(2,8)}function pm(e,t,n,r){return n===void 0&&(n=null),co({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:n,key:t&&t.key||r||fm()})}function fs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var Fc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fc||(Fc={}));function hm(e,t,n){return n===void 0&&(n="/"),gm(e,t,n)}function gm(e,t,n,r){let i=typeof t=="string"?hn(t):t,o=Hn(i.pathname||"/",n);if(o==null)return null;let a=Bf(e);mm(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let u=Pm(o);s=jm(a[c],u)}return s}function Bf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(ie(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Bt([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bf(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:km(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let c of Hf(o.path))i(o,a,c)}),t}function Hf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Hf(r.join("/")),s=[];return s.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function mm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Nm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xm=/^:[\w-]+$/,ym=3,vm=2,wm=1,bm=10,Sm=-2,zc=e=>e==="*";function km(e,t){let n=e.split("/"),r=n.length;return n.some(zc)&&(r+=Sm),t&&(r+=vm),n.filter(i=>!zc(i)).reduce((i,o)=>i+(xm.test(o)?ym:o===""?wm:bm),r)}function Nm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function jm(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=ps({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),m=c.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Bt([o,f.pathname]),pathnameBase:Rm(Bt([o,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(o=Bt([o,f.pathnameBase]))}return a}function ps(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Cm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:x}=d;if(m==="*"){let v=s[f]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const p=s[f];return x&&!p?u[m]=void 0:u[m]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Cm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Pm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Em(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?hn(e):e;return{pathname:n?n.startsWith("/")?n:Lm(n,t):t,search:Om(r),hash:Am(i)}}function Lm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ga(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bl(e,t){let n=Tm(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sl(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=hn(e):(i=co({},e),ie(!i.pathname||!i.pathname.includes("?"),ga("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),ga("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),ga("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}s=f>=0?t[f]:"/"}let c=Em(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Bt=e=>e.join("/").replace(/\/\/+/g,"/"),Rm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Om=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Am=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $m(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vf=["post","put","patch","delete"];new Set(Vf);const Fm=["get",...Vf];new Set(Fm);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(this,arguments)}const $o=S.createContext(null),Wf=S.createContext(null),Nt=S.createContext(null),Fo=S.createContext(null),dt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Kf=S.createContext(null);function zm(e,t){let{relative:n}=t===void 0?{}:t;Qn()||ie(!1);let{basename:r,navigator:i}=S.useContext(Nt),{hash:o,pathname:a,search:s}=zo(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Bt([r,a])),i.createHref({pathname:c,search:s,hash:o})}function Qn(){return S.useContext(Fo)!=null}function ft(){return Qn()||ie(!1),S.useContext(Fo).location}function Yf(e){S.useContext(Nt).static||S.useLayoutEffect(e)}function gn(){let{isDataRoute:e}=S.useContext(dt);return e?Xm():Dm()}function Dm(){Qn()||ie(!1);let e=S.useContext($o),{basename:t,future:n,navigator:r}=S.useContext(Nt),{matches:i}=S.useContext(dt),{pathname:o}=ft(),a=JSON.stringify(bl(i,n.v7_relativeSplatPath)),s=S.useRef(!1);return Yf(()=>{s.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Sl(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Bt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,o,e])}const _m=S.createContext(null);function Im(e){let t=S.useContext(dt).outlet;return t&&S.createElement(_m.Provider,{value:e},t)}function Mm(){let{matches:e}=S.useContext(dt),t=e[e.length-1];return t?t.params:{}}function zo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Nt),{matches:i}=S.useContext(dt),{pathname:o}=ft(),a=JSON.stringify(bl(i,r.v7_relativeSplatPath));return S.useMemo(()=>Sl(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function Um(e,t){return Bm(e,t)}function Bm(e,t,n,r){Qn()||ie(!1);let{navigator:i}=S.useContext(Nt),{matches:o}=S.useContext(dt),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=ft(),d;if(t){var f;let w=typeof t=="string"?hn(t):t;c==="/"||(f=w.pathname)!=null&&f.startsWith(c)||ie(!1),d=w}else d=u;let m=d.pathname||"/",x=m;if(c!=="/"){let w=c.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let p=hm(e,{pathname:x}),v=Ym(p&&p.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:Bt([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:Bt([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return t&&v?S.createElement(Fo.Provider,{value:{location:Hr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:At.Pop}},v):v}function Hm(){let e=qm(),t=$m(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const Vm=S.createElement(Hm,null);class Wm extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(dt.Provider,{value:this.props.routeContext},S.createElement(Kf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Km(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext($o);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(dt.Provider,{value:t},r)}function Ym(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||ie(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:x}=n,p=f.route.loader&&m[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||p){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,m)=>{let x,p=!1,v=null,w=null;n&&(x=s&&f.route.id?s[f.route.id]:void 0,v=f.route.errorElement||Vm,c&&(u<0&&m===0?(Zm("route-fallback"),p=!0,w=null):u===m&&(p=!0,w=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,m+1)),h=()=>{let y;return x?y=v:p?y=w:f.route.Component?y=S.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,S.createElement(Km,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?S.createElement(Wm,{location:n.location,revalidation:n.revalidation,component:v,error:x,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var Gf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gf||{}),Qf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qf||{});function Gm(e){let t=S.useContext($o);return t||ie(!1),t}function Qm(e){let t=S.useContext(Wf);return t||ie(!1),t}function Jm(e){let t=S.useContext(dt);return t||ie(!1),t}function Jf(e){let t=Jm(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function qm(){var e;let t=S.useContext(Kf),n=Qm(),r=Jf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Xm(){let{router:e}=Gm(Gf.UseNavigateStable),t=Jf(Qf.UseNavigateStable),n=S.useRef(!1);return Yf(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Hr({fromRouteId:t},o)))},[e,t])}const Dc={};function Zm(e,t,n){Dc[e]||(Dc[e]=!0)}function e0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}const t0="startTransition",_c=Zp[t0];function n0(e){let{basename:t,children:n,initialEntries:r,initialIndex:i,future:o}=e,a=S.useRef();a.current==null&&(a.current=dm({initialEntries:r,initialIndex:i,v5Compat:!0}));let s=a.current,[c,u]=S.useState({action:s.action,location:s.location}),{v7_startTransition:d}=o||{},f=S.useCallback(m=>{d&&_c?_c(()=>u(m)):u(m)},[u,d]);return S.useLayoutEffect(()=>s.listen(f),[s,f]),S.useEffect(()=>e0(o),[o]),S.createElement(r0,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:o})}function Vr(e){let{to:t,replace:n,state:r,relative:i}=e;Qn()||ie(!1);let{future:o,static:a}=S.useContext(Nt),{matches:s}=S.useContext(dt),{pathname:c}=ft(),u=gn(),d=Sl(t,bl(s,o.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function qf(e){return Im(e.context)}function Ee(e){ie(!1)}function r0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=At.Pop,navigator:o,static:a=!1,future:s}=e;Qn()&&ie(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:o,static:a,future:Hr({v7_relativeSplatPath:!1},s)}),[c,s,o,a]);typeof r=="string"&&(r=hn(r));let{pathname:d="/",search:f="",hash:m="",state:x=null,key:p="default"}=r,v=S.useMemo(()=>{let w=Hn(d,c);return w==null?null:{location:{pathname:w,search:f,hash:m,state:x,key:p},navigationType:i}},[c,d,f,m,x,p,i]);return v==null?null:S.createElement(Nt.Provider,{value:u},S.createElement(Fo.Provider,{children:n,value:v}))}function i0(e){let{children:t,location:n}=e;return Um(hs(t),n)}new Promise(()=>{});function hs(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,hs(r.props.children,o));return}r.type!==Ee&&ie(!1),!r.props.index||!r.props.children||ie(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=hs(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uo.apply(this,arguments)}function Xf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function o0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function a0(e,t){return e.button===0&&(!t||t==="_self")&&!o0(e)}const s0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],l0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],c0="6";try{window.__reactRouterVersion=c0}catch{}const u0=S.createContext({isTransitioning:!1}),d0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vn=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,m=Xf(t,s0),{basename:x}=S.useContext(Nt),p,v=!1;if(typeof u=="string"&&f0.test(u)&&(p=u,d0))try{let y=new URL(window.location.href),b=u.startsWith("//")?new URL(y.protocol+u):new URL(u),N=Hn(b.pathname,x);b.origin===y.origin&&N!=null?u=N+b.search+b.hash:v=!0}catch{}let w=zm(u,{relative:i}),g=h0(u,{replace:a,state:s,target:c,preventScrollReset:d,relative:i,viewTransition:f});function h(y){r&&r(y),y.defaultPrevented||g(y)}return S.createElement("a",uo({},m,{href:p||w,onClick:v||o?r:h,ref:n,target:c}))}),Je=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:c,viewTransition:u,children:d}=t,f=Xf(t,l0),m=zo(c,{relative:f.relative}),x=ft(),p=S.useContext(Wf),{navigator:v,basename:w}=S.useContext(Nt),g=p!=null&&g0(m)&&u===!0,h=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,y=x.pathname,b=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(y=y.toLowerCase(),b=b?b.toLowerCase():null,h=h.toLowerCase()),b&&w&&(b=Hn(b,w)||b);const N=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let P=y===h||!a&&y.startsWith(h)&&y.charAt(N)==="/",C=b!=null&&(b===h||!a&&b.startsWith(h)&&b.charAt(h.length)==="/"),E={isActive:P,isPending:C,isTransitioning:g},R=P?r:void 0,A;typeof o=="function"?A=o(E):A=[o,P?"active":null,C?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let U=typeof s=="function"?s(E):s;return S.createElement(Vn,uo({},f,{"aria-current":R,className:A,ref:n,style:U,to:c,viewTransition:u}),typeof d=="function"?d(E):d)});var gs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gs||(gs={}));var Ic;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ic||(Ic={}));function p0(e){let t=S.useContext($o);return t||ie(!1),t}function h0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,c=gn(),u=ft(),d=zo(e,{relative:a});return S.useCallback(f=>{if(a0(f,n)){f.preventDefault();let m=r!==void 0?r:fs(u)===fs(d);c(e,{replace:m,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,c,d,r,i,n,e,o,a,s])}function g0(e,t){t===void 0&&(t={});let n=S.useContext(u0);n==null&&ie(!1);let{basename:r}=p0(gs.useViewTransitionState),i=zo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Hn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Hn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ps(i.pathname,a)!=null||ps(i.pathname,o)!=null}const m0=(e,t,n,r)=>{var o,a,s,c;const i=[n,{code:t,...r||{}}];if((a=(o=e==null?void 0:e.services)==null?void 0:o.logger)!=null&&a.forward)return e.services.logger.forward(i,"warn","react-i18next::",!0);rn(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),(c=(s=e==null?void 0:e.services)==null?void 0:s.logger)!=null&&c.warn?e.services.logger.warn(...i):console!=null&&console.warn&&console.warn(...i)},Mc={},ms=(e,t,n,r)=>{rn(n)&&Mc[n]||(rn(n)&&(Mc[n]=new Date),m0(e,t,n,r))},Zf=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},xs=(e,t,n)=>{e.loadNamespaces(t,Zf(e,n))},Uc=(e,t,n,r)=>{if(rn(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return xs(e,n,r);n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Zf(e,r))},x0=(e,t,n={})=>!t.languages||!t.languages.length?(ms(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(r,i)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!i(r.isLanguageChangingTo,e))return!1}}),rn=e=>typeof e=="string",y0=e=>typeof e=="object"&&e!==null,v0=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,w0={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},b0=e=>w0[e],S0=e=>e.replace(v0,b0);let ys={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:S0};const k0=(e={})=>{ys={...ys,...e}},N0=()=>ys;let ep;const j0=e=>{ep=e},C0=()=>ep,P0={type:"3rdParty",init(e){k0(e.options.react),j0(e)}},E0=S.createContext();class L0{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const T0=(e,t)=>{const n=S.useRef();return S.useEffect(()=>{n.current=e},[e,t]),n.current},tp=(e,t,n,r)=>e.getFixedT(t,n,r),R0=(e,t,n,r)=>S.useCallback(tp(e,t,n,r),[e,t,n,r]),jt=(e,t={})=>{var b,N,P,C;const{i18n:n}=t,{i18n:r,defaultNS:i}=S.useContext(E0)||{},o=n||r||C0();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new L0),!o){ms(o,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const E=(A,U)=>rn(U)?U:y0(U)&&rn(U.defaultValue)?U.defaultValue:Array.isArray(A)?A[A.length-1]:A,R=[E,{},!1];return R.t=E,R.i18n={},R.ready=!1,R}(b=o.options.react)!=null&&b.wait&&ms(o,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...N0(),...o.options.react,...t},{useSuspense:s,keyPrefix:c}=a;let u=i||((N=o.options)==null?void 0:N.defaultNS);u=rn(u)?[u]:u||["translation"],(C=(P=o.reportNamespaces).addUsedNamespaces)==null||C.call(P,u);const d=(o.isInitialized||o.initializedStoreOnce)&&u.every(E=>x0(E,o,a)),f=R0(o,t.lng||null,a.nsMode==="fallback"?u:u[0],c),m=()=>f,x=()=>tp(o,t.lng||null,a.nsMode==="fallback"?u:u[0],c),[p,v]=S.useState(m);let w=u.join();t.lng&&(w=`${t.lng}${w}`);const g=T0(w),h=S.useRef(!0);S.useEffect(()=>{const{bindI18n:E,bindI18nStore:R}=a;h.current=!0,!d&&!s&&(t.lng?Uc(o,t.lng,u,()=>{h.current&&v(x)}):xs(o,u,()=>{h.current&&v(x)})),d&&g&&g!==w&&h.current&&v(x);const A=()=>{h.current&&v(x)};return E&&(o==null||o.on(E,A)),R&&(o==null||o.store.on(R,A)),()=>{h.current=!1,o&&E&&(E==null||E.split(" ").forEach(U=>o.off(U,A))),R&&o&&R.split(" ").forEach(U=>o.store.off(U,A))}},[o,w]),S.useEffect(()=>{h.current&&d&&v(m)},[o,c,d]);const y=[p,o,d];if(y.t=p,y.i18n=o,y.ready=d,d||!d&&!s)return y;throw new Promise(E=>{t.lng?Uc(o,t.lng,u,()=>E()):xs(o,u,()=>E())})};function np(e,t){return function(){return e.apply(t,arguments)}}const{toString:O0}=Object.prototype,{getPrototypeOf:kl}=Object,{iterator:Do,toStringTag:rp}=Symbol,_o=(e=>t=>{const n=O0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),rt=e=>(e=e.toLowerCase(),t=>_o(t)===e),Io=e=>t=>typeof t===e,{isArray:Jn}=Array,Wn=Io("undefined");function Xr(e){return e!==null&&!Wn(e)&&e.constructor!==null&&!Wn(e.constructor)&&$e(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ip=rt("ArrayBuffer");function A0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ip(e.buffer),t}const $0=Io("string"),$e=Io("function"),op=Io("number"),Zr=e=>e!==null&&typeof e=="object",F0=e=>e===!0||e===!1,zi=e=>{if(_o(e)!=="object")return!1;const t=kl(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(rp in e)&&!(Do in e)},z0=e=>{if(!Zr(e)||Xr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},D0=rt("Date"),_0=rt("File"),I0=rt("Blob"),M0=rt("FileList"),U0=e=>Zr(e)&&$e(e.pipe),B0=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||$e(e.append)&&((t=_o(e))==="formdata"||t==="object"&&$e(e.toString)&&e.toString()==="[object FormData]"))},H0=rt("URLSearchParams"),[V0,W0,K0,Y0]=["ReadableStream","Request","Response","Headers"].map(rt),G0=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ei(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Jn(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Xr(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function ap(e,t){if(Xr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const en=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sp=e=>!Wn(e)&&e!==en;function vs(){const{caseless:e,skipUndefined:t}=sp(this)&&this||{},n={},r=(i,o)=>{const a=e&&ap(n,o)||o;zi(n[a])&&zi(i)?n[a]=vs(n[a],i):zi(i)?n[a]=vs({},i):Jn(i)?n[a]=i.slice():(!t||!Wn(i))&&(n[a]=i)};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&ei(arguments[i],r);return n}const Q0=(e,t,n,{allOwnKeys:r}={})=>(ei(t,(i,o)=>{n&&$e(i)?e[o]=np(i,n):e[o]=i},{allOwnKeys:r}),e),J0=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),q0=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},X0=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&kl(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Z0=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ex=e=>{if(!e)return null;if(Jn(e))return e;let t=e.length;if(!op(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},tx=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&kl(Uint8Array)),nx=(e,t)=>{const r=(e&&e[Do]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},rx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ix=rt("HTMLFormElement"),ox=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Bc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ax=rt("RegExp"),lp=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ei(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},sx=e=>{lp(e,(t,n)=>{if($e(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if($e(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},lx=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Jn(e)?r(e):r(String(e).split(t)),n},cx=()=>{},ux=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function dx(e){return!!(e&&$e(e.append)&&e[rp]==="FormData"&&e[Do])}const fx=e=>{const t=new Array(10),n=(r,i)=>{if(Zr(r)){if(t.indexOf(r)>=0)return;if(Xr(r))return r;if(!("toJSON"in r)){t[i]=r;const o=Jn(r)?[]:{};return ei(r,(a,s)=>{const c=n(a,i+1);!Wn(c)&&(o[s]=c)}),t[i]=void 0,o}}return r};return n(e,0)},px=rt("AsyncFunction"),hx=e=>e&&(Zr(e)||$e(e))&&$e(e.then)&&$e(e.catch),cp=((e,t)=>e?setImmediate:t?((n,r)=>(en.addEventListener("message",({source:i,data:o})=>{i===en&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),en.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",$e(en.postMessage)),gx=typeof queueMicrotask<"u"?queueMicrotask.bind(en):typeof process<"u"&&process.nextTick||cp,mx=e=>e!=null&&$e(e[Do]),k={isArray:Jn,isArrayBuffer:ip,isBuffer:Xr,isFormData:B0,isArrayBufferView:A0,isString:$0,isNumber:op,isBoolean:F0,isObject:Zr,isPlainObject:zi,isEmptyObject:z0,isReadableStream:V0,isRequest:W0,isResponse:K0,isHeaders:Y0,isUndefined:Wn,isDate:D0,isFile:_0,isBlob:I0,isRegExp:ax,isFunction:$e,isStream:U0,isURLSearchParams:H0,isTypedArray:tx,isFileList:M0,forEach:ei,merge:vs,extend:Q0,trim:G0,stripBOM:J0,inherits:q0,toFlatObject:X0,kindOf:_o,kindOfTest:rt,endsWith:Z0,toArray:ex,forEachEntry:nx,matchAll:rx,isHTMLForm:ix,hasOwnProperty:Bc,hasOwnProp:Bc,reduceDescriptors:lp,freezeMethods:sx,toObjectSet:lx,toCamelCase:ox,noop:cx,toFiniteNumber:ux,findKey:ap,global:en,isContextDefined:sp,isSpecCompliantForm:dx,toJSONObject:fx,isAsyncFn:px,isThenable:hx,setImmediate:cp,asap:gx,isIterable:mx};function M(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const up=M.prototype,dp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{dp[e]={value:e}});Object.defineProperties(M,dp);Object.defineProperty(up,"isAxiosError",{value:!0});M.from=(e,t,n,r,i,o)=>{const a=Object.create(up);k.toFlatObject(e,a,function(d){return d!==Error.prototype},u=>u!=="isAxiosError");const s=e&&e.message?e.message:"Error",c=t==null&&e?e.code:t;return M.call(a,s,c,n,r,i),e&&a.cause==null&&Object.defineProperty(a,"cause",{value:e,configurable:!0}),a.name=e&&e.name||"Error",o&&Object.assign(a,o),a};const xx=null;function ws(e){return k.isPlainObject(e)||k.isArray(e)}function fp(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Hc(e,t,n){return e?e.concat(t).map(function(i,o){return i=fp(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function yx(e){return k.isArray(e)&&!e.some(ws)}const vx=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Mo(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!k.isUndefined(w[v])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(k.isDate(p))return p.toISOString();if(k.isBoolean(p))return p.toString();if(!c&&k.isBlob(p))throw new M("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(p)||k.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,v,w){let g=p;if(p&&!w&&typeof p=="object"){if(k.endsWith(v,"{}"))v=r?v:v.slice(0,-2),p=JSON.stringify(p);else if(k.isArray(p)&&yx(p)||(k.isFileList(p)||k.endsWith(v,"[]"))&&(g=k.toArray(p)))return v=fp(v),g.forEach(function(y,b){!(k.isUndefined(y)||y===null)&&t.append(a===!0?Hc([v],b,o):a===null?v:v+"[]",u(y))}),!1}return ws(p)?!0:(t.append(Hc(w,v,o),u(p)),!1)}const f=[],m=Object.assign(vx,{defaultVisitor:d,convertValue:u,isVisitable:ws});function x(p,v){if(!k.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(p),k.forEach(p,function(g,h){(!(k.isUndefined(g)||g===null)&&i.call(t,g,k.isString(h)?h.trim():h,v,m))===!0&&x(g,v?v.concat(h):[h])}),f.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Vc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Nl(e,t){this._pairs=[],e&&Mo(e,this,t)}const pp=Nl.prototype;pp.append=function(t,n){this._pairs.push([t,n])};pp.toString=function(t){const n=t?function(r){return t.call(this,r,Vc)}:Vc;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function wx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function hp(e,t,n){if(!t)return e;const r=n&&n.encode||wx;k.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let o;if(i?o=i(t,n):o=k.isURLSearchParams(t)?t.toString():new Nl(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Wc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const gp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bx=typeof URLSearchParams<"u"?URLSearchParams:Nl,Sx=typeof FormData<"u"?FormData:null,kx=typeof Blob<"u"?Blob:null,Nx={isBrowser:!0,classes:{URLSearchParams:bx,FormData:Sx,Blob:kx},protocols:["http","https","file","blob","url","data"]},jl=typeof window<"u"&&typeof document<"u",bs=typeof navigator=="object"&&navigator||void 0,jx=jl&&(!bs||["ReactNative","NativeScript","NS"].indexOf(bs.product)<0),Cx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Px=jl&&window.location.href||"http://localhost",Ex=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:jl,hasStandardBrowserEnv:jx,hasStandardBrowserWebWorkerEnv:Cx,navigator:bs,origin:Px},Symbol.toStringTag,{value:"Module"})),we={...Ex,...Nx};function Lx(e,t){return Mo(e,new we.classes.URLSearchParams,{visitor:function(n,r,i,o){return we.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function Tx(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Rx(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function mp(e){function t(n,r,i,o){let a=n[o++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),c=o>=n.length;return a=!a&&k.isArray(i)?i.length:a,c?(k.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!k.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&k.isArray(i[a])&&(i[a]=Rx(i[a])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,i)=>{t(Tx(r),i,n,0)}),n}return null}function Ox(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ti={transitional:gp,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=k.isObject(t);if(o&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i?JSON.stringify(mp(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Lx(t,this.formSerializer).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Mo(s?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Ox(t)):t}],transformResponse:[function(t){const n=this.transitional||ti.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t,this.parseReviver)}catch(s){if(a)throw s.name==="SyntaxError"?M.from(s,M.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:we.classes.FormData,Blob:we.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{ti.headers[e]={}});const Ax=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$x=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&Ax[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Kc=Symbol("internals");function cr(e){return e&&String(e).trim().toLowerCase()}function Di(e){return e===!1||e==null?e:k.isArray(e)?e.map(Di):String(e)}function Fx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const zx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ma(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function Dx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function _x(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}let Fe=class{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,c,u){const d=cr(c);if(!d)throw new Error("header name must be a non-empty string");const f=k.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||c]=Di(s))}const a=(s,c)=>k.forEach(s,(u,d)=>o(u,d,c));if(k.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(k.isString(t)&&(t=t.trim())&&!zx(t))a($x(t),n);else if(k.isObject(t)&&k.isIterable(t)){let s={},c,u;for(const d of t){if(!k.isArray(d))throw TypeError("Object iterator must return a key-value pair");s[u=d[0]]=(c=s[u])?k.isArray(c)?[...c,d[1]]:[c,d[1]]:d[1]}a(s,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=cr(t),t){const r=k.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Fx(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=cr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ma(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=cr(a),a){const s=k.findKey(r,a);s&&(!n||ma(r,r[s],s,n))&&(delete r[s],i=!0)}}return k.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||ma(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return k.forEach(this,(i,o)=>{const a=k.findKey(r,o);if(a){n[a]=Di(i),delete n[o];return}const s=t?Dx(o):String(o).trim();s!==o&&delete n[o],n[s]=Di(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Kc]=this[Kc]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=cr(a);r[s]||(_x(i,a),r[s]=!0)}return k.isArray(t)?t.forEach(o):o(t),this}};Fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Fe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Fe);function xa(e,t){const n=this||ti,r=t||n,i=Fe.from(r.headers);let o=r.data;return k.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function xp(e){return!!(e&&e.__CANCEL__)}function qn(e,t,n){M.call(this,e??"canceled",M.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(qn,M,{__CANCEL__:!0});function yp(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ix(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Mx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[o];a||(a=u),n[i]=c,r[i]=u;let f=o,m=0;for(;f!==i;)m+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const x=d&&u-d;return x?Math.round(m*1e3/x):void 0}}function Ux(e,t){let n=0,r=1e3/t,i,o;const a=(u,d=Date.now())=>{n=d,i=null,o&&(clearTimeout(o),o=null),e(...u)};return[(...u)=>{const d=Date.now(),f=d-n;f>=r?a(u,d):(i=u,o||(o=setTimeout(()=>{o=null,a(i)},r-f)))},()=>i&&a(i)]}const fo=(e,t,n=3)=>{let r=0;const i=Mx(50,250);return Ux(o=>{const a=o.loaded,s=o.lengthComputable?o.total:void 0,c=a-r,u=i(c),d=a<=s;r=a;const f={loaded:a,total:s,progress:s?a/s:void 0,bytes:c,rate:u||void 0,estimated:u&&s&&d?(s-a)/u:void 0,event:o,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(f)},n)},Yc=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Gc=e=>(...t)=>k.asap(()=>e(...t)),Bx=we.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,we.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(we.origin),we.navigator&&/(msie|trident)/i.test(we.navigator.userAgent)):()=>!0,Hx=we.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),k.isString(r)&&a.push("path="+r),k.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Vx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Wx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function vp(e,t,n){let r=!Vx(t);return e&&(r||n==!1)?Wx(e,t):t}const Qc=e=>e instanceof Fe?{...e}:e;function dn(e,t){t=t||{};const n={};function r(u,d,f,m){return k.isPlainObject(u)&&k.isPlainObject(d)?k.merge.call({caseless:m},u,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function i(u,d,f,m){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u,f,m)}else return r(u,d,f,m)}function o(u,d){if(!k.isUndefined(d))return r(void 0,d)}function a(u,d){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function s(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,d,f)=>i(Qc(u),Qc(d),f,!0)};return k.forEach(Object.keys({...e,...t}),function(d){const f=c[d]||i,m=f(e[d],t[d],d);k.isUndefined(m)&&f!==s||(n[d]=m)}),n}const wp=e=>{const t=dn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:a,auth:s}=t;if(t.headers=a=Fe.from(a),t.url=hp(vp(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),k.isFormData(n)){if(we.hasStandardBrowserEnv||we.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(k.isFunction(n.getHeaders)){const c=n.getHeaders(),u=["content-type","content-length"];Object.entries(c).forEach(([d,f])=>{u.includes(d.toLowerCase())&&a.set(d,f)})}}if(we.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&Bx(t.url))){const c=i&&o&&Hx.read(o);c&&a.set(i,c)}return t},Kx=typeof XMLHttpRequest<"u",Yx=Kx&&function(e){return new Promise(function(n,r){const i=wp(e);let o=i.data;const a=Fe.from(i.headers).normalize();let{responseType:s,onUploadProgress:c,onDownloadProgress:u}=i,d,f,m,x,p;function v(){x&&x(),p&&p(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let w=new XMLHttpRequest;w.open(i.method.toUpperCase(),i.url,!0),w.timeout=i.timeout;function g(){if(!w)return;const y=Fe.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),N={data:!s||s==="text"||s==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:y,config:e,request:w};yp(function(C){n(C),v()},function(C){r(C),v()},N),w=null}"onloadend"in w?w.onloadend=g:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(g)},w.onabort=function(){w&&(r(new M("Request aborted",M.ECONNABORTED,e,w)),w=null)},w.onerror=function(b){const N=b&&b.message?b.message:"Network Error",P=new M(N,M.ERR_NETWORK,e,w);P.event=b||null,r(P),w=null},w.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const N=i.transitional||gp;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),r(new M(b,N.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,w)),w=null},o===void 0&&a.setContentType(null),"setRequestHeader"in w&&k.forEach(a.toJSON(),function(b,N){w.setRequestHeader(N,b)}),k.isUndefined(i.withCredentials)||(w.withCredentials=!!i.withCredentials),s&&s!=="json"&&(w.responseType=i.responseType),u&&([m,p]=fo(u,!0),w.addEventListener("progress",m)),c&&w.upload&&([f,x]=fo(c),w.upload.addEventListener("progress",f),w.upload.addEventListener("loadend",x)),(i.cancelToken||i.signal)&&(d=y=>{w&&(r(!y||y.type?new qn(null,e,w):y),w.abort(),w=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const h=Ix(i.url);if(h&&we.protocols.indexOf(h)===-1){r(new M("Unsupported protocol "+h+":",M.ERR_BAD_REQUEST,e));return}w.send(o||null)})},Gx=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(u){if(!i){i=!0,s();const d=u instanceof Error?u:this.reason;r.abort(d instanceof M?d:new qn(d instanceof Error?d.message:d))}};let a=t&&setTimeout(()=>{a=null,o(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:c}=r;return c.unsubscribe=()=>k.asap(s),c}},Qx=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Jx=async function*(e,t){for await(const n of qx(e))yield*Qx(n,t)},qx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Jc=(e,t,n,r)=>{const i=Jx(e,t);let o=0,a,s=c=>{a||(a=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await i.next();if(u){s(),c.close();return}let f=d.byteLength;if(n){let m=o+=f;n(m)}c.enqueue(new Uint8Array(d))}catch(u){throw s(u),u}},cancel(c){return s(c),i.return()}},{highWaterMark:2})},qc=64*1024,{isFunction:wi}=k,Xx=(({Request:e,Response:t})=>({Request:e,Response:t}))(k.global),{ReadableStream:Xc,TextEncoder:Zc}=k.global,eu=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Zx=e=>{e=k.merge.call({skipUndefined:!0},Xx,e);const{fetch:t,Request:n,Response:r}=e,i=t?wi(t):typeof fetch=="function",o=wi(n),a=wi(r);if(!i)return!1;const s=i&&wi(Xc),c=i&&(typeof Zc=="function"?(p=>v=>p.encode(v))(new Zc):async p=>new Uint8Array(await new n(p).arrayBuffer())),u=o&&s&&eu(()=>{let p=!1;const v=new n(we.origin,{body:new Xc,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!v}),d=a&&s&&eu(()=>k.isReadableStream(new r("").body)),f={stream:d&&(p=>p.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!f[p]&&(f[p]=(v,w)=>{let g=v&&v[p];if(g)return g.call(v);throw new M(`Response type '${p}' is not supported`,M.ERR_NOT_SUPPORT,w)})});const m=async p=>{if(p==null)return 0;if(k.isBlob(p))return p.size;if(k.isSpecCompliantForm(p))return(await new n(we.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(k.isArrayBufferView(p)||k.isArrayBuffer(p))return p.byteLength;if(k.isURLSearchParams(p)&&(p=p+""),k.isString(p))return(await c(p)).byteLength},x=async(p,v)=>{const w=k.toFiniteNumber(p.getContentLength());return w??m(v)};return async p=>{let{url:v,method:w,data:g,signal:h,cancelToken:y,timeout:b,onDownloadProgress:N,onUploadProgress:P,responseType:C,headers:E,withCredentials:R="same-origin",fetchOptions:A}=wp(p),U=t||fetch;C=C?(C+"").toLowerCase():"text";let _=Gx([h,y&&y.toAbortSignal()],b),W=null;const H=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let pe;try{if(P&&u&&w!=="get"&&w!=="head"&&(pe=await x(E,g))!==0){let $=new n(v,{method:"POST",body:g,duplex:"half"}),z;if(k.isFormData(g)&&(z=$.headers.get("content-type"))&&E.setContentType(z),$.body){const[Q,Y]=Yc(pe,fo(Gc(P)));g=Jc($.body,qc,Q,Y)}}k.isString(R)||(R=R?"include":"omit");const I=o&&"credentials"in n.prototype,G={...A,signal:_,method:w.toUpperCase(),headers:E.normalize().toJSON(),body:g,duplex:"half",credentials:I?R:void 0};W=o&&new n(v,G);let O=await(o?U(W,A):U(v,G));const T=d&&(C==="stream"||C==="response");if(d&&(N||T&&H)){const $={};["status","statusText","headers"].forEach(ue=>{$[ue]=O[ue]});const z=k.toFiniteNumber(O.headers.get("content-length")),[Q,Y]=N&&Yc(z,fo(Gc(N),!0))||[];O=new r(Jc(O.body,qc,Q,()=>{Y&&Y(),H&&H()}),$)}C=C||"text";let j=await f[k.findKey(f,C)||"text"](O,p);return!T&&H&&H(),await new Promise(($,z)=>{yp($,z,{data:j,headers:Fe.from(O.headers),status:O.status,statusText:O.statusText,config:p,request:W})})}catch(I){throw H&&H(),I&&I.name==="TypeError"&&/Load failed|fetch/i.test(I.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,p,W),{cause:I.cause||I}):M.from(I,I&&I.code,p,W)}}},e1=new Map,bp=e=>{let t=e?e.env:{};const{fetch:n,Request:r,Response:i}=t,o=[r,i,n];let a=o.length,s=a,c,u,d=e1;for(;s--;)c=o[s],u=d.get(c),u===void 0&&d.set(c,u=s?new Map:Zx(t)),d=u;return u};bp();const Ss={http:xx,xhr:Yx,fetch:{get:bp}};k.forEach(Ss,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const tu=e=>`- ${e}`,t1=e=>k.isFunction(e)||e===null||e===!1,Sp={getAdapter:(e,t)=>{e=k.isArray(e)?e:[e];const{length:n}=e;let r,i;const o={};for(let a=0;a<n;a++){r=e[a];let s;if(i=r,!t1(r)&&(i=Ss[(s=String(r)).toLowerCase()],i===void 0))throw new M(`Unknown adapter '${s}'`);if(i&&(k.isFunction(i)||(i=i.get(t))))break;o[s||"#"+a]=i}if(!i){const a=Object.entries(o).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=n?a.length>1?`since :
`+a.map(tu).join(`
`):" "+tu(a[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return i},adapters:Ss};function ya(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qn(null,e)}function nu(e){return ya(e),e.headers=Fe.from(e.headers),e.data=xa.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Sp.getAdapter(e.adapter||ti.adapter,e)(e).then(function(r){return ya(e),r.data=xa.call(e,e.transformResponse,r),r.headers=Fe.from(r.headers),r},function(r){return xp(r)||(ya(e),r&&r.response&&(r.response.data=xa.call(e,e.transformResponse,r.response),r.response.headers=Fe.from(r.response.headers))),Promise.reject(r)})}const kp="1.12.2",Uo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Uo[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ru={};Uo.transitional=function(t,n,r){function i(o,a){return"[Axios v"+kp+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new M(i(a," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!ru[a]&&(ru[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};Uo.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function n1(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],c=s===void 0||a(s,o,e);if(c!==!0)throw new M("option "+o+" must be "+c,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+o,M.ERR_BAD_OPTION)}}const _i={assertOptions:n1,validators:Uo},ot=_i.validators;let on=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Wc,response:new Wc}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=dn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&_i.assertOptions(r,{silentJSONParsing:ot.transitional(ot.boolean),forcedJSONParsing:ot.transitional(ot.boolean),clarifyTimeoutError:ot.transitional(ot.boolean)},!1),i!=null&&(k.isFunction(i)?n.paramsSerializer={serialize:i}:_i.assertOptions(i,{encode:ot.function,serialize:ot.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),_i.assertOptions(n,{baseUrl:ot.spelling("baseURL"),withXsrfToken:ot.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&k.merge(o.common,o[n.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=Fe.concat(a,o);const s=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,s.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,f=0,m;if(!c){const p=[nu.bind(this),void 0];for(p.unshift(...s),p.push(...u),m=p.length,d=Promise.resolve(n);f<m;)d=d.then(p[f++],p[f++]);return d}m=s.length;let x=n;for(;f<m;){const p=s[f++],v=s[f++];try{x=p(x)}catch(w){v.call(this,w);break}}try{d=nu.call(this,x)}catch(p){return Promise.reject(p)}for(f=0,m=u.length;f<m;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=dn(this.defaults,t);const n=vp(t.baseURL,t.url,t.allowAbsoluteUrls);return hp(n,t.params,t.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(t){on.prototype[t]=function(n,r){return this.request(dn(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(dn(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}on.prototype[t]=n(),on.prototype[t+"Form"]=n(!0)});let r1=class Np{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new qn(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Np(function(i){t=i}),cancel:t}}};function i1(e){return function(n){return e.apply(null,n)}}function o1(e){return k.isObject(e)&&e.isAxiosError===!0}const ks={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ks).forEach(([e,t])=>{ks[t]=e});function jp(e){const t=new on(e),n=np(on.prototype.request,t);return k.extend(n,on.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return jp(dn(e,i))},n}const ae=jp(ti);ae.Axios=on;ae.CanceledError=qn;ae.CancelToken=r1;ae.isCancel=xp;ae.VERSION=kp;ae.toFormData=Mo;ae.AxiosError=M;ae.Cancel=ae.CanceledError;ae.all=function(t){return Promise.all(t)};ae.spread=i1;ae.isAxiosError=o1;ae.mergeConfig=dn;ae.AxiosHeaders=Fe;ae.formToJSON=e=>mp(k.isHTMLForm(e)?new FormData(e):e);ae.getAdapter=Sp.getAdapter;ae.HttpStatusCode=ks;ae.default=ae;const{Axios:a5,AxiosError:s5,CanceledError:l5,isCancel:c5,CancelToken:u5,VERSION:d5,all:f5,Cancel:p5,isAxiosError:h5,spread:g5,toFormData:m5,AxiosHeaders:x5,HttpStatusCode:y5,formToJSON:v5,getAdapter:w5,mergeConfig:b5}=ae,a1="https://aesthetic-ai-backend.onrender.com",ze=ae.create({baseURL:a1,withCredentials:!1,timeout:9e4});ze.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers=e.headers||{},e.headers.Authorization=`Bearer ${t}`),e});ze.interceptors.response.use(e=>e,e=>{var n;if(((n=e==null?void 0:e.response)==null?void 0:n.status)===401){localStorage.removeItem("token"),localStorage.removeItem("user");const r=encodeURIComponent(window.location.pathname+window.location.search);window.location.href=`/login?next=${r}`}return Promise.reject(e)});const Cp=e=>new Promise(t=>setTimeout(t,e));function s1(e){const t=e;if(t.code==="ECONNABORTED"||!t.response)return!0;const n=t.response.status;return n===429||n===502||n===503||n===504}async function Xn(e,{tries:t=4,baseDelay:n=800}={}){let r;for(let i=0;i<t;i++)try{return await e()}catch(o){if(r=o,i===t-1||!s1(o))break;const a=n*Math.pow(1.6,i);await Cp(a)}throw r}async function Zn({maxTries:e=8,intervalMs:t=3e3}={}){for(let n=1;n<=e;n++)try{await ze.get("/status",{timeout:3e4});return}catch{if(n===e)throw new Error("Backend not responding");await Cp(t)}}async function Pp(e,t,n){return Xn(()=>ze.post(e,t,n).then(r=>r.data))}async function l1(e,t){return await Pp("/signup",{email:e,password:t})}async function c1(e,t){return await Pp("/login",{email:e,password:t})}async function Ep(e){const{data:t}=await ze.get(`/profile/${e}`);return t}async function u1(e,t){const{data:n}=await ze.put(`/profile/${e}`,t);return n}const Lp=S.createContext({auth:null,initialized:!1,setAuth:()=>{},signOut:()=>{},refreshProfile:async()=>{}}),d1=({children:e})=>{const[t,n]=S.useState(null),[r,i]=S.useState(!1);S.useEffect(()=>{const u=localStorage.getItem("token"),d=localStorage.getItem("user");u&&d&&n({token:u,user:JSON.parse(d)}),i(!0)},[]);const o=u=>{n(u),u!=null&&u.token?(localStorage.setItem("token",u.token),localStorage.setItem("user",JSON.stringify(u.user))):(localStorage.removeItem("token"),localStorage.removeItem("user"))},a=()=>o(null),s=async()=>{var d;if(!((d=t==null?void 0:t.user)!=null&&d.id))return;const u=await Ep(t.user.id);o({token:t.token,user:u})},c=S.useMemo(()=>({auth:t,initialized:r,setAuth:o,signOut:a,refreshProfile:s}),[t,r]);return l.jsx(Lp.Provider,{value:c,children:e})},Gt=()=>S.useContext(Lp);var Tp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iu=xt.createContext&&xt.createContext(Tp),f1=["attr","size","title"];function p1(e,t){if(e==null)return{};var n=h1(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function h1(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}function ou(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ho(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ou(Object(n),!0).forEach(function(r){g1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ou(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g1(e,t,n){return t=m1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m1(e){var t=x1(e,"string");return typeof t=="symbol"?t:t+""}function x1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rp(e){return e&&e.map((t,n)=>xt.createElement(t.tag,ho({key:n},t.attr),Rp(t.child)))}function er(e){return t=>xt.createElement(y1,po({attr:ho({},e.attr)},t),Rp(e.child))}function y1(e){var t=n=>{var{attr:r,size:i,title:o}=e,a=p1(e,f1),s=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),xt.createElement("svg",po({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:ho(ho({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&xt.createElement("title",null,o),e.children)};return iu!==void 0?xt.createElement(iu.Consumer,null,n=>t(n)):t(Tp)}function v1(e){return er({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}function w1(e){return er({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(e)}function b1(e){return er({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function S1(e){return er({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function k1(e){return er({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"},child:[]}]})(e)}function N1(e){return er({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}const j1=()=>{var c;const{t:e,i18n:t}=jt(),{auth:n,signOut:r}=Gt(),i=(u,d)=>{const f=e(u,{defaultValue:""});return typeof f=="string"&&f.trim()?f:d},o=(c=t.language)!=null&&c.startsWith("el")?"el":"en",a=u=>{t.changeLanguage(u),localStorage.setItem("lang",u)},s=o==="el"?"🇬🇷":"🇺🇸";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root{
          --bg: rgba(11, 16, 32, 0.95);
          --bg-glass: rgba(11, 16, 32, 0.85);
          --divider: rgba(55, 195, 182, 0.15);
          --ink: #fff;
          --muted: #9aa4b2;
          --accent: #37C3B6;
          --accent2: #2CA59A;
          --accent-glow: rgba(55, 195, 182, 0.4);
          --chip-border: rgba(55, 195, 182, 0.2);
          --card-glow: rgba(55, 195, 182, 0.1);
        }

        /* --- Premium Top bar (desktop) --- */
        .topbar{
          position: fixed; 
          top: 0; 
          left: 0; 
          right: 0; 
          z-index: 1000;
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          padding: 12px 24px; 
          background: var(--bg-glass);
          border-bottom: 1px solid var(--divider);
          height: 72px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        body { 
          padding-top: 72px; 
        }

        .brand{ 
          display: flex; 
          align-items: center; 
          gap: 14px; 
          color: #fff; 
          font-weight: 800; 
          font-size: 20px; 
          white-space: nowrap;
          background: linear-gradient(135deg, #fff 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .brand img{ 
          height: 40px; 
          width: 40px; 
          border-radius: 10px; 
          border: 2px solid var(--accent);
          box-shadow: 0 0 20px var(--accent-glow);
          transition: all 0.3s ease;
        }
        
        .brand:hover img {
          transform: scale(1.05);
          box-shadow: 0 0 30px var(--accent-glow);
        }

        .nav{ 
          display: flex; 
          gap: 8px; 
          align-items: center; 
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--chip-border);
          border-radius: 16px;
          padding: 6px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .chip{
          padding: 12px 20px; 
          border: 1px solid transparent;
          border-radius: 12px; 
          color: #e2e8f0; 
          text-decoration: none; 
          font-weight: 600;
          background: transparent; 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          font-size: 14px;
          position: relative;
          overflow: hidden;
        }

        .chip::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(55, 195, 182, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .chip:hover::before {
          left: 100%;
        }

        .chip:hover{ 
          background: rgba(55, 195, 182, 0.08);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(55, 195, 182, 0.15);
        }

        .chip.active{
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          color: #fff;
          border-color: transparent;
          box-shadow: 0 8px 25px var(--accent-glow);
          transform: translateY(-2px);
        }

        .right{ 
          display: flex; 
          gap: 12px; 
          align-items: center; 
        }

        .lang-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--chip-border);
          border-radius: 12px;
          color: var(--ink);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 14px;
          backdrop-filter: blur(10px);
        }

        .lang-selector:hover {
          background: rgba(55, 195, 182, 0.1);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(55, 195, 182, 0.15);
        }

        .lang-flag {
          font-size: 18px;
        }

        .lang-select {
          background: transparent;
          border: none;
          color: var(--ink);
          font-weight: 600;
          cursor: pointer;
          outline: none;
          font-size: 14px;
        }

        .lang-select option {
          background: var(--bg);
          color: var(--ink);
        }

        .logout-btn{
          padding: 12px 20px; 
          border-radius: 12px; 
          border: none; 
          cursor: pointer; 
          color: #fff;
          background: linear-gradient(135deg, #ff6b6b, #ee5a52);
          font-weight: 700; 
          font-size: 14px;
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logout-btn:hover{
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 107, 107, 0.4);
          background: linear-gradient(135deg, #ff5252, #e53935);
        }

        .login-btn {
          padding: 12px 24px;
          border-radius: 12px;
          border: 1px solid var(--accent);
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px var(--accent-glow);
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px var(--accent-glow);
        }

        /* --- Premium Bottom bar (mobile) --- */
        .bottombar { 
          display: none; 
        }

        @media (max-width: 820px){
          body { 
            padding-top: 0; 
            padding-bottom: 85px; 
          }
          
          .topbar { 
            display: none; 
          }
          
          .bottombar{
            display: flex;
            position: fixed; 
            bottom: 0; 
            left: 0; 
            right: 0; 
            height: 80px;
            background: var(--bg-glass);
            border-top: 1px solid var(--divider);
            justify-content: space-around; 
            align-items: center;
            z-index: 1000;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 0 8px;
            box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.2);
          }
          
          .tab{
            flex: 1; 
            text-align: center; 
            color: var(--muted); 
            text-decoration: none;
            font-size: 11px; 
            font-weight: 600; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            gap: 6px;
            padding: 10px 4px;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .tab::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 3px;
            background: linear-gradient(135deg, var(--accent), var(--accent2));
            border-radius: 2px;
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }

          .tab:hover {
            color: var(--accent);
            background: rgba(55, 195, 182, 0.05);
          }

          .tab.active{
            color: var(--accent);
          }

          .tab.active::after {
            width: 70%;
          }

          .tab svg{ 
            font-size: 22px; 
            transition: all 0.3s ease;
          }

          .tab.active svg {
            transform: scale(1.1);
            filter: drop-shadow(0 0 8px var(--accent-glow));
          }
          
          .scanBtn{
            width: 70px; 
            height: 70px; 
            border-radius: 35px; 
            margin-top: -35px;
            background: linear-gradient(135deg, var(--accent), var(--accent2));
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center;
            color: #fff; 
            font-weight: 600; 
            box-shadow: 0 8px 30px var(--accent-glow);
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .scanBtn::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transform: rotate(45deg);
            transition: all 0.6s ease;
          }

          .scanBtn:hover::before {
            transform: rotate(45deg) translate(50%, 50%);
          }

          .scanBtn:hover{
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px var(--accent-glow);
          }

          .scanBtn.active{
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px var(--accent-glow);
          }

          .scanBtn svg{ 
            font-size: 24px; 
            margin-bottom: 2px;
          }

          .scan-btn-text {
            font-size: 10px;
            font-weight: 700;
          }
        }

        /* Enhanced mobile experience */
        @media (max-width: 480px) {
          .bottombar {
            height: 75px;
            padding: 0 4px;
          }
          
          .tab {
            font-size: 10px;
            gap: 4px;
            padding: 8px 2px;
          }
          
          .tab svg {
            font-size: 20px;
          }
          
          .scanBtn {
            width: 65px;
            height: 65px;
            margin-top: -32px;
          }
          
          .scanBtn svg {
            font-size: 22px;
          }
        }

        /* Premium animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .topbar {
          animation: fadeInUp 0.6s ease-out;
        }

        .bottombar {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        /* Glass morphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}),l.jsxs("header",{className:"topbar glass",children:[l.jsxs("div",{className:"brand",children:[l.jsx("img",{src:"/assets/clinic_logo.png",alt:"Clinic logo",onError:u=>u.currentTarget.style.display="none"}),l.jsx("span",{children:i("appName","Lakidis Aesthetic")})]}),n&&l.jsxs("nav",{className:"nav glass",children:[l.jsx(Je,{to:"/home",className:({isActive:u})=>"chip"+(u?" active":""),children:i("nav.home","Home")}),l.jsx(Je,{to:"/scan",className:({isActive:u})=>"chip"+(u?" active":""),children:i("nav.scan","AI Scan")}),l.jsx(Je,{to:"/treatments",className:({isActive:u})=>"chip"+(u?" active":""),children:i("nav.treatments","Treatments")}),l.jsx(Je,{to:"/history",className:({isActive:u})=>"chip"+(u?" active":""),children:i("history.title","History")}),l.jsx(Je,{to:"/profile",className:({isActive:u})=>"chip"+(u?" active":""),children:i("nav.profile","Profile")})]}),l.jsxs("div",{className:"right",children:[l.jsxs("div",{className:"lang-selector glass",children:[l.jsx("span",{className:"lang-flag",children:s}),l.jsxs("select",{className:"lang-select",value:o,onChange:u=>a(u.target.value),"aria-label":"language",children:[l.jsx("option",{value:"en",children:"English"}),l.jsx("option",{value:"el",children:"Greek"})]})]}),n?l.jsxs("button",{className:"logout-btn",onClick:r,children:[l.jsx(S1,{}),i("common.logout","Logout")]}):l.jsx(Je,{to:"/login",className:"login-btn",children:i("login","Login")})]})]}),n&&l.jsxs("nav",{className:"bottombar glass",children:[l.jsxs(Je,{to:"/home",className:({isActive:u})=>"tab"+(u?" active":""),children:[l.jsx(b1,{}),l.jsx("span",{children:i("nav.home","Home")})]}),l.jsxs(Je,{to:"/history",className:({isActive:u})=>"tab"+(u?" active":""),children:[l.jsx(w1,{}),l.jsx("span",{children:i("history.title","History")})]}),l.jsxs(Je,{to:"/scan",className:({isActive:u})=>"scanBtn"+(u?" active":""),children:[l.jsx(v1,{}),l.jsx("span",{className:"scan-btn-text",children:i("nav.scan","Scan")})]}),l.jsxs(Je,{to:"/treatments",className:({isActive:u})=>"tab"+(u?" active":""),children:[l.jsx(k1,{}),l.jsx("span",{children:i("nav.treatments","Treatments")})]}),l.jsxs(Je,{to:"/profile",className:({isActive:u})=>"tab"+(u?" active":""),children:[l.jsx(N1,{}),l.jsx("span",{children:i("nav.profile","Profile")})]})]})]})},C1=()=>{const{auth:e,initialized:t}=Gt();return t?e?l.jsx(qf,{}):l.jsx(Vr,{to:"/login",replace:!0}):null},P1=()=>{var E;const{t:e,i18n:t}=jt(),n=gn(),r=ft(),{setAuth:i}=Gt(),[o,a]=S.useState(""),[s,c]=S.useState(""),[u,d]=S.useState(!1),[f,m]=S.useState(!1),[x,p]=S.useState(null),[v,w]=S.useState(!1),g="/assets/clinic_logo.png",h=(()=>{try{return new URLSearchParams(r.search).get("next")}catch{return null}})(),y=async R=>{await t.changeLanguage(R),localStorage.setItem("lang",R),w(!1)},b=(E=t.language)!=null&&E.startsWith("el")?"el":"en",N=b==="el"?"🇬🇷":"🇺🇸",P=b==="el"?"Ελληνικά":"English";async function C(R){var A,U,_,W,H,pe;R.preventDefault(),m(!0),p(null);try{const I=await c1(o,s);i(I);const G=h&&decodeURIComponent(h)||((U=(A=r.state)==null?void 0:A.from)==null?void 0:U.pathname)||"/home";n(G,{replace:!0})}catch(I){p(((W=(_=I==null?void 0:I.response)==null?void 0:_.data)==null?void 0:W.message)||((pe=(H=I==null?void 0:I.response)==null?void 0:H.data)==null?void 0:pe.error)||e("invalidEmailOrPassword")||"Invalid credentials")}finally{m(!1)}}return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root {
          --bg: #0b0f17;
          --card: rgba(17,24,39,0.85);
          --text: #e6edf3;
          --muted: #9aa4b2;
          --accent: #37C3B6;
          --accent-2: #2CA59A;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--bg);
          height: 100vh;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Mobile Layout - Always visible by default */
        .mobile-container {
          min-height: 100vh;
          padding: 20px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
        }

        .auth-card {
          width: 100%;
          max-width: 400px;
          background: var(--card);
          border: 1px solid rgba(55,195,182,0.15);
          border-radius: 18px;
          padding: 28px 24px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
        }

        .brand-badge {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          margin: 0 auto 14px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
          box-shadow: 0 10px 30px rgba(55,195,182,0.3);
        }

        .brand-logo {
          width: 70px;
          height: 70px;
          border-radius: 10px;
          object-fit: contain;
          display: block;
        }

        .auth-title { 
          text-align: center; 
          margin: 8px 0 4px; 
          color: var(--text); 
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .auth-sub { 
          text-align: center; 
          color: var(--muted); 
          margin: 0 0 24px; 
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .auth-form { display: grid; gap: 16px; }
        .label { 
          font-size: 14px; 
          color: var(--muted); 
          font-weight: 500;
          margin-bottom: 4px;
          display: block;
        }

        .input-group {
          position: relative;
          display: flex; 
          align-items: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 2px 10px;
          transition: all 0.3s ease;
        }

        .input-group input {
          flex: 1;
          border: none; 
          outline: none;
          background: transparent; 
          color: var(--text);
          padding: 14px 8px 14px 6px;
          font-size: 15px;
        }

        .input-group:focus-within {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(55,195,182,0.15);
        }

        .input-icon { 
          opacity: .8; 
          margin-right: 8px; 
          font-size: 16px;
        }

        .input-toggle {
          position: absolute;
          right: 8px;
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
          padding: 4px;
        }

        .btn-primary {
          width: 100%;
          border: none;
          color: #fff;
          font-weight: 700;
          padding: 16px;
          border-radius: 12px;
          cursor: pointer;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
          box-shadow: 0 4px 15px rgba(55,195,182,0.4);
          font-size: 15px;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .btn-primary:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        .btn-primary:not(:disabled):hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }

        .alert {
          color: #fca5a5;
          background: rgba(220,38,38,0.08);
          border: 1px solid rgba(220,38,38,0.25);
          padding: 12px 14px;
          border-radius: 10px;
          text-align: center;
          font-size: 14px;
        }

        .auth-foot { 
          text-align: center; 
          margin-top: 20px; 
          color: var(--text); 
          font-size: 14px;
        }
        
        .link { 
          color: var(--accent); 
          text-decoration: none; 
          font-weight: 600;
        }
        
        .link:hover { color: var(--accent-2); }

        /* Language Switcher Styles */
        .lang-switcher {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 50;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(17,24,39,0.9);
          border: 1px solid rgba(55,195,182,0.3);
          border-radius: 12px;
          color: var(--text);
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .lang-btn:hover {
          border-color: var(--accent);
          background: rgba(17,24,39,0.95);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(55,195,182,0.2);
        }

        .lang-flag {
          font-size: 18px;
        }

        .lang-name {
          font-size: 13px;
        }

        /* Language Modal */
        .lang-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          backdrop-filter: blur(4px);
        }

        .lang-modal {
          width: min(320px, 90%);
          background: rgba(17,24,39,0.95);
          border: 1px solid rgba(55,195,182,0.25);
          border-radius: 18px;
          padding: 24px;
          color: var(--text);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          backdrop-filter: blur(20px);
        }

        .lang-modal-title {
          text-align: center;
          margin: 0 0 20px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text);
        }

        .lang-options {
          display: grid;
          gap: 12px;
          margin-bottom: 16px;
        }

        .lang-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lang-option:hover {
          background: rgba(55,195,182,0.1);
          border-color: rgba(55,195,182,0.4);
          transform: translateX(4px);
        }

        .lang-option.active {
          background: rgba(55,195,182,0.15);
          border-color: var(--accent);
        }

        .lang-option-flag {
          font-size: 20px;
          width: 24px;
          text-align: center;
        }

        .lang-option-name {
          font-weight: 600;
          font-size: 14px;
        }

        .lang-option-code {
          color: var(--muted);
          font-size: 12px;
          margin-left: auto;
        }

        .lang-modal-close {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: var(--muted);
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .lang-modal-close:hover {
          border-color: var(--accent);
          color: var(--text);
        }

        /* Desktop Layout - Hidden by default, shown only on desktop */
        .desktop-container {
          display: none;
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          body {
            overflow: hidden;
          }

          .mobile-container {
            display: none;
          }

          .desktop-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 100vh;
            overflow: hidden;
            min-height: 100vh;
            position: relative;
          }

          .auth-left-side {
            background: 
              linear-gradient(135deg, rgba(11,15,23,0.85) 0%, rgba(17,24,39,0.75) 100%),
              url("/assets/img2.jpg") center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          .auth-left-side::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
              rgba(55,195,182,0.15) 0%, 
              rgba(11,15,23,0.6) 50%,
              rgba(17,24,39,0.7) 100%);
            z-index: 1;
          }

          .side-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: var(--text);
            max-width: 85%;
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .side-logo {
            width: 140px;
            height: 140px;
            margin: 0 auto 30px;
            border-radius: 24px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
            padding: 18px;
            box-shadow: 
              0 25px 50px rgba(55,195,182,0.3),
              0 0 0 1px rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .side-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 12px;
            filter: brightness(1.1);
          }

          .side-title {
            font-size: 3.2rem;
            font-weight: 800;
            margin-bottom: 16px;
            background: linear-gradient(135deg, #ffffff 0%, var(--accent) 50%, #2CA59A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
            text-shadow: 0 4px 20px rgba(55,195,182,0.3);
          }

          .side-subtitle {
            font-size: 1.3rem;
            color: var(--text);
            line-height: 1.6;
            max-width: 480px;
            margin: 0 auto 30px;
            font-weight: 500;
            opacity: 0.95;
          }

          .tagline {
            font-size: 1.1rem;
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .auth-right-side {
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--bg);
            padding: 40px;
            position: relative;
            overflow-y: auto;
            height: 100vh;
          }

          .auth-right-content {
            width: 100%;
            max-width: 420px;
            margin: 0 auto;
          }

          .auth-left-desktop {
            width: 100%;
            border: 1px solid rgba(55,195,182,0.2);
            border-radius: 20px;
            padding: 40px 35px;
            backdrop-filter: blur(15px);
            background: rgba(17,24,39,0.9);
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4);
          }

          .brand-badge-desktop {
            width: 80px;
            height: 80px;
            border-radius: 16px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
            box-shadow: 0 10px 30px rgba(55,195,182,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .brand-logo-desktop {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            object-fit: contain;
            display: block;
          }

          .auth-title-desktop { 
            text-align: center; 
            margin: 8px 0 4px; 
            color: var(--text); 
            font-size: 1.8rem;
          }

          .auth-sub-desktop { 
            text-align: center; 
            color: var(--muted); 
            margin: 0 0 30px; 
            font-size: 1rem;
          }

          .lang-switcher-desktop {
            position: absolute;
            top: 30px;
            right: 30px;
            z-index: 50;
          }

          .btn-primary-desktop {
            width: 100%;
            border: none;
            color: #fff;
            font-weight: 700;
            padding: 16px;
            border-radius: 14px;
            cursor: pointer;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
            box-shadow: 0 4px 15px rgba(55,195,182,0.4);
            font-size: 15px;
            transition: all 0.3s ease;
            margin-top: 10px;
          }

          .btn-primary-desktop:disabled {
            opacity: .6;
            cursor: not-allowed;
          }

          .btn-primary-desktop:not(:disabled):hover {
            filter: brightness(1.05);
            transform: translateY(-1px);
          }
        }

        /* Mobile optimizations for language switcher */
        @media (max-width: 767px) {
          .lang-switcher {
            top: 15px;
            right: 15px;
          }

          .lang-btn {
            padding: 8px 12px;
            font-size: 13px;
          }

          .lang-name {
            display: none;
          }

          .lang-modal {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .lang-btn {
            padding: 8px;
            min-width: 44px;
            height: 44px;
            justify-content: center;
          }

          .lang-flag {
            font-size: 16px;
          }

          .auth-card {
            padding: 24px 20px;
          }
          
          .mobile-container {
            padding: 16px 12px;
          }
        }
      `}),v&&l.jsx("div",{className:"lang-modal-backdrop",onClick:()=>w(!1),children:l.jsxs("div",{className:"lang-modal",onClick:R=>R.stopPropagation(),children:[l.jsx("h3",{className:"lang-modal-title",children:"Select Language"}),l.jsxs("div",{className:"lang-options",children:[l.jsxs("div",{className:`lang-option ${b==="en"?"active":""}`,onClick:()=>y("en"),children:[l.jsx("span",{className:"lang-option-flag",children:"🇺🇸"}),l.jsx("span",{className:"lang-option-name",children:"English"}),l.jsx("span",{className:"lang-option-code",children:"English"})]}),l.jsxs("div",{className:`lang-option ${b==="el"?"active":""}`,onClick:()=>y("el"),children:[l.jsx("span",{className:"lang-option-flag",children:"🇬🇷"}),l.jsx("span",{className:"lang-option-name",children:"Ελληνικά"}),l.jsx("span",{className:"lang-option-code",children:"Greek"})]})]}),l.jsx("button",{className:"lang-modal-close",onClick:()=>w(!1),children:"Close"})]})}),l.jsxs("div",{className:"mobile-container",children:[l.jsx("div",{className:"lang-switcher",children:l.jsxs("button",{className:"lang-btn",onClick:()=>w(!0),"aria-label":"Change language",children:[l.jsx("span",{className:"lang-flag",children:N}),l.jsx("span",{className:"lang-name",children:P})]})}),l.jsxs("div",{className:"auth-card",children:[l.jsx("div",{className:"brand-badge","aria-hidden":!0,children:l.jsx("img",{src:g,alt:"Brand Logo",className:"brand-logo"})}),l.jsx("h1",{className:"auth-title",children:e("welcomeBack")||"Welcome back"}),l.jsx("p",{className:"auth-sub",children:e("signInSubtitle")||"Sign in to continue to your AI dashboard"}),l.jsxs("form",{className:"auth-form",onSubmit:C,children:[x&&l.jsx("div",{className:"alert",children:x}),l.jsx("label",{className:"label",children:e("email")||"Email address"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"👤"}),l.jsx("input",{type:"email",value:o,onChange:R=>a(R.target.value),placeholder:e("email")||"Email address",required:!0,disabled:f})]}),l.jsx("label",{className:"label",children:e("password")||"Password"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"🔒"}),l.jsx("input",{type:u?"text":"password",value:s,onChange:R=>c(R.target.value),placeholder:e("password")||"Password",required:!0,disabled:f}),l.jsx("button",{type:"button",className:"input-toggle",onClick:()=>d(R=>!R),"aria-label":u?"Hide password":"Show password",children:u?"🙈":"👁️"})]}),l.jsx("button",{className:"btn-primary",disabled:f,children:f?e("pleaseWait")||"Please wait…":e("login")||"Sign in"}),l.jsxs("div",{className:"auth-foot",children:[l.jsx("span",{className:"muted",children:e("noAccount")||"Don't have an account?"})," ",l.jsx(Vn,{to:"/signup",className:"link",children:e("signup")||"Sign up"})]})]})]})]}),l.jsxs("div",{className:"desktop-container",children:[l.jsx("div",{className:"auth-left-side",children:l.jsxs("div",{className:"side-content",children:[l.jsx("div",{className:"side-logo",children:l.jsx("img",{src:g,alt:"Lakidis Aesthetic Logo"})}),l.jsx("div",{className:"tagline",children:"AI-Powered Aesthetic Solutions"}),l.jsxs("h1",{className:"side-title",children:["Facial AI",l.jsx("br",{}),"Analysis"]}),l.jsx("p",{className:"side-subtitle",children:"Revolutionizing skin health with advanced artificial intelligence and personalized treatment insights"})]})}),l.jsx("div",{className:"auth-right-side",children:l.jsxs("div",{className:"auth-right-content",children:[l.jsx("div",{className:"lang-switcher-desktop",children:l.jsxs("button",{className:"lang-btn",onClick:()=>w(!0),"aria-label":"Change language",children:[l.jsx("span",{className:"lang-flag",children:N}),l.jsx("span",{className:"lang-name",children:P})]})}),l.jsxs("div",{className:"auth-left-desktop",children:[l.jsx("div",{className:"brand-badge-desktop","aria-hidden":!0,children:l.jsx("img",{src:g,alt:"Brand Logo",className:"brand-logo-desktop"})}),l.jsx("h1",{className:"auth-title-desktop",children:e("welcomeBack")||"Welcome back"}),l.jsx("p",{className:"auth-sub-desktop",children:e("signInSubtitle")||"Sign in to continue to your AI dashboard"}),l.jsxs("form",{className:"auth-form",onSubmit:C,children:[x&&l.jsx("div",{className:"alert",children:x}),l.jsx("label",{className:"label",children:e("email")||"Email address"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"👤"}),l.jsx("input",{type:"email",value:o,onChange:R=>a(R.target.value),placeholder:e("email")||"Email address",required:!0,disabled:f})]}),l.jsx("label",{className:"label",children:e("password")||"Password"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"🔒"}),l.jsx("input",{type:u?"text":"password",value:s,onChange:R=>c(R.target.value),placeholder:e("password")||"Password",required:!0,disabled:f}),l.jsx("button",{type:"button",className:"input-toggle",onClick:()=>d(R=>!R),"aria-label":u?"Hide password":"Show password",children:u?"🙈":"👁"})]}),l.jsx("button",{className:"btn-primary-desktop",disabled:f,children:f?e("pleaseWait")||"Please wait…":e("login")||"Sign in"}),l.jsxs("div",{className:"auth-foot",children:[l.jsx("span",{className:"muted",children:e("noAccount")||"Don't have an account?"})," ",l.jsx(Vn,{to:"/signup",className:"link",children:e("signup")||"Sign up"})]})]})]})]})})]})]})},E1=()=>{var U;const{t:e,i18n:t}=jt(),n=gn(),r=ft(),{setAuth:i}=Gt(),[o,a]=S.useState(""),[s,c]=S.useState(""),[u,d]=S.useState(""),[f,m]=S.useState(!1),[x,p]=S.useState(!1),[v,w]=S.useState(null),[g,h]=S.useState(!1),y="/assets/clinic_logo.png",b=(()=>{try{return new URLSearchParams(r.search).get("next")}catch{return null}})(),N=async _=>{await t.changeLanguage(_),localStorage.setItem("lang",_),h(!1)},P=(U=t.language)!=null&&U.startsWith("el")?"el":"en",C=P==="el"?"🇬🇷":"🇺🇸",E=P==="el"?"Ελληνικά":"English";function R(){return o.trim()?s?s.length<6?e("passwordTooShort")||"Password should be at least 6 characters.":s!==u?e("passwordsDontMatch")||"Passwords do not match.":null:e("enterPassword")||"Please enter a password.":e("enterEmail")||"Please enter your email."}async function A(_){var H,pe,I,G,O,T;_.preventDefault(),w(null);const W=R();if(W){w(W);return}p(!0);try{const j=await l1(o,s);i(j);const $=b&&decodeURIComponent(b)||((pe=(H=r.state)==null?void 0:H.from)==null?void 0:pe.pathname)||"/home";n($,{replace:!0})}catch(j){w(((G=(I=j==null?void 0:j.response)==null?void 0:I.data)==null?void 0:G.message)||((T=(O=j==null?void 0:j.response)==null?void 0:O.data)==null?void 0:T.error)||e("emailAlreadyRegistered")||"Email already registered")}finally{p(!1)}}return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root {
          --bg: #0b0f17;
          --card: rgba(17,24,39,0.85);
          --text: #e6edf3;
          --muted: #9aa4b2;
          --accent: #37C3B6;
          --accent-2: #2CA59A;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--bg);
          height: 100vh;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Mobile Layout - Always visible by default */
        .mobile-container {
          min-height: 100vh;
          padding: 20px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
        }

        .auth-card {
          width: 100%;
          max-width: 400px;
          background: var(--card);
          border: 1px solid rgba(55,195,182,0.15);
          border-radius: 18px;
          padding: 28px 24px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
        }

        .brand-badge {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          margin: 0 auto 14px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
          box-shadow: 0 10px 30px rgba(55,195,182,0.3);
        }

        .brand-logo {
          width: 70px;
          height: 70px;
          border-radius: 10px;
          object-fit: contain;
          display: block;
        }

        .auth-title { 
          text-align: center; 
          margin: 8px 0 4px; 
          color: var(--text); 
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .auth-sub { 
          text-align: center; 
          color: var(--muted); 
          margin: 0 0 24px; 
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .auth-form { display: grid; gap: 16px; }
        .label { 
          font-size: 14px; 
          color: var(--muted); 
          font-weight: 500;
          margin-bottom: 4px;
          display: block;
        }

        .input-group {
          position: relative;
          display: flex; 
          align-items: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 2px 10px;
          transition: all 0.3s ease;
        }

        .input-group input {
          flex: 1;
          border: none; 
          outline: none;
          background: transparent; 
          color: var(--text);
          padding: 14px 8px 14px 6px;
          font-size: 15px;
        }

        .input-group:focus-within {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(55,195,182,0.15);
        }

        .input-icon { 
          opacity: .8; 
          margin-right: 8px; 
          font-size: 16px;
        }

        .input-toggle {
          position: absolute;
          right: 8px;
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
          padding: 4px;
        }

        .btn-primary {
          width: 100%;
          border: none;
          color: #fff;
          font-weight: 700;
          padding: 16px;
          border-radius: 12px;
          cursor: pointer;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
          box-shadow: 0 4px 15px rgba(55,195,182,0.4);
          font-size: 15px;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .btn-primary:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        .btn-primary:not(:disabled):hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }

        .alert {
          color: #fca5a5;
          background: rgba(220,38,38,0.08);
          border: 1px solid rgba(220,38,38,0.25);
          padding: 12px 14px;
          border-radius: 10px;
          text-align: center;
          font-size: 14px;
        }

        .auth-foot { 
          text-align: center; 
          margin-top: 20px; 
          color: var(--text); 
          font-size: 14px;
        }
        
        .link { 
          color: var(--accent); 
          text-decoration: none; 
          font-weight: 600;
        }
        
        .link:hover { color: var(--accent-2); }

        /* Language Switcher Styles */
        .lang-switcher {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 50;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(17,24,39,0.9);
          border: 1px solid rgba(55,195,182,0.3);
          border-radius: 12px;
          color: var(--text);
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .lang-btn:hover {
          border-color: var(--accent);
          background: rgba(17,24,39,0.95);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(55,195,182,0.2);
        }

        .lang-flag {
          font-size: 18px;
        }

        .lang-name {
          font-size: 13px;
        }

        /* Language Modal */
        .lang-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          backdrop-filter: blur(4px);
        }

        .lang-modal {
          width: min(320px, 90%);
          background: rgba(17,24,39,0.95);
          border: 1px solid rgba(55,195,182,0.25);
          border-radius: 18px;
          padding: 24px;
          color: var(--text);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          backdrop-filter: blur(20px);
        }

        .lang-modal-title {
          text-align: center;
          margin: 0 0 20px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text);
        }

        .lang-options {
          display: grid;
          gap: 12px;
          margin-bottom: 16px;
        }

        .lang-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lang-option:hover {
          background: rgba(55,195,182,0.1);
          border-color: rgba(55,195,182,0.4);
          transform: translateX(4px);
        }

        .lang-option.active {
          background: rgba(55,195,182,0.15);
          border-color: var(--accent);
        }

        .lang-option-flag {
          font-size: 20px;
          width: 24px;
          text-align: center;
        }

        .lang-option-name {
          font-weight: 600;
          font-size: 14px;
        }

        .lang-option-code {
          color: var(--muted);
          font-size: 12px;
          margin-left: auto;
        }

        .lang-modal-close {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: var(--muted);
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .lang-modal-close:hover {
          border-color: var(--accent);
          color: var(--text);
        }

        /* Desktop Layout - Hidden by default, shown only on desktop */
        .desktop-container {
          display: none;
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          body {
            overflow: hidden;
          }

          .mobile-container {
            display: none;
          }

          .desktop-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 100vh;
            overflow: hidden;
            min-height: 100vh;
            position: relative;
          }

          .auth-left-side {
            background: 
              linear-gradient(135deg, rgba(11,15,23,0.85) 0%, rgba(17,24,39,0.75) 100%),
              url("/assets/img3.jpg") center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          .auth-left-side::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
              rgba(55,195,182,0.15) 0%, 
              rgba(11,15,23,0.6) 50%,
              rgba(17,24,39,0.7) 100%);
            z-index: 1;
          }

          .side-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: var(--text);
            max-width: 85%;
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .side-logo {
            width: 140px;
            height: 140px;
            margin: 0 auto 30px;
            border-radius: 24px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
            padding: 18px;
            box-shadow: 
              0 25px 50px rgba(55,195,182,0.3),
              0 0 0 1px rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .side-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 12px;
            filter: brightness(1.1);
          }

          .side-title {
            font-size: 3.2rem;
            font-weight: 800;
            margin-bottom: 16px;
            background: linear-gradient(135deg, #ffffff 0%, var(--accent) 50%, #2CA59A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
            text-shadow: 0 4px 20px rgba(55,195,182,0.3);
          }

          .side-subtitle {
            font-size: 1.3rem;
            color: var(--text);
            line-height: 1.6;
            max-width: 480px;
            margin: 0 auto 30px;
            font-weight: 500;
            opacity: 0.95;
          }

          .tagline {
            font-size: 1.1rem;
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .auth-right-side {
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--bg);
            padding: 40px;
            position: relative;
            overflow-y: auto;
            height: 100vh;
          }

          .auth-right-content {
            width: 100%;
            max-width: 420px;
            margin: 0 auto;
          }

          .auth-left-desktop {
            width: 100%;
            border: 1px solid rgba(55,195,182,0.2);
            border-radius: 20px;
            padding: 40px 35px;
            backdrop-filter: blur(15px);
            background: rgba(17,24,39,0.9);
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4);
          }

          .brand-badge-desktop {
            width: 80px;
            height: 80px;
            border-radius: 16px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
            box-shadow: 0 10px 30px rgba(55,195,182,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .brand-logo-desktop {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            object-fit: contain;
            display: block;
          }

          .auth-title-desktop { 
            text-align: center; 
            margin: 8px 0 4px; 
            color: var(--text); 
            font-size: 1.8rem;
          }

          .auth-sub-desktop { 
            text-align: center; 
            color: var(--muted); 
            margin: 0 0 30px; 
            font-size: 1rem;
          }

          .lang-switcher-desktop {
            position: absolute;
            top: 30px;
            right: 30px;
            z-index: 50;
          }

          .btn-primary-desktop {
            width: 100%;
            border: none;
            color: #fff;
            font-weight: 700;
            padding: 16px;
            border-radius: 14px;
            cursor: pointer;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
            box-shadow: 0 4px 15px rgba(55,195,182,0.4);
            font-size: 15px;
            transition: all 0.3s ease;
            margin-top: 10px;
          }

          .btn-primary-desktop:disabled {
            opacity: .6;
            cursor: not-allowed;
          }

          .btn-primary-desktop:not(:disabled):hover {
            filter: brightness(1.05);
            transform: translateY(-1px);
          }
        }

        /* Mobile optimizations for language switcher */
        @media (max-width: 767px) {
          .lang-switcher {
            top: 15px;
            right: 15px;
          }

          .lang-btn {
            padding: 8px 12px;
            font-size: 13px;
          }

          .lang-name {
            display: none;
          }

          .lang-modal {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .lang-btn {
            padding: 8px;
            min-width: 44px;
            height: 44px;
            justify-content: center;
          }

          .lang-flag {
            font-size: 16px;
          }

          .auth-card {
            padding: 24px 20px;
          }
          
          .mobile-container {
            padding: 16px 12px;
          }
        }
      `}),g&&l.jsx("div",{className:"lang-modal-backdrop",onClick:()=>h(!1),children:l.jsxs("div",{className:"lang-modal",onClick:_=>_.stopPropagation(),children:[l.jsx("h3",{className:"lang-modal-title",children:"Select Language"}),l.jsxs("div",{className:"lang-options",children:[l.jsxs("div",{className:`lang-option ${P==="en"?"active":""}`,onClick:()=>N("en"),children:[l.jsx("span",{className:"lang-option-flag",children:"🇺🇸"}),l.jsx("span",{className:"lang-option-name",children:"English"}),l.jsx("span",{className:"lang-option-code",children:"ENGLISH"})]}),l.jsxs("div",{className:`lang-option ${P==="el"?"active":""}`,onClick:()=>N("el"),children:[l.jsx("span",{className:"lang-option-flag",children:"🇬🇷"}),l.jsx("span",{className:"lang-option-name",children:"Ελληνικά"}),l.jsx("span",{className:"lang-option-code",children:"GREEK"})]})]}),l.jsx("button",{className:"lang-modal-close",onClick:()=>h(!1),children:"Close"})]})}),l.jsxs("div",{className:"mobile-container",children:[l.jsx("div",{className:"lang-switcher",children:l.jsxs("button",{className:"lang-btn",onClick:()=>h(!0),"aria-label":"Change language",children:[l.jsx("span",{className:"lang-flag",children:C}),l.jsx("span",{className:"lang-name",children:E})]})}),l.jsxs("div",{className:"auth-card",children:[l.jsx("div",{className:"brand-badge","aria-hidden":!0,children:l.jsx("img",{src:y,alt:"Brand Logo",className:"brand-logo"})}),l.jsx("h1",{className:"auth-title",children:e("createAccount")||"Create your account"}),l.jsx("p",{className:"auth-sub",children:e("signupSubtitle")||"Join us to unlock your personalized beauty insights."}),l.jsxs("form",{className:"auth-form",onSubmit:A,children:[v&&l.jsx("div",{className:"alert",children:v}),l.jsx("label",{className:"label",children:e("email")||"Email"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"👤"}),l.jsx("input",{type:"email",value:o,onChange:_=>a(_.target.value),placeholder:e("email")||"Email",required:!0,disabled:x})]}),l.jsx("label",{className:"label",children:e("password")||"Password"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"🔒"}),l.jsx("input",{type:f?"text":"password",value:s,onChange:_=>c(_.target.value),placeholder:e("password")||"Password",required:!0,disabled:x}),l.jsx("button",{type:"button",className:"input-toggle",onClick:()=>m(_=>!_),"aria-label":f?"Hide password":"Show password",children:f?"🙈":"👁️"})]}),l.jsx("label",{className:"label",children:e("confirmPassword")||"Confirm password"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"✅"}),l.jsx("input",{type:f?"text":"password",value:u,onChange:_=>d(_.target.value),placeholder:e("confirmPassword")||"Confirm password",required:!0,disabled:x})]}),l.jsx("button",{className:"btn-primary",disabled:x,children:x?e("pleaseWait")||"Please wait…":e("signup")||"Sign up"}),l.jsxs("div",{className:"auth-foot",children:[l.jsx("span",{className:"muted",children:e("haveAccount")||"Already have an account?"})," ",l.jsx(Vn,{to:"/login",className:"link",children:e("login")||"Log in"})]})]})]})]}),l.jsxs("div",{className:"desktop-container",children:[l.jsx("div",{className:"auth-left-side",children:l.jsxs("div",{className:"side-content",children:[l.jsx("div",{className:"side-logo",children:l.jsx("img",{src:y,alt:"Lakidis Aesthetic Logo"})}),l.jsx("div",{className:"tagline",children:"Join Our AI Revolution"}),l.jsxs("h1",{className:"side-title",children:["Start Your",l.jsx("br",{}),"Skin Journey"]}),l.jsx("p",{className:"side-subtitle",children:"Create your account to unlock personalized AI skin analysis and professional treatment recommendations"})]})}),l.jsx("div",{className:"auth-right-side",children:l.jsxs("div",{className:"auth-right-content",children:[l.jsx("div",{className:"lang-switcher-desktop",children:l.jsxs("button",{className:"lang-btn",onClick:()=>h(!0),"aria-label":"Change language",children:[l.jsx("span",{className:"lang-flag",children:C}),l.jsx("span",{className:"lang-name",children:E})]})}),l.jsxs("div",{className:"auth-left-desktop",children:[l.jsx("div",{className:"brand-badge-desktop","aria-hidden":!0,children:l.jsx("img",{src:y,alt:"Brand Logo",className:"brand-logo-desktop"})}),l.jsx("h1",{className:"auth-title-desktop",children:e("createAccount")||"Create account"}),l.jsx("p",{className:"auth-sub-desktop",children:e("signupSubtitle")||"Join us to unlock powerful AI insights"}),l.jsxs("form",{className:"auth-form",onSubmit:A,children:[v&&l.jsx("div",{className:"alert",children:v}),l.jsx("label",{className:"label",children:e("email")||"Email address"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"👤"}),l.jsx("input",{type:"email",value:o,onChange:_=>a(_.target.value),placeholder:e("email")||"Email address",required:!0,disabled:x})]}),l.jsx("label",{className:"label",children:e("password")||"Password"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"🔒"}),l.jsx("input",{type:f?"text":"password",value:s,onChange:_=>c(_.target.value),placeholder:e("password")||"Password",required:!0,disabled:x}),l.jsx("button",{type:"button",className:"input-toggle",onClick:()=>m(_=>!_),"aria-label":f?"Hide password":"Show password",children:f?"🙈":"👁"})]}),l.jsx("label",{className:"label",children:e("confirmPassword")||"Confirm password"}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"input-icon","aria-hidden":!0,children:"✅"}),l.jsx("input",{type:f?"text":"password",value:u,onChange:_=>d(_.target.value),placeholder:e("confirmPassword")||"Confirm password",required:!0,disabled:x})]}),l.jsx("button",{className:"btn-primary-desktop",disabled:x,children:x?e("pleaseWait")||"Please wait…":e("signup")||"Create account"}),l.jsxs("div",{className:"auth-foot",children:[l.jsx("span",{className:"muted",children:e("haveAccount")||"Already have an account?"})," ",l.jsx(Vn,{to:"/login",className:"link",children:e("login")||"Sign in"})]})]})]})]})})]})]})},L1=()=>{const e=gn(),{t}=jt();return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root{
          --bg:#0A192F;
          --bg2:#162947;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.25);
          --text:#FFFFFF;
          --muted: rgba(255,255,255,0.85);
          --accent:#37C3B6;
          --accent2:#2CA59A;
          --gold:#FFD700;
        }

        .home {
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          overflow: hidden;
        }

        .container-lg { width: 100%; max-width: 1140px; margin: 0 auto; padding: 0 16px; }
        .container-md { width: 100%; max-width: 900px; margin: 0 auto; padding: 0 16px; }

        /* ---------- HERO ---------- */
        .hero {
          position: relative;
          height: min(100vh, 880px);
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--bg);
        }
        .hero video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          z-index: 0;
        }
        .hero::after{
          content:"";
          position:absolute; inset:0;
          background: linear-gradient(135deg, rgba(10,25,47,.9) 0%, rgba(22,41,71,.8) 100%);
          z-index: 1;
        }
        .hero-grid{
          position: relative;
          z-index: 2;
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr;
          align-items: center;
          padding-top: 20px; 
          padding-bottom: 40px; 
        }
        @media (min-width: 900px){
          .hero-grid{ 
            grid-template-columns: 1.1fr .9fr; 
            padding-top: 0; 
            padding-bottom: 0; 
          }
        }

        /* ✅ Mobile only padding */
        @media (max-width: 768px) {
          .h-title { padding-top: 110px; }
        }

        .h-title{
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 16px;
          font-size: clamp(2.2rem, 4.5vw, 4rem);
          background: linear-gradient(135deg, #fff 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeUp .9s ease both;
        }
        .h-sub{
          color: var(--muted);
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          line-height: 1.6;
          margin: 0 0 28px;
          animation: fadeUp .9s ease .08s both;
        }
        .btn-row{
          display: grid; gap: 14px;
          grid-template-columns: 1fr;
          width: 100%;
          max-width: 520px;
          animation: fadeUp .9s ease .15s both;
        }
        @media (min-width: 560px){
          .btn-row{ grid-template-columns: 1fr 1fr; }
        }
        .btn-primary{
          padding: 14px 22px;
          border-radius: 14px;
          border: none;
          color: #fff;
          font-weight: 800;
          font-size: 1.05rem;
          cursor: pointer;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 8px 32px rgba(55,195,182,0.3);
        }
        .btn-primary:hover{ filter: brightness(1.05) }
        .btn-ghost{
          padding: 14px 22px;
          border-radius: 14px;
          font-weight: 800;
          font-size: 1.05rem;
          cursor: pointer;
          color: var(--text);
          background: transparent;
          border: 2px solid rgba(55,195,182,.5);
        }
        .btn-ghost:hover{
          border-color: var(--accent);
          background: rgba(55,195,182,.1);
        }

        .hero-card{
          height: 400px;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(55,195,182,.12) 0%, rgba(10,25,47,.3) 100%);
          border: 2px solid var(--cardBorder);
          display:flex; align-items:center; justify-content:center;
          padding: 28px;
          position: relative;
          overflow: hidden;
          animation: fadeUp .9s ease .2s both;
        }

        /* 🔹 Badge + logo (replaces star) */
        .logo-badge{
          width: 104px; height: 104px;
          border-radius: 18px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          display:flex; align-items:center; justify-content:center;
          margin: 0 auto 14px;
          box-shadow: 0 12px 30px rgba(55,195,182,.35);
        }
        .logo-badge .logo-img{
          width: 80px; height: 80px;             /* nicely inset inside 104x104 */
          border-radius: 14px;                    /* keeps rounded-corner look */
          object-fit: contain;
          display:block;
        }

        .hero-card h3{ text-align:center; margin: 8px 0; font-size: 1.8rem; }
        .hero-card p{ text-align:center; color: var(--muted); margin: 0; }

        /* ---------- WHY CHOOSE ---------- */
        .sec{ padding: 80px 0; background: var(--bg); }
        .sec .head{ text-align:center; margin-bottom: 40px; }
        .sec .head h2{ margin: 0 0 10px; font-size: clamp(1.8rem, 3vw, 3rem); font-weight: 800; }
        .sec .head p{ margin: 0 auto; color: var(--muted); max-width: 640px; }

        .grid-3{ display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 780px){ .grid-3{ grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px){ .grid-3{ grid-template-columns: repeat(3, 1fr); } }

        .feature-card{
          height: 100%;
          background: var(--card);
          border: 1px solid var(--cardBorder);
          border-radius: 18px;
          padding: 22px;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .feature-card:hover{
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(55,195,182,.15);
          border-color: var(--accent);
        }
        .f-icon{
          width: 56px; height: 56px; border-radius: 14px;
          display:flex; align-items:center; justify-content:center;
          margin-bottom: 14px;
          color: #fff; font-size: 28px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 10px 24px rgba(55,195,182,.3);
        }
        .feature-card h4{ margin: 0 0 8px; font-size: 1.25rem; }
        .feature-card p{ margin: 0; color: var(--muted); line-height: 1.6; }

        /* ---------- PROCESS ---------- */
        .sec-alt{ padding: 80px 0; background: linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%); }
        .grid-steps{ display:grid; gap: 28px; grid-template-columns: 1fr; }
        @media (min-width: 900px){ .grid-steps{ grid-template-columns: repeat(3, 1fr); } }
        .step{ text-align:center; }
        .step-num{
          width: 86px; height: 86px; margin: 0 auto 12px;
          border-radius: 50%;
          font-weight: 800; font-size: 24px;
          display:flex; align-items:center; justify-content:center;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          color: #fff; box-shadow: 0 10px 28px rgba(55,195,182,.35);
        }
        .step .icon{ color: var(--accent); font-size: 32px; margin-bottom: 8px; }
        .step h4{ margin: 6px 0; font-size: 1.4rem; }
        .step p{ margin: 0; color: var(--muted); line-height: 1.6; }

        /* ---------- STATS ---------- */
        .stats{ padding: 80px 0; background: var(--bg); }
        .grid-4{ display:grid; gap: 26px; grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 900px){ .grid-4{ grid-template-columns: repeat(4, 1fr);} }
        .stat{ text-align:center; }
        .stat .num{
          color: var(--accent);
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          margin: 0 0 6px;
        }
        .stat .lbl{ color: var(--muted); }

        /* ---------- CTA ---------- */
        .cta{
          padding: 90px 0;
          background: linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%);
          text-align: center;
        }
        .cta h2{ margin: 0 0 12px; font-weight: 800; font-size: clamp(1.8rem, 3vw, 3rem); }
        .cta p{ margin: 0 auto 26px; color: var(--muted); max-width: 560px; }
        .cta .btn-primary{ padding: 15px 28px; font-size: 1.1rem; box-shadow: 0 10px 32px rgba(55,195,182,.35); }

        /* ---------- DISCLAIMER ---------- */
        .disc{ padding: 40px 0 70px; background: rgba(10,25,47,.8); }
        .disc-card{
          background: rgba(17,24,39,.9);
          border: 1px solid var(--cardBorder);
          border-radius: 18px;
          padding: 22px;
        }
        .disc-card h5{ margin: 0 0 10px; font-size: 1.1rem; }
        .disc-card p{ margin: 0; color: var(--muted); line-height: 1.6; }

        /* ---------- ANIMS ---------- */
        @keyframes fadeUp{
          from{ opacity:0; transform: translateY(14px); }
          to{ opacity:1; transform: translateY(0); }
        }

        /* ========== MOBILE OPTIMIZATIONS ========== */
        @media (max-width: 768px) {
          /* Hero Section Mobile Optimization */
          .hero {
            min-height: 500px;
            height: auto;
            padding: 80px 0 40px;
          }
          
          .hero-grid {
            gap: 30px;
            padding-top: 0;
            padding-bottom: 20px;
          }
          
          .h-title {
            padding-top: 0;
            font-size: 1.8rem;
            text-align: center;
            margin-bottom: 12px;
          }
          
          .h-sub {
            font-size: 0.95rem;
            text-align: center;
            margin-bottom: 22px;
            line-height: 1.5;
          }
          
          .btn-row {
            max-width: 100%;
            gap: 12px;
          }
          
          .btn-primary, .btn-ghost {
            padding: 12px 16px;
            font-size: 0.95rem;
            border-radius: 12px;
          }
          
          .hero-card {
            height: 280px;
            border-radius: 18px;
            padding: 20px;
            margin-top: 10px;
          }
          
          .logo-badge {
            width: 80px;
            height: 80px;
            border-radius: 14px;
            margin-bottom: 12px;
          }
          
          .logo-badge .logo-img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
          }
          
          .hero-card h3 {
            font-size: 1.4rem;
            margin: 6px 0;
          }
          
          .hero-card p {
            font-size: 0.9rem;
          }
          
          /* Sections Mobile Optimization */
          .sec, .sec-alt, .stats, .cta {
            padding: 50px 0;
          }
          
          .sec .head, .sec-alt .head {
            margin-bottom: 30px;
          }
          
          .sec .head h2, .sec-alt .head h2, .cta h2 {
            font-size: 1.6rem;
            margin-bottom: 8px;
          }
          
          .sec .head p, .sec-alt .head p, .cta p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          /* Feature Cards Mobile Optimization */
          .grid-3 {
            gap: 14px;
          }
          
          .feature-card {
            padding: 18px;
            border-radius: 14px;
          }
          
          .f-icon {
            width: 46px;
            height: 46px;
            border-radius: 12px;
            font-size: 22px;
            margin-bottom: 12px;
          }
          
          .feature-card h4 {
            font-size: 1.1rem;
            margin-bottom: 6px;
          }
          
          .feature-card p {
            font-size: 0.85rem;
            line-height: 1.5;
          }
          
          /* Steps Mobile Optimization - UPDATED FOR SINGLE ROW */
          .grid-steps {
            gap: 16px;
            grid-template-columns: repeat(3, 1fr) !important;
            align-items: start;
          }
          
          .step-num {
            width: 50px;
            height: 50px;
            font-size: 16px;
            margin-bottom: 8px;
          }
          
          .step .icon {
            font-size: 20px;
            margin-bottom: 4px;
          }
          
          .step h4 {
            font-size: 0.9rem;
            margin: 2px 0;
            line-height: 1.3;
          }
          
          .step p {
            font-size: 0.75rem;
            line-height: 1.3;
          }
          
          /* Stats Mobile Optimization */
          .grid-4 {
            gap: 20px;
          }
          
          .stat .num {
            font-size: 1.8rem;
          }
          
          .stat .lbl {
            font-size: 0.85rem;
          }
          
          /* CTA Mobile Optimization */
          .cta .btn-primary {
            padding: 13px 24px;
            font-size: 1rem;
            border-radius: 12px;
          }
          
          /* Disclaimer Mobile Optimization */
          .disc {
            padding: 30px 0 100px;
          }
          
          .disc-card {
            padding: 18px;
            border-radius: 14px;
          }
          
          .disc-card h5 {
            font-size: 1rem;
            margin-bottom: 8px;
          }
          
          .disc-card p {
            font-size: 0.85rem;
            line-height: 1.5;
          }
        }
        
        /* Extra Small Mobile Devices */
        @media (max-width: 480px) {
          .grid-steps {
            gap: 12px;
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          .step-num {
            width: 44px;
            height: 44px;
            font-size: 14px;
          }
          
          .step .icon {
            font-size: 18px;
          }
          
          .step h4 {
            font-size: 0.85rem;
          }
          
          .step p {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 380px) {
          .hero {
            padding: 70px 0 30px;
            min-height: 450px;
          }
          
          .h-title {
            font-size: 1.6rem;
          }
          
          .h-sub {
            font-size: 0.9rem;
          }
          
          .btn-primary, .btn-ghost {
            padding: 11px 14px;
            font-size: 0.9rem;
          }
          
          .hero-card {
            height: 250px;
            padding: 16px;
          }
          
          .logo-badge {
            width: 70px;
            height: 70px;
          }
          
          .logo-badge .logo-img {
            width: 54px;
            height: 54px;
          }
          
          .hero-card h3 {
            font-size: 1.2rem;
          }
          
          .hero-card p {
            font-size: 0.85rem;
          }
          
          .sec, .sec-alt, .stats, .cta {
            padding: 40px 0;
          }
          
          .feature-card {
            padding: 16px;
          }
          
          .f-icon {
            width: 42px;
            height: 42px;
            font-size: 20px;
          }
          
          .feature-card h4 {
            font-size: 1rem;
          }
          
          .feature-card p {
            font-size: 0.8rem;
          }

          /* Extra small optimization for steps */
          .grid-steps {
            gap: 10px;
          }
          
          .step-num {
            width: 40px;
            height: 40px;
            font-size: 13px;
          }
          
          .step .icon {
            font-size: 16px;
          }
          
          .step h4 {
            font-size: 0.8rem;
          }
          
          .step p {
            font-size: 0.65rem;
          }
        }
      `}),l.jsxs("div",{className:"home",children:[l.jsxs("section",{className:"hero",children:[l.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:"/assets/videos/hero-poster.jpg",children:l.jsx("source",{src:"/assets/videos/ai-hero-video.mp4",type:"video/mp4"})}),l.jsx("div",{className:"container-lg",children:l.jsxs("div",{className:"hero-grid",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"h-title",children:t("homePage.heroTitle")}),l.jsx("p",{className:"h-sub",children:t("homePage.heroSubtitle")}),l.jsxs("div",{className:"btn-row",children:[l.jsxs("button",{className:"btn-primary",onClick:()=>e("/scan"),children:["✨ ",t("homePage.ctaGetStarted")]}),l.jsxs("button",{className:"btn-ghost",onClick:()=>e("/history"),children:["🕘 ",t("homePage.ctaViewHistory")]})]})]}),l.jsx("div",{className:"hero-card",children:l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{className:"logo-badge",children:l.jsx("img",{src:"/assets/clinic_logo.png",alt:"Brand Logo",className:"logo-img"})}),l.jsx("h3",{children:t("homePage.features.f1Title")}),l.jsx("p",{children:t("homePage.features.f1Desc")})]})})]})})]}),l.jsx("section",{className:"sec",children:l.jsxs("div",{className:"container-lg",children:[l.jsxs("div",{className:"head",children:[l.jsx("h2",{children:t("homePage.whyTitle")}),l.jsx("p",{children:t("homePage.whySubtitle")})]}),l.jsx("div",{className:"grid-3",children:[{icon:"🔬",titleKey:"f1Title",descKey:"f1Desc"},{icon:"🛡️",titleKey:"f2Title",descKey:"f2Desc"},{icon:"📈",titleKey:"f3Title",descKey:"f3Desc"},{icon:"🧠",titleKey:"f4Title",descKey:"f4Desc"},{icon:"🏥",titleKey:"f5Title",descKey:"f5Desc"},{icon:"✨",titleKey:"f6Title",descKey:"f6Desc"}].map((r,i)=>l.jsxs("div",{className:"feature-card",style:{animation:`fadeUp .7s ease ${i*.06}s both`},children:[l.jsx("div",{className:"f-icon","aria-hidden":!0,children:r.icon}),l.jsx("h4",{children:t(`homePage.features.${r.titleKey}`)}),l.jsx("p",{children:t(`homePage.features.${r.descKey}`)})]},i))})]})}),l.jsx("section",{className:"sec-alt",children:l.jsxs("div",{className:"container-lg",children:[l.jsxs("div",{className:"head",children:[l.jsx("h2",{children:t("homePage.howTitle")}),l.jsx("p",{children:t("homePage.howSubtitle")})]}),l.jsx("div",{className:"grid-steps",children:[{step:t("homePage.steps.s1Step"),icon:"📷",title:t("homePage.steps.s1Title"),desc:t("homePage.steps.s1Desc")},{step:t("homePage.steps.s2Step"),icon:"📊",title:t("homePage.steps.s2Title"),desc:t("homePage.steps.s2Desc")},{step:t("homePage.steps.s3Step"),icon:"✅",title:t("homePage.steps.s3Title"),desc:t("homePage.steps.s3Desc")}].map((r,i)=>l.jsxs("div",{className:"step",style:{animation:`fadeUp .7s ease ${i*.12}s both`},children:[l.jsx("div",{className:"step-num",children:r.step}),l.jsx("div",{className:"icon","aria-hidden":!0,children:r.icon}),l.jsx("h4",{children:r.title}),l.jsx("p",{children:r.desc})]},i))})]})}),l.jsx("section",{className:"stats",children:l.jsx("div",{className:"container-lg",children:l.jsx("div",{className:"grid-4",children:[{num:"98%",label:t("homePage.stats.a")},{num:"20+",label:t("homePage.stats.b")},{num:"4.9/5",label:t("homePage.stats.c")},{num:"24/7",label:t("homePage.stats.d")}].map((r,i)=>l.jsxs("div",{className:"stat",style:{animation:`fadeUp .7s ease ${i*.08}s both`},children:[l.jsx("div",{className:"num",children:r.num}),l.jsx("div",{className:"lbl",children:r.label})]},i))})})}),l.jsx("section",{className:"cta",children:l.jsxs("div",{className:"container-md",children:[l.jsx("h2",{children:t("homePage.ctaTitle")}),l.jsx("p",{children:t("homePage.ctaSubtitle")}),l.jsxs("button",{className:"btn-primary",onClick:()=>e("/scan"),children:["🚀 ",t("homePage.ctaStart")]})]})}),l.jsx("section",{className:"disc",children:l.jsx("div",{className:"container-lg",children:l.jsxs("div",{className:"disc-card",children:[l.jsxs("h5",{children:["⚕️ ",t("homePage.discTitle")]}),l.jsx("p",{children:t("homePage.discText")})]})})})]})]})};async function T1(){await Zn(),await ze.get("/preload").catch(()=>{});const{data:e}=await Xn(()=>ze.get("/treatments"));return e}async function R1(){await Zn();const{data:e}=await Xn(()=>ze.get("/history"));return e}async function Op(e){await Zn();const{data:t}=await Xn(()=>ze.get(`/reports/${e}`));return t}async function O1(e,t,n){await Zn(),await ze.get("/preload").catch(()=>{});const r=new FormData;r.append("front",e,"front.jpg"),r.append("left",t,"left.jpg"),r.append("right",n,"right.jpg");const{data:i}=await Xn(()=>ze.post("/uploads",r,{headers:{"Content-Type":"multipart/form-data"},timeout:12e4}));return i}async function A1(e){await Zn(),await ze.get("/preload").catch(()=>{});const{data:t}=await Xn(()=>ze.post("/analysis/start",{files:e},{timeout:18e4}),{tries:3,baseDelay:1200});return t}function $1(e){const t=Array.isArray(e==null?void 0:e.files)?e.files:[],n=r=>{var i,o,a;return((i=t.find(s=>(s==null?void 0:s.field)===r))==null?void 0:i.path)??(e==null?void 0:e[r])??((o=e==null?void 0:e.paths)==null?void 0:o[r])??((a=e==null?void 0:e.uploaded)==null?void 0:a[r])??null};return{front:n("front"),left:n("left"),right:n("right")}}const F1=()=>{const{t:e}=jt(),t=gn(),[n,r]=S.useState(null),[i,o]=S.useState(null),[a,s]=S.useState(null),[c,u]=S.useState(null),[d,f]=S.useState(null),[m,x]=S.useState(null),[p,v]=S.useState(!1),[w,g]=S.useState(""),[h,y]=S.useState(null),[b,N]=S.useState(!1),[P,C]=S.useState(null),[E,R]=S.useState(!1),A=S.useRef(null),U=S.useRef(null);S.useEffect(()=>{const j=()=>R(window.innerWidth<=768);return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const _=(j,$)=>{const z=$?URL.createObjectURL($):null;j==="front"?(c&&URL.revokeObjectURL(c),r($),u(z)):j==="left"?(d&&URL.revokeObjectURL(d),o($),f(z)):(m&&URL.revokeObjectURL(m),s($),x(z))},W=j=>{var $,z,Q,Y;return((z=($=j==null?void 0:j.response)==null?void 0:$.data)==null?void 0:z.message)||((Y=(Q=j==null?void 0:j.response)==null?void 0:Q.data)==null?void 0:Y.error)||(j==null?void 0:j.message)||"Upload/analysis failed"},H=!!(n&&i&&a);function pe(j){p||(C(j),N(!0))}function I(){var j;P&&((j=A.current)==null||j.click())}function G(){var j;P&&((j=U.current)==null||j.click())}function O(j){var z;if(!P)return;const $=((z=j.target.files)==null?void 0:z[0])||null;if($&&!$.type.startsWith("image/")){y("ONLY_IMAGES_ALLOWED"),j.target.value="";return}_(P,$),j.target.value="",N(!1)}const T=async j=>{var $,z,Q;if(j.preventDefault(),y(null),!H){y(e("missingPhotosMsg")||"Please upload all three photos.");return}v(!0),g(e("uploadingPhotos")||"Uploading photos…");try{const Y=await O1(n,i,a),ue=$1(Y);if(!ue.front||!ue.left||!ue.right)throw new Error("Upload succeeded but server did not return file paths.");g(e("analyzingFace")||"Analyzing face…");const Pe=await A1(ue);if(!(Pe!=null&&Pe.id))throw new Error("Analysis did not return a report id.");t(`/report/${Pe.id}`)}catch(Y){const ue=W(Y),Pe=(($=Y==null?void 0:Y.response)==null?void 0:$.status)===422||ue==="NO_FACE_DETECTED"||((Q=(z=Y==null?void 0:Y.response)==null?void 0:z.data)==null?void 0:Q.error)==="NO_FACE_DETECTED";y(Pe?e("noFaceDetected")||"No face detected. Please try clearer photos.":ue==="MISSING_IMAGES"?e("missingPhotosMsg")||"Please upload all three photos.":ue==="ONLY_IMAGES_ALLOWED"?e("invalidFileMsg")||"Only image files are allowed.":e("analysisFailedMsg")||"Analysis failed. Please try again.")}finally{v(!1),g("")}};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root{
          --bg:#0A192F;
          --bg2:#162947;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.25);
          --text:#FFFFFF;
          --muted:#9aa4b2;
          --muted2:rgba(255,255,255,0.85);
          --accent:#37C3B6;
          --accent2:#2CA59A;
        }

        .page{
          background: var(--bg);
          color: var(--text);
          min-height: calc(100vh - 72px);
          padding: 24px 16px 40px;
        }
        @media(max-width:768px){
          .page{ padding-bottom: 80px; } /* extra padding for navbar overlap */
        }
        .container{ width:100%; max-width:1100px; margin:0 auto; }

        /* stack: thumbnails card centered, then CTA card centered */
        .stack{ display:grid; gap:20px; }
        .centered-card{
          background: var(--card);
          border: 1px solid var(--cardBorder);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 18px 40px rgba(0,0,0,.35);
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
        }

        .head{
          text-align:center;
          margin-bottom: 14px;
        }
        .head h2{ margin:0 0 6px; font-size: clamp(1.5rem, 3vw, 2rem); }
        .head p{ margin:0; color: var(--muted2); opacity:.9; }

        .grid-3{
          display:grid; gap:16px;
          grid-template-columns: repeat(3, 1fr);
          justify-items:center;
        }
        @media (max-width: 800px){
          .grid-3{ grid-template-columns: 1fr; }
        }

        .slot{ display:flex; flex-direction:column; align-items:center; gap:8px; }
        .thumb{
          width: 200px; height: 200px;
          border-radius: 16px; overflow:hidden;
          border: 2px solid rgba(55,195,182,0.25);
          background: #0f1430;
          position: relative;
        }
        @media (max-width: 480px){
          .thumb{ width: 170px; height: 170px; }
        }

        /* Ensure placeholder thumbnails fill the box nicely (contain) */
        .thumb .placeholder, .thumb img.preview{
          position:absolute; inset:0; width:100%; height:100%;
        }
        .thumb .placeholder img{
          width:100%; height:100%; object-fit: contain; opacity:.95;
        }
        .thumb img.preview{
          object-fit: cover; /* user images should fill */
        }

        .slot-actions{
          position:absolute; bottom:8px; left:50%; transform:translateX(-50%);
          display:flex; gap:8px; align-items:center; justify-content:center;
          background: rgba(16,23,43,.78); border-radius:999px;
          padding: 6px 10px; border: 1px solid rgba(55,195,182,.25);
        }
        .chip{
          border:none; border-radius:999px;
          padding: 8px 14px;
          background: rgba(255,255,255,.08); color:#fff;
          font-weight:700; cursor:pointer;
          font-size: 13px; line-height: 1.15;
          max-width: 140px;
          white-space: normal;
          text-align:center;
        }
        .chip:hover{ filter:brightness(1.1); }

        .slot-label{
          color: var(--text); font-weight:800; text-align:center;
        }

        .cta{
          text-align:center;
        }
        .btn-primary{
          width: 100%;
          max-width: 680px;
          border: none; color:#fff; font-weight:800;
          padding: 16px 18px; border-radius: 12px; cursor:pointer;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 8px 28px rgba(55,195,182,0.35);
          font-size: 1.05rem;
          margin: 8px auto 0;
        }
        .btn-primary:disabled{ opacity:.6; cursor:not-allowed; }
        .btn-primary:not(:disabled):hover{ filter:brightness(1.05); }

        .tips{ color: var(--muted); font-size:14px; margin-top:8px; }

        .alert{
          color:#fca5a5; background: rgba(220,38,38,0.08);
          border:1px solid rgba(220,38,38,0.25);
          padding:10px 12px; border-radius:10px;
          text-align:center; margin: 10px auto 0; max-width: 680px;
        }

        /* chooser modal */
        .modal-backdrop{
          position: fixed; inset: 0; background: rgba(0,0,0,.55);
          display:flex; align-items:center; justify-content:center;
          z-index: 60;
        }
        .modal{
          width: min(460px, 92%);
          background: #0F1A36;
          border: 1px solid rgba(55,195,182,.25);
          border-radius: 16px;
          padding: 18px 16px 12px;
          box-shadow: 0 22px 44px rgba(0,0,0,.45);
          color: #e8eeff;
        }
        .modal h4{ margin:0 0 12px; font-size:1.25rem; text-align:center; }
        .modal-actions{ display:grid; gap:10px; margin-bottom:10px; }
        .modal-btn{
          height:48px; border-radius:10px; border:1px solid rgba(55,195,182,.25);
          background:rgba(255,255,255,.04); color:#e8eeff; font-weight:700; cursor:pointer;
        }
        .modal-btn:hover{ filter:brightness(1.05); }
        .modal-cancel{ text-align:right; }
        .modal-cancel button{
          background:transparent; border:none; color:#9fb0d0; font-size:15px; cursor:pointer;
        }

        /* scanning overlay */
        .overlay{
          position: fixed; inset: 0; display:flex; align-items:center; justify-content:center;
          background: rgba(0,0,0,.6); z-index: 70;
        }
        .overlay-card{
          background:#0F1A36; border:1px solid rgba(55,195,182,.25);
          color:#e8eeff; padding:18px; border-radius:14px; min-width:260px; text-align:center;
        }
        .spinner{
          width:30px; height:30px; border-radius:50%;
          border:3px solid rgba(255,255,255,.25); border-top-color: var(--accent);
          margin:0 auto; animation: spin .9s linear infinite;
        }
        @keyframes spin{ to { transform: rotate(360deg); } }
      `}),l.jsx("input",{ref:A,type:"file",accept:"image/*",style:{display:"none"},onChange:O}),l.jsx("input",{ref:U,type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:O}),l.jsx("div",{className:"page",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"stack",children:[l.jsxs("div",{className:"centered-card",children:[l.jsxs("div",{className:"head",children:[l.jsx("h2",{children:e("upload3Photos")||"Upload 3 photos"}),l.jsx("p",{children:e("cameraTips")||"Face camera straight on, in good light."})]}),l.jsx("div",{className:"grid-3",children:["front","left","right"].map(j=>{const $=j==="front"?c:j==="left"?d:m,z=`/assets/scan/${j}.png`;return l.jsxs("div",{className:"slot",children:[l.jsxs("div",{className:"thumb",onClick:()=>pe(j),children:[$?l.jsx("img",{className:"preview",src:$,alt:`${j} preview`}):l.jsx("div",{className:"placeholder",children:l.jsx("img",{src:z,alt:`${j} placeholder`})}),l.jsxs("div",{className:"slot-actions",children:[E&&l.jsxs("button",{type:"button",className:"chip",title:e("camera")||"Camera",onClick:Q=>{Q.stopPropagation(),C(j),G()},children:["📷 ",e("camera")||"Camera"]}),l.jsxs("button",{type:"button",className:"chip",title:e("uploadFromGallery")||"Upload from device",onClick:Q=>{Q.stopPropagation(),C(j),I()},children:["⬆️ ",e("uploadFromGallery")||"Upload from device"]})]})]}),l.jsx("div",{className:"slot-label",children:j==="front"?e("frontFace")||"Front":j==="left"?e("leftProfile")||"Left":e("rightProfile")||"Right"})]},j)})})]}),l.jsxs("form",{className:"centered-card cta",onSubmit:T,children:[h&&l.jsx("div",{className:"alert",children:h}),l.jsx("button",{className:"btn-primary",disabled:!H||p,children:p?e("pleaseWait")||"Please wait…":e("startAnalysis")||"Start analysis"}),l.jsx("p",{className:"tips",children:e("privacyNote")||"Your photos are processed securely and used only to generate your report."})]})]})})}),b&&l.jsx("div",{className:"modal-backdrop",onClick:()=>N(!1),children:l.jsxs("div",{className:"modal",onClick:j=>j.stopPropagation(),children:[l.jsx("h4",{children:e("selectSource")||"Select source"}),l.jsxs("div",{className:"modal-actions",children:[E&&l.jsxs("button",{className:"modal-btn",onClick:G,children:["📷 ",e("camera")||"Camera"]}),l.jsxs("button",{className:"modal-btn",onClick:I,children:["⬆️ ",e("uploadFromGallery")||"Upload from device"]})]}),l.jsx("div",{className:"modal-cancel",children:l.jsx("button",{onClick:()=>N(!1),children:e("cancel")||"Cancel"})})]})}),p&&l.jsx("div",{className:"overlay",children:l.jsxs("div",{className:"overlay-card",children:[l.jsx("div",{className:"spinner"}),l.jsx("div",{style:{marginTop:10},children:w||e("working")||"Working…"})]})})]})},z1=["All","Face","Skin","Body","Hair"],D1="https://lakidisaesthetic.gr/",_1=e=>{const t=(e??"").toString().trim().toLowerCase();return t.startsWith("face")?"Face":t.startsWith("skin")?"Skin":t.startsWith("body")?"Body":t.startsWith("hair")?"Hair":"All"},au=(e,t)=>{const n=((e||"")+" "+(t||"")).toLowerCase();return/(hair\s*removal|hair\s*laser)/.test(n)?"Hair":/(botox|dysport|filler|thread|jawline|lips?|chin|nasolabial|marionette|temple|cheek|tear\s*trough)/.test(n)||/double\s*chin/.test(n)?"Face":/(facial|hydrafacial|peel|peeling|mesotherapy|exosome|polynucleotide|prp)/.test(n)?"Skin":/(hifu|radiofrequency|rf|pressotherapy|carboxy)/.test(n)?"Body":"All"},I1=e=>{const t=[],n=o=>isFinite(+o)?+o:NaN;if(e.forEach(o=>{if(!o.duration)return;const s=o.duration.replace(/[^\d–\- ]/g,"").split(/[–-]/).map(c=>c.trim()).filter(Boolean);if(s.length===1){const c=n(s[0]);isNaN(c)||t.push(c)}else if(s.length>=2){const c=n(s[0]),u=n(s[1]);isNaN(c)||t.push(c),isNaN(u)||t.push(u)}}),!t.length)return;const r=Math.min(...t),i=Math.max(...t);return r===i?`${r} min`:`${r}–${i} min`},M1=e=>{const t=[];if(e.forEach(i=>{if(!i.price)return;const o=i.price.match(/\d+/g)||[];t.push(...o.map(a=>+a).filter(a=>isFinite(a)))}),!t.length)return;const n=Math.min(...t),r=Math.max(...t);return n===r?`€${n}`:`€${n}–${r}`},U1=[{title:"Botox / Dysport",summary:"Wrinkle reduction (forehead, frown lines, crow’s feet).",duration:"15–20 min",price:"€150–280",category:"Face"},{title:"Fillers (Hyaluronic Acid)",summary:"Restore or refine facial contours with hyaluronic acid.",category:"Face",items:[{title:"Cheekbones",summary:"Restore volume & contour.",duration:"20–30 min",price:"€250–350"},{title:"Temples",summary:"Correct hollow temples.",duration:"20 min",price:"€200–300"},{title:"Under-eye hollows (tear trough)",summary:"Reduce dark circles & tired look.",duration:"20 min",price:"€280–350"},{title:"Midface / cheeks",summary:"Correct fat loss & sagging.",duration:"25 min",price:"€250–400"},{title:"Fine lines (smoker’s lines)",summary:"Smooth fine wrinkles.",duration:"15 min",price:"€180–250"},{title:"Nasolabial folds",summary:"Reduce laugh lines (“sadness wrinkles”).",duration:"20 min",price:"€250–350"},{title:"Lips",summary:"Volume, contour, hydration.",duration:"20 min",price:"€200–300"},{title:"Chin",summary:"Improve projection & shape.",duration:"20 min",price:"€250–350"},{title:"Marionette lines (mouth corners)",summary:"Lift downturned corners.",duration:"15 min",price:"€200–250"},{title:"Jawline",summary:"Define lower face contour.",duration:"25 min",price:"€300–400"}]},{title:"Profhilo / Jalupro / Karisma",summary:"Biostimulating injectable hyaluronic acids that trigger collagen & elastin production.",duration:"20 min",price:"€220–300",category:"Skin"},{title:"Polynucleotides",summary:"Regenerative injectables to improve skin elasticity, texture & quality (face & body).",duration:"20 min",price:"€350",category:"Skin"},{title:"Exosomes",summary:"Innovative cellular therapy for scars, stretch marks, acne marks, surgical scars.",duration:"20–30 min",price:"€350",category:"Skin"},{title:"Platelet Rich Plasma (PRP)",summary:"Autologous plasma therapy enriched with platelets for healing, acne scars, stretch marks & rejuvenation.",duration:"30 min",price:"€150",category:"Skin"},{title:"Mesotherapy (Face & Body)",summary:"Microinjections of vitamins, amino acids & hyaluronic acid for hydration & glow.",duration:"20–25 min",price:"€100–180",category:"Skin"},{title:"Laser Hair Removal (Candela GentleMax Pro)",summary:"Permanent hair reduction using Alexandrite & Nd:YAG laser.",duration:"15–60 min (by area)",price:"€30–120 / session",category:"Hair"},{title:"HydraFacial & Advanced Facials",summary:"Multistep cleansing, exfoliation & hydration treatment with vacuum technology.",duration:"40–60 min",price:"€80–150",category:"Skin"},{title:"HIFU / RF / Pressotherapy / Carboxytherapy",summary:"Non-invasive skin tightening, fat reduction & circulation improvement.",duration:"30–60 min",price:"€100–250",category:"Body"},{title:"Chemical Peelings",summary:"Controlled exfoliation with acids for skin renewal, hyperpigmentation & acne.",duration:"20–30 min",price:"€80–150",category:"Skin"},{title:"Threads (PDO / COG Threads)",summary:"Absorbable threads for lifting & skin tightening.",duration:"30–40 min",price:"€250–600",category:"Face"},{title:"Double Chin Lipolysis (LemonBottle / Aqualyx)",summary:"Injectable fat dissolving for the double chin.",duration:"20 min",price:"€150–250 / session",category:"Face"}],B1=()=>{const{t:e,i18n:t}=jt(),[n,r]=S.useState(null),[i,o]=S.useState(""),[a,s]=S.useState("All"),[c,u]=S.useState({}),d=(p,v)=>{const w=e(p,{defaultValue:""});return typeof w=="string"&&w.trim()?w:v},f=p=>{switch(p){case"All":return d("all","All");case"Face":return d("face","Face");case"Skin":return d("skin","Skin");case"Body":return d("body","Body");case"Hair":return d("hair","Hair");default:return p}};S.useEffect(()=>{let p=!0;return T1().then(v=>{const w=(v==null?void 0:v.items)||v||[];if(p)if(Array.isArray(w)&&w.length){const g=w.map((h,y)=>{const b=h.title??h.name??"Treatment",N=h.summary??h.description??"",P=_1(h.category),C=au(b,N);return{id:h.id??String(y),title:b,summary:N,duration:h.duration??h.time??"",price:h.price??h.cost??"",category:P!=="All"?P:C,items:Array.isArray(h.items)?h.items:void 0}});r(g)}else r([])}).catch(()=>r([])),()=>{p=!1}},[]);const m=S.useMemo(()=>{const v=(n&&n.length?n:U1).map(g=>(!g.duration||!g.price)&&Array.isArray(g.items)&&g.items.length?{...g,duration:g.duration||I1(g.items),price:g.price||M1(g.items)}:g),w=i.trim().toLowerCase();return v.filter(g=>{const h=g.category&&g.category!=="All"?g.category:au(g.title,g.summary),y=a==="All"||h===a;if(!w)return y;const b=(g.title+" "+(g.summary||"")+" "+(g.duration||"")+" "+(g.price||"")+" "+(g.items||[]).map(N=>N.title+" "+(N.summary||"")).join(" ")).toLowerCase();return y&&b.includes(w)})},[n,i,a]),x=p=>u(v=>({...v,[p]:!v[p]}));return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root {
          --ink: #ffffff;
          --muted: #9aa4b2;
          --muted2: #cbd5e1;
          --pillBg: #0f172a;
          --pillBr: #24324a;
        }
        .treats-top { display:flex; gap:12px; flex-wrap:wrap; align-items:center; }
        .treats-search {
          display:flex; align-items:center; gap:8px;
          background:#0f172a; border:1px solid #cfcfcfff; border-radius:14px;
          padding:10px 12px; max-width:560px; flex:1;
        }
        .treats-search input { flex:1; border:none; outline:none; background:transparent; color:var(--ink); }
        .treat-chips { display:flex; gap:8px; flex-wrap:wrap; }
        .treat-chip { padding:8px 12px; border-radius:999px; border:1px solid #22304a; color:#9aa4b2; background: transparent; cursor:pointer; }
        .treat-chip.active { background:#182235; color:#e2e8f0; border-color:#2b3b5a; }

        .treat-grid { display:grid; gap:14px; margin-top:14px; }
        @media (max-width: 619px){ .treat-grid{ grid-template-columns: 1fr; } }
        @media (min-width: 620px) and (max-width: 899px){ .treat-grid{ grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) and (max-width: 1199px){ .treat-grid{ grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px){ .treat-grid{ grid-template-columns: repeat(4, 1fr); } }

        .treat-card {
          position: relative;
          background: linear-gradient(180deg, #0e1526, #0b1120);
          border: 1px solid #1f2937;
          border-radius: 16px;
          padding: 16px;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
          box-shadow: 0 12px 28px rgba(0,0,0,.35);
          overflow:hidden;
        }
        .treat-card::after {
          content:"";
          position:absolute; inset: -1px;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, transparent, transparent, rgba(55,195,182,.45));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .2s ease;
          pointer-events: none;
        }
        .treat-card:hover { transform: translateY(-4px); border-color: rgba(55,195,182,.25); }
        .treat-card:hover::after { opacity: 1; }

        .t-title { font-weight:800; font-size:18px; }
        .t-sub { color: var(--muted2); margin-top:4px; min-height: 40px; }

        .row { display:flex; gap:8px; flex-wrap:wrap; margin-top:10px; }
        .pill { background: var(--pillBg); border: 1px solid var(--pillBr); padding: 6px 10px; border-radius: 999px; font-size: 14px; }
        .pill b { color: var(--muted); font-weight:600; margin-right:4px; }

        .actions { display:flex; gap:10px; margin-top:12px; flex-wrap:wrap; }
        .btn-link { background: transparent; border: none; color: #6ea8fe; cursor: pointer; padding: 0; }
        .ext-link { color: #6ea8fe; text-decoration: none; }

        .subcard { background:#0f172a; border:1px solid #24324a; border-radius:12px; padding:12px; }
        .sub-title { font-weight:700; }
        .sub-sub { color: var(--muted2); margin-top:4px; }

        .empty { background: #111827; border:1px solid #1f2937; border-radius: 16px; padding: 16px; color: #cbd5e1; }

        /* ✅ Mobile only safe space for bottom nav */
@media (max-width: 768px) {
  .treat-grid {
    padding-bottom: 80px; /* adjust to match your nav height */
  }
}
      `}),l.jsx("div",{className:"grid",style:{gap:16},children:l.jsxs("div",{className:"card",children:[l.jsx("h2",{style:{marginTop:0},children:d("treatments","Treatments")}),l.jsxs("div",{className:"treats-top",children:[l.jsxs("div",{className:"treats-search",children:[l.jsx("span",{"aria-hidden":!0,children:"🔎"}),l.jsx("input",{placeholder:d("searchTreatments","Search treatments"),value:i,onChange:p=>o(p.target.value)})]}),l.jsx("div",{className:"treat-chips",children:z1.map(p=>l.jsx("button",{onClick:()=>s(p),className:`treat-chip ${p===a?"active":""}`,"aria-pressed":p===a,children:f(p)},p))})]}),l.jsxs("div",{className:"treat-grid",children:[m.map((p,v)=>{const w=(p.id??p.title)+":"+v,g=Array.isArray(p.items)&&p.items.length>0,h=!!c[w];return l.jsxs("div",{className:"treat-card",children:[l.jsx("div",{className:"t-title",children:p.title}),p.summary&&l.jsx("div",{className:"t-sub",children:p.summary}),l.jsxs("div",{className:"row",children:[p.duration&&l.jsxs("div",{className:"pill",children:[l.jsxs("b",{children:[d("duration","Duration"),":"]})," ",p.duration]}),p.price&&l.jsxs("div",{className:"pill",children:[l.jsxs("b",{children:[d("price","Price"),":"]})," ",p.price]}),p.category&&p.category!=="All"&&l.jsxs("div",{className:"pill",children:[l.jsxs("b",{children:[d("category","Category"),":"]})," ",f(p.category)]})]}),h&&l.jsx("div",{style:{marginTop:12,display:"grid",gap:10},children:g?p.items.map((y,b)=>l.jsxs("div",{className:"subcard",children:[l.jsxs("div",{className:"sub-title",children:[p.title," — ",y.title]}),y.summary&&l.jsx("div",{className:"sub-sub",children:y.summary}),l.jsxs("div",{className:"row",style:{marginTop:8},children:[y.duration&&l.jsxs("div",{className:"pill",children:[l.jsxs("b",{children:[d("duration","Duration"),":"]})," ",y.duration]}),y.price&&l.jsxs("div",{className:"pill",children:[l.jsxs("b",{children:[d("price","Price"),":"]})," ",y.price]})]})]},b)):l.jsxs("div",{className:"subcard",children:[l.jsx("div",{className:"sub-title",children:d("details","Details")}),l.jsxs("div",{className:"row",style:{marginTop:8},children:[p.duration&&l.jsxs("div",{className:"pill",children:[l.jsxs("b",{children:[d("duration","Duration"),":"]})," ",p.duration]}),p.price&&l.jsxs("div",{className:"pill",children:[l.jsxs("b",{children:[d("price","Price"),":"]})," ",p.price]})]}),p.summary&&l.jsx("div",{className:"sub-sub",style:{marginTop:8},children:p.summary})]})}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"btn-link",onClick:()=>x(w),onKeyDown:y=>{(y.key==="Enter"||y.key===" ")&&x(w)},children:h?d("hideDetails","Hide details"):d("viewDetails","View details")}),l.jsxs("a",{className:"ext-link",href:D1,target:"_blank",rel:"noopener noreferrer",children:[d("viewMore","View more")," ↗"]})]})]},w)}),!m.length&&l.jsx("div",{className:"empty",children:d("noResults","No treatments found.")})]})]})})]})},bi=e=>Number.isFinite(e)?`€${e}`:"—",H1=(e,t)=>{const n=Number.isFinite(e)?e:void 0,r=Number.isFinite(t)?t:void 0;return n==null&&r==null?"—":n!=null&&r!=null?n===r?bi(n):`${bi(n)}–${bi(r)}`:bi(n??r)},V1=e=>Number.isFinite(e)?`${e}′`:"—";function W1(e){const t=e.metrics||{},n=Number.isFinite(t.ageEstimate)?`Age estimate: ${t.ageEstimate}${Number.isFinite(t.ageLow)&&Number.isFinite(t.ageHigh)?` (${t.ageLow}–${t.ageHigh})`:""}`:"Age estimate: —",r=Number.isFinite(t.symmetryMm)?`Face asymmetry: ${t.symmetryMm.toFixed(1)} mm${Number.isFinite(t.symmetryPctIPD)?` (${(t.symmetryPctIPD*100).toFixed(1)}% IPD)`:""}${t.symmetryBucket?`, ${t.symmetryBucket}`:""}`:"Face asymmetry: —",i=`Dominant expression: ${t.emotion||"—"}`;return`${n}. ${r}. ${i}.`}function K1(e){return e instanceof Date?e:new Date(e)}function Y1(e=new Date){const t=new Date(e),n=t.getDay();return t.setHours(0,0,0,0),t.setDate(t.getDate()-n),t}function G1(e=new Date){const t=new Date(e.getFullYear(),e.getMonth(),1);return t.setHours(0,0,0,0),t}function Q1(e){const t=new Date;t.setHours(0,0,0,0);const n=Y1(new Date),r=G1(new Date),i={today:[],thisWeek:[],thisMonth:[],older:[]};for(const o of e){const a=K1(o.createdAt),s=new Date(a);s.setHours(0,0,0,0),s.getTime()===t.getTime()?i.today.push(o):s>=n?i.thisWeek.push(o):s>=r?i.thisMonth.push(o):i.older.push(o)}return i}function J1(e,t){try{return new Date(e).toLocaleString(t,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return String(e)}}function q1(){var e;return(e=window.pdfMake)!=null&&e.vfs?Promise.resolve():new Promise((t,n)=>{const r=i=>new Promise((o,a)=>{const s=document.createElement("script");s.src=i,s.async=!0,s.onload=()=>o(),s.onerror=()=>a(new Error(`Failed to load ${i}`)),document.head.appendChild(s)});r("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js").then(()=>r("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js")).then(()=>t()).catch(n)})}async function X1(e){const t=await fetch(e,{mode:"cors"});if(!t.ok)throw new Error("logo fetch failed");const n=await t.blob();return await new Promise((r,i)=>{const o=new FileReader;o.onloadend=()=>r(o.result),o.onerror=i,o.readAsDataURL(n)})}async function Z1(){const e=["/assets/clinic_logo.png",`${window.PUBLIC_URL||""}/assets/clinic_logo.png`,`${window.location.origin}/assets/clinic_logo.png`,"/clinic_logo.png"];for(const t of e)try{return await X1(t)}catch{}return null}function ey(e,t,n){const r=e.metrics||{},i=e.summary||W1(e),o=e.aiReportGreek||"-",a=Array.isArray(e.details)?e.details.slice(0,5):[],s=Array.isArray(e.suggestions)?e.suggestions:[],c=e.disclaimer||"This AI analysis is informational and does not replace a consultation with a qualified clinician.",u=[{table:{widths:["*","*","*"],body:[[{text:`Age estimate: ${Number.isFinite(r.ageEstimate)?`${r.ageEstimate}${Number.isFinite(r.ageLow)&&Number.isFinite(r.ageHigh)?` (${r.ageLow}–${r.ageHigh})`:""}`:"—"}`,style:"pillCell"},{text:`Face asymmetry: ${Number.isFinite(r.symmetryMm)?`${r.symmetryMm.toFixed(1)} mm`:"—"}${Number.isFinite(r.symmetryPctIPD)?` (${(r.symmetryPctIPD*100).toFixed(1)}% IPD)`:""}${r.symmetryBucket?`, ${r.symmetryBucket}`:""}`,style:"pillCell"},{text:`Dominant expression: ${r.emotion||"—"}`,style:"pillCell"}]]},layout:{hLineWidth:()=>.6,vLineWidth:()=>.6,hLineColor:()=>"#c9d5e6",vLineColor:()=>"#c9d5e6",paddingLeft:()=>8,paddingRight:()=>8,paddingTop:()=>6,paddingBottom:()=>6}}],d=s.length?s.map(f=>({margin:[0,4,0,4],table:{widths:["*"],body:[[{stack:[{text:f.name,bold:!0},...f.description?[{text:f.description,color:"#333"}]:[],{columns:[{text:`Duration: ${V1(f.durationMin)}`},{text:`Cost: ${H1(f.priceMin,f.priceMax)}`,alignment:"right"}],margin:[0,4,0,0]}]}]]},layout:{fillColor:()=>"#f9fbfd",hLineColor:()=>"#cfd8e3",vLineColor:()=>"#cfd8e3"}})):[{text:"-",margin:[0,2,0,2]}];return{pageSize:"A4",pageMargins:[40,60,40,60],defaultStyle:{fontSize:10,color:"#111"},styles:{h1:{fontSize:20,bold:!0,color:"#0b1020",margin:[0,12,0,8]},h2:{fontSize:13,bold:!0,color:"#19a3a3",margin:[0,10,0,6]},muted:{color:"#334155"},pillCell:{fillColor:"#f7fafc"}},header:f=>f>1?{}:{margin:[0,0,0,12],table:{widths:[70,"*"],body:[[n?{image:n,width:70,alignment:"left",margin:[12,8,0,8]}:{text:""},{margin:[0,8,12,8],stack:[{text:"Dr Antonios Medical Clinic",bold:!0,color:"#fff"},{text:"Ermou 53, 5th floor, Thessaloniki 546 23",color:"#fff"},{text:"Tel: 2317 004 222 | Mob: 6944 275 175",color:"#fff"},{text:"Email: alakidis@gmail.com",color:"#fff"}]}]]},layout:{fillColor:()=>"#19a3a3",hLineWidth:()=>0,vLineWidth:()=>0}},footer:()=>({margin:[0,8,0,0],columns:[{text:"© 2025 Dr Antonios | www.alakidisaesthetic.gr | alakidis@gmail.com | Dr Antonios (Doctor)",alignment:"center",color:"#19a3a3",fontSize:9}]}),content:[{text:"PATIENT MEDICAL REPORT",style:"h1",alignment:"center"},{text:"Patient",style:"h2"},{text:`Name: ${e.userName||"Patient"}`},{text:`Report ID: ${e.id}${e.createdAt?`   •   Date: ${t}`:""}`,style:"muted",margin:[0,2,0,0]},{text:"📖 Summary",style:"h2",margin:[0,10,0,4]},{text:i},{text:"📊 Key metrics",style:"h2"},...u,{text:"🤖 AI Report",style:"h2"},{text:o},{text:"🔍 Key Observations",style:"h2"},a.length?{ul:a}:{text:"-"},{text:"💡 Suggested Treatments",style:"h2"},...d,{text:"⚠️ Disclaimer",style:"h2"},{text:c,style:"muted"}]}}const ty=()=>{var v;const{t:e,i18n:t}=jt(),[n,r]=S.useState([]),[i,o]=S.useState(!0),[a,s]=S.useState(null),[c,u]=S.useState(null),d=(v=t.language)!=null&&v.toLowerCase().startsWith("el")?"el-GR":"en-US",f=(w,g)=>{const h=e(w,{defaultValue:""});return typeof h=="string"&&h.trim()?h:g};S.useEffect(()=>{let w=!0;return o(!0),s(null),R1().then(g=>{if(!w)return;const h=Array.isArray(g)?g:Array.isArray(g==null?void 0:g.items)?g.items:[];h.sort((y,b)=>+new Date(b.createdAt)-+new Date(y.createdAt)),r(h)}).catch(g=>s((g==null?void 0:g.message)||"Failed to load history")).finally(()=>o(!1)),()=>{w=!1}},[]);const m=S.useMemo(()=>Q1(n),[n]);async function x(w){try{u(w),await q1();const g=await Op(w);if(!g)throw new Error("Report not found");const h=g.createdAt?new Date(g.createdAt).toLocaleString(d):"",y=await Z1().catch(()=>null),b=ey(g,h,y);window.pdfMake.createPdf(b).download(`report_${w}.pdf`)}catch(g){alert((g==null?void 0:g.message)||"Download failed")}finally{u(null)}}const p=({title:w,list:g})=>g!=null&&g.length?l.jsxs("div",{style:{marginBottom:22},children:[l.jsx("div",{className:"sec-title",children:w}),l.jsx("div",{className:"cards",children:g.map(h=>l.jsxs("div",{className:"card-row",children:[l.jsx("div",{className:"row-top",children:l.jsx("div",{className:"date",children:J1(h.createdAt,d)})}),h.summary&&l.jsx("div",{className:"summary",children:h.summary}),l.jsxs("div",{className:"actions",children:[l.jsx(Vn,{className:"btn-outline",to:`/report/${h.id}`,children:f("history.viewReport","View report")}),l.jsx("button",{className:"btn-ghost",onClick:()=>x(h.id),disabled:c===h.id,title:f("history.download","Download PDF"),children:c===h.id?f("common.preparing","Preparing…"):f("history.download","Download")})]})]},h.id))})]}):null;return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root{
          --bg:#0A192F;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.22);
          --ink:#fff;
          --muted:#9aa4b2;
          --muted2:#cbd5e1;
          --accent:#37C3B6;
          --accent2:#2CA59A;
          --pillBg:#0f172a;
          --pillBr:#24324a;
        }
        .page{ background:var(--bg); color:var(--ink); min-height:calc(100vh - 72px); padding:16px; }
        .container{ width:100%; max-width:1100px; margin:0 auto; }

        .shell{ background:var(--card); border:1px solid var(--cardBorder); border-radius:18px; padding:18px; box-shadow:0 18px 40px rgba(0,0,0,.35); }
        .heading{ margin:0 0 10px; font-size:1.5rem; font-weight:800; }
        .error{ color:#fca5a5; background:rgba(220,38,38,.08); border:1px solid rgba(220,38,38,.25); padding:10px 12px; border-radius:10px; text-align:center; margin-bottom:10px; }
        .loading{ color:var(--muted2); }

        .sec-title{ color:#9fcfff; font-size:16px; font-weight:700; margin:10px 0; }
        .cards{ display:grid; gap:12px; }
        .card-row{
          background: linear-gradient(180deg, #0e1526, #0b1120);
          border: 1px solid #1f2937;
          border-radius: 14px;
          padding: 14px;
          box-shadow: 0 12px 28px rgba(0,0,0,.35);
        }
        .row-top{ display:flex; align-items:center; justify-content:space-between; gap:10px; }
        .date{ color:#cbe1ff; font-weight:700; }
        .summary{ color:var(--muted2); margin-top:6px; }

        .actions{ display:flex; gap:10px; margin-top:12px; flex-wrap:wrap; }
        .btn-outline{
          border:1.5px solid var(--accent); color:#fff; background:transparent; text-decoration:none;
          padding:10px 14px; border-radius:12px; font-weight:800;
        }
        .btn-outline:hover{ background:rgba(55,195,182,.12); }
        .btn-ghost{
          border:none; color:#6ea8fe; background:transparent; cursor:pointer; font-weight:700; padding:10px 8px;
        }
        .btn-ghost[disabled]{ opacity:.6; cursor:not-allowed; }

        .empty{
          color:var(--muted2);
          background:#0e1526; border:1px solid #1f2937; border-radius:14px;
          padding:14px; text-align:center;
        }
      `}),l.jsx("div",{className:"page",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"shell",children:[l.jsx("h2",{className:"heading",children:f("history.title","History")}),a&&l.jsx("div",{className:"error",children:a}),i?l.jsx("div",{className:"loading",children:f("common.loading","Loading…")}):n.length===0?l.jsx("div",{className:"empty",children:f("history.emptyTitle","No reports yet. Start by running your first analysis!")}):l.jsxs(l.Fragment,{children:[l.jsx(p,{title:f("history.today","Today"),list:m.today}),l.jsx(p,{title:f("history.thisWeek","This week"),list:m.thisWeek}),l.jsx(p,{title:f("history.thisMonth","This month"),list:m.thisMonth}),l.jsx(p,{title:f("history.older","Older"),list:m.older})]})]})})})]})},su="profile.photo.dataurl",lu="profile.pref.notifications",cu="lang",ny=()=>{var G,O;const{auth:e,setAuth:t,logout:n}=Gt(),{t:r,i18n:i}=jt(),[o,a]=S.useState(""),[s,c]=S.useState(""),[u,d]=S.useState(""),[f,m]=S.useState(!1),[x,p]=S.useState(null),[v,w]=S.useState(null),[g,h]=S.useState(null),y=S.useRef(null),[b,N]=S.useState(()=>{const T=typeof window<"u"?localStorage.getItem(lu):null;return T?T==="1":!0}),[P,C]=S.useState(!1),[E,R]=S.useState(!1);S.useEffect(()=>{const T=typeof window<"u"?localStorage.getItem(cu):null;T&&i.language!==T&&i.changeLanguage(T)},[i]),S.useEffect(()=>{var j,$;if(d(((j=e==null?void 0:e.user)==null?void 0:j.email)||""),!(($=e==null?void 0:e.user)!=null&&$.id))return;Ep(e.user.id).then(z=>{a((z==null?void 0:z.name)||""),c((z==null?void 0:z.phone)||""),t({token:e.token,user:{...e.user,...z}})}).catch(()=>{});const T=typeof window<"u"?localStorage.getItem(su):null;T&&h(T)},[(G=e==null?void 0:e.user)==null?void 0:G.id]);const A=async T=>{var j;if(T.preventDefault(),!!((j=e==null?void 0:e.user)!=null&&j.id)){m(!0),p(null);try{const $=await u1(e.user.id,{name:o,phone:s});t({token:e.token,user:{...e.user,...$}}),p(r("profile.saved","Saved"))}catch{p(r("profile.updateFailed","Update failed"))}finally{m(!1),window.setTimeout(()=>p(null),2500)}}},U=async T=>{await i.changeLanguage(T),localStorage.setItem(cu,T),C(!1)},_=()=>{var T;return(T=y.current)==null?void 0:T.click()},W=async T=>{var Q;const j=(Q=T.target.files)==null?void 0:Q[0];if(T.target.value="",!j||!j.type.startsWith("image/"))return;const $=await ry(j),z=await iy($,320);localStorage.setItem(su,z),h(z)},H=T=>{N(T),localStorage.setItem(lu,T?"1":"0")},pe=async()=>{try{if(w(null),typeof n=="function"){const T=n();T&&typeof T.then=="function"&&await T}else{t(null);try{localStorage.removeItem("token")}catch{}}}catch{w(r("auth.logoutFailed","Logout failed. Please try again.")),window.setTimeout(()=>w(null),3e3)}},I=(O=i.language)!=null&&O.toLowerCase().startsWith("el")?r("lang.el","Ελληνικά"):r("lang.en","English");return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root{
          --bg:#0A192F;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.22);
          --ink:#fff;
          --muted:#9aa4b2;
          --muted2:#cbd5e1;
          --accent:#37C3B6;
          --accent2:#2CA59A;
          --pillBg:#0f172a;
          --pillBr:#24324a;
        }
        .page{ background:var(--bg); color:var(--ink); min-height:calc(100vh - 72px); padding:16px; display:flex; flex-direction:column; }
        .container{ width:100%; max-width:1100px; margin:0 auto; flex:1; }

        .grid2{
          display:grid; gap:16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px){
          .grid2{ grid-template-columns: 0.9fr 1.1fr; align-items:start; }
        }

        .cardx{
          background:var(--card);
          border:1px solid var(--cardBorder);
          border-radius:18px;
          padding:18px;
          box-shadow:0 18px 40px rgba(0,0,0,.35);
        }

        .header{
          display:flex; flex-direction:column; align-items:center; padding:8px 8px 18px;
          background: linear-gradient(180deg, #0b1020, #0e1526);
          border-radius:14px;
        }
        .title{ font-size:1.4rem; font-weight:800; margin:4px 0 12px; }

        .avatar-wrap{
          position:relative; width:132px; height:132px; margin-bottom:12px;
        }
        .avatar{
          width:132px; height:132px; border-radius:50%;
          border:3px solid var(--accent);
          object-fit:cover; background:#0e1526;
        }
        .cam-btn{
          position:absolute; right:0; bottom:0; border:none; cursor:pointer;
          background:linear-gradient(135deg, var(--accent), var(--accent2));
          color:#fff; width:40px; height:40px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 8px 22px rgba(55,195,182,.35);
        }

        .uname{ color:#cfe3ff; font-size:14px; margin-top:2px; }

        .row{ display:flex; gap:10px; flex-wrap:wrap; }

        .field{ display:flex; flex-direction:column; gap:6px; }
        .label{ color:var(--muted); font-size:14px; }
        .input{
          background:#0f172a; color:var(--ink);
          border:1px solid #24324a; border-radius:12px; padding:12px;
          outline:none;
        }
        .input:focus{ border-color:var(--accent); box-shadow:0 0 0 2px rgba(55,195,182,.15); }

        .btn-primary{
          border:none; color:#fff; font-weight:800; padding:12px 16px; border-radius:12px; cursor:pointer;
          background:linear-gradient(135deg, var(--accent), var(--accent2));
          box-shadow:0 8px 28px rgba(55,195,182,.35);
        }
        .btn-primary:disabled{ opacity:.6; cursor:not-allowed; }

        .pill{
          background:var(--pillBg); border:1px solid var(--pillBr); border-radius:999px;
          padding:6px 10px; font-size:14px;
        }

        .alert{
          color:#fca5a5; background:rgba(220,38,38,.08); border:1px solid rgba(220,38,38,.25);
          padding:10px 12px; border-radius:10px; text-align:center;
        }

        /* switch */
        .switch{
          --w: 46px; --h: 26px;
          width:var(--w); height:var(--h); border-radius:999px;
          background:#24324a; position:relative; cursor:pointer; border:1px solid #2b3b5a;
        }
        .switch.kn{
          background: linear-gradient(135deg, rgba(55,195,182,.35), rgba(44,165,154,.35));
        }
        .thumb{
          position:absolute; top:2px; left:2px; width:22px; height:22px; border-radius:50%;
          background:#cbd5e1; transition:left .18s ease;
        }
        .kn .thumb{ left: calc(100% - 24px); background:#fff; }

        /* modal */
        .modal-backdrop{ position:fixed; inset:0; background:rgba(0,0,0,.55); display:flex; align-items:center; justify-content:center; z-index:60; }
        .modal{
          width:min(420px, 92%); background:#0F1A36; border:1px solid var(--cardBorder);
          border-radius:16px; padding:16px; color:#e8eeff; box-shadow:0 22px 44px rgba(0,0,0,.45);
        }
        .modal h4{ margin:0 0 10px; font-size:1.15rem; text-align:center; }
        .modal-actions{ display:grid; gap:10px; }
        .modal-btn{
          height:44px; border-radius:10px; border:1px solid rgba(55,195,182,.25);
          background:rgba(255,255,255,.04); color:#e8eeff; font-weight:700; cursor:pointer;
        }
        .modal-btn:hover{ filter:brightness(1.05); }
        .modal-cancel{ margin-top:6px; text-align:right; }
        .modal-cancel button{ background:transparent; border:none; color:#9fb0d0; cursor:pointer; }

        .section-title{ font-weight:800; margin:6px 0 10px; }
        .divider{ height:1px; background:#1f2937; margin:12px 0; }

        /* logout button container */
        .logout-wrap{
          margin-top:24px;
          text-align:center;
          position:relative;
          z-index: 2; /* ensure it's above any lingering overlays */
        }
        .logout-btn{
          background:#dc2626;
          background:linear-gradient(135deg,#ef4444,#dc2626);
          color:#fff;
          border:none;
          padding:12px 20px;
          border-radius:12px;
          font-weight:700;
          cursor:pointer;
          box-shadow:0 8px 20px rgba(220,38,38,.35);
        }
        .logout-btn:hover{ filter:brightness(1.05); }
        .logout-space{ height:70px; } /* spacing so it doesn't hide under navbar */

        /* Contact Us Section Styles */
        .contact-section {
          margin-top: 20px;
          text-align: center;
        }
        
        .contact-btn {
          border: none;
          color: #fff;
          font-weight: 700;
          padding: 14px 24px;
          border-radius: 14px;
          cursor: pointer;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 8px 28px rgba(102, 126, 234, 0.35);
          width: 100%;
          max-width: 280px;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }
        
        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(102, 126, 234, 0.45);
        }
        
        /* Contact Modal Styles */
        .contact-modal {
          width: min(500px, 95%);
          background: #0F1A36;
          border: 1px solid var(--cardBorder);
          border-radius: 20px;
          padding: 24px;
          color: #e8eeff;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .contact-title {
          font-size: 1.4rem;
          font-weight: 800;
          margin: 0 0 8px 0;
          background: linear-gradient(135deg, #37C3B6, #667eea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-subtitle {
          color: var(--muted);
          font-size: 0.95rem;
        }
        
        .contact-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(55, 195, 182, 0.15);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(55, 195, 182, 0.3);
          transform: translateX(4px);
        }
        
        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          flex-shrink: 0;
        }
        
        .contact-content {
          flex: 1;
          text-align: left;
        }
        
        .contact-label {
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 4px;
        }
        
        .contact-value {
          font-weight: 600;
          font-size: 1rem;
          color: #fff;
        }
        
        .contact-link {
          color: var(--accent);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-link:hover {
          color: #fff;
          text-decoration: underline;
        }
        
        .social-links {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 20px;
        }
        
        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          text-decoration: none;
          font-size: 1.3rem;
          transition: all 0.3s ease;
        }
        
        .social-btn:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
        
        .website-btn {
          width: 100%;
          margin-top: 16px;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, #37C3B6, #2CA59A);
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        
        .website-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(55, 195, 182, 0.4);
        }

        @media (max-width: 480px) {
          .contact-modal {
            padding: 20px 16px;
          }
          
          .contact-item {
            padding: 14px;
            gap: 12px;
          }
          
          .contact-icon {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
          
/* ensure the image sits nicely inside the round button */
.social-btn img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  display: block;
}

      `}),l.jsx("input",{ref:y,type:"file",accept:"image/*",style:{display:"none"},onChange:W}),l.jsx("div",{className:"page",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"grid2",children:[l.jsxs("div",{className:"cardx",children:[l.jsxs("div",{className:"header",children:[l.jsx("div",{className:"title",children:r("profile.title","My Profile")}),l.jsxs("div",{className:"avatar-wrap",children:[l.jsx("img",{className:"avatar",src:g||"/assets/avatar.png",alt:r("profile.avatarAlt","Avatar")}),l.jsx("button",{className:"cam-btn",type:"button",onClick:_,"aria-label":r("profile.changePhoto","Change photo"),title:r("profile.changePhoto","Change photo"),children:"📷"})]}),l.jsx("div",{style:{fontWeight:800,fontSize:18},children:o||r("profile.yourName","Your name")}),l.jsx("div",{className:"uname",children:u?`@${u.split("@")[0]}`:""})]}),l.jsxs("div",{style:{marginTop:12},className:"row",children:[l.jsxs("div",{className:"pill",children:[r("profile.email","Email"),": ",u||"-"]}),l.jsxs("div",{className:"pill",children:[r("profile.language","Language"),": ",I]}),l.jsxs("div",{className:"pill",children:[r("profile.notifications","Notifications"),":"," ",b?r("common.on","On"):r("common.off","Off")]})]}),l.jsx("div",{className:"contact-section",children:l.jsxs("button",{className:"contact-btn",onClick:()=>R(!0),children:["📞 ",r("profile.contactUs","Contact Us")]})}),l.jsx("p",{style:{color:"var(--muted)",marginTop:12},children:r("profile.photoLocalNote","Your profile photo is only stored on this device for privacy and is not uploaded to our servers.")})]}),l.jsxs("form",{className:"cardx",onSubmit:A,children:[l.jsx("div",{className:"section-title",children:r("profile.accountDetails","Account details")}),l.jsxs("div",{className:"field",children:[l.jsx("label",{className:"label",children:r("profile.fullName","Full name")}),l.jsx("input",{className:"input",value:o,onChange:T=>a(T.target.value),placeholder:r("profile.fullNamePh","Enter your full name")})]}),l.jsxs("div",{className:"field",style:{marginTop:10},children:[l.jsx("label",{className:"label",children:r("profile.contactNumber","Contact number")}),l.jsx("input",{className:"input",value:s,onChange:T=>c(T.target.value),placeholder:r("profile.contactNumberPh","Enter your number")})]}),l.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",marginTop:14},children:[l.jsx("button",{className:"btn-primary",disabled:f,type:"submit",children:f?r("profile.saving","Saving…"):r("profile.saveChanges","Save changes")}),x&&l.jsx("span",{className:"pill",style:{borderRadius:8},children:x})]}),l.jsx("div",{className:"divider"}),l.jsx("div",{className:"section-title",children:r("profile.preferences","Preferences")}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:700},children:r("profile.language","Language")}),l.jsx("div",{style:{color:"var(--muted)"},children:I})]}),l.jsx("button",{type:"button",className:"btn-primary",onClick:()=>C(!0),style:{padding:"10px 14px"},children:r("common.change","Change")})]}),l.jsx("div",{className:"divider"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:700},children:r("profile.notifications","Notifications")}),l.jsx("div",{style:{color:"var(--muted)"},children:r("profile.notificationsDesc","Email reminders and important updates")})]}),l.jsx("button",{type:"button",className:`switch ${b?"kn":""}`,onClick:()=>H(!b),"aria-pressed":b,"aria-label":r("profile.toggleNotifications","Toggle notifications"),children:l.jsx("span",{className:"thumb"})})]})]})]}),l.jsxs("div",{className:"logout-wrap",children:[l.jsx("button",{type:"button",className:"logout-btn",onClick:pe,"aria-label":r("auth.logout","Log out"),children:r("auth.logout","Log out")}),v&&l.jsx("div",{style:{marginTop:10},className:"alert",children:v})]}),l.jsx("div",{className:"logout-space"})]})}),P&&l.jsx("div",{className:"modal-backdrop",onClick:()=>C(!1),children:l.jsxs("div",{className:"modal",onClick:T=>T.stopPropagation(),children:[l.jsx("h4",{children:r("profile.selectLanguage","Select language")}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{className:"modal-btn",onClick:()=>U("en"),children:r("lang.en","English")}),l.jsx("button",{className:"modal-btn",onClick:()=>U("el"),children:r("lang.el","Ελληνικά")})]}),l.jsx("div",{className:"modal-cancel",children:l.jsx("button",{onClick:()=>C(!1),children:r("common.close","Close")})})]})}),E&&l.jsx("div",{className:"modal-backdrop",onClick:()=>R(!1),children:l.jsxs("div",{className:"contact-modal",onClick:T=>T.stopPropagation(),children:[l.jsxs("div",{className:"contact-header",children:[l.jsx("h3",{className:"contact-title",children:r("profile.contactUs","Contact Us")}),l.jsx("p",{className:"contact-subtitle",children:r("profile.contactSubtitle","Get in touch with Lakidis Aesthetic Clinic")})]}),l.jsxs("div",{className:"contact-grid",children:[l.jsxs("div",{className:"contact-item",children:[l.jsx("div",{className:"contact-icon",children:"📞"}),l.jsxs("div",{className:"contact-content",children:[l.jsx("div",{className:"contact-label",children:r("profile.primaryPhone","Primary Phone")}),l.jsx("div",{className:"contact-value",children:l.jsx("a",{href:"tel:2317004222",className:"contact-link",children:"2317 004 222"})})]})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("div",{className:"contact-icon",children:"📱"}),l.jsxs("div",{className:"contact-content",children:[l.jsx("div",{className:"contact-label",children:r("profile.mobilePhone","Mobile Phone")}),l.jsx("div",{className:"contact-value",children:l.jsx("a",{href:"tel:6944275175",className:"contact-link",children:"6944 275 175"})})]})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("div",{className:"contact-icon",children:"✉️"}),l.jsxs("div",{className:"contact-content",children:[l.jsx("div",{className:"contact-label",children:r("profile.emailAddress","Email Address")}),l.jsx("div",{className:"contact-value",children:l.jsx("a",{href:"mailto:alakidis@gmail.com",className:"contact-link",children:"alakidis@gmail.com"})})]})]})]}),l.jsxs("a",{href:"https://lakidisaesthetic.gr/",target:"_blank",rel:"noopener noreferrer",className:"website-btn",children:["🌐 ",r("profile.visitWebsite","Visit Our Website")]}),l.jsxs("div",{className:"social-links",children:[l.jsx("a",{href:"https://www.instagram.com/lakidis/",target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"Instagram",children:l.jsx("img",{src:"/assets/insta-ico.png",alt:"Instagram",style:{width:"26px",height:"26px",objectFit:"contain"}})}),l.jsx("a",{href:"https://www.facebook.com/LA.AestheticMed/",target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"Facebook",children:l.jsx("img",{src:"/assets/facebook-icon.png",alt:"Facebook",style:{width:"26px",height:"26px",objectFit:"contain"}})})]}),l.jsx("div",{className:"modal-cancel",children:l.jsx("button",{onClick:()=>R(!1),children:r("common.close","Close")})})]})})]})};async function ry(e){return await e.arrayBuffer(),new Promise((t,n)=>{const r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}function iy(e,t=320){return new Promise(n=>{const r=new Image;r.onload=()=>{const i=document.createElement("canvas");i.width=t,i.height=t;const o=i.getContext("2d"),a=Math.max(t/r.width,t/r.height),s=r.width*a,c=r.height*a,u=(t-s)/2,d=(t-c)/2;o.drawImage(r,u,d,s,c),n(i.toDataURL("image/jpeg",.85))},r.crossOrigin="anonymous",r.src=e})}const Si=e=>Number.isFinite(e)?`€${e}`:"—",uu=(e,t)=>{const n=Number.isFinite(e)?e:void 0,r=Number.isFinite(t)?t:void 0;return n==null&&r==null?"—":n!=null&&r!=null?n===r?Si(n):`${Si(n)}–${Si(r)}`:Si(n??r)},du=e=>Number.isFinite(e)?`${e}′`:"—";function fu(e){const t=e.metrics||{},n=Number.isFinite(t.ageEstimate)?`Age estimate: ${t.ageEstimate}${Number.isFinite(t.ageLow)&&Number.isFinite(t.ageHigh)?` (${t.ageLow}–${t.ageHigh})`:""}`:"Age estimate: —",r=Number.isFinite(t.symmetryMm)?`Face asymmetry: ${t.symmetryMm.toFixed(1)} mm${Number.isFinite(t.symmetryPctIPD)?` (${(t.symmetryPctIPD*100).toFixed(1)}% IPD)`:""}${t.symmetryBucket?`, ${t.symmetryBucket}`:""}`:"Face asymmetry: —",i=`Dominant expression: ${t.emotion||"—"}`;return`${n}. ${r}. ${i}.`}function oy(){var e;return(e=window.pdfMake)!=null&&e.vfs?Promise.resolve():new Promise((t,n)=>{const r=i=>new Promise((o,a)=>{const s=document.createElement("script");s.src=i,s.async=!0,s.onload=()=>o(),s.onerror=()=>a(new Error(`Failed to load ${i}`)),document.head.appendChild(s)});r("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js").then(()=>r("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js")).then(()=>t()).catch(n)})}async function ay(e){const t=await fetch(e,{mode:"cors"});if(!t.ok)throw new Error("logo fetch failed");const n=await t.blob();return await new Promise((r,i)=>{const o=new FileReader;o.onloadend=()=>r(o.result),o.onerror=i,o.readAsDataURL(n)})}async function sy(){const e=["/assets/clinic_logo.png",`${window.PUBLIC_URL||""}/assets/clinic_logo.png`,`${window.location.origin}/assets/clinic_logo.png`,"/clinic_logo.png"];for(const t of e)try{return await ay(t)}catch{}return null}const ly=()=>{var f,m;const{id:e}=Mm(),[t,n]=S.useState(null),[r,i]=S.useState(null),[o,a]=S.useState(!1);S.useEffect(()=>{e&&(i(null),Op(e).then(n).catch(x=>i(String((x==null?void 0:x.message)||x))))},[e]);const s=S.useMemo(()=>{if(!(t!=null&&t.createdAt))return"";try{return new Date(t.createdAt).toLocaleString()}catch{return String(t.createdAt)}},[t==null?void 0:t.createdAt]);function c(x,p,v){const w=x.metrics||{},g=x.summary||fu(x),h=x.aiReportGreek||"-",y=Array.isArray(x.details)?x.details.slice(0,5):[],b=Array.isArray(x.suggestions)?x.suggestions:[],N=x.disclaimer||"This AI analysis is informational and does not replace a consultation with a qualified clinician.",P=[{table:{widths:["*","*","*"],body:[[{text:`Age estimate: ${Number.isFinite(w.ageEstimate)?`${w.ageEstimate}${Number.isFinite(w.ageLow)&&Number.isFinite(w.ageHigh)?` (${w.ageLow}–${w.ageHigh})`:""}`:"—"}`,style:"pillCell"},{text:`Face asymmetry: ${Number.isFinite(w.symmetryMm)?`${w.symmetryMm.toFixed(1)} mm`:"—"}${Number.isFinite(w.symmetryPctIPD)?` (${(w.symmetryPctIPD*100).toFixed(1)}% IPD)`:""}${w.symmetryBucket?`, ${w.symmetryBucket}`:""}`,style:"pillCell"},{text:`Dominant expression: ${w.emotion||"—"}`,style:"pillCell"}]]},layout:{hLineWidth:()=>.6,vLineWidth:()=>.6,hLineColor:()=>"#c9d5e6",vLineColor:()=>"#c9d5e6",paddingLeft:()=>8,paddingRight:()=>8,paddingTop:()=>6,paddingBottom:()=>6}}],C=b.length?b.map(R=>({margin:[0,4,0,4],table:{widths:["*"],body:[[{stack:[{text:R.name,bold:!0},...R.description?[{text:R.description,color:"#333"}]:[],{columns:[{text:`Duration: ${du(R.durationMin)}`},{text:`Cost: ${uu(R.priceMin,R.priceMax)}`,alignment:"right"}],margin:[0,4,0,0]}]}]]},layout:{fillColor:()=>"#f9fbfd",hLineColor:()=>"#cfd8e3",vLineColor:()=>"#cfd8e3"}})):[{text:"-",margin:[0,2,0,2]}];return{pageSize:"A4",pageMargins:[40,60,40,60],defaultStyle:{fontSize:10,color:"#111"},styles:{h1:{fontSize:20,bold:!0,color:"#0b1020",margin:[0,12,0,8]},h2:{fontSize:13,bold:!0,color:"#19a3a3",margin:[0,10,0,6]},h3:{fontSize:14,bold:!0,color:"#0b1020",margin:[0,8,0,6]},muted:{color:"#334155"},pillCell:{fillColor:"#f7fafc"},ctaBox:{fillColor:"#f0f9ff",color:"#0369a1"},ctaTitle:{fontSize:12,bold:!0,color:"#0369a1",margin:[0,0,0,4]}},header:R=>R>1?{}:{margin:[0,0,0,12],table:{widths:[70,"*"],body:[[v?{image:v,width:70,alignment:"left",margin:[12,8,0,8]}:{text:""},{margin:[0,8,12,8],stack:[{text:"Dr Antonios Medical Clinic",bold:!0,color:"#fff"},{text:"Ermou 53, 5th floor, Thessaloniki 546 23",color:"#fff"},{text:"Tel: 2317 004 222 | Mob: 6944 275 175",color:"#fff"},{text:"Email: alakidis@gmail.com",color:"#fff"}]}]]},layout:{fillColor:()=>"#19a3a3",hLineWidth:()=>0,vLineWidth:()=>0}},footer:()=>({margin:[0,8,0,0],columns:[{text:"© 2025 Dr Antonios | www.alakidisaesthetic.gr | alakidis@gmail.com | Dr Antonios (Doctor)",alignment:"center",color:"#19a3a3",fontSize:9}]}),content:[{text:"PATIENT MEDICAL REPORT",style:"h1",alignment:"center"},{text:"Patient Report",style:"h2"},{text:`Report ID: ${x.id}${x.createdAt?`   •   Date: ${p}`:""}`,style:"muted",margin:[0,2,0,0]},{text:"📖 Summary",style:"h2",margin:[0,10,0,4]},{text:g},{text:"📊 Key metrics",style:"h2"},...P,{text:"🤖 AI Report",style:"h2"},{text:h},{text:"🔍 Key Observations",style:"h2"},y.length?{ul:y}:{text:"-"},{text:"💡 Suggested Treatments",style:"h2"},...C,{text:"⚠️ Disclaimer",style:"h2"},{text:N,style:"muted"},{text:"🚀 Your Next Steps",style:"h3",margin:[0,20,0,8]},{table:{widths:["*"],body:[[{stack:[{text:"📧 Share Your Report",style:"ctaTitle"},{text:"Email your report to our specialists for personalized feedback:",margin:[0,2,0,4]},{text:"alakidis@gmail.com",bold:!0,color:"#19a3a3",margin:[0,0,0,8]},{text:"📞 Quick Consultation",style:"ctaTitle",margin:[0,8,0,0]},{text:"Prefer to speak directly? Call us at:",margin:[0,2,0,4]},{text:"+30 231 700 4222",bold:!0,color:"#19a3a3",margin:[0,0,0,8]},{text:"🎯 Book Your Appointment",style:"ctaTitle",margin:[0,8,0,0]},{text:"Ready to take the next step? Schedule your consultation:",margin:[0,2,0,4]},{text:"👉 Book Now: https://lakidisaesthetics.setmore.com/?lang=Greek",bold:!0,color:"#dc2626",link:"https://lakidisaesthetics.setmore.com/?lang=Greek",margin:[0,0,0,4]}],margin:[12,8]}]]},layout:{fillColor:()=>"#f0f9ff",hLineWidth:()=>1,vLineWidth:()=>1,hLineColor:()=>"#bae6fd",vLineColor:()=>"#bae6fd"},margin:[0,8,0,0]},{text:"Your journey to better skin starts here! We look forward to helping you achieve your aesthetic goals.",alignment:"center",italics:!0,color:"#475569",margin:[0,16,0,0]}]}}async function u(){if(t)try{a(!0),await oy();const x=await sy().catch(()=>null),p=c(t,s||"",x);window.pdfMake.createPdf(p).download(`report_${t.id}.pdf`)}catch(x){alert((x==null?void 0:x.message)||"PDF download failed.")}finally{a(!1)}}if(r)return l.jsx("div",{className:"card",style:{color:"#fecaca"},children:r});if(!t)return l.jsx("div",{className:"card",children:"Loading…"});const d=t.metrics||{};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root{
          --bg:#0A192F;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.22);
          --ink:#fff;
          --muted:#9aa4b2;
          --muted2:#cbd5e1;
          --accent:#37C3B6;
          --accent2:#2CA59A;
          --pillBg:#0f172a;
          --pillBr:#24324a;
        }
        .report-card{
          background: var(--card);
          border: 1px solid var(--cardBorder);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 18px 40px rgba(0,0,0,.35);
          color: var(--ink);
        }
        .report-header{
          display:flex; align-items:center; justify-content:space-between; gap:10px;
          margin-bottom: 10px;
        }
        .download-btn{
          border: none;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 16px; border-radius: 12px; cursor: pointer;
          font-weight: 800; letter-spacing: .2px; font-size: 14px;
          color: #fff;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 8px 28px rgba(55,195,182,0.35);
        }
        .download-btn:hover{ filter: brightness(1.05); }
        .download-btn[disabled]{ opacity:.7; cursor: not-allowed; }
        .download-btn .ico{ font-size: 18px; }
        .report-section{ margin: 12px 0 6px; }
        .report-section h3{ margin: 0 0 6px; }
        .muted{ color: var(--muted2); }
        .small{ font-size: 12px; opacity: .85; }
        .prewrap{ white-space: pre-wrap; }
        .pill-row{ display:flex; gap:8px; flex-wrap: wrap; }
        .pill{
          background: var(--pillBg); border: 1px solid var(--pillBr);
          padding: 6px 10px; border-radius: 999px; font-size: 14px;
        }
        .pill-key{ color: var(--muted); font-weight: 600; margin-right: 4px; }
        .bullets{ margin: 0; padding-left: 18px; }
        .suggest-grid{
          display: grid; gap: 10px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 780px){
          .suggest-grid{ grid-template-columns: repeat(2, 1fr); }
        }
        .suggest-card{
          background: #0f172a; border: 1px solid #24324a; border-radius: 12px; padding: 12px;
        }
        .suggest-title{ font-weight: 800; }
        .suggest-sub{ color: var(--muted2); margin-top: 4px; }
        .cta-row{ margin-top: 14px; display:flex; }
        .cta{
          text-decoration: none; text-align: center;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          color: #fff; padding: 12px 16px; border-radius: 12px; font-weight: 800;
          box-shadow: 0 8px 28px rgba(55,195,182,0.35);
        }
        .cta.wide{ width: 100%; }
        .warn{
          background: rgba(220,38,38,0.06);
          border: 1px solid rgba(220,38,38,0.25);
          border-radius: 12px;
          padding: 10px 12px;
          color: #fecaca;
        }
        /* ✅ Mobile only safe space for bottom nav */
        @media (max-width: 768px) {
          .report-card {
            padding-bottom: 80px; /* space so CTA/book button stays above bottom nav */
          }
        }
      `}),l.jsx("div",{className:"grid",children:l.jsxs("div",{className:"report-card",children:[l.jsxs("div",{className:"report-header",children:[l.jsx("h2",{style:{margin:0},children:"📖 Report"}),l.jsxs("button",{className:"download-btn",onClick:u,title:"Download PDF",disabled:o,children:[l.jsx("span",{className:"ico",children:"⬇️"}),l.jsx("span",{children:o?"Preparing…":"Download PDF"})]})]}),l.jsxs("div",{className:"report-section",children:[l.jsx("h3",{children:"📖 Summary"}),t.summary?l.jsx("p",{className:"muted",children:t.summary}):l.jsx("p",{className:"muted",children:fu(t)}),s&&l.jsx("p",{className:"muted small",children:s})]}),l.jsxs("div",{className:"report-section",children:[l.jsx("h3",{children:"📊 Key metrics"}),l.jsxs("div",{className:"pill-row",children:[l.jsxs("div",{className:"pill",children:[l.jsx("span",{className:"pill-key",children:"Age estimate:"})," ",Number.isFinite(d.ageEstimate)?`${d.ageEstimate} ${Number.isFinite(d.ageLow)&&Number.isFinite(d.ageHigh)?`(${d.ageLow}–${d.ageHigh})`:""}`:"—"]}),l.jsxs("div",{className:"pill",children:[l.jsx("span",{className:"pill-key",children:"Face asymmetry:"})," ",Number.isFinite(d.symmetryMm)?`${d.symmetryMm.toFixed(1)} mm`:"—",Number.isFinite(d.symmetryPctIPD)&&` (${(d.symmetryPctIPD*100).toFixed(1)}% IPD)`,d.symmetryBucket?`, ${d.symmetryBucket}`:""]}),l.jsxs("div",{className:"pill",children:[l.jsx("span",{className:"pill-key",children:"Dominant expression:"})," ",d.emotion||"—"]})]})]}),t.aiReportGreek&&l.jsxs("div",{className:"report-section",children:[l.jsx("h3",{children:"🤖 AI Report"}),l.jsx("p",{className:"muted prewrap",children:t.aiReportGreek})]}),!!((f=t.details)!=null&&f.length)&&l.jsxs("div",{className:"report-section",children:[l.jsx("h3",{children:"🔎 Details"}),l.jsx("ul",{className:"bullets",children:t.details.slice(0,5).map((x,p)=>l.jsx("li",{children:x},p))})]}),!!((m=t.suggestions)!=null&&m.length)&&l.jsxs("div",{className:"report-section",children:[l.jsx("h3",{children:"💡 Suggested Treatments"}),l.jsx("div",{className:"suggest-grid",children:t.suggestions.map((x,p)=>l.jsxs("div",{className:"suggest-card",children:[l.jsx("div",{className:"suggest-title",children:x.name}),x.description&&l.jsx("div",{className:"suggest-sub",children:x.description}),l.jsxs("div",{className:"pill-row",style:{marginTop:8},children:[l.jsxs("div",{className:"pill",children:[l.jsx("span",{className:"pill-key",children:"Duration:"})," ",du(x.durationMin)]}),l.jsxs("div",{className:"pill",children:[l.jsx("span",{className:"pill-key",children:"Cost:"})," ",uu(x.priceMin,x.priceMax)]})]})]},`${x.id||p}-${x.name}`))})]}),t.disclaimer&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"report-section warn",children:[l.jsx("strong",{children:"⚠️ Disclaimer: "}),"Results are for informational purposes only and not a medical diagnosis.",l.jsx("p",{className:"muted",style:{marginTop:8},children:t.disclaimer})]}),l.jsx("div",{className:"cta-row",children:l.jsx("a",{className:"cta wide",href:"https://lakidisaesthetics.setmore.com/",target:"_blank",rel:"noopener noreferrer",children:"📅 BOOK APPOINTMENT"})})]})]})})]})},ur=[{id:"1",image:"/assets/onboarding/slide1.png",titleKey:"onboarding1Title",subtitleKey:"onboarding1Subtitle"},{id:"2",image:"/assets/onboarding/slide2.png",titleKey:"onboarding2Title",subtitleKey:"onboarding2Subtitle"},{id:"3",image:"/assets/onboarding/slide3.png",titleKey:"onboarding3Title",subtitleKey:"onboarding3Subtitle"},{id:"4",image:"/assets/onboarding/doctor12345.png",titleKey:"onboarding4Title",subtitleKey:"onboarding4Subtitle"}],cy=()=>{const{t:e}=jt(),t=gn(),[n,r]=S.useState(0),i=S.useRef(null),o="/assets/clinic_logo.png";S.useEffect(()=>{const f=m=>{m.key==="ArrowRight"&&a(),m.key==="ArrowLeft"&&s()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[n]);const a=()=>r(f=>Math.min(f+1,ur.length-1)),s=()=>r(f=>Math.max(f-1,0)),c=()=>{localStorage.setItem("onboarded","true"),t("/home")},u=()=>{n<ur.length-1?a():(localStorage.setItem("onboarded","true"),t("/home"))},d={appName:e("appName")||"Aesthetic AI",tagline:e("tagline")||"AI-powered skin insights & professional recommendations"};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        :root{
          --bg:#0A192F;
          --bg2:#162947;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.20);
          --ink:#FFFFFF;
          --muted:#9aa4b2;
          --muted2: rgba(255,255,255,0.85);
          --accent:#37C3B6;
          --accent2:#2CA59A;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow: hidden;
          height: 100vh;
        }

        .onb-page{
          height: 100vh;
          background:
            radial-gradient(1200px 600px at 20% 10%, rgba(55,195,182,0.12), transparent 60%),
            linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%);
          color: var(--ink);
          display: grid;
          grid-template-rows: auto 1fr auto;
          padding: 0;
        }

        /* Header */
        .onb-header{
          display:flex; 
          justify-content: space-between; 
          align-items:center;
          padding: 16px 20px;
          max-width: 1400px; 
          width: 100%; 
          margin: 0 auto;
          height: 70px;
          flex-shrink: 0;
        }
        .brand{
          display:flex; align-items:center; gap: 10px;
        }
        .brand-badge{
          width: 44px; height: 44px; border-radius: 12px; display:flex; align-items:center; justify-content:center;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 10px 30px rgba(55,195,182,0.3);
          color: #fff;
          overflow: hidden;
        }
        .brand-logo{
          width: 48px;
          height: 48px;
          object-fit: contain;
          border-radius: 6px;
        }
        .brand-title{
          font-weight: 900; letter-spacing: .4px; font-size: clamp(1.1rem, 2.2vw, 1.35rem);
        }
        .skip-btn{
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          color: #e8f2ff;
          border-radius: 999px;
          padding: 8px 16px;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .skip-btn:hover{ 
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }

        /* Main hero area */
        .onb-main{
          display: grid;
          place-items: center;
          padding: 10px 20px;
          height: 100%;
          overflow: hidden;
          flex: 1;
        }
        .onb-frame{
          width: 100%;
          max-width: 1200px;
          height: 100%;
          max-height: 650px;
          border-radius: 20px;
          border: 1px solid var(--cardBorder);
          background: linear-gradient(180deg, rgba(17,24,39,0.95), rgba(10,17,32,0.95));
          box-shadow: 0 25px 60px rgba(0,0,0,.45);
          padding: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Slides viewport/track */
        .slides-viewport{
          overflow: hidden; 
          border-radius: 16px;
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .slides-track{
          display:flex; 
          transition: transform .45s ease;
          will-change: transform;
          height: 100%;
        }
        .slide{
          min-width: 100%;
          display:grid;
          grid-template-columns: 1fr;
          gap: 20px;
          padding: 20px;
          align-items: center;
          height: 100%;
        }
        
        @media (min-width: 980px){
          .slide{ 
            grid-template-columns: 1.1fr .9fr; 
            padding: 3px; 
            gap: 10px; 
            height: 100%;
          }
        }

        /* Perfectly placed image styling */
        .slide-image-container{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .slide-image-container img{
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 16px;
          border: 1px solid rgba(55,195,182,0.15);
          box-shadow: 0 10px 10px rgba(0,0,0,0.4);
          transition: transform 0.3s ease;
        }

        .slide-image-container:hover img {
          transform: scale(1.02);
        }

        .slide-copy{
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          padding: 20px 0;
        }
        .slide-copy h2{
          margin: 0 0 20px;
          font-weight: 900;
          font-size: clamp(1.6rem, 3.6vw, 2.8rem);
          line-height: 1.15;
          background: linear-gradient(135deg, #fff 0%, var(--accent) 90%);
          -webkit-background-clip: text; 
          background-clip: text; 
          color: transparent;
        }
        .slide-copy p{
          margin: 0;
          color: var(--muted2);
          font-size: clamp(1rem, 2vw, 1.3rem);
          line-height: 1.6;
        }

        /* Bottom controls */
        .onb-controls{
          display:flex; 
          justify-content: space-between; 
          align-items: center;
          gap: 12px; 
          margin-top: 0px;
          padding: 0 10px;
          flex-shrink: 0;
        }
        .dots{ 
          display:flex; 
          gap: 8px; 
          align-items: center; 
        }
        .dot{
          width: 9px; 
          height: 9px; 
          border-radius: 999px;
          background: rgba(255,255,255,.35);
          transition: all .25s;
          border: none;
          cursor: pointer;
        }
        .dot.active{
          width: 22px; 
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(55,195,182,0.15) inset;
        }

        .cta-row{ 
          display:flex; 
          gap: 10px; 
        }
        .btn{
          border: none; 
          cursor: pointer;
          border-radius: 12px; 
          font-weight: 800;
          padding: 14px 24px;
          font-size: 15px;
          transition: all 0.3s ease;
          min-width: 120px;
        }
        .btn-primary{
          color: #fff;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 8px 28px rgba(55,195,182,0.35);
        }
        .btn-primary:hover{ 
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(55,195,182,0.45);
        }

        /* Footer tagline */
        .onb-footer{
          max-width: 1200px; 
          width: 100%; 
          margin: 0 auto;
          padding: 15px 20px;
          color: var(--muted);
          display:flex; 
          justify-content:center; 
          text-align:center;
          flex-shrink: 0;
          height: 50px;
        }
        .tagline{
          font-size: clamp(.95rem, 2vw, 1.05rem);
        }

        /* Mobile optimizations */
        @media (max-width: 979px) {
          .onb-page {
            height: 100vh;
            overflow: hidden;
          }
          
          .onb-frame {
            max-height: 85vh;
            padding: 15px;
          }
          
          .slide {
            padding: 15px;
            gap: 15px;
            grid-template-rows: 1fr auto;
          }
          
          .slide-image-container {
            padding: 15px;
            height: 300px;
          }
          
          .slide-image-container img {
            max-height: 260px;
            max-width: 95%;
          }
          
          .slide-copy {
            padding: 10px 0;
            text-align: center;
          }
          
          .onb-controls {
            margin-top: 15px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          .onb-header {
            padding: 12px 15px;
            height: 60px;
          }
          
          .onb-main {
            padding: 5px 15px;
          }
          
          .onb-frame {
            padding: 12px;
            max-height: 80vh;
          }
          
          .slide {
            padding: 10px;
            gap: 12px;
          }
          
          .slide-image-container {
            padding: 10px;
            height: 250px;
          }
          
          .slide-image-container img {
            max-height: 220px;
            max-width: 95%;
          }
          
          .slide-copy h2 {
            margin-bottom: 12px;
            font-size: 1.4rem;
          }
          
          .slide-copy p {
            font-size: 0.95rem;
          }
          
          .btn {
            padding: 12px 20px;
            font-size: 14px;
            min-width: 100px;
          }
          
          .onb-footer {
            padding: 10px 15px;
            height: 40px;
          }
        }

        /* Tablet landscape */
        @media (min-width: 768px) and (max-width: 979px) and (orientation: landscape) {
          .onb-frame {
            max-height: 90vh;
          }
          
          .slide-image-container {
            height: 280px;
          }
          
          .slide-image-container img {
            max-height: 240px;
          }
        }

        /* Desktop optimizations */
        @media (min-width: 980px) {
          .slide-image-container {
            height: 380px;
          }
          
          .slide-image-container img {
            max-height: 340px;
            max-width: 95%;
          }
        }

        /* Large desktop screens */
        @media (min-width: 1400px) {
          .onb-frame {
            max-height: 700px;
          }
          
          .slide-image-container {
            height: 420px;
          }
          
          .slide-image-container img {
            max-height: 380px;
          }
        }

        /* Extra large screens */
        @media (min-width: 1600px) {
          .slide-image-container {
            height: 460px;
          }
          
          .slide-image-container img {
            max-height: 420px;
          }
        }

        /* Image loading states */
        .image-placeholder {
          width: 200px;
          height: 200px;
          background: rgba(55,195,182,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-size: 3rem;
        }

        /* Prevent scroll on all devices */
        html, body {
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
        }
      `}),l.jsxs("div",{className:"onb-page",children:[l.jsxs("div",{className:"onb-header",children:[l.jsxs("div",{className:"brand","aria-label":d.appName,children:[l.jsx("div",{className:"brand-badge","aria-hidden":!0,children:l.jsx("img",{src:o,alt:"Logo",className:"brand-logo"})}),l.jsx("div",{className:"brand-title",children:d.appName})]}),l.jsx("button",{className:"skip-btn",onClick:c,children:e("skip")||"Skip"})]}),l.jsx("div",{className:"onb-main",children:l.jsxs("div",{className:"onb-frame",children:[l.jsx("div",{className:"slides-viewport",children:l.jsx("div",{className:"slides-track",ref:i,style:{transform:`translateX(-${n*100}%)`},children:ur.map(f=>l.jsxs("section",{className:"slide",children:[l.jsx("div",{className:"slide-image-container",children:l.jsx("img",{src:f.image,alt:"",onError:m=>{var p;m.currentTarget.style.display="none";const x=document.createElement("div");x.className="image-placeholder",x.innerHTML="🖼️",(p=m.currentTarget.parentNode)==null||p.appendChild(x)},loading:"eager"})}),l.jsxs("div",{className:"slide-copy",children:[l.jsx("h2",{children:e(f.titleKey)||"Intelligent AI Analysis"}),l.jsx("p",{children:e(f.subtitleKey)||"Upload, analyze, and get clear, professional insights in seconds."})]})]},f.id))})}),l.jsxs("div",{className:"onb-controls",children:[l.jsx("div",{className:"dots",children:ur.map((f,m)=>l.jsx("button",{className:`dot ${m===n?"active":""}`,onClick:()=>r(m),"aria-label":`Go to slide ${m+1}`},m))}),l.jsx("div",{className:"cta-row",children:l.jsx("button",{className:"btn btn-primary",onClick:u,children:n===ur.length-1?e("getStarted")||"Get started":e("next")||"Next"})})]})]})}),l.jsx("div",{className:"onb-footer",children:l.jsx("div",{className:"tagline",children:d.tagline})})]})]})},pu=()=>{const{auth:e}=Gt(),t=!!(e!=null&&e.token),n=localStorage.getItem("onboarded")==="true";return t?l.jsx(Vr,{to:n?"/home":"/onboarding",replace:!0}):l.jsx(Vr,{to:"/onboarding",replace:!0})},uy=()=>{const{auth:e}=Gt(),t=!!(e!=null&&e.token),n=localStorage.getItem("onboarded")==="true",r=ft();return t&&!n&&r.pathname!=="/onboarding"?l.jsx(Vr,{to:"/onboarding",replace:!0}):l.jsx(qf,{})},dy=()=>{const{auth:e}=Gt(),t=!!(e!=null&&e.token),n=localStorage.getItem("onboarded")==="true";return t&&n?l.jsx(Vr,{to:"/home",replace:!0}):l.jsx(cy,{})},fy=()=>{const e=ft(),t=S.useMemo(()=>["/login","/signup","/onboarding"].includes(e.pathname),[e.pathname]),[n,r]=S.useState("");return S.useEffect(()=>{let i=!0;return(async()=>{try{r("Connecting to server…"),await Zn()}catch{console.warn("Backend did not respond yet; UI will retry on demand.")}finally{i&&r("")}})(),()=>{i=!1}},[]),l.jsxs(l.Fragment,{children:[!t&&l.jsx(j1,{}),n&&l.jsx("div",{style:{padding:"6px 12px",fontSize:12,opacity:.8},children:n}),l.jsx("div",{children:l.jsxs(i0,{children:[l.jsx(Ee,{path:"/",element:l.jsx(pu,{})}),l.jsx(Ee,{path:"/onboarding",element:l.jsx(dy,{})}),l.jsx(Ee,{path:"/login",element:l.jsx(P1,{})}),l.jsx(Ee,{path:"/signup",element:l.jsx(E1,{})}),l.jsx(Ee,{element:l.jsx(C1,{}),children:l.jsxs(Ee,{element:l.jsx(uy,{}),children:[l.jsx(Ee,{path:"/home",element:l.jsx(L1,{})}),l.jsx(Ee,{path:"/scan",element:l.jsx(F1,{})}),l.jsx(Ee,{path:"/treatments",element:l.jsx(B1,{})}),l.jsx(Ee,{path:"/history",element:l.jsx(ty,{})}),l.jsx(Ee,{path:"/profile",element:l.jsx(ny,{})}),l.jsx(Ee,{path:"/report/:id",element:l.jsx(ly,{})})]})}),l.jsx(Ee,{path:"*",element:l.jsx(pu,{})})]})})]})},py=()=>l.jsx(d1,{children:l.jsx(fy,{})}),D=e=>typeof e=="string",dr=()=>{let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n},hu=e=>e==null?"":""+e,hy=(e,t,n)=>{e.forEach(r=>{t[r]&&(n[r]=t[r])})},gy=/###/g,gu=e=>e&&e.indexOf("###")>-1?e.replace(gy,"."):e,mu=e=>!e||D(e),jr=(e,t,n)=>{const r=D(t)?t.split("."):t;let i=0;for(;i<r.length-1;){if(mu(e))return{};const o=gu(r[i]);!e[o]&&n&&(e[o]=new n),Object.prototype.hasOwnProperty.call(e,o)?e=e[o]:e={},++i}return mu(e)?{}:{obj:e,k:gu(r[i])}},xu=(e,t,n)=>{const{obj:r,k:i}=jr(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let o=t[t.length-1],a=t.slice(0,t.length-1),s=jr(e,a,Object);for(;s.obj===void 0&&a.length;)o=`${a[a.length-1]}.${o}`,a=a.slice(0,a.length-1),s=jr(e,a,Object),s!=null&&s.obj&&typeof s.obj[`${s.k}.${o}`]<"u"&&(s.obj=void 0);s.obj[`${s.k}.${o}`]=n},my=(e,t,n,r)=>{const{obj:i,k:o}=jr(e,t,Object);i[o]=i[o]||[],i[o].push(n)},go=(e,t)=>{const{obj:n,k:r}=jr(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},xy=(e,t,n)=>{const r=go(e,n);return r!==void 0?r:go(t,n)},Ap=(e,t,n)=>{for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?D(e[r])||e[r]instanceof String||D(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):Ap(e[r],t[r],n):e[r]=t[r]);return e},xn=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var yy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const vy=e=>D(e)?e.replace(/[&<>"'\/]/g,t=>yy[t]):e;class wy{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const r=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,r),this.regExpQueue.push(t),r}}const by=[" ",",","?","!",";"],Sy=new wy(20),ky=(e,t,n)=>{t=t||"",n=n||"";const r=by.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const i=Sy.getRegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!i.test(e);if(!o){const a=e.indexOf(n);a>0&&!i.test(e.substring(0,a))&&(o=!0)}return o},Ns=(e,t,n=".")=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const r=t.split(n);let i=e;for(let o=0;o<r.length;){if(!i||typeof i!="object")return;let a,s="";for(let c=o;c<r.length;++c)if(c!==o&&(s+=n),s+=r[c],a=i[s],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&c<r.length-1)continue;o+=c-o+1;break}i=a}return i},Wr=e=>e==null?void 0:e.replace("_","-"),Ny={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var n,r;(r=(n=console==null?void 0:console[e])==null?void 0:n.apply)==null||r.call(n,console,t)}};class mo{constructor(t,n={}){this.init(t,n)}init(t,n={}){this.prefix=n.prefix||"i18next:",this.logger=t||Ny,this.options=n,this.debug=n.debug}log(...t){return this.forward(t,"log","",!0)}warn(...t){return this.forward(t,"warn","",!0)}error(...t){return this.forward(t,"error","")}deprecate(...t){return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(D(t[0])&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new mo(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new mo(this.logger,t)}}var lt=new mo;class Bo{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t,...n){this.observers[t]&&Array.from(this.observers[t].entries()).forEach(([i,o])=>{for(let a=0;a<o;a++)i(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([i,o])=>{for(let a=0;a<o;a++)i.apply(i,[t,...n])})}}class yu extends Bo{constructor(t,n={ns:["translation"],defaultNS:"translation"}){super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r,i={}){var u,d;const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,a=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;t.indexOf(".")>-1?s=t.split("."):(s=[t,n],r&&(Array.isArray(r)?s.push(...r):D(r)&&o?s.push(...r.split(o)):s.push(r)));const c=go(this.data,s);return!c&&!n&&!r&&t.indexOf(".")>-1&&(t=s[0],n=s[1],r=s.slice(2).join(".")),c||!a||!D(r)?c:Ns((d=(u=this.data)==null?void 0:u[t])==null?void 0:d[n],r,o)}addResource(t,n,r,i,o={silent:!1}){const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[t,n];r&&(s=s.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(s=t.split("."),i=n,n=s[1]),this.addNamespaces(n),xu(this.data,s,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r,i={silent:!1}){for(const o in r)(D(r[o])||Array.isArray(r[o]))&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o,a={silent:!1,skipCopy:!1}){let s=[t,n];t.indexOf(".")>-1&&(s=t.split("."),i=r,r=n,n=s[1]),this.addNamespaces(n);let c=go(this.data,s)||{};a.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?Ap(c,r,o):c={...c,...r},xu(this.data,s,c),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var $p={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{var a;t=((a=this.processors[o])==null?void 0:a.process(t,n,r,i))??t}),t}};const Fp=Symbol("i18next/PATH_KEY");function jy(){const e=[],t=Object.create(null);let n;return t.get=(r,i)=>{var o;return(o=n==null?void 0:n.revoke)==null||o.call(n),i===Fp?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)},Proxy.revocable(Object.create(null),t).proxy}function js(e,t){const{[Fp]:n}=e(jy());return n.join((t==null?void 0:t.keySeparator)??".")}const vu={},wu=e=>!D(e)&&typeof e!="boolean"&&typeof e!="number";class xo extends Bo{constructor(t,n={}){super(),hy(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=lt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t,n={interpolation:{}}){const r={...n};if(t==null)return!1;const i=this.resolve(t,r);return(i==null?void 0:i.res)!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,s=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!ky(t,r,i);if(a&&!s){const c=t.match(this.interpolator.nestingRegexp);if(c&&c.length>0)return{key:t,namespaces:D(o)?[o]:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return{key:t,namespaces:D(o)?[o]:o}}translate(t,n,r){let i=typeof n=="object"?{...n}:n;if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),t==null)return"";typeof t=="function"&&(t=js(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,a=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),u=c[c.length-1];let d=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;d===void 0&&(d=":");const f=i.lng||this.language,m=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((f==null?void 0:f.toLowerCase())==="cimode")return m?o?{res:`${u}${d}${s}`,usedKey:s,exactUsedKey:s,usedLng:f,usedNS:u,usedParams:this.getUsedParamsDetails(i)}:`${u}${d}${s}`:o?{res:s,usedKey:s,exactUsedKey:s,usedLng:f,usedNS:u,usedParams:this.getUsedParamsDetails(i)}:s;const x=this.resolve(t,i);let p=x==null?void 0:x.res;const v=(x==null?void 0:x.usedKey)||s,w=(x==null?void 0:x.exactUsedKey)||s,g=["[object Number]","[object Function]","[object RegExp]"],h=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!D(i.count),N=xo.hasDefaultValue(i),P=b?this.pluralResolver.getSuffix(f,i.count,i):"",C=i.ordinal&&b?this.pluralResolver.getSuffix(f,i.count,{ordinal:!1}):"",E=b&&!i.ordinal&&i.count===0,R=E&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${P}`]||i[`defaultValue${C}`]||i.defaultValue;let A=p;y&&!p&&N&&(A=R);const U=wu(A),_=Object.prototype.toString.apply(A);if(y&&A&&U&&g.indexOf(_)<0&&!(D(h)&&Array.isArray(A))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const W=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,A,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return o?(x.res=W,x.usedParams=this.getUsedParamsDetails(i),x):W}if(a){const W=Array.isArray(A),H=W?[]:{},pe=W?w:v;for(const I in A)if(Object.prototype.hasOwnProperty.call(A,I)){const G=`${pe}${a}${I}`;N&&!p?H[I]=this.translate(G,{...i,defaultValue:wu(R)?R[I]:void 0,joinArrays:!1,ns:c}):H[I]=this.translate(G,{...i,joinArrays:!1,ns:c}),H[I]===G&&(H[I]=A[I])}p=H}}else if(y&&D(h)&&Array.isArray(p))p=p.join(h),p&&(p=this.extendTranslation(p,t,i,r));else{let W=!1,H=!1;!this.isValidLookup(p)&&N&&(W=!0,p=R),this.isValidLookup(p)||(H=!0,p=s);const I=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&H?void 0:p,G=N&&R!==p&&this.options.updateMissing;if(H||W||G){if(this.logger.log(G?"updateKey":"missingKey",f,u,s,G?R:p),a){const $=this.resolve(s,{...i,keySeparator:!1});$&&$.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let O=[];const T=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&T&&T[0])for(let $=0;$<T.length;$++)O.push(T[$]);else this.options.saveMissingTo==="all"?O=this.languageUtils.toResolveHierarchy(i.lng||this.language):O.push(i.lng||this.language);const j=($,z,Q)=>{var ue;const Y=N&&Q!==p?Q:I;this.options.missingKeyHandler?this.options.missingKeyHandler($,u,z,Y,G,i):(ue=this.backendConnector)!=null&&ue.saveMissing&&this.backendConnector.saveMissing($,u,z,Y,G,i),this.emit("missingKey",$,u,z,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?O.forEach($=>{const z=this.pluralResolver.getSuffixes($,i);E&&i[`defaultValue${this.options.pluralSeparator}zero`]&&z.indexOf(`${this.options.pluralSeparator}zero`)<0&&z.push(`${this.options.pluralSeparator}zero`),z.forEach(Q=>{j([$],s+Q,i[`defaultValue${Q}`]||R)})}):j(O,s,R))}p=this.extendTranslation(p,t,i,x,r),H&&p===s&&this.options.appendNamespaceToMissingKey&&(p=`${u}${d}${s}`),(H||W)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${u}${d}${s}`:s,W?p:void 0,i))}return o?(x.res=p,x.usedParams=this.getUsedParamsDetails(i),x):p}extendTranslation(t,n,r,i,o){var c,u;if((c=this.i18nFormat)!=null&&c.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const d=D(t)&&(((u=r==null?void 0:r.interpolation)==null?void 0:u.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(d){const x=t.match(this.interpolator.nestingRegexp);f=x&&x.length}let m=r.replace&&!D(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(m={...this.options.interpolation.defaultVariables,...m}),t=this.interpolator.interpolate(t,m,r.lng||this.language||i.usedLng,r),d){const x=t.match(this.interpolator.nestingRegexp),p=x&&x.length;f<p&&(r.nest=!1)}!r.lng&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,(...x)=>(o==null?void 0:o[0])===x[0]&&!r.context?(this.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${n[0]}`),null):this.translate(...x,n),r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,s=D(a)?[a]:a;return t!=null&&(s!=null&&s.length)&&r.applyPostProcessor!==!1&&(t=$p.handle(s,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t,n={}){let r,i,o,a,s;return D(t)&&(t=[t]),t.forEach(c=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(c,n),d=u.key;i=d;let f=u.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const m=n.count!==void 0&&!D(n.count),x=m&&!n.ordinal&&n.count===0,p=n.context!==void 0&&(D(n.context)||typeof n.context=="number")&&n.context!=="",v=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(w=>{var g,h;this.isValidLookup(r)||(s=w,!vu[`${v[0]}-${w}`]&&((g=this.utils)!=null&&g.hasLoadedNamespace)&&!((h=this.utils)!=null&&h.hasLoadedNamespace(s))&&(vu[`${v[0]}-${w}`]=!0,this.logger.warn(`key "${i}" for languages "${v.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),v.forEach(y=>{var P;if(this.isValidLookup(r))return;a=y;const b=[d];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(b,d,y,w,n);else{let C;m&&(C=this.pluralResolver.getSuffix(y,n.count,n));const E=`${this.options.pluralSeparator}zero`,R=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(m&&(n.ordinal&&C.indexOf(R)===0&&b.push(d+C.replace(R,this.options.pluralSeparator)),b.push(d+C),x&&b.push(d+E)),p){const A=`${d}${this.options.contextSeparator||"_"}${n.context}`;b.push(A),m&&(n.ordinal&&C.indexOf(R)===0&&b.push(A+C.replace(R,this.options.pluralSeparator)),b.push(A+C),x&&b.push(A+E))}}let N;for(;N=b.pop();)this.isValidLookup(r)||(o=N,r=this.getResource(y,w,N,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r,i={}){var o;return(o=this.i18nFormat)!=null&&o.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}getUsedParamsDetails(t={}){const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&!D(t.replace);let i=r?t.replace:t;if(r&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const o of n)delete i[o]}return i}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}class bu{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=lt.create("languageUtils")}getScriptPartFromCode(t){if(t=Wr(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Wr(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(D(t)&&t.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(t)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getScriptPartFromCode(r);if(this.isSupportedCode(i))return n=i;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(a=>{if(a===o)return a;if(!(a.indexOf("-")<0&&o.indexOf("-")<0)&&(a.indexOf("-")>0&&o.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===o||a.indexOf(o)===0&&o.length>1))return a})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),D(t)&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes((n===!1?[]:n)||this.options.fallbackLng||[],t),i=[],o=a=>{a&&(this.isSupportedCode(a)?i.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return D(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):D(t)&&o(this.formatLanguageCode(t)),r.forEach(a=>{i.indexOf(a)<0&&o(this.formatLanguageCode(a))}),i}}const Su={zero:0,one:1,two:2,few:3,many:4,other:5},ku={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Cy{constructor(t,n={}){this.languageUtils=t,this.options=n,this.logger=lt.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,n){this.rules[t]=n}clearCache(){this.pluralRulesCache={}}getRule(t,n={}){const r=Wr(t==="dev"?"en":t),i=n.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:r,type:i});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let a;try{a=new Intl.PluralRules(r,{type:i})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),ku;if(!t.match(/-|_/))return ku;const c=this.languageUtils.getLanguagePartFromCode(t);a=this.getRule(c,n)}return this.pluralRulesCache[o]=a,a}needsPlural(t,n={}){let r=this.getRule(t,n);return r||(r=this.getRule("dev",n)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,n,r={}){return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t,n={}){let r=this.getRule(t,n);return r||(r=this.getRule("dev",n)),r?r.resolvedOptions().pluralCategories.sort((i,o)=>Su[i]-Su[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):[]}getSuffix(t,n,r={}){const i=this.getRule(t,r);return i?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",n,r))}}const Nu=(e,t,n,r=".",i=!0)=>{let o=xy(e,t,n);return!o&&i&&D(n)&&(o=Ns(e,n,r),o===void 0&&(o=Ns(t,n,r))),o},va=e=>e.replace(/\$/g,"$$$$");class Py{constructor(t={}){var n;this.logger=lt.create("interpolator"),this.options=t,this.format=((n=t==null?void 0:t.interpolation)==null?void 0:n.format)||(r=>r),this.init(t)}init(t={}){t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:o,prefixEscaped:a,suffix:s,suffixEscaped:c,formatSeparator:u,unescapeSuffix:d,unescapePrefix:f,nestingPrefix:m,nestingPrefixEscaped:x,nestingSuffix:p,nestingSuffixEscaped:v,nestingOptionsSeparator:w,maxReplaces:g,alwaysFormat:h}=t.interpolation;this.escape=n!==void 0?n:vy,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=o?xn(o):a||"{{",this.suffix=s?xn(s):c||"}}",this.formatSeparator=u||",",this.unescapePrefix=d?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=m?xn(m):x||xn("$t("),this.nestingSuffix=p?xn(p):v||xn(")"),this.nestingOptionsSeparator=w||",",this.maxReplaces=g||1e3,this.alwaysFormat=h!==void 0?h:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,r)=>(n==null?void 0:n.source)===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(t,n,r,i){var x;let o,a,s;const c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},u=p=>{if(p.indexOf(this.formatSeparator)<0){const h=Nu(n,c,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(h,void 0,r,{...i,...n,interpolationkey:p}):h}const v=p.split(this.formatSeparator),w=v.shift().trim(),g=v.join(this.formatSeparator).trim();return this.format(Nu(n,c,w,this.options.keySeparator,this.options.ignoreJSONStructure),g,r,{...i,...n,interpolationkey:w})};this.resetRegExp();const d=(i==null?void 0:i.missingInterpolationHandler)||this.options.missingInterpolationHandler,f=((x=i==null?void 0:i.interpolation)==null?void 0:x.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>va(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?va(this.escape(p)):va(p)}].forEach(p=>{for(s=0;o=p.regex.exec(t);){const v=o[1].trim();if(a=u(v),a===void 0)if(typeof d=="function"){const g=d(t,o,i);a=D(g)?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,v))a="";else if(f){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${t}`),a="";else!D(a)&&!this.useRawValueToEscape&&(a=hu(a));const w=p.safeValue(a);if(t=t.replace(o[0],w),f?(p.regex.lastIndex+=a.length,p.regex.lastIndex-=o[0].length):p.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),t}nest(t,n,r={}){let i,o,a;const s=(c,u)=>{const d=this.nestingOptionsSeparator;if(c.indexOf(d)<0)return c;const f=c.split(new RegExp(`${d}[ ]*{`));let m=`{${f[1]}`;c=f[0],m=this.interpolate(m,a);const x=m.match(/'/g),p=m.match(/"/g);(((x==null?void 0:x.length)??0)%2===0&&!p||p.length%2!==0)&&(m=m.replace(/'/g,'"'));try{a=JSON.parse(m),u&&(a={...u,...a})}catch(v){return this.logger.warn(`failed parsing options string in nesting for key ${c}`,v),`${c}${d}${m}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,c};for(;i=this.nestingRegexp.exec(t);){let c=[];a={...r},a=a.replace&&!D(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;const u=/{.*}/.test(i[1])?i[1].lastIndexOf("}")+1:i[1].indexOf(this.formatSeparator);if(u!==-1&&(c=i[1].slice(u).split(this.formatSeparator).map(d=>d.trim()).filter(Boolean),i[1]=i[1].slice(0,u)),o=n(s.call(this,i[1].trim(),a),a),o&&i[0]===t&&!D(o))return o;D(o)||(o=hu(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),c.length&&(o=c.reduce((d,f)=>this.format(d,f,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}const Ey=e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(a=>{if(a){const[s,...c]=a.split(":"),u=c.join(":").trim().replace(/^'+|'+$/g,""),d=s.trim();n[d]||(n[d]=u),u==="false"&&(n[d]=!1),u==="true"&&(n[d]=!0),isNaN(u)||(n[d]=parseInt(u,10))}})}return{formatName:t,formatOptions:n}},ju=e=>{const t={};return(n,r,i)=>{let o=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(o={...o,[i.interpolationkey]:void 0});const a=r+JSON.stringify(o);let s=t[a];return s||(s=e(Wr(r),i),t[a]=s),s(n)}},Ly=e=>(t,n,r)=>e(Wr(n),r)(t);class Ty{constructor(t={}){this.logger=lt.create("formatter"),this.options=t,this.init(t)}init(t,n={interpolation:{}}){this.formatSeparator=n.interpolation.formatSeparator||",";const r=n.cacheInBuiltFormats?ju:Ly;this.formats={number:r((i,o)=>{const a=new Intl.NumberFormat(i,{...o});return s=>a.format(s)}),currency:r((i,o)=>{const a=new Intl.NumberFormat(i,{...o,style:"currency"});return s=>a.format(s)}),datetime:r((i,o)=>{const a=new Intl.DateTimeFormat(i,{...o});return s=>a.format(s)}),relativetime:r((i,o)=>{const a=new Intl.RelativeTimeFormat(i,{...o});return s=>a.format(s,o.range||"day")}),list:r((i,o)=>{const a=new Intl.ListFormat(i,{...o});return s=>a.format(s)})}}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=ju(n)}format(t,n,r,i={}){const o=n.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(s=>s.indexOf(")")>-1)){const s=o.findIndex(c=>c.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,s)].join(this.formatSeparator)}return o.reduce((s,c)=>{var f;const{formatName:u,formatOptions:d}=Ey(c);if(this.formats[u]){let m=s;try{const x=((f=i==null?void 0:i.formatParams)==null?void 0:f[i.interpolationkey])||{},p=x.locale||x.lng||i.locale||i.lng||r;m=this.formats[u](s,p,{...d,...i,...x})}catch(x){this.logger.warn(x)}return m}else this.logger.warn(`there was no format function for ${u}`);return s},t)}}const Ry=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class Oy extends Bo{constructor(t,n,r,i={}){var o,a;super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=lt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],(a=(o=this.backend)==null?void 0:o.init)==null||a.call(o,r,i.backend,i)}queueLoad(t,n,r,i){const o={},a={},s={},c={};return t.forEach(u=>{let d=!0;n.forEach(f=>{const m=`${u}|${f}`;!r.reload&&this.store.hasResourceBundle(u,f)?this.state[m]=2:this.state[m]<0||(this.state[m]===1?a[m]===void 0&&(a[m]=!0):(this.state[m]=1,d=!1,a[m]===void 0&&(a[m]=!0),o[m]===void 0&&(o[m]=!0),c[f]===void 0&&(c[f]=!0)))}),d||(s[u]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(c)}}loaded(t,n,r){const i=t.split("|"),o=i[0],a=i[1];n&&this.emit("failedLoading",o,a,n),!n&&r&&this.store.addResourceBundle(o,a,r,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2,n&&r&&(this.state[t]=0);const s={};this.queue.forEach(c=>{my(c.loaded,[o],a),Ry(c,t),n&&c.errors.push(n),c.pendingCount===0&&!c.done&&(Object.keys(c.loaded).forEach(u=>{s[u]||(s[u]={});const d=c.loaded[u];d.length&&d.forEach(f=>{s[u][f]===void 0&&(s[u][f]=!0)})}),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(c=>!c.done)}read(t,n,r,i=0,o=this.retryTimeout,a){if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:a});return}this.readingCalls++;const s=(u,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(u&&d&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,a)},o);return}a(u,d)},c=this.backend[r].bind(this.backend);if(c.length===2){try{const u=c(t,n);u&&typeof u.then=="function"?u.then(d=>s(null,d)).catch(s):s(null,u)}catch(u){s(u)}return}return c(t,n,s)}prepareLoading(t,n,r={},i){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();D(t)&&(t=this.languageUtils.toResolveHierarchy(t)),D(n)&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t,n=""){const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,a),!a&&s&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,s),this.loaded(t,a,s)})}saveMissing(t,n,r,i,o,a={},s=()=>{}){var c,u,d,f,m;if((u=(c=this.services)==null?void 0:c.utils)!=null&&u.hasLoadedNamespace&&!((f=(d=this.services)==null?void 0:d.utils)!=null&&f.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((m=this.backend)!=null&&m.create){const x={...a,isUpdate:o},p=this.backend.create.bind(this.backend);if(p.length<6)try{let v;p.length===5?v=p(t,n,r,i,x):v=p(t,n,r,i),v&&typeof v.then=="function"?v.then(w=>s(null,w)).catch(s):s(null,v)}catch(v){s(v)}else p(t,n,r,i,s,x)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}const Cu=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),D(e[1])&&(t.defaultValue=e[1]),D(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const n=e[3]||e[2];Object.keys(n).forEach(r=>{t[r]=n[r]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Pu=e=>{var t,n;return D(e.ns)&&(e.ns=[e.ns]),D(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),D(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((n=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:n.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},ki=()=>{},Ay=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})};class Kr extends Bo{constructor(t={},n){if(super(),this.options=Pu(t),this.services={},this.logger=lt,this.modules={external:[]},Ay(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(t={},n){this.isInitializing=!0,typeof t=="function"&&(n=t,t={}),t.defaultNS==null&&t.ns&&(D(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const r=Cu();this.options={...r,...this.options,...Pu(t)},this.options.interpolation={...r.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const i=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?lt.init(i(this.modules.logger),this.options):lt.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=Ty;const d=new bu(this.options);this.store=new yu(this.options.resources,this.options);const f=this.services;f.logger=lt,f.resourceStore=this.store,f.languageUtils=d,f.pluralResolver=new Cy(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==r.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),u&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(f.formatter=i(u),f.formatter.init&&f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new Py(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new Oy(i(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",(x,...p)=>{this.emit(x,...p)}),this.modules.languageDetector&&(f.languageDetector=i(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=i(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new xo(this.services,this.options),this.translator.on("*",(x,...p)=>{this.emit(x,...p)}),this.modules.external.forEach(x=>{x.init&&x.init(this)})}if(this.format=this.options.interpolation.format,n||(n=ki),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=(...d)=>this.store[u](...d)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=(...d)=>(this.store[u](...d),this)});const s=dr(),c=()=>{const u=(d,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(f),n(d,f)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?c():setTimeout(c,0),s}loadResources(t,n=ki){var o,a;let r=n;const i=D(t)?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if((i==null?void 0:i.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const s=[],c=u=>{if(!u||u==="cimode")return;this.services.languageUtils.toResolveHierarchy(u).forEach(f=>{f!=="cimode"&&s.indexOf(f)<0&&s.push(f)})};i?c(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>c(d)),(a=(o=this.options.preload)==null?void 0:o.forEach)==null||a.call(o,u=>c(u)),this.services.backendConnector.load(s,this.options.ns,u=>{!u&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(u)})}else r(null)}reloadResources(t,n,r){const i=dr();return typeof t=="function"&&(r=t,t=void 0),typeof n=="function"&&(r=n,n=void 0),t||(t=this.languages),n||(n=this.options.ns),r||(r=ki),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&$p.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1)){for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}!this.resolvedLanguage&&this.languages.indexOf(t)<0&&this.store.hasLanguageSomeTranslations(t)&&(this.resolvedLanguage=t,this.languages.unshift(t))}}changeLanguage(t,n){this.isLanguageChangingTo=t;const r=dr();this.emit("languageChanging",t);const i=s=>{this.language=s,this.languages=this.services.languageUtils.toResolveHierarchy(s),this.resolvedLanguage=void 0,this.setResolvedLanguage(s)},o=(s,c)=>{c?this.isLanguageChangingTo===t&&(i(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,r.resolve((...u)=>this.t(...u)),n&&n(s,(...u)=>this.t(...u))},a=s=>{var d,f;!t&&!s&&this.services.languageDetector&&(s=[]);const c=D(s)?s:s&&s[0],u=this.store.hasLanguageSomeTranslations(c)?c:this.services.languageUtils.getBestMatchFromCodes(D(s)?[s]:s);u&&(this.language||i(u),this.translator.language||this.translator.changeLanguage(u),(f=(d=this.services.languageDetector)==null?void 0:d.cacheUserLanguage)==null||f.call(d,u)),this.loadResources(u,m=>{o(m,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),r}getFixedT(t,n,r){const i=(o,a,...s)=>{let c;typeof a!="object"?c=this.options.overloadTranslationOptionHandler([o,a].concat(s)):c={...a},c.lng=c.lng||i.lng,c.lngs=c.lngs||i.lngs,c.ns=c.ns||i.ns,c.keyPrefix!==""&&(c.keyPrefix=c.keyPrefix||r||i.keyPrefix);const u=this.options.keySeparator||".";let d;return c.keyPrefix&&Array.isArray(o)?d=o.map(f=>(typeof f=="function"&&(f=js(f,{...this.options,...a})),`${c.keyPrefix}${u}${f}`)):(typeof o=="function"&&(o=js(o,{...this.options,...a})),d=c.keyPrefix?`${c.keyPrefix}${u}${o}`:o),this.t(d,c)};return D(t)?i.lng=t:i.lngs=t,i.ns=n,i.keyPrefix=r,i}t(...t){var n;return(n=this.translator)==null?void 0:n.translate(...t)}exists(...t){var n;return(n=this.translator)==null?void 0:n.exists(...t)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t,n={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,c)=>{const u=this.services.backendConnector.state[`${s}|${c}`];return u===-1||u===0||u===2};if(n.precheck){const s=n.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!i||a(o,t)))}loadNamespaces(t,n){const r=dr();return this.options.ns?(D(t)&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=dr();D(t)&&(t=[t]);const i=this.options.preload||[],o=t.filter(a=>i.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return o.length?(this.options.preload=i.concat(o),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){var i,o;if(t||(t=this.resolvedLanguage||(((i=this.languages)==null?void 0:i.length)>0?this.languages[0]:this.language)),!t)return"rtl";try{const a=new Intl.Locale(t);if(a&&a.getTextInfo){const s=a.getTextInfo();if(s&&s.direction)return s.direction}}catch{}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((o=this.services)==null?void 0:o.languageUtils)||new bu(Cu());return t.toLowerCase().indexOf("-latn")>1?"ltr":n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(t={},n){return new Kr(t,n)}cloneInstance(t={},n=ki){const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new Kr(i);if((t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r){const s=Object.keys(this.store.data).reduce((c,u)=>(c[u]={...this.store.data[u]},c[u]=Object.keys(c[u]).reduce((d,f)=>(d[f]={...c[u][f]},d),c[u]),c),{});o.store=new yu(s,i),o.services.resourceStore=o.store}return o.translator=new xo(o.services,i),o.translator.on("*",(s,...c)=>{o.emit(s,...c)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Se=Kr.createInstance();Se.createInstance=Kr.createInstance;Se.createInstance;Se.dir;Se.init;Se.loadResources;Se.reloadResources;Se.use;Se.changeLanguage;Se.getFixedT;Se.t;Se.exists;Se.setDefaultNamespace;Se.hasLoadedNamespace;Se.loadNamespaces;Se.loadLanguages;const $y="Lakidis Aesthetic",Fy="Your personal beauty consultant",zy="Get started",Dy={home:"Home",scan:"AI Scan",treatments:"Treatments",profile:"Profile"},_y="Log in",Iy="Sign up",My="Create your account",Uy="Welcome back",By="Sign in to continue",Hy="Sign in to discover your beauty potential.",Vy="Join us to unlock your personalized beauty insights.",Wy="Email",Ky="Password",Yy="Continue as guest",Gy="Home",Qy="AI Scan",Jy="Treatments",qy="Upload 3 photos",Xy="Please face the camera straight on, in good light.",Zy="Analyze",ev="Analysis ready!",tv="Last report",nv="This month: 20% off HydraFacial",rv="Treatments catalog",iv="Search treatments",ov="Search treatments",av="Suggested treatments",sv="Key metrics",lv="Details",cv="Symmetry",uv="Save",dv="Learn more / Open website",fv="No reports yet",pv="Something went wrong, please try again",hv="Why choose us",gv="Safety & Aftercare",mv="Language",xv="Select language",yv="English",vv="Greek",wv="Language",bv="Apply",Sv="Cancel",kv="Notifications",Nv="Full name",jv="Contact number",Cv="We’ll use this for your booking/contact info",Pv="Logout",Ev="Profile saved",Lv="Not you? Start over",Tv="Session expired",Rv="Please sign up or log in again.",Ov="Please enter email & password",Av="Please enter your name and contact number",$v="Email already exists",Fv="This email has no account",zv="Invalid email or password",Dv="Unable to sign up",_v="Unable to log in",Iv="Theme",Mv="Light",Uv="Dark",Bv="Face",Hv="Skin",Vv="Body",Wv="Hair",Kv="Don't have an account?",Yv="Already have an account?",Gv="Join thousands discovering their beauty with AI",Qv="Disclaimer: Results are for informational purposes only and not a medical diagnosis.",Jv="Saving…",qv="Unlock your best look",Xv="Scan your face with AI for instant insights and personalized treatment suggestions tailored to you.",Zv="Don’t wait — discover what your skin really needs today!",ew="Start scan now",tw="AI-driven accuracy",nw="Non-invasive options first",rw="Easy aftercare guidance",iw="Transparent pricing",ow="Clinic-grade privacy & security",aw="Most procedures may cause temporary redness or swelling. Avoid intense exercise and heat exposure for 24–48h.",sw="Always follow your clinician’s personalized aftercare advice for the best recovery and results.",lw="Please try again",cw="Skip",uw="Next",dw="Get Started",fw="Report",pw="Summary",hw="AI Report",gw="Suggested Treatments",mw="Book Appointment",xw="Report not found.",yw="Report ready",vw="PDF has been generated and shared.",ww="Could not generate PDF report.",bw="Duration",Sw="Price",kw="Cost",Nw="Front Face",jw="Left Profile",Cw="Right Profile",Pw="Upload",Ew="Permission required",Lw="Please allow photo library access.",Tw="Please allow camera access.",Rw="Uploading photos…",Ow="Analyzing face…",Aw="No face detected",$w="Use clear, front-facing photos with eyes visible, then try again.",Fw="Missing photos",zw="Please select front, left and right photos first.",Dw="Invalid file",_w="Only image files are allowed.",Iw="Analysis failed",Mw="Please try again.",Uw="Disclaimer",Bw="The information provided through this application is for informational purposes only and does not constitute medical advice or diagnosis. A personalized assessment and medical decision-making always require a clinical examination and direct consultation with a qualified physician.",Hw="Select source",Vw="Take Photo",Ww="Upload",Kw="Working…",Yw="View more",Gw="Coming soon",Qw="The website link will be added shortly.",Jw="Unable to open",qw="Please try again later.",Xw="Could not open link.",Zw={enterNamePhone:"Please enter your name and phone number.",title:"Complete your profile",subtitle:"We need a few more details to finish setting up your account.",fullName:"Full Name",contactNumber:"Contact Number",signOut:"Sign Out"},eb={tryAgain:"Please try again.",sessionExpired:"Session expired",pleaseLoginAgain:"Please log in again.",error:"Error",saving:"Saving...",continue:"Continue",loading:"Loading...",save:"Save",logout:"Logout",change:"Change",close:"Close",saveChanges:"Save changes",on:"On",off:"Off"},tb="Welcome to Our App",nb="Your journey begins here. Discover powerful features.",rb="Track Your Progress",ib="Stay updated and monitor your goals effortlessly.",ob="AI-Powered Insights",ab="Get personalized tips and suggestions with smart AI.",sb="Ready to Begin?",lb="Let’s get started and unlock your potential!",cb="Forgot password?",ub="Enter your registered email to receive a verification code.",db="Invalid email",fb="Verification code",pb="Enter the 6-digit code sent to",hb="Enter code",gb="Invalid code",mb="Set new password",xb="New password",yb="Confirm password",vb="Password too short",wb="Passwords do not match",bb="Save & Login",Sb="No treatments found.",kb="Failed to load treatments.",Nb={title:"History",signInRequired:"Sign in to view history",signInHint:"Please log in to see your saved reports.",emptyTitle:"No history yet",emptyHint:"Run an analysis to see reports here.",viewReport:"View report",download:"Download",downloadHint:"Your report will be downloaded soon.",today:"Today",thisWeek:"This Week",lastMonth:"This Month",older:"Older",filters:"Filters",all:"All",last7days:"Last 7 days",last30days:"Last 30 days",sort:"Sort",newestFirst:"Newest first",oldestFirst:"Oldest first",clearHistory:"Clear history",confirmClearHistory:"Are you sure you want to clear your history?",cancel:"Cancel",confirm:"Confirm"},jb={heroTitle:"Intelligent AI analysis for modern needs",heroSubtitle:"Upload your photos and let our advanced AI analyze, process, and deliver actionable aesthetic insights in seconds.",ctaGetStarted:"Get started",ctaViewHistory:"View history",whyTitle:"Why choose Aesthetic AI",whySubtitle:"Discover the difference with our cutting-edge AI technology",features:{f1Title:"Advanced AI technology",f1Desc:"State-of-the-art algorithms provide clinical-grade accuracy in facial analysis and recommendations.",f2Title:"Military-grade security",f2Desc:"Your data is protected with enterprise-level encryption and strict privacy protocols.",f3Title:"Progress tracking",f3Desc:"Monitor your journey with detailed historical reports and comparisons.",f4Title:"Smart recommendations",f4Desc:"Personalized suggestions based on your unique features and goals.",f5Title:"Professional insights",f5Desc:"Clinically-relevant info to help you make informed decisions.",f6Title:"Beautiful results",f6Desc:"Achieve your aesthetic goals with precise, data-driven guidance."},howTitle:"How it works",howSubtitle:"Simple three-step process to get your personalized analysis",steps:{s1Step:"01",s1Title:"Upload photos",s1Desc:"Upload three clear photos (front, left, right) for comprehensive analysis.",s2Step:"02",s2Title:"AI analysis",s2Desc:"We analyze facial symmetry, skin quality, and aesthetic features.",s3Step:"03",s3Title:"Get results",s3Desc:"Receive a detailed report with personalized recommendations."},stats:{a:"Accuracy rate",b:"Analyses completed",c:"User satisfaction",d:"Support available"},ctaTitle:"Ready to transform your look?",ctaSubtitle:"Join thousands who discovered their best look with our AI analysis.",ctaStart:"Start your analysis now",discTitle:"Important medical disclaimer",discText:"Always follow your clinician’s personalized aftercare advice for the best recovery and results. Our AI analysis provides recommendations but should not replace professional medical advice. Consult with qualified healthcare professionals before making any decisions about treatments or procedures."},Cb="All",Pb="Category",Eb="View details",Lb="Hide details",Tb={myProfile:"My Profile",title:"My Profile",email:"Email",fullName:"Full Name",fullNamePlaceholder:"Your name",fullNamePh:"Enter your full name",contactNumber:"Contact Number",contactNumberPh:"Enter your number",language:"Language",notifications:"Notifications",notificationsHint:"Email reminders and important updates",profileSaved:"Profile saved",saved:"Saved",updateFailed:"Update failed",avatar:"Avatar",avatarAlt:"Avatar",changePhoto:"Change photo",photoPrivacy:"Your profile photo is only stored on this device for privacy and is not uploaded to our servers.",photoLocalNote:"Your profile photo is only stored on this device for privacy and is not uploaded to our servers.",accountDetails:"Account details",preferences:"Preferences",toggleNotifications:"Toggle notifications",saveChanges:"Save changes",saving:"Saving…",yourName:"Your name"},Rb={en:"English",el:"Greek"},Ob={logout:"Log out"},Ab="Camera",$b="Start analysis",Fb="Please wait…",zb="Your photos are processed securely and used only to generate your report.",Db="No face detected. Please try clearer photos.",_b={title:"Complete Your Profile",subtitle:"Add your details for personalized reports and better experience",infoText:"📋 This information will be included in your AI analysis reports",fullName:"Full Name *",fullNamePlaceholder:"Enter your full name",contactNumber:"Contact Number *",contactNumberPlaceholder:"+1 234 567 8900",dateOfBirth:"Date of Birth",gender:"Gender",genderPlaceholder:"Select gender",male:"Male",female:"Female",other:"Other",preferNotToSay:"Prefer not to say",saveContinue:"Save & Continue",saving:"Saving...",skipForNow:"Skip for now",personalizeJourney:"Personalize Your Aesthetic Journey",personalizeDescription:"Complete your profile to get tailored AI analysis and detailed reports with your personal information.",failedToUpdate:"Failed to update profile"},Ib="Sign in to continue to your AI dashboard",Mb="Invalid email or password",Ub="Please enter your email.",Bb="Please enter a password.",Hb="Email already registered",Vb={appName:$y,tagline:Fy,getStarted:zy,nav:Dy,login:_y,signup:Iy,createAccount:My,welcomeBack:Uy,signInToContinue:By,signinSubtitle:Hy,signupSubtitle:Vy,email:Wy,password:Ky,guestMode:Yy,home:Gy,scan:Qy,treatments:Jy,upload3Photos:qy,cameraTips:Xy,analyze:Zy,analysisReady:ev,lastReport:tv,promoBanner:nv,catalog:rv,search:iv,searchTreatments:ov,suggested:av,keyMetrics:sv,details:lv,symmetry:cv,save:uv,bookNow:dv,noReports:fv,error:pv,whyUs:hv,safetyAftercare:gv,language:mv,selectLanguage:xv,english:yv,greek:vv,dialogTitleLanguage:wv,applyBtn:bv,cancelBtn:Sv,notifications:kv,fullName:Nv,contactNumber:jv,completeProfileSubtitle:Cv,continue:"Continue",logout:Pv,profileSaved:Ev,notYouStartOver:Lv,sessionExpired:Tv,pleaseSignInAgain:Rv,enterEmailPassword:Ov,enterNamePhone:Av,emailExists:$v,emailNoAccount:Fv,invalidEmailPassword:zv,unableToSignUp:Dv,unableToLogIn:_v,theme:Iv,light:Mv,dark:Uv,face:Bv,skin:Hv,body:Vv,hair:Wv,noAccount:Kv,haveAccount:Yv,ctaLine:Gv,disclaimer:Qv,saving:Jv,unlockYourBestLook:qv,scanYourFace:Xv,dontWaitDiscover:Zv,startScanNow:ew,aiDrivenAccuracy:tw,nonInvasiveOptions:nw,easyAftercareGuidance:rw,transparentPricing:iw,clinicGradePrivacy:ow,safetyInfo1:aw,safetyInfo2:sw,tryAgain:lw,skip:cw,next:uw,getStartedBtn:dw,report:fw,summary:pw,aiReport:hw,suggestedTreatments:gw,bookAppointment:mw,reportNotFound:xw,reportReady:yw,pdfGenerated:vw,pdfError:ww,duration:bw,price:Sw,cost:kw,frontFace:Nw,leftProfile:jw,rightProfile:Cw,upload:Pw,permissionRequired:Ew,allowPhotos:Lw,allowCamera:Tw,uploadingPhotos:Rw,analyzingFace:Ow,noFaceTitle:Aw,noFaceMsg:$w,missingPhotosTitle:Fw,missingPhotosMsg:zw,invalidFileTitle:Dw,invalidFileMsg:_w,analysisFailedTitle:Iw,analysisFailedMsg:Mw,disclaimerTitle:Uw,disclaimerText:Bw,selectSource:Hw,takePhoto:Vw,uploadFromGallery:Ww,working:Kw,viewMore:Yw,comingSoon:Gw,linkWillBeAddedSoon:Qw,unableToOpen:Jw,pleaseTryAgain:qw,couldNotOpen:Xw,completeProfile:Zw,common:eb,onboarding1Title:tb,onboarding1Subtitle:nb,onboarding2Title:rb,onboarding2Subtitle:ib,onboarding3Title:ob,onboarding3Subtitle:ab,onboarding4Title:sb,onboarding4Subtitle:lb,forgotPassword:cb,enterYourEmail:ub,invalidEmail:db,verificationCode:fb,codeSentTo:pb,enterCode:hb,invalidCode:gb,setNewPassword:mb,newPassword:xb,confirmPassword:yb,passwordTooShort:vb,passwordsDontMatch:wb,saveAndLogin:bb,noResults:Sb,failedToLoad:kb,history:Nb,homePage:jb,all:Cb,category:Pb,viewDetails:Eb,hideDetails:Lb,"common.change":"Change","common.close":"Close","common.saveChanges":"Save changes","common.on":"On","common.off":"Off",profile:Tb,lang:Rb,auth:Ob,camera:Ab,startAnalysis:$b,pleaseWait:Fb,privacyNote:zb,noFaceDetected:Db,completeProfilePage:_b,signInSubtitle:Ib,invalidEmailOrPassword:Mb,enterEmail:Ub,enterPassword:Bb,emailAlreadyRegistered:Hb},Wb="Lakidis Aesthetic",Kb="Ο προσωπικός σας σύμβουλος ομορφιάς",Yb="Ξεκινήστε",Gb={home:"Αρχική",scan:"Σάρωση",treatments:"Θεραπείες",profile:"Προφίλ"},Qb="Σύνδεση",Jb="Εγγραφή",qb="Δημιουργήστε λογαριασμό",Xb="Καλώς ήρθατε ξανά",Zb="Συνδεθείτε για να συνεχίσετε",e2="Συνδεθείτε για να ανακαλύψετε το δυναμικό ομορφιάς σας.",t2="Εγγραφείτε για να ξεκλειδώσετε τις εξατομικευμένες συμβουλές ομορφιάς.",n2="Ηλεκτρονικό ταχυδρομείο",r2="Κωδικός πρόσβασης",i2="Συνέχεια ως επισκέπτης",o2="Αρχική",a2="AI Σάρωση",s2="Θεραπείες",l2="Μεταφορτώστε 3 φωτογραφίες",c2="Κοιτάξτε ευθεία την κάμερα, σε καλό φωτισμό.",u2="Ανάλυση",d2="Η ανάλυση είναι έτοιμη!",f2="Τελευταία αναφορά",p2="Αυτόν τον μήνα: -20% στο HydraFacial",h2="Κατάλογος θεραπειών",g2="Αναζήτηση θεραπειών",m2="Αναζήτηση θεραπειών",x2="Προτεινόμενες θεραπείες",y2="Βασικά στοιχεία",v2="Λεπτομέρειες",w2="Συμμετρία",b2="Αποθήκευση",S2="Μάθετε περισσότερα / Άνοιγμα ιστοσελίδας",k2="Δεν υπάρχουν αναφορές ακόμη",N2="Κάτι πήγε στραβά, δοκιμάστε ξανά",j2="Γιατί να μας επιλέξετε",C2="Ασφάλεια & Φροντίδα",P2="Γλώσσα",E2="Επιλογή γλώσσας",L2="Αγγλικά",T2="Ελληνικά",R2="Γλώσσα",O2="Εφαρμογή",A2="Ακύρωση",$2="Ειδοποιήσεις",F2="Ονοματεπώνυμο",z2="Τηλέφωνο",D2="Θα το χρησιμοποιήσουμε για τα στοιχεία επικοινωνίας/κρατήσεων",_2="Αποσύνδεση",I2="Το προφίλ αποθηκεύτηκε",M2="Δεν είστε εσείς; Ξεκινήστε από την αρχή",U2="Η συνεδρία έληξε",B2="Παρακαλούμε εγγραφείτε ή συνδεθείτε ξανά.",H2="Εισαγάγετε email και κωδικό πρόσβασης",V2="Εισαγάγετε ονοματεπώνυμο και τηλέφωνο",W2="Το email υπάρχει ήδη",K2="Δεν υπάρχει λογαριασμός με αυτό το email",Y2="Μη έγκυρο email ή κωδικός πρόσβασης",G2="Αδυναμία εγγραφής",Q2="Αδυναμία σύνδεσης",J2="Θέμα",q2="Φωτεινό",X2="Σκούρο",Z2="Πρόσωπο",eS="Δέρμα",tS="Σώμα",nS="Μαλλιά",rS="Δεν έχετε λογαριασμό;",iS="Έχετε ήδη λογαριασμό;",oS="Ενταχθείτε σε χιλιάδες που ανακαλύπτουν την ομορφιά τους με AI",aS="Αποποίηση ευθύνης: Τα αποτελέσματα είναι μόνο για ενημερωτικούς σκοπούς και δεν αποτελούν ιατρική διάγνωση.",sS="Αποθήκευση…",lS="Ανακαλύψτε την καλύτερη εμφάνισή σας",cS="Σαρώστε το πρόσωπό σας με AI για άμεσες πληροφορίες και εξατομικευμένες προτάσεις θεραπείας.",uS="Μην περιμένετε — ανακαλύψτε τι χρειάζεται πραγματικά το δέρμα σας σήμερα!",dS="Ξεκινήστε τη σάρωση τώρα",fS="Ακρίβεια με τεχνητή νοημοσύνη",pS="Μη επεμβατικές επιλογές πρώτα",hS="Εύκολες οδηγίες φροντίδας",gS="Διαφανής τιμολόγηση",mS="Ιδιωτικότητα & ασφάλεια επιπέδου κλινικής",xS="Οι περισσότερες διαδικασίες μπορεί να προκαλέσουν προσωρινή ερυθρότητα ή πρήξιμο. Αποφύγετε την έντονη άσκηση και την έκθεση σε θερμότητα για 24–48 ώρες.",yS="Ακολουθείτε πάντα τις εξατομικευμένες οδηγίες φροντίδας του ιατρού σας για την καλύτερη ανάρρωση και αποτελέσματα.",vS="Παρακαλώ δοκιμάστε ξανά",wS="Παράλειψη",bS="Επόμενο",SS="Ξεκινήστε",kS="Αναφορά",NS="Περίληψη",jS="Αναφορά ΤΝ",CS="Προτεινόμενες Θεραπείες",PS="Κλείστε Ραντεβού",ES="Η αναφορά δεν βρέθηκε.",LS="Η αναφορά είναι έτοιμη",TS="Το PDF δημιουργήθηκε και κοινοποιήθηκε.",RS="Δεν ήταν δυνατή η δημιουργία PDF αναφοράς.",OS="Διάρκεια",AS="Τιμή",$S="Κόστος",FS="Μπροστινό πρόσωπο",zS="Αριστερό προφίλ",DS="Δεξί προφίλ",_S="Μεταφόρτωση",IS="Απαιτείται άδεια",MS="Παρακαλώ επιτρέψτε την πρόσβαση στη βιβλιοθήκη φωτογραφιών.",US="Παρακαλώ επιτρέψτε την πρόσβαση στην κάμερα.",BS="Μεταφόρτωση φωτογραφιών…",HS="Ανάλυση προσώπου…",VS="Δεν εντοπίστηκε πρόσωπο",WS="Χρησιμοποιήστε καθαρές, μετωπικές φωτογραφίες με τα μάτια ορατά και δοκιμάστε ξανά.",KS="Λείπουν φωτογραφίες",YS="Παρακαλώ επιλέξτε πρώτα μπροστινή, αριστερή και δεξιά φωτογραφία.",GS="Μη έγκυρο αρχείο",QS="Επιτρέπονται μόνο αρχεία εικόνας.",JS="Η ανάλυση απέτυχε",qS="Παρακαλώ δοκιμάστε ξανά.",XS="Αποποίηση ευθυνών",ZS="Οι πληροφορίες που παρέχονται μέσω αυτής της εφαρμογής είναι αποκλειστικά για ενημερωτικούς σκοπούς και δεν αποτελούν ιατρική συμβουλή ή διάγνωση. Μια εξατομικευμένη αξιολόγηση και ιατρική απόφαση απαιτούν πάντα κλινική εξέταση και άμεση συμβουλή με εξειδικευμένο ιατρό.",ek="Επιλέξτε πηγή",tk="Λήψη φωτογραφίας",nk="Μεταφόρτωση",rk="Επεξεργασία…",ik="Δείτε περισσότερα",ok="Σύντομα διαθέσιμο",ak="Ο σύνδεσμος θα προστεθεί σύντομα.",sk="Δεν είναι δυνατή η άνοιγμα",lk="Παρακαλώ δοκιμάστε ξανά αργότερα.",ck="Δεν ήταν δυνατό το άνοιγμα του συνδέσμου.",uk={enterNamePhone:"Παρακαλώ εισάγετε το όνομα και τον αριθμό τηλεφώνου σας.",title:"Ολοκληρώστε το προφίλ σας",subtitle:"Χρειαζόμαστε μερικές ακόμη λεπτομέρειες για να ολοκληρώσουμε τη ρύθμιση του λογαριασμού σας.",fullName:"Ονοματεπώνυμο",contactNumber:"Αριθμός Επικοινωνίας",signOut:"Αποσύνδεση"},dk={tryAgain:"Παρακαλώ δοκιμάστε ξανά.",sessionExpired:"Η συνεδρία έληξε",pleaseLoginAgain:"Παρακαλώ συνδεθείτε ξανά.",error:"Σφάλμα",saving:"Αποθήκευση...",continue:"Συνέχεια",loading:"Φόρτωση...",save:"Αποθήκευση",logout:"Αποσύνδεση"},fk="Καλώς ήρθατε στην εφαρμογή μας",pk="Το ταξίδι σας ξεκινά εδώ. Ανακαλύψτε ισχυρές δυνατότητες.",hk="Παρακολουθήστε την πρόοδό σας",gk="Μείνετε ενημερωμένοι και παρακολουθήστε τους στόχους σας εύκολα.",mk="Προτάσεις με Τεχνητή Νοημοσύνη",xk="Λάβετε εξατομικευμένες συμβουλές και προτάσεις με έξυπνη AI.",yk="Έτοιμοι να ξεκινήσετε;",vk="Ας ξεκινήσουμε και ας ξεκλειδώσουμε το δυναμικό σας!",wk="Ξεχάσατε τον κωδικό;",bk="Εισάγετε το καταχωρημένο email για να λάβετε κωδικό επαλήθευσης.",Sk="Μη έγκυρο email",kk="Κωδικός επαλήθευσης",Nk="Εισαγάγετε τον 6-ψήφιο κωδικό που στάλθηκε στο",jk="Εισαγωγή κωδικού",Ck="Μη έγκυρος κωδικός",Pk="Ορισμός νέου κωδικού",Ek="Νέος κωδικός",Lk="Επιβεβαίωση κωδικού",Tk="Ο κωδικός είναι πολύ μικρός",Rk="Οι κωδικοί δεν ταιριάζουν",Ok="Αποθήκευση & Σύνδεση",Ak="Δεν βρέθηκαν θεραπείες.",$k="Αποτυχία φόρτωσης θεραπειών.",Fk={title:"Ιστορικό",signInRequired:"Συνδεθείτε για να δείτε το ιστορικό",signInHint:"Παρακαλώ συνδεθείτε για να δείτε τις αποθηκευμένες αναφορές σας.",emptyTitle:"Δεν υπάρχει ιστορικό ακόμη",emptyHint:"Εκτελέστε μια ανάλυση για να δείτε αναφορές εδώ.",viewReport:"Προβολή αναφοράς",download:"Λήψη",downloadHint:"Η αναφορά σας θα ληφθεί σύντομα.",today:"Σήμερα",thisWeek:"Αυτή την εβδομάδα",lastMonth:"Αυτόν τον μήνα",older:"Παλαιότερα",filters:"Φίλτρα",all:"Όλα",last7days:"Τελευταίες 7 ημέρες",last30days:"Τελευταίες 30 ημέρες",sort:"Ταξινόμηση",newestFirst:"Νεότερα πρώτα",oldestFirst:"Παλαιότερα πρώτα",clearHistory:"Εκκαθάριση ιστορικού",confirmClearHistory:"Είστε βέβαιοι ότι θέλετε να εκκαθαρίσετε το ιστορικό σας;",cancel:"Άκυρο",confirm:"Επιβεβαίωση"},zk={heroTitle:"Έξυπνη ανάλυση ΤΝ για σύγχρονες ανάγκες",heroSubtitle:"Μεταφορτώστε τις φωτογραφίες σας και αφήστε την προηγμένη ΤΝ μας να αναλύσει, να επεξεργαστεί και να προσφέρει χρήσιμα αισθητικά ευρήματα σε δευτερόλεπτα.",ctaGetStarted:"Ξεκινήστε",ctaViewHistory:"Προβολή ιστορικού",whyTitle:"Γιατί να επιλέξετε το Aesthetic AI",whySubtitle:"Ανακαλύψτε τη διαφορά με την κορυφαία τεχνολογία ΤΝ μας",features:{f1Title:"Προηγμένη τεχνολογία ΤΝ",f1Desc:"Αλγόριθμοι αιχμής προσφέρουν ακρίβεια κλινικού επιπέδου στην ανάλυση και στις προτάσεις.",f2Title:"Ασφάλεια στρατιωτικού επιπέδου",f2Desc:"Τα δεδομένα σας προστατεύονται με εταιρική κρυπτογράφηση και αυστηρά πρωτόκολλα ιδιωτικότητας.",f3Title:"Παρακολούθηση προόδου",f3Desc:"Παρακολουθήστε το ταξίδι σας με ιστορικές αναφορές και συγκρίσεις.",f4Title:"Έξυπνες προτάσεις",f4Desc:"Εξατομικευμένες συστάσεις βάσει των μοναδικών σας χαρακτηριστικών και στόχων.",f5Title:"Επαγγελματικές πληροφορίες",f5Desc:"Κλινικά χρήσιμες πληροφορίες για σωστές αποφάσεις.",f6Title:"Όμορφα αποτελέσματα",f6Desc:"Πετύχετε τους αισθητικούς σας στόχους με ακριβείς, δεδομενοκεντρικές οδηγίες."},howTitle:"Πώς λειτουργεί",howSubtitle:"Απλή διαδικασία τριών βημάτων για την εξατομικευμένη ανάλυσή σας",steps:{s1Step:"01",s1Title:"Μεταφόρτωση φωτογραφιών",s1Desc:"Μεταφορτώστε τρεις καθαρές φωτογραφίες (μπροστά, αριστερά, δεξιά) για πλήρη ανάλυση.",s2Step:"02",s2Title:"Ανάλυση ΤΝ",s2Desc:"Αναλύουμε συμμετρία προσώπου, ποιότητα δέρματος και αισθητικά χαρακτηριστικά.",s3Step:"03",s3Title:"Λήψη αποτελεσμάτων",s3Desc:"Λάβετε αναλυτική αναφορά με εξατομικευμένες προτάσεις."},stats:{a:"Ποσοστό ακρίβειας",b:"Ολοκληρωμένες αναλύσεις",c:"Ικανοποίηση χρηστών",d:"Διαθέσιμη υποστήριξη"},ctaTitle:"Έτοιμοι να μεταμορφώσετε την εμφάνισή σας;",ctaSubtitle:"Ενταχθείτε σε χιλιάδες που ανακάλυψαν την καλύτερη εκδοχή τους με την ανάλυση ΤΝ.",ctaStart:"Ξεκινήστε την ανάλυσή σας τώρα",discTitle:"Σημαντική ιατρική αποποίηση ευθύνης",discText:"Ακολουθείτε πάντα τις εξατομικευμένες οδηγίες του ιατρού σας για την καλύτερη ανάρρωση και αποτελέσματα. Η ανάλυση ΤΝ παρέχει συστάσεις αλλά δεν υποκαθιστά την επαγγελματική ιατρική συμβουλή. Συμβουλευτείτε εξειδικευμένο ιατρό πριν λάβετε αποφάσεις για θεραπείες ή διαδικασίες."},Dk="Όλα",_k="Κατηγορία",Ik="Προβολή λεπτομερειών",Mk="Απόκρυψη λεπτομερειών",Uk={myProfile:"Το Προφίλ μου",title:"Το Προφίλ μου",email:"Ηλεκτρονικό ταχυδρομείο",fullName:"Ονοματεπώνυμο",fullNamePlaceholder:"Το όνομά σας",fullNamePh:"Εισάγετε το ονοματεπώνυμό σας",contactNumber:"Αριθμός Επικοινωνίας",contactNumberPh:"Εισάγετε τον αριθμό σας",language:"Γλώσσα",notifications:"Ειδοποιήσεις",notificationsHint:"Υπενθυμίσεις μέσω email και σημαντικές ενημερώσεις",profileSaved:"Το προφίλ αποθηκεύτηκε με επιτυχία",saved:"Αποθηκεύτηκε",updateFailed:"Αποτυχία ενημέρωσης προφίλ",avatar:"Εικόνα προφίλ",avatarAlt:"Εικόνα προφίλ",changePhoto:"Αλλαγή φωτογραφίας",photoPrivacy:"Η φωτογραφία προφίλ αποθηκεύεται μόνο σε αυτήν τη συσκευή για λόγους ιδιωτικότητας και δεν ανεβαίνει στους διακομιστές μας.",photoLocalNote:"Η φωτογραφία προφίλ αποθηκεύεται μόνο στη συσκευή σας και δεν ανεβαίνει στους διακομιστές μας.",accountDetails:"Στοιχεία λογαριασμού",preferences:"Προτιμήσεις",toggleNotifications:"Εναλλαγή ειδοποιήσεων",saveChanges:"Αποθήκευση αλλαγών",saving:"Γίνεται αποθήκευση…",yourName:"Το όνομά σας"},Bk={en:"Αγγλικά",el:"Ελληνικά"},Hk={logout:"Αποσύνδεση"},Vk="Κάμερα",Wk="Έναρξη ανάλυσης",Kk="Παρακαλώ περιμένετε…",Yk="Οι φωτογραφίες σας επεξεργάζονται με ασφάλεια και χρησιμοποιούνται μόνο για τη δημιουργία της αναφοράς σας.",Gk="Δεν εντοπίστηκε πρόσωπο. Δοκιμάστε πιο καθαρές φωτογραφίες.",Qk={title:"Ολοκληρώστε το προφίλ σας",subtitle:"Προσθέστε τα στοιχεία σας για εξατομικευμένες αναφορές και καλύτερη εμπειρία",infoText:"📋 Αυτές οι πληροφορίες θα συμπεριληφθούν στις αναφορές ανάλυσης ΤΝ σας",fullName:"Ονοματεπώνυμο *",fullNamePlaceholder:"Εισάγετε το ονοματεπώνυμό σας",contactNumber:"Αριθμός Επικοινωνίας *",contactNumberPlaceholder:"+30 123 456 7890",dateOfBirth:"Ημερομηνία Γέννησης",gender:"Φύλο",genderPlaceholder:"Επιλέξτε φύλο",male:"Αρσενικό",female:"Θηλυκό",other:"Άλλο",preferNotToSay:"Προτιμώ να μην πω",saveContinue:"Αποθήκευση & Συνέχεια",saving:"Αποθήκευση...",skipForNow:"Παράλειψη προς το παρόν",personalizeJourney:"Εξατομικεύστε το ταξίδι ομορφιάς σας",personalizeDescription:"Ολοκληρώστε το προφίλ σας για εξατομικευμένη ανάλυση ΤΝ και λεπτομερείς αναφορές με τα προσωπικά σας στοιχεία.",failedToUpdate:"Αποτυχία ενημέρωσης προφίλ"},Jk="Συνδεθείτε για να συνεχίσετε στον πίνακα ΤΝ σας",qk="Μη έγκυρο email ή κωδικός πρόσβασης",Xk="Παρακαλώ εισάγετε το email σας.",Zk="Παρακαλώ εισάγετε κωδικό πρόσβασης.",e5="Το email είναι ήδη εγγεγραμμένο",t5={appName:Wb,tagline:Kb,getStarted:Yb,nav:Gb,login:Qb,signup:Jb,createAccount:qb,welcomeBack:Xb,signInToContinue:Zb,signinSubtitle:e2,signupSubtitle:t2,email:n2,password:r2,guestMode:i2,home:o2,scan:a2,treatments:s2,upload3Photos:l2,cameraTips:c2,analyze:u2,analysisReady:d2,lastReport:f2,promoBanner:p2,catalog:h2,search:g2,searchTreatments:m2,suggested:x2,keyMetrics:y2,details:v2,symmetry:w2,save:b2,bookNow:S2,noReports:k2,error:N2,whyUs:j2,safetyAftercare:C2,language:P2,selectLanguage:E2,english:L2,greek:T2,dialogTitleLanguage:R2,applyBtn:O2,cancelBtn:A2,notifications:$2,fullName:F2,contactNumber:z2,completeProfileSubtitle:D2,continue:"Συνέχεια",logout:_2,profileSaved:I2,notYouStartOver:M2,sessionExpired:U2,pleaseSignInAgain:B2,enterEmailPassword:H2,enterNamePhone:V2,emailExists:W2,emailNoAccount:K2,invalidEmailPassword:Y2,unableToSignUp:G2,unableToLogIn:Q2,theme:J2,light:q2,dark:X2,face:Z2,skin:eS,body:tS,hair:nS,noAccount:rS,haveAccount:iS,ctaLine:oS,disclaimer:aS,saving:sS,unlockYourBestLook:lS,scanYourFace:cS,dontWaitDiscover:uS,startScanNow:dS,aiDrivenAccuracy:fS,nonInvasiveOptions:pS,easyAftercareGuidance:hS,transparentPricing:gS,clinicGradePrivacy:mS,safetyInfo1:xS,safetyInfo2:yS,tryAgain:vS,skip:wS,next:bS,getStartedBtn:SS,report:kS,summary:NS,aiReport:jS,suggestedTreatments:CS,bookAppointment:PS,reportNotFound:ES,reportReady:LS,pdfGenerated:TS,pdfError:RS,duration:OS,price:AS,cost:$S,frontFace:FS,leftProfile:zS,rightProfile:DS,upload:_S,permissionRequired:IS,allowPhotos:MS,allowCamera:US,uploadingPhotos:BS,analyzingFace:HS,noFaceTitle:VS,noFaceMsg:WS,missingPhotosTitle:KS,missingPhotosMsg:YS,invalidFileTitle:GS,invalidFileMsg:QS,analysisFailedTitle:JS,analysisFailedMsg:qS,disclaimerTitle:XS,disclaimerText:ZS,selectSource:ek,takePhoto:tk,uploadFromGallery:nk,working:rk,viewMore:ik,comingSoon:ok,linkWillBeAddedSoon:ak,unableToOpen:sk,pleaseTryAgain:lk,couldNotOpen:ck,completeProfile:uk,common:dk,onboarding1Title:fk,onboarding1Subtitle:pk,onboarding2Title:hk,onboarding2Subtitle:gk,onboarding3Title:mk,onboarding3Subtitle:xk,onboarding4Title:yk,onboarding4Subtitle:vk,forgotPassword:wk,enterYourEmail:bk,invalidEmail:Sk,verificationCode:kk,codeSentTo:Nk,enterCode:jk,invalidCode:Ck,setNewPassword:Pk,newPassword:Ek,confirmPassword:Lk,passwordTooShort:Tk,passwordsDontMatch:Rk,saveAndLogin:Ok,noResults:Ak,failedToLoad:$k,history:Fk,homePage:zk,all:Dk,category:_k,viewDetails:Ik,hideDetails:Mk,"common.change":"Αλλαγή","common.close":"Κλείσιμο","common.saveChanges":"Αποθήκευση αλλαγών","common.on":"Ενεργό","common.off":"Ανενεργό",profile:Uk,lang:Bk,auth:Hk,camera:Vk,startAnalysis:Wk,pleaseWait:Kk,privacyNote:Yk,noFaceDetected:Gk,completeProfilePage:Qk,signInSubtitle:Jk,invalidEmailOrPassword:qk,enterEmail:Xk,enterPassword:Zk,emailAlreadyRegistered:e5};function n5(){const e=localStorage.getItem("lang");return e==="en"||e==="el"?e:((navigator==null?void 0:navigator.language)||"").toLowerCase().startsWith("el")?"el":"en"}Se.use(P0).init({resources:{en:{translation:Vb},el:{translation:t5}},lng:n5(),fallbackLng:"en",returnObjects:!1,interpolation:{escapeValue:!1}});try{typeof window<"u"&&window.location.pathname!=="/"&&window.history.replaceState(null,"","/")}catch{}const r5=Uf(document.getElementById("root"));r5.render(l.jsx(xt.StrictMode,{children:l.jsx(n0,{children:l.jsx(py,{})})}));
