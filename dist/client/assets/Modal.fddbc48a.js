import{_ as r}from"./index.53a73aea.js";import{o as d,c as i,a as o,e as u,t as c,g as n,U as _,p as k,h}from"./vendor.61f7b769.js";const b={name:"Modal",props:{modelValue:Boolean,modalTitle:String,modalDescription:String,cancelButtonLabel:String,okButtonLabel:String,disableBackdropClose:Boolean},created(){this.modelValue?this.$modal.show():this.$modal.hide()},watch:{modelValue(e){e?this.$modal.show():this.$modal.hide()}},methods:{modalBackDrop(e){!this.disableBackdropClose&&e.target.classList.contains("modal")&&this.$emit("update:modelValue",!1)},close(){this.$emit("update:modelValue",!1),this.$emit("close")}}},m=e=>(k("data-v-43d75a3e"),e=e(),h(),e),B={key:0},f=m(()=>o("div",{class:"back-drop"},null,-1)),v={class:"modal-dialog modal-dialog-centered"},y={class:"modal-content"},p=m(()=>o("span",{"aria-hidden":"true"},[o("i",{class:"icon-close"})],-1)),g=[p],L={key:0,class:"modal-header"},S={class:"modal-title"},V={key:0,class:"title-desc"},C=m(()=>o("br",null,null,-1)),D={class:"modal-body"},w={key:1,class:"modal-footer"};function I(e,l,t,M,T,a){return t.modelValue?(d(),i("div",B,[f,o("div",{onClick:l[3]||(l[3]=(...s)=>a.modalBackDrop&&a.modalBackDrop(...s)),class:"modal fade show",style:{display:"inline-block"},ref:"modalBackDrop"},[o("div",v,[o("div",y,[o("button",{onClick:l[0]||(l[0]=(...s)=>a.close&&a.close(...s)),type:"button",class:"modal-close"},g),t.modalTitle?(d(),i("div",L,[o("h4",S,[u(c(t.modalTitle),1),t.modalDescription?(d(),i("small",V,[C,u(c(t.modalDescription),1)])):n("",!0)])])):n("",!0),o("div",D,[_(e.$slots,"default",{},void 0,!0)]),t.cancelButtonLabel||t.okButtonLabel?(d(),i("div",w,[t.cancelButtonLabel?(d(),i("button",{key:0,onClick:l[1]||(l[1]=(...s)=>a.close&&a.close(...s)),type:"button",class:"btn btn--info-outline"},c(t.cancelButtonLabel),1)):n("",!0),t.okButtonLabel?(d(),i("button",{key:1,onClick:l[2]||(l[2]=s=>{e.$emit("ok-button-click"),e.$emit("okButtonClick")}),type:"button",class:"btn btn--info"},c(t.okButtonLabel),1)):n("",!0)])):n("",!0)])])],512)])):n("",!0)}var E=r(b,[["render",I],["__scopeId","data-v-43d75a3e"]]);export{E as M};
