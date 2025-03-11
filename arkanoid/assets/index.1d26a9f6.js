var pl=Object.defineProperty;var ml=(i,t,e)=>t in i?pl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Pe=(i,t,e)=>(ml(i,typeof t!="symbol"?t+"":t,e),e),kr=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var oi=(i,t,e)=>(kr(i,t,"read from private field"),e?e.call(i):t.get(i)),Wn=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},Gr=(i,t,e,n)=>(kr(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e);var zi=(i,t,e)=>(kr(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="174",bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vl=0,Ea=1,gl=2,Ro=1,_l=2,En=3,Vn=0,Ke=1,wn=2,On=0,Ti=1,wa=2,ba=3,Ta=4,xl=5,Jn=100,yl=101,Ml=102,Sl=103,El=104,wl=200,bl=201,Tl=202,Al=203,Ms=204,Ss=205,Rl=206,Cl=207,Pl=208,Ll=209,Dl=210,Il=211,Nl=212,Ul=213,Fl=214,Es=0,ws=1,bs=2,Ci=3,Ts=4,As=5,Rs=6,Cs=7,Co=0,Bl=1,Ol=2,zn=0,zl=1,Vl=2,Hl=3,kl=4,Gl=5,Wl=6,Xl=7,Po=300,Pi=301,Li=302,Ps=303,Ls=304,Or=306,Zi=1e3,ei=1001,Ds=1002,un=1003,ql=1004,nr=1005,fn=1006,Wr=1007,ni=1008,Rn=1009,Lo=1010,Do=1011,Ki=1012,oa=1013,ii=1014,bn=1015,Ji=1016,la=1017,ca=1018,Di=1020,Io=35902,No=1021,Uo=1022,cn=1023,Fo=1024,Bo=1025,Ai=1026,Ii=1027,Oo=1028,ha=1029,zo=1030,ua=1031,da=1033,Tr=33776,Ar=33777,Rr=33778,Cr=33779,Is=35840,Ns=35841,Us=35842,Fs=35843,Bs=36196,Os=37492,zs=37496,Vs=37808,Hs=37809,ks=37810,Gs=37811,Ws=37812,Xs=37813,qs=37814,Ys=37815,Zs=37816,Ks=37817,js=37818,$s=37819,Qs=37820,Js=37821,Pr=36492,ta=36494,ea=36495,Vo=36283,na=36284,ia=36285,ra=36286,Yl=3200,Zl=3201,Ho=0,Kl=1,Fn="",nn="srgb",Ni="srgb-linear",Dr="linear",Ee="srgb",li=7680,Aa=519,jl=512,$l=513,Ql=514,ko=515,Jl=516,tc=517,ec=518,nc=519,Ra=35044,Ca="300 es",Tn=2e3,Ir=2001;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pa=1234567;const qi=Math.PI/180,ji=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function fa(i,t){return(i%t+t)%t}function ic(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rc(i,t,e){return i!==t?(e-i)/(t-i):0}function Yi(i,t,e){return(1-e)*i+e*t}function sc(i,t,e,n){return Yi(i,t,1-Math.exp(-e*n))}function ac(i,t=1){return t-Math.abs(fa(i,t*2)-t)}function oc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function lc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hc(i,t){return i+Math.random()*(t-i)}function uc(i){return i*(.5-Math.random())}function dc(i){i!==void 0&&(Pa=i);let t=Pa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fc(i){return i*qi}function pc(i){return i*ji}function mc(i){return(i&i-1)===0&&i!==0}function vc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _c(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),d=r((t+n)/2),h=a((t+n)/2),l=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*l,c*u,o*d);break;case"YZY":i.set(c*u,o*h,c*l,o*d);break;case"ZXZ":i.set(c*l,c*u,o*h,o*d);break;case"XZX":i.set(o*h,c*v,c*p,o*d);break;case"YXY":i.set(c*p,o*h,c*v,o*d);break;case"ZYZ":i.set(c*v,c*p,o*h,o*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xc={DEG2RAD:qi,RAD2DEG:ji,generateUUID:Fi,clamp:ge,euclideanModulo:fa,mapLinear:ic,inverseLerp:rc,lerp:Yi,damp:sc,pingpong:ac,smoothstep:oc,smootherstep:lc,randInt:cc,randFloat:hc,randFloatSpread:uc,seededRandom:dc,degToRad:fc,radToDeg:pc,isPowerOfTwo:mc,ceilPowerOfTwo:vc,floorPowerOfTwo:gc,setQuaternionFromProperEuler:_c,normalize:ke,denormalize:Si};class ue{constructor(t=0,e=0){ue.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,e,n,s,r,a,o,c,d){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,d)}set(t,e,n,s,r,a,o,c,d){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],d=n[1],h=n[4],l=n[7],u=n[2],p=n[5],v=n[8],g=s[0],m=s[3],f=s[6],x=s[1],M=s[4],_=s[7],T=s[2],P=s[5],N=s[8];return r[0]=a*g+o*x+c*T,r[3]=a*m+o*M+c*P,r[6]=a*f+o*_+c*N,r[1]=d*g+h*x+l*T,r[4]=d*m+h*M+l*P,r[7]=d*f+h*_+l*N,r[2]=u*g+p*x+v*T,r[5]=u*m+p*M+v*P,r[8]=u*f+p*_+v*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],d=t[7],h=t[8];return e*a*h-e*o*d-n*r*h+n*o*c+s*r*d-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=h*a-o*d,u=o*c-h*r,p=d*r-a*c,v=e*l+n*u+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(s*d-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=u*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*c-d*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),d=Math.sin(r);return this.set(n*c,n*d,-n*(c*a+d*o)+a+t,-s*d,s*c,-s*(-d*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new de;function Go(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $i(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yc(){const i=$i("canvas");return i.style.display="block",i}const La={};function $n(i){i in La||(La[i]=!0,console.warn(i))}function Mc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ec(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Da=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ia=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wc(){const i={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ee&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ee&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Dr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ni]:{primaries:t,whitePoint:n,transfer:Dr,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const Me=wc();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class bc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=$i("canvas")),ci.width=t.width,ci.height=t.height;const n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$i("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tc=0;class pa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qr(s[a].image)):r.push(qr(s[a]))}else r=qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ac=0;class Xe extends ai{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=ei,s=ei,r=fn,a=ni,o=cn,c=Rn,d=Xe.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Fi(),this.name="",this.source=new pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Ds:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Ds:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Po;Xe.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,d=c[0],h=c[4],l=c[8],u=c[1],p=c[5],v=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(d+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(d+1)/2,_=(p+1)/2,T=(f+1)/2,P=(h+u)/4,N=(l+g)/4,L=(v+m)/4;return M>_&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=P/n,r=N/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=P/s,r=L/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=N/r,s=L/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(l-g)/x,this.z=(u-h)/x,this.w=Math.acos((d+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rc extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends Rc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wo extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cc extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],d=n[s+1],h=n[s+2],l=n[s+3];const u=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==u||d!==p||h!==v){let m=1-o;const f=c*u+d*p+h*v+l*g,x=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const T=Math.sqrt(M),P=Math.atan2(T,f*x);m=Math.sin(m*P)/T,o=Math.sin(o*P)/T}const _=o*x;if(c=c*m+u*_,d=d*m+p*_,h=h*m+v*_,l=l*m+g*_,m===1-o){const T=1/Math.sqrt(c*c+d*d+h*h+l*l);c*=T,d*=T,h*=T,l*=T}}t[e]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],d=n[s+2],h=n[s+3],l=r[a],u=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+h*l+c*p-d*u,t[e+1]=c*v+h*u+d*l-o*p,t[e+2]=d*v+h*p+o*u-c*l,t[e+3]=h*v-o*l-c*u-d*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,d=o(n/2),h=o(s/2),l=o(r/2),u=c(n/2),p=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=u*h*l+d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l-u*p*v;break;case"YXZ":this._x=u*h*l+d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l+u*p*v;break;case"ZXY":this._x=u*h*l-d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l-u*p*v;break;case"ZYX":this._x=u*h*l-d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l+u*p*v;break;case"YZX":this._x=u*h*l+d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l-u*p*v;break;case"XZY":this._x=u*h*l-d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],d=e[2],h=e[6],l=e[10],u=n+o+l;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-d)*p,this._z=(a-s)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+d)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-d)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(a-s)/p,this._x=(r+d)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,d=e._z,h=e._w;return this._x=n*h+a*o+s*d-r*c,this._y=s*h+a*c+r*o-n*d,this._z=r*h+a*d+n*c-s*o,this._w=a*h-n*o-s*c-r*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,o),l=Math.sin((1-e)*h)/d,u=Math.sin(e*h)/d;return this._w=a*l+this._w*u,this._x=n*l+this._x*u,this._y=s*l+this._y*u,this._z=r*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,d=2*(a*s-o*n),h=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+c*d+a*l-o*h,this.y=n+c*h+o*d-r*l,this.z=s+c*l+r*h-a*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new $,Na=new si;class tr{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),rr.subVectors(this.max,Vi),hi.subVectors(t.a,Vi),ui.subVectors(t.b,Vi),di.subVectors(t.c,Vi),Cn.subVectors(ui,hi),Pn.subVectors(di,ui),Xn.subVectors(hi,di);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Xn.z,Xn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Xn.z,0,-Xn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Xn.y,Xn.x,0];return!Zr(e,hi,ui,di,rr)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,hi,ui,di,rr))?!1:(sr.crossVectors(Cn,Pn),e=[sr.x,sr.y,sr.z],Zr(e,hi,ui,di,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new $,new $,new $,new $,new $,new $,new $,new $],rn=new $,ir=new tr,hi=new $,ui=new $,di=new $,Cn=new $,Pn=new $,Xn=new $,Vi=new $,rr=new $,sr=new $,qn=new $;function Zr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qn.fromArray(i,r);const o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),c=t.dot(qn),d=e.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>o)return!1}return!0}const Pc=new tr,Hi=new $,Kr=new $;class ma{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hi.subVectors(t,this.center);const e=Hi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hi.copy(t.center).add(Kr)),this.expandByPoint(Hi.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new $,jr=new $,ar=new $,Ln=new $,$r=new $,or=new $,Qr=new $;class Xo{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jr.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(jr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ar),o=Ln.dot(this.direction),c=-Ln.dot(ar),d=Ln.lengthSq(),h=Math.abs(1-a*a);let l,u,p,v;if(h>0)if(l=a*c-o,u=a*o-c,v=r*h,l>=0)if(u>=-v)if(u<=v){const g=1/h;l*=g,u*=g,p=l*(l+a*u+2*o)+u*(a*l+u+2*c)+d}else u=r,l=Math.max(0,-(a*u+o)),p=-l*l+u*(u+2*c)+d;else u=-r,l=Math.max(0,-(a*u+o)),p=-l*l+u*(u+2*c)+d;else u<=-v?(l=Math.max(0,-(-a*r+o)),u=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+u*(u+2*c)+d):u<=v?(l=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+d):(l=Math.max(0,-(a*r+o)),u=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+u*(u+2*c)+d);else u=a>0?-r:r,l=Math.max(0,-(a*u+o)),p=-l*l+u*(u+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(jr).addScaledVector(ar,u),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const d=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,u=this.origin;return d>=0?(n=(t.min.x-u.x)*d,s=(t.max.x-u.x)*d):(n=(t.max.x-u.x)*d,s=(t.min.x-u.x)*d),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-u.z)*l,c=(t.max.z-u.z)*l):(o=(t.max.z-u.z)*l,c=(t.min.z-u.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){$r.subVectors(e,t),or.subVectors(n,t),Qr.crossVectors($r,or);let a=this.direction.dot(Qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,t);const c=o*this.direction.dot(or.crossVectors(Ln,or));if(c<0)return null;const d=o*this.direction.dot($r.cross(Ln));if(d<0||c+d>a)return null;const h=-o*Ln.dot(Qr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,e,n,s,r,a,o,c,d,h,l,u,p,v,g,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,d,h,l,u,p,v,g,m)}set(t,e,n,s,r,a,o,c,d,h,l,u,p,v,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=d,f[6]=h,f[10]=l,f[14]=u,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),d=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=d,e[1]=p+v*d,e[5]=u-g*d,e[9]=-o*c,e[2]=g-u*d,e[6]=v+p*d,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*l,v=d*h,g=d*l;e[0]=u+g*o,e[4]=v*o-p,e[8]=a*d,e[1]=a*l,e[5]=a*h,e[9]=-o,e[2]=p*o-v,e[6]=g+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*l,v=d*h,g=d*l;e[0]=u-g*o,e[4]=-a*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*d,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*d-p,e[8]=u*d+g,e[1]=c*l,e[5]=g*d+u,e[9]=p*d-v,e[2]=-d,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*d,v=o*c,g=o*d;e[0]=c*h,e[4]=g-u*l,e[8]=v*l+p,e[1]=l,e[5]=a*h,e[9]=-o*h,e[2]=-d*h,e[6]=p*l+v,e[10]=u-g*l}else if(t.order==="XZY"){const u=a*c,p=a*d,v=o*c,g=o*d;e[0]=c*h,e[4]=-l,e[8]=d*h,e[1]=u*l+g,e[5]=a*h,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*h,e[10]=g*l+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lc,t,Dc)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Dn.crossVectors(n,Qe),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Dn.crossVectors(n,Qe)),Dn.normalize(),lr.crossVectors(Qe,Dn),s[0]=Dn.x,s[4]=lr.x,s[8]=Qe.x,s[1]=Dn.y,s[5]=lr.y,s[9]=Qe.y,s[2]=Dn.z,s[6]=lr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],d=n[12],h=n[1],l=n[5],u=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],x=n[3],M=n[7],_=n[11],T=n[15],P=s[0],N=s[4],L=s[8],E=s[12],y=s[1],b=s[5],B=s[9],U=s[13],W=s[2],X=s[6],et=s[10],O=s[14],D=s[3],tt=s[7],Q=s[11],F=s[15];return r[0]=a*P+o*y+c*W+d*D,r[4]=a*N+o*b+c*X+d*tt,r[8]=a*L+o*B+c*et+d*Q,r[12]=a*E+o*U+c*O+d*F,r[1]=h*P+l*y+u*W+p*D,r[5]=h*N+l*b+u*X+p*tt,r[9]=h*L+l*B+u*et+p*Q,r[13]=h*E+l*U+u*O+p*F,r[2]=v*P+g*y+m*W+f*D,r[6]=v*N+g*b+m*X+f*tt,r[10]=v*L+g*B+m*et+f*Q,r[14]=v*E+g*U+m*O+f*F,r[3]=x*P+M*y+_*W+T*D,r[7]=x*N+M*b+_*X+T*tt,r[11]=x*L+M*B+_*et+T*Q,r[15]=x*E+M*U+_*O+T*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],d=t[13],h=t[2],l=t[6],u=t[10],p=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+r*c*l-s*d*l-r*o*u+n*d*u+s*o*p-n*c*p)+g*(+e*c*p-e*d*u+r*a*u-s*a*p+s*d*h-r*c*h)+m*(+e*d*l-e*o*p-r*a*l+n*a*p+r*o*h-n*d*h)+f*(-s*o*h-e*c*l+e*o*u+s*a*l-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=t[9],u=t[10],p=t[11],v=t[12],g=t[13],m=t[14],f=t[15],x=l*m*d-g*u*d+g*c*p-o*m*p-l*c*f+o*u*f,M=v*u*d-h*m*d-v*c*p+a*m*p+h*c*f-a*u*f,_=h*g*d-v*l*d+v*o*p-a*g*p-h*o*f+a*l*f,T=v*l*c-h*g*c-v*o*u+a*g*u+h*o*m-a*l*m,P=e*x+n*M+s*_+r*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return t[0]=x*N,t[1]=(g*u*r-l*m*r-g*s*p+n*m*p+l*s*f-n*u*f)*N,t[2]=(o*m*r-g*c*r+g*s*d-n*m*d-o*s*f+n*c*f)*N,t[3]=(l*c*r-o*u*r-l*s*d+n*u*d+o*s*p-n*c*p)*N,t[4]=M*N,t[5]=(h*m*r-v*u*r+v*s*p-e*m*p-h*s*f+e*u*f)*N,t[6]=(v*c*r-a*m*r-v*s*d+e*m*d+a*s*f-e*c*f)*N,t[7]=(a*u*r-h*c*r+h*s*d-e*u*d-a*s*p+e*c*p)*N,t[8]=_*N,t[9]=(v*l*r-h*g*r-v*n*p+e*g*p+h*n*f-e*l*f)*N,t[10]=(a*g*r-v*o*r+v*n*d-e*g*d-a*n*f+e*o*f)*N,t[11]=(h*o*r-a*l*r-h*n*d+e*l*d+a*n*p-e*o*p)*N,t[12]=T*N,t[13]=(h*g*s-v*l*s+v*n*u-e*g*u-h*n*m+e*l*m)*N,t[14]=(v*o*s-a*g*s-v*n*c+e*g*c+a*n*m-e*o*m)*N,t[15]=(a*l*s-h*o*s+h*n*c-e*l*c-a*n*u+e*o*u)*N,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,d=r*a,h=r*o;return this.set(d*a+n,d*o-s*c,d*c+s*o,0,d*o+s*c,h*o+n,h*c-s*a,0,d*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,d=r+r,h=a+a,l=o+o,u=r*d,p=r*h,v=r*l,g=a*h,m=a*l,f=o*l,x=c*d,M=c*h,_=c*l,T=n.x,P=n.y,N=n.z;return s[0]=(1-(g+f))*T,s[1]=(p+_)*T,s[2]=(v-M)*T,s[3]=0,s[4]=(p-_)*P,s[5]=(1-(u+f))*P,s[6]=(m+x)*P,s[7]=0,s[8]=(v+M)*N,s[9]=(m-x)*N,s[10]=(1-(u+g))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=fi.set(s[0],s[1],s[2]).length();const a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const d=1/r,h=1/a,l=1/o;return sn.elements[0]*=d,sn.elements[1]*=d,sn.elements[2]*=d,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=l,sn.elements[9]*=l,sn.elements[10]*=l,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Tn){const c=this.elements,d=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),u=(n+s)/(n-s);let p,v;if(o===Tn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ir)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Tn){const c=this.elements,d=1/(e-t),h=1/(n-s),l=1/(a-r),u=(e+t)*d,p=(n+s)*h;let v,g;if(o===Tn)v=(a+r)*l,g=-2*l;else if(o===Ir)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fi=new $,sn=new De,Lc=new $(0,0,0),Dc=new $(1,1,1),Dn=new $,lr=new $,Qe=new $,Ua=new De,Fa=new si;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],d=s[5],h=s[9],l=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fa.setFromEuler(this),this.setFromQuaternion(Fa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ic=0;const Ba=new $,pi=new si,yn=new De,cr=new $,ki=new $,Nc=new $,Uc=new si,Oa=new $(1,0,0),za=new $(0,1,0),Va=new $(0,0,1),Ha={type:"added"},Fc={type:"removed"},mi={type:"childadded",child:null},Jr={type:"childremoved",child:null};class je extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const t=new $,e=new vn,n=new si,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new de}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Oa,t)}rotateY(t){return this.rotateOnAxis(za,t)}rotateZ(t){return this.rotateOnAxis(Va,t)}translateOnAxis(t,e){return Ba.copy(t).applyQuaternion(this.quaternion),this.position.add(Ba.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oa,t)}translateY(t){return this.translateOnAxis(za,t)}translateZ(t){return this.translateOnAxis(Va,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ki,cr,this.up):yn.lookAt(cr,ki,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(yn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ha),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fc),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ha),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Nc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Uc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const l=c[d];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),d=a(t.textures),h=a(t.images),l=a(t.shapes),u=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}je.DEFAULT_UP=new $(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new $,Mn=new $,ts=new $,Sn=new $,vi=new $,gi=new $,ka=new $,es=new $,ns=new $,is=new $,rs=new be,ss=new be,as=new be;class ln{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),Mn.subVectors(n,e),ts.subVectors(t,e);const a=an.dot(an),o=an.dot(Mn),c=an.dot(ts),d=Mn.dot(Mn),h=Mn.dot(ts),l=a*d-o*o;if(l===0)return r.set(0,0,0),null;const u=1/l,p=(d*c-o*h)*u,v=(a*h-o*c)*u;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(a,Sn.y),c.addScaledVector(o,Sn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return rs.setScalar(0),ss.setScalar(0),as.setScalar(0),rs.fromBufferAttribute(t,e),ss.fromBufferAttribute(t,n),as.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(rs,r.x),a.addScaledVector(ss,r.y),a.addScaledVector(as,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),Mn.subVectors(t,e),an.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),an.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;vi.subVectors(s,n),gi.subVectors(r,n),es.subVectors(t,n);const c=vi.dot(es),d=gi.dot(es);if(c<=0&&d<=0)return e.copy(n);ns.subVectors(t,s);const h=vi.dot(ns),l=gi.dot(ns);if(h>=0&&l<=h)return e.copy(s);const u=c*l-h*d;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(vi,a);is.subVectors(t,r);const p=vi.dot(is),v=gi.dot(is);if(v>=0&&p<=v)return e.copy(r);const g=p*d-c*v;if(g<=0&&d>=0&&v<=0)return o=d/(d-v),e.copy(n).addScaledVector(gi,o);const m=h*v-p*l;if(m<=0&&l-h>=0&&p-v>=0)return ka.subVectors(r,s),o=(l-h)/(l-h+(p-v)),e.copy(s).addScaledVector(ka,o);const f=1/(m+g+u);return a=g*f,o=u*f,e.copy(n).addScaledVector(vi,a).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},hr={h:0,s:0,l:0};function os(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ye{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=fa(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=os(a,r,t+1/3),this.g=os(a,r,t),this.b=os(a,r,t-1/3)}return Me.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Yo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Me.fromWorkingColorSpace(Ve.copy(this),t),Math.round(ge(Ve.r*255,0,255))*65536+Math.round(ge(Ve.g*255,0,255))*256+Math.round(ge(Ve.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,d;const h=(o+a)/2;if(o===a)c=0,d=0;else{const l=a-o;switch(d=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=d,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=nn){Me.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(hr);const n=Yi(In.h,hr.h,e),s=Yi(In.s,hr.s,e),r=Yi(In.l,hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new ye;ye.NAMES=Yo;let Bc=0;class er extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Ti,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ms,this.blendDst=Ss,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ms&&(n.blendSrc=this.blendSrc),this.blendDst!==Ss&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class va extends er{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new $,ur=new ue;let Oc=0;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ra&&(t.usage=this.usage),t}}class Zo extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ko extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class mn extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zc=0;const en=new De,ls=new je,_i=new $,Je=new tr,Gi=new tr,Oe=new $;class kn extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Go(t)?Ko:Zo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return ls.lookAt(t),ls.updateMatrix(),this.applyMatrix4(ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(Je.min,Gi.min),Je.expandByPoint(Oe),Oe.addVectors(Je.max,Gi.max),Je.expandByPoint(Oe)):(Je.expandByPoint(Gi.min),Je.expandByPoint(Gi.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)Oe.fromBufferAttribute(o,d),c&&(_i.fromBufferAttribute(t,d),Oe.add(_i)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new $,c[L]=new $;const d=new $,h=new $,l=new $,u=new ue,p=new ue,v=new ue,g=new $,m=new $;function f(L,E,y){d.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),l.fromBufferAttribute(n,y),u.fromBufferAttribute(r,L),p.fromBufferAttribute(r,E),v.fromBufferAttribute(r,y),h.sub(d),l.sub(d),p.sub(u),v.sub(u);const b=1/(p.x*v.y-v.x*p.y);!isFinite(b)||(g.copy(h).multiplyScalar(v.y).addScaledVector(l,-p.y).multiplyScalar(b),m.copy(l).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(b),o[L].add(g),o[E].add(g),o[y].add(g),c[L].add(m),c[E].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,E=x.length;L<E;++L){const y=x[L],b=y.start,B=y.count;for(let U=b,W=b+B;U<W;U+=3)f(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new $,_=new $,T=new $,P=new $;function N(L){T.fromBufferAttribute(s,L),P.copy(T);const E=o[L];M.copy(E),M.sub(T.multiplyScalar(T.dot(E))).normalize(),_.crossVectors(P,E);const b=_.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,b)}for(let L=0,E=x.length;L<E;++L){const y=x[L],b=y.start,B=y.count;for(let U=b,W=b+B;U<W;U+=3)N(t.getX(U+0)),N(t.getX(U+1)),N(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new $,r=new $,a=new $,o=new $,c=new $,d=new $,h=new $,l=new $;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),o.add(h),c.add(h),d.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){const d=o.array,h=o.itemSize,l=o.normalized,u=new d.constructor(c.length*h);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let f=0;f<h;f++)u[v++]=d[p++]}return new pn(u,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new kn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],d=t(c,n);e.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const c=[],d=r[o];for(let h=0,l=d.length;h<l;h++){const u=d[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const d=a[o];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(t[d]=c[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const d=n[c];t.data.attributes[c]=d.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let l=0,u=d.length;l<u;l++){const p=d[l];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const d in s){const h=s[d];this.setAttribute(d,h.clone(e))}const r=t.morphAttributes;for(const d in r){const h=[],l=r[d];for(let u=0,p=l.length;u<p;u++)h.push(l[u].clone(e));this.morphAttributes[d]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let d=0,h=a.length;d<h;d++){const l=a[d];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new De,Yn=new Xo,dr=new ma,Wa=new $,fr=new $,pr=new $,mr=new $,cs=new $,vr=new $,Xa=new $,gr=new $;class hn extends je{constructor(t=new kn,e=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const h=o[c],l=r[c];h!==0&&(cs.fromBufferAttribute(l,t),a?vr.addScaledVector(cs,h):vr.addScaledVector(cs.sub(e),h))}e.add(vr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(dr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(dr,Wa)===null||Yn.origin.distanceToSquared(Wa)>(t.far-t.near)**2))&&(Ga.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,T=M;_<T;_+=3){const P=o.getX(_),N=o.getX(_+1),L=o.getX(_+2);s=_r(this,f,t,n,d,h,l,P,N,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const x=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=_r(this,a,t,n,d,h,l,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,T=M;_<T;_+=3){const P=_,N=_+1,L=_+2;s=_r(this,f,t,n,d,h,l,P,N,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const x=m,M=m+1,_=m+2;s=_r(this,a,t,n,d,h,l,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Vc(i,t,e,n,s,r,a,o){let c;if(t.side===Ke?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Vn,o),c===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(gr);return d<e.near||d>e.far?null:{distance:d,point:gr.clone(),object:i}}function _r(i,t,e,n,s,r,a,o,c,d){i.getVertexPosition(o,fr),i.getVertexPosition(c,pr),i.getVertexPosition(d,mr);const h=Vc(i,t,e,n,fr,pr,mr,Xa);if(h){const l=new $;ln.getBarycoord(Xa,fr,pr,mr,l),s&&(h.uv=ln.getInterpolatedAttribute(s,o,c,d,l,new ue)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,c,d,l,new ue)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,c,d,l,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:d,normal:new $,materialIndex:0};ln.getNormal(fr,pr,mr,u.normal),h.face=u,h.barycoord=l}return h}class Bi extends kn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],d=[],h=[],l=[];let u=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new mn(d,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(l,2));function v(g,m,f,x,M,_,T,P,N,L,E){const y=_/N,b=T/L,B=_/2,U=T/2,W=P/2,X=N+1,et=L+1;let O=0,D=0;const tt=new $;for(let Q=0;Q<et;Q++){const F=Q*b-U;for(let J=0;J<X;J++){const z=J*y-B;tt[g]=z*x,tt[m]=F*M,tt[f]=W,d.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[f]=P>0?1:-1,h.push(tt.x,tt.y,tt.z),l.push(J/N),l.push(1-Q/L),O+=1}}for(let Q=0;Q<L;Q++)for(let F=0;F<N;F++){const J=u+F+X*Q,z=u+F+X*(Q+1),A=u+(F+1)+X*(Q+1),R=u+(F+1)+X*Q;c.push(J,z,R),c.push(z,A,R),D+=6}o.addGroup(p,D,E),p+=D,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Ui(i[e]);for(const s in n)t[s]=n[s]}return t}function Hc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const kc={clone:Ui,merge:Ge};var Gc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends er{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gc,this.fragmentShader=Wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Hc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $o extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new $,qa=new ue,Ya=new ue;class tn extends $o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,qa,Ya),e.subVectors(Ya,qa)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/d,s*=a.width/c,n*=a.height/d}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,yi=1;class Xc extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(xi,yi,t,e);s.layers=this.layers,this.add(s);const r=new tn(xi,yi,t,e);r.layers=this.layers,this.add(r);const a=new tn(xi,yi,t,e);a.layers=this.layers,this.add(a);const o=new tn(xi,yi,t,e);o.layers=this.layers,this.add(o);const c=new tn(xi,yi,t,e);c.layers=this.layers,this.add(c);const d=new tn(xi,yi,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const d of e)this.remove(d);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,d,h]=this.children,l=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,d),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,u,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Qo extends Xe{constructor(t,e,n,s,r,a,o,c,d,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,s,r,a,o,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qc extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bi(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:On});r.uniforms.tEquirect.value=e;const a=new hn(s,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=fn),new Xc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class xr extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yc={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(d,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=d.joints["index-finger-tip"],l=d.joints["thumb-tip"],u=h.position.distanceTo(l.position),p=.02,v=.005;d.inputState.pinching&&u>p+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&u<=p-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yc)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ga{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=e}clone(){return new ga(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zc extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const us=new $,Kc=new $,jc=new de;class Un{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=us.subVectors(n,e).cross(Kc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(us),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jc.getNormalMatrix(t),s=this.coplanarPoint(us).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new ma,yr=new $;class _a{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],d=s[4],h=s[5],l=s[6],u=s[7],p=s[8],v=s[9],g=s[10],m=s[11],f=s[12],x=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,u-d,m-p,_-f).normalize(),n[1].setComponents(c+r,u+d,m+p,_+f).normalize(),n[2].setComponents(c+a,u+h,m+v,_+x).normalize(),n[3].setComponents(c-a,u-h,m-v,_-x).normalize(),n[4].setComponents(c-o,u-l,m-g,_-M).normalize(),e===Tn)n[5].setComponents(c+o,u+l,m+g,_+M).normalize();else if(e===Ir)n[5].setComponents(o,l,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jo extends Xe{constructor(t,e,n,s,r,a,o,c,d,h=Ai){if(h!==Ai&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=ii),n===void 0&&h===Ii&&(n=Di),super(null,s,r,a,o,c,h,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:un,this.minFilter=c!==void 0?c:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zr extends kn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),d=o+1,h=c+1,l=t/o,u=e/c,p=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const x=f*u-a;for(let M=0;M<d;M++){const _=M*l-r;v.push(_,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const M=x+d*f,_=x+d*(f+1),T=x+1+d*(f+1),P=x+1+d*f;p.push(M,_,P),p.push(_,T,P)}this.setIndex(p),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.widthSegments,t.heightSegments)}}class xa extends kn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let d=0;const h=[],l=new $,u=new $,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const x=[],M=f/n;let _=0;f===0&&a===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const P=T/e;l.x=-t*Math.cos(s+P*r)*Math.sin(a+M*o),l.y=t*Math.cos(a+M*o),l.z=t*Math.sin(s+P*r)*Math.sin(a+M*o),v.push(l.x,l.y,l.z),u.copy(l).normalize(),g.push(u.x,u.y,u.z),m.push(P+_,1-M),x.push(d++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const M=h[f][x+1],_=h[f][x],T=h[f+1][x],P=h[f+1][x+1];(f!==0||a>0)&&p.push(M,_,P),(f!==n-1||c<Math.PI)&&p.push(_,T,P)}this.setIndex(p),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tl extends er{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $c extends er{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qc extends er{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Za={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Jc{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return d.push(h,l),this},this.removeHandler=function(h){const l=d.indexOf(h);return l!==-1&&d.splice(l,2),this},this.getHandler=function(h){for(let l=0,u=d.length;l<u;l+=2){const p=d[l],v=d[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const th=new Jc;class ya{constructor(t){this.manager=t!==void 0?t:th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ya.DEFAULT_MATERIAL_NAME="__DEFAULT";class eh extends ya{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Za.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=$i("img");function c(){h(),Za.add(t,this),e&&e(this),r.manager.itemEnd(t)}function d(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class el extends ya{constructor(t){super(t)}load(t,e,n,s){const r=new Xe,a=new eh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class nl extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ds=new De,Ka=new $,ja=new $;class nh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ka.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ka),ja.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ja),e.updateMatrixWorld(),ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ds)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $a=new De,Wi=new $,fs=new $;class ih extends nh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wi),fs.copy(n.position),fs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fs),n.updateMatrixWorld(),s.makeTranslation(-Wi.x,-Wi.y,-Wi.z),$a.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a)}}class rh extends nl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sh extends $o{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ah extends nl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class oh extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Qa{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lh extends ai{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ja(i,t,e,n){const s=ch(n);switch(e){case No:return i*t;case Fo:return i*t;case Bo:return i*t*2;case Oo:return i*t/s.components*s.byteLength;case ha:return i*t/s.components*s.byteLength;case zo:return i*t*2/s.components*s.byteLength;case ua:return i*t*2/s.components*s.byteLength;case Uo:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case da:return i*t*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ns:case Fs:return Math.max(i,16)*Math.max(t,8)/4;case Is:case Us:return Math.max(i,8)*Math.max(t,8)/2;case Bs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ks:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ws:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xs:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ys:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ks:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case js:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $s:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qs:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Js:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pr:case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vo:case na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ia:case ra:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ch(i){switch(i){case Rn:case Lo:return{byteLength:1,components:1};case Ki:case Do:case Ji:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case ii:case oa:case bn:return{byteLength:4,components:1};case Io:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function il(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hh(i){const t=new WeakMap;function e(o,c){const d=o.array,h=o.usage,l=d.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,d,h),o.onUploadCallback();let p;if(d instanceof Float32Array)p=i.FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=i.SHORT;else if(d instanceof Uint32Array)p=i.UNSIGNED_INT;else if(d instanceof Int32Array)p=i.INT;else if(d instanceof Int8Array)p=i.BYTE;else if(d instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,d){const h=c.array,l=c.updateRanges;if(i.bindBuffer(d,o),l.length===0)i.bufferSubData(d,0,h);else{l.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<l.length;p++){const v=l[u],g=l[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++u,l[u]=g)}l.length=u+1;for(let p=0,v=l.length;p<v;p++){const g=l[p];i.bufferSubData(d,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=t.get(o);if(d===void 0)t.set(o,e(o,c));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,c),d.version=o.version}}return{get:s,remove:r,update:a}}var uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dh=`#ifdef USE_ALPHAHASH
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
#endif`,fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gh=`#ifdef USE_AOMAP
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
#endif`,_h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xh=`#ifdef USE_BATCHING
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
#endif`,yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wh=`#ifdef USE_IRIDESCENCE
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
#endif`,bh=`#ifdef USE_BUMPMAP
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nh=`#define PI 3.141592653589793
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
} // validated`,Uh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fh=`vec3 transformedNormal = objectNormal;
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
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",kh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$h=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qh=`#ifdef USE_GRADIENTMAP
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
}`,Jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nu=`uniform bool receiveShadow;
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
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lu=`PhysicalMaterial material;
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
#endif`,cu=`struct PhysicalMaterial {
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
}`,hu=`
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
#endif`,uu=`#if defined( RE_IndirectDiffuse )
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
#endif`,du=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_u=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yu=`#if defined( USE_POINTS_UV )
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
#endif`,Mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Su=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`#ifdef USE_MORPHTARGETS
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
#endif`,Au=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iu=`#ifdef USE_NORMALMAP
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
#endif`,Nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ku=`float getShadowMask() {
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
}`,ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$u=`#ifdef USE_SKINNING
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
#endif`,Qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ju=`#ifdef USE_SKINNING
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
#endif`,td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,id=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
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
#endif`,sd=`#ifdef USE_TRANSMISSION
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
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ud=`uniform sampler2D t2D;
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
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`#include <common>
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
}`,gd=`#if DEPTH_PACKING == 3200
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
}`,_d=`#define DISTANCE
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
}`,xd=`#define DISTANCE
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
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`uniform float scale;
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
}`,Ed=`uniform vec3 diffuse;
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
}`,wd=`#include <common>
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
}`,bd=`uniform vec3 diffuse;
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
}`,Td=`#define LAMBERT
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
}`,Ad=`#define LAMBERT
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
}`,Rd=`#define MATCAP
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
}`,Cd=`#define MATCAP
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
}`,Pd=`#define NORMAL
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
}`,Ld=`#define NORMAL
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
}`,Dd=`#define PHONG
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
}`,Id=`#define PHONG
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
}`,Nd=`#define STANDARD
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
}`,Ud=`#define STANDARD
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
}`,Fd=`#define TOON
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
}`,Bd=`#define TOON
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
}`,Od=`uniform float size;
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
}`,zd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,Hd=`uniform vec3 color;
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
}`,kd=`uniform float rotation;
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
}`,Gd=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:uh,alphahash_pars_fragment:dh,alphamap_fragment:fh,alphamap_pars_fragment:ph,alphatest_fragment:mh,alphatest_pars_fragment:vh,aomap_fragment:gh,aomap_pars_fragment:_h,batching_pars_vertex:xh,batching_vertex:yh,begin_vertex:Mh,beginnormal_vertex:Sh,bsdfs:Eh,iridescence_fragment:wh,bumpmap_pars_fragment:bh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:Ah,clipping_planes_pars_vertex:Rh,clipping_planes_vertex:Ch,color_fragment:Ph,color_pars_fragment:Lh,color_pars_vertex:Dh,color_vertex:Ih,common:Nh,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Fh,displacementmap_pars_vertex:Bh,displacementmap_vertex:Oh,emissivemap_fragment:zh,emissivemap_pars_fragment:Vh,colorspace_fragment:Hh,colorspace_pars_fragment:kh,envmap_fragment:Gh,envmap_common_pars_fragment:Wh,envmap_pars_fragment:Xh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:iu,envmap_vertex:Yh,fog_vertex:Zh,fog_pars_vertex:Kh,fog_fragment:jh,fog_pars_fragment:$h,gradientmap_pars_fragment:Qh,lightmap_pars_fragment:Jh,lights_lambert_fragment:tu,lights_lambert_pars_fragment:eu,lights_pars_begin:nu,lights_toon_fragment:ru,lights_toon_pars_fragment:su,lights_phong_fragment:au,lights_phong_pars_fragment:ou,lights_physical_fragment:lu,lights_physical_pars_fragment:cu,lights_fragment_begin:hu,lights_fragment_maps:uu,lights_fragment_end:du,logdepthbuf_fragment:fu,logdepthbuf_pars_fragment:pu,logdepthbuf_pars_vertex:mu,logdepthbuf_vertex:vu,map_fragment:gu,map_pars_fragment:_u,map_particle_fragment:xu,map_particle_pars_fragment:yu,metalnessmap_fragment:Mu,metalnessmap_pars_fragment:Su,morphinstance_vertex:Eu,morphcolor_vertex:wu,morphnormal_vertex:bu,morphtarget_pars_vertex:Tu,morphtarget_vertex:Au,normal_fragment_begin:Ru,normal_fragment_maps:Cu,normal_pars_fragment:Pu,normal_pars_vertex:Lu,normal_vertex:Du,normalmap_pars_fragment:Iu,clearcoat_normal_fragment_begin:Nu,clearcoat_normal_fragment_maps:Uu,clearcoat_pars_fragment:Fu,iridescence_pars_fragment:Bu,opaque_fragment:Ou,packing:zu,premultiplied_alpha_fragment:Vu,project_vertex:Hu,dithering_fragment:ku,dithering_pars_fragment:Gu,roughnessmap_fragment:Wu,roughnessmap_pars_fragment:Xu,shadowmap_pars_fragment:qu,shadowmap_pars_vertex:Yu,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ku,skinbase_vertex:ju,skinning_pars_vertex:$u,skinning_vertex:Qu,skinnormal_vertex:Ju,specularmap_fragment:td,specularmap_pars_fragment:ed,tonemapping_fragment:nd,tonemapping_pars_fragment:id,transmission_fragment:rd,transmission_pars_fragment:sd,uv_pars_fragment:ad,uv_pars_vertex:od,uv_vertex:ld,worldpos_vertex:cd,background_vert:hd,background_frag:ud,backgroundCube_vert:dd,backgroundCube_frag:fd,cube_vert:pd,cube_frag:md,depth_vert:vd,depth_frag:gd,distanceRGBA_vert:_d,distanceRGBA_frag:xd,equirect_vert:yd,equirect_frag:Md,linedashed_vert:Sd,linedashed_frag:Ed,meshbasic_vert:wd,meshbasic_frag:bd,meshlambert_vert:Td,meshlambert_frag:Ad,meshmatcap_vert:Rd,meshmatcap_frag:Cd,meshnormal_vert:Pd,meshnormal_frag:Ld,meshphong_vert:Dd,meshphong_frag:Id,meshphysical_vert:Nd,meshphysical_frag:Ud,meshtoon_vert:Fd,meshtoon_frag:Bd,points_vert:Od,points_frag:zd,shadow_vert:Vd,shadow_frag:Hd,sprite_vert:kd,sprite_frag:Gd},Ht={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},dn={basic:{uniforms:Ge([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Ge([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Ge([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Ge([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Ge([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ye(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Ge([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Ge([Ht.points,Ht.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Ge([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Ge([Ht.common,Ht.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Ge([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Ge([Ht.sprite,Ht.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Ge([Ht.common,Ht.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Ge([Ht.lights,Ht.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};dn.physical={uniforms:Ge([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Mr={r:0,b:0,g:0},Kn=new vn,Wd=new De;function Xd(i,t,e,n,s,r,a){const o=new ye(0);let c=r===!0?0:1,d,h,l=null,u=0,p=null;function v(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function g(M){let _=!1;const T=v(M);T===null?f(o,c):T&&T.isColor&&(f(T,1),_=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const T=v(_);T&&(T.isCubeTexture||T.mapping===Or)?(h===void 0&&(h=new hn(new Bi(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ui(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,N,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Kn.copy(_.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wd.makeRotationFromEuler(Kn)),h.material.toneMapped=Me.getTransfer(T.colorSpace)!==Ee,(l!==T||u!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=T,u=T.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new hn(new zr(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ui(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=Me.getTransfer(T.colorSpace)!==Ee,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(l!==T||u!==T.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,l=T,u=T.version,p=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function f(M,_){M.getRGB(Mr,jo(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,_,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),c=_,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:g,addToRenderList:m,dispose:x}}function qd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(y,b,B,U,W){let X=!1;const et=l(U,B,b);r!==et&&(r=et,d(r.object)),X=p(y,U,B,W),X&&v(y,U,B,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(y,b,B,U),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function d(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function l(y,b,B){const U=B.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let X=W[b.id];X===void 0&&(X={},W[b.id]=X);let et=X[U];return et===void 0&&(et=u(c()),X[U]=et),et}function u(y){const b=[],B=[],U=[];for(let W=0;W<e;W++)b[W]=0,B[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:U,object:y,attributes:{},index:null}}function p(y,b,B,U){const W=r.attributes,X=b.attributes;let et=0;const O=B.getAttributes();for(const D in O)if(O[D].location>=0){const Q=W[D];let F=X[D];if(F===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(F=y.instanceColor)),Q===void 0||Q.attribute!==F||F&&Q.data!==F.data)return!0;et++}return r.attributesNum!==et||r.index!==U}function v(y,b,B,U){const W={},X=b.attributes;let et=0;const O=B.getAttributes();for(const D in O)if(O[D].location>=0){let Q=X[D];Q===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const F={};F.attribute=Q,Q&&Q.data&&(F.data=Q.data),W[D]=F,et++}r.attributes=W,r.attributesNum=et,r.index=U}function g(){const y=r.newAttributes;for(let b=0,B=y.length;b<B;b++)y[b]=0}function m(y){f(y,0)}function f(y,b){const B=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;B[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),W[y]!==b&&(i.vertexAttribDivisor(y,b),W[y]=b)}function x(){const y=r.newAttributes,b=r.enabledAttributes;for(let B=0,U=b.length;B<U;B++)b[B]!==y[B]&&(i.disableVertexAttribArray(B),b[B]=0)}function M(y,b,B,U,W,X,et){et===!0?i.vertexAttribIPointer(y,b,B,W,X):i.vertexAttribPointer(y,b,B,U,W,X)}function _(y,b,B,U){g();const W=U.attributes,X=B.getAttributes(),et=b.defaultAttributeValues;for(const O in X){const D=X[O];if(D.location>=0){let tt=W[O];if(tt===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){const Q=tt.normalized,F=tt.itemSize,J=t.get(tt);if(J===void 0)continue;const z=J.buffer,A=J.type,R=J.bytesPerElement,H=A===i.INT||A===i.UNSIGNED_INT||tt.gpuType===oa;if(tt.isInterleavedBufferAttribute){const K=tt.data,nt=K.stride,q=tt.offset;if(K.isInstancedInterleavedBuffer){for(let it=0;it<D.locationSize;it++)f(D.location+it,K.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let it=0;it<D.locationSize;it++)m(D.location+it);i.bindBuffer(i.ARRAY_BUFFER,z);for(let it=0;it<D.locationSize;it++)M(D.location+it,F/D.locationSize,A,Q,nt*R,(q+F/D.locationSize*it)*R,H)}else{if(tt.isInstancedBufferAttribute){for(let K=0;K<D.locationSize;K++)f(D.location+K,tt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let K=0;K<D.locationSize;K++)m(D.location+K);i.bindBuffer(i.ARRAY_BUFFER,z);for(let K=0;K<D.locationSize;K++)M(D.location+K,F/D.locationSize,A,Q,F*R,F/D.locationSize*K*R,H)}}else if(et!==void 0){const Q=et[O];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(D.location,Q);break;case 3:i.vertexAttrib3fv(D.location,Q);break;case 4:i.vertexAttrib4fv(D.location,Q);break;default:i.vertexAttrib1fv(D.location,Q)}}}}x()}function T(){L();for(const y in n){const b=n[y];for(const B in b){const U=b[B];for(const W in U)h(U[W].object),delete U[W];delete b[B]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const b=n[y.id];for(const B in b){const U=b[B];for(const W in U)h(U[W].object),delete U[W];delete b[B]}delete n[y.id]}function N(y){for(const b in n){const B=n[b];if(B[y.id]===void 0)continue;const U=B[y.id];for(const W in U)h(U[W].object),delete U[W];delete B[y.id]}}function L(){E(),a=!0,r!==s&&(r=s,d(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Yd(i,t,e){let n;function s(d){n=d}function r(d,h){i.drawArrays(n,d,h),e.update(h,n,1)}function a(d,h,l){l!==0&&(i.drawArraysInstanced(n,d,h,l),e.update(h,n,l))}function o(d,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,l);let p=0;for(let v=0;v<l;v++)p+=h[v];e.update(p,n,1)}function c(d,h,l,u){if(l===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d.length;v++)a(d[v],h[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(n,d,0,h,0,u,0,l);let v=0;for(let g=0;g<l;g++)v+=h[g]*u[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Zd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==cn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const L=N===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Rn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==bn&&!L)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const l=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:l,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:T,maxSamples:P}}function Kd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Un,o=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const p=l.length!==0||u||n!==0||s;return s=u,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,u){e=h(l,u,0)},this.setState=function(l,u,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,f=i.get(l);if(!s||v===null||v.length===0||r&&!m)r?h(null):d();else{const x=r?0:n,M=x*4;let _=f.clippingState||null;c.value=_,_=h(v,u,M,p);for(let T=0;T!==M;++T)_[T]=e[T];f.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function d(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,u,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const f=p+g*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,_=p;M!==g;++M,_+=4)a.copy(l[M]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function jd(i){let t=new WeakMap;function e(a,o){return o===Ps?a.mapping=Pi:o===Ls&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ps||o===Ls)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const d=new qc(c.height);return d.fromEquirectangularTexture(i,a),t.set(a,d),a.addEventListener("dispose",s),e(d.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const wi=4,to=[.125,.215,.35,.446,.526,.582],ti=20,ps=new sh,eo=new ye;let ms=null,vs=0,gs=0,_s=!1;const Qn=(1+Math.sqrt(5))/2,Mi=1/Qn,no=[new $(-Qn,Mi,0),new $(Qn,Mi,0),new $(-Mi,0,Qn),new $(Mi,0,Qn),new $(0,Qn,-Mi),new $(0,Qn,Mi),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],$d=new $;class io{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=$d}=r;ms=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=so(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ms,vs,gs),this._renderer.xr.enabled=_s,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ms=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Ji,format:cn,colorSpace:Ni,depthBuffer:!1},s=ro(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qd(r)),this._blurMaterial=Jd(r,t,e)}return s}_compileMaterial(t){const e=new hn(this._lodPlanes[0],t);this._renderer.compile(e,ps)}_sceneToCubeUV(t,e,n,s,r){const c=new tn(90,1,e,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,p=l.toneMapping;l.getClearColor(eo),l.toneMapping=zn,l.autoClear=!1;const v=new va({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new hn(new Bi,v);let m=!1;const f=t.background;f?f.isColor&&(v.color.copy(f),t.background=null,m=!0):(v.color.copy(eo),m=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(c.up.set(0,d[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):M===1?(c.up.set(0,0,d[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,d[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const _=this._cubeSize;Sr(s,M*_,x>2?_:0,_,_),l.setRenderTarget(s),m&&l.render(g,c),l.render(t,c)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=p,l.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Pi||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=so());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Sr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=no[(s-r-1)%no.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new hn(this._lodPlanes[s],d),u=d.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const f=[];let x=0;for(let N=0;N<ti;++N){const L=N/g,E=Math.exp(-L*L/2);f.push(E),N===0?x+=E:N<m&&(x+=2*E)}for(let N=0;N<f.length;N++)f[N]=f[N]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=v,u.mipInt.value=M-n;const _=this._sizeLods[s],T=3*_*(s>M-wi?s-M+wi:0),P=4*(this._cubeSize-_);Sr(e,T,P,3*_,2*_),c.setRenderTarget(e),c.render(l,ps)}}function Qd(i){const t=[],e=[],n=[];let s=i;const r=i-wi+1+to.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-wi?c=to[a-i+wi-1]:a===0&&(c=0),n.push(c);const d=1/(o-2),h=-d,l=1+d,u=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,v=6,g=3,m=2,f=1,x=new Float32Array(g*v*p),M=new Float32Array(m*v*p),_=new Float32Array(f*v*p);for(let P=0;P<p;P++){const N=P%3*2/3-1,L=P>2?0:-1,E=[N,L,0,N+2/3,L,0,N+2/3,L+1,0,N,L,0,N+2/3,L+1,0,N,L+1,0];x.set(E,g*v*P),M.set(u,m*v*P);const y=[P,P,P,P,P,P];_.set(y,f*v*P)}const T=new kn;T.setAttribute("position",new pn(x,g)),T.setAttribute("uv",new pn(M,m)),T.setAttribute("faceIndex",new pn(_,f)),t.push(T),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ro(i,t,e){const n=new ri(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jd(i,t,e){const n=new Float32Array(ti),s=new $(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function so(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function ao(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function tf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===Ps||c===Ls,h=c===Pi||c===Li;if(d||h){let l=t.get(o);const u=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new io(i)),l=d?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const p=o.image;return d&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new io(i)),l=d?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function s(o){let c=0;const d=6;for(let h=0;h<d;h++)o[h]!==void 0&&c++;return c===d}function r(o){const c=o.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ef(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&$n("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function nf(i,t,e,n){const s={},r=new WeakMap;function a(l){const u=l.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(l,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(l){const u=l.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER)}function d(l){const u=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let M=0,_=x.length;M<_;M+=3){const T=x[M+0],P=x[M+1],N=x[M+2];u.push(T,P,P,N,N,T)}}else if(v!==void 0){const x=v.array;g=v.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const T=M+0,P=M+1,N=M+2;u.push(T,P,P,N,N,T)}}else return;const m=new(Go(u)?Ko:Zo)(u,1);m.version=g;const f=r.get(l);f&&t.remove(f),r.set(l,m)}function h(l){const u=r.get(l);if(u){const p=l.index;p!==null&&u.version<p.version&&d(l)}else d(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function rf(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function d(u,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,u*a,v),e.update(p,n,v))}function h(u,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,n,1)}function l(u,p,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)d(u[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,g,0,v);let f=0;for(let x=0;x<v;x++)f+=p[x]*g[x];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function sf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function af(i,t,e){const n=new WeakMap,s=new be;function r(a,o,c){const d=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==l){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let T=o.attributes.position.count*_,P=1;T>t.maxTextureSize&&(P=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const N=new Float32Array(T*P*4*l),L=new Wo(N,T,P,l);L.type=bn,L.needsUpdate=!0;const E=_*4;for(let b=0;b<l;b++){const B=f[b],U=x[b],W=M[b],X=T*P*4*b;for(let et=0;et<B.count;et++){const O=et*E;v===!0&&(s.fromBufferAttribute(B,et),N[X+O+0]=s.x,N[X+O+1]=s.y,N[X+O+2]=s.z,N[X+O+3]=0),g===!0&&(s.fromBufferAttribute(U,et),N[X+O+4]=s.x,N[X+O+5]=s.y,N[X+O+6]=s.z,N[X+O+7]=0),m===!0&&(s.fromBufferAttribute(W,et),N[X+O+8]=s.x,N[X+O+9]=s.y,N[X+O+10]=s.z,N[X+O+11]=W.itemSize===4?s.w:1)}}u={count:l,texture:L,size:new ue(T,P)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<d.length;m++)v+=d[m];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function of(i,t,e,n){let s=new WeakMap;function r(c){const d=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==d&&(t.update(l),s.set(l,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==d&&(u.update(),s.set(u,d))}return l}function a(){s=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:a}}const rl=new Xe,oo=new Jo(1,1),sl=new Wo,al=new Cc,ol=new Qo,lo=[],co=[],ho=new Float32Array(16),uo=new Float32Array(9),fo=new Float32Array(4);function Oi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=lo[s];if(r===void 0&&(r=new Float32Array(s),lo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vr(i,t){let e=co[t];e===void 0&&(e=new Int32Array(t),co[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function df(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;fo.set(n),i.uniformMatrix2fv(this.addr,!1,fo),Be(e,n)}}function ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;uo.set(n),i.uniformMatrix3fv(this.addr,!1,uo),Be(e,n)}}function pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;ho.set(n),i.uniformMatrix4fv(this.addr,!1,ho),Be(e,n)}}function mf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function _f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function xf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function Ef(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oo.compareFunction=ko,r=oo):r=rl,e.setTexture2D(t||r,s)}function wf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||al,s)}function bf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ol,s)}function Tf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sl,s)}function Af(i){switch(i){case 5126:return lf;case 35664:return cf;case 35665:return hf;case 35666:return uf;case 35674:return df;case 35675:return ff;case 35676:return pf;case 5124:case 35670:return mf;case 35667:case 35671:return vf;case 35668:case 35672:return gf;case 35669:case 35673:return _f;case 5125:return xf;case 36294:return yf;case 36295:return Mf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Tf}}function Rf(i,t){i.uniform1fv(this.addr,t)}function Cf(i,t){const e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Pf(i,t){const e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function Lf(i,t){const e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function Df(i,t){const e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function If(i,t){const e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nf(i,t){const e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Uf(i,t){i.uniform1iv(this.addr,t)}function Ff(i,t){i.uniform2iv(this.addr,t)}function Bf(i,t){i.uniform3iv(this.addr,t)}function Of(i,t){i.uniform4iv(this.addr,t)}function zf(i,t){i.uniform1uiv(this.addr,t)}function Vf(i,t){i.uniform2uiv(this.addr,t)}function Hf(i,t){i.uniform3uiv(this.addr,t)}function kf(i,t){i.uniform4uiv(this.addr,t)}function Gf(i,t,e){const n=this.cache,s=t.length,r=Vr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||rl,r[a])}function Wf(i,t,e){const n=this.cache,s=t.length,r=Vr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||al,r[a])}function Xf(i,t,e){const n=this.cache,s=t.length,r=Vr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ol,r[a])}function qf(i,t,e){const n=this.cache,s=t.length,r=Vr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sl,r[a])}function Yf(i){switch(i){case 5126:return Rf;case 35664:return Cf;case 35665:return Pf;case 35666:return Lf;case 35674:return Df;case 35675:return If;case 35676:return Nf;case 5124:case 35670:return Uf;case 35667:case 35671:return Ff;case 35668:case 35672:return Bf;case 35669:case 35673:return Of;case 5125:return zf;case 36294:return Vf;case 36295:return Hf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Wf;case 35680:case 36300:case 36308:case 36293:return Xf;case 36289:case 36303:case 36311:case 36292:return qf}}class Zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Af(e.type)}}class Kf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yf(e.type)}}class jf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function po(i,t){i.seq.push(t),i.map[t.id]=t}function $f(i,t,e){const n=i.name,s=n.length;for(xs.lastIndex=0;;){const r=xs.exec(n),a=xs.lastIndex;let o=r[1];const c=r[2]==="]",d=r[3];if(c&&(o=o|0),d===void 0||d==="["&&a+2===s){po(e,d===void 0?new Zf(o,i,t):new Kf(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new jf(o),po(e,l)),e=l}}}class Lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);$f(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function mo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qf=37297;let Jf=0;function tp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const vo=new de;function ep(i){Me._getMatrix(vo,Me.workingColorSpace,i);const t=`mat3( ${vo.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case Dr:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function go(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+tp(i.getShaderSource(t),a)}else return s}function np(i,t){const e=ep(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ip(i,t){let e;switch(t){case zl:e="Linear";break;case Vl:e="Reinhard";break;case Hl:e="Cineon";break;case kl:e="ACESFilmic";break;case Wl:e="AgX";break;case Xl:e="Neutral";break;case Gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Er=new $;function rp(){Me.getLuminanceCoefficients(Er);const i=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function ap(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function op(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Xi(i){return i!==""}function _o(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(lp,hp)}const cp=new Map;function hp(i,t){let e=pe[t];if(e===void 0){const n=cp.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sa(e)}const up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(i){return i.replace(up,dp)}function dp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mo(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ro?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function pp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function vp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Co:t="ENVMAP_BLENDING_MULTIPLY";break;case Bl:t="ENVMAP_BLENDING_MIX";break;case Ol:t="ENVMAP_BLENDING_ADD";break}return t}function gp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function _p(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=fp(e),d=pp(e),h=mp(e),l=vp(e),u=gp(e),p=sp(e),v=ap(r),g=s.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xi).join(`
`),f.length>0&&(f+=`
`)):(m=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),f=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?pe.tonemapping_pars_fragment:"",e.toneMapping!==zn?ip("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,np("linearToOutputTexel",e.outputColorSpace),rp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),a=sa(a),a=_o(a,e),a=xo(a,e),o=sa(o),o=_o(o,e),o=xo(o,e),a=yo(a),o=yo(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+m+a,_=x+f+o,T=mo(s,s.VERTEX_SHADER,M),P=mo(s,s.FRAGMENT_SHADER,_);s.attachShader(g,T),s.attachShader(g,P),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function N(b){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(g).trim(),U=s.getShaderInfoLog(T).trim(),W=s.getShaderInfoLog(P).trim();let X=!0,et=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,P);else{const O=go(s,T,"vertex"),D=go(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+B+`
`+O+`
`+D)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||W==="")&&(et=!1);et&&(b.diagnostics={runnable:X,programLog:B,vertexShader:{log:U,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(T),s.deleteShader(P),L=new Lr(s,g),E=op(s,g)}let L;this.getUniforms=function(){return L===void 0&&N(this),L};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Qf)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=P,this}let xp=0;class yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mp(t),e.set(t,n)),n}}class Mp{constructor(t){this.id=xp++,this.code=t,this.usedTimes=0}}function Sp(i,t,e,n,s,r,a){const o=new qo,c=new yp,d=new Set,h=[],l=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return d.add(E),E===0?"uv":`uv${E}`}function m(E,y,b,B,U){const W=B.fog,X=U.geometry,et=E.isMeshStandardMaterial?B.environment:null,O=(E.isMeshStandardMaterial?e:t).get(E.envMap||et),D=!!O&&O.mapping===Or?O.image.height:null,tt=v[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=Q!==void 0?Q.length:0;let J=0;X.morphAttributes.position!==void 0&&(J=1),X.morphAttributes.normal!==void 0&&(J=2),X.morphAttributes.color!==void 0&&(J=3);let z,A,R,H;if(tt){const ae=dn[tt];z=ae.vertexShader,A=ae.fragmentShader}else z=E.vertexShader,A=E.fragmentShader,c.update(E),R=c.getVertexShaderID(E),H=c.getFragmentShaderID(E);const K=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),q=U.isInstancedMesh===!0,it=U.isBatchedMesh===!0,mt=!!E.map,Lt=!!E.matcap,vt=!!O,I=!!E.aoMap,dt=!!E.lightMap,ht=!!E.bumpMap,qt=!!E.normalMap,yt=!!E.displacementMap,ne=!!E.emissiveMap,pt=!!E.metalnessMap,C=!!E.roughnessMap,S=E.anisotropy>0,Z=E.clearcoat>0,lt=E.dispersion>0,ct=E.iridescence>0,at=E.sheen>0,Et=E.transmission>0,wt=S&&!!E.anisotropyMap,Ft=Z&&!!E.clearcoatMap,le=Z&&!!E.clearcoatNormalMap,St=Z&&!!E.clearcoatRoughnessMap,kt=ct&&!!E.iridescenceMap,jt=ct&&!!E.iridescenceThicknessMap,Qt=at&&!!E.sheenColorMap,Xt=at&&!!E.sheenRoughnessMap,ce=!!E.specularMap,ie=!!E.specularColorMap,ve=!!E.specularIntensityMap,G=Et&&!!E.transmissionMap,Pt=Et&&!!E.thicknessMap,ot=!!E.gradientMap,ft=!!E.alphaMap,zt=E.alphaTest>0,Ot=!!E.alphaHash,se=!!E.extensions;let Se=zn;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Le={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:A,defines:E.defines,customVertexShaderID:R,customFragmentShaderID:H,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:it,batchingColor:it&&U._colorsTexture!==null,instancing:q,instancingColor:q&&U.instanceColor!==null,instancingMorph:q&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ni,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:Lt,envMap:vt,envMapMode:vt&&O.mapping,envMapCubeUVHeight:D,aoMap:I,lightMap:dt,bumpMap:ht,normalMap:qt,displacementMap:u&&yt,emissiveMap:ne,normalMapObjectSpace:qt&&E.normalMapType===Kl,normalMapTangentSpace:qt&&E.normalMapType===Ho,metalnessMap:pt,roughnessMap:C,anisotropy:S,anisotropyMap:wt,clearcoat:Z,clearcoatMap:Ft,clearcoatNormalMap:le,clearcoatRoughnessMap:St,dispersion:lt,iridescence:ct,iridescenceMap:kt,iridescenceThicknessMap:jt,sheen:at,sheenColorMap:Qt,sheenRoughnessMap:Xt,specularMap:ce,specularColorMap:ie,specularIntensityMap:ve,transmission:Et,transmissionMap:G,thicknessMap:Pt,gradientMap:ot,opaque:E.transparent===!1&&E.blending===Ti&&E.alphaToCoverage===!1,alphaMap:ft,alphaTest:zt,alphaHash:Ot,combine:E.combine,mapUv:mt&&g(E.map.channel),aoMapUv:I&&g(E.aoMap.channel),lightMapUv:dt&&g(E.lightMap.channel),bumpMapUv:ht&&g(E.bumpMap.channel),normalMapUv:qt&&g(E.normalMap.channel),displacementMapUv:yt&&g(E.displacementMap.channel),emissiveMapUv:ne&&g(E.emissiveMap.channel),metalnessMapUv:pt&&g(E.metalnessMap.channel),roughnessMapUv:C&&g(E.roughnessMap.channel),anisotropyMapUv:wt&&g(E.anisotropyMap.channel),clearcoatMapUv:Ft&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&g(E.sheenRoughnessMap.channel),specularMapUv:ce&&g(E.specularMap.channel),specularColorMapUv:ie&&g(E.specularColorMap.channel),specularIntensityMapUv:ve&&g(E.specularIntensityMap.channel),transmissionMapUv:G&&g(E.transmissionMap.channel),thicknessMapUv:Pt&&g(E.thicknessMap.channel),alphaMapUv:ft&&g(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(mt||ft),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:nt,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:J,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&Me.getTransfer(E.map.colorSpace)===Ee,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&Me.getTransfer(E.emissiveMap.colorSpace)===Ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===Ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:se&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&E.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=d.has(1),Le.vertexUv2s=d.has(2),Le.vertexUv3s=d.has(3),d.clear(),Le}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)y.push(b),y.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(x(y,E),M(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const y=v[E.type];let b;if(y){const B=dn[y];b=kc.clone(B.uniforms)}else b=E.uniforms;return b}function T(E,y){let b;for(let B=0,U=h.length;B<U;B++){const W=h[B];if(W.cacheKey===y){b=W,++b.usedTimes;break}}return b===void 0&&(b=new _p(i,y,E,r),h.push(b)),b}function P(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function N(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:T,releaseProgram:P,releaseShaderCache:N,programs:h,dispose:L}}function Ep(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function So(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,u,p,v,g,m){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:u,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=f):(f.id=l.id,f.object=l,f.geometry=u,f.material=p,f.groupOrder=v,f.renderOrder=l.renderOrder,f.z=g,f.group=m),t++,f}function o(l,u,p,v,g,m){const f=a(l,u,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(l,u,p,v,g,m){const f=a(l,u,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function d(l,u){e.length>1&&e.sort(l||wp),n.length>1&&n.sort(u||So),s.length>1&&s.sort(u||So)}function h(){for(let l=t,u=i.length;l<u;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:d}}function bp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Eo,i.set(n,[a])):s>=r.length?(a=new Eo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new ye};break;case"SpotLight":e={position:new $,direction:new $,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function Ap(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rp=0;function Cp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pp(i){const t=new Tp,e=Ap(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new $);const s=new $,r=new De,a=new De;function o(d){let h=0,l=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,x=0,M=0,_=0,T=0,P=0,N=0;d.sort(Cp);for(let E=0,y=d.length;E<y;E++){const b=d[E],B=b.color,U=b.intensity,W=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=B.r*U,l+=B.g*U,u+=B.b*U;else if(b.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(b.sh.coefficients[et],U);N++}else if(b.isDirectionalLight){const et=t.get(b);if(et.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const O=b.shadow,D=e.get(b);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=b.shadow.matrix,x++}n.directional[p]=et,p++}else if(b.isSpotLight){const et=t.get(b);et.position.setFromMatrixPosition(b.matrixWorld),et.color.copy(B).multiplyScalar(U),et.distance=W,et.coneCos=Math.cos(b.angle),et.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),et.decay=b.decay,n.spot[g]=et;const O=b.shadow;if(b.map&&(n.spotLightMap[T]=b.map,T++,O.updateMatrices(b),b.castShadow&&P++),n.spotLightMatrix[g]=O.matrix,b.castShadow){const D=e.get(b);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,n.spotShadow[g]=D,n.spotShadowMap[g]=X,_++}g++}else if(b.isRectAreaLight){const et=t.get(b);et.color.copy(B).multiplyScalar(U),et.halfWidth.set(b.width*.5,0,0),et.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=et,m++}else if(b.isPointLight){const et=t.get(b);if(et.color.copy(b.color).multiplyScalar(b.intensity),et.distance=b.distance,et.decay=b.decay,b.castShadow){const O=b.shadow,D=e.get(b);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,D.shadowCameraNear=O.camera.near,D.shadowCameraFar=O.camera.far,n.pointShadow[v]=D,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=b.shadow.matrix,M++}n.point[v]=et,v++}else if(b.isHemisphereLight){const et=t.get(b);et.skyColor.copy(b.color).multiplyScalar(U),et.groundColor.copy(b.groundColor).multiplyScalar(U),n.hemi[f]=et,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==x||L.numPointShadows!==M||L.numSpotShadows!==_||L.numSpotMaps!==T||L.numLightProbes!==N)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+T-P,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=N,L.directionalLength=p,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=x,L.numPointShadows=M,L.numSpotShadows=_,L.numSpotMaps=T,L.numLightProbes=N,n.version=Rp++)}function c(d,h){let l=0,u=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let f=0,x=d.length;f<x;f++){const M=d[f];if(M.isDirectionalLight){const _=n.directional[l];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),l++}else if(M.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function wo(i){const t=new Pp(i),e=[],n=[];function s(h){d.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Lp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new wo(i),t.set(s,[o])):r>=a.length?(o=new wo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ip=`uniform sampler2D shadow_pass;
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
}`;function Np(i,t,e){let n=new _a;const s=new ue,r=new ue,a=new be,o=new $c({depthPacking:Zl}),c=new Qc,d={},h=e.maxTextureSize,l={[Vn]:Ke,[Ke]:Vn,[wn]:wn},u=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Dp,fragmentShader:Ip}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new hn(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let f=this.type;this.render=function(P,N,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),B=i.state;B.setBlending(On),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const U=f!==En&&this.type===En,W=f===En&&this.type!==En;for(let X=0,et=P.length;X<et;X++){const O=P[X],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const tt=D.getFrameExtents();if(s.multiply(tt),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,D.mapSize.y=r.y)),D.map===null||U===!0||W===!0){const F=this.type!==En?{minFilter:un,magFilter:un}:{};D.map!==null&&D.map.dispose(),D.map=new ri(s.x,s.y,F),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const Q=D.getViewportCount();for(let F=0;F<Q;F++){const J=D.getViewport(F);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),B.viewport(a),D.updateMatrices(O,F),n=D.getFrustum(),_(N,L,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===En&&x(D,L),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,b)};function x(P,N){const L=t.update(g);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ri(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(N,null,L,u,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(N,null,L,p,g,null)}function M(P,N,L,E){let y=null;const b=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)y=b;else if(y=L.isPointLight===!0?c:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const B=y.uuid,U=N.uuid;let W=d[B];W===void 0&&(W={},d[B]=W);let X=W[U];X===void 0&&(X=y.clone(),W[U]=X,N.addEventListener("dispose",T)),y=X}if(y.visible=N.visible,y.wireframe=N.wireframe,E===En?y.side=N.shadowSide!==null?N.shadowSide:N.side:y.side=N.shadowSide!==null?N.shadowSide:l[N.side],y.alphaMap=N.alphaMap,y.alphaTest=N.alphaTest,y.map=N.map,y.clipShadows=N.clipShadows,y.clippingPlanes=N.clippingPlanes,y.clipIntersection=N.clipIntersection,y.displacementMap=N.displacementMap,y.displacementScale=N.displacementScale,y.displacementBias=N.displacementBias,y.wireframeLinewidth=N.wireframeLinewidth,y.linewidth=N.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=L}return y}function _(P,N,L,E,y){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===En)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const U=t.update(P),W=P.material;if(Array.isArray(W)){const X=U.groups;for(let et=0,O=X.length;et<O;et++){const D=X[et],tt=W[D.materialIndex];if(tt&&tt.visible){const Q=M(P,tt,E,y);P.onBeforeShadow(i,P,N,L,U,Q,D),i.renderBufferDirect(L,null,U,Q,P,D),P.onAfterShadow(i,P,N,L,U,Q,D)}}}else if(W.visible){const X=M(P,W,E,y);P.onBeforeShadow(i,P,N,L,U,X,null),i.renderBufferDirect(L,null,U,X,P,null),P.onAfterShadow(i,P,N,L,U,X,null)}}const B=P.children;for(let U=0,W=B.length;U<W;U++)_(B[U],N,L,E,y)}function T(P){P.target.removeEventListener("dispose",T);for(const L in d){const E=d[L],y=P.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Up={[Es]:ws,[bs]:Rs,[Ts]:Cs,[Ci]:As,[ws]:Es,[Rs]:bs,[Cs]:Ts,[As]:Ci};function Fp(i,t){function e(){let G=!1;const Pt=new be;let ot=null;const ft=new be(0,0,0,0);return{setMask:function(zt){ot!==zt&&!G&&(i.colorMask(zt,zt,zt,zt),ot=zt)},setLocked:function(zt){G=zt},setClear:function(zt,Ot,se,Se,Le){Le===!0&&(zt*=Se,Ot*=Se,se*=Se),Pt.set(zt,Ot,se,Se),ft.equals(Pt)===!1&&(i.clearColor(zt,Ot,se,Se),ft.copy(Pt))},reset:function(){G=!1,ot=null,ft.set(-1,0,0,0)}}}function n(){let G=!1,Pt=!1,ot=null,ft=null,zt=null;return{setReversed:function(Ot){if(Pt!==Ot){const se=t.get("EXT_clip_control");Pt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);const Se=zt;zt=null,this.setClear(Se)}Pt=Ot},getReversed:function(){return Pt},setTest:function(Ot){Ot?K(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(Ot){ot!==Ot&&!G&&(i.depthMask(Ot),ot=Ot)},setFunc:function(Ot){if(Pt&&(Ot=Up[Ot]),ft!==Ot){switch(Ot){case Es:i.depthFunc(i.NEVER);break;case ws:i.depthFunc(i.ALWAYS);break;case bs:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Ts:i.depthFunc(i.EQUAL);break;case As:i.depthFunc(i.GEQUAL);break;case Rs:i.depthFunc(i.GREATER);break;case Cs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Ot}},setLocked:function(Ot){G=Ot},setClear:function(Ot){zt!==Ot&&(Pt&&(Ot=1-Ot),i.clearDepth(Ot),zt=Ot)},reset:function(){G=!1,ot=null,ft=null,zt=null,Pt=!1}}}function s(){let G=!1,Pt=null,ot=null,ft=null,zt=null,Ot=null,se=null,Se=null,Le=null;return{setTest:function(ae){G||(ae?K(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(ae){Pt!==ae&&!G&&(i.stencilMask(ae),Pt=ae)},setFunc:function(ae,st,ut){(ot!==ae||ft!==st||zt!==ut)&&(i.stencilFunc(ae,st,ut),ot=ae,ft=st,zt=ut)},setOp:function(ae,st,ut){(Ot!==ae||se!==st||Se!==ut)&&(i.stencilOp(ae,st,ut),Ot=ae,se=st,Se=ut)},setLocked:function(ae){G=ae},setClear:function(ae){Le!==ae&&(i.clearStencil(ae),Le=ae)},reset:function(){G=!1,Pt=null,ot=null,ft=null,zt=null,Ot=null,se=null,Se=null,Le=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,d=new WeakMap;let h={},l={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,x=null,M=null,_=null,T=null,P=null,N=new ye(0,0,0),L=0,E=!1,y=null,b=null,B=null,U=null,W=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,O=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(D)[1]),et=O>=1):D.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),et=O>=2);let tt=null,Q={};const F=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),z=new be().fromArray(F),A=new be().fromArray(J);function R(G,Pt,ot,ft){const zt=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(G,Ot),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<ot;se++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Pt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return Ot}const H={};H[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Ci),ht(!1),qt(Ea),K(i.CULL_FACE),I(On);function K(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function nt(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function q(G,Pt){return l[G]!==Pt?(i.bindFramebuffer(G,Pt),l[G]=Pt,G===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Pt),G===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function it(G,Pt){let ot=p,ft=!1;if(G){ot=u.get(Pt),ot===void 0&&(ot=[],u.set(Pt,ot));const zt=G.textures;if(ot.length!==zt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,se=zt.length;Ot<se;Ot++)ot[Ot]=i.COLOR_ATTACHMENT0+Ot;ot.length=zt.length,ft=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,ft=!0);ft&&i.drawBuffers(ot)}function mt(G){return v!==G?(i.useProgram(G),v=G,!0):!1}const Lt={[Jn]:i.FUNC_ADD,[yl]:i.FUNC_SUBTRACT,[Ml]:i.FUNC_REVERSE_SUBTRACT};Lt[Sl]=i.MIN,Lt[El]=i.MAX;const vt={[wl]:i.ZERO,[bl]:i.ONE,[Tl]:i.SRC_COLOR,[Ms]:i.SRC_ALPHA,[Dl]:i.SRC_ALPHA_SATURATE,[Pl]:i.DST_COLOR,[Rl]:i.DST_ALPHA,[Al]:i.ONE_MINUS_SRC_COLOR,[Ss]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Cl]:i.ONE_MINUS_DST_ALPHA,[Il]:i.CONSTANT_COLOR,[Nl]:i.ONE_MINUS_CONSTANT_COLOR,[Ul]:i.CONSTANT_ALPHA,[Fl]:i.ONE_MINUS_CONSTANT_ALPHA};function I(G,Pt,ot,ft,zt,Ot,se,Se,Le,ae){if(G===On){g===!0&&(nt(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),G!==xl){if(G!==m||ae!==E){if((f!==Jn||_!==Jn)&&(i.blendEquation(i.FUNC_ADD),f=Jn,_=Jn),ae)switch(G){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ta:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,M=null,T=null,P=null,N.set(0,0,0),L=0,m=G,E=ae}return}zt=zt||Pt,Ot=Ot||ot,se=se||ft,(Pt!==f||zt!==_)&&(i.blendEquationSeparate(Lt[Pt],Lt[zt]),f=Pt,_=zt),(ot!==x||ft!==M||Ot!==T||se!==P)&&(i.blendFuncSeparate(vt[ot],vt[ft],vt[Ot],vt[se]),x=ot,M=ft,T=Ot,P=se),(Se.equals(N)===!1||Le!==L)&&(i.blendColor(Se.r,Se.g,Se.b,Le),N.copy(Se),L=Le),m=G,E=!1}function dt(G,Pt){G.side===wn?nt(i.CULL_FACE):K(i.CULL_FACE);let ot=G.side===Ke;Pt&&(ot=!ot),ht(ot),G.blending===Ti&&G.transparent===!1?I(On):I(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const ft=G.stencilWrite;o.setTest(ft),ft&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ne(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){y!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),y=G)}function qt(G){G!==vl?(K(i.CULL_FACE),G!==b&&(G===Ea?i.cullFace(i.BACK):G===gl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),b=G}function yt(G){G!==B&&(et&&i.lineWidth(G),B=G)}function ne(G,Pt,ot){G?(K(i.POLYGON_OFFSET_FILL),(U!==Pt||W!==ot)&&(i.polygonOffset(Pt,ot),U=Pt,W=ot)):nt(i.POLYGON_OFFSET_FILL)}function pt(G){G?K(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function C(G){G===void 0&&(G=i.TEXTURE0+X-1),tt!==G&&(i.activeTexture(G),tt=G)}function S(G,Pt,ot){ot===void 0&&(tt===null?ot=i.TEXTURE0+X-1:ot=tt);let ft=Q[ot];ft===void 0&&(ft={type:void 0,texture:void 0},Q[ot]=ft),(ft.type!==G||ft.texture!==Pt)&&(tt!==ot&&(i.activeTexture(ot),tt=ot),i.bindTexture(G,Pt||H[G]),ft.type=G,ft.texture=Pt)}function Z(){const G=Q[tt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qt(G){z.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),z.copy(G))}function Xt(G){A.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),A.copy(G))}function ce(G,Pt){let ot=d.get(Pt);ot===void 0&&(ot=new WeakMap,d.set(Pt,ot));let ft=ot.get(G);ft===void 0&&(ft=i.getUniformBlockIndex(Pt,G.name),ot.set(G,ft))}function ie(G,Pt){const ft=d.get(Pt).get(G);c.get(Pt)!==ft&&(i.uniformBlockBinding(Pt,ft,G.__bindingPointIndex),c.set(Pt,ft))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,Q={},l={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,x=null,M=null,_=null,T=null,P=null,N=new ye(0,0,0),L=0,E=!1,y=null,b=null,B=null,U=null,W=null,z.set(0,0,i.canvas.width,i.canvas.height),A.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:nt,bindFramebuffer:q,drawBuffers:it,useProgram:mt,setBlending:I,setMaterial:dt,setFlipSided:ht,setCullFace:qt,setLineWidth:yt,setPolygonOffset:ne,setScissorTest:pt,activeTexture:C,bindTexture:S,unbindTexture:Z,compressedTexImage2D:lt,compressedTexImage3D:ct,texImage2D:kt,texImage3D:jt,updateUBOMapping:ce,uniformBlockBinding:ie,texStorage2D:le,texStorage3D:St,texSubImage2D:at,texSubImage3D:Et,compressedTexSubImage2D:wt,compressedTexSubImage3D:Ft,scissor:Qt,viewport:Xt,reset:ve}}function Bp(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ue,h=new WeakMap;let l;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return p?new OffscreenCanvas(C,S):$i("canvas")}function g(C,S,Z){let lt=1;const ct=pt(C);if((ct.width>Z||ct.height>Z)&&(lt=Z/Math.max(ct.width,ct.height)),lt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const at=Math.floor(lt*ct.width),Et=Math.floor(lt*ct.height);l===void 0&&(l=v(at,Et));const wt=S?v(at,Et):l;return wt.width=at,wt.height=Et,wt.getContext("2d").drawImage(C,0,0,at,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+at+"x"+Et+")."),wt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,S,Z,lt,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at=S;if(S===i.RED&&(Z===i.FLOAT&&(at=i.R32F),Z===i.HALF_FLOAT&&(at=i.R16F),Z===i.UNSIGNED_BYTE&&(at=i.R8)),S===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(at=i.R8UI),Z===i.UNSIGNED_SHORT&&(at=i.R16UI),Z===i.UNSIGNED_INT&&(at=i.R32UI),Z===i.BYTE&&(at=i.R8I),Z===i.SHORT&&(at=i.R16I),Z===i.INT&&(at=i.R32I)),S===i.RG&&(Z===i.FLOAT&&(at=i.RG32F),Z===i.HALF_FLOAT&&(at=i.RG16F),Z===i.UNSIGNED_BYTE&&(at=i.RG8)),S===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(at=i.RG8UI),Z===i.UNSIGNED_SHORT&&(at=i.RG16UI),Z===i.UNSIGNED_INT&&(at=i.RG32UI),Z===i.BYTE&&(at=i.RG8I),Z===i.SHORT&&(at=i.RG16I),Z===i.INT&&(at=i.RG32I)),S===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(at=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(at=i.RGB16UI),Z===i.UNSIGNED_INT&&(at=i.RGB32UI),Z===i.BYTE&&(at=i.RGB8I),Z===i.SHORT&&(at=i.RGB16I),Z===i.INT&&(at=i.RGB32I)),S===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),Z===i.UNSIGNED_INT&&(at=i.RGBA32UI),Z===i.BYTE&&(at=i.RGBA8I),Z===i.SHORT&&(at=i.RGBA16I),Z===i.INT&&(at=i.RGBA32I)),S===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),S===i.RGBA){const Et=ct?Dr:Me.getTransfer(lt);Z===i.FLOAT&&(at=i.RGBA32F),Z===i.HALF_FLOAT&&(at=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(at=Et===Ee?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function _(C,S){let Z;return C?S===null||S===ii||S===Di?Z=i.DEPTH24_STENCIL8:S===bn?Z=i.DEPTH32F_STENCIL8:S===Ki&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ii||S===Di?Z=i.DEPTH_COMPONENT24:S===bn?Z=i.DEPTH_COMPONENT32F:S===Ki&&(Z=i.DEPTH_COMPONENT16),Z}function T(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),L(S),S.isVideoTexture&&h.delete(S)}function N(C){const S=C.target;S.removeEventListener("dispose",N),y(S)}function L(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Z=C.source,lt=u.get(Z);if(lt){const ct=lt[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(C),Object.keys(lt).length===0&&u.delete(Z)}n.remove(C)}function E(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const Z=C.source,lt=u.get(Z);delete lt[S.__cacheKey],a.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(S.__webglFramebuffer[lt]))for(let ct=0;ct<S.__webglFramebuffer[lt].length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[lt][ct]);else i.deleteFramebuffer(S.__webglFramebuffer[lt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[lt])}else{if(Array.isArray(S.__webglFramebuffer))for(let lt=0;lt<S.__webglFramebuffer.length;lt++)i.deleteFramebuffer(S.__webglFramebuffer[lt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let lt=0;lt<S.__webglColorRenderbuffer.length;lt++)S.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[lt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Z=C.textures;for(let lt=0,ct=Z.length;lt<ct;lt++){const at=n.get(Z[lt]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(Z[lt])}n.remove(C)}let b=0;function B(){b=0}function U(){const C=b;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),b+=1,C}function W(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const Z=n.get(C);if(C.isVideoTexture&&yt(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const lt=C.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(Z,C,S);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+S)}function et(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){A(Z,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+S)}function O(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){A(Z,C,S);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+S)}function D(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){R(Z,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+S)}const tt={[Zi]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Ds]:i.MIRRORED_REPEAT},Q={[un]:i.NEAREST,[ql]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},F={[jl]:i.NEVER,[nc]:i.ALWAYS,[$l]:i.LESS,[ko]:i.LEQUAL,[Ql]:i.EQUAL,[ec]:i.GEQUAL,[Jl]:i.GREATER,[tc]:i.NOTEQUAL};function J(C,S){if(S.type===bn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===Wr||S.magFilter===nr||S.magFilter===ni||S.minFilter===fn||S.minFilter===Wr||S.minFilter===nr||S.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,tt[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,tt[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,tt[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Q[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,F[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===un||S.minFilter!==nr&&S.minFilter!==ni||S.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function z(C,S){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const lt=S.source;let ct=u.get(lt);ct===void 0&&(ct={},u.set(lt,ct));const at=W(S);if(at!==C.__cacheKey){ct[at]===void 0&&(ct[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ct[at].usedTimes++;const Et=ct[C.__cacheKey];Et!==void 0&&(ct[C.__cacheKey].usedTimes--,Et.usedTimes===0&&E(S)),C.__cacheKey=at,C.__webglTexture=ct[at].texture}return Z}function A(C,S,Z){let lt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(lt=i.TEXTURE_3D);const ct=z(C,S),at=S.source;e.bindTexture(lt,C.__webglTexture,i.TEXTURE0+Z);const Et=n.get(at);if(at.version!==Et.__version||ct===!0){e.activeTexture(i.TEXTURE0+Z);const wt=Me.getPrimaries(Me.workingColorSpace),Ft=S.colorSpace===Fn?null:Me.getPrimaries(S.colorSpace),le=S.colorSpace===Fn||wt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let St=g(S.image,!1,s.maxTextureSize);St=ne(S,St);const kt=r.convert(S.format,S.colorSpace),jt=r.convert(S.type);let Qt=M(S.internalFormat,kt,jt,S.colorSpace,S.isVideoTexture);J(lt,S);let Xt;const ce=S.mipmaps,ie=S.isVideoTexture!==!0,ve=Et.__version===void 0||ct===!0,G=at.dataReady,Pt=T(S,St);if(S.isDepthTexture)Qt=_(S.format===Ii,S.type),ve&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Qt,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,Qt,St.width,St.height,0,kt,jt,null));else if(S.isDataTexture)if(ce.length>0){ie&&ve&&e.texStorage2D(i.TEXTURE_2D,Pt,Qt,ce[0].width,ce[0].height);for(let ot=0,ft=ce.length;ot<ft;ot++)Xt=ce[ot],ie?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Xt.width,Xt.height,kt,jt,Xt.data):e.texImage2D(i.TEXTURE_2D,ot,Qt,Xt.width,Xt.height,0,kt,jt,Xt.data);S.generateMipmaps=!1}else ie?(ve&&e.texStorage2D(i.TEXTURE_2D,Pt,Qt,St.width,St.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St.width,St.height,kt,jt,St.data)):e.texImage2D(i.TEXTURE_2D,0,Qt,St.width,St.height,0,kt,jt,St.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Qt,ce[0].width,ce[0].height,St.depth);for(let ot=0,ft=ce.length;ot<ft;ot++)if(Xt=ce[ot],S.format!==cn)if(kt!==null)if(ie){if(G)if(S.layerUpdates.size>0){const zt=Ja(Xt.width,Xt.height,S.format,S.type);for(const Ot of S.layerUpdates){const se=Xt.data.subarray(Ot*zt/Xt.data.BYTES_PER_ELEMENT,(Ot+1)*zt/Xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Ot,Xt.width,Xt.height,1,kt,se)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Xt.width,Xt.height,St.depth,kt,Xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Qt,Xt.width,Xt.height,St.depth,0,Xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Xt.width,Xt.height,St.depth,kt,jt,Xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Qt,Xt.width,Xt.height,St.depth,0,kt,jt,Xt.data)}else{ie&&ve&&e.texStorage2D(i.TEXTURE_2D,Pt,Qt,ce[0].width,ce[0].height);for(let ot=0,ft=ce.length;ot<ft;ot++)Xt=ce[ot],S.format!==cn?kt!==null?ie?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Xt.width,Xt.height,kt,Xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Qt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Xt.width,Xt.height,kt,jt,Xt.data):e.texImage2D(i.TEXTURE_2D,ot,Qt,Xt.width,Xt.height,0,kt,jt,Xt.data)}else if(S.isDataArrayTexture)if(ie){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Qt,St.width,St.height,St.depth),G)if(S.layerUpdates.size>0){const ot=Ja(St.width,St.height,S.format,S.type);for(const ft of S.layerUpdates){const zt=St.data.subarray(ft*ot/St.data.BYTES_PER_ELEMENT,(ft+1)*ot/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,St.width,St.height,1,kt,jt,zt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,kt,jt,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Qt,St.width,St.height,St.depth,0,kt,jt,St.data);else if(S.isData3DTexture)ie?(ve&&e.texStorage3D(i.TEXTURE_3D,Pt,Qt,St.width,St.height,St.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,kt,jt,St.data)):e.texImage3D(i.TEXTURE_3D,0,Qt,St.width,St.height,St.depth,0,kt,jt,St.data);else if(S.isFramebufferTexture){if(ve)if(ie)e.texStorage2D(i.TEXTURE_2D,Pt,Qt,St.width,St.height);else{let ot=St.width,ft=St.height;for(let zt=0;zt<Pt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Qt,ot,ft,0,kt,jt,null),ot>>=1,ft>>=1}}else if(ce.length>0){if(ie&&ve){const ot=pt(ce[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Qt,ot.width,ot.height)}for(let ot=0,ft=ce.length;ot<ft;ot++)Xt=ce[ot],ie?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,kt,jt,Xt):e.texImage2D(i.TEXTURE_2D,ot,Qt,kt,jt,Xt);S.generateMipmaps=!1}else if(ie){if(ve){const ot=pt(St);e.texStorage2D(i.TEXTURE_2D,Pt,Qt,ot.width,ot.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,jt,St)}else e.texImage2D(i.TEXTURE_2D,0,Qt,kt,jt,St);m(S)&&f(lt),Et.__version=at.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function R(C,S,Z){if(S.image.length!==6)return;const lt=z(C,S),ct=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Z);const at=n.get(ct);if(ct.version!==at.__version||lt===!0){e.activeTexture(i.TEXTURE0+Z);const Et=Me.getPrimaries(Me.workingColorSpace),wt=S.colorSpace===Fn?null:Me.getPrimaries(S.colorSpace),Ft=S.colorSpace===Fn||Et===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const le=S.isCompressedTexture||S.image[0].isCompressedTexture,St=S.image[0]&&S.image[0].isDataTexture,kt=[];for(let ft=0;ft<6;ft++)!le&&!St?kt[ft]=g(S.image[ft],!0,s.maxCubemapSize):kt[ft]=St?S.image[ft].image:S.image[ft],kt[ft]=ne(S,kt[ft]);const jt=kt[0],Qt=r.convert(S.format,S.colorSpace),Xt=r.convert(S.type),ce=M(S.internalFormat,Qt,Xt,S.colorSpace),ie=S.isVideoTexture!==!0,ve=at.__version===void 0||lt===!0,G=ct.dataReady;let Pt=T(S,jt);J(i.TEXTURE_CUBE_MAP,S);let ot;if(le){ie&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ce,jt.width,jt.height);for(let ft=0;ft<6;ft++){ot=kt[ft].mipmaps;for(let zt=0;zt<ot.length;zt++){const Ot=ot[zt];S.format!==cn?Qt!==null?ie?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Ot.width,Ot.height,Qt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,ce,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Ot.width,Ot.height,Qt,Xt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,ce,Ot.width,Ot.height,0,Qt,Xt,Ot.data)}}}else{if(ot=S.mipmaps,ie&&ve){ot.length>0&&Pt++;const ft=pt(kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ce,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(St){ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,kt[ft].width,kt[ft].height,Qt,Xt,kt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,kt[ft].width,kt[ft].height,0,Qt,Xt,kt[ft].data);for(let zt=0;zt<ot.length;zt++){const se=ot[zt].image[ft].image;ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,se.width,se.height,Qt,Xt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,ce,se.width,se.height,0,Qt,Xt,se.data)}}else{ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Qt,Xt,kt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,Qt,Xt,kt[ft]);for(let zt=0;zt<ot.length;zt++){const Ot=ot[zt];ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Qt,Xt,Ot.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,ce,Qt,Xt,Ot.image[ft])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),at.__version=ct.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function H(C,S,Z,lt,ct,at){const Et=r.convert(Z.format,Z.colorSpace),wt=r.convert(Z.type),Ft=M(Z.internalFormat,Et,wt,Z.colorSpace),le=n.get(S),St=n.get(Z);if(St.__renderTarget=S,!le.__hasExternalTextures){const kt=Math.max(1,S.width>>at),jt=Math.max(1,S.height>>at);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,at,Ft,kt,jt,S.depth,0,Et,wt,null):e.texImage2D(ct,at,Ft,kt,jt,0,Et,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),qt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ct,St.__webglTexture,0,ht(S)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ct,St.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(C,S,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const lt=S.depthTexture,ct=lt&&lt.isDepthTexture?lt.type:null,at=_(S.stencilBuffer,ct),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=ht(S);qt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,at,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,at,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,at,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,C)}else{const lt=S.textures;for(let ct=0;ct<lt.length;ct++){const at=lt[ct],Et=r.convert(at.format,at.colorSpace),wt=r.convert(at.type),Ft=M(at.internalFormat,Et,wt,at.colorSpace),le=ht(S);Z&&qt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Ft,S.width,S.height):qt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(S.depthTexture);lt.__renderTarget=S,(!lt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const ct=lt.__webglTexture,at=ht(S);if(S.depthTexture.format===Ai)qt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(S.depthTexture.format===Ii)qt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function q(C){const S=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const lt=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),lt){const ct=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,lt.removeEventListener("dispose",ct)};lt.addEventListener("dispose",ct),S.__depthDisposeCallback=ct}S.__boundDepthTexture=lt}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");nt(S.__webglFramebuffer,C)}else if(Z){S.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[lt]),S.__webglDepthbuffer[lt]===void 0)S.__webglDepthbuffer[lt]=i.createRenderbuffer(),K(S.__webglDepthbuffer[lt],C,!1);else{const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),K(S.__webglDepthbuffer,C,!1);else{const lt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,S,Z){const lt=n.get(C);S!==void 0&&H(lt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&q(C)}function mt(C){const S=C.texture,Z=n.get(C),lt=n.get(S);C.addEventListener("dispose",N);const ct=C.textures,at=C.isWebGLCubeRenderTarget===!0,Et=ct.length>1;if(Et||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=S.version,a.memory.textures++),at){Z.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer[wt]=[];for(let Ft=0;Ft<S.mipmaps.length;Ft++)Z.__webglFramebuffer[wt][Ft]=i.createFramebuffer()}else Z.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let wt=0;wt<S.mipmaps.length;wt++)Z.__webglFramebuffer[wt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Et)for(let wt=0,Ft=ct.length;wt<Ft;wt++){const le=n.get(ct[wt]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&qt(C)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let wt=0;wt<ct.length;wt++){const Ft=ct[wt];Z.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[wt]);const le=r.convert(Ft.format,Ft.colorSpace),St=r.convert(Ft.type),kt=M(Ft.internalFormat,le,St,Ft.colorSpace,C.isXRRenderTarget===!0),jt=ht(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,kt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),K(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),J(i.TEXTURE_CUBE_MAP,S);for(let wt=0;wt<6;wt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)H(Z.__webglFramebuffer[wt][Ft],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft);else H(Z.__webglFramebuffer[wt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let wt=0,Ft=ct.length;wt<Ft;wt++){const le=ct[wt],St=n.get(le);e.bindTexture(i.TEXTURE_2D,St.__webglTexture),J(i.TEXTURE_2D,le),H(Z.__webglFramebuffer,C,le,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),m(le)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(wt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,lt.__webglTexture),J(wt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)H(Z.__webglFramebuffer[Ft],C,S,i.COLOR_ATTACHMENT0,wt,Ft);else H(Z.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,wt,0);m(S)&&f(wt),e.unbindTexture()}C.depthBuffer&&q(C)}function Lt(C){const S=C.textures;for(let Z=0,lt=S.length;Z<lt;Z++){const ct=S[Z];if(m(ct)){const at=x(C),Et=n.get(ct).__webglTexture;e.bindTexture(at,Et),f(at),e.unbindTexture()}}}const vt=[],I=[];function dt(C){if(C.samples>0){if(qt(C)===!1){const S=C.textures,Z=C.width,lt=C.height;let ct=i.COLOR_BUFFER_BIT;const at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(C),wt=S.length>1;if(wt)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Ft]);const le=n.get(S[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,Z,lt,0,0,Z,lt,ct,i.NEAREST),c===!0&&(vt.length=0,I.length=0,vt.push(i.COLOR_ATTACHMENT0+Ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(vt.push(at),I.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Ft]);const le=n.get(S[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,le,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ht(C){return Math.min(s.maxSamples,C.samples)}function qt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function yt(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ne(C,S){const Z=C.colorSpace,lt=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==Ni&&Z!==Fn&&(Me.getTransfer(Z)===Ee?(lt!==cn||ct!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),S}function pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=et,this.setTexture3D=O,this.setTextureCube=D,this.rebindTextures=it,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=H,this.useMultisampledRTT=qt}function Op(i,t){function e(n,s=Fn){let r;const a=Me.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===la)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Io)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lo)return i.BYTE;if(n===Do)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===oa)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Ji)return i.HALF_FLOAT;if(n===No)return i.ALPHA;if(n===Uo)return i.RGB;if(n===cn)return i.RGBA;if(n===Fo)return i.LUMINANCE;if(n===Bo)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===ha)return i.RED_INTEGER;if(n===zo)return i.RG;if(n===ua)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===Tr||n===Ar||n===Rr||n===Cr)if(a===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Is||n===Ns||n===Us||n===Fs)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Is)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ns)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Us)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fs)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bs||n===Os||n===zs)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bs||n===Os)return a===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zs)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vs||n===Hs||n===ks||n===Gs||n===Ws||n===Xs||n===qs||n===Ys||n===Zs||n===Ks||n===js||n===$s||n===Qs||n===Js)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vs)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hs)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ks)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gs)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ws)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xs)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qs)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ys)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zs)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ks)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===js)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$s)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qs)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Js)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pr||n===ta||n===ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pr)return a===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===na||n===ia||n===ra)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vp=`
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

}`;class Hp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:zp,fragmentShader:Vp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new hn(new zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kp extends ai{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,d=null,h=null,l=null,u=null,p=null,v=null;const g=new Hp,m=e.getContextAttributes();let f=null,x=null;const M=[],_=[],T=new ue;let P=null;const N=new tn;N.viewport=new be;const L=new tn;L.viewport=new be;const E=[N,L],y=new oh;let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let R=M[A];return R===void 0&&(R=new hs,M[A]=R),R.getTargetRaySpace()},this.getControllerGrip=function(A){let R=M[A];return R===void 0&&(R=new hs,M[A]=R),R.getGripSpace()},this.getHand=function(A){let R=M[A];return R===void 0&&(R=new hs,M[A]=R),R.getHandSpace()};function U(A){const R=_.indexOf(A.inputSource);if(R===-1)return;const H=M[R];H!==void 0&&(H.update(A.inputSource,A.frame,d||a),H.dispatchEvent({type:A.type,data:A.inputSource}))}function W(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let A=0;A<M.length;A++){const R=_[A];R!==null&&(_[A]=null,M[A].disconnect(R))}b=null,B=null,g.reset(),t.setRenderTarget(f),p=null,u=null,l=null,s=null,x=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){o=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(A){d=A},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(A){if(s=A,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,K=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=m.stencil?Ii:Ai,K=m.stencil?Di:ii);const q={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};l=new XRWebGLBinding(s,e),u=l.createProjectionLayer(q),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ri(u.textureWidth,u.textureHeight,{format:cn,type:Rn,depthTexture:new Jo(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const H={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ri(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),d=null,a=await s.requestReferenceSpace(o),z.setContext(s),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(A){for(let R=0;R<A.removed.length;R++){const H=A.removed[R],K=_.indexOf(H);K>=0&&(_[K]=null,M[K].disconnect(H))}for(let R=0;R<A.added.length;R++){const H=A.added[R];let K=_.indexOf(H);if(K===-1){for(let q=0;q<M.length;q++)if(q>=_.length){_.push(H),K=q;break}else if(_[q]===null){_[q]=H,K=q;break}if(K===-1)break}const nt=M[K];nt&&nt.connect(H)}}const et=new $,O=new $;function D(A,R,H){et.setFromMatrixPosition(R.matrixWorld),O.setFromMatrixPosition(H.matrixWorld);const K=et.distanceTo(O),nt=R.projectionMatrix.elements,q=H.projectionMatrix.elements,it=nt[14]/(nt[10]-1),mt=nt[14]/(nt[10]+1),Lt=(nt[9]+1)/nt[5],vt=(nt[9]-1)/nt[5],I=(nt[8]-1)/nt[0],dt=(q[8]+1)/q[0],ht=it*I,qt=it*dt,yt=K/(-I+dt),ne=yt*-I;if(R.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(ne),A.translateZ(yt),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),nt[10]===-1)A.projectionMatrix.copy(R.projectionMatrix),A.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const pt=it+yt,C=mt+yt,S=ht-ne,Z=qt+(K-ne),lt=Lt*mt/C*pt,ct=vt*mt/C*pt;A.projectionMatrix.makePerspective(S,Z,lt,ct,pt,C),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}}function tt(A,R){R===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(R.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(s===null)return;let R=A.near,H=A.far;g.texture!==null&&(g.depthNear>0&&(R=g.depthNear),g.depthFar>0&&(H=g.depthFar)),y.near=L.near=N.near=R,y.far=L.far=N.far=H,(b!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,B=y.far),N.layers.mask=A.layers.mask|2,L.layers.mask=A.layers.mask|4,y.layers.mask=N.layers.mask|L.layers.mask;const K=A.parent,nt=y.cameras;tt(y,K);for(let q=0;q<nt.length;q++)tt(nt[q],K);nt.length===2?D(y,N,L):y.projectionMatrix.copy(N.projectionMatrix),Q(A,y,K)};function Q(A,R,H){H===null?A.matrix.copy(R.matrixWorld):(A.matrix.copy(H.matrixWorld),A.matrix.invert(),A.matrix.multiply(R.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(R.projectionMatrix),A.projectionMatrixInverse.copy(R.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=ji*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(A){c=A,u!==null&&(u.fixedFoveation=A),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=A)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let F=null;function J(A,R){if(h=R.getViewerPose(d||a),v=R,h!==null){const H=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let K=!1;H.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let it=0;it<H.length;it++){const mt=H[it];let Lt=null;if(p!==null)Lt=p.getViewport(mt);else{const I=l.getViewSubImage(u,mt);Lt=I.viewport,it===0&&(t.setRenderTargetTextures(x,I.colorTexture,u.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(x))}let vt=E[it];vt===void 0&&(vt=new tn,vt.layers.enable(it),vt.viewport=new be,E[it]=vt),vt.matrix.fromArray(mt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(mt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),it===0&&(y.matrix.copy(vt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(vt)}const nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&l){const it=l.getDepthInformation(H[0]);it&&it.isValid&&it.texture&&g.init(t,it,s.renderState)}}for(let H=0;H<M.length;H++){const K=_[H],nt=M[H];K!==null&&nt!==void 0&&nt.update(K,R,d||a)}F&&F(A,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),v=null}const z=new il;z.setAnimationLoop(J),this.setAnimationLoop=function(A){F=A},this.dispose=function(){}}}const jn=new vn,Gp=new De;function Wp(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,jo(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),l(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,M):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,jn.copy(_),jn.x*=-1,jn.y*=-1,jn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(jn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function d(x,M){let _=s[x.id];_===void 0&&(v(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(x,T);const P=t.render.frame;r[x.id]!==P&&(u(x),r[x.id]=P)}function h(x){const M=l();x.__bindingPointIndex=M;const _=i.createBuffer(),T=x.__size,P=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function l(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=s[x.id],_=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,N=_.length;P<N;P++){const L=Array.isArray(_[P])?_[P]:[_[P]];for(let E=0,y=L.length;E<y;E++){const b=L[E];if(p(b,P,E,T)===!0){const B=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let X=0;X<U.length;X++){const et=U[X],O=g(et);typeof et=="number"||typeof et=="boolean"?(b.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,B+W,b.__data)):et.isMatrix3?(b.__data[0]=et.elements[0],b.__data[1]=et.elements[1],b.__data[2]=et.elements[2],b.__data[3]=0,b.__data[4]=et.elements[3],b.__data[5]=et.elements[4],b.__data[6]=et.elements[5],b.__data[7]=0,b.__data[8]=et.elements[6],b.__data[9]=et.elements[7],b.__data[10]=et.elements[8],b.__data[11]=0):(et.toArray(b.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,_,T){const P=x.value,N=M+"_"+_;if(T[N]===void 0)return typeof P=="number"||typeof P=="boolean"?T[N]=P:T[N]=P.clone(),!0;{const L=T[N];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return T[N]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function v(x){const M=x.uniforms;let _=0;const T=16;for(let N=0,L=M.length;N<L;N++){const E=Array.isArray(M[N])?M[N]:[M[N]];for(let y=0,b=E.length;y<b;y++){const B=E[y],U=Array.isArray(B.value)?B.value:[B.value];for(let W=0,X=U.length;W<X;W++){const et=U[W],O=g(et),D=_%T,tt=D%O.boundary,Q=D+tt;_+=tt,Q!==0&&T-Q<O.storage&&(_+=T-Q),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=O.storage}}}const P=_%T;return P>0&&(_+=T-P),x.__size=_,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:d,dispose:f}}class qp{constructor(t={}){const{canvas:e=yc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=zn,this.toneMappingExposure=1;const _=this;let T=!1,P=0,N=0,L=null,E=-1,y=null;const b=new be,B=new be;let U=null;const W=new ye(0);let X=0,et=e.width,O=e.height,D=1,tt=null,Q=null;const F=new be(0,0,et,O),J=new be(0,0,et,O);let z=!1;const A=new _a;let R=!1,H=!1;this.transmissionResolutionScale=1;const K=new De,nt=new De,q=new $,it=new be,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function vt(){return L===null?D:1}let I=n;function dt(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${aa}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),I===null){const k="webgl2";if(I=dt(k,w),I===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,qt,yt,ne,pt,C,S,Z,lt,ct,at,Et,wt,Ft,le,St,kt,jt,Qt,Xt,ce,ie,ve,G;function Pt(){ht=new ef(I),ht.init(),ie=new Op(I,ht),qt=new Zd(I,ht,t,ie),yt=new Fp(I,ht),qt.reverseDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),ne=new sf(I),pt=new Ep,C=new Bp(I,ht,yt,pt,qt,ie,ne),S=new jd(_),Z=new tf(_),lt=new hh(I),ve=new qd(I,lt),ct=new nf(I,lt,ne,ve),at=new of(I,ct,lt,ne),Qt=new af(I,qt,C),St=new Kd(pt),Et=new Sp(_,S,Z,ht,qt,ve,St),wt=new Wp(_,pt),Ft=new bp,le=new Lp(ht),jt=new Xd(_,S,Z,yt,at,p,c),kt=new Np(_,at,qt),G=new Xp(I,ne,qt,yt),Xt=new Yd(I,ht,ne),ce=new rf(I,ht,ne),ne.programs=Et.programs,_.capabilities=qt,_.extensions=ht,_.properties=pt,_.renderLists=Ft,_.shadowMap=kt,_.state=yt,_.info=ne}Pt();const ot=new kp(_,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(et,O,!1))},this.getSize=function(w){return w.set(et,O)},this.setSize=function(w,k,Y=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,O=k,e.width=Math.floor(w*D),e.height=Math.floor(k*D),Y===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(et*D,O*D).floor()},this.setDrawingBufferSize=function(w,k,Y){et=w,O=k,D=Y,e.width=Math.floor(w*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,k,Y,j){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,k,Y,j),yt.viewport(b.copy(F).multiplyScalar(D).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,k,Y,j){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,k,Y,j),yt.scissor(B.copy(J).multiplyScalar(D).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){yt.setScissorTest(z=w)},this.setOpaqueSort=function(w){tt=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,Y=!0){let j=0;if(w){let V=!1;if(L!==null){const xt=L.texture.format;V=xt===da||xt===ua||xt===ha}if(V){const xt=L.texture.type,Rt=xt===Rn||xt===ii||xt===Ki||xt===Di||xt===la||xt===ca,Ut=jt.getClearColor(),Gt=jt.getClearAlpha(),$t=Ut.r,Wt=Ut.g,Kt=Ut.b;Rt?(v[0]=$t,v[1]=Wt,v[2]=Kt,v[3]=Gt,I.clearBufferuiv(I.COLOR,0,v)):(g[0]=$t,g[1]=Wt,g[2]=Kt,g[3]=Gt,I.clearBufferiv(I.COLOR,0,g))}else j|=I.COLOR_BUFFER_BIT}k&&(j|=I.DEPTH_BUFFER_BIT),Y&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),jt.dispose(),Ft.dispose(),le.dispose(),pt.dispose(),S.dispose(),Z.dispose(),at.dispose(),ve.dispose(),G.dispose(),Et.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",gt),ot.removeEventListener("sessionend",_t),ee.stop()};function ft(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ne.autoReset,k=kt.enabled,Y=kt.autoUpdate,j=kt.needsUpdate,V=kt.type;Pt(),ne.autoReset=w,kt.enabled=k,kt.autoUpdate=Y,kt.needsUpdate=j,kt.type=V}function Ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function se(w){const k=w.target;k.removeEventListener("dispose",se),Se(k)}function Se(w){Le(w),pt.remove(w)}function Le(w){const k=pt.get(w).programs;k!==void 0&&(k.forEach(function(Y){Et.releaseProgram(Y)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Y,j,V,xt){k===null&&(k=mt);const Rt=V.isMesh&&V.matrixWorld.determinant()<0,Ut=bt(w,k,Y,j,V);yt.setMaterial(j,Rt);let Gt=Y.index,$t=1;if(j.wireframe===!0){if(Gt=ct.getWireframeAttribute(Y),Gt===void 0)return;$t=2}const Wt=Y.drawRange,Kt=Y.attributes.position;let te=Wt.start*$t,fe=(Wt.start+Wt.count)*$t;xt!==null&&(te=Math.max(te,xt.start*$t),fe=Math.min(fe,(xt.start+xt.count)*$t)),Gt!==null?(te=Math.max(te,0),fe=Math.min(fe,Gt.count)):Kt!=null&&(te=Math.max(te,0),fe=Math.min(fe,Kt.count));const xe=fe-te;if(xe<0||xe===1/0)return;ve.setup(V,j,Ut,Y,Gt);let me,re=Xt;if(Gt!==null&&(me=lt.get(Gt),re=ce,re.setIndex(me)),V.isMesh)j.wireframe===!0?(yt.setLineWidth(j.wireframeLinewidth*vt()),re.setMode(I.LINES)):re.setMode(I.TRIANGLES);else if(V.isLine){let Zt=j.linewidth;Zt===void 0&&(Zt=1),yt.setLineWidth(Zt*vt()),V.isLineSegments?re.setMode(I.LINES):V.isLineLoop?re.setMode(I.LINE_LOOP):re.setMode(I.LINE_STRIP)}else V.isPoints?re.setMode(I.POINTS):V.isSprite&&re.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)$n("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))re.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Zt=V._multiDrawStarts,Te=V._multiDrawCounts,Vt=V._multiDrawCount,Re=Gt?lt.get(Gt).bytesPerElement:1,Ce=pt.get(j).currentProgram.getUniforms();for(let Ie=0;Ie<Vt;Ie++)Ce.setValue(I,"_gl_DrawID",Ie),re.render(Zt[Ie]/Re,Te[Ie])}else if(V.isInstancedMesh)re.renderInstances(te,xe,V.count);else if(Y.isInstancedBufferGeometry){const Zt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,Zt);re.renderInstances(te,xe,Te)}else re.render(te,xe)};function ae(w,k,Y){w.transparent===!0&&w.side===wn&&w.forceSinglePass===!1?(w.side=Ke,w.needsUpdate=!0,Dt(w,k,Y),w.side=Vn,w.needsUpdate=!0,Dt(w,k,Y),w.side=wn):Dt(w,k,Y)}this.compile=function(w,k,Y=null){Y===null&&(Y=w),f=le.get(Y),f.init(k),M.push(f),Y.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),w!==Y&&w.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const j=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xt=V.material;if(xt)if(Array.isArray(xt))for(let Rt=0;Rt<xt.length;Rt++){const Ut=xt[Rt];ae(Ut,Y,V),j.add(Ut)}else ae(xt,Y,V),j.add(xt)}),f=M.pop(),j},this.compileAsync=function(w,k,Y=null){const j=this.compile(w,k,Y);return new Promise(V=>{function xt(){if(j.forEach(function(Rt){pt.get(Rt).currentProgram.isReady()&&j.delete(Rt)}),j.size===0){V(w);return}setTimeout(xt,10)}ht.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let st=null;function ut(w){st&&st(w)}function gt(){ee.stop()}function _t(){ee.start()}const ee=new il;ee.setAnimationLoop(ut),typeof self<"u"&&ee.setContext(self),this.setAnimationLoop=function(w){st=w,ot.setAnimationLoop(w),w===null?ee.stop():ee.start()},ot.addEventListener("sessionstart",gt),ot.addEventListener("sessionend",_t),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(k),k=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,L),f=le.get(w,M.length),f.init(k),M.push(f),nt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),A.setFromProjectionMatrix(nt),H=this.localClippingEnabled,R=St.init(this.clippingPlanes,H),m=Ft.get(w,x.length),m.init(),x.push(m),ot.enabled===!0&&ot.isPresenting===!0){const xt=_.xr.getDepthSensingMesh();xt!==null&&Bt(xt,k,-1/0,_.sortObjects)}Bt(w,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(tt,Q),Lt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Lt&&jt.addToRenderList(m,w),this.info.render.frame++,R===!0&&St.beginShadows();const Y=f.state.shadowsArray;kt.render(Y,w,k),R===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,V=m.transmissive;if(f.setupLights(),k.isArrayCamera){const xt=k.cameras;if(V.length>0)for(let Rt=0,Ut=xt.length;Rt<Ut;Rt++){const Gt=xt[Rt];Nt(j,V,w,Gt)}Lt&&jt.render(w);for(let Rt=0,Ut=xt.length;Rt<Ut;Rt++){const Gt=xt[Rt];Tt(m,w,Gt,Gt.viewport)}}else V.length>0&&Nt(j,V,w,k),Lt&&jt.render(w),Tt(m,w,k);L!==null&&N===0&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,k),ve.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],R===!0&&St.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Bt(w,k,Y,j){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||A.intersectsSprite(w)){j&&it.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nt);const Rt=at.update(w),Ut=w.material;Ut.visible&&m.push(w,Rt,Ut,Y,it.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||A.intersectsObject(w))){const Rt=at.update(w),Ut=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),it.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),it.copy(Rt.boundingSphere.center)),it.applyMatrix4(w.matrixWorld).applyMatrix4(nt)),Array.isArray(Ut)){const Gt=Rt.groups;for(let $t=0,Wt=Gt.length;$t<Wt;$t++){const Kt=Gt[$t],te=Ut[Kt.materialIndex];te&&te.visible&&m.push(w,Rt,te,Y,it.z,Kt)}}else Ut.visible&&m.push(w,Rt,Ut,Y,it.z,null)}}const xt=w.children;for(let Rt=0,Ut=xt.length;Rt<Ut;Rt++)Bt(xt[Rt],k,Y,j)}function Tt(w,k,Y,j){const V=w.opaque,xt=w.transmissive,Rt=w.transparent;f.setupLightsView(Y),R===!0&&St.setGlobalState(_.clippingPlanes,Y),j&&yt.viewport(b.copy(j)),V.length>0&&rt(V,k,Y),xt.length>0&&rt(xt,k,Y),Rt.length>0&&rt(Rt,k,Y),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Nt(w,k,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new ri(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ji:Rn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const xt=f.state.transmissionRenderTarget[j.id],Rt=j.viewport||b;xt.setSize(Rt.z*_.transmissionResolutionScale,Rt.w*_.transmissionResolutionScale);const Ut=_.getRenderTarget();_.setRenderTarget(xt),_.getClearColor(W),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Lt&&jt.render(Y);const Gt=_.toneMapping;_.toneMapping=zn;const $t=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),R===!0&&St.setGlobalState(_.clippingPlanes,j),rt(w,Y,j),C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Kt=0,te=k.length;Kt<te;Kt++){const fe=k[Kt],xe=fe.object,me=fe.geometry,re=fe.material,Zt=fe.group;if(re.side===wn&&xe.layers.test(j.layers)){const Te=re.side;re.side=Ke,re.needsUpdate=!0,At(xe,Y,j,me,re,Zt),re.side=Te,re.needsUpdate=!0,Wt=!0}}Wt===!0&&(C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt))}_.setRenderTarget(Ut),_.setClearColor(W,X),$t!==void 0&&(j.viewport=$t),_.toneMapping=Gt}function rt(w,k,Y){const j=k.isScene===!0?k.overrideMaterial:null;for(let V=0,xt=w.length;V<xt;V++){const Rt=w[V],Ut=Rt.object,Gt=Rt.geometry,$t=j===null?Rt.material:j,Wt=Rt.group;Ut.layers.test(Y.layers)&&At(Ut,k,Y,Gt,$t,Wt)}}function At(w,k,Y,j,V,xt){w.onBeforeRender(_,k,Y,j,V,xt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(_,k,Y,j,w,xt),V.transparent===!0&&V.side===wn&&V.forceSinglePass===!1?(V.side=Ke,V.needsUpdate=!0,_.renderBufferDirect(Y,k,j,V,w,xt),V.side=Vn,V.needsUpdate=!0,_.renderBufferDirect(Y,k,j,V,w,xt),V.side=wn):_.renderBufferDirect(Y,k,j,V,w,xt),w.onAfterRender(_,k,Y,j,V,xt)}function Dt(w,k,Y){k.isScene!==!0&&(k=mt);const j=pt.get(w),V=f.state.lights,xt=f.state.shadowsArray,Rt=V.state.version,Ut=Et.getParameters(w,V.state,xt,k,Y),Gt=Et.getProgramCacheKey(Ut);let $t=j.programs;j.environment=w.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(w.isMeshStandardMaterial?Z:S).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",se),$t=new Map,j.programs=$t);let Wt=$t.get(Gt);if(Wt!==void 0){if(j.currentProgram===Wt&&j.lightsStateVersion===Rt)return Ct(w,Ut),Wt}else Ut.uniforms=Et.getUniforms(w),w.onBeforeCompile(Ut,_),Wt=Et.acquireProgram(Ut,Gt),$t.set(Gt,Wt),j.uniforms=Ut.uniforms;const Kt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Kt.clippingPlanes=St.uniform),Ct(w,Ut),j.needsLights=Jt(w),j.lightsStateVersion=Rt,j.needsLights&&(Kt.ambientLightColor.value=V.state.ambient,Kt.lightProbe.value=V.state.probe,Kt.directionalLights.value=V.state.directional,Kt.directionalLightShadows.value=V.state.directionalShadow,Kt.spotLights.value=V.state.spot,Kt.spotLightShadows.value=V.state.spotShadow,Kt.rectAreaLights.value=V.state.rectArea,Kt.ltc_1.value=V.state.rectAreaLTC1,Kt.ltc_2.value=V.state.rectAreaLTC2,Kt.pointLights.value=V.state.point,Kt.pointLightShadows.value=V.state.pointShadow,Kt.hemisphereLights.value=V.state.hemi,Kt.directionalShadowMap.value=V.state.directionalShadowMap,Kt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Kt.spotShadowMap.value=V.state.spotShadowMap,Kt.spotLightMatrix.value=V.state.spotLightMatrix,Kt.spotLightMap.value=V.state.spotLightMap,Kt.pointShadowMap.value=V.state.pointShadowMap,Kt.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Wt,j.uniformsList=null,Wt}function Yt(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Lr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Ct(w,k){const Y=pt.get(w);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function bt(w,k,Y,j,V){k.isScene!==!0&&(k=mt),C.resetTextureUnits();const xt=k.fog,Rt=j.isMeshStandardMaterial?k.environment:null,Ut=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ni,Gt=(j.isMeshStandardMaterial?Z:S).get(j.envMap||Rt),$t=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Kt=!!Y.morphAttributes.position,te=!!Y.morphAttributes.normal,fe=!!Y.morphAttributes.color;let xe=zn;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=_.toneMapping);const me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,re=me!==void 0?me.length:0,Zt=pt.get(j),Te=f.state.lights;if(R===!0&&(H===!0||w!==y)){const He=w===y&&j.id===E;St.setState(j,w,He)}let Vt=!1;j.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Te.state.version||Zt.outputColorSpace!==Ut||V.isBatchedMesh&&Zt.batching===!1||!V.isBatchedMesh&&Zt.batching===!0||V.isBatchedMesh&&Zt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Zt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Zt.instancing===!1||!V.isInstancedMesh&&Zt.instancing===!0||V.isSkinnedMesh&&Zt.skinning===!1||!V.isSkinnedMesh&&Zt.skinning===!0||V.isInstancedMesh&&Zt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Zt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Zt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Zt.instancingMorph===!1&&V.morphTexture!==null||Zt.envMap!==Gt||j.fog===!0&&Zt.fog!==xt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==St.numPlanes||Zt.numIntersection!==St.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==Wt||Zt.morphTargets!==Kt||Zt.morphNormals!==te||Zt.morphColors!==fe||Zt.toneMapping!==xe||Zt.morphTargetsCount!==re)&&(Vt=!0):(Vt=!0,Zt.__version=j.version);let Re=Zt.currentProgram;Vt===!0&&(Re=Dt(j,k,V));let Ce=!1,Ie=!1,$e=!1;const Ae=Re.getUniforms(),qe=Zt.uniforms;if(yt.useProgram(Re.program)&&(Ce=!0,Ie=!0,$e=!0),j.id!==E&&(E=j.id,Ie=!0),Ce||y!==w){yt.buffers.depth.getReversed()?(K.copy(w.projectionMatrix),Sc(K),Ec(K),Ae.setValue(I,"projectionMatrix",K)):Ae.setValue(I,"projectionMatrix",w.projectionMatrix),Ae.setValue(I,"viewMatrix",w.matrixWorldInverse);const Ye=Ae.map.cameraPosition;Ye!==void 0&&Ye.setValue(I,q.setFromMatrixPosition(w.matrixWorld)),qt.logarithmicDepthBuffer&&Ae.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ae.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ie=!0,$e=!0)}if(V.isSkinnedMesh){Ae.setOptional(I,V,"bindMatrix"),Ae.setOptional(I,V,"bindMatrixInverse");const He=V.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Ae.setValue(I,"boneTexture",He.boneTexture,C))}V.isBatchedMesh&&(Ae.setOptional(I,V,"batchingTexture"),Ae.setValue(I,"batchingTexture",V._matricesTexture,C),Ae.setOptional(I,V,"batchingIdTexture"),Ae.setValue(I,"batchingIdTexture",V._indirectTexture,C),Ae.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Ae.setValue(I,"batchingColorTexture",V._colorsTexture,C));const _e=Y.morphAttributes;if((_e.position!==void 0||_e.normal!==void 0||_e.color!==void 0)&&Qt.update(V,Y,Re),(Ie||Zt.receiveShadow!==V.receiveShadow)&&(Zt.receiveShadow=V.receiveShadow,Ae.setValue(I,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(qe.envMap.value=Gt,qe.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(qe.envMapIntensity.value=k.environmentIntensity),Ie&&(Ae.setValue(I,"toneMappingExposure",_.toneMappingExposure),Zt.needsLights&&It(qe,$e),xt&&j.fog===!0&&wt.refreshFogUniforms(qe,xt),wt.refreshMaterialUniforms(qe,j,D,O,f.state.transmissionRenderTarget[w.id]),Lr.upload(I,Yt(Zt),qe,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Lr.upload(I,Yt(Zt),qe,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ae.setValue(I,"center",V.center),Ae.setValue(I,"modelViewMatrix",V.modelViewMatrix),Ae.setValue(I,"normalMatrix",V.normalMatrix),Ae.setValue(I,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const He=j.uniformsGroups;for(let Ye=0,Hr=He.length;Ye<Hr;Ye++){const Gn=He[Ye];G.update(Gn,Re),G.bind(Gn,Re)}}return Re}function It(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Jt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,k,Y){pt.get(w.texture).__webglTexture=k,pt.get(w.depthTexture).__webglTexture=Y;const j=pt.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const Y=pt.get(w);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const oe=I.createFramebuffer();this.setRenderTarget=function(w,k=0,Y=0){L=w,P=k,N=Y;let j=!0,V=null,xt=!1,Rt=!1;if(w){const Gt=pt.get(w);if(Gt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Gt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Gt.__hasExternalTextures)C.rebindTextures(w,pt.get(w.texture).__webglTexture,pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Kt=w.depthTexture;if(Gt.__boundDepthTexture!==Kt){if(Kt!==null&&pt.has(Kt)&&(w.width!==Kt.image.width||w.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Rt=!0);const Wt=pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?V=Wt[k][Y]:V=Wt[k],xt=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?V=pt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?V=Wt[Y]:V=Wt,b.copy(w.viewport),B.copy(w.scissor),U=w.scissorTest}else b.copy(F).multiplyScalar(D).floor(),B.copy(J).multiplyScalar(D).floor(),U=z;if(Y!==0&&(V=oe),yt.bindFramebuffer(I.FRAMEBUFFER,V)&&j&&yt.drawBuffers(w,V),yt.viewport(b),yt.scissor(B),yt.setScissorTest(U),xt){const Gt=pt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Gt.__webglTexture,Y)}else if(Rt){const Gt=pt.get(w.texture),$t=k;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.__webglTexture,Y,$t)}else if(w!==null&&Y!==0){const Gt=pt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gt.__webglTexture,Y)}E=-1},this.readRenderTargetPixels=function(w,k,Y,j,V,xt,Rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){yt.bindFramebuffer(I.FRAMEBUFFER,Ut);try{const Gt=w.texture,$t=Gt.format,Wt=Gt.type;if(!qt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-j&&Y>=0&&Y<=w.height-V&&I.readPixels(k,Y,j,V,ie.convert($t),ie.convert(Wt),xt)}finally{const Gt=L!==null?pt.get(L).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(w,k,Y,j,V,xt,Rt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){const Gt=w.texture,$t=Gt.format,Wt=Gt.type;if(!qt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-j&&Y>=0&&Y<=w.height-V){yt.bindFramebuffer(I.FRAMEBUFFER,Ut);const Kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Kt),I.bufferData(I.PIXEL_PACK_BUFFER,xt.byteLength,I.STREAM_READ),I.readPixels(k,Y,j,V,ie.convert($t),ie.convert(Wt),0);const te=L!==null?pt.get(L).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,te);const fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Mc(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xt),I.deleteBuffer(Kt),I.deleteSync(fe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,Y=0){w.isTexture!==!0&&($n("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-Y),V=Math.floor(w.image.width*j),xt=Math.floor(w.image.height*j),Rt=k!==null?k.x:0,Ut=k!==null?k.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Rt,Ut,V,xt),yt.unbindTexture()};const Mt=I.createFramebuffer(),he=I.createFramebuffer();this.copyTextureToTexture=function(w,k,Y=null,j=null,V=0,xt=null){w.isTexture!==!0&&($n("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],k=arguments[2],xt=arguments[3]||0,Y=null),xt===null&&(V!==0?($n("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=V,V=0):xt=0);let Rt,Ut,Gt,$t,Wt,Kt,te,fe,xe;const me=w.isCompressedTexture?w.mipmaps[xt]:w.image;if(Y!==null)Rt=Y.max.x-Y.min.x,Ut=Y.max.y-Y.min.y,Gt=Y.isBox3?Y.max.z-Y.min.z:1,$t=Y.min.x,Wt=Y.min.y,Kt=Y.isBox3?Y.min.z:0;else{const _e=Math.pow(2,-V);Rt=Math.floor(me.width*_e),Ut=Math.floor(me.height*_e),w.isDataArrayTexture?Gt=me.depth:w.isData3DTexture?Gt=Math.floor(me.depth*_e):Gt=1,$t=0,Wt=0,Kt=0}j!==null?(te=j.x,fe=j.y,xe=j.z):(te=0,fe=0,xe=0);const re=ie.convert(k.format),Zt=ie.convert(k.type);let Te;k.isData3DTexture?(C.setTexture3D(k,0),Te=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Te=I.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Te=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Vt=I.getParameter(I.UNPACK_ROW_LENGTH),Re=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ce=I.getParameter(I.UNPACK_SKIP_PIXELS),Ie=I.getParameter(I.UNPACK_SKIP_ROWS),$e=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Kt);const Ae=w.isDataArrayTexture||w.isData3DTexture,qe=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const _e=pt.get(w),He=pt.get(k),Ye=pt.get(_e.__renderTarget),Hr=pt.get(He.__renderTarget);yt.bindFramebuffer(I.READ_FRAMEBUFFER,Ye.__webglFramebuffer),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Gn=0;Gn<Gt;Gn++)Ae&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.get(w).__webglTexture,V,Kt+Gn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.get(k).__webglTexture,xt,xe+Gn)),I.blitFramebuffer($t,Wt,Rt,Ut,te,fe,Rt,Ut,I.DEPTH_BUFFER_BIT,I.NEAREST);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||pt.has(w)){const _e=pt.get(w),He=pt.get(k);yt.bindFramebuffer(I.READ_FRAMEBUFFER,Mt),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,he);for(let Ye=0;Ye<Gt;Ye++)Ae?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.__webglTexture,V,Kt+Ye):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_e.__webglTexture,V),qe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,xt,xe+Ye):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,He.__webglTexture,xt),V!==0?I.blitFramebuffer($t,Wt,Rt,Ut,te,fe,Rt,Ut,I.COLOR_BUFFER_BIT,I.NEAREST):qe?I.copyTexSubImage3D(Te,xt,te,fe,xe+Ye,$t,Wt,Rt,Ut):I.copyTexSubImage2D(Te,xt,te,fe,$t,Wt,Rt,Ut);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else qe?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Te,xt,te,fe,xe,Rt,Ut,Gt,re,Zt,me.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,xt,te,fe,xe,Rt,Ut,Gt,re,me.data):I.texSubImage3D(Te,xt,te,fe,xe,Rt,Ut,Gt,re,Zt,me):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xt,te,fe,Rt,Ut,re,Zt,me.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xt,te,fe,me.width,me.height,re,me.data):I.texSubImage2D(I.TEXTURE_2D,xt,te,fe,Rt,Ut,re,Zt,me);I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Re),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e),xt===0&&k.generateMipmaps&&I.generateMipmap(Te),yt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,Y=null,j=null,V=0){return w.isTexture!==!0&&($n("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,w=arguments[2],k=arguments[3],V=arguments[4]||0),$n('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,Y,j,V)},this.initRenderTarget=function(w){pt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){P=0,N=0,L=null,yt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}function wr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ll={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(d,h){if(!s[d]){if(!n[d]){var l=typeof wr=="function"&&wr;if(!h&&l)return l(d,!0);if(o)return o(d,!0);throw new Error("Cannot find module '"+d+"'")}var u=s[d]={exports:{}};n[d][0].call(u.exports,function(p){var v=n[d][1][p];return a(v||p)},u,u.exports,e,n,s,r)}return s[d].exports}for(var o=typeof wr=="function"&&wr,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(d){d=d||{},this.lowerBound=new r,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new r,d.upperBound&&this.upperBound.copy(d.upperBound)}var o=new r;a.prototype.setFromPoints=function(d,h,l,u){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(d[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<d.length;m++){var f=d[m];g&&(g.vmult(f,o),f=o),f.x>v.x&&(v.x=f.x),f.x<p.x&&(p.x=f.x),f.y>v.y&&(v.y=f.y),f.y<p.y&&(p.y=f.y),f.z>v.z&&(v.z=f.z),f.z<p.z&&(p.z=f.z)}return h&&(h.vadd(p,p),h.vadd(v,v)),u&&(p.x-=u,p.y-=u,p.z-=u,v.x+=u,v.y+=u,v.z+=u),this},a.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(d){var h=d.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=d.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=d.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=d.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=d.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=d.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,p=d.upperBound;return(u.x<=l.x&&l.x<=p.x||h.x<=p.x&&p.x<=l.x)&&(u.y<=l.y&&l.y<=p.y||h.y<=p.y&&p.y<=l.y)&&(u.z<=l.z&&l.z<=p.z||h.z<=p.z&&p.z<=l.z)},a.prototype.contains=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,p=d.upperBound;return h.x<=u.x&&l.x>=p.x&&h.y<=u.y&&l.y>=p.y&&h.z<=u.z&&l.z>=p.z},a.prototype.getCorners=function(d,h,l,u,p,v,g,m){var f=this.lowerBound,x=this.upperBound;d.copy(f),h.set(x.x,f.y,f.z),l.set(x.x,x.y,f.z),u.set(f.x,x.y,x.z),p.set(x.x,f.y,f.z),v.set(f.x,x.y,f.z),g.set(f.x,f.y,x.z),m.copy(x)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(d,h){var l=c,u=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],x=l[6],M=l[7];this.getCorners(u,p,v,g,m,f,x,M);for(var _=0;_!==8;_++){var T=l[_];d.pointToLocal(T,T)}return h.setFromPoints(l)},a.prototype.toWorldFrame=function(d,h){var l=c,u=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],x=l[6],M=l[7];this.getCorners(u,p,v,g,m,f,x,M);for(var _=0;_!==8;_++){var T=l[_];d.pointToWorld(T,T)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var c=o;o=a,a=c}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,c){if(a=a.index,o=o.index,o>a){var d=o;o=a,a=d}this.matrix[(a*(a+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!((g.collisionFilterGroup&m.collisionFilterMask)===0||(m.collisionFilterGroup&g.collisionFilterMask)===0||((g.type&d)!==0||g.sleepState===r.SLEEPING)&&((m.type&d)!==0||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,f,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,f,x):this.doBoundingSphereBroadphase(g,m,f,x)};var h=new a;new a,new o,new a,c.prototype.doBoundingSphereBroadphase=function(g,m,f,x){var M=h;m.position.vsub(g.position,M);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),T=M.norm2();T<_&&(f.push(g),x.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,f,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(f.push(g),x.push(m))};var l={keys:[]},u=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var f=l,x=u,M=p,_=g.length,T=0;T!==_;T++)x[T]=g[T],M[T]=m[T];g.length=0,m.length=0;for(var T=0;T!==_;T++){var P=x[T].id,N=M[T].id,L=P<N?P+","+N:N+","+P;f[L]=T,f.keys.push(L)}for(var T=0;T!==f.keys.length;T++){var L=f.keys.pop(),E=f[L];g.push(x[E]),m.push(M[E]),delete f[L]}},c.prototype.setWorld=function(g){};var v=new a;c.boundingSphereCheck=function(g,m){var f=v;return g.position.vsub(m.position,f),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},c.prototype.aabbQuery=function(g,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=c;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,u,p,v){r.apply(this),this.nx=u||10,this.ny=p||10,this.nz=v||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var d=new a;new a,c.prototype.collisionPairs=function(h,l,u){var p=h.numObjects(),v=h.bodies,K=this.aabbMax,H=this.aabbMin,g=this.nx,m=this.ny,f=this.nz,x=m*f,M=f,_=1,T=K.x,P=K.y,N=K.z,L=H.x,E=H.y,y=H.z,b=g/(T-L),B=m/(P-E),U=f/(N-y),W=(T-L)/g,X=(P-E)/m,et=(N-y)/f,O=Math.sqrt(W*W+X*X+et*et)*.5,D=o.types,tt=D.SPHERE,Q=D.PLANE;D.BOX,D.COMPOUND,D.CONVEXPOLYHEDRON;for(var F=this.bins,J=this.binLengths,z=this.bins.length,A=0;A!==z;A++)J[A]=0;var R=Math.ceil,H=Math.min,K=Math.max;function nt(le,St,kt,jt,Qt,Xt,ce){var ie=(le-L)*b|0,ve=(St-E)*B|0,G=(kt-y)*U|0,Pt=R((jt-L)*b),ot=R((Qt-E)*B),ft=R((Xt-y)*U);ie<0?ie=0:ie>=g&&(ie=g-1),ve<0?ve=0:ve>=m&&(ve=m-1),G<0?G=0:G>=f&&(G=f-1),Pt<0?Pt=0:Pt>=g&&(Pt=g-1),ot<0?ot=0:ot>=m&&(ot=m-1),ft<0?ft=0:ft>=f&&(ft=f-1),ie*=x,ve*=M,G*=_,Pt*=x,ot*=M,ft*=_;for(var zt=ie;zt<=Pt;zt+=x)for(var Ot=ve;Ot<=ot;Ot+=M)for(var se=G;se<=ft;se+=_){var Se=zt+Ot+se;F[Se][J[Se]++]=ce}}for(var A=0;A!==p;A++){var q=v[A],it=q.shape;switch(it.type){case tt:var mt=q.position.x,Lt=q.position.y,vt=q.position.z,I=it.radius;nt(mt-I,Lt-I,vt-I,mt+I,Lt+I,vt+I,q);break;case Q:it.worldNormalNeedsUpdate&&it.computeWorldNormal(q.quaternion);var dt=it.worldNormal,ht=L+W*.5-q.position.x,qt=E+X*.5-q.position.y,yt=y+et*.5-q.position.z,ne=d;ne.set(ht,qt,yt);for(var pt=0,C=0;pt!==g;pt++,C+=x,ne.y=qt,ne.x+=W)for(var S=0,Z=0;S!==m;S++,Z+=M,ne.z=yt,ne.y+=X)for(var lt=0,ct=0;lt!==f;lt++,ct+=_,ne.z+=et)if(ne.dot(dt)<O){var at=C+Z+ct;F[at][J[at]++]=q}break;default:q.aabbNeedsUpdate&&q.computeAABB(),nt(q.aabb.lowerBound.x,q.aabb.lowerBound.y,q.aabb.lowerBound.z,q.aabb.upperBound.x,q.aabb.upperBound.y,q.aabb.upperBound.z,q);break}}for(var A=0;A!==z;A++){var Et=J[A];if(Et>1)for(var wt=F[A],pt=0;pt!==Et;pt++)for(var q=wt[pt],S=0;S!==pt;S++){var Ft=wt[S];this.needBroadphaseCollision(q,Ft)&&this.intersectionTest(q,Ft,l,u)}}this.makePairsUnique(l,u)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,d,h){var l=c.bodies,u=l.length,p,v,g,m;for(p=0;p!==u;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,d,h)},new a,o.prototype.aabbQuery=function(c,d,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var u=c.bodies[l];u.aabbNeedsUpdate&&u.computeAABB(),u.aabb.overlaps(d)&&h.push(u)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var c=o;o=a,a=c}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,c){if(a=a.id,o=o.id,o>a){var d=o;o=a,a=d}c?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=l;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),d=e("../shapes/Shape"),h=e("../collision/AABB");function l(z,A){this.from=z?z.clone():new r,this.to=A?A.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(R){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var u=new h,p=[];l.prototype.intersectWorld=function(z,A){return this.mode=A.mode||l.ANY,this.result=A.result||new c,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(u),p.length=0,z.broadphase.aabbQuery(z,u,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(z,A,R,H){H.vsub(A,Q),R.vsub(A,v),z.vsub(A,g);var K=Q.dot(Q),nt=Q.dot(v),q=Q.dot(g),it=v.dot(v),mt=v.dot(g),Lt,vt;return(Lt=it*q-nt*mt)>=0&&(vt=K*mt-nt*q)>=0&&Lt+vt<K*it-nt*nt}var f=new r,x=new a;l.prototype.intersectBody=function(z,A){A&&(this.result=A,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!z.collisionResponse)&&!((this.collisionFilterGroup&z.collisionFilterMask)===0||(z.collisionFilterGroup&this.collisionFilterMask)===0))for(var H=f,K=x,nt=0,q=z.shapes.length;nt<q;nt++){var it=z.shapes[nt];if(!(R&&!it.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[nt],K),z.quaternion.vmult(z.shapeOffsets[nt],H),H.vadd(z.position,H),this.intersectShape(it,K,H,z),this.result._shouldStop))break}},l.prototype.intersectBodies=function(z,A){A&&(this.result=A,this._updateDirection());for(var R=0,H=z.length;!this.result._shouldStop&&R<H;R++)this.intersectBody(z[R])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(z,A,R,H){var K=this.from,nt=J(K,this._direction,R);if(!(nt>z.boundingSphereRadius)){var q=this[z.type];q&&q.call(this,z,A,R,H)}},new r,new r;var M=new r,_=new r,T=new r,P=new r;new r,new c,l.prototype.intersectBox=function(z,A,R,H){return this.intersectConvex(z.convexPolyhedronRepresentation,A,R,H)},l.prototype[d.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(z,A,R,H){var K=this.from,nt=this.to,q=this._direction,it=new r(0,0,1);A.vmult(it,it);var mt=new r;K.vsub(R,mt);var Lt=mt.dot(it);nt.vsub(R,mt);var vt=mt.dot(it);if(!(Lt*vt>0)&&!(K.distanceTo(nt)<Lt)){var I=it.dot(q);if(!(Math.abs(I)<this.precision)){var dt=new r,ht=new r,qt=new r;K.vsub(R,dt);var yt=-it.dot(dt)/I;q.scale(yt,ht),K.vadd(ht,qt),this.reportIntersection(it,qt,z,H,-1)}}},l.prototype[d.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(z){var A=this.to,R=this.from;z.lowerBound.x=Math.min(A.x,R.x),z.lowerBound.y=Math.min(A.y,R.y),z.lowerBound.z=Math.min(A.z,R.z),z.upperBound.x=Math.max(A.x,R.x),z.upperBound.y=Math.max(A.y,R.y),z.upperBound.z=Math.max(A.z,R.z)};var N={faceList:[0]};l.prototype.intersectHeightfield=function(z,A,R,H){z.data,z.elementSize;var K=new r,nt=new l(this.from,this.to);o.pointToLocalFrame(R,A,nt.from,nt.from),o.pointToLocalFrame(R,A,nt.to,nt.to);var q=[],it=null,mt=null,Lt=null,vt=null,I=z.getIndexOfPosition(nt.from.x,nt.from.y,q,!1);if(I&&(it=q[0],mt=q[1],Lt=q[0],vt=q[1]),I=z.getIndexOfPosition(nt.to.x,nt.to.y,q,!1),I&&((it===null||q[0]<it)&&(it=q[0]),(Lt===null||q[0]>Lt)&&(Lt=q[0]),(mt===null||q[1]<mt)&&(mt=q[1]),(vt===null||q[1]>vt)&&(vt=q[1])),it!==null){var dt=[];z.getRectMinMax(it,mt,Lt,vt,dt),dt[0],dt[1];for(var ht=it;ht<=Lt;ht++)for(var qt=mt;qt<=vt;qt++){if(this.result._shouldStop||(z.getConvexTrianglePillar(ht,qt,!1),o.pointToWorldFrame(R,A,z.pillarOffset,K),this.intersectConvex(z.pillarConvex,A,K,H,N),this.result._shouldStop))return;z.getConvexTrianglePillar(ht,qt,!0),o.pointToWorldFrame(R,A,z.pillarOffset,K),this.intersectConvex(z.pillarConvex,A,K,H,N)}}},l.prototype[d.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var L=new r,E=new r;l.prototype.intersectSphere=function(z,A,R,H){var K=this.from,nt=this.to,q=z.radius,it=Math.pow(nt.x-K.x,2)+Math.pow(nt.y-K.y,2)+Math.pow(nt.z-K.z,2),mt=2*((nt.x-K.x)*(K.x-R.x)+(nt.y-K.y)*(K.y-R.y)+(nt.z-K.z)*(K.z-R.z)),Lt=Math.pow(K.x-R.x,2)+Math.pow(K.y-R.y,2)+Math.pow(K.z-R.z,2)-Math.pow(q,2),vt=Math.pow(mt,2)-4*it*Lt,I=L,dt=E;if(!(vt<0))if(vt===0)K.lerp(nt,vt,I),I.vsub(R,dt),dt.normalize(),this.reportIntersection(dt,I,z,H,-1);else{var ht=(-mt-Math.sqrt(vt))/(2*it),qt=(-mt+Math.sqrt(vt))/(2*it);if(ht>=0&&ht<=1&&(K.lerp(nt,ht,I),I.vsub(R,dt),dt.normalize(),this.reportIntersection(dt,I,z,H,-1)),this.result._shouldStop)return;qt>=0&&qt<=1&&(K.lerp(nt,qt,I),I.vsub(R,dt),dt.normalize(),this.reportIntersection(dt,I,z,H,-1))}},l.prototype[d.types.SPHERE]=l.prototype.intersectSphere;var y=new r;new r,new r;var b=new r;l.prototype.intersectConvex=function(A,R,H,K,nt){for(var q=y,it=b,mt=nt&&nt.faceList||null,Lt=A.faces,vt=A.vertices,I=A.faceNormals,dt=this._direction,ht=this.from,qt=this.to,yt=ht.distanceTo(qt),ne=mt?mt.length:Lt.length,pt=this.result,C=0;!pt._shouldStop&&C<ne;C++){var S=mt?mt[C]:C,Z=Lt[S],lt=I[S],ct=R,at=H;it.copy(vt[Z[0]]),ct.vmult(it,it),it.vadd(at,it),it.vsub(ht,it),ct.vmult(lt,q);var Et=dt.dot(q);if(!(Math.abs(Et)<this.precision)){var wt=q.dot(it)/Et;if(!(wt<0)){dt.mult(wt,M),M.vadd(ht,M),_.copy(vt[Z[0]]),ct.vmult(_,_),at.vadd(_,_);for(var Ft=1;!pt._shouldStop&&Ft<Z.length-1;Ft++){T.copy(vt[Z[Ft]]),P.copy(vt[Z[Ft+1]]),ct.vmult(T,T),ct.vmult(P,P),at.vadd(T,T),at.vadd(P,P);var le=M.distanceTo(ht);!(m(M,_,T,P)||m(M,T,_,P))||le>yt||this.reportIntersection(q,M,A,K,S)}}}}},l.prototype[d.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var B=new r,U=new r,W=new r,X=new r,et=new r,O=new r;new h;var D=[],tt=new o;l.prototype.intersectTrimesh=function(A,R,H,K,nt){var q=B,it=D,mt=tt,Lt=b,vt=U,I=W,dt=X,ht=O,qt=et;nt&&nt.faceList;var yt=A.indices;A.vertices,A.faceNormals;var ne=this.from,pt=this.to,C=this._direction;mt.position.copy(H),mt.quaternion.copy(R),o.vectorToLocalFrame(H,R,C,vt),o.pointToLocalFrame(H,R,ne,I),o.pointToLocalFrame(H,R,pt,dt);var S=I.distanceSquared(dt);A.tree.rayQuery(this,mt,it);for(var Z=0,lt=it.length;!this.result._shouldStop&&Z!==lt;Z++){var ct=it[Z];A.getNormal(ct,q),A.getVertex(yt[ct*3],_),_.vsub(I,Lt);var at=vt.dot(q),Et=q.dot(Lt)/at;if(!(Et<0)){vt.scale(Et,M),M.vadd(I,M),A.getVertex(yt[ct*3+1],T),A.getVertex(yt[ct*3+2],P);var wt=M.distanceSquared(I);!(m(M,T,_,P)||m(M,_,T,P))||wt>S||(o.vectorToWorldFrame(R,q,qt),o.pointToWorldFrame(H,R,M,ht),this.reportIntersection(qt,ht,A,K,ct))}}it.length=0},l.prototype[d.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(z,A,R,H,K){var nt=this.from,q=this.to,it=nt.distanceTo(A),mt=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(mt.hitFaceIndex=typeof K<"u"?K:-1,this.mode){case l.ALL:this.hasHit=!0,mt.set(nt,q,z,A,R,H,it),mt.hasHit=!0,this.callback(mt);break;case l.CLOSEST:(it<mt.distance||!mt.hasHit)&&(this.hasHit=!0,mt.hasHit=!0,mt.set(nt,q,z,A,R,H,it));break;case l.ANY:this.hasHit=!0,mt.hasHit=!0,mt.set(nt,q,z,A,R,H,it),mt._shouldStop=!0;break}};var Q=new r,F=new r;function J(z,A,R){R.vsub(z,Q);var H=Q.dot(A);A.mult(H,F),F.vadd(z,F);var K=R.distanceTo(F);return K}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,c,d,h,l,u,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(h),this.shape=l,this.body=u,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(d){c.push(d.body)},this._removeBodyHandler=function(d){var h=c.indexOf(d.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortY=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortZ=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},a.prototype.collisionPairs=function(o,c,d){var h=this.axisList,l=h.length,u=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=h[p];for(v=p+1;v<l;v++){var m=h[v];if(!!this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,u))break;this.intersectionTest(g,m,c,d)}}}},a.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,d=o.length,h=0;h!==d;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?a.insertionSortX(o):c===1?a.insertionSortY(o):c===2&&a.insertionSortZ(o)},a.checkBounds=function(o,c,d){var h,l;d===0?(h=o.position.x,l=c.position.x):d===1?(h=o.position.y,l=c.position.y):d===2&&(h=o.position.z,l=c.position.z);var u=o.boundingRadius,p=c.boundingRadius,v=h+u,g=l-p;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,c=0,d=0,h=0,l=0,u=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var f=p[m],x=f.position.x;o+=x,c+=x*x;var M=f.position.y;d+=M,h+=M*M;var _=f.position.z;l+=_,u+=_*_}var T=c-o*o*g,P=h-d*d*g,N=u-l*l*g;T>P?T>N?this.axisIndex=0:this.axisIndex=2:P>N?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,c,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var u=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<u.length;p++){var v=u[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&d.push(v)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6,v=u.pivotA?u.pivotA.clone():new c,g=u.pivotB?u.pivotB.clone():new c;this.axisA=u.axisA?u.axisA.clone():new c,this.axisB=u.axisB?u.axisB.clone():new c,r.call(this,h,v,l,g,p),this.collideConnected=!!u.collideConnected,this.angle=typeof u.angle<"u"?u.angle:0;var m=this.coneEquation=new a(h,l,u),f=this.twistEquation=new o(h,l,u);this.twistAngle=typeof u.twistAngle<"u"?u.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}d.prototype=new r,d.constructor=d,new c,new c,d.prototype.update=function(){var h=this.bodyA,l=this.bodyB,u=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,u.axisA),l.vectorToWorldFrame(this.axisB,u.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),u.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,c,d){d=r.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=a.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(c,d,h,l){r.call(this,c,d),typeof h>"u"&&(h=c.position.distanceTo(d.position)),typeof l>"u"&&(l=1e6),this.distance=h;var u=this.distanceEquation=new a(c,d);this.equations.push(u),u.minForce=-l,u.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,d=this.bodyB,h=this.distanceEquation,l=this.distance*.5,u=h.ni;d.position.vsub(c.position,u),u.normalize(),u.mult(l,h.ri),u.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(u,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,f=v.pivotB?v.pivotB.clone():new c;r.call(this,u,m,p,f,g);var x=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);x.normalize();var M=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);M.normalize();var _=this.rotationalEquation1=new a(u,p,v),T=this.rotationalEquation2=new a(u,p,v),P=this.motorEquation=new o(u,p,g);P.enabled=!1,this.equations.push(_,T,P)}d.prototype=new r,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(u){this.motorEquation.targetVelocity=u},d.prototype.setMotorMaxForce=function(u){this.motorEquation.maxForce=u,this.motorEquation.minForce=-u};var h=new c,l=new c;d.prototype.update=function(){var u=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,f=h,x=l,M=this.axisA,_=this.axisB;r.prototype.update.call(this),u.quaternion.vmult(M,f),p.quaternion.vmult(_,x),f.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(u.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(d,h,l){l=l||{};var u=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;d.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),d.pointToLocalFrame(g,p),r.call(this,d,p,h,v,u);var m=this.rotationalEquation1=new a(d,h,l),f=this.rotationalEquation2=new a(d,h,l),x=this.rotationalEquation3=new a(d,h,l);this.equations.push(m,f,x)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,u=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),d.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),d.vectorToWorldFrame(o.UNIT_Y,u.axisA),h.vectorToWorldFrame(o.UNIT_Z,u.axisB),d.vectorToWorldFrame(o.UNIT_Z,p.axisA),h.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=c;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(d,h,l,u,p){r.call(this,d,l),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new o,this.pivotB=u?u.clone():new o;var v=this.equationX=new a(d,l),g=this.equationY=new a(d,l),m=this.equationZ=new a(d,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB,l=this.equationX,u=this.equationY,p=this.equationZ;d.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),u.ri.copy(l.ri),u.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6;a.call(this,h,l,-p,p),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.angle=typeof u.angle<"u"?u.angle:0}o.prototype=new a,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.angle)-p.dot(v),_=this.computeGW(),T=this.computeGiMf(),P=-M*l-_*u-h*T;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,f,x){x=typeof x<"u"?x:1e6,r.call(this,m,f,0,x),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,d=new a,h=new a;o.prototype.computeB=function(m){var f=this.a,x=this.b,M=this.bi,_=this.bj,T=this.ri,P=this.rj,N=c,L=d,E=M.velocity,y=M.angularVelocity;M.force,M.torque;var b=_.velocity,B=_.angularVelocity;_.force,_.torque;var U=h,W=this.jacobianElementA,X=this.jacobianElementB,et=this.ni;T.cross(et,N),P.cross(et,L),et.negate(W.spatial),N.negate(W.rotational),X.spatial.copy(et),X.rotational.copy(L),U.copy(_.position),U.vadd(P,U),U.vsub(M.position,U),U.vsub(T,U);var O=et.dot(U),D=this.restitution+1,tt=D*b.dot(et)-D*E.dot(et)+B.dot(L)-y.dot(N),Q=this.computeGiMf(),F=-O*f-tt*x-m*Q;return F};var l=new a,u=new a,p=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,f=u,x=p,M=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,M),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(M,f),m.vsub(f,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,f,x){this.id=o.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,f){var x=m,M=g,_=f;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*M*(1+4*x))},o.prototype.computeB=function(g,m,f){var x=this.computeGW(),M=this.computeGq(),_=this.computeGiMf();return-M*g-x*m-_*f},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.position,_=x.position;return g.spatial.dot(M)+m.spatial.dot(_)};var c=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.velocity,_=x.velocity,T=f.angularVelocity||c,P=x.angularVelocity||c;return g.multiplyVectors(M,T)+m.multiplyVectors(_,P)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.vlambda,_=x.vlambda,T=f.wlambda||c,P=x.wlambda||c;return g.multiplyVectors(M,T)+m.multiplyVectors(_,P)};var d=new a,h=new a,l=new a,u=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.force,_=f.torque,T=x.force,P=x.torque,N=f.invMassSolve,L=x.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(P,u):u.set(0,0,0),M.mult(N,d),T.mult(L,h),g.multiplyVectors(d,l)+m.multiplyVectors(h,u)};var p=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.invMassSolve,_=x.invMassSolve,T=f.invInertiaWorldSolve,P=x.invInertiaWorldSolve,N=M+_;return T&&(T.vmult(g.rotational,p),N+=p.dot(g.rotational)),P&&(P.vmult(m.rotational,p),N+=p.dot(m.rotational)),N};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,f=this.jacobianElementB,x=this.bi,M=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),f.spatial.mult(M.invMassSolve*g,_),M.vlambda.vadd(_,M.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),M.invInertiaWorldSolve&&(M.invInertiaWorldSolve.vmult(f.rotational,_),_.mult(g,_),M.wlambda.vadd(_,M.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,l,u){r.call(this,h,l,-u,u),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,d=new a;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var u=this.ri,p=this.rj,v=c,g=d,m=this.t;u.cross(m,v),p.cross(m,g);var f=this.jacobianElementA,x=this.jacobianElementB;m.negate(f.spatial),v.negate(f.rotational),x.spatial.copy(m),x.rotational.copy(g);var M=this.computeGW(),_=this.computeGiMf(),T=-M*l-h*_;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6;a.call(this,h,l,-p,p),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.maxAngle)-p.dot(v),_=this.computeGW(),T=this.computeGiMf(),P=-M*l-_*u-h*T;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,d,h){h=typeof h<"u"?h:1e6,a.call(this,c,d,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var d=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,u=this.jacobianElementA,p=this.jacobianElementB;u.rotational.copy(h),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*d-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,c,d){d=r.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,c],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},a.prototype.getTrace=function(c){var c=c||new r,d=this.elements;c.x=d[0],c.y=d[4],c.z=d[8]},a.prototype.vmult=function(o,c){c=c||new r;var d=this.elements,h=o.x,l=o.y,u=o.z;return c.x=d[0]*h+d[1]*l+d[2]*u,c.y=d[3]*h+d[4]*l+d[5]*u,c.z=d[6]*h+d[7]*l+d[8]*u,c},a.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},a.prototype.mmult=function(o,c){for(var d=c||new a,h=0;h<3;h++)for(var l=0;l<3;l++){for(var u=0,p=0;p<3;p++)u+=o.elements[h+p*3]*this.elements[p+l*3];d.elements[h+l*3]=u}return d},a.prototype.scale=function(o,c){c=c||new a;for(var d=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*d[3*l+0],h[3*l+1]=o.y*d[3*l+1],h[3*l+2]=o.z*d[3*l+2];return c},a.prototype.solve=function(o,c){c=c||new r;for(var d=3,h=4,l=[],u=0;u<d*h;u++)l.push(0);var u,p;for(u=0;u<3;u++)for(p=0;p<3;p++)l[u+h*p]=this.elements[u+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,f=4,x;do{if(u=g-v,l[u+h*u]===0){for(p=u+1;p<g;p++)if(l[u+h*p]!==0){m=f;do x=f-m,l[x+h*u]+=l[x+h*p];while(--m);break}}if(l[u+h*u]!==0)for(p=u+1;p<g;p++){var M=l[u+h*p]/l[u+h*u];m=f;do x=f-m,l[x+h*p]=x<=u?0:l[x+h*p]-l[x+h*u]*M;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},a.prototype.e=function(o,c,d){if(d===void 0)return this.elements[c+3*o];this.elements[c+3*o]=d},a.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},a.prototype.toString=function(){for(var o="",c=",",d=0;d<9;d++)o+=this.elements[d]+c;return o},a.prototype.reverse=function(o){o=o||new a;for(var c=3,d=6,h=[],l=0;l<c*d;l++)h.push(0);var l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)h[l+d*u]=this.elements[l+3*u];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var p=3,v=p,g,m=d,f;do{if(l=v-p,h[l+d*l]===0){for(u=l+1;u<v;u++)if(h[l+d*u]!==0){g=m;do f=m-g,h[f+d*l]+=h[f+d*u];while(--g);break}}if(h[l+d*l]!==0)for(u=l+1;u<v;u++){var x=h[l+d*u]/h[l+d*l];g=m;do f=m-g,h[f+d*u]=f<=l?0:h[f+d*u]-h[f+d*l]*x;while(--g)}}while(--p);l=2;do{u=l-1;do{var x=h[l+d*u]/h[l+d*l];g=d;do f=d-g,h[f+d*u]=h[f+d*u]-h[f+d*l]*x;while(--g)}while(u--)}while(--l);l=2;do{var x=1/h[l+d*l];g=d;do f=d-g,h[f+d*l]=h[f+d*l]*x;while(--g)}while(l--);l=2;do{u=2;do{if(f=h[c+u+d*l],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,u,f)}while(u--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var c=o.x,d=o.y,h=o.z,l=o.w,u=c+c,p=d+d,v=h+h,g=c*u,m=c*p,f=c*v,x=d*p,M=d*v,_=h*v,T=l*u,P=l*p,N=l*v,L=this.elements;return L[3*0+0]=1-(x+_),L[3*0+1]=m-N,L[3*0+2]=f+P,L[3*1+0]=m+N,L[3*1+1]=1-(g+_),L[3*1+2]=M-T,L[3*2+0]=f-P,L[3*2+1]=M+T,L[3*2+2]=1-(g+x),this},a.prototype.transpose=function(o){o=o||new a;for(var c=o.elements,d=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=d[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(u,p,v,g){this.x=u!==void 0?u:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(u,p,v,g){this.x=u,this.y=p,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(u,p){var v=Math.sin(p*.5);this.x=u.x*v,this.y=u.y*v,this.z=u.z*v,this.w=Math.cos(p*.5)},a.prototype.toAxisAngle=function(u){u=u||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(u.x=this.x,u.y=this.y,u.z=this.z):(u.x=this.x/v,u.y=this.y/v,u.z=this.z/v),[u,p]};var o=new r,c=new r;a.prototype.setFromVectors=function(u,p){if(u.isAntiparallelTo(p)){var v=o,g=c;u.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=u.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(u.norm(),2)*Math.pow(p.norm(),2))+u.dot(p),this.normalize()}};var d=new r,h=new r,l=new r;a.prototype.mult=function(u,p){p=p||new a;var v=this.w,g=d,m=h,f=l;return g.set(this.x,this.y,this.z),m.set(u.x,u.y,u.z),p.w=v*u.w-g.dot(m),g.cross(m,f),p.x=v*m.x+u.w*g.x+f.x,p.y=v*m.y+u.w*g.y+f.y,p.z=v*m.z+u.w*g.z+f.z,p},a.prototype.inverse=function(u){var p=this.x,v=this.y,g=this.z,m=this.w;u=u||new a,this.conjugate(u);var f=1/(p*p+v*v+g*g+m*m);return u.x*=f,u.y*=f,u.z*=f,u.w*=f,u},a.prototype.conjugate=function(u){return u=u||new a,u.x=-this.x,u.y=-this.y,u.z=-this.z,u.w=this.w,u},a.prototype.normalize=function(){var u=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(u=1/u,this.x*=u,this.y*=u,this.z*=u,this.w*=u)},a.prototype.normalizeFast=function(){var u=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=u,this.y*=u,this.z*=u,this.w*=u)},a.prototype.vmult=function(u,p){p=p||new r;var v=u.x,g=u.y,m=u.z,f=this.x,x=this.y,M=this.z,_=this.w,T=_*v+x*m-M*g,P=_*g+M*v-f*m,N=_*m+f*g-x*v,L=-f*v-x*g-M*m;return p.x=T*_+L*-f+P*-M-N*-x,p.y=P*_+L*-x+N*-f-T*-M,p.z=N*_+L*-M+T*-x-P*-f,p},a.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w,this},a.prototype.toEuler=function(u,p){p=p||"YZX";var v,g,m,f=this.x,x=this.y,M=this.z,_=this.w;switch(p){case"YZX":var T=f*x+M*_;if(T>.499&&(v=2*Math.atan2(f,_),g=Math.PI/2,m=0),T<-.499&&(v=-2*Math.atan2(f,_),g=-Math.PI/2,m=0),isNaN(v)){var P=f*f,N=x*x,L=M*M;v=Math.atan2(2*x*_-2*f*M,1-2*N-2*L),g=Math.asin(2*T),m=Math.atan2(2*f*_-2*x*M,1-2*P-2*L)}break;default:throw new Error("Euler order "+p+" not supported yet.")}u.y=v,u.z=g,u.x=m},a.prototype.setFromEuler=function(u,p,v,g){g=g||"XYZ";var m=Math.cos(u/2),f=Math.cos(p/2),x=Math.cos(v/2),M=Math.sin(u/2),_=Math.sin(p/2),T=Math.sin(v/2);return g==="XYZ"?(this.x=M*f*x+m*_*T,this.y=m*_*x-M*f*T,this.z=m*f*T+M*_*x,this.w=m*f*x-M*_*T):g==="YXZ"?(this.x=M*f*x+m*_*T,this.y=m*_*x-M*f*T,this.z=m*f*T-M*_*x,this.w=m*f*x+M*_*T):g==="ZXY"?(this.x=M*f*x-m*_*T,this.y=m*_*x+M*f*T,this.z=m*f*T+M*_*x,this.w=m*f*x-M*_*T):g==="ZYX"?(this.x=M*f*x-m*_*T,this.y=m*_*x+M*f*T,this.z=m*f*T-M*_*x,this.w=m*f*x+M*_*T):g==="YZX"?(this.x=M*f*x+m*_*T,this.y=m*_*x+M*f*T,this.z=m*f*T-M*_*x,this.w=m*f*x-M*_*T):g==="XZY"&&(this.x=M*f*x-m*_*T,this.y=m*_*x-M*f*T,this.z=m*f*T+M*_*x,this.w=m*f*x+M*_*T),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(d){d=d||{},this.position=new r,d.position&&this.position.copy(d.position),this.quaternion=new a,d.quaternion&&this.quaternion.copy(d.quaternion)}var c=new a;o.pointToLocalFrame=function(d,h,l,p){var p=p||new r;return l.vsub(d,p),h.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(d,h){return o.pointToLocalFrame(this.position,this.quaternion,d,h)},o.pointToWorldFrame=function(d,h,l,p){var p=p||new r;return h.vmult(l,p),p.vadd(d,p),p},o.prototype.pointToWorld=function(d,h){return o.pointToWorldFrame(this.position,this.quaternion,d,h)},o.prototype.vectorToWorldFrame=function(d,l){var l=l||new r;return this.quaternion.vmult(d,l),l},o.vectorToWorldFrame=function(d,h,l){return d.vmult(h,l),l},o.vectorToLocalFrame=function(d,h,l,p){var p=p||new r;return h.w*=-1,h.vmult(l,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(h,l,u){this.x=h||0,this.y=l||0,this.z=u||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,l){var u=h.x,p=h.y,v=h.z,g=this.x,m=this.y,f=this.z;return l=l||new a,l.x=m*v-f*p,l.y=f*u-g*v,l.z=g*p-m*u,l},a.prototype.set=function(h,l,u){return this.x=h,this.y=l,this.z=u,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,l=this.y,u=this.z,p=Math.sqrt(h*h+l*l+u*u);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},a.prototype.unit=function(h){h=h||new a;var l=this.x,u=this.y,p=this.z,v=Math.sqrt(l*l+u*u+p*p);return v>0?(v=1/v,h.x=l*v,h.y=u*v,h.z=p*v):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,l=this.y,u=this.z;return Math.sqrt(h*h+l*l+u*u)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var l=this.x,u=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-u)*(g-u)+(m-p)*(m-p))},a.prototype.distanceSquared=function(h){var l=this.x,u=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-u)*(g-u)+(m-p)*(m-p)},a.prototype.mult=function(h,l){l=l||new a;var u=this.x,p=this.y,v=this.z;return l.x=h*u,l.y=h*p,l.z=h*v,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,c=new a;a.prototype.tangents=function(h,l){var u=this.norm();if(u>0){var p=o,v=1/u;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,h)):(g.set(0,1,0),p.cross(g,h)),p.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,l,u){var p=this.x,v=this.y,g=this.z;u.x=p+(h.x-p)*l,u.y=v+(h.y-v)*l,u.z=g+(h.z-g)*l},a.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var d=new a;a.prototype.isAntiparallelTo=function(h,l){return this.negate(d),d.almostEquals(h,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var d=e("../collision/AABB"),h=e("../shapes/Box");function l(b){b=b||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof b.collisionFilterGroup=="number"?b.collisionFilterGroup:1,this.collisionFilterMask=typeof b.collisionFilterMask=="number"?b.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,b.position&&this.position.copy(b.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,b.velocity&&this.velocity.copy(b.velocity),this.initVelocity=new a,this.force=new a;var B=typeof b.mass=="number"?b.mass:0;this.mass=B,this.invMass=B>0?1/B:0,this.material=b.material||null,this.linearDamping=typeof b.linearDamping=="number"?b.linearDamping:.01,this.type=B<=0?l.STATIC:l.DYNAMIC,typeof b.type==typeof l.STATIC&&(this.type=b.type),this.allowSleep=typeof b.allowSleep<"u"?b.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof b.sleepSpeedLimit<"u"?b.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof b.sleepTimeLimit<"u"?b.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new c,b.quaternion&&this.quaternion.copy(b.quaternion),this.initQuaternion=new c,this.angularVelocity=new a,b.angularVelocity&&this.angularVelocity.copy(b.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof b.fixedRotation<"u"?b.fixedRotation:!1,this.angularDamping=typeof b.angularDamping<"u"?b.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new a,b.shape&&this.addShape(b.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var b=this.sleepState;this.sleepState=0,b===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(b){if(this.allowSleep){var B=this.sleepState,U=this.velocity.norm2()+this.angularVelocity.norm2(),W=Math.pow(this.sleepSpeedLimit,2);B===l.AWAKE&&U<W?(this.sleepState=l.SLEEPY,this.timeLastSleepy=b,this.dispatchEvent(l.sleepyEvent)):B===l.SLEEPY&&U>W?this.wakeUp():B===l.SLEEPY&&b-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(b,U){var U=U||new a;return b.vsub(this.position,U),this.quaternion.conjugate().vmult(U,U),U},l.prototype.vectorToLocalFrame=function(b,U){var U=U||new a;return this.quaternion.conjugate().vmult(b,U),U},l.prototype.pointToWorldFrame=function(b,U){var U=U||new a;return this.quaternion.vmult(b,U),U.vadd(this.position,U),U},l.prototype.vectorToWorldFrame=function(b,U){var U=U||new a;return this.quaternion.vmult(b,U),U};var u=new a,p=new c;l.prototype.addShape=function(b,B,U){var W=new a,X=new c;return B&&W.copy(B),U&&X.copy(U),this.shapes.push(b),this.shapeOffsets.push(W),this.shapeOrientations.push(X),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var b=this.shapes,B=this.shapeOffsets,U=b.length,W=0,X=0;X!==U;X++){var et=b[X];et.updateBoundingSphereRadius();var O=B[X].norm(),D=et.boundingSphereRadius;O+D>W&&(W=O+D)}this.boundingRadius=W};var v=new d;l.prototype.computeAABB=function(){for(var b=this.shapes,B=this.shapeOffsets,U=this.shapeOrientations,W=b.length,X=u,et=p,O=this.quaternion,D=this.aabb,tt=v,Q=0;Q!==W;Q++){var F=b[Q];U[Q].mult(O,et),et.vmult(B[Q],X),X.vadd(this.position,X),F.calculateWorldAABB(X,et,tt.lowerBound,tt.upperBound),Q===0?D.copy(tt):D.extend(tt)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(b){var B=this.invInertia;if(!(B.x===B.y&&B.y===B.z&&!b)){var U=g,W=m;U.setRotationFromQuaternion(this.quaternion),U.transpose(W),U.scale(B,U),U.mmult(W,this.invInertiaWorld)}};var f=new a,x=new a;l.prototype.applyForce=function(b,B){if(this.type===l.DYNAMIC){var U=f;B.vsub(this.position,U);var W=x;U.cross(b,W),this.force.vadd(b,this.force),this.torque.vadd(W,this.torque)}};var M=new a,_=new a;l.prototype.applyLocalForce=function(b,B){if(this.type===l.DYNAMIC){var U=M,W=_;this.vectorToWorldFrame(b,U),this.pointToWorldFrame(B,W),this.applyForce(U,W)}};var T=new a,P=new a,N=new a;l.prototype.applyImpulse=function(b,B){if(this.type===l.DYNAMIC){var U=T;B.vsub(this.position,U);var W=P;W.copy(b),W.mult(this.invMass,W),this.velocity.vadd(W,this.velocity);var X=N;U.cross(b,X),this.invInertiaWorld.vmult(X,X),this.angularVelocity.vadd(X,this.angularVelocity)}};var L=new a,E=new a;l.prototype.applyLocalImpulse=function(b,B){if(this.type===l.DYNAMIC){var U=L,W=E;this.vectorToWorldFrame(b,U),this.pointToWorldFrame(B,W),this.applyImpulse(U,W)}};var y=new a;l.prototype.updateMassProperties=function(){var b=y;this.invMass=this.mass>0?1/this.mass:0;var B=this.inertia,U=this.fixedRotation;this.computeAABB(),b.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(b,this.mass,B),this.invInertia.set(B.x>0&&!U?1/B.x:0,B.y>0&&!U?1/B.y:0,B.z>0&&!U?1/B.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(b,B){var U=new a;return b.vsub(this.position,U),this.angularVelocity.cross(U,B),this.velocity.vadd(B,B),B}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=d;function d(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,u=new r;new o,d.prototype.addWheel=function(O){O=O||{};var D=new c(O),tt=this.wheelInfos.length;return this.wheelInfos.push(D),tt},d.prototype.setSteeringValue=function(O,D){var tt=this.wheelInfos[D];tt.steering=O},new r,d.prototype.applyEngineForce=function(O,D){this.wheelInfos[D].engineForce=O},d.prototype.setBrake=function(O,D){this.wheelInfos[D].brake=O},d.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var D=this;this.preStepCallback=function(){D.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},d.prototype.getVehicleAxisWorld=function(O,D){D.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(D,D)},d.prototype.updateVehicle=function(O){for(var D=this.wheelInfos,tt=D.length,Q=this.chassisBody,F=0;F<tt;F++)this.updateWheelTransform(F);this.currentVehicleSpeedKmHour=3.6*Q.velocity.norm();var J=new r;this.getVehicleAxisWorld(this.indexForwardAxis,J),J.dot(Q.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var F=0;F<tt;F++)this.castRay(D[F]);this.updateSuspension(O);for(var z=new r,A=new r,F=0;F<tt;F++){var R=D[F],H=R.suspensionForce;H>R.maxSuspensionForce&&(H=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(H*O,z),R.raycastResult.hitPointWorld.vsub(Q.position,A),Q.applyImpulse(z,R.raycastResult.hitPointWorld)}this.updateFriction(O);var K=new r,nt=new r,q=new r;for(F=0;F<tt;F++){var R=D[F];Q.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,q);var it=1;switch(this.indexUpAxis){case 1:it=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,nt);var mt=nt.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(mt,K),nt.vsub(K,nt);var Lt=nt.dot(q);R.deltaRotation=it*Lt*O/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*O),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},d.prototype.updateSuspension=function(O){for(var D=this.chassisBody,tt=D.mass,Q=this.wheelInfos,F=Q.length,J=0;J<F;J++){var z=Q[J];if(z.isInContact){var A,R=z.suspensionRestLength,H=z.suspensionLength,K=R-H;A=z.suspensionStiffness*K*z.clippedInvContactDotSuspension;var nt=z.suspensionRelativeVelocity,q;nt<0?q=z.dampingCompression:q=z.dampingRelaxation,A-=q*nt,z.suspensionForce=A*tt,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},d.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;d.prototype.castRay=function(O){var D=p,tt=v;this.updateWheelTransformWorld(O);var Q=this.chassisBody,F=-1,J=O.suspensionRestLength+O.radius;O.directionWorld.scale(J,D);var z=O.chassisConnectionPointWorld;z.vadd(D,tt);var A=O.raycastResult;A.reset();var R=Q.collisionResponse;Q.collisionResponse=!1,this.world.rayTest(z,tt,A),Q.collisionResponse=R;var H=A.body;if(O.raycastResult.groundObject=0,H){F=A.distance,O.raycastResult.hitNormalWorld=A.hitNormalWorld,O.isInContact=!0;var K=A.distance;O.suspensionLength=K-O.radius;var nt=O.suspensionRestLength-O.maxSuspensionTravel,q=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<nt&&(O.suspensionLength=nt),O.suspensionLength>q&&(O.suspensionLength=q,O.raycastResult.reset());var it=O.raycastResult.hitNormalWorld.dot(O.directionWorld),mt=new r;Q.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,mt);var Lt=O.raycastResult.hitNormalWorld.dot(mt);if(it>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var vt=-1/it;O.suspensionRelativeVelocity=Lt*vt,O.clippedInvContactDotSuspension=vt}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return F},d.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var D=this.chassisBody;D.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),D.vectorToWorldFrame(O.directionLocal,O.directionWorld),D.vectorToWorldFrame(O.axleLocal,O.axleWorld)},d.prototype.updateWheelTransform=function(O){var D=h,tt=l,Q=u,F=this.wheelInfos[O];this.updateWheelTransformWorld(F),F.directionLocal.scale(-1,D),tt.copy(F.axleLocal),D.cross(tt,Q),Q.normalize(),tt.normalize();var J=F.steering,z=new a;z.setFromAxisAngle(D,J);var A=new a;A.setFromAxisAngle(tt,F.rotation);var R=F.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,R),R.mult(A,R),R.normalize();var H=F.worldTransform.position;H.copy(F.directionWorld),H.scale(F.suspensionLength,H),H.vadd(F.chassisConnectionPointWorld,H)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];d.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var m=new r,f=[],x=[],M=1;d.prototype.updateFriction=function(O){for(var D=m,tt=this.wheelInfos,Q=tt.length,F=this.chassisBody,J=x,z=f,A=0;A<Q;A++){var R=tt[A],H=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,J[A]||(J[A]=new r),z[A]||(z[A]=new r)}for(var A=0;A<Q;A++){var R=tt[A],H=R.raycastResult.body;if(H){var K=z[A],nt=this.getWheelTransformWorld(A);nt.vectorToWorldFrame(g[this.indexRightAxis],K);var q=R.raycastResult.hitNormalWorld,it=K.dot(q);q.scale(it,D),K.vsub(D,K),K.normalize(),q.cross(K,J[A]),J[A].normalize(),R.sideImpulse=et(F,R.raycastResult.hitPointWorld,H,R.raycastResult.hitPointWorld,K),R.sideImpulse*=M}}var mt=1,Lt=.5;this.sliding=!1;for(var A=0;A<Q;A++){var R=tt[A],H=R.raycastResult.body,vt=0;if(R.slipInfo=1,H){var I=0,dt=R.brake?R.brake:I;vt=N(F,H,R.raycastResult.hitPointWorld,J[A],dt),vt+=R.engineForce*O;var ht=dt/vt;R.slipInfo*=ht}if(R.forwardImpulse=0,R.skidInfo=1,H){R.skidInfo=1;var qt=R.suspensionForce*O*R.frictionSlip,yt=qt,ne=qt*yt;R.forwardImpulse=vt;var pt=R.forwardImpulse*Lt,C=R.sideImpulse*mt,S=pt*pt+C*C;if(R.sliding=!1,S>ne){this.sliding=!0,R.sliding=!0;var ht=qt/Math.sqrt(S);R.skidInfo*=ht}}}if(this.sliding)for(var A=0;A<Q;A++){var R=tt[A];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var A=0;A<Q;A++){var R=tt[A],Z=new r;if(Z.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var lt=new r;J[A].scale(R.forwardImpulse,lt),F.applyImpulse(lt,Z)}if(R.sideImpulse!==0){var H=R.raycastResult.body,ct=new r;ct.copy(R.raycastResult.hitPointWorld);var at=new r;z[A].scale(R.sideImpulse,at),F.pointToLocalFrame(Z,Z),Z["xyz"[this.indexUpAxis]]*=R.rollInfluence,F.pointToWorldFrame(Z,Z),F.applyImpulse(at,Z),at.scale(-1,at),H.applyImpulse(at,ct)}}};var _=new r,T=new r,P=new r;function N(O,D,tt,Q,F){var J=0,z=tt,A=_,R=T,H=P;O.getVelocityAtWorldPoint(z,A),D.getVelocityAtWorldPoint(z,R),A.vsub(R,H);var K=Q.dot(H),nt=B(O,tt,Q),q=B(D,tt,Q),it=1,mt=it/(nt+q);return J=-K*mt,F<J&&(J=F),J<-F&&(J=-F),J}var L=new r,E=new r,y=new r,b=new r;function B(O,D,tt){var Q=L,F=E,J=y,z=b;return D.vsub(O.position,Q),Q.cross(tt,F),O.invInertiaWorld.vmult(F,z),z.cross(Q,J),O.invMass+tt.dot(J)}var U=new r,W=new r,X=new r;function et(O,D,tt,Q,F,it){var z=F.norm2();if(z>1.1)return 0;var A=U,R=W,H=X;O.getVelocityAtWorldPoint(D,A),tt.getVelocityAtWorldPoint(Q,R),A.vsub(R,H);var K=F.dot(H),nt=.2,q=1/(O.invMass+tt.invMass),it=-nt*K*q;return it}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),d=e("../constraints/HingeConstraint");n.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(f);var x=new d(this.chassisBody,v,{pivotA:g,axisA:f,pivotB:c.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),f=Math.sin(p),x=g.x,M=g.y;this.constraints[v].axisA.set(m*x-f*M,f*x+m*M,0)},h.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},h.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],f=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),f.vadd(l,f)},h.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},h.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var u=new c;h.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,u),m.dot(u)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,f=v.id,x=this.smoothingRadius*this.smoothingRadius,M=o,_=0;_!==m;_++){var T=this.particles[_];T.position.vsub(v.position,M),f!==T.id&&M.norm2()<x&&g.push(T)}};var c=new r,d=new r,h=new r,l=new r,u=new r,p=new r;a.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,f=this.eps,x=0;x!==v;x++){var M=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(M,_),_.push(this.particles[x]);for(var T=_.length,P=0,N=0;N!==T;N++){M.position.vsub(_[N].position,g);var L=g.norm(),E=this.w(L);P+=_[N].mass*E}this.densities[x]=P,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var y=d,b=h,B=l,U=u,W=p,x=0;x!==v;x++){var X=this.particles[x];y.set(0,0,0),b.set(0,0,0);for(var et,O,_=this.neighbors[x],T=_.length,N=0;N!==T;N++){var D=_[N];X.position.vsub(D.position,U);var tt=U.norm();et=-D.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+f)+this.pressures[N]/(this.densities[N]*this.densities[N]+f)),this.gradw(U,B),B.mult(et,B),y.vadd(B,y),D.velocity.vsub(X.velocity,W),W.mult(1/(1e-4+this.densities[x]*this.densities[N])*this.viscosity*D.mass,W),O=this.nablaw(tt),W.mult(O,W),b.vadd(W,b)}b.mult(X.mass,b),y.mult(X.mass,y),X.force.vadd(b,X.force),X.force.vadd(y,X.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),f=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(x,M,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=M,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}a.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},a.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},a.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},a.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new r,c=new r,d=new r,h=new r,l=new r,u=new r,p=new r,v=new r,g=new r,m=new r,f=new r;a.prototype.applyForce=function(){var x=this.stiffness,M=this.damping,_=this.restLength,T=this.bodyA,P=this.bodyB,N=o,L=c,E=d,y=h,b=f,B=l,U=u,W=p,X=v,et=g,O=m;this.getWorldAnchorA(B),this.getWorldAnchorB(U),B.vsub(T.position,W),U.vsub(P.position,X),U.vsub(B,N);var D=N.norm();L.copy(N),L.normalize(),P.velocity.vsub(T.velocity,E),P.angularVelocity.cross(X,b),E.vadd(b,E),T.angularVelocity.cross(W,b),E.vsub(b,E),L.mult(-x*(D-_)-M*E.dot(L),y),T.force.vsub(y,T.force),P.force.vadd(y,P.force),W.cross(y,et),X.cross(y,O),T.torque.vsub(et,T.torque),P.torque.vadd(O,P.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=d;function d(u){u=c.defaults(u,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=u.maxSuspensionTravel,this.customSlidingRotationalSpeed=u.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=u.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=u.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=u.chassisConnectionPointWorld.clone(),this.directionLocal=u.directionLocal.clone(),this.directionWorld=u.directionWorld.clone(),this.axleLocal=u.axleLocal.clone(),this.axleWorld=u.axleWorld.clone(),this.suspensionRestLength=u.suspensionRestLength,this.suspensionMaxLength=u.suspensionMaxLength,this.radius=u.radius,this.suspensionStiffness=u.suspensionStiffness,this.dampingCompression=u.dampingCompression,this.dampingRelaxation=u.dampingRelaxation,this.frictionSlip=u.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=u.rollInfluence,this.maxSuspensionForce=u.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=u.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new r,h=new r,l=new r;d.prototype.updateWheel=function(u){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(u.position,h),u.getVelocityAtWorldPoint(h,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,u=this.halfExtents.y,p=this.halfExtents.z,v=a,g=[new v(-l,-u,-p),new v(l,-u,-p),new v(l,u,-p),new v(-l,u,-p),new v(-l,-u,p),new v(l,-u,p),new v(l,u,p),new v(-l,u,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var f=new o(g,m);this.convexPolyhedronRepresentation=f,f.material=this.material},c.prototype.calculateLocalInertia=function(l,u){return u=u||new a,c.calculateInertia(this.halfExtents,l,u),u},c.calculateInertia=function(l,u,p){var v=l;p.x=1/12*u*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*u*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*u*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,u){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),u!==void 0)for(var g=0;g!==p.length;g++)u.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new a;new a,c.prototype.forEachWorldCorner=function(l,u,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)d.set(g[m][0],g[m][1],g[m][2]),u.vmult(d,d),l.vadd(d,d),p(d.x,d.y,d.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];c.prototype.calculateWorldAABB=function(l,u,p,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];u.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=h[f];u.vmult(m,m),l.vadd(m,m);var x=m.x,M=m.y,_=m.z;x>v.x&&(v.x=x),M>v.y&&(v.y=M),_>v.z&&(v.z=_),x<p.x&&(p.x=x),M<p.y&&(p.y=M),_<p.z&&(p.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(F,J,z){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=F||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=J||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var d=new a;c.prototype.computeEdges=function(){var F=this.faces,J=this.vertices;J.length;var z=this.uniqueEdges;z.length=0;for(var A=d,R=0;R!==F.length;R++)for(var H=F[R],K=H.length,nt=0;nt!==K;nt++){var q=(nt+1)%K;J[H[nt]].vsub(J[H[q]],A),A.normalize();for(var it=!1,mt=0;mt!==z.length;mt++)if(z[mt].almostEquals(A)||z[mt].almostEquals(A)){it=!0;break}it||z.push(A.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var F=0;F<this.faces.length;F++){for(var J=0;J<this.faces[F].length;J++)if(!this.vertices[this.faces[F][J]])throw new Error("Vertex "+this.faces[F][J]+" not found!");var z=this.faceNormals[F]||new a;this.getFaceNormal(F,z),z.negate(z),this.faceNormals[F]=z;var A=this.vertices[this.faces[F][0]];if(z.dot(A)<0){console.error(".faceNormals["+F+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var J=0;J<this.faces[F].length;J++)console.warn(".vertices["+this.faces[F][J]+"] = Vec3("+this.vertices[this.faces[F][J]].toString()+")")}}};var h=new a,l=new a;c.computeNormal=function(F,J,z,A){J.vsub(F,l),z.vsub(J,h),h.cross(l,A),A.isZero()||A.normalize()},c.prototype.getFaceNormal=function(F,J){var z=this.faces[F],A=this.vertices[z[0]],R=this.vertices[z[1]],H=this.vertices[z[2]];return c.computeNormal(A,R,H,J)};var u=new a;c.prototype.clipAgainstHull=function(F,J,z,A,R,H,K,nt,q){for(var it=u,mt=-1,Lt=-Number.MAX_VALUE,vt=0;vt<z.faces.length;vt++){it.copy(z.faceNormals[vt]),R.vmult(it,it);var I=it.dot(H);I>Lt&&(Lt=I,mt=vt)}for(var dt=[],ht=z.faces[mt],qt=ht.length,yt=0;yt<qt;yt++){var ne=z.vertices[ht[yt]],pt=new a;pt.copy(ne),R.vmult(pt,pt),A.vadd(pt,pt),dt.push(pt)}mt>=0&&this.clipFaceAgainstHull(H,F,J,dt,K,nt,q)};var p=new a,v=new a,g=new a,m=new a,f=new a,x=new a;c.prototype.findSeparatingAxis=function(F,J,z,A,R,H,K,nt){var q=p,it=v,mt=g,Lt=m,vt=f,I=x,dt=Number.MAX_VALUE,ht=this;if(ht.uniqueAxes)for(var yt=0;yt!==ht.uniqueAxes.length;yt++){z.vmult(ht.uniqueAxes[yt],q);var pt=ht.testSepAxis(q,F,J,z,A,R);if(pt===!1)return!1;pt<dt&&(dt=pt,H.copy(q))}else for(var qt=K?K.length:ht.faces.length,yt=0;yt<qt;yt++){var ne=K?K[yt]:yt;q.copy(ht.faceNormals[ne]),z.vmult(q,q);var pt=ht.testSepAxis(q,F,J,z,A,R);if(pt===!1)return!1;pt<dt&&(dt=pt,H.copy(q))}if(F.uniqueAxes)for(var yt=0;yt!==F.uniqueAxes.length;yt++){R.vmult(F.uniqueAxes[yt],it);var pt=ht.testSepAxis(it,F,J,z,A,R);if(pt===!1)return!1;pt<dt&&(dt=pt,H.copy(it))}else for(var C=nt?nt.length:F.faces.length,yt=0;yt<C;yt++){var ne=nt?nt[yt]:yt;it.copy(F.faceNormals[ne]),R.vmult(it,it);var pt=ht.testSepAxis(it,F,J,z,A,R);if(pt===!1)return!1;pt<dt&&(dt=pt,H.copy(it))}for(var S=0;S!==ht.uniqueEdges.length;S++){z.vmult(ht.uniqueEdges[S],Lt);for(var Z=0;Z!==F.uniqueEdges.length;Z++)if(R.vmult(F.uniqueEdges[Z],vt),Lt.cross(vt,I),!I.almostZero()){I.normalize();var lt=ht.testSepAxis(I,F,J,z,A,R);if(lt===!1)return!1;lt<dt&&(dt=lt,H.copy(I))}}return A.vsub(J,mt),mt.dot(H)>0&&H.negate(H),!0};var M=[],_=[];c.prototype.testSepAxis=function(F,J,z,A,R,H){var K=this;c.project(K,F,z,A,M),c.project(J,F,R,H,_);var nt=M[0],q=M[1],it=_[0],mt=_[1];if(nt<mt||it<q)return!1;var Lt=nt-mt,vt=it-q,I=Lt<vt?Lt:vt;return I};var T=new a,P=new a;c.prototype.calculateLocalInertia=function(F,J){this.computeLocalAABB(T,P);var z=P.x-T.x,A=P.y-T.y,R=P.z-T.z;J.x=1/12*F*(2*A*2*A+2*R*2*R),J.y=1/12*F*(2*z*2*z+2*R*2*R),J.z=1/12*F*(2*A*2*A+2*z*2*z)},c.prototype.getPlaneConstantOfFace=function(F){var J=this.faces[F],z=this.faceNormals[F],A=this.vertices[J[0]],R=-z.dot(A);return R};var N=new a,L=new a,E=new a,y=new a,b=new a,B=new a,U=new a,W=new a;c.prototype.clipFaceAgainstHull=function(F,J,z,A,R,H,K){for(var nt=N,q=L,it=E,mt=y,Lt=b,vt=B,I=U,dt=W,ht=this,qt=[],yt=A,ne=qt,pt=-1,C=Number.MAX_VALUE,S=0;S<ht.faces.length;S++){nt.copy(ht.faceNormals[S]),z.vmult(nt,nt);var Z=nt.dot(F);Z<C&&(C=Z,pt=S)}if(!(pt<0)){var lt=ht.faces[pt];lt.connectedFaces=[];for(var ct=0;ct<ht.faces.length;ct++)for(var at=0;at<ht.faces[ct].length;at++)lt.indexOf(ht.faces[ct][at])!==-1&&ct!==pt&&lt.connectedFaces.indexOf(ct)===-1&&lt.connectedFaces.push(ct);yt.length;for(var Et=lt.length,wt=0;wt<Et;wt++){var Ft=ht.vertices[lt[wt]],le=ht.vertices[lt[(wt+1)%Et]];Ft.vsub(le,q),it.copy(q),z.vmult(it,it),J.vadd(it,it),mt.copy(this.faceNormals[pt]),z.vmult(mt,mt),J.vadd(mt,mt),it.cross(mt,Lt),Lt.negate(Lt),vt.copy(Ft),z.vmult(vt,vt),J.vadd(vt,vt),-vt.dot(Lt);var jt;{var St=lt.connectedFaces[wt];I.copy(this.faceNormals[St]);var kt=this.getPlaneConstantOfFace(St);dt.copy(I),z.vmult(dt,dt);var jt=kt-dt.dot(J)}for(this.clipFaceAgainstPlane(yt,ne,dt,jt);yt.length;)yt.shift();for(;ne.length;)yt.push(ne.shift())}I.copy(this.faceNormals[pt]);var kt=this.getPlaneConstantOfFace(pt);dt.copy(I),z.vmult(dt,dt);for(var jt=kt-dt.dot(J),ct=0;ct<yt.length;ct++){var Qt=dt.dot(yt[ct])+jt;if(Qt<=R&&(console.log("clamped: depth="+Qt+" to minDist="+(R+"")),Qt=R),Qt<=H){var Xt=yt[ct];if(Qt<=0){var ce={point:Xt,normal:dt,depth:Qt};K.push(ce)}}}}},c.prototype.clipFaceAgainstPlane=function(F,J,z,A){var R,H,K=F.length;if(K<2)return J;var nt=F[F.length-1],q=F[0];R=z.dot(nt)+A;for(var it=0;it<K;it++){if(q=F[it],H=z.dot(q)+A,R<0)if(H<0){var mt=new a;mt.copy(q),J.push(mt)}else{var mt=new a;nt.lerp(q,R/(R-H),mt),J.push(mt)}else if(H<0){var mt=new a;nt.lerp(q,R/(R-H),mt),J.push(mt),J.push(q)}nt=q,R=H}return J},c.prototype.computeWorldVertices=function(F,J){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new a);for(var A=this.vertices,R=this.worldVertices,H=0;H!==z;H++)J.vmult(A[H],R[H]),F.vadd(R[H],R[H]);this.worldVerticesNeedsUpdate=!1},new a,c.prototype.computeLocalAABB=function(F,J){var z=this.vertices.length,A=this.vertices;F.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),J.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<z;R++){var H=A[R];H.x<F.x?F.x=H.x:H.x>J.x&&(J.x=H.x),H.y<F.y?F.y=H.y:H.y>J.y&&(J.y=H.y),H.z<F.z?F.z=H.z:H.z>J.z&&(J.z=H.z)}},c.prototype.computeWorldFaceNormals=function(F){for(var J=this.faceNormals.length;this.worldFaceNormals.length<J;)this.worldFaceNormals.push(new a);for(var z=this.faceNormals,A=this.worldFaceNormals,R=0;R!==J;R++)F.vmult(z[R],A[R]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var F=0,J=this.vertices,z=0,A=J.length;z!==A;z++){var R=J[z].norm2();R>F&&(F=R)}this.boundingSphereRadius=Math.sqrt(F)};var X=new a;c.prototype.calculateWorldAABB=function(F,J,z,A){for(var R=this.vertices.length,H=this.vertices,K,nt,q,it,mt,Lt,vt=0;vt<R;vt++){X.copy(H[vt]),J.vmult(X,X),F.vadd(X,X);var I=X;I.x<K||K===void 0?K=I.x:(I.x>it||it===void 0)&&(it=I.x),I.y<nt||nt===void 0?nt=I.y:(I.y>mt||mt===void 0)&&(mt=I.y),I.z<q||q===void 0?q=I.z:(I.z>Lt||Lt===void 0)&&(Lt=I.z)}z.set(K,nt,q),A.set(it,mt,Lt)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(F){F=F||new a;for(var J=this.vertices.length,z=this.vertices,A=0;A<J;A++)F.vadd(z[A],F);return F.mult(1/J,F),F},c.prototype.transformAllPoints=function(F,J){var z=this.vertices.length,A=this.vertices;if(J){for(var R=0;R<z;R++){var H=A[R];J.vmult(H,H)}for(var R=0;R<this.faceNormals.length;R++){var H=this.faceNormals[R];J.vmult(H,H)}}if(F)for(var R=0;R<z;R++){var H=A[R];H.vadd(F,H)}};var et=new a,O=new a,D=new a;c.prototype.pointIsInside=function(F){var J=this.vertices.length,z=this.vertices,A=this.faces,R=this.faceNormals,H=null,K=this.faces.length,nt=et;this.getAveragePointLocal(nt);for(var q=0;q<K;q++){this.faces[q].length;var J=R[q],it=z[A[q][0]],mt=O;F.vsub(it,mt);var Lt=J.dot(mt),vt=D;nt.vsub(it,vt);var I=J.dot(vt);if(Lt<0&&I>0||Lt>0&&I<0)return!1}return H?1:-1},new a;var tt=new a,Q=new a;c.project=function(F,J,z,A,R){var H=F.vertices.length,K=tt,nt=0,q=0,it=Q,mt=F.vertices;it.setZero(),o.vectorToLocalFrame(z,A,J,K),o.pointToLocalFrame(z,A,it,it);var Lt=it.dot(K);q=nt=mt[0].dot(K);for(var vt=1;vt<H;vt++){var I=mt[vt].dot(K);I>nt&&(nt=I),I<q&&(q=I)}if(q-=Lt,nt-=Lt,q>nt){var dt=q;q=nt,nt=dt}R[0]=nt,R[1]=q}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(d,h,l,u){var p=u,v=[],g=[],m=[],f=[],x=[],M=Math.cos,_=Math.sin;v.push(new a(h*M(0),h*_(0),-l*.5)),f.push(0),v.push(new a(d*M(0),d*_(0),l*.5)),x.push(1);for(var T=0;T<p;T++){var P=2*Math.PI/p*(T+1),N=2*Math.PI/p*(T+.5);T<p-1?(v.push(new a(h*M(P),h*_(P),-l*.5)),f.push(2*T+2),v.push(new a(d*M(P),d*_(P),l*.5)),x.push(2*T+3),m.push([2*T+2,2*T+3,2*T+1,2*T])):m.push([0,1,2*T+1,2*T]),(p%2===1||T<p/2)&&g.push(new a(M(N),_(N),0))}m.push(x),g.push(new a(0,0,1));for(var L=[],T=0;T<f.length;T++)L.push(f[f.length-T-1]);m.push(L),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=d;function d(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new r,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var p=0;p!==h[u].length;p++){var v=h[u][p];v<l&&(l=v)}this.minValue=l},d.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var p=0;p!==h[u].length;p++){var v=h[u][p];v>l&&(l=v)}this.maxValue=l},d.prototype.setHeightValueAtIndex=function(h,l,u){var p=this.data;p[h][l]=u,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},d.prototype.getRectMinMax=function(h,l,u,p,v){v=v||[];for(var g=this.data,m=this.minValue,f=h;f<=u;f++)for(var x=l;x<=p;x++){var M=g[f][x];M>m&&(m=M)}v[0]=this.minValue,v[1]=m},d.prototype.getIndexOfPosition=function(h,l,u,p){var v=this.elementSize,g=this.data,m=Math.floor(h/v),f=Math.floor(l/v);return u[0]=m,u[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=g.length-1&&(m=g.length-1),f>=g[0].length-1&&(f=g[0].length-1)),!(m<0||f<0||m>=g.length-1||f>=g[0].length-1)},d.prototype.getHeightAt=function(h,l,u){var p=[];this.getIndexOfPosition(h,l,p,u);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(h,l,u){return h+"_"+l+"_"+(u?1:0)},d.prototype.getCachedConvexTrianglePillar=function(h,l,u){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.setCachedConvexTrianglePillar=function(h,l,u,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]={convex:p,offset:v}},d.prototype.clearCachedConvexTrianglePillar=function(h,l,u){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.getConvexTrianglePillar=function(h,l,u){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,u);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new a,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var x=0;x<6;x++)p.vertices[x]||(p.vertices[x]=new o);f.length=5;for(var x=0;x<5;x++)f[x]||(f[x]=[]);var M=p.vertices,_=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;u?(v.set((h+.75)*m,(l+.75)*m,_),M[0].set(.25*m,.25*m,g[h+1][l+1]-_),M[1].set(-.75*m,.25*m,g[h][l+1]-_),M[2].set(.25*m,-.75*m,g[h+1][l]-_),M[3].set(.25*m,.25*m,-_-1),M[4].set(-.75*m,.25*m,-_-1),M[5].set(.25*m,-.75*m,-_-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,_),M[0].set(-.25*m,-.25*m,g[h][l]-_),M[1].set(.75*m,-.25*m,g[h+1][l]-_),M[2].set(-.25*m,.75*m,g[h][l+1]-_),M[3].set(-.25*m,-.25*m,-_-1),M[4].set(.75*m,-.25*m,-_-1),M[5].set(-.25*m,.75*m,-_-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,u,p,v)},d.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(h,l,u,p){u.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){return d=d||new a,d.set(0,0,0),d},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,d,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(d){var h=this.worldNormal;h.set(0,0,1),d.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(d,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new a;o.prototype.calculateWorldAABB=function(d,h,l,u){c.set(0,0,1),h.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),u.set(p,p,p),c.x===1&&(u.x=d.x),c.y===1&&(u.y=d.y),c.z===1&&(u.z=d.z),c.x===-1&&(l.x=d.x),c.y===-1&&(l.y=d.y),c.z===-1&&(l.z=d.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){d=d||new a;var h=2*c*this.radius*this.radius/5;return d.x=h,d.y=h,d.z=h,d},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,d,h,l){for(var u=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];h[g]=c[g]-u,l[g]=c[g]+u}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),d=e("../utils/Octree");function h(L,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(L),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new c,this.edges=null,this.scale=new a(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new a;h.prototype.updateTree=function(){var L=this.tree;L.reset(),L.aabb.copy(this.aabb);var E=this.scale;L.aabb.lowerBound.x*=1/E.x,L.aabb.lowerBound.y*=1/E.y,L.aabb.lowerBound.z*=1/E.z,L.aabb.upperBound.x*=1/E.x,L.aabb.upperBound.y*=1/E.y,L.aabb.upperBound.z*=1/E.z;for(var y=new c,b=new a,B=new a,U=new a,W=[b,B,U],X=0;X<this.indices.length/3;X++){var et=X*3;this._getUnscaledVertex(this.indices[et],b),this._getUnscaledVertex(this.indices[et+1],B),this._getUnscaledVertex(this.indices[et+2],U),y.setFromPoints(W),L.insert(y,X)}L.removeEmptyNodes()};var u=new c;h.prototype.getTrianglesInAABB=function(L,E){u.copy(L);var y=this.scale,b=y.x,B=y.y,U=y.z,W=u.lowerBound,X=u.upperBound;return W.x/=b,W.y/=B,W.z/=U,X.x/=b,X.y/=B,X.z/=U,this.tree.aabbQuery(u,E)},h.prototype.setScale=function(L){var E=this.scale.x===this.scale.y===this.scale.z,y=L.x===L.y===L.z;E&&y||this.updateNormals(),this.scale.copy(L),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var L=l,E=this.normals,y=0;y<this.indices.length/3;y++){var b=y*3,B=this.indices[b],U=this.indices[b+1],W=this.indices[b+2];this.getVertex(B,f),this.getVertex(U,x),this.getVertex(W,M),h.computeNormal(x,f,M,L),E[b]=L.x,E[b+1]=L.y,E[b+2]=L.z}},h.prototype.updateEdges=function(){for(var L={},E=function(et,O){var D=B<U?B+"_"+U:U+"_"+B;L[D]=!0},y=0;y<this.indices.length/3;y++){var b=y*3,B=this.indices[b],U=this.indices[b+1];this.indices[b+2],E(),E(),E()}var W=Object.keys(L);this.edges=new Int16Array(W.length*2);for(var y=0;y<W.length;y++){var X=W[y].split("_");this.edges[2*y]=parseInt(X[0],10),this.edges[2*y+1]=parseInt(X[1],10)}},h.prototype.getEdgeVertex=function(L,E,y){var b=this.edges[L*2+(E?1:0)];this.getVertex(b,y)};var p=new a,v=new a;h.prototype.getEdgeVector=function(L,E){var y=p,b=v;this.getEdgeVertex(L,0,y),this.getEdgeVertex(L,1,b),b.vsub(y,E)};var g=new a,m=new a;h.computeNormal=function(L,E,y,b){E.vsub(L,m),y.vsub(E,g),g.cross(m,b),b.isZero()||b.normalize()};var f=new a,x=new a,M=new a;h.prototype.getVertex=function(L,E){var y=this.scale;return this._getUnscaledVertex(L,E),E.x*=y.x,E.y*=y.y,E.z*=y.z,E},h.prototype._getUnscaledVertex=function(L,E){var y=L*3,b=this.vertices;return E.set(b[y],b[y+1],b[y+2])},h.prototype.getWorldVertex=function(L,E,y,b){return this.getVertex(L,b),o.pointToWorldFrame(E,y,b,b),b},h.prototype.getTriangleVertices=function(L,E,y,b){var B=L*3;this.getVertex(this.indices[B],E),this.getVertex(this.indices[B+1],y),this.getVertex(this.indices[B+2],b)},h.prototype.getNormal=function(L,E){var y=L*3;return E.set(this.normals[y],this.normals[y+1],this.normals[y+2])};var _=new c;h.prototype.calculateLocalInertia=function(L,E){this.computeLocalAABB(_);var y=_.upperBound.x-_.lowerBound.x,b=_.upperBound.y-_.lowerBound.y,B=_.upperBound.z-_.lowerBound.z;return E.set(1/12*L*(2*b*2*b+2*B*2*B),1/12*L*(2*y*2*y+2*B*2*B),1/12*L*(2*b*2*b+2*y*2*y))};var T=new a;h.prototype.computeLocalAABB=function(L){var E=L.lowerBound,y=L.upperBound,b=this.vertices.length;this.vertices;var B=T;this.getVertex(0,B),E.copy(B),y.copy(B);for(var U=0;U!==b;U++)this.getVertex(U,B),B.x<E.x?E.x=B.x:B.x>y.x&&(y.x=B.x),B.y<E.y?E.y=B.y:B.y>y.y&&(y.y=B.y),B.z<E.z?E.z=B.z:B.z>y.z&&(y.z=B.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var L=0,E=this.vertices,y=new a,b=0,B=E.length/3;b!==B;b++){this.getVertex(b,y);var U=y.norm2();U>L&&(L=U)}this.boundingSphereRadius=Math.sqrt(L)},new a;var P=new o,N=new c;h.prototype.calculateWorldAABB=function(L,E,y,b){var B=P,U=N;B.position=L,B.quaternion=E,this.aabb.toWorldFrame(B,U),y.copy(U.lowerBound),b.copy(U.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(L,E,y,b,B){L=L||1,E=E||.5,y=y||8,b=b||6,B=B||Math.PI*2;for(var U=[],W=[],X=0;X<=y;X++)for(var et=0;et<=b;et++){var O=et/b*B,D=X/y*Math.PI*2,tt=(L+E*Math.cos(D))*Math.cos(O),Q=(L+E*Math.cos(D))*Math.sin(O),F=E*Math.sin(D);U.push(tt,Q,F)}for(var X=1;X<=y;X++)for(var et=1;et<=b;et++){var J=(b+1)*X+et-1,z=(b+1)*(X-1)+et-1,A=(b+1)*(X-1)+et,R=(b+1)*X+et;W.push(J,z,R),W.push(z,A,R)}return new h(U,W)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],c=[],d=[];a.prototype.solve=function(h,l){var u=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,f=l.bodies,x=f.length,M=h,_,T,P,N,L,E;if(m!==0)for(var y=0;y!==x;y++)f[y].updateSolveMassProperties();var b=c,B=d,U=o;b.length=m,B.length=m,U.length=m;for(var y=0;y!==m;y++){var W=g[y];U[y]=0,B[y]=W.computeB(M),b[y]=1/W.computeC()}if(m!==0){for(var y=0;y!==x;y++){var X=f[y],et=X.vlambda,O=X.wlambda;et.set(0,0,0),O&&O.set(0,0,0)}for(u=0;u!==p;u++){N=0;for(var D=0;D!==m;D++){var W=g[D];_=B[D],T=b[D],E=U[D],L=W.computeGWlambda(),P=T*(_-L-W.eps*E),E+P<W.minForce?P=W.minForce-E:E+P>W.maxForce&&(P=W.maxForce-E),U[D]+=P,N+=P>0?P:-P,W.addToWlambda(P)}if(N*N<v)break}for(var y=0;y!==x;y++){var X=f[y],tt=X.velocity,Q=X.angularVelocity;tt.vadd(X.vlambda,tt),Q&&Q.vadd(X.wlambda,Q)}}return u}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,c=o.indexOf(a);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(f){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],d=[],h={bodies:[]},l=a.STATIC;function u(f){for(var x=f.length,M=0;M!==x;M++){var _=f[M];if(!_.visited&&!(_.body.type&l))return _}return!1}var p=[];function v(f,x,M,_){for(p.push(f),f.visited=!0,x(f,M,_);p.length;)for(var T=p.pop(),P;P=u(T.children);)P.visited=!0,x(P,M,_),p.push(P)}function g(f,x,M){x.push(f.body);for(var _=f.eqs.length,T=0;T!==_;T++){var P=f.eqs[T];M.indexOf(P)===-1&&M.push(P)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(f,x){for(var M=c,_=this.nodePool,T=x.bodies,P=this.equations,N=P.length,L=T.length,E=this.subsolver;_.length<L;)_.push(this.createNode());M.length=L;for(var y=0;y<L;y++)M[y]=_[y];for(var y=0;y!==L;y++){var b=M[y];b.body=T[y],b.children.length=0,b.eqs.length=0,b.visited=!1}for(var B=0;B!==N;B++){var U=P[B],y=T.indexOf(U.bi),W=T.indexOf(U.bj),X=M[y],et=M[W];X.children.push(et),X.eqs.push(U),et.children.push(X),et.eqs.push(U)}var O,D=0,tt=d;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var Q=h;O=u(M);){tt.length=0,Q.bodies.length=0,v(O,g,Q.bodies,tt);var F=tt.length;tt=tt.sort(m);for(var y=0;y!==F;y++)E.addEquation(tt[y]);E.solve(f,Q),E.removeAllEquations(),D++}return D};function m(f,x){return x.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[a]===void 0&&(c[a]=[]),c[a].indexOf(o)===-1&&c[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[a]!==void 0&&c[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[a]===void 0)return this;var d=c[a].indexOf(o);return d!==-1&&c[a].splice(d,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,c=o[a.type];if(c!==void 0){a.target=this;for(var d=0,h=c.length;d<h;d++)c[d].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,u){u=u||{},u.root=null,u.aabb=l,o.call(this,u),this.maxDepth=typeof u.maxDepth<"u"?u.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,u){this.children.length=this.data.length=0},o.prototype.insert=function(l,u,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(g[f].insert(l,u,p+1))return!0;m&&(g.length=0)}return v.push(u),!0};var d=new a;o.prototype.subdivide=function(){var l=this.aabb,u=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),p.vsub(u,d),d.scale(.5,d);for(var g=this.root||this,m=0;m!==8;m++){var f=v[m];f.root=g;var x=f.aabb.lowerBound;x.x*=d.x,x.y*=d.y,x.z*=d.z,x.vadd(u,x),x.vadd(d,f.aabb.upperBound)}},o.prototype.aabbQuery=function(l,u){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(u,v.data),Array.prototype.push.apply(p,v.children)}return u};var h=new r;o.prototype.rayQuery=function(l,u,p){return l.getAABB(h),h.toLocalFrame(u,h),this.aabbQuery(h,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var u=l.pop(),p=u.children.length-1;p>=0;p--)u.children[p].data.length||u.children.splice(p,1);Array.prototype.push.apply(l,u.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var c=o;o=a,a=c}return this.data[a+"-"+o]},r.prototype.set=function(a,o,c){if(a>o){var d=o;o=a,a=d}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var c=o.pop();delete a[c]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var c in o)c in a||(a[c]=o[c]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),d=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),u=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(st){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=st,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(st,ut,gt,_t,ee,Bt){var Tt;this.contactPointPool.length?(Tt=this.contactPointPool.pop(),Tt.bi=st,Tt.bj=ut):Tt=new u(st,ut),Tt.enabled=st.collisionResponse&&ut.collisionResponse&&gt.collisionResponse&&_t.collisionResponse;var Nt=this.currentContactMaterial;Tt.restitution=Nt.restitution,Tt.setSpookParams(Nt.contactEquationStiffness,Nt.contactEquationRelaxation,this.world.dt);var rt=gt.material||st.material,At=_t.material||ut.material;return rt&&At&&rt.restitution>=0&&At.restitution>=0&&(Tt.restitution=rt.restitution*At.restitution),Tt.si=ee||gt,Tt.sj=Bt||_t,Tt},v.prototype.createFrictionEquationsFromContact=function(st,ut){var gt=st.bi,_t=st.bj,ee=st.si,Bt=st.sj,Tt=this.world,Nt=this.currentContactMaterial,rt=Nt.friction,At=ee.material||gt.material,Dt=Bt.material||_t.material;if(At&&Dt&&At.friction>=0&&Dt.friction>=0&&(rt=At.friction*Dt.friction),rt>0){var Yt=rt*Tt.gravity.length(),Ct=gt.invMass+_t.invMass;Ct>0&&(Ct=1/Ct);var bt=this.frictionEquationPool,It=bt.length?bt.pop():new p(gt,_t,Yt*Ct),Jt=bt.length?bt.pop():new p(gt,_t,Yt*Ct);return It.bi=Jt.bi=gt,It.bj=Jt.bj=_t,It.minForce=Jt.minForce=-Yt*Ct,It.maxForce=Jt.maxForce=Yt*Ct,It.ri.copy(st.ri),It.rj.copy(st.rj),Jt.ri.copy(st.ri),Jt.rj.copy(st.rj),st.ni.tangents(It.t,Jt.t),It.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,Tt.dt),Jt.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,Tt.dt),It.enabled=Jt.enabled=st.enabled,ut.push(It,Jt),!0}return!1};var g=new c,m=new c,f=new c;v.prototype.createFrictionFromAverage=function(st){var ut=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ut,this.frictionResult)||st===1)){var gt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),f.setZero();var ee=ut.bi;ut.bj;for(var Bt=0;Bt!==st;Bt++)ut=this.result[this.result.length-1-Bt],ut.bodyA!==ee?(g.vadd(ut.ni,g),m.vadd(ut.ri,m),f.vadd(ut.rj,f)):(g.vsub(ut.ni,g),m.vadd(ut.rj,m),f.vadd(ut.ri,f));var Tt=1/st;m.scale(Tt,gt.ri),f.scale(Tt,gt.rj),_t.ri.copy(gt.ri),_t.rj.copy(gt.rj),g.normalize(),g.tangents(gt.t,_t.t)}};var x=new c,M=new c,_=new h,T=new h;v.prototype.getContacts=function(st,ut,gt,_t,ee,Bt,Tt){this.contactPointPool=ee,this.frictionEquationPool=Tt,this.result=_t,this.frictionResult=Bt;for(var Nt=_,rt=T,At=x,Dt=M,Yt=0,Ct=st.length;Yt!==Ct;Yt++){var bt=st[Yt],It=ut[Yt],Jt=null;bt.material&&It.material&&(Jt=gt.getContactMaterial(bt.material,It.material)||null);for(var oe=0;oe<bt.shapes.length;oe++){bt.quaternion.mult(bt.shapeOrientations[oe],Nt),bt.quaternion.vmult(bt.shapeOffsets[oe],At),At.vadd(bt.position,At);for(var Mt=bt.shapes[oe],he=0;he<It.shapes.length;he++){It.quaternion.mult(It.shapeOrientations[he],rt),It.quaternion.vmult(It.shapeOffsets[he],Dt),Dt.vadd(It.position,Dt);var w=It.shapes[he];if(!(At.distanceTo(Dt)>Mt.boundingSphereRadius+w.boundingSphereRadius)){var k=null;Mt.material&&w.material&&(k=gt.getContactMaterial(Mt.material,w.material)||null),this.currentContactMaterial=k||Jt||gt.defaultContactMaterial;var Y=this[Mt.type|w.type];Y&&(Mt.type<w.type?Y.call(this,Mt,w,At,Dt,Nt,rt,bt,It,Mt,w):Y.call(this,w,Mt,Dt,At,rt,Nt,It,bt,Mt,w))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(st,ut,gt,_t,ee,Bt,Tt,Nt){st.convexPolyhedronRepresentation.material=st.material,ut.convexPolyhedronRepresentation.material=ut.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ut.convexPolyhedronRepresentation,gt,_t,ee,Bt,Tt,Nt,st,ut)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(st,ut,gt,_t,ee,Bt,Tt,Nt){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ut,gt,_t,ee,Bt,Tt,Nt,st,ut)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(st,ut,gt,_t,ee,Bt,Tt,Nt){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexParticle(st.convexPolyhedronRepresentation,ut,gt,_t,ee,Bt,Tt,Nt,st,ut)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=this.createContactEquation(Tt,Nt,st,ut);_t.vsub(gt,rt.ni),rt.ni.normalize(),rt.ri.copy(rt.ni),rt.rj.copy(rt.ni),rt.ri.mult(st.radius,rt.ri),rt.rj.mult(-ut.radius,rt.rj),rt.ri.vadd(gt,rt.ri),rt.ri.vsub(Tt.position,rt.ri),rt.rj.vadd(_t,rt.rj),rt.rj.vsub(Nt.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)};var P=new c,N=new c,L=new c;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=new c,At=P;At.set(0,0,1),ee.vmult(At,At);for(var Dt=0;Dt<ut.vertices.length/3;Dt++){ut.getVertex(Dt,rt);var Yt=new c;Yt.copy(rt),d.pointToWorldFrame(_t,Bt,Yt,rt);var Ct=N;rt.vsub(gt,Ct);var bt=At.dot(Ct);if(bt<=0){var It=this.createContactEquation(Tt,Nt,st,ut);It.ni.copy(At);var Jt=L;At.scale(Ct.dot(At),Jt),rt.vsub(Jt,Jt),It.ri.copy(Jt),It.ri.vsub(Tt.position,It.ri),It.rj.copy(rt),It.rj.vsub(Nt.position,It.rj),this.result.push(It),this.createFrictionEquationsFromContact(It,this.frictionResult)}}};var E=new c,y=new c;new c;var b=new c,B=new c,U=new c,W=new c,X=new c,et=new c,O=new c,D=new c,tt=new c,Q=new c,F=new c,J=new r,z=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=U,At=W,Dt=X,Yt=et,Ct=O,bt=D,It=J,Jt=B,oe=y,Mt=z;d.pointToLocalFrame(_t,Bt,gt,Ct);var he=st.radius;It.lowerBound.set(Ct.x-he,Ct.y-he,Ct.z-he),It.upperBound.set(Ct.x+he,Ct.y+he,Ct.z+he),ut.getTrianglesInAABB(It,Mt);for(var w=b,k=st.radius*st.radius,Y=0;Y<Mt.length;Y++)for(var j=0;j<3;j++)if(ut.getVertex(ut.indices[Mt[Y]*3+j],w),w.vsub(Ct,oe),oe.norm2()<=k){Jt.copy(w),d.pointToWorldFrame(_t,Bt,Jt,w),w.vsub(gt,oe);var V=this.createContactEquation(Tt,Nt,st,ut);V.ni.copy(oe),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(st.radius,V.ri),V.ri.vadd(gt,V.ri),V.ri.vsub(Tt.position,V.ri),V.rj.copy(w),V.rj.vsub(Nt.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(var Y=0;Y<Mt.length;Y++)for(var j=0;j<3;j++){ut.getVertex(ut.indices[Mt[Y]*3+j],rt),ut.getVertex(ut.indices[Mt[Y]*3+(j+1)%3],At),At.vsub(rt,Dt),Ct.vsub(At,bt);var xt=bt.dot(Dt);Ct.vsub(rt,bt);var Rt=bt.dot(Dt);if(Rt>0&&xt<0){Ct.vsub(rt,bt),Yt.copy(Dt),Yt.normalize(),Rt=bt.dot(Yt),Yt.scale(Rt,bt),bt.vadd(rt,bt);var Ut=bt.distanceTo(Ct);if(Ut<st.radius){var V=this.createContactEquation(Tt,Nt,st,ut);bt.vsub(Ct,V.ni),V.ni.normalize(),V.ni.scale(st.radius,V.ri),d.pointToWorldFrame(_t,Bt,bt,bt),bt.vsub(Nt.position,V.rj),d.vectorToWorldFrame(Bt,V.ni,V.ni),d.vectorToWorldFrame(Bt,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}}for(var Gt=tt,$t=Q,Wt=F,Kt=E,Y=0,te=Mt.length;Y!==te;Y++){ut.getTriangleVertices(Mt[Y],Gt,$t,Wt),ut.getNormal(Mt[Y],Kt),Ct.vsub(Gt,bt);var Ut=bt.dot(Kt);if(Kt.scale(Ut,bt),Ct.vsub(bt,bt),Ut=bt.distanceTo(Ct),o.pointInTriangle(bt,Gt,$t,Wt)&&Ut<st.radius){var V=this.createContactEquation(Tt,Nt,st,ut);bt.vsub(Ct,V.ni),V.ni.normalize(),V.ni.scale(st.radius,V.ri),d.pointToWorldFrame(_t,Bt,bt,bt),bt.vsub(Nt.position,V.rj),d.vectorToWorldFrame(Bt,V.ni,V.ni),d.vectorToWorldFrame(Bt,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}Mt.length=0};var A=new c,R=new c;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=this.createContactEquation(Tt,Nt,st,ut);if(rt.ni.set(0,0,1),Bt.vmult(rt.ni,rt.ni),rt.ni.negate(rt.ni),rt.ni.normalize(),rt.ni.mult(st.radius,rt.ri),gt.vsub(_t,A),rt.ni.mult(rt.ni.dot(A),R),A.vsub(R,rt.rj),-A.dot(rt.ni)<=st.radius){var At=rt.ri,Dt=rt.rj;At.vadd(gt,At),At.vsub(Tt.position,At),Dt.vadd(_t,Dt),Dt.vsub(Nt.position,Dt),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}};var H=new c,K=new c,nt=new c;function q(st,ut,gt){for(var _t=null,ee=st.length,Bt=0;Bt!==ee;Bt++){var Tt=st[Bt],Nt=H;st[(Bt+1)%ee].vsub(Tt,Nt);var rt=K;Nt.cross(ut,rt);var At=nt;gt.vsub(Tt,At);var Dt=rt.dot(At);if(_t===null||Dt>0&&_t===!0||Dt<=0&&_t===!1){_t===null&&(_t=Dt>0);continue}else return!1}return!0}var it=new c,mt=new c,Lt=new c,vt=new c,I=[new c,new c,new c,new c,new c,new c],dt=new c,ht=new c,qt=new c,yt=new c;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=this.v3pool,At=I;gt.vsub(_t,it),ut.getSideNormals(At,Bt);for(var Dt=st.radius,Yt=!1,Ct=ht,bt=qt,It=yt,Jt=null,oe=0,Mt=0,he=0,w=null,k=0,Y=At.length;k!==Y&&Yt===!1;k++){var j=mt;j.copy(At[k]);var V=j.norm();j.normalize();var xt=it.dot(j);if(xt<V+Dt&&xt>0){var Rt=Lt,Ut=vt;Rt.copy(At[(k+1)%3]),Ut.copy(At[(k+2)%3]);var Gt=Rt.norm(),$t=Ut.norm();Rt.normalize(),Ut.normalize();var Wt=it.dot(Rt),Kt=it.dot(Ut);if(Wt<Gt&&Wt>-Gt&&Kt<$t&&Kt>-$t){var Ce=Math.abs(xt-V-Dt);(w===null||Ce<w)&&(w=Ce,Mt=Wt,he=Kt,Jt=V,Ct.copy(j),bt.copy(Rt),It.copy(Ut),oe++)}}}if(oe){Yt=!0;var Vt=this.createContactEquation(Tt,Nt,st,ut);Ct.mult(-Dt,Vt.ri),Vt.ni.copy(Ct),Vt.ni.negate(Vt.ni),Ct.mult(Jt,Ct),bt.mult(Mt,bt),Ct.vadd(bt,Ct),It.mult(he,It),Ct.vadd(It,Vt.rj),Vt.ri.vadd(gt,Vt.ri),Vt.ri.vsub(Tt.position,Vt.ri),Vt.rj.vadd(_t,Vt.rj),Vt.rj.vsub(Nt.position,Vt.rj),this.result.push(Vt),this.createFrictionEquationsFromContact(Vt,this.frictionResult)}for(var te=rt.get(),fe=dt,xe=0;xe!==2&&!Yt;xe++)for(var me=0;me!==2&&!Yt;me++)for(var re=0;re!==2&&!Yt;re++)if(te.set(0,0,0),xe?te.vadd(At[0],te):te.vsub(At[0],te),me?te.vadd(At[1],te):te.vsub(At[1],te),re?te.vadd(At[2],te):te.vsub(At[2],te),_t.vadd(te,fe),fe.vsub(gt,fe),fe.norm2()<Dt*Dt){Yt=!0;var Vt=this.createContactEquation(Tt,Nt,st,ut);Vt.ri.copy(fe),Vt.ri.normalize(),Vt.ni.copy(Vt.ri),Vt.ri.mult(Dt,Vt.ri),Vt.rj.copy(te),Vt.ri.vadd(gt,Vt.ri),Vt.ri.vsub(Tt.position,Vt.ri),Vt.rj.vadd(_t,Vt.rj),Vt.rj.vsub(Nt.position,Vt.rj),this.result.push(Vt),this.createFrictionEquationsFromContact(Vt,this.frictionResult)}rt.release(te),te=null;for(var Zt=rt.get(),Te=rt.get(),Vt=rt.get(),Re=rt.get(),Ce=rt.get(),Ie=At.length,xe=0;xe!==Ie&&!Yt;xe++)for(var me=0;me!==Ie&&!Yt;me++)if(xe%3!==me%3){At[me].cross(At[xe],Zt),Zt.normalize(),At[xe].vadd(At[me],Te),Vt.copy(gt),Vt.vsub(Te,Vt),Vt.vsub(_t,Vt);var $e=Vt.dot(Zt);Zt.mult($e,Re);for(var re=0;re===xe%3||re===me%3;)re++;Ce.copy(gt),Ce.vsub(Re,Ce),Ce.vsub(Te,Ce),Ce.vsub(_t,Ce);var Ae=Math.abs($e),qe=Ce.norm();if(Ae<At[re].norm()&&qe<Dt){Yt=!0;var _e=this.createContactEquation(Tt,Nt,st,ut);Te.vadd(Re,_e.rj),_e.rj.copy(_e.rj),Ce.negate(_e.ni),_e.ni.normalize(),_e.ri.copy(_e.rj),_e.ri.vadd(_t,_e.ri),_e.ri.vsub(gt,_e.ri),_e.ri.normalize(),_e.ri.mult(Dt,_e.ri),_e.ri.vadd(gt,_e.ri),_e.ri.vsub(Tt.position,_e.ri),_e.rj.vadd(_t,_e.rj),_e.rj.vsub(Nt.position,_e.rj),this.result.push(_e),this.createFrictionEquationsFromContact(_e,this.frictionResult)}}rt.release(Zt,Te,Vt,Re,Ce)};var ne=new c,pt=new c,C=new c,S=new c,Z=new c,lt=new c,ct=new c,at=new c,Et=new c,wt=new c;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=this.v3pool;gt.vsub(_t,ne);for(var At=ut.faceNormals,Dt=ut.faces,Yt=ut.vertices,Ct=st.radius,bt=0;bt!==Yt.length;bt++){var It=Yt[bt],Jt=Z;Bt.vmult(It,Jt),_t.vadd(Jt,Jt);var oe=S;if(Jt.vsub(gt,oe),oe.norm2()<Ct*Ct){he=!0;var Mt=this.createContactEquation(Tt,Nt,st,ut);Mt.ri.copy(oe),Mt.ri.normalize(),Mt.ni.copy(Mt.ri),Mt.ri.mult(Ct,Mt.ri),Jt.vsub(_t,Mt.rj),Mt.ri.vadd(gt,Mt.ri),Mt.ri.vsub(Tt.position,Mt.ri),Mt.rj.vadd(_t,Mt.rj),Mt.rj.vsub(Nt.position,Mt.rj),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult);return}}for(var he=!1,bt=0,w=Dt.length;bt!==w&&he===!1;bt++){var k=At[bt],Y=Dt[bt],j=lt;Bt.vmult(k,j);var V=ct;Bt.vmult(Yt[Y[0]],V),V.vadd(_t,V);var xt=at;j.mult(-Ct,xt),gt.vadd(xt,xt);var Rt=Et;xt.vsub(V,Rt);var Ut=Rt.dot(j),Gt=wt;if(gt.vsub(V,Gt),Ut<0&&Gt.dot(j)>0){for(var $t=[],Wt=0,Kt=Y.length;Wt!==Kt;Wt++){var te=rt.get();Bt.vmult(Yt[Y[Wt]],te),_t.vadd(te,te),$t.push(te)}if(q($t,j,gt)){he=!0;var Mt=this.createContactEquation(Tt,Nt,st,ut);j.mult(-Ct,Mt.ri),j.negate(Mt.ni);var fe=rt.get();j.mult(-Ut,fe);var xe=rt.get();j.mult(-Ct,xe),gt.vsub(_t,Mt.rj),Mt.rj.vadd(xe,Mt.rj),Mt.rj.vadd(fe,Mt.rj),Mt.rj.vadd(_t,Mt.rj),Mt.rj.vsub(Nt.position,Mt.rj),Mt.ri.vadd(gt,Mt.ri),Mt.ri.vsub(Tt.position,Mt.ri),rt.release(fe),rt.release(xe),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult);for(var Wt=0,me=$t.length;Wt!==me;Wt++)rt.release($t[Wt]);return}else for(var Wt=0;Wt!==Y.length;Wt++){var re=rt.get(),Zt=rt.get();Bt.vmult(Yt[Y[(Wt+1)%Y.length]],re),Bt.vmult(Yt[Y[(Wt+2)%Y.length]],Zt),_t.vadd(re,re),_t.vadd(Zt,Zt);var Te=pt;Zt.vsub(re,Te);var Vt=C;Te.unit(Vt);var Re=rt.get(),Ce=rt.get();gt.vsub(re,Ce);var Ie=Ce.dot(Vt);Vt.mult(Ie,Re),Re.vadd(re,Re);var $e=rt.get();if(Re.vsub(gt,$e),Ie>0&&Ie*Ie<Te.norm2()&&$e.norm2()<Ct*Ct){var Mt=this.createContactEquation(Tt,Nt,st,ut);Re.vsub(_t,Mt.rj),Re.vsub(gt,Mt.ni),Mt.ni.normalize(),Mt.ni.mult(Ct,Mt.ri),Mt.rj.vadd(_t,Mt.rj),Mt.rj.vsub(Nt.position,Mt.rj),Mt.ri.vadd(gt,Mt.ri),Mt.ri.vsub(Tt.position,Mt.ri),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult);for(var Wt=0,me=$t.length;Wt!==me;Wt++)rt.release($t[Wt]);rt.release(re),rt.release(Zt),rt.release(Re),rt.release($e),rt.release(Ce);return}rt.release(re),rt.release(Zt),rt.release(Re),rt.release($e),rt.release(Ce)}for(var Wt=0,me=$t.length;Wt!==me;Wt++)rt.release($t[Wt])}}},new c,new c,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(st,ut,gt,_t,ee,Bt,Tt,Nt){ut.convexPolyhedronRepresentation.material=ut.material,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,this.planeConvex(st,ut.convexPolyhedronRepresentation,gt,_t,ee,Bt,Tt,Nt)};var Ft=new c,le=new c,St=new c,kt=new c;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=Ft,At=le;At.set(0,0,1),ee.vmult(At,At);for(var Dt=0,Yt=St,Ct=0;Ct!==ut.vertices.length;Ct++){rt.copy(ut.vertices[Ct]),Bt.vmult(rt,rt),_t.vadd(rt,rt),rt.vsub(gt,Yt);var bt=At.dot(Yt);if(bt<=0){var It=this.createContactEquation(Tt,Nt,st,ut),Jt=kt;At.mult(At.dot(Yt),Jt),rt.vsub(Jt,Jt),Jt.vsub(gt,It.ri),It.ni.copy(At),rt.vsub(_t,It.rj),It.ri.vadd(gt,It.ri),It.ri.vsub(Tt.position,It.ri),It.rj.vadd(_t,It.rj),It.rj.vsub(Nt.position,It.rj),this.result.push(It),Dt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(It,this.frictionResult)}}this.enableFrictionReduction&&Dt&&this.createFrictionFromAverage(Dt)};var jt=new c,Qt=new c;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(st,ut,gt,_t,ee,Bt,Tt,Nt,rt,At,Dt,Yt){var Ct=jt;if(!(gt.distanceTo(_t)>st.boundingSphereRadius+ut.boundingSphereRadius)&&st.findSeparatingAxis(ut,gt,ee,_t,Bt,Ct,Dt,Yt)){var bt=[],It=Qt;st.clipAgainstHull(gt,ee,ut,_t,Bt,Ct,-100,100,bt);for(var Jt=0,oe=0;oe!==bt.length;oe++){var Mt=this.createContactEquation(Tt,Nt,st,ut,rt,At),he=Mt.ri,w=Mt.rj;Ct.negate(Mt.ni),bt[oe].normal.negate(It),It.mult(bt[oe].depth,It),bt[oe].point.vadd(It,he),w.copy(bt[oe].point),he.vsub(gt,he),w.vsub(_t,w),he.vadd(gt,he),he.vsub(Tt.position,he),w.vadd(_t,w),w.vsub(Nt.position,w),this.result.push(Mt),Jt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Mt,this.frictionResult)}this.enableFrictionReduction&&Jt&&this.createFrictionFromAverage(Jt)}};var Xt=new c,ce=new c,ie=new c;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=Xt;rt.set(0,0,1),Tt.quaternion.vmult(rt,rt);var At=ce;_t.vsub(Tt.position,At);var Dt=rt.dot(At);if(Dt<=0){var Yt=this.createContactEquation(Nt,Tt,ut,st);Yt.ni.copy(rt),Yt.ni.negate(Yt.ni),Yt.ri.set(0,0,0);var Ct=ie;rt.mult(rt.dot(_t),Ct),_t.vsub(Ct,Ct),Yt.rj.copy(Ct),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}};var ve=new c;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=ve;rt.set(0,0,1),_t.vsub(gt,rt);var At=rt.norm2();if(At<=st.radius*st.radius){var Dt=this.createContactEquation(Nt,Tt,ut,st);rt.normalize(),Dt.rj.copy(rt),Dt.rj.mult(st.radius,Dt.rj),Dt.ni.copy(rt),Dt.ni.negate(Dt.ni),Dt.ri.set(0,0,0),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}};var G=new h,Pt=new c;new c;var ot=new c,ft=new c,zt=new c;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=-1,At=ot,Dt=zt,Yt=null,Ct=Pt;if(Ct.copy(_t),Ct.vsub(gt,Ct),ee.conjugate(G),G.vmult(Ct,Ct),st.pointIsInside(Ct)){st.worldVerticesNeedsUpdate&&st.computeWorldVertices(gt,ee),st.worldFaceNormalsNeedsUpdate&&st.computeWorldFaceNormals(ee);for(var bt=0,It=st.faces.length;bt!==It;bt++){var Jt=[st.worldVertices[st.faces[bt][0]]],oe=st.worldFaceNormals[bt];_t.vsub(Jt[0],ft);var Mt=-oe.dot(ft);(Yt===null||Math.abs(Mt)<Math.abs(Yt))&&(Yt=Mt,rt=bt,At.copy(oe))}if(rt!==-1){var he=this.createContactEquation(Nt,Tt,ut,st);At.mult(Yt,Dt),Dt.vadd(_t,Dt),Dt.vsub(gt,Dt),he.rj.copy(Dt),At.negate(he.ni),he.ri.set(0,0,0);var w=he.ri,k=he.rj;w.vadd(_t,w),w.vsub(Nt.position,w),k.vadd(gt,k),k.vsub(Tt.position,k),this.result.push(he),this.createFrictionEquationsFromContact(he,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(st,ut,gt,_t,ee,Bt,Tt,Nt){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexHeightfield(st.convexPolyhedronRepresentation,ut,gt,_t,ee,Bt,Tt,Nt)};var Ot=new c,se=new c,Se=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=ut.data,At=ut.elementSize,Dt=st.boundingSphereRadius,Yt=se,Ct=Se,bt=Ot;d.pointToLocalFrame(_t,Bt,gt,bt);var It=Math.floor((bt.x-Dt)/At)-1,Jt=Math.ceil((bt.x+Dt)/At)+1,oe=Math.floor((bt.y-Dt)/At)-1,Mt=Math.ceil((bt.y+Dt)/At)+1;if(!(Jt<0||Mt<0||It>rt.length||oe>rt[0].length)){It<0&&(It=0),Jt<0&&(Jt=0),oe<0&&(oe=0),Mt<0&&(Mt=0),It>=rt.length&&(It=rt.length-1),Jt>=rt.length&&(Jt=rt.length-1),Mt>=rt[0].length&&(Mt=rt[0].length-1),oe>=rt[0].length&&(oe=rt[0].length-1);var he=[];ut.getRectMinMax(It,oe,Jt,Mt,he);var w=he[0],k=he[1];if(!(bt.z-Dt>k||bt.z+Dt<w))for(var Y=It;Y<Jt;Y++)for(var j=oe;j<Mt;j++)ut.getConvexTrianglePillar(Y,j,!1),d.pointToWorldFrame(_t,Bt,ut.pillarOffset,Yt),gt.distanceTo(Yt)<ut.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ut.pillarConvex,gt,Yt,ee,Bt,Tt,Nt,null,null,Ct,null),ut.getConvexTrianglePillar(Y,j,!0),d.pointToWorldFrame(_t,Bt,ut.pillarOffset,Yt),gt.distanceTo(Yt)<ut.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ut.pillarConvex,gt,Yt,ee,Bt,Tt,Nt,null,null,Ct,null)}};var Le=new c,ae=new c;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(st,ut,gt,_t,ee,Bt,Tt,Nt){var rt=ut.data,At=st.radius,Dt=ut.elementSize,Yt=ae,Ct=Le;d.pointToLocalFrame(_t,Bt,gt,Ct);var bt=Math.floor((Ct.x-At)/Dt)-1,It=Math.ceil((Ct.x+At)/Dt)+1,Jt=Math.floor((Ct.y-At)/Dt)-1,oe=Math.ceil((Ct.y+At)/Dt)+1;if(!(It<0||oe<0||bt>rt.length||oe>rt[0].length)){bt<0&&(bt=0),It<0&&(It=0),Jt<0&&(Jt=0),oe<0&&(oe=0),bt>=rt.length&&(bt=rt.length-1),It>=rt.length&&(It=rt.length-1),oe>=rt[0].length&&(oe=rt[0].length-1),Jt>=rt[0].length&&(Jt=rt[0].length-1);var Mt=[];ut.getRectMinMax(bt,Jt,It,oe,Mt);var he=Mt[0],w=Mt[1];if(!(Ct.z-At>w||Ct.z+At<he))for(var k=this.result,Y=bt;Y<It;Y++)for(var j=Jt;j<oe;j++){var V=k.length;ut.getConvexTrianglePillar(Y,j,!1),d.pointToWorldFrame(_t,Bt,ut.pillarOffset,Yt),gt.distanceTo(Yt)<ut.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ut.pillarConvex,gt,Yt,ee,Bt,Tt,Nt),ut.getConvexTrianglePillar(Y,j,!0),d.pointToWorldFrame(_t,Bt,ut.pillarOffset,Yt),gt.distanceTo(Yt)<ut.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ut.pillarConvex,gt,Yt,ee,Bt,Tt,Nt);var xt=k.length-V;if(xt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=_;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var d=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),u=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),f=e("../collision/AABB"),x=e("../collision/Ray"),M=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new M,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new u("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new f;var T=new x;if(_.prototype.getContactMaterial=function(D,tt){return this.contactMaterialTable.get(D.id,tt.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var D=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=D,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(D){this.bodies.indexOf(D)===-1&&(D.index=this.bodies.length,this.bodies.push(D),D.world=this,D.initPosition.copy(D.position),D.initVelocity.copy(D.velocity),D.timeLastSleepy=this.time,D instanceof v&&(D.initAngularVelocity.copy(D.angularVelocity),D.initQuaternion.copy(D.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=D,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(D){this.constraints.push(D)},_.prototype.removeConstraint=function(D){var tt=this.constraints.indexOf(D);tt!==-1&&this.constraints.splice(tt,1)},_.prototype.rayTest=function(D,tt,Q){Q instanceof m?this.raycastClosest(D,tt,{skipBackfaces:!0},Q):this.raycastAll(D,tt,{skipBackfaces:!0},Q)},_.prototype.raycastAll=function(D,tt,Q,F){return Q.mode=x.ALL,Q.from=D,Q.to=tt,Q.callback=F,T.intersectWorld(this,Q)},_.prototype.raycastAny=function(D,tt,Q,F){return Q.mode=x.ANY,Q.from=D,Q.to=tt,Q.result=F,T.intersectWorld(this,Q)},_.prototype.raycastClosest=function(D,tt,Q,F){return Q.mode=x.CLOSEST,Q.from=D,Q.to=tt,Q.result=F,T.intersectWorld(this,Q)},_.prototype.remove=function(D){D.world=null;var tt=this.bodies.length-1,Q=this.bodies,F=Q.indexOf(D);if(F!==-1){Q.splice(F,1);for(var J=0;J!==Q.length;J++)Q[J].index=J;this.collisionMatrix.setNumObjects(tt),this.removeBodyEvent.body=D,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(D){this.materials.push(D)},_.prototype.addContactMaterial=function(D){this.contactmaterials.push(D),this.contactMaterialTable.set(D.materials[0].id,D.materials[1].id,D)},typeof performance>"u"&&(performance={}),!performance.now){var P=Date.now();performance.timing&&performance.timing.navigationStart&&(P=performance.timing.navigationStart),performance.now=function(){return Date.now()-P}}var N=new a;_.prototype.step=function(D,tt,Q){if(Q=Q||10,tt=tt||0,tt===0)this.internalStep(D),this.time+=D;else{var F=Math.floor((this.time+tt)/D)-Math.floor(this.time/D);F=Math.min(F,Q);for(var J=performance.now(),z=0;z!==F&&(this.internalStep(D),!(performance.now()-J>D*1e3));z++);this.time+=tt;for(var A=this.time%D,R=A/D,H=N,K=this.bodies,nt=0;nt!==K.length;nt++){var q=K[nt];q.type!==v.STATIC&&q.sleepState!==v.SLEEPING?(q.position.vsub(q.previousPosition,H),H.scale(R,H),q.position.vadd(H,q.interpolatedPosition)):(q.interpolatedPosition.copy(q.position),q.interpolatedQuaternion.copy(q.quaternion))}}};var L={type:"postStep"},E={type:"preStep"},y={type:"collide",body:null,contact:null},b=[],B=[],U=[],W=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var X=new o,et=new o,O=new a;_.prototype.internalStep=function(D){this.dt=D;var tt=this.contacts,Q=U,F=W,J=this.numObjects(),z=this.bodies,A=this.solver,R=this.gravity,H=this.doProfiling,K=this.profile,nt=v.DYNAMIC,q,it=this.constraints,mt=B;R.norm();var Lt=R.x,vt=R.y,I=R.z,dt=0;for(H&&(q=performance.now()),dt=0;dt!==J;dt++){var ht=z[dt];if(ht.type&nt){var qt=ht.force,yt=ht.mass;qt.x+=yt*Lt,qt.y+=yt*vt,qt.z+=yt*I}}for(var dt=0,ne=this.subsystems.length;dt!==ne;dt++)this.subsystems[dt].update();H&&(q=performance.now()),Q.length=0,F.length=0,this.broadphase.collisionPairs(this,Q,F),H&&(K.broadphase=performance.now()-q);var jt=it.length;for(dt=0;dt!==jt;dt++){var pt=it[dt];if(!pt.collideConnected)for(var C=Q.length-1;C>=0;C-=1)(pt.bodyA===Q[C]&&pt.bodyB===F[C]||pt.bodyB===Q[C]&&pt.bodyA===F[C])&&(Q.splice(C,1),F.splice(C,1))}this.collisionMatrixTick(),H&&(q=performance.now());var S=b,Z=tt.length;for(dt=0;dt!==Z;dt++)S.push(tt[dt]);tt.length=0;var lt=this.frictionEquations.length;for(dt=0;dt!==lt;dt++)mt.push(this.frictionEquations[dt]);this.frictionEquations.length=0,this.narrowphase.getContacts(Q,F,this,tt,S,this.frictionEquations,mt),H&&(K.narrowphase=performance.now()-q),H&&(q=performance.now());for(var dt=0;dt<this.frictionEquations.length;dt++)A.addEquation(this.frictionEquations[dt]);for(var ct=tt.length,at=0;at!==ct;at++){var pt=tt[at],ht=pt.bi,Et=pt.bj;pt.si,pt.sj;var wt;if(ht.material&&Et.material?wt=this.getContactMaterial(ht.material,Et.material)||this.defaultContactMaterial:wt=this.defaultContactMaterial,wt.friction,ht.material&&Et.material&&(ht.material.friction>=0&&Et.material.friction>=0&&ht.material.friction*Et.material.friction,ht.material.restitution>=0&&Et.material.restitution>=0&&(pt.restitution=ht.material.restitution*Et.material.restitution)),A.addEquation(pt),ht.allowSleep&&ht.type===v.DYNAMIC&&ht.sleepState===v.SLEEPING&&Et.sleepState===v.AWAKE&&Et.type!==v.STATIC){var Ft=Et.velocity.norm2()+Et.angularVelocity.norm2(),le=Math.pow(Et.sleepSpeedLimit,2);Ft>=le*2&&(ht._wakeUpAfterNarrowphase=!0)}if(Et.allowSleep&&Et.type===v.DYNAMIC&&Et.sleepState===v.SLEEPING&&ht.sleepState===v.AWAKE&&ht.type!==v.STATIC){var St=ht.velocity.norm2()+ht.angularVelocity.norm2(),kt=Math.pow(ht.sleepSpeedLimit,2);St>=kt*2&&(Et._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ht,Et,!0),this.collisionMatrixPrevious.get(ht,Et)||(y.body=Et,y.contact=pt,ht.dispatchEvent(y),y.body=ht,Et.dispatchEvent(y))}for(H&&(K.makeContactConstraints=performance.now()-q,q=performance.now()),dt=0;dt!==J;dt++){var ht=z[dt];ht._wakeUpAfterNarrowphase&&(ht.wakeUp(),ht._wakeUpAfterNarrowphase=!1)}var jt=it.length;for(dt=0;dt!==jt;dt++){var pt=it[dt];pt.update();for(var C=0,Qt=pt.equations.length;C!==Qt;C++){var Xt=pt.equations[C];A.addEquation(Xt)}}A.solve(D,this),H&&(K.solve=performance.now()-q),A.removeAllEquations();var ce=Math.pow;for(dt=0;dt!==J;dt++){var ht=z[dt];if(ht.type&nt){var ie=ce(1-ht.linearDamping,D),ve=ht.velocity;ve.mult(ie,ve);var G=ht.angularVelocity;if(G){var Pt=ce(1-ht.angularDamping,D);G.mult(Pt,G)}}}for(this.dispatchEvent(E),dt=0;dt!==J;dt++){var ht=z[dt];ht.preStep&&ht.preStep.call(ht)}H&&(q=performance.now());var ot=X,ft=et,zt=this.stepnumber,Ot=v.DYNAMIC|v.KINEMATIC,se=zt%(this.quatNormalizeSkip+1)===0,Se=this.quatNormalizeFast,Le=D*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,dt=0;dt!==J;dt++){var ae=z[dt],st=ae.force,ut=ae.torque;if(ae.type&Ot&&ae.sleepState!==v.SLEEPING){var gt=ae.velocity,_t=ae.angularVelocity,ee=ae.position,Bt=ae.quaternion,Tt=ae.invMass,Nt=ae.invInertiaWorld;gt.x+=st.x*Tt*D,gt.y+=st.y*Tt*D,gt.z+=st.z*Tt*D,ae.angularVelocity&&(Nt.vmult(ut,O),O.mult(D,O),O.vadd(_t,_t)),ee.x+=gt.x*D,ee.y+=gt.y*D,ee.z+=gt.z*D,ae.angularVelocity&&(ot.set(_t.x,_t.y,_t.z,0),ot.mult(Bt,ft),Bt.x+=Le*ft.x,Bt.y+=Le*ft.y,Bt.z+=Le*ft.z,Bt.w+=Le*ft.w,se&&(Se?Bt.normalizeFast():Bt.normalize())),ae.aabb&&(ae.aabbNeedsUpdate=!0),ae.updateInertiaWorld&&ae.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,H&&(K.integrate=performance.now()-q),this.time+=D,this.stepnumber+=1,this.dispatchEvent(L),dt=0;dt!==J;dt++){var ht=z[dt],rt=ht.postStep;rt&&rt.call(ht)}if(this.allowSleep)for(dt=0;dt!==J;dt++)z[dt].sleepTick(this.time)},_.prototype.clearForces=function(){for(var D=this.bodies,tt=D.length,Q=0;Q!==tt;Q++){var F=D[Q];F.force,F.torque,F.force.set(0,0,0),F.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(ll);const We=ll.exports,bo={width:1,height:1,depth:1,position:new $(0,0,0),materials:new tl({color:16711680}),mass:0};class on{constructor(t,e,n={}){Pe(this,"opts");this.scene=t,this.world=e,this.opts={...bo,...n}}setOptions(t=!1){return t===!1?this.opts={...bo}:this.opts={...this.opts,...t},this}createBox({width:t=this.opts.width,height:e=this.opts.height,depth:n=this.opts.depth,position:s=this.opts.position,mass:r=this.opts.mass,materials:a=this.opts.materials}={}){const o=new hn(new Bi(t,e,n),a);o.position.copy(s),this.scene.add(o);const c=new We.Body({mass:r,shape:new We.Box(new We.Vec3(t/2,e/2,n/2)),position:new We.Vec3(s.x,s.y,s.z)});return this.world.addBody(c),{mesh:o,body:c}}static loadTexture(t,e={}){const n=new el().load(t);return e.wrapS&&(n.wrapS=Zi),e.wrapT&&(n.wrapT=Zi),e.repeat&&n.repeat.set(e.repeat.x,e.repeat.y),n}static createMaterial(t,e){const n=on.loadTexture(on.resolvePath(t),e);return new tl({map:n})}static createMaterials(t,e){const n=new Map;return t.map(s=>{if(n.has(s))return n.get(s);const r=on.createMaterial(s,e);return n.set(s,r),r})}static resolvePath(t){return`/mini-games/arkanoid/textures/${t.startsWith("/")?t.slice(1):t}`}}var Qi,Bn;class Yp{constructor(t,e={}){Pe(this,"opts",{el:document.body,width:24,height:32,cx:0,cy:0,cz:0});Pe(this,"boxCtor");Pe(this,"wall",[]);Pe(this,"items",[]);Pe(this,"baffle",null);Pe(this,"ball",null);Pe(this,"world",new We.World);Pe(this,"ballBody",null);Pe(this,"itemsBody",[]);Pe(this,"baffleBody",null);Pe(this,"wallBody",[]);Pe(this,"ballMaterial",new We.Material("ball"));Pe(this,"itemMaterial",new We.Material("item"));Pe(this,"wallMaterial",new We.Material("wall"));Pe(this,"baffleMaterial",new We.Material("baffle"));Pe(this,"toBeRemoveItem",[-1,void 0]);Wn(this,Qi,"default");Wn(this,Bn,new $(10,0,-10));this.layout=t,this.opts={...this.opts,...e},this.world.gravity.set(0,0,0),this.boxCtor=new on(this.layout.scene,this.world),this.init(),this.initEvent(),this.layout.renderer.setAnimationLoop(this.animate.bind(this))}get status(){return oi(this,Qi)}set status(t){switch(Gr(this,Qi,t),window._emit("status",t),t){case"playing":this.run();break;case"paused":this.stop();break;case"over":this.stop();break;case"default":default:this.stop();break}}init(){this.createWall(),this.createBall(),this.createBaffle(),this.createItems(),this.contactMaterial()}initEvent(){this.handlePostStep=this.handlePostStep.bind(this),this.world.addEventListener("postStep",this.handlePostStep)}handlePostStep(){this.world.contacts.forEach(t=>{const e=t.bi,n=t.bj;let s=this.getContactItemIndex(e,n);if(s=s===-1?this.getContactItemIndex(n,e):s,s!==-1){const r=this.ballBody===e?n:e;this.toBeRemoveItem=[s,r]}})}getContactItemIndex(t,e){return t!==this.ballBody?-1:this.itemsBody.findIndex(s=>s===e)}contactMaterial(){const{world:t,ballMaterial:e,itemMaterial:n,wallMaterial:s,baffleMaterial:r}=this;t.addContactMaterial(new We.ContactMaterial(e,n,{friction:0,restitution:1})),t.addContactMaterial(new We.ContactMaterial(e,s,{friction:0,restitution:1})),t.addContactMaterial(new We.ContactMaterial(e,r,{friction:0,restitution:1})),this.ballBody.material=e,this.itemsBody.forEach(a=>{a.material=n}),this.wallBody.forEach(a=>{a.material=s}),this.baffleBody.material=r}start(){this.status="playing"}pause(){this.status="paused"}run(){this.ballBody.velocity.set(oi(this,Bn).x,oi(this,Bn).y,oi(this,Bn).z)}stop(){oi(this,Bn).set(this.ballBody.velocity.x,this.ballBody.velocity.y,this.ballBody.velocity.z),this.ballBody.velocity.set(0,0,0)}restart(){this.stop(),this.items.forEach(e=>{this.layout.scene.remove(e)}),this.itemsBody.forEach(e=>{this.world.remove(e)}),this.items.length=0,this.itemsBody.length=0,this.createItems(),Gr(this,Bn,new $(10,0,-10)),this.ball.position.set(this.opts.cx-.5,0,this.opts.cz+this.opts.height/2-1),this.ballBody.position.set(this.opts.cx-.5,0,this.opts.cz+this.opts.height/2-1);const t=this.itemMaterial;this.itemsBody.forEach(e=>{e.material=t}),this.baffle.position.x=0,this.baffleBody.position.x=0,this.status="playing"}moveBaffle(t){if(!!this.baffleBody)switch(t){case"left":this.baffleBody.position.x=Math.max(-this.opts.width/2+3,this.baffleBody.position.x-1);break;case"right":this.baffleBody.position.x=Math.min(this.opts.width/2-3,this.baffleBody.position.x+1);break}}syncPhysicsToGraphics(){this.ball.position.copy(this.ballBody.position),this.baffle.position.copy(this.baffleBody.position),this.wall.forEach((t,e)=>{t.position.copy(this.wallBody[e].position)}),this.items.forEach((t,e)=>{t.position.copy(this.itemsBody[e].position)})}removeItem(){this.toBeRemoveItem[0]!==-1&&this.toBeRemoveItem[1]&&(this.layout.scene.remove(this.items[this.toBeRemoveItem[0]]),this.items.splice(this.toBeRemoveItem[0],1),this.itemsBody.splice(this.toBeRemoveItem[0],1),this.world.remove(this.toBeRemoveItem[1]),this.toBeRemoveItem=[-1,void 0])}check(){if(this.ball&&this.ball.position.z>this.opts.height/2){this.status="over";return}this.items.length===0&&(this.status="win")}animate(){this.layout.controls.update(),this.status==="playing"&&(this.world.step(1/60),this.syncPhysicsToGraphics(),this.removeItem(),this.check(),this.ball&&(this.ball.rotation.x+=.01,this.ball.rotation.y+=.01,this.ball.rotation.z+=.01)),this.render()}render(){this.layout.renderer.render(this.layout.scene,this.layout.camera)}createWall(){const{width:t,height:e,cx:n,cz:s}=this.opts,{mesh:r,body:a}=this.boxCtor.createBox({width:t,height:1,depth:1,position:new $(n,0,s-e/2),materials:on.createMaterials(["minecraft/grass_dirt.png","minecraft/grass_dirt.png","minecraft/grass.png","minecraft/dirt.png","minecraft/grass_dirt.png","minecraft/grass_dirt.png"],{wrapS:!0,wrapT:!0,repeat:{x:t,y:1}})}),{mesh:o,body:c}=this.boxCtor.createBox({width:1,height:1,depth:e,position:new $(n-t/2+.5,0,s+.5),materials:on.createMaterials(["minecraft/grass_dirt.png","minecraft/grass_dirt.png","minecraft/grass.png","minecraft/dirt.png","minecraft/grass_dirt.png","minecraft/grass_dirt.png"],{wrapS:!0,wrapT:!0,repeat:{x:1,y:e}})}),{mesh:d,body:h}=this.boxCtor.createBox({width:1,height:1,depth:e,position:new $(n+t/2-.5,0,s+.5),materials:on.createMaterials(["minecraft/grass_dirt.png","minecraft/grass_dirt.png","minecraft/grass.png","minecraft/dirt.png","minecraft/grass_dirt.png","minecraft/grass_dirt.png"],{wrapS:!0,wrapT:!0,repeat:{x:1,y:e}})});this.wall.push(r,o,d),this.wallBody.push(a,c,h)}createBall(){const t=new hn(new xa(.5,32,32),new va({map:new el().load(on.resolvePath("sprite.png"))}));t.position.set(this.opts.cx-.5,0,this.opts.cz+this.opts.height/2-1),this.layout.scene.add(t),this.ball=t,this.ballBody=new We.Body({mass:1,position:new We.Vec3(t.position.x,t.position.y,t.position.z),shape:new We.Sphere(.5)}),this.world.addBody(this.ballBody)}createBaffle(){const{height:t,cx:e,cz:n}=this.opts,s=on.createMaterials(["minecraft/grass_dirt.png","minecraft/grass_dirt.png","minecraft/grass.png","minecraft/dirt.png","minecraft/grass_dirt.png","minecraft/grass_dirt.png"],{wrapS:!0,wrapT:!0,repeat:{x:4,y:1}}),{mesh:r,body:a}=this.boxCtor.setOptions({width:4,height:1,depth:1,position:new $(e,0,n+t/2),materials:s}).createBox();this.baffle=r,this.baffleBody=a}createItems(){const{width:t,height:e}=this.opts;this.boxCtor.setOptions({width:1,height:1,depth:1,position:new $(0,0,0),materials:on.createMaterial("crate.gif")});for(let n=0;n<(e-2)/2;n++)for(let s=0;s<t-2;s++){const{mesh:r,body:a}=this.boxCtor.createBox({position:new $(s-t/2+1.5,0,n-e/2+1)});this.items.push(r),this.itemsBody.push(a)}}}Qi=new WeakMap,Bn=new WeakMap;const To={type:"change"},Sa={type:"start"},cl={type:"end"},br=new Xo,Ao=new Un,Zp=Math.cos(70*xc.DEG2RAD),Ue=new $,Ze=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ys=1e-6;class Kp extends lh{constructor(t,e=null){super(t,e),this.state=we.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new si,this._lastTargetPosition=new $,this._quat=new si().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qa,this._sphericalDelta=new Qa,this._scale=1,this._panOffset=new $,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new $,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$p.bind(this),this._onPointerDown=jp.bind(this),this._onPointerUp=Qp.bind(this),this._onContextMenu=sm.bind(this),this._onMouseWheel=em.bind(this),this._onKeyDown=nm.bind(this),this._onTouchStart=im.bind(this),this._onTouchMove=rm.bind(this),this._onMouseDown=Jp.bind(this),this._onMouseMove=tm.bind(this),this._interceptControlDown=am.bind(this),this._interceptControlUp=om.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(To),this.update(),this.state=we.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ue.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new $(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(o),this.object.updateMatrixWorld(),a=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(br.origin.copy(this.object.position),br.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(br.direction))<Zp?this.object.lookAt(this.target):(Ao.setFromNormalAndCoplanarPoint(this.object.up,this.target),br.intersectPlane(Ao,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ys||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ys||this._lastTargetPosition.distanceToSquared(this.target)>ys?(this.dispatchEvent(To),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ue,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function jp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function $p(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Qp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cl),this.state=we.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=we.DOLLY;break;case bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}break;case bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(Sa)}function tm(i){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function em(i){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(i.preventDefault(),this.dispatchEvent(Sa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(cl))}function nm(i){this.enabled!==!1&&this._handleKeyDown(i)}function im(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=we.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=we.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(Sa)}function rm(i){switch(this._trackPointer(i),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=we.NONE}}function sm(i){this.enabled!==!1&&i.preventDefault()}function am(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function om(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Nr,hl,Ur,ul,Fr,dl,Br,fl;class lm{constructor(t=document.body,e={}){Wn(this,Nr);Wn(this,Ur);Wn(this,Fr);Wn(this,Br);Pe(this,"scene");Pe(this,"renderer");Pe(this,"camera");Pe(this,"controls");Pe(this,"width");Pe(this,"height");Pe(this,"el");var s,r;const n=typeof t=="string"?document.querySelector(t):t;if(!n||!("innerHTML"in n))throw new Error("el must be a HTMLElement");this.el=n,this.width=(s=e.width)!=null?s:n.offsetWidth,this.height=(r=e.height)!=null?r:n.offsetHeight,this.scene=new Zc,this.renderer=new qp({antialias:!0}),this.camera=new tn(25,this.width/this.height,1,1e3),this.controls=new Kp(this.camera,this.renderer.domElement),this.init(),this.mount()}init(){this.scene.background=new ye(13421772),this.scene.fog=new ga(13421772,.002),zi(this,Nr,hl).call(this),zi(this,Ur,ul).call(this),zi(this,Fr,dl).call(this),zi(this,Br,fl).call(this),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize)}mount(){this.el.appendChild(this.renderer.domElement)}onWindowResize(){this.width=this.el.offsetWidth,this.height=this.el.offsetHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}}Nr=new WeakSet,hl=function(){const t=this.camera;t.position.set(0,0,0),t.lookAt(0,0,0)},Ur=new WeakSet,ul=function(){const t=this.renderer;t.setPixelRatio(window.devicePixelRatio),t.setSize(this.width,this.height)},Fr=new WeakSet,dl=function(){const t=this.controls;t.enableDamping=!0,t.dampingFactor=.05,t.screenSpacePanning=!1,t.minDistance=100,t.maxDistance=500,t.maxPolarAngle=Math.PI/2},Br=new WeakSet,fl=function(){const t=this.scene,e=new ah(16777215,.5);t.add(e);const n=new rh(16777215,1);n.position.set(10,10,10),t.add(n)};const gn=window;gn._on=gn.addEventListener;gn._off=gn.removeEventListener;gn._emit=(i,t)=>gn.dispatchEvent(new CustomEvent(i,{detail:t}));gn._once=(i,t)=>gn.addEventListener(i,t,{once:!0,capture:!0});const cm=()=>{const i=new Yp(new lm(".arkanoid"),{width:24,height:32,cx:0,cy:0,cz:0}),t=document.querySelector(".btn-back"),e=document.querySelector(".btn-restart"),n=document.querySelector(".btn-ctrl"),s=document.querySelector(".btn-left"),r=document.querySelector(".btn-right");if(!t||!e||!n||!s||!r)throw new Error("GG");t.addEventListener("click",()=>{window.location.href="/mini-games"}),e.addEventListener("click",()=>{i.restart()}),n.addEventListener("click",()=>{switch(i.status){case"playing":i.pause();break;case"over":case"win":i.restart();break;case"paused":default:i.start();break}}),s.addEventListener("click",()=>{i.moveBaffle("left")}),r.addEventListener("click",()=>{i.moveBaffle("right")}),gn.addEventListener("keydown",a=>{switch(a.code){case"ArrowLeft":case"KeyA":i.moveBaffle("left");break;case"ArrowRight":case"KeyD":i.moveBaffle("right");break;case"Space":n.click();break}}),gn._on("status",({detail:a})=>{switch(a){case"playing":n.textContent="\u6E38\u620F\u4E2D";break;case"paused":n.textContent="\u6682\u505C\u4E2D";break;case"over":n.textContent="\u6E38\u620F\u7ED3\u675F";break;case"win":n.textContent="\u6E38\u620F\u80DC\u5229";break;default:n.textContent="\u5F00\u59CB\u6E38\u620F";break}})};window.addEventListener("DOMContentLoaded",cm);
