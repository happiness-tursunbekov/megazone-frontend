import{M as u}from"./Modal.fddbc48a.js";import{r as p,o as c,c as d,a as s,N as r,b as f,w as h,n as l,O as m,P as g,e as n,t as v}from"./vendor.61f7b769.js";import{_}from"./index.53a73aea.js";const w={name:"Auth",components:{Modal:u},data(){return{modal:this.authModal,tabs:{signIn:{active:!0,form:{username:"",password:"",rememberMe:!1}},signUp:{active:!1,form:{username:"",password:"",name:""}}}}},computed:{user(){return this.$store.getters.user},authModal(){return this.$store.getters.authModal}},watch:{authModal(i){this.modal=i},modal(i){this.$store.dispatch(i?"showAuthModal":"hideAuthModal")}},methods:{selectTab(i){this.tabs.signIn.active=i==="signIn",this.tabs.signUp.active=i==="signUp"},signIn(){this.axios.post("api/auth/login",this.tabs.signIn.form).then(i=>{this.$cookie.setItem("token",i.data.token,1/0),this.$store.dispatch("setUser",i.data)})},signOut(){this.axios.get("api/auth/logout"),this.$cookie.removeItem("token"),this.$store.dispatch("resetUser")}}},k={class:"login"},I={key:0},y={class:"form-box"},x={class:"form-tab"},U={class:"nav nav-pills nav-fill nav-border-anim",role:"tablist"},M={class:"nav-item"},V={class:"nav-item"},C={class:"tab-content",id:"tab-content-5"},N={class:"form-group"},S=s("label",{for:"singin-email"},"Username or email address *",-1),q={class:"form-group"},L=s("label",{for:"singin-password"},"Password *",-1),O=s("div",{class:"form-footer"},[s("button",{type:"submit",class:"btn btn-outline-primary-2"},[s("span",null,"LOG IN"),s("i",{class:"icon-long-arrow-right"})]),s("div",{class:"custom-control custom-checkbox"},[s("input",{type:"checkbox",class:"custom-control-input",id:"signin-remember"}),s("label",{class:"custom-control-label",for:"signin-remember"},"Remember Me")]),s("a",{href:"#",class:"forgot-link"},"Forgot Your Password?")],-1),P=s("div",{class:"form-choice"},[s("p",{class:"text-center"},"or sign in with"),s("div",{class:"row"},[s("div",{class:"col-sm-6"},[s("a",{href:"#",class:"btn btn-login btn-g"},[s("i",{class:"icon-google"}),n(" Login With Google ")])]),s("div",{class:"col-sm-6"},[s("a",{href:"#",class:"btn btn-login btn-f"},[s("i",{class:"icon-facebook-f"}),n(" Login With Facebook ")])])])],-1),T=s("form",{action:"#"},[s("div",{class:"form-group"},[s("label",{for:"register-email"},"Your email address *"),s("input",{type:"email",class:"form-control",id:"register-email",name:"register-email",required:""})]),s("div",{class:"form-group"},[s("label",{for:"register-password"},"Password *"),s("input",{type:"password",class:"form-control",id:"register-password",name:"register-password",required:""})]),s("div",{class:"form-footer"},[s("button",{type:"submit",class:"btn btn-outline-primary-2"},[s("span",null,"SIGN UP"),s("i",{class:"icon-long-arrow-right"})]),s("div",{class:"custom-control custom-checkbox"},[s("input",{type:"checkbox",class:"custom-control-input",id:"register-policy",required:""}),s("label",{class:"custom-control-label",for:"register-policy"},[n("I agree to the "),s("a",{href:"#"},"privacy policy"),n(" *")])])])],-1),A=s("div",{class:"form-choice"},[s("p",{class:"text-center"},"or sign in with"),s("div",{class:"row"},[s("div",{class:"col-sm-6"},[s("a",{href:"#",class:"btn btn-login btn-g"},[s("i",{class:"icon-google"}),n(" Login With Google ")])]),s("div",{class:"col-sm-6"},[s("a",{href:"#",class:"btn btn-login btn-f"},[s("i",{class:"icon-facebook-f"}),n(" Login With Facebook ")])])])],-1),G=[T,A],W={key:1};function B(i,e,F,D,o,a){const b=p("modal");return c(),d("li",k,[a.user.id?(c(),d("div",W,[n(v(a.user.name)+" ",1),s("a",{href:"#",onClick:e[7]||(e[7]=r((...t)=>a.signOut&&a.signOut(...t),["prevent"]))},"\u0412\u044B\u0439\u0442\u0438")])):(c(),d("div",I,[s("a",{href:"#",onClick:e[0]||(e[0]=r(t=>o.modal=!0,["prevent"]))},"Sign in / Sign up"),f(b,{modelValue:o.modal,"onUpdate:modelValue":e[6]||(e[6]=t=>o.modal=t)},{default:h(()=>[s("div",y,[s("div",x,[s("ul",U,[s("li",M,[s("a",{onClick:e[1]||(e[1]=r(t=>a.selectTab("signIn"),["prevent"])),class:l([{active:o.tabs.signIn.active},"nav-link"]),id:"signin-tab","data-toggle":"tab",href:"#signin",role:"tab","aria-controls":"signin","aria-selected":"true"},"Sign In",2)]),s("li",V,[s("a",{onClick:e[2]||(e[2]=r(t=>a.selectTab("signUp"),["prevent"])),class:l([{active:o.tabs.signUp.active},"nav-link"]),id:"register-tab","data-toggle":"tab",href:"#register",role:"tab","aria-controls":"register","aria-selected":"false"},"Register",2)])]),s("div",C,[s("div",{class:l([{"active show":o.tabs.signIn.active},"tab-pane fade"]),id:"signin",role:"tabpanel","aria-labelledby":"signin-tab"},[s("form",{onSubmit:e[5]||(e[5]=r((...t)=>a.signIn&&a.signIn(...t),["prevent"]))},[s("div",N,[S,m(s("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>o.tabs.signIn.form.username=t),type:"text",class:"form-control",id:"singin-email",name:"singin-email",required:""},null,512),[[g,o.tabs.signIn.form.username]])]),s("div",q,[L,m(s("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>o.tabs.signIn.form.password=t),type:"password",class:"form-control",id:"singin-password",name:"singin-password",required:""},null,512),[[g,o.tabs.signIn.form.password]])]),O],32),P],2),s("div",{class:l([{"active show":o.tabs.signUp.active},"tab-pane fade"]),id:"register",role:"tabpanel","aria-labelledby":"register-tab"},G,2)])])])]),_:1},8,["modelValue"])]))])}var E=_(w,[["render",B]]);export{E as default};
