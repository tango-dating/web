"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;var e={};!function(e){function t(e,t,r){return r.a=e,r.f=t,r}function r(e){return t(2,e,(function(t){return function(r){return e(t,r)}}))}function n(e){return t(3,e,(function(t){return function(r){return function(n){return e(t,r,n)}}}))}function i(e){return t(4,e,(function(t){return function(r){return function(n){return function(i){return e(t,r,n,i)}}}}))}function s(e,t,r){return 2===e.a?e.f(t,r):e(t)(r)}function o(e,t,r,n){return 3===e.a?e.f(t,r,n):e(t)(r)(n)}function a(e,t,r,n,i){return 4===e.a?e.f(t,r,n,i):e(t)(r)(n)(i)}var c={$:0};function u(e,t){return{$:1,a:e,b:t}}var l=r(u);function h(e){for(var t=c,r=e.length;r--;)t=u(e[r],t);return t}var d=n((function(e,t,r){for(var n=Array(e),i=0;e>i;i++)n[i]=r(t+i);return n})),f=r((function(e,t){for(var r=Array(e),n=0;e>n&&t.b;n++)r[n]=t.a,t=t.b;return r.length=n,m(r,t)}));function p(e){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function g(e,t,r){if("object"!=typeof e)return e===t?0:t>e?-1:1;if(void 0===e.$)return(r=g(e.a,t.a))||(r=g(e.b,t.b))?r:g(e.c,t.c);for(;e.b&&t.b&&!(r=g(e.a,t.a));e=e.b,t=t.b);return r||(e.b?1:t.b?-1:0)}function m(e,t){return{a:e,b:t}}var v=Math.ceil,b=Math.floor,_=Math.log;function y(e){return{$:2,b:e}}y((function(e){return"number"!=typeof e?S("an INT",e):e>-2147483647&&2147483647>e&&(0|e)===e?xe(e):!isFinite(e)||e%1?S("an INT",e):xe(e)})),y((function(e){return"boolean"==typeof e?xe(e):S("a BOOL",e)})),y((function(e){return"number"==typeof e?xe(e):S("a FLOAT",e)})),y((function(e){return xe(e)})),y((function(e){return"string"==typeof e?xe(e):e instanceof String?xe(e+""):S("a STRING",e)}));var I=r((function(e,t){return w(e,t)}));function w(e,t){switch(e.$){case 2:return e.b(t);case 5:return null===t?xe(e.c):S("null",t);case 3:return k(t)?T(e.b,t,h):S("a LIST",t);case 4:return k(t)?T(e.b,t,E):S("an ARRAY",t);case 6:var r=e.d;if("object"!=typeof t||null===t||!(r in t))return S("an OBJECT with a field named `"+r+"`",t);var n=w(e.b,t[r]);return at(n)?n:Ue(s(Fe,r,n.a));case 7:var i=e.e;return k(t)?t.length>i?(n=w(e.b,t[i]),at(n)?n:Ue(s($e,i,n.a))):S("a LONGER array. Need index "+i+" but only see "+t.length+" entries",t):S("an ARRAY",t);case 8:if("object"!=typeof t||null===t||k(t))return S("an OBJECT",t);var o=c;for(var a in t)if(t.hasOwnProperty(a)){if(n=w(e.b,t[a]),!at(n))return Ue(s(Fe,a,n.a));o=u(m(a,n.a),o)}return xe(Be(o));case 9:for(var l=e.f,d=e.g,f=0;d.length>f;f++){if(n=w(d[f],t),!at(n))return n;l=l(n.a)}return xe(l);case 10:return n=w(e.b,t),at(n)?w(e.h(n.a),t):n;case 11:for(var p=c,g=e.g;g.b;g=g.b){if(n=w(g.a,t),at(n))return n;p=u(n.a,p)}return Ue(Ve(Be(p)));case 1:return Ue(s(je,e.a,t));case 0:return xe(e.a)}}function T(e,t,r){for(var n=t.length,i=Array(n),o=0;n>o;o++){var a=w(e,t[o]);if(!at(a))return Ue(s($e,o,a.a));i[o]=a.a}return xe(r(i))}function k(e){return Array.isArray(e)||"undefined"!=typeof FileList&&e instanceof FileList}function E(e){return s(ot,e.length,(function(t){return e[t]}))}function S(e,t){return Ue(s(je,"Expecting "+e,t))}function O(e,t){if(e===t)return!0;if(e.$!==t.$)return!1;switch(e.$){case 0:case 1:return e.a===t.a;case 2:return e.b===t.b;case 5:return e.c===t.c;case 3:case 4:case 8:return O(e.b,t.b);case 6:return e.d===t.d&&O(e.b,t.b);case 7:return e.e===t.e&&O(e.b,t.b);case 9:return e.f===t.f&&R(e.g,t.g);case 10:return e.h===t.h&&O(e.b,t.b);case 11:return R(e.g,t.g)}}function R(e,t){var r=e.length;if(r!==t.length)return!1;for(var n=0;r>n;n++)if(!O(e[n],t[n]))return!1;return!0}function A(e){return{$:0,a:e}}function C(e){return{$:2,b:e,c:null}}var N=r((function(e,t){return{$:3,b:e,d:t}})),P=0;function D(e){var t={$:0,e:P++,f:e,g:null,h:[]};return U(t),t}var L=!1,M=[];function U(e){if(M.push(e),!L){for(L=!0;e=M.shift();)j(e);L=!1}}function j(e){for(;e.f;){var t=e.f.$;if(0===t||1===t){for(;e.g&&e.g.$!==t;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else{if(2===t)return void(e.f.c=e.f.b((function(t){e.f=t,U(e)})));if(5===t){if(0===e.h.length)return;e.f=e.f.b(e.h.shift())}else e.g={$:3===t?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}}var F={};function $(e,t){var r={g:t,h:void 0},n=e.c,i=e.d,c=e.e,u=e.f;return r.h=D(s(N,(function e(t){return s(N,e,{$:5,b:function(e){var s=e.a;return 0===e.$?o(i,r,s,t):c&&u?a(n,r,s.i,s.j,t):o(n,r,c?s.i:s.j,t)}})}),e.b))}var x=r((function(e,t){return C((function(r){e.g(t),r(A(0))}))}));function V(e){return function(t){return{$:1,k:e,l:t}}}function H(e){return{$:2,m:e}}var B=[],z=!1;function W(e,t,r){if(B.push({p:e,q:t,r:r}),!z){z=!0;for(var n;n=B.shift();)q(n.p,n.q,n.r);z=!1}}function q(e,t,r){var n,i={};for(var s in G(!0,t,i,null),G(!1,r,i,null),e)(n=e[s]).h.push({$:"fx",a:i[s]||{i:c,j:c}}),U(n)}function G(e,t,r,n){switch(t.$){case 1:var i=t.k,o=(f=e,p=i,g=n,m=t.l,s(f?F[p].e:F[p].f,(function(e){for(var t=g;t;t=t.t)e=t.s(e);return e}),m));return void(r[i]=(l=e,h=o,d=r[i],d=d||{i:c,j:c},l?d.i=u(h,d.i):d.j=u(h,d.j),d));case 2:for(var a=t.m;a.b;a=a.b)G(e,a.a,r,n);return;case 3:return void G(e,t.o,r,{s:t.n,t:n})}var l,h,d,f,p,g,m}function K(e,t){return F[e]&&p(3),F[e]={e:J,u:t,a:X},V(e)}var J=r((function(e,t){return t}));function X(e){var t=[],r=F[e].u,i=C((function(e){var t=setTimeout((function(){e(A(0))}),0);return function(){clearTimeout(t)}}));return F[e].b=i,F[e].c=n((function(e,n){for(;n.b;n=n.b)for(var s=t,o=r(n.a),a=0;s.length>a;a++)s[a](o);return i})),{subscribe:function(e){t.push(e)},unsubscribe:function(e){var r=(t=t.slice()).indexOf(e);0>r||t.splice(r,1)}}}var Y="undefined"!=typeof document?document:{};function Q(e,t){e.appendChild(t)}function Z(e){return{$:0,a:e}}var ee=r((function(e,t){return r((function(r,n){for(var i=[],s=0;n.b;n=n.b){var o=n.a;s+=o.b||0,i.push(o)}return s+=i.length,{$:1,c:t,d:oe(r),e:i,f:e,b:s}}))}))(void 0);r((function(e,t){return r((function(r,n){for(var i=[],s=0;n.b;n=n.b){var o=n.a;s+=o.b.b||0,i.push(o)}return s+=i.length,{$:2,c:t,d:oe(r),e:i,f:e,b:s}}))}))(void 0);var te,re=r((function(e,t){return{$:"a0",n:e,o:t}})),ne=r((function(e,t){return{$:"a1",n:e,o:t}})),ie=r((function(e,t){return{$:"a2",n:e,o:t}})),se=r((function(e,t){return{$:"a3",n:e,o:t}}));function oe(e){for(var t={};e.b;e=e.b){var r=e.a,n=r.$,i=r.n,s=r.o;if("a2"!==n){var o=t[n]||(t[n]={});"a3"===n&&"class"===i?ae(o,i,s):o[i]=s}else"className"===i?ae(t,i,s):t[i]=s}return t}function ae(e,t,r){var n=e[t];e[t]=n?n+" "+r:r}function ce(e,t){var r=e.$;if(5===r)return ce(e.k||(e.k=e.m()),t);if(0===r)return Y.createTextNode(e.a);if(4===r){for(var n=e.k,i=e.j;4===n.$;)"object"!=typeof i?i=[i,n.j]:i.push(n.j),n=n.k;var s={j:i,p:t};return(o=ce(n,s)).elm_event_node_ref=s,o}if(3===r)return ue(o=e.h(e.g),t,e.d),o;var o=e.f?Y.createElementNS(e.f,e.c):Y.createElement(e.c);ue(o,t,e.d);for(var a=e.e,c=0;a.length>c;c++)Q(o,ce(1===r?a[c]:a[c].b,t));return o}function ue(e,t,r){for(var n in r){var i=r[n];"a1"===n?le(e,i):"a0"===n?fe(e,t,i):"a3"===n?he(e,i):"a4"===n?de(e,i):("value"!==n&&"checked"!==n||e[n]!==i)&&(e[n]=i)}}function le(e,t){var r=e.style;for(var n in t)r[n]=t[n]}function he(e,t){for(var r in t){var n=t[r];void 0!==n?e.setAttribute(r,n):e.removeAttribute(r)}}function de(e,t){for(var r in t){var n=t[r],i=n.f,s=n.o;void 0!==s?e.setAttributeNS(i,r,s):e.removeAttributeNS(i,r)}}function fe(e,t,r){var n=e.elmFs||(e.elmFs={});for(var i in r){var s=r[i],o=n[i];if(s){if(o){if(o.q.$===s.$){o.q=s;continue}e.removeEventListener(i,o)}o=pe(t,s),e.addEventListener(i,o,te&&{passive:2>ut(s)}),n[i]=o}else e.removeEventListener(i,o),n[i]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){te=!0}}))}catch(e){}function pe(e,t){function r(t){var n=r.q,i=w(n.a,t);if(at(i)){for(var s,o=ut(n),a=i.a,c=o?3>o?a.a:a.aw:a,u=1==o?a.b:3==o&&a.I,l=(u&&t.stopPropagation(),(2==o?a.b:3==o&&a.F)&&t.preventDefault(),e);s=l.j;){if("function"==typeof s)c=s(c);else for(var h=s.length;h--;)c=s[h](c);l=l.p}l(c,u)}}return r.q=t,r}function ge(e,t){return e.$==t.$&&O(e.a,t.a)}function me(e,t,r,n){var i={$:t,r:r,s:n,t:void 0,u:void 0};return e.push(i),i}function ve(e,t,r,n){if(e!==t){var i=e.$,s=t.$;if(i!==s){if(1!==i||2!==s)return void me(r,0,n,t);t=function(e){for(var t=e.e,r=t.length,n=Array(r),i=0;r>i;i++)n[i]=t[i].b;return{$:1,c:e.c,d:e.d,e:n,f:e.f,b:e.b}}(t),s=1}switch(s){case 5:for(var o=e.l,a=t.l,c=o.length,u=c===a.length;u&&c--;)u=o[c]===a[c];if(u)return void(t.k=e.k);t.k=t.m();var l=[];return ve(e.k,t.k,l,0),void(l.length>0&&me(r,1,n,l));case 4:for(var h=e.j,d=t.j,f=!1,p=e.k;4===p.$;)f=!0,"object"!=typeof h?h=[h,p.j]:h.push(p.j),p=p.k;for(var g=t.k;4===g.$;)f=!0,"object"!=typeof d?d=[d,g.j]:d.push(g.j),g=g.k;return f&&h.length!==d.length?void me(r,0,n,t):((f?function(e,t){for(var r=0;e.length>r;r++)if(e[r]!==t[r])return!1;return!0}(h,d):h===d)||me(r,2,n,d),void ve(p,g,r,n+1));case 0:return void(e.a!==t.a&&me(r,3,n,t.a));case 1:return void be(e,t,r,n,ye);case 2:return void be(e,t,r,n,Ie);case 3:if(e.h!==t.h)return void me(r,0,n,t);var m=_e(e.d,t.d);m&&me(r,4,n,m);var v=t.i(e.g,t.g);return void(v&&me(r,5,n,v))}}}function be(e,t,r,n,i){if(e.c===t.c&&e.f===t.f){var s=_e(e.d,t.d);s&&me(r,4,n,s),i(e,t,r,n)}else me(r,0,n,t)}function _e(e,t,r){var n;for(var i in e)if("a1"!==i&&"a0"!==i&&"a3"!==i&&"a4"!==i)if(i in t){var s=e[i],o=t[i];s===o&&"value"!==i&&"checked"!==i||"a0"===r&&ge(s,o)||((n=n||{})[i]=o)}else(n=n||{})[i]=r?"a1"===r?"":"a0"===r||"a3"===r?void 0:{f:e[i].f,o:void 0}:"string"==typeof e[i]?"":null;else{var a=_e(e[i],t[i]||{},i);a&&((n=n||{})[i]=a)}for(var c in t)c in e||((n=n||{})[c]=t[c]);return n}function ye(e,t,r,n){var i=e.e,s=t.e,o=i.length,a=s.length;o>a?me(r,6,n,{v:a,i:o-a}):a>o&&me(r,7,n,{v:o,e:s});for(var c=a>o?o:a,u=0;c>u;u++){var l=i[u];ve(l,s[u],r,++n),n+=l.b||0}}function Ie(e,t,r,n){for(var i=[],s={},o=[],a=e.e,c=t.e,u=a.length,l=c.length,h=0,d=0,f=n;u>h&&l>d;){var p=(S=a[h]).a,g=(O=c[d]).a,m=S.b,v=O.b,b=void 0,_=void 0;if(p!==g){var y=a[h+1],I=c[d+1];if(y){var w=y.a,T=y.b;_=g===w}if(I){var k=I.a,E=I.b;b=p===k}if(b&&_)ve(m,E,i,++f),Te(s,i,p,v,d,o),f+=m.b||0,ke(s,i,p,T,++f),f+=T.b||0,h+=2,d+=2;else if(b)f++,Te(s,i,g,v,d,o),ve(m,E,i,f),f+=m.b||0,h+=1,d+=2;else if(_)ke(s,i,p,m,++f),f+=m.b||0,ve(T,v,i,++f),f+=T.b||0,h+=2,d+=1;else{if(!y||w!==k)break;ke(s,i,p,m,++f),Te(s,i,g,v,d,o),f+=m.b||0,ve(T,E,i,++f),f+=T.b||0,h+=2,d+=2}}else ve(m,v,i,++f),f+=m.b||0,h++,d++}for(;u>h;){var S;f++,ke(s,i,(S=a[h]).a,m=S.b,f),f+=m.b||0,h++}for(;l>d;){var O,R=R||[];Te(s,i,(O=c[d]).a,O.b,void 0,R),d++}(i.length>0||o.length>0||R)&&me(r,8,n,{w:i,x:o,y:R})}var we="_elmW6BL";function Te(e,t,r,n,i,s){var o=e[r];if(!o)return s.push({r:i,A:o={c:0,z:n,r:i,s:void 0}}),void(e[r]=o);if(1===o.c){s.push({r:i,A:o}),o.c=2;var a=[];return ve(o.z,n,a,o.r),o.r=i,void(o.s.s={w:a,A:o})}Te(e,t,r+we,n,i,s)}function ke(e,t,r,n,i){var s=e[r];if(s){if(0===s.c){s.c=2;var o=[];return ve(n,s.z,o,i),void me(t,9,i,{w:o,A:s})}ke(e,t,r+we,n,i)}else{var a=me(t,9,i,void 0);e[r]={c:1,z:n,r:i,s:a}}}function Ee(e,t,r,n){Se(e,t,r,0,0,t.b,n)}function Se(e,t,r,n,i,s,o){for(var a=r[n],c=a.r;c===i;){var u=a.$;if(1===u)Ee(e,t.k,a.s,o);else if(8===u)a.t=e,a.u=o,(l=a.s.w).length>0&&Se(e,t,l,0,i,s,o);else if(9===u){a.t=e,a.u=o;var l,h=a.s;h&&(h.A.s=e,(l=h.w).length>0&&Se(e,t,l,0,i,s,o))}else a.t=e,a.u=o;if(!(a=r[++n])||(c=a.r)>s)return n}var d=t.$;if(4===d){for(var f=t.k;4===f.$;)f=f.k;return Se(e,f,r,n,i+1,s,e.elm_event_node_ref)}for(var p=t.e,g=e.childNodes,m=0;p.length>m;m++){i++;var v=1===d?p[m]:p[m].b,b=i+(v.b||0);if(!(i>c||c>b||(a=r[n=Se(g[m],v,r,n,i,b,o)])&&(c=a.r)<=s))return n;i=b}return n}function Oe(e,t){for(var r=0;t.length>r;r++){var n=t[r],i=n.t,s=Re(i,n);i===e&&(e=s)}return e}function Re(e,t){switch(t.$){case 0:return a=e,c=t.s,u=t.u,l=a.parentNode,(h=ce(c,u)).elm_event_node_ref||(h.elm_event_node_ref=a.elm_event_node_ref),l&&h!==a&&l.replaceChild(h,a),h;case 4:return ue(e,t.u,t.s),e;case 3:return e.replaceData(0,e.length,t.s),e;case 1:return Oe(e,t.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=t.s:e.elm_event_node_ref={j:t.s,p:t.u},e;case 6:for(var r=t.s,n=0;r.i>n;n++)e.removeChild(e.childNodes[r.v]);return e;case 7:for(var i=(r=t.s).e,s=e.childNodes[n=r.v];i.length>n;n++)e.insertBefore(ce(i[n],t.u),s);return e;case 9:if(!(r=t.s))return e.parentNode.removeChild(e),e;var o=r.A;return void 0!==o.r&&e.parentNode.removeChild(e),o.s=Oe(e,r.w),e;case 8:return function(e,t){var r=t.s,n=function(e,t){if(e){for(var r=Y.createDocumentFragment(),n=0;e.length>n;n++){var i=e[n].A;Q(r,2===i.c?i.s:ce(i.z,t.u))}return r}}(r.y,t);e=Oe(e,r.w);for(var i=r.x,s=0;i.length>s;s++){var o=i[s],a=o.A,c=2===a.c?a.s:ce(a.z,t.u);e.insertBefore(c,e.childNodes[o.r])}return n&&Q(e,n),e}(e,t);case 5:return t.s(e);default:p(10)}var a,c,u,l,h}function Ae(e){if(3===e.nodeType)return Z(e.textContent);if(1!==e.nodeType)return Z("");for(var t=c,r=e.attributes,n=r.length;n--;){var i=r[n];t=u(s(se,i.name,i.value),t)}var a=e.tagName.toLowerCase(),l=c,h=e.childNodes;for(n=h.length;n--;)l=u(Ae(h[n]),l);return o(ee,a,t,l)}var Ce=i((function(e,t,r,n){return function(t,r,i,o,a,c){var u=s(I,t,r?r.flags:void 0);at(u)||p(2);var l={},h=i(u.a),d=h.a,f=function(t,r){var i=e.aH,s=n.node,o=Ae(s);return function(e,t){t(e);var r=0;function n(){r=1===r?0:(Ne(n),t(e),1)}return function(i,s){e=i,s?(t(e),2===r&&(r=1)):(0===r&&Ne(n),r=2)}}(r,(function(e){var r,n=i(e),a=(ve(o,n,r=[],0),r);s=function(e,t,r,n){return 0===r.length?e:(Ee(e,t,r,n),Oe(e,r))}(s,o,a,t),o=n}))}(m,d),g=function(e,t){var r;for(var n in F){var i=F[n];i.a&&((r=r||{})[n]=i.a(n,t)),e[n]=$(i,t)}return r}(l,m);function m(e,t){var r=s(o,e,d);f(d=r.a,t),W(l,r.b,a(d))}return W(l,h.b,a(d)),g?{ports:g}:{}}(t,n,e.av,e.aG,e.aC)})),Ne=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Pe,De=l,Le=r((function(e){return e})),Me=n((function(e,t,r){return t(e(r))})),Ue=function(e){return{$:1,a:e}},je=r((function(e,t){return{$:3,a:e,b:t}})),Fe=r((function(e,t){return{$:0,a:e,b:t}})),$e=r((function(e,t){return{$:1,a:e,b:t}})),xe=function(e){return{$:0,a:e}},Ve=function(e){return{$:2,a:e}},He=n((function(e,t,r){for(;;){if(!r.b)return t;var n=r.b,i=e,o=s(e,r.a,t);e=i,t=o,r=n}})),Be=function(e){return o(He,De,c,e)},ze=32,We=i((function(e,t,r,n){return{$:0,a:e,b:t,c:r,d:n}})),qe=[],Ge=v,Ke=r((function(e,t){return _(t)/_(e)})),Je=Ge(s(Ke,2,ze)),Xe=a(We,0,Je,qe,qe),Ye=d,Qe=b,Ze=function(e){return e.length},et=r((function(e,t){return g(e,t)>0?e:t})),tt=f,rt=r((function(e,t){for(;;){var r=s(tt,ze,e),n=r.b,i=s(De,{$:0,a:r.a},t);if(!n.b)return Be(i);e=n,t=i}})),nt=r((function(e,t){for(;;){var r=Ge(t/ze);if(1===r)return s(tt,ze,e).a;e=s(rt,e,c),t=r}})),it=r((function(e,t){if(t.a){var r=t.a*ze,n=Qe(s(Ke,ze,r-1)),i=e?Be(t.d):t.d,o=s(nt,i,t.a);return a(We,Ze(t.c)+r,s(et,5,n*Je),o,t.c)}return a(We,Ze(t.c),Je,qe,t.c)})),st=t(5,Pe=function(e,t,r,n,i){for(;;){if(0>t)return s(it,!1,{d:n,a:r/ze|0,c:i});var a={$:1,a:o(Ye,ze,t,e)};t-=ze,n=s(De,a,n)}},(function(e){return function(t){return function(r){return function(n){return function(i){return Pe(e,t,r,n,i)}}}}})),ot=r((function(e,t){if(e>0){var r=e%ze;return function(e,t,r,n,i,s){return 5===e.a?e.f(t,r,n,i,s):e(t)(r)(n)(i)(s)}(st,t,e-r-ze,e,c,o(Ye,r,e-r,t))}return Xe})),at=function(e){return!e.$},ct=function(e){return{$:0,a:e}},ut=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},lt=A,ht=lt(0),dt=i((function(e,t,r,n){if(n.b){var i=n.a,c=n.b;if(c.b){var u=c.a,l=c.b;if(l.b){var h=l.a,d=l.b;if(d.b){var f=d.b;return s(e,i,s(e,u,s(e,h,s(e,d.a,r>500?o(He,e,t,Be(f)):a(dt,e,t,r+1,f)))))}return s(e,i,s(e,u,s(e,h,t)))}return s(e,i,s(e,u,t))}return s(e,i,t)}return t})),ft=n((function(e,t,r){return a(dt,e,t,0,r)})),pt=r((function(e,t){return o(ft,r((function(t,r){return s(De,e(t),r)})),c,t)})),gt=N,mt=r((function(e,t){return s(gt,(function(t){return lt(e(t))}),t)})),vt=n((function(e,t,r){return s(gt,(function(t){return s(gt,(function(r){return lt(s(e,t,r))}),r)}),t)})),bt=x,_t=r((function(e,t){var r=t;return function(e){return C((function(t){t(A(D(e)))}))}(s(gt,bt(e),r))}));F.Task={b:ht,c:n((function(e,t){var r;return s(mt,(function(){return 0}),(r=s(pt,_t(e),t),o(ft,vt(De),lt(c),r)))})),d:n((function(){return lt(0)})),e:r((function(e,t){return s(mt,e,t)})),f:void 0},V("Task");var yt,It=Ce,wt=H(c),Tt=H(c),kt=function(e){return e(0)},Et=K("signInPort",(function(){return null}))(0),St=K("signOutPort",(function(){return null}))(0),Ot=r((function(e,t){return m(t,e?St:Et)})),Rt=r((function(e,t){return s(ie,e,t)}))("className"),At=ee("div"),Ct=Le,Nt=pt(kt),Pt=r((function(e,t){var r=e?"mr-align-center-x":"mr-align-center-y";return s(Me,Nt,s(Me,At(function(e,t){if("string"==typeof e)return e+t;if(!e.b)return t;var r=u(e.a,t);e=e.b;for(var n=r;e.b;e=e.b)n=n.b=u(e.a,t);return r}(h([Rt("mr-align-center"),Rt(r)]),t)),Ct))})),Dt=function(e){return s(Me,Nt,s(Me,At(h([Rt(e)])),Ct))},Lt=Dt("mr-app"),Mt=Dt("mr-card"),Ut=pt(Ct),jt=function(e){return h([e])},Ft=ne,$t=ee("button"),xt=function(e){return s(Me,$t(s(De,Rt("mr-button"),e)),Ct)},Vt=ee("h1"),Ht=ee("h4"),Bt=re,zt=r((function(e,t){return s(Bt,e,{$:0,a:t})})),Wt=Z,qt=Dt("mr-text-center"),Gt=n((function(e,t,r){return h([s(Vt,c,h([Wt(e)])),s(Ht,c,h([Wt(t)])),kt(qt(h([s(xt,h([s(zt,"click",ct(0))]),h([Wt(r)]))])))])})),Kt=r((function(e,t){return t.$?e:t.a})),Jt=s(Me,(function(e){switch(e.$){case 0:return o(Gt,"Let's Tango!","At last you are here! We've been waiting. Click through and get to dancing.","Sign In with Google");case 1:return o(Gt,"Ooops...",s(Kt,"Something went wrong.",e.a.aw),"Sign In with Google");default:return o(Gt,"You're in, "+e.a.ar,"Let's dance!.","Sign Out")}}),s(Me,Ut,s(Me,Mt,s(Me,jt,s(Me,s(Pt,1,c),s(Me,jt,s(Me,s(Pt,0,h([s(Ft,"height","100vh")])),s(Me,jt,Lt))))))));yt={Main:{init:It({av:Le(m({$:0},wt)),aC:Le(Tt),aG:Ot,aH:s(Me,Jt,kt)})(ct(0))(0)}},e.Elm?function e(t,r){for(var n in r)n in t?"init"==n?p(6):e(t[n],r[n]):t[n]=r[n]}(e.Elm,yt):e.Elm=yt}(e);
/**
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
 */
