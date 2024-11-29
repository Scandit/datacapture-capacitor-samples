/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 361:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! Capacitor: https://capacitor.ionicframework.com/ - MIT License */
var capacitorExports=function(e){"use strict";var t,r,n,i,o,s,a,u,c,l,d,p,h,f;(t=e.CameraSource||(e.CameraSource={})).Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS",(r=e.CameraDirection||(e.CameraDirection={})).Rear="REAR",r.Front="FRONT",(n=e.CameraResultType||(e.CameraResultType={})).Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",(i=e.FilesystemDirectory||(e.FilesystemDirectory={})).Documents="DOCUMENTS",i.Data="DATA",i.Cache="CACHE",i.External="EXTERNAL",i.ExternalStorage="EXTERNAL_STORAGE",(o=e.FilesystemEncoding||(e.FilesystemEncoding={})).UTF8="utf8",o.ASCII="ascii",o.UTF16="utf16",(s=e.HapticsImpactStyle||(e.HapticsImpactStyle={})).Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",(a=e.HapticsNotificationType||(e.HapticsNotificationType={})).SUCCESS="SUCCESS",a.WARNING="WARNING",a.ERROR="ERROR",(u=e.KeyboardStyle||(e.KeyboardStyle={})).Dark="DARK",u.Light="LIGHT",(c=e.KeyboardResize||(e.KeyboardResize={})).Body="body",c.Ionic="ionic",c.Native="native",c.None="none",(l=e.ActionSheetOptionStyle||(e.ActionSheetOptionStyle={})).Default="DEFAULT",l.Destructive="DESTRUCTIVE",l.Cancel="CANCEL",(d=e.PermissionType||(e.PermissionType={})).Camera="camera",d.Photos="photos",d.Geolocation="geolocation",d.Notifications="notifications",d.ClipboardRead="clipboard-read",d.ClipboardWrite="clipboard-write",d.Microphone="microphone",(p=e.PhotosAlbumType||(e.PhotosAlbumType={})).Smart="smart",p.Shared="shared",p.User="user",(h=e.StatusBarStyle||(e.StatusBarStyle={})).Dark="DARK",h.Light="LIGHT",(f=e.StatusBarAnimation||(e.StatusBarAnimation={})).None="NONE",f.Slide="SLIDE",f.Fade="FADE";var m,v=function(){function e(){var e=this;this.platform="web",this.isNative=!1,this.Plugins={},"undefined"!=typeof Proxy&&(this.Plugins=new Proxy(this.Plugins,{get:function(t,r){if(void 0===t[r]){var n=e;return new Proxy({},{get:function(e,t){return void 0===e[t]?n.pluginMethodNoop.bind(n,e,t,r):e[t]}})}return t[r]}}))}return e.prototype.pluginMethodNoop=function(e,t,r){return Promise.reject(r+" does not have web implementation.")},e.prototype.getPlatform=function(){return this.platform},e.prototype.isPluginAvailable=function(e){return this.Plugins.hasOwnProperty(e)},e.prototype.convertFileSrc=function(e){return e},e.prototype.handleError=function(e){console.error(e)},e}(),y=(m="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:{}).Capacitor=m.Capacitor||new v,g=y.Plugins,w=function(){function e(){this.plugins={},this.loadedPlugins={}}return e.prototype.addPlugin=function(e){this.plugins[e.config.name]=e},e.prototype.getPlugin=function(e){return this.plugins[e]},e.prototype.loadPlugin=function(e){var t=this.getPlugin(e);t?t.load():console.error("Unable to load web plugin "+e+", no such plugin found.")},e.prototype.getPlugins=function(){var e=[];for(var t in this.plugins)e.push(this.plugins[t]);return e},e}(),b=new w,P=function(){function e(e,t){this.config=e,this.loaded=!1,this.listeners={},this.windowListeners={},t?t.addPlugin(this):b.addPlugin(this)}return e.prototype.addWindowListener=function(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0},e.prototype.removeWindowListener=function(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)},e.prototype.addListener=function(e,t){var r=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);var n=this.windowListeners[e];return n&&!n.registered&&this.addWindowListener(n),{remove:function(){r.removeListener(e,t)}}},e.prototype.removeListener=function(e,t){var r=this.listeners[e];if(r){var n=r.indexOf(t);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}},e.prototype.removeAllListeners=function(){for(var e in this.listeners={},this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}},e.prototype.notifyListeners=function(e,t){var r=this.listeners[e];r&&r.forEach((function(e){return e(t)}))},e.prototype.hasListeners=function(e){return!!this.listeners[e].length},e.prototype.registerWindowListener=function(e,t){var r=this;this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:function(e){r.notifyListeners(t,e)}}},e.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},e.prototype.load=function(){this.loaded=!0},e}(),S=function(e){for(var t=0,r=b.getPlugins();t<r.length;t++){var n=r[t];E(e,n)}},E=function(e,t){e.hasOwnProperty(t.config.name)&&!function(e){return e.config.platforms&&e.config.platforms.indexOf(Capacitor.platform)>=0}(t)||(e[t.config.name]=t)},x=function(e,t){return(x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function R(e,t){function r(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function C(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{u(n.next(e))}catch(e){o(e)}}function a(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}u((n=n.apply(e,t||[])).next())}))}function T(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var A=function(e){function t(){return e.call(this,{name:"Accessibility",platforms:["web"]})||this}return R(t,e),t.prototype.isScreenReaderEnabled=function(){throw new Error("Feature not available in the browser")},t.prototype.speak=function(e){if(!("speechSynthesis"in window))return Promise.reject("Browser does not support the Speech Synthesis API");var t=new SpeechSynthesisUtterance(e.value);return e.language&&(t.lang=e.language),window.speechSynthesis.speak(t),Promise.resolve()},t}(P),L=new A,D=function(e){function t(){var t=e.call(this,{name:"App",platforms:["web"]})||this;return"undefined"!=typeof document&&document.addEventListener("visibilitychange",t.handleVisibilityChange.bind(t),!1),t}return R(t,e),t.prototype.exitApp=function(){throw new Error("Method not implemented.")},t.prototype.canOpenUrl=function(e){return Promise.resolve({value:!0})},t.prototype.openUrl=function(e){return Promise.resolve({completed:!0})},t.prototype.getLaunchUrl=function(){return Promise.resolve({url:""})},t.prototype.getState=function(){return Promise.resolve({isActive:!0!==document.hidden})},t.prototype.handleVisibilityChange=function(){var e={isActive:!0!==document.hidden};this.notifyListeners("appStateChange",e)},t}(P),F=new D,I=function(e){function t(){return e.call(this,{name:"Browser",platforms:["web"]})||this}return R(t,e),t.prototype.open=function(e){return C(this,void 0,void 0,(function(){return T(this,(function(t){return this._lastWindow=window.open(e.url,e.windowName||"_blank"),[2,Promise.resolve()]}))}))},t.prototype.prefetch=function(e){return C(this,void 0,void 0,(function(){return T(this,(function(e){return[2,Promise.resolve()]}))}))},t.prototype.close=function(){return C(this,void 0,void 0,(function(){return T(this,(function(e){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]}))}))},t}(P),N=new I,O=function(t){function r(){return t.call(this,{name:"Camera",platforms:["web"]})||this}return R(r,t),r.prototype.getPhoto=function(e){return C(this,void 0,void 0,(function(){var t=this;return T(this,(function(r){return[2,new Promise((function(r,n){return C(t,void 0,void 0,(function(){var t,i=this;return T(this,(function(o){switch(o.label){case 0:return e.webUseInput?(this.fileInputExperience(e,r),[3,7]):[3,1];case 1:if(!customElements.get("pwa-camera-modal"))return[3,6];t=document.createElement("pwa-camera-modal"),document.body.appendChild(t),o.label=2;case 2:return o.trys.push([2,4,,5]),[4,t.componentOnReady()];case 3:return o.sent(),t.addEventListener("onPhoto",(function(o){return C(i,void 0,void 0,(function(){var i,s;return T(this,(function(a){switch(a.label){case 0:return null!==(i=o.detail)?[3,1]:(n("User cancelled photos app"),[3,4]);case 1:return i instanceof Error?(n(i.message),[3,4]):[3,2];case 2:return s=r,[4,this._getCameraPhoto(i,e)];case 3:s.apply(void 0,[a.sent()]),a.label=4;case 4:return t.dismiss(),document.body.removeChild(t),[2]}}))}))})),t.present(),[3,5];case 4:return o.sent(),this.fileInputExperience(e,r),[3,5];case 5:return[3,7];case 6:console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),this.fileInputExperience(e,r),o.label=7;case 7:return[2]}}))}))}))]}))}))},r.prototype.fileInputExperience=function(t,r){var n=document.querySelector("#_capacitor-camera-input"),i=function(){n.parentNode&&n.parentNode.removeChild(n)};n||((n=document.createElement("input")).id="_capacitor-camera-input",n.type="file",document.body.appendChild(n)),n.accept="image/*",n.capture=!0,t.source===e.CameraSource.Photos||t.source===e.CameraSource.Prompt?n.removeAttribute("capture"):t.direction===e.CameraDirection.Front?n.capture="user":t.direction===e.CameraDirection.Rear&&(n.capture="environment"),n.addEventListener("change",(function(o){var s=n.files[0],a="jpeg";if("image/png"===s.type?a="png":"image/gif"===s.type&&(a="gif"),t.resultType===e.CameraResultType.DataUrl||t.resultType===e.CameraResultType.Base64){var u=new FileReader;u.addEventListener("load",(function(){if(t.resultType===e.CameraResultType.DataUrl)r({dataUrl:u.result,format:a});else if(t.resultType===e.CameraResultType.Base64){var n=u.result.split(",")[1];r({base64String:n,format:a})}i()})),u.readAsDataURL(s)}else r({webPath:URL.createObjectURL(s),format:a}),i()})),n.click()},r.prototype._getCameraPhoto=function(t,r){return new Promise((function(n,i){var o=new FileReader,s=t.type.split("/")[1];r.resultType===e.CameraResultType.Uri?n({webPath:URL.createObjectURL(t),format:s}):(o.readAsDataURL(t),o.onloadend=function(){var t=o.result;r.resultType===e.CameraResultType.DataUrl?n({dataUrl:t,format:s}):n({base64String:t.split(",")[1],format:s})},o.onerror=function(e){i(e)})}))},r}(P),_=new O,W=function(e){function t(){return e.call(this,{name:"Clipboard",platforms:["web"]})||this}return R(t,e),t.prototype.write=function(e){return C(this,void 0,void 0,(function(){var t,r,n;return T(this,(function(i){switch(i.label){case 0:return navigator.clipboard?void 0!==e.string||e.url?navigator.clipboard.writeText?[4,navigator.clipboard.writeText(void 0!==e.string?e.string:e.url)]:[2,Promise.reject("Writting to clipboard not supported in this browser")]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return i.sent(),[3,10];case 2:if(!e.image)return[3,9];if(!navigator.clipboard.write)return[2,Promise.reject("Setting images not supported in this browser")];i.label=3;case 3:return i.trys.push([3,7,,8]),[4,fetch(e.image)];case 4:return[4,i.sent().blob()];case 5:return t=i.sent(),r=new ClipboardItem(((n={})[t.type]=t,n)),[4,navigator.clipboard.write([r])];case 6:return i.sent(),[3,8];case 7:return i.sent(),[2,Promise.reject("Failed to write image")];case 8:return[3,10];case 9:return[2,Promise.reject("Nothing to write")];case 10:return[2,Promise.resolve()]}}))}))},t.prototype.read=function(){return C(this,void 0,void 0,(function(){var e,t,r,n;return T(this,(function(i){switch(i.label){case 0:return navigator.clipboard?navigator.clipboard.read?[3,1]:navigator.clipboard.readText?[2,this.readText()]:[2,Promise.reject("Reading from clipboard not supported in this browser")]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return i.trys.push([1,5,,6]),[4,navigator.clipboard.read()];case 2:return e=i.sent(),t=e[0].types[0],[4,e[0].getType(t)];case 3:return r=i.sent(),[4,this._getBlobData(r,t)];case 4:return n=i.sent(),[2,Promise.resolve({value:n,type:t})];case 5:return i.sent(),[2,this.readText()];case 6:return[2]}}))}))},t.prototype.readText=function(){return C(this,void 0,void 0,(function(){var e;return T(this,(function(t){switch(t.label){case 0:return[4,navigator.clipboard.readText()];case 1:return e=t.sent(),[2,Promise.resolve({value:e,type:"text/plain"})]}}))}))},t.prototype._getBlobData=function(e,t){return new Promise((function(r,n){var i=new FileReader;t.includes("image")?i.readAsDataURL(e):i.readAsText(e),i.onloadend=function(){var e=i.result;r(e)},i.onerror=function(e){n(e)}}))},t}(P),U=new W,k=function(t){function r(){var r=t.call(this,{name:"Filesystem",platforms:["web"]})||this;return r.DEFAULT_DIRECTORY=e.FilesystemDirectory.Data,r.DB_VERSION=1,r.DB_NAME="Disc",r._writeCmds=["add","put","delete"],r}return R(r,t),r.prototype.initDb=function(){return C(this,void 0,void 0,(function(){var e=this;return T(this,(function(t){if(void 0!==this._db)return[2,this._db];if(!("indexedDB"in window))throw new Error("This browser doesn't support IndexedDB");return[2,new Promise((function(t,n){var i=indexedDB.open(e.DB_NAME,e.DB_VERSION);i.onupgradeneeded=r.doUpgrade,i.onsuccess=function(){e._db=i.result,t(i.result)},i.onerror=function(){return n(i.error)},i.onblocked=function(){console.warn("db blocked")}}))]}))}))},r.doUpgrade=function(e){var t=e.target.result;switch(e.oldVersion){case 0:case 1:default:t.objectStoreNames.contains("FileStorage")&&t.deleteObjectStore("FileStorage"),t.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}},r.prototype.dbRequest=function(e,t){return C(this,void 0,void 0,(function(){var r;return T(this,(function(n){return r=-1!==this._writeCmds.indexOf(e)?"readwrite":"readonly",[2,this.initDb().then((function(n){return new Promise((function(i,o){var s=n.transaction(["FileStorage"],r).objectStore("FileStorage"),a=s[e].apply(s,t);a.onsuccess=function(){return i(a.result)},a.onerror=function(){return o(a.error)}}))}))]}))}))},r.prototype.dbIndexRequest=function(e,t,r){return C(this,void 0,void 0,(function(){var n;return T(this,(function(i){return n=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",[2,this.initDb().then((function(i){return new Promise((function(o,s){var a=i.transaction(["FileStorage"],n).objectStore("FileStorage").index(e),u=a[t].apply(a,r);u.onsuccess=function(){return o(u.result)},u.onerror=function(){return s(u.error)}}))}))]}))}))},r.prototype.getPath=function(e,t){e=e||this.DEFAULT_DIRECTORY;var r=void 0!==t?t.replace(/^[/]+|[/]+$/g,""):"",n="/"+e;return""!==t&&(n+="/"+r),n},r.prototype.clear=function(){return C(this,void 0,void 0,(function(){var e,t;return T(this,(function(r){switch(r.label){case 0:return[4,this.initDb()];case 1:return e=r.sent(),t=e.transaction(["FileStorage"],"readwrite"),t.objectStore("FileStorage").clear(),[2,{}]}}))}))},r.prototype.readFile=function(e){return C(this,void 0,void 0,(function(){var t,r;return T(this,(function(n){switch(n.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:if(void 0===(r=n.sent()))throw Error("File does not exist.");return[2,{data:r.content}]}}))}))},r.prototype.writeFile=function(e){return C(this,void 0,void 0,(function(){var t,r,n,i,o,s,a,u,c,l;return T(this,(function(d){switch(d.label){case 0:return t=this.getPath(e.directory,e.path),r=e.data,n=e.recursive,[4,this.dbRequest("get",[t])];case 1:if((i=d.sent())&&"directory"===i.type)throw"The supplied path is a directory.";return o=e.encoding,s=t.substr(0,t.lastIndexOf("/")),[4,this.dbRequest("get",[s])];case 2:return void 0!==d.sent()||-1===(a=s.indexOf("/",1))?[3,4]:(u=s.substr(a),[4,this.mkdir({path:u,directory:e.directory,recursive:n})]);case 3:d.sent(),d.label=4;case 4:return c=Date.now(),l={path:t,folder:s,type:"file",size:r.length,ctime:c,mtime:c,content:!o&&r.indexOf(",")>=0?r.split(",")[1]:r},[4,this.dbRequest("put",[l])];case 5:return d.sent(),[2,{uri:l.path}]}}))}))},r.prototype.appendFile=function(e){return C(this,void 0,void 0,(function(){var t,r,n,i,o,s,a,u,c;return T(this,(function(l){switch(l.label){case 0:return t=this.getPath(e.directory,e.path),r=e.data,n=t.substr(0,t.lastIndexOf("/")),i=Date.now(),o=i,[4,this.dbRequest("get",[t])];case 1:if((s=l.sent())&&"directory"===s.type)throw"The supplied path is a directory.";return[4,this.dbRequest("get",[n])];case 2:return void 0!==l.sent()||-1===(a=n.indexOf("/",1))?[3,4]:(u=n.substr(a),[4,this.mkdir({path:u,directory:e.directory,recursive:!0})]);case 3:l.sent(),l.label=4;case 4:return void 0!==s&&(r=s.content+r,o=s.ctime),c={path:t,folder:n,type:"file",size:r.length,ctime:o,mtime:i,content:r},[4,this.dbRequest("put",[c])];case 5:return l.sent(),[2,{}]}}))}))},r.prototype.deleteFile=function(e){return C(this,void 0,void 0,(function(){var t;return T(this,(function(r){switch(r.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:if(void 0===r.sent())throw Error("File does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])];case 2:if(0!==r.sent().length)throw Error("Folder is not empty.");return[4,this.dbRequest("delete",[t])];case 3:return r.sent(),[2,{}]}}))}))},r.prototype.mkdir=function(e){return C(this,void 0,void 0,(function(){var t,r,n,i,o,s,a,u,c;return T(this,(function(l){switch(l.label){case 0:return t=this.getPath(e.directory,e.path),r=e.recursive,n=t.substr(0,t.lastIndexOf("/")),i=(t.match(/\//g)||[]).length,[4,this.dbRequest("get",[n])];case 1:return o=l.sent(),[4,this.dbRequest("get",[t])];case 2:if(s=l.sent(),1===i)throw Error("Cannot create Root directory");if(void 0!==s)throw Error("Current directory does already exist.");if(!r&&2!==i&&void 0===o)throw Error("Parent directory must exist");return r&&2!==i&&void 0===o?(a=n.substr(n.indexOf("/",1)),[4,this.mkdir({path:a,directory:e.directory,recursive:r})]):[3,4];case 3:l.sent(),l.label=4;case 4:return u=Date.now(),c={path:t,folder:n,type:"directory",size:0,ctime:u,mtime:u},[4,this.dbRequest("put",[c])];case 5:return l.sent(),[2,{}]}}))}))},r.prototype.rmdir=function(e){return C(this,void 0,void 0,(function(){var t,r,n,i,o,s,a,u,c,l;return T(this,(function(d){switch(d.label){case 0:return t=e.path,r=e.directory,n=e.recursive,i=this.getPath(r,t),[4,this.dbRequest("get",[i])];case 1:if(void 0===(o=d.sent()))throw Error("Folder does not exist.");if("directory"!==o.type)throw Error("Requested path is not a directory");return[4,this.readdir({path:t,directory:r})];case 2:if(0!==(s=d.sent()).files.length&&!n)throw Error("Folder is not empty");a=0,u=s.files,d.label=3;case 3:return a<u.length?(c=u[a],l=t+"/"+c,[4,this.stat({path:l,directory:r})]):[3,9];case 4:return"file"!==d.sent().type?[3,6]:[4,this.deleteFile({path:l,directory:r})];case 5:return d.sent(),[3,8];case 6:return[4,this.rmdir({path:l,directory:r,recursive:n})];case 7:d.sent(),d.label=8;case 8:return a++,[3,3];case 9:return[4,this.dbRequest("delete",[i])];case 10:return d.sent(),[2,{}]}}))}))},r.prototype.readdir=function(e){return C(this,void 0,void 0,(function(){var t,r,n;return T(this,(function(i){switch(i.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:if(r=i.sent(),""!==e.path&&void 0===r)throw Error("Folder does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])];case 2:return n=i.sent(),[2,{files:n.map((function(e){return e.substring(t.length+1)}))}]}}))}))},r.prototype.getUri=function(e){return C(this,void 0,void 0,(function(){var t,r;return T(this,(function(n){switch(n.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:return void 0!==(r=n.sent())?[3,3]:[4,this.dbRequest("get",[t+"/"])];case 2:r=n.sent(),n.label=3;case 3:if(void 0===r)throw Error("Entry does not exist.");return[2,{uri:r.path}]}}))}))},r.prototype.stat=function(e){return C(this,void 0,void 0,(function(){var t,r;return T(this,(function(n){switch(n.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:return void 0!==(r=n.sent())?[3,3]:[4,this.dbRequest("get",[t+"/"])];case 2:r=n.sent(),n.label=3;case 3:if(void 0===r)throw Error("Entry does not exist.");return[2,{type:r.type,size:r.size,ctime:r.ctime,mtime:r.mtime,uri:r.path}]}}))}))},r.prototype.rename=function(e){return C(this,void 0,void 0,(function(){return T(this,(function(t){return[2,this._copy(e,!0)]}))}))},r.prototype.copy=function(e){return C(this,void 0,void 0,(function(){return T(this,(function(t){return[2,this._copy(e,!1)]}))}))},r.prototype._copy=function(e,t){return void 0===t&&(t=!1),C(this,void 0,void 0,(function(){var r,n,i,o,s,a,u,c,l,d,p,h,f,m,v,y,g=this;return T(this,(function(w){switch(w.label){case 0:if(r=e.to,n=e.from,i=e.directory,o=e.toDirectory,!r||!n)throw Error("Both to and from must be provided");if(o||(o=i),s=this.getPath(i,n),a=this.getPath(o,r),s===a)return[2,{}];if(a.startsWith(s))throw Error("To path cannot contain the from path");w.label=1;case 1:return w.trys.push([1,3,,6]),[4,this.stat({path:r,directory:o})];case 2:return u=w.sent(),[3,6];case 3:return w.sent(),(c=r.split("/")).pop(),l=c.join("/"),c.length>0?[4,this.stat({path:l,directory:o})]:[3,5];case 4:if("directory"!==w.sent().type)throw new Error("Parent directory of the to path is a file");w.label=5;case 5:return[3,6];case 6:if(u&&"directory"===u.type)throw new Error("Cannot overwrite a directory with a file");return[4,this.stat({path:n,directory:i})];case 7:switch(d=w.sent(),p=function(e,t,r){return C(g,void 0,void 0,(function(){var n,i;return T(this,(function(s){switch(s.label){case 0:return n=this.getPath(o,e),[4,this.dbRequest("get",[n])];case 1:return(i=s.sent()).ctime=t,i.mtime=r,[4,this.dbRequest("put",[i])];case 2:return s.sent(),[2]}}))}))},d.type){case"file":return[3,8];case"directory":return[3,15]}return[3,28];case 8:return[4,this.readFile({path:n,directory:i})];case 9:return h=w.sent(),t?[4,this.deleteFile({path:n,directory:i})]:[3,11];case 10:w.sent(),w.label=11;case 11:return[4,this.writeFile({path:r,directory:o,data:h.data})];case 12:return w.sent(),t?[4,p(r,d.ctime,d.mtime)]:[3,14];case 13:w.sent(),w.label=14;case 14:return[2,{}];case 15:if(u)throw Error("Cannot move a directory over an existing object");w.label=16;case 16:return w.trys.push([16,20,,21]),[4,this.mkdir({path:r,directory:o,recursive:!1})];case 17:return w.sent(),t?[4,p(r,d.ctime,d.mtime)]:[3,19];case 18:w.sent(),w.label=19;case 19:return[3,21];case 20:return w.sent(),[3,21];case 21:return[4,this.readdir({path:n,directory:i})];case 22:f=w.sent().files,m=0,v=f,w.label=23;case 23:return m<v.length?(y=v[m],[4,this._copy({from:n+"/"+y,to:r+"/"+y,directory:i,toDirectory:o},t)]):[3,26];case 24:w.sent(),w.label=25;case 25:return m++,[3,23];case 26:return t?[4,this.rmdir({path:n,directory:i})]:[3,28];case 27:w.sent(),w.label=28;case 28:return[2,{}]}}))}))},r._debug=!0,r}(P),q=new k,j=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.forEach((function(t){if(t&&"object"==typeof t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})),e},B=function(e){function t(){return e.call(this,{name:"Geolocation",platforms:["web"]})||this}return R(t,e),t.prototype.getCurrentPosition=function(e){var t=this;return new Promise((function(r,n){return t.requestPermissions().then((function(t){window.navigator.geolocation.getCurrentPosition((function(e){r(e)}),(function(e){n(e)}),j({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},e))}))}))},t.prototype.watchPosition=function(e,t){return""+window.navigator.geolocation.watchPosition((function(e){t(e)}),(function(e){t(null,e)}),j({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},e))},t.prototype.clearWatch=function(e){return window.navigator.geolocation.clearWatch(parseInt(e.id,10)),Promise.resolve()},t}(P),K=new B,M=function(e){function t(){return e.call(this,{name:"Device",platforms:["web"]})||this}return R(t,e),t.prototype.getInfo=function(){return C(this,void 0,void 0,(function(){var e,t;return T(this,(function(r){return e=navigator.userAgent,t=this.parseUa(e),[2,Promise.resolve({model:t.model,platform:"web",appVersion:"",appBuild:"",appId:"",appName:"",operatingSystem:t.operatingSystem,osVersion:t.osVersion,manufacturer:navigator.vendor,isVirtual:!1,uuid:this.getUid()})]}))}))},t.prototype.getBatteryInfo=function(){return C(this,void 0,void 0,(function(){var e;return T(this,(function(t){switch(t.label){case 0:e={},t.label=1;case 1:return t.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return e=t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2,Promise.resolve({batteryLevel:e.level,isCharging:e.charging})]}}))}))},t.prototype.getLanguageCode=function(){return C(this,void 0,void 0,(function(){return T(this,(function(e){return[2,{value:navigator.language}]}))}))},t.prototype.parseUa=function(e){var t={},r=e.indexOf("(")+1,n=e.indexOf(") AppleWebKit");-1!==e.indexOf(") Gecko")&&(n=e.indexOf(") Gecko"));var i=e.substring(r,n);if(-1!==e.indexOf("Android"))t.model=i.replace("; wv","").split("; ").pop().split(" Build")[0],t.osVersion=i.split("; ")[1];else if(t.model=i.split("; ")[0],navigator.oscpu)t.osVersion=navigator.oscpu;else if(-1!==e.indexOf("Windows"))t.osVersion=i;else{var o=i.split("; ").pop().replace(" like Mac OS X","").split(" ");t.osVersion=o[o.length-1].replace(/_/g,".")}return/android/i.test(e)?t.operatingSystem="android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?t.operatingSystem="ios":/Win/.test(e)?t.operatingSystem="windows":/Mac/i.test(e)?t.operatingSystem="mac":t.operatingSystem="unknown",t},t.prototype.getUid=function(){var e=window.localStorage.getItem("_capuid");return e||(e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),window.localStorage.setItem("_capuid",e),e)},t}(P),V=new M,G=function(e){function t(){var t=e.call(this,{name:"LocalNotifications",platforms:["web"]})||this;return t.pending=[],t}return R(t,e),t.prototype.createChannel=function(e){throw new Error("Feature not available in the browser. "+e.id)},t.prototype.deleteChannel=function(e){throw new Error("Feature not available in the browser. "+e.id)},t.prototype.listChannels=function(){throw new Error("Feature not available in the browser")},t.prototype.sendPending=function(){var e=this,t=[],r=+new Date;this.pending.forEach((function(n){n.schedule&&n.schedule.at&&+n.schedule.at<=r&&(e.buildNotification(n),t.push(n))})),console.log("Sent pending, removing",t),this.pending=this.pending.filter((function(e){return!t.find((function(t){return t===e}))}))},t.prototype.sendNotification=function(e){var t=this,r=e;if(e.schedule&&e.schedule.at){var n=+e.schedule.at-+new Date;return this.pending.push(r),void setTimeout((function(){t.sendPending()}),n)}this.buildNotification(e)},t.prototype.buildNotification=function(e){var t=e;return new Notification(t.title,{body:t.body})},t.prototype.schedule=function(e){var t=this,r=[];return e.notifications.forEach((function(e){r.push(t.sendNotification(e))})),Promise.resolve({notifications:e.notifications.map((function(e){return{id:""+e.id}}))})},t.prototype.getPending=function(){return Promise.resolve({notifications:this.pending.map((function(e){return{id:""+e.id}}))})},t.prototype.registerActionTypes=function(e){throw new Error("Method not implemented.")},t.prototype.cancel=function(e){return console.log("Cancel these",e),this.pending=this.pending.filter((function(t){return!e.notifications.find((function(e){return e.id===""+t.id}))})),Promise.resolve()},t.prototype.areEnabled=function(){return Promise.resolve({value:"granted"===Notification.permission})},t.prototype.requestPermission=function(){return new Promise((function(e){Notification.requestPermission((function(t){var r=!0;"denied"!==t&&"default"!==t||(r=!1),e({granted:r})}))}))},t.prototype.requestPermissions=function(){return new Promise((function(e,t){Notification.requestPermission((function(r){"denied"!==r&&"default"!==r?e({results:[r]}):t(r)}))}))},t}(P),H=new G,z=function(e){function t(){return e.call(this,{name:"Share",platforms:["web"]})||this}return R(t,e),t.prototype.share=function(e){return navigator.share?navigator.share({title:e.title,text:e.text,url:e.url}):Promise.reject("Web Share API not available")},t}(P),X=new z,Y=function(e){function t(){return e.call(this,{name:"Modals",platforms:["web"]})||this}return R(t,e),t.prototype.alert=function(e){return C(this,void 0,void 0,(function(){return T(this,(function(t){return window.alert(e.message),[2,Promise.resolve()]}))}))},t.prototype.prompt=function(e){return C(this,void 0,void 0,(function(){var t;return T(this,(function(r){return t=window.prompt(e.message,e.inputText||""),[2,Promise.resolve({value:t,cancelled:null===t})]}))}))},t.prototype.confirm=function(e){return C(this,void 0,void 0,(function(){var t;return T(this,(function(r){return t=window.confirm(e.message),[2,Promise.resolve({value:t})]}))}))},t.prototype.showActions=function(e){return C(this,void 0,void 0,(function(){var t=this;return T(this,(function(r){return[2,new Promise((function(r,n){return C(t,void 0,void 0,(function(){var t,n=this;return T(this,(function(i){return(t=document.querySelector("pwa-action-sheet"))||(t=document.createElement("pwa-action-sheet"),document.body.appendChild(t)),t.header=e.title,t.cancelable=!1,t.options=e.options,t.addEventListener("onSelection",(function(e){return C(n,void 0,void 0,(function(){var t;return T(this,(function(n){return t=e.detail,r({index:t}),[2]}))}))})),[2]}))}))}))]}))}))},t}(P),$=new Y,J=function(e){function t(){var t=e.call(this,{name:"Motion"})||this;return t.registerWindowListener("devicemotion","accel"),t.registerWindowListener("deviceorientation","orientation"),t}return R(t,e),t}(P),Q=new J,Z=function(e){function t(){var t=e.call(this,{name:"Network",platforms:["web"]})||this;return t.listenerFunction=null,t}return R(t,e),t.prototype.getStatus=function(){return new Promise((function(e,t){if(window.navigator){var r=window.navigator.onLine,n=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,i=n?n.type||n.effectiveType:"wifi";e({connected:r,connectionType:r?i:"none"})}else t("Network info not available")}))},t.prototype.addListener=function(e,t){var r=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,n=r?r.type||r.effectiveType:"wifi",i=t.bind(this,{connected:!0,connectionType:n}),o=t.bind(this,{connected:!1,connectionType:"none"});if(0===e.localeCompare("networkStatusChange"))return window.addEventListener("online",i),window.addEventListener("offline",o),{remove:function(){window.removeEventListener("online",i),window.removeEventListener("offline",o)}}},t}(P),ee=new Z,te=function(t){function r(){return t.call(this,{name:"Permissions"})||this}return R(r,t),r.prototype.query=function(t){return C(this,void 0,void 0,(function(){var r,n;return T(this,(function(i){switch(i.label){case 0:return(r=window.navigator).permissions?(n=t.name===e.PermissionType.Photos?"camera":t.name,[4,r.permissions.query({name:n})]):[2,Promise.reject("This browser does not support the Permissions API")];case 1:return[2,{state:i.sent().state}]}}))}))},r}(P),re=new te,ne=function(e){function t(){return e.call(this,{name:"SplashScreen",platforms:["web"]})||this}return R(t,e),t.prototype.show=function(e,t){return Promise.resolve()},t.prototype.hide=function(e,t){return Promise.resolve()},t}(P),ie=new ne,oe=function(e){function t(){var t=e.call(this,{name:"Storage",platforms:["web"]})||this;return t.KEY_PREFIX="_cap_",t}return R(t,e),t.prototype.get=function(e){var t=this;return new Promise((function(r,n){r({value:window.localStorage.getItem(t.makeKey(e.key))})}))},t.prototype.set=function(e){var t=this;return new Promise((function(r,n){window.localStorage.setItem(t.makeKey(e.key),e.value),r()}))},t.prototype.remove=function(e){var t=this;return new Promise((function(r,n){window.localStorage.removeItem(t.makeKey(e.key)),r()}))},t.prototype.keys=function(){var e=this;return new Promise((function(t,r){t({keys:Object.keys(localStorage).filter((function(t){return e.isKey(t)})).map((function(t){return e.getKey(t)}))})}))},t.prototype.clear=function(){var e=this;return new Promise((function(t,r){Object.keys(localStorage).filter((function(t){return e.isKey(t)})).forEach((function(e){return window.localStorage.removeItem(e)})),t()}))},t.prototype.makeKey=function(e){return this.KEY_PREFIX+e},t.prototype.isKey=function(e){return 0===e.indexOf(this.KEY_PREFIX)},t.prototype.getKey=function(e){return e.substr(this.KEY_PREFIX.length)},t}(P),se=new oe,ae=function(e){function t(){return e.call(this,{name:"Toast",platforms:["web"]})||this}return R(t,e),t.prototype.show=function(e){return C(this,void 0,void 0,(function(){var t,r;return T(this,(function(n){return t=2e3,e.duration&&(t="long"===e.duration?3500:2e3),(r=document.createElement("pwa-toast")).duration=t,r.message=e.text,document.body.appendChild(r),[2]}))}))},t}(P),ue=new ae;S(g);return e.Accessibility=L,e.AccessibilityPluginWeb=A,e.App=F,e.AppPluginWeb=D,e.Browser=N,e.BrowserPluginWeb=I,e.Camera=_,e.CameraPluginWeb=O,e.Capacitor=y,e.Clipboard=U,e.ClipboardPluginWeb=W,e.Device=V,e.DevicePluginWeb=M,e.Filesystem=q,e.FilesystemPluginWeb=k,e.Geolocation=K,e.GeolocationPluginWeb=B,e.LocalNotifications=H,e.LocalNotificationsPluginWeb=G,e.Modals=$,e.ModalsPluginWeb=Y,e.Motion=Q,e.MotionPluginWeb=J,e.Network=ee,e.NetworkPluginWeb=Z,e.Permissions=re,e.PermissionsPluginWeb=te,e.Plugins=g,e.Share=X,e.SharePluginWeb=z,e.SplashScreen=ie,e.SplashScreenPluginWeb=ne,e.Storage=se,e.StoragePluginWeb=oe,e.Toast=ue,e.ToastPluginWeb=ae,e.WebPlugin=P,e.WebPluginRegistry=w,e.WebPlugins=b,e.mergeWebPlugin=E,e.mergeWebPlugins=S,e.registerWebPlugin=function(e){E(g,e)},e}({});
//# sourceMappingURL=capacitor.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./www/capacitor.js
var capacitor = __webpack_require__(361);
;// CONCATENATED MODULE: ./node_modules/@capacitor/core/dist/index.js
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof __webpack_require__.g !== 'undefined'
                ? __webpack_require__.g
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};

var ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const dist_Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof __webpack_require__.g !== 'undefined'
                ? __webpack_require__.g
                : {});
const registerPlugin = dist_Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const dist_Plugins = dist_Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(dist_Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new dist_Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new dist_Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const WebView = /*#__PURE__*/ (/* unused pure expression or super */ null && (registerPlugin('WebView')));


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/node_modules/@capacitor/core/dist/index.js
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const dist_createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const dist_initPlatforms = (win) => (win.CapacitorPlatforms = dist_createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const dist_CapacitorPlatforms = /*#__PURE__*/ dist_initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof __webpack_require__.g !== 'undefined'
                ? __webpack_require__.g
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const dist_addPlatform = dist_CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const dist_setPlatform = dist_CapacitorPlatforms.setPlatform;

const dist_legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};

var dist_ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(dist_ExceptionCode || (dist_ExceptionCode = {}));
class dist_CapacitorException extends Error {
    constructor(message, code, data) {
        super(message);
        this.message = message;
        this.code = code;
        this.data = data;
    }
}
const dist_getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const dist_createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : dist_getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new dist_CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, dist_ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new dist_CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, dist_ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = dist_CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const dist_initCapacitorGlobal = (win) => (win.Capacitor = dist_createCapacitor(win));

const core_dist_Capacitor = /*#__PURE__*/ dist_initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof __webpack_require__.g !== 'undefined'
                ? __webpack_require__.g
                : {});
const dist_registerPlugin = core_dist_Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const core_dist_Plugins = core_dist_Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const dist_registerWebPlugin = (plugin) => dist_legacyRegisterWebPlugin(core_dist_Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class dist_WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new core_dist_Capacitor.Exception(msg, dist_ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new core_dist_Capacitor.Exception(msg, dist_ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const dist_WebView = /*#__PURE__*/ (/* unused pure expression or super */ null && (dist_registerPlugin('WebView')));
/******** END WEB VIEW PLUGIN ********/
/******** COOKIES PLUGIN ********/
/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */
const encode = (str) => encodeURIComponent(str)
    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
    .replace(/[()]/g, escape);
class CapacitorCookiesPluginWeb extends dist_WebPlugin {
    async setCookie(options) {
        try {
            // Safely Encoded Key/Value
            const encodedKey = encode(options.key);
            const encodedValue = encode(options.value);
            // Clean & sanitize options
            const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="
            const path = (options.path || '/').replace('path=', ''); // Default is "path=/"
            document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}`;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async deleteCookie(options) {
        try {
            document.cookie = `${options.key}=; Max-Age=0`;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async clearCookies() {
        try {
            const cookies = document.cookie.split(';') || [];
            for (const cookie of cookies) {
                document.cookie = cookie
                    .replace(/^ +/, '')
                    .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
            }
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async clearAllCookies() {
        try {
            await this.clearCookies();
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
const CapacitorCookies = dist_registerPlugin('CapacitorCookies', {
    web: () => new CapacitorCookiesPluginWeb(),
});
// UTILITY FUNCTIONS
/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */
const readBlobAsBase64 = async (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
        const base64String = reader.result;
        // remove prefix "data:application/pdf;base64,"
        resolve(base64String.indexOf(',') >= 0
            ? base64String.split(',')[1]
            : base64String);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
});
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */
const normalizeHttpHeaders = (headers = {}) => {
    const originalKeys = Object.keys(headers);
    const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
    const normalized = loweredKeys.reduce((acc, key, index) => {
        acc[key] = headers[originalKeys[index]];
        return acc;
    }, {});
    return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */
const buildUrlParams = (params, shouldEncode = true) => {
    if (!params)
        return null;
    const output = Object.entries(params).reduce((accumulator, entry) => {
        const [key, value] = entry;
        let encodedValue;
        let item;
        if (Array.isArray(value)) {
            item = '';
            value.forEach(str => {
                encodedValue = shouldEncode ? encodeURIComponent(str) : str;
                item += `${key}=${encodedValue}&`;
            });
            // last character will always be "&" so slice it off
            item.slice(0, -1);
        }
        else {
            encodedValue = shouldEncode ? encodeURIComponent(value) : value;
            item = `${key}=${encodedValue}`;
        }
        return `${accumulator}&${item}`;
    }, '');
    // Remove initial "&" from the reduce
    return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */
const buildRequestInit = (options, extra = {}) => {
    const output = Object.assign({ method: options.method || 'GET', headers: options.headers }, extra);
    // Get the content-type
    const headers = normalizeHttpHeaders(options.headers);
    const type = headers['content-type'] || '';
    // If body is already a string, then pass it through as-is.
    if (typeof options.data === 'string') {
        output.body = options.data;
    }
    // Build request initializers based off of content-type
    else if (type.includes('application/x-www-form-urlencoded')) {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(options.data || {})) {
            params.set(key, value);
        }
        output.body = params.toString();
    }
    else if (type.includes('multipart/form-data')) {
        const form = new FormData();
        if (options.data instanceof FormData) {
            options.data.forEach((value, key) => {
                form.append(key, value);
            });
        }
        else {
            for (const key of Object.keys(options.data)) {
                form.append(key, options.data[key]);
            }
        }
        output.body = form;
        const headers = new Headers(output.headers);
        headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
        output.headers = headers;
    }
    else if (type.includes('application/json') ||
        typeof options.data === 'object') {
        output.body = JSON.stringify(options.data);
    }
    return output;
};
// WEB IMPLEMENTATION
class CapacitorHttpPluginWeb extends dist_WebPlugin {
    /**
     * Perform an Http request given a set of options
     * @param options Options to build the HTTP request
     */
    async request(options) {
        const requestInit = buildRequestInit(options, options.webFetchExtra);
        const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
        const url = urlParams ? `${options.url}?${urlParams}` : options.url;
        const response = await fetch(url, requestInit);
        const contentType = response.headers.get('content-type') || '';
        // Default to 'text' responseType so no parsing happens
        let { responseType = 'text' } = response.ok ? options : {};
        // If the response content-type is json, force the response to be json
        if (contentType.includes('application/json')) {
            responseType = 'json';
        }
        let data;
        let blob;
        switch (responseType) {
            case 'arraybuffer':
            case 'blob':
                blob = await response.blob();
                data = await readBlobAsBase64(blob);
                break;
            case 'json':
                data = await response.json();
                break;
            case 'document':
            case 'text':
            default:
                data = await response.text();
        }
        // Convert fetch headers to Capacitor HttpHeaders
        const headers = {};
        response.headers.forEach((value, key) => {
            headers[key] = value;
        });
        return {
            data,
            headers,
            status: response.status,
            url: response.url,
        };
    }
    /**
     * Perform an Http GET request given a set of options
     * @param options Options to build the HTTP request
     */
    async get(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'GET' }));
    }
    /**
     * Perform an Http POST request given a set of options
     * @param options Options to build the HTTP request
     */
    async post(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'POST' }));
    }
    /**
     * Perform an Http PUT request given a set of options
     * @param options Options to build the HTTP request
     */
    async put(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'PUT' }));
    }
    /**
     * Perform an Http PATCH request given a set of options
     * @param options Options to build the HTTP request
     */
    async patch(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'PATCH' }));
    }
    /**
     * Perform an Http DELETE request given a set of options
     * @param options Options to build the HTTP request
     */
    async delete(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: 'DELETE' }));
    }
}
const CapacitorHttp = dist_registerPlugin('CapacitorHttp', {
    web: () => new CapacitorHttpPluginWeb(),
});
/******** END HTTP PLUGIN ********/


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Capacitor/CommonCapacitor.js

class CapacitorError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
    static fromJSON(json) {
        if (json && json.code && json.message) {
            return new CapacitorError(json.code, json.message);
        }
        else {
            return null;
        }
    }
}
const capacitorExec = (successCallback, errorCallback, pluginName, functionName, args) => {
    if (window.Scandit && window.Scandit.DEBUG) {
        // tslint:disable-next-line:no-console
        console.log(`Called native function: ${functionName}`, args, { success: successCallback, error: errorCallback });
    }
    const extendedSuccessCallback = (message) => {
        const shouldCallback = message && message.shouldNotifyWhenFinished;
        const finishCallbackID = shouldCallback ? message.finishCallbackID : null;
        const started = Date.now();
        let callbackResult;
        if (successCallback) {
            callbackResult = successCallback(message);
        }
        if (shouldCallback) {
            const maxCallbackDuration = 50;
            const callbackDuration = Date.now() - started;
            if (callbackDuration > maxCallbackDuration) {
                // tslint:disable-next-line:no-console
                console.log(`[SCANDIT WARNING] Took ${callbackDuration}ms to execute callback that's blocking native execution. You should keep this duration short, for more information, take a look at the documentation.`);
            }
            core_dist_Plugins[pluginName].finishCallback([{
                    finishCallbackID,
                    result: callbackResult,
                }]);
        }
    };
    const extendedErrorCallback = (error) => {
        if (errorCallback) {
            const capacitorError = CapacitorError.fromJSON(error);
            if (capacitorError !== null) {
                error = capacitorError;
            }
            errorCallback(error);
        }
    };
    core_dist_Plugins[pluginName][functionName](args).then(extendedSuccessCallback, extendedErrorCallback);
};
const doReturnWithFinish = (finishCallbackID, result) => {
    if (core_dist_Plugins.ScanditBarcodeNative) {
        core_dist_Plugins.ScanditBarcodeNative.finishCallback({ result: Object.assign({ finishCallbackID }, result) });
    }
    else if (core_dist_Plugins.ScanditIdNative) {
        core_dist_Plugins.ScanditIdNative.finishCallback({ result: Object.assign({ finishCallbackID }, result) });
    }
    return result;
};
//# sourceMappingURL=CommonCapacitor.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Serializeable.js
// tslint:disable-next-line:ban-types
function ignoreFromSerialization(target, propertyName) {
    target.ignoredProperties = target.ignoredProperties || [];
    target.ignoredProperties.push(propertyName);
}
// tslint:disable-next-line:ban-types
function nameForSerialization(customName) {
    return (target, propertyName) => {
        target.customPropertyNames = target.customPropertyNames || {};
        target.customPropertyNames[propertyName] = customName;
    };
}
// tslint:disable-next-line:ban-types
function ignoreFromSerializationIfNull(target, propertyName) {
    target.ignoredIfNullProperties = target.ignoredIfNullProperties || [];
    target.ignoredIfNullProperties.push(propertyName);
}
// tslint:disable-next-line:ban-types
function serializationDefault(defaultValue) {
    return (target, propertyName) => {
        target.customPropertyDefaults = target.customPropertyDefaults || {};
        target.customPropertyDefaults[propertyName] = defaultValue;
    };
}
class Serializeable_DefaultSerializeable {
    toJSON() {
        const properties = Object.keys(this);
        // use @ignoreFromSerialization to ignore properties
        const ignoredProperties = this.ignoredProperties || [];
        // use @ignoreFromSerializationIfNull to ignore properties if they're null
        const ignoredIfNullProperties = this.ignoredIfNullProperties || [];
        // use @nameForSerialization('customName') to rename properties in the JSON output
        const customPropertyNames = this.customPropertyNames || {};
        // use @serializationDefault({}) to use a different value in the JSON output if they're null
        const customPropertyDefaults = this.customPropertyDefaults || {};
        return properties.reduce((json, property) => {
            if (ignoredProperties.includes(property)) {
                return json;
            }
            let value = this[property];
            if (value === undefined) {
                return json;
            }
            // Ignore if it's null and should be ignored.
            // This is basically responsible for not including optional properties in the JSON if they're null,
            // as that's not always deserialized to mean the same as not present.
            if (value === null && ignoredIfNullProperties.includes(property)) {
                return json;
            }
            if (value === null && customPropertyDefaults[property] !== undefined) {
                value = customPropertyDefaults[property];
            }
            // Serialize if serializeable
            if (value != null && value.toJSON) {
                value = value.toJSON();
            }
            // Serialize the array if the elements are serializeable
            if (Array.isArray(value)) {
                value = value.map(e => e.toJSON ? e.toJSON() : e);
            }
            const propertyName = customPropertyNames[property] || property;
            json[propertyName] = value;
            return json;
        }, {});
    }
}
//# sourceMappingURL=Serializeable.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Common.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Point extends Serializeable_DefaultSerializeable {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    static fromJSON(json) {
        return new Point(json.x, json.y);
    }
}
__decorate([
    nameForSerialization('x')
], Point.prototype, "_x", void 0);
__decorate([
    nameForSerialization('y')
], Point.prototype, "_y", void 0);
class Quadrilateral extends Serializeable_DefaultSerializeable {
    constructor(topLeft, topRight, bottomRight, bottomLeft) {
        super();
        this._topLeft = topLeft;
        this._topRight = topRight;
        this._bottomRight = bottomRight;
        this._bottomLeft = bottomLeft;
    }
    get topLeft() {
        return this._topLeft;
    }
    get topRight() {
        return this._topRight;
    }
    get bottomRight() {
        return this._bottomRight;
    }
    get bottomLeft() {
        return this._bottomLeft;
    }
    static fromJSON(json) {
        return new Quadrilateral(Point.fromJSON(json.topLeft), Point.fromJSON(json.topRight), Point.fromJSON(json.bottomRight), Point.fromJSON(json.bottomLeft));
    }
}
__decorate([
    nameForSerialization('topLeft')
], Quadrilateral.prototype, "_topLeft", void 0);
__decorate([
    nameForSerialization('topRight')
], Quadrilateral.prototype, "_topRight", void 0);
__decorate([
    nameForSerialization('bottomRight')
], Quadrilateral.prototype, "_bottomRight", void 0);
__decorate([
    nameForSerialization('bottomLeft')
], Quadrilateral.prototype, "_bottomLeft", void 0);
var MeasureUnit;
(function (MeasureUnit) {
    MeasureUnit["DIP"] = "dip";
    MeasureUnit["Pixel"] = "pixel";
    MeasureUnit["Fraction"] = "fraction";
})(MeasureUnit || (MeasureUnit = {}));
class NumberWithUnit extends Serializeable_DefaultSerializeable {
    constructor(value, unit) {
        super();
        this._value = value;
        this._unit = unit;
    }
    get value() {
        return this._value;
    }
    get unit() {
        return this._unit;
    }
    static fromJSON(json) {
        return new NumberWithUnit(json.value, json.unit);
    }
}
__decorate([
    nameForSerialization('value')
], NumberWithUnit.prototype, "_value", void 0);
__decorate([
    nameForSerialization('unit')
], NumberWithUnit.prototype, "_unit", void 0);
class PointWithUnit extends Serializeable_DefaultSerializeable {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    static fromJSON(json) {
        return new PointWithUnit(NumberWithUnit.fromJSON(json.x), NumberWithUnit.fromJSON(json.y));
    }
    static get zero() {
        return new PointWithUnit(new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel));
    }
}
__decorate([
    nameForSerialization('x')
], PointWithUnit.prototype, "_x", void 0);
__decorate([
    nameForSerialization('y')
], PointWithUnit.prototype, "_y", void 0);
class Rect extends Serializeable_DefaultSerializeable {
    constructor(origin, size) {
        super();
        this._origin = origin;
        this._size = size;
    }
    get origin() {
        return this._origin;
    }
    get size() {
        return this._size;
    }
}
__decorate([
    nameForSerialization('origin')
], Rect.prototype, "_origin", void 0);
__decorate([
    nameForSerialization('size')
], Rect.prototype, "_size", void 0);
class RectWithUnit extends Serializeable_DefaultSerializeable {
    constructor(origin, size) {
        super();
        this._origin = origin;
        this._size = size;
    }
    get origin() {
        return this._origin;
    }
    get size() {
        return this._size;
    }
}
__decorate([
    nameForSerialization('origin')
], RectWithUnit.prototype, "_origin", void 0);
__decorate([
    nameForSerialization('size')
], RectWithUnit.prototype, "_size", void 0);
class SizeWithUnit extends Serializeable_DefaultSerializeable {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
}
__decorate([
    nameForSerialization('width')
], SizeWithUnit.prototype, "_width", void 0);
__decorate([
    nameForSerialization('height')
], SizeWithUnit.prototype, "_height", void 0);
class Size extends Serializeable_DefaultSerializeable {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    static fromJSON(json) {
        return new Size(json.width, json.height);
    }
}
__decorate([
    nameForSerialization('width')
], Size.prototype, "_width", void 0);
__decorate([
    nameForSerialization('height')
], Size.prototype, "_height", void 0);
class SizeWithAspect {
    constructor(size, aspect) {
        this._size = size;
        this._aspect = aspect;
    }
    get size() {
        return this._size;
    }
    get aspect() {
        return this._aspect;
    }
}
__decorate([
    nameForSerialization('size')
], SizeWithAspect.prototype, "_size", void 0);
__decorate([
    nameForSerialization('aspect')
], SizeWithAspect.prototype, "_aspect", void 0);
var SizingMode;
(function (SizingMode) {
    SizingMode["WidthAndHeight"] = "widthAndHeight";
    SizingMode["WidthAndAspectRatio"] = "widthAndAspectRatio";
    SizingMode["HeightAndAspectRatio"] = "heightAndAspectRatio";
    SizingMode["ShorterDimensionAndAspectRatio"] = "shorterDimensionAndAspectRatio";
})(SizingMode || (SizingMode = {}));
class SizeWithUnitAndAspect {
    constructor() {
        this._shorterDimensionAndAspectRatio = null;
    }
    get widthAndHeight() {
        return this._widthAndHeight;
    }
    get widthAndAspectRatio() {
        return this._widthAndAspectRatio;
    }
    get heightAndAspectRatio() {
        return this._heightAndAspectRatio;
    }
    get shorterDimensionAndAspectRatio() {
        return this._shorterDimensionAndAspectRatio;
    }
    get sizingMode() {
        if (this.widthAndAspectRatio) {
            return SizingMode.WidthAndAspectRatio;
        }
        if (this.heightAndAspectRatio) {
            return SizingMode.HeightAndAspectRatio;
        }
        if (this.shorterDimensionAndAspectRatio) {
            return SizingMode.ShorterDimensionAndAspectRatio;
        }
        return SizingMode.WidthAndHeight;
    }
    static sizeWithWidthAndHeight(widthAndHeight) {
        const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._widthAndHeight = widthAndHeight;
        return sizeWithUnitAndAspect;
    }
    static sizeWithWidthAndAspectRatio(width, aspectRatio) {
        const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._widthAndAspectRatio = new SizeWithAspect(width, aspectRatio);
        return sizeWithUnitAndAspect;
    }
    static sizeWithHeightAndAspectRatio(height, aspectRatio) {
        const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._heightAndAspectRatio = new SizeWithAspect(height, aspectRatio);
        return sizeWithUnitAndAspect;
    }
    static sizeWithShorterDimensionAndAspectRatio(shorterDimension, aspectRatio) {
        const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._shorterDimensionAndAspectRatio = new SizeWithAspect(shorterDimension, aspectRatio);
        return sizeWithUnitAndAspect;
    }
    static fromJSON(json) {
        if (json.width && json.height) {
            return this.sizeWithWidthAndHeight(new SizeWithUnit(NumberWithUnit.fromJSON(json.width), NumberWithUnit.fromJSON(json.height)));
        }
        else if (json.width && json.aspect) {
            return this.sizeWithWidthAndAspectRatio(NumberWithUnit.fromJSON(json.width), json.aspect);
        }
        else if (json.height && json.aspect) {
            return this.sizeWithHeightAndAspectRatio(NumberWithUnit.fromJSON(json.height), json.aspect);
        }
        else if (json.shorterDimension && json.aspect) {
            return this.sizeWithShorterDimensionAndAspectRatio(NumberWithUnit.fromJSON(json.shorterDimension), json.aspect);
        }
        else {
            throw new Error(`SizeWithUnitAndAspectJSON is malformed: ${JSON.stringify(json)}`);
        }
    }
    // no member access so our coverage check doesn't pick it up
    // TODO: https://jira.scandit.com/browse/SDC-1773
    // tslint:disable-next-line:member-access
    toJSON() {
        switch (this.sizingMode) {
            case SizingMode.WidthAndAspectRatio:
                return {
                    width: this.widthAndAspectRatio.size.toJSON(),
                    aspect: this.widthAndAspectRatio.aspect,
                };
            case SizingMode.HeightAndAspectRatio:
                return {
                    height: this.heightAndAspectRatio.size.toJSON(),
                    aspect: this.heightAndAspectRatio.aspect,
                };
            case SizingMode.ShorterDimensionAndAspectRatio:
                return {
                    shorterDimension: this.shorterDimensionAndAspectRatio.size.toJSON(),
                    aspect: this.shorterDimensionAndAspectRatio.aspect,
                };
            default:
                return {
                    width: this.widthAndHeight.width.toJSON(),
                    height: this.widthAndHeight.height.toJSON(),
                };
        }
    }
}
__decorate([
    nameForSerialization('widthAndHeight')
], SizeWithUnitAndAspect.prototype, "_widthAndHeight", void 0);
__decorate([
    nameForSerialization('widthAndAspectRatio')
], SizeWithUnitAndAspect.prototype, "_widthAndAspectRatio", void 0);
__decorate([
    nameForSerialization('heightAndAspectRatio')
], SizeWithUnitAndAspect.prototype, "_heightAndAspectRatio", void 0);
__decorate([
    nameForSerialization('shorterDimensionAndAspectRatio')
], SizeWithUnitAndAspect.prototype, "_shorterDimensionAndAspectRatio", void 0);
class MarginsWithUnit extends Serializeable_DefaultSerializeable {
    constructor(left, right, top, bottom) {
        super();
        this._left = left;
        this._right = right;
        this._top = top;
        this._bottom = bottom;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
    get top() {
        return this._top;
    }
    get bottom() {
        return this._bottom;
    }
    static fromJSON(json) {
        return new MarginsWithUnit(NumberWithUnit.fromJSON(json.left), NumberWithUnit.fromJSON(json.right), NumberWithUnit.fromJSON(json.top), NumberWithUnit.fromJSON(json.bottom));
    }
    static get zero() {
        return new MarginsWithUnit(new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel));
    }
}
__decorate([
    nameForSerialization('left')
], MarginsWithUnit.prototype, "_left", void 0);
__decorate([
    nameForSerialization('right')
], MarginsWithUnit.prototype, "_right", void 0);
__decorate([
    nameForSerialization('top')
], MarginsWithUnit.prototype, "_top", void 0);
__decorate([
    nameForSerialization('bottom')
], MarginsWithUnit.prototype, "_bottom", void 0);
class Color {
    constructor(hex) {
        this.hexadecimalString = hex;
    }
    get redComponent() {
        return this.hexadecimalString.slice(0, 2);
    }
    get greenComponent() {
        return this.hexadecimalString.slice(2, 4);
    }
    get blueComponent() {
        return this.hexadecimalString.slice(4, 6);
    }
    get alphaComponent() {
        return this.hexadecimalString.slice(6, 8);
    }
    get red() {
        return Color.hexToNumber(this.redComponent);
    }
    get green() {
        return Color.hexToNumber(this.greenComponent);
    }
    get blue() {
        return Color.hexToNumber(this.blueComponent);
    }
    get alpha() {
        return Color.hexToNumber(this.alphaComponent);
    }
    static fromHex(hex) {
        return new Color(Color.normalizeHex(hex));
    }
    static fromRGBA(red, green, blue, alpha = 1) {
        const hexString = [red, green, blue, this.normalizeAlpha(alpha)]
            .reduce((hex, colorComponent) => hex + this.numberToHex(colorComponent), '');
        return new Color(hexString);
    }
    static hexToNumber(hex) {
        return parseInt(hex, 16);
    }
    static fromJSON(json) {
        return Color.fromHex(json);
    }
    static numberToHex(x) {
        x = Math.round(x);
        let hex = x.toString(16);
        if (hex.length === 1) {
            hex = '0' + hex;
        }
        return hex.toUpperCase();
    }
    static normalizeHex(hex) {
        // remove leading #
        if (hex[0] === '#') {
            hex = hex.slice(1);
        }
        // double digits if single digit
        if (hex.length < 6) {
            hex = hex.split('').map(s => s + s).join('');
        }
        // add alpha if missing
        if (hex.length === 6) {
            hex = hex + 'FF';
        }
        return hex.toUpperCase();
    }
    static normalizeAlpha(alpha) {
        if (alpha > 0 && alpha <= 1) {
            return 255 * alpha;
        }
        return alpha;
    }
    withAlpha(alpha) {
        const newHex = this.hexadecimalString.slice(0, 6) + Color.numberToHex(Color.normalizeAlpha(alpha));
        return Color.fromHex(newHex);
    }
    // no member access so our coverage check doesn't pick it up
    // TODO: https://jira.scandit.com/browse/SDC-1773
    // tslint:disable-next-line:member-access
    toJSON() {
        return this.hexadecimalString;
    }
}
var Orientation;
(function (Orientation) {
    Orientation["Unknown"] = "unknown";
    Orientation["Portrait"] = "portrait";
    Orientation["PortraitUpsideDown"] = "portraitUpsideDown";
    Orientation["LandscapeRight"] = "landscapeRight";
    Orientation["LandscapeLeft"] = "landscapeLeft";
})(Orientation || (Orientation = {}));
var Direction;
(function (Direction) {
    Direction["None"] = "none";
    Direction["Horizontal"] = "horizontal";
    Direction["LeftToRight"] = "leftToRight";
    Direction["RightToLeft"] = "rightToLeft";
    Direction["Vertical"] = "vertical";
    Direction["TopToBottom"] = "topToBottom";
    Direction["BottomToTop"] = "bottomToTop";
})(Direction || (Direction = {}));
//# sourceMappingURL=Common.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/DataCaptureView+Related.js

class PrivateFocusGestureDeserializer {
    static fromJSON(json) {
        if (json && json.type === new TapToFocus().type) {
            return new TapToFocus();
        }
        else {
            return null;
        }
    }
}
class TapToFocus extends Serializeable_DefaultSerializeable {
    constructor() {
        super();
        this.type = 'tapToFocus';
    }
}
class PrivateZoomGestureDeserializer {
    static fromJSON(json) {
        if (json && json.type === new SwipeToZoom().type) {
            return new SwipeToZoom();
        }
        else {
            return null;
        }
    }
}
class SwipeToZoom extends Serializeable_DefaultSerializeable {
    constructor() {
        super();
        this.type = 'swipeToZoom';
    }
}
var LogoStyle;
(function (LogoStyle) {
    LogoStyle["Minimal"] = "minimal";
    LogoStyle["Extended"] = "extended";
})(LogoStyle || (LogoStyle = {}));
//# sourceMappingURL=DataCaptureView+Related.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Viewfinder+Related.js
var Viewfinder_Related_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RectangularViewfinderStyle;
(function (RectangularViewfinderStyle) {
    RectangularViewfinderStyle["Legacy"] = "legacy";
    RectangularViewfinderStyle["Rounded"] = "rounded";
    RectangularViewfinderStyle["Square"] = "square";
})(RectangularViewfinderStyle || (RectangularViewfinderStyle = {}));
var RectangularViewfinderLineStyle;
(function (RectangularViewfinderLineStyle) {
    RectangularViewfinderLineStyle["Light"] = "light";
    RectangularViewfinderLineStyle["Bold"] = "bold";
})(RectangularViewfinderLineStyle || (RectangularViewfinderLineStyle = {}));
var LaserlineViewfinderStyle;
(function (LaserlineViewfinderStyle) {
    LaserlineViewfinderStyle["Legacy"] = "legacy";
    LaserlineViewfinderStyle["Animated"] = "animated";
})(LaserlineViewfinderStyle || (LaserlineViewfinderStyle = {}));
class RectangularViewfinderAnimation extends Serializeable_DefaultSerializeable {
    constructor(isLooping) {
        super();
        this._isLooping = false;
        this._isLooping = isLooping;
    }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        return new RectangularViewfinderAnimation(json.looping);
    }
    get isLooping() {
        return this._isLooping;
    }
}
Viewfinder_Related_decorate([
    nameForSerialization('isLooping')
], RectangularViewfinderAnimation.prototype, "_isLooping", void 0);
//# sourceMappingURL=Viewfinder+Related.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Capacitor/Defaults.js



const defaultsFromJSON = (json) => {
    return {
        Camera: {
            Settings: {
                preferredResolution: json.Camera.Settings.preferredResolution,
                zoomFactor: json.Camera.Settings.zoomFactor,
                focusRange: json.Camera.Settings.focusRange,
                zoomGestureZoomFactor: json.Camera.Settings.zoomGestureZoomFactor,
                focusGestureStrategy: json.Camera.Settings.focusGestureStrategy,
                shouldPreferSmoothAutoFocus: json.Camera.Settings.shouldPreferSmoothAutoFocus,
            },
            defaultPosition: (json.Camera.defaultPosition || null),
            availablePositions: json.Camera.availablePositions,
        },
        DataCaptureView: {
            scanAreaMargins: MarginsWithUnit.fromJSON(JSON.parse(json.DataCaptureView.scanAreaMargins)),
            pointOfInterest: PointWithUnit.fromJSON(JSON.parse(json.DataCaptureView.pointOfInterest)),
            logoAnchor: json.DataCaptureView.logoAnchor,
            logoOffset: PointWithUnit.fromJSON(JSON.parse(json.DataCaptureView.logoOffset)),
            focusGesture: PrivateFocusGestureDeserializer.fromJSON(JSON.parse(json.DataCaptureView.focusGesture)),
            zoomGesture: PrivateZoomGestureDeserializer.fromJSON(JSON.parse(json.DataCaptureView.zoomGesture)),
            logoStyle: json.DataCaptureView.logoStyle.toLowerCase(),
        },
        LaserlineViewfinder: Object
            .keys(json.LaserlineViewfinder.styles)
            .reduce((acc, key) => {
            const viewfinder = json.LaserlineViewfinder.styles[key];
            acc.styles[key] = {
                width: NumberWithUnit.fromJSON(JSON.parse(viewfinder.width)),
                enabledColor: Color.fromJSON(viewfinder.enabledColor),
                disabledColor: Color.fromJSON(viewfinder.disabledColor),
                style: viewfinder.style,
            };
            return acc;
        }, { defaultStyle: json.LaserlineViewfinder.defaultStyle, styles: {} }),
        RectangularViewfinder: Object
            .keys(json.RectangularViewfinder.styles)
            .reduce((acc, key) => {
            const viewfinder = json.RectangularViewfinder.styles[key];
            acc.styles[key] = {
                size: SizeWithUnitAndAspect.fromJSON(JSON.parse(viewfinder.size)),
                color: Color.fromJSON(viewfinder.color),
                style: viewfinder.style,
                lineStyle: viewfinder.lineStyle,
                dimming: viewfinder.dimming,
                disabledDimming: viewfinder.disabledDimming,
                animation: RectangularViewfinderAnimation.fromJSON(viewfinder.animation ? JSON.parse(viewfinder.animation) : null),
            };
            return acc;
        }, { defaultStyle: json.RectangularViewfinder.defaultStyle, styles: {} }),
        AimerViewfinder: {
            frameColor: Color.fromJSON(json.AimerViewfinder.frameColor),
            dotColor: Color.fromJSON(json.AimerViewfinder.dotColor),
        },
        Brush: {
            fillColor: Color.fromJSON(json.Brush.fillColor),
            strokeColor: Color.fromJSON(json.Brush.strokeColor),
            strokeWidth: json.Brush.strokeWidth,
        },
        deviceID: json.deviceID,
        capacitorVersion: json.capacitorVersion,
    };
};
//# sourceMappingURL=Defaults.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Capacitor/Capacitor.js



var CapacitorFunction;
(function (CapacitorFunction) {
    CapacitorFunction["GetDefaults"] = "getDefaults";
    CapacitorFunction["ContextFromJSON"] = "contextFromJSON";
    CapacitorFunction["DisposeContext"] = "disposeContext";
    CapacitorFunction["UpdateContextFromJSON"] = "updateContextFromJSON";
    CapacitorFunction["SubscribeContextListener"] = "subscribeContextListener";
    CapacitorFunction["SubscribeContextFrameListener"] = "subscribeContextFrameListener";
    CapacitorFunction["SetViewPositionAndSize"] = "setViewPositionAndSize";
    CapacitorFunction["ShowView"] = "showView";
    CapacitorFunction["HideView"] = "hideView";
    CapacitorFunction["ViewPointForFramePoint"] = "viewPointForFramePoint";
    CapacitorFunction["ViewQuadrilateralForFrameQuadrilateral"] = "viewQuadrilateralForFrameQuadrilateral";
    CapacitorFunction["SubscribeViewListener"] = "subscribeViewListener";
    CapacitorFunction["GetCurrentCameraState"] = "getCurrentCameraState";
    CapacitorFunction["GetIsTorchAvailable"] = "getIsTorchAvailable";
    CapacitorFunction["EmitFeedback"] = "emitFeedback";
    CapacitorFunction["SubscribeVolumeButtonObserver"] = "subscribeVolumeButtonObserver";
    CapacitorFunction["UnsubscribeVolumeButtonObserver"] = "unsubscribeVolumeButtonObserver";
})(CapacitorFunction || (CapacitorFunction = {}));
const pluginName = 'ScanditCaptureCoreNative';
// tslint:disable-next-line:variable-name
const Capacitor_Capacitor = {
    pluginName,
    defaults: {},
    exec: (success, error, functionName, args) => capacitorExec(success, error, pluginName, functionName, args),
};
const getDefaults = new Promise((resolve, reject) => core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.GetDefaults]().then((defaultsJSON) => {
    const defaults = defaultsFromJSON(defaultsJSON);
    Capacitor_Capacitor.defaults = defaults;
    resolve(defaults);
}, reject));
//# sourceMappingURL=Capacitor.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/LocationSelection.js
var LocationSelection_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// tslint:disable-next-line:variable-name
const NoneLocationSelection = { type: 'none' };
class RadiusLocationSelection extends Serializeable_DefaultSerializeable {
    constructor(radius) {
        super();
        this.type = 'radius';
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
}
LocationSelection_decorate([
    nameForSerialization('radius')
], RadiusLocationSelection.prototype, "_radius", void 0);
class RectangularLocationSelection extends Serializeable_DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = 'rectangular';
    }
    get sizeWithUnitAndAspect() {
        return this._sizeWithUnitAndAspect;
    }
    static withSize(size) {
        const locationSelection = new RectangularLocationSelection();
        locationSelection._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithWidthAndHeight(size);
        return locationSelection;
    }
    static withWidthAndAspectRatio(width, heightToWidthAspectRatio) {
        const locationSelection = new RectangularLocationSelection();
        locationSelection._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithWidthAndAspectRatio(width, heightToWidthAspectRatio);
        return locationSelection;
    }
    static withHeightAndAspectRatio(height, widthToHeightAspectRatio) {
        const locationSelection = new RectangularLocationSelection();
        locationSelection._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithHeightAndAspectRatio(height, widthToHeightAspectRatio);
        return locationSelection;
    }
}
LocationSelection_decorate([
    nameForSerialization('size')
], RectangularLocationSelection.prototype, "_sizeWithUnitAndAspect", void 0);
//# sourceMappingURL=LocationSelection.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Viewfinder.js
var Viewfinder_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class Brush extends Serializeable_DefaultSerializeable {
    constructor(fillColor = Capacitor_Capacitor.defaults.Brush.fillColor, strokeColor = Capacitor_Capacitor.defaults.Brush.strokeColor, strokeWidth = Capacitor_Capacitor.defaults.Brush.strokeWidth) {
        super();
        this.fill = { color: fillColor };
        this.stroke = { color: strokeColor, width: strokeWidth };
    }
    static get transparent() {
        const transparentBlack = Color.fromRGBA(255, 255, 255, 0);
        return new Brush(transparentBlack, transparentBlack, 0);
    }
    get fillColor() {
        return this.fill.color;
    }
    get strokeColor() {
        return this.stroke.color;
    }
    get strokeWidth() {
        return this.stroke.width;
    }
}
// tslint:disable-next-line:variable-name
const NoViewfinder = { type: 'none' };
class LaserlineViewfinder extends Serializeable_DefaultSerializeable {
    constructor(style) {
        super();
        this.type = 'laserline';
        const viewfinderStyle = style || Capacitor_Capacitor.defaults.LaserlineViewfinder.defaultStyle;
        this._style = Capacitor_Capacitor.defaults.LaserlineViewfinder.styles[viewfinderStyle].style;
        this.width = Capacitor_Capacitor.defaults.LaserlineViewfinder.styles[viewfinderStyle].width;
        this.enabledColor = Capacitor_Capacitor.defaults.LaserlineViewfinder.styles[viewfinderStyle].enabledColor;
        this.disabledColor = Capacitor_Capacitor.defaults.LaserlineViewfinder.styles[viewfinderStyle].disabledColor;
    }
    get style() {
        return this._style;
    }
}
Viewfinder_decorate([
    nameForSerialization('style')
], LaserlineViewfinder.prototype, "_style", void 0);
class RectangularViewfinder extends Serializeable_DefaultSerializeable {
    constructor(style, lineStyle) {
        super();
        this.type = 'rectangular';
        const viewfinderStyle = style || Capacitor_Capacitor.defaults.RectangularViewfinder.defaultStyle;
        this._style = Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].style;
        this._lineStyle = Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].lineStyle;
        this._dimming = parseFloat(Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].dimming);
        this._disabledDimming =
            parseFloat(Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].disabledDimming);
        this._animation = Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].animation;
        this.color = Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].color;
        this._sizeWithUnitAndAspect = Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].size;
        if (lineStyle !== undefined) {
            this._lineStyle = lineStyle;
        }
    }
    get sizeWithUnitAndAspect() {
        return this._sizeWithUnitAndAspect;
    }
    get style() {
        return this._style;
    }
    get lineStyle() {
        return this._lineStyle;
    }
    get dimming() {
        return this._dimming;
    }
    set dimming(value) {
        this._dimming = value;
    }
    get disabledDimming() {
        return this._disabledDimming;
    }
    set disabledDimming(value) {
        this._disabledDimming = value;
    }
    get animation() {
        return this._animation;
    }
    set animation(animation) {
        this._animation = animation;
    }
    setSize(size) {
        this._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithWidthAndHeight(size);
    }
    setWidthAndAspectRatio(width, heightToWidthAspectRatio) {
        this._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithWidthAndAspectRatio(width, heightToWidthAspectRatio);
    }
    setHeightAndAspectRatio(height, widthToHeightAspectRatio) {
        this._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithHeightAndAspectRatio(height, widthToHeightAspectRatio);
    }
    setShorterDimensionAndAspectRatio(fraction, aspectRatio) {
        this._sizeWithUnitAndAspect = SizeWithUnitAndAspect.sizeWithShorterDimensionAndAspectRatio(new NumberWithUnit(fraction, MeasureUnit.Fraction), aspectRatio);
    }
}
Viewfinder_decorate([
    nameForSerialization('style')
], RectangularViewfinder.prototype, "_style", void 0);
Viewfinder_decorate([
    nameForSerialization('lineStyle')
], RectangularViewfinder.prototype, "_lineStyle", void 0);
Viewfinder_decorate([
    nameForSerialization('dimming')
], RectangularViewfinder.prototype, "_dimming", void 0);
Viewfinder_decorate([
    nameForSerialization('disabledDimming')
], RectangularViewfinder.prototype, "_disabledDimming", void 0);
Viewfinder_decorate([
    nameForSerialization('animation'),
    ignoreFromSerialization
], RectangularViewfinder.prototype, "_animation", void 0);
Viewfinder_decorate([
    nameForSerialization('size')
], RectangularViewfinder.prototype, "_sizeWithUnitAndAspect", void 0);
class AimerViewfinder extends Serializeable_DefaultSerializeable {
    constructor() {
        super();
        this.type = 'aimer';
        this.frameColor = Capacitor_Capacitor.defaults.AimerViewfinder.frameColor;
        this.dotColor = Capacitor_Capacitor.defaults.AimerViewfinder.dotColor;
    }
}
//# sourceMappingURL=Viewfinder.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Camera+Related.js


