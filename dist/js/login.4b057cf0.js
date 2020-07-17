(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"4bd4":function(t,e,s){"use strict";var a=s("58df"),i=s("7e2b"),r=s("3206");e["a"]=Object(a["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"578a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){return t.close(e)}}},[s("v-icon",[t._v("mdi-close")])],1),s("v-toolbar-title",[t._v("Login and Start Shopping!")])],1),s("v-divider"),s("v-container",{attrs:{fluid:""}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:"","append-icon":"mdi-email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-text-field",{attrs:{"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:t.passwordRules,type:t.showPassword?"text":"password",label:"Password",hint:"At least 6 characters",counter:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("div",{staticClass:"text-xs-center"},[s("v-btn",{attrs:{color:"accent lighten-1",disabled:!t.valid},on:{click:t.submit}},[t._v("\n          Login\n          "),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-lock-open")])],1)],1)],1)],1)],1)},i=[],r=s("2f62"),o={name:"login",data(){return{valid:!0,email:"",emailRules:[t=>!!t||"E-mail is required",t=>/([a-zA-Z0-9_]{1,})(@)([a-zA-Z0-9_]{2,}).([a-zA-Z0-9_]{2,})+/.test(t)||"E-mail must be valid"],showPassword:!1,password:"",passwordRules:[t=>!!t||"Password required.",t=>t&&t.length>=6||"Min 6 characters"]}},computed:{...Object(r["c"])({user:"auth/user",prevUrl:"prevUrl"})},methods:{...Object(r["b"])({setAlert:"alert/set",setAuth:"auth/set"}),submit(){if(this.$refs.form.validate()){let t={email:this.email,password:this.password};this.axios.post("/login",t).then(t=>{let{data:e}=t.data;this.setAuth(e),this.user.id>0?(this.setAlert({status:!0,color:"success",text:"Login success"}),this.prevUrl.length>0&&this.$router.push(this.prevUrl),this.close()):this.setAlert({status:!0,color:"error",text:"Login failed"})}).catch(t=>{let{data:e}=t.response;this.setAlert({status:!0,color:"error",text:e.message})})}},close(){this.$emit("closed",!1)}}},l=o,d=s("2877"),n=s("6544"),u=s.n(n),h=s("8336"),c=s("b0af"),p=s("a523"),m=s("ce7e"),v=s("4bd4"),f=s("132d"),w=s("8654"),b=s("71d9"),g=s("2a7f"),_=Object(d["a"])(l,a,i,!1,null,null,null);e["default"]=_.exports;u()(_,{VBtn:h["a"],VCard:c["a"],VContainer:p["a"],VDivider:m["a"],VForm:v["a"],VIcon:f["a"],VTextField:w["a"],VToolbar:b["a"],VToolbarTitle:g["a"]})}}]);
//# sourceMappingURL=login.4b057cf0.js.map