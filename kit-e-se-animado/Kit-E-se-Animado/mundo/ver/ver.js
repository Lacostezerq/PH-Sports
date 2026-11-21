(()=>{var _p=Object.defineProperty;var yp=(n,t)=>{for(var e in t)_p(n,e,{get:t[e],enumerable:!0})};var fh="170",Rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vp=0,_u=1,Ep=2;var Sd=1,ph=2,Si=3,ji=0,tn=1,me=2,fi=0,sr=1,ta=2,yu=3,vu=4,Mp=5,_s=100,xp=101,Ap=102,bp=103,Sp=104,Tp=200,wp=201,Rp=202,Cp=203,Xl=204,ql=205,Pp=206,Fp=207,Ip=208,Dp=209,Lp=210,Up=211,Np=212,Bp=213,Op=214,Yl=0,Zl=1,$l=2,lr=3,Jl=4,Kl=5,jl=6,Ql=7,Td=0,Hp=1,zp=2,pi=0,kp=1,Gp=2,Vp=3,Wp=4,Xp=5,qp=6,Yp=7;var wd=300,cr=301,hr=302,tc=303,ec=304,Ca=306,Sn=1e3,Es=1001,nc=1002,yn=1003,Zp=1004;var bo=1005;var di=1006,dl=1007;var Ms=1008;var Ci=1009,Rd=1010,Cd=1011,$r=1012,mh=1013,Pi=1014,Ti=1015,Rn=1016,gh=1017,_h=1018,ur=1020,Pd=35902,Fd=1021,Id=1022,Un=1023,Dd=1024,Ld=1025,rr=1026,dr=1027,Ud=1028,yh=1029,Nd=1030,vh=1031;var Eh=1033,$o=33776,Jo=33777,Ko=33778,jo=33779,ic=35840,sc=35841,rc=35842,oc=35843,ac=36196,lc=37492,cc=37496,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,_c=37815,yc=37816,vc=37817,Ec=37818,Mc=37819,xc=37820,Ac=37821,Qo=36492,bc=36494,Sc=36495,Bd=36283,Tc=36284,wc=36285,Rc=36286;var ea=2300,Cc=2301,fl=2302,Eu=2400,Mu=2401,xu=2402;var $p=3200,Jp=3201;var Od=0,Kp=1,Ji="",Qe="srgb",es="srgb-linear",Pa="linear",Ae="srgb";var ks=7680;var Au=519,jp=512,Qp=513,tm=514,Hd=515,em=516,nm=517,im=518,sm=519,bu=35044;var Su="300 es",wi=2e3,na=2001,Fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=1234567,Wr=Math.PI/180,Jr=180/Math.PI;function Ps(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function qe(n,t,e){return Math.max(t,Math.min(e,n))}function Mh(n,t){return(n%t+t)%t}function rm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function om(n,t,e){return n!==t?(e-n)/(t-n):0}function Xr(n,t,e){return(1-e)*n+e*t}function am(n,t,e,i){return Xr(n,t,1-Math.exp(-e*i))}function lm(n,t=1){return t-Math.abs(Mh(n,t*2)-t)}function cm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function hm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function um(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dm(n,t){return n+Math.random()*(t-n)}function fm(n){return n*(.5-Math.random())}function pm(n){n!==void 0&&(Tu=n);let t=Tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mm(n){return n*Wr}function gm(n){return n*Jr}function _m(n){return(n&n-1)===0&&n!==0}function ym(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Em(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function er(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var zd={DEG2RAD:Wr,RAD2DEG:Jr,generateUUID:Ps,clamp:qe,euclideanModulo:Mh,mapLinear:rm,inverseLerp:om,lerp:Xr,damp:am,pingpong:lm,smoothstep:cm,smootherstep:hm,randInt:um,randFloat:dm,randFloatSpread:fm,seededRandom:pm,degToRad:mm,radToDeg:gm,isPowerOfTwo:_m,ceilPowerOfTwo:ym,floorPowerOfTwo:vm,setQuaternionFromProperEuler:Em,normalize:gn,denormalize:er},at=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],E=s[1],v=s[4],_=s[7],M=s[2],A=s[5],b=s[8];return r[0]=o*y+a*E+l*M,r[3]=o*m+a*v+l*A,r[6]=o*f+a*_+l*b,r[1]=c*y+h*E+u*M,r[4]=c*m+h*v+u*A,r[7]=c*f+h*_+u*b,r[2]=d*y+p*E+g*M,r[5]=d*m+p*v+g*A,r[8]=d*f+p*_+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pl.makeScale(t,e)),this}rotate(t){return this.premultiply(pl.makeRotation(-t)),this}translate(t,e){return this.premultiply(pl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pl=new ie;function kd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mm(){let n=ia("canvas");return n.style.display="block",n}var wu={};function Gr(n){n in wu||(wu[n]=!0,console.warn(n))}function xm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Am(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bm(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var pe={enabled:!0,workingColorSpace:es,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ae&&(n.r=Ri(n.r),n.g=Ri(n.g),n.b=Ri(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ae&&(n.r=or(n.r),n.g=or(n.g),n.b=or(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?Pa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ru=[.64,.33,.3,.6,.15,.06],Cu=[.2126,.7152,.0722],Pu=[.3127,.329],Fu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[es]:{primaries:Ru,whitePoint:Pu,transfer:Pa,toXYZ:Fu,fromXYZ:Iu,luminanceCoefficients:Cu,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:Ru,whitePoint:Pu,transfer:Ae,toXYZ:Fu,fromXYZ:Iu,luminanceCoefficients:Cu,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});var Gs,Pc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gs===void 0&&(Gs=ia("canvas")),Gs.width=t.width,Gs.height=t.height;let i=Gs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ia("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ri(e[i]/255)*255):e[i]=Ri(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sm=0,sa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ml(s[o].image)):r.push(ml(s[o]))}else r=ml(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tm=0,Tn=class n extends Fi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Es,s=Es,r=di,o=Ms,a=Un,l=Ci,c=n.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Ps(),this.name="",this.source=new sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sn:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sn:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=wd;Tn.DEFAULT_ANISOTROPY=1;var be=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(p+1)/2,M=(f+1)/2,A=(h+d)/4,b=(u+y)/4,C=(g+m)/4;return v>_&&v>M?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=b/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=C/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=b/r,s=C/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends Fi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new sa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Fc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ra=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*y,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let M=Math.sqrt(v),A=Math.atan2(M,f*E);m=Math.sin(m*A)/M,a=Math.sin(a*A)/M}let _=a*E;if(l=l*m+d*_,c=c*m+p*_,h=h*m+g*_,u=u*m+y*_,m===1-a){let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Du.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return gl.copy(this).projectOnVector(t),this.sub(gl)}reflect(t){return this.sub(gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gl=new O,Du=new ai,xs=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),To.subVectors(this.max,Br),Vs.subVectors(t.a,Br),Ws.subVectors(t.b,Br),Xs.subVectors(t.c,Br),Wi.subVectors(Ws,Vs),Xi.subVectors(Xs,Ws),hs.subVectors(Vs,Xs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-hs.z,hs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,hs.z,0,-hs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-hs.y,hs.x,0];return!_l(e,Vs,Ws,Xs,To)||(e=[1,0,0,0,1,0,0,0,1],!_l(e,Vs,Ws,Xs,To))?!1:(wo.crossVectors(Wi,Xi),e=[wo.x,wo.y,wo.z],_l(e,Vs,Ws,Xs,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ei=[new O,new O,new O,new O,new O,new O,new O,new O],ii=new O,So=new xs,Vs=new O,Ws=new O,Xs=new O,Wi=new O,Xi=new O,hs=new O,Br=new O,To=new O,wo=new O,us=new O;function _l(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){us.fromArray(n,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=t.dot(us),c=e.dot(us),h=i.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var wm=new xs,Or=new O,yl=new O,Kr=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):wm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);let e=Or.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(yl)),this.expandByPoint(Or.copy(t.center).sub(yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mi=new O,vl=new O,Ro=new O,qi=new O,El=new O,Co=new O,Ml=new O,jr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){vl.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(vl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ro),a=qi.dot(this.direction),l=-qi.dot(Ro),c=qi.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vl).addScaledVector(Ro,d),p}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);let i=Mi.dot(this.direction),s=Mi.dot(Mi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,i,s,r){El.subVectors(e,t),Co.subVectors(i,t),Ml.crossVectors(El,Co);let o=this.direction.dot(Ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,t);let l=a*this.direction.dot(Co.crossVectors(qi,Co));if(l<0)return null;let c=a*this.direction.dot(El.cross(qi));if(c<0||l+c>o)return null;let h=-a*qi.dot(Ml);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,p,g,y,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/qs.setFromMatrixColumn(t,0).length(),r=1/qs.setFromMatrixColumn(t,1).length(),o=1/qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rm,t,Cm)}lookAt(t,e,i){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Yi.crossVectors(i,Dn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Yi.crossVectors(i,Dn)),Yi.normalize(),Po.crossVectors(Dn,Yi),s[0]=Yi.x,s[4]=Po.x,s[8]=Dn.x,s[1]=Yi.y,s[5]=Po.y,s[9]=Dn.y,s[2]=Yi.z,s[6]=Po.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],E=i[3],v=i[7],_=i[11],M=i[15],A=s[0],b=s[4],C=s[8],S=s[12],x=s[1],T=s[5],R=s[9],F=s[13],w=s[2],L=s[6],N=s[10],z=s[14],H=s[3],K=s[7],et=s[11],X=s[15];return r[0]=o*A+a*x+l*w+c*H,r[4]=o*b+a*T+l*L+c*K,r[8]=o*C+a*R+l*N+c*et,r[12]=o*S+a*F+l*z+c*X,r[1]=h*A+u*x+d*w+p*H,r[5]=h*b+u*T+d*L+p*K,r[9]=h*C+u*R+d*N+p*et,r[13]=h*S+u*F+d*z+p*X,r[2]=g*A+y*x+m*w+f*H,r[6]=g*b+y*T+m*L+f*K,r[10]=g*C+y*R+m*N+f*et,r[14]=g*S+y*F+m*z+f*X,r[3]=E*A+v*x+_*w+M*H,r[7]=E*b+v*T+_*L+M*K,r[11]=E*C+v*R+_*N+M*et,r[15]=E*S+v*F+_*z+M*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+y*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],E=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,v=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,_=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,M=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,A=e*E+i*v+s*_+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/A;return t[0]=E*b,t[1]=(y*d*r-u*m*r-y*s*p+i*m*p+u*s*f-i*d*f)*b,t[2]=(a*m*r-y*l*r+y*s*c-i*m*c-a*s*f+i*l*f)*b,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*b,t[4]=v*b,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*b,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*b,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*b,t[8]=_*b,t[9]=(g*u*r-h*y*r-g*i*p+e*y*p+h*i*f-e*u*f)*b,t[10]=(o*y*r-g*a*r+g*i*c-e*y*c-o*i*f+e*a*f)*b,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*p-e*a*p)*b,t[12]=M*b,t[13]=(h*y*s-g*u*s+g*i*d-e*y*d-h*i*m+e*u*m)*b,t[14]=(g*a*s-o*y*s-g*i*l+e*y*l+o*i*m-e*a*m)*b,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*b,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,y=o*h,m=o*u,f=a*u,E=l*c,v=l*h,_=l*u,M=i.x,A=i.y,b=i.z;return s[0]=(1-(y+f))*M,s[1]=(p+_)*M,s[2]=(g-v)*M,s[3]=0,s[4]=(p-_)*A,s[5]=(1-(d+f))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+v)*b,s[9]=(m-E)*b,s[10]=(1-(d+y))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=qs.set(s[0],s[1],s[2]).length(),o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],si.copy(this);let c=1/r,h=1/o,u=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,e.setFromRotationMatrix(si),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=wi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,g;if(a===wi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===na)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=wi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,p=(i+s)*h,g,y;if(a===wi)g=(o+r)*u,y=-2*u;else if(a===na)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},qs=new O,si=new xe,Rm=new O(0,0,0),Cm=new O(1,1,1),Yi=new O,Po=new O,Dn=new O,Lu=new xe,Uu=new ai,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pm=0,Nu=new O,Ys=new ai,xi=new xe,Fo=new O,Hr=new O,Fm=new O,Im=new ai,Bu=new O(1,0,0),Ou=new O(0,1,0),Hu=new O(0,0,1),zu={type:"added"},Dm={type:"removed"},Zs={type:"childadded",child:null},xl={type:"childremoved",child:null},vn=class n extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new Ii,i=new ai,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new ie}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Bu,t)}rotateY(t){return this.rotateOnAxis(Ou,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return Nu.copy(t).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bu,t)}translateY(t){return this.translateOnAxis(Ou,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fo.copy(t):Fo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Hr,Fo,this.up):xi.lookAt(Fo,Hr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(xi),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zu),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dm),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zu),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,Fm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};vn.DEFAULT_UP=new O(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new O,Ai=new O,Al=new O,bi=new O,$s=new O,Js=new O,ku=new O,bl=new O,Sl=new O,Tl=new O,wl=new be,Rl=new be,Cl=new be,ys=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ri.subVectors(s,e),Ai.subVectors(i,e),Al.subVectors(t,e);let o=ri.dot(ri),a=ri.dot(Ai),l=ri.dot(Al),c=Ai.dot(Ai),h=Ai.dot(Al),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return wl.setScalar(0),Rl.setScalar(0),Cl.setScalar(0),wl.fromBufferAttribute(t,e),Rl.fromBufferAttribute(t,i),Cl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(Rl,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(t,e,i,s){return ri.subVectors(i,e),Ai.subVectors(t,e),ri.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ri.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,i),Js.subVectors(r,i),bl.subVectors(t,i);let l=$s.dot(bl),c=Js.dot(bl);if(l<=0&&c<=0)return e.copy(i);Sl.subVectors(t,s);let h=$s.dot(Sl),u=Js.dot(Sl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector($s,o);Tl.subVectors(t,r);let p=$s.dot(Tl),g=Js.dot(Tl);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Js,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ku.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ku,a);let f=1/(m+y+d);return o=y*f,a=d*f,e.copy(i).addScaledVector($s,o).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Pl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=Mh(t,1),e=qe(e,0,1),i=qe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Pl(o,r,t+1/3),this.g=Pl(o,r,t),this.b=Pl(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let i=Gd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return pe.fromWorkingColorSpace(un.copy(this),t),Math.round(qe(un.r*255,0,255))*65536+Math.round(qe(un.g*255,0,255))*256+Math.round(qe(un.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(un.copy(this),e);let i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=Qe){pe.fromWorkingColorSpace(un.copy(this),t);let e=un.r,i=un.g,s=un.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(Io);let i=Xr(Zi.h,Io.h,e),s=Xr(Zi.s,Io.s,e),r=Xr(Zi.l,Io.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new kt;kt.NAMES=Gd;var Lm=0,As=class extends Fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Ps(),this.name="",this.blending=sr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xl&&(i.blendSrc=this.blendSrc),this.blendDst!==ql&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Le=class extends As{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ge=new O,Do=new at,fn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bu,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=er(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=gn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),i=gn(i,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bu&&(t.usage=this.usage),t}};var aa=class extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var la=class extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Um=0,Wn=new xe,Fl=new vn,Ks=new O,Ln=new xs,zr=new xs,je=new O,ze=class n extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kd(t)?la:aa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,i){return Wn.makeTranslation(t,e,i),this.applyMatrix4(Wn),this}scale(t,e,i){return Wn.makeScale(t,e,i),this.applyMatrix4(Wn),this}lookAt(t){return Fl.lookAt(t),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Ln.min,zr.min),Ln.expandByPoint(je),je.addVectors(Ln.max,zr.max),Ln.expandByPoint(je)):(Ln.expandByPoint(zr.min),Ln.expandByPoint(zr.max))}Ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),je.add(Ks)),s=Math.max(s,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new O,l[C]=new O;let c=new O,h=new O,u=new O,d=new at,p=new at,g=new at,y=new O,m=new O;function f(C,S,x){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(T),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(T),a[C].add(y),a[S].add(y),a[x].add(y),l[C].add(m),l[S].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,S=E.length;C<S;++C){let x=E[C],T=x.start,R=x.count;for(let F=T,w=T+R;F<w;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new O,_=new O,M=new O,A=new O;function b(C){M.fromBufferAttribute(s,C),A.copy(M);let S=a[C];v.copy(S),v.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(A,S);let T=_.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,T)}for(let C=0,S=E.length;C<S;++C){let x=E[C],T=x.start,R=x.count;for(let F=T,w=T+R;F<w;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new fn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gu=new xe,ds=new jr,Lo=new Kr,Vu=new O,Uo=new O,No=new O,Bo=new O,Il=new O,Oo=new O,Wu=new O,Ho=new O,_t=class extends vn{constructor(t=new ze,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Il.fromBufferAttribute(u,t),o?Oo.addScaledVector(Il,h):Oo.addScaledVector(Il.sub(e),h))}e.add(Oo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),ds.copy(t.ray).recast(t.near),!(Lo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Lo,Vu)===null||ds.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),ds.copy(t.ray).applyMatrix4(Gu),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,M=v;_<M;_+=3){let A=a.getX(_),b=a.getX(_+1),C=a.getX(_+2);s=zo(this,f,t,i,c,h,u,A,b,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=zo(this,o,t,i,c,h,u,E,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,M=v;_<M;_+=3){let A=_,b=_+1,C=_+2;s=zo(this,f,t,i,c,h,u,A,b,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=m,v=m+1,_=m+2;s=zo(this,o,t,i,c,h,u,E,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Nm(n,t,e,i,s,r,o,a){let l;if(t.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ji,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ho);return c<e.near||c>e.far?null:{distance:c,point:Ho.clone(),object:n}}function zo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Uo),n.getVertexPosition(l,No),n.getVertexPosition(c,Bo);let h=Nm(n,t,e,i,Uo,No,Bo,Wu);if(h){let u=new O;ys.getBarycoord(Wu,Uo,No,Bo,u),s&&(h.uv=ys.getInterpolatedAttribute(s,a,l,c,u,new at)),r&&(h.uv1=ys.getInterpolatedAttribute(r,a,l,c,u,new at)),o&&(h.normal=ys.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};ys.getNormal(Uo,No,Bo,d.normal),h.face=d,h.barycoord=u}return h}var le=class n extends ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(y,m,f,E,v,_,M,A,b,C,S){let x=_/b,T=M/C,R=_/2,F=M/2,w=A/2,L=b+1,N=C+1,z=0,H=0,K=new O;for(let et=0;et<N;et++){let X=et*T-F;for(let ut=0;ut<L;ut++){let yt=ut*x-R;K[y]=yt*E,K[m]=X*v,K[f]=w,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[f]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(ut/b),u.push(1-et/C),z+=1}}for(let et=0;et<C;et++)for(let X=0;X<b;X++){let ut=d+X+L*et,yt=d+X+L*(et+1),W=d+(X+1)+L*(et+1),nt=d+(X+1)+L*et;l.push(ut,yt,nt),l.push(yt,W,nt),H+=6}a.addGroup(p,H,S),p+=H,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function _n(n){let t={};for(let e=0;e<n.length;e++){let i=fr(n[e]);for(let s in i)t[s]=i[s]}return t}function Bm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Er={clone:fr,merge:_n},Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends As{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ca=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new O,Xu=new at,qu=new at,dn=class extends ca{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Xu,qu),e.subVectors(qu,Xu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},js=-90,Qs=1,Dc=class extends vn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(js,Qs,t,e);s.layers=this.layers,this.add(s);let r=new dn(js,Qs,t,e);r.layers=this.layers,this.add(r);let o=new dn(js,Qs,t,e);o.layers=this.layers,this.add(o);let a=new dn(js,Qs,t,e);a.layers=this.layers,this.add(a);let l=new dn(js,Qs,t,e);l.layers=this.layers,this.add(l);let c=new dn(js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ha=class extends Tn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lc=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ha(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:di}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:fi});r.uniforms.tEquirect.value=e;let o=new _t(s,r),a=e.minFilter;return e.minFilter===Ms&&(e.minFilter=di),new Dc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Dl=new O,zm=new O,km=new ie,oi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Dl.subVectors(i,e).cross(zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Dl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||km.getNormalMatrix(t),s=this.coplanarPoint(Dl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new Kr,ko=new O,Qr=class{constructor(t=new oi,e=new oi,i=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],E=s[13],v=s[14],_=s[15];if(i[0].setComponents(l-r,d-c,m-p,_-f).normalize(),i[1].setComponents(l+r,d+c,m+p,_+f).normalize(),i[2].setComponents(l+o,d+h,m+g,_+E).normalize(),i[3].setComponents(l-o,d-h,m-g,_-E).normalize(),i[4].setComponents(l-a,d-u,m-y,_-v).normalize(),e===wi)i[5].setComponents(l+a,d+u,m+y,_+v).normalize();else if(e===na)i[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Gm(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xt=class n extends ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let E=f*d-o;for(let v=0;v<c;v++){let _=v*u-r;g.push(_,-E,0),y.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let v=E+c*f,_=E+c*(f+1),M=E+1+c*(f+1),A=E+1+c*f;p.push(v,_,A),p.push(_,M,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,k0=`struct PhysicalMaterial {
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
}`,G0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wg=`float getShadowMask() {
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
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`#include <common>
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
}`,$g=`#if DEPTH_PACKING == 3200
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
}`,Jg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 diffuse;
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
}`,s1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,o1=`#define MATCAP
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
}`,a1=`#define MATCAP
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
}`,l1=`#define NORMAL
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
}`,c1=`#define NORMAL
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
}`,h1=`#define PHONG
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
}`,u1=`#define PHONG
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
}`,d1=`#define STANDARD
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
}`,f1=`#define STANDARD
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
}`,p1=`#define TOON
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
}`,m1=`#define TOON
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
}`,g1=`uniform float size;
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
}`,_1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,v1=`uniform vec3 color;
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
}`,E1=`uniform float rotation;
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
}`,M1=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Vm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:Zm,aomap_fragment:$m,aomap_pars_fragment:Jm,batching_pars_vertex:Km,batching_vertex:jm,begin_vertex:Qm,beginnormal_vertex:t0,bsdfs:e0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:a0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:h0,color_vertex:u0,common:d0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:_0,emissivemap_pars_fragment:y0,colorspace_fragment:v0,colorspace_pars_fragment:E0,envmap_fragment:M0,envmap_common_pars_fragment:x0,envmap_pars_fragment:A0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:U0,envmap_vertex:S0,fog_vertex:T0,fog_pars_vertex:w0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:F0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:D0,lights_pars_begin:L0,lights_toon_fragment:N0,lights_toon_pars_fragment:B0,lights_phong_fragment:O0,lights_phong_pars_fragment:H0,lights_physical_fragment:z0,lights_physical_pars_fragment:k0,lights_fragment_begin:G0,lights_fragment_maps:V0,lights_fragment_end:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:Y0,logdepthbuf_vertex:Z0,map_fragment:$0,map_pars_fragment:J0,map_particle_fragment:K0,map_particle_pars_fragment:j0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:tg,morphinstance_vertex:eg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:og,normal_fragment_maps:ag,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:_g,premultiplied_alpha_fragment:yg,project_vertex:vg,dithering_fragment:Eg,dithering_pars_fragment:Mg,roughnessmap_fragment:xg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:Sg,shadowmap_vertex:Tg,shadowmask_pars_fragment:wg,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Pg,skinnormal_vertex:Fg,specularmap_fragment:Ig,specularmap_pars_fragment:Dg,tonemapping_fragment:Lg,tonemapping_pars_fragment:Ug,transmission_fragment:Ng,transmission_pars_fragment:Bg,uv_pars_fragment:Og,uv_pars_vertex:Hg,uv_vertex:zg,worldpos_vertex:kg,background_vert:Gg,background_frag:Vg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:qg,cube_frag:Yg,depth_vert:Zg,depth_frag:$g,distanceRGBA_vert:Jg,distanceRGBA_frag:Kg,equirect_vert:jg,equirect_frag:Qg,linedashed_vert:t1,linedashed_frag:e1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:s1,meshlambert_frag:r1,meshmatcap_vert:o1,meshmatcap_frag:a1,meshnormal_vert:l1,meshnormal_frag:c1,meshphong_vert:h1,meshphong_frag:u1,meshphysical_vert:d1,meshphysical_frag:f1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:_1,shadow_vert:y1,shadow_frag:v1,sprite_vert:E1,sprite_frag:M1},Et={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},ui={basic:{uniforms:_n([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:_n([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new kt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:_n([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:_n([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:_n([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new kt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:_n([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:_n([Et.points,Et.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:_n([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:_n([Et.common,Et.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:_n([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:_n([Et.sprite,Et.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:_n([Et.common,Et.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:_n([Et.lights,Et.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};ui.physical={uniforms:_n([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Go={r:0,b:0,g:0},ps=new Ii,x1=new xe;function A1(n,t,e,i,s,r,o){let a=new kt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function y(E){let v=!1,_=g(E);_===null?f(a,l):_&&_.isColor&&(f(_,1),v=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===Ca)?(h===void 0&&(h=new _t(new le(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:fr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(v.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x1.makeRotationFromEuler(ps)),h.material.toneMapped=pe.getTransfer(_.colorSpace)!==Ae,(u!==_||d!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new _t(new Xt(2,2),new He({name:"BackgroundMaterial",uniforms:fr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=pe.getTransfer(_.colorSpace)!==Ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,v){E.getRGB(Go,Vd(n)),i.buffers.color.setClear(Go.r,Go.g,Go.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:y,addToRenderList:m}}function b1(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(x,T,R,F,w){let L=!1,N=u(F,R,T);r!==N&&(r=N,c(r.object)),L=p(x,F,R,w),L&&g(x,F,R,w),w!==null&&t.update(w,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,_(x,T,R,F),w!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(w).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,T,R){let F=R.wireframe===!0,w=i[x.id];w===void 0&&(w={},i[x.id]=w);let L=w[T.id];L===void 0&&(L={},w[T.id]=L);let N=L[F];return N===void 0&&(N=d(l()),L[F]=N),N}function d(x){let T=[],R=[],F=[];for(let w=0;w<e;w++)T[w]=0,R[w]=0,F[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:R,attributeDivisors:F,object:x,attributes:{},index:null}}function p(x,T,R,F){let w=r.attributes,L=T.attributes,N=0,z=R.getAttributes();for(let H in z)if(z[H].location>=0){let et=w[H],X=L[H];if(X===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),et===void 0||et.attribute!==X||X&&et.data!==X.data)return!0;N++}return r.attributesNum!==N||r.index!==F}function g(x,T,R,F){let w={},L=T.attributes,N=0,z=R.getAttributes();for(let H in z)if(z[H].location>=0){let et=L[H];et===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(et=x.instanceColor));let X={};X.attribute=et,et&&et.data&&(X.data=et.data),w[H]=X,N++}r.attributes=w,r.attributesNum=N,r.index=F}function y(){let x=r.newAttributes;for(let T=0,R=x.length;T<R;T++)x[T]=0}function m(x){f(x,0)}function f(x,T){let R=r.newAttributes,F=r.enabledAttributes,w=r.attributeDivisors;R[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),w[x]!==T&&(n.vertexAttribDivisor(x,T),w[x]=T)}function E(){let x=r.newAttributes,T=r.enabledAttributes;for(let R=0,F=T.length;R<F;R++)T[R]!==x[R]&&(n.disableVertexAttribArray(R),T[R]=0)}function v(x,T,R,F,w,L,N){N===!0?n.vertexAttribIPointer(x,T,R,w,L):n.vertexAttribPointer(x,T,R,F,w,L)}function _(x,T,R,F){y();let w=F.attributes,L=R.getAttributes(),N=T.defaultAttributeValues;for(let z in L){let H=L[z];if(H.location>=0){let K=w[z];if(K===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){let et=K.normalized,X=K.itemSize,ut=t.get(K);if(ut===void 0)continue;let yt=ut.buffer,W=ut.type,nt=ut.bytesPerElement,ct=W===n.INT||W===n.UNSIGNED_INT||K.gpuType===mh;if(K.isInterleavedBufferAttribute){let Z=K.data,it=Z.stride,ft=K.offset;if(Z.isInstancedInterleavedBuffer){for(let St=0;St<H.locationSize;St++)f(H.location+St,Z.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let St=0;St<H.locationSize;St++)m(H.location+St);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let St=0;St<H.locationSize;St++)v(H.location+St,X/H.locationSize,W,et,it*nt,(ft+X/H.locationSize*St)*nt,ct)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)f(H.location+Z,K.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let Z=0;Z<H.locationSize;Z++)v(H.location+Z,X/H.locationSize,W,et,X*nt,X/H.locationSize*Z*nt,ct)}}else if(N!==void 0){let et=N[z];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(H.location,et);break;case 3:n.vertexAttrib3fv(H.location,et);break;case 4:n.vertexAttrib4fv(H.location,et);break;default:n.vertexAttrib1fv(H.location,et)}}}}E()}function M(){C();for(let x in i){let T=i[x];for(let R in T){let F=T[R];for(let w in F)h(F[w].object),delete F[w];delete T[R]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;let T=i[x.id];for(let R in T){let F=T[R];for(let w in F)h(F[w].object),delete F[w];delete T[R]}delete i[x.id]}function b(x){for(let T in i){let R=i[T];if(R[x.id]===void 0)continue;let F=R[x.id];for(let w in F)h(F[w].object),delete F[w];delete R[x.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function S1(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function T1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Un&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let C=b===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ci&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ti&&!C)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:M,maxSamples:A}}function w1(n){let t=this,e=null,i=0,s=!1,r=!1,o=new oi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,v=E*4,_=f.clippingState||null;l.value=_,_=h(g,d,v,p);for(let M=0;M!==v;++M)_[M]=e[M];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=p;v!==y;++v,_+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function R1(n){let t=new WeakMap;function e(o,a){return a===tc?o.mapping=cr:a===ec&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===tc||a===ec)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Lc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var pr=class extends ca{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nr=4,Yu=[.125,.215,.35,.446,.526,.582],vs=20,Ll=new pr,Zu=new kt,Ul=null,Nl=0,Bl=0,Ol=!1,gs=(1+Math.sqrt(5))/2,tr=1/gs,$u=[new O(-gs,tr,0),new O(gs,tr,0),new O(-tr,0,gs),new O(tr,0,gs),new O(0,gs,-tr),new O(0,gs,tr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ul,Nl,Bl),this._renderer.xr.enabled=Ol,t.scissorTest=!1,Vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:Rn,format:Un,colorSpace:es,depthBuffer:!1},s=Ju(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C1(r)),this._blurMaterial=P1(r,t,e)}return s}_compileMaterial(t){let e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,i,s){let a=new dn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zu),h.toneMapping=pi,h.autoClear=!1;let p=new Le({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new _t(new le,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(Zu),y=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let v=this._cubeSize;Vo(s,E*v,f>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===cr||t.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Vo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ll)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$u[(s-r-1)%$u.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _t(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vs-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);let f=[],E=0;for(let b=0;b<vs;++b){let C=b/y,S=Math.exp(-C*C/2);f.push(S),b===0?E+=S:b<m&&(E+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let _=this._sizeLods[s],M=3*_*(s>v-nr?s-v+nr:0),A=4*(this._cubeSize-_);Vo(e,M,A,3*_,2*_),l.setRenderTarget(e),l.render(u,Ll)}};function C1(n){let t=[],e=[],i=[],s=n,r=n-nr+1+Yu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-nr?l=Yu[o-n+nr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,E=new Float32Array(y*g*p),v=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let A=0;A<p;A++){let b=A%3*2/3-1,C=A>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];E.set(S,y*g*A),v.set(d,m*g*A);let x=[A,A,A,A,A,A];_.set(x,f*g*A)}let M=new ze;M.setAttribute("position",new fn(E,y)),M.setAttribute("uv",new fn(v,m)),M.setAttribute("faceIndex",new fn(_,f)),t.push(M),s>nr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ju(n,t,e){let i=new en(n,t,e);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function P1(n,t,e){let i=new Float32Array(vs),s=new O(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ku(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ju(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function xh(){return`

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
	`}function F1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===tc||l===ec,h=l===cr||l===hr;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ua(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ua(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function I1(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function D1(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let E=p.array;y=p.version;for(let v=0,_=E.length;v<_;v+=3){let M=E[v+0],A=E[v+1],b=E[v+2];d.push(M,A,A,b,b,M)}}else if(g!==void 0){let E=g.array;y=g.version;for(let v=0,_=E.length/3-1;v<_;v+=3){let M=v+0,A=v+1,b=v+2;d.push(M,A,A,b,b,M)}}else return;let m=new(kd(d)?la:aa)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function L1(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,y,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*y[E];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function U1(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function N1(n,t,e){let i=new WeakMap,s=new be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*M*4*u),b=new ra(A,_,M,u);b.type=Ti,b.needsUpdate=!0;let C=v*4;for(let x=0;x<u;x++){let T=m[x],R=f[x],F=E[x],w=_*M*4*x;for(let L=0;L<T.count;L++){let N=L*C;p===!0&&(s.fromBufferAttribute(T,L),A[w+N+0]=s.x,A[w+N+1]=s.y,A[w+N+2]=s.z,A[w+N+3]=0),g===!0&&(s.fromBufferAttribute(R,L),A[w+N+4]=s.x,A[w+N+5]=s.y,A[w+N+6]=s.z,A[w+N+7]=0),y===!0&&(s.fromBufferAttribute(F,L),A[w+N+8]=s.x,A[w+N+9]=s.y,A[w+N+10]=s.z,A[w+N+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new at(_,M)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function B1(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var mr=class extends Tn{constructor(t,e,i,s,r,o,a,l,c,h=rr){if(h!==rr&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===rr&&(i=Pi),i===void 0&&h===dr&&(i=ur),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xd=new Tn,Qu=new mr(1,1),qd=new ra,Yd=new Ic,Zd=new ha,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Mr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fa(n,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function O1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function H1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function z1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function k1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function G1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;sd.set(i),n.uniformMatrix2fv(this.addr,!1,sd),Ze(e,i)}}function V1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;id.set(i),n.uniformMatrix3fv(this.addr,!1,id),Ze(e,i)}}function W1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;nd.set(i),n.uniformMatrix4fv(this.addr,!1,nd),Ze(e,i)}}function X1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function q1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function Y1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function Z1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function $1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function J1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function K1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function j1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function Q1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Qu.compareFunction=Hd,r=Qu):r=Xd,e.setTexture2D(t||r,s)}function t2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yd,s)}function e2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Zd,s)}function n2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qd,s)}function i2(n){switch(n){case 5126:return O1;case 35664:return H1;case 35665:return z1;case 35666:return k1;case 35674:return G1;case 35675:return V1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return Z1;case 5125:return $1;case 36294:return J1;case 36295:return K1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return n2}}function s2(n,t){n.uniform1fv(this.addr,t)}function r2(n,t){let e=Mr(t,this.size,2);n.uniform2fv(this.addr,e)}function o2(n,t){let e=Mr(t,this.size,3);n.uniform3fv(this.addr,e)}function a2(n,t){let e=Mr(t,this.size,4);n.uniform4fv(this.addr,e)}function l2(n,t){let e=Mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function c2(n,t){let e=Mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function h2(n,t){let e=Mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function u2(n,t){n.uniform1iv(this.addr,t)}function d2(n,t){n.uniform2iv(this.addr,t)}function f2(n,t){n.uniform3iv(this.addr,t)}function p2(n,t){n.uniform4iv(this.addr,t)}function m2(n,t){n.uniform1uiv(this.addr,t)}function g2(n,t){n.uniform2uiv(this.addr,t)}function _2(n,t){n.uniform3uiv(this.addr,t)}function y2(n,t){n.uniform4uiv(this.addr,t)}function v2(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xd,r[o])}function E2(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yd,r[o])}function M2(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zd,r[o])}function x2(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qd,r[o])}function A2(n){switch(n){case 5126:return s2;case 35664:return r2;case 35665:return o2;case 35666:return a2;case 35674:return l2;case 35675:return c2;case 35676:return h2;case 5124:case 35670:return u2;case 35667:case 35671:return d2;case 35668:case 35672:return f2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return _2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return E2;case 35680:case 36300:case 36308:case 36293:return M2;case 36289:case 36303:case 36311:case 36292:return x2}}var Uc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=i2(e.type)}},Nc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A2(e.type)}},Bc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function rd(n,t){n.seq.push(t),n.map[t.id]=t}function b2(n,t,e){let i=n.name,s=i.length;for(Hl.lastIndex=0;;){let r=Hl.exec(i),o=Hl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rd(e,c===void 0?new Uc(a,n,t):new Nc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Bc(a),rd(e,u)),e=u}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);b2(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function od(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var S2=37297,T2=0;function w2(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ad=new ie;function R2(n){pe._getMatrix(ad,pe.workingColorSpace,n);let t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case Pa:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ld(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+w2(n.getShaderSource(t),o)}else return s}function C2(n,t){let e=R2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P2(n,t){let e;switch(t){case kp:e="Linear";break;case Gp:e="Reinhard";break;case Vp:e="Cineon";break;case Wp:e="ACESFilmic";break;case qp:e="AgX";break;case Yp:e="Neutral";break;case Xp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wo=new O;function F2(){pe.getLuminanceCoefficients(Wo);let n=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function D2(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function L2(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Vr(n){return n!==""}function cd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(n){return n.replace(U2,B2)}var N2=new Map;function B2(n,t){let e=re[t];if(e===void 0){let i=N2.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Oc(e)}var O2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(n){return n.replace(O2,H2)}function H2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ph?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function k2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cr:case hr:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:t="ENVMAP_MODE_REFRACTION";break}return t}function V2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Td:t="ENVMAP_BLENDING_MULTIPLY";break;case Hp:t="ENVMAP_BLENDING_MIX";break;case zp:t="ENVMAP_BLENDING_ADD";break}return t}function W2(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function X2(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=z2(e),c=k2(e),h=G2(e),u=V2(e),d=W2(e),p=I2(e),g=D2(r),y=s.createProgram(),m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),f.length>0&&(f+=`
`)):(m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),f=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?re.tonemapping_pars_fragment:"",e.toneMapping!==pi?P2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,C2("linearToOutputTexel",e.outputColorSpace),F2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=Oc(o),o=cd(o,e),o=hd(o,e),a=Oc(a),a=cd(a,e),a=hd(a,e),o=ud(o),a=ud(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=E+m+o,_=E+f+a,M=od(s,s.VERTEX_SHADER,v),A=od(s,s.FRAGMENT_SHADER,_);s.attachShader(y,M),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function b(T){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(M).trim(),w=s.getShaderInfoLog(A).trim(),L=!0,N=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,M,A);else{let z=ld(s,M,"vertex"),H=ld(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+R+`
`+z+`
`+H)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(F===""||w==="")&&(N=!1);N&&(T.diagnostics={runnable:L,programLog:R,vertexShader:{log:F,prefix:m},fragmentShader:{log:w,prefix:f}})}s.deleteShader(M),s.deleteShader(A),C=new ar(s,y),S=L2(s,y)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,S2)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T2++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=A,this}var q2=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new zc(t),e.set(t,i)),i}},zc=class{constructor(t){this.id=q2++,this.code=t,this.usedTimes=0}};function Y2(n,t,e,i,s,r,o){let a=new oa,l=new Hc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,T,R,F){let w=R.fog,L=F.geometry,N=S.isMeshStandardMaterial?R.environment:null,z=(S.isMeshStandardMaterial?e:t).get(S.envMap||N),H=z&&z.mapping===Ca?z.image.height:null,K=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let et=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,X=et!==void 0?et.length:0,ut=0;L.morphAttributes.position!==void 0&&(ut=1),L.morphAttributes.normal!==void 0&&(ut=2),L.morphAttributes.color!==void 0&&(ut=3);let yt,W,nt,ct;if(K){let Me=ui[K];yt=Me.vertexShader,W=Me.fragmentShader}else yt=S.vertexShader,W=S.fragmentShader,l.update(S),nt=l.getVertexShaderID(S),ct=l.getFragmentShaderID(S);let Z=n.getRenderTarget(),it=n.state.buffers.depth.getReversed(),ft=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,Gt=!!S.map,st=!!S.matcap,dt=!!z,B=!!S.aoMap,zt=!!S.lightMap,pt=!!S.bumpMap,It=!!S.normalMap,vt=!!S.displacementMap,qt=!!S.emissiveMap,Pt=!!S.metalnessMap,U=!!S.roughnessMap,P=S.anisotropy>0,q=S.clearcoat>0,rt=S.dispersion>0,ht=S.iridescence>0,ot=S.sheen>0,Ut=S.transmission>0,xt=P&&!!S.anisotropyMap,Ft=q&&!!S.clearcoatMap,he=q&&!!S.clearcoatNormalMap,mt=q&&!!S.clearcoatRoughnessMap,Dt=ht&&!!S.iridescenceMap,Yt=ht&&!!S.iridescenceThicknessMap,Zt=ot&&!!S.sheenColorMap,Lt=ot&&!!S.sheenRoughnessMap,de=!!S.specularMap,se=!!S.specularColorMap,Re=!!S.specularIntensityMap,k=Ut&&!!S.transmissionMap,At=Ut&&!!S.thicknessMap,tt=!!S.gradientMap,lt=!!S.alphaMap,Rt=S.alphaTest>0,Tt=!!S.alphaHash,ee=!!S.extensions,Oe=pi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=n.toneMapping);let cn={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:yt,fragmentShader:W,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:ft,instancingColor:ft&&F.instanceColor!==null,instancingMorph:ft&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:es,alphaToCoverage:!!S.alphaToCoverage,map:Gt,matcap:st,envMap:dt,envMapMode:dt&&z.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:zt,bumpMap:pt,normalMap:It,displacementMap:d&&vt,emissiveMap:qt,normalMapObjectSpace:It&&S.normalMapType===Kp,normalMapTangentSpace:It&&S.normalMapType===Od,metalnessMap:Pt,roughnessMap:U,anisotropy:P,anisotropyMap:xt,clearcoat:q,clearcoatMap:Ft,clearcoatNormalMap:he,clearcoatRoughnessMap:mt,dispersion:rt,iridescence:ht,iridescenceMap:Dt,iridescenceThicknessMap:Yt,sheen:ot,sheenColorMap:Zt,sheenRoughnessMap:Lt,specularMap:de,specularColorMap:se,specularIntensityMap:Re,transmission:Ut,transmissionMap:k,thicknessMap:At,gradientMap:tt,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:lt,alphaTest:Rt,alphaHash:Tt,combine:S.combine,mapUv:Gt&&y(S.map.channel),aoMapUv:B&&y(S.aoMap.channel),lightMapUv:zt&&y(S.lightMap.channel),bumpMapUv:pt&&y(S.bumpMap.channel),normalMapUv:It&&y(S.normalMap.channel),displacementMapUv:vt&&y(S.displacementMap.channel),emissiveMapUv:qt&&y(S.emissiveMap.channel),metalnessMapUv:Pt&&y(S.metalnessMap.channel),roughnessMapUv:U&&y(S.roughnessMap.channel),anisotropyMapUv:xt&&y(S.anisotropyMap.channel),clearcoatMapUv:Ft&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&y(S.sheenRoughnessMap.channel),specularMapUv:de&&y(S.specularMap.channel),specularColorMapUv:se&&y(S.specularColorMap.channel),specularIntensityMapUv:Re&&y(S.specularIntensityMap.channel),transmissionMapUv:k&&y(S.transmissionMap.channel),thicknessMapUv:At&&y(S.thicknessMap.channel),alphaMapUv:lt&&y(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(It||P),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(Gt||lt),fog:!!w,useFog:S.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:it,skinning:F.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Gt&&S.map.isVideoTexture===!0&&pe.getTransfer(S.map.colorSpace)===Ae,decodeVideoTextureEmissive:qt&&S.emissiveMap.isVideoTexture===!0&&pe.getTransfer(S.emissiveMap.colorSpace)===Ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===me,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ee&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&S.extensions.multiDraw===!0||St)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return cn.vertexUv1s=c.has(1),cn.vertexUv2s=c.has(2),cn.vertexUv3s=c.has(3),c.clear(),cn}function f(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)x.push(T),x.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(E(x,S),v(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function v(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let x=g[S.type],T;if(x){let R=ui[x];T=Er.clone(R.uniforms)}else T=S.uniforms;return T}function M(S,x){let T;for(let R=0,F=h.length;R<F;R++){let w=h[R];if(w.cacheKey===x){T=w,++T.usedTimes;break}}return T===void 0&&(T=new X2(n,x,S,r),h.push(T)),T}function A(S){if(--S.usedTimes===0){let x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:M,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:C}}function Z2(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function $2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,p,g,y,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||$2),i.length>1&&i.sort(d||fd),s.length>1&&s.sort(d||fd)}function h(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function J2(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new pd,n.set(i,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function K2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new kt};break;case"SpotLight":e={position:new O,direction:new O,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function j2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Q2=0;function t_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function e_(n){let t=new K2,e=j2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new xe,o=new xe;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,E=0,v=0,_=0,M=0,A=0,b=0;c.sort(t_);for(let S=0,x=c.length;S<x;S++){let T=c[S],R=T.color,F=T.intensity,w=T.distance,L=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=R.r*F,u+=R.g*F,d+=R.b*F;else if(T.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(T.sh.coefficients[N],F);b++}else if(T.isDirectionalLight){let N=t.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let z=T.shadow,H=e.get(T);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=T.shadow.matrix,E++}i.directional[p]=N,p++}else if(T.isSpotLight){let N=t.get(T);N.position.setFromMatrixPosition(T.matrixWorld),N.color.copy(R).multiplyScalar(F),N.distance=w,N.coneCos=Math.cos(T.angle),N.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),N.decay=T.decay,i.spot[y]=N;let z=T.shadow;if(T.map&&(i.spotLightMap[M]=T.map,M++,z.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[y]=z.matrix,T.castShadow){let H=e.get(T);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=L,_++}y++}else if(T.isRectAreaLight){let N=t.get(T);N.color.copy(R).multiplyScalar(F),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=N,m++}else if(T.isPointLight){let N=t.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),N.distance=T.distance,N.decay=T.decay,T.castShadow){let z=T.shadow,H=e.get(T);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=T.shadow.matrix,v++}i.point[g]=N,g++}else if(T.isHemisphereLight){let N=t.get(T);N.skyColor.copy(T.color).multiplyScalar(F),N.groundColor.copy(T.groundColor).multiplyScalar(F),i.hemi[f]=N,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==E||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==M||C.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,C.directionalLength=p,C.pointLength=g,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=E,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=M,C.numLightProbes=b,i.version=Q2++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let v=c[f];if(v.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function md(n){let t=new e_(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function n_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new md(n),t.set(s,[a])):r>=o.length?(a=new md(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var kc=class extends As{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gc=class extends As{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`;function r_(n,t,e){let i=new Qr,s=new at,r=new at,o=new be,a=new kc({depthPacking:Jp}),l=new Gc,c={},h=e.maxTextureSize,u={[ji]:tn,[tn]:ji,[me]:me},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sd;let f=this.type;this.render=function(A,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),R=n.state;R.setBlending(fi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let F=f!==Si&&this.type===Si,w=f===Si&&this.type!==Si;for(let L=0,N=A.length;L<N;L++){let z=A[L],H=z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let K=H.getFrameExtents();if(s.multiply(K),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,H.mapSize.y=r.y)),H.map===null||F===!0||w===!0){let X=this.type!==Si?{minFilter:yn,magFilter:yn}:{};H.map!==null&&H.map.dispose(),H.map=new en(s.x,s.y,X),H.map.texture.name=z.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let et=H.getViewportCount();for(let X=0;X<et;X++){let ut=H.getViewport(X);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),R.viewport(o),H.updateMatrices(z,X),i=H.getFrustum(),_(b,C,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Si&&E(H,C),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,T)};function E(A,b){let C=t.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new en(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(b,null,C,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(b,null,C,p,y,null)}function v(A,b,C,S){let x=null,T=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)x=T;else if(x=C.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let R=x.uuid,F=b.uuid,w=c[R];w===void 0&&(w={},c[R]=w);let L=w[F];L===void 0&&(L=x.clone(),w[F]=L,b.addEventListener("dispose",M)),x=L}if(x.visible=b.visible,x.wireframe=b.wireframe,S===Si?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let R=n.properties.get(x);R.light=C}return x}function _(A,b,C,S,x){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Si)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let F=t.update(A),w=A.material;if(Array.isArray(w)){let L=F.groups;for(let N=0,z=L.length;N<z;N++){let H=L[N],K=w[H.materialIndex];if(K&&K.visible){let et=v(A,K,S,x);A.onBeforeShadow(n,A,b,C,F,et,H),n.renderBufferDirect(C,null,F,et,A,H),A.onAfterShadow(n,A,b,C,F,et,H)}}}else if(w.visible){let L=v(A,w,S,x);A.onBeforeShadow(n,A,b,C,F,L,null),n.renderBufferDirect(C,null,F,L,A,null),A.onAfterShadow(n,A,b,C,F,L,null)}}let R=A.children;for(let F=0,w=R.length;F<w;F++)_(R[F],b,C,S,x)}function M(A){A.target.removeEventListener("dispose",M);for(let C in c){let S=c[C],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}var o_={[Yl]:Zl,[$l]:jl,[Jl]:Ql,[lr]:Kl,[Zl]:Yl,[jl]:$l,[Ql]:Jl,[Kl]:lr};function a_(n,t){function e(){let k=!1,At=new be,tt=null,lt=new be(0,0,0,0);return{setMask:function(Rt){tt!==Rt&&!k&&(n.colorMask(Rt,Rt,Rt,Rt),tt=Rt)},setLocked:function(Rt){k=Rt},setClear:function(Rt,Tt,ee,Oe,cn){cn===!0&&(Rt*=Oe,Tt*=Oe,ee*=Oe),At.set(Rt,Tt,ee,Oe),lt.equals(At)===!1&&(n.clearColor(Rt,Tt,ee,Oe),lt.copy(At))},reset:function(){k=!1,tt=null,lt.set(-1,0,0,0)}}}function i(){let k=!1,At=!1,tt=null,lt=null,Rt=null;return{setReversed:function(Tt){if(At!==Tt){let ee=t.get("EXT_clip_control");At?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let Oe=Rt;Rt=null,this.setClear(Oe)}At=Tt},getReversed:function(){return At},setTest:function(Tt){Tt?Z(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(Tt){tt!==Tt&&!k&&(n.depthMask(Tt),tt=Tt)},setFunc:function(Tt){if(At&&(Tt=o_[Tt]),lt!==Tt){switch(Tt){case Yl:n.depthFunc(n.NEVER);break;case Zl:n.depthFunc(n.ALWAYS);break;case $l:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Jl:n.depthFunc(n.EQUAL);break;case Kl:n.depthFunc(n.GEQUAL);break;case jl:n.depthFunc(n.GREATER);break;case Ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=Tt}},setLocked:function(Tt){k=Tt},setClear:function(Tt){Rt!==Tt&&(At&&(Tt=1-Tt),n.clearDepth(Tt),Rt=Tt)},reset:function(){k=!1,tt=null,lt=null,Rt=null,At=!1}}}function s(){let k=!1,At=null,tt=null,lt=null,Rt=null,Tt=null,ee=null,Oe=null,cn=null;return{setTest:function(Me){k||(Me?Z(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(Me){At!==Me&&!k&&(n.stencilMask(Me),At=Me)},setFunc:function(Me,ei,yi){(tt!==Me||lt!==ei||Rt!==yi)&&(n.stencilFunc(Me,ei,yi),tt=Me,lt=ei,Rt=yi)},setOp:function(Me,ei,yi){(Tt!==Me||ee!==ei||Oe!==yi)&&(n.stencilOp(Me,ei,yi),Tt=Me,ee=ei,Oe=yi)},setLocked:function(Me){k=Me},setClear:function(Me){cn!==Me&&(n.clearStencil(Me),cn=Me)},reset:function(){k=!1,At=null,tt=null,lt=null,Rt=null,Tt=null,ee=null,Oe=null,cn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,v=null,_=null,M=null,A=null,b=new kt(0,0,0),C=0,S=!1,x=null,T=null,R=null,F=null,w=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,z=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=z>=2);let K=null,et={},X=n.getParameter(n.SCISSOR_BOX),ut=n.getParameter(n.VIEWPORT),yt=new be().fromArray(X),W=new be().fromArray(ut);function nt(k,At,tt,lt){let Rt=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(k,Tt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<tt;ee++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(At+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return Tt}let ct={};ct[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(lr),pt(!1),It(_u),Z(n.CULL_FACE),B(fi);function Z(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function it(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function ft(k,At){return u[k]!==At?(n.bindFramebuffer(k,At),u[k]=At,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=At),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=At),!0):!1}function St(k,At){let tt=p,lt=!1;if(k){tt=d.get(At),tt===void 0&&(tt=[],d.set(At,tt));let Rt=k.textures;if(tt.length!==Rt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,ee=Rt.length;Tt<ee;Tt++)tt[Tt]=n.COLOR_ATTACHMENT0+Tt;tt.length=Rt.length,lt=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,lt=!0);lt&&n.drawBuffers(tt)}function Gt(k){return g!==k?(n.useProgram(k),g=k,!0):!1}let st={[_s]:n.FUNC_ADD,[xp]:n.FUNC_SUBTRACT,[Ap]:n.FUNC_REVERSE_SUBTRACT};st[bp]=n.MIN,st[Sp]=n.MAX;let dt={[Tp]:n.ZERO,[wp]:n.ONE,[Rp]:n.SRC_COLOR,[Xl]:n.SRC_ALPHA,[Lp]:n.SRC_ALPHA_SATURATE,[Ip]:n.DST_COLOR,[Pp]:n.DST_ALPHA,[Cp]:n.ONE_MINUS_SRC_COLOR,[ql]:n.ONE_MINUS_SRC_ALPHA,[Dp]:n.ONE_MINUS_DST_COLOR,[Fp]:n.ONE_MINUS_DST_ALPHA,[Up]:n.CONSTANT_COLOR,[Np]:n.ONE_MINUS_CONSTANT_COLOR,[Bp]:n.CONSTANT_ALPHA,[Op]:n.ONE_MINUS_CONSTANT_ALPHA};function B(k,At,tt,lt,Rt,Tt,ee,Oe,cn,Me){if(k===fi){y===!0&&(it(n.BLEND),y=!1);return}if(y===!1&&(Z(n.BLEND),y=!0),k!==Mp){if(k!==m||Me!==S){if((f!==_s||_!==_s)&&(n.blendEquation(n.FUNC_ADD),f=_s,_=_s),Me)switch(k){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ta:n.blendFunc(n.ONE,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ta:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,v=null,M=null,A=null,b.set(0,0,0),C=0,m=k,S=Me}return}Rt=Rt||At,Tt=Tt||tt,ee=ee||lt,(At!==f||Rt!==_)&&(n.blendEquationSeparate(st[At],st[Rt]),f=At,_=Rt),(tt!==E||lt!==v||Tt!==M||ee!==A)&&(n.blendFuncSeparate(dt[tt],dt[lt],dt[Tt],dt[ee]),E=tt,v=lt,M=Tt,A=ee),(Oe.equals(b)===!1||cn!==C)&&(n.blendColor(Oe.r,Oe.g,Oe.b,cn),b.copy(Oe),C=cn),m=k,S=!1}function zt(k,At){k.side===me?it(n.CULL_FACE):Z(n.CULL_FACE);let tt=k.side===tn;At&&(tt=!tt),pt(tt),k.blending===sr&&k.transparent===!1?B(fi):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let lt=k.stencilWrite;a.setTest(lt),lt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),qt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(k){x!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),x=k)}function It(k){k!==vp?(Z(n.CULL_FACE),k!==T&&(k===_u?n.cullFace(n.BACK):k===Ep?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),T=k}function vt(k){k!==R&&(N&&n.lineWidth(k),R=k)}function qt(k,At,tt){k?(Z(n.POLYGON_OFFSET_FILL),(F!==At||w!==tt)&&(n.polygonOffset(At,tt),F=At,w=tt)):it(n.POLYGON_OFFSET_FILL)}function Pt(k){k?Z(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function U(k){k===void 0&&(k=n.TEXTURE0+L-1),K!==k&&(n.activeTexture(k),K=k)}function P(k,At,tt){tt===void 0&&(K===null?tt=n.TEXTURE0+L-1:tt=K);let lt=et[tt];lt===void 0&&(lt={type:void 0,texture:void 0},et[tt]=lt),(lt.type!==k||lt.texture!==At)&&(K!==tt&&(n.activeTexture(tt),K=tt),n.bindTexture(k,At||ct[k]),lt.type=k,lt.texture=At)}function q(){let k=et[K];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function rt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(k){yt.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Lt(k){W.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),W.copy(k))}function de(k,At){let tt=c.get(At);tt===void 0&&(tt=new WeakMap,c.set(At,tt));let lt=tt.get(k);lt===void 0&&(lt=n.getUniformBlockIndex(At,k.name),tt.set(k,lt))}function se(k,At){let lt=c.get(At).get(k);l.get(At)!==lt&&(n.uniformBlockBinding(At,lt,k.__bindingPointIndex),l.set(At,lt))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,et={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,v=null,_=null,M=null,A=null,b=new kt(0,0,0),C=0,S=!1,x=null,T=null,R=null,F=null,w=null,yt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:it,bindFramebuffer:ft,drawBuffers:St,useProgram:Gt,setBlending:B,setMaterial:zt,setFlipSided:pt,setCullFace:It,setLineWidth:vt,setPolygonOffset:qt,setScissorTest:Pt,activeTexture:U,bindTexture:P,unbindTexture:q,compressedTexImage2D:rt,compressedTexImage3D:ht,texImage2D:Dt,texImage3D:Yt,updateUBOMapping:de,uniformBlockBinding:se,texStorage2D:he,texStorage3D:mt,texSubImage2D:ot,texSubImage3D:Ut,compressedTexSubImage2D:xt,compressedTexSubImage3D:Ft,scissor:Zt,viewport:Lt,reset:Re}}function gd(n,t,e,i){let s=l_(i);switch(e){case Fd:return n*t;case Dd:return n*t;case Ld:return n*t*2;case Ud:return n*t/s.components*s.byteLength;case yh:return n*t/s.components*s.byteLength;case Nd:return n*t*2/s.components*s.byteLength;case vh:return n*t*2/s.components*s.byteLength;case Id:return n*t*3/s.components*s.byteLength;case Un:return n*t*4/s.components*s.byteLength;case Eh:return n*t*4/s.components*s.byteLength;case $o:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ko:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:case oc:return Math.max(n,16)*Math.max(t,8)/4;case ic:case rc:return Math.max(n,8)*Math.max(t,8)/2;case ac:case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qo:case bc:case Sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bd:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wc:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l_(n){switch(n){case Ci:case Rd:return{byteLength:1,components:1};case $r:case Cd:case Rn:return{byteLength:2,components:1};case gh:case _h:return{byteLength:2,components:4};case Pi:case mh:case Ti:return{byteLength:4,components:1};case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function c_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,P){return p?new OffscreenCanvas(U,P):ia("canvas")}function y(U,P,q){let rt=1,ht=Pt(U);if((ht.width>q||ht.height>q)&&(rt=q/Math.max(ht.width,ht.height)),rt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ot=Math.floor(rt*ht.width),Ut=Math.floor(rt*ht.height);u===void 0&&(u=g(ot,Ut));let xt=P?g(ot,Ut):u;return xt.width=ot,xt.height=Ut,xt.getContext("2d").drawImage(U,0,0,ot,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ot+"x"+Ut+")."),xt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),U;return U}function m(U){return U.generateMipmaps}function f(U){n.generateMipmap(U)}function E(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(U,P,q,rt,ht=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ot=P;if(P===n.RED&&(q===n.FLOAT&&(ot=n.R32F),q===n.HALF_FLOAT&&(ot=n.R16F),q===n.UNSIGNED_BYTE&&(ot=n.R8)),P===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ot=n.R8UI),q===n.UNSIGNED_SHORT&&(ot=n.R16UI),q===n.UNSIGNED_INT&&(ot=n.R32UI),q===n.BYTE&&(ot=n.R8I),q===n.SHORT&&(ot=n.R16I),q===n.INT&&(ot=n.R32I)),P===n.RG&&(q===n.FLOAT&&(ot=n.RG32F),q===n.HALF_FLOAT&&(ot=n.RG16F),q===n.UNSIGNED_BYTE&&(ot=n.RG8)),P===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ot=n.RG8UI),q===n.UNSIGNED_SHORT&&(ot=n.RG16UI),q===n.UNSIGNED_INT&&(ot=n.RG32UI),q===n.BYTE&&(ot=n.RG8I),q===n.SHORT&&(ot=n.RG16I),q===n.INT&&(ot=n.RG32I)),P===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),q===n.UNSIGNED_INT&&(ot=n.RGB32UI),q===n.BYTE&&(ot=n.RGB8I),q===n.SHORT&&(ot=n.RGB16I),q===n.INT&&(ot=n.RGB32I)),P===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),q===n.UNSIGNED_INT&&(ot=n.RGBA32UI),q===n.BYTE&&(ot=n.RGBA8I),q===n.SHORT&&(ot=n.RGBA16I),q===n.INT&&(ot=n.RGBA32I)),P===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),P===n.RGBA){let Ut=ht?Pa:pe.getTransfer(rt);q===n.FLOAT&&(ot=n.RGBA32F),q===n.HALF_FLOAT&&(ot=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ot=Ut===Ae?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(U,P){let q;return U?P===null||P===Pi||P===ur?q=n.DEPTH24_STENCIL8:P===Ti?q=n.DEPTH32F_STENCIL8:P===$r&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Pi||P===ur?q=n.DEPTH_COMPONENT24:P===Ti?q=n.DEPTH_COMPONENT32F:P===$r&&(q=n.DEPTH_COMPONENT16),q}function M(U,P){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==yn&&U.minFilter!==di?Math.log2(Math.max(P.width,P.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?P.mipmaps.length:1}function A(U){let P=U.target;P.removeEventListener("dispose",A),C(P),P.isVideoTexture&&h.delete(P)}function b(U){let P=U.target;P.removeEventListener("dispose",b),x(P)}function C(U){let P=i.get(U);if(P.__webglInit===void 0)return;let q=U.source,rt=d.get(q);if(rt){let ht=rt[P.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&S(U),Object.keys(rt).length===0&&d.delete(q)}i.remove(U)}function S(U){let P=i.get(U);n.deleteTexture(P.__webglTexture);let q=U.source,rt=d.get(q);delete rt[P.__cacheKey],o.memory.textures--}function x(U){let P=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(P.__webglFramebuffer[rt]))for(let ht=0;ht<P.__webglFramebuffer[rt].length;ht++)n.deleteFramebuffer(P.__webglFramebuffer[rt][ht]);else n.deleteFramebuffer(P.__webglFramebuffer[rt]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[rt])}else{if(Array.isArray(P.__webglFramebuffer))for(let rt=0;rt<P.__webglFramebuffer.length;rt++)n.deleteFramebuffer(P.__webglFramebuffer[rt]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let rt=0;rt<P.__webglColorRenderbuffer.length;rt++)P.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[rt]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let q=U.textures;for(let rt=0,ht=q.length;rt<ht;rt++){let ot=i.get(q[rt]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove(q[rt])}i.remove(U)}let T=0;function R(){T=0}function F(){let U=T;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),T+=1,U}function w(U){let P=[];return P.push(U.wrapS),P.push(U.wrapT),P.push(U.wrapR||0),P.push(U.magFilter),P.push(U.minFilter),P.push(U.anisotropy),P.push(U.internalFormat),P.push(U.format),P.push(U.type),P.push(U.generateMipmaps),P.push(U.premultiplyAlpha),P.push(U.flipY),P.push(U.unpackAlignment),P.push(U.colorSpace),P.join()}function L(U,P){let q=i.get(U);if(U.isVideoTexture&&vt(U),U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){let rt=U.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(q,U,P);return}}e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+P)}function N(U,P){let q=i.get(U);if(U.version>0&&q.__version!==U.version){W(q,U,P);return}e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+P)}function z(U,P){let q=i.get(U);if(U.version>0&&q.__version!==U.version){W(q,U,P);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+P)}function H(U,P){let q=i.get(U);if(U.version>0&&q.__version!==U.version){nt(q,U,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+P)}let K={[Sn]:n.REPEAT,[Es]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},et={[yn]:n.NEAREST,[Zp]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[di]:n.LINEAR,[dl]:n.LINEAR_MIPMAP_NEAREST,[Ms]:n.LINEAR_MIPMAP_LINEAR},X={[jp]:n.NEVER,[sm]:n.ALWAYS,[Qp]:n.LESS,[Hd]:n.LEQUAL,[tm]:n.EQUAL,[im]:n.GEQUAL,[em]:n.GREATER,[nm]:n.NOTEQUAL};function ut(U,P){if(P.type===Ti&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===di||P.magFilter===dl||P.magFilter===bo||P.magFilter===Ms||P.minFilter===di||P.minFilter===dl||P.minFilter===bo||P.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,K[P.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,K[P.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,K[P.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,et[P.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,et[P.minFilter]),P.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,X[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===yn||P.minFilter!==bo&&P.minFilter!==Ms||P.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function yt(U,P){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,P.addEventListener("dispose",A));let rt=P.source,ht=d.get(rt);ht===void 0&&(ht={},d.set(rt,ht));let ot=w(P);if(ot!==U.__cacheKey){ht[ot]===void 0&&(ht[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ht[ot].usedTimes++;let Ut=ht[U.__cacheKey];Ut!==void 0&&(ht[U.__cacheKey].usedTimes--,Ut.usedTimes===0&&S(P)),U.__cacheKey=ot,U.__webglTexture=ht[ot].texture}return q}function W(U,P,q){let rt=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(rt=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(rt=n.TEXTURE_3D);let ht=yt(U,P),ot=P.source;e.bindTexture(rt,U.__webglTexture,n.TEXTURE0+q);let Ut=i.get(ot);if(ot.version!==Ut.__version||ht===!0){e.activeTexture(n.TEXTURE0+q);let xt=pe.getPrimaries(pe.workingColorSpace),Ft=P.colorSpace===Ji?null:pe.getPrimaries(P.colorSpace),he=P.colorSpace===Ji||xt===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let mt=y(P.image,!1,s.maxTextureSize);mt=qt(P,mt);let Dt=r.convert(P.format,P.colorSpace),Yt=r.convert(P.type),Zt=v(P.internalFormat,Dt,Yt,P.colorSpace,P.isVideoTexture);ut(rt,P);let Lt,de=P.mipmaps,se=P.isVideoTexture!==!0,Re=Ut.__version===void 0||ht===!0,k=ot.dataReady,At=M(P,mt);if(P.isDepthTexture)Zt=_(P.format===dr,P.type),Re&&(se?e.texStorage2D(n.TEXTURE_2D,1,Zt,mt.width,mt.height):e.texImage2D(n.TEXTURE_2D,0,Zt,mt.width,mt.height,0,Dt,Yt,null));else if(P.isDataTexture)if(de.length>0){se&&Re&&e.texStorage2D(n.TEXTURE_2D,At,Zt,de[0].width,de[0].height);for(let tt=0,lt=de.length;tt<lt;tt++)Lt=de[tt],se?k&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Lt.width,Lt.height,Dt,Yt,Lt.data):e.texImage2D(n.TEXTURE_2D,tt,Zt,Lt.width,Lt.height,0,Dt,Yt,Lt.data);P.generateMipmaps=!1}else se?(Re&&e.texStorage2D(n.TEXTURE_2D,At,Zt,mt.width,mt.height),k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt.width,mt.height,Dt,Yt,mt.data)):e.texImage2D(n.TEXTURE_2D,0,Zt,mt.width,mt.height,0,Dt,Yt,mt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){se&&Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Zt,de[0].width,de[0].height,mt.depth);for(let tt=0,lt=de.length;tt<lt;tt++)if(Lt=de[tt],P.format!==Un)if(Dt!==null)if(se){if(k)if(P.layerUpdates.size>0){let Rt=gd(Lt.width,Lt.height,P.format,P.type);for(let Tt of P.layerUpdates){let ee=Lt.data.subarray(Tt*Rt/Lt.data.BYTES_PER_ELEMENT,(Tt+1)*Rt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,Tt,Lt.width,Lt.height,1,Dt,ee)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Lt.width,Lt.height,mt.depth,Dt,Lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Zt,Lt.width,Lt.height,mt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Lt.width,Lt.height,mt.depth,Dt,Yt,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Zt,Lt.width,Lt.height,mt.depth,0,Dt,Yt,Lt.data)}else{se&&Re&&e.texStorage2D(n.TEXTURE_2D,At,Zt,de[0].width,de[0].height);for(let tt=0,lt=de.length;tt<lt;tt++)Lt=de[tt],P.format!==Un?Dt!==null?se?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,Lt.width,Lt.height,Dt,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Zt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?k&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Lt.width,Lt.height,Dt,Yt,Lt.data):e.texImage2D(n.TEXTURE_2D,tt,Zt,Lt.width,Lt.height,0,Dt,Yt,Lt.data)}else if(P.isDataArrayTexture)if(se){if(Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Zt,mt.width,mt.height,mt.depth),k)if(P.layerUpdates.size>0){let tt=gd(mt.width,mt.height,P.format,P.type);for(let lt of P.layerUpdates){let Rt=mt.data.subarray(lt*tt/mt.data.BYTES_PER_ELEMENT,(lt+1)*tt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,mt.width,mt.height,1,Dt,Yt,Rt)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Dt,Yt,mt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Zt,mt.width,mt.height,mt.depth,0,Dt,Yt,mt.data);else if(P.isData3DTexture)se?(Re&&e.texStorage3D(n.TEXTURE_3D,At,Zt,mt.width,mt.height,mt.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Dt,Yt,mt.data)):e.texImage3D(n.TEXTURE_3D,0,Zt,mt.width,mt.height,mt.depth,0,Dt,Yt,mt.data);else if(P.isFramebufferTexture){if(Re)if(se)e.texStorage2D(n.TEXTURE_2D,At,Zt,mt.width,mt.height);else{let tt=mt.width,lt=mt.height;for(let Rt=0;Rt<At;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Zt,tt,lt,0,Dt,Yt,null),tt>>=1,lt>>=1}}else if(de.length>0){if(se&&Re){let tt=Pt(de[0]);e.texStorage2D(n.TEXTURE_2D,At,Zt,tt.width,tt.height)}for(let tt=0,lt=de.length;tt<lt;tt++)Lt=de[tt],se?k&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Dt,Yt,Lt):e.texImage2D(n.TEXTURE_2D,tt,Zt,Dt,Yt,Lt);P.generateMipmaps=!1}else if(se){if(Re){let tt=Pt(mt);e.texStorage2D(n.TEXTURE_2D,At,Zt,tt.width,tt.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Dt,Yt,mt)}else e.texImage2D(n.TEXTURE_2D,0,Zt,Dt,Yt,mt);m(P)&&f(rt),Ut.__version=ot.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function nt(U,P,q){if(P.image.length!==6)return;let rt=yt(U,P),ht=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+q);let ot=i.get(ht);if(ht.version!==ot.__version||rt===!0){e.activeTexture(n.TEXTURE0+q);let Ut=pe.getPrimaries(pe.workingColorSpace),xt=P.colorSpace===Ji?null:pe.getPrimaries(P.colorSpace),Ft=P.colorSpace===Ji||Ut===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let he=P.isCompressedTexture||P.image[0].isCompressedTexture,mt=P.image[0]&&P.image[0].isDataTexture,Dt=[];for(let lt=0;lt<6;lt++)!he&&!mt?Dt[lt]=y(P.image[lt],!0,s.maxCubemapSize):Dt[lt]=mt?P.image[lt].image:P.image[lt],Dt[lt]=qt(P,Dt[lt]);let Yt=Dt[0],Zt=r.convert(P.format,P.colorSpace),Lt=r.convert(P.type),de=v(P.internalFormat,Zt,Lt,P.colorSpace),se=P.isVideoTexture!==!0,Re=ot.__version===void 0||rt===!0,k=ht.dataReady,At=M(P,Yt);ut(n.TEXTURE_CUBE_MAP,P);let tt;if(he){se&&Re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,de,Yt.width,Yt.height);for(let lt=0;lt<6;lt++){tt=Dt[lt].mipmaps;for(let Rt=0;Rt<tt.length;Rt++){let Tt=tt[Rt];P.format!==Un?Zt!==null?se?k&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,Tt.width,Tt.height,Zt,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,de,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,Tt.width,Tt.height,Zt,Lt,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,de,Tt.width,Tt.height,0,Zt,Lt,Tt.data)}}}else{if(tt=P.mipmaps,se&&Re){tt.length>0&&At++;let lt=Pt(Dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,de,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(mt){se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Dt[lt].width,Dt[lt].height,Zt,Lt,Dt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,de,Dt[lt].width,Dt[lt].height,0,Zt,Lt,Dt[lt].data);for(let Rt=0;Rt<tt.length;Rt++){let ee=tt[Rt].image[lt].image;se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,ee.width,ee.height,Zt,Lt,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,de,ee.width,ee.height,0,Zt,Lt,ee.data)}}else{se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Zt,Lt,Dt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,de,Zt,Lt,Dt[lt]);for(let Rt=0;Rt<tt.length;Rt++){let Tt=tt[Rt];se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,Zt,Lt,Tt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,de,Zt,Lt,Tt.image[lt])}}}m(P)&&f(n.TEXTURE_CUBE_MAP),ot.__version=ht.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function ct(U,P,q,rt,ht,ot){let Ut=r.convert(q.format,q.colorSpace),xt=r.convert(q.type),Ft=v(q.internalFormat,Ut,xt,q.colorSpace),he=i.get(P),mt=i.get(q);if(mt.__renderTarget=P,!he.__hasExternalTextures){let Dt=Math.max(1,P.width>>ot),Yt=Math.max(1,P.height>>ot);ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,ot,Ft,Dt,Yt,P.depth,0,Ut,xt,null):e.texImage2D(ht,ot,Ft,Dt,Yt,0,Ut,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),It(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,ht,mt.__webglTexture,0,pt(P)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,rt,ht,mt.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(U,P,q){if(n.bindRenderbuffer(n.RENDERBUFFER,U),P.depthBuffer){let rt=P.depthTexture,ht=rt&&rt.isDepthTexture?rt.type:null,ot=_(P.stencilBuffer,ht),Ut=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=pt(P);It(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,ot,P.width,P.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,ot,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,ot,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,U)}else{let rt=P.textures;for(let ht=0;ht<rt.length;ht++){let ot=rt[ht],Ut=r.convert(ot.format,ot.colorSpace),xt=r.convert(ot.type),Ft=v(ot.internalFormat,Ut,xt,ot.colorSpace),he=pt(P);q&&It(P)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Ft,P.width,P.height):It(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,Ft,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Ft,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(U,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=i.get(P.depthTexture);rt.__renderTarget=P,(!rt.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),L(P.depthTexture,0);let ht=rt.__webglTexture,ot=pt(P);if(P.depthTexture.format===rr)It(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0);else if(P.depthTexture.format===dr)It(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function ft(U){let P=i.get(U),q=U.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==U.depthTexture){let rt=U.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),rt){let ht=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,rt.removeEventListener("dispose",ht)};rt.addEventListener("dispose",ht),P.__depthDisposeCallback=ht}P.__boundDepthTexture=rt}if(U.depthTexture&&!P.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");it(P.__webglFramebuffer,U)}else if(q){P.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[rt]),P.__webglDepthbuffer[rt]===void 0)P.__webglDepthbuffer[rt]=n.createRenderbuffer(),Z(P.__webglDepthbuffer[rt],U,!1);else{let ht=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=P.__webglDepthbuffer[rt];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),Z(P.__webglDepthbuffer,U,!1);else{let rt=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,ht)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(U,P,q){let rt=i.get(U);P!==void 0&&ct(rt.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ft(U)}function Gt(U){let P=U.texture,q=i.get(U),rt=i.get(P);U.addEventListener("dispose",b);let ht=U.textures,ot=U.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture()),rt.__version=P.version,o.memory.textures++),ot){q.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(P.mipmaps&&P.mipmaps.length>0){q.__webglFramebuffer[xt]=[];for(let Ft=0;Ft<P.mipmaps.length;Ft++)q.__webglFramebuffer[xt][Ft]=n.createFramebuffer()}else q.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){q.__webglFramebuffer=[];for(let xt=0;xt<P.mipmaps.length;xt++)q.__webglFramebuffer[xt]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let xt=0,Ft=ht.length;xt<Ft;xt++){let he=i.get(ht[xt]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&It(U)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let xt=0;xt<ht.length;xt++){let Ft=ht[xt];q.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[xt]);let he=r.convert(Ft.format,Ft.colorSpace),mt=r.convert(Ft.type),Dt=v(Ft.internalFormat,he,mt,Ft.colorSpace,U.isXRRenderTarget===!0),Yt=pt(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,Dt,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,q.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),ut(n.TEXTURE_CUBE_MAP,P);for(let xt=0;xt<6;xt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ft=0;Ft<P.mipmaps.length;Ft++)ct(q.__webglFramebuffer[xt][Ft],U,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft);else ct(q.__webglFramebuffer[xt],U,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(P)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let xt=0,Ft=ht.length;xt<Ft;xt++){let he=ht[xt],mt=i.get(he);e.bindTexture(n.TEXTURE_2D,mt.__webglTexture),ut(n.TEXTURE_2D,he),ct(q.__webglFramebuffer,U,he,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),m(he)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xt=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,rt.__webglTexture),ut(xt,P),P.mipmaps&&P.mipmaps.length>0)for(let Ft=0;Ft<P.mipmaps.length;Ft++)ct(q.__webglFramebuffer[Ft],U,P,n.COLOR_ATTACHMENT0,xt,Ft);else ct(q.__webglFramebuffer,U,P,n.COLOR_ATTACHMENT0,xt,0);m(P)&&f(xt),e.unbindTexture()}U.depthBuffer&&ft(U)}function st(U){let P=U.textures;for(let q=0,rt=P.length;q<rt;q++){let ht=P[q];if(m(ht)){let ot=E(U),Ut=i.get(ht).__webglTexture;e.bindTexture(ot,Ut),f(ot),e.unbindTexture()}}}let dt=[],B=[];function zt(U){if(U.samples>0){if(It(U)===!1){let P=U.textures,q=U.width,rt=U.height,ht=n.COLOR_BUFFER_BIT,ot=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(U),xt=P.length>1;if(xt)for(let Ft=0;Ft<P.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Ft=0;Ft<P.length;Ft++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ft]);let he=i.get(P[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,q,rt,0,0,q,rt,ht,n.NEAREST),l===!0&&(dt.length=0,B.length=0,dt.push(n.COLOR_ATTACHMENT0+Ft),U.depthBuffer&&U.resolveDepthBuffer===!1&&(dt.push(ot),B.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Ft=0;Ft<P.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ft]);let he=i.get(P[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,he,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let P=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function pt(U){return Math.min(s.maxSamples,U.samples)}function It(U){let P=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function vt(U){let P=o.render.frame;h.get(U)!==P&&(h.set(U,P),U.update())}function qt(U,P){let q=U.colorSpace,rt=U.format,ht=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==es&&q!==Ji&&(pe.getTransfer(q)===Ae?(rt!==Un||ht!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),P}function Pt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.setTexture2D=L,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=St,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=It}function h_(n,t){function e(i,s=Ji){let r,o=pe.getTransfer(s);if(i===Ci)return n.UNSIGNED_BYTE;if(i===gh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_h)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rd)return n.BYTE;if(i===Cd)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===mh)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===Ti)return n.FLOAT;if(i===Rn)return n.HALF_FLOAT;if(i===Fd)return n.ALPHA;if(i===Id)return n.RGB;if(i===Un)return n.RGBA;if(i===Dd)return n.LUMINANCE;if(i===Ld)return n.LUMINANCE_ALPHA;if(i===rr)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===Ud)return n.RED;if(i===yh)return n.RED_INTEGER;if(i===Nd)return n.RG;if(i===vh)return n.RG_INTEGER;if(i===Eh)return n.RGBA_INTEGER;if(i===$o||i===Jo||i===Ko||i===jo)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ic||i===sc||i===rc||i===oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ac||i===lc)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===yc||i===vc||i===Ec||i===Mc||i===xc||i===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===bc||i===Sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bd||i===Tc||i===wc||i===Rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Vc=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Y=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},u_={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Y,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Y,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Y,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Y;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`,Wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new He({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Xt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xc=class extends Fi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new Wc,m=e.getContextAttributes(),f=null,E=null,v=[],_=[],M=new at,A=null,b=new dn;b.viewport=new be;let C=new dn;C.viewport=new be;let S=[b,C],x=new Vc,T=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let nt=v[W];return nt===void 0&&(nt=new qr,v[W]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(W){let nt=v[W];return nt===void 0&&(nt=new qr,v[W]=nt),nt.getGripSpace()},this.getHand=function(W){let nt=v[W];return nt===void 0&&(nt=new qr,v[W]=nt),nt.getHandSpace()};function F(W){let nt=_.indexOf(W.inputSource);if(nt===-1)return;let ct=v[nt];ct!==void 0&&(ct.update(W.inputSource,W.frame,c||o),ct.dispatchEvent({type:W.type,data:W.inputSource}))}function w(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",w),s.removeEventListener("inputsourceschange",L);for(let W=0;W<v.length;W++){let nt=_[W];nt!==null&&(_[W]=null,v[W].disconnect(nt))}T=null,R=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",w),s.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new en(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,ct=null,Z=null;m.depth&&(Z=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?dr:rr,ct=m.stencil?ur:Pi);let it={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(it),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new en(d.textureWidth,d.textureHeight,{format:Un,type:Ci,depthTexture:new mr(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function L(W){for(let nt=0;nt<W.removed.length;nt++){let ct=W.removed[nt],Z=_.indexOf(ct);Z>=0&&(_[Z]=null,v[Z].disconnect(ct))}for(let nt=0;nt<W.added.length;nt++){let ct=W.added[nt],Z=_.indexOf(ct);if(Z===-1){for(let ft=0;ft<v.length;ft++)if(ft>=_.length){_.push(ct),Z=ft;break}else if(_[ft]===null){_[ft]=ct,Z=ft;break}if(Z===-1)break}let it=v[Z];it&&it.connect(ct)}}let N=new O,z=new O;function H(W,nt,ct){N.setFromMatrixPosition(nt.matrixWorld),z.setFromMatrixPosition(ct.matrixWorld);let Z=N.distanceTo(z),it=nt.projectionMatrix.elements,ft=ct.projectionMatrix.elements,St=it[14]/(it[10]-1),Gt=it[14]/(it[10]+1),st=(it[9]+1)/it[5],dt=(it[9]-1)/it[5],B=(it[8]-1)/it[0],zt=(ft[8]+1)/ft[0],pt=St*B,It=St*zt,vt=Z/(-B+zt),qt=vt*-B;if(nt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(qt),W.translateZ(vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),it[10]===-1)W.projectionMatrix.copy(nt.projectionMatrix),W.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Pt=St+vt,U=Gt+vt,P=pt-qt,q=It+(Z-qt),rt=st*Gt/U*Pt,ht=dt*Gt/U*Pt;W.projectionMatrix.makePerspective(P,q,rt,ht,Pt,U),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function K(W,nt){nt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(nt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let nt=W.near,ct=W.far;y.texture!==null&&(y.depthNear>0&&(nt=y.depthNear),y.depthFar>0&&(ct=y.depthFar)),x.near=C.near=b.near=nt,x.far=C.far=b.far=ct,(T!==x.near||R!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,R=x.far),b.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,x.layers.mask=b.layers.mask|C.layers.mask;let Z=W.parent,it=x.cameras;K(x,Z);for(let ft=0;ft<it.length;ft++)K(it[ft],Z);it.length===2?H(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),et(W,x,Z)};function et(W,nt,ct){ct===null?W.matrix.copy(nt.matrixWorld):(W.matrix.copy(ct.matrixWorld),W.matrix.invert(),W.matrix.multiply(nt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(nt.projectionMatrix),W.projectionMatrixInverse.copy(nt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Jr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let X=null;function ut(W,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){let ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Z=!1;ct.length!==x.cameras.length&&(x.cameras.length=0,Z=!0);for(let ft=0;ft<ct.length;ft++){let St=ct[ft],Gt=null;if(p!==null)Gt=p.getViewport(St);else{let dt=u.getViewSubImage(d,St);Gt=dt.viewport,ft===0&&(t.setRenderTargetTextures(E,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(E))}let st=S[ft];st===void 0&&(st=new dn,st.layers.enable(ft),st.viewport=new be,S[ft]=st),st.matrix.fromArray(St.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(St.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),ft===0&&(x.matrix.copy(st.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Z===!0&&x.cameras.push(st)}let it=s.enabledFeatures;if(it&&it.includes("depth-sensing")){let ft=u.getDepthInformation(ct[0]);ft&&ft.isValid&&ft.texture&&y.init(t,ft,s.renderState)}}for(let ct=0;ct<v.length;ct++){let Z=_[ct],it=v[ct];Z!==null&&it!==void 0&&it.update(Z,nt,c||o)}X&&X(W,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}let yt=new Wd;yt.setAnimationLoop(ut),this.setAnimationLoop=function(W){X=W},this.dispose=function(){}}},ms=new Ii,p_=new xe;function m_(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Vd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f),v=E.envMap,_=E.envMapRotation;v&&(m.envMap.value=v,ms.copy(_),ms.x*=-1,ms.y*=-1,ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(ms)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function g_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){let _=v.program;i.uniformBlockBinding(E,_)}function c(E,v){let _=s[E.id];_===void 0&&(g(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",m));let M=v.program;i.updateUBOMapping(E,M);let A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){let v=u();E.__bindingPointIndex=v;let _=n.createBuffer(),M=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,M,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let v=s[E.id],_=E.uniforms,M=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,b=_.length;A<b;A++){let C=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,x=C.length;S<x;S++){let T=C[S];if(p(T,A,S,M)===!0){let R=T.__offset,F=Array.isArray(T.value)?T.value:[T.value],w=0;for(let L=0;L<F.length;L++){let N=F[L],z=y(N);typeof N=="number"||typeof N=="boolean"?(T.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,R+w,T.__data)):N.isMatrix3?(T.__data[0]=N.elements[0],T.__data[1]=N.elements[1],T.__data[2]=N.elements[2],T.__data[3]=0,T.__data[4]=N.elements[3],T.__data[5]=N.elements[4],T.__data[6]=N.elements[5],T.__data[7]=0,T.__data[8]=N.elements[6],T.__data[9]=N.elements[7],T.__data[10]=N.elements[8],T.__data[11]=0):(N.toArray(T.__data,w),w+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,v,_,M){let A=E.value,b=v+"_"+_;if(M[b]===void 0)return typeof A=="number"||typeof A=="boolean"?M[b]=A:M[b]=A.clone(),!0;{let C=M[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return M[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(E){let v=E.uniforms,_=0,M=16;for(let b=0,C=v.length;b<C;b++){let S=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,T=S.length;x<T;x++){let R=S[x],F=Array.isArray(R.value)?R.value:[R.value];for(let w=0,L=F.length;w<L;w++){let N=F[w],z=y(N),H=_%M,K=H%z.boundary,et=H+K;_+=K,et!==0&&M-et<z.storage&&(_+=M-et),R.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=_,_+=z.storage}}}let A=_%M;return A>0&&(_+=M-A),E.__size=_,E.__cache={},this}function y(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){let v=E.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var da=class{constructor(t={}){let{canvas:e=Mm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,E=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=pi,this.toneMappingExposure=1;let _=this,M=!1,A=0,b=0,C=null,S=-1,x=null,T=new be,R=new be,F=null,w=new kt(0),L=0,N=e.width,z=e.height,H=1,K=null,et=null,X=new be(0,0,N,z),ut=new be(0,0,N,z),yt=!1,W=new Qr,nt=!1,ct=!1,Z=new xe,it=new xe,ft=new O,St=new be,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function dt(){return C===null?H:1}let B=i;function zt(I,G){return e.getContext(I,G)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fh}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),B===null){let G="webgl2";if(B=zt(G,I),B===null)throw zt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let pt,It,vt,qt,Pt,U,P,q,rt,ht,ot,Ut,xt,Ft,he,mt,Dt,Yt,Zt,Lt,de,se,Re,k;function At(){pt=new I1(B),pt.init(),se=new h_(B,pt),It=new T1(B,pt,t,se),vt=new a_(B,pt),It.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),qt=new U1(B),Pt=new Z2,U=new c_(B,pt,vt,Pt,It,se,qt),P=new R1(_),q=new F1(_),rt=new Gm(B),Re=new b1(B,rt),ht=new D1(B,rt,qt,Re),ot=new B1(B,ht,rt,qt),Zt=new N1(B,It,U),mt=new w1(Pt),Ut=new Y2(_,P,q,pt,It,Re,mt),xt=new m_(_,Pt),Ft=new J2,he=new n_(pt),Yt=new A1(_,P,q,vt,ot,p,l),Dt=new r_(_,ot,It),k=new g_(B,qt,It,vt),Lt=new S1(B,pt,qt),de=new L1(B,pt,qt),qt.programs=Ut.programs,_.capabilities=It,_.extensions=pt,_.properties=Pt,_.renderLists=Ft,_.shadowMap=Dt,_.state=vt,_.info=qt}At();let tt=new Xc(_,B);this.xr=tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let I=pt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=pt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(I){I!==void 0&&(H=I,this.setSize(N,z,!1))},this.getSize=function(I){return I.set(N,z)},this.setSize=function(I,G,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=I,z=G,e.width=Math.floor(I*H),e.height=Math.floor(G*H),$===!0&&(e.style.width=I+"px",e.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(N*H,z*H).floor()},this.setDrawingBufferSize=function(I,G,$){N=I,z=G,H=$,e.width=Math.floor(I*$),e.height=Math.floor(G*$),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(T)},this.getViewport=function(I){return I.copy(X)},this.setViewport=function(I,G,$,J){I.isVector4?X.set(I.x,I.y,I.z,I.w):X.set(I,G,$,J),vt.viewport(T.copy(X).multiplyScalar(H).round())},this.getScissor=function(I){return I.copy(ut)},this.setScissor=function(I,G,$,J){I.isVector4?ut.set(I.x,I.y,I.z,I.w):ut.set(I,G,$,J),vt.scissor(R.copy(ut).multiplyScalar(H).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(I){vt.setScissorTest(yt=I)},this.setOpaqueSort=function(I){K=I},this.setTransparentSort=function(I){et=I},this.getClearColor=function(I){return I.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(I=!0,G=!0,$=!0){let J=0;if(I){let V=!1;if(C!==null){let gt=C.texture.format;V=gt===Eh||gt===vh||gt===yh}if(V){let gt=C.texture.type,wt=gt===Ci||gt===Pi||gt===$r||gt===ur||gt===gh||gt===_h,Nt=Yt.getClearColor(),Bt=Yt.getClearAlpha(),jt=Nt.r,ne=Nt.g,Ot=Nt.b;wt?(g[0]=jt,g[1]=ne,g[2]=Ot,g[3]=Bt,B.clearBufferuiv(B.COLOR,0,g)):(y[0]=jt,y[1]=ne,y[2]=Ot,y[3]=Bt,B.clearBufferiv(B.COLOR,0,y))}else J|=B.COLOR_BUFFER_BIT}G&&(J|=B.DEPTH_BUFFER_BIT),$&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Ft.dispose(),he.dispose(),Pt.dispose(),P.dispose(),q.dispose(),ot.dispose(),Re.dispose(),k.dispose(),Ut.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",cu),tt.removeEventListener("sessionend",hu),cs.stop()};function lt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=qt.autoReset,G=Dt.enabled,$=Dt.autoUpdate,J=Dt.needsUpdate,V=Dt.type;At(),qt.autoReset=I,Dt.enabled=G,Dt.autoUpdate=$,Dt.needsUpdate=J,Dt.type=V}function Tt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ee(I){let G=I.target;G.removeEventListener("dispose",ee),Oe(G)}function Oe(I){cn(I),Pt.remove(I)}function cn(I){let G=Pt.get(I).programs;G!==void 0&&(G.forEach(function($){Ut.releaseProgram($)}),I.isShaderMaterial&&Ut.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,$,J,V,gt){G===null&&(G=Gt);let wt=V.isMesh&&V.matrixWorld.determinant()<0,Nt=pp(I,G,$,J,V);vt.setMaterial(J,wt);let Bt=$.index,jt=1;if(J.wireframe===!0){if(Bt=ht.getWireframeAttribute($),Bt===void 0)return;jt=2}let ne=$.drawRange,Ot=$.attributes.position,ge=ne.start*jt,Ce=(ne.start+ne.count)*jt;gt!==null&&(ge=Math.max(ge,gt.start*jt),Ce=Math.min(Ce,(gt.start+gt.count)*jt)),Bt!==null?(ge=Math.max(ge,0),Ce=Math.min(Ce,Bt.count)):Ot!=null&&(ge=Math.max(ge,0),Ce=Math.min(Ce,Ot.count));let Pe=Ce-ge;if(Pe<0||Pe===1/0)return;Re.setup(V,J,Nt,$,Bt);let bn,ve=Lt;if(Bt!==null&&(bn=rt.get(Bt),ve=de,ve.setIndex(bn)),V.isMesh)J.wireframe===!0?(vt.setLineWidth(J.wireframeLinewidth*dt()),ve.setMode(B.LINES)):ve.setMode(B.TRIANGLES);else if(V.isLine){let Vt=J.linewidth;Vt===void 0&&(Vt=1),vt.setLineWidth(Vt*dt()),V.isLineSegments?ve.setMode(B.LINES):V.isLineLoop?ve.setMode(B.LINE_LOOP):ve.setMode(B.LINE_STRIP)}else V.isPoints?ve.setMode(B.POINTS):V.isSprite&&ve.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ve.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))ve.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Vt=V._multiDrawStarts,vi=V._multiDrawCounts,Ee=V._multiDrawCount,ni=Bt?rt.get(Bt).bytesPerElement:1,zs=Pt.get(J).currentProgram.getUniforms();for(let In=0;In<Ee;In++)zs.setValue(B,"_gl_DrawID",In),ve.render(Vt[In]/ni,vi[In])}else if(V.isInstancedMesh)ve.renderInstances(ge,Pe,V.count);else if($.isInstancedBufferGeometry){let Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,vi=Math.min($.instanceCount,Vt);ve.renderInstances(ge,Pe,vi)}else ve.render(ge,Pe)};function Me(I,G,$){I.transparent===!0&&I.side===me&&I.forceSinglePass===!1?(I.side=tn,I.needsUpdate=!0,Ao(I,G,$),I.side=ji,I.needsUpdate=!0,Ao(I,G,$),I.side=me):Ao(I,G,$)}this.compile=function(I,G,$=null){$===null&&($=I),f=he.get($),f.init(G),v.push(f),$.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),I!==$&&I.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();let J=new Set;return I.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let gt=V.material;if(gt)if(Array.isArray(gt))for(let wt=0;wt<gt.length;wt++){let Nt=gt[wt];Me(Nt,$,V),J.add(Nt)}else Me(gt,$,V),J.add(gt)}),v.pop(),f=null,J},this.compileAsync=function(I,G,$=null){let J=this.compile(I,G,$);return new Promise(V=>{function gt(){if(J.forEach(function(wt){Pt.get(wt).currentProgram.isReady()&&J.delete(wt)}),J.size===0){V(I);return}setTimeout(gt,10)}pt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ei=null;function yi(I){ei&&ei(I)}function cu(){cs.stop()}function hu(){cs.start()}let cs=new Wd;cs.setAnimationLoop(yi),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(I){ei=I,tt.setAnimationLoop(I),I===null?cs.stop():cs.start()},tt.addEventListener("sessionstart",cu),tt.addEventListener("sessionend",hu),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(G),G=tt.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,G,C),f=he.get(I,v.length),f.init(G),v.push(f),it.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),W.setFromProjectionMatrix(it),ct=this.localClippingEnabled,nt=mt.init(this.clippingPlanes,ct),m=Ft.get(I,E.length),m.init(),E.push(m),tt.enabled===!0&&tt.isPresenting===!0){let gt=_.xr.getDepthSensingMesh();gt!==null&&ul(gt,G,-1/0,_.sortObjects)}ul(I,G,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(K,et),st=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,st&&Yt.addToRenderList(m,I),this.info.render.frame++,nt===!0&&mt.beginShadows();let $=f.state.shadowsArray;Dt.render($,I,G),nt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,V=m.transmissive;if(f.setupLights(),G.isArrayCamera){let gt=G.cameras;if(V.length>0)for(let wt=0,Nt=gt.length;wt<Nt;wt++){let Bt=gt[wt];du(J,V,I,Bt)}st&&Yt.render(I);for(let wt=0,Nt=gt.length;wt<Nt;wt++){let Bt=gt[wt];uu(m,I,Bt,Bt.viewport)}}else V.length>0&&du(J,V,I,G),st&&Yt.render(I),uu(m,I,G);C!==null&&(U.updateMultisampleRenderTarget(C),U.updateRenderTargetMipmap(C)),I.isScene===!0&&I.onAfterRender(_,I,G),Re.resetDefaultState(),S=-1,x=null,v.pop(),v.length>0?(f=v[v.length-1],nt===!0&&mt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ul(I,G,$,J){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)$=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)f.pushLight(I),I.castShadow&&f.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||W.intersectsSprite(I)){J&&St.setFromMatrixPosition(I.matrixWorld).applyMatrix4(it);let wt=ot.update(I),Nt=I.material;Nt.visible&&m.push(I,wt,Nt,$,St.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||W.intersectsObject(I))){let wt=ot.update(I),Nt=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),St.copy(I.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),St.copy(wt.boundingSphere.center)),St.applyMatrix4(I.matrixWorld).applyMatrix4(it)),Array.isArray(Nt)){let Bt=wt.groups;for(let jt=0,ne=Bt.length;jt<ne;jt++){let Ot=Bt[jt],ge=Nt[Ot.materialIndex];ge&&ge.visible&&m.push(I,wt,ge,$,St.z,Ot)}}else Nt.visible&&m.push(I,wt,Nt,$,St.z,null)}}let gt=I.children;for(let wt=0,Nt=gt.length;wt<Nt;wt++)ul(gt[wt],G,$,J)}function uu(I,G,$,J){let V=I.opaque,gt=I.transmissive,wt=I.transparent;f.setupLightsView($),nt===!0&&mt.setGlobalState(_.clippingPlanes,$),J&&vt.viewport(T.copy(J)),V.length>0&&xo(V,G,$),gt.length>0&&xo(gt,G,$),wt.length>0&&xo(wt,G,$),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function du(I,G,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new en(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Rn:Ci,minFilter:Ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));let gt=f.state.transmissionRenderTarget[J.id],wt=J.viewport||T;gt.setSize(wt.z,wt.w);let Nt=_.getRenderTarget();_.setRenderTarget(gt),_.getClearColor(w),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear(),st&&Yt.render($);let Bt=_.toneMapping;_.toneMapping=pi;let jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),nt===!0&&mt.setGlobalState(_.clippingPlanes,J),xo(I,$,J),U.updateMultisampleRenderTarget(gt),U.updateRenderTargetMipmap(gt),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Ot=0,ge=G.length;Ot<ge;Ot++){let Ce=G[Ot],Pe=Ce.object,bn=Ce.geometry,ve=Ce.material,Vt=Ce.group;if(ve.side===me&&Pe.layers.test(J.layers)){let vi=ve.side;ve.side=tn,ve.needsUpdate=!0,fu(Pe,$,J,bn,ve,Vt),ve.side=vi,ve.needsUpdate=!0,ne=!0}}ne===!0&&(U.updateMultisampleRenderTarget(gt),U.updateRenderTargetMipmap(gt))}_.setRenderTarget(Nt),_.setClearColor(w,L),jt!==void 0&&(J.viewport=jt),_.toneMapping=Bt}function xo(I,G,$){let J=G.isScene===!0?G.overrideMaterial:null;for(let V=0,gt=I.length;V<gt;V++){let wt=I[V],Nt=wt.object,Bt=wt.geometry,jt=J===null?wt.material:J,ne=wt.group;Nt.layers.test($.layers)&&fu(Nt,G,$,Bt,jt,ne)}}function fu(I,G,$,J,V,gt){I.onBeforeRender(_,G,$,J,V,gt),I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),V.onBeforeRender(_,G,$,J,I,gt),V.transparent===!0&&V.side===me&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,_.renderBufferDirect($,G,J,V,I,gt),V.side=ji,V.needsUpdate=!0,_.renderBufferDirect($,G,J,V,I,gt),V.side=me):_.renderBufferDirect($,G,J,V,I,gt),I.onAfterRender(_,G,$,J,V,gt)}function Ao(I,G,$){G.isScene!==!0&&(G=Gt);let J=Pt.get(I),V=f.state.lights,gt=f.state.shadowsArray,wt=V.state.version,Nt=Ut.getParameters(I,V.state,gt,G,$),Bt=Ut.getProgramCacheKey(Nt),jt=J.programs;J.environment=I.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(I.isMeshStandardMaterial?q:P).get(I.envMap||J.environment),J.envMapRotation=J.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,jt===void 0&&(I.addEventListener("dispose",ee),jt=new Map,J.programs=jt);let ne=jt.get(Bt);if(ne!==void 0){if(J.currentProgram===ne&&J.lightsStateVersion===wt)return mu(I,Nt),ne}else Nt.uniforms=Ut.getUniforms(I),I.onBeforeCompile(Nt,_),ne=Ut.acquireProgram(Nt,Bt),jt.set(Bt,ne),J.uniforms=Nt.uniforms;let Ot=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ot.clippingPlanes=mt.uniform),mu(I,Nt),J.needsLights=gp(I),J.lightsStateVersion=wt,J.needsLights&&(Ot.ambientLightColor.value=V.state.ambient,Ot.lightProbe.value=V.state.probe,Ot.directionalLights.value=V.state.directional,Ot.directionalLightShadows.value=V.state.directionalShadow,Ot.spotLights.value=V.state.spot,Ot.spotLightShadows.value=V.state.spotShadow,Ot.rectAreaLights.value=V.state.rectArea,Ot.ltc_1.value=V.state.rectAreaLTC1,Ot.ltc_2.value=V.state.rectAreaLTC2,Ot.pointLights.value=V.state.point,Ot.pointLightShadows.value=V.state.pointShadow,Ot.hemisphereLights.value=V.state.hemi,Ot.directionalShadowMap.value=V.state.directionalShadowMap,Ot.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ot.spotShadowMap.value=V.state.spotShadowMap,Ot.spotLightMatrix.value=V.state.spotLightMatrix,Ot.spotLightMap.value=V.state.spotLightMap,Ot.pointShadowMap.value=V.state.pointShadowMap,Ot.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=ne,J.uniformsList=null,ne}function pu(I){if(I.uniformsList===null){let G=I.currentProgram.getUniforms();I.uniformsList=ar.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function mu(I,G){let $=Pt.get(I);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function pp(I,G,$,J,V){G.isScene!==!0&&(G=Gt),U.resetTextureUnits();let gt=G.fog,wt=J.isMeshStandardMaterial?G.environment:null,Nt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:es,Bt=(J.isMeshStandardMaterial?q:P).get(J.envMap||wt),jt=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ne=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ot=!!$.morphAttributes.position,ge=!!$.morphAttributes.normal,Ce=!!$.morphAttributes.color,Pe=pi;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pe=_.toneMapping);let bn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ve=bn!==void 0?bn.length:0,Vt=Pt.get(J),vi=f.state.lights;if(nt===!0&&(ct===!0||I!==x)){let Vn=I===x&&J.id===S;mt.setState(J,I,Vn)}let Ee=!1;J.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==vi.state.version||Vt.outputColorSpace!==Nt||V.isBatchedMesh&&Vt.batching===!1||!V.isBatchedMesh&&Vt.batching===!0||V.isBatchedMesh&&Vt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Vt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Vt.instancing===!1||!V.isInstancedMesh&&Vt.instancing===!0||V.isSkinnedMesh&&Vt.skinning===!1||!V.isSkinnedMesh&&Vt.skinning===!0||V.isInstancedMesh&&Vt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Vt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Vt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Vt.instancingMorph===!1&&V.morphTexture!==null||Vt.envMap!==Bt||J.fog===!0&&Vt.fog!==gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==mt.numPlanes||Vt.numIntersection!==mt.numIntersection)||Vt.vertexAlphas!==jt||Vt.vertexTangents!==ne||Vt.morphTargets!==Ot||Vt.morphNormals!==ge||Vt.morphColors!==Ce||Vt.toneMapping!==Pe||Vt.morphTargetsCount!==ve)&&(Ee=!0):(Ee=!0,Vt.__version=J.version);let ni=Vt.currentProgram;Ee===!0&&(ni=Ao(J,G,V));let zs=!1,In=!1,Ur=!1,Fe=ni.getUniforms(),hi=Vt.uniforms;if(vt.useProgram(ni.program)&&(zs=!0,In=!0,Ur=!0),J.id!==S&&(S=J.id,In=!0),zs||x!==I){vt.buffers.depth.getReversed()?(Z.copy(I.projectionMatrix),Am(Z),bm(Z),Fe.setValue(B,"projectionMatrix",Z)):Fe.setValue(B,"projectionMatrix",I.projectionMatrix),Fe.setValue(B,"viewMatrix",I.matrixWorldInverse);let Gi=Fe.map.cameraPosition;Gi!==void 0&&Gi.setValue(B,ft.setFromMatrixPosition(I.matrixWorld)),It.logarithmicDepthBuffer&&Fe.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Fe.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),x!==I&&(x=I,In=!0,Ur=!0)}if(V.isSkinnedMesh){Fe.setOptional(B,V,"bindMatrix"),Fe.setOptional(B,V,"bindMatrixInverse");let Vn=V.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Fe.setValue(B,"boneTexture",Vn.boneTexture,U))}V.isBatchedMesh&&(Fe.setOptional(B,V,"batchingTexture"),Fe.setValue(B,"batchingTexture",V._matricesTexture,U),Fe.setOptional(B,V,"batchingIdTexture"),Fe.setValue(B,"batchingIdTexture",V._indirectTexture,U),Fe.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&Fe.setValue(B,"batchingColorTexture",V._colorsTexture,U));let Nr=$.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&Zt.update(V,$,ni),(In||Vt.receiveShadow!==V.receiveShadow)&&(Vt.receiveShadow=V.receiveShadow,Fe.setValue(B,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(hi.envMap.value=Bt,hi.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(hi.envMapIntensity.value=G.environmentIntensity),In&&(Fe.setValue(B,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&mp(hi,Ur),gt&&J.fog===!0&&xt.refreshFogUniforms(hi,gt),xt.refreshMaterialUniforms(hi,J,H,z,f.state.transmissionRenderTarget[I.id]),ar.upload(B,pu(Vt),hi,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ar.upload(B,pu(Vt),hi,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Fe.setValue(B,"center",V.center),Fe.setValue(B,"modelViewMatrix",V.modelViewMatrix),Fe.setValue(B,"normalMatrix",V.normalMatrix),Fe.setValue(B,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Vn=J.uniformsGroups;for(let Gi=0,Vi=Vn.length;Gi<Vi;Gi++){let gu=Vn[Gi];k.update(gu,ni),k.bind(gu,ni)}}return ni}function mp(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function gp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(I,G,$){Pt.get(I.texture).__webglTexture=G,Pt.get(I.depthTexture).__webglTexture=$;let J=Pt.get(I);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,G){let $=Pt.get(I);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,$=0){C=I,A=G,b=$;let J=!0,V=null,gt=!1,wt=!1;if(I){let Bt=Pt.get(I);if(Bt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(Bt.__webglFramebuffer===void 0)U.setupRenderTarget(I);else if(Bt.__hasExternalTextures)U.rebindTextures(I,Pt.get(I.texture).__webglTexture,Pt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ot=I.depthTexture;if(Bt.__boundDepthTexture!==Ot){if(Ot!==null&&Pt.has(Ot)&&(I.width!==Ot.image.width||I.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(I)}}let jt=I.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(wt=!0);let ne=Pt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ne[G])?V=ne[G][$]:V=ne[G],gt=!0):I.samples>0&&U.useMultisampledRTT(I)===!1?V=Pt.get(I).__webglMultisampledFramebuffer:Array.isArray(ne)?V=ne[$]:V=ne,T.copy(I.viewport),R.copy(I.scissor),F=I.scissorTest}else T.copy(X).multiplyScalar(H).floor(),R.copy(ut).multiplyScalar(H).floor(),F=yt;if(vt.bindFramebuffer(B.FRAMEBUFFER,V)&&J&&vt.drawBuffers(I,V),vt.viewport(T),vt.scissor(R),vt.setScissorTest(F),gt){let Bt=Pt.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Bt.__webglTexture,$)}else if(wt){let Bt=Pt.get(I.texture),jt=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Bt.__webglTexture,$||0,jt)}S=-1},this.readRenderTargetPixels=function(I,G,$,J,V,gt,wt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Pt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){vt.bindFramebuffer(B.FRAMEBUFFER,Nt);try{let Bt=I.texture,jt=Bt.format,ne=Bt.type;if(!It.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-J&&$>=0&&$<=I.height-V&&B.readPixels(G,$,J,V,se.convert(jt),se.convert(ne),gt)}finally{let Bt=C!==null?Pt.get(C).__webglFramebuffer:null;vt.bindFramebuffer(B.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(I,G,$,J,V,gt,wt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Pt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){let Bt=I.texture,jt=Bt.format,ne=Bt.type;if(!It.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=I.width-J&&$>=0&&$<=I.height-V){vt.bindFramebuffer(B.FRAMEBUFFER,Nt);let Ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ot),B.bufferData(B.PIXEL_PACK_BUFFER,gt.byteLength,B.STREAM_READ),B.readPixels(G,$,J,V,se.convert(jt),se.convert(ne),0);let ge=C!==null?Pt.get(C).__webglFramebuffer:null;vt.bindFramebuffer(B.FRAMEBUFFER,ge);let Ce=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await xm(B,Ce,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,gt),B.deleteBuffer(Ot),B.deleteSync(Ce),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,G=null,$=0){I.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,I=arguments[1]);let J=Math.pow(2,-$),V=Math.floor(I.image.width*J),gt=Math.floor(I.image.height*J),wt=G!==null?G.x:0,Nt=G!==null?G.y:0;U.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,wt,Nt,V,gt),vt.unbindTexture()},this.copyTextureToTexture=function(I,G,$=null,J=null,V=0){I.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1],G=arguments[2],V=arguments[3]||0,$=null);let gt,wt,Nt,Bt,jt,ne,Ot,ge,Ce,Pe=I.isCompressedTexture?I.mipmaps[V]:I.image;$!==null?(gt=$.max.x-$.min.x,wt=$.max.y-$.min.y,Nt=$.isBox3?$.max.z-$.min.z:1,Bt=$.min.x,jt=$.min.y,ne=$.isBox3?$.min.z:0):(gt=Pe.width,wt=Pe.height,Nt=Pe.depth||1,Bt=0,jt=0,ne=0),J!==null?(Ot=J.x,ge=J.y,Ce=J.z):(Ot=0,ge=0,Ce=0);let bn=se.convert(G.format),ve=se.convert(G.type),Vt;G.isData3DTexture?(U.setTexture3D(G,0),Vt=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(U.setTexture2DArray(G,0),Vt=B.TEXTURE_2D_ARRAY):(U.setTexture2D(G,0),Vt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);let vi=B.getParameter(B.UNPACK_ROW_LENGTH),Ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ni=B.getParameter(B.UNPACK_SKIP_PIXELS),zs=B.getParameter(B.UNPACK_SKIP_ROWS),In=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Pe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,jt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ne);let Ur=I.isDataArrayTexture||I.isData3DTexture,Fe=G.isDataArrayTexture||G.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let hi=Pt.get(I),Nr=Pt.get(G),Vn=Pt.get(hi.__renderTarget),Gi=Pt.get(Nr.__renderTarget);vt.bindFramebuffer(B.READ_FRAMEBUFFER,Vn.__webglFramebuffer),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Vi=0;Vi<Nt;Vi++)Ur&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.get(I).__webglTexture,V,ne+Vi),I.isDepthTexture?(Fe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.get(G).__webglTexture,V,Ce+Vi),B.blitFramebuffer(Bt,jt,gt,wt,Ot,ge,gt,wt,B.DEPTH_BUFFER_BIT,B.NEAREST)):Fe?B.copyTexSubImage3D(Vt,V,Ot,ge,Ce+Vi,Bt,jt,gt,wt):B.copyTexSubImage2D(Vt,V,Ot,ge,Ce+Vi,Bt,jt,gt,wt);vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Fe?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(Vt,V,Ot,ge,Ce,gt,wt,Nt,bn,ve,Pe.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Vt,V,Ot,ge,Ce,gt,wt,Nt,bn,Pe.data):B.texSubImage3D(Vt,V,Ot,ge,Ce,gt,wt,Nt,bn,ve,Pe):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,V,Ot,ge,gt,wt,bn,ve,Pe.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,V,Ot,ge,Pe.width,Pe.height,bn,Pe.data):B.texSubImage2D(B.TEXTURE_2D,V,Ot,ge,gt,wt,bn,ve,Pe);B.pixelStorei(B.UNPACK_ROW_LENGTH,vi),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ni),B.pixelStorei(B.UNPACK_SKIP_ROWS,zs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,In),V===0&&G.generateMipmaps&&B.generateMipmap(Vt),vt.unbindTexture()},this.copyTextureToTexture3D=function(I,G,$=null,J=null,V=0){return I.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,I=arguments[2],G=arguments[3],V=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,G,$,J,V)},this.initRenderTarget=function(I){Pt.get(I).__webglFramebuffer===void 0&&U.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?U.setTextureCube(I,0):I.isData3DTexture?U.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?U.setTexture2DArray(I,0):U.setTexture2D(I,0),vt.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,vt.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var fa=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pa=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ma=class extends Tn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=yn,h=yn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class extends Tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new O,s=[],r=[],o=[],a=new O,l=new xe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(qe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},to=class extends Xn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qc=class extends to{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Xo=new O,zl=new Ah,kl=new Ah,Gl=new Ah,Yc=class extends Xn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xo.subVectors(s[0],s[1]).add(s[0]),c=Xo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),zl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),kl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Gl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),kl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Gl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(zl.calc(l),kl.calc(l),Gl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _d(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function __(n,t){let e=1-n;return e*e*t}function y_(n,t){return 2*(1-n)*n*t}function v_(n,t){return n*n*t}function Yr(n,t,e,i){return __(n,t)+y_(n,e)+v_(n,i)}function E_(n,t){let e=1-n;return e*e*e*t}function M_(n,t){let e=1-n;return 3*e*e*n*t}function x_(n,t){return 3*(1-n)*n*n*t}function A_(n,t){return n*n*n*t}function Zr(n,t,e,i,s){return E_(n,t)+M_(n,e)+x_(n,i)+A_(n,s)}var ga=class extends Xn{constructor(t=new at,e=new at,i=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zr(t,s.x,r.x,o.x,a.x),Zr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zc=class extends Xn{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zr(t,s.x,r.x,o.x,a.x),Zr(t,s.y,r.y,o.y,a.y),Zr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_a=class extends Xn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$c=class extends Xn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends Xn{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jc=class extends Xn{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y),Yr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(_d(a,l.x,c.x,h.x,u.x),_d(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Kc=Object.freeze({__proto__:null,ArcCurve:qc,CatmullRomCurve3:Yc,CubicBezierCurve:ga,CubicBezierCurve3:Zc,EllipseCurve:to,LineCurve:_a,LineCurve3:$c,QuadraticBezierCurve:ya,QuadraticBezierCurve3:Jc,SplineCurve:va}),jc=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Kc[s.type]().fromJSON(s))}return this}},bs=class extends jc{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new _a(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ya(this.currentPoint.clone(),new at(t,e),new at(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new ga(this.currentPoint.clone(),new at(t,e),new at(i,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new va(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new to(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},eo=class n extends ze{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=qe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new O,d=new at,p=new O,g=new O,y=new O,m=0,f=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let E=0;E<=e;E++){let v=i+E*h*s,_=Math.sin(v),M=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*_,u.y=t[A].y,u.z=t[A].x*M,o.push(u.x,u.y,u.z),d.x=E/e,d.y=A/(t.length-1),a.push(d.x,d.y);let b=l[3*A+0]*_,C=l[3*A+1],S=l[3*A+0]*M;c.push(b,C,S)}}for(let E=0;E<e;E++)for(let v=0;v<t.length-1;v++){let _=v+E*t.length,M=_,A=_+t.length,b=_+t.length+1,C=_+1;r.push(M,A,C),r.push(b,C,A)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Ea=class n extends eo{constructor(t=1,e=1,i=4,s=8){let r=new bs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},En=class n extends ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=i+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$e=class n extends ze{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=i/2,f=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(p,2));function E(){let _=new O,M=new O,A=0,b=(e-t)/i;for(let C=0;C<=r;C++){let S=[],x=C/r,T=x*(e-t)+t;for(let R=0;R<=s;R++){let F=R/s,w=F*l+a,L=Math.sin(w),N=Math.cos(w);M.x=T*L,M.y=-x*i+m,M.z=T*N,u.push(M.x,M.y,M.z),_.set(L,b,N).normalize(),d.push(_.x,_.y,_.z),p.push(F,1-x),S.push(g++)}y.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let x=y[S][C],T=y[S+1][C],R=y[S+1][C+1],F=y[S][C+1];(t>0||S!==0)&&(h.push(x,T,F),A+=3),(e>0||S!==r-1)&&(h.push(T,R,F),A+=3)}c.addGroup(f,A,0),f+=A}function v(_){let M=g,A=new at,b=new O,C=0,S=_===!0?t:e,x=_===!0?1:-1;for(let R=1;R<=s;R++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;let T=g;for(let R=0;R<=s;R++){let w=R/s*l+a,L=Math.cos(w),N=Math.sin(w);b.x=S*N,b.y=m*x,b.z=S*L,u.push(b.x,b.y,b.z),d.push(0,x,0),A.x=L*.5+.5,A.y=N*.5*x+.5,p.push(A.x,A.y),g++}for(let R=0;R<s;R++){let F=M+R,w=T+R;_===!0?h.push(w,w+1,F):h.push(w+1,w,F),C+=3}c.addGroup(f,C,_===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nn=class n extends $e{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ma=class n extends ze{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let v=new O,_=new O,M=new O;for(let A=0;A<e.length;A+=3)p(e[A+0],v),p(e[A+1],_),p(e[A+2],M),l(v,_,M,E)}function l(E,v,_,M){let A=M+1,b=[];for(let C=0;C<=A;C++){b[C]=[];let S=E.clone().lerp(_,C/A),x=v.clone().lerp(_,C/A),T=A-C;for(let R=0;R<=T;R++)R===0&&C===A?b[C][R]=S:b[C][R]=S.clone().lerp(x,R/T)}for(let C=0;C<A;C++)for(let S=0;S<2*(A-C)-1;S++){let x=Math.floor(S/2);S%2===0?(d(b[C][x+1]),d(b[C+1][x]),d(b[C][x])):(d(b[C][x+1]),d(b[C+1][x+1]),d(b[C+1][x]))}}function c(E){let v=new O;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(E),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let E=new O;for(let v=0;v<r.length;v+=3){E.x=r[v+0],E.y=r[v+1],E.z=r[v+2];let _=m(E)/2/Math.PI+.5,M=f(E)/Math.PI+.5;o.push(_,1-M)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){let v=o[E+0],_=o[E+2],M=o[E+4],A=Math.max(v,_,M),b=Math.min(v,_,M);A>.9&&b<.1&&(v<.2&&(o[E+0]+=1),_<.2&&(o[E+2]+=1),M<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,v){let _=E*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let E=new O,v=new O,_=new O,M=new O,A=new at,b=new at,C=new at;for(let S=0,x=0;S<r.length;S+=9,x+=6){E.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),A.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),M.copy(E).add(v).add(_).divideScalar(3);let T=m(M);y(A,x+0,E,T),y(b,x+2,v,T),y(C,x+4,_,T)}}function y(E,v,_,M){M<0&&E.x===1&&(o[v]=E.x-1),_.x===0&&_.z===0&&(o[v]=M/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},gr=class n extends Ma{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var wn=class extends bs{constructor(t){super(t),this.uuid=Ps(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new bs().fromJSON(s))}return this}},b_={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=$d(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(i&&(r=C_(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return no(r,o,e,a,l,p,0),o}};function $d(n,t,e,i,s){let r,o;if(s===z_(n,t,e,i)>0)for(r=t;r<e;r+=i)o=yd(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=yd(r,n[r],n[r+1],o);return o&&Ia(o,o.next)&&(so(o),o=o.next),o}function Ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ia(e,e.next)||Ne(e.prev,e,e.next)===0)){if(so(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function no(n,t,e,i,s,r,o){if(!n)return;!o&&r&&L_(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?T_(n,i,s,r):S_(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),so(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=w_(Ss(n),t,e),no(n,t,e,i,s,r,2)):o===2&&R_(n,t,e,i,s,r):no(Ss(n),t,e,i,s,r,1);break}}}function S_(n){let t=n.prev,e=n,i=n.next;if(Ne(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&ir(s,a,r,l,o,c,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function T_(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ne(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Qc(p,g,t,e,i),E=Qc(y,m,t,e,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=f&&_&&_.z<=E;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ir(a,h,l,u,c,d,v.x,v.y)&&Ne(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ir(a,h,l,u,c,d,_.x,_.y)&&Ne(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ir(a,h,l,u,c,d,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=E;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ir(a,h,l,u,c,d,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function w_(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Ia(s,r)&&Jd(s,i,i.next,r)&&io(s,r)&&io(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),so(i),so(i.next),i=n=r),i=i.next}while(i!==n);return Ss(i)}function R_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&B_(o,a)){let l=Kd(o,a);o=Ss(o,o.next),l=Ss(l,l.next),no(o,t,e,i,s,r,0),no(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function C_(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=$d(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(N_(c));for(s.sort(P_),r=0;r<s.length;r++)e=F_(s[r],e);return e}function P_(n,t){return n.x-t.x}function F_(n,t){let e=I_(n,t);if(!e)return t;let i=Kd(e,n);return Ss(i,i.next),Ss(e,e.next)}function I_(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ir(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),io(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&D_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function D_(n,t){return Ne(n.prev,n,t.prev)<0&&Ne(t.next,n,n.next)<0}function L_(n,t,e,i){let s=n;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,U_(s)}function U_(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Qc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function N_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ir(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function B_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!O_(n,t)&&(io(n,t)&&io(t,n)&&H_(n,t)&&(Ne(n.prev,n,t.prev)||Ne(n,t.prev,t))||Ia(n,t)&&Ne(n.prev,n,n.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ia(n,t){return n.x===t.x&&n.y===t.y}function Jd(n,t,e,i){let s=Yo(Ne(n,t,e)),r=Yo(Ne(n,t,i)),o=Yo(Ne(e,i,n)),a=Yo(Ne(e,i,t));return!!(s!==r&&o!==a||s===0&&qo(n,e,t)||r===0&&qo(n,i,t)||o===0&&qo(e,n,i)||a===0&&qo(e,t,i))}function qo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Yo(n){return n>0?1:n<0?-1:0}function O_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Jd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function io(n,t){return Ne(n.prev,n,n.next)<0?Ne(n,t,n.next)>=0&&Ne(n,n.prev,t)>=0:Ne(n,t,n.prev)<0||Ne(n,n.next,t)<0}function H_(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Kd(n,t){let e=new th(n.i,n.x,n.y),i=new th(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function yd(n,t,e,i){let s=new th(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function so(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function th(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z_(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ki=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];vd(t),Ed(i,t);let o=t.length;e.forEach(vd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ed(i,e[l]);let a=b_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function vd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ed(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var _r=class n extends ze{constructor(t=new wn([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:k_,v,_=!1,M,A,b,C;f&&(v=f.getSpacedPoints(h),_=!0,d=!1,M=f.computeFrenetFrames(h,!1),A=new O,b=new O,C=new O),d||(m=0,p=0,g=0,y=0);let S=a.extractPoints(c),x=S.shape,T=S.holes;if(!Ki.isClockWise(x)){x=x.reverse();for(let st=0,dt=T.length;st<dt;st++){let B=T[st];Ki.isClockWise(B)&&(T[st]=B.reverse())}}let F=Ki.triangulateShape(x,T),w=x;for(let st=0,dt=T.length;st<dt;st++){let B=T[st];x=x.concat(B)}function L(st,dt,B){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(dt,B)}let N=x.length,z=F.length;function H(st,dt,B){let zt,pt,It,vt=st.x-dt.x,qt=st.y-dt.y,Pt=B.x-st.x,U=B.y-st.y,P=vt*vt+qt*qt,q=vt*U-qt*Pt;if(Math.abs(q)>Number.EPSILON){let rt=Math.sqrt(P),ht=Math.sqrt(Pt*Pt+U*U),ot=dt.x-qt/rt,Ut=dt.y+vt/rt,xt=B.x-U/ht,Ft=B.y+Pt/ht,he=((xt-ot)*U-(Ft-Ut)*Pt)/(vt*U-qt*Pt);zt=ot+vt*he-st.x,pt=Ut+qt*he-st.y;let mt=zt*zt+pt*pt;if(mt<=2)return new at(zt,pt);It=Math.sqrt(mt/2)}else{let rt=!1;vt>Number.EPSILON?Pt>Number.EPSILON&&(rt=!0):vt<-Number.EPSILON?Pt<-Number.EPSILON&&(rt=!0):Math.sign(qt)===Math.sign(U)&&(rt=!0),rt?(zt=-qt,pt=vt,It=Math.sqrt(P)):(zt=vt,pt=qt,It=Math.sqrt(P/2))}return new at(zt/It,pt/It)}let K=[];for(let st=0,dt=w.length,B=dt-1,zt=st+1;st<dt;st++,B++,zt++)B===dt&&(B=0),zt===dt&&(zt=0),K[st]=H(w[st],w[B],w[zt]);let et=[],X,ut=K.concat();for(let st=0,dt=T.length;st<dt;st++){let B=T[st];X=[];for(let zt=0,pt=B.length,It=pt-1,vt=zt+1;zt<pt;zt++,It++,vt++)It===pt&&(It=0),vt===pt&&(vt=0),X[zt]=H(B[zt],B[It],B[vt]);et.push(X),ut=ut.concat(X)}for(let st=0;st<m;st++){let dt=st/m,B=p*Math.cos(dt*Math.PI/2),zt=g*Math.sin(dt*Math.PI/2)+y;for(let pt=0,It=w.length;pt<It;pt++){let vt=L(w[pt],K[pt],zt);Z(vt.x,vt.y,-B)}for(let pt=0,It=T.length;pt<It;pt++){let vt=T[pt];X=et[pt];for(let qt=0,Pt=vt.length;qt<Pt;qt++){let U=L(vt[qt],X[qt],zt);Z(U.x,U.y,-B)}}}let yt=g+y;for(let st=0;st<N;st++){let dt=d?L(x[st],ut[st],yt):x[st];_?(b.copy(M.normals[0]).multiplyScalar(dt.x),A.copy(M.binormals[0]).multiplyScalar(dt.y),C.copy(v[0]).add(b).add(A),Z(C.x,C.y,C.z)):Z(dt.x,dt.y,0)}for(let st=1;st<=h;st++)for(let dt=0;dt<N;dt++){let B=d?L(x[dt],ut[dt],yt):x[dt];_?(b.copy(M.normals[st]).multiplyScalar(B.x),A.copy(M.binormals[st]).multiplyScalar(B.y),C.copy(v[st]).add(b).add(A),Z(C.x,C.y,C.z)):Z(B.x,B.y,u/h*st)}for(let st=m-1;st>=0;st--){let dt=st/m,B=p*Math.cos(dt*Math.PI/2),zt=g*Math.sin(dt*Math.PI/2)+y;for(let pt=0,It=w.length;pt<It;pt++){let vt=L(w[pt],K[pt],zt);Z(vt.x,vt.y,u+B)}for(let pt=0,It=T.length;pt<It;pt++){let vt=T[pt];X=et[pt];for(let qt=0,Pt=vt.length;qt<Pt;qt++){let U=L(vt[qt],X[qt],zt);_?Z(U.x,U.y+v[h-1].y,v[h-1].x+B):Z(U.x,U.y,u+B)}}}W(),nt();function W(){let st=s.length/3;if(d){let dt=0,B=N*dt;for(let zt=0;zt<z;zt++){let pt=F[zt];it(pt[2]+B,pt[1]+B,pt[0]+B)}dt=h+m*2,B=N*dt;for(let zt=0;zt<z;zt++){let pt=F[zt];it(pt[0]+B,pt[1]+B,pt[2]+B)}}else{for(let dt=0;dt<z;dt++){let B=F[dt];it(B[2],B[1],B[0])}for(let dt=0;dt<z;dt++){let B=F[dt];it(B[0]+N*h,B[1]+N*h,B[2]+N*h)}}i.addGroup(st,s.length/3-st,0)}function nt(){let st=s.length/3,dt=0;ct(w,dt),dt+=w.length;for(let B=0,zt=T.length;B<zt;B++){let pt=T[B];ct(pt,dt),dt+=pt.length}i.addGroup(st,s.length/3-st,1)}function ct(st,dt){let B=st.length;for(;--B>=0;){let zt=B,pt=B-1;pt<0&&(pt=st.length-1);for(let It=0,vt=h+m*2;It<vt;It++){let qt=N*It,Pt=N*(It+1),U=dt+zt+qt,P=dt+pt+qt,q=dt+pt+Pt,rt=dt+zt+Pt;ft(U,P,q,rt)}}}function Z(st,dt,B){l.push(st),l.push(dt),l.push(B)}function it(st,dt,B){St(st),St(dt),St(B);let zt=s.length/3,pt=E.generateTopUV(i,s,zt-3,zt-2,zt-1);Gt(pt[0]),Gt(pt[1]),Gt(pt[2])}function ft(st,dt,B,zt){St(st),St(dt),St(zt),St(dt),St(B),St(zt);let pt=s.length/3,It=E.generateSideWallUV(i,s,pt-6,pt-3,pt-2,pt-1);Gt(It[0]),Gt(It[1]),Gt(It[3]),Gt(It[1]),Gt(It[2]),Gt(It[3])}function St(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Gt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return G_(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Kc[s.type]().fromJSON(s)),new n(i,t.options)}},k_={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-u),new at(d,1-g),new at(y,1-f)]:[new at(a,1-l),new at(h,1-u),new at(p,1-g),new at(m,1-f)]}};function G_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xa=class n extends Ma{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var ts=class n extends ze{constructor(t=new wn([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;Ki.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let E=g[m];Ki.isClockWise(E)===!0&&(g[m]=E.reverse())}let y=Ki.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let E=g[m];p=p.concat(E)}for(let m=0,f=p.length;m<f;m++){let E=p[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,f=y.length;m<f;m++){let E=y[m],v=E[0]+u,_=E[1]+u,M=E[2]+u;i.push(v,_,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return V_(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function V_(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Qt=class n extends ze{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new O,d=new O,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let E=[],v=f/i,_=0;f===0&&o===0?_=.5/e:f===i&&l===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){let A=M/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(A+_,1-v),E.push(c++)}h.push(E)}for(let f=0;f<i;f++)for(let E=0;E<e;E++){let v=h[f][E+1],_=h[f][E],M=h[f+1][E],A=h[f+1][E+1];(f!==0||o>0)&&p.push(v,_,A),(f!==i-1||l<Math.PI)&&p.push(_,M,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qn=class n extends ze{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new O,u=new O,d=new O;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(y,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Wt=class extends As{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Zo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function W_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var yr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eh=class extends yr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mu:r=t,a=2*e-i;break;case xu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mu:o=t,l=2*i-e;break;case xu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,E=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*y+.5*g,_=p*m-p*y;for(let M=0;M!==a;++M)r[M]=f*o[h+M]+E*o[c+M]+v*o[l+M]+_*o[u+M];return r}},nh=class extends yr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ih=class extends yr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},li=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zo(e,this.TimeBufferType),this.values=Zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Zo(t.times,Array),values:Zo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ea:e=this.InterpolantFactoryMethodDiscrete;break;case Cc:e=this.InterpolantFactoryMethodLinear;break;case fl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return Cc;case this.InterpolantFactoryMethodSmooth:return fl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&W_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Cc;var Ts=class extends li{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=ea;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends li{};sh.prototype.ValueTypeName="color";var rh=class extends li{};rh.prototype.ValueTypeName="number";var oh=class extends yr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ai.slerpFlat(r,0,o,c-a,o,c,l);return r}},Aa=class extends li{InterpolantFactoryMethodLinear(t){return new oh(this.times,this.values,this.getValueSize(),t)}};Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends li{constructor(t,e,i){super(t,e,i)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=ea;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends li{};ah.prototype.ValueTypeName="vector";var lh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},X_=new lh,ch=class{constructor(t){this.manager=t!==void 0?t:X_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ch.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends vn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ro=class extends vr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Vl=new xe,Md=new O,xd=new O,ba=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Md.setFromMatrixPosition(t.matrixWorld),e.position.copy(Md),xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xd),e.updateMatrixWorld(),Vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ad=new xe,kr=new O,Wl=new O,hh=class extends ba{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),kr.setFromMatrixPosition(t.matrixWorld),i.position.copy(kr),Wl.copy(i.position),Wl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Wl),i.updateMatrixWorld(),s.makeTranslation(-kr.x,-kr.y,-kr.z),Ad.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad)}},Sa=class extends vr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},uh=class extends ba{constructor(){super(new pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new uh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ta=class extends vr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var wa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=bd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function bd(){return performance.now()}var bh="\\[\\]\\.:\\/",q_=new RegExp("["+bh+"]","g"),Sh="[^"+bh+"]",Y_="[^"+bh.replace("\\.","")+"]",Z_=/((?:WC+[\/:])*)/.source.replace("WC",Sh),$_=/(WCOD+)?/.source.replace("WCOD",Y_),J_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),K_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),j_=new RegExp("^"+Z_+$_+J_+K_+"$"),Q_=["material","materials","bones","map"],dh=class{constructor(t,e,i){let s=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(t){let e=j_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Q_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=dh;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bv=new Float32Array(1);var ao=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ra=class extends Fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);var jd={type:"change"},wh={type:"start"},tf={type:"end"},Da=new jr,Qd=new oi,ty=Math.cos(70*zd.DEG2RAD),Je=new O,Cn=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Th=1e-6,La=class extends Ra{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new ai,this._lastTargetPosition=new O,this._quat=new ai().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ao,this._sphericalDelta=new ao,this._scale=1,this._panOffset=new O,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new O,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ny.bind(this),this._onPointerDown=ey.bind(this),this._onPointerUp=iy.bind(this),this._onContextMenu=hy.bind(this),this._onMouseWheel=oy.bind(this),this._onKeyDown=ay.bind(this),this._onTouchStart=ly.bind(this),this._onTouchMove=cy.bind(this),this._onMouseDown=sy.bind(this),this._onMouseMove=ry.bind(this),this._interceptControlDown=uy.bind(this),this._interceptControlUp=dy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jd),this.update(),this.state=Se.NONE}update(t=null){let e=this.object.position;Je.copy(e).sub(this.target),Je.applyQuaternion(this._quat),this._spherical.setFromVector3(Je),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),s<-Math.PI?s+=Cn:s>Math.PI&&(s-=Cn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Je.setFromSpherical(this._spherical),Je.applyQuaternion(this._quatInverse),e.copy(this.target).add(Je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Je.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Da.origin.copy(this.object.position),Da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Da.direction))<ty?this.object.lookAt(this.target):(Qd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Da.intersectPlane(Qd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Th||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Th||this._lastTargetPosition.distanceToSquared(this.target)>Th?(this.dispatchEvent(jd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Cn/60*this.autoRotateSpeed*t:Cn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Je.setFromMatrixColumn(e,0),Je.multiplyScalar(-t),this._panOffset.add(Je)}_panUp(t,e){this.screenSpacePanning===!0?Je.setFromMatrixColumn(e,1):(Je.setFromMatrixColumn(e,0),Je.crossVectors(this.object.up,Je)),Je.multiplyScalar(t),this._panOffset.add(Je)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Je.copy(s).sub(this.target);let r=Je.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function ey(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ny(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function iy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tf),this.state=Se.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sy(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Se.DOLLY;break;case Rs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}break;case Rs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(wh)}function ry(n){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function oy(n){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(n.preventDefault(),this.dispatchEvent(wh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(tf))}function ay(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function ly(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Se.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Se.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(wh)}function cy(n){switch(this._trackPointer(n),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Se.NONE}}function hy(n){this.enabled!==!1&&n.preventDefault()}function uy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ua={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},fy=new pr(-1,1,1,-1,0,1),Rh=class extends ze{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}},py=new Rh,xr=class{constructor(t){this._mesh=new _t(py,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Fs=class extends Di{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Er.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new xr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var lo=class extends Di{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Na=class extends Di{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ba=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new at);this._width=i.width,this._height=i.height,e=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fs(Ua),this.copyPass.material.blending=fi,this.clock=new wa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}lo!==void 0&&(o instanceof lo?i=!0:o instanceof Na&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ef={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ar=class n extends Di{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new kt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,o,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new en(r,o,{type:Rn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new en(r,o,{type:Rn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=ef;this.highPassUniforms=Er.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ua;this.copyUniforms=Er.clone(h.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ta,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new kt,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new xr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new He({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ar.BlurDirectionX=new at(1,0);Ar.BlurDirectionY=new at(0,1);var Li=1920,Ui=1080;function $t(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ni=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),Ha=(n,t,e)=>n+(t-n)*e,Ch=(n,t,e)=>{let i=Ni((e-n)/(t-n));return i*i*(3-2*i)};var my={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new at(Li,Ui)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){if(maxBlur<.6){gl_FragColor=vec4(texture2D(tColor,vUv).rgb,1.);return;}float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},gy={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new kt(1,1,1)},sat:{value:1},flash:{value:0},toon:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash,toon;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=mix(aces(c*.88),c/(1.+.18*c),toon);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Oa=class{constructor(t){let e=this.r=new da({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(Li,Ui,!1),e.shadowMap.enabled=!0,e.shadowMap.type=ph,e.toneMapping=pi,e.outputColorSpace=es;let i=new mr(Li,Ui);i.type=Pi,this.rt=new en(Li,Ui,{type:Rn,samples:4,depthTexture:i}),this.composer=new Ba(e,new en(Li,Ui,{type:Rn})),this.dof=new Fs(my,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new Ar(new at(Li/2,Ui/2),.45,.75,.82),this.grade=new Fs(gy),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.toon.value=i.toon??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function nf(n,t,e,i=40){let s=new pa;s.background=new kt(e);let r=new dn(i,Li/Ui,.08,400);return{t0:n,t1:t,scene:s,camera:r,update(){return{}}}}var co=new O;function Yn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;co.copy(t),co[i]=0,co.normalize();let c=.5*o/(o+a),h=1-co.angleTo(n)/l;return Math.sign(co[e])===1?h*c:a/(o+a)+c+c*(1-h)}var za=class extends le{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new O,l=new O,c=new O(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new O,y=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Yn(g,l,"z","y",r,i),d[f+1]=1-Yn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Yn(g,l,"z","y",r,i),d[f+1]=1-Yn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-Yn(g,l,"x","z",r,t),d[f+1]=Yn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[f+0]=1-Yn(g,l,"x","z",r,t),d[f+1]=1-Yn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[f+0]=1-Yn(g,l,"x","y",r,t),d[f+1]=1-Yn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=Yn(g,l,"x","y",r,t),d[f+1]=1-Yn(g,l,"y","x",r,e);break}}};var ns=null;function ho(){if(ns)return ns;let n=new Uint8Array([118,118,118,255,196,196,196,255,255,255,255,255]);return ns=new ma(n,3,1,Un),ns.minFilter=ns.magFilter=yn,ns.generateMipmaps=!1,ns.needsUpdate=!0,ns}var Ph=new Map;function Ie(n,t){if(!t){let e=String(n);if(Ph.has(e))return Ph.get(e);let i=new Wt({color:n,gradientMap:ho()});return Ph.set(e,i),i}return new Wt({color:n,gradientMap:ho(),...t})}var _y=`uniform float w; uniform float minPx; uniform vec2 res;
#include <common>
#include <skinning_pars_vertex>
void main(){
  vec4 a = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vec4 b = projectionMatrix * modelViewMatrix * vec4(position + normal * w, 1.0);
  vec2 sa = a.xy / a.w, sb = b.xy / b.w;
  vec2 dpx = (sb - sa) * res * 0.5; float px = length(dpx);
  vec3 vn = normalize(normalMatrix * normal);
  vec2 dir = (projectionMatrix * vec4(vn, 0.0)).xy; dir = length(dir) > 1e-5 ? normalize(dir) : vec2(0.0, 1.0);
  if (a.w < 0.12 || b.w < 0.12) { gl_Position = b; return; }
  float want = min(max(px, minPx), 24.0);
  vec2 off = (px > 1e-4 ? dpx / px : dir) * want;
  gl_Position = vec4((sa + off * 2.0 / res) * a.w, a.z + 0.00002 * a.w, a.w);
}`,yy="uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }",Fh=new Map;function vy(n=.014,t="#17131C",e=1.6){let i=n+t+e;if(Fh.has(i))return Fh.get(i);let s=new He({uniforms:{w:{value:n},minPx:{value:e},res:{value:new at(Li,Ui)},col:{value:new kt(t).convertSRGBToLinear()},op:{value:1}},vertexShader:_y,fragmentShader:yy,side:tn});return Fh.set(i,s),s}function ka(n,t=.014,e,i){let s=new _t(n.geometry,vy(t,e,i));return s.castShadow=!1,s.receiveShadow=!1,s.userData.isOutline=!0,n.add(s),n}function bt(n,t,e={}){let i=new _t(n,t&&t.isMaterial?t:Ie(t));return i.castShadow=e.shadow??!0,i.receiveShadow=!0,e.out&&ka(i,e.out===!0?.014:e.out,e.outCol,e.minPx),e.pos&&i.position.set(...e.pos),e.rot&&i.rotation.set(...e.rot),i}var br=(n,t,e,i=.04,s=3)=>new za(n,t,e,s,Math.min(i,n/2-.001,t/2-.001,e/2-.001));function Q(n,t,e,i,s=0,r=0,o=0,a={}){return bt(br(n,t,e,a.r??Math.min(.05,Math.min(n,t,e)*.18)),i,{pos:[s,r,o],...a})}function D(n,t,e,i,s=0,r=0,o=0,a={}){return bt(new le(n,t,e),i,{pos:[s,r,o],...a})}function j(n,t,e,i,s=0,r=0,o=0,a={}){return bt(new $e(n,t,e,a.seg||24),i,{pos:[s,r,o],...a})}function _e(n,t,e=0,i=0,s=0,r={}){return bt(new Qt(n,r.seg||24,Math.max(12,(r.seg||24)*.6|0)),t,{pos:[e,i,s],...r})}function ce(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let r=new Qi(i);return r.colorSpace=Qe,r.anisotropy=8,r}var Mt=(n,t={})=>new Wt({map:n,gradientMap:ho(),...t}),Ih=null;function Dh(n=.32,t=.38){Ih||(Ih=ce(128,128,i=>{let s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(20,16,30,1)"),s.addColorStop(.55,"rgba(20,16,30,.55)"),s.addColorStop(1,"rgba(20,16,30,0)"),i.fillStyle=s,i.fillRect(0,0,128,128)}));let e=new _t(new Xt(n*2,n*2),new Le({map:Ih,transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}var sf=(n={})=>({toon:1,blur:0,bloom:.18,bloomT:.95,bloomR:.4,vig:.22,exposure:1,sat:1.05,...n});var Te=[-150,-90,-30,30,90,150],Ue=[-120,-60,0,60,120],Lh=["Rua do Ip\xEA","Rua Tiradentes","Rua da Matriz","Rua S\xE3o Benedito","Rua dos Tropeiros","Estrada Velha"],Uh=["Rua da Serra","Rua Sete de Setembro","Avenida Brasil","Rua das Flores","Rua do Lago"],We=50-2*3,mi=n=>(Te[n]+Te[n+1])/2,gi=n=>(Ue[n]+Ue[n+1])/2,Ey=[["res","res","comN","santaCasa","rodoviaria"],["res","comW","praca","comE","res"],["res","escola","comS","res","posto"],["res","res","res","res","campo"]],Ve=We/4,Is=We/2;function Ga(){let n=[],t=1,e=(h,u,d,p=[])=>{for(let g=0;g<4;g++){let y=h-We/2+Ve*(g+.5);n.push({tipo:d[g]||"casa",nome:p[g],x:y,z:u-Is/2,w:Ve,d:Is,frente:"n",seed:t++}),n.push({tipo:d[g+4]||"casa",nome:p[g+4],x:y,z:u+Is/2,w:Ve,d:Is,frente:"s",seed:t++})}};for(let h=0;h<4;h++)for(let u=0;u<5;u++){let d=Ey[h][u],p=mi(u),g=gi(h);d==="res"?h===3&&u===1?e(p,g,["casa","casaFamilia","casa","sobrado","casa","casa","sobrado","casa"],[null,"casaFamilia"]):e(p,g,t%3===0?["casa","sobrado","casa","casa","casa","casa","sobrado","casa"]:["casa","casa","sobrado","casa","sobrado","casa","casa","casa"]):d==="comW"?e(p,g,["casa","sobrado","casa","casa","casa","casa","sobrado","casa"]):d==="comE"?e(p,g,["casa","casa","sobrado","casa","casa","sobrado","casa","casa"]):d==="comS"?e(p,g,["casa","sobrado","casa","casa","casa","casa","casa","sobrado"]):d==="comN"?e(p,g,["sobrado","casa","casa","sobrado","casa","casa","casa","casa"]):n.push({tipo:d,nome:d,x:p,z:g,w:We,d:We,frente:"s",seed:t++})}let i=(h,u,d,p,g={})=>{let y=n.findIndex(m=>Math.abs(m.x-h)<1&&Math.abs(m.z-u)<1);y>=0&&Object.assign(n[y],{tipo:d,nome:p,...g})},s=mi(1),r=mi(3),o=gi(1)-Is/2,a=gi(1)+Is/2;i(s-We/2+Ve*3.5,a,"padaria","padaria"),i(s-We/2+Ve*2.5,a,"farmacia","farmacia"),i(s-We/2+Ve*1.5,a,"loterica","loterica"),i(s-We/2+Ve*3.5,o,"lanchonete","lanchonete"),i(r-We/2+Ve*.5,a,"banco","banco"),i(r-We/2+Ve*1.5,a,"mercado","mercado",{w:Ve*2,x:r-We/2+Ve*2}),n.splice(n.findIndex(h=>Math.abs(h.x-(r-We/2+Ve*2.5))<1&&Math.abs(h.z-a)<1),1),i(r-We/2+Ve*3.5,a,"sorveteria","sorveteria"),i(r-We/2+Ve*.5,o,"lojaRoupas","lojaRoupas");let l=mi(2),c=gi(2)-Is/2;return i(l-We/2+Ve*.5,c,"bar","bar"),i(l-We/2+Ve*1.5,c,"prefeitura","prefeitura",{w:Ve*2,x:l-We/2+Ve*2}),n.splice(n.findIndex(h=>Math.abs(h.x-(l-We/2+Ve*2.5))<1&&Math.abs(h.z-c)<1),1),i(l-We/2+Ve*3.5,c,"lojaMateriais","lojaMateriais"),n}var Va=[[-30,-60],[30,-60],[-30,0],[30,0]],rf=[{x:-10,z:6.6,ry:Math.PI,nome:"pontoPraca"},{x:36.6,z:-30,ry:-Math.PI/2,nome:"pontoRodoviaria"}];function af(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ze,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=of(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][d]);let g=of(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function of(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new fn(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);a.setComponent(d+u,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Wa=Math.PI/180;function _i(n){n.updateMatrixWorld(!0);let t=new xe().copy(n.matrixWorld).invert(),e=new Map,i=[],s=o=>{for(let a of[...o.children]){if(a.userData.vivo||a.isMesh&&Array.isArray(a.material)||a.isLight||a.isSprite||a.isPoints||a.isLine||a.isInstancedMesh||a.isSkinnedMesh||a.isCamera){i.push(a);continue}if(a.isMesh&&a.geometry&&!Array.isArray(a.material)&&a.visible){let l=a,c=l.material.uuid+(l.castShadow?"s":"n")+(l.receiveShadow?"r":"")+(l.renderOrder|0);e.has(c)||e.set(c,{mat:l.material,cast:l.castShadow,rec:l.receiveShadow,ro:l.renderOrder,out:!!l.userData.isOutline,geos:[]});let h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let u of Object.keys(h.attributes))["position","normal","uv"].includes(u)||h.deleteAttribute(u);h.attributes.uv||h.setAttribute("uv",new fn(new Float32Array(h.attributes.position.count*2),2)),h.attributes.normal||h.computeVertexNormals(),h.applyMatrix4(new xe().multiplyMatrices(t,l.matrixWorld)),h.morphAttributes={},h.clearGroups(),e.get(c).geos.push(h)}s(a)}};s(n);let r=new Y;r.name=n.name,r.position.copy(n.position),r.rotation.copy(n.rotation),r.scale.copy(n.scale),r.userData=n.userData;for(let o of e.values()){if(!o.geos.length)continue;let a=af(o.geos,!1);if(!a)continue;let l=new _t(a,o.mat);l.castShadow=o.cast,l.receiveShadow=o.rec,l.renderOrder=o.ro,l.userData.isOutline=o.out,l.matrixAutoUpdate=!1,r.add(l)}for(let o of i){let a=o.matrixWorld.clone();r.add(o),o.matrix.copy(new xe().multiplyMatrices(t,a)),o.matrix.decompose(o.position,o.quaternion,o.scale)}return r}var uo={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2};function ci(n,t,e){let i=uo[n.frente]||0,s=Math.cos(i),r=Math.sin(i);return[n.x+t*s+e*r,n.z-t*r+e*s]}var lf=(n,t)=>t+(uo[n.frente]||0);function cf(n,t){let e=new Y;e.position.set(t.x,t.y||0,t.z),e.rotation.y=uo[t.frente]||0,e.name=t.nome||t.tipo;let i={L:t,g:e,cidade:n,add:(...s)=>{for(let r of s)e.add(r);return s[0]},col:(s,r,o,a,l={})=>{let c=uo[t.frente]||0,h=ci(t,s,r),u=Math.abs(Math.round(Math.sin(c)))===1;n.colisores.push({x:h[0],z:h[1],w:u?a:o,d:u?o:a,h:l.h??2,y:l.y??0,nome:l.nome||t.nome})},ponto:(s,r,o,a=0,l)=>{let c=ci(t,r,o);n.pontos[(t.nome?t.nome+".":"")+s]={x:c[0],z:c[1],y:(l??0)+(t.y||0),ry:lf(t,a)}},vivo:s=>n.vivos.push(s),pontoLivre:(s,r,o=0)=>{for(let[a,l]of r){let c=ci(t,a,l);if(!n.colisores.some(h=>Math.abs(c[0]-h.x)<h.w/2+.3&&Math.abs(c[1]-h.z)<h.d/2+.3)){i.ponto(s,a,l,o);return}}i.ponto(s,r[0][0],r[0][1],o)},pisoAlto:(s,r,o,a,l)=>{let c=uo[t.frente]||0,h=ci(t,s,r),u=Math.abs(Math.round(Math.sin(c)))===1;(n.pisosAltos=n.pisosAltos||[]).push({x:h[0],z:h[1],w:u?a:o,d:u?o:a,y:l+(t.y||0)})},figurante:(s,r,o=0,a={})=>{let l=ci(t,s,r);(n.figurantes=n.figurantes||[]).push({x:l[0],z:l[1],ry:lf(t,o),y:(a.y??0)+(t.y||0),lote:t.nome,nivel:i.nivel,...a})}};return i}function Ke(n,t,e,i=0,s=0,r=0){let o=new _t(new Xt(n,t),e);return o.rotation.x=-Math.PI/2,o.position.set(i,s,r),o.receiveShadow=!0,o}function Xe(n,t,e,i=0,s=0,r=0,o=0){let a=new _t(new Xt(n,t),e);return a.position.set(i,s,r),a.rotation.y=o,a.receiveShadow=!0,a}function Xa(n,t,e,i,s=1){let r=n.attributes.uv,o=n.attributes.normal;for(let a=0;a<r.count;a++){let l=Math.abs(o.getX(a)),c=Math.abs(o.getY(a)),h=l>.5?i:t,u=c>.5?i:e;r.setXY(a,r.getX(a)*h/s,r.getY(a)*u/s)}return r.needsUpdate=!0,n}function Zn(n,t,e,i,s,r,o,a=1,l={}){let c=Xa(new le(n,t,e),n,t,e,a);return bt(c,i,{pos:[s,r,o],...l})}var Ht=(n,t)=>t[Math.floor(n()*t.length)%t.length];var qh={};yp(qh,{agua:()=>Wh,asfalto:()=>Bh,azulejo:()=>Vh,calcada:()=>$n,grama:()=>Bi,janelas:()=>Ay,letreiroTex:()=>ye,matTex:()=>by,ondas:()=>Oh,paralelepipedo:()=>My,piso:()=>xy,reboco:()=>kh,repetir:()=>sn,telha:()=>zh,terra:()=>Hh,tijolo:()=>Gh,vidroTex:()=>Xh});var Nh=new Map,xn=(n,t)=>(Nh.has(n)||Nh.set(n,t()),Nh.get(n)),Nn=(n,t=1,e=1)=>(n.wrapS=n.wrapT=Sn,n.repeat.set(t,e),n);function sn(n,t,e){let i=n.clone();return i.wrapS=i.wrapT=Sn,i.repeat.set(t,e),i.needsUpdate=!0,i}var Bh=()=>xn("asf",()=>Nn(ce(256,256,n=>{n.fillStyle="#5B5F68",n.fillRect(0,0,256,256);let t=$t(7);for(let e=0;e<900;e++)n.fillStyle=t()<.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.07)",n.fillRect(t()*256,t()*256,2+t()*3,2+t()*3);n.strokeStyle="rgba(30,30,36,.18)",n.lineWidth=3,n.beginPath(),n.moveTo(30,200),n.bezierCurveTo(80,180,120,230,170,210),n.stroke()}))),$n=(n="#D9D2C5",t="#CBC2B3")=>xn("calc"+n,()=>Nn(ce(128,128,e=>{e.fillStyle=n,e.fillRect(0,0,128,128),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillRect(64,64,64,64),e.strokeStyle="rgba(0,0,0,.12)",e.lineWidth=2,e.strokeRect(1,1,126,126),e.beginPath(),e.moveTo(64,0),e.lineTo(64,128),e.moveTo(0,64),e.lineTo(128,64),e.stroke()}))),Oh=()=>xn("ondas",()=>Nn(ce(256,256,n=>{n.fillStyle="#EFEAE0",n.fillRect(0,0,256,256),n.fillStyle="#3B3A3F";for(let e=0;e<2;e++){n.beginPath();for(let i=0;i<=256;i+=4)n.lineTo(i,64+e*128+Math.sin(i/256*6.283)*34);for(let i=256;i>=0;i-=4)n.lineTo(i,64+e*128+30+Math.sin(i/256*6.283)*34);n.fill()}let t=$t(3);n.fillStyle="rgba(0,0,0,.08)";for(let e=0;e<500;e++)n.fillRect(t()*256,t()*256,3,3)}))),Bi=(n="#78B85A")=>xn("gr"+n,()=>Nn(ce(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let e=$t(11);for(let i=0;i<700;i++){let s=e();t.fillStyle=s<.5?"rgba(40,90,30,.16)":"rgba(220,255,160,.14)";let r=e()*256,o=e()*256;t.fillRect(r,o,2,5+e()*5)}for(let i=0;i<6;i++)t.fillStyle="rgba(40,90,30,.10)",t.beginPath(),t.ellipse(e()*256,e()*256,20+e()*30,12+e()*20,e()*3,0,7),t.fill()}))),Hh=()=>xn("terra",()=>Nn(ce(256,256,n=>{n.fillStyle="#C49468",n.fillRect(0,0,256,256);let t=$t(5);for(let e=0;e<800;e++)n.fillStyle=t()<.5?"rgba(90,50,20,.12)":"rgba(255,230,190,.12)",n.beginPath(),n.arc(t()*256,t()*256,1+t()*3,0,7),n.fill()}))),My=()=>xn("para",()=>Nn(ce(256,256,n=>{n.fillStyle="#6E6A66",n.fillRect(0,0,256,256);let t=$t(9);for(let e=0;e<8;e++)for(let i=0;i<6;i++){let s=e%2?21:0,r=100+t()*40|0;n.fillStyle=`rgb(${r},${r-4},${r-8})`,n.beginPath(),n.roundRect(i*43+s-20,e*32+2,39,28,6),n.fill()}}))),zh=(n="#C8643C")=>xn("tel"+n,()=>Nn(ce(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);for(let e=0;e<8;e++){t.fillStyle="rgba(0,0,0,.16)",t.fillRect(0,e*32+26,256,6);for(let i=0;i<8;i++){let s=e%2?16:0;t.fillStyle="rgba(255,255,255,.10)",t.beginPath(),t.ellipse(i*32+s+16,e*32+10,9,6,0,0,7),t.fill(),t.fillStyle="rgba(0,0,0,.08)",t.fillRect(i*32+s,e*32,2,30)}}}))),kh=n=>xn("reb"+n,()=>Nn(ce(128,128,t=>{t.fillStyle=n,t.fillRect(0,0,128,128);let e=$t(n.length*13);for(let i=0;i<160;i++)t.fillStyle=e()<.5?"rgba(0,0,0,.035)":"rgba(255,255,255,.05)",t.fillRect(e()*128,e()*128,3+e()*5,2+e()*4)}))),Gh=(n="#B5603E")=>xn("tij"+n,()=>Nn(ce(256,256,t=>{t.fillStyle="#D8CBB8",t.fillRect(0,0,256,256);let e=$t(4);for(let i=0;i<16;i++)for(let s=0;s<5;s++){let r=i%2?26:0,o=e()*.2-.1;t.fillStyle=n,t.globalAlpha=.85+o,t.fillRect(s*52+r-26+2,i*16+2,48,12)}t.globalAlpha=1}))),xy=(n="madeira",t="#C8935E",e="#B98450")=>xn("piso"+n+t+e,()=>Nn(ce(256,256,i=>{if(n==="madeira")for(let s=0;s<8;s++){i.fillStyle=s%2?t:e,i.fillRect(0,s*32,256,32),i.fillStyle="rgba(0,0,0,.12)",i.fillRect(0,s*32,256,2),i.fillRect(s*97%256,s*32,2,32),i.fillStyle="rgba(80,40,10,.08)";for(let r=0;r<4;r++)i.fillRect((s*37+r*61)%256,s*32+10+r*3,40,2)}else if(n==="xadrez")for(let s=0;s<4;s++)for(let r=0;r<4;r++)i.fillStyle=(s+r)%2?t:e,i.fillRect(s*64,r*64,64,64);else if(n==="granilite"){i.fillStyle=t,i.fillRect(0,0,256,256);let s=$t(17);for(let r=0;r<900;r++)i.fillStyle=["#00000022","#FFFFFF33",e+"88"][r%3],i.fillRect(s()*256,s()*256,2+s()*4,2+s()*3)}else{i.fillStyle=t,i.fillRect(0,0,256,256),i.strokeStyle=e,i.lineWidth=4;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*64,0),i.lineTo(s*64,256),i.moveTo(0,s*64),i.lineTo(256,s*64),i.stroke();i.fillStyle="rgba(255,255,255,.08)",i.fillRect(8,8,40,20)}}))),Vh=(n="#F4F1EA",t="#D9E8EE",e="#7FB2C8")=>xn("azu"+n+t+e,()=>Nn(ce(128,128,i=>{i.fillStyle=n,i.fillRect(0,0,128,128),i.fillStyle=t,i.fillRect(64,0,64,64),i.fillRect(0,64,64,64),i.strokeStyle=e,i.lineWidth=3,i.beginPath(),i.arc(96,32,14,0,7),i.arc(32,96,14,0,7),i.stroke(),i.strokeStyle="rgba(0,0,0,.14)",i.lineWidth=2,i.strokeRect(0,0,64,64),i.strokeRect(64,64,64,64),i.strokeRect(64,0,64,64),i.strokeRect(0,64,64,64)}))),Wh=()=>xn("agua",()=>Nn(ce(256,256,n=>{let t=n.createLinearGradient(0,0,256,256);t.addColorStop(0,"#5DB4D8"),t.addColorStop(1,"#3F95C0"),n.fillStyle=t,n.fillRect(0,0,256,256);let e=$t(21);n.strokeStyle="rgba(255,255,255,.35)",n.lineWidth=3,n.lineCap="round";for(let i=0;i<40;i++){let s=e()*256,r=e()*256,o=10+e()*22;n.beginPath(),n.moveTo(s,r),n.quadraticCurveTo(s+o/2,r-4,s+o,r),n.stroke()}})));function Ay(n,t={}){return xn("jan"+n+JSON.stringify(t),()=>Nn(ce(128,128,e=>{e.fillStyle=n,e.fillRect(0,0,128,128),e.fillStyle="rgba(0,0,0,.08)",e.fillRect(0,118,128,10),e.fillStyle=t.moldura||"#F4F1EA",e.fillRect(26,22,76,70),e.fillStyle=t.vidro||"#7FA9C9",e.fillRect(32,28,64,58),e.fillStyle=t.cortina||"#F3E3C0",e.fillRect(32,28,18,58),e.fillRect(78,28,18,58),e.fillStyle="rgba(255,255,255,.35)",e.beginPath(),e.moveTo(52,86),e.lineTo(70,28),e.lineTo(78,28),e.lineTo(60,86),e.fill(),e.fillStyle="rgba(0,0,0,.18)",e.fillRect(26,92,76,6)})))}function Xh(n=0,t="#F3E3C0"){return xn("vid"+n+t,()=>ce(128,128,e=>{let i=e.createLinearGradient(0,0,0,128);i.addColorStop(0,"#A9D2EC"),i.addColorStop(1,"#5E86A8"),e.fillStyle=i,e.fillRect(0,0,128,128);let s=$t(n+1);e.fillStyle="rgba(40,40,60,.25)",e.fillRect(20+s()*40,70,40,58),e.fillStyle=t,e.fillRect(0,0,30,128),e.fillRect(98,0,30,128),e.fillStyle="rgba(0,0,0,.12)";for(let r=0;r<4;r++)e.fillRect(6+r*7,0,2,128),e.fillRect(104+r*7,0,2,128);e.fillStyle="rgba(255,255,255,.4)",e.beginPath(),e.moveTo(40,128),e.lineTo(80,0),e.lineTo(96,0),e.lineTo(56,128),e.fill()}))}function ye(n,t={}){let e=t.w||512,i=t.h||128;return xn("let"+n+JSON.stringify(t),()=>ce(e,i,s=>{s.fillStyle=t.fundo||"#2E6FB8",s.beginPath(),s.roundRect(0,0,e,i,t.raio??14),s.fill(),t.borda&&(s.strokeStyle=t.borda,s.lineWidth=10,s.beginPath(),s.roundRect(5,5,e-10,i-10,t.raio??12),s.stroke()),s.fillStyle=t.cor||"#FFFFFF",s.textAlign="center",s.textBaseline="middle";let r=t.tam||i*.52;for(s.font=`${t.peso||900} ${r}px ${t.fonte||"Inter, Arial, sans-serif"}`;s.measureText(n).width>e*.9&&r>10;)r-=2,s.font=`${t.peso||900} ${r}px ${t.fonte||"Inter, Arial, sans-serif"}`;s.fillText(n,e/2,i/2+(t.sub?-i*.12:2)),t.sub&&(s.font=`700 ${i*.2}px Inter, Arial, sans-serif`,s.globalAlpha=.9,s.fillText(t.sub,e/2,i*.8),s.globalAlpha=1)}))}var by=(n,t)=>Mt(n,t);function fo(n,t,e=0,i=0){let s=((n+(e+i)*.05)%32+32)%32;return t==="x"?s<12?"verde":s<15.5?"amarelo":"vermelho":s<16?"vermelho":s<28?"verde":s<31.5?"amarelo":"vermelho"}function uf(n,t,e=0,i=0){let s=((n+(e+i)*.05)%32+32)%32;return t==="x"?s>=12&&s<15.5?15.5-s:0:s>=28&&s<31.5?31.5-s:0}var hf="#F2C230",Ya="#F4F1EA";function df(n){let t=new Y;t.name="ruas";let e=Te[0]-10/2,i=Te[Te.length-1]+10/2,s=Ue[0]-10/2,r=Ue[Ue.length-1]+10/2,o=Bh(),a=Mt(sn(o,(i-e)/4,(r-s)/4));t.add(Ke(i-e,r-s,a,(e+i)/2,0,(s+r)/2));let l=(E,v,_)=>t.add(Ke(10,_-v,Mt(sn(o,10/4,(_-v)/4)),E,0,(v+_)/2));l(Te[5],-420,s),l(Te[5],r,160),l(Te[2],r,136);let c=Sy(),h=Mt(sn($n(),c,c)),u=Ie("#B9B3AA");for(let E=0;E<4;E++)for(let v=0;v<5;v++){let _=mi(v),M=gi(E),A=new _t(new le(c,.15,c),[u,u,h,u,u,u]);A.position.set(_,.15/2,M),A.receiveShadow=!0,t.add(A),D(c+.06,.02,c+.06,"#E6E1D8",_,.15+.001,M,{shadow:!1}).scale.set(1,1,1)}let d=new Y,p=(E,v,_,M,A)=>d.add(Ke(_,M,Ie(A),E,.012,v));for(let E of Ue)for(let v=0;v<Te.length-1;v++){let _=Te[v]+10/2+6,M=Te[v+1]-10/2-6;for(let A=_;A<M-2;A+=5)p(A+1.25,E,2.5,.16,hf)}for(let E of Te)for(let v=0;v<Ue.length-1;v++){let _=Ue[v]+10/2+6,M=Ue[v+1]-10/2-6;for(let A=_;A<M-2;A+=5)p(E,A+1.25,.16,2.5,hf)}for(let E of Te)for(let v of Ue)for(let _ of[-1,1]){if(v+_*(10/2+2)>s&&v+_*(10/2+2)<r)for(let M=-4;M<=4;M++)p(E+M*1,v+_*(10/2+2.2),.55,3,Ya);if(E+_*(10/2+2)>e&&E+_*(10/2+2)<i)for(let M=-4;M<=4;M++)p(E+_*(10/2+2.2),v+M*1,3,.55,Ya);p(E+_*(10/2+4.2),v+_*10/4,.35,10/2-.3,Ya),p(E-_*10/4,v+_*(10/2+4.2),10/2-.3,.35,Ya)}t.add(d),n.cena.add(_i(t));let g=new Y;g.name="mobiliario";let y=new Wt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:0});n.acender(y,2.2);let m=(E,v,_)=>{let M=new Y;M.position.set(E,.15,v),M.rotation.y=_,M.add(j(.09,.12,7.4,"#8D949C",0,3.7,0,{out:.012,seg:10}));let A=D(.09,.09,1.8,"#8D949C",0,7.2,.9,{out:.012});A.rotation.x=-8*Wa,M.add(A);let b=Q(.42,.16,.8,"#6E747C",0,7.12,1.75,{out:.012});M.add(b);let C=new _t(new le(.32,.04,.62),y);C.position.set(0,7.03,1.75),M.add(C),g.add(M),n.colisores.push({x:E,z:v,w:.3,d:.3,h:7}),n.postes.push([E+Math.sin(_)*1.75,7,v+Math.cos(_)*1.75])},f=10/2+.45;for(let E=0;E<Te.length-1;E++)for(let v of Ue)for(let _ of[-1,1]){let M=Te[E]+10/2+3,A=Te[E+1]-10/2-3;if(!(v+_*f<Ue[0]||v+_*f>Ue[Ue.length-1]))for(let b=0;b<2;b++){let C=M+(A-M)*(b?.78:.22)+(_>0?5.5:0);m(C,v+_*f,_>0?Math.PI:0)}}for(let E=0;E<Ue.length-1;E++)for(let v of Te)for(let _ of[-1,1]){let M=Ue[E]+10/2+3,A=Ue[E+1]-10/2-3;if(v+_*f<Te[0]||v+_*f>Te[Te.length-1])continue;let b=(M+A)/2+(_>0?5.5:-5.5);m(v+_*f,b,_>0?-Math.PI/2:Math.PI/2)}for(let E=0;E<4;E++)for(let v=0;v<5;v++){let _=Te[v]+10/2+.5,M=Ue[E]+10/2+.5,A=new Y;A.position.set(_,.15,M),A.add(j(.045,.05,2.9,"#5E646C",0,1.45,0,{out:.01,seg:8}));let b=new _t(new le(1.5,.32,.03),[Ie("#2E6FB8"),Ie("#2E6FB8"),Ie("#2E6FB8"),Ie("#2E6FB8"),Mt(ye(Uh[E],{w:512,h:110})),Mt(ye(Uh[E],{w:512,h:110}))]);b.position.set(.7,2.75,0),A.add(b);let C=new _t(new le(.03,.32,1.5),[Mt(ye(Lh[v],{w:512,h:110})),Mt(ye(Lh[v],{w:512,h:110})),Ie("#2E6FB8"),Ie("#2E6FB8"),Ie("#2E6FB8"),Ie("#2E6FB8")]);C.position.set(0,2.38,.7),A.add(C),g.add(A),n.colisores.push({x:_,z:M,w:.2,d:.2,h:3})}for(let E of Te)for(let v of Ue)for(let _ of[-1,1]){let M=D(.9,.02,.35,"#3A3C42",E+_*(10/2+5),.01,v+10/2-.25,{shadow:!1});g.add(M)}n.cena.add(_i(g));for(let E of rf)wy(n,E);for(let[E,v]of Va)Ty(n,E,v)}var Sy=()=>50;function Ty(n,t,e){let i={vermelho:"#E8443A",amarelo:"#F2C230",verde:"#3CCB6A"},s={x:{},z:{}};for(let a of["x","z"])for(let l in i)s[a][l]=new Le({color:"#2A2C30"});let r=(a,l,c,h)=>{let u=new Y;u.position.set(a,.15,l),u.rotation.y=c,u.add(j(.07,.09,3.2,"#3A3D44",0,1.6,0,{out:.012,seg:10}));let d=Q(.38,1.05,.3,"#2A2C30",0,3.4,.12,{out:.014});u.add(d),["vermelho","amarelo","verde"].forEach((p,g)=>{let y=new _t(new En(.11,18),s[h][p]);y.position.set(0,3.72-g*.32,.275),u.add(y);let m=D(.28,.02,.12,"#2A2C30",0,3.84-g*.32,.33);u.add(m)}),n.cena.add(u),n.colisores.push({x:a,z:l,w:.25,d:.25,h:3.5})},o=10/2+.6;r(t-o,e-o,0,"z"),r(t+o,e+o,Math.PI,"z"),r(t+o,e-o,Math.PI/2,"x"),r(t-o,e+o,-Math.PI/2,"x"),n.vivos.push(a=>{for(let l of["x","z"]){let c=fo(a,l,t,e);for(let h in i)s[l][h].color.set(h===c?i[h]:"#2A2C30")}})}function wy(n,t){let e=new Y;e.position.set(t.x,.15,t.z),e.rotation.y=t.ry;for(let o of[-1,1])e.add(D(.1,2.5,.1,"#3A3D44",o*1.8,1.25,-.6,{out:.01}));e.add(D(4,.08,1.6,"#3A3D44",0,2.55,-.1,{out:.01})),e.add(new _t(new le(3.9,.04,1.5),new Wt({color:"#BFDDF0",transparent:!0,opacity:.5})).translateY(2.52).translateZ(-.1)),e.add(new _t(new Xt(3.5,1.9),new Wt({color:"#BFDDF0",transparent:!0,opacity:.3,side:me,depthWrite:!1})).translateY(1.25).translateZ(-.62));let i=new _t(new Xt(1.1,1.7),Mt(ye("SORVETERIA GELATO",{fundo:"#F2546E",w:256,h:400,sub:"na pra\xE7a!"})));i.position.set(1.75,1.3,-.55),i.rotation.y=-Math.PI/2,e.add(i),e.add(D(.06,1.8,1.2,"#3A3D44",1.8,1.3,-.05));for(let o=0;o<3;o++)e.add(Q(.9,.06,.42,"#C9874E",-1.1+o*1,.48,-.3,{out:.008}));e.add(D(3,.06,.06,"#3A3D44",0,.42,-.3));for(let o of[-1.4,0,1.4])e.add(D(.06,.42,.06,"#3A3D44",o,.21,-.3));let s=new Y;s.position.set(-2.4,0,.3),s.add(j(.04,.04,2.6,"#3A3D44",0,1.3,0,{seg:6})),s.add(new _t(new En(.3,20),Mt(ye("P",{fundo:"#2E6FB8",w:128,h:128,raio:64}))).translateY(2.5).translateZ(.02)),e.add(s),n.cena.add(e);let r=Math.abs(Math.sin(t.ry))>.5;n.colisores.push({x:t.x-.3*Math.sin(t.ry),z:t.z-.3*Math.cos(t.ry),w:r?.6:3.4,d:r?3.4:.6,h:.5});for(let o of[-1,1]){let a=t.x+o*1.8*Math.cos(t.ry)-.6*Math.sin(t.ry),l=t.z-o*1.8*Math.sin(t.ry)-.6*Math.cos(t.ry);n.colisores.push({x:a,z:l,w:.15,d:.15,h:2.5})}n.pontos[t.nome]={x:t.x+Math.sin(t.ry)*.6,z:t.z+Math.cos(t.ry)*.6,y:.15,ry:t.ry}}var Yh=new Map,Za=(n,t=1)=>{let e=n+"_"+t;return Yh.has(e)||Yh.set(e,new xa(n,t)),Yh.get(e)};function Jn(n="comum",t=1,e=0){let i=new Y,s=$t(e*31+7);if(n==="palmeira"){let r=0,o=7;for(let a=0;a<o;a++){let l=j(.16-a*.008,.18-a*.008,1.05,"#A88A62",Math.sin(a*.35)*.25,r+.52,0,{out:.01,seg:10});l.rotation.z=Math.cos(a*.4)*.05,i.add(l),r+=1}for(let a=0;a<9;a++){let l=new Y;l.position.set(.2,r,0),l.rotation.y=a/9*Math.PI*2;let c=bt(new nn(.5,3.2,4),a%2?"#4E9A48":"#5FAE52",{out:.012});c.scale.set(1,1,.18),c.rotation.z=-Math.PI/2-.5,c.position.set(1.5,-.35,0),l.add(c),i.add(l)}i.add(_e(.32,"#8A6A3E",.2,r-.1,0,{seg:10}))}else if(n==="pinheiro"){i.add(j(.16,.24,2.2,"#6E4A2E",0,1.1,0,{out:.012,seg:10}));for(let r=0;r<4;r++)i.add(bt(new nn(2.2-r*.45,2.4,9),r%2?"#2F7A4A":"#3A8A55",{out:.016,pos:[0,2.4+r*1.35,0]}))}else{let r={ipeRoxo:["#B566C9","#9A4FB3","#CF8ADE"],ipeAmarelo:["#F2C230","#E2A91E","#F8D860"],quaresmeira:["#8E5BC4","#A877D6","#7646AE"],mangueira:["#3E8A40","#4E9C4C","#2F7434"],comum:["#5AA84E","#4A9644","#6CB85C"]}[n]||["#5AA84E","#4A9644","#6CB85C"],o=n==="mangueira"?1.15:1,a=(2.3+s()*.6)*o,l=j(.17,.27,a,"#7A5233",0,a/2,0,{out:.012,seg:10});i.add(l);for(let h of[0,2.1,4.2]){let u=j(.07,.1,1.3,"#7A5233",Math.cos(h)*.35,a+.25,Math.sin(h)*.35,{seg:8});u.rotation.set(Math.sin(h)*.6,0,-Math.cos(h)*.6),i.add(u)}let c=n==="mangueira"?6:5;for(let h=0;h<c;h++){let u=h/c*6.283+s(),d=1.1+s()*.5,p=(1.05+s()*.45)*(n==="mangueira"?1.2:1);i.add(bt(Za(p,1),r[h%3],{out:.02,pos:[Math.cos(u)*d*.8,a+.9+s()*.9,Math.sin(u)*d*.8]}))}if(i.add(bt(Za(1.45*(n==="mangueira"?1.25:1),1),r[0],{out:.02,pos:[0,a+1.8,0]})),n.startsWith("ipe")||n==="quaresmeira"){let h=new _t(new En(2.1,20),new Wt({color:r[2],transparent:!0,opacity:.55,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.02,i.add(h)}}return i.scale.setScalar(t),i}function ff(n=1.2,t=.9,e=.9,i="#4E9A48",s=0){let r=new Y,o=$t(s+3),a=Math.max(2,Math.round(n/.6));for(let l=0;l<a;l++)r.add(bt(Za(.5,1),l%2?i:"#5FAE52",{out:.014,pos:[-n/2+n*(l+.5)/a,t*.55,(o()-.5)*e*.3]}));return r.children.forEach(l=>l.scale.set(n/a*1.5,t*1.25,e*1.1)),r}function $a(n,t,e=0){let i=new Y,s=$t(e+9);i.add(D(n,.25,t,"#8E5A3A",0,.125,0)),i.add(Ke(n-.1,t-.1,Ie("#5A3A24"),0,.26,0));let r=["#F2546E","#F2C230","#FFFFFF","#B566C9","#F08A2C"];for(let o=0;o<Math.round(n*t*4);o++){let a=(s()-.5)*(n-.3),l=(s()-.5)*(t-.3);i.add(j(.012,.012,.22,"#3E8A40",a,.37,l,{shadow:!1,seg:5})),i.add(_e(.07,Ht(s,r),a,.5,l,{seg:8,shadow:!1}))}return i}function pf(n){let t=new Y;t.name="paisagem";let e=Mt(sn(Bi(),300,300)),i=new wn;i.moveTo(-700,-700),i.lineTo(700,-700),i.lineTo(700,700),i.lineTo(-700,700),i.lineTo(-700,-700);let s=new bs;s.absellipse(0,-223,206,96,0,Math.PI*2,!0),i.holes.push(s);let r=new ts(i,48),o=r.attributes.uv;for(let y=0;y<o.count;y++)o.setXY(y,o.getX(y)/3,o.getY(y)/3);let a=new _t(r,Mt(Bi()));a.material.map.repeat.set(1,1),a.rotation.x=-Math.PI/2,a.position.y=-.03,a.receiveShadow=!0,t.add(a);let l=$t(77),c=(y,m,f,E,v,_=12)=>{let M=bt(new Qt(1,_,8,0,Math.PI*2,0,Math.PI/2),v,{shadow:!1});return M.scale.set(f,E,f*(.7+l()*.5)),M.position.set(y,-1,m),M.rotation.y=l()*3,t.add(M),M};for(let y=0;y<34;y++){let m=y/34*Math.PI*2,f=360+l()*90,E=80+l()*60,v=40+l()*45,_=Math.abs(m-Math.PI*1.5)<.45;c(Math.cos(m)*f,Math.sin(m)*f,E,_?v*.35:v,y%2?"#6FA866":"#7DB572")}for(let y=0;y<26;y++){let m=y/26*Math.PI*2+.1,f=620+l()*120;c(Math.cos(m)*f,Math.sin(m)*f,170+l()*90,110+l()*90,y%2?"#8DB3C9":"#9DBFD2")}let h=new Y;h.position.set(60,0,-540),c(60,-540,210,120,"#5E9A5C",16);let u=bt(new gr(1,1),"#9E9A94",{out:.004});u.scale.set(85,120,65),u.position.set(0,135,10),h.add(u);let d=bt(new gr(1,1),"#8E8A84",{out:.004});d.scale.set(44,70,40),d.position.set(-55,100,0),h.add(d);let p=bt(new gr(1,1),"#B4AEA6");p.scale.set(30,50,30),p.position.set(28,150,40),h.add(p),t.add(h);for(let y=0;y<3;y++){let m=j(.6,1.2,40,y?"#E8443A":"#F4F1EA",-260+y*14,95,-420,{seg:6});t.add(m)}let g=new Y;for(let y=0;y<140;y++){let m=l()*Math.PI*2,f=200+l()*140,E=Math.cos(m)*f*1.1,v=Math.sin(m)*f;if(v>120&&Math.abs(E)<240||Math.abs(E-150)<14)continue;let _=Jn(Ht(l,["comum","comum","mangueira","pinheiro","ipeAmarelo","ipeRoxo"]),1.4+l()*.8,y);_.position.set(E,0,v),g.add(_)}t.add(g),n.cena.add(_i(t))}function mf(n){let t=new Y;t.name="lago";let e=127;t.add(D(330,.15,9,"#D9D2C5",0,.075,e+4.5)),t.add(Ke(330,9,Mt(sn(n.tex.ondas(),165,4.5)),0,.152,e+4.5)),t.add(D(330,.5,.3,"#B9B3AA",0,.25,e+9));let i=new wn;i.absellipse(0,0,200,90,0,Math.PI*2);let s=Mt(sn(Wh(),20,9));s.transparent=!1;let r=new _t(new ts(i,64),s);r.rotation.x=-Math.PI/2,r.position.set(0,-.3,e+96),r.receiveShadow=!0,r.userData.vivo=!0,t.add(r);let o=new _t(new ts((()=>{let l=new wn;return l.absellipse(0,0,206,96,0,Math.PI*2),l})(),64),Ie("#D8C49A"));o.rotation.x=-Math.PI/2,o.position.set(0,-.7,e+96),t.add(o),n.vivos.push(l=>{s.map.offset.set(l*.01,Math.sin(l*.3)*.02)});let a=new Y;a.position.set(-40,0,e+9),a.add(D(4,.2,22,"#9A6A3E",0,.1,11));for(let l=0;l<6;l++)a.add(j(.12,.12,1.4,"#7A5233",-1.9,-.4,1+l*4,{seg:8})),a.add(j(.12,.12,1.4,"#7A5233",1.9,-.4,1+l*4,{seg:8}));a.add(D(.08,.08,22,"#7A5233",-1.95,1.05,11)),a.add(D(.08,.08,22,"#7A5233",1.95,1.05,11));for(let l=0;l<=11;l++)a.add(D(.06,1,.06,"#7A5233",-1.95,.6,l*2)),a.add(D(.06,1,.06,"#7A5233",1.95,.6,l*2));t.add(a),n.colisores.push({x:-40-2.1,z:e+20,w:.2,d:22,h:1.1},{x:-40+2.1,z:e+20,w:.2,d:22,h:1.1}),n.pontos["lago.deck"]={x:-40,z:e+28,y:.2,ry:0};for(let[l,c,h]of[[30,"#E2443A","COCO GELADO"],[75,"#2E9C6A","PASTEL"],[-95,"#F08A2C","MILHO"]]){let u=new Y;u.position.set(l,.15,e+4),u.add(Q(3.2,1.1,2,"#F4F1EA",0,.55,0,{out:.014})),u.add(D(3.3,.08,2.1,"#9A6A3E",0,1.14,0));for(let[g,y]of[[-1.5,-.9],[1.5,-.9],[-1.5,.9],[1.5,.9]])u.add(j(.05,.05,1.5,"#7A5233",g,1.9,y,{seg:6}));let d=bt(new nn(2.6,1.2,4),c,{out:.016,pos:[0,3.2,0],rot:[0,Math.PI/4,0]});d.scale.set(1,1,.8),u.add(d);let p=new _t(new Xt(2.6,.5),Mt(n.tex.letreiroTex(h,{fundo:"#F4F1EA",cor:c})));p.position.set(0,2.35,1.1),u.add(p);for(let g=0;g<2;g++){let y=new Y;y.position.set(-3+g*6,0,3),y.add(j(.5,.5,.05,"#F4F1EA",0,.75,0)),y.add(j(.04,.04,.75,"#C9C2B6",0,.37,0,{seg:6}));for(let m of[0,2.1,4.2])y.add(j(.22,.22,.45,"#E2443A",Math.cos(m)*.8,.22,Math.sin(m)*.8,{seg:10}));u.add(y),n.colisores.push({x:l-3+g*6,z:e+7,w:1.1,d:1.1,h:.8})}t.add(u),n.colisores.push({x:l,z:e+4,w:3.3,d:2.2,h:1.2})}for(let l=0;l<11;l++){let c=-150+l*30;Math.abs(c+40)<6||(t.add(Jn(l%3?"palmeira":"ipeRoxo",1,300+l).translateX(c).translateZ(e+1.2).translateY(.15)),n.colisores.push({x:c,z:e+1.2,w:.5,d:.5,h:3}))}n.cena.add(_i(t));for(let l=0;l<4;l++){let c=new Y,h=["#F2F2F0","#F2C230","#5DB4D8","#F2546E"][l],u=bt(new Qt(1,16,10),h,{out:.014});u.scale.set(1.3,.45,.8),c.add(u);let d=j(.18,.22,1.3,h,.95,.75,0,{out:.014});d.rotation.z=.25,c.add(d),c.add(_e(.36,h,1.15,1.45,0,{out:.014})),c.add(bt(new nn(.12,.4,8),"#F08A2C",{pos:[1.55,1.42,0],rot:[0,0,-Math.PI/2]})),c.add(_e(.06,"#1B1420",1.35,1.6,.26)),c.add(_e(.06,"#1B1420",1.35,1.6,-.26)),c.add(D(1,.5,1.1,"#F4F1EA",-.3,.55,0)),c.add(D(.08,.5,1.1,h,-.8,.95,0)),n.cena.add(c);let p=-20+l*35,g=e+70+l%2*22,y=10+l*3;n.vivos.push(m=>{let f=m*.03*(l%2?1:-1)+l;c.position.set(p+Math.cos(f)*y,-.25+Math.sin(m*1.3+l)*.05,g+Math.sin(f)*y*.6),c.rotation.y=-f+(l%2?-Math.PI/2:Math.PI/2),c.rotation.z=Math.sin(m*1.1+l)*.03})}}function gf(n){let t=$t(55),e=new Y,i=new Wt({color:"#FFFFFF",gradientMap:ho(),emissive:"#FFFFFF",emissiveIntensity:.25,fog:!1});n.matNuvem=i;for(let s=0;s<22;s++){let r=new Y,o=3+(t()*3|0);for(let c=0;c<o;c++){let h=new _t(Za(1,2),i);h.scale.set(18+t()*10,10+t()*6,14+t()*6),h.position.set(c*18-o*9,t()*6,t()*8),r.add(h)}let a=t()*Math.PI*2,l=400+t()*500;r.position.set(Math.cos(a)*l,140+t()*80,Math.sin(a)*l),r.userData.base=r.position.clone(),e.add(r)}n.cena.add(e),n.vivos.push(s=>{for(let r of e.children)r.position.x=r.userData.base.x+(s*1.5+2e3)%4e3*.05})}var Sr=n=>new kt(n),Ja=[[0,"#0B1430","#1E2C55","#7F93D6",.35,"#4A5B92","#2A2A3A",.55],[5,"#1A2350","#5A4E7A","#9A8AC8",.4,"#5A6292","#3A3446",.6],[6.3,"#5E8CC8","#F4B48A","#FFB078",1.4,"#C8C8E8","#8E7C70",1],[8,"#6FB4EC","#CBE8F7","#FFF0D8",2.1,"#EAF2FF","#C9BCAE",1.4],[12,"#5FAEEB","#D2ECF8","#FFF6E8",2.4,"#EAF2FF","#C9BCAE",1.5],[16,"#68AEE6","#DCEBF2","#FFE8C8",2.2,"#EAF0FF","#C9BCAE",1.4],[17.6,"#7A9CD6","#F7B27A","#FFAE66",1.7,"#E0C8D8","#A08070",1.15],[18.4,"#4A5C9E","#E8806A","#F2865A",1,"#9A88B8","#6A5262",.85],[19.3,"#1C2556","#4A3E6E","#8A86C8",.45,"#5A6292","#3A3446",.62],[24,"#0B1430","#1E2C55","#7F93D6",.35,"#4A5B92","#2A2A3A",.55]];function Ry(n){n=(n%24+24)%24;let t=1;for(;t<Ja.length-1&&Ja[t][0]<n;)t++;let e=Ja[t-1],i=Ja[t],s=Ni((n-e[0])/(i[0]-e[0])),r=o=>Sr(e[o]).lerp(Sr(i[o]),s);return{topo:r(1),hor:r(2),sol:r(3),si:Ha(e[4],i[4],s),hs:r(5),hc:r(6),hi:Ha(e[7],i[7],s)}}var Cy=n=>(n=(n%24+24)%24,n<12?1-Ch(5.2,6.6,n):Ch(17.8,19.2,n));function _f(n,t){let e=n.cena,i={topo:{value:Sr("#5FAEEB")},hor:{value:Sr("#D2ECF8")},sol:{value:new O(0,1,0)},corSol:{value:Sr("#FFF6E8")},noite:{value:0}},s=new _t(new Qt(1800,32,16),new He({uniforms:i,side:tn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 topo,hor,corSol,sol;uniform float noite;
      float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
      void main(){float y=max(vP.y,0.);vec3 c=mix(hor,topo,pow(y,.55));if(vP.y<0.)c=hor*.9;
        float d=max(dot(vP,normalize(sol)),0.);c+=corSol*(pow(d,900.)*2.5+pow(d,12.)*.25)*(1.-noite*.7);
        vec3 q=floor(vP*260.);float s=step(.997,h(q))*noite*smoothstep(.05,.3,y);c+=vec3(s);
        gl_FragColor=vec4(pow(c,vec3(1./2.2))*0.+c,1.);}`}));s.renderOrder=-10,s.frustumCulled=!1,e.add(s),n.ceu=s,e.background=null;let r=new ro("#EAF2FF","#B9A898",1.5);e.add(r);let o=new Ta("#FFF4E6",0);e.add(o),n.luzDentro=(u=1)=>{n._dentro=u,a()};let a=()=>{let u=n.n||0,d=n._dentro||0;o.intensity=d*(.75+u*1.1),o.color.set(u>.5?"#FFE2B8":"#FFF4E6")},l=new oo("#FFF6E8",2.4);l.castShadow=!0,e.add(l),e.add(l.target);let c=t.sombra||45;l.shadow.mapSize.set(4096,4096),Object.assign(l.shadow.camera,{left:-c,right:c,top:c,bottom:-c,near:1,far:600}),l.shadow.bias=-5e-4,l.shadow.normalBias=.03,l.shadow.radius=3,e.fog=new fa("#D2ECF8",t.neblina?.[0]??260,t.neblina?.[1]??1500);let h=[];for(let u=0;u<6;u++){let d=new Sa("#FFD98A",0,22,1.6);e.add(d),h.push(d)}n.luz={hemi:r,sol:l,pts:h},n.hora=u=>{n.h=u;let d=Ry(u),p=Cy(u);n.n=p,i.topo.value.copy(d.topo),i.hor.value.copy(d.hor),i.corSol.value.copy(d.sol),i.noite.value=p;let g=(u-6)/12*Math.PI,y=Math.sin(g),m=new O(Math.cos(g)*.9,Math.max(y,.12)*1.1,.38).normalize();i.sol.value.copy(m.y>0&&y>-.1?m:new O(-.3,.6,.3)),r.color.copy(d.hs),r.groundColor.copy(d.hc),r.intensity=d.hi,l.color.copy(d.sol),l.intensity=d.si,n._solDir=y>-.1?m:new O(-.35,.8,.4).normalize(),e.fog.color.copy(d.hor);for(let[f,E]of n._acesos)f.emissiveIntensity=E*p;a();for(let f of n._noiteFn)f(p,u);n.matNuvem&&(n.matNuvem.color.copy(d.hor).lerp(Sr("#FFFFFF"),.55-p*.4),n.matNuvem.emissive.copy(d.hor),n.matNuvem.emissiveIntensity=.3)},n.focar=(u,d)=>{let p=n._solDir||new O(.5,.8,-.3);l.target.position.set(u,0,d),l.position.set(u+p.x*200,p.y*200,d+p.z*200);let g=n.postes.map(y=>[y,(y[0]-u)**2+(y[2]-d)**2]).sort((y,m)=>y[1]-m[1]);h.forEach((y,m)=>{let f=g[m]?.[0];f&&(y.position.set(f[0],f[1]-.3,f[2]),y.intensity=(n.n||0)*40)})}}var Zh=new Map;function Bn(n){return Zh.has(n)||Zh.set(n,Mt(kh(n))),Zh.get(n)}function Jt(n,t,e,i,s,r={}){let o=r.h??2.8,a=r.t??.14,l=r.y??0,c=(r.vaos||[]).slice().sort((m,f)=>m.a-f.a),h=Math.abs(s-e)<1e-6,u=h?i-t:s-e,d=Math.sign(u)||1,p=Math.abs(u),g=(m,f,E,v)=>{if(f-m<.005||v-E<.005)return;let _=(m+f)/2*d,M=f-m,A=v-E,b=l+(E+v)/2,C=h?t+_:t,S=h?e:e+_;for(let[x,T]of[[-1,r.corA],[1,r.corB]]){if(!T)continue;let R=x*a/4,F=h?Xa(new le(M,A,a/2),M,A,a/2,1):Xa(new le(a/2,A,M),a/2,A,M,1),w=bt(F,Bn(T),{pos:[h?C:C+R,b,h?S+R:S]});w.castShadow=r.sombra??!0,n.add(w)}if(r.rodape&&E<.01)for(let[x,T]of[[-1,r.corA],[1,r.corB]]){if(!T||T===r.semRodape)continue;let R=x*(a/2+.006);n.add(D(h?M:.012,.08,h?.012:M,r.rodape,h?C:C+R,l+.04,h?S+R:S,{shadow:!1}))}E<1.2&&!r.semCol&&n.col(C,S,h?M:a,h?a:M,{h:v})},y=0;for(let m of c)g(y,m.a,0,o),g(m.a,m.b,0,m.y0??0),g(m.a,m.b,m.y1??2.1,o),y=m.b;g(y,p,0,o)}function yf(n,t,e,i,s,r,o,a,l="#F4F1EA"){let h=a+.04,u=d=>n.add(D(i?.07:h,o-r,i?h:.07,l,i?t+d*(s/2+.07/2-.02):t,(r+o)/2,i?e:e+d*(s/2+.07/2-.02),{shadow:!1}));u(-1),u(1),n.add(D(i?s+.07*2:h,.07,i?h:s+.07*2,l,t,o+.07/2-.02,e,{shadow:!1})),r>.05&&n.add(D(i?s+.07*2:h+.06,.05,i?h+.06:s+.07*2,l,t,r-.02,e,{shadow:!1}))}function ke(n,t,e,i,s,r=.82,o={}){let{C:a}={C:n.cidade},l=o.h??2.1,c=o.t??.14,h=o.dobra??-1,u=o.abre??1,d=o.cor||"#B87A4A";yf(n,e,i,s,r,0,l,c,o.batente);let p=new Y;p.userData.vivo=!0;let g=s?e+h*r/2:e,y=s?i:i+h*r/2;p.position.set(g,0,y);let m=new Y;p.add(m);let f=r-.02,E=.045,v=o.tipo||"madeira",_=(C,S,x,T)=>Q(s?C:E,S,s?E:C,d,s?x:0,T,s?0:x,{out:.01,r:.012}),M=-h*f/2;if(v==="vidro"){m.add(_(f,.25,M,.125)),m.add(_(f,.15,M,l-.08));for(let S of[-1,1])m.add(_(.08,l,M+S*(f/2-.04),l/2));let C=new _t(new Xt(f-.16,l-.4),new Wt({color:"#CFE6F2",transparent:!0,opacity:.35,depthWrite:!1,side:me}));C.position.set(s?M:0,l/2+.03,s?0:M),s||(C.rotation.y=Math.PI/2),m.add(C)}else{m.add(_(f,l-.01,M,l/2));for(let[C,S]of[[.25,.95],[1.15,1.85]])for(let x of[-1,1]){let T=D(s?f-.2:.012,S-C,s?.012:f-.2,new kt(d).multiplyScalar(.88).getStyle(),s?M:x*E/2,(C+S)/2,s?x*E/2:M,{shadow:!1});m.add(T)}}for(let C of[-1,1]){let S=new Y;S.position.set(s?M*2+h*.08:C*.04,1.02,s?C*.04:M*2+h*.08),S.add(j(.025,.025,.04,"#C9CED6",0,0,0,{rot:s?[Math.PI/2,0,0]:[0,0,Math.PI/2],seg:8})),S.add(D(s?.12:.02,.02,s?.02:.12,"#C9CED6",s?-h*-.05:0,0,s?0:-h*-.05)),m.add(S)}n.add(p);let A=s?-h*u:h*u,b={nome:t,aberta:o.aberta??0,auto:o.auto??!0,alvo:null,piv:p,max:(o.max??95)*Wa,abrir(C){b.aberta=C,p.rotation.y=A*b.max*Math.max(0,Math.min(1,C))},mundo:ci(n.L,e,i),lote:n.L.nome};return b.abrir(b.aberta),a.portas[(n.L.nome?n.L.nome+".":"")+t]=b,b}var $h=null;function Py(n,t,e){let i=n._vl||(n._vl=new Map),s=Math.abs(Math.round(t))%8+e;if(!i.has(s)){let r=Xh(Math.abs(Math.round(t))%8,e),o=Math.abs(Math.round(t))%8<4,a=new Wt({map:r,emissive:"#FFC870",emissiveMap:r,emissiveIntensity:0});o&&n&&n.acender(a,.9),i.set(s,a)}return i.get(s)}function Fy(){return $h||($h=new Wt({color:"#BFDDF0",transparent:!0,opacity:.28,depthWrite:!1,side:me})),$h}function rn(n,t,e,i,s,r,o,a={}){let l=a.t??.14;yf(n,t,e,i,s,r,o,l,a.moldura||"#F4F1EA");let c=o-r,h=(r+o)/2,u=n.nivel!=="perto",d=u?Py(n.cidade,a.seed||0,a.cortina||"#F3E3C0"):Fy(),p=new _t(new Xt(s,c),d);if(p.position.set(t,h,e),i||(p.rotation.y=Math.PI/2),a.virar&&(p.rotation.y+=Math.PI),p.castShadow=!1,n.add(p),u&&!a.duplo){let g=p.clone();g.rotation.y+=Math.PI,n.add(g)}if(n.add(D(i?.04:.05,c,i?.05:.04,a.moldura||"#F4F1EA",t,h,e,{shadow:!1})),a.grade)for(let g=1;g<Math.round(s/.14);g++){let y=-s/2+g*s/Math.round(s/.14);n.add(D(.02,c,.02,a.grade,i?t+y:t+(a.fora??1)*(l/2+.05),h,i?e+(a.fora??1)*(l/2+.05):e+y,{shadow:!1}))}if(!u&&a.cortina!==!1){let g=-(a.fora??1)*(l/2+.08),y=a.cortina||"#F3E3C0";for(let m of[-1,1]){let f=s*.28,E=Q(i?f:.03,c+.3,i?.03:f,y,i?t+m*(s/2-f/2+.12):t+g,h+.08,i?e+g:e+m*(s/2-f/2+.12),{r:.012,out:.008});n.add(E)}n.add(D(i?s+.5:.03,.03,i?.03:s+.5,"#8D949C",t+(i?0:g),o+.22,e+(i?g:0),{shadow:!1}))}}function Ka(n,t,e,i,s,r,o={}){let a=o.beiral??.6,l=i+a*2,c=s+a*2,h=o.sobe??Math.min(l,c)*.28,u=o.duas,d=new ze,p=[],g=[],y=l>=c,m=l/2,f=c/2,E=u?y?m:f:Math.abs(m-f),v=(b,C,S)=>p.push(...b,...C,...S),_=(b,C,S,x)=>{v(b,C,S),v(b,S,x)};if(y){let b=[-E,h,0],C=[E,h,0];_([-m,0,f],[m,0,f],C,b),_([m,0,-f],[-m,0,-f],b,C),u||(v([m,0,f],[m,0,-f],C),v([-m,0,-f],[-m,0,f],b))}else{let b=[0,h,-E],C=[0,h,E];_([m,0,f],[m,0,-f],b,C),_([-m,0,-f],[-m,0,f],C,b),u||(v([-m,0,f],[m,0,f],C),v([m,0,-f],[-m,0,-f],b))}d.setAttribute("position",new oe(p,3));let M=[];for(let b=0;b<p.length;b+=9){let C=new O(p[b],p[b+1],p[b+2]),S=new O(p[b+3],p[b+4],p[b+5]),x=new O(p[b+6],p[b+7],p[b+8]),T=new O().subVectors(S,C).cross(new O().subVectors(x,C)),R=T.x,F=T.z,w=Math.hypot(R,F)||1,L=[R/w,F/w],N=[-L[1],L[0]];for(let z of[C,S,x])M.push((z.x*N[0]+z.z*N[1])/2,(z.y-(z.x*L[0]+z.z*L[1]))/2)}d.setAttribute("uv",new oe(M,2)),d.computeVertexNormals();let A=bt(d,Mt(zh(o.cor||"#C8643C")),{pos:[t,r,e],out:.02});if(A.material.side=me,A.castShadow=o.sombra??!0,n.add(A),n.add(D(l,.06,c,o.forro||"#F4F1EA",t,r-.03,e,{shadow:!1})),u){let b=new wn,C=y?c:l;b.moveTo(-C/2+a,0),b.lineTo(C/2-a,0),b.lineTo(0,h*(C/2-a)/(C/2)),b.lineTo(-C/2+a,0);for(let S of[-1,1]){let x=bt(new ts(b),Bn(o.parede||"#E8DCC8"),{});x.material.side=me,y?(x.rotation.y=Math.PI/2,x.position.set(t+S*(i/2),r,e)):x.position.set(t,r,e+S*(s/2)),n.add(x)}}return A}function is(n,t,e,i,s,r,o,a={}){let l=a.alt??.8,c=.18;n.add(D(i+.02,.14,s+.02,"#C9C2B6",t,r+.07,e,{shadow:!0}));for(let[h,u,d,p]of[[0,s/2,i+c,c],[0,-s/2,i+c,c],[i/2,0,c,s],[-i/2,0,c,s]])n.add(Zn(d,l,p,Bn(o),t+h,r+l/2,e+u,1,{out:.016}));n.add(D(i+c+.08,.06,.06+c,"#F4F1EA",t,r+l+.03,e+s/2,{shadow:!1})),n.add(D(1.4,.9,1.2,"#3E7CC8",t+i/4,r+.55,e-s/4,{out:.014}))}var Jh=new Map;function Kn(n,t,e,i,s,r,o="#F7F4EE"){Jh.has(o)||Jh.set(o,new Wt({color:o,emissive:o,emissiveIntensity:.62}));let a=new _t(new Xt(i,s),Jh.get(o));return a.rotation.x=Math.PI/2,a.position.set(t,r,e),a.castShadow=!1,a.receiveShadow=!1,n.add(a),a}function jn(n,t,e,i,s,r,o=.01,a=1){let l=r.map?r.map.clone():null,c=r;l&&(l.wrapS=l.wrapT=Sn,l.repeat.set(i/a,s/a),l.needsUpdate=!0,c=Mt(l));let h=Ke(i,s,c,t,o,e);return n.add(h),h}var ae=(n,...t)=>{let e=new Y;for(let i of t)e.add(i);return e.userData.pe=n,e};var vf=["#3E7CC8","#C84E4E","#5AA84E","#8E6CC4","#D98A3A","#4FB8A0","#7A8696","#B5603E"];function ja(n=2.1,t="#3E7CC8"){let e=ae([n,.9]),i=new kt(t).multiplyScalar(.82).getStyle();e.add(Q(n,.42,.86,t,0,.21+.08,0,{out:.014,r:.08})),e.add(Q(n,.5,.22,i,0,.62,-.32,{out:.014,r:.08}));for(let r of[-1,1])e.add(Q(.2,.58,.86,i,r*(n/2-.1),.37,0,{out:.014,r:.07}));let s=Math.max(2,Math.round(n/.8));for(let r=0;r<s;r++)e.add(Q((n-.44)/s-.03,.14,.62,t,-n/2+.22+(n-.44)/s*(r+.5),.56,.06,{out:.012,r:.06}));for(let r of[-1,1])for(let o of[-1,1])e.add(j(.03,.02,.08,"#3A2A20",r*(n/2-.1),.04,o*.34,{seg:6}));return e.add(Q(.4,.36,.12,"#F2C230",-n/2+.45,.72,-.17,{out:.012,r:.06,rot:[-.25,.2,0]})),e}function Ef(n="#C84E4E"){let t=ja(.95,n);return t.userData.pe=[.95,.9],t}function Mf(n=1.1,t=.6,e="#9A6236"){let i=ae([n,t],Q(n,.06,t,e,0,.42,0,{out:.012}));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.add(D(.05,.4,.05,e,s*(n/2-.07),.2,r*(t/2-.07)));return i.add(D(n-.12,.03,t-.12,e,0,.12,0)),i.add(Q(.24,.03,.17,"#E2443A",.2,.46,.05)),i.add(j(.08,.06,.1,"#F4F1EA",-.25,.5,0,{out:.01})),i}function Qa(n=2,t=1.4,e="#C84E4E",i="#F2C230"){let s=ce(256,Math.round(256*t/n),(a,l,c)=>{a.fillStyle=e,a.fillRect(0,0,l,c),a.strokeStyle=i,a.lineWidth=10,a.strokeRect(14,14,l-28,c-28),a.lineWidth=4,a.strokeRect(32,32,l-64,c-64),a.fillStyle=i,a.beginPath(),a.ellipse(l/2,c/2,l*.16,c*.2,0,0,7),a.fill()}),r=Ke(n,t,Mt(s),0,.012,0);return r.castShadow=!1,ae([0,0],r)}function Tr(n=1.6,t="#7A5233"){let e=ae([n,.45]);e.add(Q(n,.5,.42,t,0,.25,0,{out:.012}));for(let s of[-1,1])e.add(D(n/2-.06,.36,.01,"#5E3E26",s*n/4,.25,.215));e.add(Q(1.2,.7,.06,"#1B1A20",0,.5+.45,-.05,{out:.012})),e.add(D(.3,.03,.18,"#2A2A30",0,.515,-.05)),e.add(D(.06,.1,.04,"#2A2A30",0,.56,-.05));let i=Iy();return i.position.set(0,.95,-.016),e.add(i),e.userData.tela=i,e.add(Q(.3,.06,.15,"#2A2A30",.45,.53,.05)),e}var po=null;function Iy(n=1.12,t=.62){po||(po=ce(512,1024,s=>{[["#6FB4EC","#5AA84E"],["#F2994A","#3E2A60"],["#2E6FB8","#E8DCC8"],["#58B26A","#F2C230"]].forEach(([o,a],l)=>{let c=l*256;s.fillStyle=o,s.fillRect(0,c,512,256),s.fillStyle=a,s.fillRect(0,c+170,512,86),s.fillStyle="#F4D2B0",s.beginPath(),s.arc(180+l*40,c+120,44,0,7),s.fill(),s.fillStyle="#2A1E1A",s.beginPath(),s.arc(180+l*40,c+100,44,Math.PI,0),s.fill(),s.fillStyle=["#E2443A","#2E9C6A","#F2C230","#3E7CC8"][l],s.fillRect(120+l*40,c+160,120,96),s.fillStyle="rgba(0,0,0,.55)",s.fillRect(0,c+214,512,42),s.fillStyle="#FFF",s.font="700 26px Inter, Arial",s.fillText(["JORNAL DA SERRA","NOVELA DAS NOVE","PREVIS\xC3O DO TEMPO","FUTEBOL AO VIVO"][l],16,c+244)})}),po.wrapT=Sn,po.repeat.set(1,.25));let e=po.clone();e.needsUpdate=!0,e.repeat.set(1,.25);let i=new _t(new Xt(n,t),new Le({map:e,toneMapped:!1}));return i.userData.vivo=!0,i.userData.tv=!0,i}function wr(n,t,e=0){let i=Math.floor((t+e*3.1)/6.5)%4;n.material.map.offset.set(Math.sin(t*.8+e)*.01,.75-i*.25)}function jh(n=1.2,t=1.8,e="#9A6236",i=0){let s=ae([n,.35]),r=$t(i+5);for(let a of[-1,1])s.add(D(.04,t,.34,e,a*(n/2-.02),t/2,0,{out:.01}));s.add(D(n,.04,.34,e,0,t,0,{out:.01})),s.add(D(n,t,.02,new kt(e).multiplyScalar(.8).getStyle(),0,t/2,-.16));let o=Math.round(t/.42);for(let a=0;a<o;a++){let l=.05+a*t/o;s.add(D(n-.08,.03,.32,e,0,l,0));let c=-n/2+.08;for(;c<n/2-.14;){if(r()<.2){c+=.12;continue}let h=.04+r()*.05,u=.2+r()*.12;s.add(D(h,u,.22,Ht(r,vf),c+h/2,l+.015+u/2,.02)),c+=h+.008}a===1&&s.add(j(.08,.06,.16,"#F4F1EA",n/2-.14,l+.1,0,{out:.01}))}return s}function ln(n=1,t=0){let e=ae([.45,.45]),i=$t(t+2);e.add(j(.2,.15,.38,Ht(i,["#C8643C","#F4F1EA","#3A3A44","#D9B07A"]),0,.19,0,{out:.012,seg:14})),e.add(j(.18,.18,.02,"#5A3A24",0,.37,0));for(let s=0;s<7;s++){let r=s/7*6.283,o=bt(new Qt(.16,10,6),s%2?"#4E9A48":"#5FAE52",{out:.01});o.scale.set(.6,1.8*n,.35),o.position.set(Math.cos(r)*.12,.55+n*.25,Math.sin(r)*.12),o.rotation.set(Math.sin(r)*.5,r,-Math.cos(r)*.5),e.add(o)}return e}function xf(){let n=ae([.35,.35]);n.add(j(.16,.18,.03,"#2A2A30",0,.015,0)),n.add(j(.015,.015,1.45,"#2A2A30",0,.74,0,{seg:6}));let t=new Wt({color:"#F6E6C0",emissive:"#FFD98A",emissiveIntensity:.25});return n.add(bt(new $e(.14,.22,.3,16,1,!0),t,{pos:[0,1.5,0],out:.01})),n}function Pn(n,t,e=0,i="paisagem"){let s=$t(e+8),r=ce(256,Math.round(256*t/n),(l,c,h)=>{if(i==="paisagem")l.fillStyle="#8EC8EC",l.fillRect(0,0,c,h),l.fillStyle="#6FA866",l.beginPath(),l.moveTo(0,h*.7),l.quadraticCurveTo(c*.3,h*.35,c*.6,h*.62),l.quadraticCurveTo(c*.8,h*.5,c,h*.6),l.lineTo(c,h),l.lineTo(0,h),l.fill(),l.fillStyle="#9E9A94",l.beginPath(),l.ellipse(c*.66,h*.45,c*.1,h*.22,0,Math.PI,0),l.fill(),l.fillStyle="#F2C230",l.beginPath(),l.arc(c*.2,h*.22,h*.09,0,7),l.fill();else if(i==="familia"){l.fillStyle="#E8DCC8",l.fillRect(0,0,c,h);for(let u=0;u<3;u++){let d=c*(.28+u*.22),p=h*.45;l.fillStyle=["#2C6E7F","#E57AA0","#3A9AD9"][u],l.fillRect(d-26,p+20,52,h),l.fillStyle=["#9A6646","#E8B48C","#E3AE86"][u],l.beginPath(),l.arc(d,p,24,0,7),l.fill(),l.fillStyle=["#2B2422","#5A3020","#4A2A18"][u],l.beginPath(),l.arc(d,p-6,24,Math.PI,0),l.fill()}}else if(i==="poster")l.fillStyle=Ht(s,["#1F2D4E","#3E2A60","#E2443A"]),l.fillRect(0,0,c,h),l.fillStyle="#F2C230",l.beginPath(),l.arc(c/2,h*.4,c*.25,0,7),l.fill(),l.fillStyle="#FFF",l.font=`900 ${c*.13}px Inter, Arial`,l.textAlign="center",l.fillText(Ht(s,["ROCK","GAMER","FUTEBOL","ESPA\xC7O"]),c/2,h*.85);else{l.fillStyle="#F4F1EA",l.fillRect(0,0,c,h);for(let u=0;u<6;u++)l.fillStyle=Ht(s,vf),l.beginPath(),l.arc(s()*c,s()*h,10+s()*30,0,7),l.fill()}}),o=ae([0,0]);o.add(Q(n+.08,t+.08,.04,"#7A5233",0,0,.02,{out:.008}));let a=Xe(n,t,Mt(r),0,0,.042);return o.add(a),o}function mo(n=2.8){let t=ae([0,0]);t.add(j(.02,.02,.3,"#F4F1EA",0,n-.15,0,{seg:6})),t.add(j(.12,.1,.14,"#F4F1EA",0,n-.35,0,{out:.01}));let e=new Y;e.position.y=n-.36,e.userData.vivo=!0;for(let i=0;i<4;i++){let s=Q(.62,.02,.14,"#C8935E",.38,0,0,{out:.008}),r=new Y;r.rotation.y=i*Math.PI/2,r.add(s),e.add(r)}return t.add(e),t.userData.pas=e,t}function Ds(n,t=2.8){let e=new Wt({color:"#FFF8E6",emissive:"#FFE8B0",emissiveIntensity:0});return n.acender(e,1.6),ae([0,0],bt(new $e(.22,.25,.07,18),e,{pos:[0,t-.035,0],shadow:!1}))}function Af(n=2.2,t="#F4F1EA",e="#3A3A44"){let i=ae([n,.62]);i.add(Q(n,.86,.58,t,0,.43,0,{out:.012,r:.02})),i.add(D(n+.02,.04,.62,e,0,.88,0,{out:.01}));let s=Math.round(n/.5);for(let a=0;a<s;a++){let l=-n/2+n/s*(a+.5);i.add(D(n/s-.03,.7,.01,t,l,.45,.295)),i.add(D(.12,.02,.02,"#9AA0A8",l+(a%2?-.12:.12),.7,.31))}i.add(D(.6,.02,.4,"#C9CED6",-n/4,.905,0)),i.add(D(.52,.03,.34,"#8D949C",-n/4,.9,0));let r=new Y;r.position.set(-n/4,.9,-.22),r.add(j(.02,.02,.28,"#C9CED6",0,.14,0,{seg:8}));let o=j(.015,.015,.2,"#C9CED6",0,.28,.08,{seg:8});return o.rotation.x=Math.PI/2,r.add(o),i.add(r),i.add(j(.1,.09,.24,"#B5603E",n/2-.3,1.02,0,{out:.01})),i.add(j(.11,.11,.03,"#8E4A2E",n/2-.3,1.15,0)),i.add(Q(.3,.05,.2,"#F2C230",n/4,.93,.05)),i}function bf(n=2,t="#F4F1EA"){let e=ae([0,0]);e.add(Q(n,.65,.34,t,0,0,0,{out:.012,r:.02}));let i=Math.round(n/.5);for(let s=0;s<i;s++){let r=-n/2+n/i*(s+.5);e.add(D(n/i-.03,.6,.01,t,r,0,.175)),e.add(D(.02,.1,.02,"#9AA0A8",r+(s%2?-.18:.18),-.2,.19))}return e}function Sf(n="#F4F1EA"){let t=ae([.62,.62]);t.add(Q(.6,.86,.6,n,0,.43,0,{out:.012,r:.02})),t.add(D(.5,.38,.01,"#2A2A30",0,.36,.301)),t.add(D(.44,.3,.01,"#4A4A52",0,.36,.305)),t.add(D(.6,.02,.6,"#2A2A30",0,.87,0));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(j(.08,.08,.02,"#4A4A52",s*.14,.89,r*.14,{seg:14})),t.add(j(.05,.05,.03,"#1B1A20",s*.14,.9,r*.14,{seg:10}));for(let s=0;s<4;s++)t.add(j(.025,.025,.03,"#1B1A20",-.2+s*.13,.8,.31,{rot:[Math.PI/2,0,0],seg:8}));t.add(D(.6,.5,.04,n,0,1.12,-.29));let e=new Y;e.position.set(.14,.9,.14),e.add(j(.12,.11,.14,"#9AA0A8",0,.07,0,{out:.01})),e.add(j(.125,.125,.015,"#8D949C",0,.15,0));let i=D(.2,.02,.03,"#2A2A30",.2,.1,0);return e.add(i),t.add(e),t}function Tf(n="#F4F1EA"){let t=ae([.72,.7]);t.add(Q(.7,1.8,.68,n,0,.9,0,{out:.014,r:.05})),t.add(D(.66,.015,.01,"#C9CED6",0,1.25,.345)),t.add(D(.03,.4,.04,"#C9CED6",-.28,1.5,.36)),t.add(D(.03,.5,.04,"#C9CED6",-.28,.8,.36));for(let e=0;e<4;e++)t.add(Q(.08,.06,.01,["#E2443A","#F2C230","#3E7CC8","#5AA84E"][e],-.1+e*.1-(e>1?.05:0),1.55-e%2*.12,.345));return t.add(Q(.3,.26,.3,"#E8DCC8",0,1.93,0)),t}function tl(n=1.2,t=.8,e="#B87A4A",i=4,s="#9A6236"){let r=ae([n+.9,t+.9]);r.add(Q(n,.05,t,e,0,.76,0,{out:.012}));for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add(D(.06,.74,.06,e,l*(n/2-.08),.37,c*(t/2-.08)));let o=Ke(n*.6,t+.1,Ie("#F4F1EA"),0,.79,0);r.add(o),r.add(j(.14,.1,.08,"#E2A630",0,.83,0,{out:.01}));for(let l=0;l<3;l++)r.add(_e(.05,["#E2443A","#F2C230","#5AA84E"][l],-.04+l*.04,.9,(l-1)*.03,{seg:10}));let a=i===4?[[0,t/2+.25,Math.PI],[0,-t/2-.25,0],[n/2+.25,0,-Math.PI/2],[-n/2-.25,0,Math.PI/2]]:[[-n/4,t/2+.25,Math.PI],[n/4,t/2+.25,Math.PI],[-n/4,-t/2-.25,0],[n/4,-t/2-.25,0],[n/2+.25,0,-Math.PI/2],[-n/2-.25,0,Math.PI/2]];for(let[l,c,h]of a){let u=Rr(s);u.position.set(l,0,c),u.rotation.y=h,r.add(u)}return r}function Rr(n="#9A6236"){let t=ae([.45,.45]);t.add(Q(.42,.05,.42,n,0,.46,0,{out:.01}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(D(.04,.46,.04,n,e*.18,.23,i*.18));return t.add(D(.04,.5,.04,n,-.18,.72,-.18)),t.add(D(.04,.5,.04,n,.18,.72,-.18)),t.add(Q(.4,.2,.03,n,0,.85,-.19,{out:.01})),t}function wf(){let n=ae([0,0]);return n.add(Q(.5,.3,.36,"#F4F1EA",0,.15,0,{out:.01})),n.add(D(.32,.22,.01,"#2A2A30",-.06,.15,.181)),n.add(D(.08,.2,.01,"#9AA0A8",.18,.15,.181)),n}function ss(n,t=.16){let e=ae([0,0]);e.add(j(t+.02,t+.02,.04,"#E2443A",0,0,0,{rot:[Math.PI/2,0,0],out:.008}));let i=ce(128,128,a=>{a.fillStyle="#FFF",a.beginPath(),a.arc(64,64,62,0,7),a.fill(),a.fillStyle="#1B1420";for(let l=0;l<12;l++){let c=l/12*6.283;a.fillRect(64+Math.cos(c)*50-3,64+Math.sin(c)*50-3,6,6)}}),s=new _t(new En(t,24),new Le({map:i}));s.position.z=.021,e.add(s);let r=new Y,o=new Y;return r.position.z=o.position.z=.025,r.userData.vivo=o.userData.vivo=!0,r.add(D(.016,t*.55,.005,"#1B1420",0,t*.27,0)),o.add(D(.01,t*.8,.005,"#1B1420",0,t*.4,0)),e.add(r,o),n.vivos.push(()=>{let a=n.h||12;o.rotation.z=-(a%1)*Math.PI*2,r.rotation.z=-(a%12)/12*Math.PI*2}),e}function Ls(n=.95,t="#3E7CC8",e="#9A6236",i=2){let s=ae([n+.05,i+.05]);s.add(Q(n+.05,.3,i+.05,e,0,.2,0,{out:.012})),s.add(Q(n+.05,.8,.07,e,0,.5,-i/2,{out:.012})),s.add(Q(n-.02,.2,i-.05,"#F4F1EA",0,.44,.01,{r:.06}));let r=Q(n+.02,.08,i*.68,t,0,.54,i*.15,{out:.012,r:.04});s.add(r),s.add(D(n+.04,.26,.02,t,0,.42,i*.49));for(let a of[-1,1])s.add(D(.02,.26,i*.68,t,a*(n/2+.01),.42,i*.15));let o=n>1.2?2:1;for(let a=0;a<o;a++)s.add(Q(o===2?n/2-.1:n-.2,.14,.34,"#FFFFFF",o===2?(a?1:-1)*n/4:0,.6,-i/2+.28,{out:.01,r:.06}));return s}function go(n="#9A6236",t=!0,e){let i=ae([.45,.4]);if(i.add(Q(.44,.55,.38,n,0,.275,0,{out:.012})),i.add(D(.38,.18,.01,new kt(n).multiplyScalar(.85).getStyle(),0,.4,.191)),i.add(D(.08,.02,.02,"#C9CED6",0,.4,.2)),t){i.add(j(.06,.08,.2,"#F4F1EA",-.08,.65,0,{out:.008}));let s=new Wt({color:"#F6E6C0",emissive:"#FFD98A",emissiveIntensity:0});e&&e.acender(s,1.2),i.add(bt(new $e(.09,.14,.17,14,1,!0),s,{pos:[-.08,.84,0],out:.008}))}return i.add(Q(.12,.03,.08,"#2A2A30",.12,.57,.04)),i}function Us(n=1.6,t=2.1,e="#D9B07A"){let i=ae([n,.6]);i.add(Q(n,t,.58,e,0,t/2,0,{out:.014,r:.02}));let s=n>1.2?3:2;for(let r=0;r<s;r++){let o=-n/2+n/s*(r+.5);i.add(D(n/s-.03,t-.12,.01,new kt(e).multiplyScalar(.93).getStyle(),o,t/2,.291)),i.add(D(.02,.3,.03,"#7A5233",o+(r%2?-1:1)*(n/s/2-.08),t/2,.31))}return i.add(Q(.5,.3,.4,"#C84E4E",-n/4,t+.15,0)),i}function Oi(n=1.1,t="#F4F1EA",e=!0,i=0){let s=ae([n,.6]);s.add(Q(n,.04,.58,t,0,.74,0,{out:.012})),s.add(D(.04,.72,.56,t,-n/2+.02,.36,0)),s.add(Q(.4,.72,.56,t,n/2-.2,.36,0,{out:.01}));for(let r=0;r<3;r++)s.add(D(.34,.2,.01,"#D9D2C5",n/2-.2,.58-r*.23,.281));if(e){s.add(Q(.55,.34,.04,"#1B1A20",-.05,1,-.15,{out:.01}));let r=new _t(new Xt(.5,.3),new Le({map:Dy(i)}));r.position.set(-.05,1,-.128),s.add(r),s.add(D(.06,.14,.06,"#2A2A30",-.05,.83,-.15)),s.add(D(.2,.02,.14,"#2A2A30",-.05,.77,-.15)),s.add(Q(.42,.02,.14,"#2A2A30",-.05,.77,.08)),s.add(Q(.06,.02,.1,"#2A2A30",.24,.77,.1))}return s.add(j(.04,.04,.1,"#3E7CC8",.3,.81,-.15,{seg:10})),s}var Kh=new Map;function Dy(n){return Kh.has(n%3)||Kh.set(n%3,ce(256,160,t=>{t.fillStyle=["#2E6FB8","#1F2D4E","#3E2A60"][n%3],t.fillRect(0,0,256,160),t.fillStyle="#F4F1EA",t.fillRect(16,16,140,90),t.fillStyle="#5AA84E",t.fillRect(24,60,60,38),t.fillStyle="#F2C230",t.fillRect(100,30,46,70),t.fillStyle="#2A2A30",t.fillRect(0,140,256,20),t.fillStyle="#FFF";for(let e=0;e<4;e++)t.fillRect(8+e*22,144,14,12)})),Kh.get(n%3)}function rs(n="#2A2A30"){let t=ae([.55,.55]);for(let e=0;e<5;e++){let i=e/5*6.283,s=D(.3,.03,.04,n,Math.cos(i)*.14,.06,Math.sin(i)*.14);s.rotation.y=-i,t.add(s)}return t.add(j(.03,.03,.38,"#8D949C",0,.26,0,{seg:8})),t.add(Q(.48,.08,.46,n,0,.47,0,{out:.01})),t.add(Q(.44,.55,.07,n,0,.82,-.22,{out:.01})),t}function Rf(n=1,t="#B87A4A"){let e=ae([n,.45]);e.add(Q(n,.85,.44,t,0,.425,0,{out:.012}));for(let i=0;i<3;i++)e.add(D(n-.08,.22,.01,new kt(t).multiplyScalar(.88).getStyle(),0,.18+i*.25,.221)),e.add(D(.16,.02,.02,"#7A5233",0,.25+i*.25,.23));return e.add(j(.06,.08,.03,"#F4F1EA",n/2-.2,.87,0)),e.add(Q(.2,.25,.03,"#7A5233",-n/4,.98,-.1,{rot:[-.15,0,0]})),e}function Cf(){let n=ae([.4,.65]);return n.add(bt(new $e(.19,.15,.4,18),"#FFFFFF",{pos:[0,.2,.05],out:.01})),n.add(j(.2,.2,.04,"#F4F1EA",0,.42,.05,{out:.008})),n.add(Q(.38,.38,.17,"#FFFFFF",0,.6,-.22,{out:.01})),n.add(D(.06,.02,.02,"#C9CED6",.12,.8,-.13)),n}function el(n=!0){let t=ae([.55,.45]);return t.add(Q(.55,.2,.45,"#FFFFFF",0,.78,0,{out:.01})),t.add(j(.08,.1,.7,"#FFFFFF",0,.35,-.05,{seg:12})),t.add(j(.016,.016,.16,"#C9CED6",0,.96,-.15,{seg:8})),n&&(t.add(Q(.5,.7,.03,"#C9CED6",0,1.5,-.21,{out:.01})),t.add(new _t(new Xt(.44,.64),new Wt({color:"#CFE6F2",emissive:"#9CC9E8",emissiveIntensity:.3})).translateY(1.5).translateZ(-.19))),t}function Pf(n=1,t=1){let e=ae([n,t]);e.add(D(n,.06,t,"#E8E4DC",0,.03,0));let i=new Wt({color:"#CFE6F2",transparent:!0,opacity:.35,depthWrite:!1});e.add(bt(new Xt(n,1.9),i,{pos:[0,1,t/2],shadow:!1})),e.add(D(n,.04,.04,"#C9CED6",0,1.95,t/2)),e.add(D(.04,1.95,.04,"#C9CED6",n/2-.02,1,t/2));let s=new Y;return s.position.set(0,2.05,-t/2+.1),s.add(j(.12,.12,.04,"#C9CED6",0,0,.2,{seg:14})),s.add(D(.03,.03,.25,"#C9CED6",0,.02,.08)),e.add(s),e}function Ff(n="#F2546E"){let t=ae([0,0]);return t.add(D(.5,.02,.02,"#C9CED6",0,0,.03)),t.add(Q(.45,.55,.03,n,0,-.28,.05,{r:.01})),t}function If(){let n=ae([.6,.55]);return n.add(Q(.6,.3,.55,"#E8E4DC",0,.78,0,{out:.01})),n.add(D(.08,.62,.08,"#E8E4DC",-.2,.31,0)),n.add(D(.08,.62,.08,"#E8E4DC",.2,.31,0)),n.add(j(.016,.016,.2,"#C9CED6",0,1.02,-.24,{seg:8})),n.add(Q(.12,.14,.08,"#3E7CC8",.18,.98,.05)),n}function Df(){let n=ae([.62,.62]);return n.add(Q(.6,.9,.6,"#F4F1EA",0,.45,0,{out:.012,r:.04})),n.add(j(.2,.2,.02,"#9AA0A8",0,.5,.3,{rot:[Math.PI/2,0,0],seg:20})),n.add(j(.16,.16,.02,"#7FA9C9",0,.5,.31,{rot:[Math.PI/2,0,0],seg:20})),n.add(D(.5,.1,.01,"#C9CED6",0,.8,.301)),n}function Lf(n=3,t=["#3E7CC8","#F2546E","#F4F1EA","#F2C230","#5AA84E"]){let e=ae([0,0]);for(let r of[-1,1])e.add(j(.03,.03,1.9,"#9AA0A8",r*n/2,.95,0,{seg:6}));e.add(D(n,.01,.01,"#E8E4DC",0,1.85,0));let i=$t(n*10),s=-n/2+.3;for(;s<n/2-.4;){let r=.3+i()*.3,o=.35+i()*.35,a=Q(r,o,.02,Ht(i,t),s+r/2,1.83-o/2,0,{r:.01});a.userData.vivo=!0,e.add(a),s+=r+.12}return e}function Uf(){let n=ae([1.4,.8]);n.add(D(1.4,.9,.8,"#B5603E",0,.45,0,{out:.014})),n.add(D(1.5,.06,.9,"#D8CBB8",0,.93,0)),n.add(D(1,.5,.1,"#3A2A20",0,1.2,.3)),n.add(D(1.2,.8,.7,"#B5603E",0,1.36,-.05,{out:.014}));let t=bt(new $e(.18,.6,.6,4),"#B5603E",{pos:[0,2.06,-.05],rot:[0,Math.PI/4,0],out:.014});t.scale.set(1.3,1,.9),n.add(t),n.add(D(.36,1.2,.36,"#B5603E",0,2.95,-.05,{out:.014})),n.add(D(.9,.02,.5,"#3A3A44",0,1,.1));for(let e=0;e<5;e++)n.add(_e(.05,"#2A1A14",-.3+e*.15,1.02,.1,{seg:8}));return n}function nl(n="#F4F1EA",t=!1){let e=ae([2.2,2.2]);e.add(j(.45,.45,.04,n,0,.72,0,{out:.01,seg:20}));for(let i of[0,1.57,3.14,4.71]){let s=D(.04,.72,.04,n,Math.cos(i)*.35,.36,Math.sin(i)*.35);s.rotation.z=Math.cos(i)*.12,e.add(s)}for(let i of[.4,2.1,3.7,5.2]){let s=Ly(n);s.position.set(Math.cos(i)*.85,0,Math.sin(i)*.85),s.rotation.y=-i-Math.PI/2,e.add(s)}if(t){e.add(j(.02,.02,2.2,"#9AA0A8",0,1.1,0,{seg:6}));let i=bt(new nn(1.3,.45,8,1,!0),"#E2443A",{pos:[0,2.2,0],out:.012});e.add(i)}return e}function Ly(n="#F4F1EA"){let t=new Y;t.add(Q(.44,.04,.42,n,0,.44,0,{out:.008}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(D(.04,.44,.04,n,e*.19,.22,i*.18));return t.add(Q(.44,.4,.04,n,0,.68,-.2,{out:.008,rot:[-.12,0,0]})),t}function Nf(n="#C84E4E"){let t=ae([1,1.1]);t.add(D(.9,.7,1,"#D9B07A",0,.35,0,{out:.012}));let e=bt(new $e(.01,.72,.5,4,1),n,{pos:[0,.95,0],rot:[0,Math.PI/4,0],out:.012});return e.scale.set(1,1,1.2),t.add(e),t.add(bt(new En(.22,16),"#2A1E1A",{pos:[0,.32,.505]})),t.add(D(.44,.2,.01,"#2A1E1A",0,.12,.505)),t}function Qh(n=0){let t=ln(1.3,n);return t.scale.setScalar(1.3),t.userData.pe=[.6,.6],t}function tu(n="#2FA37A"){let t=ae([1.7,.4]);for(let s of[-1,1]){let r=bt(new qn(.32,.03,8,24),"#2A2A30",{pos:[s*.55,.34,0]});t.add(r)}let e=D(1,.04,.04,n,0,.55,0);t.add(e);let i=D(.04,.4,.04,n,-.2,.5,0);return i.rotation.z=.3,t.add(i),t.add(Q(.22,.05,.1,"#2A2A30",-.28,.75,0)),t.add(D(.04,.04,.45,"#2A2A30",.45,.8,0)),t}function Hi(n="#E2443A",t=0){let e=ae([1.8,4.1]),i=$t(t+1);e.add(Q(1.74,.62,4,n,0,.55,0,{out:.016,r:.16})),e.add(Q(1.56,.52,2.1,n,0,1.08,-.25,{out:.016,r:.14}));let s=Ie("#6E95B8");e.add(D(1.4,.4,.02,s,0,1.08,.81,{rot:[-.35,0,0]})),e.add(D(1.4,.38,.02,s,0,1.08,-1.31,{rot:[.3,0,0]}));for(let o of[-1,1])e.add(D(.02,.36,.85,s,o*.785,1.08,.2)),e.add(D(.02,.36,.8,s,o*.785,1.08,-.75));for(let[o,a]of[[-.8,1.25],[.8,1.25],[-.8,-1.3],[.8,-1.3]]){let l=new Y;l.position.set(o,.34,a),l.add(j(.34,.34,.24,"#1B1A20",0,0,0,{rot:[0,0,Math.PI/2],out:.012,seg:18})),l.add(j(.18,.18,.25,"#C9CED6",0,0,0,{rot:[0,0,Math.PI/2],seg:14})),l.userData.roda=!0,e.add(l)}let r=new Wt({color:"#FFF6D8",emissive:"#FFF0C0",emissiveIntensity:.2});for(let o of[-1,1])e.add(bt(new le(.34,.14,.04),r,{pos:[o*.58,.68,2]})),e.add(D(.3,.12,.04,"#E8443A",o*.62,.7,-2));return e.add(D(1.3,.14,.05,"#3A3A44",0,.38,2.02)),e.add(D(1.3,.14,.05,"#3A3A44",0,.38,-2.02)),e.add(Q(.4,.12,.03,"#F4F1EA",0,.45,-2.04)),e}function Bf(n=0){let t=ae([0,0]),e=$t(n+61);t.add(D(1.2,.03,.25,"#F4F1EA",0,0,0,{out:.006})),t.add(D(1.2,.03,.25,"#F4F1EA",0,.45,0,{out:.006}));for(let i=0;i<2;i++)for(let s=0;s<6;s++){let r=Ht(e,["#3E7CC8","#5AA84E","#F2C230","#E2443A","#F2546E","#F4F1EA"]);t.add(j(.045,.05,.2,r,-.5+s*.2,.12+i*.45,0,{seg:8})),t.add(j(.015,.02,.05,r,-.5+s*.2,.245+i*.45,0,{seg:6}))}return t}function Of(){let n=ae([.5,.4]);return n.add(j(.22,.18,.5,"#D9B07A",0,.25,0,{out:.01,seg:14})),n.add(Q(.36,.12,.3,"#3E7CC8",0,.52,0,{r:.05})),n.add(Q(.2,.1,.2,"#F2546E",.05,.58,.04,{r:.04})),n}function Hf(){let n=ae([.35,.35]);n.add(j(.15,.12,.28,"#3E7CC8",0,.14,0,{out:.01,seg:14})),n.add(bt(new qn(.14,.008,6,16,Math.PI),"#9AA0A8",{pos:[0,.28,0]}));let t=new Y;return t.position.set(.3,0,0),t.add(j(.012,.012,1.3,"#F2C230",0,.65,0,{seg:6})),t.add(D(.4,.05,.05,"#2A2A30",0,.03,0)),t.rotation.z=.15,n.add(t),n}var Uy=["#F2D8A8","#E8DCC8","#CFE3D2","#F4C7B4","#D8E2EE","#F6E7A6","#E7C9DE","#F2F0EA","#C9DDE8","#EFC7A0"],il=["#F7F1E3","#EAF1F4","#F6E8E0","#EEF2E4","#F4EEDC","#E9E4F2"],Ny=["#C8643C","#B8573A","#D07A4A","#A85A40"],By=["#B87A4A","#8E5A3A","#F4F1EA","#3E7CC8","#2E7A5A"];function Oy(n){let t=$t(n.seed*97+13);if(n.tipo==="casaFamilia")return{ext:"#F2D8A8",faixa:"#C9874E",sala:"#F7F1E3",q1:"#D9ECF7",q2:"#F3E6EE",coz:"#FFFFFF",ser:"#EAF1F4",ban:"#FFFFFF",cor:"#F4EEDC",telha:"#C8643C",porta:"#8E5A3A",sofa:"#3E7CC8",cama1:"#2E9C6A",cama2:"#C84E4E",carro:"#E2443A",m:1,telhado:"4aguas",grade:"#3A3D44",muro:"reboco",carroSim:!0,R:t};let e=Ht(t,Uy);return{ext:e,faixa:new kt(e).multiplyScalar(.78).getStyle(),sala:Ht(t,il),q1:Ht(t,["#D9ECF7","#E8F4E0","#F7E3D9","#EDE3F7"]),q2:Ht(t,il),coz:"#FFFFFF",ser:Ht(t,il),ban:"#FFFFFF",cor:Ht(t,il),telha:Ht(t,Ny),porta:Ht(t,By),sofa:Ht(t,["#3E7CC8","#C84E4E","#7A8696","#5AA84E","#8E6CC4","#D98A3A"]),cama1:Ht(t,["#2E9C6A","#3E7CC8","#F2546E","#F2C230"]),cama2:Ht(t,["#C84E4E","#8E6CC4","#4FB8A0","#D98A3A"]),carro:Ht(t,["#E2443A","#3E7CC8","#F4F1EA","#2A2A30","#9AA0A8","#F2C230","#2E9C6A"]),m:t()<.5?1:-1,telhado:t()<.62?"4aguas":t()<.55?"2aguas":"platibanda",grade:Ht(t,["#3A3D44","#F4F1EA","#2E6FB8","#7A2A2A"]),muro:t()<.3?"tijolo":"reboco",carroSim:t()<.65,R:t}}function zf(n,t){nu(n,t,!1)}function kf(n,t){nu(n,t,!0)}var Gf=(n,t)=>nu(n,t,!1);function nu(n,t,e){let i=n.L,s=Oy(i),r=s.m,o=n.cidade,a=s.R,l=t==="perto",c=H=>H*r,h=2.8,u=.2,d=.12,p=Mt(sn($n("#CFC9BF","#C4BDB2"),1,1));if(_o(n,c(-2.45),8.2,5.9,5.4,p),_o(n,c(2.95),8.2,4.9,5.4,Mt(sn(Bi(),1,1)),3),_o(n,0,-8.75,10.7,4.5,p),_o(n,c(-5.1),-.5,.6,12,p),_o(n,c(5.1),-.5,.6,12,p),Hy(n,s,c,t),t!=="longe"){let H=Jn(Ht(a,["ipeAmarelo","quaresmeira","comum","ipeRoxo"]),.7,i.seed);H.position.set(c(3.6),0,8.6),n.add(H),n.col(c(3.6),8.6,.5,.5);let K=ff(3.2,.8,.7,"#4E9A48",i.seed);if(K.position.set(c(3),0,6.1),n.add(K),n.col(c(3),6.1,3.2,.7),i.tipo==="casaFamilia"||a()<.5){let et=$a(1.6,.7,i.seed);et.position.set(c(1.7),0,10.2),n.add(et),n.col(c(1.7),10.2,1.6,.7)}}if(s.carroSim){let H=Hi(s.carro,i.seed);H.position.set(c(-3),0,8.5),H.rotation.y=a()<.5?0:Math.PI,i.tipo==="casaFamilia"&&(H.rotation.y=Math.PI),n.add(H),n.col(c(-3),8.5,1.8,4.1,{nome:"carro"})}else if(l){let H=tu(Ht(a,["#2FA37A","#E2443A","#3E7CC8"]));H.position.set(c(-4.6),0,7.5),H.rotation.y=Math.PI/2,n.add(H)}let g=s,y=s.ext,m=l?s.sala:null,f=l?s.q1:null,E=l?s.q2:null,v=l?s.coz:null,_=l?s.ser:null,M=l?s.ban:null,A=l?s.cor:null,b=(H,K,et,X,ut,yt,W={})=>{let nt=Math.min(c(K),c(et)),ct=Math.max(c(K),c(et)),Z=(X||[]).map(it=>({a:c(it.c)-it.w/2-nt,b:c(it.c)+it.w/2-nt,y0:it.y0??0,y1:it.y1??2.1}));Jt(n,nt,H,ct,H,{vaos:Z,corA:ut,corB:yt,h:W.h??h,t:W.t??d,y:W.y??0,rodape:l?"#E8E4DC":null,semRodape:y})},C=(H,K,et,X,ut,yt,W={})=>{let nt=c(H),[ct,Z]=r>0?[ut,yt]:[yt,ut],it=(X||[]).map(ft=>({a:ft.c-ft.w/2-K,b:ft.c+ft.w/2-K,y0:ft.y0??0,y1:ft.y1??2.1}));Jt(n,nt,K,nt,et,{vaos:it,corA:ct,corB:Z,h:W.h??h,t:W.t??d,y:W.y??0,rodape:l?"#E8E4DC":null,semRodape:y})},S=(H,K,et,X,ut,yt,W,nt={})=>rn(n,c(H),K,et,X,ut,yt,{t:u,fora:et?W:W*r,grade:s.grade,cortina:Ht($t(i.seed+H*7),["#F3E3C0","#D9ECF7","#F7D9E3","#E8F4E0"]),seed:i.seed+(H*3|0),...nt});n.pisoAlto(0,-.5,9.4,12,.125),n.add(D(9.6,.12,12.2,"#C9C2B6",0,.06,-.5,{shadow:!1}));let x=[{c:-3.35,w:.9},{c:-1.2,w:1.4,y0:.95,y1:2.15}],T=[{c:2.75,w:1.3,y0:.95,y1:2.15}],R=[{c:-3.2,w:.85},{c:-1.2,w:.7,y0:1.3,y1:2.1}],F=[{c:2.7,w:1.3,y0:.95,y1:2.15}];b(5.5,-4.7,.8,x,m,y,{t:u}),b(5.5,.8,4.7,T,f,y,{t:u}),b(-6.5,-4.7,.8,R,y,_,{t:u}),b(-6.5,.8,4.7,F,y,E,{t:u}),C(-4.7,1.5,5.5,[{c:3.5,w:1.2,y0:.95,y1:2.15}],y,m,{t:u}),C(-4.7,-3.2,1.5,[{c:-.9,w:1.2,y0:1.05,y1:2.15}],y,v,{t:u}),C(-4.7,-6.5,-3.2,[],y,_,{t:u}),C(4.7,1.5,5.5,[],f,y,{t:u}),C(4.7,-1.8,1.5,[{c:-.6,w:.6,y0:1.45,y1:2.1}],A,y,{t:u}),C(4.7,-6.5,-1.8,[],E,y,{t:u}),ke(n,"frente",c(-3.35),5.5,!0,.9,{t:u,dobra:-r,abre:-1,cor:s.porta,batente:"#F4F1EA"}),ke(n,"fundos",c(-3.2),-6.5,!0,.85,{t:u,dobra:-r,abre:-1,cor:s.porta}),S(-1.2,5.5,!0,1.4,.95,2.15,1),S(2.75,5.5,!0,1.3,.95,2.15,1),S(-1.2,-6.5,!0,.7,1.3,2.1,-1,{grade:null}),S(2.7,-6.5,!0,1.3,.95,2.15,-1),S(-4.7,3.5,!1,1.2,.95,2.15,-1),S(-4.7,-.9,!1,1.2,1.05,2.15,-1),S(4.7,-.6,!1,.6,1.45,2.1,1,{grade:null,cortina:!1}),n.add(D(1.3,.1,.5,"#C9C2B6",c(-3.35),.05,5.85));let w=new Wt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:0});o.acender(w,2),n.add(bt(new Qt(.1,12,8),w,{pos:[c(-2.6),2.25,5.66]}));let L=10+i.seed*7%890,N=new _t(new Xt(.36,.2),Mt(o.tex.letreiroTex(String(L),{w:128,h:72,fundo:"#2E6FB8"})));N.position.set(c(-.4),1.6,10.99+.02),n.add(N);for(let[H,K,et,X]of[[0,5.62,9.6,.04],[0,-6.62,9.6,.04],[-4.82,-.5,.04,12.2],[4.82,-.5,.04,12.2]])n.add(D(et,.45,X,s.faixa,c(H),.3,K,{shadow:!1}));if(l){b(1.5,-4.7,.8,[{c:-2.7,w:2.4,y1:2.35}],v,m),C(.8,1.5,5.5,[],m,f),b(1.5,.8,4.7,[{c:1.5,w:.8}],A,f),C(.8,.3,1.5,[{c:.9,w:.8}],v,A),C(.8,-1.8,.3,[],v,M),C(.8,-3.2,-1.8,[],v,E),C(.8,-6.5,-3.2,[],_,E),b(-3.2,-4.7,.8,[{c:-1,w:.8}],_,v),b(.3,.8,3,[{c:1.85,w:.7}],M,A),C(3,-1.8,.3,[],M,A),b(-1.8,.8,3,[],E,M),b(-1.8,3,4.7,[{c:3.85,w:.8}],E,A);let H={t:d,cor:"#F4F1EA",batente:"#F4F1EA"};ke(n,"quarto1",c(1.5),1.5,!0,.8,{...H,dobra:-r,abre:1}),ke(n,"cozinha",c(.8),.9,!1,.8,{...H,dobra:1,abre:r}),ke(n,"servico",c(-1),-3.2,!0,.8,{...H,dobra:r,abre:-1}),ke(n,"banheiro",c(1.85),.3,!0,.7,{...H,dobra:r,abre:-1}),ke(n,"quarto2",c(3.85),-1.8,!0,.8,{...H,dobra:r,abre:1});let K=o.tex.piso("madeira","#C8935E","#B98450"),et=o.tex.piso("ceramica","#E8E0D2","#D4CABA"),X=o.tex.piso("xadrez","#F4F1EA","#9AB8C8"),ut=(ct,Z,it,ft,St,Gt="#F7F4EE")=>{let st=Math.min(c(ct),c(Z)),dt=Math.max(c(ct),c(Z));jn(n,(st+dt)/2,(it+ft)/2,dt-st,ft-it,Mt(St),.125),Kn(n,(st+dt)/2,(it+ft)/2,dt-st,ft-it,h-.005,Gt)};ut(-4.7,.8,1.5,5.5,K),ut(.8,4.7,1.5,5.5,K),ut(-4.7,.8,-3.2,1.5,et),ut(-4.7,.8,-6.5,-3.2,et),ut(.8,3,-1.8,.3,X),ut(.8,4.7,.3,1.5,K),ut(3,4.7,-1.8,.3,K),ut(.8,4.7,-6.5,-1.8,K);let yt=Mt(sn(Vh(),1,1));((ct,Z,it,ft,St)=>{let Gt=yt.map.clone();Gt.repeat.set(it/.6,ft/.6),Gt.needsUpdate=!0;let st=new _t(new Xt(it,ft),Mt(Gt));st.position.set(c(ct),.125+ft/2+.9,Z),st.rotation.y=St,n.add(st)})(-4.6+.005,-1.5,2.4,.7,r>0?Math.PI/2:-Math.PI/2);let nt=(ct,Z,it,ft)=>{let St=yt.map.clone();St.repeat.set(it/.6,1.6/.6),St.needsUpdate=!0;let Gt=new _t(new Xt(it,1.6),Mt(St));Gt.position.set(c(ct),.125+.8,Z),Gt.rotation.y=ft,n.add(Gt)};nt(1.9,-1.8+.065,2.2,0),nt(.8+.065,-.75,2.1,r>0?Math.PI/2:-Math.PI/2),nt(3-.065,-.75,2.1,r>0?-Math.PI/2:Math.PI/2),zy(n,s,c,r)}else n.add(D(9.2,2.6,11.8,"#3A3540",0,1.4,-.5,{shadow:!1}));let z=e?h*2+.15:h;e&&ky(n,s,c,t),s.telhado==="platibanda"?is(n,0,-.5,9.4,12,z+.02,s.ext):Ka(n,0,-.5,9.4,12,z+.02,{cor:s.telha,duas:s.telhado==="2aguas",parede:s.ext,sombra:!(o.dentro||[]).includes(i.nome),sobe:2.2}),n.ponto("frente",c(-3.35),6.05,Math.PI),n.ponto("portao",c(-.22),11.8,Math.PI),n.ponto("rua",c(-.22),14.5,Math.PI),n.ponto("sala",c(-1),2.6),n.ponto("cozinha",c(-2.6),-2.4),n.ponto("quarto1",c(2.5),3.4),n.ponto("quarto2",c(3.2),-4.2),n.ponto("banheiro",c(1.9),-.5),n.ponto("quintal",c(-.5),-8.6),n.ponto("garagem",c(-.3),8.2)}function _o(n,t,e,i,s,r,o=1){let a=r.map.clone();a.repeat.set(i/o,s/o),a.needsUpdate=!0;let l=Ke(i,s,Mt(a),t,.015,e);n.add(l)}function Hy(n,t,e,i){let s=n.L,r=t.ext,o=t.muro==="tijolo"?Mt(Gh()):null,a=(T,R,F,w,L)=>{let N=Math.abs(R-T)||.15,z=Math.abs(w-F)||.15,H=(T+R)/2,K=(F+w)/2,et=o?Zn(N,L,z,o,H,L/2,K,1.2,{out:.012}):Zn(N,L,z,Bn(r),H,L/2,K,1,{out:.012});n.add(et),n.add(D(N+.04,.06,z+.04,"#E8E4DC",H,L+.03,K,{shadow:!1})),n.col(H,K,N,z,{h:L})},l=s.w/2-.075,c=s.d/2-.075;a(-l,-l,-c,c-.1,2),a(l,l,-c,c-.1,2),a(-l,l,-c,-c,2);let h=c,u=[e(-4.85),e(-1.15)].sort((T,R)=>T-R),d=[e(-.9),e(.45)].sort((T,R)=>T-R),p=[[-l,Math.min(u[0],d[0])],[Math.min(u[1],d[1]),Math.max(u[0],d[0])],[Math.max(u[1],d[1]),l]];for(let[T,R]of p)if(!(R-T<.05)&&(a(T,R,h,h,1),i!=="longe")){let F=Math.max(1,Math.round((R-T)/.13));for(let w=0;w<=F;w++)n.add(D(.025,.95,.025,t.grade,T+(R-T)*w/F,1.5,h,{shadow:!1}));n.add(D(R-T,.04,.04,t.grade,(T+R)/2,1.97,h,{shadow:!1}))}for(let T of[u[0],u[1],d[0],d[1]])n.add(D(.3,2.1,.3,r,T,1.05,h,{out:.012})),n.col(T,h,.3,.3);let g=n.cidade,y=new Y;y.userData.vivo=!0;let m=u[1]-u[0]-.3;y.add(D(m,.06,.05,t.grade,0,.1,0)),y.add(D(m,.06,.05,t.grade,0,1.95,0));for(let T=0;T<=Math.round(m/.12);T++)y.add(D(.03,1.85,.03,t.grade,-m/2+T*m/Math.round(m/.12),1.02,0));y.add(D(m,.5,.02,t.grade,0,.45,0));let f=(u[0]+u[1])/2;y.position.set(f,0,h-.12),n.add(y);let E=(s.nome?s.nome+".":"")+"garagem",v=e(1)>0?1:-1;g.portas[E]={nome:E,aberta:0,auto:!1,abrir(T){this.aberta=T,y.position.x=f+v*Math.max(0,Math.min(1,T))*(m+.1)},lote:s.nome};let _=new Y;_.userData.vivo=!0;let M=d[1]-d[0]-.3,A=e(1)>0?d[0]+.15:d[1]-.15;_.position.set(A,0,h);let b=e(1)>0?1:-1,C=new Y;_.add(C),C.add(D(M,.06,.05,t.grade,b*M/2,.1,0)),C.add(D(M,.06,.05,t.grade,b*M/2,1.95,0));for(let T=0;T<=6;T++)C.add(D(.03,1.85,.03,t.grade,b*T*M/6,1.02,0));n.add(_);let S=(s.nome?s.nome+".":"")+"portao",x={nome:S,aberta:0,auto:!0,abrir(T){this.aberta=T,_.rotation.y=b*Math.max(0,Math.min(1,T))*1.5},mundo:ci(s,(d[0]+d[1])/2,h),lote:s.nome};g.portas[S]=x,n.add(Q(.3,.4,.15,"#E2443A",e(.55),1.3,h+.1,{out:.01}))}function zy(n,t,e,i){let s=n.cidade,r=t.R,o=.125,a=(m,f,E,v=0,_=!0,M=0)=>{m.position.set(e(f),o+M,E),m.rotation.y=i>0?v:-v,n.add(m);let A=m.userData.pe;if(_&&A&&A[0]>0){let b=Math.abs(Math.round(Math.sin(v)))===1;n.col(e(f),E,b?A[1]:A[0],b?A[0]:A[1],{h:1})}return m},l=(m,f,E,v,_)=>(m.position.set(e(f),o+v,E),m.rotation.y=i>0?_:-_,n.add(m),m),c=n.L.tipo==="casaFamilia";a(Qa(2.4,1.8,Ht(r,["#C84E4E","#3E7CC8","#8E6CC4","#D98A3A"]),"#F2C230"),-2.1,3.45,Math.PI/2,!1),a(ja(2.1,t.sofa),-4.15,3.45,Math.PI/2);let u=a(Tr(1.6),.55,3.45,-Math.PI/2).userData.tela;s.vivos.push(m=>wr(u,m,n.L.seed)),a(Mf(1.1,.6),-2.1,3.45,Math.PI/2),a(Ef(Ht(r,["#C84E4E","#F2C230","#5AA84E"])),-1.9,4.95,Math.PI),a(jh(1,1.8,"#9A6236",n.L.seed),-.6,1.75,0),a(ln(1,n.L.seed),.4,5.1),a(ln(1.2,n.L.seed+1),-4.35,1.95),a(xf(),-4.35,4.95),l(Pn(1.2,.7,n.L.seed,"paisagem"),-4.6+.01,3.45,1.55,Math.PI/2),l(Pn(.45,.55,n.L.seed+2,c?"familia":"abstrato"),-4.3,1.56+.01,1.5,0);let p=a(mo(2.68),-2.1,3.45,0,!1).userData.pas;s.vivos.push(m=>{p.rotation.y=m*7}),a(Af(2.4),-4.29,-1.5,Math.PI/2),a(Sf(),-4.29,.05,Math.PI/2),a(Tf(),-4.29,1,Math.PI/2),l(bf(1),-4.43,-2.2,1.85,Math.PI/2),l(wf(),-4.3,-2.45,.92,Math.PI/2),a(tl(1.2,.8,"#B87A4A",4,"#9A6236"),-1.6,-1.1,0),l(ss(s),.8-.07,-1.2,2,-Math.PI/2),a(Ds(s,2.795),-2,-.9,0,!1),a(If(),.45,-5.9,-Math.PI/2),a(Df(),.45,-5,-Math.PI/2),a(tu(Ht(r,["#2FA37A","#E2443A","#3E7CC8"])),-4.45,-4.9,Math.PI/2),a(new Y().add(Q(.5,1.8,.45,"#F4F1EA",0,.9,0,{out:.012})),-4.4,-3.55,Math.PI/2,!1),n.col(e(-4.4),-3.55,.45,.5),a(Ds(s,2.795),-2,-4.9,0,!1),l(Bf(n.L.seed),-4.7+.2,-5,1.45,Math.PI/2),a(Of(),.45,-4.1,0),a(Hf(),-2,-6.15,0),a(Pf(1,1),1.35,-1.25,0),a(Cf(),2.6,-1.4,0),a(el(!0),2.72,-.35,-Math.PI/2),l(Ff(Ht(r,["#F2546E","#3E7CC8","#F2C230"])),2,-1.8+.08,1.5,0),a(Ds(s,2.795),1.9,-.75,0,!1),l(Pn(.5,.6,n.L.seed+4,"abstrato"),4.6-.01,-.75,1.55,-Math.PI/2),a(Ds(s,2.795),3.85,.3,0,!1),a(Qa(1.4,1,"#3E7CC8","#F4F1EA"),2.6,3.6,0,!1),a(Ls(.95,t.cama1,"#9A6236"),4.15,2.6,0),a(go("#9A6236",!0,s),3.3,1.78,0),a(Oi(1.1,"#F4F1EA",!0,n.L.seed),2.6,5.12,Math.PI),a(rs(),2.6,4.45,Math.PI),a(Us(1.6,2.1,"#D9B07A"),1.16,3.5,Math.PI/2),l(Pn(.5,.7,n.L.seed+5,"poster"),4.6-.01,4.3,1.6,-Math.PI/2),l(Pn(.45,.6,n.L.seed+6,"poster"),3.3,1.5+.07,1.75,0),a(Ds(s,2.795),2.75,3.5,0,!1),a(Qa(2,1.4,"#E8DCC8","#C9874E"),2.2,-4.3,Math.PI/2,!1),a(Ls(1.4,t.cama2,"#7A5233"),1.85,-4.3,Math.PI/2),a(go("#7A5233",!0,s),1.05,-5.35,Math.PI/2),a(go("#7A5233",!0,s),1.05,-3.25,Math.PI/2),a(Us(1.8,2.1,"#B87A4A"),4.34,-4.6,-Math.PI/2),a(Rf(1,"#B87A4A"),1.3,-6.18,0),l(Pn(1,.6,n.L.seed+7,c?"familia":"paisagem"),.8+.07,-4.3,1.75,Math.PI/2);let y=a(mo(2.68),2.6,-4.2,0,!1).userData.pas;s.vivos.push(m=>{y.rotation.y=-m*6}),a(Uf(),3.4,-10.45,0),a(nl(Ht(r,["#F4F1EA","#E2443A","#F2C230"]),!0),1.4,-8.6,0),a(Lf(3),-4.95,-8.8,Math.PI/2,!1),n.col(e(-4.95),-7.3,.1,.1),n.col(e(-4.95),-10.3,.1,.1),a(Nf(Ht(r,["#C84E4E","#3E7CC8","#2E9C6A"])),-1.4,-10.4,0),a(Qh(n.L.seed),4.8,-7.1),a(Qh(n.L.seed+3),-3.8,-10.5)}function ky(n,t,e,i){let r=2.9499999999999997,o=i==="perto",a=t.ext,l=o?t.q1:null;n.add(D(9.6,.15,12.2,"#E8E4DC",0,2.8+.075,-.5));let c=(d,p,g,y,m,f)=>{let E=Math.min(e(p),e(g)),v=Math.max(e(p),e(g));Jt(n,E,d,v,d,{y:r,h:2.8,t:.2,corA:m,corB:f,semCol:!0,vaos:y.map(_=>({a:e(_.c)-_.w/2-E,b:e(_.c)+_.w/2-E,y0:_.y0,y1:_.y1}))})},h=(d,p,g,y,m,f)=>{let[E,v]=e(1)>0?[m,f]:[f,m];Jt(n,e(d),p,e(d),g,{y:r,h:2.8,t:.2,corA:E,corB:v,semCol:!0,vaos:y.map(_=>({a:_.c-_.w/2-p,b:_.c+_.w/2-p,y0:_.y0,y1:_.y1}))})},u=(d,p,g,y,m,f,E)=>rn(n,e(d),p,g,y,r+m,r+f,{t:.2,fora:g?E:E*(e(1)>0?1:-1),cortina:"#F3E3C0",seed:n.L.seed+50+d});c(5.5,-4.7,4.7,[{c:-2.2,w:2.2,y0:0,y1:2.2},{c:2.6,w:1.4,y0:.95,y1:2.15}],l,a),c(-6.5,-4.7,4.7,[{c:-2.2,w:1.4,y0:.95,y1:2.15},{c:2.6,w:1.4,y0:.95,y1:2.15}],a,l),h(-4.7,-6.5,5.5,[{c:0,w:1.2,y0:.95,y1:2.15}],a,l),h(4.7,-6.5,5.5,[{c:-3,w:1.2,y0:.95,y1:2.15}],l,a),u(2.6,5.5,!0,1.4,.95,2.15,1),u(-2.2,-6.5,!0,1.4,.95,2.15,-1),u(2.6,-6.5,!0,1.4,.95,2.15,-1),u(-4.7,0,!1,1.2,.95,2.15,-1),u(4.7,-3,!1,1.2,.95,2.15,1),rn(n,e(-2.2),5.5,!0,2.2,r,r+2.2,{t:.2,fora:1,cortina:o?"#F3E3C0":!1,seed:9}),n.add(D(4.2,.15,1.6,"#E8E4DC",e(-2.2),2.8+.075,6.3));for(let d=0;d<=14;d++)n.add(D(.03,1,.03,t.grade,e(-4.3+d*.3),r+.5,7.05,{shadow:!1}));if(n.add(D(4.2,.05,.06,t.grade,e(-2.2),r+1.02,7.05,{shadow:!1})),n.add(j(.09,.09,2.8,"#E8E4DC",e(-4.15),2.8/2,6.95,{seg:10})),n.add(j(.09,.09,2.8,"#E8E4DC",e(-.25),2.8/2,6.95,{seg:10})),o){let d=n.cidade,p=t.R,g=(y,m,f,E=0)=>{y.position.set(e(m),r+.01,f),y.rotation.y=e(1)>0?E:-E,n.add(y)};jn(n,0,-.5,9.2,11.8,Mt(d.tex.piso("madeira","#B98450","#A8763F")),r+.005),Kn(n,0,-.5,9.2,11.8,r+2.8-.01),Jt(n,e(-4.7),0,e(4.7),0,{y:r,h:2.8,t:.12,corA:l,corB:l,semCol:!0,vaos:[{a:4.2,b:5}]}),g(Ls(1.4,Ht(p,["#C84E4E","#3E7CC8","#8E6CC4"])),2.6,1.9,0),g(go("#7A5233",!0,d),1.6,1),g(Us(1.6),-.4,.35,0),g(Oi(1.2,"#F4F1EA",!0,n.L.seed+1),-3.4,-6.1,0),g(rs(),-3.4,-5.4,Math.PI),g(jh(1.2,1.8,"#9A6236",n.L.seed+9),-4.35,-2.5,Math.PI/2),g(Ls(.95,Ht(p,["#2E9C6A","#F2C230"])),3.9,-4.8,0),g(ja(1.6,t.sofa),-.8,4.7,Math.PI),g(Ds(d,2.8-.01),0,3)}else n.add(D(9.2,2.6,11.8,"#3A3540",0,r+1.3,-.5,{shadow:!1}))}var ru=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F08A2C","#8E6CC4","#F2546E","#4FB8A0","#F4F1EA","#2A2A30"];function pn(n=2,t=2,e=.45,i=0,s="misto",r="#F4F1EA"){let o=new Y,a=$t(i*7+3);o.userData.pe=[n,e],o.add(D(n,t,.04,r,0,t/2,-e/2+.02));for(let c of[-1,1])o.add(D(.04,t,e,r,c*(n/2-.02),t/2,0,{out:.01}));let l=Math.max(3,Math.round(t/.45));for(let c=0;c<l;c++){let h=.08+c*(t-.1)/l;o.add(D(n-.06,.03,e,r,0,h,0,{out:.006}));let u=-n/2+.07,d=(t-.1)/l-.06;for(;u<n/2-.12;){let p=s==="misto"?Ht(a,["caixa","lata","garrafa","caixa"]):s,g=Ht(a,ru);if(p==="caixa"){let y=.1+a()*.12,m=Math.min(d,.14+a()*.18);o.add(D(y,m,e*.7,g,u+y/2,h+.015+m/2,0)),u+=y+.01}else if(p==="lata"){let y=.045+a()*.03,m=Math.min(d,.12+a()*.1);for(let f=0;f<2;f++)o.add(j(y,y,m,g,u+y,h+.015+m/2,-e*.2+f*e*.4,{seg:10}));u+=y*2+.01}else if(p==="garrafa"){let m=Math.min(d-.05,.22+a()*.08);o.add(j(.04,.04,m,g,u+.04,h+.015+m/2,0,{seg:8})),o.add(j(.015,.03,.07,g,u+.04,h+.015+m+.035,0,{seg:8})),u+=.04*2+.015}else if(p==="pao"){let y=.16+a()*.06,m=bt(new Qt(1,10,6),Ht(a,["#D99A4E","#C98A3E","#E8B060"]),{out:.006});m.scale.set(y/2,.055,.09),m.position.set(u+y/2,h+.07,(a()-.5)*.1),o.add(m),u+=y+.02}else if(p==="remedio"){let y=.06+a()*.05,m=Math.min(d,.08+a()*.07);o.add(D(y,m,.1,Ht(a,["#F4F1EA","#E2443A","#3E7CC8","#5AA84E","#F2C230","#F2546E"]),u+y/2,h+.015+m/2,e/2-.1)),u+=y+.008}else p==="tinta"?(o.add(j(.12,.12,.26,g,u+.12,h+.145,0,{seg:12,out:.006})),o.add(j(.12*.95,.12*.95,.01,"#C9CED6",u+.12,h+.28,0,{seg:12})),u+=.12*2+.03):u+=.1}}return o}function On(n=2.4,t="#B87A4A",e="#F4F1EA",i=!1){let s=new Y;if(s.userData.pe=[n,.7],s.add(Q(n,.95,.65,t,0,.475,0,{out:.012,r:.02})),s.add(D(n+.06,.05,.72,e,0,.97,0,{out:.01})),i){let r=new Wt({color:"#CFE6F2",transparent:!0,opacity:.3,depthWrite:!1,side:me});s.add(bt(new le(n-.1,.42,.5),r,{pos:[0,1.21,0],shadow:!1})),s.add(D(n-.1,.02,.5,"#C9CED6",0,1.42,0))}return s}function ki(){let n=new Y;return n.add(Q(.4,.12,.36,"#2A2A30",0,.06,0,{out:.01})),n.add(Q(.32,.2,.04,"#2A2A30",0,.25,-.08,{out:.01,rot:[-.3,0,0]})),n.add(D(.26,.14,.01,"#5AA84E",0,.25,-.055).rotateX(-.3)),n.add(Q(.3,.02,.14,"#9AA0A8",0,.13,.08)),n}function iu(n="#E2443A"){let t=new Y;return t.userData.pe=[.4,.4],t.add(j(.2,.2,.08,n,0,.76,0,{out:.01,seg:16})),t.add(j(.03,.03,.72,"#9AA0A8",0,.36,0,{seg:8})),t.add(j(.18,.2,.03,"#9AA0A8",0,.015,0,{seg:14})),t.add(bt(new qn(.15,.012,6,16),"#9AA0A8",{pos:[0,.28,0],rot:[Math.PI/2,0,0]})),t}function os(n="#E2443A",t=0){let e=new Y,i=$t(t+4);e.userData.pe=[.75,.7],e.add(Q(.75,2,.7,n,0,1,0,{out:.014,r:.03})),e.add(D(.62,1.5,.02,"#2A3A48",0,1,.35));for(let r=0;r<5;r++)for(let o=0;o<6;o++)e.add(j(.035,.035,.2,Ht(i,["#E2443A","#F2C230","#5AA84E","#3E7CC8","#F08A2C","#2A2A30"]),-.25+o*.1,.4+r*.29,.3,{seg:8,shadow:!1}));let s=new _t(new Xt(.62,1.5),new Wt({color:"#CFE6F2",transparent:!0,opacity:.25,depthWrite:!1}));return s.position.set(0,1,.362),e.add(s),e.add(D(.7,.3,.02,"#FFFFFF",0,1.88,.352)),e}function sl(n="#F2C230",t=0){let e=nl(n,!1);return e.userData.pe=[2,2],e}function su(n=1.6,t=0){let e=new Y,i=$t(t+11);e.userData.pe=[n,.55];for(let s of[-1,1])e.add(j(.02,.02,1.5,"#9AA0A8",s*n/2,.75,0,{seg:6})),e.add(D(.04,.03,.5,"#9AA0A8",s*n/2,.02,0));e.add(D(n,.025,.025,"#9AA0A8",0,1.5,0));for(let s=-n/2+.1;s<n/2-.05;s+=.11){let r=Ht(i,ru);e.add(Q(.07,.7,.45,r,s,1.1,0,{r:.02}))}return e}function Vf(n="#E2443A"){let t=new Y;return t.userData.pe=[.5,.5],t.add(j(.2,.2,.03,"#2A2A30",0,.015,0)),t.add(j(.02,.02,.8,"#9AA0A8",0,.4,0,{seg:6})),t.add(Q(.4,.6,.22,n,0,1.1,0,{out:.01,r:.08})),t.add(_e(.12,"#F4F1EA",0,1.55,0,{out:.01})),t}function Gy(n=4,t=0){let e=new Y;e.userData.pe=[n,1];let i=pn(n,1.7,.45,t,"misto");i.position.z=.26;let s=pn(n,1.7,.45,t+50,"misto");return s.rotation.y=Math.PI,s.position.z=-.26,e.add(i,s),e.add(D(n,.3,.3,"#F2C230",0,1.95,0)),e}function Vy(n=0){let t=new Y;return t.userData.pe=[.9,2.4],t.add(Q(.8,.9,2.2,"#F4F1EA",0,.45,0,{out:.012})),t.add(D(.6,.02,1.4,"#2A2A30",0,.91,.3)),t.add(ki().translateX(0).translateY(.92).translateZ(-.7)),t.add(j(.03,.03,1.4,"#9AA0A8",.35,1.6,-.9,{seg:6})),t.add(Q(.3,.3,.05,"#E2443A",.35,2.3,-.9,{out:.01})),t}function Wy(){let n=new Y;n.userData.pe=[.55,.9];let t="#C9CED6";n.add(D(.5,.4,.75,t,0,.7,0,{out:.01})),n.add(D(.46,.36,.71,"#E2443A",0,.7,0)),n.add(D(.5,.03,.03,"#E2443A",0,1,-.45));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(D(.03,.5,.03,t,e*.22,.25,i*.3)),n.add(j(.05,.05,.04,"#2A2A30",e*.22,.05,i*.3,{rot:[0,0,Math.PI/2],seg:10}));return n}function Xy(n=0){let t=new Y,e=$t(n+31);t.userData.pe=[1.6,.9],t.add(Q(1.6,.7,.9,"#9A6236",0,.35,0,{out:.012}));let i=D(1.6,.05,.9,"#7A5233",0,.72,0);i.rotation.x=.25,t.add(i);for(let s=0;s<4;s++){let r=["#E2443A","#F2C230","#5AA84E","#F08A2C"][s];for(let o=0;o<12;o++)t.add(_e(.06,r,-.6+s*.4+(e()-.5)*.25,.82+o%3*.04-o/12*.1,-.3+o/12*.6,{seg:8}))}return t}function qy(){let n=new Y;n.userData.pe=[.8,.7],n.add(Q(.75,1.6,.65,"#E8E4DC",0,.8,0,{out:.012})),n.add(D(.65,.25,.02,"#2E6FB8",0,1.5,.33));let t=new _t(new Xt(.36,.26),new Le({color:"#7FB2E8"}));return t.position.set(0,1.18,.335),t.rotation.x=-.2,n.add(t),n.add(D(.3,.12,.2,"#9AA0A8",0,.98,.38)),n.add(D(.2,.02,.02,"#2A2A30",0,.82,.33)),n}function as(n=4,t="#3E7CC8"){let e=new Y;e.userData.pe=[n*.55,.6],e.add(D(n*.55,.04,.05,"#8D949C",0,.3,0));for(let i of[-1,1])e.add(D(.04,.3,.4,"#8D949C",i*(n*.55/2-.1),.15,0));for(let i=0;i<n;i++){let s=-n*.55/2+.275+i*.55;e.add(Q(.48,.06,.44,t,s,.46,0,{out:.01})),e.add(Q(.48,.44,.06,t,s,.72,-.2,{out:.01,rot:[-.1,0,0]})),e.add(D(.04,.16,.04,"#8D949C",s,.37,0))}return e}function yo(n,t=0){let e=new Y;e.add(Q(.8,.4,.08,"#2A2A30",0,0,0,{out:.01}));let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d"),r=new Qi(i);r.colorSpace=Qe;let o=new _t(new Xt(.7,.32),new Le({map:r}));o.position.z=.045,o.userData.vivo=!0,e.add(o);let a=-1;return n.vivos.push(l=>{let c=120+Math.floor((l+t)/9)%80;c!==a&&(a=c,s.fillStyle="#100808",s.fillRect(0,0,256,128),s.fillStyle="#FF5A3A",s.font="900 34px Inter, Arial",s.textAlign="center",s.fillText("SENHA",128,40),s.font="900 64px Inter, Arial",s.fillText("A"+c,128,108),r.needsUpdate=!0)}),e}function Yy(){let n=new Y;n.userData.pe=[2.4,1.4],n.add(Q(2.3,.25,1.3,"#7A5233",0,.7,0,{out:.014})),n.add(D(2,.02,1,"#2E8A4A",0,.83,0));for(let[i,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(D(.14,.6,.14,"#7A5233",i*1,.3,s*.5));let t=$t(5);for(let i=0;i<9;i++)n.add(_e(.03,Ht(t,ru),-.3+i%3*.07+(t()-.5)*.3,.87,-.2+Math.floor(i/3)*.07,{seg:8}));n.add(_e(.03,"#FFFFFF",.6,.87,0,{seg:8}));let e=j(.012,.02,1.4,"#D9B07A",.2,.9,.3,{seg:6});return e.rotation.z=Math.PI/2-.05,n.add(e),n}function zi(n,t,e,i="#2A2A30"){let s=ce(512,Math.round(512*t/n),(r,o,a)=>{r.fillStyle=i,r.fillRect(0,0,o,a),r.strokeStyle="#F2C230",r.lineWidth=8,r.strokeRect(10,10,o-20,a-20),r.fillStyle="#FFFFFF",r.textBaseline="middle";let l=(a-60)/e.length;e.forEach(([c,h],u)=>{r.font=`700 ${Math.min(40,l*.5)}px Inter, Arial`,r.textAlign="left",r.fillText(c,30,40+l*(u+.5)),r.textAlign="right",r.fillStyle="#F2C230",r.fillText(h,o-30,40+l*(u+.5)),r.fillStyle="#FFFFFF"})});return new _t(new Xt(n,t),new Le({map:s}))}var Zy={padaria:{nome:"PADARIA P\xC3O DA SERRA",sub:"p\xE3es \u2022 doces \u2022 caf\xE9",fundo:"#C9874E",toldo:["#C84E4E","#F4F1EA"],ext:"#F2E2C4",int:"#FFF3DC",piso:["xadrez","#F4F1EA","#C84E4E"]},farmacia:{nome:"DROGARIA SERRANA",sub:"aberta 24 horas",fundo:"#2E9C6A",toldo:["#2E9C6A","#F4F1EA"],ext:"#F4F1EA",int:"#F4FAF6",piso:["ceramica","#F4F1EA","#DDE6E0"]},loterica:{nome:"LOT\xC9RICA TREVO DA SORTE",sub:"jogos \u2022 contas",fundo:"#2E6FB8",toldo:["#F2C230","#2E6FB8"],ext:"#DDE8F2",int:"#F2F6FA",piso:["ceramica","#EDEAE2","#D6D0C4"]},lanchonete:{nome:"LANCHONETE DO Z\xC9",sub:"x-tudo \u2022 pastel \u2022 suco",fundo:"#E2443A",toldo:["#F2C230","#E2443A"],ext:"#F6E7A6",int:"#FFF6E0",piso:["xadrez","#F4F1EA","#2A2A30"]},banco:{nome:"BANCO DA SERRA",sub:"ag\xEAncia 0412",fundo:"#1F4E86",toldo:null,ext:"#DDE3EA",int:"#F2F4F7",piso:["granilite","#E4E2DC","#8D949C"]},mercado:{nome:"SUPERMERCADO BOM PRE\xC7O",sub:"ofertas todo dia",fundo:"#E2443A",toldo:["#E2443A","#F2C230"],ext:"#F4F1EA",int:"#F7F6F2",piso:["ceramica","#EDEAE2","#D6D0C4"]},sorveteria:{nome:"SORVETERIA GELATO",sub:"a\xE7a\xED \u2022 picol\xE9 \u2022 sorvete",fundo:"#F2546E",toldo:["#F2546E","#F4F1EA"],ext:"#F7E3EC",int:"#FFF4F8",piso:["xadrez","#F4F1EA","#8FD3F2"]},lojaRoupas:{nome:"BOUTIQUE ESTILO",sub:"moda feminina e masculina",fundo:"#8E6CC4",toldo:["#8E6CC4","#F4F1EA"],ext:"#EDE3F7",int:"#FBF8FF",piso:["madeira","#D9B07A","#C8935E"]},bar:{nome:"BAR DO TONHO",sub:"futebol \u2022 petisco \u2022 sinuca",fundo:"#2E7A5A",toldo:["#2E7A5A","#F2C230"],ext:"#CFE3D2",int:"#F2F0E4",piso:["ceramica","#C9874E","#B5703E"]},lojaMateriais:{nome:"MATERIAIS S\xC3O JOS\xC9",sub:"constru\xE7\xE3o \u2022 tintas \u2022 ferragens",fundo:"#F08A2C",toldo:["#F08A2C","#2A2A30"],ext:"#F2D8A8",int:"#F4EEE2",piso:["granilite","#D6D0C4","#8D949C"]}};function Wf(n){return(t,e)=>{let i=Zy[n],s=t.L,r=t.cidade,o=e==="perto",a=s.w-.3,l=$t(s.seed+3),c=-2,h=s.d/2-.1,u=h-c,d=4,p=(c+h)/2,g=-a/2,y=a/2,m=i.ext,f=o?i.int:null,E=Mt(sn($n("#CFC9BF","#C4BDB2"),s.w,s.d/2+c));t.add(Ke(s.w,s.d/2+c,E,0,.015,(-s.d/2+c)/2));for(let[x,T,R,F]of[[-s.w/2+.075,-s.w/2+.075,-s.d/2,c],[s.w/2-.075,s.w/2-.075,-s.d/2,c],[-s.w/2,s.w/2,-s.d/2+.075,-s.d/2+.075]]){let w=Math.abs(T-x)||.15,L=Math.abs(F-R)||.15;t.add(Zn(w,2.2,L,Bn(m),(x+T)/2,1.1,(R+F)/2,1,{out:.012})),t.col((x+T)/2,(R+F)/2,w,L,{h:2.2})}if(e!=="longe")for(let x=0;x<4;x++)t.add(Q(.6,.5+x%2*.3,.6,Ht(l,["#9A6236","#C9874E","#7A8696"]),-s.w/2+1+x*.75,.3,-s.d/2+.8,{out:.01}));let v=["farmacia","loterica","lanchonete","sorveteria","lojaRoupas","bar"].includes(n)&&s.seed%2===0;Jt(t,g,c,g,h,{h:d,t:.2,corA:m,corB:f}),Jt(t,y,c,y,h,{h:d,t:.2,corA:f,corB:m});let _=n==="mercado"?5:n==="banco"?2:3.4,M=n==="mercado"?0:g+1.2+_/2;Jt(t,g,c,y,c,{h:d,t:.2,corA:m,corB:f,vaos:o?[{a:a-1.6,b:a-.8}]:[]});let A=n==="banco"?[]:[{a:M+_/2-g+.6,b:a-.5,y0:.6,y1:2.8}];n==="mercado"&&(A.length=0,A.push({a:.5,b:a/2-3,y0:.6,y1:2.8},{a:a/2+3,b:a-.5,y0:.6,y1:2.8}));let b=[{a:M-_/2-g,b:M+_/2-g,y0:0,y1:3},...A];n==="banco"&&b.push({a:.6,b:M-_/2-g-.6,y0:.4,y1:3.2},{a:M+_/2-g+.6,b:a-.6,y0:.4,y1:3.2}),Jt(t,g,h,y,h,{h:d,t:.2,corA:f,corB:m,vaos:b,rodape:o?"#E8E4DC":null,semRodape:m});for(let x of b.slice(1))rn(t,g+(x.a+x.b)/2,h,!0,x.b-x.a,x.y0,x.y1,{t:.2,fora:1,cortina:!1,moldura:"#2A2A30",seed:s.seed});if(o&&ke(t,"fundos",y-1.2,c,!0,.8,{t:.2,dobra:1,abre:-1,cor:"#8D949C"}),n==="banco")ke(t,"entrada1",M-.5,h,!0,1,{t:.2,tipo:"vidro",cor:"#C9CED6",dobra:-1,abre:-1}),ke(t,"entrada2",M+.5,h,!0,1,{t:.2,tipo:"vidro",cor:"#C9CED6",dobra:1,abre:-1});else{t.add(Q(_+.2,.45,.35,"#8D949C",M,3.25,h+.12,{out:.012}));for(let x=0;x<3;x++)t.add(D(_,.04,.02,"#6E747C",M,3.08+x*.1,h+.3))}let C=new _t(new Xt(a-.6,1),new Wt({map:ye(i.nome,{fundo:i.fundo,sub:i.sub,w:1024,h:180,borda:"#FFFFFF"}),emissive:"#FFFFFF",emissiveMap:ye(i.nome,{fundo:i.fundo,sub:i.sub,w:1024,h:180,borda:"#FFFFFF"}),emissiveIntensity:0}));if(C.position.set(0,4.05,h+.115),C.scale.y=.9,t.add(C),r.acender(C.material,.9),t.add(D(a-.4,1,.1,"#2A2A30",0,4.05,h+.06,{shadow:!1})),i.toldo){let x=$y(a-.6,i.toldo);x.position.set(0,3,h+.1),t.add(x)}if(n==="farmacia"){let x=new Y,T=new Wt({color:"#2EBF6A",emissive:"#2EBF6A",emissiveIntensity:.2});x.add(bt(new le(.7,.22,.1),T)),x.add(bt(new le(.22,.7,.1),T)),x.position.set(y-.2,3,h+.6),x.rotation.y=Math.PI/2,t.add(x),t.add(D(.06,.06,.5,"#8D949C",y-.2,3,h+.3)),r.vivos.push(R=>{T.emissiveIntensity=.2+(r.n||0)*1.4*(Math.sin(R*3)>0?1:.4)})}if(v){let x=d;Jt(t,g,c,g,h,{y:x,h:2.8,t:.2,corA:m,corB:"#3A3540",semCol:!0}),Jt(t,y,c,y,h,{y:x,h:2.8,t:.2,corA:"#3A3540",corB:m,semCol:!0}),Jt(t,g,c,y,c,{y:x,h:2.8,t:.2,corA:m,corB:"#3A3540",semCol:!0}),Jt(t,g,h,y,h,{y:x,h:2.8,t:.2,corA:"#3A3540",corB:m,semCol:!0,vaos:[{a:1.2,b:2.6,y0:.9,y1:2.2},{a:a-2.6,b:a-1.2,y0:.9,y1:2.2}]}),rn(t,g+1.9,h,!0,1.4,x+.9,x+2.2,{t:.2,fora:1,seed:s.seed+1,cortina:"#F7D9E3",duplo:!1}),rn(t,y-1.9,h,!0,1.4,x+.9,x+2.2,{t:.2,fora:1,seed:s.seed+2}),t.add(D(a-.2,2.6,u-.4,"#3A3540",0,x+1.4,p,{shadow:!1}));for(let T of[-1,1])t.add(D(1.6,.1,.5,"#E8E4DC",T*(a/2-1.9),x+.85,h+.3))}let S=v?d+2.8:d;if(t.add(D(a+.1,.15,u+.2,"#C9C2B6",0,S+.07,p)),is(t,0,p,a,u,S,m,{alt:v?.9:1}),o){jn(t,0,p,a-.2,u-.2,Mt(r.tex.piso(...i.piso)),.02),Kn(t,0,p,a-.2,u-.2,d-.01);for(let x of[[-a/4,p-2],[a/4,p-2],[-a/4,p+3],[a/4,p+3]]){let T=new Wt({color:"#FFFFFF",emissive:"#F4F8FF",emissiveIntensity:.5});t.add(bt(new le(1.2,.05,.25),T,{pos:[x[0],d-.04,x[1]],shadow:!1}))}}else t.add(D(a-.4,d-.4,u-.4,"#3A3540",0,d/2,p,{shadow:!1}));o&&Ky[n]?.(t,{W:a,z0:c,z1:h,H:d,R:l,C:r,pc:M,portaW:_});for(let[x,T,R,F]of Jy[n]?.({W:a,z0:c,z1:h})||[])t.figurante(x,T,R,F||{});t.ponto("entrada",M,h+1.2,Math.PI),t.pontoLivre("dentro",[[M,h-1.2],[M,h-2.2],[M+1,h-1.2],[M-1,h-1.5],[0,h-1.2],[0,h-3]],Math.PI)}}function $y(n,[t,e]){let i=ce(512,128,a=>{for(let l=0;l<16;l++)a.fillStyle=l%2?e:t,a.fillRect(l*32,0,32,128);a.fillStyle="rgba(0,0,0,.12)",a.fillRect(0,110,512,18)});i.wrapS=Sn,i.repeat.set(n/4,1);let s=new Y,r=new _t(new Xt(n,1.3),Mt(i));r.material.side=me,r.rotation.x=-Math.PI/2+.5,r.position.set(0,-.3,.55),r.castShadow=!0,s.add(r);let o=new _t(new Xt(n,.25),Mt(i));return o.material.side=me,o.position.set(0,-.75,1.12),s.add(o),s}var Ns=n=>({sentado:!0,assento:n}),Jy={padaria:({z0:n,z1:t})=>[[.5,n+3.3,0],[-1.8+.65,t-2.6,-Math.PI/2,Ns(.8)],[1.5,n+5.4,Math.PI]],farmacia:({z0:n})=>[[0,n+1.6,0],[.4,n+3.4,Math.PI]],loterica:({z0:n})=>[[-2.5,n+2.2,0],[2.5,n+2.2,0],[0,n+4.3,Math.PI],[0,n+5.3,Math.PI]],lanchonete:({z0:n})=>[[-.3,n+2.2,0],[-1.3,n+3.75,Math.PI,Ns(.8)],[.7,n+3.75,Math.PI,Ns(.8)]],banco:({W:n,z0:t,z1:e})=>[[-1,t+1.6,0],[3,t+1.6,0],[.6-1.1,(t+e)/2+.85,Math.PI,Ns(.49)],[.6+.55,(t+e)/2+2.25,Math.PI,Ns(.49)],[1,t+3.3,Math.PI]],mercado:({W:n,z1:t})=>[[-n/2+2.8,t-3.2,-Math.PI/2],[-n/2+5,t-3.2,-Math.PI/2],[-n/2+3.5,t-2.2,Math.PI],[4,t-6,Math.PI/2]],bar:({z0:n,z1:t})=>[[-.4,n+2,0],[-1,n+3.55,Math.PI,Ns(.8)],[.1,n+3.55,Math.PI,Ns(.8)],[2.6,t-4.2,-Math.PI/2]],sorveteria:({z0:n})=>[[0,n+2.2,0],[.6,n+4.2,Math.PI]],lojaRoupas:({W:n,z0:t})=>[[n/2-1.6,t+1.7,0],[-1,t+5,Math.PI/2]],lojaMateriais:({z0:n})=>[[0,n+2.2,0],[.8,n+4,Math.PI]]},Ct=(n,t,e,i,s=0,r=!0)=>{t.position.set(e,.02,i),t.rotation.y=s,n.add(t);let o=t.userData.pe;if(r&&o){let a=Math.abs(Math.round(Math.sin(s)))===1;n.col(e,i,a?o[1]:o[0],a?o[0]:o[1],{h:1.2})}return t},we=(n,t,e,i,s,r=0)=>(t.position.set(e,i,s),t.rotation.y=r,n.add(t),t),Ky={padaria(n,{W:t,z0:e,z1:i,R:s,C:r}){Ct(n,On(4.2,"#B87A4A","#F4F1EA",!0),.5,e+4.2,0),we(n,ki(),2.2,1,e+4.2,0);for(let c=0;c<4;c++)for(let h=0;h<6;h++){let u=_e(.08,Ht(s,["#F2546E","#F2C230","#8E5A3A","#F4F1EA"]),-.9+h*.35,1.08,e+4.2+(c-1.5)*.1,{seg:8});n.add(u)}Ct(n,pn(4.6,2.2,.45,1,"pao","#C9874E"),.2,e+.35,0),Ct(n,os("#E2443A",1),-t/2+.5,e+6.5,Math.PI/2);let o=new Y;o.add(Q(.6,.5,.45,"#C9CED6",0,.25,0,{out:.01})),o.add(j(.05,.05,.12,"#2A2A30",-.1,.12,.2,{seg:8})),we(n,o,-1.4,1,e+4.2);for(let c=0;c<2;c++){let h=new Y;h.userData.pe=[.7,.7],h.add(j(.35,.35,.04,"#F4F1EA",0,1.05,0,{out:.01})),h.add(j(.04,.04,1.05,"#8D949C",0,.52,0,{seg:8})),Ct(n,h,-1.8+c*3.2,i-2.6);for(let u of[-1,1])Ct(n,iu("#C84E4E"),-1.8+c*3.2+u*.65,i-2.6,0)}we(n,zi(2.2,1.2,[["P\xE3o franc\xEAs","R$ 0,90"],["Caf\xE9 com leite","R$ 5,00"],["P\xE3o de queijo","R$ 4,50"],["Bolo (fatia)","R$ 7,00"],["Coxinha","R$ 6,00"]]),2.6,2.6,e+.12),Ct(n,pn(2.4,1.5,.8,5,"misto","#C9874E"),t/2-.5,e+7,-Math.PI/2);let a=new Y;a.userData.pe=[1.6,1],a.add(Q(1.6,.9,1,"#B87A4A",0,.45,0,{out:.012}));for(let c=0;c<3;c++)a.add(j(.22,.24,.14,Ht(s,["#8E5A3A","#F2C230","#F4F1EA"]),-.5+c*.5,.97,0,{out:.01})),a.add(j(.27,.27,.02,"#F4F1EA",-.5+c*.5,.91,0));Ct(n,a,-t/2+1.1,e+7.6);let l=new Y;l.add(Q(1.4,1.6,.8,"#8D949C",0,.8,0,{out:.012})),l.add(D(1,.6,.02,"#2A2A30",0,1,.41)),Ct(n,Object.assign(l,{userData:{pe:[1.4,.8]}}),t/2-1,e+.6)},farmacia(n,{W:t,z0:e,z1:i}){Ct(n,pn(t-2.6,2.2,.4,20,"remedio"),-.8,e+.3,0),Ct(n,pn(6,2,.4,24,"remedio"),-t/2+.3,(e+i)/2-1,Math.PI/2),Ct(n,pn(6,2,.4,25,"misto"),t/2-.3,(e+i)/2-1,-Math.PI/2),Ct(n,On(3.2,"#2E9C6A","#F4F1EA"),0,e+2.4,0),we(n,ki(),1.1,1,e+2.4),Ct(n,pn(1.6,1.4,.5,26,"misto"),0,(e+i)/2+2,0);let s=new Y;s.userData.pe=[.6,.6],s.add(D(.5,.08,.5,"#F4F1EA",0,.04,0,{out:.01})),s.add(j(.03,.03,1.1,"#C9CED6",0,.6,-.2,{seg:8})),s.add(Q(.3,.3,.1,"#2E9C6A",0,1.2,-.2,{out:.01})),Ct(n,s,t/2-1,i-1.5)},loterica(n,{W:t,z0:e,z1:i,C:s,R:r}){Ct(n,On(t-.6,"#2E6FB8","#F4F1EA",!1),0,e+3,0);let o=new Wt({color:"#CFE6F2",transparent:!0,opacity:.3,depthWrite:!1,side:me});n.add(bt(new Xt(t-.6,1.4),o,{pos:[0,1.7,e+3.2],shadow:!1}));for(let l=0;l<3;l++)we(n,Q(.5,.3,.02,"#F2C230",0,0,0,{out:.006}),-2.5+l*2.5,2.6,e+3.25),we(n,ki(),-2.5+l*2.5,.99,e+2.9,Math.PI);we(n,yo(s,3),0,3.1,e+3.25),we(n,zi(2.6,1,[["MEGA DA SERRA","R$ 5,00"],["QUINA","R$ 2,50"],["LOTOF\xC1CIL","R$ 3,00"]],"#1F4E86"),-t/2+.12,2.2,(e+i)/2+2,Math.PI/2);let a=new Y;a.userData.pe=[2.2,.6],a.add(D(2.2,.05,.5,"#F4F1EA",0,1.05,0,{out:.01})),a.add(D(2.1,1,.05,"#2E6FB8",0,.52,0)),Ct(n,a,t/2-1.4,(e+i)/2+2.5,-Math.PI/2),Ct(n,as(4,"#2E6FB8"),-t/2+.5,(e+i)/2+1,Math.PI/2),we(n,zi(1.6,1,[["ACUMULOU!",""],["R$ 45 MILH\xD5ES",""]],"#2E9C6A"),t/2-.12,2.4,(e+i)/2-1.2,-Math.PI/2),Ct(n,ln(1.2,6),t/2-.6,i-.7),we(n,ss(s,.25),0,3.4,e+3.26)},lanchonete(n,{W:t,z0:e,z1:i,C:s,R:r}){Ct(n,On(5,"#E2443A","#F4F1EA"),-.3,e+3,0);for(let l=0;l<5;l++)Ct(n,iu("#F2C230"),-2.3+l*1,e+3.75,0,!1);let o=new Y;o.add(D(1.4,.9,.7,"#8D949C",0,.45,0,{out:.012})),o.add(D(1.3,.04,.6,"#2A2A30",0,.92,0));for(let l=0;l<3;l++)o.add(j(.1,.1,.05,"#8E5A3A",-.4+l*.4,.96,0,{seg:12}));Ct(n,Object.assign(o,{userData:{pe:[1.4,.7]}}),-1.2,e+.5),Ct(n,os("#E2443A",2),1.4,e+.45),Ct(n,os("#2E6FB8",3),2.3,e+.45),we(n,zi(3,1.3,[["X-TUDO","R$ 22"],["X-SALADA","R$ 18"],["PASTEL","R$ 9"],["SUCO NATURAL","R$ 8"],["REFRIGERANTE","R$ 6"]],"#2A2A30"),-.6,2.6,e+.12);for(let l=0;l<2;l++)Ct(n,sl(Ht(r,["#E2443A","#F2C230"]),l),-1.8+l*3.6,i-2.4,0);let a=jy(s,-1.2,1.4,e+.5);n.add(a)},banco(n,{W:t,z0:e,z1:i,C:s}){for(let c=0;c<3;c++)Ct(n,qy(),-t/2+1+c*1,i-2.2,Math.PI/2*0+Math.PI);Ct(n,On(t-4,"#1F4E86","#E8E4DC"),1.2,e+2.4,0);let r=new Wt({color:"#CFE6F2",transparent:!0,opacity:.3,depthWrite:!1,side:me});n.add(bt(new Xt(t-4,1),r,{pos:[1.2,1.5,e+2.3],shadow:!1}));for(let c=0;c<3;c++)we(n,ki(),-1+c*2,.99,e+2.1,Math.PI);we(n,yo(s,7),t/2-1.5,3,e+.12),Ct(n,as(5,"#1F4E86"),.6,(e+i)/2+.8,Math.PI),Ct(n,as(5,"#1F4E86"),.6,(e+i)/2+2.2,Math.PI),Ct(n,ln(1.4,3),t/2-.6,i-.8),Ct(n,ln(1.4,4),-t/2+.6,e+.6),we(n,zi(2.4,.5,[["ATENDIMENTO 10h \xE0s 16h",""]],"#1F4E86"),-2,2.9,e+.12);let o=new _t(new Xt(3.2,1.1),Mt(ye("BANCO DA SERRA",{fundo:"#1F4E86",sub:"seu dinheiro em boas m\xE3os",w:1024,h:340,borda:"#F2C230"})));o.position.set(-t/2+.12,2.6,(e+i)/2-.5),o.rotation.y=Math.PI/2,n.add(o),we(n,Pn(1.6,1,21,"paisagem"),t/2-.12,2.2,(e+i)/2-.5,-Math.PI/2);for(let c=0;c<2;c++){let h=new Y;h.add(j(.18,.2,.04,"#9AA0A8",0,.02,0)),h.add(j(.03,.03,1,"#9AA0A8",0,.5,0,{seg:8})),h.add(_e(.05,"#9AA0A8",0,1.02,0)),we(n,h,-1.6+c*3.6,.02,e+4.2)}let a=D(3.6,.05,.02,"#E2443A",.2,.95,e+4.2);n.add(a),Ct(n,ln(1.3,9),-t/2+.6,(e+i)/2+3),Ct(n,ln(1.3,10),t/2-.6,e+.6);let l=Oi(1.4,"#7A5233",!0,2);l.userData.pe=[1.4,.6],Ct(n,l,t/2-1.3,(e+i)/2-1.5,-Math.PI/2),Ct(n,rs(),t/2-.55,(e+i)/2-1.5,-Math.PI/2,!1),Ct(n,Rr("#1F4E86"),t/2-2.3,(e+i)/2-1.2,Math.PI/2,!1)},mercado(n,{W:t,z0:e,z1:i,R:s}){for(let o=0;o<4;o++)Ct(n,Gy(6,o*9),-t/2+3.5+o*3.6,(e+i)/2-1.5,Math.PI/2);Ct(n,pn(t-1.6,2,.45,77,"garrafa"),0,e+.35,0);for(let o=0;o<3;o++)Ct(n,Vy(o),-t/2+2+o*2.2,i-3,0);for(let o=0;o<3;o++)Ct(n,Xy(o),t/2-1.2,i-2.5-o*1.4,-Math.PI/2);for(let o=0;o<4;o++)Ct(n,Wy(),t/2-3.2+o%2*.2,i-1-o*.05,Math.PI/2*(o%2),!1);let r=new Y;r.userData.pe=[3,.9],r.add(Q(3,.85,.9,"#F4F1EA",0,.43,0,{out:.012})),r.add(D(2.8,.02,.8,"#8FD3F2",0,.86,0)),Ct(n,r,3,e+1.6);for(let[o,a]of[[-t/2+3.5,"MERCEARIA"],[-t/2+7.1,"BEBIDAS"],[-t/2+10.7,"LIMPEZA"],[-t/2+14.3,"HIGIENE"]]){let l=new _t(new Xt(1.6,.4),new Le({map:ye(a,{fundo:"#E2443A",w:384,h:96}),side:me}));l.position.set(o,3.1,(e+i)/2-1.5),l.rotation.y=Math.PI/2,n.add(l),n.add(D(.02,.9,.02,"#8D949C",o,3.6,(e+i)/2-1.5))}},sorveteria(n,{W:t,z0:e,z1:i,R:s}){let r=new Y;r.userData.pe=[4,.9],r.add(Q(4,.95,.85,"#F4F1EA",0,.48,0,{out:.012}));let o=new Wt({color:"#CFE6F2",transparent:!0,opacity:.35,depthWrite:!1});r.add(bt(new le(3.8,.35,.7),o,{pos:[0,1.15,0],shadow:!1}));for(let c=0;c<12;c++)r.add(j(.12,.12,.1,Ht(s,["#F2546E","#F2C230","#8E5A3A","#F4F1EA","#5AA84E","#8E6CC4","#8FD3F2"]),-1.65+c%6*.66,1,-.15+Math.floor(c/6)*.3,{seg:12}));Ct(n,r,0,e+3),Ct(n,os("#F2546E",5),-t/2+.5,e+.5,Math.PI/2),we(n,zi(2.6,1.2,[["1 BOLA","R$ 8"],["2 BOLAS","R$ 14"],["A\xC7A\xCD 500ml","R$ 20"],["PICOL\xC9","R$ 5"]],"#F2546E"),0,2.6,e+.12);for(let c=0;c<2;c++)Ct(n,sl(Ht(s,["#F2546E","#8FD3F2"]),c),-1.8+c*3.6,i-2.4,0);Ct(n,sl("#8FD3F2",3),-2.4,e+6.6,0);let a=new Y;a.userData.pe=[1.4,.8],a.add(Q(1.4,.85,.8,"#F4F1EA",0,.43,0,{out:.012})),a.add(Xe(1.2,.35,Mt(ye("PICOL\xC9",{fundo:"#8FD3F2",cor:"#F2546E"})),0,.55,.41));for(let c=0;c<10;c++)a.add(Q(.08,.2,.03,Ht(s,["#F2546E","#F2C230","#8E5A3A","#5AA84E"]),-.5+c*.11,.95,0,{r:.03}));Ct(n,a,t/2-.7,e+6.2,-Math.PI/2),we(n,Pn(1,1.3,51,"abstrato"),-t/2+.12,2,e+6,Math.PI/2),Ct(n,ln(1.2,4),t/2-.6,i-.7);let l=new Y;l.add(bt(new nn(.35,1,12),"#D9B07A",{pos:[0,.5,0],rot:[Math.PI,0,0],out:.014})),l.add(_e(.38,"#F2546E",0,1.15,0,{out:.014})),l.add(_e(.15,"#E2443A",0,1.55,0,{out:.01})),we(n,l,-t/2+.8,2.4,i-.7)},lojaRoupas(n,{W:t,z0:e,z1:i,R:s}){Ct(n,su(2.2,1),-t/2+.8,(e+i)/2-2,Math.PI/2),Ct(n,su(2.2,2),-t/2+.8,(e+i)/2+1.5,Math.PI/2),Ct(n,su(1.6,3),1.2,(e+i)/2,0),Ct(n,pn(4,2.2,.45,40,"caixa"),0,e+.35,0),Ct(n,On(2,"#8E6CC4","#F4F1EA"),t/2-1.6,e+2.5,0),Ct(n,Vf("#F2546E"),1.2,i-1),Ct(n,Vf("#3E7CC8"),2.4,i-1);let r=new Y;r.userData.pe=[1.2,1.2],r.add(D(1.2,2.2,.05,"#8E6CC4",0,1.1,-.6,{out:.01})),r.add(D(.05,2.2,1.2,"#8E6CC4",-.6,1.1,0,{out:.01}));let o=Q(1.1,1.9,.03,"#F2C230",0,1.15,.6,{r:.01});r.add(o),Ct(n,r,t/2-.7,(e+i)/2+1);let a=new _t(new Xt(.7,1.6),new Wt({color:"#CFE6F2",emissive:"#9CC9E8",emissiveIntensity:.3}));a.position.set(t/2-.12,1.2,(e+i)/2-2),a.rotation.y=-Math.PI/2,n.add(a)},bar(n,{W:t,z0:e,z1:i,C:s,R:r}){Ct(n,On(4.6,"#7A5233","#3A3A44"),-.4,e+2.8,0);for(let l=0;l<4;l++)Ct(n,iu("#2E7A5A"),-2.1+l*1.1,e+3.55,0,!1);Ct(n,pn(4,2,.35,60,"garrafa","#7A5233"),-.4,e+.3,0),Ct(n,os("#E2443A",9),t/2-.6,e+.5);let o=Tr(.01),a=o.userData.tela;o.children.slice(0,3).forEach(l=>l.visible=!1),we(n,o,-t/2+.2,1.6,e+5,Math.PI/2),s.vivos.push(l=>wr(a,l,3)),Ct(n,Yy(),1.2,i-4.2,0),Ct(n,sl("#F2C230",1),-2.4,i-2,0),we(n,zi(2,1,[["CERVEJA","R$ 10"],["POR\xC7\xC3O FRITAS","R$ 25"],["REFRI","R$ 6"]],"#2E7A5A"),t/2-.12,2.4,i-3,-Math.PI/2)},lojaMateriais(n,{W:t,z0:e,z1:i}){Ct(n,pn(t-1.6,2.4,.5,80,"tinta","#8D949C"),0,e+.35,0),Ct(n,pn(6,2.4,.5,81,"tinta","#8D949C"),-t/2+.35,(e+i)/2,Math.PI/2);for(let s=0;s<6;s++){let r=Q(.6,.15,.4,"#B9B3AA",0,0,0,{out:.008});we(n,r,t/2-1.2,.1+s*.15,i-2.5)}n.col(t/2-1.2,i-2.5,.7,.5);for(let s=0;s<4;s++)for(let r=0;r<3;r++)we(n,D(.2,.1,.1,"#B5603E",0,0,0),t/2-2.6+r*.22,.06+s*.1,i-4);n.col(t/2-2.4,i-4,.8,.3),Ct(n,On(2.4,"#F08A2C","#F4F1EA"),0,e+3,0),we(n,ki(),.7,1,e+3);for(let s=0;s<5;s++){let r=j(.04,.04,3,"#F4F1EA",0,0,0,{seg:8});r.rotation.z=Math.PI/2,we(n,r,0,.3+s*.09,i-6)}n.col(0,i-6,3,.3)}};function jy(n,t,e,i){let s=new Y;s.position.set(t,e,i),s.userData.vivo=!0;let r=new Le({color:"#FFFFFF",transparent:!0,opacity:.25,depthWrite:!1}),o=[];for(let a=0;a<6;a++){let l=new _t(new Qt(.12,8,6),r);s.add(l),o.push(l)}return n.vivos.push(a=>o.forEach((l,c)=>{let h=(a*.5+c/6)%1;l.position.set(Math.sin(a+c)*.08,h*1,Math.cos(a*.7+c)*.05),l.scale.setScalar(.6+h*1.3)})),s}function Xf(n,t){let e=n.L,i=n.cidade,s=e.w-.4,r=-7,o=e.d/2-2.5,a=7.6,l=(r+o)/2,c=t==="perto",h="#F2EBDD",u=c?"#F7F2E6":null;n.add(Ke(e.w,e.d,Mt(sn(i.tex.ondas(),e.w/2,e.d/2)),0,.015,0));for(let f=0;f<4;f++)n.add(D(s*.5,.15,.4,"#E8E4DC",0,.075+f*.15,o+1.6-f*.4,{out:.01}));n.col(-s*.25-.3,o+1,.3,1.5),n.col(s*.25+.3,o+1,.3,1.5),Jt(n,-s/2,r,-s/2,o,{h:a,t:.3,corA:h,corB:u}),Jt(n,s/2,r,s/2,o,{h:a,t:.3,corA:u,corB:h}),Jt(n,-s/2,r,s/2,r,{h:a,t:.3,corA:h,corB:u});let d=[];for(let f=0;f<6;f++){let E=-s/2+1.8+f*(s-3.6)/5;Math.abs(E)<2||d.push({c:E,y0:1,y1:3},{c:E,y0:4.6,y1:6.6})}Jt(n,-s/2,o,s/2,o,{h:a,t:.3,corA:u,corB:h,vaos:[{a:s/2-1.2,b:s/2+1.2,y0:0,y1:3.2},...d.map(f=>({a:f.c-.6+s/2,b:f.c+.6+s/2,y0:f.y0,y1:f.y1}))]});for(let f of d)rn(n,f.c,o,!0,1.2,f.y0,f.y1,{t:.3,fora:1,cortina:"#F3E3C0",seed:f.c*3|0,moldura:"#E8E4DC"});ke(n,"entrada1",-.6,o,!0,1.2,{t:.3,h:3.2,dobra:-1,abre:-1,cor:"#7A5233"}),ke(n,"entrada2",.6,o,!0,1.2,{t:.3,h:3.2,dobra:1,abre:-1,cor:"#7A5233"});for(let f=0;f<6;f++){let E=-s/2+1.5+f*(s-3)/5;n.add(j(.32,.36,a-.2,"#F4F1EA",E,(a-.2)/2+.6,o+1.3,{out:.014,seg:16})),n.col(E,o+1.3,.7,.7,{h:a})}n.add(D(s+.6,.6,2.6,"#F4F1EA",0,a+.3,o+.3,{out:.014}));let p=new wn;p.moveTo(-s/2-.3,0),p.lineTo(s/2+.3,0),p.lineTo(0,2),p.lineTo(-s/2-.3,0);let g=bt(new _r(p,{depth:.4,bevelEnabled:!1}),"#F4F1EA",{pos:[0,a+.6,o+1.2],out:.014});n.add(g);let y=ye("PREFEITURA MUNICIPAL DE PEDRA ALTA",{fundo:"#F4F1EA",cor:"#7A5233",w:1024,h:96,peso:900});n.add(Xe(s*.8,.5,Mt(y),0,a+.3,o+1.62));let m=new _t(new En(.6,24),Mt(ce(128,128,f=>{f.fillStyle="#2E6FB8",f.beginPath(),f.arc(64,64,62,0,7),f.fill(),f.fillStyle="#F2C230",f.beginPath(),f.moveTo(64,14),f.lineTo(112,100),f.lineTo(16,100),f.fill(),f.fillStyle="#9E9A94",f.beginPath(),f.moveTo(64,40),f.lineTo(92,96),f.lineTo(36,96),f.fill()})));m.position.set(0,a+1.25,o+1.61),n.add(m),n.add(D(s+.2,.2,Qy(r,o)+.2,"#C9C2B6",0,a+.1,l)),is(n,0,l,s,o-r,a,h,{alt:.6});for(let f=0;f<3;f++){let E=-9.5+f*2.6,v=e.d/2-.8;n.add(j(.05,.06,8,"#C9CED6",E,4,v,{seg:8})),n.col(E,v,.2,.2);let _=[["#2E9C4A","#F2C230","#2E6FB8"],["#E2443A","#F4F1EA","#2A2A30"],["#2E6FB8","#F4F1EA","#F2C230"]][f],M=ce(128,80,S=>{S.fillStyle=_[0],S.fillRect(0,0,128,80),S.fillStyle=_[1],S.beginPath(),S.moveTo(64,8),S.lineTo(120,40),S.lineTo(64,72),S.lineTo(8,40),S.fill(),S.fillStyle=_[2],S.beginPath(),S.arc(64,40,18,0,7),S.fill()}),A=new Xt(1.5,.95,12,1),b=new _t(A,new Wt({map:M,side:me}));b.userData.vivo=!0,b.position.set(E+.78,7.4,v),n.add(b);let C=A.attributes.position.array.slice();i.vivos.push(S=>{let x=A.attributes.position;for(let T=0;T<x.count;T++){let R=(C[T*3]+.75)/1.5;x.setZ(T,Math.sin(S*4+R*5+f)*.12*R)}x.needsUpdate=!0,A.computeVertexNormals()})}c?(jn(n,0,l,s-.3,o-r-.3,Mt(i.tex.piso("granilite","#E8E0D2","#8D949C")),.02),Kn(n,0,l,s-.3,o-r-.3,3.6),Ct(n,On(4,"#7A5233","#F4F1EA"),0,r+3,0),Ct(n,as(5,"#7A5233"),-4,o-3,Math.PI),Ct(n,as(5,"#7A5233"),4,o-3,Math.PI),we(n,Pn(1.4,1,3,"paisagem"),0,2.4,r+.17),Ct(n,ln(1.5,1),-s/2+.8,o-.8),Ct(n,ln(1.5,2),s/2-.8,o-.8),we(n,yo(i,12),3,2.6,r+.17)):n.add(D(s-.6,a-.4,o-r-.6,"#3A3540",0,a/2,l,{shadow:!1})),n.ponto("entrada",0,o+3,Math.PI),n.ponto("escadaria",0,o+1.8,Math.PI)}var Qy=(n,t)=>t-n;var fe=(n,t,e,i,s=0,r=!0,o=.02)=>{t.position.set(e,o,i),t.rotation.y=s,n.add(t);let a=t.userData.pe;if(r&&a&&a[0]){let l=Math.abs(Math.round(Math.sin(s)))===1;n.col(e,i,l?a[1]:a[0],l?a[0]:a[1],{h:1.2})}return t},Hn=(n,t,e,i,s,r,o=1,a=.015)=>{let l=t.clone();l.wrapS=l.wrapT=Sn,l.repeat.set(s/o,r/o),l.needsUpdate=!0,n.add(Ke(s,r,Mt(l),e,a,i))};function rl(n="#2E7A5A"){let t=new Y;t.userData.pe=[1.8,.7];for(let e of[-1,1])t.add(D(.08,.45,.55,"#3A3D44",e*.75,.225,0)),t.add(D(.08,.5,.06,"#3A3D44",e*.75,.7,-.26));for(let e=0;e<3;e++)t.add(Q(1.8,.05,.14,n,0,.47,-.18+e*.17,{out:.008,r:.015}));for(let e=0;e<2;e++)t.add(Q(1.8,.12,.04,n,0,.68+e*.17,-.28,{out:.008,r:.015}));return t}function tv(n="#2E9C6A"){let t=new Y;return t.userData.pe=[.45,.45],t.add(j(.2,.17,.75,n,0,.45,0,{out:.01,seg:14})),t.add(j(.04,.04,.45,"#3A3D44",0,.22,0,{seg:8})),t.add(j(.21,.21,.04,"#3A3D44",0,.84,0,{seg:14})),t}function ev(n){let t=new Y;t.userData.pe=[.3,.3],t.add(j(.07,.11,3.6,"#2A2C30",0,1.8,0,{out:.01,seg:10})),t.add(j(.18,.14,.2,"#2A2C30",0,3.65,0,{seg:10}));let e=new Wt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:0});return n.acender(e,2),t.add(bt(new $e(.2,.14,.5,8),e,{pos:[0,4,0],out:.01})),t.add(bt(new nn(.3,.25,8),"#2A2C30",{pos:[0,4.38,0],out:.01})),n.postes.push([0,4,0]),t.userData.luz=!0,t}function Yf(){let n=new Y;return n.userData.pe=[.4,.4],n.add(Q(.35,1,.35,"#C9CED6",0,.5,0,{out:.01})),n.add(j(.15,.12,.1,"#E8E4DC",0,1.05,0,{seg:12})),n}function Zf(n,t){let e=n.cidade,i=22,s=t==="perto",r=$t(42);Hn(n,Oh(),0,0,44,44,2);let o=Bi("#7CC05C");for(let[F,w]of[[-12.5,12.5],[12.5,12.5],[-12.5,-1],[12.5,-1]]){let N=w>5?14:8;n.add(D(14+.3,.2,N+.3,"#C9C2B6",F,.1,w)),Hn(n,o,F,w,14,N,3,.205)}let a=[[-15,16,"ipeRoxo"],[-9,9,"mangueira"],[15,16,"ipeAmarelo"],[9,9,"comum"],[-16,7,"quaresmeira"],[16,7,"ipeRoxo"],[-14,-1,"comum"],[14,-1,"mangueira"],[-9,18,"comum"],[9,18,"ipeRoxo"]];for(let[F,w,L]of a){let N=Jn(L,1.2,F*3+w);N.position.set(F,.2,w),n.add(N),n.col(F,w,.7,.7,{h:4})}for(let F of[-20,-16,-12,-8])for(let w of[-1,1]){let L=Jn("palmeira",1.25,F*w);L.position.set(w*10.5,0,F),n.add(L),n.col(w*10.5,F,.5,.5,{h:5})}for(let[F,w]of[[-12.5,13],[12.5,13]]){let L=$a(5,2.2,F);L.position.set(F,.2,w),n.add(L),n.col(F,w,5,2.2,{h:.5})}for(let[F,w,L]of[[-3,6,Math.PI/2],[3,6,-Math.PI/2],[-3,18,Math.PI/2],[3,18,-Math.PI/2],[-7,4,Math.PI],[7,4,Math.PI],[-7,20.5,0],[7,20.5,0],[-19,4,Math.PI],[19,4,Math.PI]])fe(n,rl(),F,w,L);for(let[F,w]of[[-3,3.5],[3,3.5],[-3,21],[3,21],[-20,4.2],[20,4.2]])fe(n,tv(),F,w);for(let[F,w]of[[-3.2,0],[3.2,0],[-3.2,10],[3.2,10],[-3.2,20],[3.2,20],[-10,4.2],[10,4.2],[-20,6],[20,6]]){let L=ev(e),N=e.postes.pop();fe(n,L,F,w,0,!0,0);let z=nv(n,F,w);e.postes.push([z[0],4.4,z[1]])}let l=new Y;l.position.set(0,0,11);let c=3.6;l.add(j(c+.2,c+.3,.9,"#E8E4DC",0,.45,0,{seg:8,out:.014})),l.add(j(c+.25,c+.25,.06,"#C9C2B6",0,.93,0,{seg:8}));for(let F=0;F<3;F++)l.add(D(2,.3,.5,"#E8E4DC",0,.15+F*.3-0,c+.9-F*.45,{out:.01}));for(let F=0;F<8;F++){let w=F/8*Math.PI*2+Math.PI/8;if(l.add(j(.1,.12,3,"#F4F1EA",Math.cos(w)*c,2.4,Math.sin(w)*c,{seg:10,out:.012})),F!==1&&F!==2){let L=D(2*c*Math.sin(Math.PI/8)-.2,.08,.06,"#F4F1EA",Math.cos(w+Math.PI/8)*c*.93,1.8,Math.sin(w+Math.PI/8)*c*.93);L.rotation.y=-(w+Math.PI/8)+Math.PI/2,l.add(L);for(let N=-3;N<=3;N++){let z=D(.04,.8,.04,"#F4F1EA",Math.cos(w+Math.PI/8)*c*.93+Math.cos(w+Math.PI/8+Math.PI/2)*N*.35,1.35,Math.sin(w+Math.PI/8)*c*.93+Math.sin(w+Math.PI/8+Math.PI/2)*N*.35);l.add(z)}}}let h=bt(new nn(c+.9,2.2,8),"#C84E4E",{pos:[0,5,0],rot:[0,Math.PI/8,0],out:.02});l.add(h),l.add(j(.05,.05,.9,"#F2C230",0,6.5,0,{seg:6})),l.add(_e(.15,"#F2C230",0,7,0)),l.add(j(c+.3,c+.3,.15,"#F4F1EA",0,3.9,0,{seg:8,out:.012})),n.add(l),n.col(0,11,6.5,6.5,{h:.9,nome:"coreto"});let u=new Y;u.position.set(0,0,1.5),u.add(j(2.3,2.4,.6,"#E8E4DC",0,.3,0,{seg:24,out:.014}));let d=new _t(new En(2.1,24),Mt(sn(e.tex.agua(),2,2)));d.rotation.x=-Math.PI/2,d.position.y=.5,d.userData.vivo=!0,u.add(d),u.add(j(.3,.4,1.4,"#E8E4DC",0,.9,0,{seg:12,out:.012})),u.add(j(.9,.5,.25,"#E8E4DC",0,1.65,0,{seg:16,out:.012}));let p=new Wt({color:"#BFE6F7",transparent:!0,opacity:.7,emissive:"#8FD3F2",emissiveIntensity:.2}),g=new Y;g.userData.vivo=!0,u.add(g);let y=[];for(let F=0;F<14;F++){let w=new _t(new Qt(.07,6,4),p);g.add(w),y.push(w)}g.add(bt(new $e(.05,.08,.9,8),p,{pos:[0,2.2,0],shadow:!1})),n.add(u),n.col(0,1.5,4.8,4.8,{h:.6,nome:"fonte"}),e.vivos.push(F=>{d.material.map.offset.set(F*.03,F*.02),y.forEach((w,L)=>{let N=(F*.9+L/14)%1,z=L/14*Math.PI*2;w.position.set(Math.cos(z)*N*.9,2.6+N*.5-N*N*1.7,Math.sin(z)*N*.9)})});let m=new Y;m.position.set(-14,.2,12.5),Hn(n,Hh(),-14,12.5,7,5,2,.21);let f=new Y;f.add(D(.06,2,.06,"#E2443A",-.4,1,-.5)),f.add(D(.06,2,.06,"#E2443A",.4,1,-.5)),f.add(D(.9,.06,.9,"#F2C230",0,1.6,-.5));let E=D(.7,.05,2.6,"#3E7CC8",0,.85,.8);E.rotation.x=.62,f.add(E);for(let F=0;F<5;F++)f.add(D(.8,.04,.04,"#E2443A",0,.3+F*.3,-1));f.position.set(-2,0,0),m.add(f);let v=new Y;v.position.set(1.8,0,0);for(let F of[-1,1]){let w=D(.08,2.4,.08,"#2E9C6A",F*1.3,1.15,0);w.rotation.z=F*.12,v.add(w)}v.add(D(2.8,.08,.08,"#2E9C6A",0,2.35,0));let _=[];for(let F of[-1,1]){let w=new Y;w.position.set(F*.6,2.35,0),w.userData.vivo=!0,w.add(D(.02,1.8,.02,"#9AA0A8",-.2,-.9,0)),w.add(D(.02,1.8,.02,"#9AA0A8",.2,-.9,0)),w.add(Q(.5,.05,.25,"#F2C230",0,-1.8,0,{out:.008})),v.add(w),_.push(w)}m.add(v);let M=new Y;M.position.set(-.2,0,2),M.add(D(.2,.4,.2,"#F2C230",0,.2,0));let A=D(3,.08,.25,"#E2443A",0,.45,0);M.add(A),m.add(M),e.vivos.push(F=>{_.forEach((w,L)=>w.rotation.x=Math.sin(F*2.1+L*1.3)*(L?.35:.15)),A.rotation.z=Math.sin(F*1.4)*.18}),n.add(m),n.col(-16,12.5,2,3),n.col(-12.2,12.5,3,.6);let b=new Y;b.position.set(17,.2,19.5),b.add(Q(3.2,2.4,2.2,"#2E6FB8",0,1.2,0,{out:.014})),b.add(D(3.5,.1,2.6,"#1F4E86",0,2.45,0));let C=new _t(new Xt(2.8,.5),Mt(ye("BANCA DO JO\xC3O",{fundo:"#F2C230",cor:"#1F4E86"})));C.position.set(0,2.1,1.11),b.add(C);for(let F=0;F<12;F++)b.add(D(.22,.3,.02,Ht(r,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E","#F4F1EA"]),-1.3+F%6*.5,1+Math.floor(F/6)*.42,1.115));b.add(D(1,.9,.02,"#2A2A30",0,.55,1.111)),n.add(b),n.col(17,19.5,3.2,2.2,{h:2.4});let S=new Y;S.position.set(5.5,.02,20.5),S.userData.pe=[1.4,.8],S.add(Q(1.2,.9,.7,"#E2443A",0,.75,0,{out:.012}));let x=new Wt({color:"#FFF6D8",transparent:!0,opacity:.5});S.add(bt(new le(1,.6,.6),x,{pos:[0,1.5,0]}));for(let F=0;F<24;F++)S.add(_e(.05,"#FFF6D8",(r()-.5)*.8,1.25+r()*.25,(r()-.5)*.4,{seg:6,shadow:!1}));S.add(D(1.3,.06,.8,"#F2C230",0,1.85,0));for(let F of[-1,1])S.add(j(.25,.25,.05,"#2A2A30",F*.5,.25,.37,{rot:[Math.PI/2,0,0]}));let T=new _t(new Xt(1.1,.3),Mt(ye("PIPOCA",{fundo:"#F2C230",cor:"#E2443A"})));T.position.set(0,1,.36),S.add(T),fe(n,S,5.5,20.5,0),fe(n,Yf(),-5,21);let R=[];for(let F=0;F<8;F++){let w=new Y;w.userData.vivo=!0,w.add(_e(.12,"#8D94A8",0,.12,0,{seg:8,out:.008})),w.add(_e(.07,"#6E7488",.1,.22,0,{seg:8})),w.add(bt(new nn(.025,.06,6),"#F08A2C",{pos:[.17,.21,0],rot:[0,0,-Math.PI/2]})),w.children[0].scale.set(1.3,.9,.9),n.add(w),R.push(w)}e.vivos.push(F=>R.forEach((w,L)=>{let N=L*1.7+Math.floor(F/3+L)*.9,z=3.4+L%3*.5,H=Math.max(0,Math.sin(F*9+L*2))*.06;w.position.set(Math.cos(N)*z+Math.sin(F*.3+L)*.3,.02+H*.3,1.5+Math.sin(N)*z),w.rotation.y=-N+Math.sin(F*2+L)*.8,w.rotation.z=-H*2}));for(let[F,w,L]of[[-3+.05,6.4,Math.PI/2],[3-.05,18,-Math.PI/2],[-7.3,20.6,0],[7,4.05,Math.PI]])n.figurante(F,w,L,{sentado:!0,assento:.5});n.figurante(17,21.6,Math.PI),n.figurante(4.3,20.5,Math.PI/2),iv(n,t),n.ponto("coreto",0,15.5,0),n.ponto("fonte",0,5,0),n.ponto("banco1",-2.2,6,Math.PI/2),n.ponto("banca",17,21.5,0),n.ponto("parquinho",-14,15.5,0),n.ponto("igrejaFrente",0,-2,Math.PI),n.ponto("centro",0,6.5,0)}var nv=(n,t,e)=>{let i=n.L;return[i.x+t,i.z+e]};function iv(n,t){let e=n.cidade,i=t==="perto",s=12,r=-21,o=-5,a=8.5,l="#F4EEDC",c=i?"#FBF6EA":null;for(let _=0;_<4;_++)n.add(D(7,.15,.5,"#E8E4DC",0,.075+_*.15,o+1.7-_*.45,{out:.008}));let h=[];for(let _=0;_<4;_++)h.push({a:2.5+_*3.4,b:3.7+_*3.4,y0:2.6,y1:6.2});Jt(n,-s/2,r,-s/2,o,{h:a,t:.4,corA:l,corB:c,vaos:h}),Jt(n,s/2,r,s/2,o,{h:a,t:.4,corA:c,corB:l,vaos:h}),Jt(n,-s/2,r,s/2,r,{h:a,t:.4,corA:l,corB:c}),Jt(n,-s/2,o,s/2,o,{h:a,t:.4,corA:c,corB:l,vaos:[{a:s/2-1.3,b:s/2+1.3,y0:0,y1:3.8}]});let u=_=>ce(128,256,M=>{let A=$t(_);M.fillStyle="#2A2A30",M.fillRect(0,0,128,256);for(let b=0;b<14;b++)for(let C=0;C<6;C++)M.fillStyle=Ht(A,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#8E6CC4","#F08A2C"]),M.fillRect(6+C*20,6+b*18,17,15);M.fillStyle="#F4F1EA",M.beginPath(),M.arc(64,70,26,0,7),M.fill()});for(let _ of[-1,1])for(let M of h){let A=r+(M.a+M.b)/2,b=new Wt({map:u(A*_*7|0),emissive:"#FFFFFF",emissiveMap:u(A*_*7|0),emissiveIntensity:.35,side:me}),C=new _t(new Xt(1.2,3.6),b);C.position.set(_*s/2,4.4,A),C.rotation.y=Math.PI/2,n.add(C),n.add(D(.5,.1,1.4,"#E8E4DC",_*s/2,2.55,A))}let d=new _t(new En(.85,24),new Wt({map:u(99),emissive:"#FFFFFF",emissiveMap:u(99),emissiveIntensity:.35,side:me}));d.position.set(0,5.8,o+.21),n.add(d);let p=d.clone();p.position.z=o-.21,n.add(p),n.add(bt(new qn(.88,.08,8,28),"#E8DCC0",{pos:[0,5.8,o+.22]})),ke(n,"portaA",-.65,o,!0,1.3,{t:.4,h:3.8,dobra:-1,abre:-1,cor:"#7A3A20",aberta:.9,auto:!1}),ke(n,"portaB",.65,o,!0,1.3,{t:.4,h:3.8,dobra:1,abre:-1,cor:"#7A3A20",aberta:.9,auto:!1}),n.add(j(1.3,1.3,.4,l,0,3.8,o,{rot:[Math.PI/2,0,0],seg:20})),Ka(n,0,(r+o)/2,s,o-r,a,{cor:"#B8573A",duas:!0,parede:l,beiral:.5,sobe:3.2});let g=new wn;g.moveTo(-s/2-.3,0),g.lineTo(s/2+.3,0),g.lineTo(s/2+.3,1.2),g.quadraticCurveTo(s/4,1.6,2,3),g.lineTo(-2,3),g.quadraticCurveTo(-s/4,1.6,-s/2-.3,1.2),g.lineTo(-s/2-.3,0),n.add(bt(new _r(g,{depth:.5,bevelEnabled:!1}),Bn(l),{pos:[0,a,o-.25],out:.016}));for(let _ of[-1,1])n.add(D(.7,a+1.2,.7,"#E8DCC0",_*(s/2+.05),(a+1.2)/2,o+.1,{out:.014})),n.add(_e(.4,"#E8DCC0",_*(s/2+.05),a+1.6,o+.1,{out:.012})),n.col(_*(s/2+.05),o+.1,.7,.7,{h:a});let y=new Y;y.position.set(0,a+3,o-.2),y.add(Zn(3.4,5,3.4,Bn(l),0,2.5,0,1,{out:.016})),y.add(D(3.8,.3,3.8,"#E8DCC0",0,5.1,0,{out:.012}));for(let[_,M,A]of[[0,1.71,0],[0,-1.71,0],[1.71,0,Math.PI/2],[-1.71,0,Math.PI/2]]){let b=D(A?.05:1.4,2,A?1.4:.05,"#2A2A30",_,3.6,M);y.add(b)}let m=bt(new $e(.25,.55,.8,16,1,!0),"#C9A23A",{out:.012,pos:[0,3.5,0]});m.material=m.material.clone(),m.material.side=me;let f=new Y;f.position.set(0,4.2,0),m.position.set(0,-.6,0),f.add(m),f.userData.vivo=!0,y.add(f),e.vivos.push(_=>{let A=(e.h||12)%1<.02?1:0;f.rotation.z=Math.sin(_*5)*.4*A}),y.add(bt(new nn(2.7,4.2,4),"#B8573A",{pos:[0,7.35,0],rot:[0,Math.PI/4,0],out:.016}));let E=new Y;E.position.set(0,10.2,0),E.add(D(.12,1.4,.12,"#C9A23A")),E.add(D(.8,.12,.12,"#C9A23A",0,.25,0)),y.add(E);let v=ss(e,.85);if(v.position.set(0,1.6,1.73),y.add(v),n.add(y),i){jn(n,0,(r+o)/2,s-.4,o-r-.4,Mt(e.tex.piso("xadrez","#F4F1EA","#B5603E")),.02),Kn(n,0,(r+o)/2,s-.4,o-r-.4,a-.02,"#F4EEDC"),Hn(n,e.tex.piso("ceramica","#B83A3A","#A03030"),0,(r+o)/2+1,1.6,o-r-4,1,.03);for(let M=0;M<7;M++)for(let A of[-1,1]){let b=new Y;b.userData.pe=[3.6,.7],b.add(Q(3.6,.08,.45,"#8E5A3A",0,.46,0,{out:.01})),b.add(Q(3.6,.5,.06,"#8E5A3A",0,.82,-.22,{out:.01}));for(let C of[-1,0,1])b.add(D(.06,.46,.45,"#7A4A2E",C*1.75,.23,0));b.add(D(3.5,.06,.2,"#7A4A2E",0,.2,.3)),fe(n,b,A*2.9,o-3.5-M*1.35,0)}for(let[M,A,b]of[[-1,1,-.8],[1,2,.6],[-1,4,.3],[1,5,-1]])n.figurante(M*2.9+b,o-3.5-A*1.35+.02,Math.PI,{sentado:!0,assento:.5});n.add(D(s-.4,.45,3.2,"#E8E4DC",0,.225,r+1.8,{out:.01})),n.col(0,r+1.8,s-.4,3.2,{h:.45});for(let M=0;M<2;M++)n.add(D(3,.15,.4,"#E8E4DC",0,.075+M*.15,r+3.6-M*.3));n.add(Q(2.4,.95,.9,"#F4F1EA",0,.45+.48,r+2,{out:.012})),n.add(D(2.5,.02,.95,"#C9A23A",0,1.42,r+2));for(let M of[-1,1]){n.add(j(.05,.07,.5,"#C9A23A",M*.9,1.68,r+2,{seg:8}));let A=new Wt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:.6});n.add(bt(new Qt(.04,8,6),A,{pos:[M*.9,1.98,r+2]}))}let _=new Y;_.position.set(0,4.2,r+.3),_.add(D(.25,3.2,.15,"#7A4A2E",0,0,0,{out:.012})),_.add(D(1.7,.25,.15,"#7A4A2E",0,.8,0,{out:.012})),n.add(_);for(let M of[-1,1]){let A=new Y;A.position.set(M*4,.45,r+.8),A.add(j(.3,.35,1,"#E8E4DC",0,.5,0,{out:.01})),A.add(Q(.4,1,.3,M>0?"#3E7CC8":"#8E5A3A",0,1.5,0,{out:.01,r:.12})),A.add(_e(.15,"#E8B48C",0,2.15,0,{out:.01})),n.add(A)}for(let M=0;M<3;M++){let A=new Y;A.position.set(0,a-.02,r+4+M*4.5),A.add(j(.01,.01,1.8,"#2A2A30",0,-.9,0,{seg:4})),A.add(j(.5,.3,.25,"#C9A23A",0,-1.9,0,{out:.01,seg:12}));let b=new Wt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:.5});for(let C=0;C<6;C++){let S=C/6*Math.PI*2;A.add(bt(new Qt(.06,8,6),b,{pos:[Math.cos(S)*.45,-1.72,Math.sin(S)*.45]}))}n.add(A)}}else n.add(D(s-.8,a-.3,o-r-.8,"#3A3540",0,a/2,(r+o)/2,{shadow:!1}));n.ponto("igrejaDentro",0,o-1.5,Math.PI),n.ponto("altar",0,r+4.5,0)}function $f(n,t){let e=n.cidade,i=t==="perto",s=$t(7),r="#F2E2B4",o="#2E9C6A";Hn(n,$n("#D6D0C4","#CCC5B8"),0,0,44,44,1);for(let[R,F,w,L]of[[-21.9,0,.2,44],[21.9,0,.2,44],[0,-21.9,44,.2],[-12.5,21.9,19,.2],[12.5,21.9,19,.2]])n.add(Zn(w,2.2,L,Bn(r),R,1.1,F,1,{out:.012})),n.add(D(w+.02,.25,L+.02,o,R,.2,F,{shadow:!1})),n.col(R,F,w,L,{h:2.2});for(let R of[-1,1])n.add(D(.5,3.6,.5,o,R*3.2,1.8,21.9,{out:.012})),n.col(R*3.2,21.9,.5,.5);n.add(D(7,.9,.3,o,0,4,21.9,{out:.012})),n.add(Xe(6.6,.7,Mt(ye("E.E. PROF. ANT\xD4NIO SERRA",{fundo:o,w:1024,h:110})),0,4,22.06));let a=R=>{let F=new Y;F.userData.vivo=!0,F.position.set(R*2.95,0,21.9);let w=new Y;F.add(w);for(let L=0;L<=8;L++)w.add(D(.04,2,.04,"#2A2C30",-R*L*.35,1.05,0));return w.add(D(2.8,.06,.06,"#2A2C30",-R*1.4,2,0)),w.add(D(2.8,.06,.06,"#2A2C30",-R*1.4,.1,0)),n.add(F),F},l=a(-1),c=a(1),h=(n.L.nome?n.L.nome+".":"")+"portao";e.portas[h]={nome:h,aberta:1,auto:!1,abrir(R){this.aberta=R,l.rotation.y=-R*1.4,c.rotation.y=R*1.4}},e.portas[h].abrir(1);let u=-20.5,d=-11,p=-20,g=20,y=3.4;for(let R=0;R<2;R++){let F=R*(y+.2),w=i&&R===0?"#F7F4EA":null;Jt(n,p,u,g,u,{y:F,h:y,t:.25,corA:r,corB:w,semCol:R>0,vaos:[0,1,2,3].map(N=>({a:N*10+2.5,b:N*10+7.5,y0:1.2,y1:2.6}))}),Jt(n,p,u,p,d,{y:F,h:y,t:.25,corA:r,corB:w,semCol:R>0}),Jt(n,g,u,g,d,{y:F,h:y,t:.25,corA:w,corB:r,semCol:R>0});let L=[];for(let N=0;N<4;N++)L.push({a:N*10+1,b:N*10+2,y0:0,y1:2.2},{a:N*10+3.5,b:N*10+8.5,y0:1,y1:2.6});Jt(n,p,d,g,d,{y:F,h:y,t:.25,corA:w,corB:r,semCol:R>0,vaos:L});for(let N=0;N<4;N++)rn(n,p+N*10+6,d,!0,5,F+1,F+2.6,{t:.25,fora:1,cortina:!1,seed:N+R*4,grade:"#2E9C6A"}),rn(n,p+N*10+5,u,!0,5,F+1.2,F+2.6,{t:.25,fora:-1,cortina:!1,seed:N+9+R*4,grade:"#2E9C6A"}),R===0&&i?ke(n,"sala"+(N+1),p+N*10+1.5,d,!0,1,{t:.25,dobra:-1,abre:-1,cor:"#2E9C6A"}):n.add(D(1,2.2,.08,"#2E9C6A",p+N*10+1.5,F+1.1,d+.06)),N>0&&Jt(n,p+N*10,u,p+N*10,d,{y:F,h:y,t:.15,corA:w,corB:w,semCol:R>0});n.add(D(g-p+.4,.2,d-u+3.4,"#E8E4DC",0,F+y+.1,(u+d)/2+1.5));for(let N=0;N<=8;N++)n.add(j(.15,.15,y,o,p+N*5,F+y/2,d+2.8,{seg:10,out:.012})),R===0&&n.col(p+N*5,d+2.8,.3,.3,{h:y});if(R===1){for(let N=0;N<=40;N++)n.add(D(.04,1,.04,"#2E9C6A",p+N,F+.5,d+2.9,{shadow:!1}));n.add(D(40,.06,.08,"#2E9C6A",0,F+1,d+2.9)),n.add(D(9.6,3.6,.2,"#3A3540",0,F+1.8,d-.3))}i&&R===0||n.add(D(g-p-.4,y-.2,d-u-.4,"#3A3540",0,F+y/2,(u+d)/2,{shadow:!1}))}for(let R=0;R<17;R++)n.add(D(1.4,.2,.3,"#E8E4DC",g+1,.1+R*.2,d+2.5-R*.28,{out:.006}));if(n.col(g+1,d-.2,1.4,5.5,{h:3.6}),is(n,0,(u+d)/2+1.5,g-p+.4,d-u+3.4,2*(y+.2),r,{alt:.7}),n.add(D(g-p+.5,.5,.1,o,0,2*(y+.2)+.35,d+3.25)),i){for(let R=0;R<4;R++)sv(n,p+R*10+5,(u+d)/2,9.8,d-u-.3,y,R);Hn(n,e.tex.piso("ceramica","#E8E0D2","#D4CABA"),0,d+1.5,40,3,1,.02)}let m=7,f=7,E=26,v=15;Hn(n,ce(512,300,R=>{R.fillStyle="#3E8A5A",R.fillRect(0,0,512,300),R.fillStyle="#C84E4E",R.fillRect(30,30,452,240),R.strokeStyle="#FFFFFF",R.lineWidth=5,R.strokeRect(30,30,452,240),R.beginPath(),R.moveTo(256,30),R.lineTo(256,270),R.stroke(),R.beginPath(),R.arc(256,150,40,0,7),R.stroke(),R.beginPath(),R.arc(30,150,70,-1.57,1.57),R.stroke(),R.beginPath(),R.arc(482,150,70,1.57,4.71),R.stroke()}),m,f,E,v,E,.02);for(let R of[-1,1]){let F=new Y;F.position.set(m+R*(E/2-1.3),0,f),F.add(D(.1,2,.1,"#F4F1EA",0,1,-1.5)),F.add(D(.1,2,.1,"#F4F1EA",0,1,1.5)),F.add(D(.1,.1,3.1,"#F4F1EA",0,2,0));let w=new _t(new Xt(3,2),new Le({color:"#FFFFFF",transparent:!0,opacity:.25,side:me}));w.rotation.y=Math.PI/2,w.position.set(R*.8,1,0),F.add(w),n.add(F),n.col(m+R*(E/2-1.3),f-1.5,.2,.2),n.col(m+R*(E/2-1.3),f+1.5,.2,.2);let L=new Y;L.position.set(m+R*(E/2+.5),0,f),L.add(j(.1,.1,3.6,"#8D949C",0,1.8,0,{seg:8})),L.add(D(.08,1.1,1.8,"#F4F1EA",-R*.5,3.4,0,{out:.01})),L.add(bt(new qn(.23,.02,6,16),"#F08A2C",{pos:[-R*.8,3.05,0],rot:[Math.PI/2,0,0]})),n.add(L),n.col(m+R*(E/2+.5),f,.2,.2)}for(let R of[-1,1])for(let F=0;F<5;F++){let w=m-E/2-1+F*(E+2)/4,L=f+R*(v/2+1);n.add(j(.14,.14,7,"#8D949C",w,3.5,L,{seg:8,out:.01})),n.col(w,L,.3,.3,{h:7})}let _=new _t(new $e(v/2+1.5,v/2+1.5,E+3,24,1,!0,Math.PI/2-Math.PI*.3,Math.PI*.6),Ie("#C9CED6"));_.material=_.material.clone(),_.material.side=me,_.rotation.z=Math.PI/2,_.rotation.y=0,_.position.set(m,7-(v/2+1.5)*Math.cos(Math.PI*.3),f),_.rotation.x=0,n.add(_);let M=_e(.12,"#F08A2C",m+3,.14,f+2,{out:.008});n.add(M);for(let R=0;R<3;R++)n.add(D(E-4,.4,.7,"#E8E4DC",m,.2+R*.4,f+v/2+2.6+R*.7,{out:.008}));n.col(m,f+v/2+3.3,E-4,2.1,{h:1.2});for(let[R,F,w]of[[-16,3,"ipeAmarelo"],[-16,15,"comum"],[-10,9,"mangueira"]]){let L=Jn(w,1.2,R+F);L.position.set(R,0,F),n.add(L),n.col(R,F,.7,.7,{h:4})}for(let[R,F,w]of[[-13,3,0],[-13,15,Math.PI],[-19.5,9,Math.PI/2]])fe(n,rl("#2E9C6A"),R,F,w);let A=j(.06,.07,9,"#C9CED6",-6,4.5,18,{seg:8});n.add(A),n.col(-6,18,.2,.2);let b=new Xt(1.6,1.1,12,1),C=ce(160,110,R=>{R.fillStyle="#2E9C4A",R.fillRect(0,0,160,110),R.fillStyle="#F2C230",R.beginPath(),R.moveTo(80,10),R.lineTo(150,55),R.lineTo(80,100),R.lineTo(10,55),R.fill(),R.fillStyle="#2E6FB8",R.beginPath(),R.arc(80,55,24,0,7),R.fill()}),S=new _t(b,new Wt({map:C,side:me}));S.position.set(-6+.82,8.4,18),S.userData.vivo=!0,n.add(S);let x=b.attributes.position.array.slice();e.vivos.push(R=>{let F=b.attributes.position;for(let w=0;w<F.count;w++){let L=(x[w*3]+.8)/1.6;F.setZ(w,Math.sin(R*4+L*5)*.12*L)}F.needsUpdate=!0,b.computeVertexNormals()});let T=new Y;T.position.set(-15,0,-4),T.add(Zn(10,3.2,6,Bn(r),0,1.6,0,1,{out:.014})),T.add(D(11,.2,7.5,"#E8E4DC",0,3.3,.6)),T.add(Xe(4,.6,Mt(ye("CANTINA",{fundo:o})),0,2.7,3.02)),T.add(D(5,.9,.1,"#2A2A30",1,1.6,3.01)),T.add(D(5.4,.1,.6,"#F4F1EA",1,1.1,3.25)),n.add(T),n.col(-15,-4,10,6,{h:3.2});for(let R=0;R<2;R++)fe(n,tl(2.2,.8,"#F4F1EA",6,"#2E9C6A"),-17+R*5,.8,0);n.ponto("portao",0,24,Math.PI),n.ponto("patio",-8,10,0),n.ponto("quadra",m,f,0),n.ponto("corredor",-10,d+1.5,Math.PI/2),n.ponto("sala1",-18.5,-12.2,0),n.ponto("sala2",-8.5,-12.2,0)}function sv(n,t,e,i,s,r,o){let a=n.cidade,l=$t(o*13+1);jn(n,t,e,i-.2,s-.1,Mt(a.tex.piso("granilite","#E4E0D4","#9AA0A8")),.02),Kn(n,t,e,i-.2,s-.1,r-.02);let c=[["MATEM\xC1TICA","2 + 3 = 5","x\xB2 + 2x = 0"],["PORTUGU\xCAS","Substantivo","Verbo \u2022 Adjetivo"],["HIST\xD3RIA","Brasil Col\xF4nia","1500 - 1822"],["CI\xCANCIAS","O ciclo da \xE1gua","Evapora\xE7\xE3o"]][o%4],h=new _t(new Xt(4,1.3),Mt(ce(512,166,f=>{f.fillStyle="#2E5A44",f.fillRect(0,0,512,166),f.fillStyle="#F4F1EA",f.font="700 30px Caveat, cursive",f.fillText(c[0],20,40),f.font="700 26px Caveat, cursive",f.fillText(c[1],40,90),f.fillText(c[2],40,130),f.fillText("Data: hoje",360,40)})));h.position.set(t-i/2+.165,1.6,e),h.rotation.y=Math.PI/2,n.add(h),n.add(D(.06,1.42,4.12,"#9A6236",t-i/2+.12,1.6,e)),n.add(D(.12,.04,4,"#9A6236",t-i/2+.18,.92,e));let u=Oi(1.2,"#9A6236",!1);u.position.set(t-i/2+1.5,.02,e-1.5),u.rotation.y=Math.PI/2,n.add(u),n.col(t-i/2+1.5,e-1.5,.6,1.2);let d=Rr("#9A6236");d.position.set(t-i/2+.85,.02,e-1.5),d.rotation.y=Math.PI/2,n.add(d);for(let f=0;f<4;f++)for(let E=0;E<4;E++){let v=t-i/2+3.3+f*1.45,_=e-2.7+E*1.75,M=new Y;M.position.set(v,.02,_),M.rotation.y=Math.PI/2,o===0&&(f+E)%2===0&&n.figurante(v+.35,_,-Math.PI/2,{sentado:!0,assento:.48}),M.add(Q(.6,.04,.45,"#D9B07A",0,.72,-.05,{out:.008})),M.add(D(.04,.7,.04,"#3E7CC8",-.26,.36,.1)),M.add(D(.04,.7,.04,"#3E7CC8",.26,.36,.1)),M.add(Q(.42,.04,.38,"#3E7CC8",0,.44,.35,{out:.008})),M.add(Q(.42,.35,.04,"#3E7CC8",0,.7,.55,{out:.008}));for(let A of[-1,1])M.add(D(.03,.44,.03,"#3A3D44",A*.18,.22,.35));l()<.6&&M.add(Q(.22,.02,.3,Ht(l,["#E2443A","#3E7CC8","#F2C230","#5AA84E"]),(l()-.5)*.2,.75,-.05)),n.add(M),n.col(v,_,.55,.8,{h:.8})}for(let f=0;f<3;f++){let E=Pn(.8,.6,o*10+f,f===1?"paisagem":"abstrato");E.position.set(t-i/2+3.5+f*2.2,2.2,e-s/2+.15),n.add(E)}o===0&&n.figurante(t-i/2+1.2,e+1.2,Math.PI/2);let p=Us(1.4,1.9,"#9AA0A8");p.position.set(t+i/2-.45,.02,e-s/2+1.4),p.rotation.y=-Math.PI/2,n.add(p),n.col(t+i/2-.45,e-s/2+1.4,.6,1.4);let g=mo(r-.02);g.position.set(t,0,e),n.add(g);let y=g.userData.pas;a.vivos.push(f=>{y.rotation.y=f*6+o});let m=ss(a,.18);m.position.set(t+i/2-.1,2.6,e),m.rotation.y=-Math.PI/2,n.add(m)}function Jf(n,t){let e=n.cidade,i=t==="perto",s="#F4F1EA",r="#2E6FB8",o=-16,a=16,l=-10,c=6,h=3.6,u=3;Hn(n,$n("#D6D0C4","#CCC5B8"),0,0,44,44,1);for(let v=0;v<u;v++){let _=v*h,M=i&&v===0?"#F2F7FA":null,A=[];for(let b=0;b<8;b++){let C=o+2+b*4;v===0&&C>-6&&C<4||A.push({c:C,y0:1,y1:2.6})}Jt(n,o,c,a,c,{y:_,h,t:.25,corA:M,corB:s,semCol:v>0,vaos:[...v===0?[{a:13,b:19,y0:0,y1:2.8}]:[],...A.map(b=>({a:b.c-.9-o,b:b.c+.9-o,y0:b.y0,y1:b.y1}))]});for(let b of A)rn(n,b.c,c,!0,1.8,_+b.y0,_+b.y1,{t:.25,fora:1,cortina:v===0&&i?"#D9ECF7":!1,seed:b.c+v*9,moldura:"#E8E4DC"});Jt(n,o,l,a,l,{y:_,h,t:.25,corA:s,corB:M,semCol:v>0,vaos:[2,6,10,14,18,22,26,30].map(b=>({a:b-.9,b:b+.9,y0:1,y1:2.6}))});for(let b of[2,6,10,14,18,22,26,30])rn(n,o+b,l,!0,1.8,_+1,_+2.6,{t:.25,fora:-1,cortina:!1,seed:b+v});Jt(n,o,l,o,c,{y:_,h,t:.25,corA:s,corB:M,semCol:v>0}),Jt(n,a,l,a,c,{y:_,h,t:.25,corA:M,corB:s,semCol:v>0}),n.add(D(a-o+.4,.14,c-l+.4,"#E8E4DC",0,_+h,(l+c)/2)),n.add(D(a-o+.5,.3,.1,r,0,_+h-.1,c+.22)),i&&v===0||n.add(D(a-o-.5,h-.3,c-l-.5,"#3A3540",0,_+h/2,(l+c)/2,{shadow:!1}))}is(n,0,(l+c)/2,a-o,c-l,u*h,s,{alt:.8}),n.add(Xe(9,1.2,Mt(ye("SANTA CASA DE PEDRA ALTA",{fundo:r,w:1024,h:140})),0,u*h+.4,c+.14));let d=new Wt({color:"#E2443A",emissive:"#E2443A",emissiveIntensity:.2});e.acender(d,1.5);let p=new Y;p.add(bt(new le(1.4,.45,.15),d)),p.add(bt(new le(.45,1.4,.15),d)),p.position.set(a-2,u*h+.6,c+.2),n.add(p),n.add(D(9,.3,5,"#E8E4DC",0,3.2,c+2.5,{out:.014}));for(let v of[-1,1])n.add(j(.18,.18,3.1,"#E8E4DC",v*4.2,1.55,c+4.6,{seg:10,out:.01})),n.col(v*4.2,c+4.6,.4,.4,{h:3});n.add(Xe(5,.5,Mt(ye("PRONTO-SOCORRO",{fundo:"#E2443A"})),0,3.2,c+5.02));let g=new Y,y=new Y;g.userData.vivo=y.userData.vivo=!0;let m=new Wt({color:"#CFE6F2",transparent:!0,opacity:.35,depthWrite:!1,side:me});for(let[v,_]of[[g,-1],[y,1]])v.add(bt(new Xt(1.5,2.6),m,{pos:[0,1.3,0],shadow:!1})),v.add(D(1.5,.08,.06,"#9AA0A8",0,2.6,0)),v.add(D(.06,2.6,.06,"#9AA0A8",_*.75,1.3,0)),v.position.set(_*.75,0,c+.2),n.add(v);let f=(n.L.nome?n.L.nome+".":"")+"entrada",{paraMundo:E}={paraMundo:(v,_,M)=>[v.x+_,v.z+M]};e.portas[f]={nome:f,aberta:0,auto:!0,abrir(v){this.aberta=v;let _=Math.max(0,Math.min(1,v))*1.45;g.position.x=-.75-_,y.position.x=.75+_},mundo:E(n.L,0,c),lote:n.L.nome};for(let v of[-2.25,2.25])n.add(D(1.5,2.8,.25,s,v,1.4,c));lv(n,7,c+6.5,Math.PI/2);for(let v=0;v<6;v++)if(n.add(D(.1,.01,4.5,"#F4F1EA",-18+v*2.6,.03,14)),v<5&&v%2===0){let _=Hi(Ht($t(v+3),["#3E7CC8","#F4F1EA","#2A2A30","#9AA0A8","#E2443A"]),v);_.position.set(-16.7+v*2.6,0,14),n.add(_),n.col(-16.7+v*2.6,14,1.8,4.1)}for(let[v,_,M]of[[14,15,"ipeRoxo"],[19,9,"comum"],[-19,19,"mangueira"],[19,19,"comum"]]){let A=Jn(M,1.1,v);A.position.set(v,0,_),n.add(A),n.col(v,_,.7,.7,{h:4})}for(let[v,_]of[[11,19],[16,19]])fe(n,rl("#2E6FB8"),v,_,0);if(i){jn(n,0,(l+c)/2,a-o-.3,c-l-.3,Mt(e.tex.piso("granilite","#EEF2F2","#9AB8C8")),.02),Kn(n,0,(l+c)/2,a-o-.3,c-l-.3,h-.02),fe(n,On(3.4,"#2E6FB8","#F4F1EA"),0,c-4.5,Math.PI),fe(n,rs(),0,c-5.4,Math.PI*0,!1);let v=Oi(.01,"#F4F1EA",!1);n.add(v);for(let M=0;M<3;M++)fe(n,as(5,"#3E7CC8"),-9,c-2.5-M*1.6,Math.PI);for(let[M,A]of[[-10.1,0],[-7.9,1],[-9,2],[-7.35,0]])n.figurante(M,c-2.5-A*1.6+.05,Math.PI,{sentado:!0,assento:.49});n.figurante(0,c-5.3,0),n.figurante(-7,l+1.8,Math.PI,{sentado:!0,assento:.5,roupa:{camisa:"#F4F1EA"}});let _=Tr(.01);_.children.slice(0,3).forEach(M=>M.visible=!1),_.position.set(-9,1.6,l+.2+6),n.add(_),e.vivos.push(M=>wr(_.userData.tela,M,8)),n.add(yo(e,5).translateX(-5).translateY(2.6).translateZ(c-.2).rotateY(Math.PI)),fe(n,rv(),-14.5,c-1.2),fe(n,ln(1.5,5),4.5,c-.7),fe(n,ln(1.5,6),-4.5,c-.7),Jt(n,-15.9,l+6,-3,l+6,{h,t:.12,corA:"#F2F7FA",corB:"#F2F7FA",vaos:[{a:4.5,b:5.5}]}),ke(n,"consultorio",-11.4+0,l+6,!0,1,{t:.12,cor:"#F4F1EA",dobra:-1,abre:-1}),Jt(n,-3,l,-3,l+6,{h,t:.12,corA:"#F2F7FA",corB:"#F2F7FA"}),fe(n,ov(),-14,l+2,Math.PI/2),fe(n,Oi(1.3,"#F4F1EA",!0,2),-7,l+1,0),fe(n,rs(),-7,l+1.8,Math.PI),fe(n,Rr("#3E7CC8"),-7.3,l+3.4,Math.PI),fe(n,Us(1.2,1.9,"#F4F1EA"),-4.2,l+.5,0),n.add(Pn(1.2,.8,31,"abstrato").translateX(-10).translateY(1.8).translateZ(l+.15)),fe(n,el(!0),-15.5,l+4.5,Math.PI/2),fe(n,ln(1.2,7),-4,l+5.4),fe(n,qf(),-12.6,l+.9),Jt(n,3,l,3,l+6,{h,t:.12,corA:"#F2F7FA",corB:"#F2F7FA"}),Jt(n,3,l+6,15.9,l+6,{h,t:.12,corA:"#F2F7FA",corB:"#F2F7FA",vaos:[{a:1,b:2.2}]}),ke(n,"enfermaria",4.6,l+6,!0,1.2,{t:.12,cor:"#F4F1EA",dobra:-1,abre:-1});for(let M=0;M<3;M++)fe(n,av(M),6.5+M*3.4,l+1.4,0),fe(n,qf(),7.5+M*3.4,l+.6,0)}else n.add(D(a-o-.5,h-.3,c-l-.5,"#3A3540",0,h/2,(l+c)/2,{shadow:!1}));n.ponto("entrada",0,c+3.5,Math.PI),n.ponto("espera",-9,c-3,Math.PI),n.ponto("consultorio",-10,l+3,0),n.ponto("enfermaria",9,l+4,0),n.ponto("ambulancia",7,c+8.4,0)}function rv(){return Yf()}function ov(){let n=new Y;n.userData.pe=[2,.8],n.add(Q(1.9,.15,.7,"#F4F1EA",0,.8,0,{out:.01})),n.add(Q(.5,.1,.6,"#F4F1EA",-.7,.92,0,{rot:[0,0,.3]}));for(let[t,e]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(D(.04,.75,.04,"#9AA0A8",t*.85,.37,e*.3));return n.add(D(1.9,.02,.72,"#8FD3F2",0,.89,0)),n}function av(n=0){let t=Ls(.95,"#8FD3F2","#C9CED6");t.userData.pe=[1,2.1],t.add(D(1,.05,.05,"#9AA0A8",0,.75,.8));let e=new _t(new Xt(2.2,2),new Wt({color:"#B9DCE8",side:me}));return e.position.set(1.4,1.2,0),e.rotation.y=Math.PI/2,t.add(e),t.add(D(.03,.03,2.2,"#9AA0A8",1.4,2.22,0)),t}function qf(){let n=new Y;return n.userData.pe=[.3,.3],n.add(j(.18,.18,.03,"#9AA0A8",0,.02,0)),n.add(j(.015,.015,1.9,"#C9CED6",0,.95,0,{seg:6})),n.add(D(.3,.02,.02,"#C9CED6",0,1.88,0)),n.add(Q(.14,.22,.05,"#E6F4FA",.12,1.72,0,{r:.02})),n}function lv(n,t,e,i){let s=new Y;s.position.set(t,0,e),s.rotation.y=i,s.add(Q(2.1,2.2,3.6,"#F4F1EA",0,1.45,-.8,{out:.016,r:.1})),s.add(Q(2,1.2,1.6,"#F4F1EA",0,.95,1.75,{out:.016,r:.1})),s.add(D(2.12,.3,3.6,"#E2443A",0,1.2,-.8)),s.add(D(1.8,.5,.02,"#6E95B8",0,1.35,2.56).rotateX(-.3));let r=new Wt({color:"#E2443A",emissive:"#E2443A",emissiveIntensity:.2}),o=new Wt({color:"#3E7CC8",emissive:"#3E7CC8",emissiveIntensity:.2});s.add(bt(new le(.5,.15,.25),r,{pos:[-.35,2.62,.6]})),s.add(bt(new le(.5,.15,.25),o,{pos:[.35,2.62,.6]}));for(let[c,h]of[[-1,1.6],[1,1.6],[-1,-1.8],[1,-1.8]])s.add(j(.38,.38,.26,"#1B1A20",c*.98,.38,h,{rot:[0,0,Math.PI/2],seg:16,out:.012}));let a=new Y;a.add(D(.7,.22,.02,"#E2443A")),a.add(D(.22,.7,.02,"#E2443A"));for(let c of[-1,1]){let h=a.clone();h.position.set(c*1.06,1.8,-.8),h.rotation.y=Math.PI/2,s.add(h)}n.add(s);let l=Math.abs(Math.sin(i))>.5;return n.col(t,e,l?5.4:2.3,l?2.3:5.4,{h:2.6}),n.cidade.vivos.push(c=>{let h=Math.sin(c*8)>0;r.emissiveIntensity=h?1.2:.1,o.emissiveIntensity=h?.1:1.2}),s}function Kf(n,t){let e=n.cidade,i=t==="perto",s="#E8DCC8",r=$t(31);Hn(n,$n("#D6D0C4","#CCC5B8"),0,0,44,44,1),Hn(n,e.tex.asfalto(),0,-13,44,18,4,.02);let o=-16,a=16,l=-3,c=9,h=4.2;Jt(n,o,l,a,l,{h,t:.25,corA:s,corB:i?"#F4EEE2":null,vaos:[{a:4,b:8,y0:0,y1:3},{a:24,b:28,y0:0,y1:3}]}),Jt(n,o,c,a,c,{h,t:.25,corA:i?"#F4EEE2":null,corB:s,vaos:[{a:13,b:19,y0:0,y1:3.2},{a:2,b:10,y0:1,y1:3},{a:22,b:30,y0:1,y1:3}]}),rn(n,-10,c,!0,8,1,3,{t:.25,fora:1,cortina:!1}),rn(n,10,c,!0,8,1,3,{t:.25,fora:1,cortina:!1}),Jt(n,o,l,o,c,{h,t:.25,corA:s,corB:i?"#F4EEE2":null}),Jt(n,a,l,a,c,{h,t:.25,corA:i?"#F4EEE2":null,corB:s}),n.add(D(a-o+1,.3,c-l+16,"#E8E4DC",0,h+.15,(l+c)/2-4,{out:.014}));for(let p=0;p<=6;p++)n.add(j(.2,.2,h,"#8D949C",o+p*32/6,h/2,l-9,{seg:10,out:.01})),n.col(o+p*32/6,l-9,.4,.4,{h});n.add(Xe(12,1.3,Mt(ye("RODOVI\xC1RIA DE PEDRA ALTA",{fundo:"#2E6FB8",w:1024,h:120})),0,h+.9,c+.1)),n.add(D(12.4,1.5,.15,"#1F4E86",0,h+.9,c));let u=ss(e,.5);u.position.set(0,3.6,c+.14),n.add(u),n.add(D(36,.2,2.5,"#E8E4DC",0,.1,l-1.3)),n.pisoAlto(0,l-1.3,36,2.5,.2);for(let p=0;p<5;p++){let g=-13+p*6.5;if(n.add(Xe(.8,.5,Mt(ye(String(p+1),{fundo:"#F2C230",cor:"#1F4E86",w:128,h:80})),g,3.6,l-2.5)),n.add(D(.06,.6,.06,"#8D949C",g,4,l-2.5)),p%2===0){let y=ou(Ht(r,["#2E6FB8","#E2443A","#2E9C6A"]),["S\xC3O PAULO","CAMPINAS","BRAGAN\xC7A"][p/2]);y.position.set(g,0,l-9),y.rotation.y=Math.PI,n.add(y),n.col(g,l-9,2.6,12,{h:3.4})}}for(let p=0;p<4;p++)fe(n,rl("#2E6FB8"),-12+p*8,l-1.6,Math.PI);for(let[p,g,y]of[[-15,17,"ipeAmarelo"],[15,17,"ipeRoxo"],[-6,19,"palmeira"],[6,19,"palmeira"]]){let m=Jn(y,1.1,p);m.position.set(p,0,g),n.add(m),n.col(p,g,.6,.6,{h:4})}let d=Hi("#F2C230",4);if(d.position.set(-10,0,14.5),d.rotation.y=Math.PI/2,d.add(Q(.5,.2,.3,"#F4F1EA",0,1.45,0)),n.add(d),n.col(-10,14.5,4.1,1.8),n.add(Xe(1.2,.5,Mt(ye("T\xC1XI",{fundo:"#2A2A30",cor:"#F2C230"})),-13.5,2.4,13)),n.add(j(.04,.04,2.6,"#8D949C",-13.5,1.3,12.98,{seg:6})),i){jn(n,0,(l+c)/2,a-o-.3,c-l-.3,Mt(e.tex.piso("granilite","#E4E0D4","#9AA0A8")),.02),Kn(n,0,(l+c)/2,a-o-.3,c-l-.3,h-.02);for(let g=0;g<3;g++){let y=new Y;y.userData.pe=[2.4,.8],y.add(Q(2.3,1.1,.7,"#2E6FB8",0,.55,0,{out:.012})),y.add(D(2.3,1.3,.04,"#CFE6F2",0,1.8,.2)),y.add(Xe(2,.4,Mt(ye(["VIA\xC7\xC3O SERRANA","EXPRESSO PAULISTA","TURISMO DO VALE"][g],{fundo:"#1F4E86",w:512,h:96})),0,2.7,.3)),fe(n,y,-12+g*3,l+1.2,0),y.add(ki().translateY(1.1))}for(let g=0;g<2;g++)fe(n,as(6,"#2E6FB8"),5,l+4+g*1.8,Math.PI);n.figurante(-12,l+.55,0),n.figurante(-9,l+.55,0),n.figurante(3.9,l+4.05,Math.PI,{sentado:!0,assento:.49}),n.figurante(6.6,l+5.85,Math.PI,{sentado:!0,assento:.49}),n.figurante(-12,l+2.4,Math.PI),fe(n,On(3,"#E2443A","#F4F1EA"),12.5,l+1.5,0),fe(n,os("#E2443A",4),15,l+4,-Math.PI/2),n.add(zi(2,.9,[["CAF\xC9","R$ 4"],["P\xC3O DE QUEIJO","R$ 5"],["SALGADO","R$ 7"]]).translateX(12.5).translateY(2.6).translateZ(l+.14));let p=new _t(new Xt(4,2),Mt(ce(512,256,g=>{g.fillStyle="#100808",g.fillRect(0,0,512,256),g.font="700 26px IBM Plex Mono, monospace",g.fillStyle="#F2C230",["HORA  DESTINO      BAIA","14:30 S\xC3O PAULO     1","15:10 CAMPINAS      3","16:00 BRAGAN\xC7A      5","17:20 S\xC3O PAULO     1","18:45 ATIBAIA       2"].forEach((y,m)=>g.fillText(y,16,36+m*40))})));p.position.set(-3,2.6,c-.15),p.rotation.y=Math.PI,n.add(p)}else n.add(D(a-o-.5,h-.3,c-l-.5,"#3A3540",0,h/2,(l+c)/2,{shadow:!1}));n.ponto("entrada",0,c+2,Math.PI),n.ponto("plataforma",0,l-1.5,0),n.ponto("guiche",-9,l+2.6,0)}function ou(n="#2E6FB8",t="S\xC3O PAULO"){let e=new Y;e.add(Q(2.5,2.8,12,n,0,1.75,0,{out:.018,r:.18})),e.add(D(2.52,.3,12,"#F4F1EA",0,1,0));for(let i of[-1,1]){e.add(D(.02,.9,10.5,"#3A4E62",i*1.26,2.3,-.3));for(let s of[-4.3,0,4.3])e.add(j(.48,.48,.3,"#1B1A20",i*1.15,.48,s,{rot:[0,0,Math.PI/2],seg:16,out:.012}))}return e.add(D(2.2,1.3,.02,"#3A4E62",0,2.3,6.01)),e.add(Xe(2,.35,Mt(ye(t,{fundo:"#100808",cor:"#F2C230",w:384,h:64})),0,3,6.03)),e}function jf(n,t){let e=n.cidade,i=t==="perto",s=$t(91);Hn(n,$n("#C9C4BA","#BDB7AC"),0,0,44,44,2);let r=9;n.add(Q(20,.9,12,"#F4F1EA",0,5.6,r,{out:.016})),n.add(D(20.2,.45,12.2,"#2E9C6A",0,5.25,r)),n.add(Xe(6,.8,Mt(ye("AUTO POSTO SERRA",{fundo:"#2E9C6A"})),0,5.6,r+6.03));let o=new Wt({color:"#FFFFFF",emissive:"#F4F8FF",emissiveIntensity:.1});e.acender(o,1.6);for(let f=0;f<3;f++)for(let E=0;E<2;E++)n.add(bt(new le(2,.05,.4),o,{pos:[-6+f*6,5.13,r-3+E*6],shadow:!1}));for(let[f,E]of[[-6,r],[6,r]]){n.add(j(.35,.35,5.2,"#F4F1EA",f,2.6,E,{seg:12,out:.012})),n.add(D(1.4,.25,5,"#E8E4DC",f,.125,E)),n.col(f,E,1.4,5,{h:1.8});for(let v of[-1,1]){let _=new Y;_.position.set(f,.25,E+v*1.6),_.add(Q(.9,1.8,.55,"#F4F1EA",0,.9,0,{out:.012})),_.add(D(.92,.5,.57,"#2E9C6A",0,1.5,0)),_.add(D(.6,.3,.02,"#100808",0,1.15,.29)),_.add(D(.6,.3,.02,"#100808",0,1.15,-.29)),_.add(j(.05,.05,.8,"#2A2A30",.5,1,0,{seg:6})),n.add(_)}}let a=new Y;a.position.set(-19,0,19),a.add(Q(1.6,6,.6,"#2E9C6A",0,3,0,{out:.014})),a.add(Xe(1.4,2.2,Mt(ce(256,400,f=>{f.fillStyle="#F4F1EA",f.fillRect(0,0,256,400),f.fillStyle="#100808",f.font="900 34px Inter",["GASOLINA","6,29","ETANOL","4,19","DIESEL","6,09"].forEach((E,v)=>{f.fillStyle=v%2?"#E2443A":"#100808",f.font=(v%2?"900 58px ":"800 34px ")+"Inter",f.fillText(E,20,50+v*62)})})),0,3,.31)),n.add(a),n.col(-19,19,1.6,.6,{h:6});let l=-16,c=-2,h=-14,u=-4,d=3.6;if(Jt(n,l,h,c,h,{h:d,t:.25,corA:"#F4F1EA",corB:i?"#F7F7F2":null}),Jt(n,l,h,l,u,{h:d,t:.25,corA:"#F4F1EA",corB:i?"#F7F7F2":null}),Jt(n,c,h,c,u,{h:d,t:.25,corA:i?"#F7F7F2":null,corB:"#F4F1EA"}),Jt(n,l,u,c,u,{h:d,t:.25,corA:i?"#F7F7F2":null,corB:"#F4F1EA",vaos:[{a:1,b:6,y0:.5,y1:2.8},{a:7,b:9,y0:0,y1:2.6},{a:10,b:13,y0:.5,y1:2.8}]}),rn(n,l+3.5,u,!0,5,.5,2.8,{t:.25,fora:1,cortina:!1,moldura:"#2A2A30"}),rn(n,l+11.5,u,!0,3,.5,2.8,{t:.25,fora:1,cortina:!1,moldura:"#2A2A30"}),ke(n,"loja",l+8,u,!0,2,{t:.25,tipo:"vidro",cor:"#9AA0A8",dobra:-1,abre:1}),n.add(D(c-l+.4,.2,u-h+2,"#E8E4DC",(l+c)/2,d+.1,(h+u)/2+.8)),n.add(Xe(8,.7,Mt(ye("CONVENI\xCANCIA 24h",{fundo:"#2E9C6A"})),(l+c)/2,d+.55,u+1.82)),i){jn(n,(l+c)/2,(h+u)/2,c-l-.3,u-h-.3,Mt(e.tex.piso("ceramica","#EDEAE2","#D6D0C4")),.02),Kn(n,(l+c)/2,(h+u)/2,c-l-.3,u-h-.3,d-.02);for(let f=0;f<4;f++)fe(n,os(Ht(s,["#E2443A","#2E6FB8","#2E9C6A"]),f),l+1+f*.8,h+.5);fe(n,pn(5,1.6,.45,3,"misto"),(l+c)/2+2.5,h+.35),fe(n,pn(3.5,1.4,.8,4,"misto"),(l+c)/2,(h+u)/2+.5),fe(n,On(2.4,"#2E9C6A","#F4F1EA"),c-1.6,(h+u)/2+1.5,-Math.PI/2),n.add(ki().translateX(c-1.6).translateY(1).translateZ((h+u)/2+1.5))}else n.add(D(c-l-.5,d-.3,u-h-.5,"#3A3540",(l+c)/2,d/2,(h+u)/2,{shadow:!1}));let p=new Y;p.add(Q(.4,1.3,.3,"#E2443A",0,.65,0,{out:.01})),p.add(j(.12,.12,.06,"#F4F1EA",0,1,.16,{rot:[Math.PI/2,0,0]})),p.position.set(14,0,20),n.add(p),n.col(14,20,.4,.3);let g=new Y;g.position.set(12,0,-12),g.add(D(12,.25,10,"#E8E4DC",0,4.2,0,{out:.014}));for(let[f,E]of[[-5.8,-4.8],[5.8,-4.8],[-5.8,4.8],[5.8,4.8]])g.add(D(.3,4.2,.3,"#2E6FB8",f,2.1,E,{out:.01}));g.add(Xe(5,.7,Mt(ye("LAVA-R\xC1PIDO",{fundo:"#2E6FB8"})),0,3.7,5.02)),g.add(D(12,4.2,.2,"#F4F1EA",0,2.1,-5));let y=Hi("#3E7CC8",9);y.position.set(0,0,0),g.add(y),n.add(g),n.col(12,-17,12,.3,{h:4}),n.col(12,-12,1.8,4.1);for(let[f,E]of[[-5.8,-4.8],[5.8,-4.8],[-5.8,4.8],[5.8,4.8]])n.col(12+f,-12+E,.3,.3);let m=Hi("#F4F1EA",5);m.position.set(-6,0,r+3.2),m.rotation.y=Math.PI/2,n.add(m),n.col(-6,r+3.2,4.1,1.8);for(let[f,E,v]of[[19,2,"comum"],[-19,2,"ipeAmarelo"],[19,12,"palmeira"]]){let _=Jn(v,1.1,f+E);_.position.set(f,0,E),n.add(_),n.col(f,E,.6,.6,{h:4})}n.figurante(-4.6,r+1.6,Math.PI/2,{roupa:{camisa:"#2E9C6A"}}),n.ponto("bombas",0,r+2,Math.PI),n.ponto("loja",-9,-2,Math.PI),n.ponto("lojaDentro",-8,-5.3,0)}function Qf(n,t){let e=n.cidade,i=$t(5);Hn(n,Bi("#7DB86A"),0,0,44,44,3);let s=36,r=24,o=-3;Hn(n,ce(720,480,c=>{c.fillStyle="#6FAE5A",c.fillRect(0,0,720,480);for(let h=0;h<12;h++)c.fillStyle=h%2?"#79B864":"#6FAE5A",c.fillRect(h*60,0,60,480);c.fillStyle="rgba(196,148,104,.6)",c.beginPath(),c.ellipse(360,240,70,50,0,0,7),c.fill(),c.beginPath(),c.ellipse(50,240,40,80,0,0,7),c.fill(),c.beginPath(),c.ellipse(670,240,40,80,0,0,7),c.fill(),c.strokeStyle="#FFFFFF",c.lineWidth=5,c.strokeRect(10,10,700,460),c.beginPath(),c.moveTo(360,10),c.lineTo(360,470),c.stroke(),c.beginPath(),c.arc(360,240,60,0,7),c.stroke(),c.strokeRect(10,140,90,200),c.strokeRect(620,140,90,200)}),0,o,s,r,s,.02);for(let c of[-1,1]){let h=new Y;h.position.set(c*(s/2-.3),0,o),h.add(j(.07,.07,2.4,"#F4F1EA",0,1.2,-2.5,{seg:8,out:.01})),h.add(j(.07,.07,2.4,"#F4F1EA",0,1.2,2.5,{seg:8,out:.01})),h.add(j(.07,.07,5.1,"#F4F1EA",0,2.4,0,{rot:[Math.PI/2,0,0],seg:8,out:.01}));let u=new _t(new le(1.2,2.4,5),new Le({color:"#FFFFFF",transparent:!0,opacity:.2,wireframe:!0}));u.position.set(c*.6,1.2,0),h.add(u),n.add(h),n.col(c*(s/2-.3),o-2.5,.2,.2),n.col(c*(s/2-.3),o+2.5,.2,.2)}for(let[c,h,u,d]of[[0,-21.5,43,.05],[-21.5,0,.05,43],[21.5,0,.05,43],[-12,21.5,19,.05],[12,21.5,19,.05]]){let p=new _t(new le(u,3,d),new Le({color:"#8D949C",transparent:!0,opacity:.35,wireframe:!1}));p.position.set(c,1.5,h),n.add(p),n.col(c,h,u||.1,d||.1,{h:3});let g=Math.round(Math.max(u,d)/3);for(let y=0;y<=g;y++)n.add(j(.05,.05,3.1,"#6E747C",c+(u>1?-u/2+y*u/g:0),1.55,h+(d>1?-d/2+y*d/g:0),{seg:6}))}for(let c=0;c<4;c++)n.add(D(20,.35,.75,"#B87A4A",0,.3+c*.45,12.5+c*.75,{out:.008}));for(let c=0;c<6;c++)n.add(D(.12,1.9,.12,"#7A5233",-9.5+c*3.8,.95,15.3));n.col(0,13.6,20,3,{h:1.8,nome:"arquibancada"});for(let[c,h]of[[-20,-16],[20,-16],[-20,10],[20,10]]){n.add(j(.15,.2,12,"#8D949C",c,6,h,{seg:8,out:.01}));let u=new Wt({color:"#FFFFFF",emissive:"#F4F8FF",emissiveIntensity:0});e.acender(u,2);let d=bt(new le(2,1.2,.3),u,{pos:[c,12.4,h],out:.012});d.lookAt(0,0,o),n.add(d),n.col(c,h,.4,.4,{h:12})}let a=new Y;a.position.set(14,0,16.5),a.add(Zn(8,3,4,Bn("#CFE3D2"),0,1.5,0,1,{out:.014})),a.add(D(8.6,.2,5,"#E8E4DC",0,3.1,.3)),a.add(Xe(4,.6,Mt(ye("E.C. PEDRA ALTA",{fundo:"#2E7A5A"})),0,2.5,2.02)),a.add(D(.9,2.1,.06,"#2E7A5A",-2,1.05,2.02)),a.add(D(.9,2.1,.06,"#2E7A5A",2,1.05,2.02)),n.add(a),n.col(14,16.5,8,4,{h:3});let l=_e(.12,"#F4F1EA",3,.14,o+1,{out:.008});n.add(l);for(let[c,h,u]of[[-17,17,"mangueira"],[-12,18.5,"comum"]]){let d=Jn(u,1.2,c);d.position.set(c,0,h),n.add(d),n.col(c,h,.7,.7,{h:4})}n.ponto("meio",0,o,0),n.ponto("gol",-s/2+2,o,Math.PI/2),n.ponto("arquibancada",0,11.4,Math.PI)}var ol={casa:zf,sobrado:kf,casaFamilia:Gf,prefeitura:Xf,praca:Zf,escola:$f,santaCasa:Jf,rodoviaria:Kf,posto:jf,campo:Qf};for(let n of["padaria","farmacia","loterica","lanchonete","banco","mercado","sorveteria","lojaRoupas","bar","lojaMateriais"])ol[n]=Wf(n);var An=Math.PI/180,Be=.3,cv=.012,on={phi0:Math.PI/2-1,phiL:2,th0:.62,thL:1.55,W:1024,H:512},te=n=>on.W/2+n/on.phiL*on.W,Kt=n=>(n-on.th0)/on.thL*on.H,zn=n=>n/on.phiL*on.W,mn=n=>n/on.thL*on.H,Bs="#1B1420";function hv(n,t,e){n.clearRect(0,0,on.W,on.H),n.lineCap="round",n.lineJoin="round";let i=t.emo||"neutro",s=1.45,r=.31;if(t.blush||i==="feliz"||i==="apaixonado"||i==="vergonha"){n.fillStyle="rgba(240,110,110,"+(i==="vergonha"?.55:.3)+")";for(let _ of[-1,1])n.beginPath(),n.ellipse(te(_*.44),Kt(1.7),zn(.075),mn(.045),0,0,7),n.fill()}let o=Ni(Math.max(t.blink||0,i==="sono"?.55:i==="triste"||i==="choro"?.22:i==="bravo"?.25:i==="desconfiado"?.4:i==="tedio"?.5:0)),a=i==="surpreso"||i==="medo"?1.15:1;for(let _ of[-1,1]){let M=te(_*r),A=Kt(s),b=zn(.128)*a,C=mn(.158)*a;if(i==="feliz"&&!t.olhosAbertos||(t.blink||0)>.92){n.strokeStyle=Bs,n.lineWidth=11,n.beginPath(),i==="feliz"||i==="rindo"?n.arc(M,A+C*.25,b*.85,Math.PI*1.12,Math.PI*1.88):(n.moveTo(M-b*.9,A+C*.15),n.quadraticCurveTo(M,A+C*.55,M+b*.9,A+C*.15)),n.stroke();continue}n.save(),n.beginPath(),n.ellipse(M,A,b,C,0,0,7),n.clip(),n.fillStyle="#FFFFFF",n.fillRect(M-b,A-C,b*2,C*2);let S=i==="surpreso"||i==="medo"?.55:.68,x=Ni(e[0],-1,1),T=Ni(e[1],-1,1),R=M+x*b*.38,F=A+T*C*.32+C*.06;n.fillStyle="#231A26",n.beginPath(),n.ellipse(R,F,b*S,C*S*.98,0,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.ellipse(R-b*.22,F-C*.28,b*.2,C*.17,0,0,7),n.fill(),n.beginPath(),n.ellipse(R+b*.2,F+C*.22,b*.08,C*.07,0,0,7),n.fill();let w=i==="bravo"?-_*.45:i==="triste"||i==="choro"||i==="preocupado"?_*.35:0;if(o>.02||w){let L=A-C+C*2*o;n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.moveTo(M-b*1.2,A-C*1.3),n.lineTo(M+b*1.2,A-C*1.3),n.lineTo(M+b*1.2,L+Math.tan(w)*b*1.2),n.lineTo(M-b*1.2,L-Math.tan(w)*b*1.2),n.closePath(),n.fill(),n.strokeStyle=Bs,n.lineWidth=8,n.beginPath(),n.moveTo(M-b*1.1,L-Math.tan(w)*b*1.1),n.lineTo(M+b*1.1,L+Math.tan(w)*b*1.1),n.stroke()}n.restore(),n.strokeStyle=Bs,n.lineWidth=8,n.beginPath(),n.ellipse(M,A,b,C,0,0,7),n.stroke(),t.cilios&&(n.lineWidth=7,n.beginPath(),n.moveTo(M+_*b*.7,A-C*.72),n.lineTo(M+_*b*1.15,A-C*1.02),n.stroke())}if(i==="choro"||t.lagrima){n.fillStyle="rgba(120,200,255,.85)";for(let _ of[-1,1]){let M=te(_*r),A=Kt(s)+mn(.12);n.beginPath(),n.moveTo(M-zn(.02),A),n.quadraticCurveTo(M,A+mn(.22),M+zn(.02),A),n.fill(),n.beginPath(),n.ellipse(M,A+mn(.2),zn(.028),mn(.035),0,0,7),n.fill()}}let l={neutro:[0,0],feliz:[.04,-.1],rindo:[.04,-.1],triste:[.02,.45],choro:[.03,.5],bravo:[-.03,-.55],surpreso:[.09,0],medo:[.08,.4],preocupado:[.04,.38],desconfiado:[-.01,-.2],sono:[-.01,.1],vergonha:[.03,.3],determinado:[-.02,-.35],tedio:[-.01,.05],apaixonado:[.05,.2]}[i]||[0,0],c=l[0]+(t.brow||0)*.05,h=l[1];n.strokeStyle=t.sobr||Bs,n.lineWidth=t.sobrW||15;for(let _ of[-1,1]){let M=te(_*r),A=Kt(s-.2-c),b=zn(.085),C=_*h*.5;n.beginPath(),n.moveTo(M-b*Math.cos(C),A-b*Math.sin(C)*(_<0,1)),n.quadraticCurveTo(M,A-mn(.025),M+b*Math.cos(C),A+b*Math.sin(C)),n.stroke()}if(t.rugas){n.strokeStyle="rgba(90,50,40,.5)",n.lineWidth=5;for(let _ of[-1,1]){let M=te(_*(r+.17));for(let A=0;A<3;A++)n.beginPath(),n.moveTo(M,Kt(s-.05+A*.06)),n.lineTo(M+_*zn(.05),Kt(s-.07+A*.07)),n.stroke()}n.beginPath(),n.moveTo(te(-.12),Kt(1.12)),n.quadraticCurveTo(te(0),Kt(1.09),te(.12),Kt(1.12)),n.stroke()}if(t.oculosEscuros){n.fillStyle="#15121A";for(let _ of[-1,1])n.beginPath(),n.ellipse(te(_*r),Kt(s+.02),zn(.16),mn(.13),0,0,7),n.fill();n.strokeStyle="#15121A",n.lineWidth=10,n.beginPath(),n.moveTo(te(-r+.14),Kt(s)),n.lineTo(te(r-.14),Kt(s)),n.stroke(),n.fillStyle="rgba(255,255,255,.35)";for(let _ of[-1,1])n.beginPath(),n.ellipse(te(_*r-.05),Kt(s-.03),zn(.04),mn(.025),-.5,0,7),n.fill()}if(t.oculos){n.strokeStyle="#6A4A3A",n.lineWidth=8;for(let _ of[-1,1])n.beginPath(),n.ellipse(te(_*r),Kt(s),zn(.15),mn(.16),0,0,7),n.stroke();n.beginPath(),n.moveTo(te(-r+.15),Kt(s-.02)),n.quadraticCurveTo(te(0),Kt(s-.08),te(r-.15),Kt(s-.02)),n.stroke()}t.nariz&&(n.strokeStyle="rgba(60,30,30,.55)",n.lineWidth=7,n.beginPath(),n.arc(te(0),Kt(1.66),zn(.035),.2,Math.PI-.2),n.stroke());let u=t.mouth||{},d=Ni(u.open||0),p=Ni(u.round||0),g=u.smile??({feliz:.8,rindo:.9,triste:-.6,choro:-.7,bravo:-.4,medo:-.3,preocupado:-.35,apaixonado:.6,vergonha:.3,determinado:-.05,desconfiado:-.15,tedio:-.2}[i]||0),y=Kt(t.bigode?1.93:1.88),m=te(0),f=zn(.15+.05*(1-p)+(i==="rindo"?.04:0)),E=y-g*mn(.035),v=()=>{if(d<.07)n.strokeStyle=Bs,n.lineWidth=11,n.beginPath(),n.moveTo(m-f*.85,E),n.quadraticCurveTo(m,y+g*mn(.075),m+f*.85,E),n.stroke();else{let _=mn(.05+.2*d),M=f*(1-.38*p);n.beginPath(),p>.55?n.ellipse(m,y+_*.35,M*.75,_*.62,0,0,7):(n.moveTo(m-M,E),n.quadraticCurveTo(m,y+g*mn(.03)-_*.12,m+M,E),n.bezierCurveTo(m+M*.95,E+_*1.25,m-M*.95,E+_*1.25,m-M,E),n.closePath()),n.fillStyle="#5A1E2A",n.fill(),n.save(),n.clip(),d>.28&&p<.55&&(n.fillStyle="#FFFFFF",n.fillRect(m-M,E-_,M*2,_*1.18)),n.fillStyle="#E8707E",n.beginPath(),n.ellipse(m,E+_*1.05,M*.58,_*.42,0,0,7),n.fill(),n.restore(),n.strokeStyle=Bs,n.lineWidth=9,n.stroke()}};if(t.barba||v(),t.barba&&(n.fillStyle=t.barba,n.globalAlpha=.92,n.beginPath(),n.moveTo(te(-.44),Kt(1.5)),n.quadraticCurveTo(te(-.46),Kt(2.05),te(0),Kt(2.2)),n.quadraticCurveTo(te(.46),Kt(2.05),te(.44),Kt(1.5)),n.quadraticCurveTo(te(.36),Kt(1.78),te(.2),Kt(1.8)),n.quadraticCurveTo(te(0),Kt(1.72),te(-.2),Kt(1.8)),n.quadraticCurveTo(te(-.36),Kt(1.78),te(-.44),Kt(1.5)),n.fill(),n.globalAlpha=1,n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.ellipse(m,y+mn(.03),f*1.15,mn(.09+.12*d),0,0,7),n.fill(),v()),t.olheiras){n.strokeStyle="rgba(90,60,90,.45)",n.lineWidth=7;for(let _ of[-1,1])n.beginPath(),n.arc(te(_*.31),Kt(1.5),zn(.1),.35,Math.PI-.35),n.stroke()}if(t.sardas){n.fillStyle="rgba(150,80,50,.55)";for(let _ of[-1,1])for(let M=0;M<5;M++)n.beginPath(),n.arc(te(_*(.36+M%3*.05)),Kt(1.66+Math.floor(M/3)*.05+M%2*.02),4.5,0,7),n.fill()}t.bigode&&(n.fillStyle=t.bigode,n.strokeStyle=Bs,n.lineWidth=6,n.beginPath(),n.moveTo(te(0),Kt(1.76)),n.bezierCurveTo(te(.12),Kt(1.7),te(.24),Kt(1.76),te(.27),Kt(1.9)),n.bezierCurveTo(te(.17),Kt(1.84),te(.08),Kt(1.87),te(0),Kt(1.83)),n.bezierCurveTo(te(-.08),Kt(1.87),te(-.17),Kt(1.84),te(-.27),Kt(1.9)),n.bezierCurveTo(te(-.24),Kt(1.76),te(-.12),Kt(1.7),te(0),Kt(1.76)),n.fill(),n.stroke())}var tp={},kn=0,Os=(n,t)=>{let e="c"+n+t+kn;return tp[e]||(tp[e]=new Ea(n,t,kn?3:6,kn?10:18))};function ep(n,t=.82,e=36){let i=new eo(n.map(([l,c])=>new at(l,c)),e,Math.PI,Math.PI*2);i.applyMatrix4(new xe().makeScale(1,1,t));let s=i.attributes.position,r=i.attributes.uv,o=1e9,a=-1e9;for(let l=0;l<s.count;l++)o=Math.min(o,s.getY(l)),a=Math.max(a,s.getY(l));for(let l=0;l<s.count;l++)r.setY(l,(s.getY(l)-o)/(a-o));return i.computeVertexNormals(),i}var uv={magro:[[0,.5],[.14,.5],[.165,.53],[.172,.62],[.172,.72],[.165,.8],[.14,.86],[.09,.895],[.04,.905],[0,.906]],barriga:[[0,.47],[.16,.47],[.2,.52],[.225,.6],[.225,.68],[.205,.77],[.17,.845],[.11,.89],[.04,.905],[0,.906]],senhora:[[0,.5],[.15,.5],[.17,.55],[.175,.64],[.17,.74],[.16,.81],[.13,.865],[.08,.898],[0,.906]]},dv=[[0,.24],[.25,.24],[.245,.26],[.22,.36],[.19,.5],[.165,.62],[0,.62]];function al(n={}){kn=n.simples?1:0;let t=n.pele||"#C98B5E",e=n.camisa||"#E8453C",i=n.calca||"#2E4A7A",s=n.tenis||"#F4F1EA",r=new Y,o=new Y;r.add(o);let a=new Y;a.position.y=.52,o.add(a);let l=(w,L,N,z,H=cv)=>{let K=new _t(L,typeof N=="string"?Ie(N):N);return K.castShadow=!0,K.receiveShadow=!0,z&&K.position.set(...z),H&&ka(K,H),w.add(K),K},c=ce(1024,512,(w,L,N)=>{w.fillStyle=e,w.fillRect(0,0,L,N),n.estampa&&n.estampa(w,L,N)}),h=Mt(c),u=l(a,ep(uv[n.tronco||"magro"]),h,[0,-.52,0]);n.saia&&l(a,ep(dv,.86),n.saia,[0,-.52,0]),l(a,new $e(.06,.065,.1,16),t,[0,.4,0],0);let d=new Y;d.position.y=.38,a.add(d);let p=l(d,new Qt(Be,kn?24:48,kn?16:32),t,[0,Be*.86,0]);p.receiveShadow=!1;for(let w of[-1,1])l(d,new Qt(.055,16,12),t,[w*Be*.96,Be*.82,-.01]).scale.set(.6,1,.9);let g=document.createElement("canvas");g.width=on.W>>kn,g.height=on.H>>kn;let y=g.getContext("2d");kn&&y.scale(.5,.5);let m=new Qi(g);m.colorSpace=Qe,m.anisotropy=8;let f=new Wt({map:m,gradientMap:Ie("#fff").gradientMap,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),E=new _t(new Qt(Be*1.002,kn?24:48,kn?16:32,on.phi0,on.phiL,on.th0,on.thL),f);E.position.y=Be*.86,E.renderOrder=2,d.add(E);let v=n.corCabelo||"#1E1618",_=new Y;if(_.position.y=Be*.86,d.add(_),n.cabelo==="cacheado"){let w=new Qt(1,kn?8:14,kn?6:10),L=0;for(let N=0;N<70;N++){let z=Math.acos(1-2*((N+.5)/70)),H=N*2.39996,K=Math.cos(z),et=Math.sin(z),X=Math.cos(H)*et,ut=Math.sin(H)*et;if(K<.28&&ut>-.2||K<-.25||ut>.55&&K<.62||Math.abs(X)>.8&&K<.45&&ut>-.5)continue;let yt=.075+N*37%10/10*.03,W=l(_,w,v,[X*Be*.98,K*Be*.98+.01,ut*Be*.98],.009);W.scale.setScalar(yt),W.castShadow=!1,L++}}else if(n.cabelo==="tigela"||n.cabelo==="rabo"||n.cabelo==="coque"){if(l(_,new Qt(Be*1.04,40,28),v,[0,.055,-.065]),n.cabelo==="rabo"){let w=l(_,Os(.085,.26),v,[0,.06,-.42]);w.rotation.x=.75;let L=l(_,new Qt(.1,18,14),v,[0,-.07,-.5]);l(_,new Qt(.065,16,12),n.laco||"#F25C8A",[0,.22,-.31]);for(let N of[-1,1]){let z=l(_,Os(.06,.2),v,[N*.27,-.08,.02]);z.rotation.z=-N*.08}}n.cabelo==="coque"&&l(_,new Qt(.12,24,16),v,[0,.3,-.12]);for(let w=-2;w<=2;w++)l(_,new Qt(.075,16,12),v,[w*.07,.2-Math.abs(w)*.025,.2-Math.abs(w)*.02],.008).scale.set(1,.8,.7)}else if(n.cabelo==="careca")for(let w of[-1,1])for(let L=0;L<4;L++){let N=-.6-L*.35;l(_,new Qt(.07,14,10),v,[w*Math.cos(N)*Be*.93*(L<3?1:.9),-.02,Math.sin(N)*Be*.93+.12],.008).scale.set(1,1.2,1)}if(n.cabelo==="topete"){l(_,new Qt(Be*1.03,40,28,0,Math.PI*2,0,1.45),v,[0,.03,-.05]),l(_,new Qt(Be*1.035,48,32,Math.PI+.18,Math.PI-.36,0,2.3),v,[0,0,0],.008);for(let L=0;L<5;L++)l(_,new nn(.085,.22,10),v,[(L-2)*.075,.27-Math.abs(L-2)*.02,.12-Math.abs(L-2)*.02],.008).rotation.set(1.05,0,-(L-2)*.22);l(_,new Qt(.16,18,12),v,[0,.26,.05],.008).scale.set(1.2,.6,1.1)}else if(n.cabelo==="curto")l(_,new Qt(Be*1.025,40,28,0,Math.PI*2,0,1.3),v,[0,.025,-.03]),l(_,new Qt(Be*1.03,48,32,Math.PI+.18,Math.PI-.36,0,2.25),n.corCabelo2||v,[0,0,0],.008);else if(n.cabelo==="chanel"){l(_,new Qt(Be*1.06,40,28),v,[0,.05,-.07]);for(let L of[-1,1])l(_,new Qt(.2,20,14),v,[L*.25,-.12,-.06]).scale.set(.55,1.15,1);l(_,new Qt(.26,24,14),v,[0,.19,.12],.008).scale.set(1.05,.42,.6)}else if(n.cabelo==="afro"&&(l(_,new Qt(Be*1.32,40,28),v,[0,.14,-.1]).scale.set(1.08,1,1),n.faixa)){let L=l(_,new qn(Be*1.02,.035,10,40),n.faixa,[0,.1,0],.006);L.rotation.x=Math.PI/2-.25}if(n.brincos)for(let w of[-1,1])l(d,new Qt(.03,12,10),n.brincos,[w*Be*1,Be*.62,.02],.005);if(n.bone){let w=l(_,new Qt(Be*1.05,32,16,0,Math.PI*2,0,1.25),n.bone,[0,.03,-.01]),L=l(_,br(.36,.03,.22,.012),n.bone,[0,.12,n.boneTras?-.32:.3])}let M=w=>{let L=new Y;L.position.set(w*.185,.3,0),a.add(L);let N=(n.manga||"curta")==="curta";l(L,Os(N?.064:.058,N?.07:.17),e,[0,N?-.055:-.1,0]),N&&l(L,Os(.05,.15),t,[0,-.11,0]);let z=new Y;z.position.y=-.21,L.add(z),l(z,Os(.048,.14),N?t:e,[0,-.085,0]);let H=new Y;H.position.y=-.2,z.add(H);let K=new Qt(.062,20,14);return l(H,K,n.luva||t,[0,-.01,0]).scale.set(.85,1.05,.8),l(H,new Qt(.026,12,10),n.luva||t,[-w*.045,.02,.03],.007),{sh:L,el:z,hand:H}},A=M(1),b=M(-1),C=w=>{let L=new Y;L.position.set(w*.085,.52,0),o.add(L),l(L,Os(.07,.17),n.saia?t:i,[0,-.11,0]);let N=new Y;N.position.y=-.22,L.add(N),l(N,Os(.063,.16),n.meia||(n.saia?t:i),[0,-.1,0]);let z=new Y;z.position.y=-.22,N.add(z);let H=l(z,br(.13,.095,.23,.045),s,[0,-.037,.035]);return n.sola!==!1&&l(z,br(.135,.03,.235,.014),n.sola||"#FFFFFF",[0,-.075,.035],.006),{hp:L,kn:N,an:z}},S=C(1),x=C(-1),T=Dh(.36,.4);T.position.y=.006,r.add(T),n.escala&&r.scale.setScalar(n.escala),_.traverse(w=>{w.isMesh&&(w.castShadow=!1)});let R={look:[0,0],key:""},F={root:r,pelvis:o,torsoG:a,headG:d,head:p,hair:_,torso:u,hands:{L:A.hand,R:b.hand},arms:{L:A,R:b},legs:{L:S,R:x},sombra:T,place(w,L,N=0,z=0){return r.position.set(w,N,L),r.rotation.y=z,F},pose(w={}){o.position.y=w.bob||0,o.position.z=w.dz||0,a.rotation.set((w.lean||0)*An,(w.twist||0)*An,(w.tilt||0)*An),d.rotation.set((w.headX||0)*An,(w.headY||0)*An,(w.headZ||0)*An);let L=(z,H,K,et)=>{z.sh.rotation.set(-(H[0]||0)*An,(H[2]||0)*An*et,et*(H[1]??8)*An),z.el.rotation.set(-(K||0)*An,0,0)};L(A,w.shL||[0,8],w.elL??8,1),L(b,w.shR||[0,8],w.elR??8,-1);let N=(z,H,K,et)=>{z.hp.rotation.set(-(H[0]||0)*An,0,et*(H[1]||0)*An),z.kn.rotation.set((K||0)*An,0,0),z.an.rotation.set(-(H[0]||0)*An*0+(K||0)*An*-.4*(H[2]??1),0,0)};return N(S,w.hipL||[0,0],w.knL||0,1),N(x,w.hipR||[0,0],w.knR||0,-1),F},face(w={}){let L=w.look||[0,0],N=w.mouth||{},z=(K,et=20)=>Math.round((K||0)*et),H=[w.emo,z(w.blink,10),z(L[0],8),z(L[1],8),z(N.open,12),z(N.round,6),N.smile===void 0?"u":z(N.smile,8),z(w.brow,6),w.lagrima?1:0,w.olhosAbertos?1:0].join("|");return H!==R.key&&(R.key=H,hv(y,{...n.rosto,...w,pele:t,oculos:n.oculos,rugas:n.rugas,oculosEscuros:n.oculosEscuros,bigode:n.bigode,barba:n.barba,olheiras:n.olheiras,sardas:n.sardas,nariz:n.nariz,cilios:n.cilios,sobr:n.sobr,sobrW:n.sobrW},L),m.needsUpdate=!0),F},faceTo(w,L){return r.rotation.y=Math.atan2(w-r.position.x,L-r.position.z),F},hold(w,L="R"){return F.hands[L].add(w),w}};return F.estatua=(w="#A9A49C")=>{F.congelado=!0;let L=Ie(w);return r.traverse(N=>{N.isMesh&&!N.userData.isOutline&&N!==T&&N!==E&&(N.material=L)}),f.color.set("#B8B4AC"),F},F.pose({}),F.face({}),F}var ll=(n,t=0,e=1)=>{let i=Math.sin((n+t)*2.1);return{bob:i*.006*e,headX:i*1.5*e,shL:[i*2,8+i*1.5],shR:[-i*2,8+i*1.5],elL:10,elR:10}};function vo(n,t=1.8,e=1,i=0){let s=(n*t+i)*Math.PI*2,r=Math.sin(s),o=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.025*e-.012,lean:4*e,twist:r*4*e,hipL:[28*r*e,0],hipR:[-28*r*e,0],knL:Math.max(0,-o)*45*e+5,knR:Math.max(0,o)*45*e+5,shL:[-24*r*e,7],shR:[24*r*e,7],elL:18+Math.max(0,-r)*18,elR:18+Math.max(0,r)*18,headX:-2}}var np=(n={})=>({bob:-.17,dz:-.02,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[12,8],shR:[12,8],elL:30,elR:30,...n});var Eo=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},Cr={pele:"#E3AE86",cabelo:"topete",corCabelo:"#4A2A18",nariz:!0,sobr:"#3A2014"},DM={...Cr,sardas:!0,camisa:"#F6F4EE",calca:"#3D4F73",tenis:"#F08A2C",sola:"#FFFFFF",escala:.93,estampa:(n,t,e)=>{Eo("#2E9C6A",.88)(n,t,e),n.fillStyle="#2E9C6A",n.fillRect(0,0,t,e*.05);let i=t/2+120,s=e*.55;n.beginPath(),n.arc(i,s,44,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(i,s-26),n.lineTo(i+24,s+18),n.lineTo(i-24,s+18),n.closePath(),n.fill()}},LM={...Cr,sardas:!0,camisa:"#3A9AD9",calca:"#3D4F73",tenis:"#F08A2C",escala:.93,estampa:(n,t,e)=>{n.fillStyle="#F6F4EE";for(let i=0;i<6;i++)n.fillRect(0,e*(.12+i*.15),t,e*.05)}},UM={...Cr,camisa:"#E2A630",manga:"longa",calca:"#30384A",tenis:"#F4F1EA",sola:"#F08A2C",estampa:(n,t,e)=>{n.fillStyle="#C98C1E",n.fillRect(t*.36,e*.58,t*.28,e*.2),n.strokeStyle="#6E4A10",n.lineWidth=6,n.beginPath(),n.moveTo(t/2-30,0),n.lineTo(t/2-30,e*.3),n.moveTo(t/2+30,0),n.lineTo(t/2+30,e*.3),n.stroke()}},NM={...Cr,camisa:"#8E9AA8",calca:"#2F5E5A",tenis:"#E3AE86",sola:"#2D8CD6",meia:"#E3AE86",estampa:(n,t,e)=>{Eo("#7A8696")(n,t,e)}},sp={...Cr,barba:"#5A3826",olheiras:!0,camisa:"#2C6E7F",manga:"longa",calca:"#8C7656",tenis:"#3A2A20",sola:"#F4F1EA",estampa:(n,t,e)=>{n.fillStyle="#245B69",n.fillRect(t/2-4,0,8,e);for(let i=0;i<5;i++)n.fillStyle="#F4F1EA",n.beginPath(),n.arc(t/2+14,e*(.25+i*.14),6,0,7),n.fill()}},BM={...Cr,barba:"#5A3826",camisa:"#4FB8A0",calca:"#8C7656",tenis:"#F4F1EA",sola:"#2C6E7F",estampa:(n,t,e)=>{Eo("#3C9A84")(n,t,e)}},fv=(n,t,e)=>{n.fillStyle="#F2C230",n.fillRect(0,e*.62,t,e*.07);let i=t/2-120,s=e*.4;n.fillStyle="#F2C230",n.fillRect(i-46,s-30,92,60),n.fillStyle="#1F2D4E",n.font="900 26px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("CF",i,s+2),n.fillStyle="#F2C230",n.font="800 22px Inter",n.fillText("CASA FORTE",t/2+160,e*.42)},rp={pele:"#9A6646",cabelo:"curto",corCabelo:"#2B2422",barba:"#4E4642",nariz:!0,sobr:"#2B2422",sobrW:19,camisa:"#22355E",calca:"#3E3A36",tenis:"#4A3222",sola:"#2A1E16",escala:1.07,estampa:(n,t,e)=>{fv(n,t,e),Eo("#1A2848")(n,t,e)}},OM={...rp,camisa:"#B8463A",estampa:(n,t,e)=>{n.strokeStyle="#8E2F28",n.lineWidth=14;for(let i=0;i<12;i++)n.beginPath(),n.moveTo(i*90,0),n.lineTo(i*90,e),n.stroke(),n.beginPath(),n.moveTo(0,i*50),n.lineTo(t,i*50),n.stroke()}},HM={...rp,corCabelo:"#2E2A28",barba:"#8E8782",camisa:"#F4F1EA",calca:"#3E3A36",escala:1.03,estampa:(n,t,e)=>{n.fillStyle="#2E7D4F",n.fillRect(t*.3,e*.3,t*.4,e*.7),n.fillStyle="#F4F1EA",n.font="900 34px Inter",n.textAlign="center",n.fillText("MESTRE",t/2,e*.6),n.fillText("DO FOGO",t/2,e*.72)}};var pv={pele:"#6E4430",cabelo:"afro",corCabelo:"#1A1212",faixa:"#E2443A",nariz:!0,camisa:"#7B4FC9",calca:"#2A2A33",tenis:"#F2C230",sola:"#FFFFFF",escala:.95,estampa:(n,t,e)=>{n.fillStyle="#F2C230";let i=t/2,s=e*.5;n.beginPath(),n.moveTo(i+10,s-70),n.lineTo(i-30,s+6),n.lineTo(i,s+6),n.lineTo(i-14,s+70),n.lineTo(i+34,s-10),n.lineTo(i+4,s-10),n.closePath(),n.fill()}},zM={...pv,camisa:"#F6D33A",estampa:(n,t,e)=>{Eo("#2E9C4A",.86)(n,t,e),n.fillStyle="#2E9C4A",n.fillRect(0,e*.1,t,e*.04)}};var ip=[["#3E7CC8","#2A2A33","#2A1E1A","topete","#D9A07A"],["#E57AA0","#3A3550","#5A3020","chanel","#E8B48C"],["#58B26A","#2F4E86","#1C1416","afro","#8E5A3A"],["#F2994A","#3A3A44","#C9A060","curto","#F0C8A6"],["#9B6CC4","#2A2A33","#1C1416","curto","#B07A52"],["#2FB5A8","#4A3A2A","#3A2418","rabo","#E3B28E"],["#F2D24A","#2F4E86","#2A1E1A","tigela","#6E4430"],["#E8E4DE","#5A5A66","#6A5A4A","coque","#D9A07A"]],au=(n,t={})=>{let[e,i,s,r,o]=ip[n%ip.length];return al({camisa:e,calca:i,corCabelo:s,cabelo:r,pele:o,cilios:["rabo","coque","chanel"].includes(r),tenis:["#F4F1EA","#2A2A30","#E2443A"][n%3],...t})};var op=2.5,mv=8.5,gv=4.2,Pr=.1,ls=7.2;function Fr(n){let t=[];for(let a=0;a<n.length;a++){let[l,c]=n[a],[h,u]=n[(a+1)%n.length],d=Math.max(Math.abs(h-l),Math.abs(u-c));for(let p=0;p<d;p++)t.push([l+Math.sign(h-l)*p,c+Math.sign(u-c)*p])}let e=t.map(([a,l])=>[Te[a],Ue[l]]),i=[],s=[],r=e.length;for(let a=0;a<r;a++){let l=e[a],c=e[(a+1)%r],h=e[(a+2)%r],u=ap([c[0]-l[0],c[1]-l[1]]),d=ap([h[0]-c[0],h[1]-c[1]]),p=lp(u),g=lp(d),y=[l[0]+u[0]*ls+p[0],l[1]+u[1]*ls+p[1]],m=[c[0]-u[0]*ls+p[0],c[1]-u[1]*ls+p[1]],f=Math.hypot(m[0]-y[0],m[1]-y[1]);for(let M=0;M<f;M+=.5)i.push([y[0]+u[0]*M,y[1]+u[1]*M,c]),s.push(0);let E=[c[0]+d[0]*ls+g[0],c[1]+d[1]*ls+g[1]],v=u[0]*d[0]+u[1]*d[1]>.9?[(m[0]+E[0])/2,(m[1]+E[1])/2]:[c[0]+p[0]+g[0],c[1]+p[1]+g[1]],_=u[0]*d[0]+u[1]*d[1]<.9;for(let M=0;M<1;M+=1/28){let A=1-M;i.push([A*A*m[0]+2*A*M*v[0]+M*M*E[0],A*A*m[1]+2*A*M*v[1]+M*M*E[1],null]),s.push(_?1:0)}}let o=[0];for(let a=1;a<=i.length;a++){let l=i[a-1],c=i[a%i.length];o.push(o[a-1]+Math.hypot(c[0]-l[0],c[1]-l[1]))}return{pts:i,curva:s,L:o,tot:o[i.length]}}var ap=n=>{let t=Math.hypot(n[0],n[1])||1;return[n[0]/t,n[1]/t]},lp=n=>[-n[1]*op,n[0]*op];function cl(n,t){t=(t%n.tot+n.tot)%n.tot;let e=0,i=n.pts.length;for(;i-e>1;){let a=e+i>>1;n.L[a]<=t?e=a:i=a}let s=n.pts[e],r=n.pts[(e+1)%n.pts.length],o=(t-n.L[e])/Math.max(1e-6,n.L[e+1]-n.L[e]);return{x:s[0]+(r[0]-s[0])*o,z:s[1]+(r[1]-s[1])*o,ang:Math.atan2(r[0]-s[0],r[1]-s[1]),i:e}}function cp(n,t={}){let e=n.foco,i=(T,R,F)=>Math.hypot(T-e[0],R-e[1])<F;n._perto=[];let s=[Fr([[0,0],[5,0],[5,4],[0,4]]),Fr([[0,4],[5,4],[5,0],[0,0]]),Fr([[2,1],[3,1],[3,2],[2,2]]),Fr([[0,2],[5,2],[5,3],[0,3]]),Fr([[1,1],[1,3],[4,3],[4,1]]),Fr([[5,2],[0,2],[0,1],[5,1]])],r=t.carros??26,o=$t(2026),a=[];for(let T=0;T<r;T++){let R=T%s.length;a.push({r:R,s:s[R].tot*(Math.floor(T/s.length)/Math.ceil(r/s.length))+o()*8,v:0,id:T,cor:["#E2443A","#3E7CC8","#F4F1EA","#2A2A30","#9AA0A8","#F2C230","#2E9C6A","#8E6CC4","#F08A2C"][T%9],onibus:T===3})}let l=[],c=-30,h=()=>a.map(T=>[T.s,T.v]),u=a.map(()=>null),d=new Map,p=T=>T[0]+","+T[1],g=4.5,y=T=>{for(let R of a){let F=cl(s[R.r],R.s);R._p=F}for(let[R,F]of d){let w=a[F],[L,N]=R.split(",").map(Number),z=s[w.r],H=z.pts[(w._p.i+1)%z.pts.length][2];Math.hypot(w._p.x-L,w._p.z-N)>ls+.6&&!(H&&H[0]===L&&H[1]===N)&&d.delete(R)}for(let R of a){let F=s[R.r],w=R._p,L=R.onibus?12:4.2,N=F.curva[w.i]||F.curva[(w.i+6)%F.pts.length]?gv:mv;R.onibus&&(N*=.8);let z=Math.sin(w.ang),H=Math.cos(w.ang),K=1/0;for(let X of a){if(X===R)continue;let ut=X._p.x-w.x,yt=X._p.z-w.z,W=ut*z+yt*H,nt=Math.abs(-ut*H+yt*z);W>0&&W<40&&nt<2&&Math.cos(X._p.ang-w.ang)>.5&&(K=Math.min(K,W-(L+(X.onibus?12:4.2))/2))}let et=F.pts[(w.i+1)%F.pts.length][2];if(et){let X=Math.hypot(et[0]-w.x,et[1]-w.z)-(10/2+4.6)-L/2,ut=()=>{N=Math.min(N,Math.sqrt(2*g*Math.max(0,X-.2)))},yt=Va.some(([ct,Z])=>ct===et[0]&&Z===et[1]),W=p(et);if(!(d.get(W)===R.id)&&X<40){let ct=!0;if(yt){let Z=Math.abs(z)>.7?"x":"z",it=fo(T,Z,et[0],et[1]);(it==="vermelho"||it==="amarelo"&&(X+L+9)/Math.max(R.v,1)>uf(T,Z,et[0],et[1]))&&(ct=!1)}if(d.has(W)&&(ct=!1),K<X+3&&(ct=!1),ct){let Z=cl(F,R.s+X+L+2*ls+4);for(let it of a)it!==R&&it.v<1.5&&Math.cos(it._p.ang-Z.ang)>.7&&Math.hypot(it._p.x-Z.x,it._p.z-Z.z)<L/2+3.5&&(ct=!1)}ct&&X<Math.max(2.5,R.v*R.v/(2*g)+2)?d.set(W,R.id):ct||ut()}}for(let X of a){if(X===R)continue;let ut=X._p.x-w.x,yt=X._p.z-w.z,W=ut*z+yt*H,nt=Math.abs(-ut*H+yt*z),ct=Math.cos(X._p.ang-w.ang)>.5,Z=W-(L+(X.onibus?12:4.2))/2<1.2&&nt<1.6;if(W>0&&W<30&&(nt<2&&ct||Z)){let it=W-(L+(X.onibus?12:4.2))/2-2;N=Math.min(N,Math.sqrt(2*g*Math.max(0,it))+Math.min(X.v,Math.max(0,it)))}}for(let X of n.andantes){if(X.calcada||X.desligado)continue;let ut=X.pos(T),yt=ut[0]-w.x,W=ut[1]-w.z,nt=yt*z+W*H,ct=Math.abs(-yt*H+W*z);nt>0&&nt<16&&ct<2.4&&(N=Math.min(N,Math.sqrt(2*g*Math.max(0,nt-L/2-1.8))))}if(R.onibus)for(let X of n.pontosOnibus||[]){let ut=(X[0]-w.x)*z+(X[1]-w.z)*H,yt=(T+400)%90;Math.hypot(X[0]-w.x,X[1]-w.z)<16&&ut>-1&&yt<9&&(N=Math.min(N,Math.sqrt(2*g*Math.max(0,ut))))}R.v+=Math.max(-7*Pr,Math.min(2.4*Pr,N-R.v)),R.v=Math.max(0,R.v)}for(let R of a)R.s+=R.v*Pr},m=T=>{for(;c<T;)l.push(h()),y(c),c+=Pr},f=T=>{m(T+Pr);let R=(T+30)/Pr,F=Math.max(0,Math.min(l.length-2,Math.floor(R))),w=R-F;return l[F].map((L,N)=>[L[0]+(l[F+1][N][0]-L[0])*w,L[1]])};n.pontosOnibus=[[-10,2.5],[96.6-2,-30]];let E=a.map(T=>{let R=T.onibus?ou("#2E9C6A","CIRCULAR - CENTRO"):Hi(T.cor,T.id),F=[];R.traverse(L=>{L.userData.roda&&(L.userData.vivo=!0,F.push(L))});let w=_i(R);return w.userData.rodas=[],w.traverse(L=>{L.userData.roda&&w.userData.rodas.push(L)}),w.traverse(L=>{L.material&&L.material.emissive&&L.material.color&&L.material.color.getHexString()==="fff6d8"&&n.acender(L.material,2.5)}),n.cena.add(w),w});n.vivos.push(T=>{f(T).forEach(([F,w],L)=>{let N=a[L],z=cl(s[N.r],F),H=E[L];H.position.set(z.x,0,z.z),H.rotation.y=z.ang;for(let K of H.userData.rodas)K.rotation.x=F/.34})}),n.carros_debug=T=>(m(T),{carros:a.map(R=>({id:R.id,r:R.r,x:+R._p.x.toFixed(1),z:+R._p.z.toFixed(1),v:+R.v.toFixed(2),ang:+R._p.ang.toFixed(2)})),reserva:[...d]}),n.carros={pos:(T,R)=>{let F=f(R),w=cl(s[a[T].r],F[T][0]);return[w.x,w.z,w.ang]},n:a.length,objs:E};let v=t.pedestres??16,_=[],M=[];for(let T=0;T<5;T++)for(let R=0;R<4;R++)M.push([mi(T),gi(R)]);M.sort((T,R)=>Math.hypot(T[0]-e[0],T[1]-e[1])-Math.hypot(R[0]-e[0],R[1]-e[1]));for(let T=0;T<v;T++){let[R,F]=M[T%Math.min(5,M.length)],w=T%2?1:-1,L=w>0?23.7:22.8,N=au(T+3);N.root.scale.setScalar(.9+T%4*.04),n.cena.add(N.root),N.seed=T;let z=8*L,H=1+T%5*.08,K=T*37.3%z,et=(Z,it)=>{Z=(Z%z+z)%z;let ft=Math.floor(Z/(2*L)),St=Z%(2*L)-L,Gt=[[St,-it],[it,St],[-St,it],[-it,-St]][ft];return[R+Gt[0],F+Gt[1]]},X=Math.ceil(z/.5),ut=new Float32Array(X);for(let Z=0;Z<X;Z++){let it=Z*.5;if(!n.livre(...et(it,L),.3)){for(let ft of[-.5,.5,-1,1,-1.5,1.5,-2])if(!(L+ft>24.4||L+ft<22.2)&&n.livre(...et(it,L+ft),.3)){ut[Z]=ft;break}}}let yt=new Float32Array(X);for(let Z=0;Z<X;Z++){let it=0;for(let ft=-6;ft<=6;ft++){let St=ut[(Z+ft+X)%X];Math.abs(St)>Math.abs(it)&&(it=St*(1-Math.abs(ft)/7))}yt[Z]=it}let W=Z=>{Z=(Z%z+z)%z;let it=Z/.5,ft=Math.floor(it)%X,St=(ft+1)%X,Gt=it-Math.floor(it);return et(Z,L+yt[ft]*(1-Gt)+yt[St]*Gt)},nt={pos:Z=>W(K+w*H*Z),desligado:!1,calcada:!0};n.andantes.push(nt);let ct=(Z,it)=>{for(let ft of n.andantes){if(ft.calcada||ft.desligado)continue;let St=ft.pos(it),Gt=Z[0]-St[0],st=Z[1]-St[1],dt=Math.hypot(Gt,st);if(dt<1.4&&dt>1e-4){let B=(1.4-dt)/dt;Z=[Z[0]+Gt*B,Z[1]+st*B]}}return Z};n.vivos.push(Z=>{let it=ct(W(K+w*H*Z),Z),ft=W(K+w*H*(Z+.4));N.place(it[0],it[1],.15,Math.atan2(ft[0]-it[0],ft[1]-it[1])),N.pose(vo(Z+T,1.7,.9)),N.face({emo:"neutro",blink:(Z*.37+T*.13)%1<.04?1:0})}),_.push(N),n._perto.push(N)}let A=(n.figurantes||[]).filter(T=>T.nivel==="perto").sort((T,R)=>Math.hypot(T.x-e[0],T.z-e[1])-Math.hypot(R.x-e[0],R.z-e[1])),b=0;for(let T of A){if(b>=(t.figurantes??30))break;b++;let R=au(b*5+1,T.roupa||{});R.seed=b,n.cena.add(R.root),T.sentado?(R.place(T.x,T.z,T.y+(T.assento??.46)-.28,T.ry),R.sombra.visible=!1):R.place(T.x,T.z,T.y,T.ry),n._perto.push(R),n.vivos.push(F=>{T.sentado?R.pose({...np,...T.pose||{},headX:Math.sin(F*.7+b)*3}):R.pose({...ll(F,b),...T.pose||{}}),R.face({emo:T.emo||"neutro",blink:(F*.41+b*.17)%1<.04?1:0,look:[Math.sin(F*.3+b)*.6,0]})})}let C=new Y,S=[];for(let T=0;T<9;T++){let R=new Y;R.add(_e(.12,"#2A2A30",0,0,0,{seg:6}));for(let F of[-1,1]){let w=D(.36,.02,.14,"#2A2A30",F*.2,0,0);w.userData.s=F,R.add(w)}C.add(R),S.push(R)}n.cena.add(C),n.vivos.push(T=>{let R=T*.12;C.position.set(e[0]+Math.cos(R)*35,24+Math.sin(T*.3)*3,e[1]+Math.sin(R)*35),C.rotation.y=-R,S.forEach((F,w)=>{F.position.set(w%3*1.6-1.6,Math.sin(T+w)*.4,Math.floor(w/3)*1.4),F.children.forEach(L=>{L.userData.s&&(L.rotation.z=L.userData.s*Math.sin(T*14+w)*.6)})})});let x=n.pontos["casaFamilia.quintal"];if(x&&i(x.x,x.z,120)){let T=_v();n.cena.add(T.g),n.vivos.push(R=>{let F=R%16/16,w=F*Math.PI*2,L=Math.cos(w)*1.6,N=Math.sin(w)*.7,z=x.ry,H=Math.cos(z),K=Math.sin(z);T.g.position.set(x.x+L*H+N*K,.15+.02,x.z-L*K+N*H),T.g.rotation.y=z+Math.atan2(-Math.sin(w)*1.6,Math.cos(w)*.7)+Math.PI/2,T.anda(R)})}}function _v(n="#C98A4A"){let t=new Y,e=new Y;t.add(e),e.add(Q(.62,.3,.28,n,0,.42,0,{out:.012,r:.12}));let i=new Y;i.position.set(.38,.62,0),e.add(i),i.add(Q(.26,.24,.24,n,0,0,0,{out:.012,r:.1})),i.add(Q(.14,.11,.14,"#E8C090",.15,-.05,0,{out:.01,r:.05})),i.add(_e(.03,"#1B1420",.23,-.01,0));for(let o of[-1,1]){i.add(_e(.025,"#1B1420",.1,.05,o*.07));let a=Q(.06,.14,.1,"#8E5A2A",-.02,.13,o*.1,{r:.03});a.rotation.x=o*.3,i.add(a)}let s=new Y;s.position.set(-.3,.5,0),s.add(j(.025,.035,.26,n,0,.12,0,{seg:6})),s.rotation.z=.6,e.add(s);let r=[];for(let[o,a]of[[.2,.09],[.2,-.09],[-.2,.09],[-.2,-.09]]){let l=new Y;l.position.set(o,.32,a),l.add(j(.04,.035,.3,n,0,-.15,0,{seg:6})),e.add(l),r.push(l)}return{g:t,anda:o=>{s.rotation.x=Math.sin(o*14)*.5,r.forEach((a,l)=>a.rotation.z=Math.sin(o*8+(l%2?0:Math.PI)+(l>1?Math.PI:0))*.4),e.position.y=Math.abs(Math.sin(o*8))*.02,i.rotation.z=Math.sin(o*2)*.08}}}var Ir=4;function hp(n){let t=new Map,e=(r,o)=>r*100003+o;n.colisores.forEach((r,o)=>{let a=Math.floor((r.x-r.w/2)/Ir),l=Math.floor((r.x+r.w/2)/Ir),c=Math.floor((r.z-r.d/2)/Ir),h=Math.floor((r.z+r.d/2)/Ir);for(let u=a;u<=l;u++)for(let d=c;d<=h;d++){let p=e(u,d);t.has(p)||t.set(p,[]),t.get(p).push(o)}}),n.livre=(r,o,a=.22,l)=>{let c=t.get(e(Math.floor(r/Ir),Math.floor(o/Ir)));if(!c)return!0;for(let h of c){let u=n.colisores[h];if(!(l&&l(u))&&!(u.h!==void 0&&u.h<.12)&&Math.abs(r-u.x)<u.w/2+a&&Math.abs(o-u.z)<u.d/2+a)return!1}return!0},n.alturaChao=(r,o)=>{for(let a of n.pisosAltos||[])if(Math.abs(r-a.x)<a.w/2&&Math.abs(o-a.z)<a.d/2)return a.y;return i(r,o)?.15:0};let i=(r,o)=>{for(let a=0;a<5;a++)if(Math.abs(r-mi(a))<=25){for(let l=0;l<4;l++)if(Math.abs(o-gi(l))<=25)return!0}return o>127&&o<136&&Math.abs(r)<165},s=(r,o)=>{for(let a of Te)for(let l of Ue){let c=Math.abs(r-a),h=Math.abs(o-l);if(c<5&&h>5&&h<8.6||h<5&&c>5&&c<8.6)return!0}return!1};n.naQuadra=i,n.caminho=(r,o,a={})=>{let l=Math.hypot(o[0]-r[0],o[1]-r[1]),c=a.res||(l<50?.2:l<140?.4:.7),h=a.raio??.22,u=a.margem??Math.min(30,8+l*.3),d=Math.min(r[0],o[0])-u,p=Math.min(r[1],o[1])-u,g=Math.ceil((Math.abs(o[0]-r[0])+2*u)/c),y=Math.ceil((Math.abs(o[1]-r[1])+2*u)/c),m=g*y,f=new Float32Array(m);for(let X=0;X<y;X++)for(let ut=0;ut<g;ut++){let yt=d+(ut+.5)*c,W=p+(X+.5)*c;f[X*g+ut]=n.livre(yt,W,h)?i(yt,W)?1:s(yt,W)?1.5:a.rua?1.2:25:0}let E=X=>{let ut=Math.max(0,Math.min(g-1,Math.floor((X[0]-d)/c)));return Math.max(0,Math.min(y-1,Math.floor((X[1]-p)/c)))*g+ut},v=E(r),_=E(o);f[v]=f[v]||1,f[_]=f[_]||1;let M=new Float32Array(m).fill(1/0),A=new Int32Array(m).fill(-1),b=new Uint8Array(m),C=[],S=(X,ut)=>{C.push([ut,X]);let yt=C.length-1;for(;yt>0;){let W=yt-1>>1;if(C[W][0]<=C[yt][0])break;[C[W],C[yt]]=[C[yt],C[W]],yt=W}},x=()=>{let X=C[0],ut=C.pop();if(C.length){C[0]=ut;let yt=0;for(;;){let W=2*yt+1,nt=W+1,ct=yt;if(W<C.length&&C[W][0]<C[ct][0]&&(ct=W),nt<C.length&&C[nt][0]<C[ct][0]&&(ct=nt),ct===yt)break;[C[ct],C[yt]]=[C[yt],C[ct]],yt=ct}}return X},T=_%g,R=_/g|0,F=X=>Math.hypot(X%g-T,(X/g|0)-R);M[v]=0,S(v,F(v));let w=!1,L=0,N=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;C.length&&L++<3e6;){let[,X]=x();if(b[X])continue;if(b[X]=1,X===_){w=!0;break}let ut=X%g,yt=X/g|0;for(let[W,nt,ct]of N){let Z=ut+W,it=yt+nt;if(Z<0||it<0||Z>=g||it>=y)continue;let ft=it*g+Z,St=f[ft];if(!St||b[ft]||W&&nt&&(!f[yt*g+Z]||!f[it*g+ut]))continue;let Gt=M[X]+ct*St;Gt<M[ft]&&(M[ft]=Gt,A[ft]=X,S(ft,Gt+F(ft)))}}if(!w){console.warn("[cidade] caminho n\xE3o encontrado",r,o);let X=[r,o];return X.falhou=!0,X}let z=[];for(let X=_;X!==-1;X=A[X])z.push([d+(X%g+.5)*c,p+((X/g|0)+.5)*c]);z.reverse(),z[0]=r,z[z.length-1]=o;let H=(X,ut)=>{let yt=Math.hypot(ut[0]-X[0],ut[1]-X[1]),W=Math.ceil(yt/(c*.5)),nt=i(X[0],X[1]);for(let ct=1;ct<W;ct++){let Z=X[0]+(ut[0]-X[0])*ct/W,it=X[1]+(ut[1]-X[1])*ct/W;if(!n.livre(Z,it,h*.95)||!i(Z,it)&&!s(Z,it)&&!a.rua)return!1}return!0},K=[z[0]],et=0;for(;et<z.length-1;){let X=z.length-1;for(;X>et+1&&!H(z[et],z[X]);)X--;K.push(z[X]),et=X}return K},n.ponto=r=>{if(Array.isArray(r))return r;let o=n.pontos[r];return o?[o.x,o.z]:(console.warn("[cidade] ponto desconhecido: "+r+". Pontos: "+Object.keys(n.pontos).slice(0,40).join(", ")),[0,0])},n.andar=(r,o,a=0,l={})=>{let c=[];for(let M=0;M<o.length-1;M++){let A=n.ponto(o[M]),b=n.ponto(o[M+1]),C=l.direto?[A,b]:n.caminho(A,b,l);c.length&&C.shift(),c.push(...C)}o.length===1&&c.push(n.ponto(o[0]));let h=[0];for(let M=1;M<c.length;M++)h.push(h[M-1]+Math.hypot(c[M][0]-c[M-1][0],c[M][1]-c[M-1][1]));let u=h[h.length-1],d=l.vel||(l.correr?3.2:1.25),p=Math.min(1,u/d),g=u/d+p,y=M=>{let A=M-a;return A<=0?0:A>=g?u:A<p?d*A*A/(2*p):A<g-p?d*(A-p/2):u-d*(g-A)**2/(2*p)},m=M=>{let A=M-a;return A<=0||A>=g?0:Math.min(1,A/p,(g-A)/p)},f=M=>{let A=1;for(;A<h.length-1&&h[A]<M;)A++;let b=(M-h[A-1])/Math.max(1e-6,h[A]-h[A-1]);return[c[A-1][0]+(c[A][0]-c[A-1][0])*Math.min(1,b),c[A-1][1]+(c[A][1]-c[A-1][1])*Math.min(1,b)]},E={k:r,pts:c,t0:a,dur:g,fim:a+g,tot:u,pos:M=>f(y(M)),rumo:M=>{let A=y(M),b=f(Math.max(0,A-.35)),C=f(Math.min(u,A+.6));return Math.abs(C[0]-b[0])+Math.abs(C[1]-b[1])<1e-4?null:Math.atan2(C[0]-b[0],C[1]-b[1])}},v=l.olharIni??(c.length>1?Math.atan2(c[1][0]-c[0][0],c[1][1]-c[0][1]):0),_=c.length>1?Math.atan2(c.at(-1)[0]-c.at(-2)[0],c.at(-1)[1]-c.at(-2)[1]):v;return r&&n.vivos.push(M=>{if(E.desligado)return;let A=E.pos(M),b=M>a&&M<E.fim,C=n.alturaChao(A[0],A[1]),S=E.rumo(M),x=M<=a?v:M>=E.fim?l.olharFim??_:S??_;r.place(A[0],A[1],C,x);let T=m(M);l.semPose||r.pose(b?l.correr?vo(M,2.6,1.3*T):vo(M,1.8,T):ll(M,r.seed||0))}),n.andantes.push(E),E},n.vivos.push(r=>{for(let o in n.portas){let a=n.portas[o];if(!a.auto||!a.mundo)continue;let l=0;for(let c of n.andantes){if(c.desligado)continue;let h=c.pos(r),u=Math.hypot(h[0]-a.mundo[0],h[1]-a.mundo[1]);l=Math.max(l,1-Math.max(0,Math.min(1,(u-1)/1.4)))}a.abrir(Math.max(a.abertaFixa??0,l*l*(3-2*l)))}})}var Mo={casaFrente:["casaFamilia",[-3.5,2.6,24.3],[.4,1.8,5.5],40,15,"Fachada da casa da fam\xEDlia vista da Rua das Flores"],portao:["casaFamilia",[-.2,1.6,13.5],[-2.6,1.3,7],45,15,"Port\xE3o e garagem com o carro"],sala:["casaFamilia",[-1.6,1.6,5.15],[-1.6,.95,1.6],62,15,"Sala: sof\xE1, TV, estante, ventilador"],salaTV:["casaFamilia",[-.6,1.3,2.4],[-4.4,.9,3.8],50,20,"Sala vista do lado da TV (sof\xE1 de frente)"],cozinha:["casaFamilia",[.3,1.6,-2.9],[-4.3,1,.1],55,12,"Cozinha: pia, fog\xE3o, geladeira, mesa"],mesaJantar:["casaFamilia",[-.2,1.5,.9],[-2.4,.8,-1.8],50,19.5,"Mesa de jantar da fam\xEDlia"],quartoFilho:["casaFamilia",[1.7,1.75,5],[4,.75,1.9],62,16,"Quarto do filho: cama, computador, p\xF4steres"],quartoCasal:["casaFamilia",[3.7,1.6,-2.4],[1.2,.7,-5],55,21,"Quarto do casal"],banheiro:["casaFamilia",[2.75,1.8,.12],[1.2,.7,-1.55],75,9,"Banheiro"],servico:["casaFamilia",[-4,1.6,-3.6],[.4,.9,-5.8],55,10,"\xC1rea de servi\xE7o: tanque e m\xE1quina"],quintal:["casaFamilia",[-4.2,1.7,-7],[2.8,.8,-10.2],50,17,"Quintal com churrasqueira, mesa e cachorro"],praca:["praca",[24,9,30],[0,2,4],45,10,"Pra\xE7a da Matriz vista de cima, de lado"],pracaChao:["praca",[11,1.7,23],[-1,2.5,6],45,16,"Pra\xE7a no n\xEDvel dos olhos: coreto, \xE1rvores, bancos"],igreja:["praca",[5,1.7,7],[0,6,-10],55,9,"Igreja Matriz de frente"],igrejaDentro:["praca",[1.2,1.7,-6.5],[0,2.4,-19],60,10,"Dentro da igreja: bancos, altar, vitrais"],coreto:["praca",[-9,2.2,19],[0,2.8,11],45,17.5,"Coreto"],fonte:["praca",[5.5,1.3,7],[0,1.2,1.5],45,11,"Fonte da pra\xE7a"],parquinho:["praca",[-10.5,1.65,20.8],[-14.5,.9,12],55,16,"Parquinho"],avenida:[null,[-2,6,0],[-60,1.2,0],45,15,"Avenida Brasil com as lojas"],padaria:["padaria",[2.6,1.65,9],[-1.5,1.1,0],58,7.5,"Dentro da padaria"],padariaFrente:["padaria",[1.5,1.6,17],[0,2.6,10],45,7.5,"Fachada da padaria"],farmacia:["farmacia",[3.2,1.65,9],[-1,1.1,-1],58,15,"Dentro da farm\xE1cia"],loterica:["loterica",[3.5,1.65,9.5],[-1,1.4,0],58,14,"Dentro da lot\xE9rica"],lanchonete:["lanchonete",[3.5,1.65,9.5],[-1.2,1.1,0],58,13,"Dentro da lanchonete"],banco:["banco",[4,1.7,9.5],[-1,1.2,0],58,11,"Dentro do banco: caixas, fila, senha"],mercado:["mercado",[8.5,1.8,9.5],[-2,1.1,0],58,10,"Dentro do supermercado"],sorveteria:["sorveteria",[3.5,1.65,9.5],[-.5,1.1,0],58,15,"Dentro da sorveteria"],lojaRoupas:["lojaRoupas",[3.5,1.65,9.5],[-1.5,1.1,0],58,15,"Dentro da loja de roupas"],bar:["bar",[-3.6,1.7,9.6],[1.5,1,1],58,19.5,"Dentro do bar"],prefeitura:["prefeitura",[5,1.6,22],[0,5,6],50,11,"Prefeitura com colunas e bandeiras"],escola:["escola",[6,1.7,30],[0,3,18],45,7.2,"Port\xE3o da escola"],salaDeAula:["escola",[-10.6,2.1,-11.7],[-19,1.1,-17],62,9,"Sala de aula com alunos"],quadra:["escola",[-9,2.6,4],[10,.8,8],55,15,"Quadra coberta da escola"],hospital:["santaCasa",[-8,1.7,21],[2,3,7],45,14,"Fachada da Santa Casa com a ambul\xE2ncia"],salaEspera:["santaCasa",[2.5,1.7,4.8],[-12,1,-1],60,14,"Sala de espera do hospital"],enfermaria:["santaCasa",[4,1.7,-4.5],[10,.8,-9],60,22,"Enfermaria com leitos"],consultorio:["santaCasa",[-4.3,1.7,-4.6],[-12,1,-8],60,10,"Consult\xF3rio"],rodoviaria:["rodoviaria",[-.8,1.7,25],[0,3,8],48,16,"Rodovi\xE1ria"],plataforma:["rodoviaria",[17.5,2,-3.9],[-8,1.5,-9],55,16,"Plataforma com os \xF4nibus"],posto:["posto",[12,1.7,24],[0,2.5,8],45,18,"Posto de gasolina"],campo:["campo",[0,3.4,15],[0,1,-4],50,16.5,"Campo de futebol de v\xE1rzea"],cidadeAerea:[null,[210,150,230],[0,0,0],45,15,"A cidade inteira de cima"],pedraAlta:[null,[36,30,-112],[60,135,-540],42,16.5,"A Pedra Alta vista da cidade"],lago:[null,[5,3,178],[-35,6,132],50,17.4,"Orla do lago vista da \xE1gua: deck, quiosques, palmeiras e a cidade atr\xE1s"],ruaDasFlores:[null,[-89,5,60],[-40,1.2,61.5],45,15,"Rua das Flores (rua da casa da fam\xEDlia)"],noitePraca:["praca",[22,6,28],[0,2.5,6],45,20.5,"Pra\xE7a \xE0 noite, com tudo aceso"]},lu=null,yv=new Set(["sala","salaTV","cozinha","mesaJantar","quartoFilho","quartoCasal","banheiro","servico","igrejaDentro","padaria","farmacia","loterica","lanchonete","banco","mercado","sorveteria","lojaRoupas","bar","salaDeAula","salaEspera","enfermaria","consultorio"]);function vv(n){let t=Mo[n];if(!t)return null;lu=lu||Ga();let e=t[0]?lu.find(o=>o.nome===t[0]):null,i=o=>{if(!e)return o.slice();let a=ci(e,o[0],o[2]);return[a[0],o[1]+.15,a[1]]},s=i(t[1]),r=i(t[2]);return{cam:s,alvo:r,fov:t[3],hora:t[4],texto:t[5],dentro:yv.has(n),foco:e?[e.x,e.z]:[r[0]*.3+s[0]*.7,r[2]*.3+s[2]*.7]}}var Dr=new Proxy({},{get:(n,t)=>typeof t=="string"?vv(t):void 0,ownKeys:()=>Object.keys(Mo),getOwnPropertyDescriptor:(n,t)=>Mo[t]?{enumerable:!0,configurable:!0}:void 0,has:(n,t)=>t in Mo}),Ev=Object.fromEntries(Object.entries(Mo).map(([n,t])=>[n,t[5]]));function up(n,t={}){if(t.vista&&Dr[t.vista]){let o=Dr[t.vista];t={foco:o.foco,hora:o.hora,dentro:o.dentro,...t}}let e=t.foco||[0,-30],i=t.raio??70,s={cena:n,foco:e,raio:i,colisores:[],pontos:{},portas:{},vivos:[],postes:[],lugares:{},tex:qh,_acesos:[],_noiteFn:[],andantes:[],acender:(o,a=1)=>s._acesos.push([o,a]),aNoite:o=>s._noiteFn.push(o)};_f(s,t),pf(s),df(s),mf(s),gf(s);let r=o=>Math.max(0,Math.hypot(o.x-e[0],o.z-e[1])-Math.hypot(o.w,o.d)/2);for(let o of Ga()){let a=r(o),l=a<i?"perto":a<i*2.2?"medio":"longe",c=cf(s,{...o,y:.15});c.nivel=l,(ol[o.tipo]||ol.casa)(c,l),s.lugares[o.nome||o.tipo+o.seed]=o,n.add(t.fundir===!1?c.g:_i(c.g))}return hp(s),s.vista=o=>Dr[o],t.vida!==!1&&cp(s,t),s.hora(t.hora??15),s.focar(e[0],e[1]),t.dentro&&s.luzDentro(1),s.atualizar=(o,a)=>{t.horaAnda&&s.hora((t.hora??15)+o*t.horaAnda/3600);for(let l of s.vivos)l(o);if(a&&s._perto)for(let l of s._perto){let c=l.root.position;l.root.visible=Math.hypot(c.x-a.position.x,c.z-a.position.z)>2.4||Math.abs(c.y+1-a.position.y)>2.2}if(a){let l=new O;a.getWorldDirection(l);let c=Math.max(6,Math.min(40,a.position.y*1.2+10));s.focar(a.position.x+l.x*c,a.position.z+l.z*c),s.ceu.position.copy(a.position)}},(n.userData.vida=n.userData.vida||[]).push(o=>s.atualizar(o)),s}var Fn=new URLSearchParams(location.search),Gn=(n,t)=>Fn.has(n)?+Fn.get(n):t,Hs=Dr[Fn.get("vista")]||null,Mv=Hs?Hs.cam:[Gn("cx",60),Gn("cy",40),Gn("cz",60)],hl=Hs?Hs.alvo:[Gn("tx",0),Gn("ty",0),Gn("tz",0)],xv=performance.now(),Lr=new Oa(document.getElementById("c")),ti=nf(0,1e6,"#BFE3F7",Gn("fov",Hs?.fov||40));ti.camera.near=.1;ti.camera.far=3e3;ti.camera.updateProjectionMatrix();var Qn=up(ti.scene,{foco:Fn.has("fx")?[Gn("fx"),Gn("fz")]:[hl[0],hl[2]],hora:Gn("hora",Hs?.hora??15),raio:Gn("raio",70),vida:Fn.get("vida")!=="0",dentro:Fn.has("dentro")?Fn.get("dentro")==="1":Hs?.dentro});Lr.add(ti);ti.camera.position.set(...Mv);ti.camera.lookAt(...hl);if(Fn.get("andar")){let n=al(sp);ti.scene.add(n.root),window.__rota=Qn.andar(n,Fn.get("andar").split(","),0)}if(Fn.get("checar")){let n=Gn("raio",70),t=Qn.foco,e=a=>Math.hypot(a.x-t[0],a.z-t[1])<n*.8,i=(Qn.figurantes||[]).filter(a=>!a.sentado&&a.nivel==="perto"&&!Qn.livre(a.x,a.z,.12)).map(a=>[a.lote,+a.x.toFixed(1),+a.z.toFixed(1)]),s=Object.entries(Qn.pontos).filter(([a,l])=>e(l)&&!Qn.livre(l.x,l.z,.15)).map(([a])=>a),r=[],o=Fn.get("checar")==="1"?[]:Fn.get("checar").split(",");for(let a=0;a<o.length-1;a++){let l=Qn.ponto(o[a]),c=Qn.ponto(o[a+1]),h=Qn.caminho(l,c);r.push([o[a],o[a+1],h.falhou?"FALHOU":"ok",h.length])}window.__check={figurantesPresos:i,pontosPresos:s,rotas:r}}var fp=0;ti.scene.traverse(n=>{n.isMesh&&fp++});var dp=Gn("t",10);ti.update=n=>(Qn.atualizar(n,ti.camera),sf({}));if(Fn.get("livre")){let n=new La(ti.camera,Lr.r.domElement);n.target.set(...hl),n.update();let t=dp,e=()=>{t+=1/30,Lr.render(t),requestAnimationFrame(e)};e()}else Lr.render(dp);window.__info={check:window.__check,malhas:fp,colisores:Qn.colisores.length,ms:Math.round(performance.now()-xv),draw:Lr.r.info.render.calls,tri:Lr.r.info.render.triangles};Fn.get("expor")&&(window.__C=Qn,window.__sinal=fo);window.pronto=!0;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
