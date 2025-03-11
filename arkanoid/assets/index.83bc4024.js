var Tl=Object.defineProperty;var wl=(i,t,e)=>t in i?Tl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Oe=(i,t,e)=>(wl(i,typeof t!="symbol"?t+"":t,e),e),jr=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var vi=(i,t,e)=>(jr(i,t,"read from private field"),e?e.call(i):t.get(i)),Jn=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},$r=(i,t,e,n)=>(jr(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e);var Zi=(i,t,e)=>(jr(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();var Bo={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(i){(function(t,e,n,s){var r=["","webkit","Moz","MS","ms","o"],a=e.createElement("div"),o="function",c=Math.round,u=Math.abs,h=Date.now;function l(w,P,k){return setTimeout(M(w,k),P)}function f(w,P,k){return Array.isArray(w)?(d(w,k[P],k),!0):!1}function d(w,P,k){var lt;if(!!w)if(w.forEach)w.forEach(P,k);else if(w.length!==s)for(lt=0;lt<w.length;)P.call(k,w[lt],lt,w),lt++;else for(lt in w)w.hasOwnProperty(lt)&&P.call(k,w[lt],lt,w)}function v(w,P,k){var lt="DEPRECATED METHOD: "+P+`
`+k+` AT 
`;return function(){var At=new Error("get-stack-trace"),ee=At&&At.stack?At.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",be=t.console&&(t.console.warn||t.console.log);return be&&be.call(t.console,lt,ee),w.apply(this,arguments)}}var g;typeof Object.assign!="function"?g=function(P){if(P===s||P===null)throw new TypeError("Cannot convert undefined or null to object");for(var k=Object(P),lt=1;lt<arguments.length;lt++){var At=arguments[lt];if(At!==s&&At!==null)for(var ee in At)At.hasOwnProperty(ee)&&(k[ee]=At[ee])}return k}:g=Object.assign;var m=v(function(P,k,lt){for(var At=Object.keys(k),ee=0;ee<At.length;)(!lt||lt&&P[At[ee]]===s)&&(P[At[ee]]=k[At[ee]]),ee++;return P},"extend","Use `assign`."),p=v(function(P,k){return m(P,k,!0)},"merge","Use `assign`.");function x(w,P,k){var lt=P.prototype,At;At=w.prototype=Object.create(lt),At.constructor=w,At._super=lt,k&&g(At,k)}function M(w,P){return function(){return w.apply(P,arguments)}}function _(w,P){return typeof w==o?w.apply(P&&P[0]||s,P):w}function A(w,P){return w===s?P:w}function L(w,P,k){d(y(P),function(lt){w.addEventListener(lt,k,!1)})}function F(w,P,k){d(y(P),function(lt){w.removeEventListener(lt,k,!1)})}function D(w,P){for(;w;){if(w==P)return!0;w=w.parentNode}return!1}function E(w,P){return w.indexOf(P)>-1}function y(w){return w.trim().split(/\s+/g)}function b(w,P,k){if(w.indexOf&&!k)return w.indexOf(P);for(var lt=0;lt<w.length;){if(k&&w[lt][k]==P||!k&&w[lt]===P)return lt;lt++}return-1}function O(w){return Array.prototype.slice.call(w,0)}function B(w,P,k){for(var lt=[],At=[],ee=0;ee<w.length;){var be=P?w[ee][P]:w[ee];b(At,be)<0&&lt.push(w[ee]),At[ee]=be,ee++}return k&&(P?lt=lt.sort(function(Ke,Je){return Ke[P]>Je[P]}):lt=lt.sort()),lt}function K(w,P){for(var k,lt,At=P[0].toUpperCase()+P.slice(1),ee=0;ee<r.length;){if(k=r[ee],lt=k?k+At:P,lt in w)return lt;ee++}return s}var j=1;function at(){return j++}function H(w){var P=w.ownerDocument||w;return P.defaultView||P.parentWindow||t}var U=/mobile|tablet|ip(ad|hone|od)|android/i,st="ontouchstart"in t,nt=K(t,"PointerEvent")!==s,z=st&&U.test(navigator.userAgent),tt="touch",G="pen",R="mouse",C="kinect",W=25,Z=1,rt=2,X=4,et=8,_t=1,Ut=2,yt=4,N=8,vt=16,ut=Ut|yt,Zt=N|vt,St=ut|Zt,le=["x","y"],gt=["clientX","clientY"];function I(w,P){var k=this;this.manager=w,this.callback=P,this.element=w.element,this.target=w.options.inputTarget,this.domHandler=function(lt){_(w.options.enable,[w])&&k.handler(lt)},this.init()}I.prototype={handler:function(){},init:function(){this.evEl&&L(this.element,this.evEl,this.domHandler),this.evTarget&&L(this.target,this.evTarget,this.domHandler),this.evWin&&L(H(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&F(this.element,this.evEl,this.domHandler),this.evTarget&&F(this.target,this.evTarget,this.domHandler),this.evWin&&F(H(this.element),this.evWin,this.domHandler)}};function S(w){var P,k=w.options.inputClass;return k?P=k:nt?P=Wt:z?P=Et:st?P=Lt:P=ye,new P(w,Q)}function Q(w,P,k){var lt=k.pointers.length,At=k.changedPointers.length,ee=P&Z&&lt-At===0,be=P&(X|et)&&lt-At===0;k.isFirst=!!ee,k.isFinal=!!be,ee&&(w.session={}),k.eventType=P,dt(w,k),w.emit("hammer.input",k),w.recognize(k),w.session.prevInput=k}function dt(w,P){var k=w.session,lt=P.pointers,At=lt.length;k.firstInput||(k.firstInput=Rt(P)),At>1&&!k.firstMultiple?k.firstMultiple=Rt(P):At===1&&(k.firstMultiple=!1);var ee=k.firstInput,be=k.firstMultiple,Xe=be?be.center:ee.center,Ke=P.center=Ct(lt);P.timeStamp=h(),P.deltaTime=P.timeStamp-ee.timeStamp,P.angle=Kt(Xe,Ke),P.distance=bt(Xe,Ke),pt(k,P),P.offsetDirection=ve(P.deltaX,P.deltaY);var Je=Vt(P.deltaTime,P.deltaX,P.deltaY);P.overallVelocityX=Je.x,P.overallVelocityY=Je.y,P.overallVelocity=u(Je.x)>u(Je.y)?Je.x:Je.y,P.scale=be?ae(be.pointers,lt):1,P.rotation=be?re(be.pointers,lt):0,P.maxPointers=k.prevInput?P.pointers.length>k.prevInput.maxPointers?P.pointers.length:k.prevInput.maxPointers:P.pointers.length,ft(k,P);var En=w.element;D(P.srcEvent.target,En)&&(En=P.srcEvent.target),P.target=En}function pt(w,P){var k=P.center,lt=w.offsetDelta||{},At=w.prevDelta||{},ee=w.prevInput||{};(P.eventType===Z||ee.eventType===X)&&(At=w.prevDelta={x:ee.deltaX||0,y:ee.deltaY||0},lt=w.offsetDelta={x:k.x,y:k.y}),P.deltaX=At.x+(k.x-lt.x),P.deltaY=At.y+(k.y-lt.y)}function ft(w,P){var k=w.lastInterval||P,lt=P.timeStamp-k.timeStamp,At,ee,be,Xe;if(P.eventType!=et&&(lt>W||k.velocity===s)){var Ke=P.deltaX-k.deltaX,Je=P.deltaY-k.deltaY,En=Vt(lt,Ke,Je);ee=En.x,be=En.y,At=u(En.x)>u(En.y)?En.x:En.y,Xe=ve(Ke,Je),w.lastInterval=P}else At=k.velocity,ee=k.velocityX,be=k.velocityY,Xe=k.direction;P.velocity=At,P.velocityX=ee,P.velocityY=be,P.direction=Xe}function Rt(w){for(var P=[],k=0;k<w.pointers.length;)P[k]={clientX:c(w.pointers[k].clientX),clientY:c(w.pointers[k].clientY)},k++;return{timeStamp:h(),pointers:P,center:Ct(P),deltaX:w.deltaX,deltaY:w.deltaY}}function Ct(w){var P=w.length;if(P===1)return{x:c(w[0].clientX),y:c(w[0].clientY)};for(var k=0,lt=0,At=0;At<P;)k+=w[At].clientX,lt+=w[At].clientY,At++;return{x:c(k/P),y:c(lt/P)}}function Vt(w,P,k){return{x:P/w||0,y:k/w||0}}function ve(w,P){return w===P?_t:u(w)>=u(P)?w<0?Ut:yt:P<0?N:vt}function bt(w,P,k){k||(k=le);var lt=P[k[0]]-w[k[0]],At=P[k[1]]-w[k[1]];return Math.sqrt(lt*lt+At*At)}function Kt(w,P,k){k||(k=le);var lt=P[k[0]]-w[k[0]],At=P[k[1]]-w[k[1]];return Math.atan2(At,lt)*180/Math.PI}function re(w,P){return Kt(P[1],P[0],gt)+Kt(w[1],w[0],gt)}function ae(w,P){return bt(P[0],P[1],gt)/bt(w[0],w[1],gt)}var $t={mousedown:Z,mousemove:rt,mouseup:X},ge="mousedown",he="mousemove mouseup";function ye(){this.evEl=ge,this.evWin=he,this.pressed=!1,I.apply(this,arguments)}x(ye,I,{handler:function(P){var k=$t[P.type];k&Z&&P.button===0&&(this.pressed=!0),k&rt&&P.which!==1&&(k=X),this.pressed&&(k&X&&(this.pressed=!1),this.callback(this.manager,k,{pointers:[P],changedPointers:[P],pointerType:R,srcEvent:P}))}});var Y={pointerdown:Z,pointermove:rt,pointerup:X,pointercancel:et,pointerout:et},Ot={2:tt,3:G,4:R,5:C},ht="pointerdown",xt="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(ht="MSPointerDown",xt="MSPointerMove MSPointerUp MSPointerCancel");function Wt(){this.evEl=ht,this.evWin=xt,I.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}x(Wt,I,{handler:function(P){var k=this.store,lt=!1,At=P.type.toLowerCase().replace("ms",""),ee=Y[At],be=Ot[P.pointerType]||P.pointerType,Xe=be==tt,Ke=b(k,P.pointerId,"pointerId");ee&Z&&(P.button===0||Xe)?Ke<0&&(k.push(P),Ke=k.length-1):ee&(X|et)&&(lt=!0),!(Ke<0)&&(k[Ke]=P,this.callback(this.manager,ee,{pointers:k,changedPointers:[P],pointerType:be,srcEvent:P}),lt&&k.splice(Ke,1))}});var Xt={touchstart:Z,touchmove:rt,touchend:X,touchcancel:et},fe="touchstart",Pe="touchstart touchmove touchend touchcancel";function Be(){this.evTarget=fe,this.evWin=Pe,this.started=!1,I.apply(this,arguments)}x(Be,I,{handler:function(P){var k=Xt[P.type];if(k===Z&&(this.started=!0),!!this.started){var lt=de.call(this,P,k);k&(X|et)&&lt[0].length-lt[1].length===0&&(this.started=!1),this.callback(this.manager,k,{pointers:lt[0],changedPointers:lt[1],pointerType:tt,srcEvent:P})}}});function de(w,P){var k=O(w.touches),lt=O(w.changedTouches);return P&(X|et)&&(k=B(k.concat(lt),"identifier",!0)),[k,lt]}var ct={touchstart:Z,touchmove:rt,touchend:X,touchcancel:et},mt="touchstart touchmove touchend touchcancel";function Et(){this.evTarget=mt,this.targetIds={},I.apply(this,arguments)}x(Et,I,{handler:function(P){var k=ct[P.type],lt=Tt.call(this,P,k);!lt||this.callback(this.manager,k,{pointers:lt[0],changedPointers:lt[1],pointerType:tt,srcEvent:P})}});function Tt(w,P){var k=O(w.touches),lt=this.targetIds;if(P&(Z|rt)&&k.length===1)return lt[k[0].identifier]=!0,[k,k];var At,ee,be=O(w.changedTouches),Xe=[],Ke=this.target;if(ee=k.filter(function(Je){return D(Je.target,Ke)}),P===Z)for(At=0;At<ee.length;)lt[ee[At].identifier]=!0,At++;for(At=0;At<be.length;)lt[be[At].identifier]&&Xe.push(be[At]),P&(X|et)&&delete lt[be[At].identifier],At++;if(!!Xe.length)return[B(ee.concat(Xe),"identifier",!0),Xe]}var oe=2500,Ht=25;function Lt(){I.apply(this,arguments);var w=M(this.handler,this);this.touch=new Et(this.manager,w),this.mouse=new ye(this.manager,w),this.primaryTouch=null,this.lastTouches=[]}x(Lt,I,{handler:function(P,k,lt){var At=lt.pointerType==tt,ee=lt.pointerType==R;if(!(ee&&lt.sourceCapabilities&&lt.sourceCapabilities.firesTouchEvents)){if(At)kt.call(this,k,lt);else if(ee&&Dt.call(this,lt))return;this.callback(P,k,lt)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function kt(w,P){w&Z?(this.primaryTouch=P.changedPointers[0].identifier,ot.call(this,P)):w&(X|et)&&ot.call(this,P)}function ot(w){var P=w.changedPointers[0];if(P.identifier===this.primaryTouch){var k={x:P.clientX,y:P.clientY};this.lastTouches.push(k);var lt=this.lastTouches,At=function(){var ee=lt.indexOf(k);ee>-1&&lt.splice(ee,1)};setTimeout(At,oe)}}function Dt(w){for(var P=w.srcEvent.clientX,k=w.srcEvent.clientY,lt=0;lt<this.lastTouches.length;lt++){var At=this.lastTouches[lt],ee=Math.abs(P-At.x),be=Math.abs(k-At.y);if(ee<=Ht&&be<=Ht)return!0}return!1}var zt=K(a.style,"touchAction"),Qt=zt!==s,Ft="compute",Pt="auto",Bt="manipulation",ne="none",ue="pan-x",wt="pan-y",pe=$();function T(w,P){this.manager=w,this.set(P)}T.prototype={set:function(w){w==Ft&&(w=this.compute()),Qt&&this.manager.element.style&&pe[w]&&(this.manager.element.style[zt]=w),this.actions=w.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var w=[];return d(this.manager.recognizers,function(P){_(P.options.enable,[P])&&(w=w.concat(P.getTouchAction()))}),q(w.join(" "))},preventDefaults:function(w){var P=w.srcEvent,k=w.offsetDirection;if(this.manager.session.prevented){P.preventDefault();return}var lt=this.actions,At=E(lt,ne)&&!pe[ne],ee=E(lt,wt)&&!pe[wt],be=E(lt,ue)&&!pe[ue];if(At){var Xe=w.pointers.length===1,Ke=w.distance<2,Je=w.deltaTime<250;if(Xe&&Ke&&Je)return}if(!(be&&ee)&&(At||ee&&k&ut||be&&k&Zt))return this.preventSrc(P)},preventSrc:function(w){this.manager.session.prevented=!0,w.preventDefault()}};function q(w){if(E(w,ne))return ne;var P=E(w,ue),k=E(w,wt);return P&&k?ne:P||k?P?ue:wt:E(w,Bt)?Bt:Pt}function $(){if(!Qt)return!1;var w={},P=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(k){w[k]=P?t.CSS.supports("touch-action",k):!0}),w}var J=1,V=2,Mt=4,It=8,Nt=It,Yt=16,Jt=32;function Gt(w){this.options=g({},this.defaults,w||{}),this.id=at(),this.manager=null,this.options.enable=A(this.options.enable,!0),this.state=J,this.simultaneous={},this.requireFail=[]}Gt.prototype={defaults:{},set:function(w){return g(this.options,w),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(w){if(f(w,"recognizeWith",this))return this;var P=this.simultaneous;return w=_e(w,this),P[w.id]||(P[w.id]=w,w.recognizeWith(this)),this},dropRecognizeWith:function(w){return f(w,"dropRecognizeWith",this)?this:(w=_e(w,this),delete this.simultaneous[w.id],this)},requireFailure:function(w){if(f(w,"requireFailure",this))return this;var P=this.requireFail;return w=_e(w,this),b(P,w)===-1&&(P.push(w),w.requireFailure(this)),this},dropRequireFailure:function(w){if(f(w,"dropRequireFailure",this))return this;w=_e(w,this);var P=b(this.requireFail,w);return P>-1&&this.requireFail.splice(P,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(w){return!!this.simultaneous[w.id]},emit:function(w){var P=this,k=this.state;function lt(At){P.manager.emit(At,w)}k<It&&lt(P.options.event+ie(k)),lt(P.options.event),w.additionalEvent&&lt(w.additionalEvent),k>=It&&lt(P.options.event+ie(k))},tryEmit:function(w){if(this.canEmit())return this.emit(w);this.state=Jt},canEmit:function(){for(var w=0;w<this.requireFail.length;){if(!(this.requireFail[w].state&(Jt|J)))return!1;w++}return!0},recognize:function(w){var P=g({},w);if(!_(this.options.enable,[this,P])){this.reset(),this.state=Jt;return}this.state&(Nt|Yt|Jt)&&(this.state=J),this.state=this.process(P),this.state&(V|Mt|It|Yt)&&this.tryEmit(P)},process:function(w){},getTouchAction:function(){},reset:function(){}};function ie(w){return w&Yt?"cancel":w&It?"end":w&Mt?"move":w&V?"start":""}function se(w){return w==vt?"down":w==N?"up":w==Ut?"left":w==yt?"right":""}function _e(w,P){var k=P.manager;return k?k.get(w):w}function me(){Gt.apply(this,arguments)}x(me,Gt,{defaults:{pointers:1},attrTest:function(w){var P=this.options.pointers;return P===0||w.pointers.length===P},process:function(w){var P=this.state,k=w.eventType,lt=P&(V|Mt),At=this.attrTest(w);return lt&&(k&et||!At)?P|Yt:lt||At?k&X?P|It:P&V?P|Mt:V:Jt}});function xe(){me.apply(this,arguments),this.pX=null,this.pY=null}x(xe,me,{defaults:{event:"pan",threshold:10,pointers:1,direction:St},getTouchAction:function(){var w=this.options.direction,P=[];return w&ut&&P.push(wt),w&Zt&&P.push(ue),P},directionTest:function(w){var P=this.options,k=!0,lt=w.distance,At=w.direction,ee=w.deltaX,be=w.deltaY;return At&P.direction||(P.direction&ut?(At=ee===0?_t:ee<0?Ut:yt,k=ee!=this.pX,lt=Math.abs(w.deltaX)):(At=be===0?_t:be<0?N:vt,k=be!=this.pY,lt=Math.abs(w.deltaY))),w.direction=At,k&&lt>P.threshold&&At&P.direction},attrTest:function(w){return me.prototype.attrTest.call(this,w)&&(this.state&V||!(this.state&V)&&this.directionTest(w))},emit:function(w){this.pX=w.deltaX,this.pY=w.deltaY;var P=se(w.direction);P&&(w.additionalEvent=this.options.event+P),this._super.emit.call(this,w)}});function ce(){me.apply(this,arguments)}x(ce,me,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ne]},attrTest:function(w){return this._super.attrTest.call(this,w)&&(Math.abs(w.scale-1)>this.options.threshold||this.state&V)},emit:function(w){if(w.scale!==1){var P=w.scale<1?"in":"out";w.additionalEvent=this.options.event+P}this._super.emit.call(this,w)}});function te(){Gt.apply(this,arguments),this._timer=null,this._input=null}x(te,Gt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Pt]},process:function(w){var P=this.options,k=w.pointers.length===P.pointers,lt=w.distance<P.threshold,At=w.deltaTime>P.time;if(this._input=w,!lt||!k||w.eventType&(X|et)&&!At)this.reset();else if(w.eventType&Z)this.reset(),this._timer=l(function(){this.state=Nt,this.tryEmit()},P.time,this);else if(w.eventType&X)return Nt;return Jt},reset:function(){clearTimeout(this._timer)},emit:function(w){this.state===Nt&&(w&&w.eventType&X?this.manager.emit(this.options.event+"up",w):(this._input.timeStamp=h(),this.manager.emit(this.options.event,this._input)))}});function Ie(){me.apply(this,arguments)}x(Ie,me,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ne]},attrTest:function(w){return this._super.attrTest.call(this,w)&&(Math.abs(w.rotation)>this.options.threshold||this.state&V)}});function qt(){me.apply(this,arguments)}x(qt,me,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:ut|Zt,pointers:1},getTouchAction:function(){return xe.prototype.getTouchAction.call(this)},attrTest:function(w){var P=this.options.direction,k;return P&(ut|Zt)?k=w.overallVelocity:P&ut?k=w.overallVelocityX:P&Zt&&(k=w.overallVelocityY),this._super.attrTest.call(this,w)&&P&w.offsetDirection&&w.distance>this.options.threshold&&w.maxPointers==this.options.pointers&&u(k)>this.options.velocity&&w.eventType&X},emit:function(w){var P=se(w.offsetDirection);P&&this.manager.emit(this.options.event+P,w),this.manager.emit(this.options.event,w)}});function Le(){Gt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}x(Le,Gt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Bt]},process:function(w){var P=this.options,k=w.pointers.length===P.pointers,lt=w.distance<P.threshold,At=w.deltaTime<P.time;if(this.reset(),w.eventType&Z&&this.count===0)return this.failTimeout();if(lt&&At&&k){if(w.eventType!=X)return this.failTimeout();var ee=this.pTime?w.timeStamp-this.pTime<P.interval:!0,be=!this.pCenter||bt(this.pCenter,w.center)<P.posThreshold;this.pTime=w.timeStamp,this.pCenter=w.center,!be||!ee?this.count=1:this.count+=1,this._input=w;var Xe=this.count%P.taps;if(Xe===0)return this.hasRequireFailures()?(this._timer=l(function(){this.state=Nt,this.tryEmit()},P.interval,this),V):Nt}return Jt},failTimeout:function(){return this._timer=l(function(){this.state=Jt},this.options.interval,this),Jt},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Nt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function Ae(w,P){return P=P||{},P.recognizers=A(P.recognizers,Ae.defaults.preset),new De(w,P)}Ae.VERSION="2.0.7",Ae.defaults={domEvents:!1,touchAction:Ft,enable:!0,inputTarget:null,inputClass:null,preset:[[Ie,{enable:!1}],[ce,{enable:!1},["rotate"]],[qt,{direction:ut}],[xe,{direction:ut},["swipe"]],[Le],[Le,{event:"doubletap",taps:2},["tap"]],[te]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ze=1,je=2;function De(w,P){this.options=g({},Ae.defaults,P||{}),this.options.inputTarget=this.options.inputTarget||w,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=w,this.input=S(this),this.touchAction=new T(this,this.options.touchAction),Ye(this,!0),d(this.options.recognizers,function(k){var lt=this.add(new k[0](k[1]));k[2]&&lt.recognizeWith(k[2]),k[3]&&lt.requireFailure(k[3])},this)}De.prototype={set:function(w){return g(this.options,w),w.touchAction&&this.touchAction.update(),w.inputTarget&&(this.input.destroy(),this.input.target=w.inputTarget,this.input.init()),this},stop:function(w){this.session.stopped=w?je:ze},recognize:function(w){var P=this.session;if(!P.stopped){this.touchAction.preventDefaults(w);var k,lt=this.recognizers,At=P.curRecognizer;(!At||At&&At.state&Nt)&&(At=P.curRecognizer=null);for(var ee=0;ee<lt.length;)k=lt[ee],P.stopped!==je&&(!At||k==At||k.canRecognizeWith(At))?k.recognize(w):k.reset(),!At&&k.state&(V|Mt|It)&&(At=P.curRecognizer=k),ee++}},get:function(w){if(w instanceof Gt)return w;for(var P=this.recognizers,k=0;k<P.length;k++)if(P[k].options.event==w)return P[k];return null},add:function(w){if(f(w,"add",this))return this;var P=this.get(w.options.event);return P&&this.remove(P),this.recognizers.push(w),w.manager=this,this.touchAction.update(),w},remove:function(w){if(f(w,"remove",this))return this;if(w=this.get(w),w){var P=this.recognizers,k=b(P,w);k!==-1&&(P.splice(k,1),this.touchAction.update())}return this},on:function(w,P){if(w!==s&&P!==s){var k=this.handlers;return d(y(w),function(lt){k[lt]=k[lt]||[],k[lt].push(P)}),this}},off:function(w,P){if(w!==s){var k=this.handlers;return d(y(w),function(lt){P?k[lt]&&k[lt].splice(b(k[lt],P),1):delete k[lt]}),this}},emit:function(w,P){this.options.domEvents&&Te(w,P);var k=this.handlers[w]&&this.handlers[w].slice();if(!(!k||!k.length)){P.type=w,P.preventDefault=function(){P.srcEvent.preventDefault()};for(var lt=0;lt<k.length;)k[lt](P),lt++}},destroy:function(){this.element&&Ye(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Ye(w,P){var k=w.element;if(!!k.style){var lt;d(w.options.cssProps,function(At,ee){lt=K(k.style,ee),P?(w.oldCssProps[lt]=k.style[lt],k.style[lt]=At):k.style[lt]=w.oldCssProps[lt]||""}),P||(w.oldCssProps={})}}function Te(w,P){var k=e.createEvent("Event");k.initEvent(w,!0,!0),k.gesture=P,P.target.dispatchEvent(k)}g(Ae,{INPUT_START:Z,INPUT_MOVE:rt,INPUT_END:X,INPUT_CANCEL:et,STATE_POSSIBLE:J,STATE_BEGAN:V,STATE_CHANGED:Mt,STATE_ENDED:It,STATE_RECOGNIZED:Nt,STATE_CANCELLED:Yt,STATE_FAILED:Jt,DIRECTION_NONE:_t,DIRECTION_LEFT:Ut,DIRECTION_RIGHT:yt,DIRECTION_UP:N,DIRECTION_DOWN:vt,DIRECTION_HORIZONTAL:ut,DIRECTION_VERTICAL:Zt,DIRECTION_ALL:St,Manager:De,Input:I,TouchAction:T,TouchInput:Et,MouseInput:ye,PointerEventInput:Wt,TouchMouseInput:Lt,SingleTouchInput:Be,Recognizer:Gt,AttrRecognizer:me,Tap:Le,Pan:xe,Swipe:qt,Pinch:ce,Rotate:Ie,Press:te,on:L,off:F,each:d,merge:p,extend:m,assign:g,inherit:x,bindFn:M,prefixed:K});var Ze=typeof t<"u"?t:typeof self<"u"?self:{};Ze.Hammer=Ae,typeof s=="function"&&s.amd?s(function(){return Ae}):i.exports?i.exports=Ae:t[n]=Ae})(window,document,"Hammer")})(Bo);const Ia=Bo.exports;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="174",Ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bl=0,La=1,Al=2,Oo=1,Rl=2,Dn=3,jn=0,an=1,Nn=2,Zn=0,Ui=1,Da=2,Na=3,Ua=4,Cl=5,li=100,Pl=101,Il=102,Ll=103,Dl=104,Nl=200,Ul=201,Fl=202,Bl=203,Cs=204,Ps=205,Ol=206,zl=207,Vl=208,Hl=209,kl=210,Gl=211,Wl=212,Xl=213,ql=214,Is=0,Ls=1,Ds=2,Oi=3,Ns=4,Us=5,Fs=6,Bs=7,zo=0,Yl=1,Zl=2,Kn=0,Kl=1,jl=2,$l=3,Ql=4,Jl=5,tc=6,ec=7,Vo=300,zi=301,Vi=302,Os=303,zs=304,Yr=306,ir=1e3,hi=1001,Vs=1002,yn=1003,nc=1004,ur=1005,Tn=1006,Qr=1007,ui=1008,On=1009,Ho=1010,ko=1011,rr=1012,ma=1013,fi=1014,Un=1015,lr=1016,va=1017,ga=1018,Hi=1020,Go=35902,Wo=1021,Xo=1022,_n=1023,qo=1024,Yo=1025,Fi=1026,ki=1027,Zo=1028,_a=1029,Ko=1030,xa=1031,ya=1033,Ur=33776,Fr=33777,Br=33778,Or=33779,Hs=35840,ks=35841,Gs=35842,Ws=35843,Xs=36196,qs=37492,Ys=37496,Zs=37808,Ks=37809,js=37810,$s=37811,Qs=37812,Js=37813,ta=37814,ea=37815,na=37816,ia=37817,ra=37818,sa=37819,aa=37820,oa=37821,zr=36492,la=36494,ca=36495,jo=36283,ha=36284,ua=36285,fa=36286,ic=3200,rc=3201,$o=0,sc=1,qn="",fn="srgb",Gi="srgb-linear",Hr="linear",Ne="srgb",gi=7680,Fa=519,ac=512,oc=513,lc=514,Qo=515,cc=516,hc=517,uc=518,fc=519,Ba=35044,Oa="300 es",Fn=2e3,kr=2001;class mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let za=1234567;const er=Math.PI/180,sr=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Ma(i,t){return(i%t+t)%t}function dc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function pc(i,t,e){return i!==t?(e-i)/(t-i):0}function nr(i,t,e){return(1-e)*i+e*t}function mc(i,t,e,n){return nr(i,t,1-Math.exp(-e*n))}function vc(i,t=1){return t-Math.abs(Ma(i,t*2)-t)}function gc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _c(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yc(i,t){return i+Math.random()*(t-i)}function Mc(i){return i*(.5-Math.random())}function Ec(i){i!==void 0&&(za=i);let t=za+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sc(i){return i*er}function Tc(i){return i*sr}function wc(i){return(i&i-1)===0&&i!==0}function bc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ac(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rc(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),u=r((t+n)/2),h=a((t+n)/2),l=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*l,c*f,o*u);break;case"YZY":i.set(c*f,o*h,c*l,o*u);break;case"ZXZ":i.set(c*l,c*f,o*h,o*u);break;case"XZX":i.set(o*h,c*v,c*d,o*u);break;case"YXY":i.set(c*d,o*h,c*v,o*u);break;case"ZYZ":i.set(c*v,c*d,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cc={DEG2RAD:er,RAD2DEG:sr,generateUUID:Xi,clamp:we,euclideanModulo:Ma,mapLinear:dc,inverseLerp:pc,lerp:nr,damp:mc,pingpong:vc,smoothstep:gc,smootherstep:_c,randInt:xc,randFloat:yc,randFloatSpread:Mc,seededRandom:Ec,degToRad:Sc,radToDeg:Tc,isPowerOfTwo:wc,ceilPowerOfTwo:bc,floorPowerOfTwo:Ac,setQuaternionFromProperEuler:Rc,normalize:tn,denormalize:Ii};class Me{constructor(t=0,e=0){Me.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ee{constructor(t,e,n,s,r,a,o,c,u){Ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u)}set(t,e,n,s,r,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],l=n[7],f=n[2],d=n[5],v=n[8],g=s[0],m=s[3],p=s[6],x=s[1],M=s[4],_=s[7],A=s[2],L=s[5],F=s[8];return r[0]=a*g+o*x+c*A,r[3]=a*m+o*M+c*L,r[6]=a*p+o*_+c*F,r[1]=u*g+h*x+l*A,r[4]=u*m+h*M+l*L,r[7]=u*p+h*_+l*F,r[2]=f*g+d*x+v*A,r[5]=f*m+d*M+v*L,r[8]=f*p+d*_+v*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=h*a-o*u,f=o*c-h*r,d=u*r-a*c,v=e*l+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(s*u-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=f*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=d*g,t[7]=(n*c-u*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-s*u,s*c,-s*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jr.makeScale(t,e)),this}rotate(t){return this.premultiply(Jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new Ee;function Jo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pc(){const i=ar("canvas");return i.style.display="block",i}const Va={};function ai(i){i in Va||(Va[i]=!0,console.warn(i))}function Ic(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Lc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ha=new Ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ka=new Ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nc(){const i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ne&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ne&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Hr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:Ha,fromXYZ:ka,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:Ha,fromXYZ:ka,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const Ce=Nc();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class Uc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=ar("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fc=0;class Ea{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ts(s[a].image)):r.push(ts(s[a]))}else r=ts(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bc=0;class rn extends mi{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=hi,s=hi,r=Tn,a=ui,o=_n,c=On,u=rn.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Xi(),this.name="",this.source=new Ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Vs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Vs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Vo;rn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],f=c[1],d=c[5],v=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,_=(d+1)/2,A=(p+1)/2,L=(h+f)/4,F=(l+g)/4,D=(v+m)/4;return M>_&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=L/n,r=F/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=L/s,r=D/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=F/r,s=D/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(l-g)/x,this.z=(f-h)/x,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this.w=we(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this.w=we(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oc extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ea(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tl extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zc extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const f=r[a+0],d=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==f||u!==d||h!==v){let m=1-o;const p=c*f+u*d+h*v+l*g,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),L=Math.atan2(A,p*x);m=Math.sin(m*L)/A,o=Math.sin(o*L)/A}const _=o*x;if(c=c*m+f*_,u=u*m+d*_,h=h*m+v*_,l=l*m+g*_,m===1-o){const A=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=A,u*=A,h*=A,l*=A}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return t[e]=o*v+h*l+c*d-u*f,t[e+1]=c*v+h*f+u*l-o*d,t[e+2]=u*v+h*d+o*f-c*l,t[e+3]=h*v-o*l-c*f-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),l=o(r/2),f=c(n/2),d=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=f*h*l+u*d*v,this._y=u*d*l-f*h*v,this._z=u*h*v+f*d*l,this._w=u*h*l-f*d*v;break;case"YXZ":this._x=f*h*l+u*d*v,this._y=u*d*l-f*h*v,this._z=u*h*v-f*d*l,this._w=u*h*l+f*d*v;break;case"ZXY":this._x=f*h*l-u*d*v,this._y=u*d*l+f*h*v,this._z=u*h*v+f*d*l,this._w=u*h*l-f*d*v;break;case"ZYX":this._x=f*h*l-u*d*v,this._y=u*d*l+f*h*v,this._z=u*h*v-f*d*l,this._w=u*h*l+f*d*v;break;case"YZX":this._x=f*h*l+u*d*v,this._y=u*d*l+f*h*v,this._z=u*h*v-f*d*l,this._w=u*h*l-f*d*v;break;case"XZY":this._x=f*h*l-u*d*v,this._y=u*d*l-f*h*v,this._z=u*h*v+f*d*l,this._w=u*h*l+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],l=e[10],f=n+o+l;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-u)*d,this._z=(a-s)*d}else if(n>o&&n>l){const d=2*Math.sqrt(1+n-o-l);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+u)/d}else if(o>l){const d=2*Math.sqrt(1+o-n-l);this._w=(r-u)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+l-n-o);this._w=(a-s)/d,this._x=(r+u)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),l=Math.sin((1-e)*h)/u,f=Math.sin(e*h)/u;return this._w=a*l+this._w*f,this._x=n*l+this._x*f,this._y=s*l+this._y*f,this._z=r*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,e=0,n=0){it.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ga.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ga.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*s-o*n),h=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+c*u+a*l-o*h,this.y=n+c*h+o*u-r*l,this.z=s+c*l+r*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return es.copy(this).projectOnVector(t),this.sub(es)}reflect(t){return this.sub(es.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const es=new it,Ga=new pi;class cr{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),dr.subVectors(this.max,Ki),xi.subVectors(t.a,Ki),yi.subVectors(t.b,Ki),Mi.subVectors(t.c,Ki),zn.subVectors(yi,xi),Vn.subVectors(Mi,yi),ti.subVectors(xi,Mi);let e=[0,-zn.z,zn.y,0,-Vn.z,Vn.y,0,-ti.z,ti.y,zn.z,0,-zn.x,Vn.z,0,-Vn.x,ti.z,0,-ti.x,-zn.y,zn.x,0,-Vn.y,Vn.x,0,-ti.y,ti.x,0];return!ns(e,xi,yi,Mi,dr)||(e=[1,0,0,0,1,0,0,0,1],!ns(e,xi,yi,Mi,dr))?!1:(pr.crossVectors(zn,Vn),e=[pr.x,pr.y,pr.z],ns(e,xi,yi,Mi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new it,new it,new it,new it,new it,new it,new it,new it],dn=new it,fr=new cr,xi=new it,yi=new it,Mi=new it,zn=new it,Vn=new it,ti=new it,Ki=new it,dr=new it,pr=new it,ei=new it;function ns(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),c=t.dot(ei),u=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Vc=new cr,ji=new it,is=new it;class Sa{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(is.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(is)),this.expandByPoint(ji.copy(t.center).sub(is))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new it,rs=new it,mr=new it,Hn=new it,ss=new it,vr=new it,as=new it;class el{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rs.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(rs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=Hn.dot(this.direction),c=-Hn.dot(mr),u=Hn.lengthSq(),h=Math.abs(1-a*a);let l,f,d,v;if(h>0)if(l=a*c-o,f=a*o-c,v=r*h,l>=0)if(f>=-v)if(f<=v){const g=1/h;l*=g,f*=g,d=l*(l+a*f+2*o)+f*(a*l+f+2*c)+u}else f=r,l=Math.max(0,-(a*f+o)),d=-l*l+f*(f+2*c)+u;else f=-r,l=Math.max(0,-(a*f+o)),d=-l*l+f*(f+2*c)+u;else f<=-v?(l=Math.max(0,-(-a*r+o)),f=l>0?-r:Math.min(Math.max(-r,-c),r),d=-l*l+f*(f+2*c)+u):f<=v?(l=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+u):(l=Math.max(0,-(a*r+o)),f=l>0?r:Math.min(Math.max(-r,-c),r),d=-l*l+f*(f+2*c)+u);else f=a>0?-r:r,l=Math.max(0,-(a*f+o)),d=-l*l+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(rs).addScaledVector(mr,f),d}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-f.z)*l,c=(t.max.z-f.z)*l):(o=(t.max.z-f.z)*l,c=(t.min.z-f.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,s,r){ss.subVectors(e,t),vr.subVectors(n,t),as.crossVectors(ss,vr);let a=this.direction.dot(as),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const c=o*this.direction.dot(vr.crossVectors(Hn,vr));if(c<0)return null;const u=o*this.direction.dot(ss.cross(Hn));if(u<0||c+u>a)return null;const h=-o*Hn.dot(as);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(t,e,n,s,r,a,o,c,u,h,l,f,d,v,g,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u,h,l,f,d,v,g,m)}set(t,e,n,s,r,a,o,c,u,h,l,f,d,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=u,p[6]=h,p[10]=l,p[14]=f,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=d+v*u,e[5]=f-g*u,e[9]=-o*c,e[2]=g-f*u,e[6]=v+d*u,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*l,v=u*h,g=u*l;e[0]=f+g*o,e[4]=v*o-d,e[8]=a*u,e[1]=a*l,e[5]=a*h,e[9]=-o,e[2]=d*o-v,e[6]=g+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*l,v=u*h,g=u*l;e[0]=f-g*o,e[4]=-a*l,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*u-d,e[8]=f*u+g,e[1]=c*l,e[5]=g*u+f,e[9]=d*u-v,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*u,v=o*c,g=o*u;e[0]=c*h,e[4]=g-f*l,e[8]=v*l+d,e[1]=l,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=d*l+v,e[10]=f-g*l}else if(t.order==="XZY"){const f=a*c,d=a*u,v=o*c,g=o*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=f*l+g,e[5]=a*h,e[9]=d*l-v,e[2]=v*l-d,e[6]=o*h,e[10]=g*l+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hc,t,kc)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),kn.crossVectors(n,ln),kn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),kn.crossVectors(n,ln)),kn.normalize(),gr.crossVectors(ln,kn),s[0]=kn.x,s[4]=gr.x,s[8]=ln.x,s[1]=kn.y,s[5]=gr.y,s[9]=ln.y,s[2]=kn.z,s[6]=gr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],l=n[5],f=n[9],d=n[13],v=n[2],g=n[6],m=n[10],p=n[14],x=n[3],M=n[7],_=n[11],A=n[15],L=s[0],F=s[4],D=s[8],E=s[12],y=s[1],b=s[5],O=s[9],B=s[13],K=s[2],j=s[6],at=s[10],H=s[14],U=s[3],st=s[7],nt=s[11],z=s[15];return r[0]=a*L+o*y+c*K+u*U,r[4]=a*F+o*b+c*j+u*st,r[8]=a*D+o*O+c*at+u*nt,r[12]=a*E+o*B+c*H+u*z,r[1]=h*L+l*y+f*K+d*U,r[5]=h*F+l*b+f*j+d*st,r[9]=h*D+l*O+f*at+d*nt,r[13]=h*E+l*B+f*H+d*z,r[2]=v*L+g*y+m*K+p*U,r[6]=v*F+g*b+m*j+p*st,r[10]=v*D+g*O+m*at+p*nt,r[14]=v*E+g*B+m*H+p*z,r[3]=x*L+M*y+_*K+A*U,r[7]=x*F+M*b+_*j+A*st,r[11]=x*D+M*O+_*at+A*nt,r[15]=x*E+M*B+_*H+A*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],l=t[6],f=t[10],d=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*c*l-s*u*l-r*o*f+n*u*f+s*o*d-n*c*d)+g*(+e*c*d-e*u*f+r*a*f-s*a*d+s*u*h-r*c*h)+m*(+e*u*l-e*o*d-r*a*l+n*a*d+r*o*h-n*u*h)+p*(-s*o*h-e*c*l+e*o*f+s*a*l-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=t[9],f=t[10],d=t[11],v=t[12],g=t[13],m=t[14],p=t[15],x=l*m*u-g*f*u+g*c*d-o*m*d-l*c*p+o*f*p,M=v*f*u-h*m*u-v*c*d+a*m*d+h*c*p-a*f*p,_=h*g*u-v*l*u+v*o*d-a*g*d-h*o*p+a*l*p,A=v*l*c-h*g*c-v*o*f+a*g*f+h*o*m-a*l*m,L=e*x+n*M+s*_+r*A;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return t[0]=x*F,t[1]=(g*f*r-l*m*r-g*s*d+n*m*d+l*s*p-n*f*p)*F,t[2]=(o*m*r-g*c*r+g*s*u-n*m*u-o*s*p+n*c*p)*F,t[3]=(l*c*r-o*f*r-l*s*u+n*f*u+o*s*d-n*c*d)*F,t[4]=M*F,t[5]=(h*m*r-v*f*r+v*s*d-e*m*d-h*s*p+e*f*p)*F,t[6]=(v*c*r-a*m*r-v*s*u+e*m*u+a*s*p-e*c*p)*F,t[7]=(a*f*r-h*c*r+h*s*u-e*f*u-a*s*d+e*c*d)*F,t[8]=_*F,t[9]=(v*l*r-h*g*r-v*n*d+e*g*d+h*n*p-e*l*p)*F,t[10]=(a*g*r-v*o*r+v*n*u-e*g*u-a*n*p+e*o*p)*F,t[11]=(h*o*r-a*l*r-h*n*u+e*l*u+a*n*d-e*o*d)*F,t[12]=A*F,t[13]=(h*g*s-v*l*s+v*n*f-e*g*f-h*n*m+e*l*m)*F,t[14]=(v*o*s-a*g*s-v*n*c+e*g*c+a*n*m-e*o*m)*F,t[15]=(a*l*s-h*o*s+h*n*c-e*l*c-a*n*f+e*o*f)*F,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,u=r+r,h=a+a,l=o+o,f=r*u,d=r*h,v=r*l,g=a*h,m=a*l,p=o*l,x=c*u,M=c*h,_=c*l,A=n.x,L=n.y,F=n.z;return s[0]=(1-(g+p))*A,s[1]=(d+_)*A,s[2]=(v-M)*A,s[3]=0,s[4]=(d-_)*L,s[5]=(1-(f+p))*L,s[6]=(m+x)*L,s[7]=0,s[8]=(v+M)*F,s[9]=(m-x)*F,s[10]=(1-(f+g))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ei.set(s[0],s[1],s[2]).length();const a=Ei.set(s[4],s[5],s[6]).length(),o=Ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const u=1/r,h=1/a,l=1/o;return pn.elements[0]*=u,pn.elements[1]*=u,pn.elements[2]*=u,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=l,pn.elements[9]*=l,pn.elements[10]*=l,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Fn){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),f=(n+s)/(n-s);let d,v;if(o===Fn)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===kr)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Fn){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(a-r),f=(e+t)*u,d=(n+s)*h;let v,g;if(o===Fn)v=(a+r)*l,g=-2*l;else if(o===kr)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ei=new it,pn=new Ve,Hc=new it(0,0,0),kc=new it(1,1,1),kn=new it,gr=new it,ln=new it,Wa=new Ve,Xa=new pi;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],l=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gc=0;const qa=new it,Si=new pi,Pn=new Ve,_r=new it,$i=new it,Wc=new it,Xc=new pi,Ya=new it(1,0,0),Za=new it(0,1,0),Ka=new it(0,0,1),ja={type:"added"},qc={type:"removed"},Ti={type:"childadded",child:null},os={type:"childremoved",child:null};class on extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new it,e=new An,n=new pi,s=new it(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ee}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Ya,t)}rotateY(t){return this.rotateOnAxis(Za,t)}rotateZ(t){return this.rotateOnAxis(Ka,t)}translateOnAxis(t,e){return qa.copy(t).applyQuaternion(this.quaternion),this.position.add(qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ya,t)}translateY(t){return this.translateOnAxis(Za,t)}translateZ(t){return this.translateOnAxis(Ka,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt($i,_r,this.up):Pn.lookAt(_r,$i,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Pn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ja),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qc),os.child=t,this.dispatchEvent(os),os.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ja),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,Wc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Xc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),l=a(t.shapes),f=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}on.DEFAULT_UP=new it(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new it,In=new it,ls=new it,Ln=new it,wi=new it,bi=new it,$a=new it,cs=new it,hs=new it,us=new it,fs=new Fe,ds=new Fe,ps=new Fe;class gn{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),In.subVectors(n,e),ls.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(In),c=mn.dot(ls),u=In.dot(In),h=In.dot(ls),l=a*u-o*o;if(l===0)return r.set(0,0,0),null;const f=1/l,d=(u*c-o*h)*f,v=(a*h-o*c)*f;return r.set(1-d-v,v,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return fs.setScalar(0),ds.setScalar(0),ps.setScalar(0),fs.fromBufferAttribute(t,e),ds.fromBufferAttribute(t,n),ps.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fs,r.x),a.addScaledVector(ds,r.y),a.addScaledVector(ps,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),In.subVectors(t,e),mn.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),mn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;wi.subVectors(s,n),bi.subVectors(r,n),cs.subVectors(t,n);const c=wi.dot(cs),u=bi.dot(cs);if(c<=0&&u<=0)return e.copy(n);hs.subVectors(t,s);const h=wi.dot(hs),l=bi.dot(hs);if(h>=0&&l<=h)return e.copy(s);const f=c*l-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(wi,a);us.subVectors(t,r);const d=wi.dot(us),v=bi.dot(us);if(v>=0&&d<=v)return e.copy(r);const g=d*u-c*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(bi,o);const m=h*v-d*l;if(m<=0&&l-h>=0&&d-v>=0)return $a.subVectors(r,s),o=(l-h)/(l-h+(d-v)),e.copy(s).addScaledVector($a,o);const p=1/(m+g+f);return a=g*p,o=f*p,e.copy(n).addScaledVector(wi,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function ms(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=Ma(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ms(a,r,t+1/3),this.g=ms(a,r,t),this.b=ms(a,r,t-1/3)}return Ce.toWorkingColorSpace(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=il[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Ce.fromWorkingColorSpace(Qe.copy(this),t),Math.round(we(Qe.r*255,0,255))*65536+Math.round(we(Qe.g*255,0,255))*256+Math.round(we(Qe.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Qe.copy(this),e);const n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=fn){Ce.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,s=Qe.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(xr);const n=nr(Gn.h,xr.h,e),s=nr(Gn.s,xr.s,e),r=nr(Gn.l,xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new Re;Re.NAMES=il;let Yc=0;class hr extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Ui,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cs,this.blendDst=Ps,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ps&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ta extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new it,yr=new Me;let Zc=0;class wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ba,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ba&&(t.usage=this.usage),t}}class rl extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sl extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class bn extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kc=0;const un=new Ve,vs=new on,Ai=new it,cn=new cr,Qi=new cr,qe=new it;class Qn extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jo(t)?sl:rl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return vs.lookAt(t),vs.updateMatrix(),this.applyMatrix4(vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(cn.min,Qi.min),cn.expandByPoint(qe),qe.addVectors(cn.max,Qi.max),cn.expandByPoint(qe)):(cn.expandByPoint(Qi.min),cn.expandByPoint(Qi.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)qe.fromBufferAttribute(o,u),c&&(Ai.fromBufferAttribute(t,u),qe.add(Ai)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new it,c[D]=new it;const u=new it,h=new it,l=new it,f=new Me,d=new Me,v=new Me,g=new it,m=new it;function p(D,E,y){u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),l.fromBufferAttribute(n,y),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,E),v.fromBufferAttribute(r,y),h.sub(u),l.sub(u),d.sub(f),v.sub(f);const b=1/(d.x*v.y-v.x*d.y);!isFinite(b)||(g.copy(h).multiplyScalar(v.y).addScaledVector(l,-d.y).multiplyScalar(b),m.copy(l).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(b),o[D].add(g),o[E].add(g),o[y].add(g),c[D].add(m),c[E].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,E=x.length;D<E;++D){const y=x[D],b=y.start,O=y.count;for(let B=b,K=b+O;B<K;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new it,_=new it,A=new it,L=new it;function F(D){A.fromBufferAttribute(s,D),L.copy(A);const E=o[D];M.copy(E),M.sub(A.multiplyScalar(A.dot(E))).normalize(),_.crossVectors(L,E);const b=_.dot(c[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,b)}for(let D=0,E=x.length;D<E;++D){const y=x[D],b=y.start,O=y.count;for(let B=b,K=b+O;B<K;B+=3)F(t.getX(B+0)),F(t.getX(B+1)),F(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new it,r=new it,a=new it,o=new it,c=new it,u=new it,h=new it,l=new it;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),o.add(h),c.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,l=o.normalized,f=new u.constructor(c.length*h);let d=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?d=c[g]*o.data.stride+o.offset:d=c[g]*h;for(let p=0;p<h;p++)f[v++]=u[d++]}return new wn(f,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],u=t(c,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let h=0,l=u.length;h<l;h++){const f=u[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,f=u.length;l<f;l++){const d=u[l];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let f=0,d=l.length;f<d;f++)h.push(l[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new Ve,ni=new el,Mr=new Sa,Ja=new it,Er=new it,Sr=new it,Tr=new it,gs=new it,wr=new it,to=new it,br=new it;class xn extends on{constructor(t=new Qn,e=new Ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=o[c],l=r[c];h!==0&&(gs.fromBufferAttribute(l,t),a?wr.addScaledVector(gs,h):wr.addScaledVector(gs.sub(e),h))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Mr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Mr,Ja)===null||ni.origin.distanceToSquared(Ja)>(t.far-t.near)**2))&&(Qa.copy(r).invert(),ni.copy(t.ray).applyMatrix4(Qa),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,A=M;_<A;_+=3){const L=o.getX(_),F=o.getX(_+1),D=o.getX(_+2);s=Ar(this,p,t,n,u,h,l,L,F,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=Ar(this,a,t,n,u,h,l,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,A=M;_<A;_+=3){const L=_,F=_+1,D=_+2;s=Ar(this,p,t,n,u,h,l,L,F,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const x=m,M=m+1,_=m+2;s=Ar(this,a,t,n,u,h,l,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function jc(i,t,e,n,s,r,a,o){let c;if(t.side===an?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===jn,o),c===null)return null;br.copy(o),br.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(br);return u<e.near||u>e.far?null:{distance:u,point:br.clone(),object:i}}function Ar(i,t,e,n,s,r,a,o,c,u){i.getVertexPosition(o,Er),i.getVertexPosition(c,Sr),i.getVertexPosition(u,Tr);const h=jc(i,t,e,n,Er,Sr,Tr,to);if(h){const l=new it;gn.getBarycoord(to,Er,Sr,Tr,l),s&&(h.uv=gn.getInterpolatedAttribute(s,o,c,u,l,new Me)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,c,u,l,new Me)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,c,u,l,new it),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new it,materialIndex:0};gn.getNormal(Er,Sr,Tr,f.normal),h.face=f,h.barycoord=l}return h}class qi extends Qn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],h=[],l=[];let f=0,d=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new bn(u,3)),this.setAttribute("normal",new bn(h,3)),this.setAttribute("uv",new bn(l,2));function v(g,m,p,x,M,_,A,L,F,D,E){const y=_/F,b=A/D,O=_/2,B=A/2,K=L/2,j=F+1,at=D+1;let H=0,U=0;const st=new it;for(let nt=0;nt<at;nt++){const z=nt*b-B;for(let tt=0;tt<j;tt++){const G=tt*y-O;st[g]=G*x,st[m]=z*M,st[p]=K,u.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[p]=L>0?1:-1,h.push(st.x,st.y,st.z),l.push(tt/F),l.push(1-nt/D),H+=1}}for(let nt=0;nt<D;nt++)for(let z=0;z<F;z++){const tt=f+z+j*nt,G=f+z+j*(nt+1),R=f+(z+1)+j*(nt+1),C=f+(z+1)+j*nt;c.push(tt,G,C),c.push(G,R,C),U+=6}o.addGroup(d,U,E),d+=U,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=Wi(i[e]);for(const s in n)t[s]=n[s]}return t}function $c(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function al(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Qc={clone:Wi,merge:en};var Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=$c(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ol extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new it,eo=new Me,no=new Me;class hn extends ol{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,eo,no),e.subVectors(no,eo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ci=1;class eh extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Ri,Ci,t,e);s.layers=this.layers,this.add(s);const r=new hn(Ri,Ci,t,e);r.layers=this.layers,this.add(r);const a=new hn(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const o=new hn(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const c=new hn(Ri,Ci,t,e);c.layers=this.layers,this.add(c);const u=new hn(Ri,Ci,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const u of e)this.remove(u);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,u,h]=this.children,l=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,f,d),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ll extends rn{constructor(t,e,n,s,r,a,o,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nh extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ll(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qi(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Zn});r.uniforms.tEquirect.value=e;const a=new xn(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=Tn),new eh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Rr extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ih={type:"move"};class _s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(u,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],f=h.position.distanceTo(l.position),d=.02,v=.005;u.inputState.pinching&&f>d+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=d-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ih)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Rr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class wa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(t),this.density=e}clone(){return new wa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rh extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xs=new it,sh=new it,ah=new Ee;class Xn{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xs.subVectors(n,e).cross(sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ah.getNormalMatrix(t),s=this.coplanarPoint(xs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Sa,Cr=new it;class ba{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],u=s[4],h=s[5],l=s[6],f=s[7],d=s[8],v=s[9],g=s[10],m=s[11],p=s[12],x=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,f-u,m-d,_-p).normalize(),n[1].setComponents(c+r,f+u,m+d,_+p).normalize(),n[2].setComponents(c+a,f+h,m+v,_+x).normalize(),n[3].setComponents(c-a,f-h,m-v,_-x).normalize(),n[4].setComponents(c-o,f-l,m-g,_-M).normalize(),e===Fn)n[5].setComponents(c+o,f+l,m+g,_+M).normalize();else if(e===kr)n[5].setComponents(o,l,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cl extends rn{constructor(t,e,n,s,r,a,o,c,u,h=Fi){if(h!==Fi&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fi&&(n=fi),n===void 0&&h===ki&&(n=Hi),super(null,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ea(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zr extends Qn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,l=t/o,f=e/c,d=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const x=p*f-a;for(let M=0;M<u;M++){const _=M*l-r;v.push(_,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const M=x+u*p,_=x+u*(p+1),A=x+1+u*(p+1),L=x+1+u*p;d.push(M,_,L),d.push(_,A,L)}this.setIndex(d),this.setAttribute("position",new bn(v,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Aa extends Qn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const h=[],l=new it,f=new it,d=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const L=A/e;l.x=-t*Math.cos(s+L*r)*Math.sin(a+M*o),l.y=t*Math.cos(a+M*o),l.z=t*Math.sin(s+L*r)*Math.sin(a+M*o),v.push(l.x,l.y,l.z),f.copy(l).normalize(),g.push(f.x,f.y,f.z),m.push(L+_,1-M),x.push(u++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],_=h[p][x],A=h[p+1][x],L=h[p+1][x+1];(p!==0||a>0)&&d.push(M,_,L),(p!==n-1||c<Math.PI)&&d.push(_,A,L)}this.setIndex(d),this.setAttribute("position",new bn(v,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hl extends hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oh extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lh extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const io={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ch{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,f=u.length;l<f;l+=2){const d=u[l],v=u[l+1];if(d.global&&(d.lastIndex=0),d.test(h))return v}return null}}}const hh=new ch;class Ra{constructor(t){this.manager=t!==void 0?t:hh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";class uh extends Ra{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=io.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ar("img");function c(){h(),io.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class ul extends Ra{constructor(t){super(t)}load(t,e,n,s){const r=new rn,a=new uh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class fl extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ys=new Ve,ro=new it,so=new it;class fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ro.setFromMatrixPosition(t.matrixWorld),e.position.copy(ro),so.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(so),e.updateMatrixWorld(),ys.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ys),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ys)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ao=new Ve,Ji=new it,Ms=new it;class dh extends fh{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new it(1,0,0),new it(-1,0,0),new it(0,0,1),new it(0,0,-1),new it(0,1,0),new it(0,-1,0)],this._cubeUps=[new it(0,1,0),new it(0,1,0),new it(0,1,0),new it(0,1,0),new it(0,0,1),new it(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ji),Ms.copy(n.position),Ms.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ms),n.updateMatrixWorld(),s.makeTranslation(-Ji.x,-Ji.y,-Ji.z),ao.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao)}}class ph extends fl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class mh extends ol{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vh extends fl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class gh extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class oo{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=we(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _h extends mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function lo(i,t,e,n){const s=xh(n);switch(e){case Wo:return i*t;case qo:return i*t;case Yo:return i*t*2;case Zo:return i*t/s.components*s.byteLength;case _a:return i*t/s.components*s.byteLength;case Ko:return i*t*2/s.components*s.byteLength;case xa:return i*t*2/s.components*s.byteLength;case Xo:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case ya:return i*t*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ks:case Ws:return Math.max(i,16)*Math.max(t,8)/4;case Hs:case Gs:return Math.max(i,8)*Math.max(t,8)/2;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ks:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case js:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $s:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qs:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Js:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zr:case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jo:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ua:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xh(i){switch(i){case On:case Ho:return{byteLength:1,components:1};case rr:case ko:case lr:return{byteLength:2,components:1};case va:case ga:return{byteLength:2,components:4};case fi:case ma:case Un:return{byteLength:4,components:1};case Go:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yh(i){const t=new WeakMap;function e(o,c){const u=o.array,h=o.usage,l=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),o.onUploadCallback();let d;if(u instanceof Float32Array)d=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=i.SHORT;else if(u instanceof Uint32Array)d=i.UNSIGNED_INT;else if(u instanceof Int32Array)d=i.INT;else if(u instanceof Int8Array)d=i.BYTE;else if(u instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,o),l.length===0)i.bufferSubData(u,0,h);else{l.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<l.length;d++){const v=l[f],g=l[d];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,l[f]=g)}l.length=f+1;for(let d=0,v=l.length;d<v;d++){const g=l[d];i.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:s,remove:r,update:a}}var Mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ah=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ch=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$h="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,du=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Su=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Au=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Du=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ef=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:Mh,alphahash_pars_fragment:Eh,alphamap_fragment:Sh,alphamap_pars_fragment:Th,alphatest_fragment:wh,alphatest_pars_fragment:bh,aomap_fragment:Ah,aomap_pars_fragment:Rh,batching_pars_vertex:Ch,batching_vertex:Ph,begin_vertex:Ih,beginnormal_vertex:Lh,bsdfs:Dh,iridescence_fragment:Nh,bumpmap_pars_fragment:Uh,clipping_planes_fragment:Fh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:Oh,clipping_planes_vertex:zh,color_fragment:Vh,color_pars_fragment:Hh,color_pars_vertex:kh,color_vertex:Gh,common:Wh,cube_uv_reflection_fragment:Xh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Yh,displacementmap_vertex:Zh,emissivemap_fragment:Kh,emissivemap_pars_fragment:jh,colorspace_fragment:$h,colorspace_pars_fragment:Qh,envmap_fragment:Jh,envmap_common_pars_fragment:tu,envmap_pars_fragment:eu,envmap_pars_vertex:nu,envmap_physical_pars_fragment:du,envmap_vertex:iu,fog_vertex:ru,fog_pars_vertex:su,fog_fragment:au,fog_pars_fragment:ou,gradientmap_pars_fragment:lu,lightmap_pars_fragment:cu,lights_lambert_fragment:hu,lights_lambert_pars_fragment:uu,lights_pars_begin:fu,lights_toon_fragment:pu,lights_toon_pars_fragment:mu,lights_phong_fragment:vu,lights_phong_pars_fragment:gu,lights_physical_fragment:_u,lights_physical_pars_fragment:xu,lights_fragment_begin:yu,lights_fragment_maps:Mu,lights_fragment_end:Eu,logdepthbuf_fragment:Su,logdepthbuf_pars_fragment:Tu,logdepthbuf_pars_vertex:wu,logdepthbuf_vertex:bu,map_fragment:Au,map_pars_fragment:Ru,map_particle_fragment:Cu,map_particle_pars_fragment:Pu,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Lu,morphinstance_vertex:Du,morphcolor_vertex:Nu,morphnormal_vertex:Uu,morphtarget_pars_vertex:Fu,morphtarget_vertex:Bu,normal_fragment_begin:Ou,normal_fragment_maps:zu,normal_pars_fragment:Vu,normal_pars_vertex:Hu,normal_vertex:ku,normalmap_pars_fragment:Gu,clearcoat_normal_fragment_begin:Wu,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:qu,iridescence_pars_fragment:Yu,opaque_fragment:Zu,packing:Ku,premultiplied_alpha_fragment:ju,project_vertex:$u,dithering_fragment:Qu,dithering_pars_fragment:Ju,roughnessmap_fragment:tf,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:rf,shadowmap_vertex:sf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:ff,tonemapping_fragment:df,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:vf,uv_pars_fragment:gf,uv_pars_vertex:_f,uv_vertex:xf,worldpos_vertex:yf,background_vert:Mf,background_frag:Ef,backgroundCube_vert:Sf,backgroundCube_frag:Tf,cube_vert:wf,cube_frag:bf,depth_vert:Af,depth_frag:Rf,distanceRGBA_vert:Cf,distanceRGBA_frag:Pf,equirect_vert:If,equirect_frag:Lf,linedashed_vert:Df,linedashed_frag:Nf,meshbasic_vert:Uf,meshbasic_frag:Ff,meshlambert_vert:Bf,meshlambert_frag:Of,meshmatcap_vert:zf,meshmatcap_frag:Vf,meshnormal_vert:Hf,meshnormal_frag:kf,meshphong_vert:Gf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:qf,meshtoon_vert:Yf,meshtoon_frag:Zf,points_vert:Kf,points_frag:jf,shadow_vert:$f,shadow_frag:Qf,sprite_vert:Jf,sprite_frag:td},jt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},envMapRotation:{value:new Ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}},Sn={basic:{uniforms:en([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:en([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:en([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:en([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:en([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:en([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:en([jt.points,jt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:en([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:en([jt.common,jt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:en([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:en([jt.sprite,jt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ee}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:en([jt.common,jt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:en([jt.lights,jt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Sn.physical={uniforms:en([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Pr={r:0,b:0,g:0},ri=new An,ed=new Ve;function nd(i,t,e,n,s,r,a){const o=new Re(0);let c=r===!0?0:1,u,h,l=null,f=0,d=null;function v(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function g(M){let _=!1;const A=v(M);A===null?p(o,c):A&&A.isColor&&(p(A,1),_=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const A=v(_);A&&(A.isCubeTexture||A.mapping===Yr)?(h===void 0&&(h=new xn(new qi(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Wi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,F,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(_.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ed.makeRotationFromEuler(ri)),h.material.toneMapped=Ce.getTransfer(A.colorSpace)!==Ne,(l!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,l=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new xn(new Zr(2,2),new $n({name:"BackgroundMaterial",uniforms:Wi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Ce.getTransfer(A.colorSpace)!==Ne,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(l!==A||f!==A.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,l=A,f=A.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function p(M,_){M.getRGB(Pr,al(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,_,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:g,addToRenderList:m,dispose:x}}function id(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,b,O,B,K){let j=!1;const at=l(B,O,b);r!==at&&(r=at,u(r.object)),j=d(y,B,O,K),j&&v(y,B,O,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,_(y,b,O,B),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function u(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function l(y,b,O){const B=O.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let j=K[b.id];j===void 0&&(j={},K[b.id]=j);let at=j[B];return at===void 0&&(at=f(c()),j[B]=at),at}function f(y){const b=[],O=[],B=[];for(let K=0;K<e;K++)b[K]=0,O[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,b,O,B){const K=r.attributes,j=b.attributes;let at=0;const H=O.getAttributes();for(const U in H)if(H[U].location>=0){const nt=K[U];let z=j[U];if(z===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(z=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(z=y.instanceColor)),nt===void 0||nt.attribute!==z||z&&nt.data!==z.data)return!0;at++}return r.attributesNum!==at||r.index!==B}function v(y,b,O,B){const K={},j=b.attributes;let at=0;const H=O.getAttributes();for(const U in H)if(H[U].location>=0){let nt=j[U];nt===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor));const z={};z.attribute=nt,nt&&nt.data&&(z.data=nt.data),K[U]=z,at++}r.attributes=K,r.attributesNum=at,r.index=B}function g(){const y=r.newAttributes;for(let b=0,O=y.length;b<O;b++)y[b]=0}function m(y){p(y,0)}function p(y,b){const O=r.newAttributes,B=r.enabledAttributes,K=r.attributeDivisors;O[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),K[y]!==b&&(i.vertexAttribDivisor(y,b),K[y]=b)}function x(){const y=r.newAttributes,b=r.enabledAttributes;for(let O=0,B=b.length;O<B;O++)b[O]!==y[O]&&(i.disableVertexAttribArray(O),b[O]=0)}function M(y,b,O,B,K,j,at){at===!0?i.vertexAttribIPointer(y,b,O,K,j):i.vertexAttribPointer(y,b,O,B,K,j)}function _(y,b,O,B){g();const K=B.attributes,j=O.getAttributes(),at=b.defaultAttributeValues;for(const H in j){const U=j[H];if(U.location>=0){let st=K[H];if(st===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){const nt=st.normalized,z=st.itemSize,tt=t.get(st);if(tt===void 0)continue;const G=tt.buffer,R=tt.type,C=tt.bytesPerElement,W=R===i.INT||R===i.UNSIGNED_INT||st.gpuType===ma;if(st.isInterleavedBufferAttribute){const Z=st.data,rt=Z.stride,X=st.offset;if(Z.isInstancedInterleavedBuffer){for(let et=0;et<U.locationSize;et++)p(U.location+et,Z.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let et=0;et<U.locationSize;et++)m(U.location+et);i.bindBuffer(i.ARRAY_BUFFER,G);for(let et=0;et<U.locationSize;et++)M(U.location+et,z/U.locationSize,R,nt,rt*C,(X+z/U.locationSize*et)*C,W)}else{if(st.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)p(U.location+Z,st.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z);i.bindBuffer(i.ARRAY_BUFFER,G);for(let Z=0;Z<U.locationSize;Z++)M(U.location+Z,z/U.locationSize,R,nt,z*C,z/U.locationSize*Z*C,W)}}else if(at!==void 0){const nt=at[H];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(U.location,nt);break;case 3:i.vertexAttrib3fv(U.location,nt);break;case 4:i.vertexAttrib4fv(U.location,nt);break;default:i.vertexAttrib1fv(U.location,nt)}}}}x()}function A(){D();for(const y in n){const b=n[y];for(const O in b){const B=b[O];for(const K in B)h(B[K].object),delete B[K];delete b[O]}delete n[y]}}function L(y){if(n[y.id]===void 0)return;const b=n[y.id];for(const O in b){const B=b[O];for(const K in B)h(B[K].object),delete B[K];delete b[O]}delete n[y.id]}function F(y){for(const b in n){const O=n[b];if(O[y.id]===void 0)continue;const B=O[y.id];for(const K in B)h(B[K].object),delete B[K];delete O[y.id]}}function D(){E(),a=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function rd(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function o(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let d=0;for(let v=0;v<l;v++)d+=h[v];e.update(d,n,1)}function c(u,h,l,f){if(l===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<u.length;v++)a(u[v],h[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,l);let v=0;for(let g=0;g<l;g++)v+=h[g]*f[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(F){return!(F!==_n&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){const D=F===lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==On&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Un&&!D)}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:L}}function ad(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Xn,o=new Ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){const d=l.length!==0||f||n!==0||s;return s=f,n=l.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,f){e=h(l,f,0)},this.setState=function(l,f,d){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,p=i.get(l);if(!s||v===null||v.length===0||r&&!m)r?h(null):u();else{const x=r?0:n,M=x*4;let _=p.clippingState||null;c.value=_,_=h(v,f,M,d);for(let A=0;A!==M;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,f,d,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const p=d+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==g;++M,_+=4)a.copy(l[M]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function od(i){let t=new WeakMap;function e(a,o){return o===Os?a.mapping=zi:o===zs&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Os||o===zs)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new nh(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Di=4,co=[.125,.215,.35,.446,.526,.582],ci=20,Es=new mh,ho=new Re;let Ss=null,Ts=0,ws=0,bs=!1;const oi=(1+Math.sqrt(5))/2,Pi=1/oi,uo=[new it(-oi,Pi,0),new it(oi,Pi,0),new it(-Pi,0,oi),new it(Pi,0,oi),new it(0,oi,-Pi),new it(0,oi,Pi),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],ld=new it;class fo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=ld}=r;Ss=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ss,Ts,ws),this._renderer.xr.enabled=bs,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ss=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:lr,format:_n,colorSpace:Gi,depthBuffer:!1},s=po(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cd(r)),this._blurMaterial=hd(r,t,e)}return s}_compileMaterial(t){const e=new xn(this._lodPlanes[0],t);this._renderer.compile(e,Es)}_sceneToCubeUV(t,e,n,s,r){const c=new hn(90,1,e,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,d=l.toneMapping;l.getClearColor(ho),l.toneMapping=Kn,l.autoClear=!1;const v=new Ta({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new xn(new qi,v);let m=!1;const p=t.background;p?p.isColor&&(v.color.copy(p),t.background=null,m=!0):(v.color.copy(ho),m=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):M===1?(c.up.set(0,0,u[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const _=this._cubeSize;Ir(s,M*_,x>2?_:0,_,_),l.setRenderTarget(s),m&&l.render(g,c),l.render(t,c)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===zi||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Es)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uo[(s-r-1)%uo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new xn(this._lodPlanes[s],u),f=u.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ci-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):ci;m>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let x=0;for(let F=0;F<ci;++F){const D=F/g,E=Math.exp(-D*D/2);p.push(E),F===0?x+=E:F<m&&(x+=2*E)}for(let F=0;F<p.length;F++)p[F]=p[F]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const _=this._sizeLods[s],A=3*_*(s>M-Di?s-M+Di:0),L=4*(this._cubeSize-_);Ir(e,A,L,3*_,2*_),c.setRenderTarget(e),c.render(l,Es)}}function cd(i){const t=[],e=[],n=[];let s=i;const r=i-Di+1+co.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Di?c=co[a-i+Di-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,l=1+u,f=[h,h,l,h,l,l,h,h,l,l,h,l],d=6,v=6,g=3,m=2,p=1,x=new Float32Array(g*v*d),M=new Float32Array(m*v*d),_=new Float32Array(p*v*d);for(let L=0;L<d;L++){const F=L%3*2/3-1,D=L>2?0:-1,E=[F,D,0,F+2/3,D,0,F+2/3,D+1,0,F,D,0,F+2/3,D+1,0,F,D+1,0];x.set(E,g*v*L),M.set(f,m*v*L);const y=[L,L,L,L,L,L];_.set(y,p*v*L)}const A=new Qn;A.setAttribute("position",new wn(x,g)),A.setAttribute("uv",new wn(M,m)),A.setAttribute("faceIndex",new wn(_,p)),t.push(A),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function po(i,t,e){const n=new di(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hd(i,t,e){const n=new Float32Array(ci),s=new it(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function mo(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function vo(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ud(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===Os||c===zs,h=c===zi||c===Vi;if(u||h){let l=t.get(o);const f=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new fo(i)),l=u?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const d=o.image;return u&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new fo(i)),l=u?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function s(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function fd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ai("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dd(i,t,e,n){const s={},r=new WeakMap;function a(l){const f=l.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(l,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(l){const f=l.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function u(l){const f=[],d=l.index,v=l.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let M=0,_=x.length;M<_;M+=3){const A=x[M+0],L=x[M+1],F=x[M+2];f.push(A,L,L,F,F,A)}}else if(v!==void 0){const x=v.array;g=v.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const A=M+0,L=M+1,F=M+2;f.push(A,L,L,F,F,A)}}else return;const m=new(Jo(f)?sl:rl)(f,1);m.version=g;const p=r.get(l);p&&t.remove(p),r.set(l,m)}function h(l){const f=r.get(l);if(f){const d=l.index;d!==null&&f.version<d.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function pd(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function u(f,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,f*a,v),e.update(d,n,v))}function h(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,n,1)}function l(f,d,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,v);let p=0;for(let x=0;x<v;x++)p+=d[x]*g[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function md(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vd(i,t,e){const n=new WeakMap,s=new Fe;function r(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==l){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let A=o.attributes.position.count*_,L=1;A>t.maxTextureSize&&(L=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const F=new Float32Array(A*L*4*l),D=new tl(F,A,L,l);D.type=Un,D.needsUpdate=!0;const E=_*4;for(let b=0;b<l;b++){const O=p[b],B=x[b],K=M[b],j=A*L*4*b;for(let at=0;at<O.count;at++){const H=at*E;v===!0&&(s.fromBufferAttribute(O,at),F[j+H+0]=s.x,F[j+H+1]=s.y,F[j+H+2]=s.z,F[j+H+3]=0),g===!0&&(s.fromBufferAttribute(B,at),F[j+H+4]=s.x,F[j+H+5]=s.y,F[j+H+6]=s.z,F[j+H+7]=0),m===!0&&(s.fromBufferAttribute(K,at),F[j+H+8]=s.x,F[j+H+9]=s.y,F[j+H+10]=s.z,F[j+H+11]=K.itemSize===4?s.w:1)}}f={count:l,texture:D,size:new Me(A,L)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function gd(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return l}function a(){s=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const pl=new rn,go=new cl(1,1),ml=new tl,vl=new zc,gl=new ll,_o=[],xo=[],yo=new Float32Array(16),Mo=new Float32Array(9),Eo=new Float32Array(4);function Yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_o[s];if(r===void 0&&(r=new Float32Array(s),_o[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Kr(i,t){let e=xo[t];e===void 0&&(e=new Int32Array(t),xo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function Md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Ed(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Eo.set(n),i.uniformMatrix2fv(this.addr,!1,Eo),We(e,n)}}function Sd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Mo.set(n),i.uniformMatrix3fv(this.addr,!1,Mo),We(e,n)}}function Td(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;yo.set(n),i.uniformMatrix4fv(this.addr,!1,yo),We(e,n)}}function wd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function Rd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function Cd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function Id(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function Ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function Dd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(go.compareFunction=Qo,r=go):r=pl,e.setTexture2D(t||r,s)}function Nd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vl,s)}function Ud(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gl,s)}function Fd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ml,s)}function Bd(i){switch(i){case 5126:return _d;case 35664:return xd;case 35665:return yd;case 35666:return Md;case 35674:return Ed;case 35675:return Sd;case 35676:return Td;case 5124:case 35670:return wd;case 35667:case 35671:return bd;case 35668:case 35672:return Ad;case 35669:case 35673:return Rd;case 5125:return Cd;case 36294:return Pd;case 36295:return Id;case 36296:return Ld;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Ud;case 36289:case 36303:case 36311:case 36292:return Fd}}function Od(i,t){i.uniform1fv(this.addr,t)}function zd(i,t){const e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function Vd(i,t){const e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function Hd(i,t){const e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function kd(i,t){const e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gd(i,t){const e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wd(i,t){const e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xd(i,t){i.uniform1iv(this.addr,t)}function qd(i,t){i.uniform2iv(this.addr,t)}function Yd(i,t){i.uniform3iv(this.addr,t)}function Zd(i,t){i.uniform4iv(this.addr,t)}function Kd(i,t){i.uniform1uiv(this.addr,t)}function jd(i,t){i.uniform2uiv(this.addr,t)}function $d(i,t){i.uniform3uiv(this.addr,t)}function Qd(i,t){i.uniform4uiv(this.addr,t)}function Jd(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||pl,r[a])}function tp(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vl,r[a])}function ep(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gl,r[a])}function np(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ml,r[a])}function ip(i){switch(i){case 5126:return Od;case 35664:return zd;case 35665:return Vd;case 35666:return Hd;case 35674:return kd;case 35675:return Gd;case 35676:return Wd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Zd;case 5125:return Kd;case 36294:return jd;case 36295:return $d;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return Jd;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return np}}class rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bd(e.type)}}class sp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ip(e.type)}}class ap{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const As=/(\w+)(\])?(\[|\.)?/g;function So(i,t){i.seq.push(t),i.map[t.id]=t}function op(i,t,e){const n=i.name,s=n.length;for(As.lastIndex=0;;){const r=As.exec(n),a=As.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){So(e,u===void 0?new rp(o,i,t):new sp(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new ap(o),So(e,l)),e=l}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);op(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function To(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lp=37297;let cp=0;function hp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const wo=new Ee;function up(i){Ce._getMatrix(wo,Ce.workingColorSpace,i);const t=`mat3( ${wo.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hp(i.getShaderSource(t),a)}else return s}function fp(i,t){const e=up(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dp(i,t){let e;switch(t){case Kl:e="Linear";break;case jl:e="Reinhard";break;case $l:e="Cineon";break;case Ql:e="ACESFilmic";break;case tc:e="AgX";break;case ec:e="Neutral";break;case Jl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new it;function pp(){Ce.getLuminanceCoefficients(Lr);const i=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function vp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function tr(i){return i!==""}function Ao(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ro(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _p=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(i){return i.replace(_p,yp)}const xp=new Map;function yp(i,t){let e=Se[t];if(e===void 0){const n=xp.get(t);if(n!==void 0)e=Se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return da(e)}const Mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(i){return i.replace(Mp,Ep)}function Ep(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Po(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function Tp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Vi:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function bp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case Yl:t="ENVMAP_BLENDING_MIX";break;case Zl:t="ENVMAP_BLENDING_ADD";break}return t}function Ap(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Sp(e),u=Tp(e),h=wp(e),l=bp(e),f=Ap(e),d=mp(e),v=vp(r),g=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[Po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Se.tonemapping_pars_fragment:"",e.toneMapping!==Kn?dp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,fp("linearToOutputTexel",e.outputColorSpace),pp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),a=da(a),a=Ao(a,e),a=Ro(a,e),o=da(o),o=Ao(o,e),o=Ro(o,e),a=Co(a),o=Co(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,_=x+p+o,A=To(s,s.VERTEX_SHADER,M),L=To(s,s.FRAGMENT_SHADER,_);s.attachShader(g,A),s.attachShader(g,L),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function F(b){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(A).trim(),K=s.getShaderInfoLog(L).trim();let j=!0,at=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,L);else{const H=bo(s,A,"vertex"),U=bo(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+O+`
`+H+`
`+U)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||K==="")&&(at=!1);at&&(b.diagnostics={runnable:j,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(A),s.deleteShader(L),D=new Vr(s,g),E=gp(s,g)}let D;this.getUniforms=function(){return D===void 0&&F(this),D};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,lp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=L,this}let Cp=0;class Pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ip(t),e.set(t,n)),n}}class Ip{constructor(t){this.id=Cp++,this.code=t,this.usedTimes=0}}function Lp(i,t,e,n,s,r,a){const o=new nl,c=new Pp,u=new Set,h=[],l=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,y,b,O,B){const K=O.fog,j=B.geometry,at=E.isMeshStandardMaterial?O.environment:null,H=(E.isMeshStandardMaterial?e:t).get(E.envMap||at),U=!!H&&H.mapping===Yr?H.image.height:null,st=v[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const nt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,z=nt!==void 0?nt.length:0;let tt=0;j.morphAttributes.position!==void 0&&(tt=1),j.morphAttributes.normal!==void 0&&(tt=2),j.morphAttributes.color!==void 0&&(tt=3);let G,R,C,W;if(st){const de=Sn[st];G=de.vertexShader,R=de.fragmentShader}else G=E.vertexShader,R=E.fragmentShader,c.update(E),C=c.getVertexShaderID(E),W=c.getFragmentShaderID(E);const Z=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),X=B.isInstancedMesh===!0,et=B.isBatchedMesh===!0,_t=!!E.map,Ut=!!E.matcap,yt=!!H,N=!!E.aoMap,vt=!!E.lightMap,ut=!!E.bumpMap,Zt=!!E.normalMap,St=!!E.displacementMap,le=!!E.emissiveMap,gt=!!E.metalnessMap,I=!!E.roughnessMap,S=E.anisotropy>0,Q=E.clearcoat>0,dt=E.dispersion>0,pt=E.iridescence>0,ft=E.sheen>0,Rt=E.transmission>0,Ct=S&&!!E.anisotropyMap,Vt=Q&&!!E.clearcoatMap,ve=Q&&!!E.clearcoatNormalMap,bt=Q&&!!E.clearcoatRoughnessMap,Kt=pt&&!!E.iridescenceMap,re=pt&&!!E.iridescenceThicknessMap,ae=ft&&!!E.sheenColorMap,$t=ft&&!!E.sheenRoughnessMap,ge=!!E.specularMap,he=!!E.specularColorMap,ye=!!E.specularIntensityMap,Y=Rt&&!!E.transmissionMap,Ot=Rt&&!!E.thicknessMap,ht=!!E.gradientMap,xt=!!E.alphaMap,Wt=E.alphaTest>0,Xt=!!E.alphaHash,fe=!!E.extensions;let Pe=Kn;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const Be={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:G,fragmentShader:R,defines:E.defines,customVertexShaderID:C,customFragmentShaderID:W,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:et,batchingColor:et&&B._colorsTexture!==null,instancing:X,instancingColor:X&&B.instanceColor!==null,instancingMorph:X&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Gi,alphaToCoverage:!!E.alphaToCoverage,map:_t,matcap:Ut,envMap:yt,envMapMode:yt&&H.mapping,envMapCubeUVHeight:U,aoMap:N,lightMap:vt,bumpMap:ut,normalMap:Zt,displacementMap:f&&St,emissiveMap:le,normalMapObjectSpace:Zt&&E.normalMapType===sc,normalMapTangentSpace:Zt&&E.normalMapType===$o,metalnessMap:gt,roughnessMap:I,anisotropy:S,anisotropyMap:Ct,clearcoat:Q,clearcoatMap:Vt,clearcoatNormalMap:ve,clearcoatRoughnessMap:bt,dispersion:dt,iridescence:pt,iridescenceMap:Kt,iridescenceThicknessMap:re,sheen:ft,sheenColorMap:ae,sheenRoughnessMap:$t,specularMap:ge,specularColorMap:he,specularIntensityMap:ye,transmission:Rt,transmissionMap:Y,thicknessMap:Ot,gradientMap:ht,opaque:E.transparent===!1&&E.blending===Ui&&E.alphaToCoverage===!1,alphaMap:xt,alphaTest:Wt,alphaHash:Xt,combine:E.combine,mapUv:_t&&g(E.map.channel),aoMapUv:N&&g(E.aoMap.channel),lightMapUv:vt&&g(E.lightMap.channel),bumpMapUv:ut&&g(E.bumpMap.channel),normalMapUv:Zt&&g(E.normalMap.channel),displacementMapUv:St&&g(E.displacementMap.channel),emissiveMapUv:le&&g(E.emissiveMap.channel),metalnessMapUv:gt&&g(E.metalnessMap.channel),roughnessMapUv:I&&g(E.roughnessMap.channel),anisotropyMapUv:Ct&&g(E.anisotropyMap.channel),clearcoatMapUv:Vt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:$t&&g(E.sheenRoughnessMap.channel),specularMapUv:ge&&g(E.specularMap.channel),specularColorMapUv:he&&g(E.specularColorMap.channel),specularIntensityMapUv:ye&&g(E.specularIntensityMap.channel),transmissionMapUv:Y&&g(E.transmissionMap.channel),thicknessMapUv:Ot&&g(E.thicknessMap.channel),alphaMapUv:xt&&g(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Zt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(_t||xt),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:rt,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:tt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:_t&&E.map.isVideoTexture===!0&&Ce.getTransfer(E.map.colorSpace)===Ne,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(E.emissiveMap.colorSpace)===Ne,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nn,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:fe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&E.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=u.has(1),Be.vertexUv2s=u.has(2),Be.vertexUv3s=u.has(3),u.clear(),Be}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)y.push(b),y.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(x(y,E),M(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const y=v[E.type];let b;if(y){const O=Sn[y];b=Qc.clone(O.uniforms)}else b=E.uniforms;return b}function A(E,y){let b;for(let O=0,B=h.length;O<B;O++){const K=h[O];if(K.cacheKey===y){b=K,++b.usedTimes;break}}return b===void 0&&(b=new Rp(i,y,E,r),h.push(b)),b}function L(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function F(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:L,releaseShaderCache:F,programs:h,dispose:D}}function Dp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Np(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Io(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,f,d,v,g,m){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:f,material:d,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=p):(p.id=l.id,p.object=l,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=l.renderOrder,p.z=g,p.group=m),t++,p}function o(l,f,d,v,g,m){const p=a(l,f,d,v,g,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(l,f,d,v,g,m){const p=a(l,f,d,v,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function u(l,f){e.length>1&&e.sort(l||Np),n.length>1&&n.sort(f||Io),s.length>1&&s.sort(f||Io)}function h(){for(let l=t,f=i.length;l<f;l++){const d=i[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:u}}function Up(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Lo,i.set(n,[a])):s>=r.length?(a=new Lo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new it,color:new Re};break;case"SpotLight":e={position:new it,direction:new it,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new Re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":e={color:new Re,position:new it,halfWidth:new it,halfHeight:new it};break}return i[t.id]=e,e}}}function Bp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Op=0;function zp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vp(i){const t=new Fp,e=Bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new it);const s=new it,r=new Ve,a=new Ve;function o(u){let h=0,l=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,v=0,g=0,m=0,p=0,x=0,M=0,_=0,A=0,L=0,F=0;u.sort(zp);for(let E=0,y=u.length;E<y;E++){const b=u[E],O=b.color,B=b.intensity,K=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=O.r*B,l+=O.g*B,f+=O.b*B;else if(b.isLightProbe){for(let at=0;at<9;at++)n.probe[at].addScaledVector(b.sh.coefficients[at],B);F++}else if(b.isDirectionalLight){const at=t.get(b);if(at.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,U=e.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,n.directionalShadow[d]=U,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=b.shadow.matrix,x++}n.directional[d]=at,d++}else if(b.isSpotLight){const at=t.get(b);at.position.setFromMatrixPosition(b.matrixWorld),at.color.copy(O).multiplyScalar(B),at.distance=K,at.coneCos=Math.cos(b.angle),at.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),at.decay=b.decay,n.spot[g]=at;const H=b.shadow;if(b.map&&(n.spotLightMap[A]=b.map,A++,H.updateMatrices(b),b.castShadow&&L++),n.spotLightMatrix[g]=H.matrix,b.castShadow){const U=e.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,n.spotShadow[g]=U,n.spotShadowMap[g]=j,_++}g++}else if(b.isRectAreaLight){const at=t.get(b);at.color.copy(O).multiplyScalar(B),at.halfWidth.set(b.width*.5,0,0),at.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=at,m++}else if(b.isPointLight){const at=t.get(b);if(at.color.copy(b.color).multiplyScalar(b.intensity),at.distance=b.distance,at.decay=b.decay,b.castShadow){const H=b.shadow,U=e.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,n.pointShadow[v]=U,n.pointShadowMap[v]=j,n.pointShadowMatrix[v]=b.shadow.matrix,M++}n.point[v]=at,v++}else if(b.isHemisphereLight){const at=t.get(b);at.skyColor.copy(b.color).multiplyScalar(B),at.groundColor.copy(b.groundColor).multiplyScalar(B),n.hemi[p]=at,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=jt.LTC_FLOAT_1,n.rectAreaLTC2=jt.LTC_FLOAT_2):(n.rectAreaLTC1=jt.LTC_HALF_1,n.rectAreaLTC2=jt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==v||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==x||D.numPointShadows!==M||D.numSpotShadows!==_||D.numSpotMaps!==A||D.numLightProbes!==F)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-L,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=F,D.directionalLength=d,D.pointLength=v,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=x,D.numPointShadows=M,D.numSpotShadows=_,D.numSpotMaps=A,D.numLightProbes=F,n.version=Op++)}function c(u,h){let l=0,f=0,d=0,v=0,g=0;const m=h.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const M=u[p];if(M.isDirectionalLight){const _=n.directional[l];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),l++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Do(i){const t=new Vp(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Hp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Do(i),t.set(s,[o])):r>=a.length?(o=new Do(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wp(i,t,e){let n=new ba;const s=new Me,r=new Me,a=new Fe,o=new oh({depthPacking:rc}),c=new lh,u={},h=e.maxTextureSize,l={[jn]:an,[an]:jn,[Nn]:Nn},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:kp,fragmentShader:Gp}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Qn;v.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new xn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let p=this.type;this.render=function(L,F,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Zn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==Dn&&this.type===Dn,K=p===Dn&&this.type!==Dn;for(let j=0,at=L.length;j<at;j++){const H=L[j],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const st=U.getFrameExtents();if(s.multiply(st),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,U.mapSize.y=r.y)),U.map===null||B===!0||K===!0){const z=this.type!==Dn?{minFilter:yn,magFilter:yn}:{};U.map!==null&&U.map.dispose(),U.map=new di(s.x,s.y,z),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const nt=U.getViewportCount();for(let z=0;z<nt;z++){const tt=U.getViewport(z);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),O.viewport(a),U.updateMatrices(H,z),n=U.getFrustum(),_(F,D,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Dn&&x(U,D),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,b)};function x(L,F){const D=t.update(g);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new di(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(F,null,D,f,g,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(F,null,D,d,g,null)}function M(L,F,D,E){let y=null;const b=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(b!==void 0)y=b;else if(y=D.isPointLight===!0?c:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const O=y.uuid,B=F.uuid;let K=u[O];K===void 0&&(K={},u[O]=K);let j=K[B];j===void 0&&(j=y.clone(),K[B]=j,F.addEventListener("dispose",A)),y=j}if(y.visible=F.visible,y.wireframe=F.wireframe,E===Dn?y.side=F.shadowSide!==null?F.shadowSide:F.side:y.side=F.shadowSide!==null?F.shadowSide:l[F.side],y.alphaMap=F.alphaMap,y.alphaTest=F.alphaTest,y.map=F.map,y.clipShadows=F.clipShadows,y.clippingPlanes=F.clippingPlanes,y.clipIntersection=F.clipIntersection,y.displacementMap=F.displacementMap,y.displacementScale=F.displacementScale,y.displacementBias=F.displacementBias,y.wireframeLinewidth=F.wireframeLinewidth,y.linewidth=F.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=D}return y}function _(L,F,D,E,y){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===Dn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const B=t.update(L),K=L.material;if(Array.isArray(K)){const j=B.groups;for(let at=0,H=j.length;at<H;at++){const U=j[at],st=K[U.materialIndex];if(st&&st.visible){const nt=M(L,st,E,y);L.onBeforeShadow(i,L,F,D,B,nt,U),i.renderBufferDirect(D,null,B,nt,L,U),L.onAfterShadow(i,L,F,D,B,nt,U)}}}else if(K.visible){const j=M(L,K,E,y);L.onBeforeShadow(i,L,F,D,B,j,null),i.renderBufferDirect(D,null,B,j,L,null),L.onAfterShadow(i,L,F,D,B,j,null)}}const O=L.children;for(let B=0,K=O.length;B<K;B++)_(O[B],F,D,E,y)}function A(L){L.target.removeEventListener("dispose",A);for(const D in u){const E=u[D],y=L.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Xp={[Is]:Ls,[Ds]:Fs,[Ns]:Bs,[Oi]:Us,[Ls]:Is,[Fs]:Ds,[Bs]:Ns,[Us]:Oi};function qp(i,t){function e(){let Y=!1;const Ot=new Fe;let ht=null;const xt=new Fe(0,0,0,0);return{setMask:function(Wt){ht!==Wt&&!Y&&(i.colorMask(Wt,Wt,Wt,Wt),ht=Wt)},setLocked:function(Wt){Y=Wt},setClear:function(Wt,Xt,fe,Pe,Be){Be===!0&&(Wt*=Pe,Xt*=Pe,fe*=Pe),Ot.set(Wt,Xt,fe,Pe),xt.equals(Ot)===!1&&(i.clearColor(Wt,Xt,fe,Pe),xt.copy(Ot))},reset:function(){Y=!1,ht=null,xt.set(-1,0,0,0)}}}function n(){let Y=!1,Ot=!1,ht=null,xt=null,Wt=null;return{setReversed:function(Xt){if(Ot!==Xt){const fe=t.get("EXT_clip_control");Ot?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);const Pe=Wt;Wt=null,this.setClear(Pe)}Ot=Xt},getReversed:function(){return Ot},setTest:function(Xt){Xt?Z(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(Xt){ht!==Xt&&!Y&&(i.depthMask(Xt),ht=Xt)},setFunc:function(Xt){if(Ot&&(Xt=Xp[Xt]),xt!==Xt){switch(Xt){case Is:i.depthFunc(i.NEVER);break;case Ls:i.depthFunc(i.ALWAYS);break;case Ds:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Ns:i.depthFunc(i.EQUAL);break;case Us:i.depthFunc(i.GEQUAL);break;case Fs:i.depthFunc(i.GREATER);break;case Bs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Xt}},setLocked:function(Xt){Y=Xt},setClear:function(Xt){Wt!==Xt&&(Ot&&(Xt=1-Xt),i.clearDepth(Xt),Wt=Xt)},reset:function(){Y=!1,ht=null,xt=null,Wt=null,Ot=!1}}}function s(){let Y=!1,Ot=null,ht=null,xt=null,Wt=null,Xt=null,fe=null,Pe=null,Be=null;return{setTest:function(de){Y||(de?Z(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(de){Ot!==de&&!Y&&(i.stencilMask(de),Ot=de)},setFunc:function(de,ct,mt){(ht!==de||xt!==ct||Wt!==mt)&&(i.stencilFunc(de,ct,mt),ht=de,xt=ct,Wt=mt)},setOp:function(de,ct,mt){(Xt!==de||fe!==ct||Pe!==mt)&&(i.stencilOp(de,ct,mt),Xt=de,fe=ct,Pe=mt)},setLocked:function(de){Y=de},setClear:function(de){Be!==de&&(i.clearStencil(de),Be=de)},reset:function(){Y=!1,Ot=null,ht=null,xt=null,Wt=null,Xt=null,fe=null,Pe=null,Be=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,u=new WeakMap;let h={},l={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,x=null,M=null,_=null,A=null,L=null,F=new Re(0,0,0),D=0,E=!1,y=null,b=null,O=null,B=null,K=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,H=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),at=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),at=H>=2);let st=null,nt={};const z=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),G=new Fe().fromArray(z),R=new Fe().fromArray(tt);function C(Y,Ot,ht,xt){const Wt=new Uint8Array(4),Xt=i.createTexture();i.bindTexture(Y,Xt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<ht;fe++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ot,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Wt):i.texImage2D(Ot+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Wt);return Xt}const W={};W[i.TEXTURE_2D]=C(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=C(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=C(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=C(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Oi),ut(!1),Zt(La),Z(i.CULL_FACE),N(Zn);function Z(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function rt(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function X(Y,Ot){return l[Y]!==Ot?(i.bindFramebuffer(Y,Ot),l[Y]=Ot,Y===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Ot),Y===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Ot),!0):!1}function et(Y,Ot){let ht=d,xt=!1;if(Y){ht=f.get(Ot),ht===void 0&&(ht=[],f.set(Ot,ht));const Wt=Y.textures;if(ht.length!==Wt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Xt=0,fe=Wt.length;Xt<fe;Xt++)ht[Xt]=i.COLOR_ATTACHMENT0+Xt;ht.length=Wt.length,xt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,xt=!0);xt&&i.drawBuffers(ht)}function _t(Y){return v!==Y?(i.useProgram(Y),v=Y,!0):!1}const Ut={[li]:i.FUNC_ADD,[Pl]:i.FUNC_SUBTRACT,[Il]:i.FUNC_REVERSE_SUBTRACT};Ut[Ll]=i.MIN,Ut[Dl]=i.MAX;const yt={[Nl]:i.ZERO,[Ul]:i.ONE,[Fl]:i.SRC_COLOR,[Cs]:i.SRC_ALPHA,[kl]:i.SRC_ALPHA_SATURATE,[Vl]:i.DST_COLOR,[Ol]:i.DST_ALPHA,[Bl]:i.ONE_MINUS_SRC_COLOR,[Ps]:i.ONE_MINUS_SRC_ALPHA,[Hl]:i.ONE_MINUS_DST_COLOR,[zl]:i.ONE_MINUS_DST_ALPHA,[Gl]:i.CONSTANT_COLOR,[Wl]:i.ONE_MINUS_CONSTANT_COLOR,[Xl]:i.CONSTANT_ALPHA,[ql]:i.ONE_MINUS_CONSTANT_ALPHA};function N(Y,Ot,ht,xt,Wt,Xt,fe,Pe,Be,de){if(Y===Zn){g===!0&&(rt(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),Y!==Cl){if(Y!==m||de!==E){if((p!==li||_!==li)&&(i.blendEquation(i.FUNC_ADD),p=li,_=li),de)switch(Y){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case Na:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Na:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}x=null,M=null,A=null,L=null,F.set(0,0,0),D=0,m=Y,E=de}return}Wt=Wt||Ot,Xt=Xt||ht,fe=fe||xt,(Ot!==p||Wt!==_)&&(i.blendEquationSeparate(Ut[Ot],Ut[Wt]),p=Ot,_=Wt),(ht!==x||xt!==M||Xt!==A||fe!==L)&&(i.blendFuncSeparate(yt[ht],yt[xt],yt[Xt],yt[fe]),x=ht,M=xt,A=Xt,L=fe),(Pe.equals(F)===!1||Be!==D)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Be),F.copy(Pe),D=Be),m=Y,E=!1}function vt(Y,Ot){Y.side===Nn?rt(i.CULL_FACE):Z(i.CULL_FACE);let ht=Y.side===an;Ot&&(ht=!ht),ut(ht),Y.blending===Ui&&Y.transparent===!1?N(Zn):N(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const xt=Y.stencilWrite;o.setTest(xt),xt&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),le(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(Y){y!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),y=Y)}function Zt(Y){Y!==bl?(Z(i.CULL_FACE),Y!==b&&(Y===La?i.cullFace(i.BACK):Y===Al?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),b=Y}function St(Y){Y!==O&&(at&&i.lineWidth(Y),O=Y)}function le(Y,Ot,ht){Y?(Z(i.POLYGON_OFFSET_FILL),(B!==Ot||K!==ht)&&(i.polygonOffset(Ot,ht),B=Ot,K=ht)):rt(i.POLYGON_OFFSET_FILL)}function gt(Y){Y?Z(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function I(Y){Y===void 0&&(Y=i.TEXTURE0+j-1),st!==Y&&(i.activeTexture(Y),st=Y)}function S(Y,Ot,ht){ht===void 0&&(st===null?ht=i.TEXTURE0+j-1:ht=st);let xt=nt[ht];xt===void 0&&(xt={type:void 0,texture:void 0},nt[ht]=xt),(xt.type!==Y||xt.texture!==Ot)&&(st!==ht&&(i.activeTexture(ht),st=ht),i.bindTexture(Y,Ot||W[Y]),xt.type=Y,xt.texture=Ot)}function Q(){const Y=nt[st];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{i.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{i.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(){try{i.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Vt(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ve(){try{i.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{i.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Kt(){try{i.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function re(){try{i.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ae(Y){G.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),G.copy(Y))}function $t(Y){R.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),R.copy(Y))}function ge(Y,Ot){let ht=u.get(Ot);ht===void 0&&(ht=new WeakMap,u.set(Ot,ht));let xt=ht.get(Y);xt===void 0&&(xt=i.getUniformBlockIndex(Ot,Y.name),ht.set(Y,xt))}function he(Y,Ot){const xt=u.get(Ot).get(Y);c.get(Ot)!==xt&&(i.uniformBlockBinding(Ot,xt,Y.__bindingPointIndex),c.set(Ot,xt))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,nt={},l={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,x=null,M=null,_=null,A=null,L=null,F=new Re(0,0,0),D=0,E=!1,y=null,b=null,O=null,B=null,K=null,G.set(0,0,i.canvas.width,i.canvas.height),R.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:rt,bindFramebuffer:X,drawBuffers:et,useProgram:_t,setBlending:N,setMaterial:vt,setFlipSided:ut,setCullFace:Zt,setLineWidth:St,setPolygonOffset:le,setScissorTest:gt,activeTexture:I,bindTexture:S,unbindTexture:Q,compressedTexImage2D:dt,compressedTexImage3D:pt,texImage2D:Kt,texImage3D:re,updateUBOMapping:ge,uniformBlockBinding:he,texStorage2D:ve,texStorage3D:bt,texSubImage2D:ft,texSubImage3D:Rt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Vt,scissor:ae,viewport:$t,reset:ye}}function Yp(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Me,h=new WeakMap;let l;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,S){return d?new OffscreenCanvas(I,S):ar("canvas")}function g(I,S,Q){let dt=1;const pt=gt(I);if((pt.width>Q||pt.height>Q)&&(dt=Q/Math.max(pt.width,pt.height)),dt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ft=Math.floor(dt*pt.width),Rt=Math.floor(dt*pt.height);l===void 0&&(l=v(ft,Rt));const Ct=S?v(ft,Rt):l;return Ct.width=ft,Ct.height=Rt,Ct.getContext("2d").drawImage(I,0,0,ft,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ft+"x"+Rt+")."),Ct}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,S,Q,dt,pt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ft=S;if(S===i.RED&&(Q===i.FLOAT&&(ft=i.R32F),Q===i.HALF_FLOAT&&(ft=i.R16F),Q===i.UNSIGNED_BYTE&&(ft=i.R8)),S===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.R8UI),Q===i.UNSIGNED_SHORT&&(ft=i.R16UI),Q===i.UNSIGNED_INT&&(ft=i.R32UI),Q===i.BYTE&&(ft=i.R8I),Q===i.SHORT&&(ft=i.R16I),Q===i.INT&&(ft=i.R32I)),S===i.RG&&(Q===i.FLOAT&&(ft=i.RG32F),Q===i.HALF_FLOAT&&(ft=i.RG16F),Q===i.UNSIGNED_BYTE&&(ft=i.RG8)),S===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RG16UI),Q===i.UNSIGNED_INT&&(ft=i.RG32UI),Q===i.BYTE&&(ft=i.RG8I),Q===i.SHORT&&(ft=i.RG16I),Q===i.INT&&(ft=i.RG32I)),S===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),Q===i.UNSIGNED_INT&&(ft=i.RGB32UI),Q===i.BYTE&&(ft=i.RGB8I),Q===i.SHORT&&(ft=i.RGB16I),Q===i.INT&&(ft=i.RGB32I)),S===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ft=i.RGBA32UI),Q===i.BYTE&&(ft=i.RGBA8I),Q===i.SHORT&&(ft=i.RGBA16I),Q===i.INT&&(ft=i.RGBA32I)),S===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),S===i.RGBA){const Rt=pt?Hr:Ce.getTransfer(dt);Q===i.FLOAT&&(ft=i.RGBA32F),Q===i.HALF_FLOAT&&(ft=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ft=Rt===Ne?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function _(I,S){let Q;return I?S===null||S===fi||S===Hi?Q=i.DEPTH24_STENCIL8:S===Un?Q=i.DEPTH32F_STENCIL8:S===rr&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===Hi?Q=i.DEPTH_COMPONENT24:S===Un?Q=i.DEPTH_COMPONENT32F:S===rr&&(Q=i.DEPTH_COMPONENT16),Q}function A(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==yn&&I.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function L(I){const S=I.target;S.removeEventListener("dispose",L),D(S),S.isVideoTexture&&h.delete(S)}function F(I){const S=I.target;S.removeEventListener("dispose",F),y(S)}function D(I){const S=n.get(I);if(S.__webglInit===void 0)return;const Q=I.source,dt=f.get(Q);if(dt){const pt=dt[S.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&E(I),Object.keys(dt).length===0&&f.delete(Q)}n.remove(I)}function E(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const Q=I.source,dt=f.get(Q);delete dt[S.__cacheKey],a.memory.textures--}function y(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(S.__webglFramebuffer[dt]))for(let pt=0;pt<S.__webglFramebuffer[dt].length;pt++)i.deleteFramebuffer(S.__webglFramebuffer[dt][pt]);else i.deleteFramebuffer(S.__webglFramebuffer[dt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[dt])}else{if(Array.isArray(S.__webglFramebuffer))for(let dt=0;dt<S.__webglFramebuffer.length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[dt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let dt=0;dt<S.__webglColorRenderbuffer.length;dt++)S.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[dt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Q=I.textures;for(let dt=0,pt=Q.length;dt<pt;dt++){const ft=n.get(Q[dt]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(Q[dt])}n.remove(I)}let b=0;function O(){b=0}function B(){const I=b;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),b+=1,I}function K(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function j(I,S){const Q=n.get(I);if(I.isVideoTexture&&St(I),I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){const dt=I.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(Q,I,S);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+S)}function at(I,S){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){R(Q,I,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+S)}function H(I,S){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){R(Q,I,S);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+S)}function U(I,S){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){C(Q,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+S)}const st={[ir]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Vs]:i.MIRRORED_REPEAT},nt={[yn]:i.NEAREST,[nc]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},z={[ac]:i.NEVER,[fc]:i.ALWAYS,[oc]:i.LESS,[Qo]:i.LEQUAL,[lc]:i.EQUAL,[uc]:i.GEQUAL,[cc]:i.GREATER,[hc]:i.NOTEQUAL};function tt(I,S){if(S.type===Un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===Qr||S.magFilter===ur||S.magFilter===ui||S.minFilter===Tn||S.minFilter===Qr||S.minFilter===ur||S.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,st[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,st[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,st[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,nt[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,nt[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,z[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==ur&&S.minFilter!==ui||S.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function G(I,S){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",L));const dt=S.source;let pt=f.get(dt);pt===void 0&&(pt={},f.set(dt,pt));const ft=K(S);if(ft!==I.__cacheKey){pt[ft]===void 0&&(pt[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),pt[ft].usedTimes++;const Rt=pt[I.__cacheKey];Rt!==void 0&&(pt[I.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(S)),I.__cacheKey=ft,I.__webglTexture=pt[ft].texture}return Q}function R(I,S,Q){let dt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(dt=i.TEXTURE_3D);const pt=G(I,S),ft=S.source;e.bindTexture(dt,I.__webglTexture,i.TEXTURE0+Q);const Rt=n.get(ft);if(ft.version!==Rt.__version||pt===!0){e.activeTexture(i.TEXTURE0+Q);const Ct=Ce.getPrimaries(Ce.workingColorSpace),Vt=S.colorSpace===qn?null:Ce.getPrimaries(S.colorSpace),ve=S.colorSpace===qn||Ct===Vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let bt=g(S.image,!1,s.maxTextureSize);bt=le(S,bt);const Kt=r.convert(S.format,S.colorSpace),re=r.convert(S.type);let ae=M(S.internalFormat,Kt,re,S.colorSpace,S.isVideoTexture);tt(dt,S);let $t;const ge=S.mipmaps,he=S.isVideoTexture!==!0,ye=Rt.__version===void 0||pt===!0,Y=ft.dataReady,Ot=A(S,bt);if(S.isDepthTexture)ae=_(S.format===ki,S.type),ye&&(he?e.texStorage2D(i.TEXTURE_2D,1,ae,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,ae,bt.width,bt.height,0,Kt,re,null));else if(S.isDataTexture)if(ge.length>0){he&&ye&&e.texStorage2D(i.TEXTURE_2D,Ot,ae,ge[0].width,ge[0].height);for(let ht=0,xt=ge.length;ht<xt;ht++)$t=ge[ht],he?Y&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,$t.width,$t.height,Kt,re,$t.data):e.texImage2D(i.TEXTURE_2D,ht,ae,$t.width,$t.height,0,Kt,re,$t.data);S.generateMipmaps=!1}else he?(ye&&e.texStorage2D(i.TEXTURE_2D,Ot,ae,bt.width,bt.height),Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Kt,re,bt.data)):e.texImage2D(i.TEXTURE_2D,0,ae,bt.width,bt.height,0,Kt,re,bt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){he&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,ae,ge[0].width,ge[0].height,bt.depth);for(let ht=0,xt=ge.length;ht<xt;ht++)if($t=ge[ht],S.format!==_n)if(Kt!==null)if(he){if(Y)if(S.layerUpdates.size>0){const Wt=lo($t.width,$t.height,S.format,S.type);for(const Xt of S.layerUpdates){const fe=$t.data.subarray(Xt*Wt/$t.data.BYTES_PER_ELEMENT,(Xt+1)*Wt/$t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,Xt,$t.width,$t.height,1,Kt,fe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,$t.width,$t.height,bt.depth,Kt,$t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,ae,$t.width,$t.height,bt.depth,0,$t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,$t.width,$t.height,bt.depth,Kt,re,$t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,ae,$t.width,$t.height,bt.depth,0,Kt,re,$t.data)}else{he&&ye&&e.texStorage2D(i.TEXTURE_2D,Ot,ae,ge[0].width,ge[0].height);for(let ht=0,xt=ge.length;ht<xt;ht++)$t=ge[ht],S.format!==_n?Kt!==null?he?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,$t.width,$t.height,Kt,$t.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,ae,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Y&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,$t.width,$t.height,Kt,re,$t.data):e.texImage2D(i.TEXTURE_2D,ht,ae,$t.width,$t.height,0,Kt,re,$t.data)}else if(S.isDataArrayTexture)if(he){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,ae,bt.width,bt.height,bt.depth),Y)if(S.layerUpdates.size>0){const ht=lo(bt.width,bt.height,S.format,S.type);for(const xt of S.layerUpdates){const Wt=bt.data.subarray(xt*ht/bt.data.BYTES_PER_ELEMENT,(xt+1)*ht/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Kt,re,Wt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Kt,re,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,bt.width,bt.height,bt.depth,0,Kt,re,bt.data);else if(S.isData3DTexture)he?(ye&&e.texStorage3D(i.TEXTURE_3D,Ot,ae,bt.width,bt.height,bt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Kt,re,bt.data)):e.texImage3D(i.TEXTURE_3D,0,ae,bt.width,bt.height,bt.depth,0,Kt,re,bt.data);else if(S.isFramebufferTexture){if(ye)if(he)e.texStorage2D(i.TEXTURE_2D,Ot,ae,bt.width,bt.height);else{let ht=bt.width,xt=bt.height;for(let Wt=0;Wt<Ot;Wt++)e.texImage2D(i.TEXTURE_2D,Wt,ae,ht,xt,0,Kt,re,null),ht>>=1,xt>>=1}}else if(ge.length>0){if(he&&ye){const ht=gt(ge[0]);e.texStorage2D(i.TEXTURE_2D,Ot,ae,ht.width,ht.height)}for(let ht=0,xt=ge.length;ht<xt;ht++)$t=ge[ht],he?Y&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Kt,re,$t):e.texImage2D(i.TEXTURE_2D,ht,ae,Kt,re,$t);S.generateMipmaps=!1}else if(he){if(ye){const ht=gt(bt);e.texStorage2D(i.TEXTURE_2D,Ot,ae,ht.width,ht.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Kt,re,bt)}else e.texImage2D(i.TEXTURE_2D,0,ae,Kt,re,bt);m(S)&&p(dt),Rt.__version=ft.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function C(I,S,Q){if(S.image.length!==6)return;const dt=G(I,S),pt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Q);const ft=n.get(pt);if(pt.version!==ft.__version||dt===!0){e.activeTexture(i.TEXTURE0+Q);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Ct=S.colorSpace===qn?null:Ce.getPrimaries(S.colorSpace),Vt=S.colorSpace===qn||Rt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,bt=S.image[0]&&S.image[0].isDataTexture,Kt=[];for(let xt=0;xt<6;xt++)!ve&&!bt?Kt[xt]=g(S.image[xt],!0,s.maxCubemapSize):Kt[xt]=bt?S.image[xt].image:S.image[xt],Kt[xt]=le(S,Kt[xt]);const re=Kt[0],ae=r.convert(S.format,S.colorSpace),$t=r.convert(S.type),ge=M(S.internalFormat,ae,$t,S.colorSpace),he=S.isVideoTexture!==!0,ye=ft.__version===void 0||dt===!0,Y=pt.dataReady;let Ot=A(S,re);tt(i.TEXTURE_CUBE_MAP,S);let ht;if(ve){he&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,ge,re.width,re.height);for(let xt=0;xt<6;xt++){ht=Kt[xt].mipmaps;for(let Wt=0;Wt<ht.length;Wt++){const Xt=ht[Wt];S.format!==_n?ae!==null?he?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,0,0,Xt.width,Xt.height,ae,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,ge,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,0,0,Xt.width,Xt.height,ae,$t,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,ge,Xt.width,Xt.height,0,ae,$t,Xt.data)}}}else{if(ht=S.mipmaps,he&&ye){ht.length>0&&Ot++;const xt=gt(Kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,ge,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){he?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Kt[xt].width,Kt[xt].height,ae,$t,Kt[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,Kt[xt].width,Kt[xt].height,0,ae,$t,Kt[xt].data);for(let Wt=0;Wt<ht.length;Wt++){const fe=ht[Wt].image[xt].image;he?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,0,0,fe.width,fe.height,ae,$t,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,ge,fe.width,fe.height,0,ae,$t,fe.data)}}else{he?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ae,$t,Kt[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,ae,$t,Kt[xt]);for(let Wt=0;Wt<ht.length;Wt++){const Xt=ht[Wt];he?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,0,0,ae,$t,Xt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,ge,ae,$t,Xt.image[xt])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),ft.__version=pt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function W(I,S,Q,dt,pt,ft){const Rt=r.convert(Q.format,Q.colorSpace),Ct=r.convert(Q.type),Vt=M(Q.internalFormat,Rt,Ct,Q.colorSpace),ve=n.get(S),bt=n.get(Q);if(bt.__renderTarget=S,!ve.__hasExternalTextures){const Kt=Math.max(1,S.width>>ft),re=Math.max(1,S.height>>ft);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,ft,Vt,Kt,re,S.depth,0,Rt,Ct,null):e.texImage2D(pt,ft,Vt,Kt,re,0,Rt,Ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Zt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,pt,bt.__webglTexture,0,ut(S)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,pt,bt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(I,S,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const dt=S.depthTexture,pt=dt&&dt.isDepthTexture?dt.type:null,ft=_(S.stencilBuffer,pt),Rt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=ut(S);Zt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,ft,S.width,S.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ft,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,I)}else{const dt=S.textures;for(let pt=0;pt<dt.length;pt++){const ft=dt[pt],Rt=r.convert(ft.format,ft.colorSpace),Ct=r.convert(ft.type),Vt=M(ft.internalFormat,Rt,Ct,ft.colorSpace),ve=ut(S);Q&&Zt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Vt,S.width,S.height):Zt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,Vt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Vt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=n.get(S.depthTexture);dt.__renderTarget=S,(!dt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const pt=dt.__webglTexture,ft=ut(S);if(S.depthTexture.format===Fi)Zt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(S.depthTexture.format===ki)Zt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function X(I){const S=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const dt=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),dt){const pt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,dt.removeEventListener("dispose",pt)};dt.addEventListener("dispose",pt),S.__depthDisposeCallback=pt}S.__boundDepthTexture=dt}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");rt(S.__webglFramebuffer,I)}else if(Q){S.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[dt]),S.__webglDepthbuffer[dt]===void 0)S.__webglDepthbuffer[dt]=i.createRenderbuffer(),Z(S.__webglDepthbuffer[dt],I,!1);else{const pt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=S.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,ft)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Z(S.__webglDepthbuffer,I,!1);else{const dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(I,S,Q){const dt=n.get(I);S!==void 0&&W(dt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&X(I)}function _t(I){const S=I.texture,Q=n.get(I),dt=n.get(S);I.addEventListener("dispose",F);const pt=I.textures,ft=I.isWebGLCubeRenderTarget===!0,Rt=pt.length>1;if(Rt||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=S.version,a.memory.textures++),ft){Q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer[Ct]=[];for(let Vt=0;Vt<S.mipmaps.length;Vt++)Q.__webglFramebuffer[Ct][Vt]=i.createFramebuffer()}else Q.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)Q.__webglFramebuffer[Ct]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let Ct=0,Vt=pt.length;Ct<Vt;Ct++){const ve=n.get(pt[Ct]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Zt(I)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<pt.length;Ct++){const Vt=pt[Ct];Q.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ct]);const ve=r.convert(Vt.format,Vt.colorSpace),bt=r.convert(Vt.type),Kt=M(Vt.internalFormat,ve,bt,Vt.colorSpace,I.isXRRenderTarget===!0),re=ut(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Kt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,S);for(let Ct=0;Ct<6;Ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let Vt=0;Vt<S.mipmaps.length;Vt++)W(Q.__webglFramebuffer[Ct][Vt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Vt);else W(Q.__webglFramebuffer[Ct],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let Ct=0,Vt=pt.length;Ct<Vt;Ct++){const ve=pt[Ct],bt=n.get(ve);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),tt(i.TEXTURE_2D,ve),W(Q.__webglFramebuffer,I,ve,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,0),m(ve)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ct=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,dt.__webglTexture),tt(Ct,S),S.mipmaps&&S.mipmaps.length>0)for(let Vt=0;Vt<S.mipmaps.length;Vt++)W(Q.__webglFramebuffer[Vt],I,S,i.COLOR_ATTACHMENT0,Ct,Vt);else W(Q.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,Ct,0);m(S)&&p(Ct),e.unbindTexture()}I.depthBuffer&&X(I)}function Ut(I){const S=I.textures;for(let Q=0,dt=S.length;Q<dt;Q++){const pt=S[Q];if(m(pt)){const ft=x(I),Rt=n.get(pt).__webglTexture;e.bindTexture(ft,Rt),p(ft),e.unbindTexture()}}}const yt=[],N=[];function vt(I){if(I.samples>0){if(Zt(I)===!1){const S=I.textures,Q=I.width,dt=I.height;let pt=i.COLOR_BUFFER_BIT;const ft=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(I),Ct=S.length>1;if(Ct)for(let Vt=0;Vt<S.length;Vt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Vt=0;Vt<S.length;Vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Vt]);const ve=n.get(S[Vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,Q,dt,0,0,Q,dt,pt,i.NEAREST),c===!0&&(yt.length=0,N.length=0,yt.push(i.COLOR_ATTACHMENT0+Vt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(yt.push(ft),N.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let Vt=0;Vt<S.length;Vt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Vt]);const ve=n.get(S[Vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,ve,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(I){return Math.min(s.maxSamples,I.samples)}function Zt(I){const S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function St(I){const S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function le(I,S){const Q=I.colorSpace,dt=I.format,pt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Gi&&Q!==qn&&(Ce.getTransfer(Q)===Ne?(dt!==_n||pt!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),S}function gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=at,this.setTexture3D=H,this.setTextureCube=U,this.rebindTextures=et,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Zt}function Zp(i,t){function e(n,s=qn){let r;const a=Ce.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Go)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ho)return i.BYTE;if(n===ko)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===ma)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===Wo)return i.ALPHA;if(n===Xo)return i.RGB;if(n===_n)return i.RGBA;if(n===qo)return i.LUMINANCE;if(n===Yo)return i.LUMINANCE_ALPHA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===Ko)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===Ur||n===Fr||n===Br||n===Or)if(a===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hs||n===ks||n===Gs||n===Ws)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ks)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gs)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ws)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xs||n===qs||n===Ys)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xs||n===qs)return a===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ys)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zs||n===Ks||n===js||n===$s||n===Qs||n===Js||n===ta||n===ea||n===na||n===ia||n===ra||n===sa||n===aa||n===oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zs)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ks)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===js)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$s)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qs)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Js)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zr||n===la||n===ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zr)return a===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===ha||n===ua||n===fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $p{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:Kp,fragmentShader:jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xn(new Zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends mi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,l=null,f=null,d=null,v=null;const g=new $p,m=e.getContextAttributes();let p=null,x=null;const M=[],_=[],A=new Me;let L=null;const F=new hn;F.viewport=new Fe;const D=new hn;D.viewport=new Fe;const E=[F,D],y=new gh;let b=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let C=M[R];return C===void 0&&(C=new _s,M[R]=C),C.getTargetRaySpace()},this.getControllerGrip=function(R){let C=M[R];return C===void 0&&(C=new _s,M[R]=C),C.getGripSpace()},this.getHand=function(R){let C=M[R];return C===void 0&&(C=new _s,M[R]=C),C.getHandSpace()};function B(R){const C=_.indexOf(R.inputSource);if(C===-1)return;const W=M[C];W!==void 0&&(W.update(R.inputSource,R.frame,u||a),W.dispatchEvent({type:R.type,data:R.inputSource}))}function K(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",j);for(let R=0;R<M.length;R++){const C=_[R];C!==null&&(_[R]=null,M[R].disconnect(C))}b=null,O=null,g.reset(),t.setRenderTarget(p),d=null,f=null,l=null,s=null,x=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){o=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(R){u=R},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",K),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,Z=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=m.stencil?ki:Fi,Z=m.stencil?Hi:fi);const X={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};l=new XRWebGLBinding(s,e),f=l.createProjectionLayer(X),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new di(f.textureWidth,f.textureHeight,{format:_n,type:On,depthTexture:new cl(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new di(d.framebufferWidth,d.framebufferHeight,{format:_n,type:On,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(R){for(let C=0;C<R.removed.length;C++){const W=R.removed[C],Z=_.indexOf(W);Z>=0&&(_[Z]=null,M[Z].disconnect(W))}for(let C=0;C<R.added.length;C++){const W=R.added[C];let Z=_.indexOf(W);if(Z===-1){for(let X=0;X<M.length;X++)if(X>=_.length){_.push(W),Z=X;break}else if(_[X]===null){_[X]=W,Z=X;break}if(Z===-1)break}const rt=M[Z];rt&&rt.connect(W)}}const at=new it,H=new it;function U(R,C,W){at.setFromMatrixPosition(C.matrixWorld),H.setFromMatrixPosition(W.matrixWorld);const Z=at.distanceTo(H),rt=C.projectionMatrix.elements,X=W.projectionMatrix.elements,et=rt[14]/(rt[10]-1),_t=rt[14]/(rt[10]+1),Ut=(rt[9]+1)/rt[5],yt=(rt[9]-1)/rt[5],N=(rt[8]-1)/rt[0],vt=(X[8]+1)/X[0],ut=et*N,Zt=et*vt,St=Z/(-N+vt),le=St*-N;if(C.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(le),R.translateZ(St),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),rt[10]===-1)R.projectionMatrix.copy(C.projectionMatrix),R.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{const gt=et+St,I=_t+St,S=ut-le,Q=Zt+(Z-le),dt=Ut*_t/I*gt,pt=yt*_t/I*gt;R.projectionMatrix.makePerspective(S,Q,dt,pt,gt,I),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function st(R,C){C===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(C.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;let C=R.near,W=R.far;g.texture!==null&&(g.depthNear>0&&(C=g.depthNear),g.depthFar>0&&(W=g.depthFar)),y.near=D.near=F.near=C,y.far=D.far=F.far=W,(b!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,O=y.far),F.layers.mask=R.layers.mask|2,D.layers.mask=R.layers.mask|4,y.layers.mask=F.layers.mask|D.layers.mask;const Z=R.parent,rt=y.cameras;st(y,Z);for(let X=0;X<rt.length;X++)st(rt[X],Z);rt.length===2?U(y,F,D):y.projectionMatrix.copy(F.projectionMatrix),nt(R,y,Z)};function nt(R,C,W){W===null?R.matrix.copy(C.matrixWorld):(R.matrix.copy(W.matrixWorld),R.matrix.invert(),R.matrix.multiply(C.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(C.projectionMatrix),R.projectionMatrixInverse.copy(C.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=sr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(R){c=R,f!==null&&(f.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let z=null;function tt(R,C){if(h=C.getViewerPose(u||a),v=C,h!==null){const W=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Z=!1;W.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let et=0;et<W.length;et++){const _t=W[et];let Ut=null;if(d!==null)Ut=d.getViewport(_t);else{const N=l.getViewSubImage(f,_t);Ut=N.viewport,et===0&&(t.setRenderTargetTextures(x,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(x))}let yt=E[et];yt===void 0&&(yt=new hn,yt.layers.enable(et),yt.viewport=new Fe,E[et]=yt),yt.matrix.fromArray(_t.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(_t.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),et===0&&(y.matrix.copy(yt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(yt)}const rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&l){const et=l.getDepthInformation(W[0]);et&&et.isValid&&et.texture&&g.init(t,et,s.renderState)}}for(let W=0;W<M.length;W++){const Z=_[W],rt=M[W];Z!==null&&rt!==void 0&&rt.update(Z,C,u||a)}z&&z(R,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),v=null}const G=new dl;G.setAnimationLoop(tt),this.setAnimationLoop=function(R){z=R},this.dispose=function(){}}}const si=new An,Jp=new Ve;function tm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,al(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),l(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,si.copy(_),si.x*=-1,si.y*=-1,si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(si)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function em(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function u(x,M){let _=s[x.id];_===void 0&&(v(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(x,A);const L=t.render.frame;r[x.id]!==L&&(f(x),r[x.id]=L)}function h(x){const M=l();x.__bindingPointIndex=M;const _=i.createBuffer(),A=x.__size,L=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function l(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=s[x.id],_=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let L=0,F=_.length;L<F;L++){const D=Array.isArray(_[L])?_[L]:[_[L]];for(let E=0,y=D.length;E<y;E++){const b=D[E];if(d(b,L,E,A)===!0){const O=b.__offset,B=Array.isArray(b.value)?b.value:[b.value];let K=0;for(let j=0;j<B.length;j++){const at=B[j],H=g(at);typeof at=="number"||typeof at=="boolean"?(b.__data[0]=at,i.bufferSubData(i.UNIFORM_BUFFER,O+K,b.__data)):at.isMatrix3?(b.__data[0]=at.elements[0],b.__data[1]=at.elements[1],b.__data[2]=at.elements[2],b.__data[3]=0,b.__data[4]=at.elements[3],b.__data[5]=at.elements[4],b.__data[6]=at.elements[5],b.__data[7]=0,b.__data[8]=at.elements[6],b.__data[9]=at.elements[7],b.__data[10]=at.elements[8],b.__data[11]=0):(at.toArray(b.__data,K),K+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,_,A){const L=x.value,F=M+"_"+_;if(A[F]===void 0)return typeof L=="number"||typeof L=="boolean"?A[F]=L:A[F]=L.clone(),!0;{const D=A[F];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return A[F]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function v(x){const M=x.uniforms;let _=0;const A=16;for(let F=0,D=M.length;F<D;F++){const E=Array.isArray(M[F])?M[F]:[M[F]];for(let y=0,b=E.length;y<b;y++){const O=E[y],B=Array.isArray(O.value)?O.value:[O.value];for(let K=0,j=B.length;K<j;K++){const at=B[K],H=g(at),U=_%A,st=U%H.boundary,nt=U+st;_+=st,nt!==0&&A-nt<H.storage&&(_+=A-nt),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=H.storage}}}const L=_%A;return L>0&&(_+=A-L),x.__size=_,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:u,dispose:p}}class nm{constructor(t={}){const{canvas:e=Pc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Kn,this.toneMappingExposure=1;const _=this;let A=!1,L=0,F=0,D=null,E=-1,y=null;const b=new Fe,O=new Fe;let B=null;const K=new Re(0);let j=0,at=e.width,H=e.height,U=1,st=null,nt=null;const z=new Fe(0,0,at,H),tt=new Fe(0,0,at,H);let G=!1;const R=new ba;let C=!1,W=!1;this.transmissionResolutionScale=1;const Z=new Ve,rt=new Ve,X=new it,et=new Fe,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function yt(){return D===null?U:1}let N=n;function vt(T,q){return e.getContext(T,q)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pa}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",Xt,!1),N===null){const q="webgl2";if(N=vt(q,T),N===null)throw vt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ut,Zt,St,le,gt,I,S,Q,dt,pt,ft,Rt,Ct,Vt,ve,bt,Kt,re,ae,$t,ge,he,ye,Y;function Ot(){ut=new fd(N),ut.init(),he=new Zp(N,ut),Zt=new sd(N,ut,t,he),St=new qp(N,ut),Zt.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),le=new md(N),gt=new Dp,I=new Yp(N,ut,St,gt,Zt,he,le),S=new od(_),Q=new ud(_),dt=new yh(N),ye=new id(N,dt),pt=new dd(N,dt,le,ye),ft=new gd(N,pt,dt,le),ae=new vd(N,Zt,I),bt=new ad(gt),Rt=new Lp(_,S,Q,ut,Zt,ye,bt),Ct=new tm(_,gt),Vt=new Up,ve=new Hp(ut),re=new nd(_,S,Q,St,ft,d,c),Kt=new Wp(_,ft,Zt),Y=new em(N,le,Zt,St),$t=new rd(N,ut,le),ge=new pd(N,ut,le),le.programs=Rt.programs,_.capabilities=Zt,_.extensions=ut,_.properties=gt,_.renderLists=Vt,_.shadowMap=Kt,_.state=St,_.info=le}Ot();const ht=new Qp(_,N);this.xr=ht,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(at,H,!1))},this.getSize=function(T){return T.set(at,H)},this.setSize=function(T,q,$=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=T,H=q,e.width=Math.floor(T*U),e.height=Math.floor(q*U),$===!0&&(e.style.width=T+"px",e.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(at*U,H*U).floor()},this.setDrawingBufferSize=function(T,q,$){at=T,H=q,U=$,e.width=Math.floor(T*$),e.height=Math.floor(q*$),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,q,$,J){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,q,$,J),St.viewport(b.copy(z).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(tt)},this.setScissor=function(T,q,$,J){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,q,$,J),St.scissor(O.copy(tt).multiplyScalar(U).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){St.setScissorTest(G=T)},this.setOpaqueSort=function(T){st=T},this.setTransparentSort=function(T){nt=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,$=!0){let J=0;if(T){let V=!1;if(D!==null){const Mt=D.texture.format;V=Mt===ya||Mt===xa||Mt===_a}if(V){const Mt=D.texture.type,It=Mt===On||Mt===fi||Mt===rr||Mt===Hi||Mt===va||Mt===ga,Nt=re.getClearColor(),Yt=re.getClearAlpha(),Jt=Nt.r,Gt=Nt.g,ie=Nt.b;It?(v[0]=Jt,v[1]=Gt,v[2]=ie,v[3]=Yt,N.clearBufferuiv(N.COLOR,0,v)):(g[0]=Jt,g[1]=Gt,g[2]=ie,g[3]=Yt,N.clearBufferiv(N.COLOR,0,g))}else J|=N.COLOR_BUFFER_BIT}q&&(J|=N.DEPTH_BUFFER_BIT),$&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),re.dispose(),Vt.dispose(),ve.dispose(),gt.dispose(),S.dispose(),Q.dispose(),ft.dispose(),ye.dispose(),Y.dispose(),Rt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Et),ht.removeEventListener("sessionend",Tt),oe.stop()};function xt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=le.autoReset,q=Kt.enabled,$=Kt.autoUpdate,J=Kt.needsUpdate,V=Kt.type;Ot(),le.autoReset=T,Kt.enabled=q,Kt.autoUpdate=$,Kt.needsUpdate=J,Kt.type=V}function Xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function fe(T){const q=T.target;q.removeEventListener("dispose",fe),Pe(q)}function Pe(T){Be(T),gt.remove(T)}function Be(T){const q=gt.get(T).programs;q!==void 0&&(q.forEach(function($){Rt.releaseProgram($)}),T.isShaderMaterial&&Rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,$,J,V,Mt){q===null&&(q=_t);const It=V.isMesh&&V.matrixWorld.determinant()<0,Nt=Pt(T,q,$,J,V);St.setMaterial(J,It);let Yt=$.index,Jt=1;if(J.wireframe===!0){if(Yt=pt.getWireframeAttribute($),Yt===void 0)return;Jt=2}const Gt=$.drawRange,ie=$.attributes.position;let se=Gt.start*Jt,_e=(Gt.start+Gt.count)*Jt;Mt!==null&&(se=Math.max(se,Mt.start*Jt),_e=Math.min(_e,(Mt.start+Mt.count)*Jt)),Yt!==null?(se=Math.max(se,0),_e=Math.min(_e,Yt.count)):ie!=null&&(se=Math.max(se,0),_e=Math.min(_e,ie.count));const me=_e-se;if(me<0||me===1/0)return;ye.setup(V,J,Nt,$,Yt);let xe,ce=$t;if(Yt!==null&&(xe=dt.get(Yt),ce=ge,ce.setIndex(xe)),V.isMesh)J.wireframe===!0?(St.setLineWidth(J.wireframeLinewidth*yt()),ce.setMode(N.LINES)):ce.setMode(N.TRIANGLES);else if(V.isLine){let te=J.linewidth;te===void 0&&(te=1),St.setLineWidth(te*yt()),V.isLineSegments?ce.setMode(N.LINES):V.isLineLoop?ce.setMode(N.LINE_LOOP):ce.setMode(N.LINE_STRIP)}else V.isPoints?ce.setMode(N.POINTS):V.isSprite&&ce.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ai("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ce.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const te=V._multiDrawStarts,Ie=V._multiDrawCounts,qt=V._multiDrawCount,Le=Yt?dt.get(Yt).bytesPerElement:1,Ae=gt.get(J).currentProgram.getUniforms();for(let ze=0;ze<qt;ze++)Ae.setValue(N,"_gl_DrawID",ze),ce.render(te[ze]/Le,Ie[ze])}else if(V.isInstancedMesh)ce.renderInstances(se,me,V.count);else if($.isInstancedBufferGeometry){const te=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ie=Math.min($.instanceCount,te);ce.renderInstances(se,me,Ie)}else ce.render(se,me)};function de(T,q,$){T.transparent===!0&&T.side===Nn&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,zt(T,q,$),T.side=jn,T.needsUpdate=!0,zt(T,q,$),T.side=Nn):zt(T,q,$)}this.compile=function(T,q,$=null){$===null&&($=T),p=ve.get($),p.init(q),M.push(p),$.traverseVisible(function(V){V.isLight&&V.layers.test(q.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==$&&T.traverseVisible(function(V){V.isLight&&V.layers.test(q.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const J=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Mt=V.material;if(Mt)if(Array.isArray(Mt))for(let It=0;It<Mt.length;It++){const Nt=Mt[It];de(Nt,$,V),J.add(Nt)}else de(Mt,$,V),J.add(Mt)}),p=M.pop(),J},this.compileAsync=function(T,q,$=null){const J=this.compile(T,q,$);return new Promise(V=>{function Mt(){if(J.forEach(function(It){gt.get(It).currentProgram.isReady()&&J.delete(It)}),J.size===0){V(T);return}setTimeout(Mt,10)}ut.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ct=null;function mt(T){ct&&ct(T)}function Et(){oe.stop()}function Tt(){oe.start()}const oe=new dl;oe.setAnimationLoop(mt),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(T){ct=T,ht.setAnimationLoop(T),T===null?oe.stop():oe.start()},ht.addEventListener("sessionstart",Et),ht.addEventListener("sessionend",Tt),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(q),q=ht.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,q,D),p=ve.get(T,M.length),p.init(q),M.push(p),rt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),R.setFromProjectionMatrix(rt),W=this.localClippingEnabled,C=bt.init(this.clippingPlanes,W),m=Vt.get(T,x.length),m.init(),x.push(m),ht.enabled===!0&&ht.isPresenting===!0){const Mt=_.xr.getDepthSensingMesh();Mt!==null&&Ht(Mt,q,-1/0,_.sortObjects)}Ht(T,q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(st,nt),Ut=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Ut&&re.addToRenderList(m,T),this.info.render.frame++,C===!0&&bt.beginShadows();const $=p.state.shadowsArray;Kt.render($,T,q),C===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,V=m.transmissive;if(p.setupLights(),q.isArrayCamera){const Mt=q.cameras;if(V.length>0)for(let It=0,Nt=Mt.length;It<Nt;It++){const Yt=Mt[It];kt(J,V,T,Yt)}Ut&&re.render(T);for(let It=0,Nt=Mt.length;It<Nt;It++){const Yt=Mt[It];Lt(m,T,Yt,Yt.viewport)}}else V.length>0&&kt(J,V,T,q),Ut&&re.render(T),Lt(m,T,q);D!==null&&F===0&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,q),ye.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],C===!0&&bt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ht(T,q,$,J){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||R.intersectsSprite(T)){J&&et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(rt);const It=ft.update(T),Nt=T.material;Nt.visible&&m.push(T,It,Nt,$,et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||R.intersectsObject(T))){const It=ft.update(T),Nt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),et.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),et.copy(It.boundingSphere.center)),et.applyMatrix4(T.matrixWorld).applyMatrix4(rt)),Array.isArray(Nt)){const Yt=It.groups;for(let Jt=0,Gt=Yt.length;Jt<Gt;Jt++){const ie=Yt[Jt],se=Nt[ie.materialIndex];se&&se.visible&&m.push(T,It,se,$,et.z,ie)}}else Nt.visible&&m.push(T,It,Nt,$,et.z,null)}}const Mt=T.children;for(let It=0,Nt=Mt.length;It<Nt;It++)Ht(Mt[It],q,$,J)}function Lt(T,q,$,J){const V=T.opaque,Mt=T.transmissive,It=T.transparent;p.setupLightsView($),C===!0&&bt.setGlobalState(_.clippingPlanes,$),J&&St.viewport(b.copy(J)),V.length>0&&ot(V,q,$),Mt.length>0&&ot(Mt,q,$),It.length>0&&ot(It,q,$),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function kt(T,q,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new di(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?lr:On,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Mt=p.state.transmissionRenderTarget[J.id],It=J.viewport||b;Mt.setSize(It.z*_.transmissionResolutionScale,It.w*_.transmissionResolutionScale);const Nt=_.getRenderTarget();_.setRenderTarget(Mt),_.getClearColor(K),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),Ut&&re.render($);const Yt=_.toneMapping;_.toneMapping=Kn;const Jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),C===!0&&bt.setGlobalState(_.clippingPlanes,J),ot(T,$,J),I.updateMultisampleRenderTarget(Mt),I.updateRenderTargetMipmap(Mt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let ie=0,se=q.length;ie<se;ie++){const _e=q[ie],me=_e.object,xe=_e.geometry,ce=_e.material,te=_e.group;if(ce.side===Nn&&me.layers.test(J.layers)){const Ie=ce.side;ce.side=an,ce.needsUpdate=!0,Dt(me,$,J,xe,ce,te),ce.side=Ie,ce.needsUpdate=!0,Gt=!0}}Gt===!0&&(I.updateMultisampleRenderTarget(Mt),I.updateRenderTargetMipmap(Mt))}_.setRenderTarget(Nt),_.setClearColor(K,j),Jt!==void 0&&(J.viewport=Jt),_.toneMapping=Yt}function ot(T,q,$){const J=q.isScene===!0?q.overrideMaterial:null;for(let V=0,Mt=T.length;V<Mt;V++){const It=T[V],Nt=It.object,Yt=It.geometry,Jt=J===null?It.material:J,Gt=It.group;Nt.layers.test($.layers)&&Dt(Nt,q,$,Yt,Jt,Gt)}}function Dt(T,q,$,J,V,Mt){T.onBeforeRender(_,q,$,J,V,Mt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(_,q,$,J,T,Mt),V.transparent===!0&&V.side===Nn&&V.forceSinglePass===!1?(V.side=an,V.needsUpdate=!0,_.renderBufferDirect($,q,J,V,T,Mt),V.side=jn,V.needsUpdate=!0,_.renderBufferDirect($,q,J,V,T,Mt),V.side=Nn):_.renderBufferDirect($,q,J,V,T,Mt),T.onAfterRender(_,q,$,J,V,Mt)}function zt(T,q,$){q.isScene!==!0&&(q=_t);const J=gt.get(T),V=p.state.lights,Mt=p.state.shadowsArray,It=V.state.version,Nt=Rt.getParameters(T,V.state,Mt,q,$),Yt=Rt.getProgramCacheKey(Nt);let Jt=J.programs;J.environment=T.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(T.isMeshStandardMaterial?Q:S).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Jt===void 0&&(T.addEventListener("dispose",fe),Jt=new Map,J.programs=Jt);let Gt=Jt.get(Yt);if(Gt!==void 0){if(J.currentProgram===Gt&&J.lightsStateVersion===It)return Ft(T,Nt),Gt}else Nt.uniforms=Rt.getUniforms(T),T.onBeforeCompile(Nt,_),Gt=Rt.acquireProgram(Nt,Yt),Jt.set(Yt,Gt),J.uniforms=Nt.uniforms;const ie=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ie.clippingPlanes=bt.uniform),Ft(T,Nt),J.needsLights=ne(T),J.lightsStateVersion=It,J.needsLights&&(ie.ambientLightColor.value=V.state.ambient,ie.lightProbe.value=V.state.probe,ie.directionalLights.value=V.state.directional,ie.directionalLightShadows.value=V.state.directionalShadow,ie.spotLights.value=V.state.spot,ie.spotLightShadows.value=V.state.spotShadow,ie.rectAreaLights.value=V.state.rectArea,ie.ltc_1.value=V.state.rectAreaLTC1,ie.ltc_2.value=V.state.rectAreaLTC2,ie.pointLights.value=V.state.point,ie.pointLightShadows.value=V.state.pointShadow,ie.hemisphereLights.value=V.state.hemi,ie.directionalShadowMap.value=V.state.directionalShadowMap,ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ie.spotShadowMap.value=V.state.spotShadowMap,ie.spotLightMatrix.value=V.state.spotLightMatrix,ie.spotLightMap.value=V.state.spotLightMap,ie.pointShadowMap.value=V.state.pointShadowMap,ie.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=Gt,J.uniformsList=null,Gt}function Qt(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Vr.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Ft(T,q){const $=gt.get(T);$.outputColorSpace=q.outputColorSpace,$.batching=q.batching,$.batchingColor=q.batchingColor,$.instancing=q.instancing,$.instancingColor=q.instancingColor,$.instancingMorph=q.instancingMorph,$.skinning=q.skinning,$.morphTargets=q.morphTargets,$.morphNormals=q.morphNormals,$.morphColors=q.morphColors,$.morphTargetsCount=q.morphTargetsCount,$.numClippingPlanes=q.numClippingPlanes,$.numIntersection=q.numClipIntersection,$.vertexAlphas=q.vertexAlphas,$.vertexTangents=q.vertexTangents,$.toneMapping=q.toneMapping}function Pt(T,q,$,J,V){q.isScene!==!0&&(q=_t),I.resetTextureUnits();const Mt=q.fog,It=J.isMeshStandardMaterial?q.environment:null,Nt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gi,Yt=(J.isMeshStandardMaterial?Q:S).get(J.envMap||It),Jt=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Gt=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ie=!!$.morphAttributes.position,se=!!$.morphAttributes.normal,_e=!!$.morphAttributes.color;let me=Kn;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(me=_.toneMapping);const xe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=xe!==void 0?xe.length:0,te=gt.get(J),Ie=p.state.lights;if(C===!0&&(W===!0||T!==y)){const Ze=T===y&&J.id===E;bt.setState(J,T,Ze)}let qt=!1;J.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ie.state.version||te.outputColorSpace!==Nt||V.isBatchedMesh&&te.batching===!1||!V.isBatchedMesh&&te.batching===!0||V.isBatchedMesh&&te.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&te.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&te.instancing===!1||!V.isInstancedMesh&&te.instancing===!0||V.isSkinnedMesh&&te.skinning===!1||!V.isSkinnedMesh&&te.skinning===!0||V.isInstancedMesh&&te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&te.instancingMorph===!1&&V.morphTexture!==null||te.envMap!==Yt||J.fog===!0&&te.fog!==Mt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==bt.numPlanes||te.numIntersection!==bt.numIntersection)||te.vertexAlphas!==Jt||te.vertexTangents!==Gt||te.morphTargets!==ie||te.morphNormals!==se||te.morphColors!==_e||te.toneMapping!==me||te.morphTargetsCount!==ce)&&(qt=!0):(qt=!0,te.__version=J.version);let Le=te.currentProgram;qt===!0&&(Le=zt(J,q,V));let Ae=!1,ze=!1,je=!1;const De=Le.getUniforms(),Ye=te.uniforms;if(St.useProgram(Le.program)&&(Ae=!0,ze=!0,je=!0),J.id!==E&&(E=J.id,ze=!0),Ae||y!==T){St.buffers.depth.getReversed()?(Z.copy(T.projectionMatrix),Lc(Z),Dc(Z),De.setValue(N,"projectionMatrix",Z)):De.setValue(N,"projectionMatrix",T.projectionMatrix),De.setValue(N,"viewMatrix",T.matrixWorldInverse);const w=De.map.cameraPosition;w!==void 0&&w.setValue(N,X.setFromMatrixPosition(T.matrixWorld)),Zt.logarithmicDepthBuffer&&De.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&De.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,ze=!0,je=!0)}if(V.isSkinnedMesh){De.setOptional(N,V,"bindMatrix"),De.setOptional(N,V,"bindMatrixInverse");const Ze=V.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),De.setValue(N,"boneTexture",Ze.boneTexture,I))}V.isBatchedMesh&&(De.setOptional(N,V,"batchingTexture"),De.setValue(N,"batchingTexture",V._matricesTexture,I),De.setOptional(N,V,"batchingIdTexture"),De.setValue(N,"batchingIdTexture",V._indirectTexture,I),De.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&De.setValue(N,"batchingColorTexture",V._colorsTexture,I));const Te=$.morphAttributes;if((Te.position!==void 0||Te.normal!==void 0||Te.color!==void 0)&&ae.update(V,$,Le),(ze||te.receiveShadow!==V.receiveShadow)&&(te.receiveShadow=V.receiveShadow,De.setValue(N,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ye.envMap.value=Yt,Ye.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(Ye.envMapIntensity.value=q.environmentIntensity),ze&&(De.setValue(N,"toneMappingExposure",_.toneMappingExposure),te.needsLights&&Bt(Ye,je),Mt&&J.fog===!0&&Ct.refreshFogUniforms(Ye,Mt),Ct.refreshMaterialUniforms(Ye,J,U,H,p.state.transmissionRenderTarget[T.id]),Vr.upload(N,Qt(te),Ye,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vr.upload(N,Qt(te),Ye,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&De.setValue(N,"center",V.center),De.setValue(N,"modelViewMatrix",V.modelViewMatrix),De.setValue(N,"normalMatrix",V.normalMatrix),De.setValue(N,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ze=J.uniformsGroups;for(let w=0,P=Ze.length;w<P;w++){const k=Ze[w];Y.update(k,Le),Y.bind(k,Le)}}return Le}function Bt(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function ne(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,q,$){gt.get(T.texture).__webglTexture=q,gt.get(T.depthTexture).__webglTexture=$;const J=gt.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,q){const $=gt.get(T);$.__webglFramebuffer=q,$.__useDefaultFramebuffer=q===void 0};const ue=N.createFramebuffer();this.setRenderTarget=function(T,q=0,$=0){D=T,L=q,F=$;let J=!0,V=null,Mt=!1,It=!1;if(T){const Yt=gt.get(T);if(Yt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(Yt.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(Yt.__hasExternalTextures)I.rebindTextures(T,gt.get(T.texture).__webglTexture,gt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ie=T.depthTexture;if(Yt.__boundDepthTexture!==ie){if(ie!==null&&gt.has(ie)&&(T.width!==ie.image.width||T.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}const Jt=T.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(It=!0);const Gt=gt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[q])?V=Gt[q][$]:V=Gt[q],Mt=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?V=gt.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?V=Gt[$]:V=Gt,b.copy(T.viewport),O.copy(T.scissor),B=T.scissorTest}else b.copy(z).multiplyScalar(U).floor(),O.copy(tt).multiplyScalar(U).floor(),B=G;if($!==0&&(V=ue),St.bindFramebuffer(N.FRAMEBUFFER,V)&&J&&St.drawBuffers(T,V),St.viewport(b),St.scissor(O),St.setScissorTest(B),Mt){const Yt=gt.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,Yt.__webglTexture,$)}else if(It){const Yt=gt.get(T.texture),Jt=q;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yt.__webglTexture,$,Jt)}else if(T!==null&&$!==0){const Yt=gt.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yt.__webglTexture,$)}E=-1},this.readRenderTargetPixels=function(T,q,$,J,V,Mt,It){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=gt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){St.bindFramebuffer(N.FRAMEBUFFER,Nt);try{const Yt=T.texture,Jt=Yt.format,Gt=Yt.type;if(!Zt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-J&&$>=0&&$<=T.height-V&&N.readPixels(q,$,J,V,he.convert(Jt),he.convert(Gt),Mt)}finally{const Yt=D!==null?gt.get(D).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(T,q,$,J,V,Mt,It){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=gt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){const Yt=T.texture,Jt=Yt.format,Gt=Yt.type;if(!Zt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=T.width-J&&$>=0&&$<=T.height-V){St.bindFramebuffer(N.FRAMEBUFFER,Nt);const ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.bufferData(N.PIXEL_PACK_BUFFER,Mt.byteLength,N.STREAM_READ),N.readPixels(q,$,J,V,he.convert(Jt),he.convert(Gt),0);const se=D!==null?gt.get(D).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,se);const _e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ic(N,_e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Mt),N.deleteBuffer(ie),N.deleteSync(_e),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,q=null,$=0){T.isTexture!==!0&&(ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-$),V=Math.floor(T.image.width*J),Mt=Math.floor(T.image.height*J),It=q!==null?q.x:0,Nt=q!==null?q.y:0;I.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,It,Nt,V,Mt),St.unbindTexture()};const wt=N.createFramebuffer(),pe=N.createFramebuffer();this.copyTextureToTexture=function(T,q,$=null,J=null,V=0,Mt=null){T.isTexture!==!0&&(ai("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],q=arguments[2],Mt=arguments[3]||0,$=null),Mt===null&&(V!==0?(ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=V,V=0):Mt=0);let It,Nt,Yt,Jt,Gt,ie,se,_e,me;const xe=T.isCompressedTexture?T.mipmaps[Mt]:T.image;if($!==null)It=$.max.x-$.min.x,Nt=$.max.y-$.min.y,Yt=$.isBox3?$.max.z-$.min.z:1,Jt=$.min.x,Gt=$.min.y,ie=$.isBox3?$.min.z:0;else{const Te=Math.pow(2,-V);It=Math.floor(xe.width*Te),Nt=Math.floor(xe.height*Te),T.isDataArrayTexture?Yt=xe.depth:T.isData3DTexture?Yt=Math.floor(xe.depth*Te):Yt=1,Jt=0,Gt=0,ie=0}J!==null?(se=J.x,_e=J.y,me=J.z):(se=0,_e=0,me=0);const ce=he.convert(q.format),te=he.convert(q.type);let Ie;q.isData3DTexture?(I.setTexture3D(q,0),Ie=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(I.setTexture2DArray(q,0),Ie=N.TEXTURE_2D_ARRAY):(I.setTexture2D(q,0),Ie=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const qt=N.getParameter(N.UNPACK_ROW_LENGTH),Le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ae=N.getParameter(N.UNPACK_SKIP_PIXELS),ze=N.getParameter(N.UNPACK_SKIP_ROWS),je=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Gt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ie);const De=T.isDataArrayTexture||T.isData3DTexture,Ye=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const Te=gt.get(T),Ze=gt.get(q),w=gt.get(Te.__renderTarget),P=gt.get(Ze.__renderTarget);St.bindFramebuffer(N.READ_FRAMEBUFFER,w.__webglFramebuffer),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let k=0;k<Yt;k++)De&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.get(T).__webglTexture,V,ie+k),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.get(q).__webglTexture,Mt,me+k)),N.blitFramebuffer(Jt,Gt,It,Nt,se,_e,It,Nt,N.DEPTH_BUFFER_BIT,N.NEAREST);St.bindFramebuffer(N.READ_FRAMEBUFFER,null),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||gt.has(T)){const Te=gt.get(T),Ze=gt.get(q);St.bindFramebuffer(N.READ_FRAMEBUFFER,wt),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,pe);for(let w=0;w<Yt;w++)De?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,V,ie+w):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Te.__webglTexture,V),Ye?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.__webglTexture,Mt,me+w):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ze.__webglTexture,Mt),V!==0?N.blitFramebuffer(Jt,Gt,It,Nt,se,_e,It,Nt,N.COLOR_BUFFER_BIT,N.NEAREST):Ye?N.copyTexSubImage3D(Ie,Mt,se,_e,me+w,Jt,Gt,It,Nt):N.copyTexSubImage2D(Ie,Mt,se,_e,Jt,Gt,It,Nt);St.bindFramebuffer(N.READ_FRAMEBUFFER,null),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ye?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ie,Mt,se,_e,me,It,Nt,Yt,ce,te,xe.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(Ie,Mt,se,_e,me,It,Nt,Yt,ce,xe.data):N.texSubImage3D(Ie,Mt,se,_e,me,It,Nt,Yt,ce,te,xe):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Mt,se,_e,It,Nt,ce,te,xe.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Mt,se,_e,xe.width,xe.height,ce,xe.data):N.texSubImage2D(N.TEXTURE_2D,Mt,se,_e,It,Nt,ce,te,xe);N.pixelStorei(N.UNPACK_ROW_LENGTH,qt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,je),Mt===0&&q.generateMipmaps&&N.generateMipmap(Ie),St.unbindTexture()},this.copyTextureToTexture3D=function(T,q,$=null,J=null,V=0){return T.isTexture!==!0&&(ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,T=arguments[2],q=arguments[3],V=arguments[4]||0),ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,q,$,J,V)},this.initRenderTarget=function(T){gt.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),St.unbindTexture()},this.resetState=function(){L=0,F=0,D=null,St.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}}function Dr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var _l={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(u,h){if(!s[u]){if(!n[u]){var l=typeof Dr=="function"&&Dr;if(!h&&l)return l(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=s[u]={exports:{}};n[u][0].call(f.exports,function(d){var v=n[u][1][d];return a(v||d)},f,f.exports,e,n,s,r)}return s[u].exports}for(var o=typeof Dr=="function"&&Dr,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new r;a.prototype.setFromPoints=function(u,h,l,f){var d=this.lowerBound,v=this.upperBound,g=l;d.copy(u[0]),g&&g.vmult(d,d),v.copy(d);for(var m=1;m<u.length;m++){var p=u[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<d.x&&(d.x=p.x),p.y>v.y&&(v.y=p.y),p.y<d.y&&(d.y=p.y),p.z>v.z&&(v.z=p.z),p.z<d.z&&(d.z=p.z)}return h&&(h.vadd(d,d),h.vadd(v,v)),f&&(d.x-=f,d.y-=f,d.z-=f,v.x+=f,v.y+=f,v.z+=f),this},a.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=u.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=u.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=u.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(u){var h=this.lowerBound,l=this.upperBound,f=u.lowerBound,d=u.upperBound;return(f.x<=l.x&&l.x<=d.x||h.x<=d.x&&d.x<=l.x)&&(f.y<=l.y&&l.y<=d.y||h.y<=d.y&&d.y<=l.y)&&(f.z<=l.z&&l.z<=d.z||h.z<=d.z&&d.z<=l.z)},a.prototype.contains=function(u){var h=this.lowerBound,l=this.upperBound,f=u.lowerBound,d=u.upperBound;return h.x<=f.x&&l.x>=d.x&&h.y<=f.y&&l.y>=d.y&&h.z<=f.z&&l.z>=d.z},a.prototype.getCorners=function(u,h,l,f,d,v,g,m){var p=this.lowerBound,x=this.upperBound;u.copy(p),h.set(x.x,p.y,p.z),l.set(x.x,x.y,p.z),f.set(p.x,x.y,x.z),d.set(x.x,p.y,p.z),v.set(p.x,x.y,p.z),g.set(p.x,p.y,x.z),m.copy(x)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(u,h){var l=c,f=l[0],d=l[1],v=l[2],g=l[3],m=l[4],p=l[5],x=l[6],M=l[7];this.getCorners(f,d,v,g,m,p,x,M);for(var _=0;_!==8;_++){var A=l[_];u.pointToLocal(A,A)}return h.setFromPoints(l)},a.prototype.toWorldFrame=function(u,h){var l=c,f=l[0],d=l[1],v=l[2],g=l[3],m=l[4],p=l[5],x=l[6],M=l[7];this.getCorners(f,d,v,g,m,p,x,M);for(var _=0;_!==8;_++){var A=l[_];u.pointToWorld(A,A)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var c=o;o=a,a=c}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,c){if(a=a.index,o=o.index,o>a){var u=o;o=a,a=u}this.matrix[(a*(a+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!((g.collisionFilterGroup&m.collisionFilterMask)===0||(m.collisionFilterGroup&g.collisionFilterMask)===0||((g.type&u)!==0||g.sleepState===r.SLEEPING)&&((m.type&u)!==0||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,p,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,x):this.doBoundingSphereBroadphase(g,m,p,x)};var h=new a;new a,new o,new a,c.prototype.doBoundingSphereBroadphase=function(g,m,p,x){var M=h;m.position.vsub(g.position,M);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),A=M.norm2();A<_&&(p.push(g),x.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,p,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),x.push(m))};var l={keys:[]},f=[],d=[];c.prototype.makePairsUnique=function(g,m){for(var p=l,x=f,M=d,_=g.length,A=0;A!==_;A++)x[A]=g[A],M[A]=m[A];g.length=0,m.length=0;for(var A=0;A!==_;A++){var L=x[A].id,F=M[A].id,D=L<F?L+","+F:F+","+L;p[D]=A,p.keys.push(D)}for(var A=0;A!==p.keys.length;A++){var D=p.keys.pop(),E=p[D];g.push(x[E]),m.push(M[E]),delete p[D]}},c.prototype.setWorld=function(g){};var v=new a;c.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},c.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=c;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,f,d,v){r.apply(this),this.nx=f||10,this.ny=d||10,this.nz=v||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var u=new a;new a,c.prototype.collisionPairs=function(h,l,f){var d=h.numObjects(),v=h.bodies,Z=this.aabbMax,W=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,x=m*p,M=p,_=1,A=Z.x,L=Z.y,F=Z.z,D=W.x,E=W.y,y=W.z,b=g/(A-D),O=m/(L-E),B=p/(F-y),K=(A-D)/g,j=(L-E)/m,at=(F-y)/p,H=Math.sqrt(K*K+j*j+at*at)*.5,U=o.types,st=U.SPHERE,nt=U.PLANE;U.BOX,U.COMPOUND,U.CONVEXPOLYHEDRON;for(var z=this.bins,tt=this.binLengths,G=this.bins.length,R=0;R!==G;R++)tt[R]=0;var C=Math.ceil,W=Math.min,Z=Math.max;function rt(ve,bt,Kt,re,ae,$t,ge){var he=(ve-D)*b|0,ye=(bt-E)*O|0,Y=(Kt-y)*B|0,Ot=C((re-D)*b),ht=C((ae-E)*O),xt=C(($t-y)*B);he<0?he=0:he>=g&&(he=g-1),ye<0?ye=0:ye>=m&&(ye=m-1),Y<0?Y=0:Y>=p&&(Y=p-1),Ot<0?Ot=0:Ot>=g&&(Ot=g-1),ht<0?ht=0:ht>=m&&(ht=m-1),xt<0?xt=0:xt>=p&&(xt=p-1),he*=x,ye*=M,Y*=_,Ot*=x,ht*=M,xt*=_;for(var Wt=he;Wt<=Ot;Wt+=x)for(var Xt=ye;Xt<=ht;Xt+=M)for(var fe=Y;fe<=xt;fe+=_){var Pe=Wt+Xt+fe;z[Pe][tt[Pe]++]=ge}}for(var R=0;R!==d;R++){var X=v[R],et=X.shape;switch(et.type){case st:var _t=X.position.x,Ut=X.position.y,yt=X.position.z,N=et.radius;rt(_t-N,Ut-N,yt-N,_t+N,Ut+N,yt+N,X);break;case nt:et.worldNormalNeedsUpdate&&et.computeWorldNormal(X.quaternion);var vt=et.worldNormal,ut=D+K*.5-X.position.x,Zt=E+j*.5-X.position.y,St=y+at*.5-X.position.z,le=u;le.set(ut,Zt,St);for(var gt=0,I=0;gt!==g;gt++,I+=x,le.y=Zt,le.x+=K)for(var S=0,Q=0;S!==m;S++,Q+=M,le.z=St,le.y+=j)for(var dt=0,pt=0;dt!==p;dt++,pt+=_,le.z+=at)if(le.dot(vt)<H){var ft=I+Q+pt;z[ft][tt[ft]++]=X}break;default:X.aabbNeedsUpdate&&X.computeAABB(),rt(X.aabb.lowerBound.x,X.aabb.lowerBound.y,X.aabb.lowerBound.z,X.aabb.upperBound.x,X.aabb.upperBound.y,X.aabb.upperBound.z,X);break}}for(var R=0;R!==G;R++){var Rt=tt[R];if(Rt>1)for(var Ct=z[R],gt=0;gt!==Rt;gt++)for(var X=Ct[gt],S=0;S!==gt;S++){var Vt=Ct[S];this.needBroadphaseCollision(X,Vt)&&this.intersectionTest(X,Vt,l,f)}}this.makePairsUnique(l,f)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,u,h){var l=c.bodies,f=l.length,d,v,g,m;for(d=0;d!==f;d++)for(v=0;v!==d;v++)g=l[d],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,h)},new a,o.prototype.aabbQuery=function(c,u,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var f=c.bodies[l];f.aabbNeedsUpdate&&f.computeAABB(),f.aabb.overlaps(u)&&h.push(f)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var c=o;o=a,a=c}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,c){if(a=a.id,o=o.id,o>a){var u=o;o=a,a=u}c?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=l;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function l(G,R){this.from=G?G.clone():new r,this.to=R?R.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(C){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var f=new h,d=[];l.prototype.intersectWorld=function(G,R){return this.mode=R.mode||l.ANY,this.result=R.result||new c,this.skipBackfaces=!!R.skipBackfaces,this.collisionFilterMask=typeof R.collisionFilterMask<"u"?R.collisionFilterMask:-1,this.collisionFilterGroup=typeof R.collisionFilterGroup<"u"?R.collisionFilterGroup:-1,R.from&&this.from.copy(R.from),R.to&&this.to.copy(R.to),this.callback=R.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(f),d.length=0,G.broadphase.aabbQuery(G,f,d),this.intersectBodies(d),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(G,R,C,W){W.vsub(R,nt),C.vsub(R,v),G.vsub(R,g);var Z=nt.dot(nt),rt=nt.dot(v),X=nt.dot(g),et=v.dot(v),_t=v.dot(g),Ut,yt;return(Ut=et*X-rt*_t)>=0&&(yt=Z*_t-rt*X)>=0&&Ut+yt<Z*et-rt*rt}var p=new r,x=new a;l.prototype.intersectBody=function(G,R){R&&(this.result=R,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!G.collisionResponse)&&!((this.collisionFilterGroup&G.collisionFilterMask)===0||(G.collisionFilterGroup&this.collisionFilterMask)===0))for(var W=p,Z=x,rt=0,X=G.shapes.length;rt<X;rt++){var et=G.shapes[rt];if(!(C&&!et.collisionResponse)&&(G.quaternion.mult(G.shapeOrientations[rt],Z),G.quaternion.vmult(G.shapeOffsets[rt],W),W.vadd(G.position,W),this.intersectShape(et,Z,W,G),this.result._shouldStop))break}},l.prototype.intersectBodies=function(G,R){R&&(this.result=R,this._updateDirection());for(var C=0,W=G.length;!this.result._shouldStop&&C<W;C++)this.intersectBody(G[C])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(G,R,C,W){var Z=this.from,rt=tt(Z,this._direction,C);if(!(rt>G.boundingSphereRadius)){var X=this[G.type];X&&X.call(this,G,R,C,W)}},new r,new r;var M=new r,_=new r,A=new r,L=new r;new r,new c,l.prototype.intersectBox=function(G,R,C,W){return this.intersectConvex(G.convexPolyhedronRepresentation,R,C,W)},l.prototype[u.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(G,R,C,W){var Z=this.from,rt=this.to,X=this._direction,et=new r(0,0,1);R.vmult(et,et);var _t=new r;Z.vsub(C,_t);var Ut=_t.dot(et);rt.vsub(C,_t);var yt=_t.dot(et);if(!(Ut*yt>0)&&!(Z.distanceTo(rt)<Ut)){var N=et.dot(X);if(!(Math.abs(N)<this.precision)){var vt=new r,ut=new r,Zt=new r;Z.vsub(C,vt);var St=-et.dot(vt)/N;X.scale(St,ut),Z.vadd(ut,Zt),this.reportIntersection(et,Zt,G,W,-1)}}},l.prototype[u.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(G){var R=this.to,C=this.from;G.lowerBound.x=Math.min(R.x,C.x),G.lowerBound.y=Math.min(R.y,C.y),G.lowerBound.z=Math.min(R.z,C.z),G.upperBound.x=Math.max(R.x,C.x),G.upperBound.y=Math.max(R.y,C.y),G.upperBound.z=Math.max(R.z,C.z)};var F={faceList:[0]};l.prototype.intersectHeightfield=function(G,R,C,W){G.data,G.elementSize;var Z=new r,rt=new l(this.from,this.to);o.pointToLocalFrame(C,R,rt.from,rt.from),o.pointToLocalFrame(C,R,rt.to,rt.to);var X=[],et=null,_t=null,Ut=null,yt=null,N=G.getIndexOfPosition(rt.from.x,rt.from.y,X,!1);if(N&&(et=X[0],_t=X[1],Ut=X[0],yt=X[1]),N=G.getIndexOfPosition(rt.to.x,rt.to.y,X,!1),N&&((et===null||X[0]<et)&&(et=X[0]),(Ut===null||X[0]>Ut)&&(Ut=X[0]),(_t===null||X[1]<_t)&&(_t=X[1]),(yt===null||X[1]>yt)&&(yt=X[1])),et!==null){var vt=[];G.getRectMinMax(et,_t,Ut,yt,vt),vt[0],vt[1];for(var ut=et;ut<=Ut;ut++)for(var Zt=_t;Zt<=yt;Zt++){if(this.result._shouldStop||(G.getConvexTrianglePillar(ut,Zt,!1),o.pointToWorldFrame(C,R,G.pillarOffset,Z),this.intersectConvex(G.pillarConvex,R,Z,W,F),this.result._shouldStop))return;G.getConvexTrianglePillar(ut,Zt,!0),o.pointToWorldFrame(C,R,G.pillarOffset,Z),this.intersectConvex(G.pillarConvex,R,Z,W,F)}}},l.prototype[u.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var D=new r,E=new r;l.prototype.intersectSphere=function(G,R,C,W){var Z=this.from,rt=this.to,X=G.radius,et=Math.pow(rt.x-Z.x,2)+Math.pow(rt.y-Z.y,2)+Math.pow(rt.z-Z.z,2),_t=2*((rt.x-Z.x)*(Z.x-C.x)+(rt.y-Z.y)*(Z.y-C.y)+(rt.z-Z.z)*(Z.z-C.z)),Ut=Math.pow(Z.x-C.x,2)+Math.pow(Z.y-C.y,2)+Math.pow(Z.z-C.z,2)-Math.pow(X,2),yt=Math.pow(_t,2)-4*et*Ut,N=D,vt=E;if(!(yt<0))if(yt===0)Z.lerp(rt,yt,N),N.vsub(C,vt),vt.normalize(),this.reportIntersection(vt,N,G,W,-1);else{var ut=(-_t-Math.sqrt(yt))/(2*et),Zt=(-_t+Math.sqrt(yt))/(2*et);if(ut>=0&&ut<=1&&(Z.lerp(rt,ut,N),N.vsub(C,vt),vt.normalize(),this.reportIntersection(vt,N,G,W,-1)),this.result._shouldStop)return;Zt>=0&&Zt<=1&&(Z.lerp(rt,Zt,N),N.vsub(C,vt),vt.normalize(),this.reportIntersection(vt,N,G,W,-1))}},l.prototype[u.types.SPHERE]=l.prototype.intersectSphere;var y=new r;new r,new r;var b=new r;l.prototype.intersectConvex=function(R,C,W,Z,rt){for(var X=y,et=b,_t=rt&&rt.faceList||null,Ut=R.faces,yt=R.vertices,N=R.faceNormals,vt=this._direction,ut=this.from,Zt=this.to,St=ut.distanceTo(Zt),le=_t?_t.length:Ut.length,gt=this.result,I=0;!gt._shouldStop&&I<le;I++){var S=_t?_t[I]:I,Q=Ut[S],dt=N[S],pt=C,ft=W;et.copy(yt[Q[0]]),pt.vmult(et,et),et.vadd(ft,et),et.vsub(ut,et),pt.vmult(dt,X);var Rt=vt.dot(X);if(!(Math.abs(Rt)<this.precision)){var Ct=X.dot(et)/Rt;if(!(Ct<0)){vt.mult(Ct,M),M.vadd(ut,M),_.copy(yt[Q[0]]),pt.vmult(_,_),ft.vadd(_,_);for(var Vt=1;!gt._shouldStop&&Vt<Q.length-1;Vt++){A.copy(yt[Q[Vt]]),L.copy(yt[Q[Vt+1]]),pt.vmult(A,A),pt.vmult(L,L),ft.vadd(A,A),ft.vadd(L,L);var ve=M.distanceTo(ut);!(m(M,_,A,L)||m(M,A,_,L))||ve>St||this.reportIntersection(X,M,R,Z,S)}}}}},l.prototype[u.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var O=new r,B=new r,K=new r,j=new r,at=new r,H=new r;new h;var U=[],st=new o;l.prototype.intersectTrimesh=function(R,C,W,Z,rt){var X=O,et=U,_t=st,Ut=b,yt=B,N=K,vt=j,ut=H,Zt=at;rt&&rt.faceList;var St=R.indices;R.vertices,R.faceNormals;var le=this.from,gt=this.to,I=this._direction;_t.position.copy(W),_t.quaternion.copy(C),o.vectorToLocalFrame(W,C,I,yt),o.pointToLocalFrame(W,C,le,N),o.pointToLocalFrame(W,C,gt,vt);var S=N.distanceSquared(vt);R.tree.rayQuery(this,_t,et);for(var Q=0,dt=et.length;!this.result._shouldStop&&Q!==dt;Q++){var pt=et[Q];R.getNormal(pt,X),R.getVertex(St[pt*3],_),_.vsub(N,Ut);var ft=yt.dot(X),Rt=X.dot(Ut)/ft;if(!(Rt<0)){yt.scale(Rt,M),M.vadd(N,M),R.getVertex(St[pt*3+1],A),R.getVertex(St[pt*3+2],L);var Ct=M.distanceSquared(N);!(m(M,A,_,L)||m(M,_,A,L))||Ct>S||(o.vectorToWorldFrame(C,X,Zt),o.pointToWorldFrame(W,C,M,ut),this.reportIntersection(Zt,ut,R,Z,pt))}}et.length=0},l.prototype[u.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(G,R,C,W,Z){var rt=this.from,X=this.to,et=rt.distanceTo(R),_t=this.result;if(!(this.skipBackfaces&&G.dot(this._direction)>0))switch(_t.hitFaceIndex=typeof Z<"u"?Z:-1,this.mode){case l.ALL:this.hasHit=!0,_t.set(rt,X,G,R,C,W,et),_t.hasHit=!0,this.callback(_t);break;case l.CLOSEST:(et<_t.distance||!_t.hasHit)&&(this.hasHit=!0,_t.hasHit=!0,_t.set(rt,X,G,R,C,W,et));break;case l.ANY:this.hasHit=!0,_t.hasHit=!0,_t.set(rt,X,G,R,C,W,et),_t._shouldStop=!0;break}};var nt=new r,z=new r;function tt(G,R,C){C.vsub(G,nt);var W=nt.dot(R);R.mult(W,z),z.vadd(G,z);var Z=C.distanceTo(z);return Z}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,c,u,h,l,f,d){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=l,this.body=f,this.distance=d}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(u){c.push(u.body)},this._removeBodyHandler=function(u){var h=c.indexOf(u.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortY=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortZ=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},a.prototype.collisionPairs=function(o,c,u){var h=this.axisList,l=h.length,f=this.axisIndex,d,v;for(this.dirty&&(this.sortList(),this.dirty=!1),d=0;d!==l;d++){var g=h[d];for(v=d+1;v<l;v++){var m=h[v];if(!!this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,f))break;this.intersectionTest(g,m,c,u)}}}},a.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,u=o.length,h=0;h!==u;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?a.insertionSortX(o):c===1?a.insertionSortY(o):c===2&&a.insertionSortZ(o)},a.checkBounds=function(o,c,u){var h,l;u===0?(h=o.position.x,l=c.position.x):u===1?(h=o.position.y,l=c.position.y):u===2&&(h=o.position.z,l=c.position.z);var f=o.boundingRadius,d=c.boundingRadius,v=h+f,g=l-d;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,c=0,u=0,h=0,l=0,f=0,d=this.axisList,v=d.length,g=1/v,m=0;m!==v;m++){var p=d[m],x=p.position.x;o+=x,c+=x*x;var M=p.position.y;u+=M,h+=M*M;var _=p.position.z;l+=_,f+=_*_}var A=c-o*o*g,L=h-u*u*g,F=f-l*l*g;A>L?A>F?this.axisIndex=0:this.axisIndex=2:L>F?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,c,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var f=this.axisList;c.lowerBound[l],c.upperBound[l];for(var d=0;d<f.length;d++){var v=f[d];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(h,l,f){f=f||{};var d=typeof f.maxForce<"u"?f.maxForce:1e6,v=f.pivotA?f.pivotA.clone():new c,g=f.pivotB?f.pivotB.clone():new c;this.axisA=f.axisA?f.axisA.clone():new c,this.axisB=f.axisB?f.axisB.clone():new c,r.call(this,h,v,l,g,d),this.collideConnected=!!f.collideConnected,this.angle=typeof f.angle<"u"?f.angle:0;var m=this.coneEquation=new a(h,l,f),p=this.twistEquation=new o(h,l,f);this.twistAngle=typeof f.twistAngle<"u"?f.twistAngle:0,m.maxForce=0,m.minForce=-d,p.maxForce=0,p.minForce=-d,this.equations.push(m,p)}u.prototype=new r,u.constructor=u,new c,new c,u.prototype.update=function(){var h=this.bodyA,l=this.bodyB,f=this.coneEquation,d=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,f.axisA),l.vectorToWorldFrame(this.axisB,f.axisB),this.axisA.tangents(d.axisA,d.axisA),h.vectorToWorldFrame(d.axisA,d.axisA),this.axisB.tangents(d.axisB,d.axisB),l.vectorToWorldFrame(d.axisB,d.axisB),f.angle=this.angle,d.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,c,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=a.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(c,u,h,l){r.call(this,c,u),typeof h>"u"&&(h=c.position.distanceTo(u.position)),typeof l>"u"&&(l=1e6),this.distance=h;var f=this.distanceEquation=new a(c,u);this.equations.push(f),f.minForce=-l,f.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,u=this.bodyB,h=this.distanceEquation,l=this.distance*.5,f=h.ni;u.position.vsub(c.position,f),f.normalize(),f.mult(l,h.ri),f.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(f,d,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,p=v.pivotB?v.pivotB.clone():new c;r.call(this,f,m,d,p,g);var x=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);x.normalize();var M=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);M.normalize();var _=this.rotationalEquation1=new a(f,d,v),A=this.rotationalEquation2=new a(f,d,v),L=this.motorEquation=new o(f,d,g);L.enabled=!1,this.equations.push(_,A,L)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(f){this.motorEquation.targetVelocity=f},u.prototype.setMotorMaxForce=function(f){this.motorEquation.maxForce=f,this.motorEquation.minForce=-f};var h=new c,l=new c;u.prototype.update=function(){var f=this.bodyA,d=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=h,x=l,M=this.axisA,_=this.axisB;r.prototype.update.call(this),f.quaternion.vmult(M,p),d.quaternion.vmult(_,x),p.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(f.quaternion.vmult(this.axisA,v.axisA),d.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(u,h,l){l=l||{};var f=typeof l.maxForce<"u"?l.maxForce:1e6,d=new o,v=new o,g=new o;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,d),r.call(this,u,d,h,v,f);var m=this.rotationalEquation1=new a(u,h,l),p=this.rotationalEquation2=new a(u,h,l),x=this.rotationalEquation3=new a(u,h,l);this.equations.push(m,p,x)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,f=this.rotationalEquation2,d=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),u.vectorToWorldFrame(o.UNIT_Y,f.axisA),h.vectorToWorldFrame(o.UNIT_Z,f.axisB),u.vectorToWorldFrame(o.UNIT_Z,d.axisA),h.vectorToWorldFrame(o.UNIT_X,d.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=c;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(u,h,l,f,d){r.call(this,u,l),d=typeof d<"u"?d:1e6,this.pivotA=h?h.clone():new o,this.pivotB=f?f.clone():new o;var v=this.equationX=new a(u,l),g=this.equationY=new a(u,l),m=this.equationZ=new a(u,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-d,v.maxForce=g.maxForce=m.maxForce=d,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB,l=this.equationX,f=this.equationY,d=this.equationZ;u.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj),d.ri.copy(l.ri),d.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,f){f=f||{};var d=typeof f.maxForce<"u"?f.maxForce:1e6;a.call(this,h,l,-d,d),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.angle=typeof f.angle<"u"?f.angle:0}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,f=this.b,d=this.axisA,v=this.axisB,g=c,m=u,p=this.jacobianElementA,x=this.jacobianElementB;d.cross(v,g),v.cross(d,m),p.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.angle)-d.dot(v),_=this.computeGW(),A=this.computeGiMf(),L=-M*l-_*f-h*A;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,p,x){x=typeof x<"u"?x:1e6,r.call(this,m,p,0,x),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a,h=new a;o.prototype.computeB=function(m){var p=this.a,x=this.b,M=this.bi,_=this.bj,A=this.ri,L=this.rj,F=c,D=u,E=M.velocity,y=M.angularVelocity;M.force,M.torque;var b=_.velocity,O=_.angularVelocity;_.force,_.torque;var B=h,K=this.jacobianElementA,j=this.jacobianElementB,at=this.ni;A.cross(at,F),L.cross(at,D),at.negate(K.spatial),F.negate(K.rotational),j.spatial.copy(at),j.rotational.copy(D),B.copy(_.position),B.vadd(L,B),B.vsub(M.position,B),B.vsub(A,B);var H=at.dot(B),U=this.restitution+1,st=U*b.dot(at)-U*E.dot(at)+O.dot(D)-y.dot(F),nt=this.computeGiMf(),z=-H*p-st*x-m*nt;return z};var l=new a,f=new a,d=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,p=f,x=d,M=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,M),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(M,p),m.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,p,x){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var x=m,M=g,_=p;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*M*(1+4*x))},o.prototype.computeB=function(g,m,p){var x=this.computeGW(),M=this.computeGq(),_=this.computeGiMf();return-M*g-x*m-_*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.position,_=x.position;return g.spatial.dot(M)+m.spatial.dot(_)};var c=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.velocity,_=x.velocity,A=p.angularVelocity||c,L=x.angularVelocity||c;return g.multiplyVectors(M,A)+m.multiplyVectors(_,L)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.vlambda,_=x.vlambda,A=p.wlambda||c,L=x.wlambda||c;return g.multiplyVectors(M,A)+m.multiplyVectors(_,L)};var u=new a,h=new a,l=new a,f=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.force,_=p.torque,A=x.force,L=x.torque,F=p.invMassSolve,D=x.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(L,f):f.set(0,0,0),M.mult(F,u),A.mult(D,h),g.multiplyVectors(u,l)+m.multiplyVectors(h,f)};var d=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,M=p.invMassSolve,_=x.invMassSolve,A=p.invInertiaWorldSolve,L=x.invInertiaWorldSolve,F=M+_;return A&&(A.vmult(g.rotational,d),F+=d.dot(g.rotational)),L&&(L.vmult(m.rotational,d),F+=d.dot(m.rotational)),F};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,x=this.bi,M=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),p.spatial.mult(M.invMassSolve*g,_),M.vlambda.vadd(_,M.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),M.invInertiaWorldSolve&&(M.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(g,_),M.wlambda.vadd(_,M.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,l,f){r.call(this,h,l,-f,f),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var f=this.ri,d=this.rj,v=c,g=u,m=this.t;f.cross(m,v),d.cross(m,g);var p=this.jacobianElementA,x=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),x.spatial.copy(m),x.rotational.copy(g);var M=this.computeGW(),_=this.computeGiMf(),A=-M*l-h*_;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,f){f=f||{};var d=typeof f.maxForce<"u"?f.maxForce:1e6;a.call(this,h,l,-d,d),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,f=this.b,d=this.axisA,v=this.axisB,g=c,m=u,p=this.jacobianElementA,x=this.jacobianElementB;d.cross(v,g),v.cross(d,m),p.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.maxAngle)-d.dot(v),_=this.computeGW(),A=this.computeGiMf(),L=-M*l-_*f-h*A;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,u,h){h=typeof h<"u"?h:1e6,a.call(this,c,u,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,f=this.jacobianElementA,d=this.jacobianElementB;f.rotational.copy(h),l.negate(d.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,c,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,c],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},a.prototype.getTrace=function(c){var c=c||new r,u=this.elements;c.x=u[0],c.y=u[4],c.z=u[8]},a.prototype.vmult=function(o,c){c=c||new r;var u=this.elements,h=o.x,l=o.y,f=o.z;return c.x=u[0]*h+u[1]*l+u[2]*f,c.y=u[3]*h+u[4]*l+u[5]*f,c.z=u[6]*h+u[7]*l+u[8]*f,c},a.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},a.prototype.mmult=function(o,c){for(var u=c||new a,h=0;h<3;h++)for(var l=0;l<3;l++){for(var f=0,d=0;d<3;d++)f+=o.elements[h+d*3]*this.elements[d+l*3];u.elements[h+l*3]=f}return u},a.prototype.scale=function(o,c){c=c||new a;for(var u=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*u[3*l+0],h[3*l+1]=o.y*u[3*l+1],h[3*l+2]=o.z*u[3*l+2];return c},a.prototype.solve=function(o,c){c=c||new r;for(var u=3,h=4,l=[],f=0;f<u*h;f++)l.push(0);var f,d;for(f=0;f<3;f++)for(d=0;d<3;d++)l[f+h*d]=this.elements[f+3*d];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,p=4,x;do{if(f=g-v,l[f+h*f]===0){for(d=f+1;d<g;d++)if(l[f+h*d]!==0){m=p;do x=p-m,l[x+h*f]+=l[x+h*d];while(--m);break}}if(l[f+h*f]!==0)for(d=f+1;d<g;d++){var M=l[f+h*d]/l[f+h*f];m=p;do x=p-m,l[x+h*d]=x<=f?0:l[x+h*d]-l[x+h*f]*M;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},a.prototype.e=function(o,c,u){if(u===void 0)return this.elements[c+3*o];this.elements[c+3*o]=u},a.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},a.prototype.toString=function(){for(var o="",c=",",u=0;u<9;u++)o+=this.elements[u]+c;return o},a.prototype.reverse=function(o){o=o||new a;for(var c=3,u=6,h=[],l=0;l<c*u;l++)h.push(0);var l,f;for(l=0;l<3;l++)for(f=0;f<3;f++)h[l+u*f]=this.elements[l+3*f];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var d=3,v=d,g,m=u,p;do{if(l=v-d,h[l+u*l]===0){for(f=l+1;f<v;f++)if(h[l+u*f]!==0){g=m;do p=m-g,h[p+u*l]+=h[p+u*f];while(--g);break}}if(h[l+u*l]!==0)for(f=l+1;f<v;f++){var x=h[l+u*f]/h[l+u*l];g=m;do p=m-g,h[p+u*f]=p<=l?0:h[p+u*f]-h[p+u*l]*x;while(--g)}}while(--d);l=2;do{f=l-1;do{var x=h[l+u*f]/h[l+u*l];g=u;do p=u-g,h[p+u*f]=h[p+u*f]-h[p+u*l]*x;while(--g)}while(f--)}while(--l);l=2;do{var x=1/h[l+u*l];g=u;do p=u-g,h[p+u*l]=h[p+u*l]*x;while(--g)}while(l--);l=2;do{f=2;do{if(p=h[c+f+u*l],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,f,p)}while(f--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var c=o.x,u=o.y,h=o.z,l=o.w,f=c+c,d=u+u,v=h+h,g=c*f,m=c*d,p=c*v,x=u*d,M=u*v,_=h*v,A=l*f,L=l*d,F=l*v,D=this.elements;return D[3*0+0]=1-(x+_),D[3*0+1]=m-F,D[3*0+2]=p+L,D[3*1+0]=m+F,D[3*1+1]=1-(g+_),D[3*1+2]=M-A,D[3*2+0]=p-L,D[3*2+1]=M+A,D[3*2+2]=1-(g+x),this},a.prototype.transpose=function(o){o=o||new a;for(var c=o.elements,u=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=u[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(f,d,v,g){this.x=f!==void 0?f:0,this.y=d!==void 0?d:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(f,d,v,g){this.x=f,this.y=d,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(f,d){var v=Math.sin(d*.5);this.x=f.x*v,this.y=f.y*v,this.z=f.z*v,this.w=Math.cos(d*.5)},a.prototype.toAxisAngle=function(f){f=f||new r,this.normalize();var d=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(f.x=this.x,f.y=this.y,f.z=this.z):(f.x=this.x/v,f.y=this.y/v,f.z=this.z/v),[f,d]};var o=new r,c=new r;a.prototype.setFromVectors=function(f,d){if(f.isAntiparallelTo(d)){var v=o,g=c;f.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=f.cross(d);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(f.norm(),2)*Math.pow(d.norm(),2))+f.dot(d),this.normalize()}};var u=new r,h=new r,l=new r;a.prototype.mult=function(f,d){d=d||new a;var v=this.w,g=u,m=h,p=l;return g.set(this.x,this.y,this.z),m.set(f.x,f.y,f.z),d.w=v*f.w-g.dot(m),g.cross(m,p),d.x=v*m.x+f.w*g.x+p.x,d.y=v*m.y+f.w*g.y+p.y,d.z=v*m.z+f.w*g.z+p.z,d},a.prototype.inverse=function(f){var d=this.x,v=this.y,g=this.z,m=this.w;f=f||new a,this.conjugate(f);var p=1/(d*d+v*v+g*g+m*m);return f.x*=p,f.y*=p,f.z*=p,f.w*=p,f},a.prototype.conjugate=function(f){return f=f||new a,f.x=-this.x,f.y=-this.y,f.z=-this.z,f.w=this.w,f},a.prototype.normalize=function(){var f=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(f=1/f,this.x*=f,this.y*=f,this.z*=f,this.w*=f)},a.prototype.normalizeFast=function(){var f=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=f,this.y*=f,this.z*=f,this.w*=f)},a.prototype.vmult=function(f,d){d=d||new r;var v=f.x,g=f.y,m=f.z,p=this.x,x=this.y,M=this.z,_=this.w,A=_*v+x*m-M*g,L=_*g+M*v-p*m,F=_*m+p*g-x*v,D=-p*v-x*g-M*m;return d.x=A*_+D*-p+L*-M-F*-x,d.y=L*_+D*-x+F*-p-A*-M,d.z=F*_+D*-M+A*-x-L*-p,d},a.prototype.copy=function(f){return this.x=f.x,this.y=f.y,this.z=f.z,this.w=f.w,this},a.prototype.toEuler=function(f,d){d=d||"YZX";var v,g,m,p=this.x,x=this.y,M=this.z,_=this.w;switch(d){case"YZX":var A=p*x+M*_;if(A>.499&&(v=2*Math.atan2(p,_),g=Math.PI/2,m=0),A<-.499&&(v=-2*Math.atan2(p,_),g=-Math.PI/2,m=0),isNaN(v)){var L=p*p,F=x*x,D=M*M;v=Math.atan2(2*x*_-2*p*M,1-2*F-2*D),g=Math.asin(2*A),m=Math.atan2(2*p*_-2*x*M,1-2*L-2*D)}break;default:throw new Error("Euler order "+d+" not supported yet.")}f.y=v,f.z=g,f.x=m},a.prototype.setFromEuler=function(f,d,v,g){g=g||"XYZ";var m=Math.cos(f/2),p=Math.cos(d/2),x=Math.cos(v/2),M=Math.sin(f/2),_=Math.sin(d/2),A=Math.sin(v/2);return g==="XYZ"?(this.x=M*p*x+m*_*A,this.y=m*_*x-M*p*A,this.z=m*p*A+M*_*x,this.w=m*p*x-M*_*A):g==="YXZ"?(this.x=M*p*x+m*_*A,this.y=m*_*x-M*p*A,this.z=m*p*A-M*_*x,this.w=m*p*x+M*_*A):g==="ZXY"?(this.x=M*p*x-m*_*A,this.y=m*_*x+M*p*A,this.z=m*p*A+M*_*x,this.w=m*p*x-M*_*A):g==="ZYX"?(this.x=M*p*x-m*_*A,this.y=m*_*x+M*p*A,this.z=m*p*A-M*_*x,this.w=m*p*x+M*_*A):g==="YZX"?(this.x=M*p*x+m*_*A,this.y=m*_*x+M*p*A,this.z=m*p*A-M*_*x,this.w=m*p*x-M*_*A):g==="XZY"&&(this.x=M*p*x-m*_*A,this.y=m*_*x-M*p*A,this.z=m*p*A+M*_*x,this.w=m*p*x+M*_*A),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new a,u.quaternion&&this.quaternion.copy(u.quaternion)}var c=new a;o.pointToLocalFrame=function(u,h,l,d){var d=d||new r;return l.vsub(u,d),h.conjugate(c),c.vmult(d,d),d},o.prototype.pointToLocal=function(u,h){return o.pointToLocalFrame(this.position,this.quaternion,u,h)},o.pointToWorldFrame=function(u,h,l,d){var d=d||new r;return h.vmult(l,d),d.vadd(u,d),d},o.prototype.pointToWorld=function(u,h){return o.pointToWorldFrame(this.position,this.quaternion,u,h)},o.prototype.vectorToWorldFrame=function(u,l){var l=l||new r;return this.quaternion.vmult(u,l),l},o.vectorToWorldFrame=function(u,h,l){return u.vmult(h,l),l},o.vectorToLocalFrame=function(u,h,l,d){var d=d||new r;return h.w*=-1,h.vmult(l,d),h.w*=-1,d}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(h,l,f){this.x=h||0,this.y=l||0,this.z=f||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,l){var f=h.x,d=h.y,v=h.z,g=this.x,m=this.y,p=this.z;return l=l||new a,l.x=m*v-p*d,l.y=p*f-g*v,l.z=g*d-m*f,l},a.prototype.set=function(h,l,f){return this.x=h,this.y=l,this.z=f,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,l=this.y,f=this.z,d=Math.sqrt(h*h+l*l+f*f);if(d>0){var v=1/d;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return d},a.prototype.unit=function(h){h=h||new a;var l=this.x,f=this.y,d=this.z,v=Math.sqrt(l*l+f*f+d*d);return v>0?(v=1/v,h.x=l*v,h.y=f*v,h.z=d*v):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,l=this.y,f=this.z;return Math.sqrt(h*h+l*l+f*f)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var l=this.x,f=this.y,d=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-f)*(g-f)+(m-d)*(m-d))},a.prototype.distanceSquared=function(h){var l=this.x,f=this.y,d=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-f)*(g-f)+(m-d)*(m-d)},a.prototype.mult=function(h,l){l=l||new a;var f=this.x,d=this.y,v=this.z;return l.x=h*f,l.y=h*d,l.z=h*v,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,c=new a;a.prototype.tangents=function(h,l){var f=this.norm();if(f>0){var d=o,v=1/f;d.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(d.x)<.9?(g.set(1,0,0),d.cross(g,h)):(g.set(0,1,0),d.cross(g,h)),d.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,l,f){var d=this.x,v=this.y,g=this.z;f.x=d+(h.x-d)*l,f.y=v+(h.y-v)*l,f.z=g+(h.z-g)*l},a.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new a;a.prototype.isAntiparallelTo=function(h,l){return this.negate(u),u.almostEquals(h,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function l(b){b=b||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof b.collisionFilterGroup=="number"?b.collisionFilterGroup:1,this.collisionFilterMask=typeof b.collisionFilterMask=="number"?b.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,b.position&&this.position.copy(b.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,b.velocity&&this.velocity.copy(b.velocity),this.initVelocity=new a,this.force=new a;var O=typeof b.mass=="number"?b.mass:0;this.mass=O,this.invMass=O>0?1/O:0,this.material=b.material||null,this.linearDamping=typeof b.linearDamping=="number"?b.linearDamping:.01,this.type=O<=0?l.STATIC:l.DYNAMIC,typeof b.type==typeof l.STATIC&&(this.type=b.type),this.allowSleep=typeof b.allowSleep<"u"?b.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof b.sleepSpeedLimit<"u"?b.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof b.sleepTimeLimit<"u"?b.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new c,b.quaternion&&this.quaternion.copy(b.quaternion),this.initQuaternion=new c,this.angularVelocity=new a,b.angularVelocity&&this.angularVelocity.copy(b.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof b.fixedRotation<"u"?b.fixedRotation:!1,this.angularDamping=typeof b.angularDamping<"u"?b.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new a,b.shape&&this.addShape(b.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var b=this.sleepState;this.sleepState=0,b===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(b){if(this.allowSleep){var O=this.sleepState,B=this.velocity.norm2()+this.angularVelocity.norm2(),K=Math.pow(this.sleepSpeedLimit,2);O===l.AWAKE&&B<K?(this.sleepState=l.SLEEPY,this.timeLastSleepy=b,this.dispatchEvent(l.sleepyEvent)):O===l.SLEEPY&&B>K?this.wakeUp():O===l.SLEEPY&&b-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(b,B){var B=B||new a;return b.vsub(this.position,B),this.quaternion.conjugate().vmult(B,B),B},l.prototype.vectorToLocalFrame=function(b,B){var B=B||new a;return this.quaternion.conjugate().vmult(b,B),B},l.prototype.pointToWorldFrame=function(b,B){var B=B||new a;return this.quaternion.vmult(b,B),B.vadd(this.position,B),B},l.prototype.vectorToWorldFrame=function(b,B){var B=B||new a;return this.quaternion.vmult(b,B),B};var f=new a,d=new c;l.prototype.addShape=function(b,O,B){var K=new a,j=new c;return O&&K.copy(O),B&&j.copy(B),this.shapes.push(b),this.shapeOffsets.push(K),this.shapeOrientations.push(j),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var b=this.shapes,O=this.shapeOffsets,B=b.length,K=0,j=0;j!==B;j++){var at=b[j];at.updateBoundingSphereRadius();var H=O[j].norm(),U=at.boundingSphereRadius;H+U>K&&(K=H+U)}this.boundingRadius=K};var v=new u;l.prototype.computeAABB=function(){for(var b=this.shapes,O=this.shapeOffsets,B=this.shapeOrientations,K=b.length,j=f,at=d,H=this.quaternion,U=this.aabb,st=v,nt=0;nt!==K;nt++){var z=b[nt];B[nt].mult(H,at),at.vmult(O[nt],j),j.vadd(this.position,j),z.calculateWorldAABB(j,at,st.lowerBound,st.upperBound),nt===0?U.copy(st):U.extend(st)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(b){var O=this.invInertia;if(!(O.x===O.y&&O.y===O.z&&!b)){var B=g,K=m;B.setRotationFromQuaternion(this.quaternion),B.transpose(K),B.scale(O,B),B.mmult(K,this.invInertiaWorld)}};var p=new a,x=new a;l.prototype.applyForce=function(b,O){if(this.type===l.DYNAMIC){var B=p;O.vsub(this.position,B);var K=x;B.cross(b,K),this.force.vadd(b,this.force),this.torque.vadd(K,this.torque)}};var M=new a,_=new a;l.prototype.applyLocalForce=function(b,O){if(this.type===l.DYNAMIC){var B=M,K=_;this.vectorToWorldFrame(b,B),this.pointToWorldFrame(O,K),this.applyForce(B,K)}};var A=new a,L=new a,F=new a;l.prototype.applyImpulse=function(b,O){if(this.type===l.DYNAMIC){var B=A;O.vsub(this.position,B);var K=L;K.copy(b),K.mult(this.invMass,K),this.velocity.vadd(K,this.velocity);var j=F;B.cross(b,j),this.invInertiaWorld.vmult(j,j),this.angularVelocity.vadd(j,this.angularVelocity)}};var D=new a,E=new a;l.prototype.applyLocalImpulse=function(b,O){if(this.type===l.DYNAMIC){var B=D,K=E;this.vectorToWorldFrame(b,B),this.pointToWorldFrame(O,K),this.applyImpulse(B,K)}};var y=new a;l.prototype.updateMassProperties=function(){var b=y;this.invMass=this.mass>0?1/this.mass:0;var O=this.inertia,B=this.fixedRotation;this.computeAABB(),b.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(b,this.mass,O),this.invInertia.set(O.x>0&&!B?1/O.x:0,O.y>0&&!B?1/O.y:0,O.z>0&&!B?1/O.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(b,O){var B=new a;return b.vsub(this.position,B),this.angularVelocity.cross(B,O),this.velocity.vadd(O,O),O}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=u;function u(H){this.chassisBody=H.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof H.indexRightAxis<"u"?H.indexRightAxis:1,this.indexForwardAxis=typeof H.indexForwardAxis<"u"?H.indexForwardAxis:0,this.indexUpAxis=typeof H.indexUpAxis<"u"?H.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,f=new r;new o,u.prototype.addWheel=function(H){H=H||{};var U=new c(H),st=this.wheelInfos.length;return this.wheelInfos.push(U),st},u.prototype.setSteeringValue=function(H,U){var st=this.wheelInfos[U];st.steering=H},new r,u.prototype.applyEngineForce=function(H,U){this.wheelInfos[U].engineForce=H},u.prototype.setBrake=function(H,U){this.wheelInfos[U].brake=H},u.prototype.addToWorld=function(H){this.constraints,H.add(this.chassisBody);var U=this;this.preStepCallback=function(){U.updateVehicle(H.dt)},H.addEventListener("preStep",this.preStepCallback),this.world=H},u.prototype.getVehicleAxisWorld=function(H,U){U.set(H===0?1:0,H===1?1:0,H===2?1:0),this.chassisBody.vectorToWorldFrame(U,U)},u.prototype.updateVehicle=function(H){for(var U=this.wheelInfos,st=U.length,nt=this.chassisBody,z=0;z<st;z++)this.updateWheelTransform(z);this.currentVehicleSpeedKmHour=3.6*nt.velocity.norm();var tt=new r;this.getVehicleAxisWorld(this.indexForwardAxis,tt),tt.dot(nt.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var z=0;z<st;z++)this.castRay(U[z]);this.updateSuspension(H);for(var G=new r,R=new r,z=0;z<st;z++){var C=U[z],W=C.suspensionForce;W>C.maxSuspensionForce&&(W=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(W*H,G),C.raycastResult.hitPointWorld.vsub(nt.position,R),nt.applyImpulse(G,C.raycastResult.hitPointWorld)}this.updateFriction(H);var Z=new r,rt=new r,X=new r;for(z=0;z<st;z++){var C=U[z];nt.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,X);var et=1;switch(this.indexUpAxis){case 1:et=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,rt);var _t=rt.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(_t,Z),rt.vsub(Z,rt);var Ut=rt.dot(X);C.deltaRotation=et*Ut*H/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*H),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},u.prototype.updateSuspension=function(H){for(var U=this.chassisBody,st=U.mass,nt=this.wheelInfos,z=nt.length,tt=0;tt<z;tt++){var G=nt[tt];if(G.isInContact){var R,C=G.suspensionRestLength,W=G.suspensionLength,Z=C-W;R=G.suspensionStiffness*Z*G.clippedInvContactDotSuspension;var rt=G.suspensionRelativeVelocity,X;rt<0?X=G.dampingCompression:X=G.dampingRelaxation,R-=X*rt,G.suspensionForce=R*st,G.suspensionForce<0&&(G.suspensionForce=0)}else G.suspensionForce=0}},u.prototype.removeFromWorld=function(H){this.constraints,H.remove(this.chassisBody),H.removeEventListener("preStep",this.preStepCallback),this.world=null};var d=new r,v=new r;u.prototype.castRay=function(H){var U=d,st=v;this.updateWheelTransformWorld(H);var nt=this.chassisBody,z=-1,tt=H.suspensionRestLength+H.radius;H.directionWorld.scale(tt,U);var G=H.chassisConnectionPointWorld;G.vadd(U,st);var R=H.raycastResult;R.reset();var C=nt.collisionResponse;nt.collisionResponse=!1,this.world.rayTest(G,st,R),nt.collisionResponse=C;var W=R.body;if(H.raycastResult.groundObject=0,W){z=R.distance,H.raycastResult.hitNormalWorld=R.hitNormalWorld,H.isInContact=!0;var Z=R.distance;H.suspensionLength=Z-H.radius;var rt=H.suspensionRestLength-H.maxSuspensionTravel,X=H.suspensionRestLength+H.maxSuspensionTravel;H.suspensionLength<rt&&(H.suspensionLength=rt),H.suspensionLength>X&&(H.suspensionLength=X,H.raycastResult.reset());var et=H.raycastResult.hitNormalWorld.dot(H.directionWorld),_t=new r;nt.getVelocityAtWorldPoint(H.raycastResult.hitPointWorld,_t);var Ut=H.raycastResult.hitNormalWorld.dot(_t);if(et>=-.1)H.suspensionRelativeVelocity=0,H.clippedInvContactDotSuspension=1/.1;else{var yt=-1/et;H.suspensionRelativeVelocity=Ut*yt,H.clippedInvContactDotSuspension=yt}}else H.suspensionLength=H.suspensionRestLength+0*H.maxSuspensionTravel,H.suspensionRelativeVelocity=0,H.directionWorld.scale(-1,H.raycastResult.hitNormalWorld),H.clippedInvContactDotSuspension=1;return z},u.prototype.updateWheelTransformWorld=function(H){H.isInContact=!1;var U=this.chassisBody;U.pointToWorldFrame(H.chassisConnectionPointLocal,H.chassisConnectionPointWorld),U.vectorToWorldFrame(H.directionLocal,H.directionWorld),U.vectorToWorldFrame(H.axleLocal,H.axleWorld)},u.prototype.updateWheelTransform=function(H){var U=h,st=l,nt=f,z=this.wheelInfos[H];this.updateWheelTransformWorld(z),z.directionLocal.scale(-1,U),st.copy(z.axleLocal),U.cross(st,nt),nt.normalize(),st.normalize();var tt=z.steering,G=new a;G.setFromAxisAngle(U,tt);var R=new a;R.setFromAxisAngle(st,z.rotation);var C=z.worldTransform.quaternion;this.chassisBody.quaternion.mult(G,C),C.mult(R,C),C.normalize();var W=z.worldTransform.position;W.copy(z.directionWorld),W.scale(z.suspensionLength,W),W.vadd(z.chassisConnectionPointWorld,W)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(H){return this.wheelInfos[H].worldTransform};var m=new r,p=[],x=[],M=1;u.prototype.updateFriction=function(H){for(var U=m,st=this.wheelInfos,nt=st.length,z=this.chassisBody,tt=x,G=p,R=0;R<nt;R++){var C=st[R],W=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,tt[R]||(tt[R]=new r),G[R]||(G[R]=new r)}for(var R=0;R<nt;R++){var C=st[R],W=C.raycastResult.body;if(W){var Z=G[R],rt=this.getWheelTransformWorld(R);rt.vectorToWorldFrame(g[this.indexRightAxis],Z);var X=C.raycastResult.hitNormalWorld,et=Z.dot(X);X.scale(et,U),Z.vsub(U,Z),Z.normalize(),X.cross(Z,tt[R]),tt[R].normalize(),C.sideImpulse=at(z,C.raycastResult.hitPointWorld,W,C.raycastResult.hitPointWorld,Z),C.sideImpulse*=M}}var _t=1,Ut=.5;this.sliding=!1;for(var R=0;R<nt;R++){var C=st[R],W=C.raycastResult.body,yt=0;if(C.slipInfo=1,W){var N=0,vt=C.brake?C.brake:N;yt=F(z,W,C.raycastResult.hitPointWorld,tt[R],vt),yt+=C.engineForce*H;var ut=vt/yt;C.slipInfo*=ut}if(C.forwardImpulse=0,C.skidInfo=1,W){C.skidInfo=1;var Zt=C.suspensionForce*H*C.frictionSlip,St=Zt,le=Zt*St;C.forwardImpulse=yt;var gt=C.forwardImpulse*Ut,I=C.sideImpulse*_t,S=gt*gt+I*I;if(C.sliding=!1,S>le){this.sliding=!0,C.sliding=!0;var ut=Zt/Math.sqrt(S);C.skidInfo*=ut}}}if(this.sliding)for(var R=0;R<nt;R++){var C=st[R];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var R=0;R<nt;R++){var C=st[R],Q=new r;if(Q.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var dt=new r;tt[R].scale(C.forwardImpulse,dt),z.applyImpulse(dt,Q)}if(C.sideImpulse!==0){var W=C.raycastResult.body,pt=new r;pt.copy(C.raycastResult.hitPointWorld);var ft=new r;G[R].scale(C.sideImpulse,ft),z.pointToLocalFrame(Q,Q),Q["xyz"[this.indexUpAxis]]*=C.rollInfluence,z.pointToWorldFrame(Q,Q),z.applyImpulse(ft,Q),ft.scale(-1,ft),W.applyImpulse(ft,pt)}}};var _=new r,A=new r,L=new r;function F(H,U,st,nt,z){var tt=0,G=st,R=_,C=A,W=L;H.getVelocityAtWorldPoint(G,R),U.getVelocityAtWorldPoint(G,C),R.vsub(C,W);var Z=nt.dot(W),rt=O(H,st,nt),X=O(U,st,nt),et=1,_t=et/(rt+X);return tt=-Z*_t,z<tt&&(tt=z),tt<-z&&(tt=-z),tt}var D=new r,E=new r,y=new r,b=new r;function O(H,U,st){var nt=D,z=E,tt=y,G=b;return U.vsub(H.position,nt),nt.cross(st,z),H.invInertiaWorld.vmult(z,G),G.cross(nt,tt),H.invMass+st.dot(tt)}var B=new r,K=new r,j=new r;function at(H,U,st,nt,z,et){var G=z.norm2();if(G>1.1)return 0;var R=B,C=K,W=j;H.getVelocityAtWorldPoint(U,R),st.getVelocityAtWorldPoint(nt,C),R.vsub(C,W);var Z=z.dot(W),rt=.2,X=1/(H.invMass+st.invMass),et=-rt*Z*X;return et}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(d){if(this.wheelBodies=[],this.coordinateSystem=typeof d.coordinateSystem>"u"?new c(1,2,3):d.coordinateSystem.clone(),this.chassisBody=d.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(d){d=d||{};var v=d.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof d.position<"u"?d.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof d.axis<"u"?d.axis.clone():new c(0,1,0);this.wheelAxes.push(p);var x=new u(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:c.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(d,v){var g=this.wheelAxes[v],m=Math.cos(d),p=Math.sin(d),x=g.x,M=g.y;this.constraints[v].axisA.set(m*x-p*M,p*x+m*M,0)},h.prototype.setMotorSpeed=function(d,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=d},h.prototype.disableMotor=function(d){var v=this.constraints[d];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(d,v){this.wheelForces[v]=d},h.prototype.applyWheelForce=function(d,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(d,l),m.vectorToWorldFrame(l,l),p.vadd(l,p)},h.prototype.addToWorld=function(d){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)d.add(g[m]);for(var m=0;m<v.length;m++)d.addConstraint(v[m]);d.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var d=this.wheelForces,v=0;v<d.length;v++)this.applyWheelForce(d[v],v)},h.prototype.removeFromWorld=function(d){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)d.remove(g[m]);for(var m=0;m<v.length;m++)d.removeConstraint(v[m])};var f=new c;h.prototype.getWheelSpeed=function(d){var v=this.wheelAxes[d],g=this.wheelBodies[d],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,f),m.dot(f)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,x=this.smoothingRadius*this.smoothingRadius,M=o,_=0;_!==m;_++){var A=this.particles[_];A.position.vsub(v.position,M),p!==A.id&&M.norm2()<x&&g.push(A)}};var c=new r,u=new r,h=new r,l=new r,f=new r,d=new r;a.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,p=this.eps,x=0;x!==v;x++){var M=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(M,_),_.push(this.particles[x]);for(var A=_.length,L=0,F=0;F!==A;F++){M.position.vsub(_[F].position,g);var D=g.norm(),E=this.w(D);L+=_[F].mass*E}this.densities[x]=L,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var y=u,b=h,O=l,B=f,K=d,x=0;x!==v;x++){var j=this.particles[x];y.set(0,0,0),b.set(0,0,0);for(var at,H,_=this.neighbors[x],A=_.length,F=0;F!==A;F++){var U=_[F];j.position.vsub(U.position,B);var st=B.norm();at=-U.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+p)+this.pressures[F]/(this.densities[F]*this.densities[F]+p)),this.gradw(B,O),O.mult(at,O),y.vadd(O,y),U.velocity.vsub(j.velocity,K),K.mult(1/(1e-4+this.densities[x]*this.densities[F])*this.viscosity*U.mass,K),H=this.nablaw(st),K.mult(H,K),b.vadd(K,b)}b.mult(j.mass,b),y.mult(j.mass,y),j.force.vadd(b,j.force),j.force.vadd(y,j.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(x,M,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=M,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}a.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},a.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},a.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},a.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new r,c=new r,u=new r,h=new r,l=new r,f=new r,d=new r,v=new r,g=new r,m=new r,p=new r;a.prototype.applyForce=function(){var x=this.stiffness,M=this.damping,_=this.restLength,A=this.bodyA,L=this.bodyB,F=o,D=c,E=u,y=h,b=p,O=l,B=f,K=d,j=v,at=g,H=m;this.getWorldAnchorA(O),this.getWorldAnchorB(B),O.vsub(A.position,K),B.vsub(L.position,j),B.vsub(O,F);var U=F.norm();D.copy(F),D.normalize(),L.velocity.vsub(A.velocity,E),L.angularVelocity.cross(j,b),E.vadd(b,E),A.angularVelocity.cross(K,b),E.vsub(b,E),D.mult(-x*(U-_)-M*E.dot(D),y),A.force.vsub(y,A.force),L.force.vadd(y,L.force),K.cross(y,at),j.cross(y,H),A.torque.vsub(at,A.torque),L.torque.vadd(H,L.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=u;function u(f){f=c.defaults(f,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=f.maxSuspensionTravel,this.customSlidingRotationalSpeed=f.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=f.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=f.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=f.chassisConnectionPointWorld.clone(),this.directionLocal=f.directionLocal.clone(),this.directionWorld=f.directionWorld.clone(),this.axleLocal=f.axleLocal.clone(),this.axleWorld=f.axleWorld.clone(),this.suspensionRestLength=f.suspensionRestLength,this.suspensionMaxLength=f.suspensionMaxLength,this.radius=f.radius,this.suspensionStiffness=f.suspensionStiffness,this.dampingCompression=f.dampingCompression,this.dampingRelaxation=f.dampingRelaxation,this.frictionSlip=f.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=f.rollInfluence,this.maxSuspensionForce=f.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=f.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new r,h=new r,l=new r;u.prototype.updateWheel=function(f){var d=this.raycastResult;if(this.isInContact){var v=d.hitNormalWorld.dot(d.directionWorld);d.hitPointWorld.vsub(f.position,h),f.getVelocityAtWorldPoint(h,l);var g=d.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else d.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,d.directionWorld.scale(-1,d.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,f=this.halfExtents.y,d=this.halfExtents.z,v=a,g=[new v(-l,-f,-d),new v(l,-f,-d),new v(l,f,-d),new v(-l,f,-d),new v(-l,-f,d),new v(l,-f,d),new v(l,f,d),new v(-l,f,d)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},c.prototype.calculateLocalInertia=function(l,f){return f=f||new a,c.calculateInertia(this.halfExtents,l,f),f},c.calculateInertia=function(l,f,d){var v=l;d.x=1/12*f*(2*v.y*2*v.y+2*v.z*2*v.z),d.y=1/12*f*(2*v.x*2*v.x+2*v.z*2*v.z),d.z=1/12*f*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,f){var d=l,v=this.halfExtents;if(d[0].set(v.x,0,0),d[1].set(0,v.y,0),d[2].set(0,0,v.z),d[3].set(-v.x,0,0),d[4].set(0,-v.y,0),d[5].set(0,0,-v.z),f!==void 0)for(var g=0;g!==d.length;g++)f.vmult(d[g],d[g]);return d},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new a;new a,c.prototype.forEachWorldCorner=function(l,f,d){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),f.vmult(u,u),l.vadd(u,u),d(u.x,u.y,u.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];c.prototype.calculateWorldAABB=function(l,f,d,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];f.vmult(m,m),l.vadd(m,m),v.copy(m),d.copy(m);for(var p=1;p<8;p++){var m=h[p];f.vmult(m,m),l.vadd(m,m);var x=m.x,M=m.y,_=m.z;x>v.x&&(v.x=x),M>v.y&&(v.y=M),_>v.z&&(v.z=_),x<d.x&&(d.x=x),M<d.y&&(d.y=M),_<d.z&&(d.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(z,tt,G){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=z||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=tt||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=G?G.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var u=new a;c.prototype.computeEdges=function(){var z=this.faces,tt=this.vertices;tt.length;var G=this.uniqueEdges;G.length=0;for(var R=u,C=0;C!==z.length;C++)for(var W=z[C],Z=W.length,rt=0;rt!==Z;rt++){var X=(rt+1)%Z;tt[W[rt]].vsub(tt[W[X]],R),R.normalize();for(var et=!1,_t=0;_t!==G.length;_t++)if(G[_t].almostEquals(R)||G[_t].almostEquals(R)){et=!0;break}et||G.push(R.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var z=0;z<this.faces.length;z++){for(var tt=0;tt<this.faces[z].length;tt++)if(!this.vertices[this.faces[z][tt]])throw new Error("Vertex "+this.faces[z][tt]+" not found!");var G=this.faceNormals[z]||new a;this.getFaceNormal(z,G),G.negate(G),this.faceNormals[z]=G;var R=this.vertices[this.faces[z][0]];if(G.dot(R)<0){console.error(".faceNormals["+z+"] = Vec3("+G.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var tt=0;tt<this.faces[z].length;tt++)console.warn(".vertices["+this.faces[z][tt]+"] = Vec3("+this.vertices[this.faces[z][tt]].toString()+")")}}};var h=new a,l=new a;c.computeNormal=function(z,tt,G,R){tt.vsub(z,l),G.vsub(tt,h),h.cross(l,R),R.isZero()||R.normalize()},c.prototype.getFaceNormal=function(z,tt){var G=this.faces[z],R=this.vertices[G[0]],C=this.vertices[G[1]],W=this.vertices[G[2]];return c.computeNormal(R,C,W,tt)};var f=new a;c.prototype.clipAgainstHull=function(z,tt,G,R,C,W,Z,rt,X){for(var et=f,_t=-1,Ut=-Number.MAX_VALUE,yt=0;yt<G.faces.length;yt++){et.copy(G.faceNormals[yt]),C.vmult(et,et);var N=et.dot(W);N>Ut&&(Ut=N,_t=yt)}for(var vt=[],ut=G.faces[_t],Zt=ut.length,St=0;St<Zt;St++){var le=G.vertices[ut[St]],gt=new a;gt.copy(le),C.vmult(gt,gt),R.vadd(gt,gt),vt.push(gt)}_t>=0&&this.clipFaceAgainstHull(W,z,tt,vt,Z,rt,X)};var d=new a,v=new a,g=new a,m=new a,p=new a,x=new a;c.prototype.findSeparatingAxis=function(z,tt,G,R,C,W,Z,rt){var X=d,et=v,_t=g,Ut=m,yt=p,N=x,vt=Number.MAX_VALUE,ut=this;if(ut.uniqueAxes)for(var St=0;St!==ut.uniqueAxes.length;St++){G.vmult(ut.uniqueAxes[St],X);var gt=ut.testSepAxis(X,z,tt,G,R,C);if(gt===!1)return!1;gt<vt&&(vt=gt,W.copy(X))}else for(var Zt=Z?Z.length:ut.faces.length,St=0;St<Zt;St++){var le=Z?Z[St]:St;X.copy(ut.faceNormals[le]),G.vmult(X,X);var gt=ut.testSepAxis(X,z,tt,G,R,C);if(gt===!1)return!1;gt<vt&&(vt=gt,W.copy(X))}if(z.uniqueAxes)for(var St=0;St!==z.uniqueAxes.length;St++){C.vmult(z.uniqueAxes[St],et);var gt=ut.testSepAxis(et,z,tt,G,R,C);if(gt===!1)return!1;gt<vt&&(vt=gt,W.copy(et))}else for(var I=rt?rt.length:z.faces.length,St=0;St<I;St++){var le=rt?rt[St]:St;et.copy(z.faceNormals[le]),C.vmult(et,et);var gt=ut.testSepAxis(et,z,tt,G,R,C);if(gt===!1)return!1;gt<vt&&(vt=gt,W.copy(et))}for(var S=0;S!==ut.uniqueEdges.length;S++){G.vmult(ut.uniqueEdges[S],Ut);for(var Q=0;Q!==z.uniqueEdges.length;Q++)if(C.vmult(z.uniqueEdges[Q],yt),Ut.cross(yt,N),!N.almostZero()){N.normalize();var dt=ut.testSepAxis(N,z,tt,G,R,C);if(dt===!1)return!1;dt<vt&&(vt=dt,W.copy(N))}}return R.vsub(tt,_t),_t.dot(W)>0&&W.negate(W),!0};var M=[],_=[];c.prototype.testSepAxis=function(z,tt,G,R,C,W){var Z=this;c.project(Z,z,G,R,M),c.project(tt,z,C,W,_);var rt=M[0],X=M[1],et=_[0],_t=_[1];if(rt<_t||et<X)return!1;var Ut=rt-_t,yt=et-X,N=Ut<yt?Ut:yt;return N};var A=new a,L=new a;c.prototype.calculateLocalInertia=function(z,tt){this.computeLocalAABB(A,L);var G=L.x-A.x,R=L.y-A.y,C=L.z-A.z;tt.x=1/12*z*(2*R*2*R+2*C*2*C),tt.y=1/12*z*(2*G*2*G+2*C*2*C),tt.z=1/12*z*(2*R*2*R+2*G*2*G)},c.prototype.getPlaneConstantOfFace=function(z){var tt=this.faces[z],G=this.faceNormals[z],R=this.vertices[tt[0]],C=-G.dot(R);return C};var F=new a,D=new a,E=new a,y=new a,b=new a,O=new a,B=new a,K=new a;c.prototype.clipFaceAgainstHull=function(z,tt,G,R,C,W,Z){for(var rt=F,X=D,et=E,_t=y,Ut=b,yt=O,N=B,vt=K,ut=this,Zt=[],St=R,le=Zt,gt=-1,I=Number.MAX_VALUE,S=0;S<ut.faces.length;S++){rt.copy(ut.faceNormals[S]),G.vmult(rt,rt);var Q=rt.dot(z);Q<I&&(I=Q,gt=S)}if(!(gt<0)){var dt=ut.faces[gt];dt.connectedFaces=[];for(var pt=0;pt<ut.faces.length;pt++)for(var ft=0;ft<ut.faces[pt].length;ft++)dt.indexOf(ut.faces[pt][ft])!==-1&&pt!==gt&&dt.connectedFaces.indexOf(pt)===-1&&dt.connectedFaces.push(pt);St.length;for(var Rt=dt.length,Ct=0;Ct<Rt;Ct++){var Vt=ut.vertices[dt[Ct]],ve=ut.vertices[dt[(Ct+1)%Rt]];Vt.vsub(ve,X),et.copy(X),G.vmult(et,et),tt.vadd(et,et),_t.copy(this.faceNormals[gt]),G.vmult(_t,_t),tt.vadd(_t,_t),et.cross(_t,Ut),Ut.negate(Ut),yt.copy(Vt),G.vmult(yt,yt),tt.vadd(yt,yt),-yt.dot(Ut);var re;{var bt=dt.connectedFaces[Ct];N.copy(this.faceNormals[bt]);var Kt=this.getPlaneConstantOfFace(bt);vt.copy(N),G.vmult(vt,vt);var re=Kt-vt.dot(tt)}for(this.clipFaceAgainstPlane(St,le,vt,re);St.length;)St.shift();for(;le.length;)St.push(le.shift())}N.copy(this.faceNormals[gt]);var Kt=this.getPlaneConstantOfFace(gt);vt.copy(N),G.vmult(vt,vt);for(var re=Kt-vt.dot(tt),pt=0;pt<St.length;pt++){var ae=vt.dot(St[pt])+re;if(ae<=C&&(console.log("clamped: depth="+ae+" to minDist="+(C+"")),ae=C),ae<=W){var $t=St[pt];if(ae<=0){var ge={point:$t,normal:vt,depth:ae};Z.push(ge)}}}}},c.prototype.clipFaceAgainstPlane=function(z,tt,G,R){var C,W,Z=z.length;if(Z<2)return tt;var rt=z[z.length-1],X=z[0];C=G.dot(rt)+R;for(var et=0;et<Z;et++){if(X=z[et],W=G.dot(X)+R,C<0)if(W<0){var _t=new a;_t.copy(X),tt.push(_t)}else{var _t=new a;rt.lerp(X,C/(C-W),_t),tt.push(_t)}else if(W<0){var _t=new a;rt.lerp(X,C/(C-W),_t),tt.push(_t),tt.push(X)}rt=X,C=W}return tt},c.prototype.computeWorldVertices=function(z,tt){for(var G=this.vertices.length;this.worldVertices.length<G;)this.worldVertices.push(new a);for(var R=this.vertices,C=this.worldVertices,W=0;W!==G;W++)tt.vmult(R[W],C[W]),z.vadd(C[W],C[W]);this.worldVerticesNeedsUpdate=!1},new a,c.prototype.computeLocalAABB=function(z,tt){var G=this.vertices.length,R=this.vertices;z.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),tt.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<G;C++){var W=R[C];W.x<z.x?z.x=W.x:W.x>tt.x&&(tt.x=W.x),W.y<z.y?z.y=W.y:W.y>tt.y&&(tt.y=W.y),W.z<z.z?z.z=W.z:W.z>tt.z&&(tt.z=W.z)}},c.prototype.computeWorldFaceNormals=function(z){for(var tt=this.faceNormals.length;this.worldFaceNormals.length<tt;)this.worldFaceNormals.push(new a);for(var G=this.faceNormals,R=this.worldFaceNormals,C=0;C!==tt;C++)z.vmult(G[C],R[C]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var z=0,tt=this.vertices,G=0,R=tt.length;G!==R;G++){var C=tt[G].norm2();C>z&&(z=C)}this.boundingSphereRadius=Math.sqrt(z)};var j=new a;c.prototype.calculateWorldAABB=function(z,tt,G,R){for(var C=this.vertices.length,W=this.vertices,Z,rt,X,et,_t,Ut,yt=0;yt<C;yt++){j.copy(W[yt]),tt.vmult(j,j),z.vadd(j,j);var N=j;N.x<Z||Z===void 0?Z=N.x:(N.x>et||et===void 0)&&(et=N.x),N.y<rt||rt===void 0?rt=N.y:(N.y>_t||_t===void 0)&&(_t=N.y),N.z<X||X===void 0?X=N.z:(N.z>Ut||Ut===void 0)&&(Ut=N.z)}G.set(Z,rt,X),R.set(et,_t,Ut)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(z){z=z||new a;for(var tt=this.vertices.length,G=this.vertices,R=0;R<tt;R++)z.vadd(G[R],z);return z.mult(1/tt,z),z},c.prototype.transformAllPoints=function(z,tt){var G=this.vertices.length,R=this.vertices;if(tt){for(var C=0;C<G;C++){var W=R[C];tt.vmult(W,W)}for(var C=0;C<this.faceNormals.length;C++){var W=this.faceNormals[C];tt.vmult(W,W)}}if(z)for(var C=0;C<G;C++){var W=R[C];W.vadd(z,W)}};var at=new a,H=new a,U=new a;c.prototype.pointIsInside=function(z){var tt=this.vertices.length,G=this.vertices,R=this.faces,C=this.faceNormals,W=null,Z=this.faces.length,rt=at;this.getAveragePointLocal(rt);for(var X=0;X<Z;X++){this.faces[X].length;var tt=C[X],et=G[R[X][0]],_t=H;z.vsub(et,_t);var Ut=tt.dot(_t),yt=U;rt.vsub(et,yt);var N=tt.dot(yt);if(Ut<0&&N>0||Ut>0&&N<0)return!1}return W?1:-1},new a;var st=new a,nt=new a;c.project=function(z,tt,G,R,C){var W=z.vertices.length,Z=st,rt=0,X=0,et=nt,_t=z.vertices;et.setZero(),o.vectorToLocalFrame(G,R,tt,Z),o.pointToLocalFrame(G,R,et,et);var Ut=et.dot(Z);X=rt=_t[0].dot(Z);for(var yt=1;yt<W;yt++){var N=_t[yt].dot(Z);N>rt&&(rt=N),N<X&&(X=N)}if(X-=Ut,rt-=Ut,X>rt){var vt=X;X=rt,rt=vt}C[0]=rt,C[1]=X}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(u,h,l,f){var d=f,v=[],g=[],m=[],p=[],x=[],M=Math.cos,_=Math.sin;v.push(new a(h*M(0),h*_(0),-l*.5)),p.push(0),v.push(new a(u*M(0),u*_(0),l*.5)),x.push(1);for(var A=0;A<d;A++){var L=2*Math.PI/d*(A+1),F=2*Math.PI/d*(A+.5);A<d-1?(v.push(new a(h*M(L),h*_(L),-l*.5)),p.push(2*A+2),v.push(new a(u*M(L),u*_(L),l*.5)),x.push(2*A+3),m.push([2*A+2,2*A+3,2*A+1,2*A])):m.push([0,1,2*A+1,2*A]),(d%2===1||A<d/2)&&g.push(new a(M(F),_(F),0))}m.push(x),g.push(new a(0,0,1));for(var D=[],A=0;A<p.length;A++)D.push(p[p.length-A-1]);m.push(D),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=u;function u(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],f=0;f!==h.length;f++)for(var d=0;d!==h[f].length;d++){var v=h[f][d];v<l&&(l=v)}this.minValue=l},u.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],f=0;f!==h.length;f++)for(var d=0;d!==h[f].length;d++){var v=h[f][d];v>l&&(l=v)}this.maxValue=l},u.prototype.setHeightValueAtIndex=function(h,l,f){var d=this.data;d[h][l]=f,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},u.prototype.getRectMinMax=function(h,l,f,d,v){v=v||[];for(var g=this.data,m=this.minValue,p=h;p<=f;p++)for(var x=l;x<=d;x++){var M=g[p][x];M>m&&(m=M)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(h,l,f,d){var v=this.elementSize,g=this.data,m=Math.floor(h/v),p=Math.floor(l/v);return f[0]=m,f[1]=p,d&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},u.prototype.getHeightAt=function(h,l,f){var d=[];this.getIndexOfPosition(h,l,d,f);var v=[];return this.getRectMinMax(d[0],d[1]+1,d[0],d[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,l,f){return h+"_"+l+"_"+(f?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,l,f){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,f)]},u.prototype.setCachedConvexTrianglePillar=function(h,l,f,d,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,f)]={convex:d,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,l,f){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,f)]},u.prototype.getConvexTrianglePillar=function(h,l,f){var d=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,f);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}d=new a,v=new o,this.pillarConvex=d,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=d.faces;d.vertices.length=6;for(var x=0;x<6;x++)d.vertices[x]||(d.vertices[x]=new o);p.length=5;for(var x=0;x<5;x++)p[x]||(p[x]=[]);var M=d.vertices,_=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;f?(v.set((h+.75)*m,(l+.75)*m,_),M[0].set(.25*m,.25*m,g[h+1][l+1]-_),M[1].set(-.75*m,.25*m,g[h][l+1]-_),M[2].set(.25*m,-.75*m,g[h+1][l]-_),M[3].set(.25*m,.25*m,-_-1),M[4].set(-.75*m,.25*m,-_-1),M[5].set(.25*m,-.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,_),M[0].set(-.25*m,-.25*m,g[h][l]-_),M[1].set(.75*m,-.25*m,g[h+1][l]-_),M[2].set(-.25*m,.75*m,g[h][l+1]-_),M[3].set(-.25*m,-.25*m,-_-1),M[4].set(.75*m,-.25*m,-_-1),M[5].set(-.25*m,.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),d.computeNormals(),d.computeEdges(),d.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,f,d,v)},u.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,l,f,d){f.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),d.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){return u=u||new a,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,u,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new a;o.prototype.calculateWorldAABB=function(u,h,l,f){c.set(0,0,1),h.vmult(c,c);var d=Number.MAX_VALUE;l.set(-d,-d,-d),f.set(d,d,d),c.x===1&&(f.x=u.x),c.y===1&&(f.y=u.y),c.z===1&&(f.z=u.z),c.x===-1&&(l.x=u.x),c.y===-1&&(l.y=u.y),c.z===-1&&(l.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){u=u||new a;var h=2*c*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,u,h,l){for(var f=this.radius,d=["x","y","z"],v=0;v<d.length;v++){var g=d[v];h[g]=c[g]-f,l[g]=c[g]+f}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),u=e("../utils/Octree");function h(D,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(D),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new c,this.edges=null,this.scale=new a(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new a;h.prototype.updateTree=function(){var D=this.tree;D.reset(),D.aabb.copy(this.aabb);var E=this.scale;D.aabb.lowerBound.x*=1/E.x,D.aabb.lowerBound.y*=1/E.y,D.aabb.lowerBound.z*=1/E.z,D.aabb.upperBound.x*=1/E.x,D.aabb.upperBound.y*=1/E.y,D.aabb.upperBound.z*=1/E.z;for(var y=new c,b=new a,O=new a,B=new a,K=[b,O,B],j=0;j<this.indices.length/3;j++){var at=j*3;this._getUnscaledVertex(this.indices[at],b),this._getUnscaledVertex(this.indices[at+1],O),this._getUnscaledVertex(this.indices[at+2],B),y.setFromPoints(K),D.insert(y,j)}D.removeEmptyNodes()};var f=new c;h.prototype.getTrianglesInAABB=function(D,E){f.copy(D);var y=this.scale,b=y.x,O=y.y,B=y.z,K=f.lowerBound,j=f.upperBound;return K.x/=b,K.y/=O,K.z/=B,j.x/=b,j.y/=O,j.z/=B,this.tree.aabbQuery(f,E)},h.prototype.setScale=function(D){var E=this.scale.x===this.scale.y===this.scale.z,y=D.x===D.y===D.z;E&&y||this.updateNormals(),this.scale.copy(D),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var D=l,E=this.normals,y=0;y<this.indices.length/3;y++){var b=y*3,O=this.indices[b],B=this.indices[b+1],K=this.indices[b+2];this.getVertex(O,p),this.getVertex(B,x),this.getVertex(K,M),h.computeNormal(x,p,M,D),E[b]=D.x,E[b+1]=D.y,E[b+2]=D.z}},h.prototype.updateEdges=function(){for(var D={},E=function(at,H){var U=O<B?O+"_"+B:B+"_"+O;D[U]=!0},y=0;y<this.indices.length/3;y++){var b=y*3,O=this.indices[b],B=this.indices[b+1];this.indices[b+2],E(),E(),E()}var K=Object.keys(D);this.edges=new Int16Array(K.length*2);for(var y=0;y<K.length;y++){var j=K[y].split("_");this.edges[2*y]=parseInt(j[0],10),this.edges[2*y+1]=parseInt(j[1],10)}},h.prototype.getEdgeVertex=function(D,E,y){var b=this.edges[D*2+(E?1:0)];this.getVertex(b,y)};var d=new a,v=new a;h.prototype.getEdgeVector=function(D,E){var y=d,b=v;this.getEdgeVertex(D,0,y),this.getEdgeVertex(D,1,b),b.vsub(y,E)};var g=new a,m=new a;h.computeNormal=function(D,E,y,b){E.vsub(D,m),y.vsub(E,g),g.cross(m,b),b.isZero()||b.normalize()};var p=new a,x=new a,M=new a;h.prototype.getVertex=function(D,E){var y=this.scale;return this._getUnscaledVertex(D,E),E.x*=y.x,E.y*=y.y,E.z*=y.z,E},h.prototype._getUnscaledVertex=function(D,E){var y=D*3,b=this.vertices;return E.set(b[y],b[y+1],b[y+2])},h.prototype.getWorldVertex=function(D,E,y,b){return this.getVertex(D,b),o.pointToWorldFrame(E,y,b,b),b},h.prototype.getTriangleVertices=function(D,E,y,b){var O=D*3;this.getVertex(this.indices[O],E),this.getVertex(this.indices[O+1],y),this.getVertex(this.indices[O+2],b)},h.prototype.getNormal=function(D,E){var y=D*3;return E.set(this.normals[y],this.normals[y+1],this.normals[y+2])};var _=new c;h.prototype.calculateLocalInertia=function(D,E){this.computeLocalAABB(_);var y=_.upperBound.x-_.lowerBound.x,b=_.upperBound.y-_.lowerBound.y,O=_.upperBound.z-_.lowerBound.z;return E.set(1/12*D*(2*b*2*b+2*O*2*O),1/12*D*(2*y*2*y+2*O*2*O),1/12*D*(2*b*2*b+2*y*2*y))};var A=new a;h.prototype.computeLocalAABB=function(D){var E=D.lowerBound,y=D.upperBound,b=this.vertices.length;this.vertices;var O=A;this.getVertex(0,O),E.copy(O),y.copy(O);for(var B=0;B!==b;B++)this.getVertex(B,O),O.x<E.x?E.x=O.x:O.x>y.x&&(y.x=O.x),O.y<E.y?E.y=O.y:O.y>y.y&&(y.y=O.y),O.z<E.z?E.z=O.z:O.z>y.z&&(y.z=O.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var D=0,E=this.vertices,y=new a,b=0,O=E.length/3;b!==O;b++){this.getVertex(b,y);var B=y.norm2();B>D&&(D=B)}this.boundingSphereRadius=Math.sqrt(D)},new a;var L=new o,F=new c;h.prototype.calculateWorldAABB=function(D,E,y,b){var O=L,B=F;O.position=D,O.quaternion=E,this.aabb.toWorldFrame(O,B),y.copy(B.lowerBound),b.copy(B.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(D,E,y,b,O){D=D||1,E=E||.5,y=y||8,b=b||6,O=O||Math.PI*2;for(var B=[],K=[],j=0;j<=y;j++)for(var at=0;at<=b;at++){var H=at/b*O,U=j/y*Math.PI*2,st=(D+E*Math.cos(U))*Math.cos(H),nt=(D+E*Math.cos(U))*Math.sin(H),z=E*Math.sin(U);B.push(st,nt,z)}for(var j=1;j<=y;j++)for(var at=1;at<=b;at++){var tt=(b+1)*j+at-1,G=(b+1)*(j-1)+at-1,R=(b+1)*(j-1)+at,C=(b+1)*j+at;K.push(tt,G,C),K.push(G,R,C)}return new h(B,K)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],c=[],u=[];a.prototype.solve=function(h,l){var f=0,d=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=l.bodies,x=p.length,M=h,_,A,L,F,D,E;if(m!==0)for(var y=0;y!==x;y++)p[y].updateSolveMassProperties();var b=c,O=u,B=o;b.length=m,O.length=m,B.length=m;for(var y=0;y!==m;y++){var K=g[y];B[y]=0,O[y]=K.computeB(M),b[y]=1/K.computeC()}if(m!==0){for(var y=0;y!==x;y++){var j=p[y],at=j.vlambda,H=j.wlambda;at.set(0,0,0),H&&H.set(0,0,0)}for(f=0;f!==d;f++){F=0;for(var U=0;U!==m;U++){var K=g[U];_=O[U],A=b[U],E=B[U],D=K.computeGWlambda(),L=A*(_-D-K.eps*E),E+L<K.minForce?L=K.minForce-E:E+L>K.maxForce&&(L=K.maxForce-E),B[U]+=L,F+=L>0?L:-L,K.addToWlambda(L)}if(F*F<v)break}for(var y=0;y!==x;y++){var j=p[y],st=j.velocity,nt=j.angularVelocity;st.vadd(j.vlambda,st),nt&&nt.vadd(j.wlambda,nt)}}return f}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,c=o.indexOf(a);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],u=[],h={bodies:[]},l=a.STATIC;function f(p){for(var x=p.length,M=0;M!==x;M++){var _=p[M];if(!_.visited&&!(_.body.type&l))return _}return!1}var d=[];function v(p,x,M,_){for(d.push(p),p.visited=!0,x(p,M,_);d.length;)for(var A=d.pop(),L;L=f(A.children);)L.visited=!0,x(L,M,_),d.push(L)}function g(p,x,M){x.push(p.body);for(var _=p.eqs.length,A=0;A!==_;A++){var L=p.eqs[A];M.indexOf(L)===-1&&M.push(L)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,x){for(var M=c,_=this.nodePool,A=x.bodies,L=this.equations,F=L.length,D=A.length,E=this.subsolver;_.length<D;)_.push(this.createNode());M.length=D;for(var y=0;y<D;y++)M[y]=_[y];for(var y=0;y!==D;y++){var b=M[y];b.body=A[y],b.children.length=0,b.eqs.length=0,b.visited=!1}for(var O=0;O!==F;O++){var B=L[O],y=A.indexOf(B.bi),K=A.indexOf(B.bj),j=M[y],at=M[K];j.children.push(at),j.eqs.push(B),at.children.push(j),at.eqs.push(B)}var H,U=0,st=u;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var nt=h;H=f(M);){st.length=0,nt.bodies.length=0,v(H,g,nt.bodies,st);var z=st.length;st=st.sort(m);for(var y=0;y!==z;y++)E.addEquation(st[y]);E.solve(p,nt),E.removeAllEquations(),U++}return U};function m(p,x){return x.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[a]===void 0&&(c[a]=[]),c[a].indexOf(o)===-1&&c[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[a]!==void 0&&c[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[a]===void 0)return this;var u=c[a].indexOf(o);return u!==-1&&c[a].splice(u,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,c=o[a.type];if(c!==void 0){a.target=this;for(var u=0,h=c.length;u<h;u++)c[u].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,f){f=f||{},f.root=null,f.aabb=l,o.call(this,f),this.maxDepth=typeof f.maxDepth<"u"?f.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,f){this.children.length=this.data.length=0},o.prototype.insert=function(l,f,d){var v=this.data;if(d=d||0,!this.aabb.contains(l))return!1;var g=this.children;if(d<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(l,f,d+1))return!0;m&&(g.length=0)}return v.push(f),!0};var u=new a;o.prototype.subdivide=function(){var l=this.aabb,f=l.lowerBound,d=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),d.vsub(f,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var x=p.aabb.lowerBound;x.x*=u.x,x.y*=u.y,x.z*=u.z,x.vadd(f,x),x.vadd(u,p.aabb.upperBound)}},o.prototype.aabbQuery=function(l,f){this.data,this.children;for(var d=[this];d.length;){var v=d.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(f,v.data),Array.prototype.push.apply(d,v.children)}return f};var h=new r;o.prototype.rayQuery=function(l,f,d){return l.getAABB(h),h.toLocalFrame(f,h),this.aabbQuery(h,d),d},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var f=l.pop(),d=f.children.length-1;d>=0;d--)f.children[d].data.length||f.children.splice(d,1);Array.prototype.push.apply(l,f.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var c=o;o=a,a=c}return this.data[a+"-"+o]},r.prototype.set=function(a,o,c){if(a>o){var u=o;o=a,a=u}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var c=o.pop();delete a[c]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var c in o)c in a||(a[c]=o[c]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),f=e("../equations/ContactEquation"),d=e("../equations/FrictionEquation");function v(ct){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=ct,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(ct,mt,Et,Tt,oe,Ht){var Lt;this.contactPointPool.length?(Lt=this.contactPointPool.pop(),Lt.bi=ct,Lt.bj=mt):Lt=new f(ct,mt),Lt.enabled=ct.collisionResponse&&mt.collisionResponse&&Et.collisionResponse&&Tt.collisionResponse;var kt=this.currentContactMaterial;Lt.restitution=kt.restitution,Lt.setSpookParams(kt.contactEquationStiffness,kt.contactEquationRelaxation,this.world.dt);var ot=Et.material||ct.material,Dt=Tt.material||mt.material;return ot&&Dt&&ot.restitution>=0&&Dt.restitution>=0&&(Lt.restitution=ot.restitution*Dt.restitution),Lt.si=oe||Et,Lt.sj=Ht||Tt,Lt},v.prototype.createFrictionEquationsFromContact=function(ct,mt){var Et=ct.bi,Tt=ct.bj,oe=ct.si,Ht=ct.sj,Lt=this.world,kt=this.currentContactMaterial,ot=kt.friction,Dt=oe.material||Et.material,zt=Ht.material||Tt.material;if(Dt&&zt&&Dt.friction>=0&&zt.friction>=0&&(ot=Dt.friction*zt.friction),ot>0){var Qt=ot*Lt.gravity.length(),Ft=Et.invMass+Tt.invMass;Ft>0&&(Ft=1/Ft);var Pt=this.frictionEquationPool,Bt=Pt.length?Pt.pop():new d(Et,Tt,Qt*Ft),ne=Pt.length?Pt.pop():new d(Et,Tt,Qt*Ft);return Bt.bi=ne.bi=Et,Bt.bj=ne.bj=Tt,Bt.minForce=ne.minForce=-Qt*Ft,Bt.maxForce=ne.maxForce=Qt*Ft,Bt.ri.copy(ct.ri),Bt.rj.copy(ct.rj),ne.ri.copy(ct.ri),ne.rj.copy(ct.rj),ct.ni.tangents(Bt.t,ne.t),Bt.setSpookParams(kt.frictionEquationStiffness,kt.frictionEquationRelaxation,Lt.dt),ne.setSpookParams(kt.frictionEquationStiffness,kt.frictionEquationRelaxation,Lt.dt),Bt.enabled=ne.enabled=ct.enabled,mt.push(Bt,ne),!0}return!1};var g=new c,m=new c,p=new c;v.prototype.createFrictionFromAverage=function(ct){var mt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(mt,this.frictionResult)||ct===1)){var Et=this.frictionResult[this.frictionResult.length-2],Tt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var oe=mt.bi;mt.bj;for(var Ht=0;Ht!==ct;Ht++)mt=this.result[this.result.length-1-Ht],mt.bodyA!==oe?(g.vadd(mt.ni,g),m.vadd(mt.ri,m),p.vadd(mt.rj,p)):(g.vsub(mt.ni,g),m.vadd(mt.rj,m),p.vadd(mt.ri,p));var Lt=1/ct;m.scale(Lt,Et.ri),p.scale(Lt,Et.rj),Tt.ri.copy(Et.ri),Tt.rj.copy(Et.rj),g.normalize(),g.tangents(Et.t,Tt.t)}};var x=new c,M=new c,_=new h,A=new h;v.prototype.getContacts=function(ct,mt,Et,Tt,oe,Ht,Lt){this.contactPointPool=oe,this.frictionEquationPool=Lt,this.result=Tt,this.frictionResult=Ht;for(var kt=_,ot=A,Dt=x,zt=M,Qt=0,Ft=ct.length;Qt!==Ft;Qt++){var Pt=ct[Qt],Bt=mt[Qt],ne=null;Pt.material&&Bt.material&&(ne=Et.getContactMaterial(Pt.material,Bt.material)||null);for(var ue=0;ue<Pt.shapes.length;ue++){Pt.quaternion.mult(Pt.shapeOrientations[ue],kt),Pt.quaternion.vmult(Pt.shapeOffsets[ue],Dt),Dt.vadd(Pt.position,Dt);for(var wt=Pt.shapes[ue],pe=0;pe<Bt.shapes.length;pe++){Bt.quaternion.mult(Bt.shapeOrientations[pe],ot),Bt.quaternion.vmult(Bt.shapeOffsets[pe],zt),zt.vadd(Bt.position,zt);var T=Bt.shapes[pe];if(!(Dt.distanceTo(zt)>wt.boundingSphereRadius+T.boundingSphereRadius)){var q=null;wt.material&&T.material&&(q=Et.getContactMaterial(wt.material,T.material)||null),this.currentContactMaterial=q||ne||Et.defaultContactMaterial;var $=this[wt.type|T.type];$&&(wt.type<T.type?$.call(this,wt,T,Dt,zt,kt,ot,Pt,Bt,wt,T):$.call(this,T,wt,zt,Dt,ot,kt,Bt,Pt,wt,T))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){ct.convexPolyhedronRepresentation.material=ct.material,mt.convexPolyhedronRepresentation.material=mt.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,mt.convexPolyhedronRepresentation.collisionResponse=mt.collisionResponse,this.convexConvex(ct.convexPolyhedronRepresentation,mt.convexPolyhedronRepresentation,Et,Tt,oe,Ht,Lt,kt,ct,mt)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexConvex(ct.convexPolyhedronRepresentation,mt,Et,Tt,oe,Ht,Lt,kt,ct,mt)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexParticle(ct.convexPolyhedronRepresentation,mt,Et,Tt,oe,Ht,Lt,kt,ct,mt)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=this.createContactEquation(Lt,kt,ct,mt);Tt.vsub(Et,ot.ni),ot.ni.normalize(),ot.ri.copy(ot.ni),ot.rj.copy(ot.ni),ot.ri.mult(ct.radius,ot.ri),ot.rj.mult(-mt.radius,ot.rj),ot.ri.vadd(Et,ot.ri),ot.ri.vsub(Lt.position,ot.ri),ot.rj.vadd(Tt,ot.rj),ot.rj.vsub(kt.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)};var L=new c,F=new c,D=new c;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=new c,Dt=L;Dt.set(0,0,1),oe.vmult(Dt,Dt);for(var zt=0;zt<mt.vertices.length/3;zt++){mt.getVertex(zt,ot);var Qt=new c;Qt.copy(ot),u.pointToWorldFrame(Tt,Ht,Qt,ot);var Ft=F;ot.vsub(Et,Ft);var Pt=Dt.dot(Ft);if(Pt<=0){var Bt=this.createContactEquation(Lt,kt,ct,mt);Bt.ni.copy(Dt);var ne=D;Dt.scale(Ft.dot(Dt),ne),ot.vsub(ne,ne),Bt.ri.copy(ne),Bt.ri.vsub(Lt.position,Bt.ri),Bt.rj.copy(ot),Bt.rj.vsub(kt.position,Bt.rj),this.result.push(Bt),this.createFrictionEquationsFromContact(Bt,this.frictionResult)}}};var E=new c,y=new c;new c;var b=new c,O=new c,B=new c,K=new c,j=new c,at=new c,H=new c,U=new c,st=new c,nt=new c,z=new c,tt=new r,G=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=B,Dt=K,zt=j,Qt=at,Ft=H,Pt=U,Bt=tt,ne=O,ue=y,wt=G;u.pointToLocalFrame(Tt,Ht,Et,Ft);var pe=ct.radius;Bt.lowerBound.set(Ft.x-pe,Ft.y-pe,Ft.z-pe),Bt.upperBound.set(Ft.x+pe,Ft.y+pe,Ft.z+pe),mt.getTrianglesInAABB(Bt,wt);for(var T=b,q=ct.radius*ct.radius,$=0;$<wt.length;$++)for(var J=0;J<3;J++)if(mt.getVertex(mt.indices[wt[$]*3+J],T),T.vsub(Ft,ue),ue.norm2()<=q){ne.copy(T),u.pointToWorldFrame(Tt,Ht,ne,T),T.vsub(Et,ue);var V=this.createContactEquation(Lt,kt,ct,mt);V.ni.copy(ue),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(ct.radius,V.ri),V.ri.vadd(Et,V.ri),V.ri.vsub(Lt.position,V.ri),V.rj.copy(T),V.rj.vsub(kt.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(var $=0;$<wt.length;$++)for(var J=0;J<3;J++){mt.getVertex(mt.indices[wt[$]*3+J],ot),mt.getVertex(mt.indices[wt[$]*3+(J+1)%3],Dt),Dt.vsub(ot,zt),Ft.vsub(Dt,Pt);var Mt=Pt.dot(zt);Ft.vsub(ot,Pt);var It=Pt.dot(zt);if(It>0&&Mt<0){Ft.vsub(ot,Pt),Qt.copy(zt),Qt.normalize(),It=Pt.dot(Qt),Qt.scale(It,Pt),Pt.vadd(ot,Pt);var Nt=Pt.distanceTo(Ft);if(Nt<ct.radius){var V=this.createContactEquation(Lt,kt,ct,mt);Pt.vsub(Ft,V.ni),V.ni.normalize(),V.ni.scale(ct.radius,V.ri),u.pointToWorldFrame(Tt,Ht,Pt,Pt),Pt.vsub(kt.position,V.rj),u.vectorToWorldFrame(Ht,V.ni,V.ni),u.vectorToWorldFrame(Ht,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}}for(var Yt=st,Jt=nt,Gt=z,ie=E,$=0,se=wt.length;$!==se;$++){mt.getTriangleVertices(wt[$],Yt,Jt,Gt),mt.getNormal(wt[$],ie),Ft.vsub(Yt,Pt);var Nt=Pt.dot(ie);if(ie.scale(Nt,Pt),Ft.vsub(Pt,Pt),Nt=Pt.distanceTo(Ft),o.pointInTriangle(Pt,Yt,Jt,Gt)&&Nt<ct.radius){var V=this.createContactEquation(Lt,kt,ct,mt);Pt.vsub(Ft,V.ni),V.ni.normalize(),V.ni.scale(ct.radius,V.ri),u.pointToWorldFrame(Tt,Ht,Pt,Pt),Pt.vsub(kt.position,V.rj),u.vectorToWorldFrame(Ht,V.ni,V.ni),u.vectorToWorldFrame(Ht,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}wt.length=0};var R=new c,C=new c;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=this.createContactEquation(Lt,kt,ct,mt);if(ot.ni.set(0,0,1),Ht.vmult(ot.ni,ot.ni),ot.ni.negate(ot.ni),ot.ni.normalize(),ot.ni.mult(ct.radius,ot.ri),Et.vsub(Tt,R),ot.ni.mult(ot.ni.dot(R),C),R.vsub(C,ot.rj),-R.dot(ot.ni)<=ct.radius){var Dt=ot.ri,zt=ot.rj;Dt.vadd(Et,Dt),Dt.vsub(Lt.position,Dt),zt.vadd(Tt,zt),zt.vsub(kt.position,zt),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}};var W=new c,Z=new c,rt=new c;function X(ct,mt,Et){for(var Tt=null,oe=ct.length,Ht=0;Ht!==oe;Ht++){var Lt=ct[Ht],kt=W;ct[(Ht+1)%oe].vsub(Lt,kt);var ot=Z;kt.cross(mt,ot);var Dt=rt;Et.vsub(Lt,Dt);var zt=ot.dot(Dt);if(Tt===null||zt>0&&Tt===!0||zt<=0&&Tt===!1){Tt===null&&(Tt=zt>0);continue}else return!1}return!0}var et=new c,_t=new c,Ut=new c,yt=new c,N=[new c,new c,new c,new c,new c,new c],vt=new c,ut=new c,Zt=new c,St=new c;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=this.v3pool,Dt=N;Et.vsub(Tt,et),mt.getSideNormals(Dt,Ht);for(var zt=ct.radius,Qt=!1,Ft=ut,Pt=Zt,Bt=St,ne=null,ue=0,wt=0,pe=0,T=null,q=0,$=Dt.length;q!==$&&Qt===!1;q++){var J=_t;J.copy(Dt[q]);var V=J.norm();J.normalize();var Mt=et.dot(J);if(Mt<V+zt&&Mt>0){var It=Ut,Nt=yt;It.copy(Dt[(q+1)%3]),Nt.copy(Dt[(q+2)%3]);var Yt=It.norm(),Jt=Nt.norm();It.normalize(),Nt.normalize();var Gt=et.dot(It),ie=et.dot(Nt);if(Gt<Yt&&Gt>-Yt&&ie<Jt&&ie>-Jt){var Ae=Math.abs(Mt-V-zt);(T===null||Ae<T)&&(T=Ae,wt=Gt,pe=ie,ne=V,Ft.copy(J),Pt.copy(It),Bt.copy(Nt),ue++)}}}if(ue){Qt=!0;var qt=this.createContactEquation(Lt,kt,ct,mt);Ft.mult(-zt,qt.ri),qt.ni.copy(Ft),qt.ni.negate(qt.ni),Ft.mult(ne,Ft),Pt.mult(wt,Pt),Ft.vadd(Pt,Ft),Bt.mult(pe,Bt),Ft.vadd(Bt,qt.rj),qt.ri.vadd(Et,qt.ri),qt.ri.vsub(Lt.position,qt.ri),qt.rj.vadd(Tt,qt.rj),qt.rj.vsub(kt.position,qt.rj),this.result.push(qt),this.createFrictionEquationsFromContact(qt,this.frictionResult)}for(var se=ot.get(),_e=vt,me=0;me!==2&&!Qt;me++)for(var xe=0;xe!==2&&!Qt;xe++)for(var ce=0;ce!==2&&!Qt;ce++)if(se.set(0,0,0),me?se.vadd(Dt[0],se):se.vsub(Dt[0],se),xe?se.vadd(Dt[1],se):se.vsub(Dt[1],se),ce?se.vadd(Dt[2],se):se.vsub(Dt[2],se),Tt.vadd(se,_e),_e.vsub(Et,_e),_e.norm2()<zt*zt){Qt=!0;var qt=this.createContactEquation(Lt,kt,ct,mt);qt.ri.copy(_e),qt.ri.normalize(),qt.ni.copy(qt.ri),qt.ri.mult(zt,qt.ri),qt.rj.copy(se),qt.ri.vadd(Et,qt.ri),qt.ri.vsub(Lt.position,qt.ri),qt.rj.vadd(Tt,qt.rj),qt.rj.vsub(kt.position,qt.rj),this.result.push(qt),this.createFrictionEquationsFromContact(qt,this.frictionResult)}ot.release(se),se=null;for(var te=ot.get(),Ie=ot.get(),qt=ot.get(),Le=ot.get(),Ae=ot.get(),ze=Dt.length,me=0;me!==ze&&!Qt;me++)for(var xe=0;xe!==ze&&!Qt;xe++)if(me%3!==xe%3){Dt[xe].cross(Dt[me],te),te.normalize(),Dt[me].vadd(Dt[xe],Ie),qt.copy(Et),qt.vsub(Ie,qt),qt.vsub(Tt,qt);var je=qt.dot(te);te.mult(je,Le);for(var ce=0;ce===me%3||ce===xe%3;)ce++;Ae.copy(Et),Ae.vsub(Le,Ae),Ae.vsub(Ie,Ae),Ae.vsub(Tt,Ae);var De=Math.abs(je),Ye=Ae.norm();if(De<Dt[ce].norm()&&Ye<zt){Qt=!0;var Te=this.createContactEquation(Lt,kt,ct,mt);Ie.vadd(Le,Te.rj),Te.rj.copy(Te.rj),Ae.negate(Te.ni),Te.ni.normalize(),Te.ri.copy(Te.rj),Te.ri.vadd(Tt,Te.ri),Te.ri.vsub(Et,Te.ri),Te.ri.normalize(),Te.ri.mult(zt,Te.ri),Te.ri.vadd(Et,Te.ri),Te.ri.vsub(Lt.position,Te.ri),Te.rj.vadd(Tt,Te.rj),Te.rj.vsub(kt.position,Te.rj),this.result.push(Te),this.createFrictionEquationsFromContact(Te,this.frictionResult)}}ot.release(te,Ie,qt,Le,Ae)};var le=new c,gt=new c,I=new c,S=new c,Q=new c,dt=new c,pt=new c,ft=new c,Rt=new c,Ct=new c;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=this.v3pool;Et.vsub(Tt,le);for(var Dt=mt.faceNormals,zt=mt.faces,Qt=mt.vertices,Ft=ct.radius,Pt=0;Pt!==Qt.length;Pt++){var Bt=Qt[Pt],ne=Q;Ht.vmult(Bt,ne),Tt.vadd(ne,ne);var ue=S;if(ne.vsub(Et,ue),ue.norm2()<Ft*Ft){pe=!0;var wt=this.createContactEquation(Lt,kt,ct,mt);wt.ri.copy(ue),wt.ri.normalize(),wt.ni.copy(wt.ri),wt.ri.mult(Ft,wt.ri),ne.vsub(Tt,wt.rj),wt.ri.vadd(Et,wt.ri),wt.ri.vsub(Lt.position,wt.ri),wt.rj.vadd(Tt,wt.rj),wt.rj.vsub(kt.position,wt.rj),this.result.push(wt),this.createFrictionEquationsFromContact(wt,this.frictionResult);return}}for(var pe=!1,Pt=0,T=zt.length;Pt!==T&&pe===!1;Pt++){var q=Dt[Pt],$=zt[Pt],J=dt;Ht.vmult(q,J);var V=pt;Ht.vmult(Qt[$[0]],V),V.vadd(Tt,V);var Mt=ft;J.mult(-Ft,Mt),Et.vadd(Mt,Mt);var It=Rt;Mt.vsub(V,It);var Nt=It.dot(J),Yt=Ct;if(Et.vsub(V,Yt),Nt<0&&Yt.dot(J)>0){for(var Jt=[],Gt=0,ie=$.length;Gt!==ie;Gt++){var se=ot.get();Ht.vmult(Qt[$[Gt]],se),Tt.vadd(se,se),Jt.push(se)}if(X(Jt,J,Et)){pe=!0;var wt=this.createContactEquation(Lt,kt,ct,mt);J.mult(-Ft,wt.ri),J.negate(wt.ni);var _e=ot.get();J.mult(-Nt,_e);var me=ot.get();J.mult(-Ft,me),Et.vsub(Tt,wt.rj),wt.rj.vadd(me,wt.rj),wt.rj.vadd(_e,wt.rj),wt.rj.vadd(Tt,wt.rj),wt.rj.vsub(kt.position,wt.rj),wt.ri.vadd(Et,wt.ri),wt.ri.vsub(Lt.position,wt.ri),ot.release(_e),ot.release(me),this.result.push(wt),this.createFrictionEquationsFromContact(wt,this.frictionResult);for(var Gt=0,xe=Jt.length;Gt!==xe;Gt++)ot.release(Jt[Gt]);return}else for(var Gt=0;Gt!==$.length;Gt++){var ce=ot.get(),te=ot.get();Ht.vmult(Qt[$[(Gt+1)%$.length]],ce),Ht.vmult(Qt[$[(Gt+2)%$.length]],te),Tt.vadd(ce,ce),Tt.vadd(te,te);var Ie=gt;te.vsub(ce,Ie);var qt=I;Ie.unit(qt);var Le=ot.get(),Ae=ot.get();Et.vsub(ce,Ae);var ze=Ae.dot(qt);qt.mult(ze,Le),Le.vadd(ce,Le);var je=ot.get();if(Le.vsub(Et,je),ze>0&&ze*ze<Ie.norm2()&&je.norm2()<Ft*Ft){var wt=this.createContactEquation(Lt,kt,ct,mt);Le.vsub(Tt,wt.rj),Le.vsub(Et,wt.ni),wt.ni.normalize(),wt.ni.mult(Ft,wt.ri),wt.rj.vadd(Tt,wt.rj),wt.rj.vsub(kt.position,wt.rj),wt.ri.vadd(Et,wt.ri),wt.ri.vsub(Lt.position,wt.ri),this.result.push(wt),this.createFrictionEquationsFromContact(wt,this.frictionResult);for(var Gt=0,xe=Jt.length;Gt!==xe;Gt++)ot.release(Jt[Gt]);ot.release(ce),ot.release(te),ot.release(Le),ot.release(je),ot.release(Ae);return}ot.release(ce),ot.release(te),ot.release(Le),ot.release(je),ot.release(Ae)}for(var Gt=0,xe=Jt.length;Gt!==xe;Gt++)ot.release(Jt[Gt])}}},new c,new c,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){mt.convexPolyhedronRepresentation.material=mt.material,mt.convexPolyhedronRepresentation.collisionResponse=mt.collisionResponse,this.planeConvex(ct,mt.convexPolyhedronRepresentation,Et,Tt,oe,Ht,Lt,kt)};var Vt=new c,ve=new c,bt=new c,Kt=new c;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=Vt,Dt=ve;Dt.set(0,0,1),oe.vmult(Dt,Dt);for(var zt=0,Qt=bt,Ft=0;Ft!==mt.vertices.length;Ft++){ot.copy(mt.vertices[Ft]),Ht.vmult(ot,ot),Tt.vadd(ot,ot),ot.vsub(Et,Qt);var Pt=Dt.dot(Qt);if(Pt<=0){var Bt=this.createContactEquation(Lt,kt,ct,mt),ne=Kt;Dt.mult(Dt.dot(Qt),ne),ot.vsub(ne,ne),ne.vsub(Et,Bt.ri),Bt.ni.copy(Dt),ot.vsub(Tt,Bt.rj),Bt.ri.vadd(Et,Bt.ri),Bt.ri.vsub(Lt.position,Bt.ri),Bt.rj.vadd(Tt,Bt.rj),Bt.rj.vsub(kt.position,Bt.rj),this.result.push(Bt),zt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Bt,this.frictionResult)}}this.enableFrictionReduction&&zt&&this.createFrictionFromAverage(zt)};var re=new c,ae=new c;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(ct,mt,Et,Tt,oe,Ht,Lt,kt,ot,Dt,zt,Qt){var Ft=re;if(!(Et.distanceTo(Tt)>ct.boundingSphereRadius+mt.boundingSphereRadius)&&ct.findSeparatingAxis(mt,Et,oe,Tt,Ht,Ft,zt,Qt)){var Pt=[],Bt=ae;ct.clipAgainstHull(Et,oe,mt,Tt,Ht,Ft,-100,100,Pt);for(var ne=0,ue=0;ue!==Pt.length;ue++){var wt=this.createContactEquation(Lt,kt,ct,mt,ot,Dt),pe=wt.ri,T=wt.rj;Ft.negate(wt.ni),Pt[ue].normal.negate(Bt),Bt.mult(Pt[ue].depth,Bt),Pt[ue].point.vadd(Bt,pe),T.copy(Pt[ue].point),pe.vsub(Et,pe),T.vsub(Tt,T),pe.vadd(Et,pe),pe.vsub(Lt.position,pe),T.vadd(Tt,T),T.vsub(kt.position,T),this.result.push(wt),ne++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(wt,this.frictionResult)}this.enableFrictionReduction&&ne&&this.createFrictionFromAverage(ne)}};var $t=new c,ge=new c,he=new c;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=$t;ot.set(0,0,1),Lt.quaternion.vmult(ot,ot);var Dt=ge;Tt.vsub(Lt.position,Dt);var zt=ot.dot(Dt);if(zt<=0){var Qt=this.createContactEquation(kt,Lt,mt,ct);Qt.ni.copy(ot),Qt.ni.negate(Qt.ni),Qt.ri.set(0,0,0);var Ft=he;ot.mult(ot.dot(Tt),Ft),Tt.vsub(Ft,Ft),Qt.rj.copy(Ft),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}};var ye=new c;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=ye;ot.set(0,0,1),Tt.vsub(Et,ot);var Dt=ot.norm2();if(Dt<=ct.radius*ct.radius){var zt=this.createContactEquation(kt,Lt,mt,ct);ot.normalize(),zt.rj.copy(ot),zt.rj.mult(ct.radius,zt.rj),zt.ni.copy(ot),zt.ni.negate(zt.ni),zt.ri.set(0,0,0),this.result.push(zt),this.createFrictionEquationsFromContact(zt,this.frictionResult)}};var Y=new h,Ot=new c;new c;var ht=new c,xt=new c,Wt=new c;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=-1,Dt=ht,zt=Wt,Qt=null,Ft=Ot;if(Ft.copy(Tt),Ft.vsub(Et,Ft),oe.conjugate(Y),Y.vmult(Ft,Ft),ct.pointIsInside(Ft)){ct.worldVerticesNeedsUpdate&&ct.computeWorldVertices(Et,oe),ct.worldFaceNormalsNeedsUpdate&&ct.computeWorldFaceNormals(oe);for(var Pt=0,Bt=ct.faces.length;Pt!==Bt;Pt++){var ne=[ct.worldVertices[ct.faces[Pt][0]]],ue=ct.worldFaceNormals[Pt];Tt.vsub(ne[0],xt);var wt=-ue.dot(xt);(Qt===null||Math.abs(wt)<Math.abs(Qt))&&(Qt=wt,ot=Pt,Dt.copy(ue))}if(ot!==-1){var pe=this.createContactEquation(kt,Lt,mt,ct);Dt.mult(Qt,zt),zt.vadd(Tt,zt),zt.vsub(Et,zt),pe.rj.copy(zt),Dt.negate(pe.ni),pe.ri.set(0,0,0);var T=pe.ri,q=pe.rj;T.vadd(Tt,T),T.vsub(kt.position,T),q.vadd(Et,q),q.vsub(Lt.position,q),this.result.push(pe),this.createFrictionEquationsFromContact(pe,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexHeightfield(ct.convexPolyhedronRepresentation,mt,Et,Tt,oe,Ht,Lt,kt)};var Xt=new c,fe=new c,Pe=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=mt.data,Dt=mt.elementSize,zt=ct.boundingSphereRadius,Qt=fe,Ft=Pe,Pt=Xt;u.pointToLocalFrame(Tt,Ht,Et,Pt);var Bt=Math.floor((Pt.x-zt)/Dt)-1,ne=Math.ceil((Pt.x+zt)/Dt)+1,ue=Math.floor((Pt.y-zt)/Dt)-1,wt=Math.ceil((Pt.y+zt)/Dt)+1;if(!(ne<0||wt<0||Bt>ot.length||ue>ot[0].length)){Bt<0&&(Bt=0),ne<0&&(ne=0),ue<0&&(ue=0),wt<0&&(wt=0),Bt>=ot.length&&(Bt=ot.length-1),ne>=ot.length&&(ne=ot.length-1),wt>=ot[0].length&&(wt=ot[0].length-1),ue>=ot[0].length&&(ue=ot[0].length-1);var pe=[];mt.getRectMinMax(Bt,ue,ne,wt,pe);var T=pe[0],q=pe[1];if(!(Pt.z-zt>q||Pt.z+zt<T))for(var $=Bt;$<ne;$++)for(var J=ue;J<wt;J++)mt.getConvexTrianglePillar($,J,!1),u.pointToWorldFrame(Tt,Ht,mt.pillarOffset,Qt),Et.distanceTo(Qt)<mt.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.convexConvex(ct,mt.pillarConvex,Et,Qt,oe,Ht,Lt,kt,null,null,Ft,null),mt.getConvexTrianglePillar($,J,!0),u.pointToWorldFrame(Tt,Ht,mt.pillarOffset,Qt),Et.distanceTo(Qt)<mt.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.convexConvex(ct,mt.pillarConvex,Et,Qt,oe,Ht,Lt,kt,null,null,Ft,null)}};var Be=new c,de=new c;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(ct,mt,Et,Tt,oe,Ht,Lt,kt){var ot=mt.data,Dt=ct.radius,zt=mt.elementSize,Qt=de,Ft=Be;u.pointToLocalFrame(Tt,Ht,Et,Ft);var Pt=Math.floor((Ft.x-Dt)/zt)-1,Bt=Math.ceil((Ft.x+Dt)/zt)+1,ne=Math.floor((Ft.y-Dt)/zt)-1,ue=Math.ceil((Ft.y+Dt)/zt)+1;if(!(Bt<0||ue<0||Pt>ot.length||ue>ot[0].length)){Pt<0&&(Pt=0),Bt<0&&(Bt=0),ne<0&&(ne=0),ue<0&&(ue=0),Pt>=ot.length&&(Pt=ot.length-1),Bt>=ot.length&&(Bt=ot.length-1),ue>=ot[0].length&&(ue=ot[0].length-1),ne>=ot[0].length&&(ne=ot[0].length-1);var wt=[];mt.getRectMinMax(Pt,ne,Bt,ue,wt);var pe=wt[0],T=wt[1];if(!(Ft.z-Dt>T||Ft.z+Dt<pe))for(var q=this.result,$=Pt;$<Bt;$++)for(var J=ne;J<ue;J++){var V=q.length;mt.getConvexTrianglePillar($,J,!1),u.pointToWorldFrame(Tt,Ht,mt.pillarOffset,Qt),Et.distanceTo(Qt)<mt.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.sphereConvex(ct,mt.pillarConvex,Et,Qt,oe,Ht,Lt,kt),mt.getConvexTrianglePillar($,J,!0),u.pointToWorldFrame(Tt,Ht,mt.pillarOffset,Qt),Et.distanceTo(Qt)<mt.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.sphereConvex(ct,mt.pillarConvex,Et,Qt,oe,Ht,Lt,kt);var Mt=q.length-V;if(Mt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=_;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),f=e("../material/Material"),d=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),x=e("../collision/Ray"),M=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new M,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new f("default"),this.defaultContactMaterial=new d(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new p;var A=new x;if(_.prototype.getContactMaterial=function(U,st){return this.contactMaterialTable.get(U.id,st.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var U=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=U,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(U){this.bodies.indexOf(U)===-1&&(U.index=this.bodies.length,this.bodies.push(U),U.world=this,U.initPosition.copy(U.position),U.initVelocity.copy(U.velocity),U.timeLastSleepy=this.time,U instanceof v&&(U.initAngularVelocity.copy(U.angularVelocity),U.initQuaternion.copy(U.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=U,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(U){this.constraints.push(U)},_.prototype.removeConstraint=function(U){var st=this.constraints.indexOf(U);st!==-1&&this.constraints.splice(st,1)},_.prototype.rayTest=function(U,st,nt){nt instanceof m?this.raycastClosest(U,st,{skipBackfaces:!0},nt):this.raycastAll(U,st,{skipBackfaces:!0},nt)},_.prototype.raycastAll=function(U,st,nt,z){return nt.mode=x.ALL,nt.from=U,nt.to=st,nt.callback=z,A.intersectWorld(this,nt)},_.prototype.raycastAny=function(U,st,nt,z){return nt.mode=x.ANY,nt.from=U,nt.to=st,nt.result=z,A.intersectWorld(this,nt)},_.prototype.raycastClosest=function(U,st,nt,z){return nt.mode=x.CLOSEST,nt.from=U,nt.to=st,nt.result=z,A.intersectWorld(this,nt)},_.prototype.remove=function(U){U.world=null;var st=this.bodies.length-1,nt=this.bodies,z=nt.indexOf(U);if(z!==-1){nt.splice(z,1);for(var tt=0;tt!==nt.length;tt++)nt[tt].index=tt;this.collisionMatrix.setNumObjects(st),this.removeBodyEvent.body=U,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(U){this.materials.push(U)},_.prototype.addContactMaterial=function(U){this.contactmaterials.push(U),this.contactMaterialTable.set(U.materials[0].id,U.materials[1].id,U)},typeof performance>"u"&&(performance={}),!performance.now){var L=Date.now();performance.timing&&performance.timing.navigationStart&&(L=performance.timing.navigationStart),performance.now=function(){return Date.now()-L}}var F=new a;_.prototype.step=function(U,st,nt){if(nt=nt||10,st=st||0,st===0)this.internalStep(U),this.time+=U;else{var z=Math.floor((this.time+st)/U)-Math.floor(this.time/U);z=Math.min(z,nt);for(var tt=performance.now(),G=0;G!==z&&(this.internalStep(U),!(performance.now()-tt>U*1e3));G++);this.time+=st;for(var R=this.time%U,C=R/U,W=F,Z=this.bodies,rt=0;rt!==Z.length;rt++){var X=Z[rt];X.type!==v.STATIC&&X.sleepState!==v.SLEEPING?(X.position.vsub(X.previousPosition,W),W.scale(C,W),X.position.vadd(W,X.interpolatedPosition)):(X.interpolatedPosition.copy(X.position),X.interpolatedQuaternion.copy(X.quaternion))}}};var D={type:"postStep"},E={type:"preStep"},y={type:"collide",body:null,contact:null},b=[],O=[],B=[],K=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var j=new o,at=new o,H=new a;_.prototype.internalStep=function(U){this.dt=U;var st=this.contacts,nt=B,z=K,tt=this.numObjects(),G=this.bodies,R=this.solver,C=this.gravity,W=this.doProfiling,Z=this.profile,rt=v.DYNAMIC,X,et=this.constraints,_t=O;C.norm();var Ut=C.x,yt=C.y,N=C.z,vt=0;for(W&&(X=performance.now()),vt=0;vt!==tt;vt++){var ut=G[vt];if(ut.type&rt){var Zt=ut.force,St=ut.mass;Zt.x+=St*Ut,Zt.y+=St*yt,Zt.z+=St*N}}for(var vt=0,le=this.subsystems.length;vt!==le;vt++)this.subsystems[vt].update();W&&(X=performance.now()),nt.length=0,z.length=0,this.broadphase.collisionPairs(this,nt,z),W&&(Z.broadphase=performance.now()-X);var re=et.length;for(vt=0;vt!==re;vt++){var gt=et[vt];if(!gt.collideConnected)for(var I=nt.length-1;I>=0;I-=1)(gt.bodyA===nt[I]&&gt.bodyB===z[I]||gt.bodyB===nt[I]&&gt.bodyA===z[I])&&(nt.splice(I,1),z.splice(I,1))}this.collisionMatrixTick(),W&&(X=performance.now());var S=b,Q=st.length;for(vt=0;vt!==Q;vt++)S.push(st[vt]);st.length=0;var dt=this.frictionEquations.length;for(vt=0;vt!==dt;vt++)_t.push(this.frictionEquations[vt]);this.frictionEquations.length=0,this.narrowphase.getContacts(nt,z,this,st,S,this.frictionEquations,_t),W&&(Z.narrowphase=performance.now()-X),W&&(X=performance.now());for(var vt=0;vt<this.frictionEquations.length;vt++)R.addEquation(this.frictionEquations[vt]);for(var pt=st.length,ft=0;ft!==pt;ft++){var gt=st[ft],ut=gt.bi,Rt=gt.bj;gt.si,gt.sj;var Ct;if(ut.material&&Rt.material?Ct=this.getContactMaterial(ut.material,Rt.material)||this.defaultContactMaterial:Ct=this.defaultContactMaterial,Ct.friction,ut.material&&Rt.material&&(ut.material.friction>=0&&Rt.material.friction>=0&&ut.material.friction*Rt.material.friction,ut.material.restitution>=0&&Rt.material.restitution>=0&&(gt.restitution=ut.material.restitution*Rt.material.restitution)),R.addEquation(gt),ut.allowSleep&&ut.type===v.DYNAMIC&&ut.sleepState===v.SLEEPING&&Rt.sleepState===v.AWAKE&&Rt.type!==v.STATIC){var Vt=Rt.velocity.norm2()+Rt.angularVelocity.norm2(),ve=Math.pow(Rt.sleepSpeedLimit,2);Vt>=ve*2&&(ut._wakeUpAfterNarrowphase=!0)}if(Rt.allowSleep&&Rt.type===v.DYNAMIC&&Rt.sleepState===v.SLEEPING&&ut.sleepState===v.AWAKE&&ut.type!==v.STATIC){var bt=ut.velocity.norm2()+ut.angularVelocity.norm2(),Kt=Math.pow(ut.sleepSpeedLimit,2);bt>=Kt*2&&(Rt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ut,Rt,!0),this.collisionMatrixPrevious.get(ut,Rt)||(y.body=Rt,y.contact=gt,ut.dispatchEvent(y),y.body=ut,Rt.dispatchEvent(y))}for(W&&(Z.makeContactConstraints=performance.now()-X,X=performance.now()),vt=0;vt!==tt;vt++){var ut=G[vt];ut._wakeUpAfterNarrowphase&&(ut.wakeUp(),ut._wakeUpAfterNarrowphase=!1)}var re=et.length;for(vt=0;vt!==re;vt++){var gt=et[vt];gt.update();for(var I=0,ae=gt.equations.length;I!==ae;I++){var $t=gt.equations[I];R.addEquation($t)}}R.solve(U,this),W&&(Z.solve=performance.now()-X),R.removeAllEquations();var ge=Math.pow;for(vt=0;vt!==tt;vt++){var ut=G[vt];if(ut.type&rt){var he=ge(1-ut.linearDamping,U),ye=ut.velocity;ye.mult(he,ye);var Y=ut.angularVelocity;if(Y){var Ot=ge(1-ut.angularDamping,U);Y.mult(Ot,Y)}}}for(this.dispatchEvent(E),vt=0;vt!==tt;vt++){var ut=G[vt];ut.preStep&&ut.preStep.call(ut)}W&&(X=performance.now());var ht=j,xt=at,Wt=this.stepnumber,Xt=v.DYNAMIC|v.KINEMATIC,fe=Wt%(this.quatNormalizeSkip+1)===0,Pe=this.quatNormalizeFast,Be=U*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,vt=0;vt!==tt;vt++){var de=G[vt],ct=de.force,mt=de.torque;if(de.type&Xt&&de.sleepState!==v.SLEEPING){var Et=de.velocity,Tt=de.angularVelocity,oe=de.position,Ht=de.quaternion,Lt=de.invMass,kt=de.invInertiaWorld;Et.x+=ct.x*Lt*U,Et.y+=ct.y*Lt*U,Et.z+=ct.z*Lt*U,de.angularVelocity&&(kt.vmult(mt,H),H.mult(U,H),H.vadd(Tt,Tt)),oe.x+=Et.x*U,oe.y+=Et.y*U,oe.z+=Et.z*U,de.angularVelocity&&(ht.set(Tt.x,Tt.y,Tt.z,0),ht.mult(Ht,xt),Ht.x+=Be*xt.x,Ht.y+=Be*xt.y,Ht.z+=Be*xt.z,Ht.w+=Be*xt.w,fe&&(Pe?Ht.normalizeFast():Ht.normalize())),de.aabb&&(de.aabbNeedsUpdate=!0),de.updateInertiaWorld&&de.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,W&&(Z.integrate=performance.now()-X),this.time+=U,this.stepnumber+=1,this.dispatchEvent(D),vt=0;vt!==tt;vt++){var ut=G[vt],ot=ut.postStep;ot&&ot.call(ut)}if(this.allowSleep)for(vt=0;vt!==tt;vt++)G[vt].sleepTick(this.time)},_.prototype.clearForces=function(){for(var U=this.bodies,st=U.length,nt=0;nt!==st;nt++){var z=U[nt];z.force,z.torque,z.force.set(0,0,0),z.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(_l);const nn=_l.exports,No={width:1,height:1,depth:1,position:new it(0,0,0),materials:new hl({color:16711680}),mass:0};class vn{constructor(t,e,n={}){Oe(this,"opts");this.scene=t,this.world=e,this.opts={...No,...n}}setOptions(t=!1){return t===!1?this.opts={...No}:this.opts={...this.opts,...t},this}createBox({width:t=this.opts.width,height:e=this.opts.height,depth:n=this.opts.depth,position:s=this.opts.position,mass:r=this.opts.mass,materials:a=this.opts.materials}={}){const o=new xn(new qi(t,e,n),a);o.position.copy(s),this.scene.add(o);const c=new nn.Body({mass:r,shape:new nn.Box(new nn.Vec3(t/2,e/2,n/2)),position:new nn.Vec3(s.x,s.y,s.z)});return this.world.addBody(c),{mesh:o,body:c}}static loadTexture(t,e={}){const n=new ul().load(t);return e.wrapS&&(n.wrapS=ir),e.wrapT&&(n.wrapT=ir),e.repeat&&n.repeat.set(e.repeat.x,e.repeat.y),n}static createMaterial(t,e){const n=vn.loadTexture(vn.resolvePath(t),e);return new hl({map:n})}static createMaterials(t,e){const n=new Map;return t.map(s=>{if(n.has(s))return n.get(s);const r=vn.createMaterial(s,e);return n.set(s,r),r})}static resolvePath(t){return`/mini-games/arkanoid/textures/${t.startsWith("/")?t.slice(1):t}`}}var or,Yn;class im{constructor(t,e={}){Oe(this,"opts",{el:document.body,width:24,height:32,cx:0,cy:0,cz:0});Oe(this,"boxCtor");Oe(this,"wall",[]);Oe(this,"items",[]);Oe(this,"baffle",null);Oe(this,"ball",null);Oe(this,"world",new nn.World);Oe(this,"ballBody",null);Oe(this,"itemsBody",[]);Oe(this,"baffleBody",null);Oe(this,"wallBody",[]);Oe(this,"ballMaterial",new nn.Material("ball"));Oe(this,"itemMaterial",new nn.Material("item"));Oe(this,"wallMaterial",new nn.Material("wall"));Oe(this,"baffleMaterial",new nn.Material("baffle"));Oe(this,"toBeRemoveItem",[-1,void 0]);Jn(this,or,"default");Jn(this,Yn,new it(10,0,-10));this.layout=t,this.opts={...this.opts,...e},this.world.gravity.set(0,0,0),this.boxCtor=new vn(this.layout.scene,this.world),this.init(),this.initEvent(),this.layout.renderer.setAnimationLoop(this.animate.bind(this))}get status(){return vi(this,or)}set status(t){switch($r(this,or,t),window._emit("status",t),t){case"playing":this.run();break;case"paused":this.stop();break;case"over":this.stop();break;case"default":default:this.stop();break}}init(){this.createWall(),this.createBall(),this.createBaffle(),this.createItems(),this.contactMaterial()}initEvent(){this.handlePostStep=this.handlePostStep.bind(this),this.world.addEventListener("postStep",this.handlePostStep)}handlePostStep(){this.world.contacts.forEach(t=>{const e=t.bi,n=t.bj;let s=this.getContactItemIndex(e,n);if(s=s===-1?this.getContactItemIndex(n,e):s,s!==-1){const r=this.ballBody===e?n:e;this.toBeRemoveItem=[s,r]}})}getContactItemIndex(t,e){return t!==this.ballBody?-1:this.itemsBody.findIndex(s=>s===e)}contactMaterial(){const{world:t,ballMaterial:e,itemMaterial:n,wallMaterial:s,baffleMaterial:r}=this;t.addContactMaterial(new nn.ContactMaterial(e,n,{friction:0,restitution:1})),t.addContactMaterial(new nn.ContactMaterial(e,s,{friction:0,restitution:1})),t.addContactMaterial(new nn.ContactMaterial(e,r,{friction:0,restitution:1})),this.ballBody.material=e,this.itemsBody.forEach(a=>{a.material=n}),this.wallBody.forEach(a=>{a.material=s}),this.baffleBody.material=r}start(){this.status="playing"}pause(){this.status="paused"}run(){this.ballBody.velocity.set(vi(this,Yn).x,vi(this,Yn).y,vi(this,Yn).z)}stop(){vi(this,Yn).set(this.ballBody.velocity.x,this.ballBody.velocity.y,this.ballBody.velocity.z),this.ballBody.velocity.set(0,0,0)}restart(){this.stop(),this.items.forEach(e=>{this.layout.scene.remove(e)}),this.itemsBody.forEach(e=>{this.world.remove(e)}),this.items.length=0,this.itemsBody.length=0,this.createItems(),$r(this,Yn,new it(10,0,-10)),this.ball.position.set(this.opts.cx-.5,0,this.opts.cz+this.opts.height/2-1),this.ballBody.position.set(this.opts.cx-.5,0,this.opts.cz+this.opts.height/2-1);const t=this.itemMaterial;this.itemsBody.forEach(e=>{e.material=t}),this.baffle.position.x=0,this.baffleBody.position.x=0,this.status="playing"}moveBaffle(t){if(!(!this.baffleBody||this.status!=="playing"))switch(t){case"left":this.baffleBody.position.x=Math.max(-this.opts.width/2+3,this.baffleBody.position.x-1);break;case"right":this.baffleBody.position.x=Math.min(this.opts.width/2-3,this.baffleBody.position.x+1);break}}syncPhysicsToGraphics(){this.ball.position.copy(this.ballBody.position),this.baffle.position.copy(this.baffleBody.position),this.wall.forEach((t,e)=>{t.position.copy(this.wallBody[e].position)}),this.items.forEach((t,e)=>{t.position.copy(this.itemsBody[e].position)})}removeItem(){this.toBeRemoveItem[0]!==-1&&this.toBeRemoveItem[1]&&(this.layout.scene.remove(this.items[this.toBeRemoveItem[0]]),this.items.splice(this.toBeRemoveItem[0],1),this.itemsBody.splice(this.toBeRemoveItem[0],1),this.world.remove(this.toBeRemoveItem[1]),this.toBeRemoveItem=[-1,void 0])}check(){if(this.ball&&this.ball.position.z>this.opts.height/2){this.status="over";return}this.items.length===0&&(this.status="win")}animate(){this.layout.controls.update(),this.status==="playing"&&(this.world.step(1/60),this.syncPhysicsToGraphics(),this.removeItem(),this.check(),this.ball&&(this.ball.rotation.x+=.01,this.ball.rotation.y+=.01,this.ball.rotation.z+=.01)),this.render()}render(){this.layout.renderer.render(this.layout.scene,this.layout.camera)}createWall(){const{width:t,height:e,cx:n,cz:s}=this.opts,{mesh:r,body:a}=this.boxCtor.createBox({width:t,height:1,depth:1,position:new it(n,0,s-e/2),materials:vn.createMaterials(["minecraft/grass_dirt.png","minecraft/grass_dirt.png","minecraft/grass.png","minecraft/dirt.png","minecraft/grass_dirt.png","minecraft/grass_dirt.png"],{wrapS:!0,wrapT:!0,repeat:{x:t,y:1}})}),{mesh:o,body:c}=this.boxCtor.createBox({width:1,height:1,depth:e,position:new it(n-t/2+.5,0,s+.5),materials:vn.createMaterials(["minecraft/grass_dirt.png","minecraft/grass_dirt.png","minecraft/grass.png","minecraft/dirt.png","minecraft/grass_dirt.png","minecraft/grass_dirt.png"],{wrapS:!0,wrapT:!0,repeat:{x:1,y:e}})}),{mesh:u,body:h}=this.boxCtor.createBox({width:1,height:1,depth:e,position:new it(n+t/2-.5,0,s+.5),materials:vn.createMaterials(["minecraft/grass_dirt.png","minecraft/grass_dirt.png","minecraft/grass.png","minecraft/dirt.png","minecraft/grass_dirt.png","minecraft/grass_dirt.png"],{wrapS:!0,wrapT:!0,repeat:{x:1,y:e}})});this.wall.push(r,o,u),this.wallBody.push(a,c,h)}createBall(){const t=new xn(new Aa(.5,32,32),new Ta({map:new ul().load(vn.resolvePath("sprite.png"))}));t.position.set(this.opts.cx-.5,0,this.opts.cz+this.opts.height/2-1),this.layout.scene.add(t),this.ball=t,this.ballBody=new nn.Body({mass:1,position:new nn.Vec3(t.position.x,t.position.y,t.position.z),shape:new nn.Sphere(.5)}),this.world.addBody(this.ballBody)}createBaffle(){const{height:t,cx:e,cz:n}=this.opts,s=vn.createMaterials(["minecraft/grass_dirt.png","minecraft/grass_dirt.png","minecraft/grass.png","minecraft/dirt.png","minecraft/grass_dirt.png","minecraft/grass_dirt.png"],{wrapS:!0,wrapT:!0,repeat:{x:4,y:1}}),{mesh:r,body:a}=this.boxCtor.setOptions({width:4,height:1,depth:1,position:new it(e,0,n+t/2),materials:s}).createBox();this.baffle=r,this.baffleBody=a}createItems(){const{width:t,height:e}=this.opts;this.boxCtor.setOptions({width:1,height:1,depth:1,position:new it(0,0,0),materials:vn.createMaterial("crate.gif")});for(let n=0;n<(e-2)/2;n++)for(let s=0;s<t-2;s++){const{mesh:r,body:a}=this.boxCtor.createBox({position:new it(s-t/2+1.5,0,n-e/2+1)});this.items.push(r),this.itemsBody.push(a)}}}or=new WeakMap,Yn=new WeakMap;const Uo={type:"change"},Pa={type:"start"},xl={type:"end"},Nr=new el,Fo=new Xn,rm=Math.cos(70*Cc.DEG2RAD),ke=new it,sn=2*Math.PI,Ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rs=1e-6;class sm extends _h{constructor(t,e=null){super(t,e),this.state=Ue.NONE,this.enabled=!0,this.target=new it,this.cursor=new it,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new it,this._lastQuaternion=new pi,this._lastTargetPosition=new it,this._quat=new pi().setFromUnitVectors(t.up,new it(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oo,this._sphericalDelta=new oo,this._scale=1,this._panOffset=new it,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new it,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=om.bind(this),this._onPointerDown=am.bind(this),this._onPointerUp=lm.bind(this),this._onContextMenu=mm.bind(this),this._onMouseWheel=um.bind(this),this._onKeyDown=fm.bind(this),this._onTouchStart=dm.bind(this),this._onTouchMove=pm.bind(this),this._onMouseDown=cm.bind(this),this._onMouseMove=hm.bind(this),this._interceptControlDown=vm.bind(this),this._interceptControlUp=gm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uo),this.update(),this.state=Ue.NONE}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===Ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ke.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new it(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const u=new it(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Nr.origin.copy(this.object.position),Nr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nr.direction))<rm?this.object.lookAt(this.target):(Fo.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nr.intersectPlane(Fo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rs||this._lastTargetPosition.distanceToSquared(this.target)>Rs?(this.dispatchEvent(Uo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ke.copy(s).sub(this.target);let r=ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Me,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function am(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function om(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function lm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xl),this.state=Ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function cm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ue.DOLLY;break;case Ni.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}break;case Ni.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Pa)}function hm(i){switch(this.state){case Ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function um(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ue.NONE||(i.preventDefault(),this.dispatchEvent(Pa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xl))}function fm(i){this.enabled!==!1&&this._handleKeyDown(i)}function dm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ue.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ue.TOUCH_PAN;break;default:this.state=Ue.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ue.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ue.TOUCH_DOLLY_ROTATE;break;default:this.state=Ue.NONE}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Pa)}function pm(i){switch(this._trackPointer(i),this.state){case Ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ue.NONE}}function mm(i){this.enabled!==!1&&i.preventDefault()}function vm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gr,yl,Wr,Ml,Xr,El,qr,Sl;class _m{constructor(t=document.body,e={}){Jn(this,Gr);Jn(this,Wr);Jn(this,Xr);Jn(this,qr);Oe(this,"scene");Oe(this,"renderer");Oe(this,"camera");Oe(this,"controls");Oe(this,"width");Oe(this,"height");Oe(this,"el");var s,r;const n=typeof t=="string"?document.querySelector(t):t;if(!n||!("innerHTML"in n))throw new Error("el must be a HTMLElement");this.el=n,this.width=(s=e.width)!=null?s:n.offsetWidth,this.height=(r=e.height)!=null?r:n.offsetHeight,this.scene=new rh,this.renderer=new nm({antialias:!0}),this.camera=new hn(25,this.width/this.height,1,1e3),this.controls=new sm(this.camera,this.renderer.domElement),this.init(),this.mount()}init(){this.scene.background=new Re(13421772),this.scene.fog=new wa(13421772,.002),Zi(this,Gr,yl).call(this),Zi(this,Wr,Ml).call(this),Zi(this,Xr,El).call(this),Zi(this,qr,Sl).call(this),new ResizeObserver(e=>{for(const n of e)n.target===this.el&&this.onWindowResize(n.contentRect.width,n.contentRect.height)}).observe(this.el)}mount(){this.el.appendChild(this.renderer.domElement)}onWindowResize(t,e){this.width=t,this.height=e,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}}Gr=new WeakSet,yl=function(){const t=this.camera;t.position.set(0,0,0),t.lookAt(0,0,0)},Wr=new WeakSet,Ml=function(){const t=this.renderer;t.setPixelRatio(window.devicePixelRatio),t.setSize(this.width,this.height)},Xr=new WeakSet,El=function(){const t=this.controls;t.enableDamping=!0,t.dampingFactor=.05,t.screenSpacePanning=!1,t.minDistance=100,t.maxDistance=500,t.maxPolarAngle=Math.PI/2},qr=new WeakSet,Sl=function(){const t=this.scene,e=new vh(16777215,.5);t.add(e);const n=new ph(16777215,1);n.position.set(10,10,10),t.add(n)};const Mn=window;Mn._on=Mn.addEventListener;Mn._off=Mn.removeEventListener;Mn._emit=(i,t)=>Mn.dispatchEvent(new CustomEvent(i,{detail:t}));Mn._once=(i,t)=>Mn.addEventListener(i,t,{once:!0,capture:!0});const xm=()=>{const i=new im(new _m(".arkanoid"),{width:24,height:32,cx:0,cy:0,cz:0}),t=document.querySelector(".btn-back"),e=document.querySelector(".btn-restart"),n=document.querySelector(".btn-ctrl"),s=document.querySelector(".controls"),r=document.querySelector(".target");if(!t||!e||!n||!r||!s)throw new Error("GG");t.addEventListener("click",()=>{window.location.href="/mini-games"}),e.addEventListener("click",()=>{i.restart()}),n.addEventListener("click",()=>{switch(i.status){case"playing":i.pause();break;case"over":case"win":i.restart();break;case"paused":default:i.start();break}}),Mn.addEventListener("dblclick",u=>{u.preventDefault()}),Mn.addEventListener("keydown",u=>{switch(u.code){case"ArrowLeft":case"KeyA":i.moveBaffle("left");break;case"ArrowRight":case"KeyD":i.moveBaffle("right");break;case"Space":n.click();break}}),Mn._on("status",({detail:u})=>{switch(u){case"playing":n.textContent="\u6E38\u620F\u4E2D";break;case"paused":n.textContent="\u6682\u505C\u4E2D";break;case"over":n.textContent="\u6E38\u620F\u7ED3\u675F";break;case"win":n.textContent="\u6E38\u620F\u80DC\u5229";break;default:n.textContent="\u5F00\u59CB\u6E38\u620F";break}});const a=new Ia(r);a.get("pan").set({threshold:10,direction:Ia.DIRECTION_HORIZONTAL});let o=performance.now(),c=0;a.on("panstart",u=>{u.target.classList.add("active"),o=performance.now(),c=u.center.x}),a.on("panmove",u=>{u.target.style.transform=`translateX(${Math.max(Math.min(u.deltaX,123),-123)}px)`;const h=performance.now();h-o>32&&(c<u.center.x?i.moveBaffle("right"):c>u.center.x&&i.moveBaffle("left"),o=h),c=u.center.x}),a.on("panend",u=>{u.target.classList.remove("active"),u.target.style.transform="translateX(0)"})};window.addEventListener("DOMContentLoaded",xm);
