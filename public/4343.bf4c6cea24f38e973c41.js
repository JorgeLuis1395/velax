"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[4343],{4343:(f,n,o)=>{o.r(n),o.d(n,{CameraModule:()=>h});var c=o(8583),a=o(7716),i=o(2340),s=o(6741),l=o(1841);let m=(()=>{class e{constructor(t){this.httpClient=t,this.URL="http://20.70.202.236:3013",this._URL_HOST=i.N.url}getCameraId(){return(0,s.Z)({method:"get",maxBodyLength:1/0,url:"https://api.c026.eagleeyenetworks.com/api/v3.0/feeds?deviceId=1006b34f&include=hlsUrl,multipartUrl",headers:{Authorization:"Bearer eyJraWQiOiI2ODYxYjBjYS0wZjI2LTExZWQtODYxZC0wMjQyYWMxMjAwMDIiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjYTBlZjkzMCIsImF1ZCI6InZtcy5hcGkiLCJpc3MiOiJ2bXMuYXV0aC52MSIsInZtc19hY2NvdW50IjoiMDAxMzAyNDQiLCJleHAiOjE3MDE4NTkyMTQsImlhdCI6MTcwMTgxNjAxNCwianRpIjoiODY3ZTcxYWMwODA0MjUxYTQ4MmNkZDZkYzExOWU2ZWUiLCJjbGllbnRfaWQiOiI4ZjE4ZDliYjYxZGE0ODE5OWY3MTEyMmRmNGY5MzE2MSIsInZtc19jbHVzdGVyIjoiYzAyNiJ9.Dkcx765kXLFjpLeTlUoD0gQSRYbagISR-fBGEGMJ9_4NFK9xRy3eYw0rO-7R70OruxTQnfXBE6eWBUWUEdjDViN7PEjcnfIhXgLhWA-uESYnu5fiWfkg_8x6C0pa9WcmoQHEY03VhyrcBiiXgbLEGQ96NPWtqAOG1fSQ00W3OByFHjKCT5Lx5yzsQQm7ZKiGPSBG-r9vEQvgmBC1zacm0ozUguRXVc2wk3KJvyBj-nn_waNZBfc-SbXI7eM6XVOU1CWFzFTFLTzra3RUX2oMGEW8FXN8-cdCPGHWCySczIgF5ZxxHSpgkEKFka_SX7c2RZ55As52aA4S4ghSPkX85w"}})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(l.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(t){this.cameraService=t}ngOnInit(){this.cameraService.getCameraId().then(t=>{console.log(t.data.results[1]),this.camera=t.data.results[1].multipartUrl}).catch(t=>console.log(t))}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(m))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-camera"]],decls:5,vars:0,consts:[[1,"flex","flex-col","justify-center","content-center","w-full"],["width","100%","height","360","autoplay","","loop",""],["src","assets/video/2.mov","type","video/mp4"],["src","assets/video/2.mov","type","video/mp4"]],template:function(t,p){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"video",1),a._UZ(2,"source",2),a.qZA(),a.TgZ(3,"video",1),a._UZ(4,"source",3),a.qZA(),a.qZA())},styles:[""]}),e})();var C=o(3423);const d=[{path:"",component:u}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[c.ez,C.Bz.forChild(d)]]}),e})()}}]);