var FrameSourceState;
(function (FrameSourceState) {
    FrameSourceState["On"] = "on";
    FrameSourceState["Off"] = "off";
    FrameSourceState["Starting"] = "starting";
    FrameSourceState["Stopping"] = "stopping";
    FrameSourceState["Standby"] = "standby";
    FrameSourceState["BootingUp"] = "bootingUp";
    FrameSourceState["WakingUp"] = "wakingUp";
    FrameSourceState["GoingToSleep"] = "goingToSleep";
    FrameSourceState["ShuttingDown"] = "shuttingDown";
})(FrameSourceState || (FrameSourceState = {}));
var TorchState;
(function (TorchState) {
    TorchState["On"] = "on";
    TorchState["Off"] = "off";
    TorchState["Auto"] = "auto";
})(TorchState || (TorchState = {}));
var CameraPosition;
(function (CameraPosition) {
    CameraPosition["WorldFacing"] = "worldFacing";
    CameraPosition["UserFacing"] = "userFacing";
    CameraPosition["Unspecified"] = "unspecified";
})(CameraPosition || (CameraPosition = {}));
var VideoResolution;
(function (VideoResolution) {
    VideoResolution["Auto"] = "auto";
    VideoResolution["HD"] = "hd";
    VideoResolution["FullHD"] = "fullHd";
    VideoResolution["UHD4K"] = "uhd4k";
})(VideoResolution || (VideoResolution = {}));
var FocusRange;
(function (FocusRange) {
    FocusRange["Full"] = "full";
    FocusRange["Near"] = "near";
    FocusRange["Far"] = "far";
})(FocusRange || (FocusRange = {}));
var FocusGestureStrategy;
(function (FocusGestureStrategy) {
    FocusGestureStrategy["None"] = "none";
    FocusGestureStrategy["Manual"] = "manual";
    FocusGestureStrategy["ManualUntilCapture"] = "manualUntilCapture";
    FocusGestureStrategy["AutoOnLocation"] = "autoOnLocation";
})(FocusGestureStrategy || (FocusGestureStrategy = {}));
var PrivateCameraProperty;
(function (PrivateCameraProperty) {
    PrivateCameraProperty["CameraAPI"] = "api";
})(PrivateCameraProperty || (PrivateCameraProperty = {}));
class CameraSettings extends Serializeable_DefaultSerializeable {
    constructor(settings) {
        super();
        this.preferredResolution = Capacitor_Capacitor.defaults.Camera.Settings.preferredResolution;
        this.zoomFactor = Capacitor_Capacitor.defaults.Camera.Settings.zoomFactor;
        this.zoomGestureZoomFactor = Capacitor_Capacitor.defaults.Camera.Settings.zoomGestureZoomFactor;
        this.api = 0;
        this.focus = {
            range: Capacitor_Capacitor.defaults.Camera.Settings.focusRange,
            focusGestureStrategy: Capacitor_Capacitor.defaults.Camera.Settings.focusGestureStrategy,
            shouldPreferSmoothAutoFocus: Capacitor_Capacitor.defaults.Camera.Settings.shouldPreferSmoothAutoFocus,
        };
        if (settings !== undefined && settings !== null) {
            Object.getOwnPropertyNames(settings).forEach(propertyName => {
                this[propertyName] = settings[propertyName];
            });
        }
    }
    get focusRange() {
        return this.focus.range;
    }
    set focusRange(newRange) {
        this.focus.range = newRange;
    }
    get focusGestureStrategy() {
        return this.focus.focusGestureStrategy;
    }
    set focusGestureStrategy(newStrategy) {
        this.focus.focusGestureStrategy = newStrategy;
    }
    get shouldPreferSmoothAutoFocus() {
        return this.focus.shouldPreferSmoothAutoFocus;
    }
    set shouldPreferSmoothAutoFocus(newShouldPreferSmoothAutoFocus) {
        this.focus.shouldPreferSmoothAutoFocus = newShouldPreferSmoothAutoFocus;
    }
    static fromJSON(json) {
        const settings = new CameraSettings();
        settings.preferredResolution = json.preferredResolution;
        settings.zoomFactor = json.zoomFactor;
        settings.focusRange = json.focusRange;
        settings.zoomGestureZoomFactor = json.zoomGestureZoomFactor;
        settings.focusGestureStrategy = json.focusGestureStrategy;
        settings.shouldPreferSmoothAutoFocus = json.shouldPreferSmoothAutoFocus;
        if (json.api !== undefined && json.api !== null) {
            settings.api = json.api;
        }
        return settings;
    }
    setProperty(name, value) {
        this[name] = value;
    }
    getProperty(name) {
        return this[name];
    }
}
//# sourceMappingURL=Camera+Related.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Capacitor/FeedbackProxy.js


