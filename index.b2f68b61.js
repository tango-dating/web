"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;var e={};!function(e){function t(e,t,n){return n.a=e,n.f=t,n}function n(e){return t(2,e,(function(t){return function(n){return e(t,n)}}))}function r(e){return t(3,e,(function(t){return function(n){return function(r){return e(t,n,r)}}}))}function i(e){return t(4,e,(function(t){return function(n){return function(r){return function(i){return e(t,n,r,i)}}}}))}function s(e){return t(5,e,(function(t){return function(n){return function(r){return function(i){return function(s){return e(t,n,r,i,s)}}}}}))}function o(e,t,n){return 2===e.a?e.f(t,n):e(t)(n)}function a(e,t,n,r){return 3===e.a?e.f(t,n,r):e(t)(n)(r)}function c(e,t,n,r,i){return 4===e.a?e.f(t,n,r,i):e(t)(n)(r)(i)}function u(e,t,n,r,i,s){return 5===e.a?e.f(t,n,r,i,s):e(t)(n)(r)(i)(s)}function l(e,t,n,r,i,s,o){return 6===e.a?e.f(t,n,r,i,s,o):e(t)(n)(r)(i)(s)(o)}function h(e,t){for(var n,r=[],i=d(e,t,0,r);i&&(n=r.pop());i=d(n.a,n.b,0,r));return i}function d(e,t,n,r){if(e===t)return!0;if("object"!=typeof e||null===e||null===t)return"function"==typeof e&&E(5),!1;if(n>100)return r.push(v(e,t)),!0;for(var i in 0>e.$&&(e=bt(e),t=bt(t)),e)if(!d(e[i],t[i],n+1,r))return!1;return!0}function f(e,t,n){if("object"!=typeof e)return e===t?0:t>e?-1:1;if(void 0===e.$)return(n=f(e.a,t.a))||(n=f(e.b,t.b))?n:f(e.c,t.c);for(;e.b&&t.b&&!(n=f(e.a,t.a));e=e.b,t=t.b);return n||(e.b?1:t.b?-1:0)}var p=n((function(e,t){var n=f(e,t);return 0>n?vt:n?pt:ft}));function v(e,t){return{a:e,b:t}}function g(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}function m(e,t){if("string"==typeof e)return e+t;if(!e.b)return t;var n=_(e.a,t);e=e.b;for(var r=n;e.b;e=e.b)r=r.b=_(e.a,t);return n}var b={$:0};function _(e,t){return{$:1,a:e,b:t}}var y=n(_);function I(e){for(var t=b,n=e.length;n--;)t=_(e[n],t);return t}var w=r((function(e,t,n){for(var r=[];t.b&&n.b;t=t.b,n=n.b)r.push(o(e,t.a,n.a));return I(r)})),T=r((function(e,t,n){for(var r=Array(e),i=0;e>i;i++)r[i]=n(t+i);return r})),k=n((function(e,t){for(var n=Array(e),r=0;e>r&&t.b;r++)n[r]=t.a,t=t.b;return n.length=r,v(n,t)}));function E(e){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}var S=Math.ceil,O=Math.floor,A=Math.log,R=n((function(e,t){return t.split(e)})),C=n((function(e,t){return t.join(e)})),N=r((function(e,t,n){return n.slice(e,t)})),P=n((function(e,t){for(var n=t.length;n--;){var r=t[n],i=t.charCodeAt(n);if(56320>i||i>57343||(r=t[--n]+r),!e(r))return!1}return!0})),D=n((function(e,t){return t.indexOf(e)>-1})),L=n((function(e,t){return 0===t.indexOf(e)})),M=n((function(e,t){var n=e.length;if(1>n)return b;for(var r=0,i=[];(r=t.indexOf(e,r))>-1;)i.push(r),r+=n;return I(i)}));function $(e){return{$:2,b:e}}$((function(e){return"number"!=typeof e?G("an INT",e):e>-2147483647&&2147483647>e&&(0|e)===e?Tt(e):!isFinite(e)||e%1?G("an INT",e):Tt(e)})),$((function(e){return"boolean"==typeof e?Tt(e):G("a BOOL",e)})),$((function(e){return"number"==typeof e?Tt(e):G("a FLOAT",e)}));var U=$((function(e){return Tt(e)})),j=$((function(e){return"string"==typeof e?Tt(e):e instanceof String?Tt(e+""):G("a STRING",e)})),x=n((function(e,t){return{$:6,d:e,b:t}}));function F(e,t){return{$:9,f:e,g:t}}var V=n((function(e,t){return F(e,[t])})),B=r((function(e,t,n){return F(e,[t,n])})),H=n((function(e,t){return z(e,t)}));function z(e,t){switch(e.$){case 2:return e.b(t);case 5:return null===t?Tt(e.c):G("null",t);case 3:return q(t)?W(e.b,t,I):G("a LIST",t);case 4:return q(t)?W(e.b,t,K):G("an ARRAY",t);case 6:var n=e.d;if("object"!=typeof t||null===t||!(n in t))return G("an OBJECT with a field named `"+n+"`",t);var r=z(e.b,t[n]);return dn(r)?r:_t(o(It,n,r.a));case 7:var i=e.e;return q(t)?t.length>i?(r=z(e.b,t[i]),dn(r)?r:_t(o(wt,i,r.a))):G("a LONGER array. Need index "+i+" but only see "+t.length+" entries",t):G("an ARRAY",t);case 8:if("object"!=typeof t||null===t||q(t))return G("an OBJECT",t);var s=b;for(var a in t)if(t.hasOwnProperty(a)){if(r=z(e.b,t[a]),!dn(r))return _t(o(It,a,r.a));s=_(v(a,r.a),s)}return Tt(Ht(s));case 9:for(var c=e.f,u=e.g,l=0;u.length>l;l++){if(r=z(u[l],t),!dn(r))return r;c=c(r.a)}return Tt(c);case 10:return r=z(e.b,t),dn(r)?z(e.h(r.a),t):r;case 11:for(var h=b,d=e.g;d.b;d=d.b){if(r=z(d.a,t),dn(r))return r;h=_(r.a,h)}return _t(kt(Ht(h)));case 1:return _t(o(yt,e.a,t));case 0:return Tt(e.a)}}function W(e,t,n){for(var r=t.length,i=Array(r),s=0;r>s;s++){var a=z(e,t[s]);if(!dn(a))return _t(o(wt,s,a.a));i[s]=a.a}return Tt(n(i))}function q(e){return Array.isArray(e)||"undefined"!=typeof FileList&&e instanceof FileList}function K(e){return o(hn,e.length,(function(t){return e[t]}))}function G(e,t){return _t(o(yt,"Expecting "+e,t))}function J(e,t){if(e===t)return!0;if(e.$!==t.$)return!1;switch(e.$){case 0:case 1:return e.a===t.a;case 2:return e.b===t.b;case 5:return e.c===t.c;case 3:case 4:case 8:return J(e.b,t.b);case 6:return e.d===t.d&&J(e.b,t.b);case 7:return e.e===t.e&&J(e.b,t.b);case 9:return e.f===t.f&&X(e.g,t.g);case 10:return e.h===t.h&&J(e.b,t.b);case 11:return X(e.g,t.g)}}function X(e,t){var n=e.length;if(n!==t.length)return!1;for(var r=0;n>r;r++)if(!J(e[r],t[r]))return!1;return!0}var Y=n((function(e,t){return JSON.stringify(t,null,e)+""}));function Q(e){return{$:0,a:e}}function Z(e){return{$:2,b:e,c:null}}var ee=n((function(e,t){return{$:3,b:e,d:t}})),te=0;function ne(e){var t={$:0,e:te++,f:e,g:null,h:[]};return se(t),t}var re=!1,ie=[];function se(e){if(ie.push(e),!re){for(re=!0;e=ie.shift();)oe(e);re=!1}}function oe(e){for(;e.f;){var t=e.f.$;if(0===t||1===t){for(;e.g&&e.g.$!==t;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else{if(2===t)return void(e.f.c=e.f.b((function(t){e.f=t,se(e)})));if(5===t){if(0===e.h.length)return;e.f=e.f.b(e.h.shift())}else e.g={$:3===t?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}}var ae={};function ce(e,t){var n={g:t,h:void 0},r=e.c,i=e.d,s=e.e,u=e.f;return n.h=ne(o(ee,(function e(t){return o(ee,e,{$:5,b:function(e){var o=e.a;return 0===e.$?a(i,n,o,t):s&&u?c(r,n,o.i,o.j,t):a(r,n,s?o.i:o.j,t)}})}),e.b))}var ue=n((function(e,t){return Z((function(n){e.g(t),n(Q(0))}))}));function le(e){return function(t){return{$:1,k:e,l:t}}}function he(e){return{$:2,m:e}}var de=n((function(e,t){return{$:3,n:e,o:t}})),fe=[],pe=!1;function ve(e,t,n){if(fe.push({p:e,q:t,r:n}),!pe){pe=!0;for(var r;r=fe.shift();)ge(r.p,r.q,r.r);pe=!1}}function ge(e,t,n){var r,i={};for(var s in me(!0,t,i,null),me(!1,n,i,null),e)(r=e[s]).h.push({$:"fx",a:i[s]||{i:b,j:b}}),se(r)}function me(e,t,n,r){switch(t.$){case 1:var i=t.k,s=(c=e,u=i,l=r,h=t.l,o(c?ae[u].e:ae[u].f,(function(e){for(var t=l;t;t=t.t)e=t.s(e);return e}),h));return void(n[i]=function(e,t,n){return n=n||{i:b,j:b},e?n.i=_(t,n.i):n.j=_(t,n.j),n}(e,s,n[i]));case 2:for(var a=t.m;a.b;a=a.b)me(e,a.a,n,r);return;case 3:return void me(e,t.o,n,{s:t.n,t:r})}var c,u,l,h}function be(e){ae[e]&&E(3)}function _e(e,t){return be(e),ae[e]={e:ye,u:t,a:Ie},le(e)}var ye=n((function(e,t){return t}));function Ie(e){var t=[],n=ae[e].u,i=Z((function(e){var t=setTimeout((function(){e(Q(0))}),0);return function(){clearTimeout(t)}}));return ae[e].b=i,ae[e].c=r((function(e,r){for(;r.b;r=r.b)for(var s=t,o=n(r.a),a=0;s.length>a;a++)s[a](o);return i})),{subscribe:function(e){t.push(e)},unsubscribe:function(e){var n=(t=t.slice()).indexOf(e);0>n||t.splice(n,1)}}}function we(e,t){return be(e),ae[e]={f:ke,u:t,a:Ee},le(e)}var Te,ke=n((function(e,t){return function(n){return e(t(n))}}));function Ee(e,t){var n=b,i=ae[e].u,s=Q(null);return ae[e].b=s,ae[e].c=r((function(e,t){return n=t,s})),{send:function(e){var r=o(H,i,e);dn(r)||E(4);for(var s=r.a,a=n;a.b;a=a.b)t(a.a(s))}}}var Se="undefined"!=typeof document?document:{};function Oe(e,t){e.appendChild(t)}function Ae(e){return{$:0,a:e}}var Re=n((function(e,t){return n((function(n,r){for(var i=[],s=0;r.b;r=r.b){var o=r.a;s+=o.b||0,i.push(o)}return s+=i.length,{$:1,c:t,d:$e(n),e:i,f:e,b:s}}))}))(void 0);n((function(e,t){return n((function(n,r){for(var i=[],s=0;r.b;r=r.b){var o=r.a;s+=o.b.b||0,i.push(o)}return s+=i.length,{$:2,c:t,d:$e(n),e:i,f:e,b:s}}))}))(void 0);var Ce,Ne=n((function(e,t){return{$:4,j:e,k:t,b:1+(t.b||0)}})),Pe=n((function(e,t){return{$:"a0",n:e,o:t}})),De=n((function(e,t){return{$:"a1",n:e,o:t}})),Le=n((function(e,t){return{$:"a2",n:e,o:t}})),Me=n((function(e,t){return{$:"a3",n:e,o:t}}));function $e(e){for(var t={};e.b;e=e.b){var n=e.a,r=n.$,i=n.n,s=n.o;if("a2"!==r){var o=t[r]||(t[r]={});"a3"===r&&"class"===i?Ue(o,i,s):o[i]=s}else"className"===i?Ue(t,i,s):t[i]=s}return t}function Ue(e,t,n){var r=e[t];e[t]=r?r+" "+n:n}function je(e,t){var n=e.$;if(5===n)return je(e.k||(e.k=e.m()),t);if(0===n)return Se.createTextNode(e.a);if(4===n){for(var r=e.k,i=e.j;4===r.$;)"object"!=typeof i?i=[i,r.j]:i.push(r.j),r=r.k;var s={j:i,p:t};return(o=je(r,s)).elm_event_node_ref=s,o}if(3===n)return xe(o=e.h(e.g),t,e.d),o;var o=e.f?Se.createElementNS(e.f,e.c):Se.createElement(e.c);Te&&"a"==e.c&&o.addEventListener("click",Te(o)),xe(o,t,e.d);for(var a=e.e,c=0;a.length>c;c++)Oe(o,je(1===n?a[c]:a[c].b,t));return o}function xe(e,t,n){for(var r in n){var i=n[r];"a1"===r?Fe(e,i):"a0"===r?He(e,t,i):"a3"===r?Ve(e,i):"a4"===r?Be(e,i):("value"!==r&&"checked"!==r||e[r]!==i)&&(e[r]=i)}}function Fe(e,t){var n=e.style;for(var r in t)n[r]=t[r]}function Ve(e,t){for(var n in t){var r=t[n];void 0!==r?e.setAttribute(n,r):e.removeAttribute(n)}}function Be(e,t){for(var n in t){var r=t[n],i=r.f,s=r.o;void 0!==s?e.setAttributeNS(i,n,s):e.removeAttributeNS(i,n)}}function He(e,t,n){var r=e.elmFs||(e.elmFs={});for(var i in n){var s=n[i],o=r[i];if(s){if(o){if(o.q.$===s.$){o.q=s;continue}e.removeEventListener(i,o)}o=ze(t,s),e.addEventListener(i,o,Ce&&{passive:2>gn(s)}),r[i]=o}else e.removeEventListener(i,o),r[i]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ce=!0}}))}catch(e){}function ze(e,t){function n(t){var r=n.q,i=z(r.a,t);if(dn(i)){for(var s,o=gn(r),a=i.a,c=o?3>o?a.a:a.as:a,u=1==o?a.b:3==o&&a.aa,l=(u&&t.stopPropagation(),(2==o?a.b:3==o&&a.X)&&t.preventDefault(),e);s=l.j;){if("function"==typeof s)c=s(c);else for(var h=s.length;h--;)c=s[h](c);l=l.p}l(c,u)}}return n.q=t,n}function We(e,t){return e.$==t.$&&J(e.a,t.a)}function qe(e,t,n,r){var i={$:t,r:n,s:r,t:void 0,u:void 0};return e.push(i),i}function Ke(e,t,n,r){if(e!==t){var i=e.$,s=t.$;if(i!==s){if(1!==i||2!==s)return void qe(n,0,r,t);t=function(e){for(var t=e.e,n=t.length,r=Array(n),i=0;n>i;i++)r[i]=t[i].b;return{$:1,c:e.c,d:e.d,e:r,f:e.f,b:e.b}}(t),s=1}switch(s){case 5:for(var o=e.l,a=t.l,c=o.length,u=c===a.length;u&&c--;)u=o[c]===a[c];if(u)return void(t.k=e.k);t.k=t.m();var l=[];return Ke(e.k,t.k,l,0),void(l.length>0&&qe(n,1,r,l));case 4:for(var h=e.j,d=t.j,f=!1,p=e.k;4===p.$;)f=!0,"object"!=typeof h?h=[h,p.j]:h.push(p.j),p=p.k;for(var v=t.k;4===v.$;)f=!0,"object"!=typeof d?d=[d,v.j]:d.push(v.j),v=v.k;return f&&h.length!==d.length?void qe(n,0,r,t):((f?function(e,t){for(var n=0;e.length>n;n++)if(e[n]!==t[n])return!1;return!0}(h,d):h===d)||qe(n,2,r,d),void Ke(p,v,n,r+1));case 0:return void(e.a!==t.a&&qe(n,3,r,t.a));case 1:return void Ge(e,t,n,r,Xe);case 2:return void Ge(e,t,n,r,Ye);case 3:if(e.h!==t.h)return void qe(n,0,r,t);var g=Je(e.d,t.d);g&&qe(n,4,r,g);var m=t.i(e.g,t.g);return void(m&&qe(n,5,r,m))}}}function Ge(e,t,n,r,i){if(e.c===t.c&&e.f===t.f){var s=Je(e.d,t.d);s&&qe(n,4,r,s),i(e,t,n,r)}else qe(n,0,r,t)}function Je(e,t,n){var r;for(var i in e)if("a1"!==i&&"a0"!==i&&"a3"!==i&&"a4"!==i)if(i in t){var s=e[i],o=t[i];s===o&&"value"!==i&&"checked"!==i||"a0"===n&&We(s,o)||((r=r||{})[i]=o)}else(r=r||{})[i]=n?"a1"===n?"":"a0"===n||"a3"===n?void 0:{f:e[i].f,o:void 0}:"string"==typeof e[i]?"":null;else{var a=Je(e[i],t[i]||{},i);a&&((r=r||{})[i]=a)}for(var c in t)c in e||((r=r||{})[c]=t[c]);return r}function Xe(e,t,n,r){var i=e.e,s=t.e,o=i.length,a=s.length;o>a?qe(n,6,r,{v:a,i:o-a}):a>o&&qe(n,7,r,{v:o,e:s});for(var c=a>o?o:a,u=0;c>u;u++){var l=i[u];Ke(l,s[u],n,++r),r+=l.b||0}}function Ye(e,t,n,r){for(var i=[],s={},o=[],a=e.e,c=t.e,u=a.length,l=c.length,h=0,d=0,f=r;u>h&&l>d;){var p=(S=a[h]).a,v=(O=c[d]).a,g=S.b,m=O.b,b=void 0,_=void 0;if(p!==v){var y=a[h+1],I=c[d+1];if(y){var w=y.a,T=y.b;_=v===w}if(I){var k=I.a,E=I.b;b=p===k}if(b&&_)Ke(g,E,i,++f),Ze(s,i,p,m,d,o),f+=g.b||0,et(s,i,p,T,++f),f+=T.b||0,h+=2,d+=2;else if(b)f++,Ze(s,i,v,m,d,o),Ke(g,E,i,f),f+=g.b||0,h+=1,d+=2;else if(_)et(s,i,p,g,++f),f+=g.b||0,Ke(T,m,i,++f),f+=T.b||0,h+=2,d+=1;else{if(!y||w!==k)break;et(s,i,p,g,++f),Ze(s,i,v,m,d,o),f+=g.b||0,Ke(T,E,i,++f),f+=T.b||0,h+=2,d+=2}}else Ke(g,m,i,++f),f+=g.b||0,h++,d++}for(;u>h;){var S;f++,et(s,i,(S=a[h]).a,g=S.b,f),f+=g.b||0,h++}for(;l>d;){var O,A=A||[];Ze(s,i,(O=c[d]).a,O.b,void 0,A),d++}(i.length>0||o.length>0||A)&&qe(n,8,r,{w:i,x:o,y:A})}var Qe="_elmW6BL";function Ze(e,t,n,r,i,s){var o=e[n];if(!o)return s.push({r:i,A:o={c:0,z:r,r:i,s:void 0}}),void(e[n]=o);if(1===o.c){s.push({r:i,A:o}),o.c=2;var a=[];return Ke(o.z,r,a,o.r),o.r=i,void(o.s.s={w:a,A:o})}Ze(e,t,n+Qe,r,i,s)}function et(e,t,n,r,i){var s=e[n];if(s){if(0===s.c){s.c=2;var o=[];return Ke(r,s.z,o,i),void qe(t,9,i,{w:o,A:s})}et(e,t,n+Qe,r,i)}else{var a=qe(t,9,i,void 0);e[n]={c:1,z:r,r:i,s:a}}}function tt(e,t,n,r){nt(e,t,n,0,0,t.b,r)}function nt(e,t,n,r,i,s,o){for(var a=n[r],c=a.r;c===i;){var u=a.$;if(1===u)tt(e,t.k,a.s,o);else if(8===u)a.t=e,a.u=o,(l=a.s.w).length>0&&nt(e,t,l,0,i,s,o);else if(9===u){a.t=e,a.u=o;var l,h=a.s;h&&(h.A.s=e,(l=h.w).length>0&&nt(e,t,l,0,i,s,o))}else a.t=e,a.u=o;if(!(a=n[++r])||(c=a.r)>s)return r}var d=t.$;if(4===d){for(var f=t.k;4===f.$;)f=f.k;return nt(e,f,n,r,i+1,s,e.elm_event_node_ref)}for(var p=t.e,v=e.childNodes,g=0;p.length>g;g++){i++;var m=1===d?p[g]:p[g].b,b=i+(m.b||0);if(!(i>c||c>b||(a=n[r=nt(v[g],m,n,r,i,b,o)])&&(c=a.r)<=s))return r;i=b}return r}function rt(e,t){for(var n=0;t.length>n;n++){var r=t[n],i=r.t,s=it(i,r);i===e&&(e=s)}return e}function it(e,t){switch(t.$){case 0:return a=e,c=t.s,u=t.u,l=a.parentNode,(h=je(c,u)).elm_event_node_ref||(h.elm_event_node_ref=a.elm_event_node_ref),l&&h!==a&&l.replaceChild(h,a),h;case 4:return xe(e,t.u,t.s),e;case 3:return e.replaceData(0,e.length,t.s),e;case 1:return rt(e,t.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=t.s:e.elm_event_node_ref={j:t.s,p:t.u},e;case 6:for(var n=t.s,r=0;n.i>r;r++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var i=(n=t.s).e,s=e.childNodes[r=n.v];i.length>r;r++)e.insertBefore(je(i[r],t.u),s);return e;case 9:if(!(n=t.s))return e.parentNode.removeChild(e),e;var o=n.A;return void 0!==o.r&&e.parentNode.removeChild(e),o.s=rt(e,n.w),e;case 8:return function(e,t){var n=t.s,r=function(e,t){if(e){for(var n=Se.createDocumentFragment(),r=0;e.length>r;r++){var i=e[r].A;Oe(n,2===i.c?i.s:je(i.z,t.u))}return n}}(n.y,t);e=rt(e,n.w);for(var i=n.x,s=0;i.length>s;s++){var o=i[s],a=o.A,c=2===a.c?a.s:je(a.z,t.u);e.insertBefore(c,e.childNodes[o.r])}return r&&Oe(e,r),e}(e,t);case 5:return t.s(e);default:E(10)}var a,c,u,l,h}function st(e){if(3===e.nodeType)return Ae(e.textContent);if(1!==e.nodeType)return Ae("");for(var t=b,n=e.attributes,r=n.length;r--;){var i=n[r];t=_(o(Me,i.name,i.value),t)}var s=e.tagName.toLowerCase(),c=b,u=e.childNodes;for(r=u.length;r--;)c=_(st(u[r]),c);return a(Re,s,t,c)}var ot=i((function(e,t,n,r){return function(t,n,r,i,s,a){var c=o(H,t,n?n.flags:void 0);dn(c)||E(2);var u={},l=r(c.a),h=l.a,d=function(t,n){var r=e.Z&&e.Z(t),i=e.bx,s=Se.title,o=Se.body,a=st(o);return function(e,t){t(e);var n=0;function r(){n=1===n?0:(at(r),t(e),1)}return function(i,s){e=i,s?(t(e),2===n&&(n=1)):(0===n&&at(r),n=2)}}(n,(function(e){Te=r;var n,c=i(e),u=Re("body")(b)(c.aQ),l=(Ke(a,u,n=[],0),n);o=function(e,t,n,r){return 0===n.length?e:(tt(e,t,n,r),rt(e,n))}(o,a,l,t),a=u,Te=0,s!==c.bt&&(Se.title=s=c.bt)}))}(p,h),f=function(e,t){var n;for(var r in ae){var i=ae[r];i.a&&((n=n||{})[r]=i.a(r,t)),e[r]=ce(i,t)}return n}(u,p);function p(e,t){var n=o(i,e,h);d(h=n.a,t),ve(u,n.b,s(h))}return ve(u,l.b,s(h)),f?{ports:f}:{}}(t,r,e.a5,e.bw,e.bq)})),at=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)});function ct(){return Cn(Se.location.href).a||E(1)}var ut,lt=n((function(e,t){return o(Xn,Nn,Z((function(){history.pushState({},"",t),e()})))})),ht=("undefined"!=typeof document&&document,"undefined"!=typeof window?window:{addEventListener:function(){},removeEventListener:function(){}}),dt=n((function(e){return e})),ft=1,pt=2,vt=0,gt=y,mt=r((function(e,t,n){for(;;){if(-2===n.$)return t;var r=n.d,i=e,s=a(e,n.b,n.c,a(mt,e,t,n.e));e=i,t=s,n=r}})),bt=function(e){return a(mt,r((function(e,t,n){return o(gt,v(e,t),n)})),b,e)},_t=function(e){return{$:1,a:e}},yt=n((function(e,t){return{$:3,a:e,b:t}})),It=n((function(e,t){return{$:0,a:e,b:t}})),wt=n((function(e,t){return{$:1,a:e,b:t}})),Tt=function(e){return{$:0,a:e}},kt=function(e){return{$:2,a:e}},Et=function(e){return{$:0,a:e}},St={$:1},Ot=P,At=Y,Rt=function(e){return e+""},Ct=n((function(e,t){return o(C,e,function(e){for(var t=[];e.b;e=e.b)t.push(e.a);return t}(t))})),Nt=n((function(e,t){return I(o(R,e,t))})),Pt=function(e){return o(Ct,"\n    ",o(Nt,"\n",e))},Dt=r((function(e,t,n){for(;;){if(!n.b)return t;var r=n.b,i=e,s=o(e,n.a,t);e=i,t=s,n=r}})),Lt=function(e){return a(Dt,n((function(e,t){return t+1})),0,e)},Mt=w,$t=r((function(e,t,n){for(;;){if(f(e,t)>=1)return n;var r=e,i=t-1,s=o(gt,t,n);e=r,t=i,n=s}})),Ut=n((function(e,t){return a($t,e,t,b)})),jt=n((function(e,t){return a(Mt,e,o(Ut,0,Lt(t)-1),t)})),xt=function(e){var t=e.charCodeAt(0);return 55296>t||t>56319?t:1024*(t-55296)+e.charCodeAt(1)-56320+65536},Ft=function(e){var t=xt(e);return t>=97&&122>=t},Vt=function(e){var t=xt(e);return 90>=t&&t>=65},Bt=function(e){return Ft(e)||Vt(e)||57>=(t=xt(e))&&t>=48;var t},Ht=function(e){return a(Dt,gt,b,e)},zt=n((function(e,t){return"\n\n("+Rt(e+1)+") "+Pt(Wt(t))})),Wt=function(e){return o(qt,e,b)},qt=n((function(e,t){e:for(;;)switch(e.$){case 0:var n=e.a,r=e.b,i=function(){var e,t,r=(t=(e=n).charCodeAt(0),isNaN(t)?St:Et(55296>t||t>56319?v(e[0],e.slice(1)):v(e[0]+e[1],e.slice(2))));if(1===r.$)return!1;var i,s=r.a,a=s.b;return(Ft(i=s.a)||Vt(i))&&o(Ot,Bt,a)}();e=r,t=o(gt,i?"."+n:"['"+n+"']",t);continue e;case 1:r=e.b;var s="["+Rt(e.a)+"]";e=r,t=o(gt,s,t);continue e;case 2:var a=e.a;if(a.b){if(a.b.b){var c=(t.b?"The Json.Decode.oneOf at json"+o(Ct,"",Ht(t)):"Json.Decode.oneOf")+" failed in the following "+Rt(Lt(a))+" ways:";return o(Ct,"\n\n",o(gt,c,o(jt,zt,a)))}e=r=a.a;continue e}return"Ran into a Json.Decode.oneOf with no possibilities"+(t.b?" at json"+o(Ct,"",Ht(t)):"!");default:var u=e.a,l=e.b;return(c=t.b?"Problem with the value at json"+o(Ct,"",Ht(t))+":\n\n    ":"Problem with the given value:\n\n")+Pt(o(At,4,l))+"\n\n"+u}})),Kt=32,Gt=i((function(e,t,n,r){return{$:0,a:e,b:t,c:n,d:r}})),Jt=[],Xt=S,Yt=n((function(e,t){return A(t)/A(e)})),Qt=Xt(o(Yt,2,Kt)),Zt=c(Gt,0,Qt,Jt,Jt),en=T,tn=n((function(e,t){return t(e)})),nn=O,rn=function(e){return e.length},sn=n((function(e,t){return f(e,t)>0?e:t})),on=k,an=n((function(e,t){for(;;){var n=o(on,Kt,e),r=n.b,i=o(gt,{$:0,a:n.a},t);if(!r.b)return Ht(i);e=r,t=i}})),cn=n((function(e,t){for(;;){var n=Xt(t/Kt);if(1===n)return o(on,Kt,e).a;e=o(an,e,b),t=n}})),un=n((function(e,t){if(t.b){var n=t.b*Kt,r=nn(o(Yt,Kt,n-1)),i=e?Ht(t.e):t.e,s=o(cn,i,t.b);return c(Gt,rn(t.d)+n,o(sn,5,r*Qt),s,t.d)}return c(Gt,rn(t.d),Qt,Jt,t.d)})),ln=s((function(e,t,n,r,i){for(;;){if(0>t)return o(un,!1,{e:r,b:n/Kt|0,d:i});var s={$:1,a:a(en,Kt,t,e)};t-=Kt,r=o(gt,s,r)}})),hn=n((function(e,t){if(e>0){var n=e%Kt;return u(ln,t,e-n-Kt,e,b,a(en,n,e-n,t))}return Zt})),dn=function(e){return!e.$},fn=V,pn=B,vn=function(e){return{$:0,a:e}},gn=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},mn=function(e){return e},bn=t(6,ut=function(e,t,n,r,i,s){return{am:s,a3:t,bk:r,bl:n,bm:e,bn:i}},(function(e){return function(t){return function(n){return function(r){return function(i){return function(s){return ut(e,t,n,r,i,s)}}}}}})),_n=D,yn=N,In=n((function(e,t){return 1>e?t:a(yn,e,t.length,t)})),wn=M,Tn=function(e){return""===e},kn=n((function(e,t){return 1>e?"":a(yn,0,e,t)})),En=s((function(e,t,n,r,i){if(Tn(i)||o(_n,"@",i))return St;var s=o(wn,":",i);if(s.b){if(s.b.b)return St;var a=s.a,c=function(e){for(var t=0,n=e.charCodeAt(0),r=43==n||45==n?1:0,i=r;e.length>i;++i){var s=e.charCodeAt(i);if(48>s||s>57)return St;t=10*t+s-48}return i==r?St:Et(45==n?-t:t)}(o(In,a+1,i));if(1===c.$)return St;var u=c;return Et(l(bn,e,o(kn,a,i),u,t,n,r))}return Et(l(bn,e,i,St,t,n,r))})),Sn=i((function(e,t,n,r){if(Tn(r))return St;var i=o(wn,"/",r);if(i.b){var s=i.a;return u(En,e,o(In,s,r),t,n,o(kn,s,r))}return u(En,e,"/",t,n,r)})),On=r((function(e,t,n){if(Tn(n))return St;var r=o(wn,"?",n);if(r.b){var i=r.a;return c(Sn,e,Et(o(In,i+1,n)),t,o(kn,i,n))}return c(Sn,e,St,t,n)})),An=n((function(e,t){if(Tn(t))return St;var n=o(wn,"#",t);if(n.b){var r=n.a;return a(On,e,Et(o(In,r+1,t)),o(kn,r,t))}return a(On,e,St,t)})),Rn=L,Cn=function(e){return o(Rn,"http://",e)?o(An,0,o(In,7,e)):o(Rn,"https://",e)?o(An,1,o(In,8,e)):St},Nn=function(){for(;;);},Pn=Q,Dn=Pn(0),Ln=i((function(e,t,n,r){if(r.b){var i=r.a,s=r.b;if(s.b){var u=s.a,l=s.b;if(l.b){var h=l.a,d=l.b;if(d.b){var f=d.b;return o(e,i,o(e,u,o(e,h,o(e,d.a,n>500?a(Dt,e,t,Ht(f)):c(Ln,e,t,n+1,f)))))}return o(e,i,o(e,u,o(e,h,t)))}return o(e,i,o(e,u,t))}return o(e,i,t)}return t})),Mn=r((function(e,t,n){return c(Ln,e,t,0,n)})),$n=n((function(e,t){return a(Mn,n((function(t,n){return o(gt,e(t),n)})),b,t)})),Un=ee,jn=n((function(e,t){return o(Un,(function(t){return Pn(e(t))}),t)})),xn=r((function(e,t,n){return o(Un,(function(t){return o(Un,(function(n){return Pn(o(e,t,n))}),n)}),t)})),Fn=ue,Vn=n((function(e,t){var n=t;return function(e){return Z((function(t){t(Q(ne(e)))}))}(o(Un,Fn(e),n))}));ae.Task={b:Dn,c:r((function(e,t){var n;return o(jn,(function(){return 0}),(n=o($n,Vn(e),t),a(Mn,xn(gt),Pn(b),n)))})),d:r((function(){return Pn(0)})),e:n((function(e,t){return o(jn,e,t)})),f:void 0};var Bn,Hn,zn,Wn,qn,Kn,Gn,Jn=le("Task"),Xn=n((function(e,t){return Jn(o(jn,e,t))})),Yn={$:0},Qn=Yn,Zn=n((function(e,t){return t.$?e:t.a})),er=s((function(e,t,n,r,i){return{x:r,y:n,w:t,t:i,B:e}})),tr=function(e){return e.b&&(""!==e.a||e.b.b)?o(gt,e.a,tr(e.b)):b},nr=n((function(e,t){return Et(1===t.$?I([e]):o(gt,e,t.a))})),rr=function(e){try{return Et(decodeURIComponent(e))}catch(e){return St}},ir=p,sr=n((function(e,t){e:for(;;){if(-2===t.$)return St;var n=t.c,r=t.d,i=t.e;switch(o(ir,e,t.b)){case 0:t=r;continue e;case 1:return Et(n);default:t=i;continue e}}})),or=s((function(e,t,n,r,i){return{$:-1,a:e,b:t,c:n,d:r,e:i}})),ar={$:-2},cr=s((function(e,t,n,r,i){if(-1!==i.$||i.a){if(-1!==r.$||r.a||-1!==r.d.$||r.d.a)return u(or,e,t,n,r,i);var s=r.d;return o=r.e,u(or,0,r.b,r.c,u(or,1,s.b,s.c,s.d,s.e),u(or,1,t,n,o,i))}var o,a=i.b,c=i.c,l=i.d,h=i.e;return-1!==r.$||r.a?u(or,e,a,c,u(or,0,t,n,r,l),h):u(or,0,t,n,u(or,1,r.b,r.c,r.d,o=r.e),u(or,1,a,c,l,h))})),ur=r((function(e,t,n){if(-2===n.$)return u(or,0,e,t,ar,ar);var r=n.a,i=n.b,s=n.c,c=n.d,l=n.e;switch(o(ir,e,i)){case 0:return u(cr,r,i,s,a(ur,e,t,c),l);case 1:return u(or,r,i,t,c,l);default:return u(cr,r,i,s,c,a(ur,e,t,l))}})),lr=r((function(e,t,n){var r=a(ur,e,t,n);return-1!==r.$||r.a?r:u(or,1,r.b,r.c,r.d,r.e)})),hr=function(e){if(-1===e.$&&-1===e.d.$&&-1===e.e.$){if(-1!==e.e.d.$||e.e.d.a){var t=e.d,n=e.e;return o=n.b,a=n.c,r=n.d,h=n.e,u(or,1,e.b,e.c,u(or,0,t.b,t.c,t.d,t.e),u(or,0,o,a,r,h))}var r,i=e.d,s=e.e,o=s.b,a=s.c,c=(r=s.d).d,l=r.e,h=s.e;return u(or,0,r.b,r.c,u(or,1,e.b,e.c,u(or,0,i.b,i.c,i.d,i.e),c),u(or,1,o,a,l,h))}return e},dr=function(e){if(-1===e.$&&-1===e.d.$&&-1===e.e.$){if(-1!==e.d.d.$||e.d.d.a){var t=e.d,n=e.e;return l=n.b,h=n.c,d=n.d,f=n.e,u(or,1,r=e.b,i=e.c,u(or,0,t.b,t.c,t.d,a=t.e),u(or,0,l,h,d,f))}var r=e.b,i=e.c,s=e.d,o=s.d,a=s.e,c=e.e,l=c.b,h=c.c,d=c.d,f=c.e;return u(or,0,s.b,s.c,u(or,1,o.b,o.c,o.d,o.e),u(or,1,r,i,a,u(or,0,l,h,d,f)))}return e},fr=function(e){return t(7,e,(function(t){return function(n){return function(r){return function(i){return function(s){return function(o){return function(a){return e(t,n,r,i,s,o,a)}}}}}}}))}((function(e,t,n,r,i,s,o){if(-1!==s.$||s.a){e:for(;;){if(-1===o.$&&1===o.a){if(-1===o.d.$){if(1===o.d.a)return dr(t);break e}return dr(t)}break e}return t}return u(or,n,s.b,s.c,s.d,u(or,0,r,i,s.e,o))})),pr=function(e){if(-1===e.$&&-1===e.d.$){var t=e.a,n=e.b,r=e.c,i=e.d,s=i.d,o=e.e;if(1===i.a){if(-1!==s.$||s.a){var a=hr(e);if(-1===a.$){var c=a.e;return u(cr,a.a,a.b,a.c,pr(a.d),c)}return ar}return u(or,t,n,r,pr(i),o)}return u(or,t,n,r,pr(i),o)}return ar},vr=n((function(e,t){if(-2===t.$)return ar;var n=t.a,r=t.b,i=t.c,s=t.d,a=t.e;if(0>f(e,r)){if(-1===s.$&&1===s.a){var c=s.d;if(-1!==c.$||c.a){var l=hr(t);if(-1===l.$){var h=l.e;return u(cr,l.a,l.b,l.c,o(vr,e,l.d),h)}return ar}return u(or,n,r,i,o(vr,e,s),a)}return u(or,n,r,i,o(vr,e,s),a)}return o(gr,e,function(e,t,n,r,i,s,o,a){return 7===e.a?e.f(t,n,r,i,s,o,a):e(t)(n)(r)(i)(s)(o)(a)}(fr,e,t,n,r,i,s,a))})),gr=n((function(e,t){if(-1===t.$){var n=t.a,r=t.b,i=t.c,s=t.d,a=t.e;if(h(e,r)){var c=function(e){for(;;){if(-1!==e.$||-1!==e.d.$)return e;e=e.d}}(a);return-1===c.$?u(cr,n,c.b,c.c,s,pr(a)):ar}return u(cr,n,r,i,s,o(vr,e,a))}return ar})),mr=n((function(e,t){var n=o(vr,e,t);return-1!==n.$||n.a?n:u(or,1,n.b,n.c,n.d,n.e)})),br=r((function(e,t,n){var r=t(o(sr,e,n));return r.$?o(mr,e,n):a(lr,e,r.a,n)})),_r=n((function(e,t){var n=o(Nt,"=",e);if(n.b&&n.b.b&&!n.b.b.b){var r=n.b.a,i=rr(n.a);if(1===i.$)return t;var s=i.a,c=rr(r);return 1===c.$?t:a(br,s,nr(c.a),t)}return t})),yr=ar,Ir=n((function(e,t){var n;return function(e){e:for(;;){if(e.b){var t=e.a,n=t.w;if(n.b){if(""!==n.a||n.b.b){e=e.b;continue e}return Et(t.t)}return Et(t.t)}return St}}(e(u(er,b,function(e){var t=o(Nt,"/",e);return tr(t.b&&""===t.a?t.b:t)}(t.bk),1===(n=t.bn).$?yr:a(Mn,_r,yr,o(Nt,"&",n.a)),t.am,mn)))})),wr=n((function(e,t){return u(er,t.B,t.w,t.y,t.x,e(t.t))})),Tr=n((function(e,t){var n=t;return function(t){var r=t.B,i=t.w,s=t.y,a=t.x;return o($n,wr(t.t),n(u(er,r,i,s,a,e)))}})),kr=n((function(e,t){return t.b?a(Mn,gt,t,e):e})),Er=n((function(e,t){return a(Mn,kr,b,o($n,e,t))})),Sr=I([0,1]),Or=(Hn=function(e){var t;return o(Tr,e,(t=function(e){return e?"u":"a"}(e),function(e){var n=e.B,r=e.w,i=e.y,s=e.x,a=e.t;if(r.b){var c=r.a,l=r.b;return h(c,t)?I([u(er,o(gt,c,n),l,i,s,a)]):b}return b}))},Bn=o(gt,o(Tr,0,(function(e){return I([e])})),o($n,Hn,Sr)),function(e){return o(Er,(function(t){return t(e)}),Bn)}),Ar=he(b),Rr=n((function(e,t){return v(g(t,function(e){return o(Zn,0,o(Ir,Or,{am:St,a3:"tango-dating.github.io/web",bk:o(Zn,"/#/a",e.am),bl:St,bm:1,bn:St}))}(e)?{A:1}:{A:0}),Ar)})),Cr=r((function(e,t,n){return o(Rr,t,function(e){return{C:Qn,T:e,Y:"Profile Page",A:0}}(n))})),Nr=function(e){return{$:2,a:e}},Pr=de,Dr=he,Lr=r((function(e,t,n){return t(e(n))})),Mr=H,$r=r((function(e,t,n){return{aU:e,aV:n,as:t}})),Ur=function(e){var t;return{$:11,g:I([(t=St,{$:5,c:t}),o(fn,Et,e)])}},jr=pn(tn),xr=x,Fr=r((function(e,t,n){return o(jr,o(xr,e,t),n)})),Vr=j,Br=a(Fr,"credential",Ur(Vr),a(Fr,"message",Ur(Vr),a(Fr,"code",Ur(Vr),vn($r)))),Hr=U,zr=we("signInErrorPort",Hr),Wr=we("signInInfoPort",Hr),qr=a(Fr,"uid",Vr,a(Fr,"email",Vr,a(Fr,"token",Vr,vn(r((function(e,t,n){return{aj:t,bu:e,bv:n}})))))),Kr=Dr(I([Wr(o(Lr,Mr(qr),(function(e){return{$:2,a:e}}))),zr(o(Lr,Mr(Br),(function(e){return{$:3,a:e}})))])),Gr=o(Pr,Nr,Kr),Jr=de,Xr=r((function(e,t,n){return 2===e.$?t:n})),Yr=lt,Qr=n((function(e,t){return 1===e.$?t:t+":"+Rt(e.a)})),Zr=r((function(e,t,n){return 1===t.$?n:m(n,m(e,t.a))})),ei=_e("signInPort",(function(){return null}))(0),ti=_e("signOutPort",(function(){return null}))(0),ni=function(e){return{$:1,a:e}},ri=n((function(e,t){switch(e.$){case 0:return v(t,ei);case 1:return v(Yn,ti);case 2:return v(1===(n=e.a).$?ni(a($r,St,Et(Wt(n.a)),St)):{$:2,a:n.a},Ar);default:return v(function(e){return ni(1===e.$?a($r,St,Et(Wt(e.a)),St):e.a)}(e.a),Ar)}var n})),ii=n((function(e,t){switch(e.$){case 0:var n=e.a;return v(t,n.$?(c=n.a,o(Xn,Nn,Z((function(){try{ht.location=c}catch(e){Se.location.reload(!1)}})))):o(Yr,t.T,function(e){return a(Zr,"#",e.am,a(Zr,"?",e.bn,m(o(Qr,e.bl,m(e.bm?"https://":"http://",e.a3)),e.bk)))}(n.a)));case 1:return o(Rr,e.a,t);default:var r=o(ri,e.a,t.C),i=r.a,s=r.b;return v(g(t,{C:i,A:a(Xr,i,1,t.A)}),o(Jr,Nr,s))}var c})),si=Re("h1"),oi=Ne,ai=function(e){return I([e])},ci=Ae,ui=function(e){return e(0)},li=n((function(e,t){return o(Le,e,t)}))("className"),hi=Re("div"),di=dt,fi=$n(ui),pi=n((function(e,t){var n=e?"mr-align-center-x":"mr-align-center-y";return o(Lr,fi,o(Lr,hi(m(I([li("mr-align-center"),li(n)]),t)),di))})),vi=function(e){return o(Lr,fi,o(Lr,hi(I([li(e)])),di))},gi=vi("mr-app"),mi=vi("mr-card"),bi=$n(di),_i=De,yi={$:0},Ii={$:1},wi=Re("button"),Ti=function(e){return o(Lr,wi(o(gt,li("mr-button"),e)),di)},ki=Re("h4"),Ei=Pe,Si=n((function(e,t){return o(Ei,e,{$:0,a:t})})),Oi=vi("mr-text-center"),Ai=i((function(e,t,n,r){var i;return I([o(si,b,I([ci(e)])),o(ki,b,I([ci(t)])),ui(Oi(I([o(Ti,I([(i=n,o(Si,"click",vn(i)))]),I([ci(r)]))])))])})),Ri=o(Lr,(function(e){switch(e.$){case 0:return c(Ai,"Let's Tango!","At last you are here! We've been waiting. Click through and get to dancing.",yi,"Sign In with Google");case 1:return c(Ai,"Ooops...",o(Zn,"Something went wrong.",e.a.as),yi,"Sign In with Google");default:return c(Ai,"You're in.","However, if you wanted to sign out of "+e.a.aj+" for some reason, here's your chance.",Ii,"Sign Out")}}),o(Lr,bi,o(Lr,mi,o(Lr,ai,o(Lr,o(pi,1,b),o(Lr,ai,o(Lr,o(pi,0,I([o(_i,"height","100vh")])),o(Lr,ai,gi))))))));zn={Main:{init:(Wn={a5:Cr,bg:function(e){return{$:1,a:e}},bh:function(e){return{$:0,a:e}},bq:dt(Gr),bw:ii,bx:function(e){var t=o(oi,Nr,ui(Ri(e.C))),n=e.A?o(si,b,I([ci(e.Y)])):t;return{aQ:ai(a(Xr,e.C,n,t)),bt:"Tango Dating"}}},qn=Wn.bg,Kn=Wn.bh,Gn=function(){Gn.a(qn(ct()))},ot({Z:function(e){return Gn.a=e,ht.addEventListener("popstate",Gn),0>ht.navigator.userAgent.indexOf("Trident")||ht.addEventListener("hashchange",Gn),n((function(t,n){if(!(n.ctrlKey||n.metaKey||n.shiftKey||n.button>=1||t.target||t.hasAttribute("download"))){n.preventDefault();var r=t.href,i=ct(),s=Cn(r).a;e(Kn(s&&i.bm===s.bm&&i.a3===s.a3&&i.bl.a===s.bl.a?{$:0,a:s}:function(e){return{$:1,a:e}}(r)))}}))},a5:function(e){return a(Wn.a5,e,ct(),Gn)},bx:Wn.bx,bw:Wn.bw,bq:Wn.bq}))(vn(0))(0)}},e.Elm?function e(t,n){for(var r in n)r in t?"init"==r?E(6):e(t[r],n[r]):t[r]=n[r]}(e.Elm,zn):e.Elm=zn}(e);
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
const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},r=function(e){return function(e){const r=t(e);return n.encodeByteArray(r,!0)}(e).replace(/\./g,"")},i=function(e){try{return n.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function a(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function c(){const e=o();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class u extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,l.prototype.create)}}class l{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(h,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new u(r,o,n)}}const h=/\{\$([^}]+)}/g;
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
 */function d(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function f(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(p(n)&&p(s)){if(!f(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function p(e){return null!==e&&"object"==typeof e}
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
 */function v(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function g(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function m(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function b(e,t){const n=new _(e,t);return n.subscribe.bind(n)}class _{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=y),void 0===r.error&&(r.error=y),void 0===r.complete&&(r.complete=y);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function y(){}
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
function I(e){return e&&e._delegate?e._delegate:e}class w{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
class T{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new s;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class k{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new T(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const E=[];var S,O;(O=S||(S={}))[O.DEBUG=0]="DEBUG",O[O.VERBOSE=1]="VERBOSE",O[O.INFO=2]="INFO",O[O.WARN=3]="WARN",O[O.ERROR=4]="ERROR",O[O.SILENT=5]="SILENT";const A={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},R=S.INFO,C={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},N=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=C[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class P{constructor(e){this.name=e,this._logLevel=R,this._logHandler=N,this._userLogHandler=null,E.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}let D,L;const M=new WeakMap,$=new WeakMap,U=new WeakMap,j=new WeakMap,x=new WeakMap;let F={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return $.get(e);if("objectStoreNames"===t)return e.objectStoreNames||U.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function V(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(L||(L=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(z(this),t),H(M.get(this))}:function(...t){return H(e.apply(z(this),t))}:function(t,...n){const r=e.call(z(this),t,...n);return U.set(r,t.sort?t.sort():[t]),H(r)}}function B(e){return"function"==typeof e?V(e):(e instanceof IDBTransaction&&function(e){if($.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));$.set(e,t)}(e),t=e,(D||(D=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,F):e);var t}function H(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(H(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&M.set(t,e)})).catch((()=>{})),x.set(t,e),t}(e);if(j.has(e))return j.get(e);const t=B(e);return t!==e&&(j.set(e,t),x.set(t,e)),t}const z=e=>x.get(e);function W(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=H(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(H(o.result),e.oldVersion,e.newVersion,H(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const q=["get","getKey","getAll","getAllKeys","count"],K=["put","add","delete","clear"],G=new Map;function J(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(G.get(t))return G.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=K.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!q.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return G.set(t,s),s}F=(e=>({...e,get:(t,n,r)=>J(t,n)||e.get(t,n,r),has:(t,n)=>!!J(t,n)||e.has(t,n)}))(F);
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
class X{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Y=new P("@firebase/app"),Q={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Z=new Map,ee=new Map;function te(e,t){try{e.container.addComponent(t)}catch(n){Y.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ne(e){const t=e.name;if(ee.has(t))return Y.debug(`There were multiple attempts to register component ${t}.`),!1;ee.set(t,e);for(const t of Z.values())te(t,e);return!0}function re(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
class se{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new w("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}
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
 */function oe(e="[DEFAULT]"){const t=Z.get(e);if(!t)throw ie.create("no-app",{appName:e});return t}function ae(e,t,n){var r;let i=null!==(r=Q[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Y.warn(e.join(" "))}ne(new w(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let ce=null;function ue(){return ce||(ce=W("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ie.create("storage-open",{originalErrorMessage:e.message})}))),ce}async function le(e,t){try{const n=(await ue()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,he(e)),n.done}catch(e){throw ie.create("storage-set",{originalErrorMessage:e.message})}}function he(e){return`${e.name}!${e.options.appId}`}
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
 */class de{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=fe(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ve(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ve(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=r(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fe(){return(new Date).toISOString().substring(0,10)}class pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ue()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(he(e))}catch(e){throw ie.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ve(e){return r(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var ge;ge="",ne(new w("platform-logger",(e=>new X(e)),"PRIVATE")),ne(new w("heartbeat",(e=>new de(e)),"PRIVATE")),ae("@firebase/app","0.7.25",ge),ae("@firebase/app","0.7.25","esm2017"),ae("fire-js","");
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
ae("firebase","9.8.2","app");function me(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function be(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _e=be,ye=new l("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ie=new P("@firebase/auth");function we(e,...t){Ie.logLevel<=S.ERROR&&Ie.error(`Auth (9.8.2): ${e}`,...t)}
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
 */function Te(e,...t){throw Oe(e,...t)}function ke(e,...t){return Oe(e,...t)}function Ee(e,t,n){const r=Object.assign(Object.assign({},_e()),{[t]:n});return new l("auth","Firebase",r).create(t,{appName:e.name})}function Se(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Te(e,"argument-error"),Ee(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oe(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ye.create(e,...t)}function Ae(e,t,...n){if(!e)throw Oe(t,...n)}function Re(e){const t="INTERNAL ASSERTION FAILED: "+e;throw we(t),new Error(t)}function Ce(e,t){e||Re(t)}
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
 */function $e(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Le()||a()||"connection"in navigator))||navigator.onLine}
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
class Ue{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ce(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return $e()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function je(e,t){Ce(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class xe{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Fe={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ve=new Ue(3e4,6e4);
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
 */function Be(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function He(e,t,n,r,i={}){return ze(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=v(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),xe.fetch()(qe(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function ze(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fe),t);try{const t=new Ke(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ge(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ge(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ge(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ge(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ee(e,a,o);Te(e,a)}}catch(t){if(t instanceof u)throw t;Te(e,"network-request-failed")}}async function We(e,t,n,r,i={}){const s=await He(e,t,n,r,i);return"mfaPendingCredential"in s&&Te(e,"multi-factor-auth-required",{_serverResponse:s}),s}function qe(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?je(e.config,i):`${e.config.apiScheme}://${i}`}class Ke{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ke(this.auth,"network-request-failed"))),Ve.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ge(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ke(e,t,r);return i.customData._tokenResponse=n,i}
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
 */function Xe(e){return 1e3*Number(e)}function Ye(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return we("JWT malformed, contained fewer than 3 sections"),null;try{const e=i(n);return e?JSON.parse(e):(we("Failed to decode base64 JWT payload"),null)}catch(e){return we("Caught error parsing JWT payload as JSON",e),null}}
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
async function Qe(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof u&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */async function tt(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qe(e,async function(e,t){return He(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Ae(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=me(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new et(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(void 0!==e.idToken,"internal-error"),Ae(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ye(e);return Ae(t,"internal-error"),Ae(void 0!==t.exp,"internal-error"),Ae(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await ze(e,{},(async()=>{const n=v({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=qe(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",xe.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new nt;return n&&(Ae("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Ae("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Ae("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return Re("not implemented")}}
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
 */function rt(e,t){Ae("string"==typeof e||void 0===e,"internal-error",{appName:t})}class it{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=me(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ze(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new et(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qe(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=I(e),r=await n.getIdToken(t),i=Ye(r);Ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Je(Xe(i.auth_time)),issuedAtTime:Je(Xe(i.iat)),expirationTime:Je(Xe(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=I(e);await tt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await tt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qe(this,async function(e,t){return He(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,m=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:y,providerData:I,stsTokenManager:w}=t;Ae(b&&w,e,"internal-error");const T=nt.fromJSON(this.name,w);Ae("string"==typeof b,e,"internal-error"),rt(l,e.name),rt(h,e.name),Ae("boolean"==typeof _,e,"internal-error"),Ae("boolean"==typeof y,e,"internal-error"),rt(d,e.name),rt(f,e.name),rt(p,e.name),rt(v,e.name),rt(g,e.name),rt(m,e.name);const k=new it({uid:b,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:y,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:m});return I&&Array.isArray(I)&&(k.providerData=I.map((e=>Object.assign({},e)))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new nt;r.updateFromServerResponse(t);const i=new it({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await tt(i),i}}
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
 */function at(e,t,n){return`firebase:${e}:${t}:${n}`}class ct{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=at(this.userKey,r.apiKey,i),this.fullPersistenceKey=at("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ct(Pe(ot),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Pe(ot);const s=at(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=it._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new ct(i,e,n)):new ct(i,e,n)}}
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
 */function ut(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ft(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vt(t))return"Blackberry";if(gt(t))return"Webos";if(ht(t))return"Safari";if((t.includes("chrome/")||dt(t))&&!t.includes("edge/"))return"Chrome";if(pt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function lt(e=o()){return/firefox\//i.test(e)}function ht(e=o()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dt(e=o()){return/crios\//i.test(e)}function ft(e=o()){return/iemobile/i.test(e)}function pt(e=o()){return/android/i.test(e)}function vt(e=o()){return/blackberry/i.test(e)}function gt(e=o()){return/webos/i.test(e)}function mt(e=o()){return/iphone|ipad|ipod/i.test(e)}function bt(){return c()&&10===document.documentMode}function _t(e=o()){return mt(e)||pt(e)||gt(e)||vt(e)||/windows phone/i.test(e)||ft(e)}
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
function yt(e,t=[]){let n;switch(e){case"Browser":n=ut(o());break;case"Worker":n=`${ut(o())}-${e}`;break;default:n=e}return`${n}/JsCore/9.8.2/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class It{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e.message})}}}
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
 */class wt{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kt(this),this.idTokenSubscription=new kt(this),this.beforeStateQueue=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ye,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pe(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ct.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tt(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?I(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Pe(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new l("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pe(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[Pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ae(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Tt(e){return I(e)}class kt{constructor(e){this.auth=e,this.observer=null,this.addObserver=b((e=>this.observer=e))}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class Et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Re("not implemented")}_getIdTokenResponse(e){return Re("not implemented")}_linkToIdToken(e,t){return Re("not implemented")}_getReauthenticationResolver(e){return Re("not implemented")}}
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
 */async function St(e,t){return He(e,"POST","/v1/accounts:update",t)}
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
class Ot extends Et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ot(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ot(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return We(e,"POST","/v1/accounts:signInWithPassword",Be(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return We(e,"POST","/v1/accounts:signInWithEmailLink",Be(e,t))}(e,{email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return St(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return We(e,"POST","/v1/accounts:signInWithEmailLink",Be(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function At(e,t){return We(e,"POST","/v1/accounts:signInWithIdp",Be(e,t))}
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
 */class Rt extends Et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Te("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=me(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Rt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return At(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,At(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,At(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=v(t)}return e}}
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
class Nt extends Et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Nt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Nt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return We(e,"POST","/v1/accounts:signInWithPhoneNumber",Be(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await We(e,"POST","/v1/accounts:signInWithPhoneNumber",Be(e,t));if(n.temporaryProof)throw Ge(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return We(e,"POST","/v1/accounts:signInWithPhoneNumber",Be(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ct)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Nt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */class Pt{constructor(e){var t,n,r,i,s,o;const a=g(m(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Ae(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=g(m(e)).link,n=t?g(m(t)).deep_link_id:null,r=g(m(e)).deep_link_id;return(r?g(m(r)).link:null)||r||n||t||e}(e);try{return new Pt(t)}catch(e){return null}}}
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
class Dt{constructor(){this.providerId=Dt.PROVIDER_ID}static credential(e,t){return Ot._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Pt.parseLink(t);return Ae(n,"argument-error"),Ot._fromEmailAndCode(e,n.code,n.tenantId)}}Dt.PROVIDER_ID="password",Dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class $t extends Mt{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch(e){return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com",$t.PROVIDER_ID="facebook.com";
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
class Ut extends Mt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rt._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ut.credential(t,n)}catch(e){return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com",Ut.PROVIDER_ID="google.com";
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
class jt extends Mt{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch(e){return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com",jt.PROVIDER_ID="github.com";
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
class xt extends Mt{constructor(){super("twitter.com")}static credential(e,t){return Rt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return xt.credential(t,n)}catch(e){return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com",xt.PROVIDER_ID="twitter.com";
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
class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await it._fromIdTokenResponse(e,n,r),s=Vt(n);return new Ft({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Vt(n);return new Ft({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Vt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Bt extends u{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Bt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Bt(e,t,n,r)}}function Ht(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Bt._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function zt(e,t,n=!1){const r=await Qe(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ft._forOperation(e,"link",r)}
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
async function Wt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Qe(e,Ht(r,i,t,e),n);Ae(s.idToken,r,"internal-error");const o=Ye(s.idToken);Ae(o,r,"internal-error");const{sub:a}=o;return Ae(e.uid===a,r,"user-mismatch"),Ft._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Te(r,"user-mismatch"),e}}
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
 */async function qt(e,t,n=!1){const r="signIn",i=await Ht(e,r,t),s=await Ft._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}new WeakMap;
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
 */class Gt extends Kt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=o();return ht(e)||mt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);bt()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gt.type="LOCAL";const Jt=Gt;
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
 */class Xt extends Kt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xt.type="SESSION";const Yt=Xt;
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
class Qt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Qt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Zt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Qt.receivers=[];class en{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Zt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function tn(){return window}
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
function nn(){return void 0!==tn().WorkerGlobalScope&&"function"==typeof tn().importScripts}class rn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function sn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function on(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new rn(e).toPromise()}(),t(await on()))}))}))}async function an(e,t,n){const r=sn(e,!0).put({fbase_key:t,value:n});return new rn(r).toPromise()}function cn(e,t){const n=sn(e,!0).delete(t);return new rn(n).toPromise()}class un{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await on()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qt._getInstance(nn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new en(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await on();return await an(e,"__sak","1"),await cn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>an(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=sn(e,!1).get(t),r=await new rn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>cn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=sn(e,!1).getAll();return new rn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}un.type="LOCAL";const ln=un;
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
 */function hn(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ke("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function dn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
dn("rcb"),new Ue(3e4,6e4);async function fn(e,t,n){var r;const i=await n.verify();try{let s;if(Ae("string"==typeof i,e,"argument-error"),Ae("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Ae("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return He(e,"POST","/v2/accounts/mfaEnrollment:start",Be(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Ae("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Ae(n,e,"missing-multi-factor-info");const o=await function(e,t){return He(e,"POST","/v2/accounts/mfaSignIn:start",Be(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return He(e,"POST","/v1/accounts:sendVerificationCode",Be(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class pn{constructor(e){this.providerId=pn.PROVIDER_ID,this.auth=Tt(e)}verifyPhoneNumber(e,t){return fn(this.auth,e,I(t))}static credential(e,t){return Nt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return pn.credentialFromTaggedObject(t)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Nt._fromTokenResponse(t,n):null}}
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
function vn(e,t){return t?Pe(t):(Ae(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */pn.PROVIDER_ID="phone",pn.PHONE_SIGN_IN_METHOD="phone";class gn extends Et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return At(e,this._buildIdpRequest())}_linkToIdToken(e,t){return At(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return At(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mn(e){return qt(e.auth,new gn(e),e.bypassAuthState)}function bn(e){const{auth:t,user:n}=e;return Ae(n,t,"internal-error"),Wt(n,new gn(e),e.bypassAuthState)}async function _n(e){const{auth:t,user:n}=e;return Ae(n,t,"internal-error"),zt(n,new gn(e),e.bypassAuthState)}
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
 */class yn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mn;case"linkViaPopup":case"linkViaRedirect":return _n;case"reauthViaPopup":case"reauthViaRedirect":return bn;default:Te(this.auth,"internal-error")}}resolve(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const In=new Ue(2e3,1e4);async function wn(e,t,n){const r=Tt(e);Se(e,t,Lt);const i=vn(r,n);return new Tn(r,"signInViaPopup",t,i).executeNotNull()}class Tn extends yn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){Ce(1===this.filter.length,"Popup operations only handle one event");const e=Zt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ke(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ke(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,In.get())};e()}}Tn.currentPopupAction=null;
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
const kn=new Map;class En extends yn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=kn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=An(t),r=On(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}kn.set(this.auth._key(),e)}return this.bypassAuthState||kn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Sn(e,t){kn.set(e._key(),t)}function On(e){return Pe(e._redirectPersistence)}function An(e){return at("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function Rn(e,t,n=!1){const r=Tt(e),i=vn(r,t),s=new En(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Cn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pn(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Pn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ke(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nn(e))}saveEventToCache(e){this.cachedEventUids.add(Nn(e)),this.lastProcessedEventTime=Date.now()}}function Nn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Pn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Dn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ln=/^https?/;async function Mn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return He(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if($n(e))return}catch(e){}Te(e,"unauthorized-domain")}function $n(e){const t=De(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ln.test(n))return!1;if(Dn.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Un=new Ue(3e4,6e4);function jn(){const e=tn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let xn=null;function Fn(e){return xn=xn||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){jn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jn(),n(ke(e,"network-request-failed"))},timeout:Un.get()})}if(null===(i=null===(r=tn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=tn().gapi)||void 0===s?void 0:s.load)){const t=dn("iframefcb");return tn()[t]=()=>{gapi.load?o():n(ke(e,"network-request-failed"))},hn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw xn=null,e}))}(e),xn}
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
 */const Vn=new Ue(5e3,15e3),Bn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zn(e){const t=e.config;Ae(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?je(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.8.2"},i=Hn.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${v(r).slice(1)}`}
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
const Wn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Kn(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Wn),{width:r.toString(),height:i.toString(),top:s,left:a}),l=o().toLowerCase();n&&(c=dt(l)?"_blank":n),lt(l)&&(t=t||"http://localhost",u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=o()){var t;return mt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",c),new qn(null);const d=window.open(t||"",c,h);Ae(d,e,"popup-blocked");try{d.focus()}catch(e){}return new qn(d)}function Gn(e,t,n,r,i,s){Ae(e.config.authDomain,e,"auth-domain-config-required"),Ae(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.8.2",eventId:i};if(t instanceof Lt){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",d(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Mt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?je(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${v(a).slice(1)}`}const Jn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yt,this._completeRedirectFn=Rn,this._overrideRedirectResult=Sn}async _openPopup(e,t,n,r){var i;Ce(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Kn(e,Gn(e,t,n,De(),r),Zt())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Gn(e,t,n,De(),r),tn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ce(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Fn(e),n=tn().gapi;return Ae(n,e,"internal-error"),t.open({where:document.body,url:zn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ke(e,"network-request-failed"),s=tn().setTimeout((()=>{r(i)}),Vn.get());function o(){tn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Cn(e);return t.register("authEvent",(t=>{Ae(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Te(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _t()||ht()||mt()}};var Xn;
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
class Yn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */Xn="Browser",ne(new w("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{Ae(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Ae(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:Xn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yt(Xn)},o=new wt(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pe);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ne(new w("auth-internal",(e=>{const t=Tt(e.getProvider("auth").getImmediate());return new Yn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ae("@firebase/auth","0.20.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Xn)),ae("@firebase/auth","0.20.2","esm2017");!function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw ie.create("bad-app-name",{appName:String(r)});const i=Z.get(r);if(i){if(f(e,i.options)&&f(n,i.config))return i;throw ie.create("duplicate-app",{appName:r})}const s=new k(r);for(const e of ee.values())s.addComponent(e);const o=new se(e,n,s);Z.set(r,o)}({firebase:{apiKey:"AIzaSyADbuphHuhoi1l8je7C5ED0MMr-JPfkAz0",authDomain:"tango-dating.firebaseapp.com",projectId:"tango-dating",storageBucket:"tango-dating.appspot.com",messagingSenderId:"481562476129",appId:"1:481562476129:web:975ddc701692c5deeb3420",measurementId:"G-NNCKGE0YRC"}}.firebase);const Qn=new Ut,Zn=
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
function(e=oe()){const t=re(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=re(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(f(n.getOptions(),null!=t?t:{}))return e;Te(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Jn,persistence:[ln,Jt,Yt]})}();function er(e){console.log("LogIn called"),wn(Zn,Qn).then((t=>{t.user.getIdToken().then((n=>{console.info("auth ok"),e.signInInfoPort.send({token:n,email:t.user.email,uid:t.user.uid})}))})).catch((t=>{console.error("auth error:",t.code,t.message),e.signInErrorPort.send({code:t.code,message:t.message})}))}var tr={attachPorts:function(e){var t,n,r;e.signInPort.subscribe((()=>er(e))),e.signOutPort.subscribe((()=>{console.log("SignOut called"),I(Zn).signOut()})),t=t=>{console.log("auth state changed"),t?t.getIdToken().then((n=>{console.log("logged in"),e.signInInfoPort.send({token:n,email:t.email,uid:t.uid})})).catch((e=>{console.log("error retrieving cached user:",e)})):console.log("logged out")},I(Zn).onAuthStateChanged(t,n,r)}};const nr=e.Elm.Main.init({node:document.getElementById("app")});tr.attachPorts(nr.ports);
//# sourceMappingURL=index.b2f68b61.js.map
