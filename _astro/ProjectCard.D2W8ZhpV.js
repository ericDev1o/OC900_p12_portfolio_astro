import{r as p}from"./index.B5cRMmfH.js";var h={exports:{}},x={};var w;function S(){if(w)return x;w=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function t(s,r,l){var a=null;if(l!==void 0&&(a=""+l),r.key!==void 0&&(a=""+r.key),"key"in r){l={};for(var c in r)c!=="key"&&(l[c]=r[c])}else l=r;return r=l.ref,{$$typeof:e,type:s,key:a,ref:r!==void 0?r:null,props:l}}return x.Fragment=o,x.jsx=t,x.jsxs=t,x}var v;function y(){return v||(v=1,h.exports=S()),h.exports}var n=y();const j="/OC900_p12_portfolio_astro/",R="logos/",i=j+R,E={HTML:i+"HTML5.webp",CSS:i+"CSS3.webp",SCSS:i+"SCSS.webp",tailwindCSS:i+"tailwindCSS.webp",flowbiteReact:i+"flowbite-react.webp",vite:i+"vite.webp",JS:i+"JS.webp",TS:i+"TS.webp",jest:i+"jest.webp",react:i+"react.webp",reactRouter:i+"react-router.webp",redux:i+"redux.webp",lighthouse:i+"lighthouse.webp",GTmetrix:i+"GTmetrix.webp",WAvE:i+"WAvE.webp",axeDevTool:i+"axeDevTool.webp",greenITanalysis:i+"greenITanalysis.webp",stylelint:i+"stylelint.webp",pa11y:i+"pa11y.webp",vitestAxe:i+"vitest-axe.webp",linkedIn:i+"linkedIn.webp",gitHub:i+"gitHub.webp",E:i+"logo.webp",feedly:i+"feedly.webp",notion:i+"notion.webp",excalidraw:i+"excalidraw.webp"};let u=[],d=0;const f=4,N=e=>{let o=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},lc:0,listen(s){return t.lc=o.push(s),()=>{for(let l=d+f;l<u.length;)u[l]===s?u.splice(l,f):l+=f;let r=o.indexOf(s);~r&&(o.splice(r,1),--t.lc||t.off())}},notify(s,r){let l=!u.length;for(let a of o)u.push(a,t.value,s,r);if(l){for(d=0;d<u.length;d+=f)u[d](u[d+1],u[d+2],u[d+3]);u.length=0}},off(){},set(s){let r=t.value;r!==s&&(t.value=s,t.notify(r))},subscribe(s){let r=t.listen(s);return s(t.value),r},value:e};return t};function k(e,o,t){let s=new Set(o).add(void 0);return e.listen((r,l,a)=>{s.has(a)&&t(r,l,a)})}let b=(e,o)=>t=>{e.current!==t&&(e.current=t,o())};function T(e,{keys:o,deps:t=[e,o]}={}){let s=p.useRef();s.current=e.get();let r=p.useCallback(a=>(b(s,a)(e.value),o?.length>0?k(e,o,b(s,a)):e.listen(b(s,a))),t),l=()=>s.current;return p.useSyncExternalStore(r,l,l)}const _=N(E);function C(){const e=T(_);return{getLogoURI:o=>e[o]}}function L({logoPath:e,repo:o}){const t=e.split("/"),r=t[t.length-1]?.split(".")[0];return n.jsx("section",{children:n.jsx("a",{href:o,target:"_blank","aria-label":o,rel:"noreferrer",children:n.jsx("img",{src:e,alt:r,loading:"lazy",className:"m-2"})})})}function A({paths:e,repo:o}){let t=new Set;return e.forEach(s=>{t.add(n.jsx(L,{logoPath:s,repo:o},s))}),t.size>1?n.jsx("div",{className:`
                flex 
                flex-wrap 
                shrink-0 
                justify-between 
                items-center`,children:t}):t.size===1?t:n.jsx(n.Fragment,{})}function H(){return n.jsx("span",{className:`
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
        
        motion-reduce:transition-none`,children:"🔒 Vérifiez toujours l'URL avant de cliquer!"})}function I({summary:e,children:o}){const t=p.useRef(null),s=p.useRef(null),r=l=>{l.preventDefault();const a=t.current,c=s.current;if(!a||!c)return;const m=a.hasAttribute("open"),g=window.matchMedia("(prefers-reduced-motion: reduce)").matches;m?(c.style.maxHeight=`${c.scrollHeight}px`,c.getBoundingClientRect(),c.style.transition=g?"none":"max-height 0.6s ease-in-out",c.style.maxHeight="0px",c.addEventListener("transitionend",()=>a.removeAttribute("open"),{once:!0})):(a.setAttribute("open",""),c.style.maxHeight="0px",c.getBoundingClientRect(),c.style.transition=g?"none":"max-height 0.6s ease-in-out",c.style.maxHeight=`${c.scrollHeight}px`)};return n.jsxs("details",{ref:t,className:`
          w-full 
          overflow-hidden 
          rounded 
          shadow`,children:[n.jsxs("summary",{onClick:r,className:`
            cursor-pointer 
            flex 
            justify-between 
            items-center 
            px-4 
            py-3 
            font-semibold 
            text-blue-500 
            hover:bg-gray-700 
            select-none`,children:[e,n.jsx("span",{"aria-hidden":"true",className:`
                inline-block 
                transition-transform
                duration-600 
                ease-in-out 
                motion-reduce:transition-none 
                group-open:rotate-180`,children:"▼"})]}),n.jsx("div",{ref:s,className:"overflow-hidden",style:{maxHeight:0},children:n.jsx("div",{className:`
              px-4 
              py-3`,children:o})})]})}function q({project:e,projectsPath:o}){const t=e.title.split(",")[0],s=j+o+e.fileName,r=new Set,{getLogoURI:l}=C();e.logos.forEach(c=>{const m=l(c);r.add(m)});const a=`
        duration-600 
        ease-in-out 
        motion-reduce:transition-none`;return n.jsxs("article",{className:`
            my-8 
            mx-4 
            max-w-lg 
            shadow-xs 
            bg-gray-900`,children:[n.jsxs("div",{className:`
                    p-6 
                    text-center`,children:[n.jsxs("a",{href:e.URL,target:"_blank","aria-label":e.title,className:`
                        group 
                        inline-block 
                        relative
                        transition-transform                            
                        hover:scale-110 
                        ${a}
                        motion-reduce:transition-none 
                        motion-reduce:transform-none
                    `,rel:"noreferrer",children:[n.jsx("img",{src:s,className:`
                            w-full 
                            transition-shadow 
                            ${a}
                            hover:shadow-[0_0_2em_rgba(100,108,255,0.6)]
                        `,alt:t,loading:"lazy"}),n.jsx(H,{})]}),n.jsx("h4",{className:`
                        m-6 
                        text-2xl 
                        leading-loose 
                        text-orange-500 
                        font-semibold 
                        tracking-tight 
                        text-heading`,children:e.title}),n.jsx(A,{paths:r,repo:e.repository})]}),n.jsxs(I,{summary:"Découvrez ce projet",children:[n.jsx("h6",{className:"font-extrabold mt-2",children:"contexte"}),n.jsx("p",{children:e.contexte}),n.jsx("h6",{className:"font-extrabold mt-2",children:"objectifs"}),n.jsx("p",{children:e.objectifs}),n.jsx("h6",{className:"font-extrabold mt-2",children:"stack technique"}),n.jsx("p",{children:e.stackTechnique}),n.jsx("h6",{className:"font-extrabold mt-2",children:"compétences développées"}),n.jsx("p",{children:e.competencesDeveloppees}),n.jsx("h6",{className:"font-extrabold mt-2",children:"résultats et impact"}),n.jsx("p",{children:e.resultatsEtImpact}),n.jsx("h6",{className:"font-extrabold mt-2",children:"perspectives d'amélioration"}),n.jsx("p",{children:e.perspectivesAmelioration})]})]})}export{q as default};