class FeedbackProxy {
    static forFeedback(feedback) {
        const proxy = new FeedbackProxy();
        proxy.feedback = feedback;
        return proxy;
    }
    emit() {
        core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.EmitFeedback]({ feedback: this.feedback.toJSON() });
    }
}
//# sourceMappingURL=FeedbackProxy.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Feedback.js
var Feedback_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var VibrationType;
(function (VibrationType) {
    VibrationType["default"] = "default";
    VibrationType["selectionHaptic"] = "selectionHaptic";
    VibrationType["successHaptic"] = "successHaptic";
})(VibrationType || (VibrationType = {}));
class Vibration extends Serializeable_DefaultSerializeable {
    constructor(type) {
        super();
        this.type = type;
    }
    static fromJSON(json) {
        return new Vibration(json.type);
    }
    static get defaultVibration() {
        return new Vibration(VibrationType.default);
    }
    static get selectionHapticFeedback() {
        return new Vibration(VibrationType.selectionHaptic);
    }
    static get successHapticFeedback() {
        return new Vibration(VibrationType.successHaptic);
    }
}
class Sound extends Serializeable_DefaultSerializeable {
    constructor(resource) {
        super();
        this.resource = null;
        this.resource = resource;
    }
    static fromJSON(json) {
        return new Sound(json.resource);
    }
    static get defaultSound() {
        return new Sound(null);
    }
}
Feedback_decorate([
    ignoreFromSerializationIfNull
], Sound.prototype, "resource", void 0);
class Feedback extends Serializeable_DefaultSerializeable {
    constructor(vibration, sound) {
        super();
        this._vibration = null;
        this._sound = null;
        this._vibration = vibration;
        this._sound = sound;
        this.initialize();
    }
    static get defaultFeedback() {
        return new Feedback(Vibration.defaultVibration, Sound.defaultSound);
    }
    static fromJSON(json) {
        return new Feedback(json.vibration ? Vibration.fromJSON(json.vibration) : null, json.sound ? Sound.fromJSON(json.sound) : null);
    }
    get vibration() {
        return this._vibration;
    }
    get sound() {
        return this._sound;
    }
    emit() {
        if (!this.proxy) {
            return;
        }
        this.proxy.emit();
    }
    initialize() {
        if (this.proxy) {
            return;
        }
        this.proxy = FeedbackProxy.forFeedback(this);
    }
}
Feedback_decorate([
    ignoreFromSerializationIfNull,
    nameForSerialization('vibration')
], Feedback.prototype, "_vibration", void 0);
Feedback_decorate([
    ignoreFromSerializationIfNull,
    nameForSerialization('sound')
], Feedback.prototype, "_sound", void 0);
Feedback_decorate([
    ignoreFromSerialization
], Feedback.prototype, "proxy", void 0);
//# sourceMappingURL=Feedback.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Capacitor/CameraProxy.js


