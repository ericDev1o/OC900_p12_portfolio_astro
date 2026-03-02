import{j as n,L as g}from"./LinkClickWarning.Bq4xLCul.js";import{r as p}from"./index.B02hbnpo.js";let l=[],u=0;const d=4,h=e=>{let r=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},lc:0,listen(o){return t.lc=r.push(o),()=>{for(let a=u+d;a<l.length;)l[a]===o?l.splice(a,d):a+=d;let i=r.indexOf(o);~i&&(r.splice(i,1),--t.lc||t.off())}},notify(o,i){let a=!l.length;for(let c of r)l.push(c,t.value,o,i);if(a){for(u=0;u<l.length;u+=d)l[u](l[u+1],l[u+2],l[u+3]);l.length=0}},off(){},set(o){let i=t.value;i!==o&&(t.value=o,t.notify(i))},subscribe(o){let i=t.listen(o);return o(t.value),i},value:e};return t};function b(e,r,t){let o=new Set(r).add(void 0);return e.listen((i,a,c)=>{o.has(c)&&t(i,a,c)})}let m=(e,r)=>t=>{e.current!==t&&(e.current=t,r())};function v(e,{keys:r,deps:t=[e,r]}={}){let o=p.useRef();o.current=e.get();let i=p.useCallback(c=>(m(o,c)(e.value),r?.length>0?b(e,r,m(o,c)):e.listen(m(o,c))),t),a=()=>o.current;return p.useSyncExternalStore(i,a,a)}const x="/OC900_p12_portfolio_astro/",w="logos/",s=x+w,j={HTML:s+"HTML5.webp",CSS:s+"CSS3.webp",SCSS:s+"SCSS.webp",tailwindCSS:s+"tailwindCSS.webp",vite:s+"vite.webp",JS:s+"JS.webp",TS:s+"TS.webp",jest:s+"jest.webp",react:s+"react.webp",reactRouter:s+"react-router.webp",redux:s+"redux.webp",lighthouse:s+"lighthouse.webp",GTmetrix:s+"GTmetrix.webp",WAvE:s+"WAvE.webp",axeDevTool:s+"axeDevTool.webp",greenITanalysis:s+"greenITanalysis.webp",stylelint:s+"stylelint.webp",pa11y:s+"pa11y.webp",vitestAxe:s+"vitest-axe.webp",linkedIn:s+"linkedIn.webp",gitHub:s+"gitHub.webp",E:s+"logo.webp",feedly:s+"feedly.webp",notion:s+"notion.webp",excalidraw:s+"excalidraw.webp"},y=h(j);function S(){const e=v(y);return{getLogoURI:r=>e[r]}}function f({href:e,src:r,alt:t,width:o,height:i,classNameA:a="",classNameImg:c=""}){return n.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:`
        focus-visible:outline-2
        focus-visible:outline-blue-500
        hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]
        focus-visible:drop-shadow-[0_0_2em_rgba(100,108,255,0.6)]
        ${a}
      `,children:n.jsx("img",{src:r,alt:t,width:o,height:i,className:`
          transition-shadow
          duration-600
          ease-in-out
          ${c}
        `,loading:"lazy"})})}function k(){const{getLogoURI:e}=S(),r=e("E"),t=e("linkedIn"),o=e("gitHub");return n.jsxs("ul",{className:`
            flex 
            flex-col
            items-center 
            sm:flex-row
            gap-8`,children:[n.jsx("li",{children:n.jsx("img",{src:r,className:` 
                    cursor-not-allowed
                    opacity-50`,alt:"Eric logo",width:15,height:24})}),n.jsx("li",{children:n.jsx(f,{href:"https://github.com/ericDev1o",src:o,alt:"GitHub logo",width:25,height:24})}),n.jsx("li",{children:n.jsx(f,{href:"https://linkedin.com/in/ericfaraut",src:t,alt:"LinkedIn logo",width:29,height:24})})]})}function L(){const e=p.useRef(null),r=()=>{e.current&&!e.current.open&&(e.current.showModal(),e.current.focus())},t=()=>{e.current&&e.current.open&&e.current.close()},o=i=>{i.target===i.currentTarget&&e.current?.close()};return n.jsxs("footer",{className:` 
            px-4 
            pb-15 
            flex 
            justify-between`,children:[n.jsx(k,{}),n.jsx("p",{className:"mx-4",children:"© 2026 Mon Portfolio. Tous droits réservés. Code source disponible sous licence ISC sur GitHub."}),n.jsxs("div",{className:`
                relative 
                group`,children:[n.jsx("button",{id:"legal",type:"button",onClick:r,className:`
                    cursor-pointer 
                    font-medium 
                    text-fg-brand  
                    underline 
                    text-blue-300
                    transition-colors 
                    duration-600 
                    ease-in-out 
                    hover:text-blue-600
                    hover:underline 
                    motion-reduce:transition-none`,children:"mentions légales"}),n.jsx(g,{})]}),n.jsxs("dialog",{ref:e,"aria-labelledby":"legal-title","aria-modal":"true",onClick:o,className:`
                p-10 
                max-w-[80vw]
                max-h-[80vh] 
                overflow-y-auto 
                bg-gray-200
                text-center
                backdrop:bg-black/40
                backdrop:backdrop-blur-sm`,children:[n.jsxs("div",{className:`
                    p-10
                    overflow-y-auto
                    max-h-[calc(80vh-5rem)]`,children:[n.jsx("div",{className:`
                        text-sm 
                        text-gray-500 
                        mb-4`,children:"Faites défiler pour tout lire s'il-vous-plaît"}),n.jsx("h2",{id:"legal-title",className:`
                        pt-8 
                        text-2xl
                        leading-loose`,children:"mentions légales"}),n.jsx("h3",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"utilisation et protection de vos données personnelles"}),"Selon https://www.cnil.fr/fr/la-cnil-publie-un-nouveau-guide-pour-accompagner-les-associations nous avons compris « que faire en cas de violation des données ». Si « Des données personnelles ont été, de manière accidentelle ou illicite, détruites, perdues, modifiées, divulguées (courriels transmis à des mauvais destinataires, équipement perdu ou volé, publication involontaire de données sur Internet, etc.) Cet incident constitue une « violation de données ». Lorsqu’un tel incident se produit, il est nécessaire de le documenter ». « En cas de contrôle, ce document est vérifié par les services de la CNIL.",n.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"finalité"}),"Vos données sont collectées pour écrire par courriel votre message.",n.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"durée de conservation"}),"Vos données sont conservées 6 mois.",n.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"vos droits"}),`Vous avez le droit d'accès, rectification, effacement de vos données. Demandez-le selon https://framasoft.org/fr/cgu en remplissant https://contact.framasoft.org/. C'est dans le cadre de l'art. 34 de la loi "Informatique et Libertés". Vous ne devriez pas avoir besoin de contacter la CNIL après.`,n.jsx("h4",{className:`
                        pt-4
                        leading-loose`,children:"Demande d’effacement et droit à l’oubli RGPD art.17"}),"En tant que répondant·e utilisat·rice·eur du service la suppression des données personnelles vous concernant ne prend pas en compte les données stockées que toute autorité administrative ou judiciaire pourrait avoir demandé avant que vous ayez demandé leur suppression.",n.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"notre charte"}),"Exprimez-vous s'il-vous-plaît selon https://framasoft.org/fr/moderation dans le formulaire mis à votre disposition.",n.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"transfert de vos données"}),`Vos données sont transférées à Framaforms(Framasoft, Paris). Voyez https://framasoft.frama.io/rgpd/services/framaforms/. Framasoft pourrait envoyer des données hors-UE via Akismet. Voyez https://automattic.com/privacy/ §Other Things You Should Know (Keep Reading!) §Transferring Information Cette information pourrait relever de la liberté d'expression et d'opinion telle qu'exprimée https://framasoft.org/fr/cgu §"Version courte", "On est sympathiques" ... "Mais" ... "Clause "La loi est la loi, et on ne veut pas finir en taule": vous devez respecter la loi (que celle-ci soit bien faite ou idiote), sinon votre compte sera supprimé ;" Sentez-vous libre d'aller chercher dans une version plus longue comment on préfèrerait Akismet à Antispam Bee par exemple. J'aurais utilisé Framaforms sans compte utilisateur par simplicité de 2 sources web et IA concordantes: Brave Leo et Companion(OpenClassrooms) ChatGPT3.5+. Vous en tant que répondant·e ne devriez pas être concerné·e·s par un transfert de données hors de France.`,n.jsx("h4",{className:`
                        pt-6
                        text-[1.25rem]
                        leading-loose`,children:"cookies et traçage"}),"Ce site https://ericdev1o.github.io/OC900_p12_portfolio/ n'utilise aucun cookie de suivi ni outil de traçage. Aucune donnée de navigation n'est collectée sauf les informations que vous renseignez volontairement dans le formulaire."]}),n.jsx("div",{className:`
                    sticky 
                    bottom-0 
                    bg-gray-200 
                    border-t 
                    border-gray-300 
                    p-4 
                    text-center`,children:n.jsx("button",{type:"button",onClick:t,className:`
                        mt-6 
                        px-4 
                        py-2 
                        rounded-lg 
                        bg-blue-600 
                        text-gray-200 
                        hover:bg-blue-700`,children:"Fermer la fenêtre"})})]})]})}export{L as default};
