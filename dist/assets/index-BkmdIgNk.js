(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const J0="168",Er={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fd=0,Fl=1,pd=2,Rh=1,Ph=2,Jn=3,wi=0,cn=1,gn=2,bi=0,Tr=1,zl=2,Ol=3,kl=4,md=5,Vi=100,gd=101,vd=102,xd=103,_d=104,yd=200,Md=201,bd=202,Sd=203,Zo=204,Jo=205,wd=206,Ed=207,Td=208,Ad=209,Cd=210,Rd=211,Pd=212,Dd=213,Ld=214,Id=0,Nd=1,Ud=2,fa=3,Fd=4,zd=5,Od=6,kd=7,Dh=0,Bd=1,Hd=2,Si=0,Vd=1,Gd=2,Wd=3,qd=4,Xd=5,Yd=6,jd=7,Lh=300,Pr=301,Dr=302,Qo=303,e0=304,Ca=306,t0=1e3,Xi=1001,n0=1002,Sn=1003,$d=1004,vs=1005,Pn=1006,Ka=1007,Yi=1008,ri=1009,Ih=1010,Nh=1011,as=1012,Q0=1013,Ki=1014,ti=1015,hs=1016,el=1017,tl=1018,Lr=1020,Uh=35902,Fh=1021,zh=1022,Ln=1023,Oh=1024,kh=1025,Ar=1026,Ir=1027,Bh=1028,nl=1029,Hh=1030,il=1031,rl=1033,sa=33776,aa=33777,oa=33778,la=33779,i0=35840,r0=35841,s0=35842,a0=35843,o0=36196,l0=37492,c0=37496,h0=37808,u0=37809,d0=37810,f0=37811,p0=37812,m0=37813,g0=37814,v0=37815,x0=37816,_0=37817,y0=37818,M0=37819,b0=37820,S0=37821,ca=36492,w0=36494,E0=36495,Vh=36283,T0=36284,A0=36285,C0=36286,Kd=3200,Zd=3201,Gh=0,Jd=1,yi="",Un="srgb",Pi="srgb-linear",sl="display-p3",Ra="display-p3-linear",pa="linear",_t="srgb",ma="rec709",ga="p3",nr=7680,Bl=519,Qd=512,ef=513,tf=514,Wh=515,nf=516,rf=517,sf=518,af=519,Hl=35044,Vl="300 es",ni=2e3,va=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ns=Math.PI/180,R0=180/Math.PI;function us(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function of(i,e){return(i%e+e)%e}function Za(i,e,t){return(1-t)*i+t*e}function Xr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const lf={DEG2RAD:ns};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,r,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],x=r[0],g=r[3],p=r[6],b=r[1],M=r[4],A=r[7],F=r[2],R=r[5],P=r[8];return s[0]=a*x+o*b+l*F,s[3]=a*g+o*M+l*R,s[6]=a*p+o*A+l*P,s[1]=c*x+h*b+d*F,s[4]=c*g+h*M+d*R,s[7]=c*p+h*A+d*P,s[2]=f*x+m*b+_*F,s[5]=f*g+m*M+_*R,s[8]=f*p+m*A+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,m=c*s-a*l,_=t*d+n*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new Je;function qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cf(){const i=xa("canvas");return i.style.display="block",i}const Gl={};function is(i){i in Gl||(Gl[i]=!0,console.warn(i))}function hf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Wl=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Pi]:{transfer:pa,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Un]:{transfer:_t,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ra]:{transfer:pa,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ql),fromReference:i=>i.applyMatrix3(Wl)},[sl]:{transfer:_t,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ql),fromReference:i=>i.applyMatrix3(Wl).convertLinearToSRGB()}},uf=new Set([Pi,Ra]),ft={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!uf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Yr[e].toReference,r=Yr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Yr[i].primaries},getTransfer:function(i){return i===yi?pa:Yr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Yr[e].luminanceCoefficients)}};function Cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ir;class df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=xa("canvas")),ir.width=e.width,ir.height=e.height;const n=ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cr(t[n]/255)*255):t[n]=Cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ff=0;class Xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eo(r[a].image)):s.push(eo(r[a]))}else s=eo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pf=0;class hn extends Qi{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Xi,r=Xi,s=Pn,a=Yi,o=Ln,l=ri,c=hn.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=us(),this.name="",this.source=new Xh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t0:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case n0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case t0:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case n0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Lh;hn.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,A=(m+1)/2,F=(p+1)/2,R=(h+f)/4,P=(d+x)/4,U=(_+g)/4;return M>A&&M>F?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=R/n,s=P/n):A>F?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=R/r,s=U/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=P/s,r=U/s),this.set(n,r,s,t),this}let b=Math.sqrt((g-_)*(g-_)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(d-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mf extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends mf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yh extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gf extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(d!==x||l!==f||c!==m||h!==_){let g=1-o;const p=l*f+c*m+h*_+d*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const F=Math.sqrt(M),R=Math.atan2(F,p*b);g=Math.sin(g*R)/F,o=Math.sin(o*R)/F}const A=o*b;if(l=l*g+f*A,c=c*g+m*A,h=h*g+_*A,d=d*g+x*A,g===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=F,c*=F,h*=F,d*=F}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+h*d+l*m-c*f,e[t+1]=l*_+h*f+c*d-o*m,e[t+2]=c*_+h*m+o*f-l*d,e[t+3]=h*_-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),f=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return to.copy(this).projectOnVector(e),this.sub(to)}reflect(e){return this.sub(to.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new D,Xl=new Ji;class ds{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),_s.subVectors(this.max,jr),rr.subVectors(e.a,jr),sr.subVectors(e.b,jr),ar.subVectors(e.c,jr),hi.subVectors(sr,rr),ui.subVectors(ar,sr),Ii.subVectors(rr,ar);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ii.z,Ii.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ii.z,0,-Ii.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ii.y,Ii.x,0];return!no(t,rr,sr,ar,_s)||(t=[1,0,0,0,1,0,0,0,1],!no(t,rr,sr,ar,_s))?!1:(ys.crossVectors(hi,ui),t=[ys.x,ys.y,ys.z],no(t,rr,sr,ar,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new D,new D,new D,new D,new D,new D,new D,new D],An=new D,xs=new ds,rr=new D,sr=new D,ar=new D,hi=new D,ui=new D,Ii=new D,jr=new D,_s=new D,ys=new D,Ni=new D;function no(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ni.fromArray(i,s);const o=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vf=new ds,$r=new D,io=new D;class Pa{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($r,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(io)),this.expandByPoint($r.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new D,ro=new D,Ms=new D,di=new D,so=new D,bs=new D,ao=new D;class al{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ro.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),di.copy(this.origin).sub(ro);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),o=di.dot(this.direction),l=-di.dot(Ms),c=di.lengthSq(),h=Math.abs(1-a*a);let d,f,m,_;if(h>0)if(d=a*l-o,f=a*o-l,_=s*h,d>=0)if(f>=-_)if(f<=_){const x=1/h;d*=x,f*=x,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ro).addScaledVector(Ms,f),m}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,s){so.subVectors(t,e),bs.subVectors(n,e),ao.crossVectors(so,bs);let a=this.direction.dot(ao),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);const l=o*this.direction.dot(bs.crossVectors(di,bs));if(l<0)return null;const c=o*this.direction.dot(so.cross(di));if(c<0||l+c>a)return null;const h=-o*di.dot(ao);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,n,r,s,a,o,l,c,h,d,f,m,_,x,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,f,m,_,x,g)}set(e,t,n,r,s,a,o,l,c,h,d,f,m,_,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=m,p[7]=_,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*d,_=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,_=c*h,x=c*d;t[0]=f+x*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,_=c*h,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*d,_=o*h,x=o*d;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=x-f*d,t[8]=_*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+_,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=a*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,_f)}lookAt(e,t,n){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),fi.crossVectors(n,fn),fi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),fi.crossVectors(n,fn)),fi.normalize(),Ss.crossVectors(fn,fi),r[0]=fi.x,r[4]=Ss.x,r[8]=fn.x,r[1]=fi.y,r[5]=Ss.y,r[9]=fn.y,r[2]=fi.z,r[6]=Ss.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],x=n[6],g=n[10],p=n[14],b=n[3],M=n[7],A=n[11],F=n[15],R=r[0],P=r[4],U=r[8],E=r[12],S=r[1],z=r[5],G=r[9],q=r[13],K=r[2],Z=r[6],$=r[10],ee=r[14],j=r[3],ye=r[7],ve=r[11],we=r[15];return s[0]=a*R+o*S+l*K+c*j,s[4]=a*P+o*z+l*Z+c*ye,s[8]=a*U+o*G+l*$+c*ve,s[12]=a*E+o*q+l*ee+c*we,s[1]=h*R+d*S+f*K+m*j,s[5]=h*P+d*z+f*Z+m*ye,s[9]=h*U+d*G+f*$+m*ve,s[13]=h*E+d*q+f*ee+m*we,s[2]=_*R+x*S+g*K+p*j,s[6]=_*P+x*z+g*Z+p*ye,s[10]=_*U+x*G+g*$+p*ve,s[14]=_*E+x*q+g*ee+p*we,s[3]=b*R+M*S+A*K+F*j,s[7]=b*P+M*z+A*Z+F*ye,s[11]=b*U+M*G+A*$+F*ve,s[15]=b*E+M*q+A*ee+F*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],x=e[7],g=e[11],p=e[15];return _*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*m-n*l*m)+x*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+g*(+t*c*d-t*o*m-s*a*d+n*a*m+s*o*h-n*c*h)+p*(-r*o*h-t*l*d+t*o*f+r*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],x=e[13],g=e[14],p=e[15],b=d*g*c-x*f*c+x*l*m-o*g*m-d*l*p+o*f*p,M=_*f*c-h*g*c-_*l*m+a*g*m+h*l*p-a*f*p,A=h*x*c-_*d*c+_*o*m-a*x*m-h*o*p+a*d*p,F=_*d*l-h*x*l-_*o*f+a*x*f+h*o*g-a*d*g,R=t*b+n*M+r*A+s*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=b*P,e[1]=(x*f*s-d*g*s-x*r*m+n*g*m+d*r*p-n*f*p)*P,e[2]=(o*g*s-x*l*s+x*r*c-n*g*c-o*r*p+n*l*p)*P,e[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*m-n*l*m)*P,e[4]=M*P,e[5]=(h*g*s-_*f*s+_*r*m-t*g*m-h*r*p+t*f*p)*P,e[6]=(_*l*s-a*g*s-_*r*c+t*g*c+a*r*p-t*l*p)*P,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*m+t*l*m)*P,e[8]=A*P,e[9]=(_*d*s-h*x*s-_*n*m+t*x*m+h*n*p-t*d*p)*P,e[10]=(a*x*s-_*o*s+_*n*c-t*x*c-a*n*p+t*o*p)*P,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*m-t*o*m)*P,e[12]=F*P,e[13]=(h*x*r-_*d*r+_*n*f-t*x*f-h*n*g+t*d*g)*P,e[14]=(_*o*r-a*x*r-_*n*l+t*x*l+a*n*g-t*o*g)*P,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,m=s*h,_=s*d,x=a*h,g=a*d,p=o*d,b=l*c,M=l*h,A=l*d,F=n.x,R=n.y,P=n.z;return r[0]=(1-(x+p))*F,r[1]=(m+A)*F,r[2]=(_-M)*F,r[3]=0,r[4]=(m-A)*R,r[5]=(1-(f+p))*R,r[6]=(g+b)*R,r[7]=0,r[8]=(_+M)*P,r[9]=(g-b)*P,r[10]=(1-(f+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=or.set(r[0],r[1],r[2]).length();const a=or.set(r[4],r[5],r[6]).length(),o=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,h=1/a,d=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ni){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,_;if(o===ni)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===va)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ni){const l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(a-s),f=(t+e)*c,m=(n+r)*h;let _,x;if(o===ni)_=(a+s)*d,x=-2*d;else if(o===va)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const or=new D,Cn=new Mt,xf=new D(0,0,0),_f=new D(1,1,1),fi=new D,Ss=new D,fn=new D,Yl=new Mt,jl=new Ji;class Bn{constructor(e=0,t=0,n=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yf=0;const $l=new D,lr=new Ji,Yn=new Mt,ws=new D,Kr=new D,Mf=new D,bf=new Ji,Kl=new D(1,0,0),Zl=new D(0,1,0),Jl=new D(0,0,1),Ql={type:"added"},Sf={type:"removed"},cr={type:"childadded",child:null},oo={type:"childremoved",child:null};class qt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new D,t=new Bn,n=new Ji,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Kr,ws,this.up):Yn.lookAt(ws,Kr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(Yn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ql),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ql),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}qt.DEFAULT_UP=new D(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new D,jn=new D,lo=new D,$n=new D,hr=new D,ur=new D,ec=new D,co=new D,ho=new D,uo=new D;class Dn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Rn.subVectors(r,t),jn.subVectors(n,t),lo.subVectors(e,t);const a=Rn.dot(Rn),o=Rn.dot(jn),l=Rn.dot(lo),c=jn.dot(jn),h=jn.dot(lo),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),jn.subVectors(e,t),Rn.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Rn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;hr.subVectors(r,n),ur.subVectors(s,n),co.subVectors(e,n);const l=hr.dot(co),c=ur.dot(co);if(l<=0&&c<=0)return t.copy(n);ho.subVectors(e,r);const h=hr.dot(ho),d=ur.dot(ho);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(hr,a);uo.subVectors(e,s);const m=hr.dot(uo),_=ur.dot(uo);if(_>=0&&m<=_)return t.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ur,o);const g=h*_-m*d;if(g<=0&&d-h>=0&&m-_>=0)return ec.subVectors(s,r),o=(d-h)/(d-h+(m-_)),t.copy(r).addScaledVector(ec,o);const p=1/(g+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(hr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Es={h:0,s:0,l:0};function fo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=of(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fo(a,s,e+1/3),this.g=fo(a,s,e),this.b=fo(a,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return ft.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Zt(Kt.r*255,0,255))*65536+Math.round(Zt(Kt.g*255,0,255))*256+Math.round(Zt(Kt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Un){ft.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,r=Kt.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Es);const n=Za(pi.h,Es.h,t),r=Za(pi.s,Es.s,t),s=Za(pi.l,Es.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new tt;tt.NAMES=$h;let wf=0;class kr extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Tr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Jo,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Jo&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ji extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new D,Ts=new Ue;class kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return is("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hl&&(e.usage=this.usage),e}}class Kh extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zh extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ef=0;const bn=new Mt,po=new qt,dr=new D,pn=new ds,Zr=new ds,Wt=new D;class jt extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?Zh:Kh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(pn.min,Zr.min),pn.expandByPoint(Wt),Wt.addVectors(pn.max,Zr.max),pn.expandByPoint(Wt)):(pn.expandByPoint(Zr.min),pn.expandByPoint(Zr.max))}pn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(dr.fromBufferAttribute(e,c),Wt.add(dr)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new D,l[U]=new D;const c=new D,h=new D,d=new D,f=new Ue,m=new Ue,_=new Ue,x=new D,g=new D;function p(U,E,S){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,S),f.fromBufferAttribute(s,U),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),h.sub(c),d.sub(c),m.sub(f),_.sub(f);const z=1/(m.x*_.y-_.x*m.y);isFinite(z)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(z),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(z),o[U].add(x),o[E].add(x),o[S].add(x),l[U].add(g),l[E].add(g),l[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,E=b.length;U<E;++U){const S=b[U],z=S.start,G=S.count;for(let q=z,K=z+G;q<K;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const M=new D,A=new D,F=new D,R=new D;function P(U){F.fromBufferAttribute(r,U),R.copy(F);const E=o[U];M.copy(E),M.sub(F.multiplyScalar(F.dot(E))).normalize(),A.crossVectors(R,E);const z=A.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,z)}for(let U=0,E=b.length;U<E;++U){const S=b[U],z=S.start,G=S.count;for(let q=z,K=z+G;q<K;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let p=0;p<h;p++)f[_++]=c[m++]}return new kn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new Mt,Ui=new al,As=new Pa,nc=new D,fr=new D,pr=new D,mr=new D,mo=new D,Cs=new D,Rs=new Ue,Ps=new Ue,Ds=new Ue,ic=new D,rc=new D,sc=new D,Ls=new D,Is=new D;class nt extends qt{constructor(e=new jt,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(mo.fromBufferAttribute(d,e),a?Cs.addScaledVector(mo,h):Cs.addScaledVector(mo.sub(t),h))}t.add(Cs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(As.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(As,nc)===null||Ui.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(tc.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(tc),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const g=f[_],p=a[g.materialIndex],b=Math.max(g.start,m.start),M=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let A=b,F=M;A<F;A+=3){const R=o.getX(A),P=o.getX(A+1),U=o.getX(A+2);r=Ns(this,p,e,n,c,h,d,R,P,U),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const b=o.getX(g),M=o.getX(g+1),A=o.getX(g+2);r=Ns(this,a,e,n,c,h,d,b,M,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const g=f[_],p=a[g.materialIndex],b=Math.max(g.start,m.start),M=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let A=b,F=M;A<F;A+=3){const R=A,P=A+1,U=A+2;r=Ns(this,p,e,n,c,h,d,R,P,U),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const b=g,M=g+1,A=g+2;r=Ns(this,a,e,n,c,h,d,b,M,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Tf(i,e,t,n,r,s,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===wi,o),l===null)return null;Is.copy(o),Is.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Is);return c<t.near||c>t.far?null:{distance:c,point:Is.clone(),object:i}}function Ns(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,fr),i.getVertexPosition(l,pr),i.getVertexPosition(c,mr);const h=Tf(i,e,t,n,fr,pr,mr,Ls);if(h){r&&(Rs.fromBufferAttribute(r,o),Ps.fromBufferAttribute(r,l),Ds.fromBufferAttribute(r,c),h.uv=Dn.getInterpolation(Ls,fr,pr,mr,Rs,Ps,Ds,new Ue)),s&&(Rs.fromBufferAttribute(s,o),Ps.fromBufferAttribute(s,l),Ds.fromBufferAttribute(s,c),h.uv1=Dn.getInterpolation(Ls,fr,pr,mr,Rs,Ps,Ds,new Ue)),a&&(ic.fromBufferAttribute(a,o),rc.fromBufferAttribute(a,l),sc.fromBufferAttribute(a,c),h.normal=Dn.getInterpolation(Ls,fr,pr,mr,ic,rc,sc,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};Dn.getNormal(fr,pr,mr,d.normal),h.face=d}return h}class Br extends jt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function _(x,g,p,b,M,A,F,R,P,U,E){const S=A/P,z=F/U,G=A/2,q=F/2,K=R/2,Z=P+1,$=U+1;let ee=0,j=0;const ye=new D;for(let ve=0;ve<$;ve++){const we=ve*z-q;for(let $e=0;$e<Z;$e++){const Ke=$e*S-G;ye[x]=Ke*b,ye[g]=we*M,ye[p]=K,c.push(ye.x,ye.y,ye.z),ye[x]=0,ye[g]=0,ye[p]=R>0?1:-1,h.push(ye.x,ye.y,ye.z),d.push($e/P),d.push(1-ve/U),ee+=1}}for(let ve=0;ve<U;ve++)for(let we=0;we<P;we++){const $e=f+we+Z*ve,Ke=f+we+Z*(ve+1),J=f+(we+1)+Z*(ve+1),ce=f+(we+1)+Z*ve;l.push($e,Ke,ce),l.push(Ke,J,ce),j+=6}o.addGroup(m,j,E),m+=j,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Nr(i[t]);for(const r in n)e[r]=n[r]}return e}function Af(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Cf={clone:Nr,merge:en};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qh extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new D,ac=new Ue,oc=new Ue;class mn extends Qh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=R0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return R0*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,ac,oc),t.subVectors(oc,ac)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,vr=1;class Df extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(gr,vr,e,t);r.layers=this.layers,this.add(r);const s=new mn(gr,vr,e,t);s.layers=this.layers,this.add(s);const a=new mn(gr,vr,e,t);a.layers=this.layers,this.add(a);const o=new mn(gr,vr,e,t);o.layers=this.layers,this.add(o);const l=new mn(gr,vr,e,t);l.layers=this.layers,this.add(l);const c=new mn(gr,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class eu extends hn{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lf extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new eu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Br(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:bi});s.uniforms.tEquirect.value=t;const a=new nt(r,s),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Pn),new Df(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const go=new D,If=new D,Nf=new Je;class xi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=go.subVectors(n,t).cross(If.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(go),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nf.getNormalMatrix(e),r=this.coplanarPoint(go).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Pa,Us=new D;class ol{constructor(e=new xi,t=new xi,n=new xi,r=new xi,s=new xi,a=new xi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],x=r[10],g=r[11],p=r[12],b=r[13],M=r[14],A=r[15];if(n[0].setComponents(l-s,f-c,g-m,A-p).normalize(),n[1].setComponents(l+s,f+c,g+m,A+p).normalize(),n[2].setComponents(l+a,f+h,g+_,A+b).normalize(),n[3].setComponents(l-a,f-h,g-_,A-b).normalize(),n[4].setComponents(l-o,f-d,g-x,A-M).normalize(),t===ni)n[5].setComponents(l+o,f+d,g+x,A+M).normalize();else if(t===va)n[5].setComponents(o,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Us.x=r.normal.x>0?e.max.x:e.min.x,Us.y=r.normal.y>0?e.max.y:e.min.y,Us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Uf(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,o),d.count===-1&&f.length===0&&i.bufferSubData(c,0,h),f.length!==0){for(let m=0,_=f.length;m<_;m++){const x=f[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Da extends jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=t/l,m=[],_=[],x=[],g=[];for(let p=0;p<h;p++){const b=p*f-a;for(let M=0;M<c;M++){const A=M*d-s;_.push(A,-b,0),x.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const M=b+c*p,A=b+c*(p+1),F=b+1+c*(p+1),R=b+1+c*p;m.push(M,A,R),m.push(A,F,R)}this.setIndex(m),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Kf=`#ifdef USE_BUMPMAP
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sp=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
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
#endif`,Np=`struct PhysicalMaterial {
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
}`,Up=`
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
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
}`,Vm=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Wm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
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
}`,jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Km=`uniform vec3 diffuse;
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
}`,Zm=`#define LAMBERT
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
}`,Jm=`#define LAMBERT
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
}`,Qm=`#define MATCAP
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
}`,e1=`#define MATCAP
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
}`,t1=`#define NORMAL
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
}`,n1=`#define NORMAL
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
}`,i1=`#define PHONG
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
}`,r1=`#define PHONG
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
}`,s1=`#define STANDARD
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
}`,a1=`#define STANDARD
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
}`,o1=`#define TOON
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
}`,l1=`#define TOON
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
}`,c1=`uniform float size;
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
}`,h1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,d1=`uniform vec3 color;
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
}`,f1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,p1=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Ff,alphahash_pars_fragment:zf,alphamap_fragment:Of,alphamap_pars_fragment:kf,alphatest_fragment:Bf,alphatest_pars_fragment:Hf,aomap_fragment:Vf,aomap_pars_fragment:Gf,batching_pars_vertex:Wf,batching_vertex:qf,begin_vertex:Xf,beginnormal_vertex:Yf,bsdfs:jf,iridescence_fragment:$f,bumpmap_pars_fragment:Kf,clipping_planes_fragment:Zf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:ep,color_fragment:tp,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:rp,common:sp,cube_uv_reflection_fragment:ap,defaultnormal_vertex:op,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:dp,colorspace_pars_fragment:fp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Cp,envmap_vertex:xp,fog_vertex:_p,fog_pars_vertex:yp,fog_fragment:Mp,fog_pars_fragment:bp,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Tp,lights_pars_begin:Ap,lights_toon_fragment:Rp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Dp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Np,lights_fragment_begin:Up,lights_fragment_maps:Fp,lights_fragment_end:zp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:Hp,map_fragment:Vp,map_pars_fragment:Gp,map_particle_fragment:Wp,map_particle_pars_fragment:qp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:Yp,morphinstance_vertex:jp,morphcolor_vertex:$p,morphnormal_vertex:Kp,morphtarget_pars_vertex:Zp,morphtarget_vertex:Jp,normal_fragment_begin:Qp,normal_fragment_maps:em,normal_pars_fragment:tm,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:om,iridescence_pars_fragment:lm,opaque_fragment:cm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:dm,dithering_fragment:fm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:xm,shadowmap_vertex:_m,shadowmask_pars_fragment:ym,skinbase_vertex:Mm,skinning_pars_vertex:bm,skinning_vertex:Sm,skinnormal_vertex:wm,specularmap_fragment:Em,specularmap_pars_fragment:Tm,tonemapping_fragment:Am,tonemapping_pars_fragment:Cm,transmission_fragment:Rm,transmission_pars_fragment:Pm,uv_pars_fragment:Dm,uv_pars_vertex:Lm,uv_vertex:Im,worldpos_vertex:Nm,background_vert:Um,background_frag:Fm,backgroundCube_vert:zm,backgroundCube_frag:Om,cube_vert:km,cube_frag:Bm,depth_vert:Hm,depth_frag:Vm,distanceRGBA_vert:Gm,distanceRGBA_frag:Wm,equirect_vert:qm,equirect_frag:Xm,linedashed_vert:Ym,linedashed_frag:jm,meshbasic_vert:$m,meshbasic_frag:Km,meshlambert_vert:Zm,meshlambert_frag:Jm,meshmatcap_vert:Qm,meshmatcap_frag:e1,meshnormal_vert:t1,meshnormal_frag:n1,meshphong_vert:i1,meshphong_frag:r1,meshphysical_vert:s1,meshphysical_frag:a1,meshtoon_vert:o1,meshtoon_frag:l1,points_vert:c1,points_frag:h1,shadow_vert:u1,shadow_frag:d1,sprite_vert:f1,sprite_frag:p1},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Fn={basic:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:en([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:en([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:en([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:en([me.points,me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:en([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:en([me.common,me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:en([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:en([me.sprite,me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:en([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:en([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Fn.physical={uniforms:en([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Fs={r:0,b:0,g:0},zi=new Bn,m1=new Mt;function g1(i,e,t,n,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const A=_(b);A===null?p(o,l):A&&A.isColor&&(p(A,1),M=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,M){const A=_(M);A&&(A.isCubeTexture||A.mapping===Ca)?(h===void 0&&(h=new nt(new Br(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Nr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),zi.copy(M.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m1.makeRotationFromEuler(zi)),h.material.toneMapped=ft.getTransfer(A.colorSpace)!==_t,(d!==A||f!==A.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new nt(new Da(2,2),new Ei({name:"BackgroundMaterial",uniforms:Nr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ft.getTransfer(A.colorSpace)!==_t,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Fs,Jh(i)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:g}}function v1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(S,z,G,q,K){let Z=!1;const $=d(q,G,z);s!==$&&(s=$,c(s.object)),Z=m(S,q,G,K),Z&&_(S,q,G,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,A(S,z,G,q),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,z,G){const q=G.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let Z=K[z.id];Z===void 0&&(Z={},K[z.id]=Z);let $=Z[q];return $===void 0&&($=f(l()),Z[q]=$),$}function f(S){const z=[],G=[],q=[];for(let K=0;K<t;K++)z[K]=0,G[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:q,object:S,attributes:{},index:null}}function m(S,z,G,q){const K=s.attributes,Z=z.attributes;let $=0;const ee=G.getAttributes();for(const j in ee)if(ee[j].location>=0){const ve=K[j];let we=Z[j];if(we===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;$++}return s.attributesNum!==$||s.index!==q}function _(S,z,G,q){const K={},Z=z.attributes;let $=0;const ee=G.getAttributes();for(const j in ee)if(ee[j].location>=0){let ve=Z[j];ve===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),K[j]=we,$++}s.attributes=K,s.attributesNum=$,s.index=q}function x(){const S=s.newAttributes;for(let z=0,G=S.length;z<G;z++)S[z]=0}function g(S){p(S,0)}function p(S,z){const G=s.newAttributes,q=s.enabledAttributes,K=s.attributeDivisors;G[S]=1,q[S]===0&&(i.enableVertexAttribArray(S),q[S]=1),K[S]!==z&&(i.vertexAttribDivisor(S,z),K[S]=z)}function b(){const S=s.newAttributes,z=s.enabledAttributes;for(let G=0,q=z.length;G<q;G++)z[G]!==S[G]&&(i.disableVertexAttribArray(G),z[G]=0)}function M(S,z,G,q,K,Z,$){$===!0?i.vertexAttribIPointer(S,z,G,K,Z):i.vertexAttribPointer(S,z,G,q,K,Z)}function A(S,z,G,q){x();const K=q.attributes,Z=G.getAttributes(),$=z.defaultAttributeValues;for(const ee in Z){const j=Z[ee];if(j.location>=0){let ye=K[ee];if(ye===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),ye!==void 0){const ve=ye.normalized,we=ye.itemSize,$e=e.get(ye);if($e===void 0)continue;const Ke=$e.buffer,J=$e.type,ce=$e.bytesPerElement,Ae=J===i.INT||J===i.UNSIGNED_INT||ye.gpuType===Q0;if(ye.isInterleavedBufferAttribute){const _e=ye.data,Fe=_e.stride,ze=ye.offset;if(_e.isInstancedInterleavedBuffer){for(let Qe=0;Qe<j.locationSize;Qe++)p(j.location+Qe,_e.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Qe=0;Qe<j.locationSize;Qe++)g(j.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Qe=0;Qe<j.locationSize;Qe++)M(j.location+Qe,we/j.locationSize,J,ve,Fe*ce,(ze+we/j.locationSize*Qe)*ce,Ae)}else{if(ye.isInstancedBufferAttribute){for(let _e=0;_e<j.locationSize;_e++)p(j.location+_e,ye.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let _e=0;_e<j.locationSize;_e++)g(j.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let _e=0;_e<j.locationSize;_e++)M(j.location+_e,we/j.locationSize,J,ve,we*ce,we/j.locationSize*_e*ce,Ae)}}else if($!==void 0){const ve=$[ee];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(j.location,ve);break;case 3:i.vertexAttrib3fv(j.location,ve);break;case 4:i.vertexAttrib4fv(j.location,ve);break;default:i.vertexAttrib1fv(j.location,ve)}}}}b()}function F(){U();for(const S in n){const z=n[S];for(const G in z){const q=z[G];for(const K in q)h(q[K].object),delete q[K];delete z[G]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const z=n[S.id];for(const G in z){const q=z[G];for(const K in q)h(q[K].object),delete q[K];delete z[G]}delete n[S.id]}function P(S){for(const z in n){const G=n[z];if(G[S.id]===void 0)continue;const q=G[S.id];for(const K in q)h(q[K].object),delete q[K];delete G[S.id]}}function U(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function x1(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_];t.update(m,n,1)}function l(c,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];for(let x=0;x<f.length;x++)t.update(_,n,f[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ri&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ti&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:A,maxSamples:F}}function y1(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new xi,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!r||_===null||_.length===0||s&&!g)s?h(null):c();else{const b=s?0:n,M=b*4;let A=p.clippingState||null;l.value=A,A=h(_,f,M,m);for(let F=0;F!==M;++F)A[F]=t[F];p.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,_){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const p=m+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,A=m;M!==x;++M,A+=4)a.copy(d[M]).applyMatrix4(b,o),a.normal.toArray(g,A),g[A+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function M1(i){let e=new WeakMap;function t(a,o){return o===Qo?a.mapping=Pr:o===e0&&(a.mapping=Dr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qo||o===e0)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lf(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class nu extends Qh{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const br=4,lc=[.125,.215,.35,.446,.526,.582],Gi=20,vo=new nu,cc=new tt;let xo=null,_o=0,yo=0,Mo=!1;const Hi=(1+Math.sqrt(5))/2,xr=1/Hi,hc=[new D(-Hi,xr,0),new D(Hi,xr,0),new D(-xr,0,Hi),new D(xr,0,Hi),new D(0,Hi,-xr),new D(0,Hi,xr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){xo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xo,_o,yo),this._renderer.xr.enabled=Mo,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:hs,format:Ln,colorSpace:Pi,depthBuffer:!1},r=dc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b1(s)),this._blurMaterial=S1(s,e,t)}return r}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,r){const o=new mn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(cc),h.toneMapping=Si,h.autoClear=!1;const m=new ji({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new nt(new Br,m);let x=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,x=!0):(m.color.copy(cc),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;zs(r,b*M,p>2?M:0,M,M),h.setRenderTarget(r),x&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pr||e.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hc[(r-s-1)%hc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new nt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gi-1),x=s/_,g=isFinite(s)?1+Math.floor(h*x):Gi;g>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gi}`);const p=[];let b=0;for(let P=0;P<Gi;++P){const U=P/x,E=Math.exp(-U*U/2);p.push(E),P===0?b+=E:P<g&&(b+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const A=this._sizeLods[r],F=3*A*(r>M-br?r-M+br:0),R=4*(this._cubeSize-A);zs(t,F,R,3*A,2*A),l.setRenderTarget(t),l.render(d,vo)}}function b1(i){const e=[],t=[],n=[];let r=i;const s=i-br+1+lc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-br?l=lc[a-i+br-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,x=3,g=2,p=1,b=new Float32Array(x*_*m),M=new Float32Array(g*_*m),A=new Float32Array(p*_*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,U=R>2?0:-1,E=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];b.set(E,x*_*R),M.set(f,g*_*R);const S=[R,R,R,R,R,R];A.set(S,p*_*R)}const F=new jt;F.setAttribute("position",new kn(b,x)),F.setAttribute("uv",new kn(M,g)),F.setAttribute("faceIndex",new kn(A,p)),e.push(F),r>br&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dc(i,e,t){const n=new Zi(i,e,t);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function S1(i,e,t){const n=new Float32Array(Gi),r=new D(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ll(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fc(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function pc(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function w1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qo||l===e0,h=l===Pr||l===Dr;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new uc(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new uc(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function E1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function T1(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let g=0,p=x.length;g<p;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let M=0,A=b.length;M<A;M+=3){const F=b[M+0],R=b[M+1],P=b[M+2];f.push(F,R,R,P,P,F)}}else if(_!==void 0){const b=_.array;x=_.version;for(let M=0,A=b.length/3-1;M<A;M+=3){const F=M+0,R=M+1,P=M+2;f.push(F,R,R,P,P,F)}}else return;const g=new(qh(f)?Zh:Kh)(f,1);g.version=x;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function A1(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*a),t.update(m,n,1)}function c(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,f*a,_),t.update(m,n,_))}function h(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];t.update(g,n,1)}function d(f,m,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,x,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b];for(let b=0;b<x.length;b++)t.update(p,n,x[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function C1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function R1(i,e,t){const n=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let S=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let A=0;_===!0&&(A=1),x===!0&&(A=2),g===!0&&(A=3);let F=o.attributes.position.count*A,R=1;F>e.maxTextureSize&&(R=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*R*4*d),U=new Yh(P,F,R,d);U.type=ti,U.needsUpdate=!0;const E=A*4;for(let z=0;z<d;z++){const G=p[z],q=b[z],K=M[z],Z=F*R*4*z;for(let $=0;$<G.count;$++){const ee=$*E;_===!0&&(r.fromBufferAttribute(G,$),P[Z+ee+0]=r.x,P[Z+ee+1]=r.y,P[Z+ee+2]=r.z,P[Z+ee+3]=0),x===!0&&(r.fromBufferAttribute(q,$),P[Z+ee+4]=r.x,P[Z+ee+5]=r.y,P[Z+ee+6]=r.z,P[Z+ee+7]=0),g===!0&&(r.fromBufferAttribute(K,$),P[Z+ee+8]=r.x,P[Z+ee+9]=r.y,P[Z+ee+10]=r.z,P[Z+ee+11]=K.itemSize===4?r.w:1)}}f={count:d,texture:U,size:new Ue(F,R)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function P1(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class iu extends hn{constructor(e,t,n,r,s,a,o,l,c,h=Ar){if(h!==Ar&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ar&&(n=Ki),n===void 0&&h===Ir&&(n=Lr),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ru=new hn,mc=new iu(1,1),su=new Yh,au=new gf,ou=new eu,gc=[],vc=[],xc=new Float32Array(16),_c=new Float32Array(9),yc=new Float32Array(4);function Hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=gc[r];if(s===void 0&&(s=new Float32Array(r),gc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function La(i,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function D1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function L1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function I1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function N1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function U1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),Vt(t,n)}}function F1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),Vt(t,n)}}function z1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;xc.set(n),i.uniformMatrix4fv(this.addr,!1,xc),Vt(t,n)}}function O1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function k1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function B1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function H1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function V1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function G1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function W1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function X1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=Wh,s=mc):s=ru,t.setTexture2D(e||s,r)}function Y1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||au,r)}function j1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ou,r)}function $1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||su,r)}function K1(i){switch(i){case 5126:return D1;case 35664:return L1;case 35665:return I1;case 35666:return N1;case 35674:return U1;case 35675:return F1;case 35676:return z1;case 5124:case 35670:return O1;case 35667:case 35671:return k1;case 35668:case 35672:return B1;case 35669:case 35673:return H1;case 5125:return V1;case 36294:return G1;case 36295:return W1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return $1}}function Z1(i,e){i.uniform1fv(this.addr,e)}function J1(i,e){const t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Q1(i,e){const t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function e2(i,e){const t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function t2(i,e){const t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function n2(i,e){const t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function i2(i,e){const t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r2(i,e){i.uniform1iv(this.addr,e)}function s2(i,e){i.uniform2iv(this.addr,e)}function a2(i,e){i.uniform3iv(this.addr,e)}function o2(i,e){i.uniform4iv(this.addr,e)}function l2(i,e){i.uniform1uiv(this.addr,e)}function c2(i,e){i.uniform2uiv(this.addr,e)}function h2(i,e){i.uniform3uiv(this.addr,e)}function u2(i,e){i.uniform4uiv(this.addr,e)}function d2(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ru,s[a])}function f2(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||au,s[a])}function p2(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ou,s[a])}function m2(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||su,s[a])}function g2(i){switch(i){case 5126:return Z1;case 35664:return J1;case 35665:return Q1;case 35666:return e2;case 35674:return t2;case 35675:return n2;case 35676:return i2;case 5124:case 35670:return r2;case 35667:case 35671:return s2;case 35668:case 35672:return a2;case 35669:case 35673:return o2;case 5125:return l2;case 36294:return c2;case 36295:return h2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return p2;case 36289:case 36303:case 36311:case 36292:return m2}}class v2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=K1(t.type)}}class x2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g2(t.type)}}class _2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function Mc(i,e){i.seq.push(e),i.map[e.id]=e}function y2(i,e,t){const n=i.name,r=n.length;for(bo.lastIndex=0;;){const s=bo.exec(n),a=bo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Mc(t,c===void 0?new v2(o,i,e):new x2(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new _2(o),Mc(t,d)),t=d}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);y2(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function bc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const M2=37297;let b2=0;function S2(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function w2(i){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i);let n;switch(e===t?n="":e===ga&&t===ma?n="LinearDisplayP3ToLinearSRGB":e===ma&&t===ga&&(n="LinearSRGBToLinearDisplayP3"),i){case Pi:case Ra:return[n,"LinearTransferOETF"];case Un:case sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+S2(i.getShaderSource(e),a)}else return r}function E2(i,e){const t=w2(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function T2(i,e){let t;switch(e){case Vd:t="Linear";break;case Gd:t="Reinhard";break;case Wd:t="Cineon";break;case qd:t="ACESFilmic";break;case Yd:t="AgX";break;case jd:t="Neutral";break;case Xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Os=new D;function A2(){ft.getLuminanceCoefficients(Os);const i=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function R2(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P2(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function es(i){return i!==""}function wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ec(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D2=/^[ \t]*#include +<([\w\d./]+)>/gm;function P0(i){return i.replace(D2,I2)}const L2=new Map;function I2(i,e){let t=Ze[e];if(t===void 0){const n=L2.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return P0(t)}const N2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(N2,U2)}function U2(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ac(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function F2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function z2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function k2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dh:e="ENVMAP_BLENDING_MULTIPLY";break;case Bd:e="ENVMAP_BLENDING_MIX";break;case Hd:e="ENVMAP_BLENDING_ADD";break}return e}function B2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function H2(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=F2(t),c=z2(t),h=O2(t),d=k2(t),f=B2(t),m=C2(t),_=R2(s),x=r.createProgram();let g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(es).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(es).join(`
`),p.length>0&&(p+=`
`)):(g=[Ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[Ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Si?T2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,E2("linearToOutputTexel",t.outputColorSpace),A2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),a=P0(a),a=wc(a,t),a=Ec(a,t),o=P0(o),o=wc(o,t),o=Ec(o,t),a=Tc(a),o=Tc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+g+a,A=b+p+o,F=bc(r,r.VERTEX_SHADER,M),R=bc(r,r.FRAGMENT_SHADER,A);r.attachShader(x,F),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(z){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),q=r.getShaderInfoLog(F).trim(),K=r.getShaderInfoLog(R).trim();let Z=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,F,R);else{const ee=Sc(r,F,"vertex"),j=Sc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+G+`
`+ee+`
`+j)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(q===""||K==="")&&($=!1);$&&(z.diagnostics={runnable:Z,programLog:G,vertexShader:{log:q,prefix:g},fragmentShader:{log:K,prefix:p}})}r.deleteShader(F),r.deleteShader(R),U=new ha(r,x),E=P2(r,x)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,M2)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=R,this}let V2=0;class G2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new W2(e),t.set(e,n)),n}}class W2{constructor(e){this.id=V2++,this.code=e,this.usedTimes=0}}function q2(i,e,t,n,r,s,a){const o=new jh,l=new G2,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,z,G,q){const K=G.fog,Z=q.geometry,$=E.isMeshStandardMaterial?G.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||$),j=ee&&ee.mapping===Ca?ee.image.height:null,ye=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,we=ve!==void 0?ve.length:0;let $e=0;Z.morphAttributes.position!==void 0&&($e=1),Z.morphAttributes.normal!==void 0&&($e=2),Z.morphAttributes.color!==void 0&&($e=3);let Ke,J,ce,Ae;if(ye){const ct=Fn[ye];Ke=ct.vertexShader,J=ct.fragmentShader}else Ke=E.vertexShader,J=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),Ae=l.getFragmentShaderID(E);const _e=i.getRenderTarget(),Fe=q.isInstancedMesh===!0,ze=q.isBatchedMesh===!0,Qe=!!E.map,vt=!!E.matcap,O=!!ee,xt=!!E.aoMap,it=!!E.lightMap,lt=!!E.bumpMap,De=!!E.normalMap,Ct=!!E.displacementMap,ke=!!E.emissiveMap,Ge=!!E.metalnessMap,I=!!E.roughnessMap,w=E.anisotropy>0,Y=E.clearcoat>0,te=E.dispersion>0,se=E.iridescence>0,ie=E.sheen>0,Ie=E.transmission>0,ge=w&&!!E.anisotropyMap,Me=Y&&!!E.clearcoatMap,We=Y&&!!E.clearcoatNormalMap,ue=Y&&!!E.clearcoatRoughnessMap,Ee=se&&!!E.iridescenceMap,rt=se&&!!E.iridescenceThicknessMap,qe=ie&&!!E.sheenColorMap,Te=ie&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,et=!!E.specularColorMap,Et=!!E.specularIntensityMap,B=Ie&&!!E.transmissionMap,de=Ie&&!!E.thicknessMap,Q=!!E.gradientMap,ne=!!E.alphaMap,pe=E.alphaTest>0,Be=!!E.alphaHash,st=!!E.extensions;let Lt=Si;E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const Xt={shaderID:ye,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:J,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:Ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ze,batchingColor:ze&&q._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&q.instanceColor!==null,instancingMorph:Fe&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Pi,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:vt,envMap:O,envMapMode:O&&ee.mapping,envMapCubeUVHeight:j,aoMap:xt,lightMap:it,bumpMap:lt,normalMap:De,displacementMap:f&&Ct,emissiveMap:ke,normalMapObjectSpace:De&&E.normalMapType===Jd,normalMapTangentSpace:De&&E.normalMapType===Gh,metalnessMap:Ge,roughnessMap:I,anisotropy:w,anisotropyMap:ge,clearcoat:Y,clearcoatMap:Me,clearcoatNormalMap:We,clearcoatRoughnessMap:ue,dispersion:te,iridescence:se,iridescenceMap:Ee,iridescenceThicknessMap:rt,sheen:ie,sheenColorMap:qe,sheenRoughnessMap:Te,specularMap:Ye,specularColorMap:et,specularIntensityMap:Et,transmission:Ie,transmissionMap:B,thicknessMap:de,gradientMap:Q,opaque:E.transparent===!1&&E.blending===Tr&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:pe,alphaHash:Be,combine:E.combine,mapUv:Qe&&x(E.map.channel),aoMapUv:xt&&x(E.aoMap.channel),lightMapUv:it&&x(E.lightMap.channel),bumpMapUv:lt&&x(E.bumpMap.channel),normalMapUv:De&&x(E.normalMap.channel),displacementMapUv:Ct&&x(E.displacementMap.channel),emissiveMapUv:ke&&x(E.emissiveMap.channel),metalnessMapUv:Ge&&x(E.metalnessMap.channel),roughnessMapUv:I&&x(E.roughnessMap.channel),anisotropyMapUv:ge&&x(E.anisotropyMap.channel),clearcoatMapUv:Me&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(E.sheenRoughnessMap.channel),specularMapUv:Ye&&x(E.specularMap.channel),specularColorMapUv:et&&x(E.specularColorMap.channel),specularIntensityMapUv:Et&&x(E.specularIntensityMap.channel),transmissionMapUv:B&&x(E.transmissionMap.channel),thicknessMapUv:de&&x(E.thicknessMap.channel),alphaMapUv:ne&&x(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(De||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Z.attributes.uv&&(Qe||ne),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:$e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===_t,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gn,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:st&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&E.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)S.push(z),S.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(b(S,E),M(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function b(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),E.push(o.mask)}function A(E){const S=_[E.type];let z;if(S){const G=Fn[S];z=Cf.clone(G.uniforms)}else z=E.uniforms;return z}function F(E,S){let z;for(let G=0,q=h.length;G<q;G++){const K=h[G];if(K.cacheKey===S){z=K,++z.usedTimes;break}}return z===void 0&&(z=new H2(i,S,E,s),h.push(z)),z}function R(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function P(E){l.remove(E)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:A,acquireProgram:F,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:U}}function X2(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Y2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,f,m,_,x,g){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:g},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=x,p.group=g),e++,p}function o(d,f,m,_,x,g){const p=a(d,f,m,_,x,g);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,_,x,g){const p=a(d,f,m,_,x,g);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||Y2),n.length>1&&n.sort(f||Cc),r.length>1&&r.sort(f||Cc)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function j2(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Rc,i.set(n,[a])):r>=s.length?(a=new Rc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new tt};break;case"SpotLight":t={position:new D,direction:new D,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function K2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Z2=0;function J2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q2(i){const e=new $2,t=K2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const r=new D,s=new Mt,a=new Mt;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,x=0,g=0,p=0,b=0,M=0,A=0,F=0,R=0,P=0;c.sort(J2);for(let E=0,S=c.length;E<S;E++){const z=c[E],G=z.color,q=z.intensity,K=z.distance,Z=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=G.r*q,d+=G.g*q,f+=G.b*q;else if(z.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(z.sh.coefficients[$],q);P++}else if(z.isDirectionalLight){const $=e.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ee=z.shadow,j=t.get(z);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=z.shadow.matrix,b++}n.directional[m]=$,m++}else if(z.isSpotLight){const $=e.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(G).multiplyScalar(q),$.distance=K,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,n.spot[x]=$;const ee=z.shadow;if(z.map&&(n.spotLightMap[F]=z.map,F++,ee.updateMatrices(z),z.castShadow&&R++),n.spotLightMatrix[x]=ee.matrix,z.castShadow){const j=t.get(z);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=Z,A++}x++}else if(z.isRectAreaLight){const $=e.get(z);$.color.copy(G).multiplyScalar(q),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),n.rectArea[g]=$,g++}else if(z.isPointLight){const $=e.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),$.distance=z.distance,$.decay=z.decay,z.castShadow){const ee=z.shadow,j=t.get(z);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,j.shadowCameraNear=ee.camera.near,j.shadowCameraFar=ee.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=z.shadow.matrix,M++}n.point[_]=$,_++}else if(z.isHemisphereLight){const $=e.get(z);$.skyColor.copy(z.color).multiplyScalar(q),$.groundColor.copy(z.groundColor).multiplyScalar(q),n.hemi[p]=$,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==b||U.numPointShadows!==M||U.numSpotShadows!==A||U.numSpotMaps!==F||U.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=A+F-R,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,U.directionalLength=m,U.pointLength=_,U.spotLength=x,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=b,U.numPointShadows=M,U.numSpotShadows=A,U.numSpotMaps=F,U.numLightProbes=P,n.version=Z2++)}function l(c,h){let d=0,f=0,m=0,_=0,x=0;const g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),d++}else if(M.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),m++}else if(M.isRectAreaLight){const A=n.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const A=n.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Pc(i){const e=new Q2(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function eg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Pc(i),e.set(r,[o])):s>=a.length?(o=new Pc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class tg extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ng extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
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
}`;function sg(i,e,t){let n=new ol;const r=new Ue,s=new Ue,a=new yt,o=new tg({depthPacking:Zd}),l=new ng,c={},h=t.maxTextureSize,d={[wi]:cn,[cn]:wi,[gn]:gn},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:ig,fragmentShader:rg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new jt;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new nt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let p=this.type;this.render=function(R,P,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),G=i.state;G.setBlending(bi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=p!==Jn&&this.type===Jn,K=p===Jn&&this.type!==Jn;for(let Z=0,$=R.length;Z<$;Z++){const ee=R[Z],j=ee.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ye=j.getFrameExtents();if(r.multiply(ye),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ye.x),r.x=s.x*ye.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ye.y),r.y=s.y*ye.y,j.mapSize.y=s.y)),j.map===null||q===!0||K===!0){const we=this.type!==Jn?{minFilter:Sn,magFilter:Sn}:{};j.map!==null&&j.map.dispose(),j.map=new Zi(r.x,r.y,we),j.map.texture.name=ee.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const ve=j.getViewportCount();for(let we=0;we<ve;we++){const $e=j.getViewport(we);a.set(s.x*$e.x,s.y*$e.y,s.x*$e.z,s.y*$e.w),G.viewport(a),j.updateMatrices(ee,we),n=j.getFrustum(),A(P,U,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===Jn&&b(j,U),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,S,z)};function b(R,P){const U=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zi(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,U,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,U,m,x,null)}function M(R,P,U,E){let S=null;const z=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)S=z;else if(S=U.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const G=S.uuid,q=P.uuid;let K=c[G];K===void 0&&(K={},c[G]=K);let Z=K[q];Z===void 0&&(Z=S.clone(),K[q]=Z,P.addEventListener("dispose",F)),S=Z}if(S.visible=P.visible,S.wireframe=P.wireframe,E===Jn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=i.properties.get(S);G.light=U}return S}function A(R,P,U,E,S){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const q=e.update(R),K=R.material;if(Array.isArray(K)){const Z=q.groups;for(let $=0,ee=Z.length;$<ee;$++){const j=Z[$],ye=K[j.materialIndex];if(ye&&ye.visible){const ve=M(R,ye,E,S);R.onBeforeShadow(i,R,P,U,q,ve,j),i.renderBufferDirect(U,null,q,ve,R,j),R.onAfterShadow(i,R,P,U,q,ve,j)}}}else if(K.visible){const Z=M(R,K,E,S);R.onBeforeShadow(i,R,P,U,q,Z,null),i.renderBufferDirect(U,null,q,Z,R,null),R.onAfterShadow(i,R,P,U,q,Z,null)}}const G=R.children;for(let q=0,K=G.length;q<K;q++)A(G[q],P,U,E,S)}function F(R){R.target.removeEventListener("dispose",F);for(const U in c){const E=c[U],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function ag(i){function e(){let B=!1;const de=new yt;let Q=null;const ne=new yt(0,0,0,0);return{setMask:function(pe){Q!==pe&&!B&&(i.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){B=pe},setClear:function(pe,Be,st,Lt,Xt){Xt===!0&&(pe*=Lt,Be*=Lt,st*=Lt),de.set(pe,Be,st,Lt),ne.equals(de)===!1&&(i.clearColor(pe,Be,st,Lt),ne.copy(de))},reset:function(){B=!1,Q=null,ne.set(-1,0,0,0)}}}function t(){let B=!1,de=null,Q=null,ne=null;return{setTest:function(pe){pe?Ae(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(pe){de!==pe&&!B&&(i.depthMask(pe),de=pe)},setFunc:function(pe){if(Q!==pe){switch(pe){case Id:i.depthFunc(i.NEVER);break;case Nd:i.depthFunc(i.ALWAYS);break;case Ud:i.depthFunc(i.LESS);break;case fa:i.depthFunc(i.LEQUAL);break;case Fd:i.depthFunc(i.EQUAL);break;case zd:i.depthFunc(i.GEQUAL);break;case Od:i.depthFunc(i.GREATER);break;case kd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=pe}},setLocked:function(pe){B=pe},setClear:function(pe){ne!==pe&&(i.clearDepth(pe),ne=pe)},reset:function(){B=!1,de=null,Q=null,ne=null}}}function n(){let B=!1,de=null,Q=null,ne=null,pe=null,Be=null,st=null,Lt=null,Xt=null;return{setTest:function(ct){B||(ct?Ae(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(ct){de!==ct&&!B&&(i.stencilMask(ct),de=ct)},setFunc:function(ct,Wn,In){(Q!==ct||ne!==Wn||pe!==In)&&(i.stencilFunc(ct,Wn,In),Q=ct,ne=Wn,pe=In)},setOp:function(ct,Wn,In){(Be!==ct||st!==Wn||Lt!==In)&&(i.stencilOp(ct,Wn,In),Be=ct,st=Wn,Lt=In)},setLocked:function(ct){B=ct},setClear:function(ct){Xt!==ct&&(i.clearStencil(ct),Xt=ct)},reset:function(){B=!1,de=null,Q=null,ne=null,pe=null,Be=null,st=null,Lt=null,Xt=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],m=null,_=!1,x=null,g=null,p=null,b=null,M=null,A=null,F=null,R=new tt(0,0,0),P=0,U=!1,E=null,S=null,z=null,G=null,q=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,$=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=$>=2);let j=null,ye={};const ve=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),$e=new yt().fromArray(ve),Ke=new yt().fromArray(we);function J(B,de,Q,ne){const pe=new Uint8Array(4),Be=i.createTexture();i.bindTexture(B,Be),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<Q;st++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(de+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Be}const ce={};ce[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Ae(i.DEPTH_TEST),s.setFunc(fa),lt(!1),De(Fl),Ae(i.CULL_FACE),xt(bi);function Ae(B){c[B]!==!0&&(i.enable(B),c[B]=!0)}function _e(B){c[B]!==!1&&(i.disable(B),c[B]=!1)}function Fe(B,de){return h[B]!==de?(i.bindFramebuffer(B,de),h[B]=de,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function ze(B,de){let Q=f,ne=!1;if(B){Q=d.get(de),Q===void 0&&(Q=[],d.set(de,Q));const pe=B.textures;if(Q.length!==pe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Be=0,st=pe.length;Be<st;Be++)Q[Be]=i.COLOR_ATTACHMENT0+Be;Q.length=pe.length,ne=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ne=!0);ne&&i.drawBuffers(Q)}function Qe(B){return m!==B?(i.useProgram(B),m=B,!0):!1}const vt={[Vi]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[vd]:i.FUNC_REVERSE_SUBTRACT};vt[xd]=i.MIN,vt[_d]=i.MAX;const O={[yd]:i.ZERO,[Md]:i.ONE,[bd]:i.SRC_COLOR,[Zo]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Td]:i.DST_COLOR,[wd]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Dd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(B,de,Q,ne,pe,Be,st,Lt,Xt,ct){if(B===bi){_===!0&&(_e(i.BLEND),_=!1);return}if(_===!1&&(Ae(i.BLEND),_=!0),B!==md){if(B!==x||ct!==U){if((g!==Vi||M!==Vi)&&(i.blendEquation(i.FUNC_ADD),g=Vi,M=Vi),ct)switch(B){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,b=null,A=null,F=null,R.set(0,0,0),P=0,x=B,U=ct}return}pe=pe||de,Be=Be||Q,st=st||ne,(de!==g||pe!==M)&&(i.blendEquationSeparate(vt[de],vt[pe]),g=de,M=pe),(Q!==p||ne!==b||Be!==A||st!==F)&&(i.blendFuncSeparate(O[Q],O[ne],O[Be],O[st]),p=Q,b=ne,A=Be,F=st),(Lt.equals(R)===!1||Xt!==P)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Xt),R.copy(Lt),P=Xt),x=B,U=!1}function it(B,de){B.side===gn?_e(i.CULL_FACE):Ae(i.CULL_FACE);let Q=B.side===cn;de&&(Q=!Q),lt(Q),B.blending===Tr&&B.transparent===!1?xt(bi):xt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const ne=B.stencilWrite;a.setTest(ne),ne&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ke(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){E!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),E=B)}function De(B){B!==fd?(Ae(i.CULL_FACE),B!==S&&(B===Fl?i.cullFace(i.BACK):B===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),S=B}function Ct(B){B!==z&&(Z&&i.lineWidth(B),z=B)}function ke(B,de,Q){B?(Ae(i.POLYGON_OFFSET_FILL),(G!==de||q!==Q)&&(i.polygonOffset(de,Q),G=de,q=Q)):_e(i.POLYGON_OFFSET_FILL)}function Ge(B){B?Ae(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function I(B){B===void 0&&(B=i.TEXTURE0+K-1),j!==B&&(i.activeTexture(B),j=B)}function w(B,de,Q){Q===void 0&&(j===null?Q=i.TEXTURE0+K-1:Q=j);let ne=ye[Q];ne===void 0&&(ne={type:void 0,texture:void 0},ye[Q]=ne),(ne.type!==B||ne.texture!==de)&&(j!==Q&&(i.activeTexture(Q),j=Q),i.bindTexture(B,de||ce[B]),ne.type=B,ne.texture=de)}function Y(){const B=ye[j];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(B){$e.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),$e.copy(B))}function Te(B){Ke.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ke.copy(B))}function Ye(B,de){let Q=l.get(de);Q===void 0&&(Q=new WeakMap,l.set(de,Q));let ne=Q.get(B);ne===void 0&&(ne=i.getUniformBlockIndex(de,B.name),Q.set(B,ne))}function et(B,de){const ne=l.get(de).get(B);o.get(de)!==ne&&(i.uniformBlockBinding(de,ne,B.__bindingPointIndex),o.set(de,ne))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},j=null,ye={},h={},d=new WeakMap,f=[],m=null,_=!1,x=null,g=null,p=null,b=null,M=null,A=null,F=null,R=new tt(0,0,0),P=0,U=!1,E=null,S=null,z=null,G=null,q=null,$e.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Ae,disable:_e,bindFramebuffer:Fe,drawBuffers:ze,useProgram:Qe,setBlending:xt,setMaterial:it,setFlipSided:lt,setCullFace:De,setLineWidth:Ct,setPolygonOffset:ke,setScissorTest:Ge,activeTexture:I,bindTexture:w,unbindTexture:Y,compressedTexImage2D:te,compressedTexImage3D:se,texImage2D:Ee,texImage3D:rt,updateUBOMapping:Ye,uniformBlockBinding:et,texStorage2D:We,texStorage3D:ue,texSubImage2D:ie,texSubImage3D:Ie,compressedTexSubImage2D:ge,compressedTexSubImage3D:Me,scissor:qe,viewport:Te,reset:Et}}function Dc(i,e,t,n){const r=og(n);switch(t){case Fh:return i*e;case Oh:return i*e;case kh:return i*e*2;case Bh:return i*e/r.components*r.byteLength;case nl:return i*e/r.components*r.byteLength;case Hh:return i*e*2/r.components*r.byteLength;case il:return i*e*2/r.components*r.byteLength;case zh:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case rl:return i*e*4/r.components*r.byteLength;case sa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case r0:case a0:return Math.max(i,16)*Math.max(e,8)/4;case i0:case s0:return Math.max(i,8)*Math.max(e,8)/2;case o0:case l0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case c0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case h0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case u0:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case d0:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case f0:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case p0:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case m0:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case g0:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case v0:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case x0:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _0:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case y0:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case M0:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case b0:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case S0:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ca:case w0:case E0:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vh:case T0:return Math.ceil(i/4)*Math.ceil(e/4)*8;case A0:case C0:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function og(i){switch(i){case ri:case Ih:return{byteLength:1,components:1};case as:case Nh:case hs:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case Ki:case Q0:case ti:return{byteLength:4,components:1};case Uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lg(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,w){return m?new OffscreenCanvas(I,w):xa("canvas")}function x(I,w,Y){let te=1;const se=Ge(I);if((se.width>Y||se.height>Y)&&(te=Y/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ie=Math.floor(te*se.width),Ie=Math.floor(te*se.height);d===void 0&&(d=_(ie,Ie));const ge=w?_(ie,Ie):d;return ge.width=ie,ge.height=Ie,ge.getContext("2d").drawImage(I,0,0,ie,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ie+"x"+Ie+")."),ge}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==Sn&&I.minFilter!==Pn}function p(I){i.generateMipmap(I)}function b(I,w,Y,te,se=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ie=w;if(w===i.RED&&(Y===i.FLOAT&&(ie=i.R32F),Y===i.HALF_FLOAT&&(ie=i.R16F),Y===i.UNSIGNED_BYTE&&(ie=i.R8)),w===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.R8UI),Y===i.UNSIGNED_SHORT&&(ie=i.R16UI),Y===i.UNSIGNED_INT&&(ie=i.R32UI),Y===i.BYTE&&(ie=i.R8I),Y===i.SHORT&&(ie=i.R16I),Y===i.INT&&(ie=i.R32I)),w===i.RG&&(Y===i.FLOAT&&(ie=i.RG32F),Y===i.HALF_FLOAT&&(ie=i.RG16F),Y===i.UNSIGNED_BYTE&&(ie=i.RG8)),w===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Y===i.UNSIGNED_INT&&(ie=i.RG32UI),Y===i.BYTE&&(ie=i.RG8I),Y===i.SHORT&&(ie=i.RG16I),Y===i.INT&&(ie=i.RG32I)),w===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),w===i.RGBA){const Ie=se?pa:ft.getTransfer(te);Y===i.FLOAT&&(ie=i.RGBA32F),Y===i.HALF_FLOAT&&(ie=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ie=Ie===_t?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(I,w){let Y;return I?w===null||w===Ki||w===Lr?Y=i.DEPTH24_STENCIL8:w===ti?Y=i.DEPTH32F_STENCIL8:w===as&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ki||w===Lr?Y=i.DEPTH_COMPONENT24:w===ti?Y=i.DEPTH_COMPONENT32F:w===as&&(Y=i.DEPTH_COMPONENT16),Y}function A(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Sn&&I.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function F(I){const w=I.target;w.removeEventListener("dispose",F),P(w),w.isVideoTexture&&h.delete(w)}function R(I){const w=I.target;w.removeEventListener("dispose",R),E(w)}function P(I){const w=n.get(I);if(w.__webglInit===void 0)return;const Y=I.source,te=f.get(Y);if(te){const se=te[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(I),Object.keys(te).length===0&&f.delete(Y)}n.remove(I)}function U(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const Y=I.source,te=f.get(Y);delete te[w.__cacheKey],a.memory.textures--}function E(I){const w=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let se=0;se<w.__webglFramebuffer[te].length;se++)i.deleteFramebuffer(w.__webglFramebuffer[te][se]);else i.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)i.deleteFramebuffer(w.__webglFramebuffer[te]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=I.textures;for(let te=0,se=Y.length;te<se;te++){const ie=n.get(Y[te]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(Y[te])}n.remove(I)}let S=0;function z(){S=0}function G(){const I=S;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),S+=1,I}function q(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function K(I,w){const Y=n.get(I);if(I.isVideoTexture&&Ct(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const te=I.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(Y,I,w);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+w)}function Z(I,w){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){Ke(Y,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+w)}function $(I,w){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){Ke(Y,I,w);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+w)}function ee(I,w){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){J(Y,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+w)}const j={[t0]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[n0]:i.MIRRORED_REPEAT},ye={[Sn]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},ve={[Qd]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[Wh]:i.LEQUAL,[tf]:i.EQUAL,[sf]:i.GEQUAL,[nf]:i.GREATER,[rf]:i.NOTEQUAL};function we(I,w){if(w.type===ti&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===Ka||w.magFilter===vs||w.magFilter===Yi||w.minFilter===Pn||w.minFilter===Ka||w.minFilter===vs||w.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,j[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,j[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,j[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ye[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ye[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ve[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sn||w.minFilter!==vs&&w.minFilter!==Yi||w.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function $e(I,w){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",F));const te=w.source;let se=f.get(te);se===void 0&&(se={},f.set(te,se));const ie=q(w);if(ie!==I.__cacheKey){se[ie]===void 0&&(se[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),se[ie].usedTimes++;const Ie=se[I.__cacheKey];Ie!==void 0&&(se[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&U(w)),I.__cacheKey=ie,I.__webglTexture=se[ie].texture}return Y}function Ke(I,w,Y){let te=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=i.TEXTURE_3D);const se=$e(I,w),ie=w.source;t.bindTexture(te,I.__webglTexture,i.TEXTURE0+Y);const Ie=n.get(ie);if(ie.version!==Ie.__version||se===!0){t.activeTexture(i.TEXTURE0+Y);const ge=ft.getPrimaries(ft.workingColorSpace),Me=w.colorSpace===yi?null:ft.getPrimaries(w.colorSpace),We=w.colorSpace===yi||ge===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ue=x(w.image,!1,r.maxTextureSize);ue=ke(w,ue);const Ee=s.convert(w.format,w.colorSpace),rt=s.convert(w.type);let qe=b(w.internalFormat,Ee,rt,w.colorSpace,w.isVideoTexture);we(te,w);let Te;const Ye=w.mipmaps,et=w.isVideoTexture!==!0,Et=Ie.__version===void 0||se===!0,B=ie.dataReady,de=A(w,ue);if(w.isDepthTexture)qe=M(w.format===Ir,w.type),Et&&(et?t.texStorage2D(i.TEXTURE_2D,1,qe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,qe,ue.width,ue.height,0,Ee,rt,null));else if(w.isDataTexture)if(Ye.length>0){et&&Et&&t.texStorage2D(i.TEXTURE_2D,de,qe,Ye[0].width,Ye[0].height);for(let Q=0,ne=Ye.length;Q<ne;Q++)Te=Ye[Q],et?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Te.width,Te.height,Ee,rt,Te.data):t.texImage2D(i.TEXTURE_2D,Q,qe,Te.width,Te.height,0,Ee,rt,Te.data);w.generateMipmaps=!1}else et?(Et&&t.texStorage2D(i.TEXTURE_2D,de,qe,ue.width,ue.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Ee,rt,ue.data)):t.texImage2D(i.TEXTURE_2D,0,qe,ue.width,ue.height,0,Ee,rt,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,qe,Ye[0].width,Ye[0].height,ue.depth);for(let Q=0,ne=Ye.length;Q<ne;Q++)if(Te=Ye[Q],w.format!==Ln)if(Ee!==null)if(et){if(B)if(w.layerUpdates.size>0){const pe=Dc(Te.width,Te.height,w.format,w.type);for(const Be of w.layerUpdates){const st=Te.data.subarray(Be*pe/Te.data.BYTES_PER_ELEMENT,(Be+1)*pe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Be,Te.width,Te.height,1,Ee,st,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ue.depth,Ee,Te.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,qe,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ue.depth,Ee,rt,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,qe,Te.width,Te.height,ue.depth,0,Ee,rt,Te.data)}else{et&&Et&&t.texStorage2D(i.TEXTURE_2D,de,qe,Ye[0].width,Ye[0].height);for(let Q=0,ne=Ye.length;Q<ne;Q++)Te=Ye[Q],w.format!==Ln?Ee!==null?et?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,qe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Te.width,Te.height,Ee,rt,Te.data):t.texImage2D(i.TEXTURE_2D,Q,qe,Te.width,Te.height,0,Ee,rt,Te.data)}else if(w.isDataArrayTexture)if(et){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,qe,ue.width,ue.height,ue.depth),B)if(w.layerUpdates.size>0){const Q=Dc(ue.width,ue.height,w.format,w.type);for(const ne of w.layerUpdates){const pe=ue.data.subarray(ne*Q/ue.data.BYTES_PER_ELEMENT,(ne+1)*Q/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,ue.width,ue.height,1,Ee,rt,pe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,rt,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,ue.width,ue.height,ue.depth,0,Ee,rt,ue.data);else if(w.isData3DTexture)et?(Et&&t.texStorage3D(i.TEXTURE_3D,de,qe,ue.width,ue.height,ue.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,rt,ue.data)):t.texImage3D(i.TEXTURE_3D,0,qe,ue.width,ue.height,ue.depth,0,Ee,rt,ue.data);else if(w.isFramebufferTexture){if(Et)if(et)t.texStorage2D(i.TEXTURE_2D,de,qe,ue.width,ue.height);else{let Q=ue.width,ne=ue.height;for(let pe=0;pe<de;pe++)t.texImage2D(i.TEXTURE_2D,pe,qe,Q,ne,0,Ee,rt,null),Q>>=1,ne>>=1}}else if(Ye.length>0){if(et&&Et){const Q=Ge(Ye[0]);t.texStorage2D(i.TEXTURE_2D,de,qe,Q.width,Q.height)}for(let Q=0,ne=Ye.length;Q<ne;Q++)Te=Ye[Q],et?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ee,rt,Te):t.texImage2D(i.TEXTURE_2D,Q,qe,Ee,rt,Te);w.generateMipmaps=!1}else if(et){if(Et){const Q=Ge(ue);t.texStorage2D(i.TEXTURE_2D,de,qe,Q.width,Q.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,rt,ue)}else t.texImage2D(i.TEXTURE_2D,0,qe,Ee,rt,ue);g(w)&&p(te),Ie.__version=ie.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function J(I,w,Y){if(w.image.length!==6)return;const te=$e(I,w),se=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const ie=n.get(se);if(se.version!==ie.__version||te===!0){t.activeTexture(i.TEXTURE0+Y);const Ie=ft.getPrimaries(ft.workingColorSpace),ge=w.colorSpace===yi?null:ft.getPrimaries(w.colorSpace),Me=w.colorSpace===yi||Ie===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const We=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let ne=0;ne<6;ne++)!We&&!ue?Ee[ne]=x(w.image[ne],!0,r.maxCubemapSize):Ee[ne]=ue?w.image[ne].image:w.image[ne],Ee[ne]=ke(w,Ee[ne]);const rt=Ee[0],qe=s.convert(w.format,w.colorSpace),Te=s.convert(w.type),Ye=b(w.internalFormat,qe,Te,w.colorSpace),et=w.isVideoTexture!==!0,Et=ie.__version===void 0||te===!0,B=se.dataReady;let de=A(w,rt);we(i.TEXTURE_CUBE_MAP,w);let Q;if(We){et&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ye,rt.width,rt.height);for(let ne=0;ne<6;ne++){Q=Ee[ne].mipmaps;for(let pe=0;pe<Q.length;pe++){const Be=Q[pe];w.format!==Ln?qe!==null?et?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,Be.width,Be.height,qe,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Ye,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,Be.width,Be.height,qe,Te,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Ye,Be.width,Be.height,0,qe,Te,Be.data)}}}else{if(Q=w.mipmaps,et&&Et){Q.length>0&&de++;const ne=Ge(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ye,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ue){et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee[ne].width,Ee[ne].height,qe,Te,Ee[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,Ee[ne].width,Ee[ne].height,0,qe,Te,Ee[ne].data);for(let pe=0;pe<Q.length;pe++){const st=Q[pe].image[ne].image;et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,st.width,st.height,qe,Te,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Ye,st.width,st.height,0,qe,Te,st.data)}}else{et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,qe,Te,Ee[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,qe,Te,Ee[ne]);for(let pe=0;pe<Q.length;pe++){const Be=Q[pe];et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,qe,Te,Be.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Ye,qe,Te,Be.image[ne])}}}g(w)&&p(i.TEXTURE_CUBE_MAP),ie.__version=se.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ce(I,w,Y,te,se,ie){const Ie=s.convert(Y.format,Y.colorSpace),ge=s.convert(Y.type),Me=b(Y.internalFormat,Ie,ge,Y.colorSpace);if(!n.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>ie),Ee=Math.max(1,w.height>>ie);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ie,Me,ue,Ee,w.depth,0,Ie,ge,null):t.texImage2D(se,ie,Me,ue,Ee,0,Ie,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),De(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,se,n.get(Y).__webglTexture,0,lt(w)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,se,n.get(Y).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(I,w,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const te=w.depthTexture,se=te&&te.isDepthTexture?te.type:null,ie=M(w.stencilBuffer,se),Ie=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=lt(w);De(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ie,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ie,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ie,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,I)}else{const te=w.textures;for(let se=0;se<te.length;se++){const ie=te[se],Ie=s.convert(ie.format,ie.colorSpace),ge=s.convert(ie.type),Me=b(ie.internalFormat,Ie,ge,ie.colorSpace),We=lt(w);Y&&De(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Me,w.width,w.height):De(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,Me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Me,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const te=n.get(w.depthTexture).__webglTexture,se=lt(w);if(w.depthTexture.format===Ar)De(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(w.depthTexture.format===Ir)De(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Fe(I){const w=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const te=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),te){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=te}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");_e(w.__webglFramebuffer,I)}else if(Y){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]===void 0)w.__webglDepthbuffer[te]=i.createRenderbuffer(),Ae(w.__webglDepthbuffer[te],I,!1);else{const se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ae(w.__webglDepthbuffer,I,!1);else{const te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(I,w,Y){const te=n.get(I);w!==void 0&&ce(te.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Fe(I)}function Qe(I){const w=I.texture,Y=n.get(I),te=n.get(w);I.addEventListener("dispose",R);const se=I.textures,ie=I.isWebGLCubeRenderTarget===!0,Ie=se.length>1;if(Ie||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=w.version,a.memory.textures++),ie){Y.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[ge]=[];for(let Me=0;Me<w.mipmaps.length;Me++)Y.__webglFramebuffer[ge][Me]=i.createFramebuffer()}else Y.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)Y.__webglFramebuffer[ge]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let ge=0,Me=se.length;ge<Me;ge++){const We=n.get(se[ge]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&De(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ge=0;ge<se.length;ge++){const Me=se[ge];Y.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ge]);const We=s.convert(Me.format,Me.colorSpace),ue=s.convert(Me.type),Ee=b(Me.internalFormat,We,ue,Me.colorSpace,I.isXRRenderTarget===!0),rt=lt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Ee,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),we(i.TEXTURE_CUBE_MAP,w);for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)ce(Y.__webglFramebuffer[ge][Me],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else ce(Y.__webglFramebuffer[ge],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ge=0,Me=se.length;ge<Me;ge++){const We=se[ge],ue=n.get(We);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),we(i.TEXTURE_2D,We),ce(Y.__webglFramebuffer,I,We,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),g(We)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,te.__webglTexture),we(ge,w),w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)ce(Y.__webglFramebuffer[Me],I,w,i.COLOR_ATTACHMENT0,ge,Me);else ce(Y.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,ge,0);g(w)&&p(ge),t.unbindTexture()}I.depthBuffer&&Fe(I)}function vt(I){const w=I.textures;for(let Y=0,te=w.length;Y<te;Y++){const se=w[Y];if(g(se)){const ie=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(se).__webglTexture;t.bindTexture(ie,Ie),p(ie),t.unbindTexture()}}}const O=[],xt=[];function it(I){if(I.samples>0){if(De(I)===!1){const w=I.textures,Y=I.width,te=I.height;let se=i.COLOR_BUFFER_BIT;const ie=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(I),ge=w.length>1;if(ge)for(let Me=0;Me<w.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);const We=n.get(w[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,Y,te,0,0,Y,te,se,i.NEAREST),l===!0&&(O.length=0,xt.length=0,O.push(i.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(O.push(ie),xt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Me=0;Me<w.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);const We=n.get(w[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function lt(I){return Math.min(r.maxSamples,I.samples)}function De(I){const w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ct(I){const w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function ke(I,w){const Y=I.colorSpace,te=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Pi&&Y!==yi&&(ft.getTransfer(Y)===_t?(te!==Ln||se!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function Ge(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=ee,this.rebindTextures=ze,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=De}function cg(i,e){function t(n,r=yi){let s;const a=ft.getTransfer(r);if(n===ri)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.BYTE;if(n===Nh)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Q0)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===hs)return i.HALF_FLOAT;if(n===Fh)return i.ALPHA;if(n===zh)return i.RGB;if(n===Ln)return i.RGBA;if(n===Oh)return i.LUMINANCE;if(n===kh)return i.LUMINANCE_ALPHA;if(n===Ar)return i.DEPTH_COMPONENT;if(n===Ir)return i.DEPTH_STENCIL;if(n===Bh)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===Hh)return i.RG;if(n===il)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===sa||n===aa||n===oa||n===la)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===i0||n===r0||n===s0||n===a0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===i0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===r0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===s0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===a0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===o0||n===l0||n===c0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===o0||n===l0)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===c0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===h0||n===u0||n===d0||n===f0||n===p0||n===m0||n===g0||n===v0||n===x0||n===_0||n===y0||n===M0||n===b0||n===S0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===h0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===u0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===d0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===f0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===p0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===m0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===g0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===v0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===x0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===y0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===M0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===b0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===S0)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===w0||n===E0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ca)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===w0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===E0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===T0||n===A0||n===C0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===T0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===A0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===C0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class hg extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ei extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ug={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
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

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ei({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Da(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends Qi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null;const x=new pg,g=t.getContextAttributes();let p=null,b=null;const M=[],A=[],F=new Ue;let R=null;const P=new mn;P.layers.enable(1),P.viewport=new yt;const U=new mn;U.layers.enable(2),U.viewport=new yt;const E=[P,U],S=new hg;S.layers.enable(1),S.layers.enable(2);let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=M[J];return ce===void 0&&(ce=new So,M[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=M[J];return ce===void 0&&(ce=new So,M[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=M[J];return ce===void 0&&(ce=new So,M[J]=ce),ce.getHandSpace()};function q(J){const ce=A.indexOf(J.inputSource);if(ce===-1)return;const Ae=M[ce];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,c||a),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Z);for(let J=0;J<M.length;J++){const ce=A[J];ce!==null&&(A[J]=null,M[J].disconnect(ce))}z=null,G=null,x.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,b=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Zi(m.framebufferWidth,m.framebufferHeight,{format:Ln,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,Ae=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?Ir:Ar,Ae=g.stencil?Lr:Ki);const Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Zi(f.textureWidth,f.textureHeight,{format:Ln,type:ri,depthTexture:new iu(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(J){for(let ce=0;ce<J.removed.length;ce++){const Ae=J.removed[ce],_e=A.indexOf(Ae);_e>=0&&(A[_e]=null,M[_e].disconnect(Ae))}for(let ce=0;ce<J.added.length;ce++){const Ae=J.added[ce];let _e=A.indexOf(Ae);if(_e===-1){for(let ze=0;ze<M.length;ze++)if(ze>=A.length){A.push(Ae),_e=ze;break}else if(A[ze]===null){A[ze]=Ae,_e=ze;break}if(_e===-1)break}const Fe=M[_e];Fe&&Fe.connect(Ae)}}const $=new D,ee=new D;function j(J,ce,Ae){$.setFromMatrixPosition(ce.matrixWorld),ee.setFromMatrixPosition(Ae.matrixWorld);const _e=$.distanceTo(ee),Fe=ce.projectionMatrix.elements,ze=Ae.projectionMatrix.elements,Qe=Fe[14]/(Fe[10]-1),vt=Fe[14]/(Fe[10]+1),O=(Fe[9]+1)/Fe[5],xt=(Fe[9]-1)/Fe[5],it=(Fe[8]-1)/Fe[0],lt=(ze[8]+1)/ze[0],De=Qe*it,Ct=Qe*lt,ke=_e/(-it+lt),Ge=ke*-it;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ge),J.translateZ(ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Fe[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const I=Qe+ke,w=vt+ke,Y=De-Ge,te=Ct+(_e-Ge),se=O*vt/w*I,ie=xt*vt/w*I;J.projectionMatrix.makePerspective(Y,te,se,ie,I,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ye(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ce=J.near,Ae=J.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),S.near=U.near=P.near=ce,S.far=U.far=P.far=Ae,(z!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),z=S.near,G=S.far);const _e=J.parent,Fe=S.cameras;ye(S,_e);for(let ze=0;ze<Fe.length;ze++)ye(Fe[ze],_e);Fe.length===2?j(S,P,U):S.projectionMatrix.copy(P.projectionMatrix),ve(J,S,_e)};function ve(J,ce,Ae){Ae===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=R0*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let we=null;function $e(J,ce){if(h=ce.getViewerPose(c||a),_=ce,h!==null){const Ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let _e=!1;Ae.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let ze=0;ze<Ae.length;ze++){const Qe=Ae[ze];let vt=null;if(m!==null)vt=m.getViewport(Qe);else{const xt=d.getViewSubImage(f,Qe);vt=xt.viewport,ze===0&&(e.setRenderTargetTextures(b,xt.colorTexture,f.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(b))}let O=E[ze];O===void 0&&(O=new mn,O.layers.enable(ze),O.viewport=new yt,E[ze]=O),O.matrix.fromArray(Qe.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Qe.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(vt.x,vt.y,vt.width,vt.height),ze===0&&(S.matrix.copy(O.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(O)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const ze=d.getDepthInformation(Ae[0]);ze&&ze.isValid&&ze.texture&&x.init(e,ze,r.renderState)}}for(let Ae=0;Ae<M.length;Ae++){const _e=A[Ae],Fe=M[Ae];_e!==null&&Fe!==void 0&&Fe.update(_e,ce,c||a)}we&&we(J,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Ke=new tu;Ke.setAnimationLoop($e),this.setAnimationLoop=function(J){we=J},this.dispose=function(){}}}const Oi=new Bn,gg=new Mt;function vg(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Jh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,M,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,A)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,A=b.envMapRotation;M&&(g.envMap.value=M,Oi.copy(A),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),g.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(Oi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function xg(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const A=M.program;n.uniformBlockBinding(b,A)}function c(b,M){let A=r[b.id];A===void 0&&(_(b),A=h(b),r[b.id]=A,b.addEventListener("dispose",g));const F=M.program;n.updateUBOMapping(b,F);const R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function h(b){const M=d();b.__bindingPointIndex=M;const A=i.createBuffer(),F=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,F,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,A),A}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=r[b.id],A=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,P=A.length;R<P;R++){const U=Array.isArray(A[R])?A[R]:[A[R]];for(let E=0,S=U.length;E<S;E++){const z=U[E];if(m(z,R,E,F)===!0){const G=z.__offset,q=Array.isArray(z.value)?z.value:[z.value];let K=0;for(let Z=0;Z<q.length;Z++){const $=q[Z],ee=x($);typeof $=="number"||typeof $=="boolean"?(z.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,G+K,z.__data)):$.isMatrix3?(z.__data[0]=$.elements[0],z.__data[1]=$.elements[1],z.__data[2]=$.elements[2],z.__data[3]=0,z.__data[4]=$.elements[3],z.__data[5]=$.elements[4],z.__data[6]=$.elements[5],z.__data[7]=0,z.__data[8]=$.elements[6],z.__data[9]=$.elements[7],z.__data[10]=$.elements[8],z.__data[11]=0):($.toArray(z.__data,K),K+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,M,A,F){const R=b.value,P=M+"_"+A;if(F[P]===void 0)return typeof R=="number"||typeof R=="boolean"?F[P]=R:F[P]=R.clone(),!0;{const U=F[P];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return F[P]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function _(b){const M=b.uniforms;let A=0;const F=16;for(let P=0,U=M.length;P<U;P++){const E=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,z=E.length;S<z;S++){const G=E[S],q=Array.isArray(G.value)?G.value:[G.value];for(let K=0,Z=q.length;K<Z;K++){const $=q[K],ee=x($),j=A%F,ye=j%ee.boundary,ve=j+ye;A+=ye,ve!==0&&F-ve<ee.storage&&(A+=F-ve),G.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=ee.storage}}}const R=A%F;return R>0&&(A+=F-R),b.__size=A,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){const M=b.target;M.removeEventListener("dispose",g);const A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class _g{constructor(e={}){const{canvas:t=cf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=Si,this.toneMappingExposure=1;const M=this;let A=!1,F=0,R=0,P=null,U=-1,E=null;const S=new yt,z=new yt;let G=null;const q=new tt(0);let K=0,Z=t.width,$=t.height,ee=1,j=null,ye=null;const ve=new yt(0,0,Z,$),we=new yt(0,0,Z,$);let $e=!1;const Ke=new ol;let J=!1,ce=!1;const Ae=new Mt,_e=new D,Fe=new yt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function vt(){return P===null?ee:1}let O=n;function xt(C,H){return t.getContext(C,H)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${J0}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",pe,!1),O===null){const H="webgl2";if(O=xt(H,C),O===null)throw xt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let it,lt,De,Ct,ke,Ge,I,w,Y,te,se,ie,Ie,ge,Me,We,ue,Ee,rt,qe,Te,Ye,et,Et;function B(){it=new E1(O),it.init(),Ye=new cg(O,it),lt=new _1(O,it,e,Ye),De=new ag(O),Ct=new C1(O),ke=new X2,Ge=new lg(O,it,De,ke,lt,Ye,Ct),I=new M1(M),w=new w1(M),Y=new Uf(O),et=new v1(O,Y),te=new T1(O,Y,Ct,et),se=new P1(O,te,Y,Ct),rt=new R1(O,lt,Ge),We=new y1(ke),ie=new q2(M,I,w,it,lt,et,We),Ie=new vg(M,ke),ge=new j2,Me=new eg(it),Ee=new g1(M,I,w,De,se,f,l),ue=new sg(M,se,lt),Et=new xg(O,Ct,lt,De),qe=new x1(O,it,Ct),Te=new A1(O,it,Ct),Ct.programs=ie.programs,M.capabilities=lt,M.extensions=it,M.properties=ke,M.renderLists=ge,M.shadowMap=ue,M.state=De,M.info=Ct}B();const de=new mg(M,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=it.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=it.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(C){C!==void 0&&(ee=C,this.setSize(Z,$,!1))},this.getSize=function(C){return C.set(Z,$)},this.setSize=function(C,H,W=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,$=H,t.width=Math.floor(C*ee),t.height=Math.floor(H*ee),W===!0&&(t.style.width=C+"px",t.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(Z*ee,$*ee).floor()},this.setDrawingBufferSize=function(C,H,W){Z=C,$=H,ee=W,t.width=Math.floor(C*W),t.height=Math.floor(H*W),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(ve)},this.setViewport=function(C,H,W,X){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,H,W,X),De.viewport(S.copy(ve).multiplyScalar(ee).round())},this.getScissor=function(C){return C.copy(we)},this.setScissor=function(C,H,W,X){C.isVector4?we.set(C.x,C.y,C.z,C.w):we.set(C,H,W,X),De.scissor(z.copy(we).multiplyScalar(ee).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(C){De.setScissorTest($e=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){ye=C},this.getClearColor=function(C){return C.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(C=!0,H=!0,W=!0){let X=0;if(C){let V=!1;if(P!==null){const fe=P.texture.format;V=fe===rl||fe===il||fe===nl}if(V){const fe=P.texture.type,be=fe===ri||fe===Ki||fe===as||fe===Lr||fe===el||fe===tl,Ce=Ee.getClearColor(),Re=Ee.getClearAlpha(),He=Ce.r,Ve=Ce.g,Pe=Ce.b;be?(m[0]=He,m[1]=Ve,m[2]=Pe,m[3]=Re,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=He,_[1]=Ve,_[2]=Pe,_[3]=Re,O.clearBufferiv(O.COLOR,0,_))}else X|=O.COLOR_BUFFER_BIT}H&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),Me.dispose(),ke.dispose(),I.dispose(),w.dispose(),se.dispose(),et.dispose(),Et.dispose(),ie.dispose(),de.dispose(),de.removeEventListener("sessionstart",In),de.removeEventListener("sessionend",Rl),Li.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=Ct.autoReset,H=ue.enabled,W=ue.autoUpdate,X=ue.needsUpdate,V=ue.type;B(),Ct.autoReset=C,ue.enabled=H,ue.autoUpdate=W,ue.needsUpdate=X,ue.type=V}function pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Be(C){const H=C.target;H.removeEventListener("dispose",Be),st(H)}function st(C){Lt(C),ke.remove(C)}function Lt(C){const H=ke.get(C).programs;H!==void 0&&(H.forEach(function(W){ie.releaseProgram(W)}),C.isShaderMaterial&&ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,W,X,V,fe){H===null&&(H=ze);const be=V.isMesh&&V.matrixWorld.determinant()<0,Ce=cd(C,H,W,X,V);De.setMaterial(X,be);let Re=W.index,He=1;if(X.wireframe===!0){if(Re=te.getWireframeAttribute(W),Re===void 0)return;He=2}const Ve=W.drawRange,Pe=W.attributes.position;let ht=Ve.start*He,Rt=(Ve.start+Ve.count)*He;fe!==null&&(ht=Math.max(ht,fe.start*He),Rt=Math.min(Rt,(fe.start+fe.count)*He)),Re!==null?(ht=Math.max(ht,0),Rt=Math.min(Rt,Re.count)):Pe!=null&&(ht=Math.max(ht,0),Rt=Math.min(Rt,Pe.count));const Pt=Rt-ht;if(Pt<0||Pt===1/0)return;et.setup(V,X,Ce,W,Re);let un,ut=qe;if(Re!==null&&(un=Y.get(Re),ut=Te,ut.setIndex(un)),V.isMesh)X.wireframe===!0?(De.setLineWidth(X.wireframeLinewidth*vt()),ut.setMode(O.LINES)):ut.setMode(O.TRIANGLES);else if(V.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),De.setLineWidth(Le*vt()),V.isLineSegments?ut.setMode(O.LINES):V.isLineLoop?ut.setMode(O.LINE_LOOP):ut.setMode(O.LINE_STRIP)}else V.isPoints?ut.setMode(O.POINTS):V.isSprite&&ut.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ut.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Le=V._multiDrawStarts,Yt=V._multiDrawCounts,dt=V._multiDrawCount,Tn=Re?Y.get(Re).bytesPerElement:1,tr=ke.get(X).currentProgram.getUniforms();for(let dn=0;dn<dt;dn++)tr.setValue(O,"_gl_DrawID",dn),ut.render(Le[dn]/Tn,Yt[dn])}else if(V.isInstancedMesh)ut.renderInstances(ht,Pt,V.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Yt=Math.min(W.instanceCount,Le);ut.renderInstances(ht,Pt,Yt)}else ut.render(ht,Pt)};function Xt(C,H,W){C.transparent===!0&&C.side===gn&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,gs(C,H,W),C.side=wi,C.needsUpdate=!0,gs(C,H,W),C.side=gn):gs(C,H,W)}this.compile=function(C,H,W=null){W===null&&(W=C),g=Me.get(W),g.init(H),b.push(g),W.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),C!==W&&C.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights();const X=new Set;return C.traverse(function(V){const fe=V.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){const Ce=fe[be];Xt(Ce,W,V),X.add(Ce)}else Xt(fe,W,V),X.add(fe)}),b.pop(),g=null,X},this.compileAsync=function(C,H,W=null){const X=this.compile(C,H,W);return new Promise(V=>{function fe(){if(X.forEach(function(be){ke.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){V(C);return}setTimeout(fe,10)}it.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ct=null;function Wn(C){ct&&ct(C)}function In(){Li.stop()}function Rl(){Li.start()}const Li=new tu;Li.setAnimationLoop(Wn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(C){ct=C,de.setAnimationLoop(C),C===null?Li.stop():Li.start()},de.addEventListener("sessionstart",In),de.addEventListener("sessionend",Rl),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(H),H=de.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,H,P),g=Me.get(C,b.length),g.init(H),b.push(g),Ae.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ke.setFromProjectionMatrix(Ae),ce=this.localClippingEnabled,J=We.init(this.clippingPlanes,ce),x=ge.get(C,p.length),x.init(),p.push(x),de.enabled===!0&&de.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&Xa(fe,H,-1/0,M.sortObjects)}Xa(C,H,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(j,ye),Qe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Qe&&Ee.addToRenderList(x,C),this.info.render.frame++,J===!0&&We.beginShadows();const W=g.state.shadowsArray;ue.render(W,C,H),J===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,V=x.transmissive;if(g.setupLights(),H.isArrayCamera){const fe=H.cameras;if(V.length>0)for(let be=0,Ce=fe.length;be<Ce;be++){const Re=fe[be];Dl(X,V,C,Re)}Qe&&Ee.render(C);for(let be=0,Ce=fe.length;be<Ce;be++){const Re=fe[be];Pl(x,C,Re,Re.viewport)}}else V.length>0&&Dl(X,V,C,H),Qe&&Ee.render(C),Pl(x,C,H);P!==null&&(Ge.updateMultisampleRenderTarget(P),Ge.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(M,C,H),et.resetDefaultState(),U=-1,E=null,b.pop(),b.length>0?(g=b[b.length-1],J===!0&&We.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Xa(C,H,W,X){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ke.intersectsSprite(C)){X&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const be=se.update(C),Ce=C.material;Ce.visible&&x.push(C,be,Ce,W,Fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ke.intersectsObject(C))){const be=se.update(C),Ce=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Fe.copy(be.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ce)){const Re=be.groups;for(let He=0,Ve=Re.length;He<Ve;He++){const Pe=Re[He],ht=Ce[Pe.materialIndex];ht&&ht.visible&&x.push(C,be,ht,W,Fe.z,Pe)}}else Ce.visible&&x.push(C,be,Ce,W,Fe.z,null)}}const fe=C.children;for(let be=0,Ce=fe.length;be<Ce;be++)Xa(fe[be],H,W,X)}function Pl(C,H,W,X){const V=C.opaque,fe=C.transmissive,be=C.transparent;g.setupLightsView(W),J===!0&&We.setGlobalState(M.clippingPlanes,W),X&&De.viewport(S.copy(X)),V.length>0&&ms(V,H,W),fe.length>0&&ms(fe,H,W),be.length>0&&ms(be,H,W),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Dl(C,H,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new Zi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?hs:ri,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const fe=g.state.transmissionRenderTarget[X.id],be=X.viewport||S;fe.setSize(be.z,be.w);const Ce=M.getRenderTarget();M.setRenderTarget(fe),M.getClearColor(q),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),Qe&&Ee.render(W);const Re=M.toneMapping;M.toneMapping=Si;const He=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),J===!0&&We.setGlobalState(M.clippingPlanes,X),ms(C,W,X),Ge.updateMultisampleRenderTarget(fe),Ge.updateRenderTargetMipmap(fe),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Pe=0,ht=H.length;Pe<ht;Pe++){const Rt=H[Pe],Pt=Rt.object,un=Rt.geometry,ut=Rt.material,Le=Rt.group;if(ut.side===gn&&Pt.layers.test(X.layers)){const Yt=ut.side;ut.side=cn,ut.needsUpdate=!0,Ll(Pt,W,X,un,ut,Le),ut.side=Yt,ut.needsUpdate=!0,Ve=!0}}Ve===!0&&(Ge.updateMultisampleRenderTarget(fe),Ge.updateRenderTargetMipmap(fe))}M.setRenderTarget(Ce),M.setClearColor(q,K),He!==void 0&&(X.viewport=He),M.toneMapping=Re}function ms(C,H,W){const X=H.isScene===!0?H.overrideMaterial:null;for(let V=0,fe=C.length;V<fe;V++){const be=C[V],Ce=be.object,Re=be.geometry,He=X===null?be.material:X,Ve=be.group;Ce.layers.test(W.layers)&&Ll(Ce,H,W,Re,He,Ve)}}function Ll(C,H,W,X,V,fe){C.onBeforeRender(M,H,W,X,V,fe),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(M,H,W,X,C,fe),V.transparent===!0&&V.side===gn&&V.forceSinglePass===!1?(V.side=cn,V.needsUpdate=!0,M.renderBufferDirect(W,H,X,V,C,fe),V.side=wi,V.needsUpdate=!0,M.renderBufferDirect(W,H,X,V,C,fe),V.side=gn):M.renderBufferDirect(W,H,X,V,C,fe),C.onAfterRender(M,H,W,X,V,fe)}function gs(C,H,W){H.isScene!==!0&&(H=ze);const X=ke.get(C),V=g.state.lights,fe=g.state.shadowsArray,be=V.state.version,Ce=ie.getParameters(C,V.state,fe,H,W),Re=ie.getProgramCacheKey(Ce);let He=X.programs;X.environment=C.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(C.isMeshStandardMaterial?w:I).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",Be),He=new Map,X.programs=He);let Ve=He.get(Re);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===be)return Nl(C,Ce),Ve}else Ce.uniforms=ie.getUniforms(C),C.onBeforeCompile(Ce,M),Ve=ie.acquireProgram(Ce,Re),He.set(Re,Ve),X.uniforms=Ce.uniforms;const Pe=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pe.clippingPlanes=We.uniform),Nl(C,Ce),X.needsLights=ud(C),X.lightsStateVersion=be,X.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMap.value=V.state.directionalShadowMap,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotShadowMap.value=V.state.spotShadowMap,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMap.value=V.state.pointShadowMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function Il(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=ha.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Nl(C,H){const W=ke.get(C);W.outputColorSpace=H.outputColorSpace,W.batching=H.batching,W.batchingColor=H.batchingColor,W.instancing=H.instancing,W.instancingColor=H.instancingColor,W.instancingMorph=H.instancingMorph,W.skinning=H.skinning,W.morphTargets=H.morphTargets,W.morphNormals=H.morphNormals,W.morphColors=H.morphColors,W.morphTargetsCount=H.morphTargetsCount,W.numClippingPlanes=H.numClippingPlanes,W.numIntersection=H.numClipIntersection,W.vertexAlphas=H.vertexAlphas,W.vertexTangents=H.vertexTangents,W.toneMapping=H.toneMapping}function cd(C,H,W,X,V){H.isScene!==!0&&(H=ze),Ge.resetTextureUnits();const fe=H.fog,be=X.isMeshStandardMaterial?H.environment:null,Ce=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pi,Re=(X.isMeshStandardMaterial?w:I).get(X.envMap||be),He=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!W.morphAttributes.position,ht=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let Pt=Si;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pt=M.toneMapping);const un=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=un!==void 0?un.length:0,Le=ke.get(X),Yt=g.state.lights;if(J===!0&&(ce===!0||C!==E)){const Mn=C===E&&X.id===U;We.setState(X,C,Mn)}let dt=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Yt.state.version||Le.outputColorSpace!==Ce||V.isBatchedMesh&&Le.batching===!1||!V.isBatchedMesh&&Le.batching===!0||V.isBatchedMesh&&Le.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Le.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Le.instancing===!1||!V.isInstancedMesh&&Le.instancing===!0||V.isSkinnedMesh&&Le.skinning===!1||!V.isSkinnedMesh&&Le.skinning===!0||V.isInstancedMesh&&Le.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Le.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Le.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Le.instancingMorph===!1&&V.morphTexture!==null||Le.envMap!==Re||X.fog===!0&&Le.fog!==fe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==We.numPlanes||Le.numIntersection!==We.numIntersection)||Le.vertexAlphas!==He||Le.vertexTangents!==Ve||Le.morphTargets!==Pe||Le.morphNormals!==ht||Le.morphColors!==Rt||Le.toneMapping!==Pt||Le.morphTargetsCount!==ut)&&(dt=!0):(dt=!0,Le.__version=X.version);let Tn=Le.currentProgram;dt===!0&&(Tn=gs(X,H,V));let tr=!1,dn=!1,Ya=!1;const It=Tn.getUniforms(),ci=Le.uniforms;if(De.useProgram(Tn.program)&&(tr=!0,dn=!0,Ya=!0),X.id!==U&&(U=X.id,dn=!0),tr||E!==C){It.setValue(O,"projectionMatrix",C.projectionMatrix),It.setValue(O,"viewMatrix",C.matrixWorldInverse);const Mn=It.map.cameraPosition;Mn!==void 0&&Mn.setValue(O,_e.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&It.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&It.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,dn=!0,Ya=!0)}if(V.isSkinnedMesh){It.setOptional(O,V,"bindMatrix"),It.setOptional(O,V,"bindMatrixInverse");const Mn=V.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),It.setValue(O,"boneTexture",Mn.boneTexture,Ge))}V.isBatchedMesh&&(It.setOptional(O,V,"batchingTexture"),It.setValue(O,"batchingTexture",V._matricesTexture,Ge),It.setOptional(O,V,"batchingIdTexture"),It.setValue(O,"batchingIdTexture",V._indirectTexture,Ge),It.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&It.setValue(O,"batchingColorTexture",V._colorsTexture,Ge));const ja=W.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0)&&rt.update(V,W,Tn),(dn||Le.receiveShadow!==V.receiveShadow)&&(Le.receiveShadow=V.receiveShadow,It.setValue(O,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ci.envMap.value=Re,ci.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(ci.envMapIntensity.value=H.environmentIntensity),dn&&(It.setValue(O,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&hd(ci,Ya),fe&&X.fog===!0&&Ie.refreshFogUniforms(ci,fe),Ie.refreshMaterialUniforms(ci,X,ee,$,g.state.transmissionRenderTarget[C.id]),ha.upload(O,Il(Le),ci,Ge)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ha.upload(O,Il(Le),ci,Ge),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&It.setValue(O,"center",V.center),It.setValue(O,"modelViewMatrix",V.modelViewMatrix),It.setValue(O,"normalMatrix",V.normalMatrix),It.setValue(O,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Mn=X.uniformsGroups;for(let $a=0,dd=Mn.length;$a<dd;$a++){const Ul=Mn[$a];Et.update(Ul,Tn),Et.bind(Ul,Tn)}}return Tn}function hd(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function ud(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,H,W){ke.get(C.texture).__webglTexture=H,ke.get(C.depthTexture).__webglTexture=W;const X=ke.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,H){const W=ke.get(C);W.__webglFramebuffer=H,W.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,W=0){P=C,F=H,R=W;let X=!0,V=null,fe=!1,be=!1;if(C){const Re=ke.get(C);if(Re.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(Re.__webglFramebuffer===void 0)Ge.setupRenderTarget(C);else if(Re.__hasExternalTextures)Ge.rebindTextures(C,ke.get(C.texture).__webglTexture,ke.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Pe=C.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&ke.has(Pe)&&(C.width!==Pe.image.width||C.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Ve=ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?V=Ve[H][W]:V=Ve[H],fe=!0):C.samples>0&&Ge.useMultisampledRTT(C)===!1?V=ke.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[W]:V=Ve,S.copy(C.viewport),z.copy(C.scissor),G=C.scissorTest}else S.copy(ve).multiplyScalar(ee).floor(),z.copy(we).multiplyScalar(ee).floor(),G=$e;if(De.bindFramebuffer(O.FRAMEBUFFER,V)&&X&&De.drawBuffers(C,V),De.viewport(S),De.scissor(z),De.setScissorTest(G),fe){const Re=ke.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,W)}else if(be){const Re=ke.get(C.texture),He=H||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,W||0,He)}U=-1},this.readRenderTargetPixels=function(C,H,W,X,V,fe,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){De.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const Re=C.texture,He=Re.format,Ve=Re.type;if(!lt.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-X&&W>=0&&W<=C.height-V&&O.readPixels(H,W,X,V,Ye.convert(He),Ye.convert(Ve),fe)}finally{const Re=P!==null?ke.get(P).__webglFramebuffer:null;De.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(C,H,W,X,V,fe,be){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){De.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const Re=C.texture,He=Re.format,Ve=Re.type;if(!lt.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=C.width-X&&W>=0&&W<=C.height-V){const Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(H,W,X,V,Ye.convert(He),Ye.convert(Ve),0),O.flush();const ht=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await hf(O,ht,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe)}finally{O.deleteBuffer(Pe),O.deleteSync(ht)}return fe}}finally{const Re=P!==null?ke.get(P).__webglFramebuffer:null;De.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(C,H=null,W=0){C.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-W),V=Math.floor(C.image.width*X),fe=Math.floor(C.image.height*X),be=H!==null?H.x:0,Ce=H!==null?H.y:0;Ge.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,be,Ce,V,fe),De.unbindTexture()},this.copyTextureToTexture=function(C,H,W=null,X=null,V=0){C.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],H=arguments[2],V=arguments[3]||0,W=null);let fe,be,Ce,Re,He,Ve;W!==null?(fe=W.max.x-W.min.x,be=W.max.y-W.min.y,Ce=W.min.x,Re=W.min.y):(fe=C.image.width,be=C.image.height,Ce=0,Re=0),X!==null?(He=X.x,Ve=X.y):(He=0,Ve=0);const Pe=Ye.convert(H.format),ht=Ye.convert(H.type);Ge.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const Rt=O.getParameter(O.UNPACK_ROW_LENGTH),Pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),un=O.getParameter(O.UNPACK_SKIP_PIXELS),ut=O.getParameter(O.UNPACK_SKIP_ROWS),Le=O.getParameter(O.UNPACK_SKIP_IMAGES),Yt=C.isCompressedTexture?C.mipmaps[V]:C.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Yt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),O.pixelStorei(O.UNPACK_SKIP_ROWS,Re),C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,He,Ve,fe,be,Pe,ht,Yt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,He,Ve,Yt.width,Yt.height,Pe,Yt.data):O.texSubImage2D(O.TEXTURE_2D,V,He,Ve,fe,be,Pe,ht,Yt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Rt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,un),O.pixelStorei(O.UNPACK_SKIP_ROWS,ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Le),V===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(C,H,W=null,X=null,V=0){C.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,C=arguments[2],H=arguments[3],V=arguments[4]||0);let fe,be,Ce,Re,He,Ve,Pe,ht,Rt;const Pt=C.isCompressedTexture?C.mipmaps[V]:C.image;W!==null?(fe=W.max.x-W.min.x,be=W.max.y-W.min.y,Ce=W.max.z-W.min.z,Re=W.min.x,He=W.min.y,Ve=W.min.z):(fe=Pt.width,be=Pt.height,Ce=Pt.depth,Re=0,He=0,Ve=0),X!==null?(Pe=X.x,ht=X.y,Rt=X.z):(Pe=0,ht=0,Rt=0);const un=Ye.convert(H.format),ut=Ye.convert(H.type);let Le;if(H.isData3DTexture)Ge.setTexture3D(H,0),Le=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Ge.setTexture2DArray(H,0),Le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const Yt=O.getParameter(O.UNPACK_ROW_LENGTH),dt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Tn=O.getParameter(O.UNPACK_SKIP_PIXELS),tr=O.getParameter(O.UNPACK_SKIP_ROWS),dn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),O.pixelStorei(O.UNPACK_SKIP_ROWS,He),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve),C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Le,V,Pe,ht,Rt,fe,be,Ce,un,ut,Pt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,V,Pe,ht,Rt,fe,be,Ce,un,Pt.data):O.texSubImage3D(Le,V,Pe,ht,Rt,fe,be,Ce,un,ut,Pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Yt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Tn),O.pixelStorei(O.UNPACK_SKIP_ROWS,tr),O.pixelStorei(O.UNPACK_SKIP_IMAGES,dn),V===0&&H.generateMipmaps&&O.generateMipmap(Le),De.unbindTexture()},this.initRenderTarget=function(C){ke.get(C).__webglFramebuffer===void 0&&Ge.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ge.setTextureCube(C,0):C.isData3DTexture?Ge.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ge.setTexture2DArray(C,0):Ge.setTexture2D(C,0),De.unbindTexture()},this.resetState=function(){F=0,R=0,P=null,De.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sl?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Ra?"display-p3":"srgb"}}class yg extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ur extends kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _a=new D,ya=new D,Lc=new Mt,Jr=new al,ks=new Pa,wo=new D,Ic=new D;class Ma extends qt{constructor(e=new jt,t=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)_a.fromBufferAttribute(t,r-1),ya.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=_a.distanceTo(ya);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;Lc.copy(r).invert(),Jr.copy(e.ray).applyMatrix4(Lc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=m,g=_-1;x<g;x+=c){const p=h.getX(x),b=h.getX(x+1),M=Bs(this,e,Jr,l,p,b);M&&t.push(M)}if(this.isLineLoop){const x=h.getX(_-1),g=h.getX(m),p=Bs(this,e,Jr,l,x,g);p&&t.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=m,g=_-1;x<g;x+=c){const p=Bs(this,e,Jr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Bs(this,e,Jr,l,_-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bs(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(_a.fromBufferAttribute(a,r),ya.fromBufferAttribute(a,s),t.distanceSqToSegment(_a,ya,wo,Ic)>n)return;wo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(wo);if(!(l<e.near||l>e.far))return{distance:l,point:Ic.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Nc=new D,Uc=new D;class lu extends Ma{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Nc.fromBufferAttribute(t,r),Uc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Nc.distanceTo(Uc);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class on extends jt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],m=[];let _=0;const x=[],g=n/2;let p=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(m,2));function b(){const A=new D,F=new D;let R=0;const P=(t-e)/n;for(let U=0;U<=s;U++){const E=[],S=U/s,z=S*(t-e)+e;for(let G=0;G<=r;G++){const q=G/r,K=q*l+o,Z=Math.sin(K),$=Math.cos(K);F.x=z*Z,F.y=-S*n+g,F.z=z*$,d.push(F.x,F.y,F.z),A.set(Z,P,$).normalize(),f.push(A.x,A.y,A.z),m.push(q,1-S),E.push(_++)}x.push(E)}for(let U=0;U<r;U++)for(let E=0;E<s;E++){const S=x[E][U],z=x[E+1][U],G=x[E+1][U+1],q=x[E][U+1];h.push(S,z,q),h.push(z,G,q),R+=6}c.addGroup(p,R,0),p+=R}function M(A){const F=_,R=new Ue,P=new D;let U=0;const E=A===!0?e:t,S=A===!0?1:-1;for(let G=1;G<=r;G++)d.push(0,g*S,0),f.push(0,S,0),m.push(.5,.5),_++;const z=_;for(let G=0;G<=r;G++){const K=G/r*l+o,Z=Math.cos(K),$=Math.sin(K);P.x=E*$,P.y=g*S,P.z=E*Z,d.push(P.x,P.y,P.z),f.push(0,S,0),R.x=Z*.5+.5,R.y=$*.5*S+.5,m.push(R.x,R.y),_++}for(let G=0;G<r;G++){const q=F+G,K=z+G;A===!0?h.push(K,K+1,q):h.push(K+1,K,q),U+=3}c.addGroup(p,U,A===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cl extends jt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(s.slice(),3)),this.setAttribute("uv",new bt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const M=new D,A=new D,F=new D;for(let R=0;R<t.length;R+=3)m(t[R+0],M),m(t[R+1],A),m(t[R+2],F),l(M,A,F,b)}function l(b,M,A,F){const R=F+1,P=[];for(let U=0;U<=R;U++){P[U]=[];const E=b.clone().lerp(A,U/R),S=M.clone().lerp(A,U/R),z=R-U;for(let G=0;G<=z;G++)G===0&&U===R?P[U][G]=E:P[U][G]=E.clone().lerp(S,G/z)}for(let U=0;U<R;U++)for(let E=0;E<2*(R-U)-1;E++){const S=Math.floor(E/2);E%2===0?(f(P[U][S+1]),f(P[U+1][S]),f(P[U][S])):(f(P[U][S+1]),f(P[U+1][S+1]),f(P[U+1][S]))}}function c(b){const M=new D;for(let A=0;A<s.length;A+=3)M.x=s[A+0],M.y=s[A+1],M.z=s[A+2],M.normalize().multiplyScalar(b),s[A+0]=M.x,s[A+1]=M.y,s[A+2]=M.z}function h(){const b=new D;for(let M=0;M<s.length;M+=3){b.x=s[M+0],b.y=s[M+1],b.z=s[M+2];const A=g(b)/2/Math.PI+.5,F=p(b)/Math.PI+.5;a.push(A,1-F)}_(),d()}function d(){for(let b=0;b<a.length;b+=6){const M=a[b+0],A=a[b+2],F=a[b+4],R=Math.max(M,A,F),P=Math.min(M,A,F);R>.9&&P<.1&&(M<.2&&(a[b+0]+=1),A<.2&&(a[b+2]+=1),F<.2&&(a[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function m(b,M){const A=b*3;M.x=e[A+0],M.y=e[A+1],M.z=e[A+2]}function _(){const b=new D,M=new D,A=new D,F=new D,R=new Ue,P=new Ue,U=new Ue;for(let E=0,S=0;E<s.length;E+=9,S+=6){b.set(s[E+0],s[E+1],s[E+2]),M.set(s[E+3],s[E+4],s[E+5]),A.set(s[E+6],s[E+7],s[E+8]),R.set(a[S+0],a[S+1]),P.set(a[S+2],a[S+3]),U.set(a[S+4],a[S+5]),F.copy(b).add(M).add(A).divideScalar(3);const z=g(F);x(R,S+0,b,z),x(P,S+2,M,z),x(U,S+4,A,z)}}function x(b,M,A,F){F<0&&b.x===1&&(a[M]=b.x-1),A.x===0&&A.z===0&&(a[M]=F/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.vertices,e.indices,e.radius,e.details)}}const Hs=new D,Vs=new D,Eo=new D,Gs=new Dn;class Mg extends jt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ns*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:g,c:p}=Gs;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Gs.getNormal(Eo),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const M=(b+1)%3,A=d[b],F=d[M],R=Gs[h[b]],P=Gs[h[M]],U=`${A}_${F}`,E=`${F}_${A}`;E in f&&f[E]?(Eo.dot(f[E].normal)<=s&&(m.push(R.x,R.y,R.z),m.push(P.x,P.y,P.z)),f[E]=null):U in f||(f[U]={index0:c[b],index1:c[M],normal:Eo.clone()})}}for(const _ in f)if(f[_]){const{index0:x,index1:g}=f[_];Hs.fromBufferAttribute(o,x),Vs.fromBufferAttribute(o,g),m.push(Hs.x,Hs.y,Hs.z),m.push(Vs.x,Vs.y,Vs.z)}this.setAttribute("position",new bt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class hl extends cl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hl(e.radius,e.detail)}}class Sr extends jt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let d=e;const f=(t-e)/r,m=new D,_=new Ue;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){const p=s+g/n*a;m.x=d*Math.cos(p),m.y=d*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,h.push(_.x,_.y)}d+=f}for(let x=0;x<r;x++){const g=x*(n+1);for(let p=0;p<n;p++){const b=p+g,M=b,A=b+n+1,F=b+n+2,R=b+1;o.push(M,A,R),o.push(A,F,R)}}this.setIndex(o),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Nn extends jt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,f=new D,m=[],_=[],x=[],g=[];for(let p=0;p<=n;p++){const b=[],M=p/n;let A=0;p===0&&a===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let F=0;F<=t;F++){const R=F/t;d.x=-e*Math.cos(r+R*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(r+R*s)*Math.sin(a+M*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(R+A,1-M),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const M=h[p][b+1],A=h[p][b],F=h[p+1][b],R=h[p+1][b+1];(p!==0||a>0)&&m.push(M,A,R),(p!==n-1||l<Math.PI)&&m.push(A,F,R)}this.setIndex(m),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ut extends kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bg extends Ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sg extends Ur{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class ul extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const To=new Mt,Fc=new D,zc=new D;class cu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fc),zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zc),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oc=new Mt,Qr=new D,Ao=new D;class wg extends cu{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qr),Ao.copy(n.position),Ao.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ao),n.updateMatrixWorld(),r.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc)}}class Eg extends ul{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new wg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tg extends cu{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ag extends ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cg extends ul{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rg extends lu{constructor(e=10,t=10,n=4473924,r=8947848){n=new tt(n),r=new tt(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,m=0,_=-o;f<=t;f++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const x=f===s?n:r;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const h=new jt;h.setAttribute("position",new bt(l,3)),h.setAttribute("color",new bt(c,3));const d=new Ur({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Bc=new D;let Ws,Co;class Kn extends qt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Ws===void 0&&(Ws=new jt,Ws.setAttribute("position",new bt([0,0,0,0,1,0],3)),Co=new on(0,.5,1,5,1),Co.translate(0,-.5,0)),this.position.copy(t),this.line=new Ma(Ws,new Ur({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new nt(Co,new ji({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Bc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Bc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Pg extends Qi{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:J0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=J0);const Hc={type:"change"},dl={type:"start"},hu={type:"end"},qs=new al,Vc=new xi,Dg=Math.cos(70*lf.DEG2RAD),kt=new D,an=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ro=1e-6;class Lg extends Pg{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ji,this._lastTargetPosition=new D,this._quat=new Ji().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kc,this._sphericalDelta=new kc,this._scale=1,this._panOffset=new D,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new D,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ng.bind(this),this._onPointerDown=Ig.bind(this),this._onPointerUp=Ug.bind(this),this._onContextMenu=Vg.bind(this),this._onMouseWheel=Og.bind(this),this._onKeyDown=kg.bind(this),this._onTouchStart=Bg.bind(this),this._onTouchMove=Hg.bind(this),this._onMouseDown=Fg.bind(this),this._onMouseMove=zg.bind(this),this._interceptControlDown=Gg.bind(this),this._interceptControlUp=Wg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hc),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),r<-Math.PI?r+=an:r>Math.PI&&(r-=an),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=kt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qs.origin.copy(this.object.position),qs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qs.direction))<Dg?this.object.lookAt(this.target):(Vc.setFromNormalAndCoplanarPoint(this.object.up,this.target),qs.intersectPlane(Vc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ro||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ro||this._lastTargetPosition.distanceToSquared(this.target)>Ro?(this.dispatchEvent(Hc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kt.copy(r).sub(this.target);let s=kt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ig(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ng(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ug(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hu),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pt.DOLLY;break;case Er.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}break;case Er.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(dl)}function zg(i){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Og(i){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(i.preventDefault(),this.dispatchEvent(dl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hu))}function kg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Bg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pt.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pt.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(dl)}function Hg(i){switch(this._trackPointer(i),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pt.NONE}}function Vg(i){this.enabled!==!1&&i.preventDefault()}function Gg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class qg{constructor(e){this.container=e,this.mode="SE3",this.scene=new yg,this.scene.background=new tt(724500);const t=e.clientWidth/e.clientHeight;this.camera=new mn(45,t,.1,100),this.camera.position.set(0,0,5.5),this.renderer=new _g({antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ph,e.appendChild(this.renderer.domElement),this.controls=new Lg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.target.set(0,0,0),this.setupLighting(),this.setupEnvironment(),this.setupGlobalAxes(),this.setupLocalAxes(),this.setupVelocityVectors(),this.setupRigidBody(),this.setupPositionLine(),this.setupTrajectoryTrail(),this.setupPlanarManipulator(),this.setupNullSpaceManipulator(),this.setupIKManipulator(),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize),this.render()}setupLighting(){const e=new Cg(16777215,.85);this.scene.add(e);const t=new Ag(16777215,1.2);t.position.set(8,12,8),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,this.scene.add(t);const n=new Eg(54015,1.2,15);n.position.set(-5,-3,5),this.scene.add(n)}setupEnvironment(){this.grid=new Rg(10,20,2042173,1251881),this.grid.position.z=-.05,this.grid.rotation.x=Math.PI/2,this.scene.add(this.grid)}setupGlobalAxes(){this.globalAxesGroup=new ei;const e=new D(0,0,0),t=1.5,n=new Kn(new D(1,0,0),e,t,16729943,.2,.1),r=new Kn(new D(0,1,0),e,t,3069299,.2,.1),s=new Kn(new D(0,0,1),e,t,2003199,.2,.1);[n,r,s].forEach(a=>{a.line.material.transparent=!0,a.line.material.opacity=.35,a.cone.material.transparent=!0,a.cone.material.opacity=.35}),this.globalAxesGroup.add(n,r,s),this.scene.add(this.globalAxesGroup)}setupLocalAxes(){this.localAxesGroup=new ei;const e=new D(0,0,0),t=1.2;this.localX=new Kn(new D(1,0,0),e,t,16729943,.2,.1),this.localY=new Kn(new D(0,1,0),e,t,3069299,.2,.1),this.localZ=new Kn(new D(0,0,1),e,t,2003199,.2,.1),this.localAxesGroup.add(this.localX,this.localY,this.localZ),this.scene.add(this.localAxesGroup)}setupVelocityVectors(){this.omegaArrow=new Kn(new D(1,0,0),new D(0,0,0),1,16766720,.18,.09),this.omegaArrow.visible=!1,this.scene.add(this.omegaArrow),this.velArrow=new Kn(new D(1,0,0),new D(0,0,0),1,62206,.18,.09),this.velArrow.visible=!1,this.scene.add(this.velArrow)}setupRigidBody(){const e=new Br(.8,.5,1.2),t=new bg({color:3718648,metalness:.1,roughness:.1,transmission:.85,thickness:.5,transparent:!0,opacity:.45});this.rigidBodyMesh=new nt(e,t);const n=new Mg(e),r=new Ur({color:62206,linewidth:2}),s=new lu(n,r);this.rigidBodyMesh.add(s),this.scene.add(this.rigidBodyMesh)}setupPositionLine(){const e=new jt,t=new Sg({color:9741240,dashSize:.15,gapSize:.1,transparent:!0,opacity:.6});this.positionLine=new Ma(e,t),this.positionLine.visible=!1,this.scene.add(this.positionLine)}setupTrajectoryTrail(){this.trailPoints=[],this.maxTrailLength=500;const e=new jt,t=new Ur({color:3718648,transparent:!0,opacity:.85});this.trailLine=new Ma(e,t),this.scene.add(this.trailLine)}setupPlanarManipulator(){this.planarGroup=new ei;const e=new Ut({color:3718648,emissive:165063,emissiveIntensity:.4,roughness:.2,metalness:.4});this.link1Mesh=new nt(new on(.12,.12,1,32),e);const t=new Ut({color:12616956,emissive:8266446,emissiveIntensity:.4,roughness:.2,metalness:.4});this.link2Mesh=new nt(new on(.1,.1,1,32),t);const n=new Ut({color:3359061,roughness:.3,metalness:.8});this.joint0Mesh=new nt(new on(.24,.24,.2,32),n),this.joint0Mesh.rotation.x=Math.PI/2;const r=new Ut({color:62206,roughness:.2,metalness:.7});this.joint1Mesh=new nt(new Nn(.16,32,32),r);const s=new Ut({color:16729943,emissive:10033947,emissiveIntensity:.6});this.joint2Mesh=new nt(new Nn(.18,32,32),s),this.endVelArrow=new Kn(new D(1,0,0),new D(0,0,0),1,16729943,.25,.14);const a=new Sr(1.98,2.02,64),o=new ji({color:3718648,side:gn,transparent:!0,opacity:.3});this.workspaceRing=new nt(a,o),this.planarGroup.add(this.link1Mesh,this.link2Mesh,this.joint0Mesh,this.joint1Mesh,this.joint2Mesh,this.endVelArrow,this.workspaceRing),this.planarGroup.visible=!1,this.scene.add(this.planarGroup)}setupNullSpaceManipulator(){this.nullSpaceGroup=new ei;const e=new Ut({color:3718648,emissive:165063,emissiveIntensity:.4,roughness:.2,metalness:.4});this.nsLink1Mesh=new nt(new on(.11,.11,1,32),e);const t=new Ut({color:12616956,emissive:8266446,emissiveIntensity:.4,roughness:.2,metalness:.4});this.nsLink2Mesh=new nt(new on(.09,.09,1,32),t);const n=new Ut({color:16436245,emissive:13273604,emissiveIntensity:.4,roughness:.2,metalness:.4});this.nsLink3Mesh=new nt(new on(.07,.07,1,32),n);const r=new Ut({color:3359061,roughness:.3,metalness:.8});this.nsJoint0Mesh=new nt(new on(.24,.24,.2,32),r),this.nsJoint0Mesh.rotation.x=Math.PI/2,this.nsJoint1Mesh=new nt(new Nn(.15,32,32),new Ut({color:62206,roughness:.2,metalness:.7})),this.nsJoint2Mesh=new nt(new Nn(.14,32,32),new Ut({color:12616956,roughness:.2,metalness:.7})),this.nsJoint3Mesh=new nt(new Nn(.16,32,32),new Ut({color:16729943,emissive:10033947,emissiveIntensity:.6}));const s=new Sr(.22,.26,32),a=new ji({color:3069299,side:gn,transparent:!0,opacity:.85});this.nsLockRing=new nt(s,a);const o=new Sr(2.98,3.02,64),l=new ji({color:3718648,side:gn,transparent:!0,opacity:.2});this.nsWorkspaceRing=new nt(o,l),this.nullSpaceGroup.add(this.nsLink1Mesh,this.nsLink2Mesh,this.nsLink3Mesh,this.nsJoint0Mesh,this.nsJoint1Mesh,this.nsJoint2Mesh,this.nsJoint3Mesh,this.nsLockRing,this.nsWorkspaceRing),this.nullSpaceGroup.visible=!1,this.scene.add(this.nullSpaceGroup)}setupIKManipulator(){this.ikGroup=new ei;const e=new Ut({color:4674921,roughness:.3,metalness:.8});this.ikBasePostMesh=new nt(new on(.12,.15,1,32),e);const t=new Ut({color:3718648,emissive:165063,emissiveIntensity:.4,roughness:.2,metalness:.5});this.ikLink1Mesh=new nt(new on(.1,.1,1,32),t);const n=new Ut({color:12616956,emissive:8266446,emissiveIntensity:.4,roughness:.2,metalness:.5});this.ikLink2Mesh=new nt(new on(.08,.08,1,32),n),this.ikJoint0Mesh=new nt(new on(.3,.3,.1,32),e),this.ikJoint1Mesh=new nt(new Nn(.16,32,32),new Ut({color:62206,roughness:.2,metalness:.7})),this.ikJoint2Mesh=new nt(new Nn(.14,32,32),new Ut({color:12616956,roughness:.2,metalness:.7})),this.ikJoint3Mesh=new nt(new Nn(.15,32,32),new Ut({color:16436245,emissive:13273604,emissiveIntensity:.5}));const r=new hl(.18,0),s=new Ut({color:16007006,emissive:14753096,emissiveIntensity:.8,roughness:.1,metalness:.8});this.ikTargetMarker=new nt(r,s);const a=new Sr(.22,.26,32),o=new ji({color:16007006,side:gn,transparent:!0,opacity:.85});this.ikTargetRing=new nt(a,o),this.ikTargetRing.rotation.x=Math.PI/2,this.ikGroup.add(this.ikBasePostMesh,this.ikLink1Mesh,this.ikLink2Mesh,this.ikJoint0Mesh,this.ikJoint1Mesh,this.ikJoint2Mesh,this.ikJoint3Mesh,this.ikTargetMarker,this.ikTargetRing),this.ikGroup.visible=!1,this.scene.add(this.ikGroup)}setMode(e){this.mode=e,this.trailPoints=[],this.trailLine.geometry.setFromPoints([]),e==="IK"?(this.rigidBodyMesh.visible=!1,this.localAxesGroup.visible=!1,this.globalAxesGroup.visible=!0,this.positionLine.visible=!1,this.velArrow.visible=!1,this.omegaArrow.visible=!1,this.planarGroup.visible=!1,this.nullSpaceGroup.visible=!1,this.ikGroup.visible=!0,this.camera.position.set(3.5,3.5,3.5),this.grid.rotation.x=0,this.grid.position.z=0,this.controls.target.set(0,0,1)):e==="NULLSPACE"?(this.rigidBodyMesh.visible=!1,this.localAxesGroup.visible=!1,this.globalAxesGroup.visible=!0,this.positionLine.visible=!1,this.velArrow.visible=!1,this.omegaArrow.visible=!1,this.planarGroup.visible=!1,this.nullSpaceGroup.visible=!0,this.ikGroup.visible=!1,this.camera.position.set(0,0,5.8),this.grid.rotation.x=Math.PI/2,this.grid.position.z=-.05,this.controls.target.set(.5,.5,0)):e==="PLANAR2DOF"?(this.rigidBodyMesh.visible=!1,this.localAxesGroup.visible=!1,this.globalAxesGroup.visible=!0,this.positionLine.visible=!1,this.velArrow.visible=!1,this.omegaArrow.visible=!1,this.planarGroup.visible=!0,this.nullSpaceGroup.visible=!1,this.ikGroup.visible=!1,this.camera.position.set(0,0,4.8),this.grid.rotation.x=Math.PI/2,this.grid.position.z=-.05,this.controls.target.set(0,0,0)):e==="SO3"?(this.rigidBodyMesh.visible=!0,this.localAxesGroup.visible=!0,this.globalAxesGroup.visible=!0,this.positionLine.visible=!1,this.velArrow.visible=!1,this.planarGroup.visible=!1,this.nullSpaceGroup.visible=!1,this.ikGroup.visible=!1,this.camera.position.set(3.2,2.4,3.8),this.grid.rotation.x=0,this.grid.position.y=-1.5,this.controls.target.set(0,0,0)):(this.rigidBodyMesh.visible=!0,this.localAxesGroup.visible=!0,this.globalAxesGroup.visible=!0,this.positionLine.visible=!0,this.planarGroup.visible=!1,this.nullSpaceGroup.visible=!1,this.camera.position.set(5.5,4.2,7.5),this.grid.rotation.x=0,this.grid.position.y=-2.5,this.controls.target.set(0,0,0)),this.controls.update()}updateSO3(e,t,n=!1){const r=new D(0,0,0),s=new Mt;s.set(e[0][0],e[0][1],e[0][2],0,e[1][0],e[1][1],e[1][2],0,e[2][0],e[2][1],e[2][2],0,0,0,0,1),this.rigidBodyMesh.position.set(0,0,0),this.rigidBodyMesh.setRotationFromMatrix(s);const a=new D(e[0][0],e[1][0],e[2][0]),o=new D(e[0][1],e[1][1],e[2][1]),l=new D(e[0][2],e[1][2],e[2][2]);this.localX.position.copy(r),this.localY.position.copy(r),this.localZ.position.copy(r),this.localX.setDirection(a.clone().normalize()),this.localY.setDirection(o.clone().normalize()),this.localZ.setDirection(l.clone().normalize());const c=new D(t[0],t[1],t[2]),h=c.length();h>1e-4?(this.omegaArrow.position.copy(r),this.omegaArrow.setDirection(c.clone().normalize()),this.omegaArrow.setLength(Math.min(h*.4+.3,1.8),.18,.09),this.omegaArrow.visible=!0):this.omegaArrow.visible=!1,n&&(this.trailPoints=[]),this.trailPoints.push(a.clone()),this.trailPoints.length>this.maxTrailLength&&this.trailPoints.shift(),this.trailLine.geometry.setFromPoints(this.trailPoints)}updateSE3(e,t,n,r=!1){const s=new D(e[0][3],e[1][3],e[2][3]),a=new Mt;a.set(e[0][0],e[0][1],e[0][2],e[0][3],e[1][0],e[1][1],e[1][2],e[1][3],e[2][0],e[2][1],e[2][2],e[2][3],0,0,0,1),this.rigidBodyMesh.position.copy(s),this.rigidBodyMesh.setRotationFromMatrix(a);const o=new D(e[0][0],e[1][0],e[2][0]),l=new D(e[0][1],e[1][0],e[2][0]),c=new D(e[0][2],e[1][2],e[2][2]);this.localX.position.copy(s),this.localY.position.copy(s),this.localZ.position.copy(s),this.localX.setDirection(o.clone().normalize()),this.localY.setDirection(l.clone().normalize()),this.localZ.setDirection(c.clone().normalize());const h=[new D(0,0,0),s];this.positionLine.geometry.setFromPoints(h),this.positionLine.computeLineDistances(),this.positionLine.visible=!0;const d=new D(t[0],t[1],t[2]);d.length()>1e-4?(this.omegaArrow.position.copy(s),this.omegaArrow.setDirection(d.clone().normalize()),this.omegaArrow.setLength(Math.min(d.length()*.4+.3,1.8),.18,.09),this.omegaArrow.visible=!0):this.omegaArrow.visible=!1;const f=new D(n[0],n[1],n[2]);f.length()>1e-4?(this.velArrow.position.copy(s),this.velArrow.setDirection(f.clone().normalize()),this.velArrow.setLength(Math.min(f.length()*.4+.3,1.8),.18,.09),this.velArrow.visible=!0):this.velArrow.visible=!1,r&&(this.trailPoints=[]),this.trailPoints.push(s.clone()),this.trailPoints.length>this.maxTrailLength&&this.trailPoints.shift(),this.trailLine.geometry.setFromPoints(this.trailPoints)}updatePlanar2DOF(e,t=!1){const{j0:n,j1:r,j2:s,v:a,speed:o}=e,l=new D(n[0],n[1],0),c=new D(r[0],r[1],0),h=new D(s[0],s[1],0),d=new D().subVectors(c,l),f=d.length(),m=new D().addVectors(l,c).multiplyScalar(.5);this.link1Mesh.position.copy(m),this.link1Mesh.scale.set(1,f,1),this.link1Mesh.quaternion.setFromUnitVectors(new D(0,1,0),d.clone().normalize());const _=new D().subVectors(h,c),x=_.length(),g=new D().addVectors(c,h).multiplyScalar(.5);if(this.link2Mesh.position.copy(g),this.link2Mesh.scale.set(1,x,1),this.link2Mesh.quaternion.setFromUnitVectors(new D(0,1,0),_.clone().normalize()),this.joint0Mesh.position.copy(l),this.joint1Mesh.position.copy(c),this.joint2Mesh.position.copy(h),o>.01){const p=new D(a[0],a[1],0);this.endVelArrow.position.copy(h),this.endVelArrow.setDirection(p.clone().normalize()),this.endVelArrow.setLength(Math.min(o*.4+.2,1.8),.18,.09),this.endVelArrow.visible=!0}else this.endVelArrow.visible=!1;t&&(this.trailPoints=[]),this.trailPoints.push(h.clone()),this.trailPoints.length>this.maxTrailLength&&this.trailPoints.shift(),this.trailLine.geometry.setFromPoints(this.trailPoints)}updateNullSpace(e,t=!1){const{j0:n,j1:r,j2:s,j3:a}=e,o=new D(n[0],n[1],0),l=new D(r[0],r[1],0),c=new D(s[0],s[1],0),h=new D(a[0],a[1],0),d=new D().subVectors(l,o),f=d.length(),m=new D().addVectors(o,l).multiplyScalar(.5);this.nsLink1Mesh.position.copy(m),this.nsLink1Mesh.scale.set(1,f,1),this.nsLink1Mesh.quaternion.setFromUnitVectors(new D(0,1,0),d.clone().normalize());const _=new D().subVectors(c,l),x=_.length(),g=new D().addVectors(l,c).multiplyScalar(.5);this.nsLink2Mesh.position.copy(g),this.nsLink2Mesh.scale.set(1,x,1),this.nsLink2Mesh.quaternion.setFromUnitVectors(new D(0,1,0),_.clone().normalize());const p=new D().subVectors(h,c),b=p.length(),M=new D().addVectors(c,h).multiplyScalar(.5);this.nsLink3Mesh.position.copy(M),this.nsLink3Mesh.scale.set(1,b,1),this.nsLink3Mesh.quaternion.setFromUnitVectors(new D(0,1,0),p.clone().normalize()),this.nsJoint0Mesh.position.copy(o),this.nsJoint1Mesh.position.copy(l),this.nsJoint2Mesh.position.copy(c),this.nsJoint3Mesh.position.copy(h),this.nsLockRing.position.copy(h),t&&(this.trailPoints=[]),this.trailPoints.push(c.clone()),this.trailPoints.length>this.maxTrailLength&&this.trailPoints.shift(),this.trailLine.geometry.setFromPoints(this.trailPoints)}updateIK(e){const{pts:t,p_ref:n,trail:r}=e,s=new D(t[0][0],t[0][1],t[0][2]),a=new D(t[1][0],t[1][1],t[1][2]),o=new D(t[2][0],t[2][1],t[2][2]),l=new D(t[3][0],t[3][1],t[3][2]),h=new D().subVectors(a,s).length(),d=new D().addVectors(s,a).multiplyScalar(.5);this.ikBasePostMesh.position.copy(d),this.ikBasePostMesh.scale.set(1,h,1);const f=new D().subVectors(o,a),m=f.length(),_=new D().addVectors(a,o).multiplyScalar(.5);this.ikLink1Mesh.position.copy(_),this.ikLink1Mesh.scale.set(1,m,1),this.ikLink1Mesh.quaternion.setFromUnitVectors(new D(0,1,0),f.clone().normalize());const x=new D().subVectors(l,o),g=x.length(),p=new D().addVectors(o,l).multiplyScalar(.5);this.ikLink2Mesh.position.copy(p),this.ikLink2Mesh.scale.set(1,g,1),this.ikLink2Mesh.quaternion.setFromUnitVectors(new D(0,1,0),x.clone().normalize()),this.ikJoint0Mesh.position.copy(s),this.ikJoint1Mesh.position.copy(a),this.ikJoint2Mesh.position.copy(o),this.ikJoint3Mesh.position.copy(l);const b=new D(n[0],n[1],n[2]);if(this.ikTargetMarker.position.copy(b),this.ikTargetRing.position.copy(b),this.ikTargetMarker.rotation.y+=.02,this.ikTargetMarker.rotation.z+=.01,r&&r.length>0){const M=r.map(A=>new D(A[0],A[1],A[2]));this.trailLine.geometry.setFromPoints(M)}else this.trailLine.geometry.setFromPoints([])}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}onWindowResize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}resetCamera(){this.mode==="PLANAR2DOF"?this.camera.position.set(0,0,4.8):this.mode==="SO3"?this.camera.position.set(3.2,2.4,3.8):this.camera.position.set(5.5,4.2,7.5),this.controls.target.set(0,0,0),this.controls.update()}}class oe extends Error{constructor(e,t){var n="KaTeX parse error: "+e,r,s,a=t&&t.loc;if(a&&a.start<=a.end){var o=a.lexer.input;r=a.start,s=a.end,r===o.length?n+=" at end of input: ":n+=" at position "+(r+1)+": ";var l=o.slice(r,s).replace(/[^]/g,"$&̲"),c;r>15?c="…"+o.slice(r-15,r):c=o.slice(0,r);var h;s+15<o.length?h=o.slice(s,s+15)+"…":h=o.slice(s),n+=c+l+h}super(n),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,oe.prototype),this.position=r,r!=null&&s!=null&&(this.length=s-r),this.rawMessage=e}}var Xg=/([A-Z])/g,Yg=i=>i.replace(Xg,"-$1").toLowerCase(),jg={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},$g=/[&><"']/g,Jt=i=>String(i).replace($g,e=>jg[e]),ua=i=>i.type==="ordgroup"||i.type==="color"?i.body.length===1?ua(i.body[0]):i:i.type==="font"?ua(i.body):i,Kg=new Set(["mathord","textord","atom"]),ai=i=>Kg.has(ua(i).type),Zg=i=>{var e=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(i);return e?e[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1])?null:e[1].toLowerCase():"_relative"},D0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:i=>"#"+i},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(i,e)=>(e.push(i),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:i=>Math.max(0,i),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:i=>Math.max(0,i),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:i=>Math.max(0,i),cli:"-e, --max-expand <n>",cliProcessor:i=>i==="Infinity"?1/0:parseInt(i)},globalGroup:{type:"boolean",cli:!1}};function Jg(i){if(typeof i!="string")return i.enum[0];switch(i){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function Qg(i){if(i.default!==void 0)return i.default;var e=Array.isArray(i.type)?i.type[0]:i.type;return Jg(e)}function e4(i,e,t,n){var r=t[e];i[e]=r!==void 0?n.processor?n.processor(r):r:Qg(n)}class fl{constructor(e){e===void 0&&(e={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t of Object.keys(D0)){var n=D0[t];n&&e4(this,t,e,n)}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r=="function"&&(r=r(e,t,n)),!(!r||r==="ignore")){if(r===!0||r==="error")throw new oe("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),n);r==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r=="function")try{r=r(e,t,n)}catch{r="error"}return!r||r==="ignore"?!1:r===!0||r==="error"?!0:r==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]")),!1)}isTrusted(e){if("url"in e&&e.url&&!e.protocol){var t=Zg(e.url);if(t==null)return!1;e.protocol=t}var n=typeof this.trust=="function"?this.trust(e):this.trust;return!!n}}class gi{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return zn[t4[this.id]]}sub(){return zn[n4[this.id]]}fracNum(){return zn[i4[this.id]]}fracDen(){return zn[r4[this.id]]}cramp(){return zn[s4[this.id]]}text(){return zn[a4[this.id]]}isTight(){return this.size>=2}}var pl=0,ba=1,Rr=2,ii=3,os=4,wn=5,Fr=6,nn=7,zn=[new gi(pl,0,!1),new gi(ba,0,!0),new gi(Rr,1,!1),new gi(ii,1,!0),new gi(os,2,!1),new gi(wn,2,!0),new gi(Fr,3,!1),new gi(nn,3,!0)],t4=[os,wn,os,wn,Fr,nn,Fr,nn],n4=[wn,wn,wn,wn,nn,nn,nn,nn],i4=[Rr,ii,os,wn,Fr,nn,Fr,nn],r4=[ii,ii,wn,wn,nn,nn,nn,nn],s4=[ba,ba,ii,ii,wn,wn,nn,nn],a4=[pl,ba,Rr,ii,Rr,ii,Rr,ii],Xe={DISPLAY:zn[pl],TEXT:zn[Rr],SCRIPT:zn[os],SCRIPTSCRIPT:zn[Fr]},L0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function o4(i){for(var e=0;e<L0.length;e++)for(var t=L0[e],n=0;n<t.blocks.length;n++){var r=t.blocks[n];if(i>=r[0]&&i<=r[1])return t.name}return null}var da=[];L0.forEach(i=>i.blocks.forEach(e=>da.push(...e)));function uu(i){for(var e=0;e<da.length;e+=2)if(i>=da[e]&&i<=da[e+1])return!0;return!1}var Bt=i=>i+" "+i,_r=80,l4=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},c4=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},h4=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},u4=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},d4=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},f4=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},p4=function(e,t,n){var r=n-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},m4=function(e,t,n){t=1e3*t;var r="";switch(e){case"sqrtMain":r=l4(t,_r);break;case"sqrtSize1":r=c4(t,_r);break;case"sqrtSize2":r=h4(t,_r);break;case"sqrtSize3":r=u4(t,_r);break;case"sqrtSize4":r=d4(t,_r);break;case"sqrtTall":r=p4(t,_r,n)}return r},g4=function(e,t){switch(e){case"⎜":return Bt("M291 0 H417 V"+t+" H291z");case"∣":return Bt("M145 0 H188 V"+t+" H145z");case"∥":return Bt("M145 0 H188 V"+t+" H145z")+Bt("M367 0 H410 V"+t+" H367z");case"⎟":return Bt("M457 0 H583 V"+t+" H457z");case"⎢":return Bt("M319 0 H403 V"+t+" H319z");case"⎥":return Bt("M263 0 H347 V"+t+" H263z");case"⎪":return Bt("M384 0 H504 V"+t+" H384z");case"⏐":return Bt("M312 0 H355 V"+t+" H312z");case"‖":return Bt("M257 0 H300 V"+t+" H257z")+Bt("M478 0 H521 V"+t+" H478z");default:return""}},Gc={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:Bt("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:Bt("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:Bt("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:Bt("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:Bt("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:Bt("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:Bt("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:Bt("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},v4=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function x4(i){return"toText"in i}class Vr{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>{if(x4(e))return e.toText();throw new Error("Expected MathDomNode with toText, got "+e.constructor.name)}).join("")}}var I0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},_4={ex:!0,em:!0,mu:!0},du=function(e){return typeof e!="string"&&(e=e.unit),e in I0||e in _4||e==="ex"},At=function(e,t){var n;if(e.unit in I0)n=I0[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var r;if(t.style.isTight()?r=t.havingStyle(t.style.text()):r=t,e.unit==="ex")n=r.fontMetrics().xHeight;else if(e.unit==="em")n=r.fontMetrics().quad;else throw new oe("Invalid unit: '"+e.unit+"'");r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},he=function(e){return+e.toFixed(4)+"em"},Ti=function(e){return e.filter(t=>t).join(" ")},ml=function(e){var t="";for(var n of Object.keys(e)){var r=e[n];r!==void 0&&(t+=Yg(n)+":"+r+";")}return t},fu=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var r=t.getColor();r&&(this.style.color=r)}},pu=function(e){var t=document.createElement(e);t.className=Ti(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},y4=/[\s"'>/=\x00-\x1f]/,mu=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+Jt(Ti(this.classes))+'"');var n=ml(this.style);n&&(t+=' style="'+Jt(n)+'"');for(var r of Object.keys(this.attributes)){if(y4.test(r))throw new oe("Invalid attribute name '"+r+"'");t+=" "+r+'="'+Jt(this.attributes[r])+'"'}t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+e+">",t};class Gr{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,fu.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return pu.call(this,"span")}toMarkup(){return mu.call(this,"span")}}class Ia{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,fu.call(this,t,r),this.children=n||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return pu.call(this,"a")}toMarkup(){return mu.call(this,"a")}}class M4{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");return e.src=this.src,e.alt=this.alt,e.className="mord",Object.assign(e.style,this.style),e}toMarkup(){var e='<img src="'+Jt(this.src)+'"'+(' alt="'+Jt(this.alt)+'"'),t=ml(this.style);return t&&(e+=' style="'+Jt(t)+'"'),e+="'/>",e}}var b4={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class xn{constructor(e,t,n,r,s,a,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=s||0,this.width=a||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=o4(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=b4[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement("span"),t.style.marginRight=he(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Ti(this.classes)),Object.keys(this.style).length>0&&(t=t||document.createElement("span"),Object.assign(t.style,this.style)),t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=Jt(Ti(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+he(this.italic)+";"),n+=ml(this.style),n&&(e=!0,t+=' style="'+Jt(n)+'"');var r=Jt(this.text);return e?(t+=">",t+=r,t+="</span>",t):r}}class si{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t of Object.keys(this.attributes))e+=" "+t+'="'+Jt(this.attributes[t])+'"';e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</svg>",e}}class Ai{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",Gc[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+Jt(this.alternate)+'"/>':'<path d="'+Jt(Gc[this.pathName])+'"/>'}}class N0{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var e="<line";for(var t of Object.keys(this.attributes))e+=" "+t+'="'+Jt(this.attributes[t])+'"';return e+="/>",e}}function S4(i){if(i instanceof xn)return i;throw new Error("Expected symbolNode but got "+String(i)+".")}function w4(i){if(i instanceof Gr)return i;throw new Error("Expected span<HtmlDomNode> but got "+String(i)+".")}var E4=i=>i instanceof Gr||i instanceof Ia||i instanceof Vr,On={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Xs={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Wc={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function T4(i,e){On[i]=e}function gl(i,e,t){if(!On[e])throw new Error("Font metrics not found for font: "+e+".");var n=i.charCodeAt(0),r=On[e][n];if(!r&&i[0]in Wc&&(n=Wc[i[0]].charCodeAt(0),r=On[e][n]),!r&&t==="text"&&uu(n)&&(r=On[e][77]),r)return{depth:r[0],height:r[1],italic:r[2],skew:r[3],width:r[4]}}var Po={};function A4(i){var e;if(i>=5?e=0:i>=3?e=1:e=2,!Po[e]){var t=Po[e]={cssEmPerMu:Xs.quad[e]/18};for(var n in Xs)Xs.hasOwnProperty(n)&&(t[n]=Xs[n][e])}return Po[e]}var St={math:{},text:{}};function u(i,e,t,n,r,s){St[i][r]={font:e,group:t,replace:n},s&&n&&(St[i][n]=St[i][r])}var v="math",re="text",y="main",L="ams",wt="accent-token",Se="bin",rn="close",Wr="inner",Ne="mathord",Ot="op-token",_n="open",fs="punct",N="rel",oi="spacing",k="textord";u(v,y,N,"≡","\\equiv",!0);u(v,y,N,"≺","\\prec",!0);u(v,y,N,"≻","\\succ",!0);u(v,y,N,"∼","\\sim",!0);u(v,y,N,"⊥","\\perp");u(v,y,N,"⪯","\\preceq",!0);u(v,y,N,"⪰","\\succeq",!0);u(v,y,N,"≃","\\simeq",!0);u(v,y,N,"∣","\\mid",!0);u(v,y,N,"≪","\\ll",!0);u(v,y,N,"≫","\\gg",!0);u(v,y,N,"≍","\\asymp",!0);u(v,y,N,"∥","\\parallel");u(v,y,N,"⋈","\\bowtie",!0);u(v,y,N,"⌣","\\smile",!0);u(v,y,N,"⊑","\\sqsubseteq",!0);u(v,y,N,"⊒","\\sqsupseteq",!0);u(v,y,N,"≐","\\doteq",!0);u(v,y,N,"⌢","\\frown",!0);u(v,y,N,"∋","\\ni",!0);u(v,y,N,"∝","\\propto",!0);u(v,y,N,"⊢","\\vdash",!0);u(v,y,N,"⊣","\\dashv",!0);u(v,y,N,"∋","\\owns");u(v,y,fs,".","\\ldotp");u(v,y,fs,"⋅","\\cdotp");u(v,y,fs,"⋅","·");u(re,y,k,"⋅","·");u(v,y,k,"#","\\#");u(re,y,k,"#","\\#");u(v,y,k,"&","\\&");u(re,y,k,"&","\\&");u(v,y,k,"ℵ","\\aleph",!0);u(v,y,k,"∀","\\forall",!0);u(v,y,k,"ℏ","\\hbar",!0);u(v,y,k,"∃","\\exists",!0);u(v,y,k,"∇","\\nabla",!0);u(v,y,k,"♭","\\flat",!0);u(v,y,k,"ℓ","\\ell",!0);u(v,y,k,"♮","\\natural",!0);u(v,y,k,"♣","\\clubsuit",!0);u(v,y,k,"℘","\\wp",!0);u(v,y,k,"♯","\\sharp",!0);u(v,y,k,"♢","\\diamondsuit",!0);u(v,y,k,"ℜ","\\Re",!0);u(v,y,k,"♡","\\heartsuit",!0);u(v,y,k,"ℑ","\\Im",!0);u(v,y,k,"♠","\\spadesuit",!0);u(v,y,k,"§","\\S",!0);u(re,y,k,"§","\\S");u(v,y,k,"¶","\\P",!0);u(re,y,k,"¶","\\P");u(v,y,k,"†","\\dag");u(re,y,k,"†","\\dag");u(re,y,k,"†","\\textdagger");u(v,y,k,"‡","\\ddag");u(re,y,k,"‡","\\ddag");u(re,y,k,"‡","\\textdaggerdbl");u(v,y,rn,"⎱","\\rmoustache",!0);u(v,y,_n,"⎰","\\lmoustache",!0);u(v,y,rn,"⟯","\\rgroup",!0);u(v,y,_n,"⟮","\\lgroup",!0);u(v,y,Se,"∓","\\mp",!0);u(v,y,Se,"⊖","\\ominus",!0);u(v,y,Se,"⊎","\\uplus",!0);u(v,y,Se,"⊓","\\sqcap",!0);u(v,y,Se,"∗","\\ast");u(v,y,Se,"⊔","\\sqcup",!0);u(v,y,Se,"◯","\\bigcirc",!0);u(v,y,Se,"∙","\\bullet",!0);u(v,y,Se,"‡","\\ddagger");u(v,y,Se,"≀","\\wr",!0);u(v,y,Se,"⨿","\\amalg");u(v,y,Se,"&","\\And");u(v,y,N,"⟵","\\longleftarrow",!0);u(v,y,N,"⇐","\\Leftarrow",!0);u(v,y,N,"⟸","\\Longleftarrow",!0);u(v,y,N,"⟶","\\longrightarrow",!0);u(v,y,N,"⇒","\\Rightarrow",!0);u(v,y,N,"⟹","\\Longrightarrow",!0);u(v,y,N,"↔","\\leftrightarrow",!0);u(v,y,N,"⟷","\\longleftrightarrow",!0);u(v,y,N,"⇔","\\Leftrightarrow",!0);u(v,y,N,"⟺","\\Longleftrightarrow",!0);u(v,y,N,"↦","\\mapsto",!0);u(v,y,N,"⟼","\\longmapsto",!0);u(v,y,N,"↗","\\nearrow",!0);u(v,y,N,"↩","\\hookleftarrow",!0);u(v,y,N,"↪","\\hookrightarrow",!0);u(v,y,N,"↘","\\searrow",!0);u(v,y,N,"↼","\\leftharpoonup",!0);u(v,y,N,"⇀","\\rightharpoonup",!0);u(v,y,N,"↙","\\swarrow",!0);u(v,y,N,"↽","\\leftharpoondown",!0);u(v,y,N,"⇁","\\rightharpoondown",!0);u(v,y,N,"↖","\\nwarrow",!0);u(v,y,N,"⇌","\\rightleftharpoons",!0);u(v,L,N,"≮","\\nless",!0);u(v,L,N,"","\\@nleqslant");u(v,L,N,"","\\@nleqq");u(v,L,N,"⪇","\\lneq",!0);u(v,L,N,"≨","\\lneqq",!0);u(v,L,N,"","\\@lvertneqq");u(v,L,N,"⋦","\\lnsim",!0);u(v,L,N,"⪉","\\lnapprox",!0);u(v,L,N,"⊀","\\nprec",!0);u(v,L,N,"⋠","\\npreceq",!0);u(v,L,N,"⋨","\\precnsim",!0);u(v,L,N,"⪹","\\precnapprox",!0);u(v,L,N,"≁","\\nsim",!0);u(v,L,N,"","\\@nshortmid");u(v,L,N,"∤","\\nmid",!0);u(v,L,N,"⊬","\\nvdash",!0);u(v,L,N,"⊭","\\nvDash",!0);u(v,L,N,"⋪","\\ntriangleleft");u(v,L,N,"⋬","\\ntrianglelefteq",!0);u(v,L,N,"⊊","\\subsetneq",!0);u(v,L,N,"","\\@varsubsetneq");u(v,L,N,"⫋","\\subsetneqq",!0);u(v,L,N,"","\\@varsubsetneqq");u(v,L,N,"≯","\\ngtr",!0);u(v,L,N,"","\\@ngeqslant");u(v,L,N,"","\\@ngeqq");u(v,L,N,"⪈","\\gneq",!0);u(v,L,N,"≩","\\gneqq",!0);u(v,L,N,"","\\@gvertneqq");u(v,L,N,"⋧","\\gnsim",!0);u(v,L,N,"⪊","\\gnapprox",!0);u(v,L,N,"⊁","\\nsucc",!0);u(v,L,N,"⋡","\\nsucceq",!0);u(v,L,N,"⋩","\\succnsim",!0);u(v,L,N,"⪺","\\succnapprox",!0);u(v,L,N,"≆","\\ncong",!0);u(v,L,N,"","\\@nshortparallel");u(v,L,N,"∦","\\nparallel",!0);u(v,L,N,"⊯","\\nVDash",!0);u(v,L,N,"⋫","\\ntriangleright");u(v,L,N,"⋭","\\ntrianglerighteq",!0);u(v,L,N,"","\\@nsupseteqq");u(v,L,N,"⊋","\\supsetneq",!0);u(v,L,N,"","\\@varsupsetneq");u(v,L,N,"⫌","\\supsetneqq",!0);u(v,L,N,"","\\@varsupsetneqq");u(v,L,N,"⊮","\\nVdash",!0);u(v,L,N,"⪵","\\precneqq",!0);u(v,L,N,"⪶","\\succneqq",!0);u(v,L,N,"","\\@nsubseteqq");u(v,L,Se,"⊴","\\unlhd");u(v,L,Se,"⊵","\\unrhd");u(v,L,N,"↚","\\nleftarrow",!0);u(v,L,N,"↛","\\nrightarrow",!0);u(v,L,N,"⇍","\\nLeftarrow",!0);u(v,L,N,"⇏","\\nRightarrow",!0);u(v,L,N,"↮","\\nleftrightarrow",!0);u(v,L,N,"⇎","\\nLeftrightarrow",!0);u(v,L,N,"△","\\vartriangle");u(v,L,k,"ℏ","\\hslash");u(v,L,k,"▽","\\triangledown");u(v,L,k,"◊","\\lozenge");u(v,L,k,"Ⓢ","\\circledS");u(v,L,k,"®","\\circledR");u(re,L,k,"®","\\circledR");u(v,L,k,"∡","\\measuredangle",!0);u(v,L,k,"∄","\\nexists");u(v,L,k,"℧","\\mho");u(v,L,k,"Ⅎ","\\Finv",!0);u(v,L,k,"⅁","\\Game",!0);u(v,L,k,"‵","\\backprime");u(v,L,k,"▲","\\blacktriangle");u(v,L,k,"▼","\\blacktriangledown");u(v,L,k,"■","\\blacksquare");u(v,L,k,"⧫","\\blacklozenge");u(v,L,k,"★","\\bigstar");u(v,L,k,"∢","\\sphericalangle",!0);u(v,L,k,"∁","\\complement",!0);u(v,L,k,"ð","\\eth",!0);u(re,y,k,"ð","ð");u(v,L,k,"╱","\\diagup");u(v,L,k,"╲","\\diagdown");u(v,L,k,"□","\\square");u(v,L,k,"□","\\Box");u(v,L,k,"◊","\\Diamond");u(v,L,k,"¥","\\yen",!0);u(re,L,k,"¥","\\yen",!0);u(v,L,k,"✓","\\checkmark",!0);u(re,L,k,"✓","\\checkmark");u(v,L,k,"ℶ","\\beth",!0);u(v,L,k,"ℸ","\\daleth",!0);u(v,L,k,"ℷ","\\gimel",!0);u(v,L,k,"ϝ","\\digamma",!0);u(v,L,k,"ϰ","\\varkappa");u(v,L,_n,"┌","\\@ulcorner",!0);u(v,L,rn,"┐","\\@urcorner",!0);u(v,L,_n,"└","\\@llcorner",!0);u(v,L,rn,"┘","\\@lrcorner",!0);u(v,L,N,"≦","\\leqq",!0);u(v,L,N,"⩽","\\leqslant",!0);u(v,L,N,"⪕","\\eqslantless",!0);u(v,L,N,"≲","\\lesssim",!0);u(v,L,N,"⪅","\\lessapprox",!0);u(v,L,N,"≊","\\approxeq",!0);u(v,L,Se,"⋖","\\lessdot");u(v,L,N,"⋘","\\lll",!0);u(v,L,N,"≶","\\lessgtr",!0);u(v,L,N,"⋚","\\lesseqgtr",!0);u(v,L,N,"⪋","\\lesseqqgtr",!0);u(v,L,N,"≑","\\doteqdot");u(v,L,N,"≓","\\risingdotseq",!0);u(v,L,N,"≒","\\fallingdotseq",!0);u(v,L,N,"∽","\\backsim",!0);u(v,L,N,"⋍","\\backsimeq",!0);u(v,L,N,"⫅","\\subseteqq",!0);u(v,L,N,"⋐","\\Subset",!0);u(v,L,N,"⊏","\\sqsubset",!0);u(v,L,N,"≼","\\preccurlyeq",!0);u(v,L,N,"⋞","\\curlyeqprec",!0);u(v,L,N,"≾","\\precsim",!0);u(v,L,N,"⪷","\\precapprox",!0);u(v,L,N,"⊲","\\vartriangleleft");u(v,L,N,"⊴","\\trianglelefteq");u(v,L,N,"⊨","\\vDash",!0);u(v,L,N,"⊪","\\Vvdash",!0);u(v,L,N,"⌣","\\smallsmile");u(v,L,N,"⌢","\\smallfrown");u(v,L,N,"≏","\\bumpeq",!0);u(v,L,N,"≎","\\Bumpeq",!0);u(v,L,N,"≧","\\geqq",!0);u(v,L,N,"⩾","\\geqslant",!0);u(v,L,N,"⪖","\\eqslantgtr",!0);u(v,L,N,"≳","\\gtrsim",!0);u(v,L,N,"⪆","\\gtrapprox",!0);u(v,L,Se,"⋗","\\gtrdot");u(v,L,N,"⋙","\\ggg",!0);u(v,L,N,"≷","\\gtrless",!0);u(v,L,N,"⋛","\\gtreqless",!0);u(v,L,N,"⪌","\\gtreqqless",!0);u(v,L,N,"≖","\\eqcirc",!0);u(v,L,N,"≗","\\circeq",!0);u(v,L,N,"≜","\\triangleq",!0);u(v,L,N,"∼","\\thicksim");u(v,L,N,"≈","\\thickapprox");u(v,L,N,"⫆","\\supseteqq",!0);u(v,L,N,"⋑","\\Supset",!0);u(v,L,N,"⊐","\\sqsupset",!0);u(v,L,N,"≽","\\succcurlyeq",!0);u(v,L,N,"⋟","\\curlyeqsucc",!0);u(v,L,N,"≿","\\succsim",!0);u(v,L,N,"⪸","\\succapprox",!0);u(v,L,N,"⊳","\\vartriangleright");u(v,L,N,"⊵","\\trianglerighteq");u(v,L,N,"⊩","\\Vdash",!0);u(v,L,N,"∣","\\shortmid");u(v,L,N,"∥","\\shortparallel");u(v,L,N,"≬","\\between",!0);u(v,L,N,"⋔","\\pitchfork",!0);u(v,L,N,"∝","\\varpropto");u(v,L,N,"◀","\\blacktriangleleft");u(v,L,N,"∴","\\therefore",!0);u(v,L,N,"∍","\\backepsilon");u(v,L,N,"▶","\\blacktriangleright");u(v,L,N,"∵","\\because",!0);u(v,L,N,"⋘","\\llless");u(v,L,N,"⋙","\\gggtr");u(v,L,Se,"⊲","\\lhd");u(v,L,Se,"⊳","\\rhd");u(v,L,N,"≂","\\eqsim",!0);u(v,y,N,"⋈","\\Join");u(v,L,N,"≑","\\Doteq",!0);u(v,L,Se,"∔","\\dotplus",!0);u(v,L,Se,"∖","\\smallsetminus");u(v,L,Se,"⋒","\\Cap",!0);u(v,L,Se,"⋓","\\Cup",!0);u(v,L,Se,"⩞","\\doublebarwedge",!0);u(v,L,Se,"⊟","\\boxminus",!0);u(v,L,Se,"⊞","\\boxplus",!0);u(v,L,Se,"⋇","\\divideontimes",!0);u(v,L,Se,"⋉","\\ltimes",!0);u(v,L,Se,"⋊","\\rtimes",!0);u(v,L,Se,"⋋","\\leftthreetimes",!0);u(v,L,Se,"⋌","\\rightthreetimes",!0);u(v,L,Se,"⋏","\\curlywedge",!0);u(v,L,Se,"⋎","\\curlyvee",!0);u(v,L,Se,"⊝","\\circleddash",!0);u(v,L,Se,"⊛","\\circledast",!0);u(v,L,Se,"⋅","\\centerdot");u(v,L,Se,"⊺","\\intercal",!0);u(v,L,Se,"⋒","\\doublecap");u(v,L,Se,"⋓","\\doublecup");u(v,L,Se,"⊠","\\boxtimes",!0);u(v,L,N,"⇢","\\dashrightarrow",!0);u(v,L,N,"⇠","\\dashleftarrow",!0);u(v,L,N,"⇇","\\leftleftarrows",!0);u(v,L,N,"⇆","\\leftrightarrows",!0);u(v,L,N,"⇚","\\Lleftarrow",!0);u(v,L,N,"↞","\\twoheadleftarrow",!0);u(v,L,N,"↢","\\leftarrowtail",!0);u(v,L,N,"↫","\\looparrowleft",!0);u(v,L,N,"⇋","\\leftrightharpoons",!0);u(v,L,N,"↶","\\curvearrowleft",!0);u(v,L,N,"↺","\\circlearrowleft",!0);u(v,L,N,"↰","\\Lsh",!0);u(v,L,N,"⇈","\\upuparrows",!0);u(v,L,N,"↿","\\upharpoonleft",!0);u(v,L,N,"⇃","\\downharpoonleft",!0);u(v,y,N,"⊶","\\origof",!0);u(v,y,N,"⊷","\\imageof",!0);u(v,L,N,"⊸","\\multimap",!0);u(v,L,N,"↭","\\leftrightsquigarrow",!0);u(v,L,N,"⇉","\\rightrightarrows",!0);u(v,L,N,"⇄","\\rightleftarrows",!0);u(v,L,N,"↠","\\twoheadrightarrow",!0);u(v,L,N,"↣","\\rightarrowtail",!0);u(v,L,N,"↬","\\looparrowright",!0);u(v,L,N,"↷","\\curvearrowright",!0);u(v,L,N,"↻","\\circlearrowright",!0);u(v,L,N,"↱","\\Rsh",!0);u(v,L,N,"⇊","\\downdownarrows",!0);u(v,L,N,"↾","\\upharpoonright",!0);u(v,L,N,"⇂","\\downharpoonright",!0);u(v,L,N,"⇝","\\rightsquigarrow",!0);u(v,L,N,"⇝","\\leadsto");u(v,L,N,"⇛","\\Rrightarrow",!0);u(v,L,N,"↾","\\restriction");u(v,y,k,"‘","`");u(v,y,k,"$","\\$");u(re,y,k,"$","\\$");u(re,y,k,"$","\\textdollar");u(v,y,k,"%","\\%");u(re,y,k,"%","\\%");u(v,y,k,"_","\\_");u(re,y,k,"_","\\_");u(re,y,k,"_","\\textunderscore");u(v,y,k,"∠","\\angle",!0);u(v,y,k,"∞","\\infty",!0);u(v,y,k,"′","\\prime");u(v,y,k,"△","\\triangle");u(v,y,k,"Γ","\\Gamma",!0);u(v,y,k,"Δ","\\Delta",!0);u(v,y,k,"Θ","\\Theta",!0);u(v,y,k,"Λ","\\Lambda",!0);u(v,y,k,"Ξ","\\Xi",!0);u(v,y,k,"Π","\\Pi",!0);u(v,y,k,"Σ","\\Sigma",!0);u(v,y,k,"Υ","\\Upsilon",!0);u(v,y,k,"Φ","\\Phi",!0);u(v,y,k,"Ψ","\\Psi",!0);u(v,y,k,"Ω","\\Omega",!0);u(v,y,k,"A","Α");u(v,y,k,"B","Β");u(v,y,k,"E","Ε");u(v,y,k,"Z","Ζ");u(v,y,k,"H","Η");u(v,y,k,"I","Ι");u(v,y,k,"K","Κ");u(v,y,k,"M","Μ");u(v,y,k,"N","Ν");u(v,y,k,"O","Ο");u(v,y,k,"P","Ρ");u(v,y,k,"T","Τ");u(v,y,k,"X","Χ");u(v,y,k,"¬","\\neg",!0);u(v,y,k,"¬","\\lnot");u(v,y,k,"⊤","\\top");u(v,y,k,"⊥","\\bot");u(v,y,k,"∅","\\emptyset");u(v,L,k,"∅","\\varnothing");u(v,y,Ne,"α","\\alpha",!0);u(v,y,Ne,"β","\\beta",!0);u(v,y,Ne,"γ","\\gamma",!0);u(v,y,Ne,"δ","\\delta",!0);u(v,y,Ne,"ϵ","\\epsilon",!0);u(v,y,Ne,"ζ","\\zeta",!0);u(v,y,Ne,"η","\\eta",!0);u(v,y,Ne,"θ","\\theta",!0);u(v,y,Ne,"ι","\\iota",!0);u(v,y,Ne,"κ","\\kappa",!0);u(v,y,Ne,"λ","\\lambda",!0);u(v,y,Ne,"μ","\\mu",!0);u(v,y,Ne,"ν","\\nu",!0);u(v,y,Ne,"ξ","\\xi",!0);u(v,y,Ne,"ο","\\omicron",!0);u(v,y,Ne,"π","\\pi",!0);u(v,y,Ne,"ρ","\\rho",!0);u(v,y,Ne,"σ","\\sigma",!0);u(v,y,Ne,"τ","\\tau",!0);u(v,y,Ne,"υ","\\upsilon",!0);u(v,y,Ne,"ϕ","\\phi",!0);u(v,y,Ne,"χ","\\chi",!0);u(v,y,Ne,"ψ","\\psi",!0);u(v,y,Ne,"ω","\\omega",!0);u(v,y,Ne,"ε","\\varepsilon",!0);u(v,y,Ne,"ϑ","\\vartheta",!0);u(v,y,Ne,"ϖ","\\varpi",!0);u(v,y,Ne,"ϱ","\\varrho",!0);u(v,y,Ne,"ς","\\varsigma",!0);u(v,y,Ne,"φ","\\varphi",!0);u(v,y,Se,"∗","*",!0);u(v,y,Se,"+","+");u(v,y,Se,"−","-",!0);u(v,y,Se,"⋅","\\cdot",!0);u(v,y,Se,"∘","\\circ",!0);u(v,y,Se,"÷","\\div",!0);u(v,y,Se,"±","\\pm",!0);u(v,y,Se,"×","\\times",!0);u(v,y,Se,"∩","\\cap",!0);u(v,y,Se,"∪","\\cup",!0);u(v,y,Se,"∖","\\setminus",!0);u(v,y,Se,"∧","\\land");u(v,y,Se,"∨","\\lor");u(v,y,Se,"∧","\\wedge",!0);u(v,y,Se,"∨","\\vee",!0);u(v,y,k,"√","\\surd");u(v,y,_n,"⟨","\\langle",!0);u(v,y,_n,"∣","\\lvert");u(v,y,_n,"∥","\\lVert");u(v,y,rn,"?","?");u(v,y,rn,"!","!");u(v,y,rn,"⟩","\\rangle",!0);u(v,y,rn,"∣","\\rvert");u(v,y,rn,"∥","\\rVert");u(v,y,N,"=","=");u(v,y,N,":",":");u(v,y,N,"≈","\\approx",!0);u(v,y,N,"≅","\\cong",!0);u(v,y,N,"≥","\\ge");u(v,y,N,"≥","\\geq",!0);u(v,y,N,"←","\\gets");u(v,y,N,">","\\gt",!0);u(v,y,N,"∈","\\in",!0);u(v,y,N,"","\\@not");u(v,y,N,"⊂","\\subset",!0);u(v,y,N,"⊃","\\supset",!0);u(v,y,N,"⊆","\\subseteq",!0);u(v,y,N,"⊇","\\supseteq",!0);u(v,L,N,"⊈","\\nsubseteq",!0);u(v,L,N,"⊉","\\nsupseteq",!0);u(v,y,N,"⊨","\\models");u(v,y,N,"←","\\leftarrow",!0);u(v,y,N,"≤","\\le");u(v,y,N,"≤","\\leq",!0);u(v,y,N,"<","\\lt",!0);u(v,y,N,"→","\\rightarrow",!0);u(v,y,N,"→","\\to");u(v,L,N,"≱","\\ngeq",!0);u(v,L,N,"≰","\\nleq",!0);u(v,y,oi," ","\\ ");u(v,y,oi," ","\\space");u(v,y,oi," ","\\nobreakspace");u(re,y,oi," ","\\ ");u(re,y,oi," "," ");u(re,y,oi," ","\\space");u(re,y,oi," ","\\nobreakspace");u(v,y,oi,"","\\nobreak");u(v,y,oi,"","\\allowbreak");u(v,y,fs,",",",");u(v,y,fs,";",";");u(v,L,Se,"⊼","\\barwedge",!0);u(v,L,Se,"⊻","\\veebar",!0);u(v,y,Se,"⊙","\\odot",!0);u(v,y,Se,"⊕","\\oplus",!0);u(v,y,Se,"⊗","\\otimes",!0);u(v,y,k,"∂","\\partial",!0);u(v,y,Se,"⊘","\\oslash",!0);u(v,L,Se,"⊚","\\circledcirc",!0);u(v,L,Se,"⊡","\\boxdot",!0);u(v,y,Se,"△","\\bigtriangleup");u(v,y,Se,"▽","\\bigtriangledown");u(v,y,Se,"†","\\dagger");u(v,y,Se,"⋄","\\diamond");u(v,y,Se,"⋆","\\star");u(v,y,Se,"◃","\\triangleleft");u(v,y,Se,"▹","\\triangleright");u(v,y,_n,"{","\\{");u(re,y,k,"{","\\{");u(re,y,k,"{","\\textbraceleft");u(v,y,rn,"}","\\}");u(re,y,k,"}","\\}");u(re,y,k,"}","\\textbraceright");u(v,y,_n,"{","\\lbrace");u(v,y,rn,"}","\\rbrace");u(v,y,_n,"[","\\lbrack",!0);u(re,y,k,"[","\\lbrack",!0);u(v,y,rn,"]","\\rbrack",!0);u(re,y,k,"]","\\rbrack",!0);u(v,y,_n,"(","\\lparen",!0);u(v,y,rn,")","\\rparen",!0);u(re,y,k,"<","\\textless",!0);u(re,y,k,">","\\textgreater",!0);u(v,y,_n,"⌊","\\lfloor",!0);u(v,y,rn,"⌋","\\rfloor",!0);u(v,y,_n,"⌈","\\lceil",!0);u(v,y,rn,"⌉","\\rceil",!0);u(v,y,k,"\\","\\backslash");u(v,y,k,"∣","|");u(v,y,k,"∣","\\vert");u(re,y,k,"|","\\textbar",!0);u(v,y,k,"∥","\\|");u(v,y,k,"∥","\\Vert");u(re,y,k,"∥","\\textbardbl");u(re,y,k,"~","\\textasciitilde");u(re,y,k,"\\","\\textbackslash");u(re,y,k,"^","\\textasciicircum");u(v,y,N,"↑","\\uparrow",!0);u(v,y,N,"⇑","\\Uparrow",!0);u(v,y,N,"↓","\\downarrow",!0);u(v,y,N,"⇓","\\Downarrow",!0);u(v,y,N,"↕","\\updownarrow",!0);u(v,y,N,"⇕","\\Updownarrow",!0);u(v,y,Ot,"∐","\\coprod");u(v,y,Ot,"⋁","\\bigvee");u(v,y,Ot,"⋀","\\bigwedge");u(v,y,Ot,"⨄","\\biguplus");u(v,y,Ot,"⋂","\\bigcap");u(v,y,Ot,"⋃","\\bigcup");u(v,y,Ot,"∫","\\int");u(v,y,Ot,"∫","\\intop");u(v,y,Ot,"∬","\\iint");u(v,y,Ot,"∭","\\iiint");u(v,y,Ot,"∏","\\prod");u(v,y,Ot,"∑","\\sum");u(v,y,Ot,"⨂","\\bigotimes");u(v,y,Ot,"⨁","\\bigoplus");u(v,y,Ot,"⨀","\\bigodot");u(v,y,Ot,"∮","\\oint");u(v,y,Ot,"∯","\\oiint");u(v,y,Ot,"∰","\\oiiint");u(v,y,Ot,"⨆","\\bigsqcup");u(v,y,Ot,"∫","\\smallint");u(re,y,Wr,"…","\\textellipsis");u(v,y,Wr,"…","\\mathellipsis");u(re,y,Wr,"…","\\ldots",!0);u(v,y,Wr,"…","\\ldots",!0);u(v,y,Wr,"⋯","\\@cdots",!0);u(v,y,Wr,"⋱","\\ddots",!0);u(v,y,k,"⋮","\\varvdots");u(re,y,k,"⋮","\\varvdots");u(v,y,wt,"ˊ","\\acute");u(v,y,wt,"ˋ","\\grave");u(v,y,wt,"¨","\\ddot");u(v,y,wt,"~","\\tilde");u(v,y,wt,"ˉ","\\bar");u(v,y,wt,"˘","\\breve");u(v,y,wt,"ˇ","\\check");u(v,y,wt,"^","\\hat");u(v,y,wt,"⃗","\\vec");u(v,y,wt,"˙","\\dot");u(v,y,wt,"˚","\\mathring");u(v,y,Ne,"","\\@imath");u(v,y,Ne,"","\\@jmath");u(v,y,k,"ı","ı");u(v,y,k,"ȷ","ȷ");u(re,y,k,"ı","\\i",!0);u(re,y,k,"ȷ","\\j",!0);u(re,y,k,"ß","\\ss",!0);u(re,y,k,"æ","\\ae",!0);u(re,y,k,"œ","\\oe",!0);u(re,y,k,"ø","\\o",!0);u(re,y,k,"Æ","\\AE",!0);u(re,y,k,"Œ","\\OE",!0);u(re,y,k,"Ø","\\O",!0);u(re,y,wt,"ˊ","\\'");u(re,y,wt,"ˋ","\\`");u(re,y,wt,"ˆ","\\^");u(re,y,wt,"˜","\\~");u(re,y,wt,"ˉ","\\=");u(re,y,wt,"˘","\\u");u(re,y,wt,"˙","\\.");u(re,y,wt,"¸","\\c");u(re,y,wt,"˚","\\r");u(re,y,wt,"ˇ","\\v");u(re,y,wt,"¨",'\\"');u(re,y,wt,"˝","\\H");u(re,y,wt,"◯","\\textcircled");var gu={"--":!0,"---":!0,"``":!0,"''":!0};u(re,y,k,"–","--",!0);u(re,y,k,"–","\\textendash");u(re,y,k,"—","---",!0);u(re,y,k,"—","\\textemdash");u(re,y,k,"‘","`",!0);u(re,y,k,"‘","\\textquoteleft");u(re,y,k,"’","'",!0);u(re,y,k,"’","\\textquoteright");u(re,y,k,"“","``",!0);u(re,y,k,"“","\\textquotedblleft");u(re,y,k,"”","''",!0);u(re,y,k,"”","\\textquotedblright");u(v,y,k,"°","\\degree",!0);u(re,y,k,"°","\\degree");u(re,y,k,"°","\\textdegree",!0);u(v,y,k,"£","\\pounds");u(v,y,k,"£","\\mathsterling",!0);u(re,y,k,"£","\\pounds");u(re,y,k,"£","\\textsterling",!0);u(v,L,k,"✠","\\maltese");u(re,L,k,"✠","\\maltese");var qc='0123456789/@."';for(var Do=0;Do<qc.length;Do++){var Xc=qc.charAt(Do);u(v,y,k,Xc,Xc)}var Yc='0123456789!@*()-=+";:?/.,';for(var Lo=0;Lo<Yc.length;Lo++){var jc=Yc.charAt(Lo);u(re,y,k,jc,jc)}var Sa="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Io=0;Io<Sa.length;Io++){var Ys=Sa.charAt(Io);u(v,y,Ne,Ys,Ys),u(re,y,k,Ys,Ys)}u(v,L,k,"C","ℂ");u(re,L,k,"C","ℂ");u(v,L,k,"H","ℍ");u(re,L,k,"H","ℍ");u(v,L,k,"N","ℕ");u(re,L,k,"N","ℕ");u(v,L,k,"P","ℙ");u(re,L,k,"P","ℙ");u(v,L,k,"Q","ℚ");u(re,L,k,"Q","ℚ");u(v,L,k,"R","ℝ");u(re,L,k,"R","ℝ");u(v,L,k,"Z","ℤ");u(re,L,k,"Z","ℤ");u(v,y,Ne,"h","ℎ");u(re,y,Ne,"h","ℎ");var Oe;for(var Qt=0;Qt<Sa.length;Qt++){var Dt=Sa.charAt(Qt);Oe=String.fromCharCode(55349,56320+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Oe=String.fromCharCode(55349,56372+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Oe=String.fromCharCode(55349,56424+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Oe=String.fromCharCode(55349,56580+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Oe=String.fromCharCode(55349,56684+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Oe=String.fromCharCode(55349,56736+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Oe=String.fromCharCode(55349,56788+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Oe=String.fromCharCode(55349,56840+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Oe=String.fromCharCode(55349,56944+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Qt<26&&(Oe=String.fromCharCode(55349,56632+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe),Oe=String.fromCharCode(55349,56476+Qt),u(v,y,Ne,Dt,Oe),u(re,y,k,Dt,Oe))}Oe="𝕜";u(v,y,Ne,"k",Oe);u(re,y,k,"k",Oe);for(var ki=0;ki<10;ki++){var vi=ki.toString();Oe=String.fromCharCode(55349,57294+ki),u(v,y,Ne,vi,Oe),u(re,y,k,vi,Oe),Oe=String.fromCharCode(55349,57314+ki),u(v,y,Ne,vi,Oe),u(re,y,k,vi,Oe),Oe=String.fromCharCode(55349,57324+ki),u(v,y,Ne,vi,Oe),u(re,y,k,vi,Oe),Oe=String.fromCharCode(55349,57334+ki),u(v,y,Ne,vi,Oe),u(re,y,k,vi,Oe)}var U0="ÐÞþ";for(var No=0;No<U0.length;No++){var js=U0.charAt(No);u(v,y,Ne,js,js),u(re,y,k,js,js)}var F0={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},$c={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},Kc={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},C4={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},Wi={mathClass:"",textClass:"",font:""},Zc={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},Jc={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},Qc={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},z0={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},O0={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},eh={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},k0={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},th=[F0,F0,$c,$c,Kc,Kc,C4,Wi,Wi,Wi,Zc,Zc,Jc,Jc,Qc,Qc,z0,z0,O0,O0,eh,eh,Wi,Wi,k0,k0],R4=[F0,Wi,z0,O0,k0],P4=i=>{var e=i.charCodeAt(0),t=i.charCodeAt(1),n=(e-55296)*1024+(t-56320)+65536;if(119808<=n&&n<120484){var r=Math.floor((n-119808)/26);return th[r]}else if(120782<=n&&n<=120831){var s=Math.floor((n-120782)/10);return R4[s]}else{if(n===120485||n===120486)return th[0];if(120486<n&&n<120782)return Wi;throw new oe("Unsupported character: "+i)}},Na=function(e,t,n){if(St[n][e]){var r=St[n][e].replace;r&&(e=r)}return{value:e,metrics:gl(e,t,n)}},tn=function(e,t,n,r,s){var a=Na(e,t,n),o=a.metrics;e=a.value;var l;if(o){var c=o.italic;(n==="text"||r&&r.font==="mathit")&&(c=0),l=new xn(e,o.height,o.depth,c,o.skew,o.width,s)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+n+"'")),l=new xn(e,0,0,0,0,0,s);if(r){l.maxFontSize=r.sizeMultiplier,r.style.isTight()&&l.classes.push("mtight");var h=r.getColor();h&&(l.style.color=h)}return l},vl=function(e,t,n,r){return r===void 0&&(r=[]),n.font==="boldsymbol"&&Na(e,"Main-Bold",t).metrics?tn(e,"Main-Bold",t,n,r.concat(["mathbf"])):e==="\\"||St[t][e].font==="main"?tn(e,"Main-Regular",t,n,r):tn(e,"AMS-Regular",t,n,r.concat(["amsrm"]))},D4=function(e,t,n){return n!=="textord"&&Na(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Ua=function(e,t,n){var r=e.mode,s=e.text,a=["mord"],{font:o,fontFamily:l,fontWeight:c,fontShape:h}=t,d=r==="math"||r==="text"&&!!o,f=d?o:l,m="",_="";if(s.charCodeAt(0)===55349){var x=P4(s);m=x.font,_=x[r+"Class"]}if(m)return tn(s,m,r,t,a.concat(_));if(f){var g,p;if(f==="boldsymbol"){var b=D4(s,r,n);g=b.fontName,p=[b.fontClass]}else d?(g=B0[o].fontName,p=[o]):(g=$s(l,c,h),p=[l,c,h]);if(Na(s,g,r).metrics)return tn(s,g,r,t,a.concat(p));if(gu.hasOwnProperty(s)&&g.slice(0,10)==="Typewriter"){for(var M=[],A=0;A<s.length;A++)M.push(tn(s[A],g,r,t,a.concat(p)));return li(M)}}if(n==="mathord")return tn(s,"Math-Italic",r,t,a.concat(["mathnormal"]));if(n==="textord"){var F=St[r][s]&&St[r][s].font;if(F==="ams"){var R=$s("amsrm",c,h);return tn(s,R,r,t,a.concat("amsrm",c,h))}else if(F==="main"||!F){var P=$s("textrm",c,h);return tn(s,P,r,t,a.concat(c,h))}else{var U=$s(F,c,h);return tn(s,U,r,t,a.concat(U,c,h))}}else throw new Error("unexpected type: "+n+" in makeOrd")},L4=(i,e)=>{if(Ti(i.classes)!==Ti(e.classes)||i.skew!==e.skew||i.maxFontSize!==e.maxFontSize||i.italic!==0&&i.hasClass("mathnormal"))return!1;if(i.classes.length===1){var t=i.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n of Object.keys(i.style))if(i.style[n]!==e.style[n])return!1;for(var r of Object.keys(e.style))if(i.style[r]!==e.style[r])return!1;return!0},vu=i=>{for(var e=0;e<i.length-1;e++){var t=i[e],n=i[e+1];t instanceof xn&&n instanceof xn&&L4(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,i.splice(e+1,1),e--)}return i},xl=function(e){for(var t=0,n=0,r=0,s=0;s<e.children.length;s++){var a=e.children[s];a.height>t&&(t=a.height),a.depth>n&&(n=a.depth),a.maxFontSize>r&&(r=a.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},ae=function(e,t,n,r){var s=new Gr(e,t,n,r);return xl(s),s},Ci=(i,e,t,n)=>new Gr(i,e,t,n),zr=function(e,t,n){var r=ae([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=he(r.height),r.maxFontSize=1,r},I4=function(e,t,n,r){var s=new Ia(e,t,n,r);return xl(s),s},li=function(e){var t=new Vr(e);return xl(t),t},Or=function(e,t){return e instanceof Vr?ae([],[e],t):e},N4=function(e){if(e.positionType==="individualShift"){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,s=r,a=1;a<t.length;a++){var o=-t[a].shift-s-t[a].elem.depth,l=o-(t[a-1].elem.height+t[a-1].elem.depth);s=s+o,n.push({type:"kern",size:l}),n.push(t[a])}return{children:n,depth:r}}var c;if(e.positionType==="top"){for(var h=e.positionData,d=0;d<e.children.length;d++){var f=e.children[d];h-=f.type==="kern"?f.size:f.elem.height+f.elem.depth}c=h}else if(e.positionType==="bottom")c=-e.positionData;else{var m=e.children[0];if(m.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-m.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-m.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},at=function(e,t){for(var{children:n,depth:r}=N4(e),s=0,a=0;a<n.length;a++){var o=n[a];if(o.type==="elem"){var l=o.elem;s=Math.max(s,l.maxFontSize,l.height)}}s+=2;var c=ae(["pstrut"],[]);c.style.height=he(s);for(var h=[],d=r,f=r,m=r,_=0;_<n.length;_++){var x=n[_];if(x.type==="kern")m+=x.size;else{var g=x.elem,p=x.wrapperClasses||[],b=x.wrapperStyle||{},M=ae(p,[c,g],void 0,b);M.style.top=he(-s-m-g.depth),x.marginLeft&&(M.style.marginLeft=x.marginLeft),x.marginRight&&(M.style.marginRight=x.marginRight),h.push(M),m+=g.height+g.depth}d=Math.min(d,m),f=Math.max(f,m)}var A=ae(["vlist"],h);A.style.height=he(f);var F;if(d<0){var R=ae([],[]),P=ae(["vlist"],[R]);P.style.height=he(-d);var U=ae(["vlist-s"],[new xn("​")]);F=[ae(["vlist-r"],[A,U]),ae(["vlist-r"],[P])]}else F=[ae(["vlist-r"],[A])];var E=ae(["vlist-t"],F);return F.length===2&&E.classes.push("vlist-t2"),E.height=f,E.depth=-d,E},xu=(i,e)=>{var t=ae(["mspace"],[],e),n=At(i,e);return t.style.marginRight=he(n),t},$s=(i,e,t)=>{var n,r;switch(i){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=i}return e==="textbf"&&t==="textit"?r="BoldItalic":e==="textbf"?r="Bold":t==="textit"?r="Italic":r="Regular",n+"-"+r},B0={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},_u={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},yu=function(e,t){var[n,r,s]=_u[e],a=new Ai(n),o=new si([a],{width:he(r),height:he(s),style:"width:"+he(r),viewBox:"0 0 "+1e3*r+" "+1e3*s,preserveAspectRatio:"xMinYMin"}),l=Ci(["overlay"],[o],t);return l.height=s,l.style.height=he(s),l.style.width=he(r),l},Tt={number:3,unit:"mu"},Bi={number:4,unit:"mu"},Zn={number:5,unit:"mu"},U4={mord:{mop:Tt,mbin:Bi,mrel:Zn,minner:Tt},mop:{mord:Tt,mop:Tt,mrel:Zn,minner:Tt},mbin:{mord:Bi,mop:Bi,mopen:Bi,minner:Bi},mrel:{mord:Zn,mop:Zn,mopen:Zn,minner:Zn},mopen:{},mclose:{mop:Tt,mbin:Bi,mrel:Zn,minner:Tt},mpunct:{mord:Tt,mop:Tt,mrel:Zn,mopen:Tt,mclose:Tt,mpunct:Tt,minner:Tt},minner:{mord:Tt,mop:Tt,mbin:Bi,mrel:Zn,mopen:Tt,mpunct:Tt,minner:Tt}},F4={mord:{mop:Tt},mop:{mord:Tt,mop:Tt},mbin:{},mrel:{},mopen:{},mclose:{mop:Tt},mpunct:{},minner:{mop:Tt}},Mu={},wa={},Ea={};function xe(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:s,mathmlBuilder:a}=i,o={type:e,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:r},l=0;l<t.length;++l)Mu[t[l]]=o;e&&(s&&(wa[e]=s),a&&(Ea[e]=a))}function er(i){var{type:e,htmlBuilder:t,mathmlBuilder:n}=i;xe({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:n})}var Ta=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},Ft=function(e){return e.type==="ordgroup"?e.body:[e]},z4=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),O4=new Set(["rightmost","mrel","mclose","mpunct"]),k4={display:Xe.DISPLAY,text:Xe.TEXT,script:Xe.SCRIPT,scriptscript:Xe.SCRIPTSCRIPT},B4={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Gt=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var s=[],a=0;a<e.length;a++){var o=ot(e[a],t);if(o instanceof Vr){var l=o.children;s.push(...l)}else s.push(o)}if(vu(s),!n)return s;var c=t;if(e.length===1){var h=e[0];h.type==="sizing"?c=t.havingSize(h.size):h.type==="styling"&&(c=t.havingStyle(k4[h.style]))}var d=ae([r[0]||"leftmost"],[],t),f=ae([r[1]||"rightmost"],[],t),m=n==="root";return H0(s,(_,x)=>{var g=x.classes[0],p=_.classes[0];g==="mbin"&&O4.has(p)?x.classes[0]="mord":p==="mbin"&&z4.has(g)&&(_.classes[0]="mord")},{node:d},f,m),H0(s,(_,x)=>{var g,p,b=G0(x),M=G0(_),A=b&&M?_.hasClass("mtight")?(g=F4[b])==null?void 0:g[M]:(p=U4[b])==null?void 0:p[M]:null;if(A)return xu(A,c)},{node:d},f,m),s},H0=function(e,t,n,r,s){r&&e.push(r);for(var a=0;a<e.length;a++){var o=e[a],l=bu(o);if(l){H0(l.children,t,n,null,s);continue}var c=!o.hasClass("mspace");if(c){var h=t(o,n.node);h&&(n.insertAfter?n.insertAfter(h):(e.unshift(h),a++))}c?n.node=o:s&&o.hasClass("newline")&&(n.node=ae(["leftmost"])),n.insertAfter=(d=>f=>{e.splice(d+1,0,f),a++})(a)}r&&e.pop()},bu=function(e){return e instanceof Vr||e instanceof Ia||e instanceof Gr&&e.hasClass("enclosing")?e:null},V0=function(e,t){var n=bu(e);if(n){var r=n.children;if(r.length){if(t==="right")return V0(r[r.length-1],"right");if(t==="left")return V0(r[0],"left")}}return e},G0=function(e,t){if(!e)return null;t&&(e=V0(e,t));var n=e.classes[0];return B4[n]||null},ls=function(e,t){var n=["nulldelimiter"].concat(e.baseSizingClasses());return ae(t.concat(n))},ot=function(e,t,n){if(!e)return ae();if(wa[e.type]){var r=wa[e.type](e,t);if(n&&t.size!==n.size){r=ae(t.sizingClasses(n),[r],t);var s=t.sizeMultiplier/n.sizeMultiplier;r.height*=s,r.depth*=s}return r}else throw new oe("Got group of unknown type: '"+e.type+"'")};function Ks(i,e){var t=ae(["base"],i,e),n=ae(["strut"]);return n.style.height=he(t.height+t.depth),t.depth&&(n.style.verticalAlign=he(-t.depth)),t.children.unshift(n),t}function W0(i,e){var t=null;i.length===1&&i[0].type==="tag"&&(t=i[0].tag,i=i[0].body);var n=Gt(i,e,"root"),r;n.length===2&&n[1].hasClass("tag")&&(r=n.pop());for(var s=[],a=[],o=0;o<n.length;o++)if(a.push(n[o]),n[o].hasClass("mbin")||n[o].hasClass("mrel")||n[o].hasClass("allowbreak")){for(var l=!1;o<n.length-1&&n[o+1].hasClass("mspace")&&!n[o+1].hasClass("newline");)o++,a.push(n[o]),n[o].hasClass("nobreak")&&(l=!0);l||(s.push(Ks(a,e)),a=[])}else n[o].hasClass("newline")&&(a.pop(),a.length>0&&(s.push(Ks(a,e)),a=[]),s.push(n[o]));a.length>0&&s.push(Ks(a,e));var c;t?(c=Ks(Gt(t,e,!0),e),c.classes=["tag"],s.push(c)):r&&s.push(r);var h=ae(["katex-html"],s);if(h.setAttribute("aria-hidden","true"),c){var d=c.children[0];d.style.height=he(h.height+h.depth),h.depth&&(d.style.verticalAlign=he(-h.depth))}return h}function Su(i){return new Vr(i)}class le{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Ti(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof zt&&this.children[n+1]instanceof zt){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof zt;)r+=this.children[++n].toText();e.appendChild(new zt(r).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=Jt(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+Jt(Ti(this.classes))+'"'),e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class zt{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return Jt(this.toText())}toText(){return this.text}}class wu{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",he(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+he(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var H4=new Set(["\\imath","\\jmath"]),V4=new Set(["mrow","mtable"]),En=function(e,t,n){return St[t][e]&&St[t][e].replace&&e.charCodeAt(0)!==55349&&!(gu.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(e=St[t][e].replace),new zt(e)},_l=function(e){return e.length===1?e[0]:new le("mrow",e)},G4={mathit:"italic",boldsymbol:i=>i.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},yl=(i,e)=>{if(i.mode==="text"){if(e.fontFamily==="texttt")return"monospace";if(e.fontFamily==="textsf")return e.fontShape==="textit"&&e.fontWeight==="textbf"?"sans-serif-bold-italic":e.fontShape==="textit"?"sans-serif-italic":e.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(e.fontShape==="textit"&&e.fontWeight==="textbf")return"bold-italic";if(e.fontShape==="textit")return"italic";if(e.fontWeight==="textbf")return"bold"}var t=e.font;if(!t||t==="mathnormal")return null;var n=i.mode,r=G4[t];if(r)return typeof r=="function"?r(i):r;var s=i.text;if(H4.has(s))return null;if(St[n][s]){var a=St[n][s].replace;a&&(s=a)}var o=B0[t].fontName;return gl(s,o,n)?B0[t].variant:null};function Uo(i){if(!i)return!1;if(i.type==="mi"&&i.children.length===1){var e=i.children[0];return e instanceof zt&&e.text==="."}else if(i.type==="mo"&&i.children.length===1&&i.getAttribute("separator")==="true"&&i.getAttribute("lspace")==="0em"&&i.getAttribute("rspace")==="0em"){var t=i.children[0];return t instanceof zt&&t.text===","}else return!1}var yn=function(e,t,n){if(e.length===1){var r=gt(e[0],t);return n&&r instanceof le&&r.type==="mo"&&(r.setAttribute("lspace","0em"),r.setAttribute("rspace","0em")),[r]}for(var s=[],a,o=0;o<e.length;o++){var l=gt(e[o],t);if(l instanceof le&&a instanceof le){if(l.type==="mtext"&&a.type==="mtext"&&l.getAttribute("mathvariant")===a.getAttribute("mathvariant")){a.children.push(...l.children);continue}else if(l.type==="mn"&&a.type==="mn"){a.children.push(...l.children);continue}else if(Uo(l)&&a.type==="mn"){a.children.push(...l.children);continue}else if(l.type==="mn"&&Uo(a))l.children=[...a.children,...l.children],s.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(a.type==="mn"||Uo(a))){var c=l.children[0];c instanceof le&&c.type==="mn"&&(c.children=[...a.children,...c.children],s.pop())}else if(a.type==="mi"&&a.children.length===1){var h=a.children[0];if(h instanceof zt&&h.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var d=l.children[0];d instanceof zt&&d.text.length>0&&(d.text=d.text.slice(0,1)+"̸"+d.text.slice(1),s.pop())}}}s.push(l),a=l}return s},Ri=function(e,t,n){return _l(yn(e,t,n))},gt=function(e,t){if(!e)return new le("mrow");if(Ea[e.type])return Ea[e.type](e,t);throw new oe("Got group of unknown type: '"+e.type+"'")};function nh(i,e,t,n,r){var s=yn(i,t),a;s.length===1&&s[0]instanceof le&&V4.has(s[0].type)?a=s[0]:a=new le("mrow",s);var o=new le("annotation",[new zt(e)]);o.setAttribute("encoding","application/x-tex");var l=new le("semantics",[a,o]),c=new le("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&c.setAttribute("display","block");var h=r?"katex":"katex-mathml";return ae([h],[c])}var W4=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],ih=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],rh=function(e,t){return t.size<2?e:W4[e-1][t.size-1]};class Qn{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||Qn.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=ih[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(t,e),new Qn(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:rh(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:ih[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=rh(Qn.BASESIZE,e);return this.size===t&&this.textSize===Qn.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Qn.BASESIZE?["sizing","reset-size"+this.size,"size"+Qn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=A4(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Qn.BASESIZE=6;var Eu=function(e){return new Qn({style:e.displayMode?Xe.DISPLAY:Xe.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},Tu=function(e,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),e=ae(n,[e])}return e},q4=function(e,t,n){var r=Eu(n),s;if(n.output==="mathml")return nh(e,t,r,n.displayMode,!0);if(n.output==="html"){var a=W0(e,r);s=ae(["katex"],[a])}else{var o=nh(e,t,r,n.displayMode,!1),l=W0(e,r);s=ae(["katex"],[o,l])}return Tu(s,n)},X4=function(e,t,n){var r=Eu(n),s=W0(e,r),a=ae(["katex"],[s]);return Tu(a,n)},Y4={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Fa=function(e){var t=new le("mo",[new zt(Y4[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},j4={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},$4=new Set(["widehat","widecheck","widetilde","utilde"]),za=function(e,t){function n(){var o=4e5,l=e.label.slice(1);if($4.has(l)&&"base"in e){var c=e.base.type==="ordgroup"?e.base.body.length:1,h,d,f;if(c>5)l==="widehat"||l==="widecheck"?(h=420,o=2364,f=.42,d=l+"4"):(h=312,o=2340,f=.34,d="tilde4");else{var m=[1,1,2,2,3,3][c];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][m],h=[0,239,300,360,420][m],f=[0,.24,.3,.3,.36,.42][m],d=l+m):(o=[0,600,1033,2339,2340][m],h=[0,260,286,306,312][m],f=[0,.26,.286,.3,.306,.34][m],d="tilde"+m)}var _=new Ai(d),x=new si([_],{width:"100%",height:he(f),viewBox:"0 0 "+o+" "+h,preserveAspectRatio:"none"});return{span:Ci([],[x],t),minWidth:0,height:f}}else{var g=[],p=j4[l];if(!p)throw new Error('No SVG data for "'+l+'".');var[b,M,A]=p,F=A/1e3,R=b.length,P,U;if(R===1){if(p.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+l+'".');P=["hide-tail"],U=[p[3]]}else if(R===2)P=["halfarrow-left","halfarrow-right"],U=["xMinYMin","xMaxYMin"];else if(R===3)P=["brace-left","brace-center","brace-right"],U=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+R+" children.");for(var E=0;E<R;E++){var S=new Ai(b[E]),z=new si([S],{width:"400em",height:he(F),viewBox:"0 0 "+o+" "+A,preserveAspectRatio:U[E]+" slice"}),G=Ci([P[E]],[z],t);if(R===1)return{span:G,minWidth:M,height:F};G.style.height=he(F),g.push(G)}return{span:ae(["stretchy"],g,t),minWidth:M,height:F}}}var{span:r,minWidth:s,height:a}=n();return r.height=a,r.style.height=he(a),s>0&&(r.style.minWidth=he(s)),r},K4=function(e,t,n,r,s){var a,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(a=ae(["stretchy",t],[],s),t==="fbox"){var l=s.color&&s.getColor();l&&(a.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new N0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new N0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new si(c,{width:"100%",height:he(o)});a=Ci([],[h],s)}return a.height=o,a.style.height=he(o),a},Z4={bin:1,close:1,inner:1,open:1,punct:1,rel:1},J4={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function Q4(i){return i in Z4}function je(i,e){if(!i||i.type!==e)throw new Error("Expected node of type "+e+", but got "+(i?"node of type "+i.type:String(i)));return i}function Oa(i){var e=ka(i);if(!e)throw new Error("Expected node of symbol group type, but got "+(i?"node of type "+i.type:String(i)));return e}function ka(i){return i&&(i.type==="atom"||J4.hasOwnProperty(i.type))?i:null}var Au=i=>{if(i instanceof xn)return i;if(E4(i)&&i.children.length===1)return Au(i.children[0])},Ml=(i,e)=>{var t,n,r;i&&i.type==="supsub"?(n=je(i.base,"accent"),t=n.base,i.base=t,r=w4(ot(i,e)),i.base=n):(n=je(i,"accent"),t=n.base);var s=ot(t,e.havingCrampedStyle()),a=n.isShifty&&ai(t),o=0;if(a){var l,c;o=(l=(c=Au(s))==null?void 0:c.skew)!=null?l:0}var h=n.label==="\\c",d=h?s.height+s.depth:Math.min(s.height,e.fontMetrics().xHeight),f;if(n.isStretchy)f=za(n,e),f=at({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"elem",elem:f,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+he(2*o)+")",marginLeft:he(2*o)}:void 0}]});else{var m,_;n.label==="\\vec"?(m=yu("vec",e),_=_u.vec[1]):(m=Ua({mode:n.mode,text:n.label},e,"textord"),m=S4(m),m.italic=0,_=m.width,h&&(d+=m.depth)),f=ae(["accent-body"],[m]);var x=n.label==="\\textcircled";x&&(f.classes.push("accent-full"),d=s.height);var g=o;x||(g-=_/2),f.style.left=he(g),n.label==="\\textcircled"&&(f.style.top=".2em"),f=at({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:-d},{type:"elem",elem:f}]})}var p=ae(["mord","accent"],[f],e);return r?(r.children[0]=p,r.height=Math.max(p.height,r.height),r.classes[0]="mord",r):p},Cu=(i,e)=>{var t=i.isStretchy?Fa(i.label):new le("mo",[En(i.label,i.mode)]),n=new le("mover",[gt(i.base,e),t]);return n.setAttribute("accent","true"),n},ev=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(i=>"\\"+i).join("|"));xe({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(i,e)=>{var t=Ta(e[0]),n=!ev.test(i.funcName),r=!n||i.funcName==="\\widehat"||i.funcName==="\\widetilde"||i.funcName==="\\widecheck";return{type:"accent",mode:i.parser.mode,label:i.funcName,isStretchy:n,isShifty:r,base:t}},htmlBuilder:Ml,mathmlBuilder:Cu});xe({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(i,e)=>{var t=e[0],n=i.parser.mode;return n==="math"&&(i.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+i.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:i.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:Ml,mathmlBuilder:Cu});xe({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"accentUnder",mode:t.mode,label:n,base:r}},htmlBuilder:(i,e)=>{var t=ot(i.base,e),n=za(i,e),r=i.label==="\\utilde"?.12:0,s=at({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:r},{type:"elem",elem:t}]});return ae(["mord","accentunder"],[s],e)},mathmlBuilder:(i,e)=>{var t=Fa(i.label),n=new le("munder",[gt(i.base,e),t]);return n.setAttribute("accentunder","true"),n}});var Zs=i=>{var e=new le("mpadded",i?[i]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};xe({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n,funcName:r}=i;return{type:"xArrow",mode:n.mode,label:r,body:e[0],below:t[0]}},htmlBuilder(i,e){var t=e.style,n=e.havingStyle(t.sup()),r=Or(ot(i.body,n,e),e),s=i.label.slice(0,2)==="\\x"?"x":"cd";r.classes.push(s+"-arrow-pad");var a;i.below&&(n=e.havingStyle(t.sub()),a=Or(ot(i.below,n,e),e),a.classes.push(s+"-arrow-pad"));var o=za(i,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(r.depth>.25||i.label==="\\xleftequilibrium")&&(c-=r.depth);var h;if(a){var d=-e.fontMetrics().axisHeight+a.height+.5*o.height+.111;h=at({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]},{type:"elem",elem:a,shift:d}]})}else h=at({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]}]});return ae(["mrel","x-arrow"],[h],e)},mathmlBuilder(i,e){var t=Fa(i.label);t.setAttribute("minsize",i.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(i.body){var r=Zs(gt(i.body,e));if(i.below){var s=Zs(gt(i.below,e));n=new le("munderover",[t,s,r])}else n=new le("mover",[t,r])}else if(i.below){var a=Zs(gt(i.below,e));n=new le("munder",[t,a])}else n=Zs(),n=new le("mover",[t,n]);return n}});function Ru(i,e){var t=Gt(i.body,e,!0);return ae([i.mclass],t,e)}function Pu(i,e){var t,n=yn(i.body,e);return i.mclass==="minner"?t=new le("mpadded",n):i.mclass==="mord"?i.isCharacterBox?(t=n[0],t.type="mi"):t=new le("mi",n):(i.isCharacterBox?(t=n[0],t.type="mo"):t=new le("mo",n),i.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):i.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):i.mclass==="mopen"||i.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):i.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}xe({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:Ft(r),isCharacterBox:ai(r)}},htmlBuilder:Ru,mathmlBuilder:Pu});var Ba=i=>{var e=i.type==="ordgroup"&&i.body.length?i.body[0]:i;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};xe({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(i,e){var{parser:t}=i;return{type:"mclass",mode:t.mode,mclass:Ba(e[0]),body:Ft(e[1]),isCharacterBox:ai(e[1])}}});xe({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(i,e){var{parser:t,funcName:n}=i,r=e[1],s=e[0],a;n!=="\\stackrel"?a=Ba(r):a="mrel";var o={type:"op",mode:r.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Ft(r)},l={type:"supsub",mode:s.mode,base:o,sup:n==="\\underset"?null:s,sub:n==="\\underset"?s:null};return{type:"mclass",mode:t.mode,mclass:a,body:[l],isCharacterBox:ai(l)}},htmlBuilder:Ru,mathmlBuilder:Pu});xe({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"pmb",mode:t.mode,mclass:Ba(e[0]),body:Ft(e[0])}},htmlBuilder(i,e){var t=Gt(i.body,e,!0),n=ae([i.mclass],t,e);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(i,e){var t=yn(i.body,e),n=new le("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var tv={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},sh=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),ah=i=>i.type==="textord"&&i.text==="@",nv=(i,e)=>(i.type==="mathord"||i.type==="atom")&&i.text===e;function iv(i,e,t){var n=tv[i];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var r=t.callFunction("\\\\cdleft",[e[0]],[]),s={type:"atom",text:n,mode:"math",family:"rel"},a=t.callFunction("\\Big",[s],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[r,a,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function rv(i){var e=[];for(i.gullet.beginGroup(),i.gullet.macros.set("\\cr","\\\\\\relax"),i.gullet.beginGroup();;){e.push(i.parseExpression(!1,"\\\\")),i.gullet.endGroup(),i.gullet.beginGroup();var t=i.fetch().text;if(t==="&"||t==="\\\\")i.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new oe("Expected \\\\ or \\cr or \\end",i.nextToken)}for(var n=[],r=[n],s=0;s<e.length;s++){for(var a=e[s],o=sh(),l=0;l<a.length;l++)if(!ah(a[l]))o.body.push(a[l]);else{n.push(o),l+=1;var c=Oa(a[l]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(c))if("<>AV".includes(c))for(var d=0;d<2;d++){for(var f=!0,m=l+1;m<a.length;m++){if(nv(a[m],c)){f=!1,l=m;break}if(ah(a[m]))throw new oe("Missing a "+c+" character to complete a CD arrow.",a[m]);h[d].body.push(a[m])}if(f)throw new oe("Missing a "+c+" character to complete a CD arrow.",a[l])}else throw new oe('Expected one of "<>AV=|." after @',a[l]);var _=iv(c,h,i),x={type:"styling",body:[_],mode:"math",style:"display",resetFont:!0};n.push(x),o=sh()}s%2===0?n.push(o):n.shift(),n=[],r.push(n)}i.gullet.endGroup(),i.gullet.endGroup();var g=new Array(r[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:r,arraystretch:1,addJot:!0,rowGaps:[null],cols:g,colSeparationType:"CD",hLinesBeforeRow:new Array(r.length+1).fill([])}}xe({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:e[0]}},htmlBuilder(i,e){var t=e.havingStyle(e.style.sup()),n=Or(ot(i.label,t,e),e);return n.classes.push("cd-label-"+i.side),n.style.bottom=he(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(i,e){var t=new le("mrow",[gt(i.label,e)]);return t=new le("mpadded",[t]),t.setAttribute("width","0"),i.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new le("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});xe({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(i,e){var{parser:t}=i;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(i,e){var t=Or(ot(i.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(i,e){return new le("mrow",[gt(i.fragment,e)])}});xe({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(i,e){for(var{parser:t}=i,n=je(e[0],"ordgroup"),r=n.body,s="",a=0;a<r.length;a++){var o=je(r[a],"textord");s+=o.text}var l=parseInt(s),c;if(isNaN(l))throw new oe("\\@char has non-numeric argument "+s);if(l<0||l>=1114111)throw new oe("\\@char with invalid code point "+s);return l<=65535?c=String.fromCharCode(l):(l-=65536,c=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:t.mode,text:c}}});var Du=(i,e)=>{var t=Gt(i.body,e.withColor(i.color),!1);return li(t)},Lu=(i,e)=>{var t=yn(i.body,e.withColor(i.color)),n=new le("mstyle",t);return n.setAttribute("mathcolor",i.color),n};xe({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(i,e){var{parser:t}=i,n=je(e[0],"color-token").color,r=e[1];return{type:"color",mode:t.mode,color:n,body:Ft(r)}},htmlBuilder:Du,mathmlBuilder:Lu});xe({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(i,e){var{parser:t,breakOnTokenText:n}=i,r=je(e[0],"color-token").color;t.gullet.macros.set("\\current@color",r);var s=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:r,body:s}},htmlBuilder:Du,mathmlBuilder:Lu});xe({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(i,e,t){var{parser:n}=i,r=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,s=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:s,size:r&&je(r,"size").value}},htmlBuilder(i,e){var t=ae(["mspace"],[],e);return i.newLine&&(t.classes.push("newline"),i.size&&(t.style.marginTop=he(At(i.size,e)))),t},mathmlBuilder(i,e){var t=new le("mspace");return i.newLine&&(t.setAttribute("linebreak","newline"),i.size&&t.setAttribute("height",he(At(i.size,e)))),t}});var q0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Iu=i=>{var e=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new oe("Expected a control sequence",i);return e},sv=i=>{var e=i.gullet.popToken();return e.text==="="&&(e=i.gullet.popToken(),e.text===" "&&(e=i.gullet.popToken())),e},Nu=(i,e,t,n)=>{var r=i.gullet.macros.get(t.text);r==null&&(t.noexpand=!0,r={tokens:[t],numArgs:0,unexpandable:!i.gullet.isExpandable(t.text)}),i.gullet.macros.set(e,r,n)};xe({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(i){var{parser:e,funcName:t}=i;e.consumeSpaces();var n=e.fetch();if(q0[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=q0[n.text]),je(e.parseFunction(),"internal");throw new oe("Invalid token after macro prefix",n)}});xe({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=e.gullet.popToken(),r=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(r))throw new oe("Expected a control sequence",n);for(var s=0,a,o=[[]];e.gullet.future().text!=="{";)if(n=e.gullet.popToken(),n.text==="#"){if(e.gullet.future().text==="{"){a=e.gullet.future(),o[s].push("{");break}if(n=e.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new oe('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==s+1)throw new oe('Argument number "'+n.text+'" out of order');s++,o.push([])}else{if(n.text==="EOF")throw new oe("Expected a macro definition");o[s].push(n.text)}var{tokens:l}=e.gullet.consumeArg();return a&&l.unshift(a),(t==="\\edef"||t==="\\xdef")&&(l=e.gullet.expandTokens(l),l.reverse()),e.gullet.macros.set(r,{tokens:l,numArgs:s,delimiters:o},t===q0[t]),{type:"internal",mode:e.mode}}});xe({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=Iu(e.gullet.popToken());e.gullet.consumeSpaces();var r=sv(e);return Nu(e,n,r,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});xe({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=Iu(e.gullet.popToken()),r=e.gullet.popToken(),s=e.gullet.popToken();return Nu(e,n,s,t==="\\\\globalfuture"),e.gullet.pushToken(s),e.gullet.pushToken(r),{type:"internal",mode:e.mode}}});var ts=function(e,t,n){var r=St.math[e]&&St.math[e].replace,s=gl(r||e,t,n);if(!s)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return s},bl=function(e,t,n,r){var s=n.havingBaseStyle(t),a=ae(r.concat(s.sizingClasses(n)),[e],n),o=s.sizeMultiplier/n.sizeMultiplier;return a.height*=o,a.depth*=o,a.maxFontSize=s.sizeMultiplier,a},Uu=function(e,t,n){var r=t.havingBaseStyle(n),s=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=he(s),e.height-=s,e.depth+=s},av=function(e,t,n,r,s,a){var o=tn(e,"Main-Regular",s,r),l=bl(o,t,r,a);return Uu(l,r,t),l},ov=function(e,t,n,r){return tn(e,"Size"+t+"-Regular",n,r)},Fu=function(e,t,n,r,s,a){var o=ov(e,t,s,r),l=bl(ae(["delimsizing","size"+t],[o],r),Xe.TEXT,r,a);return n&&Uu(l,r,Xe.TEXT),l},Fo=function(e,t,n){var r;t==="Size1-Regular"?r="delim-size1":r="delim-size4";var s=ae(["delimsizinginner",r],[ae([],[tn(e,t,n)])]);return{type:"elem",elem:s}},zo=function(e,t,n){var r=On["Size4-Regular"][e.charCodeAt(0)]?On["Size4-Regular"][e.charCodeAt(0)][4]:On["Size1-Regular"][e.charCodeAt(0)][4],s=new Ai("inner",g4(e,Math.round(1e3*t))),a=new si([s],{width:he(r),height:he(t),style:"width:"+he(r),viewBox:"0 0 "+1e3*r+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=Ci([],[a],n);return o.height=t,o.style.height=he(t),o.style.width=he(r),{type:"elem",elem:o}},X0=.008,Js={type:"kern",size:-1*X0},lv=new Set(["|","\\lvert","\\rvert","\\vert"]),cv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),zu=function(e,t,n,r,s,a){var o,l,c,h,d="",f=0;o=c=h=e,l=null;var m="Size1-Regular";e==="\\uparrow"?c=h="⏐":e==="\\Uparrow"?c=h="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",h="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",h="\\Downarrow"):lv.has(e)?(c="∣",d="vert",f=333):cv.has(e)?(c="∥",d="doublevert",f=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",h="⎣",m="Size4-Regular",d="lbrack",f=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",h="⎦",m="Size4-Regular",d="rbrack",f=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",h="⎣",m="Size4-Regular",d="lfloor",f=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=h="⎢",m="Size4-Regular",d="lceil",f=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",h="⎦",m="Size4-Regular",d="rfloor",f=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=h="⎥",m="Size4-Regular",d="rceil",f=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",h="⎝",m="Size4-Regular",d="lparen",f=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",h="⎠",m="Size4-Regular",d="rparen",f=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",h="⎩",c="⎪",m="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",h="⎭",c="⎪",m="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",h="⎩",c="⎪",m="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",h="⎭",c="⎪",m="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",h="⎭",c="⎪",m="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",h="⎩",c="⎪",m="Size4-Regular");var _=ts(o,m,s),x=_.height+_.depth,g=ts(c,m,s),p=g.height+g.depth,b=ts(h,m,s),M=b.height+b.depth,A=0,F=1;if(l!==null){var R=ts(l,m,s);A=R.height+R.depth,F=2}var P=x+M+A,U=Math.max(0,Math.ceil((t-P)/(F*p))),E=P+U*F*p,S=r.fontMetrics().axisHeight;n&&(S*=r.sizeMultiplier);var z=E/2-S,G=[];if(d.length>0){var q=E-x-M,K=Math.round(E*1e3),Z=v4(d,Math.round(q*1e3)),$=new Ai(d,Z),ee=he(f/1e3),j=he(K/1e3),ye=new si([$],{width:ee,height:j,viewBox:"0 0 "+f+" "+K}),ve=Ci([],[ye],r);ve.height=K/1e3,ve.style.width=ee,ve.style.height=j,G.push({type:"elem",elem:ve})}else{if(G.push(Fo(h,m,s)),G.push(Js),l===null){var we=E-x-M+2*X0;G.push(zo(c,we,r))}else{var $e=(E-x-M-A)/2+2*X0;G.push(zo(c,$e,r)),G.push(Js),G.push(Fo(l,m,s)),G.push(Js),G.push(zo(c,$e,r))}G.push(Js),G.push(Fo(o,m,s))}var Ke=r.havingBaseStyle(Xe.TEXT),J=at({positionType:"bottom",positionData:z,children:G});return bl(ae(["delimsizing","mult"],[J],Ke),Xe.TEXT,r,a)},Oo=80,ko=.08,Bo=function(e,t,n,r,s){var a=m4(e,r,n),o=new Ai(e,a),l=new si([o],{width:"400em",height:he(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return Ci(["hide-tail"],[l],s)},hv=function(e,t){var n=t.havingBaseSizing(),r=Vu("\\surd",e*n.sizeMultiplier,Hu,n),s=n.sizeMultiplier,a=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l,c,h,d;return r.type==="small"?(h=1e3+1e3*a+Oo,e<1?s=1:e<1.4&&(s=.7),l=(1+a+ko)/s,c=(1+a)/s,o=Bo("sqrtMain",l,h,a,t),o.style.minWidth="0.853em",d=.833/s):r.type==="large"?(h=(1e3+Oo)*rs[r.size],c=(rs[r.size]+a)/s,l=(rs[r.size]+a+ko)/s,o=Bo("sqrtSize"+r.size,l,h,a,t),o.style.minWidth="1.02em",d=1/s):(l=e+a+ko,c=e+a,h=Math.floor(1e3*e+a)+Oo,o=Bo("sqrtTall",l,h,a,t),o.style.minWidth="0.742em",d=1.056),o.height=c,o.style.height=he(l),{span:o,advanceWidth:d,ruleWidth:(t.fontMetrics().sqrtRuleThickness+a)*s}},Ou=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),uv=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),ku=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),rs=[0,1.2,1.8,2.4,3],Bu=function(e,t,n,r,s){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),Ou.has(e)||ku.has(e))return Fu(e,t,!1,n,r,s);if(uv.has(e))return zu(e,rs[t],!1,n,r,s);throw new oe("Illegal delimiter: '"+e+"'")},dv=[{type:"small",style:Xe.SCRIPTSCRIPT},{type:"small",style:Xe.SCRIPT},{type:"small",style:Xe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],fv=[{type:"small",style:Xe.SCRIPTSCRIPT},{type:"small",style:Xe.SCRIPT},{type:"small",style:Xe.TEXT},{type:"stack"}],Hu=[{type:"small",style:Xe.SCRIPTSCRIPT},{type:"small",style:Xe.SCRIPT},{type:"small",style:Xe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],pv=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";var t=e.type;throw new Error("Add support for delim type '"+t+"' here.")},Vu=function(e,t,n,r){for(var s=Math.min(2,3-r.style.size),a=s;a<n.length;a++){var o=n[a];if(o.type==="stack")break;var l=ts(e,pv(o),"math"),c=l.height+l.depth;if(o.type==="small"){var h=r.havingBaseStyle(o.style);c*=h.sizeMultiplier}if(c>t)return o}return n[n.length-1]},Y0=function(e,t,n,r,s,a){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;ku.has(e)?o=dv:Ou.has(e)?o=Hu:o=fv;var l=Vu(e,t,o,r);return l.type==="small"?av(e,l.style,n,r,s,a):l.type==="large"?Fu(e,l.size,n,r,s,a):zu(e,t,n,r,s,a)},Ho=function(e,t,n,r,s,a){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,l=901,c=5/r.fontMetrics().ptPerEm,h=Math.max(t-o,n+o),d=Math.max(h/500*l,2*h-c);return Y0(e,d,!0,r,s,a)},oh={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},mv=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function lh(i){return"isMiddle"in i}function Ha(i,e){var t=ka(i);if(t&&mv.has(t.text))return t;throw t?new oe("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",i):new oe("Invalid delimiter type '"+i.type+"'",i)}xe({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(i,e)=>{var t=Ha(e[0],i);return{type:"delimsizing",mode:i.parser.mode,size:oh[i.funcName].size,mclass:oh[i.funcName].mclass,delim:t.text}},htmlBuilder:(i,e)=>i.delim==="."?ae([i.mclass]):Bu(i.delim,i.size,e,i.mode,[i.mclass]),mathmlBuilder:i=>{var e=[];i.delim!=="."&&e.push(En(i.delim,i.mode));var t=new le("mo",e);i.mclass==="mopen"||i.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=he(rs[i.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function ch(i){if(!i.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}xe({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=i.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new oe("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:i.parser.mode,delim:Ha(e[0],i).text,color:t}}});xe({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Ha(e[0],i),n=i.parser;++n.leftrightDepth;var r=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var s=je(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:r,left:t.text,right:s.delim,rightColor:s.color}},htmlBuilder:(i,e)=>{ch(i);for(var t=Gt(i.body,e,!0,["mopen","mclose"]),n=0,r=0,s=!1,a=0;a<t.length;a++){var o=t[a];lh(o)?s=!0:(n=Math.max(t[a].height,n),r=Math.max(t[a].depth,r))}n*=e.sizeMultiplier,r*=e.sizeMultiplier;var l;if(i.left==="."?l=ls(e,["mopen"]):l=Ho(i.left,n,r,e,i.mode,["mopen"]),t.unshift(l),s)for(var c=1;c<t.length;c++){var h=t[c];if(lh(h)){var d=h.isMiddle;t[c]=Ho(d.delim,n,r,d.options,i.mode,[])}}var f;if(i.right===".")f=ls(e,["mclose"]);else{var m=i.rightColor?e.withColor(i.rightColor):e;f=Ho(i.right,n,r,m,i.mode,["mclose"])}return t.push(f),ae(["minner"],t,e)},mathmlBuilder:(i,e)=>{ch(i);var t=yn(i.body,e);if(i.left!=="."){var n=new le("mo",[En(i.left,i.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(i.right!=="."){var r=new le("mo",[En(i.right,i.mode)]);r.setAttribute("fence","true"),i.rightColor&&r.setAttribute("mathcolor",i.rightColor),t.push(r)}return _l(t)}});xe({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Ha(e[0],i);if(!i.parser.leftrightDepth)throw new oe("\\middle without preceding \\left",t);return{type:"middle",mode:i.parser.mode,delim:t.text}},htmlBuilder:(i,e)=>{var t;return i.delim==="."?t=ls(e,[]):(t=Bu(i.delim,1,e,i.mode,[]),t.isMiddle={delim:i.delim,options:e}),t},mathmlBuilder:(i,e)=>{var t=i.delim==="\\vert"||i.delim==="|"?En("|","text"):En(i.delim,i.mode),n=new le("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var Va=(i,e)=>{var t=Or(ot(i.body,e),e),n=i.label.slice(1),r=e.sizeMultiplier,s,a,o=ai(i.body);if(n==="sout")s=ae(["stretchy","sout"]),s.height=e.fontMetrics().defaultRuleThickness/r,a=-.5*e.fontMetrics().xHeight;else if(n==="phase"){var l=At({number:.6,unit:"pt"},e),c=At({number:.35,unit:"ex"},e),h=e.havingBaseSizing();r=r/h.sizeMultiplier;var d=t.height+t.depth+l+c;t.style.paddingLeft=he(d/2+l);var f=Math.floor(1e3*d*r),m=f4(f),_=new si([new Ai("phase",m)],{width:"400em",height:he(f/1e3),viewBox:"0 0 400000 "+f,preserveAspectRatio:"xMinYMin slice"});s=Ci(["hide-tail"],[_],e),s.style.height=he(d),a=t.depth+l+c}else{/cancel/.test(n)?o||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var x,g,p=0;/box/.test(n)?(p=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),x=e.fontMetrics().fboxsep+(n==="colorbox"?0:p),g=x):n==="angl"?(p=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),x=4*p,g=Math.max(0,.25-t.depth)):(x=o?.2:0,g=x),s=K4(t,n,x,g,e),/fbox|boxed|fcolorbox/.test(n)?(s.style.borderStyle="solid",s.style.borderWidth=he(p)):n==="angl"&&p!==.049&&(s.style.borderTopWidth=he(p),s.style.borderRightWidth=he(p)),a=t.depth+g,i.backgroundColor&&(s.style.backgroundColor=i.backgroundColor,i.borderColor&&(s.style.borderColor=i.borderColor))}var b;if(i.backgroundColor)b=at({positionType:"individualShift",children:[{type:"elem",elem:s,shift:a},{type:"elem",elem:t,shift:0}]});else{var M=/cancel|phase/.test(n)?["svg-align"]:[];b=at({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:s,shift:a,wrapperClasses:M}]})}return/cancel/.test(n)&&(b.height=t.height,b.depth=t.depth),/cancel/.test(n)&&!o?ae(["mord","cancel-lap"],[b],e):ae(["mord"],[b],e)},Ga=(i,e)=>{var t,n=new le(i.label.includes("colorbox")?"mpadded":"menclose",[gt(i.body,e)]);switch(i.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),i.label==="\\fcolorbox"){var r=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);n.setAttribute("style","border: "+he(r)+" solid "+i.borderColor)}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return i.backgroundColor&&n.setAttribute("mathbackground",i.backgroundColor),n};xe({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","hbox"]},handler(i,e,t){var{parser:n,funcName:r}=i,s=je(e[0],"color-token").color,a=e[1];return{type:"enclose",mode:n.mode,label:r,backgroundColor:s,body:a}},htmlBuilder:Va,mathmlBuilder:Ga});xe({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"]},handler(i,e,t){var{parser:n,funcName:r}=i,s=je(e[0],"color-token").color,a=je(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:n.mode,label:r,backgroundColor:a,borderColor:s,body:o}},htmlBuilder:Va,mathmlBuilder:Ga});xe({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});xe({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"enclose",mode:t.mode,label:n,body:r}},htmlBuilder:Va,mathmlBuilder:Ga});xe({type:"enclose",names:["\\sout"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i;t.mode==="math"&&t.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var r=e[0];return{type:"enclose",mode:t.mode,label:n,body:r}},htmlBuilder:Va,mathmlBuilder:Ga});xe({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var Gu={};function Hn(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:s,mathmlBuilder:a}=i,o={type:e,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:r},l=0;l<t.length;++l)Gu[t[l]]=o;s&&(wa[e]=s),a&&(Ea[e]=a)}var Wu={};function T(i,e){Wu[i]=e}class ln{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new ln(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class vn{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new vn(t,ln.range(this,e))}}function hh(i){var e=[];i.consumeSpaces();var t=i.fetch().text;for(t==="\\relax"&&(i.consume(),i.consumeSpaces(),t=i.fetch().text);t==="\\hline"||t==="\\hdashline";)i.consume(),e.push(t==="\\hdashline"),i.consumeSpaces(),t=i.fetch().text;return e}var Wa=i=>{var e=i.parser.settings;if(!e.displayMode)throw new oe("{"+i.envName+"} can be used only in display mode.")},gv=new Set(["gather","gather*"]);function Sl(i){if(!i.includes("ed"))return!i.includes("*")}function Di(i,e,t){var{hskipBeforeAndAfter:n,addJot:r,cols:s,arraystretch:a,colSeparationType:o,autoTag:l,singleRow:c,emptySingleRow:h,maxNumCols:d,leqno:f}=e;if(i.gullet.beginGroup(),c||i.gullet.macros.set("\\cr","\\\\\\relax"),!a){var m=i.gullet.expandMacroAsText("\\arraystretch");if(m==null)a=1;else if(a=parseFloat(m),!a||a<0)throw new oe("Invalid \\arraystretch: "+m)}i.gullet.beginGroup();var _=[],x=[_],g=[],p=[],b=l!=null?[]:void 0;function M(){l&&i.gullet.macros.set("\\@eqnsw","1",!0)}function A(){b&&(i.gullet.macros.get("\\df@tag")?(b.push(i.subparse([new vn("\\df@tag")])),i.gullet.macros.set("\\df@tag",void 0,!0)):b.push(!!l&&i.gullet.macros.get("\\@eqnsw")==="1"))}for(M(),p.push(hh(i));;){var F=i.parseExpression(!1,c?"\\end":"\\\\");i.gullet.endGroup(),i.gullet.beginGroup();var R={type:"ordgroup",mode:i.mode,body:F};t&&(R={type:"styling",mode:i.mode,style:t,resetFont:!0,body:[R]}),_.push(R);var P=i.fetch().text;if(P==="&"){if(d&&_.length===d){if(c||o)throw new oe("Too many tab characters: &",i.nextToken);i.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}i.consume()}else if(P==="\\end"){A(),_.length===1&&R.type==="styling"&&R.body.length===1&&R.body[0].type==="ordgroup"&&R.body[0].body.length===0&&(x.length>1||!h)&&x.pop(),p.length<x.length+1&&p.push([]);break}else if(P==="\\\\"){i.consume();var U=void 0;i.gullet.future().text!==" "&&(U=i.parseSizeGroup(!0)),g.push(U?U.value:null),A(),p.push(hh(i)),_=[],x.push(_),M()}else throw new oe("Expected & or \\\\ or \\cr or \\end",i.nextToken)}return i.gullet.endGroup(),i.gullet.endGroup(),{type:"array",mode:i.mode,addJot:r,arraystretch:a,body:x,cols:s,rowGaps:g,hskipBeforeAndAfter:n,hLinesBeforeRow:p,colSeparationType:o,tags:b,leqno:f}}function wl(i){return i.slice(0,1)==="d"?"display":"text"}var Vn=function(e,t){var n,r,s=e.body.length,a=e.hLinesBeforeRow,o=0,l=new Array(s),c=[],h=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),d=1/t.fontMetrics().ptPerEm,f=5*d;if(e.colSeparationType&&e.colSeparationType==="small"){var m=t.havingStyle(Xe.SCRIPT).sizeMultiplier;f=.2778*(m/t.sizeMultiplier)}var _=e.colSeparationType==="CD"?At({number:3,unit:"ex"},t):12*d,x=3*d,g=e.arraystretch*_,p=.7*g,b=.3*g,M=0;function A(Me){for(var We=0;We<Me.length;++We)We>0&&(M+=.25),c.push({pos:M,isDashed:Me[We]})}for(A(a[0]),n=0;n<e.body.length;++n){var F=e.body[n],R=p,P=b;o<F.length&&(o=F.length);var U={cells:new Array(F.length),height:0,depth:0,pos:0};for(r=0;r<F.length;++r){var E=ot(F[r],t);P<E.depth&&(P=E.depth),R<E.height&&(R=E.height),U.cells[r]=E}var S=e.rowGaps[n],z=0;S&&(z=At(S,t),z>0&&(z+=b,P<z&&(P=z),z=0)),e.addJot&&n<e.body.length-1&&(P+=x),U.height=R,U.depth=P,M+=R,U.pos=M,M+=P+z,l[n]=U,A(a[n+1])}var G=M/2+t.fontMetrics().axisHeight,q=e.cols||[],K=[],Z,$,ee=[];if(e.tags&&e.tags.some(Me=>Me))for(n=0;n<s;++n){var j=l[n],ye=j.pos-G,ve=e.tags[n],we=void 0;ve===!0?we=ae(["eqn-num"],[],t):ve===!1?we=ae([],[],t):we=ae([],Gt(ve,t,!0),t),we.depth=j.depth,we.height=j.height,ee.push({type:"elem",elem:we,shift:ye})}for(r=0,$=0;r<o||$<q.length;++r,++$){for(var $e,Ke=q[$],J=!0;((ce=Ke)==null?void 0:ce.type)==="separator";){var ce;if(J||(Z=ae(["arraycolsep"],[]),Z.style.width=he(t.fontMetrics().doubleRuleSep),K.push(Z)),Ke.separator==="|"||Ke.separator===":"){var Ae=Ke.separator==="|"?"solid":"dashed",_e=ae(["vertical-separator"],[],t);_e.style.height=he(M),_e.style.borderRightWidth=he(h),_e.style.borderRightStyle=Ae,_e.style.margin="0 "+he(-h/2);var Fe=M-G;Fe&&(_e.style.verticalAlign=he(-Fe)),K.push(_e)}else throw new oe("Invalid separator type: "+Ke.separator);$++,Ke=q[$],J=!1}if(!(r>=o)){var ze=void 0;if(r>0||e.hskipBeforeAndAfter){var Qe,vt;ze=(Qe=(vt=Ke)==null?void 0:vt.pregap)!=null?Qe:f,ze!==0&&(Z=ae(["arraycolsep"],[]),Z.style.width=he(ze),K.push(Z))}var O=[];for(n=0;n<s;++n){var xt=l[n],it=xt.cells[r];if(it){var lt=xt.pos-G;it.depth=xt.depth,it.height=xt.height,O.push({type:"elem",elem:it,shift:lt})}}var De=at({positionType:"individualShift",children:O}),Ct=ae(["col-align-"+((($e=Ke)==null?void 0:$e.align)||"c")],[De]);if(K.push(Ct),r<o-1||e.hskipBeforeAndAfter){var ke,Ge;ze=(ke=(Ge=Ke)==null?void 0:Ge.postgap)!=null?ke:f,ze!==0&&(Z=ae(["arraycolsep"],[]),Z.style.width=he(ze),K.push(Z))}}}var I=ae(["mtable"],K);if(c.length>0){for(var w=zr("hline",t,h),Y=zr("hdashline",t,h),te=[{type:"elem",elem:I,shift:0}];c.length>0;){var se=c.pop(),ie=se.pos-G;se.isDashed?te.push({type:"elem",elem:Y,shift:ie}):te.push({type:"elem",elem:w,shift:ie})}I=at({positionType:"individualShift",children:te})}if(ee.length===0)return ae(["mord"],[I],t);var Ie=at({positionType:"individualShift",children:ee}),ge=ae(["tag"],[Ie],t);return li([I,ge])},vv={c:"center ",l:"left ",r:"right "},Gn=function(e,t){for(var n=[],r=new le("mtd",[],["mtr-glue"]),s=new le("mtd",[],["mml-eqn-num"]),a=0;a<e.body.length;a++){for(var o=e.body[a],l=[],c=0;c<o.length;c++)l.push(new le("mtd",[gt(o[c],t)]));e.tags&&e.tags[a]&&(l.unshift(r),l.push(r),e.leqno?l.unshift(s):l.push(s)),n.push(new le("mtr",l))}var h=new le("mtable",n),d=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);h.setAttribute("rowspacing",he(d));var f="",m="";if(e.cols&&e.cols.length>0){var _=e.cols,x="",g=!1,p=0,b=_.length;_[0].type==="separator"&&(f+="top ",p=1),_[_.length-1].type==="separator"&&(f+="bottom ",b-=1);for(var M=p;M<b;M++){var A=_[M];A.type==="align"?(m+=vv[A.align],g&&(x+="none "),g=!0):A.type==="separator"&&g&&(x+=A.separator==="|"?"solid ":"dashed ",g=!1)}h.setAttribute("columnalign",m.trim()),/[sd]/.test(x)&&h.setAttribute("columnlines",x.trim())}if(e.colSeparationType==="align"){for(var F=e.cols||[],R="",P=1;P<F.length;P++)R+=P%2?"0em ":"1em ";h.setAttribute("columnspacing",R.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var U="",E=e.hLinesBeforeRow;f+=E[0].length>0?"left ":"",f+=E[E.length-1].length>0?"right ":"";for(var S=1;S<E.length-1;S++)U+=E[S].length===0?"none ":E[S][0]?"dashed ":"solid ";return/[sd]/.test(U)&&h.setAttribute("rowlines",U.trim()),f!==""&&(h=new le("menclose",[h]),h.setAttribute("notation",f.trim())),e.arraystretch&&e.arraystretch<1&&(h=new le("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},qu=function(e,t){e.envName.includes("ed")||Wa(e);var n=[],r=e.envName.includes("at")?"alignat":"align",s=e.envName==="split",a=Di(e.parser,{cols:n,addJot:!0,autoTag:s?void 0:Sl(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:s?2:void 0,leqno:e.parser.settings.leqno},"display"),o=0,l=0,c={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var h="",d=0;d<t[0].body.length;d++){var f=je(t[0].body[d],"textord");h+=f.text}o=Number(h),l=o*2}var m=!l;a.body.forEach(function(p){for(var b=1;b<p.length;b+=2){var M=je(p[b],"styling"),A=je(M.body[0],"ordgroup");A.body.unshift(c)}if(m)l<p.length&&(l=p.length);else{var F=p.length/2;if(o<F)throw new oe("Too many math in a row: "+("expected "+o+", but got "+F),p[0])}});for(var _=0;_<l;++_){var x="r",g=0;_%2===1?x="l":_>0&&m&&(g=1),n[_]={type:"align",align:x,pregap:g,postgap:0}}return a.colSeparationType=m?"align":"alignat",a};Hn({type:"array",names:["array","darray"],props:{numArgs:1},handler(i,e){var t=ka(e[0]),n=t?[e[0]]:je(e[0],"ordgroup").body,r=n.map(function(a){var o=Oa(a),l=o.text;if("lcr".includes(l))return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new oe("Unknown column alignment: "+l,a)}),s={cols:r,hskipBeforeAndAfter:!0,maxNumCols:r.length};return Di(i.parser,s,wl(i.envName))},htmlBuilder:Vn,mathmlBuilder:Gn});Hn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(i){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(i.envName.charAt(i.envName.length-1)==="*"){var r=i.parser;if(r.consumeSpaces(),r.fetch().text==="["){if(r.consume(),r.consumeSpaces(),t=r.fetch().text,!"lcr".includes(t))throw new oe("Expected l or c or r",r.nextToken);r.consume(),r.consumeSpaces(),r.expect("]"),r.consume(),n.cols=[{type:"align",align:t}]}}var s=Di(i.parser,n,wl(i.envName)),a=Math.max(0,...s.body.map(o=>o.length));return s.cols=new Array(a).fill({type:"align",align:t}),e?{type:"leftright",mode:i.mode,body:[s],left:e[0],right:e[1],rightColor:void 0}:s},htmlBuilder:Vn,mathmlBuilder:Gn});Hn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(i){var e={arraystretch:.5},t=Di(i.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:Vn,mathmlBuilder:Gn});Hn({type:"array",names:["subarray"],props:{numArgs:1},handler(i,e){var t=ka(e[0]),n=t?[e[0]]:je(e[0],"ordgroup").body,r=n.map(function(o){var l=Oa(o),c=l.text;if("lc".includes(c))return{type:"align",align:c};throw new oe("Unknown column alignment: "+c,o)});if(r.length>1)throw new oe("{subarray} can contain only one column");var s={cols:r,hskipBeforeAndAfter:!1,arraystretch:.5},a=Di(i.parser,s,"script");if(a.body.length>0&&a.body[0].length>1)throw new oe("{subarray} can contain only one column");return a},htmlBuilder:Vn,mathmlBuilder:Gn});Hn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(i){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=Di(i.parser,e,wl(i.envName));return{type:"leftright",mode:i.mode,body:[t],left:i.envName.includes("r")?".":"\\{",right:i.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Vn,mathmlBuilder:Gn});Hn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:qu,htmlBuilder:Vn,mathmlBuilder:Gn});Hn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(i){gv.has(i.envName)&&Wa(i);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Sl(i.envName),emptySingleRow:!0,leqno:i.parser.settings.leqno};return Di(i.parser,e,"display")},htmlBuilder:Vn,mathmlBuilder:Gn});Hn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:qu,htmlBuilder:Vn,mathmlBuilder:Gn});Hn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(i){Wa(i);var e={autoTag:Sl(i.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:i.parser.settings.leqno};return Di(i.parser,e,"display")},htmlBuilder:Vn,mathmlBuilder:Gn});Hn({type:"array",names:["CD"],props:{numArgs:0},handler(i){return Wa(i),rv(i.parser)},htmlBuilder:Vn,mathmlBuilder:Gn});T("\\nonumber","\\gdef\\@eqnsw{0}");T("\\notag","\\nonumber");xe({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(i,e){throw new oe(i.funcName+" valid only within array environment")}});var uh=Gu;xe({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];if(r.type!=="ordgroup")throw new oe("Invalid environment name",r);for(var s="",a=0;a<r.body.length;++a)s+=je(r.body[a],"textord").text;if(n==="\\begin"){if(!uh.hasOwnProperty(s))throw new oe("No such environment: "+s,r);var o=uh[s],{args:l,optArgs:c}=t.parseArguments("\\begin{"+s+"}",o),h={mode:t.mode,envName:s,parser:t},d=o.handler(h,l,c);t.expect("\\end",!1);var f=t.nextToken,m=je(t.parseFunction(),"environment");if(m.name!==s)throw new oe("Mismatch: \\begin{"+s+"} matched by \\end{"+m.name+"}",f);return d}return{type:"environment",mode:t.mode,name:s,nameGroup:r}}});var Xu=(i,e)=>{var t=i.font,n=e.withFont(t);return ot(i.body,n)},Yu=(i,e)=>{var t=i.font,n=e.withFont(t);return gt(i.body,n)},dh={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};xe({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=Ta(e[0]),s=n;return s in dh&&(s=dh[s]),{type:"font",mode:t.mode,font:s.slice(1),body:r}},htmlBuilder:Xu,mathmlBuilder:Yu});xe({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"mclass",mode:t.mode,mclass:Ba(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:ai(n)}}});xe({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,breakOnTokenText:r}=i,{mode:s}=t,a=t.parseExpression(!0,r);return{type:"font",mode:s,font:"math"+n.slice(1),body:{type:"ordgroup",mode:t.mode,body:a}}},htmlBuilder:Xu,mathmlBuilder:Yu});var xv=(i,e)=>{var t=e.style,n=t.fracNum(),r=t.fracDen(),s;s=e.havingStyle(n);var a=ot(i.numer,s,e);if(i.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;a.height=a.height<o?o:a.height,a.depth=a.depth<l?l:a.depth}s=e.havingStyle(r);var c=ot(i.denom,s,e),h,d,f;i.hasBarLine?(i.barSize?(d=At(i.barSize,e),h=zr("frac-line",e,d)):h=zr("frac-line",e),d=h.height,f=h.height):(h=null,d=0,f=e.fontMetrics().defaultRuleThickness);var m,_,x;t.size===Xe.DISPLAY.size?(m=e.fontMetrics().num1,d>0?_=3*f:_=7*f,x=e.fontMetrics().denom1):(d>0?(m=e.fontMetrics().num2,_=f):(m=e.fontMetrics().num3,_=3*f),x=e.fontMetrics().denom2);var g;if(h){var b=e.fontMetrics().axisHeight;m-a.depth-(b+.5*d)<_&&(m+=_-(m-a.depth-(b+.5*d))),b-.5*d-(c.height-x)<_&&(x+=_-(b-.5*d-(c.height-x)));var M=-(b-.5*d);g=at({positionType:"individualShift",children:[{type:"elem",elem:c,shift:x},{type:"elem",elem:h,shift:M},{type:"elem",elem:a,shift:-m}]})}else{var p=m-a.depth-(c.height-x);p<_&&(m+=.5*(_-p),x+=.5*(_-p)),g=at({positionType:"individualShift",children:[{type:"elem",elem:c,shift:x},{type:"elem",elem:a,shift:-m}]})}s=e.havingStyle(t),g.height*=s.sizeMultiplier/e.sizeMultiplier,g.depth*=s.sizeMultiplier/e.sizeMultiplier;var A;t.size===Xe.DISPLAY.size?A=e.fontMetrics().delim1:t.size===Xe.SCRIPTSCRIPT.size?A=e.havingStyle(Xe.SCRIPT).fontMetrics().delim2:A=e.fontMetrics().delim2;var F,R;return i.leftDelim==null?F=ls(e,["mopen"]):F=Y0(i.leftDelim,A,!0,e.havingStyle(t),i.mode,["mopen"]),i.continued?R=ae([]):i.rightDelim==null?R=ls(e,["mclose"]):R=Y0(i.rightDelim,A,!0,e.havingStyle(t),i.mode,["mclose"]),ae(["mord"].concat(s.sizingClasses(e)),[F,ae(["mfrac"],[g]),R],e)},_v=(i,e)=>{var t=new le("mfrac",[gt(i.numer,e),gt(i.denom,e)]);if(!i.hasBarLine)t.setAttribute("linethickness","0px");else if(i.barSize){var n=At(i.barSize,e);t.setAttribute("linethickness",he(n))}if(i.leftDelim!=null||i.rightDelim!=null){var r=[];if(i.leftDelim!=null){var s=new le("mo",[new zt(i.leftDelim.replace("\\",""))]);s.setAttribute("fence","true"),r.push(s)}if(r.push(t),i.rightDelim!=null){var a=new le("mo",[new zt(i.rightDelim.replace("\\",""))]);a.setAttribute("fence","true"),r.push(a)}return _l(r)}return t},ju=(i,e)=>{if(!e)return i;var t={type:"styling",mode:i.mode,style:e,body:[i]};return t};xe({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],s=e[1],a,o=null,l=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":a=!0;break;case"\\\\atopfrac":a=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":a=!1,o="(",l=")";break;case"\\\\bracefrac":a=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":a=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}var c=n==="\\cfrac",h=null;return c||n.startsWith("\\d")?h="display":n.startsWith("\\t")&&(h="text"),ju({type:"genfrac",mode:t.mode,numer:r,denom:s,continued:c,hasBarLine:a,leftDelim:o,rightDelim:l,barSize:null},h)},htmlBuilder:xv,mathmlBuilder:_v});xe({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(i){var{parser:e,funcName:t,token:n}=i,r;switch(t){case"\\over":r="\\frac";break;case"\\choose":r="\\binom";break;case"\\atop":r="\\\\atopfrac";break;case"\\brace":r="\\\\bracefrac";break;case"\\brack":r="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:r,token:n}}});var fh=["display","text","script","scriptscript"],ph=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};xe({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(i,e){var{parser:t}=i,n=e[4],r=e[5],s=Ta(e[0]),a=s.type==="atom"&&s.family==="open"?ph(s.text):null,o=Ta(e[1]),l=o.type==="atom"&&o.family==="close"?ph(o.text):null,c=je(e[2],"size"),h,d=null;c.isBlank?h=!0:(d=c.value,h=d.number>0);var f=null,m=e[3];if(m.type==="ordgroup"){if(m.body.length>0){var _=je(m.body[0],"textord");f=fh[Number(_.text)]}}else m=je(m,"textord"),f=fh[Number(m.text)];return ju({type:"genfrac",mode:t.mode,numer:n,denom:r,continued:!1,hasBarLine:h,barSize:d,leftDelim:a,rightDelim:l},f)}});xe({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(i,e){var{parser:t,funcName:n,token:r}=i;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:je(e[0],"size").value,token:r}}});xe({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],s=je(e[1],"infix").size;if(!s)throw new Error("\\\\abovefrac expected size, but got "+String(s));var a=e[2],o=s.number>0;return{type:"genfrac",mode:t.mode,numer:r,denom:a,continued:!1,hasBarLine:o,barSize:s,leftDelim:null,rightDelim:null}}});var $u=(i,e)=>{var t=e.style,n,r;i.type==="supsub"?(n=i.sup?ot(i.sup,e.havingStyle(t.sup()),e):ot(i.sub,e.havingStyle(t.sub()),e),r=je(i.base,"horizBrace")):r=je(i,"horizBrace");var s=ot(r.base,e.havingBaseStyle(Xe.DISPLAY)),a=za(r,e),o;if(r.isOver?o=at({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:a,wrapperClasses:["svg-align"]}]}):o=at({positionType:"bottom",positionData:s.depth+.1+a.height,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:s}]}),n){var l=ae(["minner",r.isOver?"mover":"munder"],[o],e);r.isOver?o=at({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]}):o=at({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]})}return ae(["minner",r.isOver?"mover":"munder"],[o],e)},yv=(i,e)=>{var t=Fa(i.label);return new le(i.isOver?"mover":"munder",[gt(i.base,e),t])};xe({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"horizBrace",mode:t.mode,label:n,isOver:n.includes("\\over"),base:e[0]}},htmlBuilder:$u,mathmlBuilder:yv});xe({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[1],r=je(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:r})?{type:"href",mode:t.mode,href:r,body:Ft(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(i,e)=>{var t=Gt(i.body,e,!1);return I4(i.href,[],t,e)},mathmlBuilder:(i,e)=>{var t=Ri(i.body,e);return t instanceof le||(t=new le("mrow",[t])),t.setAttribute("href",i.href),t}});xe({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=je(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var r=[],s=0;s<n.length;s++){var a=n[s];a==="~"&&(a="\\textasciitilde"),r.push({type:"textord",mode:"text",text:a})}var o={type:"text",mode:t.mode,font:"\\texttt",body:r};return{type:"href",mode:t.mode,href:n,body:Ft(o)}}});xe({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(i,e){var{parser:t}=i;return{type:"hbox",mode:t.mode,body:Ft(e[0])}},htmlBuilder(i,e){var t=Gt(i.body,e.withFont(""),!1);return li(t)},mathmlBuilder(i,e){return new le("mrow",yn(i.body,e.withFont("")))}});xe({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,token:r}=i,s=je(e[0],"raw").string,a=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(n){case"\\htmlClass":l.class=s,o={command:"\\htmlClass",class:s};break;case"\\htmlId":l.id=s,o={command:"\\htmlId",id:s};break;case"\\htmlStyle":l.style=s,o={command:"\\htmlStyle",style:s};break;case"\\htmlData":{for(var c=s.split(","),h=0;h<c.length;h++){var d=c[h],f=d.indexOf("=");if(f<0)throw new oe("\\htmlData key/value '"+d+"' missing equals sign");var m=d.slice(0,f),_=d.slice(f+1);l["data-"+m.trim()]=_}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(o)?{type:"html",mode:t.mode,attributes:l,body:Ft(a)}:t.formatUnsupportedCmd(n)},htmlBuilder:(i,e)=>{var t=Gt(i.body,e,!1),n=["enclosing"];i.attributes.class&&n.push(...i.attributes.class.trim().split(/\s+/));var r=ae(n,t,e);for(var s in i.attributes)s!=="class"&&i.attributes.hasOwnProperty(s)&&r.setAttribute(s,i.attributes[s]);return r},mathmlBuilder:(i,e)=>Ri(i.body,e)});xe({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"htmlmathml",mode:t.mode,html:Ft(e[0]),mathml:Ft(e[1])}},htmlBuilder:(i,e)=>{var t=Gt(i.html,e,!1);return li(t)},mathmlBuilder:(i,e)=>Ri(i.mathml,e)});var Vo=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new oe("Invalid size: '"+e+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!du(n))throw new oe("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};xe({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(i,e,t)=>{var{parser:n}=i,r={number:0,unit:"em"},s={number:.9,unit:"em"},a={number:0,unit:"em"},o="";if(t[0])for(var l=je(t[0],"raw").string,c=l.split(","),h=0;h<c.length;h++){var d=c[h].split("=");if(d.length===2){var f=d[1].trim();switch(d[0].trim()){case"alt":o=f;break;case"width":r=Vo(f);break;case"height":s=Vo(f);break;case"totalheight":a=Vo(f);break;default:throw new oe("Invalid key: '"+d[0]+"' in \\includegraphics.")}}}var m=je(e[0],"url").url;return o===""&&(o=m,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:m})?{type:"includegraphics",mode:n.mode,alt:o,width:r,height:s,totalheight:a,src:m}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(i,e)=>{var t=At(i.height,e),n=0;i.totalheight.number>0&&(n=At(i.totalheight,e)-t);var r=0;i.width.number>0&&(r=At(i.width,e));var s={height:he(t+n)};r>0&&(s.width=he(r)),n>0&&(s.verticalAlign=he(-n));var a=new M4(i.src,i.alt,s);return a.height=t,a.depth=n,a},mathmlBuilder:(i,e)=>{var t=new le("mglyph",[]);t.setAttribute("alt",i.alt);var n=At(i.height,e),r=0;if(i.totalheight.number>0&&(r=At(i.totalheight,e)-n,t.setAttribute("valign",he(-r))),t.setAttribute("height",he(n+r)),i.width.number>0){var s=At(i.width,e);t.setAttribute("width",he(s))}return t.setAttribute("src",i.src),t}});xe({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=je(e[0],"size");if(t.settings.strict){var s=n[1]==="m",a=r.value.unit==="mu";s?(a||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+r.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):a&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:r.value}},htmlBuilder(i,e){return xu(i.dimension,e)},mathmlBuilder(i,e){var t=At(i.dimension,e);return new wu(t)}});xe({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:r}},htmlBuilder:(i,e)=>{var t;i.alignment==="clap"?(t=ae([],[ot(i.body,e)]),t=ae(["inner"],[t],e)):t=ae(["inner"],[ot(i.body,e)]);var n=ae(["fix"],[]),r=ae([i.alignment],[t,n],e),s=ae(["strut"]);return s.style.height=he(r.height+r.depth),r.depth&&(s.style.verticalAlign=he(-r.depth)),r.children.unshift(s),r=ae(["thinbox"],[r],e),ae(["mord","vbox"],[r],e)},mathmlBuilder:(i,e)=>{var t=new le("mpadded",[gt(i.body,e)]);if(i.alignment!=="rlap"){var n=i.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});xe({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){var{funcName:t,parser:n}=i,r=n.mode;n.switchMode("math");var s=t==="\\("?"\\)":"$",a=n.parseExpression(!1,s);return n.expect(s),n.switchMode(r),{type:"styling",mode:n.mode,style:"text",resetFont:!0,body:a}}});xe({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){throw new oe("Mismatched "+i.funcName)}});var mh=(i,e)=>{switch(e.style.size){case Xe.DISPLAY.size:return i.display;case Xe.TEXT.size:return i.text;case Xe.SCRIPT.size:return i.script;case Xe.SCRIPTSCRIPT.size:return i.scriptscript;default:return i.text}};xe({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"mathchoice",mode:t.mode,display:Ft(e[0]),text:Ft(e[1]),script:Ft(e[2]),scriptscript:Ft(e[3])}},htmlBuilder:(i,e)=>{var t=mh(i,e),n=Gt(t,e,!1);return li(n)},mathmlBuilder:(i,e)=>{var t=mh(i,e);return Ri(t,e)}});var Ku=(i,e,t,n,r,s,a)=>{i=ae([],[i]);var o=t&&ai(t),l,c;if(e){var h=ot(e,n.havingStyle(r.sup()),n);c={elem:h,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-h.depth)}}if(t){var d=ot(t,n.havingStyle(r.sub()),n);l={elem:d,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-d.height)}}var f;if(c&&l){var m=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+i.depth+a;f=at({positionType:"bottom",positionData:m,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:he(-s)},{type:"kern",size:l.kern},{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:he(s)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(l){var _=i.height-a;f=at({positionType:"top",positionData:_,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:he(-s)},{type:"kern",size:l.kern},{type:"elem",elem:i}]})}else if(c){var x=i.depth+a;f=at({positionType:"bottom",positionData:x,children:[{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:he(s)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return i;var g=[f];if(l&&s!==0&&!o){var p=ae(["mspace"],[],n);p.style.marginRight=he(s),g.unshift(p)}return ae(["mop","op-limits"],g,n)},Zu=new Set(["\\smallint"]),qr=(i,e)=>{var t,n,r=!1,s;i.type==="supsub"?(t=i.sup,n=i.sub,s=je(i.base,"op"),r=!0):s=je(i,"op");var a=e.style,o=!1;a.size===Xe.DISPLAY.size&&s.symbol&&!Zu.has(s.name)&&(o=!0);var l,c;if(s.symbol){var h=o?"Size2-Regular":"Size1-Regular",d="";if((s.name==="\\oiint"||s.name==="\\oiiint")&&(d=s.name.slice(1),s.name=d==="oiint"?"\\iint":"\\iiint"),l=tn(s.name,h,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),c=l.italic,d.length>0){var f=yu(d+"Size"+(o?"2":"1"),e);l=at({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:f,shift:o?.08:0}]}),s.name="\\"+d,l.classes.unshift("mop"),l.italic=c}}else if(s.body){var m=Gt(s.body,e,!0);m.length===1&&m[0]instanceof xn?(l=m[0],l.classes[0]="mop"):l=ae(["mop"],m,e)}else{for(var _=[],x=1;x<s.name.length;x++)_.push(vl(s.name[x],s.mode,e));l=ae(["mop"],_,e)}var g=0,p=0;if((l instanceof xn||s.name==="\\oiint"||s.name==="\\oiiint")&&!s.suppressBaseShift){var b;g=(l.height-l.depth)/2-e.fontMetrics().axisHeight,p=(b=l.italic)!=null?b:0}return r?Ku(l,t,n,e,a,p,g):(g&&(l.style.position="relative",l.style.top=he(g)),l)},ps=(i,e)=>{var t;if(i.symbol)t=new le("mo",[En(i.name,i.mode)]),Zu.has(i.name)&&t.setAttribute("largeop","false");else if(i.body)t=new le("mo",yn(i.body,e));else{t=new le("mi",[new zt(i.name.slice(1))]);var n=new le("mo",[En("⁡","text")]);i.parentIsSupSub?t=new le("mrow",[t,n]):t=Su([t,n])}return t},Mv={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};xe({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=n;return r.length===1&&(r=Mv[r]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:qr,mathmlBuilder:ps});xe({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Ft(n)}},htmlBuilder:qr,mathmlBuilder:ps});var bv={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};xe({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:qr,mathmlBuilder:ps});xe({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:qr,mathmlBuilder:ps});xe({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(i){var{parser:e,funcName:t}=i,n=t;return n.length===1&&(n=bv[n]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:qr,mathmlBuilder:ps});var Ju=(i,e)=>{var t,n,r=!1,s;i.type==="supsub"?(t=i.sup,n=i.sub,s=je(i.base,"operatorname"),r=!0):s=je(i,"operatorname");var a;if(s.body.length>0){for(var o=s.body.map(d=>{var f="text"in d?d.text:void 0;return typeof f=="string"?{type:"textord",mode:d.mode,text:f}:d}),l=Gt(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var h=l[c];h instanceof xn&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}a=ae(["mop"],l,e)}else a=ae(["mop"],[],e);return r?Ku(a,t,n,e,e.style,0,0):a},Sv=(i,e)=>{for(var t=yn(i.body,e.withFont("mathrm")),n=!0,r=0;r<t.length;r++){var s=t[r];if(!(s instanceof wu))if(s instanceof le)switch(s.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var a=s.children[0];s.children.length===1&&a instanceof zt?a.text=a.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var o=t.map(h=>h.toText()).join("");t=[new zt(o)]}var l=new le("mi",t);l.setAttribute("mathvariant","normal");var c=new le("mo",[En("⁡","text")]);return i.parentIsSupSub?new le("mrow",[l,c]):Su([l,c])};xe({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"operatorname",mode:t.mode,body:Ft(r),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Ju,mathmlBuilder:Sv});T("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");er({type:"ordgroup",htmlBuilder(i,e){return i.semisimple?li(Gt(i.body,e,!1)):ae(["mord"],Gt(i.body,e,!0),e)},mathmlBuilder(i,e){return Ri(i.body,e,!0)}});xe({type:"overline",names:["\\overline"],props:{numArgs:1},handler(i,e){var{parser:t}=i,n=e[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(i,e){var t=ot(i.body,e.havingCrampedStyle()),n=zr("overline-line",e),r=e.fontMetrics().defaultRuleThickness,s=at({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*r},{type:"elem",elem:n},{type:"kern",size:r}]});return ae(["mord","overline"],[s],e)},mathmlBuilder(i,e){var t=new le("mo",[new zt("‾")]);t.setAttribute("stretchy","true");var n=new le("mover",[gt(i.body,e),t]);return n.setAttribute("accent","true"),n}});xe({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"phantom",mode:t.mode,body:Ft(n)}},htmlBuilder:(i,e)=>{var t=Gt(i.body,e.withPhantom(),!1);return li(t)},mathmlBuilder:(i,e)=>{var t=yn(i.body,e);return new le("mphantom",t)}});T("\\hphantom","\\smash{\\phantom{#1}}");xe({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(i,e)=>{var t=ae(["inner"],[ot(i.body,e.withPhantom())]),n=ae(["fix"],[]);return ae(["mord","rlap"],[t,n],e)},mathmlBuilder:(i,e)=>{var t=yn(Ft(i.body),e),n=new le("mphantom",t),r=new le("mpadded",[n]);return r.setAttribute("width","0px"),r}});xe({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i,n=je(e[0],"size").value,r=e[1];return{type:"raisebox",mode:t.mode,dy:n,body:r}},htmlBuilder(i,e){var t=ot(i.body,e),n=At(i.dy,e);return at({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]})},mathmlBuilder(i,e){var t=new le("mpadded",[gt(i.body,e)]),n=i.dy.number+i.dy.unit;return t.setAttribute("voffset",n),t}});xe({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(i){var{parser:e}=i;return{type:"internal",mode:e.mode}}});xe({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(i,e,t){var{parser:n}=i,r=t[0],s=je(e[0],"size"),a=je(e[1],"size");return{type:"rule",mode:n.mode,shift:r&&je(r,"size").value,width:s.value,height:a.value}},htmlBuilder(i,e){var t=ae(["mord","rule"],[],e),n=At(i.width,e),r=At(i.height,e),s=i.shift?At(i.shift,e):0;return t.style.borderRightWidth=he(n),t.style.borderTopWidth=he(r),t.style.bottom=he(s),t.width=n,t.height=r+s,t.depth=-s,t.maxFontSize=r*1.125*e.sizeMultiplier,t},mathmlBuilder(i,e){var t=At(i.width,e),n=At(i.height,e),r=i.shift?At(i.shift,e):0,s=e.color&&e.getColor()||"black",a=new le("mspace");a.setAttribute("mathbackground",s),a.setAttribute("width",he(t)),a.setAttribute("height",he(n));var o=new le("mpadded",[a]);return r>=0?o.setAttribute("height",he(r)):(o.setAttribute("height",he(r)),o.setAttribute("depth",he(-r))),o.setAttribute("voffset",he(r)),o}});function Qu(i,e,t){for(var n=Gt(i,e,!1),r=e.sizeMultiplier/t.sizeMultiplier,s=0;s<n.length;s++){var a=n[s].classes.indexOf("sizing");a<0?Array.prototype.push.apply(n[s].classes,e.sizingClasses(t)):n[s].classes[a+1]==="reset-size"+e.size&&(n[s].classes[a+1]="reset-size"+t.size),n[s].height*=r,n[s].depth*=r}return li(n)}var gh=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],wv=(i,e)=>{var t=e.havingSize(i.size);return Qu(i.body,t,e)};xe({type:"sizing",names:gh,props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{breakOnTokenText:t,funcName:n,parser:r}=i,s=r.parseExpression(!1,t);return{type:"sizing",mode:r.mode,size:gh.indexOf(n)+1,body:s}},htmlBuilder:wv,mathmlBuilder:(i,e)=>{var t=e.havingSize(i.size),n=yn(i.body,t),r=new le("mstyle",n);return r.setAttribute("mathsize",he(t.sizeMultiplier)),r}});xe({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(i,e,t)=>{var{parser:n}=i,r=!1,s=!1,a=t[0]&&je(t[0],"ordgroup");if(a)for(var o,l=0;l<a.body.length;++l){var c=a.body[l];if(o=Oa(c).text,o==="t")r=!0;else if(o==="b")s=!0;else{r=!1,s=!1;break}}else r=!0,s=!0;var h=e[0];return{type:"smash",mode:n.mode,body:h,smashHeight:r,smashDepth:s}},htmlBuilder:(i,e)=>{var t=ae([],[ot(i.body,e)]);if(!i.smashHeight&&!i.smashDepth)return t;if(i.smashHeight&&(t.height=0),i.smashDepth&&(t.depth=0),i.smashHeight&&i.smashDepth)return ae(["mord","smash"],[t],e);if(t.children)for(var n=0;n<t.children.length;n++)i.smashHeight&&(t.children[n].height=0),i.smashDepth&&(t.children[n].depth=0);var r=at({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return ae(["mord"],[r],e)},mathmlBuilder:(i,e)=>{var t=new le("mpadded",[gt(i.body,e)]);return i.smashHeight&&t.setAttribute("height","0px"),i.smashDepth&&t.setAttribute("depth","0px"),t}});xe({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n}=i,r=t[0],s=e[0];return{type:"sqrt",mode:n.mode,body:s,index:r}},htmlBuilder(i,e){var t=ot(i.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=Or(t,e);var n=e.fontMetrics(),r=n.defaultRuleThickness,s=r;e.style.id<Xe.TEXT.id&&(s=e.fontMetrics().xHeight);var a=r+s/4,o=t.height+t.depth+a+r,{span:l,ruleWidth:c,advanceWidth:h}=hv(o,e),d=l.height-c;d>t.height+t.depth+a&&(a=(a+d-t.height-t.depth)/2);var f=l.height-t.height-a-c;t.style.paddingLeft=he(h);var m=at({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+f)},{type:"elem",elem:l},{type:"kern",size:c}]});if(i.index){var _=e.havingStyle(Xe.SCRIPTSCRIPT),x=ot(i.index,_,e),g=.6*(m.height-m.depth),p=at({positionType:"shift",positionData:-g,children:[{type:"elem",elem:x}]}),b=ae(["root"],[p]);return ae(["mord","sqrt"],[b,m],e)}else return ae(["mord","sqrt"],[m],e)},mathmlBuilder(i,e){var{body:t,index:n}=i;return n?new le("mroot",[gt(t,e),gt(n,e)]):new le("msqrt",[gt(t,e)])}});var j0={display:Xe.DISPLAY,text:Xe.TEXT,script:Xe.SCRIPT,scriptscript:Xe.SCRIPTSCRIPT};function Ev(i){return i in j0}xe({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i,e){var{breakOnTokenText:t,funcName:n,parser:r}=i,s=r.parseExpression(!0,t),a=n.slice(1,n.length-5);if(!Ev(a))throw new Error("Unknown style: "+a);return{type:"styling",mode:r.mode,style:a,body:s}},htmlBuilder(i,e){var t=j0[i.style],n=e.havingStyle(t);return i.resetFont&&(n=n.withFont("")),Qu(i.body,n,e)},mathmlBuilder(i,e){var t=j0[i.style],n=e.havingStyle(t);i.resetFont&&(n=n.withFont(""));var r=yn(i.body,n),s=new le("mstyle",r),a={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=a[i.style];return s.setAttribute("scriptlevel",o[0]),s.setAttribute("displaystyle",o[1]),s}});var Tv=function(e,t){var n=e.base;if(n)if(n.type==="op"){var r=n.limits&&(t.style.size===Xe.DISPLAY.size||n.alwaysHandleSupSub);return r?qr:null}else if(n.type==="operatorname"){var s=n.alwaysHandleSupSub&&(t.style.size===Xe.DISPLAY.size||n.limits);return s?Ju:null}else{if(n.type==="accent")return ai(n.base)?Ml:null;if(n.type==="horizBrace"){var a=!e.sub;return a===n.isOver?$u:null}else return null}else return null};er({type:"supsub",htmlBuilder(i,e){var t=Tv(i,e);if(t)return t(i,e);var{base:n,sup:r,sub:s}=i,a=ot(n,e),o,l,c=e.fontMetrics(),h=0,d=0,f=n&&ai(n);if(r){var m=e.havingStyle(e.style.sup());o=ot(r,m,e),f||(h=a.height-m.fontMetrics().supDrop*m.sizeMultiplier/e.sizeMultiplier)}if(s){var _=e.havingStyle(e.style.sub());l=ot(s,_,e),f||(d=a.depth+_.fontMetrics().subDrop*_.sizeMultiplier/e.sizeMultiplier)}var x;e.style===Xe.DISPLAY?x=c.sup1:e.style.cramped?x=c.sup3:x=c.sup2;var g=e.sizeMultiplier,p=he(.5/c.ptPerEm/g),b=null;if(l){var M=i.base&&i.base.type==="op"&&i.base.name&&(i.base.name==="\\oiint"||i.base.name==="\\oiiint");if(a instanceof xn||M){var A;b=he(-((A=a.italic)!=null?A:0))}}var F;if(o&&l){h=Math.max(h,x,o.depth+.25*c.xHeight),d=Math.max(d,c.sub2);var R=c.defaultRuleThickness,P=4*R;if(h-o.depth-(l.height-d)<P){d=P-(h-o.depth)+l.height;var U=.8*c.xHeight-(h-o.depth);U>0&&(h+=U,d-=U)}var E=[{type:"elem",elem:l,shift:d,marginRight:p,marginLeft:b},{type:"elem",elem:o,shift:-h,marginRight:p}];F=at({positionType:"individualShift",children:E})}else if(l){d=Math.max(d,c.sub1,l.height-.8*c.xHeight);var S=[{type:"elem",elem:l,marginLeft:b,marginRight:p}];F=at({positionType:"shift",positionData:d,children:S})}else if(o)h=Math.max(h,x,o.depth+.25*c.xHeight),F=at({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:p}]});else throw new Error("supsub must have either sup or sub.");var z=G0(a,"right")||"mord";return ae([z],[a,ae(["msupsub"],[F])],e)},mathmlBuilder(i,e){var t=!1,n,r;i.base&&i.base.type==="horizBrace"&&(r=!!i.sup,r===i.base.isOver&&(t=!0,n=i.base.isOver)),i.base&&(i.base.type==="op"||i.base.type==="operatorname")&&(i.base.parentIsSupSub=!0);var s=[gt(i.base,e)];i.sub&&s.push(gt(i.sub,e)),i.sup&&s.push(gt(i.sup,e));var a;if(t)a=n?"mover":"munder";else if(i.sub)if(i.sup){var c=i.base;c&&c.type==="op"&&c.limits&&e.style===Xe.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===Xe.DISPLAY||c.limits)?a="munderover":a="msubsup"}else{var l=i.base;l&&l.type==="op"&&l.limits&&(e.style===Xe.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===Xe.DISPLAY)?a="munder":a="msub"}else{var o=i.base;o&&o.type==="op"&&o.limits&&(e.style===Xe.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===Xe.DISPLAY)?a="mover":a="msup"}return new le(a,s)}});er({type:"atom",htmlBuilder(i,e){return vl(i.text,i.mode,e,["m"+i.family])},mathmlBuilder(i,e){var t=new le("mo",[En(i.text,i.mode)]);if(i.family==="bin"){var n=yl(i,e);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else i.family==="punct"?t.setAttribute("separator","true"):(i.family==="open"||i.family==="close")&&t.setAttribute("stretchy","false");return t}});var ed={mi:"italic",mn:"normal",mtext:"normal"};er({type:"mathord",htmlBuilder(i,e){return Ua(i,e,"mathord")},mathmlBuilder(i,e){var t=new le("mi",[En(i.text,i.mode,e)]),n=yl(i,e)||"italic";return n!==ed[t.type]&&t.setAttribute("mathvariant",n),t}});er({type:"textord",htmlBuilder(i,e){return Ua(i,e,"textord")},mathmlBuilder(i,e){var t=En(i.text,i.mode,e),n=yl(i,e)||"normal",r;return i.mode==="text"?r=new le("mtext",[t]):/[0-9]/.test(i.text)?r=new le("mn",[t]):i.text==="\\prime"?r=new le("mo",[t]):r=new le("mi",[t]),n!==ed[r.type]&&r.setAttribute("mathvariant",n),r}});var Go={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Wo={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};er({type:"spacing",htmlBuilder(i,e){if(Wo.hasOwnProperty(i.text)){var t=Wo[i.text].className||"";if(i.mode==="text"){var n=Ua(i,e,"textord");return n.classes.push(t),n}else return ae(["mspace",t],[vl(i.text,i.mode,e)],e)}else{if(Go.hasOwnProperty(i.text))return ae(["mspace",Go[i.text]],[],e);throw new oe('Unknown type of space "'+i.text+'"')}},mathmlBuilder(i,e){var t;if(Wo.hasOwnProperty(i.text))t=new le("mtext",[new zt(" ")]);else{if(Go.hasOwnProperty(i.text))return new le("mspace");throw new oe('Unknown type of space "'+i.text+'"')}return t}});var vh=()=>{var i=new le("mtd",[]);return i.setAttribute("width","50%"),i};er({type:"tag",mathmlBuilder(i,e){var t=new le("mtable",[new le("mtr",[vh(),new le("mtd",[Ri(i.body,e)]),vh(),new le("mtd",[Ri(i.tag,e)])])]);return t.setAttribute("width","100%"),t}});var xh={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},_h={"\\textbf":"textbf","\\textmd":"textmd"},Av={"\\textit":"textit","\\textup":"textup"},yh=(i,e)=>{var t=i.font;if(t){if(xh[t])return e.withTextFontFamily(xh[t]);if(_h[t])return e.withTextFontWeight(_h[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(Av[t])};xe({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"text",mode:t.mode,body:Ft(r),font:n}},htmlBuilder(i,e){var t=yh(i,e),n=Gt(i.body,t,!0);return ae(["mord","text"],n,t)},mathmlBuilder(i,e){var t=yh(i,e);return Ri(i.body,t)}});xe({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=ot(i.body,e),n=zr("underline-line",e),r=e.fontMetrics().defaultRuleThickness,s=at({positionType:"top",positionData:t.height,children:[{type:"kern",size:r},{type:"elem",elem:n},{type:"kern",size:3*r},{type:"elem",elem:t}]});return ae(["mord","underline"],[s],e)},mathmlBuilder(i,e){var t=new le("mo",[new zt("‾")]);t.setAttribute("stretchy","true");var n=new le("munder",[gt(i.body,e),t]);return n.setAttribute("accentunder","true"),n}});xe({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=ot(i.body,e),n=e.fontMetrics().axisHeight,r=.5*(t.height-n-(t.depth+n));return at({positionType:"shift",positionData:r,children:[{type:"elem",elem:t}]})},mathmlBuilder(i,e){var t=new le("mpadded",[gt(i.body,e)],["vcenter"]);return new le("mrow",[t])}});xe({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(i,e,t){throw new oe("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(i,e){for(var t=Mh(i),n=[],r=e.havingStyle(e.style.text()),s=0;s<t.length;s++){var a=t[s];a==="~"&&(a="\\textasciitilde"),n.push(tn(a,"Typewriter-Regular",i.mode,r,["mord","texttt"]))}return ae(["mord","text"].concat(r.sizingClasses(e)),vu(n),r)},mathmlBuilder(i,e){var t=new zt(Mh(i)),n=new le("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var Mh=i=>i.body.replace(/ /g,i.star?"␣":" "),Mi=Mu,td=`[ \r
	]`,Cv="\\\\[a-zA-Z@]+",Rv="\\\\[^\uD800-\uDFFF]",Pv="("+Cv+")"+td+"*",Dv=`\\\\(
|[ \r	]+
?)[ \r	]*`,$0="[̀-ͯ]",Lv=new RegExp($0+"+$"),Iv="("+td+"+)|"+(Dv+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+($0+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+($0+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+Pv)+("|"+Rv+")");class bh{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(Iv,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new vn("EOF",new ln(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new oe("Unexpected character: '"+e[t]+"'",new vn(e[t],new ln(this,t,t+1)));var r=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[r]===14){var s=e.indexOf(`
`,this.tokenRegex.lastIndex);return s===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=s+1,this.lex()}return new vn(r,new ln(this,t,this.tokenRegex.lastIndex))}}class Nv{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new oe("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var s=this.undefStack[this.undefStack.length-1];s&&!s.hasOwnProperty(e)&&(s[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var Uv=Wu;T("\\noexpand",function(i){var e=i.popToken();return i.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});T("\\expandafter",function(i){var e=i.popToken();return i.expandOnce(!0),{tokens:[e],numArgs:0}});T("\\@firstoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[0],numArgs:0}});T("\\@secondoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[1],numArgs:0}});T("\\@ifnextchar",function(i){var e=i.consumeArgs(3);i.consumeSpaces();var t=i.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});T("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");T("\\TextOrMath",function(i){var e=i.consumeArgs(2);return i.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var Sh={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};T("\\char",function(i){var e=i.popToken(),t,n=0;if(e.text==="'")t=8,e=i.popToken();else if(e.text==='"')t=16,e=i.popToken();else if(e.text==="`")if(e=i.popToken(),e.text[0]==="\\")n=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new oe("\\char` missing argument");n=e.text.charCodeAt(0)}else t=10;if(t){if(n=Sh[e.text],n==null||n>=t)throw new oe("Invalid base-"+t+" digit "+e.text);for(var r;(r=Sh[i.future().text])!=null&&r<t;)n*=t,n+=r,i.popToken()}return"\\@char{"+n+"}"});var El=(i,e,t,n)=>{var r=i.consumeArg().tokens;if(r.length!==1)throw new oe("\\newcommand's first argument must be a macro name");var s=r[0].text,a=i.isDefined(s);if(a&&!e)throw new oe("\\newcommand{"+s+"} attempting to redefine "+(s+"; use \\renewcommand"));if(!a&&!t)throw new oe("\\renewcommand{"+s+"} when command "+s+" does not yet exist; use \\newcommand");var o=0;if(r=i.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var l="",c=i.expandNextToken();c.text!=="]"&&c.text!=="EOF";)l+=c.text,c=i.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new oe("Invalid number of arguments: "+l);o=parseInt(l),r=i.consumeArg().tokens}return a&&n||i.macros.set(s,{tokens:r,numArgs:o}),""};T("\\newcommand",i=>El(i,!1,!0,!1));T("\\renewcommand",i=>El(i,!0,!1,!1));T("\\providecommand",i=>El(i,!0,!0,!0));T("\\message",i=>{var e=i.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});T("\\errmessage",i=>{var e=i.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});T("\\show",i=>{var e=i.popToken(),t=e.text;return console.log(e,i.macros.get(t),Mi[t],St.math[t],St.text[t]),""});T("\\bgroup","{");T("\\egroup","}");T("~","\\nobreakspace");T("\\lq","`");T("\\rq","'");T("\\aa","\\r a");T("\\AA","\\r A");T("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");T("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");T("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");T("ℬ","\\mathscr{B}");T("ℰ","\\mathscr{E}");T("ℱ","\\mathscr{F}");T("ℋ","\\mathscr{H}");T("ℐ","\\mathscr{I}");T("ℒ","\\mathscr{L}");T("ℳ","\\mathscr{M}");T("ℛ","\\mathscr{R}");T("ℭ","\\mathfrak{C}");T("ℌ","\\mathfrak{H}");T("ℨ","\\mathfrak{Z}");T("\\Bbbk","\\Bbb{k}");T("\\llap","\\mathllap{\\textrm{#1}}");T("\\rlap","\\mathrlap{\\textrm{#1}}");T("\\clap","\\mathclap{\\textrm{#1}}");T("\\mathstrut","\\vphantom{(}");T("\\underbar","\\underline{\\text{#1}}");T("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');T("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");T("\\ne","\\neq");T("≠","\\neq");T("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");T("∉","\\notin");T("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");T("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");T("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");T("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");T("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");T("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");T("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");T("⟂","\\perp");T("‼","\\mathclose{!\\mkern-0.8mu!}");T("∌","\\notni");T("⌜","\\ulcorner");T("⌝","\\urcorner");T("⌞","\\llcorner");T("⌟","\\lrcorner");T("©","\\copyright");T("®","\\textregistered");T("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');T("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');T("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');T("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');T("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");T("⋮","\\vdots");T("\\varGamma","\\mathit{\\Gamma}");T("\\varDelta","\\mathit{\\Delta}");T("\\varTheta","\\mathit{\\Theta}");T("\\varLambda","\\mathit{\\Lambda}");T("\\varXi","\\mathit{\\Xi}");T("\\varPi","\\mathit{\\Pi}");T("\\varSigma","\\mathit{\\Sigma}");T("\\varUpsilon","\\mathit{\\Upsilon}");T("\\varPhi","\\mathit{\\Phi}");T("\\varPsi","\\mathit{\\Psi}");T("\\varOmega","\\mathit{\\Omega}");T("\\substack","\\begin{subarray}{c}#1\\end{subarray}");T("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");T("\\boxed","\\fbox{$\\displaystyle{#1}$}");T("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");T("\\implies","\\DOTSB\\;\\Longrightarrow\\;");T("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");T("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");T("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var wh={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},Fv=new Set(["bin","rel"]);T("\\dots",function(i){var e="\\dotso",t=i.expandAfterFuture().text;return t in wh?e=wh[t]:(t.slice(0,4)==="\\not"||t in St.math&&Fv.has(St.math[t].group))&&(e="\\dotsb"),e});var Tl={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};T("\\dotso",function(i){var e=i.future().text;return e in Tl?"\\ldots\\,":"\\ldots"});T("\\dotsc",function(i){var e=i.future().text;return e in Tl&&e!==","?"\\ldots\\,":"\\ldots"});T("\\cdots",function(i){var e=i.future().text;return e in Tl?"\\@cdots\\,":"\\@cdots"});T("\\dotsb","\\cdots");T("\\dotsm","\\cdots");T("\\dotsi","\\!\\cdots");T("\\dotsx","\\ldots\\,");T("\\DOTSI","\\relax");T("\\DOTSB","\\relax");T("\\DOTSX","\\relax");T("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");T("\\,","\\tmspace+{3mu}{.1667em}");T("\\thinspace","\\,");T("\\>","\\mskip{4mu}");T("\\:","\\tmspace+{4mu}{.2222em}");T("\\medspace","\\:");T("\\;","\\tmspace+{5mu}{.2777em}");T("\\thickspace","\\;");T("\\!","\\tmspace-{3mu}{.1667em}");T("\\negthinspace","\\!");T("\\negmedspace","\\tmspace-{4mu}{.2222em}");T("\\negthickspace","\\tmspace-{5mu}{.277em}");T("\\enspace","\\kern.5em ");T("\\enskip","\\hskip.5em\\relax");T("\\quad","\\hskip1em\\relax");T("\\qquad","\\hskip2em\\relax");T("\\tag","\\@ifstar\\tag@literal\\tag@paren");T("\\tag@paren","\\tag@literal{({#1})}");T("\\tag@literal",i=>{if(i.macros.get("\\df@tag"))throw new oe("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});T("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");T("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");T("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");T("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");T("\\newline","\\\\\\relax");T("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var nd=he(On["Main-Regular"][84][1]-.7*On["Main-Regular"][65][1]);T("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+nd+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");T("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+nd+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");T("\\hspace","\\@ifstar\\@hspacer\\@hspace");T("\\@hspace","\\hskip #1\\relax");T("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");T("\\ordinarycolon",":");T("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");T("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');T("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');T("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');T("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');T("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');T("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');T("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');T("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');T("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');T("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');T("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');T("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');T("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');T("∷","\\dblcolon");T("∹","\\eqcolon");T("≔","\\coloneqq");T("≕","\\eqqcolon");T("⩴","\\Coloneqq");T("\\ratio","\\vcentcolon");T("\\coloncolon","\\dblcolon");T("\\colonequals","\\coloneqq");T("\\coloncolonequals","\\Coloneqq");T("\\equalscolon","\\eqqcolon");T("\\equalscoloncolon","\\Eqqcolon");T("\\colonminus","\\coloneq");T("\\coloncolonminus","\\Coloneq");T("\\minuscolon","\\eqcolon");T("\\minuscoloncolon","\\Eqcolon");T("\\coloncolonapprox","\\Colonapprox");T("\\coloncolonsim","\\Colonsim");T("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");T("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");T("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");T("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");T("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");T("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");T("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");T("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");T("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");T("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");T("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");T("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");T("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");T("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");T("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");T("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");T("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");T("\\nleqq","\\html@mathml{\\@nleqq}{≰}");T("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");T("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");T("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");T("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");T("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");T("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");T("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");T("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");T("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");T("\\imath","\\html@mathml{\\@imath}{ı}");T("\\jmath","\\html@mathml{\\@jmath}{ȷ}");T("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");T("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");T("⟦","\\llbracket");T("⟧","\\rrbracket");T("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");T("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");T("⦃","\\lBrace");T("⦄","\\rBrace");T("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");T("⦵","\\minuso");T("\\darr","\\downarrow");T("\\dArr","\\Downarrow");T("\\Darr","\\Downarrow");T("\\lang","\\langle");T("\\rang","\\rangle");T("\\uarr","\\uparrow");T("\\uArr","\\Uparrow");T("\\Uarr","\\Uparrow");T("\\N","\\mathbb{N}");T("\\R","\\mathbb{R}");T("\\Z","\\mathbb{Z}");T("\\alef","\\aleph");T("\\alefsym","\\aleph");T("\\Alpha","\\mathrm{A}");T("\\Beta","\\mathrm{B}");T("\\bull","\\bullet");T("\\Chi","\\mathrm{X}");T("\\clubs","\\clubsuit");T("\\cnums","\\mathbb{C}");T("\\Complex","\\mathbb{C}");T("\\Dagger","\\ddagger");T("\\diamonds","\\diamondsuit");T("\\empty","\\emptyset");T("\\Epsilon","\\mathrm{E}");T("\\Eta","\\mathrm{H}");T("\\exist","\\exists");T("\\harr","\\leftrightarrow");T("\\hArr","\\Leftrightarrow");T("\\Harr","\\Leftrightarrow");T("\\hearts","\\heartsuit");T("\\image","\\Im");T("\\infin","\\infty");T("\\Iota","\\mathrm{I}");T("\\isin","\\in");T("\\Kappa","\\mathrm{K}");T("\\larr","\\leftarrow");T("\\lArr","\\Leftarrow");T("\\Larr","\\Leftarrow");T("\\lrarr","\\leftrightarrow");T("\\lrArr","\\Leftrightarrow");T("\\Lrarr","\\Leftrightarrow");T("\\Mu","\\mathrm{M}");T("\\natnums","\\mathbb{N}");T("\\Nu","\\mathrm{N}");T("\\Omicron","\\mathrm{O}");T("\\plusmn","\\pm");T("\\rarr","\\rightarrow");T("\\rArr","\\Rightarrow");T("\\Rarr","\\Rightarrow");T("\\real","\\Re");T("\\reals","\\mathbb{R}");T("\\Reals","\\mathbb{R}");T("\\Rho","\\mathrm{P}");T("\\sdot","\\cdot");T("\\sect","\\S");T("\\spades","\\spadesuit");T("\\sub","\\subset");T("\\sube","\\subseteq");T("\\supe","\\supseteq");T("\\Tau","\\mathrm{T}");T("\\thetasym","\\vartheta");T("\\weierp","\\wp");T("\\Zeta","\\mathrm{Z}");T("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");T("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");T("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");T("\\bra","\\mathinner{\\langle{#1}|}");T("\\ket","\\mathinner{|{#1}\\rangle}");T("\\braket","\\mathinner{\\langle{#1}\\rangle}");T("\\Bra","\\left\\langle#1\\right|");T("\\Ket","\\left|#1\\right\\rangle");var id=i=>e=>{var t=e.consumeArg().tokens,n=e.consumeArg().tokens,r=e.consumeArg().tokens,s=e.consumeArg().tokens,a=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=d=>f=>{i&&(f.macros.set("|",a),r.length&&f.macros.set("\\|",o));var m=d;if(!d&&r.length){var _=f.future();_.text==="|"&&(f.popToken(),m=!0)}return{tokens:m?r:n,numArgs:0}};e.macros.set("|",l(!1)),r.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,h=e.expandTokens([...s,...c,...t]);return e.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};T("\\bra@ket",id(!1));T("\\bra@set",id(!0));T("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");T("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");T("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");T("\\angln","{\\angl n}");T("\\blue","\\textcolor{##6495ed}{#1}");T("\\orange","\\textcolor{##ffa500}{#1}");T("\\pink","\\textcolor{##ff00af}{#1}");T("\\red","\\textcolor{##df0030}{#1}");T("\\green","\\textcolor{##28ae7b}{#1}");T("\\gray","\\textcolor{gray}{#1}");T("\\purple","\\textcolor{##9d38bd}{#1}");T("\\blueA","\\textcolor{##ccfaff}{#1}");T("\\blueB","\\textcolor{##80f6ff}{#1}");T("\\blueC","\\textcolor{##63d9ea}{#1}");T("\\blueD","\\textcolor{##11accd}{#1}");T("\\blueE","\\textcolor{##0c7f99}{#1}");T("\\tealA","\\textcolor{##94fff5}{#1}");T("\\tealB","\\textcolor{##26edd5}{#1}");T("\\tealC","\\textcolor{##01d1c1}{#1}");T("\\tealD","\\textcolor{##01a995}{#1}");T("\\tealE","\\textcolor{##208170}{#1}");T("\\greenA","\\textcolor{##b6ffb0}{#1}");T("\\greenB","\\textcolor{##8af281}{#1}");T("\\greenC","\\textcolor{##74cf70}{#1}");T("\\greenD","\\textcolor{##1fab54}{#1}");T("\\greenE","\\textcolor{##0d923f}{#1}");T("\\goldA","\\textcolor{##ffd0a9}{#1}");T("\\goldB","\\textcolor{##ffbb71}{#1}");T("\\goldC","\\textcolor{##ff9c39}{#1}");T("\\goldD","\\textcolor{##e07d10}{#1}");T("\\goldE","\\textcolor{##a75a05}{#1}");T("\\redA","\\textcolor{##fca9a9}{#1}");T("\\redB","\\textcolor{##ff8482}{#1}");T("\\redC","\\textcolor{##f9685d}{#1}");T("\\redD","\\textcolor{##e84d39}{#1}");T("\\redE","\\textcolor{##bc2612}{#1}");T("\\maroonA","\\textcolor{##ffbde0}{#1}");T("\\maroonB","\\textcolor{##ff92c6}{#1}");T("\\maroonC","\\textcolor{##ed5fa6}{#1}");T("\\maroonD","\\textcolor{##ca337c}{#1}");T("\\maroonE","\\textcolor{##9e034e}{#1}");T("\\purpleA","\\textcolor{##ddd7ff}{#1}");T("\\purpleB","\\textcolor{##c6b9fc}{#1}");T("\\purpleC","\\textcolor{##aa87ff}{#1}");T("\\purpleD","\\textcolor{##7854ab}{#1}");T("\\purpleE","\\textcolor{##543b78}{#1}");T("\\mintA","\\textcolor{##f5f9e8}{#1}");T("\\mintB","\\textcolor{##edf2df}{#1}");T("\\mintC","\\textcolor{##e0e5cc}{#1}");T("\\grayA","\\textcolor{##f6f7f7}{#1}");T("\\grayB","\\textcolor{##f0f1f2}{#1}");T("\\grayC","\\textcolor{##e3e5e6}{#1}");T("\\grayD","\\textcolor{##d6d8da}{#1}");T("\\grayE","\\textcolor{##babec2}{#1}");T("\\grayF","\\textcolor{##888d93}{#1}");T("\\grayG","\\textcolor{##626569}{#1}");T("\\grayH","\\textcolor{##3b3e40}{#1}");T("\\grayI","\\textcolor{##21242c}{#1}");T("\\kaBlue","\\textcolor{##314453}{#1}");T("\\kaGreen","\\textcolor{##71B307}{#1}");var rd={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class zv{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new Nv(Uv,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new bh(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg(["]"])}else({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new vn("EOF",n.loc)),this.pushTokens(r),new vn("",ln.range(t,n))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),s,a=0,o=0;do{if(s=this.popToken(),t.push(s),s.text==="{")++a;else if(s.text==="}"){if(--a,a===-1)throw new oe("Extra }",s)}else if(s.text==="EOF")throw new oe("Unexpected end of input in a macro argument, expected '"+(e&&n?e[o]:"}")+"'",s);if(e&&n)if((a===0||a===1&&e[o]==="{")&&s.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(a!==0||n);return r.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:s}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new oe("The length of delimiters doesn't match the number of args!");for(var n=t[0],r=0;r<n.length;r++){var s=this.popToken();if(n[r]!==s.text)throw new oe("Use of the macro doesn't match its definition",s)}}for(var a=[],o=0;o<e;o++)a.push(this.consumeArg(t&&t[o+1]).tokens);return a}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new oe("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]==="\\"&&!this.isDefined(n))throw new oe("Undefined control sequence: "+n);return this.pushToken(t),!1}this.countExpansion(1);var s=r.tokens,a=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){s=s.slice();for(var o=s.length-1;o>=0;--o){var l=s[o];if(l.text==="#"){if(o===0)throw new oe("Incomplete placeholder at end of macro body",l);if(l=s[--o],l.text==="#")s.splice(o+1,1);else if(/^[1-9]$/.test(l.text))s.splice(o,2,...a[+l.text-1]);else throw new oe("Not a valid argument number",l)}}}return this.pushTokens(s),s.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new vn(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&(r.noexpand=!1,r.treatAsRelax=!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(n=>n.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t=="function"?t(this):t;if(typeof r=="string"){var s=0;if(r.includes("#"))for(var a=r.replace(/##/g,"");a.includes("#"+(s+1));)++s;for(var o=new bh(r,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var h={tokens:l,numArgs:s};return h}return r}isDefined(e){return this.macros.has(e)||Mi.hasOwnProperty(e)||St.math.hasOwnProperty(e)||St.text.hasOwnProperty(e)||rd.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:Mi.hasOwnProperty(e)&&!Mi[e].primitive}}var Eh=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Qs=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),qo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Th={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class qa{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new zv(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new oe("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new vn("}")),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(e,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var r=this.fetch();if(qa.endOfExpression.has(r.text)||t&&r.text===t||e&&Mi[r.text]&&Mi[r.text].infix)break;var s=this.parseAtom(t);if(s){if(s.type==="internal")continue}else break;n.push(s)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++){var s=e[r];if(s.type==="infix"){if(t!==-1)throw new oe("only one infix operator per group",s.token);t=r,n=s.replaceWith}}if(t!==-1&&n){var a,o,l=e.slice(0,t),c=e.slice(t+1);l.length===1&&l[0].type==="ordgroup"?a=l[0]:a={type:"ordgroup",mode:this.mode,body:l},c.length===1&&c[0].type==="ordgroup"?o=c[0]:o={type:"ordgroup",mode:this.mode,body:c};var h;return n==="\\\\abovefrac"?h=this.callFunction(n,[a,e[t],o],[]):h=this.callFunction(n,[a,o],[]),[h]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do{var s;r=this.parseGroup(e)}while(((s=r)==null?void 0:s.type)==="internal");if(!r)throw new oe("Expected group after '"+n+"'",t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:"textord",mode:"text",text:e[n]});var r={type:"text",mode:this.mode,body:t},s={type:"color",mode:this.mode,color:this.settings.errorColor,body:[r]};return s}parseAtom(e){var t=this.parseGroup("atom",e);if((t==null?void 0:t.type)==="internal"||this.mode==="text")return t;for(var n,r;;){this.consumeSpaces();var s=this.fetch();if(s.text==="\\limits"||s.text==="\\nolimits"){if(t&&t.type==="op"){var a=s.text==="\\limits";t.limits=a,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=s.text==="\\limits");else throw new oe("Limit controls must follow a math operator",s);this.consume()}else if(s.text==="^"){if(n)throw new oe("Double superscript",s);n=this.handleSupSubscript("superscript")}else if(s.text==="_"){if(r)throw new oe("Double subscript",s);r=this.handleSupSubscript("subscript")}else if(s.text==="'"){if(n)throw new oe("Double superscript",s);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(Qs[s.text]){var c=Eh.test(s.text),h=[];for(h.push(new vn(Qs[s.text])),this.consume();;){var d=this.fetch().text;if(!Qs[d]||Eh.test(d)!==c)break;h.unshift(new vn(Qs[d])),this.consume()}var f=this.subparse(h);c?r={type:"ordgroup",mode:"math",body:f}:n={type:"ordgroup",mode:"math",body:f}}else break}return n||r?{type:"supsub",mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,s=Mi[r];if(!s)return null;if(this.consume(),t&&t!=="atom"&&!s.allowedInArgument)throw new oe("Got function '"+r+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!s.allowedInText)throw new oe("Can't use function '"+r+"' in text mode",n);if(this.mode==="math"&&s.allowedInMath===!1)throw new oe("Can't use function '"+r+"' in math mode",n);var{args:a,optArgs:o}=this.parseArguments(r,s);return this.callFunction(r,a,o,n,e)}callFunction(e,t,n,r,s){var a={funcName:e,parser:this,token:r,breakOnTokenText:s},o=Mi[e];if(o&&o.handler)return o.handler(a,t,n);throw new oe("No function handler for "+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],s=[],a=0;a<n;a++){var o=t.argTypes&&t.argTypes[a],l=a<t.numOptionalArgs;("primitive"in t&&t.primitive&&o==null||t.type==="sqrt"&&a===1&&s[0]==null)&&(o="primitive");var c=this.parseGroupOfType("argument to '"+e+"'",o,l);if(l)s.push(c);else if(c!=null)r.push(c);else throw new oe("Null argument, please report this as a bug")}return{args:r,optArgs:s}}parseGroupOfType(e,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var r=this.parseArgumentGroup(n,"text");return r!=null?{type:"styling",mode:r.mode,body:[r],style:"text",resetFont:!0}:null}case"raw":{var s=this.parseStringGroup("raw",n);return s!=null?{type:"raw",mode:"text",string:s.text}:null}case"primitive":{if(n)throw new oe("A primitive argument cannot be optional");var a=this.parseGroup(e);if(a==null)throw new oe("Expected group as "+e,this.fetch());return a}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new oe("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r="",s;(s=this.fetch()).text!=="EOF";)r+=s.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,s="",a;(a=this.fetch()).text!=="EOF"&&e.test(s+a.text);)r=a,s+=r.text,this.consume();if(s==="")throw new oe("Invalid "+t+": '"+n.text+"'",n);return n.range(r,s)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new oe("Invalid color: '"+t.text+"'",t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r="#"+r),{type:"color-token",mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new oe("Invalid size: '"+t.text+"'",t);var s={number:+(r[1]+r[2]),unit:r[3]};if(!du(s))throw new oe("Invalid unit: '"+s.unit+"'",t);return{type:"size",mode:this.mode,value:s,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var s=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var a={type:"ordgroup",mode:this.mode,loc:n.loc,body:s};return t&&this.switchMode(r),a}parseGroup(e,t){var n=this.fetch(),r=n.text,s;if(r==="{"||r==="\\begingroup"){this.consume();var a=r==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,a),l=this.fetch();this.expect(a),this.gullet.endGroup(),s={type:"ordgroup",mode:this.mode,loc:ln.range(n,l),body:o,semisimple:r==="\\begingroup"||void 0}}else if(s=this.parseFunction(t,e)||this.parseSymbol(),s==null&&r[0]==="\\"&&!rd.hasOwnProperty(r)){if(this.settings.throwOnError)throw new oe("Undefined control sequence: "+r,n);s=this.formatUnsupportedCmd(r),this.consume()}return s}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n];if(r.type==="textord"){var s=r.text,a=e[n+1];if(!(!a||a.type!=="textord")){if(s==="-"&&a.text==="-"){var o=e[n+2];n+1<t&&o&&o.type==="textord"&&o.text==="-"?(e.splice(n,3,{type:"textord",mode:"text",loc:ln.range(r,o),text:"---"}),t-=2):(e.splice(n,2,{type:"textord",mode:"text",loc:ln.range(r,a),text:"--"}),t-=1)}(s==="'"||s==="`")&&a.text===s&&(e.splice(n,2,{type:"textord",mode:"text",loc:ln.range(r,a),text:s+s}),t-=1)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)==="*";if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new oe(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:r}}Th.hasOwnProperty(t[0])&&!St[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=Th[t[0]]+t.slice(1));var s=Lv.exec(t);s&&(t=t.substring(0,s.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var a;if(St[this.mode][t]){this.settings.strict&&this.mode==="math"&&U0.includes(t)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var o=St[this.mode][t].group,l=ln.range(e),c;Q4(o)?c={type:"atom",mode:this.mode,family:o,loc:l,text:t}:c={type:o,mode:this.mode,loc:l,text:t},a=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(uu(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),a={type:"textord",mode:"text",loc:ln.range(e),text:t};else return null;if(this.consume(),s)for(var h=0;h<s[0].length;h++){var d=s[0][h];if(!qo[d])throw new oe("Unknown accent ' "+d+"'",e);var f=qo[d][this.mode]||qo[d].text;if(!f)throw new oe("Accent "+d+" unsupported in "+this.mode+" mode",e);a={type:"accent",mode:this.mode,loc:ln.range(e),label:f,isStretchy:!1,isShifty:!0,base:a}}return a}}qa.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Al=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new qa(e,t);delete n.gullet.macros.current["\\df@tag"];var r=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new oe("\\tag works only in display equations");r=[{type:"tag",mode:"text",body:r,tag:n.subparse([new vn("\\df@tag")])}]}return r},sd=function(e,t,n){t.textContent="";var r=Cl(e,n).toNode();t.appendChild(r)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),sd=function(){throw new oe("KaTeX doesn't work in quirks mode.")});var Ov=function(e,t){var n=Cl(e,t).toMarkup();return n},kv=function(e,t){var n=new fl(t);return Al(e,n)},ad=function(e,t,n){if(n.throwOnError||!(e instanceof oe))throw e;var r=ae(["katex-error"],[new xn(t)]);return r.setAttribute("title",e.toString()),r.setAttribute("style","color:"+n.errorColor),r},Cl=function(e,t){var n=new fl(t);try{var r=Al(e,n);return q4(r,e,n)}catch(s){return ad(s,e,n)}},Bv=function(e,t){var n=new fl(t);try{var r=Al(e,n);return X4(r,e,n)}catch(s){return ad(s,e,n)}},Hv="0.16.47",Vv={Span:Gr,Anchor:Ia,SymbolNode:xn,SvgNode:si,PathNode:Ai,LineNode:N0},mt={version:Hv,render:sd,renderToString:Ov,ParseError:oe,SETTINGS_SCHEMA:D0,__parse:kv,__renderToDomTree:Cl,__renderToHTMLTree:Bv,__setFontMetrics:T4,__defineSymbol:u,__defineFunction:xe,__defineMacro:T,__domTree:Vv};function cs(i){const[e,t,n]=i;return[[0,-n,t],[n,0,-e],[-t,e,0]]}function ss(i,e){const t=[[0,0,0],[0,0,0],[0,0,0]];for(let n=0;n<3;n++)for(let r=0;r<3;r++)t[n][r]=i[n][0]*e[0][r]+i[n][1]*e[1][r]+i[n][2]*e[2][r];return t}function K0(i){return[[i[0][0],i[1][0],i[2][0]],[i[0][1],i[1][1],i[2][1]],[i[0][2],i[1][2],i[2][2]]]}function Gv(i,e){const t=i[0]*e,n=i[1]*e,r=i[2]*e,s=Math.hypot(t,n,r);if(s<1e-7){const x=cs([t,n,r]);return[[1+x[0][0],x[0][1],x[0][2]],[x[1][0],1+x[1][1],x[1][2]],[x[2][0],x[2][1],1+x[2][2]]]}const a=t/s,o=n/s,l=r/s,c=cs([a,o,l]),h=ss(c,c),d=Math.sin(s),m=1-Math.cos(s),_=[[1,0,0],[0,1,0],[0,0,1]];for(let x=0;x<3;x++)for(let g=0;g<3;g++)_[x][g]+=d*c[x][g]+m*h[x][g];return _}function Wv(i){return i[0][0]*(i[1][1]*i[2][2]-i[1][2]*i[2][1])-i[0][1]*(i[1][0]*i[2][2]-i[1][2]*i[2][0])+i[0][2]*(i[1][0]*i[2][1]-i[1][1]*i[2][0])}function qv(i,e,t,n){const r=i*.02,s=[e,t,n],a=cs(s),o=Gv(s,r),l=ss(a,o),c=ss(K0(o),l),h=ss(l,K0(o)),d=Wv(o);return{t:r,w:s,w_cross:a,R:o,R_dot:l,w_hat_cross:c,spatial_w_cross:h,detR:d}}function ea(i,e=3){return i.map(t=>"["+t.map(n=>{const r=n.toFixed(e);return(r==="-0.000"?"0.000":r).padStart(7," ")}).join("  ")+"]").join(`
`)}function Xv(i,e){const t=cs(i);return[[t[0][0],t[0][1],t[0][2],e[0]],[t[1][0],t[1][1],t[1][2],e[1]],[t[2][0],t[2][1],t[2][2],e[2]],[0,0,0,0]]}function Ah(i,e){const t=Array.from({length:4},()=>[0,0,0,0]);for(let n=0;n<4;n++)for(let r=0;r<4;r++){let s=0;for(let a=0;a<4;a++)s+=i[n][a]*e[a][r];t[n][r]=s}return t}function Yv(i){const e=[[i[0][0],i[0][1],i[0][2]],[i[1][0],i[1][1],i[1][2]],[i[2][0],i[2][1],i[2][2]]],t=[i[0][3],i[1][3],i[2][3]],n=K0(e),r=[-(n[0][0]*t[0]+n[0][1]*t[1]+n[0][2]*t[2]),-(n[1][0]*t[0]+n[1][1]*t[1]+n[1][2]*t[2]),-(n[2][0]*t[0]+n[2][1]*t[1]+n[2][2]*t[2])];return[[n[0][0],n[0][1],n[0][2],r[0]],[n[1][0],n[1][1],n[1][2],r[1]],[n[2][0],n[2][1],n[2][2],r[2]],[0,0,0,1]]}function jv(i,e,t){const n=i[0],r=i[1],s=i[2],a=e[0],o=e[1],l=e[2],c=Math.hypot(n*t,r*t,s*t);if(c<1e-7)return[[1,0,0,a*t],[0,1,0,o*t],[0,0,1,l*t],[0,0,0,1]];const h=Math.hypot(n,r,s),d=n/h,f=r/h,m=s/h,_=cs([d,f,m]),x=ss(_,_),g=Math.sin(c),p=Math.cos(c),b=[[1,0,0],[0,1,0],[0,0,1]];for(let U=0;U<3;U++)for(let E=0;E<3;E++)b[U][E]+=g*_[U][E]+(1-p)*x[U][E];const M=[[1,0,0],[0,1,0],[0,0,1]],A=(1-p)/c,F=(c-g)/c;for(let U=0;U<3;U++)for(let E=0;E<3;E++)M[U][E]+=A*_[U][E]+F*x[U][E];const R=[a*t,o*t,l*t],P=[M[0][0]*R[0]+M[0][1]*R[1]+M[0][2]*R[2],M[1][0]*R[0]+M[1][1]*R[1]+M[1][2]*R[2],M[2][0]*R[0]+M[2][1]*R[1]+M[2][2]*R[2]];return[[b[0][0],b[0][1],b[0][2],P[0]],[b[1][0],b[1][1],b[1][2],P[1]],[b[2][0],b[2][1],b[2][2],P[2]],[0,0,0,1]]}function $v(i,e,t,n,r,s,a){const o=i*.05,l=[e,t,n],c=[r,s,a],h=Xv(l,c),d=jv(l,c,o),f=Ah(d,h),m=Yv(d),_=Ah(f,m);return{t:o,w:l,v:c,se3_local:h,H:d,H_dot:f,H_inv:m,se3_global:_,origin:[d[0][3],d[1][3],d[2][3]]}}function ta(i,e=2){return i.map(t=>"["+t.map(n=>{const r=n.toFixed(e);return(r==="-0.00"||r==="-0.000"?"0.00":r).padStart(7," ")}).join("  ")+"]").join(`
`)}const na=1,yr=1;function Kv(i,e,t,n){const r=i*Math.PI/180,s=e*Math.PI/180,a=0,o=0,l=na*Math.cos(r),c=na*Math.sin(r),h=l+yr*Math.cos(r+s),d=c+yr*Math.sin(r+s),f=-na*Math.sin(r)-yr*Math.sin(r+s),m=-yr*Math.sin(r+s),_=na*Math.cos(r)+yr*Math.cos(r+s),x=yr*Math.cos(r+s),g=[[f,m],[_,x]],p=f*x-m*_,b=Math.abs(p)<.001,M=f*t+m*n,A=_*t+x*n,F=Math.hypot(M,A);return{theta1_deg:i,theta2_deg:e,dtheta1:t,dtheta2:n,t1:r,t2:s,j0:[a,o],j1:[l,c],j2:[h,d],J:g,det_J:p,isSingular:b,v:[M,A],speed:F}}function Zv(i){return i.map(e=>"["+e.map(t=>{const n=t.toFixed(3);return(n==="-0.000"?"0.000":n).padStart(7," ")}).join("  ")+"]").join(`
`)}const Aa=1,wr=1,_i=1;function Jv(i){const[e,t,n]=i,r=0,s=0,a=Aa*Math.cos(e),o=Aa*Math.sin(e),l=a+wr*Math.cos(e+t),c=o+wr*Math.sin(e+t),h=l+_i*Math.cos(e+t+n),d=c+_i*Math.sin(e+t+n);return[[r,s],[a,o],[l,c],[h,d]]}function Xo(i){const[e,t,n]=i,r=e+t,s=e+t+n,a=-Aa*Math.sin(e)-wr*Math.sin(r)-_i*Math.sin(s),o=-wr*Math.sin(r)-_i*Math.sin(s),l=-_i*Math.sin(s),c=Aa*Math.cos(e)+wr*Math.cos(r)+_i*Math.cos(s),h=wr*Math.cos(r)+_i*Math.cos(s),d=_i*Math.cos(s);return[[a,o,l],[c,h,d]]}function Qv(i){const e=[[i[0][0]*i[0][0]+i[0][1]*i[0][1]+i[0][2]*i[0][2],i[0][0]*i[1][0]+i[0][1]*i[1][1]+i[0][2]*i[1][2]],[i[1][0]*i[0][0]+i[1][1]*i[0][1]+i[1][2]*i[0][2],i[1][0]*i[1][0]+i[1][1]*i[1][1]+i[1][2]*i[1][2]]],t=e[0][0]*e[1][1]-e[0][1]*e[1][0];if(Math.abs(t)<1e-7)return[[i[0][0],i[1][0]],[i[0][1],i[1][1]],[i[0][2],i[1][2]]];const n=[[e[1][1]/t,-e[0][1]/t],[-e[1][0]/t,e[0][0]/t]];return[[i[0][0]*n[0][0]+i[1][0]*n[1][0],i[0][0]*n[0][1]+i[1][0]*n[1][1]],[i[0][1]*n[0][0]+i[1][1]*n[1][0],i[0][1]*n[0][1]+i[1][1]*n[1][1]],[i[0][2]*n[0][0]+i[1][2]*n[1][0],i[0][2]*n[0][1]+i[1][2]*n[1][1]]]}function Yo(i){const e=Qv(i),t=[[e[0][0]*i[0][0]+e[0][1]*i[1][0],e[0][0]*i[0][1]+e[0][1]*i[1][1],e[0][0]*i[0][2]+e[0][1]*i[1][2]],[e[1][0]*i[0][0]+e[1][1]*i[1][0],e[1][0]*i[0][1]+e[1][1]*i[1][1],e[1][0]*i[0][2]+e[1][1]*i[1][2]],[e[2][0]*i[0][0]+e[2][1]*i[1][0],e[2][0]*i[0][1]+e[2][1]*i[1][1],e[2][0]*i[0][2]+e[2][1]*i[1][2]]];return{N:[[1-t[0][0],-t[0][1],-t[0][2]],[-t[1][0],1-t[1][1],-t[1][2]],[-t[2][0],-t[2][1],1-t[2][2]]],J_pinv:e}}function e3(i,e,t,n=.04){let r=[...i],s=[0,0,0],a=Xo(r),{N:o,J_pinv:l}=Yo(a);for(let m=0;m<t;m++){a=Xo(r);const _=Yo(a);o=_.N,l=_.J_pinv,s=[o[0][0]*e[0]+o[0][1]*e[1]+o[0][2]*e[2],o[1][0]*e[0]+o[1][1]*e[1]+o[1][2]*e[2],o[2][0]*e[0]+o[2][1]*e[1]+o[2][2]*e[2]],r[0]+=s[0]*n,r[1]+=s[1]*n,r[2]+=s[2]*n}a=Xo(r);const c=Yo(a);o=c.N,l=c.J_pinv,s=[o[0][0]*e[0]+o[0][1]*e[1]+o[0][2]*e[2],o[1][0]*e[0]+o[1][1]*e[1]+o[1][2]*e[2],o[2][0]*e[0]+o[2][1]*e[1]+o[2][2]*e[2]];const h=[a[0][0]*s[0]+a[0][1]*s[1]+a[0][2]*s[2],a[1][0]*s[0]+a[1][1]*s[1]+a[1][2]*s[2]],d=Jv(r),f=Math.hypot(h[0],h[1]);return{q:r,q_deg:[r[0]*180/Math.PI,r[1]*180/Math.PI,r[2]*180/Math.PI],q0_dot:e,q_dot:s,J:a,J_pinv:l,N:o,v:h,endEffectorSpeed:f,j0:d[0],j1:d[1],j2:d[2],j3:d[3]}}function t3(i,e=3){return i.map(t=>"["+t.map(n=>{const r=n.toFixed(e);return(r==="-0.000"?"0.000":r).padStart(7," ")}).join("  ")+"]").join(`
`)}function Ch(i,e=3){return i.map(t=>"["+t.map(n=>{const r=n.toFixed(e);return(r==="-0.000"?"0.000":r).padStart(7," ")}).join("  ")+"]").join(`
`)}class n3{constructor(e){this.options=e,this.mode="SE3",this.isPlaying=!1,this.tabButtons=document.querySelectorAll(".tab-btn"),this.headerSubtitle=document.getElementById("header-subtitle"),this.viewportTitleText=document.getElementById("viewport-title-text"),this.sliderT=document.getElementById("slider-t"),this.sliderWx=document.getElementById("slider-wx"),this.sliderWy=document.getElementById("slider-wy"),this.sliderWz=document.getElementById("slider-wz"),this.sliderVx=document.getElementById("slider-vx"),this.sliderVy=document.getElementById("slider-vy"),this.sliderVz=document.getElementById("slider-vz"),this.valT=document.getElementById("val-t"),this.valWx=document.getElementById("val-wx"),this.valWy=document.getElementById("val-wy"),this.valWz=document.getElementById("val-wz"),this.valVx=document.getElementById("val-vx"),this.valVy=document.getElementById("val-vy"),this.valVz=document.getElementById("val-vz"),this.sec1Title=document.getElementById("sec1-title"),this.sec2Title=document.getElementById("sec2-title"),this.labelWx=document.getElementById("label-wx"),this.labelWy=document.getElementById("label-wy"),this.labelWz=document.getElementById("label-wz"),this.labelVx=document.getElementById("label-vx"),this.labelVy=document.getElementById("label-vy"),this.labelVz=document.getElementById("label-vz"),this.rowWz=document.getElementById("row-wz"),this.rowVx=document.getElementById("row-vx"),this.rowVy=document.getElementById("row-vy"),this.rowVz=document.getElementById("row-vz"),this.btnPlay=document.getElementById("btn-play"),this.btnReset=document.getElementById("btn-reset"),this.btnRecenter=document.getElementById("btn-recenter"),this.playText=document.getElementById("play-text"),this.playIcon=document.getElementById("play-icon"),this.presetsContainer=document.getElementById("presets-container"),this.ikMethodContainer=document.getElementById("ik-method-container"),this.selectIkMethod=document.getElementById("select-ik-method"),this.outM1=document.getElementById("out-m1"),this.outM2=document.getElementById("out-m2"),this.outM3=document.getElementById("out-m3"),this.outM4=document.getElementById("out-m4"),this.titleM1=document.getElementById("title-m1"),this.titleM2=document.getElementById("title-m2"),this.titleM3=document.getElementById("title-m3"),this.titleM4=document.getElementById("title-m4"),this.formulaM1=document.getElementById("formula-m1"),this.formulaM2=document.getElementById("formula-m2"),this.formulaM3=document.getElementById("formula-m3"),this.formulaM4=document.getElementById("formula-m4"),this.overlayTime=document.getElementById("overlay-time"),this.overlayStep=document.getElementById("overlay-step"),this.overlayOrigin=document.getElementById("overlay-origin"),this.chipPos=document.getElementById("chip-pos"),this.chipSingular=document.getElementById("chip-singular"),this.initKaTeX(),this.attachEventListeners(),this.setupHashRouting()}initKaTeX(){document.querySelectorAll(".katex-formula").forEach(e=>{const t=e.getAttribute("data-formula");t&&mt.render(t,e,{displayMode:!1,throwOnError:!1})}),document.querySelectorAll(".katex-block").forEach(e=>{const t=e.getAttribute("data-formula");t&&mt.render(t,e,{displayMode:!0,throwOnError:!1})})}setupHashRouting(){const e=()=>{const t=window.location.hash.toLowerCase();let n="SE3";t.includes("ik")?n="IK":t.includes("null")?n="NULLSPACE":t.includes("so3")?n="SO3":(t.includes("jacobian")||t.includes("planar")||t.includes("2dof"))&&(n="PLANAR2DOF"),this.tabButtons.forEach(r=>{r.getAttribute("data-mode")===n?r.classList.add("active"):r.classList.remove("active")}),this.mode!==n&&this.switchMode(n)};window.addEventListener("hashchange",e),e()}attachEventListeners(){const e=()=>{this.syncSliderLabels(),this.options.onParameterChange(this.getParams())};[this.sliderT,this.sliderWx,this.sliderWy,this.sliderWz,this.sliderVx,this.sliderVy,this.sliderVz].forEach(t=>{t.addEventListener("input",e)}),this.selectIkMethod.addEventListener("change",e),this.btnPlay.addEventListener("click",()=>{this.isPlaying=!this.isPlaying,this.updatePlayButtonUI(),this.options.onPlayStateChange(this.isPlaying)}),this.btnReset.addEventListener("click",()=>{this.setTimeStep(0),this.options.onResetTime()}),this.btnRecenter.addEventListener("click",()=>{this.options.onResetCamera()})}switchMode(e){this.mode=e,this.renderPresets(),e==="IK"?(this.viewportTitleText.textContent="3D Numerical IK Solvers Viewport",mt.render("\\text{Numerical Inverse Kinematics Solvers for 3-DOF Arm}",this.headerSubtitle,{throwOnError:!1}),document.querySelector(".transport-bar").style.display="flex",this.sliderT.closest(".slider-row").style.display="flex",this.ikMethodContainer.style.display="block",this.sec1Title.textContent="Target Position p_ref (m)",this.sec1Title.style.color="var(--accent-gold)",this.sec2Title.style.display="none",this.labelWx.innerHTML='<span class="legend-x">●</span> Target X (x<sub>ref</sub>)',this.labelWy.innerHTML='<span class="legend-y">●</span> Target Y (y<sub>ref</sub>)',this.labelWz.innerHTML='<span class="legend-z">●</span> Target Z (z<sub>ref</sub>)',this.rowWz.style.display="flex",this.rowVx.style.display="none",this.rowVy.style.display="none",this.rowVz.style.display="none",this.chipPos.style.display="none",this.chipSingular.style.display="none",this.sliderT.max=100,this.sliderT.value=0,this.sliderWx.min=-2.5,this.sliderWx.max=2.5,this.sliderWx.step=.1,this.sliderWx.value=1.2,this.sliderWy.min=-2.5,this.sliderWy.max=2.5,this.sliderWy.step=.1,this.sliderWy.value=-.2,this.sliderWz.min=0,this.sliderWz.max=3,this.sliderWz.step=.1,this.sliderWz.value=1.5,this.titleM1.textContent="1. Solver Iteration & Error",this.titleM2.textContent="2. Jacobian Matrix J(q)",this.titleM3.textContent="3. Determinant det(J)",this.titleM4.textContent="4. Joint Angles (q)",mt.render("\\mathbf{e} = \\mathbf{p}_{\\text{ref}} - \\mathbf{p}_k",this.formulaM1,{throwOnError:!1}),mt.render("J(\\mathbf{q}) \\in \\mathbb{R}^{3 \\times 3}",this.formulaM2,{throwOnError:!1}),mt.render("\\text{det}(J) = \\text{det3x3}(J)",this.formulaM3,{throwOnError:!1}),mt.render("\\mathbf{q} = [q_1, q_2, q_3]^T",this.formulaM4,{throwOnError:!1})):e==="NULLSPACE"?(this.ikMethodContainer.style.display="none",this.sliderT.max=500,this.viewportTitleText.textContent="3-DOF Null-Space Motion & Self-Reconfiguration Viewport",mt.render("\\text{Null-Space Projection \\& Self-Motion Kinematics } N = I - J^\\dagger J",this.headerSubtitle,{throwOnError:!1}),document.querySelector(".transport-bar").style.display="flex",this.sliderT.closest(".slider-row").style.display="flex",this.sec1Title.textContent="Initial Joint Angles q (deg)",this.sec1Title.style.color="var(--accent-gold)",this.sec2Title.textContent="Internal Joint Velocity Drive q0_dot (rad/s)",this.sec2Title.style.color="var(--accent-cyan)",this.sec2Title.style.display="block",this.labelWx.innerHTML='<span class="legend-x">●</span> Joint 1 (q<sub>1</sub>)',this.labelWy.innerHTML='<span class="legend-y">●</span> Joint 2 (q<sub>2</sub>)',this.labelWz.innerHTML='<span class="legend-z">●</span> Joint 3 (q<sub>3</sub>)',this.labelVx.innerHTML='<span class="legend-x">●</span> Drive 1 (y<sub>1</sub>)',this.labelVy.innerHTML='<span class="legend-y">●</span> Drive 2 (y<sub>2</sub>)',this.labelVz.innerHTML='<span class="legend-z">●</span> Drive 3 (y<sub>3</sub>)',this.rowWz.style.display="flex",this.rowVx.style.display="flex",this.rowVy.style.display="flex",this.rowVz.style.display="flex",this.chipPos.style.display="none",this.chipSingular.style.display="none",this.sliderWx.min=-180,this.sliderWx.max=180,this.sliderWx.step=1,this.sliderWx.value=45,this.sliderWy.min=-180,this.sliderWy.max=180,this.sliderWy.step=1,this.sliderWy.value=-90,this.sliderWz.min=-180,this.sliderWz.max=180,this.sliderWz.step=1,this.sliderWz.value=-45,this.sliderVx.min=-5,this.sliderVx.max=5,this.sliderVx.step=.1,this.sliderVx.value=0,this.sliderVy.min=-5,this.sliderVy.max=5,this.sliderVy.step=.1,this.sliderVy.value=3,this.sliderVz.min=-5,this.sliderVz.max=5,this.sliderVz.step=.1,this.sliderVz.value=0,this.titleM1.textContent="1. Joint State q & Null Drive",this.titleM2.textContent="2. Jacobian Matrix J(q)",this.titleM3.textContent="3. Null-Space Projector (N)",this.titleM4.textContent="4. Null Velocity & End-Effector Speed",mt.render("\\mathbf{q} = [q_1, q_2, q_3]^T",this.formulaM1,{throwOnError:!1}),mt.render("J(\\mathbf{q}) \\in \\mathbb{R}^{2 \\times 3}",this.formulaM2,{throwOnError:!1}),mt.render("N = I - J^\\dagger J",this.formulaM3,{throwOnError:!1}),mt.render("\\dot{\\mathbf{q}}_{\\text{null}} = N \\dot{\\mathbf{q}}_0 \\implies \\mathbf{v} = \\mathbf{0}",this.formulaM4,{throwOnError:!1})):e==="PLANAR2DOF"?(this.ikMethodContainer.style.display="none",this.sliderT.max=500,this.viewportTitleText.textContent="Jacobian Matrix & 2-DOF Planar Viewport",mt.render("\\text{2-DOF Planar Arm Jacobian Matrix } J(\\mathbf{q})",this.headerSubtitle,{throwOnError:!1}),document.querySelector(".transport-bar").style.display="none",this.sliderT.closest(".slider-row").style.display="none",this.sec1Title.textContent="Joint Position Angles q (deg)",this.sec1Title.style.color="var(--accent-gold)",this.sec2Title.textContent="Joint Angular Velocities q_dot (rad/s)",this.sec2Title.style.color="var(--accent-cyan)",this.sec2Title.style.display="block",this.labelWx.innerHTML='<span class="legend-x">●</span> Theta 1 (&theta;<sub>1</sub>)',this.labelWy.innerHTML='<span class="legend-y">●</span> Theta 2 (&theta;<sub>2</sub>)',this.labelVx.innerHTML='<span class="legend-x">●</span> dTheta 1 (d&theta;<sub>1</sub>)',this.labelVy.innerHTML='<span class="legend-y">●</span> dTheta 2 (d&theta;<sub>2</sub>)',this.rowWz.style.display="none",this.rowVx.style.display="flex",this.rowVy.style.display="flex",this.rowVz.style.display="none",this.chipPos.style.display="none",this.sliderWx.min=-180,this.sliderWx.max=180,this.sliderWx.step=1,this.sliderWx.value=30,this.sliderWy.min=-180,this.sliderWy.max=180,this.sliderWy.step=1,this.sliderWy.value=45,this.sliderVx.min=-2,this.sliderVx.max=2,this.sliderVx.step=.1,this.sliderVx.value=0,this.sliderVy.min=-2,this.sliderVy.max=2,this.sliderVy.step=.1,this.sliderVy.value=1,this.titleM1.textContent="1. Joint State q & q_dot",this.titleM2.textContent="2. Jacobian Matrix J(q)",this.titleM3.textContent="3. Determinant det(J)",this.titleM4.textContent="4. End-Effector Velocity v",mt.render("\\mathbf{q} = [\\theta_1, \\theta_2]^T",this.formulaM1,{throwOnError:!1}),mt.render("J(\\mathbf{q}) = \\partial f / \\partial \\mathbf{q}",this.formulaM2,{throwOnError:!1}),mt.render("\\text{det}(J) = L_1 L_2 \\sin\\theta_2",this.formulaM3,{throwOnError:!1}),mt.render("\\mathbf{v} = J(\\mathbf{q}) \\dot{\\mathbf{q}}",this.formulaM4,{throwOnError:!1})):e==="SE3"?(this.ikMethodContainer.style.display="none",this.sliderT.max=500,this.viewportTitleText.textContent="SE(3) 3D Pose & Twist Viewport",mt.render("\\text{SE}(3) \\text{ Rigid Body Pose \\& Twist Kinematics}",this.headerSubtitle,{throwOnError:!1}),document.querySelector(".transport-bar").style.display="flex",this.sliderT.closest(".slider-row").style.display="flex",this.sec1Title.textContent="Angular Velocity ω (rad/s)",this.sec1Title.style.color="var(--accent-gold)",this.sec2Title.textContent="Linear Velocity v (m/s)",this.sec2Title.style.color="var(--accent-cyan)",this.sec2Title.style.display="block",this.labelWx.innerHTML='<span class="legend-x">●</span> Omega X (&omega;<sub>x</sub>)',this.labelWy.innerHTML='<span class="legend-y">●</span> Omega Y (&omega;<sub>y</sub>)',this.labelWz.innerHTML='<span class="legend-z">●</span> Omega Z (&omega;<sub>z</sub>)',this.labelVx.innerHTML='<span class="legend-x">●</span> Vel X (v<sub>x</sub>)',this.labelVy.innerHTML='<span class="legend-y">●</span> Vel Y (v<sub>y</sub>)',this.labelVz.innerHTML='<span class="legend-z">●</span> Vel Z (v<sub>z</sub>)',this.rowWz.style.display="flex",this.rowVx.style.display="flex",this.rowVy.style.display="flex",this.rowVz.style.display="flex",this.chipPos.style.display="block",this.chipSingular.style.display="none",this.sliderWx.min=-3,this.sliderWx.max=3,this.sliderWx.step=.1,this.sliderWx.value=0,this.sliderWy.min=-3,this.sliderWy.max=3,this.sliderWy.step=.1,this.sliderWy.value=0,this.sliderWz.min=-3,this.sliderWz.max=3,this.sliderWz.step=.1,this.sliderWz.value=1,this.sliderVx.min=-3,this.sliderVx.max=3,this.sliderVx.step=.1,this.sliderVx.value=1,this.sliderVy.min=-3,this.sliderVy.max=3,this.sliderVy.step=.1,this.sliderVy.value=0,this.sliderVz.min=-3,this.sliderVz.max=3,this.sliderVz.step=.1,this.sliderVz.value=0,this.titleM1.textContent="1. Pose Matrix (H)",this.titleM2.textContent="2. Rate of Change (̇H)",this.titleM3.textContent="3. Local se(3) Twist (H⁻¹ ̇H)",this.titleM4.textContent="4. Global se(3) Twist (̇H H⁻¹)",mt.render("H(t) = \\exp(\\mathcal{S} t)",this.formulaM1,{throwOnError:!1}),mt.render("\\dot{H} = H \\mathcal{S}_{\\text{local}}",this.formulaM2,{throwOnError:!1}),mt.render("\\mathcal{S}_{\\text{local}} = H^{-1} \\dot{H}",this.formulaM3,{throwOnError:!1}),mt.render("\\mathcal{S}_{\\text{global}} = \\dot{H} H^{-1}",this.formulaM4,{throwOnError:!1})):(this.ikMethodContainer.style.display="none",this.sliderT.max=500,this.viewportTitleText.textContent="SO(3) 3D Kinematics Viewport",mt.render("\\text{SO}(3) \\text{ Lie Algebra \\& 3D Rotation Kinematics}",this.headerSubtitle,{throwOnError:!1}),document.querySelector(".transport-bar").style.display="flex",this.sliderT.closest(".slider-row").style.display="flex",this.sec1Title.textContent="Angular Velocity ω (rad/s)",this.sec1Title.style.color="var(--accent-gold)",this.sec2Title.style.display="none",this.labelWx.innerHTML='<span class="legend-x">●</span> Omega X (&omega;<sub>x</sub>)',this.labelWy.innerHTML='<span class="legend-y">●</span> Omega Y (&omega;<sub>y</sub>)',this.labelWz.innerHTML='<span class="legend-z">●</span> Omega Z (&omega;<sub>z</sub>)',this.rowWz.style.display="flex",this.rowVx.style.display="none",this.rowVy.style.display="none",this.rowVz.style.display="none",this.chipPos.style.display="none",this.chipSingular.style.display="none",this.sliderWx.min=-3,this.sliderWx.max=3,this.sliderWx.step=.1,this.sliderWx.value=1,this.sliderWy.min=-3,this.sliderWy.max=3,this.sliderWy.step=.1,this.sliderWy.value=0,this.sliderWz.min=-3,this.sliderWz.max=3,this.sliderWz.step=.1,this.sliderWz.value=0,this.titleM1.textContent="1. Rotation Matrix (R)",this.titleM2.textContent="2. Rate of Change (̇R)",this.titleM3.textContent="3. Spatial Velocity [ω]ₓ",this.titleM4.textContent="4. Body Velocity [ω̂]ₓ",mt.render("R(t) = \\exp([\\boldsymbol{\\omega}]_\\times t)",this.formulaM1,{throwOnError:!1}),mt.render("\\dot{R} = [\\boldsymbol{\\omega}]_\\times R",this.formulaM2,{throwOnError:!1}),mt.render("[\\boldsymbol{\\omega}]_\\times = \\dot{R} R^T",this.formulaM3,{throwOnError:!1}),mt.render("[\\hat{\\boldsymbol{\\omega}}]_\\times = R^T \\dot{R}",this.formulaM4,{throwOnError:!1})),this.syncSliderLabels(),this.options.onModeChange(e),this.options.onParameterChange(this.getParams())}renderPresets(){let e=[];this.mode==="IK"?e=[{name:"Reachable (1.2, -0.2, 1.5)",wx:1.2,wy:-.2,wz:1.5},{name:"High Reach (0.5, 0.5, 2.2)",wx:.5,wy:.5,wz:2.2},{name:"Near Singularity (0.0, 0.0, 2.8)",wx:0,wy:0,wz:2.8},{name:"Out of Reach (2.5, 2.5, 3.0)",wx:2.5,wy:2.5,wz:3}]:this.mode==="NULLSPACE"?e=[{name:"Joint 2 Drive (y=[0, 3, 0])",wx:45,wy:-90,wz:-45,vx:0,vy:3,vz:0},{name:"Joint 1 Drive (y=[3, 0, 0])",wx:45,wy:-90,wz:-45,vx:3,vy:0,vz:0},{name:"Joint 3 Drive (y=[0, 0, 3])",wx:45,wy:-90,wz:-45,vx:0,vy:0,vz:3},{name:"Symmetric Drive (y=[2, -4, 2])",wx:30,wy:-60,wz:-30,vx:2,vy:-4,vz:2}]:this.mode==="PLANAR2DOF"?e=[{name:"Default Pose",t1:30,t2:45,dt1:0,dt2:1},{name:"Fully Extended (Singular)",t1:0,t2:0,dt1:.5,dt2:0},{name:"Folded Back (Singular)",t1:45,t2:180,dt1:0,dt2:.5},{name:"Right-Angle Elbow",t1:0,t2:90,dt1:1,dt2:-1},{name:"Dual Joint Drive",t1:-45,t2:60,dt1:1,dt2:1.5}]:this.mode==="SE3"?e=[{name:"Forward Screw",wx:0,wy:0,wz:1,vx:1,vy:0,vz:0},{name:"Helical Ascent",wx:0,wy:0,wz:1.5,vx:.5,vy:0,vz:1},{name:"Pure Linear",wx:0,wy:0,wz:0,vx:1.5,vy:0,vz:0},{name:"3D Spiral Drive",wx:.5,wy:1,wz:1.5,vx:1,vy:.5,vz:1},{name:"Static (Zero)",wx:0,wy:0,wz:0,vx:0,vy:0,vz:0}]:e=[{name:"Pure X Roll",wx:1,wy:0,wz:0,vx:0,vy:0,vz:0},{name:"Pure Y Pitch",wx:0,wy:1,wz:0,vx:0,vy:0,vz:0},{name:"Pure Z Yaw",wx:0,wy:0,wz:1,vx:0,vy:0,vz:0},{name:"Coupled Precession",wx:1,wy:1.5,wz:2,vx:0,vy:0,vz:0},{name:"Static (Zero)",wx:0,wy:0,wz:0,vx:0,vy:0,vz:0}],this.presetsContainer.innerHTML="",e.forEach((t,n)=>{const r=document.createElement("button");r.className=`btn btn-preset ${n===0?"active":""}`,r.textContent=t.name,r.addEventListener("click",()=>{this.presetsContainer.querySelectorAll(".btn-preset").forEach(s=>s.classList.remove("active")),r.classList.add("active"),this.mode==="IK"?(this.sliderWx.value=t.wx,this.sliderWy.value=t.wy,this.sliderWz.value=t.wz):this.mode==="NULLSPACE"?(this.sliderWx.value=t.wx,this.sliderWy.value=t.wy,this.sliderWz.value=t.wz,this.sliderVx.value=t.vx,this.sliderVy.value=t.vy,this.sliderVz.value=t.vz):this.mode==="PLANAR2DOF"?(this.sliderWx.value=t.t1,this.sliderWy.value=t.t2,this.sliderVx.value=t.dt1,this.sliderVy.value=t.dt2):(this.sliderWx.value=t.wx,this.sliderWy.value=t.wy,this.sliderWz.value=t.wz,this.sliderVx.value=t.vx,this.sliderVy.value=t.vy,this.sliderVz.value=t.vz),this.syncSliderLabels(),this.options.onParameterChange(this.getParams())}),this.presetsContainer.appendChild(r)})}syncSliderLabels(){this.valT.textContent=this.sliderT.value,this.mode==="IK"?(this.valWx.textContent=`${parseFloat(this.sliderWx.value).toFixed(2)} m`,this.valWy.textContent=`${parseFloat(this.sliderWy.value).toFixed(2)} m`,this.valWz.textContent=`${parseFloat(this.sliderWz.value).toFixed(2)} m`):this.mode==="NULLSPACE"?(this.valWx.textContent=`${parseInt(this.sliderWx.value,10)}°`,this.valWy.textContent=`${parseInt(this.sliderWy.value,10)}°`,this.valWz.textContent=`${parseInt(this.sliderWz.value,10)}°`,this.valVx.textContent=`${parseFloat(this.sliderVx.value).toFixed(1)} rad/s`,this.valVy.textContent=`${parseFloat(this.sliderVy.value).toFixed(1)} rad/s`,this.valVz.textContent=`${parseFloat(this.sliderVz.value).toFixed(1)} rad/s`):this.mode==="PLANAR2DOF"?(this.valWx.textContent=`${parseInt(this.sliderWx.value,10)}°`,this.valWy.textContent=`${parseInt(this.sliderWy.value,10)}°`,this.valVx.textContent=`${parseFloat(this.sliderVx.value).toFixed(2)} rad/s`,this.valVy.textContent=`${parseFloat(this.sliderVy.value).toFixed(2)} rad/s`):(this.valWx.textContent=`${parseFloat(this.sliderWx.value).toFixed(1)} rad/s`,this.valWy.textContent=`${parseFloat(this.sliderWy.value).toFixed(1)} rad/s`,this.valWz.textContent=`${parseFloat(this.sliderWz.value).toFixed(1)} rad/s`,this.valVx.textContent=`${parseFloat(this.sliderVx.value).toFixed(1)} m/s`,this.valVy.textContent=`${parseFloat(this.sliderVy.value).toFixed(1)} m/s`,this.valVz.textContent=`${parseFloat(this.sliderVz.value).toFixed(1)} m/s`)}updatePlayButtonUI(){this.isPlaying?(this.playText.textContent="Pause",this.playIcon.innerHTML='<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',this.btnPlay.classList.add("active")):(this.playText.textContent="Play",this.playIcon.innerHTML='<polygon points="5 3 19 12 5 21 5 3"></polygon>',this.btnPlay.classList.remove("active"))}getParams(){return{tStep:parseInt(this.sliderT.value,10),ikMethod:this.selectIkMethod?this.selectIkMethod.value:"Newton-Raphson",wx:parseFloat(this.sliderWx.value),wy:parseFloat(this.sliderWy.value),wz:parseFloat(this.sliderWz.value),vx:parseFloat(this.sliderVx.value),vy:parseFloat(this.sliderVy.value),vz:parseFloat(this.sliderVz.value)}}setTimeStep(e){this.sliderT.value=e,this.valT.textContent=e}renderState(e){if(this.overlayTime.textContent=e.t?e.t.toFixed(2):(parseInt(this.sliderT.value,10)*.05).toFixed(2),this.overlayStep.textContent=this.sliderT.value,this.mode==="IK"){const{p_ref:t,currentIter:n,maxIter:r,errorNorm:s,p_k:a,J:o,det_J:l,q_deg:c,status:h,isFailed:d}=e;this.chipSingular.style.display=d?"block":"none",d&&(this.chipSingular.textContent="⚠️ SOLVER STUCK / SINGULAR"),this.outM1.textContent=`Iteration Step: ${n} / ${r}
Target p_ref: [${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)}]
Current p_k:  [${a[0].toFixed(2)}, ${a[1].toFixed(2)}, ${a[2].toFixed(2)}]
Error Norm:   ${s.toFixed(4)}`,this.outM2.textContent=Ch(o),this.outM3.textContent=`det(J(q)): ${l.toFixed(5)}

Status:
${h}`,this.outM4.textContent=`Joint Angles (q):
  q1 (Yaw):   ${c[0].toFixed(1)}°
  q2 (Pitch): ${c[1].toFixed(1)}°
  q3 (Elbow): ${c[2].toFixed(1)}°`}else if(this.mode==="NULLSPACE"){const{q_deg:t,q0_dot:n,q_dot:r,J:s,N:a,v:o,endEffectorSpeed:l}=e;this.outM1.textContent=`Joint Angles (q):   [${t[0].toFixed(1)}°, ${t[1].toFixed(1)}°, ${t[2].toFixed(1)}°]
Internal Drive (y): [${n[0].toFixed(1)}, ${n[1].toFixed(1)}, ${n[2].toFixed(1)}] rad/s`,this.outM2.textContent=t3(s),this.outM3.textContent=Ch(a),this.outM4.textContent=`q_dot_null = [${r[0].toFixed(3)}, ${r[1].toFixed(3)}, ${r[2].toFixed(3)}]
v = J @ q_dot = [${o[0].toFixed(4)}, ${o[1].toFixed(4)}]
Speed = ${l.toFixed(4)} m/s (FROZEN!)`}else if(this.mode==="PLANAR2DOF"){const{theta1_deg:t,theta2_deg:n,dtheta1:r,dtheta2:s,J:a,det_J:o,isSingular:l,v:c,j2:h}=e;l?this.chipSingular.style.display="block":this.chipSingular.style.display="none",this.outM1.textContent=`Joint Angles (q):   [${t}°, ${n}°]
Joint Vels (q_dot): [${r.toFixed(2)}, ${s.toFixed(2)}] rad/s
End-Effector (p_E): [${h[0].toFixed(2)}, ${h[1].toFixed(2)}] m`,this.outM2.textContent=Zv(a),this.outM3.textContent=`det(J(q)): ${o.toFixed(3)}
Status: ${l?"⚠️ SINGULAR CONFIG":"Normal Configuration"}`,this.outM4.textContent=`v_x = ${c[0].toFixed(3)} m/s
v_y = ${c[1].toFixed(3)} m/s
Speed = ${e.speed.toFixed(3)} m/s`}else if(this.mode==="SE3"){const[t,n,r]=e.origin;this.overlayOrigin.textContent=`[${t.toFixed(2)}, ${n.toFixed(2)}, ${r.toFixed(2)}]`,this.outM1.textContent=ta(e.H),this.outM2.textContent=ta(e.H_dot),this.outM3.textContent=ta(e.se3_local),this.outM4.textContent=ta(e.se3_global)}else this.outM1.textContent=ea(e.R),this.outM2.textContent=ea(e.R_dot),this.outM3.textContent=ea(e.w_cross),this.outM4.textContent=ea(e.w_hat_cross)}}const jo=1,$i=1,qi=1;function Z0(i){const[e,t,n]=i,r=$i*Math.cos(t),s=$i*Math.cos(t)+qi*Math.cos(t+n),a=0,o=0,l=0,c=0,h=0,d=jo,f=Math.cos(e)*r,m=Math.sin(e)*r,_=jo+$i*Math.sin(t),x=Math.cos(e)*s,g=Math.sin(e)*s,p=jo+$i*Math.sin(t)+qi*Math.sin(t+n);return{p_k:[x,g,p],pts:[[a,o,l],[c,h,d],[f,m,_],[x,g,p]]}}function od(i){const[e,t,n]=i,r=$i*Math.cos(t)+qi*Math.cos(t+n),s=-$i*Math.sin(t)-qi*Math.sin(t+n),a=-qi*Math.sin(t+n),o=-Math.sin(e)*r,l=Math.cos(e)*s,c=Math.cos(e)*a,h=Math.cos(e)*r,d=Math.sin(e)*s,f=Math.sin(e)*a,m=0,_=$i*Math.cos(t)+qi*Math.cos(t+n),x=qi*Math.cos(t+n);return[[o,l,c],[h,d,f],[m,_,x]]}function ld(i){return i[0][0]*(i[1][1]*i[2][2]-i[1][2]*i[2][1])-i[0][1]*(i[1][0]*i[2][2]-i[1][2]*i[2][0])+i[0][2]*(i[1][0]*i[2][1]-i[1][1]*i[2][0])}function $o(i){const e=ld(i);if(Math.abs(e)<1e-9)throw new Error("Singular matrix");const t=1/e;return[[(i[1][1]*i[2][2]-i[1][2]*i[2][1])*t,(i[0][2]*i[2][1]-i[0][1]*i[2][2])*t,(i[0][1]*i[1][2]-i[0][2]*i[1][1])*t],[(i[1][2]*i[2][0]-i[1][0]*i[2][2])*t,(i[0][0]*i[2][2]-i[0][2]*i[2][0])*t,(i[0][2]*i[1][0]-i[0][0]*i[1][2])*t],[(i[1][0]*i[2][1]-i[1][1]*i[2][0])*t,(i[0][1]*i[2][0]-i[0][0]*i[2][1])*t,(i[0][0]*i[1][1]-i[0][1]*i[1][0])*t]]}function Ko(i){return[[i[0][0],i[1][0],i[2][0]],[i[0][1],i[1][1],i[2][1]],[i[0][2],i[1][2],i[2][2]]]}function ia(i,e){const t=[[0,0,0],[0,0,0],[0,0,0]];for(let n=0;n<3;n++)for(let r=0;r<3;r++)t[n][r]=i[n][0]*e[0][r]+i[n][1]*e[1][r]+i[n][2]*e[2][r];return t}function ra(i,e){return[i[0][0]*e[0]+i[0][1]*e[1]+i[0][2]*e[2],i[1][0]*e[0]+i[1][1]*e[1]+i[1][2]*e[2],i[2][0]*e[0]+i[2][1]*e[1]+i[2][2]*e[2]]}function i3(i,e,t=100){let n=[Math.PI/4,Math.PI/4,-Math.PI/4];const r=[[...n]],s=.2,a=.1;let o=null;for(let l=0;l<t;l++){const{p_k:c}=Z0(n),h=[e[0]-c[0],e[1]-c[1],e[2]-c[2]];if(Math.hypot(h[0],h[1],h[2])<.001){o===null&&(o=l);break}const f=od(n);let m=[0,0,0];try{if(i==="Newton-Raphson"){const x=$o(f);m=ra(x,h)}else if(i==="Gradient (Steepest)"){const x=Ko(f),g=ra(x,h);m=[s*g[0],s*g[1],s*g[2]]}else if(i==="Gauss-Newton"){const x=Ko(f),g=ia(x,f),p=$o(g),b=ia(p,x);m=ra(b,h)}else if(i==="Levenberg-Marquardt"){const x=Ko(f),g=ia(x,f),p=[[g[0][0]+a,g[0][1],g[0][2]],[g[1][0],g[1][1]+a,g[1][2]],[g[2][0],g[2][1],g[2][2]+a]],b=$o(p),M=ia(b,x);m=ra(M,h)}}catch{break}const _=Math.hypot(m[0],m[1],m[2]);_>Math.PI&&(m=[m[0]/_*Math.PI,m[1]/_*Math.PI,m[2]/_*Math.PI]),n=[n[0]+m[0],n[1]+m[1],n[2]+m[2]],r.push([...n])}return{history_q:r,converged_at:o}}function r3(i,e,t,n=100){const{history_q:r,converged_at:s}=i3(i,e,n),a=r.length-1,o=Math.min(t,a),l=r[o],{p_k:c,pts:h}=Z0(l),d=od(l),f=ld(d),m=[e[0]-c[0],e[1]-c[1],e[2]-c[2]],_=Math.hypot(m[0],m[1],m[2]);let x="",g=!1,p=!1;s!==null?(x=`Converged in ${s} iterations.`,g=!0):o===a&&_>.001?(x="Failed / Stuck (Check Singularity)",p=!0):x="Searching...";const b=[];for(let M=0;M<=o;M++){const{p_k:A}=Z0(r[M]);b.push(A)}return{method:i,p_ref:e,currentIter:o,maxIter:a,q:l,q_deg:[l[0]*180/Math.PI,l[1]*180/Math.PI,l[2]*180/Math.PI],p_k:c,pts:h,J:d,det_J:f,errorNorm:_,converged_at:s,status:x,isConverged:g,isFailed:p,trail:b}}class s3{constructor(){this.container=document.getElementById("canvas-container"),this.viewport=new qg(this.container),this.mode="SE3",this.isPlaying=!1,this.lastFrameTime=performance.now(),this.accumulatedTime=0,this.ui=new n3({onModeChange:e=>this.onModeChange(e),onParameterChange:e=>this.onParameterChange(e),onPlayStateChange:e=>this.onPlayStateChange(e),onResetTime:()=>this.onResetTime(),onResetCamera:()=>this.onResetCamera()}),this.mode=this.ui.mode,this.viewport.setMode(this.mode),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate),this.updateState(!0)}onModeChange(e){this.mode=e,this.viewport.setMode(e),this.updateState(!0)}onParameterChange(e){this.updateState(!1)}onPlayStateChange(e){this.isPlaying=e}onResetTime(){this.ui.setTimeStep(0),this.updateState(!0)}onResetCamera(){this.viewport.resetCamera()}updateState(e=!1){if(!this.ui)return;const t=this.ui.getParams();if(this.mode==="IK"){const n=[t.wx,t.wy,t.wz],r=r3(t.ikMethod||"Newton-Raphson",n,t.tStep,100);this.viewport.updateIK(r),this.ui.renderState(r)}else if(this.mode==="NULLSPACE"){const n=[t.wx*Math.PI/180,t.wy*Math.PI/180,t.wz*Math.PI/180],r=[t.vx,t.vy,t.vz],s=e3(n,r,t.tStep,.04);this.viewport.updateNullSpace(s,e),this.ui.renderState(s)}else if(this.mode==="PLANAR2DOF"){const n=Kv(t.wx,t.wy,t.vx,t.vy);n.t=0,this.viewport.updatePlanar2DOF(n,e),this.ui.renderState(n)}else if(this.mode==="SE3"){const n=$v(t.tStep,t.wx,t.wy,t.wz,t.vx,t.vy,t.vz);this.viewport.updateSE3(n.H,n.w,n.v,e),this.ui.renderState(n)}else{const n=qv(t.tStep,t.wx,t.wy,t.wz);this.viewport.updateSO3(n.R,n.w,e),this.ui.renderState(n)}}animate(e){requestAnimationFrame(this.animate);const t=(e-this.lastFrameTime)/1e3;if(this.lastFrameTime=e,this.isPlaying&&(this.accumulatedTime+=t,this.accumulatedTime>=.04)){this.accumulatedTime=0;let n=parseInt(this.ui.sliderT.value,10);const r=this.mode==="IK"?101:501;n=(n+1)%r,this.ui.setTimeStep(n),this.updateState(!1)}this.viewport.render()}}document.addEventListener("DOMContentLoaded",()=>{new s3});
//# sourceMappingURL=index-BkmdIgNk.js.map
