!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var i,r,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(T,t),s?b(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=p();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?b(e):(i=r=void 0,a)}function w(){var e=p(),n=S(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(T,t),b(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=j(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var O="feedback-form-state",S=document.querySelector(".feedback-form"),T=S.elements,h=T.email,w=T.message,x={};!function(){if(localStorage.getItem(O)){var e=JSON.parse(localStorage.getItem(O));h.value=e.email||"",w.value=e.message||""}}(),S.addEventListener("submit",(function(e){e.preventDefault(),x={email:h.value,message:w.value},console.log(x),localStorage.removeItem(O),e.currentTarget.reset(),x={}})),S.addEventListener("input",e(t)((function(){x={email:h.value,message:w.value},localStorage.setItem(O,JSON.stringify(x))}),500))}();
//# sourceMappingURL=03-feedback.ebb82ea4.js.map
