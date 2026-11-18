import{L as Kp}from"./maplibre-Ewvzyz2e.js";import{s as Cl,S as Qp,o as jp,m as tm,r as em,C as kd,a as nm,M as im,c as sm,b as rm,d as am,e as om}from"./index-CsmfKSXq.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="186",cm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gd=0,Rl=1,Hd=2,hm=3,um=0,Vs=1,Wd=2,Us=3,Ri=0,qe=1,ze=2,Jn=0,ks=1,Il=2,Pl=3,Ll=4,Xd=5,dm=6,Ki=100,qd=101,Yd=102,Zd=103,Jd=104,$d=200,Kd=201,Qd=202,jd=203,Jl=204,$l=205,tf=206,ef=207,nf=208,sf=209,rf=210,af=211,of=212,cf=213,lf=214,oo=0,co=1,lo=2,Hs=3,ho=4,uo=5,fo=6,po=7,$r=0,hf=1,uf=2,On=0,Kl=1,Ql=2,jl=3,Qo=4,th=5,eh=6,nh=7,Dl="attached",df="detached",jo=300,$n=301,Ii=302,yr=303,Mr=304,Ks=306,ns=1e3,fn=1001,Nr=1002,Le=1003,ih=1004,fm=1004,Fs=1005,pm=1005,be=1006,Sr=1007,mm=1007,Un=1008,gm=1008,rn=1009,sh=1010,rh=1011,Ws=1012,tc=1013,An=1014,on=1015,Bn=1016,ec=1017,nc=1018,Xs=1020,ah=35902,oh=35899,ch=1021,lh=1022,je=1023,Kn=1026,Ei=1027,Kr=1028,Qr=1029,Pi=1030,ic=1031,_m=1032,sc=1033,br=33776,wr=33777,Tr=33778,Ar=33779,mo=35840,go=35841,_o=35842,xo=35843,vo=36196,yo=37492,Mo=37496,So=37488,bo=37489,Ur=37490,wo=37491,To=37808,Ao=37809,Eo=37810,Co=37811,Ro=37812,Io=37813,Po=37814,Lo=37815,Do=37816,No=37817,Uo=37818,Fo=37819,Oo=37820,Bo=37821,zo=36492,Vo=36494,ko=36495,Go=36283,Ho=36284,Fr=36285,Wo=36286,ff=2200,pf=2201,mf=2202,Or=2300,Xo=2301,no=2302,Nl=2303,ji=2400,ts=2401,Br=2402,rc=2500,hh=2501,xm=0,vm=1,ym=2,gf=3200,_f=3201,Mm=3202,Sm=3203,fi=0,xf=1,ci="",Ee="srgb",zr="srgb-linear",Vr="linear",ge="srgb",bm="",wm="rg",Tm="ga",Am=0,io=7680,Em=7681,Cm=7682,Rm=7683,Im=34055,Pm=34056,Lm=5386,Dm=512,Nm=513,Um=514,Fm=515,Om=516,Bm=517,zm=518,vf=519,yf=512,Mf=513,Sf=514,ac=515,bf=516,wf=517,oc=518,Tf=519,cc=35044,Vm=35048,km=35040,Gm=35045,Hm=35049,Wm=35041,Xm=35046,qm=35050,Ym=35042,Zm="100",Ul="300 es",yn=2e3,is=2001,Jm={COMPUTE:"compute",RENDER:"render"},$m={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Km={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Qm={TEXTURE_COMPARE:"depthTextureCompare"},jm={NONE:0,SHARED:1,FULL:2};function t0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const e0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Os(s,t){return new e0[s](t)}function Af(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ef(){const s=kr("canvas");return s.style.display="block",s}const jh={};let Li=null;function n0(s){Li=s}function i0(){return Li}function Gr(...s){const t="THREE."+s.shift();Li?Li("log",t,...s):console.log(t,...s)}function Cf(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Nt(...s){s=Cf(s);const t="THREE."+s.shift();if(Li)Li("warn",t,...s);else{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function $t(...s){s=Cf(s);const t="THREE."+s.shift();if(Li)Li("error",t,...s);else{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ui(...s){const t=s.join(" ");t in jh||(jh[t]=!0,Nt(...s))}function s0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const r0={[oo]:co,[lo]:fo,[ho]:po,[Hs]:uo,[co]:oo,[fo]:lo,[po]:ho,[uo]:Hs};class Vn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tu=1234567;const es=Math.PI/180,qs=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ne(s,t,e){return Math.max(t,Math.min(e,s))}function uh(s,t){return(s%t+t)%t}function a0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function o0(s,t,e){return s!==t?(e-s)/(t-s):0}function Er(s,t,e){return(1-e)*s+e*t}function c0(s,t,e,n){return Er(s,t,1-Math.exp(-e*n))}function l0(s,t=1){return t-Math.abs(uh(s,t*2)-t)}function h0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function u0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function d0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function f0(s,t){return s+Math.random()*(t-s)}function p0(s){return s*(.5-Math.random())}function m0(s){s!==void 0&&(tu=s);let t=tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function g0(s){return s*es}function _0(s){return s*qs}function x0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function v0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function y0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function M0(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*f,o*h,o*l);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function an(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const S0={DEG2RAD:es,RAD2DEG:qs,generateUUID:Mn,clamp:ne,euclideanModulo:uh,mapLinear:a0,inverseLerp:o0,lerp:Er,damp:c0,pingpong:l0,smoothstep:h0,smootherstep:u0,randInt:d0,randFloat:f0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:_0,isPowerOfTwo:x0,ceilPowerOfTwo:v0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:M0,normalize:re,denormalize:an},kh=class kh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kh.prototype.isVector2=!0;let vt=kh;class Be{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||c!==u||l!==f||h!==p){let g=c*u+l*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const x=Math.acos(g),S=Math.sin(x);m=Math.sin(m*x)/S,o=Math.sin(o*x)/S,c=c*m+u*o,l=l*m+f*o,h=h*m+p*o,d=d*m+_*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+p*o,d=d*m+_*o;const x=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=x,l*=x,h*=x,d*=x}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+c*f-l*u,t[e+1]=c*p+h*u+l*d-o*f,t[e+2]=l*p+h*f+o*u-c*d,t[e+3]=h*p-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gh=class Gh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fc.copy(this).projectOnVector(t),this.sub(Fc)}reflect(t){return this.sub(Fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;let I=Gh;const Fc=new I,eu=new Be,Hh=class Hh{constructor(t,e,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],x=i[1],S=i[4],v=i[7],T=i[2],b=i[5],R=i[8];return r[0]=a*_+o*x+c*T,r[3]=a*g+o*S+c*b,r[6]=a*m+o*v+c*R,r[1]=l*_+h*x+d*T,r[4]=l*g+h*S+d*b,r[7]=l*m+h*v+d*R,r[2]=u*_+f*x+p*T,r[5]=u*g+f*S+p*b,r[8]=u*m+f*v+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oc.makeScale(t,e)),this}rotate(t){return ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oc.makeRotation(-t)),this}translate(t,e){return ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hh.prototype.isMatrix3=!0;let se=Hh;const Oc=new se,nu=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b0(){const s={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ge&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Vr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[zr]:{primaries:t,whitePoint:n,transfer:Vr,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),s}const le=b0();function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class Rf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=kr("canvas")),ps.width=t.width,ps.height=t.height;const i=ps.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let w0=0;class hi{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Bc(i[a].image)):r.push(Bc(i[a]))}else r=Bc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Bc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}class T0 extends hi{constructor(t=null){ui('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}}let A0=0;const zc=new I;class Re extends Vn{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=fn,i=fn,r=be,a=Un,o=je,c=rn,l=Re.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Mn(),this.name="",this.source=new hi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zc).x}get height(){return this.source.getSize(zc).y}get depth(){return this.source.getSize(zc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=jo;Re.DEFAULT_ANISOTROPY=1;const Wh=class Wh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,v=(f+1)/2,T=(m+1)/2,b=(h+u)/4,R=(d+_)/4,M=(p+g)/4;return S>v&&S>T?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=b/n,r=R/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=M/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=M/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wh.prototype.isVector4=!0;let _e=Wh;class dh extends Vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Re(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new hi(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends dh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lc extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class E0 extends pn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new lc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class hc extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class C0 extends pn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new hc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}const $o=class $o{constructor(t,e,n,i,r,a,o,c,l,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,u,f,p,_,g)}set(t,e,n,i,r,a,o,c,l,h,d,u,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),a=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,p=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+p*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=p+f*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,p=l*h,_=l*d;e[0]=u+_*o,e[4]=p*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,p=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*d,p=o*h,_=o*d;e[0]=c*h,e[4]=p*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,f=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,I0)}lookAt(t,e,n){const i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),vi.crossVectors(n,_n),vi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),vi.crossVectors(n,_n)),vi.normalize(),la.crossVectors(_n,vi),i[0]=vi.x,i[4]=la.x,i[8]=_n.x,i[1]=vi.y,i[5]=la.y,i[9]=_n.y,i[2]=vi.z,i[6]=la.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],x=n[3],S=n[7],v=n[11],T=n[15],b=i[0],R=i[4],M=i[8],w=i[12],C=i[1],P=i[5],U=i[9],F=i[13],N=i[2],V=i[6],K=i[10],O=i[14],$=i[3],it=i[7],lt=i[11],ut=i[15];return r[0]=a*b+o*C+c*N+l*$,r[4]=a*R+o*P+c*V+l*it,r[8]=a*M+o*U+c*K+l*lt,r[12]=a*w+o*F+c*O+l*ut,r[1]=h*b+d*C+u*N+f*$,r[5]=h*R+d*P+u*V+f*it,r[9]=h*M+d*U+u*K+f*lt,r[13]=h*w+d*F+u*O+f*ut,r[2]=p*b+_*C+g*N+m*$,r[6]=p*R+_*P+g*V+m*it,r[10]=p*M+_*U+g*K+m*lt,r[14]=p*w+_*F+g*O+m*ut,r[3]=x*b+S*C+v*N+T*$,r[7]=x*R+S*P+v*V+T*it,r[11]=x*M+S*U+v*K+T*lt,r[15]=x*w+S*F+v*O+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],x=c*f-l*u,S=o*f-l*d,v=o*u-c*d,T=a*f-l*h,b=a*u-c*h,R=a*d-o*h;return e*(_*x-g*S+m*v)-n*(p*x-g*T+m*b)+i*(p*S-_*T+m*R)-r*(p*v-_*b+g*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],x=e*o-n*a,S=e*c-i*a,v=e*l-r*a,T=n*c-i*o,b=n*l-r*o,R=i*l-r*c,M=h*_-d*p,w=h*g-u*p,C=h*m-f*p,P=d*g-u*_,U=d*m-f*_,F=u*m-f*g,N=x*F-S*U+v*P+T*C-b*w+R*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/N;return t[0]=(o*F-c*U+l*P)*V,t[1]=(i*U-n*F-r*P)*V,t[2]=(_*R-g*b+m*T)*V,t[3]=(u*b-d*R-f*T)*V,t[4]=(c*C-a*F-l*w)*V,t[5]=(e*F-i*C+r*w)*V,t[6]=(g*v-p*R-m*S)*V,t[7]=(h*R-u*v+f*S)*V,t[8]=(a*U-o*C+l*M)*V,t[9]=(n*C-e*U-r*M)*V,t[10]=(p*b-_*v+m*x)*V,t[11]=(d*v-h*b-f*x)*V,t[12]=(o*w-a*P-c*M)*V,t[13]=(e*P-n*w+i*M)*V,t[14]=(_*S-p*T-g*x)*V,t[15]=(h*T-d*S+u*x)*V,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,p=r*d,_=a*h,g=a*d,m=o*d,x=c*l,S=c*h,v=c*d,T=n.x,b=n.y,R=n.z;return i[0]=(1-(_+m))*T,i[1]=(f+v)*T,i[2]=(p-S)*T,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(u+m))*b,i[6]=(g+x)*b,i[7]=0,i[8]=(p+S)*R,i[9]=(g-x)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),c=ms.set(i[8],i[9],i[10]).length();r<0&&(a=-a),In.copy(this);const l=1/a,h=1/o,d=1/c;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,e.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=yn,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,_;if(c)p=r/(a-r),_=a*r/(a-r);else if(o===yn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===is)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=yn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,_;if(c)p=1/(a-r),_=a/(a-r);else if(o===yn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===is)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$o.prototype.isMatrix4=!0;let te=$o;const ms=new I,In=new te,R0=new I(0,0,0),I0=new I(1,1,1),vi=new I,la=new I,_n=new I,su=new te,ru=new Be;class zn{constructor(t=0,e=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ru.setFromEuler(this),this.setFromQuaternion(ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let P0=0;const au=new I,gs=new Be,ti=new te,ha=new I,nr=new I,L0=new I,D0=new Be,ou=new I(1,0,0),cu=new I(0,1,0),lu=new I(0,0,1),hu={type:"added"},N0={type:"removed"},_s={type:"childadded",child:null},Vc={type:"childremoved",child:null};class de extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new I,e=new zn,n=new Be,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new se}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(ou,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ou,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(nr,ha,this.up):ti.lookAt(ha,nr,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(ti),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hu),_s.child=t,this.dispatchEvent(_s),_s.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(N0),Vc.child=t,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hu),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,L0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,D0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}de.DEFAULT_UP=new I(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ci extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U0={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ci;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function kc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=uh(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=kc(a,r,t+1/3),this.g=kc(a,r,t),this.b=kc(a,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=If[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return le.workingToColorSpace(Ke.copy(this),t),Math.round(ne(Ke.r*255,0,255))*65536+Math.round(ne(Ke.g*255,0,255))*256+Math.round(ne(Ke.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,i=Ke.g,r=Ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ee){le.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,i=Ke.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(ua);const n=Er(yi.h,ua.h,e),i=Er(yi.s,ua.s,e),r=Er(yi.l,ua.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Rt;Rt.NAMES=If;class dc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new dc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pc extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Pn=new I,ei=new I,Gc=new I,ni=new I,xs=new I,vs=new I,uu=new I,Hc=new I,Wc=new I,Xc=new I,qc=new _e,Yc=new _e,Zc=new _e;class dn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Pn.subVectors(t,e),i.cross(Pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Pn.subVectors(i,e),ei.subVectors(n,e),Gc.subVectors(t,e);const a=Pn.dot(Pn),o=Pn.dot(ei),c=Pn.dot(Gc),l=ei.dot(ei),h=ei.dot(Gc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,p=(a*h-o*c)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return qc.setScalar(0),Yc.setScalar(0),Zc.setScalar(0),qc.fromBufferAttribute(t,e),Yc.fromBufferAttribute(t,n),Zc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(qc,r.x),a.addScaledVector(Yc,r.y),a.addScaledVector(Zc,r.z),a}static isFrontFacing(t,e,n,i){return Pn.subVectors(n,e),ei.subVectors(t,e),Pn.cross(ei).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;xs.subVectors(i,n),vs.subVectors(r,n),Hc.subVectors(t,n);const c=xs.dot(Hc),l=vs.dot(Hc);if(c<=0&&l<=0)return e.copy(n);Wc.subVectors(t,i);const h=xs.dot(Wc),d=vs.dot(Wc);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(xs,a);Xc.subVectors(t,r);const f=xs.dot(Xc),p=vs.dot(Xc);if(p>=0&&f<=p)return e.copy(r);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(n).addScaledVector(vs,o);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return uu.subVectors(r,i),o=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(uu,o);const m=1/(g+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(xs,a).addScaledVector(vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class tn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),fa.subVectors(this.max,ir),ys.subVectors(t.a,ir),Ms.subVectors(t.b,ir),Ss.subVectors(t.c,ir),Mi.subVectors(Ms,ys),Si.subVectors(Ss,Ms),Bi.subVectors(ys,Ss);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Bi.z,Bi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Bi.z,0,-Bi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Bi.y,Bi.x,0];return!Jc(e,ys,Ms,Ss,fa)||(e=[1,0,0,0,1,0,0,0,1],!Jc(e,ys,Ms,Ss,fa))?!1:(pa.crossVectors(Mi,Si),e=[pa.x,pa.y,pa.z],Jc(e,ys,Ms,Ss,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ii=[new I,new I,new I,new I,new I,new I,new I,new I],Ln=new I,da=new tn,ys=new I,Ms=new I,Ss=new I,Mi=new I,Si=new I,Bi=new I,ir=new I,fa=new I,pa=new I,zi=new I;function Jc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zi.fromArray(s,r);const o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const li=F0();function F0(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function un(s){Math.abs(s)>65504&&Nt("DataUtils.toHalfFloat(): Value out of range."),s=ne(s,-65504,65504),li.floatView[0]=s;const t=li.uint32View[0],e=t>>23&511;return li.baseTable[e]+((t&8388607)>>li.shiftTable[e])}function gr(s){const t=s>>10;return li.uint32View[0]=li.mantissaTable[li.offsetTable[t]+(s&1023)]+li.exponentTable[t],li.floatView[0]}class O0{static toHalfFloat(t){return un(t)}static fromHalfFloat(t){return gr(t)}}const Oe=new I,ma=new vt;let B0=0;class xe extends Vn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class z0 extends xe{constructor(t,e,n){super(new Int8Array(t),e,n)}}class V0 extends xe{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class k0 extends xe{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class G0 extends xe{constructor(t,e,n){super(new Int16Array(t),e,n)}}class fh extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class H0 extends xe{constructor(t,e,n){super(new Int32Array(t),e,n)}}class ph extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class W0 extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=gr(this.array[t*this.itemSize]);return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=un(e),this}getY(t){let e=gr(this.array[t*this.itemSize+1]);return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=un(e),this}getZ(t){let e=gr(this.array[t*this.itemSize+2]);return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=un(e),this}getW(t){let e=gr(this.array[t*this.itemSize+3]);return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=un(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=un(e),this.array[t+1]=un(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=un(e),this.array[t+1]=un(n),this.array[t+2]=un(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=un(e),this.array[t+1]=un(n),this.array[t+2]=un(i),this.array[t+3]=un(r),this}}class Ut extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const X0=new tn,sr=new I,$c=new I;class Ye{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):X0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add($c)),this.expandByPoint(sr.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let q0=0;const bn=new te,Kc=new de,bs=new I,xn=new tn,rr=new tn,He=new I;class ee extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t0(t)?ph:fh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return Kc.lookAt(t),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ye);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(xn.min,rr.min),xn.expandByPoint(He),He.addVectors(xn.max,rr.max),xn.expandByPoint(He)):(xn.expandByPoint(rr.min),xn.expandByPoint(rr.max))}xn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)He.fromBufferAttribute(o,l),c&&(bs.fromBufferAttribute(t,l),He.add(bs)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let M=0;M<n.count;M++)o[M]=new I,c[M]=new I;const l=new I,h=new I,d=new I,u=new vt,f=new vt,p=new vt,_=new I,g=new I;function m(M,w,C){l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),h.sub(l),d.sub(l),f.sub(u),p.sub(u);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),o[M].add(_),o[w].add(_),o[C].add(_),c[M].add(g),c[w].add(g),c[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let M=0,w=x.length;M<w;++M){const C=x[M],P=C.start,U=C.count;for(let F=P,N=P+U;F<N;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new I,v=new I,T=new I,b=new I;function R(M){T.fromBufferAttribute(i,M),b.copy(T);const w=o[M];S.copy(w),S.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(b,w);const P=v.dot(c[M])<0?-1:1;a.setXYZW(M,S.x,S.y,S.z,P)}for(let M=0,w=x.length;M<w;++M){const C=x[M],P=C.start,U=C.count;for(let F=P,N=P+U;F<N;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)u[p++]=l[f++]}return new xe(u,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ee,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const nn=new I;class ss{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ss(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qc=new I,Y0=new I,Z0=new se;class oi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qc.subVectors(n,e).cross(Y0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Z0.getNormalMatrix(t),i=this.coplanarPoint(Qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let J0=0;class Ze extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=ks,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=$l,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new oi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mh extends Ze{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ws;const ar=new I,Ts=new I,As=new I,Es=new vt,or=new vt,Pf=new te,ga=new I,cr=new I,_a=new I,du=new vt,jc=new vt,fu=new vt;class Lf extends de{constructor(t=new mh){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mc(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new ss(n,3,0,!1)),ws.setAttribute("uv",new ss(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),Pf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;xa(ga.set(-.5,-.5,0),As,a,Ts,i,r),xa(cr.set(.5,-.5,0),As,a,Ts,i,r),xa(_a.set(.5,.5,0),As,a,Ts,i,r),du.set(0,0),jc.set(1,0),fu.set(1,1);let o=t.ray.intersectTriangle(ga,cr,_a,!1,ar);if(o===null&&(xa(cr.set(-.5,.5,0),As,a,Ts,i,r),jc.set(0,1),o=t.ray.intersectTriangle(ga,_a,cr,!1,ar),o===null))return;const c=t.ray.origin.distanceTo(ar);c<t.near||c>t.far||e.push({distance:c,point:ar.clone(),uv:dn.getInterpolation(ar,ga,cr,_a,du,jc,fu,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xa(s,t,e,n,i,r){Es.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(or.x=r*Es.x-i*Es.y,or.y=i*Es.x+r*Es.y):or.copy(Es),s.copy(t),s.x+=or.x,s.y+=or.y,s.applyMatrix4(Pf)}const va=new I,pu=new I;class Df extends de{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){va.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(va);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){va.setFromMatrixPosition(t.matrixWorld),pu.setFromMatrixPosition(this.matrixWorld);const n=va.distanceTo(pu)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const si=new I,tl=new I,ya=new I,Ma=new I;class Qs{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){tl.copy(t).add(e).multiplyScalar(.5),ya.copy(e).sub(t).normalize(),Ma.copy(this.origin).sub(tl);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ya),o=Ma.dot(this.direction),c=-Ma.dot(ya),l=Ma.lengthSq(),h=Math.abs(1-a*a);let d,u,f,p;if(h>0)if(d=a*c-o,u=a*o-c,p=r*h,d>=0)if(u>=-p)if(u<=p){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(tl).addScaledVector(ya,u),f}intersectSphere(t,e){if(t.radius<0)return null;si.subVectors(t.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,_=e.y-a.y,g=e.z-a.z,m=n.x-a.x,x=n.y-a.y,S=n.z-a.z,v=Math.abs(c),T=Math.abs(l),b=Math.abs(h);let R,M,w,C,P,U,F,N,V,K,O,$;if(v>=T&&v>=b?(w=c,U=d,V=p,$=m,c>=0?(R=l,M=h,C=u,P=f,F=_,N=g,K=x,O=S):(R=h,M=l,C=f,P=u,F=g,N=_,K=S,O=x)):T>=b?(w=l,U=u,V=_,$=x,l>=0?(R=h,M=c,C=f,P=d,F=g,N=p,K=S,O=m):(R=c,M=h,C=d,P=f,F=p,N=g,K=m,O=S)):(w=h,U=f,V=g,$=S,h>=0?(R=c,M=l,C=d,P=u,F=p,N=_,K=m,O=x):(R=l,M=c,C=u,P=d,F=_,N=p,K=x,O=m)),w===0)return null;const it=R/w,lt=M/w,ut=1/w,Bt=C-it*U,Pt=P-lt*U,Mt=F-it*V,ct=N-lt*V,dt=K-it*$,D=O-lt*$,Z=dt*ct-D*Mt,st=Bt*D-Pt*dt,Ct=Mt*Pt-ct*Bt;if(i){if(Z<0||st<0||Ct<0)return null}else if((Z<0||st<0||Ct<0)&&(Z>0||st>0||Ct>0))return null;const bt=Z+st+Ct;if(bt===0)return null;const Dt=ut*(Z*U+st*V+Ct*$);return(bt>0?Dt<0:Dt>0)?null:this.at(Dt/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kn extends Ze{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mu=new te,Vi=new Qs,Sa=new Ye,gu=new I,ba=new I,wa=new I,Ta=new I,el=new I,Aa=new I,_u=new I,Ea=new I;class Te extends de{constructor(t=new ee,e=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Aa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(el.fromBufferAttribute(d,t),a?Aa.addScaledVector(el,h):Aa.addScaledVector(el.sub(e),h))}e.add(Aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Sa.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Sa,gu)===null||Vi.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(mu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,T=S;v<T;v+=3){const b=o.getX(v),R=o.getX(v+1),M=o.getX(v+2);i=Ca(this,m,t,n,l,h,d,b,R,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const x=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);i=Ca(this,a,t,n,l,h,d,x,S,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,T=S;v<T;v+=3){const b=v,R=v+1,M=v+2;i=Ca(this,m,t,n,l,h,d,b,R,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const x=g,S=g+1,v=g+2;i=Ca(this,a,t,n,l,h,d,x,S,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function $0(s,t,e,n,i,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Ri,o),c===null)return null;Ea.copy(o),Ea.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ea);return l<e.near||l>e.far?null:{distance:l,point:Ea.clone(),object:s}}function Ca(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,ba),s.getVertexPosition(c,wa),s.getVertexPosition(l,Ta);const h=$0(s,t,e,n,ba,wa,Ta,_u);if(h){const d=new I;dn.getBarycoord(_u,ba,wa,Ta,d),i&&(h.uv=dn.getInterpolatedAttribute(i,o,c,l,d,new vt)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,c,l,d,new vt)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new I,materialIndex:0};dn.getNormal(ba,wa,Ta,u.normal),h.face=u,h.barycoord=d}return h}const lr=new _e,xu=new _e,vu=new _e,K0=new _e,yu=new te,Ra=new I,nl=new Ye,Mu=new te,il=new Qs;class Nf extends Te{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dl,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ye),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nl.copy(this.boundingSphere),nl.applyMatrix4(i),t.ray.intersectsSphere(nl)!==!1&&(Mu.copy(i).invert(),il.copy(t.ray).applyMatrix4(Mu),!(this.boundingBox!==null&&il.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,il)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new _e,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===df?this.bindMatrixInverse.copy(this.bindMatrix).invert():Nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;xu.fromBufferAttribute(i.attributes.skinIndex,t),vu.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(lr.copy(e),e.set(0,0,0,0)):(lr.set(...e,1),e.set(0,0,0)),lr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=vu.getComponent(r);if(a!==0){const o=xu.getComponent(r);yu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(K0.copy(lr).applyMatrix4(yu),a)}}return e.isVector4&&(e.w=lr.w),e.applyMatrix4(this.bindMatrixInverse)}}class gh extends de{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mn extends Re{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Le,h=Le,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Su=new te,Q0=new te;class gc{constructor(t=[],e=[]){this.uuid=Mn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Q0;Su.multiplyMatrices(o,e[r]),Su.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new gc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new mn(e,t,t,je,on);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(Nt("Skeleton: No bone found with UUID:",r),a=new gh),this.bones.push(a),this.boneInverses.push(new te().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Ys extends xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new te,bu=new te,Ia=[],wu=new tn,j0=new te,hr=new Te,ur=new Ye;class Qi extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,j0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),wu.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(wu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ye),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),ur.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Cs),bu.multiplyMatrices(n,Cs),hr.matrixWorld=bu,hr.raycast(t,Ia);for(let a=0,o=Ia.length;a<o;a++){const c=Ia[a];c.instanceId=r,c.object=this,e.push(c)}Ia.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mn(new Float32Array(i*this.count),i,this.count,Kr,on));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ki=new Ye,tg=new vt(.5,.5),Pa=new I;class rs{constructor(t=new oi,e=new oi,n=new oi,i=new oi,r=new oi,a=new oi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],x=r[12],S=r[13],v=r[14],T=r[15];if(i[0].setComponents(l-a,f-h,m-p,T-x).normalize(),i[1].setComponents(l+a,f+h,m+p,T+x).normalize(),i[2].setComponents(l+o,f+d,m+_,T+S).normalize(),i[3].setComponents(l-o,f-d,m-_,T-S).normalize(),n)i[4].setComponents(c,u,g,v).normalize(),i[5].setComponents(l-c,f-u,m-g,T-v).normalize();else if(i[4].setComponents(l-c,f-u,m-g,T-v).normalize(),e===yn)i[5].setComponents(l+c,f+u,m+g,T+v).normalize();else if(e===is)i[5].setComponents(c,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);const e=tg.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Pa.x=i.normal.x>0?t.max.x:t.min.x,Pa.y=i.normal.y>0?t.max.y:t.min.y,Pa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Tu=new te;class _c{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];Tu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new rs),n[i].setFromProjectionMatrix(Tu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new rs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new _c().copy(this)}}function sl(s,t){return s-t}function eg(s,t){return s.z-t.z}function ng(s,t){return t.z-s.z}class ig{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const hn=new te,sg=new Rt(1,1,1),rg=new rs,ag=new _c,La=new tn,Gi=new Ye,dr=new I,Au=new I,og=new I,rl=new ig,Qe=new Te,Da=[];function cg(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function Hi(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Uf extends Te{constructor(t,e,n=e*2,i){super(new ee,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new mn(e,t,t,je,on);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new mn(e,t,t,Qr,An);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new mn(e,t,t,je,on);n.colorSpace=le.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const a=t.getAttribute(r),{array:o,itemSize:c,normalized:l}=a,h=new o.constructor(n*c),d=new xe(h,c,l);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new xe(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,hn),this.getBoundingBoxAt(r,La).applyMatrix4(hn),t.union(La)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ye);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,hn),this.getBoundingSphereAt(r,Gi).applyMatrix4(hn),t.union(Gi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(sl),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;hn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(sg.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(sl),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const d=e.getAttribute(h),u=n.getAttribute(h);cg(d,u,c);const f=d.itemSize;for(let p=d.count,_=l;p<_;p++){const g=c+p;for(let m=0;m<f;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(c*f,l*f)}if(i){const h=o.indexStart,d=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,c+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,c);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const c=i[a],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=l,f=r.index,p=f.array,_=t-d;for(let g=h;g<h+u;g++)p[g]=p[g]+_;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=l,u=r.attributes;for(const f in u){const p=u[f],{array:_,itemSize:g}=p;_.copyWithin(t*g,h*g,(h+d)*g),p.addUpdateRange(t*g,d*g),p.needsUpdate=!0}l.vertexStart=t}t+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new tn,a=n.index,o=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;a&&(h=a.getX(h)),r.expandByPoint(dr.fromBufferAttribute(o,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new Ye;this.getBoundingBoxAt(t,La),La.getCenter(r.center);const a=n.index,o=n.attributes.position;let c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let d=l;a&&(d=a.getX(d)),dr.fromBufferAttribute(o,d),c=Math.max(c,r.center.distanceToSquared(dr))}r.radius=Math.sqrt(c),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(sl);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);Hi(this._multiDrawCounts,i),Hi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Hi(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Hi(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Hi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ee,this._initializeGeometry(r));const a=this.geometry;r.index&&Hi(r.index.array,a.index.array);for(const o in r.attributes)Hi(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Qe.material=this.material,Qe.geometry.index=a.index,Qe.geometry.attributes=a.attributes,Qe.geometry.boundingBox===null&&(Qe.geometry.boundingBox=new tn),Qe.geometry.boundingSphere===null&&(Qe.geometry.boundingSphere=new Ye);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,h=i[l];Qe.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Qe.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Qe.geometry.boundingBox),this.getBoundingSphereAt(l,Qe.geometry.boundingSphere),Qe.raycast(t,Da);for(let d=0,u=Da.length;d<u;d++){const f=Da[d];f.object=this,f.batchId=o,e.push(f)}Da.length=0}Qe.material=null,Qe.geometry.index=null,Qe.geometry.attributes={},Qe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,c=1;r.wireframe&&(c=2,o=i.attributes.position.count>65535?4:2);const l=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,g=n.isArrayCamera?ag:rg;f&&(n.isArrayCamera?g.setFromArrayCamera(n):(hn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(hn,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){hn.copy(this.matrixWorld).invert(),dr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(hn),Au.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(hn);for(let v=0,T=l.length;v<T;v++)if(l[v].visible&&l[v].active){const b=l[v].geometryIndex;this.getMatrixAt(v,hn),this.getBoundingSphereAt(b,Gi).applyMatrix4(hn);let R=!1;if(f&&(R=!g.intersectsSphere(Gi)),!R){const M=u[b],w=og.subVectors(Gi.center,dr).dot(Au);rl.push(M.start,M.count,w,v)}}const x=rl.list,S=this.customSort;S===null?x.sort(r.transparent?ng:eg):S.call(this,x,n);for(let v=0,T=x.length;v<T;v++){const b=x[v];h[m]=b.start*o*c,d[m]=b.count*c,_[m]=b.index,m++}rl.reset()}else for(let x=0,S=l.length;x<S;x++)if(l[x].visible&&l[x].active){const v=l[x].geometryIndex;let T=!1;if(f&&(this.getMatrixAt(x,hn),this.getBoundingSphereAt(v,Gi).applyMatrix4(hn),T=!g.intersectsSphere(Gi)),!T){const b=u[v];h[m]=b.start*o*c,d[m]=b.count*c,_[m]=x,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}}class ln extends Ze{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qo=new I,Yo=new I,Eu=new te,fr=new Qs,Na=new Ye,al=new I,Cu=new I;class Di extends de{constructor(t=new ee,e=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)qo.fromBufferAttribute(e,i-1),Yo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=qo.distanceTo(Yo);t.setAttribute("lineDistance",new Ut(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,t.ray.intersectsSphere(Na)===!1)return;Eu.copy(i).invert(),fr.copy(t.ray).applyMatrix4(Eu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=l){const m=h.getX(_),x=h.getX(_+1),S=Ua(this,t,fr,c,m,x,_);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=Ua(this,t,fr,c,_,g,p-1);m&&e.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=l){const m=Ua(this,t,fr,c,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=Ua(this,t,fr,c,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ua(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(qo.fromBufferAttribute(o,i),Yo.fromBufferAttribute(o,r),e.distanceSqToSegment(qo,Yo,al,Cu)>n)return;al.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(al);if(!(l<t.near||l>t.far))return{distance:l,point:Cu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Ru=new I,Iu=new I;class Qn extends Di{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ru.fromBufferAttribute(e,i),Iu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ru.distanceTo(Iu);t.setAttribute("lineDistance",new Ut(n,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ff extends Di{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class _h extends Ze{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pu=new te,Fl=new Qs,Fa=new Ye,Oa=new I;class Of extends de{constructor(t=new ee,e=new _h){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=r,t.ray.intersectsSphere(Fa)===!1)return;Pu.copy(i).invert(),Fl.copy(t.ray).applyMatrix4(Pu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=u,_=f;p<_;p++){const g=l.getX(p);Oa.fromBufferAttribute(d,g),Lu(Oa,g,c,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,_=f;p<_;p++)Oa.fromBufferAttribute(d,p),Lu(Oa,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lu(s,t,e,n,i,r,a){const o=Fl.distanceSqToPoint(s);if(o<e){const c=new I;Fl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Bf extends Re{constructor(t,e,n,i,r=be,a=be,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class lg extends Bf{constructor(t,e,n,i,r,a,o,c){super({},t,e,n,i,r,a,o,c),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class hg extends Re{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Le,this.minFilter=Le,this.generateMipmaps=!1,this.needsUpdate=!0}}class xc extends Re{constructor(t,e,n,i,r,a,o,c,l,h,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class ug extends xc{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=fn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dg extends xc{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,$n),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class jr extends Re{constructor(t=[],e=$n,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vc extends Re{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fg extends Re{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}}class Zs extends Re{constructor(t,e,n=An,i,r,a,o=Le,c=Le,l,h=Kn,d=1){if(h!==Kn&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class zf extends Zs{constructor(t,e=An,n=$n,i,r,a=Le,o=Le,c,l=Kn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xh extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cn extends ee{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(d,2));function p(_,g,m,x,S,v,T,b,R,M,w){const C=v/R,P=T/M,U=v/2,F=T/2,N=b/2,V=R+1,K=M+1;let O=0,$=0;const it=new I;for(let lt=0;lt<K;lt++){const ut=lt*P-F;for(let Bt=0;Bt<V;Bt++){const Pt=Bt*C-U;it[_]=Pt*x,it[g]=ut*S,it[m]=N,l.push(it.x,it.y,it.z),it[_]=0,it[g]=0,it[m]=b>0?1:-1,h.push(it.x,it.y,it.z),d.push(Bt/R),d.push(1-lt/M),O+=1}}for(let lt=0;lt<M;lt++)for(let ut=0;ut<R;ut++){const Bt=u+ut+V*lt,Pt=u+ut+V*(lt+1),Mt=u+(ut+1)+V*(lt+1),ct=u+(ut+1)+V*lt;c.push(Bt,Pt,ct),c.push(Pt,Mt,ct),$+=6}o.addGroup(f,$,w),f+=$,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yc extends ee{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,_=i+1,g=new I,m=new I;for(let x=0;x<=p;x++){let S=0,v=0,T=0,b=0;if(x<=n){const w=x/n,C=w*Math.PI/2;v=-h-t*Math.cos(C),T=t*Math.sin(C),b=-t*Math.cos(C),S=w*d}else if(x<=n+r){const w=(x-n)/r;v=-h+w*e,T=t,b=0,S=d+w*u}else{const w=(x-n-r)/n,C=w*Math.PI/2;v=h+t*Math.sin(C),T=t*Math.cos(C),b=t*Math.sin(C),S=d+u+w*d}const R=Math.max(0,Math.min(1,S/f));let M=0;x===0?M=.5/i:x===p&&(M=-.5/i);for(let w=0;w<=i;w++){const C=w/i,P=C*Math.PI*2,U=Math.sin(P),F=Math.cos(P);m.x=-T*F,m.y=v,m.z=T*U,o.push(m.x,m.y,m.z),g.set(-T*F,b,T*U),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+M,R)}if(x>0){const w=(x-1)*_;for(let C=0;C<i;C++){const P=w+C,U=w+C+1,F=x*_+C,N=x*_+C+1;a.push(P,U,F),a.push(U,N,F)}}}this.setIndex(a),this.setAttribute("position",new Ut(o,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Mc extends ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new I,h=new vt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ut(a,3)),this.setAttribute("normal",new Ut(o,3)),this.setAttribute("uv",new Ut(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class We extends ee{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const _=[],g=n/2;let m=0;x(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ut(d,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(f,2));function x(){const v=new I,T=new I;let b=0;const R=(e-t)/n;for(let M=0;M<=r;M++){const w=[],C=M/r,P=C*(e-t)+t;for(let U=0;U<=i;U++){const F=U/i,N=F*c+o,V=Math.sin(N),K=Math.cos(N);T.x=P*V,T.y=-C*n+g,T.z=P*K,d.push(T.x,T.y,T.z),v.set(V,R,K).normalize(),u.push(v.x,v.y,v.z),f.push(F,1-C),w.push(p++)}_.push(w)}for(let M=0;M<i;M++)for(let w=0;w<r;w++){const C=_[w][M],P=_[w+1][M],U=_[w+1][M+1],F=_[w][M+1];(t>0||w!==0)&&(h.push(C,P,F),b+=3),(e>0||w!==r-1)&&(h.push(P,U,F),b+=3)}l.addGroup(m,b,0),m+=b}function S(v){const T=p,b=new vt,R=new I;let M=0;const w=v===!0?t:e,C=v===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;const P=p;for(let U=0;U<=i;U++){const N=U/i*c+o,V=Math.cos(N),K=Math.sin(N);R.x=w*K,R.y=g*C,R.z=w*V,d.push(R.x,R.y,R.z),u.push(0,C,0),b.x=V*.5+.5,b.y=K*.5*C+.5,f.push(b.x,b.y),p++}for(let U=0;U<i;U++){const F=T+U,N=P+U;v===!0?h.push(N,N+1,F):h.push(N+1,N,F),M+=3}l.addGroup(m,M,v===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class os extends We{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new os(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ui extends ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ut(r,3)),this.setAttribute("normal",new Ut(r.slice(),3)),this.setAttribute("uv",new Ut(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const S=new I,v=new I,T=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],S),f(e[b+1],v),f(e[b+2],T),c(S,v,T,x)}function c(x,S,v,T){const b=T+1,R=[];for(let M=0;M<=b;M++){R[M]=[];const w=x.clone().lerp(v,M/b),C=S.clone().lerp(v,M/b),P=b-M;for(let U=0;U<=P;U++)U===0&&M===b?R[M][U]=w:R[M][U]=w.clone().lerp(C,U/P)}for(let M=0;M<b;M++)for(let w=0;w<2*(b-M)-1;w++){const C=Math.floor(w/2);w%2===0?(u(R[M][C+1]),u(R[M+1][C]),u(R[M][C])):(u(R[M][C+1]),u(R[M+1][C+1]),u(R[M+1][C]))}}function l(x){const S=new I;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(x),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){const x=new I;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];const v=g(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;a.push(v,1-T)}p(),d()}function d(){for(let x=0;x<a.length;x+=6){const S=a[x+0],v=a[x+2],T=a[x+4],b=Math.max(S,v,T),R=Math.min(S,v,T);b>.9&&R<.1&&(S<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,S){const v=x*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function p(){const x=new I,S=new I,v=new I,T=new I,b=new vt,R=new vt,M=new vt;for(let w=0,C=0;w<r.length;w+=9,C+=6){x.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),b.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),T.copy(x).add(S).add(v).divideScalar(3);const P=g(T);_(b,C+0,x,P),_(R,C+2,S,P),_(M,C+4,v,P)}}function _(x,S,v,T){T<0&&x.x===1&&(a[S]=x.x-1),v.x===0&&v.z===0&&(a[S]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.vertices,t.indices,t.radius,t.detail)}}class Sc extends Ui{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sc(t.radius,t.detail)}}const Ba=new I,za=new I,ol=new I,Va=new dn;class Vf extends ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(es*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<c;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:g,c:m}=Va;if(_.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Va.getNormal(ol),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const S=(x+1)%3,v=d[x],T=d[S],b=Va[h[x]],R=Va[h[S]],M=`${v}_${T}`,w=`${T}_${v}`;w in u&&u[w]?(ol.dot(u[w].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(R.x,R.y,R.z)),u[w]=null):M in u||(u[M]={index0:l[x],index1:l[S],normal:ol.clone()})}}for(const p in u)if(u[p]){const{index0:_,index1:g}=u[p];Ba.fromBufferAttribute(o,_),za.fromBufferAttribute(o,g),f.push(Ba.x,Ba.y,Ba.z),f.push(za.x,za.y,za.z)}this.setAttribute("position",new Ut(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new vt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,i=[],r=[],a=[],o=new I,c=new te;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ne(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ne(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bc extends Gn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new vt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class kf extends bc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vh(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Du=new I,Nu=new I,cl=new vh,ll=new vh,hl=new vh;class Gf extends Gn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Nu.subVectors(i[0],i[1]).add(i[0]),l=Nu);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Du.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Du),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),cl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,_,g),ll.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,_,g),hl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ll.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),hl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(cl.calc(c),ll.calc(c),hl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uu(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function pg(s,t){const e=1-s;return e*e*t}function mg(s,t){return 2*(1-s)*s*t}function gg(s,t){return s*s*t}function Cr(s,t,e,n){return pg(s,t)+mg(s,e)+gg(s,n)}function _g(s,t){const e=1-s;return e*e*e*t}function xg(s,t){const e=1-s;return 3*e*e*s*t}function vg(s,t){return 3*(1-s)*s*s*t}function yg(s,t){return s*s*s*t}function Rr(s,t,e,n,i){return _g(s,t)+xg(s,e)+vg(s,n)+yg(s,i)}class yh extends Gn{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(t,i.x,r.x,a.x,o.x),Rr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hf extends Gn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(t,i.x,r.x,a.x,o.x),Rr(t,i.y,r.y,a.y,o.y),Rr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mh extends Gn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wf extends Gn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sh extends Gn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Cr(t,i.x,r.x,a.x),Cr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bh extends Gn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Cr(t,i.x,r.x,a.x),Cr(t,i.y,r.y,a.y),Cr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wh extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Uu(o,c.x,l.x,h.x,d.x),Uu(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new vt().fromArray(i))}return this}}var Zo=Object.freeze({__proto__:null,ArcCurve:kf,CatmullRomCurve3:Gf,CubicBezierCurve:yh,CubicBezierCurve3:Hf,EllipseCurve:bc,LineCurve:Mh,LineCurve3:Wf,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:bh,SplineCurve:wh});class Xf extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Zo[i.type]().fromJSON(i))}return this}}class Hr extends Xf{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Mh(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Sh(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new yh(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new bc(t,e,n,i,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cs extends Hr{constructor(t){super(t),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Hr().fromJSON(i))}return this}}function Mg(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=qf(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Ag(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let h=o,d=c;for(let u=e;u<i;u+=e){const f=s[u],p=s[u+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Wr(r,a,e,o,c,l,0),a}function qf(s,t,e,n,i){let r;if(i===Og(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Fu(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Fu(a/n|0,s[a],s[a+1],r);return r&&Js(r,r.next)&&(qr(r),r=r.next),r}function as(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Js(e,e.next)||Ce(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Pg(s,n,i,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?bg(s,n,i,r):Sg(s)){t.push(c.i,s.i,l.i),qr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=wg(as(s),t),Wr(s,t,e,n,i,r,2)):a===2&&Tg(s,t,e,n,i,r):Wr(as(s),t,e,n,i,r,1);break}}}function Sg(s){const t=s.prev,e=s,n=s.next;if(Ce(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(i,r,a),d=Math.min(o,c,l),u=Math.max(i,r,a),f=Math.max(o,c,l);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&_r(i,o,r,c,a,l,p.x,p.y)&&Ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function bg(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Ce(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,c,l),p=Math.min(h,d,u),_=Math.max(o,c,l),g=Math.max(h,d,u),m=Ol(f,p,t,e,n),x=Ol(_,g,t,e,n);let S=s.prevZ,v=s.nextZ;for(;S&&S.z>=m&&v&&v.z<=x;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==a&&_r(o,h,c,d,l,u,S.x,S.y)&&Ce(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&_r(o,h,c,d,l,u,v.x,v.y)&&Ce(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==a&&_r(o,h,c,d,l,u,S.x,S.y)&&Ce(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&_r(o,h,c,d,l,u,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wg(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Js(n,i)&&Zf(n,e,e.next,i)&&Xr(n,i)&&Xr(i,n)&&(t.push(n.i,e.i,i.i),qr(e),qr(e.next),e=s=i),e=e.next}while(e!==s);return as(e)}function Tg(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ng(a,o)){let c=Jf(a,o);a=as(a,a.next),c=as(c,c.next),Wr(a,t,e,n,i,r,0),Wr(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ag(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=qf(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Dg(l))}i.sort(Eg);for(let r=0;r<i.length;r++)e=Cg(i[r],e);return e}function Eg(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Cg(s,t){const e=Rg(s,t);if(!e)return t;const n=Jf(e,s);return as(n,n.next),as(e,e.next)}function Rg(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(Js(s,e))return e;do{if(Js(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Yf(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);Xr(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Ig(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Ig(s,t){return Ce(s.prev,s,t.prev)<0&&Ce(t.next,s,s.next)<0}function Pg(s,t,e,n){let i=s;do i.z===0&&(i.z=Ol(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Lg(i)}function Lg(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Ol(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Dg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Yf(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function _r(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Yf(s,t,e,n,i,r,a,o)}function Ng(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ug(s,t)&&(Xr(s,t)&&Xr(t,s)&&Fg(s,t)&&(Ce(s.prev,s,t.prev)||Ce(s,t.prev,t))||Js(s,t)&&Ce(s.prev,s,s.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Js(s,t){return s.x===t.x&&s.y===t.y}function Zf(s,t,e,n){const i=Ga(Ce(s,t,e)),r=Ga(Ce(s,t,n)),a=Ga(Ce(e,n,s)),o=Ga(Ce(e,n,t));return!!(i!==r&&a!==o||i===0&&ka(s,e,t)||r===0&&ka(s,n,t)||a===0&&ka(e,s,n)||o===0&&ka(e,t,n))}function ka(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ga(s){return s>0?1:s<0?-1:0}function Ug(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Zf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xr(s,t){return Ce(s.prev,s,s.next)<0?Ce(s,t,s.next)>=0&&Ce(s,s.prev,t)>=0:Ce(s,t,s.prev)<0||Ce(s,s.next,t)<0}function Fg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Jf(s,t){const e=Bl(s.i,s.x,s.y),n=Bl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fu(s,t,e,n){const i=Bl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Bl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Og(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Bg{static triangulate(t,e,n=2){return Mg(t,e,n)}}class Fn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Fn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Ou(t),Bu(n,t);let a=t.length;e.forEach(Ou);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Bu(n,e[c]);const o=Bg.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Ou(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Bu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class js extends ee{constructor(t=new cs([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Ut(i,3)),this.setAttribute("uv",new Ut(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:zg;let S,v=!1,T,b,R,M;if(m){S=m.getSpacedPoints(h),v=!0,u=!1;const B=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,B),b=new I,R=new I,M=new I}u||(g=0,f=0,p=0,_=0);const w=o.extractPoints(l);let C=w.shape;const P=w.holes;if(!Fn.isClockWise(C)){C=C.reverse();for(let B=0,J=P.length;B<J;B++){const X=P[B];Fn.isClockWise(X)&&(P[B]=X.reverse())}}function F(B){const X=10000000000000001e-36;let nt=B[0];for(let W=1;W<=B.length;W++){const ft=W%B.length,gt=B[ft],ht=gt.x-nt.x,_t=gt.y-nt.y,L=ht*ht+_t*_t,Vt=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(nt.x),Math.abs(nt.y)),wt=X*Vt*Vt;if(L<=wt){B.splice(ft,1),W--;continue}nt=gt}}F(C),P.forEach(F);const N=P.length,V=C;for(let B=0;B<N;B++){const J=P[B];C=C.concat(J)}function K(B,J,X){return J||$t("ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(J,X)}const O=C.length;function $(B,J,X){let nt,W,ft;const gt=B.x-J.x,ht=B.y-J.y,_t=X.x-B.x,L=X.y-B.y,Vt=gt*gt+ht*ht,wt=gt*L-ht*_t;if(Math.abs(wt)>Number.EPSILON){const E=Math.sqrt(Vt),y=Math.sqrt(_t*_t+L*L),z=J.x-ht/E,Y=J.y+gt/E,ot=X.x-L/y,St=X.y+_t/y,Tt=((ot-z)*L-(St-Y)*_t)/(gt*L-ht*_t);nt=z+gt*Tt-B.x,W=Y+ht*Tt-B.y;const rt=nt*nt+W*W;if(rt<=2)return new vt(nt,W);ft=Math.sqrt(rt/2)}else{let E=!1;gt>Number.EPSILON?_t>Number.EPSILON&&(E=!0):gt<-Number.EPSILON?_t<-Number.EPSILON&&(E=!0):Math.sign(ht)===Math.sign(L)&&(E=!0),E?(nt=-ht,W=gt,ft=Math.sqrt(Vt)):(nt=gt,W=ht,ft=Math.sqrt(Vt/2))}return new vt(nt/ft,W/ft)}const it=[];for(let B=0,J=V.length,X=J-1,nt=B+1;B<J;B++,X++,nt++)X===J&&(X=0),nt===J&&(nt=0),it[B]=$(V[B],V[X],V[nt]);const lt=[];let ut,Bt=it.concat();for(let B=0,J=N;B<J;B++){const X=P[B];ut=[];for(let nt=0,W=X.length,ft=W-1,gt=nt+1;nt<W;nt++,ft++,gt++)ft===W&&(ft=0),gt===W&&(gt=0),ut[nt]=$(X[nt],X[ft],X[gt]);lt.push(ut),Bt=Bt.concat(ut)}let Pt;if(g===0)Pt=Fn.triangulateShape(V,P);else{const B=[],J=[];for(let X=0;X<g;X++){const nt=X/g,W=f*Math.cos(nt*Math.PI/2),ft=p*Math.sin(nt*Math.PI/2)+_;for(let gt=0,ht=V.length;gt<ht;gt++){const _t=K(V[gt],it[gt],ft);st(_t.x,_t.y,-W),nt===0&&B.push(_t)}for(let gt=0,ht=N;gt<ht;gt++){const _t=P[gt];ut=lt[gt];const L=[];for(let Vt=0,wt=_t.length;Vt<wt;Vt++){const E=K(_t[Vt],ut[Vt],ft);st(E.x,E.y,-W),nt===0&&L.push(E)}nt===0&&J.push(L)}}Pt=Fn.triangulateShape(B,J)}const Mt=Pt.length,ct=p+_;for(let B=0;B<O;B++){const J=u?K(C[B],Bt[B],ct):C[B];v?(R.copy(T.normals[0]).multiplyScalar(J.x),b.copy(T.binormals[0]).multiplyScalar(J.y),M.copy(S[0]).add(R).add(b),st(M.x,M.y,M.z)):st(J.x,J.y,0)}for(let B=1;B<=h;B++)for(let J=0;J<O;J++){const X=u?K(C[J],Bt[J],ct):C[J];v?(R.copy(T.normals[B]).multiplyScalar(X.x),b.copy(T.binormals[B]).multiplyScalar(X.y),M.copy(S[B]).add(R).add(b),st(M.x,M.y,M.z)):st(X.x,X.y,d/h*B)}for(let B=g-1;B>=0;B--){const J=B/g,X=f*Math.cos(J*Math.PI/2),nt=p*Math.sin(J*Math.PI/2)+_;for(let W=0,ft=V.length;W<ft;W++){const gt=K(V[W],it[W],nt);st(gt.x,gt.y,d+X)}for(let W=0,ft=P.length;W<ft;W++){const gt=P[W];ut=lt[W];for(let ht=0,_t=gt.length;ht<_t;ht++){const L=K(gt[ht],ut[ht],nt);v?st(L.x,L.y+S[h-1].y,S[h-1].x+X):st(L.x,L.y,d+X)}}}dt(),D();function dt(){const B=i.length/3;if(u){let J=0,X=O*J;for(let nt=0;nt<Mt;nt++){const W=Pt[nt];Ct(W[2]+X,W[1]+X,W[0]+X)}J=h+g*2,X=O*J;for(let nt=0;nt<Mt;nt++){const W=Pt[nt];Ct(W[0]+X,W[1]+X,W[2]+X)}}else{for(let J=0;J<Mt;J++){const X=Pt[J];Ct(X[2],X[1],X[0])}for(let J=0;J<Mt;J++){const X=Pt[J];Ct(X[0]+O*h,X[1]+O*h,X[2]+O*h)}}n.addGroup(B,i.length/3-B,0)}function D(){const B=i.length/3;let J=0;Z(V,J),J+=V.length;for(let X=0,nt=P.length;X<nt;X++){const W=P[X];Z(W,J),J+=W.length}n.addGroup(B,i.length/3-B,1)}function Z(B,J){let X=B.length;for(;--X>=0;){const nt=X;let W=X-1;W<0&&(W=B.length-1);for(let ft=0,gt=h+g*2;ft<gt;ft++){const ht=O*ft,_t=O*(ft+1),L=J+nt+ht,Vt=J+W+ht,wt=J+W+_t,E=J+nt+_t;bt(L,Vt,wt,E)}}}function st(B,J,X){c.push(B),c.push(J),c.push(X)}function Ct(B,J,X){Dt(B),Dt(J),Dt(X);const nt=i.length/3,W=x.generateTopUV(n,i,nt-3,nt-2,nt-1);Et(W[0]),Et(W[1]),Et(W[2])}function bt(B,J,X,nt){Dt(B),Dt(J),Dt(nt),Dt(J),Dt(X),Dt(nt);const W=i.length/3,ft=x.generateSideWallUV(n,i,W-6,W-3,W-2,W-1);Et(ft[0]),Et(ft[1]),Et(ft[3]),Et(ft[1]),Et(ft[2]),Et(ft[3])}function Dt(B){i.push(c[B*3+0]),i.push(c[B*3+1]),i.push(c[B*3+2])}function Et(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Zo[i.type]().fromJSON(i)),new js(n,t.options)}}const zg={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new vt(r,a),new vt(o,c),new vt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new vt(a,1-c),new vt(l,1-d),new vt(u,1-p),new vt(_,1-m)]:[new vt(o,1-c),new vt(h,1-d),new vt(f,1-p),new vt(g,1-m)]}};function Vg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ta extends Ui{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ta(t.radius,t.detail)}}class ea extends ee{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ne(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,d=new I,u=new vt,f=new I,p=new I,_=new I;let g=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let x=0;x<=e;x++){const S=n+x*h*i,v=Math.sin(S),T=Math.cos(S);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*T,a.push(d.x,d.y,d.z),u.x=x/e,u.y=b/(t.length-1),o.push(u.x,u.y);const R=c[3*b+0]*v,M=c[3*b+1],w=c[3*b+0]*T;l.push(R,M,w)}}for(let x=0;x<e;x++)for(let S=0;S<t.length-1;S++){const v=S+x*t.length,T=v,b=v+t.length,R=v+t.length+1,M=v+1;r.push(T,b,M),r.push(R,M,b)}this.setIndex(r),this.setAttribute("position",new Ut(a,3)),this.setAttribute("uv",new Ut(o,2)),this.setAttribute("normal",new Ut(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.points,t.segments,t.phiStart,t.phiLength)}}class na extends Ui{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new na(t.radius,t.detail)}}class Hn extends ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const x=m*u-a;for(let S=0;S<l;S++){const v=S*d-r;p.push(v,-x,0),_.push(0,0,1),g.push(S/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){const S=x+l*m,v=x+l*(m+1),T=x+1+l*(m+1),b=x+1+l*m;f.push(S,v,b),f.push(v,T,b)}this.setIndex(f),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class wc extends ee{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=t;const u=(e-t)/i,f=new I,p=new vt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const x=m+g,S=x,v=x+n+1,T=x+n+2,b=x+1;o.push(S,v,b),o.push(v,T,b)}}this.setIndex(o),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(l,3)),this.setAttribute("uv",new Ut(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Tc extends ee{constructor(t=new cs([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ut(i,3)),this.setAttribute("normal",new Ut(r,3)),this.setAttribute("uv",new Ut(a,2));function l(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;Fn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const x=p[g];Fn.isClockWise(x)===!0&&(p[g]=x.reverse())}const _=Fn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const x=p[g];f=f.concat(x)}for(let g=0,m=f.length;g<m;g++){const x=f[g];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,m=_.length;g<m;g++){const x=_[g],S=x[0]+d,v=x[1]+d,T=x[2]+d;n.push(S,v,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return kg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new Tc(n,t.curveSegments)}}function kg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ls extends ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new I,u=new I,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const x=[],S=m/n,v=a+S*o,T=t*Math.cos(v),b=Math.sqrt(t*t-T*T);let R=0;m===0&&a===0?R=.5/e:m===n&&c===Math.PI&&(R=-.5/e);for(let M=0;M<=e;M++){const w=M/e,C=i+w*r;d.x=-b*Math.cos(C),d.y=T,d.z=b*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(w+R,1-S),x.push(l++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const S=h[m][x+1],v=h[m][x],T=h[m+1][x],b=h[m+1][x+1];(m!==0||a>0)&&f.push(S,v,b),(m!==n-1||c<Math.PI)&&f.push(v,T,b)}this.setIndex(f),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ac extends Ui{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ac(t.radius,t.detail)}}class ia extends ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],d=[],u=new I,f=new I,p=new I;for(let _=0;_<=n;_++){const g=a+_/n*o;for(let m=0;m<=i;m++){const x=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(x),f.y=(t+e*Math.cos(g))*Math.sin(x),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){const m=(i+1)*_+g-1,x=(i+1)*(_-1)+g-1,S=(i+1)*(_-1)+g,v=(i+1)*_+g;c.push(m,x,v),c.push(x,S,v)}this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Ec extends ee{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],h=[],d=new I,u=new I,f=new I,p=new I,_=new I,g=new I,m=new I;for(let S=0;S<=n;++S){const v=S/n*r*Math.PI*2;x(v,r,a,t,f),x(v+.01,r,a,t,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let T=0;T<=i;++T){const b=T/i*Math.PI*2,R=-e*Math.cos(b),M=e*Math.sin(b);d.x=f.x+(R*m.x+M*_.x),d.y=f.y+(R*m.y+M*_.y),d.z=f.z+(R*m.z+M*_.z),c.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),l.push(u.x,u.y,u.z),h.push(S/n),h.push(T/i)}}for(let S=1;S<=n;S++)for(let v=1;v<=i;v++){const T=(i+1)*(S-1)+(v-1),b=(i+1)*S+(v-1),R=(i+1)*S+v,M=(i+1)*(S-1)+v;o.push(T,b,M),o.push(b,R,M)}this.setIndex(o),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(l,3)),this.setAttribute("uv",new Ut(h,2));function x(S,v,T,b,R){const M=Math.cos(S),w=Math.sin(S),C=T/v*S,P=Math.cos(C);R.x=b*(2+P)*.5*M,R.y=b*(2+P)*w*.5,R.z=b*Math.sin(C)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Cc extends ee{constructor(t=new bh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,c=new I,l=new vt;let h=new I;const d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ut(d,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(f,2));function _(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),x(),m()}function g(S){h=t.getPointAt(S/e,h);const v=a.normals[S],T=a.binormals[S];for(let b=0;b<=i;b++){const R=b/i*Math.PI*2,M=Math.sin(R),w=-Math.cos(R);c.x=w*v.x+M*T.x,c.y=w*v.y+M*T.y,c.z=w*v.z+M*T.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=e;S++)for(let v=1;v<=i;v++){const T=(i+1)*(S-1)+(v-1),b=(i+1)*S+(v-1),R=(i+1)*S+v,M=(i+1)*(S-1)+v;p.push(T,b,M),p.push(b,R,M)}}function x(){for(let S=0;S<=e;S++)for(let v=0;v<=i;v++)l.x=S/e,l.y=v/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Cc(new Zo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class $f extends ee{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new I,r=new I;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const d=c[l],u=d.start,f=d.count;for(let p=u,_=u+f;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),x=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,x),zu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,d=3*o+(l+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),zu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ut(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function zu(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Vu=Object.freeze({__proto__:null,BoxGeometry:cn,CapsuleGeometry:yc,CircleGeometry:Mc,ConeGeometry:os,CylinderGeometry:We,DodecahedronGeometry:Sc,EdgesGeometry:Vf,ExtrudeGeometry:js,IcosahedronGeometry:ta,LatheGeometry:ea,OctahedronGeometry:na,PlaneGeometry:Hn,PolyhedronGeometry:Ui,RingGeometry:wc,ShapeGeometry:Tc,SphereGeometry:ls,TetrahedronGeometry:Ac,TorusGeometry:ia,TorusKnotGeometry:Ec,TubeGeometry:Cc,WireframeGeometry:$f});class Th extends Ze{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Rt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function $s(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(ku(i))i.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ku(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function sn(s){const t={};for(let e=0;e<s.length;e++){const n=$s(s[e]);for(const i in n)t[i]=n[i]}return t}function ku(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Gg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Kf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Qf={clone:$s,merge:sn};var Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Ze{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=Wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=Gg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(i.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(i.value);break;case"m3":this.uniforms[n].value=new se().fromArray(i.value);break;case"m4":this.uniforms[n].value=new te().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ah extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Me extends Ze{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bs extends Me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class jf extends Ze{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=$r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tp extends Ze{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Rt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ep extends Ze{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class np extends Ze{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=$r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rc extends Ze{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Eh extends Ze{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ip extends Ze{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Rt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sp extends ln{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Dn(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ir(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function rp(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function zl(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function ap(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function Xg(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),d=[],u=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(!(p<e||p>=n)){d.push(l.times[f]);for(let _=0;_<h;++_)u.push(l.values[f*h+_])}}d.length!==0&&(l.times=Dn(d,l.times.constructor),l.values=Dn(u,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function qg(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===c});if(l===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const m=h,x=d-h;_=o.values.slice(m,x)}else if(r>=o.times[p]){const m=p*d+h,x=m+d-h;_=o.values.slice(m,x)}else{const m=o.createInterpolant(),x=h,S=d-h;m.evaluate(r),_=m.resultBuffer.slice(x,S)}c==="quaternion"&&new Be().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let m=0;m<g;++m){const x=m*f+u;if(c==="quaternion")Be.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const S=f-u*2;for(let v=0;v<S;++v)l.values[x+v]-=_[v]}}}return s.blendMode=hh,s}class Yg{static convertArray(t,e){return Dn(t,e)}static isTypedArray(t){return Af(t)}static hasTangents(t){return Ir(t)}static getKeyframeOrder(t){return rp(t)}static sortedArray(t,e,n){return zl(t,e,n)}static flattenJSON(t,e,n,i){ap(t,e,n,i)}static subclip(t,e,n,i,r=30){return Xg(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return qg(t,e,n,i)}}class tr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class op extends tr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ji,endingEnd:ji}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ts:r=t,o=2*e-n;break;case Br:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ts:a=t,c=2*n-e;break;case Br:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,x=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,S=(-1-f)*g+(1.5+f)*_+.5*p,v=f*g-f*_;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+x*a[l+T]+S*a[c+T]+v*a[d+T];return r}}class Ch extends tr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}}class cp extends tr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class lp extends tr{interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),_=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*_+a[c+g]*p;return r}const u=o*2,f=t-1;for(let p=0;p!==o;++p){const _=a[l+p],g=a[c+p],m=f*u+p*2,x=d[m],S=d[m+1],v=t*u+p*2,T=h[v],b=h[v+1],R=Jg(n,e,x,T,i);r[p]=hp(R,_,S,b,g)}return r}}function hp(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Zg(s,t,e,n,i){const r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Jg(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){const o=hp(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;const c=Zg(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}class Cn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dn(e,this.TimeBufferType),this.values=Dn(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dn(t.times,Array),values:Dn(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ir(t.settings)&&(n.settings={inTangents:Dn(t.settings.inTangents,Array),outTangents:Dn(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new op(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new lp(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case Xo:e=this.InterpolantFactoryMethodLinear;break;case no:e=this.InterpolantFactoryMethodSmooth;break;case Nl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return no;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ir(this.settings)&&(Gu(this.settings.inTangents,t),Gu(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){$t("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){$t("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Af(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){$t("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===no,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ir(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Gu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Xo;class hs extends Cn{constructor(t,e,n){super(t,e,n)}}hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Or;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Rh extends Cn{constructor(t,e,n,i){super(t,e,n,i)}}Rh.prototype.ValueTypeName="color";class Ic extends Cn{constructor(t,e,n,i){super(t,e,n,i)}}Ic.prototype.ValueTypeName="number";class up extends tr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)Be.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Pc extends Cn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new up(this.times,this.values,this.getValueSize(),t)}}Pc.prototype.ValueTypeName="quaternion";Pc.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Cn{constructor(t,e,n){super(t,e,n)}}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Or;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class Ih extends Cn{constructor(t,e,n,i){super(t,e,n,i)}}Ih.prototype.ValueTypeName="vector";class Yr{constructor(t="",e=-1,n=[],i=rc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Kg(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(Cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=rp(c);c=zl(c,1,h),l=zl(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ic(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function $g(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ic;case"vector":case"vector2":case"vector3":case"vector4":return Ih;case"color":return Rh;case"quaternion":return Pc;case"bool":case"boolean":return hs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Kg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=$g(s.type);if(s.times===void 0){const n=[],i=[];ap(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Ir(s.settings)&&(e.settings={inTangents:Dn(s.settings.inTangents,Float32Array),outTangents:Dn(s.settings.outTangents,Float32Array)}),e}const Zn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Hu(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Hu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Hu(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Ph{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dp=new Ph;class gn{constructor(t){this.manager=t!==void 0?t:dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class Qg extends Error{constructor(t,e){super(t),this.response=e}}class pi extends gn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Zn.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ri[t]!==void 0){ri[t].push({onLoad:e,onProgress:n,onError:i});return}ri[t]=[],ri[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ri[t],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){x();function x(){d.read().then(({done:S,value:v})=>{if(S)m.close();else{_+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let b=0,R=h.length;b<R;b++){const M=h[b];M.onProgress&&M.onProgress(T)}m.enqueue(v),x()}},S=>{m.error(S)})}}});return new Response(g)}else throw new Qg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Zn.add(`file:${t}`,l);const h=ri[t];delete ri[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ri[t];if(h===void 0)throw this.manager.itemError(t),l;delete ri[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class jg extends gn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new pi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):$t(c),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Yr.parse(t[n]);e.push(i)}return e}}class t_ extends gn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=[],o=new xc,c=new pi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(d){c.load(t[d],function(u){const f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=be),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else c.load(t,function(d){const u=r.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+_]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=be),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}const Rs=new WeakMap;class Zr extends gn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Zn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Rs.get(a);d===void 0&&(d=[],Rs.set(a,d)),d.push({onLoad:e,onError:i})}return a}const o=kr("img");function c(){h(),e&&e(this);const d=Rs.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Rs.delete(this),r.manager.itemEnd(t)}function l(d){h(),i&&i(d),Zn.remove(`image:${t}`);const u=Rs.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}Rs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zn.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class e_ extends gn{constructor(t){super(t)}load(t,e,n,i){const r=new jr;r.colorSpace=Ee;const a=new Zr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(t[l],function(h){r.images[l]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}}class n_ extends gn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new mn,o=new pi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(c){let l;try{l=r.parse(c)}catch(h){i!==void 0?i(h):$t(h);return}r._applyTexData(a,l),e&&e(a,l)},n,i),a}createDataTexture(t){const e=new mn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:fn,t.wrapT=e.wrapT!==void 0?e.wrapT:fn,t.magFilter=e.magFilter!==void 0?e.magFilter:be,t.minFilter=e.minFilter!==void 0?e.minFilter:be,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Un),e.mipmapCount===1&&(t.minFilter=be),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class fp extends gn{constructor(t){super(t)}load(t,e,n,i){const r=new Re,a=new Zr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Fi extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Lh extends Fi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ul=new te,Wu=new I,Xu=new I;class Lc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ul,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===is||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ha=new I,Wa=new Be,qn=new I;class sa extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ha,Wa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Wa,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ha,Wa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Wa,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new I,qu=new vt,Yu=new vt;class Xe extends sa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Yu),e.subVectors(Yu,qu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(es*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class i_ extends Lc{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=qs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class pp extends Fi{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new i_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class s_ extends Lc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0}}class mp extends Fi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new s_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ra extends sa{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class r_ extends Lc{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dh extends Fi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new r_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class gp extends Fi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _p extends Fi{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Nh{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new I)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class xp extends Fi{constructor(t=new Nh,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}const Zu={};class Dc extends gn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,a=new pi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):$t(c),r.manager.itemError(t)}},n,i)}parse(t){const e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Dc.createMaterialFromType(t)}static createMaterialFromType(t){const n={ShadowMaterial:Th,SpriteMaterial:mh,RawShaderMaterial:Ah,ShaderMaterial:En,PointsMaterial:_h,MeshPhysicalMaterial:Bs,MeshStandardMaterial:Me,MeshPhongMaterial:jf,MeshToonMaterial:tp,MeshNormalMaterial:ep,MeshLambertMaterial:np,MeshDepthMaterial:Rc,MeshDistanceMaterial:Eh,MeshBasicMaterial:kn,MeshMatcapMaterial:ip,LineDashedMaterial:sp,LineBasicMaterial:ln,Material:Ze,...Zu}[t];let i;return n===void 0?(ui(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new Ze):i=new n,i}static registerMaterial(t,e){Zu[t]=e}}class Vl{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class vp extends ee{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class yp extends gn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new pi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):$t(c),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),x=Os(g.type,m),S=new mc(x,g.stride);return S.uuid=g.uuid,g.usage!==void 0&&S.setUsage(g.usage),e[p]=S,S}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=t.isInstancedBufferGeometry?new vp:new ee,o=t.data.index;if(o!==void 0){const f=Os(o.type,o.array);a.setIndex(new xe(f,1))}const c=t.data.attributes;for(const f in c){const p=c[f];let _;if(p.isInterleavedBufferAttribute){const g=i(t.data,p.data);_=new ss(g,p.itemSize,p.offset,p.normalized)}else{const g=Os(p.type,p.array),m=p.isInstancedBufferAttribute?Ys:xe;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),p.gpuType!==void 0&&(_.gpuType=p.gpuType),a.setAttribute(f,_)}const l=t.data.morphAttributes;if(l)for(const f in l){const p=l[f],_=[];for(let g=0,m=p.length;g<m;g++){const x=p[g];let S;if(x.isInterleavedBufferAttribute){const v=i(t.data,x.data);S=new ss(v,x.itemSize,x.offset,x.normalized)}else{const v=Os(x.type,x.array);S=new xe(v,x.itemSize,x.normalized)}x.name!==void 0&&(S.name=x.name),x.usage!==void 0&&S.setUsage(x.usage),x.gpuType!==void 0&&(S.gpuType=x.gpuType),_.push(S)}a.morphAttributes[f]=_}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const _=d[f];a.addGroup(_.start,_.count,_.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new Ye().fromJSON(u)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}const dl={};class a_ extends gn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=this.path===""?Vl.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new pi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(d){i!==void 0&&i(d),$t("ObjectLoader: Can't parse "+t+".",d.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),$t("ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?Vl.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new pi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(t,e);let o;try{o=JSON.parse(a)}catch(l){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+l.message)}const c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(l)}),o=this.parseTextures(t.textures,a),c=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,r,c,o,n),h=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),e!==void 0){let d=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,i,o,a,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}static registerGeometry(t,e){dl[t]=e}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new cs().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=new gc().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new yp;for(let r=0,a=t.length;r<a;r++){let o;const c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in Vu?o=Vu[c.type].fromJSON(c,e):c.type in dl?o=dl[c.type].fromJSON(c,e):Nt(`ObjectLoader: Unknown geometry type "${c.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new Dc;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){const c=t[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=Yr.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function a(c){return c=n.manager.resolveURL(c),n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(h)}else return c.data?{data:Os(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){const c=new Ph(e);r=new Zr(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=t.length;l<h;l++){const d=t[l],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new mn(m.data,m.width,m.height)))}i[d.uuid]=new hi(f)}else{const f=o(d.url);i[d.uuid]=new hi(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Os(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new Zr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const c=t[a],l=c.url;if(Array.isArray(l)){const h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new mn(p.data,p.width,p.height)))}n[c.uuid]=new hi(h)}else{const h=await r(c.url);n[c.uuid]=new hi(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(Nt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=t[r];o.image===void 0&&Nt('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&Nt("ObjectLoader: Undefined image",o.image);const c=e[o.image],l=c.data;let h;Array.isArray(l)?(h=new jr,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new mn:h=new Re,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,o_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Ju),h.wrapT=n(o.wrap[1],Ju)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,$u)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,$u)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,r){let a;function o(u){return e[u]===void 0&&Nt("ObjectLoader: Undefined geometry",u),e[u]}function c(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,_=u.length;p<_;p++){const g=u[p];n[g]===void 0&&Nt("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[u]===void 0&&Nt("ObjectLoader: Undefined material",u),n[u]}}function l(u){return i[u]===void 0&&Nt("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(t.type){case"Scene":a=new pc,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new Rt(t.background):a.background=l(t.background)),t.environment!==void 0&&(a.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new fc(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new dc(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Xe(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new ra(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new gp(t.color,t.intensity);break;case"DirectionalLight":a=new Dh(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new mp(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new _p(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new pp(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new Lh(t.color,t.groundColor,t.intensity);break;case"LightProbe":const u=new Nh().fromArray(t.sh);a=new xp(u,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),d=c(t.material),a=new Nf(h,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),d=c(t.material),a=new Te(h,d);break;case"InstancedMesh":h=o(t.geometry),d=c(t.material);const f=t.count,p=t.instanceMatrix,_=t.instanceColor;a=new Qi(h,d,f),a.instanceMatrix=new Ys(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new Ys(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(t.geometry),d=c(t.material),a=new Uf(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(g=>{let m=null,x=null;return g.boundingBox!==void 0&&(m=new tn().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(x=new Ye().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:x}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t._availableInstanceIds,a._availableGeometryIds=t._availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=l(t.matricesTexture.uuid),a._indirectTexture=l(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=l(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new Ye().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new tn().fromJSON(t.boundingBox));break;case"LOD":a=new Df;break;case"Line":a=new Di(o(t.geometry),c(t.material));break;case"LineLoop":a=new Ff(o(t.geometry),c(t.material));break;case"LineSegments":a=new Qn(o(t.geometry),c(t.material));break;case"PointCloud":case"Points":a=new Of(o(t.geometry),c(t.material));break;case"Sprite":a=new Lf(c(t.material));break;case"Group":a=new Ci;break;case"Bone":a=new gh;break;default:a=new de}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.pivot!==void 0&&(a.pivot=new I().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(a.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(a.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const u=t.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],e,n,i,r))}if(t.animations!==void 0){const u=t.animations;for(let f=0;f<u.length;f++){const p=u[f];a.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const u=t.levels;for(let f=0;f<u.length;f++){const p=u[f],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?Nt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new de}})}}const o_={UVMapping:jo,CubeReflectionMapping:$n,CubeRefractionMapping:Ii,EquirectangularReflectionMapping:yr,EquirectangularRefractionMapping:Mr,CubeUVReflectionMapping:Ks},Ju={RepeatWrapping:ns,ClampToEdgeWrapping:fn,MirroredRepeatWrapping:Nr},$u={NearestFilter:Le,NearestMipmapNearestFilter:ih,NearestMipmapLinearFilter:Fs,LinearFilter:be,LinearMipmapNearestFilter:Sr,LinearMipmapLinearFilter:Un},fl=new WeakMap;class c_ extends gn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Zn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{fl.has(a)===!0?(i&&i(fl.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(l),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zn.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),fl.set(c,l),Zn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Zn.add(`image-bitmap:${t}`,c),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Xa;class Uh{static getContext(){return Xa===void 0&&(Xa=new(window.AudioContext||window.webkitAudioContext)),Xa}static setContext(t){Xa=t}}class l_ extends gn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new pi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){try{const l=c.slice(0),h=Uh.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(l,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){o(u),r.manager.itemEnd(d)})}catch(l){o(l)}},n,i);function o(c){i?i(c):$t(c),r.manager.itemError(t)}}}const Ku=new te,Qu=new te,Wi=new te;class h_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Xe,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Xe,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Wi.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(es*e.fov*.5)/e.zoom;let o,c;Qu.elements[12]=-i,Ku.elements[12]=i,o=-a*e.aspect+r,c=a*e.aspect+r,Wi.elements[0]=2*e.near/(c-o),Wi.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(Wi),o=-a*e.aspect-r,c=a*e.aspect-r,Wi.elements[0]=2*e.near/(c-o),Wi.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(Wi)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Qu),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(Ku),this.cameraR.matrixWorldNeedsUpdate=!0}}const Is=-90,Ps=1;class Mp extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(Is,Ps,t,e);i.layers=this.layers,this.add(i);const r=new Xe(Is,Ps,t,e);r.layers=this.layers,this.add(r);const a=new Xe(Is,Ps,t,e);a.layers=this.layers,this.add(a);const o=new Xe(Is,Ps,t,e);o.layers=this.layers,this.add(o);const c=new Xe(Is,Ps,t,e);c.layers=this.layers,this.add(c);const l=new Xe(Is,Ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Sp extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class bp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=u_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function u_(){this._document.hidden===!1&&this.reset()}const Xi=new I,pl=new Be,d_=new I,qi=new I,Yi=new I;class f_ extends de{constructor(){super(),this.type="AudioListener",this.context=Uh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new bp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Xi,pl,d_),qi.set(0,0,-1).applyQuaternion(pl),Yi.set(0,1,0).applyQuaternion(pl),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Xi.x,n),e.positionY.linearRampToValueAtTime(Xi.y,n),e.positionZ.linearRampToValueAtTime(Xi.z,n),e.forwardX.linearRampToValueAtTime(qi.x,n),e.forwardY.linearRampToValueAtTime(qi.y,n),e.forwardZ.linearRampToValueAtTime(qi.z,n),e.upX.linearRampToValueAtTime(Yi.x,n),e.upY.linearRampToValueAtTime(Yi.y,n),e.upZ.linearRampToValueAtTime(Yi.z,n)}else e.setPosition(Xi.x,Xi.y,Xi.z),e.setOrientation(qi.x,qi.y,qi.z,Yi.x,Yi.y,Yi.z)}}class wp extends de{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Nt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Nt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Nt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Zi=new I,ju=new Be,p_=new I,Ji=new I;class m_ extends wp{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Zi,ju,p_),Ji.set(0,0,1).applyQuaternion(ju);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Zi.x,n),e.positionY.linearRampToValueAtTime(Zi.y,n),e.positionZ.linearRampToValueAtTime(Zi.z,n),e.orientationX.linearRampToValueAtTime(Ji.x,n),e.orientationY.linearRampToValueAtTime(Ji.y,n),e.orientationZ.linearRampToValueAtTime(Ji.z,n)}else e.setPosition(Zi.x,Zi.y,Zi.z),e.setOrientation(Ji.x,Ji.y,Ji.z)}}class g_{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Tp{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Be.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;Be.multiplyQuaternionsFlat(t,a,t,e,t,n),Be.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Fh="\\[\\]\\.:\\/",__=new RegExp("["+Fh+"]","g"),Oh="[^"+Fh+"]",x_="[^"+Fh.replace("\\.","")+"]",v_=/((?:WC+[\/:])*)/.source.replace("WC",Oh),y_=/(WCOD+)?/.source.replace("WCOD",x_),M_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),S_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),b_=new RegExp("^"+v_+y_+M_+S_+"$"),w_=["material","materials","bones","map"];class T_{constructor(t,e,n){const i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ue{constructor(t,e,n){this.path=e,this.parsedPath=n||ue.parseTrackName(e),this.node=ue.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ue.Composite(t,e,n):new ue(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(__,"")}static parseTrackName(t){const e=b_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);w_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ue.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ue.Composite=T_;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class A_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Mn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,c=t.length,l=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=e[f];if(p===void 0){p=c++,e[f]=p,t.push(u);for(let _=0,g=a;_!==g;++_)r[_].push(new ue(u,n[_],i[_]))}else if(p<l){o=t[p];const _=--l,g=t[_];e[g.uuid]=p,t[p]=g,e[f]=_,t[_]=u;for(let m=0,x=a;m!==x;++m){const S=r[m],v=S[_];let T=S[p];S[p]=v,T===void 0&&(T=new ue(u,n[m],i[m])),S[_]=T}}else t[p]!==o&&$t("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,h=e[l];if(h!==void 0&&h>=r){const d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[l]=d,t[d]=c;for(let f=0,p=i;f!==p;++f){const _=n[f],g=_[d],m=_[h];_[h]=g,_[d]=m}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=t.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],h=l.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){const u=--r,f=t[u],p=--a,_=t[p];d!==u&&(e[f.uuid]=d),t[d]=f,u!==p&&(e[_.uuid]=u),t[u]=_,t.pop();for(let g=0,m=i;g!==m;++g){const x=n[g],S=x[u],v=x[p];x[d]=S,x[u]=v,x.pop()}}else{const u=--a,f=t[u];d!==u&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[d]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,d=new Array(l);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(d);for(let u=h,f=c.length;u!==f;++u){const p=c[u];d[u]=new ue(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=i[o];e[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Ap{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:ji,endingEnd:ji};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=pf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case hh:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case rc:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===mf;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===ff){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=ts,i.endingEnd=ts):(t?i.endingStart=this.zeroSlopeAtStart?ts:ji:i.endingStart=Br,e?i.endingEnd=this.zeroSlopeAtEnd?ts:ji:i.endingEnd=Br)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=n,this}}const E_=new Float32Array(1);class C_ extends Vn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const _=e&&e._propertyBindings[d].binding.parsedPath;p=new Tp(ue.create(n,f,_),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Ch(new Float32Array(2),new Float32Array(2),1,E_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?Yr.findByName(i,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=rc),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Ap(this,a,e,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Yr.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class R_ extends dh{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){const a=new hc(null,t,e,n);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(i)}}class Bh{constructor(t){this.value=t}clone(){return new Bh(this.value.clone===void 0?this.value:this.value.clone())}}let I_=0;class P_ extends Vn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:I_++}),this.name="",this.usage=cc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class L_ extends mc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class D_{constructor(t,e,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const td=new te;class N_{constructor(t,e,n=0,i=1/0){this.ray=new Qs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return td.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(td),this}intersectObject(t,e=!0,n=[]){return kl(t,this,n,e),n.sort(ed),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)kl(t[i],this,n,e);return n.sort(ed),n}}function ed(s,t){return s.distance-t.distance}function kl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)kl(r[a],t,e,!0)}}class U_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class F_{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class O_{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}const Xh=class Xh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Xh.prototype.isMatrix2=!0;let Gl=Xh;const nd=new vt;class Ep{constructor(t=new vt(1/0,1/0),e=new vt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nd.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nd).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const id=new I,qa=new I,Ls=new I,Ds=new I,ml=new I,B_=new I,z_=new I;class V_{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){id.subVectors(t,this.start),qa.subVectors(this.end,this.start);const n=qa.dot(qa);if(n===0)return 0;let r=qa.dot(id)/n;return e&&(r=ne(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=B_,n=z_){const i=10000000000000001e-32;let r,a;const o=this.start,c=t.start,l=this.end,h=t.end;Ls.subVectors(l,o),Ds.subVectors(h,c),ml.subVectors(o,c);const d=Ls.dot(Ls),u=Ds.dot(Ds),f=Ds.dot(ml);if(d<=i&&u<=i)return e.copy(o),n.copy(c),e.sub(n),e.dot(e);if(d<=i)r=0,a=f/u,a=ne(a,0,1);else{const p=Ls.dot(ml);if(u<=i)a=0,r=ne(-p/d,0,1);else{const _=Ls.dot(Ds),g=d*u-_*_;g!==0?r=ne((_*f-p*u)/g,0,1):r=0,a=(_*r+f)/u,a<0?(a=0,r=ne(-p/d,0,1)):a>1&&(a=1,r=ne((_-p)/d,0,1))}}return e.copy(o).addScaledVector(Ls,r),n.copy(c).addScaledVector(Ds,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const sd=new I;class k_ extends de{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new ee,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,h=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ut(i,3));const r=new ln({fog:!1,toneMapped:!1});this.cone=new Qn(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),sd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(sd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const wi=new I,Ya=new te,gl=new te;class G_ extends Qn{constructor(t){const e=Cp(t),n=new ee,i=[],r=[];for(let l=0;l<e.length;l++){const h=e[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Ut(i,3)),n.setAttribute("color",new Ut(r,3));const a=new ln({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const o=new Rt(255),c=new Rt(65280);this.setColors(o,c)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");gl.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(Ya.multiplyMatrices(gl,o.matrixWorld),wi.setFromMatrixPosition(Ya),i.setXYZ(a,wi.x,wi.y,wi.z),Ya.multiplyMatrices(gl,o.parent.matrixWorld),wi.setFromMatrixPosition(Ya),i.setXYZ(a+1,wi.x,wi.y,wi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Cp(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...Cp(s.children[e]));return t}class H_ extends Te{constructor(t,e,n){const i=new ls(e,4,2),r=new kn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const W_=new I,rd=new Rt,ad=new Rt;class X_ extends de{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new na(e);i.rotateY(Math.PI*.5),this.material=new kn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new xe(a,3)),this.add(new Te(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");rd.copy(this.light.color),ad.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?rd:ad;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(W_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class q_ extends Qn{constructor(t=10,e=10,n=4473924,i=8947848){n=new Rt(n),i=new Rt(i);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let u=0,f=0,p=-o;u<=e;u++,p+=a){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);const _=u===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new ee;h.setAttribute("position",new Ut(c,3)),h.setAttribute("color",new Ut(l,3));const d=new ln({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Y_ extends Qn{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new Rt(r),a=new Rt(a);const o=[],c=[];if(e>1)for(let d=0;d<e;d++){const u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;o.push(0,0,0),o.push(f,0,p);const _=d&1?r:a;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const u=d&1?r:a,f=t-t/n*d;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;o.push(g,0,m),c.push(u.r,u.g,u.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,o.push(g,0,m),c.push(u.r,u.g,u.b)}}const l=new ee;l.setAttribute("position",new Ut(o,3)),l.setAttribute("color",new Ut(c,3));const h=new ln({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const od=new I,Za=new I,cd=new I;class Z_ extends de{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new ee;i.setAttribute("position",new Ut([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new ln({fog:!1,toneMapped:!1});this.lightPlane=new Di(i,r),this.add(this.lightPlane),i=new ee,i.setAttribute("position",new Ut([0,0,0,0,0,1],3)),this.targetLine=new Di(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),od.setFromMatrixPosition(this.light.matrixWorld),Za.setFromMatrixPosition(this.light.target.matrixWorld),cd.subVectors(Za,od),this.lightPlane.lookAt(Za),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Za),this.targetLine.scale.z=cd.length()}}const Ja=new I,Pe=new sa;class J_ extends Qn{constructor(t){const e=new ee,n=new ln({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){c(p),c(_)}function c(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}e.setAttribute("position",new Ut(i,3)),e.setAttribute("color",new Ut(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new Rt(16755200),h=new Rt(16711680),d=new Rt(43775),u=new Rt(16777215),f=new Rt(3355443);this.setColors(l,h,d,u,f)}setColors(t,e,n,i,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;let r,a;if(Pe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===yn)r=-1,a=1;else if(this.camera.coordinateSystem===is)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ne("c",e,t,Pe,0,0,r),Ne("t",e,t,Pe,0,0,a),Ne("n1",e,t,Pe,-n,-i,r),Ne("n2",e,t,Pe,n,-i,r),Ne("n3",e,t,Pe,-n,i,r),Ne("n4",e,t,Pe,n,i,r),Ne("f1",e,t,Pe,-n,-i,a),Ne("f2",e,t,Pe,n,-i,a),Ne("f3",e,t,Pe,-n,i,a),Ne("f4",e,t,Pe,n,i,a),Ne("u1",e,t,Pe,n*.7,i*1.1,r),Ne("u2",e,t,Pe,-n*.7,i*1.1,r),Ne("u3",e,t,Pe,0,i*2,r),Ne("cf1",e,t,Pe,-n,0,a),Ne("cf2",e,t,Pe,n,0,a),Ne("cf3",e,t,Pe,0,-i,a),Ne("cf4",e,t,Pe,0,i,a),Ne("cn1",e,t,Pe,-n,0,r),Ne("cn2",e,t,Pe,n,0,r),Ne("cn3",e,t,Pe,0,-i,r),Ne("cn4",e,t,Pe,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Ne(s,t,e,n,i,r,a){Ja.set(i,r,a).unproject(n);const o=t[s];if(o!==void 0){const c=e.getAttribute("position");for(let l=0,h=o.length;l<h;l++)c.setXYZ(o[l],Ja.x,Ja.y,Ja.z)}}const $a=new tn;class $_ extends Qn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new ee;r.setIndex(new xe(n,1)),r.setAttribute("position",new xe(i,3)),super(r,new ln({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&$a.setFromObject(this.object),$a.isEmpty())return;const t=$a.min,e=$a.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class K_ extends Qn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ee;r.setIndex(new xe(n,1)),r.setAttribute("position",new Ut(i,3)),super(r,new ln({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Q_ extends Di{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new ee;a.setAttribute("position",new Ut(r,3)),a.computeBoundingSphere(),super(a,new ln({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new ee;c.setAttribute("position",new Ut(o,3)),c.computeBoundingSphere(),this.add(new Te(c,new kn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const ld=new I;let Ka,_l;class j_ extends de{constructor(t=new I(0,0,1),e=new I(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ka===void 0&&(Ka=new ee,Ka.setAttribute("position",new Ut([0,0,0,0,1,0],3)),_l=new os(.5,1,5,1),_l.translate(0,-.5,0)),this.position.copy(e),this.line=new Di(Ka,new ln({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Te(_l,new kn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{ld.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(ld,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class tx extends Qn{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ee;i.setAttribute("position",new Ut(e,3)),i.setAttribute("color",new Ut(n,3));const r=new ln({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new Rt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class ex{constructor(){this.type="ShapePath",this.color=new Rt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Hr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(c,l){let h=!1;const d=l.length;for(let u=0,f=d-1;u<d;f=u++){const p=l[u],_=l[f];p.y>c.y!=_.y>c.y&&c.x<(_.x-p.x)*(c.y-p.y)/(_.y-p.y)+p.x&&(h=!h)}return h}function e(c,l){const h=l.getCenter(new vt);if(t(h,c))return h;const d=h.y,u=[],f=c.length;for(let p=0;p<f;p++){const _=c[p],g=c[(p+1)%f];if(_.y>d!=g.y>d){const m=_.x+(d-_.y)*(g.x-_.x)/(g.y-_.y);u.push(m)}}return u.length>1&&(u.sort((p,_)=>p-_),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Nt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const i=n==="nonzero"?(c=>c!==0):(c=>(c&1)!==0),r=[];for(const c of this.subPaths){const l=c.getPoints();if(l.length<3)continue;const h=Fn.area(l);if(h===0)continue;const d=new Ep;for(let u=0;u<l.length;u++)d.expandByPoint(l[u]);r.push({subPath:c,points:l,boundingBox:d,interiorPoint:e(l,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((c,l)=>l.absArea-c.absArea);for(let c=0;c<r.length;c++){const l=r[c];let h=0;for(let d=c-1;d>=0;d--){const u=r[d];if(u.boundingBox.containsBox(l.boundingBox)&&t(l.interiorPoint,u.points)){l.container=u.exclude?u.container:u,h=u.winding,l.winding+=h;break}}i(l.winding)===i(h)&&(l.exclude=!0)}for(const c of r)c.exclude||(c.role=c.container===null||c.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const c of r){if(c.exclude||c.role!=="outer")continue;const l=new cs;l.curves=c.subPath.curves,a.push(l),o.set(c,l)}for(const c of r){if(c.exclude||c.role!=="hole")continue;const l=o.get(c.container);if(!l)continue;const h=new Hr;h.curves=c.subPath.curves,l.holes.push(h)}return a}}class nx extends Vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ix(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function sx(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function rx(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Hl(s,t,e,n){const i=ax(n);switch(e){case ch:return s*t;case Kr:return s*t/i.components*i.byteLength;case Qr:return s*t/i.components*i.byteLength;case Pi:return s*t*2/i.components*i.byteLength;case ic:return s*t*2/i.components*i.byteLength;case lh:return s*t*3/i.components*i.byteLength;case je:return s*t*4/i.components*i.byteLength;case sc:return s*t*4/i.components*i.byteLength;case br:case wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case go:case xo:return Math.max(s,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(s,8)*Math.max(t,8)/2;case vo:case yo:case So:case bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mo:case Ur:case wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Po:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zo:case Vo:case ko:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Go:case Ho:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fr:case Wo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ax(s){switch(s){case rn:case sh:return{byteLength:1,components:1};case Ws:case rh:case Bn:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case An:case tc:case on:return{byteLength:4,components:1};case ah:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}class ox{static contain(t,e){return ix(t,e)}static cover(t,e){return sx(t,e)}static fill(t){return rx(t)}static getByteLength(t,e,n,i){return Hl(t,e,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rp(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function cx(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mx=`#ifdef USE_AOMAP
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
#endif`,gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_x=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
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
#endif`,bx=`#ifdef USE_BUMPMAP
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
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
}`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,ev=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ov=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cv=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vv=`#if defined( USE_POINTS_UV )
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
#endif`,yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tv=`#ifdef USE_MORPHTARGETS
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
#endif`,Av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lv=`#ifdef USE_NORMALMAP
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
#endif`,Dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Zv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qv=`#ifdef USE_SKINNING
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
#endif`,jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hy=`uniform sampler2D t2D;
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
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
}`,gy=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_y=`#define DISTANCE
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
}`,xy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
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
}`,Sy=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ty=`#define LAMBERT
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
}`,Ay=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ey=`#define MATCAP
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
}`,Cy=`#define MATCAP
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
}`,Ry=`#define NORMAL
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
}`,Iy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Py=`#define PHONG
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
}`,Ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Dy=`#define STANDARD
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
}`,Ny=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Uy=`#define TOON
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
}`,Fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Oy=`uniform float size;
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
}`,By=`uniform vec3 diffuse;
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
}`,zy=`#include <common>
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
}`,Vy=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,ky=`uniform float rotation;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:lx,alphahash_pars_fragment:hx,alphamap_fragment:ux,alphamap_pars_fragment:dx,alphatest_fragment:fx,alphatest_pars_fragment:px,aomap_fragment:mx,aomap_pars_fragment:gx,batching_pars_vertex:_x,batching_vertex:xx,begin_vertex:vx,beginnormal_vertex:yx,bsdfs:Mx,iridescence_fragment:Sx,bumpmap_pars_fragment:bx,clipping_planes_fragment:wx,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Ax,clipping_planes_vertex:Ex,color_fragment:Cx,color_pars_fragment:Rx,color_pars_vertex:Ix,color_vertex:Px,common:Lx,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Nx,displacementmap_pars_vertex:Ux,displacementmap_vertex:Fx,emissivemap_fragment:Ox,emissivemap_pars_fragment:Bx,colorspace_fragment:zx,colorspace_pars_fragment:Vx,envmap_fragment:kx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Hx,envmap_pars_vertex:Wx,envmap_physical_pars_fragment:ev,envmap_vertex:Xx,fog_vertex:qx,fog_pars_vertex:Yx,fog_fragment:Zx,fog_pars_fragment:Jx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:Kx,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:jx,lights_pars_begin:tv,lights_toon_fragment:nv,lights_toon_pars_fragment:iv,lights_phong_fragment:sv,lights_phong_pars_fragment:rv,lights_physical_fragment:av,lights_physical_pars_fragment:ov,lights_fragment_begin:cv,lights_fragment_maps:lv,lights_fragment_end:hv,lightprobes_pars_fragment:uv,logdepthbuf_fragment:dv,logdepthbuf_pars_fragment:fv,logdepthbuf_pars_vertex:pv,logdepthbuf_vertex:mv,map_fragment:gv,map_pars_fragment:_v,map_particle_fragment:xv,map_particle_pars_fragment:vv,metalnessmap_fragment:yv,metalnessmap_pars_fragment:Mv,morphinstance_vertex:Sv,morphcolor_vertex:bv,morphnormal_vertex:wv,morphtarget_pars_vertex:Tv,morphtarget_vertex:Av,normal_fragment_begin:Ev,normal_fragment_maps:Cv,normal_pars_fragment:Rv,normal_pars_vertex:Iv,normal_vertex:Pv,normalmap_pars_fragment:Lv,clearcoat_normal_fragment_begin:Dv,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Fv,opaque_fragment:Ov,packing:Bv,premultiplied_alpha_fragment:zv,project_vertex:Vv,dithering_fragment:kv,dithering_pars_fragment:Gv,roughnessmap_fragment:Hv,roughnessmap_pars_fragment:Wv,shadowmap_pars_fragment:Xv,shadowmap_pars_vertex:qv,shadowmap_vertex:Yv,shadowmask_pars_fragment:Zv,skinbase_vertex:Jv,skinning_pars_vertex:$v,skinning_vertex:Kv,skinnormal_vertex:Qv,specularmap_fragment:jv,specularmap_pars_fragment:ty,tonemapping_fragment:ey,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:sy,uv_pars_fragment:ry,uv_pars_vertex:ay,uv_vertex:oy,worldpos_vertex:cy,background_vert:ly,background_frag:hy,backgroundCube_vert:uy,backgroundCube_frag:dy,cube_vert:fy,cube_frag:py,depth_vert:my,depth_frag:gy,distance_vert:_y,distance_frag:xy,equirect_vert:vy,equirect_frag:yy,linedashed_vert:My,linedashed_frag:Sy,meshbasic_vert:by,meshbasic_frag:wy,meshlambert_vert:Ty,meshlambert_frag:Ay,meshmatcap_vert:Ey,meshmatcap_frag:Cy,meshnormal_vert:Ry,meshnormal_frag:Iy,meshphong_vert:Py,meshphong_frag:Ly,meshphysical_vert:Dy,meshphysical_frag:Ny,meshtoon_vert:Uy,meshtoon_frag:Fy,points_vert:Oy,points_frag:By,shadow_vert:zy,shadow_frag:Vy,sprite_vert:ky,sprite_frag:Gy},Ft={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Nn={basic:{uniforms:sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:sn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:sn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:sn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:sn([Ft.points,Ft.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:sn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:sn([Ft.common,Ft.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:sn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:sn([Ft.sprite,Ft.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:sn([Ft.common,Ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:sn([Ft.lights,Ft.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Nn.physical={uniforms:sn([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Qa={r:0,b:0,g:0},Hy=new te,Ip=new se;Ip.set(-1,0,0,0,1,0,0,0,1);function Wy(s,t,e,n,i,r){const a=new Rt(0);let o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const v=x.backgroundBlurriness>0;S=t.get(S,v)}return S}function p(x){let S=!1;const v=f(x);v===null?g(a,o):v&&v.isColor&&(g(v,1),S=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(x,S){const v=f(S);v&&(v.isCubeTexture||v.mapping===Ks)?(l===void 0&&(l=new Te(new cn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:$s(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ip),l.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Te(new Hn(2,2),new En({name:"BackgroundMaterial",uniforms:$s(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,S){x.getRGB(Qa,Kf(s)),e.buffers.color.setClear(Qa.r,Qa.g,Qa.b,S,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Xy(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(P,U,F,N,V){let K=!1;const O=d(P,N,F,U);r!==O&&(r=O,l(r.object)),K=f(P,N,F,V),K&&p(P,N,F,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(P,U,F,N),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,U,F,N){const V=N.wireframe===!0;let K=n[U.id];K===void 0&&(K={},n[U.id]=K);const O=P.isInstancedMesh===!0?P.id:0;let $=K[O];$===void 0&&($={},K[O]=$);let it=$[F.id];it===void 0&&(it={},$[F.id]=it);let lt=it[V];return lt===void 0&&(lt=u(c()),it[V]=lt),lt}function u(P){const U=[],F=[],N=[];for(let V=0;V<e;V++)U[V]=0,F[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,U,F,N){const V=r.attributes,K=U.attributes;let O=0;const $=F.getAttributes();for(const it in $)if($[it].location>=0){const ut=V[it];let Bt=K[it];if(Bt===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(Bt=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(Bt=P.instanceColor)),ut===void 0||ut.attribute!==Bt||Bt&&ut.data!==Bt.data)return!0;O++}return r.attributesNum!==O||r.index!==N}function p(P,U,F,N){const V={},K=U.attributes;let O=0;const $=F.getAttributes();for(const it in $)if($[it].location>=0){let ut=K[it];ut===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor));const Bt={};Bt.attribute=ut,ut&&ut.data&&(Bt.data=ut.data),V[it]=Bt,O++}r.attributes=V,r.attributesNum=O,r.index=N}function _(){const P=r.newAttributes;for(let U=0,F=P.length;U<F;U++)P[U]=0}function g(P){m(P,0)}function m(P,U){const F=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;F[P]=1,N[P]===0&&(s.enableVertexAttribArray(P),N[P]=1),V[P]!==U&&(s.vertexAttribDivisor(P,U),V[P]=U)}function x(){const P=r.newAttributes,U=r.enabledAttributes;for(let F=0,N=U.length;F<N;F++)U[F]!==P[F]&&(s.disableVertexAttribArray(F),U[F]=0)}function S(P,U,F,N,V,K,O){O===!0?s.vertexAttribIPointer(P,U,F,V,K):s.vertexAttribPointer(P,U,F,N,V,K)}function v(P,U,F,N){_();const V=N.attributes,K=F.getAttributes(),O=U.defaultAttributeValues;for(const $ in K){const it=K[$];if(it.location>=0){let lt=V[$];if(lt===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),lt!==void 0){const ut=lt.normalized,Bt=lt.itemSize,Pt=t.get(lt);if(Pt===void 0)continue;const Mt=Pt.buffer,ct=Pt.type,dt=Pt.bytesPerElement,D=ct===s.INT||ct===s.UNSIGNED_INT||lt.gpuType===tc;if(lt.isInterleavedBufferAttribute){const Z=lt.data,st=Z.stride,Ct=lt.offset;if(Z.isInstancedInterleavedBuffer){for(let bt=0;bt<it.locationSize;bt++)m(it.location+bt,Z.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let bt=0;bt<it.locationSize;bt++)g(it.location+bt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let bt=0;bt<it.locationSize;bt++)S(it.location+bt,Bt/it.locationSize,ct,ut,st*dt,(Ct+Bt/it.locationSize*bt)*dt,D)}else{if(lt.isInstancedBufferAttribute){for(let Z=0;Z<it.locationSize;Z++)m(it.location+Z,lt.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Z=0;Z<it.locationSize;Z++)g(it.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Z=0;Z<it.locationSize;Z++)S(it.location+Z,Bt/it.locationSize,ct,ut,Bt*dt,Bt/it.locationSize*Z*dt,D)}}else if(O!==void 0){const ut=O[$];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(it.location,ut);break;case 3:s.vertexAttrib3fv(it.location,ut);break;case 4:s.vertexAttrib4fv(it.location,ut);break;default:s.vertexAttrib1fv(it.location,ut)}}}}x()}function T(){w();for(const P in n){const U=n[P];for(const F in U){const N=U[F];for(const V in N){const K=N[V];for(const O in K)h(K[O].object),delete K[O];delete N[V]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const U=n[P.id];for(const F in U){const N=U[F];for(const V in N){const K=N[V];for(const O in K)h(K[O].object),delete K[O];delete N[V]}}delete n[P.id]}function R(P){for(const U in n){const F=n[U];for(const N in F){const V=F[N];if(V[P.id]===void 0)continue;const K=V[P.id];for(const O in K)h(K[O].object),delete K[O];delete V[P.id]}}}function M(P){for(const U in n){const F=n[U],N=P.isInstancedMesh===!0?P.id:0,V=F[N];if(V!==void 0){for(const K in V){const O=V[K];for(const $ in O)h(O[$].object),delete O[$];delete V[K]}delete F[N],Object.keys(F).length===0&&delete n[U]}}}function w(){C(),a=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function qy(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Yy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==je&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const M=R===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==rn&&R!==on&&!M&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Nt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:b}}function Zy(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new oi,o=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{const x=r?0:n,S=x*4;let v=m.clippingState||null;c.value=v,v=h(p,u,S,f);for(let T=0;T!==S;++T)v[T]=e[T];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=f;S!==_;++S,v+=4)a.copy(d[S]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const zs=4,Jy=6,$y=20,Ky=256,pr=new ra,hd=new Rt;let xl=null,vl=0,yl=0,Ml=!1;const Qy=new I,$i=new I;class Jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Qy}=r;xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xl,vl,yl),this._renderer.xr.enabled=Ml,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:Bn,format:je,colorSpace:zr,depthBuffer:!1},i=ud(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jy(r)),this._blurMaterial=eM(r,t,e),this._ggxMaterial=tM(r,t,e)}return i}_compileMaterial(t){const e=new Te(new ee,t);this._renderer.compile(e,pr)}_sceneToCubeUV(t,e,n,i,r){const c=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(hd),d.toneMapping=On,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new cn,new kn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(hd),m=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const T=this._cubeSize;Ns(i,v*T,S>2?T:0,T,T),d.setRenderTarget(i),m&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===$n||t.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ns(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,pr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-zs?n-p+zs:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=p-e,Ns(r,g,m,3*_,2*_),i.setRenderTarget(r),i.render(o,pr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Ns(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(o,pr)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-zs?i-this._lodMax+zs:0),u=4*(this._cubeSize-h);Ns(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,pr)}}function jy(s){const t=[],e=[];let n=s;const i=s-zs+1+Jy;for(let r=0;r<i;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){const x=m%3*2/3-1,S=m>2?0:-1,v=[x,S,0,x+2/3,S,0,x+2/3,S+1,0,x,S,0,x+2/3,S+1,0,x,S+1,0];p.set(v,f*u*m);for(let T=0;T<u;T++){const b=h[T*2]*2-1,R=h[T*2+1]*2-1;m===0?$i.set(1,R,b):m===1?$i.set(-b,1,-R):m===2?$i.set(-b,R,1):m===3?$i.set(-1,R,-b):m===4?$i.set(-b,-1,R):$i.set(b,R,-1),$i.toArray(_,(m*u+T)*f)}}const g=new ee;g.setAttribute("position",new xe(p,f)),g.setAttribute("outputDirection",new xe(_,f)),e.push(new Te(g,null)),n>zs&&n--}return{lodMeshes:e,sizeLods:t}}function ud(s,t,e){const n=new pn(s,t,e);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function tM(s,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ky,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function eM(s,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:$y,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function dd(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function fd(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class zh extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new cn(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Jn});r.uniforms.tEquirect.value=e;const a=new Te(i,r),o=e.minFilter;return e.minFilter===Un&&(e.minFilter=be),new Mp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function nM(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===yr||f===Mr)if(t.has(u)){const p=t.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const _=new zh(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,p=f===yr||f===Mr,_=f===$n||f===Ii;if(p||_){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Jo(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return p&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new Jo(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===yr?u.mapping=$n:f===Mr&&(u.mapping=Ii),u}function c(u){let f=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function l(u){const f=u.target;f.removeEventListener("dispose",l);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function iM(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ui("WebGLRenderer: "+n+" extension not supported."),i}}}function sM(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let S=0,v=x.length;S<v;S+=3){const T=x[S+0],b=x[S+1],R=x[S+2];u.push(T,b,b,R,R,T)}}else{const x=p.array;_=p.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const T=S+0,b=S+1,R=S+2;u.push(T,b,b,R,R,T)}}const g=new(p.count>=65535?ph:fh)(u,1);g.version=_;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function rM(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function aM(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:$t("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function oM(s,t,e){const n=new WeakMap,i=new _e;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let v=o.attributes.position.count*S,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*T*4*d),R=new lc(b,v,T,d);R.type=on,R.needsUpdate=!0;const M=S*4;for(let C=0;C<d;C++){const P=g[C],U=m[C],F=x[C],N=v*T*4*C;for(let V=0;V<P.count;V++){const K=V*M;f===!0&&(i.fromBufferAttribute(P,V),b[N+K+0]=i.x,b[N+K+1]=i.y,b[N+K+2]=i.z,b[N+K+3]=0),p===!0&&(i.fromBufferAttribute(U,V),b[N+K+4]=i.x,b[N+K+5]=i.y,b[N+K+6]=i.z,b[N+K+7]=0),_===!0&&(i.fromBufferAttribute(F,V),b[N+K+8]=i.x,b[N+K+9]=i.y,b[N+K+10]=i.z,b[N+K+11]=F.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new vt(v,T)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function cM(s,t,e,n,i){let r=new WeakMap;function a(l){const h=i.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const lM={[Kl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[Qo]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[nh]:"NEUTRAL_TONE_MAPPING",[th]:"CUSTOM_TONE_MAPPING"};function hM(s,t,e,n,i,r){const a=new pn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new ee;l.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ut([0,2,0,0,2,0],2));const h=new Ah({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Te(l,h),u=new ra(-1,1,1,-1,0,1);let f=null,p=null,_=!1,g,m=null,x=[],S=!1;this.setSize=function(v,T){a.setSize(v,T),o!==null&&o.setSize(v,T),c!==null&&c.setSize(v,T);for(let b=0;b<x.length;b++){const R=x[b];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){x=v,S=x.length>0&&x[0].isRenderPass===!0;const T=a.width,b=a.height;x.length>0&&o===null&&(o=new pn(T,b,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new pn(T,b,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){const M=x[R];M.setSize&&M.setSize(T,b)}},this.begin=function(v,T){if(_||v.toneMapping===On&&x.length===0)return!1;if(m=T,T!==null){const b=T.width,R=T.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return S===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=On,!0},this.hasRenderPass=function(){return S},this.end=function(v,T){v.toneMapping=g,_=!0;let b=a,R=o;for(let M=0;M<x.length;M++){const w=x[M];w.enabled!==!1&&(w.render(v,R,b,T),w.needsSwap!==!1&&(b=R,R=R===o?c:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},le.getTransfer(f)===ge&&(h.defines.SRGB_TRANSFER="");const M=lM[p];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(m),v.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Pp=new Re,Wl=new Zs(1,1),Lp=new lc,Dp=new hc,Np=new jr,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),xd=new Float32Array(4);function er(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=pd[i];if(r===void 0&&(r=new Float32Array(i),pd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Uc(s,t){let e=md[t];e===void 0&&(e=new Int32Array(t),md[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function uM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function dM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function fM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function pM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function mM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;xd.set(n),s.uniformMatrix2fv(this.addr,!1,xd),ke(e,n)}}function gM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;_d.set(n),s.uniformMatrix3fv(this.addr,!1,_d),ke(e,n)}}function _M(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;gd.set(n),s.uniformMatrix4fv(this.addr,!1,gd),ke(e,n)}}function xM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function vM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function yM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function MM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function SM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function wM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function TM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function AM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wl.compareFunction=e.isReversedDepthBuffer()?oc:ac,r=Wl):r=Pp,e.setTexture2D(t||r,i)}function EM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Dp,i)}function CM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Np,i)}function RM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lp,i)}function IM(s){switch(s){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return xM;case 35667:case 35671:return vM;case 35668:case 35672:return yM;case 35669:case 35673:return MM;case 5125:return SM;case 36294:return bM;case 36295:return wM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return RM}}function PM(s,t){s.uniform1fv(this.addr,t)}function LM(s,t){const e=er(t,this.size,2);s.uniform2fv(this.addr,e)}function DM(s,t){const e=er(t,this.size,3);s.uniform3fv(this.addr,e)}function NM(s,t){const e=er(t,this.size,4);s.uniform4fv(this.addr,e)}function UM(s,t){const e=er(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function FM(s,t){const e=er(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function OM(s,t){const e=er(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function BM(s,t){s.uniform1iv(this.addr,t)}function zM(s,t){s.uniform2iv(this.addr,t)}function VM(s,t){s.uniform3iv(this.addr,t)}function kM(s,t){s.uniform4iv(this.addr,t)}function GM(s,t){s.uniform1uiv(this.addr,t)}function HM(s,t){s.uniform2uiv(this.addr,t)}function WM(s,t){s.uniform3uiv(this.addr,t)}function XM(s,t){s.uniform4uiv(this.addr,t)}function qM(s,t,e){const n=this.cache,i=t.length,r=Uc(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Wl:a=Pp;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function YM(s,t,e){const n=this.cache,i=t.length,r=Uc(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Dp,r[a])}function ZM(s,t,e){const n=this.cache,i=t.length,r=Uc(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Np,r[a])}function JM(s,t,e){const n=this.cache,i=t.length,r=Uc(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Lp,r[a])}function $M(s){switch(s){case 5126:return PM;case 35664:return LM;case 35665:return DM;case 35666:return NM;case 35674:return UM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return VM;case 35669:case 35673:return kM;case 5125:return GM;case 36294:return HM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}class KM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=IM(e.type)}}class QM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$M(e.type)}}class jM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function vd(s,t){s.seq.push(t),s.map[t.id]=t}function tS(s,t,e){const n=s.name,i=n.length;for(Sl.lastIndex=0;;){const r=Sl.exec(n),a=Sl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){vd(e,l===void 0?new KM(o,s,t):new QM(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new jM(o),vd(e,d)),e=d}}}class ro{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);tS(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function yd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const eS=37297;let nS=0;function iS(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Md=new se;function sS(s){le._getMatrix(Md,le.workingColorSpace,s);const t=`mat3( ${Md.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Vr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Sd(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+iS(s.getShaderSource(t),o)}else return r}function rS(s,t){const e=sS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const aS={[Kl]:"Linear",[Ql]:"Reinhard",[jl]:"Cineon",[Qo]:"ACESFilmic",[eh]:"AgX",[nh]:"Neutral",[th]:"Custom"};function oS(s,t){const e=aS[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ja=new I;function cS(){le.getLuminanceCoefficients(ja);const s=ja.x.toFixed(4),t=ja.y.toFixed(4),e=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function hS(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uS(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function xr(s){return s!==""}function bd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(s){return s.replace(dS,pS)}const fS=new Map;function pS(s,t){let e=ae[t];if(e===void 0){const n=fS.get(t);if(n!==void 0)e=ae[n],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xl(e)}const mS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(s){return s.replace(mS,gS)}function gS(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ad(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const _S={[Vs]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function xS(s){return _S[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vS={[$n]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE_UV"};function yS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":vS[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const MS={[Ii]:"ENVMAP_MODE_REFRACTION"};function SS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":MS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bS={[$r]:"ENVMAP_BLENDING_MULTIPLY",[hf]:"ENVMAP_BLENDING_MIX",[uf]:"ENVMAP_BLENDING_ADD"};function wS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":bS[s.combine]||"ENVMAP_BLENDING_NONE"}function TS(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function AS(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=xS(e),l=yS(e),h=SS(e),d=wS(e),u=TS(e),f=lS(e),p=hS(r),_=i.createProgram();let g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xr).join(`
`),m.length>0&&(m+=`
`)):(g=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),m=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?ae.tonemapping_pars_fragment:"",e.toneMapping!==On?oS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,rS("linearToOutputTexel",e.outputColorSpace),cS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),a=Xl(a),a=bd(a,e),a=wd(a,e),o=Xl(o),o=bd(o,e),o=wd(o,e),a=Td(a),o=Td(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=x+g+a,v=x+m+o,T=yd(i,i.VERTEX_SHADER,S),b=yd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(P){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(T)||"",N=i.getShaderInfoLog(b)||"",V=U.trim(),K=F.trim(),O=N.trim();let $=!0,it=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,b);else{const lt=Sd(i,T,"vertex"),ut=Sd(i,b,"fragment");$t("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+lt+`
`+ut)}else V!==""?Nt("WebGLProgram: Program Info Log:",V):(K===""||O==="")&&(it=!1);it&&(P.diagnostics={runnable:$,programLog:V,vertexShader:{log:K,prefix:g},fragmentShader:{log:O,prefix:m}})}i.deleteShader(T),i.deleteShader(b),M=new ro(i,_),w=uS(i,_)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,eS)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let ES=0;class CS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new RS(t),e.set(t,n)),n}}class RS{constructor(t){this.id=ES++,this.code=t,this.usedTimes=0}}function IS(s){return s===Pi||s===Ur||s===Fr}function PS(s,t,e,n,i,r){const a=new uc,o=new CS,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,w,C,P,U,F){const N=P.fog,V=U.geometry,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=t.get(M.envMap||K,O),it=$&&$.mapping===Ks?$.image.height:null,lt=f[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&Nt("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Bt=ut!==void 0?ut.length:0;let Pt=0;V.morphAttributes.position!==void 0&&(Pt=1),V.morphAttributes.normal!==void 0&&(Pt=2),V.morphAttributes.color!==void 0&&(Pt=3);let Mt,ct,dt,D;if(lt){const Xt=Nn[lt];Mt=Xt.vertexShader,ct=Xt.fragmentShader}else{Mt=M.vertexShader,ct=M.fragmentShader;const Xt=o.getVertexShaderStage(M),Qt=o.getFragmentShaderStage(M);o.update(M,Xt,Qt),dt=Xt.id,D=Qt.id}const Z=s.getRenderTarget(),st=s.state.buffers.depth.getReversed(),Ct=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,Dt=!!M.map,Et=!!M.matcap,B=!!$,J=!!M.aoMap,X=!!M.lightMap,nt=!!M.bumpMap&&M.wireframe===!1,W=!!M.normalMap,ft=!!M.displacementMap,gt=!!M.emissiveMap,ht=!!M.metalnessMap,_t=!!M.roughnessMap,L=M.anisotropy>0,Vt=M.clearcoat>0,wt=M.dispersion>0,E=M.retroreflectivity>0,y=M.iridescence>0,z=M.sheen>0,Y=M.transmission>0,ot=L&&!!M.anisotropyMap,St=Vt&&!!M.clearcoatMap,Tt=Vt&&!!M.clearcoatNormalMap,rt=Vt&&!!M.clearcoatRoughnessMap,pt=y&&!!M.iridescenceMap,At=y&&!!M.iridescenceThicknessMap,Wt=z&&!!M.sheenColorMap,Lt=z&&!!M.sheenRoughnessMap,It=!!M.specularMap,Ht=!!M.specularColorMap,Kt=!!M.specularIntensityMap,ie=Y&&!!M.transmissionMap,k=Y&&!!M.thicknessMap,xt=!!M.gradientMap,G=!!M.alphaMap,j=M.alphaTest>0,Q=!!M.alphaHash,q=!!M.extensions;let mt=On;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(mt=s.toneMapping);const yt={shaderID:lt,shaderType:M.type,shaderName:M.name,vertexShader:Mt,fragmentShader:ct,defines:M.defines,customVertexShaderID:dt,customFragmentShaderID:D,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:bt,batchingColor:bt&&U._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&U.instanceColor!==null,instancingMorph:Ct&&U.morphTexture!==null,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Dt,matcap:Et,envMap:B,envMapMode:B&&$.mapping,envMapCubeUVHeight:it,aoMap:J,lightMap:X,bumpMap:nt,normalMap:W,displacementMap:ft,emissiveMap:gt,normalMapObjectSpace:W&&M.normalMapType===xf,normalMapTangentSpace:W&&M.normalMapType===fi,packedNormalMap:W&&M.normalMapType===fi&&IS(M.normalMap.format),metalnessMap:ht,roughnessMap:_t,anisotropy:L,anisotropyMap:ot,clearcoat:Vt,clearcoatMap:St,clearcoatNormalMap:Tt,clearcoatRoughnessMap:rt,dispersion:wt,retroreflection:E,iridescence:y,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:z,sheenColorMap:Wt,sheenRoughnessMap:Lt,specularMap:It,specularColorMap:Ht,specularIntensityMap:Kt,transmission:Y,transmissionMap:ie,thicknessMap:k,gradientMap:xt,opaque:M.transparent===!1&&M.blending===ks&&M.alphaToCoverage===!1,alphaMap:G,alphaTest:j,alphaHash:Q,combine:M.combine,mapUv:Dt&&p(M.map.channel),aoMapUv:J&&p(M.aoMap.channel),lightMapUv:X&&p(M.lightMap.channel),bumpMapUv:nt&&p(M.bumpMap.channel),normalMapUv:W&&p(M.normalMap.channel),displacementMapUv:ft&&p(M.displacementMap.channel),emissiveMapUv:gt&&p(M.emissiveMap.channel),metalnessMapUv:ht&&p(M.metalnessMap.channel),roughnessMapUv:_t&&p(M.roughnessMap.channel),anisotropyMapUv:ot&&p(M.anisotropyMap.channel),clearcoatMapUv:St&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:At&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&p(M.sheenRoughnessMap.channel),specularMapUv:It&&p(M.specularMap.channel),specularColorMapUv:Ht&&p(M.specularColorMap.channel),specularIntensityMapUv:Kt&&p(M.specularIntensityMap.channel),transmissionMapUv:ie&&p(M.transmissionMap.channel),thicknessMapUv:k&&p(M.thicknessMap.channel),alphaMapUv:G&&p(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(W||L),vertexNormals:!!V.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Dt||G),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||V.attributes.normal===void 0&&W===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:st,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Pt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:mt,decodeVideoTexture:Dt&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:gt&&M.emissiveMap.isVideoTexture===!0&&le.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ze,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:q&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(q&&M.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function g(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)w.push(C),w.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(m(w,M),x(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function S(M){const w=f[M.type];let C;if(w){const P=Nn[w];C=Qf.clone(P.uniforms)}else C=M.uniforms;return C}function v(M,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new AS(s,w,M,i),l.push(C),h.set(w,C)),C}function T(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function b(M){o.remove(M)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:R}}function LS(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function DS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Ed(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cd(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,_,g,m){let x=s[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=p,x.materialVariant=a(u),x.groupOrder=_,x.renderOrder=u.renderOrder,x.z=g,x.group=m),t++,x}function c(u,f,p,_,g,m,x){x.reversedDepth===!0&&(g=-g);const S=o(u,f,p,_,g,m);p.transmission>0?n.push(S):p.transparent===!0?i.push(S):e.push(S)}function l(u,f,p,_,g,m){const x=o(u,f,p,_,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):e.unshift(x)}function h(u,f){e.length>1&&e.sort(u||DS),n.length>1&&n.sort(f||Ed),i.length>1&&i.sort(f||Ed)}function d(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function NS(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Cd,s.set(n,[a])):i>=r.length?(a=new Cd,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function US(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Rt};break;case"SpotLight":e={position:new I,direction:new I,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function FS(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let OS=0;function BS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function zS(s){const t=new US,e=FS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new te,a=new te;function o(l){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,x=0,S=0,v=0,T=0,b=0,R=0,M=0,w=0,C=0;l.sort(BS);for(let U=0,F=l.length;U<F;U++){const N=l[U],V=N.color,K=N.intensity,O=N.distance;let $=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Pi?$=N.shadow.map.texture:$=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=V.r*K,d+=V.g*K,u+=V.b*K;else if(N.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(N.sh.coefficients[it],K);C++}else if(N.isSunLight){const it=t.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const lt=N.shadow,ut=e.get(N);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize.copy(lt.mapSize).multiply(lt.getFrameExtents()),n.sunShadow[p]=ut,n.sunShadowMap[p]=$;const Bt=lt.getViewportCount();for(let Pt=0;Pt<Bt;Pt++)n.sunShadowMatrix[_+Pt]=lt.getMatrix(Pt),n.sunShadowCascade[_+Pt]=lt._cascadeData[Pt];_+=Bt,p++}n.sun[f]=it,f++}else if(N.isDirectionalLight){const it=t.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const lt=N.shadow,ut=e.get(N);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,n.directionalShadow[g]=ut,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=N.shadow.matrix,T++}n.directional[g]=it,g++}else if(N.isSpotLight){const it=t.get(N);it.position.setFromMatrixPosition(N.matrixWorld),it.color.copy(V).multiplyScalar(K),it.distance=O,it.coneCos=Math.cos(N.angle),it.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),it.decay=N.decay,n.spot[x]=it;const lt=N.shadow;if(N.map&&(n.spotLightMap[M]=N.map,M++,lt.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[x]=lt.matrix,N.castShadow){const ut=e.get(N);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,n.spotShadow[x]=ut,n.spotShadowMap[x]=$,R++}x++}else if(N.isRectAreaLight){const it=t.get(N);it.color.copy(V).multiplyScalar(K),it.halfWidth.set(N.width*.5,0,0),it.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=it,S++}else if(N.isPointLight){const it=t.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity),it.distance=N.distance,it.decay=N.decay,N.castShadow){const lt=N.shadow,ut=e.get(N);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,ut.shadowCameraNear=lt.camera.near,ut.shadowCameraFar=lt.camera.far,n.pointShadow[m]=ut,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=N.shadow.matrix,b++}n.point[m]=it,m++}else if(N.isHemisphereLight){const it=t.get(N);it.skyColor.copy(N.color).multiplyScalar(K),it.groundColor.copy(N.groundColor).multiplyScalar(K),n.hemi[v]=it,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==S||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==T||P.numPointShadows!==b||P.numSpotShadows!==R||P.numSpotMaps!==M||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=x,n.rectArea.length=S,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.sunLength=f,P.directionalLength=g,P.pointLength=m,P.spotLength=x,P.rectAreaLength=S,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=T,P.numPointShadows=b,P.numSpotShadows=R,P.numSpotMaps=M,P.numLightProbes=C,n.version=OS++)}function c(l,h){let d=0,u=0,f=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let x=0,S=l.length;x<S;x++){const v=l[x];if(v.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),d++}else if(v.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),u++}else if(v.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Rd(s){const t=new zS(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function VS(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Rd(s),t.set(i,[o])):r>=a.length?(o=new Rd(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const kS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HS=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],WS=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Id=new te,mr=new I,bl=new I;function XS(s,t,e){let n=new rs;const i=new vt,r=new vt,a=new _e,o=new Rc,c=new Eh,l={},h=e.maxTextureSize,d={[Ri]:qe,[qe]:Ri,[ze]:ze},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:kS,fragmentShader:GS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new ee;p.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Te(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let m=this.type;this.render=function(b,R,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Wd&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);const w=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=m!==this.type;F&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=b.length;N<V;N++){const K=b[N],O=K.shadow;if(O===void 0){Nt("WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const $=O.getFrameExtents();i.multiply($),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,O.mapSize.y=r.y));const it=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=it,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Us){if(K.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new pn(i.x,i.y,{format:Pi,type:Bn,minFilter:be,magFilter:be,generateMipmaps:!1}),O.map.texture.name=K.name+".shadowMap",O.map.depthTexture=new Zs(i.x,i.y,on),O.map.depthTexture.name=K.name+".shadowMapDepth",O.map.depthTexture.format=Kn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Le,O.map.depthTexture.magFilter=Le}else K.isPointLight?(O.map=new zh(i.x),O.map.depthTexture=new zf(i.x,An)):(O.map=new pn(i.x,i.y),O.map.depthTexture=new Zs(i.x,i.y,An)),O.map.depthTexture.name=K.name+".shadowMap",O.map.depthTexture.format=Kn,this.type===Vs?(O.map.depthTexture.compareFunction=it?oc:ac,O.map.depthTexture.minFilter=be,O.map.depthTexture.magFilter=be):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Le,O.map.depthTexture.magFilter=Le);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);const lt=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();K.isPointLight!==!0&&O.updateMatrices(K,M);for(let ut=0;ut<lt;ut++){const Bt=O.getCamera(ut);if(K.isPointLight){const Pt=O.camera,Mt=O.matrix,ct=K.distance||Pt.far;ct!==Pt.far&&(Pt.far=ct,Pt.updateProjectionMatrix()),mr.setFromMatrixPosition(K.matrixWorld),Pt.position.copy(mr),bl.copy(Pt.position),bl.add(HS[ut]),Pt.up.copy(WS[ut]),Pt.lookAt(bl),Pt.updateMatrixWorld(),Mt.makeTranslation(-mr.x,-mr.y,-mr.z),Id.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Id,Pt.coordinateSystem,Pt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,ut),s.clear();else{ut===0&&(s.setRenderTarget(O.map),s.clear());const Pt=O.getViewport(ut);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),U.viewport(a)}n=O.getFrustum(ut),v(R,M,Bt,K,this.type)}O.isPointLightShadow!==!0&&this.type===Us&&x(O,M),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,C,P)};function x(b,R){const M=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new pn(i.x,i.y,{format:Pi,type:Bn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(R,null,M,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(R,null,M,f,_,null)}function S(b,R,M,w){let C=null;const P=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)C=P;else if(C=M.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=C.uuid,F=R.uuid;let N=l[U];N===void 0&&(N={},l[U]=N);let V=N[F];V===void 0&&(V=C.clone(),N[F]=V,R.addEventListener("dispose",T)),C=V}if(C.visible=R.visible,C.wireframe=R.wireframe,w===Us?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=s.properties.get(C);U.light=M}return C}function v(b,R,M,w,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Us)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const F=t.update(b),N=b.material;if(Array.isArray(N)){const V=F.groups;for(let K=0,O=V.length;K<O;K++){const $=V[K],it=N[$.materialIndex];if(it&&it.visible){const lt=S(b,it,w,C);b.onBeforeShadow(s,b,R,M,F,lt,$),s.renderBufferDirect(M,null,F,lt,b,$),b.onAfterShadow(s,b,R,M,F,lt,$)}}}else if(N.visible){const V=S(b,N,w,C);b.onBeforeShadow(s,b,R,M,F,V,null),s.renderBufferDirect(M,null,F,V,b,null),b.onAfterShadow(s,b,R,M,F,V,null)}}const U=b.children;for(let F=0,N=U.length;F<N;F++)v(U[F],R,M,w,C)}function T(b){b.target.removeEventListener("dispose",T);for(const M in l){const w=l[M],C=b.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function qS(s,t){function e(){let k=!1;const xt=new _e;let G=null;const j=new _e(0,0,0,0);return{setMask:function(Q){G!==Q&&!k&&(s.colorMask(Q,Q,Q,Q),G=Q)},setLocked:function(Q){k=Q},setClear:function(Q,q,mt,yt,Xt){Xt===!0&&(Q*=yt,q*=yt,mt*=yt),xt.set(Q,q,mt,yt),j.equals(xt)===!1&&(s.clearColor(Q,q,mt,yt),j.copy(xt))},reset:function(){k=!1,G=null,j.set(-1,0,0,0)}}}function n(){let k=!1,xt=!1,G=null,j=null,Q=null;return{setReversed:function(q){if(xt!==q){const mt=t.get("EXT_clip_control");q?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),xt=q;const yt=Q;Q=null,this.setClear(yt)}},getReversed:function(){return xt},setTest:function(q){q?Z(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(q){G!==q&&!k&&(s.depthMask(q),G=q)},setFunc:function(q){if(xt&&(q=r0[q]),j!==q){switch(q){case oo:s.depthFunc(s.NEVER);break;case co:s.depthFunc(s.ALWAYS);break;case lo:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case ho:s.depthFunc(s.EQUAL);break;case uo:s.depthFunc(s.GEQUAL);break;case fo:s.depthFunc(s.GREATER);break;case po:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=q}},setLocked:function(q){k=q},setClear:function(q){Q!==q&&(Q=q,xt&&(q=1-q),s.clearDepth(q))},reset:function(){k=!1,G=null,j=null,Q=null,xt=!1}}}function i(){let k=!1,xt=null,G=null,j=null,Q=null,q=null,mt=null,yt=null,Xt=null;return{setTest:function(Qt){k||(Qt?Z(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(Qt){xt!==Qt&&!k&&(s.stencilMask(Qt),xt=Qt)},setFunc:function(Qt,qt,jt){(G!==Qt||j!==qt||Q!==jt)&&(s.stencilFunc(Qt,qt,jt),G=Qt,j=qt,Q=jt)},setOp:function(Qt,qt,jt){(q!==Qt||mt!==qt||yt!==jt)&&(s.stencilOp(Qt,qt,jt),q=Qt,mt=qt,yt=jt)},setLocked:function(Qt){k=Qt},setClear:function(Qt){Xt!==Qt&&(s.clearStencil(Qt),Xt=Qt)},reset:function(){k=!1,xt=null,G=null,j=null,Q=null,q=null,mt=null,yt=null,Xt=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,x=null,S=null,v=null,T=null,b=null,R=null,M=new Rt(0,0,0),w=0,C=!1,P=null,U=null,F=null,N=null,V=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,$=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(it)[1]),O=$>=1):it.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),O=$>=2);let lt=null,ut={};const Bt=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),Mt=new _e().fromArray(Bt),ct=new _e().fromArray(Pt);function dt(k,xt,G,j){const Q=new Uint8Array(4),q=s.createTexture();s.bindTexture(k,q),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<G;mt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(xt+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return q}const D={};D[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),D[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),D[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),a.setFunc(Hs),nt(!1),W(Rl),Z(s.CULL_FACE),J(Jn);function Z(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function st(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Ct(k,xt){return u[k]!==xt?(s.bindFramebuffer(k,xt),u[k]=xt,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=xt),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function bt(k,xt){let G=p,j=!1;if(k){G=f.get(xt),G===void 0&&(G=[],f.set(xt,G));const Q=k.textures;if(G.length!==Q.length||G[0]!==s.COLOR_ATTACHMENT0){for(let q=0,mt=Q.length;q<mt;q++)G[q]=s.COLOR_ATTACHMENT0+q;G.length=Q.length,j=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,j=!0);j&&s.drawBuffers(G)}function Dt(k){return _!==k?(s.useProgram(k),_=k,!0):!1}const Et={[Ki]:s.FUNC_ADD,[qd]:s.FUNC_SUBTRACT,[Yd]:s.FUNC_REVERSE_SUBTRACT};Et[Zd]=s.MIN,Et[Jd]=s.MAX;const B={[$d]:s.ZERO,[Kd]:s.ONE,[Qd]:s.SRC_COLOR,[Jl]:s.SRC_ALPHA,[rf]:s.SRC_ALPHA_SATURATE,[nf]:s.DST_COLOR,[tf]:s.DST_ALPHA,[jd]:s.ONE_MINUS_SRC_COLOR,[$l]:s.ONE_MINUS_SRC_ALPHA,[sf]:s.ONE_MINUS_DST_COLOR,[ef]:s.ONE_MINUS_DST_ALPHA,[af]:s.CONSTANT_COLOR,[of]:s.ONE_MINUS_CONSTANT_COLOR,[cf]:s.CONSTANT_ALPHA,[lf]:s.ONE_MINUS_CONSTANT_ALPHA};function J(k,xt,G,j,Q,q,mt,yt,Xt,Qt){if(k===Jn){g===!0&&(st(s.BLEND),g=!1);return}if(g===!1&&(Z(s.BLEND),g=!0),k!==Xd){if(k!==m||Qt!==C){if((x!==Ki||T!==Ki)&&(s.blendEquation(s.FUNC_ADD),x=Ki,T=Ki),Qt)switch(k){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Il:s.blendFunc(s.ONE,s.ONE);break;case Pl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ll:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$t("WebGLState: Invalid blending: ",k);break}else switch(k){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Il:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Pl:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ll:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",k);break}S=null,v=null,b=null,R=null,M.set(0,0,0),w=0,m=k,C=Qt}return}Q=Q||xt,q=q||G,mt=mt||j,(xt!==x||Q!==T)&&(s.blendEquationSeparate(Et[xt],Et[Q]),x=xt,T=Q),(G!==S||j!==v||q!==b||mt!==R)&&(s.blendFuncSeparate(B[G],B[j],B[q],B[mt]),S=G,v=j,b=q,R=mt),(yt.equals(M)===!1||Xt!==w)&&(s.blendColor(yt.r,yt.g,yt.b,Xt),M.copy(yt),w=Xt),m=k,C=!1}function X(k,xt){k.side===ze?st(s.CULL_FACE):Z(s.CULL_FACE);let G=k.side===qe;xt&&(G=!G),nt(G),k.blending===ks&&k.transparent===!1?J(Jn):J(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const j=k.stencilWrite;o.setTest(j),j&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(k){P!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),P=k)}function W(k){k!==Gd?(Z(s.CULL_FACE),k!==U&&(k===Rl?s.cullFace(s.BACK):k===Hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),U=k}function ft(k){k!==F&&(O&&s.lineWidth(k),F=k)}function gt(k,xt,G){k?(Z(s.POLYGON_OFFSET_FILL),(N!==xt||V!==G)&&(N=xt,V=G,a.getReversed()&&(xt=-xt),s.polygonOffset(xt,G))):st(s.POLYGON_OFFSET_FILL)}function ht(k){k?Z(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function _t(k){k===void 0&&(k=s.TEXTURE0+K-1),lt!==k&&(s.activeTexture(k),lt=k)}function L(k,xt,G){G===void 0&&(lt===null?G=s.TEXTURE0+K-1:G=lt);let j=ut[G];j===void 0&&(j={type:void 0,texture:void 0},ut[G]=j),(j.type!==k||j.texture!==xt)&&(lt!==G&&(s.activeTexture(G),lt=G),s.bindTexture(k,xt||D[k]),j.type=k,j.texture=xt)}function Vt(){const k=ut[lt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function wt(){try{s.compressedTexImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function E(){try{s.compressedTexImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function y(){try{s.texSubImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function z(){try{s.texSubImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function ot(){try{s.compressedTexSubImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function St(){try{s.texStorage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function Tt(){try{s.texStorage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function rt(){try{s.texImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function pt(){try{s.texImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function At(k){return d[k]!==void 0?d[k]:s.getParameter(k)}function Wt(k,xt){d[k]!==xt&&(s.pixelStorei(k,xt),d[k]=xt)}function Lt(k){Mt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Mt.copy(k))}function It(k){ct.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),ct.copy(k))}function Ht(k,xt){let G=l.get(xt);G===void 0&&(G=new WeakMap,l.set(xt,G));let j=G.get(k);j===void 0&&(j=s.getUniformBlockIndex(xt,k.name),G.set(k,j))}function Kt(k,xt){const j=l.get(xt).get(k);c.get(xt)!==j&&(s.uniformBlockBinding(xt,j,k.__bindingPointIndex),c.set(xt,j))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},lt=null,ut={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,x=null,S=null,v=null,T=null,b=null,R=null,M=new Rt(0,0,0),w=0,C=!1,P=null,U=null,F=null,N=null,V=null,Mt.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:st,bindFramebuffer:Ct,drawBuffers:bt,useProgram:Dt,setBlending:J,setMaterial:X,setFlipSided:nt,setCullFace:W,setLineWidth:ft,setPolygonOffset:gt,setScissorTest:ht,activeTexture:_t,bindTexture:L,unbindTexture:Vt,compressedTexImage2D:wt,compressedTexImage3D:E,texImage2D:rt,texImage3D:pt,pixelStorei:Wt,getParameter:At,updateUBOMapping:Ht,uniformBlockBinding:Kt,texStorage2D:St,texStorage3D:Tt,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:ot,scissor:Lt,viewport:It,reset:ie}}function YS(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,y){return p?new OffscreenCanvas(E,y):kr("canvas")}function g(E,y,z){let Y=1;const ot=wt(E);if((ot.width>z||ot.height>z)&&(Y=z/Math.max(ot.width,ot.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const St=Math.floor(Y*ot.width),Tt=Math.floor(Y*ot.height);u===void 0&&(u=_(St,Tt));const rt=y?_(St,Tt):u;return rt.width=St,rt.height=Tt,rt.getContext("2d").drawImage(E,0,0,St,Tt),Nt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+St+"x"+Tt+")."),rt}else return"data"in E&&Nt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),E;return E}function m(E){return E.generateMipmaps}function x(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(E,y,z,Y,ot,St=!1){if(E!==null){if(s[E]!==void 0)return s[E];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Tt;Y&&(Tt=t.get("EXT_texture_norm16"),Tt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=y;if(y===s.RED&&(z===s.FLOAT&&(rt=s.R32F),z===s.HALF_FLOAT&&(rt=s.R16F),z===s.UNSIGNED_BYTE&&(rt=s.R8),z===s.UNSIGNED_SHORT&&Tt&&(rt=Tt.R16_EXT),z===s.SHORT&&Tt&&(rt=Tt.R16_SNORM_EXT)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(rt=s.R8UI),z===s.UNSIGNED_SHORT&&(rt=s.R16UI),z===s.UNSIGNED_INT&&(rt=s.R32UI),z===s.BYTE&&(rt=s.R8I),z===s.SHORT&&(rt=s.R16I),z===s.INT&&(rt=s.R32I)),y===s.RG&&(z===s.FLOAT&&(rt=s.RG32F),z===s.HALF_FLOAT&&(rt=s.RG16F),z===s.UNSIGNED_BYTE&&(rt=s.RG8),z===s.UNSIGNED_SHORT&&Tt&&(rt=Tt.RG16_EXT),z===s.SHORT&&Tt&&(rt=Tt.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(rt=s.RG8UI),z===s.UNSIGNED_SHORT&&(rt=s.RG16UI),z===s.UNSIGNED_INT&&(rt=s.RG32UI),z===s.BYTE&&(rt=s.RG8I),z===s.SHORT&&(rt=s.RG16I),z===s.INT&&(rt=s.RG32I)),y===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(rt=s.RGB8UI),z===s.UNSIGNED_SHORT&&(rt=s.RGB16UI),z===s.UNSIGNED_INT&&(rt=s.RGB32UI),z===s.BYTE&&(rt=s.RGB8I),z===s.SHORT&&(rt=s.RGB16I),z===s.INT&&(rt=s.RGB32I)),y===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(rt=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(rt=s.RGBA16UI),z===s.UNSIGNED_INT&&(rt=s.RGBA32UI),z===s.BYTE&&(rt=s.RGBA8I),z===s.SHORT&&(rt=s.RGBA16I),z===s.INT&&(rt=s.RGBA32I)),y===s.RGB&&(z===s.UNSIGNED_SHORT&&Tt&&(rt=Tt.RGB16_EXT),z===s.SHORT&&Tt&&(rt=Tt.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(rt=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(rt=s.R11F_G11F_B10F)),y===s.RGBA){const pt=St?Vr:le.getTransfer(ot);z===s.FLOAT&&(rt=s.RGBA32F),z===s.HALF_FLOAT&&(rt=s.RGBA16F),z===s.UNSIGNED_BYTE&&(rt=pt===ge?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&Tt&&(rt=Tt.RGBA16_EXT),z===s.SHORT&&Tt&&(rt=Tt.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)}return(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function T(E,y){let z;return E?y===null||y===An||y===Xs?z=s.DEPTH24_STENCIL8:y===on?z=s.DEPTH32F_STENCIL8:y===Ws&&(z=s.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===An||y===Xs?z=s.DEPTH_COMPONENT24:y===on?z=s.DEPTH_COMPONENT32F:y===Ws&&(z=s.DEPTH_COMPONENT16),z}function b(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Le&&E.minFilter!==be?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){const y=E.target;y.removeEventListener("dispose",R),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function M(E){const y=E.target;y.removeEventListener("dispose",M),P(y)}function w(E){const y=n.get(E);if(y.__webglInit===void 0)return;const z=E.source,Y=f.get(z);if(Y){const ot=Y[y.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&C(E),Object.keys(Y).length===0&&f.delete(z)}n.remove(E)}function C(E){const y=n.get(E);s.deleteTexture(y.__webglTexture);const z=E.source,Y=f.get(z);delete Y[y.__cacheKey],a.memory.textures--}function P(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let ot=0;ot<y.__webglFramebuffer[Y].length;ot++)s.deleteFramebuffer(y.__webglFramebuffer[Y][ot]);else s.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)s.deleteFramebuffer(y.__webglFramebuffer[Y]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=E.textures;for(let Y=0,ot=z.length;Y<ot;Y++){const St=n.get(z[Y]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(z[Y])}n.remove(E)}let U=0;function F(){U=0}function N(){return U}function V(E){U=E}function K(){const E=U;return E>=i.maxTextures&&Nt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,E}function O(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function $(E,y){const z=n.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){const Y=E.image;if(Y===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,E,y);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function it(E,y){const z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){st(z,E,y);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function lt(E,y){const z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){st(z,E,y);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function ut(E,y){const z=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&z.__version!==E.version){Ct(z,E,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const Bt={[ns]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},Pt={[Le]:s.NEAREST,[ih]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[be]:s.LINEAR,[Sr]:s.LINEAR_MIPMAP_NEAREST,[Un]:s.LINEAR_MIPMAP_LINEAR},Mt={[yf]:s.NEVER,[Tf]:s.ALWAYS,[Mf]:s.LESS,[ac]:s.LEQUAL,[Sf]:s.EQUAL,[oc]:s.GEQUAL,[bf]:s.GREATER,[wf]:s.NOTEQUAL};function ct(E,y){if(y.type===on&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===be||y.magFilter===Sr||y.magFilter===Fs||y.magFilter===Un||y.minFilter===be||y.minFilter===Sr||y.minFilter===Fs||y.minFilter===Un)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,Bt[y.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Bt[y.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Bt[y.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,Pt[y.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,Pt[y.minFilter]),y.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Le||y.minFilter!==Fs&&y.minFilter!==Un||y.type===on&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function dt(E,y){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));const Y=y.source;let ot=f.get(Y);ot===void 0&&(ot={},f.set(Y,ot));const St=O(y);if(St!==E.__cacheKey){ot[St]===void 0&&(ot[St]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ot[St].usedTimes++;const Tt=ot[E.__cacheKey];Tt!==void 0&&(ot[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&C(y)),E.__cacheKey=St,E.__webglTexture=ot[St].texture}return z}function D(E,y,z){return Math.floor(Math.floor(E/z)/y)}function Z(E,y,z,Y){const St=E.updateRanges;if(St.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,z,Y,y.data);else{St.sort((Wt,Lt)=>Wt.start-Lt.start);let Tt=0;for(let Wt=1;Wt<St.length;Wt++){const Lt=St[Tt],It=St[Wt],Ht=Lt.start+Lt.count,Kt=D(It.start,y.width,4),ie=D(Lt.start,y.width,4);It.start<=Ht+1&&Kt===ie&&D(It.start+It.count-1,y.width,4)===Kt?Lt.count=Math.max(Lt.count,It.start+It.count-Lt.start):(++Tt,St[Tt]=It)}St.length=Tt+1;const rt=e.getParameter(s.UNPACK_ROW_LENGTH),pt=e.getParameter(s.UNPACK_SKIP_PIXELS),At=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Wt=0,Lt=St.length;Wt<Lt;Wt++){const It=St[Wt],Ht=Math.floor(It.start/4),Kt=Math.ceil(It.count/4),ie=Ht%y.width,k=Math.floor(Ht/y.width),xt=Kt,G=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(s.UNPACK_SKIP_ROWS,k),e.texSubImage2D(s.TEXTURE_2D,0,ie,k,xt,G,z,Y,y.data)}E.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,rt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(s.UNPACK_SKIP_ROWS,At)}}function st(E,y,z){let Y=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=s.TEXTURE_3D);const ot=dt(E,y),St=y.source;e.bindTexture(Y,E.__webglTexture,s.TEXTURE0+z);const Tt=n.get(St);if(St.version!==Tt.__version||ot===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const G=le.getPrimaries(le.workingColorSpace),j=y.colorSpace===ci?null:le.getPrimaries(y.colorSpace),Q=y.colorSpace===ci||G===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let pt=g(y.image,!1,i.maxTextureSize);pt=Vt(y,pt);const At=r.convert(y.format,y.colorSpace),Wt=r.convert(y.type);let Lt=v(y.internalFormat,At,Wt,y.normalized,y.colorSpace,y.isVideoTexture);ct(Y,y);let It;const Ht=y.mipmaps,Kt=y.isVideoTexture!==!0,ie=Tt.__version===void 0||ot===!0,k=St.dataReady,xt=b(y,pt);if(y.isDepthTexture)Lt=T(y.format===Ei,y.type),ie&&(Kt?e.texStorage2D(s.TEXTURE_2D,1,Lt,pt.width,pt.height):e.texImage2D(s.TEXTURE_2D,0,Lt,pt.width,pt.height,0,At,Wt,null));else if(y.isDataTexture)if(Ht.length>0){Kt&&ie&&e.texStorage2D(s.TEXTURE_2D,xt,Lt,Ht[0].width,Ht[0].height);for(let G=0,j=Ht.length;G<j;G++)It=Ht[G],Kt?k&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,It.width,It.height,At,Wt,It.data):e.texImage2D(s.TEXTURE_2D,G,Lt,It.width,It.height,0,At,Wt,It.data);y.generateMipmaps=!1}else Kt?(ie&&e.texStorage2D(s.TEXTURE_2D,xt,Lt,pt.width,pt.height),k&&Z(y,pt,At,Wt)):e.texImage2D(s.TEXTURE_2D,0,Lt,pt.width,pt.height,0,At,Wt,pt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Kt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Lt,Ht[0].width,Ht[0].height,pt.depth);for(let G=0,j=Ht.length;G<j;G++)if(It=Ht[G],y.format!==je)if(At!==null)if(Kt){if(k)if(y.layerUpdates.size>0){const Q=Hl(It.width,It.height,y.format,y.type);for(const q of y.layerUpdates){const mt=It.data.subarray(q*Q/It.data.BYTES_PER_ELEMENT,(q+1)*Q/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,q,It.width,It.height,1,At,mt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,It.width,It.height,pt.depth,At,It.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Lt,It.width,It.height,pt.depth,0,It.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,It.width,It.height,pt.depth,At,Wt,It.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Lt,It.width,It.height,pt.depth,0,At,Wt,It.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Kt&&ie&&e.texStorage2D(s.TEXTURE_2D,xt,Lt,Ht[0].width,Ht[0].height);for(let G=0,j=Ht.length;G<j;G++)It=Ht[G],y.format!==je?At!==null?Kt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,It.width,It.height,At,It.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Lt,It.width,It.height,0,It.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?k&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,It.width,It.height,At,Wt,It.data):e.texImage2D(s.TEXTURE_2D,G,Lt,It.width,It.height,0,At,Wt,It.data)}else if(y.isDataArrayTexture)if(Kt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Lt,pt.width,pt.height,pt.depth),k)if(y.layerUpdates.size>0){const G=Hl(pt.width,pt.height,y.format,y.type);for(const j of y.layerUpdates){const Q=pt.data.subarray(j*G/pt.data.BYTES_PER_ELEMENT,(j+1)*G/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,pt.width,pt.height,1,At,Wt,Q)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,At,Wt,pt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,pt.width,pt.height,pt.depth,0,At,Wt,pt.data);else if(y.isData3DTexture)Kt?(ie&&e.texStorage3D(s.TEXTURE_3D,xt,Lt,pt.width,pt.height,pt.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,At,Wt,pt.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,pt.width,pt.height,pt.depth,0,At,Wt,pt.data);else if(y.isFramebufferTexture){if(ie)if(Kt)e.texStorage2D(s.TEXTURE_2D,xt,Lt,pt.width,pt.height);else{let G=pt.width,j=pt.height;for(let Q=0;Q<xt;Q++)e.texImage2D(s.TEXTURE_2D,Q,Lt,G,j,0,At,Wt,null),G>>=1,j>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const G=s.canvas;if(G.hasAttribute("layoutsubtree")||G.setAttribute("layoutsubtree","true"),pt.parentNode!==G){G.appendChild(pt),d.add(y),G.onpaint=j=>{const Q=j.changedElements;for(const q of d)Q.includes(q.image)&&(q.needsUpdate=!0)},G.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,pt);else{const Q=s.RGBA,q=s.RGBA,mt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Q,q,mt,pt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Kt&&ie){const G=wt(Ht[0]);e.texStorage2D(s.TEXTURE_2D,xt,Lt,G.width,G.height)}for(let G=0,j=Ht.length;G<j;G++)It=Ht[G],Kt?k&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,At,Wt,It):e.texImage2D(s.TEXTURE_2D,G,Lt,At,Wt,It);y.generateMipmaps=!1}else if(Kt){if(ie){const G=wt(pt);e.texStorage2D(s.TEXTURE_2D,xt,Lt,G.width,G.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Wt,pt)}else e.texImage2D(s.TEXTURE_2D,0,Lt,At,Wt,pt);m(y)&&x(Y),Tt.__version=St.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ct(E,y,z){if(y.image.length!==6)return;const Y=dt(E,y),ot=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);const St=n.get(ot);if(ot.version!==St.__version||Y===!0){e.activeTexture(s.TEXTURE0+z);const Tt=le.getPrimaries(le.workingColorSpace),rt=y.colorSpace===ci?null:le.getPrimaries(y.colorSpace),pt=y.colorSpace===ci||Tt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const At=y.isCompressedTexture||y.image[0].isCompressedTexture,Wt=y.image[0]&&y.image[0].isDataTexture,Lt=[];for(let q=0;q<6;q++)!At&&!Wt?Lt[q]=g(y.image[q],!0,i.maxCubemapSize):Lt[q]=Wt?y.image[q].image:y.image[q],Lt[q]=Vt(y,Lt[q]);const It=Lt[0],Ht=r.convert(y.format,y.colorSpace),Kt=r.convert(y.type),ie=v(y.internalFormat,Ht,Kt,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,xt=St.__version===void 0||Y===!0,G=ot.dataReady;let j=b(y,It);ct(s.TEXTURE_CUBE_MAP,y);let Q;if(At){k&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,j,ie,It.width,It.height);for(let q=0;q<6;q++){Q=Lt[q].mipmaps;for(let mt=0;mt<Q.length;mt++){const yt=Q[mt];y.format!==je?Ht!==null?k?G&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,0,0,yt.width,yt.height,Ht,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,ie,yt.width,yt.height,0,yt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,0,0,yt.width,yt.height,Ht,Kt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,ie,yt.width,yt.height,0,Ht,Kt,yt.data)}}}else{if(Q=y.mipmaps,k&&xt){Q.length>0&&j++;const q=wt(Lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,j,ie,q.width,q.height)}for(let q=0;q<6;q++)if(Wt){k?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Lt[q].width,Lt[q].height,Ht,Kt,Lt[q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ie,Lt[q].width,Lt[q].height,0,Ht,Kt,Lt[q].data);for(let mt=0;mt<Q.length;mt++){const Xt=Q[mt].image[q].image;k?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,0,0,Xt.width,Xt.height,Ht,Kt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,ie,Xt.width,Xt.height,0,Ht,Kt,Xt.data)}}else{k?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ht,Kt,Lt[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ie,Ht,Kt,Lt[q]);for(let mt=0;mt<Q.length;mt++){const yt=Q[mt];k?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,0,0,Ht,Kt,yt.image[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,ie,Ht,Kt,yt.image[q])}}}m(y)&&x(s.TEXTURE_CUBE_MAP),St.__version=ot.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function bt(E,y,z,Y,ot,St){const Tt=r.convert(z.format,z.colorSpace),rt=r.convert(z.type),pt=v(z.internalFormat,Tt,rt,z.normalized,z.colorSpace),At=n.get(y),Wt=n.get(z);if(Wt.__renderTarget=y,!At.__hasExternalTextures){const Lt=Math.max(1,y.width>>St),It=Math.max(1,y.height>>St);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,St,pt,Lt,It,y.depth,0,Tt,rt,null):e.texImage2D(ot,St,pt,Lt,It,0,Tt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),_t(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,ot,Wt.__webglTexture,0,ht(y)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,ot,Wt.__webglTexture,St),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(E,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),y.depthBuffer){const Y=y.depthTexture,ot=Y&&Y.isDepthTexture?Y.type:null,St=T(y.stencilBuffer,ot),Tt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht(y),St,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht(y),St,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,St,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,E)}else{const Y=y.textures;for(let ot=0;ot<Y.length;ot++){const St=Y[ot],Tt=r.convert(St.format,St.colorSpace),rt=r.convert(St.type),pt=v(St.internalFormat,Tt,rt,St.normalized,St.colorSpace);_t(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht(y),pt,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht(y),pt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(E,y,z){const Y=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(y.depthTexture);if(ot.__renderTarget=y,(!ot.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),ot.__webglTexture===void 0){ot.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),ct(s.TEXTURE_CUBE_MAP,y.depthTexture);const At=r.convert(y.depthTexture.format),Wt=r.convert(y.depthTexture.type);let Lt;y.depthTexture.format===Kn?Lt=s.DEPTH_COMPONENT24:y.depthTexture.format===Ei&&(Lt=s.DEPTH24_STENCIL8);for(let It=0;It<6;It++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Lt,y.width,y.height,0,At,Wt,null)}}else $(y.depthTexture,0);const St=ot.__webglTexture,Tt=ht(y),rt=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,pt=y.depthTexture.format===Ei?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Kn)_t(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,rt,St,0,Tt):s.framebufferTexture2D(s.FRAMEBUFFER,pt,rt,St,0);else if(y.depthTexture.format===Ei)_t(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,rt,St,0,Tt):s.framebufferTexture2D(s.FRAMEBUFFER,pt,rt,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function B(E){const y=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const ot=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",ot)};Y.addEventListener("dispose",ot),y.__depthDisposeCallback=ot}y.__boundDepthTexture=Y}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)Et(y.__webglFramebuffer[Y],E,Y);else{const Y=E.texture.mipmaps;Y&&Y.length>0?Et(y.__webglFramebuffer[0],E,0):Et(y.__webglFramebuffer,E,0)}else if(z){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=s.createRenderbuffer(),Dt(y.__webglDepthbuffer[Y],E,!1);else{const ot=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=y.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,St)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Dt(y.__webglDepthbuffer,E,!1);else{const ot=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,St)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function J(E,y,z){const Y=n.get(E);y!==void 0&&bt(Y.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&B(E)}function X(E){const y=E.texture,z=n.get(E),Y=n.get(y);E.addEventListener("dispose",M);const ot=E.textures,St=E.isWebGLCubeRenderTarget===!0,Tt=ot.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=y.version,a.memory.textures++),St){z.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[rt]=[];for(let pt=0;pt<y.mipmaps.length;pt++)z.__webglFramebuffer[rt][pt]=s.createFramebuffer()}else z.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)z.__webglFramebuffer[rt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let rt=0,pt=ot.length;rt<pt;rt++){const At=n.get(ot[rt]);At.__webglTexture===void 0&&(At.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&_t(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let rt=0;rt<ot.length;rt++){const pt=ot[rt];z.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[rt]);const At=r.convert(pt.format,pt.colorSpace),Wt=r.convert(pt.type),Lt=v(pt.internalFormat,At,Wt,pt.normalized,pt.colorSpace,E.isXRRenderTarget===!0),It=ht(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,Lt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,z.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(St){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ct(s.TEXTURE_CUBE_MAP,y);for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)bt(z.__webglFramebuffer[rt][pt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,pt);else bt(z.__webglFramebuffer[rt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(y)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let rt=0,pt=ot.length;rt<pt;rt++){const At=ot[rt],Wt=n.get(At);let Lt=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Lt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Wt.__webglTexture),ct(Lt,At),bt(z.__webglFramebuffer,E,At,s.COLOR_ATTACHMENT0+rt,Lt,0),m(At)&&x(Lt)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(rt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),ct(rt,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)bt(z.__webglFramebuffer[pt],E,y,s.COLOR_ATTACHMENT0,rt,pt);else bt(z.__webglFramebuffer,E,y,s.COLOR_ATTACHMENT0,rt,0);m(y)&&x(rt),e.unbindTexture()}E.depthBuffer&&B(E)}function nt(E){const y=E.textures;for(let z=0,Y=y.length;z<Y;z++){const ot=y[z];if(m(ot)){const St=S(E),Tt=n.get(ot).__webglTexture;e.bindTexture(St,Tt),x(St),e.unbindTexture()}}}const W=[],ft=[];function gt(E){if(E.samples>0){if(_t(E)===!1){const y=E.textures,z=E.width,Y=E.height;let ot=s.COLOR_BUFFER_BIT;const St=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(E),rt=y.length>1;if(rt)for(let At=0;At<y.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const pt=E.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let At=0;At<y.length;At++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);const Wt=n.get(y[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,z,Y,0,0,z,Y,ot,s.NEAREST),c===!0&&(W.length=0,ft.length=0,W.push(s.COLOR_ATTACHMENT0+At),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(W.push(St),ft.push(St),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ft)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,W))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let At=0;At<y.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);const Wt=n.get(y[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ht(E){return Math.min(i.maxSamples,E.samples)}function _t(E){const y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(E){const y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Vt(E,y){const z=E.colorSpace,Y=E.format,ot=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==zr&&z!==ci&&(le.getTransfer(z)===ge?(Y!==je||ot!==rn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",z)),y}function wt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=F,this.getTextureUnits=N,this.setTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=it,this.setTexture3D=lt,this.setTextureCube=ut,this.rebindTextures=J,this.setupRenderTarget=X,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Up(s,t){function e(n,i=ci){let r;const a=le.getTransfer(i);if(n===rn)return s.UNSIGNED_BYTE;if(n===ec)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===sh)return s.BYTE;if(n===rh)return s.SHORT;if(n===Ws)return s.UNSIGNED_SHORT;if(n===tc)return s.INT;if(n===An)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===Bn)return s.HALF_FLOAT;if(n===ch)return s.ALPHA;if(n===lh)return s.RGB;if(n===je)return s.RGBA;if(n===Kn)return s.DEPTH_COMPONENT;if(n===Ei)return s.DEPTH_STENCIL;if(n===Kr)return s.RED;if(n===Qr)return s.RED_INTEGER;if(n===Pi)return s.RG;if(n===ic)return s.RG_INTEGER;if(n===sc)return s.RGBA_INTEGER;if(n===br||n===wr||n===Tr||n===Ar)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===yo||n===Mo||n===So||n===bo||n===Ur||n===wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===yo)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===So)return r.COMPRESSED_R11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ur)return r.COMPRESSED_RG11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===To||n===Ao||n===Eo||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Vo||n===ko)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Ho||n===Fr||n===Wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const ZS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JS=`
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

}`;class $S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new xh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new En({vertexShader:ZS,fragmentShader:JS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KS extends Vn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new $S,m={},x=e.getContextAttributes();let S=null,v=null;const T=[],b=[],R=new vt;let M=null,w=null;const C=new Xe;C.viewport=new _e;const P=new Xe;P.viewport=new _e;const U=[C,P],F=new Sp;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let Z=T[D];return Z===void 0&&(Z=new so,T[D]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(D){let Z=T[D];return Z===void 0&&(Z=new so,T[D]=Z),Z.getGripSpace()},this.getHand=function(D){let Z=T[D];return Z===void 0&&(Z=new so,T[D]=Z),Z.getHandSpace()};function K(D){const Z=b.indexOf(D.inputSource);if(Z===-1)return;const st=T[Z];st!==void 0&&(st.update(D.inputSource,D.frame,l||a),st.dispatchEvent({type:D.type,data:D.inputSource}))}function O(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",$);for(let D=0;D<T.length;D++){const Z=b[D];Z!==null&&(b[D]=null,T[D].disconnect(Z))}N=null,V=null,g.reset();for(const D in m)delete m[D];if(t.setRenderTarget(S),f=null,u=null,d=null,i=null,v=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(R.width,R.height,!1),w!==null){const D=w.camera;D.fov=w.fov,D.zoom=w.zoom,D.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",O),i.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Ct=null,bt=null;x.depth&&(bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=x.stencil?Ei:Kn,Ct=x.stencil?Xs:An);const Dt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new pn(u.textureWidth,u.textureHeight,{format:je,type:rn,depthTexture:new Zs(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const st={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new pn(f.framebufferWidth,f.framebufferHeight,{format:je,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(D){for(let Z=0;Z<D.removed.length;Z++){const st=D.removed[Z],Ct=b.indexOf(st);Ct>=0&&(b[Ct]=null,T[Ct].disconnect(st))}for(let Z=0;Z<D.added.length;Z++){const st=D.added[Z];let Ct=b.indexOf(st);if(Ct===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=b.length){b.push(st),Ct=Dt;break}else if(b[Dt]===null){b[Dt]=st,Ct=Dt;break}if(Ct===-1)break}const bt=T[Ct];bt&&bt.connect(st)}}const it=new I,lt=new I;function ut(D,Z,st){it.setFromMatrixPosition(Z.matrixWorld),lt.setFromMatrixPosition(st.matrixWorld);const Ct=it.distanceTo(lt),bt=Z.projectionMatrix.elements,Dt=st.projectionMatrix.elements,Et=bt[14]/(bt[10]-1),B=bt[14]/(bt[10]+1),J=(bt[9]+1)/bt[5],X=(bt[9]-1)/bt[5],nt=(bt[8]-1)/bt[0],W=(Dt[8]+1)/Dt[0],ft=Et*nt,gt=Et*W,ht=Ct/(-nt+W),_t=ht*-nt;if(Z.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(_t),D.translateZ(ht),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),bt[10]===-1)D.projectionMatrix.copy(Z.projectionMatrix),D.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const L=Et+ht,Vt=B+ht,wt=ft-_t,E=gt+(Ct-_t),y=J*B/Vt*L,z=X*B/Vt*L;D.projectionMatrix.makePerspective(wt,E,y,z,L,Vt),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function Bt(D,Z){Z===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(Z.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let Z=D.near,st=D.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(st=g.depthFar)),F.near=P.near=C.near=Z,F.far=P.far=C.far=st,(N!==F.near||V!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,V=F.far),F.layers.mask=D.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const Ct=D.parent,bt=F.cameras;Bt(F,Ct);for(let Dt=0;Dt<bt.length;Dt++)Bt(bt[Dt],Ct);bt.length===2?ut(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),w===null&&D.isPerspectiveCamera&&(w={camera:D,fov:D.fov,zoom:D.zoom}),Pt(D,F,Ct)};function Pt(D,Z,st){st===null?D.matrix.copy(Z.matrixWorld):(D.matrix.copy(st.matrixWorld),D.matrix.invert(),D.matrix.multiply(Z.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(Z.projectionMatrix),D.projectionMatrixInverse.copy(Z.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=qs*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(D){c=D,u!==null&&(u.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(D){return m[D]};let Mt=null;function ct(D,Z){if(h=Z.getViewerPose(l||a),p=Z,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ct=!1;st.length!==F.cameras.length&&(F.cameras.length=0,Ct=!0);for(let B=0;B<st.length;B++){const J=st[B];let X=null;if(f!==null)X=f.getViewport(J);else{const W=d.getViewSubImage(u,J);X=W.viewport,B===0&&(t.setRenderTargetTextures(v,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(v))}let nt=U[B];nt===void 0&&(nt=new Xe,nt.layers.enable(B),nt.viewport=new _e,U[B]=nt),nt.matrix.fromArray(J.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(J.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(X.x,X.y,X.width,X.height),B===0&&(F.matrix.copy(nt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ct===!0&&F.cameras.push(nt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const B=d.getDepthInformation(st[0]);B&&B.isValid&&B.texture&&g.init(B,i.renderState)}if(bt&&bt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let B=0;B<st.length;B++){const J=st[B].camera;if(J){let X=m[J];X||(X=new xh,m[J]=X);const nt=d.getCameraImage(J);X.sourceTexture=nt}}}}for(let st=0;st<T.length;st++){const Ct=b[st],bt=T[st];Ct!==null&&bt!==void 0&&bt.update(Ct,Z,l||a)}Mt&&Mt(D,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}const dt=new Rp;dt.setAnimationLoop(ct),this.setAnimationLoop=function(D){Mt=D},this.dispose=function(){}}}const QS=new te,Fp=new se;Fp.set(-1,0,0,0,1,0,0,0,1);function jS(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Kf(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,x,S):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=t.get(m),S=x.envMap,v=x.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(QS.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tb(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,T){const b=T.program;n.uniformBlockBinding(v,b)}function l(v,T){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",x));const R=T.program;n.updateUBOMapping(v,R);const M=t.render.frame;r[v.id]!==M&&(u(v),r[v.id]=M)}function h(v){const T=d();v.__bindingPointIndex=T;const b=s.createBuffer(),R=v.__size,M=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=i[v.id],b=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let M=0,w=b.length;M<w;M++){const C=b[M];if(Array.isArray(C))for(let P=0,U=C.length;P<U;P++)f(C[P],M,P,R);else f(C,M,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,T,b,R){if(_(v,T,b,R)===!0){const M=v.__offset,w=v.value;if(Array.isArray(w)){let C=0;for(let P=0;P<w.length;P++){const U=w[P],F=m(U);p(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function p(v,T,b){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,b)}function _(v,T,b,R){const M=v.value,w=T+"_"+b;if(R[w]===void 0)return typeof M=="number"||typeof M=="boolean"?R[w]=M:ArrayBuffer.isView(M)?R[w]=M.slice():R[w]=M.clone(),!0;{const C=R[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return R[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(v){const T=v.uniforms;let b=0;const R=16;for(let w=0,C=T.length;w<C;w++){const P=Array.isArray(T[w])?T[w]:[T[w]];for(let U=0,F=P.length;U<F;U++){const N=P[U],V=Array.isArray(N.value)?N.value:[N.value];for(let K=0,O=V.length;K<O;K++){const $=V[K],it=m($),lt=b%R,ut=lt%it.boundary,Bt=lt+ut;b+=ut,Bt!==0&&R-Bt<it.storage&&(b+=R-Bt),N.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=it.storage}}}const M=b%R;return M>0&&(b+=R-M),v.__size=b,v.__cache={},this}function m(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",v),T}function x(v){const T=v.target;T.removeEventListener("dispose",x);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function S(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:S}}const eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function nb(){return Yn===null&&(Yn=new mn(eb,16,16,Pi,Bn),Yn.name="DFG_LUT",Yn.minFilter=be,Yn.magFilter=be,Yn.wrapS=fn,Yn.wrapT=fn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class Op{constructor(t={}){const{canvas:e=Ef(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=rn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,g=new Set([sc,ic,Qr]),m=new Set([rn,An,Ws,Xs,ec,nc]),x=new Uint32Array(4),S=new Int32Array(4),v=new I;let T=null,b=null;const R=[],M=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,U=null,F=null,N=null,V=null;this._outputColorSpace=Ee;let K=0,O=0,$=null,it=-1,lt=null;const ut=new _e,Bt=new _e;let Pt=null;const Mt=new Rt(0);let ct=0,dt=e.width,D=e.height,Z=1,st=null,Ct=null;const bt=new _e(0,0,dt,D),Dt=new _e(0,0,dt,D);let Et=!1;const B=new rs;let J=!1,X=!1;const nt=new te,W=new I,ft=new _e,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function _t(){return $===null?Z:1}let L=n;function Vt(A,H){return e.getContext(A,H)}let wt,E,y,z,Y,ot,St,Tt,rt,pt,At,Wt,Lt,It,Ht,Kt,ie,k,xt,G,j,Q,q;try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ko}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",qt,!1),L===null){const H="webgl2";if(L=Vt(H,A),L===null)throw Vt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(A){throw e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",qt,!1),$t("WebGLRenderer: "+A.message),A}function mt(){wt=new iM(L),wt.init(),j=new Up(L,wt),E=new Yy(L,wt,t,j),y=new qS(L,wt),E.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),F=L.createFramebuffer(),N=L.createFramebuffer(),V=L.createFramebuffer(),z=new aM(L),Y=new LS,ot=new YS(L,wt,y,Y,E,j,z),St=new nM(C),Tt=new cx(L),Q=new Xy(L,Tt),rt=new sM(L,Tt,z,Q),pt=new cM(L,rt,Tt,Q,z),k=new oM(L,E,ot),Ht=new Zy(Y),At=new PS(C,St,wt,E,Q,Ht),Wt=new jS(C,Y),Lt=new NS,It=new VS(wt),ie=new Wy(C,St,y,pt,p,c),Kt=new XS(C,pt,E),q=new tb(L,z,E,y),xt=new qy(L,wt,z),G=new rM(L,wt,z),z.programs=At.programs,C.capabilities=E,C.extensions=wt,C.properties=Y,C.renderLists=Lt,C.shadowMap=Kt,C.state=y,C.info=z}_!==rn&&(w=new hM(_,e.width,e.height,o,i,r));const yt=new KS(C,L);this.xr=yt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(dt,D,!1))},this.getSize=function(A){return A.set(dt,D)},this.setSize=function(A,H,at=!0){if(yt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=A,D=H,e.width=Math.floor(A*Z),e.height=Math.floor(H*Z),at===!0&&(e.style.width=A+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(dt*Z,D*Z).floor()},this.setDrawingBufferSize=function(A,H,at){dt=A,D=H,Z=at,e.width=Math.floor(A*at),e.height=Math.floor(H*at),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(_===rn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ut)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,H,at,tt){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,H,at,tt),y.viewport(ut.copy(bt).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(Dt)},this.setScissor=function(A,H,at,tt){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,H,at,tt),y.scissor(Bt.copy(Dt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){y.setScissorTest(Et=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){Ct=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,at=!0){let tt=0;if(A){let et=!1;if($!==null){const zt=$.texture.format;et=g.has(zt)}if(et){const zt=$.texture.type,Gt=m.has(zt),Ot=ie.getClearColor(),Yt=ie.getClearAlpha(),Jt=Ot.r,oe=Ot.g,ce=Ot.b;Gt?(x[0]=Jt,x[1]=oe,x[2]=ce,x[3]=Yt,L.clearBufferuiv(L.COLOR,0,x)):(S[0]=Jt,S[1]=oe,S[2]=ce,S[3]=Yt,L.clearBufferiv(L.COLOR,0,S))}else tt|=L.COLOR_BUFFER_BIT}H&&(tt|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(tt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&L.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",qt,!1),ie.dispose(),Lt.dispose(),It.dispose(),Y.dispose(),St.dispose(),pt.dispose(),Q.dispose(),q.dispose(),At.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",mi),yt.removeEventListener("sessionend",Wn),Ie.stop()};function Xt(A){A.preventDefault(),Gr("WebGLRenderer: Context Lost."),P=!0}function Qt(){Gr("WebGLRenderer: Context Restored."),P=!1;const A=z.autoReset,H=Kt.enabled,at=Kt.autoUpdate,tt=Kt.needsUpdate,et=Kt.type;mt(),z.autoReset=A,Kt.enabled=H,Kt.autoUpdate=at,Kt.needsUpdate=tt,Kt.type=et}function qt(A){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function jt(A){const H=A.target;H.removeEventListener("dispose",jt),Ue(H)}function Ue(A){Ae(A),Y.remove(A)}function Ae(A){const H=Y.get(A).programs;H!==void 0&&(H.forEach(function(at){At.releaseProgram(at)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,at,tt,et,zt){H===null&&(H=gt);const Gt=et.isMesh&&et.matrixWorld.determinantAffine()<0,Ot=Zp(A,H,at,tt,et);y.setMaterial(tt,Gt);let Yt=at.index,Jt=1;if(tt.wireframe===!0){if(Yt=rt.getWireframeAttribute(at),Yt===void 0)return;Jt=2}const oe=at.drawRange,ce=at.attributes.position;let Zt=oe.start*Jt,me=(oe.start+oe.count)*Jt;zt!==null&&(Zt=Math.max(Zt,zt.start*Jt),me=Math.min(me,(zt.start+zt.count)*Jt)),Yt!==null?(Zt=Math.max(Zt,0),me=Math.min(me,Yt.count)):ce!=null&&(Zt=Math.max(Zt,0),me=Math.min(me,ce.count));const Fe=me-Zt;if(Fe<0||Fe===1/0)return;Q.setup(et,tt,Ot,at,Yt);let we,ye=xt;if(Yt!==null&&(we=Tt.get(Yt),ye=G,ye.setIndex(we)),et.isMesh)tt.wireframe===!0?(y.setLineWidth(tt.wireframeLinewidth*_t()),ye.setMode(L.LINES)):ye.setMode(L.TRIANGLES);else if(et.isLine){let Je=tt.linewidth;Je===void 0&&(Je=1),y.setLineWidth(Je*_t()),et.isLineSegments?ye.setMode(L.LINES):et.isLineLoop?ye.setMode(L.LINE_LOOP):ye.setMode(L.LINE_STRIP)}else et.isPoints?ye.setMode(L.POINTS):et.isSprite&&ye.setMode(L.TRIANGLES);if(et.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))ye.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Je=et._multiDrawStarts,kt=et._multiDrawCounts,en=et._multiDrawCount,he=Yt?Tt.get(Yt).bytesPerElement:1,Sn=Y.get(tt).currentProgram.getUniforms();for(let Xn=0;Xn<en;Xn++)Sn.setValue(L,"_gl_DrawID",Xn),ye.render(Je[Xn]/he,kt[Xn])}else if(et.isInstancedMesh)ye.renderInstances(Zt,Fe,et.count);else if(at.isInstancedBufferGeometry){const Je=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,kt=Math.min(at.instanceCount,Je);ye.renderInstances(Zt,Fe,kt)}else ye.render(Zt,Fe)};function Ge(A,H,at,tt){U!==null&&A.isNodeMaterial&&U.setObject(tt,A),J===!0&&Ht.setState(A,at,!1),A.transparent===!0&&A.side===ze&&A.forceSinglePass===!1?(A.side=qe,A.needsUpdate=!0,ca(A,H,tt),A.side=Ri,A.needsUpdate=!0,ca(A,H,tt),A.side=ze):ca(A,H,tt)}this.compile=function(A,H,at=null){at===null&&(at=A),U!==null&&U.renderStart(A,H,at),b=It.get(at),b.init(H),M.push(b),at.traverseVisible(function(et){et.isLight&&et.layers.test(H.layers)&&(b.pushLight(et),et.castShadow&&b.pushShadow(et))}),A!==at&&A.traverseVisible(function(et){et.isLight&&et.layers.test(H.layers)&&(b.pushLight(et),et.castShadow&&b.pushShadow(et))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),X=this.localClippingEnabled,J=Ht.init(this.clippingPlanes,X),J===!0&&Ht.setGlobalState(this.clippingPlanes,H),U!==null&&Kt.render(b.state.shadowsArray,at,H);const tt=new Set;return A.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const zt=et.material;if(zt)if(Array.isArray(zt))for(let Gt=0;Gt<zt.length;Gt++){const Ot=zt[Gt];Ge(Ot,at,H,et),tt.add(Ot)}else Ge(zt,at,H,et),tt.add(zt)}),b=M.pop(),U!==null&&U.renderEnd(),tt},this.compileAsync=function(A,H,at=null){const tt=this.compile(A,H,at);return new Promise(et=>{function zt(){if(tt.forEach(function(Gt){const Yt=Y.get(Gt).currentProgram;(Yt===void 0||Yt.isReady())&&tt.delete(Gt)}),tt.size===0){et(A);return}setTimeout(zt,10)}wt.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let pe=null;function Rn(A){pe&&pe(A)}function mi(){Ie.stop()}function Wn(){Ie.start()}const Ie=new Rp;Ie.setAnimationLoop(Rn),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(A){pe=A,yt.setAnimationLoop(A),A===null?Ie.stop():Ie.start()},yt.addEventListener("sessionstart",mi),yt.addEventListener("sessionend",Wn),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(A,H);const at=yt.enabled===!0&&yt.isPresenting===!0,tt=w!==null&&($===null||at)&&w.begin(C,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(H),H=yt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,H,$),b=It.get(A,M.length),b.init(H),b.state.textureUnits=ot.getTextureUnits(),M.push(b),nt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),B.setFromProjectionMatrix(nt,yn,H.reversedDepth),X=this.localClippingEnabled,J=Ht.init(this.clippingPlanes,X),T=Lt.get(A,R.length),T.init(),R.push(T),yt.enabled===!0&&yt.isPresenting===!0){const Gt=C.xr.getDepthSensingMesh();Gt!==null&&jn(Gt,H,-1/0,C.sortObjects)}jn(A,H,0,C.sortObjects),T.finish(),U!==null&&U.updateLights(b.state.lightsArray),C.sortObjects===!0&&T.sort(st,Ct),ht=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,ht&&ie.addToRenderList(T,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&Ht.beginShadows();const et=b.state.shadowsArray;if(Kt.render(et,A,H),J===!0&&Ht.endShadows(),(tt&&w.hasRenderPass())===!1){const Gt=T.opaque,Ot=T.transmissive;if(b.setupLights(),H.isArrayCamera){const Yt=H.cameras;if(Ot.length>0)for(let Jt=0,oe=Yt.length;Jt<oe;Jt++){const ce=Yt[Jt];Yh(Gt,Ot,A,ce)}ht&&ie.render(A);for(let Jt=0,oe=Yt.length;Jt<oe;Jt++){const ce=Yt[Jt];qh(T,A,ce,ce.viewport)}}else Ot.length>0&&Yh(Gt,Ot,A,H),ht&&ie.render(A),qh(T,A,H)}$!==null&&O===0&&(ot.updateMultisampleRenderTarget($),ot.updateRenderTargetMipmap($)),tt&&w.end(C),A.isScene===!0&&A.onAfterRender(C,A,H),Q.resetDefaultState(),it=-1,lt=null,M.pop(),M.length>0?(b=M[M.length-1],ot.setTextureUnits(b.state.textureUnits),J===!0&&Ht.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,U!==null&&U.renderEnd()};function jn(A,H,at,tt){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(B)){tt&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nt);const Gt=pt.update(A),Ot=A.material;Ot.visible&&T.push(A,Gt,Ot,at,ft.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(B))){const Gt=pt.update(A),Ot=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ft.copy(Gt.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(nt)),Array.isArray(Ot)){const Yt=Gt.groups;for(let Jt=0,oe=Yt.length;Jt<oe;Jt++){const ce=Yt[Jt],Zt=Ot[ce.materialIndex];Zt&&Zt.visible&&T.push(A,Gt,Zt,at,ft.z,ce,H)}}else Ot.visible&&T.push(A,Gt,Ot,at,ft.z,null,H)}}const zt=A.children;for(let Gt=0,Ot=zt.length;Gt<Ot;Gt++)jn(zt[Gt],H,at,tt)}function qh(A,H,at,tt){const{opaque:et,transmissive:zt,transparent:Gt}=A;b.setupLightsView(at),J===!0&&Ht.setGlobalState(C.clippingPlanes,at),tt&&y.viewport(ut.copy(tt)),et.length>0&&oa(et,H,at),zt.length>0&&oa(zt,H,at),Gt.length>0&&oa(Gt,H,at),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Yh(A,H,at,tt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[tt.id]===void 0){const Zt=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[tt.id]=new pn(1,1,{generateMipmaps:!0,type:Zt?Bn:rn,minFilter:Un,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}const zt=b.state.transmissionRenderTarget[tt.id],Gt=tt.viewport||ut;zt.setSize(Gt.z*C.transmissionResolutionScale,Gt.w*C.transmissionResolutionScale);const Ot=C.getRenderTarget(),Yt=C.getActiveCubeFace(),Jt=C.getActiveMipmapLevel();C.setRenderTarget(zt),C.getClearColor(Mt),ct=C.getClearAlpha(),ct<1&&C.setClearColor(16777215,.5),C.clear(),ht&&ie.render(at);const oe=C.toneMapping;C.toneMapping=On;const ce=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),b.setupLightsView(tt),J===!0&&Ht.setGlobalState(C.clippingPlanes,tt),oa(A,at,tt),ot.updateMultisampleRenderTarget(zt),ot.updateRenderTargetMipmap(zt),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let me=0,Fe=H.length;me<Fe;me++){const we=H[me],{object:ye,geometry:Je,material:kt,group:en}=we;if(kt.side===ze&&ye.layers.test(tt.layers)){const he=kt.side;kt.side=qe,kt.needsUpdate=!0,Zh(ye,at,tt,Je,kt,en),kt.side=he,kt.needsUpdate=!0,Zt=!0}}Zt===!0&&(ot.updateMultisampleRenderTarget(zt),ot.updateRenderTargetMipmap(zt))}C.setRenderTarget(Ot,Yt,Jt),C.setClearColor(Mt,ct),ce!==void 0&&(tt.viewport=ce),C.toneMapping=oe}function oa(A,H,at){const tt=H.isScene===!0?H.overrideMaterial:null;for(let et=0,zt=A.length;et<zt;et++){const Gt=A[et],{object:Ot,geometry:Yt,group:Jt}=Gt;let oe=Gt.material;oe.allowOverride===!0&&tt!==null&&(oe=tt),Ot.layers.test(at.layers)&&Zh(Ot,H,at,Yt,oe,Jt)}}function Zh(A,H,at,tt,et,zt){U!==null&&et.isNodeMaterial&&U.setObject(A,et),A.onBeforeRender(C,H,at,tt,et,zt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),et.onBeforeRender(C,H,at,tt,A,zt),et.transparent===!0&&et.side===ze&&et.forceSinglePass===!1?(et.side=qe,et.needsUpdate=!0,C.renderBufferDirect(at,H,tt,et,A,zt),et.side=Ri,et.needsUpdate=!0,C.renderBufferDirect(at,H,tt,et,A,zt),et.side=ze):C.renderBufferDirect(at,H,tt,et,A,zt),A.onAfterRender(C,H,at,tt,et,zt)}function ca(A,H,at){H.isScene!==!0&&(H=gt);const tt=Y.get(A),et=b.state.lights,zt=b.state.shadowsArray,Gt=et.state.version,Ot=At.getParameters(A,et.state,zt,H,at,b.state.lightProbeGridArray),Yt=At.getProgramCacheKey(Ot);let Jt=tt.programs;tt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,tt.fog=H.fog;const oe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;tt.envMap=St.get(A.envMap||tt.environment,oe),tt.envMapRotation=tt.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",jt),Jt=new Map,tt.programs=Jt);let ce=Jt.get(Yt);if(ce!==void 0){if(tt.currentProgram===ce&&tt.lightsStateVersion===Gt)return $h(A,Ot),ce}else Ot.uniforms=At.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,at,Ot),A.onBeforeCompile(Ot,C),ce=At.acquireProgram(Ot,Yt),Jt.set(Yt,ce),tt.uniforms=Ot.uniforms;const Zt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=Ht.uniform),$h(A,Ot),tt.needsLights=$p(A),tt.lightsStateVersion=Gt,tt.needsLights&&(Zt.ambientLightColor.value=et.state.ambient,Zt.lightProbe.value=et.state.probe,Zt.sunLights.value=et.state.sun,Zt.sunLightShadows.value=et.state.sunShadow,Zt.directionalLights.value=et.state.directional,Zt.directionalLightShadows.value=et.state.directionalShadow,Zt.spotLights.value=et.state.spot,Zt.spotLightShadows.value=et.state.spotShadow,Zt.rectAreaLights.value=et.state.rectArea,Zt.ltc_1.value=et.state.rectAreaLTC1,Zt.ltc_2.value=et.state.rectAreaLTC2,Zt.pointLights.value=et.state.point,Zt.pointLightShadows.value=et.state.pointShadow,Zt.hemisphereLights.value=et.state.hemi,Zt.sunShadowMatrix.value=et.state.sunShadowMatrix,Zt.sunShadowCascade.value=et.state.sunShadowCascade,Zt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Zt.spotLightMatrix.value=et.state.spotLightMatrix,Zt.spotLightMap.value=et.state.spotLightMap,Zt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.lightProbeGrid=b.state.lightProbeGridArray.length>0,tt.currentProgram=ce,tt.uniformsList=null,ce}function Jh(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=ro.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function $h(A,H){const at=Y.get(A);at.outputColorSpace=H.outputColorSpace,at.batching=H.batching,at.batchingColor=H.batchingColor,at.instancing=H.instancing,at.instancingColor=H.instancingColor,at.instancingMorph=H.instancingMorph,at.skinning=H.skinning,at.morphTargets=H.morphTargets,at.morphNormals=H.morphNormals,at.morphColors=H.morphColors,at.morphTargetsCount=H.morphTargetsCount,at.numClippingPlanes=H.numClippingPlanes,at.numIntersection=H.numClipIntersection,at.vertexAlphas=H.vertexAlphas,at.vertexTangents=H.vertexTangents,at.toneMapping=H.toneMapping}function Yp(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let at=0,tt=A.length;at<tt;at++){const et=A[at];if(et.texture!==null&&et.boundingBox.containsPoint(v))return et}return null}function Zp(A,H,at,tt,et){H.isScene!==!0&&(H=gt),ot.resetTextureUnits();const zt=H.fog,Gt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?H.environment:null,Ot=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:le.workingColorSpace,Yt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Jt=St.get(tt.envMap||Gt,Yt),oe=tt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ce=!!at.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Zt=!!at.morphAttributes.position,me=!!at.morphAttributes.normal,Fe=!!at.morphAttributes.color;let we=On;tt.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(we=C.toneMapping);const ye=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Je=ye!==void 0?ye.length:0,kt=Y.get(tt),en=b.state.lights;if(J===!0&&(X===!0||A!==lt)){const Se=A===lt&&tt.id===it;Ht.setState(tt,A,Se)}let he=!1;tt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==en.state.version||kt.outputColorSpace!==Ot||et.isBatchedMesh&&kt.batching===!1||!et.isBatchedMesh&&kt.batching===!0||et.isBatchedMesh&&kt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&kt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&kt.instancing===!1||!et.isInstancedMesh&&kt.instancing===!0||et.isSkinnedMesh&&kt.skinning===!1||!et.isSkinnedMesh&&kt.skinning===!0||et.isInstancedMesh&&kt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&kt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&kt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&kt.instancingMorph===!1&&et.morphTexture!==null||kt.envMap!==Jt||tt.fog===!0&&kt.fog!==zt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ht.numPlanes||kt.numIntersection!==Ht.numIntersection)||kt.vertexAlphas!==oe||kt.vertexTangents!==ce||kt.morphTargets!==Zt||kt.morphNormals!==me||kt.morphColors!==Fe||kt.toneMapping!==we||kt.morphTargetsCount!==Je||!!kt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,kt.__version=tt.version);let Sn=kt.currentProgram;he===!0&&(Sn=ca(tt,H,et),U&&tt.isNodeMaterial&&U.onUpdateProgram(tt,Sn,kt));let Xn=!1,gi=!1,ds=!1;const ve=Sn.getUniforms(),De=kt.uniforms;if(y.useProgram(Sn.program)&&(Xn=!0,gi=!0,ds=!0),tt.id!==it&&(it=tt.id,gi=!0),kt.needsLights){const Se=Yp(b.state.lightProbeGridArray,et);kt.lightProbeGrid!==Se&&(kt.lightProbeGrid=Se,gi=!0)}if(Xn||lt!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ve.setValue(L,"projectionMatrix",A.projectionMatrix),ve.setValue(L,"viewMatrix",A.matrixWorldInverse);const xi=ve.map.cameraPosition;xi!==void 0&&xi.setValue(L,W.setFromMatrixPosition(A.matrixWorld)),E.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ve.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),lt!==A&&(lt=A,gi=!0,ds=!0)}if(kt.needsLights&&(en.state.sunShadowMap.length>0&&ve.setValue(L,"sunShadowMap",en.state.sunShadowMap,ot),en.state.directionalShadowMap.length>0&&ve.setValue(L,"directionalShadowMap",en.state.directionalShadowMap,ot),en.state.spotShadowMap.length>0&&ve.setValue(L,"spotShadowMap",en.state.spotShadowMap,ot),en.state.pointShadowMap.length>0&&ve.setValue(L,"pointShadowMap",en.state.pointShadowMap,ot)),et.isSkinnedMesh){ve.setOptional(L,et,"bindMatrix"),ve.setOptional(L,et,"bindMatrixInverse");const Se=et.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ve.setValue(L,"boneTexture",Se.boneTexture,ot))}et.isBatchedMesh&&(ve.setOptional(L,et,"batchingTexture"),ve.setValue(L,"batchingTexture",et._matricesTexture,ot),ve.setOptional(L,et,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",et._indirectTexture,ot),ve.setOptional(L,et,"batchingColorTexture"),et._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",et._colorsTexture,ot));const _i=at.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&k.update(et,at,Sn),(gi||kt.receiveShadow!==et.receiveShadow)&&(kt.receiveShadow=et.receiveShadow,ve.setValue(L,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&H.environment!==null&&(De.envMapIntensity.value=H.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=nb()),gi){if(ve.setValue(L,"toneMappingExposure",C.toneMappingExposure),kt.needsLights&&Jp(De,ds),zt&&tt.fog===!0&&Wt.refreshFogUniforms(De,zt),Wt.refreshMaterialUniforms(De,tt,Z,D,b.state.transmissionRenderTarget[A.id]),kt.needsLights&&kt.lightProbeGrid){const Se=kt.lightProbeGrid;De.probesSH.value=Se.texture,De.probesMin.value.copy(Se.boundingBox.min),De.probesMax.value.copy(Se.boundingBox.max),De.probesResolution.value.copy(Se.resolution)}ro.upload(L,Jh(kt),De,ot)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ro.upload(L,Jh(kt),De,ot),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ve.setValue(L,"center",et.center),ve.setValue(L,"modelViewMatrix",et.modelViewMatrix),ve.setValue(L,"normalMatrix",et.normalMatrix),ve.setValue(L,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){const Se=tt.uniformsGroups;for(let xi=0,fs=Se.length;xi<fs;xi++){const Qh=Se[xi];q.update(Qh,Sn),q.bind(Qh,Sn)}}return Sn}function Jp(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function $p(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,H,at){const tt=Y.get(A);tt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Y.get(A.texture).__webglTexture=H,Y.get(A.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:at,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const at=Y.get(A);at.__webglFramebuffer=H,at.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,at=0){$=A,K=H,O=at;let tt=null,et=!1,zt=!1;if(A){const Ot=Y.get(A);if(Ot.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,Ot.__webglFramebuffer),ut.copy(A.viewport),Bt.copy(A.scissor),Pt=A.scissorTest,y.viewport(ut),y.scissor(Bt),y.setScissorTest(Pt),it=-1;return}else if(Ot.__webglFramebuffer===void 0)ot.setupRenderTarget(A);else if(Ot.__hasExternalTextures)ot.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const oe=A.depthTexture;if(Ot.__boundDepthTexture!==oe){if(oe!==null&&Y.has(oe)&&(A.width!==oe.image.width||A.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(A)}}const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(zt=!0);const Jt=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[H])?tt=Jt[H][at]:tt=Jt[H],et=!0):A.samples>0&&ot.useMultisampledRTT(A)===!1?tt=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?tt=Jt[at]:tt=Jt,ut.copy(A.viewport),Bt.copy(A.scissor),Pt=A.scissorTest}else ut.copy(bt).multiplyScalar(Z).floor(),Bt.copy(Dt).multiplyScalar(Z).floor(),Pt=Et;if(at!==0&&(tt=F),y.bindFramebuffer(L.FRAMEBUFFER,tt)&&y.drawBuffers(A,tt),y.viewport(ut),y.scissor(Bt),y.setScissorTest(Pt),et){const Ot=Y.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ot.__webglTexture,at)}else if(zt){const Ot=H;for(let Yt=0;Yt<A.textures.length;Yt++){const Jt=Y.get(A.textures[Yt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Yt,Jt.__webglTexture,at,Ot)}}else if(A!==null&&at!==0){const Ot=Y.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,at)}it=-1};function Kh(A){const H=Y.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=E.textureFormatReadable(A.format),H.__typeReadable=E.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,at,tt,et,zt,Gt,Ot=0){if(!(A&&A.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt){y.bindFramebuffer(L.FRAMEBUFFER,Yt);try{const Jt=A.textures[Ot],oe=Jt.format,ce=Jt.type;A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ot);const Zt=Kh(Jt);if(Zt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-tt&&at>=0&&at<=A.height-et&&L.readPixels(H,at,tt,et,j.convert(oe),j.convert(ce),zt)}finally{const Jt=$!==null?Y.get($).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,H,at,tt,et,zt,Gt,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt)if(H>=0&&H<=A.width-tt&&at>=0&&at<=A.height-et){y.bindFramebuffer(L.FRAMEBUFFER,Yt);const Jt=A.textures[Ot],oe=Jt.format,ce=Jt.type;A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ot);const Zt=Kh(Jt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,me),L.bufferData(L.PIXEL_PACK_BUFFER,zt.byteLength,L.STREAM_READ),L.readPixels(H,at,tt,et,j.convert(oe),j.convert(ce),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Fe=$!==null?Y.get($).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Fe);const we=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await s0(L,we,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,zt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(me),L.deleteSync(we),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,at=0){const tt=Math.pow(2,-at),et=Math.floor(A.image.width*tt),zt=Math.floor(A.image.height*tt),Gt=H!==null?H.x:0,Ot=H!==null?H.y:0;ot.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,at,0,0,Gt,Ot,et,zt),y.unbindTexture()},this.copyTextureToTexture=function(A,H,at=null,tt=null,et=0,zt=0){let Gt,Ot,Yt,Jt,oe,ce,Zt,me,Fe;const we=A.isCompressedTexture?A.mipmaps[zt]:A.image;if(at!==null)Gt=at.max.x-at.min.x,Ot=at.max.y-at.min.y,Yt=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,oe=at.min.y,ce=at.isBox3?at.min.z:0;else{const De=Math.pow(2,-et);Gt=Math.floor(we.width*De),Ot=Math.floor(we.height*De),A.isDataArrayTexture?Yt=we.depth:A.isData3DTexture?Yt=Math.floor(we.depth*De):Yt=1,Jt=0,oe=0,ce=0}tt!==null?(Zt=tt.x,me=tt.y,Fe=tt.z):(Zt=0,me=0,Fe=0);const ye=j.convert(H.format),Je=j.convert(H.type);let kt;H.isData3DTexture?(ot.setTexture3D(H,0),kt=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ot.setTexture2DArray(H,0),kt=L.TEXTURE_2D_ARRAY):(ot.setTexture2D(H,0),kt=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const en=y.getParameter(L.UNPACK_ROW_LENGTH),he=y.getParameter(L.UNPACK_IMAGE_HEIGHT),Sn=y.getParameter(L.UNPACK_SKIP_PIXELS),Xn=y.getParameter(L.UNPACK_SKIP_ROWS),gi=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,we.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,we.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Jt),y.pixelStorei(L.UNPACK_SKIP_ROWS,oe),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ce);const ds=A.isDataArrayTexture||A.isData3DTexture,ve=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const De=Y.get(A),_i=Y.get(H),Se=Y.get(De.__renderTarget),xi=Y.get(_i.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,Se.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let fs=0;fs<Yt;fs++)ds&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(A).__webglTexture,et,ce+fs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(H).__webglTexture,zt,Fe+fs)),L.blitFramebuffer(Jt,oe,Gt,Ot,Zt,me,Gt,Ot,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(et!==0||A.isRenderTargetTexture||Y.has(A)){const De=Y.get(A),_i=Y.get(H);y.bindFramebuffer(L.READ_FRAMEBUFFER,N),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let Se=0;Se<Yt;Se++)ds?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,et,ce+Se):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,et),ve?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_i.__webglTexture,zt,Fe+Se):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_i.__webglTexture,zt),et!==0?L.blitFramebuffer(Jt,oe,Gt,Ot,Zt,me,Gt,Ot,L.COLOR_BUFFER_BIT,L.NEAREST):ve?L.copyTexSubImage3D(kt,zt,Zt,me,Fe+Se,Jt,oe,Gt,Ot):L.copyTexSubImage2D(kt,zt,Zt,me,Jt,oe,Gt,Ot);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ve?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(kt,zt,Zt,me,Fe,Gt,Ot,Yt,ye,Je,we.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(kt,zt,Zt,me,Fe,Gt,Ot,Yt,ye,we.data):L.texSubImage3D(kt,zt,Zt,me,Fe,Gt,Ot,Yt,ye,Je,we):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,zt,Zt,me,Gt,Ot,ye,Je,we.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,zt,Zt,me,we.width,we.height,ye,we.data):L.texSubImage2D(L.TEXTURE_2D,zt,Zt,me,Gt,Ot,ye,Je,we);y.pixelStorei(L.UNPACK_ROW_LENGTH,en),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Sn),y.pixelStorei(L.UNPACK_SKIP_ROWS,Xn),y.pixelStorei(L.UNPACK_SKIP_IMAGES,gi),zt===0&&H.generateMipmaps&&L.generateMipmap(kt),y.unbindTexture()},this.initRenderTarget=function(A){Y.get(A).__webglFramebuffer===void 0&&ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ot.setTextureCube(A,0):A.isData3DTexture?ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ot.setTexture2DArray(A,0):ot.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){K=0,O=0,$=null,y.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const ib=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Qo,AddEquation:Ki,AddOperation:uf,AdditiveAnimationBlendMode:hh,AdditiveBlending:Il,AgXToneMapping:eh,AlphaFormat:ch,AlwaysCompare:Tf,AlwaysDepth:co,AlwaysStencilFunc:vf,AmbientLight:gp,AnimationAction:Ap,AnimationClip:Yr,AnimationLoader:jg,AnimationMixer:C_,AnimationObjectGroup:A_,AnimationUtils:Yg,ArcCurve:kf,ArrayCamera:Sp,ArrowHelper:j_,AttachedBindMode:Dl,Audio:wp,AudioAnalyser:g_,AudioContext:Uh,AudioListener:f_,AudioLoader:l_,AxesHelper:tx,BackSide:qe,BasicDepthPacking:gf,BasicShadowMap:um,BatchedMesh:Uf,BezierInterpolant:lp,Bone:gh,BooleanKeyframeTrack:hs,Box2:Ep,Box3:tn,Box3Helper:K_,BoxGeometry:cn,BoxHelper:$_,BufferAttribute:xe,BufferGeometry:ee,BufferGeometryLoader:yp,ByteType:sh,Cache:Zn,Camera:sa,CameraHelper:J_,CanvasTexture:vc,CapsuleGeometry:yc,CatmullRomCurve3:Gf,CineonToneMapping:jl,CircleGeometry:Mc,ClampToEdgeWrapping:fn,Clock:U_,Color:Rt,ColorKeyframeTrack:Rh,ColorManagement:le,Compatibility:Qm,CompressedArrayTexture:ug,CompressedCubeTexture:dg,CompressedTexture:xc,CompressedTextureLoader:t_,ConeGeometry:os,ConstantAlphaFactor:cf,ConstantColorFactor:af,Controls:nx,CubeCamera:Mp,CubeDepthTexture:zf,CubeReflectionMapping:$n,CubeRefractionMapping:Ii,CubeTexture:jr,CubeTextureLoader:e_,CubeUVReflectionMapping:Ks,CubicBezierCurve:yh,CubicBezierCurve3:Hf,CubicInterpolant:op,CullFaceBack:Rl,CullFaceFront:Hd,CullFaceFrontBack:hm,CullFaceNone:Gd,Curve:Gn,CurvePath:Xf,CustomBlending:Xd,CustomToneMapping:th,CylinderGeometry:We,Cylindrical:O_,Data3DTexture:hc,DataArrayTexture:lc,DataTexture:mn,DataTextureLoader:n_,DataUtils:O0,DecrementStencilOp:Rm,DecrementWrapStencilOp:Pm,DefaultLoadingManager:dp,DepthFormat:Kn,DepthStencilFormat:Ei,DepthTexture:Zs,DetachedBindMode:df,DirectionalLight:Dh,DirectionalLightHelper:Z_,DiscreteInterpolant:cp,DodecahedronGeometry:Sc,DoubleSide:ze,DstAlphaFactor:tf,DstColorFactor:nf,DynamicCopyUsage:qm,DynamicDrawUsage:Vm,DynamicReadUsage:Hm,EdgesGeometry:Vf,EllipseCurve:bc,EqualCompare:Sf,EqualDepth:ho,EqualStencilFunc:Um,EquirectangularReflectionMapping:yr,EquirectangularRefractionMapping:Mr,Euler:zn,EventDispatcher:Vn,ExternalTexture:xh,ExtrudeGeometry:js,FileLoader:pi,Float16BufferAttribute:W0,Float32BufferAttribute:Ut,FloatType:on,Fog:fc,FogExp2:dc,FramebufferTexture:hg,FrontSide:Ri,Frustum:rs,FrustumArray:_c,GLBufferAttribute:D_,GLSL1:Zm,GLSL3:Ul,GreaterCompare:bf,GreaterDepth:fo,GreaterEqualCompare:oc,GreaterEqualDepth:uo,GreaterEqualStencilFunc:zm,GreaterStencilFunc:Om,GridHelper:q_,Group:Ci,HTMLTexture:fg,HalfFloatType:Bn,HemisphereLight:Lh,HemisphereLightHelper:X_,IcosahedronGeometry:ta,ImageBitmapLoader:c_,ImageLoader:Zr,ImageUtils:Rf,IncrementStencilOp:Cm,IncrementWrapStencilOp:Im,InstancedBufferAttribute:Ys,InstancedBufferGeometry:vp,InstancedInterleavedBuffer:L_,InstancedMesh:Qi,Int16BufferAttribute:G0,Int32BufferAttribute:H0,Int8BufferAttribute:z0,IntType:tc,InterleavedBuffer:mc,InterleavedBufferAttribute:ss,Interpolant:tr,InterpolateBezier:Nl,InterpolateDiscrete:Or,InterpolateLinear:Xo,InterpolateSmooth:no,InterpolationSamplingMode:Km,InterpolationSamplingType:$m,InvertStencilOp:Lm,KeepStencilOp:io,KeyframeTrack:Cn,LOD:Df,LatheGeometry:ea,Layers:uc,LessCompare:Mf,LessDepth:lo,LessEqualCompare:ac,LessEqualDepth:Hs,LessEqualStencilFunc:Fm,LessStencilFunc:Nm,Light:Fi,LightProbe:xp,LightShadow:Lc,Line:Di,Line3:V_,LineBasicMaterial:ln,LineCurve:Mh,LineCurve3:Wf,LineDashedMaterial:sp,LineLoop:Ff,LineSegments:Qn,LinearFilter:be,LinearInterpolant:Ch,LinearMipMapLinearFilter:gm,LinearMipMapNearestFilter:mm,LinearMipmapLinearFilter:Un,LinearMipmapNearestFilter:Sr,LinearSRGBColorSpace:zr,LinearToneMapping:Kl,LinearTransfer:Vr,Loader:gn,LoaderUtils:Vl,LoadingManager:Ph,LoopOnce:ff,LoopPingPong:mf,LoopRepeat:pf,MOUSE:cm,Material:Ze,MaterialBlending:dm,MaterialLoader:Dc,MathUtils:S0,Matrix2:Gl,Matrix3:se,Matrix4:te,MaxEquation:Jd,Mesh:Te,MeshBasicMaterial:kn,MeshDepthMaterial:Rc,MeshDistanceMaterial:Eh,MeshLambertMaterial:np,MeshMatcapMaterial:ip,MeshNormalMaterial:ep,MeshPhongMaterial:jf,MeshPhysicalMaterial:Bs,MeshStandardMaterial:Me,MeshToonMaterial:tp,MinEquation:Zd,MirroredRepeatWrapping:Nr,MixOperation:hf,MultiplyBlending:Ll,MultiplyOperation:$r,NearestFilter:Le,NearestMipMapLinearFilter:pm,NearestMipMapNearestFilter:fm,NearestMipmapLinearFilter:Fs,NearestMipmapNearestFilter:ih,NeutralToneMapping:nh,NeverCompare:yf,NeverDepth:oo,NeverStencilFunc:Dm,NoBlending:Jn,NoColorSpace:ci,NoNormalPacking:bm,NoToneMapping:On,NormalAnimationBlendMode:rc,NormalBlending:ks,NormalGAPacking:Tm,NormalRGPacking:wm,NotEqualCompare:wf,NotEqualDepth:po,NotEqualStencilFunc:Bm,NumberKeyframeTrack:Ic,Object3D:de,ObjectLoader:a_,ObjectSpaceNormalMap:xf,OctahedronGeometry:na,OneFactor:Kd,OneMinusConstantAlphaFactor:lf,OneMinusConstantColorFactor:of,OneMinusDstAlphaFactor:ef,OneMinusDstColorFactor:sf,OneMinusSrcAlphaFactor:$l,OneMinusSrcColorFactor:jd,OrthographicCamera:ra,PCFShadowMap:Vs,PCFSoftShadowMap:Wd,PMREMGenerator:Jo,Path:Hr,PerspectiveCamera:Xe,Plane:oi,PlaneGeometry:Hn,PlaneHelper:Q_,PointLight:mp,PointLightHelper:H_,Points:Of,PointsMaterial:_h,PolarGridHelper:Y_,PolyhedronGeometry:Ui,PositionalAudio:m_,PropertyBinding:ue,PropertyMixer:Tp,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:bh,Quaternion:Be,QuaternionKeyframeTrack:Pc,QuaternionLinearInterpolant:up,R11_EAC_Format:So,RED_GREEN_RGTC2_Format:Fr,RED_RGTC1_Format:Go,REVISION:Ko,RG11_EAC_Format:Ur,RGBADepthPacking:_f,RGBAFormat:je,RGBAIntegerFormat:sc,RGBA_ASTC_10x10_Format:Fo,RGBA_ASTC_10x5_Format:Do,RGBA_ASTC_10x6_Format:No,RGBA_ASTC_10x8_Format:Uo,RGBA_ASTC_12x10_Format:Oo,RGBA_ASTC_12x12_Format:Bo,RGBA_ASTC_4x4_Format:To,RGBA_ASTC_5x4_Format:Ao,RGBA_ASTC_5x5_Format:Eo,RGBA_ASTC_6x5_Format:Co,RGBA_ASTC_6x6_Format:Ro,RGBA_ASTC_8x5_Format:Io,RGBA_ASTC_8x6_Format:Po,RGBA_ASTC_8x8_Format:Lo,RGBA_BPTC_Format:zo,RGBA_ETC2_EAC_Format:Mo,RGBA_PVRTC_2BPPV1_Format:xo,RGBA_PVRTC_4BPPV1_Format:_o,RGBA_S3TC_DXT1_Format:wr,RGBA_S3TC_DXT3_Format:Tr,RGBA_S3TC_DXT5_Format:Ar,RGBDepthPacking:Mm,RGBFormat:lh,RGBIntegerFormat:_m,RGB_BPTC_SIGNED_Format:Vo,RGB_BPTC_UNSIGNED_Format:ko,RGB_ETC1_Format:vo,RGB_ETC2_Format:yo,RGB_PVRTC_2BPPV1_Format:go,RGB_PVRTC_4BPPV1_Format:mo,RGB_S3TC_DXT1_Format:br,RGDepthPacking:Sm,RGFormat:Pi,RGIntegerFormat:ic,RawShaderMaterial:Ah,Ray:Qs,Raycaster:N_,RectAreaLight:_p,RedFormat:Kr,RedIntegerFormat:Qr,ReinhardToneMapping:Ql,RenderObjectRefreshType:jm,RenderTarget:dh,RenderTarget3D:R_,RepeatWrapping:ns,ReplaceStencilOp:Em,ReverseSubtractEquation:Yd,RingGeometry:wc,SIGNED_R11_EAC_Format:bo,SIGNED_RED_GREEN_RGTC2_Format:Wo,SIGNED_RED_RGTC1_Format:Ho,SIGNED_RG11_EAC_Format:wo,SRGBColorSpace:Ee,SRGBTransfer:ge,Scene:pc,ShaderChunk:ae,ShaderLib:Nn,ShaderMaterial:En,ShadowMaterial:Th,Shape:cs,ShapeGeometry:Tc,ShapePath:ex,ShapeUtils:Fn,ShortType:rh,Skeleton:gc,SkeletonHelper:G_,SkinnedMesh:Nf,Source:T0,Sphere:Ye,SphereGeometry:ls,Spherical:F_,SphericalHarmonics3:Nh,SplineCurve:wh,SpotLight:pp,SpotLightHelper:k_,Sprite:Lf,SpriteMaterial:mh,SrcAlphaFactor:Jl,SrcAlphaSaturateFactor:rf,SrcColorFactor:Qd,StaticCopyUsage:Xm,StaticDrawUsage:cc,StaticReadUsage:Gm,StereoCamera:h_,StreamCopyUsage:Ym,StreamDrawUsage:km,StreamReadUsage:Wm,StringKeyframeTrack:us,SubtractEquation:qd,SubtractiveBlending:Pl,TOUCH:lm,TangentSpaceNormalMap:fi,TetrahedronGeometry:Ac,Texture:Re,TextureLoader:fp,TextureSource:hi,TextureUtils:ox,Timer:bp,TimestampQuery:Jm,TorusGeometry:ia,TorusKnotGeometry:Ec,Triangle:dn,TriangleFanDrawMode:ym,TriangleStripDrawMode:vm,TrianglesDrawMode:xm,TubeGeometry:Cc,UVMapping:jo,Uint16BufferAttribute:fh,Uint32BufferAttribute:ph,Uint8BufferAttribute:V0,Uint8ClampedBufferAttribute:k0,Uniform:Bh,UniformsGroup:P_,UniformsLib:Ft,UniformsUtils:Qf,UnsignedByteType:rn,UnsignedInt101111Type:oh,UnsignedInt248Type:Xs,UnsignedInt5999Type:ah,UnsignedIntType:An,UnsignedShort4444Type:ec,UnsignedShort5551Type:nc,UnsignedShortType:Ws,VSMShadowMap:Us,Vector2:vt,Vector3:I,Vector4:_e,VectorKeyframeTrack:Ih,VideoFrameTexture:lg,VideoTexture:Bf,WebGL3DRenderTarget:C0,WebGLArrayRenderTarget:E0,WebGLCoordinateSystem:yn,WebGLCubeRenderTarget:zh,WebGLRenderTarget:pn,WebGLRenderer:Op,WebGLUtils:Up,WebGPUCoordinateSystem:is,WebXRController:so,WireframeGeometry:$f,WrapAroundEnding:Br,ZeroCurvatureEnding:ji,ZeroFactor:$d,ZeroSlopeEnding:ts,ZeroStencilOp:Am,createCanvasElement:Ef,error:$t,getConsoleFunction:i0,log:Gr,setConsoleFunction:n0,warn:Nt,warnOnce:ui},Symbol.toStringTag,{value:"Module"}));function Ni(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new ee;let l=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}c.setIndex(d)}for(const h in r){const d=Pd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][u]);const p=Pd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Pd(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new xe(a,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){const _=h.getComponent(u,p);o.setComponent(u+d,p,_)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const aa=Math.PI/180,ql={gable:18,hip:20,mono:10,round:38,tent:40},sb=.4;function Ld([s,t]){const e=111320*Math.cos(t*aa),n=111320;return{toM:([i,r])=>[(i-s)*e,(r-t)*n],toLL:([i,r])=>[s+i/e,t+r/n]}}const Oi=s=>s.length>1&&s[0][0]===s.at(-1)[0]&&s[0][1]===s.at(-1)[1]?s.slice(0,-1):s;function Tn(s,t,e,n=0){const i=Oi(s);if(i.length<3||!(e>t))return null;const r=new cs(i.map(([o,c])=>new vt(o,c))),a=new js(r,{depth:e-t,bevelEnabled:!1});return a.translate(0,0,n+t),a.toNonIndexed()}function fe(s,t,e,n=6){const i=new I(...s),r=new I(...t),a=i.distanceTo(r);if(a<.001)return null;const o=new We(e,e,a,n,1,!0);return o.applyQuaternion(new Be().setFromUnitVectors(new I(0,1,0),r.clone().sub(i).normalize())),o.translate((i.x+r.x)/2,(i.y+r.y)/2,(i.z+r.z)/2),o.toNonIndexed()}function Yl(s){const t=[],e=[];for(const i of s){const[r,a,o]=[new I(...i[0]),new I(...i[1]),new I(...i[2])],c=new I().subVectors(a,r).cross(new I().subVectors(o,r)).normalize(),l=Math.abs(c.z)>.99?new I(1,0,0):new I(-c.y,c.x,0).normalize(),h=new I().crossVectors(c,l);for(let d=1;d<i.length-1;d++)for(const u of[i[0],i[d],i[d+1]]){t.push(...u);const f=new I(...u);e.push(f.dot(l),f.dot(h))}}const n=new ee;return n.setAttribute("position",new Ut(t,3)),n.setAttribute("uv",new Ut(e,2)),n.computeVertexNormals(),n}function Bp(s,t){var i,r;const e=Number.isFinite((i=t==null?void 0:t.roof)==null?void 0:i.pitch)?t.roof.pitch:ql[s]??ql.gable,n=Number.isFinite((r=t==null?void 0:t.roof)==null?void 0:r.eaves)?t.roof.eaves:sb;return{p:e*aa,o:n}}function zp(s,t,e,n){const i=s.reduce((_,g)=>[_[0]+g[0]/s.length,_[1]+g[1]/s.length],[0,0]),r=em([...s,s[0]],Number(n)),a=([_,g],m)=>[_*Math.cos(m)-g*Math.sin(m),_*Math.sin(m)+g*Math.cos(m)],o=s.map(_=>a([_[0]-i[0],_[1]-i[1]],-r)),c=o.map(_=>_[0]),l=o.map(_=>_[1]),h=(Math.max(...c)-Math.min(...c))/2,d=(Math.max(...l)-Math.min(...l))/2,u=(Math.max(...c)+Math.min(...c))/2,f=(Math.max(...l)+Math.min(...l))/2;return{c:i,a:r,L:h,W:d,P:(_,g,m)=>{const[x,S]=a([u+_,f+g],r);return[i[0]+x,i[1]+S,t+e+m]},rotP:a,mx:u,my:f}}const Vp=(s,t)=>(Math.atan2(s,t)*180/Math.PI+360)%360;function kp(s,t){const e=Vh(s)>0?1:-1;return s.map((n,i)=>{const r=s[(i+1)%s.length],a=Math.hypot(r[0]-n[0],r[1]-n[1])||1e-6,o=(r[0]-n[0])/a,c=(r[1]-n[1])/a,l=e*c,h=-e*o,[d,u]=e>0?[n,r]:[r,n],f=Vp(l,h);return{i,left:d,right:u,len:a,rx:(u[0]-d[0])/a,ry:(u[1]-d[1])/a,nx:l,ny:h,bearing:f,side:Cl(t,f)}})}function ao(s,t,e,n,i,r,a=.2,o=0){const c=e*s.len-(e<=0?a/2:0),l=n*s.len+(n>=1?a/2:0),h=(c+l)/2,d=s.left[0]+s.rx*h+s.nx*(o-a/2),u=s.left[1]+s.ry*h+s.ny*(o-a/2);return Ai(d,u,t+(i+r)/2,Math.atan2(s.ry,s.rx),l-c,r-i,a)}function Zl(s,t,e,n=[],i=.2,r=0){const a=[];let o=0;for(const c of[...n].sort((l,h)=>l.from-h.from)){const l=Math.min(e-.2,c.h??e-.4);c.from>o&&a.push(ao(s,t,o,c.from,0,e,i,r)),!c.gap&&l<e-.05&&a.push(ao(s,t,c.from,c.to,l,e,i,r)),o=c.to}return o<1&&a.push(ao(s,t,o,1,0,e,i,r)),a}const Pr=s=>((s==null?void 0:s.doors)??[]).filter(t=>t.bay);function rb(s,t,e){return ao(s,t,0,1,0,e)}function ab(s,t,{roofType:e,wallM:n=2.8,heightM:i=4,ridgeDeg:r,look:a}={}){var K;const o=Oi(s);if(o.length<3)return null;if(!e)return{walls:Tn(o,0,i,t),roof:Tn(o,i,i+.15,t),gableEnds:null,roofType:"flat"};const c=Math.max(1,Number(n)||2.8),l=a?kp(o,a):null,h=O=>{var $;return O?($=a==null?void 0:a.sides)==null?void 0:$[O]:null},d=O=>{var $;return!!(($=h(O))!=null&&$.open)},u=O=>{var $;return d(O)||((($=h(O))==null?void 0:$.h)??c)<c-.05},f=O=>{const $=h(O.side);return!!($&&($.open||$.h||$.mat||$.color||Pr($).length))};let p,_=[];if(l!=null&&l.some(f)){const O=l.filter($=>!f($)).map($=>rb($,t,c));p=O.length?Ni(O,!1):null;for(const $ of l.filter(f)){const it=h($.side);if(it.open)continue;const lt=Zl($,t,Math.min(c,it.h??c),Pr(it));_.push({mat:it.mat,color:it.color,geo:Ni(lt,!1)})}}else p=Tn(o,0,c,t);const{c:g,a:m,L:x,W:S,P:v,rotP:T,mx:b,my:R}=zp(o,t,c,r),M=t+c,{p:w,o:C}=Bp(e,a);if(e==="flat")return{walls:p,sideWalls:_,roof:Tn(o,c,c+.25,t),gableEnds:null,roofType:e};if(e==="round"){const O=(Number.isFinite((K=a==null?void 0:a.roof)==null?void 0:K.pitch)?a.roof.pitch:ql.round)*aa,$=(x+S)/2+C,it=$*Math.tan(O),lt=new os($,it,32,1,!0).toNonIndexed();lt.rotateX(Math.PI/2);const[ut,Bt]=T([b,R],m);lt.translate(g[0]+ut,g[1]+Bt,M+it/2-C*Math.tan(O));const Pt=new We($-C,$-C,c,32,1,!0).toNonIndexed();Pt.rotateX(Math.PI/2),Pt.translate(g[0]+ut,g[1]+Bt,t+c/2);const Mt=(ct,dt,D)=>{const Z=ct.attributes.uv;for(let st=0;st<Z.count;st++)Z.setXY(st,Z.getX(st)*dt,Z.getY(st)*D)};return Mt(Pt,2*Math.PI*($-C),c),Mt(lt,2*Math.PI*$,Math.hypot($,it)),{walls:Pt,roof:lt,gableEnds:null,roofType:e}}const P=-C*Math.tan(w),U=Vp(Math.cos(m),Math.sin(m)),F=[u(Cl(a,(U+180)%360)),u(Cl(a,U))];let N=[],V=[];if(e==="mono"){const O=2*S*Math.tan(w);N=[[v(-x-C,-S-C,P),v(x+C,-S-C,P),v(x+C,S+C,O+C*Math.tan(w)),v(-x-C,S+C,O+C*Math.tan(w))]],V=[F[0]?null:[v(-x,-S,0),v(-x,S,O),v(-x,S,0)],F[1]?null:[v(x,-S,0),v(x,S,0),v(x,S,O)],[v(-x,S,0),v(-x,S,O),v(x,S,O),v(x,S,0)]].filter(Boolean)}else if(e==="hip"){const O=S*Math.tan(w),$=Math.max(0,x-S);N=[[v(-x-C,-S-C,P),v(x+C,-S-C,P),v($,0,O),v(-$,0,O)],[v(x+C,S+C,P),v(-x-C,S+C,P),v(-$,0,O),v($,0,O)],[v(x+C,-S-C,P),v(x+C,S+C,P),v($,0,O)],[v(-x-C,S+C,P),v(-x-C,-S-C,P),v(-$,0,O)]]}else{const O=S*Math.tan(w);N=[[v(-x-C,-S-C,P),v(x+C,-S-C,P),v(x+C,0,O),v(-x-C,0,O)],[v(x+C,S+C,P),v(-x-C,S+C,P),v(-x-C,0,O),v(x+C,0,O)]],V=[F[0]?null:[v(-x,-S,0),v(-x,0,O),v(-x,S,0)],F[1]?null:[v(x,S,0),v(x,0,O),v(x,-S,0)]].filter(Boolean)}return{walls:p,sideWalls:_,roof:Yl(N),gableEnds:V.length?Yl(V):null,roofType:e}}function Ai(s,t,e,n,i,r,a){const o=new cn(i,a,r).toNonIndexed();return o.rotateZ(n),o.translate(s,t,e),o}function Dd(s,t,e,n,i,r,a){const o=new cn(i,a,r),c=o.attributes.uv,l=[[r,a],[r,a],[i,r],[i,r],[i,a],[i,a]];for(let d=0;d<6;d++)for(let u=0;u<4;u++){const f=d*4+u;c.setXY(f,c.getX(f)*l[d][0],c.getY(f)*l[d][1])}const h=o.toNonIndexed();return h.rotateZ(n),h.translate(s,t,e),h}const Vh=s=>s.reduce((t,e,n)=>{const i=s[(n+1)%s.length];return t+e[0]*i[1]-i[0]*e[1]},0)/2;function Gp(s,t){const e=Vh(s)>0?1:-1,n=(i,r)=>{const a=r[0]-i[0],o=r[1]-i[1],c=Math.hypot(a,o)||1;return[e*o/c,-e*a/c]};return s.map((i,r)=>{const a=n(s[(r-1+s.length)%s.length],i),o=n(i,s[(r+1)%s.length]),c=[a[0]+o[0],a[1]+o[1]],l=Math.hypot(...c)||1,h=Math.max(.3,(c[0]*o[0]+c[1]*o[1])/l);return[i[0]+c[0]/l*(t/h),i[1]+c[1]/l*(t/h)]})}function vr(s,t,e){const n=Oi(e);let i=!1,r=1/0;for(let a=0,o=n.length-1;a<n.length;o=a++){const[c,l]=n[a],[h,d]=n[o];l>t!=d>t&&s<(h-c)*(t-l)/(d-l)+c&&(i=!i);const u=h-c,f=d-l,p=u*u+f*f||1,_=Math.max(0,Math.min(1,((s-c)*u+(t-l)*f)/p));r=Math.min(r,Math.hypot(s-(c+_*u),t-(l+_*f)))}return i?0:r}function ob(s,t,e,n){const i=Oi(s);if(i.length<3)return null;if(n==="round"){const r=i.reduce((c,l)=>[c[0]+l[0]/i.length,c[1]+l[1]/i.length],[0,0]),a=Math.max(...i.map(c=>Math.hypot(c[0]-r[0],c[1]-r[1])))*.75,o=new We(a,a,e+.3,32).toNonIndexed();return o.rotateX(Math.PI/2),o.translate(r[0],r[1],t-(e+.3)/2+.02),o}return Tn(Gp(i,.06),-(e+.3),.02,t)}function Nd(s,t,e,n=.07){const i=new Hn(s.len,e).toNonIndexed();return i.rotateX(Math.PI/2),i.rotateZ(Math.atan2(s.ny,s.nx)+Math.PI/2),i.translate((s.left[0]+s.right[0])/2+s.nx*n,(s.left[1]+s.right[1])/2+s.ny*n,t+e/2),i}const cb="#3f5a4a",Ud="#4d5a63",wl="#8d877c",lb="#6b6f73",Fd="#9b9283",Lr=.3;function hb(s,t,{roofType:e,wallM:n=2.8,heightM:i=4,ridgeDeg:r,wallColor:a,roofColor:o,look:c}={}){var C,P,U,F,N,V,K,O,$,it,lt,ut,Bt,Pt;const l=Oi(s),h=[],d=[],u=(Mt,ct,dt)=>{dt&&h.push({cls:Mt,color:ct,geo:dt})};if(l.length<3||e==="tent"||a==="#6f7354")return{parts:h,facades:d};const f=e?Math.max(1,Number(n)||2.8):Math.max(2.5,Number(i)||4),p=kp(l,c),_=Mt=>Mt.side?c.sides[Mt.side]:null,g=p.some(Mt=>{var ct,dt;return((ct=_(Mt))==null?void 0:ct.open)||(((dt=_(Mt))==null?void 0:dt.h)??f)<f-.05}),m=(c==null?void 0:c.frame)??lb,x=((C=c==null?void 0:c.roof)==null?void 0:C.mat)==="thatch"||e==="round"?"thatch":((P=c==null?void 0:c.roof)==null?void 0:P.mat)==="canvas"?"canvas":((U=c==null?void 0:c.roof)==null?void 0:U.mat)==="tile"?"tile":"metal",S=((F=c==null?void 0:c.roof)==null?void 0:F.color)??o??"#8e959c",v=((N=c==null?void 0:c.plinth)==null?void 0:N.h)??.45,T=((V=c==null?void 0:c.plinth)==null?void 0:V.mat)==="stone"?"stone":((K=c==null?void 0:c.plinth)==null?void 0:K.mat)==="brick"?"brick":"concrete",b=p.some(Mt=>Pr(_(Mt)).length);if(e!=="round"&&((g||b)&&u("concrete",wl,Tn(l,0,.2,t)),g||u(T,((O=c==null?void 0:c.plinth)==null?void 0:O.color)??wl,b?Ni(p.flatMap(Mt=>Zl(Mt,t,v,Pr(_(Mt)).map(ct=>({...ct,gap:!0})),.26,.05)).filter(Boolean),!1):Tn(Gp(l,.05),0,v,t))),b)for(const Mt of p){const ct=_(Mt);if(!(ct!=null&&ct.open))for(const dt of Zl(Mt,t,Math.min(f,(ct==null?void 0:ct.h)??f),Pr(ct),.02,-.21))u("plaster","#ebe8de",dt)}const R=(Mt,ct,dt,D,Z,st)=>u("glass","#2a3138",Ai(Mt,ct,dt,D,Z,st,.05)),M=(Mt,ct,dt,D,Z,st,Ct=.09,bt=Ud)=>u("trim",bt,Ai(Mt,ct,dt,D,Z,st,Ct));if(e!=="round"){const Mt=p.reduce((dt,D)=>D.len>dt.len?D:dt,p[0]),ct=Math.max(1,Math.floor((f+.4)/3));for(const dt of p){const D=_(dt),Z=Math.atan2(dt.ry,dt.rx),st=(B,J)=>[dt.left[0]+dt.rx*dt.len*B+dt.nx*J,dt.left[1]+dt.ry*dt.len*B+dt.ny*J];if(D!=null&&D.open||D!=null&&D.h&&D.h<f-.05){const B=D.posts===0?1:D.posts?D.posts+1:Math.max(1,Math.ceil(dt.len/4.5));for(let nt=0;nt<=B;nt++){const[W,ft]=st(nt/B,-.12);M(W,ft,t+f/2,Z,.22,f,.22,m)}const[J,X]=st(.5,-.12);if(M(J,X,t+f-.15,Z,dt.len,.3,.22,m),D.open||D.photo){D.photo&&d.push({geo:Nd(dt,t,D.h??f),photo:D.photo});continue}}if(D!=null&&D.photo){d.push({geo:Nd(dt,t,Math.min(f,D.h??f)),photo:D.photo});continue}const Ct=Math.min(f,(D==null?void 0:D.h)??f);let bt,Dt;if(D)bt=D.doors??[],Dt=D.windows??[];else{if(dt.len<2.6||f<2.1)continue;const B=Math.max(1,Math.floor((dt.len-1.2)/3)),J=dt===Mt?Math.floor(B/2):-1;bt=J>=0?[{at:(J+.5)/B}]:[],Dt=[];for(let X=0;X<ct;X++)for(let nt=0;nt<B;nt++)X===0&&nt===J||Dt.push({at:(nt+.5)/B,sill:.95+X*3,w:dt.len>4?1.1:.8,...c!=null&&c.derelict?{kind:"shutter",color:"#24211d"}:{}})}const Et=bt.filter(B=>B.bay);for(const B of Et){const J=B.posts??Math.max(0,Math.ceil((B.to-B.from)*dt.len/6)-1),X=Math.min(Ct-.2,B.h??Ct-.4);for(let ft=1;ft<=J;ft++){const[gt,ht]=st(B.from+(B.to-B.from)*ft/(J+1),-.1);M(gt,ht,t+X/2,Z,.2,X,.2,m)}const[nt,W]=st((B.from+B.to)/2,.01);M(nt,W,t+X+.1,Z,(B.to-B.from)*dt.len,.2,.06,m)}Dt=Dt.filter(B=>!Et.some(J=>B.at>J.from-.02&&B.at<J.to+.02));for(const B of bt){if(B.bay)continue;const J=B.w??.95,X=Math.min(B.h??2.05,Ct-.1),[nt,W]=st(B.at,.02);u("trim",B.color??cb,Ai(nt,W,t+X/2,Z,J,X,.08));const[ft,gt]=st(B.at,.03);for(const[ht,_t,L,Vt]of[[-J/2-.04,X/2+.02,.08,X+.1],[J/2+.04,X/2+.02,.08,X+.1],[0,X+.04,J+.16,.08]])M(ft+dt.rx*ht,gt+dt.ry*ht,t+_t,Z,L,Vt,.1)}for(const B of Dt){const J=B.sill??.95,X=B.w??1.1,nt=Math.min(B.h??1.15,Ct-J-.25);if(nt<.3)continue;const W=t+J+nt/2,[ft,gt]=st(B.at,.02);B.kind==="shutter"?u("trim",B.color??"#5b4636",Ai(ft,gt,W,Z,X,nt,.06)):R(ft,gt,W,Z,X,nt);const[ht,_t]=st(B.at,.04),L=B.frame??Ud;for(const[E,y,z,Y]of[[-X/2,0,.07,nt+.07],[X/2,0,.07,nt+.07],[0,nt/2,X+.07,.07],[0,-nt/2,X+.07,.07]])M(ht+dt.rx*E,_t+dt.ry*E,W+y,Z,z,Y,.09,L);if(B.kind==="louvre")for(let E=1;E<Math.round(nt/.12);E++)M(ht,_t,W-nt/2+E*.12,Z,X,.025,.1,"#9aa3a8");else if(B.kind==="bars")for(let E=1;E<Math.round(X/.12);E++){const y=-X/2+E*.12;M(ht+dt.rx*y+dt.nx*.03,_t+dt.ry*y+dt.ny*.03,W,Z,.018,nt,.018,"#2b2e30")}else if(B.kind==="grid"){for(const E of[-1/6,1/6])M(ht+dt.rx*E*X,_t+dt.ry*E*X,W,Z,.025,nt,.07,L);for(const E of[-1/6,1/6])M(ht,_t,W+E*nt,Z,X,.025,.07,L)}else B.kind!=="shutter"&&M(ht,_t,W,Z,.04,nt,.09);const[Vt,wt]=st(B.at,.07);M(Vt,wt,W-nt/2-.05,Z,X+.2,.05,.16,"#b9b4aa")}}}for(const Mt of(c==null?void 0:c.veranda)??[]){const ct=p.filter(E=>Math.abs((E.bearing-Qp[Mt.side]+540)%360-180)<50).sort((E,y)=>y.len-E.len)[0];if(!ct)continue;const dt=Mt.wrap?Mt.depth/ct.len:0,D=(Mt.from??0)-((Mt.from??0)===0?dt:0),Z=(Mt.to??1)+((Mt.to??1)===1?dt:0),st=ct.len*(Z-D),Ct=Mt.mat==="stone",bt=Math.atan2(ct.ry,ct.rx),Dt=Mt.depth,Et=Dt*Math.tan(10*aa),B=f-.05,J=B-Et,X=(E,y)=>[ct.left[0]+ct.rx*ct.len*E+ct.nx*y,ct.left[1]+ct.ry*ct.len*E+ct.ny*y],nt=[...X(D,0),t+B],W=[...X(Z,0),t+B],ft=[...X(Z,Dt),t+J],gt=[...X(D,Dt),t+J];u(x,S,Yl([[nt,W,ft,gt]]));const[ht,_t]=X((D+Z)/2,Dt/2);Ct?u("stone",Mt.color??Fd,Dd(ht,_t,t+(Lr-1)/2,bt,st,1+Lr,Dt)):u("concrete",wl,Ai(ht,_t,t+.075,bt,st,.15,Dt));const L=Mt.posts||Math.max(2,Math.round(st/(Ct?2.5:3))+1),Vt=Ct?.4:.15,wt=Ct?Lr:0;for(let E=0;E<L;E++){const[y,z]=X(D+(Z-D)*(L===1?.5:.04+.92*E/(L-1)),Ct?Dt-.25:Dt-Vt);u(Ct?"stone":"trim",Mt.color??(Ct?Fd:"#d9d4c7"),(Ct?Dd:Ai)(y,z,t+wt+(J-wt)/2,bt,Vt,J-wt,Vt))}}const w=l.reduce((Mt,ct)=>[Mt[0]+ct[0]/l.length,Mt[1]+ct[1]/l.length],[0,0]);for(const Mt of(c==null?void 0:c.tanks)??[]){const ct=new We(Mt.d/2,Mt.d/2,Mt.h,20).toNonIndexed();ct.rotateX(Math.PI/2),ct.translate(w[0]+Mt.dx,w[1]+Mt.dy,t+Mt.h/2),u("plastic",Mt.color??"#2f3a34",ct)}for(const Mt of(c==null?void 0:c.drums)??[]){const ct=(Mt.along??90)*Math.PI/180,dt=Math.sin(ct),D=Math.cos(ct);for(let Z=0;Z<Mt.n;Z++){const st=Math.floor(Z/2),Ct=Z%2,bt=new We(.29,.29,.88,14).toNonIndexed();bt.rotateX(Math.PI/2),bt.translate(w[0]+Mt.dx+dt*st*.62+D*Ct*.62,w[1]+Mt.dy+D*st*.62-dt*Ct*.62,t+.15+.44),u("trim",Mt.color??"#2f7a45",bt)}}if(c!=null&&c.railing){const Mt=t+Math.max(f,Number(i)||f)+.05,ct=c.railing.h,dt=c.railing.color??"#8b3a2c";l.forEach((D,Z)=>{const st=l[(Z+1)%l.length],Ct=Math.hypot(st[0]-D[0],st[1]-D[1]),bt=Math.max(1,Math.round(Ct/1.5));for(let Dt=0;Dt<bt;Dt++){const Et=Dt/bt;u("trim",dt,fe([D[0]+(st[0]-D[0])*Et,D[1]+(st[1]-D[1])*Et,Mt],[D[0]+(st[0]-D[0])*Et,D[1]+(st[1]-D[1])*Et,Mt+ct],.025,6))}for(const Dt of[ct,ct/2])u("trim",dt,fe([D[0],D[1],Mt+Dt],[st[0],st[1],Mt+Dt],.022,6))})}if(["gable","hip","mono"].includes(e)){const{a:Mt,L:ct,W:dt,P:D}=zp(l,t,f,r),{p:Z,o:st}=Bp(e,c),Ct=-st*Math.tan(Z),bt=(($=c==null?void 0:c.roof)==null?void 0:$.fascia)??S,Dt=(it=c==null?void 0:c.roof)!=null&&it.fascia?"trim":x,Et=(X,nt,W)=>u(Dt,bt,fe(X,nt,W,6)),B=(X,nt,W,ft)=>{const[gt,ht,_t]=X(ft.u*2*nt,0,0),L=new cn(.6,.6,W+1).toNonIndexed();L.rotateZ(Mt),L.translate(gt,ht,_t+(W+1)/2),u(ft.mat==="plaster"?"plaster":"brick",ft.mat==="plaster"?"#e8e4d6":"#9c5a40",L)},J=(X,nt)=>{const W=Math.hypot(nt[0]-X[0],nt[1]-X[1]);W>.1&&u(Dt,bt,Ai((X[0]+nt[0])/2,(X[1]+nt[1])/2,(X[2]+nt[2])/2-.08,Math.atan2(nt[1]-X[1],nt[0]-X[0]),W,.2,.04))};if(e==="mono"){const X=2*dt*Math.tan(Z)+st*Math.tan(Z);J(D(-ct-st,-dt-st,Ct),D(ct+st,-dt-st,Ct)),J(D(-ct-st,dt+st,X),D(ct+st,dt+st,X)),Et(D(-ct-st,-dt-st,Ct),D(-ct-st,dt+st,X),.07),Et(D(ct+st,-dt-st,Ct),D(ct+st,dt+st,X),.07)}else if(e==="hip"){const X=dt*Math.tan(Z),nt=Math.max(0,ct-dt);for(const[W,ft]of[[[-1,-1],[1,-1]],[[1,-1],[1,1]],[[1,1],[-1,1]],[[-1,1],[-1,-1]]])J(D(W[0]*(ct+st),W[1]*(dt+st),Ct),D(ft[0]*(ct+st),ft[1]*(dt+st),Ct));nt>.05&&Et(D(-nt,0,X),D(nt,0,X),.09),c!=null&&c.chimney&&B(D,ct,X,c.chimney);for(const[W,ft]of[[-1,-1],[1,-1],[1,1],[-1,1]])Et(D(W*(ct+st),ft*(dt+st),Ct),D(W*nt,0,X),.07)}else{const X=dt*Math.tan(Z);J(D(-ct-st,-dt-st,Ct),D(ct+st,-dt-st,Ct)),J(D(-ct-st,dt+st,Ct),D(ct+st,dt+st,Ct)),Et(D(-ct-st,0,X+.03),D(ct+st,0,X+.03),.1),c!=null&&c.chimney&&B(D,ct,X,c.chimney);for(const nt of[-1,1])for(const W of[-1,1])Et(D(nt*(ct+st),W*(dt+st),Ct),D(nt*(ct+st),0,X),.07);if(g){const nt=Math.max(1,Math.round(2*ct/5));for(let W=0;W<=nt;W++){const ft=-ct+2*ct*W/nt;u("trim",m,fe(D(ft,-dt,-.18),D(ft,0,X-.2),.07,6)),u("trim",m,fe(D(ft,dt,-.18),D(ft,0,X-.2),.07,6)),u("trim",m,fe(D(ft,-dt,-.25),D(ft,dt,-.25),.05,6))}}if((lt=c==null?void 0:c.solar)!=null&&lt.n){const nt=Math.cos(Mt)>=0?1:-1,W=c.solar.n,ft=W>6?2:1,gt=Math.ceil(W/ft);for(let ht=0;ht<W;ht++){const _t=Math.floor(ht/gt),Vt=(ht%gt-(gt-1)/2)*1.08,wt=nt*dt*(ft===2?_t?.72:.32:.5),E=(dt-Math.abs(wt))*Math.tan(Z)+.09,y=new cn(1,1.65,.04).toNonIndexed();y.rotateX(-nt*Z),y.rotateZ(Mt),y.translate(...D(Vt,wt,E)),u("solar","#1d2a48",y)}}}}return{parts:h,facades:d,foundationCls:((ut=c==null?void 0:c.plinth)==null?void 0:ut.mat)==="stone"?"stone":((Bt=c==null?void 0:c.plinth)==null?void 0:Bt.mat)==="brick"?"brick":"concrete",foundationColor:(Pt=c==null?void 0:c.plinth)==null?void 0:Pt.color}}function ub(s=1){const t=new ta(1,1),e=t.attributes.position;let n=s;const i=()=>(n=n*16807%2147483647)/2147483647,r=Array.from({length:9},()=>new I(i()-.5,i()-.5,i()-.5).normalize()),a=new I;for(let o=0;o<e.count;o++){a.fromBufferAttribute(e,o);let c=1;for(const l of r)c+=.12*Math.max(0,a.dot(l))**3;a.multiplyScalar(c*(.92+.08*Math.sin(a.x*7+a.y*5))),e.setXYZ(o,a.x,a.y,a.z)}return t.computeVertexNormals(),t}function db(s,t,e,{maxDistM:n=1/0,max:i=1/0}={}){var o;const r=[];for(const c of s){const l=(c==null?void 0:c.properties)??{};if(l.kind!=="tree"||l.part!=="trunk"||((o=c.geometry)==null?void 0:o.type)!=="Polygon")continue;const h=Oi(c.geometry.coordinates[0]),d=h.reduce((_,g)=>[_[0]+g[0]/h.length,_[1]+g[1]/h.length],[0,0]),[u,f]=t.toM(d);if(Math.hypot(u,f)>n)continue;const p=(Number(l.heightM)||4)/.4;r.push({x:u,y:f,z:e(d),h:p,r:Math.min(5.5,Math.max(1.2,.18*p+.8))})}const a=fb(r);return a.sort((c,l)=>Math.hypot(c.x,c.y)-Math.hypot(l.x,l.y)),a.slice(0,i)}function fb(s){const t=[],n=new Map,i=(r,a)=>`${Math.floor(r/12)},${Math.floor(a/12)}`;for(const r of[...s].sort((a,o)=>o.h-a.h)){let a=null;const o=Math.floor(r.x/12),c=Math.floor(r.y/12);for(let d=-1;d<=1&&!a;d++)for(let u=-1;u<=1&&!a;u++)for(const f of n.get(`${o+d},${c+u}`)??[])if(Math.hypot(f.x-r.x,f.y-r.y)<.75*Math.max(f.r,r.r)){a=f;break}if(a){a.r=Math.min(8,Math.max(a.r,Math.hypot(a.x-r.x,a.y-r.y)+r.r*.8));continue}const l={...r};t.push(l);const h=i(l.x,l.y);n.has(h)||n.set(h,[]),n.get(h).push(l)}return t}function pb(s,t,e,[n,i],r){const a=tm(s,t,e)??[],o=new Map,c=(l,h)=>{h&&(o.has(l)||o.set(l,[]),o.get(l).push(h))};for(const l of a)l.step||c(l.color,Tn(l.ring.map(([h,d])=>[n+h,i+d]),l.base,l.top,r));for(const l of a.segments??[])c(l.color,fe([n+l.p[0],i+l.p[1],r+l.zp],[n+l.q[0],i+l.q[1],r+l.zq],Math.max(.006,l.w/2)));return o}function wn(s,t,e=.05){const n=new cs(s.map(([r,a])=>new vt(r,a))),i=new js(n,{depth:t-2*e,bevelEnabled:!0,bevelSize:e,bevelThickness:e,bevelSegments:2,curveSegments:4});return i.rotateX(Math.PI/2),i.translate(0,t/2-e,0),i.toNonIndexed()}const Dr="#1b1e22",Jr="#2a3138",ai="#c8ccd0",vn="#3a3d40",Hp="#eef1f3";function Wp(s,t="pickup"){const e=new Map,n=(h,d)=>{e.has(h)||e.set(h,[]),e.get(h).push(d)},i=(h,d,u,f,p,_,g)=>{const m=new cn(d,u,f).toNonIndexed();m.translate(p,_,g),n(h,m)},r=t==="wagon",a=1.79,o=2.55,c=-2.55;n(s,wn([[c,.62],[o-.08,.62],[o,.72],[o,1.08],[o-.12,1.14],[1.2,1.16],[.95,1.14],[c,1.1]],a,.05));const l=r?c+.05:0;if(n(s,wn([[l,1.1],[1.05,1.12],[.85,1.88],[l+.05,1.92],[l,1.86]],a-.06,.06)),n(Jr,wn([[l+.12,1.32],[1.02,1.32],[.86,1.8],[l+.16,1.82]],a-.02,.02)),r)for(const h of[-.3,-1.25])i(s,.08,a-.04,.5,h,0,1.57);else{i(Jr,.03,1.2,.36,-.005,0,1.6);for(const h of[-1,1])i(s,2.45,.05,.42,-1.3,h*(a/2-.03),1.3);i(s,.05,a-.06,.42,c+.03,0,1.3),i("#2a2a28",2.45,a-.1,.03,-1.3,0,1.11)}for(const h of[-1,1])i("#7a1a14",.04,.18,.24,c-.01,h*.72,.9);i(vn,.04,1,.32,o+.005,0,.92);for(const h of[-1,1]){const d=new We(.09,.09,.05,16).toNonIndexed();d.rotateZ(Math.PI/2),d.translate(o+.01,h*.66,.93),n(Hp,d),i("#c98a2a",.03,.12,.05,o+.01,h*.66,.78)}i(vn,.16,a+.06,.18,o+.07,0,.6),i(vn,.12,a+.02,.16,c-.06,0,.6);for(const h of[-1,1])n(vn,fe([o+.12,h*.55,.68],[o+.12,h*.55,1.02],.025,6));n(vn,fe([o+.12,-.6,1.02],[o+.12,.6,1.02],.025,6));for(const h of[-1,1])i(vn,.08,.2,.16,.95,h*(a/2+.12),1.38);if(n(vn,fe([1,-.925,1],[.9,-.925,1.98],.045,8)),r){for(const h of[-1,1])n(vn,fe([-2.3,h*.78,2],[.7,h*.78,2],.02,6));for(let h=-2.2;h<=.7;h+=.5)n(vn,fe([h,-.78,2],[h,.78,2],.015,6))}for(const h of[-1.55,1.38])for(const d of[-1,1]){const u=new We(.5,.5,.1,18,1,!0,0,Math.PI).toNonIndexed();u.rotateX(Math.PI/2),u.rotateY(Math.PI/2),u.rotateZ(Math.PI/2),u.translate(h,d*(a/2+.02),.42),n(vn,u);const f=new We(.39,.39,.26,24).toNonIndexed();f.translate(h,d*.78,.39),n(Dr,f);const p=new We(.2,.2,.28,16).toNonIndexed();p.translate(h,d*.78,.39),n(ai,p)}return e}function to(s,t,e=.85,n=1.05){const i=new ea(s.map(([l,h])=>new vt(h,l)).reverse(),24).toNonIndexed();i.rotateZ(-Math.PI/2),i.scale(1,e,n);const r=i.attributes.position;for(let l=0;l<r.count;l++)r.setZ(l,r.getZ(l)+t(r.getX(l)));i.computeVertexNormals();const a=i.attributes.uv,o=Math.max(...s.map(([,l])=>l)),c=Math.abs(s[0][0]-s.at(-1)[0]);for(let l=0;l<a.count;l++)a.setXY(l,a.getX(l)*2*Math.PI*o,a.getY(l)*c);return i}function mb(s,t="c206",e="plain"){const n=new Map,i=(h,d)=>{n.has(h)||n.set(h,[]),n.get(h).push(d)},r=e==="camo"?`camo|${s}`:s,a=e==="zebra"?`zebra|${s}`:r,o=(h,d,u,f,p)=>{const _=new We(f,f,p,18).toNonIndexed();_.translate(h,d,u),i(Dr,_)},c=(h,d,u,f)=>{const p=new os(.16,.36,16).toNonIndexed();p.rotateZ(-Math.PI/2),p.translate(h+.15,0,d),i(vn,p);for(let _=0;_<u;_++){const g=new cn(.04,.13,f).toNonIndexed();g.translate(0,0,f/2),g.rotateX(.35+_*2*Math.PI/u),g.translate(h,0,d),i(vn,g)}};if(t==="bathawk"){i(r,to([[1.6,0],[1.5,.25],[1.2,.45],[.6,.56],[0,.56],[-.6,.45],[-1.1,.25],[-1.25,0]],()=>1.05,.95,1)),i(Jr,wn([[.15,1.3],[1.3,1.3],[.95,1.72],[.1,1.78]],.95,.03)),i(r,to([[1.45,0],[1.35,.18],[.9,.24],[.4,.2],[.3,0]],()=>2,1,1)),i(ai,fe([.6,0,1.6],[.7,0,1.85],.06,6)),c(1.5,2,3,.85),i(r,wn([[-.35,2.2],[1.15,2.2],[1.15,2.33],[-.35,2.3]],9.6,.04));for(const h of[-1,1])i(Dr,fe([.4,h*.45,.75],[.5,h*2.5,2.2],.035,8)),i(Dr,fe([-.2,h*.3,1.55],[-.2,h*.3,2.2],.03,6));i(ai,fe([-1,0,1.45],[-4.25,0,1.75],.075,10)),i(r,wn([[-4.35,1.72],[-3.65,1.72],[-3.75,1.8],[-4.35,1.8]],2.8,.025)),i(r,wn([[-4.45,1.72],[-3.7,1.72],[-4,2.65],[-4.45,2.65]],.08,.015));for(const h of[-1,1])i(ai,fe([-.1,h*.3,.75],[-.2,h*.9,.2],.03,6)),o(-.2,h*.95,.21,.21,.12);return i(ai,fe([1.2,0,.75],[1.25,0,.18],.03,6)),o(1.25,0,.17,.17,.1),n}const l=h=>1.25+Math.max(0,Math.min(1,(h+2.6)/3.5))*.25;i(r,to([[4.25,0],[4.15,.2],[3.9,.42],[3.3,.55],[2.4,.66],[1.2,.7],[.2,.66],[-.8,.54],[-.8,0]],l)),i(a,to([[-.8,0],[-.8,.54],[-1.2,.48],[-2.6,.3],[-3.9,.16],[-4.35,.08],[-4.4,0]],l)),i(Jr,wn([[.15,1.62],[2.15,1.62],[2.45,2],[.3,2.04]],1.2,.03)),i(r,wn([[-.15,2.18],[1.45,2.18],[1.45,2.36],[-.15,2.32]],t==="c182"?11:10.9,.04));for(const h of[-1,1])i(ai,fe([.6,h*.5,1.15],[.7,h*2.7,2.18],.045,8));i(a,wn([[-4.3,1.5],[-3.4,1.5],[-3.55,1.58],[-4.3,1.58]],3.6,.03)),i(a,wn([[-4.45,1.5],[-3.35,1.5],[-3.95,2.85],[-4.45,2.85]],.1,.02)),e==="zebra"&&i("#2b2e30",wn([[2.2,1.5],[3.9,1.48],[3.9,1.56],[2.2,1.58]],1.24,.01)),c(4.25,1.5,2,1.05);for(const h of[-1,1])i(ai,fe([.4,h*.35,1],[.25,h*1.25,.32],.035,6)),o(.25,h*1.3,.3,.3,.16);return i(ai,fe([3,0,1.05],[3.05,0,.27],.04,6)),o(3.05,0,.25,.25,.13),n}function gb(s,t,[e,n],i){if(s==="vehicle"||s==="aircraft"){const l=/^#[0-9a-f]{6}$/i.test((t==null?void 0:t.bodyColor)??"")?t.bodyColor:s==="vehicle"?"#eeeee8":"#f1f1ec",h=s==="vehicle"?Wp(l,(t==null?void 0:t.model)==="wagon"?"wagon":"pickup"):mb(l,t==null?void 0:t.model,t==null?void 0:t.livery),d=(90-(Number(t==null?void 0:t.headingDeg)||0))*aa;for(const u of h.values())for(const f of u)f.rotateZ(d),f.translate(e,n,i);return h}const{parts:r,segments:a}=jp(s,t),o=new Map,c=(l,h)=>{h&&(o.has(l)||o.set(l,[]),o.get(l).push(h))};for(const l of r)c(l.color,Tn(l.ring.map(([h,d])=>[e+h,n+d]),l.base,l.top,i));for(const l of a)c(l.color,fe([e+l.p[0],n+l.p[1],i+l.zp],[e+l.q[0],n+l.q[1],i+l.zq],Math.max(.02,l.w/2)));return o}function _b(s){const t=s.filter(Boolean).map(e=>{const n=e.index?e.toNonIndexed():e;n.attributes.uv||n.setAttribute("uv",new Ut(new Float32Array(n.attributes.position.count*2),2));for(const i of Object.keys(n.attributes))["position","normal","uv"].includes(i)||n.deleteAttribute(i);return n.attributes.normal||n.computeVertexNormals(),n});return t.length?Ni(t,!1):null}function xb({shape:s="ring",sizeM:t=4,widthM:e=2.5,wallM:n=1.1,headingDeg:i=0,thicknessM:r=.5}={}){const a=[],o=Math.max(1,Math.round(n/.13)),c=.58,l=(90-i)*Math.PI/180;for(let h=0;h<o;h++){const d=.065+h*.125,u=h%2?.5:0;if(s==="rect"||s==="U"){const f=Math.cos(l+Math.PI/2),p=Math.sin(l+Math.PI/2),_=Math.cos(l),g=Math.sin(l),m=Math.max(1,Math.min(3,Math.round(r/.36)));for(let x=0;x<m;x++){const S=t/2-x*.36,v=e/2-x*.36;if(v<=.4)break;[[-S,v,S,v],[S,v,S,-v],[S,-v,-S,-v],[-S,-v,-S,v]].forEach(([b,R,M,w],C)=>{const P=Math.hypot(M-b,w-R),U=Math.max(1,Math.round(P/c));for(let F=0;F<U;F++){const N=(F+.5+(u-.25))/U,V=b+(M-b)*N,K=R+(w-R)*N;if(C===2&&(s==="U"||Math.abs(V)<.5))continue;const O=Math.atan2((M-b)*p+(w-R)*g,(M-b)*f+(w-R)*_);a.push({x:f*V+_*K,y:p*V+g*K,z:d,rot:O,course:h})}})}}else if(s==="line"||s==="L"||s==="trench"){const f=s==="L"?[[l,t*.6],[l+Math.PI/2,t*.4]]:[[l,t]];for(const[p,_]of f){const g=Math.max(1,Math.round(_/c));for(let m=0;m<g;m++){const x=(m+u)*c-_/2*(s==="L"?0:1);a.push({x:Math.cos(p)*x,y:Math.sin(p)*x,z:d,rot:p,course:h})}}}else{const f=h<o/2?[t/2-.2,t/2-.55]:[t/2-.35];for(const p of f){const _=Math.max(6,Math.round(2*Math.PI*p/c));for(let g=0;g<_;g++){const m=(g+u)/_*2*Math.PI;s==="horseshoe"&&Math.abs((m-l+3*Math.PI)%(2*Math.PI)-Math.PI)<Math.PI/6||a.push({x:Math.cos(m)*p,y:Math.sin(m)*p,z:d,rot:m+Math.PI/2,course:h})}}}}return a}function vb(s,{wallM:t=1,thicknessM:e=.5}={}){const n=[],i=Math.max(1,Math.round(t/.13)),r=.58,a=Math.max(1,Math.min(3,Math.round(e/.36)));for(let o=0;o<i;o++){const c=.065+o*.125,l=o%2?.5:0;for(let h=0;h+1<s.length;h++){const[d,u]=s[h],[f,p]=s[h+1],_=Math.hypot(f-d,p-u);if(_<.2)continue;const g=(f-d)/_,m=(p-u)/_,x=Math.max(1,Math.round(_/r));for(let S=0;S<a;S++){const v=(S-(a-1)/2)*.36;for(let T=0;T<x;T++){const b=Math.min(1,Math.max(0,(T+.5+(l-.25))/x));n.push({x:d+g*_*b-m*v,y:u+m*_*b+g*v,z:c,rot:Math.atan2(m,g),course:o})}}}}return n}function yb(){const s=new ls(1,20,12),t=s.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),i=t.getY(e),r=t.getZ(e);const a=.55;n=Math.sign(n)*Math.pow(Math.abs(n),a),i=Math.sign(i)*Math.pow(Math.abs(i),a),r=Math.max(-.55,r);const o=n>.6?1-(n-.6)*.45:1;t.setXYZ(e,n*.31,i*.18*o,r*.085*o)}return s.computeVertexNormals(),s}function Mb(s,t=7){const e=Oi(s),n=e.map(p=>p[0]),i=e.map(p=>p[1]),[r,a,o,c]=[Math.min(...n),Math.max(...n),Math.min(...i),Math.max(...i)];let l=t;const h=()=>(l=l*16807%2147483647)/2147483647,d=Math.abs(Vh(e)),u=Math.min(80,Math.round(d/90)),f=[];for(let p=0;f.length<u&&p<u*20;p++){const _=r+h()*(a-r),g=o+h()*(c-o);if(vr(_,g,e)>0)continue;const m=h();f.push({type:m<.22?"wreck":m<.6?"tyre":m<.78?"drum":"panel",x:_,y:g,rot:h()*Math.PI*2,tilt:(h()-.5)*.5})}return f}function Sb(s,t){const e=new Map,n=(r,a)=>{e.has(r)||e.set(r,[]),e.get(r).push(a)},i=["#5a3a28","#6b4630","#4a3426","#7a5236"];return s.forEach((r,a)=>{const o=t(r.x,r.y),c=(l,h=0)=>(l.rotateX(r.tilt*.3),l.rotateZ(r.rot),l.translate(r.x,r.y,o+h),l);if(r.type==="wreck"){for(const[l,h]of Wp(i[a%i.length]))if(!(l===Dr||l===ai||l===Hp))for(const d of h)n(l===Jr?"rubber|#1b1e22":`paint|${l===vn?"#2e2a26":i[a%i.length]}`,c(d,-.35))}else if(r.type==="tyre"){const l=new ia(.32,.12,8,18).toNonIndexed();a%3&&l.rotateX(Math.PI/2*.95),n("rubber|#1b1e22",c(l,a%3?.12:.44))}else if(r.type==="drum"){const l=new We(.29,.29,.88,14).toNonIndexed();a%2&&l.rotateZ(Math.PI/2),n(`paint|${["#2f5a3a","#6b3a28","#3a4a5a"][a%3]}`,c(l,a%2?.29:.44))}else{const l=new cn(1.4,.9,.03).toNonIndexed();l.rotateX(-Math.PI/2+.15),n(`paint|${i[(a+1)%i.length]}`,c(l,.05))}}),e}function bb({shape:s="ring",sizeM:t=4,widthM:e=2.5,headingDeg:n=0,roofM:i=1.9}={},[r,a],o){const c=(90-n)*Math.PI/180,l=s==="rect"||s==="U",h=(l?t:t*.8)/2,d=(l?e:t*.8)/2,u=Math.cos(c+Math.PI/2),f=Math.sin(c+Math.PI/2),p=Math.cos(c),_=Math.sin(c),g=(P,U,F)=>[r+u*P+p*U,a+f*P+_*U,o+F],m=[],x=P=>i+(P>0?.15:0);for(const[P,U]of[[-h,-d],[h,-d],[h,d],[-h,d],[0,-d],[0,d]])m.push(fe(g(P,U,-.3),g(P,U,x(U)-.04),.055,8));for(const P of[-d,d])m.push(fe(g(-h-.15,P,x(P)-.02),g(h+.15,P,x(P)-.02),.045,8));const S=Math.max(3,Math.round(2*h/.6));for(let P=0;P<=S;P++){const U=-h+2*h*P/S;m.push(fe(g(U,-d-.1,x(-d)+.03),g(U,d+.1,x(d)+.03),.03,6))}const v=14,T=10,b=.45,R=[],M=[],w=(P,U)=>{const F=P/v,N=U/T,V=-h-b+2*(h+b)*F,K=-d-b+2*(d+b)*N,O=Math.max(Math.abs(V)-h,Math.abs(K)-d,0),it=-.025*Math.abs(Math.sin(Math.PI*(V+h)/(2*h/S)))-.02*Math.sin(Math.PI*Math.min(1,Math.max(0,(K+d)/(2*d)))),lt=x(-d)+(x(d)-x(-d))*((K+d)/(2*d))+.1+(O>0?-.55*O:it);return{p:g(V,K,lt),t:[V,K]}};for(let P=0;P<v;P++)for(let U=0;U<T;U++){const F=[w(P,U),w(P+1,U),w(P+1,U+1),w(P,U+1)];for(const N of[0,2,1,0,3,2])R.push(...F[N].p),M.push(F[N].t[0]/1.5,F[N].t[1]/1.5)}const C=new ee;return C.setAttribute("position",new Ut(R,3)),C.setAttribute("uv",new Ut(M,2)),C.computeVertexNormals(),{poles:Ni(m.filter(Boolean),!1),tarp:C}}function wb(s,t,e){const n=[],i=[];let r=0;for(let o=0;o<s.length;o++){const[c,l]=s[o],[h,d]=s[(o+1)%s.length],u=Math.hypot(h-c,d-l),f=[[t,c,l,r],[e,c,l,r],[e,h,d,r+u],[t,h,d,r+u]];for(const p of[0,1,2,0,2,3])n.push(f[p][0],f[p][1],f[p][2]),i.push(f[p][0],f[p][3]);r+=u}for(const[o,c]of[[t,!0],[e,!1]])for(let l=1;l<s.length-1;l++){const h=c?[s[0],s[l+1],s[l]]:[s[0],s[l],s[l+1]];for(const[d,u]of h)n.push(o,d,u),i.push(d,u)}const a=new ee;return a.setAttribute("position",new Ut(n,3)),a.setAttribute("uv",new Ut(i,2)),a.computeVertexNormals(),a}function eo(s,t,e,n,i=1){const r=new ee;return r.setAttribute("position",new Ut([...s,...t,...e,...s,...e,...n],3)),r.setAttribute("uv",new Ut([0,0,i,0,i,i,0,0,i,i,0,i],2)),r.computeVertexNormals(),r}function Tb(s,t,{kind:e="safari",canvas:n="#6f6e55",fly:i="#66664e",deck:r="#5e5246",frontDeg:a=null}={}){const o=Oi(s);if(o.length<3)return[];let c=0,l=0;for(let Et=0;Et<o.length;Et++){const[B,J]=o[Et],[X,nt]=o[(Et+1)%o.length],W=Math.hypot(X-B,nt-J);W>l&&(l=W,c=Et)}const[h,d]=o[c],[u,f]=o[(c+1)%o.length],p=Math.atan2(f-d,u-h),_=Math.cos(p),g=Math.sin(p),m=o.reduce((Et,B)=>Et+B[0],0)/o.length,x=o.reduce((Et,B)=>Et+B[1],0)/o.length;let S=1/0,v=-1/0,T=1/0,b=-1/0;for(const[Et,B]of o){const J=(Et-m)*_+(B-x)*g,X=-(Et-m)*g+(B-x)*_;S=Math.min(S,J),v=Math.max(v,J),T=Math.min(T,X),b=Math.max(b,X)}const R=Math.max(2,v-S),M=Math.max(1.8,b-T),w=Number.isFinite(a)?(90-a)*Math.PI/180:p,C=[],P=(Et,B,J)=>{J&&(J.rotateZ(w),J.translate(m,x,0),C.push({cls:Et,color:B,geo:J.index?J.toNonIndexed():J}))},U=e==="safari",F=t+(U?.5:.02),N=1.85,V=2.85,K=.08,O=M/2,$=U?1.7:1.2;if(U){const Et=[[-R/2-.4,-O-.5],[R/2+$+.3,-O-.5],[R/2+$+.3,O+.5],[-R/2-.4,O+.5]];P("timber",r,Tn(Et,-.4,F-t,t)),P("timber","#4c4239",Tn([[R/2+$+.3,-O-.52],[R/2+$+.34,-O-.52],[R/2+$+.34,O+.52],[R/2+$+.3,O+.52]],-.35,F-t-.02,t));for(let B=0;B<3;B++){const J=R/2+$+.3+B*.32,X=F-t-(B+1)*.16;P("brick","#9a5a44",Tn([[J,-O-.2],[J+.32,-O-.2],[J+.32,-O+.9],[J,-O+.9]],-.3,Math.max(.05,X),t))}}const it=[[-O,0],[O,0],[O-K,N],[0,V],[-O+K,N]].map(([Et,B])=>[Et,F+B]);P("canvas",n,wb(it,-R/2,R/2));const lt="#2c2a22",ut=R/2+.05,Bt=F+2.15,Pt=(Et,B,J)=>eo(Et,B,J,J);P("paint",lt,Pt([ut,-.8,F+.01],[ut,.8,F+.01],[ut,0,Bt]));for(const Et of[-1,1])P("canvas","#8a8a6e",Pt([ut+.04,Et*.8,F+.01],[ut+.04,Et*1.05,F+.01],[ut+.04,Et*.05,Bt-.05]));const Mt=Math.max(1,Math.floor(R/2.2));for(const Et of[-1,1])for(let B=0;B<Mt;B++){const J=-R/2+R*(B+.5)/Mt,X=Et*(O-K*.5+.05);P("paint",lt,eo([J-.5,X,F+.8],[J+.5,X,F+.8],[J+.5,X,F+1.5],[J-.5,X,F+1.5])),P("canvas","#5d5d47",fe([J-.55,X+Et*.04,F+1.57],[J+.55,X+Et*.04,F+1.57],.06,8))}const ct=R/2+$,dt=-R/2-.45,D=O+.35,Z=F+N+.02,st=F+V+.14;for(const Et of[-1,1])P("fly",i,eo([dt,0,st],[ct,0,st],[ct,Et*D,Z],[dt,Et*D,Z],2)),P("fly",i,eo([dt,Et*D,Z],[ct,Et*D,Z],[ct,Et*D,Z-.3],[dt,Et*D,Z-.3]));const Ct="#7a7568";for(const Et of[-D+.05,D-.05])P("paint",Ct,fe([ct-.05,Et,F],[ct-.05,Et,Z-.02],.025,8));P("paint",Ct,fe([ct-.05,0,F],[ct-.05,0,st],.025,8));const bt="#8a8170",Dt=Math.max(2,Math.round(R/1.6));for(const Et of[-1,1])for(let B=0;B<=Dt;B++){const J=dt+(ct-dt)*B/Dt,X=[J,Et*D,Z-.28],nt=[J,Et*(D+1.2),t-.05];P("paint",bt,fe(X,nt,.006,4)),P("timber","#5a4632",fe([nt[0],nt[1],t-.15],[nt[0],nt[1],t+.1],.018,4))}return C}function Ab([s,t],e,{headingDeg:n=0,lengthM:i=5.2}={}){const r=new Map,a=(p,_)=>{_&&(r.has(p)||r.set(p,[]),r.get(p).push(_))},o=(90-n)*Math.PI/180,c=Math.cos(o),l=Math.sin(o),h=(p,_)=>[s+c*p,t+l*p,e+_],d=i/2,u=(p,_,g,m,x,S)=>{const v=new cn(_,g,m).toNonIndexed();v.rotateZ(o);const[T,b,R]=h(x,S);v.translate(T,b,R),a(p,v)};u("#3a3a38",.18,.18,1.2,-d,.5),u("#5a5a56",.45,.32,.4,-d-.35,1),u("#3a3a38",.12,.12,.9,d,.35),u("#3a3a38",.22,.16,.06,d,.82);const f=Math.round(i/.5);for(let p=0;p<f;p++){const _=-d+i*p/f,g=-d+i*(p+1)/f;a(p%2?"#e8e6df":"#b2231c",fe(h(_,.95),h(g,.95),.045,10))}return r}function Eb(s,t,e=.6,n=.8){const i=[];for(let r=0;r<s.length-1;r++){const[a,o]=s[r],[c,l]=s[r+1],h=Math.hypot(c-a,l-o);if(h<.2)continue;const d=new We(n/2,n/2,h+n*.5,8,1).toNonIndexed();d.scale(1,1,e/n*1.6),d.rotateZ(Math.atan2(l-o,c-a)-Math.PI/2),d.translate((a+c)/2,(o+l)/2,t((a+c)/2,(o+l)/2)+e*.3),i.push(d)}return i.length?Ni(i,!1):null}const Cb=["umbrella","round","pine","tall"];function Xp(s){let t=s>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Ti(s,t,e,n,i=6){const r=new I(...s),a=new I(...t),o=r.distanceTo(a),c=new We(n,e,o,i,1,!1);return c.applyQuaternion(new Be().setFromUnitVectors(new I(0,1,0),a.clone().sub(r).normalize())),c.translate((r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2),c.toNonIndexed()}function Rb(s,t,e,n){const i=new Hn(t,t);i.rotateX(e()*Math.PI),i.rotateZ(e()*Math.PI*2),i.translate(...s);const r=i.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,n%2*.5+r.getX(a)*.5,Math.floor(n/2)*.5+r.getY(a)*.5);return i.toNonIndexed()}function Ib(s,t=1){const e=Xp(t*9973+s.length),n=[],i=[],r=(a,o,c,l,h,d,u,f)=>{for(let p=0;p<u;p++){const _=e()*Math.PI*2,g=Math.acos(2*e()-1),m=.55+.45*Math.cbrt(e()),x=[a+l*m*Math.sin(g)*Math.cos(_),o+h*m*Math.sin(g)*Math.sin(_),c+d*m*Math.cos(g)];i.push(Rb(x,f*(.8+.4*e()),e,Math.floor(e()*4)))}};if(s==="pine"){n.push(Ti([0,0,0],[0,0,1],.016,.004,7));for(let a=.3;a<.97;a+=.08){const o=.24*(1-a)+.02;for(let c=0;c<4;c++){const l=e()*Math.PI*2,h=[Math.cos(l)*o,Math.sin(l)*o,a-.04];n.push(Ti([0,0,a],h,.005,.002,4)),r(h[0]*.7,h[1]*.7,a-.02,o*.6,o*.6,.035,6,.1)}}}else if(s==="umbrella"){n.push(Ti([0,0,0],[.02,0,.55],.03,.02,7));for(let a=0;a<6;a++){const o=a/6*Math.PI*2+e()*.6,c=[Math.cos(o)*.32,Math.sin(o)*.32,.85+e()*.08];n.push(Ti([.02,0,.55],c,.014,.006,5)),r(c[0],c[1],.9,.24,.24,.07,44,.13)}}else if(s==="tall"){n.push(Ti([0,0,0],[.01,.01,.95],.02,.006,7));for(let a=0;a<7;a++){const o=.45+a*.07,c=e()*Math.PI*2,l=[Math.cos(c)*.15,Math.sin(c)*.15,o+.08];n.push(Ti([0,0,o],l,.007,.003,4)),r(l[0],l[1],l[2],.11,.11,.1,22,.11)}}else{n.push(Ti([0,0,0],[0,0,.5],.03,.02,7));for(let a=0;a<5;a++){const o=a/5*Math.PI*2+e(),c=[Math.cos(o)*.22,Math.sin(o)*.22,.7+e()*.12];n.push(Ti([0,0,.45],c,.013,.006,5))}r(0,0,.7,.36,.36,.3,190,.14)}return{wood:Ni(n,!1),leaves:Ni(i,!1)}}function Od(s=512){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=Xp(42),i=s/2;for(let a=0;a<4;a++){const o=a%2*i,c=Math.floor(a/2)*i;for(let l=0;l<46;l++){const h=o+i*(.15+.7*n()),d=c+i*(.15+.7*n()),u=i*(.08+.07*n()),f=u*(a===3?.18:.42),p=95+Math.floor(n()*75);e.fillStyle=`rgb(${Math.floor(p*.82)},${p},${Math.floor(p*.6)})`,e.save(),e.translate(h,d),e.rotate(n()*Math.PI*2),e.beginPath(),e.ellipse(0,0,u,f,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(40,50,25,0.45)",e.lineWidth=1,e.beginPath(),e.moveTo(-u,0),e.lineTo(u,0),e.stroke(),e.restore()}}const r=new vc(t);return r.colorSpace=Ee,r.anisotropy=4,r}function Pb(s,t){return s>=24?t%3?"pine":"tall":s>=16?t%2?"round":"tall":t%3?"umbrella":"round"}const Lb="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}?blankTile=false",qp=Math.PI/180;function Db(s){const t=/^\d{4}-(\d{2})/.exec(String(s??""));if(!t)return"dry";const e=Number(t[1]);return e>=11||e<=4?"rainy":"dry"}function Bd(s,t,e){const n=2**e,i=(s+180)/360*n,r=(1-Math.asinh(Math.tan(t*qp))/Math.PI)/2*n;return[i,r]}function Nb(s,t,e,n=18){const i=400750167e-1*Math.cos(t*qp)/2**n,[r,a]=Bd(s,t,n),o=e/i,c=Math.floor(r-o),l=Math.floor(a-o),h=Math.floor(r+o)-c+1,d=Math.floor(a+o)-l+1;return{z:n,x0:c,y0:l,nx:h,ny:d,toPx:([f,p])=>{const[_,g]=Bd(f,p,n);return[(_-c)*256,(g-l)*256]},mPerPx:i/256}}function Ub(s,t,e,n="dry"){const i=(s-t)/255,r=(s+t+e)/765,[a,o]=n==="rainy"?[.22,.08]:[.03,.07],c=Math.min(1,Math.max(0,(i-a)/o));return r<.12?0:c}function Fb(s){return new Promise(t=>{const e=new Image;e.crossOrigin="anonymous",e.onload=()=>t(e),e.onerror=()=>t(null),e.src=s})}async function Ob(s,t,e,n,{z:i=19,maxUp:r=4,template:a=Lb,season:o="dry"}={}){const c=Nb(s,t,e,i),l=document.createElement("canvas");l.width=c.nx*256,l.height=c.ny*256;const h=l.getContext("2d",{willReadFrequently:!0});h.fillStyle="#5a5a3c",h.fillRect(0,0,l.width,l.height),h.imageSmoothingQuality="high";const d=(w,C,P)=>a.replace("{z}",w).replace("{x}",C).replace("{y}",P),u=new Map,f=w=>(u.has(w)||u.set(w,Fb(w)),u.get(w)),p=[];for(let w=0;w<c.nx;w++)for(let C=0;C<c.ny;C++){const P=c.x0+w,U=c.y0+C;p.push((async()=>{for(let F=0;F<=r;F++){const N=2**F,V=Math.floor(P/N),K=Math.floor(U/N),O=await f(d(i-F,V,K));if(!O)continue;const $=256/N;h.drawImage(O,(P-V*N)*$,(U-K*N)*$,$,$,w*256,C*256,256,256);return}})())}await Promise.all(p);const _=l.width,g=l.height,m=document.createElement("canvas");m.width=_,m.height=g;const x=m.getContext("2d",{willReadFrequently:!0});x.strokeStyle=x.fillStyle="#fff",x.lineCap=x.lineJoin="round";const S=w=>c.toPx(w);for(const w of n){const C=(w==null?void 0:w.properties)??{},P=w==null?void 0:w.geometry;if(!P)continue;const U=P.type==="LineString"?[P.coordinates]:P.type==="MultiLineString"?P.coordinates:null;if(C.kind==="road"&&U){x.lineWidth=Math.max(2,4.5/c.mPerPx);for(const F of U)x.beginPath(),F.forEach((N,V)=>{const[K,O]=S(N);V?x.lineTo(K,O):x.moveTo(K,O)}),x.stroke()}else C.surface==="earth"&&P.type==="Polygon"&&(x.lineWidth=1,x.beginPath(),P.coordinates[0].forEach((F,N)=>{const[V,K]=S(F);N?x.lineTo(V,K):x.moveTo(V,K)}),x.closePath(),x.fill(),x.stroke())}const v=h.getImageData(0,0,_,g),T=x.getImageData(0,0,_,g).data,b=v.data;let R=0,M=0;for(let w=0;w<b.length;w+=4){const C=Math.max(Ub(b[w],b[w+1],b[w+2],o),T[w]/255);b[w+3]=Math.round(C*255),C<.3&&(R+=(b[w]+b[w+1]+b[w+2])/765,M++)}return{data:v,blk:c,W:_,H:g,grassLum:M?R/M:.4}}function Bb(s,t,e,n){const i=Math.max(2,Math.round(2*s/t)),r=new Hn(2*s,2*s,i,i),a=r.attributes.position,o=r.attributes.uv,c=new Float32Array(a.count*2);for(let l=0;l<a.count;l++){const h=a.getX(l),d=a.getY(l);a.setZ(l,e(h,d)),o.setXY(l,h,d);const[u,f]=n(h,d);c[l*2]=u,c[l*2+1]=f}return r.setAttribute("macroUv",new Ut(c,2)),r.computeVertexNormals(),r}function zb({macroTex:s,earth:t,grass:e,stone:n={},concrete:i={},R:r,earthMean:a,grassMean:o,detail:c=.55,cover:l=null}){var g;const h=new kn({color:16777215,toneMapped:!1,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-24}),d=im+1,u=[],f=new Float32Array(d),p=new Float32Array(d),_=new Float32Array(d);for(let m=0;m<d;m++){const x=kd[m];u.push(new Rt(((g=l==null?void 0:l.palette)==null?void 0:g[m])??nm[m]??"#808080")),f[m]=(x==null?void 0:x.snap)??0,p[m]=(x==null?void 0:x.detail)??0,_[m]=(x==null?void 0:x.scale)??1}return h.onBeforeCompile=m=>{Object.assign(m.uniforms,{macroMap:{value:s},grassMap:{value:e.map},earthMap:{value:t.map},stoneMap:{value:n.map??t.map},concreteMap:{value:i.map??t.map},groundR:{value:r},earthMean:{value:a},grassMean:{value:o},detailAmt:{value:c},stoneMean:{value:new I(.42,.4,.37)},concreteMean:{value:new I(.09,.09,.09)},coverMap:{value:(l==null?void 0:l.tex)??s},hasCover:{value:l!=null&&l.tex?1:0},coverCol:{value:u},coverSnap:{value:f},coverDetail:{value:p},coverScale:{value:_}}),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 macroUv;
varying vec2 vMacroUv;
varying vec2 vGroundXY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMacroUv = macroUv;
vGroundXY = position.xy;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D macroMap, grassMap, earthMap, stoneMap, concreteMap, coverMap;
uniform float groundR, detailAmt, hasCover;
uniform vec3 earthMean, grassMean, stoneMean, concreteMean;
uniform vec3 coverCol[${d}];
uniform float coverSnap[${d}], coverDetail[${d}], coverScale[${d}];
varying vec2 vMacroUv;
varying vec2 vGroundXY;
// Two scales of detail break up the tiling; only their brightness is used.
vec3 detail2(sampler2D t, vec2 p, float s) { return mix(texture2D(t, p / (2.5 * s)).rgb, texture2D(t, p / (9.1 * s)).rgb, 0.35); }
// Value noise for mottling at metre scales (wear, damp patches, sparse cover).
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }`).replace("#include <map_fragment>",`
vec4 macro = texture2D(macroMap, vMacroUv);
int ci = hasCover > 0.5 ? int(clamp(floor(texture2D(coverMap, vMacroUv).r * 255.0 + 0.5), 0.0, ${d-1}.0)) : 0;
vec3 base = macro.rgb;
float shade;
if (ci == 0) {
  // No traced cover: the imagery's redness tells earth from grass.
  vec3 eC = detail2(earthMap, vGroundXY, 1.0), gC = detail2(grassMap, vGroundXY, 1.0);
  float earth = smoothstep(0.15, 0.85, macro.a);
  float eL = dot(eC / earthMean, vec3(0.3333)), gL = dot(gC / grassMean, vec3(0.3333));
  shade = clamp(mix(1.0, mix(gL, eL, earth), detailAmt), 0.6, 1.45);
} else {
  // Traced cover: the class picks the detail texture, and the colour snaps
  // towards the class colour while keeping the imagery's own brightness
  // (shadows, wear), so edges are crisp where the satellite pixels are soft.
  float sc = coverScale[ci];
  int dt = int(coverDetail[ci] + 0.5);
  vec3 dC, mean;
  if (dt == 0) { dC = detail2(earthMap, vGroundXY, sc); mean = earthMean; }
  else if (dt == 1) { dC = detail2(grassMap, vGroundXY, sc); mean = grassMean; }
  else if (dt == 2) { dC = detail2(stoneMap, vGroundXY, sc); mean = stoneMean; }
  else { dC = detail2(concreteMap, vGroundXY, sc); mean = concreteMean; }
  // Stronger and finer than the untraced path: a third, close-range octave
  // gives the ground grain when the camera is a few metres up.
  vec3 fine = (dt == 1) ? texture2D(grassMap, vGroundXY / (0.7 * sc)).rgb : texture2D(earthMap, vGroundXY / (0.6 * sc)).rgb;
  vec3 fineMean = (dt == 1) ? grassMean : earthMean;
  float fL = dot(fine / fineMean, vec3(0.3333));
  float dL = mix(dot(dC / mean, vec3(0.3333)), fL, 0.45);
  shade = clamp(mix(1.0, dL, min(1.0, detailAmt * 1.7)), 0.45, 1.7);
  vec3 cc = coverCol[ci];
  float lm = dot(macro.rgb, vec3(0.299, 0.587, 0.114)), lc = dot(cc, vec3(0.299, 0.587, 0.114));
  base = mix(macro.rgb, cc * clamp(lm / max(lc, 0.01), 0.45, 1.8), coverSnap[ci]);
  // Close up the ground needs grain, not only light and shade: a little of the
  // detail texture's own hue (stones in the laterite, blades in the grass), normalised so the mean colour stays.
  vec3 hue = clamp((fine / fineMean) / max(fL, 0.05), 0.6, 1.6);
  base *= mix(vec3(1.0), hue, 0.35);
  // Mottling at ~4 m and ~15 m: worn and damp patches on earth, thicker and thinner grass.
  float mot = vnoise(vGroundXY / 4.0) * 0.6 + vnoise(vGroundXY / 15.0 + 7.3) * 0.4;
  shade *= mix(0.86, 1.14, mot);
}
diffuseColor.rgb = base * shade;
diffuseColor.a *= 1.0 - smoothstep(0.78 * groundR, 0.98 * groundR, max(abs(vGroundXY.x), abs(vGroundXY.y)));
`)},h.customProgramCacheKey=()=>"gl-ground-v11",h}function Vb(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d");let e=11;const n=()=>(e=e*16807%2147483647)/2147483647;for(let r=0;r<70;r++){const a=10+n()*108,o=50+n()*76,c=(n()-.5)*30,l=1.5+n()*2.5,h=150+Math.floor(n()*90);t.fillStyle=`rgb(${h},${Math.floor(h*.95)},${Math.floor(h*.55)})`,t.beginPath(),t.moveTo(a-l,128),t.lineTo(a+l,128),t.lineTo(a+c,128-o),t.fill()}const i=new vc(s);return i.colorSpace=Ee,i}function kb(){const s=new Hn(.7,1).toNonIndexed();s.rotateX(Math.PI/2),s.translate(0,0,.5);const t=s.clone();t.rotateZ(Math.PI/2);const e=new ee;for(const i of["position","normal","uv"]){const r=s.attributes[i],a=t.attributes[i],o=new Float32Array(r.array.length+a.array.length);o.set(r.array),o.set(a.array,r.array.length),e.setAttribute(i,new xe(o,r.itemSize))}const n=e.attributes.normal;for(let i=0;i<n.count;i++)n.setXYZ(i,0,0,1);return e}function Gb(s,t,e,{seed:n=3,max:i=2e4}={}){let r=n;const a=()=>(r=r*16807%2147483647)/2147483647,o=[];for(let c=-s;c<=s;c+=t)for(let l=-s;l<=s;l+=t){const h=c+(a()-.5)*t,d=l+(a()-.5)*t;if(h*h+d*d>s*s)continue;const u=e(h,d);if(u){if(u.tufts!=null){if(a()>u.tufts)continue}else if(u.earth>.35||a()<u.earth*2)continue;if(o.push({x:h,y:d,h:(.22+a()*.33)*(u.short?.5:1),rot:a()*Math.PI,rgb:u.rgb}),o.length>=i)return o}}return o}const Tl={high:{shadow:2048,shadowHalf:450,treeR:1500,maxTrees:9e3,catcher:900,ground:320,groundStep:2.5,groundZoom:19,tuftR:70,tuftSpacing:.9},medium:{shadow:1024,shadowHalf:300,treeR:800,maxTrees:4e3,catcher:600,ground:220,groundStep:3,groundZoom:18,tuftR:45,tuftSpacing:1.1},low:{shadow:0,shadowHalf:0,treeR:400,maxTrees:1500,catcher:0,ground:0}},Al=["high","medium","low"];function Hb({touch:s=!1,width:t=1920,memoryGb:e=8}={}){return e&&e<=2?"low":s&&t<1100?"medium":"high"}function Wb(s,t){const e=Al.indexOf(s);return t>34&&e<Al.length-1?Al[e+1]:s}const El={polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4},zd={"#aeb6bd":"galv","#b4bcc4":"galv","#8a949e":"galv","#cfd4d9":"galv","#d3d7da":"galv","#c8ccd0":"galv","#eef1f3":"plastic","#b8b4ab":"concrete","#8d877c":"concrete","#1d2a48":"solar","#1b1e22":"rubber","#2a3138":"glass","#c9c2a8":"rope"};function Vd(s){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");if(s==="zebra"){e.fillStyle="#f4f4f0",e.fillRect(0,0,256,256),e.fillStyle="#16181a";for(let i=-4;i<8;i++)e.beginPath(),e.moveTo(i*48,0),e.lineTo(i*48+22,0),e.lineTo(i*48+22+90,256),e.lineTo(i*48+90-6,256),e.fill()}else{let i=7;const r=()=>(i=i*16807%2147483647)/2147483647;e.fillStyle="#cfbfb0",e.fillRect(0,0,256,256);for(const[a,o,c]of[["#988277",12,32],["#715146",12,26],["#495168",7,20]]){e.fillStyle=a;for(let l=0;l<o;l++){const h=r()*256,d=r()*256,u=c*(.6+r()),f=c*(.4+r()*.6);for(const p of[-256,0,256])for(const _ of[-256,0,256])e.beginPath(),e.ellipse(h+p,d+_,u,f,r()*Math.PI,0,Math.PI*2),e.fill()}}}const n=new vc(t);return n.wrapS=n.wrapT=ns,n.repeat.setScalar(s==="zebra"?.35:.3),n.colorSpace=Ee,n}function Xb(){const s=new ls(100,48,24),t=s.attributes.position,e=[],n=new Rt("#9bb6d6"),i=new Rt("#e4e8ea"),r=new Rt("#6a5c48"),a=new Rt("#a69a84"),o=new Rt;for(let l=0;l<t.count;l++){const h=t.getX(l),d=t.getY(l),u=t.getZ(l);t.setXYZ(l,h,-u,d);const f=d/100;f>=0?o.copy(i).lerp(n,Math.pow(f,.5)):o.copy(a).lerp(r,Math.min(1,-f*4)),e.push(o.r,o.g,o.b)}s.setAttribute("color",new Ut(e,3));const c=new pc;return c.add(new Te(s,new kn({vertexColors:!0,side:ze}))),c}function qb(s,t,e,n){const i=e==null?void 0:e[n];if(!i)return null;const r=(a,o)=>{const c=s.load(`${t}3d/textures/${n}/${a}.jpg`);return c.wrapS=c.wrapT=ns,c.repeat.set(1/i.metresPerRepeat,1/i.metresPerRepeat),c.anisotropy=8,o&&(c.colorSpace=Ee),c};return{map:r("diff",!0),normalMap:r("nor",!1),roughnessMap:r("rough",!1)}}function Jb(s,{getData:t,onQuality:e,base:n="./"}){let i=null,r=null,a=null,o=null,c=null,l=null,h=null,d=!0,u=null,f=null,p=null,_=Hb({touch:matchMedia==null?void 0:matchMedia("(pointer: coarse)").matches,width:innerWidth,memoryGb:navigator.deviceMemory}),g=null,m={};const x=new Map,S=new fp,v=[];let T=0,b=null,R=0;function M(W,ft){const gt=`${W}:${ft}`;if(x.has(gt))return x.get(gt);const ht=new Rt(ft||"#ffffff"),_t=Vt=>m[Vt]??{};let L;switch(W){case"metal":{const Vt=ht.getHSL({}).s;L=new Me({..._t("metal"),color:ht.clone().multiplyScalar(3.6),metalness:Vt<.12?.45:.15,roughness:.55,envMapIntensity:1.1,side:ze});break}case"thatch":L=new Me({..._t("thatch"),color:ht.clone().multiplyScalar(5),roughness:1,side:ze});break;case"tarp":L=new Me({normalMap:_t("canvas").normalMap??null,roughnessMap:_t("canvas").roughnessMap??null,color:ht.clone().multiplyScalar(1.15),roughness:.95,envMapIntensity:.3,side:ze,shadowSide:qe});break;case"sandbag":L=new Me({normalMap:_t("canvas").normalMap??null,roughnessMap:_t("canvas").roughnessMap??null,color:ht,roughness:1,envMapIntensity:.25});break;case"fly":case"canvas":L=new Me({normalMap:_t("canvas").normalMap??null,roughnessMap:_t("canvas").roughnessMap??null,color:ht.clone().multiplyScalar(.6),roughness:1,envMapIntensity:.25,side:ze,shadowSide:qe});break;case"brick":L=new Me({..._t("brick"),color:ht.clone().lerp(new Rt("#ffffff"),.45).multiplyScalar(1.3),roughness:1});break;case"plaster":L=new Me({..._t("plaster"),color:ht.clone().multiplyScalar(1.8),roughness:.95,envMapIntensity:.5});break;case"sheetwall":{const Vt=E=>{if(!E)return E;const y=E.clone();return y.center.set(.5,.5),y.rotation=Math.PI/2,y.needsUpdate=!0,y},wt=_t("metal");L=new Me({map:Vt(wt.map),normalMap:Vt(wt.normalMap),roughnessMap:Vt(wt.roughnessMap),color:ht.clone().multiplyScalar(4.6),metalness:.12,roughness:.45,envMapIntensity:.5}),L.userData.ownMaps=!0;break}case"ribbed":L=new Me({normalMap:_t("metal").normalMap,color:ht,metalness:.2,roughness:.55,envMapIntensity:.5});break;case"fibre":L=new Me({..._t("metal"),color:ht.clone().multiplyScalar(3.4),metalness:0,roughness:.92,envMapIntensity:.4,side:ze});break;case"bark":L=new Me({..._t("bark"),roughness:1});break;case"zebra":L=new Bs({map:Vd("zebra"),roughness:.5,clearcoat:.25,clearcoatRoughness:.45,envMapIntensity:.6});break;case"camo":L=new Me({map:Vd("camo"),roughness:.8,envMapIntensity:.4});break;case"block":L=new Me({..._t("concrete"),color:ht.clone().multiplyScalar(3.5),roughness:1,envMapIntensity:.5});break;case"timber":L=new Me({..._t("planks"),color:ht.clone().multiplyScalar(2.6),roughness:.9});break;case"stone":L=new Me({..._t("stone"),color:ht.clone().multiplyScalar(2.4),roughness:.95});break;case"tile":L=new Me({..._t("brick"),color:ht,roughness:.85,side:ze});break;case"foliage":L=new Me({normalMap:_t("foliage").normalMap,roughness:.95,color:new Rt("#9aa88a"),envMapIntensity:.15});break;case"galv":L=new Me({color:ht,metalness:.6,roughness:.4});break;case"concrete":L=new Me({..._t("concrete"),color:ht.clone().multiplyScalar(3.5),roughness:1,envMapIntensity:.5});break;case"solar":L=new Bs({color:ht,metalness:.3,roughness:.12,clearcoat:1});break;case"glass":L=new Bs({color:ht.clone().multiplyScalar(.35),metalness:0,roughness:.1,clearcoat:.4,envMapIntensity:.3,...El});break;case"rubber":L=new Me({color:ht,roughness:.95});break;case"rope":L=new Me({color:ht,roughness:1});break;case"plastic":L=new Me({color:ht,roughness:.4});break;default:L=new Bs({color:ht,metalness:0,roughness:.6,clearcoat:.12,clearcoatRoughness:.5,envMapIntensity:.3,...W==="trim"?El:{}})}return x.set(gt,L),L}const w=new Map;function C(W){if(w.has(W))return w.get(W);const ft=S.load(W);ft.colorSpace=Ee,ft.anisotropy=8;const gt=new Me({map:ft,emissiveMap:ft,emissive:new Rt("#bdbdbd"),color:new Rt("#808080"),roughness:1,envMapIntensity:0,...El});return w.set(W,gt),gt}const P=new Map,U=W=>(P.has(W)||P.set(W,Ib(W,3)),P.get(W));let F=null,N=null,V=null;function K(){return V??(V=Od()),F??(F=new Me({map:V,alphaTest:.45,side:ze,roughness:1,envMapIntensity:.06})),F}function O(){return V??(V=Od()),N??(N=new Rc({depthPacking:_f,map:V,alphaTest:.45})),N}const $=W=>{const ft=s.queryTerrainElevation(W);return ft==null||ft===0?(R+=1,(u==null?void 0:u.elev)??0):ft};let it=0,lt=null,ut={key:null,img:null},Bt=null,Pt=null,Mt=null,ct=null,dt=null,D=[];function Z(W,ft,gt){let ht=gt;for(const _t of D){const[L,Vt,wt,E]=_t.bbox;if(W<L-4||W>wt+4||ft<Vt-4||ft>E+4)continue;const y=vr(W,ft,_t.ringM),z=y<=.8?1:y>=4?0:1-(y-.8)/3.2,Y=_t.z-(y<=0?.2:.12);z>0&&Y>ht&&(ht=ht+(Y-ht)*z*z*(3-2*z))}return ht}async function st(W,ft,gt,ht){var Kt,ie,k;const _t=Db(t().opDatetime),L=`${u.lng.toFixed(5)},${u.lat.toFixed(5)},${ht.ground},${_t},${t().imagery??""}`;let Vt=ut.key===L?ut.img:null;if(!Vt){const xt=t().imagery;try{Vt=await Ob(u.lng,u.lat,ht.ground*1.05,gt,{season:_t,z:ht.groundZoom,...xt?{template:xt}:{}})}catch{return}ut={key:L,img:Vt}}if(!d||p!==W)return;const{blk:wt,W:E,H:y,data:z}=Vt,Y=(xt,G)=>wt.toPx(ft.toLL([xt,G])),ot=(xt,G)=>Z(xt,G,$(ft.toLL([xt,G])))+.15,St=Bb(ht.ground,ht.groundStep,ot,(xt,G)=>{const[j,Q]=Y(xt,G);return[j/E,Q/y]}),Tt=t().groundCover;let rt=null,pt=null;if((Kt=Tt==null?void 0:Tt.features)!=null&&Kt.length){const[xt,G]=Y(0,0),[j,Q]=Y(10,0),q=10/Math.max(1e-6,Math.hypot(j-xt,Q-G));try{rt=sm(Tt,{W:E,H:y,toPx:(mt,yt)=>wt.toPx([mt,yt]),mPerPx:q})}catch{rt=null}rt&&(pt=new mn(rt,E,y,Kr,rn),pt.minFilter=pt.magFilter=Le,pt.needsUpdate=!0)}const At=new mn(new Uint8Array(z.data.buffer.slice(0)),E,y,je);At.colorSpace=Ee,At.generateMipmaps=!0,At.minFilter=Un,At.magFilter=be,At.anisotropy=8,At.needsUpdate=!0,(ie=ct==null?void 0:ct.userData.macro)==null||ie.dispose(),(k=ct==null?void 0:ct.userData.cover)==null||k.dispose(),ct==null||ct.dispose(),ct=zb({macroTex:At,earth:m.earth??{},grass:m.grass??{},stone:m.stone??{},concrete:m.concrete??{},R:ht.ground,earthMean:new I(.13,.048,.027),grassMean:new I(.078,.046,.0075),cover:pt?{tex:pt,palette:rm(Tt)}:null}),ct.userData.macro=At,ct.userData.cover=pt;const Wt=new Te(St,ct);Wt.renderOrder=1,W.add(Wt);const Lt=[];for(const xt of gt){const G=(xt==null?void 0:xt.properties)??{},j=xt==null?void 0:xt.geometry;if(G.kind!=="building"||(j==null?void 0:j.type)!=="Polygon")continue;const Q=j.coordinates[0];Lt.push(ft.toM(Q.reduce((q,mt)=>[q[0]+mt[0]/Q.length,q[1]+mt[1]/Q.length],[0,0])))}const It=(xt,G)=>{var Xt;for(const[Qt,qt]of Lt)if((Qt-xt)**2+(qt-G)**2<324)return null;const[j,Q]=Y(xt,G),q=Math.min(y-1,Math.max(0,Math.round(Q)))*E+Math.min(E-1,Math.max(0,Math.round(j))),mt=q*4,yt={earth:z.data[mt+3]/255,rgb:[z.data[mt],z.data[mt+1],z.data[mt+2]]};return rt&&rt[q]&&(yt.tufts=((Xt=kd[rt[q]])==null?void 0:Xt.tufts)??.5,yt.short=rt[q]===om.lawn),yt};Ct(W,(xt,G)=>{const[j,Q]=Y(xt,G);if(j<0||Q<0||j>=E||Q>=y)return null;const q=(Math.round(Q)*E+Math.round(j))*4;return[z.data[q],z.data[q+1],z.data[q+2]]});const Ht=Gb(ht.tuftR,ht.tuftSpacing,It);if(Ht.length){Bt??(Bt=Vb()),Mt??(Mt=kb()),Pt??(Pt=new kn({map:Bt,alphaTest:.5,side:ze,toneMapped:!1}));const xt=new Qi(Mt,Pt,Ht.length),G=new te,j=new Be,Q=new Rt,q=new I(0,0,1);Ht.forEach((mt,yt)=>{j.setFromAxisAngle(q,mt.rot);const Xt=.5+mt.h;G.compose(new I(mt.x,mt.y,ot(mt.x,mt.y)-.06),j,new I(Xt,Xt,mt.h)),xt.setMatrixAt(yt,G),Q.setRGB(mt.rgb[0]/255,mt.rgb[1]/255,mt.rgb[2]/255,Ee).multiplyScalar(1.45),xt.setColorAt(yt,Q)}),xt.receiveShadow=!0,xt.userData.shared=!0,W.add(xt)}Et(),s.triggerRepaint()}function Ct(W,ft){var ht;const gt=new Rt;for(const _t of W.children){const L=(ht=_t.userData)==null?void 0:ht.treeXY;if(!L||!_t.instanceColor)continue;const Vt=_t.userData.imageryGain??1;for(let wt=0;wt<L.length;wt++){const[E,y,z]=L[wt];let Y=0,ot=0,St=0,Tt=0;for(const[rt,pt]of[[0,0],[z*.5,0],[-z*.5,0],[0,z*.5],[0,-z*.5]]){const At=ft(E+rt,y+pt);At&&(ot+=At[0],St+=At[1],Tt+=At[2],Y+=1)}Y&&(gt.setRGB(ot/Y/255,St/Y/255,Tt/Y/255,Ee).multiplyScalar(Vt),gt.r>gt.g*1.05&&gt.setRGB(gt.g*.9,gt.g,gt.g*.55),_t.setColorAt(wt,gt))}_t.instanceColor.needsUpdate=!0}}function bt(){p&&(l.remove(p),p.traverse(W=>{var ft,gt,ht;W.isInstancedMesh&&W.dispose(),W.userData.shared||(ft=W.geometry)==null||ft.dispose(),((gt=W.material)==null?void 0:gt.type)==="ShadowMaterial"&&W.material.dispose(),W.material&&W.material===ct&&((ht=W.material.userData.macro)==null||ht.dispose(),W.material.dispose(),ct=null)}),p=null)}function Dt(){var pt,At,Wt,Lt,It,Ht,Kt,ie,k,xt;if(!r||!s.getTerrain())return;const W=Tl[_],ft=s.getCenter();R=0,u={lng:ft.lng,lat:ft.lat,elev:s.queryTerrainElevation(ft)||0},f=Kp.fromLngLat([u.lng,u.lat],0);const gt=Ld([u.lng,u.lat]),{features:ht=[],sites:_t=[],opDatetime:L=null}=t();bt(),p=new Ci;const Vt=new Map,wt=(G,j,Q)=>{if(!Q)return;const q=`${G}|${j}`;Vt.has(q)||Vt.set(q,[]),Vt.get(q).push(Q)},E=(G,j=4e3)=>{const[Q,q]=gt.toM(G);return Math.hypot(Q,q)<=j},y=[],z=[];D=[];const Y=new Map,ot=G=>{if(Y.has(G))return Y.get(G);const Q=G.slice(0,-1).map($),q=G.map(gt.toM),mt=q.map(Ae=>Ae[0]),yt=q.map(Ae=>Ae[1]),[Xt,Qt,qt,jt]=[Math.min(...mt),Math.min(...yt),Math.max(...mt),Math.max(...yt)];for(let Ae=Xt+1;Ae<qt;Ae+=2)for(let Ge=Qt+1;Ge<jt;Ge+=2)vr(Ae,Ge,q)<=0&&Q.push($(gt.toLL([Ae,Ge])));const Ue={z:Math.max(...Q)+.05,drop:Math.max(...Q)-Math.min(...Q)+.05,ringM:q,bbox:[Xt,Qt,qt,jt]};return Y.set(G,Ue),Ue};for(const G of ht){const j=(G==null?void 0:G.properties)??{},Q=G==null?void 0:G.geometry;["building","medical"].includes(j.kind)&&(Q==null?void 0:Q.type)==="Polygon"&&E(Q.coordinates[0][0])&&D.push(ot(Q.coordinates[0]))}const St=(G,j)=>Z(G,j,$(gt.toLL([G,j])));for(const G of ht){const j=(G==null?void 0:G.properties)??{},Q=G==null?void 0:G.geometry;if(["building","medical"].includes(j.kind)&&(Q==null?void 0:Q.type)==="Polygon"){const q=Q.coordinates[0];if(!E(q[0]))continue;const mt=ot(q),yt=mt.z,Xt=mt.ringM,Qt=((pt=j.look)==null?void 0:pt.tent)??(j.roofType==="tent"?"ridge":null);if(Qt){for(const Ie of Tb(Xt,yt,{kind:Qt,canvas:((Wt=(At=j.look)==null?void 0:At.wall)==null?void 0:Wt.color)||"#7a7550",fly:((It=(Lt=j.look)==null?void 0:Lt.roof)==null?void 0:It.color)||"#5f6048",frontDeg:((Ht=j.look)==null?void 0:Ht.frontDeg)??null}))wt(Ie.cls,Ie.color,Ie.geo);continue}const qt=ab(Xt,yt,j);if(!qt)continue;const jt=j.look??null,Ue=((Kt=jt==null?void 0:jt.wall)==null?void 0:Kt.color)||j.wallColor||"#e6dcc3",Ae=(ie=jt==null?void 0:jt.wall)==null?void 0:ie.mat,Ge=Ae==="canvas"||Ue==="#6f7354"?"canvas":Ae==="brick"||Ue==="#9c5a3c"?"brick":Ae==="block"?"block":Ae==="timber"?"timber":Ae==="sheet"?"sheetwall":Ae==="ribbed"?"ribbed":"plaster";wt(Ge,Ue,qt.walls),wt(Ge,Ue,qt.gableEnds);for(const Ie of qt.sideWalls??[]){const jn=Ie.mat??Ae;wt(jn==="brick"?"brick":jn==="block"?"block":jn==="timber"?"timber":jn==="canvas"?"canvas":jn==="sheet"?"sheetwall":Ge,Ie.color??Ue,Ie.geo)}const pe=(k=jt==null?void 0:jt.roof)==null?void 0:k.mat,Rn=qt.roofType==="round"||pe==="thatch"?"thatch":qt.roofType==="tent"||pe==="canvas"?"canvas":pe==="tile"?"tile":pe==="concrete"?"block":pe==="fibre"?"fibre":"metal",mi=((xt=jt==null?void 0:jt.roof)==null?void 0:xt.color)||j.roofColor||(Rn==="canvas"?Ue:"#8e959c");wt(Rn,mi,qt.roof);const Wn=hb(Xt,yt,j);mt.drop>.03&&wt(Wn.foundationCls??"concrete",Wn.foundationColor??"#8d877c",ob(Xt,yt,mt.drop,qt.roofType));for(const Ie of Wn.parts)wt(Ie.cls,Ie.color,Ie.geo);for(const Ie of Wn.facades)y.push(new Te(Ie.geo,C(Ie.photo)))}else if(j.kind==="defence"&&j.status!=="planned"&&j.status!=="reported"&&(Q==null?void 0:Q.type)==="Point"&&E(Q.coordinates)&&["ring","horseshoe","rect","U","line","L",void 0].includes(j.shape)){const q=gt.toM(Q.coordinates);let mt=null;if(j.onPorch){let yt=6;for(const Xt of D){const Qt=vr(q[0],q[1],Xt.ringM);Qt<yt&&(yt=Qt,mt=Xt.z+Lr)}}if(z.push({xy:q,p:j,base:mt}),j.roofed){const yt=bb(j,q,mt??St(q[0],q[1]));wt("timber","#9a8a70",yt.poles),wt("tarp",j.roofColor||"#4a5240",yt.tarp)}}else if(j.kind==="defence"&&j.status==="existing"&&j.shape==="wall"&&(Q==null?void 0:Q.type)==="LineString"&&E(Q.coordinates[0])){const q=Q.coordinates.map(gt.toM),mt=q[Math.floor(q.length/2)];let yt=null;if(j.onPorch){let Xt=6;for(const Qt of D){const qt=vr(mt[0],mt[1],Qt.ringM);qt<Xt&&(Xt=qt,yt=Qt.z+Lr)}}z.push({xy:[0,0],p:j,base:yt,layout:vb(q,j)})}else if(j.kind==="defence"&&j.status==="existing"&&j.shape==="barrier"&&(Q==null?void 0:Q.type)==="Point"&&E(Q.coordinates)){const q=gt.toM(Q.coordinates);for(const[mt,yt]of Ab(q,St(q[0],q[1]),{headingDeg:j.headingDeg??0,lengthM:j.sizeM??5.2}))for(const Xt of yt)wt("paint",mt,Xt)}else if(j.kind==="defence"&&j.status==="existing"&&j.shape==="trench"&&(Q==null?void 0:Q.type)==="LineString"&&E(Q.coordinates[0]))wt("block","#8a4a3a",Eb(Q.coordinates.map(gt.toM),St,j.wallM??.6));else if(j.kind==="area"&&j.props==="scrap"&&(Q==null?void 0:Q.type)==="Polygon"&&E(Q.coordinates[0][0]))for(const[q,mt]of Sb(Mb(Q.coordinates[0].map(gt.toM)),St)){const[yt,Xt]=q.split("|");for(const Qt of mt)wt(yt,Xt,Qt)}else if(["aircraft","vehicle"].includes(j.kind)&&(Q==null?void 0:Q.type)==="Point"&&E(Q.coordinates)){const q=gt.toM(Q.coordinates);for(const[mt,yt]of gb(j.kind,j,q,St(q[0],q[1]))){const[Xt,Qt]=mt.includes("|")?mt.split("|"):[zd[mt]??"paint",mt];for(const qt of yt)wt(Xt,Qt,qt)}}}for(const G of _t){if(!E([G.lng,G.lat],2e4))continue;const j=gt.toM([G.lng,G.lat]);for(const[Q,q]of pb(G.style,G.h,G.opts,j,$([G.lng,G.lat])))for(const mt of q)wt(zd[Q]??"paint",Q,mt)}for(const[G,j]of Vt){const[Q,q]=G.split("|"),mt=_b(j);if(!mt)continue;const yt=new Te(mt,M(Q,q));yt.castShadow=!0,yt.receiveShadow=Q!=="tarp"&&Q!=="fly",p.add(yt)}for(const G of y)G.castShadow=!0,G.receiveShadow=!0,p.add(G);const Tt=z.flatMap(({xy:G,p:j,base:Q,layout:q})=>(q??xb(j)).map(mt=>({...mt,x:mt.x+G[0],y:mt.y+G[1],g:Q??(q?St(mt.x,mt.y):St(G[0],G[1])),color:j.bodyColor})));if(Tt.length){dt??(dt=yb());const G=new Qi(dt,M("sandbag","#ffffff"),Tt.length),j=new te,Q=new Be,q=new Rt,mt=new I(0,0,1),yt=new I(1,1,1),Xt=["#a89a76","#9b8f6c","#b3a684","#7d7a5a","#8e8566"],Qt=(qt,jt)=>qt.color?q.set(qt.color).multiplyScalar(.88+jt*.61%.24):q.set(Xt[(jt*7+qt.course)%Xt.length]);Tt.forEach((qt,jt)=>{Q.setFromAxisAngle(mt,qt.rot+jt*.37%.2-.1),j.compose(new I(qt.x,qt.y,qt.g+qt.z),Q,yt),G.setMatrixAt(jt,j),G.setColorAt(jt,Qt(qt,jt))}),G.castShadow=!0,G.receiveShadow=!0,G.userData.shared=!0,p.add(G)}const rt=db(ht,gt,$,{maxDistM:W.treeR,max:W.maxTrees});if(rt.length){const G=W.treeR>=1500?400:W.treeR>=800?250:150,j=rt.filter(qt=>Math.hypot(qt.x,qt.y)<=G),Q=rt.filter(qt=>Math.hypot(qt.x,qt.y)>G),q=new te,mt=new Be,yt=new Rt,Xt=new I(0,0,1),Qt=qt=>yt.setHSL(.24+qt*.618%1*.06,.45,.17+qt*.37%1*.06);for(const qt of Cb){const jt=j.map((pe,Rn)=>({t:pe,i:Rn})).filter(({t:pe,i:Rn})=>Pb(pe.h,Rn)===qt);if(!jt.length)continue;const Ue=U(qt),Ae=new Qi(Ue.wood,M("bark","#6b5a44"),jt.length),Ge=new Qi(Ue.leaves,K(),jt.length);Ge.customDepthMaterial=O(),Ge.userData.treeXY=jt.map(({t:pe})=>[pe.x,pe.y,pe.r]),Ge.userData.imageryGain=1.15,jt.forEach(({t:pe,i:Rn},mi)=>{const Wn=Math.max(.6,Math.min(1.25,pe.r*2.6/pe.h))*pe.h;mt.setFromAxisAngle(Xt,Rn*2.399%(Math.PI*2)),q.compose(new I(pe.x,pe.y,pe.z),mt,new I(Wn,Wn,pe.h)),Ae.setMatrixAt(mi,q),Ge.setMatrixAt(mi,q),Ge.setColorAt(mi,Qt(Rn))});for(const pe of[Ae,Ge])pe.castShadow=!0,pe.receiveShadow=!0,pe.userData.shared=!0,p.add(pe)}if(Q.length){const qt=new Qi(ub(7),M("foliage","#4a6e37"),Q.length);qt.userData.treeXY=Q.map(jt=>[jt.x,jt.y,jt.r]),qt.userData.imageryGain=1,Q.forEach((jt,Ue)=>{const Ae=jt.h*.65;mt.setFromAxisAngle(Xt,Ue*2.399%(Math.PI*2)),q.compose(new I(jt.x,jt.y,jt.z+jt.h-Ae/2),mt,new I(jt.r,jt.r*.92,Ae/2)),qt.setMatrixAt(Ue,q),yt.setHSL(.24+Ue*.618%1*.07,.62,.11+Ue*.37%1*.06),qt.setColorAt(Ue,yt)}),qt.castShadow=!0,p.add(qt)}}if(W.catcher){const j=W.catcher,Q=new Hn(j,j,W.ground?160:48,W.ground?160:48),q=Q.attributes.position;for(let yt=0;yt<q.count;yt++){const Xt=q.getX(yt),Qt=q.getY(yt),qt=W.ground&&Math.max(Math.abs(Xt),Math.abs(Qt))<W.ground;q.setZ(yt,qt?St(Xt,Qt)+.25:$(gt.toLL([Xt,Qt]))+.6)}Q.computeVertexNormals();const mt=new Te(Q,new Th({opacity:.45,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-32}));mt.renderOrder=2,mt.receiveShadow=!0,p.add(mt)}l.add(p),W.ground&&st(p,gt,ht,W),B(L),Et(),s.triggerRepaint(),R>0&&it<3?(it+=1,lt=()=>{lt=null,J(200)},s.once("idle",lt)):R===0&&(it=0)}const Et=()=>{i&&(i.shadowMap.needsUpdate=!0)};function B(W){var wt;const ft=Tl[_],{azimuthDeg:gt,elevationDeg:ht}=am(W,u.lat,u.lng),_t=Math.max(8,ht)*(Math.PI/180),L=gt*(Math.PI/180),Vt=new I(Math.sin(L)*Math.cos(_t),Math.cos(L)*Math.cos(_t),Math.sin(_t));o.target.position.set(0,0,u.elev),o.position.copy(o.target.position).addScaledVector(Vt,1500),o.intensity=ht<5?1.1:2.6,c.intensity=ht<5?.15:.22,o.castShadow=ft.shadow>0,ft.shadow&&(o.shadow.mapSize.set(ft.shadow,ft.shadow),(wt=o.shadow.map)==null||wt.dispose(),o.shadow.map=null,Object.assign(o.shadow.camera,{left:-ft.shadowHalf,right:ft.shadowHalf,top:ft.shadowHalf,bottom:-ft.shadowHalf,near:10,far:4e3}),o.shadow.camera.updateProjectionMatrix())}function J(W=400){clearTimeout(b),b=setTimeout(Dt,W)}const X=()=>{if(!u)return;const W=s.getCenter(),[ft,gt]=Ld([u.lng,u.lat]).toM([W.lng,W.lat]),ht=Tl[_],_t=ht.ground?ht.ground*.55:2500;Math.hypot(ft,gt)>_t&&(it=0,J(250))};return{layer:{id:"realistic-3d",type:"custom",renderingMode:"3d",async onAdd(W,ft){i=new Op({canvas:W.getCanvas(),context:ft,antialias:!0}),i.autoClear=!1,i.shadowMap.enabled=!0,i.shadowMap.type=Vs,i.shadowMap.autoUpdate=!1,i.outputColorSpace=Ee,i.toneMapping=Qo,i.toneMappingExposure=.9,r=new pc,a=new sa,l=new Ci,r.add(l),o=new Dh("#fff3e0",3),o.shadow.bias=-2e-4,o.shadow.normalBias=.3,r.add(o,o.target),c=new Lh("#dfe6ee","#5c4a34",.22),c.position.set(0,0,1),r.add(c);const gt=new Jo(i),ht=Xb();h=gt.fromScene(ht,.02),r.environment=h.texture,r.environmentIntensity=.5,ht.traverse(_t=>{var L,Vt;(L=_t.geometry)==null||L.dispose(),(Vt=_t.material)==null||Vt.dispose()}),gt.dispose(),i.resetState();try{g=await(await fetch(`${n}3d/textures/manifest.json`)).json()}catch{g=null}if(d){for(const _t of Object.keys(g??{}))m[_t]=qb(S,n,g,_t);Dt(),e==null||e(_),W.on("moveend",X)}},render(W,ft){if(!i||!f)return;const gt=f.meterInMercatorCoordinateUnits(),ht=new te().makeTranslation(f.x,f.y,0).scale(new I(gt,-gt,gt));a.projectionMatrix=new te().fromArray(ft.defaultProjectionData.mainMatrix).multiply(ht),a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),i.resetState(),i.render(r,a);const _t=performance.now(),L=s.isMoving();if(L&&T&&_t-T<250&&(v.push(_t-T),v.length>=60)){const Vt=v.reduce((E,y)=>E+y,0)/v.length;v.length=0;const wt=Wb(_,Vt);wt!==_&&(_=wt,e==null||e(_),J(300))}T=L?_t:0},onRemove(W){var ft,gt,ht,_t,L,Vt;d=!1,W.off("moveend",X),lt&&W.off("idle",lt),clearTimeout(b),l&&bt();for(const wt of x.values()){if((ft=wt.map)!=null&&ft.isCanvasTexture||wt.userData.ownMaps)for(const E of["map","normalMap","roughnessMap"])(gt=wt[E])==null||gt.dispose();wt.dispose()}x.clear();for(const wt of w.values())(ht=wt.map)==null||ht.dispose(),wt.dispose();w.clear();for(const wt of P.values())wt.wood.dispose(),wt.leaves.dispose();P.clear(),F==null||F.dispose(),N==null||N.dispose(),V==null||V.dispose(),Pt==null||Pt.dispose(),Bt==null||Bt.dispose(),Mt==null||Mt.dispose(),dt==null||dt.dispose(),ut={key:null,img:null};for(const wt of Object.values(m))for(const E of Object.values(wt??{}))(_t=E.dispose)==null||_t.call(E);(Vt=(L=o==null?void 0:o.shadow)==null?void 0:L.map)==null||Vt.dispose(),h==null||h.dispose(),i==null||i.dispose(),i=r=l=h=null}},rebuild:W=>J(W),getQuality:()=>_,debug:()=>({THREE:ib,renderer:i,scene:r,root:l,sun:o,hemi:c,camera:a,content:p,materials:x})}}export{Tl as QUALITY,Jb as createRealisticLayer,Hb as initialQuality,Wb as nextQuality};
