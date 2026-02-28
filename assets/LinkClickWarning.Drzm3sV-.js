var o={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s;function d(){if(s)return e;s=1;var x=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function u(p,n,t){var r=null;if(t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),"key"in n){t={};for(var i in n)i!=="key"&&(t[i]=n[i])}else t=n;return n=t.ref,{$$typeof:x,type:p,key:r,ref:n!==void 0?n:null,props:t}}return e.Fragment=l,e.jsx=u,e.jsxs=u,e}var a;function v(){return a||(a=1,o.exports=d()),o.exports}var R=v();function c(){return R.jsx("span",{className:`
        absolute 
        bottom-full 
        mb-2 
        inset-x-0 
        mx-auto 
        z-40 

        bg-white 
        text-gray-900 
        text-xs 
        rounded 
        py-1 
        px-3 

        whitespace-nowrap
        max-w-[90vw]
        overflow-hidden
        text-ellipsis

        opacity-0 
        pointer-events-none 
        group-hover:opacity-100 

        transition-opacity 
        duration-600 
        ease-in-out
        
        motion-reduce:transition-none`,children:"🔒 Vérifiez toujours l'URL avant de cliquer!"})}export{c as default};
