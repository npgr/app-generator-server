/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.7.7
window.WebComponents=window.WebComponents||{},function(e){var t=e.flags||{},n="webcomponents.js",r=document.querySelector('script[src*="'+n+'"]');if(!t.noOpts){if(location.search.slice(1).split("&").forEach(function(e){var n,r=e.split("=");r[0]&&(n=r[0].match(/wc-(.+)/))&&(t[n[1]]=r[1]||!0)}),r)for(var o,i=0;o=r.attributes[i];i++)"src"!==o.name&&(t[o.name]=o.value||!0);if(t.log&&t.log.split){var a=t.log.split(",");t.log={},a.forEach(function(e){t.log[e]=!0})}else t.log={}}t.shadow=t.shadow||t.shadowdom||t.polyfill,t.shadow="native"===t.shadow?!1:t.shadow||!HTMLElement.prototype.createShadowRoot,t.register&&(window.CustomElements=window.CustomElements||{flags:{}},window.CustomElements.flags.register=t.register),e.flags=t}(WebComponents),WebComponents.flags.shadow&&("undefined"==typeof WeakMap&&!function(){var e=Object.defineProperty,t=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};n.prototype={set:function(t,n){var r=t[this.name];return r&&r[0]===t?r[1]=n:e(t,this.name,{value:[t,n],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];return t&&t[0]===e?(t[0]=t[1]=void 0,!0):!1},has:function(e){var t=e[this.name];return t?t[0]===e:!1}},window.WeakMap=n}(),window.ShadowDOMPolyfill={},function(e){"use strict";function t(){if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)return!1;if(navigator.getDeviceStorage)return!1;try{var e=new Function("return true;");return e()}catch(t){return!1}}function n(e){if(!e)throw new Error("Assertion failed")}function r(e,t){for(var n=W(t),r=0;r<n.length;r++){var o=n[r];A(e,o,F(t,o))}return e}function o(e,t){for(var n=W(t),r=0;r<n.length;r++){var o=n[r];switch(o){case"arguments":case"caller":case"length":case"name":case"prototype":case"toString":continue}A(e,o,F(t,o))}return e}function i(e,t){for(var n=0;n<t.length;n++)if(t[n]in e)return t[n]}function a(e,t,n){U.value=n,A(e,t,U)}function s(e,t){var n=e.__proto__||Object.getPrototypeOf(e);if(q)try{W(n)}catch(r){n=n.__proto__}var o=R.get(n);if(o)return o;var i=s(n),a=E(i);return g(n,a,t),a}function c(e,t){w(e,t,!0)}function l(e,t){w(t,e,!1)}function u(e){return/^on[a-z]+$/.test(e)}function d(e){return/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(e)}function p(e){return k&&d(e)?new Function("return this.__impl4cf1e782hg__."+e):function(){return this.__impl4cf1e782hg__[e]}}function h(e){return k&&d(e)?new Function("v","this.__impl4cf1e782hg__."+e+" = v"):function(t){this.__impl4cf1e782hg__[e]=t}}function f(e){return k&&d(e)?new Function("return this.__impl4cf1e782hg__."+e+".apply(this.__impl4cf1e782hg__, arguments)"):function(){return this.__impl4cf1e782hg__[e].apply(this.__impl4cf1e782hg__,arguments)}}function m(e,t){try{return Object.getOwnPropertyDescriptor(e,t)}catch(n){return B}}function w(t,n,r,o){for(var i=W(t),a=0;a<i.length;a++){var s=i[a];if("polymerBlackList_"!==s&&!(s in n||t.polymerBlackList_&&t.polymerBlackList_[s])){q&&t.__lookupGetter__(s);var c,l,d=m(t,s);if("function"!=typeof d.value){var w=u(s);c=w?e.getEventHandlerGetter(s):p(s),(d.writable||d.set||V)&&(l=w?e.getEventHandlerSetter(s):h(s));var v=V||d.configurable;A(n,s,{get:c,set:l,configurable:v,enumerable:d.enumerable})}else r&&(n[s]=f(s))}}}function v(e,t,n){if(null!=e){var r=e.prototype;g(r,t,n),o(t,e)}}function g(e,t,r){var o=t.prototype;n(void 0===R.get(e)),R.set(e,t),I.set(o,e),c(e,o),r&&l(o,r),a(o,"constructor",t),t.prototype=o}function b(e,t){return R.get(t.prototype)===e}function y(e){var t=Object.getPrototypeOf(e),n=s(t),r=E(n);return g(t,r,e),r}function E(e){function t(t){e.call(this,t)}var n=Object.create(e.prototype);return n.constructor=t,t.prototype=n,t}function _(e){return e&&e.__impl4cf1e782hg__}function S(e){return!_(e)}function T(e){if(null===e)return null;n(S(e));var t=e.__wrapper8e3dd93a60__;return null!=t?t:e.__wrapper8e3dd93a60__=new(s(e,e))(e)}function M(e){return null===e?null:(n(_(e)),e.__impl4cf1e782hg__)}function O(e){return e.__impl4cf1e782hg__}function L(e,t){t.__impl4cf1e782hg__=e,e.__wrapper8e3dd93a60__=t}function N(e){return e&&_(e)?M(e):e}function C(e){return e&&!_(e)?T(e):e}function j(e,t){null!==t&&(n(S(e)),n(void 0===t||_(t)),e.__wrapper8e3dd93a60__=t)}function D(e,t,n){G.get=n,A(e.prototype,t,G)}function H(e,t){D(e,t,function(){return T(this.__impl4cf1e782hg__[t])})}function x(e,t){e.forEach(function(e){t.forEach(function(t){e.prototype[t]=function(){var e=C(this);return e[t].apply(e,arguments)}})})}var R=new WeakMap,I=new WeakMap,P=Object.create(null),k=t(),A=Object.defineProperty,W=Object.getOwnPropertyNames,F=Object.getOwnPropertyDescriptor,U={value:void 0,configurable:!0,enumerable:!1,writable:!0};W(window);var q=/Firefox/.test(navigator.userAgent),B={get:function(){},set:function(e){},configurable:!0,enumerable:!0},V=function(){var e=Object.getOwnPropertyDescriptor(Node.prototype,"nodeType");return e&&!e.get&&!e.set}(),G={get:void 0,configurable:!0,enumerable:!0};e.assert=n,e.constructorTable=R,e.defineGetter=D,e.defineWrapGetter=H,e.forwardMethodsToWrapper=x,e.isIdentifierName=d,e.isWrapper=_,e.isWrapperFor=b,e.mixin=r,e.nativePrototypeTable=I,e.oneOf=i,e.registerObject=y,e.registerWrapper=v,e.rewrap=j,e.setWrapper=L,e.unsafeUnwrap=O,e.unwrap=M,e.unwrapIfNeeded=N,e.wrap=T,e.wrapIfNeeded=C,e.wrappers=P}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t,n){return{index:e,removed:t,addedCount:n}}function n(){}var r=0,o=1,i=2,a=3;n.prototype={calcEditDistances:function(e,t,n,r,o,i){for(var a=i-o+1,s=n-t+1,c=new Array(a),l=0;a>l;l++)c[l]=new Array(s),c[l][0]=l;for(var u=0;s>u;u++)c[0][u]=u;for(var l=1;a>l;l++)for(var u=1;s>u;u++)if(this.equals(e[t+u-1],r[o+l-1]))c[l][u]=c[l-1][u-1];else{var d=c[l-1][u]+1,p=c[l][u-1]+1;c[l][u]=p>d?d:p}return c},spliceOperationsFromEditDistances:function(e){for(var t=e.length-1,n=e[0].length-1,s=e[t][n],c=[];t>0||n>0;)if(0!=t)if(0!=n){var l,u=e[t-1][n-1],d=e[t-1][n],p=e[t][n-1];l=p>d?u>d?d:u:u>p?p:u,l==u?(u==s?c.push(r):(c.push(o),s=u),t--,n--):l==d?(c.push(a),t--,s=d):(c.push(i),n--,s=p)}else c.push(a),t--;else c.push(i),n--;return c.reverse(),c},calcSplices:function(e,n,s,c,l,u){var d=0,p=0,h=Math.min(s-n,u-l);if(0==n&&0==l&&(d=this.sharedPrefix(e,c,h)),s==e.length&&u==c.length&&(p=this.sharedSuffix(e,c,h-d)),n+=d,l+=d,s-=p,u-=p,s-n==0&&u-l==0)return[];if(n==s){for(var f=t(n,[],0);u>l;)f.removed.push(c[l++]);return[f]}if(l==u)return[t(n,[],s-n)];for(var m=this.spliceOperationsFromEditDistances(this.calcEditDistances(e,n,s,c,l,u)),f=void 0,w=[],v=n,g=l,b=0;b<m.length;b++)switch(m[b]){case r:f&&(w.push(f),f=void 0),v++,g++;break;case o:f||(f=t(v,[],0)),f.addedCount++,v++,f.removed.push(c[g]),g++;break;case i:f||(f=t(v,[],0)),f.addedCount++,v++;break;case a:f||(f=t(v,[],0)),f.removed.push(c[g]),g++}return f&&w.push(f),w},sharedPrefix:function(e,t,n){for(var r=0;n>r;r++)if(!this.equals(e[r],t[r]))return r;return n},sharedSuffix:function(e,t,n){for(var r=e.length,o=t.length,i=0;n>i&&this.equals(e[--r],t[--o]);)i++;return i},calculateSplices:function(e,t){return this.calcSplices(e,0,e.length,t,0,t.length)},equals:function(e,t){return e===t}},e.ArraySplice=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(){a=!1;var e=i.slice(0);i=[];for(var t=0;t<e.length;t++)e[t]()}function n(e){i.push(e),a||(a=!0,r(t,0))}var r,o=window.MutationObserver,i=[],a=!1;if(o){var s=1,c=new o(t),l=document.createTextNode(s);c.observe(l,{characterData:!0}),r=function(){s=(s+1)%2,l.data=s}}else r=window.setTimeout;e.setEndOfMicrotask=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.scheduled_||(e.scheduled_=!0,f.push(e),m||(u(n),m=!0))}function n(){for(m=!1;f.length;){var e=f;f=[],e.sort(function(e,t){return e.uid_-t.uid_});for(var t=0;t<e.length;t++){var n=e[t];n.scheduled_=!1;var r=n.takeRecords();i(n),r.length&&n.callback_(r,n)}}}function r(e,t){this.type=e,this.target=t,this.addedNodes=new p.NodeList,this.removedNodes=new p.NodeList,this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function o(e,t){for(;e;e=e.parentNode){var n=h.get(e);if(n)for(var r=0;r<n.length;r++){var o=n[r];o.options.subtree&&o.addTransientObserver(t)}}}function i(e){for(var t=0;t<e.nodes_.length;t++){var n=e.nodes_[t],r=h.get(n);if(!r)return;for(var o=0;o<r.length;o++){var i=r[o];i.observer===e&&i.removeTransientObservers()}}}function a(e,n,o){for(var i=Object.create(null),a=Object.create(null),s=e;s;s=s.parentNode){var c=h.get(s);if(c)for(var l=0;l<c.length;l++){var u=c[l],d=u.options;if((s===e||d.subtree)&&!("attributes"===n&&!d.attributes||"attributes"===n&&d.attributeFilter&&(null!==o.namespace||-1===d.attributeFilter.indexOf(o.name))||"characterData"===n&&!d.characterData||"childList"===n&&!d.childList)){var p=u.observer;i[p.uid_]=p,("attributes"===n&&d.attributeOldValue||"characterData"===n&&d.characterDataOldValue)&&(a[p.uid_]=o.oldValue)}}}for(var f in i){var p=i[f],m=new r(n,e);"name"in o&&"namespace"in o&&(m.attributeName=o.name,m.attributeNamespace=o.namespace),o.addedNodes&&(m.addedNodes=o.addedNodes),o.removedNodes&&(m.removedNodes=o.removedNodes),o.previousSibling&&(m.previousSibling=o.previousSibling),o.nextSibling&&(m.nextSibling=o.nextSibling),void 0!==a[f]&&(m.oldValue=a[f]),t(p),p.records_.push(m)}}function s(e){if(this.childList=!!e.childList,this.subtree=!!e.subtree,this.attributes="attributes"in e||!("attributeOldValue"in e||"attributeFilter"in e)?!!e.attributes:!0,this.characterData="characterDataOldValue"in e&&!("characterData"in e)?!0:!!e.characterData,!this.attributes&&(e.attributeOldValue||"attributeFilter"in e)||!this.characterData&&e.characterDataOldValue)throw new TypeError;if(this.characterData=!!e.characterData,this.attributeOldValue=!!e.attributeOldValue,this.characterDataOldValue=!!e.characterDataOldValue,"attributeFilter"in e){if(null==e.attributeFilter||"object"!=typeof e.attributeFilter)throw new TypeError;this.attributeFilter=w.call(e.attributeFilter)}else this.attributeFilter=null}function c(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++v,this.scheduled_=!1}function l(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var u=e.setEndOfMicrotask,d=e.wrapIfNeeded,p=e.wrappers,h=new WeakMap,f=[],m=!1,w=Array.prototype.slice,v=0;c.prototype={constructor:c,observe:function(e,t){e=d(e);var n,r=new s(t),o=h.get(e);o||h.set(e,o=[]);for(var i=0;i<o.length;i++)o[i].observer===this&&(n=o[i],n.removeTransientObservers(),n.options=r);n||(n=new l(this,e,r),o.push(n),this.nodes_.push(e))},disconnect:function(){this.nodes_.forEach(function(e){for(var t=h.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}},l.prototype={addTransientObserver:function(e){if(e!==this.target){t(this.observer),this.transientObservedNodes.push(e);var n=h.get(e);n||h.set(e,n=[]),n.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[];for(var t=0;t<e.length;t++)for(var n=e[t],r=h.get(n),o=0;o<r.length;o++)if(r[o]===this){r.splice(o,1);break}}},e.enqueueMutation=a,e.registerTransientObservers=o,e.wrappers.MutationObserver=c,e.wrappers.MutationRecord=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){this.root=e,this.parent=t}function n(e,t){if(e.treeScope_!==t){e.treeScope_=t;for(var r=e.shadowRoot;r;r=r.olderShadowRoot)r.treeScope_.parent=t;for(var o=e.firstChild;o;o=o.nextSibling)n(o,t)}}function r(n){if(n instanceof e.wrappers.Window,n.treeScope_)return n.treeScope_;var o,i=n.parentNode;return o=i?r(i):new t(n,null),n.treeScope_=o}t.prototype={get renderer(){return this.root instanceof e.wrappers.ShadowRoot?e.getRendererForHost(this.root.host):null},contains:function(e){for(;e;e=e.parent)if(e===this)return!0;return!1}},e.TreeScope=t,e.getTreeScope=r,e.setTreeScope=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e instanceof G.ShadowRoot}function n(e){return A(e).root}function r(e,r){var s=[],c=e;for(s.push(c);c;){var l=a(c);if(l&&l.length>0){for(var u=0;u<l.length;u++){var p=l[u];if(i(p)){var h=n(p),f=h.olderShadowRoot;f&&s.push(f)}s.push(p)}c=l[l.length-1]}else if(t(c)){if(d(e,c)&&o(r))break;c=c.host,s.push(c)}else c=c.parentNode,c&&s.push(c)}return s}function o(e){if(!e)return!1;switch(e.type){case"abort":case"error":case"select":case"change":case"load":case"reset":case"resize":case"scroll":case"selectstart":return!0}return!1}function i(e){return e instanceof HTMLShadowElement}function a(t){return e.getDestinationInsertionPoints(t)}function s(e,t){if(0===e.length)return t;t instanceof G.Window&&(t=t.document);for(var n=A(t),r=e[0],o=A(r),i=l(n,o),a=0;a<e.length;a++){var s=e[a];if(A(s)===i)return s}return e[e.length-1]}function c(e){for(var t=[];e;e=e.parent)t.push(e);return t}function l(e,t){for(var n=c(e),r=c(t),o=null;n.length>0&&r.length>0;){var i=n.pop(),a=r.pop();if(i!==a)break;o=i}return o}function u(e,t,n){t instanceof G.Window&&(t=t.document);var o,i=A(t),a=A(n),s=r(n,e),o=l(i,a);o||(o=a.root);for(var c=o;c;c=c.parent)for(var u=0;u<s.length;u++){var d=s[u];if(A(d)===c)return d}return null}function d(e,t){return A(e)===A(t)}function p(e){if(!K.get(e)&&(K.set(e,!0),f(V(e),V(e.target)),P)){var t=P;throw P=null,t}}function h(e){switch(e.type){case"load":case"beforeunload":case"unload":return!0}return!1}function f(t,n){if(Y.get(t))throw new Error("InvalidStateError");Y.set(t,!0),e.renderAllPending();var o,i,a;if(h(t)&&!t.bubbles){var s=n;s instanceof G.Document&&(a=s.defaultView)&&(i=s,o=[])}if(!o)if(n instanceof G.Window)a=n,o=[];else if(o=r(n,t),!h(t)){var s=o[o.length-1];s instanceof G.Document&&(a=s.defaultView)}return ne.set(t,o),m(t,o,a,i)&&w(t,o,a,i)&&v(t,o,a,i),J.set(t,re),X["delete"](t,null),Y["delete"](t),t.defaultPrevented}function m(e,t,n,r){var o=oe;if(n&&!g(n,e,o,t,r))return!1;for(var i=t.length-1;i>0;i--)if(!g(t[i],e,o,t,r))return!1;return!0}function w(e,t,n,r){var o=ie,i=t[0]||n;return g(i,e,o,t,r)}function v(e,t,n,r){for(var o=ae,i=1;i<t.length;i++)if(!g(t[i],e,o,t,r))return;n&&t.length>0&&g(n,e,o,t,r)}function g(e,t,n,r,o){var i=z.get(e);if(!i)return!0;var a=o||s(r,e);if(a===e){if(n===oe)return!0;n===ae&&(n=ie)}else if(n===ae&&!t.bubbles)return!0;if("relatedTarget"in t){var c=B(t),l=c.relatedTarget;if(l){if(l instanceof Object&&l.addEventListener){var d=V(l),p=u(t,e,d);if(p===a)return!0}else p=null;Z.set(t,p)}}J.set(t,n);var h=t.type,f=!1;$.set(t,a),X.set(t,e),i.depth++;for(var m=0,w=i.length;w>m;m++){var v=i[m];if(v.removed)f=!0;else if(!(v.type!==h||!v.capture&&n===oe||v.capture&&n===ae))try{if("function"==typeof v.handler?v.handler.call(e,t):v.handler.handleEvent(t),ee.get(t))return!1}catch(g){P||(P=g)}}if(i.depth--,f&&0===i.depth){var b=i.slice();i.length=0;for(var m=0;m<b.length;m++)b[m].removed||i.push(b[m])}return!Q.get(t)}function b(e,t,n){this.type=e,this.handler=t,this.capture=Boolean(n)}function y(e,t){if(!(e instanceof se))return V(T(se,"Event",e,t));var n=e;return ge||"beforeunload"!==n.type||this instanceof M?void U(n,this):new M(n)}function E(e){return e&&e.relatedTarget?Object.create(e,{relatedTarget:{value:B(e.relatedTarget)}}):e}function _(e,t,n){var r=window[e],o=function(t,n){return t instanceof r?void U(t,this):V(T(r,e,t,n))};if(o.prototype=Object.create(t.prototype),n&&W(o.prototype,n),r)try{F(r,o,new r("temp"))}catch(i){F(r,o,document.createEvent(e))}return o}function S(e,t){return function(){arguments[t]=B(arguments[t]);var n=B(this);n[e].apply(n,arguments)}}function T(e,t,n,r){if(we)return new e(n,E(r));var o=B(document.createEvent(t)),i=me[t],a=[n];return Object.keys(i).forEach(function(e){var t=null!=r&&e in r?r[e]:i[e];"relatedTarget"===e&&(t=B(t)),a.push(t)}),o["init"+t].apply(o,a),o}function M(e){y.call(this,e)}function O(e){return"function"==typeof e?!0:e&&e.handleEvent}function L(e){switch(e){case"DOMAttrModified":case"DOMAttributeNameChanged":case"DOMCharacterDataModified":case"DOMElementNameChanged":case"DOMNodeInserted":case"DOMNodeInsertedIntoDocument":case"DOMNodeRemoved":case"DOMNodeRemovedFromDocument":case"DOMSubtreeModified":return!0}return!1}function N(e){U(e,this)}function C(e){return e instanceof G.ShadowRoot&&(e=e.host),B(e)}function j(e,t){var n=z.get(e);if(n)for(var r=0;r<n.length;r++)if(!n[r].removed&&n[r].type===t)return!0;return!1}function D(e,t){for(var n=B(e);n;n=n.parentNode)if(j(V(n),t))return!0;return!1}function H(e){k(e,ye)}function x(t,n,o,i){e.renderAllPending();var a=V(Ee.call(q(n),o,i));if(!a)return null;var c=r(a,null),l=c.lastIndexOf(t);return-1==l?null:(c=c.slice(0,l),s(c,t))}function R(e){return function(){var t=te.get(this);return t&&t[e]&&t[e].value||null}}function I(e){var t=e.slice(2);return function(n){var r=te.get(this);r||(r=Object.create(null),te.set(this,r));var o=r[e];if(o&&this.removeEventListener(t,o.wrapped,!1),"function"==typeof n){var i=function(t){var r=n.call(this,t);r===!1?t.preventDefault():"onbeforeunload"===e&&"string"==typeof r&&(t.returnValue=r)};this.addEventListener(t,i,!1),r[e]={value:n,wrapped:i}}}}var P,k=e.forwardMethodsToWrapper,A=e.getTreeScope,W=e.mixin,F=e.registerWrapper,U=e.setWrapper,q=e.unsafeUnwrap,B=e.unwrap,V=e.wrap,G=e.wrappers,z=(new WeakMap,new WeakMap),K=new WeakMap,Y=new WeakMap,$=new WeakMap,X=new WeakMap,Z=new WeakMap,J=new WeakMap,Q=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=0,oe=1,ie=2,ae=3;b.prototype={equals:function(e){return this.handler===e.handler&&this.type===e.type&&this.capture===e.capture},get removed(){return null===this.handler},remove:function(){this.handler=null}};var se=window.Event;se.prototype.polymerBlackList_={returnValue:!0,keyLocation:!0},y.prototype={get target(){return $.get(this)},get currentTarget(){return X.get(this)},get eventPhase(){return J.get(this)},get path(){var e=ne.get(this);return e?e.slice():[]},stopPropagation:function(){Q.set(this,!0)},stopImmediatePropagation:function(){Q.set(this,!0),ee.set(this,!0)}},F(se,y,document.createEvent("Event"));var ce=_("UIEvent",y),le=_("CustomEvent",y),ue={get relatedTarget(){var e=Z.get(this);return void 0!==e?e:V(B(this).relatedTarget)}},de=W({initMouseEvent:S("initMouseEvent",14)},ue),pe=W({initFocusEvent:S("initFocusEvent",5)},ue),he=_("MouseEvent",ce,de),fe=_("FocusEvent",ce,pe),me=Object.create(null),we=function(){try{new window.FocusEvent("focus")}catch(e){return!1}return!0}();if(!we){var ve=function(e,t,n){if(n){var r=me[n];t=W(W({},r),t)}me[e]=t};ve("Event",{bubbles:!1,cancelable:!1}),ve("CustomEvent",{detail:null},"Event"),ve("UIEvent",{view:null,detail:0},"Event"),ve("MouseEvent",{screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null},"UIEvent"),ve("FocusEvent",{relatedTarget:null},"UIEvent")}var ge=window.BeforeUnloadEvent;M.prototype=Object.create(y.prototype),W(M.prototype,{get returnValue(){return q(this).returnValue},set returnValue(e){q(this).returnValue=e}}),ge&&F(ge,M);var be=window.EventTarget,ye=["addEventListener","removeEventListener","dispatchEvent"];[Node,Window].forEach(function(e){var t=e.prototype;ye.forEach(function(e){Object.defineProperty(t,e+"_",{value:t[e]})})}),N.prototype={addEventListener:function(e,t,n){if(O(t)&&!L(e)){var r=new b(e,t,n),o=z.get(this);if(o){for(var i=0;i<o.length;i++)if(r.equals(o[i]))return}else o=[],o.depth=0,z.set(this,o);o.push(r);var a=C(this);a.addEventListener_(e,p,!0)}},removeEventListener:function(e,t,n){n=Boolean(n);var r=z.get(this);if(r){for(var o=0,i=!1,a=0;a<r.length;a++)r[a].type===e&&r[a].capture===n&&(o++,r[a].handler===t&&(i=!0,r[a].remove()));if(i&&1===o){var s=C(this);s.removeEventListener_(e,p,!0)}}},dispatchEvent:function(t){var n=B(t),r=n.type;K.set(n,!1),e.renderAllPending();var o;D(this,r)||(o=function(){},this.addEventListener(r,o,!0));try{return B(this).dispatchEvent_(n)}finally{o&&this.removeEventListener(r,o,!0)}}},be&&F(be,N);var Ee=document.elementFromPoint;e.elementFromPoint=x,e.getEventHandlerGetter=R,e.getEventHandlerSetter=I,e.wrapEventTargetMethods=H,e.wrappers.BeforeUnloadEvent=M,e.wrappers.CustomEvent=le,e.wrappers.Event=y,e.wrappers.EventTarget=N,e.wrappers.FocusEvent=fe,e.wrappers.MouseEvent=he,e.wrappers.UIEvent=ce}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,m)}function n(e){l(e,this)}function r(){this.length=0,t(this,"length")}function o(e){for(var t=new r,o=0;o<e.length;o++)t[o]=new n(e[o]);return t.length=o,t}function i(e){a.call(this,e)}var a=e.wrappers.UIEvent,s=e.mixin,c=e.registerWrapper,l=e.setWrapper,u=e.unsafeUnwrap,d=e.wrap,p=window.TouchEvent;if(p){var h;try{h=document.createEvent("TouchEvent")}catch(f){return}var m={enumerable:!1};n.prototype={get target(){return d(u(this).target)}};var w={configurable:!0,enumerable:!0,get:null};["clientX","clientY","screenX","screenY","pageX","pageY","identifier","webkitRadiusX","webkitRadiusY","webkitRotationAngle","webkitForce"].forEach(function(e){w.get=function(){return u(this)[e]},Object.defineProperty(n.prototype,e,w)}),r.prototype={item:function(e){return this[e]}},i.prototype=Object.create(a.prototype),s(i.prototype,{get touches(){return o(u(this).touches)},get targetTouches(){return o(u(this).targetTouches)},get changedTouches(){return o(u(this).changedTouches)},initTouchEvent:function(){throw new Error("Not implemented")}}),c(p,i,h),e.wrappers.Touch=n,e.wrappers.TouchEvent=i,e.wrappers.TouchList=r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,s)}function n(){this.length=0,t(this,"length")}function r(e){if(null==e)return e;for(var t=new n,r=0,o=e.length;o>r;r++)t[r]=a(e[r]);return t.length=o,t}function o(e,t){e.prototype[t]=function(){return r(i(this)[t].apply(i(this),arguments))}}var i=e.unsafeUnwrap,a=e.wrap,s={enumerable:!1};n.prototype={item:function(e){return this[e]}},t(n.prototype,"item"),e.wrappers.NodeList=n,e.addWrapNodeListMethod=o,e.wrapNodeList=r}(window.ShadowDOMPolyfill),function(e){"use strict";e.wrapHTMLCollection=e.wrapNodeList,e.wrappers.HTMLCollection=e.wrappers.NodeList}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){O(e instanceof _)}function n(e){var t=new T;return t[0]=e,t.length=1,t}function r(e,t,n){N(t,"childList",{removedNodes:n,previousSibling:e.previousSibling,nextSibling:e.nextSibling})}function o(e,t){N(e,"childList",{removedNodes:t})}function i(e,t,r,o){if(e instanceof DocumentFragment){var i=s(e);U=!0;for(var a=i.length-1;a>=0;a--)e.removeChild(i[a]),i[a].parentNode_=t;U=!1;for(var a=0;a<i.length;a++)i[a].previousSibling_=i[a-1]||r,i[a].nextSibling_=i[a+1]||o;return r&&(r.nextSibling_=i[0]),o&&(o.previousSibling_=i[i.length-1]),i}var i=n(e),c=e.parentNode;return c&&c.removeChild(e),e.parentNode_=t,e.previousSibling_=r,e.nextSibling_=o,r&&(r.nextSibling_=e),o&&(o.previousSibling_=e),i}function a(e){if(e instanceof DocumentFragment)return s(e);var t=n(e),o=e.parentNode;return o&&r(e,o,t),t}function s(e){for(var t=new T,n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t.length=n,o(e,t),t}function c(e){return e}function l(e,t){R(e,t),e.nodeIsInserted_()}function u(e,t){for(var n=C(t),r=0;r<e.length;r++)l(e[r],n)}function d(e){R(e,new M(e,null))}function p(e){for(var t=0;t<e.length;t++)d(e[t])}function h(e,t){var n=e.nodeType===_.DOCUMENT_NODE?e:e.ownerDocument;n!==t.ownerDocument&&n.adoptNode(t)}function f(t,n){if(n.length){var r=t.ownerDocument;if(r!==n[0].ownerDocument)for(var o=0;o<n.length;o++)e.adoptNodeNoRemove(n[o],r)}}function m(e,t){f(e,t);var n=t.length;if(1===n)return P(t[0]);for(var r=P(e.ownerDocument.createDocumentFragment()),o=0;n>o;o++)r.appendChild(P(t[o]));return r}function w(e){if(void 0!==e.firstChild_)for(var t=e.firstChild_;t;){var n=t;t=t.nextSibling_,n.parentNode_=n.previousSibling_=n.nextSibling_=void 0}e.firstChild_=e.lastChild_=void 0}function v(e){if(e.invalidateShadowRenderer()){for(var t=e.firstChild;t;){O(t.parentNode===e);var n=t.nextSibling,r=P(t),o=r.parentNode;o&&$.call(o,r),t.previousSibling_=t.nextSibling_=t.parentNode_=null,t=n}e.firstChild_=e.lastChild_=null}else for(var n,i=P(e),a=i.firstChild;a;)n=a.nextSibling,$.call(i,a),a=n}function g(e){var t=e.parentNode;return t&&t.invalidateShadowRenderer()}function b(e){for(var t,n=0;n<e.length;n++)t=e[n],t.parentNode.removeChild(t)}function y(e,t,n){var r;if(r=A(n?q.call(n,I(e),!1):B.call(I(e),!1)),t){for(var o=e.firstChild;o;o=o.nextSibling)r.appendChild(y(o,!0,n));if(e instanceof F.HTMLTemplateElement)for(var i=r.content,o=e.content.firstChild;o;o=o.nextSibling)i.appendChild(y(o,!0,n))}return r}function E(e,t){if(!t||C(e)!==C(t))return!1;for(var n=t;n;n=n.parentNode)if(n===e)return!0;return!1}function _(e){O(e instanceof V),S.call(this,e),this.parentNode_=void 0,this.firstChild_=void 0,this.lastChild_=void 0,this.nextSibling_=void 0,this.previousSibling_=void 0,this.treeScope_=void 0}var S=e.wrappers.EventTarget,T=e.wrappers.NodeList,M=e.TreeScope,O=e.assert,L=e.defineWrapGetter,N=e.enqueueMutation,C=e.getTreeScope,j=e.isWrapper,D=e.mixin,H=e.registerTransientObservers,x=e.registerWrapper,R=e.setTreeScope,I=e.unsafeUnwrap,P=e.unwrap,k=e.unwrapIfNeeded,A=e.wrap,W=e.wrapIfNeeded,F=e.wrappers,U=!1,q=document.importNode,B=window.Node.prototype.cloneNode,V=window.Node,G=window.DocumentFragment,z=(V.prototype.appendChild,V.prototype.compareDocumentPosition),K=V.prototype.isEqualNode,Y=V.prototype.insertBefore,$=V.prototype.removeChild,X=V.prototype.replaceChild,Z=/Trident|Edge/.test(navigator.userAgent),J=Z?function(e,t){try{$.call(e,t)}catch(n){if(!(e instanceof G))throw n}}:function(e,t){$.call(e,t)};_.prototype=Object.create(S.prototype),D(_.prototype,{appendChild:function(e){return this.insertBefore(e,null)},insertBefore:function(e,n){t(e);var r;n?j(n)?r=P(n):(r=n,n=A(r)):(n=null,r=null),n&&O(n.parentNode===this);var o,s=n?n.previousSibling:this.lastChild,c=!this.invalidateShadowRenderer()&&!g(e);if(o=c?a(e):i(e,this,s,n),c)h(this,e),w(this),Y.call(I(this),P(e),r);else{s||(this.firstChild_=o[0]),n||(this.lastChild_=o[o.length-1],void 0===this.firstChild_&&(this.firstChild_=this.firstChild));var l=r?r.parentNode:I(this);l?Y.call(l,m(this,o),r):f(this,o)}return N(this,"childList",{addedNodes:o,nextSibling:n,previousSibling:s}),u(o,this),e},removeChild:function(e){if(t(e),e.parentNode!==this){for(var r=!1,o=(this.childNodes,this.firstChild);o;o=o.nextSibling)if(o===e){r=!0;break}if(!r)throw new Error("NotFoundError")}var i=P(e),a=e.nextSibling,s=e.previousSibling;if(this.invalidateShadowRenderer()){var c=this.firstChild,l=this.lastChild,u=i.parentNode;u&&J(u,i),c===e&&(this.firstChild_=a),l===e&&(this.lastChild_=s),s&&(s.nextSibling_=a),a&&(a.previousSibling_=s),e.previousSibling_=e.nextSibling_=e.parentNode_=void 0}else w(this),J(I(this),i);return U||N(this,"childList",{removedNodes:n(e),nextSibling:a,previousSibling:s}),H(this,e),e},replaceChild:function(e,r){t(e);var o;if(j(r)?o=P(r):(o=r,r=A(o)),r.parentNode!==this)throw new Error("NotFoundError");var s,c=r.nextSibling,l=r.previousSibling,p=!this.invalidateShadowRenderer()&&!g(e);return p?s=a(e):(c===e&&(c=e.nextSibling),s=i(e,this,l,c)),p?(h(this,e),w(this),X.call(I(this),P(e),o)):(this.firstChild===r&&(this.firstChild_=s[0]),this.lastChild===r&&(this.lastChild_=s[s.length-1]),r.previousSibling_=r.nextSibling_=r.parentNode_=void 0,o.parentNode&&X.call(o.parentNode,m(this,s),o)),N(this,"childList",{addedNodes:s,removedNodes:n(r),nextSibling:c,previousSibling:l}),d(r),u(s,this),r},nodeIsInserted_:function(){for(var e=this.firstChild;e;e=e.nextSibling)e.nodeIsInserted_()},hasChildNodes:function(){return null!==this.firstChild},get parentNode(){return void 0!==this.parentNode_?this.parentNode_:A(I(this).parentNode)},get firstChild(){return void 0!==this.firstChild_?this.firstChild_:A(I(this).firstChild)},get lastChild(){return void 0!==this.lastChild_?this.lastChild_:A(I(this).lastChild)},get nextSibling(){return void 0!==this.nextSibling_?this.nextSibling_:A(I(this).nextSibling)},get previousSibling(){return void 0!==this.previousSibling_?this.previousSibling_:A(I(this).previousSibling)},get parentElement(){for(var e=this.parentNode;e&&e.nodeType!==_.ELEMENT_NODE;)e=e.parentNode;return e},get textContent(){for(var e="",t=this.firstChild;t;t=t.nextSibling)t.nodeType!=_.COMMENT_NODE&&(e+=t.textContent);return e},set textContent(e){null==e&&(e="");var t=c(this.childNodes);if(this.invalidateShadowRenderer()){if(v(this),""!==e){var n=I(this).ownerDocument.createTextNode(e);this.appendChild(n)}}else w(this),I(this).textContent=e;var r=c(this.childNodes);N(this,"childList",{addedNodes:r,removedNodes:t}),p(t),u(r,this)},get childNodes(){for(var e=new T,t=0,n=this.firstChild;n;n=n.nextSibling)e[t++]=n;return e.length=t,e},cloneNode:function(e){return y(this,e)},contains:function(e){return E(this,W(e))},compareDocumentPosition:function(e){return z.call(I(this),k(e))},isEqualNode:function(e){return K.call(I(this),k(e))},normalize:function(){for(var e,t,n=c(this.childNodes),r=[],o="",i=0;i<n.length;i++)t=n[i],t.nodeType===_.TEXT_NODE?e||t.data.length?e?(o+=t.data,r.push(t)):e=t:this.removeChild(t):(e&&r.length&&(e.data+=o,b(r)),r=[],o="",e=null,t.childNodes.length&&t.normalize());e&&r.length&&(e.data+=o,b(r))}}),L(_,"ownerDocument"),x(V,_,document.createDocumentFragment()),delete _.prototype.querySelector,delete _.prototype.querySelectorAll,_.prototype=D(Object.create(S.prototype),_.prototype),e.cloneNode=y,e.nodeWasAdded=l,e.nodeWasRemoved=d,e.nodesWereAdded=u,e.nodesWereRemoved=p,e.originalInsertBefore=Y,e.originalRemoveChild=$,e.snapshotNodeList=c,e.wrappers.Node=_}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n,r,o){for(var i=null,a=null,s=0,c=t.length;c>s;s++)i=b(t[s]),!o&&(a=v(i).root)&&a instanceof e.wrappers.ShadowRoot||(r[n++]=i);return n}function n(e){return String(e).replace(/\/deep\/|::shadow|>>>/g," ")}function r(e){return String(e).replace(/:host\(([^\s]+)\)/g,"$1").replace(/([^\s]):host/g,"$1").replace(":host","*").replace(/\^|\/shadow\/|\/shadow-deep\/|::shadow|\/deep\/|::content|>>>/g," ")}function o(e,t){for(var n,r=e.firstElementChild;r;){if(r.matches(t))return r;if(n=o(r,t))return n;r=r.nextElementSibling}return null}function i(e,t){return e.matches(t)}function a(e,t,n){var r=e.localName;return r===t||r===n&&e.namespaceURI===j}function s(){return!0}function c(e,t,n){return e.localName===n}function l(e,t){return e.namespaceURI===t}function u(e,t,n){return e.namespaceURI===t&&e.localName===n}function d(e,t,n,r,o,i){for(var a=e.firstElementChild;a;)r(a,o,i)&&(n[t++]=a),t=d(a,t,n,r,o,i),a=a.nextElementSibling;return t}function p(n,r,o,i,a){var s,c=g(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return d(this,r,o,n,i,null);if(c instanceof N)s=S.call(c,i);else{if(!(c instanceof C))return d(this,r,o,n,i,null);s=_.call(c,i)}return t(s,r,o,a)}function h(n,r,o,i,a){var s,c=g(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return d(this,r,o,n,i,a);if(c instanceof N)s=M.call(c,i,a);else{if(!(c instanceof C))return d(this,r,o,n,i,a);s=T.call(c,i,a)}return t(s,r,o,!1)}function f(n,r,o,i,a){var s,c=g(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return d(this,r,o,n,i,a);if(c instanceof N)s=L.call(c,i,a);else{if(!(c instanceof C))return d(this,r,o,n,i,a);s=O.call(c,i,a)}return t(s,r,o,!1)}var m=e.wrappers.HTMLCollection,w=e.wrappers.NodeList,v=e.getTreeScope,g=e.unsafeUnwrap,b=e.wrap,y=document.querySelector,E=document.documentElement.querySelector,_=document.querySelectorAll,S=document.documentElement.querySelectorAll,T=document.getElementsByTagName,M=document.documentElement.getElementsByTagName,O=document.getElementsByTagNameNS,L=document.documentElement.getElementsByTagNameNS,N=window.Element,C=window.HTMLDocument||window.Document,j="http://www.w3.org/1999/xhtml",D={querySelector:function(t){var r=n(t),i=r!==t;t=r;var a,s=g(this),c=v(this).root;if(c instanceof e.wrappers.ShadowRoot)return o(this,t);if(s instanceof N)a=b(E.call(s,t));else{if(!(s instanceof C))return o(this,t);

a=b(y.call(s,t))}return a&&!i&&(c=v(a).root)&&c instanceof e.wrappers.ShadowRoot?o(this,t):a},querySelectorAll:function(e){var t=n(e),r=t!==e;e=t;var o=new w;return o.length=p.call(this,i,0,o,e,r),o}},H={matches:function(t){return t=r(t),e.originalMatches.call(g(this),t)}},x={getElementsByTagName:function(e){var t=new m,n="*"===e?s:a;return t.length=h.call(this,n,0,t,e,e.toLowerCase()),t},getElementsByClassName:function(e){return this.querySelectorAll("."+e)},getElementsByTagNameNS:function(e,t){var n=new m,r=null;return r="*"===e?"*"===t?s:c:"*"===t?l:u,n.length=f.call(this,r,0,n,e||null,t),n}};e.GetElementsByInterface=x,e.SelectorsInterface=D,e.MatchesInterface=H}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.nextSibling;return e}function n(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.previousSibling;return e}var r=e.wrappers.NodeList,o={get firstElementChild(){return t(this.firstChild)},get lastElementChild(){return n(this.lastChild)},get childElementCount(){for(var e=0,t=this.firstElementChild;t;t=t.nextElementSibling)e++;return e},get children(){for(var e=new r,t=0,n=this.firstElementChild;n;n=n.nextElementSibling)e[t++]=n;return e.length=t,e},remove:function(){var e=this.parentNode;e&&e.removeChild(this)}},i={get nextElementSibling(){return t(this.nextSibling)},get previousElementSibling(){return n(this.previousSibling)}},a={getElementById:function(e){return/[ \t\n\r\f]/.test(e)?null:this.querySelector('[id="'+e+'"]')}};e.ChildNodeInterface=i,e.NonElementParentNodeInterface=a,e.ParentNodeInterface=o}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}var n=e.ChildNodeInterface,r=e.wrappers.Node,o=e.enqueueMutation,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=window.CharacterData;t.prototype=Object.create(r.prototype),i(t.prototype,{get nodeValue(){return this.data},set nodeValue(e){this.data=e},get textContent(){return this.data},set textContent(e){this.data=e},get data(){return s(this).data},set data(e){var t=s(this).data;o(this,"characterData",{oldValue:t}),s(this).data=e}}),i(t.prototype,n),a(c,t,document.createTextNode("")),e.wrappers.CharacterData=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e>>>0}function n(e){r.call(this,e)}var r=e.wrappers.CharacterData,o=(e.enqueueMutation,e.mixin),i=e.registerWrapper,a=window.Text;n.prototype=Object.create(r.prototype),o(n.prototype,{splitText:function(e){e=t(e);var n=this.data;if(e>n.length)throw new Error("IndexSizeError");var r=n.slice(0,e),o=n.slice(e);this.data=r;var i=this.ownerDocument.createTextNode(o);return this.parentNode&&this.parentNode.insertBefore(i,this.nextSibling),i}}),i(a,n,document.createTextNode("")),e.wrappers.Text=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return i(e).getAttribute("class")}function n(e,t){a(e,"attributes",{name:"class",namespace:null,oldValue:t})}function r(t){e.invalidateRendererBasedOnAttribute(t,"class")}function o(e,o,i){var a=e.ownerElement_;if(null==a)return o.apply(e,i);var s=t(a),c=o.apply(e,i);return t(a)!==s&&(n(a,s),r(a)),c}if(!window.DOMTokenList)return void console.warn("Missing DOMTokenList prototype, please include a compatible classList polyfill such as http://goo.gl/uTcepH.");var i=e.unsafeUnwrap,a=e.enqueueMutation,s=DOMTokenList.prototype.add;DOMTokenList.prototype.add=function(){o(this,s,arguments)};var c=DOMTokenList.prototype.remove;DOMTokenList.prototype.remove=function(){o(this,c,arguments)};var l=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(){return o(this,l,arguments)}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n){var r=t.parentNode;if(r&&r.shadowRoot){var o=e.getRendererForHost(r);o.dependsOnAttribute(n)&&o.invalidate()}}function n(e,t,n){u(e,"attributes",{name:t,namespace:null,oldValue:n})}function r(e){a.call(this,e)}var o=e.ChildNodeInterface,i=e.GetElementsByInterface,a=e.wrappers.Node,s=e.ParentNodeInterface,c=e.SelectorsInterface,l=e.MatchesInterface,u=(e.addWrapNodeListMethod,e.enqueueMutation),d=e.mixin,p=(e.oneOf,e.registerWrapper),h=e.unsafeUnwrap,f=e.wrappers,m=window.Element,w=["matches","mozMatchesSelector","msMatchesSelector","webkitMatchesSelector"].filter(function(e){return m.prototype[e]}),v=w[0],g=m.prototype[v],b=new WeakMap;r.prototype=Object.create(a.prototype),d(r.prototype,{createShadowRoot:function(){var t=new f.ShadowRoot(this);h(this).polymerShadowRoot_=t;var n=e.getRendererForHost(this);return n.invalidate(),t},get shadowRoot(){return h(this).polymerShadowRoot_||null},setAttribute:function(e,r){var o=h(this).getAttribute(e);h(this).setAttribute(e,r),n(this,e,o),t(this,e)},removeAttribute:function(e){var r=h(this).getAttribute(e);h(this).removeAttribute(e),n(this,e,r),t(this,e)},get classList(){var e=b.get(this);if(!e){if(e=h(this).classList,!e)return;e.ownerElement_=this,b.set(this,e)}return e},get className(){return h(this).className},set className(e){this.setAttribute("class",e)},get id(){return h(this).id},set id(e){this.setAttribute("id",e)}}),w.forEach(function(e){"matches"!==e&&(r.prototype[e]=function(e){return this.matches(e)})}),m.prototype.webkitCreateShadowRoot&&(r.prototype.webkitCreateShadowRoot=r.prototype.createShadowRoot),d(r.prototype,o),d(r.prototype,i),d(r.prototype,s),d(r.prototype,c),d(r.prototype,l),p(m,r,document.createElementNS(null,"x")),e.invalidateRendererBasedOnAttribute=t,e.matchesNames=w,e.originalMatches=g,e.wrappers.Element=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case" ":return"&nbsp;"}}function n(e){return e.replace(L,t)}function r(e){return e.replace(N,t)}function o(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}function i(e){if(e.namespaceURI!==D)return!0;var t=e.ownerDocument.doctype;return t&&t.publicId&&t.systemId}function a(e,t){switch(e.nodeType){case Node.ELEMENT_NODE:for(var o,a=e.tagName.toLowerCase(),c="<"+a,l=e.attributes,u=0;o=l[u];u++)c+=" "+o.name+'="'+n(o.value)+'"';return C[a]?(i(e)&&(c+="/"),c+">"):c+">"+s(e)+"</"+a+">";case Node.TEXT_NODE:var d=e.data;return t&&j[t.localName]?d:r(d);case Node.COMMENT_NODE:return"\x3c!--"+e.data+"--\x3e";default:throw console.error(e),new Error("not implemented")}}function s(e){e instanceof O.HTMLTemplateElement&&(e=e.content);for(var t="",n=e.firstChild;n;n=n.nextSibling)t+=a(n,e);return t}function c(e,t,n){var r=n||"div";e.textContent="";var o=T(e.ownerDocument.createElement(r));o.innerHTML=t;for(var i;i=o.firstChild;)e.appendChild(M(i))}function l(e){m.call(this,e)}function u(e,t){var n=T(e.cloneNode(!1));n.innerHTML=t;for(var r,o=T(document.createDocumentFragment());r=n.firstChild;)o.appendChild(r);return M(o)}function d(t){return function(){return e.renderAllPending(),S(this)[t]}}function p(e){w(l,e,d(e))}function h(t){Object.defineProperty(l.prototype,t,{get:d(t),set:function(n){e.renderAllPending(),S(this)[t]=n},configurable:!0,enumerable:!0})}function f(t){Object.defineProperty(l.prototype,t,{value:function(){return e.renderAllPending(),S(this)[t].apply(S(this),arguments)},configurable:!0,enumerable:!0})}var m=e.wrappers.Element,w=e.defineGetter,v=e.enqueueMutation,g=e.mixin,b=e.nodesWereAdded,y=e.nodesWereRemoved,E=e.registerWrapper,_=e.snapshotNodeList,S=e.unsafeUnwrap,T=e.unwrap,M=e.wrap,O=e.wrappers,L=/[&\u00A0"]/g,N=/[&\u00A0<>]/g,C=o(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),j=o(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]),D="http://www.w3.org/1999/xhtml",H=/MSIE/.test(navigator.userAgent),x=window.HTMLElement,R=window.HTMLTemplateElement;l.prototype=Object.create(m.prototype),g(l.prototype,{get innerHTML(){return s(this)},set innerHTML(e){if(H&&j[this.localName])return void(this.textContent=e);var t=_(this.childNodes);this.invalidateShadowRenderer()?this instanceof O.HTMLTemplateElement?c(this.content,e):c(this,e,this.tagName):!R&&this instanceof O.HTMLTemplateElement?c(this.content,e):S(this).innerHTML=e;var n=_(this.childNodes);v(this,"childList",{addedNodes:n,removedNodes:t}),y(t),b(n,this)},get outerHTML(){return a(this,this.parentNode)},set outerHTML(e){var t=this.parentNode;if(t){t.invalidateShadowRenderer();var n=u(t,e);t.replaceChild(n,this)}},insertAdjacentHTML:function(e,t){var n,r;switch(String(e).toLowerCase()){case"beforebegin":n=this.parentNode,r=this;break;case"afterend":n=this.parentNode,r=this.nextSibling;break;case"afterbegin":n=this,r=this.firstChild;break;case"beforeend":n=this,r=null;break;default:return}var o=u(n,t);n.insertBefore(o,r)},get hidden(){return this.hasAttribute("hidden")},set hidden(e){e?this.setAttribute("hidden",""):this.removeAttribute("hidden")}}),["clientHeight","clientLeft","clientTop","clientWidth","offsetHeight","offsetLeft","offsetTop","offsetWidth","scrollHeight","scrollWidth"].forEach(p),["scrollLeft","scrollTop"].forEach(h),["getBoundingClientRect","getClientRects","scrollIntoView"].forEach(f),E(x,l,document.createElement("b")),e.wrappers.HTMLElement=l,e.getInnerHTML=s,e.setInnerHTML=c}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.HTMLCanvasElement;t.prototype=Object.create(n.prototype),r(t.prototype,{getContext:function(){var e=i(this).getContext.apply(i(this),arguments);return e&&a(e)}}),o(s,t,document.createElement("canvas")),e.wrappers.HTMLCanvasElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=window.HTMLContentElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get select(){return this.getAttribute("select")},set select(e){this.setAttribute("select",e)},setAttribute:function(e,t){n.prototype.setAttribute.call(this,e,t),"select"===String(e).toLowerCase()&&this.invalidateShadowRenderer(!0)}}),i&&o(i,t),e.wrappers.HTMLContentElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=window.HTMLFormElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get elements(){return i(a(this).elements)}}),o(s,t,document.createElement("form")),e.wrappers.HTMLFormElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e,t){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var o=i(document.createElement("img"));r.call(this,o),a(o,this),void 0!==e&&(o.width=e),void 0!==t&&(o.height=t)}var r=e.wrappers.HTMLElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLImageElement;t.prototype=Object.create(r.prototype),o(s,t,document.createElement("img")),n.prototype=t.prototype,e.wrappers.HTMLImageElement=t,e.wrappers.Image=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=(e.mixin,e.wrappers.NodeList,e.registerWrapper),o=window.HTMLShadowElement;t.prototype=Object.create(n.prototype),t.prototype.constructor=t,o&&r(o,t),e.wrappers.HTMLShadowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){if(!e.defaultView)return e;var t=d.get(e);if(!t){for(t=e.implementation.createHTMLDocument("");t.lastChild;)t.removeChild(t.lastChild);d.set(e,t)}return t}function n(e){for(var n,r=t(e.ownerDocument),o=c(r.createDocumentFragment());n=e.firstChild;)o.appendChild(n);return o}function r(e){if(o.call(this,e),!p){var t=n(e);u.set(this,l(t))}}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=e.unwrap,l=e.wrap,u=new WeakMap,d=new WeakMap,p=window.HTMLTemplateElement;r.prototype=Object.create(o.prototype),i(r.prototype,{constructor:r,get content(){return p?l(s(this).content):u.get(this)}}),p&&a(p,r),e.wrappers.HTMLTemplateElement=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.registerWrapper,o=window.HTMLMediaElement;o&&(t.prototype=Object.create(n.prototype),r(o,t,document.createElement("audio")),e.wrappers.HTMLMediaElement=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var t=i(document.createElement("audio"));r.call(this,t),a(t,this),t.setAttribute("preload","auto"),void 0!==e&&t.setAttribute("src",e)}var r=e.wrappers.HTMLMediaElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLAudioElement;s&&(t.prototype=Object.create(r.prototype),o(s,t,document.createElement("audio")),n.prototype=t.prototype,e.wrappers.HTMLAudioElement=t,e.wrappers.Audio=n)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e.replace(/\s+/g," ").trim()}function n(e){o.call(this,e)}function r(e,t,n,i){if(!(this instanceof r))throw new TypeError("DOM object constructor cannot be called as a function.");var a=c(document.createElement("option"));o.call(this,a),s(a,this),void 0!==e&&(a.text=e),void 0!==t&&a.setAttribute("value",t),n===!0&&a.setAttribute("selected",""),a.selected=i===!0}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.rewrap,c=e.unwrap,l=e.wrap,u=window.HTMLOptionElement;n.prototype=Object.create(o.prototype),i(n.prototype,{get text(){return t(this.textContent)},set text(e){this.textContent=t(String(e))},get form(){return l(c(this).form)}}),a(u,n,document.createElement("option")),r.prototype=n.prototype,e.wrappers.HTMLOptionElement=n,e.wrappers.Option=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=window.HTMLSelectElement;t.prototype=Object.create(n.prototype),r(t.prototype,{add:function(e,t){"object"==typeof t&&(t=i(t)),i(this).add(i(e),t)},remove:function(e){return void 0===e?void n.prototype.remove.call(this):("object"==typeof e&&(e=i(e)),void i(this).remove(e))},get form(){return a(i(this).form)}}),o(s,t,document.createElement("select")),e.wrappers.HTMLSelectElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=e.wrapHTMLCollection,c=window.HTMLTableElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get caption(){return a(i(this).caption)},createCaption:function(){return a(i(this).createCaption())},get tHead(){return a(i(this).tHead)},createTHead:function(){return a(i(this).createTHead())},createTFoot:function(){return a(i(this).createTFoot())},get tFoot(){return a(i(this).tFoot)},get tBodies(){return s(i(this).tBodies)},createTBody:function(){return a(i(this).createTBody())},get rows(){return s(i(this).rows)},insertRow:function(e){return a(i(this).insertRow(e))}}),o(c,t,document.createElement("table")),e.wrappers.HTMLTableElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableSectionElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get rows(){return i(a(this).rows)},insertRow:function(e){return s(a(this).insertRow(e))}}),o(c,t,document.createElement("thead")),e.wrappers.HTMLTableSectionElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableRowElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get cells(){return i(a(this).cells)},insertCell:function(e){return s(a(this).insertCell(e))}}),o(c,t,document.createElement("tr")),e.wrappers.HTMLTableRowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e.localName){case"content":return new n(e);case"shadow":return new o(e);case"template":return new i(e)}r.call(this,e)}var n=e.wrappers.HTMLContentElement,r=e.wrappers.HTMLElement,o=e.wrappers.HTMLShadowElement,i=e.wrappers.HTMLTemplateElement,a=(e.mixin,e.registerWrapper),s=window.HTMLUnknownElement;t.prototype=Object.create(r.prototype),a(s,t),e.wrappers.HTMLUnknownElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.wrappers.Element,n=e.wrappers.HTMLElement,r=e.registerObject,o=e.defineWrapGetter,i="http://www.w3.org/2000/svg",a=document.createElementNS(i,"title"),s=r(a),c=Object.getPrototypeOf(s.prototype).constructor;if(!("classList"in a)){var l=Object.getOwnPropertyDescriptor(t.prototype,"classList");Object.defineProperty(n.prototype,"classList",l),delete t.prototype.classList}o(c,"ownerSVGElement"),e.wrappers.SVGElement=c}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){p.call(this,e)}var n=e.mixin,r=e.registerWrapper,o=e.unwrap,i=e.wrap,a=window.SVGUseElement,s="http://www.w3.org/2000/svg",c=i(document.createElementNS(s,"g")),l=document.createElementNS(s,"use"),u=c.constructor,d=Object.getPrototypeOf(u.prototype),p=d.constructor;t.prototype=Object.create(d),"instanceRoot"in l&&n(t.prototype,{get instanceRoot(){return i(o(this).instanceRoot)},get animatedInstanceRoot(){return i(o(this).animatedInstanceRoot)}}),r(a,t,l),e.wrappers.SVGUseElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.SVGElementInstance;s&&(t.prototype=Object.create(n.prototype),r(t.prototype,{get correspondingElement(){return a(i(this).correspondingElement)},get correspondingUseElement(){return a(i(this).correspondingUseElement)},get parentNode(){return a(i(this).parentNode)},get childNodes(){throw new Error("Not implemented")},get firstChild(){return a(i(this).firstChild)},get lastChild(){return a(i(this).lastChild)},get previousSibling(){return a(i(this).previousSibling)},get nextSibling(){return a(i(this).nextSibling)}}),o(s,t),e.wrappers.SVGElementInstance=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){o(e,this)}var n=e.mixin,r=e.registerWrapper,o=e.setWrapper,i=e.unsafeUnwrap,a=e.unwrap,s=e.unwrapIfNeeded,c=e.wrap,l=window.CanvasRenderingContext2D;n(t.prototype,{get canvas(){return c(i(this).canvas)},drawImage:function(){arguments[0]=s(arguments[0]),i(this).drawImage.apply(i(this),arguments)},createPattern:function(){return arguments[0]=a(arguments[0]),i(this).createPattern.apply(i(this),arguments)}}),r(l,t,document.createElement("canvas").getContext("2d")),e.wrappers.CanvasRenderingContext2D=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){o(e,this)}var n=e.mixin,r=e.registerWrapper,o=e.setWrapper,i=e.unsafeUnwrap,a=e.unwrapIfNeeded,s=e.wrap,c=window.WebGLRenderingContext;if(c){n(t.prototype,{get canvas(){return s(i(this).canvas)},texImage2D:function(){arguments[5]=a(arguments[5]),i(this).texImage2D.apply(i(this),arguments)},texSubImage2D:function(){arguments[6]=a(arguments[6]),i(this).texSubImage2D.apply(i(this),arguments)}});var l=/WebKit/.test(navigator.userAgent)?{drawingBufferHeight:null,drawingBufferWidth:null}:{};r(c,t,l),e.wrappers.WebGLRenderingContext=t}}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.GetElementsByInterface,n=e.NonElementParentNodeInterface,r=e.ParentNodeInterface,o=e.SelectorsInterface,i=e.mixin,a=e.registerObject,s=a(document.createDocumentFragment());i(s.prototype,r),i(s.prototype,o),i(s.prototype,t),i(s.prototype,n);var c=a(document.createComment(""));e.wrappers.Comment=c,e.wrappers.DocumentFragment=s}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=d(u(e).ownerDocument.createDocumentFragment());n.call(this,t),c(t,this);var o=e.shadowRoot;h.set(this,o),this.treeScope_=new r(this,a(o||e)),p.set(this,e)}var n=e.wrappers.DocumentFragment,r=e.TreeScope,o=e.elementFromPoint,i=e.getInnerHTML,a=e.getTreeScope,s=e.mixin,c=e.rewrap,l=e.setInnerHTML,u=e.unsafeUnwrap,d=e.unwrap,p=new WeakMap,h=new WeakMap;t.prototype=Object.create(n.prototype),s(t.prototype,{constructor:t,get innerHTML(){return i(this)},set innerHTML(e){l(this,e),this.invalidateShadowRenderer()},get olderShadowRoot(){return h.get(this)||null},get host(){return p.get(this)||null},invalidateShadowRenderer:function(){return p.get(this).invalidateShadowRenderer()},elementFromPoint:function(e,t){return o(this,this.ownerDocument,e,t)}}),e.wrappers.ShadowRoot=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=d(e).root;return t instanceof h?t.host:null}function n(t,n){if(t.shadowRoot){n=Math.min(t.childNodes.length-1,n);var r=t.childNodes[n];if(r){var o=e.getDestinationInsertionPoints(r);if(o.length>0){var i=o[0].parentNode;i.nodeType==Node.ELEMENT_NODE&&(t=i)}}}return t}function r(e){return e=u(e),t(e)||e}function o(e){a(e,this)}var i=e.registerWrapper,a=e.setWrapper,s=e.unsafeUnwrap,c=e.unwrap,l=e.unwrapIfNeeded,u=e.wrap,d=e.getTreeScope,p=window.Range,h=e.wrappers.ShadowRoot;o.prototype={get startContainer(){return r(s(this).startContainer)},get endContainer(){return r(s(this).endContainer)},get commonAncestorContainer(){return r(s(this).commonAncestorContainer)},setStart:function(e,t){e=n(e,t),s(this).setStart(l(e),t)},setEnd:function(e,t){e=n(e,t),s(this).setEnd(l(e),t)},setStartBefore:function(e){s(this).setStartBefore(l(e))},setStartAfter:function(e){s(this).setStartAfter(l(e))},setEndBefore:function(e){s(this).setEndBefore(l(e))},setEndAfter:function(e){s(this).setEndAfter(l(e))},selectNode:function(e){s(this).selectNode(l(e))},selectNodeContents:function(e){s(this).selectNodeContents(l(e))},compareBoundaryPoints:function(e,t){return s(this).compareBoundaryPoints(e,c(t))},extractContents:function(){return u(s(this).extractContents())},cloneContents:function(){return u(s(this).cloneContents())},insertNode:function(e){s(this).insertNode(l(e))},surroundContents:function(e){s(this).surroundContents(l(e))},cloneRange:function(){return u(s(this).cloneRange())},isPointInRange:function(e,t){return s(this).isPointInRange(l(e),t)},comparePoint:function(e,t){return s(this).comparePoint(l(e),t)},intersectsNode:function(e){return s(this).intersectsNode(l(e))},toString:function(){return s(this).toString()}},p.prototype.createContextualFragment&&(o.prototype.createContextualFragment=function(e){return u(s(this).createContextualFragment(e))}),i(window.Range,o,document.createRange()),e.wrappers.Range=o}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.previousSibling_=e.previousSibling,e.nextSibling_=e.nextSibling,e.parentNode_=e.parentNode}function n(n,o,i){var a=x(n),s=x(o),c=i?x(i):null;if(r(o),t(o),i)n.firstChild===i&&(n.firstChild_=i),i.previousSibling_=i.previousSibling;else{n.lastChild_=n.lastChild,n.lastChild===n.firstChild&&(n.firstChild_=n.firstChild);var l=R(a.lastChild);l&&(l.nextSibling_=l.nextSibling)}e.originalInsertBefore.call(a,s,c)}function r(n){var r=x(n),o=r.parentNode;if(o){var i=R(o);t(n),n.previousSibling&&(n.previousSibling.nextSibling_=n),n.nextSibling&&(n.nextSibling.previousSibling_=n),i.lastChild===n&&(i.lastChild_=n),i.firstChild===n&&(i.firstChild_=n),e.originalRemoveChild.call(o,r)}}function o(e){P.set(e,[])}function i(e){var t=P.get(e);return t||P.set(e,t=[]),t}function a(e){for(var t=[],n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t}function s(){for(var e=0;e<F.length;e++){var t=F[e],n=t.parentRenderer;n&&n.dirty||t.render()}F=[]}function c(){T=null,s()}function l(e){var t=A.get(e);return t||(t=new h(e),A.set(e,t)),t}function u(e){var t=j(e).root;return t instanceof C?t:null}function d(e){return l(e.host)}function p(e){this.skip=!1,this.node=e,this.childNodes=[]}function h(e){this.host=e,this.dirty=!1,this.invalidateAttributes(),this.associateNode(e)}function f(e){for(var t=[],n=e.firstChild;n;n=n.nextSibling)E(n)?t.push.apply(t,i(n)):t.push(n);return t}function m(e){if(e instanceof L)return e;if(e instanceof O)return null;for(var t=e.firstChild;t;t=t.nextSibling){var n=m(t);if(n)return n}return null}function w(e,t){i(t).push(e);var n=k.get(e);n?n.push(t):k.set(e,[t])}function v(e){return k.get(e)}function g(e){k.set(e,void 0)}function b(e,t){var n=t.getAttribute("select");if(!n)return!0;if(n=n.trim(),!n)return!0;if(!(e instanceof M))return!1;if(!q.test(n))return!1;try{return e.matches(n)}catch(r){return!1}}function y(e,t){var n=v(t);return n&&n[n.length-1]===e}function E(e){return e instanceof O||e instanceof L}function _(e){return e.shadowRoot}function S(e){for(var t=[],n=e.shadowRoot;n;n=n.olderShadowRoot)t.push(n);return t}var T,M=e.wrappers.Element,O=e.wrappers.HTMLContentElement,L=e.wrappers.HTMLShadowElement,N=e.wrappers.Node,C=e.wrappers.ShadowRoot,j=(e.assert,e.getTreeScope),D=(e.mixin,e.oneOf),H=e.unsafeUnwrap,x=e.unwrap,R=e.wrap,I=e.ArraySplice,P=new WeakMap,k=new WeakMap,A=new WeakMap,W=D(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","setTimeout"]),F=[],U=new I;U.equals=function(e,t){return x(e.node)===t},p.prototype={append:function(e){var t=new p(e);return this.childNodes.push(t),t},sync:function(e){if(!this.skip){for(var t=this.node,o=this.childNodes,i=a(x(t)),s=e||new WeakMap,c=U.calculateSplices(o,i),l=0,u=0,d=0,p=0;p<c.length;p++){for(var h=c[p];d<h.index;d++)u++,o[l++].sync(s);for(var f=h.removed.length,m=0;f>m;m++){var w=R(i[u++]);s.get(w)||r(w)}for(var v=h.addedCount,g=i[u]&&R(i[u]),m=0;v>m;m++){var b=o[l++],y=b.node;n(t,y,g),s.set(y,!0),b.sync(s)}d+=v}for(var p=d;p<o.length;p++)o[p].sync(s)}}},h.prototype={render:function(e){if(this.dirty){this.invalidateAttributes();var t=this.host;this.distribution(t);var n=e||new p(t);this.buildRenderTree(n,t);var r=!e;r&&n.sync(),this.dirty=!1}},get parentRenderer(){return j(this.host).renderer},invalidate:function(){if(!this.dirty){this.dirty=!0;var e=this.parentRenderer;if(e&&e.invalidate(),F.push(this),T)return;T=window[W](c,0)}},distribution:function(e){this.resetAllSubtrees(e),this.distributionResolution(e)},resetAll:function(e){E(e)?o(e):g(e),this.resetAllSubtrees(e)},resetAllSubtrees:function(e){for(var t=e.firstChild;t;t=t.nextSibling)this.resetAll(t);e.shadowRoot&&this.resetAll(e.shadowRoot),e.olderShadowRoot&&this.resetAll(e.olderShadowRoot)},distributionResolution:function(e){if(_(e)){for(var t=e,n=f(t),r=S(t),o=0;o<r.length;o++)this.poolDistribution(r[o],n);for(var o=r.length-1;o>=0;o--){var i=r[o],a=m(i);if(a){var s=i.olderShadowRoot;s&&(n=f(s));for(var c=0;c<n.length;c++)w(n[c],a)}this.distributionResolution(i)}}for(var l=e.firstChild;l;l=l.nextSibling)this.distributionResolution(l)},poolDistribution:function(e,t){if(!(e instanceof L))if(e instanceof O){var n=e;this.updateDependentAttributes(n.getAttribute("select"));for(var r=!1,o=0;o<t.length;o++){var e=t[o];e&&b(e,n)&&(w(e,n),t[o]=void 0,r=!0)}if(!r)for(var i=n.firstChild;i;i=i.nextSibling)w(i,n)}else for(var i=e.firstChild;i;i=i.nextSibling)this.poolDistribution(i,t)},buildRenderTree:function(e,t){for(var n=this.compose(t),r=0;r<n.length;r++){var o=n[r],i=e.append(o);this.buildRenderTree(i,o)}if(_(t)){var a=l(t);a.dirty=!1}},compose:function(e){for(var t=[],n=e.shadowRoot||e,r=n.firstChild;r;r=r.nextSibling)if(E(r)){this.associateNode(n);for(var o=i(r),a=0;a<o.length;a++){var s=o[a];y(r,s)&&t.push(s)}}else t.push(r);return t},invalidateAttributes:function(){this.attributes=Object.create(null)},updateDependentAttributes:function(e){if(e){var t=this.attributes;/\.\w+/.test(e)&&(t["class"]=!0),/#\w+/.test(e)&&(t.id=!0),e.replace(/\[\s*([^\s=\|~\]]+)/g,function(e,n){t[n]=!0})}},dependsOnAttribute:function(e){return this.attributes[e]},associateNode:function(e){H(e).polymerShadowRenderer_=this}};var q=/^(:not\()?[*.#[a-zA-Z_|]/;N.prototype.invalidateShadowRenderer=function(e){var t=H(this).polymerShadowRenderer_;return t?(t.invalidate(),!0):!1},O.prototype.getDistributedNodes=L.prototype.getDistributedNodes=function(){return s(),i(this)},M.prototype.getDestinationInsertionPoints=function(){return s(),v(this)||[]},O.prototype.nodeIsInserted_=L.prototype.nodeIsInserted_=function(){this.invalidateShadowRenderer();var e,t=u(this);t&&(e=d(t)),H(this).polymerShadowRenderer_=e,e&&e.invalidate()},e.getRendererForHost=l,e.getShadowTrees=S,e.renderAllPending=s,e.getDestinationInsertionPoints=v,e.visual={insertBefore:n,remove:r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t){if(window[t]){r(!e.wrappers[t]);var c=function(e){n.call(this,e)};c.prototype=Object.create(n.prototype),o(c.prototype,{get form(){return s(a(this).form)}}),i(window[t],c,document.createElement(t.slice(4,-7))),e.wrappers[t]=c}}var n=e.wrappers.HTMLElement,r=e.assert,o=e.mixin,i=e.registerWrapper,a=e.unwrap,s=e.wrap,c=["HTMLButtonElement","HTMLFieldSetElement","HTMLInputElement","HTMLKeygenElement","HTMLLabelElement","HTMLLegendElement","HTMLObjectElement","HTMLOutputElement","HTMLTextAreaElement"];c.forEach(t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrap,a=e.unwrapIfNeeded,s=e.wrap,c=window.Selection;t.prototype={get anchorNode(){return s(o(this).anchorNode)},get focusNode(){return s(o(this).focusNode)},addRange:function(e){o(this).addRange(a(e))},collapse:function(e,t){o(this).collapse(a(e),t)},containsNode:function(e,t){return o(this).containsNode(a(e),t)},getRangeAt:function(e){return s(o(this).getRangeAt(e))},removeRange:function(e){o(this).removeRange(i(e))},selectAllChildren:function(e){o(this).selectAllChildren(a(e))},toString:function(){return o(this).toString()}},c.prototype.extend&&(t.prototype.extend=function(e,t){o(this).extend(a(e),t)}),n(window.Selection,t,window.getSelection()),e.wrappers.Selection=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrapIfNeeded,a=e.wrap,s=window.TreeWalker;t.prototype={get root(){return a(o(this).root)},get currentNode(){return a(o(this).currentNode)},set currentNode(e){o(this).currentNode=i(e)},get filter(){return o(this).filter},parentNode:function(){return a(o(this).parentNode())},firstChild:function(){return a(o(this).firstChild())},lastChild:function(){return a(o(this).lastChild())},previousSibling:function(){return a(o(this).previousSibling())},previousNode:function(){return a(o(this).previousNode())},nextNode:function(){return a(o(this).nextNode())}},n(s,t),e.wrappers.TreeWalker=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){u.call(this,e),this.treeScope_=new w(this,null)}function n(e){var n=document[e];t.prototype[e]=function(){return C(n.apply(L(this),arguments))}}function r(e,t){H.call(L(t),N(e)),o(e,t)}function o(e,t){e.shadowRoot&&t.adoptNode(e.shadowRoot),e instanceof m&&i(e,t);for(var n=e.firstChild;n;n=n.nextSibling)o(n,t)}function i(e,t){var n=e.olderShadowRoot;n&&t.adoptNode(n)}function a(e){O(e,this)}function s(e,t){var n=document.implementation[t];e.prototype[t]=function(){return C(n.apply(L(this),arguments))}}function c(e,t){var n=document.implementation[t];e.prototype[t]=function(){return n.apply(L(this),arguments)}}var l=e.GetElementsByInterface,u=e.wrappers.Node,d=e.ParentNodeInterface,p=e.NonElementParentNodeInterface,h=e.wrappers.Selection,f=e.SelectorsInterface,m=e.wrappers.ShadowRoot,w=e.TreeScope,v=e.cloneNode,g=e.defineWrapGetter,b=e.elementFromPoint,y=e.forwardMethodsToWrapper,E=e.matchesNames,_=e.mixin,S=e.registerWrapper,T=e.renderAllPending,M=e.rewrap,O=e.setWrapper,L=e.unsafeUnwrap,N=e.unwrap,C=e.wrap,j=e.wrapEventTargetMethods,D=(e.wrapNodeList,new WeakMap);t.prototype=Object.create(u.prototype),g(t,"documentElement"),g(t,"body"),g(t,"head"),["createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode"].forEach(n);var H=document.adoptNode,x=document.getSelection;_(t.prototype,{
adoptNode:function(e){return e.parentNode&&e.parentNode.removeChild(e),r(e,this),e},elementFromPoint:function(e,t){return b(this,this,e,t)},importNode:function(e,t){return v(e,t,L(this))},getSelection:function(){return T(),new h(x.call(N(this)))},getElementsByName:function(e){return f.querySelectorAll.call(this,"[name="+JSON.stringify(String(e))+"]")}});var R=document.createTreeWalker,I=e.wrappers.TreeWalker;if(t.prototype.createTreeWalker=function(e,t,n,r){var o=null;return n&&(n.acceptNode&&"function"==typeof n.acceptNode?o={acceptNode:function(e){return n.acceptNode(C(e))}}:"function"==typeof n&&(o=function(e){return n(C(e))})),new I(R.call(N(this),N(e),t,o,r))},document.registerElement){var P=document.registerElement;t.prototype.registerElement=function(t,n){function r(e){return e?void O(e,this):i?document.createElement(i,t):document.createElement(t)}var o,i;if(void 0!==n&&(o=n.prototype,i=n["extends"]),o||(o=Object.create(HTMLElement.prototype)),e.nativePrototypeTable.get(o))throw new Error("NotSupportedError");for(var a,s=Object.getPrototypeOf(o),c=[];s&&!(a=e.nativePrototypeTable.get(s));)c.push(s),s=Object.getPrototypeOf(s);if(!a)throw new Error("NotSupportedError");for(var l=Object.create(a),u=c.length-1;u>=0;u--)l=Object.create(l);["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"].forEach(function(e){var t=o[e];t&&(l[e]=function(){C(this)instanceof r||M(this),t.apply(C(this),arguments)})});var d={prototype:l};i&&(d["extends"]=i),r.prototype=o,r.prototype.constructor=r,e.constructorTable.set(l,r),e.nativePrototypeTable.set(o,l);P.call(N(this),t,d);return r},y([window.HTMLDocument||window.Document],["registerElement"])}y([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement,window.HTMLHtmlElement],["appendChild","compareDocumentPosition","contains","getElementsByClassName","getElementsByTagName","getElementsByTagNameNS","insertBefore","querySelector","querySelectorAll","removeChild","replaceChild"]),y([window.HTMLBodyElement,window.HTMLHeadElement,window.HTMLHtmlElement],E),y([window.HTMLDocument||window.Document],["adoptNode","importNode","contains","createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode","createTreeWalker","elementFromPoint","getElementById","getElementsByName","getSelection"]),_(t.prototype,l),_(t.prototype,d),_(t.prototype,f),_(t.prototype,p),_(t.prototype,{get implementation(){var e=D.get(this);return e?e:(e=new a(N(this).implementation),D.set(this,e),e)},get defaultView(){return C(N(this).defaultView)}}),S(window.Document,t,document.implementation.createHTMLDocument("")),window.HTMLDocument&&S(window.HTMLDocument,t),j([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement]);var k=document.implementation.createDocument;a.prototype.createDocument=function(){return arguments[2]=N(arguments[2]),C(k.apply(L(this),arguments))},s(a,"createDocumentType"),s(a,"createHTMLDocument"),c(a,"hasFeature"),S(window.DOMImplementation,a),y([window.DOMImplementation],["createDocument","createDocumentType","createHTMLDocument","hasFeature"]),e.adoptNodeNoRemove=r,e.wrappers.DOMImplementation=a,e.wrappers.Document=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.wrappers.Selection,o=e.mixin,i=e.registerWrapper,a=e.renderAllPending,s=e.unwrap,c=e.unwrapIfNeeded,l=e.wrap,u=window.Window,d=window.getComputedStyle,p=window.getDefaultComputedStyle,h=window.getSelection;t.prototype=Object.create(n.prototype),u.prototype.getComputedStyle=function(e,t){return l(this||window).getComputedStyle(c(e),t)},p&&(u.prototype.getDefaultComputedStyle=function(e,t){return l(this||window).getDefaultComputedStyle(c(e),t)}),u.prototype.getSelection=function(){return l(this||window).getSelection()},delete window.getComputedStyle,delete window.getDefaultComputedStyle,delete window.getSelection,["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){u.prototype[e]=function(){var t=l(this||window);return t[e].apply(t,arguments)},delete window[e]}),o(t.prototype,{getComputedStyle:function(e,t){return a(),d.call(s(this),c(e),t)},getSelection:function(){return a(),new r(h.call(s(this)))},get document(){return l(s(this).document)}}),p&&(t.prototype.getDefaultComputedStyle=function(e,t){return a(),p.call(s(this),c(e),t)}),i(u,t,window),e.wrappers.Window=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrap,n=window.DataTransfer||window.Clipboard,r=n.prototype.setDragImage;r&&(n.prototype.setDragImage=function(e,n,o){r.call(this,t(e),n,o)})}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t;t=e instanceof i?e:new i(e&&o(e)),r(t,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unwrap,i=window.FormData;i&&(n(i,t,new i),e.wrappers.FormData=t)}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrapIfNeeded,n=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){return n.call(this,t(e))}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=n[e],r=window[t];if(r){var o=document.createElement(e),i=o.constructor;window[t]=i}}var n=(e.isWrapperFor,{a:"HTMLAnchorElement",area:"HTMLAreaElement",audio:"HTMLAudioElement",base:"HTMLBaseElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",col:"HTMLTableColElement",content:"HTMLContentElement",data:"HTMLDataElement",datalist:"HTMLDataListElement",del:"HTMLModElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",embed:"HTMLEmbedElement",fieldset:"HTMLFieldSetElement",font:"HTMLFontElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",head:"HTMLHeadElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",marquee:"HTMLMarqueeElement",menu:"HTMLMenuElement",menuitem:"HTMLMenuItemElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",script:"HTMLScriptElement",select:"HTMLSelectElement",shadow:"HTMLShadowElement",source:"HTMLSourceElement",span:"HTMLSpanElement",style:"HTMLStyleElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",template:"HTMLTemplateElement",textarea:"HTMLTextAreaElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",ul:"HTMLUListElement",video:"HTMLVideoElement"});Object.keys(n).forEach(t),Object.getOwnPropertyNames(e.wrappers).forEach(function(t){window[t]=e.wrappers[t]})}(window.ShadowDOMPolyfill),function(e){function t(e,t){var n="";return Array.prototype.forEach.call(e,function(e){n+=e.textContent+"\n\n"}),t||(n=n.replace(d,"")),n}function n(e){var t=document.createElement("style");return t.textContent=e,t}function r(e){var t=n(e);document.head.appendChild(t);var r=[];if(t.sheet)try{r=t.sheet.cssRules}catch(o){}else console.warn("sheet not found",t);return t.parentNode.removeChild(t),r}function o(){C.initialized=!0,document.body.appendChild(C);var e=C.contentDocument,t=e.createElement("base");t.href=document.baseURI,e.head.appendChild(t)}function i(e){C.initialized||o(),document.body.appendChild(C),e(C.contentDocument),document.body.removeChild(C)}function a(e,t){if(t){var o;if(e.match("@import")&&D){var a=n(e);i(function(e){e.head.appendChild(a.impl),o=Array.prototype.slice.call(a.sheet.cssRules,0),t(o)})}else o=r(e),t(o)}}function s(e){e&&l().appendChild(document.createTextNode(e))}function c(e,t){var r=n(e);r.setAttribute(t,""),r.setAttribute(x,""),document.head.appendChild(r)}function l(){return j||(j=document.createElement("style"),j.setAttribute(x,""),j[x]=!0),j}var u={strictStyling:!1,registry:{},shimStyling:function(e,n,r){var o=this.prepareRoot(e,n,r),i=this.isTypeExtension(r),a=this.makeScopeSelector(n,i),s=t(o,!0);s=this.scopeCssText(s,a),e&&(e.shimmedStyle=s),this.addCssToDocument(s,n)},shimStyle:function(e,t){return this.shimCssText(e.textContent,t)},shimCssText:function(e,t){return e=this.insertDirectives(e),this.scopeCssText(e,t)},makeScopeSelector:function(e,t){return e?t?"[is="+e+"]":e:""},isTypeExtension:function(e){return e&&e.indexOf("-")<0},prepareRoot:function(e,t,n){var r=this.registerRoot(e,t,n);return this.replaceTextInStyles(r.rootStyles,this.insertDirectives),this.removeStyles(e,r.rootStyles),this.strictStyling&&this.applyScopeToContent(e,t),r.scopeStyles},removeStyles:function(e,t){for(var n,r=0,o=t.length;o>r&&(n=t[r]);r++)n.parentNode.removeChild(n)},registerRoot:function(e,t,n){var r=this.registry[t]={root:e,name:t,extendsName:n},o=this.findStyles(e);r.rootStyles=o,r.scopeStyles=r.rootStyles;var i=this.registry[r.extendsName];return i&&(r.scopeStyles=i.scopeStyles.concat(r.scopeStyles)),r},findStyles:function(e){if(!e)return[];var t=e.querySelectorAll("style");return Array.prototype.filter.call(t,function(e){return!e.hasAttribute(R)})},applyScopeToContent:function(e,t){e&&(Array.prototype.forEach.call(e.querySelectorAll("*"),function(e){e.setAttribute(t,"")}),Array.prototype.forEach.call(e.querySelectorAll("template"),function(e){this.applyScopeToContent(e.content,t)},this))},insertDirectives:function(e){return e=this.insertPolyfillDirectivesInCssText(e),this.insertPolyfillRulesInCssText(e)},insertPolyfillDirectivesInCssText:function(e){return e=e.replace(p,function(e,t){return t.slice(0,-2)+"{"}),e.replace(h,function(e,t){return t+" {"})},insertPolyfillRulesInCssText:function(e){return e=e.replace(f,function(e,t){return t.slice(0,-1)}),e.replace(m,function(e,t,n,r){var o=e.replace(t,"").replace(n,"");return r+o})},scopeCssText:function(e,t){var n=this.extractUnscopedRulesFromCssText(e);if(e=this.insertPolyfillHostInCssText(e),e=this.convertColonHost(e),e=this.convertColonHostContext(e),e=this.convertShadowDOMSelectors(e),t){var e,r=this;a(e,function(n){e=r.scopeRules(n,t)})}return e=e+"\n"+n,e.trim()},extractUnscopedRulesFromCssText:function(e){for(var t,n="";t=w.exec(e);)n+=t[1].slice(0,-1)+"\n\n";for(;t=v.exec(e);)n+=t[0].replace(t[2],"").replace(t[1],t[3])+"\n\n";return n},convertColonHost:function(e){return this.convertColonRule(e,E,this.colonHostPartReplacer)},convertColonHostContext:function(e){return this.convertColonRule(e,_,this.colonHostContextPartReplacer)},convertColonRule:function(e,t,n){return e.replace(t,function(e,t,r,o){if(t=O,r){for(var i,a=r.split(","),s=[],c=0,l=a.length;l>c&&(i=a[c]);c++)i=i.trim(),s.push(n(t,i,o));return s.join(",")}return t+o})},colonHostContextPartReplacer:function(e,t,n){return t.match(g)?this.colonHostPartReplacer(e,t,n):e+t+n+", "+t+" "+e+n},colonHostPartReplacer:function(e,t,n){return e+t.replace(g,"")+n},convertShadowDOMSelectors:function(e){for(var t=0;t<N.length;t++)e=e.replace(N[t]," ");return e},scopeRules:function(e,t){var n="";return e&&Array.prototype.forEach.call(e,function(e){if(e.selectorText&&e.style&&void 0!==e.style.cssText)n+=this.scopeSelector(e.selectorText,t,this.strictStyling)+" {\n	",n+=this.propertiesFromRule(e)+"\n}\n\n";else if(e.type===CSSRule.MEDIA_RULE)n+="@media "+e.media.mediaText+" {\n",n+=this.scopeRules(e.cssRules,t),n+="\n}\n\n";else try{e.cssText&&(n+=e.cssText+"\n\n")}catch(r){e.type===CSSRule.KEYFRAMES_RULE&&e.cssRules&&(n+=this.ieSafeCssTextFromKeyFrameRule(e))}},this),n},ieSafeCssTextFromKeyFrameRule:function(e){var t="@keyframes "+e.name+" {";return Array.prototype.forEach.call(e.cssRules,function(e){t+=" "+e.keyText+" {"+e.style.cssText+"}"}),t+=" }"},scopeSelector:function(e,t,n){var r=[],o=e.split(",");return o.forEach(function(e){e=e.trim(),this.selectorNeedsScoping(e,t)&&(e=n&&!e.match(O)?this.applyStrictSelectorScope(e,t):this.applySelectorScope(e,t)),r.push(e)},this),r.join(", ")},selectorNeedsScoping:function(e,t){if(Array.isArray(t))return!0;var n=this.makeScopeMatcher(t);return!e.match(n)},makeScopeMatcher:function(e){return e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")"+S,"m")},applySelectorScope:function(e,t){return Array.isArray(t)?this.applySelectorScopeList(e,t):this.applySimpleSelectorScope(e,t)},applySelectorScopeList:function(e,t){for(var n,r=[],o=0;n=t[o];o++)r.push(this.applySimpleSelectorScope(e,n));return r.join(", ")},applySimpleSelectorScope:function(e,t){return e.match(L)?(e=e.replace(O,t),e.replace(L,t+" ")):t+" "+e},applyStrictSelectorScope:function(e,t){t=t.replace(/\[is=([^\]]*)\]/g,"$1");var n=[" ",">","+","~"],r=e,o="["+t+"]";return n.forEach(function(e){var t=r.split(e);r=t.map(function(e){var t=e.trim().replace(L,"");return t&&n.indexOf(t)<0&&t.indexOf(o)<0&&(e=t.replace(/([^:]*)(:*)(.*)/,"$1"+o+"$2$3")),e}).join(e)}),r},insertPolyfillHostInCssText:function(e){return e.replace(M,b).replace(T,g)},propertiesFromRule:function(e){var t=e.style.cssText;e.style.content&&!e.style.content.match(/['"]+|attr/)&&(t=t.replace(/content:[^;]*;/g,"content: '"+e.style.content+"';"));var n=e.style;for(var r in n)"initial"===n[r]&&(t+=r+": initial; ");return t},replaceTextInStyles:function(e,t){e&&t&&(e instanceof Array||(e=[e]),Array.prototype.forEach.call(e,function(e){e.textContent=t.call(this,e.textContent)},this))},addCssToDocument:function(e,t){e.match("@import")?c(e,t):s(e)}},d=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,p=/\/\*\s*@polyfill ([^*]*\*+([^\/*][^*]*\*+)*\/)([^{]*?){/gim,h=/polyfill-next-selector[^}]*content\:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim,f=/\/\*\s@polyfill-rule([^*]*\*+([^\/*][^*]*\*+)*)\//gim,m=/(polyfill-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,w=/\/\*\s@polyfill-unscoped-rule([^*]*\*+([^\/*][^*]*\*+)*)\//gim,v=/(polyfill-unscoped-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,g="-shadowcsshost",b="-shadowcsscontext",y=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",E=new RegExp("("+g+y,"gim"),_=new RegExp("("+b+y,"gim"),S="([>\\s~+[.,{:][\\s\\S]*)?$",T=/\:host/gim,M=/\:host-context/gim,O=g+"-no-combinator",L=new RegExp(g,"gim"),N=(new RegExp(b,"gim"),[/>>>/g,/::shadow/g,/::content/g,/\/deep\//g,/\/shadow\//g,/\/shadow-deep\//g,/\^\^/g,/\^/g]),C=document.createElement("iframe");C.style.display="none";var j,D=navigator.userAgent.match("Chrome"),H="shim-shadowdom",x="shim-shadowdom-css",R="no-shim";if(window.ShadowDOMPolyfill){s("style { display: none !important; }\n");var I=ShadowDOMPolyfill.wrap(document),P=I.querySelector("head");P.insertBefore(l(),P.childNodes[0]),document.addEventListener("DOMContentLoaded",function(){e.urlResolver;if(window.HTMLImports&&!HTMLImports.useNative){var t="link[rel=stylesheet]["+H+"]",n="style["+H+"]";HTMLImports.importer.documentPreloadSelectors+=","+t,HTMLImports.importer.importsPreloadSelectors+=","+t,HTMLImports.parser.documentSelectors=[HTMLImports.parser.documentSelectors,t,n].join(",");var r=HTMLImports.parser.parseGeneric;HTMLImports.parser.parseGeneric=function(e){if(!e[x]){var t=e.__importElement||e;if(!t.hasAttribute(H))return void r.call(this,e);e.__resource&&(t=e.ownerDocument.createElement("style"),t.textContent=e.__resource),HTMLImports.path.resolveUrlsInStyle(t,e.href),t.textContent=u.shimStyle(t),t.removeAttribute(H,""),t.setAttribute(x,""),t[x]=!0,t.parentNode!==P&&(e.parentNode===P?P.replaceChild(t,e):this.addElementToDocument(t)),t.__importParsed=!0,this.markParsingComplete(e),this.parseNext()}};var o=HTMLImports.parser.hasResource;HTMLImports.parser.hasResource=function(e){return"link"===e.localName&&"stylesheet"===e.rel&&e.hasAttribute(H)?e.__resource:o.call(this,e)}}})}e.ShadowCSS=u}(window.WebComponents)),function(e){window.ShadowDOMPolyfill?(window.wrap=ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}}(window.WebComponents),function(e){"use strict";function t(e){return void 0!==p[e]}function n(){s.call(this),this._isInvalid=!0}function r(e){return""==e&&n.call(this),e.toLowerCase()}function o(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function i(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function a(e,a,s){function c(e){b.push(e)}var l=a||"scheme start",u=0,d="",v=!1,g=!1,b=[];e:for(;(e[u-1]!=f||0==u)&&!this._isInvalid;){var y=e[u];switch(l){case"scheme start":if(!y||!m.test(y)){if(a){c("Invalid scheme.");break e}d="",l="no scheme";continue}d+=y.toLowerCase(),l="scheme";break;case"scheme":if(y&&w.test(y))d+=y.toLowerCase();else{if(":"!=y){if(a){if(f==y)break e;c("Code point not allowed in scheme: "+y);break e}d="",u=0,l="no scheme";continue}if(this._scheme=d,d="",a)break e;t(this._scheme)&&(this._isRelative=!0),l="file"==this._scheme?"relative":this._isRelative&&s&&s._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==y?(this._query="?",l="query"):"#"==y?(this._fragment="#",l="fragment"):f!=y&&"	"!=y&&"\n"!=y&&"\r"!=y&&(this._schemeData+=o(y));break;case"no scheme":if(s&&t(s._scheme)){l="relative";continue}c("Missing scheme."),n.call(this);break;case"relative or authority":if("/"!=y||"/"!=e[u+1]){c("Expected /, got: "+y),l="relative";continue}l="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=s._scheme),f==y){this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._username=s._username,this._password=s._password;break e}if("/"==y||"\\"==y)"\\"==y&&c("\\ is an invalid code point."),l="relative slash";else if("?"==y)this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query="?",this._username=s._username,this._password=s._password,l="query";else{if("#"!=y){var E=e[u+1],_=e[u+2];("file"!=this._scheme||!m.test(y)||":"!=E&&"|"!=E||f!=_&&"/"!=_&&"\\"!=_&&"?"!=_&&"#"!=_)&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password,this._path=s._path.slice(),this._path.pop()),l="relative path";continue}this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._fragment="#",this._username=s._username,this._password=s._password,l="fragment"}break;case"relative slash":if("/"!=y&&"\\"!=y){"file"!=this._scheme&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password),l="relative path";continue}"\\"==y&&c("\\ is an invalid code point."),l="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=y){c("Expected '/', got: "+y),l="authority ignore slashes";continue}l="authority second slash";break;case"authority second slash":if(l="authority ignore slashes","/"!=y){c("Expected '/', got: "+y);continue}break;case"authority ignore slashes":if("/"!=y&&"\\"!=y){l="authority";continue}c("Expected authority, got: "+y);break;case"authority":if("@"==y){v&&(c("@ already seen."),d+="%40"),v=!0;for(var S=0;S<d.length;S++){var T=d[S];if("	"!=T&&"\n"!=T&&"\r"!=T)if(":"!=T||null!==this._password){var M=o(T);null!==this._password?this._password+=M:this._username+=M}else this._password="";else c("Invalid whitespace in authority.")}d=""}else{if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){u-=d.length,d="",l="host";continue}d+=y}break;case"file host":if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){2!=d.length||!m.test(d[0])||":"!=d[1]&&"|"!=d[1]?0==d.length?l="relative path start":(this._host=r.call(this,d),d="",l="relative path start"):l="relative path";continue}"	"==y||"\n"==y||"\r"==y?c("Invalid whitespace in file host."):d+=y;break;case"host":case"hostname":if(":"!=y||g){if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){if(this._host=r.call(this,d),d="",l="relative path start",a)break e;continue}"	"!=y&&"\n"!=y&&"\r"!=y?("["==y?g=!0:"]"==y&&(g=!1),d+=y):c("Invalid code point in host/hostname: "+y)}else if(this._host=r.call(this,d),d="",l="port","hostname"==a)break e;break;case"port":if(/[0-9]/.test(y))d+=y;else{if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y||a){if(""!=d){var O=parseInt(d,10);O!=p[this._scheme]&&(this._port=O+""),d=""}if(a)break e;l="relative path start";continue}"	"==y||"\n"==y||"\r"==y?c("Invalid code point in port: "+y):n.call(this)}break;case"relative path start":if("\\"==y&&c("'\\' not allowed in path."),l="relative path","/"!=y&&"\\"!=y)continue;break;case"relative path":if(f!=y&&"/"!=y&&"\\"!=y&&(a||"?"!=y&&"#"!=y))"	"!=y&&"\n"!=y&&"\r"!=y&&(d+=o(y));else{"\\"==y&&c("\\ not allowed in relative path.");var L;(L=h[d.toLowerCase()])&&(d=L),".."==d?(this._path.pop(),"/"!=y&&"\\"!=y&&this._path.push("")):"."==d&&"/"!=y&&"\\"!=y?this._path.push(""):"."!=d&&("file"==this._scheme&&0==this._path.length&&2==d.length&&m.test(d[0])&&"|"==d[1]&&(d=d[0]+":"),this._path.push(d)),d="","?"==y?(this._query="?",l="query"):"#"==y&&(this._fragment="#",l="fragment")}break;case"query":a||"#"!=y?f!=y&&"	"!=y&&"\n"!=y&&"\r"!=y&&(this._query+=i(y)):(this._fragment="#",l="fragment");break;case"fragment":f!=y&&"	"!=y&&"\n"!=y&&"\r"!=y&&(this._fragment+=y)}u++}}function s(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(e,t){void 0===t||t instanceof c||(t=new c(String(t))),this._url=e,s.call(this);var n=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");a.call(this,n,null,t)}var l=!1;if(!e.forceJURL)try{var u=new URL("b","http://a");u.pathname="c%20d",l="http://a/c%20d"===u.href}catch(d){}if(!l){var p=Object.create(null);p.ftp=21,p.file=0,p.gopher=70,p.http=80,p.https=443,p.ws=80,p.wss=443;var h=Object.create(null);h["%2e"]=".",h[".%2e"]="..",h["%2e."]="..",h["%2e%2e"]="..";var f=void 0,m=/[a-zA-Z]/,w=/[a-zA-Z0-9\+\-\.]/;c.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url;var e="";return(""!=this._username||null!=this._password)&&(e=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){s.call(this),a.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||a.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],a.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"==e[0]&&(e=e.slice(1)),a.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"==e[0]&&(e=e.slice(1)),a.call(this,e,"fragment"))},get origin(){var e;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return e=this.host,e?this._scheme+"://"+e:""}};var v=e.URL;v&&(c.createObjectURL=function(e){return v.createObjectURL.apply(v,arguments)},c.revokeObjectURL=function(e){v.revokeObjectURL(e)}),e.URL=c}}(this),function(e){function t(e){y.push(e),b||(b=!0,m(r))}function n(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function r(){b=!1;var e=y;y=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var n=e.takeRecords();o(e),n.length&&(e.callback_(n,e),t=!0)}),t&&r()}function o(e){e.nodes_.forEach(function(t){var n=w.get(t);n&&n.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function i(e,t){for(var n=e;n;n=n.parentNode){var r=w.get(n);if(r)for(var o=0;o<r.length;o++){var i=r[o],a=i.options;if(n===e||a.subtree){var s=t(a);s&&i.enqueue(s)}}}}function a(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++E}function s(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function c(e){var t=new s(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function l(e,t){return _=new s(e,t)}function u(e){return S?S:(S=c(_),S.oldValue=e,S)}function d(){_=S=void 0}function p(e){return e===S||e===_}function h(e,t){return e===t?e:S&&p(e)?S:null}function f(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var m,w=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))m=setTimeout;else if(window.setImmediate)m=window.setImmediate;else{var v=[],g=String(Math.random());window.addEventListener("message",function(e){if(e.data===g){var t=v;v=[],t.forEach(function(e){e()})}}),m=function(e){v.push(e),window.postMessage(g,"*")}}var b=!1,y=[],E=0;a.prototype={observe:function(e,t){if(e=n(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var r=w.get(e);r||w.set(e,r=[]);for(var o,i=0;i<r.length;i++)if(r[i].observer===this){o=r[i],o.removeListeners(),o.options=t;break}o||(o=new f(this,e,t),r.push(o),this.nodes_.push(e)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=w.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){r.removeListeners(),t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var _,S;f.prototype={enqueue:function(e){var n=this.observer.records_,r=n.length;if(n.length>0){var o=n[r-1],i=h(o,e);if(i)return void(n[r-1]=i)}else t(this.observer);n[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=w.get(e);t||w.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=w.get(e),n=0;n<t.length;n++)if(t[n]===this){t.splice(n,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,n=e.relatedNode.namespaceURI,r=e.target,o=new l("attributes",r);o.attributeName=t,o.attributeNamespace=n;var a=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;i(r,function(e){return!e.attributes||e.attributeFilter&&e.attributeFilter.length&&-1===e.attributeFilter.indexOf(t)&&-1===e.attributeFilter.indexOf(n)?void 0:e.attributeOldValue?u(a):o});break;case"DOMCharacterDataModified":var r=e.target,o=l("characterData",r),a=e.prevValue;i(r,function(e){return e.characterData?e.characterDataOldValue?u(a):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s,c,p=e.target;"DOMNodeInserted"===e.type?(s=[p],c=[]):(s=[],c=[p]);var h=p.previousSibling,f=p.nextSibling,o=l("childList",e.target.parentNode);o.addedNodes=s,o.removedNodes=c,o.previousSibling=h,o.nextSibling=f,i(e.relatedNode,function(e){return e.childList?o:void 0})}d()}},e.JsMutationObserver=a,e.MutationObserver||(e.MutationObserver=a)}(this),window.HTMLImports=window.HTMLImports||{flags:{}},function(e){function t(e,t){t=t||f,r(function(){i(e,t)},t)}function n(e){return"complete"===e.readyState||e.readyState===v}function r(e,t){if(n(t))e&&e();else{var o=function(){("complete"===t.readyState||t.readyState===v)&&(t.removeEventListener(g,o),r(e,t))};t.addEventListener(g,o)}}function o(e){e.target.__loaded=!0}function i(e,t){function n(){c==l&&e&&e({allImports:s,loadedImports:u,errorImports:d})}function r(e){o(e),u.push(this),c++,n()}function i(e){d.push(this),c++,n()}var s=t.querySelectorAll("link[rel=import]"),c=0,l=s.length,u=[],d=[];if(l)for(var p,h=0;l>h&&(p=s[h]);h++)a(p)?(c++,n()):(p.addEventListener("load",r),p.addEventListener("error",i));else n()}function a(e){return d?e.__loaded||e["import"]&&"loading"!==e["import"].readyState:e.__importParsed}function s(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)c(t)&&l(t)}function c(e){return"link"===e.localName&&"import"===e.rel}function l(e){var t=e["import"];t?o({target:e}):(e.addEventListener("load",o),e.addEventListener("error",o))}var u="import",d=Boolean(u in document.createElement("link")),p=Boolean(window.ShadowDOMPolyfill),h=function(e){return p?window.ShadowDOMPolyfill.wrapIfNeeded(e):e},f=h(document),m={get:function(){var e=window.HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return h(e)},configurable:!0};Object.defineProperty(document,"_currentScript",m),Object.defineProperty(f,"_currentScript",m);var w=/Trident/.test(navigator.userAgent),v=w?"complete":"interactive",g="readystatechange";d&&(new MutationObserver(function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.addedNodes&&s(t.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var e,t=document.querySelectorAll("link[rel=import]"),n=0,r=t.length;r>n&&(e=t[n]);n++)l(e)}()),t(function(e){window.HTMLImports.ready=!0,window.HTMLImports.readyTime=(new Date).getTime();var t=f.createEvent("CustomEvent");t.initCustomEvent("HTMLImportsLoaded",!0,!0,e),f.dispatchEvent(t)}),e.IMPORT_LINK_TYPE=u,e.useNative=d,e.rootDocument=f,e.whenReady=t,e.isIE=w}(window.HTMLImports),function(e){var t=[],n=function(e){t.push(e)},r=function(){t.forEach(function(t){t(e)})};e.addModule=n,e.initializeModules=r}(window.HTMLImports),window.HTMLImports.addModule(function(e){var t=/(url\()([^)]*)(\))/g,n=/(@import[\s]+(?!url\())([^;]*)(;)/g,r={resolveUrlsInStyle:function(e,t){var n=e.ownerDocument,r=n.createElement("a");return e.textContent=this.resolveUrlsInCssText(e.textContent,t,r),e},resolveUrlsInCssText:function(e,r,o){var i=this.replaceUrls(e,o,r,t);return i=this.replaceUrls(i,o,r,n)},replaceUrls:function(e,t,n,r){return e.replace(r,function(e,r,o,i){var a=o.replace(/["']/g,"");return n&&(a=new URL(a,n).href),t.href=a,a=t.href,r+"'"+a+"'"+i})}};e.path=r}),window.HTMLImports.addModule(function(e){var t={async:!0,ok:function(e){return e.status>=200&&e.status<300||304===e.status||0===e.status},load:function(n,r,o){var i=new XMLHttpRequest;return(e.flags.debug||e.flags.bust)&&(n+="?"+Math.random()),i.open("GET",n,t.async),i.addEventListener("readystatechange",function(e){
if(4===i.readyState){var n=i.getResponseHeader("Location"),a=null;if(n)var a="/"===n.substr(0,1)?location.origin+n:n;r.call(o,!t.ok(i)&&i,i.response||i.responseText,a)}}),i.send(),i},loadDocument:function(e,t,n){this.load(e,t,n).responseType="document"}};e.xhr=t}),window.HTMLImports.addModule(function(e){var t=e.xhr,n=e.flags,r=function(e,t){this.cache={},this.onload=e,this.oncomplete=t,this.inflight=0,this.pending={}};r.prototype={addNodes:function(e){this.inflight+=e.length;for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)this.require(t);this.checkDone()},addNode:function(e){this.inflight++,this.require(e),this.checkDone()},require:function(e){var t=e.src||e.href;e.__nodeUrl=t,this.dedupe(t,e)||this.fetch(t,e)},dedupe:function(e,t){if(this.pending[e])return this.pending[e].push(t),!0;return this.cache[e]?(this.onload(e,t,this.cache[e]),this.tail(),!0):(this.pending[e]=[t],!1)},fetch:function(e,r){if(n.load&&console.log("fetch",e,r),e)if(e.match(/^data:/)){var o=e.split(","),i=o[0],a=o[1];a=i.indexOf(";base64")>-1?atob(a):decodeURIComponent(a),setTimeout(function(){this.receive(e,r,null,a)}.bind(this),0)}else{var s=function(t,n,o){this.receive(e,r,t,n,o)}.bind(this);t.load(e,s)}else setTimeout(function(){this.receive(e,r,{error:"href must be specified"},null)}.bind(this),0)},receive:function(e,t,n,r,o){this.cache[e]=r;for(var i,a=this.pending[e],s=0,c=a.length;c>s&&(i=a[s]);s++)this.onload(e,i,r,n,o),this.tail();this.pending[e]=null},tail:function(){--this.inflight,this.checkDone()},checkDone:function(){this.inflight||this.oncomplete()}},e.Loader=r}),window.HTMLImports.addModule(function(e){var t=function(e){this.addCallback=e,this.mo=new MutationObserver(this.handler.bind(this))};t.prototype={handler:function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)"childList"===t.type&&t.addedNodes.length&&this.addedNodes(t.addedNodes)},addedNodes:function(e){this.addCallback&&this.addCallback(e);for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.children&&t.children.length&&this.addedNodes(t.children)},observe:function(e){this.mo.observe(e,{childList:!0,subtree:!0})}},e.Observer=t}),window.HTMLImports.addModule(function(e){function t(e){return"link"===e.localName&&e.rel===u}function n(e){var t=r(e);return"data:text/javascript;charset=utf-8,"+encodeURIComponent(t)}function r(e){return e.textContent+o(e)}function o(e){var t=e.ownerDocument;t.__importedScripts=t.__importedScripts||0;var n=e.ownerDocument.baseURI,r=t.__importedScripts?"-"+t.__importedScripts:"";return t.__importedScripts++,"\n//# sourceURL="+n+r+".js\n"}function i(e){var t=e.ownerDocument.createElement("style");return t.textContent=e.textContent,a.resolveUrlsInStyle(t),t}var a=e.path,s=e.rootDocument,c=e.flags,l=e.isIE,u=e.IMPORT_LINK_TYPE,d="link[rel="+u+"]",p={documentSelectors:d,importsSelectors:[d,"link[rel=stylesheet]","style","script:not([type])",'script[type="application/javascript"]','script[type="text/javascript"]'].join(","),map:{link:"parseLink",script:"parseScript",style:"parseStyle"},dynamicElements:[],parseNext:function(){var e=this.nextToParse();e&&this.parse(e)},parse:function(e){if(this.isParsed(e))return void(c.parse&&console.log("[%s] is already parsed",e.localName));var t=this[this.map[e.localName]];t&&(this.markParsing(e),t.call(this,e))},parseDynamic:function(e,t){this.dynamicElements.push(e),t||this.parseNext()},markParsing:function(e){c.parse&&console.log("parsing",e),this.parsingElement=e},markParsingComplete:function(e){e.__importParsed=!0,this.markDynamicParsingComplete(e),e.__importElement&&(e.__importElement.__importParsed=!0,this.markDynamicParsingComplete(e.__importElement)),this.parsingElement=null,c.parse&&console.log("completed",e)},markDynamicParsingComplete:function(e){var t=this.dynamicElements.indexOf(e);t>=0&&this.dynamicElements.splice(t,1)},parseImport:function(e){if(window.HTMLImports.__importsParsingHook&&window.HTMLImports.__importsParsingHook(e),e["import"]&&(e["import"].__importParsed=!0),this.markParsingComplete(e),e.dispatchEvent(e.__resource&&!e.__error?new CustomEvent("load",{bubbles:!1}):new CustomEvent("error",{bubbles:!1})),e.__pending)for(var t;e.__pending.length;)t=e.__pending.shift(),t&&t({target:e});this.parseNext()},parseLink:function(e){t(e)?this.parseImport(e):(e.href=e.href,this.parseGeneric(e))},parseStyle:function(e){var t=e;e=i(e),t.__appliedElement=e,e.__importElement=t,this.parseGeneric(e)},parseGeneric:function(e){this.trackElement(e),this.addElementToDocument(e)},rootImportForElement:function(e){for(var t=e;t.ownerDocument.__importLink;)t=t.ownerDocument.__importLink;return t},addElementToDocument:function(e){var t=this.rootImportForElement(e.__importElement||e);t.parentNode.insertBefore(e,t)},trackElement:function(e,t){var n=this,r=function(r){t&&t(r),n.markParsingComplete(e),n.parseNext()};if(e.addEventListener("load",r),e.addEventListener("error",r),l&&"style"===e.localName){var o=!1;if(-1==e.textContent.indexOf("@import"))o=!0;else if(e.sheet){o=!0;for(var i,a=e.sheet.cssRules,s=a?a.length:0,c=0;s>c&&(i=a[c]);c++)i.type===CSSRule.IMPORT_RULE&&(o=o&&Boolean(i.styleSheet))}o&&setTimeout(function(){e.dispatchEvent(new CustomEvent("load",{bubbles:!1}))})}},parseScript:function(t){var r=document.createElement("script");r.__importElement=t,r.src=t.src?t.src:n(t),e.currentScript=t,this.trackElement(r,function(t){r.parentNode&&r.parentNode.removeChild(r),e.currentScript=null}),this.addElementToDocument(r)},nextToParse:function(){return this._mayParse=[],!this.parsingElement&&(this.nextToParseInDoc(s)||this.nextToParseDynamic())},nextToParseInDoc:function(e,n){if(e&&this._mayParse.indexOf(e)<0){this._mayParse.push(e);for(var r,o=e.querySelectorAll(this.parseSelectorsForNode(e)),i=0,a=o.length;a>i&&(r=o[i]);i++)if(!this.isParsed(r))return this.hasResource(r)?t(r)?this.nextToParseInDoc(r["import"],r):r:void 0}return n},nextToParseDynamic:function(){return this.dynamicElements[0]},parseSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===s?this.documentSelectors:this.importsSelectors},isParsed:function(e){return e.__importParsed},needsDynamicParsing:function(e){return this.dynamicElements.indexOf(e)>=0},hasResource:function(e){return t(e)&&void 0===e["import"]?!1:!0}};e.parser=p,e.IMPORT_SELECTOR=d}),window.HTMLImports.addModule(function(e){function t(e){return n(e,a)}function n(e,t){return"link"===e.localName&&e.getAttribute("rel")===t}function r(e){return!!Object.getOwnPropertyDescriptor(e,"baseURI")}function o(e,t){var n=document.implementation.createHTMLDocument(a);n._URL=t;var o=n.createElement("base");o.setAttribute("href",t),n.baseURI||r(n)||Object.defineProperty(n,"baseURI",{value:t});var i=n.createElement("meta");return i.setAttribute("charset","utf-8"),n.head.appendChild(i),n.head.appendChild(o),n.body.innerHTML=e,window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(n),n}var i=e.flags,a=e.IMPORT_LINK_TYPE,s=e.IMPORT_SELECTOR,c=e.rootDocument,l=e.Loader,u=e.Observer,d=e.parser,p={documents:{},documentPreloadSelectors:s,importsPreloadSelectors:[s].join(","),loadNode:function(e){h.addNode(e)},loadSubtree:function(e){var t=this.marshalNodes(e);h.addNodes(t)},marshalNodes:function(e){return e.querySelectorAll(this.loadSelectorsForNode(e))},loadSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===c?this.documentPreloadSelectors:this.importsPreloadSelectors},loaded:function(e,n,r,a,s){if(i.load&&console.log("loaded",e,n),n.__resource=r,n.__error=a,t(n)){var c=this.documents[e];void 0===c&&(c=a?null:o(r,s||e),c&&(c.__importLink=n,this.bootDocument(c)),this.documents[e]=c),n["import"]=c}d.parseNext()},bootDocument:function(e){this.loadSubtree(e),this.observer.observe(e),d.parseNext()},loadedAll:function(){d.parseNext()}},h=new l(p.loaded.bind(p),p.loadedAll.bind(p));if(p.observer=new u,!document.baseURI){var f={get:function(){var e=document.querySelector("base");return e?e.href:window.location.href},configurable:!0};Object.defineProperty(document,"baseURI",f),Object.defineProperty(c,"baseURI",f)}e.importer=p,e.importLoader=h}),window.HTMLImports.addModule(function(e){var t=e.parser,n=e.importer,r={added:function(e){for(var r,o,i,a,s=0,c=e.length;c>s&&(a=e[s]);s++)r||(r=a.ownerDocument,o=t.isParsed(r)),i=this.shouldLoadNode(a),i&&n.loadNode(a),this.shouldParseNode(a)&&o&&t.parseDynamic(a,i)},shouldLoadNode:function(e){return 1===e.nodeType&&o.call(e,n.loadSelectorsForNode(e))},shouldParseNode:function(e){return 1===e.nodeType&&o.call(e,t.parseSelectorsForNode(e))}};n.observer.addCallback=r.added.bind(r);var o=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector}),function(e){function t(){window.HTMLImports.importer.bootDocument(o)}var n=e.initializeModules,r=e.isIE;if(!e.useNative){r&&"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})},n},window.CustomEvent.prototype=window.Event.prototype),n();var o=e.rootDocument;"complete"===document.readyState||"interactive"===document.readyState&&!window.attachEvent?t():document.addEventListener("DOMContentLoaded",t)}}(window.HTMLImports),window.CustomElements=window.CustomElements||{flags:{}},function(e){var t=e.flags,n=[],r=function(e){n.push(e)},o=function(){n.forEach(function(t){t(e)})};e.addModule=r,e.initializeModules=o,e.hasNative=Boolean(document.registerElement),e.useNative=!t.register&&e.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative)}(window.CustomElements),window.CustomElements.addModule(function(e){function t(e,t){n(e,function(e){return t(e)?!0:void r(e,t)}),r(e,t)}function n(e,t,r){var o=e.firstElementChild;if(!o)for(o=e.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)t(o,r)!==!0&&n(o,t,r),o=o.nextElementSibling;return null}function r(e,n){for(var r=e.shadowRoot;r;)t(r,n),r=r.olderShadowRoot}function o(e,t){i(e,t,[])}function i(e,t,n){if(e=window.wrap(e),!(n.indexOf(e)>=0)){n.push(e);for(var r,o=e.querySelectorAll("link[rel="+a+"]"),s=0,c=o.length;c>s&&(r=o[s]);s++)r["import"]&&i(r["import"],t,n);t(e)}}var a=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";e.forDocumentTree=o,e.forSubtree=t}),window.CustomElements.addModule(function(e){function t(e,t){return n(e,t)||r(e,t)}function n(t,n){return e.upgrade(t,n)?!0:void(n&&a(t))}function r(e,t){b(e,function(e){return n(e,t)?!0:void 0})}function o(e){S.push(e),_||(_=!0,setTimeout(i))}function i(){_=!1;for(var e,t=S,n=0,r=t.length;r>n&&(e=t[n]);n++)e();S=[]}function a(e){E?o(function(){s(e)}):s(e)}function s(e){e.__upgraded__&&!e.__attached&&(e.__attached=!0,e.attachedCallback&&e.attachedCallback())}function c(e){l(e),b(e,function(e){l(e)})}function l(e){E?o(function(){u(e)}):u(e)}function u(e){e.__upgraded__&&e.__attached&&(e.__attached=!1,e.detachedCallback&&e.detachedCallback())}function d(e){for(var t=e,n=window.wrap(document);t;){if(t==n)return!0;t=t.parentNode||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host}}function p(e){if(e.shadowRoot&&!e.shadowRoot.__watched){g.dom&&console.log("watching shadow-root for: ",e.localName);for(var t=e.shadowRoot;t;)m(t),t=t.olderShadowRoot}}function h(e,n){if(g.dom){var r=n[0];if(r&&"childList"===r.type&&r.addedNodes&&r.addedNodes){for(var o=r.addedNodes[0];o&&o!==document&&!o.host;)o=o.parentNode;var i=o&&(o.URL||o._URL||o.host&&o.host.localName)||"";i=i.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",n.length,i||"")}var a=d(e);n.forEach(function(e){"childList"===e.type&&(T(e.addedNodes,function(e){e.localName&&t(e,a)}),T(e.removedNodes,function(e){e.localName&&c(e)}))}),g.dom&&console.groupEnd()}function f(e){for(e=window.wrap(e),e||(e=window.wrap(document));e.parentNode;)e=e.parentNode;var t=e.__observer;t&&(h(e,t.takeRecords()),i())}function m(e){if(!e.__observer){var t=new MutationObserver(h.bind(this,e));t.observe(e,{childList:!0,subtree:!0}),e.__observer=t}}function w(e){e=window.wrap(e),g.dom&&console.group("upgradeDocument: ",e.baseURI.split("/").pop());var n=e===window.wrap(document);t(e,n),m(e),g.dom&&console.groupEnd()}function v(e){y(e,w)}var g=e.flags,b=e.forSubtree,y=e.forDocumentTree,E=!window.MutationObserver||window.MutationObserver===window.JsMutationObserver;e.hasPolyfillMutations=E;var _=!1,S=[],T=Array.prototype.forEach.call.bind(Array.prototype.forEach),M=Element.prototype.createShadowRoot;M&&(Element.prototype.createShadowRoot=function(){var e=M.call(this);return window.CustomElements.watchShadow(this),e}),e.watchShadow=p,e.upgradeDocumentTree=v,e.upgradeSubtree=r,e.upgradeAll=t,e.attached=a,e.takeRecords=f}),window.CustomElements.addModule(function(e){function t(t,r){if(!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var o=t.getAttribute("is"),i=e.getRegisteredDefinition(o||t.localName);if(i){if(o&&i.tag==t.localName)return n(t,i,r);if(!o&&!i["extends"])return n(t,i,r)}}}function n(t,n,o){return a.upgrade&&console.group("upgrade:",t.localName),n.is&&t.setAttribute("is",n.is),r(t,n),t.__upgraded__=!0,i(t),o&&e.attached(t),e.upgradeSubtree(t,o),a.upgrade&&console.groupEnd(),t}function r(e,t){Object.__proto__?e.__proto__=t.prototype:(o(e,t.prototype,t["native"]),e.__proto__=t.prototype)}function o(e,t,n){for(var r={},o=t;o!==n&&o!==HTMLElement.prototype;){for(var i,a=Object.getOwnPropertyNames(o),s=0;i=a[s];s++)r[i]||(Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i)),r[i]=1);o=Object.getPrototypeOf(o)}}function i(e){e.createdCallback&&e.createdCallback()}var a=e.flags;e.upgrade=t,e.upgradeWithDefinition=n,e.implementPrototype=r}),window.CustomElements.addModule(function(e){function t(t,r){var c=r||{};if(!t)throw new Error("document.registerElement: first argument `name` must not be empty");if(t.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(t)+"'.");if(o(t))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(t)+"'. The type name is invalid.");if(l(t))throw new Error("DuplicateDefinitionError: a type with name '"+String(t)+"' is already registered");return c.prototype||(c.prototype=Object.create(HTMLElement.prototype)),c.__name=t.toLowerCase(),c.lifecycle=c.lifecycle||{},c.ancestry=i(c["extends"]),a(c),s(c),n(c.prototype),u(c.__name,c),c.ctor=d(c),c.ctor.prototype=c.prototype,c.prototype.constructor=c.ctor,e.ready&&v(document),c.ctor}function n(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,n){r.call(this,e,n,t)};var n=e.removeAttribute;e.removeAttribute=function(e){r.call(this,e,null,n)},e.setAttribute._polyfilled=!0}}function r(e,t,n){e=e.toLowerCase();var r=this.getAttribute(e);n.apply(this,arguments);var o=this.getAttribute(e);this.attributeChangedCallback&&o!==r&&this.attributeChangedCallback(e,r,o)}function o(e){for(var t=0;t<_.length;t++)if(e===_[t])return!0}function i(e){var t=l(e);return t?i(t["extends"]).concat([t]):[]}function a(e){for(var t,n=e["extends"],r=0;t=e.ancestry[r];r++)n=t.is&&t.tag;e.tag=n||e.__name,n&&(e.is=e.__name)}function s(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var n=document.createElement(e.tag);t=Object.getPrototypeOf(n)}for(var r,o=e.prototype,i=!1;o;)o==t&&(i=!0),r=Object.getPrototypeOf(o),r&&(o.__proto__=r),o=r;i||console.warn(e.tag+" prototype not found in prototype chain for "+e.is),e["native"]=t}}function c(e){return b(M(e.tag),e)}function l(e){return e?S[e.toLowerCase()]:void 0}function u(e,t){S[e]=t}function d(e){return function(){return c(e)}}function p(e,t,n){return e===T?h(t,n):O(e,t)}function h(e,t){e&&(e=e.toLowerCase()),t&&(t=t.toLowerCase());var n=l(t||e);if(n){if(e==n.tag&&t==n.is)return new n.ctor;if(!t&&!n.is)return new n.ctor}var r;return t?(r=h(e),r.setAttribute("is",t),r):(r=M(e),e.indexOf("-")>=0&&y(r,HTMLElement),r)}function f(e,t){var n=e[t];e[t]=function(){var e=n.apply(this,arguments);return g(e),e}}var m,w=e.isIE11OrOlder,v=e.upgradeDocumentTree,g=e.upgradeAll,b=e.upgradeWithDefinition,y=e.implementPrototype,E=e.useNative,_=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],S={},T="http://www.w3.org/1999/xhtml",M=document.createElement.bind(document),O=document.createElementNS.bind(document);m=Object.__proto__||E?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;for(var n=e;n;){if(n===t.prototype)return!0;n=n.__proto__}return!1},f(Node.prototype,"cloneNode"),f(document,"importNode"),w&&!function(){var e=document.importNode;document.importNode=function(){var t=e.apply(document,arguments);if(t.nodeType==t.DOCUMENT_FRAGMENT_NODE){var n=document.createDocumentFragment();return n.appendChild(t),n}return t}}(),document.registerElement=t,document.createElement=h,document.createElementNS=p,e.registry=S,e["instanceof"]=m,e.reservedTagList=_,e.getRegisteredDefinition=l,document.register=document.registerElement}),function(e){function t(){a(window.wrap(document)),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(e){a(window.wrap(e["import"]))}),window.CustomElements.ready=!0,setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})}var n=e.useNative,r=e.initializeModules,o=/Trident/.test(navigator.userAgent);if(n){var i=function(){};e.watchShadow=i,e.upgrade=i,e.upgradeAll=i,e.upgradeDocumentTree=i,e.upgradeSubtree=i,e.takeRecords=i,e["instanceof"]=function(e,t){return e instanceof t}}else r();var a=e.upgradeDocumentTree;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}),o&&"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})},n},window.CustomEvent.prototype=window.Event.prototype),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var s=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(s,t)}else t();e.isIE11OrOlder=o}(window.CustomElements),function(e){Function.prototype.bind||(Function.prototype.bind=function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(e,r)}})}(window.WebComponents),function(e){"use strict";function t(){window.Polymer===o&&(window.Polymer=function(){throw new Error('You tried to use polymer without loading it first. To load polymer, <link rel="import" href="components/polymer/polymer.html">')})}if(!window.performance){var n=Date.now();window.performance={now:function(){return Date.now()-n}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var e=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return e?function(t){return e(function(){t(performance.now())})}:function(e){return window.setTimeout(e,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}}());var r=[],o=function(e,t){"string"!=typeof e&&1===arguments.length&&Array.prototype.push.call(arguments,document._currentScript),r.push(arguments)};window.Polymer=o,e.consumeDeclarations=function(t){e.consumeDeclarations=function(){throw"Possible attempt to load Polymer twice"},t&&t(r),r=null},HTMLImports.useNative?t():window.addEventListener("DOMContentLoaded",t)}(window.WebComponents),function(e){var t=document.createElement("style");t.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var n=document.querySelector("head");n.insertBefore(t,n.firstChild)}(window.WebComponents),function(e){window.Platform=e}(window.WebComponents);
(function () {
function resolve() {
document.body.removeAttribute('unresolved');
}
if (window.WebComponents) {
addEventListener('WebComponentsReady', resolve);
} else {
if (document.readyState === 'interactive' || document.readyState === 'complete') {
resolve();
} else {
addEventListener('DOMContentLoaded', resolve);
}
}
}());
Polymer = {
Settings: function () {
var user = window.Polymer || {};
location.search.slice(1).split('&').forEach(function (o) {
o = o.split('=');
o[0] && (user[o[0]] = o[1] || true);
});
var wantShadow = user.dom === 'shadow';
var hasShadow = Boolean(Element.prototype.createShadowRoot);
var nativeShadow = hasShadow && !window.ShadowDOMPolyfill;
var useShadow = wantShadow && hasShadow;
var hasNativeImports = Boolean('import' in document.createElement('link'));
var useNativeImports = hasNativeImports;
var useNativeCustomElements = !window.CustomElements || window.CustomElements.useNative;
return {
wantShadow: wantShadow,
hasShadow: hasShadow,
nativeShadow: nativeShadow,
useShadow: useShadow,
useNativeShadow: useShadow && nativeShadow,
useNativeImports: useNativeImports,
useNativeCustomElements: useNativeCustomElements
};
}()
};
(function () {
var userPolymer = window.Polymer;
window.Polymer = function (prototype) {
var ctor = desugar(prototype);
prototype = ctor.prototype;
var options = { prototype: prototype };
if (prototype.extends) {
options.extends = prototype.extends;
}
Polymer.telemetry._registrate(prototype);
document.registerElement(prototype.is, options);
return ctor;
};
var desugar = function (prototype) {
var base = Polymer.Base;
if (prototype.extends) {
base = Polymer.Base._getExtendedPrototype(prototype.extends);
}
prototype = Polymer.Base.chainObject(prototype, base);
prototype.registerCallback();
return prototype.constructor;
};
window.Polymer = Polymer;
if (userPolymer) {
for (var i in userPolymer) {
Polymer[i] = userPolymer[i];
}
}
Polymer.Class = desugar;
}());
Polymer.telemetry = {
registrations: [],
_regLog: function (prototype) {
console.log('[' + prototype.is + ']: registered');
},
_registrate: function (prototype) {
this.registrations.push(prototype);
Polymer.log && this._regLog(prototype);
},
dumpRegistrations: function () {
this.registrations.forEach(this._regLog);
}
};
Object.defineProperty(window, 'currentImport', {
enumerable: true,
configurable: true,
get: function () {
return (document._currentScript || document.currentScript).ownerDocument;
}
});
Polymer.Base = {
__isPolymerInstance__: true,
_addFeature: function (feature) {
this.extend(this, feature);
},
registerCallback: function () {
this._registerFeatures();
this._doBehavior('registered');
},
createdCallback: function () {
Polymer.telemetry.instanceCount++;
this.root = this;
this._doBehavior('created');
this._initFeatures();
},
attachedCallback: function () {
this.isAttached = true;
this._doBehavior('attached');
},
detachedCallback: function () {
this.isAttached = false;
this._doBehavior('detached');
},
attributeChangedCallback: function (name) {
this._setAttributeToProperty(this, name);
this._doBehavior('attributeChanged', arguments);
},
extend: function (prototype, api) {
if (prototype && api) {
Object.getOwnPropertyNames(api).forEach(function (n) {
this.copyOwnProperty(n, api, prototype);
}, this);
}
return prototype || api;
},
mixin: function (target, source) {
for (var i in source) {
target[i] = source[i];
}
return target;
},
copyOwnProperty: function (name, source, target) {
var pd = Object.getOwnPropertyDescriptor(source, name);
if (pd) {
Object.defineProperty(target, name, pd);
}
},
_log: console.log.apply.bind(console.log, console),
_warn: console.warn.apply.bind(console.warn, console),
_error: console.error.apply.bind(console.error, console),
_logf: function () {
return this._logPrefix.concat([this.is]).concat(Array.prototype.slice.call(arguments, 0));
}
};
Polymer.Base._logPrefix = function () {
var color = window.chrome || /firefox/i.test(navigator.userAgent);
return color ? [
'%c[%s::%s]:',
'font-weight: bold; background-color:#EEEE00;'
] : ['[%s::%s]:'];
}();
Polymer.Base.chainObject = function (object, inherited) {
if (object && inherited && object !== inherited) {
if (!Object.__proto__) {
object = Polymer.Base.extend(Object.create(inherited), object);
}
object.__proto__ = inherited;
}
return object;
};
Polymer.Base = Polymer.Base.chainObject(Polymer.Base, HTMLElement.prototype);
if (window.CustomElements) {
Polymer.instanceof = CustomElements.instanceof;
} else {
Polymer.instanceof = function (obj, ctor) {
return obj instanceof ctor;
};
}
Polymer.isInstance = function (obj) {
return Boolean(obj && obj.__isPolymerInstance__);
};
Polymer.telemetry.instanceCount = 0;
(function () {
var modules = {};
var DomModule = function () {
return document.createElement('dom-module');
};
DomModule.prototype = Object.create(HTMLElement.prototype);
DomModule.prototype.constructor = DomModule;
DomModule.prototype.createdCallback = function () {
var id = this.id || this.getAttribute('name') || this.getAttribute('is');
if (id) {
this.id = id;
modules[id] = this;
}
};
DomModule.prototype.import = function (id, slctr) {
var m = modules[id];
if (!m) {
forceDocumentUpgrade();
m = modules[id];
}
if (m && slctr) {
m = m.querySelector(slctr);
}
return m;
};
var cePolyfill = window.CustomElements && !CustomElements.useNative;
if (cePolyfill) {
var ready = CustomElements.ready;
CustomElements.ready = true;
}
document.registerElement('dom-module', DomModule);
if (cePolyfill) {
CustomElements.ready = ready;
}
function forceDocumentUpgrade() {
if (cePolyfill) {
var script = document._currentScript || document.currentScript;
if (script) {
CustomElements.upgradeAll(script.ownerDocument);
}
}
}
}());
Polymer.Base._addFeature({
_prepIs: function () {
if (!this.is) {
var module = (document._currentScript || document.currentScript).parentNode;
if (module.localName === 'dom-module') {
var id = module.id || module.getAttribute('name') || module.getAttribute('is');
this.is = id;
}
}
}
});
Polymer.Base._addFeature({
behaviors: [],
_prepBehaviors: function () {
if (this.behaviors.length) {
this.behaviors = this._flattenBehaviorsList(this.behaviors);
}
this._prepAllBehaviors(this.behaviors);
},
_flattenBehaviorsList: function (behaviors) {
var flat = [];
behaviors.forEach(function (b) {
if (b instanceof Array) {
flat = flat.concat(this._flattenBehaviorsList(b));
} else if (b) {
flat.push(b);
} else {
this._warn(this._logf('_flattenBehaviorsList', 'behavior is null, check for missing or 404 import'));
}
}, this);
return flat;
},
_prepAllBehaviors: function (behaviors) {
for (var i = behaviors.length - 1; i >= 0; i--) {
this._mixinBehavior(behaviors[i]);
}
for (var i = 0, l = behaviors.length; i < l; i++) {
this._prepBehavior(behaviors[i]);
}
this._prepBehavior(this);
},
_mixinBehavior: function (b) {
Object.getOwnPropertyNames(b).forEach(function (n) {
switch (n) {
case 'hostAttributes':
case 'registered':
case 'properties':
case 'observers':
case 'listeners':
case 'created':
case 'attached':
case 'detached':
case 'attributeChanged':
case 'configure':
case 'ready':
break;
default:
if (!this.hasOwnProperty(n)) {
this.copyOwnProperty(n, b, this);
}
break;
}
}, this);
},
_doBehavior: function (name, args) {
this.behaviors.forEach(function (b) {
this._invokeBehavior(b, name, args);
}, this);
this._invokeBehavior(this, name, args);
},
_invokeBehavior: function (b, name, args) {
var fn = b[name];
if (fn) {
fn.apply(this, args || Polymer.nar);
}
},
_marshalBehaviors: function () {
this.behaviors.forEach(function (b) {
this._marshalBehavior(b);
}, this);
this._marshalBehavior(this);
}
});
Polymer.Base._addFeature({
_getExtendedPrototype: function (tag) {
return this._getExtendedNativePrototype(tag);
},
_nativePrototypes: {},
_getExtendedNativePrototype: function (tag) {
var p = this._nativePrototypes[tag];
if (!p) {
var np = this.getNativePrototype(tag);
p = this.extend(Object.create(np), Polymer.Base);
this._nativePrototypes[tag] = p;
}
return p;
},
getNativePrototype: function (tag) {
return Object.getPrototypeOf(document.createElement(tag));
}
});
Polymer.Base._addFeature({
_prepConstructor: function () {
this._factoryArgs = this.extends ? [
this.extends,
this.is
] : [this.is];
var ctor = function () {
return this._factory(arguments);
};
if (this.hasOwnProperty('extends')) {
ctor.extends = this.extends;
}
Object.defineProperty(this, 'constructor', {
value: ctor,
writable: true,
configurable: true
});
ctor.prototype = this;
},
_factory: function (args) {
var elt = document.createElement.apply(document, this._factoryArgs);
if (this.factoryImpl) {
this.factoryImpl.apply(elt, args);
}
return elt;
}
});
Polymer.nob = Object.create(null);
Polymer.Base._addFeature({
properties: {},
getPropertyInfo: function (property) {
var info = this._getPropertyInfo(property, this.properties);
if (!info) {
this.behaviors.some(function (b) {
return info = this._getPropertyInfo(property, b.properties);
}, this);
}
return info || Polymer.nob;
},
_getPropertyInfo: function (property, properties) {
var p = properties && properties[property];
if (typeof p === 'function') {
p = properties[property] = { type: p };
}
if (p) {
p.defined = true;
}
return p;
}
});
Polymer.CaseMap = {
_caseMap: {},
dashToCamelCase: function (dash) {
var mapped = Polymer.CaseMap._caseMap[dash];
if (mapped) {
return mapped;
}
if (dash.indexOf('-') < 0) {
return Polymer.CaseMap._caseMap[dash] = dash;
}
return Polymer.CaseMap._caseMap[dash] = dash.replace(/-([a-z])/g, function (m) {
return m[1].toUpperCase();
});
},
camelToDashCase: function (camel) {
var mapped = Polymer.CaseMap._caseMap[camel];
if (mapped) {
return mapped;
}
return Polymer.CaseMap._caseMap[camel] = camel.replace(/([a-z][A-Z])/g, function (g) {
return g[0] + '-' + g[1].toLowerCase();
});
}
};
Polymer.Base._addFeature({
_prepAttributes: function () {
this._aggregatedAttributes = {};
},
_addHostAttributes: function (attributes) {
if (attributes) {
this.mixin(this._aggregatedAttributes, attributes);
}
},
_marshalHostAttributes: function () {
this._applyAttributes(this, this._aggregatedAttributes);
},
_applyAttributes: function (node, attr$) {
for (var n in attr$) {
if (!this.hasAttribute(n) && n !== 'class') {
this.serializeValueToAttribute(attr$[n], n, this);
}
}
},
_marshalAttributes: function () {
this._takeAttributesToModel(this);
},
_takeAttributesToModel: function (model) {
for (var i = 0, l = this.attributes.length; i < l; i++) {
this._setAttributeToProperty(model, this.attributes[i].name);
}
},
_setAttributeToProperty: function (model, attrName) {
if (!this._serializing) {
var propName = Polymer.CaseMap.dashToCamelCase(attrName);
var info = this.getPropertyInfo(propName);
if (info.defined || this._propertyEffects && this._propertyEffects[propName]) {
var val = this.getAttribute(attrName);
model[propName] = this.deserialize(val, info.type);
}
}
},
_serializing: false,
reflectPropertyToAttribute: function (name) {
this._serializing = true;
this.serializeValueToAttribute(this[name], Polymer.CaseMap.camelToDashCase(name));
this._serializing = false;
},
serializeValueToAttribute: function (value, attribute, node) {
var str = this.serialize(value);
(node || this)[str === undefined ? 'removeAttribute' : 'setAttribute'](attribute, str);
},
deserialize: function (value, type) {
switch (type) {
case Number:
value = Number(value);
break;
case Boolean:
value = value !== null;
break;
case Object:
try {
value = JSON.parse(value);
} catch (x) {
}
break;
case Array:
try {
value = JSON.parse(value);
} catch (x) {
value = null;
console.warn('Polymer::Attributes: couldn`t decode Array as JSON');
}
break;
case Date:
value = new Date(value);
break;
case String:
default:
break;
}
return value;
},
serialize: function (value) {
switch (typeof value) {
case 'boolean':
return value ? '' : undefined;
case 'object':
if (value instanceof Date) {
return value;
} else if (value) {
try {
return JSON.stringify(value);
} catch (x) {
return '';
}
}
default:
return value != null ? value : undefined;
}
}
});
Polymer.Base._addFeature({
_setupDebouncers: function () {
this._debouncers = {};
},
debounce: function (jobName, callback, wait) {
this._debouncers[jobName] = Polymer.Debounce.call(this, this._debouncers[jobName], callback, wait);
},
isDebouncerActive: function (jobName) {
var debouncer = this._debouncers[jobName];
return debouncer && debouncer.finish;
},
flushDebouncer: function (jobName) {
var debouncer = this._debouncers[jobName];
if (debouncer) {
debouncer.complete();
}
},
cancelDebouncer: function (jobName) {
var debouncer = this._debouncers[jobName];
if (debouncer) {
debouncer.stop();
}
}
});
Polymer.version = '1.0.7';
Polymer.Base._addFeature({
_registerFeatures: function () {
this._prepIs();
this._prepAttributes();
this._prepBehaviors();
this._prepConstructor();
},
_prepBehavior: function (b) {
this._addHostAttributes(b.hostAttributes);
},
_marshalBehavior: function (b) {
},
_initFeatures: function () {
this._marshalHostAttributes();
this._setupDebouncers();
this._marshalBehaviors();
}
});
Polymer.Base._addFeature({
_prepTemplate: function () {
this._template = this._template || Polymer.DomModule.import(this.is, 'template');
if (this._template && this._template.hasAttribute('is')) {
this._warn(this._logf('_prepTemplate', 'top-level Polymer template ' + 'must not be a type-extension, found', this._template, 'Move inside simple <template>.'));
}
},
_stampTemplate: function () {
if (this._template) {
this.root = this.instanceTemplate(this._template);
}
},
instanceTemplate: function (template) {
var dom = document.importNode(template._content || template.content, true);
return dom;
}
});
(function () {
var baseAttachedCallback = Polymer.Base.attachedCallback;
Polymer.Base._addFeature({
_hostStack: [],
ready: function () {
},
_pushHost: function (host) {
this.dataHost = host = host || Polymer.Base._hostStack[Polymer.Base._hostStack.length - 1];
if (host && host._clients) {
host._clients.push(this);
}
this._beginHost();
},
_beginHost: function () {
Polymer.Base._hostStack.push(this);
if (!this._clients) {
this._clients = [];
}
},
_popHost: function () {
Polymer.Base._hostStack.pop();
},
_tryReady: function () {
if (this._canReady()) {
this._ready();
}
},
_canReady: function () {
return !this.dataHost || this.dataHost._clientsReadied;
},
_ready: function () {
this._beforeClientsReady();
this._setupRoot();
this._readyClients();
this._afterClientsReady();
this._readySelf();
},
_readyClients: function () {
this._beginDistribute();
var c$ = this._clients;
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
c._ready();
}
this._finishDistribute();
this._clientsReadied = true;
this._clients = null;
},
_readySelf: function () {
this._doBehavior('ready');
this._readied = true;
if (this._attachedPending) {
this._attachedPending = false;
this.attachedCallback();
}
},
_beforeClientsReady: function () {
},
_afterClientsReady: function () {
},
_beforeAttached: function () {
},
attachedCallback: function () {
if (this._readied) {
this._beforeAttached();
baseAttachedCallback.call(this);
} else {
this._attachedPending = true;
}
}
});
}());
Polymer.ArraySplice = function () {
function newSplice(index, removed, addedCount) {
return {
index: index,
removed: removed,
addedCount: addedCount
};
}
var EDIT_LEAVE = 0;
var EDIT_UPDATE = 1;
var EDIT_ADD = 2;
var EDIT_DELETE = 3;
function ArraySplice() {
}
ArraySplice.prototype = {
calcEditDistances: function (current, currentStart, currentEnd, old, oldStart, oldEnd) {
var rowCount = oldEnd - oldStart + 1;
var columnCount = currentEnd - currentStart + 1;
var distances = new Array(rowCount);
for (var i = 0; i < rowCount; i++) {
distances[i] = new Array(columnCount);
distances[i][0] = i;
}
for (var j = 0; j < columnCount; j++)
distances[0][j] = j;
for (var i = 1; i < rowCount; i++) {
for (var j = 1; j < columnCount; j++) {
if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1]))
distances[i][j] = distances[i - 1][j - 1];
else {
var north = distances[i - 1][j] + 1;
var west = distances[i][j - 1] + 1;
distances[i][j] = north < west ? north : west;
}
}
}
return distances;
},
spliceOperationsFromEditDistances: function (distances) {
var i = distances.length - 1;
var j = distances[0].length - 1;
var current = distances[i][j];
var edits = [];
while (i > 0 || j > 0) {
if (i == 0) {
edits.push(EDIT_ADD);
j--;
continue;
}
if (j == 0) {
edits.push(EDIT_DELETE);
i--;
continue;
}
var northWest = distances[i - 1][j - 1];
var west = distances[i - 1][j];
var north = distances[i][j - 1];
var min;
if (west < north)
min = west < northWest ? west : northWest;
else
min = north < northWest ? north : northWest;
if (min == northWest) {
if (northWest == current) {
edits.push(EDIT_LEAVE);
} else {
edits.push(EDIT_UPDATE);
current = northWest;
}
i--;
j--;
} else if (min == west) {
edits.push(EDIT_DELETE);
i--;
current = west;
} else {
edits.push(EDIT_ADD);
j--;
current = north;
}
}
edits.reverse();
return edits;
},
calcSplices: function (current, currentStart, currentEnd, old, oldStart, oldEnd) {
var prefixCount = 0;
var suffixCount = 0;
var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
if (currentStart == 0 && oldStart == 0)
prefixCount = this.sharedPrefix(current, old, minLength);
if (currentEnd == current.length && oldEnd == old.length)
suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
currentStart += prefixCount;
oldStart += prefixCount;
currentEnd -= suffixCount;
oldEnd -= suffixCount;
if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0)
return [];
if (currentStart == currentEnd) {
var splice = newSplice(currentStart, [], 0);
while (oldStart < oldEnd)
splice.removed.push(old[oldStart++]);
return [splice];
} else if (oldStart == oldEnd)
return [newSplice(currentStart, [], currentEnd - currentStart)];
var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
var splice = undefined;
var splices = [];
var index = currentStart;
var oldIndex = oldStart;
for (var i = 0; i < ops.length; i++) {
switch (ops[i]) {
case EDIT_LEAVE:
if (splice) {
splices.push(splice);
splice = undefined;
}
index++;
oldIndex++;
break;
case EDIT_UPDATE:
if (!splice)
splice = newSplice(index, [], 0);
splice.addedCount++;
index++;
splice.removed.push(old[oldIndex]);
oldIndex++;
break;
case EDIT_ADD:
if (!splice)
splice = newSplice(index, [], 0);
splice.addedCount++;
index++;
break;
case EDIT_DELETE:
if (!splice)
splice = newSplice(index, [], 0);
splice.removed.push(old[oldIndex]);
oldIndex++;
break;
}
}
if (splice) {
splices.push(splice);
}
return splices;
},
sharedPrefix: function (current, old, searchLength) {
for (var i = 0; i < searchLength; i++)
if (!this.equals(current[i], old[i]))
return i;
return searchLength;
},
sharedSuffix: function (current, old, searchLength) {
var index1 = current.length;
var index2 = old.length;
var count = 0;
while (count < searchLength && this.equals(current[--index1], old[--index2]))
count++;
return count;
},
calculateSplices: function (current, previous) {
return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
},
equals: function (currentValue, previousValue) {
return currentValue === previousValue;
}
};
return new ArraySplice();
}();
Polymer.EventApi = function () {
var Settings = Polymer.Settings;
var EventApi = function (event) {
this.event = event;
};
if (Settings.useShadow) {
EventApi.prototype = {
get rootTarget() {
return this.event.path[0];
},
get localTarget() {
return this.event.target;
},
get path() {
return this.event.path;
}
};
} else {
EventApi.prototype = {
get rootTarget() {
return this.event.target;
},
get localTarget() {
var current = this.event.currentTarget;
var currentRoot = current && Polymer.dom(current).getOwnerRoot();
var p$ = this.path;
for (var i = 0; i < p$.length; i++) {
if (Polymer.dom(p$[i]).getOwnerRoot() === currentRoot) {
return p$[i];
}
}
},
get path() {
if (!this.event._path) {
var path = [];
var o = this.rootTarget;
while (o) {
path.push(o);
o = Polymer.dom(o).parentNode || o.host;
}
path.push(window);
this.event._path = path;
}
return this.event._path;
}
};
}
var factory = function (event) {
if (!event.__eventApi) {
event.__eventApi = new EventApi(event);
}
return event.__eventApi;
};
return { factory: factory };
}();
Polymer.domInnerHTML = function () {
var escapeAttrRegExp = /[&\u00A0"]/g;
var escapeDataRegExp = /[&\u00A0<>]/g;
function escapeReplace(c) {
switch (c) {
case '&':
return '&amp;';
case '<':
return '&lt;';
case '>':
return '&gt;';
case '"':
return '&quot;';
case '\xA0':
return '&nbsp;';
}
}
function escapeAttr(s) {
return s.replace(escapeAttrRegExp, escapeReplace);
}
function escapeData(s) {
return s.replace(escapeDataRegExp, escapeReplace);
}
function makeSet(arr) {
var set = {};
for (var i = 0; i < arr.length; i++) {
set[arr[i]] = true;
}
return set;
}
var voidElements = makeSet([
'area',
'base',
'br',
'col',
'command',
'embed',
'hr',
'img',
'input',
'keygen',
'link',
'meta',
'param',
'source',
'track',
'wbr'
]);
var plaintextParents = makeSet([
'style',
'script',
'xmp',
'iframe',
'noembed',
'noframes',
'plaintext',
'noscript'
]);
function getOuterHTML(node, parentNode, composed) {
switch (node.nodeType) {
case Node.ELEMENT_NODE:
var tagName = node.localName;
var s = '<' + tagName;
var attrs = node.attributes;
for (var i = 0, attr; attr = attrs[i]; i++) {
s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
}
s += '>';
if (voidElements[tagName]) {
return s;
}
return s + getInnerHTML(node, composed) + '</' + tagName + '>';
case Node.TEXT_NODE:
var data = node.data;
if (parentNode && plaintextParents[parentNode.localName]) {
return data;
}
return escapeData(data);
case Node.COMMENT_NODE:
return '<!--' + node.data + '-->';
default:
console.error(node);
throw new Error('not implemented');
}
}
function getInnerHTML(node, composed) {
if (node instanceof HTMLTemplateElement)
node = node.content;
var s = '';
var c$ = Polymer.dom(node).childNodes;
c$ = composed ? node._composedChildren : c$;
for (var i = 0, l = c$.length, child; i < l && (child = c$[i]); i++) {
s += getOuterHTML(child, node, composed);
}
return s;
}
return { getInnerHTML: getInnerHTML };
}();
Polymer.DomApi = function () {
'use strict';
var Settings = Polymer.Settings;
var getInnerHTML = Polymer.domInnerHTML.getInnerHTML;
var nativeInsertBefore = Element.prototype.insertBefore;
var nativeRemoveChild = Element.prototype.removeChild;
var nativeAppendChild = Element.prototype.appendChild;
var nativeCloneNode = Element.prototype.cloneNode;
var nativeImportNode = Document.prototype.importNode;
var dirtyRoots = [];
var DomApi = function (node) {
this.node = node;
if (this.patch) {
this.patch();
}
};
DomApi.prototype = {
flush: function () {
for (var i = 0, host; i < dirtyRoots.length; i++) {
host = dirtyRoots[i];
host.flushDebouncer('_distribute');
}
dirtyRoots = [];
},
_lazyDistribute: function (host) {
if (host.shadyRoot && host.shadyRoot._distributionClean) {
host.shadyRoot._distributionClean = false;
host.debounce('_distribute', host._distributeContent);
dirtyRoots.push(host);
}
},
appendChild: function (node) {
var handled;
this._removeNodeFromHost(node, true);
if (this._nodeIsInLogicalTree(this.node)) {
this._addLogicalInfo(node, this.node);
this._addNodeToHost(node);
handled = this._maybeDistribute(node, this.node);
}
if (!handled && !this._tryRemoveUndistributedNode(node)) {
var container = this.node._isShadyRoot ? this.node.host : this.node;
addToComposedParent(container, node);
nativeAppendChild.call(container, node);
}
return node;
},
insertBefore: function (node, ref_node) {
if (!ref_node) {
return this.appendChild(node);
}
var handled;
this._removeNodeFromHost(node, true);
if (this._nodeIsInLogicalTree(this.node)) {
saveLightChildrenIfNeeded(this.node);
var children = this.childNodes;
var index = children.indexOf(ref_node);
if (index < 0) {
throw Error('The ref_node to be inserted before is not a child ' + 'of this node');
}
this._addLogicalInfo(node, this.node, index);
this._addNodeToHost(node);
handled = this._maybeDistribute(node, this.node);
}
if (!handled && !this._tryRemoveUndistributedNode(node)) {
ref_node = ref_node.localName === CONTENT ? this._firstComposedNode(ref_node) : ref_node;
var container = this.node._isShadyRoot ? this.node.host : this.node;
addToComposedParent(container, node, ref_node);
nativeInsertBefore.call(container, node, ref_node);
}
return node;
},
removeChild: function (node) {
if (factory(node).parentNode !== this.node) {
console.warn('The node to be removed is not a child of this node', node);
}
var handled;
if (this._nodeIsInLogicalTree(this.node)) {
this._removeNodeFromHost(node);
handled = this._maybeDistribute(node, this.node);
}
if (!handled) {
var container = this.node._isShadyRoot ? this.node.host : this.node;
if (container === node.parentNode) {
removeFromComposedParent(container, node);
nativeRemoveChild.call(container, node);
}
}
return node;
},
replaceChild: function (node, ref_node) {
this.insertBefore(node, ref_node);
this.removeChild(ref_node);
return node;
},
getOwnerRoot: function () {
return this._ownerShadyRootForNode(this.node);
},
_ownerShadyRootForNode: function (node) {
if (!node) {
return;
}
if (node._ownerShadyRoot === undefined) {
var root;
if (node._isShadyRoot) {
root = node;
} else {
var parent = Polymer.dom(node).parentNode;
if (parent) {
root = parent._isShadyRoot ? parent : this._ownerShadyRootForNode(parent);
} else {
root = null;
}
}
node._ownerShadyRoot = root;
}
return node._ownerShadyRoot;
},
_maybeDistribute: function (node, parent) {
var fragContent = node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !node.__noContent && Polymer.dom(node).querySelector(CONTENT);
var wrappedContent = fragContent && Polymer.dom(fragContent).parentNode.nodeType !== Node.DOCUMENT_FRAGMENT_NODE;
var hasContent = fragContent || node.localName === CONTENT;
if (hasContent) {
var root = this._ownerShadyRootForNode(parent);
if (root) {
var host = root.host;
this._updateInsertionPoints(host);
this._lazyDistribute(host);
}
}
var parentNeedsDist = this._parentNeedsDistribution(parent);
if (parentNeedsDist) {
this._lazyDistribute(parent);
}
return parentNeedsDist || hasContent && !wrappedContent;
},
_tryRemoveUndistributedNode: function (node) {
if (this.node.shadyRoot) {
if (node._composedParent) {
nativeRemoveChild.call(node._composedParent, node);
}
return true;
}
},
_updateInsertionPoints: function (host) {
host.shadyRoot._insertionPoints = factory(host.shadyRoot).querySelectorAll(CONTENT);
},
_nodeIsInLogicalTree: function (node) {
return Boolean(node._lightParent !== undefined || node._isShadyRoot || this._ownerShadyRootForNode(node) || node.shadyRoot);
},
_parentNeedsDistribution: function (parent) {
return parent && parent.shadyRoot && hasInsertionPoint(parent.shadyRoot);
},
_removeNodeFromHost: function (node, ensureComposedRemoval) {
var hostNeedsDist;
var root;
var parent = node._lightParent;
if (parent) {
root = this._ownerShadyRootForNode(node);
if (root) {
root.host._elementRemove(node);
hostNeedsDist = this._removeDistributedChildren(root, node);
}
this._removeLogicalInfo(node, node._lightParent);
}
this._removeOwnerShadyRoot(node);
if (root && hostNeedsDist) {
this._updateInsertionPoints(root.host);
this._lazyDistribute(root.host);
} else if (ensureComposedRemoval) {
removeFromComposedParent(parent || node.parentNode, node);
}
},
_removeDistributedChildren: function (root, container) {
var hostNeedsDist;
var ip$ = root._insertionPoints;
for (var i = 0; i < ip$.length; i++) {
var content = ip$[i];
if (this._contains(container, content)) {
var dc$ = factory(content).getDistributedNodes();
for (var j = 0; j < dc$.length; j++) {
hostNeedsDist = true;
var node = dc$[j];
var parent = node.parentNode;
if (parent) {
removeFromComposedParent(parent, node);
nativeRemoveChild.call(parent, node);
}
}
}
}
return hostNeedsDist;
},
_contains: function (container, node) {
while (node) {
if (node == container) {
return true;
}
node = factory(node).parentNode;
}
},
_addNodeToHost: function (node) {
var checkNode = node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? node.firstChild : node;
var root = this._ownerShadyRootForNode(checkNode);
if (root) {
root.host._elementAdd(node);
}
},
_addLogicalInfo: function (node, container, index) {
saveLightChildrenIfNeeded(container);
var children = factory(container).childNodes;
index = index === undefined ? children.length : index;
if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
var c$ = Array.prototype.slice.call(node.childNodes);
for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
children.splice(index++, 0, n);
n._lightParent = container;
}
} else {
children.splice(index, 0, node);
node._lightParent = container;
}
},
_removeLogicalInfo: function (node, container) {
var children = factory(container).childNodes;
var index = children.indexOf(node);
if (index < 0 || container !== node._lightParent) {
throw Error('The node to be removed is not a child of this node');
}
children.splice(index, 1);
node._lightParent = null;
},
_removeOwnerShadyRoot: function (node) {
var hasCachedRoot = factory(node).getOwnerRoot() !== undefined;
if (hasCachedRoot) {
var c$ = factory(node).childNodes;
for (var i = 0, l = c$.length, n; i < l && (n = c$[i]); i++) {
this._removeOwnerShadyRoot(n);
}
}
node._ownerShadyRoot = undefined;
},
_firstComposedNode: function (content) {
var n$ = factory(content).getDistributedNodes();
for (var i = 0, l = n$.length, n, p$; i < l && (n = n$[i]); i++) {
p$ = factory(n).getDestinationInsertionPoints();
if (p$[p$.length - 1] === content) {
return n;
}
}
},
querySelector: function (selector) {
return this.querySelectorAll(selector)[0];
},
querySelectorAll: function (selector) {
return this._query(function (n) {
return matchesSelector.call(n, selector);
}, this.node);
},
_query: function (matcher, node) {
node = node || this.node;
var list = [];
this._queryElements(factory(node).childNodes, matcher, list);
return list;
},
_queryElements: function (elements, matcher, list) {
for (var i = 0, l = elements.length, c; i < l && (c = elements[i]); i++) {
if (c.nodeType === Node.ELEMENT_NODE) {
this._queryElement(c, matcher, list);
}
}
},
_queryElement: function (node, matcher, list) {
if (matcher(node)) {
list.push(node);
}
this._queryElements(factory(node).childNodes, matcher, list);
},
getDestinationInsertionPoints: function () {
return this.node._destinationInsertionPoints || [];
},
getDistributedNodes: function () {
return this.node._distributedNodes || [];
},
queryDistributedElements: function (selector) {
var c$ = this.childNodes;
var list = [];
this._distributedFilter(selector, c$, list);
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
if (c.localName === CONTENT) {
this._distributedFilter(selector, factory(c).getDistributedNodes(), list);
}
}
return list;
},
_distributedFilter: function (selector, list, results) {
results = results || [];
for (var i = 0, l = list.length, d; i < l && (d = list[i]); i++) {
if (d.nodeType === Node.ELEMENT_NODE && d.localName !== CONTENT && matchesSelector.call(d, selector)) {
results.push(d);
}
}
return results;
},
_clear: function () {
while (this.childNodes.length) {
this.removeChild(this.childNodes[0]);
}
},
setAttribute: function (name, value) {
this.node.setAttribute(name, value);
this._distributeParent();
},
removeAttribute: function (name) {
this.node.removeAttribute(name);
this._distributeParent();
},
_distributeParent: function () {
if (this._parentNeedsDistribution(this.parentNode)) {
this._lazyDistribute(this.parentNode);
}
},
cloneNode: function (deep) {
var n = nativeCloneNode.call(this.node, false);
if (deep) {
var c$ = this.childNodes;
var d = factory(n);
for (var i = 0, nc; i < c$.length; i++) {
nc = factory(c$[i]).cloneNode(true);
d.appendChild(nc);
}
}
return n;
},
importNode: function (externalNode, deep) {
var doc = this.node instanceof Document ? this.node : this.node.ownerDocument;
var n = nativeImportNode.call(doc, externalNode, false);
if (deep) {
var c$ = factory(externalNode).childNodes;
var d = factory(n);
for (var i = 0, nc; i < c$.length; i++) {
nc = factory(doc).importNode(c$[i], true);
d.appendChild(nc);
}
}
return n;
}
};
Object.defineProperty(DomApi.prototype, 'classList', {
get: function () {
if (!this._classList) {
this._classList = new DomApi.ClassList(this);
}
return this._classList;
},
configurable: true
});
DomApi.ClassList = function (host) {
this.domApi = host;
this.node = host.node;
};
DomApi.ClassList.prototype = {
add: function () {
this.node.classList.add.apply(this.node.classList, arguments);
this.domApi._distributeParent();
},
remove: function () {
this.node.classList.remove.apply(this.node.classList, arguments);
this.domApi._distributeParent();
},
toggle: function () {
this.node.classList.toggle.apply(this.node.classList, arguments);
this.domApi._distributeParent();
},
contains: function () {
return this.node.classList.contains.apply(this.node.classList, arguments);
}
};
if (!Settings.useShadow) {
Object.defineProperties(DomApi.prototype, {
childNodes: {
get: function () {
var c$ = getLightChildren(this.node);
return Array.isArray(c$) ? c$ : Array.prototype.slice.call(c$);
},
configurable: true
},
children: {
get: function () {
return Array.prototype.filter.call(this.childNodes, function (n) {
return n.nodeType === Node.ELEMENT_NODE;
});
},
configurable: true
},
parentNode: {
get: function () {
return this.node._lightParent || (this.node.__patched ? this.node._composedParent : this.node.parentNode);
},
configurable: true
},
firstChild: {
get: function () {
return this.childNodes[0];
},
configurable: true
},
lastChild: {
get: function () {
var c$ = this.childNodes;
return c$[c$.length - 1];
},
configurable: true
},
nextSibling: {
get: function () {
var c$ = this.parentNode && factory(this.parentNode).childNodes;
if (c$) {
return c$[Array.prototype.indexOf.call(c$, this.node) + 1];
}
},
configurable: true
},
previousSibling: {
get: function () {
var c$ = this.parentNode && factory(this.parentNode).childNodes;
if (c$) {
return c$[Array.prototype.indexOf.call(c$, this.node) - 1];
}
},
configurable: true
},
firstElementChild: {
get: function () {
return this.children[0];
},
configurable: true
},
lastElementChild: {
get: function () {
var c$ = this.children;
return c$[c$.length - 1];
},
configurable: true
},
nextElementSibling: {
get: function () {
var c$ = this.parentNode && factory(this.parentNode).children;
if (c$) {
return c$[Array.prototype.indexOf.call(c$, this.node) + 1];
}
},
configurable: true
},
previousElementSibling: {
get: function () {
var c$ = this.parentNode && factory(this.parentNode).children;
if (c$) {
return c$[Array.prototype.indexOf.call(c$, this.node) - 1];
}
},
configurable: true
},
textContent: {
get: function () {
if (this.node.nodeType === Node.TEXT_NODE) {
return this.node.textContent;
} else {
return Array.prototype.map.call(this.childNodes, function (c) {
return c.textContent;
}).join('');
}
},
set: function (text) {
this._clear();
if (text) {
this.appendChild(document.createTextNode(text));
}
},
configurable: true
},
innerHTML: {
get: function () {
if (this.node.nodeType === Node.TEXT_NODE) {
return null;
} else {
return getInnerHTML(this.node);
}
},
set: function (text) {
if (this.node.nodeType !== Node.TEXT_NODE) {
this._clear();
var d = document.createElement('div');
d.innerHTML = text;
var c$ = Array.prototype.slice.call(d.childNodes);
for (var i = 0; i < c$.length; i++) {
this.appendChild(c$[i]);
}
}
},
configurable: true
}
});
DomApi.prototype._getComposedInnerHTML = function () {
return getInnerHTML(this.node, true);
};
} else {
DomApi.prototype.querySelectorAll = function (selector) {
return Array.prototype.slice.call(this.node.querySelectorAll(selector));
};
DomApi.prototype.getOwnerRoot = function () {
var n = this.node;
while (n) {
if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE && n.host) {
return n;
}
n = n.parentNode;
}
};
DomApi.prototype.cloneNode = function (deep) {
return this.node.cloneNode(deep);
};
DomApi.prototype.importNode = function (externalNode, deep) {
var doc = this.node instanceof Document ? this.node : this.node.ownerDocument;
return doc.importNode(externalNode, deep);
};
DomApi.prototype.getDestinationInsertionPoints = function () {
var n$ = this.node.getDestinationInsertionPoints && this.node.getDestinationInsertionPoints();
return n$ ? Array.prototype.slice.call(n$) : [];
};
DomApi.prototype.getDistributedNodes = function () {
var n$ = this.node.getDistributedNodes && this.node.getDistributedNodes();
return n$ ? Array.prototype.slice.call(n$) : [];
};
DomApi.prototype._distributeParent = function () {
};
Object.defineProperties(DomApi.prototype, {
childNodes: {
get: function () {
return Array.prototype.slice.call(this.node.childNodes);
},
configurable: true
},
children: {
get: function () {
return Array.prototype.slice.call(this.node.children);
},
configurable: true
},
textContent: {
get: function () {
return this.node.textContent;
},
set: function (value) {
return this.node.textContent = value;
},
configurable: true
},
innerHTML: {
get: function () {
return this.node.innerHTML;
},
set: function (value) {
return this.node.innerHTML = value;
},
configurable: true
}
});
var forwards = [
'parentNode',
'firstChild',
'lastChild',
'nextSibling',
'previousSibling',
'firstElementChild',
'lastElementChild',
'nextElementSibling',
'previousElementSibling'
];
forwards.forEach(function (name) {
Object.defineProperty(DomApi.prototype, name, {
get: function () {
return this.node[name];
},
configurable: true
});
});
}
var CONTENT = 'content';
var factory = function (node, patch) {
node = node || document;
if (!node.__domApi) {
node.__domApi = new DomApi(node, patch);
}
return node.__domApi;
};
Polymer.dom = function (obj, patch) {
if (obj instanceof Event) {
return Polymer.EventApi.factory(obj);
} else {
return factory(obj, patch);
}
};
Polymer.dom.flush = DomApi.prototype.flush;
function getLightChildren(node) {
var children = node._lightChildren;
return children ? children : node.childNodes;
}
function getComposedChildren(node) {
if (!node._composedChildren) {
node._composedChildren = Array.prototype.slice.call(node.childNodes);
}
return node._composedChildren;
}
function addToComposedParent(parent, node, ref_node) {
var children = getComposedChildren(parent);
var i = ref_node ? children.indexOf(ref_node) : -1;
if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
var fragChildren = getComposedChildren(node);
for (var j = 0; j < fragChildren.length; j++) {
addNodeToComposedChildren(fragChildren[j], parent, children, i + j);
}
node._composedChildren = null;
} else {
addNodeToComposedChildren(node, parent, children, i);
}
}
function addNodeToComposedChildren(node, parent, children, i) {
node._composedParent = parent;
children.splice(i >= 0 ? i : children.length, 0, node);
}
function removeFromComposedParent(parent, node) {
node._composedParent = null;
if (parent) {
var children = getComposedChildren(parent);
var i = children.indexOf(node);
if (i >= 0) {
children.splice(i, 1);
}
}
}
function saveLightChildrenIfNeeded(node) {
if (!node._lightChildren) {
var c$ = Array.prototype.slice.call(node.childNodes);
for (var i = 0, l = c$.length, child; i < l && (child = c$[i]); i++) {
child._lightParent = child._lightParent || node;
}
node._lightChildren = c$;
}
}
function hasInsertionPoint(root) {
return Boolean(root._insertionPoints.length);
}
var p = Element.prototype;
var matchesSelector = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
return {
getLightChildren: getLightChildren,
getComposedChildren: getComposedChildren,
removeFromComposedParent: removeFromComposedParent,
saveLightChildrenIfNeeded: saveLightChildrenIfNeeded,
matchesSelector: matchesSelector,
hasInsertionPoint: hasInsertionPoint,
ctor: DomApi,
factory: factory
};
}();
(function () {
Polymer.Base._addFeature({
_prepShady: function () {
this._useContent = this._useContent || Boolean(this._template);
},
_poolContent: function () {
if (this._useContent) {
saveLightChildrenIfNeeded(this);
}
},
_setupRoot: function () {
if (this._useContent) {
this._createLocalRoot();
if (!this.dataHost) {
upgradeLightChildren(this._lightChildren);
}
}
},
_createLocalRoot: function () {
this.shadyRoot = this.root;
this.shadyRoot._distributionClean = false;
this.shadyRoot._isShadyRoot = true;
this.shadyRoot._dirtyRoots = [];
this.shadyRoot._insertionPoints = !this._notes || this._notes._hasContent ? this.shadyRoot.querySelectorAll('content') : [];
saveLightChildrenIfNeeded(this.shadyRoot);
this.shadyRoot.host = this;
},
get domHost() {
var root = Polymer.dom(this).getOwnerRoot();
return root && root.host;
},
distributeContent: function (updateInsertionPoints) {
if (this.shadyRoot) {
var dom = Polymer.dom(this);
if (updateInsertionPoints) {
dom._updateInsertionPoints(this);
}
var host = getTopDistributingHost(this);
dom._lazyDistribute(host);
}
},
_distributeContent: function () {
if (this._useContent && !this.shadyRoot._distributionClean) {
this._beginDistribute();
this._distributeDirtyRoots();
this._finishDistribute();
}
},
_beginDistribute: function () {
if (this._useContent && hasInsertionPoint(this.shadyRoot)) {
this._resetDistribution();
this._distributePool(this.shadyRoot, this._collectPool());
}
},
_distributeDirtyRoots: function () {
var c$ = this.shadyRoot._dirtyRoots;
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
c._distributeContent();
}
this.shadyRoot._dirtyRoots = [];
},
_finishDistribute: function () {
if (this._useContent) {
if (hasInsertionPoint(this.shadyRoot)) {
this._composeTree();
} else {
if (!this.shadyRoot._hasDistributed) {
this.textContent = '';
this._composedChildren = null;
this.appendChild(this.shadyRoot);
} else {
var children = this._composeNode(this);
this._updateChildNodes(this, children);
}
}
this.shadyRoot._hasDistributed = true;
this.shadyRoot._distributionClean = true;
}
},
elementMatches: function (selector, node) {
node = node || this;
return matchesSelector.call(node, selector);
},
_resetDistribution: function () {
var children = getLightChildren(this);
for (var i = 0; i < children.length; i++) {
var child = children[i];
if (child._destinationInsertionPoints) {
child._destinationInsertionPoints = undefined;
}
if (isInsertionPoint(child)) {
clearDistributedDestinationInsertionPoints(child);
}
}
var root = this.shadyRoot;
var p$ = root._insertionPoints;
for (var j = 0; j < p$.length; j++) {
p$[j]._distributedNodes = [];
}
},
_collectPool: function () {
var pool = [];
var children = getLightChildren(this);
for (var i = 0; i < children.length; i++) {
var child = children[i];
if (isInsertionPoint(child)) {
pool.push.apply(pool, child._distributedNodes);
} else {
pool.push(child);
}
}
return pool;
},
_distributePool: function (node, pool) {
var p$ = node._insertionPoints;
for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
this._distributeInsertionPoint(p, pool);
maybeRedistributeParent(p, this);
}
},
_distributeInsertionPoint: function (content, pool) {
var anyDistributed = false;
for (var i = 0, l = pool.length, node; i < l; i++) {
node = pool[i];
if (!node) {
continue;
}
if (this._matchesContentSelect(node, content)) {
distributeNodeInto(node, content);
pool[i] = undefined;
anyDistributed = true;
}
}
if (!anyDistributed) {
var children = getLightChildren(content);
for (var j = 0; j < children.length; j++) {
distributeNodeInto(children[j], content);
}
}
},
_composeTree: function () {
this._updateChildNodes(this, this._composeNode(this));
var p$ = this.shadyRoot._insertionPoints;
for (var i = 0, l = p$.length, p, parent; i < l && (p = p$[i]); i++) {
parent = p._lightParent || p.parentNode;
if (!parent._useContent && parent !== this && parent !== this.shadyRoot) {
this._updateChildNodes(parent, this._composeNode(parent));
}
}
},
_composeNode: function (node) {
var children = [];
var c$ = getLightChildren(node.shadyRoot || node);
for (var i = 0; i < c$.length; i++) {
var child = c$[i];
if (isInsertionPoint(child)) {
var distributedNodes = child._distributedNodes;
for (var j = 0; j < distributedNodes.length; j++) {
var distributedNode = distributedNodes[j];
if (isFinalDestination(child, distributedNode)) {
children.push(distributedNode);
}
}
} else {
children.push(child);
}
}
return children;
},
_updateChildNodes: function (container, children) {
var composed = getComposedChildren(container);
var splices = Polymer.ArraySplice.calculateSplices(children, composed);
for (var i = 0, d = 0, s; i < splices.length && (s = splices[i]); i++) {
for (var j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
remove(n);
composed.splice(s.index + d, 1);
}
d -= s.addedCount;
}
for (var i = 0, s, next; i < splices.length && (s = splices[i]); i++) {
next = composed[s.index];
for (var j = s.index, n; j < s.index + s.addedCount; j++) {
n = children[j];
insertBefore(container, n, next);
composed.splice(j, 0, n);
}
}
},
_matchesContentSelect: function (node, contentElement) {
var select = contentElement.getAttribute('select');
if (!select) {
return true;
}
select = select.trim();
if (!select) {
return true;
}
if (!(node instanceof Element)) {
return false;
}
var validSelectors = /^(:not\()?[*.#[a-zA-Z_|]/;
if (!validSelectors.test(select)) {
return false;
}
return this.elementMatches(select, node);
},
_elementAdd: function () {
},
_elementRemove: function () {
}
});
var saveLightChildrenIfNeeded = Polymer.DomApi.saveLightChildrenIfNeeded;
var getLightChildren = Polymer.DomApi.getLightChildren;
var matchesSelector = Polymer.DomApi.matchesSelector;
var hasInsertionPoint = Polymer.DomApi.hasInsertionPoint;
var getComposedChildren = Polymer.DomApi.getComposedChildren;
var removeFromComposedParent = Polymer.DomApi.removeFromComposedParent;
function distributeNodeInto(child, insertionPoint) {
insertionPoint._distributedNodes.push(child);
var points = child._destinationInsertionPoints;
if (!points) {
child._destinationInsertionPoints = [insertionPoint];
} else {
points.push(insertionPoint);
}
}
function clearDistributedDestinationInsertionPoints(content) {
var e$ = content._distributedNodes;
if (e$) {
for (var i = 0; i < e$.length; i++) {
var d = e$[i]._destinationInsertionPoints;
if (d) {
d.splice(d.indexOf(content) + 1, d.length);
}
}
}
}
function maybeRedistributeParent(content, host) {
var parent = content._lightParent;
if (parent && parent.shadyRoot && hasInsertionPoint(parent.shadyRoot) && parent.shadyRoot._distributionClean) {
parent.shadyRoot._distributionClean = false;
host.shadyRoot._dirtyRoots.push(parent);
}
}
function isFinalDestination(insertionPoint, node) {
var points = node._destinationInsertionPoints;
return points && points[points.length - 1] === insertionPoint;
}
function isInsertionPoint(node) {
return node.localName == 'content';
}
var nativeInsertBefore = Element.prototype.insertBefore;
var nativeRemoveChild = Element.prototype.removeChild;
function insertBefore(parentNode, newChild, refChild) {
var newChildParent = getComposedParent(newChild);
if (newChildParent !== parentNode) {
removeFromComposedParent(newChildParent, newChild);
}
remove(newChild);
saveLightChildrenIfNeeded(parentNode);
nativeInsertBefore.call(parentNode, newChild, refChild || null);
newChild._composedParent = parentNode;
}
function remove(node) {
var parentNode = getComposedParent(node);
if (parentNode) {
saveLightChildrenIfNeeded(parentNode);
node._composedParent = null;
nativeRemoveChild.call(parentNode, node);
}
}
function getComposedParent(node) {
return node.__patched ? node._composedParent : node.parentNode;
}
function getTopDistributingHost(host) {
while (host && hostNeedsRedistribution(host)) {
host = host.domHost;
}
return host;
}
function hostNeedsRedistribution(host) {
var c$ = Polymer.dom(host).children;
for (var i = 0, c; i < c$.length; i++) {
c = c$[i];
if (c.localName === 'content') {
return host.domHost;
}
}
}
var needsUpgrade = window.CustomElements && !CustomElements.useNative;
function upgradeLightChildren(children) {
if (needsUpgrade && children) {
for (var i = 0; i < children.length; i++) {
CustomElements.upgrade(children[i]);
}
}
}
}());
if (Polymer.Settings.useShadow) {
Polymer.Base._addFeature({
_poolContent: function () {
},
_beginDistribute: function () {
},
distributeContent: function () {
},
_distributeContent: function () {
},
_finishDistribute: function () {
},
_createLocalRoot: function () {
this.createShadowRoot();
this.shadowRoot.appendChild(this.root);
this.root = this.shadowRoot;
}
});
}
Polymer.DomModule = document.createElement('dom-module');
Polymer.Base._addFeature({
_registerFeatures: function () {
this._prepIs();
this._prepAttributes();
this._prepBehaviors();
this._prepConstructor();
this._prepTemplate();
this._prepShady();
},
_prepBehavior: function (b) {
this._addHostAttributes(b.hostAttributes);
},
_initFeatures: function () {
this._poolContent();
this._pushHost();
this._stampTemplate();
this._popHost();
this._marshalHostAttributes();
this._setupDebouncers();
this._marshalBehaviors();
this._tryReady();
},
_marshalBehavior: function (b) {
}
});
Polymer.nar = [];
Polymer.Annotations = {
parseAnnotations: function (template) {
var list = [];
var content = template._content || template.content;
this._parseNodeAnnotations(content, list);
return list;
},
_parseNodeAnnotations: function (node, list) {
return node.nodeType === Node.TEXT_NODE ? this._parseTextNodeAnnotation(node, list) : this._parseElementAnnotations(node, list);
},
_testEscape: function (value) {
var escape = value.slice(0, 2);
if (escape === '{{' || escape === '[[') {
return escape;
}
},
_parseTextNodeAnnotation: function (node, list) {
var v = node.textContent;
var escape = this._testEscape(v);
if (escape) {
node.textContent = ' ';
var annote = {
bindings: [{
kind: 'text',
mode: escape[0],
value: v.slice(2, -2).trim()
}]
};
list.push(annote);
return annote;
}
},
_parseElementAnnotations: function (element, list) {
var annote = {
bindings: [],
events: []
};
if (element.localName === 'content') {
list._hasContent = true;
}
this._parseChildNodesAnnotations(element, annote, list);
if (element.attributes) {
this._parseNodeAttributeAnnotations(element, annote, list);
if (this.prepElement) {
this.prepElement(element);
}
}
if (annote.bindings.length || annote.events.length || annote.id) {
list.push(annote);
}
return annote;
},
_parseChildNodesAnnotations: function (root, annote, list, callback) {
if (root.firstChild) {
for (var i = 0, node = root.firstChild; node; node = node.nextSibling, i++) {
if (node.localName === 'template' && !node.hasAttribute('preserve-content')) {
this._parseTemplate(node, i, list, annote);
}
if (node.nodeType === Node.TEXT_NODE) {
var n = node.nextSibling;
while (n && n.nodeType === Node.TEXT_NODE) {
node.textContent += n.textContent;
root.removeChild(n);
n = n.nextSibling;
}
}
var childAnnotation = this._parseNodeAnnotations(node, list, callback);
if (childAnnotation) {
childAnnotation.parent = annote;
childAnnotation.index = i;
}
}
}
},
_parseTemplate: function (node, index, list, parent) {
var content = document.createDocumentFragment();
content._notes = this.parseAnnotations(node);
content.appendChild(node.content);
list.push({
bindings: Polymer.nar,
events: Polymer.nar,
templateContent: content,
parent: parent,
index: index
});
},
_parseNodeAttributeAnnotations: function (node, annotation) {
for (var i = node.attributes.length - 1, a; a = node.attributes[i]; i--) {
var n = a.name, v = a.value;
if (n === 'id' && !this._testEscape(v)) {
annotation.id = v;
} else if (n.slice(0, 3) === 'on-') {
node.removeAttribute(n);
annotation.events.push({
name: n.slice(3),
value: v
});
} else {
var b = this._parseNodeAttributeAnnotation(node, n, v);
if (b) {
annotation.bindings.push(b);
}
}
}
},
_parseNodeAttributeAnnotation: function (node, n, v) {
var escape = this._testEscape(v);
if (escape) {
var customEvent;
var name = n;
var mode = escape[0];
v = v.slice(2, -2).trim();
var not = false;
if (v[0] == '!') {
v = v.substring(1);
not = true;
}
var kind = 'property';
if (n[n.length - 1] == '$') {
name = n.slice(0, -1);
kind = 'attribute';
}
var notifyEvent, colon;
if (mode == '{' && (colon = v.indexOf('::')) > 0) {
notifyEvent = v.substring(colon + 2);
v = v.substring(0, colon);
customEvent = true;
}
if (node.localName == 'input' && n == 'value') {
node.setAttribute(n, '');
}
node.removeAttribute(n);
if (kind === 'property') {
name = Polymer.CaseMap.dashToCamelCase(name);
}
return {
kind: kind,
mode: mode,
name: name,
value: v,
negate: not,
event: notifyEvent,
customEvent: customEvent
};
}
},
_localSubTree: function (node, host) {
return node === host ? node.childNodes : node._lightChildren || node.childNodes;
},
findAnnotatedNode: function (root, annote) {
var parent = annote.parent && Polymer.Annotations.findAnnotatedNode(root, annote.parent);
return !parent ? root : Polymer.Annotations._localSubTree(parent, root)[annote.index];
}
};
(function () {
function resolveCss(cssText, ownerDocument) {
return cssText.replace(CSS_URL_RX, function (m, pre, url, post) {
return pre + '\'' + resolve(url.replace(/["']/g, ''), ownerDocument) + '\'' + post;
});
}
function resolveAttrs(element, ownerDocument) {
for (var name in URL_ATTRS) {
var a$ = URL_ATTRS[name];
for (var i = 0, l = a$.length, a, at, v; i < l && (a = a$[i]); i++) {
if (name === '*' || element.localName === name) {
at = element.attributes[a];
v = at && at.value;
if (v && v.search(BINDING_RX) < 0) {
at.value = a === 'style' ? resolveCss(v, ownerDocument) : resolve(v, ownerDocument);
}
}
}
}
}
function resolve(url, ownerDocument) {
if (url && url[0] === '#') {
return url;
}
var resolver = getUrlResolver(ownerDocument);
resolver.href = url;
return resolver.href || url;
}
var tempDoc;
var tempDocBase;
function resolveUrl(url, baseUri) {
if (!tempDoc) {
tempDoc = document.implementation.createHTMLDocument('temp');
tempDocBase = tempDoc.createElement('base');
tempDoc.head.appendChild(tempDocBase);
}
tempDocBase.href = baseUri;
return resolve(url, tempDoc);
}
function getUrlResolver(ownerDocument) {
return ownerDocument.__urlResolver || (ownerDocument.__urlResolver = ownerDocument.createElement('a'));
}
var CSS_URL_RX = /(url\()([^)]*)(\))/g;
var URL_ATTRS = {
'*': [
'href',
'src',
'style',
'url'
],
form: ['action']
};
var BINDING_RX = /\{\{|\[\[/;
Polymer.ResolveUrl = {
resolveCss: resolveCss,
resolveAttrs: resolveAttrs,
resolveUrl: resolveUrl
};
}());
Polymer.Base._addFeature({
_prepAnnotations: function () {
if (!this._template) {
this._notes = [];
} else {
Polymer.Annotations.prepElement = this._prepElement.bind(this);
this._notes = Polymer.Annotations.parseAnnotations(this._template);
this._processAnnotations(this._notes);
Polymer.Annotations.prepElement = null;
}
},
_processAnnotations: function (notes) {
for (var i = 0; i < notes.length; i++) {
var note = notes[i];
for (var j = 0; j < note.bindings.length; j++) {
var b = note.bindings[j];
b.signature = this._parseMethod(b.value);
if (!b.signature) {
b.model = this._modelForPath(b.value);
}
}
if (note.templateContent) {
this._processAnnotations(note.templateContent._notes);
var pp = note.templateContent._parentProps = this._discoverTemplateParentProps(note.templateContent._notes);
var bindings = [];
for (var prop in pp) {
bindings.push({
index: note.index,
kind: 'property',
mode: '{',
name: '_parent_' + prop,
model: prop,
value: prop
});
}
note.bindings = note.bindings.concat(bindings);
}
}
},
_discoverTemplateParentProps: function (notes) {
var pp = {};
notes.forEach(function (n) {
n.bindings.forEach(function (b) {
if (b.signature) {
var args = b.signature.args;
for (var k = 0; k < args.length; k++) {
pp[args[k].model] = true;
}
} else {
pp[b.model] = true;
}
});
if (n.templateContent) {
var tpp = n.templateContent._parentProps;
Polymer.Base.mixin(pp, tpp);
}
});
return pp;
},
_prepElement: function (element) {
Polymer.ResolveUrl.resolveAttrs(element, this._template.ownerDocument);
},
_findAnnotatedNode: Polymer.Annotations.findAnnotatedNode,
_marshalAnnotationReferences: function () {
if (this._template) {
this._marshalIdNodes();
this._marshalAnnotatedNodes();
this._marshalAnnotatedListeners();
}
},
_configureAnnotationReferences: function () {
this._configureTemplateContent();
},
_configureTemplateContent: function () {
this._notes.forEach(function (note, i) {
if (note.templateContent) {
this._nodes[i]._content = note.templateContent;
}
}, this);
},
_marshalIdNodes: function () {
this.$ = {};
this._notes.forEach(function (a) {
if (a.id) {
this.$[a.id] = this._findAnnotatedNode(this.root, a);
}
}, this);
},
_marshalAnnotatedNodes: function () {
if (this._nodes) {
this._nodes = this._nodes.map(function (a) {
return this._findAnnotatedNode(this.root, a);
}, this);
}
},
_marshalAnnotatedListeners: function () {
this._notes.forEach(function (a) {
if (a.events && a.events.length) {
var node = this._findAnnotatedNode(this.root, a);
a.events.forEach(function (e) {
this.listen(node, e.name, e.value);
}, this);
}
}, this);
}
});
Polymer.Base._addFeature({
listeners: {},
_listenListeners: function (listeners) {
var node, name, key;
for (key in listeners) {
if (key.indexOf('.') < 0) {
node = this;
name = key;
} else {
name = key.split('.');
node = this.$[name[0]];
name = name[1];
}
this.listen(node, name, listeners[key]);
}
},
listen: function (node, eventName, methodName) {
this._listen(node, eventName, this._createEventHandler(node, eventName, methodName));
},
_boundListenerKey: function (eventName, methodName) {
return eventName + ':' + methodName;
},
_recordEventHandler: function (host, eventName, target, methodName, handler) {
var hbl = host.__boundListeners;
if (!hbl) {
hbl = host.__boundListeners = new WeakMap();
}
var bl = hbl.get(target);
if (!bl) {
bl = {};
hbl.set(target, bl);
}
var key = this._boundListenerKey(eventName, methodName);
bl[key] = handler;
},
_recallEventHandler: function (host, eventName, target, methodName) {
var hbl = host.__boundListeners;
if (!hbl) {
return;
}
var bl = hbl.get(target);
if (!bl) {
return;
}
var key = this._boundListenerKey(eventName, methodName);
return bl[key];
},
_createEventHandler: function (node, eventName, methodName) {
var host = this;
var handler = function (e) {
if (host[methodName]) {
host[methodName](e, e.detail);
} else {
host._warn(host._logf('_createEventHandler', 'listener method `' + methodName + '` not defined'));
}
};
this._recordEventHandler(host, eventName, node, methodName, handler);
return handler;
},
unlisten: function (node, eventName, methodName) {
var handler = this._recallEventHandler(this, eventName, node, methodName);
if (handler) {
this._unlisten(node, eventName, handler);
}
},
_listen: function (node, eventName, handler) {
node.addEventListener(eventName, handler);
},
_unlisten: function (node, eventName, handler) {
node.removeEventListener(eventName, handler);
}
});
(function () {
'use strict';
var HAS_NATIVE_TA = typeof document.head.style.touchAction === 'string';
var GESTURE_KEY = '__polymerGestures';
var HANDLED_OBJ = '__polymerGesturesHandled';
var TOUCH_ACTION = '__polymerGesturesTouchAction';
var TAP_DISTANCE = 25;
var TRACK_DISTANCE = 5;
var TRACK_LENGTH = 2;
var MOUSE_TIMEOUT = 2500;
var MOUSE_EVENTS = [
'mousedown',
'mousemove',
'mouseup',
'click'
];
var IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);
var mouseCanceller = function (mouseEvent) {
mouseEvent[HANDLED_OBJ] = { skip: true };
if (mouseEvent.type === 'click') {
var path = Polymer.dom(mouseEvent).path;
for (var i = 0; i < path.length; i++) {
if (path[i] === POINTERSTATE.mouse.target) {
return;
}
}
mouseEvent.preventDefault();
mouseEvent.stopPropagation();
}
};
function setupTeardownMouseCanceller(setup) {
for (var i = 0, en; i < MOUSE_EVENTS.length; i++) {
en = MOUSE_EVENTS[i];
if (setup) {
document.addEventListener(en, mouseCanceller, true);
} else {
document.removeEventListener(en, mouseCanceller, true);
}
}
}
function ignoreMouse() {
if (IS_TOUCH_ONLY) {
return;
}
if (!POINTERSTATE.mouse.mouseIgnoreJob) {
setupTeardownMouseCanceller(true);
}
var unset = function () {
setupTeardownMouseCanceller();
POINTERSTATE.mouse.target = null;
POINTERSTATE.mouse.mouseIgnoreJob = null;
};
POINTERSTATE.mouse.mouseIgnoreJob = Polymer.Debounce(POINTERSTATE.mouse.mouseIgnoreJob, unset, MOUSE_TIMEOUT);
}
var POINTERSTATE = {
mouse: {
target: null,
mouseIgnoreJob: null
},
touch: {
x: 0,
y: 0,
id: -1,
scrollDecided: false
}
};
function firstTouchAction(ev) {
var path = Polymer.dom(ev).path;
var ta = 'auto';
for (var i = 0, n; i < path.length; i++) {
n = path[i];
if (n[TOUCH_ACTION]) {
ta = n[TOUCH_ACTION];
break;
}
}
return ta;
}
var Gestures = {
gestures: {},
recognizers: [],
deepTargetFind: function (x, y) {
var node = document.elementFromPoint(x, y);
var next = node;
while (next && next.shadowRoot) {
next = next.shadowRoot.elementFromPoint(x, y);
if (next) {
node = next;
}
}
return node;
},
findOriginalTarget: function (ev) {
if (ev.path) {
return ev.path[0];
}
return ev.target;
},
handleNative: function (ev) {
var handled;
var type = ev.type;
var node = ev.currentTarget;
var gobj = node[GESTURE_KEY];
var gs = gobj[type];
if (!gs) {
return;
}
if (!ev[HANDLED_OBJ]) {
ev[HANDLED_OBJ] = {};
if (type.slice(0, 5) === 'touch') {
var t = ev.changedTouches[0];
if (type === 'touchstart') {
if (ev.touches.length === 1) {
POINTERSTATE.touch.id = t.identifier;
}
}
if (POINTERSTATE.touch.id !== t.identifier) {
return;
}
if (!HAS_NATIVE_TA) {
if (type === 'touchstart' || type === 'touchmove') {
Gestures.handleTouchAction(ev);
}
}
if (type === 'touchend') {
POINTERSTATE.mouse.target = Polymer.dom(ev).rootTarget;
ignoreMouse(true);
}
}
}
handled = ev[HANDLED_OBJ];
if (handled.skip) {
return;
}
var recognizers = Gestures.recognizers;
for (var i = 0, r; i < recognizers.length; i++) {
r = recognizers[i];
if (gs[r.name] && !handled[r.name]) {
handled[r.name] = true;
r[type](ev);
}
}
},
handleTouchAction: function (ev) {
var t = ev.changedTouches[0];
var type = ev.type;
if (type === 'touchstart') {
POINTERSTATE.touch.x = t.clientX;
POINTERSTATE.touch.y = t.clientY;
POINTERSTATE.touch.scrollDecided = false;
} else if (type === 'touchmove') {
if (POINTERSTATE.touch.scrollDecided) {
return;
}
POINTERSTATE.touch.scrollDecided = true;
var ta = firstTouchAction(ev);
var prevent = false;
var dx = Math.abs(POINTERSTATE.touch.x - t.clientX);
var dy = Math.abs(POINTERSTATE.touch.y - t.clientY);
if (!ev.cancelable) {
} else if (ta === 'none') {
prevent = true;
} else if (ta === 'pan-x') {
prevent = dy > dx;
} else if (ta === 'pan-y') {
prevent = dx > dy;
}
if (prevent) {
ev.preventDefault();
}
}
},
add: function (node, evType, handler) {
var recognizer = this.gestures[evType];
var deps = recognizer.deps;
var name = recognizer.name;
var gobj = node[GESTURE_KEY];
if (!gobj) {
node[GESTURE_KEY] = gobj = {};
}
for (var i = 0, dep, gd; i < deps.length; i++) {
dep = deps[i];
if (IS_TOUCH_ONLY && MOUSE_EVENTS.indexOf(dep) > -1) {
continue;
}
gd = gobj[dep];
if (!gd) {
gobj[dep] = gd = { _count: 0 };
}
if (gd._count === 0) {
node.addEventListener(dep, this.handleNative);
}
gd[name] = (gd[name] || 0) + 1;
gd._count = (gd._count || 0) + 1;
}
node.addEventListener(evType, handler);
if (recognizer.touchAction) {
this.setTouchAction(node, recognizer.touchAction);
}
},
remove: function (node, evType, handler) {
var recognizer = this.gestures[evType];
var deps = recognizer.deps;
var name = recognizer.name;
var gobj = node[GESTURE_KEY];
if (gobj) {
for (var i = 0, dep, gd; i < deps.length; i++) {
dep = deps[i];
gd = gobj[dep];
if (gd && gd[name]) {
gd[name] = (gd[name] || 1) - 1;
gd._count = (gd._count || 1) - 1;
}
if (gd._count === 0) {
node.removeEventListener(dep, this.handleNative);
}
}
}
node.removeEventListener(evType, handler);
},
register: function (recog) {
this.recognizers.push(recog);
for (var i = 0; i < recog.emits.length; i++) {
this.gestures[recog.emits[i]] = recog;
}
},
findRecognizerByEvent: function (evName) {
for (var i = 0, r; i < this.recognizers.length; i++) {
r = this.recognizers[i];
for (var j = 0, n; j < r.emits.length; j++) {
n = r.emits[j];
if (n === evName) {
return r;
}
}
}
return null;
},
setTouchAction: function (node, value) {
if (HAS_NATIVE_TA) {
node.style.touchAction = value;
}
node[TOUCH_ACTION] = value;
},
fire: function (target, type, detail) {
var ev = Polymer.Base.fire(type, detail, {
node: target,
bubbles: true,
cancelable: true
});
if (ev.defaultPrevented) {
var se = detail.sourceEvent;
if (se && se.preventDefault) {
se.preventDefault();
}
}
},
prevent: function (evName) {
var recognizer = this.findRecognizerByEvent(evName);
if (recognizer.info) {
recognizer.info.prevent = true;
}
}
};
Gestures.register({
name: 'downup',
deps: [
'mousedown',
'touchstart',
'touchend'
],
emits: [
'down',
'up'
],
mousedown: function (e) {
var t = Gestures.findOriginalTarget(e);
var self = this;
var upfn = function upfn(e) {
self.fire('up', t, e);
document.removeEventListener('mouseup', upfn);
};
document.addEventListener('mouseup', upfn);
this.fire('down', t, e);
},
touchstart: function (e) {
this.fire('down', Gestures.findOriginalTarget(e), e.changedTouches[0]);
},
touchend: function (e) {
this.fire('up', Gestures.findOriginalTarget(e), e.changedTouches[0]);
},
fire: function (type, target, event) {
var self = this;
Gestures.fire(target, type, {
x: event.clientX,
y: event.clientY,
sourceEvent: event,
prevent: Gestures.prevent.bind(Gestures)
});
}
});
Gestures.register({
name: 'track',
touchAction: 'none',
deps: [
'mousedown',
'touchstart',
'touchmove',
'touchend'
],
emits: ['track'],
info: {
x: 0,
y: 0,
state: 'start',
started: false,
moves: [],
addMove: function (move) {
if (this.moves.length > TRACK_LENGTH) {
this.moves.shift();
}
this.moves.push(move);
},
prevent: false
},
clearInfo: function () {
this.info.state = 'start';
this.info.started = false;
this.info.moves = [];
this.info.x = 0;
this.info.y = 0;
this.info.prevent = false;
},
hasMovedEnough: function (x, y) {
if (this.info.prevent) {
return false;
}
if (this.info.started) {
return true;
}
var dx = Math.abs(this.info.x - x);
var dy = Math.abs(this.info.y - y);
return dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE;
},
mousedown: function (e) {
var t = Gestures.findOriginalTarget(e);
var self = this;
var movefn = function movefn(e) {
var x = e.clientX, y = e.clientY;
if (self.hasMovedEnough(x, y)) {
self.info.state = self.info.started ? e.type === 'mouseup' ? 'end' : 'track' : 'start';
self.info.addMove({
x: x,
y: y
});
self.fire(t, e);
self.info.started = true;
}
};
var upfn = function upfn(e) {
if (self.info.started) {
Gestures.prevent('tap');
movefn(e);
}
self.clearInfo();
document.removeEventListener('mousemove', movefn);
document.removeEventListener('mouseup', upfn);
};
document.addEventListener('mousemove', movefn);
document.addEventListener('mouseup', upfn);
this.info.x = e.clientX;
this.info.y = e.clientY;
},
touchstart: function (e) {
var ct = e.changedTouches[0];
this.info.x = ct.clientX;
this.info.y = ct.clientY;
},
touchmove: function (e) {
var t = Gestures.findOriginalTarget(e);
var ct = e.changedTouches[0];
var x = ct.clientX, y = ct.clientY;
if (this.hasMovedEnough(x, y)) {
this.info.addMove({
x: x,
y: y
});
this.fire(t, ct);
this.info.state = 'track';
this.info.started = true;
}
},
touchend: function (e) {
var t = Gestures.findOriginalTarget(e);
var ct = e.changedTouches[0];
if (this.info.started) {
Gestures.prevent('tap');
this.info.state = 'end';
this.info.addMove({
x: ct.clientX,
y: ct.clientY
});
this.fire(t, ct);
}
this.clearInfo();
},
fire: function (target, touch) {
var secondlast = this.info.moves[this.info.moves.length - 2];
var lastmove = this.info.moves[this.info.moves.length - 1];
var dx = lastmove.x - this.info.x;
var dy = lastmove.y - this.info.y;
var ddx, ddy = 0;
if (secondlast) {
ddx = lastmove.x - secondlast.x;
ddy = lastmove.y - secondlast.y;
}
return Gestures.fire(target, 'track', {
state: this.info.state,
x: touch.clientX,
y: touch.clientY,
dx: dx,
dy: dy,
ddx: ddx,
ddy: ddy,
sourceEvent: touch,
hover: function () {
return Gestures.deepTargetFind(touch.clientX, touch.clientY);
}
});
}
});
Gestures.register({
name: 'tap',
deps: [
'mousedown',
'click',
'touchstart',
'touchend'
],
emits: ['tap'],
info: {
x: NaN,
y: NaN,
prevent: false
},
reset: function () {
this.info.x = NaN;
this.info.y = NaN;
this.info.prevent = false;
},
save: function (e) {
this.info.x = e.clientX;
this.info.y = e.clientY;
},
mousedown: function (e) {
this.save(e);
},
click: function (e) {
this.forward(e);
},
touchstart: function (e) {
this.save(e.changedTouches[0]);
},
touchend: function (e) {
this.forward(e.changedTouches[0]);
},
forward: function (e) {
var dx = Math.abs(e.clientX - this.info.x);
var dy = Math.abs(e.clientY - this.info.y);
var t = Gestures.findOriginalTarget(e);
if (isNaN(dx) || isNaN(dy) || dx <= TAP_DISTANCE && dy <= TAP_DISTANCE) {
if (!this.info.prevent) {
Gestures.fire(t, 'tap', {
x: e.clientX,
y: e.clientY,
sourceEvent: e
});
}
}
this.reset();
}
});
var DIRECTION_MAP = {
x: 'pan-x',
y: 'pan-y',
none: 'none',
all: 'auto'
};
Polymer.Base._addFeature({
_listen: function (node, eventName, handler) {
if (Gestures.gestures[eventName]) {
Gestures.add(node, eventName, handler);
} else {
node.addEventListener(eventName, handler);
}
},
_unlisten: function (node, eventName, handler) {
if (Gestures.gestures[eventName]) {
Gestures.remove(node, eventName, handler);
} else {
node.removeEventListener(eventName, handler);
}
},
setScrollDirection: function (direction, node) {
node = node || this;
Gestures.setTouchAction(node, DIRECTION_MAP[direction] || 'auto');
}
});
Polymer.Gestures = Gestures;
}());
Polymer.Async = {
_currVal: 0,
_lastVal: 0,
_callbacks: [],
_twiddleContent: 0,
_twiddle: document.createTextNode(''),
run: function (callback, waitTime) {
if (waitTime > 0) {
return ~setTimeout(callback, waitTime);
} else {
this._twiddle.textContent = this._twiddleContent++;
this._callbacks.push(callback);
return this._currVal++;
}
},
cancel: function (handle) {
if (handle < 0) {
clearTimeout(~handle);
} else {
var idx = handle - this._lastVal;
if (idx >= 0) {
if (!this._callbacks[idx]) {
throw 'invalid async handle: ' + handle;
}
this._callbacks[idx] = null;
}
}
},
_atEndOfMicrotask: function () {
var len = this._callbacks.length;
for (var i = 0; i < len; i++) {
var cb = this._callbacks[i];
if (cb) {
try {
cb();
} catch (e) {
i++;
this._callbacks.splice(0, i);
this._lastVal += i;
this._twiddle.textContent = this._twiddleContent++;
throw e;
}
}
}
this._callbacks.splice(0, len);
this._lastVal += len;
}
};
new (window.MutationObserver || JsMutationObserver)(Polymer.Async._atEndOfMicrotask.bind(Polymer.Async)).observe(Polymer.Async._twiddle, { characterData: true });
Polymer.Debounce = function () {
var Async = Polymer.Async;
var Debouncer = function (context) {
this.context = context;
this.boundComplete = this.complete.bind(this);
};
Debouncer.prototype = {
go: function (callback, wait) {
var h;
this.finish = function () {
Async.cancel(h);
};
h = Async.run(this.boundComplete, wait);
this.callback = callback;
},
stop: function () {
if (this.finish) {
this.finish();
this.finish = null;
}
},
complete: function () {
if (this.finish) {
this.stop();
this.callback.call(this.context);
}
}
};
function debounce(debouncer, callback, wait) {
if (debouncer) {
debouncer.stop();
} else {
debouncer = new Debouncer(this);
}
debouncer.go(callback, wait);
return debouncer;
}
return debounce;
}();
Polymer.Base._addFeature({
$$: function (slctr) {
return Polymer.dom(this.root).querySelector(slctr);
},
toggleClass: function (name, bool, node) {
node = node || this;
if (arguments.length == 1) {
bool = !node.classList.contains(name);
}
if (bool) {
Polymer.dom(node).classList.add(name);
} else {
Polymer.dom(node).classList.remove(name);
}
},
toggleAttribute: function (name, bool, node) {
node = node || this;
if (arguments.length == 1) {
bool = !node.hasAttribute(name);
}
if (bool) {
Polymer.dom(node).setAttribute(name, '');
} else {
Polymer.dom(node).removeAttribute(name);
}
},
classFollows: function (name, toElement, fromElement) {
if (fromElement) {
Polymer.dom(fromElement).classList.remove(name);
}
if (toElement) {
Polymer.dom(toElement).classList.add(name);
}
},
attributeFollows: function (name, toElement, fromElement) {
if (fromElement) {
Polymer.dom(fromElement).removeAttribute(name);
}
if (toElement) {
Polymer.dom(toElement).setAttribute(name, '');
}
},
getContentChildNodes: function (slctr) {
var content = Polymer.dom(this.root).querySelector(slctr || 'content');
return content ? Polymer.dom(content).getDistributedNodes() : [];
},
getContentChildren: function (slctr) {
return this.getContentChildNodes(slctr).filter(function (n) {
return n.nodeType === Node.ELEMENT_NODE;
});
},
fire: function (type, detail, options) {
options = options || Polymer.nob;
var node = options.node || this;
var detail = detail === null || detail === undefined ? Polymer.nob : detail;
var bubbles = options.bubbles === undefined ? true : options.bubbles;
var cancelable = Boolean(options.cancelable);
var event = new CustomEvent(type, {
bubbles: Boolean(bubbles),
cancelable: cancelable,
detail: detail
});
node.dispatchEvent(event);
return event;
},
async: function (callback, waitTime) {
return Polymer.Async.run(callback.bind(this), waitTime);
},
cancelAsync: function (handle) {
Polymer.Async.cancel(handle);
},
arrayDelete: function (path, item) {
var index;
if (Array.isArray(path)) {
index = path.indexOf(item);
if (index >= 0) {
return path.splice(index, 1);
}
} else {
var arr = this.get(path);
index = arr.indexOf(item);
if (index >= 0) {
return this.splice(path, index, 1);
}
}
},
transform: function (transform, node) {
node = node || this;
node.style.webkitTransform = transform;
node.style.transform = transform;
},
translate3d: function (x, y, z, node) {
node = node || this;
this.transform('translate3d(' + x + ',' + y + ',' + z + ')', node);
},
importHref: function (href, onload, onerror) {
var l = document.createElement('link');
l.rel = 'import';
l.href = href;
if (onload) {
l.onload = onload.bind(this);
}
if (onerror) {
l.onerror = onerror.bind(this);
}
document.head.appendChild(l);
return l;
},
create: function (tag, props) {
var elt = document.createElement(tag);
if (props) {
for (var n in props) {
elt[n] = props[n];
}
}
return elt;
}
});
Polymer.Bind = {
prepareModel: function (model) {
model._propertyEffects = {};
model._bindListeners = [];
Polymer.Base.mixin(model, this._modelApi);
},
_modelApi: {
_notifyChange: function (property) {
var eventName = Polymer.CaseMap.camelToDashCase(property) + '-changed';
Polymer.Base.fire(eventName, { value: this[property] }, {
bubbles: false,
node: this
});
},
_propertySetter: function (property, value, effects, fromAbove) {
var old = this.__data__[property];
if (old !== value && (old === old || value === value)) {
this.__data__[property] = value;
if (typeof value == 'object') {
this._clearPath(property);
}
if (this._propertyChanged) {
this._propertyChanged(property, value, old);
}
if (effects) {
this._effectEffects(property, value, effects, old, fromAbove);
}
}
return old;
},
__setProperty: function (property, value, quiet, node) {
node = node || this;
var effects = node._propertyEffects && node._propertyEffects[property];
if (effects) {
node._propertySetter(property, value, effects, quiet);
} else {
node[property] = value;
}
},
_effectEffects: function (property, value, effects, old, fromAbove) {
effects.forEach(function (fx) {
var fn = Polymer.Bind['_' + fx.kind + 'Effect'];
if (fn) {
fn.call(this, property, value, fx.effect, old, fromAbove);
}
}, this);
},
_clearPath: function (path) {
for (var prop in this.__data__) {
if (prop.indexOf(path + '.') === 0) {
this.__data__[prop] = undefined;
}
}
}
},
ensurePropertyEffects: function (model, property) {
var fx = model._propertyEffects[property];
if (!fx) {
fx = model._propertyEffects[property] = [];
}
return fx;
},
addPropertyEffect: function (model, property, kind, effect) {
var fx = this.ensurePropertyEffects(model, property);
fx.push({
kind: kind,
effect: effect
});
},
createBindings: function (model) {
var fx$ = model._propertyEffects;
if (fx$) {
for (var n in fx$) {
var fx = fx$[n];
fx.sort(this._sortPropertyEffects);
this._createAccessors(model, n, fx);
}
}
},
_sortPropertyEffects: function () {
var EFFECT_ORDER = {
'compute': 0,
'annotation': 1,
'computedAnnotation': 2,
'reflect': 3,
'notify': 4,
'observer': 5,
'complexObserver': 6,
'function': 7
};
return function (a, b) {
return EFFECT_ORDER[a.kind] - EFFECT_ORDER[b.kind];
};
}(),
_createAccessors: function (model, property, effects) {
var defun = {
get: function () {
return this.__data__[property];
}
};
var setter = function (value) {
this._propertySetter(property, value, effects);
};
var info = model.getPropertyInfo && model.getPropertyInfo(property);
if (info && info.readOnly) {
if (!info.computed) {
model['_set' + this.upper(property)] = setter;
}
} else {
defun.set = setter;
}
Object.defineProperty(model, property, defun);
},
upper: function (name) {
return name[0].toUpperCase() + name.substring(1);
},
_addAnnotatedListener: function (model, index, property, path, event) {
var fn = this._notedListenerFactory(property, path, this._isStructured(path), this._isEventBogus);
var eventName = event || Polymer.CaseMap.camelToDashCase(property) + '-changed';
model._bindListeners.push({
index: index,
property: property,
path: path,
changedFn: fn,
event: eventName
});
},
_isStructured: function (path) {
return path.indexOf('.') > 0;
},
_isEventBogus: function (e, target) {
return e.path && e.path[0] !== target;
},
_notedListenerFactory: function (property, path, isStructured, bogusTest) {
return function (e, target) {
if (!bogusTest(e, target)) {
if (e.detail && e.detail.path) {
this.notifyPath(this._fixPath(path, property, e.detail.path), e.detail.value);
} else {
var value = target[property];
if (!isStructured) {
this[path] = target[property];
} else {
if (this.__data__[path] != value) {
this.set(path, value);
}
}
}
}
};
},
prepareInstance: function (inst) {
inst.__data__ = Object.create(null);
},
setupBindListeners: function (inst) {
inst._bindListeners.forEach(function (info) {
var node = inst._nodes[info.index];
node.addEventListener(info.event, inst._notifyListener.bind(inst, info.changedFn));
});
}
};
Polymer.Base.extend(Polymer.Bind, {
_shouldAddListener: function (effect) {
return effect.name && effect.mode === '{' && !effect.negate && effect.kind != 'attribute';
},
_annotationEffect: function (source, value, effect) {
if (source != effect.value) {
value = this.get(effect.value);
this.__data__[effect.value] = value;
}
var calc = effect.negate ? !value : value;
if (!effect.customEvent || this._nodes[effect.index][effect.name] !== calc) {
return this._applyEffectValue(calc, effect);
}
},
_reflectEffect: function (source) {
this.reflectPropertyToAttribute(source);
},
_notifyEffect: function (source, value, effect, old, fromAbove) {
if (!fromAbove) {
this._notifyChange(source);
}
},
_functionEffect: function (source, value, fn, old, fromAbove) {
fn.call(this, source, value, old, fromAbove);
},
_observerEffect: function (source, value, effect, old) {
var fn = this[effect.method];
if (fn) {
fn.call(this, value, old);
} else {
this._warn(this._logf('_observerEffect', 'observer method `' + effect.method + '` not defined'));
}
},
_complexObserverEffect: function (source, value, effect) {
var fn = this[effect.method];
if (fn) {
var args = Polymer.Bind._marshalArgs(this.__data__, effect, source, value);
if (args) {
fn.apply(this, args);
}
} else {
this._warn(this._logf('_complexObserverEffect', 'observer method `' + effect.method + '` not defined'));
}
},
_computeEffect: function (source, value, effect) {
var args = Polymer.Bind._marshalArgs(this.__data__, effect, source, value);
if (args) {
var fn = this[effect.method];
if (fn) {
this.__setProperty(effect.property, fn.apply(this, args));
} else {
this._warn(this._logf('_computeEffect', 'compute method `' + effect.method + '` not defined'));
}
}
},
_annotatedComputationEffect: function (source, value, effect) {
var computedHost = this._rootDataHost || this;
var fn = computedHost[effect.method];
if (fn) {
var args = Polymer.Bind._marshalArgs(this.__data__, effect, source, value);
if (args) {
var computedvalue = fn.apply(computedHost, args);
if (effect.negate) {
computedvalue = !computedvalue;
}
this._applyEffectValue(computedvalue, effect);
}
} else {
computedHost._warn(computedHost._logf('_annotatedComputationEffect', 'compute method `' + effect.method + '` not defined'));
}
},
_marshalArgs: function (model, effect, path, value) {
var values = [];
var args = effect.args;
for (var i = 0, l = args.length; i < l; i++) {
var arg = args[i];
var name = arg.name;
var v;
if (arg.literal) {
v = arg.value;
} else if (arg.structured) {
v = Polymer.Base.get(name, model);
} else {
v = model[name];
}
if (args.length > 1 && v === undefined) {
return;
}
if (arg.wildcard) {
var baseChanged = name.indexOf(path + '.') === 0;
var matches = effect.trigger.name.indexOf(name) === 0 && !baseChanged;
values[i] = {
path: matches ? path : name,
value: matches ? value : v,
base: v
};
} else {
values[i] = v;
}
}
return values;
}
});
Polymer.Base._addFeature({
_addPropertyEffect: function (property, kind, effect) {
Polymer.Bind.addPropertyEffect(this, property, kind, effect);
},
_prepEffects: function () {
Polymer.Bind.prepareModel(this);
this._addAnnotationEffects(this._notes);
},
_prepBindings: function () {
Polymer.Bind.createBindings(this);
},
_addPropertyEffects: function (properties) {
if (properties) {
for (var p in properties) {
var prop = properties[p];
if (prop.observer) {
this._addObserverEffect(p, prop.observer);
}
if (prop.computed) {
prop.readOnly = true;
this._addComputedEffect(p, prop.computed);
}
if (prop.notify) {
this._addPropertyEffect(p, 'notify');
}
if (prop.reflectToAttribute) {
this._addPropertyEffect(p, 'reflect');
}
if (prop.readOnly) {
Polymer.Bind.ensurePropertyEffects(this, p);
}
}
}
},
_addComputedEffect: function (name, expression) {
var sig = this._parseMethod(expression);
sig.args.forEach(function (arg) {
this._addPropertyEffect(arg.model, 'compute', {
method: sig.method,
args: sig.args,
trigger: arg,
property: name
});
}, this);
},
_addObserverEffect: function (property, observer) {
this._addPropertyEffect(property, 'observer', {
method: observer,
property: property
});
},
_addComplexObserverEffects: function (observers) {
if (observers) {
observers.forEach(function (observer) {
this._addComplexObserverEffect(observer);
}, this);
}
},
_addComplexObserverEffect: function (observer) {
var sig = this._parseMethod(observer);
sig.args.forEach(function (arg) {
this._addPropertyEffect(arg.model, 'complexObserver', {
method: sig.method,
args: sig.args,
trigger: arg
});
}, this);
},
_addAnnotationEffects: function (notes) {
this._nodes = [];
notes.forEach(function (note) {
var index = this._nodes.push(note) - 1;
note.bindings.forEach(function (binding) {
this._addAnnotationEffect(binding, index);
}, this);
}, this);
},
_addAnnotationEffect: function (note, index) {
if (Polymer.Bind._shouldAddListener(note)) {
Polymer.Bind._addAnnotatedListener(this, index, note.name, note.value, note.event);
}
if (note.signature) {
this._addAnnotatedComputationEffect(note, index);
} else {
note.index = index;
this._addPropertyEffect(note.model, 'annotation', note);
}
},
_addAnnotatedComputationEffect: function (note, index) {
var sig = note.signature;
if (sig.static) {
this.__addAnnotatedComputationEffect('__static__', index, note, sig, null);
} else {
sig.args.forEach(function (arg) {
if (!arg.literal) {
this.__addAnnotatedComputationEffect(arg.model, index, note, sig, arg);
}
}, this);
}
},
__addAnnotatedComputationEffect: function (property, index, note, sig, trigger) {
this._addPropertyEffect(property, 'annotatedComputation', {
index: index,
kind: note.kind,
property: note.name,
negate: note.negate,
method: sig.method,
args: sig.args,
trigger: trigger
});
},
_parseMethod: function (expression) {
var m = expression.match(/(\w*)\((.*)\)/);
if (m) {
var sig = {
method: m[1],
static: true
};
if (m[2].trim()) {
var args = m[2].replace(/\\,/g, '&comma;').split(',');
return this._parseArgs(args, sig);
} else {
sig.args = Polymer.nar;
return sig;
}
}
},
_parseArgs: function (argList, sig) {
sig.args = argList.map(function (rawArg) {
var arg = this._parseArg(rawArg);
if (!arg.literal) {
sig.static = false;
}
return arg;
}, this);
return sig;
},
_parseArg: function (rawArg) {
var arg = rawArg.trim().replace(/&comma;/g, ',').replace(/\\(.)/g, '$1');
var a = {
name: arg,
model: this._modelForPath(arg)
};
var fc = arg[0];
if (fc >= '0' && fc <= '9') {
fc = '#';
}
switch (fc) {
case '\'':
case '"':
a.value = arg.slice(1, -1);
a.literal = true;
break;
case '#':
a.value = Number(arg);
a.literal = true;
break;
}
if (!a.literal) {
a.structured = arg.indexOf('.') > 0;
if (a.structured) {
a.wildcard = arg.slice(-2) == '.*';
if (a.wildcard) {
a.name = arg.slice(0, -2);
}
}
}
return a;
},
_marshalInstanceEffects: function () {
Polymer.Bind.prepareInstance(this);
Polymer.Bind.setupBindListeners(this);
},
_applyEffectValue: function (value, info) {
var node = this._nodes[info.index];
var property = info.property || info.name || 'textContent';
if (info.kind == 'attribute') {
this.serializeValueToAttribute(value, property, node);
} else {
if (property === 'className') {
value = this._scopeElementClass(node, value);
}
if (property === 'textContent' || node.localName == 'input' && property == 'value') {
value = value == undefined ? '' : value;
}
return node[property] = value;
}
},
_executeStaticEffects: function () {
if (this._propertyEffects.__static__) {
this._effectEffects('__static__', null, this._propertyEffects.__static__);
}
}
});
Polymer.Base._addFeature({
_setupConfigure: function (initialConfig) {
this._config = initialConfig || {};
this._handlers = [];
},
_marshalAttributes: function () {
this._takeAttributesToModel(this._config);
},
_configValue: function (name, value) {
this._config[name] = value;
},
_beforeClientsReady: function () {
this._configure();
},
_configure: function () {
this._configureAnnotationReferences();
this._aboveConfig = this.mixin({}, this._config);
var config = {};
this.behaviors.forEach(function (b) {
this._configureProperties(b.properties, config);
}, this);
this._configureProperties(this.properties, config);
this._mixinConfigure(config, this._aboveConfig);
this._config = config;
this._distributeConfig(this._config);
},
_configureProperties: function (properties, config) {
for (var i in properties) {
var c = properties[i];
if (c.value !== undefined) {
var value = c.value;
if (typeof value == 'function') {
value = value.call(this, this._config);
}
config[i] = value;
}
}
},
_mixinConfigure: function (a, b) {
for (var prop in b) {
if (!this.getPropertyInfo(prop).readOnly) {
a[prop] = b[prop];
}
}
},
_distributeConfig: function (config) {
var fx$ = this._propertyEffects;
if (fx$) {
for (var p in config) {
var fx = fx$[p];
if (fx) {
for (var i = 0, l = fx.length, x; i < l && (x = fx[i]); i++) {
if (x.kind === 'annotation') {
var node = this._nodes[x.effect.index];
if (node._configValue) {
var value = p === x.effect.value ? config[p] : this.get(x.effect.value, config);
node._configValue(x.effect.name, value);
}
}
}
}
}
}
},
_afterClientsReady: function () {
this._executeStaticEffects();
this._applyConfig(this._config, this._aboveConfig);
this._flushHandlers();
},
_applyConfig: function (config, aboveConfig) {
for (var n in config) {
if (this[n] === undefined) {
this.__setProperty(n, config[n], n in aboveConfig);
}
}
},
_notifyListener: function (fn, e) {
if (!this._clientsReadied) {
this._queueHandler([
fn,
e,
e.target
]);
} else {
return fn.call(this, e, e.target);
}
},
_queueHandler: function (args) {
this._handlers.push(args);
},
_flushHandlers: function () {
var h$ = this._handlers;
for (var i = 0, l = h$.length, h; i < l && (h = h$[i]); i++) {
h[0].call(this, h[1], h[2]);
}
}
});
(function () {
'use strict';
Polymer.Base._addFeature({
notifyPath: function (path, value, fromAbove) {
var old = this._propertySetter(path, value);
if (old !== value && (old === old || value === value)) {
this._pathEffector(path, value);
if (!fromAbove) {
this._notifyPath(path, value);
}
return true;
}
},
_getPathParts: function (path) {
if (Array.isArray(path)) {
var parts = [];
for (var i = 0; i < path.length; i++) {
var args = path[i].toString().split('.');
for (var j = 0; j < args.length; j++) {
parts.push(args[j]);
}
}
return parts;
} else {
return path.toString().split('.');
}
},
set: function (path, value, root) {
var prop = root || this;
var parts = this._getPathParts(path);
var array;
var last = parts[parts.length - 1];
if (parts.length > 1) {
for (var i = 0; i < parts.length - 1; i++) {
prop = prop[parts[i]];
if (array) {
parts[i] = Polymer.Collection.get(array).getKey(prop);
}
if (!prop) {
return;
}
array = Array.isArray(prop) ? prop : null;
}
if (array) {
var coll = Polymer.Collection.get(array);
var old = prop[last];
var key = coll.getKey(old);
if (key) {
parts[i] = key;
coll.setItem(key, value);
}
}
prop[last] = value;
if (!root) {
this.notifyPath(parts.join('.'), value);
}
} else {
prop[path] = value;
}
},
get: function (path, root) {
var prop = root || this;
var parts = this._getPathParts(path);
var last = parts.pop();
while (parts.length) {
prop = prop[parts.shift()];
if (!prop) {
return;
}
}
return prop[last];
},
_pathEffector: function (path, value) {
var model = this._modelForPath(path);
var fx$ = this._propertyEffects[model];
if (fx$) {
fx$.forEach(function (fx) {
var fxFn = this['_' + fx.kind + 'PathEffect'];
if (fxFn) {
fxFn.call(this, path, value, fx.effect);
}
}, this);
}
if (this._boundPaths) {
this._notifyBoundPaths(path, value);
}
},
_annotationPathEffect: function (path, value, effect) {
if (effect.value === path || effect.value.indexOf(path + '.') === 0) {
Polymer.Bind._annotationEffect.call(this, path, value, effect);
} else if (path.indexOf(effect.value + '.') === 0 && !effect.negate) {
var node = this._nodes[effect.index];
if (node && node.notifyPath) {
var p = this._fixPath(effect.name, effect.value, path);
node.notifyPath(p, value, true);
}
}
},
_complexObserverPathEffect: function (path, value, effect) {
if (this._pathMatchesEffect(path, effect)) {
Polymer.Bind._complexObserverEffect.call(this, path, value, effect);
}
},
_computePathEffect: function (path, value, effect) {
if (this._pathMatchesEffect(path, effect)) {
Polymer.Bind._computeEffect.call(this, path, value, effect);
}
},
_annotatedComputationPathEffect: function (path, value, effect) {
if (this._pathMatchesEffect(path, effect)) {
Polymer.Bind._annotatedComputationEffect.call(this, path, value, effect);
}
},
_pathMatchesEffect: function (path, effect) {
var effectArg = effect.trigger.name;
return effectArg == path || effectArg.indexOf(path + '.') === 0 || effect.trigger.wildcard && path.indexOf(effectArg) === 0;
},
linkPaths: function (to, from) {
this._boundPaths = this._boundPaths || {};
if (from) {
this._boundPaths[to] = from;
} else {
this.unbindPath(to);
}
},
unlinkPaths: function (path) {
if (this._boundPaths) {
delete this._boundPaths[path];
}
},
_notifyBoundPaths: function (path, value) {
var from, to;
for (var a in this._boundPaths) {
var b = this._boundPaths[a];
if (path.indexOf(a + '.') == 0) {
from = a;
to = b;
break;
}
if (path.indexOf(b + '.') == 0) {
from = b;
to = a;
break;
}
}
if (from && to) {
var p = this._fixPath(to, from, path);
this.notifyPath(p, value);
}
},
_fixPath: function (property, root, path) {
return property + path.slice(root.length);
},
_notifyPath: function (path, value) {
var rootName = this._modelForPath(path);
var dashCaseName = Polymer.CaseMap.camelToDashCase(rootName);
var eventName = dashCaseName + this._EVENT_CHANGED;
this.fire(eventName, {
path: path,
value: value
}, { bubbles: false });
},
_modelForPath: function (path) {
var dot = path.indexOf('.');
return dot < 0 ? path : path.slice(0, dot);
},
_EVENT_CHANGED: '-changed',
_notifySplice: function (array, path, index, added, removed) {
var splices = [{
index: index,
addedCount: added,
removed: removed,
object: array,
type: 'splice'
}];
var change = {
keySplices: Polymer.Collection.applySplices(array, splices),
indexSplices: splices
};
this.set(path + '.splices', change);
if (added != removed.length) {
this.notifyPath(path + '.length', array.length);
}
change.keySplices = null;
change.indexSplices = null;
},
push: function (path) {
var array = this.get(path);
var args = Array.prototype.slice.call(arguments, 1);
var len = array.length;
var ret = array.push.apply(array, args);
this._notifySplice(array, path, len, args.length, []);
return ret;
},
pop: function (path) {
var array = this.get(path);
var args = Array.prototype.slice.call(arguments, 1);
var rem = array.slice(-1);
var ret = array.pop.apply(array, args);
this._notifySplice(array, path, array.length, 0, rem);
return ret;
},
splice: function (path, start, deleteCount) {
var array = this.get(path);
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.splice.apply(array, args);
this._notifySplice(array, path, start, args.length - 2, ret);
return ret;
},
shift: function (path) {
var array = this.get(path);
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.shift.apply(array, args);
this._notifySplice(array, path, 0, 0, [ret]);
return ret;
},
unshift: function (path) {
var array = this.get(path);
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.unshift.apply(array, args);
this._notifySplice(array, path, 0, args.length, []);
return ret;
}
});
}());
Polymer.Base._addFeature({
resolveUrl: function (url) {
var module = Polymer.DomModule.import(this.is);
var root = '';
if (module) {
var assetPath = module.getAttribute('assetpath') || '';
root = Polymer.ResolveUrl.resolveUrl(assetPath, module.ownerDocument.baseURI);
}
return Polymer.ResolveUrl.resolveUrl(url, root);
}
});
Polymer.CssParse = function () {
var api = {
parse: function (text) {
text = this._clean(text);
return this._parseCss(this._lex(text), text);
},
_clean: function (cssText) {
return cssText.replace(rx.comments, '').replace(rx.port, '');
},
_lex: function (text) {
var root = {
start: 0,
end: text.length
};
var n = root;
for (var i = 0, s = 0, l = text.length; i < l; i++) {
switch (text[i]) {
case this.OPEN_BRACE:
if (!n.rules) {
n.rules = [];
}
var p = n;
var previous = p.rules[p.rules.length - 1];
n = {
start: i + 1,
parent: p,
previous: previous
};
p.rules.push(n);
break;
case this.CLOSE_BRACE:
n.end = i + 1;
n = n.parent || root;
break;
}
}
return root;
},
_parseCss: function (node, text) {
var t = text.substring(node.start, node.end - 1);
node.parsedCssText = node.cssText = t.trim();
if (node.parent) {
var ss = node.previous ? node.previous.end : node.parent.start;
t = text.substring(ss, node.start - 1);
t = t.substring(t.lastIndexOf(';') + 1);
var s = node.parsedSelector = node.selector = t.trim();
node.atRule = s.indexOf(AT_START) === 0;
if (node.atRule) {
if (s.indexOf(MEDIA_START) === 0) {
node.type = this.types.MEDIA_RULE;
} else if (s.match(rx.keyframesRule)) {
node.type = this.types.KEYFRAMES_RULE;
}
} else {
if (s.indexOf(VAR_START) === 0) {
node.type = this.types.MIXIN_RULE;
} else {
node.type = this.types.STYLE_RULE;
}
}
}
var r$ = node.rules;
if (r$) {
for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
this._parseCss(r, text);
}
}
return node;
},
stringify: function (node, preserveProperties, text) {
text = text || '';
var cssText = '';
if (node.cssText || node.rules) {
var r$ = node.rules;
if (r$ && (preserveProperties || !hasMixinRules(r$))) {
for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
cssText = this.stringify(r, preserveProperties, cssText);
}
} else {
cssText = preserveProperties ? node.cssText : removeCustomProps(node.cssText);
cssText = cssText.trim();
if (cssText) {
cssText = '  ' + cssText + '\n';
}
}
}
if (cssText) {
if (node.selector) {
text += node.selector + ' ' + this.OPEN_BRACE + '\n';
}
text += cssText;
if (node.selector) {
text += this.CLOSE_BRACE + '\n\n';
}
}
return text;
},
types: {
STYLE_RULE: 1,
KEYFRAMES_RULE: 7,
MEDIA_RULE: 4,
MIXIN_RULE: 1000
},
OPEN_BRACE: '{',
CLOSE_BRACE: '}'
};
function hasMixinRules(rules) {
return rules[0].selector.indexOf(VAR_START) >= 0;
}
function removeCustomProps(cssText) {
return cssText.replace(rx.customProp, '').replace(rx.mixinProp, '').replace(rx.mixinApply, '').replace(rx.varApply, '');
}
var VAR_START = '--';
var MEDIA_START = '@media';
var AT_START = '@';
var rx = {
comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
port: /@import[^;]*;/gim,
customProp: /(?:^|[\s;])--[^;{]*?:[^{};]*?(?:[;\n]|$)/gim,
mixinProp: /(?:^|[\s;])--[^;{]*?:[^{;]*?{[^}]*?}(?:[;\n]|$)?/gim,
mixinApply: /@apply[\s]*\([^)]*?\)[\s]*(?:[;\n]|$)?/gim,
varApply: /[^;:]*?:[^;]*var[^;]*(?:[;\n]|$)?/gim,
keyframesRule: /^@[^\s]*keyframes/
};
return api;
}();
Polymer.StyleUtil = function () {
return {
MODULE_STYLES_SELECTOR: 'style, link[rel=import][type~=css]',
toCssText: function (rules, callback, preserveProperties) {
if (typeof rules === 'string') {
rules = this.parser.parse(rules);
}
if (callback) {
this.forEachStyleRule(rules, callback);
}
return this.parser.stringify(rules, preserveProperties);
},
forRulesInStyles: function (styles, callback) {
if (styles) {
for (var i = 0, l = styles.length, s; i < l && (s = styles[i]); i++) {
this.forEachStyleRule(this.rulesForStyle(s), callback);
}
}
},
rulesForStyle: function (style) {
if (!style.__cssRules && style.textContent) {
style.__cssRules = this.parser.parse(style.textContent);
}
return style.__cssRules;
},
clearStyleRules: function (style) {
style.__cssRules = null;
},
forEachStyleRule: function (node, callback) {
var s = node.selector;
var skipRules = false;
if (node.type === this.ruleTypes.STYLE_RULE) {
callback(node);
} else if (node.type === this.ruleTypes.KEYFRAMES_RULE || node.type === this.ruleTypes.MIXIN_RULE) {
skipRules = true;
}
var r$ = node.rules;
if (r$ && !skipRules) {
for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
this.forEachStyleRule(r, callback);
}
}
},
applyCss: function (cssText, moniker, target, afterNode) {
var style = document.createElement('style');
if (moniker) {
style.setAttribute('scope', moniker);
}
style.textContent = cssText;
target = target || document.head;
if (!afterNode) {
var n$ = target.querySelectorAll('style[scope]');
afterNode = n$[n$.length - 1];
}
target.insertBefore(style, afterNode && afterNode.nextSibling || target.firstChild);
return style;
},
cssFromModule: function (moduleId) {
var m = Polymer.DomModule.import(moduleId);
if (m && !m._cssText) {
var cssText = '';
var e$ = Array.prototype.slice.call(m.querySelectorAll(this.MODULE_STYLES_SELECTOR));
for (var i = 0, e; i < e$.length; i++) {
e = e$[i];
if (e.localName === 'style') {
e = e.__appliedElement || e;
e.parentNode.removeChild(e);
} else {
e = e.import && e.import.body;
}
if (e) {
cssText += Polymer.ResolveUrl.resolveCss(e.textContent, e.ownerDocument);
}
}
m._cssText = cssText;
}
return m && m._cssText || '';
},
parser: Polymer.CssParse,
ruleTypes: Polymer.CssParse.types
};
}();
Polymer.StyleTransformer = function () {
var nativeShadow = Polymer.Settings.useNativeShadow;
var styleUtil = Polymer.StyleUtil;
var api = {
dom: function (node, scope, useAttr, shouldRemoveScope) {
this._transformDom(node, scope || '', useAttr, shouldRemoveScope);
},
_transformDom: function (node, selector, useAttr, shouldRemoveScope) {
if (node.setAttribute) {
this.element(node, selector, useAttr, shouldRemoveScope);
}
var c$ = Polymer.dom(node).childNodes;
for (var i = 0; i < c$.length; i++) {
this._transformDom(c$[i], selector, useAttr, shouldRemoveScope);
}
},
element: function (element, scope, useAttr, shouldRemoveScope) {
if (useAttr) {
if (shouldRemoveScope) {
element.removeAttribute(SCOPE_NAME);
} else {
element.setAttribute(SCOPE_NAME, scope);
}
} else {
if (scope) {
if (element.classList) {
if (shouldRemoveScope) {
element.classList.remove(SCOPE_NAME);
element.classList.remove(scope);
} else {
element.classList.add(SCOPE_NAME);
element.classList.add(scope);
}
} else if (element.getAttribute) {
var c = element.getAttribute(CLASS);
if (shouldRemoveScope) {
if (c) {
element.setAttribute(CLASS, c.replace(SCOPE_NAME, '').replace(scope, ''));
}
} else {
element.setAttribute(CLASS, c + (c ? ' ' : '') + SCOPE_NAME + ' ' + scope);
}
}
}
}
},
elementStyles: function (element, callback) {
var styles = element._styles;
var cssText = '';
for (var i = 0, l = styles.length, s, text; i < l && (s = styles[i]); i++) {
var rules = styleUtil.rulesForStyle(s);
cssText += nativeShadow ? styleUtil.toCssText(rules, callback) : this.css(rules, element.is, element.extends, callback, element._scopeCssViaAttr) + '\n\n';
}
return cssText.trim();
},
css: function (rules, scope, ext, callback, useAttr) {
var hostScope = this._calcHostScope(scope, ext);
scope = this._calcElementScope(scope, useAttr);
var self = this;
return styleUtil.toCssText(rules, function (rule) {
if (!rule.isScoped) {
self.rule(rule, scope, hostScope);
rule.isScoped = true;
}
if (callback) {
callback(rule, scope, hostScope);
}
});
},
_calcElementScope: function (scope, useAttr) {
if (scope) {
return useAttr ? CSS_ATTR_PREFIX + scope + CSS_ATTR_SUFFIX : CSS_CLASS_PREFIX + scope;
} else {
return '';
}
},
_calcHostScope: function (scope, ext) {
return ext ? '[is=' + scope + ']' : scope;
},
rule: function (rule, scope, hostScope) {
this._transformRule(rule, this._transformComplexSelector, scope, hostScope);
},
_transformRule: function (rule, transformer, scope, hostScope) {
var p$ = rule.selector.split(COMPLEX_SELECTOR_SEP);
for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
p$[i] = transformer.call(this, p, scope, hostScope);
}
rule.selector = p$.join(COMPLEX_SELECTOR_SEP);
},
_transformComplexSelector: function (selector, scope, hostScope) {
var stop = false;
var hostContext = false;
var self = this;
selector = selector.replace(SIMPLE_SELECTOR_SEP, function (m, c, s) {
if (!stop) {
var info = self._transformCompoundSelector(s, c, scope, hostScope);
stop = stop || info.stop;
hostContext = hostContext || info.hostContext;
c = info.combinator;
s = info.value;
} else {
s = s.replace(SCOPE_JUMP, ' ');
}
return c + s;
});
if (hostContext) {
selector = selector.replace(HOST_CONTEXT_PAREN, function (m, pre, paren, post) {
return pre + paren + ' ' + hostScope + post + COMPLEX_SELECTOR_SEP + ' ' + pre + hostScope + paren + post;
});
}
return selector;
},
_transformCompoundSelector: function (selector, combinator, scope, hostScope) {
var jumpIndex = selector.search(SCOPE_JUMP);
var hostContext = false;
if (selector.indexOf(HOST_CONTEXT) >= 0) {
hostContext = true;
} else if (selector.indexOf(HOST) >= 0) {
selector = selector.replace(HOST_PAREN, function (m, host, paren) {
return hostScope + paren;
});
selector = selector.replace(HOST, hostScope);
} else if (jumpIndex !== 0) {
selector = scope ? this._transformSimpleSelector(selector, scope) : selector;
}
if (selector.indexOf(CONTENT) >= 0) {
combinator = '';
}
var stop;
if (jumpIndex >= 0) {
selector = selector.replace(SCOPE_JUMP, ' ');
stop = true;
}
return {
value: selector,
combinator: combinator,
stop: stop,
hostContext: hostContext
};
},
_transformSimpleSelector: function (selector, scope) {
var p$ = selector.split(PSEUDO_PREFIX);
p$[0] += scope;
return p$.join(PSEUDO_PREFIX);
},
documentRule: function (rule) {
rule.selector = rule.parsedSelector;
this.normalizeRootSelector(rule);
if (!nativeShadow) {
this._transformRule(rule, this._transformDocumentSelector);
}
},
normalizeRootSelector: function (rule) {
if (rule.selector === ROOT) {
rule.selector = 'body';
}
},
_transformDocumentSelector: function (selector) {
return selector.match(SCOPE_JUMP) ? this._transformComplexSelector(selector, SCOPE_DOC_SELECTOR) : this._transformSimpleSelector(selector.trim(), SCOPE_DOC_SELECTOR);
},
SCOPE_NAME: 'style-scope'
};
var SCOPE_NAME = api.SCOPE_NAME;
var SCOPE_DOC_SELECTOR = ':not([' + SCOPE_NAME + '])' + ':not(.' + SCOPE_NAME + ')';
var COMPLEX_SELECTOR_SEP = ',';
var SIMPLE_SELECTOR_SEP = /(^|[\s>+~]+)([^\s>+~]+)/g;
var HOST = ':host';
var ROOT = ':root';
var HOST_PAREN = /(\:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/g;
var HOST_CONTEXT = ':host-context';
var HOST_CONTEXT_PAREN = /(.*)(?:\:host-context)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))(.*)/;
var CONTENT = '::content';
var SCOPE_JUMP = /\:\:content|\:\:shadow|\/deep\//;
var CSS_CLASS_PREFIX = '.';
var CSS_ATTR_PREFIX = '[' + SCOPE_NAME + '~=';
var CSS_ATTR_SUFFIX = ']';
var PSEUDO_PREFIX = ':';
var CLASS = 'class';
return api;
}();
Polymer.StyleExtends = function () {
var styleUtil = Polymer.StyleUtil;
return {
hasExtends: function (cssText) {
return Boolean(cssText.match(this.rx.EXTEND));
},
transform: function (style) {
var rules = styleUtil.rulesForStyle(style);
var self = this;
styleUtil.forEachStyleRule(rules, function (rule) {
var map = self._mapRule(rule);
if (rule.parent) {
var m;
while (m = self.rx.EXTEND.exec(rule.cssText)) {
var extend = m[1];
var extendor = self._findExtendor(extend, rule);
if (extendor) {
self._extendRule(rule, extendor);
}
}
}
rule.cssText = rule.cssText.replace(self.rx.EXTEND, '');
});
return styleUtil.toCssText(rules, function (rule) {
if (rule.selector.match(self.rx.STRIP)) {
rule.cssText = '';
}
}, true);
},
_mapRule: function (rule) {
if (rule.parent) {
var map = rule.parent.map || (rule.parent.map = {});
var parts = rule.selector.split(',');
for (var i = 0, p; i < parts.length; i++) {
p = parts[i];
map[p.trim()] = rule;
}
return map;
}
},
_findExtendor: function (extend, rule) {
return rule.parent && rule.parent.map && rule.parent.map[extend] || this._findExtendor(extend, rule.parent);
},
_extendRule: function (target, source) {
if (target.parent !== source.parent) {
this._cloneAndAddRuleToParent(source, target.parent);
}
target.extends = target.extends || (target.extends = []);
target.extends.push(source);
source.selector = source.selector.replace(this.rx.STRIP, '');
source.selector = (source.selector && source.selector + ',\n') + target.selector;
if (source.extends) {
source.extends.forEach(function (e) {
this._extendRule(target, e);
}, this);
}
},
_cloneAndAddRuleToParent: function (rule, parent) {
rule = Object.create(rule);
rule.parent = parent;
if (rule.extends) {
rule.extends = rule.extends.slice();
}
parent.rules.push(rule);
},
rx: {
EXTEND: /@extends\(([^)]*)\)\s*?;/gim,
STRIP: /%[^,]*$/
}
};
}();
(function () {
var prepElement = Polymer.Base._prepElement;
var nativeShadow = Polymer.Settings.useNativeShadow;
var styleUtil = Polymer.StyleUtil;
var styleTransformer = Polymer.StyleTransformer;
var styleExtends = Polymer.StyleExtends;
Polymer.Base._addFeature({
_prepElement: function (element) {
if (this._encapsulateStyle) {
styleTransformer.element(element, this.is, this._scopeCssViaAttr);
}
prepElement.call(this, element);
},
_prepStyles: function () {
if (this._encapsulateStyle === undefined) {
this._encapsulateStyle = !nativeShadow && Boolean(this._template);
}
this._styles = this._collectStyles();
var cssText = styleTransformer.elementStyles(this);
if (cssText && this._template) {
var style = styleUtil.applyCss(cssText, this.is, nativeShadow ? this._template.content : null);
if (!nativeShadow) {
this._scopeStyle = style;
}
}
},
_collectStyles: function () {
var styles = [];
var cssText = '', m$ = this.styleModules;
if (m$) {
for (var i = 0, l = m$.length, m; i < l && (m = m$[i]); i++) {
cssText += styleUtil.cssFromModule(m);
}
}
cssText += styleUtil.cssFromModule(this.is);
if (cssText) {
var style = document.createElement('style');
style.textContent = cssText;
if (styleExtends.hasExtends(style.textContent)) {
cssText = styleExtends.transform(style);
}
styles.push(style);
}
return styles;
},
_elementAdd: function (node) {
if (this._encapsulateStyle) {
if (node.__styleScoped) {
node.__styleScoped = false;
} else {
styleTransformer.dom(node, this.is, this._scopeCssViaAttr);
}
}
},
_elementRemove: function (node) {
if (this._encapsulateStyle) {
styleTransformer.dom(node, this.is, this._scopeCssViaAttr, true);
}
},
scopeSubtree: function (container, shouldObserve) {
if (nativeShadow) {
return;
}
var self = this;
var scopify = function (node) {
if (node.nodeType === Node.ELEMENT_NODE) {
node.className = self._scopeElementClass(node, node.className);
var n$ = node.querySelectorAll('*');
Array.prototype.forEach.call(n$, function (n) {
n.className = self._scopeElementClass(n, n.className);
});
}
};
scopify(container);
if (shouldObserve) {
var mo = new MutationObserver(function (mxns) {
mxns.forEach(function (m) {
if (m.addedNodes) {
for (var i = 0; i < m.addedNodes.length; i++) {
scopify(m.addedNodes[i]);
}
}
});
});
mo.observe(container, {
childList: true,
subtree: true
});
return mo;
}
}
});
}());
Polymer.StyleProperties = function () {
'use strict';
var nativeShadow = Polymer.Settings.useNativeShadow;
var matchesSelector = Polymer.DomApi.matchesSelector;
var styleUtil = Polymer.StyleUtil;
var styleTransformer = Polymer.StyleTransformer;
return {
decorateStyles: function (styles) {
var self = this, props = {};
styleUtil.forRulesInStyles(styles, function (rule) {
self.decorateRule(rule);
self.collectPropertiesInCssText(rule.propertyInfo.cssText, props);
});
var names = [];
for (var i in props) {
names.push(i);
}
return names;
},
decorateRule: function (rule) {
if (rule.propertyInfo) {
return rule.propertyInfo;
}
var info = {}, properties = {};
var hasProperties = this.collectProperties(rule, properties);
if (hasProperties) {
info.properties = properties;
rule.rules = null;
}
info.cssText = this.collectCssText(rule);
rule.propertyInfo = info;
return info;
},
collectProperties: function (rule, properties) {
var info = rule.propertyInfo;
if (info) {
if (info.properties) {
Polymer.Base.mixin(properties, info.properties);
return true;
}
} else {
var m, rx = this.rx.VAR_ASSIGN;
var cssText = rule.parsedCssText;
var any;
while (m = rx.exec(cssText)) {
properties[m[1]] = (m[2] || m[3]).trim();
any = true;
}
return any;
}
},
collectCssText: function (rule) {
var customCssText = '';
var cssText = rule.parsedCssText;
cssText = cssText.replace(this.rx.BRACKETED, '').replace(this.rx.VAR_ASSIGN, '');
var parts = cssText.split(';');
for (var i = 0, p; i < parts.length; i++) {
p = parts[i];
if (p.match(this.rx.MIXIN_MATCH) || p.match(this.rx.VAR_MATCH)) {
customCssText += p + ';\n';
}
}
return customCssText;
},
collectPropertiesInCssText: function (cssText, props) {
var m;
while (m = this.rx.VAR_CAPTURE.exec(cssText)) {
props[m[1]] = true;
var def = m[2];
if (def && def.match(this.rx.IS_VAR)) {
props[def] = true;
}
}
},
reify: function (props) {
var names = Object.getOwnPropertyNames(props);
for (var i = 0, n; i < names.length; i++) {
n = names[i];
props[n] = this.valueForProperty(props[n], props);
}
},
valueForProperty: function (property, props) {
if (property) {
if (property.indexOf(';') >= 0) {
property = this.valueForProperties(property, props);
} else {
var self = this;
var fn = function (all, prefix, value, fallback) {
var propertyValue = self.valueForProperty(props[value], props) || (props[fallback] ? self.valueForProperty(props[fallback], props) : fallback);
return prefix + (propertyValue || '');
};
property = property.replace(this.rx.VAR_MATCH, fn);
}
}
return property && property.trim() || '';
},
valueForProperties: function (property, props) {
var parts = property.split(';');
for (var i = 0, p, m; i < parts.length && (p = parts[i]); i++) {
m = p.match(this.rx.MIXIN_MATCH);
if (m) {
p = this.valueForProperty(props[m[1]], props);
} else {
var pp = p.split(':');
if (pp[1]) {
pp[1] = pp[1].trim();
pp[1] = this.valueForProperty(pp[1], props) || pp[1];
}
p = pp.join(':');
}
parts[i] = p && p.lastIndexOf(';') === p.length - 1 ? p.slice(0, -1) : p || '';
}
return parts.join(';');
},
applyProperties: function (rule, props) {
var output = '';
if (!rule.propertyInfo) {
this.decorateRule(rule);
}
if (rule.propertyInfo.cssText) {
output = this.valueForProperties(rule.propertyInfo.cssText, props);
}
rule.cssText = output;
},
propertyDataFromStyles: function (styles, element) {
var props = {}, self = this;
var o = [], i = 0;
styleUtil.forRulesInStyles(styles, function (rule) {
if (!rule.propertyInfo) {
self.decorateRule(rule);
}
if (element && rule.propertyInfo.properties && matchesSelector.call(element, rule.selector)) {
self.collectProperties(rule, props);
addToBitMask(i, o);
}
i++;
});
return {
properties: props,
key: o
};
},
scopePropertiesFromStyles: function (styles) {
if (!styles._scopeStyleProperties) {
styles._scopeStyleProperties = this.selectedPropertiesFromStyles(styles, this.SCOPE_SELECTORS);
}
return styles._scopeStyleProperties;
},
hostPropertiesFromStyles: function (styles) {
if (!styles._hostStyleProperties) {
styles._hostStyleProperties = this.selectedPropertiesFromStyles(styles, this.HOST_SELECTORS);
}
return styles._hostStyleProperties;
},
selectedPropertiesFromStyles: function (styles, selectors) {
var props = {}, self = this;
styleUtil.forRulesInStyles(styles, function (rule) {
if (!rule.propertyInfo) {
self.decorateRule(rule);
}
for (var i = 0; i < selectors.length; i++) {
if (rule.parsedSelector === selectors[i]) {
self.collectProperties(rule, props);
return;
}
}
});
return props;
},
transformStyles: function (element, properties, scopeSelector) {
var self = this;
var hostSelector = styleTransformer._calcHostScope(element.is, element.extends);
var rxHostSelector = element.extends ? '\\' + hostSelector.slice(0, -1) + '\\]' : hostSelector;
var hostRx = new RegExp(this.rx.HOST_PREFIX + rxHostSelector + this.rx.HOST_SUFFIX);
return styleTransformer.elementStyles(element, function (rule) {
self.applyProperties(rule, properties);
if (rule.cssText && !nativeShadow) {
self._scopeSelector(rule, hostRx, hostSelector, element._scopeCssViaAttr, scopeSelector);
}
});
},
_scopeSelector: function (rule, hostRx, hostSelector, viaAttr, scopeId) {
rule.transformedSelector = rule.transformedSelector || rule.selector;
var selector = rule.transformedSelector;
var scope = viaAttr ? '[' + styleTransformer.SCOPE_NAME + '~=' + scopeId + ']' : '.' + scopeId;
var parts = selector.split(',');
for (var i = 0, l = parts.length, p; i < l && (p = parts[i]); i++) {
parts[i] = p.match(hostRx) ? p.replace(hostSelector, hostSelector + scope) : scope + ' ' + p;
}
rule.selector = parts.join(',');
},
applyElementScopeSelector: function (element, selector, old, viaAttr) {
var c = viaAttr ? element.getAttribute(styleTransformer.SCOPE_NAME) : element.className;
var v = old ? c.replace(old, selector) : (c ? c + ' ' : '') + this.XSCOPE_NAME + ' ' + selector;
if (c !== v) {
if (viaAttr) {
element.setAttribute(styleTransformer.SCOPE_NAME, v);
} else {
element.className = v;
}
}
},
applyElementStyle: function (element, properties, selector, style) {
var cssText = style ? style.textContent || '' : this.transformStyles(element, properties, selector);
var s = element._customStyle;
if (s && !nativeShadow && s !== style) {
s._useCount--;
if (s._useCount <= 0 && s.parentNode) {
s.parentNode.removeChild(s);
}
}
if (nativeShadow || (!style || !style.parentNode)) {
if (nativeShadow && element._customStyle) {
element._customStyle.textContent = cssText;
style = element._customStyle;
} else if (cssText) {
style = styleUtil.applyCss(cssText, selector, nativeShadow ? element.root : null, element._scopeStyle);
}
}
if (style) {
style._useCount = style._useCount || 0;
if (element._customStyle != style) {
style._useCount++;
}
element._customStyle = style;
}
return style;
},
mixinCustomStyle: function (props, customStyle) {
var v;
for (var i in customStyle) {
v = customStyle[i];
if (v || v === 0) {
props[i] = v;
}
}
},
rx: {
VAR_ASSIGN: /(?:^|[;\n]\s*)(--[\w-]*?):\s*(?:([^;{]*)|{([^}]*)})(?:(?=[;\n])|$)/gi,
MIXIN_MATCH: /(?:^|\W+)@apply[\s]*\(([^)]*)\)/i,
VAR_MATCH: /(^|\W+)var\([\s]*([^,)]*)[\s]*,?[\s]*((?:[^,)]*)|(?:[^;]*\([^;)]*\)))[\s]*?\)/gi,
VAR_CAPTURE: /\([\s]*(--[^,\s)]*)(?:,[\s]*(--[^,\s)]*))?(?:\)|,)/gi,
IS_VAR: /^--/,
BRACKETED: /\{[^}]*\}/g,
HOST_PREFIX: '(?:^|[^.#[:])',
HOST_SUFFIX: '($|[.:[\\s>+~])'
},
HOST_SELECTORS: [':host'],
SCOPE_SELECTORS: [':root'],
XSCOPE_NAME: 'x-scope'
};
function addToBitMask(n, bits) {
var o = parseInt(n / 32);
var v = 1 << n % 32;
bits[o] = (bits[o] || 0) | v;
}
}();
(function () {
Polymer.StyleCache = function () {
this.cache = {};
};
Polymer.StyleCache.prototype = {
MAX: 100,
store: function (is, data, keyValues, keyStyles) {
data.keyValues = keyValues;
data.styles = keyStyles;
var s$ = this.cache[is] = this.cache[is] || [];
s$.push(data);
if (s$.length > this.MAX) {
s$.shift();
}
},
retrieve: function (is, keyValues, keyStyles) {
var cache = this.cache[is];
if (cache) {
for (var i = cache.length - 1, data; i >= 0; i--) {
data = cache[i];
if (keyStyles === data.styles && this._objectsEqual(keyValues, data.keyValues)) {
return data;
}
}
}
},
clear: function () {
this.cache = {};
},
_objectsEqual: function (target, source) {
var t, s;
for (var i in target) {
t = target[i], s = source[i];
if (!(typeof t === 'object' && t ? this._objectsStrictlyEqual(t, s) : t === s)) {
return false;
}
}
if (Array.isArray(target)) {
return target.length === source.length;
}
return true;
},
_objectsStrictlyEqual: function (target, source) {
return this._objectsEqual(target, source) && this._objectsEqual(source, target);
}
};
}());
Polymer.StyleDefaults = function () {
var styleProperties = Polymer.StyleProperties;
var styleUtil = Polymer.StyleUtil;
var StyleCache = Polymer.StyleCache;
var api = {
_styles: [],
_properties: null,
customStyle: {},
_styleCache: new StyleCache(),
addStyle: function (style) {
this._styles.push(style);
this._properties = null;
},
get _styleProperties() {
if (!this._properties) {
styleProperties.decorateStyles(this._styles);
this._styles._scopeStyleProperties = null;
this._properties = styleProperties.scopePropertiesFromStyles(this._styles);
styleProperties.mixinCustomStyle(this._properties, this.customStyle);
styleProperties.reify(this._properties);
}
return this._properties;
},
_needsStyleProperties: function () {
},
_computeStyleProperties: function () {
return this._styleProperties;
},
updateStyles: function (properties) {
this._properties = null;
if (properties) {
Polymer.Base.mixin(this.customStyle, properties);
}
this._styleCache.clear();
for (var i = 0, s; i < this._styles.length; i++) {
s = this._styles[i];
s = s.__importElement || s;
s._apply();
}
}
};
return api;
}();
(function () {
'use strict';
var serializeValueToAttribute = Polymer.Base.serializeValueToAttribute;
var propertyUtils = Polymer.StyleProperties;
var styleTransformer = Polymer.StyleTransformer;
var styleUtil = Polymer.StyleUtil;
var styleDefaults = Polymer.StyleDefaults;
var nativeShadow = Polymer.Settings.useNativeShadow;
Polymer.Base._addFeature({
_prepStyleProperties: function () {
this._ownStylePropertyNames = this._styles ? propertyUtils.decorateStyles(this._styles) : [];
},
_setupStyleProperties: function () {
this.customStyle = {};
},
_needsStyleProperties: function () {
return Boolean(this._ownStylePropertyNames && this._ownStylePropertyNames.length);
},
_beforeAttached: function () {
if (!this._scopeSelector && this._needsStyleProperties()) {
this._updateStyleProperties();
}
},
_findStyleHost: function () {
var e = this, root;
while (root = Polymer.dom(e).getOwnerRoot()) {
if (Polymer.isInstance(root.host)) {
return root.host;
}
e = root.host;
}
return styleDefaults;
},
_updateStyleProperties: function () {
var info, scope = this._findStyleHost();
if (!scope._styleCache) {
scope._styleCache = new Polymer.StyleCache();
}
var scopeData = propertyUtils.propertyDataFromStyles(scope._styles, this);
scopeData.key.customStyle = this.customStyle;
info = scope._styleCache.retrieve(this.is, scopeData.key, this._styles);
var scopeCached = Boolean(info);
if (scopeCached) {
this._styleProperties = info._styleProperties;
} else {
this._computeStyleProperties(scopeData.properties);
}
this._computeOwnStyleProperties();
if (!scopeCached) {
info = styleCache.retrieve(this.is, this._ownStyleProperties, this._styles);
}
var globalCached = Boolean(info) && !scopeCached;
var style = this._applyStyleProperties(info);
if (!scopeCached) {
style = style && nativeShadow ? style.cloneNode(true) : style;
info = {
style: style,
_scopeSelector: this._scopeSelector,
_styleProperties: this._styleProperties
};
scopeData.key.customStyle = {};
this.mixin(scopeData.key.customStyle, this.customStyle);
scope._styleCache.store(this.is, info, scopeData.key, this._styles);
if (!globalCached) {
styleCache.store(this.is, Object.create(info), this._ownStyleProperties, this._styles);
}
}
},
_computeStyleProperties: function (scopeProps) {
var scope = this._findStyleHost();
if (!scope._styleProperties) {
scope._computeStyleProperties();
}
var props = Object.create(scope._styleProperties);
this.mixin(props, propertyUtils.hostPropertiesFromStyles(this._styles));
scopeProps = scopeProps || propertyUtils.propertyDataFromStyles(scope._styles, this).properties;
this.mixin(props, scopeProps);
this.mixin(props, propertyUtils.scopePropertiesFromStyles(this._styles));
propertyUtils.mixinCustomStyle(props, this.customStyle);
propertyUtils.reify(props);
this._styleProperties = props;
},
_computeOwnStyleProperties: function () {
var props = {};
for (var i = 0, n; i < this._ownStylePropertyNames.length; i++) {
n = this._ownStylePropertyNames[i];
props[n] = this._styleProperties[n];
}
this._ownStyleProperties = props;
},
_scopeCount: 0,
_applyStyleProperties: function (info) {
var oldScopeSelector = this._scopeSelector;
this._scopeSelector = info ? info._scopeSelector : this.is + '-' + this.__proto__._scopeCount++;
var style = propertyUtils.applyElementStyle(this, this._styleProperties, this._scopeSelector, info && info.style);
if (!nativeShadow) {
propertyUtils.applyElementScopeSelector(this, this._scopeSelector, oldScopeSelector, this._scopeCssViaAttr);
}
return style;
},
serializeValueToAttribute: function (value, attribute, node) {
node = node || this;
if (attribute === 'class' && !nativeShadow) {
var host = node === this ? this.domHost || this.dataHost : this;
if (host) {
value = host._scopeElementClass(node, value);
}
}
node = Polymer.dom(node);
serializeValueToAttribute.call(this, value, attribute, node);
},
_scopeElementClass: function (element, selector) {
if (!nativeShadow && !this._scopeCssViaAttr) {
selector += (selector ? ' ' : '') + SCOPE_NAME + ' ' + this.is + (element._scopeSelector ? ' ' + XSCOPE_NAME + ' ' + element._scopeSelector : '');
}
return selector;
},
updateStyles: function (properties) {
if (this.isAttached) {
if (properties) {
this.mixin(this.customStyle, properties);
}
if (this._needsStyleProperties()) {
this._updateStyleProperties();
} else {
this._styleProperties = null;
}
if (this._styleCache) {
this._styleCache.clear();
}
this._updateRootStyles();
}
},
_updateRootStyles: function (root) {
root = root || this.root;
var c$ = Polymer.dom(root)._query(function (e) {
return e.shadyRoot || e.shadowRoot;
});
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
if (c.updateStyles) {
c.updateStyles();
}
}
}
});
Polymer.updateStyles = function (properties) {
styleDefaults.updateStyles(properties);
Polymer.Base._updateRootStyles(document);
};
var styleCache = new Polymer.StyleCache();
Polymer.customStyleCache = styleCache;
var SCOPE_NAME = styleTransformer.SCOPE_NAME;
var XSCOPE_NAME = propertyUtils.XSCOPE_NAME;
}());
Polymer.Base._addFeature({
_registerFeatures: function () {
this._prepIs();
this._prepAttributes();
this._prepConstructor();
this._prepTemplate();
this._prepStyles();
this._prepStyleProperties();
this._prepAnnotations();
this._prepEffects();
this._prepBehaviors();
this._prepBindings();
this._prepShady();
},
_prepBehavior: function (b) {
this._addPropertyEffects(b.properties);
this._addComplexObserverEffects(b.observers);
this._addHostAttributes(b.hostAttributes);
},
_initFeatures: function () {
this._poolContent();
this._setupConfigure();
this._setupStyleProperties();
this._pushHost();
this._stampTemplate();
this._popHost();
this._marshalAnnotationReferences();
this._marshalHostAttributes();
this._setupDebouncers();
this._marshalInstanceEffects();
this._marshalBehaviors();
this._marshalAttributes();
this._tryReady();
},
_marshalBehavior: function (b) {
this._listenListeners(b.listeners);
}
});
(function () {
var nativeShadow = Polymer.Settings.useNativeShadow;
var propertyUtils = Polymer.StyleProperties;
var styleUtil = Polymer.StyleUtil;
var styleDefaults = Polymer.StyleDefaults;
var styleTransformer = Polymer.StyleTransformer;
Polymer({
is: 'custom-style',
extends: 'style',
created: function () {
this._tryApply();
},
attached: function () {
this._tryApply();
},
_tryApply: function () {
if (!this._appliesToDocument) {
if (this.parentNode && this.parentNode.localName !== 'dom-module') {
this._appliesToDocument = true;
var e = this.__appliedElement || this;
styleDefaults.addStyle(e);
if (e.textContent) {
this._apply();
} else {
var observer = new MutationObserver(function () {
observer.disconnect();
this._apply();
}.bind(this));
observer.observe(e, { childList: true });
}
}
}
},
_apply: function () {
var e = this.__appliedElement || this;
this._computeStyleProperties();
var props = this._styleProperties;
var self = this;
e.textContent = styleUtil.toCssText(styleUtil.rulesForStyle(e), function (rule) {
var css = rule.cssText = rule.parsedCssText;
if (rule.propertyInfo && rule.propertyInfo.cssText) {
css = css.replace(propertyUtils.rx.VAR_ASSIGN, '');
rule.cssText = propertyUtils.valueForProperties(css, props);
}
styleTransformer.documentRule(rule);
});
}
});
}());
Polymer.Templatizer = {
properties: { __hideTemplateChildren__: { observer: '_showHideChildren' } },
_templatizerStatic: {
count: 0,
callbacks: {},
debouncer: null
},
_instanceProps: Polymer.nob,
created: function () {
this._templatizerId = this._templatizerStatic.count++;
},
templatize: function (template) {
if (!template._content) {
template._content = template.content;
}
if (template._content._ctor) {
this.ctor = template._content._ctor;
this._prepParentProperties(this.ctor.prototype, template);
return;
}
var archetype = Object.create(Polymer.Base);
this._customPrepAnnotations(archetype, template);
archetype._prepEffects();
this._customPrepEffects(archetype);
archetype._prepBehaviors();
archetype._prepBindings();
this._prepParentProperties(archetype, template);
archetype._notifyPath = this._notifyPathImpl;
archetype._scopeElementClass = this._scopeElementClassImpl;
archetype.listen = this._listenImpl;
archetype._showHideChildren = this._showHideChildrenImpl;
var _constructor = this._constructorImpl;
var ctor = function TemplateInstance(model, host) {
_constructor.call(this, model, host);
};
ctor.prototype = archetype;
archetype.constructor = ctor;
template._content._ctor = ctor;
this.ctor = ctor;
},
_getRootDataHost: function () {
return this.dataHost && this.dataHost._rootDataHost || this.dataHost;
},
_showHideChildrenImpl: function (hide) {
var c = this._children;
for (var i = 0; i < c.length; i++) {
var n = c[i];
if (n.style) {
n.style.display = hide ? 'none' : '';
n.__hideTemplateChildren__ = hide;
}
}
},
_debounceTemplate: function (fn) {
this._templatizerStatic.callbacks[this._templatizerId] = fn.bind(this);
this._templatizerStatic.debouncer = Polymer.Debounce(this._templatizerStatic.debouncer, this._flushTemplates.bind(this, true));
},
_flushTemplates: function (debouncerExpired) {
var db = this._templatizerStatic.debouncer;
while (debouncerExpired || db && db.finish) {
db.stop();
var cbs = this._templatizerStatic.callbacks;
this._templatizerStatic.callbacks = {};
for (var id in cbs) {
cbs[id]();
}
debouncerExpired = false;
}
},
_customPrepEffects: function (archetype) {
var parentProps = archetype._parentProps;
for (var prop in parentProps) {
archetype._addPropertyEffect(prop, 'function', this._createHostPropEffector(prop));
}
for (var prop in this._instanceProps) {
archetype._addPropertyEffect(prop, 'function', this._createInstancePropEffector(prop));
}
},
_customPrepAnnotations: function (archetype, template) {
archetype._template = template;
var c = template._content;
if (!c._notes) {
var rootDataHost = archetype._rootDataHost;
if (rootDataHost) {
Polymer.Annotations.prepElement = rootDataHost._prepElement.bind(rootDataHost);
}
c._notes = Polymer.Annotations.parseAnnotations(template);
Polymer.Annotations.prepElement = null;
this._processAnnotations(c._notes);
}
archetype._notes = c._notes;
archetype._parentProps = c._parentProps;
},
_prepParentProperties: function (archetype, template) {
var parentProps = this._parentProps = archetype._parentProps;
if (this._forwardParentProp && parentProps) {
var proto = archetype._parentPropProto;
var prop;
if (!proto) {
for (prop in this._instanceProps) {
delete parentProps[prop];
}
proto = archetype._parentPropProto = Object.create(null);
if (template != this) {
Polymer.Bind.prepareModel(proto);
}
for (prop in parentProps) {
var parentProp = '_parent_' + prop;
var effects = [
{
kind: 'function',
effect: this._createForwardPropEffector(prop)
},
{ kind: 'notify' }
];
Polymer.Bind._createAccessors(proto, parentProp, effects);
}
}
if (template != this) {
Polymer.Bind.prepareInstance(template);
template._forwardParentProp = this._forwardParentProp.bind(this);
}
this._extendTemplate(template, proto);
}
},
_createForwardPropEffector: function (prop) {
return function (source, value) {
this._forwardParentProp(prop, value);
};
},
_createHostPropEffector: function (prop) {
return function (source, value) {
this.dataHost['_parent_' + prop] = value;
};
},
_createInstancePropEffector: function (prop) {
return function (source, value, old, fromAbove) {
if (!fromAbove) {
this.dataHost._forwardInstanceProp(this, prop, value);
}
};
},
_extendTemplate: function (template, proto) {
Object.getOwnPropertyNames(proto).forEach(function (n) {
var val = template[n];
var pd = Object.getOwnPropertyDescriptor(proto, n);
Object.defineProperty(template, n, pd);
if (val !== undefined) {
template._propertySetter(n, val);
}
});
},
_showHideChildren: function (hidden) {
},
_forwardInstancePath: function (inst, path, value) {
},
_forwardInstanceProp: function (inst, prop, value) {
},
_notifyPathImpl: function (path, value) {
var dataHost = this.dataHost;
var dot = path.indexOf('.');
var root = dot < 0 ? path : path.slice(0, dot);
dataHost._forwardInstancePath.call(dataHost, this, path, value);
if (root in dataHost._parentProps) {
dataHost.notifyPath('_parent_' + path, value);
}
},
_pathEffector: function (path, value, fromAbove) {
if (this._forwardParentPath) {
if (path.indexOf('_parent_') === 0) {
this._forwardParentPath(path.substring(8), value);
}
}
Polymer.Base._pathEffector.apply(this, arguments);
},
_constructorImpl: function (model, host) {
this._rootDataHost = host._getRootDataHost();
this._setupConfigure(model);
this._pushHost(host);
this.root = this.instanceTemplate(this._template);
this.root.__noContent = !this._notes._hasContent;
this.root.__styleScoped = true;
this._popHost();
this._marshalAnnotatedNodes();
this._marshalInstanceEffects();
this._marshalAnnotatedListeners();
var children = [];
for (var n = this.root.firstChild; n; n = n.nextSibling) {
children.push(n);
n._templateInstance = this;
}
this._children = children;
if (host.__hideTemplateChildren__) {
this._showHideChildren(true);
}
this._tryReady();
},
_listenImpl: function (node, eventName, methodName) {
var model = this;
var host = this._rootDataHost;
var handler = host._createEventHandler(node, eventName, methodName);
var decorated = function (e) {
e.model = model;
handler(e);
};
host._listen(node, eventName, decorated);
},
_scopeElementClassImpl: function (node, value) {
var host = this._rootDataHost;
if (host) {
return host._scopeElementClass(node, value);
}
},
stamp: function (model) {
model = model || {};
if (this._parentProps) {
for (var prop in this._parentProps) {
model[prop] = this['_parent_' + prop];
}
}
return new this.ctor(model, this);
},
modelForElement: function (el) {
var model;
while (el) {
if (model = el._templateInstance) {
if (model.dataHost != this) {
el = model.dataHost;
} else {
return model;
}
} else {
el = el.parentNode;
}
}
}
};
Polymer({
is: 'dom-template',
extends: 'template',
behaviors: [Polymer.Templatizer],
ready: function () {
this.templatize(this);
}
});
Polymer._collections = new WeakMap();
Polymer.Collection = function (userArray) {
Polymer._collections.set(userArray, this);
this.userArray = userArray;
this.store = userArray.slice();
this.initMap();
};
Polymer.Collection.prototype = {
constructor: Polymer.Collection,
initMap: function () {
var omap = this.omap = new WeakMap();
var pmap = this.pmap = {};
var s = this.store;
for (var i = 0; i < s.length; i++) {
var item = s[i];
if (item && typeof item == 'object') {
omap.set(item, i);
} else {
pmap[item] = i;
}
}
},
add: function (item) {
var key = this.store.push(item) - 1;
if (item && typeof item == 'object') {
this.omap.set(item, key);
} else {
this.pmap[item] = key;
}
return key;
},
removeKey: function (key) {
this._removeFromMap(this.store[key]);
delete this.store[key];
},
_removeFromMap: function (item) {
if (item && typeof item == 'object') {
this.omap.delete(item);
} else {
delete this.pmap[item];
}
},
remove: function (item) {
var key = this.getKey(item);
this.removeKey(key);
return key;
},
getKey: function (item) {
if (item && typeof item == 'object') {
return this.omap.get(item);
} else {
return this.pmap[item];
}
},
getKeys: function () {
return Object.keys(this.store);
},
setItem: function (key, item) {
var old = this.store[key];
if (old) {
this._removeFromMap(old);
}
if (item && typeof item == 'object') {
this.omap.set(item, key);
} else {
this.pmap[item] = key;
}
this.store[key] = item;
},
getItem: function (key) {
return this.store[key];
},
getItems: function () {
var items = [], store = this.store;
for (var key in store) {
items.push(store[key]);
}
return items;
},
_applySplices: function (splices) {
var keySplices = [];
for (var i = 0; i < splices.length; i++) {
var j, o, key, s = splices[i];
var removed = [];
for (j = 0; j < s.removed.length; j++) {
o = s.removed[j];
key = this.remove(o);
removed.push(key);
}
var added = [];
for (j = 0; j < s.addedCount; j++) {
o = this.userArray[s.index + j];
key = this.add(o);
added.push(key);
}
keySplices.push({
index: s.index,
removed: removed,
removedItems: s.removed,
added: added
});
}
return keySplices;
}
};
Polymer.Collection.get = function (userArray) {
return Polymer._collections.get(userArray) || new Polymer.Collection(userArray);
};
Polymer.Collection.applySplices = function (userArray, splices) {
var coll = Polymer._collections.get(userArray);
return coll ? coll._applySplices(splices) : null;
};
Polymer({
is: 'dom-repeat',
extends: 'template',
properties: {
items: { type: Array },
as: {
type: String,
value: 'item'
},
indexAs: {
type: String,
value: 'index'
},
sort: {
type: Function,
observer: '_sortChanged'
},
filter: {
type: Function,
observer: '_filterChanged'
},
observe: {
type: String,
observer: '_observeChanged'
},
delay: Number
},
behaviors: [Polymer.Templatizer],
observers: ['_itemsChanged(items.*)'],
created: function () {
this._instances = [];
},
detached: function () {
for (var i = 0; i < this._instances.length; i++) {
this._detachRow(i);
}
},
attached: function () {
var parentNode = Polymer.dom(this).parentNode;
for (var i = 0; i < this._instances.length; i++) {
Polymer.dom(parentNode).insertBefore(this._instances[i].root, this);
}
},
ready: function () {
this._instanceProps = { __key__: true };
this._instanceProps[this.as] = true;
this._instanceProps[this.indexAs] = true;
if (!this.ctor) {
this.templatize(this);
}
},
_sortChanged: function () {
var dataHost = this._getRootDataHost();
var sort = this.sort;
this._sortFn = sort && (typeof sort == 'function' ? sort : function () {
return dataHost[sort].apply(dataHost, arguments);
});
this._needFullRefresh = true;
if (this.items) {
this._debounceTemplate(this._render);
}
},
_filterChanged: function () {
var dataHost = this._getRootDataHost();
var filter = this.filter;
this._filterFn = filter && (typeof filter == 'function' ? filter : function () {
return dataHost[filter].apply(dataHost, arguments);
});
this._needFullRefresh = true;
if (this.items) {
this._debounceTemplate(this._render);
}
},
_observeChanged: function () {
this._observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
},
_itemsChanged: function (change) {
if (change.path == 'items') {
if (Array.isArray(this.items)) {
this.collection = Polymer.Collection.get(this.items);
} else if (!this.items) {
this.collection = null;
} else {
this._error(this._logf('dom-repeat', 'expected array for `items`,' + ' found', this.items));
}
this._splices = [];
this._needFullRefresh = true;
this._debounceTemplate(this._render);
} else if (change.path == 'items.splices') {
this._splices = this._splices.concat(change.value.keySplices);
this._debounceTemplate(this._render);
} else {
var subpath = change.path.slice(6);
this._forwardItemPath(subpath, change.value);
this._checkObservedPaths(subpath);
}
},
_checkObservedPaths: function (path) {
if (this._observePaths) {
path = path.substring(path.indexOf('.') + 1);
var paths = this._observePaths;
for (var i = 0; i < paths.length; i++) {
if (path.indexOf(paths[i]) === 0) {
this._needFullRefresh = true;
if (this.delay) {
this.debounce('render', this._render, this.delay);
} else {
this._debounceTemplate(this._render);
}
return;
}
}
}
},
render: function () {
this._needFullRefresh = true;
this._debounceTemplate(this._render);
this._flushTemplates();
},
_render: function () {
var c = this.collection;
if (this._needFullRefresh) {
this._applyFullRefresh();
this._needFullRefresh = false;
} else {
if (this._sortFn) {
this._applySplicesUserSort(this._splices);
} else {
if (this._filterFn) {
this._applyFullRefresh();
} else {
this._applySplicesArrayOrder(this._splices);
}
}
}
this._splices = [];
var keyToIdx = this._keyToInstIdx = {};
for (var i = 0; i < this._instances.length; i++) {
var inst = this._instances[i];
keyToIdx[inst.__key__] = i;
inst.__setProperty(this.indexAs, i, true);
}
this.fire('dom-change');
},
_applyFullRefresh: function () {
var c = this.collection;
var keys;
if (this._sortFn) {
keys = c ? c.getKeys() : [];
} else {
keys = [];
var items = this.items;
if (items) {
for (var i = 0; i < items.length; i++) {
keys.push(c.getKey(items[i]));
}
}
}
if (this._filterFn) {
keys = keys.filter(function (a) {
return this._filterFn(c.getItem(a));
}, this);
}
if (this._sortFn) {
keys.sort(function (a, b) {
return this._sortFn(c.getItem(a), c.getItem(b));
}.bind(this));
}
for (var i = 0; i < keys.length; i++) {
var key = keys[i];
var inst = this._instances[i];
if (inst) {
inst.__setProperty('__key__', key, true);
inst.__setProperty(this.as, c.getItem(key), true);
} else {
this._instances.push(this._insertRow(i, key));
}
}
for (; i < this._instances.length; i++) {
this._detachRow(i);
}
this._instances.splice(keys.length, this._instances.length - keys.length);
},
_keySort: function (a, b) {
return this.collection.getKey(a) - this.collection.getKey(b);
},
_applySplicesUserSort: function (splices) {
var c = this.collection;
var instances = this._instances;
var keyMap = {};
var pool = [];
var sortFn = this._sortFn || this._keySort.bind(this);
splices.forEach(function (s) {
for (var i = 0; i < s.removed.length; i++) {
var key = s.removed[i];
keyMap[key] = keyMap[key] ? null : -1;
}
for (var i = 0; i < s.added.length; i++) {
var key = s.added[i];
keyMap[key] = keyMap[key] ? null : 1;
}
}, this);
var removedIdxs = [];
var addedKeys = [];
for (var key in keyMap) {
if (keyMap[key] === -1) {
removedIdxs.push(this._keyToInstIdx[key]);
}
if (keyMap[key] === 1) {
addedKeys.push(key);
}
}
if (removedIdxs.length) {
removedIdxs.sort();
for (var i = removedIdxs.length - 1; i >= 0; i--) {
var idx = removedIdxs[i];
if (idx !== undefined) {
pool.push(this._detachRow(idx));
instances.splice(idx, 1);
}
}
}
if (addedKeys.length) {
if (this._filterFn) {
addedKeys = addedKeys.filter(function (a) {
return this._filterFn(c.getItem(a));
}, this);
}
addedKeys.sort(function (a, b) {
return this._sortFn(c.getItem(a), c.getItem(b));
}.bind(this));
var start = 0;
for (var i = 0; i < addedKeys.length; i++) {
start = this._insertRowUserSort(start, addedKeys[i], pool);
}
}
},
_insertRowUserSort: function (start, key, pool) {
var c = this.collection;
var item = c.getItem(key);
var end = this._instances.length - 1;
var idx = -1;
var sortFn = this._sortFn || this._keySort.bind(this);
while (start <= end) {
var mid = start + end >> 1;
var midKey = this._instances[mid].__key__;
var cmp = sortFn(c.getItem(midKey), item);
if (cmp < 0) {
start = mid + 1;
} else if (cmp > 0) {
end = mid - 1;
} else {
idx = mid;
break;
}
}
if (idx < 0) {
idx = end + 1;
}
this._instances.splice(idx, 0, this._insertRow(idx, key, pool));
return idx;
},
_applySplicesArrayOrder: function (splices) {
var pool = [];
var c = this.collection;
splices.forEach(function (s) {
for (var i = 0; i < s.removed.length; i++) {
var inst = this._detachRow(s.index + i);
if (!inst.isPlaceholder) {
pool.push(inst);
}
}
this._instances.splice(s.index, s.removed.length);
for (var i = 0; i < s.added.length; i++) {
var inst = {
isPlaceholder: true,
key: s.added[i]
};
this._instances.splice(s.index + i, 0, inst);
}
}, this);
for (var i = this._instances.length - 1; i >= 0; i--) {
var inst = this._instances[i];
if (inst.isPlaceholder) {
this._instances[i] = this._insertRow(i, inst.key, pool, true);
}
}
},
_detachRow: function (idx) {
var inst = this._instances[idx];
if (!inst.isPlaceholder) {
var parentNode = Polymer.dom(this).parentNode;
for (var i = 0; i < inst._children.length; i++) {
var el = inst._children[i];
Polymer.dom(inst.root).appendChild(el);
}
}
return inst;
},
_insertRow: function (idx, key, pool, replace) {
var inst;
if (inst = pool && pool.pop()) {
inst.__setProperty(this.as, this.collection.getItem(key), true);
inst.__setProperty('__key__', key, true);
} else {
inst = this._generateRow(idx, key);
}
var beforeRow = this._instances[replace ? idx + 1 : idx];
var beforeNode = beforeRow ? beforeRow._children[0] : this;
var parentNode = Polymer.dom(this).parentNode;
Polymer.dom(parentNode).insertBefore(inst.root, beforeNode);
return inst;
},
_generateRow: function (idx, key) {
var model = { __key__: key };
model[this.as] = this.collection.getItem(key);
model[this.indexAs] = idx;
var inst = this.stamp(model);
return inst;
},
_showHideChildren: function (hidden) {
for (var i = 0; i < this._instances.length; i++) {
this._instances[i]._showHideChildren(hidden);
}
},
_forwardInstanceProp: function (inst, prop, value) {
if (prop == this.as) {
var idx;
if (this._sortFn || this._filterFn) {
idx = this.items.indexOf(this.collection.getItem(inst.__key__));
} else {
idx = inst[this.indexAs];
}
this.set('items.' + idx, value);
}
},
_forwardInstancePath: function (inst, path, value) {
if (path.indexOf(this.as + '.') === 0) {
this.notifyPath('items.' + inst.__key__ + '.' + path.slice(this.as.length + 1), value);
}
},
_forwardParentProp: function (prop, value) {
this._instances.forEach(function (inst) {
inst.__setProperty(prop, value, true);
}, this);
},
_forwardParentPath: function (path, value) {
this._instances.forEach(function (inst) {
inst.notifyPath(path, value, true);
}, this);
},
_forwardItemPath: function (path, value) {
if (this._keyToInstIdx) {
var dot = path.indexOf('.');
var key = path.substring(0, dot < 0 ? path.length : dot);
var idx = this._keyToInstIdx[key];
var inst = this._instances[idx];
if (inst) {
if (dot >= 0) {
path = this.as + '.' + path.substring(dot + 1);
inst.notifyPath(path, value, true);
} else {
inst.__setProperty(this.as, value, true);
}
}
}
},
itemForElement: function (el) {
var instance = this.modelForElement(el);
return instance && instance[this.as];
},
keyForElement: function (el) {
var instance = this.modelForElement(el);
return instance && instance.__key__;
},
indexForElement: function (el) {
var instance = this.modelForElement(el);
return instance && instance[this.indexAs];
}
});
Polymer({
is: 'array-selector',
properties: {
items: {
type: Array,
observer: '_itemsChanged'
},
selected: {
type: Object,
notify: true
},
toggle: Boolean,
multi: Boolean
},
_itemsChanged: function () {
if (Array.isArray(this.selected)) {
for (var i = 0; i < this.selected.length; i++) {
this.unlinkPaths('selected.' + i);
}
} else {
this.unlinkPaths('selected');
}
if (this.multi) {
this.selected = [];
} else {
this.selected = null;
}
},
deselect: function (item) {
if (this.multi) {
var scol = Polymer.Collection.get(this.selected);
var sidx = this.selected.indexOf(item);
if (sidx >= 0) {
var skey = scol.getKey(item);
this.splice('selected', sidx, 1);
this.unlinkPaths('selected.' + skey);
return true;
}
} else {
this.selected = null;
this.unlinkPaths('selected');
}
},
select: function (item) {
var icol = Polymer.Collection.get(this.items);
var key = icol.getKey(item);
if (this.multi) {
var scol = Polymer.Collection.get(this.selected);
var skey = scol.getKey(item);
if (skey >= 0) {
if (this.toggle) {
this.deselect(item);
}
} else {
this.push('selected', item);
this.async(function () {
skey = scol.getKey(item);
this.linkPaths('selected.' + skey, 'items.' + key);
});
}
} else {
if (this.toggle && item == this.selected) {
this.deselect();
} else {
this.linkPaths('selected', 'items.' + key);
this.selected = item;
}
}
}
});
Polymer({
is: 'dom-if',
extends: 'template',
properties: {
'if': {
type: Boolean,
value: false,
observer: '_queueRender'
},
restamp: {
type: Boolean,
value: false,
observer: '_queueRender'
}
},
behaviors: [Polymer.Templatizer],
_queueRender: function () {
this._debounceTemplate(this._render);
},
detached: function () {
this._teardownInstance();
},
attached: function () {
if (this.if && this.ctor) {
this.async(this._ensureInstance);
}
},
render: function () {
this._flushTemplates();
},
_render: function () {
if (this.if) {
if (!this.ctor) {
this._wrapTextNodes(this._content || this.content);
this.templatize(this);
}
this._ensureInstance();
this._showHideChildren();
} else if (this.restamp) {
this._teardownInstance();
}
if (!this.restamp && this._instance) {
this._showHideChildren();
}
if (this.if != this._lastIf) {
this.fire('dom-change');
this._lastIf = this.if;
}
},
_ensureInstance: function () {
if (!this._instance) {
this._instance = this.stamp();
var root = this._instance.root;
var parent = Polymer.dom(Polymer.dom(this).parentNode);
parent.insertBefore(root, this);
}
},
_teardownInstance: function () {
if (this._instance) {
var c = this._instance._children;
if (c) {
var parent = Polymer.dom(Polymer.dom(c[0]).parentNode);
c.forEach(function (n) {
parent.removeChild(n);
});
}
this._instance = null;
}
},
_wrapTextNodes: function (root) {
for (var n = root.firstChild; n; n = n.nextSibling) {
if (n.nodeType === Node.TEXT_NODE && n.textContent.trim()) {
var s = document.createElement('span');
root.insertBefore(s, n);
s.appendChild(n);
n = s;
}
}
},
_showHideChildren: function () {
var hidden = this.__hideTemplateChildren__ || !this.if;
if (this._instance) {
this._instance._showHideChildren(hidden);
}
},
_forwardParentProp: function (prop, value) {
if (this._instance) {
this._instance[prop] = value;
}
},
_forwardParentPath: function (path, value) {
if (this._instance) {
this._instance.notifyPath(path, value, true);
}
}
});
Polymer.ImportStatus = {
_ready: false,
_callbacks: [],
whenLoaded: function (cb) {
if (this._ready) {
cb();
} else {
this._callbacks.push(cb);
}
},
_importsLoaded: function () {
this._ready = true;
this._callbacks.forEach(function (cb) {
cb();
});
this._callbacks = [];
}
};
window.addEventListener('load', function () {
Polymer.ImportStatus._importsLoaded();
});
if (window.HTMLImports) {
HTMLImports.whenReady(function () {
Polymer.ImportStatus._importsLoaded();
});
}
Polymer({
is: 'dom-bind',
extends: 'template',
created: function () {
Polymer.ImportStatus.whenLoaded(this._readySelf.bind(this));
},
_registerFeatures: function () {
this._prepConstructor();
},
_insertChildren: function () {
var parentDom = Polymer.dom(Polymer.dom(this).parentNode);
parentDom.insertBefore(this.root, this);
},
_removeChildren: function () {
if (this._children) {
for (var i = 0; i < this._children.length; i++) {
this.root.appendChild(this._children[i]);
}
}
},
_initFeatures: function () {
},
_scopeElementClass: function (element, selector) {
if (this.dataHost) {
return this.dataHost._scopeElementClass(element, selector);
} else {
return selector;
}
},
_prepConfigure: function () {
var config = {};
for (var prop in this._propertyEffects) {
config[prop] = this[prop];
}
this._setupConfigure = this._setupConfigure.bind(this, config);
},
attached: function () {
if (!this._children) {
this._template = this;
this._prepAnnotations();
this._prepEffects();
this._prepBehaviors();
this._prepConfigure();
this._prepBindings();
Polymer.Base._initFeatures.call(this);
this._children = Array.prototype.slice.call(this.root.childNodes);
}
this._insertChildren();
this.fire('dom-change');
},
detached: function () {
this._removeChildren();
}
});
Polymer({
	is: "App-list",
	properties: {
		//cur_sort: { field: "id", isdesc: false },
		//cur_filter: {}
	},
	ready: function() {
		this.dato3 = 'Este es el dato3' 
	}
 });