class CameraProxy {
    static forCamera(camera) {
        const proxy = new CameraProxy();
        proxy.camera = camera;
        return proxy;
    }
    getCurrentState() {
        return new Promise((resolve, reject) => core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.GetCurrentCameraState]().then(resolve, reject));
    }
    getIsTorchAvailable() {
        return new Promise((resolve, reject) => core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.GetIsTorchAvailable]({
            position: this.camera.position,
        }).then(resolve, reject));
    }
}
//# sourceMappingURL=CameraProxy.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Camera.js
var Camera_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class Camera extends Serializeable_DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = 'camera';
        this.settings = null;
        this._desiredTorchState = TorchState.Off;
        this._desiredState = FrameSourceState.Off;
        this.listeners = [];
        this.context = null;
    }
    get proxy() {
        if (!this._proxy) {
            this.initialize();
        }
        return this._proxy;
    }
    static get default() {
        if (Capacitor_Capacitor.defaults.Camera.defaultPosition) {
            const camera = new Camera();
            camera.position = Capacitor_Capacitor.defaults.Camera.defaultPosition;
            return camera;
        }
        else {
            return null;
        }
    }
    static atPosition(cameraPosition) {
        if (Capacitor_Capacitor.defaults.Camera.availablePositions.includes(cameraPosition)) {
            const camera = new Camera();
            camera.position = cameraPosition;
            return camera;
        }
        else {
            return null;
        }
    }
    get desiredState() {
        return this._desiredState;
    }
    set desiredTorchState(desiredTorchState) {
        this._desiredTorchState = desiredTorchState;
        this.didChange();
    }
    get desiredTorchState() {
        return this._desiredTorchState;
    }
    switchToDesiredState(state) {
        this._desiredState = state;
        return this.didChange();
    }
    getCurrentState() {
        return this.proxy.getCurrentState();
    }
    getIsTorchAvailable() {
        return this.proxy.getIsTorchAvailable();
    }
    addListener(listener) {
        if (listener == null) {
            return;
        }
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (listener == null) {
            return;
        }
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    applySettings(settings) {
        this.settings = settings;
        return this.didChange();
    }
    initialize() {
        if (this._proxy) {
            return;
        }
        this._proxy = CameraProxy.forCamera(this);
    }
    didChange() {
        if (this.context) {
            return this.context.update();
        }
        else {
            return Promise.resolve();
        }
    }
}
Camera_decorate([
    serializationDefault({})
], Camera.prototype, "settings", void 0);
Camera_decorate([
    nameForSerialization('desiredTorchState')
], Camera.prototype, "_desiredTorchState", void 0);
Camera_decorate([
    nameForSerialization('desiredState')
], Camera.prototype, "_desiredState", void 0);
Camera_decorate([
    ignoreFromSerialization
], Camera.prototype, "listeners", void 0);
Camera_decorate([
    ignoreFromSerialization
], Camera.prototype, "context", void 0);
Camera_decorate([
    ignoreFromSerialization
], Camera.prototype, "_proxy", void 0);
//# sourceMappingURL=Camera.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/DataCaptureContext+Related.js
class ContextStatus {
    static fromJSON(json) {
        const status = new ContextStatus();
        status._code = json.code;
        status._message = json.message;
        status._isValid = json.isValid;
        return status;
    }
    get message() {
        return this._message;
    }
    get code() {
        return this._code;
    }
    get isValid() {
        return this._isValid;
    }
}
//# sourceMappingURL=DataCaptureContext+Related.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Capacitor/DataCaptureContextProxy.js




var DataCaptureContextListenerEvent;
(function (DataCaptureContextListenerEvent) {
    DataCaptureContextListenerEvent["DidChangeContextStatus"] = "didChangeStatus";
    DataCaptureContextListenerEvent["DidStartObservingContext"] = "didStartObservingContext";
})(DataCaptureContextListenerEvent || (DataCaptureContextListenerEvent = {}));
// TODO: adjust when readding framedata to the api https://jira.scandit.com/browse/SDC-1159
// enum DataCaptureContextFrameListenerEvent {
//   WillProcessFrame = 'willProcessFrame',
//   DidProcessFrame = 'didProcessFrame',
// }
class DataCaptureContextProxy {
    static forDataCaptureContext(context) {
        const contextProxy = new DataCaptureContextProxy();
        contextProxy.context = context;
        contextProxy.initialize();
        return contextProxy;
    }
    updateContextFromJSON() {
        return new Promise((resolve, reject) => core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.UpdateContextFromJSON]({
            context: JSON.stringify(this.context.toJSON()),
        }).then(resolve.bind(this), reject.bind(this)));
    }
    dispose() {
        core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.DisposeContext]();
    }
    initialize() {
        this.subscribeListener();
        // TODO: adjust when readding framedata to the api https://jira.scandit.com/browse/SDC-1159
        // this.subscribeFrameListener();
        this.initializeContextFromJSON();
    }
    initializeContextFromJSON() {
        return new Promise((resolve, reject) => core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.ContextFromJSON]({
            context: JSON.stringify(this.context.toJSON()),
        }).then(resolve.bind(this), reject.bind(this)));
    }
    subscribeListener() {
        core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.SubscribeContextListener]();
        core_dist_Plugins[Capacitor_Capacitor.pluginName]
            .addListener(DataCaptureContextListenerEvent.DidChangeContextStatus, this.notifyListeners.bind(this));
        core_dist_Plugins[Capacitor_Capacitor.pluginName]
            .addListener(DataCaptureContextListenerEvent.DidStartObservingContext, this.notifyListeners.bind(this));
    }
    // TODO: adjust when readding framedata to the api https://jira.scandit.com/browse/SDC-1159
    // private subscribeFrameListener() {
    //     Plugins[Capacitor.pluginName][CapacitorFunction.SubscribeContextFrameListener]()
    //     .then(this.notifyFrameListeners.bind(this), null)
    // }
    notifyListeners(event) {
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return doReturnWithFinish('', null);
        }
        event = Object.assign(Object.assign(Object.assign({}, event), event.argument), { argument: undefined });
        this.context.listeners.forEach((listener) => {
            switch (event.name) {
                case DataCaptureContextListenerEvent.DidChangeContextStatus:
                    if (listener.didChangeStatus) {
                        const contextStatus = ContextStatus.fromJSON(event.context);
                        listener.didChangeStatus(this.context, contextStatus);
                    }
                    break;
                case DataCaptureContextListenerEvent.DidStartObservingContext:
                    if (listener.didStartObservingContext) {
                        listener.didStartObservingContext(this.context);
                    }
                    break;
            }
        });
        return doReturnWithFinish(event.name, null);
    }
}
//# sourceMappingURL=DataCaptureContextProxy.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/DataCaptureContext.js
var DataCaptureContext_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class DataCaptureContextSettings extends Serializeable_DefaultSerializeable {
    constructor() {
        super();
    }
    setProperty(name, value) {
        this[name] = value;
    }
    getProperty(name) {
        return this[name];
    }
}
class DataCaptureContext extends Serializeable_DefaultSerializeable {
    constructor(licenseKey, deviceName) {
        super();
        this.licenseKey = licenseKey;
        this.deviceName = deviceName;
        this.framework = 'capacitor';
        this.frameworkVersion = (() => Capacitor_Capacitor.defaults.capacitorVersion)();
        this.settings = new DataCaptureContextSettings();
        this._frameSource = null;
        this.view = null;
        this.modes = [];
        this.components = [];
        this.listeners = [];
    }
    // TODO: adjust when readding framedata to the api https://jira.scandit.com/browse/SDC-1159
    // @ignoreFromSerialization
    // private frameListeners: DataCaptureContextFrameListener[] = [];
    get frameSource() {
        return this._frameSource;
    }
    static get deviceID() {
        return Capacitor_Capacitor.defaults.deviceID;
    }
    static forLicenseKey(licenseKey) {
        return DataCaptureContext.forLicenseKeyWithOptions(licenseKey, null);
    }
    static forLicenseKeyWithSettings(licenseKey, settings) {
        const context = this.forLicenseKey(licenseKey);
        if (settings !== null) {
            context.applySettings(settings);
        }
        return context;
    }
    static forLicenseKeyWithOptions(licenseKey, options) {
        if (options == null) {
            options = { deviceName: null };
        }
        return new DataCaptureContext(licenseKey, options.deviceName || '');
    }
    setFrameSource(frameSource) {
        this._frameSource = frameSource;
        if (frameSource) {
            frameSource.context = this;
        }
        return this.update();
    }
    addListener(listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    // TODO: adjust when readding framedata to the api https://jira.scandit.com/browse/SDC-1159
    // public addFrameListener(frameListener: DataCaptureContextFrameListener) {
    //   if (this.frameListeners.includes(frameListener)) {
    //     return;
    //   }
    //   this.frameListeners.push(frameListener);
    // }
    // TODO: adjust when readding framedata to the api https://jira.scandit.com/browse/SDC-1159
    // public removeFrameListener(frameListener: DataCaptureContextFrameListener) {
    //   if (!this.frameListeners.includes(frameListener)) {
    //     return;
    //   }
    //   this.frameListeners.splice(this.frameListeners.indexOf(frameListener), 1);
    // }
    addMode(mode) {
        if (!this.modes.includes(mode)) {
            this.modes.push(mode);
            mode._context = this;
            this.update();
        }
    }
    removeMode(mode) {
        if (this.modes.includes(mode)) {
            this.modes.splice(this.modes.indexOf(mode), 1);
            mode._context = null;
            this.update();
        }
    }
    removeAllModes() {
        this.modes = [];
        this.update();
    }
    dispose() {
        if (!this.proxy) {
            return;
        }
        this.proxy.dispose();
    }
    applySettings(settings) {
        this.settings = settings;
        return this.update();
    }
    initialize() {
        if (this.proxy) {
            return;
        }
        this.proxy = DataCaptureContextProxy.forDataCaptureContext(this);
    }
    update() {
        if (!this.proxy) {
            return Promise.resolve();
        }
        return this.proxy.updateContextFromJSON();
    }
    addComponent(component) {
        if (!this.components.includes(component)) {
            this.components.push(component);
            component._context = this;
            return this.update();
        }
        else {
            return Promise.resolve();
        }
    }
}
DataCaptureContext_decorate([
    nameForSerialization('frameSource')
], DataCaptureContext.prototype, "_frameSource", void 0);
DataCaptureContext_decorate([
    ignoreFromSerialization
], DataCaptureContext.prototype, "proxy", void 0);
DataCaptureContext_decorate([
    ignoreFromSerialization
], DataCaptureContext.prototype, "listeners", void 0);
//# sourceMappingURL=DataCaptureContext.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Capacitor/DataCaptureViewProxy.js




var DataCaptureViewListenerEvent;
(function (DataCaptureViewListenerEvent) {
    DataCaptureViewListenerEvent["DidChangeSizeOrientation"] = "didChangeSizeOrientation";
})(DataCaptureViewListenerEvent || (DataCaptureViewListenerEvent = {}));
class DataCaptureViewProxy {
    static forDataCaptureView(view) {
        const viewProxy = new DataCaptureViewProxy();
        viewProxy.view = view;
        viewProxy.initialize();
        return viewProxy;
    }
    setPositionAndSize(top, left, width, height, shouldBeUnderWebView) {
        return new Promise((resolve, reject) => core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.SetViewPositionAndSize]({
            position: { top, left, width, height, shouldBeUnderWebView },
        }).then(resolve.bind(this), reject.bind(this)));
    }
    show() {
        return core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.ShowView]();
    }
    hide() {
        return core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.HideView]();
    }
    viewPointForFramePoint(point) {
        return new Promise((resolve, reject) => core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.ViewPointForFramePoint]({
            point: point.toJSON(),
        }).then((convertedPoint) => resolve(Point.fromJSON(convertedPoint)), reject.bind(this)));
    }
    viewQuadrilateralForFrameQuadrilateral(quadrilateral) {
        return new Promise((resolve, reject) => core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.ViewQuadrilateralForFrameQuadrilateral]({
            point: quadrilateral.toJSON(),
        }).then((convertedQuadrilateral) => resolve(Quadrilateral.fromJSON(convertedQuadrilateral)), reject.bind(this)));
    }
    subscribeListener() {
        core_dist_Plugins[Capacitor_Capacitor.pluginName][CapacitorFunction.SubscribeViewListener]();
        core_dist_Plugins[Capacitor_Capacitor.pluginName]
            .addListener(DataCaptureViewListenerEvent.DidChangeSizeOrientation, this.notifyListeners.bind(this));
    }
    notifyListeners(event) {
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return doReturnWithFinish('', null);
        }
        event = Object.assign(Object.assign(Object.assign({}, event), event.argument), { argument: undefined });
        this.view.listeners.forEach((listener) => {
            switch (event.name) {
                case DataCaptureViewListenerEvent.DidChangeSizeOrientation:
                    if (listener.didChangeSize) {
                        const size = Size.fromJSON(event.size);
                        const orientation = event.orientation;
                        listener.didChangeSize(this.view, size, orientation);
                        return doReturnWithFinish(event.name, null);
                    }
                    break;
            }
        });
    }
    initialize() {
        this.subscribeListener();
    }
}
//# sourceMappingURL=DataCaptureViewProxy.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/DataCaptureView.js
var DataCaptureView_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class TorchSwitchControl extends Serializeable_DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = 'torch';
        this.icon = {
            on: { default: null, pressed: null },
            off: { default: null, pressed: null },
        };
        this.view = null;
    }
    get torchOffImage() {
        return this.icon.off.default;
    }
    set torchOffImage(torchOffImage) {
        this.icon.off.default = torchOffImage;
        this.view.controlUpdated();
    }
    get torchOffPressedImage() {
        return this.icon.off.pressed;
    }
    set torchOffPressedImage(torchOffPressedImage) {
        this.icon.off.pressed = torchOffPressedImage;
        this.view.controlUpdated();
    }
    get torchOnImage() {
        return this.icon.on.default;
    }
    set torchOnImage(torchOnImage) {
        this.icon.on.default = torchOnImage;
        this.view.controlUpdated();
    }
    get torchOnPressedImage() {
        return this.icon.on.pressed;
    }
    set torchOnPressedImage(torchOnPressedImage) {
        this.icon.on.pressed = torchOnPressedImage;
        this.view.controlUpdated();
    }
}
DataCaptureView_decorate([
    ignoreFromSerialization
], TorchSwitchControl.prototype, "view", void 0);
class ZoomSwitchControl extends Serializeable_DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = 'zoom';
        this.icon = {
            zoomedOut: { default: null, pressed: null },
            zoomedIn: { default: null, pressed: null },
        };
        this.view = null;
    }
    get zoomedOutImage() {
        return this.icon.zoomedOut.default;
    }
    set zoomedOutImage(zoomedOutImage) {
        var _a;
        this.icon.zoomedOut.default = zoomedOutImage;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.controlUpdated();
    }
    get zoomedInImage() {
        return this.icon.zoomedIn.default;
    }
    set zoomedInImage(zoomedInImage) {
        var _a;
        this.icon.zoomedIn.default = zoomedInImage;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.controlUpdated();
    }
    get zoomedInPressedImage() {
        return this.icon.zoomedIn.pressed;
    }
    set zoomedInPressedImage(zoomedInPressedImage) {
        var _a;
        this.icon.zoomedIn.pressed = zoomedInPressedImage;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.controlUpdated();
    }
    get zoomedOutPressedImage() {
        return this.icon.zoomedOut.pressed;
    }
    set zoomedOutPressedImage(zoomedOutPressedImage) {
        var _a;
        this.icon.zoomedOut.pressed = zoomedOutPressedImage;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.controlUpdated();
    }
}
DataCaptureView_decorate([
    ignoreFromSerialization
], ZoomSwitchControl.prototype, "view", void 0);
var Anchor;
(function (Anchor) {
    Anchor["TopLeft"] = "topLeft";
    Anchor["TopCenter"] = "topCenter";
    Anchor["TopRight"] = "topRight";
    Anchor["CenterLeft"] = "centerLeft";
    Anchor["Center"] = "center";
    Anchor["CenterRight"] = "centerRight";
    Anchor["BottomLeft"] = "bottomLeft";
    Anchor["BottomCenter"] = "bottomCenter";
    Anchor["BottomRight"] = "bottomRight";
})(Anchor || (Anchor = {}));
class HTMLElementState {
    constructor() {
        this.isShown = false;
        this.position = null;
        this.size = null;
        this.shouldBeUnderContent = false;
    }
    get isValid() {
        return this.isShown !== undefined && this.isShown !== null
            && this.position !== undefined && this.position !== null
            && this.size !== undefined && this.size !== null
            && this.shouldBeUnderContent !== undefined && this.shouldBeUnderContent !== null;
    }
    didChangeComparedTo(other) {
        return this.position !== other.position
            || this.size !== other.size
            || this.shouldBeUnderContent !== other.shouldBeUnderContent;
    }
}
class DataCaptureView extends Serializeable_DefaultSerializeable {
    constructor() {
        super();
        this._context = null;
        this.scanAreaMargins = Capacitor_Capacitor.defaults.DataCaptureView.scanAreaMargins;
        this.pointOfInterest = Capacitor_Capacitor.defaults.DataCaptureView.pointOfInterest;
        this.logoAnchor = Capacitor_Capacitor.defaults.DataCaptureView.logoAnchor;
        this.logoOffset = Capacitor_Capacitor.defaults.DataCaptureView.logoOffset;
        this.focusGesture = Capacitor_Capacitor.defaults.DataCaptureView.focusGesture;
        this.zoomGesture = Capacitor_Capacitor.defaults.DataCaptureView.zoomGesture;
        this.logoStyle = Capacitor_Capacitor.defaults.DataCaptureView.logoStyle;
        this.overlays = [];
        this.controls = [];
        this.listeners = [];
        this.htmlElement = null;
        this._htmlElementState = new HTMLElementState();
        this.scrollListener = this.elementDidChange.bind(this);
        this.domObserver = new MutationObserver(this.elementDidChange.bind(this));
        this.orientationChangeListener = (() => {
            this.elementDidChange();
            // SDC-1784 -> workaround because at the moment of this callback the element doesn't have the updated size.
            setTimeout(this.elementDidChange.bind(this), 100);
            setTimeout(this.elementDidChange.bind(this), 300);
            setTimeout(this.elementDidChange.bind(this), 1000);
        });
    }
    get context() {
        return this._context;
    }
    set context(context) {
        this._context = context;
        if (context) {
            context.view = this;
        }
    }
    get viewProxy() {
        if (!this._viewProxy) {
            this.initialize();
        }
        return this._viewProxy;
    }
    set htmlElementState(newState) {
        const didChangeShown = this._htmlElementState.isShown !== newState.isShown;
        const didChangePositionOrSize = this._htmlElementState.didChangeComparedTo(newState);
        this._htmlElementState = newState;
        if (didChangePositionOrSize) {
            this.updatePositionAndSize();
        }
        if (didChangeShown) {
            if (this._htmlElementState.isShown) {
                this._show();
            }
            else {
                this._hide();
            }
        }
    }
    get htmlElementState() {
        return this._htmlElementState;
    }
    /**
     * The current context as a PrivateDataCaptureContext
     */
    get privateContext() {
        return this.context;
    }
    static forContext(context) {
        const view = new DataCaptureView();
        view.context = context;
        return view;
    }
    connectToElement(element) {
        this.htmlElement = element;
        this.htmlElementState = new HTMLElementState();
        // Initial update
        this.elementDidChange();
        this.subscribeToChangesOnHTMLElement();
    }
    detachFromElement() {
        this.unsubscribeFromChangesOnHTMLElement();
        this.htmlElement = null;
        this.elementDidChange();
    }
    setFrame(frame, isUnderContent = false) {
        return this.viewProxy.setPositionAndSize(frame.origin.y, frame.origin.x, frame.size.width, frame.size.height, isUnderContent);
    }
    show() {
        if (this.htmlElement) {
            throw new Error("Views should only be manually shown if they're manually sized using setFrame");
        }
        return this._show();
    }
    hide() {
        if (this.htmlElement) {
            throw new Error("Views should only be manually hidden if they're manually sized using setFrame");
        }
        return this._hide();
    }
    addOverlay(overlay) {
        if (this.overlays.includes(overlay)) {
            return;
        }
        this.overlays.push(overlay);
        this.privateContext.update();
    }
    removeOverlay(overlay) {
        if (!this.overlays.includes(overlay)) {
            return;
        }
        this.overlays.splice(this.overlays.indexOf(overlay), 1);
        this.privateContext.update();
    }
    addListener(listener) {
        if (!this.listeners.includes(listener)) {
            this.listeners.push(listener);
        }
    }
    removeListener(listener) {
        if (this.listeners.includes(listener)) {
            this.listeners.splice(this.listeners.indexOf(listener), 1);
        }
    }
    viewPointForFramePoint(point) {
        return this.viewProxy.viewPointForFramePoint(point);
    }
    viewQuadrilateralForFrameQuadrilateral(quadrilateral) {
        return this.viewProxy.viewQuadrilateralForFrameQuadrilateral(quadrilateral);
    }
    addControl(control) {
        if (!this.controls.includes(control)) {
            this.controls.push(control);
            this.privateContext.update();
        }
    }
    removeControl(control) {
        if (this.controls.includes(control)) {
            control.view = null;
            this.controls.splice(this.overlays.indexOf(control), 1);
            this.privateContext.update();
        }
    }
    controlUpdated() {
        this.privateContext.update();
    }
    initialize() {
        if (this._viewProxy) {
            return;
        }
        this._viewProxy = DataCaptureViewProxy.forDataCaptureView(this);
    }
    subscribeToChangesOnHTMLElement() {
        this.domObserver.observe(document, { attributes: true, childList: true, subtree: true });
        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('orientationchange', this.orientationChangeListener);
    }
    unsubscribeFromChangesOnHTMLElement() {
        this.domObserver.disconnect();
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('orientationchange', this.orientationChangeListener);
    }
    elementDidChange() {
        if (!this.htmlElement) {
            this.htmlElementState = new HTMLElementState();
            return;
        }
        const newState = new HTMLElementState();
        const boundingRect = this.htmlElement.getBoundingClientRect();
        newState.position = { top: boundingRect.top, left: boundingRect.left };
        newState.size = { width: boundingRect.width, height: boundingRect.height };
        newState.shouldBeUnderContent = parseInt(this.htmlElement.style.zIndex || '1', 10) < 0
            || parseInt(getComputedStyle(this.htmlElement).zIndex || '1', 10) < 0;
        const isDisplayed = getComputedStyle(this.htmlElement).display !== 'none'
            && this.htmlElement.style.display !== 'none';
        const isInDOM = document.body.contains(this.htmlElement);
        newState.isShown = isDisplayed && isInDOM && !this.htmlElement.hidden;
        this.htmlElementState = newState;
    }
    updatePositionAndSize() {
        if (!this.htmlElementState || !this.htmlElementState.isValid) {
            return;
        }
        this.viewProxy.setPositionAndSize(this.htmlElementState.position.top, this.htmlElementState.position.left, this.htmlElementState.size.width, this.htmlElementState.size.height, this.htmlElementState.shouldBeUnderContent);
    }
    _show() {
        if (!this.context) {
            throw new Error('There should be a context attached to a view that should be shown');
        }
        this.privateContext.initialize();
        return this.viewProxy.show();
    }
    _hide() {
        if (!this.context) {
            throw new Error('There should be a context attached to a view that should be shown');
        }
        return this.viewProxy.hide();
    }
}
DataCaptureView_decorate([
    ignoreFromSerialization
], DataCaptureView.prototype, "_context", void 0);
DataCaptureView_decorate([
    ignoreFromSerialization
], DataCaptureView.prototype, "_viewProxy", void 0);
DataCaptureView_decorate([
    ignoreFromSerialization
], DataCaptureView.prototype, "listeners", void 0);
DataCaptureView_decorate([
    ignoreFromSerialization
], DataCaptureView.prototype, "htmlElement", void 0);
DataCaptureView_decorate([
    ignoreFromSerialization
], DataCaptureView.prototype, "_htmlElementState", void 0);
DataCaptureView_decorate([
    ignoreFromSerialization
], DataCaptureView.prototype, "scrollListener", void 0);
DataCaptureView_decorate([
    ignoreFromSerialization
], DataCaptureView.prototype, "domObserver", void 0);
DataCaptureView_decorate([
    ignoreFromSerialization
], DataCaptureView.prototype, "orientationChangeListener", void 0);
//# sourceMappingURL=DataCaptureView.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/DataCaptureVersion.js
class DataCaptureVersion {
    static get pluginVersion() {
        return '6.15.0-beta.1.snapshot';
    }
}
//# sourceMappingURL=DataCaptureVersion.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/Capacitor/VolumeButtonObserverProxy.js



