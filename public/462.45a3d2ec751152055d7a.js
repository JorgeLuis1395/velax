"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[462],{2462:(V,d,o)=>{o.r(d),o.d(d,{AuthSignInModule:()=>H});var c={};o.r(c),o.d(c,{email:()=>b,emailRequired:()=>q,emailValid:()=>Q,forgotPass:()=>N,linkNewAcount:()=>T,newAcount:()=>C,pass:()=>w,passRequired:()=>U,rememberMe:()=>J,textbutton:()=>F,title:()=>S});var l=o(3423),p=o(1095),f=o(7539),m=o(8295),h=o(6627),I=o(9983),A=o(4885),Z=o(2255),x=o(588),v=o(4466),s=o(3679),y=o(8288);const S="Iniciar Sesi\xf3n",C="\xbfNo tienes una cuenta?",T="Reg\xedstrate",b="Direcci\xf3n de correo electr\xf3nico",w="Contrase\xf1a",J="Recordarme",N="\xbfOlvidaste tu contrase\xf1a?",F="Iniciar sesi\xf3n",q="Direcci\xf3n de correo electr\xf3nico requerido",U="Contrase\xf1a requerida",Q="Por favor, introduce una direcci\xf3n de correo electr\xf3nico v\xe1lida";var t=o(7716),j=o(8951),M=o(8583),R=o(3994);const Y=["signInNgForm"];function O(n,r){if(1&n&&(t.TgZ(0,"fuse-alert",24),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",e.alert.type)("@shake","error"===e.alert.type),t.xp6(1),t.hij(" ",e.alert.message," ")}}function k(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.translateSignIn.emailRequired," ")}}function L(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.translateSignIn.emailValid," ")}}function P(n,r){1&n&&t._UZ(0,"mat-icon",25),2&n&&t.Q6J("svgIcon","heroicons_solid:eye")}function z(n,r){1&n&&t._UZ(0,"mat-icon",25),2&n&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function B(n,r){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.translateSignIn.textbutton," ")}}function G(n,r){1&n&&t._UZ(0,"mat-progress-spinner",26),2&n&&t.Q6J("diameter",24)("mode","indeterminate")}const E=function(){return["/forgot-password"]},D=[{path:"",component:(()=>{class n{constructor(e,i,a,u){this._activatedRoute=e,this._authService=i,this._formBuilder=a,this._router=u,this.alert={type:"success",message:""},this.showAlert=!1,this.translateSignIn=c}ngOnInit(){this.signInForm=this._formBuilder.group({email:["",[s.kI.required,s.kI.email]],password:["",s.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(e=>{const i=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(i)},()=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Correo electr\xf3nico y/o contrase\xf1a incorectos"},this.showAlert=!0}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(j.e),t.Y36(s.qu),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["auth-sign-in"]],viewQuery:function(e,i){if(1&e&&t.Gf(Y,5),2&e){let a;t.iGM(a=t.CRH())&&(i.signInNgForm=a.first)}},decls:37,vars:22,consts:[[1,"fondo"],[1,"md:flex","md:items-center","md:justify-center","md:w-full","md:h-full","sm:p-12","sm:w-auto"],[1,"bg","card","shadow","px-4","py-8","rounded-2xl","sm:rounded-2xl","sm:bg-card","bg-bgColor","dark:border-l","items-center","justify-center"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0","items-center","justify-center"],[1,"w-full","flex","items-center","justify-center"],[1,"w-40"],["src","assets/images/logo/logo2.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-black"],[1,"flex","items-baseline","mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",1,"bg-white",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",1,"bg-white",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],[1,"text-md","font-medium","text-colorCompany","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.qZA(),t.TgZ(7,"div",7),t._uU(8),t.qZA(),t._UZ(9,"div",8),t.YNc(10,O,2,5,"fuse-alert",9),t.TgZ(11,"form",10,11),t.TgZ(13,"mat-form-field",12),t.TgZ(14,"mat-label"),t._uU(15),t.qZA(),t._UZ(16,"input",13),t.YNc(17,k,2,1,"mat-error",14),t.YNc(18,L,2,1,"mat-error",14),t.qZA(),t.TgZ(19,"mat-form-field",12),t.TgZ(20,"mat-label"),t._uU(21),t.qZA(),t._UZ(22,"input",15,16),t.TgZ(24,"button",17),t.NdJ("click",function(){t.CHM(a);const g=t.MAs(23);return g.type="password"===g.type?"text":"password"}),t.YNc(25,P,1,1,"mat-icon",18),t.YNc(26,z,1,1,"mat-icon",18),t.qZA(),t.TgZ(27,"mat-error"),t._uU(28),t.qZA(),t.qZA(),t.TgZ(29,"div",19),t.TgZ(30,"mat-checkbox",20),t._uU(31),t.qZA(),t.TgZ(32,"a",21),t._uU(33),t.qZA(),t.qZA(),t.TgZ(34,"button",22),t.NdJ("click",function(){return i.signIn()}),t.YNc(35,B,2,1,"span",14),t.YNc(36,G,1,2,"mat-progress-spinner",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const a=t.MAs(23);t.xp6(8),t.Oqu(i.translateSignIn.title),t.xp6(2),t.Q6J("ngIf",i.showAlert),t.xp6(1),t.Q6J("formGroup",i.signInForm),t.xp6(4),t.Oqu(i.translateSignIn.email),t.xp6(1),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("email")),t.xp6(3),t.Oqu(i.translateSignIn.pass),t.xp6(1),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===a.type),t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(2),t.hij(" ",i.translateSignIn.passRequired," "),t.xp6(2),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(1),t.hij(" ",i.translateSignIn.rememberMe," "),t.xp6(1),t.Q6J("routerLink",t.DdM(21,E)),t.xp6(1),t.hij("",i.translateSignIn.forgotPass," "),t.xp6(1),t.Q6J("color","primary")("disabled",i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",i.signInForm.disabled)}},directives:[M.O5,s._Y,s.JL,s.sg,m.KE,m.hX,I.Nt,s.Fj,s.JJ,s.u,p.lW,m.R9,m.TO,f.oG,l.yS,R.W,h.Hw,A.Ou],styles:[".prueba{background:red}.fondo{width:100%;height:100%;margin:0;padding:0;background-color:#0097d3;background-size:cover;font-family:sans-serif;height:100vh}\n"],encapsulation:2,data:{animation:y.L}}),n})()}];let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(D),p.ot,f.p9,m.lN,h.Ps,I.c,A.Cq,Z.J,x.fC,v.m]]}),n})()}}]);