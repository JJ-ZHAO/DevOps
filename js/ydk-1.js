// 2016-04-15 12:43
!function(a,b){"use strict";function c(){return Q?a.YoudaoWebViewJavascriptBridge:a.YoudaoWebJavascriptBridge}function d(a,b,c,d){return cb&&("config"===a||q.configStatus)?!0:cb||"config"!==a?(eb.push([a,b,c,d]),!1):(db=[a,b,c],!1)}function e(a,b,c){var d=b.code;switch(c.permanent&&(b.permanent=c.permanent),c._complete&&c._complete(b),fb&&console.log("_callback",a,c,b),d){case 1e3:c.success&&c.success(b);break;case 1001:c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function f(a,b,c){c||(c={}),d(a,b,c,!1)&&(c.silence&&(b.silence=!0),fb&&console.log("_invoke",a,c,b),cb.callHandler(a,b,c.silence?null:function(b){e(a,b,c)}))}function g(a,b,c){if(c||(c={}),d(a,b,c,!0)){-1==hb.join("#").indexOf(a)&&(cb.registerHandler(a,j),hb[hb.length]=a),fb&&console.log("_on",a,c,b);var e=h(a,c.localId);e.push([a,b,c])}}function h(a,b){gb[a]=gb[a]||{noid:[]};var c=gb[a];return b?c[b]||(c[b]=[]):c.noid}function i(a,b){gb[a]=gb[a]||{noid:[]};var c=gb[a];return[].concat(b?c[b]||(c[b]=[]):[],c.noid)}function j(a,b,c){var d=i(c,a.localId),f={code:1e3,errMsg:""};a.responseCallback=function(a){f=a},A(d,function(b){e(b[0],a,b[2])}),b&&function(){fb&&console.log("_responseCallback",c,f),b(f)}()}function k(){A(hb,function(a){cb.registerHandler(a,j)})}function l(a){if(!a)throw": YDK jsbridge install failed! Please contact <dingzq>";cb=a,a._simulateInvoke&&(q._simulateNative=a._simulateInvoke),k(),db&&(f(db[0],db[1],db[2]),db=null)}function m(){A(eb,function(a){w(a)?a.call(null,q):z(a)&&(a[3]?g(a[0],a[1],a[2]):f(a[0],a[1],a[2]))}),eb=null}if(!a.ydk){var n="1.4.4",o="https:"===location.protocol?"https://shared-https.ydstatic.com":"http://shared.ydstatic.com",p=o+"/js/ydk",q=a.ydk={version:n,cdn:o},r=[],s={},t=s.toString,u=s.hasOwnProperty,v=q.hasOwn=function(a,b){return u.call(a,b)},w=q.isFunction=function(a){return"[object Function]"===t.call(a)},x=q.isString=function(a){return"[object String]"===t.call(a)},y=(q.isNumber=function(a){return"[object Number]"===t.call(a)},q.isObject=function(a){return"[object Object]"===t.call(a)}),z=q.isArray=Array.isArray||function(a){return"[object Array]"===t.call(a)},A=q.forEach=r.forEach?function(a,b){a||(a=[]),a.forEach(b)}:function(a,b){a||(a=[]);for(var c=0,d=a.length;d>c;c++)b(a[c],c,a)},B=q.keys=Object.keys||function(a){var b=[];for(var c in a)v(a,c)&&b.push(c);return b},C=function(b,c){if(!b)return c||a;if(y(b))return b;if(w(b))return b();if(!x(b))return null;if(!/^(?:(?:\w+\.)+)?\w+$/.test(b))throw new Error("error namespace string: "+b);for(var d,e=b.split("."),f=c||a;d=e.shift();)f=f[d]||(f[d]={});return f},D=function(a){return function(b){var c=arguments.length;if(2>c||null==b)return b;for(var d=1;c>d;d++)for(var e=arguments[d],f=B(e),g=f.length,h=0;g>h;h++){var i=f[h];a&&void 0!==b[i]||(b[i]=e[i])}return b}},E=q._extend=D(),F=D(!0);q.extend=function(a,b){1===arguments.length&&(b=a,a=null),F(C(a,q),b)};var G=document,H=G.head||G.getElementsByTagName("head")[0],I=H.getElementsByTagName("base")[0],J=function(a,b){function c(c){console.log("script loaded "+c+": ",g.src),g.onload=g.onerror=g.onreadystatechange=null,H.removeChild(g),g=null,a.length?J(a,b):(console.log("scripts load finish!"),w(b)&&b())}function d(){c("error")}function e(){c("success")}if(0===a.length)return void setTimeout(function(){w(b)&&b()},0);var f=a.shift(),g=G.createElement("script");g.charset="utf-8","onload"in g?(g.onload=e,g.onerror=d):g.onreadystatechange=function(){/loaded|complete/.test(g.readyState)&&e()},g.async="async",g.src=f,I?H.insertBefore(g,I):H.appendChild(g)},K=navigator.userAgent.toLowerCase()||"",L=navigator.vendor&&navigator.vendor.toLowerCase()||"",M=navigator.appVersion.toLowerCase()||"",N=K.match(/youdaodict\/(\d+(?:\.\d+)*)\s*(?:\(([^\)]*)\))?/i),O=q.isYD=!!N,P=q.ni={version:"",features:{}};O&&(P.version=N[1],N[2]&&A(N[2].split(/\s*;\s*/),function(a){a=a.split("/"),P.features[a[0]]=a[1]||!0}));var Q=q.isSupportNativeJsBridge=!!P.features.jsbridge,R=(q.isOldYD=function(){var c=-1!==K.indexOf("yddict")||-1!==K.indexOf("youdaodict"),d=a.YoudaoDictAndroid!==b,e=a.dict!==b&&a.dict.share!==b,f=-1!==K.indexOf("ydshare"),g=-1!==K.indexOf("youdao_dict_android");return!Q&&(c||d||e||f||g)}(),q.isWX=/micromessenger/i.test(K),q.isChrome=/chrome|chromium/i.test(K)&&/google inc/.test(L),q.isFirefox=/firefox/i.test(K),q.isOpera=/^Opera\//.test(K)||/\x20OPR\//.test(K),q.isSafari=/safari/i.test(K)&&/apple computer/i.test(L),q.isIe=function(a){return a?a>=11?"ActiveXObject"in window:new RegExp("msie "+a).test(K):/msie/i.test(K)||"ActiveXObject"in window},q.isIphone=/iphone/i.test(K)),S=q.isIpad=/ipad/i.test(K),T=q.isIpod=/ipod/i.test(K),U=(q.isIos=R||S||T,q.isAndroid=/android/i.test(K)),V=q.isAndroidPhone=U&&/mobile/i.test(K),W=q.isAndroidTablet=U&&!/mobile/i.test(K),X=q.isBlackberry=/blackberry/i.test(K),Y=q.isCoolpad=/coolpad/i.test(K),Z=(q.isMac=/mac/i.test(M),q.isWindows=/win/i.test(M)),$=q.isWindowsPhone=Z&&/phone/i.test(K),_=q.isWindowsTablet=Z&&!$&&/touch/i.test(K),ab=q.isMobile=R||T||V||X||$||Y,bb=q.isTablet=S||W||_,cb=(q.isDesktop=!ab&&!bb,q.isTouchDevice="ontouchstart"in window||"DocumentTouch"in window&&document instanceof DocumentTouch,c());cb||(Q?(G.addEventListener("YoudaoWebViewJavascriptBridgeReady",function(){l(c())},!1),window.__hasYoudaoWebViewJavascriptBridgeInThisFile||J([p+"/webviewjsb-"+n+"-min.js"])):J(function(){var a=p+"/webjsb-"+n+"-min.js",b="https://res.wx.qq.com/open/js/jweixin-1.0.0.js",c="https://xue.youdao.com/imapi/wxauth?_t="+ +new Date,d=p+"/wxconfig-"+n+"-min.js",e=[];return window.__hasYoudaoWebJavascriptBridgeInThisFile||e.push(a),q.isWX&&e.push(b,c,d),e}(),function(){l(c())})),q.configStatus=!1;var db,eb=[],fb=!1,gb={},hb=["onNetStatusChange","onOrientationChange","onVoicePlayEnd","onVoicePlayProgress","onVoiceRecordEnd","onReply"];q.extend({ns:C,require:J,_on:g,_invoke:f,isDebug:function(){return fb}}),q.extend({config:function(a){fb=a.debug||!1,f("config",{debug:fb,jsApiList:a.jsApiList||[]},function(){return a._complete=function(a){1e3===a.code&&(q.configStatus=!0,q.getClientInfo({complete:function(a){a.debug&&(fb=!0),fb?J([o+"/js/console/v2.js"],function(){m()}):m()}}))},a}())},ready:function(a){q.configStatus?a.call(null,q):eb.push(a)},checkJsApi:function(a){f("checkJsApi",{jsApiList:a.jsApiList},a)},onNetStatusChange:function(a){g("onNetStatusChange",{},a)},getNetworkType:function(a){f("getNetworkType",{},a)},getClientInfo:function(a){f("getClientInfo",{},a)},onOrientationChange:function(a){g("onOrientationChange",{},a)},getOrientationStatus:function(a){f("getOrientationStatus",{},a)},toast:function(a){f("toast",{msg:a.msg,position:a.position||"bottom",duration:a.duration||3},a)},onPageVisibilityChange:function(a){g("onPageVisibilityChange",{},a)},chooseImage:function(a){f("chooseImage",{},a)},previewImage:function(a){f("previewImage",{current:a.current,urls:a.urls},a)},uploadImage:function(a){f("uploadImage",{localId:a.localId,isShowProgressTips:a.isShowProgressTips||1},a)},downloadImage:function(a){f("downloadImage",{serverId:a.serverId,progress:a.progress||!1},a)},startRecord:function(a){f("startRecord",{},a)},stopRecord:function(a){f("stopRecord",{},a)},onVoiceRecordEnd:function(a){g("onVoiceRecordEnd",{localId:a.localId||""},a)},uploadVoice:function(a){f("uploadVoice",{localId:a.localId},a)},playVoice:function(a){f("playVoice",{localId:a.localId,currentTime:a.currentTime,poster:a.poster||"",link:a.link||"",options:a.options||""},a)},pauseVoice:function(a){f("pauseVoice",{localId:a.localId||""},a)},stopVoice:function(a){f("stopVoice",{localId:a.localId||""},a)},onVoicePlayEnd:function(a){g("onVoicePlayEnd",{localId:a.localId||""},a)},onVoicePlayProgress:function(a){g("onVoicePlayProgress",{localId:a.localId||""},a)},share:function(a){f("share",{type:a.type||"",title:a.title||"",desc:a.desc||"",link:a.link||"",imgUrl:a.imgUrl||"",shift:!!a.shift},a)},ajax:function(a){f("ajax",{url:a.url,type:a.type||"GET",data:a.data||{},dataType:a.dataType||"json",jsonp:a.jsonp||"callback",timeout:a.timeout||0,async:a.async||!0,cache:a.cache||!1},a)},isLogin:function(a){f("isLogin",{},a)},login:function(a){var b="ydk_login_times_flag",c=+new Date,d=localStorage.getItem(b)-0||0;3e3>c-d||(localStorage.setItem(b,c),f("login",{},a))},getUserInfo:function(a){f("getUserInfo",{},a)},rlog:function(){var a={},b=function(b){var c={};A(B(b),function(a){w(b[a])||(c[a]=b[a])}),f("rlog",E({},a,c),b)};return b.addPost=function(b){return E(a,b)},b}()})}}(this);
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
    }
    else{
        return null;
    }
}
function setCookie(name,value){
  var Days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}  
UrlParam = function() { // url参数 

　　var data, index; 

　　(function init() { 

　　　　data = []; //值，如[["1","2"],["zhangsan"],["lisi"]] 

　　　　index = {}; //键:索引，如{a:0,b:1,c:2} 

　　　　var u = window.location.search.substr(1); 

　　　　if (u != '') { 

　　　　　　var params = decodeURIComponent(u).split('&'); 

　　　　　　for (var i = 0, len = params.length; i < len; i++) { 

　　　　　　　　if (params[i] != '') { 

　　　　　　　　　　var p = params[i].split("="); 

　　　　　　　　　　if (p.length == 1 || (p.length == 2 && p[1] == '')) {// p | p= | = 

　　　　　　　　　　　　data.push(['']); 

　　　　　　　　　　　　index[p[0]] = data.length - 1; 

　　　　　　　　　　} else if (typeof(p[0]) == 'undefined' || p[0] == '') { // =c 舍弃 

　　　　　　　　　　　　continue; 

　　　　　　　　　　} else if (typeof(index[p[0]]) == 'undefined') { // c=aaa 

　　　　　　　　　　　　data.push([p[1]]); 

　　　　　　　　　　　　index[p[0]] = data.length - 1; 

　　　　　　　　　　} else {// c=aaa 

　　　　　　　　　　　　data[index[p[0]]].push(p[1]); 

　　　　　　　　　　} 

　　　　　　　　} 

　　　　　　} 

　　　　} 

　　})(); 

　　return { 

 　　　　// 获得参数,类似request.getParameter() 

　　　　param : function(o) { // o: 参数名或者参数次序 

　　　　　　try { 

　　　　　　　　return (typeof(o) == 'number' ? data[o][0] : data[index[o]][0]); 

　　　　　　} catch (e) { 

　　　　　　} 

　　　　}, 

　　　　//获得参数组, 类似request.getParameterValues() 

　　　　paramValues : function(o) { // o: 参数名或者参数次序 

　　　　　　try { 

　　　　　　　　return (typeof(o) == 'number' ? data[o] : data[index[o]]); 

　　　　　　} catch (e) {} 

　　　　}, 

　　　　//是否含有paramName参数 

　　　　hasParam : function(paramName) { 

　　　　　　return typeof(paramName) == 'string' ? typeof(index[paramName]) != 'undefined' : false; 

　　　　}, 

　　　　// 获得参数Map ,类似request.getParameterMap() 

　　　　paramMap : function() { 

　　　　　　var map = {}; 

　　　　　　try { 

　　　　　　　　for (var p in index) { map[p] = data[index[p]]; } 

　　　　　　} catch (e) {} 

　　　　　　return map; 

　　　　} 

  　　} 

}();