import{j as T,r,u as C,l as A,M as E,a as B,B as R,R as O,b as k,c as G}from"./vendor.bd7dc9b3.js";const H=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=n(t);fetch(t.href,l)}};H();const e=T.exports.jsx,g=T.exports.jsxs,y=T.exports.Fragment,j=()=>g("div",{className:"lds-roller",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{})]});const I=({setmodal:a,modal:o,setimage:n,image:s})=>{const[t,l]=r.exports.useState(!1),c=p=>{(p.target.className==="img-container"||p.target.nodeName==="BUTTON")&&(n(""),l(!1),a(!o))};return g("div",{className:"modal-image",onClick:c,style:{display:o?"block":"none"},children:[e("div",{className:"img-container",style:{display:t?"flex":"none"},children:g("div",{className:"img",children:[e("button",{onClick:c,children:"X"}),e("img",{src:s,onLoad:()=>l(!0)})]})}),t?e(y,{}):e(j,{})]})},P=({ref:a,distance:o="500px"})=>{const[n,s]=r.exports.useState(!1);return r.exports.useEffect(()=>{const t=c=>{c[0].isIntersecting?s(!0):s(!1)};new IntersectionObserver(t,{rootMargin:o}).observe(a.current)},[]),{nextShow:n,setnextShow:s}},W=({page:a})=>{const o="/api",[n,s]=r.exports.useState([]),t=10,[l,c]=r.exports.useState(null);return r.exports.useEffect(()=>{const p=new AbortController,d=p.signal;return window.fetch(o+`/posts/limit=${t}&skip=${t*(a-1)}`,{signal:d}).then(i=>i.json()).then(i=>s([...n,...i])).catch(i=>{i.name==="AbortError"?console.log("successfully aborted"):c(i)}),()=>p.abort()},[a]),{images:n}},M=()=>{const a=C(),o={default:4,1100:3,700:2,500:1},[n,s]=r.exports.useState(!1),[t,l]=r.exports.useState(""),[c,p]=r.exports.useState(1),d=r.exports.useRef(),{images:i}=W({page:c}),{nextShow:h}=P({ref:d}),b=r.exports.useCallback(A(()=>{p(x=>x+1)},500),[]);r.exports.useEffect(()=>{h&&b()},[h,b]);const N=x=>{l(x.target.currentSrc),s(!n)},S=i.map(function(x){return g("div",{className:"img-item",children:[e("img",{src:x.imgSrc,alt:"Image",onClick:N}),e("div",{className:"tags-img",children:x.tags.map(u=>g("p",{onClick:()=>a(`/tag/${u}`),children:["#",u," "]},u))})]},x.id)});return g(y,{children:[e(E,{breakpointCols:o,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:S}),e("div",{id:"observe",children:e("p",{ref:d,children:"Whoops... That's it, dude."})}),e(I,{modal:n,setmodal:s,image:t,setimage:l})]})};const $=({settagsBtn:a})=>{const o="/api",[n,s]=r.exports.useState([]),[t,l]=r.exports.useState(null);return r.exports.useEffect(()=>{const c=new AbortController,p=c.signal;return window.fetch(o+"/tags/all",{signal:p}).then(d=>d.json()).then(d=>{const i=d.map(h=>h.tag);a(i)}).catch(d=>{d.name==="AbortError"?console.log("successfully aborted"):l(d)}),()=>c.abort()},[]),n},F=()=>{const a="/api",[o,n]=r.exports.useState([]);$({settagsBtn:n});const[s,t]=r.exports.useState([]),[l,c]=r.exports.useState(!1),[p,d]=r.exports.useState(""),[i,h]=r.exports.useState(""),b=()=>{t([]),h(""),c(!1)},N=u=>{const m=u.target.innerHTML;if(s.includes(m)){const f=s.filter(v=>v!==m);t(f)}else t(f=>[...f,m])},S=async u=>{c(!0),u.preventDefault();const m={imgurl:i,tags:s,userId:"61e9c0bff06e4fa6550d2760",username:"Nazareno7870"};B.post(a+"/posts/createpost",m).then(f=>{b()})},x=u=>{if(u.key==="Enter"){const m=p.split(" ");for(let v=0;v<m.length;v++)m[v]=m[v].charAt(0).toUpperCase()+m[v].slice(1);const f=m.join(" ");if(n(v=>[...v,f]),s.includes(f)){const v=s.filter(L=>L!==f);t(v)}else t(v=>[...v,f]);d("")}};return g(y,{children:[e("div",{className:"tags",children:o.map(u=>e("button",{onClick:N,className:s.includes(u)?"active":"",children:u},u))}),e("input",{type:"text",id:"newTag",placeholder:"New Tag",value:p,onKeyPress:x,onChange:u=>d(u.target.value)}),g("form",{className:"form-new-post",onSubmit:S,children:[i!==""?e("img",{className:"new-image",src:i,alt:"imagen a enviar"}):e(y,{}),e("input",{type:"text",name:"url",id:"url",value:i,onChange:u=>h(u.target.value)}),e("button",{className:"btn-creatpost",children:"Submit"})]}),e("div",{className:"modal-image",style:{display:l?"block":"none"},children:e(j,{})})]})};const _=({showMenu:a,setshowMenu:o})=>{const n=r.exports.useRef(),s=C();return r.exports.useEffect(()=>{a?n.current.style.top="47px":n.current.style.top="-156px"},[a]),e("div",{ref:n,className:"menu",children:g("ul",{children:[e("li",{onClick:()=>{s("/gallery"),o(!n)},children:"Latest"}),e("li",{onClick:()=>{s("/createpost"),o(!n)},children:"Create Post"}),e("li",{onClick:()=>{s("/tag"),o(!n)},children:"Tags"})]})})};const D=()=>{const[a,o]=r.exports.useState(!1),n=C();return g(y,{children:[g("div",{className:"navbar",children:[e("div",{className:"logo",children:e("a",{onClick:()=>n("/"),children:e("img",{src:"../imgs/assets/logo.svg",alt:"Logo ImgWide"})})}),e("div",{className:"menu-desk",children:g("ul",{children:[e("li",{onClick:()=>{n("/gallery")},children:"Latest"}),e("li",{onClick:()=>{n("/createpost")},children:"Create Post"}),e("li",{onClick:()=>{n("/tag")},children:"Tags"})]})}),e("div",{className:"icon-menu",onClick:()=>o(!a),children:e("img",{src:"../imgs/assets/menu-icon.svg",alt:"Menu ImgWide"})})]}),e(_,{showMenu:a,setshowMenu:o})]})},w=({children:a})=>g(y,{children:[e(D,{}),e("div",{className:"container",children:a})]});const K=({page:a,TagRef:o})=>{const n="/api",[s,t]=r.exports.useState([]),l=10,[c,p]=r.exports.useState(null);return r.exports.useEffect(()=>{const d=new AbortController,i=d.signal;return window.fetch(n+`/tags/tag/${o}&limit=${l}&skip=${l*(a-1)}`,{signal:i}).then(h=>h.json()).then(h=>t([...s,...h])).catch(h=>{h.name==="AbortError"?console.log("successfully aborted"):p(h)}),()=>d.abort()},[a,o]),{images:s,setimages:t}},U=()=>{const a=C(),o=window.location.pathname.slice(5),n={default:4,1100:3,700:2,500:1},[s,t]=r.exports.useState(!1),[l,c]=r.exports.useState(""),[p,d]=r.exports.useState(1),i=r.exports.useRef(),{images:h,setimages:b}=K({page:p,TagRef:o}),{nextShow:N}=P({ref:i}),S=r.exports.useCallback(A(()=>{d(m=>m+1)},500),[]);r.exports.useEffect(()=>{N&&S()},[N,S]);const x=m=>{c(m.target.currentSrc),t(!s)},u=h.map(function(m){return g("div",{className:"img-item",children:[e("img",{src:m.imgSrc,alt:"Image",onClick:x}),e("div",{className:"tags-img",children:m.tags.map(f=>g("p",{onClick:()=>{b([]),a(`/tag/${f}`)},children:["#",f," "]},f))})]},m.id)});return g(y,{children:[e(E,{breakpointCols:n,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:u}),e("div",{id:"observe",children:e("p",{ref:i,children:"Whoops... That's it, dude."})}),e(I,{modal:s,setmodal:t,image:l,setimage:c})]})},q=()=>{const[a,o]=r.exports.useState([]);$({settagsBtn:o});const n=C();return e("div",{className:"tags",children:a.map(s=>e("button",{onClick:()=>n(s),children:s},s))})};function z(){return e(y,{children:e(R,{children:g(O,{children:[e(k,{exact:!0,path:"/gallery",element:e(w,{children:e(M,{})})}),e(k,{exact:!0,path:"/",element:e(w,{children:e(M,{})})}),e(k,{exact:!0,path:"/tag",element:e(w,{children:e(q,{})})}),e(k,{exact:!0,path:"/tag/*",element:e(w,{children:e(U,{})})}),e(k,{exact:!0,path:"/createpost",element:e(w,{children:e(F,{})})})]})})})}G.render(e(z,{}),document.getElementById("root"));