var VolumeButtonObserverEvent;
(function (VolumeButtonObserverEvent) {
    VolumeButtonObserverEvent["DidChangeVolume"] = "didChangeVolume";
})(VolumeButtonObserverEvent || (VolumeButtonObserverEvent = {}));
class VolumeButtonObserverProxy {
    static forVolumeButtonObserver(volumeButtonObserver) {
        const proxy = new VolumeButtonObserverProxy();
        proxy.volumeButtonObserver = volumeButtonObserver;
        proxy.subscribe();
        return proxy;
    }
    dispose() {
        this.unsubscribe();
    }
    subscribe() {
        this.subscriber = core_dist_Plugins[Capacitor_Capacitor.pluginName]
            .addListener(VolumeButtonObserverEvent.DidChangeVolume, this.notifyListeners.bind(this));
    }
    unsubscribe() {
        this.subscriber.remove();
    }
    notifyListeners(event) {
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return doReturnWithFinish('', null);
        }
        if (this.volumeButtonObserver.didChangeVolume && event.name === VolumeButtonObserverEvent.DidChangeVolume) {
            this.volumeButtonObserver.didChangeVolume();
            return doReturnWithFinish(event.name, null);
        }
    }
}
//# sourceMappingURL=VolumeButtonObserverProxy.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/ts/VolumeButtonObserver.js

class VolumeButtonObserver {
    constructor(didChangeVolume) {
        this.didChangeVolume = didChangeVolume;
        this.initialize();
    }
    dispose() {
        if (this.proxy) {
            this.proxy.dispose();
            this.proxy = null;
            this.didChangeVolume = null;
        }
    }
    initialize() {
        if (!this.proxy) {
            this.proxy = VolumeButtonObserverProxy.forVolumeButtonObserver(this);
        }
    }
}
//# sourceMappingURL=VolumeButtonObserver.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/web.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















const corePluginName = 'ScanditCaptureCorePlugin';
class ScanditCaptureCorePlugin extends dist_WebPlugin {
    constructor() {
        super({
            name: corePluginName,
            platforms: ['ios', 'android'],
        });
    }
    initializePlugins() {
        return __awaiter(this, void 0, void 0, function* () {
            let api = {
                Feedback: Feedback,
                Camera: Camera,
                Color: Color,
                DataCaptureContext: DataCaptureContext,
                DataCaptureContextSettings: DataCaptureContextSettings,
                MarginsWithUnit: MarginsWithUnit,
                NumberWithUnit: NumberWithUnit,
                Point: Point,
                PointWithUnit: PointWithUnit,
                Quadrilateral: Quadrilateral,
                RadiusLocationSelection: RadiusLocationSelection,
                Rect: Rect,
                RectWithUnit: RectWithUnit,
                RectangularLocationSelection: RectangularLocationSelection,
                Size: Size,
                SizeWithAspect: SizeWithAspect,
                SizeWithUnit: SizeWithUnit,
                SizeWithUnitAndAspect: SizeWithUnitAndAspect,
                Brush: Brush,
                LaserlineViewfinder: LaserlineViewfinder,
                RectangularViewfinder: RectangularViewfinder,
                LaserlineViewfinderStyle: LaserlineViewfinderStyle,
                RectangularViewfinderAnimation: RectangularViewfinderAnimation,
                RectangularViewfinderLineStyle: RectangularViewfinderLineStyle,
                RectangularViewfinderStyle: RectangularViewfinderStyle,
                AimerViewfinder: AimerViewfinder,
                CameraPosition: CameraPosition,
                CameraSettings: CameraSettings,
                FrameSourceState: FrameSourceState,
                TorchState: TorchState,
                VideoResolution: VideoResolution,
                FocusRange: FocusRange,
                FocusGestureStrategy: FocusGestureStrategy,
                Anchor: Anchor,
                DataCaptureView: DataCaptureView,
                TorchSwitchControl: TorchSwitchControl,
                ZoomSwitchControl: ZoomSwitchControl,
                TapToFocus: TapToFocus,
                SwipeToZoom: SwipeToZoom,
                DataCaptureVersion: DataCaptureVersion,
                Direction: Direction,
                Orientation: Orientation,
                HTMLElementState: HTMLElementState,
                MeasureUnit: MeasureUnit,
                NoneLocationSelection: NoneLocationSelection,
                SizingMode: SizingMode,
                Sound: Sound,
                NoViewfinder: NoViewfinder,
                Vibration: Vibration,
                VolumeButtonObserver: VolumeButtonObserver,
            };
            for (const key of Object.keys(window.Capacitor.Plugins)) {
                if (key.startsWith('Scandit') && key.indexOf('Native') < 0 && key !== corePluginName) {
                    const pluginApi = yield window.Capacitor.Plugins[key].initialize();
                    api = Object.assign(Object.assign({}, api), pluginApi);
                }
            }
            return new Promise((resolve, reject) => getDefaults.then(() => {
                resolve(api);
            }, reject));
        });
    }
}
const scanditCaptureCore = new ScanditCaptureCorePlugin();


dist_registerWebPlugin(scanditCaptureCore);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-core/dist/esm/index.js

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/node_modules/@capacitor/core/dist/index.js
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const core_dist_createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const core_dist_initPlatforms = (win) => (win.CapacitorPlatforms = core_dist_createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const core_dist_CapacitorPlatforms = /*#__PURE__*/ core_dist_initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof __webpack_require__.g !== 'undefined'
                ? __webpack_require__.g
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const core_dist_addPlatform = core_dist_CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const core_dist_setPlatform = core_dist_CapacitorPlatforms.setPlatform;

const core_dist_legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};

var core_dist_ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(core_dist_ExceptionCode || (core_dist_ExceptionCode = {}));
class core_dist_CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const core_dist_getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const core_dist_createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : core_dist_getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new core_dist_CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, core_dist_ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new core_dist_CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, core_dist_ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = core_dist_CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const core_dist_initCapacitorGlobal = (win) => (win.Capacitor = core_dist_createCapacitor(win));

const _capacitor_core_dist_Capacitor = /*#__PURE__*/ core_dist_initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof __webpack_require__.g !== 'undefined'
                ? __webpack_require__.g
                : {});
