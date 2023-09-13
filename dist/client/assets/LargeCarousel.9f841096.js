import{z as ge,A as i,i as I,B as Me,C as Ae,D as q,E as Se,G as ke,H as y,I as b,J as M,r as J,o as U,c as Oe,b as pe,w as V,k as F,a,n as j,e as x}from"./vendor.61f7b769.js";import{_ as Be}from"./index.53a73aea.js";/**
 * Vue 3 Carousel 0.1.36
 * (c) 2022
 * @license MIT
 */const g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,breakpoints:void 0};function Ce(t,l){let n;return function(...s){n&&clearTimeout(n),n=setTimeout(()=>{t(...s),n=null},l)}}function Le(t,l){let n;return function(...s){const c=this;n||(t.apply(c,s),n=!0,setTimeout(()=>n=!1,l))}}function Ne(t){var l,n,s;return t?((n=(l=t[0])===null||l===void 0?void 0:l.type)===null||n===void 0?void 0:n.name)==="CarouselSlide"?t:((s=t[0])===null||s===void 0?void 0:s.children)||[]:[]}function je(t,l){if(t.wrapAround)return l-1;switch(t.snapAlign){case"start":return l-t.itemsToShow;case"end":return l-1;case"center":case"center-odd":return l-Math.ceil(t.itemsToShow/2);case"center-even":return l-Math.ceil(t.itemsToShow/2);default:return 0}}function De(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function he(t,l,n,s){return t.wrapAround?l:Math.min(Math.max(l,s),n)}function Ee({slidesBuffer:t,currentSlide:l,snapAlign:n,itemsToShow:s,wrapAround:c,slidesCount:d}){let r=t.indexOf(l);if(n==="center"||n==="center-odd"?r-=(s-1)/2:n==="center-even"?r-=(s-2)/2:n==="end"&&(r-=s-1),!c){const p=d-s,h=0;r=Math.max(Math.min(r,p),h)}return r}var Ve=ge({name:"Carousel",props:{itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},snapAlign:{default:g.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:g.transition,type:Number},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},settings:{default(){return{}},type:Object}},setup(t,{slots:l,emit:n,expose:s}){var c;const d=i(null),r=i([]),p=i([]),h=i(0),u=i(1),A=i(null),k=i(null);let O=i({}),S=Object.assign({},g);const o=I(Object.assign({},S)),v=i((c=o.modelValue)!==null&&c!==void 0?c:0),we=i(0),Q=i(0),L=i(0),N=i(0);M("config",o),M("slidesBuffer",p),M("slidesCount",u),M("currentSlide",v),M("maxSlide",L),M("minSlide",N);function Z(){const e=Object.assign(Object.assign({},t),t.settings);O=i(Object.assign({},e.breakpoints)),S=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0}),ee(S)}function z(){const e=Object.keys(O.value).map(m=>Number(m)).sort((m,_)=>+_-+m);let f=Object.assign({},S);e.some(m=>window.matchMedia(`(min-width: ${m}px)`).matches?(f=Object.assign(Object.assign({},f),O.value[m]),!0):!1),ee(f)}function ee(e){for(let f in e)o[f]=e[f]}const ye=Ce(()=>{O.value&&(z(),D()),P()},16);function P(){if(!d.value)return;const e=d.value.getBoundingClientRect();h.value=e.width/o.itemsToShow}function D(){u.value=Math.max(r.value.length,1),!(u.value<=0)&&(Q.value=Math.ceil((u.value-1)/2),L.value=je(o,u.value),N.value=De(o),v.value=he(o,v.value,L.value,N.value))}function $(){const e=[...Array(u.value).keys()];if(o.wrapAround&&o.itemsToShow+1<=u.value){let _=(o.itemsToShow!==1?Math.round((u.value-o.itemsToShow)/2):0)-v.value;if(o.snapAlign==="end"?_+=Math.floor(o.itemsToShow-1):(o.snapAlign==="center"||o.snapAlign==="center-odd")&&_++,_<0)for(let C=_;C<0;C++)e.push(Number(e.shift()));else for(let C=0;C<_;C++)e.unshift(Number(e.pop()))}p.value=e}Me(()=>{O.value&&(z(),D()),P(),o.autoplay&&o.autoplay>0&&le(),window.addEventListener("resize",ye,{passive:!0})}),Ae(()=>{k.value&&clearTimeout(k.value),se(!1)});let w=!1;const H={x:0,y:0},X={x:0,y:0},B=I({x:0,y:0}),te=i(!1),Y=i(!1),_e=()=>{Y.value=!0},be=()=>{Y.value=!1},ne=Le(e=>{w||e.preventDefault(),X.x=w?e.touches[0].clientX:e.clientX,X.y=w?e.touches[0].clientY:e.clientY;const f=X.x-H.x,m=X.y-H.y;B.y=m,B.x=f},16);function ae(e){w=e.type==="touchstart",w||e.preventDefault(),!(!w&&e.button!==0||E.value)&&(te.value=!0,H.x=w?e.touches[0].clientX:e.clientX,H.y=w?e.touches[0].clientY:e.clientY,document.addEventListener(w?"touchmove":"mousemove",ne),document.addEventListener(w?"touchend":"mouseup",oe))}function oe(){te.value=!1;const e=Math.sign(B.x)*.4,f=Math.round(B.x/h.value+e);let m=he(o,v.value-f,L.value,N.value);T(m),B.x=0,B.y=0,document.removeEventListener(w?"touchmove":"mousemove",ne),document.removeEventListener(w?"touchend":"mouseup",oe)}function le(){A.value=setInterval(()=>{o.pauseAutoplayOnHover&&Y.value||R()},o.autoplay)}function se(e=!0){!A.value||(clearInterval(A.value),e&&le())}const E=i(!1);function T(e,f=!1){if(se(),v.value===e||E.value)return;const m=u.value-1;if(e>m)return T(e-u.value);if(e<0)return T(e+u.value);E.value=!0,we.value=v.value,v.value=e,f||n("update:modelValue",v.value),k.value=setTimeout(()=>{o.wrapAround&&$(),E.value=!1},o.transition)}function R(){let e=v.value+o.itemsToScroll;o.wrapAround||(e=Math.min(e,L.value)),T(e)}function ie(){let e=v.value-o.itemsToScroll;o.wrapAround||(e=Math.max(e,N.value)),T(e)}const re={slideTo:T,next:R,prev:ie};M("nav",re);const ue=q(()=>Ee({slidesBuffer:p.value,itemsToShow:o.itemsToShow,snapAlign:o.snapAlign,wrapAround:Boolean(o.wrapAround),currentSlide:v.value,slidesCount:u.value}));M("slidesToScroll",ue);const xe=q(()=>({transform:`translateX(${B.x-ue.value*h.value}px)`,transition:`${E.value?o.transition:0}ms`}));function ce(){Z()}function de(){Z(),z(),D(),$(),P()}function fe(){D(),$()}Se(()=>Object.values(t),de),ce(),ke(()=>{const e=u.value!==r.value.length;t.modelValue!==void 0&&v.value!==t.modelValue&&T(Number(t.modelValue),!0),e&&fe()});const ve={config:o,slidesBuffer:p,slidesCount:u,slideWidth:h,currentSlide:v,maxSlide:L,minSlide:N,middleSlide:Q};s({updateBreakpointsConfigs:z,updateSlidesData:D,updateSlideWidth:P,updateSlidesBuffer:$,initCarousel:ce,restartCarousel:de,updateCarousel:fe,slideTo:T,next:R,prev:ie,nav:re,data:ve});const W=l.default||l.slides,G=l.addons,me=I(ve);return()=>{const e=Ne(W==null?void 0:W(me)),f=(G==null?void 0:G(me))||[];r.value=e,e.forEach((C,Te)=>C.props.index=Te);const m=y("ol",{class:"carousel__track",style:xe.value,onMousedown:o.mouseDrag?ae:null,onTouchstart:o.touchDrag?ae:null},e),_=y("div",{class:"carousel__viewport"},m);return y("section",{ref:d,class:"carousel","aria-label":"Gallery",onMouseenter:_e,onMouseleave:be},[_,f])}}});const Ie={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},K=t=>{const l=t.name;if(!l||typeof l!="string")return;const n=Ie[l],s=y("path",{d:n}),c=t.title||l,d=y("title",null,l);return y("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:c},[d,s])};K.props={name:String,title:String};const ze=(t,{slots:l,attrs:n})=>{const{next:s,prev:c}=l,d=b("config",I(Object.assign({},g))),r=b("maxSlide",i(1)),p=b("minSlide",i(1)),h=b("currentSlide",i(1)),u=b("nav",{}),A=y("button",{type:"button",class:["carousel__prev",!d.wrapAround&&h.value<=p.value&&"carousel__prev--in-active",n==null?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:u.prev},(c==null?void 0:c())||y(K,{name:"arrowLeft"})),k=y("button",{type:"button",class:["carousel__next",!d.wrapAround&&h.value>=r.value&&"carousel__next--in-active",n==null?void 0:n.class],"aria-label":"Navigate to next slide",onClick:u.next},(s==null?void 0:s())||y(K,{name:"arrowRight"}));return[A,k]};var Pe=ge({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:l}){const n=b("config",I(Object.assign({},g))),s=b("slidesBuffer",i([])),c=b("currentSlide",i(0)),d=b("slidesToScroll",i(0)),r=i(t.index);n.wrapAround&&(p(),Se(s,p));function p(){r.value=s.value.indexOf(t.index)}const h=q(()=>{const S=n.itemsToShow;return{width:`${1/S*100}%`,order:r.value.toString()}}),u=()=>t.index===c.value,A=()=>{const S=Math.ceil(d.value),o=Math.floor(d.value+n.itemsToShow);return s.value.slice(S,o).includes(t.index)},k=()=>t.index===s.value[Math.ceil(d.value)-1],O=()=>t.index===s.value[Math.floor(d.value+n.itemsToShow)];return()=>{var S;return y("li",{style:h.value,class:{carousel__slide:!0,"carousel__slide--active":u(),"carousel__slide--visible":A(),"carousel__slide--prev":k(),"carousel__slide--next":O()}},(S=l.default)===null||S===void 0?void 0:S.call(l))}}});const $e={name:"LargeCarousel",components:{Carousel:Ve,Slide:Pe,Navigation:ze},props:{type:String}},He={class:"intro-slider"},Xe=a("div",{class:"row"},[a("div",{class:"col-auto offset-lg-1 intro-col"},[a("h3",{class:"intro-subtitle"},"Trade-In Offer"),a("h1",{class:"intro-title"},[x("MacBook Air "),a("br"),x("Latest Model "),a("span",null,[a("sup",{class:"font-weight-light"},"from"),a("span",{class:"text-primary"},[x("$999"),a("sup",null,",99")])])]),a("a",{href:"category.html",class:"btn btn-outline-primary-2"},[a("span",null,"Shop Now"),a("i",{class:"icon-long-arrow-right"})])])],-1),Ue=[Xe],Ye=a("div",{class:"row"},[a("div",{class:"col-auto offset-lg-1 intro-col"},[a("h3",{class:"intro-subtitle"},"Trevel & Outdoor"),a("h1",{class:"intro-title"},[x("Original Outdoor "),a("br"),x("Beanbag "),a("span",null,[a("sup",{class:"font-weight-light line-through"},"$89,99"),a("span",{class:"text-primary"},[x("$29"),a("sup",null,",99")])])]),a("a",{href:"category.html",class:"btn btn-outline-primary-2"},[a("span",null,"Shop Now"),a("i",{class:"icon-long-arrow-right"})])])],-1),Re=[Ye],We=a("div",{class:"row"},[a("div",{class:"col-auto offset-lg-1 intro-col"},[a("h3",{class:"intro-subtitle"},"Fashion Promotions"),a("h1",{class:"intro-title"},[x("Tan Suede "),a("br"),x("Biker Jacket "),a("span",null,[a("sup",{class:"font-weight-light line-through"},"$240,00"),a("span",{class:"text-primary"},[x("$180"),a("sup",null,",99")])])]),a("a",{href:"category.html",class:"btn btn-outline-primary-2"},[a("span",null,"Shop Now"),a("i",{class:"icon-long-arrow-right"})])])],-1),Ge=[We];function Je(t,l,n,s,c,d){const r=J("slide"),p=J("navigation"),h=J("carousel");return U(),Oe("div",He,[pe(h,{autoplay:5e3,"wrap-around":"","pause-autoplay-on-hover":""},{addons:V(()=>[pe(p)]),default:V(()=>[(U(),F(r,{key:0},{default:V(()=>[a("div",{class:j("w-100 "+n.type),style:{"background-image":"url(/src/assets/images/demos/demo-13/slider/slide-1.png)"}},[a("div",{class:j(["container-fluid intro-content",{"p-5":!n.type}])},Ue,2)],2)]),_:1})),(U(),F(r,{key:1},{default:V(()=>[a("div",{class:j(["w-100 "+n.type,"w-100"]),style:{"background-image":"url(/src/assets/images/demos/demo-13/slider/slide-2.jpg)"}},[a("div",{class:j(["container-fluid intro-content",{"p-5":!n.type}])},Re,2)],2)]),_:1})),(U(),F(r,{key:2},{default:V(()=>[a("div",{class:j(["w-100 "+n.type,"w-100"]),style:{"background-image":"url(/src/assets/images/demos/demo-13/slider/slide-3.jpg)"}},[a("div",{class:j(["container-fluid intro-content",{"p-5":!n.type}])},Ge,2)],2)]),_:1}))]),_:1})])}var Ke=Be($e,[["render",Je]]);export{Ke as L};