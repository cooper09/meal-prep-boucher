(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216460"],{c283:function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-container",{attrs:{"fill-height":""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[t("v-card",{staticClass:"elevation-12"},[t("v-toolbar",{attrs:{dark:"",color:"primary"}},[t("v-toolbar-title",[a._v("Join Form")])],1),t("v-card-text",[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:a.valid,callback:function(e){a.valid=e},expression:"valid"}},[t("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:a.emailRules,"data-cy":"joinEmailField",required:""},model:{value:a.email,callback:function(e){a.email=e},expression:"email"}}),t("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",required:"",rules:a.passwordRules,"data-cy":"joinPasswordField"},model:{value:a.password,callback:function(e){a.password=e},expression:"password"}})],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"primary",disabled:!a.valid,"data-cy":"joinSubmitBtn"},on:{click:a.submit}},[a._v("Join")])],1)],1)],1)],1)],1)},r=[],s={name:"Join",data:function(){return{valid:!1,email:"",password:"",emailRules:[function(a){return!!a||"E-mail is required"},function(a){return/.+@.+/.test(a)||"E-mail must be valid"}],passwordRules:[function(a){return!!a||"Password is required"},function(a){return a.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("userJoin",{email:this.email,password:this.password})}}},l=s,o=t("2877"),n=Object(o["a"])(l,i,r,!1,null,"7f2a7970",null);n.options.__file="Join.vue";e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d216460.a30ba373.js.map