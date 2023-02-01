import{S as je,i as ke,n as xe,j as i,q as w,s as D,k as u,l as h,r as j,f as s,c as F,m as d,p as pe,K as Se,a as V,I as l,B as Q,L as ve}from"../../chunks/index-83c316d0.js";import{c as Te}from"../../chunks/shared-23917130.js";const ge=(r,e)=>!e||!r.startsWith(e)?r:r.substring(e.length),Oe=(r,e)=>!e||!r.endsWith(e)?r:r.substring(0,r.length-e.length),A={name:"Felt",source:"https://github.com/feltjs/felt",summary:"Felt is free and open source software and tools for building and maintaining communities, publishing to the web, and collaborating with information💚",repos:[{name:"Felt project website",summary:"you are here",url:"https://www.felt.dev/",source:"https://github.com/feltjs/felt"},{name:"@feltjs/felt-server",summary:"server for Felt, a tool for building and maintaining communities",url:"",source:"https://github.com/feltjs/felt-server"},{name:"@feltjs/felt-ui",summary:"styles and Svelte UI components",url:"https://ui.felt.dev/",source:"https://github.com/feltjs/felt-ui"},{name:"felt-template",summary:"a static web app and Node library template with Svelte, SvelteKit, Vite, TypesScript, ESLint, Prettier, Gro, and Felt",url:"https://template.felt.dev/",source:"https://github.com/feltjs/felt-template"},{name:"@feltjs/gro",summary:"opinionated webdev toolkit",url:"",source:"https://github.com/feltjs/gro"},{name:"@feltjs/felt-util",summary:"a collection of JS utilities to complement the modern web platform",url:"https://util.felt.dev/",source:"https://github.com/feltjs/util"}],values:["we put the people who use our software first","sustainability through aligned incentives","intentional collaboration, community, and governance","open source and interoperability","transparency and accountability","simplicity and efficiency","easy and inexpensive self-hosting","privacy by default","accessibility, inclusivity, and diversity","fostering learning, innovation, and experimentation"]};function be(r,e,o){const a=r.slice();return a[0]=e[o],a}function ye(r,e,o){const a=r.slice();return a[3]=e[o],a}function Ae(r){let e=r[3].name+"",o;return{c(){o=w(e)},l(a){o=j(a,e)},m(a,c){V(a,o,c)},p:Q,d(a){a&&s(o)}}}function Ie(r){let e,o=r[3].name+"",a;return{c(){e=i("code"),a=w(o)},l(c){e=u(c,"CODE",{});var f=h(e);a=j(f,o),f.forEach(s)},m(c,f){V(c,e,f),l(e,a)},p:Q,d(c){c&&s(e)}}}function Ee(r){let e,o,a,c,f,G=Oe(ge(ge(r[3].url,"https://"),"www."),"/")+"",I,E,k=r[3].summary+"",L;function M(m,b){return m[3].name.startsWith("@")?Ie:Ae}let g=M(r)(r);return{c(){e=i("tr"),o=i("td"),a=i("a"),g.c(),c=i("td"),f=i("a"),I=w(G),E=i("td"),L=w(k),this.h()},l(m){e=u(m,"TR",{class:!0});var b=h(e);o=u(b,"TD",{class:!0});var N=h(o);a=u(N,"A",{href:!0});var S=h(a);g.l(S),S.forEach(s),N.forEach(s),c=u(b,"TD",{class:!0});var x=h(c);f=u(x,"A",{href:!0});var B=h(f);I=j(B,G),B.forEach(s),x.forEach(s),E=u(b,"TD",{class:!0});var y=h(E);L=j(y,k),y.forEach(s),b.forEach(s),this.h()},h(){d(a,"href",r[3].source),d(o,"class","svelte-1tjxwm9"),d(f,"href",r[3].url),d(c,"class","svelte-1tjxwm9"),d(E,"class","svelte-1tjxwm9"),d(e,"class","svelte-1tjxwm9")},m(m,b){V(m,e,b),l(e,o),l(o,a),g.m(a,null),l(e,c),l(c,f),l(f,I),l(e,E),l(E,L)},p(m,b){g.p(m,b)},d(m){m&&s(e),g.d()}}}function we(r){let e,o=r[0]+"",a;return{c(){e=i("li"),a=w(o)},l(c){e=u(c,"LI",{});var f=h(e);a=j(f,o),f.forEach(s)},m(c,f){V(c,e,f),l(e,a)},p:Q,d(c){c&&s(e)}}}function qe(r){let e,o,a,c,f,G=A.name+"",I,E,k,L=A.summary+"",M,Y,g,m,b,N,S,x,B,y,H,$,ee,K,te,T,J,P,le,ae,R,q,se,U=A.repos,_=[];for(let n=0;n<U.length;n+=1)_[n]=Ee(ye(r,U,n));let W=A.values,p=[];for(let n=0;n<W.length;n+=1)p[n]=we(be(r,W,n));return{c(){e=i("main"),o=i("section"),a=i("header"),c=i("h1"),f=i("a"),I=w(G),E=D(),k=i("blockquote"),M=w(L),Y=D(),g=i("section"),m=i("h2"),b=w("repos:"),N=D(),S=i("table"),x=i("tbody");for(let n=0;n<_.length;n+=1)_[n].c();B=D(),y=i("section"),H=i("h2"),$=w("values:"),ee=D(),K=i("ul");for(let n=0;n<p.length;n+=1)p[n].c();te=D(),T=i("footer"),J=i("p"),P=i("a"),le=w("source code"),ae=D(),R=i("a"),q=i("img"),this.h()},l(n){e=u(n,"MAIN",{class:!0});var v=h(e);o=u(v,"SECTION",{});var t=h(o);a=u(t,"HEADER",{class:!0});var O=h(a);c=u(O,"H1",{class:!0});var re=h(c);f=u(re,"A",{href:!0});var oe=h(f);I=j(oe,G),oe.forEach(s),re.forEach(s),O.forEach(s),E=F(t),k=u(t,"BLOCKQUOTE",{class:!0});var ne=h(k);M=j(ne,L),ne.forEach(s),t.forEach(s),Y=F(v),g=u(v,"SECTION",{class:!0});var z=h(g);m=u(z,"H2",{style:!0});var ce=h(m);b=j(ce,"repos:"),ce.forEach(s),N=F(z),S=u(z,"TABLE",{});var ie=h(S);x=u(ie,"TBODY",{});var ue=h(x);for(let C=0;C<_.length;C+=1)_[C].l(ue);ue.forEach(s),ie.forEach(s),z.forEach(s),B=F(v),y=u(v,"SECTION",{class:!0});var X=h(y);H=u(X,"H2",{style:!0});var he=h(H);$=j(he,"values:"),he.forEach(s),ee=F(X),K=u(X,"UL",{});var fe=h(K);for(let C=0;C<p.length;C+=1)p[C].l(fe);fe.forEach(s),X.forEach(s),te=F(v),T=u(v,"FOOTER",{class:!0});var Z=h(T);J=u(Z,"P",{});var de=h(J);P=u(de,"A",{href:!0});var me=h(P);le=j(me,"source code"),me.forEach(s),de.forEach(s),ae=F(Z),R=u(Z,"A",{href:!0});var _e=h(R);q=u(_e,"IMG",{src:!0,alt:!0,class:!0}),_e.forEach(s),Z.forEach(s),v.forEach(s),this.h()},h(){d(f,"href",A.source),d(c,"class","svelte-1tjxwm9"),d(a,"class","centered svelte-1tjxwm9"),d(k,"class","column-sm"),pe(m,"width","100%"),d(g,"class","panel padded-md"),pe(H,"width","100%"),d(y,"class","centered panel padded-lg"),d(P,"href",A.source),Se(q.src,se=Te+"/favicon.png")||d(q,"src",se),d(q,"alt","green felt textured heart with the word 'felt' cut out"),d(q,"class","svelte-1tjxwm9"),d(R,"href","https://github.com/feltjs"),d(T,"class","centered svelte-1tjxwm9"),d(e,"class","markup column svelte-1tjxwm9")},m(n,v){V(n,e,v),l(e,o),l(o,a),l(a,c),l(c,f),l(f,I),l(o,E),l(o,k),l(k,M),l(e,Y),l(e,g),l(g,m),l(m,b),l(g,N),l(g,S),l(S,x);for(let t=0;t<_.length;t+=1)_[t].m(x,null);l(e,B),l(e,y),l(y,H),l(H,$),l(y,ee),l(y,K);for(let t=0;t<p.length;t+=1)p[t].m(K,null);l(e,te),l(e,T),l(T,J),l(J,P),l(P,le),l(T,ae),l(T,R),l(R,q)},p(n,[v]){if(v&0){U=A.repos;let t;for(t=0;t<U.length;t+=1){const O=ye(n,U,t);_[t]?_[t].p(O,v):(_[t]=Ee(O),_[t].c(),_[t].m(x,null))}for(;t<_.length;t+=1)_[t].d(1);_.length=U.length}if(v&0){W=A.values;let t;for(t=0;t<W.length;t+=1){const O=be(n,W,t);p[t]?p[t].p(O,v):(p[t]=we(O),p[t].c(),p[t].m(K,null))}for(;t<p.length;t+=1)p[t].d(1);p.length=W.length}},i:Q,o:Q,d(n){n&&s(e),ve(_,n),ve(p,n)}}}class Fe extends je{constructor(e){super(),ke(this,e,null,qe,xe,{})}}export{Fe as default};
