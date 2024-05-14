"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[7705],{7705:(J,Z,n)=>{n.r(Z),n.d(Z,{DestinationModule:()=>rt});var r=n(8583),t=n(7716),m=n(2340),u=n(6741);let y=(()=>{class i{constructor(){}getDestination(){var e=JSON.stringify({query:"query getCompanies{\n                    companies{\n                      id\n                      licence\n                      name\n                      place\n                      address\n                      maes {\n                          id\n                      }\n                    }\n                  }",variables:{}});return(0,u.Z)({method:"post",url:m.N.urlG,headers:{"Content-Type":"application/json"},data:e})}createDestination(e){var o=JSON.stringify({query:"mutation createCompany($create: CreateCompanyInput!){\n        createCompany(createCompanyInput: $create){\n          name\n          licence\n        }\n      }",variables:{create:e}});return(0,u.Z)({method:"post",maxBodyLength:1/0,url:m.N.urlG,headers:{"Content-Type":"application/json"},data:o})}getdestination(e){var o=JSON.stringify({query:`query getCompanyById{\n        company(id: "${e}"){\n          id\n          licence\n          name\n          place\n          address\n          maes {\n            createdAt\n            description\n              id\n              name\n              treatment\n              updatedAt\n              waste{\n                id\n                createdAt\n                description\n                name\n                updatedAt\n              }\n          }\n        }\n      }`,variables:{}});return(0,u.Z)({method:"post",maxBodyLength:1/0,url:m.N.urlG,headers:{"Content-Type":"application/json"},data:o})}updateDestination(e){var o=JSON.stringify({query:"mutation updatedCompany($updated:UpdateCompanyInput!){\n        updateCompany(updateCompanyInput:$updated){\n          maes{\n            id\n            description\n            name\n          }\n          name\n        }\n      }",variables:{updated:e}});return(0,u.Z)({method:"post",maxBodyLength:1/0,url:m.N.urlG,headers:{"Content-Type":"application/json"},data:o})}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var d=n(5593),p=n(3423),c=n(5108),g=n(9529),_=n(805),x=n(1740),C=n(7489),b=n(1795);function I(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",10),t.TgZ(1,"span",11),t._UZ(2,"i",12),t.TgZ(3,"input",13),t.NdJ("input",function(l){return t.CHM(e),t.oxw(),t.MAs(8).filterGlobal(l.target.value,"contains")}),t.qZA(),t.qZA(),t.qZA()}}function N(i,a){if(1&i&&(t.TgZ(0,"th",15),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&i){const e=a.$implicit;t.Q6J("id",e),t.xp6(1),t.Oqu(t.lcZ(2,2,e))}}function S(i,a){if(1&i&&(t.TgZ(0,"tr"),t.YNc(1,N,3,4,"th",14),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.headersTable)}}function M(i,a){1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._UZ(2,"p-skeleton"),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"p-skeleton"),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"p-skeleton"),t.qZA(),t.TgZ(7,"td"),t._UZ(8,"p-skeleton"),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"p-skeleton"),t.qZA(),t.qZA())}const Q=function(i){return["/destination/edit",i]};function z(i,a){if(1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"button",17),t.qZA(),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.licence),t.xp6(2),t.Oqu(e.place),t.xp6(2),t.Oqu(e.address),t.xp6(2),t.Q6J("routerLink",t.VKq(5,Q,e.id))}}function O(i,a){if(1&i&&(t.YNc(0,M,11,0,"tr",16),t.YNc(1,z,11,7,"tr",16)),2&i){const e=t.oxw();t.Q6J("ngIf",null===e.destination),t.xp6(1),t.Q6J("ngIf",null!==e.destination)}}const Y=function(){return["add-destination"]},j=function(){return["nombre","apellido","cedula","nombre1"]},E=function(){return[10,20,40]};let L=(()=>{class i{constructor(e){this.destinationService=e,this.headersTable=["nombre","licencia","lugar","direccion","acciones"],this.destination=null}ngOnInit(){this.destinationService.getDestination().then(e=>{this.destination=e.data.data.companies})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-destination"]],decls:12,vars:11,consts:[[1,"p-5","w-screen"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Agregar","icon","pi pi-plus","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"w-full","pt-3"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} al {last} de {totalRecords} registros","scrollHeight","450px",3,"scrollable","value","paginator","globalFilterFields","rows","showCurrentPageReport","rowsPerPageOptions"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",3,"input"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],[4,"ngIf"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-outlined","mr-2",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1",2),t._uU(3,"Compa\xf1ias destinatarias"),t.qZA(),t._UZ(4,"p-button",3),t.qZA(),t._UZ(5,"p-divider"),t.TgZ(6,"div",4),t.TgZ(7,"p-table",5,6),t.YNc(9,I,4,0,"ng-template",7),t.YNc(10,S,2,1,"ng-template",8),t.YNc(11,O,2,2,"ng-template",9),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("routerLink",t.DdM(8,Y)),t.xp6(3),t.Q6J("scrollable",null!==o.destination)("value",null===o.destination?o.headersTable.concat(o.headersTable):o.destination)("paginator",!0)("globalFilterFields",t.DdM(9,j))("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(10,E)))},directives:[d.zx,p.rH,c.i,g.iA,_.jx,x.o,r.sg,r.O5,C.O,d.Hq,b.H],pipes:[r.rS],encapsulation:2}),i})();var s=n(3679),P=n(3190),B=n(2927),A=n(4885),T=n(8295),q=n(9983),D=n(5722),F=n(1095);function w(i,a){1&i&&(t.TgZ(0,"div",3),t.TgZ(1,"div",4),t._UZ(2,"mat-spinner",5),t.qZA(),t.qZA()),2&i&&(t.xp6(2),t.Q6J("diameter",50)("mode","indeterminate"))}function R(i,a){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor ingrese un nombre "),t.qZA())}function $(i,a){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor ingrese una licencia "),t.qZA())}function G(i,a){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor ingrese una direcci\xf3n "),t.qZA())}function H(i,a){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor ingrese una direcci\xf3n "),t.qZA())}function k(i,a){1&i&&(t.TgZ(0,"span"),t._uU(1," Guardar "),t.qZA())}function X(i,a){1&i&&t._UZ(0,"mat-progress-spinner",5),2&i&&t.Q6J("diameter",24)("mode","indeterminate")}const K=function(){return["/destination"]},W=function(){return{width:"100%"}},V=function(){return{color:"red"}};function tt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",6),t.TgZ(2,"h1",7),t._uU(3),t.qZA(),t._UZ(4,"p-button",8),t.qZA(),t._UZ(5,"mat-divider"),t.TgZ(6,"form",9,10),t.TgZ(8,"mat-form-field",11),t.TgZ(9,"mat-label"),t._uU(10,"Nombre"),t.qZA(),t._UZ(11,"input",12),t.YNc(12,R,2,0,"mat-error",2),t.qZA(),t.TgZ(13,"mat-form-field",11),t.TgZ(14,"mat-label"),t._uU(15,"Licencia"),t.qZA(),t._UZ(16,"input",12),t.YNc(17,$,2,0,"mat-error",2),t.qZA(),t.TgZ(18,"mat-form-field",11),t.TgZ(19,"mat-label"),t._uU(20,"Direccion"),t.qZA(),t._UZ(21,"input",12),t.YNc(22,G,2,0,"mat-error",2),t.qZA(),t.TgZ(23,"mat-form-field",11),t.TgZ(24,"mat-label"),t._uU(25,"Lugar"),t.qZA(),t._UZ(26,"input",12),t.YNc(27,H,2,0,"mat-error",2),t.qZA(),t.TgZ(28,"div",13),t.TgZ(29,"mat-label"),t._uU(30,"Maes"),t.qZA(),t._UZ(31,"br"),t._UZ(32,"p-multiSelect",14),t.qZA(),t.TgZ(33,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().addDestination()}),t.YNc(34,k,2,0,"span",2),t.YNc(35,X,1,2,"mat-progress-spinner",16),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();t.xp6(3),t.hij(" ",e.id?"Editar":"Agregar"," compa\xf1ia destinataria"),t.xp6(1),t.Q6J("routerLink",t.DdM(20,K)),t.xp6(2),t.Q6J("formGroup",e.destinationForm),t.xp6(5),t.Q6J("formControlName","name"),t.xp6(1),t.Q6J("ngIf",e.destinationForm.get("name").hasError("required")),t.xp6(4),t.Q6J("formControlName","licence"),t.xp6(1),t.Q6J("ngIf",e.destinationForm.get("licence").hasError("required")),t.xp6(4),t.Q6J("formControlName","address"),t.xp6(1),t.Q6J("ngIf",e.destinationForm.get("address").hasError("required")),t.xp6(4),t.Q6J("formControlName","place"),t.xp6(1),t.Q6J("ngIf",e.destinationForm.get("place").hasError("required")),t.xp6(5),t.Akn(t.DdM(21,W)),t.Q6J("panelStyle",t.DdM(22,V))("options",e.catalogMae)("formControlName","maes"),t.xp6(1),t.Q6J("color","primary")("disabled",e.destinationForm.disabled),t.xp6(1),t.Q6J("ngIf",!e.destinationForm.disabled),t.xp6(1),t.Q6J("ngIf",e.destinationForm.disabled)}}let U=(()=>{class i{constructor(e,o,l,v,f,h){this.destinationService=e,this._formBuilder=o,this.router=l,this.messageService=v,this._requestService=f,this.activatedRoute=h,this.loading=!0,this.id=0}get catalogMae(){return this._requestService.maeCatalog}ngOnInit(){if(this._requestService.getCatalogMae(),!this.router.url.includes("edit"))return this.loading=!1,void(this.destinationForm=this._formBuilder.group({name:["",[s.kI.required]],licence:[""],maes:[],place:["",s.kI.required],address:["",s.kI.required]}));this.activatedRoute.params.pipe((0,P.w)(({id:e})=>this.destinationService.getdestination(e))).subscribe(e=>{var o,l,v,f,h;this.destinationForm=this._formBuilder.group({name:[null===(o=e.data.data.company)||void 0===o?void 0:o.name,[s.kI.required]],licence:[null===(l=e.data.data.company)||void 0===l?void 0:l.licence],maes:[null===(v=e.data.data.company)||void 0===v?void 0:v.maes],place:[null===(f=e.data.data.company)||void 0===f?void 0:f.place,s.kI.required],address:[null===(h=e.data.data.company)||void 0===h?void 0:h.address,s.kI.required]}),this.id=e.data.data.company.id,this.loading=!1})}addDestination(){this.destinationForm.invalid||(this.destinationForm.disable(),0===this.id?this.destinationService.createDestination(this.destinationForm.value).then(e=>{this.messageService.add({severity:"success",detail:"Compa\xf1ia agregada correctamente",summary:"Transacci\xf3n existosa"}),this.router.navigate(["/destination"])}).catch(e=>this.messageService.add({severity:"error",detail:"Error al guardar",summary:"Transacci\xf3n erronea"+e})):this.destinationService.updateDestination({id:this.id,name:this.destinationForm.value.name,licence:this.destinationForm.value.licence,maes:this.destinationForm.value.maes,place:this.destinationForm.value.place,address:this.destinationForm.value.address}).then(o=>{this.messageService.add({severity:"success",detail:"Compa\xf1ia editada correctamente",summary:"Transacci\xf3n existosa"}),this.router.navigate(["/destination"])}).catch(o=>this.messageService.add({severity:"error",detail:"Error al guardar",summary:"Transacci\xf3n erronea"+o})))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(y),t.Y36(s.qu),t.Y36(p.F0),t.Y36(_.ez),t.Y36(B.s),t.Y36(p.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add"]],features:[t._Bn([_.ez])],decls:3,vars:2,consts:[[1,"p-5","w-screen"],["class","grid justify-items-stretch",4,"ngIf"],[4,"ngIf"],[1,"grid","justify-items-stretch"],[1,"justify-self-center","pt-50"],[3,"diameter","mode"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Regresar","icon","pi pi-angle-left","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"grid","gap-4","md:grid-cols-2","sm:grid-cols-2","mt-2","bg-white","p-3",3,"formGroup"],["vehicleInNgForm","ngForm"],[1,"w-full","col-span-1"],["type","text","matInput","",3,"formControlName"],[1,"col-span-2"],["label","Mae","optionLabel","name",3,"panelStyle","options","formControlName"],["mat-flat-button","",1,"fuse-mat-button-medium","mt-6","w-1/2",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,w,3,2,"div",1),t.YNc(2,tt,36,23,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.loading),t.xp6(1),t.Q6J("ngIf",!o.loading))},directives:[r.O5,A.$g,d.zx,p.rH,s._Y,s.JL,s.sg,T.KE,T.hX,q.Nt,s.Fj,s.JJ,s.u,D.NU,F.lW,T.TO,A.Ou],encapsulation:2}),i})();var et=n(6627),it=n(7001),nt=n(2453),ot=n(2665);const at=[{path:"",component:L},{path:"add-destination",component:U},{path:"edit/:id",component:U}];let rt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[r.ez,p.Bz.forChild(at),g.U$,C.m,d.hJ,b.T,x.j,c.x,A.Cq,s.UX,T.lN,q.c,F.ot,et.Ps,it.ZX,nt.EV,ot.O,D.q4]]}),i})()},5108:(J,Z,n)=>{n.d(Z,{i:()=>u,x:()=>y});var r=n(7716),t=n(8583);const m=["*"];let u=(()=>{class d{constructor(){this.layout="horizontal",this.type="solid"}containerClass(){return{"p-divider p-component":!0,"p-divider-horizontal":"horizontal"===this.layout,"p-divider-vertical":"vertical"===this.layout,"p-divider-solid":"solid"===this.type,"p-divider-dashed":"dashed"===this.type,"p-divider-dotted":"dotted"===this.type,"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align),"p-divider-center":"horizontal"===this.layout&&"center"===this.align||"vertical"===this.layout&&(!this.align||"center"===this.align),"p-divider-right":"horizontal"===this.layout&&"right"===this.align,"p-divider-top":"vertical"===this.layout&&"top"===this.align,"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275cmp=r.Xpm({type:d,selectors:[["p-divider"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",layout:"layout",type:"type",align:"align"},ngContentSelectors:m,decls:3,vars:4,consts:[["role","separator",3,"ngClass","ngStyle"],[1,"p-divider-content"]],template:function(c,g){1&c&&(r.F$t(),r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.Hsn(2),r.qZA(),r.qZA()),2&c&&(r.Tol(g.styleClass),r.Q6J("ngClass",g.containerClass())("ngStyle",g.style))},directives:[t.mk,t.PC],styles:['.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted}\n'],encapsulation:2,changeDetection:0}),d})(),y=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275mod=r.oAB({type:d}),d.\u0275inj=r.cJS({imports:[[t.ez]]}),d})()}}]);