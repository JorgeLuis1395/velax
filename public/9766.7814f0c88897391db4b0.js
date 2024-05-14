"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[9766],{9766:(ue,Z,n)=>{n.r(Z),n.d(Z,{UsersModule:()=>me});var u=n(8583),l=n(805),e=n(7716),g=n(7495),i=n(3679),m=n(3423);let w=(()=>{class t{constructor(r,s,a,d){this.userService=r,this.confirmationService=s,this.messageService=a,this._formBuilder=d,this.headersTable=["c\xe9dula","nombre","apellido","email","acciones"],this.newUserDialog=!1,this.updateUserDialog=!1}get usersAll(){return this.userService.users}ngOnInit(){this.userService.getAllUsers(),this.userService.getAllRoles(),this.userService.getAllEmpresas()}confirm(r,s){console.log(s),this.confirmationService.confirm({target:r.target,message:"Estas seguro de eliminar el registro de manera permanente?",icon:"pi pi-exclamation-triangle",acceptLabel:"Si, Estoy seguro.",rejectLabel:"No",accept:()=>{this.userService.deleteUser(s).subscribe(()=>{this.userService.users=this.userService.users.filter(a=>a.id!==s),this.messageService.add({severity:"success",summary:"\xc9xito!",detail:"El registro se ha eliminado de manera correcta"})},()=>{this.messageService.add({severity:"error",summary:"Algo salio mal!",detail:"No se pudo eliminar el registro. Intentalo m\xe1s tarde"})})}})}showNewUserDialog(){this.newUserDialog=!0}showUpdateUserDialog(r){this.updateUser.patchValue({id:r.id,nickname:r.nickname,nombre:r.nombre,apellido:r.apellido,cedula:r.cedula,email:r.email,password:"",numeroContacto:r.numeroContacto,estado:!0,idRol:r.idRol,empresa:r.empresa,direccion:r.direccion}),this.updateUserDialog=!0}closeDialog(r){this.updateUserDialog=r}closeNewUSer(r){this.newUserDialog=r}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(g.K),e.Y36(l.YP),e.Y36(l.ez),e.Y36(i.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-users"]],features:[e._Bn([l.YP,l.ez])],decls:1,vars:0,template:function(r,s){1&r&&e._UZ(0,"router-outlet")},directives:[m.lC],encapsulation:2}),t})();var f=n(1769),p=n(5593),_=n(1795),v=n(7489),A=n(9529),J=n(369),T=n(2453),Y=n(1512),c=n(8295),b=n(9983),x=n(1095),h=n(4885),Q=n(3425),U=n(1740),C=n(6627),q=n(2210),S=n(3190),I=n(7001);function y(t,o){1&t&&(e.TgZ(0,"div",3),e.TgZ(1,"div",4),e._UZ(2,"mat-spinner",5),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("diameter",50)("mode","indeterminate"))}function k(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un usuario "),e.qZA())}function E(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El campo es obligarotio * "),e.qZA())}function L(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El campo es obligarotio * "),e.qZA())}function R(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El campo es obligarotio * "),e.qZA())}function z(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," La c\xe9dula ingresada es incorrecta "),e.qZA())}function O(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El campo es obligarotio * "),e.qZA())}function D(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El email es incorrecto "),e.qZA())}function M(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El campo es obligarotio * "),e.qZA())}function P(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," La contrase\xf1a debe tener al menos 8 caracteres "),e.qZA())}function B(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El campo es obligarotio * "),e.qZA())}function j(t,o){if(1&t&&(e.TgZ(0,"div",26),e.TgZ(1,"label",33),e._uU(2,"Empresa"),e.qZA(),e._UZ(3,"p-dropdown",34),e.qZA()),2&t){const r=e.oxw(2);e.xp6(3),e.Q6J("options",r.empresas)("showClear",!0)("formControlName","empresa")}}function H(t,o){1&t&&(e.TgZ(0,"mat-form-field",14),e.TgZ(1,"mat-label"),e._uU(2,"Direcci\xf3n"),e.qZA(),e._UZ(3,"mat-icon",35),e._UZ(4,"input",36),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formControlName","direccion"))}function X(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1," Agregar "),e.qZA())}function K(t,o){1&t&&e._UZ(0,"mat-progress-spinner",5),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const $=function(){return["/users"]};function G(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",6),e.TgZ(2,"h1",7),e._uU(3,"Agregar Usuario"),e.qZA(),e._UZ(4,"p-button",8),e.qZA(),e._UZ(5,"mat-divider"),e.TgZ(6,"form",9,10),e.TgZ(8,"div",11),e.TgZ(9,"mat-form-field"),e.TgZ(10,"mat-label"),e._uU(11,"Usuario"),e.qZA(),e.TgZ(12,"mat-icon",12),e._uU(13,"person"),e.qZA(),e._UZ(14,"input",13),e.YNc(15,k,2,0,"mat-error",2),e.qZA(),e.TgZ(16,"mat-form-field",14),e.TgZ(17,"mat-label"),e._uU(18,"Nombre"),e.qZA(),e._UZ(19,"mat-icon",15),e._UZ(20,"input",16),e.YNc(21,E,2,0,"mat-error",2),e.qZA(),e.TgZ(22,"mat-form-field",14),e.TgZ(23,"mat-label"),e._uU(24,"Apellido"),e.qZA(),e._UZ(25,"mat-icon",15),e._UZ(26,"input",17),e.YNc(27,L,2,0,"mat-error",2),e.qZA(),e.TgZ(28,"mat-form-field",14),e.TgZ(29,"mat-label"),e._uU(30,"C\xe9dula"),e.qZA(),e._UZ(31,"mat-icon",18),e._UZ(32,"input",19),e.YNc(33,R,2,0,"mat-error",2),e.YNc(34,z,2,0,"mat-error",2),e.qZA(),e.TgZ(35,"mat-form-field",14),e.TgZ(36,"mat-label"),e._uU(37,"Email"),e.qZA(),e._UZ(38,"mat-icon",20),e._UZ(39,"input",21),e.YNc(40,O,2,0,"mat-error",2),e.YNc(41,D,2,0,"mat-error",2),e.qZA(),e.TgZ(42,"mat-form-field",14),e.TgZ(43,"mat-label"),e._uU(44,"Contrase\xf1a"),e.qZA(),e._UZ(45,"mat-icon",22),e._UZ(46,"input",23),e.YNc(47,M,2,0,"mat-error",2),e.YNc(48,P,2,0,"mat-error",2),e.qZA(),e.TgZ(49,"mat-form-field",14),e.TgZ(50,"mat-label"),e._uU(51,"Tel\xe9fono"),e.qZA(),e._UZ(52,"mat-icon",24),e._UZ(53,"input",25),e.YNc(54,B,2,0,"mat-error",2),e.qZA(),e.TgZ(55,"div",26),e.TgZ(56,"label",27),e._uU(57,"Rol"),e.qZA(),e._UZ(58,"p-dropdown",28),e.qZA(),e.YNc(59,j,4,3,"div",29),e.YNc(60,H,5,1,"mat-form-field",30),e._UZ(61,"br"),e.TgZ(62,"button",31),e.NdJ("click",function(){return e.CHM(r),e.oxw().handlerNewUser()}),e.YNc(63,X,2,0,"span",2),e.YNc(64,K,1,2,"mat-progress-spinner",32),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const r=e.oxw();e.xp6(4),e.Q6J("routerLink",e.DdM(29,$)),e.xp6(2),e.Q6J("formGroup",r.userForm),e.xp6(8),e.Q6J("formControlName","nickname"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("nickname").hasError("required")),e.xp6(5),e.Q6J("formControlName","nombre"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("nombre").hasError("required")),e.xp6(5),e.Q6J("formControlName","apellido"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("apellido").hasError("required")),e.xp6(5),e.Q6J("formControlName","cedula"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("cedula").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userForm.get("cedula").hasError("maxlength")||r.userForm.get("cedula").hasError("minlength")),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:at-symbol"),e.xp6(1),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userForm.get("email").hasError("email")),e.xp6(5),e.Q6J("formControlName","password"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("password").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userForm.get("password").hasError("minlength")),e.xp6(5),e.Q6J("formControlName","numeroContacto"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("numeroContacto").hasError("required")),e.xp6(4),e.Q6J("options",r.roles)("showClear",!0)("formControlName","idRol"),e.xp6(1),e.Q6J("ngIf",3===r.userForm.value.idRol.id||3===r.userForm.value.idRo),e.xp6(1),e.Q6J("ngIf",3===r.userForm.value.idRol.id||3===r.userForm.value.idRo),e.xp6(2),e.Q6J("color","primary")("disabled",r.userForm.disabled),e.xp6(1),e.Q6J("ngIf",!r.userForm.disabled),e.xp6(1),e.Q6J("ngIf",r.userForm.disabled)}}let F=(()=>{class t{constructor(r,s,a,d,N,de){this._formBuilder=r,this.userService=s,this.snackBar=a,this.messageService=d,this.router=N,this.activatedRoute=de,this.loading=!0,this.userId=0}get roles(){return this.userService.roles}get empresas(){return this.userService.empresa}ngOnInit(){if(this.userService.getAllRoles(),this.userService.getAllEmpresas(),!this.router.url.includes("edit-user"))return this.loading=!1,void(this.userForm=this._formBuilder.group({nickname:["",[i.kI.required]],nombre:["",[i.kI.required]],apellido:["",[i.kI.required]],cedula:["",[i.kI.required,i.kI.minLength(10),i.kI.maxLength(10)]],email:["",[i.kI.required,i.kI.email]],password:["",[]],numeroContacto:["",[i.kI.required]],estado:[!0],idRol:["",[i.kI.required]],empresa:[""],direccion:[""]}));this.activatedRoute.params.pipe((0,S.w)(({id:r})=>this.userService.getUserId(r))).subscribe(r=>{this.userForm=this._formBuilder.group({nickname:[r.nickname,[i.kI.required]],nombre:[r.nombre,[i.kI.required]],apellido:[r.apellido,[i.kI.required]],cedula:[r.cedula,[i.kI.required,i.kI.minLength(10),i.kI.maxLength(10)]],email:[r.email,[i.kI.required,i.kI.email]],password:[r.password,[]],numeroContacto:[r.numeroContacto,[i.kI.required]],estado:[r.estado],idRol:[r.rol.id,[i.kI.required]],empresa:[r.empresa],direccion:[r.direccion]}),console.log(r),this.userId=r.id,this.loading=!1})}handlerNewUser(){this.userForm.invalid||(console.log(this.userForm.value),this.userForm.disable(),0===this.userId?("Ciudadanos"!==this.userForm.value.idRol.nombre&&(this.userForm.value.empresa="",this.userForm.value.direccion=""),this.userForm.value.idRol=this.userForm.value.idRol.id,this.userForm.value.empresa=this.userForm.value.empresa.id,this.userService.createNewUser(this.userForm.value).subscribe(r=>{this.router.navigate(["/users"]),this.mostrarSnakbar("Registro agregado"),this.userForm.enable()},r=>{this.mostrarSnakbar("Error al agregar!"),this.userForm.enable()})):(3!==this.userForm.value.idRol.id&&(this.userForm.value.empresa="",this.userForm.value.direccion=""),this.userForm.value.idRol=this.userForm.value.idRol.id,this.userForm.value.empresa=this.userForm.value.empresa.id,this.userService.editUser(this.userId,this.userForm.value).subscribe(r=>{this.router.navigate(["/users"]),this.mostrarSnakbar("Registro actualizado")})))}mostrarSnakbar(r){this.snackBar.open(r,"ok!",{duration:2500})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(i.qu),e.Y36(g.K),e.Y36(I.ux),e.Y36(l.ez),e.Y36(m.F0),e.Y36(m.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add"]],decls:3,vars:2,consts:[[1,"p-5","w-screen"],["class","grid justify-items-stretch",4,"ngIf"],[4,"ngIf"],[1,"grid","justify-items-stretch"],[1,"justify-self-center","pt-50"],[3,"diameter","mode"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Regresar","icon","pi pi-angle-left","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"grid","mt-2","gap-2",3,"formGroup"],["vehicleInNgForm","ngForm"],[1,"grid","md:grid-cols-2","sm:grid-cols-2","gap-4","bg-white","p-3"],["matPrefix",""],["type","text","matInput","",3,"formControlName"],[1,"w-full"],["svgIcon","heroicons_solid:user",1,"icon-size-5"],["id","nombre","matInput","",1,"bg-white",3,"formControlName"],["id","apellido","matInput","",1,"bg-white",3,"formControlName"],["svgIcon","heroicons_solid:identification",1,"icon-size-5"],["id","cedula","matInput","",1,"bg-white",3,"formControlName"],[1,"icon-size-5",3,"svgIcon"],["id","email","matInput","",1,"bg-white",3,"formControlName"],["svgIcon","heroicons_solid:lock-closed",1,"icon-size-5"],["id","password","matInput","",1,"bg-white",3,"formControlName"],["svgIcon","heroicons_solid:phone",1,"icon-size-5"],["id","numeroContacto","matInput","",1,"bg-white",3,"formControlName"],[1,"field"],["for","idRol",1,"block","font-semibold","mb-1"],["id","idRol","aria-describedby","rol-help","styleClass","w-full","optionLabel","nombre",3,"options","showClear","formControlName"],["class","field",4,"ngIf"],["class","w-full",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6","bg-companySecondary",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],["for","empresa",1,"block","font-semibold","mb-1"],["id","empresa","aria-describedby","rol-help","styleClass","w-full","optionLabel","descripcion",3,"options","showClear","formControlName"],["svgIcon","heroicons_solid:office-building",1,"icon-size-5"],["id","direccion","matInput","",1,"bg-white",3,"formControlName"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0),e.YNc(1,y,3,2,"div",1),e.YNc(2,G,65,30,"div",2),e.qZA()),2&r&&(e.xp6(1),e.Q6J("ngIf",s.loading),e.xp6(1),e.Q6J("ngIf",!s.loading))},directives:[u.O5,h.$g,p.zx,m.rH,f.d,i._Y,i.JL,i.sg,c.KE,c.hX,C.Hw,c.qo,b.Nt,i.Fj,i.JJ,i.u,q.Lt,x.lW,c.TO,h.Ou],encapsulation:2}),t})();function V(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"div",10),e.TgZ(1,"span",11),e._UZ(2,"i",12),e.TgZ(3,"input",13),e.NdJ("input",function(a){return e.CHM(r),e.oxw(),e.MAs(9).filterGlobal(a.target.value,"contains")}),e.qZA(),e.qZA(),e.qZA()}}function W(t,o){if(1&t&&(e.TgZ(0,"th",15),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&t){const r=o.$implicit;e.Q6J("id",r),e.xp6(1),e.Oqu(e.lcZ(2,2,r))}}function ee(t,o){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,W,3,4,"th",14),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngForOf",r.headersTable)}}function re(t,o){1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._UZ(2,"p-skeleton"),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"p-skeleton"),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"p-skeleton"),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"p-skeleton"),e.qZA(),e.TgZ(9,"td"),e._UZ(10,"p-skeleton"),e.qZA(),e.qZA())}const te=function(t){return["/users/edit-user",t]};function oe(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._UZ(10,"button",17),e.TgZ(11,"button",18),e.NdJ("click",function(a){e.CHM(r);const d=e.oxw().$implicit;return e.oxw().confirm(a,d.id)}),e.qZA(),e.qZA(),e.qZA()}if(2&t){const r=e.oxw().$implicit;e.xp6(2),e.Oqu(r.cedula),e.xp6(2),e.Oqu(r.nombre),e.xp6(2),e.Oqu(r.apellido),e.xp6(2),e.Oqu(r.email),e.xp6(2),e.Q6J("routerLink",e.VKq(5,te,r.id))}}function ie(t,o){if(1&t&&(e.YNc(0,re,11,0,"tr",16),e.YNc(1,oe,12,7,"tr",16)),2&t){const r=e.oxw();e.Q6J("ngIf",0===r.usersAll.length),e.xp6(1),e.Q6J("ngIf",r.usersAll.length>0)}}const ne=function(){return["/users/add-user"]},se=function(){return["nombre","cedula"]},ae=function(){return[10,20,40]},le=[{path:"",component:w,children:[{path:"",component:(()=>{class t{constructor(r,s,a){this.userService=r,this.confirmationService=s,this.messageService=a,this.headersTable=["c\xe9dula","nombre","apellido","email","acciones"]}get usersAll(){return this.userService.users}ngOnInit(){this.userService.getAllUsers()}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(g.K),e.Y36(l.YP),e.Y36(l.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-list"]],features:[e._Bn([l.YP,l.ez])],decls:14,vars:11,consts:[[1,"p-5","w-screen"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Agregar","icon","pi pi-plus","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"w-full","pt-3"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} al {last} de {totalRecords} registros","scrollHeight","450px",3,"scrollable","value","paginator","globalFilterFields","rows","showCurrentPageReport","rowsPerPageOptions"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",3,"input"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],[4,"ngIf"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-outlined","mr-2",3,"routerLink"],["pButton","","pRipple","","type","button","icon","pi pi-trash",1,"p-button-rounded","p-button-outlined","p-button-danger",3,"click"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e.TgZ(3,"h1",2),e._uU(4,"Administraci\xf3n de usuarios"),e.qZA(),e._UZ(5,"p-button",3),e.qZA(),e._UZ(6,"mat-divider"),e.qZA(),e.TgZ(7,"div",4),e.TgZ(8,"p-table",5,6),e.YNc(10,V,4,0,"ng-template",7),e.YNc(11,ee,2,1,"ng-template",8),e.YNc(12,ie,2,2,"ng-template",9),e.qZA(),e._UZ(13,"p-toast"),e.qZA(),e.qZA()),2&r&&(e.xp6(5),e.Q6J("routerLink",e.DdM(8,ne)),e.xp6(3),e.Q6J("scrollable",0!==s.usersAll.length)("value",0===s.usersAll.length?s.headersTable.concat(s.headersTable):s.usersAll)("paginator",!0)("globalFilterFields",e.DdM(9,se))("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(10,ae)))},directives:[p.zx,m.rH,f.d,A.iA,l.jx,T.FN,U.o,u.sg,u.O5,v.O,p.Hq,_.H],pipes:[u.rS],encapsulation:2}),t})()},{path:"add-user",component:F},{path:"edit-user/:id",component:F}]}];let me=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(le),f.t,p.hJ,_.T,v.m,A.U$,u.ez,J.n,T.EV,Y.S,i.UX,c.lN,b.c,x.ot,h.Cq,Q.gz,U.j,C.Ps,q.kW,I.ZX]]}),t})()}}]);