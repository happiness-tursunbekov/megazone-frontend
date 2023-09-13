var F=Object.defineProperty;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var I=(a,s,i)=>s in a?F(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i,q=(a,s)=>{for(var i in s||(s={}))P.call(s,i)&&I(a,i,s[i]);if(k)for(var i of k(s))V.call(s,i)&&I(a,i,s[i]);return a};import{S as N}from"./Store.f60cdf9c.js";import{a as T,b as j,u as C,c as $}from"./index.53a73aea.js";import{i as B,E as A,o as l,c,a as e,t as p,b as h,g as y,F as _,j as w,O as S,T as z,u as r,N as L,n as M,l as O,K as U,Q as D,M as f,w as E,L as R}from"./vendor.61f7b769.js";import{S as K,P as Q}from"./Product.ea47802a.js";import{P as G}from"./Pagination.72eb8319.js";const H={class:"sidebar sidebar-shop"},J=e("div",{class:"widget widget-clean"},[e("label",null,"Filters:"),e("a",{href:"#",class:"sidebar-filter-clear"},"Clean All")],-1),W={key:0,class:"widget widget-collapsible"},X={class:"widget-title"},Y={"data-toggle":"collapse",href:"#widget-1",role:"button","aria-expanded":"true","aria-controls":"widget-1"},Z={class:"collapse show",id:"widget-1"},ee={class:"widget-body widget-categories"},te={key:1,class:"widget widget-collapsible"},se=e("h3",{class:"widget-title"},[e("a",{"data-toggle":"collapse",href:"#widget-2",role:"button","aria-expanded":"true","aria-controls":"widget-2"}," Size ")],-1),oe={class:"collapse show",id:"widget-2"},ae={class:"widget-body"},ie={class:"filter-items"},le={class:"custom-control custom-checkbox"},ce=["value","id"],re=["for"],de={key:2,class:"widget widget-collapsible"},ne=e("h3",{class:"widget-title"},[e("a",{"data-toggle":"collapse",href:"#widget-3",role:"button","aria-expanded":"true","aria-controls":"widget-3"}," Colour ")],-1),ue={class:"collapse show",id:"widget-3"},ge={class:"widget-body"},he={class:"filter-colors"},me=["onClick"],_e={class:"sr-only"},pe={key:3,class:"widget widget-collapsible"},ye=e("h3",{class:"widget-title"},[e("a",{"data-toggle":"collapse",href:"#widget-4",role:"button","aria-expanded":"true","aria-controls":"widget-4"}," Brand ")],-1),we={class:"collapse show",id:"widget-4"},be={class:"widget-body"},ve={class:"filter-items"},fe={class:"custom-control custom-checkbox"},xe=["value","id"],ke=["for"],Ie=e("div",{class:"widget widget-collapsible"},[e("h3",{class:"widget-title"},[e("a",{"data-toggle":"collapse",href:"#widget-5",role:"button","aria-expanded":"true","aria-controls":"widget-5"}," Price ")]),e("div",{class:"collapse show",id:"widget-5"},[e("div",{class:"widget-body"},[e("div",{class:"filter-price"},[e("div",{class:"row"},[e("div",{class:"col"},[e("div",{class:"form-group"},[e("label",{class:"form-label"},"\u0421"),e("input",{type:"number",class:"form-control",min:"0"})])]),e("div",{class:"col"},[e("div",{class:"form-group"},[e("label",{class:"form-label"},"\u0414\u043E"),e("input",{type:"number",class:"form-control",min:"1"})])])])])])])],-1),qe={props:{category:Object,query:Object},emits:["change"],setup(a,{emit:s}){const o=B(a.query);return A(()=>o,()=>s("change",o)),(x,n)=>(l(),c("div",H,[J,a.category.children.length>0?(l(),c("div",W,[e("h3",X,[e("a",Y,p(a.category.name),1)]),e("div",Z,[e("div",ee,[h(K,{categories:a.category.children},null,8,["categories"])])])])):y("",!0),a.category.sizes.length>0?(l(),c("div",te,[se,e("div",oe,[e("div",ae,[e("div",ie,[(l(!0),c(_,null,w(a.category.sizes,t=>(l(),c("div",{key:t.id,class:"filter-item"},[e("div",le,[S(e("input",{"onUpdate:modelValue":n[0]||(n[0]=g=>r(o).sizeIds=g),type:"checkbox",class:"custom-control-input",value:t.id,id:"size-"+t.id},null,8,ce),[[z,r(o).sizeIds]]),e("label",{class:"custom-control-label",for:"size-"+t.id},p(t.title),9,re)])]))),128))])])])])):y("",!0),a.category.colors.length>0?(l(),c("div",de,[ne,e("div",ue,[e("div",ge,[e("div",he,[(l(!0),c(_,null,w(a.category.colors,t=>(l(),c("a",{key:t.id,href:"#",onClick:L(g=>r(o).colorId=r(o).colorId===t.id?"":t.id,["prevent"]),class:M({selected:t.id===r(o).colorId}),style:O(`background: ${t.addition};`)},[e("span",_e,p(t.title),1)],14,me))),128))])])])])):y("",!0),a.category.brands.length>0?(l(),c("div",pe,[ye,e("div",we,[e("div",be,[e("div",ve,[(l(!0),c(_,null,w(a.category.brands,t=>(l(),c("div",{key:t.id,class:"filter-item"},[e("div",fe,[S(e("input",{"onUpdate:modelValue":n[1]||(n[1]=g=>r(o).brandIds=g),type:"checkbox",class:"custom-control-input",value:t.id,id:"brand-"+t.id},null,8,xe),[[z,r(o).brandIds]]),e("label",{class:"custom-control-label",for:"brand-"+t.id},p(t.name),9,ke)])]))),128))])])])])):y("",!0),Ie]))}},Ce={class:"container-fluid"},$e={class:"row"},Se={class:"col-lg-3"},ze={class:"col-lg-9"},Be={class:"products mb-3"},Fe={class:"row"},Le={async setup(a){let s,i;const o=U(),x=D(),n=([s,i]=f(()=>R().dispatch("fetchStore",o.params.store)),s=await s,i(),s),t=([s,i]=f(()=>C().get($().storeCategory.replace(":storeId",n.id).replace(":categoryId",o.params.id))),s=await s,i(),s).data,g=[{label:T().app.stores,route:{name:"stores.index"}},{label:n.name,route:{name:"stores.show",params:{store:n.slug}}},...t.parents.length>0?t.parents.map(d=>({label:d.name,route:{name:"stores.categories.show",params:{id:d.id}}})):[],{label:t.name}],u=B({data:[],meta:{},query:{categoryId:o.params.id,categories:o.query.categories||[],sortBy:o.query.sortBy||"",page:o.query.page||"",colorId:o.query.colorId||"",sizeIds:o.query.sizeIds||[],brandIds:o.query.brandIds||[],priceFrom:o.query.priceFrom||"",priceTo:o.query.priceTo||""}}),b=async d=>{u.query=q({},d);const v=await C().get($().storeProducts.replace(":storeId",n.id),{params:u.query});for(let m in d)d[m]||delete d[m];delete d.categoryId,x.push({query:d}).catch(()=>{}),u.data=v.data.data,u.meta=v.data.meta};return[s,i]=f(()=>b(u.query)),await s,i(),(d,v)=>(l(),c(_,null,[h(N),h(j,{breadcrumbs:g,title:r(t).name,"is-store":""},null,8,["title"]),e("div",Ce,[e("div",$e,[e("div",Se,[h(qe,{category:r(t),query:r(u).query,onChange:b},null,8,["category","query"])]),e("div",ze,[h(G,{pagination:r(u).meta,query:r(u).query,onChange:b},{default:E(()=>[e("div",Be,[e("div",Fe,[(l(!0),c(_,null,w(r(u).data,m=>(l(),c("div",{key:m.id,class:"col-6 col-md-4 col-xl-3 col-xxl-2"},[h(Q,{item:m},null,8,["item"])]))),128))])])]),_:1},8,["pagination","query"])])])])],64))}};export{Le as default};