"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[8991],{2255:(C,r,t)=>{t.d(r,{J:()=>p}),t(8288);var l=t(8583),d=t(7716);let p=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[l.ez]]}),e})()},8991:(C,r,t)=>{t.r(r),t.d(r,{AuthSignOutModule:()=>F});var c=t(3423),g=t(1095),f=t(2255),h=t(4466),x=t(9765),v=t(6797),b=t(8939),l=t(409),d=t(6782),p=t(3342),e=t(7716),o=t(8951),i=t(8583);function m(n,s){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"i18nPlural"),e.BQk()),2&n){const a=e.oxw();e.xp6(1),e.hij(" Redireccionando en ",e.xi3(2,1,a.countdown,a.countdownMapping)," ")}}function y(n,s){1&n&&(e.ynx(0),e._uU(1," Ahora te vamos a redirigir! "),e.BQk())}const w=function(){return["/sign-in"]},A=[{path:"",component:(()=>{class n{constructor(a,u){this._authService=a,this._router=u,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new x.xQ}ngOnInit(){this._authService.signOut(),(0,v.H)(1e3,1e3).pipe((0,b.x)(()=>{this._router.navigate(["sign-in"])}),(0,l.o)(()=>this.countdown>0),(0,d.R)(this._unsubscribeAll),(0,p.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(o.e),e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-bgColor"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,""],["src","assets/images/logo/logoCompany.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(a,u){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Haz cerrado sesi\xf3n! "),e.qZA(),e.TgZ(7,"div",6),e.YNc(8,m,3,4,"ng-container",7),e.YNc(9,y,2,0,"ng-container",7),e.qZA(),e.TgZ(10,"div",8),e.TgZ(11,"span"),e._uU(12,"Go to"),e.qZA(),e.TgZ(13,"a",9),e._uU(14,"Iniciar Sesi\xf3n "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a&&(e.xp6(8),e.Q6J("ngIf",u.countdown>0),e.xp6(1),e.Q6J("ngIf",0===u.countdown),e.xp6(4),e.Q6J("routerLink",e.DdM(3,w)))},directives:[i.O5,c.yS],pipes:[i.Gx],encapsulation:2}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.Bz.forChild(A),g.ot,f.J,h.m]]}),n})()}}]);