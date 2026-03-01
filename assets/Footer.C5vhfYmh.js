import{j as e,L as f}from"./LinkClickWarning.rGNk9BxQ.js";import{r as p}from"./index.DiEladB3.js";let l=[],u=0;const d=4,g=n=>{let r=[],o={get(){return o.lc||o.listen(()=>{})(),o.value},lc:0,listen(s){return o.lc=r.push(s),()=>{for(let a=u+d;a<l.length;)l[a]===s?l.splice(a,d):a+=d;let i=r.indexOf(s);~i&&(r.splice(i,1),--o.lc||o.off())}},notify(s,i){let a=!l.length;for(let c of r)l.push(c,o.value,s,i);if(a){for(u=0;u<l.length;u+=d)l[u](l[u+1],l[u+2],l[u+3]);l.length=0}},off(){},set(s){let i=o.value;i!==s&&(o.value=s,o.notify(i))},subscribe(s){let i=o.listen(s);return s(o.value),i},value:n};return o};function h(n,r,o){let s=new Set(r).add(void 0);return n.listen((i,a,c)=>{s.has(c)&&o(i,a,c)})}let m=(n,r)=>o=>{n.current!==o&&(n.current=o,r())};function b(n,{keys:r,deps:o=[n,r]}={}){let s=p.useRef();s.current=n.get();let i=p.useCallback(c=>(m(s,c)(n.value),r?.length>0?h(n,r,m(s,c)):n.listen(m(s,c))),o),a=()=>s.current;return p.useSyncExternalStore(i,a,a)}const v="/OC900_p12_portfolio_astro/",x="logos/",t=v+x,w={HTML:t+"HTML5.webp",CSS:t+"CSS3.webp",SCSS:t+"SCSS.webp",tailwindCSS:t+"tailwindCSS.webp",vite:t+"vite.webp",JS:t+"JS.webp",TS:t+"TS.webp",jest:t+"jest.webp",react:t+"react.webp",reactRouter:t+"react-router.webp",redux:t+"redux.webp",lighthouse:t+"lighthouse.webp",GTmetrix:t+"GTmetrix.webp",WAvE:t+"WAvE.webp",axeDevTool:t+"axeDevTool.webp",greenITanalysis:t+"greenITanalysis.webp",stylelint:t+"stylelint.webp",pa11y:t+"pa11y.webp",vitestAxe:t+"vitest-axe.webp",linkedIn:t+"linkedIn.webp",gitHub:t+"gitHub.webp",E:t+"logo.webp",feedly:t+"feedly.webp",notion:t+"notion.webp",excalidraw:t+"excalidraw.webp"},j=g(w);function y(){const n=b(j);return{getLogoURI:r=>n[r]}}function S(){const{getLogoURI:n}=y(),r=n("E"),o=n("linkedIn"),s=n("gitHub");return e.jsxs("ul",{className:`
            flex 
            flex-col
            items-center 
            sm:flex-row
            gap-8`,children:[e.jsx("li",{children:e.jsx("img",{src:r,className:` 
                    cursor-not-allowed
                    opacity-50`,alt:"Eric logo",width:15,height:24})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/ericDev1o",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:s,alt:"GitHub logo",width:25,height:24})})}),e.jsx("li",{children:e.jsx("a",{href:"https://linkedin.com/in/ericfaraut",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:o,className:`
                        will-change-filter 
                        filter 
                        duration-300
                        hover:drop-shadow-[0_0_2em_#646cffaa]`,alt:"LinkedIn logo",width:29,height:24})})})]})}function N(){const n=p.useRef(null),r=()=>{n.current&&!n.current.open&&(n.current.showModal(),n.current.focus())},o=()=>{n.current&&n.current.open&&n.current.close()},s=i=>{i.target===i.currentTarget&&n.current?.close()};return e.jsxs("footer",{className:` 
            px-4 
            pb-15 
            flex 
            justify-between`,children:[e.jsx(S,{}),e.jsx("p",{className:"mx-4",children:"© 2026 Mon Portfolio. Tous droits réservés. Code source disponible sous licence ISC sur GitHub."}),e.jsxs("div",{className:`
                relative 
                group`,children:[e.jsx("button",{id:"legal",type:"button",onClick:r,className:`
                    cursor-pointer 
                    font-medium 
                    text-fg-brand  
                    text-blue-300
                    transition-colors 
                    duration-600 
                    ease-in-out 
                    hover:text-blue-600
                    hover:underline 
                    motion-reduce:transition-none`,children:"mentions légales"}),e.jsx(f,{})]}),e.jsxs("dialog",{ref:n,"aria-labelledby":"legal-title","aria-modal":"true",onClick:s,className:`
                p-10 
                max-w-[80vw]
                max-h-[80vh] 
                overflow-y-auto 
                bg-gray-200
                text-center
                backdrop:bg-black/40
                backdrop:backdrop-blur-sm`,children:[e.jsxs("div",{className:`
                    p-10
                    overflow-y-auto
                    max-h-[calc(80vh-5rem)]`,children:[e.jsx("div",{className:`
                        text-sm 
                        text-gray-500 
                        mb-4`,children:"Faites défiler pour tout lire s'il-vous-plaît"}),e.jsx("h2",{id:"legal-title",className:`
                        pt-8 
                        text-2xl
                        leading-loose`,children:"mentions légales"}),e.jsx("h3",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"utilisation et protection de vos données personnelles"}),"Selon https://www.cnil.fr/fr/la-cnil-publie-un-nouveau-guide-pour-accompagner-les-associations nous avons compris « que faire en cas de violation des données ». Si « Des données personnelles ont été, de manière accidentelle ou illicite, détruites, perdues, modifiées, divulguées (courriels transmis à des mauvais destinataires, équipement perdu ou volé, publication involontaire de données sur Internet, etc.) Cet incident constitue une « violation de données ». Lorsqu’un tel incident se produit, il est nécessaire de le documenter ». « En cas de contrôle, ce document est vérifié par les services de la CNIL.",e.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"finalité"}),"Vos données sont collectées pour écrire par courriel votre message.",e.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"durée de conservation"}),"Vos données sont conservées 6 mois.",e.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"vos droits"}),`Vous avez le droit d'accès, rectification, effacement de vos données. Demandez-le selon https://framasoft.org/fr/cgu en remplissant https://contact.framasoft.org/. C'est dans le cadre de l'art. 34 de la loi "Informatique et Libertés". Vous ne devriez pas avoir besoin de contacter la CNIL après.`,e.jsx("h4",{className:`
                        pt-4
                        leading-loose`,children:"Demande d’effacement et droit à l’oubli RGPD art.17"}),"En tant que répondant·e utilisat·rice·eur du service la suppression des données personnelles vous concernant ne prend pas en compte les données stockées que toute autorité administrative ou judiciaire pourrait avoir demandé avant que vous ayez demandé leur suppression.",e.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"notre charte"}),"Exprimez-vous s'il-vous-plaît selon https://framasoft.org/fr/moderation dans le formulaire mis à votre disposition.",e.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"transfert de vos données"}),`Vos données sont transférées à Framaforms(Framasoft, Paris). Voyez https://framasoft.frama.io/rgpd/services/framaforms/. Framasoft pourrait envoyer des données hors-UE via Akismet. Voyez https://automattic.com/privacy/ §Other Things You Should Know (Keep Reading!) §Transferring Information Cette information pourrait relever de la liberté d'expression et d'opinion telle qu'exprimée https://framasoft.org/fr/cgu §"Version courte", "On est sympathiques" ... "Mais" ... "Clause "La loi est la loi, et on ne veut pas finir en taule": vous devez respecter la loi (que celle-ci soit bien faite ou idiote), sinon votre compte sera supprimé ;" Sentez-vous libre d'aller chercher dans une version plus longue comment on préfèrerait Akismet à Antispam Bee par exemple. J'aurais utilisé Framaforms sans compte utilisateur par simplicité de 2 sources web et IA concordantes: Brave Leo et Companion(OpenClassrooms) ChatGPT3.5+. Vous en tant que répondant·e ne devriez pas être concerné·e·s par un transfert de données hors de France.`,e.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"cookies et traçage"}),"Ce site https://ericdev1o.github.io/OC900_p12_portfolio/ n'utilise aucun cookie de suivi ni outil de traçage. Aucune donnée de navigation n'est collectée sauf les informations que vous renseignez volontairement dans le formulaire."]}),e.jsx("div",{className:`
                    sticky 
                    bottom-0 
                    bg-gray-200 
                    border-t 
                    border-gray-300 
                    p-4 
                    text-center`,children:e.jsx("button",{type:"button",onClick:o,className:`
                        mt-6 
                        px-4 
                        py-2 
                        rounded-lg 
                        bg-blue-600 
                        text-gray-200 
                        hover:bg-blue-700`,children:"Fermer la fenêtre"})})]})]})}export{N as default};
