webpackJsonp([4],{402:function(a,t,e){e(631);var d=e(68)(e(525),e(607),"data-v-70b56d62",null);a.exports=d.exports},412:function(a,t,e){a.exports=e.p+"images/cross.png?38f22539a146ea44d26450ac662fa8c8"},439:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(a[d]=e[d])}return a},r=e(138),i=e(70);t.default={props:{indexOf:Number,preview:String,readonly:{type:Boolean,default:!1}},data:function(){return{inputId:"",dataUrl:""}},computed:d({},(0,i.mapGetters)(["userPhone"])),created:function(){},methods:{gengerateID:function(){var a=Math.random().toString(36).substring(3,8);return document.getElementById(a)?this.gengerateID():a},handleFileChange:function(a){this.imgPreview(a.target.files[0])},imgPreview:function(a){var t=this;if(a&&window.FileReader)if(/^image/.test(a.type)){var e=new FileReader;e.readAsDataURL(a),e.onloadend=function(){t.dataUrl=this.result;var a=new Image;a.src=this.result,a.onload=function(){var a=t.compressImg(this);t.dataUrl=a,a=a.split(",")[1],a=window.atob(a);for(var e=new Uint8Array(a.length),d=0;d<a.length;d++)e[d]=a.charCodeAt(d);var i=new Blob([e],{type:"image/jpeg"}),o=new FormData;o.append("uploadFile",i),o.append("Resource","1"),o.append("phone",t.$store.state.applicant.userPhone),(0,r.fetchAPI)(t,t.$config.interfaceV1+"upload","POST",o).then(function(a){t.$emit("on-upload",{path:a.url,index:t.indexOf,previews:t.dataUrl})})}}}else alert("请选择图片文件")},compressImg:function(a){var t,e=(a.src.length,a.width),d=a.height;(t=e*d/4e6)>1?(t=Math.sqrt(t),e/=t,d/=t):t=1;var r=document.createElement("canvas"),i=document.createElement("canvas"),o=r.getContext("2d"),n=i.getContext("2d");r.width=e,r.height=d,o.fillStyle="#fff",o.fillRect(0,0,r.width,r.height);var s;if((s=e*d/1e6)>1){s=~~(Math.sqrt(s)+1);var c=~~(e/s),l=~~(d/s);i.width=c,i.height=l;for(var f=0;f<s;f++)for(var b=0;b<s;b++)n.drawImage(a,f*c*t,b*l*t,c*t,l*t,0,0,c,l),o.drawImage(i,f*c,b*l,c,l)}else o.drawImage(a,0,0,e,d);return r.toDataURL("image/jpeg",.6)}},mounted:function(){this.inputId=this.gengerateID()}},a.exports=t.default},465:function(a,t,e){t=a.exports=e(50)(),t.push([a.i,'a[data-v-6f78c1d9]{text-decoration:none}.bgWhite[data-v-6f78c1d9]{background:#fff}.deepRed[data-v-6f78c1d9]{color:#ac2525}.gray[data-v-6f78c1d9]{color:#bbb}.blue[data-v-6f78c1d9]{color:#0081ff}.ft28[data-v-6f78c1d9]{font-size:.28rem}.ft26[data-v-6f78c1d9]{font-size:.26rem}.ft24[data-v-6f78c1d9]{font-size:.24rem}.ft22[data-v-6f78c1d9]{font-size:.22rem}.w65[data-v-6f78c1d9]{width:65%}.w80[data-v-6f78c1d9]{width:80%}.w100[data-v-6f78c1d9]{width:100%}.borderLeft[data-v-6f78c1d9]{border-left:.06rem solid #ff6d5e;padding-left:1em}.fl[data-v-6f78c1d9]{float:left}.fr[data-v-6f78c1d9]{float:right}.tal[data-v-6f78c1d9]{text-align:left}.tac[data-v-6f78c1d9]{text-align:center}.tar[data-v-6f78c1d9]{text-align:right}.fs12[data-v-6f78c1d9]{font-size:12px}.fs14[data-v-6f78c1d9]{font-size:14px}.fs16[data-v-6f78c1d9]{font-size:16px}.fs18[data-v-6f78c1d9]{font-size:18px}.fs20[data-v-6f78c1d9]{font-size:20px}.fw[data-v-6f78c1d9]{font-weight:700}.clearfix[data-v-6f78c1d9]{clear:both;*zoom:1}.clearfix[data-v-6f78c1d9]:after{clear:both;content:".";display:block;width:0;height:0;visibility:hidden}.border0[data-v-6f78c1d9]{border:0}.bdl0[data-v-6f78c1d9]{border-left:0}.bdr0[data-v-6f78c1d9]{border-right:0}.bdt0[data-v-6f78c1d9]{border-top:0}.bdb0[data-v-6f78c1d9]{border-bottom:0}.lh30[data-v-6f78c1d9]{line-height:30px}.lh40[data-v-6f78c1d9]{line-height:40px}.of[data-v-6f78c1d9]{overflow:hidden}.mga[data-v-6f78c1d9]{margin:0 auto}.mgl10[data-v-6f78c1d9]{margin-left:10px}.mgr10[data-v-6f78c1d9]{margin-right:10px}.mgt10[data-v-6f78c1d9]{margin-top:10px}.mgb10[data-v-6f78c1d9]{margin-bottom:10px}.pdl10[data-v-6f78c1d9]{padding-left:10px}.pdr10[data-v-6f78c1d9]{padding-right:10px}.pdt10[data-v-6f78c1d9]{padding-top:10px}.pdb10[data-v-6f78c1d9]{padding-bottom:10px}.dn[data-v-6f78c1d9]{display:none!important}.psr[data-v-6f78c1d9]{position:relative}.psa[data-v-6f78c1d9]{position:absolute}.psf[data-v-6f78c1d9]{position:fixed}.navbg[data-v-6f78c1d9]{background-color:#fc403f}.db[data-v-6f78c1d9]{display:block}.dib[data-v-6f78c1d9]{display:inline-block}input[data-v-6f78c1d9]:disabled{cursor:not-allowed;background-color:#bbb}.nextStep[data-v-6f78c1d9]{width:7.02rem;height:.66rem;outline:none;border:none;margin-top:.6rem;margin-left:auto;margin-right:auto;border-radius:.1rem;display:block;text-align:center;color:#fff;background-color:#ff6d5e}.nextStep[data-v-6f78c1d9]:active{background-color:#ff5644}.stepDisabled[data-v-6f78c1d9]{background-color:#bbb}.checker[data-v-6f78c1d9]{display:inline-block;border-radius:.06rem;font-size:.24rem;padding:.14rem .33rem;margin-left:.3rem;margin-bottom:.27rem;border:1px solid #c5c5c5}.checker[data-v-6f78c1d9]:first-of-type{margin-left:0}.checker-default-item-class[data-v-6f78c1d9]{border-radius:.06rem;border:1px solid #c5c5c5;color:#333}.checker-default-item-class[data-v-6f78c1d9],.checker-selected-item-class[data-v-6f78c1d9]{display:inline-block;font-size:.24rem;padding:.14rem .33rem;margin-left:.3rem;margin-bottom:.27rem}.checker-selected-item-class[data-v-6f78c1d9]{border-radius:.06rem;border:1px solid #c5c5c5;border:1px solid #ff6d5e;color:#ff6d5e}.checker-disabled-item-class[data-v-6f78c1d9]{display:inline-block;border-radius:.06rem;font-size:.24rem;padding:.14rem .33rem;margin-left:.3rem;margin-bottom:.27rem;border:1px solid #c5c5c5;border:1px solid #bbb;color:#bbb}.marginGap[data-v-6f78c1d9]{margin-left:.28rem;margin-right:.28rem}.secondPart[data-v-6f78c1d9]{margin-top:.3rem;padding:.2rem}.secondPart .addList[data-v-6f78c1d9]{height:3rem;position:relative;margin-bottom:.2rem}.secondPart .addList .upLayer[data-v-6f78c1d9]{height:100%;border-radius:.1rem;border:1px dashed #0081ff}.secondPart .addList .bgBlue[data-v-6f78c1d9]{color:red;background:rgba(0,129,255,.6);border:none}.secondPart .addList .chooseLayer[data-v-6f78c1d9]{position:absolute;top:50%;left:50%;color:#fff;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.secondPart .addList .chooseLayer p[data-v-6f78c1d9]:first-of-type{margin-top:.26rem}.secondPart .addList .chooseLayer .cross[data-v-6f78c1d9]{display:inline-block;width:1.17rem;height:1.17rem;background:url('+e(412)+");background-size:100% 100%}.addList[data-v-6f78c1d9]{position:relative}.addList .reload[data-v-6f78c1d9]{position:absolute;right:10px;bottom:10px;color:#0081ff}.upLayer[data-v-6f78c1d9]{background-repeat:no-repeat;background-size:contain;background-position:50%}.chooseLayer p[data-v-6f78c1d9]{color:#0081ff}.ImgPicker[data-v-6f78c1d9]{position:absolute;left:-9999px}",""])},471:function(a,t,e){a.exports=e.p+"images/humer1.png?bac619c448001f852c923fab2bb611da"},472:function(a,t,e){a.exports=e.p+"images/humer2.png?12c9b12edb1df4f31885451b09970472"},474:function(a,t,e){a.exports=e.p+"images/sfz.png?d463c3f822f92f46a34075ca2cc55d95"},475:function(a,t,e){a.exports=e.p+"images/sfzBack.png?239b3ec435b152d74391286bdd8e6315"},476:function(a,t,e){e(502);var d=e(68)(e(439),e(493),"data-v-6f78c1d9",null);a.exports=d.exports},493:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"addList"},[e("div",{staticClass:"upLayer",style:{backgroundImage:"url( "+(a.preview||a.dataUrl)+" )"}}),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!(a.preview||a.dataUrl),expression:"!(preview || dataUrl)"}],staticClass:"chooseLayer"},[e("label",{staticClass:"cross",attrs:{for:a.inputId}}),a._v(" "),e("input",{staticClass:"ImgPicker",attrs:{type:"file",name:"",id:a.inputId,value:""},on:{change:a.handleFileChange}}),a._v(" "),e("p",[a._v("选择图片上传")])]),a._v(" "),e("label",{directives:[{name:"show",rawName:"v-show",value:!a.readonly&&a.preview||a.dataUrl,expression:"!readonly && preview || dataUrl"}],staticClass:"reload",attrs:{for:a.inputId}},[a._v("修改")])])])},staticRenderFns:[]}},502:function(a,t,e){var d=e(465);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);e(69)("014c1860",d,!0)},525:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=e(476),r=function(a){return a&&a.__esModule?a:{default:a}}(d);t.default={components:{ImgInput:r.default},methods:{nextUpload:function(){this.$router.push({path:"evaluation"})}}},a.exports=t.default},545:function(a,t,e){t=a.exports=e(50)(),t.push([a.i,'a[data-v-70b56d62]{text-decoration:none}.bgWhite[data-v-70b56d62]{background:#fff}.deepRed[data-v-70b56d62]{color:#ac2525}.gray[data-v-70b56d62]{color:#bbb}.blue[data-v-70b56d62]{color:#0081ff}.ft28[data-v-70b56d62]{font-size:.28rem}.ft26[data-v-70b56d62]{font-size:.26rem}.ft24[data-v-70b56d62]{font-size:.24rem}.ft22[data-v-70b56d62]{font-size:.22rem}.w65[data-v-70b56d62]{width:65%}.w80[data-v-70b56d62]{width:80%}.w100[data-v-70b56d62]{width:100%}.borderLeft[data-v-70b56d62]{border-left:.06rem solid #ff6d5e;padding-left:1em}.fl[data-v-70b56d62]{float:left}.fr[data-v-70b56d62]{float:right}.tal[data-v-70b56d62]{text-align:left}.tac[data-v-70b56d62]{text-align:center}.tar[data-v-70b56d62]{text-align:right}.fs12[data-v-70b56d62]{font-size:12px}.fs14[data-v-70b56d62]{font-size:14px}.fs16[data-v-70b56d62]{font-size:16px}.fs18[data-v-70b56d62]{font-size:18px}.fs20[data-v-70b56d62]{font-size:20px}.fw[data-v-70b56d62]{font-weight:700}.clearfix[data-v-70b56d62]{clear:both;*zoom:1}.clearfix[data-v-70b56d62]:after{clear:both;content:".";display:block;width:0;height:0;visibility:hidden}.border0[data-v-70b56d62]{border:0}.bdl0[data-v-70b56d62]{border-left:0}.bdr0[data-v-70b56d62]{border-right:0}.bdt0[data-v-70b56d62]{border-top:0}.bdb0[data-v-70b56d62]{border-bottom:0}.lh30[data-v-70b56d62]{line-height:30px}.lh40[data-v-70b56d62]{line-height:40px}.of[data-v-70b56d62]{overflow:hidden}.mga[data-v-70b56d62]{margin:0 auto}.mgl10[data-v-70b56d62]{margin-left:10px}.mgr10[data-v-70b56d62]{margin-right:10px}.mgt10[data-v-70b56d62]{margin-top:10px}.mgb10[data-v-70b56d62]{margin-bottom:10px}.pdl10[data-v-70b56d62]{padding-left:10px}.pdr10[data-v-70b56d62]{padding-right:10px}.pdt10[data-v-70b56d62]{padding-top:10px}.pdb10[data-v-70b56d62]{padding-bottom:10px}.dn[data-v-70b56d62]{display:none!important}.psr[data-v-70b56d62]{position:relative}.psa[data-v-70b56d62]{position:absolute}.psf[data-v-70b56d62]{position:fixed}.navbg[data-v-70b56d62]{background-color:#fc403f}.db[data-v-70b56d62]{display:block}.dib[data-v-70b56d62]{display:inline-block}input[data-v-70b56d62]:disabled{cursor:not-allowed;background-color:#bbb}.nextStep[data-v-70b56d62]{width:7.02rem;height:.66rem;outline:none;border:none;margin-top:.6rem;margin-left:auto;margin-right:auto;border-radius:.1rem;display:block;text-align:center;color:#fff;background-color:#ff6d5e}.nextStep[data-v-70b56d62]:active{background-color:#ff5644}.stepDisabled[data-v-70b56d62]{background-color:#bbb}.checker[data-v-70b56d62]{display:inline-block;border-radius:.06rem;font-size:.24rem;padding:.14rem .33rem;margin-left:.3rem;margin-bottom:.27rem;border:1px solid #c5c5c5}.checker[data-v-70b56d62]:first-of-type{margin-left:0}.checker-default-item-class[data-v-70b56d62]{border-radius:.06rem;border:1px solid #c5c5c5;color:#333}.checker-default-item-class[data-v-70b56d62],.checker-selected-item-class[data-v-70b56d62]{display:inline-block;font-size:.24rem;padding:.14rem .33rem;margin-left:.3rem;margin-bottom:.27rem}.checker-selected-item-class[data-v-70b56d62]{border-radius:.06rem;border:1px solid #c5c5c5;border:1px solid #ff6d5e;color:#ff6d5e}.checker-disabled-item-class[data-v-70b56d62]{display:inline-block;border-radius:.06rem;font-size:.24rem;padding:.14rem .33rem;margin-left:.3rem;margin-bottom:.27rem;border:1px solid #c5c5c5;border:1px solid #bbb;color:#bbb}.marginGap[data-v-70b56d62]{margin-left:.28rem;margin-right:.28rem}.secondPart[data-v-70b56d62]{margin-top:.3rem;padding:.2rem}.secondPart .addList[data-v-70b56d62]{height:3rem;position:relative;margin-bottom:.2rem}.secondPart .addList .upLayer[data-v-70b56d62]{height:100%;border-radius:.1rem;border:1px dashed #0081ff}.secondPart .addList .bgBlue[data-v-70b56d62]{color:red;background:rgba(0,129,255,.6);border:none}.secondPart .addList .chooseLayer[data-v-70b56d62]{position:absolute;top:50%;left:50%;color:#fff;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.secondPart .addList .chooseLayer p[data-v-70b56d62]:first-of-type{margin-top:.26rem}.secondPart .addList .chooseLayer .cross[data-v-70b56d62]{display:inline-block;width:1.17rem;height:1.17rem;background:url('+e(412)+");background-size:100% 100%}.top[data-v-70b56d62]{line-height:1.1rem;color:#bbb}.example[data-v-70b56d62]{padding:.2rem 0}.example img[data-v-70b56d62]{width:6.74rem}.listBg3[data-v-70b56d62]{background:url("+e(474)+") 50% no-repeat;background-size:43% auto}.listBg4[data-v-70b56d62]{background:url("+e(475)+") 50% no-repeat;background-size:43% auto}.listBg1[data-v-70b56d62]{background:url("+e(471)+") 50% no-repeat;background-size:43% auto}.listBg2[data-v-70b56d62]{background:url("+e(472)+") 50% no-repeat;background-size:43% auto}.nextStep[data-v-70b56d62]{margin-bottom:1rem}",""])},582:function(a,t,e){a.exports=e.p+"images/example.jpg?8af02bc5b7783115241aec0ae31f2f07"},607:function(a,t,e){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:""}},[e("p",{staticClass:"tac top"},[a._v("1、身份证正反面（夫妻二人）")]),a._v(" "),a._m(0),a._v(" "),e("div",{staticClass:"secondPart bgWhite"},[a._m(1),a._v(" "),a._m(2),a._v(" "),a._m(3),a._v(" "),a._m(4),a._v(" "),e("ImgInput"),a._v(" "),e("ImgInput")],1),a._v(" "),e("input",{staticClass:"nextStep",attrs:{type:"button",name:"",id:"",value:"下一步：上传户口簿"},on:{click:a.nextUpload}})])},staticRenderFns:[function(){var a=this,t=a.$createElement,d=a._self._c||t;return d("div",{staticClass:"bgWhite example tac"},[d("img",{attrs:{src:e(582)}})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"addList listBg3"},[e("div",{staticClass:"upLayer bgBlue"}),a._v(" "),e("div",{staticClass:"chooseLayer"},[e("div",{staticClass:"cross"}),a._v(" "),e("p",[a._v("上传主贷款人身份证正面照")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"addList listBg4"},[e("div",{staticClass:"upLayer bgBlue"}),a._v(" "),e("div",{staticClass:"chooseLayer"},[e("div",{staticClass:"cross"}),a._v(" "),e("p",[a._v("上传主贷款人身份证正面照")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"addList listBg1"},[e("div",{staticClass:"upLayer "}),a._v(" "),e("div",{staticClass:"chooseLayer"},[e("div",{staticClass:"cross"}),a._v(" "),e("p",[a._v("上传主贷款人身份证正面照")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"addList listBg2"},[e("div",{staticClass:"upLayer"}),a._v(" "),e("div",{staticClass:"chooseLayer"},[e("div",{staticClass:"cross"}),a._v(" "),e("p",[a._v("上传主贷款人身份证正面照")])])])}]}},631:function(a,t,e){var d=e(545);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);e(69)("df84dd02",d,!0)}});