const core_dist_registerPlugin = _capacitor_core_dist_Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const _capacitor_core_dist_Plugins = _capacitor_core_dist_Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const core_dist_registerWebPlugin = (plugin) => core_dist_legacyRegisterWebPlugin(_capacitor_core_dist_Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class core_dist_WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new _capacitor_core_dist_Capacitor.Exception(msg, core_dist_ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new _capacitor_core_dist_Capacitor.Exception(msg, core_dist_ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const core_dist_WebView = /*#__PURE__*/ (/* unused pure expression or super */ null && (core_dist_registerPlugin('WebView')));


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-core/src/ts/Capacitor/CommonCapacitor.js

class CommonCapacitor_CapacitorError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
    static fromJSON(json) {
        if (json && json.code && json.message) {
            return new CommonCapacitor_CapacitorError(json.code, json.message);
        }
        else {
            return null;
        }
    }
}
const CommonCapacitor_capacitorExec = (successCallback, errorCallback, pluginName, functionName, args) => {
    if (window.Scandit && window.Scandit.DEBUG) {
        // tslint:disable-next-line:no-console
        console.log(`Called native function: ${functionName}`, args, { success: successCallback, error: errorCallback });
    }
    const extendedSuccessCallback = (message) => {
        const shouldCallback = message && message.shouldNotifyWhenFinished;
        const finishCallbackID = shouldCallback ? message.finishCallbackID : null;
        const started = Date.now();
        let callbackResult;
        if (successCallback) {
            callbackResult = successCallback(message);
        }
        if (shouldCallback) {
            const maxCallbackDuration = 50;
            const callbackDuration = Date.now() - started;
            if (callbackDuration > maxCallbackDuration) {
                // tslint:disable-next-line:no-console
                console.log(`[SCANDIT WARNING] Took ${callbackDuration}ms to execute callback that's blocking native execution. You should keep this duration short, for more information, take a look at the documentation.`);
            }
            _capacitor_core_dist_Plugins[pluginName].finishCallback([{
                    finishCallbackID,
                    result: callbackResult,
                }]);
        }
    };
    const extendedErrorCallback = (error) => {
        if (errorCallback) {
            const capacitorError = CommonCapacitor_CapacitorError.fromJSON(error);
            if (capacitorError !== null) {
                error = capacitorError;
            }
            errorCallback(error);
        }
    };
    _capacitor_core_dist_Plugins[pluginName][functionName](args).then(extendedSuccessCallback, extendedErrorCallback);
};
const CommonCapacitor_doReturnWithFinish = (finishCallbackID, result) => {
    if (Plugins.ScanditBarcodeNative) {
        Plugins.ScanditBarcodeNative.finishCallback({ result: Object.assign({ finishCallbackID }, result) });
    }
    else if (Plugins.ScanditIdNative) {
        Plugins.ScanditIdNative.finishCallback({ result: Object.assign({ finishCallbackID }, result) });
    }
    return result;
};
//# sourceMappingURL=CommonCapacitor.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-core/src/ts/Serializeable.js
// tslint:disable-next-line:ban-types
function Serializeable_ignoreFromSerialization(target, propertyName) {
    target.ignoredProperties = target.ignoredProperties || [];
    target.ignoredProperties.push(propertyName);
}
// tslint:disable-next-line:ban-types
function Serializeable_nameForSerialization(customName) {
    return (target, propertyName) => {
        target.customPropertyNames = target.customPropertyNames || {};
        target.customPropertyNames[propertyName] = customName;
    };
}
// tslint:disable-next-line:ban-types
function Serializeable_ignoreFromSerializationIfNull(target, propertyName) {
    target.ignoredIfNullProperties = target.ignoredIfNullProperties || [];
    target.ignoredIfNullProperties.push(propertyName);
}
// tslint:disable-next-line:ban-types
function Serializeable_serializationDefault(defaultValue) {
    return (target, propertyName) => {
        target.customPropertyDefaults = target.customPropertyDefaults || {};
        target.customPropertyDefaults[propertyName] = defaultValue;
    };
}
class ts_Serializeable_DefaultSerializeable {
    toJSON() {
        const properties = Object.keys(this);
        // use @ignoreFromSerialization to ignore properties
        const ignoredProperties = this.ignoredProperties || [];
        // use @ignoreFromSerializationIfNull to ignore properties if they're null
        const ignoredIfNullProperties = this.ignoredIfNullProperties || [];
        // use @nameForSerialization('customName') to rename properties in the JSON output
        const customPropertyNames = this.customPropertyNames || {};
        // use @serializationDefault({}) to use a different value in the JSON output if they're null
        const customPropertyDefaults = this.customPropertyDefaults || {};
        return properties.reduce((json, property) => {
            if (ignoredProperties.includes(property)) {
                return json;
            }
            let value = this[property];
            if (value === undefined) {
                return json;
            }
            // Ignore if it's null and should be ignored.
            // This is basically responsible for not including optional properties in the JSON if they're null,
            // as that's not always deserialized to mean the same as not present.
            if (value === null && ignoredIfNullProperties.includes(property)) {
                return json;
            }
            if (value === null && customPropertyDefaults[property] !== undefined) {
                value = customPropertyDefaults[property];
            }
            // Serialize if serializeable
            if (value != null && value.toJSON) {
                value = value.toJSON();
            }
            // Serialize the array if the elements are serializeable
            if (Array.isArray(value)) {
                value = value.map(e => e.toJSON ? e.toJSON() : e);
            }
            const propertyName = customPropertyNames[property] || property;
            json[propertyName] = value;
            return json;
        }, {});
    }
}
//# sourceMappingURL=Serializeable.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-core/src/ts/Common.js
var Common_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Common_Point extends ts_Serializeable_DefaultSerializeable {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    static fromJSON(json) {
        return new Common_Point(json.x, json.y);
    }
}
Common_decorate([
    Serializeable_nameForSerialization('x')
], Common_Point.prototype, "_x", void 0);
Common_decorate([
    Serializeable_nameForSerialization('y')
], Common_Point.prototype, "_y", void 0);
class Common_Quadrilateral extends ts_Serializeable_DefaultSerializeable {
    constructor(topLeft, topRight, bottomRight, bottomLeft) {
        super();
        this._topLeft = topLeft;
        this._topRight = topRight;
        this._bottomRight = bottomRight;
        this._bottomLeft = bottomLeft;
    }
    get topLeft() {
        return this._topLeft;
    }
    get topRight() {
        return this._topRight;
    }
    get bottomRight() {
        return this._bottomRight;
    }
    get bottomLeft() {
        return this._bottomLeft;
    }
    static fromJSON(json) {
        return new Common_Quadrilateral(Common_Point.fromJSON(json.topLeft), Common_Point.fromJSON(json.topRight), Common_Point.fromJSON(json.bottomRight), Common_Point.fromJSON(json.bottomLeft));
    }
}
Common_decorate([
    Serializeable_nameForSerialization('topLeft')
], Common_Quadrilateral.prototype, "_topLeft", void 0);
Common_decorate([
    Serializeable_nameForSerialization('topRight')
], Common_Quadrilateral.prototype, "_topRight", void 0);
Common_decorate([
    Serializeable_nameForSerialization('bottomRight')
], Common_Quadrilateral.prototype, "_bottomRight", void 0);
Common_decorate([
    Serializeable_nameForSerialization('bottomLeft')
], Common_Quadrilateral.prototype, "_bottomLeft", void 0);
var Common_MeasureUnit;
(function (MeasureUnit) {
    MeasureUnit["DIP"] = "dip";
    MeasureUnit["Pixel"] = "pixel";
    MeasureUnit["Fraction"] = "fraction";
})(Common_MeasureUnit || (Common_MeasureUnit = {}));
class Common_NumberWithUnit extends ts_Serializeable_DefaultSerializeable {
    constructor(value, unit) {
        super();
        this._value = value;
        this._unit = unit;
    }
    get value() {
        return this._value;
    }
    get unit() {
        return this._unit;
    }
    static fromJSON(json) {
        return new Common_NumberWithUnit(json.value, json.unit);
    }
}
Common_decorate([
    Serializeable_nameForSerialization('value')
], Common_NumberWithUnit.prototype, "_value", void 0);
Common_decorate([
    Serializeable_nameForSerialization('unit')
], Common_NumberWithUnit.prototype, "_unit", void 0);
class Common_PointWithUnit extends ts_Serializeable_DefaultSerializeable {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    static fromJSON(json) {
        return new Common_PointWithUnit(Common_NumberWithUnit.fromJSON(json.x), Common_NumberWithUnit.fromJSON(json.y));
    }
    static get zero() {
        return new Common_PointWithUnit(new Common_NumberWithUnit(0, Common_MeasureUnit.Pixel), new Common_NumberWithUnit(0, Common_MeasureUnit.Pixel));
    }
}
Common_decorate([
    Serializeable_nameForSerialization('x')
], Common_PointWithUnit.prototype, "_x", void 0);
Common_decorate([
    Serializeable_nameForSerialization('y')
], Common_PointWithUnit.prototype, "_y", void 0);
class Common_Rect extends ts_Serializeable_DefaultSerializeable {
    constructor(origin, size) {
        super();
        this._origin = origin;
        this._size = size;
    }
    get origin() {
        return this._origin;
    }
    get size() {
        return this._size;
    }
}
Common_decorate([
    Serializeable_nameForSerialization('origin')
], Common_Rect.prototype, "_origin", void 0);
Common_decorate([
    Serializeable_nameForSerialization('size')
], Common_Rect.prototype, "_size", void 0);
class Common_RectWithUnit extends ts_Serializeable_DefaultSerializeable {
    constructor(origin, size) {
        super();
        this._origin = origin;
        this._size = size;
    }
    get origin() {
        return this._origin;
    }
    get size() {
        return this._size;
    }
}
Common_decorate([
    Serializeable_nameForSerialization('origin')
], Common_RectWithUnit.prototype, "_origin", void 0);
Common_decorate([
    Serializeable_nameForSerialization('size')
], Common_RectWithUnit.prototype, "_size", void 0);
class Common_SizeWithUnit extends ts_Serializeable_DefaultSerializeable {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
}
Common_decorate([
    Serializeable_nameForSerialization('width')
], Common_SizeWithUnit.prototype, "_width", void 0);
Common_decorate([
    Serializeable_nameForSerialization('height')
], Common_SizeWithUnit.prototype, "_height", void 0);
class Common_Size extends ts_Serializeable_DefaultSerializeable {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    static fromJSON(json) {
        return new Common_Size(json.width, json.height);
    }
}
Common_decorate([
    Serializeable_nameForSerialization('width')
], Common_Size.prototype, "_width", void 0);
Common_decorate([
    Serializeable_nameForSerialization('height')
], Common_Size.prototype, "_height", void 0);
class Common_SizeWithAspect {
    constructor(size, aspect) {
        this._size = size;
        this._aspect = aspect;
    }
    get size() {
        return this._size;
    }
    get aspect() {
        return this._aspect;
    }
}
Common_decorate([
    Serializeable_nameForSerialization('size')
], Common_SizeWithAspect.prototype, "_size", void 0);
Common_decorate([
    Serializeable_nameForSerialization('aspect')
], Common_SizeWithAspect.prototype, "_aspect", void 0);
var Common_SizingMode;
(function (SizingMode) {
    SizingMode["WidthAndHeight"] = "widthAndHeight";
    SizingMode["WidthAndAspectRatio"] = "widthAndAspectRatio";
    SizingMode["HeightAndAspectRatio"] = "heightAndAspectRatio";
    SizingMode["ShorterDimensionAndAspectRatio"] = "shorterDimensionAndAspectRatio";
})(Common_SizingMode || (Common_SizingMode = {}));
class Common_SizeWithUnitAndAspect {
    constructor() {
        this._shorterDimensionAndAspectRatio = null;
    }
    get widthAndHeight() {
        return this._widthAndHeight;
    }
    get widthAndAspectRatio() {
        return this._widthAndAspectRatio;
    }
    get heightAndAspectRatio() {
        return this._heightAndAspectRatio;
    }
    get shorterDimensionAndAspectRatio() {
        return this._shorterDimensionAndAspectRatio;
    }
    get sizingMode() {
        if (this.widthAndAspectRatio) {
            return Common_SizingMode.WidthAndAspectRatio;
        }
        if (this.heightAndAspectRatio) {
            return Common_SizingMode.HeightAndAspectRatio;
        }
        if (this.shorterDimensionAndAspectRatio) {
            return Common_SizingMode.ShorterDimensionAndAspectRatio;
        }
        return Common_SizingMode.WidthAndHeight;
    }
    static sizeWithWidthAndHeight(widthAndHeight) {
        const sizeWithUnitAndAspect = new Common_SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._widthAndHeight = widthAndHeight;
        return sizeWithUnitAndAspect;
    }
    static sizeWithWidthAndAspectRatio(width, aspectRatio) {
        const sizeWithUnitAndAspect = new Common_SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._widthAndAspectRatio = new Common_SizeWithAspect(width, aspectRatio);
        return sizeWithUnitAndAspect;
    }
    static sizeWithHeightAndAspectRatio(height, aspectRatio) {
        const sizeWithUnitAndAspect = new Common_SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._heightAndAspectRatio = new Common_SizeWithAspect(height, aspectRatio);
        return sizeWithUnitAndAspect;
    }
    static sizeWithShorterDimensionAndAspectRatio(shorterDimension, aspectRatio) {
        const sizeWithUnitAndAspect = new Common_SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._shorterDimensionAndAspectRatio = new Common_SizeWithAspect(shorterDimension, aspectRatio);
        return sizeWithUnitAndAspect;
    }
    static fromJSON(json) {
        if (json.width && json.height) {
            return this.sizeWithWidthAndHeight(new Common_SizeWithUnit(Common_NumberWithUnit.fromJSON(json.width), Common_NumberWithUnit.fromJSON(json.height)));
        }
        else if (json.width && json.aspect) {
            return this.sizeWithWidthAndAspectRatio(Common_NumberWithUnit.fromJSON(json.width), json.aspect);
        }
        else if (json.height && json.aspect) {
            return this.sizeWithHeightAndAspectRatio(Common_NumberWithUnit.fromJSON(json.height), json.aspect);
        }
        else if (json.shorterDimension && json.aspect) {
            return this.sizeWithShorterDimensionAndAspectRatio(Common_NumberWithUnit.fromJSON(json.shorterDimension), json.aspect);
        }
        else {
            throw new Error(`SizeWithUnitAndAspectJSON is malformed: ${JSON.stringify(json)}`);
        }
    }
    // no member access so our coverage check doesn't pick it up
    // TODO: https://jira.scandit.com/browse/SDC-1773
    // tslint:disable-next-line:member-access
    toJSON() {
        switch (this.sizingMode) {
            case Common_SizingMode.WidthAndAspectRatio:
                return {
                    width: this.widthAndAspectRatio.size.toJSON(),
                    aspect: this.widthAndAspectRatio.aspect,
                };
            case Common_SizingMode.HeightAndAspectRatio:
                return {
                    height: this.heightAndAspectRatio.size.toJSON(),
                    aspect: this.heightAndAspectRatio.aspect,
                };
            case Common_SizingMode.ShorterDimensionAndAspectRatio:
                return {
                    shorterDimension: this.shorterDimensionAndAspectRatio.size.toJSON(),
                    aspect: this.shorterDimensionAndAspectRatio.aspect,
                };
            default:
                return {
                    width: this.widthAndHeight.width.toJSON(),
                    height: this.widthAndHeight.height.toJSON(),
                };
        }
    }
}
Common_decorate([
    Serializeable_nameForSerialization('widthAndHeight')
], Common_SizeWithUnitAndAspect.prototype, "_widthAndHeight", void 0);
Common_decorate([
    Serializeable_nameForSerialization('widthAndAspectRatio')
], Common_SizeWithUnitAndAspect.prototype, "_widthAndAspectRatio", void 0);
Common_decorate([
    Serializeable_nameForSerialization('heightAndAspectRatio')
], Common_SizeWithUnitAndAspect.prototype, "_heightAndAspectRatio", void 0);
Common_decorate([
    Serializeable_nameForSerialization('shorterDimensionAndAspectRatio')
], Common_SizeWithUnitAndAspect.prototype, "_shorterDimensionAndAspectRatio", void 0);
class Common_MarginsWithUnit extends ts_Serializeable_DefaultSerializeable {
    constructor(left, right, top, bottom) {
        super();
        this._left = left;
        this._right = right;
        this._top = top;
        this._bottom = bottom;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
    get top() {
        return this._top;
    }
    get bottom() {
        return this._bottom;
    }
    static fromJSON(json) {
        return new Common_MarginsWithUnit(Common_NumberWithUnit.fromJSON(json.left), Common_NumberWithUnit.fromJSON(json.right), Common_NumberWithUnit.fromJSON(json.top), Common_NumberWithUnit.fromJSON(json.bottom));
    }
    static get zero() {
        return new Common_MarginsWithUnit(new Common_NumberWithUnit(0, Common_MeasureUnit.Pixel), new Common_NumberWithUnit(0, Common_MeasureUnit.Pixel), new Common_NumberWithUnit(0, Common_MeasureUnit.Pixel), new Common_NumberWithUnit(0, Common_MeasureUnit.Pixel));
    }
}
Common_decorate([
    Serializeable_nameForSerialization('left')
], Common_MarginsWithUnit.prototype, "_left", void 0);
Common_decorate([
    Serializeable_nameForSerialization('right')
], Common_MarginsWithUnit.prototype, "_right", void 0);
Common_decorate([
    Serializeable_nameForSerialization('top')
], Common_MarginsWithUnit.prototype, "_top", void 0);
Common_decorate([
    Serializeable_nameForSerialization('bottom')
], Common_MarginsWithUnit.prototype, "_bottom", void 0);
class Common_Color {
    constructor(hex) {
        this.hexadecimalString = hex;
    }
    get redComponent() {
        return this.hexadecimalString.slice(0, 2);
    }
    get greenComponent() {
        return this.hexadecimalString.slice(2, 4);
    }
    get blueComponent() {
        return this.hexadecimalString.slice(4, 6);
    }
    get alphaComponent() {
        return this.hexadecimalString.slice(6, 8);
    }
    get red() {
        return Common_Color.hexToNumber(this.redComponent);
    }
    get green() {
        return Common_Color.hexToNumber(this.greenComponent);
    }
    get blue() {
        return Common_Color.hexToNumber(this.blueComponent);
    }
    get alpha() {
        return Common_Color.hexToNumber(this.alphaComponent);
    }
    static fromHex(hex) {
        return new Common_Color(Common_Color.normalizeHex(hex));
    }
    static fromRGBA(red, green, blue, alpha = 1) {
        const hexString = [red, green, blue, this.normalizeAlpha(alpha)]
            .reduce((hex, colorComponent) => hex + this.numberToHex(colorComponent), '');
        return new Common_Color(hexString);
    }
    static hexToNumber(hex) {
        return parseInt(hex, 16);
    }
    static fromJSON(json) {
        return Common_Color.fromHex(json);
    }
    static numberToHex(x) {
        x = Math.round(x);
        let hex = x.toString(16);
        if (hex.length === 1) {
            hex = '0' + hex;
        }
        return hex.toUpperCase();
    }
    static normalizeHex(hex) {
        // remove leading #
        if (hex[0] === '#') {
            hex = hex.slice(1);
        }
        // double digits if single digit
        if (hex.length < 6) {
            hex = hex.split('').map(s => s + s).join('');
        }
        // add alpha if missing
        if (hex.length === 6) {
            hex = hex + 'FF';
        }
        return hex.toUpperCase();
    }
    static normalizeAlpha(alpha) {
        if (alpha > 0 && alpha <= 1) {
            return 255 * alpha;
        }
        return alpha;
    }
    withAlpha(alpha) {
        const newHex = this.hexadecimalString.slice(0, 6) + Common_Color.numberToHex(Common_Color.normalizeAlpha(alpha));
        return Common_Color.fromHex(newHex);
    }
    // no member access so our coverage check doesn't pick it up
    // TODO: https://jira.scandit.com/browse/SDC-1773
    // tslint:disable-next-line:member-access
    toJSON() {
        return this.hexadecimalString;
    }
}
var Common_Orientation;
(function (Orientation) {
    Orientation["Unknown"] = "unknown";
    Orientation["Portrait"] = "portrait";
    Orientation["PortraitUpsideDown"] = "portraitUpsideDown";
    Orientation["LandscapeRight"] = "landscapeRight";
    Orientation["LandscapeLeft"] = "landscapeLeft";
})(Common_Orientation || (Common_Orientation = {}));
var Common_Direction;
(function (Direction) {
    Direction["None"] = "none";
    Direction["Horizontal"] = "horizontal";
    Direction["LeftToRight"] = "leftToRight";
    Direction["RightToLeft"] = "rightToLeft";
    Direction["Vertical"] = "vertical";
    Direction["TopToBottom"] = "topToBottom";
    Direction["BottomToTop"] = "bottomToTop";
})(Common_Direction || (Common_Direction = {}));
//# sourceMappingURL=Common.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-core/src/ts/DataCaptureView+Related.js

class DataCaptureView_Related_PrivateFocusGestureDeserializer {
    static fromJSON(json) {
        if (json && json.type === new DataCaptureView_Related_TapToFocus().type) {
            return new DataCaptureView_Related_TapToFocus();
        }
        else {
            return null;
        }
    }
}
class DataCaptureView_Related_TapToFocus extends ts_Serializeable_DefaultSerializeable {
    constructor() {
        super();
        this.type = 'tapToFocus';
    }
}
class DataCaptureView_Related_PrivateZoomGestureDeserializer {
    static fromJSON(json) {
        if (json && json.type === new DataCaptureView_Related_SwipeToZoom().type) {
            return new DataCaptureView_Related_SwipeToZoom();
        }
        else {
            return null;
        }
    }
}
class DataCaptureView_Related_SwipeToZoom extends ts_Serializeable_DefaultSerializeable {
    constructor() {
        super();
        this.type = 'swipeToZoom';
    }
}
var DataCaptureView_Related_LogoStyle;
(function (LogoStyle) {
    LogoStyle["Minimal"] = "minimal";
    LogoStyle["Extended"] = "extended";
})(DataCaptureView_Related_LogoStyle || (DataCaptureView_Related_LogoStyle = {}));
//# sourceMappingURL=DataCaptureView+Related.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-core/src/ts/Viewfinder+Related.js
var ts_Viewfinder_Related_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Viewfinder_Related_RectangularViewfinderStyle;
(function (RectangularViewfinderStyle) {
    RectangularViewfinderStyle["Legacy"] = "legacy";
    RectangularViewfinderStyle["Rounded"] = "rounded";
    RectangularViewfinderStyle["Square"] = "square";
})(Viewfinder_Related_RectangularViewfinderStyle || (Viewfinder_Related_RectangularViewfinderStyle = {}));
var Viewfinder_Related_RectangularViewfinderLineStyle;
(function (RectangularViewfinderLineStyle) {
    RectangularViewfinderLineStyle["Light"] = "light";
    RectangularViewfinderLineStyle["Bold"] = "bold";
})(Viewfinder_Related_RectangularViewfinderLineStyle || (Viewfinder_Related_RectangularViewfinderLineStyle = {}));
var Viewfinder_Related_LaserlineViewfinderStyle;
(function (LaserlineViewfinderStyle) {
    LaserlineViewfinderStyle["Legacy"] = "legacy";
    LaserlineViewfinderStyle["Animated"] = "animated";
})(Viewfinder_Related_LaserlineViewfinderStyle || (Viewfinder_Related_LaserlineViewfinderStyle = {}));
class Viewfinder_Related_RectangularViewfinderAnimation extends ts_Serializeable_DefaultSerializeable {
    constructor(isLooping) {
        super();
        this._isLooping = false;
        this._isLooping = isLooping;
    }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        return new Viewfinder_Related_RectangularViewfinderAnimation(json.looping);
    }
    get isLooping() {
        return this._isLooping;
    }
}
ts_Viewfinder_Related_decorate([
    Serializeable_nameForSerialization('isLooping')
], Viewfinder_Related_RectangularViewfinderAnimation.prototype, "_isLooping", void 0);
//# sourceMappingURL=Viewfinder+Related.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-core/src/ts/Capacitor/Defaults.js



const Defaults_defaultsFromJSON = (json) => {
    return {
        Camera: {
            Settings: {
                preferredResolution: json.Camera.Settings.preferredResolution,
                zoomFactor: json.Camera.Settings.zoomFactor,
                focusRange: json.Camera.Settings.focusRange,
                zoomGestureZoomFactor: json.Camera.Settings.zoomGestureZoomFactor,
                focusGestureStrategy: json.Camera.Settings.focusGestureStrategy,
                shouldPreferSmoothAutoFocus: json.Camera.Settings.shouldPreferSmoothAutoFocus,
            },
            defaultPosition: (json.Camera.defaultPosition || null),
            availablePositions: json.Camera.availablePositions,
        },
        DataCaptureView: {
            scanAreaMargins: Common_MarginsWithUnit.fromJSON(JSON.parse(json.DataCaptureView.scanAreaMargins)),
            pointOfInterest: Common_PointWithUnit.fromJSON(JSON.parse(json.DataCaptureView.pointOfInterest)),
            logoAnchor: json.DataCaptureView.logoAnchor,
            logoOffset: Common_PointWithUnit.fromJSON(JSON.parse(json.DataCaptureView.logoOffset)),
            focusGesture: DataCaptureView_Related_PrivateFocusGestureDeserializer.fromJSON(JSON.parse(json.DataCaptureView.focusGesture)),
            zoomGesture: DataCaptureView_Related_PrivateZoomGestureDeserializer.fromJSON(JSON.parse(json.DataCaptureView.zoomGesture)),
            logoStyle: json.DataCaptureView.logoStyle.toLowerCase(),
        },
        LaserlineViewfinder: Object
            .keys(json.LaserlineViewfinder.styles)
            .reduce((acc, key) => {
            const viewfinder = json.LaserlineViewfinder.styles[key];
            acc.styles[key] = {
                width: Common_NumberWithUnit.fromJSON(JSON.parse(viewfinder.width)),
                enabledColor: Common_Color.fromJSON(viewfinder.enabledColor),
                disabledColor: Common_Color.fromJSON(viewfinder.disabledColor),
                style: viewfinder.style,
            };
            return acc;
        }, { defaultStyle: json.LaserlineViewfinder.defaultStyle, styles: {} }),
        RectangularViewfinder: Object
            .keys(json.RectangularViewfinder.styles)
            .reduce((acc, key) => {
            const viewfinder = json.RectangularViewfinder.styles[key];
            acc.styles[key] = {
                size: Common_SizeWithUnitAndAspect.fromJSON(JSON.parse(viewfinder.size)),
                color: Common_Color.fromJSON(viewfinder.color),
                style: viewfinder.style,
                lineStyle: viewfinder.lineStyle,
                dimming: viewfinder.dimming,
                disabledDimming: viewfinder.disabledDimming,
                animation: Viewfinder_Related_RectangularViewfinderAnimation.fromJSON(viewfinder.animation ? JSON.parse(viewfinder.animation) : null),
            };
            return acc;
        }, { defaultStyle: json.RectangularViewfinder.defaultStyle, styles: {} }),
        AimerViewfinder: {
            frameColor: Common_Color.fromJSON(json.AimerViewfinder.frameColor),
            dotColor: Common_Color.fromJSON(json.AimerViewfinder.dotColor),
        },
        Brush: {
            fillColor: Common_Color.fromJSON(json.Brush.fillColor),
            strokeColor: Common_Color.fromJSON(json.Brush.strokeColor),
            strokeWidth: json.Brush.strokeWidth,
        },
        deviceID: json.deviceID,
        capacitorVersion: json.capacitorVersion,
    };
};
//# sourceMappingURL=Defaults.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-core/src/ts/Capacitor/Capacitor.js



var Capacitor_CapacitorFunction;
(function (CapacitorFunction) {
    CapacitorFunction["GetDefaults"] = "getDefaults";
    CapacitorFunction["ContextFromJSON"] = "contextFromJSON";
    CapacitorFunction["DisposeContext"] = "disposeContext";
    CapacitorFunction["UpdateContextFromJSON"] = "updateContextFromJSON";
    CapacitorFunction["SubscribeContextListener"] = "subscribeContextListener";
    CapacitorFunction["SubscribeContextFrameListener"] = "subscribeContextFrameListener";
    CapacitorFunction["SetViewPositionAndSize"] = "setViewPositionAndSize";
    CapacitorFunction["ShowView"] = "showView";
    CapacitorFunction["HideView"] = "hideView";
    CapacitorFunction["ViewPointForFramePoint"] = "viewPointForFramePoint";
    CapacitorFunction["ViewQuadrilateralForFrameQuadrilateral"] = "viewQuadrilateralForFrameQuadrilateral";
    CapacitorFunction["SubscribeViewListener"] = "subscribeViewListener";
    CapacitorFunction["GetCurrentCameraState"] = "getCurrentCameraState";
    CapacitorFunction["GetIsTorchAvailable"] = "getIsTorchAvailable";
    CapacitorFunction["EmitFeedback"] = "emitFeedback";
    CapacitorFunction["SubscribeVolumeButtonObserver"] = "subscribeVolumeButtonObserver";
    CapacitorFunction["UnsubscribeVolumeButtonObserver"] = "unsubscribeVolumeButtonObserver";
})(Capacitor_CapacitorFunction || (Capacitor_CapacitorFunction = {}));
const Capacitor_pluginName = 'ScanditCaptureCoreNative';
// tslint:disable-next-line:variable-name
const Capacitor_Capacitor_Capacitor = {
    pluginName: Capacitor_pluginName,
    defaults: {},
    exec: (success, error, functionName, args) => CommonCapacitor_capacitorExec(success, error, Capacitor_pluginName, functionName, args),
};
const Capacitor_getDefaults = new Promise((resolve, reject) => _capacitor_core_dist_Plugins[Capacitor_Capacitor_Capacitor.pluginName][Capacitor_CapacitorFunction.GetDefaults]().then((defaultsJSON) => {
    const defaults = Defaults_defaultsFromJSON(defaultsJSON);
    Capacitor_Capacitor_Capacitor.defaults = defaults;
    resolve(defaults);
}, reject));
//# sourceMappingURL=Capacitor.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-core/src/ts/Camera+Related.js


var Camera_Related_FrameSourceState;
(function (FrameSourceState) {
    FrameSourceState["On"] = "on";
    FrameSourceState["Off"] = "off";
    FrameSourceState["Starting"] = "starting";
    FrameSourceState["Stopping"] = "stopping";
    FrameSourceState["Standby"] = "standby";
    FrameSourceState["BootingUp"] = "bootingUp";
    FrameSourceState["WakingUp"] = "wakingUp";
    FrameSourceState["GoingToSleep"] = "goingToSleep";
    FrameSourceState["ShuttingDown"] = "shuttingDown";
})(Camera_Related_FrameSourceState || (Camera_Related_FrameSourceState = {}));
var Camera_Related_TorchState;
(function (TorchState) {
    TorchState["On"] = "on";
    TorchState["Off"] = "off";
    TorchState["Auto"] = "auto";
})(Camera_Related_TorchState || (Camera_Related_TorchState = {}));
var Camera_Related_CameraPosition;
(function (CameraPosition) {
    CameraPosition["WorldFacing"] = "worldFacing";
    CameraPosition["UserFacing"] = "userFacing";
    CameraPosition["Unspecified"] = "unspecified";
})(Camera_Related_CameraPosition || (Camera_Related_CameraPosition = {}));
var Camera_Related_VideoResolution;
(function (VideoResolution) {
    VideoResolution["Auto"] = "auto";
    VideoResolution["HD"] = "hd";
    VideoResolution["FullHD"] = "fullHd";
    VideoResolution["UHD4K"] = "uhd4k";
})(Camera_Related_VideoResolution || (Camera_Related_VideoResolution = {}));
var Camera_Related_FocusRange;
(function (FocusRange) {
    FocusRange["Full"] = "full";
    FocusRange["Near"] = "near";
    FocusRange["Far"] = "far";
})(Camera_Related_FocusRange || (Camera_Related_FocusRange = {}));
var Camera_Related_FocusGestureStrategy;
(function (FocusGestureStrategy) {
    FocusGestureStrategy["None"] = "none";
    FocusGestureStrategy["Manual"] = "manual";
    FocusGestureStrategy["ManualUntilCapture"] = "manualUntilCapture";
    FocusGestureStrategy["AutoOnLocation"] = "autoOnLocation";
})(Camera_Related_FocusGestureStrategy || (Camera_Related_FocusGestureStrategy = {}));
var Camera_Related_PrivateCameraProperty;
(function (PrivateCameraProperty) {
    PrivateCameraProperty["CameraAPI"] = "api";
})(Camera_Related_PrivateCameraProperty || (Camera_Related_PrivateCameraProperty = {}));
class Camera_Related_CameraSettings extends ts_Serializeable_DefaultSerializeable {
    constructor(settings) {
        super();
        this.preferredResolution = Capacitor_Capacitor_Capacitor.defaults.Camera.Settings.preferredResolution;
        this.zoomFactor = Capacitor_Capacitor_Capacitor.defaults.Camera.Settings.zoomFactor;
        this.zoomGestureZoomFactor = Capacitor_Capacitor_Capacitor.defaults.Camera.Settings.zoomGestureZoomFactor;
        this.api = 0;
        this.focus = {
            range: Capacitor_Capacitor_Capacitor.defaults.Camera.Settings.focusRange,
            focusGestureStrategy: Capacitor_Capacitor_Capacitor.defaults.Camera.Settings.focusGestureStrategy,
            shouldPreferSmoothAutoFocus: Capacitor_Capacitor_Capacitor.defaults.Camera.Settings.shouldPreferSmoothAutoFocus,
        };
        if (settings !== undefined && settings !== null) {
            Object.getOwnPropertyNames(settings).forEach(propertyName => {
                this[propertyName] = settings[propertyName];
            });
        }
    }
    get focusRange() {
        return this.focus.range;
    }
    set focusRange(newRange) {
        this.focus.range = newRange;
    }
    get focusGestureStrategy() {
        return this.focus.focusGestureStrategy;
    }
    set focusGestureStrategy(newStrategy) {
        this.focus.focusGestureStrategy = newStrategy;
    }
    get shouldPreferSmoothAutoFocus() {
        return this.focus.shouldPreferSmoothAutoFocus;
    }
    set shouldPreferSmoothAutoFocus(newShouldPreferSmoothAutoFocus) {
        this.focus.shouldPreferSmoothAutoFocus = newShouldPreferSmoothAutoFocus;
    }
    static fromJSON(json) {
        const settings = new Camera_Related_CameraSettings();
        settings.preferredResolution = json.preferredResolution;
        settings.zoomFactor = json.zoomFactor;
        settings.focusRange = json.focusRange;
        settings.zoomGestureZoomFactor = json.zoomGestureZoomFactor;
        settings.focusGestureStrategy = json.focusGestureStrategy;
        settings.shouldPreferSmoothAutoFocus = json.shouldPreferSmoothAutoFocus;
        if (json.api !== undefined && json.api !== null) {
            settings.api = json.api;
        }
        return settings;
    }
    setProperty(name, value) {
        this[name] = value;
    }
    getProperty(name) {
        return this[name];
    }
}
//# sourceMappingURL=Camera+Related.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/ts/Capacitor/Defaults.js


const Capacitor_Defaults_defaultsFromJSON = (json) => {
    return {
        IdCapture: {
            RecommendedCameraSettings: Camera_Related_CameraSettings.fromJSON(json.IdCapture.RecommendedCameraSettings),
            IdCaptureOverlayDefaults: {
                defaultCapturedBrush: {
                    fillColor: Common_Color.fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor),
                    strokeColor: Common_Color.fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor),
                    strokeWidth: json.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth,
                },
                defaultLocalizedBrush: {
                    fillColor: Common_Color.fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor),
                    strokeColor: Common_Color.fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor),
                    strokeWidth: json.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth,
                },
                defaultRejectedBrush: {
                    fillColor: Common_Color.fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor),
                    strokeColor: Common_Color.fromJSON(json.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor),
                    strokeWidth: json.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth,
                },
            },
        },
    };
};
//# sourceMappingURL=Defaults.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/ts/Capacitor/Capacitor.js



const Capacitor_Capacitor_pluginName = 'ScanditIdNative';
// tslint:disable-next-line:variable-name
const ts_Capacitor_Capacitor_Capacitor = {
    pluginName: Capacitor_Capacitor_pluginName,
    defaults: {},
    exec: (success, error, functionName, args) => CommonCapacitor_capacitorExec(success, error, Capacitor_Capacitor_pluginName, functionName, args),
};
var Capacitor_Capacitor_CapacitorFunction;
(function (CapacitorFunction) {
    CapacitorFunction["GetDefaults"] = "getDefaults";
    CapacitorFunction["SubscribeIdCaptureListener"] = "subscribeIdCaptureListener";
    CapacitorFunction["ResetIdCapture"] = "resetIdCapture";
    CapacitorFunction["VerifyCapturedId"] = "verifyCapturedId";
})(Capacitor_Capacitor_CapacitorFunction || (Capacitor_Capacitor_CapacitorFunction = {}));
const Capacitor_Capacitor_getDefaults = new Promise((resolve, reject) => _capacitor_core_dist_Plugins[ts_Capacitor_Capacitor_Capacitor.pluginName][Capacitor_Capacitor_CapacitorFunction.GetDefaults]().then((defaultsJSON) => {
    const defaults = Capacitor_Defaults_defaultsFromJSON(defaultsJSON);
    ts_Capacitor_Capacitor_Capacitor.defaults = defaults;
    resolve(defaults);
}, reject));
//# sourceMappingURL=Capacitor.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/ts/Capacitor/IdCaptureProxy.js


