"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[9081],{9081:(Se,v,a)=>{a.r(v),a.d(v,{VehiclesModule:()=>Ne});var l=a(8583),c=a(3423),e=a(7716);let Q=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-vehicles"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")},directives:[c.lC],encapsulation:2}),i})();var d=a(805),f=a(2340),L=a(6741),Y=a(1841);let Z=(()=>{class i{constructor(t){this._httpClient=t,this._URL_HOST=f.N.url,this._vehicles=null}get vehicle(){return this._vehicles}set vehicle(t){this._vehicles=t}getAllVehicle(){this._httpClient.get(`${this._URL_HOST}/vehicle`).subscribe(t=>{this._vehicles=t.vehicles})}addVehicle(t,r){const o={plate:t.plate,cylinder:parseInt(String(t.cylinder),10),typeVehicle:t.typeVehicle,brand:t.brand,year:t.year,unity:t.unity,status:!0,company:t.company,licence:t.licence,weigth:parseInt(t.weigth)};return this._httpClient.post(`${this._URL_HOST}/vehicle`,o)}getVehiclePlate(t){return this._httpClient.get(`${this._URL_HOST}/vehicle/${t}`)}updateVehicle(t,r,o){const p={plate:r.plate,cylinder:parseInt(String(r.cylinder),10),typeVehicle:r.typeVehicle,brand:r.brand,year:r.year,unity:r.unity,status:!0,driver:r.driver,company:r.company,licence:r.licence,weigth:parseInt(r.weigth)};return this._httpClient.patch(`${this._URL_HOST}/vehicle/${t}`,p)}deleteVehicle(t){return this._httpClient.delete(`${this._URL_HOST}/vehicle/${t}`)}getTransport(){var t=JSON.stringify({query:"query GetAllTransportCompany{\n        transportCompanies: transportCompanyAll{\n            id\n            name\n            licence\n            address\n        }\n    }",variables:{}});return(0,L.Z)({method:"post",url:f.N.urlG,headers:{"Content-Type":"application/json"},data:t})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(Y.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var m=a(5593),g=a(1769),T=a(9529),A=a(2453),_=a(369),y=a(1740),x=a(7489),C=a(1795);function O(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",10),e.TgZ(1,"span",11),e._UZ(2,"i",12),e.TgZ(3,"input",13),e.NdJ("input",function(o){return e.CHM(t),e.oxw(),e.MAs(9).filterGlobal(o.target.value,"contains")}),e.qZA(),e.qZA(),e.qZA()}}function P(i,n){if(1&i&&(e.TgZ(0,"th",15),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&i){const t=n.$implicit;e.Q6J("id",t),e.xp6(1),e.Oqu(e.lcZ(2,2,t))}}function E(i,n){if(1&i&&(e.TgZ(0,"tr"),e.YNc(1,P,3,4,"th",14),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.headersTable)}}function w(i,n){1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._UZ(2,"p-skeleton"),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"p-skeleton"),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"p-skeleton"),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"p-skeleton"),e.qZA(),e.TgZ(9,"td"),e._UZ(10,"p-skeleton"),e.qZA(),e.TgZ(11,"td"),e._UZ(12,"p-skeleton"),e.qZA(),e.qZA())}const j=function(i){return["/vehicle/editar",i]};function M(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._UZ(12,"button",17),e.TgZ(13,"button",18),e.NdJ("click",function(o){e.CHM(t);const p=e.oxw().$implicit;return e.oxw().confirm(o,p.id)}),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.plate),e.xp6(2),e.Oqu(t.typeVehicle.name),e.xp6(2),e.Oqu(t.brand.name),e.xp6(2),e.Oqu(t.cylinder),e.xp6(2),e.Oqu(t.year),e.xp6(2),e.Q6J("routerLink",e.VKq(6,j,t.id))}}function R(i,n){if(1&i&&(e.YNc(0,w,13,0,"tr",16),e.YNc(1,M,14,8,"tr",16)),2&i){const t=e.oxw();e.Q6J("ngIf",null===t.vehiclesAll),e.xp6(1),e.Q6J("ngIf",null!==t.vehiclesAll)}}const k=function(){return["/vehicle/add-vehicle"]},H=function(){return["plate","typeVehicle.name","brand.name","year"]},$=function(){return[10,20,40]};let B=(()=>{class i{constructor(t,r,o){this.vehicleService=t,this.confirmationService=r,this.messageService=o,this.headersTable=["placa","tipo de veh\xedculo","marca","cilindraje","a\xf1o","acciones"]}get vehiclesAll(){return this.vehicleService.vehicle}ngOnInit(){this.vehicleService.getAllVehicle()}confirm(t,r){console.log(t),this.confirmationService.confirm({target:t.target,message:"Estas seguro de eliminar el registro de manera permanente?",icon:"pi pi-exclamation-triangle",acceptLabel:"Si, Estoy seguro.",rejectLabel:"No",accept:()=>{this.vehicleService.deleteVehicle(r).subscribe(()=>{this.vehicleService.vehicle=this.vehicleService.vehicle.filter(o=>o.id!==r),this.messageService.add({severity:"success",summary:"\xc9xito!",detail:"El registro se ha eliminado de manera correcta"})},()=>{this.messageService.add({severity:"error",summary:"Algo salio mal!",detail:"No se pudo eliminar el registro. Intentalo m\xe1s tarde"})})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(Z),e.Y36(d.YP),e.Y36(d.ez))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list"]],features:[e._Bn([d.YP,d.ez])],decls:15,vars:11,consts:[[1,"p-5","w-screen"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Agregar","icon","pi pi-plus","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"w-full","pt-3"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} al {last} de {totalRecords} registros","scrollHeight","450px",3,"scrollable","value","paginator","globalFilterFields","rows","showCurrentPageReport","rowsPerPageOptions"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",3,"input"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],[4,"ngIf"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-outlined","mr-2",3,"routerLink"],["pButton","","pRipple","","type","button","icon","pi pi-trash",1,"p-button-rounded","p-button-outlined","p-button-danger",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e.TgZ(3,"h1",2),e._uU(4,"Administraci\xf3n de veh\xedculos"),e.qZA(),e._UZ(5,"p-button",3),e.qZA(),e._UZ(6,"mat-divider"),e.qZA(),e.TgZ(7,"div",4),e.TgZ(8,"p-table",5,6),e.YNc(10,O,4,0,"ng-template",7),e.YNc(11,E,2,1,"ng-template",8),e.YNc(12,R,2,2,"ng-template",9),e.qZA(),e._UZ(13,"p-toast"),e._UZ(14,"p-confirmPopup"),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(8,k)),e.xp6(3),e.Q6J("scrollable",null!==r.vehiclesAll)("value",null===r.vehiclesAll?r.headersTable.concat(r.headersTable):r.vehiclesAll)("paginator",!0)("globalFilterFields",e.DdM(9,H))("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(10,$)))},directives:[m.zx,c.rH,g.d,T.iA,d.jx,A.FN,_.P,y.o,l.sg,l.O5,x.O,m.Hq,C.H],pipes:[l.rS],encapsulation:2}),i})();var b=a(8239),s=a(3679),G=a(9761),z=a(8002),D=a(3190),I=a(6461),U=a(7001),X=a(3729),K=a(1224),h=a(4885),u=a(8295),q=a(9983),N=a(7441),F=a(1095),V=a(2458);const W=["vehicleInNgForm"],ee=["assistantInput"];function te(i,n){1&i&&(e.TgZ(0,"div",3),e.TgZ(1,"div",4),e._UZ(2,"mat-spinner",5),e.qZA(),e.qZA()),2&i&&(e.xp6(2),e.Q6J("diameter",50)("mode","indeterminate"))}function ie(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese una placa "),e.qZA())}function re(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese una placa v\xe1lida "),e.qZA())}function ne(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese una placa v\xe1lida "),e.qZA())}function ae(i,n){if(1&i&&(e.TgZ(0,"mat-option",21),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function oe(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un tipo de vehiculo "),e.qZA())}function se(i,n){if(1&i&&(e.TgZ(0,"mat-option",21),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function le(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese una marca "),e.qZA())}function ce(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un cilindraje "),e.qZA())}function pe(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un cilindraje "),e.qZA())}function de(i,n){if(1&i&&(e.TgZ(0,"mat-option",21),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function me(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese una unidad de peso "),e.qZA())}function ue(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un a\xf1o "),e.qZA())}function ge(i,n){if(1&i&&(e.TgZ(0,"mat-option",21),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function he(i,n){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor seleccione una compa\xf1ia "),e.qZA())}function ve(i,n){1&i&&(e.TgZ(0,"span"),e._uU(1," Guardar "),e.qZA())}function fe(i,n){1&i&&e._UZ(0,"mat-progress-spinner",5),2&i&&e.Q6J("diameter",24)("mode","indeterminate")}const Ze=function(){return["/vehicle"]};function Te(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",6),e.TgZ(2,"h1",7),e._uU(3),e.qZA(),e._UZ(4,"p-button",8),e.qZA(),e._UZ(5,"mat-divider"),e.TgZ(6,"form",9,10),e.TgZ(8,"mat-form-field"),e.TgZ(9,"mat-label"),e._uU(10,"Placa"),e.qZA(),e._UZ(11,"input",11),e.YNc(12,ie,2,0,"mat-error",2),e.YNc(13,re,2,0,"mat-error",2),e.YNc(14,ne,2,0,"mat-error",2),e.qZA(),e.TgZ(15,"mat-form-field"),e.TgZ(16,"mat-label"),e._uU(17,"Tipo Veh\xedculo"),e.qZA(),e.TgZ(18,"mat-select",12),e.YNc(19,ae,2,2,"mat-option",13),e.qZA(),e.YNc(20,oe,2,0,"mat-error",2),e.qZA(),e.TgZ(21,"mat-form-field"),e.TgZ(22,"mat-label"),e._uU(23,"Marca"),e.qZA(),e.TgZ(24,"mat-select",14),e.YNc(25,se,2,2,"mat-option",13),e.qZA(),e.YNc(26,le,2,0,"mat-error",2),e.qZA(),e.TgZ(27,"mat-form-field"),e.TgZ(28,"mat-label"),e._uU(29,"Cilindraje"),e.qZA(),e._UZ(30,"input",15),e.YNc(31,ce,2,0,"mat-error",2),e.qZA(),e.TgZ(32,"mat-form-field"),e.TgZ(33,"mat-label"),e._uU(34,"Peso Total"),e.qZA(),e._UZ(35,"input",16),e.YNc(36,pe,2,0,"mat-error",2),e.qZA(),e.TgZ(37,"mat-form-field"),e.TgZ(38,"mat-label"),e._uU(39,"Unidad de Peso"),e.qZA(),e.TgZ(40,"mat-select",17),e.YNc(41,de,2,2,"mat-option",13),e.qZA(),e.YNc(42,me,2,0,"mat-error",2),e.qZA(),e.TgZ(43,"mat-form-field"),e.TgZ(44,"mat-label"),e._uU(45,"A\xf1o"),e.qZA(),e._UZ(46,"input",15),e.YNc(47,ue,2,0,"mat-error",2),e.qZA(),e.TgZ(48,"mat-form-field"),e.TgZ(49,"mat-label"),e._uU(50,"Compa\xf1\xeda de transporte"),e.qZA(),e.TgZ(51,"mat-select",18),e.YNc(52,ge,2,2,"mat-option",13),e.qZA(),e.YNc(53,he,2,0,"mat-error",2),e.qZA(),e._UZ(54,"br"),e.TgZ(55,"button",19),e.NdJ("click",function(){return e.CHM(t),e.oxw().addVehicle()}),e.YNc(56,ve,2,0,"span",2),e.YNc(57,fe,1,2,"mat-progress-spinner",20),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(3),e.hij(" ",t.vehicleId?"Editar":"Agregar"," veh\xedculos "),e.xp6(1),e.Q6J("routerLink",e.DdM(29,Ze)),e.xp6(2),e.Q6J("formGroup",t.vehicleForm),e.xp6(5),e.Q6J("formControlName","plate"),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("plate").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("plate").hasError("maxLength")),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("plate").hasError("minLength")),e.xp6(4),e.Q6J("formControlName","typeVehicle"),e.xp6(1),e.Q6J("ngForOf",t.typeVehicles.detailCatalog),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("typeVehicle").hasError("required")),e.xp6(4),e.Q6J("formControlName","brand"),e.xp6(1),e.Q6J("ngForOf",t.brandVehicles.detailCatalog),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("brand").hasError("required")),e.xp6(4),e.Q6J("formControlName","cylinder"),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("cylinder").hasError("required")),e.xp6(4),e.Q6J("formControlName","weigth"),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("weigth").hasError("required")),e.xp6(4),e.Q6J("formControlName","unity"),e.xp6(1),e.Q6J("ngForOf",t.weightUnits.detailCatalog),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("unity").hasError("required")),e.xp6(4),e.Q6J("formControlName","year"),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("year").hasError("required")),e.xp6(4),e.Q6J("formControlName","company"),e.xp6(1),e.Q6J("ngForOf",t.transport),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.get("company").hasError("required")),e.xp6(2),e.Q6J("color","primary")("disabled",t.vehicleForm.disabled),e.xp6(1),e.Q6J("ngIf",!t.vehicleForm.disabled),e.xp6(1),e.Q6J("ngIf",t.vehicleForm.disabled)}}let S=(()=>{class i{constructor(t,r,o,p,J,Fe,Ve){this._formBuilder=t,this.vehicleService=r,this.router=o,this.activatedRoute=p,this.snackBar=J,this.driverService=Fe,this.catalogService=Ve,this.vehicleId=0,this.loading=!0,this.separatorKeysCodes=[I.K5,I.OC],this.assistantCtrl=new s.NI(""),this.assistants=[],this.transport=[]}get typeVehicles(){return this.catalogService.typeVehicle}get brandVehicles(){return this.catalogService.brandVehicle}get weightUnits(){return this.catalogService.weightUnits}get drivers(){return this.catalogService.driver}get assistantsS(){return this.catalogService.assistant}ngOnInit(){var t=this;return(0,b.Z)(function*(){if(t.catalogService.getTypeVehicle(),t.catalogService.getBrandVehicle(),t.catalogService.getWeightUnits(),t.catalogService.getAllDrivers(),yield t.consultarAyudantes(),t.vehicleService.getTransport().then(r=>t.transport=r.data.data.transportCompanies),t.filteredAssistants=t.assistantCtrl.valueChanges.pipe((0,G.O)(null),(0,z.U)(r=>r?t._filter(r):t.allAssistants.slice())),!t.router.url.includes("editar"))return t.loading=!1,t.vehicleForm=t._formBuilder.group({plate:["",[s.kI.required,s.kI.maxLength(7),s.kI.minLength(7)]],typeVehicle:["",[s.kI.required]],brand:[,[s.kI.required]],cylinder:["",[s.kI.required]],year:[,[s.kI.required]],unity:[,[s.kI.required]],company:["",[s.kI.required]],weigth:[,[s.kI.required]]}),void(t.assistants=[]);t.activatedRoute.params.pipe((0,D.w)(({id:r})=>t.vehicleService.getVehiclePlate(r))).subscribe(r=>{const o=r.vehicle;t.vehicleForm=t._formBuilder.group({plate:[o.plate,[s.kI.required,s.kI.maxLength(7),s.kI.minLength(7)]],cylinder:[o.cylinder,[s.kI.required]],typeVehicle:[o.typeVehicle.id,[s.kI.required]],brand:[o.brand.id,[s.kI.required]],year:[o.year,[s.kI.required]],unity:[o.unity.id,[s.kI.required]],company:[null==o?void 0:o.company.id,[s.kI.required]],weigth:[null==o?void 0:o.weigth,[s.kI.required]]}),t.vehicleId=o.id,t.loading=!1})})()}consultarAyudantes(){var t=this;return(0,b.Z)(function*(){yield t.catalogService.getAllAssistants().then(r=>{t.allAssistants=r}).catch(r=>{console.log(r)})})()}addVehicle(){const t=[];this.assistants.length>0&&this.assistants.forEach(r=>{t.push({id:r.id})}),!this.vehicleForm.invalid&&(this.vehicleForm.disable(),0===this.vehicleId?this.vehicleService.addVehicle(this.vehicleForm.value,t).subscribe(r=>{this.router.navigate(["/vehicle"]),this.mostrarSnakbar("Registro creado")},r=>{this.mostrarSnakbar(r),this.vehicleForm.enable()}):this.vehicleService.updateVehicle(this.vehicleId,this.vehicleForm.value,t).subscribe(r=>{this.router.navigate(["/vehicle"]),this.mostrarSnakbar("Registro actualizado")},r=>{this.mostrarSnakbar(r),this.vehicleForm.enable()}))}mostrarSnakbar(t){this.snackBar.open(t,"ok!",{duration:2500})}add(t){const r=(t.value||"").trim();r&&this.assistants.push(r),t.chipInput.clear(),this.assistantCtrl.setValue(null)}remove(t){const r=this.assistants.indexOf(t);r>=0&&this.assistants.splice(r,1)}selected(t){0===this.assistants.filter(o=>o.fullName.toLowerCase().includes(t.option.viewValue.toLowerCase())).length?(this.assistants.push({id:t.option.value,fullName:t.option.viewValue}),this.assistantInput.nativeElement.value="",this.assistantCtrl.setValue(null)):(this.mostrarSnakbar("Ayudante ya Agregado"),this.assistantInput.nativeElement.value="",this.assistantCtrl.setValue(null))}_filter(t){const r=t.toLowerCase();return this.allAssistants.filter(o=>o.fullName.toLowerCase().includes(r))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.qu),e.Y36(Z),e.Y36(c.F0),e.Y36(c.gz),e.Y36(U.ux),e.Y36(X.P),e.Y36(K.a))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add"]],viewQuery:function(t,r){if(1&t&&(e.Gf(W,5),e.Gf(ee,5)),2&t){let o;e.iGM(o=e.CRH())&&(r.vehicleInNgForm=o.first),e.iGM(o=e.CRH())&&(r.assistantInput=o.first)}},decls:3,vars:2,consts:[[1,"p-5","w-screen"],["class","grid justify-items-stretch",4,"ngIf"],[4,"ngIf"],[1,"grid","justify-items-stretch"],[1,"justify-self-center","pt-50"],[3,"diameter","mode"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Regresar","icon","pi pi-angle-left","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"grid","gap-4","md:grid-cols-3","sm:grid-cols-2","mt-2","bg-white","p-3",3,"formGroup"],["vehicleInNgForm","ngForm"],["type","text","matInput","",1,"bg-white",3,"formControlName"],["name","typeVehicle",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["name","brand",3,"formControlName"],["type","text","matInput","",3,"formControlName"],["type","number","matInput","",3,"formControlName"],["name","unity",3,"formControlName"],["name","trasport",3,"formControlName"],["mat-flat-button","",1,"fuse-mat-button-medium","mt-6","w-1/2",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[3,"value"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.YNc(1,te,3,2,"div",1),e.YNc(2,Te,58,30,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",r.loading),e.xp6(1),e.Q6J("ngIf",!r.loading))},directives:[l.O5,h.$g,m.zx,c.rH,g.d,s._Y,s.JL,s.sg,u.KE,u.hX,q.Nt,s.Fj,s.JJ,s.u,N.gD,l.sg,s.wV,F.lW,u.TO,V.ey,h.Ou],styles:[".prueba[_ngcontent-%COMP%]{background:red}.form1[_ngcontent-%COMP%]{background:blue;width:100%}.example-chip-list[_ngcontent-%COMP%]{width:100%}"]}),i})();var Ae=a(1512),_e=a(6627),ye=a(3425),xe=a(2210),Ce=a(2091),be=a(1554),Ie=a(611),Ue=a(7528);const qe=[{path:"",component:Q,children:[{path:"",component:B},{path:"add-vehicle",component:S},{path:"editar/:id",component:S}]}];let Ne=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[c.Bz.forChild(qe),l.ez,g.t,m.hJ,C.T,x.m,T.U$,l.ez,_.n,A.EV,Ae.S,s.UX,u.lN,q.c,F.ot,h.Cq,ye.gz,y.j,_e.Ps,xe.kW,Ce.p0,N.LD,U.ZX,be.Bb,Ie.Hi,V.XK,Ue.g]]}),i})()}}]);