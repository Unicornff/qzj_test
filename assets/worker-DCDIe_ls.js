(function(){"use strict";self.addEventListener("message",l=>{console.log(Date.now());const n=s=>{let t=0;for(let e=0;e<s;e++)for(let o=0;o<s;o++)t+=e;return t};self.postMessage(n(l.data))})})();
