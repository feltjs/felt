import{S as Ce,i as Ie,n as Re,j as c,q as y,s as N,k as i,l as h,r as w,f as s,c as C,m as d,p as he,K as qe,a as X,I as t,B as z,L as xe}from"../../chunks/index-83c316d0.js";import{c as De}from"../../chunks/shared-23917130.js";const Se=(r,e)=>!e||!r.startsWith(e)?r:r.substring(e.length),Fe=(r,e)=>!e||!r.endsWith(e)?r:r.substring(0,r.length-e.length),I={name:"Felt",source:"https://github.com/feltjs/felt",summary:"Felt is free and open source software and tools for building and maintaining communities, publishing to the web, and collaborating with information💚",repos:[{name:"Felt project website",summary:"you are here",url:"https://www.felt.dev/",source:"https://github.com/feltjs/felt"},{name:"@feltjs/felt-server",summary:"server for Felt, a tool for building and maintaining communities",url:"",source:"https://github.com/feltjs/felt-server"},{name:"@feltjs/felt-ui",summary:"styles and UI components for Svelte and SvelteKit",url:"https://ui.felt.dev/",source:"https://github.com/feltjs/felt-ui"},{name:"felt-template",summary:"a static web app and Node library template with Svelte, SvelteKit, Vite, TypesScript, ESLint, Prettier, Gro, and Felt",url:"https://template.felt.dev/",source:"https://github.com/feltjs/felt-template"},{name:"@feltjs/gro",summary:"opinionated webdev toolkit",url:"",source:"https://github.com/feltjs/gro"},{name:"@feltjs/felt-util",summary:"a collection of JS utilities to complement the modern web platform",url:"https://util.felt.dev/",source:"https://github.com/feltjs/util"}],values:["we put the people who use our software first","sustainability through aligned incentives","intentional collaboration, community, and governance","open source and interoperability","transparency and accountability","simplicity and efficiency","easy and inexpensive self-hosting","privacy by default","accessibility, inclusivity, and diversity","fostering learning and experimentation"]};function Ae(r,e,o){const a=r.slice();return a[0]=e[o],a}function Oe(r,e,o){const a=r.slice();return a[3]=e[o],a}function Le(r){let e=r[3].name+"",o;return{c(){o=y(e)},l(a){o=w(a,e)},m(a,u){X(a,o,u)},p:z,d(a){a&&s(o)}}}function Ve(r){let e,o=r[3].name+"",a;return{c(){e=c("code"),a=y(o)},l(u){e=i(u,"CODE",{});var f=h(e);a=w(f,o),f.forEach(s)},m(u,f){X(u,e,f),t(e,a)},p:z,d(u){u&&s(e)}}}function Te(r){let e,o,a,u,f,J=Fe(Se(Se(r[3].url,"https://"),"www."),"/")+"",R,j,k=r[3].summary+"",F;function Q(m,b){return m[3].name.startsWith("@")?Ve:Le}let g=Q(r)(r);return{c(){e=c("tr"),o=c("td"),a=c("a"),g.c(),u=c("td"),f=c("a"),R=y(J),j=c("td"),F=y(k),this.h()},l(m){e=i(m,"TR",{class:!0});var b=h(e);o=i(b,"TD",{class:!0});var L=h(o);a=i(L,"A",{href:!0});var S=h(a);g.l(S),S.forEach(s),L.forEach(s),u=i(b,"TD",{class:!0});var x=h(u);f=i(x,"A",{href:!0});var V=h(f);R=w(V,J),V.forEach(s),x.forEach(s),j=i(b,"TD",{class:!0});var E=h(j);F=w(E,k),E.forEach(s),b.forEach(s),this.h()},h(){d(a,"href",r[3].source),d(o,"class","svelte-1tjxwm9"),d(f,"href",r[3].url),d(u,"class","svelte-1tjxwm9"),d(j,"class","svelte-1tjxwm9"),d(e,"class","svelte-1tjxwm9")},m(m,b){X(m,e,b),t(e,o),t(o,a),g.m(a,null),t(e,u),t(u,f),t(f,R),t(e,j),t(j,F)},p(m,b){g.p(m,b)},d(m){m&&s(e),g.d()}}}function Ne(r){let e,o=r[0]+"",a;return{c(){e=c("li"),a=y(o)},l(u){e=i(u,"LI",{});var f=h(e);a=w(f,o),f.forEach(s)},m(u,f){X(u,e,f),t(e,a)},p:z,d(u){u&&s(e)}}}function Ge(r){let e,o,a,u,f,J=I.name+"",R,j,k,F=I.summary+"",Q,Z,g,m,b,L,S,x,V,E,G,le,ae,B,se,A,re,H,oe,ne,ce,O,Y,K,ie,ue,P,q,fe,U=I.repos,_=[];for(let n=0;n<U.length;n+=1)_[n]=Te(Oe(r,U,n));let W=I.values,p=[];for(let n=0;n<W.length;n+=1)p[n]=Ne(Ae(r,W,n));return{c(){e=c("main"),o=c("section"),a=c("header"),u=c("h1"),f=c("a"),R=y(J),j=N(),k=c("blockquote"),Q=y(F),Z=N(),g=c("section"),m=c("h2"),b=y("Repos"),L=N(),S=c("table"),x=c("tbody");for(let n=0;n<_.length;n+=1)_[n].c();V=N(),E=c("section"),G=c("h2"),le=y("Values"),ae=N(),B=c("ul");for(let n=0;n<p.length;n+=1)p[n].c();se=N(),A=c("p"),re=y("See "),H=c("a"),oe=y("GOVERNANCE.md"),ne=y(" for more."),ce=N(),O=c("footer"),Y=c("p"),K=c("a"),ie=y("source code"),ue=N(),P=c("a"),q=c("img"),this.h()},l(n){e=i(n,"MAIN",{class:!0});var v=h(e);o=i(v,"SECTION",{});var l=h(o);a=i(l,"HEADER",{class:!0});var T=h(a);u=i(T,"H1",{class:!0});var de=h(u);f=i(de,"A",{href:!0});var me=h(f);R=w(me,J),me.forEach(s),de.forEach(s),T.forEach(s),j=C(l),k=i(l,"BLOCKQUOTE",{class:!0});var _e=h(k);Q=w(_e,F),_e.forEach(s),l.forEach(s),Z=C(v),g=i(v,"SECTION",{class:!0});var $=h(g);m=i($,"H2",{style:!0});var pe=h(m);b=w(pe,"Repos"),pe.forEach(s),L=C($),S=i($,"TABLE",{});var ve=h(S);x=i(ve,"TBODY",{});var ge=h(x);for(let D=0;D<_.length;D+=1)_[D].l(ge);ge.forEach(s),ve.forEach(s),$.forEach(s),V=C(v),E=i(v,"SECTION",{class:!0});var M=h(E);G=i(M,"H2",{style:!0});var be=h(G);le=w(be,"Values"),be.forEach(s),ae=C(M),B=i(M,"UL",{});var Ee=h(B);for(let D=0;D<p.length;D+=1)p[D].l(Ee);Ee.forEach(s),se=C(M),A=i(M,"P",{style:!0});var ee=h(A);re=w(ee,"See "),H=i(ee,"A",{href:!0});var ye=h(H);oe=w(ye,"GOVERNANCE.md"),ye.forEach(s),ne=w(ee," for more."),ee.forEach(s),M.forEach(s),ce=C(v),O=i(v,"FOOTER",{class:!0});var te=h(O);Y=i(te,"P",{});var we=h(Y);K=i(we,"A",{href:!0});var je=h(K);ie=w(je,"source code"),je.forEach(s),we.forEach(s),ue=C(te),P=i(te,"A",{href:!0});var ke=h(P);q=i(ke,"IMG",{src:!0,alt:!0,class:!0}),ke.forEach(s),te.forEach(s),v.forEach(s),this.h()},h(){d(f,"href",I.source),d(u,"class","svelte-1tjxwm9"),d(a,"class","centered svelte-1tjxwm9"),d(k,"class","column-sm"),he(m,"width","100%"),d(g,"class","panel padded-md"),he(G,"width","100%"),d(H,"href","https://github.com/feltjs/felt/blob/main/GOVERNANCE.md"),he(A,"width","100%"),d(E,"class","centered panel padded-lg"),d(K,"href",I.source),qe(q.src,fe=De+"/favicon.png")||d(q,"src",fe),d(q,"alt","green felt textured heart with the word 'felt' cut out"),d(q,"class","svelte-1tjxwm9"),d(P,"href","https://github.com/feltjs"),d(O,"class","centered svelte-1tjxwm9"),d(e,"class","markup column svelte-1tjxwm9")},m(n,v){X(n,e,v),t(e,o),t(o,a),t(a,u),t(u,f),t(f,R),t(o,j),t(o,k),t(k,Q),t(e,Z),t(e,g),t(g,m),t(m,b),t(g,L),t(g,S),t(S,x);for(let l=0;l<_.length;l+=1)_[l].m(x,null);t(e,V),t(e,E),t(E,G),t(G,le),t(E,ae),t(E,B);for(let l=0;l<p.length;l+=1)p[l].m(B,null);t(E,se),t(E,A),t(A,re),t(A,H),t(H,oe),t(A,ne),t(e,ce),t(e,O),t(O,Y),t(Y,K),t(K,ie),t(O,ue),t(O,P),t(P,q)},p(n,[v]){if(v&0){U=I.repos;let l;for(l=0;l<U.length;l+=1){const T=Oe(n,U,l);_[l]?_[l].p(T,v):(_[l]=Te(T),_[l].c(),_[l].m(x,null))}for(;l<_.length;l+=1)_[l].d(1);_.length=U.length}if(v&0){W=I.values;let l;for(l=0;l<W.length;l+=1){const T=Ae(n,W,l);p[l]?p[l].p(T,v):(p[l]=Ne(T),p[l].c(),p[l].m(B,null))}for(;l<p.length;l+=1)p[l].d(1);p.length=W.length}},i:z,o:z,d(n){n&&s(e),xe(_,n),xe(p,n)}}}class Ke extends Ce{constructor(e){super(),Ie(this,e,null,Ge,Re,{})}}export{Ke as default};