const t=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),n.push(r[u],r[l],r[h],r[d])}return n.join("")},encodeString(e,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(e):this.encodeByteArray(t(e),r)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0;++t;const o=t<e.length?r[e.charAt(t)]:64;++t;const a=t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(n.push(c),64!==o){const e=s<<4&240|o>>2;if(n.push(e),64!==a){const e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},n=function(e){return function(e){const n=t(e);return r.encodeByteArray(n,!0)}(e).replace(/\./g,"")},i=function(e){try{return r.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}
/**
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
 */
/**
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
 */
function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function a(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function c(){const e=o();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class u extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,l.prototype.create)}}class l{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(h,((e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`}))}(i,r):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new u(n,o,r)}}const h=/\{\$([^}]+)}/g;
/**
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
 */function d(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function f(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const r=e[i],s=t[i];if(p(r)&&p(s)){if(!f(r,s))return!1}else if(r!==s)return!1}for(const e of n)if(!r.includes(e))return!1;return!0}function p(e){return null!==e&&"object"==typeof e}
/**
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
 */function g(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function m(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}})),t}function v(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
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
 */function b(e,t){const r=new _(e,t);return r.subscribe.bind(r)}class _{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=y),void 0===n.error&&(n.error=y),void 0===n.complete&&(n.complete=y);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function y(){}
/**
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
 */
/**
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
 */
function I(e){return e&&e._delegate?e._delegate:e}class w{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */
/**
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
 */
class T{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new s;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,"[DEFAULT]"===n?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class k{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new T(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */const E=[];var S,O;(O=S||(S={}))[O.DEBUG=0]="DEBUG",O[O.VERBOSE=1]="VERBOSE",O[O.INFO=2]="INFO",O[O.WARN=3]="WARN",O[O.ERROR=4]="ERROR",O[O.SILENT=5]="SILENT";const R={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},A=S.INFO,C={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},N=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),i=C[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${n}]  ${e.name}:`,...r)};class P{constructor(e){this.name=e,this._logLevel=A,this._logHandler=N,this._userLogHandler=null,E.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?R[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}let D,L;const M=new WeakMap,U=new WeakMap,j=new WeakMap,F=new WeakMap,$=new WeakMap;let x={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return U.get(e);if("objectStoreNames"===t)return e.objectStoreNames||j.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return B(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function V(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(L||(L=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(z(this),t),B(M.get(this))}:function(...t){return B(e.apply(z(this),t))}:function(t,...r){const n=e.call(z(this),t,...r);return j.set(n,t.sort?t.sort():[t]),B(n)}}function H(e){return"function"==typeof e?V(e):(e instanceof IDBTransaction&&function(e){if(U.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));U.set(e,t)}(e),t=e,(D||(D=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,x):e);var t}function B(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(B(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&M.set(t,e)})).catch((()=>{})),$.set(t,e),t}(e);if(F.has(e))return F.get(e);const t=H(e);return t!==e&&(F.set(e,t),$.set(t,e)),t}const z=e=>$.get(e);function W(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=B(o);return n&&o.addEventListener("upgradeneeded",(e=>{n(B(o.result),e.oldVersion,e.newVersion,B(o.transaction))})),r&&o.addEventListener("blocked",(()=>r())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const q=["get","getKey","getAll","getAllKeys","count"],G=["put","add","delete","clear"],K=new Map;function J(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(K.get(t))return K.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=G.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!q.includes(r))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return K.set(t,s),s}x=(e=>({...e,get:(t,r,n)=>J(t,r)||e.get(t,r,n),has:(t,r)=>!!J(t,r)||e.has(t,r)}))(x);
/**
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
 */
class X{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Y=new P("@firebase/app"),Q={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Z=new Map,ee=new Map;function te(e,t){try{e.container.addComponent(t)}catch(r){Y.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function re(e){const t=e.name;if(ee.has(t))return Y.debug(`There were multiple attempts to register component ${t}.`),!1;ee.set(t,e);for(const t of Z.values())te(t,e);return!0}function ne(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const ie=new l("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
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
 */
class se{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new w("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}
/**
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
 */function oe(e="[DEFAULT]"){const t=Z.get(e);if(!t)throw ie.create("no-app",{appName:e});return t}function ae(e,t,r){var n;let i=null!==(n=Q[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Y.warn(e.join(" "))}re(new w(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let ce=null;function ue(){return ce||(ce=W("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ie.create("storage-open",{originalErrorMessage:e.message})}))),ce}async function le(e,t){try{const r=(await ue()).transaction("firebase-heartbeat-store","readwrite"),n=r.objectStore("firebase-heartbeat-store");return await n.put(t,he(e)),r.done}catch(e){throw ie.create("storage-set",{originalErrorMessage:e.message})}}function he(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class de{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=fe(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const i of e){const e=r.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ge(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),ge(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=n(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fe(){return(new Date).toISOString().substring(0,10)}class pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ue()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(he(e))}catch(e){throw ie.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function ge(e){return n(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var me;me="",re(new w("platform-logger",(e=>new X(e)),"PRIVATE")),re(new w("heartbeat",(e=>new de(e)),"PRIVATE")),ae("@firebase/app","0.7.25",me),ae("@firebase/app","0.7.25","esm2017"),ae("fire-js","");
/**
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
 */
ae("firebase","9.8.2","app");function ve(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function be(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _e=be,ye=new l("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ie=new P("@firebase/auth");function we(e,...t){Ie.logLevel<=S.ERROR&&Ie.error(`Auth (9.8.2): ${e}`,...t)}
/**
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
 */function Te(e,...t){throw Oe(e,...t)}function ke(e,...t){return Oe(e,...t)}function Ee(e,t,r){const n=Object.assign(Object.assign({},_e()),{[t]:r});return new l("auth","Firebase",n).create(t,{appName:e.name})}function Se(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&Te(e,"argument-error"),Ee(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oe(e,...t){if("string"!=typeof e){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return ye.create(e,...t)}function Re(e,t,...r){if(!e)throw Oe(t,...r)}function Ae(e){const t="INTERNAL ASSERTION FAILED: "+e;throw we(t),new Error(t)}function Ce(e,t){e||Ae(t)}
/**
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
 */const Ne=new Map;function Pe(e){Ce(e instanceof Function,"Expected a class definition");let t=Ne.get(e);return t?(Ce(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ne.set(e,t),t)}
/**
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
 */
/**
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
 */
function De(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Le(){return"http:"===Me()||"https:"===Me()}function Me(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function Ue(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Le()||a()||"connection"in navigator))||navigator.onLine}
/**
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
 */
class je{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ce(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Ue()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function Fe(e,t){Ce(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
/**
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
 */class $e{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const xe={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ve=new je(3e4,6e4);
/**
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
 */function He(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Be(e,t,r,n,i={}){return ze(e,i,(async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});const o=g(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),$e.fetch()(qe(e,e.config.apiHost,r,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function ze(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},xe),t);try{const t=new Ge(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ke(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw Ke(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw Ke(e,"email-already-in-use",s);if("USER_DISABLED"===r)throw Ke(e,"user-disabled",s);const a=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ee(e,a,o);Te(e,a)}}catch(t){if(t instanceof u)throw t;Te(e,"network-request-failed")}}async function We(e,t,r,n,i={}){const s=await Be(e,t,r,n,i);return"mfaPendingCredential"in s&&Te(e,"multi-factor-auth-required",{_serverResponse:s}),s}function qe(e,t,r,n){const i=`${t}${r}?${n}`;return e.config.emulator?Fe(e.config,i):`${e.config.apiScheme}://${i}`}class Ge{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ke(this.auth,"network-request-failed"))),Ve.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ke(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=ke(e,t,n);return i.customData._tokenResponse=r,i}
/**
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
 */
/**
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
 */
function Je(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function Xe(e){return 1e3*Number(e)}function Ye(e){const[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return we("JWT malformed, contained fewer than 3 sections"),null;try{const e=i(r);return e?JSON.parse(e):(we("Failed to decode base64 JWT payload"),null)}catch(e){return we("Caught error parsing JWT payload as JSON",e),null}}
/**
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
 */
async function Qe(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof u&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ze{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class et{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Je(this.lastLoginAt),this.creationTime=Je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function tt(e){var t;const r=e.auth,n=await e.getIdToken(),i=await Qe(e,async function(e,t){return Be(e,"POST","/v1/accounts:lookup",t)}(r,{idToken:n}));Re(null==i?void 0:i.users.length,r,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,r=ve(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new et(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
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
 */
class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(void 0!==e.idToken,"internal-error"),Re(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ye(e);return Re(t,"internal-error"),Re(void 0!==t.exp,"internal-error"),Re(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Re(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:i}=await
/**
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
 */
async function(e,t){const r=await ze(e,{},(async()=>{const r=g({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=qe(e,n,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",$e.fetch()(s,{method:"POST",headers:o,body:r})}));return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new rt;return r&&(Re("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(Re("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(Re("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return Ae("not implemented")}}
/**
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
 */function nt(e,t){Re("string"==typeof e||void 0===e,"internal-error",{appName:t})}class it{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=ve(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ze(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new et(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qe(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=I(e),n=await r.getIdToken(t),i=Ye(n);Re(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Je(Xe(i.auth_time)),issuedAtTime:Je(Xe(i.iat)),expirationTime:Je(Xe(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=I(e);await tt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await tt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qe(this,async function(e,t){return Be(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,c,u;const l=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:y,providerData:I,stsTokenManager:w}=t;Re(b&&w,e,"internal-error");const T=rt.fromJSON(this.name,w);Re("string"==typeof b,e,"internal-error"),nt(l,e.name),nt(h,e.name),Re("boolean"==typeof _,e,"internal-error"),Re("boolean"==typeof y,e,"internal-error"),nt(d,e.name),nt(f,e.name),nt(p,e.name),nt(g,e.name),nt(m,e.name),nt(v,e.name);const k=new it({uid:b,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:y,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return I&&Array.isArray(I)&&(k.providerData=I.map((e=>Object.assign({},e)))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,r=!1){const n=new rt;n.updateFromServerResponse(t);const i=new it({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await tt(i),i}}
/**
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
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}st.type="NONE";const ot=st;
/**
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
 */function at(e,t,r){return`firebase:${e}:${t}:${r}`}class ct{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:i}=this.auth;this.fullUserKey=at(this.userKey,n.apiKey,i),this.fullPersistenceKey=at("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ct(Pe(ot),e,r);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=n[0]||Pe(ot);const s=at(r,e.config.apiKey,e.name);let o=null;for(const r of t)try{const t=await r._get(s);if(t){const n=it._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}const a=n.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new ct(i,e,r)):new ct(i,e,r)}}
/**
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
 */function ut(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ft(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gt(t))return"Blackberry";if(mt(t))return"Webos";if(ht(t))return"Safari";if((t.includes("chrome/")||dt(t))&&!t.includes("edge/"))return"Chrome";if(pt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null==r?void 0:r.length))return r[1]}return"Other"}function lt(e=o()){return/firefox\//i.test(e)}function ht(e=o()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dt(e=o()){return/crios\//i.test(e)}function ft(e=o()){return/iemobile/i.test(e)}function pt(e=o()){return/android/i.test(e)}function gt(e=o()){return/blackberry/i.test(e)}function mt(e=o()){return/webos/i.test(e)}function vt(e=o()){return/iphone|ipad|ipod/i.test(e)}function bt(){return c()&&10===document.documentMode}function _t(e=o()){return vt(e)||pt(e)||mt(e)||gt(e)||/windows phone/i.test(e)||ft(e)}
/**
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
 */
function yt(e,t=[]){let r;switch(e){case"Browser":r=ut(o());break;case"Worker":r=`${ut(o())}-${e}`;break;default:r=e}return`${r}/JsCore/9.8.2/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
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
 */class It{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise(((r,n)=>{try{r(e(t))}catch(e){n(e)}}));r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e.message})}}}
/**
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
 */class wt{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kt(this),this.idTokenSubscription=new kt(this),this.beforeStateQueue=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ye,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pe(t)),this._initializationPromise=this.queue((async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await ct.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==s||!(null==o?void 0:o.user)||(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tt(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?I(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Pe(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new l("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pe(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[Pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Re(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Tt(e){return I(e)}class kt{constructor(e){this.auth=e,this.observer=null,this.addObserver=b((e=>this.observer=e))}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class Et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ae("not implemented")}_getIdTokenResponse(e){return Ae("not implemented")}_linkToIdToken(e,t){return Ae("not implemented")}_getReauthenticationResolver(e){return Ae("not implemented")}}
/**
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
 */async function St(e,t){return Be(e,"POST","/v1/accounts:update",t)}
/**
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
 */
class Ot extends Et{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Ot(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ot(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
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
 */
return async function(e,t){return We(e,"POST","/v1/accounts:signInWithPassword",He(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
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
 */
return async function(e,t){return We(e,"POST","/v1/accounts:signInWithEmailLink",He(e,t))}(e,{email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return St(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return We(e,"POST","/v1/accounts:signInWithEmailLink",He(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Rt(e,t){return We(e,"POST","/v1/accounts:signInWithIdp",He(e,t))}
/**
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
 */class At extends Et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new At(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Te("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=ve(t,["providerId","signInMethod"]);if(!r||!n)return null;const s=new At(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Rt(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Rt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=g(t)}return e}}
/**
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
 */const Ct={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class Nt extends Et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Nt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Nt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return We(e,"POST","/v1/accounts:signInWithPhoneNumber",He(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const r=await We(e,"POST","/v1/accounts:signInWithPhoneNumber",He(e,t));if(r.temporaryProof)throw Ke(e,"account-exists-with-different-credential",r);return r}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return We(e,"POST","/v1/accounts:signInWithPhoneNumber",He(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ct)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new Nt({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}
/**
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
 */class Pt{constructor(e){var t,r,n,i,s,o;const a=m(v(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(r=a.oobCode)&&void 0!==r?r:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);Re(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=m(v(e)).link,r=t?m(v(t)).deep_link_id:null,n=m(v(e)).deep_link_id;return(n?m(v(n)).link:null)||n||r||t||e}(e);try{return new Pt(t)}catch(e){return null}}}
/**
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
 */
class Dt{constructor(){this.providerId=Dt.PROVIDER_ID}static credential(e,t){return Ot._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Pt.parseLink(t);return Re(r,"argument-error"),Ot._fromEmailAndCode(e,r.code,r.tenantId)}}Dt.PROVIDER_ID="password",Dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Mt extends Lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Ut extends Mt{constructor(){super("facebook.com")}static credential(e){return At._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch(e){return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ut.PROVIDER_ID="facebook.com";
/**
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
 */
class jt extends Mt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return At._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return jt.credential(t,r)}catch(e){return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com",jt.PROVIDER_ID="google.com";
/**
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
 */
class Ft extends Mt{constructor(){super("github.com")}static credential(e){return At._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch(e){return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com",Ft.PROVIDER_ID="github.com";
/**
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
 */
class $t extends Mt{constructor(){super("twitter.com")}static credential(e,t){return At._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return $t.credential(t,r)}catch(e){return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com",$t.PROVIDER_ID="twitter.com";
/**
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
 */
class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const i=await it._fromIdTokenResponse(e,r,n),s=Vt(r);return new xt({user:i,providerId:s,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=Vt(r);return new xt({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function Vt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class Ht extends u{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,Ht.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new Ht(e,t,r,n)}}function Bt(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((r=>{if("auth/multi-factor-auth-required"===r.code)throw Ht._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
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
 */async function zt(e,t,r=!1){const n=await Qe(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return xt._forOperation(e,"link",n)}
/**
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
 */
async function Wt(e,t,r=!1){const{auth:n}=e,i="reauthenticate";try{const s=await Qe(e,Bt(n,i,t,e),r);Re(s.idToken,n,"internal-error");const o=Ye(s.idToken);Re(o,n,"internal-error");const{sub:a}=o;return Re(e.uid===a,n,"user-mismatch"),xt._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Te(n,"user-mismatch"),e}}
/**
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
 */async function qt(e,t,r=!1){const n="signIn",i=await Bt(e,n,t),s=await xt._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}function Gt(e){return I(e).signOut()}new WeakMap;
/**
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
 */
class Kt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Jt extends Kt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=o();return ht(e)||vt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,r)=>{this.notifyListeners(e,r)}));const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);bt()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jt.type="LOCAL";const Xt=Jt;
/**
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
 */class Yt extends Kt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yt.type="SESSION";const Qt=Yt;
/**
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
 */
/**
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
 */
class Zt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const r=new Zt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:i}=t.data,s=this.handlersMap[n];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function er(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}
/**
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
 */Zt.receivers=[];class tr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=er("",20);n.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),r);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[n.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function rr(){return window}
/**
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
 */
function nr(){return void 0!==rr().WorkerGlobalScope&&"function"==typeof rr().importScripts}class ir{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function sr(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function or(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,r)=>{e.addEventListener("error",(()=>{r(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){r(e)}})),e.addEventListener("success",(async()=>{const r=e.result;r.objectStoreNames.contains("firebaseLocalStorage")?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ir(e).toPromise()}(),t(await or()))}))}))}async function ar(e,t,r){const n=sr(e,!0).put({fbase_key:t,value:r});return new ir(n).toPromise()}function cr(e,t){const r=sr(e,!0).delete(t);return new ir(r).toPromise()}class ur{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await or()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zt._getInstance(nr()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new tr(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await or();return await ar(e,"__sak","1"),await cr(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((r=>ar(r,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const r=sr(e,!1).get(t),n=await new ir(r).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>cr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=sr(e,!1).getAll();return new ir(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;for(const{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ur.type="LOCAL";const lr=ur;
/**
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
 */function hr(e){return new Promise(((t,r)=>{const n=document.createElement("script");
/**
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
 */
var i,s;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=ke("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(n)}))}function dr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
dr("rcb"),new je(3e4,6e4);async function fr(e,t,r){var n;const i=await r.verify();try{let s;if(Re("string"==typeof i,e,"argument-error"),Re("recaptcha"===r.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Re("enroll"===t.type,e,"internal-error");const r=await
/**
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
 */
function(e,t){return Be(e,"POST","/v2/accounts/mfaEnrollment:start",He(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return r.phoneSessionInfo.sessionInfo}{Re("signin"===t.type,e,"internal-error");const r=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;Re(r,e,"missing-multi-factor-info");const o=await function(e,t){return Be(e,"POST","/v2/accounts/mfaSignIn:start",He(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Be(e,"POST","/v1/accounts:sendVerificationCode",He(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{r._reset()}}
/**
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
 */
class pr{constructor(e){this.providerId=pr.PROVIDER_ID,this.auth=Tt(e)}verifyPhoneNumber(e,t){return fr(this.auth,e,I(t))}static credential(e,t){return Nt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return pr.credentialFromTaggedObject(t)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Nt._fromTokenResponse(t,r):null}}
/**
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
 */
function gr(e,t){return t?Pe(t):(Re(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */pr.PROVIDER_ID="phone",pr.PHONE_SIGN_IN_METHOD="phone";class mr extends Et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vr(e){return qt(e.auth,new mr(e),e.bypassAuthState)}function br(e){const{auth:t,user:r}=e;return Re(r,t,"internal-error"),Wt(r,new mr(e),e.bypassAuthState)}async function _r(e){const{auth:t,user:r}=e;return Re(r,t,"internal-error"),zt(r,new mr(e),e.bypassAuthState)}
/**
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
 */class yr{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vr;case"linkViaPopup":case"linkViaRedirect":return _r;case"reauthViaPopup":case"reauthViaRedirect":return br;default:Te(this.auth,"internal-error")}}resolve(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Ir=new je(2e3,1e4);async function wr(e,t,r){const n=Tt(e);Se(e,t,Lt);const i=gr(n,r);return new Tr(n,"signInViaPopup",t,i).executeNotNull()}class Tr extends yr{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Ce(1===this.filter.length,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ke(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ke(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ir.get())};e()}}Tr.currentPopupAction=null;
/**
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
 */
const kr=new Map;class Er extends yr{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=kr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=Rr(t),n=Or(e);if(!await n._isAvailable())return!1;const i="true"===await n._get(r);return await n._remove(r),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}kr.set(this.auth._key(),e)}return this.bypassAuthState||kr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Sr(e,t){kr.set(e._key(),t)}function Or(e){return Pe(e._redirectPersistence)}function Rr(e){return at("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */async function Ar(e,t,r=!1){const n=Tt(e),i=gr(n,t),s=new Er(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class Cr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pr(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Pr(e)){const n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(ke(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nr(e))}saveEventToCache(e){this.cachedEventUids.add(Nr(e)),this.lastProcessedEventTime=Date.now()}}function Nr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Pr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Dr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lr=/^https?/;async function Mr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Be(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ur(e))return}catch(e){}Te(e,"unauthorized-domain")}function Ur(e){const t=De(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!Lr.test(r))return!1;if(Dr.test(e))return n===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}
/**
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
 */const jr=new je(3e4,6e4);function Fr(){const e=rr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let $r=null;function xr(e){return $r=$r||function(e){return new Promise(((t,r)=>{var n,i,s;function o(){Fr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fr(),r(ke(e,"network-request-failed"))},timeout:jr.get()})}if(null===(i=null===(n=rr().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=rr().gapi)||void 0===s?void 0:s.load)){const t=dr("iframefcb");return rr()[t]=()=>{gapi.load?o():r(ke(e,"network-request-failed"))},hr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>r(e)))}o()}})).catch((e=>{throw $r=null,e}))}(e),$r}
/**
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
 */const Vr=new je(5e3,15e3),Hr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Br=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zr(e){const t=e.config;Re(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?Fe(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:"9.8.2"},i=Br.get(e.config.apiHost);i&&(n.eid=i);const s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${g(n).slice(1)}`}
/**
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
 */
const Wr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gr(e,t,r,n=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Wr),{width:n.toString(),height:i.toString(),top:s,left:a}),l=o().toLowerCase();r&&(c=dt(l)?"_blank":r),lt(l)&&(t=t||"http://localhost",u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,r])=>`${e}${t}=${r},`),"");if(function(e=o()){var t;return vt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==c)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
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
 */(t||"",c),new qr(null);const d=window.open(t||"",c,h);Re(d,e,"popup-blocked");try{d.focus()}catch(e){}return new qr(d)}function Kr(e,t,r,n,i,s){Re(e.config.authDomain,e,"auth-domain-config-required"),Re(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:"9.8.2",eventId:i};if(t instanceof Lt){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",d(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Mt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Fe(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
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
 */(e)}?${g(a).slice(1)}`}const Jr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qt,this._completeRedirectFn=Ar,this._overrideRedirectResult=Sr}async _openPopup(e,t,r,n){var i;Ce(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Gr(e,Kr(e,t,r,De(),n),er())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=Kr(e,t,r,De(),n),rr().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(Ce(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch((()=>{delete this.eventManagers[t]})),r}async initAndGetManager(e){const t=await async function(e){const t=await xr(e),r=rr().gapi;return Re(r,e,"internal-error"),t.open({where:document.body,url:zr(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hr,dontclear:!0},(t=>new Promise((async(r,n)=>{await t.restyle({setHideOnLeave:!1});const i=ke(e,"network-request-failed"),s=rr().setTimeout((()=>{n(i)}),Vr.get());function o(){rr().clearTimeout(s),r(t)}t.ping(o).then(o,(()=>{n(i)}))}))))}(e),r=new Cr(e);return t.register("authEvent",(t=>{Re(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(r=>{var n;const i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),Te(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _t()||ht()||vt()}};var Xr;
/**
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
 */
class Yr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */Xr="Browser",re(new w("auth",((e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=r.options;return((e,r)=>{Re(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Re(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:s,clientPlatform:Xr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yt(Xr)},o=new wt(e,r,n);return function(e,t){const r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Pe);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(r,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,r)=>{e.getProvider("auth-internal").initialize()}))),re(new w("auth-internal",(e=>{const t=Tt(e.getProvider("auth").getImmediate());return new Yr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ae("@firebase/auth","0.20.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Xr)),ae("@firebase/auth","0.20.2","esm2017");!function(e,t={}){if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),n=r.name;if("string"!=typeof n||!n)throw ie.create("bad-app-name",{appName:String(n)});const i=Z.get(n);if(i){if(f(e,i.options)&&f(r,i.config))return i;throw ie.create("duplicate-app",{appName:n})}const s=new k(n);for(const e of ee.values())s.addComponent(e);const o=new se(e,r,s);Z.set(n,o)}({firebase:{apiKey:"AIzaSyADbuphHuhoi1l8je7C5ED0MMr-JPfkAz0",authDomain:"tango-dating.firebaseapp.com",projectId:"tango-dating",storageBucket:"tango-dating.appspot.com",messagingSenderId:"481562476129",appId:"1:481562476129:web:975ddc701692c5deeb3420",measurementId:"G-NNCKGE0YRC"}}.firebase);const Qr=new jt,Zr=
/**
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
 */
function(e=oe()){const t=ne(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const r=ne(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(f(r.getOptions(),null!=t?t:{}))return e;Te(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:Jr,persistence:[lr,Xt,Qt]})}();function en(e){console.log("LogIn called"),wr(Zr,Qr).then((e=>{e.user.getIdToken().then((e=>{console.info("auth ok")}))})).catch((e=>{console.error("auth error:",e.code,e.message)}))}var tn,rn,nn;tn=e=>{console.log("auth state changed"),e?e.getIdToken().then((e=>{console.log("logged in")})).catch((e=>{console.log("error retrieving cached user:",e)})):console.log("logged out")},I(Zr).onAuthStateChanged(tn,rn,nn);var sn={attachPorts:function(e){e.signInPort.subscribe((()=>en())),e.signOutPort.subscribe((()=>{console.log("SignOut called"),Gt(Zr)}))}};const on=e.Elm.Main.init({node:document.getElementById("app")});sn.attachPorts(on.ports);
//# sourceMappingURL=index.8d9fa55f.js.map