class IdCaptureProxy {
    static forIdCapture(idCapture) {
        const proxy = new IdCaptureProxy();
        proxy.idCapture = idCapture;
        return proxy;
    }
    reset() {
        return new Promise((resolve, reject) => {
            IdCaptureProxy.cordovaExec(resolve, reject, Capacitor_Capacitor_CapacitorFunction.ResetIdCapture, null);
        });
    }
    verifyCapturedId(capturedId) {
        // Necessary for not exposing internal API on CapturedId, while only passing the private "json" property
        // to native iOS and Android.
        const capturedIdJsonData = JSON.parse(capturedId).json;
        return _capacitor_core_dist_Plugins[ts_Capacitor_Capacitor_Capacitor.pluginName][Capacitor_Capacitor_CapacitorFunction.VerifyCapturedId]({
            capturedId: JSON.stringify(capturedIdJsonData),
        });
    }
}
IdCaptureProxy.cordovaExec = ts_Capacitor_Capacitor_Capacitor.exec;
//# sourceMappingURL=IdCaptureProxy.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/ts/CapturedId.js
var CapturedId_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class DateResult {
    get day() { return this.json.day; }
    get month() { return this.json.month; }
    get year() { return this.json.year; }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const dateResult = new DateResult();
        dateResult.json = json;
        return dateResult;
    }
}
class ProfessionalDrivingPermit {
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    get codes() { return this.json.codes; }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const object = new ProfessionalDrivingPermit();
        object.json = json;
        return object;
    }
}
class VehicleRestriction {
    get vehicleCode() { return this.json.vehicleCode; }
    get vehicleRestriction() { return this.json.vehicleRestriction; }
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const object = new VehicleRestriction();
        object.json = json;
        return object;
    }
}
class CommonCapturedIdFields {
    get firstName() { return this.json.firstName; }
    get lastName() { return this.json.lastName; }
    get fullName() { return this.json.fullName; }
    get sex() { return this.json.sex; }
    get dateOfBirth() {
        return DateResult.fromJSON(this.json.dateOfBirth);
    }
    get nationality() { return this.json.nationality; }
    get address() { return this.json.address; }
    get documentType() { return this.json.documentType; }
    get documentNumber() { return this.json.documentNumber; }
    get issuingCountry() { return this.json.issuingCountry; }
    get issuingCountryIso() { return this.json.issuingCountryIso; }
    get dateOfExpiry() {
        return DateResult.fromJSON(this.json.dateOfExpiry);
    }
    get dateOfIssue() {
        return DateResult.fromJSON(this.json.dateOfIssue);
    }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        const object = new CommonCapturedIdFields();
        object.json = json;
        return object;
    }
}
class CapturedId {
    get firstName() { return this.commonCapturedFields.firstName; }
    get lastName() { return this.commonCapturedFields.lastName; }
    get fullName() { return this.commonCapturedFields.fullName; }
    get sex() { return this.commonCapturedFields.sex; }
    get dateOfBirth() {
        return DateResult.fromJSON(this.commonCapturedFields.dateOfBirth);
    }
    get nationality() { return this.commonCapturedFields.nationality; }
    get address() { return this.commonCapturedFields.address; }
    get documentType() { return this.commonCapturedFields.documentType; }
    get issuingCountryIso() { return this.commonCapturedFields.issuingCountryIso; }
    get issuingCountry() { return this.commonCapturedFields.issuingCountry; }
    get documentNumber() { return this.commonCapturedFields.documentNumber; }
    get dateOfExpiry() {
        return DateResult.fromJSON(this.commonCapturedFields.dateOfExpiry);
    }
    get dateOfIssue() {
        return DateResult.fromJSON(this.commonCapturedFields.dateOfIssue);
    }
    get aamvaBarcodeResult() {
        if (this._aamvaBarcodeResult == null && this.json.aamvaBarcodeResult != null) {
            this._aamvaBarcodeResult = AAMVABarcodeResult.
                fromJSON(this.json.aamvaBarcodeResult);
        }
        return this._aamvaBarcodeResult;
    }
    get argentinaIdBarcodeResult() {
        if (this._argentinaIdBarcodeResult == null && this.json.argentinaIdBarcodeResult != null) {
            this._argentinaIdBarcodeResult = ArgentinaIdBarcodeResult.
                fromJSON(this.json.argentinaIdBarcodeResult);
        }
        return this._argentinaIdBarcodeResult;
    }
    get colombiaIdBarcodeResult() {
        if (this._colombiaIdBarcodeResult == null && this.json.colombiaIdBarcodeResult != null) {
            this._colombiaIdBarcodeResult = ColombiaIdBarcodeResult.
                fromJSON(this.json.colombiaIdBarcodeResult);
        }
        return this._colombiaIdBarcodeResult;
    }
    get mrzResult() {
        if (this._mrzResult == null && this.json.mrzResult != null) {
            this._mrzResult = MRZResult.fromJSON(this.json.mrzResult);
        }
        return this._mrzResult;
    }
    get southAfricaIdBarcodeResult() {
        if (this._southAfricaIdBarcodeResult == null && this.json.southAfricaIdBarcodeResult != null) {
            this._southAfricaIdBarcodeResult = SouthAfricaIdBarcodeResult.
                fromJSON(this.json.southAfricaIdBarcodeResult);
        }
        return this._southAfricaIdBarcodeResult;
    }
    get southAfricaDlBarcodeResult() {
        if (this._southAfricaDlBarcodeResult == null && this.json.southAfricaDlBarcodeResult != null) {
            this._southAfricaDlBarcodeResult = SouthAfricaDlBarcodeResult.
                fromJSON(this.json.southAfricaDlBarcodeResult);
        }
        return this._southAfricaDlBarcodeResult;
    }
    get usUniformedServicesBarcodeResult() {
        if (this._usUniformedServicesBarcodeResult == null && this.json.usUniformedServicesBarcodeResult != null) {
            const fromJSON = USUniformedServicesBarcodeResult.fromJSON;
            this._usUniformedServicesBarcodeResult = fromJSON(this.json.usUniformedServicesBarcodeResult);
        }
        return this._usUniformedServicesBarcodeResult;
    }
    get vizResult() {
        if (this._vizResult == null && this.json.vizResult != null) {
            this._vizResult = VIZResult.fromJSON(this.json.vizResult);
        }
        return this._vizResult;
    }
    static fromJSON(json) {
        const result = new CapturedId();
        result.json = json;
        if (json.aamvaBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.aamvaBarcodeResult);
        }
        if (json.argentinaIdBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.argentinaIdBarcodeResult);
        }
        if (json.colombiaIdBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.colombiaIdBarcodeResult);
        }
        if (json.mrzResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.mrzResult);
        }
        if (json.southAfricaIdBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.southAfricaIdBarcodeResult);
        }
        if (json.southAfricaDlBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.southAfricaDlBarcodeResult);
        }
        if (json.usUniformedServicesBarcodeResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.usUniformedServicesBarcodeResult);
        }
        if (json.vizResult) {
            result.commonCapturedFields = CommonCapturedIdFields.fromJSON(json.vizResult);
        }
        return result;
    }
    idImageOfType(type) {
        if (this.json.imageInfo === null) {
            return null;
        }
        return this.json.imageInfo[type];
    }
}
class AAMVABarcodeResult {
    get aamvaVersion() { return this.json.aamvaVersion; }
    get aliasFamilyName() { return this.json.aliasFamilyName; }
    get aliasGivenName() { return this.json.aliasGivenName; }
    get aliasSuffixName() { return this.json.aliasSuffixName; }
    get driverNamePrefix() { return this.json.driverNamePrefix; }
    get driverNameSuffix() { return this.json.driverNameSuffix; }
    get endorsementsCode() { return this.json.endorsementsCode; }
    get eyeColor() { return this.json.eyeColor; }
    get firstNameTruncation() { return this.json.firstNameTruncation; }
    get hairColor() { return this.json.hairColor; }
    get heightCm() { return this.json.heightCm; }
    get heightInch() { return this.json.heightInch; }
    get iIN() { return this.json.iin; }
    get issuingJurisdiction() { return this.json.issuingJurisdiction; }
    get issuingJurisdictionIso() { return this.json.issuingJurisdictionIso; }
    get jurisdictionVersion() { return this.json.jurisdictionVersion; }
    get lastNameTruncation() { return this.json.lastNameTruncation; }
    get middleName() { return this.json.middleName; }
    get middleNameTruncation() { return this.json.middleNameTruncation; }
    get placeOfBirth() { return this.json.placeOfBirth; }
    get race() { return this.json.race; }
    get restrictionsCode() { return this.json.restrictionsCode; }
    get vehicleClass() { return this.json.vehicleClass; }
    get weightKg() { return this.json.weightKg; }
    get weightLbs() { return this.json.weightLbs; }
    get cardRevisionDate() {
        return DateResult.fromJSON(this.json.cardRevisionDate);
    }
    get documentDiscriminatorNumber() { return this.json.documentDiscriminatorNumber; }
    get barcodeDataElements() { return this.json.barcodeDataElements; }
    static fromJSON(json) {
        const result = new AAMVABarcodeResult();
        result.json = json;
        return result;
    }
}
class MRZResult {
    get documentCode() { return this.json.documentCode; }
    get namesAreTruncated() { return this.json.namesAreTruncated; }
    get optional() { return this.json.optional; }
    get optional1() { return this.json.optional1; }
    get capturedMrz() { return this.json.capturedMrz; }
    static fromJSON(json) {
        const result = new MRZResult();
        result.json = json;
        return result;
    }
}
class USUniformedServicesBarcodeResult {
    get bloodType() { return this.json.bloodType; }
    get branchOfService() { return this.json.branchOfService; }
    get champusEffectiveDate() {
        return DateResult.fromJSON(this.json.champusEffectiveDate);
    }
    get champusExpiryDate() {
        return DateResult.fromJSON(this.json.champusExpiryDate);
    }
    get civilianHealthCareFlagCode() { return this.json.civilianHealthCareFlagCode; }
    get civilianHealthCareFlagDescription() { return this.json.civilianHealthCareFlagDescription; }
    get commissaryFlagCode() { return this.json.commissaryFlagCode; }
    get commissaryFlagDescription() { return this.json.commissaryFlagDescription; }
    get deersDependentSuffixCode() { return this.json.deersDependentSuffixCode; }
    get deersDependentSuffixDescription() { return this.json.deersDependentSuffixDescription; }
    get directCareFlagCode() { return this.json.directCareFlagCode; }
    get directCareFlagDescription() { return this.json.directCareFlagDescription; }
    get exchangeFlagCode() { return this.json.exchangeFlagCode; }
    get exchangeFlagDescription() { return this.json.exchangeFlagDescription; }
    get eyeColor() { return this.json.eyeColor; }
    get familySequenceNumber() { return this.json.familySequenceNumber; }
    get formNumber() { return this.json.formNumber; }
    get genevaConventionCategory() { return this.json.genevaConventionCategory; }
    get hairColor() { return this.json.hairColor; }
    get height() { return this.json.height; }
    get jpegData() { return this.json.jpegData; }
    get mwrFlagCode() { return this.json.mwrFlagCode; }
    get mwrFlagDescription() { return this.json.mwrFlagDescription; }
    get payGrade() { return this.json.payGrade; }
    get personDesignatorDocument() { return this.json.personDesignatorDocument; }
    get rank() { return this.json.rank; }
    get relationshipCode() { return this.json.relationshipCode; }
    get relationshipDescription() { return this.json.relationshipDescription; }
    get securityCode() { return this.json.securityCode; }
    get serviceCode() { return this.json.serviceCode; }
    get sponsorFlag() { return this.json.sponsorFlag; }
    get sponsorName() { return this.json.sponsorName; }
    get sponsorPersonDesignatorIdentifier() {
        return this.json.sponsorPersonDesignatorIdentifier;
    }
    get statusCode() { return this.json.statusCode; }
    get statusCodeDescription() { return this.json.statusCodeDescription; }
    get version() { return this.json.version; }
    get weight() { return this.json.weight; }
    static fromJSON(json) {
        const result = new USUniformedServicesBarcodeResult();
        result.json = json;
        return result;
    }
}
class VIZResult {
    get additionalAddressInformation() { return this.json.additionalAddressInformation; }
    get additionalNameInformation() { return this.json.additionalNameInformation; }
    get documentAdditionalNumber() { return this.json.documentAdditionalNumber; }
    get employer() { return this.json.employer; }
    get issuingAuthority() { return this.json.issuingAuthority; }
    get issuingJurisdiction() { return this.json.issuingJurisdiction; }
    get issuingJurisdictionIso() { return this.json.issuingJurisdictionIso; }
    get maritalStatus() { return this.json.maritalStatus; }
    get personalIdNumber() { return this.json.personalIdNumber; }
    get placeOfBirth() { return this.json.placeOfBirth; }
    get profession() { return this.json.profession; }
    get race() { return this.json.race; }
    get religion() { return this.json.religion; }
    get residentialStatus() { return this.json.residentialStatus; }
    get capturedSides() { return this.json.capturedSides; }
    get isBackSideCaptureSupported() { return this.json.isBackSideCaptureSupported; }
    static fromJSON(json) {
        const result = new VIZResult();
        result.json = json;
        return result;
    }
}
class ArgentinaIdBarcodeResult {
    get personalIdNumber() { return this.json.personalIdNumber; }
    get documentCopy() { return this.json.documentCopy; }
    static fromJSON(json) {
        const result = new ArgentinaIdBarcodeResult();
        result.json = json;
        return result;
    }
}
class ColombiaIdBarcodeResult {
    get bloodType() { return this.json.bloodType; }
    static fromJSON(json) {
        const result = new ColombiaIdBarcodeResult();
        result.json = json;
        return result;
    }
}
class SouthAfricaIdBarcodeResult {
    get countryOfBirth() { return this.json.countryOfBirth; }
    get countryOfBirthIso() { return this.json.countryOfBirthIso; }
    get citizenshipStatus() { return this.json.citizenshipStatus; }
    get personalIdNumber() { return this.json.personalIdNumber; }
    static fromJSON(json) {
        const result = new SouthAfricaIdBarcodeResult();
        result.json = json;
        return result;
    }
}
class SouthAfricaDlBarcodeResult {
    get version() { return this.json.version; }
    get licenseCountryOfIssue() { return this.json.licenseCountryOfIssue; }
    get personalIdNumber() { return this.json.personalIdNumber; }
    get personalIdNumberType() { return this.json.personalIdNumberType; }
    get documentCopy() { return this.json.documentCopy; }
    get driverRestrictionCodes() { return this.json.driverRestrictionCodes; }
    get professionalDrivingPermit() {
        return ProfessionalDrivingPermit
            .fromJSON(this.json.professionalDrivingPermit);
    }
    get vehicleRestrictions() {
        return this.json.vehicleRestrictions.map(json => VehicleRestriction.fromJSON(json));
    }
    static fromJSON(json) {
        const result = new SouthAfricaDlBarcodeResult();
        result.json = json;
        return result;
    }
}
class LocalizedOnlyId {
    get location() {
        return this._location;
    }
    static fromJSON(json) {
        const result = new LocalizedOnlyId();
        result._location = Common_Quadrilateral.fromJSON(json.location);
        return result;
    }
}
class RejectedId {
    get location() {
        return this._location;
    }
    static fromJSON(json) {
        const result = new RejectedId();
        result._location = Common_Quadrilateral.fromJSON(json.location);
        return result;
    }
}
class StringComparisonCheck {
    get vizValue() { return this.json.vizValue; }
    get aamvaBarcodeValue() { return this.json.aamvaBarcodeValue; }
    get checkResult() { return this.json.checkResult; }
    get resultDescription() { return this.json.resultDescription; }
    static fromJSON(json) {
        const result = new StringComparisonCheck();
        result.json = json;
        return result;
    }
}
class DateComparisonCheck {
    get vizValue() {
        return DateResult.fromJSON(this.json.vizValue);
    }
    get aamvaBarcodeValue() {
        return DateResult.fromJSON(this.json.aamvaBarcodeValue);
    }
    get checkResult() { return this.json.checkResult; }
    get resultDescription() { return this.json.resultDescription; }
    static fromJSON(json) {
        const result = new DateComparisonCheck();
        result.json = json;
        return result;
    }
}
class AamvaVizBarcodeComparisonResult {
    get checksPassed() { return this.json.checksPassed; }
    get resultDescription() { return this.json.resultDescription; }
    get issuingCountryIsoMatch() {
        return StringComparisonCheck
            .fromJSON(this.json.issuingCountryIsoMatch);
    }
    get issuingJurisdictionIsoMatch() {
        return StringComparisonCheck
            .fromJSON(this.json.issuingJurisdictionIsoMatch);
    }
    get documentNumbersMatch() {
        return StringComparisonCheck
            .fromJSON(this.json.documentNumbersMatch);
    }
    get fullNamesMatch() {
        return StringComparisonCheck
            .fromJSON(this.json.fullNamesMatch);
    }
    get datesOfBirthMatch() {
        return DateComparisonCheck
            .fromJSON(this.json.datesOfBirthMatch);
    }
    get datesOfExpiryMatch() {
        return DateComparisonCheck
            .fromJSON(this.json.datesOfExpiryMatch);
    }
    get datesOfIssueMatch() {
        return DateComparisonCheck
            .fromJSON(this.json.datesOfIssueMatch);
    }
    static fromJSON(json) {
        const result = new AamvaVizBarcodeComparisonResult();
        result.json = json;
        return result;
    }
}
class AamvaVizBarcodeComparisonVerifier {
    constructor() {
        this.proxy = new IdCaptureProxy();
    }
    static create() {
        return new AamvaVizBarcodeComparisonVerifier();
    }
    verify(capturedId) {
        return new Promise((resolve, reject) => {
            this.proxy
                .verifyCapturedId(JSON.stringify(capturedId))
                .then((json) => {
                if (!json) {
                    resolve();
                }
                else {
                    resolve(AamvaVizBarcodeComparisonResult
                        .fromJSON(JSON.parse(json.result)));
                }
            }, reject);
        });
    }
}
CapturedId_decorate([
    Serializeable_ignoreFromSerialization
], AamvaVizBarcodeComparisonVerifier.prototype, "proxy", void 0);
//# sourceMappingURL=CapturedId.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/ts/Enums.js
var DocumentType;
(function (DocumentType) {
    DocumentType["None"] = "none";
    DocumentType["ConsularId"] = "consularId";
    DocumentType["DrivingLicense"] = "drivingLicense";
    DocumentType["DrivingLicensePublicServicesCard"] = "drivingLicensePublicServicesCard";
    DocumentType["EmploymentPass"] = "employmentPass";
    DocumentType["FinCard"] = "finCard";
    DocumentType["Id"] = "id";
    DocumentType["MultipurposeId"] = "multipurposeId";
    DocumentType["MyKad"] = "myKad";
    DocumentType["MyKid"] = "myKid";
    DocumentType["MyPR"] = "myPr";
    DocumentType["MyTentera"] = "myTentera";
    DocumentType["PanCard"] = "panCard";
    DocumentType["ProfessionalId"] = "professionalId";
    DocumentType["PublicServicesCard"] = "publicServicesCard";
    DocumentType["ResidencePermit"] = "residencePermit";
    DocumentType["ResidentId"] = "residentId";
    DocumentType["TemporaryResidencePermit"] = "temporaryResidencePermit";
    DocumentType["VoterId"] = "voterId";
    DocumentType["WorkPermit"] = "workPermit";
    DocumentType["IKad"] = "iKad";
    DocumentType["MilitaryId"] = "militaryId";
    DocumentType["MyKas"] = "myKas";
    DocumentType["SocialSecurityCard"] = "socialSecurityCard";
    DocumentType["HealthInsuranceCard"] = "healthInsuranceCard";
    DocumentType["Passport"] = "passport";
    DocumentType["DiplomaticPassport"] = "diplomaticPassport";
    DocumentType["ServicePassport"] = "servicePassport";
    DocumentType["TemporaryPassport"] = "temporaryPassport";
    DocumentType["Visa"] = "visa";
    DocumentType["SPass"] = "sPass";
    DocumentType["AddressCard"] = "addressCard";
    DocumentType["AlienId"] = "alienId";
    DocumentType["AlienPassport"] = "alienPassport";
    DocumentType["GreenCard"] = "greenCard";
    DocumentType["MinorsId"] = "minorsId";
    DocumentType["PostalId"] = "postalId";
    DocumentType["ProfessionalDl"] = "professionalDl";
    DocumentType["TaxId"] = "taxId";
    DocumentType["WeaponPermit"] = "weaponPermit";
    DocumentType["BorderCrossingCard"] = "borderCrossingCard";
    DocumentType["DriverCard"] = "driverCard";
    DocumentType["GlobalEntryCard"] = "globalEntryCard";
    DocumentType["MyPolis"] = "myPolis";
    DocumentType["NexusCard"] = "nexusCard";
    DocumentType["PassportCard"] = "passportCard";
    DocumentType["ProofOfAgeCard"] = "proofOfAgeCard";
    DocumentType["RefugeeId"] = "refugeeId";
    DocumentType["TribalId"] = "tribalId";
    DocumentType["VeteranId"] = "veteranId";
    DocumentType["CitizenshipCertificate"] = "citizenshipCertificate";
    DocumentType["MyNumberCard"] = "myNumberCard";
})(DocumentType || (DocumentType = {}));
var IdDocumentType;
(function (IdDocumentType) {
    IdDocumentType["AAMVABarcode"] = "aamvaBarcode";
    IdDocumentType["ArgentinaIdBarcode"] = "argentinaIdBarcode";
    IdDocumentType["ColombiaIdBarcode"] = "colombiaIdBarcode";
    IdDocumentType["DLVIZ"] = "dlViz";
    IdDocumentType["IdCardMRZ"] = "idCardMrz";
    IdDocumentType["IdCardVIZ"] = "idCardViz";
    IdDocumentType["PassportMRZ"] = "passportMrz";
    IdDocumentType["SouthAfricaDlBarcode"] = "southAfricaDlBarcode";
    IdDocumentType["SouthAfricaIdBarcode"] = "southAfricaIdBarcode";
    IdDocumentType["SwissDLMRZ"] = "swissDlMrz";
    IdDocumentType["USUSIdBarcode"] = "usUsIdBarcode";
    IdDocumentType["VisaMRZ"] = "visaMrz";
})(IdDocumentType || (IdDocumentType = {}));
var CapturedSides;
(function (CapturedSides) {
    CapturedSides["FrontOnly"] = "frontOnly";
    CapturedSides["FrontAndBack"] = "frontAndBack";
})(CapturedSides || (CapturedSides = {}));
var IdImageType;
(function (IdImageType) {
    IdImageType["Face"] = "face";
    IdImageType["IdFront"] = "idFront";
    IdImageType["IdBack"] = "idBack";
})(IdImageType || (IdImageType = {}));
var IdLayoutStyle;
(function (IdLayoutStyle) {
    IdLayoutStyle["Rounded"] = "rounded";
    IdLayoutStyle["Square"] = "square";
})(IdLayoutStyle || (IdLayoutStyle = {}));
var IdLayoutLineStyle;
(function (IdLayoutLineStyle) {
    IdLayoutLineStyle["Light"] = "light";
    IdLayoutLineStyle["Bold"] = "bold";
})(IdLayoutLineStyle || (IdLayoutLineStyle = {}));
var ComparisonCheckResult;
(function (ComparisonCheckResult) {
    ComparisonCheckResult["Passed"] = "passed";
    ComparisonCheckResult["Skipped"] = "skipped";
    ComparisonCheckResult["Failed"] = "failed";
})(ComparisonCheckResult || (ComparisonCheckResult = {}));
//# sourceMappingURL=Enums.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-core/src/ts/Viewfinder.js
var ts_Viewfinder_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class Viewfinder_Brush extends ts_Serializeable_DefaultSerializeable {
    constructor(fillColor = Capacitor_Capacitor_Capacitor.defaults.Brush.fillColor, strokeColor = Capacitor_Capacitor_Capacitor.defaults.Brush.strokeColor, strokeWidth = Capacitor_Capacitor_Capacitor.defaults.Brush.strokeWidth) {
        super();
        this.fill = { color: fillColor };
        this.stroke = { color: strokeColor, width: strokeWidth };
    }
    static get transparent() {
        const transparentBlack = Common_Color.fromRGBA(255, 255, 255, 0);
        return new Viewfinder_Brush(transparentBlack, transparentBlack, 0);
    }
    get fillColor() {
        return this.fill.color;
    }
    get strokeColor() {
        return this.stroke.color;
    }
    get strokeWidth() {
        return this.stroke.width;
    }
}
// tslint:disable-next-line:variable-name
const Viewfinder_NoViewfinder = { type: 'none' };
class Viewfinder_LaserlineViewfinder extends ts_Serializeable_DefaultSerializeable {
    constructor(style) {
        super();
        this.type = 'laserline';
        const viewfinderStyle = style || Capacitor_Capacitor_Capacitor.defaults.LaserlineViewfinder.defaultStyle;
        this._style = Capacitor_Capacitor_Capacitor.defaults.LaserlineViewfinder.styles[viewfinderStyle].style;
        this.width = Capacitor_Capacitor_Capacitor.defaults.LaserlineViewfinder.styles[viewfinderStyle].width;
        this.enabledColor = Capacitor_Capacitor_Capacitor.defaults.LaserlineViewfinder.styles[viewfinderStyle].enabledColor;
        this.disabledColor = Capacitor_Capacitor_Capacitor.defaults.LaserlineViewfinder.styles[viewfinderStyle].disabledColor;
    }
    get style() {
        return this._style;
    }
}
ts_Viewfinder_decorate([
    Serializeable_nameForSerialization('style')
], Viewfinder_LaserlineViewfinder.prototype, "_style", void 0);
class Viewfinder_RectangularViewfinder extends ts_Serializeable_DefaultSerializeable {
    constructor(style, lineStyle) {
        super();
        this.type = 'rectangular';
        const viewfinderStyle = style || Capacitor_Capacitor_Capacitor.defaults.RectangularViewfinder.defaultStyle;
        this._style = Capacitor_Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].style;
        this._lineStyle = Capacitor_Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].lineStyle;
        this._dimming = parseFloat(Capacitor_Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].dimming);
        this._disabledDimming =
            parseFloat(Capacitor_Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].disabledDimming);
        this._animation = Capacitor_Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].animation;
        this.color = Capacitor_Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].color;
        this._sizeWithUnitAndAspect = Capacitor_Capacitor_Capacitor.defaults.RectangularViewfinder.styles[viewfinderStyle].size;
        if (lineStyle !== undefined) {
            this._lineStyle = lineStyle;
        }
    }
    get sizeWithUnitAndAspect() {
        return this._sizeWithUnitAndAspect;
    }
    get style() {
        return this._style;
    }
    get lineStyle() {
        return this._lineStyle;
    }
    get dimming() {
        return this._dimming;
    }
    set dimming(value) {
        this._dimming = value;
    }
    get disabledDimming() {
        return this._disabledDimming;
    }
    set disabledDimming(value) {
        this._disabledDimming = value;
    }
    get animation() {
        return this._animation;
    }
    set animation(animation) {
        this._animation = animation;
    }
    setSize(size) {
        this._sizeWithUnitAndAspect = Common_SizeWithUnitAndAspect.sizeWithWidthAndHeight(size);
    }
    setWidthAndAspectRatio(width, heightToWidthAspectRatio) {
        this._sizeWithUnitAndAspect = Common_SizeWithUnitAndAspect.sizeWithWidthAndAspectRatio(width, heightToWidthAspectRatio);
    }
    setHeightAndAspectRatio(height, widthToHeightAspectRatio) {
        this._sizeWithUnitAndAspect = Common_SizeWithUnitAndAspect.sizeWithHeightAndAspectRatio(height, widthToHeightAspectRatio);
    }
    setShorterDimensionAndAspectRatio(fraction, aspectRatio) {
        this._sizeWithUnitAndAspect = Common_SizeWithUnitAndAspect.sizeWithShorterDimensionAndAspectRatio(new Common_NumberWithUnit(fraction, Common_MeasureUnit.Fraction), aspectRatio);
    }
}
ts_Viewfinder_decorate([
    Serializeable_nameForSerialization('style')
], Viewfinder_RectangularViewfinder.prototype, "_style", void 0);
ts_Viewfinder_decorate([
    Serializeable_nameForSerialization('lineStyle')
], Viewfinder_RectangularViewfinder.prototype, "_lineStyle", void 0);
ts_Viewfinder_decorate([
    Serializeable_nameForSerialization('dimming')
], Viewfinder_RectangularViewfinder.prototype, "_dimming", void 0);
ts_Viewfinder_decorate([
    Serializeable_nameForSerialization('disabledDimming')
], Viewfinder_RectangularViewfinder.prototype, "_disabledDimming", void 0);
ts_Viewfinder_decorate([
    Serializeable_nameForSerialization('animation'),
    Serializeable_ignoreFromSerialization
], Viewfinder_RectangularViewfinder.prototype, "_animation", void 0);
ts_Viewfinder_decorate([
    Serializeable_nameForSerialization('size')
], Viewfinder_RectangularViewfinder.prototype, "_sizeWithUnitAndAspect", void 0);
class Viewfinder_AimerViewfinder extends (/* unused pure expression or super */ null && (DefaultSerializeable)) {
    constructor() {
        super();
        this.type = 'aimer';
        this.frameColor = Capacitor.defaults.AimerViewfinder.frameColor;
        this.dotColor = Capacitor.defaults.AimerViewfinder.dotColor;
    }
}
//# sourceMappingURL=Viewfinder.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/ts/IdCapture+Related.js
var IdCapture_Related_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class IdCaptureError {
    get type() {
        return this._type;
    }
    get message() {
        return this._message;
    }
    static fromJSON(json) {
        const error = new IdCaptureError();
        error._type = json.type;
        error._message = json.message;
        return error;
    }
}
class IdCaptureSession {
    get newlyCapturedId() {
        return this._newlyCapturedId;
    }
    get frameSequenceId() {
        return this._frameSequenceId;
    }
    get localizedOnlyId() {
        return this._localizedOnlyId;
    }
    get newlyRejectedId() {
        return this._newlyRejectedId;
    }
    static fromJSON(json) {
        const session = new IdCaptureSession();
        if (json.newlyCapturedId) {
            session._newlyCapturedId = CapturedId.fromJSON(json.newlyCapturedId);
        }
        if (json.localizedOnlyId) {
            session._localizedOnlyId = LocalizedOnlyId.fromJSON(json.localizedOnlyId);
        }
        if (json.newlyRejectedId) {
            session._newlyRejectedId = LocalizedOnlyId.fromJSON(json.newlyRejectedId);
        }
        session._frameSequenceId = json.frameSequenceId;
        session._error = json.error ? IdCaptureError.fromJSON(json.error) : null;
        return session;
    }
}
class IdCaptureOverlay extends ts_Serializeable_DefaultSerializeable {
    constructor() {
        super();
        this.type = 'idCapture';
        this._idLayoutStyle = IdLayoutStyle.Rounded;
        this._defaultCapturedBrush = new Viewfinder_Brush(ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor, ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor, ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth);
        this._defaultLocalizedBrush = new Viewfinder_Brush(ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor, ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor, ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth);
        this._defaultRejectedBrush = new Viewfinder_Brush(ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor, ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor, ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth);
        this._capturedBrush = this._defaultCapturedBrush;
        this._localizedBrush = this._defaultLocalizedBrush;
        this._rejectedBrush = this._defaultRejectedBrush;
        this._idLayoutLineStyle = IdLayoutLineStyle.Light;
    }
    static withIdCapture(idCapture) {
        return IdCaptureOverlay.withIdCaptureForView(idCapture, null);
    }
    static withIdCaptureForView(idCapture, view) {
        const overlay = new IdCaptureOverlay();
        overlay.idCapture = idCapture;
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
    get idLayoutStyle() {
        return this._idLayoutStyle;
    }
    set idLayoutStyle(style) {
        this._idLayoutStyle = style;
        this.idCapture.didChange();
    }
    get idLayoutLineStyle() {
        return this._idLayoutLineStyle;
    }
    set idLayoutLineStyle(lineStyle) {
        this._idLayoutLineStyle = lineStyle;
        this.idCapture.didChange();
    }
    get capturedBrush() {
        return this._capturedBrush;
    }
    set capturedBrush(brush) {
        this._capturedBrush = brush;
        this.idCapture.didChange();
    }
    get localizedBrush() {
        return this._localizedBrush;
    }
    set localizedBrush(brush) {
        this._localizedBrush = brush;
        this.idCapture.didChange();
    }
    get rejectedBrush() {
        return this._rejectedBrush;
    }
    set rejectedBrush(brush) {
        this._rejectedBrush = brush;
        this.idCapture.didChange();
    }
    get defaultCapturedBrush() {
        return this._defaultCapturedBrush;
    }
    get defaultLocalizedBrush() {
        return this._defaultLocalizedBrush;
    }
    get defaultRejectedBrush() {
        return this._defaultRejectedBrush;
    }
}
IdCapture_Related_decorate([
    Serializeable_ignoreFromSerialization
], IdCaptureOverlay.prototype, "idCapture", void 0);
IdCapture_Related_decorate([
    Serializeable_nameForSerialization('idLayoutStyle')
], IdCaptureOverlay.prototype, "_idLayoutStyle", void 0);
IdCapture_Related_decorate([
    Serializeable_nameForSerialization('capturedBrush')
], IdCaptureOverlay.prototype, "_capturedBrush", void 0);
IdCapture_Related_decorate([
    Serializeable_nameForSerialization('localizedBrush')
], IdCaptureOverlay.prototype, "_localizedBrush", void 0);
IdCapture_Related_decorate([
    Serializeable_nameForSerialization('rejectedBrush')
], IdCaptureOverlay.prototype, "_rejectedBrush", void 0);
IdCapture_Related_decorate([
    Serializeable_nameForSerialization('idLayoutLineStyle')
], IdCaptureOverlay.prototype, "_idLayoutLineStyle", void 0);
//# sourceMappingURL=IdCapture+Related.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/ts/Capacitor/IdCaptureListenerProxy.js



var IdCaptureListenerEvent;
(function (IdCaptureListenerEvent) {
    IdCaptureListenerEvent["DidCapture"] = "didCaptureInIdCapture";
    IdCaptureListenerEvent["DidLocalize"] = "didLocalizeInIdCapture";
    IdCaptureListenerEvent["DidReject"] = "didRejectInIdCapture";
    IdCaptureListenerEvent["DidFail"] = "didFailInIdCapture";
})(IdCaptureListenerEvent || (IdCaptureListenerEvent = {}));
class IdCaptureListenerProxy {
    static forIdCapture(idCapture) {
        const proxy = new IdCaptureListenerProxy();
        proxy.idCapture = idCapture;
        proxy.initialize();
        return proxy;
    }
    initialize() {
        this.subscribeListener();
    }
    subscribeListener() {
        _capacitor_core_dist_Plugins[ts_Capacitor_Capacitor_Capacitor.pluginName][Capacitor_Capacitor_CapacitorFunction.SubscribeIdCaptureListener]();
        _capacitor_core_dist_Plugins[ts_Capacitor_Capacitor_Capacitor.pluginName].addListener(IdCaptureListenerEvent.DidCapture, this.notifyListeners.bind(this));
        _capacitor_core_dist_Plugins[ts_Capacitor_Capacitor_Capacitor.pluginName].addListener(IdCaptureListenerEvent.DidFail, this.notifyListeners.bind(this));
        _capacitor_core_dist_Plugins[ts_Capacitor_Capacitor_Capacitor.pluginName].addListener(IdCaptureListenerEvent.DidLocalize, this.notifyListeners.bind(this));
        _capacitor_core_dist_Plugins[ts_Capacitor_Capacitor_Capacitor.pluginName].addListener(IdCaptureListenerEvent.DidReject, this.notifyListeners.bind(this));
    }
    notifyListeners(event) {
        const done = () => {
            this.idCapture.isInListenerCallback = false;
            _capacitor_core_dist_Plugins[ts_Capacitor_Capacitor_Capacitor.pluginName].finishCallback({
                result: {
                    enabled: this.idCapture.isEnabled,
                    finishCallbackID: event.name,
                },
            });
            return { enabled: this.idCapture.isEnabled };
        };
        this.idCapture.isInListenerCallback = true;
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return done();
        }
        this.idCapture.listeners.forEach((listener) => {
            switch (event.name) {
                case IdCaptureListenerEvent.DidCapture:
                    if (listener.didCaptureId) {
                        listener.didCaptureId(this.idCapture, IdCaptureSession.fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
                case IdCaptureListenerEvent.DidLocalize:
                    if (listener.didLocalizeId) {
                        listener.didLocalizeId(this.idCapture, IdCaptureSession.fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
                case IdCaptureListenerEvent.DidReject:
                    if (listener.didRejectId) {
                        listener.didRejectId(this.idCapture, IdCaptureSession.fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
                case IdCaptureListenerEvent.DidFail:
                    if (listener.didFailWithError) {
                        const session = IdCaptureSession.fromJSON(JSON.parse(event.argument.session));
                        listener.didFailWithError(this.idCapture, session._error, session);
                    }
            }
        });
        return done();
    }
}
IdCaptureListenerProxy.cordovaExec = ts_Capacitor_Capacitor_Capacitor.exec;
//# sourceMappingURL=IdCaptureListenerProxy.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/ts/IdCapture.js
var IdCapture_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class IdCapture extends ts_Serializeable_DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = 'idCapture';
        this._isEnabled = true;
        this._context = null;
        this.listeners = [];
        this.listenerProxy = null;
        this.isInListenerCallback = false;
    }
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        if (!this.isInListenerCallback) {
            // If we're "in" a listener callback, we don't want to deserialize the context to update the enabled state,
            // but rather pass that back to be applied in the native callback.
            this.didChange();
        }
    }
    get context() {
        return this._context;
    }
    static get recommendedCameraSettings() {
        return new Camera_Related_CameraSettings(ts_Capacitor_Capacitor_Capacitor.defaults.IdCapture.RecommendedCameraSettings);
    }
    static forContext(context, settings) {
        const mode = new IdCapture();
        mode.settings = settings;
        if (context) {
            context.addMode(mode);
        }
        mode.listenerProxy = IdCaptureListenerProxy.forIdCapture(mode);
        mode.proxy = IdCaptureProxy.forIdCapture(mode);
        return mode;
    }
    addListener(listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    reset() {
        return this.proxy.reset();
    }
    didChange() {
        if (this.context) {
            return this.context.update();
        }
        else {
            return Promise.resolve();
        }
    }
}
IdCapture_decorate([
    Serializeable_nameForSerialization('enabled')
], IdCapture.prototype, "_isEnabled", void 0);
IdCapture_decorate([
    Serializeable_ignoreFromSerialization
], IdCapture.prototype, "_context", void 0);
IdCapture_decorate([
    Serializeable_ignoreFromSerialization
], IdCapture.prototype, "listeners", void 0);
IdCapture_decorate([
    Serializeable_ignoreFromSerialization
], IdCapture.prototype, "listenerProxy", void 0);
IdCapture_decorate([
    Serializeable_ignoreFromSerialization
], IdCapture.prototype, "proxy", void 0);
IdCapture_decorate([
    Serializeable_ignoreFromSerialization
], IdCapture.prototype, "isInListenerCallback", void 0);
//# sourceMappingURL=IdCapture.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/ts/IdCaptureSettings.js


class IdCaptureSettings extends ts_Serializeable_DefaultSerializeable {
    constructor() {
        super();
        this.properties = {};
        this.imageToResult = {};
        this.supportedDocuments = [];
        this.capturedSides = CapturedSides.FrontOnly;
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
    setShouldPassImageTypeToResult(type, shouldPass) {
        this.imageToResult[type] = shouldPass;
    }
    getShouldPassImageTypeToResult(type) {
        return this.imageToResult[type] || false;
    }
}
//# sourceMappingURL=IdCaptureSettings.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/web.js







class ScanditIdPlugin extends core_dist_WebPlugin {
    constructor() {
        super({
            name: 'ScanditIdPlugin',
            platforms: ['android', 'ios'],
        });
    }
    async initialize() {
        const api = {
            IdCapture: IdCapture,
            IdCaptureOverlay: IdCaptureOverlay,
            IdCaptureSession: IdCaptureSession,
            IdCaptureSettings: IdCaptureSettings,
            DocumentType: DocumentType,
            IdImageType: IdImageType,
            IdDocumentType: IdDocumentType,
            CapturedSides: CapturedSides,
            IdLayoutStyle: IdLayoutStyle,
            IdLayoutLineStyle: IdLayoutLineStyle,
            ComparisonCheckResult: ComparisonCheckResult,
            AAMVABarcodeResult: AAMVABarcodeResult,
            AamvaVizBarcodeComparisonResult: AamvaVizBarcodeComparisonResult,
            AamvaVizBarcodeComparisonVerifier: AamvaVizBarcodeComparisonVerifier,
            CapturedId: CapturedId,
            RejectedId: RejectedId,
            LocalizedOnlyId: LocalizedOnlyId,
            DateResult: DateResult,
            MRZResult: MRZResult,
            USUniformedServicesBarcodeResult: USUniformedServicesBarcodeResult,
            VIZResult: VIZResult,
            ArgentinaIdBarcodeResult: ArgentinaIdBarcodeResult,
            ColombiaIdBarcodeResult: ColombiaIdBarcodeResult,
            SouthAfricaDlBarcodeResult: SouthAfricaDlBarcodeResult,
            SouthAfricaIdBarcodeResult: SouthAfricaIdBarcodeResult,
        };
        return new Promise((resolve, reject) => Capacitor_Capacitor_getDefaults.then(() => {
            resolve(api);
        }, reject));
    }
}
const scanditId = new ScanditIdPlugin();

core_dist_registerWebPlugin(scanditId);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/scandit-capacitor-datacapture-id/dist/esm/scandit-capacitor-datacapture-id/src/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./www/js/app.js




const { ScanditCaptureCorePlugin: app_ScanditCaptureCorePlugin } = dist_Plugins;

async function runApp() {
    // Initialize the plugins.
    const Scandit = await app_ScanditCaptureCorePlugin.initializePlugins();

    // Create data capture context using your license key.
    const context = Scandit.DataCaptureContext.forLicenseKey('AQlh0ScbBfWsIjzCWEvsElk16WDBGZEY01LBW9ZSKTJ2LIcHaXEhDd1Xd/G3KLXhDhuJ/dZw93W1V+YaFV95EKpmyDX5dc4q6CB3FM19iDXEfF6crzCFfAIxkngzItO7HiF+1+Fy5xTKbAh+yH+UV69kuYxWdS8DaH/RULpnDQNUK+huIlHaBHlEC+n4VbsI70vZCepIb3nqTB18klL36yY2mWOMaGzyfk9tY4ZT4bUkMJdsVhzfgmYrc5xXbBCBom7tkXN2kEP+WFbzE3RCjFZwXs97CeTix25qHWxMZg/pYjZIFHXMhe87l4m1XbFHhHxZOudRllo+SBDWQURNuTFtwM8Ff1S6n1VYTzl+NUT3at6880bfikoPC8nbQEtFaX1pQlp53KoZSEB4IgWLUjgiabMtI5+BZWo4T0lZQkf7e8ARUFwycEdve6YGdlRC83yokSdp8qytTwIuJlq9u3B0B1Lke7el5zBJxPdaOlG2XFvtHmBv/KBqLXQXT0aigGcNj9J161ytTdRbQ2vOwyl/QC0KLhP49HQf2kaFCdam0XWn+m31GoIj9zWWIe5I85GNi0she4ZArrc/HkCGjjzN4C2yz5IMtd3AT1hPHaZ6FxW+KeNRYTd3vrx+UFlGIUMktIk5Dpikc9jAhFCbWmFkdOhqAqS2uc+dx+EU+Q1C4KmNxBFsuE3mWlEphvINUnIPg9L1zi24pkRD1SBQ78ibczD/sRWK5mFCNVaeQysUPsZEnC7ae6YL7IiYEzCcIQQ4t5BU9RnvD2ozmInJ1qBnlNgFTX/Td/biFK80Ipvk5EpZEPLyAijxsotJd5YuSBs0nMDMyRl4LnGpW7iOQ413zUCIaUKccxqmnFLU/PCKL82Je73ki0FxUUOMso88p/SWwIQjMpaaRtD7aUuBBb1qsaEo9d6oyR812+ULSgeLQr2fAr/jo533m5ij7Ja0bFhkR9soVBv7ZQR0grpXcetZeMAoY/76Ywjx3C9B7FEFikc266yl3zLt6ROXWgNrpE+/I0dAN4yCK9+qnayyfT0Lh90fHXIRp28lM4w1Q9U4k7xz746J94ebAq1+wj4Hi+yHJ9cE/uwFcDg3+wHK+OnMfrYg0TX5ewpgf/DuctNJuRYoSwUcN1ll0KZCGnVJghHjlyKbzDeYSTowL+wL9HHIp1ouSmNGrbiFs2eNt6TQlxQz0RY8/ORVlVpvOQbGEIA8BQl5');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    const camera = Scandit.Camera.default;
    context.setFrameSource(camera);

    // Use the recommended camera settings for the IdCapture mode.
    camera.applySettings(Scandit.IdCapture.recommendedCameraSettings);

    // The ID capturing process is configured through ID capture settings
    // and are then applied to the ID capture instance that manages id recognition.
    const settings = new Scandit.IdCaptureSettings();

    // We are interested in the front side of national Id Cards and passports using MRZ.
    settings.supportedDocuments = [
        Scandit.IdDocumentType.IdCardVIZ,
        Scandit.IdDocumentType.AAMVABarcode,
        Scandit.IdDocumentType.DLVIZ,
        Scandit.IdDocumentType.ArgentinaIdBarcode,
        Scandit.IdDocumentType.ColombiaIdBarcode,
        Scandit.IdDocumentType.SouthAfricaDlBarcode,
        Scandit.IdDocumentType.SouthAfricaIdBarcode,
    ]

    // To visualize the on-going id capturing process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = Scandit.DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('data-capture-view'));

    // Switch camera on to start streaming frames and enable the id capture mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera.switchToDesiredState(Scandit.FrameSourceState.On);

    // Create new id capture mode with the settings from above.
    window.idCapture = Scandit.IdCapture.forContext(context, settings);

    // Register a listener to get informed whenever a new id got recognized.
    window.idCapture.addListener({
        didCaptureId: (_, session) => {
            if (session.newlyCapturedId == null) {
                return
            }

            window.idCapture.isEnabled = false;

            if (session.newlyCapturedId.mrzResult != null) {
                window.showResult(window.descriptionForMrzResult(session.newlyCapturedId));
            } else if (session.newlyCapturedId.vizResult != null) {
                window.showResult(window.descriptionForVizResult(session.newlyCapturedId));
            } else if (session.newlyCapturedId.aamvaBarcodeResult != null) {
                window.showResult(window.descriptionForUsDriverLicenseBarcodeResult(session.newlyCapturedId));
            } else if (session.newlyCapturedId.usUniformedServicesBarcodeResult != null) {
                window.showResult(window.descriptionForUsUniformedServicesBarcodeResult(session.newlyCapturedId));
            } else {
                window.showResult(window.descriptionForCapturedId(session.newlyCapturedId));
            }
        },
        didFailWithError: (_, error, session) => {
            window.showResult(error.message);
        }
    });

    window.idCaptureOverlay = Scandit.IdCaptureOverlay.withIdCaptureForView(window.idCapture, view);
    window.idCaptureOverlay.idLayoutStyle = Scandit.IdLayoutStyle.Square;

    window.idCapture.isEnabled = true;
}

window.showResult = result => {
    const resultElement = document.createElement('div');
    resultElement.id = "result";
    resultElement.classList = "result";
    resultElement.innerHTML = `<p>${result}</p><button onclick="continueScanning()">OK</button>`;
    document.querySelector('#data-capture-view').appendChild(resultElement)
}

window.continueScanning = () => {
    document.querySelector('#result').parentElement.removeChild(document.querySelector('#result'))
    window.idCapture.isEnabled = true;
}

// === //

window.descriptionForMrzResult = (result) => {
    return `
  ${descriptionForCapturedId(result)}<br><br>
  Document Code: ${result.mrzResult.documentCode}<br>
  Names Are Truncated: ${result.mrzResult.namesAreTruncated ? "Yes" : "No"}<br>
  Optional: ${result.mrzResult.optional || "empty"}<br>
  Optional 1: ${result.mrzResult.optional1 || "empty"}<br>
  `
}

window.descriptionForVizResult = (result) => {
    return `
  ${descriptionForCapturedId(result)}<br><br>
  Additional Name Information: ${result.vizResult.additionalNameInformation || "empty"}<br>
  Additional Address Information: ${result.vizResult.additionalAddressInformation || "empty"}<br>
  Place of Birth: ${result.vizResult.placeOfBirth || "empty"}<br>
  Race: ${result.vizResult.race || "empty"}<br>
  Religion: ${result.vizResult.religion || "empty"}<br>
  Profession: ${result.vizResult.profession || "empty"}<br>
  Marital Status: ${result.vizResult.maritalStatus || "empty"}<br>
  Residential Status: ${result.vizResult.residentialStatus || "empty"}<br>
  Employer: ${result.vizResult.employer || "empty"}<br>
  Personal Id Number: ${result.vizResult.personalIdNumber || "empty"}<br>
  Document Additional Number: ${result.vizResult.documentAdditionalNumber || "empty"}<br>
  Issuing Jurisdiction: ${result.vizResult.issuingJurisdiction || "empty"}<br>
  Issuing Authority: ${result.vizResult.issuingAuthority || "empty"}<br>
  `
}

window.descriptionForUsDriverLicenseBarcodeResult = (result) => {
    return `
  ${descriptionForCapturedId(result)}<br><br>
  AAMVA Version: ${result.aamvaBarcodeResult.aamvaVersion}<br>
  Jurisdiction Version: ${result.aamvaBarcodeResult.jurisdictionVersion}<br>
  IIN: ${result.aamvaBarcodeResult.iIN}<br>
  Issuing Jurisdiction: ${result.aamvaBarcodeResult.issuingJurisdiction}<br>
  Issuing Jurisdiction ISO: ${result.aamvaBarcodeResult.issuingJurisdictionIso}<br>
  Eye Color: ${result.aamvaBarcodeResult.eyeColor || "empty"}<br>
  Hair Color: ${result.aamvaBarcodeResult.hairColor || "empty"}<br>
  Height Inch: ${result.aamvaBarcodeResult.heightInch || 0}<br>
  Height Cm: ${result.aamvaBarcodeResult.heightCm || 0}<br>
  Weight Lb: ${result.aamvaBarcodeResult.weightLbs || 0}<br>
  Weight Kg: ${result.aamvaBarcodeResult.weightKg || 0}<br>
  Place of Birth: ${result.aamvaBarcodeResult.placeOfBirth || "empty"}<br>
  Race: ${result.aamvaBarcodeResult.race || "empty"}<br>
  Document Discriminator Number: ${result.aamvaBarcodeResult.documentDiscriminatorNumber || "empty"}<br>
  Vehicle Class: ${result.aamvaBarcodeResult.vehicleClass || "empty"}<br>
  Restrictions Code: ${result.aamvaBarcodeResult.restrictionsCode || "empty"}<br>
  Endorsements Code: ${result.aamvaBarcodeResult.endorsementsCode || "empty"}<br>
  Card Revision Date: ${JSON.stringify(result.aamvaBarcodeResult.cardRevisionDate.date) || "empty"}<br>
  Middle Name: ${result.aamvaBarcodeResult.middleName || "empty"}<br>
  Driver Name Suffix: ${result.aamvaBarcodeResult.driverNameSuffix || "empty"}<br>
  Driver Name Prefix: ${result.aamvaBarcodeResult.driverNamePrefix || "empty"}<br>
  Last Name Truncation: ${result.aamvaBarcodeResult.lastNameTruncation || "empty"}<br>
  First Name Truncation: ${result.aamvaBarcodeResult.firstNameTruncation || "empty"}<br>
  Middle Name Truncation: ${result.aamvaBarcodeResult.middleNameTruncation || "empty"}<br>
  Alias Family Name: ${result.aamvaBarcodeResult.aliasFamilyName || "empty"}<br>
  Alias Given Name: ${result.aamvaBarcodeResult.aliasGivenName || "empty"}<br>
  Alias Suffix Name: ${result.aamvaBarcodeResult.aliasSuffixName || "empty"}<br>
  `
}

window.descriptionForUsUniformedServicesBarcodeResult = (result) => {
    return `
  ${descriptionForCapturedId(result)}<br><br>
  Version: ${result.usUniformedServicesBarcodeResult.version}<br>
  Sponsor Flag: ${result.usUniformedServicesBarcodeResult.sponsorFlag}<br>
  Person Designator Document: ${result.usUniformedServicesBarcodeResult.personDesignatorDocument}<br>
  Family Sequence Number: ${result.usUniformedServicesBarcodeResult.familySequenceNumber}<br>
  Deers Dependent Suffix Code: ${result.usUniformedServicesBarcodeResult.deersDependentSuffixCode}<br>
  Deers Dependent Suffix Description: ${result.usUniformedServicesBarcodeResult.deersDependentSuffixDescription}<br>
  Height: ${result.usUniformedServicesBarcodeResult.height}<br>
  Weight: ${result.usUniformedServicesBarcodeResult.weight}<br>
  Hair Color: ${result.usUniformedServicesBarcodeResult.hairColor}<br>
  Eye Color: ${result.usUniformedServicesBarcodeResult.eyeColor}<br>
  Direct Care Flag Code: ${result.usUniformedServicesBarcodeResult.directCareFlagCode}<br>
  Direct Care Flag Description: ${result.usUniformedServicesBarcodeResult.directCareFlagDescription}<br>
  Civilian Health Care Flag Code: ${result.usUniformedServicesBarcodeResult.civilianHealthCareFlagCode}<br>
  Civilian Health Care Flag Description: ${result.usUniformedServicesBarcodeResult.civilianHealthCareFlagDescription}<br>
  Commissary Flag Code: ${result.usUniformedServicesBarcodeResult.commissaryFlagCode}<br>
  Commissary Flag Description: ${result.usUniformedServicesBarcodeResult.commissaryFlagDescription}<br>
  MWR Flag Code: ${result.usUniformedServicesBarcodeResult.mwrFlagCode}<br>
  MWR Flag Description: ${result.usUniformedServicesBarcodeResult.mwrFlagDescription}<br>
  Exchange Flag Code: ${result.usUniformedServicesBarcodeResult.exchangeFlagCode}<br>
  Exchange Flag Description: ${result.usUniformedServicesBarcodeResult.exchangeFlagDescription}<br>
  Champus Effective Date: ${JSON.stringify(result.usUniformedServicesBarcodeResult.champusEffectiveDate.date) || "empty"}<br>
  Champus Expiry Date: ${JSON.stringify(result.usUniformedServicesBarcodeResult.champusExpiryDate.date) || "empty"}<br>
  Form Number: ${result.usUniformedServicesBarcodeResult.formNumber}<br>
  Security Code: ${result.usUniformedServicesBarcodeResult.securityCode}<br>
  Service Code: ${result.usUniformedServicesBarcodeResult.serviceCode}<br>
  Status Code: ${result.usUniformedServicesBarcodeResult.statusCode}<br>
  Status Code Description: ${result.usUniformedServicesBarcodeResult.statusCodeDescription}<br>
  Branch Of Service: ${result.usUniformedServicesBarcodeResult.branchOfService}<br>
  Rank: ${result.usUniformedServicesBarcodeResult.rank}<br>
  Pay Grade: ${result.usUniformedServicesBarcodeResult.payGrade}<br>
  Sponsor Name: ${result.usUniformedServicesBarcodeResult.sponsorName || "empty"}<br>
  Sponsor Person Designator Identifier: ${result.usUniformedServicesBarcodeResult.sponsorPersonDesignatorIdentifier || 0}<br>
  Relationship Code: ${result.usUniformedServicesBarcodeResult.relationshipCode || "empty"}<br>
  Relationship Description: ${result.usUniformedServicesBarcodeResult.relationshipDescription || "empty"}<br>
  Geneva Convention Category: ${result.usUniformedServicesBarcodeResult.genevaConventionCategory || "empty"}<br>
  Blood Type: ${result.usUniformedServicesBarcodeResult.bloodType || "empty"}<br>
  `
}

window.descriptionForCapturedId = (result) => {
    return `
  Name: ${result.firstName || "empty"}<br>
  Last Name: ${result.lastName || "empty"}<br>
  Full Name: ${result.fullName}<br>
  Sex: ${result.sex || "empty"}<br>
  Date of Birth: ${result.dateOfBirth && new Date(result.dateOfBirth.year, result.dateOfBirth.month, result.dateOfBirth.day).toLocaleDateString() || "empty"}<br>
  Nationality: ${result.nationality || "empty"}<br>
  Address: ${result.address || "empty"}<br>
  Document Type: ${result.documentType}<br>
  Issuing Country: ${result.issuingCountry || "empty"}<br>
  Issuing Country ISO: ${result.issuingCountryIso || "empty"}<br>
  Document Number: ${result.documentNumber || "empty"}<br>
  Date of Expiry: ${result.dateOfExpiry && new Date(result.dateOfExpiry.year, result.dateOfExpiry.month, result.dateOfExpiry.day).toLocaleDateString() || "empty"}<br>
  Date of Issue: ${result.dateOfIssue && new Date(result.dateOfIssue.year, result.dateOfIssue.month, result.dateOfIssue.day).toLocaleDateString() || "empty"}<br>
  `
}

(function () {
    runApp();
})();

;// CONCATENATED MODULE: ./www/index.js



})();

/******/ })()
;
