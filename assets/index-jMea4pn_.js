var tE=Object.defineProperty;var nE=(r,e,n)=>e in r?tE(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var Sl=(r,e,n)=>nE(r,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function rE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var mc={exports:{}},_s={},gc={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function iE(){if(cm)return re;cm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function w(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,L={};function x(C,O,ne){this.props=C,this.context=O,this.refs=L,this.updater=ne||T}x.prototype.isReactComponent={},x.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},x.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function b(){}b.prototype=x.prototype;function q(C,O,ne){this.props=C,this.context=O,this.refs=L,this.updater=ne||T}var B=q.prototype=new b;B.constructor=q,P(B,x.prototype),B.isPureReactComponent=!0;var te=Array.isArray,he=Object.prototype.hasOwnProperty,ye={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function Oe(C,O,ne){var se,ue={},ce=null,Ee=null;if(O!=null)for(se in O.ref!==void 0&&(Ee=O.ref),O.key!==void 0&&(ce=""+O.key),O)he.call(O,se)&&!ve.hasOwnProperty(se)&&(ue[se]=O[se]);var pe=arguments.length-2;if(pe===1)ue.children=ne;else if(1<pe){for(var Re=Array(pe),vt=0;vt<pe;vt++)Re[vt]=arguments[vt+2];ue.children=Re}if(C&&C.defaultProps)for(se in pe=C.defaultProps,pe)ue[se]===void 0&&(ue[se]=pe[se]);return{$$typeof:r,type:C,key:ce,ref:Ee,props:ue,_owner:ye.current}}function we(C,O){return{$$typeof:r,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function ze(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function $t(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ne){return O[ne]})}var Gt=/\/+/g;function yt(C,O){return typeof C=="object"&&C!==null&&C.key!=null?$t(""+C.key):O.toString(36)}function Ot(C,O,ne,se,ue){var ce=typeof C;(ce==="undefined"||ce==="boolean")&&(C=null);var Ee=!1;if(C===null)Ee=!0;else switch(ce){case"string":case"number":Ee=!0;break;case"object":switch(C.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=C,ue=ue(Ee),C=se===""?"."+yt(Ee,0):se,te(ue)?(ne="",C!=null&&(ne=C.replace(Gt,"$&/")+"/"),Ot(ue,O,ne,"",function(vt){return vt})):ue!=null&&(ze(ue)&&(ue=we(ue,ne+(!ue.key||Ee&&Ee.key===ue.key?"":(""+ue.key).replace(Gt,"$&/")+"/")+C)),O.push(ue)),1;if(Ee=0,se=se===""?".":se+":",te(C))for(var pe=0;pe<C.length;pe++){ce=C[pe];var Re=se+yt(ce,pe);Ee+=Ot(ce,O,ne,Re,ue)}else if(Re=w(C),typeof Re=="function")for(C=Re.call(C),pe=0;!(ce=C.next()).done;)ce=ce.value,Re=se+yt(ce,pe++),Ee+=Ot(ce,O,ne,Re,ue);else if(ce==="object")throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Kt(C,O,ne){if(C==null)return C;var se=[],ue=0;return Ot(C,se,"","",function(ce){return O.call(ne,ce,ue++)}),se}function ct(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(ne){(C._status===0||C._status===-1)&&(C._status=1,C._result=ne)},function(ne){(C._status===0||C._status===-1)&&(C._status=2,C._result=ne)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var De={current:null},j={transition:null},J={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:j,ReactCurrentOwner:ye};function H(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:Kt,forEach:function(C,O,ne){Kt(C,function(){O.apply(this,arguments)},ne)},count:function(C){var O=0;return Kt(C,function(){O++}),O},toArray:function(C){return Kt(C,function(O){return O})||[]},only:function(C){if(!ze(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},re.Component=x,re.Fragment=n,re.Profiler=o,re.PureComponent=q,re.StrictMode=s,re.Suspense=p,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,re.act=H,re.cloneElement=function(C,O,ne){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var se=P({},C.props),ue=C.key,ce=C.ref,Ee=C._owner;if(O!=null){if(O.ref!==void 0&&(ce=O.ref,Ee=ye.current),O.key!==void 0&&(ue=""+O.key),C.type&&C.type.defaultProps)var pe=C.type.defaultProps;for(Re in O)he.call(O,Re)&&!ve.hasOwnProperty(Re)&&(se[Re]=O[Re]===void 0&&pe!==void 0?pe[Re]:O[Re])}var Re=arguments.length-2;if(Re===1)se.children=ne;else if(1<Re){pe=Array(Re);for(var vt=0;vt<Re;vt++)pe[vt]=arguments[vt+2];se.children=pe}return{$$typeof:r,type:C.type,key:ue,ref:ce,props:se,_owner:Ee}},re.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:a,_context:C},C.Consumer=C},re.createElement=Oe,re.createFactory=function(C){var O=Oe.bind(null,C);return O.type=C,O},re.createRef=function(){return{current:null}},re.forwardRef=function(C){return{$$typeof:h,render:C}},re.isValidElement=ze,re.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:ct}},re.memo=function(C,O){return{$$typeof:m,type:C,compare:O===void 0?null:O}},re.startTransition=function(C){var O=j.transition;j.transition={};try{C()}finally{j.transition=O}},re.unstable_act=H,re.useCallback=function(C,O){return De.current.useCallback(C,O)},re.useContext=function(C){return De.current.useContext(C)},re.useDebugValue=function(){},re.useDeferredValue=function(C){return De.current.useDeferredValue(C)},re.useEffect=function(C,O){return De.current.useEffect(C,O)},re.useId=function(){return De.current.useId()},re.useImperativeHandle=function(C,O,ne){return De.current.useImperativeHandle(C,O,ne)},re.useInsertionEffect=function(C,O){return De.current.useInsertionEffect(C,O)},re.useLayoutEffect=function(C,O){return De.current.useLayoutEffect(C,O)},re.useMemo=function(C,O){return De.current.useMemo(C,O)},re.useReducer=function(C,O,ne){return De.current.useReducer(C,O,ne)},re.useRef=function(C){return De.current.useRef(C)},re.useState=function(C){return De.current.useState(C)},re.useSyncExternalStore=function(C,O,ne){return De.current.useSyncExternalStore(C,O,ne)},re.useTransition=function(){return De.current.useTransition()},re.version="18.3.1",re}var dm;function ld(){return dm||(dm=1,gc.exports=iE()),gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function sE(){if(fm)return _s;fm=1;var r=ld(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,m){var y,_={},w=null,T=null;m!==void 0&&(w=""+m),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(T=p.ref);for(y in p)s.call(p,y)&&!a.hasOwnProperty(y)&&(_[y]=p[y]);if(h&&h.defaultProps)for(y in p=h.defaultProps,p)_[y]===void 0&&(_[y]=p[y]);return{$$typeof:e,type:h,key:w,ref:T,props:_,_owner:o.current}}return _s.Fragment=n,_s.jsx=c,_s.jsxs=c,_s}var hm;function oE(){return hm||(hm=1,mc.exports=sE()),mc.exports}var z=oE(),N=ld();const ad=rE(N);var Cl={},_c={exports:{}},gt={},yc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function lE(){return pm||(pm=1,function(r){function e(j,J){var H=j.length;j.push(J);e:for(;0<H;){var C=H-1>>>1,O=j[C];if(0<o(O,J))j[C]=J,j[H]=O,H=C;else break e}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var J=j[0],H=j.pop();if(H!==J){j[0]=H;e:for(var C=0,O=j.length,ne=O>>>1;C<ne;){var se=2*(C+1)-1,ue=j[se],ce=se+1,Ee=j[ce];if(0>o(ue,H))ce<O&&0>o(Ee,ue)?(j[C]=Ee,j[ce]=H,C=ce):(j[C]=ue,j[se]=H,C=se);else if(ce<O&&0>o(Ee,H))j[C]=Ee,j[ce]=H,C=ce;else break e}}return J}function o(j,J){var H=j.sortIndex-J.sortIndex;return H!==0?H:j.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,h=c.now();r.unstable_now=function(){return c.now()-h}}var p=[],m=[],y=1,_=null,w=3,T=!1,P=!1,L=!1,x=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(j){for(var J=n(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=j)s(m),J.sortIndex=J.expirationTime,e(p,J);else break;J=n(m)}}function te(j){if(L=!1,B(j),!P)if(n(p)!==null)P=!0,ct(he);else{var J=n(m);J!==null&&De(te,J.startTime-j)}}function he(j,J){P=!1,L&&(L=!1,b(Oe),Oe=-1),T=!0;var H=w;try{for(B(J),_=n(p);_!==null&&(!(_.expirationTime>J)||j&&!$t());){var C=_.callback;if(typeof C=="function"){_.callback=null,w=_.priorityLevel;var O=C(_.expirationTime<=J);J=r.unstable_now(),typeof O=="function"?_.callback=O:_===n(p)&&s(p),B(J)}else s(p);_=n(p)}if(_!==null)var ne=!0;else{var se=n(m);se!==null&&De(te,se.startTime-J),ne=!1}return ne}finally{_=null,w=H,T=!1}}var ye=!1,ve=null,Oe=-1,we=5,ze=-1;function $t(){return!(r.unstable_now()-ze<we)}function Gt(){if(ve!==null){var j=r.unstable_now();ze=j;var J=!0;try{J=ve(!0,j)}finally{J?yt():(ye=!1,ve=null)}}else ye=!1}var yt;if(typeof q=="function")yt=function(){q(Gt)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,Kt=Ot.port2;Ot.port1.onmessage=Gt,yt=function(){Kt.postMessage(null)}}else yt=function(){x(Gt,0)};function ct(j){ve=j,ye||(ye=!0,yt())}function De(j,J){Oe=x(function(){j(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){P||T||(P=!0,ct(he))},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(j){switch(w){case 1:case 2:case 3:var J=3;break;default:J=w}var H=w;w=J;try{return j()}finally{w=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var H=w;w=j;try{return J()}finally{w=H}},r.unstable_scheduleCallback=function(j,J,H){var C=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?C+H:C):H=C,j){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=H+O,j={id:y++,callback:J,priorityLevel:j,startTime:H,expirationTime:O,sortIndex:-1},H>C?(j.sortIndex=H,e(m,j),n(p)===null&&j===n(m)&&(L?(b(Oe),Oe=-1):L=!0,De(te,H-C))):(j.sortIndex=O,e(p,j),P||T||(P=!0,ct(he))),j},r.unstable_shouldYield=$t,r.unstable_wrapCallback=function(j){var J=w;return function(){var H=w;w=J;try{return j.apply(this,arguments)}finally{w=H}}}}(vc)),vc}var mm;function aE(){return mm||(mm=1,yc.exports=lE()),yc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function uE(){if(gm)return gt;gm=1;var r=ld(),e=aE();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,l=1;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function a(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)s.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function w(t){return p.call(_,t)?!0:p.call(y,t)?!1:m.test(t)?_[t]=!0:(y[t]=!0,!1)}function T(t,i,l,u){if(l!==null&&l.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P(t,i,l,u){if(i===null||typeof i>"u"||T(t,i,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function L(t,i,l,u,d,f,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=l,this.propertyName=t,this.type=i,this.sanitizeURL=f,this.removeEmptyString=g}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new L(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new L(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new L(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new L(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new L(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new L(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new L(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new L(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new L(t,5,!1,t.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function q(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(b,q);x[i]=new L(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(b,q);x[i]=new L(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(b,q);x[i]=new L(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new L(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new L(t,1,!1,t.toLowerCase(),null,!0,!0)});function B(t,i,l,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(P(i,l,d,u)&&(l=null),u||d===null?w(i)&&(l===null?t.removeAttribute(i):t.setAttribute(i,""+l)):d.mustUseProperty?t[d.propertyName]=l===null?d.type===3?!1:"":l:(i=d.attributeName,u=d.attributeNamespace,l===null?t.removeAttribute(i):(d=d.type,l=d===3||d===4&&l===!0?"":""+l,u?t.setAttributeNS(u,i,l):t.setAttribute(i,l))))}var te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),ye=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),ze=Symbol.for("react.provider"),$t=Symbol.for("react.context"),Gt=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),Ot=Symbol.for("react.suspense_list"),Kt=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),j=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,C;function O(t){if(C===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);C=i&&i[1]||""}return`
`+C+t}var ne=!1;function se(t,i){if(!t||ne)return"";ne=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(R){var u=R}Reflect.construct(t,[],i)}else{try{i.call()}catch(R){u=R}t.call(i.prototype)}else{try{throw Error()}catch(R){u=R}t()}}catch(R){if(R&&u&&typeof R.stack=="string"){for(var d=R.stack.split(`
`),f=u.stack.split(`
`),g=d.length-1,v=f.length-1;1<=g&&0<=v&&d[g]!==f[v];)v--;for(;1<=g&&0<=v;g--,v--)if(d[g]!==f[v]){if(g!==1||v!==1)do if(g--,v--,0>v||d[g]!==f[v]){var E=`
`+d[g].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=g&&0<=v);break}}}finally{ne=!1,Error.prepareStackTrace=l}return(t=t?t.displayName||t.name:"")?O(t):""}function ue(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=se(t.type,!1),t;case 11:return t=se(t.type.render,!1),t;case 1:return t=se(t.type,!0),t;default:return""}}function ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ve:return"Fragment";case ye:return"Portal";case we:return"Profiler";case Oe:return"StrictMode";case yt:return"Suspense";case Ot:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $t:return(t.displayName||"Context")+".Consumer";case ze:return(t._context.displayName||"Context")+".Provider";case Gt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kt:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case ct:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===Oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(t){var i=Re(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,f=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,f.call(this,g)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function fo(t){t._valueTracker||(t._valueTracker=vt(t))}function gf(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var l=i.getValue(),u="";return t&&(u=Re(t)?t.checked?"true":"false":t.value),t=u,t!==l?(i.setValue(t),!0):!1}function ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sa(t,i){var l=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??t._wrapperState.initialChecked})}function _f(t,i){var l=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;l=pe(i.value!=null?i.value:l),t._wrapperState={initialChecked:u,initialValue:l,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function yf(t,i){i=i.checked,i!=null&&B(t,"checked",i,!1)}function Ca(t,i){yf(t,i);var l=pe(i.value),u=i.type;if(l!=null)u==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+l):t.value!==""+l&&(t.value=""+l);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ia(t,i.type,l):i.hasOwnProperty("defaultValue")&&Ia(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function vf(t,i,l){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,l||i===t.value||(t.value=i),t.defaultValue=i}l=t.name,l!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,l!==""&&(t.name=l)}function Ia(t,i,l){(i!=="number"||ho(t.ownerDocument)!==t)&&(l==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+l&&(t.defaultValue=""+l))}var Oi=Array.isArray;function br(t,i,l,u){if(t=t.options,i){i={};for(var d=0;d<l.length;d++)i["$"+l[d]]=!0;for(l=0;l<t.length;l++)d=i.hasOwnProperty("$"+t[l].value),t[l].selected!==d&&(t[l].selected=d),d&&u&&(t[l].defaultSelected=!0)}else{for(l=""+pe(l),i=null,d=0;d<t.length;d++){if(t[d].value===l){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ka(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wf(t,i){var l=i.value;if(l==null){if(l=i.children,i=i.defaultValue,l!=null){if(i!=null)throw Error(n(92));if(Oi(l)){if(1<l.length)throw Error(n(93));l=l[0]}i=l}i==null&&(i=""),l=i}t._wrapperState={initialValue:pe(l)}}function Ef(t,i){var l=pe(i.value),u=pe(i.defaultValue);l!=null&&(l=""+l,l!==t.value&&(t.value=l),i.defaultValue==null&&t.defaultValue!==l&&(t.defaultValue=l)),u!=null&&(t.defaultValue=""+u)}function Sf(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Cf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ta(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Cf(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var po,If=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,l,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,l,u,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Di(t,i){if(i){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=i;return}}t.textContent=i}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ov=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(t){ov.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Li[i]=Li[t]})});function kf(t,i,l){return i==null||typeof i=="boolean"||i===""?"":l||typeof i!="number"||i===0||Li.hasOwnProperty(t)&&Li[t]?(""+i).trim():i+"px"}function Tf(t,i){t=t.style;for(var l in i)if(i.hasOwnProperty(l)){var u=l.indexOf("--")===0,d=kf(l,i[l],u);l==="float"&&(l="cssFloat"),u?t.setProperty(l,d):t[l]=d}}var lv=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ra(t,i){if(i){if(lv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pa(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Na=null;function xa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Aa=null,Fr=null,Ur=null;function Rf(t){if(t=ns(t)){if(typeof Aa!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Fo(i),Aa(t.stateNode,t.type,i))}}function Pf(t){Fr?Ur?Ur.push(t):Ur=[t]:Fr=t}function Nf(){if(Fr){var t=Fr,i=Ur;if(Ur=Fr=null,Rf(t),i)for(t=0;t<i.length;t++)Rf(i[t])}}function xf(t,i){return t(i)}function Af(){}var Oa=!1;function Of(t,i,l){if(Oa)return t(i,l);Oa=!0;try{return xf(t,i,l)}finally{Oa=!1,(Fr!==null||Ur!==null)&&(Af(),Nf())}}function Mi(t,i){var l=t.stateNode;if(l===null)return null;var u=Fo(l);if(u===null)return null;l=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(n(231,i,typeof l));return l}var Da=!1;if(h)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Da=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Da=!1}function av(t,i,l,u,d,f,g,v,E){var R=Array.prototype.slice.call(arguments,3);try{i.apply(l,R)}catch(D){this.onError(D)}}var Fi=!1,mo=null,go=!1,La=null,uv={onError:function(t){Fi=!0,mo=t}};function cv(t,i,l,u,d,f,g,v,E){Fi=!1,mo=null,av.apply(uv,arguments)}function dv(t,i,l,u,d,f,g,v,E){if(cv.apply(this,arguments),Fi){if(Fi){var R=mo;Fi=!1,mo=null}else throw Error(n(198));go||(go=!0,La=R)}}function cr(t){var i=t,l=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(l=i.return),t=i.return;while(t)}return i.tag===3?l:null}function Df(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Lf(t){if(cr(t)!==t)throw Error(n(188))}function fv(t){var i=t.alternate;if(!i){if(i=cr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var l=t,u=i;;){var d=l.return;if(d===null)break;var f=d.alternate;if(f===null){if(u=d.return,u!==null){l=u;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===l)return Lf(d),t;if(f===u)return Lf(d),i;f=f.sibling}throw Error(n(188))}if(l.return!==u.return)l=d,u=f;else{for(var g=!1,v=d.child;v;){if(v===l){g=!0,l=d,u=f;break}if(v===u){g=!0,u=d,l=f;break}v=v.sibling}if(!g){for(v=f.child;v;){if(v===l){g=!0,l=f,u=d;break}if(v===u){g=!0,u=f,l=d;break}v=v.sibling}if(!g)throw Error(n(189))}}if(l.alternate!==u)throw Error(n(190))}if(l.tag!==3)throw Error(n(188));return l.stateNode.current===l?t:i}function Mf(t){return t=fv(t),t!==null?bf(t):null}function bf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=bf(t);if(i!==null)return i;t=t.sibling}return null}var Ff=e.unstable_scheduleCallback,Uf=e.unstable_cancelCallback,hv=e.unstable_shouldYield,pv=e.unstable_requestPaint,Fe=e.unstable_now,mv=e.unstable_getCurrentPriorityLevel,Ma=e.unstable_ImmediatePriority,zf=e.unstable_UserBlockingPriority,_o=e.unstable_NormalPriority,gv=e.unstable_LowPriority,jf=e.unstable_IdlePriority,yo=null,qt=null;function _v(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(yo,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:wv,yv=Math.log,vv=Math.LN2;function wv(t){return t>>>=0,t===0?32:31-(yv(t)/vv|0)|0}var vo=64,wo=4194304;function Ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Eo(t,i){var l=t.pendingLanes;if(l===0)return 0;var u=0,d=t.suspendedLanes,f=t.pingedLanes,g=l&268435455;if(g!==0){var v=g&~d;v!==0?u=Ui(v):(f&=g,f!==0&&(u=Ui(f)))}else g=l&~d,g!==0?u=Ui(g):f!==0&&(u=Ui(f));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if(u&4&&(u|=l&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)l=31-Dt(i),d=1<<l,u|=t[l],i&=~d;return u}function Ev(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sv(t,i){for(var l=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,f=t.pendingLanes;0<f;){var g=31-Dt(f),v=1<<g,E=d[g];E===-1?(!(v&l)||v&u)&&(d[g]=Ev(v,i)):E<=i&&(t.expiredLanes|=v),f&=~v}}function ba(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wf(){var t=vo;return vo<<=1,!(vo&4194240)&&(vo=64),t}function Fa(t){for(var i=[],l=0;31>l;l++)i.push(t);return i}function zi(t,i,l){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Dt(i),t[i]=l}function Cv(t,i){var l=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<l;){var d=31-Dt(l),f=1<<d;i[d]=0,u[d]=-1,t[d]=-1,l&=~f}}function Ua(t,i){var l=t.entangledLanes|=i;for(t=t.entanglements;l;){var u=31-Dt(l),d=1<<u;d&i|t[u]&i&&(t[u]|=i),l&=~d}}var me=0;function Bf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vf,za,Hf,$f,Gf,ja=!1,So=[],Tn=null,Rn=null,Pn=null,ji=new Map,Wi=new Map,Nn=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kf(t,i){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":ji.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(i.pointerId)}}function Bi(t,i,l,u,d,f){return t===null||t.nativeEvent!==f?(t={blockedOn:i,domEventName:l,eventSystemFlags:u,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ns(i),i!==null&&za(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function kv(t,i,l,u,d){switch(i){case"focusin":return Tn=Bi(Tn,t,i,l,u,d),!0;case"dragenter":return Rn=Bi(Rn,t,i,l,u,d),!0;case"mouseover":return Pn=Bi(Pn,t,i,l,u,d),!0;case"pointerover":var f=d.pointerId;return ji.set(f,Bi(ji.get(f)||null,t,i,l,u,d)),!0;case"gotpointercapture":return f=d.pointerId,Wi.set(f,Bi(Wi.get(f)||null,t,i,l,u,d)),!0}return!1}function qf(t){var i=dr(t.target);if(i!==null){var l=cr(i);if(l!==null){if(i=l.tag,i===13){if(i=Df(l),i!==null){t.blockedOn=i,Gf(t.priority,function(){Hf(l)});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Co(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var l=Ba(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(l===null){l=t.nativeEvent;var u=new l.constructor(l.type,l);Na=u,l.target.dispatchEvent(u),Na=null}else return i=ns(l),i!==null&&za(i),t.blockedOn=l,!1;i.shift()}return!0}function Yf(t,i,l){Co(t)&&l.delete(i)}function Tv(){ja=!1,Tn!==null&&Co(Tn)&&(Tn=null),Rn!==null&&Co(Rn)&&(Rn=null),Pn!==null&&Co(Pn)&&(Pn=null),ji.forEach(Yf),Wi.forEach(Yf)}function Vi(t,i){t.blockedOn===i&&(t.blockedOn=null,ja||(ja=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tv)))}function Hi(t){function i(d){return Vi(d,t)}if(0<So.length){Vi(So[0],t);for(var l=1;l<So.length;l++){var u=So[l];u.blockedOn===t&&(u.blockedOn=null)}}for(Tn!==null&&Vi(Tn,t),Rn!==null&&Vi(Rn,t),Pn!==null&&Vi(Pn,t),ji.forEach(i),Wi.forEach(i),l=0;l<Nn.length;l++)u=Nn[l],u.blockedOn===t&&(u.blockedOn=null);for(;0<Nn.length&&(l=Nn[0],l.blockedOn===null);)qf(l),l.blockedOn===null&&Nn.shift()}var zr=te.ReactCurrentBatchConfig,Io=!0;function Rv(t,i,l,u){var d=me,f=zr.transition;zr.transition=null;try{me=1,Wa(t,i,l,u)}finally{me=d,zr.transition=f}}function Pv(t,i,l,u){var d=me,f=zr.transition;zr.transition=null;try{me=4,Wa(t,i,l,u)}finally{me=d,zr.transition=f}}function Wa(t,i,l,u){if(Io){var d=Ba(t,i,l,u);if(d===null)su(t,i,u,ko,l),Kf(t,u);else if(kv(d,t,i,l,u))u.stopPropagation();else if(Kf(t,u),i&4&&-1<Iv.indexOf(t)){for(;d!==null;){var f=ns(d);if(f!==null&&Vf(f),f=Ba(t,i,l,u),f===null&&su(t,i,u,ko,l),f===d)break;d=f}d!==null&&u.stopPropagation()}else su(t,i,u,null,l)}}var ko=null;function Ba(t,i,l,u){if(ko=null,t=xa(u),t=dr(t),t!==null)if(i=cr(t),i===null)t=null;else if(l=i.tag,l===13){if(t=Df(i),t!==null)return t;t=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ko=t,null}function Qf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mv()){case Ma:return 1;case zf:return 4;case _o:case gv:return 16;case jf:return 536870912;default:return 16}default:return 16}}var xn=null,Va=null,To=null;function Jf(){if(To)return To;var t,i=Va,l=i.length,u,d="value"in xn?xn.value:xn.textContent,f=d.length;for(t=0;t<l&&i[t]===d[t];t++);var g=l-t;for(u=1;u<=g&&i[l-u]===d[f-u];u++);return To=d.slice(t,1<u?1-u:void 0)}function Ro(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Po(){return!0}function Xf(){return!1}function wt(t){function i(l,u,d,f,g){this._reactName=l,this._targetInst=d,this.type=u,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(l=t[v],this[v]=l?l(f):f[v]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Po:Xf,this.isPropagationStopped=Xf,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),i}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=wt(jr),$i=H({},jr,{view:0,detail:0}),Nv=wt($i),$a,Ga,Gi,No=H({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?($a=t.screenX-Gi.screenX,Ga=t.screenY-Gi.screenY):Ga=$a=0,Gi=t),$a)},movementY:function(t){return"movementY"in t?t.movementY:Ga}}),Zf=wt(No),xv=H({},No,{dataTransfer:0}),Av=wt(xv),Ov=H({},$i,{relatedTarget:0}),Ka=wt(Ov),Dv=H({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lv=wt(Dv),Mv=H({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bv=wt(Mv),Fv=H({},jr,{data:0}),eh=wt(Fv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=jv[t])?!!i[t]:!1}function qa(){return Wv}var Bv=H({},$i,{key:function(t){if(t.key){var i=Uv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(t){return t.type==="keypress"?Ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vv=wt(Bv),Hv=H({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),th=wt(Hv),$v=H({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),Gv=wt($v),Kv=H({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=wt(Kv),Yv=H({},No,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=wt(Yv),Jv=[9,13,27,32],Ya=h&&"CompositionEvent"in window,Ki=null;h&&"documentMode"in document&&(Ki=document.documentMode);var Xv=h&&"TextEvent"in window&&!Ki,nh=h&&(!Ya||Ki&&8<Ki&&11>=Ki),rh=" ",ih=!1;function sh(t,i){switch(t){case"keyup":return Jv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function Zv(t,i){switch(t){case"compositionend":return oh(i);case"keypress":return i.which!==32?null:(ih=!0,rh);case"textInput":return t=i.data,t===rh&&ih?null:t;default:return null}}function ew(t,i){if(Wr)return t==="compositionend"||!Ya&&sh(t,i)?(t=Jf(),To=Va=xn=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nh&&i.locale!=="ko"?null:i.data;default:return null}}var tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!tw[t.type]:i==="textarea"}function ah(t,i,l,u){Pf(u),i=Lo(i,"onChange"),0<i.length&&(l=new Ha("onChange","change",null,l,u),t.push({event:l,listeners:i}))}var qi=null,Yi=null;function nw(t){Th(t,0)}function xo(t){var i=Gr(t);if(gf(i))return t}function rw(t,i){if(t==="change")return i}var uh=!1;if(h){var Qa;if(h){var Ja="oninput"in document;if(!Ja){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),Ja=typeof ch.oninput=="function"}Qa=Ja}else Qa=!1;uh=Qa&&(!document.documentMode||9<document.documentMode)}function dh(){qi&&(qi.detachEvent("onpropertychange",fh),Yi=qi=null)}function fh(t){if(t.propertyName==="value"&&xo(Yi)){var i=[];ah(i,Yi,t,xa(t)),Of(nw,i)}}function iw(t,i,l){t==="focusin"?(dh(),qi=i,Yi=l,qi.attachEvent("onpropertychange",fh)):t==="focusout"&&dh()}function sw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xo(Yi)}function ow(t,i){if(t==="click")return xo(i)}function lw(t,i){if(t==="input"||t==="change")return xo(i)}function aw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Lt=typeof Object.is=="function"?Object.is:aw;function Qi(t,i){if(Lt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var l=Object.keys(t),u=Object.keys(i);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var d=l[u];if(!p.call(i,d)||!Lt(t[d],i[d]))return!1}return!0}function hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,i){var l=hh(t);t=0;for(var u;l;){if(l.nodeType===3){if(u=t+l.textContent.length,t<=i&&u>=i)return{node:l,offset:i-t};t=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=hh(l)}}function mh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?mh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function gh(){for(var t=window,i=ho();i instanceof t.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)t=i.contentWindow;else break;i=ho(t.document)}return i}function Xa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function uw(t){var i=gh(),l=t.focusedElem,u=t.selectionRange;if(i!==l&&l&&l.ownerDocument&&mh(l.ownerDocument.documentElement,l)){if(u!==null&&Xa(l)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in l)l.selectionStart=i,l.selectionEnd=Math.min(t,l.value.length);else if(t=(i=l.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=l.textContent.length,f=Math.min(u.start,d);u=u.end===void 0?f:Math.min(u.end,d),!t.extend&&f>u&&(d=u,u=f,f=d),d=ph(l,f);var g=ph(l,u);d&&g&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),f>u?(t.addRange(i),t.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),t.addRange(i)))}}for(i=[],t=l;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<i.length;l++)t=i[l],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cw=h&&"documentMode"in document&&11>=document.documentMode,Br=null,Za=null,Ji=null,eu=!1;function _h(t,i,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;eu||Br==null||Br!==ho(u)||(u=Br,"selectionStart"in u&&Xa(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ji&&Qi(Ji,u)||(Ji=u,u=Lo(Za,"onSelect"),0<u.length&&(i=new Ha("onSelect","select",null,i,l),t.push({event:i,listeners:u}),i.target=Br)))}function Ao(t,i){var l={};return l[t.toLowerCase()]=i.toLowerCase(),l["Webkit"+t]="webkit"+i,l["Moz"+t]="moz"+i,l}var Vr={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},tu={},yh={};h&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Oo(t){if(tu[t])return tu[t];if(!Vr[t])return t;var i=Vr[t],l;for(l in i)if(i.hasOwnProperty(l)&&l in yh)return tu[t]=i[l];return t}var vh=Oo("animationend"),wh=Oo("animationiteration"),Eh=Oo("animationstart"),Sh=Oo("transitionend"),Ch=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,i){Ch.set(t,i),a(i,[t])}for(var nu=0;nu<Ih.length;nu++){var ru=Ih[nu],dw=ru.toLowerCase(),fw=ru[0].toUpperCase()+ru.slice(1);An(dw,"on"+fw)}An(vh,"onAnimationEnd"),An(wh,"onAnimationIteration"),An(Eh,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(Sh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function kh(t,i,l){var u=t.type||"unknown-event";t.currentTarget=l,dv(u,i,void 0,t),t.currentTarget=null}function Th(t,i){i=(i&4)!==0;for(var l=0;l<t.length;l++){var u=t[l],d=u.event;u=u.listeners;e:{var f=void 0;if(i)for(var g=u.length-1;0<=g;g--){var v=u[g],E=v.instance,R=v.currentTarget;if(v=v.listener,E!==f&&d.isPropagationStopped())break e;kh(d,v,R),f=E}else for(g=0;g<u.length;g++){if(v=u[g],E=v.instance,R=v.currentTarget,v=v.listener,E!==f&&d.isPropagationStopped())break e;kh(d,v,R),f=E}}}if(go)throw t=La,go=!1,La=null,t}function ke(t,i){var l=i[du];l===void 0&&(l=i[du]=new Set);var u=t+"__bubble";l.has(u)||(Rh(i,t,2,!1),l.add(u))}function iu(t,i,l){var u=0;i&&(u|=4),Rh(l,t,u,i)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Zi(t){if(!t[Do]){t[Do]=!0,s.forEach(function(l){l!=="selectionchange"&&(hw.has(l)||iu(l,!1,t),iu(l,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Do]||(i[Do]=!0,iu("selectionchange",!1,i))}}function Rh(t,i,l,u){switch(Qf(i)){case 1:var d=Rv;break;case 4:d=Pv;break;default:d=Wa}l=d.bind(null,i,l,t),d=void 0,!Da||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,l,{capture:!0,passive:d}):t.addEventListener(i,l,!0):d!==void 0?t.addEventListener(i,l,{passive:d}):t.addEventListener(i,l,!1)}function su(t,i,l,u,d){var f=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var v=u.stateNode.containerInfo;if(v===d||v.nodeType===8&&v.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;g=g.return}for(;v!==null;){if(g=dr(v),g===null)return;if(E=g.tag,E===5||E===6){u=f=g;continue e}v=v.parentNode}}u=u.return}Of(function(){var R=f,D=xa(l),M=[];e:{var A=Ch.get(t);if(A!==void 0){var W=Ha,$=t;switch(t){case"keypress":if(Ro(l)===0)break e;case"keydown":case"keyup":W=Vv;break;case"focusin":$="focus",W=Ka;break;case"focusout":$="blur",W=Ka;break;case"beforeblur":case"afterblur":W=Ka;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Gv;break;case vh:case wh:case Eh:W=Lv;break;case Sh:W=qv;break;case"scroll":W=Nv;break;case"wheel":W=Qv;break;case"copy":case"cut":case"paste":W=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=th}var G=(i&4)!==0,Ue=!G&&t==="scroll",I=G?A!==null?A+"Capture":null:A;G=[];for(var S=R,k;S!==null;){k=S;var F=k.stateNode;if(k.tag===5&&F!==null&&(k=F,I!==null&&(F=Mi(S,I),F!=null&&G.push(es(S,F,k)))),Ue)break;S=S.return}0<G.length&&(A=new W(A,$,null,l,D),M.push({event:A,listeners:G}))}}if(!(i&7)){e:{if(A=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",A&&l!==Na&&($=l.relatedTarget||l.fromElement)&&(dr($)||$[ln]))break e;if((W||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,W?($=l.relatedTarget||l.toElement,W=R,$=$?dr($):null,$!==null&&(Ue=cr($),$!==Ue||$.tag!==5&&$.tag!==6)&&($=null)):(W=null,$=R),W!==$)){if(G=Zf,F="onMouseLeave",I="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(G=th,F="onPointerLeave",I="onPointerEnter",S="pointer"),Ue=W==null?A:Gr(W),k=$==null?A:Gr($),A=new G(F,S+"leave",W,l,D),A.target=Ue,A.relatedTarget=k,F=null,dr(D)===R&&(G=new G(I,S+"enter",$,l,D),G.target=k,G.relatedTarget=Ue,F=G),Ue=F,W&&$)t:{for(G=W,I=$,S=0,k=G;k;k=Hr(k))S++;for(k=0,F=I;F;F=Hr(F))k++;for(;0<S-k;)G=Hr(G),S--;for(;0<k-S;)I=Hr(I),k--;for(;S--;){if(G===I||I!==null&&G===I.alternate)break t;G=Hr(G),I=Hr(I)}G=null}else G=null;W!==null&&Ph(M,A,W,G,!1),$!==null&&Ue!==null&&Ph(M,Ue,$,G,!0)}}e:{if(A=R?Gr(R):window,W=A.nodeName&&A.nodeName.toLowerCase(),W==="select"||W==="input"&&A.type==="file")var K=rw;else if(lh(A))if(uh)K=lw;else{K=sw;var Y=iw}else(W=A.nodeName)&&W.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(K=ow);if(K&&(K=K(t,R))){ah(M,K,l,D);break e}Y&&Y(t,A,R),t==="focusout"&&(Y=A._wrapperState)&&Y.controlled&&A.type==="number"&&Ia(A,"number",A.value)}switch(Y=R?Gr(R):window,t){case"focusin":(lh(Y)||Y.contentEditable==="true")&&(Br=Y,Za=R,Ji=null);break;case"focusout":Ji=Za=Br=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,_h(M,l,D);break;case"selectionchange":if(cw)break;case"keydown":case"keyup":_h(M,l,D)}var Q;if(Ya)e:{switch(t){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Wr?sh(t,l)&&(ee="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ee="onCompositionStart");ee&&(nh&&l.locale!=="ko"&&(Wr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Wr&&(Q=Jf()):(xn=D,Va="value"in xn?xn.value:xn.textContent,Wr=!0)),Y=Lo(R,ee),0<Y.length&&(ee=new eh(ee,t,null,l,D),M.push({event:ee,listeners:Y}),Q?ee.data=Q:(Q=oh(l),Q!==null&&(ee.data=Q)))),(Q=Xv?Zv(t,l):ew(t,l))&&(R=Lo(R,"onBeforeInput"),0<R.length&&(D=new eh("onBeforeInput","beforeinput",null,l,D),M.push({event:D,listeners:R}),D.data=Q))}Th(M,i)})}function es(t,i,l){return{instance:t,listener:i,currentTarget:l}}function Lo(t,i){for(var l=i+"Capture",u=[];t!==null;){var d=t,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Mi(t,l),f!=null&&u.unshift(es(t,f,d)),f=Mi(t,i),f!=null&&u.push(es(t,f,d))),t=t.return}return u}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ph(t,i,l,u,d){for(var f=i._reactName,g=[];l!==null&&l!==u;){var v=l,E=v.alternate,R=v.stateNode;if(E!==null&&E===u)break;v.tag===5&&R!==null&&(v=R,d?(E=Mi(l,f),E!=null&&g.unshift(es(l,E,v))):d||(E=Mi(l,f),E!=null&&g.push(es(l,E,v)))),l=l.return}g.length!==0&&t.push({event:i,listeners:g})}var pw=/\r\n?/g,mw=/\u0000|\uFFFD/g;function Nh(t){return(typeof t=="string"?t:""+t).replace(pw,`
`).replace(mw,"")}function Mo(t,i,l){if(i=Nh(i),Nh(t)!==i&&l)throw Error(n(425))}function bo(){}var ou=null,lu=null;function au(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,gw=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,_w=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(t){return xh.resolve(null).then(t).catch(yw)}:uu;function yw(t){setTimeout(function(){throw t})}function cu(t,i){var l=i,u=0;do{var d=l.nextSibling;if(t.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"){if(u===0){t.removeChild(d),Hi(i);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=d}while(l);Hi(i)}function On(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return t;i--}else l==="/$"&&i++}t=t.previousSibling}return null}var $r=Math.random().toString(36).slice(2),Yt="__reactFiber$"+$r,ts="__reactProps$"+$r,ln="__reactContainer$"+$r,du="__reactEvents$"+$r,vw="__reactListeners$"+$r,ww="__reactHandles$"+$r;function dr(t){var i=t[Yt];if(i)return i;for(var l=t.parentNode;l;){if(i=l[ln]||l[Yt]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(t=Ah(t);t!==null;){if(l=t[Yt])return l;t=Ah(t)}return i}t=l,l=t.parentNode}return null}function ns(t){return t=t[Yt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Fo(t){return t[ts]||null}var fu=[],Kr=-1;function Dn(t){return{current:t}}function Te(t){0>Kr||(t.current=fu[Kr],fu[Kr]=null,Kr--)}function Se(t,i){Kr++,fu[Kr]=t.current,t.current=i}var Ln={},et=Dn(Ln),dt=Dn(!1),fr=Ln;function qr(t,i){var l=t.type.contextTypes;if(!l)return Ln;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in l)d[f]=i[f];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function ft(t){return t=t.childContextTypes,t!=null}function Uo(){Te(dt),Te(et)}function Oh(t,i,l){if(et.current!==Ln)throw Error(n(168));Se(et,i),Se(dt,l)}function Dh(t,i,l){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return H({},l,u)}function zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,fr=et.current,Se(et,t),Se(dt,dt.current),!0}function Lh(t,i,l){var u=t.stateNode;if(!u)throw Error(n(169));l?(t=Dh(t,i,fr),u.__reactInternalMemoizedMergedChildContext=t,Te(dt),Te(et),Se(et,t)):Te(dt),Se(dt,l)}var an=null,jo=!1,hu=!1;function Mh(t){an===null?an=[t]:an.push(t)}function Ew(t){jo=!0,Mh(t)}function Mn(){if(!hu&&an!==null){hu=!0;var t=0,i=me;try{var l=an;for(me=1;t<l.length;t++){var u=l[t];do u=u(!0);while(u!==null)}an=null,jo=!1}catch(d){throw an!==null&&(an=an.slice(t+1)),Ff(Ma,Mn),d}finally{me=i,hu=!1}}return null}var Yr=[],Qr=0,Wo=null,Bo=0,It=[],kt=0,hr=null,un=1,cn="";function pr(t,i){Yr[Qr++]=Bo,Yr[Qr++]=Wo,Wo=t,Bo=i}function bh(t,i,l){It[kt++]=un,It[kt++]=cn,It[kt++]=hr,hr=t;var u=un;t=cn;var d=32-Dt(u)-1;u&=~(1<<d),l+=1;var f=32-Dt(i)+d;if(30<f){var g=d-d%5;f=(u&(1<<g)-1).toString(32),u>>=g,d-=g,un=1<<32-Dt(i)+d|l<<d|u,cn=f+t}else un=1<<f|l<<d|u,cn=t}function pu(t){t.return!==null&&(pr(t,1),bh(t,1,0))}function mu(t){for(;t===Wo;)Wo=Yr[--Qr],Yr[Qr]=null,Bo=Yr[--Qr],Yr[Qr]=null;for(;t===hr;)hr=It[--kt],It[kt]=null,cn=It[--kt],It[kt]=null,un=It[--kt],It[kt]=null}var Et=null,St=null,Pe=!1,Mt=null;function Fh(t,i){var l=Nt(5,null,null,0);l.elementType="DELETED",l.stateNode=i,l.return=t,i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)}function Uh(t,i){switch(t.tag){case 5:var l=t.type;return i=i.nodeType!==1||l.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,St=On(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,St=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(l=hr!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:i,treeContext:l,retryLane:1073741824},l=Nt(18,null,null,0),l.stateNode=i,l.return=t,t.child=l,Et=t,St=null,!0):!1;default:return!1}}function gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _u(t){if(Pe){var i=St;if(i){var l=i;if(!Uh(t,i)){if(gu(t))throw Error(n(418));i=On(l.nextSibling);var u=Et;i&&Uh(t,i)?Fh(u,l):(t.flags=t.flags&-4097|2,Pe=!1,Et=t)}}else{if(gu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Pe=!1,Et=t}}}function zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Vo(t){if(t!==Et)return!1;if(!Pe)return zh(t),Pe=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!au(t.type,t.memoizedProps)),i&&(i=St)){if(gu(t))throw jh(),Error(n(418));for(;i;)Fh(t,i),i=On(i.nextSibling)}if(zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"){if(i===0){St=On(t.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++}t=t.nextSibling}St=null}}else St=Et?On(t.stateNode.nextSibling):null;return!0}function jh(){for(var t=St;t;)t=On(t.nextSibling)}function Jr(){St=Et=null,Pe=!1}function yu(t){Mt===null?Mt=[t]:Mt.push(t)}var Sw=te.ReactCurrentBatchConfig;function rs(t,i,l){if(t=l.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(n(309));var u=l.stateNode}if(!u)throw Error(n(147,t));var d=u,f=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(g){var v=d.refs;g===null?delete v[f]:v[f]=g},i._stringRef=f,i)}if(typeof t!="string")throw Error(n(284));if(!l._owner)throw Error(n(290,t))}return t}function Ho(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Wh(t){var i=t._init;return i(t._payload)}function Bh(t){function i(I,S){if(t){var k=I.deletions;k===null?(I.deletions=[S],I.flags|=16):k.push(S)}}function l(I,S){if(!t)return null;for(;S!==null;)i(I,S),S=S.sibling;return null}function u(I,S){for(I=new Map;S!==null;)S.key!==null?I.set(S.key,S):I.set(S.index,S),S=S.sibling;return I}function d(I,S){return I=Vn(I,S),I.index=0,I.sibling=null,I}function f(I,S,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<S?(I.flags|=2,S):k):(I.flags|=2,S)):(I.flags|=1048576,S)}function g(I){return t&&I.alternate===null&&(I.flags|=2),I}function v(I,S,k,F){return S===null||S.tag!==6?(S=uc(k,I.mode,F),S.return=I,S):(S=d(S,k),S.return=I,S)}function E(I,S,k,F){var K=k.type;return K===ve?D(I,S,k.props.children,F,k.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ct&&Wh(K)===S.type)?(F=d(S,k.props),F.ref=rs(I,S,k),F.return=I,F):(F=pl(k.type,k.key,k.props,null,I.mode,F),F.ref=rs(I,S,k),F.return=I,F)}function R(I,S,k,F){return S===null||S.tag!==4||S.stateNode.containerInfo!==k.containerInfo||S.stateNode.implementation!==k.implementation?(S=cc(k,I.mode,F),S.return=I,S):(S=d(S,k.children||[]),S.return=I,S)}function D(I,S,k,F,K){return S===null||S.tag!==7?(S=Sr(k,I.mode,F,K),S.return=I,S):(S=d(S,k),S.return=I,S)}function M(I,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return S=uc(""+S,I.mode,k),S.return=I,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case he:return k=pl(S.type,S.key,S.props,null,I.mode,k),k.ref=rs(I,null,S),k.return=I,k;case ye:return S=cc(S,I.mode,k),S.return=I,S;case ct:var F=S._init;return M(I,F(S._payload),k)}if(Oi(S)||J(S))return S=Sr(S,I.mode,k,null),S.return=I,S;Ho(I,S)}return null}function A(I,S,k,F){var K=S!==null?S.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return K!==null?null:v(I,S,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case he:return k.key===K?E(I,S,k,F):null;case ye:return k.key===K?R(I,S,k,F):null;case ct:return K=k._init,A(I,S,K(k._payload),F)}if(Oi(k)||J(k))return K!==null?null:D(I,S,k,F,null);Ho(I,k)}return null}function W(I,S,k,F,K){if(typeof F=="string"&&F!==""||typeof F=="number")return I=I.get(k)||null,v(S,I,""+F,K);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case he:return I=I.get(F.key===null?k:F.key)||null,E(S,I,F,K);case ye:return I=I.get(F.key===null?k:F.key)||null,R(S,I,F,K);case ct:var Y=F._init;return W(I,S,k,Y(F._payload),K)}if(Oi(F)||J(F))return I=I.get(k)||null,D(S,I,F,K,null);Ho(S,F)}return null}function $(I,S,k,F){for(var K=null,Y=null,Q=S,ee=S=0,Ke=null;Q!==null&&ee<k.length;ee++){Q.index>ee?(Ke=Q,Q=null):Ke=Q.sibling;var de=A(I,Q,k[ee],F);if(de===null){Q===null&&(Q=Ke);break}t&&Q&&de.alternate===null&&i(I,Q),S=f(de,S,ee),Y===null?K=de:Y.sibling=de,Y=de,Q=Ke}if(ee===k.length)return l(I,Q),Pe&&pr(I,ee),K;if(Q===null){for(;ee<k.length;ee++)Q=M(I,k[ee],F),Q!==null&&(S=f(Q,S,ee),Y===null?K=Q:Y.sibling=Q,Y=Q);return Pe&&pr(I,ee),K}for(Q=u(I,Q);ee<k.length;ee++)Ke=W(Q,I,ee,k[ee],F),Ke!==null&&(t&&Ke.alternate!==null&&Q.delete(Ke.key===null?ee:Ke.key),S=f(Ke,S,ee),Y===null?K=Ke:Y.sibling=Ke,Y=Ke);return t&&Q.forEach(function(Hn){return i(I,Hn)}),Pe&&pr(I,ee),K}function G(I,S,k,F){var K=J(k);if(typeof K!="function")throw Error(n(150));if(k=K.call(k),k==null)throw Error(n(151));for(var Y=K=null,Q=S,ee=S=0,Ke=null,de=k.next();Q!==null&&!de.done;ee++,de=k.next()){Q.index>ee?(Ke=Q,Q=null):Ke=Q.sibling;var Hn=A(I,Q,de.value,F);if(Hn===null){Q===null&&(Q=Ke);break}t&&Q&&Hn.alternate===null&&i(I,Q),S=f(Hn,S,ee),Y===null?K=Hn:Y.sibling=Hn,Y=Hn,Q=Ke}if(de.done)return l(I,Q),Pe&&pr(I,ee),K;if(Q===null){for(;!de.done;ee++,de=k.next())de=M(I,de.value,F),de!==null&&(S=f(de,S,ee),Y===null?K=de:Y.sibling=de,Y=de);return Pe&&pr(I,ee),K}for(Q=u(I,Q);!de.done;ee++,de=k.next())de=W(Q,I,ee,de.value,F),de!==null&&(t&&de.alternate!==null&&Q.delete(de.key===null?ee:de.key),S=f(de,S,ee),Y===null?K=de:Y.sibling=de,Y=de);return t&&Q.forEach(function(eE){return i(I,eE)}),Pe&&pr(I,ee),K}function Ue(I,S,k,F){if(typeof k=="object"&&k!==null&&k.type===ve&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case he:e:{for(var K=k.key,Y=S;Y!==null;){if(Y.key===K){if(K=k.type,K===ve){if(Y.tag===7){l(I,Y.sibling),S=d(Y,k.props.children),S.return=I,I=S;break e}}else if(Y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ct&&Wh(K)===Y.type){l(I,Y.sibling),S=d(Y,k.props),S.ref=rs(I,Y,k),S.return=I,I=S;break e}l(I,Y);break}else i(I,Y);Y=Y.sibling}k.type===ve?(S=Sr(k.props.children,I.mode,F,k.key),S.return=I,I=S):(F=pl(k.type,k.key,k.props,null,I.mode,F),F.ref=rs(I,S,k),F.return=I,I=F)}return g(I);case ye:e:{for(Y=k.key;S!==null;){if(S.key===Y)if(S.tag===4&&S.stateNode.containerInfo===k.containerInfo&&S.stateNode.implementation===k.implementation){l(I,S.sibling),S=d(S,k.children||[]),S.return=I,I=S;break e}else{l(I,S);break}else i(I,S);S=S.sibling}S=cc(k,I.mode,F),S.return=I,I=S}return g(I);case ct:return Y=k._init,Ue(I,S,Y(k._payload),F)}if(Oi(k))return $(I,S,k,F);if(J(k))return G(I,S,k,F);Ho(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,S!==null&&S.tag===6?(l(I,S.sibling),S=d(S,k),S.return=I,I=S):(l(I,S),S=uc(k,I.mode,F),S.return=I,I=S),g(I)):l(I,S)}return Ue}var Xr=Bh(!0),Vh=Bh(!1),$o=Dn(null),Go=null,Zr=null,vu=null;function wu(){vu=Zr=Go=null}function Eu(t){var i=$o.current;Te($o),t._currentValue=i}function Su(t,i,l){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===l)break;t=t.return}}function ei(t,i){Go=t,vu=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(ht=!0),t.firstContext=null)}function Tt(t){var i=t._currentValue;if(vu!==t)if(t={context:t,memoizedValue:i,next:null},Zr===null){if(Go===null)throw Error(n(308));Zr=t,Go.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return i}var mr=null;function Cu(t){mr===null?mr=[t]:mr.push(t)}function Hh(t,i,l,u){var d=i.interleaved;return d===null?(l.next=l,Cu(i)):(l.next=d.next,d.next=l),i.interleaved=l,dn(t,u)}function dn(t,i){t.lanes|=i;var l=t.alternate;for(l!==null&&(l.lanes|=i),l=t,t=t.return;t!==null;)t.childLanes|=i,l=t.alternate,l!==null&&(l.childLanes|=i),l=t,t=t.return;return l.tag===3?l.stateNode:null}var bn=!1;function Iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Fn(t,i,l){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,ae&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,dn(t,l)}return d=u.interleaved,d===null?(i.next=i,Cu(u)):(i.next=d.next,d.next=i),u.interleaved=i,dn(t,l)}function Ko(t,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,l|=u,i.lanes=l,Ua(t,l)}}function Gh(t,i){var l=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var d=null,f=null;if(l=l.firstBaseUpdate,l!==null){do{var g={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};f===null?d=f=g:f=f.next=g,l=l.next}while(l!==null);f===null?d=f=i:f=f.next=i}else d=f=i;l={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:u.shared,effects:u.effects},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=i:t.next=i,l.lastBaseUpdate=i}function qo(t,i,l,u){var d=t.updateQueue;bn=!1;var f=d.firstBaseUpdate,g=d.lastBaseUpdate,v=d.shared.pending;if(v!==null){d.shared.pending=null;var E=v,R=E.next;E.next=null,g===null?f=R:g.next=R,g=E;var D=t.alternate;D!==null&&(D=D.updateQueue,v=D.lastBaseUpdate,v!==g&&(v===null?D.firstBaseUpdate=R:v.next=R,D.lastBaseUpdate=E))}if(f!==null){var M=d.baseState;g=0,D=R=E=null,v=f;do{var A=v.lane,W=v.eventTime;if((u&A)===A){D!==null&&(D=D.next={eventTime:W,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var $=t,G=v;switch(A=i,W=l,G.tag){case 1:if($=G.payload,typeof $=="function"){M=$.call(W,M,A);break e}M=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=G.payload,A=typeof $=="function"?$.call(W,M,A):$,A==null)break e;M=H({},M,A);break e;case 2:bn=!0}}v.callback!==null&&v.lane!==0&&(t.flags|=64,A=d.effects,A===null?d.effects=[v]:A.push(v))}else W={eventTime:W,lane:A,tag:v.tag,payload:v.payload,callback:v.callback,next:null},D===null?(R=D=W,E=M):D=D.next=W,g|=A;if(v=v.next,v===null){if(v=d.shared.pending,v===null)break;A=v,v=A.next,A.next=null,d.lastBaseUpdate=A,d.shared.pending=null}}while(!0);if(D===null&&(E=M),d.baseState=E,d.firstBaseUpdate=R,d.lastBaseUpdate=D,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);yr|=g,t.lanes=g,t.memoizedState=M}}function Kh(t,i,l){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=l,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var is={},Qt=Dn(is),ss=Dn(is),os=Dn(is);function gr(t){if(t===is)throw Error(n(174));return t}function ku(t,i){switch(Se(os,i),Se(ss,t),Se(Qt,is),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ta(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ta(i,t)}Te(Qt),Se(Qt,i)}function ti(){Te(Qt),Te(ss),Te(os)}function qh(t){gr(os.current);var i=gr(Qt.current),l=Ta(i,t.type);i!==l&&(Se(ss,t),Se(Qt,l))}function Tu(t){ss.current===t&&(Te(Qt),Te(ss))}var xe=Dn(0);function Yo(t){for(var i=t;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ru=[];function Pu(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var Qo=te.ReactCurrentDispatcher,Nu=te.ReactCurrentBatchConfig,_r=0,Ae=null,We=null,$e=null,Jo=!1,ls=!1,as=0,Cw=0;function tt(){throw Error(n(321))}function xu(t,i){if(i===null)return!1;for(var l=0;l<i.length&&l<t.length;l++)if(!Lt(t[l],i[l]))return!1;return!0}function Au(t,i,l,u,d,f){if(_r=f,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qo.current=t===null||t.memoizedState===null?Rw:Pw,t=l(u,d),ls){f=0;do{if(ls=!1,as=0,25<=f)throw Error(n(301));f+=1,$e=We=null,i.updateQueue=null,Qo.current=Nw,t=l(u,d)}while(ls)}if(Qo.current=el,i=We!==null&&We.next!==null,_r=0,$e=We=Ae=null,Jo=!1,i)throw Error(n(300));return t}function Ou(){var t=as!==0;return as=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ae.memoizedState=$e=t:$e=$e.next=t,$e}function Rt(){if(We===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var i=$e===null?Ae.memoizedState:$e.next;if(i!==null)$e=i,We=t;else{if(t===null)throw Error(n(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},$e===null?Ae.memoizedState=$e=t:$e=$e.next=t}return $e}function us(t,i){return typeof i=="function"?i(t):i}function Du(t){var i=Rt(),l=i.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=t;var u=We,d=u.baseQueue,f=l.pending;if(f!==null){if(d!==null){var g=d.next;d.next=f.next,f.next=g}u.baseQueue=d=f,l.pending=null}if(d!==null){f=d.next,u=u.baseState;var v=g=null,E=null,R=f;do{var D=R.lane;if((_r&D)===D)E!==null&&(E=E.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),u=R.hasEagerState?R.eagerState:t(u,R.action);else{var M={lane:D,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};E===null?(v=E=M,g=u):E=E.next=M,Ae.lanes|=D,yr|=D}R=R.next}while(R!==null&&R!==f);E===null?g=u:E.next=v,Lt(u,i.memoizedState)||(ht=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=E,l.lastRenderedState=u}if(t=l.interleaved,t!==null){d=t;do f=d.lane,Ae.lanes|=f,yr|=f,d=d.next;while(d!==t)}else d===null&&(l.lanes=0);return[i.memoizedState,l.dispatch]}function Lu(t){var i=Rt(),l=i.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=t;var u=l.dispatch,d=l.pending,f=i.memoizedState;if(d!==null){l.pending=null;var g=d=d.next;do f=t(f,g.action),g=g.next;while(g!==d);Lt(f,i.memoizedState)||(ht=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),l.lastRenderedState=f}return[f,u]}function Yh(){}function Qh(t,i){var l=Ae,u=Rt(),d=i(),f=!Lt(u.memoizedState,d);if(f&&(u.memoizedState=d,ht=!0),u=u.queue,Mu(Zh.bind(null,l,u,t),[t]),u.getSnapshot!==i||f||$e!==null&&$e.memoizedState.tag&1){if(l.flags|=2048,cs(9,Xh.bind(null,l,u,d,i),void 0,null),Ge===null)throw Error(n(349));_r&30||Jh(l,i,d)}return d}function Jh(t,i,l){t.flags|=16384,t={getSnapshot:i,value:l},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.stores=[t]):(l=i.stores,l===null?i.stores=[t]:l.push(t))}function Xh(t,i,l,u){i.value=l,i.getSnapshot=u,ep(i)&&tp(t)}function Zh(t,i,l){return l(function(){ep(i)&&tp(t)})}function ep(t){var i=t.getSnapshot;t=t.value;try{var l=i();return!Lt(t,l)}catch{return!0}}function tp(t){var i=dn(t,1);i!==null&&zt(i,t,1,-1)}function np(t){var i=Jt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:t},i.queue=t,t=t.dispatch=Tw.bind(null,Ae,t),[i.memoizedState,t]}function cs(t,i,l,u){return t={tag:t,create:i,destroy:l,deps:u,next:null},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.lastEffect=t.next=t):(l=i.lastEffect,l===null?i.lastEffect=t.next=t:(u=l.next,l.next=t,t.next=u,i.lastEffect=t)),t}function rp(){return Rt().memoizedState}function Xo(t,i,l,u){var d=Jt();Ae.flags|=t,d.memoizedState=cs(1|i,l,void 0,u===void 0?null:u)}function Zo(t,i,l,u){var d=Rt();u=u===void 0?null:u;var f=void 0;if(We!==null){var g=We.memoizedState;if(f=g.destroy,u!==null&&xu(u,g.deps)){d.memoizedState=cs(i,l,f,u);return}}Ae.flags|=t,d.memoizedState=cs(1|i,l,f,u)}function ip(t,i){return Xo(8390656,8,t,i)}function Mu(t,i){return Zo(2048,8,t,i)}function sp(t,i){return Zo(4,2,t,i)}function op(t,i){return Zo(4,4,t,i)}function lp(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ap(t,i,l){return l=l!=null?l.concat([t]):null,Zo(4,4,lp.bind(null,i,t),l)}function bu(){}function up(t,i){var l=Rt();i=i===void 0?null:i;var u=l.memoizedState;return u!==null&&i!==null&&xu(i,u[1])?u[0]:(l.memoizedState=[t,i],t)}function cp(t,i){var l=Rt();i=i===void 0?null:i;var u=l.memoizedState;return u!==null&&i!==null&&xu(i,u[1])?u[0]:(t=t(),l.memoizedState=[t,i],t)}function dp(t,i,l){return _r&21?(Lt(l,i)||(l=Wf(),Ae.lanes|=l,yr|=l,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=l)}function Iw(t,i){var l=me;me=l!==0&&4>l?l:4,t(!0);var u=Nu.transition;Nu.transition={};try{t(!1),i()}finally{me=l,Nu.transition=u}}function fp(){return Rt().memoizedState}function kw(t,i,l){var u=Wn(t);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},hp(t))pp(i,l);else if(l=Hh(t,i,l,u),l!==null){var d=ot();zt(l,t,u,d),mp(l,i,u)}}function Tw(t,i,l){var u=Wn(t),d={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(hp(t))pp(i,d);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var g=i.lastRenderedState,v=f(g,l);if(d.hasEagerState=!0,d.eagerState=v,Lt(v,g)){var E=i.interleaved;E===null?(d.next=d,Cu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}l=Hh(t,i,d,u),l!==null&&(d=ot(),zt(l,t,u,d),mp(l,i,u))}}function hp(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function pp(t,i){ls=Jo=!0;var l=t.pending;l===null?i.next=i:(i.next=l.next,l.next=i),t.pending=i}function mp(t,i,l){if(l&4194240){var u=i.lanes;u&=t.pendingLanes,l|=u,i.lanes=l,Ua(t,l)}}var el={readContext:Tt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Rw={readContext:Tt,useCallback:function(t,i){return Jt().memoizedState=[t,i===void 0?null:i],t},useContext:Tt,useEffect:ip,useImperativeHandle:function(t,i,l){return l=l!=null?l.concat([t]):null,Xo(4194308,4,lp.bind(null,i,t),l)},useLayoutEffect:function(t,i){return Xo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Xo(4,2,t,i)},useMemo:function(t,i){var l=Jt();return i=i===void 0?null:i,t=t(),l.memoizedState=[t,i],t},useReducer:function(t,i,l){var u=Jt();return i=l!==void 0?l(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=kw.bind(null,Ae,t),[u.memoizedState,t]},useRef:function(t){var i=Jt();return t={current:t},i.memoizedState=t},useState:np,useDebugValue:bu,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=np(!1),i=t[0];return t=Iw.bind(null,t[1]),Jt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,l){var u=Ae,d=Jt();if(Pe){if(l===void 0)throw Error(n(407));l=l()}else{if(l=i(),Ge===null)throw Error(n(349));_r&30||Jh(u,i,l)}d.memoizedState=l;var f={value:l,getSnapshot:i};return d.queue=f,ip(Zh.bind(null,u,f,t),[t]),u.flags|=2048,cs(9,Xh.bind(null,u,f,l,i),void 0,null),l},useId:function(){var t=Jt(),i=Ge.identifierPrefix;if(Pe){var l=cn,u=un;l=(u&~(1<<32-Dt(u)-1)).toString(32)+l,i=":"+i+"R"+l,l=as++,0<l&&(i+="H"+l.toString(32)),i+=":"}else l=Cw++,i=":"+i+"r"+l.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Pw={readContext:Tt,useCallback:up,useContext:Tt,useEffect:Mu,useImperativeHandle:ap,useInsertionEffect:sp,useLayoutEffect:op,useMemo:cp,useReducer:Du,useRef:rp,useState:function(){return Du(us)},useDebugValue:bu,useDeferredValue:function(t){var i=Rt();return dp(i,We.memoizedState,t)},useTransition:function(){var t=Du(us)[0],i=Rt().memoizedState;return[t,i]},useMutableSource:Yh,useSyncExternalStore:Qh,useId:fp,unstable_isNewReconciler:!1},Nw={readContext:Tt,useCallback:up,useContext:Tt,useEffect:Mu,useImperativeHandle:ap,useInsertionEffect:sp,useLayoutEffect:op,useMemo:cp,useReducer:Lu,useRef:rp,useState:function(){return Lu(us)},useDebugValue:bu,useDeferredValue:function(t){var i=Rt();return We===null?i.memoizedState=t:dp(i,We.memoizedState,t)},useTransition:function(){var t=Lu(us)[0],i=Rt().memoizedState;return[t,i]},useMutableSource:Yh,useSyncExternalStore:Qh,useId:fp,unstable_isNewReconciler:!1};function bt(t,i){if(t&&t.defaultProps){i=H({},i),t=t.defaultProps;for(var l in t)i[l]===void 0&&(i[l]=t[l]);return i}return i}function Fu(t,i,l,u){i=t.memoizedState,l=l(u,i),l=l==null?i:H({},i,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var tl={isMounted:function(t){return(t=t._reactInternals)?cr(t)===t:!1},enqueueSetState:function(t,i,l){t=t._reactInternals;var u=ot(),d=Wn(t),f=fn(u,d);f.payload=i,l!=null&&(f.callback=l),i=Fn(t,f,d),i!==null&&(zt(i,t,d,u),Ko(i,t,d))},enqueueReplaceState:function(t,i,l){t=t._reactInternals;var u=ot(),d=Wn(t),f=fn(u,d);f.tag=1,f.payload=i,l!=null&&(f.callback=l),i=Fn(t,f,d),i!==null&&(zt(i,t,d,u),Ko(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var l=ot(),u=Wn(t),d=fn(l,u);d.tag=2,i!=null&&(d.callback=i),i=Fn(t,d,u),i!==null&&(zt(i,t,u,l),Ko(i,t,u))}};function gp(t,i,l,u,d,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,f,g):i.prototype&&i.prototype.isPureReactComponent?!Qi(l,u)||!Qi(d,f):!0}function _p(t,i,l){var u=!1,d=Ln,f=i.contextType;return typeof f=="object"&&f!==null?f=Tt(f):(d=ft(i)?fr:et.current,u=i.contextTypes,f=(u=u!=null)?qr(t,d):Ln),i=new i(l,f),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=f),i}function yp(t,i,l,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,u),i.state!==t&&tl.enqueueReplaceState(i,i.state,null)}function Uu(t,i,l,u){var d=t.stateNode;d.props=l,d.state=t.memoizedState,d.refs={},Iu(t);var f=i.contextType;typeof f=="object"&&f!==null?d.context=Tt(f):(f=ft(i)?fr:et.current,d.context=qr(t,f)),d.state=t.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Fu(t,i,f,l),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&tl.enqueueReplaceState(d,d.state,null),qo(t,l,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ni(t,i){try{var l="",u=i;do l+=ue(u),u=u.return;while(u);var d=l}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:i,stack:d,digest:null}}function zu(t,i,l){return{value:t,source:null,stack:l??null,digest:i??null}}function ju(t,i){try{console.error(i.value)}catch(l){setTimeout(function(){throw l})}}var xw=typeof WeakMap=="function"?WeakMap:Map;function vp(t,i,l){l=fn(-1,l),l.tag=3,l.payload={element:null};var u=i.value;return l.callback=function(){al||(al=!0,tc=u),ju(t,i)},l}function wp(t,i,l){l=fn(-1,l),l.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;l.payload=function(){return u(d)},l.callback=function(){ju(t,i)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(l.callback=function(){ju(t,i),typeof u!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),l}function Ep(t,i,l){var u=t.pingCache;if(u===null){u=t.pingCache=new xw;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(l)||(d.add(l),t=Hw.bind(null,t,i,l),i.then(t,t))}function Sp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Cp(t,i,l,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(i=fn(-1,1),i.tag=2,Fn(l,i,1))),l.lanes|=1),t)}var Aw=te.ReactCurrentOwner,ht=!1;function st(t,i,l,u){i.child=t===null?Vh(i,null,l,u):Xr(i,t.child,l,u)}function Ip(t,i,l,u,d){l=l.render;var f=i.ref;return ei(i,d),u=Au(t,i,l,u,f,d),l=Ou(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hn(t,i,d)):(Pe&&l&&pu(i),i.flags|=1,st(t,i,u,d),i.child)}function kp(t,i,l,u,d){if(t===null){var f=l.type;return typeof f=="function"&&!ac(f)&&f.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(i.tag=15,i.type=f,Tp(t,i,f,u,d)):(t=pl(l.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(f=t.child,!(t.lanes&d)){var g=f.memoizedProps;if(l=l.compare,l=l!==null?l:Qi,l(g,u)&&t.ref===i.ref)return hn(t,i,d)}return i.flags|=1,t=Vn(f,u),t.ref=i.ref,t.return=i,i.child=t}function Tp(t,i,l,u,d){if(t!==null){var f=t.memoizedProps;if(Qi(f,u)&&t.ref===i.ref)if(ht=!1,i.pendingProps=u=f,(t.lanes&d)!==0)t.flags&131072&&(ht=!0);else return i.lanes=t.lanes,hn(t,i,d)}return Wu(t,i,l,u,d)}function Rp(t,i,l){var u=i.pendingProps,d=u.children,f=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(ii,Ct),Ct|=l;else{if(!(l&1073741824))return t=f!==null?f.baseLanes|l:l,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Se(ii,Ct),Ct|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:l,Se(ii,Ct),Ct|=u}else f!==null?(u=f.baseLanes|l,i.memoizedState=null):u=l,Se(ii,Ct),Ct|=u;return st(t,i,d,l),i.child}function Pp(t,i){var l=i.ref;(t===null&&l!==null||t!==null&&t.ref!==l)&&(i.flags|=512,i.flags|=2097152)}function Wu(t,i,l,u,d){var f=ft(l)?fr:et.current;return f=qr(i,f),ei(i,d),l=Au(t,i,l,u,f,d),u=Ou(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hn(t,i,d)):(Pe&&u&&pu(i),i.flags|=1,st(t,i,l,d),i.child)}function Np(t,i,l,u,d){if(ft(l)){var f=!0;zo(i)}else f=!1;if(ei(i,d),i.stateNode===null)rl(t,i),_p(i,l,u),Uu(i,l,u,d),u=!0;else if(t===null){var g=i.stateNode,v=i.memoizedProps;g.props=v;var E=g.context,R=l.contextType;typeof R=="object"&&R!==null?R=Tt(R):(R=ft(l)?fr:et.current,R=qr(i,R));var D=l.getDerivedStateFromProps,M=typeof D=="function"||typeof g.getSnapshotBeforeUpdate=="function";M||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(v!==u||E!==R)&&yp(i,g,u,R),bn=!1;var A=i.memoizedState;g.state=A,qo(i,u,g,d),E=i.memoizedState,v!==u||A!==E||dt.current||bn?(typeof D=="function"&&(Fu(i,l,D,u),E=i.memoizedState),(v=bn||gp(i,l,v,u,A,E,R))?(M||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),g.props=u,g.state=E,g.context=R,u=v):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,$h(t,i),v=i.memoizedProps,R=i.type===i.elementType?v:bt(i.type,v),g.props=R,M=i.pendingProps,A=g.context,E=l.contextType,typeof E=="object"&&E!==null?E=Tt(E):(E=ft(l)?fr:et.current,E=qr(i,E));var W=l.getDerivedStateFromProps;(D=typeof W=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(v!==M||A!==E)&&yp(i,g,u,E),bn=!1,A=i.memoizedState,g.state=A,qo(i,u,g,d);var $=i.memoizedState;v!==M||A!==$||dt.current||bn?(typeof W=="function"&&(Fu(i,l,W,u),$=i.memoizedState),(R=bn||gp(i,l,R,u,A,$,E)||!1)?(D||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,$,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,$,E)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=$),g.props=u,g.state=$,g.context=E,u=R):(typeof g.componentDidUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),u=!1)}return Bu(t,i,l,u,f,d)}function Bu(t,i,l,u,d,f){Pp(t,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&Lh(i,l,!1),hn(t,i,f);u=i.stateNode,Aw.current=i;var v=g&&typeof l.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&g?(i.child=Xr(i,t.child,null,f),i.child=Xr(i,null,v,f)):st(t,i,v,f),i.memoizedState=u.state,d&&Lh(i,l,!0),i.child}function xp(t){var i=t.stateNode;i.pendingContext?Oh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Oh(t,i.context,!1),ku(t,i.containerInfo)}function Ap(t,i,l,u,d){return Jr(),yu(d),i.flags|=256,st(t,i,l,u),i.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Op(t,i,l){var u=i.pendingProps,d=xe.current,f=!1,g=(i.flags&128)!==0,v;if((v=g)||(v=t!==null&&t.memoizedState===null?!1:(d&2)!==0),v?(f=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Se(xe,d&1),t===null)return _u(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(g=u.children,t=u.fallback,f?(u=i.mode,f=i.child,g={mode:"hidden",children:g},!(u&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=ml(g,u,0,null),t=Sr(t,u,l,null),f.return=i,t.return=i,f.sibling=t,i.child=f,i.child.memoizedState=Hu(l),i.memoizedState=Vu,t):$u(i,g));if(d=t.memoizedState,d!==null&&(v=d.dehydrated,v!==null))return Ow(t,i,g,u,v,d,l);if(f){f=u.fallback,g=i.mode,d=t.child,v=d.sibling;var E={mode:"hidden",children:u.children};return!(g&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=Vn(d,E),u.subtreeFlags=d.subtreeFlags&14680064),v!==null?f=Vn(v,f):(f=Sr(f,g,l,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,g=t.child.memoizedState,g=g===null?Hu(l):{baseLanes:g.baseLanes|l,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=t.childLanes&~l,i.memoizedState=Vu,u}return f=t.child,t=f.sibling,u=Vn(f,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=l),u.return=i,u.sibling=null,t!==null&&(l=i.deletions,l===null?(i.deletions=[t],i.flags|=16):l.push(t)),i.child=u,i.memoizedState=null,u}function $u(t,i){return i=ml({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function nl(t,i,l,u){return u!==null&&yu(u),Xr(i,t.child,null,l),t=$u(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Ow(t,i,l,u,d,f,g){if(l)return i.flags&256?(i.flags&=-257,u=zu(Error(n(422))),nl(t,i,g,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(f=u.fallback,d=i.mode,u=ml({mode:"visible",children:u.children},d,0,null),f=Sr(f,d,g,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,i.mode&1&&Xr(i,t.child,null,g),i.child.memoizedState=Hu(g),i.memoizedState=Vu,f);if(!(i.mode&1))return nl(t,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var v=u.dgst;return u=v,f=Error(n(419)),u=zu(f,u,void 0),nl(t,i,g,u)}if(v=(g&t.childLanes)!==0,ht||v){if(u=Ge,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|g)?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,dn(t,d),zt(u,t,d,-1))}return lc(),u=zu(Error(n(421))),nl(t,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=$w.bind(null,t),d._reactRetry=i,null):(t=f.treeContext,St=On(d.nextSibling),Et=i,Pe=!0,Mt=null,t!==null&&(It[kt++]=un,It[kt++]=cn,It[kt++]=hr,un=t.id,cn=t.overflow,hr=i),i=$u(i,u.children),i.flags|=4096,i)}function Dp(t,i,l){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Su(t.return,i,l)}function Gu(t,i,l,u,d){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=l,f.tailMode=d)}function Lp(t,i,l){var u=i.pendingProps,d=u.revealOrder,f=u.tail;if(st(t,i,u.children,l),u=xe.current,u&2)u=u&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dp(t,l,i);else if(t.tag===19)Dp(t,l,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Se(xe,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(l=i.child,d=null;l!==null;)t=l.alternate,t!==null&&Yo(t)===null&&(d=l),l=l.sibling;l=d,l===null?(d=i.child,i.child=null):(d=l.sibling,l.sibling=null),Gu(i,!1,d,l,f);break;case"backwards":for(l=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Yo(t)===null){i.child=d;break}t=d.sibling,d.sibling=l,l=d,d=t}Gu(i,!0,l,null,f);break;case"together":Gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function rl(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function hn(t,i,l){if(t!==null&&(i.dependencies=t.dependencies),yr|=i.lanes,!(l&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,l=Vn(t,t.pendingProps),i.child=l,l.return=i;t.sibling!==null;)t=t.sibling,l=l.sibling=Vn(t,t.pendingProps),l.return=i;l.sibling=null}return i.child}function Dw(t,i,l){switch(i.tag){case 3:xp(i),Jr();break;case 5:qh(i);break;case 1:ft(i.type)&&zo(i);break;case 4:ku(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Se($o,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Se(xe,xe.current&1),i.flags|=128,null):l&i.child.childLanes?Op(t,i,l):(Se(xe,xe.current&1),t=hn(t,i,l),t!==null?t.sibling:null);Se(xe,xe.current&1);break;case 19:if(u=(l&i.childLanes)!==0,t.flags&128){if(u)return Lp(t,i,l);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(xe,xe.current),u)break;return null;case 22:case 23:return i.lanes=0,Rp(t,i,l)}return hn(t,i,l)}var Mp,Ku,bp,Fp;Mp=function(t,i){for(var l=i.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ku=function(){},bp=function(t,i,l,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,gr(Qt.current);var f=null;switch(l){case"input":d=Sa(t,d),u=Sa(t,u),f=[];break;case"select":d=H({},d,{value:void 0}),u=H({},u,{value:void 0}),f=[];break;case"textarea":d=ka(t,d),u=ka(t,u),f=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=bo)}Ra(l,u);var g;l=null;for(R in d)if(!u.hasOwnProperty(R)&&d.hasOwnProperty(R)&&d[R]!=null)if(R==="style"){var v=d[R];for(g in v)v.hasOwnProperty(g)&&(l||(l={}),l[g]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(o.hasOwnProperty(R)?f||(f=[]):(f=f||[]).push(R,null));for(R in u){var E=u[R];if(v=d!=null?d[R]:void 0,u.hasOwnProperty(R)&&E!==v&&(E!=null||v!=null))if(R==="style")if(v){for(g in v)!v.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(l||(l={}),l[g]="");for(g in E)E.hasOwnProperty(g)&&v[g]!==E[g]&&(l||(l={}),l[g]=E[g])}else l||(f||(f=[]),f.push(R,l)),l=E;else R==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,v=v?v.__html:void 0,E!=null&&v!==E&&(f=f||[]).push(R,E)):R==="children"?typeof E!="string"&&typeof E!="number"||(f=f||[]).push(R,""+E):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(o.hasOwnProperty(R)?(E!=null&&R==="onScroll"&&ke("scroll",t),f||v===E||(f=[])):(f=f||[]).push(R,E))}l&&(f=f||[]).push("style",l);var R=f;(i.updateQueue=R)&&(i.flags|=4)}},Fp=function(t,i,l,u){l!==u&&(i.flags|=4)};function ds(t,i){if(!Pe)switch(t.tailMode){case"hidden":i=t.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,l=0,u=0;if(i)for(var d=t.child;d!==null;)l|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)l|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=l,i}function Lw(t,i,l){var u=i.pendingProps;switch(mu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return ft(i.type)&&Uo(),nt(i),null;case 3:return u=i.stateNode,ti(),Te(dt),Te(et),Pu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Vo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Mt!==null&&(ic(Mt),Mt=null))),Ku(t,i),nt(i),null;case 5:Tu(i);var d=gr(os.current);if(l=i.type,t!==null&&i.stateNode!=null)bp(t,i,l,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return nt(i),null}if(t=gr(Qt.current),Vo(i)){u=i.stateNode,l=i.type;var f=i.memoizedProps;switch(u[Yt]=i,u[ts]=f,t=(i.mode&1)!==0,l){case"dialog":ke("cancel",u),ke("close",u);break;case"iframe":case"object":case"embed":ke("load",u);break;case"video":case"audio":for(d=0;d<Xi.length;d++)ke(Xi[d],u);break;case"source":ke("error",u);break;case"img":case"image":case"link":ke("error",u),ke("load",u);break;case"details":ke("toggle",u);break;case"input":_f(u,f),ke("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},ke("invalid",u);break;case"textarea":wf(u,f),ke("invalid",u)}Ra(l,f),d=null;for(var g in f)if(f.hasOwnProperty(g)){var v=f[g];g==="children"?typeof v=="string"?u.textContent!==v&&(f.suppressHydrationWarning!==!0&&Mo(u.textContent,v,t),d=["children",v]):typeof v=="number"&&u.textContent!==""+v&&(f.suppressHydrationWarning!==!0&&Mo(u.textContent,v,t),d=["children",""+v]):o.hasOwnProperty(g)&&v!=null&&g==="onScroll"&&ke("scroll",u)}switch(l){case"input":fo(u),vf(u,f,!0);break;case"textarea":fo(u),Sf(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=bo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cf(l)),t==="http://www.w3.org/1999/xhtml"?l==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=g.createElement(l,{is:u.is}):(t=g.createElement(l),l==="select"&&(g=t,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):t=g.createElementNS(t,l),t[Yt]=i,t[ts]=u,Mp(t,i,!1,!1),i.stateNode=t;e:{switch(g=Pa(l,u),l){case"dialog":ke("cancel",t),ke("close",t),d=u;break;case"iframe":case"object":case"embed":ke("load",t),d=u;break;case"video":case"audio":for(d=0;d<Xi.length;d++)ke(Xi[d],t);d=u;break;case"source":ke("error",t),d=u;break;case"img":case"image":case"link":ke("error",t),ke("load",t),d=u;break;case"details":ke("toggle",t),d=u;break;case"input":_f(t,u),d=Sa(t,u),ke("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=H({},u,{value:void 0}),ke("invalid",t);break;case"textarea":wf(t,u),d=ka(t,u),ke("invalid",t);break;default:d=u}Ra(l,d),v=d;for(f in v)if(v.hasOwnProperty(f)){var E=v[f];f==="style"?Tf(t,E):f==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&If(t,E)):f==="children"?typeof E=="string"?(l!=="textarea"||E!=="")&&Di(t,E):typeof E=="number"&&Di(t,""+E):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?E!=null&&f==="onScroll"&&ke("scroll",t):E!=null&&B(t,f,E,g))}switch(l){case"input":fo(t),vf(t,u,!1);break;case"textarea":fo(t),Sf(t);break;case"option":u.value!=null&&t.setAttribute("value",""+pe(u.value));break;case"select":t.multiple=!!u.multiple,f=u.value,f!=null?br(t,!!u.multiple,f,!1):u.defaultValue!=null&&br(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=bo)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return nt(i),null;case 6:if(t&&i.stateNode!=null)Fp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(l=gr(os.current),gr(Qt.current),Vo(i)){if(u=i.stateNode,l=i.memoizedProps,u[Yt]=i,(f=u.nodeValue!==l)&&(t=Et,t!==null))switch(t.tag){case 3:Mo(u.nodeValue,l,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(u.nodeValue,l,(t.mode&1)!==0)}f&&(i.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Yt]=i,i.stateNode=u}return nt(i),null;case 13:if(Te(xe),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&St!==null&&i.mode&1&&!(i.flags&128))jh(),Jr(),i.flags|=98560,f=!1;else if(f=Vo(i),u!==null&&u.dehydrated!==null){if(t===null){if(!f)throw Error(n(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(n(317));f[Yt]=i}else Jr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;nt(i),f=!1}else Mt!==null&&(ic(Mt),Mt=null),f=!0;if(!f)return i.flags&65536?i:null}return i.flags&128?(i.lanes=l,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(t===null||xe.current&1?Be===0&&(Be=3):lc())),i.updateQueue!==null&&(i.flags|=4),nt(i),null);case 4:return ti(),Ku(t,i),t===null&&Zi(i.stateNode.containerInfo),nt(i),null;case 10:return Eu(i.type._context),nt(i),null;case 17:return ft(i.type)&&Uo(),nt(i),null;case 19:if(Te(xe),f=i.memoizedState,f===null)return nt(i),null;if(u=(i.flags&128)!==0,g=f.rendering,g===null)if(u)ds(f,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(g=Yo(t),g!==null){for(i.flags|=128,ds(f,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=l,l=i.child;l!==null;)f=l,t=u,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,t=g.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l=l.sibling;return Se(xe,xe.current&1|2),i.child}t=t.sibling}f.tail!==null&&Fe()>si&&(i.flags|=128,u=!0,ds(f,!1),i.lanes=4194304)}else{if(!u)if(t=Yo(g),t!==null){if(i.flags|=128,u=!0,l=t.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),ds(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Pe)return nt(i),null}else 2*Fe()-f.renderingStartTime>si&&l!==1073741824&&(i.flags|=128,u=!0,ds(f,!1),i.lanes=4194304);f.isBackwards?(g.sibling=i.child,i.child=g):(l=f.last,l!==null?l.sibling=g:i.child=g,f.last=g)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Fe(),i.sibling=null,l=xe.current,Se(xe,u?l&1|2:l&1),i):(nt(i),null);case 22:case 23:return oc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Ct&1073741824&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Mw(t,i){switch(mu(i),i.tag){case 1:return ft(i.type)&&Uo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ti(),Te(dt),Te(et),Pu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Tu(i),null;case 13:if(Te(xe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Jr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Te(xe),null;case 4:return ti(),null;case 10:return Eu(i.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var il=!1,rt=!1,bw=typeof WeakSet=="function"?WeakSet:Set,V=null;function ri(t,i){var l=t.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){Le(t,i,u)}else l.current=null}function qu(t,i,l){try{l()}catch(u){Le(t,i,u)}}var Up=!1;function Fw(t,i){if(ou=Io,t=gh(),Xa(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else e:{l=(l=t.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var d=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{l.nodeType,f.nodeType}catch{l=null;break e}var g=0,v=-1,E=-1,R=0,D=0,M=t,A=null;t:for(;;){for(var W;M!==l||d!==0&&M.nodeType!==3||(v=g+d),M!==f||u!==0&&M.nodeType!==3||(E=g+u),M.nodeType===3&&(g+=M.nodeValue.length),(W=M.firstChild)!==null;)A=M,M=W;for(;;){if(M===t)break t;if(A===l&&++R===d&&(v=g),A===f&&++D===u&&(E=g),(W=M.nextSibling)!==null)break;M=A,A=M.parentNode}M=W}l=v===-1||E===-1?null:{start:v,end:E}}else l=null}l=l||{start:0,end:0}}else l=null;for(lu={focusedElem:t,selectionRange:l},Io=!1,V=i;V!==null;)if(i=V,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,V=t;else for(;V!==null;){i=V;try{var $=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if($!==null){var G=$.memoizedProps,Ue=$.memoizedState,I=i.stateNode,S=I.getSnapshotBeforeUpdate(i.elementType===i.type?G:bt(i.type,G),Ue);I.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var k=i.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(F){Le(i,i.return,F)}if(t=i.sibling,t!==null){t.return=i.return,V=t;break}V=i.return}return $=Up,Up=!1,$}function fs(t,i,l){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var f=d.destroy;d.destroy=void 0,f!==void 0&&qu(i,l,f)}d=d.next}while(d!==u)}}function sl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&t)===t){var u=l.create;l.destroy=u()}l=l.next}while(l!==i)}}function Yu(t){var i=t.ref;if(i!==null){var l=t.stateNode;switch(t.tag){case 5:t=l;break;default:t=l}typeof i=="function"?i(t):i.current=t}}function zp(t){var i=t.alternate;i!==null&&(t.alternate=null,zp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Yt],delete i[ts],delete i[du],delete i[vw],delete i[ww])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jp(t){return t.tag===5||t.tag===3||t.tag===4}function Wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,i,l){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?l.nodeType===8?l.parentNode.insertBefore(t,i):l.insertBefore(t,i):(l.nodeType===8?(i=l.parentNode,i.insertBefore(t,l)):(i=l,i.appendChild(t)),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=bo));else if(u!==4&&(t=t.child,t!==null))for(Qu(t,i,l),t=t.sibling;t!==null;)Qu(t,i,l),t=t.sibling}function Ju(t,i,l){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?l.insertBefore(t,i):l.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Ju(t,i,l),t=t.sibling;t!==null;)Ju(t,i,l),t=t.sibling}var Qe=null,Ft=!1;function Un(t,i,l){for(l=l.child;l!==null;)Bp(t,i,l),l=l.sibling}function Bp(t,i,l){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(yo,l)}catch{}switch(l.tag){case 5:rt||ri(l,i);case 6:var u=Qe,d=Ft;Qe=null,Un(t,i,l),Qe=u,Ft=d,Qe!==null&&(Ft?(t=Qe,l=l.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)):Qe.removeChild(l.stateNode));break;case 18:Qe!==null&&(Ft?(t=Qe,l=l.stateNode,t.nodeType===8?cu(t.parentNode,l):t.nodeType===1&&cu(t,l),Hi(t)):cu(Qe,l.stateNode));break;case 4:u=Qe,d=Ft,Qe=l.stateNode.containerInfo,Ft=!0,Un(t,i,l),Qe=u,Ft=d;break;case 0:case 11:case 14:case 15:if(!rt&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var f=d,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&qu(l,i,g),d=d.next}while(d!==u)}Un(t,i,l);break;case 1:if(!rt&&(ri(l,i),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(v){Le(l,i,v)}Un(t,i,l);break;case 21:Un(t,i,l);break;case 22:l.mode&1?(rt=(u=rt)||l.memoizedState!==null,Un(t,i,l),rt=u):Un(t,i,l);break;default:Un(t,i,l)}}function Vp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var l=t.stateNode;l===null&&(l=t.stateNode=new bw),i.forEach(function(u){var d=Gw.bind(null,t,u);l.has(u)||(l.add(u),u.then(d,d))})}}function Ut(t,i){var l=i.deletions;if(l!==null)for(var u=0;u<l.length;u++){var d=l[u];try{var f=t,g=i,v=g;e:for(;v!==null;){switch(v.tag){case 5:Qe=v.stateNode,Ft=!1;break e;case 3:Qe=v.stateNode.containerInfo,Ft=!0;break e;case 4:Qe=v.stateNode.containerInfo,Ft=!0;break e}v=v.return}if(Qe===null)throw Error(n(160));Bp(f,g,d),Qe=null,Ft=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(R){Le(d,i,R)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hp(i,t),i=i.sibling}function Hp(t,i){var l=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(i,t),Xt(t),u&4){try{fs(3,t,t.return),sl(3,t)}catch(G){Le(t,t.return,G)}try{fs(5,t,t.return)}catch(G){Le(t,t.return,G)}}break;case 1:Ut(i,t),Xt(t),u&512&&l!==null&&ri(l,l.return);break;case 5:if(Ut(i,t),Xt(t),u&512&&l!==null&&ri(l,l.return),t.flags&32){var d=t.stateNode;try{Di(d,"")}catch(G){Le(t,t.return,G)}}if(u&4&&(d=t.stateNode,d!=null)){var f=t.memoizedProps,g=l!==null?l.memoizedProps:f,v=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{v==="input"&&f.type==="radio"&&f.name!=null&&yf(d,f),Pa(v,g);var R=Pa(v,f);for(g=0;g<E.length;g+=2){var D=E[g],M=E[g+1];D==="style"?Tf(d,M):D==="dangerouslySetInnerHTML"?If(d,M):D==="children"?Di(d,M):B(d,D,M,R)}switch(v){case"input":Ca(d,f);break;case"textarea":Ef(d,f);break;case"select":var A=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var W=f.value;W!=null?br(d,!!f.multiple,W,!1):A!==!!f.multiple&&(f.defaultValue!=null?br(d,!!f.multiple,f.defaultValue,!0):br(d,!!f.multiple,f.multiple?[]:"",!1))}d[ts]=f}catch(G){Le(t,t.return,G)}}break;case 6:if(Ut(i,t),Xt(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,f=t.memoizedProps;try{d.nodeValue=f}catch(G){Le(t,t.return,G)}}break;case 3:if(Ut(i,t),Xt(t),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Hi(i.containerInfo)}catch(G){Le(t,t.return,G)}break;case 4:Ut(i,t),Xt(t);break;case 13:Ut(i,t),Xt(t),d=t.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(ec=Fe())),u&4&&Vp(t);break;case 22:if(D=l!==null&&l.memoizedState!==null,t.mode&1?(rt=(R=rt)||D,Ut(i,t),rt=R):Ut(i,t),Xt(t),u&8192){if(R=t.memoizedState!==null,(t.stateNode.isHidden=R)&&!D&&t.mode&1)for(V=t,D=t.child;D!==null;){for(M=V=D;V!==null;){switch(A=V,W=A.child,A.tag){case 0:case 11:case 14:case 15:fs(4,A,A.return);break;case 1:ri(A,A.return);var $=A.stateNode;if(typeof $.componentWillUnmount=="function"){u=A,l=A.return;try{i=u,$.props=i.memoizedProps,$.state=i.memoizedState,$.componentWillUnmount()}catch(G){Le(u,l,G)}}break;case 5:ri(A,A.return);break;case 22:if(A.memoizedState!==null){Kp(M);continue}}W!==null?(W.return=A,V=W):Kp(M)}D=D.sibling}e:for(D=null,M=t;;){if(M.tag===5){if(D===null){D=M;try{d=M.stateNode,R?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(v=M.stateNode,E=M.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,v.style.display=kf("display",g))}catch(G){Le(t,t.return,G)}}}else if(M.tag===6){if(D===null)try{M.stateNode.nodeValue=R?"":M.memoizedProps}catch(G){Le(t,t.return,G)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===t)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===t)break e;for(;M.sibling===null;){if(M.return===null||M.return===t)break e;D===M&&(D=null),M=M.return}D===M&&(D=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:Ut(i,t),Xt(t),u&4&&Vp(t);break;case 21:break;default:Ut(i,t),Xt(t)}}function Xt(t){var i=t.flags;if(i&2){try{e:{for(var l=t.return;l!==null;){if(jp(l)){var u=l;break e}l=l.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Di(d,""),u.flags&=-33);var f=Wp(t);Ju(t,f,d);break;case 3:case 4:var g=u.stateNode.containerInfo,v=Wp(t);Qu(t,v,g);break;default:throw Error(n(161))}}catch(E){Le(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Uw(t,i,l){V=t,$p(t)}function $p(t,i,l){for(var u=(t.mode&1)!==0;V!==null;){var d=V,f=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||il;if(!g){var v=d.alternate,E=v!==null&&v.memoizedState!==null||rt;v=il;var R=rt;if(il=g,(rt=E)&&!R)for(V=d;V!==null;)g=V,E=g.child,g.tag===22&&g.memoizedState!==null?qp(d):E!==null?(E.return=g,V=E):qp(d);for(;f!==null;)V=f,$p(f),f=f.sibling;V=d,il=v,rt=R}Gp(t)}else d.subtreeFlags&8772&&f!==null?(f.return=d,V=f):Gp(t)}}function Gp(t){for(;V!==null;){var i=V;if(i.flags&8772){var l=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:rt||sl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!rt)if(l===null)u.componentDidMount();else{var d=i.elementType===i.type?l.memoizedProps:bt(i.type,l.memoizedProps);u.componentDidUpdate(d,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Kh(i,f,u);break;case 3:var g=i.updateQueue;if(g!==null){if(l=null,i.child!==null)switch(i.child.tag){case 5:l=i.child.stateNode;break;case 1:l=i.child.stateNode}Kh(i,g,l)}break;case 5:var v=i.stateNode;if(l===null&&i.flags&4){l=v;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&l.focus();break;case"img":E.src&&(l.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var R=i.alternate;if(R!==null){var D=R.memoizedState;if(D!==null){var M=D.dehydrated;M!==null&&Hi(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}rt||i.flags&512&&Yu(i)}catch(A){Le(i,i.return,A)}}if(i===t){V=null;break}if(l=i.sibling,l!==null){l.return=i.return,V=l;break}V=i.return}}function Kp(t){for(;V!==null;){var i=V;if(i===t){V=null;break}var l=i.sibling;if(l!==null){l.return=i.return,V=l;break}V=i.return}}function qp(t){for(;V!==null;){var i=V;try{switch(i.tag){case 0:case 11:case 15:var l=i.return;try{sl(4,i)}catch(E){Le(i,l,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){Le(i,d,E)}}var f=i.return;try{Yu(i)}catch(E){Le(i,f,E)}break;case 5:var g=i.return;try{Yu(i)}catch(E){Le(i,g,E)}}}catch(E){Le(i,i.return,E)}if(i===t){V=null;break}var v=i.sibling;if(v!==null){v.return=i.return,V=v;break}V=i.return}}var zw=Math.ceil,ol=te.ReactCurrentDispatcher,Xu=te.ReactCurrentOwner,Pt=te.ReactCurrentBatchConfig,ae=0,Ge=null,je=null,Je=0,Ct=0,ii=Dn(0),Be=0,hs=null,yr=0,ll=0,Zu=0,ps=null,pt=null,ec=0,si=1/0,pn=null,al=!1,tc=null,zn=null,ul=!1,jn=null,cl=0,ms=0,nc=null,dl=-1,fl=0;function ot(){return ae&6?Fe():dl!==-1?dl:dl=Fe()}function Wn(t){return t.mode&1?ae&2&&Je!==0?Je&-Je:Sw.transition!==null?(fl===0&&(fl=Wf()),fl):(t=me,t!==0||(t=window.event,t=t===void 0?16:Qf(t.type)),t):1}function zt(t,i,l,u){if(50<ms)throw ms=0,nc=null,Error(n(185));zi(t,l,u),(!(ae&2)||t!==Ge)&&(t===Ge&&(!(ae&2)&&(ll|=l),Be===4&&Bn(t,Je)),mt(t,u),l===1&&ae===0&&!(i.mode&1)&&(si=Fe()+500,jo&&Mn()))}function mt(t,i){var l=t.callbackNode;Sv(t,i);var u=Eo(t,t===Ge?Je:0);if(u===0)l!==null&&Uf(l),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(l!=null&&Uf(l),i===1)t.tag===0?Ew(Qp.bind(null,t)):Mh(Qp.bind(null,t)),_w(function(){!(ae&6)&&Mn()}),l=null;else{switch(Bf(u)){case 1:l=Ma;break;case 4:l=zf;break;case 16:l=_o;break;case 536870912:l=jf;break;default:l=_o}l=im(l,Yp.bind(null,t))}t.callbackPriority=i,t.callbackNode=l}}function Yp(t,i){if(dl=-1,fl=0,ae&6)throw Error(n(327));var l=t.callbackNode;if(oi()&&t.callbackNode!==l)return null;var u=Eo(t,t===Ge?Je:0);if(u===0)return null;if(u&30||u&t.expiredLanes||i)i=hl(t,u);else{i=u;var d=ae;ae|=2;var f=Xp();(Ge!==t||Je!==i)&&(pn=null,si=Fe()+500,wr(t,i));do try{Bw();break}catch(v){Jp(t,v)}while(!0);wu(),ol.current=f,ae=d,je!==null?i=0:(Ge=null,Je=0,i=Be)}if(i!==0){if(i===2&&(d=ba(t),d!==0&&(u=d,i=rc(t,d))),i===1)throw l=hs,wr(t,0),Bn(t,u),mt(t,Fe()),l;if(i===6)Bn(t,u);else{if(d=t.current.alternate,!(u&30)&&!jw(d)&&(i=hl(t,u),i===2&&(f=ba(t),f!==0&&(u=f,i=rc(t,f))),i===1))throw l=hs,wr(t,0),Bn(t,u),mt(t,Fe()),l;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Er(t,pt,pn);break;case 3:if(Bn(t,u),(u&130023424)===u&&(i=ec+500-Fe(),10<i)){if(Eo(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){ot(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=uu(Er.bind(null,t,pt,pn),i);break}Er(t,pt,pn);break;case 4:if(Bn(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var g=31-Dt(u);f=1<<g,g=i[g],g>d&&(d=g),u&=~f}if(u=d,u=Fe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*zw(u/1960))-u,10<u){t.timeoutHandle=uu(Er.bind(null,t,pt,pn),u);break}Er(t,pt,pn);break;case 5:Er(t,pt,pn);break;default:throw Error(n(329))}}}return mt(t,Fe()),t.callbackNode===l?Yp.bind(null,t):null}function rc(t,i){var l=ps;return t.current.memoizedState.isDehydrated&&(wr(t,i).flags|=256),t=hl(t,i),t!==2&&(i=pt,pt=l,i!==null&&ic(i)),t}function ic(t){pt===null?pt=t:pt.push.apply(pt,t)}function jw(t){for(var i=t;;){if(i.flags&16384){var l=i.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var d=l[u],f=d.getSnapshot;d=d.value;try{if(!Lt(f(),d))return!1}catch{return!1}}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bn(t,i){for(i&=~Zu,i&=~ll,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var l=31-Dt(i),u=1<<l;t[l]=-1,i&=~u}}function Qp(t){if(ae&6)throw Error(n(327));oi();var i=Eo(t,0);if(!(i&1))return mt(t,Fe()),null;var l=hl(t,i);if(t.tag!==0&&l===2){var u=ba(t);u!==0&&(i=u,l=rc(t,u))}if(l===1)throw l=hs,wr(t,0),Bn(t,i),mt(t,Fe()),l;if(l===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Er(t,pt,pn),mt(t,Fe()),null}function sc(t,i){var l=ae;ae|=1;try{return t(i)}finally{ae=l,ae===0&&(si=Fe()+500,jo&&Mn())}}function vr(t){jn!==null&&jn.tag===0&&!(ae&6)&&oi();var i=ae;ae|=1;var l=Pt.transition,u=me;try{if(Pt.transition=null,me=1,t)return t()}finally{me=u,Pt.transition=l,ae=i,!(ae&6)&&Mn()}}function oc(){Ct=ii.current,Te(ii)}function wr(t,i){t.finishedWork=null,t.finishedLanes=0;var l=t.timeoutHandle;if(l!==-1&&(t.timeoutHandle=-1,gw(l)),je!==null)for(l=je.return;l!==null;){var u=l;switch(mu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Uo();break;case 3:ti(),Te(dt),Te(et),Pu();break;case 5:Tu(u);break;case 4:ti();break;case 13:Te(xe);break;case 19:Te(xe);break;case 10:Eu(u.type._context);break;case 22:case 23:oc()}l=l.return}if(Ge=t,je=t=Vn(t.current,null),Je=Ct=i,Be=0,hs=null,Zu=ll=yr=0,pt=ps=null,mr!==null){for(i=0;i<mr.length;i++)if(l=mr[i],u=l.interleaved,u!==null){l.interleaved=null;var d=u.next,f=l.pending;if(f!==null){var g=f.next;f.next=d,u.next=g}l.pending=u}mr=null}return t}function Jp(t,i){do{var l=je;try{if(wu(),Qo.current=el,Jo){for(var u=Ae.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Jo=!1}if(_r=0,$e=We=Ae=null,ls=!1,as=0,Xu.current=null,l===null||l.return===null){Be=1,hs=i,je=null;break}e:{var f=t,g=l.return,v=l,E=i;if(i=Je,v.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var R=E,D=v,M=D.tag;if(!(D.mode&1)&&(M===0||M===11||M===15)){var A=D.alternate;A?(D.updateQueue=A.updateQueue,D.memoizedState=A.memoizedState,D.lanes=A.lanes):(D.updateQueue=null,D.memoizedState=null)}var W=Sp(g);if(W!==null){W.flags&=-257,Cp(W,g,v,f,i),W.mode&1&&Ep(f,R,i),i=W,E=R;var $=i.updateQueue;if($===null){var G=new Set;G.add(E),i.updateQueue=G}else $.add(E);break e}else{if(!(i&1)){Ep(f,R,i),lc();break e}E=Error(n(426))}}else if(Pe&&v.mode&1){var Ue=Sp(g);if(Ue!==null){!(Ue.flags&65536)&&(Ue.flags|=256),Cp(Ue,g,v,f,i),yu(ni(E,v));break e}}f=E=ni(E,v),Be!==4&&(Be=2),ps===null?ps=[f]:ps.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var I=vp(f,E,i);Gh(f,I);break e;case 1:v=E;var S=f.type,k=f.stateNode;if(!(f.flags&128)&&(typeof S.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(zn===null||!zn.has(k)))){f.flags|=65536,i&=-i,f.lanes|=i;var F=wp(f,v,i);Gh(f,F);break e}}f=f.return}while(f!==null)}em(l)}catch(K){i=K,je===l&&l!==null&&(je=l=l.return);continue}break}while(!0)}function Xp(){var t=ol.current;return ol.current=el,t===null?el:t}function lc(){(Be===0||Be===3||Be===2)&&(Be=4),Ge===null||!(yr&268435455)&&!(ll&268435455)||Bn(Ge,Je)}function hl(t,i){var l=ae;ae|=2;var u=Xp();(Ge!==t||Je!==i)&&(pn=null,wr(t,i));do try{Ww();break}catch(d){Jp(t,d)}while(!0);if(wu(),ae=l,ol.current=u,je!==null)throw Error(n(261));return Ge=null,Je=0,Be}function Ww(){for(;je!==null;)Zp(je)}function Bw(){for(;je!==null&&!hv();)Zp(je)}function Zp(t){var i=rm(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,i===null?em(t):je=i,Xu.current=null}function em(t){var i=t;do{var l=i.alternate;if(t=i.return,i.flags&32768){if(l=Mw(l,i),l!==null){l.flags&=32767,je=l;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,je=null;return}}else if(l=Lw(l,i,Ct),l!==null){je=l;return}if(i=i.sibling,i!==null){je=i;return}je=i=t}while(i!==null);Be===0&&(Be=5)}function Er(t,i,l){var u=me,d=Pt.transition;try{Pt.transition=null,me=1,Vw(t,i,l,u)}finally{Pt.transition=d,me=u}return null}function Vw(t,i,l,u){do oi();while(jn!==null);if(ae&6)throw Error(n(327));l=t.finishedWork;var d=t.finishedLanes;if(l===null)return null;if(t.finishedWork=null,t.finishedLanes=0,l===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var f=l.lanes|l.childLanes;if(Cv(t,f),t===Ge&&(je=Ge=null,Je=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||ul||(ul=!0,im(_o,function(){return oi(),null})),f=(l.flags&15990)!==0,l.subtreeFlags&15990||f){f=Pt.transition,Pt.transition=null;var g=me;me=1;var v=ae;ae|=4,Xu.current=null,Fw(t,l),Hp(l,t),uw(lu),Io=!!ou,lu=ou=null,t.current=l,Uw(l),pv(),ae=v,me=g,Pt.transition=f}else t.current=l;if(ul&&(ul=!1,jn=t,cl=d),f=t.pendingLanes,f===0&&(zn=null),_v(l.stateNode),mt(t,Fe()),i!==null)for(u=t.onRecoverableError,l=0;l<i.length;l++)d=i[l],u(d.value,{componentStack:d.stack,digest:d.digest});if(al)throw al=!1,t=tc,tc=null,t;return cl&1&&t.tag!==0&&oi(),f=t.pendingLanes,f&1?t===nc?ms++:(ms=0,nc=t):ms=0,Mn(),null}function oi(){if(jn!==null){var t=Bf(cl),i=Pt.transition,l=me;try{if(Pt.transition=null,me=16>t?16:t,jn===null)var u=!1;else{if(t=jn,jn=null,cl=0,ae&6)throw Error(n(331));var d=ae;for(ae|=4,V=t.current;V!==null;){var f=V,g=f.child;if(V.flags&16){var v=f.deletions;if(v!==null){for(var E=0;E<v.length;E++){var R=v[E];for(V=R;V!==null;){var D=V;switch(D.tag){case 0:case 11:case 15:fs(8,D,f)}var M=D.child;if(M!==null)M.return=D,V=M;else for(;V!==null;){D=V;var A=D.sibling,W=D.return;if(zp(D),D===R){V=null;break}if(A!==null){A.return=W,V=A;break}V=W}}}var $=f.alternate;if($!==null){var G=$.child;if(G!==null){$.child=null;do{var Ue=G.sibling;G.sibling=null,G=Ue}while(G!==null)}}V=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,V=g;else e:for(;V!==null;){if(f=V,f.flags&2048)switch(f.tag){case 0:case 11:case 15:fs(9,f,f.return)}var I=f.sibling;if(I!==null){I.return=f.return,V=I;break e}V=f.return}}var S=t.current;for(V=S;V!==null;){g=V;var k=g.child;if(g.subtreeFlags&2064&&k!==null)k.return=g,V=k;else e:for(g=S;V!==null;){if(v=V,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:sl(9,v)}}catch(K){Le(v,v.return,K)}if(v===g){V=null;break e}var F=v.sibling;if(F!==null){F.return=v.return,V=F;break e}V=v.return}}if(ae=d,Mn(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(yo,t)}catch{}u=!0}return u}finally{me=l,Pt.transition=i}}return!1}function tm(t,i,l){i=ni(l,i),i=vp(t,i,1),t=Fn(t,i,1),i=ot(),t!==null&&(zi(t,1,i),mt(t,i))}function Le(t,i,l){if(t.tag===3)tm(t,t,l);else for(;i!==null;){if(i.tag===3){tm(i,t,l);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(zn===null||!zn.has(u))){t=ni(l,t),t=wp(i,t,1),i=Fn(i,t,1),t=ot(),i!==null&&(zi(i,1,t),mt(i,t));break}}i=i.return}}function Hw(t,i,l){var u=t.pingCache;u!==null&&u.delete(i),i=ot(),t.pingedLanes|=t.suspendedLanes&l,Ge===t&&(Je&l)===l&&(Be===4||Be===3&&(Je&130023424)===Je&&500>Fe()-ec?wr(t,0):Zu|=l),mt(t,i)}function nm(t,i){i===0&&(t.mode&1?(i=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):i=1);var l=ot();t=dn(t,i),t!==null&&(zi(t,i,l),mt(t,l))}function $w(t){var i=t.memoizedState,l=0;i!==null&&(l=i.retryLane),nm(t,l)}function Gw(t,i){var l=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(l=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),nm(t,l)}var rm;rm=function(t,i,l){if(t!==null)if(t.memoizedProps!==i.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&l)&&!(i.flags&128))return ht=!1,Dw(t,i,l);ht=!!(t.flags&131072)}else ht=!1,Pe&&i.flags&1048576&&bh(i,Bo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;rl(t,i),t=i.pendingProps;var d=qr(i,et.current);ei(i,l),d=Au(null,i,u,t,d,l);var f=Ou();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ft(u)?(f=!0,zo(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Iu(i),d.updater=tl,i.stateNode=d,d._reactInternals=i,Uu(i,u,t,l),i=Bu(null,i,u,!0,f,l)):(i.tag=0,Pe&&f&&pu(i),st(null,i,d,l),i=i.child),i;case 16:u=i.elementType;e:{switch(rl(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=qw(u),t=bt(u,t),d){case 0:i=Wu(null,i,u,t,l);break e;case 1:i=Np(null,i,u,t,l);break e;case 11:i=Ip(null,i,u,t,l);break e;case 14:i=kp(null,i,u,bt(u.type,t),l);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),Wu(t,i,u,d,l);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),Np(t,i,u,d,l);case 3:e:{if(xp(i),t===null)throw Error(n(387));u=i.pendingProps,f=i.memoizedState,d=f.element,$h(t,i),qo(i,u,null,l);var g=i.memoizedState;if(u=g.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=ni(Error(n(423)),i),i=Ap(t,i,u,l,d);break e}else if(u!==d){d=ni(Error(n(424)),i),i=Ap(t,i,u,l,d);break e}else for(St=On(i.stateNode.containerInfo.firstChild),Et=i,Pe=!0,Mt=null,l=Vh(i,null,u,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Jr(),u===d){i=hn(t,i,l);break e}st(t,i,u,l)}i=i.child}return i;case 5:return qh(i),t===null&&_u(i),u=i.type,d=i.pendingProps,f=t!==null?t.memoizedProps:null,g=d.children,au(u,d)?g=null:f!==null&&au(u,f)&&(i.flags|=32),Pp(t,i),st(t,i,g,l),i.child;case 6:return t===null&&_u(i),null;case 13:return Op(t,i,l);case 4:return ku(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Xr(i,null,u,l):st(t,i,u,l),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),Ip(t,i,u,d,l);case 7:return st(t,i,i.pendingProps,l),i.child;case 8:return st(t,i,i.pendingProps.children,l),i.child;case 12:return st(t,i,i.pendingProps.children,l),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,f=i.memoizedProps,g=d.value,Se($o,u._currentValue),u._currentValue=g,f!==null)if(Lt(f.value,g)){if(f.children===d.children&&!dt.current){i=hn(t,i,l);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var v=f.dependencies;if(v!==null){g=f.child;for(var E=v.firstContext;E!==null;){if(E.context===u){if(f.tag===1){E=fn(-1,l&-l),E.tag=2;var R=f.updateQueue;if(R!==null){R=R.shared;var D=R.pending;D===null?E.next=E:(E.next=D.next,D.next=E),R.pending=E}}f.lanes|=l,E=f.alternate,E!==null&&(E.lanes|=l),Su(f.return,l,i),v.lanes|=l;break}E=E.next}}else if(f.tag===10)g=f.type===i.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(n(341));g.lanes|=l,v=g.alternate,v!==null&&(v.lanes|=l),Su(g,l,i),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===i){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}st(t,i,d.children,l),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ei(i,l),d=Tt(d),u=u(d),i.flags|=1,st(t,i,u,l),i.child;case 14:return u=i.type,d=bt(u,i.pendingProps),d=bt(u.type,d),kp(t,i,u,d,l);case 15:return Tp(t,i,i.type,i.pendingProps,l);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),rl(t,i),i.tag=1,ft(u)?(t=!0,zo(i)):t=!1,ei(i,l),_p(i,u,d),Uu(i,u,d,l),Bu(null,i,u,!0,t,l);case 19:return Lp(t,i,l);case 22:return Rp(t,i,l)}throw Error(n(156,i.tag))};function im(t,i){return Ff(t,i)}function Kw(t,i,l,u){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,i,l,u){return new Kw(t,i,l,u)}function ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qw(t){if(typeof t=="function")return ac(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gt)return 11;if(t===Kt)return 14}return 2}function Vn(t,i){var l=t.alternate;return l===null?(l=Nt(t.tag,i,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=i,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&14680064,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,i=t.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l}function pl(t,i,l,u,d,f){var g=2;if(u=t,typeof t=="function")ac(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case ve:return Sr(l.children,d,f,i);case Oe:g=8,d|=8;break;case we:return t=Nt(12,l,i,d|2),t.elementType=we,t.lanes=f,t;case yt:return t=Nt(13,l,i,d),t.elementType=yt,t.lanes=f,t;case Ot:return t=Nt(19,l,i,d),t.elementType=Ot,t.lanes=f,t;case De:return ml(l,d,f,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ze:g=10;break e;case $t:g=9;break e;case Gt:g=11;break e;case Kt:g=14;break e;case ct:g=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Nt(g,l,i,d),i.elementType=t,i.type=u,i.lanes=f,i}function Sr(t,i,l,u){return t=Nt(7,t,u,i),t.lanes=l,t}function ml(t,i,l,u){return t=Nt(22,t,u,i),t.elementType=De,t.lanes=l,t.stateNode={isHidden:!1},t}function uc(t,i,l){return t=Nt(6,t,null,i),t.lanes=l,t}function cc(t,i,l){return i=Nt(4,t.children!==null?t.children:[],t.key,i),i.lanes=l,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Yw(t,i,l,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fa(0),this.expirationTimes=Fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fa(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function dc(t,i,l,u,d,f,g,v,E){return t=new Yw(t,i,l,v,E),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Nt(3,null,null,i),t.current=f,f.stateNode=t,f.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(f),t}function Qw(t,i,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:u==null?null:""+u,children:t,containerInfo:i,implementation:l}}function sm(t){if(!t)return Ln;t=t._reactInternals;e:{if(cr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ft(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var l=t.type;if(ft(l))return Dh(t,l,i)}return i}function om(t,i,l,u,d,f,g,v,E){return t=dc(l,u,!0,t,d,f,g,v,E),t.context=sm(null),l=t.current,u=ot(),d=Wn(l),f=fn(u,d),f.callback=i??null,Fn(l,f,d),t.current.lanes=d,zi(t,d,u),mt(t,u),t}function gl(t,i,l,u){var d=i.current,f=ot(),g=Wn(d);return l=sm(l),i.context===null?i.context=l:i.pendingContext=l,i=fn(f,g),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Fn(d,i,g),t!==null&&(zt(t,d,g,f),Ko(t,d,g)),g}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lm(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<i?l:i}}function fc(t,i){lm(t,i),(t=t.alternate)&&lm(t,i)}var am=typeof reportError=="function"?reportError:function(t){console.error(t)};function hc(t){this._internalRoot=t}yl.prototype.render=hc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));gl(t,i,null,null)},yl.prototype.unmount=hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;vr(function(){gl(null,t,null,null)}),i[ln]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var i=$f();t={blockedOn:null,target:t,priority:i};for(var l=0;l<Nn.length&&i!==0&&i<Nn[l].priority;l++);Nn.splice(l,0,t),l===0&&qf(t)}};function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function um(){}function Jw(t,i,l,u,d){if(d){if(typeof u=="function"){var f=u;u=function(){var R=_l(g);f.call(R)}}var g=om(i,u,t,0,null,!1,!1,"",um);return t._reactRootContainer=g,t[ln]=g.current,Zi(t.nodeType===8?t.parentNode:t),vr(),g}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var v=u;u=function(){var R=_l(E);v.call(R)}}var E=dc(t,0,!1,null,null,!1,!1,"",um);return t._reactRootContainer=E,t[ln]=E.current,Zi(t.nodeType===8?t.parentNode:t),vr(function(){gl(i,E,l,u)}),E}function wl(t,i,l,u,d){var f=l._reactRootContainer;if(f){var g=f;if(typeof d=="function"){var v=d;d=function(){var E=_l(g);v.call(E)}}gl(i,g,t,d)}else g=Jw(l,i,t,d,u);return _l(g)}Vf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var l=Ui(i.pendingLanes);l!==0&&(Ua(i,l|1),mt(i,Fe()),!(ae&6)&&(si=Fe()+500,Mn()))}break;case 13:vr(function(){var u=dn(t,1);if(u!==null){var d=ot();zt(u,t,1,d)}}),fc(t,1)}},za=function(t){if(t.tag===13){var i=dn(t,134217728);if(i!==null){var l=ot();zt(i,t,134217728,l)}fc(t,134217728)}},Hf=function(t){if(t.tag===13){var i=Wn(t),l=dn(t,i);if(l!==null){var u=ot();zt(l,t,i,u)}fc(t,i)}},$f=function(){return me},Gf=function(t,i){var l=me;try{return me=t,i()}finally{me=l}},Aa=function(t,i,l){switch(i){case"input":if(Ca(t,l),i=l.name,l.type==="radio"&&i!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<l.length;i++){var u=l[i];if(u!==t&&u.form===t.form){var d=Fo(u);if(!d)throw Error(n(90));gf(u),Ca(u,d)}}}break;case"textarea":Ef(t,l);break;case"select":i=l.value,i!=null&&br(t,!!l.multiple,i,!1)}},xf=sc,Af=vr;var Xw={usingClientEntryPoint:!1,Events:[ns,Gr,Fo,Pf,Nf,sc]},gs={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zw={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mf(t),t===null?null:t.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{yo=El.inject(Zw),qt=El}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xw,gt.createPortal=function(t,i){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(i))throw Error(n(200));return Qw(t,i,null,l)},gt.createRoot=function(t,i){if(!pc(t))throw Error(n(299));var l=!1,u="",d=am;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=dc(t,1,!1,null,null,l,!1,u,d),t[ln]=i.current,Zi(t.nodeType===8?t.parentNode:t),new hc(i)},gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Mf(i),t=t===null?null:t.stateNode,t},gt.flushSync=function(t){return vr(t)},gt.hydrate=function(t,i,l){if(!vl(i))throw Error(n(200));return wl(null,t,i,!0,l)},gt.hydrateRoot=function(t,i,l){if(!pc(t))throw Error(n(405));var u=l!=null&&l.hydratedSources||null,d=!1,f="",g=am;if(l!=null&&(l.unstable_strictMode===!0&&(d=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onRecoverableError!==void 0&&(g=l.onRecoverableError)),i=om(i,null,t,1,l??null,d,!1,f,g),t[ln]=i.current,Zi(t),u)for(t=0;t<u.length;t++)l=u[t],d=l._getVersion,d=d(l._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[l,d]:i.mutableSourceEagerHydrationData.push(l,d);return new yl(i)},gt.render=function(t,i,l){if(!vl(i))throw Error(n(200));return wl(null,t,i,!1,l)},gt.unmountComponentAtNode=function(t){if(!vl(t))throw Error(n(40));return t._reactRootContainer?(vr(function(){wl(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1},gt.unstable_batchedUpdates=sc,gt.unstable_renderSubtreeIntoContainer=function(t,i,l,u){if(!vl(l))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return wl(t,i,l,!1,u)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var _m;function cE(){if(_m)return _c.exports;_m=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),_c.exports=uE(),_c.exports}var ym;function dE(){if(ym)return Cl;ym=1;var r=cE();return Cl.createRoot=r.createRoot,Cl.hydrateRoot=r.hydrateRoot,Cl}var fE=dE();const hE="modulepreload",pE=function(r){return"https://dayrob1.github.io/FoodApp-FirebaseAuth/"+r},vm={},mE=function(e,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(n.map(p=>{if(p=pE(p),p in vm)return;vm[p]=!0;const m=p.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${y}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":hE,m||(_.as="script"),_.crossOrigin="",_.href=p,h&&_.setAttribute("nonce",h),document.head.appendChild(_),m)return new Promise((w,T)=>{_.addEventListener("load",w),_.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return o.then(c=>{for(const h of c||[])h.status==="rejected"&&a(h.reason);return e().catch(a)})};let gE=class{constructor(){Sl(this,"levels");Sl(this,"currentLevel");this.levels=["debug","info","warn","error"],this.currentLevel="debug"}setLevel(e){this.levels.includes(e)?this.currentLevel=e:console.error(`Nivel de log no válido: ${e}`)}log(e,n){const s=this.levels.indexOf(e),o=this.levels.indexOf(this.currentLevel);if(s>=o){const a=new Date().toISOString();console[e](`[${e.toUpperCase()}] ${a}: ${n}`)}}debug(e){this.log("debug",e)}info(e){this.log("info",e)}warn(e){this.log("warn",e)}error(e){this.log("error",e)}};const wm=new gE;class _E extends ad.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.error("Error capturado por ErrorBoundary:",e.message),console.debug("Detalles del error:",n.componentStack)}render(){return this.state.hasError?this.props.fallback:this.props.children}}var tn=(r=>(r.ADMIN="ADMIN",r.USER="USER",r))(tn||{}),Em={};/**
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
 */const Fg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(r,e){if(!r)throw Si(e)},Si=function(r){return new Error("Firebase Database ("+Fg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const Ug=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},yE=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const a=r[n++];e[s++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=r[n++],c=r[n++],h=r[n++],p=((o&7)<<18|(a&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=r[n++],c=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const a=r[o],c=o+1<r.length,h=c?r[o+1]:0,p=o+2<r.length,m=p?r[o+2]:0,y=a>>2,_=(a&3)<<4|h>>4;let w=(h&15)<<2|m>>6,T=m&63;p||(T=64,c||(w=64)),s.push(n[y],n[_],n[w],n[T])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ug(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):yE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const a=n[r.charAt(o++)],h=o<r.length?n[r.charAt(o)]:0;++o;const m=o<r.length?n[r.charAt(o)]:64;++o;const _=o<r.length?n[r.charAt(o)]:64;if(++o,a==null||h==null||m==null||_==null)throw new vE;const w=a<<2|h>>4;if(s.push(w),m!==64){const T=h<<4&240|m>>2;if(s.push(T),_!==64){const P=m<<6&192|_;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class vE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zg=function(r){const e=Ug(r);return ud.encodeByteArray(e,!0)},bl=function(r){return zg(r).replace(/\./g,"")},Fl=function(r){try{return ud.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wE(r){return jg(void 0,r)}function jg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!EE(n)||(r[n]=jg(r[n],e[n]));return r}function EE(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function SE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const CE=()=>SE().__FIREBASE_DEFAULTS__,IE=()=>{if(typeof process>"u"||typeof Em>"u")return;const r=Em.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},kE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Fl(r[1]);return e&&JSON.parse(e)},cd=()=>{try{return CE()||IE()||kE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Wg=r=>{var e,n;return(n=(e=cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},TE=r=>{const e=Wg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Bg=()=>{var r;return(r=cd())===null||r===void 0?void 0:r.config},Vg=r=>{var e;return(e=cd())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Qs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function RE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[bl(JSON.stringify(n)),bl(JSON.stringify(c)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function PE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xE(){const r=ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function AE(){return Fg.NODE_ADMIN===!0}function OE(){try{return typeof indexedDB=="object"}catch{return!1}}function DE(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const LE="FirebaseError";class or extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=LE,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?ME(a,s):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new or(o,h,s)}}function ME(r,e){return r.replace(bE,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const bE=/\{\$([^}]+)}/g;/**
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
 */function Ms(r){return JSON.parse(r)}function He(r){return JSON.stringify(r)}/**
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
 */const $g=function(r){let e={},n={},s={},o="";try{const a=r.split(".");e=Ms(Fl(a[0])||""),n=Ms(Fl(a[1])||""),o=a[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:o}},FE=function(r){const e=$g(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},UE=function(r){const e=$g(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function sn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function mi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Fc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ul(r,e,n){const s={};for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&(s[o]=e.call(n,r[o],o,r));return s}function zl(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const a=r[o],c=e[o];if(Sm(a)&&Sm(c)){if(!zl(a,c))return!1}else if(a!==c)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Sm(r){return r!==null&&typeof r=="object"}/**
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
 */function Ci(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ts(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,a]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Rs(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}/**
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
 */class zE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const w=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(w<<1|w>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],c=this.chain_[2],h=this.chain_[3],p=this.chain_[4],m,y;for(let _=0;_<80;_++){_<40?_<20?(m=h^a&(c^h),y=1518500249):(m=a^c^h,y=1859775393):_<60?(m=a&c|h&(a|c),y=2400959708):(m=a^c^h,y=3395469782);const w=(o<<5|o>>>27)+m+p+y+s[_]&4294967295;p=h,h=c,c=(a<<30|a>>>2)&4294967295,a=o,o=w}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let o=0;const a=this.buf_;let c=this.inbuf_;for(;o<n;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<n;)if(a[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}else for(;o<n;)if(a[c]=e[o],++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[o]>>a&255,++s;return e}}function jE(r,e){const n=new WE(r,e);return n.subscribe.bind(n)}class WE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");BE(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=wc),o.error===void 0&&(o.error=wc),o.complete===void 0&&(o.complete=wc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function wc(){}function sa(r,e){return`${r} failed: ${e} argument `}/**
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
 */const VE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);if(o>=55296&&o<=56319){const a=o-55296;s++,U(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;o=65536+(a<<10)+c}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},oa=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function it(r){return r&&r._delegate?r._delegate:r}class Rr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cr="[DEFAULT]";/**
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
 */class HE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GE(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:o});s.resolve(a)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);s===h&&c.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$E(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $E(r){return r===Cr?void 0:r}function GE(r){return r.instantiationMode==="EAGER"}/**
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
 */class KE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ge||(ge={}));const qE={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},YE=ge.INFO,QE={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},JE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=QE[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fd{constructor(e){this.name=e,this._logLevel=YE,this._logHandler=JE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const XE=(r,e)=>e.some(n=>r instanceof n);let Cm,Im;function ZE(){return Cm||(Cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eS(){return Im||(Im=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,Uc=new WeakMap,Kg=new WeakMap,Ec=new WeakMap,hd=new WeakMap;function tS(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",a),r.removeEventListener("error",c)},a=()=>{n(Jn(r.result)),o()},c=()=>{s(r.error),o()};r.addEventListener("success",a),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Gg.set(n,r)}).catch(()=>{}),hd.set(e,r),e}function nS(r){if(Uc.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",c),r.removeEventListener("abort",c)},a=()=>{n(),o()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",a),r.addEventListener("error",c),r.addEventListener("abort",c)});Uc.set(r,e)}let zc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Uc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Kg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function rS(r){zc=r(zc)}function iS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Sc(this),e,...n);return Kg.set(s,e.sort?e.sort():[e]),Jn(s)}:eS().includes(r)?function(...e){return r.apply(Sc(this),e),Jn(Gg.get(this))}:function(...e){return Jn(r.apply(Sc(this),e))}}function sS(r){return typeof r=="function"?iS(r):(r instanceof IDBTransaction&&nS(r),XE(r,ZE())?new Proxy(r,zc):r)}function Jn(r){if(r instanceof IDBRequest)return tS(r);if(Ec.has(r))return Ec.get(r);const e=sS(r);return e!==r&&(Ec.set(r,e),hd.set(e,r)),e}const Sc=r=>hd.get(r);function oS(r,e,{blocked:n,upgrade:s,blocking:o,terminated:a}={}){const c=indexedDB.open(r,e),h=Jn(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Jn(c.result),p.oldVersion,p.newVersion,Jn(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),h.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const lS=["get","getKey","getAll","getAllKeys","count"],aS=["put","add","delete","clear"],Cc=new Map;function km(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=aS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||lS.includes(n)))return;const a=async function(c,...h){const p=this.transaction(c,o?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[n](...h),o&&p.done]))[0]};return Cc.set(e,a),a}rS(r=>({...r,get:(e,n,s)=>km(e,n)||r.get(e,n,s),has:(e,n)=>!!km(e,n)||r.has(e,n)}));/**
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
 */class uS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function cS(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jc="@firebase/app",Tm="0.10.18";/**
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
 */const Sn=new fd("@firebase/app"),dS="@firebase/app-compat",fS="@firebase/analytics-compat",hS="@firebase/analytics",pS="@firebase/app-check-compat",mS="@firebase/app-check",gS="@firebase/auth",_S="@firebase/auth-compat",yS="@firebase/database",vS="@firebase/data-connect",wS="@firebase/database-compat",ES="@firebase/functions",SS="@firebase/functions-compat",CS="@firebase/installations",IS="@firebase/installations-compat",kS="@firebase/messaging",TS="@firebase/messaging-compat",RS="@firebase/performance",PS="@firebase/performance-compat",NS="@firebase/remote-config",xS="@firebase/remote-config-compat",AS="@firebase/storage",OS="@firebase/storage-compat",DS="@firebase/firestore",LS="@firebase/vertexai",MS="@firebase/firestore-compat",bS="firebase",FS="11.2.0";/**
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
 */const Wc="[DEFAULT]",US={[jc]:"fire-core",[dS]:"fire-core-compat",[hS]:"fire-analytics",[fS]:"fire-analytics-compat",[mS]:"fire-app-check",[pS]:"fire-app-check-compat",[gS]:"fire-auth",[_S]:"fire-auth-compat",[yS]:"fire-rtdb",[vS]:"fire-data-connect",[wS]:"fire-rtdb-compat",[ES]:"fire-fn",[SS]:"fire-fn-compat",[CS]:"fire-iid",[IS]:"fire-iid-compat",[kS]:"fire-fcm",[TS]:"fire-fcm-compat",[RS]:"fire-perf",[PS]:"fire-perf-compat",[NS]:"fire-rc",[xS]:"fire-rc-compat",[AS]:"fire-gcs",[OS]:"fire-gcs-compat",[DS]:"fire-fst",[MS]:"fire-fst-compat",[LS]:"fire-vertex","fire-js":"fire-js",[bS]:"fire-js-all"};/**
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
 */const jl=new Map,zS=new Map,Bc=new Map;function Rm(r,e){try{r.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function gi(r){const e=r.name;if(Bc.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Bc.set(e,r);for(const n of jl.values())Rm(n,r);for(const n of zS.values())Rm(n,r);return!0}function pd(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Zt(r){return r.settings!==void 0}/**
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
 */const jS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new Js("app","Firebase",jS);/**
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
 */class WS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=FS;function qg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wc,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Xn.create("bad-app-name",{appName:String(o)});if(n||(n=Bg()),!n)throw Xn.create("no-options");const a=jl.get(o);if(a){if(zl(n,a.options)&&zl(s,a.config))return a;throw Xn.create("duplicate-app",{appName:o})}const c=new KE(o);for(const p of Bc.values())c.addComponent(p);const h=new WS(n,s,c);return jl.set(o,h),h}function Yg(r=Wc){const e=jl.get(r);if(!e&&r===Wc&&Bg())return qg();if(!e)throw Xn.create("no-app",{appName:r});return e}function Zn(r,e,n){var s;let o=(s=US[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${o}" with version "${e}":`];a&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(h.join(" "));return}gi(new Rr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const BS="firebase-heartbeat-database",VS=1,bs="firebase-heartbeat-store";let Ic=null;function Qg(){return Ic||(Ic=oS(BS,VS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(bs)}catch(n){console.warn(n)}}}}).catch(r=>{throw Xn.create("idb-open",{originalErrorMessage:r.message})})),Ic}async function HS(r){try{const n=(await Qg()).transaction(bs),s=await n.objectStore(bs).get(Jg(r));return await n.done,s}catch(e){if(e instanceof or)Sn.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function Pm(r,e){try{const s=(await Qg()).transaction(bs,"readwrite");await s.objectStore(bs).put(e,Jg(r)),await s.done}catch(n){if(n instanceof or)Sn.warn(n.message);else{const s=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(s.message)}}}function Jg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const $S=1024,GS=30*24*60*60*1e3;class KS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Nm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=GS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Sn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nm(),{heartbeatsToSend:s,unsentEntries:o}=qS(this._heartbeatsCache.heartbeats),a=bl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Sn.warn(n),""}}}function Nm(){return new Date().toISOString().substring(0,10)}function qS(r,e=$S){const n=[];let s=r.slice();for(const o of r){const a=n.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),xm(n)>e){a.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),xm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class YS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OE()?DE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function xm(r){return bl(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function QS(r){gi(new Rr("platform-logger",e=>new uS(e),"PRIVATE")),gi(new Rr("heartbeat",e=>new KS(e),"PRIVATE")),Zn(jc,Tm,r),Zn(jc,Tm,"esm2017"),Zn("fire-js","")}QS("");function md(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function Xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JS=Xg,Zg=new Js("auth","Firebase",Xg());/**
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
 */const Wl=new fd("@firebase/auth");function XS(r,...e){Wl.logLevel<=ge.WARN&&Wl.warn(`Auth (${Ii}): ${r}`,...e)}function Pl(r,...e){Wl.logLevel<=ge.ERROR&&Wl.error(`Auth (${Ii}): ${r}`,...e)}/**
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
 */function Bt(r,...e){throw gd(r,...e)}function nn(r,...e){return gd(r,...e)}function e_(r,e,n){const s=Object.assign(Object.assign({},JS()),{[e]:n});return new Js("auth","Firebase",s).create(e,{appName:r.name})}function vn(r){return e_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return Zg.create(r,...e)}function Z(r,e,...n){if(!r)throw gd(e,...n)}function mn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Pl(e),new Error(e)}function Cn(r,e){r||mn(e)}/**
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
 */function Vc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function ZS(){return Am()==="http:"||Am()==="https:"}function Am(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function eC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZS()||NE()||"connection"in navigator)?navigator.onLine:!0}function tC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=dd()||Hg()}get(){return eC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _d(r,e){Cn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class t_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rC=new Xs(3e4,6e4);function lr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ar(r,e,n,s,o={}){return n_(r,o,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const h=Ci(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:e,headers:p},a);return PE()||(m.referrerPolicy="no-referrer"),t_.fetch()(r_(r,r.config.apiHost,n,h),m)})}async function n_(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},nC),e);try{const o=new sC(r),a=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Il(r,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const h=a.ok?c.errorMessage:c.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Il(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Il(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw Il(r,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw e_(r,y,m);Bt(r,y)}}catch(o){if(o instanceof or)throw o;Bt(r,"network-request-failed",{message:String(o)})}}async function Zs(r,e,n,s,o={}){const a=await ar(r,e,n,s,o);return"mfaPendingCredential"in a&&Bt(r,"multi-factor-auth-required",{_serverResponse:a}),a}function r_(r,e,n,s){const o=`${e}${n}?${s}`;return r.config.emulator?_d(r.config,o):`${r.config.apiScheme}://${o}`}function iC(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nn(this.auth,"network-request-failed")),rC.get())})}}function Il(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=nn(r,e,s);return o.customData._tokenResponse=n,o}function Om(r){return r!==void 0&&r.enterprise!==void 0}class oC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lC(r,e){return ar(r,"GET","/v2/recaptchaConfig",lr(r,e))}/**
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
 */async function aC(r,e){return ar(r,"POST","/v1/accounts:delete",e)}async function i_(r,e){return ar(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ps(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uC(r,e=!1){const n=it(r),s=await n.getIdToken(e),o=yd(s);Z(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:s,authTime:Ps(kc(o.auth_time)),issuedAtTime:Ps(kc(o.iat)),expirationTime:Ps(kc(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function kc(r){return Number(r)*1e3}function yd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Pl("JWT malformed, contained fewer than 3 sections"),null;try{const o=Fl(n);return o?JSON.parse(o):(Pl("Failed to decode base64 JWT payload"),null)}catch(o){return Pl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Dm(r){const e=yd(r);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof or&&cC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function cC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class dC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bl(r){var e;const n=r.auth,s=await r.getIdToken(),o=await Fs(r,i_(n,{idToken:s}));Z(o==null?void 0:o.users.length,n,"internal-error");const a=o.users[0];r._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?s_(a.providerUserInfo):[],h=hC(r.providerData,c),p=r.isAnonymous,m=!(r.email&&a.passwordHash)&&!(h!=null&&h.length),y=p?m:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Hc(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(r,_)}async function fC(r){const e=it(r);await Bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hC(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function s_(r){return r.map(e=>{var{providerId:n}=e,s=md(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function pC(r,e){const n=await n_(r,{},async()=>{const s=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=r.config,c=r_(r,o,"/v1/token",`key=${a}`),h=await r._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",t_.fetch()(c,{method:"POST",headers:h,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mC(r,e){return ar(r,"POST","/v2/accounts:revokeToken",lr(r,e))}/**
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
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Dm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:a}=await pC(e,n);this.updateTokensAndExpiration(s,o,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:a}=n,c=new ci;return s&&(Z(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(Z(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(Z(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function $n(r,e){Z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,a=md(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Hc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uC(this,e)}reload(){return fC(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await Fs(this,aC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,a,c,h,p,m,y;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(o=n.email)!==null&&o!==void 0?o:void 0,T=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,P=(c=n.photoURL)!==null&&c!==void 0?c:void 0,L=(h=n.tenantId)!==null&&h!==void 0?h:void 0,x=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,b=(m=n.createdAt)!==null&&m!==void 0?m:void 0,q=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:B,emailVerified:te,isAnonymous:he,providerData:ye,stsTokenManager:ve}=n;Z(B&&ve,e,"internal-error");const Oe=ci.fromJSON(this.name,ve);Z(typeof B=="string",e,"internal-error"),$n(_,e.name),$n(w,e.name),Z(typeof te=="boolean",e,"internal-error"),Z(typeof he=="boolean",e,"internal-error"),$n(T,e.name),$n(P,e.name),$n(L,e.name),$n(x,e.name),$n(b,e.name),$n(q,e.name);const we=new gn({uid:B,auth:e,email:w,emailVerified:te,displayName:_,isAnonymous:he,photoURL:P,phoneNumber:T,tenantId:L,stsTokenManager:Oe,createdAt:b,lastLoginAt:q});return ye&&Array.isArray(ye)&&(we.providerData=ye.map(ze=>Object.assign({},ze))),x&&(we._redirectEventId=x),we}static async _fromIdTokenResponse(e,n,s=!1){const o=new ci;o.updateFromServerResponse(n);const a=new gn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Bl(a),a}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Z(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?s_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),h=new ci;h.updateFromIdToken(s);const p=new gn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Hc(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,m),p}}/**
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
 */const Lm=new Map;function _n(r){Cn(r instanceof Function,"Expected a class definition");let e=Lm.get(r);return e?(Cn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Lm.set(r,e),e)}/**
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
 */class o_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o_.type="NONE";const Mm=o_;/**
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
 */function Nl(r,e,n){return`firebase:${r}:${e}:${n}`}class di{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:a}=this.auth;this.fullUserKey=Nl(this.userKey,o.apiKey,a),this.fullPersistenceKey=Nl("persistence",o.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new di(_n(Mm),e,s);const o=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=o[0]||_n(Mm);const c=Nl(s,e.config.apiKey,e.name);let h=null;for(const m of n)try{const y=await m._get(c);if(y){const _=gn._fromJSON(e,y);m!==a&&(h=_),a=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new di(a,e,s):(a=p[0],h&&await a._set(c,h.toJSON()),await Promise.all(n.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new di(a,e,s))}}/**
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
 */function bm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f_(e))return"Blackberry";if(h_(e))return"Webos";if(a_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function l_(r=ut()){return/firefox\//i.test(r)}function a_(r=ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(r=ut()){return/crios\//i.test(r)}function c_(r=ut()){return/iemobile/i.test(r)}function d_(r=ut()){return/android/i.test(r)}function f_(r=ut()){return/blackberry/i.test(r)}function h_(r=ut()){return/webos/i.test(r)}function vd(r=ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function gC(r=ut()){var e;return vd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _C(){return xE()&&document.documentMode===10}function p_(r=ut()){return vd(r)||d_(r)||h_(r)||f_(r)||/windows phone/i.test(r)||c_(r)}/**
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
 */function m_(r,e=[]){let n;switch(r){case"Browser":n=bm(ut());break;case"Worker":n=`${bm(ut())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class yC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((c,h)=>{try{const p=e(a);c(p)}catch(p){h(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function vC(r,e={}){return ar(r,"GET","/v2/passwordPolicy",lr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const wC=6;class EC{constructor(e){var n,s,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:wC,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,a,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class SC{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fm(this),this.idTokenSubscription=new Fm(this),this.beforeStateQueue=new yC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await i_(this,{idToken:e}),s=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(vn(this));const n=e?it(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vC(this),n=new EC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await mC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(h,this,"internal-error"),h.then(()=>{c||a(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dr(r){return it(r)}class Fm{constructor(e){this.auth=e,this.observer=null,this.addObserver=jE(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let la={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CC(r){la=r}function g_(r){return la.loadJS(r)}function IC(){return la.recaptchaEnterpriseScript}function kC(){return la.gapiScript}function TC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class RC{constructor(){this.enterprise=new PC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class PC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const NC="recaptcha-enterprise",__="NO_RECAPTCHA";class xC{constructor(e){this.type=NC,this.auth=Dr(e)}async verify(e="verify",n=!1){async function s(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,h)=>{lC(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new oC(p);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,c(m.siteKey)}}).catch(p=>{h(p)})})}function o(a,c,h){const p=window.grecaptcha;Om(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(m=>{c(m)}).catch(()=>{c(__)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RC().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{s(this.auth).then(h=>{if(!n&&Om(window.grecaptcha))o(h,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=IC();p.length!==0&&(p+=h),g_(p).then(()=>{o(h,a,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function Um(r,e,n,s=!1,o=!1){const a=new xC(r);let c;if(o)c=__;else try{c=await a.verify(n)}catch{c=await a.verify(n,!0)}const h=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function $c(r,e,n,s,o){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Um(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Um(r,e,n,n==="getOobCode");return s(r,h)}else return Promise.reject(c)})}/**
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
 */function AC(r,e){const n=pd(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),a=n.getOptions();if(zl(a,e??{}))return o;Bt(o,"already-initialized")}return n.initialize({options:e})}function OC(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function DC(r,e,n){const s=Dr(r);Z(s._canInitEmulator,s,"emulator-config-failed"),Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,a=y_(e),{host:c,port:h}=LC(e),p=h===null?"":`:${h}`;s.config.emulator={url:`${a}//${c}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),MC()}function y_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function LC(r){const e=y_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const a=o[1];return{host:a,port:zm(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:zm(c)}}}function zm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function MC(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class wd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function bC(r,e){return ar(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function FC(r,e){return Zs(r,"POST","/v1/accounts:signInWithPassword",lr(r,e))}/**
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
 */async function UC(r,e){return Zs(r,"POST","/v1/accounts:signInWithEmailLink",lr(r,e))}async function zC(r,e){return Zs(r,"POST","/v1/accounts:signInWithEmailLink",lr(r,e))}/**
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
 */class Us extends wd{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Us(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Us(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,n,"signInWithPassword",FC);case"emailLink":return UC(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,s,"signUpPassword",bC);case"emailLink":return zC(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fi(r,e){return Zs(r,"POST","/v1/accounts:signInWithIdp",lr(r,e))}/**
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
 */const jC="http://localhost";class Pr extends wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,a=md(n,["providerId","signInMethod"]);if(!s||!o)return null;const c=new Pr(s,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:jC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
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
 */function WC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BC(r){const e=Ts(Rs(r)).link,n=e?Ts(Rs(e)).deep_link_id:null,s=Ts(Rs(r)).deep_link_id;return(s?Ts(Rs(s)).link:null)||s||n||e||r}class Ed{constructor(e){var n,s,o,a,c,h;const p=Ts(Rs(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,_=WC((o=p.mode)!==null&&o!==void 0?o:null);Z(m&&y&&_,"argument-error"),this.apiKey=m,this.operation=_,this.code=y,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const n=BC(e);try{return new Ed(n)}catch{return null}}}/**
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
 */class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,n){return Us._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ed.parseLink(n);return Z(s,"argument-error"),Us._fromEmailAndCode(e,s.code,s.tenantId)}}ki.PROVIDER_ID="password";ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class v_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eo extends v_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends eo{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Kn extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
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
 */class qn extends eo{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class Yn extends eo{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function VC(r,e){return Zs(r,"POST","/v1/accounts:signUp",lr(r,e))}/**
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
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const a=await gn._fromIdTokenResponse(e,s,o),c=jm(s);return new Nr({user:a,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=jm(s);return new Nr({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function jm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Vl extends or{constructor(e,n,s,o){var a;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Vl(e,n,s,o)}}function w_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(r,a,e,s):a})}async function HC(r,e,n=!1){const s=await Fs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Nr._forOperation(r,"link",s)}/**
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
 */async function $C(r,e,n=!1){const{auth:s}=r;if(Zt(s.app))return Promise.reject(vn(s));const o="reauthenticate";try{const a=await Fs(r,w_(s,o,e,r),n);Z(a.idToken,s,"internal-error");const c=yd(a.idToken);Z(c,s,"internal-error");const{sub:h}=c;return Z(r.uid===h,s,"user-mismatch"),Nr._forOperation(r,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Bt(s,"user-mismatch"),a}}/**
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
 */async function E_(r,e,n=!1){if(Zt(r.app))return Promise.reject(vn(r));const s="signIn",o=await w_(r,s,e),a=await Nr._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(a.user),a}async function GC(r,e){return E_(Dr(r),e)}/**
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
 */async function S_(r){const e=Dr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KC(r,e,n){if(Zt(r.app))return Promise.reject(vn(r));const s=Dr(r),c=await $c(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VC).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&S_(r),p}),h=await Nr._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function qC(r,e,n){return Zt(r.app)?Promise.reject(vn(r)):GC(it(r),ki.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&S_(r),s})}function YC(r,e,n,s){return it(r).onIdTokenChanged(e,n,s)}function QC(r,e,n){return it(r).beforeAuthStateChanged(e,n)}function JC(r,e,n,s){return it(r).onAuthStateChanged(e,n,s)}function XC(r){return it(r).signOut()}const Hl="__sak";/**
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
 */class C_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hl,"1"),this.storage.removeItem(Hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZC=1e3,eI=10;class I_ extends C_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);_C()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,eI):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ZC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}I_.type="LOCAL";const tI=I_;/**
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
 */class k_ extends C_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k_.type="SESSION";const T_=k_;/**
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
 */function nI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new aa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:a}=n.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const h=Array.from(c).map(async m=>m(n.origin,a)),p=await nI(h);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
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
 */function Sd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class rI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((h,p)=>{const m=Sd("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(_){const w=_;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(w.data.response);break;default:clearTimeout(y),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function rn(){return window}function iI(r){rn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function R_(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function sI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function lI(){return R_()?self:null}/**
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
 */const P_="firebaseLocalStorageDb",aI=1,$l="firebaseLocalStorage",N_="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(r,e){return r.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function uI(){const r=indexedDB.deleteDatabase(P_);return new to(r).toPromise()}function Gc(){const r=indexedDB.open(P_,aI);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore($l,{keyPath:N_})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains($l)?e(s):(s.close(),await uI(),e(await Gc()))})})}async function Wm(r,e,n){const s=ua(r,!0).put({[N_]:e,value:n});return new to(s).toPromise()}async function cI(r,e){const n=ua(r,!1).get(e),s=await new to(n).toPromise();return s===void 0?null:s.value}function Bm(r,e){const n=ua(r,!0).delete(e);return new to(n).toPromise()}const dI=800,fI=3;class x_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>fI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return R_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(lI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sI(),!this.activeServiceWorker)return;this.sender=new rI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await Wm(e,Hl,"1"),await Bm(e,Hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>cI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=ua(o,!1).getAll();return new to(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x_.type="LOCAL";const hI=x_;new Xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function pI(r,e){return e?_n(e):(Z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Cd extends wd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mI(r){return E_(r.auth,new Cd(r),r.bypassAuthState)}function gI(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),$C(n,new Cd(r),r.bypassAuthState)}async function _I(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),HC(n,new Cd(r),r.bypassAuthState)}/**
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
 */class A_{constructor(e,n,s,o,a=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:a,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mI;case"linkViaPopup":case"linkViaRedirect":return _I;case"reauthViaPopup":case"reauthViaRedirect":return gI;default:Bt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yI=new Xs(2e3,1e4);class ai extends A_{constructor(e,n,s,o,a){super(e,n,o,a),this.provider=s,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yI.get())};e()}}ai.currentPopupAction=null;/**
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
 */const vI="pendingRedirect",xl=new Map;class wI extends A_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=xl.get(this.auth._key());if(!e){try{const s=await EI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}xl.set(this.auth._key(),e)}return this.bypassAuthState||xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EI(r,e){const n=II(e),s=CI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function SI(r,e){xl.set(r._key(),e)}function CI(r){return _n(r._redirectPersistence)}function II(r){return Nl(vI,r.config.apiKey,r.name)}async function kI(r,e,n=!1){if(Zt(r.app))return Promise.reject(vn(r));const s=Dr(r),o=pI(s,e),c=await new wI(s,o,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const TI=10*60*1e3;class RI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!O_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vm(e))}saveEventToCache(e){this.cachedEventUids.add(Vm(e)),this.lastProcessedEventTime=Date.now()}}function Vm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function O_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O_(r);default:return!1}}/**
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
 */async function NI(r,e={}){return ar(r,"GET","/v1/projects",e)}/**
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
 */const xI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AI=/^https?/;async function OI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await NI(r);for(const n of e)try{if(DI(n))return}catch{}Bt(r,"unauthorized-domain")}function DI(r){const e=Vc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!AI.test(n))return!1;if(xI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const LI=new Xs(3e4,6e4);function Hm(){const r=rn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function MI(r){return new Promise((e,n)=>{var s,o,a;function c(){Hm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hm(),n(nn(r,"network-request-failed"))},timeout:LI.get()})}if(!((o=(s=rn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=rn().gapi)===null||a===void 0)&&a.load)c();else{const h=TC("iframefcb");return rn()[h]=()=>{gapi.load?c():n(nn(r,"network-request-failed"))},g_(`${kC()}?onload=${h}`).catch(p=>n(p))}}).catch(e=>{throw Al=null,e})}let Al=null;function bI(r){return Al=Al||MI(r),Al}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const FI=new Xs(5e3,15e3),UI="__/auth/iframe",zI="emulator/auth/iframe",jI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BI(r){const e=r.config;Z(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?_d(e,zI):`https://${r.config.authDomain}/${UI}`,s={apiKey:e.apiKey,appName:r.name,v:Ii},o=WI.get(r.config.apiHost);o&&(s.eid=o);const a=r._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Ci(s).slice(1)}`}async function VI(r){const e=await bI(r),n=rn().gapi;return Z(n,r,"internal-error"),e.open({where:document.body,url:BI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jI,dontclear:!0},s=>new Promise(async(o,a)=>{await s.restyle({setHideOnLeave:!1});const c=nn(r,"network-request-failed"),h=rn().setTimeout(()=>{a(c)},FI.get());function p(){rn().clearTimeout(h),o(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const HI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$I=500,GI=600,KI="_blank",qI="http://localhost";class $m{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YI(r,e,n,s=$I,o=GI){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const p=Object.assign(Object.assign({},HI),{width:s.toString(),height:o.toString(),top:a,left:c}),m=ut().toLowerCase();n&&(h=u_(m)?KI:n),l_(m)&&(e=e||qI,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[T,P])=>`${w}${T}=${P},`,"");if(gC(m)&&h!=="_self")return QI(e||"",h),new $m(null);const _=window.open(e||"",h,y);Z(_,r,"popup-blocked");try{_.focus()}catch{}return new $m(_)}function QI(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const JI="__/auth/handler",XI="emulator/auth/handler",ZI=encodeURIComponent("fac");async function Gm(r,e,n,s,o,a){Z(r.config.authDomain,r,"auth-domain-config-required"),Z(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ii,eventId:o};if(e instanceof v_){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Fc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))c[y]=_}if(e instanceof eo){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(c.scopes=y.join(","))}r.tenantId&&(c.tid=r.tenantId);const h=c;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const p=await r._getAppCheckToken(),m=p?`#${ZI}=${encodeURIComponent(p)}`:"";return`${ek(r)}?${Ci(h).slice(1)}${m}`}function ek({config:r}){return r.emulator?_d(r,XI):`https://${r.authDomain}/${JI}`}/**
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
 */const Tc="webStorageSupport";class tk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T_,this._completeRedirectFn=kI,this._overrideRedirectResult=SI}async _openPopup(e,n,s,o){var a;Cn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Gm(e,n,s,Vc(),o);return YI(e,c,Sd())}async _openRedirect(e,n,s,o){await this._originValidation(e);const a=await Gm(e,n,s,Vc(),o);return iI(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:a}=this.eventManagers[n];return o?Promise.resolve(o):(Cn(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await VI(e),s=new RI(e);return n.register("authEvent",o=>(Z(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[Tc];c!==void 0&&n(!!c),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p_()||a_()||vd()}}const nk=tk;var Km="@firebase/auth",qm="1.8.2";/**
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
 */class rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ik(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sk(r){gi(new Rr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;Z(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:h,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(r)},m=new SC(s,o,a,p);return OC(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gi(new Rr("auth-internal",e=>{const n=Dr(e.getProvider("auth").getImmediate());return(s=>new rk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Km,qm,ik(r)),Zn(Km,qm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const ok=5*60,lk=Vg("authIdTokenMaxAge")||ok;let Ym=null;const ak=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>lk)return;const o=n==null?void 0:n.token;Ym!==o&&(Ym=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function uk(r=Yg()){const e=pd(r,"auth");if(e.isInitialized())return e.getImmediate();const n=AC(r,{popupRedirectResolver:nk,persistence:[hI,tI,T_]}),s=Vg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=ak(a.toString());QC(n,c,()=>c(n.currentUser)),YC(n,h=>c(h))}}const o=Wg("auth");return o&&DC(n,`http://${o}`),n}function ck(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}CC({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const a=nn("internal-error");a.customData=o,n(a)},s.type="text/javascript",s.charset="UTF-8",ck().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sk("Browser");var dk="firebase",fk="11.2.0";/**
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
 */Zn(dk,fk,"app");var Qm={};const Jm="@firebase/database",Xm="1.0.11";/**
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
 */let D_="";function hk(r){D_=r}/**
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
 */class pk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ms(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class mk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const L_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pk(e)}}catch{}return new mk},Tr=L_("localStorage"),gk=L_("sessionStorage");/**
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
 */const hi=new fd("@firebase/database"),_k=function(){let r=1;return function(){return r++}}(),M_=function(r){const e=VE(r),n=new zE;n.update(e);const s=n.digest();return ud.encodeByteArray(s)},no=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=no.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let Ns=null,Zm=!0;const yk=function(r,e){U(!0,"Can't turn on custom loggers persistently."),hi.logLevel=ge.VERBOSE,Ns=hi.log.bind(hi)},Xe=function(...r){if(Zm===!0&&(Zm=!1,Ns===null&&gk.get("logging_enabled")===!0&&yk()),Ns){const e=no.apply(null,r);Ns(e)}},ro=function(r){return function(...e){Xe(r,...e)}},Kc=function(...r){const e="FIREBASE INTERNAL ERROR: "+no(...r);hi.error(e)},In=function(...r){const e=`FIREBASE FATAL ERROR: ${no(...r)}`;throw hi.error(e),new Error(e)},at=function(...r){const e="FIREBASE WARNING: "+no(...r);hi.warn(e)},vk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Id=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},wk=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",xr="[MAX_NAME]",Lr=function(r,e){if(r===e)return 0;if(r===_i||e===xr)return-1;if(e===_i||r===xr)return 1;{const n=eg(r),s=eg(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},Ek=function(r,e){return r===e?0:r<e?-1:1},ys=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+He(e))},kd=function(r){if(typeof r!="object"||r===null)return He(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=He(e[s]),n+=":",n+=kd(r[e[s]]);return n+="}",n},b_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let o=0;o<n;o+=e)o+e>n?s.push(r.substring(o,n)):s.push(r.substring(o,o+e));return s};function Ze(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const F_=function(r){U(!Id(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let o,a,c,h,p;r===0?(a=0,c=0,o=1/r===-1/0?1:0):(o=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(r)/Math.LN2),s),a=h+s,c=Math.round(r*Math.pow(2,n-h)-Math.pow(2,n))):(a=0,c=Math.round(r/Math.pow(2,1-s-n))));const m=[];for(p=n;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(o?1:0),m.reverse();const y=m.join("");let _="";for(p=0;p<64;p+=8){let w=parseInt(y.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),_=_+w}return _.toLowerCase()},Sk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ck=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ik(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const kk=new RegExp("^-?(0*)\\d{1,10}$"),Tk=-2147483648,Rk=2147483647,eg=function(r){if(kk.test(r)){const e=Number(r);if(e>=Tk&&e<=Rk)return e}return null},Ti=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},Pk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xs=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Nk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class Ol{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ol.OWNER="owner";/**
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
 */const Td="5",U_="v",z_="s",j_="r",W_="f",B_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,V_="ls",H_="p",qc="ac",$_="websocket",G_="long_polling";/**
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
 */class K_{constructor(e,n,s,o,a=!1,c="",h=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ak(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function q_(r,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===$_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===G_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ak(r)&&(n.ns=r.namespace);const o=[];return Ze(n,(a,c)=>{o.push(a+"="+c)}),s+o.join("&")}/**
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
 */class Ok{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return wE(this.counters_)}}/**
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
 */const Rc={},Pc={};function Rd(r){const e=r.toString();return Rc[e]||(Rc[e]=new Ok),Rc[e]}function Dk(r,e){const n=r.toString();return Pc[n]||(Pc[n]=e()),Pc[n]}/**
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
 */class Lk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&Ti(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const tg="start",Mk="close",bk="pLPCommand",Fk="pRTLPCB",Y_="id",Q_="pw",J_="ser",Uk="cb",zk="seg",jk="ts",Wk="d",Bk="dframe",X_=1870,Z_=30,Vk=X_-Z_,Hk=25e3,$k=3e4;class ui{constructor(e,n,s,o,a,c,h){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=o,this.authToken=a,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ro(e),this.stats_=Rd(n),this.urlFn=p=>(this.appCheckToken&&(p[qc]=this.appCheckToken),q_(n,G_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Lk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($k)),wk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pd((...a)=>{const[c,h,p,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===tg)this.id=h,this.password=p;else if(c===Mk)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[tg]="t",s[J_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Uk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[U_]=Td,this.transportSessionId&&(s[z_]=this.transportSessionId),this.lastSessionId&&(s[V_]=this.lastSessionId),this.applicationId&&(s[H_]=this.applicationId),this.appCheckToken&&(s[qc]=this.appCheckToken),typeof location<"u"&&location.hostname&&B_.test(location.hostname)&&(s[j_]=W_);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sk()&&!Ck()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zg(n),o=b_(s,Vk);for(let a=0;a<o.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Bk]="t",s[Y_]=e,s[Q_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pd{constructor(e,n,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_k(),window[bk+this.uniqueCallbackIdentifier]=e,window[Fk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pd.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){Xe("frame writing exception"),h.stack&&Xe(h.stack),Xe(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Y_]=this.myID,e[Q_]=this.myPW,e[J_]=this.currentSerial;let n=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Z_+s.length<=X_;){const c=this.pendingSegs.shift();s=s+"&"+zk+o+"="+c.seg+"&"+jk+o+"="+c.ts+"&"+Wk+o+"="+c.d,o++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(s,Math.floor(Hk)),a=()=>{clearTimeout(o),s()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Gk=16384,Kk=45e3;let Gl=null;typeof MozWebSocket<"u"?Gl=MozWebSocket:typeof WebSocket<"u"&&(Gl=WebSocket);class en{constructor(e,n,s,o,a,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ro(this.connId),this.stats_=Rd(n),this.connURL=en.connectionURL_(n,c,h,o,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,o,a){const c={};return c[U_]=Td,typeof location<"u"&&location.hostname&&B_.test(location.hostname)&&(c[j_]=W_),n&&(c[z_]=n),s&&(c[V_]=s),o&&(c[qc]=o),a&&(c[H_]=a),q_(e,$_,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tr.set("previous_websocket_failure",!0);try{let s;AE(),this.mySock=new Gl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Gl!==null&&!en.forceDisallow_}static previouslyFailed(){return Tr.isInMemoryStorage||Tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ms(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=b_(n,Gk);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Kk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class zs{static get ALL_TRANSPORTS(){return[ui,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=en.isAvailable();let s=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[en];else{const o=this.transports_=[];for(const a of zs.ALL_TRANSPORTS)a&&a.isAvailable()&&o.push(a);zs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zs.globalTransportInitialized_=!1;/**
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
 */const qk=6e4,Yk=5e3,Qk=10*1024,Jk=100*1024,Nc="t",ng="d",Xk="s",rg="r",Zk="e",ig="o",sg="a",og="n",lg="p",eT="h";class tT{constructor(e,n,s,o,a,c,h,p,m,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ro("c:"+this.id+":"),this.transportManager_=new zs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=xs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nc in e){const n=e[Nc];n===sg?this.upgradeIfSecondaryHealthy_():n===rg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ig&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:og,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ys(Nc,e);if(ng in e){const s=e[ng];if(n===eT){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===og){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Xk?this.onConnectionShutdown_(s):n===rg?this.onReset_(s):n===Zk?Kc("Server Error: "+s):n===ig?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Td!==s&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),xs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ey{put(e,n,s,o){}merge(e,n,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ty{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const o=this.getInitialEvent(e);o&&n.apply(s,o)}off(e,n,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let a=0;a<o.length;a++)if(o[a].callback===n&&(!s||s===o[a].context)){o.splice(a,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Kl extends ty{static getInstance(){return new Kl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ag=32,ug=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new _e("")}function le(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function nr(r){return r.pieces_.length-r.pieceNum_}function Ie(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new _e(r.pieces_,e)}function Nd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function nT(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function js(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function ny(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new _e(e,0)}function Me(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new _e(n,0)}function oe(r){return r.pieceNum_>=r.pieces_.length}function lt(r,e){const n=le(r),s=le(e);if(n===null)return e;if(n===s)return lt(Ie(r),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function rT(r,e){const n=js(r,0),s=js(e,0);for(let o=0;o<n.length&&o<s.length;o++){const a=Lr(n[o],s[o]);if(a!==0)return a}return n.length===s.length?0:n.length<s.length?-1:1}function ry(r,e){if(nr(r)!==nr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function xt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(nr(r)>nr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class iT{constructor(e,n){this.errorPrefix_=n,this.parts_=js(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=oa(this.parts_[s]);iy(this)}}function sT(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=oa(e),iy(r)}function oT(r){const e=r.parts_.pop();r.byteLength_-=oa(e),r.parts_.length>0&&(r.byteLength_-=1)}function iy(r){if(r.byteLength_>ug)throw new Error(r.errorPrefix_+"has a key path longer than "+ug+" bytes ("+r.byteLength_+").");if(r.parts_.length>ag)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ag+") or object contains a cycle "+Ir(r))}function Ir(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class xd extends ty{static getInstance(){return new xd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const vs=1e3,lT=60*5*1e3,cg=30*1e3,aT=1.3,uT=3e4,cT="server_kill",dg=3;class wn extends ey{constructor(e,n,s,o,a,c,h,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=p,this.id=wn.nextPersistentConnectionId_++,this.log_=ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vs,this.maxReconnectDelay_=lT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Kl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const o=++this.requestNumber_,a={r:o,a:e,b:n};this.log_(He(a)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const n=new Qs,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?n.resolve(h):n.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,s,o){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:n,query:e,tag:s};this.listens.get(c).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+s+" for "+o);const a={p:s},c="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,h=>{const p=h.d,m=h.s;wn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const s=mi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||UE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=FE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,o=>{const a=o.s,c=o.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,n)}sendUnlisten_(e,n,s,o){this.log_("Unlisten on "+e+" for "+n);const a={p:e},c="n";o&&(a.q=s,a.t=o),this.sendRequest(c,a)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,o){const a={p:n,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,n,s,o){this.putInternal("p",e,n,s,o)}merge(e,n,s,o){this.putInternal("m",e,n,s,o)}putInternal(e,n,s,o,a){this.initConnection_();const c={p:n,d:s};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kc("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uT&&(this.reconnectDelay_=vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+wn.nextConnectionId_++,a=this.lastSessionId;let c=!1,h=null;const p=function(){h?h.close():(c=!0,s())},m=function(_){U(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(_)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=w&&w.token,h=new tT(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,T=>{at(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(cT)},a))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&at(_),p())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fc(this.interruptReasons_)&&(this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(a=>kd(a)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let o;if(this.listens.has(s)){const a=this.listens.get(s);o=a.get(n),a.delete(n),a.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dg&&(this.reconnectDelay_=cg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+D_.replace(/\./g,"-")]=1,dd()?e["framework.cordova"]=1:Hg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Kl.getInstance().currentlyOnline();return Fc(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
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
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
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
 */class ca{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ie(_i,e),o=new ie(_i,n);return this.compare(s,o)!==0}minPost(){return ie.MIN}}/**
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
 */let kl;class sy extends ca{static get __EMPTY_NODE(){return kl}static set __EMPTY_NODE(e){kl=e}compare(e,n){return Lr(e.name,n.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(xr,kl)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,kl)}toString(){return".key"}}const pi=new sy;/**
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
 */class Tl{constructor(e,n,s,o,a=null){this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,o,a){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=o??_t.EMPTY_NODE,this.right=a??_t.EMPTY_NODE}copy(e,n,s,o,a){return new Ye(e??this.key,n??this.value,s??this.color,o??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const a=s(e,o.key);return a<0?o=o.copy(null,null,null,o.left.insert(e,n,s),null):a===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,o;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class dT{copy(e,n,s,o,a){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,o=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tl(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new dT;/**
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
 */function fT(r,e){return Lr(r.name,e.name)}function Ad(r,e){return Lr(r,e)}/**
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
 */let Yc;function hT(r){Yc=r}const oy=function(r){return typeof r=="number"?"number:"+F_(r):"string:"+r},ly=function(r){if(r.isLeafNode()){const e=r.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else U(r===Yc||r.isEmpty(),"priority of unexpected type.");U(r===Yc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let fg;class qe{static set __childrenNodeConstructor(e){fg=e}static get __childrenNodeConstructor(){return fg}constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ly(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:le(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=le(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+oy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=F_(this.value_):e+=this.value_,this.lazyHash_=M_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,o=qe.VALUE_TYPE_ORDER.indexOf(n),a=qe.VALUE_TYPE_ORDER.indexOf(s);return U(o>=0,"Unknown leaf type: "+n),U(a>=0,"Unknown leaf type: "+s),o===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ay,uy;function pT(r){ay=r}function mT(r){uy=r}class gT extends ca{compare(e,n){const s=e.node.getPriority(),o=n.node.getPriority(),a=s.compareTo(o);return a===0?Lr(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(xr,new qe("[PRIORITY-POST]",uy))}makePost(e,n){const s=ay(e);return new ie(n,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const be=new gT;/**
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
 */const _T=Math.log(2);class yT{constructor(e){const n=a=>parseInt(Math.log(a)/_T,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ql=function(r,e,n,s){r.sort(e);const o=function(p,m){const y=m-p;let _,w;if(y===0)return null;if(y===1)return _=r[p],w=n?n(_):_,new Ye(w,_.node,Ye.BLACK,null,null);{const T=parseInt(y/2,10)+p,P=o(p,T),L=o(T+1,m);return _=r[T],w=n?n(_):_,new Ye(w,_.node,Ye.BLACK,P,L)}},a=function(p){let m=null,y=null,_=r.length;const w=function(P,L){const x=_-P,b=_;_-=P;const q=o(x+1,b),B=r[x],te=n?n(B):B;T(new Ye(te,B.node,L,null,q))},T=function(P){m?(m.left=P,m=P):(y=P,m=P)};for(let P=0;P<p.count;++P){const L=p.nextBitIsOne(),x=Math.pow(2,p.count-(P+1));L?w(x,Ye.BLACK):(w(x,Ye.BLACK),w(x,Ye.RED))}return y},c=new yT(r.length),h=a(c);return new _t(s||e,h)};/**
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
 */let xc;const ws={};class yn{static get Default(){return U(be,"ChildrenNode.ts has not been loaded"),xc=xc||new yn({".priority":ws},{".priority":be}),xc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=mi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const a=n.getIterator(ie.Wrap);let c=a.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=a.getNext();let h;o?h=ql(s,e.getCompare()):h=ws;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const y=Object.assign({},this.indexes_);return y[p]=h,new yn(y,m)}addToIndexes(e,n){const s=Ul(this.indexes_,(o,a)=>{const c=mi(this.indexSet_,a);if(U(c,"Missing index implementation for "+a),o===ws)if(c.isDefinedOn(e.node)){const h=[],p=n.getIterator(ie.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&h.push(m),m=p.getNext();return h.push(e),ql(h,c.getCompare())}else return ws;else{const h=n.get(e.name);let p=o;return h&&(p=p.remove(new ie(e.name,h))),p.insert(e,e.node)}});return new yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ul(this.indexes_,o=>{if(o===ws)return o;{const a=n.get(e.name);return a?o.remove(new ie(e.name,a)):o}});return new yn(s,this.indexSet_)}}/**
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
 */let Es;class X{static get EMPTY_NODE(){return Es||(Es=new X(new _t(Ad),null,yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ly(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ie(e,n);let o,a;n.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?Es:this.priorityNode_;return new X(o,c,a)}}updateChild(e,n){const s=le(e);if(s===null)return n;{U(le(e)!==".priority"||nr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Ie(e),n);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,o=0,a=!0;if(this.forEachChild(be,(c,h)=>{n[c]=h.val(e),s++,a&&X.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):a=!1}),!e&&a&&o<2*s){const c=[];for(const h in n)c[h]=n[h];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+oy(this.getPriority().val())+":"),this.forEachChild(be,(n,s)=>{const o=s.hash();o!==""&&(e+=":"+n+":"+o)}),this.lazyHash_=e===""?"":M_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const o=this.resolveIndex_(s);if(o){const a=o.getPredecessorKey(new ie(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ie.Wrap);let a=o.peek();for(;a!=null&&n.compare(a,e)<0;)o.getNext(),a=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let a=o.peek();for(;a!=null&&n.compare(a,e)>0;)o.getNext(),a=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===io?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(be),o=n.getIterator(be);let a=s.getNext(),c=o.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=s.getNext(),c=o.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vT extends X{constructor(){super(new _t(Ad),X.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const io=new vT;Object.defineProperties(ie,{MIN:{value:new ie(_i,X.EMPTY_NODE)},MAX:{value:new ie(xr,io)}});sy.__EMPTY_NODE=X.EMPTY_NODE;qe.__childrenNodeConstructor=X;hT(io);mT(io);/**
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
 */const wT=!0;function Ve(r,e=null){if(r===null)return X.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new qe(n,Ve(e))}if(!(r instanceof Array)&&wT){const n=[];let s=!1;if(Ze(r,(c,h)=>{if(c.substring(0,1)!=="."){const p=Ve(h);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ie(c,p)))}}),n.length===0)return X.EMPTY_NODE;const a=ql(n,fT,c=>c.name,Ad);if(s){const c=ql(n,be.getCompare());return new X(a,Ve(e),new yn({".priority":c},{".priority":be}))}else return new X(a,Ve(e),yn.Default)}else{let n=X.EMPTY_NODE;return Ze(r,(s,o)=>{if(sn(r,s)&&s.substring(0,1)!=="."){const a=Ve(o);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(s,a))}}),n.updatePriority(Ve(e))}}pT(Ve);/**
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
 */class ET extends ca{constructor(e){super(),this.indexPath_=e,U(!oe(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),o=this.extractChild(n.node),a=s.compareTo(o);return a===0?Lr(e.name,n.name):a}makePost(e,n){const s=Ve(e),o=X.EMPTY_NODE.updateChild(this.indexPath_,s);return new ie(n,o)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,io);return new ie(xr,e)}toString(){return js(this.indexPath_,0).join("/")}}/**
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
 */class ST extends ca{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Lr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const s=Ve(e);return new ie(n,s)}toString(){return".value"}}const CT=new ST;/**
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
 */function cy(r){return{type:"value",snapshotNode:r}}function yi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ws(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Bs(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function IT(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class Od{constructor(e){this.index_=e}updateChild(e,n,s,o,a,c){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(n);return h.getChild(o).equals(s.getChild(o))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(Ws(n,h)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(yi(n,s)):c.trackChildChange(Bs(n,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(be,(o,a)=>{n.hasChild(o)||s.trackChildChange(Ws(o,a))}),n.isLeafNode()||n.forEachChild(be,(o,a)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(a)||s.trackChildChange(Bs(o,a,c))}else s.trackChildChange(yi(o,a))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Vs{constructor(e){this.indexedFilter_=new Od(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vs.getStartPost_(e),this.endPost_=Vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,o,a,c){return this.matches(new ie(n,s))||(s=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,o,a,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=X.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(X.EMPTY_NODE);const a=this;return n.forEachChild(be,(c,h)=>{a.matches(new ie(c,h))||(o=o.updateImmediateChild(c,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class kT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,o,a,c){return this.rangedFilter_.matches(new ie(n,s))||(s=X.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,o,a,c):this.fullLimitUpdateChild_(e,n,s,a,c)}updateFullNode(e,n,s){let o;if(n.isLeafNode()||n.isEmpty())o=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=X.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(X.EMPTY_NODE);let a;this.reverse_?a=o.getReverseIterator(this.index_):a=o.getIterator(this.index_);let c=0;for(;a.hasNext();){const h=a.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:o=o.updateImmediateChild(h.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,o,a){let c;if(this.reverse_){const _=this.index_.getCompare();c=(w,T)=>_(T,w)}else c=this.index_.getCompare();const h=e;U(h.numChildren()===this.limit_,"");const p=new ie(n,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(h.hasChild(n)){const _=h.getImmediateChild(n);let w=o.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===n||h.hasChild(w.name));)w=o.getChildAfterChild(this.index_,w,this.reverse_);const T=w==null?1:c(w,p);if(y&&!s.isEmpty()&&T>=0)return a!=null&&a.trackChildChange(Bs(n,s,_)),h.updateImmediateChild(n,s);{a!=null&&a.trackChildChange(Ws(n,_));const L=h.updateImmediateChild(n,X.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(a!=null&&a.trackChildChange(yi(w.name,w.node)),L.updateImmediateChild(w.name,w.node)):L}}else return s.isEmpty()?e:y&&c(m,p)>=0?(a!=null&&(a.trackChildChange(Ws(m.name,m.node)),a.trackChildChange(yi(n,s))),h.updateImmediateChild(n,s).updateImmediateChild(m.name,X.EMPTY_NODE)):e}}/**
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
 */class Dd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===be}copy(){const e=new Dd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TT(r){return r.loadsAllData()?new Od(r.getIndex()):r.hasLimit()?new kT(r):new Vs(r)}function hg(r){const e={};if(r.isDefault())return e;let n;if(r.index_===be?n="$priority":r.index_===CT?n="$value":r.index_===pi?n="$key":(U(r.index_ instanceof ET,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=He(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=He(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+He(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=He(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+He(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function pg(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==be&&(e.i=r.index_.toString()),e}/**
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
 */class Yl extends ey{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=ro("p:rest:"),this.listens_={}}listen(e,n,s,o){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=Yl.getListenId_(e,s),h={};this.listens_[c]=h;const p=hg(e._queryParams);this.restRequest_(a+".json",p,(m,y)=>{let _=y;if(m===404&&(_=null,m=null),m===null&&this.onDataUpdate_(a,_,!1,s),mi(this.listens_,c)===h){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",o(w,null)}})}unlisten(e,n){const s=Yl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=hg(e._queryParams),s=e._path.toString(),o=new Qs;return this.restRequest_(s+".json",n,(a,c)=>{let h=c;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(s,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,a])=>{o&&o.accessToken&&(n.auth=o.accessToken),a&&a.token&&(n.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ci(n);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let p=null;if(h.status>=200&&h.status<300){try{p=Ms(h.responseText)}catch{at("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,p)}else h.status!==401&&h.status!==404&&at("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
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
 */class RT{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ql(){return{value:null,children:new Map}}function dy(r,e,n){if(oe(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=le(e);r.children.has(s)||r.children.set(s,Ql());const o=r.children.get(s);e=Ie(e),dy(o,e,n)}}function Qc(r,e,n){r.value!==null?n(e,r.value):PT(r,(s,o)=>{const a=new _e(e.toString()+"/"+s);Qc(o,a,n)})}function PT(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class NT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(s,o)=>{n[s]=n[s]-o}),this.last_=e,n}}/**
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
 */const mg=10*1e3,xT=30*1e3,AT=5*60*1e3;class OT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NT(e);const s=mg+(xT-mg)*Math.random();xs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ze(e,(o,a)=>{a>0&&sn(this.statsToReport_,o)&&(n[o]=a,s=!0)}),s&&this.server_.reportStats(n),xs(this.reportStats_.bind(this),Math.floor(Math.random()*2*AT))}}/**
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
 */var jt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(jt||(jt={}));function Ld(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Md(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class Jl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=jt.ACK_USER_WRITE,this.source=Ld()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Jl(fe(),n,this.revert)}}else return U(le(this.path)===e,"operationForChild called for unrelated child."),new Jl(Ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class Hs{constructor(e,n){this.source=e,this.path=n,this.type=jt.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new Hs(this.source,fe()):new Hs(this.source,Ie(this.path))}}/**
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
 */class Ar{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=jt.OVERWRITE}operationForChild(e){return oe(this.path)?new Ar(this.source,fe(),this.snap.getImmediateChild(e)):new Ar(this.source,Ie(this.path),this.snap)}}/**
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
 */class vi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=jt.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new Ar(this.source,fe(),n.value):new vi(this.source,fe(),n)}else return U(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vi(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class rr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class DT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LT(r,e,n,s){const o=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(IT(c.childName,c.snapshotNode))}),Ss(r,o,"child_removed",e,s,n),Ss(r,o,"child_added",e,s,n),Ss(r,o,"child_moved",a,s,n),Ss(r,o,"child_changed",e,s,n),Ss(r,o,"value",e,s,n),o}function Ss(r,e,n,s,o,a){const c=s.filter(h=>h.type===n);c.sort((h,p)=>bT(r,h,p)),c.forEach(h=>{const p=MT(r,h,a);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(p,r.query_))})})}function MT(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function bT(r,e,n){if(e.childName==null||n.childName==null)throw Si("Should only compare child_ events.");const s=new ie(e.childName,e.snapshotNode),o=new ie(n.childName,n.snapshotNode);return r.index_.compare(s,o)}/**
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
 */function da(r,e){return{eventCache:r,serverCache:e}}function As(r,e,n,s){return da(new rr(e,n,s),r.serverCache)}function fy(r,e,n,s){return da(r.eventCache,new rr(e,n,s))}function Xl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Or(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let Ac;const FT=()=>(Ac||(Ac=new _t(Ek)),Ac);class Ce{static fromObject(e){let n=new Ce(null);return Ze(e,(s,o)=>{n=n.set(new _e(s),o)}),n}constructor(e,n=FT()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(oe(e))return null;{const s=le(e),o=this.children.get(s);if(o!==null){const a=o.findRootMostMatchingPathAndValue(Ie(e),n);return a!=null?{path:Me(new _e(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=le(e),s=this.children.get(n);return s!==null?s.subtree(Ie(e)):new Ce(null)}}set(e,n){if(oe(e))return new Ce(n,this.children);{const s=le(e),a=(this.children.get(s)||new Ce(null)).set(Ie(e),n),c=this.children.insert(s,a);return new Ce(this.value,c)}}remove(e){if(oe(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=le(e),s=this.children.get(n);if(s){const o=s.remove(Ie(e));let a;return o.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,o),this.value===null&&a.isEmpty()?new Ce(null):new Ce(this.value,a)}else return this}}get(e){if(oe(e))return this.value;{const n=le(e),s=this.children.get(n);return s?s.get(Ie(e)):null}}setTree(e,n){if(oe(e))return n;{const s=le(e),a=(this.children.get(s)||new Ce(null)).setTree(Ie(e),n);let c;return a.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,a),new Ce(this.value,c)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((o,a)=>{s[o]=a.fold_(Me(e,o),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,s){const o=this.value?s(n,this.value):!1;if(o)return o;if(oe(e))return null;{const a=le(e),c=this.children.get(a);return c?c.findOnPath_(Ie(e),Me(n,a),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,s){if(oe(e))return this;{this.value&&s(n,this.value);const o=le(e),a=this.children.get(o);return a?a.foreachOnPath_(Ie(e),Me(n,o),s):new Ce(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((s,o)=>{o.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Wt{constructor(e){this.writeTree_=e}static empty(){return new Wt(new Ce(null))}}function Os(r,e,n){if(oe(e))return new Wt(new Ce(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let a=s.value;const c=lt(o,e);return a=a.updateChild(c,n),new Wt(r.writeTree_.set(o,a))}else{const o=new Ce(n),a=r.writeTree_.setTree(e,o);return new Wt(a)}}}function Jc(r,e,n){let s=r;return Ze(n,(o,a)=>{s=Os(s,Me(e,o),a)}),s}function gg(r,e){if(oe(e))return Wt.empty();{const n=r.writeTree_.setTree(e,new Ce(null));return new Wt(n)}}function Xc(r,e){return Mr(r,e)!=null}function Mr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function _g(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(be,(s,o)=>{e.push(new ie(s,o))}):r.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new ie(s,o.value))}),e}function er(r,e){if(oe(e))return r;{const n=Mr(r,e);return n!=null?new Wt(new Ce(n)):new Wt(r.writeTree_.subtree(e))}}function Zc(r){return r.writeTree_.isEmpty()}function wi(r,e){return hy(fe(),r.writeTree_,e)}function hy(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((o,a)=>{o===".priority"?(U(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):n=hy(Me(r,o),a,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Me(r,".priority"),s)),n}}/**
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
 */function fa(r,e){return _y(e,r)}function UT(r,e,n,s,o){U(s>r.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:o}),o&&(r.visibleWrites=Os(r.visibleWrites,e,n)),r.lastWriteId=s}function zT(r,e,n,s){U(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Jc(r.visibleWrites,e,n),r.lastWriteId=s}function jT(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function WT(r,e){const n=r.allWrites.findIndex(h=>h.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let o=s.visible,a=!1,c=r.allWrites.length-1;for(;o&&c>=0;){const h=r.allWrites[c];h.visible&&(c>=n&&BT(h,s.path)?o=!1:xt(s.path,h.path)&&(a=!0)),c--}if(o){if(a)return VT(r),!0;if(s.snap)r.visibleWrites=gg(r.visibleWrites,s.path);else{const h=s.children;Ze(h,p=>{r.visibleWrites=gg(r.visibleWrites,Me(s.path,p))})}return!0}else return!1}function BT(r,e){if(r.snap)return xt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&xt(Me(r.path,n),e))return!0;return!1}function VT(r){r.visibleWrites=py(r.allWrites,HT,fe()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function HT(r){return r.visible}function py(r,e,n){let s=Wt.empty();for(let o=0;o<r.length;++o){const a=r[o];if(e(a)){const c=a.path;let h;if(a.snap)xt(n,c)?(h=lt(n,c),s=Os(s,h,a.snap)):xt(c,n)&&(h=lt(c,n),s=Os(s,fe(),a.snap.getChild(h)));else if(a.children){if(xt(n,c))h=lt(n,c),s=Jc(s,h,a.children);else if(xt(c,n))if(h=lt(c,n),oe(h))s=Jc(s,fe(),a.children);else{const p=mi(a.children,le(h));if(p){const m=p.getChild(Ie(h));s=Os(s,fe(),m)}}}else throw Si("WriteRecord should have .snap or .children")}}return s}function my(r,e,n,s,o){if(!s&&!o){const a=Mr(r.visibleWrites,e);if(a!=null)return a;{const c=er(r.visibleWrites,e);if(Zc(c))return n;if(n==null&&!Xc(c,fe()))return null;{const h=n||X.EMPTY_NODE;return wi(c,h)}}}else{const a=er(r.visibleWrites,e);if(!o&&Zc(a))return n;if(!o&&n==null&&!Xc(a,fe()))return null;{const c=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(xt(m.path,e)||xt(e,m.path))},h=py(r.allWrites,c,e),p=n||X.EMPTY_NODE;return wi(h,p)}}}function $T(r,e,n){let s=X.EMPTY_NODE;const o=Mr(r.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(be,(a,c)=>{s=s.updateImmediateChild(a,c)}),s;if(n){const a=er(r.visibleWrites,e);return n.forEachChild(be,(c,h)=>{const p=wi(er(a,new _e(c)),h);s=s.updateImmediateChild(c,p)}),_g(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const a=er(r.visibleWrites,e);return _g(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function GT(r,e,n,s,o){U(s||o,"Either existingEventSnap or existingServerSnap must exist");const a=Me(e,n);if(Xc(r.visibleWrites,a))return null;{const c=er(r.visibleWrites,a);return Zc(c)?o.getChild(n):wi(c,o.getChild(n))}}function KT(r,e,n,s){const o=Me(e,n),a=Mr(r.visibleWrites,o);if(a!=null)return a;if(s.isCompleteForChild(n)){const c=er(r.visibleWrites,o);return wi(c,s.getNode().getImmediateChild(n))}else return null}function qT(r,e){return Mr(r.visibleWrites,e)}function YT(r,e,n,s,o,a,c){let h;const p=er(r.visibleWrites,e),m=Mr(p,fe());if(m!=null)h=m;else if(n!=null)h=wi(p,n);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const y=[],_=c.getCompare(),w=a?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let T=w.getNext();for(;T&&y.length<o;)_(T,s)!==0&&y.push(T),T=w.getNext();return y}else return[]}function QT(){return{visibleWrites:Wt.empty(),allWrites:[],lastWriteId:-1}}function Zl(r,e,n,s){return my(r.writeTree,r.treePath,e,n,s)}function Fd(r,e){return $T(r.writeTree,r.treePath,e)}function yg(r,e,n,s){return GT(r.writeTree,r.treePath,e,n,s)}function ea(r,e){return qT(r.writeTree,Me(r.treePath,e))}function JT(r,e,n,s,o,a){return YT(r.writeTree,r.treePath,e,n,s,o,a)}function Ud(r,e,n){return KT(r.writeTree,r.treePath,e,n)}function gy(r,e){return _y(Me(r.treePath,e),r.writeTree)}function _y(r,e){return{treePath:r,writeTree:e}}/**
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
 */class XT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const a=o.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(s,Bs(s,e.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(s,Ws(s,o.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(s,yi(s,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(s,Bs(s,e.snapshotNode,o.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ZT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const yy=new ZT;class zd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ud(this.writes_,e,s)}}getChildAfterChild(e,n,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Or(this.viewCache_),a=JT(this.writes_,o,n,1,s,e);return a.length===0?null:a[0]}}/**
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
 */function e0(r){return{filter:r}}function t0(r,e){U(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function n0(r,e,n,s,o){const a=new XT;let c,h;if(n.type===jt.OVERWRITE){const m=n;m.source.fromUser?c=ed(r,e,m.path,m.snap,s,o,a):(U(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!oe(m.path),c=ta(r,e,m.path,m.snap,s,o,h,a))}else if(n.type===jt.MERGE){const m=n;m.source.fromUser?c=i0(r,e,m.path,m.children,s,o,a):(U(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=td(r,e,m.path,m.children,s,o,h,a))}else if(n.type===jt.ACK_USER_WRITE){const m=n;m.revert?c=l0(r,e,m.path,s,o,a):c=s0(r,e,m.path,m.affectedTree,s,o,a)}else if(n.type===jt.LISTEN_COMPLETE)c=o0(r,e,n.path,s,a);else throw Si("Unknown operation type: "+n.type);const p=a.getChanges();return r0(e,c,p),{viewCache:c,changes:p}}function r0(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=Xl(r);(n.length>0||!r.eventCache.isFullyInitialized()||o&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&n.push(cy(Xl(e)))}}function vy(r,e,n,s,o,a){const c=e.eventCache;if(ea(s,n)!=null)return e;{let h,p;if(oe(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Or(e),y=m instanceof X?m:X.EMPTY_NODE,_=Fd(s,y);h=r.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const m=Zl(s,Or(e));h=r.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=le(n);if(m===".priority"){U(nr(n)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const _=yg(s,n,y,p);_!=null?h=r.filter.updatePriority(y,_):h=c.getNode()}else{const y=Ie(n);let _;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const w=yg(s,n,c.getNode(),p);w!=null?_=c.getNode().getImmediateChild(m).updateChild(y,w):_=c.getNode().getImmediateChild(m)}else _=Ud(s,m,e.serverCache);_!=null?h=r.filter.updateChild(c.getNode(),m,_,y,o,a):h=c.getNode()}}return As(e,h,c.isFullyInitialized()||oe(n),r.filter.filtersNodes())}}function ta(r,e,n,s,o,a,c,h){const p=e.serverCache;let m;const y=c?r.filter:r.filter.getIndexedFilter();if(oe(n))m=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const T=p.getNode().updateChild(n,s);m=y.updateFullNode(p.getNode(),T,null)}else{const T=le(n);if(!p.isCompleteForPath(n)&&nr(n)>1)return e;const P=Ie(n),x=p.getNode().getImmediateChild(T).updateChild(P,s);T===".priority"?m=y.updatePriority(p.getNode(),x):m=y.updateChild(p.getNode(),T,x,P,yy,null)}const _=fy(e,m,p.isFullyInitialized()||oe(n),y.filtersNodes()),w=new zd(o,_,a);return vy(r,_,n,o,w,h)}function ed(r,e,n,s,o,a,c){const h=e.eventCache;let p,m;const y=new zd(o,e,a);if(oe(n))m=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=As(e,m,!0,r.filter.filtersNodes());else{const _=le(n);if(_===".priority")m=r.filter.updatePriority(e.eventCache.getNode(),s),p=As(e,m,h.isFullyInitialized(),h.isFiltered());else{const w=Ie(n),T=h.getNode().getImmediateChild(_);let P;if(oe(w))P=s;else{const L=y.getCompleteChild(_);L!=null?Nd(w)===".priority"&&L.getChild(ny(w)).isEmpty()?P=L:P=L.updateChild(w,s):P=X.EMPTY_NODE}if(T.equals(P))p=e;else{const L=r.filter.updateChild(h.getNode(),_,P,w,y,c);p=As(e,L,h.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function vg(r,e){return r.eventCache.isCompleteForChild(e)}function i0(r,e,n,s,o,a,c){let h=e;return s.foreach((p,m)=>{const y=Me(n,p);vg(e,le(y))&&(h=ed(r,h,y,m,o,a,c))}),s.foreach((p,m)=>{const y=Me(n,p);vg(e,le(y))||(h=ed(r,h,y,m,o,a,c))}),h}function wg(r,e,n){return n.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function td(r,e,n,s,o,a,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;oe(n)?m=s:m=new Ce(null).setTree(n,s);const y=e.serverCache.getNode();return m.children.inorderTraversal((_,w)=>{if(y.hasChild(_)){const T=e.serverCache.getNode().getImmediateChild(_),P=wg(r,T,w);p=ta(r,p,new _e(_),P,o,a,c,h)}}),m.children.inorderTraversal((_,w)=>{const T=!e.serverCache.isCompleteForChild(_)&&w.value===null;if(!y.hasChild(_)&&!T){const P=e.serverCache.getNode().getImmediateChild(_),L=wg(r,P,w);p=ta(r,p,new _e(_),L,o,a,c,h)}}),p}function s0(r,e,n,s,o,a,c){if(ea(o,n)!=null)return e;const h=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(oe(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return ta(r,e,n,p.getNode().getChild(n),o,a,h,c);if(oe(n)){let m=new Ce(null);return p.getNode().forEachChild(pi,(y,_)=>{m=m.set(new _e(y),_)}),td(r,e,n,m,o,a,h,c)}else return e}else{let m=new Ce(null);return s.foreach((y,_)=>{const w=Me(n,y);p.isCompleteForPath(w)&&(m=m.set(y,p.getNode().getChild(w)))}),td(r,e,n,m,o,a,h,c)}}function o0(r,e,n,s,o){const a=e.serverCache,c=fy(e,a.getNode(),a.isFullyInitialized()||oe(n),a.isFiltered());return vy(r,c,n,s,yy,o)}function l0(r,e,n,s,o,a){let c;if(ea(s,n)!=null)return e;{const h=new zd(s,e,o),p=e.eventCache.getNode();let m;if(oe(n)||le(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Zl(s,Or(e));else{const _=e.serverCache.getNode();U(_ instanceof X,"serverChildren would be complete if leaf node"),y=Fd(s,_)}y=y,m=r.filter.updateFullNode(p,y,a)}else{const y=le(n);let _=Ud(s,y,e.serverCache);_==null&&e.serverCache.isCompleteForChild(y)&&(_=p.getImmediateChild(y)),_!=null?m=r.filter.updateChild(p,y,_,Ie(n),h,a):e.eventCache.getNode().hasChild(y)?m=r.filter.updateChild(p,y,X.EMPTY_NODE,Ie(n),h,a):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Zl(s,Or(e)),c.isLeafNode()&&(m=r.filter.updateFullNode(m,c,a)))}return c=e.serverCache.isFullyInitialized()||ea(s,fe())!=null,As(e,m,c,r.filter.filtersNodes())}}/**
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
 */class a0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new Od(s.getIndex()),a=TT(s);this.processor_=e0(a);const c=n.serverCache,h=n.eventCache,p=o.updateFullNode(X.EMPTY_NODE,c.getNode(),null),m=a.updateFullNode(X.EMPTY_NODE,h.getNode(),null),y=new rr(p,c.isFullyInitialized(),o.filtersNodes()),_=new rr(m,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=da(_,y),this.eventGenerator_=new DT(this.query_)}get query(){return this.query_}}function u0(r){return r.viewCache_.serverCache.getNode()}function c0(r){return Xl(r.viewCache_)}function d0(r,e){const n=Or(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function Eg(r){return r.eventRegistrations_.length===0}function f0(r,e){r.eventRegistrations_.push(e)}function Sg(r,e,n){const s=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const o=r.query._path;r.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(n,o);c&&s.push(c)})}if(e){let o=[];for(let a=0;a<r.eventRegistrations_.length;++a){const c=r.eventRegistrations_[a];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(r.eventRegistrations_.slice(a+1));break}}r.eventRegistrations_=o}else r.eventRegistrations_=[];return s}function Cg(r,e,n,s){e.type===jt.MERGE&&e.source.queryId!==null&&(U(Or(r.viewCache_),"We should always have a full cache before handling merges"),U(Xl(r.viewCache_),"Missing event cache, even though we have a server cache"));const o=r.viewCache_,a=n0(r.processor_,o,e,n,s);return t0(r.processor_,a.viewCache),U(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=a.viewCache,wy(r,a.changes,a.viewCache.eventCache.getNode(),null)}function h0(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(be,(a,c)=>{s.push(yi(a,c))}),n.isFullyInitialized()&&s.push(cy(n.getNode())),wy(r,s,n.getNode(),e)}function wy(r,e,n,s){const o=s?[s]:r.eventRegistrations_;return LT(r.eventGenerator_,e,n,o)}/**
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
 */let na;class Ey{constructor(){this.views=new Map}}function p0(r){U(!na,"__referenceConstructor has already been defined"),na=r}function m0(){return U(na,"Reference.ts has not been loaded"),na}function g0(r){return r.views.size===0}function jd(r,e,n,s){const o=e.source.queryId;if(o!==null){const a=r.views.get(o);return U(a!=null,"SyncTree gave us an op for an invalid query."),Cg(a,e,n,s)}else{let a=[];for(const c of r.views.values())a=a.concat(Cg(c,e,n,s));return a}}function Sy(r,e,n,s,o){const a=e._queryIdentifier,c=r.views.get(a);if(!c){let h=Zl(n,o?s:null),p=!1;h?p=!0:s instanceof X?(h=Fd(n,s),p=!1):(h=X.EMPTY_NODE,p=!1);const m=da(new rr(h,p,!1),new rr(s,o,!1));return new a0(e,m)}return c}function _0(r,e,n,s,o,a){const c=Sy(r,e,s,o,a);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),f0(c,n),h0(c,n)}function y0(r,e,n,s){const o=e._queryIdentifier,a=[];let c=[];const h=ir(r);if(o==="default")for(const[p,m]of r.views.entries())c=c.concat(Sg(m,n,s)),Eg(m)&&(r.views.delete(p),m.query._queryParams.loadsAllData()||a.push(m.query));else{const p=r.views.get(o);p&&(c=c.concat(Sg(p,n,s)),Eg(p)&&(r.views.delete(o),p.query._queryParams.loadsAllData()||a.push(p.query)))}return h&&!ir(r)&&a.push(new(m0())(e._repo,e._path)),{removed:a,events:c}}function Cy(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function tr(r,e){let n=null;for(const s of r.views.values())n=n||d0(s,e);return n}function Iy(r,e){if(e._queryParams.loadsAllData())return ha(r);{const s=e._queryIdentifier;return r.views.get(s)}}function ky(r,e){return Iy(r,e)!=null}function ir(r){return ha(r)!=null}function ha(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ra;function v0(r){U(!ra,"__referenceConstructor has already been defined"),ra=r}function w0(){return U(ra,"Reference.ts has not been loaded"),ra}let E0=1;class Ig{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=QT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ty(r,e,n,s,o){return UT(r.pendingWriteTree_,e,n,s,o),o?Ri(r,new Ar(Ld(),e,n)):[]}function S0(r,e,n,s){zT(r.pendingWriteTree_,e,n,s);const o=Ce.fromObject(n);return Ri(r,new vi(Ld(),e,o))}function Qn(r,e,n=!1){const s=jT(r.pendingWriteTree_,e);if(WT(r.pendingWriteTree_,e)){let a=new Ce(null);return s.snap!=null?a=a.set(fe(),!0):Ze(s.children,c=>{a=a.set(new _e(c),!0)}),Ri(r,new Jl(s.path,a,n))}else return[]}function so(r,e,n){return Ri(r,new Ar(Md(),e,n))}function C0(r,e,n){const s=Ce.fromObject(n);return Ri(r,new vi(Md(),e,s))}function I0(r,e){return Ri(r,new Hs(Md(),e))}function k0(r,e,n){const s=Bd(r,n);if(s){const o=Vd(s),a=o.path,c=o.queryId,h=lt(a,e),p=new Hs(bd(c),h);return Hd(r,a,p)}else return[]}function Ry(r,e,n,s,o=!1){const a=e._path,c=r.syncPointTree_.get(a);let h=[];if(c&&(e._queryIdentifier==="default"||ky(c,e))){const p=y0(c,e,n,s);g0(c)&&(r.syncPointTree_=r.syncPointTree_.remove(a));const m=p.removed;if(h=p.events,!o){const y=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,_=r.syncPointTree_.findOnPath(a,(w,T)=>ir(T));if(y&&!_){const w=r.syncPointTree_.subtree(a);if(!w.isEmpty()){const T=N0(w);for(let P=0;P<T.length;++P){const L=T[P],x=L.query,b=Ay(r,L);r.listenProvider_.startListening(Ds(x),$s(r,x),b.hashFn,b.onComplete)}}}!_&&m.length>0&&!s&&(y?r.listenProvider_.stopListening(Ds(e),null):m.forEach(w=>{const T=r.queryToTagMap.get(pa(w));r.listenProvider_.stopListening(Ds(w),T)}))}x0(r,m)}return h}function Py(r,e,n,s){const o=Bd(r,s);if(o!=null){const a=Vd(o),c=a.path,h=a.queryId,p=lt(c,e),m=new Ar(bd(h),p,n);return Hd(r,c,m)}else return[]}function T0(r,e,n,s){const o=Bd(r,s);if(o){const a=Vd(o),c=a.path,h=a.queryId,p=lt(c,e),m=Ce.fromObject(n),y=new vi(bd(h),p,m);return Hd(r,c,y)}else return[]}function R0(r,e,n,s=!1){const o=e._path;let a=null,c=!1;r.syncPointTree_.foreachOnPath(o,(w,T)=>{const P=lt(w,o);a=a||tr(T,P),c=c||ir(T)});let h=r.syncPointTree_.get(o);h?(c=c||ir(h),a=a||tr(h,fe())):(h=new Ey,r.syncPointTree_=r.syncPointTree_.set(o,h));let p;a!=null?p=!0:(p=!1,a=X.EMPTY_NODE,r.syncPointTree_.subtree(o).foreachChild((T,P)=>{const L=tr(P,fe());L&&(a=a.updateImmediateChild(T,L))}));const m=ky(h,e);if(!m&&!e._queryParams.loadsAllData()){const w=pa(e);U(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const T=A0();r.queryToTagMap.set(w,T),r.tagToQueryMap.set(T,w)}const y=fa(r.pendingWriteTree_,o);let _=_0(h,e,n,y,a,p);if(!m&&!c&&!s){const w=Iy(h,e);_=_.concat(O0(r,e,w))}return _}function Wd(r,e,n){const o=r.pendingWriteTree_,a=r.syncPointTree_.findOnPath(e,(c,h)=>{const p=lt(c,e),m=tr(h,p);if(m)return m});return my(o,e,a,n,!0)}function P0(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(m,y)=>{const _=lt(m,n);s=s||tr(y,_)});let o=r.syncPointTree_.get(n);o?s=s||tr(o,fe()):(o=new Ey,r.syncPointTree_=r.syncPointTree_.set(n,o));const a=s!=null,c=a?new rr(s,!0,!1):null,h=fa(r.pendingWriteTree_,e._path),p=Sy(o,e,h,a?c.getNode():X.EMPTY_NODE,a);return c0(p)}function Ri(r,e){return Ny(e,r.syncPointTree_,null,fa(r.pendingWriteTree_,fe()))}function Ny(r,e,n,s){if(oe(r.path))return xy(r,e,n,s);{const o=e.get(fe());n==null&&o!=null&&(n=tr(o,fe()));let a=[];const c=le(r.path),h=r.operationForChild(c),p=e.children.get(c);if(p&&h){const m=n?n.getImmediateChild(c):null,y=gy(s,c);a=a.concat(Ny(h,p,m,y))}return o&&(a=a.concat(jd(o,r,s,n))),a}}function xy(r,e,n,s){const o=e.get(fe());n==null&&o!=null&&(n=tr(o,fe()));let a=[];return e.children.inorderTraversal((c,h)=>{const p=n?n.getImmediateChild(c):null,m=gy(s,c),y=r.operationForChild(c);y&&(a=a.concat(xy(y,h,p,m)))}),o&&(a=a.concat(jd(o,r,s,n))),a}function Ay(r,e){const n=e.query,s=$s(r,n);return{hashFn:()=>(u0(e)||X.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?k0(r,n._path,s):I0(r,n._path);{const a=Ik(o,n);return Ry(r,n,null,a)}}}}function $s(r,e){const n=pa(e);return r.queryToTagMap.get(n)}function pa(r){return r._path.toString()+"$"+r._queryIdentifier}function Bd(r,e){return r.tagToQueryMap.get(e)}function Vd(r){const e=r.indexOf("$");return U(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new _e(r.substr(0,e))}}function Hd(r,e,n){const s=r.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const o=fa(r.pendingWriteTree_,e);return jd(s,n,o,null)}function N0(r){return r.fold((e,n,s)=>{if(n&&ir(n))return[ha(n)];{let o=[];return n&&(o=Cy(n)),Ze(s,(a,c)=>{o=o.concat(c)}),o}})}function Ds(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(w0())(r._repo,r._path):r}function x0(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const o=pa(s),a=r.queryToTagMap.get(o);r.queryToTagMap.delete(o),r.tagToQueryMap.delete(a)}}}function A0(){return E0++}function O0(r,e,n){const s=e._path,o=$s(r,e),a=Ay(r,n),c=r.listenProvider_.startListening(Ds(e),o,a.hashFn,a.onComplete),h=r.syncPointTree_.subtree(s);if(o)U(!ir(h.value),"If we're adding a query, it shouldn't be shadowed");else{const p=h.fold((m,y,_)=>{if(!oe(m)&&y&&ir(y))return[ha(y).query];{let w=[];return y&&(w=w.concat(Cy(y).map(T=>T.query))),Ze(_,(T,P)=>{w=w.concat(P)}),w}});for(let m=0;m<p.length;++m){const y=p[m];r.listenProvider_.stopListening(Ds(y),$s(r,y))}}return c}/**
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
 */class $d{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $d(n)}node(){return this.node_}}class Gd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Gd(this.syncTree_,n)}node(){return Wd(this.syncTree_,this.path_)}}const D0=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},kg=function(r,e,n){if(!r||typeof r!="object")return r;if(U(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return L0(r[".sv"],e,n);if(typeof r[".sv"]=="object")return M0(r[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},L0=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+r)}},M0=function(r,e,n){r.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const o=e.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},Oy=function(r,e,n,s){return Kd(e,new Gd(n,r),s)},Dy=function(r,e,n){return Kd(r,new $d(e),n)};function Kd(r,e,n){const s=r.getPriority().val(),o=kg(s,e.getImmediateChild(".priority"),n);let a;if(r.isLeafNode()){const c=r,h=kg(c.getValue(),e,n);return h!==c.getValue()||o!==c.getPriority().val()?new qe(h,Ve(o)):r}else{const c=r;return a=c,o!==c.getPriority().val()&&(a=a.updatePriority(new qe(o))),c.forEachChild(be,(h,p)=>{const m=Kd(p,e.getImmediateChild(h),n);m!==p&&(a=a.updateImmediateChild(h,m))}),a}}/**
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
 */class qd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yd(r,e){let n=e instanceof _e?e:new _e(e),s=r,o=le(n);for(;o!==null;){const a=mi(s.node.children,o)||{children:{},childCount:0};s=new qd(o,s,a),n=Ie(n),o=le(n)}return s}function Pi(r){return r.node.value}function Ly(r,e){r.node.value=e,nd(r)}function My(r){return r.node.childCount>0}function b0(r){return Pi(r)===void 0&&!My(r)}function ma(r,e){Ze(r.node.children,(n,s)=>{e(new qd(n,r,s))})}function by(r,e,n,s){n&&e(r),ma(r,o=>{by(o,e,!0)})}function F0(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function oo(r){return new _e(r.parent===null?r.name:oo(r.parent)+"/"+r.name)}function nd(r){r.parent!==null&&U0(r.parent,r.name,r)}function U0(r,e,n){const s=b0(n),o=sn(r.node.children,e);s&&o?(delete r.node.children[e],r.node.childCount--,nd(r)):!s&&!o&&(r.node.children[e]=n.node,r.node.childCount++,nd(r))}/**
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
 */const z0=/[\[\].#$\/\u0000-\u001F\u007F]/,j0=/[\[\].#$\u0000-\u001F\u007F]/,Oc=10*1024*1024,Qd=function(r){return typeof r=="string"&&r.length!==0&&!z0.test(r)},Fy=function(r){return typeof r=="string"&&r.length!==0&&!j0.test(r)},W0=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Fy(r)},B0=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Id(r)||r&&typeof r=="object"&&sn(r,".sv")},Uy=function(r,e,n,s){s&&e===void 0||ga(sa(r,"value"),e,n)},ga=function(r,e,n){const s=n instanceof _e?new iT(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Ir(s));if(typeof e=="function")throw new Error(r+"contains a function "+Ir(s)+" with contents = "+e.toString());if(Id(e))throw new Error(r+"contains "+e.toString()+" "+Ir(s));if(typeof e=="string"&&e.length>Oc/3&&oa(e)>Oc)throw new Error(r+"contains a string greater than "+Oc+" utf8 bytes "+Ir(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,a=!1;if(Ze(e,(c,h)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!Qd(c)))throw new Error(r+" contains an invalid key ("+c+") "+Ir(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sT(s,c),ga(r,h,s),oT(s)}),o&&a)throw new Error(r+' contains ".value" child '+Ir(s)+" in addition to actual children.")}},V0=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const a=js(s);for(let c=0;c<a.length;c++)if(!(a[c]===".priority"&&c===a.length-1)){if(!Qd(a[c]))throw new Error(r+"contains an invalid key ("+a[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rT);let o=null;for(n=0;n<e.length;n++){if(s=e[n],o!==null&&xt(o,s))throw new Error(r+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},H0=function(r,e,n,s){const o=sa(r,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const a=[];Ze(e,(c,h)=>{const p=new _e(c);if(ga(o,h,Me(n,p)),Nd(p)===".priority"&&!B0(h))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(p)}),V0(o,a)},zy=function(r,e,n,s){if(!Fy(n))throw new Error(sa(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$0=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zy(r,e,n)},Jd=function(r,e){if(le(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},G0=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!W0(n))throw new Error(sa(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class K0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xd(r,e){let n=null;for(let s=0;s<e.length;s++){const o=e[s],a=o.getPath();n!==null&&!ry(a,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(o)}n&&r.eventLists_.push(n)}function At(r,e,n){Xd(r,n),q0(r,s=>xt(s,e)||xt(e,s))}function q0(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const o=r.eventLists_[s];if(o){const a=o.path;e(a)?(Y0(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function Y0(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();Ns&&Xe("event: "+n.toString()),Ti(s)}}}/**
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
 */const Q0="repo_interrupt",J0=25;class X0{constructor(e,n,s,o){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new K0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ql(),this.transactionQueueTree_=new qd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Z0(r,e,n){if(r.stats_=Rd(r.repoInfo_),r.forceRestClient_||Pk())r.server_=new Yl(r.repoInfo_,(s,o,a,c)=>{Tg(r,s,o,a,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Rg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new wn(r.repoInfo_,e,(s,o,a,c)=>{Tg(r,s,o,a,c)},s=>{Rg(r,s)},s=>{eR(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=Dk(r.repoInfo_,()=>new OT(r.stats_,r.server_)),r.infoData_=new RT,r.infoSyncTree_=new Ig({startListening:(s,o,a,c)=>{let h=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(h=so(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),Zd(r,"connected",!1),r.serverSyncTree_=new Ig({startListening:(s,o,a,c)=>(r.server_.listen(s,a,o,(h,p)=>{const m=c(h,p);At(r.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{r.server_.unlisten(s,o)}})}function jy(r){const n=r.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _a(r){return D0({timestamp:jy(r)})}function Tg(r,e,n,s,o){r.dataUpdateCount++;const a=new _e(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let c=[];if(o)if(s){const p=Ul(n,m=>Ve(m));c=T0(r.serverSyncTree_,a,p,o)}else{const p=Ve(n);c=Py(r.serverSyncTree_,a,p,o)}else if(s){const p=Ul(n,m=>Ve(m));c=C0(r.serverSyncTree_,a,p)}else{const p=Ve(n);c=so(r.serverSyncTree_,a,p)}let h=a;c.length>0&&(h=Ei(r,a)),At(r.eventQueue_,h,c)}function Rg(r,e){Zd(r,"connected",e),e===!1&&iR(r)}function eR(r,e){Ze(e,(n,s)=>{Zd(r,n,s)})}function Zd(r,e,n){const s=new _e("/.info/"+e),o=Ve(n);r.infoData_.updateSnapshot(s,o);const a=so(r.infoSyncTree_,s,o);At(r.eventQueue_,s,a)}function ef(r){return r.nextWriteId_++}function tR(r,e,n){const s=P0(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(o=>{const a=Ve(o).withIndex(e._queryParams.getIndex());R0(r.serverSyncTree_,e,n,!0);let c;if(e._queryParams.loadsAllData())c=so(r.serverSyncTree_,e._path,a);else{const h=$s(r.serverSyncTree_,e);c=Py(r.serverSyncTree_,e._path,a,h)}return At(r.eventQueue_,e._path,c),Ry(r.serverSyncTree_,e,n,null,!0),a},o=>(lo(r,"get for query "+He(e)+" failed: "+o),Promise.reject(new Error(o))))}function nR(r,e,n,s,o){lo(r,"set",{path:e.toString(),value:n,priority:s});const a=_a(r),c=Ve(n,s),h=Wd(r.serverSyncTree_,e),p=Dy(c,h,a),m=ef(r),y=Ty(r.serverSyncTree_,e,p,m,!0);Xd(r.eventQueue_,y),r.server_.put(e.toString(),c.val(!0),(w,T)=>{const P=w==="ok";P||at("set at "+e+" failed: "+w);const L=Qn(r.serverSyncTree_,m,!P);At(r.eventQueue_,e,L),rd(r,o,w,T)});const _=nf(r,e);Ei(r,_),At(r.eventQueue_,_,[])}function rR(r,e,n,s){lo(r,"update",{path:e.toString(),value:n});let o=!0;const a=_a(r),c={};if(Ze(n,(h,p)=>{o=!1,c[h]=Oy(Me(e,h),Ve(p),r.serverSyncTree_,a)}),o)Xe("update() called with empty data.  Don't do anything."),rd(r,s,"ok",void 0);else{const h=ef(r),p=S0(r.serverSyncTree_,e,c,h);Xd(r.eventQueue_,p),r.server_.merge(e.toString(),n,(m,y)=>{const _=m==="ok";_||at("update at "+e+" failed: "+m);const w=Qn(r.serverSyncTree_,h,!_),T=w.length>0?Ei(r,e):e;At(r.eventQueue_,T,w),rd(r,s,m,y)}),Ze(n,m=>{const y=nf(r,Me(e,m));Ei(r,y)}),At(r.eventQueue_,e,[])}}function iR(r){lo(r,"onDisconnectEvents");const e=_a(r),n=Ql();Qc(r.onDisconnect_,fe(),(o,a)=>{const c=Oy(o,a,r.serverSyncTree_,e);dy(n,o,c)});let s=[];Qc(n,fe(),(o,a)=>{s=s.concat(so(r.serverSyncTree_,o,a));const c=nf(r,o);Ei(r,c)}),r.onDisconnect_=Ql(),At(r.eventQueue_,fe(),s)}function sR(r){r.persistentConnection_&&r.persistentConnection_.interrupt(Q0)}function lo(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Xe(n,...e)}function rd(r,e,n,s){e&&Ti(()=>{if(n==="ok")e(null);else{const o=(n||"error").toUpperCase();let a=o;s&&(a+=": "+s);const c=new Error(a);c.code=o,e(c)}})}function Wy(r,e,n){return Wd(r.serverSyncTree_,e,n)||X.EMPTY_NODE}function tf(r,e=r.transactionQueueTree_){if(e||ya(r,e),Pi(e)){const n=Vy(r,e);U(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&oR(r,oo(e),n)}else My(e)&&ma(e,n=>{tf(r,n)})}function oR(r,e,n){const s=n.map(m=>m.currentWriteId),o=Wy(r,e,s);let a=o;const c=o.hash();for(let m=0;m<n.length;m++){const y=n[m];U(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=lt(e,y.path);a=a.updateChild(_,y.currentOutputSnapshotRaw)}const h=a.val(!0),p=e;r.server_.put(p.toString(),h,m=>{lo(r,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const _=[];for(let w=0;w<n.length;w++)n[w].status=2,y=y.concat(Qn(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&_.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();ya(r,Yd(r.transactionQueueTree_,e)),tf(r,r.transactionQueueTree_),At(r.eventQueue_,e,y);for(let w=0;w<_.length;w++)Ti(_[w])}else{if(m==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{at("transaction at "+p.toString()+" failed: "+m);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=m}Ei(r,e)}},c)}function Ei(r,e){const n=By(r,e),s=oo(n),o=Vy(r,n);return lR(r,o,s),s}function lR(r,e,n){if(e.length===0)return;const s=[];let o=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const p=e[h],m=lt(n,p.path);let y=!1,_;if(U(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,_=p.abortReason,o=o.concat(Qn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=J0)y=!0,_="maxretry",o=o.concat(Qn(r.serverSyncTree_,p.currentWriteId,!0));else{const w=Wy(r,p.path,c);p.currentInputSnapshot=w;const T=e[h].update(w.val());if(T!==void 0){ga("transaction failed: Data returned ",T,p.path);let P=Ve(T);typeof T=="object"&&T!=null&&sn(T,".priority")||(P=P.updatePriority(w.getPriority()));const x=p.currentWriteId,b=_a(r),q=Dy(P,w,b);p.currentOutputSnapshotRaw=P,p.currentOutputSnapshotResolved=q,p.currentWriteId=ef(r),c.splice(c.indexOf(x),1),o=o.concat(Ty(r.serverSyncTree_,p.path,q,p.currentWriteId,p.applyLocally)),o=o.concat(Qn(r.serverSyncTree_,x,!0))}else y=!0,_="nodata",o=o.concat(Qn(r.serverSyncTree_,p.currentWriteId,!0))}At(r.eventQueue_,n,o),o=[],y&&(e[h].status=2,function(w){setTimeout(w,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(_==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(_),!1,null))))}ya(r,r.transactionQueueTree_);for(let h=0;h<s.length;h++)Ti(s[h]);tf(r,r.transactionQueueTree_)}function By(r,e){let n,s=r.transactionQueueTree_;for(n=le(e);n!==null&&Pi(s)===void 0;)s=Yd(s,n),e=Ie(e),n=le(e);return s}function Vy(r,e){const n=[];return Hy(r,e,n),n.sort((s,o)=>s.order-o.order),n}function Hy(r,e,n){const s=Pi(e);if(s)for(let o=0;o<s.length;o++)n.push(s[o]);ma(e,o=>{Hy(r,o,n)})}function ya(r,e){const n=Pi(e);if(n){let s=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[s]=n[o],s++);n.length=s,Ly(e,n.length>0?n:void 0)}ma(e,s=>{ya(r,s)})}function nf(r,e){const n=oo(By(r,e)),s=Yd(r.transactionQueueTree_,e);return F0(s,o=>{Dc(r,o)}),Dc(r,s),by(s,o=>{Dc(r,o)}),n}function Dc(r,e){const n=Pi(e);if(n){const s=[];let o=[],a=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(U(a===c-1,"All SENT items should be at beginning of queue."),a=c,n[c].status=3,n[c].abortReason="set"):(U(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),o=o.concat(Qn(r.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?Ly(e,void 0):n.length=a+1,At(r.eventQueue_,oo(e),o);for(let c=0;c<s.length;c++)Ti(s[c])}}/**
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
 */function aR(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let o=n[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function uR(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):at(`Invalid query segment '${n}' in query '${r}'`)}return e}const Pg=function(r,e){const n=cR(r),s=n.namespace;n.domain==="firebase.com"&&In(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&In("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vk();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new K_(n.host,n.secure,s,o,e,"",s!==n.subdomain),path:new _e(n.pathString)}},cR=function(r){let e="",n="",s="",o="",a="",c=!0,h="https",p=443;if(typeof r=="string"){let m=r.indexOf("//");m>=0&&(h=r.substring(0,m-1),r=r.substring(m+2));let y=r.indexOf("/");y===-1&&(y=r.length);let _=r.indexOf("?");_===-1&&(_=r.length),e=r.substring(0,Math.min(y,_)),y<_&&(o=aR(r.substring(y,_)));const w=uR(r.substring(Math.min(r.length,_)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const T=e.slice(0,m);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const P=e.indexOf(".");s=e.substring(0,P).toLowerCase(),n=e.substring(P+1),a=s}"ns"in w&&(a=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:c,scheme:h,pathString:o,namespace:a}};/**
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
 */const Ng="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dR=function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let o;const a=new Array(8);for(o=7;o>=0;o--)a[o]=Ng.charAt(n%64),n=Math.floor(n/64);U(n===0,"Cannot push at time == 0");let c=a.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=Ng.charAt(e[o]);return U(c.length===20,"nextPushId: Length should be 20."),c}}();/**
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
 */class fR{constructor(e,n,s,o){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class hR{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class pR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class rf{constructor(e,n,s,o){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=o}get key(){return oe(this._path)?null:Nd(this._path)}get ref(){return new kn(this._repo,this._path)}get _queryIdentifier(){const e=pg(this._queryParams),n=kd(e);return n==="{}"?"default":n}get _queryObject(){return pg(this._queryParams)}isEqual(e){if(e=it(e),!(e instanceof rf))return!1;const n=this._repo===e._repo,s=ry(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return n&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+nT(this._path)}}class kn extends rf{constructor(e,n){super(e,n,new Dd,!1)}get parent(){const e=ny(this._path);return e===null?null:new kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=Ks(this.ref,e);return new Gs(this._node.getChild(n),s,be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new Gs(o,Ks(this.ref,s),be)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Lc(r,e){return r=it(r),r._checkNotDeleted("ref"),e!==void 0?Ks(r._root,e):r._root}function Ks(r,e){return r=it(r),le(r._path)===null?$0("child","path",e):zy("child","path",e),new kn(r._repo,Me(r._path,e))}function oN(r,e){r=it(r),Jd("push",r._path),Uy("push",e,r._path,!0);const n=jy(r._repo),s=dR(n),o=Ks(r,s),a=Ks(r,s);let c;return e!=null?c=sf(a,e).then(()=>a):c=Promise.resolve(a),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function lN(r){return Jd("remove",r._path),sf(r,null)}function sf(r,e){r=it(r),Jd("set",r._path),Uy("set",e,r._path,!1);const n=new Qs;return nR(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function aN(r,e){H0("update",e,r._path);const n=new Qs;return rR(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function xg(r){r=it(r);const e=new pR(()=>{}),n=new of(e);return tR(r._repo,r,n).then(s=>new Gs(s,new kn(r._repo,r._path),r._queryParams.getIndex()))}class of{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new fR("value",this,new Gs(e.snapshotNode,new kn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hR(this,e,n):null}matches(e){return e instanceof of?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}p0(kn);v0(kn);/**
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
 */const mR="FIREBASE_DATABASE_EMULATOR_HOST",id={};let gR=!1;function _R(r,e,n,s){r.repoInfo_=new K_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function yR(r,e,n,s,o){let a=s||r.options.databaseURL;a===void 0&&(r.options.projectId||In("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",r.options.projectId),a=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=Pg(a,o),h=c.repoInfo,p;typeof process<"u"&&Qm&&(p=Qm[mR]),p?(a=`http://${p}?ns=${h.namespace}`,c=Pg(a,o),h=c.repoInfo):c.repoInfo.secure;const m=new xk(r.name,r.options,e);G0("Invalid Firebase Database URL",c),oe(c.path)||In("Database URL must point to the root of a Firebase Database (not including a child path).");const y=wR(h,r,m,new Nk(r.name,n));return new ER(y,r)}function vR(r,e){const n=id[e];(!n||n[r.key]!==r)&&In(`Database ${e}(${r.repoInfo_}) has already been deleted.`),sR(r),delete n[r.key]}function wR(r,e,n,s){let o=id[e.name];o||(o={},id[e.name]=o);let a=o[r.toURLString()];return a&&In("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new X0(r,gR,n,s),o[r.toURLString()]=a,a}class ER{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Z0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kn(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&In("Cannot call "+e+" on a deleted database.")}}function Dl(r=Yg(),e){const n=pd(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=TE("database");s&&SR(n,...s)}return n}function SR(r,e,n,s={}){r=it(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&In("Cannot call useEmulator() after instance has already been initialized.");const o=r._repoInternal;let a;if(o.repoInfo_.nodeAdmin)s.mockUserToken&&In('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Ol(Ol.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:RE(s.mockUserToken,r.app.options.projectId);a=new Ol(c)}_R(o,e,n,a)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function CR(r){hk(Ii),gi(new Rr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return yR(s,o,a,n)},"PUBLIC").setMultipleInstances(!0)),Zn(Jm,Xm,r),Zn(Jm,Xm,"esm2017")}wn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};wn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};CR();const IR={apiKey:"AIzaSyAvpTCIwskLSVeVInTv9itF8WSXRe42kAs",authDomain:"foodapp-15bc4.firebaseapp.com",databaseURL:"https://foodapp-15bc4-default-rtdb.firebaseio.com",projectId:"foodapp-15bc4",storageBucket:"foodapp-15bc4.appspot.com",messagingSenderId:"942419334286",appId:"1:942419334286:web:a35466599ff5a4173565df",measurementId:"G-B3EXPV6P8V"},Ls=qg(IR),uN=Dl(Ls);class lf{async getUserRoles(e){const n=Dl(Ls),s=Lc(n,`users/${e}/roles`),o=await xg(s);if(o.exists()){const a=o.val(),c=[];return a.admin===!0&&c.push(tn.ADMIN),c.length===0&&c.push(tn.USER),c}return[tn.USER]}async setUserRoles(e,n){const s=Dl(Ls),o=Lc(s,`users/${e}`);await sf(o,n)}async getAllUsers(){const e=Dl(Ls),n=Lc(e,"users"),s=await xg(n);if(s.exists()){const o=s.val();return Object.keys(o).map(c=>({uid:c,email:o[c].email,roles:o[c].roles}))}return[]}}const Cs=uk(Ls);class kR{constructor(){Sl(this,"databaseService");this.databaseService=new lf}signIn(e,n){return qC(Cs,e,n)}signUp(e,n){return KC(Cs,e,n)}signOut(){return XC(Cs)}onAuthStateChanged(e){return JC(Cs,e)}getCurrentUser(){return Cs.currentUser}async getUserRoles(e){return e.email==="dayro@ejemplo.com"?[tn.ADMIN]:this.databaseService.getUserRoles(e.uid)}}const qs=new kR,ao=N.createContext({user:null,roles:null}),$y=({children:r})=>{const[e,n]=N.useState(null),[s,o]=N.useState(null);return N.useEffect(()=>qs.onAuthStateChanged(async c=>{if(n(c),c)try{const h=await qs.getUserRoles(c);o(h)}catch(h){console.error("Error al obtener los roles:",h),o(null)}else o(null)}),[]),z.jsx(ao.Provider,{value:{user:e,roles:s},children:r})};var Is={},Ag;function TR(){if(Ag)return Is;Ag=1,Object.defineProperty(Is,"__esModule",{value:!0}),Is.parse=c,Is.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,T){const P=new a,L=w.length;if(L<2)return P;const x=(T==null?void 0:T.decode)||y;let b=0;do{const q=w.indexOf("=",b);if(q===-1)break;const B=w.indexOf(";",b),te=B===-1?L:B;if(q>te){b=w.lastIndexOf(";",q-1)+1;continue}const he=h(w,b,q),ye=p(w,q,he),ve=w.slice(he,ye);if(P[ve]===void 0){let Oe=h(w,q+1,te),we=p(w,te,Oe);const ze=x(w.slice(Oe,we));P[ve]=ze}b=te+1}while(b<L);return P}function h(w,T,P){do{const L=w.charCodeAt(T);if(L!==32&&L!==9)return T}while(++T<P);return P}function p(w,T,P){for(;T>P;){const L=w.charCodeAt(--T);if(L!==32&&L!==9)return T+1}return P}function m(w,T,P){const L=(P==null?void 0:P.encode)||encodeURIComponent;if(!r.test(w))throw new TypeError(`argument name is invalid: ${w}`);const x=L(T);if(!e.test(x))throw new TypeError(`argument val is invalid: ${T}`);let b=w+"="+x;if(!P)return b;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);b+="; Max-Age="+P.maxAge}if(P.domain){if(!n.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);b+="; Domain="+P.domain}if(P.path){if(!s.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);b+="; Path="+P.path}if(P.expires){if(!_(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);b+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(b+="; HttpOnly"),P.secure&&(b+="; Secure"),P.partitioned&&(b+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":b+="; Priority=Low";break;case"medium":b+="; Priority=Medium";break;case"high":b+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":b+="; SameSite=Strict";break;case"lax":b+="; SameSite=Lax";break;case"none":b+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return b}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function _(w){return o.call(w)==="[object Date]"}return Is}TR();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Og="popstate";function RR(r={}){function e(s,o){let{pathname:a,search:c,hash:h}=s.location;return sd("",{pathname:a,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Ys(o)}return NR(e,n,null,r)}function Ne(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Vt(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function PR(){return Math.random().toString(36).substring(2,10)}function Dg(r,e){return{usr:r.state,key:r.key,idx:e}}function sd(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ni(e):e,state:n,key:e&&e.key||s||PR()}}function Ys({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Ni(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function NR(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:a=!1}=s,c=o.history,h="POP",p=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function _(){h="POP";let x=y(),b=x==null?null:x-m;m=x,p&&p({action:h,location:L.location,delta:b})}function w(x,b){h="PUSH";let q=sd(L.location,x,b);m=y()+1;let B=Dg(q,m),te=L.createHref(q);try{c.pushState(B,"",te)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;o.location.assign(te)}a&&p&&p({action:h,location:L.location,delta:1})}function T(x,b){h="REPLACE";let q=sd(L.location,x,b);m=y();let B=Dg(q,m),te=L.createHref(q);c.replaceState(B,"",te),a&&p&&p({action:h,location:L.location,delta:0})}function P(x){let b=o.location.origin!=="null"?o.location.origin:o.location.href,q=typeof x=="string"?x:Ys(x);return q=q.replace(/ $/,"%20"),Ne(b,`No window.location.(origin|href) available to create URL for href: ${q}`),new URL(q,b)}let L={get action(){return h},get location(){return r(o,c)},listen(x){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Og,_),p=x,()=>{o.removeEventListener(Og,_),p=null}},createHref(x){return e(o,x)},createURL:P,encodeLocation(x){let b=P(x);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:w,replace:T,go(x){return c.go(x)}};return L}function Gy(r,e,n="/"){return xR(r,e,n,!1)}function xR(r,e,n,s){let o=typeof e=="string"?Ni(e):e,a=sr(o.pathname||"/",n);if(a==null)return null;let c=Ky(r);AR(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let m=BR(a);h=jR(c[p],m,s)}return h}function Ky(r,e=[],n=[],s=""){let o=(a,c,h)=>{let p={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(Ne(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=En([s,p.relativePath]),y=n.concat(p);a.children&&a.children.length>0&&(Ne(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ky(a.children,e,y,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:UR(m,a.index),routesMeta:y})};return r.forEach((a,c)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))o(a,c);else for(let p of qy(a.path))o(a,c,p)}),e}function qy(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return o?[a,""]:[a];let c=qy(s.join("/")),h=[];return h.push(...c.map(p=>p===""?a:[a,p].join("/"))),o&&h.push(...c),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function AR(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:zR(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var OR=/^:[\w-]+$/,DR=3,LR=2,MR=1,bR=10,FR=-2,Lg=r=>r==="*";function UR(r,e){let n=r.split("/"),s=n.length;return n.some(Lg)&&(s+=FR),e&&(s+=LR),n.filter(o=>!Lg(o)).reduce((o,a)=>o+(OR.test(a)?DR:a===""?MR:bR),s)}function zR(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function jR(r,e,n=!1){let{routesMeta:s}=r,o={},a="/",c=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,y=a==="/"?e:e.slice(a.length)||"/",_=ia({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),w=p.route;if(!_&&m&&n&&!s[s.length-1].route.index&&(_=ia({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:En([a,_.pathname]),pathnameBase:GR(En([a,_.pathnameBase])),route:w}),_.pathnameBase!=="/"&&(a=En([a,_.pathnameBase]))}return c}function ia(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=WR(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:_},w)=>{if(y==="*"){let P=h[w]||"";c=a.slice(0,a.length-P.length).replace(/(.)\/+$/,"$1")}const T=h[w];return _&&!T?m[y]=void 0:m[y]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:c,pattern:r}}function WR(r,e=!1,n=!0){Vt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function BR(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function sr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function VR(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?Ni(r):r;return{pathname:n?n.startsWith("/")?n:HR(n,e):e,search:KR(s),hash:qR(o)}}function HR(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Mc(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $R(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function af(r){let e=$R(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function uf(r,e,n,s=!1){let o;typeof r=="string"?o=Ni(r):(o={...r},Ne(!o.pathname||!o.pathname.includes("?"),Mc("?","pathname","search",o)),Ne(!o.pathname||!o.pathname.includes("#"),Mc("#","pathname","hash",o)),Ne(!o.search||!o.search.includes("#"),Mc("#","search","hash",o)));let a=r===""||o.pathname==="",c=a?"/":o.pathname,h;if(c==null)h=n;else{let _=e.length-1;if(!s&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),_-=1;o.pathname=w.join("/")}h=_>=0?e[_]:"/"}let p=VR(o,h),m=c&&c!=="/"&&c.endsWith("/"),y=(a||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var En=r=>r.join("/").replace(/\/\/+/g,"/"),GR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),KR=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,qR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function YR(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Yy=["POST","PUT","PATCH","DELETE"];new Set(Yy);var QR=["GET",...Yy];new Set(QR);var xi=N.createContext(null);xi.displayName="DataRouter";var va=N.createContext(null);va.displayName="DataRouterState";var Qy=N.createContext({isTransitioning:!1});Qy.displayName="ViewTransition";var JR=N.createContext(new Map);JR.displayName="Fetchers";var XR=N.createContext(null);XR.displayName="Await";var Ht=N.createContext(null);Ht.displayName="Navigation";var uo=N.createContext(null);uo.displayName="Location";var on=N.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var cf=N.createContext(null);cf.displayName="RouteError";function ZR(r,{relative:e}={}){Ne(Ai(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=N.useContext(Ht),{hash:o,pathname:a,search:c}=co(r,{relative:e}),h=a;return n!=="/"&&(h=a==="/"?n:En([n,a])),s.createHref({pathname:h,search:c,hash:o})}function Ai(){return N.useContext(uo)!=null}function ur(){return Ne(Ai(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(uo).location}var Jy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xy(r){N.useContext(Ht).static||N.useLayoutEffect(r)}function wa(){let{isDataRoute:r}=N.useContext(on);return r?fP():eP()}function eP(){Ne(Ai(),"useNavigate() may be used only in the context of a <Router> component.");let r=N.useContext(xi),{basename:e,navigator:n}=N.useContext(Ht),{matches:s}=N.useContext(on),{pathname:o}=ur(),a=JSON.stringify(af(s)),c=N.useRef(!1);return Xy(()=>{c.current=!0}),N.useCallback((p,m={})=>{if(Vt(c.current,Jy),!c.current)return;if(typeof p=="number"){n.go(p);return}let y=uf(p,JSON.parse(a),o,m.relative==="path");r==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:En([e,y.pathname])),(m.replace?n.replace:n.push)(y,m.state,m)},[e,n,a,o,r])}N.createContext(null);function co(r,{relative:e}={}){let{matches:n}=N.useContext(on),{pathname:s}=ur(),o=JSON.stringify(af(n));return N.useMemo(()=>uf(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function tP(r,e){return Zy(r,e)}function Zy(r,e,n,s){var q;Ne(Ai(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:a}=N.useContext(Ht),{matches:c}=N.useContext(on),h=c[c.length-1],p=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",_=h&&h.route;{let B=_&&_.path||"";ev(m,!_||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let w=ur(),T;if(e){let B=typeof e=="string"?Ni(e):e;Ne(y==="/"||((q=B.pathname)==null?void 0:q.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${B.pathname}" was given in the \`location\` prop.`),T=B}else T=w;let P=T.pathname||"/",L=P;if(y!=="/"){let B=y.replace(/^\//,"").split("/");L="/"+P.replace(/^\//,"").split("/").slice(B.length).join("/")}let x=!a&&n&&n.matches&&n.matches.length>0?n.matches:Gy(r,{pathname:L});Vt(_||x!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Vt(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=oP(x&&x.map(B=>Object.assign({},B,{params:Object.assign({},p,B.params),pathname:En([y,o.encodeLocation?o.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?y:En([y,o.encodeLocation?o.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),c,n,s);return e&&b?N.createElement(uo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},b):b}function nP(){let r=dP(),e=YR(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:a},"ErrorBoundary")," or"," ",N.createElement("code",{style:a},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:o},n):null,c)}var rP=N.createElement(nP,null),iP=class extends N.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?N.createElement(on.Provider,{value:this.props.routeContext},N.createElement(cf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sP({routeContext:r,match:e,children:n}){let s=N.useContext(xi);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(on.Provider,{value:r},n)}function oP(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,a=n==null?void 0:n.errors;if(a!=null){let p=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);Ne(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,h=-1;if(n)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:y,errors:_}=n,w=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||w){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,m,y)=>{let _,w=!1,T=null,P=null;n&&(_=a&&m.route.id?a[m.route.id]:void 0,T=m.route.errorElement||rP,c&&(h<0&&y===0?(ev("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,P=null):h===y&&(w=!0,P=m.route.hydrateFallbackElement||null)));let L=e.concat(o.slice(0,y+1)),x=()=>{let b;return _?b=T:w?b=P:m.route.Component?b=N.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=p,N.createElement(sP,{match:m,routeContext:{outlet:p,matches:L,isDataRoute:n!=null},children:b})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?N.createElement(iP,{location:n.location,revalidation:n.revalidation,component:T,error:_,children:x(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):x()},null)}function df(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lP(r){let e=N.useContext(xi);return Ne(e,df(r)),e}function aP(r){let e=N.useContext(va);return Ne(e,df(r)),e}function uP(r){let e=N.useContext(on);return Ne(e,df(r)),e}function ff(r){let e=uP(r),n=e.matches[e.matches.length-1];return Ne(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function cP(){return ff("useRouteId")}function dP(){var s;let r=N.useContext(cf),e=aP("useRouteError"),n=ff("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function fP(){let{router:r}=lP("useNavigate"),e=ff("useNavigate"),n=N.useRef(!1);return Xy(()=>{n.current=!0}),N.useCallback(async(o,a={})=>{Vt(n.current,Jy),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...a}))},[r,e])}var Mg={};function ev(r,e,n){!e&&!Mg[r]&&(Mg[r]=!0,Vt(!1,n))}N.memo(hP);function hP({routes:r,future:e,state:n}){return Zy(r,void 0,n,e)}function tv({to:r,replace:e,state:n,relative:s}){Ne(Ai(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=N.useContext(Ht);Vt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=N.useContext(on),{pathname:c}=ur(),h=wa(),p=uf(r,af(a),c,s==="path"),m=JSON.stringify(p);return N.useEffect(()=>{h(JSON.parse(m),{replace:e,state:n,relative:s})},[h,m,s,e,n]),null}function li(r){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pP({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:a=!1}){Ne(!Ai(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),h=N.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof n=="string"&&(n=Ni(n));let{pathname:p="/",search:m="",hash:y="",state:_=null,key:w="default"}=n,T=N.useMemo(()=>{let P=sr(p,c);return P==null?null:{location:{pathname:P,search:m,hash:y,state:_,key:w},navigationType:s}},[c,p,m,y,_,w,s]);return Vt(T!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:N.createElement(Ht.Provider,{value:h},N.createElement(uo.Provider,{children:e,value:T}))}function mP({children:r,location:e}){return tP(od(r),e)}function od(r,e=[]){let n=[];return N.Children.forEach(r,(s,o)=>{if(!N.isValidElement(s))return;let a=[...e,o];if(s.type===N.Fragment){n.push.apply(n,od(s.props.children,a));return}Ne(s.type===li,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=od(s.props.children,a)),n.push(c)}),n}var Ll="get",Ml="application/x-www-form-urlencoded";function Ea(r){return r!=null&&typeof r.tagName=="string"}function gP(r){return Ea(r)&&r.tagName.toLowerCase()==="button"}function _P(r){return Ea(r)&&r.tagName.toLowerCase()==="form"}function yP(r){return Ea(r)&&r.tagName.toLowerCase()==="input"}function vP(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function wP(r,e){return r.button===0&&(!e||e==="_self")&&!vP(r)}var Rl=null;function EP(){if(Rl===null)try{new FormData(document.createElement("form"),0),Rl=!1}catch{Rl=!0}return Rl}var SP=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bc(r){return r!=null&&!SP.has(r)?(Vt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ml}"`),null):r}function CP(r,e){let n,s,o,a,c;if(_P(r)){let h=r.getAttribute("action");s=h?sr(h,e):null,n=r.getAttribute("method")||Ll,o=bc(r.getAttribute("enctype"))||Ml,a=new FormData(r)}else if(gP(r)||yP(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||h.getAttribute("action");if(s=p?sr(p,e):null,n=r.getAttribute("formmethod")||h.getAttribute("method")||Ll,o=bc(r.getAttribute("formenctype"))||bc(h.getAttribute("enctype"))||Ml,a=new FormData(h,r),!EP()){let{name:m,type:y,value:_}=r;if(y==="image"){let w=m?`${m}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else m&&a.append(m,_)}}else{if(Ea(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ll,s=null,o=Ml,c=r}return a&&o==="text/plain"&&(c=a,a=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:a,body:c}}function hf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function IP(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kP(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function TP(r,e,n){let s=await Promise.all(r.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await IP(a,n);return c.links?c.links():[]}return[]}));return xP(s.flat(1).filter(kP).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function bg(r,e,n,s,o,a){let c=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,h=(p,m)=>{var y;return n[m].pathname!==p.pathname||((y=n[m].route.path)==null?void 0:y.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,m)=>c(p,m)||h(p,m)):a==="data"?e.filter((p,m)=>{var _;let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function RP(r,e){return PP(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function PP(r){return[...new Set(r)]}function NP(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function xP(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let a=JSON.stringify(NP(o));return n.has(a)||(n.add(a),s.push({key:a,link:o})),s},[])}function AP(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function OP(){let r=N.useContext(xi);return hf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function DP(){let r=N.useContext(va);return hf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var pf=N.createContext(void 0);pf.displayName="FrameworkContext";function nv(){let r=N.useContext(pf);return hf(r,"You must render this element inside a <HydratedRouter> element"),r}function LP(r,e){let n=N.useContext(pf),[s,o]=N.useState(!1),[a,c]=N.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:_}=e,w=N.useRef(null);N.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let L=b=>{b.forEach(q=>{c(q.isIntersecting)})},x=new IntersectionObserver(L,{threshold:.5});return w.current&&x.observe(w.current),()=>{x.disconnect()}}},[r]),N.useEffect(()=>{if(s){let L=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(L)}}},[s]);let T=()=>{o(!0)},P=()=>{o(!1),c(!1)};return n?r!=="intent"?[a,w,{}]:[a,w,{onFocus:ks(h,T),onBlur:ks(p,P),onMouseEnter:ks(m,T),onMouseLeave:ks(y,P),onTouchStart:ks(_,T)}]:[!1,w,{}]}function ks(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function MP({page:r,...e}){let{router:n}=OP(),s=N.useMemo(()=>Gy(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?N.createElement(FP,{page:r,matches:s,...e}):null}function bP(r){let{manifest:e,routeModules:n}=nv(),[s,o]=N.useState([]);return N.useEffect(()=>{let a=!1;return TP(r,e,n).then(c=>{a||o(c)}),()=>{a=!0}},[r,e,n]),s}function FP({page:r,matches:e,...n}){let s=ur(),{manifest:o,routeModules:a}=nv(),{loaderData:c,matches:h}=DP(),p=N.useMemo(()=>bg(r,e,h,o,s,"data"),[r,e,h,o,s]),m=N.useMemo(()=>bg(r,e,h,o,s,"assets"),[r,e,h,o,s]),y=N.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let T=new Set,P=!1;if(e.forEach(x=>{var q;let b=o.routes[x.route.id];!b||!b.hasLoader||(!p.some(B=>B.route.id===x.route.id)&&x.route.id in c&&((q=a[x.route.id])!=null&&q.shouldRevalidate)||b.hasClientLoader?P=!0:T.add(x.route.id))}),T.size===0)return[];let L=AP(r);return P&&T.size>0&&L.searchParams.set("_routes",e.filter(x=>T.has(x.route.id)).map(x=>x.route.id).join(",")),[L.pathname+L.search]},[c,s,o,p,e,r,a]),_=N.useMemo(()=>RP(m,o),[m,o]),w=bP(m);return N.createElement(N.Fragment,null,y.map(T=>N.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...n})),_.map(T=>N.createElement("link",{key:T,rel:"modulepreload",href:T,...n})),w.map(({key:T,link:P})=>N.createElement("link",{key:T,...P})))}function UP(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rv&&(window.__reactRouterVersion="7.1.5")}catch{}function zP({basename:r,children:e,window:n}){let s=N.useRef();s.current==null&&(s.current=RR({window:n,v5Compat:!0}));let o=s.current,[a,c]=N.useState({action:o.action,location:o.location}),h=N.useCallback(p=>{N.startTransition(()=>c(p))},[c]);return N.useLayoutEffect(()=>o.listen(h),[o,h]),N.createElement(pP,{basename:r,children:e,location:a.location,navigationType:a.action,navigator:o})}var iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kr=N.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:a,replace:c,state:h,target:p,to:m,preventScrollReset:y,viewTransition:_,...w},T){let{basename:P}=N.useContext(Ht),L=typeof m=="string"&&iv.test(m),x,b=!1;if(typeof m=="string"&&L&&(x=m,rv))try{let we=new URL(window.location.href),ze=m.startsWith("//")?new URL(we.protocol+m):new URL(m),$t=sr(ze.pathname,P);ze.origin===we.origin&&$t!=null?m=$t+ze.search+ze.hash:b=!0}catch{Vt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=ZR(m,{relative:o}),[B,te,he]=LP(s,w),ye=VP(m,{replace:c,state:h,target:p,preventScrollReset:y,relative:o,viewTransition:_});function ve(we){e&&e(we),we.defaultPrevented||ye(we)}let Oe=N.createElement("a",{...w,...he,href:x||q,onClick:b||a?e:ve,ref:UP(T,te),target:p,"data-discover":!L&&n==="render"?"true":void 0});return B&&!L?N.createElement(N.Fragment,null,Oe,N.createElement(MP,{page:q})):Oe});kr.displayName="Link";var jP=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:a,to:c,viewTransition:h,children:p,...m},y){let _=co(c,{relative:m.relative}),w=ur(),T=N.useContext(va),{navigator:P,basename:L}=N.useContext(Ht),x=T!=null&&qP(_)&&h===!0,b=P.encodeLocation?P.encodeLocation(_).pathname:_.pathname,q=w.pathname,B=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;n||(q=q.toLowerCase(),B=B?B.toLowerCase():null,b=b.toLowerCase()),B&&L&&(B=sr(B,L)||B);const te=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let he=q===b||!o&&q.startsWith(b)&&q.charAt(te)==="/",ye=B!=null&&(B===b||!o&&B.startsWith(b)&&B.charAt(b.length)==="/"),ve={isActive:he,isPending:ye,isTransitioning:x},Oe=he?e:void 0,we;typeof s=="function"?we=s(ve):we=[s,he?"active":null,ye?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let ze=typeof a=="function"?a(ve):a;return N.createElement(kr,{...m,"aria-current":Oe,className:we,ref:y,style:ze,to:c,viewTransition:h},typeof p=="function"?p(ve):p)});jP.displayName="NavLink";var WP=N.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:a,method:c=Ll,action:h,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:_,...w},T)=>{let P=GP(),L=KP(h,{relative:m}),x=c.toLowerCase()==="get"?"get":"post",b=typeof h=="string"&&iv.test(h),q=B=>{if(p&&p(B),B.defaultPrevented)return;B.preventDefault();let te=B.nativeEvent.submitter,he=(te==null?void 0:te.getAttribute("formmethod"))||c;P(te||B.currentTarget,{fetcherKey:e,method:he,navigate:n,replace:o,state:a,relative:m,preventScrollReset:y,viewTransition:_})};return N.createElement("form",{ref:T,method:x,action:L,onSubmit:s?p:q,...w,"data-discover":!b&&r==="render"?"true":void 0})});WP.displayName="Form";function BP(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sv(r){let e=N.useContext(xi);return Ne(e,BP(r)),e}function VP(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:a,viewTransition:c}={}){let h=wa(),p=ur(),m=co(r,{relative:a});return N.useCallback(y=>{if(wP(y,e)){y.preventDefault();let _=n!==void 0?n:Ys(p)===Ys(m);h(r,{replace:_,state:s,preventScrollReset:o,relative:a,viewTransition:c})}},[p,h,m,n,s,e,r,o,a,c])}var HP=0,$P=()=>`__${String(++HP)}__`;function GP(){let{router:r}=sv("useSubmit"),{basename:e}=N.useContext(Ht),n=cP();return N.useCallback(async(s,o={})=>{let{action:a,method:c,encType:h,formData:p,body:m}=CP(s,e);if(o.navigate===!1){let y=o.fetcherKey||$P();await r.fetch(y,n,o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await r.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function KP(r,{relative:e}={}){let{basename:n}=N.useContext(Ht),s=N.useContext(on);Ne(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),a={...co(r||".",{relative:e})},c=ur();if(r==null){a.search=c.search;let h=new URLSearchParams(a.search),p=h.getAll("index");if(p.some(y=>y==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let y=h.toString();a.search=y?`?${y}`:""}}return(!r||r===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:En([n,a.pathname])),Ys(a)}function qP(r,e={}){let n=N.useContext(Qy);Ne(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=sv("useViewTransitionState"),o=co(r,{relative:e.relative});if(!n.isTransitioning)return!1;let a=sr(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=sr(n.nextLocation.pathname,s)||n.nextLocation.pathname;return ia(o.pathname,c)!=null||ia(o.pathname,a)!=null}new TextEncoder;const mf=()=>{const{user:r,roles:e}=N.useContext(ao);return z.jsx("nav",{className:"navbar",children:z.jsxs("ul",{className:"nav-menu",children:[z.jsx("li",{children:z.jsx(kr,{to:"/FoodApp",children:"Home"})}),r&&(e==null?void 0:e.includes(tn.USER))&&z.jsx("li",{children:z.jsx(kr,{to:"/dashboard",children:"Dashboard"})}),r&&(e==null?void 0:e.includes(tn.ADMIN))&&z.jsx("li",{children:z.jsx(kr,{to:"/admin",children:"Admin"})}),!r&&z.jsx(kr,{to:"/login",className:"buton login",children:"Iniciar Sesión"}),!r&&z.jsx(kr,{to:"/register",className:"buton register",children:"Registrarse"}),r&&z.jsx("button",{onClick:()=>qs.signOut(),children:"Cerrar Sesión"})]})})},YP=ad.lazy(()=>mE(()=>import("./Foods-BJ9Lviz9.js"),[])),QP=ad.createContext([]);function JP(){const[r,e]=N.useState(!1),[n,s]=N.useState([{id:1,name:"Hamburguesa de Pollo",quantity:40,desc:"Hamburguesa de pollo frito - … y mayonesa",price:24,image:"cb.jpg"},{id:2,name:"Hamburguesa de Carne",quantity:20,desc:"Hamburguesa de carne de ternera y patatas fritas",price:31,image:"ter.jpg"},{id:3,name:"Hamburguesa de Cerdo",quantity:35,desc:"Hamburguesa de cerdo con salsa de la casa",price:38,image:"cer.jpg"}]),{roles:o}=N.useContext(ao);N.useEffect(()=>{wm.info("Aplicación cargada correctamente")},[]);const a=()=>{wm.info(`Cambio de página a: ${r?"Menús":"Pedir Comida"}`),e(!r)};return z.jsxs($y,{children:[z.jsx(mf,{}),z.jsx(QP.Provider,{value:n,children:z.jsxs("div",{className:"App",children:[z.jsx("h2",{className:"title",children:"Comida Rápida Online"}),z.jsx("button",{className:"toggleButton",onClick:a,children:r?"Disponibilidad":"Pedir Comida"}),!r&&z.jsxs(z.Fragment,{children:[z.jsx("h3",{className:"subTitle",children:"Menús"}),z.jsx("h5",{children:"Este es el listado de productos que tiene actualmente la tienda de comida, de click en 'Pedir Comida' para ver a detalle cada uno y realizar un pedido"}),z.jsx("ul",{className:"ulApp",children:n.map(c=>z.jsxs("li",{className:"liApp",children:[z.jsxs("p",{className:"itemsColor",children:[" ",c.name]}),(o==null?void 0:o.includes(tn.ADMIN))&&z.jsxs("p",{className:"itemsColor",children:["Disponible: ",c.quantity]})]},c.id))}),(o==null?void 0:o.includes(tn.ADMIN))&&z.jsx("h5",{children:"*Debido a que eres Admistrador, puedes observar el stock disponible para controlar las cantidades del menú"})]}),r&&z.jsx(_E,{fallback:z.jsx("div",{style:{color:"red"},children:"¡Error al cargar el menú!"}),children:z.jsx(N.Suspense,{fallback:z.jsx("div",{children:"Cargando menús..."}),children:z.jsx(YP,{})})})]})})]})}const XP=()=>{const[r,e]=N.useState(""),[n,s]=N.useState(""),[o,a]=N.useState(""),[c,h]=N.useState(""),p=wa(),m=async y=>{y.preventDefault(),a("");try{const _=await qs.signIn(r,n);console.log("Usuario autenticado:",_.user),h("Has iniciado sesión correctamente"),setTimeout(()=>p("/FoodApp"),1e3)}catch(_){console.error("Error al iniciar sesión:",_),a(_.message)}};return z.jsxs("form",{onSubmit:m,className:"style-form",children:[z.jsx("h2",{children:"Iniciar Sesión"}),z.jsx("input",{type:"email",placeholder:"Correo electrónico",value:r,onChange:y=>e(y.target.value)}),z.jsx("input",{type:"password",placeholder:"Contraseña",value:n,onChange:y=>s(y.target.value)}),z.jsxs("div",{className:"button-container",children:[z.jsx("button",{className:"btn",onClick:()=>p(-1),children:"Volver"}),z.jsx("button",{type:"submit",children:"Ingresar"})]}),o&&z.jsx("p",{className:"error-message",children:o}),c&&z.jsx("p",{className:"success-message",children:c})]})},ZP=()=>{const[r,e]=N.useState(""),[n,s]=N.useState(""),[o,a]=N.useState(""),[c,h]=N.useState(""),p=wa(),m=async y=>{y.preventDefault(),a("");try{const _=await qs.signUp(r,n);await new lf().setUserRoles(_.user.uid,{email:_.user.email,roles:{admin:!1}}),h("Registro exitoso. Redirigiendo al menú..."),setTimeout(()=>p("/FoodApp"),2e3)}catch(_){console.error("Error al registrarse:",_),a(_.message)}};return z.jsxs("form",{onSubmit:m,className:"style-form",children:[z.jsx("h2",{children:"Registrarse"}),z.jsx("input",{type:"email",placeholder:"Correo electrónico",value:r,onChange:y=>e(y.target.value)}),z.jsx("input",{type:"password",placeholder:"Contraseña",value:n,onChange:y=>s(y.target.value)}),z.jsxs("div",{className:"button-container",children:[z.jsx("button",{className:"btn",onClick:()=>p(-1),children:"Volver"}),z.jsx("button",{type:"submit",children:"Registrarse"})]}),o&&z.jsx("p",{className:"error-message",children:o}),c&&z.jsx("p",{className:"success-message",children:c})]})},eN=()=>z.jsxs("div",{className:"dashboard-container",children:[z.jsx(mf,{}),z.jsx("h1",{children:"Panel de Usuario"}),z.jsx("p",{children:"Este es un saludo de bienvenida, eres un usuario de la aplicación FoodApp."})]}),tN=()=>{const[r,e]=N.useState([]),n=new lf;N.useEffect(()=>{(async()=>{const a=await n.getAllUsers();e(a)})()},[]);const s=async(o,a)=>{var c;try{await n.setUserRoles(o,{email:((c=r.find(p=>p.uid===o))==null?void 0:c.email)||"",roles:{admin:!a}});const h=r.map(p=>p.uid===o?{...p,roles:{admin:!a}}:p);e(h)}catch(h){console.error("Error al cambiar el rol del usuario:",h)}};return z.jsxs("div",{className:"admin-container",children:[z.jsx(mf,{}),z.jsx("h1",{children:"Panel de Administración"}),z.jsx("p",{children:"Gestión avanzada para administradores. Aquí puedes convertir en administrador a otros usuarios."}),z.jsx("h2",{children:"Lista de Usuarios"}),z.jsx("ul",{className:"user-list",children:r.map(o=>z.jsxs("li",{className:"user-item",children:[z.jsx("span",{children:o.email}),z.jsx("button",{onClick:()=>s(o.uid,o.roles.admin),className:o.roles.admin?"revoke-admin":"make-admin",children:o.roles.admin?"Quitar Admin":"Hacer Admin"})]},o.uid))})]})},nN=({children:r})=>{const{user:e,roles:n}=N.useContext(ao);return!e||!n||!n.includes(tn.ADMIN)?z.jsx(tv,{to:"/FoodApp",replace:!0}):z.jsx(z.Fragment,{children:r})},rN=({children:r})=>{const{user:e}=N.useContext(ao);return e?r:z.jsx(tv,{to:"/FoodApp",replace:!0})};fE.createRoot(document.getElementById("root")).render(z.jsx(N.StrictMode,{children:z.jsx(zP,{children:z.jsx($y,{children:z.jsx("div",{className:"main-content",children:z.jsxs(mP,{children:[z.jsx(li,{path:"/login",element:z.jsx(XP,{})}),z.jsx(li,{path:"/register",element:z.jsx(ZP,{})}),z.jsx(li,{path:"/dashboard",element:z.jsx(rN,{children:z.jsx(eN,{})})}),z.jsx(li,{path:"/admin",element:z.jsx(nN,{children:z.jsx(tN,{})})}),z.jsx(li,{path:"*",element:z.jsx(JP,{})})]})})})})}));export{ao as A,_E as E,tv as N,lN as a,N as b,uN as d,QP as f,z as j,wm as l,oN as p,Lc as r,aN as u};
