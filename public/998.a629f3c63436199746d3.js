"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[998],{9998:(pe,f,o)=>{o.r(f),o.d(f,{DriversModule:()=>me});var l=o(8583),d=o(3423),m=o(805),e=o(7716),Z=o(3729),p=o(5593),g=o(1769),h=o(9529),A=o(2453),T=o(369),_=o(1740),x=o(7489),C=o(1795);function y(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",10),e.TgZ(1,"span",11),e._UZ(2,"i",12),e.TgZ(3,"input",13),e.NdJ("input",function(s){return e.CHM(t),e.oxw(),e.MAs(9).filterGlobal(s.target.value,"contains")}),e.qZA(),e.qZA(),e.qZA()}}function J(r,i){if(1&r&&(e.TgZ(0,"th",15),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&r){const t=i.$implicit;e.Q6J("id",t),e.xp6(1),e.Oqu(e.lcZ(2,2,t))}}function Q(r,i){if(1&r&&(e.TgZ(0,"tr"),e.YNc(1,J,3,4,"th",14),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.headersTable)}}function Y(r,i){1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._UZ(2,"p-skeleton"),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"p-skeleton"),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"p-skeleton"),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"p-skeleton"),e.qZA(),e.qZA())}const L=function(r){return["/driver/edit-driver",r]};function S(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"button",17),e.TgZ(9,"button",18),e.NdJ("click",function(s){e.CHM(t);const u=e.oxw().$implicit;return e.oxw().confirm(s,u.id)}),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.fullName),e.xp6(2),e.Oqu(t.ci),e.xp6(2),e.Oqu(t.type.name),e.xp6(2),e.Q6J("routerLink",e.VKq(4,L,t.id))}}function D(r,i){if(1&r&&(e.YNc(0,Y,9,0,"tr",16),e.YNc(1,S,10,6,"tr",16)),2&r){const t=e.oxw();e.Q6J("ngIf",null===t.vehiclesAll),e.xp6(1),e.Q6J("ngIf",null!==t.vehiclesAll)}}const E=function(){return["/driver/add-driver"]},P=function(){return["ci","fullName","type.name"]},O=function(){return[10,20,40]};let k=(()=>{class r{constructor(t,a,s){this.driversService=t,this.confirmationService=a,this.messageService=s,this.headersTable=["nombre","identificacion","Tipo","acciones"]}get vehiclesAll(){return this.driversService.driver}ngOnInit(){this.driversService.getAllDrivers()}confirm(t,a){this.confirmationService.confirm({target:t.target,message:"Estas seguro de eliminar el registro de manera permanente?",icon:"pi pi-exclamation-triangle",acceptLabel:"Si, Estoy seguro.",rejectLabel:"No",accept:()=>{this.driversService.deleteDrivers(a).subscribe(()=>{this.driversService.allAsis=this.driversService.allAsis.filter(s=>s.id!==a),this.messageService.add({severity:"success",summary:"\xc9xito!",detail:"El registro se ha eliminado de manera correcta"}),this.driversService.getAllDrivers()},()=>{this.messageService.add({severity:"error",summary:"Algo salio mal!",detail:"No se pudo eliminar el registro. Intentalo m\xe1s tarde"})})}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(Z.P),e.Y36(m.YP),e.Y36(m.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-list"]],features:[e._Bn([m.YP,m.ez])],decls:15,vars:11,consts:[[1,"p-5","w-screen"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Agregar","icon","pi pi-plus","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"w-full","pt-3"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} al {last} de {totalRecords} registros","scrollHeight","450px",3,"scrollable","value","paginator","globalFilterFields","rows","showCurrentPageReport","rowsPerPageOptions"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",3,"input"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],[4,"ngIf"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-outlined","mr-2",3,"routerLink"],["pButton","","pRipple","","type","button","icon","pi pi-trash",1,"p-button-rounded","p-button-outlined","p-button-danger",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e.TgZ(3,"h1",2),e._uU(4,"Administraci\xf3n de conductores/ayudantes"),e.qZA(),e._UZ(5,"p-button",3),e.qZA(),e._UZ(6,"mat-divider"),e.qZA(),e.TgZ(7,"div",4),e.TgZ(8,"p-table",5,6),e.YNc(10,y,4,0,"ng-template",7),e.YNc(11,Q,2,1,"ng-template",8),e.YNc(12,D,2,2,"ng-template",9),e.qZA(),e._UZ(13,"p-toast"),e._UZ(14,"p-confirmPopup"),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(8,E)),e.xp6(3),e.Q6J("scrollable",null!==a.vehiclesAll)("value",null===a.vehiclesAll?a.headersTable.concat(a.headersTable):a.vehiclesAll)("paginator",!0)("globalFilterFields",e.DdM(9,P))("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(10,O)))},directives:[p.zx,d.rH,g.d,h.iA,m.jx,A.FN,T.P,_.o,l.sg,l.O5,x.O,p.Hq,C.H],pipes:[l.rS],encapsulation:2}),r})(),R=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-drivers"]],decls:1,vars:0,template:function(t,a){1&t&&e._UZ(0,"router-outlet")},directives:[d.lC],encapsulation:2}),r})();var M=o(1512),n=o(3679),c=o(8295),b=o(9983),q=o(1095),j=o(6627),v=o(4885),B=o(3425),z=o(2210),w=o(2091),I=o(7441),H=o(3190),N=o(7001),X=o(2458);function $(r,i){1&r&&(e.TgZ(0,"div",3),e.TgZ(1,"div",4),e._UZ(2,"mat-spinner",5),e.qZA(),e.qZA()),2&r&&(e.xp6(2),e.Q6J("diameter",50)("mode","indeterminate"))}function V(r,i){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un nombre "),e.qZA())}function G(r,i){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese una c\xe9dula "),e.qZA())}function K(r,i){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese una c\xe9dula v\xe1lida "),e.qZA())}function W(r,i){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese una c\xe9dula v\xe1lida "),e.qZA())}function ee(r,i){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Campo obligatorio "),e.qZA())}function te(r,i){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un n\xfamero de contacto "),e.qZA())}function re(r,i){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un correo valido "),e.qZA())}function ie(r,i){if(1&r&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function oe(r,i){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor selecione un rol "),e.qZA())}function ne(r,i){1&r&&(e.TgZ(0,"span"),e._uU(1," Guardar "),e.qZA())}function ae(r,i){1&r&&e._UZ(0,"mat-progress-spinner",5),2&r&&e.Q6J("diameter",24)("mode","indeterminate")}const se=function(){return["/driver"]};function le(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",6),e.TgZ(2,"h1",7),e._uU(3,"Agregar personal"),e.qZA(),e._UZ(4,"p-button",8),e.qZA(),e._UZ(5,"mat-divider"),e.TgZ(6,"form",9,10),e.TgZ(8,"mat-form-field",11),e.TgZ(9,"mat-label"),e._uU(10,"Nombre Completo"),e.qZA(),e._UZ(11,"input",12),e.YNc(12,V,2,0,"mat-error",2),e.qZA(),e.TgZ(13,"mat-form-field"),e.TgZ(14,"mat-label"),e._uU(15,"C\xe9dula"),e.qZA(),e._UZ(16,"input",12),e.YNc(17,G,2,0,"mat-error",2),e.YNc(18,K,2,0,"mat-error",2),e.YNc(19,W,2,0,"mat-error",2),e.qZA(),e.TgZ(20,"mat-form-field"),e.TgZ(21,"mat-label"),e._uU(22,"Direcci\xf3n"),e.qZA(),e._UZ(23,"input",12),e.YNc(24,ee,2,0,"mat-error",2),e.qZA(),e.TgZ(25,"mat-form-field"),e.TgZ(26,"mat-label"),e._uU(27,"N\xfamero de contacto"),e.qZA(),e._UZ(28,"input",12),e.YNc(29,te,2,0,"mat-error",2),e.qZA(),e.TgZ(30,"mat-form-field"),e.TgZ(31,"mat-label"),e._uU(32,"Correo electr\xf3nico"),e.qZA(),e._UZ(33,"input",13),e.YNc(34,re,2,0,"mat-error",2),e.qZA(),e.TgZ(35,"mat-form-field"),e.TgZ(36,"mat-label"),e._uU(37,"Rol"),e.qZA(),e.TgZ(38,"mat-select",14),e.YNc(39,ie,2,2,"mat-option",15),e.qZA(),e.YNc(40,oe,2,0,"mat-error",2),e.qZA(),e._UZ(41,"div"),e.TgZ(42,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().addVehicle()}),e.YNc(43,ne,2,0,"span",2),e.YNc(44,ae,1,2,"mat-progress-spinner",17),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("routerLink",e.DdM(21,se)),e.xp6(2),e.Q6J("formGroup",t.driverForm),e.xp6(5),e.Q6J("formControlName","fullName"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("fullName").hasError("required")),e.xp6(4),e.Q6J("formControlName","ci"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("ci").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("ci").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("ci").hasError("maxlength")),e.xp6(4),e.Q6J("formControlName","address"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("address").hasError("required")),e.xp6(4),e.Q6J("formControlName","phone"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("phone").hasError("required")),e.xp6(4),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","type"),e.xp6(1),e.Q6J("ngForOf",t.typeDrivers),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("type").hasError("required")),e.xp6(2),e.Q6J("color","primary")("disabled",t.driverForm.disabled),e.xp6(1),e.Q6J("ngIf",!t.driverForm.disabled),e.xp6(1),e.Q6J("ngIf",t.driverForm.disabled)}}let F=(()=>{class r{constructor(t,a,s,u,U){this._formBuilder=t,this.driverService=a,this.router=s,this.snackBar=u,this.activatedRoute=U,this.driverId="",this.loading=!0,this.typeDrivers=[]}ngOnInit(){if(this.driverService.getCatalogo("TYPEDRIVER").subscribe(t=>this.typeDrivers=t.catalog.detailCatalog),!this.router.url.includes("edit-driver"))return this.loading=!1,void(this.driverForm=this._formBuilder.group({fullName:[,[n.kI.required]],ci:["",[n.kI.required,n.kI.maxLength(10),n.kI.minLength(10)]],address:["",[n.kI.required]],licence:[""],phone:[""],email:["",[n.kI.email]],type:["",[n.kI.required]],status:[!0]}));this.activatedRoute.params.pipe((0,H.w)(({id:t})=>this.driverService.getDriverId(t))).subscribe(t=>{this.driverForm=this._formBuilder.group({fullName:[t.driver.fullName,[n.kI.required]],ci:[t.driver.ci,[n.kI.required,n.kI.maxLength(10),n.kI.minLength(10)]],address:[t.driver.address,[n.kI.required]],licence:[t.driver.licence],phone:[t.driver.phone],email:[t.driver.email,[n.kI.email]],type:[t.driver.type.id,[n.kI.required]],status:[t.driver.status]}),this.driverId=t.driver.id,this.loading=!1})}addVehicle(){this.driverForm.invalid||(this.driverForm.disable(),""===this.driverId?this.driverService.addDriver(this.driverForm.value).subscribe(t=>{this.router.navigate(["/driver"]),this.mostrarSnakbar("Registro creado")}):this.driverService.updateDriver(this.driverId,this.driverForm.value).subscribe(t=>{this.router.navigate(["/driver"]),this.mostrarSnakbar("Registro actualizado")}))}mostrarSnakbar(t){this.snackBar.open(t,"ok!",{duration:2500})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.qu),e.Y36(Z.P),e.Y36(d.F0),e.Y36(N.ux),e.Y36(d.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add"]],decls:3,vars:2,consts:[[1,"p-5","w-screen"],["class","grid justify-items-stretch",4,"ngIf"],[4,"ngIf"],[1,"grid","justify-items-stretch"],[1,"justify-self-center","pt-50"],[3,"diameter","mode"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Regresar","icon","pi pi-angle-left","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"grid","gap-4","md:grid-cols-2","sm:grid-cols-2","mt-2","bg-white","p-3",3,"formGroup"],["vehicleInNgForm","ngForm"],[1,"w-full","col-span-2"],["type","text","matInput","",3,"formControlName"],["type","email","matInput","",3,"formControlName"],["name","rol",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","",1,"fuse-mat-button-medium","mt-6","w-1/2",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[3,"value"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.YNc(1,$,3,2,"div",1),e.YNc(2,le,45,22,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",a.loading),e.xp6(1),e.Q6J("ngIf",!a.loading))},directives:[l.O5,v.$g,p.zx,d.rH,g.d,n._Y,n.JL,n.sg,c.KE,c.hX,b.Nt,n.Fj,n.JJ,n.u,I.gD,l.sg,q.lW,c.TO,X.ey,v.Ou],encapsulation:2}),r})();const de=[{path:"",component:R,children:[{path:"",component:k},{path:"add-driver",component:F},{path:"edit-driver/:id",component:F}]}];let me=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.Bz.forChild(de),l.ez,g.t,p.hJ,C.T,x.m,h.U$,l.ez,T.n,A.EV,M.S,n.UX,c.lN,b.c,q.ot,v.Cq,B.gz,_.j,j.Ps,z.kW,w.p0,I.LD,N.ZX]]}),r})()}}]);