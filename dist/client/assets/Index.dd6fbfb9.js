var r=Object.defineProperty;var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var I=(t,e,l)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,u=(t,e)=>{for(var l in e||(e={}))C.call(e,l)&&I(t,l,e[l]);if(d)for(var l of d(e))b.call(e,l)&&I(t,l,e[l]);return t};import{S as Store}from"./Store.f60cdf9c.js";import{_ as _export_sfc,b as _sfc_main$9,a as useLang}from"./index.53a73aea.js";import{r as resolveComponent,o as openBlock,c as createElementBlock,F as Fragment,j as renderList,n as normalizeClass,a as createBaseVNode,N as withModifiers,g as createCommentVNode,e as createTextVNode,t as toDisplayString,b as createVNode,p as pushScopeId,h as popScopeId,k as createBlock,w as withCtx,W as getAugmentedNamespace,X as vue_runtime_esmBundler,Y as commonjsGlobal,Z as getDefaultExportFromCjs,O as withDirectives,T as vModelCheckbox,P as vModelText,K as useRoute,M as withAsyncContext,L as useStore}from"./vendor.61f7b769.js";import{M as Modal}from"./Modal.fddbc48a.js";var StoreCategoryTree_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$8={name:"StoreCategoryTree",props:{categories:Array,showActionModal:Function,selfDropped:Boolean,dragging:Boolean,parent:Object,showFieldsModal:Function},emits:["update:categories","update:selfDropped","update:dragging"],data:function(){return{categoryId:null,iconRefs:[],childRefs:[]}},watch:{selfDropped(t){this.$emit("update:selfDropped",t)},dragging(t){this.$emit("update:dragging",t)}},methods:{dragStart(t,e){this.categoryId=e.id,t.dataTransfer.setData("category",JSON.stringify(e)),t.dataTransfer.setData(`category-id-${e.id}`,e.id),this.$emit("update:dragging",!0)},dragEnd(t){t.dataTransfer.dropEffect==="move"&&!this.selfDropped&&this.$emit("update:categories",this.categories.filter(e=>e.id!==this.categoryId)),this.categoryId=null,this.$emit("update:selfDropped",!1),this.$emit("update:dragging",!1)},drop(t,e,l){try{const c=JSON.parse(t.dataTransfer.getData("category"));let n=this.categories,i=!1;t.preventDefault(),this.categories.filter(s=>s.id===c.id).length>0&&(c.id!==parseInt(t.target.getAttribute("data-category-id"))&&this.categories.findIndex(s=>s.id===c.id)+1!==e?(n.findIndex(s=>s.id===c.id)<e&&e--,n=n.filter(s=>s.id!==c.id)):i=!0,this.$emit("update:selfDropped",!0)),i||(c.parentId=l,n=[...n.slice(0,e),c,...n.slice(e)],this.axios.post(this.$urls.storeSettingsCategoriesSort,{sort:n.map(s=>({id:s.id,parentId:s.parentId}))})),this.$emit("update:categories",n)}catch(c){console.log(c)}t.target.classList.remove("dragging")},innerDrop(t,e){const l=JSON.parse(t.dataTransfer.getData("category"));e.children.filter(c=>c.id===l.id).length===0&&e.id!==l.id?(l.parentId=e.id,e.children.splice(0,0,l),this.axios.post(this.$urls.storeSettingsCategoriesSort,{sort:e.children.map(c=>({id:c.id,parentId:c.parentId}))})):this.$emit("update:selfDropped",!0),t.preventDefault()},dragEnter(t){t.dataTransfer.types.includes("category")&&t.target.classList.add("dragging")},dragLeave(t){t.target.classList.remove("dragging")},deleteItem(t){this.$snotify.confirm(t.children.length>0?this.$lang.app.deleteCatWithInnerConfirmMsg:this.$lang.app.deleteConfirmMsg,this.$lang.app.warning,{closeOnClick:!1,backdrop:.5,timeout:0,buttons:[{text:this.$lang.app.yes,action:e=>{this.axios.delete(this.$urls.storeSettingsCategory.replace(":storeId",this.$store.getters.store.id).replace(":categoryId",t.id)).then(l=>{this.$emit("update:categories",this.categories.filter(c=>c.id!==l.data.id)),this.$snotify.remove(e.id),this.$snotify.success(this.$lang.app.deleteSuccessMsg)})},bold:!0},{text:this.$lang.app.no,action:e=>this.$snotify.remove(e.id)}]})}}},_withScopeId$1=t=>(pushScopeId("data-v-9ff0382a"),t=t(),popScopeId(),t),_hoisted_1$7={class:"position-relative"},_hoisted_2$7=["data-category-id","onDrop"],_hoisted_3$7={class:"input-group input-group-el"},_hoisted_4$4={class:"input-group-prepend"},_hoisted_5$4=["onClick","onDragenter"],_hoisted_6$3={key:0,class:"la la-angle-down"},_hoisted_7$3={key:1,class:"la la-angle-right"},_hoisted_8$2=["onDrop","data-category-id","onDragstart"],_hoisted_9$1=_withScopeId$1(()=>createBaseVNode("i",{class:"la la-arrows-alt"},null,-1)),_hoisted_10$1={class:"input-group-append"},_hoisted_11$1=["onClick","title"],_hoisted_12$1=_withScopeId$1(()=>createBaseVNode("i",{class:"la la-plus"},null,-1)),_hoisted_13$1=[_hoisted_12$1],_hoisted_14$1=["onClick","title"],_hoisted_15=_withScopeId$1(()=>createBaseVNode("i",{class:"la la-pencil"},null,-1)),_hoisted_16=[_hoisted_15],_hoisted_17=["onClick","title"],_hoisted_18=_withScopeId$1(()=>createBaseVNode("i",{class:"la la-list"},null,-1)),_hoisted_19=[_hoisted_18],_hoisted_20=["onClick","title"],_hoisted_21=_withScopeId$1(()=>createBaseVNode("i",{class:"la la-trash"},null,-1)),_hoisted_22=[_hoisted_21],_hoisted_23={key:0,class:"child"};function _sfc_render$7(t,e,l,c,n,i){const s=resolveComponent("store-category-tree",!0);return openBlock(),createElementBlock("div",_hoisted_1$7,[(openBlock(!0),createElementBlock(Fragment,null,renderList(l.categories,(o,a)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["position-relative",{"child-el":o.parentId}])},[createBaseVNode("div",{class:"w-100 p-2","data-category-id":o.id,onDrop:withModifiers(g=>i.drop(g,a,o.parentId),["prevent"]),onDragover:e[0]||(e[0]=withModifiers(()=>{},["prevent"])),onDragenter:e[1]||(e[1]=(...g)=>i.dragEnter&&i.dragEnter(...g)),onDragleave:e[2]||(e[2]=(...g)=>i.dragLeave&&i.dragLeave(...g))},null,40,_hoisted_2$7),createBaseVNode("div",_hoisted_3$7,[createBaseVNode("div",_hoisted_4$4,[o.children.length>0?(openBlock(),createElementBlock("button",{key:0,onClick:g=>o.open=!o.open,onDragenter:g=>g.dataTransfer.types.includes("category-id-"+o.id)?null:o.open=!0,class:"btn btn-arrow btn-light",type:"button"},[o.open?(openBlock(),createElementBlock("i",_hoisted_6$3)):(openBlock(),createElementBlock("i",_hoisted_7$3))],40,_hoisted_5$4)):createCommentVNode("",!0)]),createBaseVNode("button",{type:"button",onDrop:withModifiers(g=>i.innerDrop(g,o),["prevent"]),onDragover:e[3]||(e[3]=withModifiers(()=>{},["prevent"])),"data-category-id":o.id,onDragstart:g=>{o.open=!1,i.dragStart(g,o)},onDragend:e[4]||(e[4]=withModifiers(g=>i.dragEnd(g),["prevent"])),draggable:"true",class:"btn form-control-plaintext btn-light text-left"},[_hoisted_9$1,createTextVNode(" "+toDisplayString(o.name),1)],40,_hoisted_8$2),createBaseVNode("div",_hoisted_10$1,[createBaseVNode("button",{onClick:g=>l.showActionModal(o),title:t.$lang.app.add,class:"btn btn-arrow btn-light",type:"button"},_hoisted_13$1,8,_hoisted_11$1),createBaseVNode("button",{onClick:g=>l.showActionModal(l.parent,o),title:t.$lang.app.edit,class:"btn btn-arrow btn-light",type:"button"},_hoisted_16,8,_hoisted_14$1),createBaseVNode("button",{onClick:g=>l.showFieldsModal(o),title:t.$lang.app.fields,class:"btn btn-arrow btn-light",type:"button"},_hoisted_19,8,_hoisted_17),createBaseVNode("button",{onClick:g=>i.deleteItem(o),title:t.$lang.app.delete,class:"btn btn-arrow btn-light",type:"button"},_hoisted_22,8,_hoisted_20)])]),o.children.length>0&&o.open?(openBlock(),createElementBlock("div",_hoisted_23,[createVNode(s,{categories:o.children,"onUpdate:categories":g=>o.children=g,"show-action-modal":l.showActionModal,"show-fields-modal":l.showFieldsModal,"self-dropped":l.selfDropped,"onUpdate:self-dropped":e[5]||(e[5]=g=>l.selfDropped=g),dragging:l.dragging,"onUpdate:dragging":e[6]||(e[6]=g=>l.dragging=g),parent:o},null,8,["categories","onUpdate:categories","show-action-modal","show-fields-modal","self-dropped","dragging","parent"])])):createCommentVNode("",!0)],2))),256)),l.dragging?(openBlock(),createElementBlock("div",{key:0,class:"w-100 p-2",onDrop:e[7]||(e[7]=withModifiers(o=>i.drop(o,l.categories.length),["prevent"])),onDragover:e[8]||(e[8]=withModifiers(()=>{},["prevent"])),onDragenter:e[9]||(e[9]=(...o)=>i.dragEnter&&i.dragEnter(...o)),onDragleave:e[10]||(e[10]=(...o)=>i.dragLeave&&i.dragLeave(...o))},null,32)):createCommentVNode("",!0)])}var StoreCategoryTree=_export_sfc(_sfc_main$8,[["render",_sfc_render$7],["__scopeId","data-v-9ff0382a"]]),CategoriesTree_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$7={name:"CategoriesTree",props:{modelValue:Object,categories:Array,parentId:[Number,String],close:Function},data(){return{category:this.modelValue}},watch:{modelValue(t){this.category=t},category(t){this.$emit("update:modelValue",t)}},methods:{selectCategory(t){this.category=t,this.close()}}},_hoisted_1$6={class:"input-group input-group-el"},_hoisted_2$6={class:"input-group-prepend"},_hoisted_3$6=["onClick"],_hoisted_4$3={key:0,class:"la la-angle-down"},_hoisted_5$3={key:1,class:"la la-angle-right"},_hoisted_6$2=["onClick"],_hoisted_7$2={key:0,class:"child"};function _sfc_render$6(t,e,l,c,n,i){const s=resolveComponent("categories-tree",!0);return openBlock(!0),createElementBlock(Fragment,null,renderList(l.categories,(o,a)=>(openBlock(),createElementBlock("div",{key:a,class:normalizeClass(["position-relative pt-1",{"child-el":l.parentId}])},[createBaseVNode("div",_hoisted_1$6,[createBaseVNode("div",_hoisted_2$6,[o.children.length>0?(openBlock(),createElementBlock("button",{key:0,onClick:g=>o.open=!o.open,class:"btn btn-arrow btn-light",type:"button"},[o.open?(openBlock(),createElementBlock("i",_hoisted_4$3)):(openBlock(),createElementBlock("i",_hoisted_5$3))],8,_hoisted_3$6)):createCommentVNode("",!0)]),createBaseVNode("button",{onClick:g=>i.selectCategory(o),type:"button",class:"btn form-control-plaintext btn-light text-left"},toDisplayString(o.name),9,_hoisted_6$2)]),o.children.length>0&&o.open?(openBlock(),createElementBlock("div",_hoisted_7$2,[createVNode(s,{categories:o.children,"onUpdate:categories":g=>o.children=g,modelValue:n.category,"onUpdate:modelValue":e[0]||(e[0]=g=>n.category=g),"parent-id":o.id,close:l.close},null,8,["categories","onUpdate:categories","modelValue","parent-id","close"])])):createCommentVNode("",!0)],2))),128)}var CategoriesTree=_export_sfc(_sfc_main$7,[["render",_sfc_render$6],["__scopeId","data-v-48cc99a0"]]);const _sfc_main$6={name:"CategorySelectModal",components:{CategoriesTree,Modal},props:{category:Object,modelValue:Boolean},emits:["update:category","update:modelValue"],computed:{categoriesTree(){return this.$store.getters.categoriesTree}},data(){return{modals:{categoriesTree:this.modelValue},cat:this.category}},watch:{modelValue(t){this.modals.categoriesTree=t},"modals.categoriesTree"(t){this.$emit("update:modelValue",t)},category(t){this.cat=t},cat(t){this.$emit("update:category",t)}},methods:{close(){this.modals.categoriesTree=!1}}};function _sfc_render$5(t,e,l,c,n,i){const s=resolveComponent("categories-tree"),o=resolveComponent("modal");return openBlock(),createBlock(o,{modelValue:n.modals.categoriesTree,"onUpdate:modelValue":e[1]||(e[1]=a=>n.modals.categoriesTree=a),"modal-title":t.$lang.app.selectCategory,"disable-backdrop-close":""},{default:withCtx(()=>[createVNode(s,{modelValue:n.cat,"onUpdate:modelValue":e[0]||(e[0]=a=>n.cat=a),categories:i.categoriesTree,close:i.close},null,8,["modelValue","categories","close"])]),_:1},8,["modelValue","modal-title"])}var CategorySelectModal=_export_sfc(_sfc_main$6,[["render",_sfc_render$5]]);const _sfc_main$5={name:"CategorySelect",components:{CategorySelectModal},props:{modelValue:[Number,String],matchCategory:Object},data(){return{modals:{categoriesTree:!1},category:this.matchCategory||{},categoryId:this.modelValue}},watch:{category(t){this.$emit("update:modelValue",t.id)},matchCategory(t){this.category=t}}},_hoisted_1$5={class:"input-group"},_hoisted_2$5=["value"],_hoisted_3$5={class:"input-group-append"};function _sfc_render$4(t,e,l,c,n,i){const s=resolveComponent("category-select-modal");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("div",_hoisted_1$5,[createBaseVNode("input",{value:n.category.name,type:"text",class:"form-control",readonly:""},null,8,_hoisted_2$5),createBaseVNode("div",_hoisted_3$5,[createBaseVNode("button",{onClick:e[0]||(e[0]=o=>n.modals.categoriesTree=!0),type:"button",class:"btn btn-secondary"},toDisplayString(t.$lang.app.select),1)])]),createVNode(s,{modelValue:n.modals.categoriesTree,"onUpdate:modelValue":e[1]||(e[1]=o=>n.modals.categoriesTree=o),category:n.category,"onUpdate:category":e[2]||(e[2]=o=>n.category=o)},null,8,["modelValue","category"])],64)}var CategorySelect=_export_sfc(_sfc_main$5,[["render",_sfc_render$4]]),vueSelect={exports:{}},require$$0=getAugmentedNamespace(vue_runtime_esmBundler);(function(module,exports){(function(t,e){module.exports=e(require$$0)})(typeof self!="undefined"?self:commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE__0__){return function(t){var e={};function l(c){if(e[c])return e[c].exports;var n=e[c]={i:c,l:!1,exports:{}};return t[c].call(n.exports,n,n.exports,l),n.l=!0,n.exports}return l.m=t,l.c=e,l.d=function(c,n,i){l.o(c,n)||Object.defineProperty(c,n,{enumerable:!0,get:i})},l.r=function(c){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},l.t=function(c,n){if(1&n&&(c=l(c)),8&n||4&n&&typeof c=="object"&&c&&c.__esModule)return c;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:c}),2&n&&typeof c!="string")for(var s in c)l.d(i,s,function(o){return c[o]}.bind(null,s));return i},l.n=function(c){var n=c&&c.__esModule?function(){return c.default}:function(){return c};return l.d(n,"a",n),n},l.o=function(c,n){return Object.prototype.hasOwnProperty.call(c,n)},l.p="/",l(l.s=11)}([function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE__0__;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC9leHRlcm5hbCB7XCJyb290XCI6XCJWdWVcIixcImNvbW1vbmpzXCI6XCJ2dWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJhbWRcIjpcInZ1ZVwifT9kNzdiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///0
`)},function(module,exports){eval(`function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcz83MDM3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///1
`)},function(module,exports,__webpack_require__){eval(`var arrayWithoutHoles = __webpack_require__(6);

var iterableToArray = __webpack_require__(7);

var unsupportedIterableToArray = __webpack_require__(8);

var nonIterableSpread = __webpack_require__(9);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzPzQ0OGEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///2
`)},function(module,exports){eval(`function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzPzk1MjMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///3
`)},function(module,exports){eval(`function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanM/NWE0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///4
`)},function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC8uL3NyYy9jb21wb25lbnRzL1NlbGVjdC52dWU/N2ZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///5
`)},function(module,exports,__webpack_require__){eval(`var arrayLikeToArray = __webpack_require__(4);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzPzIyMzYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///6
`)},function(module,exports){eval(`function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcz8xMWIwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///7
`)},function(module,exports,__webpack_require__){eval(`var arrayLikeToArray = __webpack_require__(4);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzPzY2MTMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///8
`)},function(module,exports){eval(`function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Z1ZVNlbGVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzPzA2NzYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///9
`)},function(module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_8_0_Select_vue_vue_type_style_index_0_id_38e56f70_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_8_0_Select_vue_vue_type_style_index_0_id_38e56f70_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ref_8_0_Select_vue_vue_type_style_index_0_id_38e56f70_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9WdWVTZWxlY3QvLi9zcmMvY29tcG9uZW50cy9TZWxlY3QudnVlPzZjNjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tOC0wIS4vU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4ZTU2ZjcwJmxhbmc9c2Nzc1wiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///10
`)},function(module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueSelect", function() { return /* reexport */ Select; });
__webpack_require__.d(__webpack_exports__, "mixins", function() { return /* reexport */ mixins; });

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--8-0!./src/components/Select.vue?vue&type=template&id=38e56f70


const _hoisted_1 = {
  class: "vs__selected-options",
  ref: "selectedOptions"
}
const _hoisted_2 = {
  class: "vs__actions",
  ref: "actions"
}
const _hoisted_3 = { class: "vs__spinner" }
const _hoisted_4 = {
  key: 0,
  class: "vs__no-options"
}
const _hoisted_5 = /*#__PURE__*/Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])("Sorry, no matching options.")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_append_to_body = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveDirective"])("append-to-body")

  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", {
    dir: $props.dir,
    class: ["v-select", $options.stateClasses]
  }, [
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "header", $options.scope.header),
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
      id: \`vs\${$data.uid}__combobox\`,
      ref: "toggle",
      onMousedown: _cache[2] || (_cache[2] = $event => ($options.toggleDropdown($event))),
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": $options.dropdownOpen.toString(),
      "aria-owns": \`vs\${$data.uid}__listbox\`,
      "aria-label": "Search for option"
    }, [
      Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_1, [
        (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($options.selectedValue, (option) => {
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "selected-option-container", {
            option: $options.normalizeOptionForSlot(option),
            deselect: $options.deselect,
            multiple: $props.multiple,
            disabled: $props.disabled
          }, () => [
            (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("span", {
              key: $props.getOptionKey(option),
              class: "vs__selected"
            }, [
              Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "selected-option", $options.normalizeOptionForSlot(option), () => [
                Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($props.getOptionLabel(option)), 1)
              ]),
              ($props.multiple)
                ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("button", {
                    key: 0,
                    disabled: $props.disabled,
                    onClick: $event => ($options.deselect(option)),
                    type: "button",
                    class: "vs__deselect",
                    title: \`Deselect \${$props.getOptionLabel(option)}\`,
                    "aria-label": \`Deselect \${$props.getOptionLabel(option)}\`,
                    ref: "deselectButtons"
                  }, [
                    (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveDynamicComponent"])($options.childComponents.Deselect)))
                  ], 8, ["disabled", "onClick", "title", "aria-label"]))
                : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("", true)
            ]))
          ])
        }), 256)),
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "search", $options.scope.search, () => [
          Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("input", Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])({ class: "vs__search" }, $options.scope.search.attributes, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toHandlers"])($options.scope.search.events)), null, 16)
        ])
      ], 512),
      Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_2, [
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("button", {
          disabled: $props.disabled,
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.clearSelection && $options.clearSelection(...args))),
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          ref: "clearButton"
        }, [
          (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveDynamicComponent"])($options.childComponents.Deselect)))
        ], 8, ["disabled"]), [
          [external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], $options.showClearButton]
        ]),
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "open-indicator", $options.scope.openIndicator, () => [
          (!$props.noDrop)
            ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveDynamicComponent"])($options.childComponents.OpenIndicator), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])({ key: 0 }, $options.scope.openIndicator.attributes), null, 16))
            : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("", true)
        ]),
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "spinner", $options.scope.spinner, () => [
          Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_3, "Loading...", 512), [
            [external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], _ctx.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, ["id", "aria-expanded", "aria-owns"]),
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Transition"], { name: $props.transition }, {
      default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
        ($options.dropdownOpen)
          ? Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])((Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("ul", {
              ref: "dropdownMenu",
              id: \`vs\${$data.uid}__listbox\`,
              key: \`vs\${$data.uid}__listbox\`,
              class: "vs__dropdown-menu",
              role: "listbox",
              onMousedown: _cache[3] || (_cache[3] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])((...args) => ($options.onMousedown && $options.onMousedown(...args)), ["prevent"])),
              onMouseup: _cache[4] || (_cache[4] = (...args) => ($options.onMouseUp && $options.onMouseUp(...args))),
              tabindex: "-1"
            }, [
              Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "list-header", $options.scope.listHeader),
              (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($options.filteredOptions, (option, index) => {
                return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", {
                  role: "option",
                  key: $props.getOptionKey(option),
                  id: \`vs\${$data.uid}__option-\${index}\`,
                  class: ["vs__dropdown-option", { 'vs__dropdown-option--selected': $options.isOptionSelected(option), 'vs__dropdown-option--highlight': index === _ctx.typeAheadPointer, 'vs__dropdown-option--disabled': !$props.selectable(option) }],
                  "aria-selected": index === _ctx.typeAheadPointer ? true : null,
                  onMouseover: $event => ($props.selectable(option) ? _ctx.typeAheadPointer = index : null),
                  onMousedown: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])($event => ($props.selectable(option) ? $options.select(option) : null), ["prevent","stop"])
                }, [
                  Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "option", $options.normalizeOptionForSlot(option), () => [
                    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($props.getOptionLabel(option)), 1)
                  ])
                ], 42, ["id", "aria-selected", "onMouseover", "onMousedown"]))
              }), 128)),
              ($options.filteredOptions.length === 0)
                ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", _hoisted_4, [
                    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "no-options", $options.scope.noOptions, () => [
                      _hoisted_5
                    ])
                  ]))
                : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("", true),
              Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "list-footer", $options.scope.listFooter)
            ], 40, ["id"])), [
              [_directive_append_to_body]
            ])
          : (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("ul", {
              key: 1,
              id: \`vs\${$data.uid}__listbox\`,
              role: "listbox",
              style: {"display":"none","visibility":"hidden"}
            }, null, 8, ["id"]))
      ]),
      _: 3
    }, 8, ["name"]),
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "footer", $options.scope.footer)
  ], 10, ["dir"]))
}
// CONCATENATED MODULE: ./src/components/Select.vue?vue&type=template&id=38e56f70

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(1);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/mixins/pointerScroll.js
/* harmony default export */ var pointerScroll = ({
  props: {
    autoscroll: {
      type: Boolean,
      "default": true
    }
  },
  watch: {
    typeAheadPointer: function typeAheadPointer() {
      if (this.autoscroll) {
        this.maybeAdjustScroll();
      }
    }
  },
  methods: {
    maybeAdjustScroll: function maybeAdjustScroll() {
      var _this$$refs$dropdownM;

      var optionEl = ((_this$$refs$dropdownM = this.$refs.dropdownMenu) === null || _this$$refs$dropdownM === void 0 ? void 0 : _this$$refs$dropdownM.children[this.typeAheadPointer]) || false;

      if (optionEl) {
        var bounds = this.getDropdownViewport();

        var _optionEl$getBounding = optionEl.getBoundingClientRect(),
            top = _optionEl$getBounding.top,
            bottom = _optionEl$getBounding.bottom,
            height = _optionEl$getBounding.height;

        if (top < bounds.top) {
          return this.$refs.dropdownMenu.scrollTop = optionEl.offsetTop;
        } else if (bottom > bounds.bottom) {
          return this.$refs.dropdownMenu.scrollTop = optionEl.offsetTop - (bounds.height - height);
        }
      }
    },
    getDropdownViewport: function getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/typeAheadPointer.js
/* harmony default export */ var typeAheadPointer = ({
  data: function data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions: function filteredOptions() {
      for (var i = 0; i < this.filteredOptions.length; i++) {
        if (this.selectable(this.filteredOptions[i])) {
          this.typeAheadPointer = i;
          break;
        }
      }
    }
  },
  methods: {
    typeAheadUp: function typeAheadUp() {
      for (var i = this.typeAheadPointer - 1; i >= 0; i--) {
        if (this.selectable(this.filteredOptions[i])) {
          this.typeAheadPointer = i;
          break;
        }
      }
    },
    typeAheadDown: function typeAheadDown() {
      for (var i = this.typeAheadPointer + 1; i < this.filteredOptions.length; i++) {
        if (this.selectable(this.filteredOptions[i])) {
          this.typeAheadPointer = i;
          break;
        }
      }
    },
    typeAheadSelect: function typeAheadSelect() {
      var typeAheadOption = this.filteredOptions[this.typeAheadPointer];

      if (typeAheadOption) {
        this.select(typeAheadOption);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/ajax.js
/* harmony default export */ var ajax = ({
  props: {
    loading: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      mutableLoading: false
    };
  },
  watch: {
    search: function search() {
      this.$emit('search', this.search, this.toggleLoading);
    },
    loading: function loading(val) {
      this.mutableLoading = val;
    }
  },
  methods: {
    toggleLoading: function toggleLoading() {
      var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (toggle == null) {
        return this.mutableLoading = !this.mutableLoading;
      }

      return this.mutableLoading = toggle;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--8-0!./src/components/Deselect.vue?vue&type=template&id=67aade45


const Deselectvue_type_template_id_67aade45_hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}
const Deselectvue_type_template_id_67aade45_hoisted_2 = /*#__PURE__*/Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1)

function Deselectvue_type_template_id_67aade45_render(_ctx, _cache) {
  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("svg", Deselectvue_type_template_id_67aade45_hoisted_1, [
    Deselectvue_type_template_id_67aade45_hoisted_2
  ]))
}
// CONCATENATED MODULE: ./src/components/Deselect.vue?vue&type=template&id=67aade45

// CONCATENATED MODULE: ./src/components/Deselect.vue

const script = {}
script.render = Deselectvue_type_template_id_67aade45_render

/* harmony default export */ var Deselect = (script);
// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--8-0!./src/components/OpenIndicator.vue?vue&type=template&id=1b64a39d


const OpenIndicatorvue_type_template_id_1b64a39d_hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}
const OpenIndicatorvue_type_template_id_1b64a39d_hoisted_2 = /*#__PURE__*/Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1)

function OpenIndicatorvue_type_template_id_1b64a39d_render(_ctx, _cache) {
  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("svg", OpenIndicatorvue_type_template_id_1b64a39d_hoisted_1, [
    OpenIndicatorvue_type_template_id_1b64a39d_hoisted_2
  ]))
}
// CONCATENATED MODULE: ./src/components/OpenIndicator.vue?vue&type=template&id=1b64a39d

// CONCATENATED MODULE: ./src/components/OpenIndicator.vue

const OpenIndicator_script = {}
OpenIndicator_script.render = OpenIndicatorvue_type_template_id_1b64a39d_render

/* harmony default export */ var OpenIndicator = (OpenIndicator_script);
// CONCATENATED MODULE: ./src/components/childComponents.js


/* harmony default export */ var components_childComponents = ({
  Deselect: Deselect,
  OpenIndicator: OpenIndicator
});
// CONCATENATED MODULE: ./src/directives/appendToBody.js
/* harmony default export */ var appendToBody = ({
  inserted: function inserted(el, bindings, _ref) {
    var context = _ref.context;

    if (context.appendToBody) {
      var _context$$refs$toggle = context.$refs.toggle.getBoundingClientRect(),
          height = _context$$refs$toggle.height,
          top = _context$$refs$toggle.top,
          left = _context$$refs$toggle.left,
          width = _context$$refs$toggle.width;

      var scrollX = window.scrollX || window.pageXOffset;
      var scrollY = window.scrollY || window.pageYOffset;
      el.unbindPosition = context.calculatePosition(el, context, {
        width: width + 'px',
        left: scrollX + left + 'px',
        top: scrollY + top + height + 'px'
      });
      document.body.appendChild(el);
    }
  },
  unbind: function unbind(el, bindings, _ref2) {
    var context = _ref2.context;

    if (context.appendToBody) {
      if (el.unbindPosition && typeof el.unbindPosition === 'function') {
        el.unbindPosition();
      }

      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/utility/sortAndStringify.js
function sortAndStringify(sortable) {
  var ordered = {};
  Object.keys(sortable).sort().forEach(function (key) {
    ordered[key] = sortable[key];
  });
  return JSON.stringify(ordered);
}

/* harmony default export */ var utility_sortAndStringify = (sortAndStringify);
// CONCATENATED MODULE: ./src/utility/uniqueId.js
var idCount = 0;

function uniqueId() {
  return ++idCount;
}

/* harmony default export */ var utility_uniqueId = (uniqueId);
// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
/* harmony default export */ var mitt_es = (function(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i&&i.push(e)||n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&i.splice(i.indexOf(e)>>>0,1)},emit:function(t,e){(n.get(t)||[]).slice().map(function(n){n(e)}),(n.get("*")||[]).slice().map(function(n){n(t,e)})}}});
//# sourceMappingURL=mitt.es.js.map

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--8-0!./src/components/Select.vue?vue&type=script&lang=js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* harmony default export */ var Selectvue_type_script_lang_js = ({
  components: _objectSpread({}, components_childComponents),
  mixins: [pointerScroll, typeAheadPointer, ajax],
  directives: {
    appendToBody: appendToBody
  },
  props: {
    modelValue: {},
    components: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    clearable: {
      type: Boolean,
      "default": true
    },
    searchable: {
      type: Boolean,
      "default": true
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": ''
    },
    transition: {
      type: String,
      "default": 'vs__fade'
    },
    clearSearchOnSelect: {
      type: Boolean,
      "default": true
    },
    closeOnSelect: {
      type: Boolean,
      "default": true
    },
    label: {
      type: String,
      "default": 'label'
    },
    autocomplete: {
      type: String,
      "default": 'off'
    },
    reduce: {
      type: Function,
      "default": function _default(option) {
        return option;
      }
    },
    selectable: {
      type: Function,
      "default": function _default(option) {
        return true;
      }
    },
    getOptionLabel: {
      type: Function,
      "default": function _default(option) {
        if (typeof_default()(option) === 'object') {
          if (!option.hasOwnProperty(this.label)) {
            return console.warn("[vue-select warn]: Label key \\"option.".concat(this.label, "\\" does not") + " exist in options object ".concat(JSON.stringify(option), ".\\n") + 'https://vue-select.org/api/props.html#getoptionlabel');
          }

          return option[this.label];
        }

        return option;
      }
    },
    getOptionKey: {
      type: Function,
      "default": function _default(option) {
        if (typeof_default()(option) !== 'object') {
          return option;
        }

        try {
          return option.hasOwnProperty('id') ? option.id : utility_sortAndStringify(option);
        } catch (e) {
          var warning = "[vue-select warn]: Could not stringify this option " + "to generate unique key. Please provide'getOptionKey' prop " + "to return a unique key for each option.\\n" + 'https://vue-select.org/api/props.html#getoptionkey';
          return console.warn(warning, option, e);
        }
      }
    },
    onTab: {
      type: Function,
      "default": function _default() {
        if (this.selectOnTab && !this.isComposing) {
          this.typeAheadSelect();
        }
      }
    },
    taggable: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": null
    },
    pushTags: {
      type: Boolean,
      "default": false
    },
    filterable: {
      type: Boolean,
      "default": true
    },
    filterBy: {
      type: Function,
      "default": function _default(option, label, search) {
        return (label || '').toLowerCase().indexOf(search.toLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      "default": function _default(options, search) {
        var _this = this;

        return options.filter(function (option) {
          var label = _this.getOptionLabel(option);

          if (typeof label === 'number') {
            label = label.toString();
          }

          return _this.filterBy(option, label, search);
        });
      }
    },
    createOption: {
      type: Function,
      "default": function _default(option) {
        return typeof_default()(this.optionList[0]) === 'object' ? defineProperty_default()({}, this.label, option) : option;
      }
    },
    resetOnOptionsChange: {
      "default": false,
      validator: function validator(value) {
        return ['function', 'boolean'].includes(typeof_default()(value));
      }
    },
    clearSearchOnBlur: {
      type: Function,
      "default": function _default(_ref2) {
        var clearSearchOnSelect = _ref2.clearSearchOnSelect,
            multiple = _ref2.multiple;
        return clearSearchOnSelect && !multiple;
      }
    },
    noDrop: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      "default": 'auto'
    },
    selectOnTab: {
      type: Boolean,
      "default": false
    },
    selectOnKeyCodes: {
      type: Array,
      "default": function _default() {
        return [13];
      }
    },
    searchInputQuerySelector: {
      type: String,
      "default": '[type=search]'
    },
    mapKeydown: {
      type: Function,
      "default": function _default(map, vm) {
        return map;
      }
    },
    appendToBody: {
      type: Boolean,
      "default": false
    },
    calculatePosition: {
      type: Function,
      "default": function _default(dropdownList, component, _ref3) {
        var width = _ref3.width,
            top = _ref3.top,
            left = _ref3.left;
        dropdownList.style.top = top;
        dropdownList.style.left = left;
        dropdownList.style.width = width;
      }
    }
  },
  data: function data() {
    return {
      uid: utility_uniqueId(),
      search: '',
      open: false,
      isComposing: false,
      pushedTags: [],
      _value: []
    };
  },
  watch: {
    options: function options(newOptions, oldOptions) {
      var _this2 = this;

      var shouldReset = function shouldReset() {
        return typeof _this2.resetOnOptionsChange === 'function' ? _this2.resetOnOptionsChange(newOptions, oldOptions, _this2.selectedValue) : _this2.resetOnOptionsChange;
      };

      if (!this.taggable && shouldReset()) {
        this.clearSelection();
      }

      if (this.modelValue && this.isTrackingValues) {
        this.setInternalValueFromOptions(this.modelValue);
      }
    },
    modelValue: function modelValue(val) {
      if (this.isTrackingValues) {
        this.setInternalValueFromOptions(val);
      }
    },
    multiple: function multiple() {
      this.clearSelection();
    },
    open: function open(isOpen) {
      this.$emit(isOpen ? 'open' : 'close');
    }
  },
  created: function created() {
    this.mutableLoading = this.loading;

    if (typeof this.modelValue !== "undefined" && this.isTrackingValues) {
      this.setInternalValueFromOptions(this.modelValue);
    }

    var emitter = mitt_es();
    emitter.on('option:created', this.pushTag);
  },
  methods: {
    setInternalValueFromOptions: function setInternalValueFromOptions(value) {
      var _this3 = this;

      if (Array.isArray(value)) {
        this.$data._value = value.map(function (val) {
          return _this3.findOptionFromReducedValue(val);
        });
      } else {
        this.$data._value = this.findOptionFromReducedValue(value);
      }
    },
    select: function select(option) {
      this.$emit('option:selecting', option);

      if (!this.isOptionSelected(option)) {
        if (this.taggable && !this.optionExists(option)) {
          this.$emit('option:created', option);
        }

        if (this.multiple) {
          option = this.selectedValue.concat(option);
        }

        this.updateValue(option);
        this.$emit('option:selected', option);
      }

      this.onAfterSelect(option);
    },
    deselect: function deselect(option) {
      var _this4 = this;

      this.$emit('option:deselecting', option);
      this.updateValue(this.selectedValue.filter(function (val) {
        return !_this4.optionComparator(val, option);
      }));
      this.$emit('option:deselected', option);
    },
    clearSelection: function clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect: function onAfterSelect(option) {
      if (this.closeOnSelect) {
        this.open = !this.open;
        this.searchEl.blur();
      }

      if (this.clearSearchOnSelect) {
        this.search = '';
      }
    },
    updateValue: function updateValue(value) {
      var _this5 = this;

      if (typeof this.value === 'undefined') {
        this.$data._value = value;
      }

      if (value !== null) {
        if (Array.isArray(value)) {
          value = value.map(function (val) {
            return _this5.reduce(val);
          });
        } else {
          value = this.reduce(value);
        }
      }

      this.$emit('update:modelValue', value);
      this.$emit('input', value);
    },
    toggleDropdown: function toggleDropdown(event) {
      var targetIsNotSearch = event.target !== this.searchEl;

      if (targetIsNotSearch) {
        event.preventDefault();
      }

      var deselectButtons = this.$refs['deselectButtons'];
      var ignoredButtons = [].concat(toConsumableArray_default()(typeof_default()(deselectButtons) === 'object' ? [deselectButtons] : deselectButtons || []), toConsumableArray_default()([this.$refs['clearButton']] || false));

      if (this.searchEl === undefined || ignoredButtons.filter(Boolean).some(function (ref) {
        return ref.contains(event.target) || ref === event.target;
      })) {
        event.preventDefault();
        return;
      }

      if (this.open && targetIsNotSearch) {
        this.searchEl.blur();
      } else if (!this.disabled) {
        this.open = true;
        this.searchEl.focus();
      }
    },
    isOptionSelected: function isOptionSelected(option) {
      var _this6 = this;

      return this.selectedValue.some(function (value) {
        return _this6.optionComparator(value, option);
      });
    },
    optionComparator: function optionComparator(a, b) {
      return this.getOptionKey(a) === this.getOptionKey(b);
    },
    findOptionFromReducedValue: function findOptionFromReducedValue(value) {
      var _this7 = this;

      var predicate = function predicate(option) {
        return JSON.stringify(_this7.reduce(option)) === JSON.stringify(value);
      };

      var matches = [].concat(toConsumableArray_default()(this.options), toConsumableArray_default()(this.pushedTags)).filter(predicate);

      if (matches.length === 1) {
        return matches[0];
      }

      return matches.find(function (match) {
        return _this7.optionComparator(match, _this7.$data._value);
      }) || value;
    },
    closeSearchOptions: function closeSearchOptions() {
      this.open = false;
      this.$emit('search:blur');
    },
    maybeDeleteValue: function maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        var value = null;

        if (this.multiple) {
          value = toConsumableArray_default()(this.selectedValue.slice(0, this.selectedValue.length - 1));
        }

        this.updateValue(value);
      }
    },
    optionExists: function optionExists(option) {
      var _this8 = this;

      return this.optionList.some(function (_option) {
        return _this8.optionComparator(_option, option);
      });
    },
    normalizeOptionForSlot: function normalizeOptionForSlot(option) {
      return typeof_default()(option) === 'object' ? option : defineProperty_default()({}, this.label, option);
    },
    pushTag: function pushTag(option) {
      this.pushedTags.push(option);
    },
    onEscape: function onEscape() {
      if (!this.search.length) {
        this.searchEl.blur();
      } else {
        this.search = '';
      }
    },
    onSearchBlur: function onSearchBlur() {
      if (this.mousedown && !this.searching) {
        this.mousedown = false;
      } else {
        var clearSearchOnSelect = this.clearSearchOnSelect,
            multiple = this.multiple;

        if (this.clearSearchOnBlur({
          clearSearchOnSelect: clearSearchOnSelect,
          multiple: multiple
        })) {
          this.search = '';
        }

        this.closeSearchOptions();
        return;
      }

      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus: function onSearchFocus() {
      this.open = true;
      this.$emit('search:focus');
    },
    onMousedown: function onMousedown() {
      this.mousedown = true;
    },
    onMouseUp: function onMouseUp() {
      this.mousedown = false;
    },
    onSearchKeyDown: function onSearchKeyDown(e) {
      var _this9 = this;

      var preventAndSelect = function preventAndSelect(e) {
        e.preventDefault();
        return !_this9.isComposing && _this9.typeAheadSelect();
      };

      var defaults = {
        8: function _(e) {
          return _this9.maybeDeleteValue();
        },
        9: function _(e) {
          return _this9.onTab();
        },
        27: function _(e) {
          return _this9.onEscape();
        },
        38: function _(e) {
          e.preventDefault();
          return _this9.typeAheadUp();
        },
        40: function _(e) {
          e.preventDefault();
          return _this9.typeAheadDown();
        }
      };
      this.selectOnKeyCodes.forEach(function (keyCode) {
        return defaults[keyCode] = preventAndSelect;
      });
      var handlers = this.mapKeydown(defaults, this);

      if (typeof handlers[e.keyCode] === 'function') {
        return handlers[e.keyCode](e);
      }
    }
  },
  computed: {
    isTrackingValues: function isTrackingValues() {
      return typeof this.modelValue === 'undefined' || Object.prototype.hasOwnProperty.call(this.$options.props, 'reduce');
    },
    selectedValue: function selectedValue() {
      var value = this.modelValue;

      if (this.isTrackingValues) {
        value = this.$data._value;
      }

      if (value) {
        return [].concat(value);
      }

      return [];
    },
    optionList: function optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl: function searchEl() {
      return !!this.$slots['search'] ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope: function scope() {
      var _this10 = this;

      var listSlot = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: _objectSpread({
            'disabled': this.disabled,
            'placeholder': this.searchPlaceholder,
            'tabindex': this.tabindex,
            'readonly': !this.searchable,
            'id': this.inputId,
            'aria-autocomplete': 'list',
            'aria-labelledby': "vs".concat(this.uid, "__combobox"),
            'aria-controls': "vs".concat(this.uid, "__listbox"),
            'ref': 'search',
            'type': 'search',
            'autocomplete': this.autocomplete,
            'value': this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            'aria-activedescendant': "vs".concat(this.uid, "__option-").concat(this.typeAheadPointer)
          } : {}),
          events: {
            'compositionstart': function compositionstart() {
              return _this10.isComposing = true;
            },
            'compositionend': function compositionend() {
              return _this10.isComposing = false;
            },
            'keydown': this.onSearchKeyDown,
            'blur': this.onSearchBlur,
            'focus': this.onSearchFocus,
            'input': function input(e) {
              return _this10.search = e.target.value;
            }
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.loading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            'ref': 'openIndicator',
            'role': 'presentation',
            'class': 'vs__open-indicator'
          }
        },
        listHeader: listSlot,
        listFooter: listSlot,
        header: _objectSpread(_objectSpread({}, listSlot), {}, {
          deselect: this.deselect
        }),
        footer: _objectSpread(_objectSpread({}, listSlot), {}, {
          deselect: this.deselect
        })
      };
    },
    childComponents: function childComponents() {
      return _objectSpread(_objectSpread({}, components_childComponents), this.components);
    },
    stateClasses: function stateClasses() {
      return {
        'vs--open': this.dropdownOpen,
        'vs--single': !this.multiple,
        'vs--searching': this.searching && !this.noDrop,
        'vs--searchable': this.searchable && !this.noDrop,
        'vs--unsearchable': !this.searchable,
        'vs--loading': this.mutableLoading,
        'vs--disabled': this.disabled
      };
    },
    searching: function searching() {
      return !!this.search;
    },
    dropdownOpen: function dropdownOpen() {
      return this.noDrop ? false : this.open && !this.mutableLoading;
    },
    searchPlaceholder: function searchPlaceholder() {
      if (this.isValueEmpty && this.placeholder) {
        return this.placeholder;
      }
    },
    filteredOptions: function filteredOptions() {
      var optionList = [].concat(this.optionList);

      if (!this.filterable && !this.taggable) {
        return optionList;
      }

      var options = this.search.length ? this.filter(optionList, this.search, this) : optionList;

      if (this.taggable && this.search.length) {
        var createdOption = this.createOption(this.search);

        if (!this.optionExists(createdOption)) {
          options.unshift(createdOption);
        }
      }

      return options;
    },
    isValueEmpty: function isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton: function showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Select.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Select.vue?vue&type=style&index=0&id=38e56f70&lang=scss
var Selectvue_type_style_index_0_id_38e56f70_lang_scss = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/Select.vue





Selectvue_type_script_lang_js.render = render

/* harmony default export */ var Select = (Selectvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/mixins/index.js



/* harmony default export */ var mixins = ({
  ajax: ajax,
  pointer: typeAheadPointer,
  pointerScroll: pointerScroll
});
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src = __webpack_exports__["default"] = (Select);
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9WdWVTZWxlY3QvLi9zcmMvY29tcG9uZW50cy9TZWxlY3QudnVlP2QyNDciLCJ3ZWJwYWNrOi8vVnVlU2VsZWN0Ly4vc3JjL21peGlucy9wb2ludGVyU2Nyb2xsLmpzPzZjOWQiLCJ3ZWJwYWNrOi8vVnVlU2VsZWN0Ly4vc3JjL21peGlucy90eXBlQWhlYWRQb2ludGVyLmpzPzUwYzciLCJ3ZWJwYWNrOi8vVnVlU2VsZWN0Ly4vc3JjL21peGlucy9hamF4LmpzPzJkZmIiLCJ3ZWJwYWNrOi8vVnVlU2VsZWN0Ly4vc3JjL2NvbXBvbmVudHMvRGVzZWxlY3QudnVlPzI0YWMiLCJ3ZWJwYWNrOi8vVnVlU2VsZWN0Ly4vc3JjL2NvbXBvbmVudHMvRGVzZWxlY3QudnVlPzJlZjIiLCJ3ZWJwYWNrOi8vVnVlU2VsZWN0Ly4vc3JjL2NvbXBvbmVudHMvT3BlbkluZGljYXRvci52dWU/YTI0NSIsIndlYnBhY2s6Ly9WdWVTZWxlY3QvLi9zcmMvY29tcG9uZW50cy9PcGVuSW5kaWNhdG9yLnZ1ZT9mOGE0Iiwid2VicGFjazovL1Z1ZVNlbGVjdC8uL3NyYy9jb21wb25lbnRzL2NoaWxkQ29tcG9uZW50cy5qcz80ZTZhIiwid2VicGFjazovL1Z1ZVNlbGVjdC8uL3NyYy9kaXJlY3RpdmVzL2FwcGVuZFRvQm9keS5qcz82MDk4Iiwid2VicGFjazovL1Z1ZVNlbGVjdC8uL3NyYy91dGlsaXR5L3NvcnRBbmRTdHJpbmdpZnkuanM/YmI4YyIsIndlYnBhY2s6Ly9WdWVTZWxlY3QvLi9zcmMvdXRpbGl0eS91bmlxdWVJZC5qcz82MmI4Iiwid2VicGFjazovL1Z1ZVNlbGVjdC8uL25vZGVfbW9kdWxlcy9taXR0L2Rpc3QvbWl0dC5lcy5qcz8xNGI3Iiwid2VicGFjazovL1Z1ZVNlbGVjdC8uL3NyYy9jb21wb25lbnRzL1NlbGVjdC52dWU/NjUwZiIsIndlYnBhY2s6Ly9WdWVTZWxlY3QvLi9zcmMvY29tcG9uZW50cy9TZWxlY3QudnVlPzJlMjQiLCJ3ZWJwYWNrOi8vVnVlU2VsZWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VsZWN0LnZ1ZT8wNDU4Iiwid2VicGFjazovL1Z1ZVNlbGVjdC8uL3NyYy9taXhpbnMvaW5kZXguanM/YzllNyIsIndlYnBhY2s6Ly9WdWVTZWxlY3QvLi9zcmMvaW5kZXguanM/MzcwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQgYXMgX3Jlc29sdmVEeW5hbWljQ29tcG9uZW50LCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgdG9IYW5kbGVycyBhcyBfdG9IYW5kbGVycywgbWVyZ2VQcm9wcyBhcyBfbWVyZ2VQcm9wcywgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB2U2hvdyBhcyBfdlNob3csIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgd2l0aE1vZGlmaWVycyBhcyBfd2l0aE1vZGlmaWVycywgcmVzb2x2ZURpcmVjdGl2ZSBhcyBfcmVzb2x2ZURpcmVjdGl2ZSwgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgd2l0aEN0eCBhcyBfd2l0aEN0eCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0ge1xuICBjbGFzczogXCJ2c19fc2VsZWN0ZWQtb3B0aW9uc1wiLFxuICByZWY6IFwic2VsZWN0ZWRPcHRpb25zXCJcbn1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7XG4gIGNsYXNzOiBcInZzX19hY3Rpb25zXCIsXG4gIHJlZjogXCJhY3Rpb25zXCJcbn1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInZzX19zcGlubmVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfNCA9IHtcbiAga2V5OiAwLFxuICBjbGFzczogXCJ2c19fbm8tb3B0aW9uc1wiXG59XG5jb25zdCBfaG9pc3RlZF81ID0gLyojX19QVVJFX18qL19jcmVhdGVUZXh0Vk5vZGUoXCJTb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy5cIilcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgY29uc3QgX2RpcmVjdGl2ZV9hcHBlbmRfdG9fYm9keSA9IF9yZXNvbHZlRGlyZWN0aXZlKFwiYXBwZW5kLXRvLWJvZHlcIilcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKFwiZGl2XCIsIHtcbiAgICBkaXI6ICRwcm9wcy5kaXIsXG4gICAgY2xhc3M6IFtcInYtc2VsZWN0XCIsICRvcHRpb25zLnN0YXRlQ2xhc3Nlc11cbiAgfSwgW1xuICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImhlYWRlclwiLCAkb3B0aW9ucy5zY29wZS5oZWFkZXIpLFxuICAgIF9jcmVhdGVWTm9kZShcImRpdlwiLCB7XG4gICAgICBpZDogYHZzJHskZGF0YS51aWR9X19jb21ib2JveGAsXG4gICAgICByZWY6IFwidG9nZ2xlXCIsXG4gICAgICBvbk1vdXNlZG93bjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCRvcHRpb25zLnRvZ2dsZURyb3Bkb3duKCRldmVudCkpKSxcbiAgICAgIGNsYXNzOiBcInZzX19kcm9wZG93bi10b2dnbGVcIixcbiAgICAgIHJvbGU6IFwiY29tYm9ib3hcIixcbiAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiAkb3B0aW9ucy5kcm9wZG93bk9wZW4udG9TdHJpbmcoKSxcbiAgICAgIFwiYXJpYS1vd25zXCI6IGB2cyR7JGRhdGEudWlkfV9fbGlzdGJveGAsXG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWFyY2ggZm9yIG9wdGlvblwiXG4gICAgfSwgW1xuICAgICAgX2NyZWF0ZVZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRvcHRpb25zLnNlbGVjdGVkVmFsdWUsIChvcHRpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwic2VsZWN0ZWQtb3B0aW9uLWNvbnRhaW5lclwiLCB7XG4gICAgICAgICAgICBvcHRpb246ICRvcHRpb25zLm5vcm1hbGl6ZU9wdGlvbkZvclNsb3Qob3B0aW9uKSxcbiAgICAgICAgICAgIGRlc2VsZWN0OiAkb3B0aW9ucy5kZXNlbGVjdCxcbiAgICAgICAgICAgIG11bHRpcGxlOiAkcHJvcHMubXVsdGlwbGUsXG4gICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkXG4gICAgICAgICAgfSwgKCkgPT4gW1xuICAgICAgICAgICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIGtleTogJHByb3BzLmdldE9wdGlvbktleShvcHRpb24pLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2c19fc2VsZWN0ZWRcIlxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJzZWxlY3RlZC1vcHRpb25cIiwgJG9wdGlvbnMubm9ybWFsaXplT3B0aW9uRm9yU2xvdChvcHRpb24pLCAoKSA9PiBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5nZXRPcHRpb25MYWJlbChvcHRpb24pKSwgMSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICgkcHJvcHMubXVsdGlwbGUpXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJG9wdGlvbnMuZGVzZWxlY3Qob3B0aW9uKSksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInZzX19kZXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogYERlc2VsZWN0ICR7JHByb3BzLmdldE9wdGlvbkxhYmVsKG9wdGlvbil9YCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGBEZXNlbGVjdCAkeyRwcm9wcy5nZXRPcHRpb25MYWJlbChvcHRpb24pfWAsXG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJkZXNlbGVjdEJ1dHRvbnNcIlxuICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX3Jlc29sdmVEeW5hbWljQ29tcG9uZW50KCRvcHRpb25zLmNoaWxkQ29tcG9uZW50cy5EZXNlbGVjdCkpKVxuICAgICAgICAgICAgICAgICAgXSwgOCwgW1wiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCIsIFwidGl0bGVcIiwgXCJhcmlhLWxhYmVsXCJdKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJcIiwgdHJ1ZSlcbiAgICAgICAgICAgIF0pKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLCAyNTYpKSxcbiAgICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwic2VhcmNoXCIsICRvcHRpb25zLnNjb3BlLnNlYXJjaCwgKCkgPT4gW1xuICAgICAgICAgIF9jcmVhdGVWTm9kZShcImlucHV0XCIsIF9tZXJnZVByb3BzKHsgY2xhc3M6IFwidnNfX3NlYXJjaFwiIH0sICRvcHRpb25zLnNjb3BlLnNlYXJjaC5hdHRyaWJ1dGVzLCBfdG9IYW5kbGVycygkb3B0aW9ucy5zY29wZS5zZWFyY2guZXZlbnRzKSksIG51bGwsIDE2KVxuICAgICAgICBdKVxuICAgICAgXSwgNTEyKSxcbiAgICAgIF9jcmVhdGVWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlVk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgb25DbGljazogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAoLi4uYXJncykgPT4gKCRvcHRpb25zLmNsZWFyU2VsZWN0aW9uICYmICRvcHRpb25zLmNsZWFyU2VsZWN0aW9uKC4uLmFyZ3MpKSksXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBjbGFzczogXCJ2c19fY2xlYXJcIixcbiAgICAgICAgICB0aXRsZTogXCJDbGVhciBTZWxlY3RlZFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsZWFyIFNlbGVjdGVkXCIsXG4gICAgICAgICAgcmVmOiBcImNsZWFyQnV0dG9uXCJcbiAgICAgICAgfSwgW1xuICAgICAgICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQoJG9wdGlvbnMuY2hpbGRDb21wb25lbnRzLkRlc2VsZWN0KSkpXG4gICAgICAgIF0sIDgsIFtcImRpc2FibGVkXCJdKSwgW1xuICAgICAgICAgIFtfdlNob3csICRvcHRpb25zLnNob3dDbGVhckJ1dHRvbl1cbiAgICAgICAgXSksXG4gICAgICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcIm9wZW4taW5kaWNhdG9yXCIsICRvcHRpb25zLnNjb3BlLm9wZW5JbmRpY2F0b3IsICgpID0+IFtcbiAgICAgICAgICAoISRwcm9wcy5ub0Ryb3ApXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQoJG9wdGlvbnMuY2hpbGRDb21wb25lbnRzLk9wZW5JbmRpY2F0b3IpLCBfbWVyZ2VQcm9wcyh7IGtleTogMCB9LCAkb3B0aW9ucy5zY29wZS5vcGVuSW5kaWNhdG9yLmF0dHJpYnV0ZXMpLCBudWxsLCAxNikpXG4gICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJcIiwgdHJ1ZSlcbiAgICAgICAgXSksXG4gICAgICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcInNwaW5uZXJcIiwgJG9wdGlvbnMuc2NvcGUuc3Bpbm5lciwgKCkgPT4gW1xuICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlVk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgXCJMb2FkaW5nLi4uXCIsIDUxMiksIFtcbiAgICAgICAgICAgIFtfdlNob3csIF9jdHgubXV0YWJsZUxvYWRpbmddXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0sIDUxMilcbiAgICBdLCA0MCwgW1wiaWRcIiwgXCJhcmlhLWV4cGFuZGVkXCIsIFwiYXJpYS1vd25zXCJdKSxcbiAgICBfY3JlYXRlVk5vZGUoX1RyYW5zaXRpb24sIHsgbmFtZTogJHByb3BzLnRyYW5zaXRpb24gfSwge1xuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAoJG9wdGlvbnMuZHJvcGRvd25PcGVuKVxuICAgICAgICAgID8gX3dpdGhEaXJlY3RpdmVzKChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhcInVsXCIsIHtcbiAgICAgICAgICAgICAgcmVmOiBcImRyb3Bkb3duTWVudVwiLFxuICAgICAgICAgICAgICBpZDogYHZzJHskZGF0YS51aWR9X19saXN0Ym94YCxcbiAgICAgICAgICAgICAga2V5OiBgdnMkeyRkYXRhLnVpZH1fX2xpc3Rib3hgLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2c19fZHJvcGRvd24tbWVudVwiLFxuICAgICAgICAgICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgICAgICAgICAgb25Nb3VzZWRvd246IF9jYWNoZVszXSB8fCAoX2NhY2hlWzNdID0gX3dpdGhNb2RpZmllcnMoKC4uLmFyZ3MpID0+ICgkb3B0aW9ucy5vbk1vdXNlZG93biAmJiAkb3B0aW9ucy5vbk1vdXNlZG93biguLi5hcmdzKSksIFtcInByZXZlbnRcIl0pKSxcbiAgICAgICAgICAgICAgb25Nb3VzZXVwOiBfY2FjaGVbNF0gfHwgKF9jYWNoZVs0XSA9ICguLi5hcmdzKSA9PiAoJG9wdGlvbnMub25Nb3VzZVVwICYmICRvcHRpb25zLm9uTW91c2VVcCguLi5hcmdzKSkpLFxuICAgICAgICAgICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImxpc3QtaGVhZGVyXCIsICRvcHRpb25zLnNjb3BlLmxpc3RIZWFkZXIpLFxuICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJG9wdGlvbnMuZmlsdGVyZWRPcHRpb25zLCAob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soXCJsaVwiLCB7XG4gICAgICAgICAgICAgICAgICByb2xlOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAga2V5OiAkcHJvcHMuZ2V0T3B0aW9uS2V5KG9wdGlvbiksXG4gICAgICAgICAgICAgICAgICBpZDogYHZzJHskZGF0YS51aWR9X19vcHRpb24tJHtpbmRleH1gLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcInZzX19kcm9wZG93bi1vcHRpb25cIiwgeyAndnNfX2Ryb3Bkb3duLW9wdGlvbi0tc2VsZWN0ZWQnOiAkb3B0aW9ucy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbiksICd2c19fZHJvcGRvd24tb3B0aW9uLS1oaWdobGlnaHQnOiBpbmRleCA9PT0gX2N0eC50eXBlQWhlYWRQb2ludGVyLCAndnNfX2Ryb3Bkb3duLW9wdGlvbi0tZGlzYWJsZWQnOiAhJHByb3BzLnNlbGVjdGFibGUob3B0aW9uKSB9XSxcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBpbmRleCA9PT0gX2N0eC50eXBlQWhlYWRQb2ludGVyID8gdHJ1ZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlb3ZlcjogJGV2ZW50ID0+ICgkcHJvcHMuc2VsZWN0YWJsZShvcHRpb24pID8gX2N0eC50eXBlQWhlYWRQb2ludGVyID0gaW5kZXggOiBudWxsKSxcbiAgICAgICAgICAgICAgICAgIG9uTW91c2Vkb3duOiBfd2l0aE1vZGlmaWVycygkZXZlbnQgPT4gKCRwcm9wcy5zZWxlY3RhYmxlKG9wdGlvbikgPyAkb3B0aW9ucy5zZWxlY3Qob3B0aW9uKSA6IG51bGwpLCBbXCJwcmV2ZW50XCIsXCJzdG9wXCJdKVxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcIm9wdGlvblwiLCAkb3B0aW9ucy5ub3JtYWxpemVPcHRpb25Gb3JTbG90KG9wdGlvbiksICgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5nZXRPcHRpb25MYWJlbChvcHRpb24pKSwgMSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSwgNDIsIFtcImlkXCIsIFwiYXJpYS1zZWxlY3RlZFwiLCBcIm9uTW91c2VvdmVyXCIsIFwib25Nb3VzZWRvd25cIl0pKVxuICAgICAgICAgICAgICB9KSwgMTI4KSksXG4gICAgICAgICAgICAgICgkb3B0aW9ucy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKFwibGlcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgICAgICAgICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJuby1vcHRpb25zXCIsICRvcHRpb25zLnNjb3BlLm5vT3B0aW9ucywgKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzVcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcIlwiLCB0cnVlKSxcbiAgICAgICAgICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwibGlzdC1mb290ZXJcIiwgJG9wdGlvbnMuc2NvcGUubGlzdEZvb3RlcilcbiAgICAgICAgICAgIF0sIDQwLCBbXCJpZFwiXSkpLCBbXG4gICAgICAgICAgICAgIFtfZGlyZWN0aXZlX2FwcGVuZF90b19ib2R5XVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhcInVsXCIsIHtcbiAgICAgICAgICAgICAga2V5OiAxLFxuICAgICAgICAgICAgICBpZDogYHZzJHskZGF0YS51aWR9X19saXN0Ym94YCxcbiAgICAgICAgICAgICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XCJkaXNwbGF5XCI6XCJub25lXCIsXCJ2aXNpYmlsaXR5XCI6XCJoaWRkZW5cIn1cbiAgICAgICAgICAgIH0sIG51bGwsIDgsIFtcImlkXCJdKSlcbiAgICAgIF0pLFxuICAgICAgXzogM1xuICAgIH0sIDgsIFtcIm5hbWVcIl0pLFxuICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImZvb3RlclwiLCAkb3B0aW9ucy5zY29wZS5mb290ZXIpXG4gIF0sIDEwLCBbXCJkaXJcIl0pKVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBhdXRvc2Nyb2xsOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdHlwZUFoZWFkUG9pbnRlcjogZnVuY3Rpb24gdHlwZUFoZWFkUG9pbnRlcigpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9zY3JvbGwpIHtcbiAgICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG1heWJlQWRqdXN0U2Nyb2xsOiBmdW5jdGlvbiBtYXliZUFkanVzdFNjcm9sbCgpIHtcbiAgICAgIHZhciBfdGhpcyQkcmVmcyRkcm9wZG93bk07XG5cbiAgICAgIHZhciBvcHRpb25FbCA9ICgoX3RoaXMkJHJlZnMkZHJvcGRvd25NID0gdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUpID09PSBudWxsIHx8IF90aGlzJCRyZWZzJGRyb3Bkb3duTSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkJHJlZnMkZHJvcGRvd25NLmNoaWxkcmVuW3RoaXMudHlwZUFoZWFkUG9pbnRlcl0pIHx8IGZhbHNlO1xuXG4gICAgICBpZiAob3B0aW9uRWwpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0RHJvcGRvd25WaWV3cG9ydCgpO1xuXG4gICAgICAgIHZhciBfb3B0aW9uRWwkZ2V0Qm91bmRpbmcgPSBvcHRpb25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHRvcCA9IF9vcHRpb25FbCRnZXRCb3VuZGluZy50b3AsXG4gICAgICAgICAgICBib3R0b20gPSBfb3B0aW9uRWwkZ2V0Qm91bmRpbmcuYm90dG9tLFxuICAgICAgICAgICAgaGVpZ2h0ID0gX29wdGlvbkVsJGdldEJvdW5kaW5nLmhlaWdodDtcblxuICAgICAgICBpZiAodG9wIDwgYm91bmRzLnRvcCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5zY3JvbGxUb3AgPSBvcHRpb25FbC5vZmZzZXRUb3A7XG4gICAgICAgIH0gZWxzZSBpZiAoYm90dG9tID4gYm91bmRzLmJvdHRvbSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5zY3JvbGxUb3AgPSBvcHRpb25FbC5vZmZzZXRUb3AgLSAoYm91bmRzLmhlaWdodCAtIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGdldERyb3Bkb3duVmlld3BvcnQ6IGZ1bmN0aW9uIGdldERyb3Bkb3duVmlld3BvcnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUgPyB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHtcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlQWhlYWRQb2ludGVyOiAtMVxuICAgIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZmlsdGVyZWRPcHRpb25zOiBmdW5jdGlvbiBmaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUodGhpcy5maWx0ZXJlZE9wdGlvbnNbaV0pKSB7XG4gICAgICAgICAgdGhpcy50eXBlQWhlYWRQb2ludGVyID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHR5cGVBaGVhZFVwOiBmdW5jdGlvbiB0eXBlQWhlYWRVcCgpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RhYmxlKHRoaXMuZmlsdGVyZWRPcHRpb25zW2ldKSkge1xuICAgICAgICAgIHRoaXMudHlwZUFoZWFkUG9pbnRlciA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHR5cGVBaGVhZERvd246IGZ1bmN0aW9uIHR5cGVBaGVhZERvd24oKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50eXBlQWhlYWRQb2ludGVyICsgMTsgaSA8IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUodGhpcy5maWx0ZXJlZE9wdGlvbnNbaV0pKSB7XG4gICAgICAgICAgdGhpcy50eXBlQWhlYWRQb2ludGVyID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdHlwZUFoZWFkU2VsZWN0OiBmdW5jdGlvbiB0eXBlQWhlYWRTZWxlY3QoKSB7XG4gICAgICB2YXIgdHlwZUFoZWFkT3B0aW9uID0gdGhpcy5maWx0ZXJlZE9wdGlvbnNbdGhpcy50eXBlQWhlYWRQb2ludGVyXTtcblxuICAgICAgaWYgKHR5cGVBaGVhZE9wdGlvbikge1xuICAgICAgICB0aGlzLnNlbGVjdCh0eXBlQWhlYWRPcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXV0YWJsZUxvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBzZWFyY2g6IGZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMuc2VhcmNoLCB0aGlzLnRvZ2dsZUxvYWRpbmcpO1xuICAgIH0sXG4gICAgbG9hZGluZzogZnVuY3Rpb24gbG9hZGluZyh2YWwpIHtcbiAgICAgIHRoaXMubXV0YWJsZUxvYWRpbmcgPSB2YWw7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlTG9hZGluZzogZnVuY3Rpb24gdG9nZ2xlTG9hZGluZygpIHtcbiAgICAgIHZhciB0b2dnbGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cbiAgICAgIGlmICh0b2dnbGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tdXRhYmxlTG9hZGluZyA9ICF0aGlzLm11dGFibGVMb2FkaW5nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5tdXRhYmxlTG9hZGluZyA9IHRvZ2dsZTtcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0IHsgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjEwXCIsXG4gIGhlaWdodDogXCIxMFwiXG59XG5jb25zdCBfaG9pc3RlZF8yID0gLyojX19QVVJFX18qL19jcmVhdGVWTm9kZShcInBhdGhcIiwgeyBkOiBcIk02Ljg5NTQ1NSA1bDIuODQyODk3LTIuODQyODk4Yy4zNDg4NjQtLjM0ODg2My4zNDg4NjQtLjkxNDQ4OCAwLTEuMjYzNjM2TDkuMTA2NTM0LjI2MTY0OGMtLjM0ODg2NC0uMzQ4ODY0LS45MTQ0ODktLjM0ODg2NC0xLjI2MzYzNiAwTDUgMy4xMDQ1NDUgMi4xNTcxMDIuMjYxNjQ4Yy0uMzQ4ODYzLS4zNDg4NjQtLjkxNDQ4OC0uMzQ4ODY0LTEuMjYzNjM2IDBMLjI2MTY0OC44OTM0NjZjLS4zNDg4NjQuMzQ4ODY0LS4zNDg4NjQuOTE0NDg5IDAgMS4yNjM2MzZMMy4xMDQ1NDUgNSAuMjYxNjQ4IDcuODQyODk4Yy0uMzQ4ODY0LjM0ODg2My0uMzQ4ODY0LjkxNDQ4OCAwIDEuMjYzNjM2bC42MzE4MTguNjMxODE4Yy4zNDg4NjQuMzQ4ODY0LjkxNDc3My4zNDg4NjQgMS4yNjM2MzYgMEw1IDYuODk1NDU1bDIuODQyODk4IDIuODQyODk3Yy4zNDg4NjMuMzQ4ODY0LjkxNDc3Mi4zNDg4NjQgMS4yNjM2MzYgMGwuNjMxODE4LS42MzE4MThjLjM0ODg2NC0uMzQ4ODY0LjM0ODg2NC0uOTE0NDg5IDAtMS4yNjM2MzZMNi44OTU0NTUgNXpcIiB9LCBudWxsLCAtMSlcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhcInN2Z1wiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2hvaXN0ZWRfMlxuICBdKSlcbn0iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9EZXNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdhYWRlNDVcIlxuY29uc3Qgc2NyaXB0ID0ge31cbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IHsgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjE0XCIsXG4gIGhlaWdodDogXCIxMFwiXG59XG5jb25zdCBfaG9pc3RlZF8yID0gLyojX19QVVJFX18qL19jcmVhdGVWTm9kZShcInBhdGhcIiwgeyBkOiBcIk05LjIxMTM2NCA3LjU5OTMxbDQuNDgzMzgtNC44NjcyMjljLjQwNzAwOC0uNDQxODU0LjQwNzAwOC0xLjE1ODI0NyAwLTEuNjAwNDZsLS43MzcxMi0uODAwMjNjLS40MDcwMDgtLjQ0MTg1NC0xLjA2NjkwNC0uNDQxODU0LTEuNDc0MjQzIDBMNyA1LjE5ODYxNyAyLjUxNjYyLjMzMTM5Yy0uNDA3MDA4LS40NDE4NTMtMS4wNjY5MDQtLjQ0MTg1My0xLjQ3NDI0MyAwbC0uNzM3MTIxLjgwMDIzYy0uNDA3MDA4LjQ0MTg1NC0uNDA3MDA4IDEuMTU4MjQ4IDAgMS42MDA0NjFsNC40ODMzOCA0Ljg2NzIyOEw3IDEwbDIuMjExMzY0LTIuNDAwNjl6XCIgfSwgbnVsbCwgLTEpXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soXCJzdmdcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9ob2lzdGVkXzJcbiAgXSkpXG59IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vT3BlbkluZGljYXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI2NGEzOWRcIlxuY29uc3Qgc2NyaXB0ID0ge31cbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IERlc2VsZWN0IGZyb20gJy4vRGVzZWxlY3QnO1xuaW1wb3J0IE9wZW5JbmRpY2F0b3IgZnJvbSAnLi9PcGVuSW5kaWNhdG9yJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgRGVzZWxlY3Q6IERlc2VsZWN0LFxuICBPcGVuSW5kaWNhdG9yOiBPcGVuSW5kaWNhdG9yXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIGluc2VydGVkKGVsLCBiaW5kaW5ncywgX3JlZikge1xuICAgIHZhciBjb250ZXh0ID0gX3JlZi5jb250ZXh0O1xuXG4gICAgaWYgKGNvbnRleHQuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICB2YXIgX2NvbnRleHQkJHJlZnMkdG9nZ2xlID0gY29udGV4dC4kcmVmcy50b2dnbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgaGVpZ2h0ID0gX2NvbnRleHQkJHJlZnMkdG9nZ2xlLmhlaWdodCxcbiAgICAgICAgICB0b3AgPSBfY29udGV4dCQkcmVmcyR0b2dnbGUudG9wLFxuICAgICAgICAgIGxlZnQgPSBfY29udGV4dCQkcmVmcyR0b2dnbGUubGVmdCxcbiAgICAgICAgICB3aWR0aCA9IF9jb250ZXh0JCRyZWZzJHRvZ2dsZS53aWR0aDtcblxuICAgICAgdmFyIHNjcm9sbFggPSB3aW5kb3cuc2Nyb2xsWCB8fCB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICB2YXIgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIGVsLnVuYmluZFBvc2l0aW9uID0gY29udGV4dC5jYWxjdWxhdGVQb3NpdGlvbihlbCwgY29udGV4dCwge1xuICAgICAgICB3aWR0aDogd2lkdGggKyAncHgnLFxuICAgICAgICBsZWZ0OiBzY3JvbGxYICsgbGVmdCArICdweCcsXG4gICAgICAgIHRvcDogc2Nyb2xsWSArIHRvcCArIGhlaWdodCArICdweCdcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICB9LFxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZChlbCwgYmluZGluZ3MsIF9yZWYyKSB7XG4gICAgdmFyIGNvbnRleHQgPSBfcmVmMi5jb250ZXh0O1xuXG4gICAgaWYgKGNvbnRleHQuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBpZiAoZWwudW5iaW5kUG9zaXRpb24gJiYgdHlwZW9mIGVsLnVuYmluZFBvc2l0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsLnVuYmluZFBvc2l0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTsiLCJmdW5jdGlvbiBzb3J0QW5kU3RyaW5naWZ5KHNvcnRhYmxlKSB7XG4gIHZhciBvcmRlcmVkID0ge307XG4gIE9iamVjdC5rZXlzKHNvcnRhYmxlKS5zb3J0KCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgb3JkZXJlZFtrZXldID0gc29ydGFibGVba2V5XTtcbiAgfSk7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvcmRlcmVkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc29ydEFuZFN0cmluZ2lmeTsiLCJ2YXIgaWRDb3VudCA9IDA7XG5cbmZ1bmN0aW9uIHVuaXF1ZUlkKCkge1xuICByZXR1cm4gKytpZENvdW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1bmlxdWVJZDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuKXtyZXR1cm57YWxsOm49bnx8bmV3IE1hcCxvbjpmdW5jdGlvbih0LGUpe3ZhciBpPW4uZ2V0KHQpO2kmJmkucHVzaChlKXx8bi5zZXQodCxbZV0pfSxvZmY6ZnVuY3Rpb24odCxlKXt2YXIgaT1uLmdldCh0KTtpJiZpLnNwbGljZShpLmluZGV4T2YoZSk+Pj4wLDEpfSxlbWl0OmZ1bmN0aW9uKHQsZSl7KG4uZ2V0KHQpfHxbXSkuc2xpY2UoKS5tYXAoZnVuY3Rpb24obil7bihlKX0pLChuLmdldChcIipcIil8fFtdKS5zbGljZSgpLm1hcChmdW5jdGlvbihuKXtuKHQsZSl9KX19fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5lcy5qcy5tYXBcbiIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBwb2ludGVyU2Nyb2xsIGZyb20gJy4uL21peGlucy9wb2ludGVyU2Nyb2xsJztcbmltcG9ydCB0eXBlQWhlYWRQb2ludGVyIGZyb20gJy4uL21peGlucy90eXBlQWhlYWRQb2ludGVyJztcbmltcG9ydCBhamF4IGZyb20gJy4uL21peGlucy9hamF4JztcbmltcG9ydCBfY2hpbGRDb21wb25lbnRzIGZyb20gJy4vY2hpbGRDb21wb25lbnRzJztcbmltcG9ydCBhcHBlbmRUb0JvZHkgZnJvbSAnLi4vZGlyZWN0aXZlcy9hcHBlbmRUb0JvZHknO1xuaW1wb3J0IHNvcnRBbmRTdHJpbmdpZnkgZnJvbSAnLi4vdXRpbGl0eS9zb3J0QW5kU3RyaW5naWZ5JztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICcuLi91dGlsaXR5L3VuaXF1ZUlkJztcbmltcG9ydCBtaXR0IGZyb20gJ21pdHQnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiBfb2JqZWN0U3ByZWFkKHt9LCBfY2hpbGRDb21wb25lbnRzKSxcbiAgbWl4aW5zOiBbcG9pbnRlclNjcm9sbCwgdHlwZUFoZWFkUG9pbnRlciwgYWpheF0sXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBhcHBlbmRUb0JvZHk6IGFwcGVuZFRvQm9keVxuICB9LFxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHt9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBcImRlZmF1bHRcIjogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBjbGVhcmFibGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgc2VhcmNoYWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBtdWx0aXBsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIFwiZGVmYXVsdFwiOiAnJ1xuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgXCJkZWZhdWx0XCI6ICd2c19fZmFkZSdcbiAgICB9LFxuICAgIGNsZWFyU2VhcmNoT25TZWxlY3Q6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VPblNlbGVjdDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgXCJkZWZhdWx0XCI6ICdsYWJlbCdcbiAgICB9LFxuICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgXCJkZWZhdWx0XCI6ICdvZmYnXG4gICAgfSxcbiAgICByZWR1Y2U6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uIF9kZWZhdWx0KG9wdGlvbikge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0YWJsZToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBcImRlZmF1bHRcIjogZnVuY3Rpb24gX2RlZmF1bHQob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0T3B0aW9uTGFiZWw6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uIF9kZWZhdWx0KG9wdGlvbikge1xuICAgICAgICBpZiAoX3R5cGVvZihvcHRpb24pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmICghb3B0aW9uLmhhc093blByb3BlcnR5KHRoaXMubGFiZWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiW3Z1ZS1zZWxlY3Qgd2Fybl06IExhYmVsIGtleSBcXFwib3B0aW9uLlwiLmNvbmNhdCh0aGlzLmxhYmVsLCBcIlxcXCIgZG9lcyBub3RcIikgKyBcIiBleGlzdCBpbiBvcHRpb25zIG9iamVjdCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkob3B0aW9uKSwgXCIuXFxuXCIpICsgJ2h0dHBzOi8vdnVlLXNlbGVjdC5vcmcvYXBpL3Byb3BzLmh0bWwjZ2V0b3B0aW9ubGFiZWwnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gb3B0aW9uW3RoaXMubGFiZWxdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldE9wdGlvbktleToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBcImRlZmF1bHRcIjogZnVuY3Rpb24gX2RlZmF1bHQob3B0aW9uKSB7XG4gICAgICAgIGlmIChfdHlwZW9mKG9wdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgnaWQnKSA/IG9wdGlvbi5pZCA6IHNvcnRBbmRTdHJpbmdpZnkob3B0aW9uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHZhciB3YXJuaW5nID0gXCJbdnVlLXNlbGVjdCB3YXJuXTogQ291bGQgbm90IHN0cmluZ2lmeSB0aGlzIG9wdGlvbiBcIiArIFwidG8gZ2VuZXJhdGUgdW5pcXVlIGtleS4gUGxlYXNlIHByb3ZpZGUnZ2V0T3B0aW9uS2V5JyBwcm9wIFwiICsgXCJ0byByZXR1cm4gYSB1bmlxdWUga2V5IGZvciBlYWNoIG9wdGlvbi5cXG5cIiArICdodHRwczovL3Z1ZS1zZWxlY3Qub3JnL2FwaS9wcm9wcy5odG1sI2dldG9wdGlvbmtleSc7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2Fybih3YXJuaW5nLCBvcHRpb24sIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvblRhYjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBcImRlZmF1bHRcIjogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE9uVGFiICYmICF0aGlzLmlzQ29tcG9zaW5nKSB7XG4gICAgICAgICAgdGhpcy50eXBlQWhlYWRTZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFnZ2FibGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIHRhYmluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgcHVzaFRhZ3M6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIGZpbHRlcmFibGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgZmlsdGVyQnk6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uIF9kZWZhdWx0KG9wdGlvbiwgbGFiZWwsIHNlYXJjaCkge1xuICAgICAgICByZXR1cm4gKGxhYmVsIHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgICB9XG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uIF9kZWZhdWx0KG9wdGlvbnMsIHNlYXJjaCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgdmFyIGxhYmVsID0gX3RoaXMuZ2V0T3B0aW9uTGFiZWwob3B0aW9uKTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF90aGlzLmZpbHRlckJ5KG9wdGlvbiwgbGFiZWwsIHNlYXJjaCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlT3B0aW9uOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbiBfZGVmYXVsdChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIF90eXBlb2YodGhpcy5vcHRpb25MaXN0WzBdKSA9PT0gJ29iamVjdCcgPyBfZGVmaW5lUHJvcGVydHkoe30sIHRoaXMubGFiZWwsIG9wdGlvbikgOiBvcHRpb247XG4gICAgICB9XG4gICAgfSxcbiAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnZnVuY3Rpb24nLCAnYm9vbGVhbiddLmluY2x1ZGVzKF90eXBlb2YodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsZWFyU2VhcmNoT25CbHVyOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbiBfZGVmYXVsdChfcmVmMikge1xuICAgICAgICB2YXIgY2xlYXJTZWFyY2hPblNlbGVjdCA9IF9yZWYyLmNsZWFyU2VhcmNoT25TZWxlY3QsXG4gICAgICAgICAgICBtdWx0aXBsZSA9IF9yZWYyLm11bHRpcGxlO1xuICAgICAgICByZXR1cm4gY2xlYXJTZWFyY2hPblNlbGVjdCAmJiAhbXVsdGlwbGU7XG4gICAgICB9XG4gICAgfSxcbiAgICBub0Ryb3A6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIGlucHV0SWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgZGlyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBcImRlZmF1bHRcIjogJ2F1dG8nXG4gICAgfSxcbiAgICBzZWxlY3RPblRhYjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgc2VsZWN0T25LZXlDb2Rlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBcImRlZmF1bHRcIjogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBbMTNdO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VhcmNoSW5wdXRRdWVyeVNlbGVjdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBcImRlZmF1bHRcIjogJ1t0eXBlPXNlYXJjaF0nXG4gICAgfSxcbiAgICBtYXBLZXlkb3duOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbiBfZGVmYXVsdChtYXAsIHZtKSB7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgICB9XG4gICAgfSxcbiAgICBhcHBlbmRUb0JvZHk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIGNhbGN1bGF0ZVBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbiBfZGVmYXVsdChkcm9wZG93bkxpc3QsIGNvbXBvbmVudCwgX3JlZjMpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gX3JlZjMud2lkdGgsXG4gICAgICAgICAgICB0b3AgPSBfcmVmMy50b3AsXG4gICAgICAgICAgICBsZWZ0ID0gX3JlZjMubGVmdDtcbiAgICAgICAgZHJvcGRvd25MaXN0LnN0eWxlLnRvcCA9IHRvcDtcbiAgICAgICAgZHJvcGRvd25MaXN0LnN0eWxlLmxlZnQgPSBsZWZ0O1xuICAgICAgICBkcm9wZG93bkxpc3Quc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdW5pcXVlSWQoKSxcbiAgICAgIHNlYXJjaDogJycsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGlzQ29tcG9zaW5nOiBmYWxzZSxcbiAgICAgIHB1c2hlZFRhZ3M6IFtdLFxuICAgICAgX3ZhbHVlOiBbXVxuICAgIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgb3B0aW9uczogZnVuY3Rpb24gb3B0aW9ucyhuZXdPcHRpb25zLCBvbGRPcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHNob3VsZFJlc2V0ID0gZnVuY3Rpb24gc2hvdWxkUmVzZXQoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgX3RoaXMyLnJlc2V0T25PcHRpb25zQ2hhbmdlID09PSAnZnVuY3Rpb24nID8gX3RoaXMyLnJlc2V0T25PcHRpb25zQ2hhbmdlKG5ld09wdGlvbnMsIG9sZE9wdGlvbnMsIF90aGlzMi5zZWxlY3RlZFZhbHVlKSA6IF90aGlzMi5yZXNldE9uT3B0aW9uc0NoYW5nZTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghdGhpcy50YWdnYWJsZSAmJiBzaG91bGRSZXNldCgpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW9kZWxWYWx1ZSAmJiB0aGlzLmlzVHJhY2tpbmdWYWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRJbnRlcm5hbFZhbHVlRnJvbU9wdGlvbnModGhpcy5tb2RlbFZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZGVsVmFsdWU6IGZ1bmN0aW9uIG1vZGVsVmFsdWUodmFsKSB7XG4gICAgICBpZiAodGhpcy5pc1RyYWNraW5nVmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0SW50ZXJuYWxWYWx1ZUZyb21PcHRpb25zKHZhbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtdWx0aXBsZTogZnVuY3Rpb24gbXVsdGlwbGUoKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfSxcbiAgICBvcGVuOiBmdW5jdGlvbiBvcGVuKGlzT3Blbikge1xuICAgICAgdGhpcy4kZW1pdChpc09wZW4gPyAnb3BlbicgOiAnY2xvc2UnKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5tdXRhYmxlTG9hZGluZyA9IHRoaXMubG9hZGluZztcblxuICAgIGlmICh0eXBlb2YgdGhpcy5tb2RlbFZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHRoaXMuaXNUcmFja2luZ1ZhbHVlcykge1xuICAgICAgdGhpcy5zZXRJbnRlcm5hbFZhbHVlRnJvbU9wdGlvbnModGhpcy5tb2RlbFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgZW1pdHRlciA9IG1pdHQoKTtcbiAgICBlbWl0dGVyLm9uKCdvcHRpb246Y3JlYXRlZCcsIHRoaXMucHVzaFRhZyk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRJbnRlcm5hbFZhbHVlRnJvbU9wdGlvbnM6IGZ1bmN0aW9uIHNldEludGVybmFsVmFsdWVGcm9tT3B0aW9ucyh2YWx1ZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aGlzLiRkYXRhLl92YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5maW5kT3B0aW9uRnJvbVJlZHVjZWRWYWx1ZSh2YWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGRhdGEuX3ZhbHVlID0gdGhpcy5maW5kT3B0aW9uRnJvbVJlZHVjZWRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdChvcHRpb24pIHtcbiAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbjpzZWxlY3RpbmcnLCBvcHRpb24pO1xuXG4gICAgICBpZiAoIXRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XG4gICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmICF0aGlzLm9wdGlvbkV4aXN0cyhvcHRpb24pKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnb3B0aW9uOmNyZWF0ZWQnLCBvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICBvcHRpb24gPSB0aGlzLnNlbGVjdGVkVmFsdWUuY29uY2F0KG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG9wdGlvbik7XG4gICAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbjpzZWxlY3RlZCcsIG9wdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25BZnRlclNlbGVjdChvcHRpb24pO1xuICAgIH0sXG4gICAgZGVzZWxlY3Q6IGZ1bmN0aW9uIGRlc2VsZWN0KG9wdGlvbikge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbjpkZXNlbGVjdGluZycsIG9wdGlvbik7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWRWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gIV90aGlzNC5vcHRpb25Db21wYXJhdG9yKHZhbCwgb3B0aW9uKTtcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbjpkZXNlbGVjdGVkJywgb3B0aW9uKTtcbiAgICB9LFxuICAgIGNsZWFyU2VsZWN0aW9uOiBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5tdWx0aXBsZSA/IFtdIDogbnVsbCk7XG4gICAgfSxcbiAgICBvbkFmdGVyU2VsZWN0OiBmdW5jdGlvbiBvbkFmdGVyU2VsZWN0KG9wdGlvbikge1xuICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICB0aGlzLnNlYXJjaEVsLmJsdXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLiRkYXRhLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5yZWR1Y2UodmFsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVkdWNlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlKTtcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgIH0sXG4gICAgdG9nZ2xlRHJvcGRvd246IGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKGV2ZW50KSB7XG4gICAgICB2YXIgdGFyZ2V0SXNOb3RTZWFyY2ggPSBldmVudC50YXJnZXQgIT09IHRoaXMuc2VhcmNoRWw7XG5cbiAgICAgIGlmICh0YXJnZXRJc05vdFNlYXJjaCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVzZWxlY3RCdXR0b25zID0gdGhpcy4kcmVmc1snZGVzZWxlY3RCdXR0b25zJ107XG4gICAgICB2YXIgaWdub3JlZEJ1dHRvbnMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90eXBlb2YoZGVzZWxlY3RCdXR0b25zKSA9PT0gJ29iamVjdCcgPyBbZGVzZWxlY3RCdXR0b25zXSA6IGRlc2VsZWN0QnV0dG9ucyB8fCBbXSksIF90b0NvbnN1bWFibGVBcnJheShbdGhpcy4kcmVmc1snY2xlYXJCdXR0b24nXV0gfHwgW10pKTtcblxuICAgICAgaWYgKHRoaXMuc2VhcmNoRWwgPT09IHVuZGVmaW5lZCB8fCBpZ25vcmVkQnV0dG9ucy5maWx0ZXIoQm9vbGVhbikuc29tZShmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHJldHVybiByZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fCByZWYgPT09IGV2ZW50LnRhcmdldDtcbiAgICAgIH0pKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3BlbiAmJiB0YXJnZXRJc05vdFNlYXJjaCkge1xuICAgICAgICB0aGlzLnNlYXJjaEVsLmJsdXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2hFbC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXNPcHRpb25TZWxlY3RlZDogZnVuY3Rpb24gaXNPcHRpb25TZWxlY3RlZChvcHRpb24pIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlLnNvbWUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfdGhpczYub3B0aW9uQ29tcGFyYXRvcih2YWx1ZSwgb3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb3B0aW9uQ29tcGFyYXRvcjogZnVuY3Rpb24gb3B0aW9uQ29tcGFyYXRvcihhLCBiKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25LZXkoYSkgPT09IHRoaXMuZ2V0T3B0aW9uS2V5KGIpO1xuICAgIH0sXG4gICAgZmluZE9wdGlvbkZyb21SZWR1Y2VkVmFsdWU6IGZ1bmN0aW9uIGZpbmRPcHRpb25Gcm9tUmVkdWNlZFZhbHVlKHZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgdmFyIHByZWRpY2F0ZSA9IGZ1bmN0aW9uIHByZWRpY2F0ZShvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KF90aGlzNy5yZWR1Y2Uob3B0aW9uKSkgPT09IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtYXRjaGVzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aGlzLm9wdGlvbnMpLCBfdG9Db25zdW1hYmxlQXJyYXkodGhpcy5wdXNoZWRUYWdzKSkuZmlsdGVyKHByZWRpY2F0ZSk7XG5cbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlc1swXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hdGNoZXMuZmluZChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNy5vcHRpb25Db21wYXJhdG9yKG1hdGNoLCBfdGhpczcuJGRhdGEuX3ZhbHVlKTtcbiAgICAgIH0pIHx8IHZhbHVlO1xuICAgIH0sXG4gICAgY2xvc2VTZWFyY2hPcHRpb25zOiBmdW5jdGlvbiBjbG9zZVNlYXJjaE9wdGlvbnMoKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaDpibHVyJyk7XG4gICAgfSxcbiAgICBtYXliZURlbGV0ZVZhbHVlOiBmdW5jdGlvbiBtYXliZURlbGV0ZVZhbHVlKCkge1xuICAgICAgaWYgKCF0aGlzLnNlYXJjaEVsLnZhbHVlLmxlbmd0aCAmJiB0aGlzLnNlbGVjdGVkVmFsdWUgJiYgdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCAmJiB0aGlzLmNsZWFyYWJsZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgdmFsdWUgPSBfdG9Db25zdW1hYmxlQXJyYXkodGhpcy5zZWxlY3RlZFZhbHVlLnNsaWNlKDAsIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggLSAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9wdGlvbkV4aXN0czogZnVuY3Rpb24gb3B0aW9uRXhpc3RzKG9wdGlvbikge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbkxpc3Quc29tZShmdW5jdGlvbiAoX29wdGlvbikge1xuICAgICAgICByZXR1cm4gX3RoaXM4Lm9wdGlvbkNvbXBhcmF0b3IoX29wdGlvbiwgb3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbm9ybWFsaXplT3B0aW9uRm9yU2xvdDogZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9uRm9yU2xvdChvcHRpb24pIHtcbiAgICAgIHJldHVybiBfdHlwZW9mKG9wdGlvbikgPT09ICdvYmplY3QnID8gb3B0aW9uIDogX2RlZmluZVByb3BlcnR5KHt9LCB0aGlzLmxhYmVsLCBvcHRpb24pO1xuICAgIH0sXG4gICAgcHVzaFRhZzogZnVuY3Rpb24gcHVzaFRhZyhvcHRpb24pIHtcbiAgICAgIHRoaXMucHVzaGVkVGFncy5wdXNoKG9wdGlvbik7XG4gICAgfSxcbiAgICBvbkVzY2FwZTogZnVuY3Rpb24gb25Fc2NhcGUoKSB7XG4gICAgICBpZiAoIXRoaXMuc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNlYXJjaEVsLmJsdXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblNlYXJjaEJsdXI6IGZ1bmN0aW9uIG9uU2VhcmNoQmx1cigpIHtcbiAgICAgIGlmICh0aGlzLm1vdXNlZG93biAmJiAhdGhpcy5zZWFyY2hpbmcpIHtcbiAgICAgICAgdGhpcy5tb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGVhclNlYXJjaE9uU2VsZWN0ID0gdGhpcy5jbGVhclNlYXJjaE9uU2VsZWN0LFxuICAgICAgICAgICAgbXVsdGlwbGUgPSB0aGlzLm11bHRpcGxlO1xuXG4gICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25CbHVyKHtcbiAgICAgICAgICBjbGVhclNlYXJjaE9uU2VsZWN0OiBjbGVhclNlYXJjaE9uU2VsZWN0LFxuICAgICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZVxuICAgICAgICB9KSkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsb3NlU2VhcmNoT3B0aW9ucygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaC5sZW5ndGggPT09IDAgJiYgdGhpcy5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsb3NlU2VhcmNoT3B0aW9ucygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSxcbiAgICBvblNlYXJjaEZvY3VzOiBmdW5jdGlvbiBvblNlYXJjaEZvY3VzKCkge1xuICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaDpmb2N1cycpO1xuICAgIH0sXG4gICAgb25Nb3VzZWRvd246IGZ1bmN0aW9uIG9uTW91c2Vkb3duKCkge1xuICAgICAgdGhpcy5tb3VzZWRvd24gPSB0cnVlO1xuICAgIH0sXG4gICAgb25Nb3VzZVVwOiBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICB0aGlzLm1vdXNlZG93biA9IGZhbHNlO1xuICAgIH0sXG4gICAgb25TZWFyY2hLZXlEb3duOiBmdW5jdGlvbiBvblNlYXJjaEtleURvd24oZSkge1xuICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICAgIHZhciBwcmV2ZW50QW5kU2VsZWN0ID0gZnVuY3Rpb24gcHJldmVudEFuZFNlbGVjdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuICFfdGhpczkuaXNDb21wb3NpbmcgJiYgX3RoaXM5LnR5cGVBaGVhZFNlbGVjdCgpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICA4OiBmdW5jdGlvbiBfKGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM5Lm1heWJlRGVsZXRlVmFsdWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgOTogZnVuY3Rpb24gXyhlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzOS5vblRhYigpO1xuICAgICAgICB9LFxuICAgICAgICAyNzogZnVuY3Rpb24gXyhlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzOS5vbkVzY2FwZSgpO1xuICAgICAgICB9LFxuICAgICAgICAzODogZnVuY3Rpb24gXyhlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybiBfdGhpczkudHlwZUFoZWFkVXAoKTtcbiAgICAgICAgfSxcbiAgICAgICAgNDA6IGZ1bmN0aW9uIF8oZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm4gX3RoaXM5LnR5cGVBaGVhZERvd24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMuc2VsZWN0T25LZXlDb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXlDb2RlKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0c1trZXlDb2RlXSA9IHByZXZlbnRBbmRTZWxlY3Q7XG4gICAgICB9KTtcbiAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMubWFwS2V5ZG93bihkZWZhdWx0cywgdGhpcyk7XG5cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlcnNbZS5rZXlDb2RlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gaGFuZGxlcnNbZS5rZXlDb2RlXShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNUcmFja2luZ1ZhbHVlczogZnVuY3Rpb24gaXNUcmFja2luZ1ZhbHVlcygpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5tb2RlbFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy4kb3B0aW9ucy5wcm9wcywgJ3JlZHVjZScpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWRWYWx1ZTogZnVuY3Rpb24gc2VsZWN0ZWRWYWx1ZSgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWxWYWx1ZTtcblxuICAgICAgaWYgKHRoaXMuaXNUcmFja2luZ1ZhbHVlcykge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuJGRhdGEuX3ZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIG9wdGlvbkxpc3Q6IGZ1bmN0aW9uIG9wdGlvbkxpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNvbmNhdCh0aGlzLnB1c2hUYWdzID8gdGhpcy5wdXNoZWRUYWdzIDogW10pO1xuICAgIH0sXG4gICAgc2VhcmNoRWw6IGZ1bmN0aW9uIHNlYXJjaEVsKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy4kc2xvdHNbJ3NlYXJjaCddID8gdGhpcy4kcmVmcy5zZWxlY3RlZE9wdGlvbnMucXVlcnlTZWxlY3Rvcih0aGlzLnNlYXJjaElucHV0UXVlcnlTZWxlY3RvcikgOiB0aGlzLiRyZWZzLnNlYXJjaDtcbiAgICB9LFxuICAgIHNjb3BlOiBmdW5jdGlvbiBzY29wZSgpIHtcbiAgICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgICAgdmFyIGxpc3RTbG90ID0ge1xuICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgIHNlYXJjaGluZzogdGhpcy5zZWFyY2hpbmcsXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uczogdGhpcy5maWx0ZXJlZE9wdGlvbnNcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICdkaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICAncGxhY2Vob2xkZXInOiB0aGlzLnNlYXJjaFBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogdGhpcy50YWJpbmRleCxcbiAgICAgICAgICAgICdyZWFkb25seSc6ICF0aGlzLnNlYXJjaGFibGUsXG4gICAgICAgICAgICAnaWQnOiB0aGlzLmlucHV0SWQsXG4gICAgICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogXCJ2c1wiLmNvbmNhdCh0aGlzLnVpZCwgXCJfX2NvbWJvYm94XCIpLFxuICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBcInZzXCIuY29uY2F0KHRoaXMudWlkLCBcIl9fbGlzdGJveFwiKSxcbiAgICAgICAgICAgICdyZWYnOiAnc2VhcmNoJyxcbiAgICAgICAgICAgICd0eXBlJzogJ3NlYXJjaCcsXG4gICAgICAgICAgICAnYXV0b2NvbXBsZXRlJzogdGhpcy5hdXRvY29tcGxldGUsXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnNlYXJjaFxuICAgICAgICAgIH0sIHRoaXMuZHJvcGRvd25PcGVuICYmIHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMudHlwZUFoZWFkUG9pbnRlcl0gPyB7XG4gICAgICAgICAgICAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogXCJ2c1wiLmNvbmNhdCh0aGlzLnVpZCwgXCJfX29wdGlvbi1cIikuY29uY2F0KHRoaXMudHlwZUFoZWFkUG9pbnRlcilcbiAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgJ2NvbXBvc2l0aW9uc3RhcnQnOiBmdW5jdGlvbiBjb21wb3NpdGlvbnN0YXJ0KCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMxMC5pc0NvbXBvc2luZyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2NvbXBvc2l0aW9uZW5kJzogZnVuY3Rpb24gY29tcG9zaXRpb25lbmQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczEwLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2tleWRvd24nOiB0aGlzLm9uU2VhcmNoS2V5RG93bixcbiAgICAgICAgICAgICdibHVyJzogdGhpcy5vblNlYXJjaEJsdXIsXG4gICAgICAgICAgICAnZm9jdXMnOiB0aGlzLm9uU2VhcmNoRm9jdXMsXG4gICAgICAgICAgICAnaW5wdXQnOiBmdW5jdGlvbiBpbnB1dChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczEwLnNlYXJjaCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3Bpbm5lcjoge1xuICAgICAgICAgIGxvYWRpbmc6IHRoaXMubXV0YWJsZUxvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgbm9PcHRpb25zOiB7XG4gICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgc2VhcmNoaW5nOiB0aGlzLnNlYXJjaGluZ1xuICAgICAgICB9LFxuICAgICAgICBvcGVuSW5kaWNhdG9yOiB7XG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgJ3JlZic6ICdvcGVuSW5kaWNhdG9yJyxcbiAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbicsXG4gICAgICAgICAgICAnY2xhc3MnOiAndnNfX29wZW4taW5kaWNhdG9yJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGlzdEhlYWRlcjogbGlzdFNsb3QsXG4gICAgICAgIGxpc3RGb290ZXI6IGxpc3RTbG90LFxuICAgICAgICBoZWFkZXI6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbGlzdFNsb3QpLCB7fSwge1xuICAgICAgICAgIGRlc2VsZWN0OiB0aGlzLmRlc2VsZWN0XG4gICAgICAgIH0pLFxuICAgICAgICBmb290ZXI6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbGlzdFNsb3QpLCB7fSwge1xuICAgICAgICAgIGRlc2VsZWN0OiB0aGlzLmRlc2VsZWN0XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0sXG4gICAgY2hpbGRDb21wb25lbnRzOiBmdW5jdGlvbiBjaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfY2hpbGRDb21wb25lbnRzKSwgdGhpcy5jb21wb25lbnRzKTtcbiAgICB9LFxuICAgIHN0YXRlQ2xhc3NlczogZnVuY3Rpb24gc3RhdGVDbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3ZzLS1vcGVuJzogdGhpcy5kcm9wZG93bk9wZW4sXG4gICAgICAgICd2cy0tc2luZ2xlJzogIXRoaXMubXVsdGlwbGUsXG4gICAgICAgICd2cy0tc2VhcmNoaW5nJzogdGhpcy5zZWFyY2hpbmcgJiYgIXRoaXMubm9Ecm9wLFxuICAgICAgICAndnMtLXNlYXJjaGFibGUnOiB0aGlzLnNlYXJjaGFibGUgJiYgIXRoaXMubm9Ecm9wLFxuICAgICAgICAndnMtLXVuc2VhcmNoYWJsZSc6ICF0aGlzLnNlYXJjaGFibGUsXG4gICAgICAgICd2cy0tbG9hZGluZyc6IHRoaXMubXV0YWJsZUxvYWRpbmcsXG4gICAgICAgICd2cy0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2VhcmNoaW5nOiBmdW5jdGlvbiBzZWFyY2hpbmcoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnNlYXJjaDtcbiAgICB9LFxuICAgIGRyb3Bkb3duT3BlbjogZnVuY3Rpb24gZHJvcGRvd25PcGVuKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9Ecm9wID8gZmFsc2UgOiB0aGlzLm9wZW4gJiYgIXRoaXMubXV0YWJsZUxvYWRpbmc7XG4gICAgfSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogZnVuY3Rpb24gc2VhcmNoUGxhY2Vob2xkZXIoKSB7XG4gICAgICBpZiAodGhpcy5pc1ZhbHVlRW1wdHkgJiYgdGhpcy5wbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpbHRlcmVkT3B0aW9uczogZnVuY3Rpb24gZmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgdmFyIG9wdGlvbkxpc3QgPSBbXS5jb25jYXQodGhpcy5vcHRpb25MaXN0KTtcblxuICAgICAgaWYgKCF0aGlzLmZpbHRlcmFibGUgJiYgIXRoaXMudGFnZ2FibGUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbkxpc3Q7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5zZWFyY2gubGVuZ3RoID8gdGhpcy5maWx0ZXIob3B0aW9uTGlzdCwgdGhpcy5zZWFyY2gsIHRoaXMpIDogb3B0aW9uTGlzdDtcblxuICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjcmVhdGVkT3B0aW9uID0gdGhpcy5jcmVhdGVPcHRpb24odGhpcy5zZWFyY2gpO1xuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25FeGlzdHMoY3JlYXRlZE9wdGlvbikpIHtcbiAgICAgICAgICBvcHRpb25zLnVuc2hpZnQoY3JlYXRlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfSxcbiAgICBpc1ZhbHVlRW1wdHk6IGZ1bmN0aW9uIGlzVmFsdWVFbXB0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWUubGVuZ3RoID09PSAwO1xuICAgIH0sXG4gICAgc2hvd0NsZWFyQnV0dG9uOiBmdW5jdGlvbiBzaG93Q2xlYXJCdXR0b24oKSB7XG4gICAgICByZXR1cm4gIXRoaXMubXVsdGlwbGUgJiYgdGhpcy5jbGVhcmFibGUgJiYgIXRoaXMub3BlbiAmJiAhdGhpcy5pc1ZhbHVlRW1wdHk7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTgtMCEuL1NlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS04LTAhLi9TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4ZTU2ZjcwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzhlNTZmNzAmbGFuZz1zY3NzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IGFqYXggZnJvbSAnLi9hamF4JztcbmltcG9ydCBwb2ludGVyIGZyb20gJy4vdHlwZUFoZWFkUG9pbnRlcic7XG5pbXBvcnQgcG9pbnRlclNjcm9sbCBmcm9tICcuL3BvaW50ZXJTY3JvbGwnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBhamF4OiBhamF4LFxuICBwb2ludGVyOiBwb2ludGVyLFxuICBwb2ludGVyU2Nyb2xsOiBwb2ludGVyU2Nyb2xsXG59OyIsImltcG9ydCBWdWVTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL1NlbGVjdC52dWUnO1xuaW1wb3J0IG1peGlucyBmcm9tICcuL21peGlucy9pbmRleCc7XG5leHBvcnQgZGVmYXVsdCBWdWVTZWxlY3Q7XG5leHBvcnQgeyBWdWVTZWxlY3QsIG1peGlucyB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdm9CQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///11
`)}])})})(vueSelect);var VSelect=getDefaultExportFromCjs(vueSelect.exports),SizeSelect_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$4={name:"SizeSelect",components:{Modal,VSelect},props:{modelValue:[Number,String],storeCategoryId:Number},data(){return{hasSize:!!this.modelValue,modal:!1,fields:[],fieldId:this.modelValue}},created(){this.fetchFields()},watch:{hasSize(t){t||(this.$emit("update:modelValue",null),this.fieldId=null),setTimeout(()=>{this.modelValue||(this.hasSize=!1)},100)}},methods:{fetchFields(){return this.axios.get(this.$urls.fields,{params:{code:"size"}}).then(t=>{this.fields=t.data}).catch(()=>{this.hasSize=!1})},save(){this.$emit("update:modelValue",this.fieldId),this.modal=!1,this.hasSize=!0},showModal(){setTimeout(()=>{this.hasSize&&(this.modal=!0)},100)}}},_hoisted_1$4={class:"form-group"},_hoisted_2$4={class:"form-check"},_hoisted_3$4={class:"form-check-label",for:"has-size"},_hoisted_4$2={key:0},_hoisted_5$2={class:"p-2"};function _sfc_render$3(t,e,l,c,n,i){const s=resolveComponent("v-select"),o=resolveComponent("modal");return openBlock(),createElementBlock("div",_hoisted_1$4,[createBaseVNode("div",_hoisted_2$4,[withDirectives(createBaseVNode("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>n.hasSize=a),onClick:e[1]||(e[1]=(...a)=>i.showModal&&i.showModal(...a)),class:"form-check-input",type:"checkbox",id:"has-size"},null,512),[[vModelCheckbox,n.hasSize]]),createBaseVNode("label",_hoisted_3$4,toDisplayString(t.$lang.app.hasSize),1),n.fieldId&&n.fields.length>0?(openBlock(),createElementBlock("span",_hoisted_4$2," ("+toDisplayString(n.fields.filter(a=>a.id===n.fieldId)[0].name)+")",1)):createCommentVNode("",!0)]),createVNode(o,{modelValue:n.modal,"onUpdate:modelValue":e[3]||(e[3]=a=>n.modal=a),"modal-title":t.$lang.app.selectSizeField,"disable-backdrop-close":""},{default:withCtx(()=>[createBaseVNode("div",_hoisted_5$2,[createVNode(s,{modelValue:n.fieldId,"onUpdate:modelValue":e[2]||(e[2]=a=>n.fieldId=a),options:n.fields,label:"name",reduce:a=>a.id,placeholder:`-- ${t.$lang.app.select} --`,onInput:i.save},null,8,["modelValue","options","reduce","placeholder","onInput"])])]),_:1},8,["modelValue","modal-title"])])}var SizeSelect=_export_sfc(_sfc_main$4,[["render",_sfc_render$3],["__scopeId","data-v-abb5f680"]]),StoreCategoryModal_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$3={name:"StoreCategoryModal",components:{SizeSelect,CategorySelect,Modal},props:{modelValue:Boolean,category:[Object,null],parentId:[Number,null]},watch:{modelValue(t){this.modals.action=t},"modals.action"(t){this.$emit("update:modelValue",t)}},data(){return{modals:{action:!1},form:{id:this.category?this.category.id:"",parentId:this.parentId||"",icon:{id:"",fullPath:"",type:"",file:null},fields:[],name:this.category?this.category.name:"",maxPrice:this.category?this.category.maxPrice:"",active:this.category?this.category.active:!0,matchCategoryId:"",hasColor:this.category?this.category.hasColor:!1,sizeFieldId:this.category&&this.category.sizeFieldId||""},matchCategory:null}},created(){this.category&&this.fetchCategory(this.category.id),this.modals.action=this.modelValue},methods:{save(){return this.form.id?this.axios.put(this.$urls.storeSettingsCategory.replace(":storeId",this.$store.getters.store.id).replace(":categoryId",this.form.id),this.form).then(t=>{this.$emit("save",t.data),this.modals.action=!1,this.$snotify.success(this.$lang.app.saveSuccessMsg)}):this.axios.post(this.$urls.storeSettingsCategories.replace(":storeId",this.$store.getters.store.id),this.form).then(t=>{this.$emit("save",t.data),this.modals.action=!1,this.$snotify.success(this.$lang.app.saveSuccessMsg)})},fetchCategory(t){return this.axios.get(this.$urls.storeSettingsCategoriesEdit.replace(":storeId",this.$store.getters.store.id).replace(":categoryId",t)).then(e=>{this.form.fields=e.data.fields,this.form.matchCategoryId=e.data.matchCategory.id,this.matchCategory=e.data.matchCategory,e.data.icon&&(this.form.icon.id=e.data.icon.id,this.form.icon.fullPath=e.data.icon.fullPath,this.form.icon.type=e.data.icon.type)})}}},_withScopeId=t=>(pushScopeId("data-v-adb67ad8"),t=t(),popScopeId(),t),_hoisted_1$3={class:"form-group"},_hoisted_2$3={class:"form-label"},_hoisted_3$3=_withScopeId(()=>createBaseVNode("span",{class:"text-danger"},"*",-1)),_hoisted_4$1={class:"form-group"},_hoisted_5$1={class:"form-label"},_hoisted_6$1=_withScopeId(()=>createBaseVNode("span",{class:"text-danger"},"*",-1)),_hoisted_7$1={class:"form-group"},_hoisted_8$1={class:"form-check"},_hoisted_9={class:"form-check-label",for:"has-color"},_hoisted_10={class:"form-group"},_hoisted_11={class:"form-check"},_hoisted_12={class:"form-check-label",for:"active"},_hoisted_13={class:"text-right w-100"},_hoisted_14={type:"submit",class:"btn btn-success"};function _sfc_render$2(t,e,l,c,n,i){const s=resolveComponent("category-select"),o=resolveComponent("size-select"),a=resolveComponent("modal");return n.modals.action?(openBlock(),createBlock(a,{key:0,modelValue:n.modals.action,"onUpdate:modelValue":e[7]||(e[7]=g=>n.modals.action=g),"modal-title":l.category?t.$lang.app.categoryEditing:t.$lang.app.categoryAdding,"disable-backdrop-close":""},{default:withCtx(()=>[createBaseVNode("form",{onSubmit:e[6]||(e[6]=withModifiers((...g)=>i.save&&i.save(...g),["prevent"])),class:"p-4"},[createBaseVNode("div",_hoisted_1$3,[createBaseVNode("label",_hoisted_2$3,[createTextVNode(toDisplayString(t.$lang.app.name),1),_hoisted_3$3]),withDirectives(createBaseVNode("input",{required:"",type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=g=>n.form.name=g)},null,512),[[vModelText,n.form.name]])]),createBaseVNode("div",_hoisted_4$1,[createBaseVNode("label",_hoisted_5$1,[createTextVNode(toDisplayString(t.$lang.app.matchCategoryId),1),_hoisted_6$1]),createVNode(s,{modelValue:n.form.matchCategoryId,"onUpdate:modelValue":e[1]||(e[1]=g=>n.form.matchCategoryId=g),"match-category":n.matchCategory},null,8,["modelValue","match-category"])]),createBaseVNode("div",_hoisted_7$1,[createBaseVNode("div",_hoisted_8$1,[withDirectives(createBaseVNode("input",{"onUpdate:modelValue":e[2]||(e[2]=g=>n.form.hasColor=g),class:"form-check-input",type:"checkbox",id:"has-color"},null,512),[[vModelCheckbox,n.form.hasColor]]),createBaseVNode("label",_hoisted_9,toDisplayString(t.$lang.app.hasColor),1)])]),createVNode(o,{modelValue:n.form.sizeFieldId,"onUpdate:modelValue":e[3]||(e[3]=g=>n.form.sizeFieldId=g)},null,8,["modelValue"]),createBaseVNode("div",_hoisted_10,[createBaseVNode("div",_hoisted_11,[withDirectives(createBaseVNode("input",{"onUpdate:modelValue":e[4]||(e[4]=g=>n.form.active=g),class:"form-check-input",type:"checkbox",id:"active"},null,512),[[vModelCheckbox,n.form.active]]),createBaseVNode("label",_hoisted_12,toDisplayString(t.$lang.app.active),1)])]),createBaseVNode("div",_hoisted_13,[createBaseVNode("button",_hoisted_14,toDisplayString(t.$lang.app.save),1),createBaseVNode("button",{type:"button",onClick:e[5]||(e[5]=g=>n.modals.action=!1),class:"btn btn-light"},toDisplayString(t.$lang.app.cancel),1)])],32)]),_:1},8,["modelValue","modal-title"])):createCommentVNode("",!0)}var StoreCategoryModal=_export_sfc(_sfc_main$3,[["render",_sfc_render$2],["__scopeId","data-v-adb67ad8"]]);const _sfc_main$2={name:"FieldsModal",components:{Modal},props:{modelValue:Boolean,category:Object},data(){return{modals:{action:!1,field:!1,group:!1},groups:[],fields:[],groupForm:{name:""}}},watch:{"modals.action"(t){this.$emit("update:modelValue",t)},modelValue(t){this.modals.action=t}},created(){this.modals.action=this.modelValue},methods:{saveGroup(){this.groups.push(u({},this.groupForm)),this.modals.group=!1,this.resetGroupForm()},resetGroupForm(){this.groupForm.name=""}}},_hoisted_1$2={class:"p-3"},_hoisted_2$2=createBaseVNode("i",{class:"la la-plus"},null,-1),_hoisted_3$2=createBaseVNode("i",{class:"la la-plus"},null,-1),_hoisted_4={class:"list-group mt-1"},_hoisted_5={class:"form-group"},_hoisted_6={class:"form-label"},_hoisted_7=createBaseVNode("span",{class:"required"},"*",-1),_hoisted_8={type:"submit",class:"btn btn-primary"};function _sfc_render$1(t,e,l,c,n,i){const s=resolveComponent("modal");return openBlock(),createElementBlock(Fragment,null,[createVNode(s,{modelValue:n.modals.action,"onUpdate:modelValue":e[2]||(e[2]=o=>n.modals.action=o),"modal-title":l.category.name+": "+t.$lang.app.fieldsSettings},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$2,[createBaseVNode("button",{onClick:e[0]||(e[0]=o=>n.modals.group=!0),type:"button",class:"btn btn-primary"},[_hoisted_2$2,createTextVNode(" "+toDisplayString(t.$lang.app.addGroup),1)]),createBaseVNode("button",{onClick:e[1]||(e[1]=o=>n.modals.field=!0),type:"button",class:"btn btn-success"},[_hoisted_3$2,createTextVNode(" "+toDisplayString(t.$lang.app.addField),1)]),createBaseVNode("div",_hoisted_4,[(openBlock(!0),createElementBlock(Fragment,null,renderList(this.groups,(o,a)=>(openBlock(),createElementBlock("div",{key:a,class:"list-group-item"},toDisplayString(o.name),1))),128))])])]),_:1},8,["modelValue","modal-title"]),createVNode(s,{modelValue:n.modals.field,"onUpdate:modelValue":e[3]||(e[3]=o=>n.modals.field=o),"modal-title":t.$lang.app.addingField},null,8,["modelValue","modal-title"]),createVNode(s,{modelValue:n.modals.group,"onUpdate:modelValue":e[7]||(e[7]=o=>n.modals.group=o),"modal-title":t.$lang.app.addingGroup},{default:withCtx(()=>[createBaseVNode("form",{class:"p-3",onSubmit:e[6]||(e[6]=withModifiers((...o)=>i.saveGroup&&i.saveGroup(...o),["prevent"]))},[createBaseVNode("div",_hoisted_5,[createBaseVNode("label",_hoisted_6,[createTextVNode(toDisplayString(t.$lang.app.name)+" ",1),_hoisted_7]),withDirectives(createBaseVNode("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.groupForm.name=o),type:"text",class:"form-control",required:""},null,512),[[vModelText,n.groupForm.name]])]),createBaseVNode("button",_hoisted_8,toDisplayString(t.$lang.app.save),1),createBaseVNode("button",{onClick:e[5]||(e[5]=o=>n.modals.group=!1),type:"button",class:"btn btn-light"},toDisplayString(t.$lang.app.cancel),1)],32)]),_:1},8,["modelValue","modal-title"])],64)}var FieldsModal=_export_sfc(_sfc_main$2,[["render",_sfc_render$1]]);const _sfc_main$1={name:"StoreCategories",components:{FieldsModal,StoreCategoryModal,StoreCategoryTree},computed:{store(){return this.$store.getters.store}},data(){return{open:null,modals:{action:!1,fields:!1},parent:null,category:null,categories:[],selfDropped:!1,dragging:!1}},created(){this.fetchCategories()},methods:{fetchCategories(){return this.axios.get(this.$urls.storeSettingsCategories.replace(":storeId",this.store.id)).then(t=>{this.categories=t.data})},saved(t){if(this.parent){const e=this.parent.children.findIndex(l=>l.id===t.id);e>-1?this.parent.children.splice(e,1,t):this.parent.children.push(t)}else{const e=this.categories.findIndex(l=>l.id===t.id);e>-1?this.categories.splice(e,1,t):this.categories.push(t)}},showActionModal(t,e){this.parent=t||null,this.category=e,this.modals.action=!0},showFieldsModal(t){this.category=t,this.modals.fields=!0}}},_hoisted_1$1={class:"widget"},_hoisted_2$1={class:"widget-title"},_hoisted_3$1={class:"widget-body position-relative"};function _sfc_render(t,e,l,c,n,i){const s=resolveComponent("store-category-tree"),o=resolveComponent("store-category-modal"),a=resolveComponent("fields-modal");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2$1,[createBaseVNode("button",{onClick:e[0]||(e[0]=g=>i.showActionModal()),class:"btn btn-success",type:"button"},toDisplayString(t.$lang.app.add),1)]),createBaseVNode("div",_hoisted_3$1,[createVNode(s,{categories:n.categories,"onUpdate:categories":e[1]||(e[1]=g=>n.categories=g),"show-action-modal":i.showActionModal,"show-fields-modal":i.showFieldsModal,"self-dropped":n.selfDropped,"onUpdate:self-dropped":e[2]||(e[2]=g=>n.selfDropped=g),dragging:n.dragging,"onUpdate:dragging":e[3]||(e[3]=g=>n.dragging=g)},null,8,["categories","show-action-modal","show-fields-modal","self-dropped","dragging"])])]),n.modals.action?(openBlock(),createBlock(o,{key:0,modelValue:n.modals.action,"onUpdate:modelValue":e[4]||(e[4]=g=>n.modals.action=g),"parent-id":n.parent?n.parent.id:null,category:n.category,onSave:i.saved},null,8,["modelValue","parent-id","category","onSave"])):createCommentVNode("",!0),n.modals.fields?(openBlock(),createBlock(a,{key:1,modelValue:n.modals.fields,"onUpdate:modelValue":e[5]||(e[5]=g=>n.modals.fields=g),category:n.category},null,8,["modelValue","category"])):createCommentVNode("",!0)],64)}var StoreCategories=_export_sfc(_sfc_main$1,[["render",_sfc_render]]);const _hoisted_1={class:"container-fluid"},_hoisted_2={class:"row"},_hoisted_3={class:"col-xxl-4"},_sfc_main={async setup(t){let e,l;const c=useStore(),n=useRoute(),i=([e,l]=withAsyncContext(()=>c.dispatch("fetchStore",n.params.store)),e=await e,l(),e),s=useLang(),o=[{label:s.app.stores,route:{name:"stores.index"}},{label:i.name,route:{name:"stores.show",params:{store:i.slug}}},{label:s.app.settings,route:{name:"stores.settings.index",params:{store:i.slug}}},{label:s.app.categories}];return(a,g)=>(openBlock(),createElementBlock(Fragment,null,[createVNode(Store),createVNode(_sfc_main$9,{breadcrumbs:o,"is-store":""}),createBaseVNode("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createBaseVNode("div",_hoisted_3,[createVNode(StoreCategories)])])])],64))}};export{_sfc_main as default};